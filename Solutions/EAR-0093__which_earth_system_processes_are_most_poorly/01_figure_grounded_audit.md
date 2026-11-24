# Figure-grounded audit: Which Earth-system processes are most poorly represented in global models?

**Mode: `general` on the structural findings, `specified` on the candidate ranking. Nothing here is `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No model was run and no instrument was read.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md` (every figure line quoted below is an exact substring of that file), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, plus the world sources actually opened and recorded in `10_source_ledger.csv`.

---

## 0. The claim under audit

**Question (source: earth systems.txt line 124, section 10 Observation, modeling, and decision-making):** Which Earth-system processes are most poorly represented in global models?

Restated in effect terms. A global model is a frame `Γ`: a library of resolved equations plus subgrid parameterizations. It predicts `Γ(b,a)` for each process slot `s`. Observations `o'` come from instruments. The residual is `R_s = |Γ(b,a) - o'|` per slot, never as a global score. The question asks which slot carries the largest, most persistent, least improving gap between what the model represents and what the ground returns.

Two options, and what each leads to:

- **Option A (name a process):** answer "cloud microphysics" or "ice sheets" as a settled verdict. This treats a rank over slots as if it were a fact the figures deliver. It leads to a `general`-mode verdict presented as `grounded`, and it selects for checking the processes whose instruments already exist, which is effort above the break in Fig 3.
- **Option B (derive the shape and the ranking rule):** return the form any answer must have, keep the candidate processes as `specified` witnesses from world sources, and stop where no per-slot instrument settles the rank. This leads to a checkable packet with a pre-registered refuter and an open top slot.

The derivation below prefers B. It records what A would have to supply to become admissible.

**What an answer would look like, bound as an ordinary term (formula step "Direction"):** an answer is a *ranking of process slots by residual that persists and does not trend down, measured against an instrument that does not move when models push on it, with the no-instrument slots marked as unreached rather than small.* That shape is written down here before the search so it can accrue a residual like anything else.

---

## 1. Figure census

Quick bearing table. Strained readings are named in section 7, not smoothed over.

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual indexed per object slot, never aggregated; frame-internal scores disqualified | governs the unit of the question |
| **2 The Ground** | anchor must not move; independence between frames; agreement is not a verdict | governs what may rank the slots |
| **3 Dependency Chain** | ordered by dependency; middle link breaks; no instrument means nobody looked | governs where the worst slot sits |
| **4 The Membrane** | only methods cross up; round trip gap R_T must be measured | governs subgrid-to-grid representation |
| **5 Mint Pipeline** | five gap kinds; persistent non-trending residual ranks the wrong term; guards as product | governs the ranking rule and the unbundling |
| **6 Closure / Reachability** | absent from closure versus unfound; instruments opposed; no proto-instrument where nothing registers | governs "absent" versus "merely hard" |
| **7 Room Chain** | agreement compounds, evidence does not | governs multi-model ensembles |
| **8 Union Surplus** | residual first, frame second; search that finds nothing is not proof of absence | governs the world search and the honest stop |
| **9 Leave / Arrive** | unbundle a union before searching; describe R before choosing a frame; a kind of thing, never the answer | governs the shape of the answer |
| **10 Ground Maintainer** | ground does not decay, channel does; verifier non-access; bring a characterised residual | governs the outreach ordering |
| **11 The Habitat** | capability is agent-and-habitat; enumerate the habitat; what you cannot measure yet is residual | governs the candidate list |
| **12 The Bond** | two currencies, bits and actions, which do not add | governs the cost of a candidate answer |
| **13 Minimum Viable Set** | unreachable is a verdict; what composes and what would have to be imported | governs the final stop |
| **Operators / Symbols tables** | `R` is the aim and is always a slice; the ground is the anchor | notation check |
| **THE_FORMULA.md** | step 2 routing, step 7 three questions, mode rule | method, not a figure line |

---

## 1b. Domain census, before any figure line was chosen

### R by arity, symmetry and scale

