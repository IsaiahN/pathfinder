"""Build the Pathfinder question registry from the 12 source txt files.

Reads Questions/*.txt, assigns stable IDs of the form <CAT>-<NNNN>, preserves the
section heading each question sits under, and writes Registry/question_registry.csv.

The parse is deliberately mechanical: no question text is rewritten. Citation tags
of the form <citation ...> are moved into their own column rather than dropped.
"""

import csv
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
QUESTIONS = ROOT / "Questions"
OUT = ROOT / "Registry" / "question_registry.csv"

# slug, display name, filename, expected count
SPECS = [
    ("BUS", "business", "business.txt", 100),
    ("COG", "cognitive science", "cognitive science.txt", 100),
    ("CMP", "complexity science", "complexity science.txt", 100),
    ("EAR", "earth systems", "earth systems.txt", 100),
    ("ECO", "ecology", "ecology.txt", 100),
    ("ECN", "economics", "economics questions.txt", 100),
    ("HIS", "history of science and knowledge", "history of science and knowledge.txt", 100),
    ("INF", "information theory", "Information Theory.txt", 100),
    ("INS", "institutional questions", "institutional questions.txt", 100),
    ("ORI", "origins of life", "origins of life.txt", 100),
    ("QMGR", "QM and GR (physics block)", "QM & GR Questions.txt", 200),
    ("REA", "reasoning", "reasoning.txt", 100),
]

HEADING_RE = re.compile(r"^\s{0,3}#{2,4}\s+(.*?)\s*$")
QUESTION_RE = re.compile(r"^\s*(\d{1,4})\.\s+(.*?)\s*$")
CITATION_RE = re.compile(r"<citation\b[^>]*>.*?</citation>\s*", re.IGNORECASE | re.DOTALL)

COLUMNS = [
    "id",
    "category_slug",
    "category_name",
    "source_file",
    "source_line",
    "section",
    "question_text",
    "source_citation_tags",
    "status",
    "solution_path",
    "notes",
]


def clean_heading(text: str) -> str:
    # Section headings such as "1. Competitive strategy and firm performance"
    # keep their number so the source structure is recoverable.
    return CITATION_RE.sub("", text).strip()


def parse_file(path: Path, slug: str, category: str):
    rows = []
    section = ""
    seen = set()
    block = 1
    last_number = 0
    with path.open("r", encoding="utf-8", errors="replace") as fh:
        for lineno, raw in enumerate(fh, start=1):
            line = raw.rstrip("\r\n")
            heading = HEADING_RE.match(line)
            if heading:
                section = clean_heading(heading.group(1))
                continue
            match = QUESTION_RE.match(line)
            if not match:
                continue
            number = int(match.group(1))
            # Some source files contain a second list whose numbering restarts at 1.
            # Keep the first block under the base slug and suffix later blocks.
            if number <= last_number:
                block += 1
                seen = set()
            last_number = number
            if number in seen:
                raise ValueError(f"duplicate local number {number} in {path.name}:{lineno}")
            seen.add(number)
            body = match.group(2)
            tags = " | ".join(CITATION_RE.findall(body))
            text = CITATION_RE.sub("", body).strip()
            if not text:
                raise ValueError(f"empty question at {path.name}:{lineno}")
            block_slug = slug if block == 1 else f"{slug}{block}"
            rows.append(
                {
                    "id": f"{block_slug}-{number:04d}",
                    "category_slug": block_slug,
                    "category_name": category,
                    "source_file": path.name,
                    "source_line": lineno,
                    "section": section,
                    "question_text": text,
                    "source_citation_tags": tags,
                    "status": "pending",
                    "solution_path": "",
                    "notes": "",
                }
            )
    return rows


def main():
    all_rows = []
    for slug, category, filename, expected in SPECS:
        path = QUESTIONS / filename
        if not path.exists():
            raise FileNotFoundError(path)
        rows = parse_file(path, slug, category)
        if len(rows) != expected:
            raise ValueError(f"{filename}: expected {expected} questions, parsed {len(rows)}")
        all_rows.extend(rows)
        print(f"{filename:42s} {len(rows):4d} questions")

    ids = [r["id"] for r in all_rows]
    if len(ids) != len(set(ids)):
        raise ValueError("duplicate global IDs")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    with OUT.open("w", encoding="utf-8", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=COLUMNS)
        writer.writeheader()
        writer.writerows(all_rows)
    print(f"\nTotal: {len(all_rows)} questions -> {OUT}")


if __name__ == "__main__":
    main()
