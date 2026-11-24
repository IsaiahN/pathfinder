# Union, isomers, and order: the supporting derivation

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The headline question is a binary: is machine creativity distinguishable from recombination, or is it recombination? Two things are owed before that binary can be answered: (1) is the binary a partition or a union of overlapping conditions, and (2) if both sides are written over one atom set, are they isomers, functional groups, or the same term under different names? A third item, the dependency order, decides where an investigation must start.

## DOMAIN CENSUS

Atoms held for this derivation: a library Γ, its primitives `atoms(Γ)`, its reach `closure(Γ)`, the mint operator, the import operator, typed bonds (seven, plus negation), a per-slot residual R, and a ground that does not update. Bonds held: all seven, including `+` (conjunction), `→` (sequence), `⇒` (production), `-` (subtraction), `⋛` (comparison). No new primitive is available without import. Verdicts are kept per domain; nothing is averaged.

---

## Q1 — Partition or union?

- Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
- Fig 9 :55-58: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."**
- Fig 9 :4-5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

The three conditions identified in `01` behave exactly like this. More data (a lever on D1) can produce outputs that are novel relative to the library without producing a route record (D2) or a settlement (D3). A provenance record (D2) can exist for an output nobody counts as creative (D3 fails). A field can settle a verdict (D3) on an output whose route is unrecoverable (D2 fails). One lever clears the single-condition regions and leaves the intersections standing.

**Result:** union, not partition. The binary "creativity OR recombination" is malformed. It asks which of two overlapping sets contains the case. Triangulated across Fig 9 :54-58 and the cognitive-science literature's multi-component definitions (Wikipedia Creativity: standard definition plus process conditions plus social context). **Falsifier, written before the run:** exhibit one intervention that flips all three condition verdicts together across a sample where the conditions initially disagreed. Then the union collapses and this result fails.

## Q2 — Are "machine creativity" and "recombination" isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :94: **"The arrangement is the substance."**
- Fig 12 :95-96: **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Consider two descriptions of the same output. Description A: "these tokens were sampled from the distribution learned from the corpus." Description B: "these tokens were produced by a search that closed a live residual, importing an atom from a differing closure, and a field settled the result." Both descriptions can be written over the same observable atoms (the generated artifact, the library, a field). They differ in the bonds: A uses derivation inside a fixed closure; B adds an import crossing and a settlement relation.

- If the artifact is held fixed and only the route differs, the two are **not isomers** in Fig 12's sense, because isomerism requires a different bond over the same atoms to yield a different *substance*, with behaviour differing. Here the substance (the artifact) is the same. They are **the same term with two lineages**. This is the provenance result of F3: *"Only the record of where each came from separates them"* (Fig 8 :50-52).
- If the whole agent-and-habitat is the atom set, they **are** isomers: same components (library, generator, field, ground), different bond (mint-only versus import-and-settle), different behaviour (a reach that stays fixed versus a reach that moves). This is the claim worth testing, and it is checkable by comparing reach before and after.
- The weaker shared form is a **functional group**: both have the substructure `candidate generated -> screened -> retained`, which fixes the kind (a generative loop), while the qualifier (import present or absent) says which member.

**Falsifier:** if reach is observed to move under mint-only composition, or if the import-and-settle arrangement produces no behavioural difference from mint-only, the isomer claim fails and only the functional-group claim survives. Mode `specified`, unmeasured.

## Q3 — What is the order of dependency?

Fig 3 :20-21: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."** Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

Applied to this question:

1. **Perceive and describe the residual.** Name what failed to resolve, per slot (Fig 1 :19). Here: which output, which live residual, which observer.
2. **Vocabulary.** Have terms for what the situation affords: closure, atom, import, settlement, provenance. Without these, the residual cannot be described and any frame will seem to fit (Fig 9 :27-28).
3. **Objective.** State what would count as progress in those terms: a route record that discriminates, a ground that does not move.
4. **Planning.** Choose the discriminating test (the five refuters in `01` §4).
5. **Learn and carry.** Name what worked and carry the method, not the recording (Fig 4 :22).

