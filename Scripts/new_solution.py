"""Scaffold a Solution folder for one or more question IDs.

Usage: python new_solution.py QMGR-0037 BUS-0001 ...

Reads Registry/question_registry.csv, creates Solutions/<ID>__<slug>/ and writes
an exemplar-based set of empty section templates plus a README manifest. Existing
files are never overwritten; reruns are safe.
"""

import csv
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "Registry" / "question_registry.csv"
SOLUTIONS = ROOT / "Solutions"

FILES = {
    "01_figure_grounded_audit.md": "# Figure-grounded audit: {q}\n\n**Mode:** \n\n**Status: simulated derivation, not a ground reading.**\n\n## 0. The claim under audit\n\n## 1. Figure census\n\n## 2. Findings\n\n## 3. Pre-registered refuter\n\n## 4. Recommendation\n\n## 5. Canonical usage check\n\n## 6. Retractions and confirmations\n",
    "02_outreach_email.md": "# Outreach draft: {q}\n\n**Use:** one-to-one. Not for bulk send.\n\n**Hard precondition:** do not send until the audit findings are repaired.\n\n---\n\n**Subject:** \n\n> \n\n## Why this version is ordered this way\n",
    "03_public_contact_points.csv": "organization,type,field,public_contact_or_submission,url,source_url,why_relevant,verified_date,notes\n",
    "04_links_and_distribution.md": "# Public links and distribution: {q}\n\n## Verified sources\n\n## What in the wider literature bears on this question\n\n## Distribution: offer, do not push\n\n## The two-stage offer\n",
    "05_what_shape_means.md": "# What \"shape\" means for this question\n\n## 1. A shape is a constraint, not a filler\n\n## 2. How a shape is obtained\n\n## 3. What licenses a name\n\n## 4. The ground and the source problem\n\n## 5. Answer to the shape question\n\n## 6. Consequences for contact\n",
    "06_isomers_and_order.md": "# Supporting derivation: structure, order, and analogues\n\n**Mode:** \n\n## RESIDUAL\n\n## DOMAIN CENSUS\n\n## DERIVATION\n\n## CONCLUSION\n\n## ANCHOR\n\n## FIGURE CENSUS\n",
    "07_the_tether_answer.md": "# The Tether's answer: {q}\n\n**Mode: `specified` or `grounded`, state which.**\n\n## 1. The residual it answers\n\n## 2. The shape\n\n## 3. What it explicitly does not say\n\n## 4. What would settle it, the ground\n\n## 5. The honest stop\n\n## 6. One-paragraph version\n",
    "08_expert_verification_packet.md": "# Expert verification packet: {q}\n\n**What this is:** a claim in a form a specialist can check.\n\n## 1. The claim, in one paragraph\n\n## 2. Three checkable sub-claims\n\n## 3. What is explicitly not claimed\n\n## 4. Provenance\n\n## 5. What would settle it\n\n## 6. What an expert can check in twenty minutes\n",
    "09_watson_answer.md": "# WATSON answer: {q}\n\n## QUESTION\n\n## DOMAIN CENSUS\n\n## TETHER (primary, verbatim)\n\n## WORLD (secondary, each source read)\n\n## VERDICT (from the figures)\n\n- cost if wrong:\n- undoable:\n- reversed by:\n\n## Sources\n",
    "10_source_ledger.csv": "url,title,author,venue,year,accessed_date,quote,field,overlap_with_other_sources,status,used_in_file\n",
    "11_audit.md": "# Independent audit: {q}\n\n**Reviewer seat writes its own census from the residual line alone, before reading the primary census.**\n\n## 1. Independent domain census\n\n## 2. Comparison with the primary census\n\n## 3. Figure lines checked against source\n\n## 4. Round trip gap R_T\n\n## 5. Strains and re-census\n\n## 6. Verdict on the solution\n",
}


def slug_for(text: str) -> str:
    words = re.findall(r"[a-z0-9]+", text.lower())
    return "_".join(words[:7])[:60] or "question"


def load_registry():
    with REGISTRY.open("r", encoding="utf-8", newline="") as fh:
        return {row["id"]: row for row in csv.DictReader(fh)}


def main(argv):
    registry = load_registry()
    for qid in argv:
        row = registry.get(qid)
        if row is None:
            print(f"SKIP unknown id: {qid}")
            continue
        folder = SOLUTIONS / f"{qid}__{slug_for(row['question_text'])}"
        folder.mkdir(parents=True, exist_ok=True)
        q = row["question_text"]
        manifest = (
            f"# Solution {qid}\n\n"
            f"**Question:** {q}\n\n"
            f"**Source:** {row['source_file']} line {row['source_line']}\n\n"
            f"**Section:** {row['section']}\n\n"
            f"**Mode:** \n\n**Status:** scaffolded\n\n"
            f"**Registry status:** {row['status']}\n\n"
            "## Files\n\n"
            + "\n".join(f"- `{name}`" for name in ["README.md", *FILES])
            + "\n"
        )
        written = []
        for name, template in FILES.items():
            target = folder / name
            if not target.exists():
                target.write_text(template.format(q=q), encoding="utf-8")
                written.append(name)
        readme = folder / "README.md"
        if not readme.exists():
            readme.write_text(manifest, encoding="utf-8")
            written.append("README.md")
        row["solution_path"] = str(folder.relative_to(ROOT))
        row["status"] = "in_progress"
        print(f"{qid}: {folder.name} ({len(written)} new files)")

    with REGISTRY.open("w", encoding="utf-8", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=list(next(iter(registry.values())).keys()))
        writer.writeheader()
        writer.writerows(registry.values())


if __name__ == "__main__":
    main(sys.argv[1:])
