"""Verify the published pathfinder repo is lead-free and the Pages site is live.

Usage: python Scripts/verify_publish.py
Set GITHUB_TOKEN in the environment for the API checks.
"""

import json
import os
import urllib.error
import urllib.request

REPO = "IsaiahN/pathfinder"
SITE = "https://IsaiahN.github.io/pathfinder/"
FORBIDDEN = ("Leads/", "Outreach/", "Logs/", "Registry/Leads.csv",
             "Scripts/LEAD_AGENT_TEMPLATE.md", "Scripts/mine_leads.py",
             "Scripts/merge_leads.py")


def api(path, token):
    req = urllib.request.Request(
        f"https://api.github.com/repos/{REPO}/{path}",
        headers={"Authorization": f"Bearer {token}",
                 "X-GitHub-Api-Version": "2022-11-28",
                 "User-Agent": "pathfinder-verify",
                 "Accept": "application/vnd.github+json"},
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))


def main():
    token = os.environ.get("GITHUB_TOKEN", "")
    if not token:
        print("GITHUB_TOKEN not set; skipping API checks")

    if token:
        # Check the repository tree on the default branch.
        try:
            branch = api("", token)["default_branch"]
            tree = api(f"git/trees/{branch}?recursive=1", token)
            paths = [item["path"] for item in tree.get("tree", [])]
            bad = [p for p in paths if any(p.startswith(f) or p == f for f in FORBIDDEN)]
            print(f"remote files: {len(paths)}")
            print(f"forbidden paths published: {bad if bad else 'none'}")
            print(f"has data/problems.json: {'data/problems.json' in paths}")
            print(f"has 404.html: {'404.html' in paths}")
            print(f"workbook published: {'Registry/master_ranking.xlsx' in paths}")
        except Exception as e:
            print(f"tree check failed: {e}")

        try:
            pages = api("pages", token)
            print(f"pages: status={pages.get('status')} url={pages.get('html_url')} "
                  f"source={pages.get('source')}")
        except Exception as e:
            print(f"pages check failed: {e}")

    try:
        with urllib.request.urlopen(SITE, timeout=30) as r:
            body = r.read().decode("utf-8", errors="replace")
            print(f"site: HTTP {r.status}, chars={len(body)}, "
                  f"title_ok={'Project Pathfinder' in body}")
    except Exception as e:
        print(f"site check failed: {e}")


if __name__ == "__main__":
    main()
