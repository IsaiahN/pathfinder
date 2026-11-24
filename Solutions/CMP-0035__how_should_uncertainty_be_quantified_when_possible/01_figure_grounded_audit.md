# Figure-grounded audit: quantifying uncertainty under mechanism ignorance plus random variation

**Mode of this document: `specified`, with `general` structural limits. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (20 Nov 2026) states that LLMs can "simulate an approximate answer/output with the formula" and that "the truly testable output would need to be derived from the real architecture or working the formula yourself"; the imported corpus version calls the outputs "simulacra." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement was taken, no dataset was fitted and no decision record was opened.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, the eight essays, and the public sources opened 2026-11-22 recorded in `10_source_ledger.csv`.

---

## 0. The residual, the bound shape and the refusal

State R in effect terms before choosing any figure line.

**R (the residual).** A forecaster must report the spread of possible outcomes. The spread is produced jointly by (a) a mechanism that is poorly known, possibly the wrong mechanism, possibly outside the set of mechanisms the modeller can even write down, and (b) random variation given whatever mechanism holds. These two sources are not the same kind of thing: one can shrink with information, the other cannot shrink below the variance of the process. A consumer of the report must choose between collecting more data, changing the model class, and hedging against irreducible spread. A single scalar does not encode which action is owed.

**R by arity, symmetry and scale.** Arity two (two conditions conjoined in one outcome distribution). Symmetry: the two sources do not commute; data reduces one and leaves the other, so the pair is not interchangeable under a symmetric bond. Scale: random variation lives inside a fixed mechanism at the within-model scale; mechanism uncertainty lives at the model-class or reach scale. The two are at different levels, which is why a single-level number cannot carry both.

**Bound shape (written down before the run, so it can be refused).** An acceptable report must:

1. be indexed per slot, never a single global number;
2. keep the reducible (mechanism/knowledge) part separate from the irreducible (random) part, in separate representations, not added;
3. carry a distinct marker for the case where the mechanism class itself is wrong or missing, which is not a distribution over outcomes;
4. be scored against a ground the model cannot move, with the independence of the evidence made explicit;
5. state its mode and its cost if wrong.

This binding is an ordinary term now, so it can accrue a residual. The pre-registered refuter is in section 3.

---

## 1. Domain census before any figure line

One line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet. Partition or union stated. Order by dependency (Fig 3).

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 within-mechanism variation | the mechanism as held, random draws, the observation | probability mass per slot | measured frequencies, a repeatable experiment | partition: which slot carries live mass |
| D2 mechanism / structural uncertainty | candidate model classes, missing primitives, frames with different closures | description cost (bits) and reach (atoms) | the ground plus a frame whose closure differs | import: a new atom or a new frame, not more of the same samples |
| D3 verification and scoring | forecaster, ground, outside checker | score against the observed outcome | the ground, never agreement | triangulation: independently ranged bearings |
| D4 decision and cost | decision maker, cost of being wrong | bits and actions, in different units | the cost if wrong, declared before the run | two readings held apart, never summed |

**Partition or union.** This is a **union compound**, not one hard question. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." The question itself names two conditions (poorly known mechanism, random variation), so the first obligation is to unbundle, not to find a cleverer scalar.

