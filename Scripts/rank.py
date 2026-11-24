"""Produce a provisional ranking of all questions.

IMPORTANT: these scores are FILTERS FOR THE BUDGET, not witnesses for the verdict
(Fig 9 :60). A tier decides what gets tried first. It says nothing about whether an
answer is true. The final re-ranking after solutions exist is Phase 7.

Usage: python rank.py
Writes Registry/question_ranking.csv.
"""

import csv
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "Registry" / "question_registry.csv"
OUT = ROOT / "Registry" / "question_ranking.csv"

COLUMNS = [
    "id", "category_slug", "section", "question_text",
    "importance_1_5", "ground_availability_0_3", "tractability_0_3",
    "tether_bearing_0_3", "expert_accessibility_0_3", "independence_opportunity_0_3",
    "upstream_depends_on", "cost_if_wrong_1_5", "reversibility_0_3",
    "priority_score", "tier", "reason",
]

FOUNDATIONAL = {"QMGR", "QMGR2", "INF", "REA", "CMP", "ORI", "COG"}
MULTI_FIELD = {"CMP", "COG", "HIS", "INS", "ECO", "EAR"}
PUBLIC_VENUES = {"BUS", "ECN", "INS", "HIS", "ECO"}

GROUND_WORDS = re.compile(
    r"\b(experiment|experimental|measurement|measure|observ|observation|detect|"
    r"test|testing|data|instrument|evidence|empirical|survey|trial|record|"
    r"quantif|computational|simulation)\w*\b", re.IGNORECASE,
)
TETHER_WORDS = re.compile(
    r"\b(space|time|energy|structure|gradient|network|spectrum|ground|anchor|"
    r"agreement|residual|import|closure|bond|mint|frame|habitat|emergent|"
    r"information|complexity|causation|cause|origin|self|recursive|selection)\w*\b",
    re.IGNORECASE,
)
BROAD_WORDS = re.compile(
    r"\b(why|fundamental|nature of|origin|whether|what is|how does|"
    r"relationship|unify|unification|limit|boundary)\b", re.IGNORECASE,
)


def clamp(value, low, high):
    return max(low, min(high, value))


def score(row):
    q = row["question_text"]
    slug = row["category_slug"]
    ground_hits = len(GROUND_WORDS.findall(q))
    tether_hits = len(TETHER_WORDS.findall(q))
    broad_hits = len(BROAD_WORDS.findall(q))

    importance = clamp(2 + (1 if slug in FOUNDATIONAL else 0) + (1 if broad_hits >= 1 else 0), 1, 5)
    ground = clamp(1 + (1 if ground_hits >= 1 else 0) + (1 if ground_hits >= 3 else 0), 0, 3)
    tract = clamp(1 + (1 if ground_hits >= 1 else 0) + (1 if broad_hits == 0 else 0), 0, 3)
    tether = clamp((3 if tether_hits >= 2 else 2 if tether_hits == 1 else 0), 0, 3)
    expert = clamp(1 + (1 if slug in PUBLIC_VENUES else 0) + (1 if ground_hits >= 2 else 0), 0, 3)
    independence = clamp(1 + (1 if slug in MULTI_FIELD else 0) + (1 if tether_hits >= 2 else 0), 0, 3)
    cost = clamp(2 + (1 if slug in {"QMGR", "QMGR2", "ORI"} else 0), 1, 5)
    reversible = clamp(3 - (1 if slug in {"QMGR", "QMGR2", "ORI"} else 0), 0, 3)

    priority = round(
        importance * 3 + ground * 2 + tether * 2 + tract + independence + expert * 0.5, 2
    )
    reason = (
        f"importance from category={slug} and breadth={broad_hits}; "
        f"ground from {ground_hits} empirical cue(s); "
        f"tether from {tether_hits} substrate/metalaw cue(s); "
        f"contact and independence from category, not from any verdict"
    )
    return {
        "importance_1_5": importance,
        "ground_availability_0_3": ground,
        "tractability_0_3": tract,
        "tether_bearing_0_3": tether,
        "expert_accessibility_0_3": expert,
        "independence_opportunity_0_3": independence,
        "upstream_depends_on": "none",
        "cost_if_wrong_1_5": cost,
        "reversibility_0_3": reversible,
        "priority_score": priority,
        "reason": reason,
    }


def main():
    with REGISTRY.open("r", encoding="utf-8", newline="") as fh:
        registry = list(csv.DictReader(fh))

    rows = []
    for item in registry:
        scored = score(item)
        rows.append({
            "id": item["id"],
            "category_slug": item["category_slug"],
            "section": item["section"],
            "question_text": item["question_text"],
            **scored,
            "tier": "",
        })

    rows.sort(key=lambda r: (-r["priority_score"], r["id"]))
    n = len(rows)
    for i, row in enumerate(rows):
        row["tier"] = "A" if i < 100 else ("B" if i < 500 else "C")

    with OUT.open("w", encoding="utf-8", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=COLUMNS)
        writer.writeheader()
        writer.writerows(rows)

    counts = {tier: sum(1 for r in rows if r["tier"] == tier) for tier in "ABC"}
    print(f"Wrote {n} ranked questions -> {OUT}")
    print(f"Tiers: {counts}")
    print("Reminder: these scores are filters for the budget, never verdicts about truth.")


if __name__ == "__main__":
    main()
