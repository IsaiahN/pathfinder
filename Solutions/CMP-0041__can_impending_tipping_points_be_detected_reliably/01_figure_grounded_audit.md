# Figure-grounded audit: can impending tipping points be detected reliably from early-warning signals?

**Mode of this document: `specified` on the derived shape, `general` on the refusals, `gap` on the universal rate and the name of an indicator.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: a simulation, not a ground reading.** The Recursive Self-Improvement Trap says *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* and *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figures 1-13, Operators, Symbols from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `FRAMEWORK/figures/THE_FORMULA.md`; `FRAMEWORK/reference/FIGURES_README_canonical.md`; world sources in `10_source_ledger.csv`, all fetched 2026-11-22.

---

## 0. The residual, in effect terms

We are asked to decide whether a detector D, reading early-warning statistics (variance, lag-1 autocorrelation, skewness, flickering, recovery rate) from a real system S, can tell us with acceptable false-alarm rate, miss rate and lead time that S will cross a regime boundary T in the near future.

State the two options by what each leads to:

- **Option A, "yes, reliably":** intervention can be timed against the warning; a raised indicator licenses action or policy; a failed indicator licenses reassurance. The cost of being wrong is borne by whoever acts or refrains.
- **Option B, "not certifiably":** the warning is a bet with declared error costs. Agreement among several indicators and success on historical transitions do not by themselves settle it, because they may be one evidence pool and a retrospective fit.

What an answer would look like, bound as an ordinary term before the run (Formula "Direction"): a **conditional shape** saying which links must hold for a warning to carry information, plus a refusal of the blanket inference from indicator agreement to reliability, plus an explicit `gap` where only a ground reading can decide (a numeric false-alarm rate for a named system, and which indicator to use there).

---

## 1. Domain census, before any figure line is chosen

### R by arity, symmetry, scale

- **Arity.** Binary at minimum: one reading and one future event. In practice k-indicator (variance, autocorrelation, skewness, flickering) over one slowly moving control parameter. The arity of *independent* witnesses is the question, and is likely 1, because the indicators are different projections of one latent loss of resilience.
- **Symmetry.** A tipping is a threshold relation, not a symmetric join. The warning-to-event link is a sequence: warning first, crossing later. It is not reversible on the observation timescale; hysteresis means the return path differs from the outward path.
- **Scale.** The reading is taken at the sampling scale of a fast state variable; the event belongs to the slow drift of the control parameter and to a change of regime. Model-to-world transfer is a crossing between those scales and carries a round-trip gap.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| **D1 The ground: the real threshold** | state variables, control parameter, basin, noise | distance to threshold, resilience | the recorded crossing of T, which does not move when a frame pushes on it | yes, the crossing is registered by instruments or outcomes |
| **D2 The channel: monitoring and proxies** | sensors, sampling interval, spatial aggregation, the observer | fidelity of the time series | the ground, which the channel must range against and cannot move | yes, the same crossing |
| **D3 The indicator frame: EWS theory** | variance, AR(1), skewness, flickering, models, analysts | predictive skill estimated inside models and hindcasts | should be prospective occurrence at the ground; in practice a retrospective fit is substituted | the ground exists, but the frame's operative anchor is a convention, which is the defect |
| **D4 The decision frame: acting on the signal** | managers, action thresholds, governance | false-alarm cost versus missed-alarm cost, lead time | outcomes of acting or refraining, available only prospectively | yes, but only from a prospective record |

No domain is admitted without a nameable anchor. D3 is admitted *with a defect named*, not excused: its anchor is substituted, and that substitution is the thing being audited. If the substitution were removed and no anchor could be named, D3 would be a frame without a ground and would be reported as such.

### Partition or union?

**Union, not partition.** A warning is reliable only if all four links hold at once: the ground is a threshold system, the channel carries the local signal, the indicator reads it without sharing a pool with its neighbours, and the decision uses it under declared costs. Fig 9 :54 says *"when the split lands on a union rather than a partition, unbundle before you search again"*; a single lever clears only the region where one condition binds and leaves the intersections standing. Verdicts are therefore derived per domain and never averaged.

### Dependency order (Fig 3)

Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* Order: D1 (is there a threshold?) then D2 (does the channel carry it?) then D3 (does the indicator read it?) then D4 (does the decision use it?). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Work on new statistics (D3) lands above the break if the channel (D2) is dropping the transients.

