# Solution REA-0016

**Question:** How should a system decide when new evidence should change a belief it has learned?

**Source:** reasoning.txt line 21 (question 16 in the file), section "2. Learning and generalization".

**Section:** 2. Learning and generalization.

**Mode:** `general` on the structural shape of the decision loop, `specified` on the decision rule itself (it makes a falsifiable prediction about which term should be refused and when). Nothing here is `grounded`: no measurement in this simulated derivation settles a real belief change.

**Status:** done.

**Registry status:** pending.

**Field for public contact points and outreach:** belief updating research (belief revision, Bayesian epistemology, continual learning, prediction-error neuroscience, judgement and decision making).

## The question restated as an effect

A system holds a belief `b` learned from its own history and inherited prior, mixed by weighting `w`. New evidence `o'` arrives. The prediction `Γ(b,a)` misses: `R = |Γ(b,a) − o'|`, measured per object slot. The decision to be made is which of four things to do with the miss: ignore it as transferred, extend perception toward it as novel, re-fit a broken binding, mint a new term, or refuse a term already held. The fifth option is the belief change proper. Each option leads to a different next reach, so the answer must be stated in effect terms before any figure is chosen.

An answer would look like a decision rule: a predicate over the per-slot residual, the set of bound terms, the cost of stating an alternative, and the state of the anchor, that returns either "hold" or "refuse term t and add its refusal". This is bound as an ordinary term below (Formula step "Direction"), so it can accrue a residual and be refuted rather than remaining an invisible preference.

## What governs this question

The figures govern it directly. Fig 5 names a fifth kind of gap, **REFUTED**, with no branch in the four-kind pipeline. Fig 5 gives the ranking rule for which belief to change: the term whose residual "PERSISTS AND DOES NOT TREND DOWN". Fig 6 gives the mechanism: a refusal is added, nothing is deleted, and the reach falls because something was added. Fig 1 requires the signal to be per slot, never aggregated. Fig 2 requires the anchor to stay fixed while frames update. Fig 12 and the Operators table supply negation, the operator a vocabulary needs in order to refuse rather than only accumulate. Fig 6 :47 records the one honest open case.

This is a simulated derivation checked for internal consistency against the figures, not a ground reading. By *The Recursive Self-Improvement Trap*, LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." It cannot settle the question it reports on.

## Files

- `README.md` (this manifest)
- `01_figure_grounded_audit.md` derive-first audit: residual, domain census, verbatim figure census, findings F1..F8, pre-registered refuter, recommendation, canonical check, retractions
- `02_outreach_email.md` two-stage offer, residual and refuter first
- `03_public_contact_points.csv` public, opt-in institutional venues in belief updating research
- `04_links_and_distribution.md` verified public links, wider literature, distribution rules
- `05_what_shape_means.md` canonical reading of "shape" for this question from the essays
- `06_isomers_and_order.md` supporting derivation: order of the five bins, why negation is not a bond, analogues
- `07_the_tether_answer.md` synthesized answer, mode, non-claims, what would settle it, honest stop
- `08_expert_verification_packet.md` the one to send: claim, three checkable sub-claims, refuters, provenance
- `09_watson_answer.md` canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT / Sources
- `10_source_ledger.csv` one row per source actually read
- `11_audit.md` independent second-seat re-census and round-trip gap R_T

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Selecting people for receptiveness manufactures the correlation that would make their agreement worthless. Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention."
