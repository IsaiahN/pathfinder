# Structure, order and analogues in threshold estimation

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The audit asks for a shape for φ* in an unpushable system. Two supporting questions are owed: (1) what kind of thing is a threshold structurally, and (2) in what order must the estimation operations run, given that analogues from other fields are available?

## DOMAIN CENSUS

Atoms held: the six of Fig 13 and the eight operators of the Operators table. Of these, ⋛ is the relevant one. Bonds held: ⋛ comparison, → sequence, ¬ negation. No new primitive is needed to describe a threshold; a seventh primitive would have to be imported (Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*).

## DERIVATION

### Q1: What is a threshold structurally?

- Fig 12 :87: *"a threshold relation between two quantities"* (Operators table :49, same line). The test at Fig 12 :89 is *"is it about which is larger, rather than both being present? Yes."*
- Fig 12 :111-113: *"A vocabulary without bonds can name a state and cannot name a route to one."* / *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*
- Operators table :52: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*

So a threshold is not a state variable and not a stored value; it is an **ordered comparison between a system feature and a control variable**. Order matters (Fig 12 :88: it is not symmetric), so "just above" and "just below" are different terms. This is a `general` structural claim. A specific number for a specific element is `grounded` and is not claimed here.

### Q2: Are early-warning indicators isomers, or a functional group?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- Dakos et al. 2012 distinguishes metric-based indicators (autocorrelation, variance, skewness, spectral measures) from model-based ones (threshold AR, potential analysis, drift-diffusion-jump). All are driven by the same underlying phenomenon, critical slowing down, but they differ in what they can detect and in their preprocessing sensitivity.

Reading: lag-1 autocorrelation, variance, skewness and return rate share a functional group (indicators of rising memory or variability near a transition). The group says what kind; the qualifier says which member. They are **not** isomers in Fig 12's strict sense, because they are different measurements rather than one ingredient set arranged differently. The isomer claim worth testing is stronger: two systems with the same state and structure atoms, arranged under different feedback bonds (bifurcation-induced versus noise-induced versus rate-induced), are different substances even if their indicators look identical. The difference is invisible in the indicator time series and decisive in the behaviour, exactly as Fig 12 :117 says.

**Falsifier, written before the run:** if two mechanisms with different feedback bonds produce indicator time series that are not merely similar but lead to the same intervention outcome at the same control value, the isomer claim fails and only the functional-group claim stands.

### Q3: What is the order of operations?

Dependency order (Fig 3 :20: *"The chain is ordered by dependency, not by importance."*):

1. **Perception.** Find what is already returning a reading that fails to resolve (Fig 6 :34). Without this link, later steps are readings of nothing (Fig 3 :22-23).
2. **Vocabulary.** Describe R in effect terms: feature, control, comparison, record, discriminator (Fig 9 :30-31: *"your words are borrowed too, so describe the effect"* / *"rather than the cause"*).
3. **Objective.** Bind the sought shape as an ordinary term (Fig 5 :65-66: *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like"*), and write the refuter before the run.
4. **Planning.** Run inward and outward as two tracks (Fig 6 :31: *"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."*) Refuse before mint (formula step 2): if a held regularity is false, the term owed is a refusal, not an explanation.
5. **Learn and carry.** Record provenance, source gate, shadow test and R_T (Fig 10 :62: *"A ruling carries provenance like an atom."*).

Two order errors are common here: choosing the analogue frame before describing R (Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*), and reading the inward track against the outward one, which Fig 6 :31 forbids.

### Q4: What is the order of the analogue union?

- Fig 13 :110: *"And each composition becomes an atom for whatever composes over it."*
- Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"*
- Fig 8 :45: *"Two frames together reach what neither reaches alone."*

A method settled in the depression frame (lag-1 autocorrelation as a proximity indicator) becomes an atom that the Earth-system frame can compose over. This is recursion, not a new primitive. It is legal only because the donor method was settled against its own ground. The analogue union is second-order; the local threshold estimate is first-order within it.

### Q5: What is the round-trip gap R_T?

Symbols table :77-78: R_T = *"The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x)). Measures what the coarser description cannot hold."* Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

1. **Sent up (x):** the donor finding that rising lag-1 autocorrelation indicates proximity to a transition in mood time series.
2. **Abstraction (T_A):** a generic method, rising memory indicates loss of resilience near a critical transition, stripped of its donor scale and sampling scheme.
3. **Concretisation (T_E):** application to an ice-sheet or ocean-observation record with different sampling, detrending and forcing.

**R_T is nonzero.** Three things the abstraction drops do not survive the trip back down: the donor's sampling frequency and its relation to the system's return rate; the donor's detrending choices, which Dakos et al. show can reverse a variance trend; and the donor's ground, which settled what the indicator meant. What survives is the method and the refuter, not the donor's threshold value. R_T is recorded qualitatively as the enumerated set of dropped constraints; it is not measured numerically because no common ground exists across the two systems.

## CONCLUSION

A threshold is an ordered comparison, not a state or a stored value. Indicators of critical slowing down form a functional group; the isomer claim belongs to mechanisms with the same atoms under different feedback bonds, and its difference is invisible in the indicator series. The correct order is perception, vocabulary, objective, planning, carry, with refusal before mint and the two tracks kept apart. Analogue methods become atoms by recursion, and each transfer carries a nonzero R_T that must be recorded. The falsifier at Q2 is standing and unrun.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators and Symbols tables, read this session; Dakos et al. 2012 and Scheffer et al. 2012 read 2026-11-22. No Earth-system measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (round trip, methods cross), Fig 5 (bind the shape, refuse first), Fig 6 (two tracks, what travels), Fig 8 (union surplus, residual first), Fig 9 (describe before looking), Fig 10 (provenance), Fig 12 (comparison, isomer, functional group, settled molecule), Fig 13 (closed set, open arrangements), Operators (⋛ type), Symbols (R_T). Strains after re-census: none hidden; the operand type of ⋛ when both operands are settled higher-level terms remains live and is recorded in `01` and `08`.