The break to test first is between 2 and 3, exactly where Fig 3 :25-27 says chains usually break: having terms for what a situation offers and being able to say what would count as progress has neither an obvious failure nor an obvious instrument. Most machine-creativity work optimises link 1 (more data, larger models) because that is where the measurements already exist. Fig 3 :29-30: *"Most improvement effort in practice lands above the break, because that is where the measurements already exist."*

**Falsifier:** show a case where improving generation alone changed the settlement verdict while the route record and the anchor were held fixed. Then link 1 feeds link 5 directly and the dependency order is wrong.

## Q4 — What is the bond between the two sides of the question?

- Operators table: `+` conjunction, *"both hold at once"*, symmetric; test: *"swap the operands. Does the meaning change? No."* (operators table :11-15)
- Fig 12 :92-93: *"Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges."*

"Machine creativity AND recombination" is a conjunction, not a sequence or a production. The order in which the two phrases are written does not change the claim (swap test passes), so charging for an ordering would overcharge by log₂(2!) = 1 bit. The interesting relation is not between the two labels but between the mint and the import: that one is `→` inside a closure and the other crosses a boundary, which Fig 6 :14 marks as the only wall mover. The crossing is not a bond in Fig 12's seven; it is an operator on the closure itself. Treating "import" as an eighth bond would be a type error, the same class of error the Operators table :68 names: *"A relation that fails all seven is not an operator you are missing; it is a claim that has not been made yet."*

**Strain named:** the import operator changes reach without changing the atom count of the world (Fig 6 :25). It therefore behaves like a production `⇒` on the frame and like nothing on the world. This is recorded as a strain, not resolved by fiat. Re-census: the two statements range over different objects (frame access versus world primitives), so no correction is owed; see `01` §5.

## Q5 — Does the union need an eighth operator for the refusal side?

Part of the question is a refusal: "creativity is not merely recombination" is a negation, not a subtraction. Fig 12 amendment :56: **"Same mint operator, same three guards, same bargain. Only the direction of the residual differs. Requires an operator for negation, which the seven bonds do not contain."** Operators table :73-74: *"Subtraction is the nearest bond and is not it. − is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim."*

So the refusal must be stated as a term (`¬(creativity = recombination)`) and made to accrue a residual like anything else (Formula "Direction": make the sought-for shape an ordinary term). Otherwise the frame can accumulate mappings without being able to carry the correction (Fig 12 :140).

**Falsifier:** show a vocabulary with subtraction but no negation that can still refuse a compositional claim and carry the refusal forward. The Operators table says it can only accumulate; a working counterexample would close this item.

---

## CONCLUSION

The binary is a union (Q1), not a partition. Over the artifact alone the two descriptions are the same term with different lineages, not isomers; over the full agent-and-habitat they are isomers with a stated falsifier (Q2). The investigation must start at the residual and the vocabulary, not at model scale, because the middle link of the chain has no instrument yet (Q3). The relation between "creativity" and "recombination" is a symmetric conjunction, while the load-bearing relation is the import operator, which is not a bond (Q4). The rejecting half of the claim needs negation, not subtraction (Q5). Strains after re-census: one named (import as production on the frame, no change to the world), none hidden.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `THE_FORMULA.md`; the Operators table. No measurement was used. World literature (SEP, the two surveys, animal culture) is corroboration only and is recorded in `10_source_ledger.csv`.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order and the middle break), Fig 4 (methods cross up), Fig 6 (import moves the wall; no atom added to the world), Fig 8 (convergent derivation versus adopted import), Fig 9 (union versus partition; describe before looking), Fig 10 (provenance), Fig 11 (agent-and-habitat), Fig 12 (isomer, functional group, arrangement is the substance, negation), Operators table (symmetry, `+`, `⇒`, `¬`).
