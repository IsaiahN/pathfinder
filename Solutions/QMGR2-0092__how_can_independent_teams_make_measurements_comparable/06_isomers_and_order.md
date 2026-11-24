# Isomers, union and order in the comparability question

**Mode: `specified`.** A simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

Two teams report the same label for readings taken with different instruments and assumptions. The residual is the unlicensed substitution between those readings. Three questions are owed: (1) is this one problem or a union of conditions, (2) in what dependency order must the parts be attempted, and (3) are the two readings isomers under Fig 12's definition, or merely two spellings of one thing?

## DOMAIN CENSUS

- Atoms held: the four domains of `01_figure_grounded_audit.md` §1 (instrument frame, anchor, convention seam, comparison and lineage).
- Bonds held: the seven, plus negation. Relevant here are identity (≡), comparison (⋛), sequence (→) and subtraction (−).
- No new primitive is available without import. Units, protocols and reference materials are bindings or imports from the metrology frame; they add no atom to the six-term substrate.

## 1. Union before search

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55-56: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

Comparability bundles at least four conditions:

| condition | fails when | lever that clears only this condition |
|---|---|---|
| C1 same referent | the teams measure different quantities under one label | define the measurand in effect terms |
| C2 same ordering and unit | one reading orders, the other directs; or scales differ | author a convention, stop before it decides a value |
| C3 independent evidence | teams draw on one report or one calibration pool | keep verdicts disjoint until both are recorded |
| C4 recorded route | equal values reached by different routes with no lineage | carry provenance and the round-trip gap |

A single protocol clears C2 and leaves C1, C3 and C4 standing. Fig 9 :57-58: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." So a comparability failure with two conditions active is not a harder one-condition failure; it needs its own loop.

**Falsifier, written before this run:** if a single lever is shown to clear all four conditions while leaving no residue describable as a compound, the union reading fails and the problem is a partition after all.

## 2. Dependency order

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

| link | what must be true | what it consumes | figure |
|---|---|---|---|
| 1 perception | each instrument already returns something that fails to resolve | the instrument and its slot | Fig 6 :34-35 |
| 2 vocabulary / convention | there are terms for what the shared reference affords | link 1 | Fig 10 :16-17 |
| 3 objective | each team can say what counts as progress on its own residual | link 2 | Fig 3 :9-11 |
| 4 anchor registration | each frame corrected separately by a non-updating anchor | links 1 to 3 | Fig 2 :46 |
| 5 transform and round trip | bracket fidelity and ground pressure measured | link 4 | Fig 7 :38-39 |

Optimising step 5 with better statistics cannot rescue a missing step 4 anchor. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can... it is a reading of nothing."

**Analogue check, low overlap.** Psychometric integrative data analysis names the same order: "without common measures, IDA is a nonstarter", and common-item or chained-item designs place independent studies on a common metric before comparing scores (Bauer and Hussong, 2009). Metrology names it again: SI units are defined by fixing constants, and key comparisons publish degrees of equivalence to a common reference value (NIST, BIPM). These are world corroboration only. The figure line decides the order.

## 3. Are two same-labelled readings isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
Fig 13 :35-36: "Space, time and energy are not three readings of one quantity. Neither are spectrum, gradient and network. Each answers a question the other two cannot: adjacency is not duration, an ordering is not a pathway, a pathway is not a direction. If two members drew on the same underlying fact, their agreement would carry no information, and one of them would be redundant rather than minimal."

- **Weak form.** Two teams share only the label and the general form "an instrument returns a number for a quantity". Under Fig 12 they are a **functional group**, not isomers. The group says what kind (a reading), the qualifier says which member (team A's instrument, team B's instrument).
- **Stronger form.** If both teams' measurements are written over the full shared atom set, the measurand, the unit ordering, the instrument gradient, the observer network and the time of observation, and differ only in which structure mediates which state, then they are **isomers**: same atoms, different arrangement, different substance. That is the checkable structural claim.
- **The failure mode.** Two readings can share every ingredient and be inverses of one another (Fig 12 :96). A bare number hides this; the bond and the lineage carry it.

**Falsifier, written before the run:** if a source-discriminating instrument shows that the two readings are the same quantity at the same level, that the arrangements make no behavioural difference, and that the lineage changes nothing for any downstream decision, the isomer claim fails and only the functional-group claim stands.

## 4. Identity is not equality of readings

The Operators table defines identity (≡) as "two names, one referent" with the test "substitute one for the other. Is anything lost? No." Comparability is exactly this test applied to two readings, so the burden is on showing that nothing is lost by the substitution. Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 8 :39: "So a search that finds nothing is never a proof of absence." Failure to find a loss is not proof that no loss exists; it is a report at the current union horizon. The lineage is what makes the report checkable later (Fig 13 :129: "It is recoverable from the lineage.").

Comparison (⋛) is "a threshold relation between two quantities" (Fig 12 :87). A tolerance is a ⋛ relation, which is a goal-like comparison (Fig 12, Operators table: "a goal is a comparison, which is why a vocabulary without it cannot state one"). A tolerance is therefore a filter for what gets tested, not a witness that the two readings are identical. This is the structural reason for F7 in `01_figure_grounded_audit.md`.

## 5. The round trip is the order test

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

The common item is sent up through A's abstraction into the shared convention, then brought back down into B's concretisation, and compared with what went out. R_T is `gap(x, (T_E ∘ T_A)(x))` (Symbols table). A nonzero gap is not a failed comparability claim; it is the honest measurement of what the shared description cannot hold. Treating the condensed protocol as identical to the full practice would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

**Falsifier, written before the run:** if R_T is zero across every distinguishable condition of instrument, operator and assumption, the round-trip finding is unnecessary and a single direct comparison suffices.

## CONCLUSION

The question is a union of four conditions, not one hard problem, and the conditions must be attempted in dependency order from instrument contact to anchor registration to transform. Same-labelled readings are a functional group in the weak form and a genuine isomer claim in the stronger form over the full shared atom set. Identity of readings is a burden of substitution, not a given, and the tolerance that tests it is a filter, not a witness. The round trip with a measured R_T is the only honest report of what the shared convention cannot carry.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the Operators and Symbols tables; the eight essays; NIST, BIPM, Bauer and Hussong, and Province and Borecki as secondary corroboration. No measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency order, link with no instrument), Fig 4 (round trip, R_T), Fig 7 (bracket fidelity and ground pressure), Fig 8 (no proof of absence, residual first), Fig 9 (union versus partition, filters versus witnesses, describe before looking), Fig 10 (convention makes the bug statable), Fig 12 (isomer, functional group, comparison bond, inverted readings), Fig 13 (states and structures, lineage is the proof), Operators (identity and comparison tests), Symbols (R_T). Strains after re-census: none internal; the shared-reference-items versus independence tension is resolved in `01_figure_grounded_audit.md` §5 by distinguishing the anchor from the frames' evidence.
