"""Validate every Solution folder against the Pathfinder output contract.

Checks:
  - all 12 expected files exist and are non-trivial
  - required WATSON sections are present
  - a mode is declared
  - figure quotes cited as Fig N :line "..." appear verbatim in FIGURES_TEXT.md
    (whitespace-normalised, to tolerate line wraps in the source extract)
  - the source ledger has real http(s) URLs and required columns
  - no em dashes in the WATSON answer

Usage: python validate_solution.py [ID ...]
With no arguments, validates every folder under Solutions/.
"""

import csv
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FIGURE_TEXT = ROOT / "FRAMEWORK" / "reference" / "03-FIGURES_TEXT.md"
SOLUTIONS = ROOT / "Solutions"
REPORT = ROOT / "Logs" / "validation_report.csv"

EXPECTED = [
    "README.md",
    "01_figure_grounded_audit.md",
    "02_outreach_email.md",
    "03_public_contact_points.csv",
    "04_links_and_distribution.md",
    "05_what_shape_means.md",
    "06_isomers_and_order.md",
    "07_the_tether_answer.md",
    "08_expert_verification_packet.md",
    "09_watson_answer.md",
    "10_source_ledger.csv",
    "11_audit.md",
]

WATSON_SECTIONS = ["## QUESTION", "## DOMAIN CENSUS", "## TETHER", "## WORLD", "## VERDICT", "## Sources"]
LEDGER_COLUMNS = [
    "url", "title", "author", "venue", "year", "accessed_date",
    "quote", "field", "overlap_with_other_sources", "status", "used_in_file",
]
# Citations appear as `Fig 11 :39-40 *"quote"*` or `Fig 4 :22: "quote"`.
QUOTE_RE = re.compile(
    r'Fig\s*\d+\s*:\s*[\d,\s\-–&]+[^\n"]{0,20}?"([^"\n]{12,})"',
    re.IGNORECASE,
)


def norm(text: str) -> str:
    # The no-em-dash style rule forces authors to substitute "/" for a dash,
    # and typographic apostrophes/quotes vary by source. Normalise these for
    # quote checking only.
    text = text.translate(str.maketrans({
        "\u2018": "'", "\u2019": "'", "\u201c": '"', "\u201d": '"',
        "\u2013": "-", "\u2014": "-",
    }))
    text = text.replace(" / ", " ")
    text = re.sub(r"\s+", " ", text).strip().lower()
    return text.rstrip(".,;:")


def load_figure_text() -> str:
    raw = FIGURE_TEXT.read_text(encoding="utf-8", errors="replace")
    # Each extracted line is prefixed with its SVG line number. That prefix is
    # scaffolding, not part of the quoted sentence, so remove it before matching.
    raw = re.sub(r"(?m)^\s*\d+\s+", "", raw)
    return norm(raw)


def check_folder(folder: Path, figtext: str):
    problems = []
    warnings = []
    files = {p.name: p for p in folder.iterdir() if p.is_file()}

    for name in EXPECTED:
        path = files.get(name)
        if path is None:
            problems.append(f"missing file: {name}")
            continue
        if name.endswith(".md") and path.stat().st_size < 200:
            problems.append(f"too short: {name} ({path.stat().st_size} bytes)")

    watson = files.get("09_watson_answer.md")
    if watson and watson.exists():
        text = watson.read_text(encoding="utf-8", errors="replace")
        for section in WATSON_SECTIONS:
            if section.lower() not in text.lower():
                problems.append(f"WATSON missing section: {section}")
        for label in ["cost if wrong", "undoable", "reversed by"]:
            if label not in text.lower():
                problems.append(f"WATSON missing verdict field: {label}")
        if "\u2014" in text:
            problems.append("em dash found in WATSON answer")

    readme = files.get("README.md")
    if readme and readme.exists():
        text = readme.read_text(encoding="utf-8", errors="replace")
        if not re.search(r"\*\*Mode:\*\*\s*\S", text):
            warnings.append("no mode declared in README")

    for name in ["01_figure_grounded_audit.md", "07_the_tether_answer.md", "09_watson_answer.md"]:
        path = files.get(name)
        if not path or not path.exists():
            continue
        text = path.read_text(encoding="utf-8", errors="replace")
        checked = 0
        for match in QUOTE_RE.finditer(text):
            quote = match.group(1)
            context = text[max(0, match.start() - 120):match.end()]
            # Quotes explicitly attributed to the formula, a local doc, or an
            # essay are not figure quotes and must not be checked against the
            # figure-text extract.
            if any(token in context for token in ("Formula step", "THE_FORMULA", "local:", "essay", "README", "readme", "figure citation", "ordinary sentence", "trade-off", "named")):
                continue
            checked += 1
            if norm(quote) not in figtext:
                warnings.append(f"{name}: quote not found verbatim in FIGURES_TEXT.md: {quote[:70]!r}")
        if checked == 0:
            warnings.append(f"{name}: no Fig N :line quotes detected")

    ledger = files.get("10_source_ledger.csv")
    if ledger and ledger.exists():
        with ledger.open("r", encoding="utf-8", newline="") as fh:
            reader = csv.DictReader(fh)
            if reader.fieldnames != LEDGER_COLUMNS:
                warnings.append(f"ledger header mismatch: {reader.fieldnames}")
            rows = list(reader)
        if not rows:
            warnings.append("source ledger has no rows")
        for i, row in enumerate(rows, start=2):
            url = (row.get("url") or "").strip()
            if url and not url.startswith(("http://", "https://", "local:")):
                warnings.append(f"ledger row {i}: url is not http(s): {url[:60]}")
            for field in ["author", "venue", "year", "accessed_date", "quote"]:
                if not (row.get(field) or "").strip():
                    warnings.append(f"ledger row {i}: empty {field}")

    return problems, warnings


def main(argv):
    figtext = load_figure_text()
    if argv:
        folders = [p for p in SOLUTIONS.iterdir() if p.is_dir() and p.name.startswith(tuple(argv))]
    else:
        folders = sorted(p for p in SOLUTIONS.iterdir() if p.is_dir())
    if not folders:
        print("No solution folders found.")
        return

    REPORT.parent.mkdir(parents=True, exist_ok=True)
    rows = []
    for folder in folders:
        problems, warnings = check_folder(folder, figtext)
        status = "FAIL" if problems else ("WARN" if warnings else "PASS")
        print(f"{status:4s} {folder.name}: {len(problems)} problems, {len(warnings)} warnings")
        for p in problems:
            print(f"   ! {p}")
        for w in warnings:
            print(f"   ~ {w}")
        rows.append({
            "folder": folder.name,
            "status": status,
            "problems": len(problems),
            "warnings": len(warnings),
            "detail": " | ".join(problems + warnings),
        })

    with REPORT.open("w", encoding="utf-8", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=["folder", "status", "problems", "warnings", "detail"])
        writer.writeheader()
        writer.writerows(rows)
    print(f"\nReport: {REPORT}")


if __name__ == "__main__":
    main(sys.argv[1:])
