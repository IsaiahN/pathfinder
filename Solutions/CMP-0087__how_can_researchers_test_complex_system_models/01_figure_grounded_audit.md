# Figure-grounded audit: testing a complex-system model without the controlled experiment

**Mode of this document: `specified`, not `grounded`.** It states what would have to be observed. `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026): LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited `Fig N :line`). Loop: `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources actually fetched 2026-11-22: Gutenkunst et al. 2007 (PLoS Computational Biology), Grimm et al. 2005 (Science, via USGS record), Abadie, Diamond and Hainmueller 2007/2010 (NBER/JASA), Sargent 2013 (Journal of Simulation), Lempert et al. 2013 (RAND), de Vocht et al. 2021 (BMC Medical Research Methodology), Collins et al. 2024 (BMJ). Full provenance in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

A complex-system model M predicts an observation for a target system S. The ordinary validator intervenes: choose an action a, hold the background fixed, observe o′, and read the residual R = |Γ(b,a) − o′| per object slot. Here that route is closed.

- **Physical impossibility:** the intervention cannot be performed at the scale, cost or irreversibility of the target. One cannot randomise a climate, re-run a city, or replay an extinction.
- **Ethical unacceptability:** the intervention must not be performed. One cannot assign a population to a harmful exposure, randomise a village to a policy a priori known to be harmful, or give a patient an unproven treatment for the sake of a clean comparison.
- **Non-isolability:** the background cannot be held fixed, because the target is an open system whose contact cascades reach far beyond the nominal treatment (`Fig 11 :52-53`).

The residual is therefore **a missing-contact residual**, not a shortage of effort. What is absent is the observation o′ that would settle R. The two options and what each leads to:

- **Option A:** substitute agreement for the missing ground. Expert consensus, ensemble agreement, face validity, in-sample fit, or a synthetic test harness stands in for o′. This buys a "validated" label. By `Fig 2 :35`, `Fig 7 :13` and `Fig 5 :27`, it buys variation and a frame-internal score, not a correction. The model and its checkers can drift together without noticing (`Fig 2 :33-34`).
- **Option B:** find an anchor that settles the same question without the intervention, and keep the verdict separate from the budget. This yields a checkable claim, an explicit refuter, and an honest stop at `unreachable at this budget` when nothing returns anything.

`Fig 1 :23`: *"The ground enters as the only metric."* `Fig 1 :27`: *"A frame cannot score itself with a quantity it also produces."* A model is a frame, so refitting it cannot be the test of it.

---

## 1. Domain census, before choosing any figure line

**R by arity, symmetry, scale.** Arity: at least three, namely model, target and channel; the missing intervention is a fourth, absent term. Symmetry: **asymmetric**. The ground must not update on the model (`Fig 2 :33`: *"The anchor must not update."*). A symmetric validation relation is mutual update, which is collapse 1, coherent drift. Scale: two scales, the model's abstraction (T_A) and the target's concrete outcome (T_E), with a round-trip gap R_T (`Fig 4 :30`).

**Partition or union.** **Union, not partition.** "Controlled experiments impossible" bundles at least three conditions (physical, ethical, non-isolability) that overlap in real cases. `Fig 9 :5`: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* `Fig 9 :57`: *"a case in two conditions is not a harder case of either."* Each condition gets its own loop; verdicts are never averaged.

**One line per domain: actors / currency / anchor.**

| # | domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|---|
| 1 | Model frame (the object under test) | parameters, structure, library Γ, closure(Γ) | description length, fit, prediction | none of its own | **No.** A model is a frame, not a ground. Treated as a frame, not a check domain. |
| 2 | Target system / world | entities, conditions, relations in contact with R | observations, outcomes | the world, `Fig 2 :29`: *"A measurement, an experiment, a counter, a market, a patient outcome."* | Yes |
| 3 | Alternative ground (the answer domain) | exogenous events, natural experiments, historical shocks, routine readings, patient outcomes, markets | readings from instruments already returning something (`Fig 6 :32`) | the same world, contacted without a researcher-controlled intervention | Yes |
| 4 | Independent checking frames | other models, other instruments, other disciplines, other datasets | independence, how little they draw on the same evidence (`Fig 2 :31`) | the ground, never agreement | Yes |
| 5 | Verification / governance seat | reviewers, registries, pre-registered refuters, provenance records | refusal and provenance | the ground; the seat carries only what it did not author (`Fig 10 :37-38`) | Yes |

