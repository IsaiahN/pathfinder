"""Export the sanitized public corpus for the GitHub Pages SPA.

Reads Registry/Questions.csv and the solution folders, then writes:
  data/problems.json     1,300 records for the browser
  data/validation.json   empty seed (the sync Action overwrites it)
  data/history.json      empty seed (the sync Action overwrites it)

Never reads Leads/ or Outreach/ and never writes email addresses.

Usage: python Scripts/export_public_data.py
"""

import csv
import json
import re
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "Registry"
SOLUTIONS = ROOT / "Solutions"
DATA = ROOT / "data"

FIG_RE = re.compile(r"Fig\s*(\d+)\s*:", re.IGNORECASE)
MODE_RE = re.compile(r"`(general|specified|grounded)`", re.IGNORECASE)


def read_csv(path):
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8", newline="") as fh:
        return list(csv.DictReader(fh))


def first_paragraph(text, limit=900):
    """First substantive prose block under the first section heading."""
    lines = [ln.strip() for ln in text.splitlines()]
    start = 0
    for i, ln in enumerate(lines):
        if ln.startswith("## "):
            start = i + 1
            break
    out = []
    for ln in lines[start:]:
        if not ln:
            if out:
                break
            continue
        if ln.startswith(("#", "---", "**", ">", "|", "`")) or re.match(r"^[-*] |^\d+\. ", ln):
            if out:
                break
            continue
        out.append(ln)
        if len(" ".join(out)) >= limit:
            break
    result = re.sub(r"\*\*|__|`", "", " ".join(out))
    return result[:limit]


def section_text(text, heading):
    """Return the body of a '## HEADING ...' section (heading may have a suffix)."""
    m = re.search(r"(?mi)^##\s+" + re.escape(heading) + r"\b", text)
    if not m:
        return ""
    rest = text[m.end():]
    # Drop the remainder of the heading line, e.g. "(from the figures)".
    newline = rest.find("\n")
    rest = rest[newline + 1:] if newline >= 0 else ""
    nxt = re.search(r"(?m)^##\s+", rest)
    return (rest[:nxt.start()] if nxt else rest).strip()


def mode_of(readme_text):
    head = readme_text[:2500]
    m = MODE_RE.search(head)
    return m.group(1).lower() if m else "specified"


def main():
    questions = read_csv(REGISTRY / "Questions.csv")
    if not questions:
        questions = [
            {k: r.get(k, "") for k in ("id", "category_slug", "section", "question_text")}
            for r in read_csv(REGISTRY / "question_registry.csv")
        ]

    sol_stats = {r["id"]: r for r in read_csv(REGISTRY / "Solutions.csv")}
    folders = {}
    for folder in SOLUTIONS.iterdir() if SOLUTIONS.exists() else []:
        if folder.is_dir():
            folders[folder.name.split("__")[0]] = folder

    problems = []
    for q in questions:
        qid = q.get("id", "")
        folder = folders.get(qid)
        stats = sol_stats.get(qid, {})
        rec = {
            "id": qid,
            "question": q.get("question_text", ""),
            "section": q.get("section", ""),
            "category": q.get("category_slug", ""),
            "mode": "unspecified",
            "word_count": 0,
            "fig_citations": 0,
            "world_sources": 0,
            "figures_used": [],
            "tether_summary": "",
            "verdict_summary": "",
            "solution_status": "pending",
            "solution_path": "",
            "attempts": [],
        }
        if folder:
            rec["solution_path"] = str(folder.relative_to(ROOT)).replace("\\", "/")
            rec["word_count"] = int(stats.get("word_count", 0) or 0)
            rec["fig_citations"] = int(stats.get("fig_citations", 0) or 0)
            rec["world_sources"] = int(stats.get("world_sources", 0) or 0)

            all_md = []
            for path in sorted(folder.glob("*.md")):
                try:
                    all_md.append(path.read_text(encoding="utf-8", errors="replace"))
                except OSError:
                    pass
            joined = "\n".join(all_md)
            rec["figures_used"] = sorted({"Fig " + n for n in FIG_RE.findall(joined)},
                                         key=lambda s: int(re.findall(r"\d+", s)[0]))

            readme = folder / "README.md"
            if readme.exists():
                rec["mode"] = mode_of(readme.read_text(encoding="utf-8", errors="replace"))

            tether = folder / "07_the_tether_answer.md"
            if tether.exists():
                rec["tether_summary"] = first_paragraph(
                    tether.read_text(encoding="utf-8", errors="replace"))

            watson = folder / "09_watson_answer.md"
            if watson.exists():
                wt = watson.read_text(encoding="utf-8", errors="replace")
                rec["verdict_summary"] = first_paragraph(section_text(wt, "VERDICT"), 700)

            attempts_dir = folder / "attempts"
            if attempts_dir.exists():
                for rd in sorted(attempts_dir.glob("round-*")):
                    if rd.is_dir():
                        rec["attempts"].append({
                            "round": rd.name,
                            "path": str(rd.relative_to(ROOT)).replace("\\", "/"),
                        })

            rec["solution_status"] = (
                "complete" if rec["word_count"] > 5000 and rec["world_sources"] > 0 else "pending"
            )
        problems.append(rec)

    generated_at = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    DATA.mkdir(parents=True, exist_ok=True)
    (DATA / "problems.json").write_text(
        json.dumps({"generated_at": generated_at, "count": len(problems), "problems": problems},
                   ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    for name, payload in (("validation.json", {"generated_at": generated_at, "problems": {}}),
                          ("history.json", {"generated_at": generated_at, "events": []})):
        target = DATA / name
        if not target.exists():
            target.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Figure manifest: the SPA uses this to open clickable figure pills.
    figures = []
    fig_dir = ROOT / "FRAMEWORK" / "figures"
    if fig_dir.exists():
        for svg in sorted(fig_dir.glob("*.svg")):
            m = re.search(r"Figure[_\s]+(\d+)", svg.name, re.IGNORECASE)
            if not m:
                continue
            num = int(m.group(1))
            figures.append({
                "fig": f"Fig {num}",
                "number": num,
                "file": svg.name,
                "url": "FRAMEWORK/figures/" + svg.name.replace(" ", "%20").replace("(", "%28").replace(")", "%29"),
                "title": re.sub(r"^Figure[_\s]+\d+[_\s]*", "", svg.stem).replace("_", " ").strip(),
            })
    (DATA / "figures.json").write_text(
        json.dumps({"generated_at": generated_at, "figures": figures}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8")

    complete = sum(1 for p in problems if p["solution_status"] == "complete")
    print(f"Wrote {DATA / 'problems.json'} — {len(problems)} problems, {complete} complete")


if __name__ == "__main__":
    main()