- **Arity:** one residual indexed over many slots. The slots are the processes named in the source section: atmosphere, ocean, ice, land, ecosystems, aerosols, clouds, carbon cycle, land use. Arity is one-to-one between a process slot and its prediction/observation pair. It is not a single global error.
- **Symmetry:** the slots are **not** interchangeable. Cloud microphysics has different actors, currency and anchor from marine ice-sheet collapse. Aggregating them asserts an interchangeability the figure forbids. A further asymmetry is compensating error: two slots can fail in opposite directions so the global score looks healthy. This is a legal state, not a contradiction (Fig 1 :13).
- **Scale:** step (a subgrid scheme inside one grid cell), cycle (warming to cloud to radiation to warming), level (process to component to Earth system), seat (the model-evaluation community as ground maintainer), lineage (CMIP generations handed along). The residual lives principally at the **membrane** between step and cycle, where an unresolved process must be represented by a term in `Γ`.

### One line per domain (actors / currency / anchor)

1. **Domain A, the model frame `Γ`.** Actors: grid cells, parameterization schemes, tunable parameters, state variables. Currency: description length of the scheme and closure(Γ), the set of processes representable at any depth. Anchor: none internal. The frame cannot score itself with a quantity it also produces. Not a standing domain until the anchor is named outside it.
2. **Domain B, the ground.** Actors: satellites, in-situ probes, laboratory experiments, field campaigns, paleo reconstructions. Currency: observations `o'`. Anchor: a measurement or experiment that does not change its answer because a model group thinks differently. The Holuhraun 2014 eruption is used this way in the aerosol literature (Wang et al., 2026, world source W2).
3. **Domain C, the membrane and the dependency chain.** Actors: unresolved turbulence, convection, cloud microphysics, ice-shelf fracture, thawing soil carbon; the schemes that stand in for them; the instruments that could return a reading. Currency: what crosses between subgrid and grid, methods upward and head starts downward. Anchor: the round-trip gap `R_T` between a scheme abstraction and its concretisation. This is where "poorly represented" actually occurs.
4. **Domain D, the evaluation and comparison frame.** Actors: models, schemes, intercomparison projects, reviewers. Currency: agreement, spread, skill scores. Anchor: the ground, never the agreement. Independence is low when models are tuned to the same satellite products, so their convergence is one evidence pool.
5. **Domain E, the seat that maintains the ground.** Actors: instrument builders, laboratory experimentalists, field campaign leads. Currency: conventions and instruments. Anchor: the ground kept reachable. It may author conventions, never the verdict it is asked to check.

### Partition or union

**Union, not a partition.** "Most poorly represented" bundles at least four different conditions:

- (a) the process has no term in `closure(Γ)` at all, for example ice-cliff failure absent from the standard model generation before it was introduced;
- (b) the term is present but mis-attached, with wrong process rates, as in mixed-phase cloud microphysics;
- (c) the term is present but unsettled, because no instrument returns the individual process rate;
- (d) the residual is hidden by compensating errors across slots, so the global score is near zero while a live slot residual persists.

An overlap of conditions is a compound with its own loop (Fig 9). A single lever that improves one condition clears only the region where that condition alone holds and leaves the intersections standing. So the question must be unbundled before any slot is ranked.

### Order by dependency (Fig 3)

perception of the process (an instrument returns something) -> vocabulary (a scheme term exists for what the process affords) -> objective (a stated measure of what counts as progress for that term) -> planning (a route to improving the scheme) -> learn and carry (verify and pass to the next model generation). Upstream first. Effort spent above a break arrives at a step that cannot use it.

---

## 2. Findings

### F1: The residual is per process, and a global score is not admissible (governs the unit)

Fig 1 :19 "The residual is indexed by object slot, not aggregated."

Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :13 "a global R near zero with one live slot residual is a legal state"

A global skill score cannot answer which process is worst. It is the quantity that hides the answer. The world literature exhibits exactly this: Wang et al. (W2) report that six global models simulate cloud optical depth response reasonably well "although through compensating errors", while all six underestimate cloud cover response. A correct global-looking optical depth coexists with a live slot residual in cloud cover. Morrison et al. (W1) call the same structural problem the "parameterization squared" case, where unresolved cloud structure and unresolved microphysics are compounded.

