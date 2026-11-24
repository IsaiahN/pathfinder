"""Build Registry/master_ranking.xlsx from the generated tables and solution folders.

Sheets: Questions, Solutions, Leads, Sources, Decisions, Re-ranking.
CSV mirrors are written beside the workbook with a .csv suffix.

Usage: python build_workbook.py
"""

import csv
import re
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "Registry"
SOLUTIONS = ROOT / "Solutions"
LEADS = ROOT / "Leads"
LOGS = ROOT / "Logs"
OUT = REGISTRY / "master_ranking.xlsx"

FIG_RE = re.compile(r"Fig\s*\d+\s*:", re.IGNORECASE)


def read_csv(path):
    if not path.exists():
        return [], []
    with path.open("r", encoding="utf-8-sig", newline="") as fh:
        reader = csv.DictReader(fh)
        return list(reader.fieldnames or []), list(reader)


def write_mirror(name, headers, rows):
    target = REGISTRY / f"{name}.csv"
    with target.open("w", encoding="utf-8", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=headers, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def add_sheet(wb, name, headers, rows, widths=None):
    ws = wb.create_sheet(name)
    ws.append(headers)
    header_fill = PatternFill("solid", fgColor="1F4E78")
    for cell in ws[1]:
        cell.font = Font(bold=True, color="FFFFFF")
        cell.fill = header_fill
        cell.alignment = Alignment(vertical="center", wrap_text=True)
    for row in rows:
        ws.append([row.get(h, "") for h in headers])
    ws.freeze_panes = "A2"
    if rows:
        ws.auto_filter.ref = f"A1:{get_column_letter(len(headers))}{len(rows) + 1}"
    for i, header in enumerate(headers, start=1):
        width = (widths or {}).get(header)
        if width is None:
            width = min(max(len(str(header)) + 2, 14), 42)
        ws.column_dimensions[get_column_letter(i)].width = width
    return ws


def scan_solutions():
    _, validation = read_csv(LOGS / "validation_report.csv")
    status_by_folder = {r["folder"]: r["status"] for r in validation}
    rows = []
    for folder in sorted(p for p in SOLUTIONS.iterdir() if p.is_dir()):
        qid = folder.name.split("__")[0]
        readme = folder / "README.md"
        mode = ""
        if readme.exists():
            text = readme.read_text(encoding="utf-8", errors="replace")
            m = re.search(r"\*\*Mode:\*\*\s*([^\n]+)", text)
            if m:
                mode = m.group(1).strip()
        word_count = 0
        fig_cites = 0
        for path in folder.glob("*.md"):
            text = path.read_text(encoding="utf-8", errors="replace")
            word_count += len(text.split())
            fig_cites += len(FIG_RE.findall(text))
        _, ledger = read_csv(folder / "10_source_ledger.csv")
        source_rows = len(ledger)
        world_sources = sum(1 for r in ledger if str(r.get("url", "")).startswith(("http://", "https://")))
        audit = (folder / "11_audit.md").read_text(encoding="utf-8", errors="replace") if (folder / "11_audit.md").exists() else ""
        rows.append({
            "id": qid,
            "folder": folder.name,
            "status": status_by_folder.get(folder.name, "UNVALIDATED"),
            "mode": mode,
            "word_count": word_count,
            "fig_citations": fig_cites,
            "source_ledger_rows": source_rows,
            "world_sources": world_sources,
            "has_verification_packet": "yes" if (folder / "08_expert_verification_packet.md").exists() else "no",
            "has_watson": "yes" if (folder / "09_watson_answer.md").exists() else "no",
            "has_audit": "yes" if audit else "no",
            "audit_note": audit[:200].replace("\n", " "),
        })
    return rows


def aggregate_sources():
    rows = []
    for folder in sorted(p for p in SOLUTIONS.iterdir() if p.is_dir()):
        _, ledger = read_csv(folder / "10_source_ledger.csv")
        for item in ledger:
            item = dict(item)
            item["solution_id"] = folder.name.split("__")[0]
            rows.append(item)
    headers = ["solution_id", "url", "title", "author", "venue", "year", "accessed_date",
               "quote", "field", "overlap_with_other_sources", "status", "used_in_file"]
    return headers, rows


def main():
    _, registry = read_csv(REGISTRY / "question_registry.csv")
    rank_headers, ranking = read_csv(REGISTRY / "question_ranking.csv")
    question_headers = rank_headers or ["id", "category_slug", "section", "question_text"]
    question_rows = ranking or [
        {k: r.get(k, "") for k in question_headers} for r in registry
    ]

    solution_headers = ["id", "folder", "status", "mode", "word_count", "fig_citations",
                        "source_ledger_rows", "world_sources", "has_verification_packet",
                        "has_watson", "has_audit", "audit_note"]
    solutions = scan_solutions()

    track_a_headers, track_a = read_csv(LEADS / "expert_leads.csv")
    track_b_headers, track_b = read_csv(LEADS / "direct_outreach_leads.csv")
    lead_headers = ["track", *[h for h in track_a_headers if h not in ("track",)]]
    leads = []
    for row in track_a:
        item = {"track": "A_figure_grounded", **row}
        leads.append(item)
    for row in track_b:
        item = {"track": "B_direct_non_tether", **row}
        leads.append(item)

    source_headers, sources = aggregate_sources()

    _, validation = read_csv(LOGS / "validation_report.csv")
    decisions = []
    log_path = LOGS / "derivation_log.md"
    if log_path.exists():
        text = log_path.read_text(encoding="utf-8", errors="replace")
        for block in re.split(r"(?m)^## ", text)[1:]:
            lines = block.strip().splitlines()
            if lines:
                decisions.append({"kind": "carried method", "item": lines[0][:180], "detail": " ".join(lines[1:])[:400]})
    for row in validation:
        if int(row.get("warnings", 0) or 0) or int(row.get("problems", 0) or 0):
            decisions.append({"kind": "validation", "item": row["folder"], "detail": row.get("detail", "")})

    rerank_headers = ["id", "provisional_priority", "provisional_tier", "solution_status", "final_rank", "final_note"]
    solution_status = {r["id"]: r["status"] for r in solutions}
    rerank = []
    for i, row in enumerate(question_rows, start=1):
        qid = row.get("id", "")
        rerank.append({
            "id": qid,
            "provisional_priority": row.get("priority_score", ""),
            "provisional_tier": row.get("tier", ""),
            "solution_status": solution_status.get(qid, "pending"),
            "final_rank": i,
            "final_note": "provisional until all solutions and audits exist",
        })

    wb = Workbook()
    wb.remove(wb.active)
    add_sheet(wb, "Questions", question_headers, question_rows, {"question_text": 60, "reason": 60})
    add_sheet(wb, "Solutions", solution_headers, solutions, {"folder": 55, "audit_note": 60, "mode": 24})
    add_sheet(wb, "Leads", lead_headers, leads, {"source_url_for_every_claim": 45, "legal_note": 45})
    add_sheet(wb, "Sources", source_headers, sources, {"url": 55, "quote": 60})
    add_sheet(wb, "Decisions", ["kind", "item", "detail"], decisions, {"item": 55, "detail": 80})
    add_sheet(wb, "Re-ranking", rerank_headers, rerank, {"final_note": 50})

    write_mirror("Questions", question_headers, question_rows)
    write_mirror("Solutions", solution_headers, solutions)
    write_mirror("Leads", lead_headers, leads)
    write_mirror("Sources", source_headers, sources)
    write_mirror("Decisions", ["kind", "item", "detail"], decisions)
    write_mirror("Re-ranking", rerank_headers, rerank)

    wb.save(OUT)
    print(f"Wrote {OUT}")
    print(f"Questions: {len(question_rows)}, Solutions: {len(solutions)}, Leads: {len(leads)}, Sources: {len(sources)}")


if __name__ == "__main__":
    main()