**Dependency order (Fig 3).** Describe the residual per slot before choosing any frame (Fig 9 :27-28). Unbundle the compound before searching (Fig 9 :54). Settle within-mechanism variation before attempting a structural import (a first-order molecule settles before it becomes an atom at the next level, Fig 12 :104). Score against the ground only after the verdict is fixed (Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."). A link with no instrument cannot be diagnosed from below: Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

**Strain test applied during census.** My first census had a single "uncertainty" domain and tried to fit Fig 1's per-slot rule to the whole question. That strained: Fig 1 governs a residual indexed by object slot inside one frame, not the relation between two frames with different closures. Re-census produced the four domains above. No figure line is used below outside the domain it was censused for.

---

## 2. Figure census and verbatim quotes before conclusions

| figure | bearing | where it governs |
|---|---|---|
| Fig 1 The Agent | residual per slot, ground as only metric, frame-internal quantities disqualified | D1, D3 |
| Fig 2 The Ground | anchor, independence, correlation disqualifying for a verdict | D3 |
| Fig 3 Dependency Chain | order by dependency, link with no instrument | order across all domains |
| Fig 5 Mint Pipeline | acceptance as a bargain; model choice is priced, not free | D2 |
| Fig 6 Closure / Reachability | depth versus genuine absence; import is the only operator that moves the wall | D2 |
| Fig 7 Room Chain | agreement compounds, evidence does not | D3 |
| Fig 8 Union Surplus | no search adds an atom; no proof of absence; residual first | D2, D4 |
| Fig 9 Leave / Arrive | union versus partition; describe before looking; filters not witnesses | unbundling, D3 |
| Fig 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | D3 |
| Fig 11 The Habitat | valence is relative to the residual, variance is helpful or harmful depending on the goal | D4 |
| Fig 12 The Bond | two currencies that do not add; settled molecule becomes an atom | D2, D4 |
| Fig 13 Minimum Viable Set | where randomness comes from: amplified residual (chaos) versus discarded detail (noise) | D1 |
| Symbols table | R is per slot, R is the aim | D1 |
| Operators table | negation refuses a claim; subtraction removes an operand | D2, D4 |

Every quoted string below is an exact substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked before use. Where a figure was tried and rejected after the strain test, that is recorded in the retraction log in section 6, not silently dropped.

---

## 3. Findings

### F1: Unbundle before quantifying (decisive for the form of the answer)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

The question asks for one number over two conditions. The figures say a compound must be split before it is searched. The first output of a correct derivation is therefore not an uncertainty value but a partition of the report into parts that have different remedies. Anything that recombines the parts into one scalar before the consumer acts has undone the derivation.

**Refuter:** a controlled decision task in which the decomposed report and the best single scalar induce the same action in every tested condition, with the same expected loss. If that holds across conditions chosen before the test, the union reading is wrong and the question is one hard problem after all.

**Status:** triangulated. Fig 9's union/partition rule and the formula's step 7 ("NO φ IN closure(Γ) CLOSES R → three questions, not one") are low-overlap routes: one is a search-stopping rule, the other is a closure argument.

### F2: Report per slot, never as one global number

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Symbols table :43: "R is measured per slot, never as a single global number."
Symbols table :38: "R is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."

A single portfolio-wide variance has the same defect as a global residual near zero with one live slot: the live slot vanishes. Fig 1 :13: "a global R near zero with one live slot residual is a legal state." For UQ this means a headline interval can be tight while one component or one regime carries all the unmodelled mass. The report must be indexed by outcome, region, regime or decision slot.

**Refuter:** show a case where every slot's residual is proportional to the same scalar and the aggregate is a sufficient statistic for the decision. Then aggregation carries no loss and the per-slot rule is an unnecessary cost. This is an empirical claim about a specific system, not a claim the figures make for all systems.

**Status:** triangulated (Fig 1 plus Symbols table, two separate framings of the same constraint).

### F3: The two currencies do not add

Fig 12 :125: "A composition costs in two currencies, and they do not add."
Fig 12 :126: "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"
Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."

This is the figure line that bears most directly on the question's real failure mode. Mechanism uncertainty is partly a description cost (how complicated a model class must be to cover the possibilities) and partly an action cost (how many observations or interventions would discriminate among mechanisms). Random variation is a property of the process given the mechanism. Folding all three into one variance or one entropy treats bits and actions as commensurable. Fig 12 says they are in different units and that summing them is the named error.

The world literature agrees from a different direction, but agreement from a shared problem is weak corroboration, not a second witness: Wimmer et al. (2023, PMLR 216) write that they "critically discuss the idea of an additive decomposition of total uncertainty into its aleatoric and epistemic constituents" and that their experiments "raise concerns about current practice in uncertainty quantification." Bickford Smith et al. (2025, PMLR 267) report "incoherence in existing discussions of these ideas" and that "the aleatoric-epistemic view being insufficiently expressive." These are secondary; the verdict comes from Fig 12.

**Refuter:** exhibit a decision problem with a declared exchange rate between bits of description and actions of measurement, fixed before the run, under which the summed figure and the held-apart pair always order options the same way. Fig 12 allows the two readings to be held apart; it does not prove no exchange rate can ever be declared. If one is declared and survives ground scoring, the "do not add" verdict narrows to systems where no rate is declared.

**Status:** triangulated (Fig 12 pricing rule plus Fig 9 :60 filter/witness rule; low overlap between a cost argument and a verdict argument).

### F4: Depth and genuine absence look the same from inside the frame

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."
Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 8 :40: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

This is the figure-grounded distinction that a scalar cannot carry. Within a fixed mechanism class, more data reduces uncertainty (depth). If the true mechanism is outside the class, more data inside that class never introduces the missing primitive (genuine absence). From inside the model, the two produce the same wide interval and the same stubbornly flat residual. The correct action differs: collect data in the first case, import a frame or mint a new term in the second (Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs.").

A term whose residual "PERSISTS AND DOES NOT TREND DOWN" is the one to point a refusal at (Formula step 2). For UQ this gives a concrete diagnostic: a widening or flat epistemic component as data accumulates is a candidate signal that the mechanism class, not the parameter estimate, is wrong. It is a candidate, not a proof: Fig 8 :39 forbids reading failure to find as absence.

**Refuter:** show a case where the flat residual is entirely due to an instrument that has saturated, so more data within the same frame would resolve it once the instrument is repaired. Then the correct action is INWARD, not OUTWARD, and the verdict about which import is owed was wrong. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." That rescue must come from an instrument already returning something, not from a description of the missing mechanism.

**Status:** triangulated (Fig 6 reachability plus Fig 8's idempotence theorem; different proof routes).

### F5: "Random variation" is not one kind of thing

Fig 13 :31: "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise"

The framework names two sources of apparent randomness inside one process: an amplified residual (deterministic but unpredictable in practice) and discarded detail at a lossy crossing (noise). These have different remedies. Chaos may be predictable at the level of distributions or regimes even when trajectories are not; discarded detail is irrecoverable at the level it was dropped. A report that says only "aleatoric uncertainty = 0.4" has not said which of these it is, and the two imply different forecast horizons and different instruments.

The world literature's aleatoric/epistemic split (Kendall & Gal 2017; Hüllermeier & Waegeman 2021) captures part of this but not the chaos/noise distinction. Roy & Oberkampf (2011) add a third practical distinction: mathematical model form uncertainty. The figures govern; these sources corroborate the general need to split and conflict with any claim that a two-way split is exhaustive.

**Refuter:** exhibit a process where the amplified-residual component and the discarded-detail component induce the same predictive distribution at every horizon and under every instrument the observer can build. Then the distinction is indiscernible for that observer, and by the framework's own "indiscernibility is not identity" rule it remains a distinction in principle but loses operational force. Record as a limit, not a refutation, unless the ground shows the two are identical.

**Status:** single-source for the chaos/noise split (Fig 13 only). Marked as such. The three-way corroboration from the world literature is about a different two-way split and does not triangulate this line.

### F6: The ground is the only metric; a model's own confidence is frame-internal

Fig 1 :23: "The ground enters as the only metric."
Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."
Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

A reported confidence interval is produced by the same model it describes. Under Fig 1 :27 it cannot be the metric of its own adequacy; it must be scored against outcomes. Gneiting & Raftery (2007, JASA) supply the world-side instrument: "In prediction problems, proper scoring rules encourage the forecaster to make careful assessments and to be honest." That is secondary corroboration for the figure claim, not a figure line.

Baranski & Petrusic (1994, Perception & Psychophysics) report that "providing trial-by-trial response feedback on difficult tasks improved resolution but had no effect on calibration" and that subjects "were underconfident when judgments were easy and overconfident when they were difficult." Feedback is the ground; without it the self-report does not improve. This is a genuinely low-overlap witness (human cognition, not UQ).

**Refuter:** a forecaster whose self-reported uncertainty is shown, on a pre-registered out-of-sample test, to be a sufficient statistic for its own calibration error. If the frame's own number predicts where it will be wrong without any ground reading, Fig 1 :27 is too strong for that frame. The claim then narrows to frames whose self-scores are not so calibrated.

**Status:** triangulated (Fig 1 frame-internal rule plus Fig 2 anchor rule; different arguments).

### F7: Ensemble size is not evidence; independence is

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 7 :12: "same closure, handed along; agreement compounds, evidence does not"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

An ensemble of models that share a structural assumption is one frame wearing many names. Its narrow spread is not evidence of small mechanism uncertainty; it is the pool talking. Fig 2 :42 turns independence into a budget decision: buy more of it where being wrong is expensive. The report must therefore include an independence audit of the evidence behind each component, separate from the widths of the components. This is the link to the adjacent question CMP-0036 (when ensemble forecasts capture genuine uncertainty).

**Refuter:** show that two frames with measured high overlap disagree systematically in a way that tracks the ground, so their independent-looking disagreement carries information their shared pool cannot. That would mean overlap is not the decisive quantity for that case, and Fig 2 :31 needs narrowing. The measure must be specified before the test.

**Status:** triangulated (Fig 2 independence plus Fig 7 mirror chain; a static condition and a dynamic argument).

### F8: A frame cannot certify that it has quantified everything

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."
Fig 5 :62: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."

Therefore the claim "all uncertainty has been quantified" is not available from inside the quantifying frame. The sought-for shape (complete coverage) is a preference, not a held term with a residual, so no internal check can see it. The honest report records what was unreachable and what would have to be imported, rather than asserting completeness. This is a limit, not a gap in the procedure: unreachable is a verdict, not a silence.

**Refuter:** a closed, sealed system (a finite game with a complete rule set and enumerable outcomes) in which completeness of the uncertainty accounting can be proved from inside. The figures say no frame is a sealed room, but a formal finite system may be an instance where the condition is approximately met. If so, the verdict applies to open frames only and must be stated as such.

**Status:** triangulated (Fig 8 metaframe limits plus Fig 9 sealed-room clause; Gödel/Tarski/Chaitin routes are cited in Fig 8 but are world machinery, not figure lines).

### F9: Context dependence is level relativity, not a contradiction

World sources raise a real problem for a naive two-part report. Hüllermeier & Waegeman (2021, Machine Learning) state that "aleatoric and epistemic uncertainty should not be seen as absolute notions. Instead, they are context-dependent" and that changing the context can turn one into the other. Huellermeier and Waegeman (arXiv 1910.09457) also note that "a single (probability) distribution is not enough for representing uncertain knowledge is quite prominent in the literature."

This seems to strain the figure-grounded separation. Re-census resolves it: Fig 12 :104 permits a settled molecule to become an atom at the next level, so what counts as structure and what counts as a primitive is relative to the level of composition. A variation that is irreducible at one level (a random draw) can become reducible one level up if the mechanism generating it is admitted as an atom. The figures therefore predict context dependence rather than conflict with it. The correct report states the level at which each part is irreducible.

**Refuter:** a case where a component changes from reducible to irreducible without any change of level, instrument or atom set. Then level relativity does not explain the context dependence and the figure reading is too narrow.

**Status:** single-source for the level-relativity application (Fig 12 :104), corroborated but not triangulated by the world source. Strain named, not smoothed.

### F10: Model choice is a bargain, not a threshold

Fig 5 :42: "The acceptance test is a bargain, not a threshold."
Fig 5 :43: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."
Fig 5 :30: "the machinery worked; the answer was already known"

Choosing a more complicated mechanism class is a mint, not a free gesture. It is accepted only if its description cost plus the residual it leaves is less than the residual before. This is the figure-side counterpart of minimum description length, and it prevents the recommendation from collapsing into "always report a larger Model class." It also gates F4's import: an imported primitive pays a price and is debited against independence (Fig 6 :23-24).

**Refuter:** a case where a model class is retained under the bargain only because its description cost was understated by the modeller, and a pre-registered audit corrects the cost. Then the bargain still holds but the procedure failed to apply it, which is an implementation failure, not a refutation of the figure.

**Status:** triangulated (Fig 5 bargain plus Fig 12 two-currency pricing; description-cost and action-cost routes).

---

## 4. Pre-registered refuter (written before the conclusion)

Required before the run: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim in section 0 is refuted if any of the following fires in a pre-registered test:

1. **Union collapses to partition.** Across conditions fixed before the test, a single scalar induces the same action and the same expected loss as the decomposed report, with no loss of discrimination.
2. **Decomposition earns nothing.** On a held-out, ground-scored forecast task, adding the separate mechanism and variation components does not improve a strictly proper score relative to the best single predictive distribution fitted on the same data.
3. **Structural category collapses.** A case initially classified as genuine absence (mechanism outside the class) is fully resolved by more samples inside the same class with no new atom, instrument or frame, and the classification was not an instrument-saturation artefact.
4. **A single scalar is sufficient.** The model's own reported uncertainty is a sufficient statistic for its calibration error out of sample, so Fig 1 :27 does not apply to that frame.
5. **Independence is irrelevant.** Frames with high measured evidence overlap contribute information not available from their shared pool, under a measure fixed before the test.

If any fires, the corresponding finding is retracted, the domain census is redone from the residual line alone, and no verdict is salvaged by softening a reading. Until such a test is run, nothing here is labelled `grounded`.

---

## 5. Recommendation

Report a structured object, not a number, with five fields per decision slot:

1. **Irreducible spread conditioned on the mechanism**, with its regime and horizon stated. This is the part that survives more data given the mechanism (F2, F5).
2. **Reducible spread over parameters and over candidate mechanisms within the class**, with the data that would reduce it named (F4, F10).
3. **A separate structural marker** for mechanism-class uncertainty: a set of distributions, an interval-valued or imprecise representation, or an explicit "outside closure" flag. This field is not a probability over outcomes and must not be added to field 1 or 2 (F3, F4, F8). The engineering literature supports a separate representation: Roy & Oberkampf (2011) treat epistemic uncertainty as intervals with no assumed probability distribution; the Sandia perspective says "aleatory and epistemic uncertainties should be represented separately in calculation outputs."
4. **An independence audit** of the evidence behind each candidate, so that agreement among shared-assumption models is not read as corroboration (F7).
5. **A ground-scoring plan and a mode label**, with cost if wrong and what would reverse the report (F6, F8, `THE_FORMULA.md` mode rule).

Do not sum fields 1 to 3. Do not report a single global width when slots differ. Do not claim complete coverage. When the residual persists and does not trend down, route the case to a structural re-census or an instrument check rather than to more of the same data.

**Status of this recommendation:** `specified`, triangulated across F1, F2, F3, F4, F6, F7 and F10. The specific numerical estimator that implements field 1 or 2 is a **gap**: the figures return a shape and refuse a name. That is a verdict, not a silence.

---

## 6. Canonical usage check and retraction / confirmation log

Two local sources govern use after the first five sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The canonical limit: the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments, recording the lineage.
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the "Direction" discipline (make the sought-for shape an ordinary term), and step 7's three-question split (SEARCHED, INWARD, OUTWARD).

| earlier reading | status after the canonical check |
|---|---|
| First census had one "uncertainty" domain and fit Fig 1 to it | **Retracted.** Strained: Fig 1 governs per-slot residuals inside one frame, not the relation between frames with different closures. Re-census into D1-D4. |
| "Uncertainty can be fully enumerated and the components added" | **Refused.** Fig 12 :130 names summing two currencies as the error, and Fig 9 :44 forbids certifying completeness from inside a frame. |
| Treat the aleatoric/epistemic split as the answer | **Downgraded to corroboration only.** It is a world-side two-way split, not a figure line, and Hüllermeier & Waegeman show it is context-dependent. The figure-side split is deeper: per slot, two currencies, and a structural flag. |
| F5 "random variation" is one thing | **Retracted.** Fig 13 :31 separates amplified residual (chaos) from discarded detail (noise). |
| F8 "complete quantification is impossible" | **Narrowed.** It is impossible from inside an open frame. A sealed finite system may permit internal completeness. Recorded as a limit, not a universal. |
| F4 flat residual implies structural absence | **Narrowed.** It is a candidate for structural absence, not proof. Instrument saturation is the named alternative and must be checked before importing. |
| Fig 13 chaos/noise versus aleatoric/epistemic literature | **Not strained.** Different objects: Fig 13 names sources of apparent randomness inside a process; the UQ literature names reducibility classes. Kept separate, never merged. |
| F9 world context dependence versus figure separation | **Not strained after re-census.** Level relativity (Fig 12 :104) explains it. Marked single-source for the application. |
| "The figures give a numerical estimator" | **Never claimed; explicitly refused.** Shape, not a name. |

### Route check (Formula step 7, kept distinct)

- **SEARCHED:** is the estimator already in the closure and unfound? Asked first, and cheapest. For the structured report, yes: interval methods, p-boxes, credal sets, ensembles and proper scoring rules are all in the published UQ literature. More search here is budget work, not an import.
- **INWARD:** extend an instrument already returning something. Here: sharpen the diagnostic that distinguishes a flat structural residual from a saturated sensor (Fig 6 :32).
- **OUTWARD:** import a frame whose closure predicts the shape of the residual. Here: when the mechanism class is wrong, find a frame that can hold the missing atom, with a source gate and shadow test (Fig 6 :23-24).

These three are distinct instructions. INWARD and OUTWARD are opposed and were never read against one another. Importing against a budget limit would add an atom that was not needed.

### Updated verdict

The shape survives the canonical check: unbundle the compound, report per slot, hold the currencies apart, mark structural absence separately, audit independence, and score against a ground. What does not survive is any claim to a unique estimator, a single scalar, additive decomposition, or complete coverage. Strains after re-census: none hidden; one single-source application (F9) and one single-source figure line (F5) are marked as such. Nothing in this audit is `grounded`, and the pre-registered refuter in section 4 has not been run.