**Refuter:** exhibit a process ranking derived from a single global metric that agrees, slot by slot, with an independent per-process instrument comparison. If that holds, Fig 1 does not govern this question and the census is wrong.

**Status:** triangulated across Fig 1 (slot indexing) and Fig 5 :59-60 (persistent residual ranking). Low overlap between the agent loop and the mint pipeline.

### F2: Only an unmoving ground may rank the slots (governs the witness)

Fig 1 :23 "The ground enters as the only metric."

Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."

A multimodel spread is not an anchor. If models are tuned to the same cloud products, their agreement is the pool talking. The candidate anchors for this question are instruments: cloud susceptibility inferred from a volcanic eruption (W2), laboratory measurement of individual ice-particle process rates (W1), paleo sea-level constraints on ice-sheet models (W5), and soil-incubation data for permafrost carbon (W4).

**Refuter:** show that a consensus ranking of processes, with no independent instrument behind it, changes what the instruments return. If a vote can move the ground, the ground was a frame all along and this finding fails.

**Status:** triangulated across Fig 1 (only metric) and Fig 2 (anchor). Low overlap.

### F3: The worst slot is at the unmeasured middle link, not the most discussed one (governs location)

Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."

Fig 3 :24 "Why the middle link is where chains usually break."

Fig 3 :26 "so it attracts the least attention and the fewest instruments."

Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

Morrison et al. (W1) give the mechanism in domain terms: individual microphysical process rates "cannot be obtained directly" from natural observations, and even in the laboratory "what can be measured is often different from what is needed by schemes". The link between having a parameterization vocabulary and being able to say what counts as progress for a specific rate is the broken one. By contrast, global mean temperature and top-of-atmosphere flux have obvious instruments (W6), so effort lands there.

This is a `general` structural claim about where the residual concentrates. It does not name which process occupies the slot.

**Refuter:** exhibit a process whose residual is large, persistently wrong, and already measurable by a dedicated process-rate instrument, while a neighbouring no-instrument process is settling. That would put the worst slot above the break and refute the location claim.

**Status:** triangulated across Fig 3 (dependency break) and Fig 4 :21-22 (what crosses the membrane is a method, not a recording). Different subject matter, low overlap.

### F4: Absent from the closure is a different verdict from merely unfound (governs the kinds of "poor")

Fig 6 :34 "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

Fig 8 :39 "So a search that finds nothing is never a proof of absence."

Fig 9 :6 "the verdict: is φ* in here at all?"

Fig 13 :134 "Unreachable is a verdict here, not a silence,"

The four bundled conditions in section 1b now separate:

| condition | figure reading | example from world sources | instruction |
|---|---|---|---|
| no term in closure | import is owed, inward refinement cannot supply it | ice-shelf hydrofracture and marine ice-cliff failure were "previously underappreciated processes" (W5) | OUTWARD: find the frame that holds the process |
| term present, mis-attached | refit, do not mint | five cloud schemes tried, none reproduced the observed cloud-cover response (W2) | BROKEN, rebinding |
| term present, unsettled | instrument owed | individual microphysical rates not directly observable (W1) | INWARD from an instrument already returning something |
| hidden by compensation | per-slot residual owed | optical depth right for the wrong reasons (W2) | re-census at slot level |

Note the asymmetry. A wrong import costs more than starting from primitives (Fig 6), so a process must not be added to a model merely because a paper describes it.

**Refuter:** show that all four conditions collapse to one under a single measurement protocol, so that "absent" and "unfound" issue the same instruction. The figures would then have mis-divided the union.

**Status:** triangulated across Fig 6, Fig 8 and Fig 9. Low overlap between the wall, the union surplus and the leave/arrive questions.

### F5: The ranking rule is the persistent, non-trending residual (governs "most")

Fig 5 :59 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"

Fig 5 :60 "The selector asks which residual is improving; this asks which one keeps being wrong and is not."

Fig 1 :20 "Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert"

