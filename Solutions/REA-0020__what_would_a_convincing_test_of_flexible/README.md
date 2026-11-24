# Solution REA-0020 - figure-grounded package

**Question:** What would a convincing test of flexible, out-of-distribution learning look like?

**Source:** reasoning.txt line 25

**Section:** 2. Learning and generalization

**ID:** REA-0020

**Mode:** `specified` on every substantive claim, `general` on the structural shape. Nothing here is `grounded`: no measurement pays for the shape in this folder. This folder contains a simulated derivation checked for internal consistency against the figures, NOT a ground reading, and it cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 6.

**Status:** done

**Registry status:** pending

**Figures authority:** every figure quote was taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

**Field for public contact points:** out-of-distribution learning tests research.

---

## The question restated as an effect

What is being decided is not the *accuracy* of a learner on a held-out split but the *duration for which the residual stays small as the environment changes*. In effect terms (Formula step 1; Symbols table, `R`, `s`):

- **b** is the learner's belief, formed from its training history and inherited priors.
- **a** is what the learner does: its prediction or policy on an input.
- **Γ(b,a)** is what the learner's library predicts will happen.
- **o′** is what the deployed environment actually returns.
- **s** is the environment, condition, hospital, camera trap, season or task slot. R is indexed per slot, never averaged into a single benchmark number (Fig 1 :19, Fig 1 :22).

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

- Option A, "a convincing test is a larger, harder held-out set from the same generator": leads to the prediction that generalization is a property of the model considered alone and that more test data settles it.
- Option B, "a convincing test puts the learner in contact with a habitat whose closure differs from training, and ranges it against a ground that does not move": leads to the prediction that generalization is a property of learner-and-habitat and that the test must change contact, not just sample more of the same closure (Fig 11 :39, Fig 11 :40, Fig 6 :23).

**What an answer would look like, written down and bound as an ordinary term before the run** (Formula, "Direction"): a test design with conditions whose conjunction keeps R small across shifted slots, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in `01_figure_grounded_audit.md` section 3 can fire on it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the derive-first audit: residual, domain census, figure census, findings F1 to F10 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in out-of-distribution learning tests research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer, AI-policy caveat |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: union vs partition, depth vs absence, order by dependency, analogues, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the OOD question, and no claim that the framework is the only true account of generalization.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