Domain 1 has no anchor of its own. That is not a defect in the census; it is the finding. No amount of work inside domain 1 creates an anchor for domain 1.

**Dependency order (Fig 3).** Perceive the residual → have terms for what would count as progress → state the objective (what observation would change the model) → plan a route through alternative grounds → name what worked and verify it. `Fig 3 :27`: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* `Fig 3 :29-30`: *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."* In this field the middle link is the one usually missing: teams instrument fit and never instrument contact.

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing on this residual | verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric; frame-internal quantities disqualified | governs domain 1 and the shape of R |
| 2 The Ground | anchor test, independence, truth vs convention | governs domains 2 to 5 |
| 3 Dependency Chain | a link with no instrument is not a working link | governs the order of checks |
| 4 The Membrane | round trip and its gap; methods cross, recordings do not | governs abstraction vs settlement |
| 5 Mint Pipeline | guards are a product; settlement is after a candidate | governs "validated" labels |
| 6 Closure / Reachability | instruments improved from worse ones; inward vs outward vs more search | governs the alternative-ground search |
| 7 Room Chain | agreement compounds, evidence does not | governs ensembles and expert panels |
| 8 Union Surplus | no proof of absence; underivable vs unreachable-at-budget | governs the verdict set |
| 9 Leave / Arrive | split before searching; describe first; ground decides | governs the union split and the stop |
| 10 Ground Maintainer | verifier non-access; bring residual, never source; declare stake | governs domain 5 |
| 11 The Habitat | enumerate contact, cascades, substituted habitat | governs what counts as a real test |
| 12 The Bond | two currencies, bits and actions; budget decides reach | governs filters vs witnesses |
| 13 Minimum Viable Set | unreachable is a verdict; narrowing, not naming | governs the honest stop |
| Operators / Symbols tables | anchor definition; the frame / ground distinction | governs terminology |

Strained readings are named in §5, not smoothed over.

---

## 3. Findings F1 to F9

### F1  -  The question is an anchor question, not a fit question (governs domains 2 and 3)

`Fig 2 :29-30`:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**

`Fig 1 :23`:

> **"The ground enters as the only metric."**

`Fig 1 :27`:

> **"A frame cannot score itself with a quantity it also produces."**

The crucial word in `Fig 2 :29` is the list. A controlled experiment is **one** member of the anchor set, alongside a measurement, a counter, a market and a patient outcome. The figures do not require the researcher-controlled intervention; they require something that *"does not change its answer because of what any frame thinks"*. If you push on it and it moves, it is not an anchor.

So the answer to the question is not "build a weaker experiment and call it validation." It is "find the thing that settles the question and does not move when the model pushes on it." Physical and ethical impossibility remove one anchor; they do not remove anchoring.

- **Mode:** `general` for the criterion, `specified` for the claim that a non-interventional anchor can settle a given complex-system model.
- **Status:** triangulated across Fig 1 and Fig 2 (different quantities: metric vs anchor test).
- **Refuter:** exhibit a case where the only thing that settled a model claim was a quantity the model itself produced, and the claim later survived contact with an independent ground.

### F2  -  Do not build the ideal instrument from a description. Sharpen one already returning something (governs domain 3)

`Fig 6 :32`:

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

`Fig 6 :34-35`:

> **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

`Fig 6 :30`:

> **"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**

`Fig 6 :29`:

> **"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."**

This is the operational heart of the answer. When you cannot run the controlled experiment, look for a reading that already exists at some resolution and fails to resolve: routine administrative data, historical records, natural experiments, an exogenous policy change, a market outcome, a patient outcome. Improve that. Do not first specify the perfect instrument, because the figures say it is not built from a description. Run inward (sharpen what already returns something) and outward (find a frame whose closure already predicts the shape of the residual) as **two tracks, never read against one another** (`Fig 6 :31`).

- **Mode:** `specified`.
- **Status:** triangulated across Fig 6 (instrument rule) and Fig 2 (anchor test). Fig 6 supplies the route, Fig 2 supplies the test of whether the route reached ground.
- **Refuter:** exhibit a case where no reading returned anything at any resolution, the model was nonetheless settled at that budget, and the settlement later survived an independent anchor.

### F3  -  Agreement, ensembles and popularity are not validation (governs domain 4)

`Fig 2 :35`:

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

`Fig 2 :31-32`:

> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."**

`Fig 2 :40`:

