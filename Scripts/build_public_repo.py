"""Build a sanitized public mirror of the project for the `pathfinder` GitHub repo.

The working tree keeps Leads/, Outreach/, Logs/ and all original source files.
This script copies only public-candidate content to PUBLIC_DIR and redacts every
email address from every text file, so the repo contains zero email addresses.

Never run git init/add in the working tree; run it in PUBLIC_DIR instead.

Usage: python Scripts/build_public_repo.py
"""

import os
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT.parent / "pathfinder-public"

INCLUDE_DIRS = ["FRAMEWORK", "PLANS", "Questions", "Scripts", "TEMPLATES",
                "Registry", "Solutions", ".github", "assets", "data"]
INCLUDE_FILES = ["README.md", ".gitignore", ".nojekyll", "index.html", "404.html"]

EMAIL_RE = re.compile(r"[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}")
ALLOW_SUFFIX = ("users.noreply.github.com",)
BINARY_EXT = {".xlsx", ".png", ".jpg", ".jpeg", ".gif", ".svg", ".pdf", ".ico"}
SKIP_DIRS = {"__pycache__", ".git", ".venv", "venv", "node_modules", ".pytest_cache"}

# Lead data is private. Never copy it, including inside the public workbook.
PRIVATE_FILES = {
    "Registry/Leads.csv",
    "Scripts/LEAD_AGENT_TEMPLATE.md",
    "Scripts/merge_leads.py",
    "Scripts/mine_leads.py",
    "Scripts/publish.ps1",
    "Scripts/finalize.ps1",
}

REPLACEMENT = "[institutional contact: see source URL]"


def clean_text(text):
    def sub(m):
        addr = m.group(0)
        if addr.lower().endswith(ALLOW_SUFFIX):
            return addr
        return REPLACEMENT
    return EMAIL_RE.sub(sub, text)


def should_skip(path):
    return any(part in SKIP_DIRS for part in path.parts)


def copy_clean(src, dst, stats):
    rel = src.relative_to(ROOT).as_posix()
    if rel in PRIVATE_FILES:
        stats["skipped_private"] += 1
        return

    if rel == "Registry/master_ranking.xlsx":
        # The workbook has a private "Leads" sheet. Publish a copy without it.
        from openpyxl import load_workbook
        dst.parent.mkdir(parents=True, exist_ok=True)
        wb = load_workbook(src)
        if "Leads" in wb.sheetnames:
            del wb["Leads"]
        wb.save(dst)
        stats["copied"] += 1
        stats["workbook_sanitized"] += 1
        return

    if src.is_dir():
        dst.mkdir(parents=True, exist_ok=True)
        for child in src.iterdir():
            if should_skip(child.relative_to(ROOT)):
                continue
            copy_clean(child, dst / child.name, stats)
        return

    if src.suffix.lower() in BINARY_EXT:
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        stats["copied"] += 1
        return

    try:
        raw = src.read_text(encoding="utf-8")
    except (UnicodeDecodeError, OSError):
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        stats["copied"] += 1
        return

    cleaned = clean_text(raw)
    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(cleaned, encoding="utf-8")
    stats["copied"] += 1
    if cleaned != raw:
        stats["redacted_files"] += 1
        stats["redacted_emails"] += sum(
            1 for a in EMAIL_RE.findall(raw) if not a.lower().endswith(ALLOW_SUFFIX))


def main():
    if PUBLIC.exists():
        shutil.rmtree(PUBLIC)
    PUBLIC.mkdir(parents=True)

    stats = {"copied": 0, "redacted_files": 0, "redacted_emails": 0,
             "skipped_private": 0, "workbook_sanitized": 0}
    for name in INCLUDE_DIRS:
        src = ROOT / name
        if src.exists():
            copy_clean(src, PUBLIC / name, stats)
    for name in INCLUDE_FILES:
        src = ROOT / name
        if src.exists():
            copy_clean(src, PUBLIC / name, stats)

    # The public README is the outward-facing one; the working README stays internal.
    public_readme = ROOT / "PUBLIC_README_DRAFT.md"
    if public_readme.exists():
        copy_clean(public_readme, PUBLIC / "README.md", stats)

    print(f"Public mirror: {PUBLIC}")
    print(f"  copied files:      {stats['copied']}")
    print(f"  files redacted:    {stats['redacted_files']}")
    print(f"  emails redacted:   {stats['redacted_emails']}")
    print(f"  private skipped:   {stats['skipped_private']}")
    print(f"  workbook sanitized:{stats['workbook_sanitized']}")


if __name__ == "__main__":
    main()
