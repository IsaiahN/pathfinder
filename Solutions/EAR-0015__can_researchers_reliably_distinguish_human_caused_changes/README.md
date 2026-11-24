# Solution EAR-0015: figure-grounded package

**Question:** Can researchers reliably distinguish human-caused changes in extreme events from natural variability?

**Source:** earth systems.txt line 22

**Section:** 2. Climate sensitivity, variability, and extremes

**Mode:** `specified` on the split verdict, `general` on the structural shape, `grounded` on the observation-only sub-claim. Nothing in this folder settles the question it reports on.

**Status:** done

**Registry status:** pending

## The question restated as an effect

The word "reliably" is the load-bearing term. Stated as an effect, the question asks whether there exists a method that, given an observed extreme event or class of events, returns a discrimination between two candidate sources (anthropogenic forcing on one side, internal natural variability on the other) such that:

1. the residual is indexed per slot (event class, region, variable), not hidden in a global average;
2. the discrimination is anchored in something that does not change its answer when a frame pushes on it;
3. the same per-slot answer would be returned by a second frame whose closure differs from the first.

An answer would look like a bound on the per-slot risk ratio that survives a change of model, a change of observational dataset, and a change of event definition. Bind that as an ordinary term (formula step "Direction"): **reliable discrimination = positive per-slot residual against a non-updating anchor, returned by low-overlap frames.** Once bound, the sought-for shape accrues a residual like anything else and can be refused. That binding is what the derivation tests.

## Boundary and simulation notice

This is a **simulated derivation checked for internal consistency against the figures, not a ground reading.** *The Recursive Self-Improvement Trap* (read this session): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This folder cannot settle the scientific question it reports on. It can only report the shape a checkable answer must have, and the refuters that would break it.

Work stayed inside this folder. Figure quotes are from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (read verbatim this session), cited as `Fig N :line`. World sources were opened and recorded with author, venue, year, accessed date and a quote in `10_source_ledger.csv`.

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure lines before conclusions, findings F1 to F8, pre-registered refuter, recommendation, canonical usage check, retraction log. |
| `02_outreach_email.md` | Two-stage one-to-one offer: residual and refuter first, verdict before theory, links only after. No request for trust or agreement. |
| `03_public_contact_points.csv` | Public, opt-in institutional contact and submission venues in climate attribution research. No personal emails. |
| `04_links_and_distribution.md` | Sources actually fetched, wider literature, distribution rules, two-stage offer, one failed fetch recorded. |
| `05_what_shape_means.md` | Canonical reading of "shape" for this question from the essays, with sources read this session declared. |
| `06_isomers_and_order.md` | Supporting derivation: class versus single event, union versus partition, and dependency order, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized per-domain answer, mode, non-claims, falsifiers, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT / cost if wrong, undoable, reversed by / Sources. |
| `10_source_ledger.csv` | One row per source actually read, including local framework files. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, comparison, verbatim checks, round trip gap R_T, strains, verdict. |

## What is deliberately not here

- No personal emails of named individuals. No scraped contact lists. No bulk-send plan.
- No ranking of researchers by how likely they are to agree with this derivation. Selecting for agreement manufactures the correlation that makes agreement worthless (Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool").
- No claim that this derivation overrides the published IPCC assessment or the peer-reviewed attribution literature. Those are world sources and are treated as secondary corroboration, never as a verdict handed to the figures.

## Headline verdict

The answer is not one yes or no. The question is a **union compound** (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again"). At the scale of **classes of events** against the **observed record**, the discrimination is anchored and can be reliable when low-overlap frames agree. At the scale of the **counterfactual natural world**, there is no nameable anchor: the baseline is produced by a model frame, so reliability is conditional on independence between frameworks. At the scale of **one specific event**, no source-discriminating instrument returns an answer at that resolution, so the honest status is `unreached`, not `unreachable` and not silence (Fig 13 :134: "Unreachable is a verdict here, not a silence"). Verdicts are kept separate and never averaged.