---

## 2. Figure census, quoted before concluding

Each line below was grepped from the verbatim extract and checked before the findings were written. Strains are named in section 5, not smoothed over.

| figure | bearing | preliminary verdict |
|---|---|---|
| 1 The Agent | *"The residual is indexed by object slot, not aggregated."* | the warning is local; averaging can erase it |
| 2 The Ground | anchor must not update; *"disqualifying for a verdict"* | needs a ground; indicator agreement is one pool |
| 3 Dependency Chain | ordered by dependency | unbundle the union in order |
| 4 The Membrane | round trip and gap | model to world transfer is lossy |
| 5 Mint Pipeline | *"a term that explains one occasion perfectly"* fails | hindcast success is not prospective reliability |
| 6 Closure / Reachability | *"An instrument is not built from a description"* | no ideal sensor assumed; read what already fails to resolve |
| 7 Room Chain | *"A room's agreement is variation, not a verdict"* | many agreeing indicators are not a verdict |
| 8 Union Surplus | *"a search that finds nothing is never a proof of absence"* | no warning does not prove no tipping |
| 9 Leave / Arrive | describe the residual before choosing a frame; sealed room limit | the universal rate is a `gap` |
| 10 Ground Maintainer | *"the ground does not decay, the channel does"* | channel failure is the named failure genus |
| 11 The Habitat | enumerate the habitat; contact decides | read the system's actors off the world |
| 12 The Bond | cycle, functional group, settled molecule | indicators are a functional group, not independent witnesses |
| 13 Minimum Viable Set | amplifying remainder, discarded detail as noise | the mechanism and its disguise are the same line |
| Operators / Symbols | ⋛ comparison, → sequence, R per slot | threshold is a comparison; warning is a sequence |

---

## 3. Findings F1-F8

### F1 - The mechanism and its disguise are the same line (D1, `general`, triangulated)

Fig 13 :31-32:

> **"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."**

Fig 12 :121:

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

The self-amplifying feedback that makes a crossing possible is the same process that puts extra variation into the observable. So variance and autocorrelation are not a clean window onto an approaching threshold; they are the discarded detail of a crossing reappearing as noise. That is why an early-warning indicator can both carry information and be ambiguous at source. The line does not say detection is impossible. It says signal and noise have a common origin, so a reading cannot by itself determine which it is.

**Triangulation:** Fig 13 (substrate alternation and remainder) and Fig 12 (bond cycle) are different figures with low overlap. **Refuter:** exhibit a system where a precursor is demonstrably not the discarded detail of a crossing, with the source of the variation independently measured at the ground.

### F2 - The channel is the decayable part (D2, `specified`, triangulated)

Fig 10 :24:

> **"the ground does not decay, the channel does."**

Fig 10 :25-26:

> **"stale percepts, dropped transients, saturated metrics, pooled readings"**

Fig 10 :27-28:

> **"the output is not a verdict, it is you have lost touch"**

Fig 1 :19:

> **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22:

> **"Aggregating across slots is how a live signal disappears into an average."**

A tipping begins in a slot or a locality. Spatial averaging, coarse sampling and saturated instruments do not disturb the ground; they disturb the only path by which the warning can reach an observer. "Pooled readings" is the exact figure term for the spatial averaging that dissolves a local slowing signal. The honest output of such a channel is not "no warning" but "you have lost touch".

**Triangulation:** Fig 10 (ground maintainer, channel office) and Fig 1 (per-slot residual, agent loop) are low overlap. **Refuter:** show a real monitoring setup in which slot-level variation is provably preserved, no transient is dropped, and the channel's fidelity is checked against the ground at the sampling interval of interest.

### F3 - Agreement among indicators is one pool talking (D3, `specified`, triangulated)

Fig 2 :40:

> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

Fig 7 :35:

> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

Variance, lag-1 autocorrelation, skewness and flickering all descend from the same critical slowing down. They are not four frames pointing at the ground; they are four projections of one latent quantity, which Fig 12 :123 would call a **functional group**: *"A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* Their agreement is expected whether or not a crossing is near, because it is produced by the shared mechanism. Fig 2 :42 prices the remedy: *"Buy independence in proportion to the cost of being wrong."*

**Triangulation:** Fig 2 (ground and independence) and Fig 7 (room chain) are low overlap. **Refuter:** demonstrate two early-warning indicators drawing on statistically independent evidence, not a common slowing-down variable, whose joint agreement predicts crossings prospectively at declared error rates on real systems. That would break this finding at the ground.