So "most poorly represented" is not the slot with the largest one-off error. It is the slot that keeps being wrong while sustained effort fails to make it trend down. The world sources give three qualifying candidates, each with a stated mode:

| candidate slot | world evidence (secondary) | figure-condition it satisfies | mode |
|---|---|---|---|
| cloud microphysics and aerosol-cloud interaction | largest contribution to overall uncertainty in cloud feedback (W6); cloud cover response underestimated by all six models despite tuning five schemes (W2); representation "continues to pose a major challenge" (W1) | persistent, non-trending; no individual-rate instrument; mis-attached schemes | `specified` |
| marine ice-sheet dynamics and ice-cliff failure | "previously underappreciated processes" added to a coupled model change the high-end sea-level result by metres (W5) | term absent from closure, import owed | `specified` |
| permafrost carbon feedback | "the magnitude and timing of greenhouse gas emission from these regions and their impact on climate change remain uncertain" (W4) | unsettled term; instrument and long record needed | `specified` |

This ranking is a **shape plus witnesses**, not a verdict. The figures supply the rule; the world supplies candidates; the ground has not settled the order.

**Refuter:** a per-slot instrument comparison, run before this packet is sent, in which one of these three residuals trends monotonically down under sustained scheme improvement while another slot that we did not list persists. That would replace the candidate set without touching the figures.

**Status:** triangulated for the rule (Fig 1 plus Fig 5); single-source, `specified`, unmeasured for the candidate ranking.

### F6: Ensemble agreement cannot hand the verdict (governs multi-model studies)

Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."

Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

Fig 7 :13 "agreement compounds, evidence does not"

Fig 2 :42 "Buy independence in proportion to the cost of being wrong."

A review that ranks processes by how often models disagree has a use as a filter for where to look. It cannot be a witness for which process is worst, because disagreement among frames tuned to the same products is still one pool. Conversely, agreement among such frames is not reassurance. The correct ask is a source-discriminating instrument per slot, bought in proportion to the cost of a wrong rank.

**Refuter:** demonstrate statistical independence of the model residuals against distinct observations, with an effective sample size that survives the effective-sample-size correction named in Fig 2 :44. Then agreement or spread carries verdict weight and this finding narrows.

**Status:** triangulated across Fig 2 and Fig 7. Low overlap.

### F7: The question must be unbundled before it is searched (governs the answer form)

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :57 "a case in two conditions is not a harder case of either"

Fig 9 :32 "you get a kind of thing, never the answer itself"

Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit"

A single named process would be a name where the framework returns a kind of thing. What it can return is the *kind* of slot: a process at an unmeasured middle link, with a persistent residual, whose term is absent or mis-attached or unsettled. Selecting cloud microphysics rather than ice sheets as "the worst" is a binding from the world frame, provenanced as such, not a derivation from the figures.

**Refuter:** produce a figure line that ranks two Earth-system processes against each other. There is none in the extract, and a re-census that finds one would remove this finding.

**Status:** triangulated across Fig 9 and the canonical figures README limit (*"a shape, not a name"*). Low overlap between the decision figure and the usage rule.

### F8: The two currencies must be held apart (governs the cost of an answer)

Fig 12 :125 "A composition costs in two currencies, and they do not add."

Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."

Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

A scheme can be cheap to state and enormously expensive to settle. Ice-cliff failure is a short description (a process term) whose confirmation needs palaeo constraints and decades of observation. Cloud microphysics is a large, expensive-to-describe scheme that still cannot be settled at the process-rate level. Summing description cost and action cost into one "model complexity" score is the named error, not the fix.

**Refuter:** exhibit a conversion, justified from the figures, between description bits and settlement actions for these slots. If one exists, this finding is retracted.

**Status:** single-source for the two-currency rule (Fig 12), corroborated in kind by the world sources but not derived from them.

### F9: What actually survives, with mode attached

