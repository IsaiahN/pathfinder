# Isomers, union, and order in the ground-versus-channel question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The question asks how to identify the producer of an observed break. Before choosing any figure line, the residual is restated in effect terms: an apparent turning point R(s,T) is observed in slot s at time T, and two producers are compatible with it, ground change and channel change, with a possible mixed compound. Three supporting questions are owed:

1. Is this a partition or a union (structure)?
2. Are the two breaks different things even when the recorded step is identical (isomers)?
3. In what order must the tests run, and what breaks if the order is reversed (order and dependency)?

## DOMAIN CENSUS (supporting derivation)

Atoms held: a step change in a series, an anchor that does not update, a second frame with a declared evidence pool, a per-slot index, an instrument-change log, a habitat enumeration. Bonds held: comparison ⋛ (a threshold relation between two quantities), sequence →, production ⇒, subtraction −, negation ¬ (refusal), and the symmetric/conjunction bonds. No new primitive is admitted. Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

---

## Q1 - Partition or union?

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :55-56: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Applied here:

- **Partition reading (refused).** "Either the ground changed or the reporting changed, full stop." This would allow a single lever (fit a change-point model, then test a covariate) to close the question. It cannot, because a slot can be in both conditions, and the conditions can be coupled.
- **Union reading (adopted).** Three regions: ground only, channel only, both. Each has its own loop and its own ground. The mixed region is not "more of the same"; it is a compound that needs a different discrimination, namely a lag or a cross-correlation between the two records with a documented instrument-change timestamp.

Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

- **Falsifier, written before the run:** if a study shows that ground change and reporting change never co-occur in this domain, and that a single lever closes every slot, the union reading is unnecessary and the partition reading stands. Until such a census is produced, the union is the honest default.

**Status:** `single-source` at the figure level (Fig 9), corroborated by the canonical README's barrier-theorem framing but within the same evidence pool.

---

## Q2 - Are the two breaks isomers?

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

Fig 12 :94: "The arrangement is the substance."

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

A ground break and a channel break share the recorded ingredient: a step at T in a series. Under Fig 12's definition they are **isomers** if and only if they share the full atom set and differ only in the bond between atoms. Consider two enriched descriptions:

- Ground break: `presence(record X) → commitment(organisation Y) ⋛ threshold(T)`, with the anchor being a record that does not update on coverage.
- Channel break: `coverage(outlet A) → coverage(outlet B) ⋛ threshold(T)`, with the anchor being an instrument-change log.

Written this way they do **not** share all atoms: the ground break uses presence and commitment, the channel break uses coverage and a log. They are therefore not isomers in the strict figure sense. They are two different molecules that happen to have the same observable *ingredient*, namely the step.

The stronger isomer claim would require writing both over a shared atom set, for example `{presence, commitment, coverage, log, anchor, slot}` with different bonds. Then:

- ground break: anchor bonded to presence, presence producing commitment, compared at T;
- channel break: log bonded to coverage, coverage producing coverage, compared at T.

Same atoms, different bonds, different substance. That is a real isomer claim **if** the shared atom set can be defended. It is `specified`, unmeasured, and its falsifier is: if either break requires an atom the other does not, the isomer claim fails and the weaker ingredient-sharing reading stands.

Fig 12 :119 gives the related structural form: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." The anchor is a catalyst-like part in this derivation: it must survive its own use as a reference, otherwise it becomes another frame (Fig 2 :34) and the comparison drifts.

**Status:** `single-source` for the figure definition (Fig 12); the empirical occurrence is unmeasured. This is a structural analogy, not a claim of chemical or social identity. The strain is named, not hidden.

---

## Q3 - What order do the tests run in?

Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

The dependency chain for this question:

| link | question | what arrives | failure if missing |
|---|---|---|---|
| 1 perception | is there a record that does not update on reporting? | a ground reading per slot | everything downstream is a reading of a frame |
| 2 vocabulary | are there terms for what each record affords? | countability, coverage rules, logging rules | cannot say what the instrument can carry |
| 3 objective | can be stated what would count as progress? | a per-slot verdict with a non-updating anchor | no stopping rule; drift continues |
| 4 planning | design the two-frame comparison and the refuter | a test with a declared lag and covariate | sophisticated statistics on the wrong input |
| 5 learn and carry | record which condition bound in each slot, with dates | lineage for the next movement | a recording is carried upward as if it were a method |

Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."

