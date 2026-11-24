# Solution BUS-0074 - figure-grounded package

**Question:** How much redundancy is worth paying for when the probability and cost of future disruptions are uncertain?

**Source:** business.txt line 99

**Section:** 8. Operations, supply chains, and resilience

**ID:** BUS-0074

**Mode:** `specified` on every substantive claim, `general` on the structural shape. Nothing here is `grounded`: the ground is a future disruption and has not yet returned a reading. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** all figure quotes are taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not the *amount* of redundancy as a number, but the *condition under which paying for redundancy is justified before the ground has spoken*. In effect terms: a firm's operating model Gamma predicts continuity of supply Gamma(b,a); a future disruption returns o-prime (a failed supplier, a closed port, a tier-three outage); R = |Gamma(b,a) - o'| is measured per slot (per supplier, component, lane, region, tier), not averaged across the network (Fig 1 :19, Fig 1 :22). The question asks how much premium to pay now against an R that has not yet arrived and whose probability p and cost C are both uncertain.

- Option A, "there is an optimal number we can compute from p and C": leads to a `general`-mode verdict stated before the ground returns a reading, which the ground-only rule forbids (Fig 2 :29).
- Option B, "redundancy buys independence and must be sized to the cost of being wrong, per slot, as reversible cuts": leads to a shape plus a decision rule, with the slot left indexed and the verdict held as `candidate` until a disruption settles it (Fig 2 :42, Fig 9 :41).
- What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a *shape* naming the conditions that must hold for a redundancy spend to buy real independence, plus an instrument that would discriminate a live slot from a pooled average and an independent source from a common-cause twin. Until that shape is bound it predicts nothing and no check in the loop can see it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged. No single number is asserted.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, figure census, findings F1 to F11 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in supply chain resilience and reliability engineering. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance, bundled-question, and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: common-cause twins vs independent closures, the two-currency price, dependency order, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the business question, no specific "optimal weeks of inventory" number, and no claim that the framework is the only true account of supply chain resilience.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
