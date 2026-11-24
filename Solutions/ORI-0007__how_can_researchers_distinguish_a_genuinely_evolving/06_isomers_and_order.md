# Cycle, catalyst, isomer and lineage - the supporting derivation

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The coarse readings of a repeating reaction and an evolving system can coincide. The audit derived four required properties of a discriminator. This file answers the structural sub-questions those properties leave open: what is the difference in **structure** between a cycle and a lineage, what is the difference in **order** between replay and inheritance, and can two systems with the same inventory be genuinely different substances? A falsifier is stated at the end.

## DOMAIN CENSUS

Atoms held for this derivation: the molecular species actually present in the flask and the bond types available to them, treated as the chemical level's `atoms(Γ)`. Bonds held: the seven, especially sequence (`→`), production (`⇒`), comparison (`⋛`) and subtraction (`−`); plus negation (`¬`) as the operator that can refuse a claim. No new primitive is available without import.

- **Cycle domain.** Actors: intermediates and catalysts. Currency: return to a prior state. Anchor: a measurement of whether a state recurs.
- **Lineage domain.** Actors: variants and their descendants. Currency: heritable carry-forward with differential persistence. Anchor: per-species identity across rounds.
- **Isomer domain.** Actors: same molecular formula, different bond arrangement. Currency: decisive behavioural difference invisible in the formula. Anchor: an instrument that separates the substances.

Union, not partition: a system can be cyclic in one respect and lineage-bearing in another. The union must be unbundled before searching (Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*).

## DERIVATION

### Q1 - What is the structural difference between repetition and evolution?

Fig 12 :121:

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

Fig 12 :119:

> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

A catalytic cycle has the form `A → B → C → A`. The last step returns to the first. Under the figure's test, the loop closes. Its time series is periodic in state even while concentrations change. An evolutionary lineage has the form `A → A' → A'' → ...` where each output is a **variant** of its predecessor, not a return to it. The chain cannot close by construction, because the variant carries a difference.

The catalyst clause matters: a part that survives its own use looks the same across uses. A replicator whose differences are carried does not. Because "nothing records which a term is", the observer must supply the lineage record. A single observation cannot tell you whether the species you see is a regenerated catalyst or a descendant of a variant. **This is the structural basis of the per-slot, lineage-bearing requirement.**

### Q2 - Is a new chemical species a new kind or a new arrangement?

Fig 12 :104:

> **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"**

Fig 13 :115:

> **"The set is closed. The arrangements are not. That gap is why import exists."**

At the chemical level, a newly settled molecule is a new **arrangement** over held building blocks. Once settled, it becomes an atom for the next round of chemistry. It is not a new primitive kind and does not require an import. This resolves the apparent conflict between closure and open-ended novelty: closure governs kinds, arrangement governs species. Fig 12 :103: *"Composition is recursive, and the level decides what is irreducible."*

**Consequence for the discriminator:** counting new species is legitimate, but only if the count is of *settled and composable* species. Unsettled side products are noise, not evolution. Fig 5 :49: *"Machinery firing is not the milestone. A running system can mint and still return nothing new, which is exactly what the third guard exists to record."*

### Q3 - Are two same-formula systems different substances?

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

The figure gives the chemical precedent in its own text (Fig 12 :97-98): silver fulminate and silver cyanate have the same composition and different properties, which forced structure into the notation. So a list of molecular formulas is not a description of the system. Two flasks with identical inventories can differ entirely in which bonds are held. This is the second reason an aggregate reading fails: the formula-level description is lossy in exactly the dimension that matters.

**Application:** a discriminator that measures only composition (which molecules are present) can still miss the difference between a repeating and an evolving system if the arrangements differ. It must be sensitive to arrangement, not just inventory. This is a structural claim, not a claim that assembly-index spectroscopy is the answer.

### Q4 - What is the order of the union?

Fig 12 :104 (above) and Fig 12 :111-112:

> **"A vocabulary without bonds can name a state and cannot name a route to one."**
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**

Sequence (`→`) is ordered; swap the operands and you get a different thing (Operators table: *"swap them. Does it become a different thing? Yes."*). Production (`⇒`) is stronger: the second operand *"did not exist before"* (Fig 12 :77). Comparison (`⋛`) is a threshold relation between two quantities, not a symmetric join.

The order of the derivation is therefore:

1. **Detect the cycle first.** Is the trajectory returning to prior states? If yes, the repetition account is live and must be refuted, not assumed away (Formula step 2: refuse before mint).
2. **Detect settlement second.** Are new species admitted and composable, or are they transient side products? A gate is not the ground (Formula step 5).
3. **Detect lineage third.** Are the differences carried forward with differential persistence? Fig 7 :33: *"variation inside, selection between."* Both factors are needed; zero either and the chain runs in place (Fig 7 :37).
4. **Name nothing until the ground pays.** Fig 9 :32: *"you get a kind of thing, never the answer itself."*

Negation is available for step 1: a claim that the system is repeating can be refused rather than replaced by a softer story. Fig 12 :135-136: *"it is not an eighth bond, and it is not a relation that fails the six tests. It is a unary operator."*

### Q5 - Round trip gap for the structural story

Fig 4 :30:

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Sent up: the figure structure, cycle versus settled-molecule recursion. Brought down: the concrete claim "measure lineage per species." What the shorthand drops is the isomer requirement (same inventory can differ in arrangement), the union character (both compositional and dynamical tests are needed), and the settlement condition (side products are not species). `R_T` is nonzero and is enumerated qualitatively in `11_audit.md`.

## CONCLUSION

The structural difference is **closed return versus open inheritance**. A cycle's output re-enters as input and the sign of the loop closes it; a lineage's output is a variant that cannot close by construction because the difference is carried. New chemical species are new arrangements over held kinds, admitted and made composable by settlement. Two systems with the same molecular formula can be different substances because the bond carries information the operands do not. The discriminator must therefore be arrangement-sensitive, per slot and lineage-bearing, and the derivation must refuse the repetition account before minting a novelty account. It still returns a shape, not a device.

## FALSIFIER, WRITTEN BEFORE THE RUN

If any of the following holds, this supporting derivation fails and is withdrawn:

1. A repeating cycle is demonstrated whose trajectory does not return to prior states under the figure's definition of a closed loop (breaks Q1).
2. A new settled species is shown to require a new primitive kind rather than a new arrangement over held building blocks (breaks Q2 and Fig 13 :115).
3. Two systems with identical molecular formula and identical bond arrangements are shown to be different substances in decisive behaviour (breaks Q3 and Fig 12 :117).
4. A discriminator built only from a single time point, with no lineage and no arrangement information, separates the two sources across chemical networks of interest (breaks Q1, Q3 and Q4).

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the formula; the four essays listed in `05_what_shape_means.md`. No measurement was used.

## FIGURE CENSUS

Fig 4 (round trip), Fig 5 (machinery not milestone), Fig 7 (variation inside, selection between), Fig 8 (closure idempotent), Fig 9 (union before search, shape not name), Fig 10 (ground settling), Fig 12 (cycle, catalyst, isomer, bond carries information, recursion, unary negation), Fig 13 (closed kinds, open arrangements), Operators table (sequence, production, comparison, negation). Strains after re-census: none forced; the atoms-versus-arrangements distinction was resolved by re-census in `01_figure_grounded_audit.md` section 5.