Therefore the common research order (pick a dataset, run a change-point detector, then look for an explanation) starts at link 4 and assumes link 1. If link 1 is absent, the detector is measuring the channel and calling it the ground.

Fig 3 :25-26: "Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."

In this question the neglected middle link is the vocabulary of the channel itself: what the platform's ranking change, the dataset's coverage rule, and the coder's guideline each afford. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

- **Falsifier:** if a domain has a ready-made non-updating ground record and a fully documented channel log, and the detector on the reporting series alone still cannot be calibrated, then link 1 is not the binding link and the order must be re-censused.

---

## Q4 - The feedback loop: is this a cycle or a chain?

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Coverage can feed participation and participation can feed coverage. If the loop is positive, the series can tip without any exogenous ground crossing. If it is negative, the series can stabilise. A chain model (a single lever followed by an outcome) cannot represent closure at all.

Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

The discriminator must therefore be outside the loop. A record produced by the loop (for example, counts derived from the same posts that show the break) cannot serve as the anchor. Fig 11 :43-44: "The habitat is enumerated, never composed." / "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

- **Falsifier:** exhibit a movement where coverage and participation are provably independent at every time step, so the loop is absent and a chain model suffices. Then the cycle requirement is unnecessary for that domain.

---

## Q5 - The two currencies do not add

Fig 12 :125-126: "A composition costs in two currencies, and they do not add." / "Bits price the description. Actions price finding out whether it holds."

- **Bits:** the cost of stating a coordination model with an anchor, a second frame, a lag, and a per-slot index.
- **Actions:** the cost of actually fielding the independent record: on-site counts, roster verification, coding audits, access to administrative data.

Fig 12 :128-129: "The two readings come apart in both directions. A long chain of cheap parts is expensive to describe and may cost one action to refute. A short arrangement over a costly operand is cheap to state and may take a whole budget to settle."

A research team can have a beautifully specified discriminator (low bits) and no way to pay the actions, or a cheap field protocol (low actions) and an unstatable model. Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart." This is why the ranking filters in the master plan are budget filters and never verdict witnesses (Fig 9 :60).

---

## Q6 - Refusal before mint

Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so"

Operators table :57: "a refutation is a negation, which is why a vocabulary without it can only accumulate"

If a held term says "a break in the series means the movement tipped", and the discriminator shows the break disappears once the instrument-change covariate is added, the owed move is a **refusal** of that term, not a mint of a new theory. Fig 6 :42-43: "What is recorded only grows. What is reachable is derived, and it can fall. A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted."

So the folder records both the earlier reading ("a break indicates tipping") and its refusal. The record is not cleaned; the reach falls because a refusing term was added.

- **Falsifier:** if a vocabulary without negation can correctly retire a false term after a channel-change discovery, then the refusal requirement is too strong. Under the Operators table this is not available, since "a vocabulary without [negation] can only accumulate."

---

## CONCLUSION

The structure is a **union** of ground, channel, and compound, not a partition. The two breaks are **not strict isomers** as the records are normally written, because they share only the observed step; the stronger isomer form requires a shared atom set and has a stated falsifier. The order is fixed by dependency: a non-updating ground record must exist before any detector output means anything, and the neglected middle link is the vocabulary of the channel. Coverage and participation can form a cycle, so the anchor must sit outside it. Description cost and settlement cost are two currencies and cannot be summed. A channel-only break owes a refusal of the "tip" reading before it owes a new mechanism.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; local canonical files `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. No movement measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor, coherent drift), Fig 3 (dependency order, middle link), Fig 5 (refused bin, mint guards), Fig 6 (refusal changes reach, import), Fig 8 (surplus and union), Fig 9 (union versus partition, describe first), Fig 11 (habitat enumeration), Fig 12 (isomer, catalyst, cycle, two currencies, settled molecule), Fig 13 (closed set), Operators table (negation). Strains after re-census: the isomer claim is structural only (named); the strict-versus-weak isomer distinction is preserved rather than smoothed.