> **"agreement about the world is worthless when the agreeing frames share an evidence pool"**

`Fig 7 :13`:

> **"same closure, handed along; agreement compounds, evidence does not"**

`Fig 7 :35`:

> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

`Fig 9 :60`:

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

An ensemble of models trained on the same data is one witness with many names. A panel of experts who read the same literature is one witness. Their agreement can be a convention about meaning, which `Fig 2 :41` calls *"efficient for a convention"*, but it is *"disqualifying for a verdict"*. Multiple checks count only when they draw on different evidence. `Fig 2 :42`: *"Buy independence in proportion to the cost of being wrong."*

- **Mode:** `general` for the correlation rule, `specified` for any particular set of checks.
- **Status:** triangulated across Fig 2, Fig 7 and Fig 9.
- **Refuter:** exhibit a case where agreement among frames sharing one evidence pool settled a model claim and the claim survived a later, genuinely independent anchor.

### F4  -  A synthetic test harness proves wiring, not capability (governs the "we validated it in simulation" move)

`Fig 11 :70`:

> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

`Fig 11 :68` and `Fig 11 :69`:

> **"what you failed to reproduce is invisible until the goal fails"**
> **"what you unintentionally introduced is invisible until it acts"**

`Fig 11 :40`:

> **"An improvement that does not change contact changes nothing, however much it improves."**

`Fig 11 :39`:

> **"capability is a property of agent-and-habitat, never of the agent alone."**

Where the real system will not permit an intervention, teams often move the test into a simulator where they can intervene freely. That changes the habitat, not the target. It can verify code and isolate mechanism (Sargent 2013 calls this verification and conceptual-model validity), but it cannot by itself establish that the model tracks the real system, because what you failed to reproduce is invisible until the goal fails. This is the single most common false answer to CMP-0087.

- **Mode:** `specified`.
- **Status:** triangulated across Fig 11 (habitat substitution) and Fig 2 (anchor test).
- **Refuter:** exhibit a case where success in a substituted habitat established capability in the original target without a subsequent reading of that target.

### F5  -  Absence of refutation is not validation (governs the verdict set)

`Fig 8 :39`:

> **"So a search that finds nothing is never a proof of absence."**

`Fig 9 :44`:

> **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

`Fig 9 :42`:

> **"narrowing gets you close, the ground decides"**

`Fig 13 :134`:

> **"Unreachable is a verdict here, not a silence"**

The verdict set is therefore **{grounded by an independent anchor, candidate / unreached, unreachable at this budget}**. It is not {validated, not yet validated}. A model that survives every available check has been narrowed, not confirmed. This is corroborated from an unrelated field: Collins et al. (BMJ, 2024) write that referring to a model as having been "validated" just because a study labelled as validation was conducted is *"unhelpful and arguably misleading"*, and that a model *"can never be proven to be always valid"*.

- **Mode:** `general` for the logical point, `specified` for the verdict on any model.
- **Status:** triangulated across Fig 8, Fig 9 and Fig 13; corroborated by the BMJ source (low overlap with the framework).
- **Refuter:** exhibit a finite accumulation of successful checks that proves a model always valid.

### F6  -  Unbundle before searching. "Impossible" is a union (governs the route)

`Fig 9 :54`:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**

`Fig 9 :27-28`:

> **"describe it before you go looking, or any frame you pick will seem to fit"**

`Fig 8 :53`:

> **"Residual first, frame second."**

`Fig 6 :23`:

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

If you pick the validation method first (synthetic control, agent-based calibration, expert elicitation) and then look for a reason it fits, any method will seem to fit. The correct order is: describe R in effect terms (what slot, what observation, what would change your mind), bind that description as an ordinary term before the run (`THE_FORMULA.md` "Direction"), then find the frame whose closure predicts its shape. See `06_isomers_and_order.md` for the three searches and their order.

- **Mode:** `specified`.
- **Status:** single-source for the union rule (Fig 9), triangulated for residual-first (Fig 8 and Fig 6).
- **Refuter:** exhibit a case where a validation frame chosen before R was described outperformed a frame chosen after a full effect description, across several independent targets.

### F7  -  Enumerate the habitat from the world, including cascades (governs domain 2)

`Fig 11 :43-44`:

> **"The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

`Fig 11 :48`:

> **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**

`Fig 11 :52-53`:

> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

