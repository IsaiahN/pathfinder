# Solution BUS-0078 - figure-grounded package

**Question:** Can firms forecast demand accurately enough to reduce waste without creating shortages?

**Source:** business.txt line 103

**Section:** 8. Operations, supply chains, and resilience

**ID:** BUS-0078

**Mode:** `specified` on every substantive claim about forecasting systems and operations, `general` on the structural shape. Nothing here is `grounded`: no per-slot measurement of waste and shortage against realized demand pays for the shape in this folder. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** all figure quotes are taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not the size of the forecast error but whether a firm can keep two operational outcomes apart and still move both in the right direction. In effect terms: a firm's library Γ predicts demand Γ(b,a); customers return o′; R = |Γ(b,a) - o′| is measured per SKU, period and market slot, never averaged across slots (Fig 1 :19, Fig 1 :22). The action a is the production or replenishment quantity; the consequences are waste (overage) and shortage (underage), which are different quantities in different currency and do not add (Fig 12 :125).

- Option A, "a sufficiently accurate point forecast removes both": leads to the prediction that a single accuracy number is the right target and that waste and shortage fall together as error falls.
- Option B, "accuracy is a filter and the two outcomes are a union that must be kept separate": leads to the prediction that a single accuracy target destroys the diagnostic (Fig 10 :26, *"saturated metrics, pooled readings"*), that the optimum deliberately tolerates some shortage (the newsvendor result, world source N1), and that the binding constraint is contact with realized demand rather than model sophistication (Fig 11 :40).

What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a shape naming the two conditions that must both hold for waste to fall without shortage rising, plus an instrument that discriminates a channel failure (stale or pooled readings) from a reach failure (novel demand with no atom in history). Until bound, that shape predicts nothing and no check in the loop can see it. It is now bound, so the refuter in `01` section 4 can fire on it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged. The literal form of the question, zero shortage alongside less waste, is **refused as written** because the canonical operations model prescribes a nonzero optimal shortage probability (world source N1). The refusal returns the question to the census; it does not flip the figure verdict.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, figure census, findings F1 to F11 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in demand forecasting and operations research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer, authorship caveat |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: isomer and functional-group readings, dependency order, competing forecasting explanations, with a falsifier |
| `07_the_tether_answer.md` | the synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version |
| `08_expert_verification_packet.md` | **the one to send:** one-paragraph claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check list |
| `09_watson_answer.md` | canonical WATSON output shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by / Sources as linked titles |
| `10_source_ledger.csv` | one row per source actually opened: url, title, author, venue, year, accessed date, quote, field, overlap, status, used in file |
| `11_audit.md` | independent second-seat re-census from the residual line alone, comparison with the primary census, verbatim lines checked, round-trip gap R_T, strains, verdict on the solution |

---

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.
- No claim that this derivation is `grounded`, no claim that it settles BUS-0078, and no claim that the framework is the only true account of demand forecasting.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable forecasters manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness, or an ensemble of models trained on the same sales history, is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
