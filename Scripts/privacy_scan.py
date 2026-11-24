"""Pre-commit privacy scan: fail if any email address would be committed.

Checks every tracked-candidate file except the private directories that .gitignore
excludes (Leads/, Outreach/, Logs/) and tool caches. The GitHub Actions bot
noreply address is allowed because it is a machine identity, not personal data.

Usage: python Scripts/privacy_scan.py
Exit 0 = clean, 1 = email addresses found.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EXCLUDE_DIRS = {
    ".git", "Leads", "Outreach", "Logs", "node_modules",
    "__pycache__", ".venv", "venv", ".pytest_cache",
}
EMAIL_RE = re.compile(r"[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}")
ALLOW = ("users.noreply.github.com",)

TEXT_EXT = {".md", ".csv", ".txt", ".json", ".yml", ".yaml", ".py", ".js",
            ".css", ".html", ".lean", ".nojekyll", ""}


def main():
    hits = []
    scanned = 0
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        if any(part in EXCLUDE_DIRS for part in path.relative_to(ROOT).parts):
            continue
        if path.suffix.lower() not in TEXT_EXT:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        scanned += 1
        for n, line in enumerate(text.splitlines(), 1):
            for m in EMAIL_RE.finditer(line):
                addr = m.group(0)
                if any(addr.lower().endswith(suffix) for suffix in ALLOW):
                    continue
                hits.append((path.relative_to(ROOT), n, addr))

    if hits:
        print(f"PRIVACY FAIL — {len(hits)} email address(es) found in {scanned} files:")
        for rel, n, addr in hits[:50]:
            print(f"  {rel}:{n}: {addr}")
        if len(hits) > 50:
            print(f"  ... and {len(hits) - 50} more")
        return 1
    print(f"PRIVACY OK — no personal email addresses in {scanned} public-candidate files")
    return 0


if __name__ == "__main__":
    sys.exit(main())
