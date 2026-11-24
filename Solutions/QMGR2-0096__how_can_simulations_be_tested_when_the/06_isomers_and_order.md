# Structure, order and analogues in simulation validation

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` §6).

## RESIDUAL

The main audit says a test harness proves wiring, never capability, and that independent epochs are triangulating frames. Two supporting questions are owed:

1. Is a laboratory analogue an **isomer** of the cosmological simulation under Fig 12's definition, or only a member of the same functional group?
2. In what **order** must the validation chain run, so that effort lands on a link whose input has arrived?

## DOMAIN CENSUS

Atoms held: the observational slots (CMB spectrum and polarization, BBN abundances, BAO, large-scale structure), the simulation's laws and initial conditions, the instrument chain, and the analogue apparatus. Bonds held: sequence (→), production (⇒), comparison (⋛), subtraction (−), conjunction (+), identity (≡), and negation (¬). No new primitive is available without import.

## DERIVATION

### Q1 — Are the analogue and the simulation isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Compare the two objects by atoms:

| object | atoms | arrangement |
|---|---|---|
| cosmological simulation Γ | laws, initial conditions, numerical scheme, subgrid model | runs from early condition to present output |
| analogue apparatus A | a subset of the same laws, a different substrate (fluid, BEC, plasma), a controlled boundary | runs to an analogue horizon or analogue spectrum |

They do **not** share the full atom set. The analogue omits the actual initial conditions, the cosmic expansion history, and most of the matter content. Under Fig 12's definition they are **not isomers**. They share a **functional group**: both are bounded systems in which a structure evolves under a dynamics, and the group fixes the kind ("something that implements the dynamics") while the qualifier fixes the member (the universe or the tank).

**Why this matters.** Calling the analogue an isomer would license treating its success as evidence for the simulation's substance. Fig 12 :94-96: **"The arrangement is the substance. Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."** Different ingredient sets, so the analogue cannot stand in for the simulation even at the level of notation.

**A real isomer case does exist inside the observational side.** CMB and BBN are two computations over the same six ΛCDM parameters, differing in which epoch and which bond (photon decoupling versus nuclear reaction network) mediates the prediction. Over the shared parameter atoms they are isomers: same atoms, different arrangement, different observable substance. World source W5 records the concordance test that this makes possible. They are the pair that can genuinely triangulate (Fig 8 :29: "low overlap: B does not draw on A's evidence").

**Falsifier, written before the run:** if an analogue reproduces the full atom set of the cosmological simulation, including the actual initial conditions and expansion history, the "not isomers" verdict fails and the analogue moves from functional group to isomer. That would also break Fig 11 :70, so its success would refute the main audit's F5.

### Q2 — What order does the validation chain run in?

Fig 3 :20-21: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**

Fig 3 :18: **"The break is drawn between three and four as an illustration. Where a given chain stops is a reading, never a property of the chain."**

The chain for this question, in dependency order:

1. **Perception / reachability of the ground.** Is any instrument returning a value for the slot? Fig 6 :34-35: **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."** CMB and BBN slots pass; a never-registered quantity does not.
2. **Vocabulary / terms for what the slot affords.** Do we have a term for the systematic (foreground, stellar processing, subgrid prescription)? Fig 3 :7: "it has terms for what things afford: what can be moved, opened, joined, blocked".
3. **Objective / what would count as progress.** Fig 3 :10: "it can say what would count as progress here, in its own terms". This is where the pre-committed prediction and the refuter are bound (Formula "Direction").
4. **Planning / route to the objective.** Choose low-overlap probes, decide which confirmation uses a new measurement, decide which limit will be reported.
5. **Learn and carry.** Fig 3 :15: "name what worked, verify it, and carry it to the next problem". Publish the lineage so the next simulation can reuse the method instead of replaying the result (Fig 4 :22-24: "Only methods cross up. Only head starts come down.").

**The middle link is the one that usually breaks.** Fig 3 :25-27: **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments. A link with no instrument is not a link that works. It is a link nobody has looked at."** For simulation validation this is the step of writing down what a successful test would look like before running it. It is cheap and routinely skipped.

**Effort above the break is wasted.** Running a larger simulation (step 4) cannot rescue a protocol with no stated objective (step 3). Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

### Q3 — The route order when a slot does not close

`THE_FORMULA.md` step 7 and Fig 6 :28-31 give three tracks, kept distinct:

- **SEARCHED:** "is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited" (Fig 6 :49). For this question: more independent runs, published likelihoods not yet used, convergence tests, alternative analyses of public data.
- **INWARD:** "is our representation adequate to hold it? The instrument extends access" (Fig 6 :29). Sharpen an instrument already returning something: higher-resolution polarization, cleaner metal-poor abundance measurements.
- **OUTWARD:** "does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms" (Fig 6 :30). Import a method or a physical atom from a frame whose closure differs, with source gate, shadow test and an independence debit (Fig 6 :12-13, :24).

INWARD and OUTWARD are opposed and never read against each other (Fig 6 :31). SEARCHED is asked first because it is cheapest and the other two assume its answer.

**Falsifier for Q3:** show a case in which more search at the same reach, a sharper instrument and an import all produce indistinguishable results at indistinguishable cost. Fig 8 :40-43 says the instructions differ; a demonstration that they do not would break the three-track rule.

### Q4 — Two currencies and the order of payment

Fig 12 :125-126: **"A composition costs in two currencies, and they do not add."** **"Bits price the description. Actions price finding out whether it holds."**

A parameter file is cheap in bits; a 19-million-CPU-hour run and a decade of observations are expensive in actions (world source W5 records the run; W4 records the instrument chain). The order of payment matters: description first (so the objective is bound and refusable), actions second (so the budget is spent on a checkable term). Reversing it spends the actions before the objective exists, which is exactly Fig 3's break.

Fig 12 :129: **"A long chain of cheap parts is expensive to describe and may cost one action to refute. A short arrangement over a costly operand is cheap to state and may take a whole budget to settle. Neither figure predicts the other, so both are read or the choice is made blind."** A short pipeline over a billion-particle simulation is cheap to write and expensive to settle; both readings must be reported.

## CONCLUSION

The analogue and the simulation are **not isomers**; they share a functional group and differ in substance, so analogue success is wiring evidence only. The genuinely triangulating pair is CMB and BBN, which are isomers over the shared ΛCDM parameter atoms with different mediating epochs. The validation chain must run from ground reachability, through vocabulary and a stated objective, to planning and carry; the middle objective link is the one most often missing and the one that pre-registration supplies. When a slot will not close, SEARCHED, INWARD and OUTWARD are asked in that order and never conflated.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `THE_FORMULA.md`, and the local metalaws note. World corroboration from W4 (CMB instrument chain), W5 (BBN/CMB concordance and the Illustris run) and W8 (analogue gravity). No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order, middle link, no instrument), Fig 4 (methods cross up, head starts down), Fig 6 (SEARCHED / INWARD / OUTWARD, instrument from worse instrument, source gate), Fig 8 (isomer-like low overlap, underivable versus unreachable), Fig 11 (substituted habitat, capability and contact), Fig 12 (isomer, functional group, level-relative arrangement, two currencies), Formula (steps 5 and 7, Direction). Strains after re-census: none; analogue versus instrument extension was resolved by separating substituted habitat from instrument sharpening (Fig 11 :70 against Fig 6 :32).