| claim | mode | figure or source |
|---|---|---|
| rank process slots per slot, never by a global score | `general` | Fig 1 :19, :22 |
| only an unmoving ground may settle the rank | `general` | Fig 1 :23, Fig 2 :29 |
| the worst slot lies at a link with no instrument | `specified`, falsifiable | Fig 3 :27 |
| absence from closure and unsettledness issue different instructions | `general` | Fig 6 :34, Fig 9 :6 |
| the slot with a persistent non-trending residual is the one to point at | `general` rule, `specified` application | Fig 5 :59 |
| cloud, ice-sheet dynamics and permafrost carbon are the leading candidates | `specified`, ungrounded | world sources W1-W6 |
| one of those three is *the* worst | **refused** | F7, Fig 9 :32 |

---

## 3. Pre-registered refuter

Written before the conclusion and before the candidate ranking was fixed. Per the seat reasoning rule, *"a falsifier written before the run is a design instrument."*

The shape claim is refuted if any of the following holds:

1. A per-process instrument comparison already exists, is independent of the model families it ranks, and the slot with the largest persistent non-trending residual lies **above** the broken middle link, that is at a step where a dedicated process instrument returns a clean reading.
2. A consensus ranking of processes, with no independent instrument behind it, changes what an instrument returns. That would make agreement an anchor and collapse Fig 2.
3. One of the three candidate residuals trends monotonically down under sustained effort while all slots we did not list persist and do not trend down. That would replace the candidate set.
4. A re-census finds a figure line that ranks two named Earth-system processes, or shows that cross-slot aggregation rather than per-slot residual is the governed quantity.
5. All four bundled conditions in F4 collapse to one under a single measurement protocol, so that absent, mis-attached, unsettled and hidden become one instruction.

If any fires, the shape is wrong and the candidate list is withdrawn. Until one is run, no ranking may be labelled `grounded`.

---

## 4. Recommendation

1. Do not answer with one process name. Answer with the ranking rule, the unbundled conditions, and a `specified` candidate set (F1, F4, F7).
2. Build the ground first: for each candidate slot, name the instrument that would return a process-level residual that does not move when modellers push on it (F2, F3). The Holuhraun constraint (W2) and laboratory process-rate work (W1) are existing edges to extend from; this is INWARD, and it is legitimate precisely because something is already returning a reading.
3. Treat ice-sheet process addition as OUTWARD import with a source gate and a shadow test (Fig 6, Fig 8). A process described in a paper is not automatically an atom the model owes itself.
4. Use multimodel spread only as a filter for where to aim instruments, never as a witness (F6, Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*).
5. Keep the two currencies separate: description bits for a scheme and actions to settle it are not summed (F8).
6. Send the shape claim and the refuter before any theory or links, per Fig 10 :52 *"Bring a characterised residual, never the source."*

---

## 5. Canonical usage check

Two canonical sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them"*; *"the quotes are the authority, not this summary"*; and *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* The framework says *"what a missing thing would have to look like (a shape, not a name)"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD; the mode rule must be stated; a gate is not the ground.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "the figures can rank processes" | **Retracted at source level.** No figure line mentions clouds, ice, permafrost or any Earth-system process. The figures supply a ranking *rule*, never a ranked name. |
| "worst means largest error" | **Retracted.** Fig 5 :59 governs a residual that persists and does not trend down. A one-off large error is not the target. |
| "the no-instrument slot must be the worst" | **Narrowed.** Fig 3 :27 says an unlooked-at link is not a working link, not that it is largest. It is a `specified` prediction about where the residual concentrates, to be settled by F3's refuter. |
| "ice-sheet processes are absent from all global models" | **Retracted as overbroad.** W5 describes processes underappreciated in the model used in that study, not a universal absence. Marked `specified`. |
| "clouds are the answer" | **Refused.** W6 says cloud feedback remains the largest contribution to *overall uncertainty in climate sensitivity*. That is a particular metric in a particular assessment, not a cross-process verdict about representation quality in general. |
| F1, F2, F6, F7 | **Canonically confirmed** by the README's shape-not-a-name limit and by the figures' distinction between ground and agreement. |
| Apparent conflict between "improve instruments" and "import a missing process" | **Not strained after re-census.** INWARD extends an instrument already returning something (Fig 6 :32-35); OUTWARD imports a process term from a frame whose closure differs. They are opposed and must not be read against each other (THE_FORMULA step 7). |

