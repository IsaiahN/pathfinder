"""Daily loop tools for user-submitted questions.

  python submission_tools.py prepare USR-00042
      -> creates Solutions/user_submitted/USR-00042/ with the 12-file scaffold
         and writes 00_submission.md with the question and provenance.

  python submission_tools.py finish USR-00042 answer.txt
      -> posts the answer as a comment on the source issue, labels it `answered`,
         removes `in-progress`, and updates data/submitted_questions.json.

Set GITHUB_TOKEN in the environment for `finish`.

Usage:
  python Scripts/submission_tools.py prepare USR-00042
  python Scripts/submission_tools.py finish USR-00042 answer.txt
"""

import json
import os
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
DEST = ROOT / "Solutions" / "user_submitted"
REPO = "IsaiahN/pathfinder"

FILES = [
    "README.md", "01_figure_grounded_audit.md", "02_outreach_email.md",
    "03_public_contact_points.csv", "04_links_and_distribution.md",
    "05_what_shape_means.md", "06_isomers_and_order.md", "07_the_tether_answer.md",
    "08_expert_verification_packet.md", "09_watson_answer.md",
    "10_source_ledger.csv", "11_audit.md",
]

STUB = "# {title}\n\n_Pending. This file is part of the derivation for {qid}._\n"


def load_submissions():
    return json.loads((DATA / "submitted_questions.json").read_text(encoding="utf-8"))


def find(qid, data):
    for r in data.get("questions", []):
        if r.get("id") == qid:
            return r
    raise SystemExit("Unknown submission ID: " + qid)


def prepare(qid):
    data = load_submissions()
    r = find(qid, data)
    folder = DEST / qid
    folder.mkdir(parents=True, exist_ok=True)
    for name in FILES:
        target = folder / name
        if not target.exists() or target.stat().st_size < 100:
            target.write_text(STUB.format(title=name, qid=qid), encoding="utf-8")
    (folder / "00_submission.md").write_text(
        "# User-submitted question\n\n"
        "- **ID:** " + qid + "\n"
        "- **Question:** " + r.get("question", "") + "\n"
        "- **Requested field:** " + r.get("requested_field", "user_submitted") + "\n"
        "- **Submitter:** " + r.get("submitter", "unknown") + "\n"
        "- **Source issue:** " + r.get("source_issue", "") + "\n"
        "- **Submitted:** " + r.get("created_at", "") + "\n\n"
        "The field may be reassigned once the answer is written. The ID stays USR-#####.\n",
        encoding="utf-8")
    print("Prepared", folder)
    print("Question:", r.get("question", ""))
    print("Source:", r.get("source_issue", ""))


def api(method, path, token, payload=None):
    req = urllib.request.Request(
        "https://api.github.com/repos/" + REPO + path,
        method=method,
        headers={"Authorization": "Bearer " + token,
                 "X-GitHub-Api-Version": "2022-11-28",
                 "User-Agent": "pathfinder-submissions",
                 "Accept": "application/vnd.github+json"},
    )
    body = None
    if payload is not None:
        body = json.dumps(payload).encode("utf-8")
        req.add_header("Content-Type", "application/json")
    with urllib.request.urlopen(req, body, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def finish(qid, answer_file):
    token = os.environ.get("GITHUB_TOKEN", "")
    if not token:
        raise SystemExit("GITHUB_TOKEN must be set for finish")
    answer = Path(answer_file).read_text(encoding="utf-8").strip()
    data = load_submissions()
    r = find(qid, data)
    number = r["issue_number"]
    folder = "Solutions/user_submitted/" + qid

    comment = (answer + "\n\n---\nAnswered by Project Path Finder. Full derivation: " +
               "https://github.com/" + REPO + "/tree/main/" + folder + "\n")
    api("POST", "/issues/" + str(number) + "/comments", token, {"body": comment})
    try:
        api("POST", "/issues/" + str(number) + "/labels", token,
            {"labels": ["answered"]})
    except Exception as e:
        print("label add failed:", e)
    try:
        api("DELETE", "/issues/" + str(number) + "/labels/in-progress", token)
    except Exception:
        pass

    r["status"] = "answered"
    r["answered_at"] = r.get("updated_at", "")
    r["answer_summary"] = answer[:600]
    r["answer_path"] = folder
    (DATA / "submitted_questions.json").write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Finished", qid, "— issue", number, "commented and labelled.")


def main():
    if len(sys.argv) < 3:
        raise SystemExit(__doc__)
    cmd, qid = sys.argv[1], sys.argv[2]
    if cmd == "prepare":
        prepare(qid)
    elif cmd == "finish":
        if len(sys.argv) < 4:
            raise SystemExit("finish needs an answer file")
        finish(qid, sys.argv[3])
    else:
        raise SystemExit("unknown command: " + cmd)


if __name__ == "__main__":
    main()
