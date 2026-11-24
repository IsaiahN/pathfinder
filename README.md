![Project Path Finder — a human-validation benchmark](assets/pathfinder-banner.png)

# Project Path Finder

A public experiment in checking ideas against hard questions.

[**Explore the live corpus**](https://isaiahn.github.io/pathfinder/) · [**Open an example problem**](https://isaiahn.github.io/pathfinder/problem/QMGR-0037) · [**Submit a question**](https://isaiahn.github.io/pathfinder/) · [Read the method](PLANS/00_MASTER_PLAN.md)

Path Finder puts 1,300 open questions through one fixed method, then asks ordinary people to check what comes out. Every answer, verdict, and rebuttal stays in the open. It is not about proving a point. It is about finding out whether the method holds up when you keep testing it.

## The idea

There is a metatheory here, built from thirteen figures and a short procedure called the Tether and WATSON. A theory can look fine on paper but still miss things that matter. So we are running it across questions that come from business, ecology, physics, history, and a dozen other fields.

Each question becomes one trial. The trial produces a derivation grounded in the figures, a second answer that searches the world for corroboration, and a list of what would count against it. Then a person reads it and says yes, no, or that it stands as stated. Once you have enough of those checks, a pattern starts to show up. That pattern is the benchmark.

You can see the whole shape of it in the [corpus dashboard](https://isaiahn.github.io/pathfinder/), or jump straight into [one worked problem](https://isaiahn.github.io/pathfinder/problem/QMGR-0037).

## What each question gets

Every solved question lives in its own folder under [`Solutions/`](Solutions/), with twelve files:

| File | What it holds |
|---|---|
| `README.md` | The manifest: ID, question, mode, and status |
| `01_figure_grounded_audit.md` | The derivation from the figures, with a pre-registered refuter |
| `02_outreach_email.md` | A one-to-one note asking someone to check, never to agree |
| `03_public_contact_points.csv` | Public, opt-in ways to reach knowledgeable people |
| `04_links_and_distribution.md` | Where and how the material may be offered |
| `05_what_shape_means.md` | What "shape" means for this particular question |
| `06_isomers_and_order.md` | The supporting derivation, structure, and order |
| `07_the_tether_answer.md` | The answer derived from the figures |
| `08_expert_verification_packet.md` | The short packet a checker actually reads |
| `09_watson_answer.md` | The world search, verdict, and what would reverse it |
| `10_source_ledger.csv` | Every source read, with the exact quote used |
| `11_audit.md` | An independent second pass over the derivation |

The figures are the authority. World sources corroborate, but they never overrule a figure. Every substantive claim says whether it is `general`, `specified`, or `grounded`, so you always know what kind of statement you are looking at.

## How to help

Start with the [corpus](https://isaiahn.github.io/pathfinder/). Pick a field from the registry rail, or search by ID or question text. Every problem page shows the question, the current answer, the figures it relies on, and any verdicts already recorded.

Three buttons take you to a prefilled GitHub issue:

- **Validate** means you checked the derivation and it survived.
- **Refute** means you found a concrete failure. Tell us what it is.
- **Accept** means you take the answer as it stands, with its stated limits.

One verdict per issue, please. Other people can vote on an issue with GitHub reactions. A 👍 means they confirm the verdict, a 👎 means they dispute it, a 🎉 means they accept the answer, and 👀 means they are reviewing it. You can browse everything already submitted in the [repo's issues](https://github.com/IsaiahN/pathfinder/issues).

You need a GitHub account to submit or vote. That is the whole identity system. No email address is asked for or stored.

## What happens after you submit

A GitHub Action reads the labeled issues and their reactions every six hours and on each new issue. It writes the results to `data/validation.json` and `data/history.json`, then commits them. GitHub Pages picks up the commit and the site updates.

The life graph on each [problem page](https://isaiahn.github.io/pathfinder/problem/QMGR-0037) shows who took a swing at it, when, and what they said. When someone rebuts a verdict, that becomes a new round. Nothing is overwritten. Round 1, round 2, round 3 and so on all stay visible, so you can see how an answer changed under pressure.

Where a claim can be stated formally, a validator can attach a Lean certificate. Those get a `certified:lean` label and are checked in CI.

## Submit a question

The [site](https://isaiahn.github.io/pathfinder/) has a **＋ Submit a question** button. It opens a prefilled GitHub issue, which is where the question lives. You can pick a field, or leave it as `user_submitted` and let us sort it later.

Intake is unlimited. The 100 per day cap is on **our** processing, not on you. Every day a workflow collects the unanswered issues into `data/submission_queue.json`, oldest first, and publishes each question's status in `data/submitted_questions.json` and on the **Submitted** tab of the site. The backlog simply carries forward.

When a question reaches the front of the queue, we work it with WATSON and file a full twelve-file derivation under `Solutions/user_submitted/USR-#####/`. The ID comes from the issue number, so it never changes. We post a short answer back on the issue, which notifies you, and mark it `answered`. The field can be reassigned at that point, but the question always keeps its `user_submitted` origin.

## Privacy

We take this seriously. There are no email addresses anywhere in this repository. Not in the issues, not in the data, not in the solution folders. The private lead files stay out of the public mirror entirely. Your GitHub login is the only identity recorded, and only aggregate vote counts are published.

If you spot an email address in here, please [open an issue](https://github.com/IsaiahN/pathfinder/issues/new).

## Repository layout

```
pathfinder/
├── index.html, 404.html, assets/     the Pages front-end and brand assets
├── data/                             problems, verdicts, queue, and submissions as JSON
├── Solutions/                        1,300 folders, twelve files each
│   └── user_submitted/               USR-##### answers to public questions
├── Registry/                         the ranking workbook and CSV mirrors
├── FRAMEWORK/                        the figures and method references
├── PLANS/                            the master plan and platform design
├── Scripts/                          generation, validation, and export tools
└── .github/                          issue templates and sync workflows
```

## Status

All 1,300 solutions are generated and validated. The ranking lives in [`Registry/master_ranking.xlsx`](Registry/master_ranking.xlsx), with CSV mirrors beside it. The [public benchmark](https://isaiahn.github.io/pathfinder/) is live and collecting verdicts.

## A note on the method

This is a simulated derivation, not a direct reading of the world. That distinction matters. The figures tell us what a defensible answer should look like. They do not tell us that any particular answer is true. When a claim needs measurement, we say so and leave it marked as not settled.

If that sounds cautious, good. The whole exercise is about finding out where the method stops working.
