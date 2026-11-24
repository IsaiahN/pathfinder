# Fit and transport: union, order, and the analogue that fails

**Mode: `specified` on the falsifiable parts, `general` on the structural distinction. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).**

## RESIDUAL

Is "the model fits historical data" and "the model generalizes to new conditions" one question with a hard part, or two conditions of a compound? If two, what is the order of operations, and what analogue keeps us from picking a benchmark before describing the residual?

## DOMAIN CENSUS

Atoms held: residual R, ground, anchor, frame, habitat, closure, round trip, slot. Bonds held: the seven plus negation. No new primitive is available without import. The two candidate arrangements are a partition (split the data into train and test and treat fit and transport as separate subproblems) and a union (fit and transport as overlapping conditions with a compound at their intersection).

## DERIVATION

### Q1. Partition or union?

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55-56: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

A random train/test lever clears the fitting region and leaves the transport intersection standing, because a low-overlap condition still binds. So the compound is a **union**, and its intersection has its own loop and its own ground.

**Falsifier, written before the run:** if a single lever (for example, one i.i.d. split protocol) is shown to clear both the fitting region and the transport intersection, the union reading is refuted and the partition reading stands. This is the same test as refuter 2 in `01_figure_grounded_audit.md` §4, reused deliberately.

### Q2. What is the order of operations?

Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Ordered chain for this question:

1. Describe the residual in effect terms (transport residual R(M, C)).
2. Fix the anchor: seal the new conditions; forbid updates from them (Fig 2 :29-30).
3. Enumerate the habitat: list actors, conditions and relations in contact with the residual (Fig 11 :43-44).
4. Choose the instrument that reads the anchor; improve it from an instrument already returning something (Fig 6 :32-33).
5. Range the model separately against each condition; record the residual per slot (Fig 1 :19, Fig 2 :46).
6. Measure the round-trip gap and report it (Fig 4 :30-31).
7. Compare conditions; pick the next one against the residual the last one surfaced (Fig 7 :36).

A vocabulary without sequence cannot write this: Fig 12 :112, "A plan is a sequence. A goal is a comparison. Progress is a subtraction." The order is part of the term. Swapping steps 2 and 4 (choosing a metric before sealing the anchor) produces a different and invalid test, which is Fig 12 :94: "The arrangement is the substance."

**Falsifier:** show a valid transport test that chooses its metric from the test data, or that enumerates conditions after seeing results. That breaks the dependency order at Fig 3 :20.

### Q3. Is there an isomer claim here?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Two validation protocols can share every atom (same model, same data, same metric name "accuracy") and differ only in which bond arranges them:

- Protocol A: `{model, historical data} -> fit -> score on a split of the same pool`. The residual is computed inside one closure.
- Protocol B: `{model, historical data} -> fit -> score on a sealed low-overlap condition`. The residual is computed across a boundary.

Same ingredients, different arrangement, different substance. By Fig 12 :117 they are isomers, and the difference is invisible if a report records only the ingredients ("we used cross-validation") and not the bond ("which pool was the holdout drawn from?"). Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

The weaker reading is that A and B share a **functional group** rather than being isomers: Fig 12 :123, "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Both contain a fit-and-score substructure; the qualifier is whether the score crosses a closure.

**Falsifier:** show a reported protocol in which the ingredient list determines the bond, so that recording ingredients records the arrangement too. That breaks Fig 12 :5. For most real reports this falsifier will fail to fire, which is the point.

### Q4. Which analogue is ruled out?

The tempting analogue is "cross-validation is a test harness, so it is a transport test." Fig 11 :70 refuses it: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." A more careful analogue is *external validation* in clinical prediction (Collins et al., BMJ 2015): the frozen original model is applied to new participant data and compared with observed outcomes. That is a transport-shaped analogue, but it is a world import with provenance, not a figure derivation (Fig 6 :23).

Fig 8 :53 still governs: "Residual first, frame second." Describe R(M, C) first; pick the analogue only after. Otherwise any field will seem to fit.

### Q5. Two currencies, held apart

Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."

A validation protocol costs two things that do not add:

- **Bits:** how much must be stated to specify the protocol (which conditions, which seal, which per-slot residual).
- **Actions:** how much it costs to actually obtain the new-condition observations.

A cheap-to-describe protocol (a random split) can still be expensive in the wrong currency if it gives no transport information; an expensive-to-obtain external validation can be cheap to state. Fig 12 :129-130: "Neither figure predicts the other, so both are read or the choice is made blind." Summing them into one "validation score" is the named error, not the fix.

**Falsifier:** show a single scalar that prices both the description and the actions without loss, such that a protocol's rank is unchanged. That breaks Fig 12 :130.

## CONCLUSION

Fit and transport are a union compound, not one hard question (Q1). The order of operations is fixed by dependency, with the anchor sealed before any metric is chosen (Q2). Two protocols that share every ingredient but differ in the bond are isomers under Fig 12, which is why a report that lists only ingredients cannot tell you whether a test was a transport test (Q3). The test-harness analogue is refused; the external-validation analogue is an import with provenance (Q4). Description cost and action cost are two currencies and cannot be summed (Q5).

Each conclusion carries a falsifier written before the run. After re-census, one strain survives: "condition slot" for per-slot reporting is a level crossing from Fig 1's "object slot". It is declared in `01_figure_grounded_audit.md` §7, not hidden.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Collins et al., BMJ 2015, opened this session for the external-validation analogue. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor, independence), Fig 3 (dependency order), Fig 4 (round trip), Fig 6 (import with provenance, instruments improved from worse ones), Fig 7 (next room differs), Fig 8 (residual first), Fig 9 (union versus partition), Fig 11 (habitat, substituted test harness), Fig 12 (isomer, functional group, sequence, two currencies), Formula (steps 5 and 7). Strains after re-census: one declared level crossing, none hidden.
