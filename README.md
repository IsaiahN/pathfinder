# Project Pathfinder

A public experiment in checking ideas against hard questions.

Pathfinder puts 1,300 open questions through one fixed method, then asks ordinary people to check what comes out. Every answer, verdict, and rebuttal stays in the open. It is not about proving a point. It is about finding out whether the method holds up when you keep testing it.

[Explore the corpus](index.html) · [How the method works](PLANS/00_MASTER_PLAN.md) · [What we ask of validators](#how-to-help)

---

## The idea

There is a metatheory here, built from thirteen figures and a short procedure called the Tether and WATSON. On its own, a theory can sound plausible while being wrong in ways nobody notices. So we are putting it to work on a large and messy set of questions, from business and cognition to physics and philosophy.

Each question becomes one trial. The trial produces a derivation grounded in the figures, a second answer that searches the wider world for corroboration, and a written list of what would refute it. Then a human reads it and says: yes, no, or I accept this as it stands.

Once you have enough of those checks, a pattern starts to show up. That pattern is the benchmark.

## What each question gets

Every solved question lives in its own folder under `Solutions/`, with twelve files:

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

Pick a problem. The quickest way is to open a link like `https://IsaiahN.github.io/pathfinder/problem/QMGR-0037`, or use the search box on the [corpus page](index.html).

On that page you will see the question, the current answer, the figures it relies on, and any verdicts already recorded. Three buttons take you to a prefilled GitHub issue:

- **Validate** means you checked the derivation and it survived.
- **Refute** means you found a concrete failure. Tell us what it is.
- **Accept** means you take the answer as it stands, with its stated limits.

One verdict per issue, please. Other people can vote on an issue with GitHub reactions. A 👍 means they confirm the verdict, a 👎 means they dispute it, a 🎉 means they accept the answer, and 👀 means they are reviewing it.

You need a GitHub account to submit or vote. That is the whole identity system. No email address is asked for or stored.

## What happens after you submit

A GitHub Action reads the labeled issues and their reactions every six hours and on each new issue. It writes the results to `data/validation.json` and `data/history.json`, then commits them. GitHub Pages picks up the commit and the site updates.

The life graph on each problem page shows who took a swing at it, when, and what they said. When someone rebuts a verdict, that becomes a new round. Nothing is overwritten. Round 1, round 2, round 3 and so on all stay visible, so you can see how an answer changed under pressure.

Where a claim can be stated formally, a validator can attach a Lean certificate. Those get a `certified:lean` label and are checked in CI.

## Privacy

We take this seriously. There are no email addresses anywhere in this repository. Not in the issues, not in the data, not in the solution folders. The private lead files stay out of the public mirror entirely. Your GitHub login is the only identity recorded, and only aggregate vote counts are published.

If you spot an email address in here, please open an issue.

## Repository layout

```
pathfinder/
├── index.html, 404.html, assets/     the Pages front-end
├── data/                             problems, verdicts, and history as JSON
├── Solutions/                        1,300 folders, twelve files each
├── Registry/                         the ranking workbook and CSV mirrors
├── FRAMEWORK/                        the figures and method references
├── PLANS/                            the master plan and platform design
├── Scripts/                          generation, validation, and export tools
└── .github/                          issue templates and sync workflows
```

## Status

All 1,300 solutions are generated and validated. The ranking lives in `Registry/master_ranking.xlsx`, with CSV mirrors beside it. The public benchmark is live and collecting verdicts.

## A note on the method

This is a simulated derivation, not a direct reading of the world. That distinction matters. The figures tell us what a defensible answer should look like. They do not tell us that any particular answer is true. When a claim needs measurement, we say so and leave it marked as not settled.

If that sounds cautious, good. The whole exercise is about finding out where the method stops working.
