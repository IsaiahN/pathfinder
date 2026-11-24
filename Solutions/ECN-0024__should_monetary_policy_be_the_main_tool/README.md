# Solution ECN-0024 — figure-grounded package

**Mode:** `specified` on the per-slot and per-regime claims, `general` on the structural shape, `gap` on any numerical split or standing ranking. Nothing here is `grounded`: no measurement was taken, and this folder is a simulated derivation checked for internal consistency against the figures, not a ground reading.

**Question:** Should monetary policy be the main tool for stabilizing the economy, or should fiscal policy play a larger role?

**Source:** `economics questions.txt` line 34.

**Section:** 3. Money, banking, and central banks.

**Field for public contact points:** monetary versus fiscal policy research.

**Status:** done.

**Registry status:** pending.

---

## What is being decided, in effect terms

The question asks for a standing ranking between two instruments. Restated as an effect: when a per-slot gap opens between what the economy is doing and what a stabilizing frame predicts or commits to, which instrument composition closes that gap, and does the answer stay the same when the state of the economy changes? Option A ("monetary is the main tool") leads to a single instrument given standing across all slots and regimes. Option B ("fiscal should play a larger role") leads to a different single instrument given standing. Both assume the ranking is a property of the instruments. The derivation tests that assumption rather than choosing between the two rankings.

**What an answer would look like, bound as an ordinary term.** The sought-for shape is "a stable priority order over instruments that holds across slots and regimes." Per `THE_FORMULA.md` "Direction" and Fig 5 :62-66, that preference is not a term the loop can see until it is written down and allowed to accrue a residual. It is bound in `01_figure_grounded_audit.md` §0 and `06_isomers_and_order.md`, and it is tested by the pre-registered refuter in §3 of the audit. The honest output of the run is a separator, not a ranking: name the slot, name the anchor, check the reach of each instrument in that regime, and keep the verdicts separate.

---

## Boundary

Nothing in this folder was written outside it. No file in `FRAMEWORK/`, `Scripts/`, `Questions/`, `Logs/`, `Registry/`, or another `Solutions/` folder was modified. Sources used were the local canonical framework files at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, plus public web pages actually opened and listed in `10_source_ledger.csv`. Every quoted figure string is an exact substring of `03-FIGURES_TEXT.md`, cited as `Fig N :line`. World sources are secondary corroboration only, and their overlap is declared rather than hidden.

---

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure census, findings F1 to F13, pre-registered refuter, recommendation, canonical usage check, retraction and confirmation log. |
| `02_outreach_email.md` | Two-stage, one-to-one offer. Residual and refuter first, verdict recorded before theory, links only after. Never asks for trust or agreement. |
| `03_public_contact_points.csv` | Verified public, institutional, opt-in submission and contact venues in monetary versus fiscal policy research. No personal emails. |
| `04_links_and_distribution.md` | Public links actually fetched, wider literature, distribution rules, two-stage offer, honest fetch failures. |
| `05_what_shape_means.md` | Canonical reading of "shape" for this question from the eight essays, with sources and a correction to my first reading. |
| `06_isomers_and_order.md` | Supporting derivation: monetary and fiscal as isomers over a fixed policy atom set, the order of composition in a liquidity trap, the cycle of debt dynamics, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer: per-slot verdicts kept separate, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check list. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by / Sources. |
| `10_source_ledger.csv` | One row per source actually read, with author, venue, year, accessed date, quote, field, overlap, status, and files used in. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, round-trip gap `R_T`, strains, verdict on the solution, honest statement of shared evidence pool. |

---

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree with the verdict.
- No bulk-send plan.

Three reasons, in the figures' own words:

1. **Agreement is not an anchor.** Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." A list selected for receptiveness is a list selected to agree.
2. **Shared evidence disqualifies a verdict.** Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Macroeconomists who read the same journals and the same data releases are one pool talking.
3. **A verifier must not hold the interior.** Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Showing the full framework before asking for a verdict on the stage-1 output spends the only thing the outside frame contributes.

Legally, scraping personal emails for unsolicited bulk outreach breaches GDPR and CAN-SPAM style rules in many jurisdictions. The public opt-in venues in `03_public_contact_points.csv` avoid both the structural failure and the legal one.

---

## Suggested next step

Take `01` and `08` to the public venues in `03`. Ask what would count as a failure of the separator. Record that verdict before showing any theory. A refutation is more useful than an endorsement, and later agreement is never pooled as corroboration (Fig 2 :42: "Buy independence in proportion to the cost of being wrong.").
