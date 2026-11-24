# Observational equivalence as isomerism, and the order of the checking chain

**Mode: `specified` on the isomer mapping, `general` on the dependency order.** This is a simulated derivation checked against the figures, not a ground reading.

## RESIDUAL

Two models can hold the same observational ingredients and differ in directed arrangement. Three questions are owed:

1. Under the figures, is observational equivalence an **isomer** relation, or something else?
2. What does the **order** of bonds do, and which bonds are needed to write a causal claim?
3. Where does the chain from "can observe the variables" to "can settle the structure" actually break?

## DOMAIN CENSUS

Atoms held in the figure vocabulary: states and structures from Fig 13, seven bonds plus negation from Fig 12 and the Operators table. Currency: description cost and settlement against the ground. Anchor for the settling step: Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* No new primitive is needed for any question below.

---

## Q1. Is observational equivalence isomerism?

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :95-96:

> **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**

Two graphs in the same observational equivalence class have the same variables, the same joint distribution and the same testable independence implications. They differ only in edge direction. They are therefore same atoms, different bond, different substance: the behaviour that decides between them is the response under intervention, which the observational formula cannot write.

Fig 12 :97-98 gives the historical anchor: *"Chemistry hit it first: silver fulminate and silver cyanate have the same composition and different properties, which is what forced structure into the notation. Liebig and Wöhler, 1824 to 1826; named isomerism by Berzelius, 1830."* The mapping to causal graphs is a **binding from the statistics frame**, not a derivation from chemistry or from the figure. The figure derives the need for an arrangement the ingredients do not carry; the world frame names the arrangement *Markov equivalence*.

Wikipedia "Causal model", read 2026-11-23: *"the models A→B→C and A←B→C have the same independence conditions, because conditioning on B leaves A and C independent. However, the two models do not have the same meaning."* And: *"Conversely, data cannot show which of these two models are correct, because they have the same independence conditions."*

**Falsifier, written before the run:** if two observationally equivalent graphs are shown to have identical responses under every intervention, they are the same substance and the isomer claim is false. If a case is found where the different edge direction makes no behavioural difference at any scale, the mapping falls back to "two spellings of one term" under Fig 12 :92-93.

**Status: triangulated** across Fig 12, Fig 1 (per-slot residual) and the world source.

---

## Q2. Which bonds write a causal claim, and what is missing without them?

Fig 12 :92-93:

> **"Symmetry is what decides whether an arrangement is a new thing."**

The Operators table separates the eight operators by arity and symmetry:

- symmetric bonds: `+` conjunction, `∥` disjunction, `≡` identity. For these, Fig 12 :92 says *"Under a symmetric bond, k operands have k! spellings and one term."* Swapping operands loses nothing. A vocabulary built only from these cannot write A → B as different from B → A.
- ordered bonds: `→` sequence (*"A then B; B needs A to have happened"*), `⇒` production (*"A produces B; B did not exist before"*), `−` subtraction, `⋛` comparison. For these the test *"swap them. Does it become a different thing? Yes."*
- unary: `¬` negation, not a bond. Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."*

Fig 12 :111-113:

> **"A vocabulary without bonds can name a state and cannot name a route to one."**
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**

A causal claim needs at least one ordered bond (`→` or `⇒`) to carry direction and `¬` to refuse a direction once held. Without the first, direction is unwritable. Without the second, a wrong direction can be outscored but cannot be carried as a correction.

Wikipedia "Causal graph" gives the world-frame test for the ordered edge: *"an arrow is drawn from a variable X to a variable Y whenever Y is judged to respond to changes in X when all other variables are being held constant."* That is a response-under-change criterion, not a co-occurrence criterion. It is the operational form of Fig 12 :74-75.

**Falsifier:** exhibit a model that writes, tests and reverses a directed causal claim using only symmetric bonds and no negation. If produced, this section falls.

**Status: triangulated** across Fig 12, the Operators table and the world source.

---

## Q3. What is the order of the checking chain, and where does it break?

Fig 3 :20:

> **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**

The chain for this question, derived from Fig 3's five links:

| link | consumes | produces | instrument status |
|---|---|---|---|
| 1 perception | the system's observable variables | a reading of what is there | obvious tests exist |
| 2 vocabulary | the reading | terms for ordered bonds, intervention, and refusal | **the likely break** |
| 3 objective | those terms | a statement of what counts as progress: response under intervention | **the likely break** |
| 4 planning | the objective | a design for the intervention or instrument | obvious tests exist |
| 5 learn and carry | the result | a verified, reusable method | partly instrumented |

Fig 3 :25-27 explains why the break is usually here: perception and planning *"have obvious failures and obvious tests,"* while the middle link, *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments. A link with no instrument is not a link that works. It is a link nobody has looked at."*

Fig 3 :22-23: *"A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."* A model with no vocabulary for direction cannot be diagnosed by more fitting; the reading is taken below the break.

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* More data and more compute act on link 1 and 4, not on links 2 and 3.

**Falsifier:** show a modeling practice in which the vocabulary/objective link is measured with an instrument as reliable as the tests for perception and planning. Then the predicted break location is wrong.

**Status: single-source for the figure's break location (Fig 3), corroborated in the world frame by the observation that causal direction cannot be determined from correlations alone.**

---

## Q4. What is the union, and what survives the round trip?

The question is a union (Fig 9 :55-57), not a list: fit, vocabulary, anchor contact and independent checking overlap. A single lever (better fit) clears only the fit-only region. The residue after the lever is a model that predicts well with a wrong bond, which is Fig 12's isomer case.

The round trip, per Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked"*:

- sent up: Fig 12 (arrangement is the substance), Fig 2 (non-updating anchor), Fig 1 (per-slot residual), Fig 3 (dependency order);
- abstraction: "check causal structure by intervention, per variable, with the right vocabulary";
- concretisation: a concrete protocol naming do-calculus, a randomised trial or an estimator.

Three things drop on the way back: the prohibition on naming a specific estimator (the figure returns a shape); the requirement that the checker not author the claim (Fig 10 :42); and the union reading (a single intervention does not clear all four conditions). `R_T` is nonzero and is enumerated qualitatively in `11_audit.md`.

## CONCLUSION

Observational equivalence is a real isomer case under Fig 12: same atoms, different bond, decisive difference under intervention. Writing the difference needs an ordered bond and a refusal operator. The checking chain most often breaks at the vocabulary/objective link, where no instrument is usual. The question is a union, and a fit-only lever leaves the interesting case standing. The round trip from the shape to a named protocol is lossy and must be recorded, not assumed.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, plus the world sources listed in `10_source_ledger.csv`, all opened 2026-11-23. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor), Fig 3 (dependency order, break location), Fig 4 (round trip gap), Fig 8 (union surplus, residual first), Fig 9 (union vs partition), Fig 10 (verifier non-access), Fig 12 (isomer, symmetry, bond pricing, ordered bonds), Operators table (arity, symmetry, negation), Fig 13 (two kinds). Strains after re-census: the bond-price formula is not applied (unpriced binding); no other live strain.