---

## 6. Retractions and confirmations (consolidated log)

Section 5's table is the live log. The two substantive retractions from the first pass are preserved here in full so the record shows the correction rather than only the corrected claim.

**R1. First pass drafted: "Answer: cloud microphysics, because the IPCC says clouds are the largest uncertainty."** Withdrawn. The IPCC statement (W6) is about the largest contribution to uncertainty in climate sensitivity, which is one objective, not a ground ranking of processes. This is the Fig 9 :27 error: a frame was chosen before the residual was described. The corrected form is the candidate table in F5, mode `specified`.

**R2. First pass drafted: "models with no ice-sheet process are missing an atom, so import it."** Withdrawn as stated. W5 adds processes to one coupled ice-sheet/climate model; it does not establish that every global model lacks them. Fig 6 :24 prices a wrong atom above starting from primitives, so import needs a source gate and a shadow test. The corrected form is condition (a) in F4: determine absence in a named model's closure first, then decide.

---

## 7. Strain test and re-census

- **Fig 3 (no instrument) versus Fig 11 (enumerate the habitat).** Apparent strain: Fig 11 says read the list off the world, so why is an unmeasured process a residual rather than simply absent from the list? Re-census: Fig 11 :48 says *"what you cannot perceive or measure yet is the residual."* No strain. The habitat is enumerated from what is in contact with R, and the unreachable part is recorded, not invented.
- **Fig 5 (five gap kinds) versus Fig 9 (union splitting).** Apparent strain: is mis-attached a rebinding or a union condition? Re-census: Fig 5 routes a single gap; Fig 9 splits a bundled question into its own loops. Different quantities. No strain.
- **Fig 12 two currencies versus model "complexity".** The world literature sometimes speaks of adding complexity as if it were one cost. The figure holds bits and actions apart. Recorded as a discipline, not a strain.
- **After re-census: one live strain, named.** The order of priority among the three candidate slots (cloud, ice sheet, permafrost) is not derived from the figures and is not settled by any instrument opened in this run. It is `specified`, and it is the first thing the pre-registered refuter is aimed at.

---

## 8. Figure census and verdict

### Verbatim lines checked

Every quoted string in this file was matched against `FRAMEWORK/reference/03-FIGURES_TEXT.md` on 2026-11-22. Fig 1 :19, :13, :22, :23, :27, :20; Fig 2 :29, :35, :31, :40, :42; Fig 3 :19, :24, :26, :27; Fig 4 :21-22; Fig 5 :59, :60; Fig 6 :32-35, :34, :24; Fig 7 :13; Fig 8 :39; Fig 9 :6, :32, :54, :57, :27, :60; Fig 10 :52; Fig 11 :40, :48; Fig 12 :125, :126; Fig 13 :134.

### Verdict, per domain, never averaged

- **Domain A (model frame):** cannot rank itself. `general`, triangulated.
- **Domain B (ground):** only an unmoving instrument may rank. `general`, triangulated.
- **Domain C (membrane):** the residual concentrates at the unmeasured middle link. `specified`, triangulated for the location rule.
- **Domain D (evaluation):** ensemble agreement is a filter, not a witness. `general`, triangulated.
- **Domain E (ground maintenance):** instrument building is the seat's legitimate work, but it may not author the verdict it checks. `general`, single-source for the office rule.

**Overall.** The question as posed is a union compound. The figures return the shape of an answer (per-slot, ground-anchored, at an unmeasured link, unbundled by gap kind, ranked by a persistent non-trending residual), not a name. World sources nominate cloud microphysics and aerosol-cloud interaction, marine ice-sheet dynamics, and permafrost carbon feedback as `specified` candidates, with no `grounded` order among them. Unreachable at this budget is a verdict, not a silence. Fig 8 :39 applies directly to a search that opens six sources and finds no per-slot instrument comparison: it finds nothing, which is not proof that no such comparison exists.