A complex-system model is usually wrong at the edges of its contact map, not at its centre. The validator must enumerate what acts on R and what R acts on, then the next ring out. The DDT case is the figure's own example: a first-order enumeration would have missed the eggshell effect three steps away. Natural-experiment practice echoes this: de Vocht et al. (2021) require evaluation of spill-over and negative controls, which are second-order contact checks.

- **Mode:** `specified`.
- **Status:** single-source for the enumeration rule (Fig 11), corroborated by two low-overlap world sources (ecology: Grimm et al. 2005; public health: de Vocht et al. 2021).
- **Refuter:** exhibit a case where a direct-contact-only validation was sufficient for a model whose target later showed a second-order effect.

### F8  -  Keep the verifier outside, and declare the stake (governs domain 5)

`Fig 10 :42`:

> **"A verifier that can reconstruct the claim cannot verify it."**

`Fig 10 :52`:

> **"Bring a characterised residual, never the source."**

`Fig 10 :59`:

> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."**

`Fig 10 :60`:

> **"Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."**

If you give the checker the full model, its data and its preferred answer before asking for a verdict, it has joined the frame being checked. The first contact carries the residual and the pre-registered refuter. The stake (the model author wants the model to be right) cannot be removed, so it is declared, not denied.

- **Mode:** `general`.
- **Status:** triangulated across Fig 10 and Fig 2.
- **Refuter:** exhibit a case where the same person who authored a model independently validated it after full access to its interiors, and the validation survived a blind replication.

### F9  -  Bits and actions are two currencies, and the budget is a filter (governs the stop)

`Fig 12 :125-126`:

> **"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."**

`Fig 12 :127`:

> **"It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all."**

`Fig 4 :30`:

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."`

A compact model can be cheap to state and prohibitively expensive to settle. Budget decides how much of the candidate space gets visited; it does not decide whether what survived is true. `Fig 9 :60` forbids letting a filter hand you a verdict. The round-trip gap R_T is the honest report of what the abstraction dropped (`Fig 4 :31-32`): *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."*

- **Mode:** `general` for the two-currency claim, `specified` for any budget decision.
- **Status:** single-source for the currency split (Fig 12), triangulated for the filter rule (Fig 9 and Fig 4).
- **Refuter:** exhibit a case where a cost filter directly established the truth of a surviving model without any ground reading.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the seat discipline: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim under test is: **when the controlled intervention is unavailable, a complex-system model can be tested only by ranging it separately against an anchor that did not move because of the model, drawn from a frame whose evidence pool differs from the model's; the legitimate verdicts are `grounded`, `candidate / unreached`, and `unreachable at this budget`, never `validated by agreement`.**

The claim is refuted if any of the following holds:

1. A valid model claim was settled by agreement among frames drawing on one evidence pool, with no independent anchor, and that agreement later survived contact with an outside ground. (Breaks F3.)
2. No reading returned anything at any resolution, yet the model was settled at that budget and the settlement later survived an independent anchor. (Breaks F2.)
3. Success in a substituted habitat established capability in the original target without a subsequent reading of that target. (Breaks F4.)
4. A finite accumulation of successful checks proved a model always valid. (Breaks F5.)
5. A cost or feasibility filter, by itself, established truth. (Breaks F9.)

If any fires, withdraw the claim. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation: the answer the figures actually give

1. **Split before you search (F6).** Name which impossibility binds: physical, ethical, non-isolability, or a compound. Do not average the conditions.
2. **Describe R in effect terms before choosing a method (F6, F9).** What slot, what observation, what would change the model? Bind this as an ordinary term and write the refuter now.
3. **Run the three searches in order, kept distinct** (`THE_FORMULA.md` step 7):
   - **SEARCHED:** is the needed reading already in hand and unfound? Keep searchers independent (`Fig 6 :50`: *"Distribute the search, and keep the searchers independent."*). If this is a budget problem, do not import a new atom.
   - **INWARD:** find the worse instrument already returning something and sharpen it (`Fig 6 :32-35`).
   - **OUTWARD:** import the frame whose closure predicts R's shape (`Fig 6 :23`, `Fig 8 :53`). Natural experiments, synthetic controls, difference in differences, pattern-oriented validation against several observed patterns, robust decision making across many futures.
