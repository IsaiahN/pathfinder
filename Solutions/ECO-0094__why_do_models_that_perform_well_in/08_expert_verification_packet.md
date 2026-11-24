# Expert verification packet: the Tether on ecological model transfer

**What this is:** a claim in a form an ecological modeller can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` on its ecological binding, not `grounded`.** No measurement of a specific transfer failure is claimed. This is a shape and a route, not a result.

**Status: simulated derivation checked for internal consistency against the figures, not a ground reading.** It cannot settle the question it reports on.

## 1. The claim, in one paragraph

A model that predicts well in region A is not a standalone capability. Its performance is a property of the model together with the habitat of A, the conditions, actors and relations present when it was fitted. Transfer to region B substitutes a habitat the modeller did not choose, and what was essential in A but not reproduced in B stays invisible until the prediction fails. Predictor roles are relative to the residual in the habitat where they were learned, so they do not carry over as fixed good predictors. A fitted coefficient set is a recording of one occasion, not a generator; what can cross scales is a method, with a round-trip gap that must be measured. Validation inside A shares an evidence pool with fitting and cannot see the failure. The claim offers a shape any explanation must have, three refuters written in advance, and the instruments that would close it.

## 2. Three checkable sub-claims

### C1: framework-internal, checkable by reading Figure 11
- **Statement:** capability lives in model-and-habitat; isolation substitutes a habitat; what you failed to reproduce is invisible until the goal fails.
- **Source, verbatim:** Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another." Fig 11 :67 "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose." Fig 11 :68 "what you failed to reproduce is invisible until the goal fails". Also Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
- **What to check:** are these lines present as quoted in `FRAMEWORK/reference/03-FIGURES_TEXT.md`? Do they govern the transfer case, or are they about a different object (agent survival)? If the latter, the claim has strained the figure and should be re-censused.
- **Refuter:** a documented habitat substitution (actors, conditions and relations independently measured in A and B) that leaves model performance unchanged with the model unchanged; or predictor valence invariant across a documented change of residual in two habitats.

### C2: ecology-facing, checkable against validation practice
- **Statement:** aggregate skill inside A is not transfer skill. Random cross-validation draws training and test folds from one evidence pool; the transfer-relevant residual is per site, per species or per season.
- **Source, verbatim:** Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
- **What to check:** would a blocked or external validation in three target regions give a materially different error estimate from random CV in A? The literature predicts it will: Roberts et al. 2017 report that random validation of structured ecological data causes "serious underestimation of predictive error".
- **Refuter:** a shared-evidence-pool validation design that detects transfer failure as reliably as independent external validation across three target regions, reproduced by a second group.

### C3: framework-internal derivation, checkable by reading Figures 4 and 13
- **Statement:** a local fit is a recording of one occasion; carrying it to a general claim and back incurs a round-trip gap that must be measured; spatial and temporal transfer are different terms.
- **Source, verbatim:** Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 13 :76 "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."
- **What to check:** is the round trip being treated as identity (gap assumed zero) anywhere in the claim? It is not: the gap is recorded qualitatively as the set of dropped constraints, and no numerical value is asserted.
- **Refuter:** a measured round-trip gap of zero for a transferred local fit on independent ground in three target regions, reproduced by a second group; or an instrument showing that a spatial transfer and a temporal transfer are the same term.

## 3. What is explicitly not claimed

- Not that the algorithm, the data volume or the tuning was bad. Those are bounded to A.
- Not that the ground changed. Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." What changes is the habitat and the channel to it (Fig 10 :24).
- Not a name for the mechanism in any specific failure. That is `gap` until an instrument closes it (Fig 13 :135).
- Not that many models validated in A corroborate the claim. Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
- Not `grounded`. No measurement at B was taken by this derivation.
- Not a general theory of ecological prediction. It returns a shape, not a name.

## 4. Provenance

- Question: `Questions/ecology.txt` line 115, section 10, "Measurement, prediction, and ecological theory"; ID ECO-0094.
- Figure text extracted verbatim into `FRAMEWORK/reference/03-FIGURES_TEXT.md`; all `Fig N :line` quotes above were checked against that file this session.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`; metalaw note: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Essays by Isaiah N read 2026-11-23, listed in `05_what_shape_means.md` (seven of eight; the eighth was not opened and is not quoted).
- World sources read 2026-11-23: Estrada-Peña 2026 (Pathogens), Roberts et al. 2017 (Ecography), Oreskes et al. 1994 (Science), Adel and Wong 2015 (AAAI). Full provenance and quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

1. Habitat swap test with independently measured actors, conditions and relations.
2. Valence test on the terms the model uses under a documented change of residual.
3. Independence test: blocked or external validation versus random CV across three target regions.
4. Measured round-trip gap R_T for a method carried from A to B and back.
5. An imported term with source provenance and a shadow test (Fig 6 :23, Fig 8).

Agreement with this packet does not settle it. Only the ground does.

## 6. What an expert can check in twenty minutes

1. Read Fig 11 :39, :49, :66-68, :73 and Fig 4 :25, :30. Nine short passages.
2. Say whether the habitat-substitution claim describes a failure pattern they have actually seen, or whether a better description exists.
3. Name one validation design in their own work that would distinguish shared-pool skill from transfer skill, or say why none is available.
4. Point at the refuter most likely to fire and give a reason.
5. Send the refutation. A failure is more useful than an endorsement.