### F4 - Hindcast success is not prospective reach (D3, `specified`, triangulated)

Fig 5 :43-44:

> **"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

Fig 5 :71-72:

> **"and a library that grows is not a reach that grows."**

Fig 12 :104:

> **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"**

An indicator validated by fitting known past transitions explains one occasion perfectly. Its admission into the literature grows the library; whether it composes over into a real system is a separate fact about that level. Fig 12 :104 permits a settled result to serve as an atom at the next level, but Fig 5 :71-72 says settlement is necessary and not sufficient. The world literature records the same shape: the Scheffer 2009 review says predicting critical points is *"extremely difficult"* and offers *"generic early-warning signals that may indicate"* an approaching threshold, a claim about a raised probability, not a certified detector.

**Triangulation:** Fig 5 (mint bargain) and Fig 12 (recursion and irreducibility) are low overlap. **Refuter:** a prospective, pre-registered trial on real systems, with error rates and lead time declared before the run, in which a hindcast-selected indicator keeps its skill on unseen crossings.

### F5 - Absence of warning proves nothing (D1/D4, `general`, triangulated)

Fig 8 :39:

> **"So a search that finds nothing is never a proof of absence."**

Fig 9 :44:

> **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

A real system is not a sealed room. A flat variance record is therefore compatible with a healthy system, a misaligned observable, a pooled channel, or a noise-induced crossing that has no local slowing precursor. The world literature agrees from a different closure: Ditlevsen and Ditlevsen (2026) find that *"the absence of detectable EWS does not necessarily rule out an approaching critical transition."*

**Triangulation:** Fig 8 (union surplus, metaframe limits) and Fig 9 (leave, arrive, sealed room) are low overlap. **Refuter:** exhibit a sealed-room-like system whose closure is genuinely complete and in which absence of a precursor does prove absence of an approaching threshold.

### F6 - A universal false-alarm rate and a named indicator are a `gap` (`gap`)

Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

Fig 13 :134:

> **"Unreachable is a verdict here, not a silence,"**

No figure line supplies a numeric false-alarm or miss rate, nor selects among variance, autocorrelation, skewness and flickering for a named system. The framework returns a shape, not a name, and records an unreachable result as a verdict. So the honest answer to the part of the question that asks for a single reliability figure is `gap`, not a guessed number. This is the point at which the derivation stops and the ground must speak.

**Refuter:** produce a figure line, from a genuine re-census, that directly governs a universal detection rate or selects a specific indicator. None was found.

### F7 - The anchor must be defined before it is used (D1/D4, `specified`, triangulated)

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."**

Fig 10 :52:

> **"Bring a characterised residual, never the source."**

"Tipping" is not a stable anchor across the literature. Börner and Dijkstra (2026) report that *"we identify three issues with existing tipping definitions that cause confusion about what 'tipping' means."* If the event is not defined before the detector is scored, the detector's ground moves when the frame pushes on it, which Fig 2 forbids. Define the crossing, the observation window and the lead time first.

**Triangulation:** Fig 2 (anchor test) and Fig 10 (ground maintainer) are low overlap. **Refuter:** a community-wide operational definition of tipping that is stable across the systems under test and accepted by the practitioners scoring the detector.

### F8 - Conditional success is real and is not a contradiction (boundary finding, `specified`, single-source plus world)

Fig 6 :34:

> **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."**

Fig 6 :32:

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

Where the system closely tracks a slowly changing steady state, the observable is aligned with the critical direction and sampling preserves the transient, the canonical indicators do work. van Beers et al. (2026) forecast controller-induced loss of control in real quadrotor flight data with *"a time-to-LOC forecast of up to 0.9 seconds"* and report generalization *"across controller architectures, quadrotors, and LOC scenarios."* This does not conflict with F1-F5; it exercises the narrow region in which all four links hold. It is a boundary condition on the shape, not a refutation of it.

**Refuter:** show that this narrow success transfers unchanged to a high-dimensional, externally forced, poorly observed system. The world sources predict it will not (Yi and Seo 2026; Lohmann 2026).

### Verdicts per domain, kept separate

