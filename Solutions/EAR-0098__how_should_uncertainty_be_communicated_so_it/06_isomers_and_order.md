# Isomers and order in uncertainty communication

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Two uncertainty statements can contain the same number, the same range and the same confidence label and still produce different risk takeaways. Why, and what order must a communication chain respect so that the difference is visible rather than accidental?

## DOMAIN CENSUS

Atoms held: a probability number, a range, a confidence label, a slot, a consequence, a threshold, a provenance record, a ground. Bonds held: the seven, including sequence (→), comparison (⋛), conjunction (+) and subtraction (−). No new primitive is needed. Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."

## DERIVATION

### Q1: are two same-ingredient uncertainty statements isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
Operators :4: "The bond carries information the operands do not, so a term that names only its ingredients has recorded half of itself."

Write two statements over the same atoms `{number, range, confidence, slot}`:

- M1: `(number + range + confidence) ⋛ threshold`, where the comparison binds the estimate to a decision threshold.
- M2: `(number + range + confidence) → consequence → slot`, where the sequence binds the estimate to what would be observed and where.

They share every ingredient. Under a flat notation they are spelled identically, so a search enumerating spellings counts them as one candidate (Fig 12 :23-27). Under the bond they are different substances: M1 is a comparison, M2 is a route. That is isomerism in the figure's sense, and it is decisive in behaviour: a threshold statement and a consequence route produce different recipient takeaways even with identical numbers. Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction." A vocabulary that records only the ingredients can name the estimate and cannot name what to do with it.

**Falsifier, written before the run:** if two statements with the same atoms under different bonds are tested against a ground and produce identical calibrated takeaways across recipients and decisions, the isomer claim fails and the messages are merely two spellings of one state.

### Q2: are they a functional group rather than isomers?

Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

If the two statements are written over different atoms, for example M1 uses `{number, range, confidence, threshold}` and M2 uses `{number, range, confidence, slot}`, they share only the estimate core. They are then members of the same functional group (an uncertainty statement bonded to something), not isomers (same atoms, different bond). The stronger isomer claim requires the full shared atom set; the weaker functional-group claim is what an assessment actually exhibits when one message is about a threshold and another about a place. Both forms are recorded; the weaker one is easier to defend and the stronger one is the checkable target.

### Q3: what order must the communication chain respect?

Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
Fig 3 :24-27: the middle link, having terms for what a situation offers and being able to say what would count as progress, "has neither, so it attracts the least attention and the fewest instruments."

Dependency order for this question:

1. **Anchor.** Name the ground that settles the risk (Fig 2 :29). Without it there is no domain.
2. **Slot.** Index the residual per slot (Fig 1 :19). Without it the signal aggregates away (F1).
3. **Checkable term.** Install what can be violated (Fig 10 :19); a label with no ground is a declared meaning (Fig 10 :49). This is the middle link where chains break.
4. **Bond.** Attach the estimate to consequence, threshold and provenance (Fig 12; Operators :4).
5. **Reversible cuts.** Keep every framing ranked and reversible (Fig 9 :40-41).
6. **Carry.** Enumerate the cascade outward until the residual stops mattering (Fig 11 :52-53).

Optimising step 6 (more channels, more graphics) cannot rescue a message broken at step 3. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Most communication effort lands above the break because that is where the measurements already exist: more detail, more channels, more wording tests. The missing instrument is at step 3.

**Falsifier, written before the run:** if a communication chain that omits the checkable-term step still produces grounded, per-slot, provenance-carrying takeaways under a blind test, the dependency order is wrong and must be re-censused.

### Q4: what is the round-trip gap R_T for a communication "formula"?

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Sent up (x): the full figure set, chiefly Fig 1 per-slot, Fig 10 channel, Fig 9 bonds and reversibility.
Abstraction (T_A): the shorthand in `02_outreach_email.md`, "report per slot, keep the anchor reachable, make labels checkable, carry provenance."
Concretisation (T_E): an actual public-facing uncertainty statement.

R_T is nonzero. What the shorthand holds but a concrete statement routinely drops: the tail quantification (lost to a single number), the slot (lost to a global headline), the provenance (lost to a bare label), and the reversibility of the framing (lost when one wording is published as final). What survives cleanly is the demand that the ground remain reachable. R_T is not measured numerically here because no ground reading was taken; it is recorded as the enumerated set of dropped constraints, which is the honest report Fig 4 :31-32 requires. Treating a condensed communication rule as identical to the figure set would set R_T to zero and would be the dead-reckoning error the figure names.

## CONCLUSION

Two uncertainty statements with the same ingredients but different bonds are isomers in the figure's sense, and that is the structural reason identical numbers can produce different risk takeaways. The dependency order of a communication chain is anchor, slot, checkable term, bond, reversible cut, cascade. The middle link, the checkable term, is where real chains break because it has the fewest instruments. The round trip from figures to a public statement loses tail, slot, provenance and reversibility, and that loss must be measured rather than assumed zero.

## ANCHOR

Verbatim figure text extracted from the local `03-FIGURES_TEXT.md` this session; the local figures README and formula; no measurement was used.

## FIGURE CENSUS

Fig 12 (isomer, functional group, settled molecule, plan/goal/progress), Operators table (bond carries information), Fig 3 (dependency order, middle break), Fig 2 (anchor), Fig 1 (per slot), Fig 10 (checkable term), Fig 9 (reversible cuts), Fig 4 (round trip), Fig 11 (cascade). Strained after re-census: none. The isomer claim is `specified` and unmeasured; the functional-group fallback is the weaker, safer form.