4. **Enumerate contact outward, not just direct contact (F7).** Include spill-over and second-order effects.
5. **Keep verdicts per domain, never averaged (F1, F3, F5).** Count a check only if its evidence pool differs. Report `candidate / unreached`, not `validated`, when nothing falsified but no independent anchor moved. Report `unreachable at this budget` when nothing returns anything.
6. **Guard the verifier (F8).** Send the characterised residual and the refuter, not the model's interiors. Declare the stake.
7. **Measure the round-trip gap (F9).** State what the abstraction dropped. Prestige and agreement are not anchors (`Fig 2 :35`, `Fig 2 :40`).

`Fig 4 :25-26`: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, which is the residual plus the route plus the refuter, not the conclusion.

---

## 6. Canonical usage check (figures README, read 2026-11-22)

Two governing points from `FRAMEWORK/reference/FIGURES_README_canonical.md`:

- *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Every quote above was taken from `03-FIGURES_TEXT.md`, not from a summary.
- *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* Applied in §5 (strain log below).
- The framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the instruments, recording the lineage. *"Indiscernibility is not identity."* Hence the answer is a shape of a validation route and a verdict set, not a named universal validation technique.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "Fig 6 :32 says build a proxy experiment from a theory" | **Retracted.** The line says *"improved from a worse instrument already returning something"*, not specified from a description. The route is empirical, not design-only. |
| "natural experiments plus synthetic controls plus external validation are three independent corroborations" | **Retracted.** If they draw on the same data or the same evidence pool, they are one witness (`Fig 2 :40`). Collins et al. (2024) call the "independent" label on a random split a misnomer. Independence must be earned and recorded. |
| "ensemble agreement is a weak form of validation" | **Refused.** `Fig 7 :35` calls a room's agreement variation; `Fig 2 :41` allows it only for conventions about meaning. |
| "if all checks pass, the model is validated" | **Refused.** `Fig 8 :39`, `Fig 9 :44`, and the BMJ source. The correct label is `candidate / unreached`. |
| "the controlled experiment is the gold-standard anchor and nothing else qualifies" | **Refused.** `Fig 2 :29` lists measurement, counter, market and patient outcome alongside experiment. |
| F1 anchor criterion | **Canonically confirmed.** The README says the ground, not agreement, decides. |
| F5 verdict set | **Canonically confirmed.** `Fig 13 :134`: *"Unreachable is a verdict here, not a silence"*. |
| "no last room" applied here | **Confirmed and relevant.** A final, all-validating test suite is a terminal room. `Fig 7 :6` names *"the limit: no last room"*. |

### Strains and re-census

- **Synthetic harness vs engineering V&V.** Sargent (2013) treats simulation verification and conceptual-model validity as legitimate parts of validation. `Fig 11 :70` says a synthetic solve proves wiring and never capability. **Not strained after re-census:** Sargent's verification and conceptual validity concern the model as an artefact; `Fig 11 :70` concerns capability transfer to the original habitat. Different objects. The model can be verified as code without being validated against the world.
- **"Surviving all checks proves nothing" vs the practical need to stop.** `Fig 8 :39` and `Fig 9 :44` forbid treating non-refutation as confirmation. **Not strained after re-census:** stopping is a budget decision, a filter, and `Fig 9 :60` separates filters from witnesses. Stop, but label the result `candidate / unreached`.
- **"Build an instrument from a worse one" vs "theory can precede its instrument."** `Fig 6 :32` is about instruments; `Fig 6 :37` explicitly welcomes theory preceding its instrument. Different objects. No strain.
- **After re-census: zero live strains.** One earlier strain (proxy experiment) was a misreading and was retracted above.

---

## 7. Verbatim line index used in this file

Fig 1 :19, :23, :27. Fig 2 :29-30, :31-32, :33-34, :35, :40, :41, :42. Fig 3 :27, :29-30. Fig 4 :22, :25-26, :30, :31-32. Fig 5 :27. Fig 6 :23, :29, :30, :31, :32, :34-35, :50. Fig 7 :6, :13, :35. Fig 8 :39, :44, :53. Fig 9 :5, :27-28, :42, :44, :54, :57, :60. Fig 10 :37-38, :42, :52, :59, :60. Fig 11 :39, :40, :43-44, :48, :52-53, :68, :69, :70. Fig 12 :103, :125-127. Fig 13 :134. THE_FORMULA steps 2, 5, 7. Figures README canonical usage rule.

All quotes checked character by character against `FRAMEWORK/reference/03-FIGURES_TEXT.md` on 2026-11-22. The seat-discipline sentence in §4 is a method rule, not a figure line, and is marked as such.
