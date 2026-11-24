# Bonds, isomers and order in a population code

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

A population recording gives a vector of firing rates for each stimulus. Two recordings can yield the same vector while differing in what the animal does with it. The taxonomy question asks what makes them different kinds; the order question asks which must be settled first, the kind list or the discriminator. A supporting derivation is owed using Fig 12's bond set and Fig 3's dependency order, with a falsifier written before the run.

## DOMAIN CENSUS

Atoms held: the recorded states (stimulus, action, outcome) and the six substrate terms; bonds held: the seven of Fig 12 plus unary negation. Currency: per-slot residual and settlement against behaviour. No new primitive is available without a source-gated import. The residual is a union compound with two loops (taxonomy, discriminator), ordered by dependency (perception, vocabulary, objective).

## DERIVATION

### Q1 — Same vector, different term?

- Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
- Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**
- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

A population vector records ingredients. If population P and population Q have the same vector but P drives a choice (`⇒ production` or `→ sequence`) and Q only co-occurs (`+ conjunction`), they are **isomers** under Fig 12: same atoms, different bond, different substance. A taxonomy built by clustering vectors would merge them.

**Falsifier, written before the run:** if a decoder can recover bond type from the operand vector alone, with no intervention or behavioural observation, the isomer claim fails and a vector clustering is sufficient. Triangulated for the figure definition (Fig 12); the physics-style chemistry analogue is single-source, since the isomer example in Fig 12 :97-98 is the only figure text that carries it.

### Q2 — What is the order of the two questions?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces"**
- Fig 3 :25: **"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."**
- Fig 9 :54: **"when the split lands on a union rather than a partition, unbundle before you search again"**

Perception (can the instrument resolve the regularity?) precedes vocabulary (does the system have a term for what it affords?) precedes objective (what counts as progress in its own terms?). The discriminator supplies the objective; the taxonomy supplies the vocabulary. So the discriminator is **upstream** even though the question is asked second. Answering "what kinds" first is effort spent above the break.

**Falsifier:** if a complete taxonomy can be closed with no discriminator, or if the discriminator can return a kind without any vocabulary, Fig 3's dependency order is wrong here.

### Q3 — First-order and second-order terms

- Fig 13 :75: **"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."**
- Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**

A single-slot term reads `state → structure → state`, for example a stimulus state bonded through a tuning structure to an action state. That is first-order and legal under Fig 13 :74. Once a population readout is settled against behaviour, it becomes an atom for the next level; a decision that compares two such readouts is a second-order composition (`⋛ comparison`), not a new primitive. The Operators table defines ⋛ as *"a threshold relation between two quantities"*, so using it on settled molecules needs an instrument to confirm they count as quantities at that level. **Strain, named not hidden.**

**Falsifier:** show a settled readout that cannot serve as an atom, or that ⋛ cannot apply at second order at any resolution. Both are ground questions, not arguments.

### Q4 — Symmetric correlation versus ordered representation

- Fig 12 :59: **"swap the operands. Does the meaning change? No."** (conjunction `+`)
- Fig 12 :72: **"swap them. Does it become a different thing? Yes."** (sequence `→`)
- Operators table :68: **"A relation that fails all seven is not an operator you are missing; it is a claim that has not been made yet."**

A raw noise correlation is symmetric: swapping the two neurons changes nothing. A representation that leads to an action is ordered: swapping stimulus and response produces a different claim. This is the structural reason Fig 2 :39-40 calls correlation disqualifying *for a verdict* while allowing it to be efficient for a convention. A relation between a firing pattern and a behavioural choice that fails all seven bond tests is not a missing operator; it is a claim that has not been made.

**Falsifier:** exhibit a relation that fails all seven bond tests but is admitted by the framework as a typed bond. That breaks Operators :68.

### Q5 — Functional group, not a content list

- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Two populations can share the *readout-ready* substructure (a bond from pattern to action) while differing in which stimulus fills the slot. They are members of one functional group, not the same substance. This is the shape the taxonomy can return without naming cells: bond arrangement and level, with a qualifier supplied by the provenanced import from the experiment that settles it.

**Falsifier:** if the qualifier can be derived from the six-term set alone with no import, the framework is naming a specific represented content, which Fig 9 :32 forbids.

### Q6 — The two prices do not add

- Fig 12 :125-127: **"A composition costs in two currencies, and they do not add."**, **"Bits price the description. Actions price finding out whether it holds."**
- Quian Quiroga and Panzeri (2009), world source: *"Decoding has the advantage of being similar to real behavioural calculations, but it may lose information contained in the neural responses."*

A high-dimensional code is expensive to describe and may be cheap to refute with one intervention. A single tuned neuron is cheap to describe and may take a whole experimental budget to settle. A ranking by description length cannot stand in for a ranking by settlement cost.

**Falsifier:** produce a scalar that combines the two prices without loss and that lets a system notice the shortfall. That breaks Fig 12 :125-130.

## CONCLUSION

The taxonomy is a bond taxonomy, not a content list. Two equal activation vectors can be isomers when their bonds differ (Q1). The discriminator is upstream of the taxonomy in dependency order (Q2). A held term is first-order; a settled readout becomes an atom and comparisons over it are second-order, with one operand-type strain recorded (Q3). Correlation is the symmetric bond `+`; representation adds order, which is why correlation alone cannot settle a verdict (Q4). What can be named is the functional group and the level; the qualifier comes from a provenanced import (Q5). Description cost and settlement cost are held apart (Q6).

This rescues what a firing-pattern taxonomy gets right, the arrangement, without the part that fails, the claim that the ingredient list determines the represented kind. No new primitive, no wall-moving import, and no name for a specific cell are required.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-23; `THE_FORMULA.md`; the Operators table; and the world sources in `10_source_ledger.csv`. No recording or behavioural measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 9 (union splitting, kind of thing), Fig 12 (bond, isomer, functional group, settled molecule, two currencies, bond tests), Fig 13 (cross-kind composition), Operators (bond tests and ⋛ type), Fig 2 (correlation valence). Strains after re-census: one, the ⋛ operand type at second order, named in Q3. All figure quotes were checked character by character against the local extract.
