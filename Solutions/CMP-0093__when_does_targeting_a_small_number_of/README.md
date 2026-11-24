# Solution CMP-0093 - figure-grounded package

**Question:** When does targeting a small number of influential nodes outperform broad, distributed intervention?

**Source:** complexity science.txt line 114

**Section:** 10. Intervention, control, and cross-domain theory

**ID:** CMP-0093

**Mode:** `specified` on every substantive claim, `general` on the structural shape. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** all figure quotes are taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not which strategy is better in the abstract, but the conditions under which the residual under a targeted intervention stays smaller than the residual under a distributed one. In effect terms:

- **b** is the intervener's belief about the network and how influence propagates, formed from observation and inherited structural priors.
- **a** is the intervention. `a_T` acts on a small chosen set of nodes; `a_D` spreads action across many nodes.
- **Γ(b,a)** is what the model predicts will happen under the action.
- **o′** is what the system actually returns after the intervention: cascade contained, infection averted, flow restored, species retained, failure stopped.
- **s** is the system and the time at which the reading is taken. R is indexed per system and per node, never averaged across systems (Fig 1 :19, Fig 1 :22).

`R_T = |Γ(b,a_T) − o′|` and `R_D = |Γ(b,a_D) − o′|`, both per slot. The question asks when `R_T < R_D` at the ground.

- Option A, "influence is an intrinsic property of a few nodes, so targeting always wins": leads to a universal rule, target the highest-centrality nodes regardless of task.
- Option B, "influence is a relation to the residual and the dynamics, so targeting wins only under stated conditions": leads to a conjunction of conditions plus instruments that would discriminate a failure of each.

What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a **shape** naming the conditions that must jointly hold for `R_T < R_D`, plus an instrument that would tell a failure of one condition from a failure of another. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in `01_figure_grounded_audit.md` section 4 can fire on it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, figure census, findings F1 to F10 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in network science, complex systems, and resilience research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the eight essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: isomer versus functional-group reading of the two strategies, dependency order, competing explanations, with a falsifier |
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
- No claim that this derivation is `grounded`, no claim that it settles the intervention question, and no claim that one centrality measure is the framework's answer.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