| domain | verdict | mode | status |
|---|---|---|---|
| D1 ground | mechanism real, but precursor and noise share a source; absence proves nothing | `general` | triangulated (F1, F5) |
| D2 channel | the channel is the decayable part; pooling and dropped transients can erase a live local signal | `specified` | triangulated (F2) |
| D3 indicator | agreement among indicators is one pool; hindcast success is not prospective reach | `specified` | triangulated (F3, F4) |
| D4 decision | no universal error rate is figure-derivable; define the anchor first, then settle prospectively | `gap` on rate, `specified` on the demand | F6, F7 |
| boundary | conditional success is expected where all links hold | `specified` | single-source plus world (F8) |

No average is taken across this table. A strong result in F8-style engineering cases does not repair a broken D2 channel, and a good channel does not make two correlated indicators independent.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written before the run is a design instrument. The shape claim is: *reliability cannot be certified from inside the detection frame; it is a union of four links, and the universal rate and the named indicator are a `gap`.* It is refuted if any of the following holds:

1. **A governing figure line is found.** A genuine re-census produces a figure line that directly asserts universal reliability of early-warning detection, or that selects a specific indicator for real systems, with low overlap to Fig 13, Fig 10, Fig 2, Fig 5 and Fig 9.
2. **Independence is demonstrated at the ground.** Two indicators are shown to draw on statistically independent evidence, not a common slowing-down mechanism, and their agreement predicts crossings prospectively at declared false-alarm and miss rates on at least two low-overlap real systems. This breaks F3.
3. **The channel finding fails.** A real monitoring setup preserves slot-level variation and all transients, its fidelity is checked against the ground, and detection still fails for a reason the four-link census does not cover; or a genuinely closed system is exhibited in which no warning proves no tipping. This breaks F2 or F5.
4. **The source claim fails.** A system is measured in which the precursor's variation is demonstrably not the discarded detail of a crossing. This breaks F1.

If any fires, the shape claim is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`. These refuters are design instruments, not decorations.

---

## 5. Strains, re-census and retractions

### Strains tried and rejected

- **Fig 8 :56, "the triangulation claim fits four cases already known and has not been tested forward."** Initial reading wanted this as a figure-grounded statement that EWS were validated only retrospectively. **Retracted as a strain.** That line governs the triangulation claim in mathematics (Wiles/Frey, Montgomery/Dyson, Bekenstein/holography), not early-warning studies. Using it for EWS would force a line onto another quantity. F4 now rests on Fig 5 and Fig 12 instead.
- **"Shape, not a name" applied to every indicator.** Initial reading said the framework forbids naming variance or autocorrelation. **Narrowed.** The README's phrase governs a missing primitive. Indicators here are already in the frame's vocabulary; selecting one for a named system is a binding that needs a ground, not a figure prohibition. See `05_what_shape_means.md` section 5b.
- **"EWS are unreliable" as a blanket verdict.** Initial draft of F1-F5 read as a refusal of detection altogether. **Retracted and replaced.** The figures refuse *certification* of reliability from inside the frame; they do not assert universal failure. F8 records the narrow region of success. This is a correction, kept visible.
- **Fig 2 :40 read as disqualifying all agreement.** **Narrowed.** Fig 2 :41 keeps correlation *"efficient for a convention"*. Shared vocabulary and agreed definitions are the product, not the corruption. Only agreement used as a verdict witness is disqualified.

### After re-census

One live strain remains: F8's narrow engineering success is single-source for the figure part and world-dependent for the boundary, recorded as such. No figure contradiction was found. Where two figures seemed to strain, the objects were different quantities and the census was redone rather than the reading softened.

### Canonical usage check

The figures README says: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* and returns *"a shape, not a name"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest. Indiscernibility is not identity."* This audit complies: it stops at `gap` for the rate and the name, records the lineage, and treats its own agreement with the world sources as corroboration only. Fig 9 :60 governs the budget: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

---

## 6. Recommendation

1. Do not answer the question with a single reliability number. Answer it as a union with four per-domain verdicts and a `gap`.
2. State the event definition, observation window, lead time, false-alarm cost and miss-alarm cost before scoring any detector (F7, F2).
3. Stop treating multiple agreeing indicators as independent corroboration, and say explicitly on what evidence their independence would rest (F3).
4. Require prospective, pre-registered validation on real systems with error rates declared in advance; hindcasts grow the library, not the reach (F4).
5. In outreach, send the shape and its refuter first. Fig 10 :52: *"Bring a characterised residual, never the source."* Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
