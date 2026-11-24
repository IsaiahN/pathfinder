# Union, remainder and arrangement: the supporting derivation

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

If computation is one invariant loop with four casts (F1 and F2 of `01_figure_grounded_audit.md`), three supporting questions are owed:

1. Are the four substrate classes a partition or a union?
2. Is the analog/digital distinction a primitive kind or a remainder of composition?
3. Within one substrate, what makes two processes with the same components different computations? What is the order of the composition?

## DOMAIN CENSUS (reused from `01`)

Actors: bounded frames with Γ, b, a, o′, R. Currency: per-slot residual; bits for description, actions for testing. Anchor: a measurement or outcome that does not update. Held atoms in the physical reading: space, time, energy (states), spectrum, gradient, network (structures). Held bonds: the seven, plus negation as a unary operator. No new primitive is available without an import with a source gate and shadow test.

---

## Q1 — Partition or union?

- Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."
- Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

A partition would require four disjoint classes with a criterion that assigns every process to exactly one. The world literature blocks that. Bournez and Pouly (2018) write that "even discrete vs continuous is not a clear dichotomy, and most of the analog machines that were historically built were actually hybrid", and add that many quantum models can be considered analog. Chen, Doty and Soloveichik (2013) describe chemical systems in which "the rates of reactions are analog quantities, the identity and stoichiometry of the reactants and products are naturally digital." Flamm, Merkle and Stadler (2025) find that in chemical reaction networks "computation may refer to at least two fundamentally different aspects: concentrations of molecules, and molecular structures."

So a single lever, "define computation over discrete symbols", clears the region where only the symbolic condition holds and leaves the intersections standing. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

**Verdict:** union. `specified`, triangulated across Fig 9 :4-5/:55 and three low-overlap substrate literatures. There is no single four-way lever.

**Falsifier, written before the run:** produce a clean partition with no hybrid machine, no process that is both discrete and continuous under different descriptions, and no chemical system with both digital counts and analog rates. If such a partition is produced, the union verdict fails and four separate definitions become viable.

## Q2 — Is discreteness a primitive?

- Fig 13 :124-125: "Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member."
- Fig 13 :41: "Each is indivisible: no arrangement of the other five yields it."
- Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."

Discreteness and smoothness are *remainders* of a composition. They are not members of the minimum set, and they are not new criteria for computation. The six are indivisible; a seventh would have to be a new kind, which composition cannot produce (Fig 13 :115, "The set is closed. The arrangements are not. That gap is why import exists.").

So "analog computation" and "digital computation" are two different arrangements over held atoms, hence two different terms under Fig 12 :94, "The arrangement is the substance." They are not two kinds of computation, and they are not the same kind with a parameter changed.

**Verdict:** `general` structural (discreteness is a remainder), `specified` on the claim that this makes the analog/digital split a union. Single-source on the figure definition of remainder (Fig 13), corroborated by Bournez and Pouly 2018.

**Falsifier:** derive discreteness or smoothness from the other five members alone, or show that a computational process changes computational status when only its discrete/continuous description changes while contact and residual are fixed.

## Q3 — Ingredients are not the process: isomers, catalysts and cycles

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."

Two processes over the same components can therefore be different computations if the bond differs. Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Chemistry is the source of the term: Liebig and Wöhler found silver fulminate and silver cyanate with the same composition and different properties, and Berzelius named isomerism in 1830 (Fig 12 :97-98; Fig 13 :122-123).

Applied here:

- A chemical reaction network that computes a function by **concentration dynamics** and one that computes by **graph structure rewriting** are not two descriptions of one computation. Flamm et al. (2025) treat the two aspects as fundamentally different, and that is the isomer claim: same molecular atoms, different bond and arrangement, different substance.
- An analog integrator and a digital accumulator over equivalent inputs are isomers if they are written over the same functional atoms with different bonds (sequence versus comparison, or network versus spectrum). They are a functional group only if they are written over different atoms that happen to share the `state to structure to state` pattern (Fig 12 :124, "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member.").
- Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." In D2 this is literal: a catalyst appears unchanged in the overall reaction while doing work in the mechanism. A term list that omits which parts are catalytic cannot distinguish a computing chemical network from one that merely consumed its instructions.
- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Feedback in D1, autocatalysis in D2, recurrent circuits in D3, and measurement-fed-back control in D4 are cycles, not chains. A vocabulary with only sequence (→) can write a chain and cannot write a closed loop.

**Verdict:** `specified`. Isomer and functional-group readings are figure-defined; which concrete pair of processes is an isomer is a binding that needs a witness and is not returned by the framework (Fig 9 :32).

**Falsifier:** show that two processes with the same atoms under different bonds behave identically under every instrument that can discriminate the relevant residual. Then the bond carries no information and Fig 12 :5 fails for this domain.

## Q4 — What is the order of the union?

Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

The order for this question is:

1. **Refuse** the substrate question (negation, Operators :58; not a bond).
2. **Describe** the residual before choosing a frame (Fig 9 :27-28).
3. **Fix the invariant** (kernel, per-slot residual, anchor) (Fig 4 :19-20, Fig 1 :19).
4. **Cast** each domain with its own actors, currency and anchor.
5. **Settle** each first-order process before composing at second order (Fig 12 :104).
6. **Import** substrate primitives only with provenance and a shadow test (Fig 6 :23, Fig 8 :50-52).

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Step 4 is where this question usually breaks: substrate literatures have instruments for their own vehicles, but no instrument returns a verdict on "which substrate defines computation". That missing instrument is the residual, and its absence is the declared gap.

## Q5 — Two currencies, not one power score

Fig 12 :125-127:

> "A composition costs in two currencies, and they do not add."
> "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."

In D1, precision has resolution and stability; in D2, stoichiometry is exact and rate constants are tunable but not exact; in D4, accessible information is bounded at one bit while specification information is conserved under unitary evolution and the general speed-up is unproved (SEP, Quantum Computing). A scalar "computational power" that merges bits and actions is the named error. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Falsifier:** exhibit a single scalar that prices description and action, predicts which substrate wins on a fixed task, and loses no information that the two-reading account preserves.

## CONCLUSION

The four substrate classes are a union of overlapping conditions, not a partition. Discreteness and continuity are remainders of composition, not primitive kinds, so the analog/digital divide cannot carry a definition by itself. Within a substrate, the object of description is the arrangement (bond), not the ingredient list: processes with the same atoms under different bonds are isomers, and catalysts and cycles are structures a flat ingredient list cannot record. The dependency order runs refuse, describe, fix the invariant, cast, settle, import. Two currencies are held apart. No figure line returns a substrate-specific definition; that is the declared `gap`, and it is unreached rather than silence (Fig 13 :134).

## ANCHOR

Verbatim figure text extracted from the canonical SVG-derived file this session; the eight essays (two opened this session, six carried with declaration); world sources listed in `04_links_and_distribution.md` and `10_source_ledger.csv`. No measurement was taken.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order), Fig 4 (kernel and cast), Fig 6 (import and source gate), Fig 8 (provenance, residual first), Fig 9 (split, union, shape, filters), Fig 10 (anchor), Fig 11 (substrate dissolves), Fig 12 (bond, arrangement, isomer, catalyst, cycle, two currencies), Fig 13 (closed set, remainder, gap), Operators table (negation). Strains after re-census: none hidden; the quantum anchor type question remains live and is recorded in `01` §6 as S1.
