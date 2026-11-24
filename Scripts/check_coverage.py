"""Check that every registered question has exactly one solution folder and vice versa.

Usage: python check_coverage.py
"""

import csv
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "Registry" / "question_registry.csv"
SOLUTIONS = ROOT / "Solutions"


def main():
    with REGISTRY.open("r", encoding="utf-8", newline="") as fh:
        registry = list(csv.DictReader(fh))
    registered = {r["id"] for r in registry}

    folders = {}
    duplicates = []
    for folder in SOLUTIONS.iterdir():
        if not folder.is_dir():
            continue
        qid = folder.name.split("__")[0]
        if qid in folders:
            duplicates.append((qid, folders[qid], folder.name))
        folders[qid] = folder.name

    missing = sorted(registered - set(folders))
    extra = sorted(set(folders) - registered)
    by_cat = Counter(qid.split("-")[0] for qid in folders)

    print(f"Registered questions: {len(registered)}")
    print(f"Solution folders:     {len(folders)}")
    print(f"Covered:              {len(registered & set(folders))}")
    print(f"Missing folders:      {len(missing)}")
    for qid in missing[:30]:
        print(f"  ! {qid}")
    if extra:
        print(f"Folders without registry entry: {len(extra)}")
        for qid in extra[:20]:
            print(f"  ! {qid}")
    if duplicates:
        print(f"Duplicate folders: {len(duplicates)}")
        for item in duplicates[:20]:
            print(f"  ! {item}")
    print("By category: " + ", ".join(f"{k}={v}" for k, v in sorted(by_cat.items())))


if __name__ == "__main__":
    main()
