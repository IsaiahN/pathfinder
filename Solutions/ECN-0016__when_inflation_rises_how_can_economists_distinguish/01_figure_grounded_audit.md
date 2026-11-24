# Figure-grounded audit: distinguishing a demand-driven from a supply-driven inflation episode

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the Operators and Symbols tables, and the public web pages in `10_source_ledger.csv`. Figure lines are quoted verbatim as `Fig N :line`.

---

## 0. The question under audit, in effect terms

> When inflation rises, how can economists distinguish a demand-driven episode from a supply-driven one?

Restated as an effect: a single reading, the rate of change of a general price index, goes up under at least two different generating conditions. Under one, aggregate demand outruns aggregate supply (demand-pull, an overheating economy). Under the other, aggregate supply contracts or unit costs rise (cost-push, an adverse supply shock). The decision to be made is what second observation, paired with the first, separates the two sources, and what observation would count as a failure of that separation.

What an answer would look like, bound as an ordinary term (formula step "Direction"): a **source-discriminating reading**, that is a rule taking the price reading plus at least one further observable whose response differs between the two candidate sources, returning a classification whose confidence is checked against outturn data. That shape is written down here before the run so it can accrue a residual like anything else, rather than remaining an unbound preference.

The answer is not: read the source off the price level. The figures forbid that move for reasons given in F1 to F3.

---

## 1. Residual and domain census

**R (arity, symmetry, scale).** Arity: the observable is one scalar (headline inflation), the candidate sources are at least two conditions, so the map is many-to-one and the reading underdetermines the source. It is a **union compound**, not one hard question: an episode can be demand, supply, or both at once, and a case in two conditions is not a harder case of either (Fig 9, *"a case in two conditions is not a harder case of either"*). Symmetry: the two sources are symmetric with respect to the price-level reading (both raise it) and asymmetric with respect to the discriminating observables (output and unemployment move in opposite directions). Scale: the aggregate index is one level, its components are a finer level; the round trip between them loses information (Fig 4).

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1, framework-internal metatheory | figures, methods, the library Γ, residual R | composition, residual, shape | the ground, and the figures as metalaws for structure | partition: what a single reading can and cannot carry |
| D2, economic measurement and national accounts | price indices, component indices, output, unemployment, producer and import prices | published statistics | the outturn data (for example the published CPI and labour series) | which measured series move differently under the two sources |
| D3, economic theory and causal structure | aggregate demand, aggregate supply, cost shocks, expectations, Phillips curve | causal mechanisms in models | model predictions tested against D2 | union: two conditions that can co-occur |
| D4, verification and decision frame | analysts, researchers, expert readers | agreement and residual | the ground, never agreement | triangulation, not negotiation |

No nameable anchor means it is not a domain yet. D2 has one (the published statistical series), D3 has one (prediction against D2), D4 has one (outturn data), D1 has one (the figures for structure, the ground for any measurement).

**Partition or union.** The two sources are a union (both can hold), so the diagnostic is a compound with its own loop. The part of the question that is a partition (is this single reading sufficient?) is settled inside D1. The part that is a union (how much of each source is present?) belongs to D2 and D3 and must be unbundled before it is searched.

**Order by dependency (Fig 3).** Perception first: can we measure inflation and its components at all (D2)? Vocabulary second: do we have terms for what demand and supply afford (D3)? Objective third: what counts as progress in discrimination (D1)? Planning fourth: which observables to triangulate (D2 plus D3)? Learn and carry fifth: name what worked, keep the cut reversible (D4). Effort spent on the objective before perception is effort above the break.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per object slot, never aggregated; ground is the only metric | governs D1 decisively |
| **2 The Ground** | anchor definition, triangulation, correlation valence | governs D1 and D4 decisively |
| **3 Dependency Chain** | order by dependency; a reading below the break reads nothing | governs the order of D2 to D4 |
| **4 The Membrane** | lossy transform, round trip gap `R_T` | governs the aggregate to component move |
| **5 Mint Pipeline** | sort the gap into kinds; settle at the ground | governs "what would settle it" |
| **6 Closure / Reachability** | inward and outward are opposed instruments | governs the two search routes |
| **7 Room Chain** | a room's agreement is variation, not a verdict | governs D4 |
| **8 Union Surplus** | two frames with low overlap reach what neither reaches alone | governs the multi-observable requirement |
| **9 Leave / Arrive** | describe the effect not the cause; shape not a name; union unbundling | governs D1 and D3 decisively |
| **10 Ground Maintainer** | bring a characterised residual, never the source; verifier non-access | governs D4 outreach |
| **11 The Habitat** | enumerate the habitat in contact with the residual | governs D2 variable selection |
| **12 The Bond** | comparison ⋛ is a threshold relation between two quantities; isomer | weak analogue, strained, see §4 |
| **13 Minimum Viable Set** | six-term substrate, composition across two kinds | **strained, rejected as governing here, see §4** |
| **Operators table** | ⋛ is asymmetric; a goal is a comparison | corroborates the strain note |
| **Symbols table** | `R` is measured per slot, never a single global number | corroborates F1 |

---

## 3. Findings

### F1 : The aggregate index cannot carry the source (decisive, `general` structural)

Fig 1 :19 and :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

Symbols table: *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*

The headline inflation rate is exactly the aggregate that Fig 1 :22 says throws away the signal. Under a demand episode, the rise is broad across components; under an energy or food supply shock, it is concentrated in a few components with a much quieter core. A published table makes this visible: the BLS CPI page (fetched 2026-11-23) reports for September 2026 "All items 3.7%" but "All items less food and energy 2.6%", with "Energy 20.4%", "Fuel oil 74.2%" and "Gasoline (all types) 34.2%". Two readings of the same month give different accounts of where the residual lives. That is the per-slot rule operating in public data, not a figure imported into macroeconomics.

**Mode:** `general` for the figure rule, `specified` for its application to CPI components. The world data corroborate but never decide the figure verdict.

**Refuter:** a demonstration that the aggregate rate alone, with no component detail and no other series, classifies demand versus supply with zero error across a set of dated episodes. That would collapse the slot distinction and break Fig 1 :22.

### F2 : Describe the effect, do not read the cause off the reading (decisive, `general`)

Fig 9 :30-31 and :32:

> **"your words are borrowed too, so describe the effect rather than the cause"**
> **"you get a kind of thing, never the answer itself"**

Fig 6 :30: *"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."*

Naming "demand-pull" from the observation "prices rose" is the inversion the figures forbid. The effect is: prices rose, and here is how output, unemployment, component dispersion and expectations moved. The cause is a binding from a model onto that effect. The canonical README states the limit as *"what a missing thing would have to look like (a shape, not a name)"*: the framework returns the form an answer must have, not the name of the shock.

The world sources make the same point in economic language. The Wikipedia *Cost-push inflation* page (fetched 2026-11-23) says: *"Both accounts of inflation have at various times been put forward, with inconclusive evidence as to which explanation is superior."* The same page records Friedman's objection that to each businessman it looks as if costs forced prices up, but the prior question is why costs rose. That is a source named from a reading, the exact error Fig 9 names.

**Mode:** `general` for the figure rule, `specified` for the claim that this episode of inflation asks the same question.

**Refuter:** a figure re-census showing that Fig 9 :30-31 governs only missing primitives and not source attribution from a lossy reading, or a measurement in which the price reading is one-to-one with the cause.

### F3 : The discriminator is triangulation, not a vote (decisive, `general` and `specified`)

Fig 2 :29-30 and :35:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 8 :45: **"Two frames together reach what neither reaches alone."**

Fig 8 :48-49: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."*

The inflation rate and the unemployment rate are two instruments pointed at the same economy, not two people reading the same report. That is why the pair has surplus and why broad agreement among forecasters has none. Fig 2 :40 applies directly: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 2 :42 prices the remedy: *"Buy independence in proportion to the cost of being wrong."* The cost of misdiagnosing inflation is a policy error applied to the wrong cause, so independence is worth buying here.

**Mode:** `general` for the triangulation rule, `specified` for the claim that the output and labour series are low-overlap readings of the same residual.

**Refuter:** show that the candidate second series is a transformation of the first (overlap near one), so the apparent triangulation is one evidence pool counted twice. Or show that the ground moved when the frames agreed, which would turn the anchor into a frame.

### F4 : Enumerate the habitat of the residual, do not compose the variable list (`general`)

Fig 11 :43-44:

> **"The habitat is enumerated, never composed."**
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

Fig 11 :52-53: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

Applied to this residual, the habitat in direct contact includes the price index and its components, output, employment and unemployment, unit costs and producer prices, import and energy prices, and expectations. Second-order contacts include wage settlements (a cost shock feeding a price shock) and monetary aggregates. The BLS CPI page lists exactly this architecture in its public navigation: "Inflation & Prices", "Consumer Price Index", "Producer Price Indexes", "Import/Export Price Indexes", "Employment Cost Index", "Productivity", together with "Contact CPI". The list is read off the published statistical system, not invented from the theory.

**Mode:** `specified` for the enumerated list, `general` for the enumeration rule. The specific list is world-sourced and is not a figure verdict.

**Refuter:** an actor in contact with the residual that changes the diagnosis and was omitted from the enumeration after being pointed out. Because DDT-style cascades are second and third order, this refuter stays live after the first pass.

### F5 : The aggregate to component move is a lossy round trip (`specified`)

Fig 4 :27-30:

> **"The transform between scales loses information, and that is the point."**
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Moving from the all-items index down to the component indices, and back up to a claim about the source, is a transform across scales. The gap `R_T` is the part of the episode the coarse description cannot hold. In September 2026 the all-items number (3.7 percent) and the core number (2.6 percent) do not round trip into one another; the missing content is the energy and food block. Treating the aggregate as if it were the sum of an equal distribution of component moves would set `R_T` to zero and would be the dead-reckoning error Fig 4 names.

**Mode:** `specified`. `R_T` is recorded qualitatively here, not measured numerically, because no source-discriminating instrument was run.

**Refuter:** a round trip in which carrying the component detail up and back down returns the aggregate exactly with no residue, for a named episode. That would falsify the claim that detail is lost.

### F6 : This is a union compound, so keep the cuts reversible (`specified`)

Fig 9 :54-59:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

Fig 9 :40-41: *"a wrong cut removes the answer and speeds up so keep every cut ranked and reversible"*.

An episode can be both demand-driven and supply-driven. The 1970s stagflation record (Wikipedia *Stagflation*, fetched 2026-11-23) is described as a combination of a negative supply shock and excessively stimulative monetary policy: *"Both explanations are offered in analyses of the 1970s stagflation in the West."* A single lever that assumes only one condition clears the region where only that condition holds and leaves the intersection standing. The honest output is not a forced either-or but an unbundled compound with each cut ranked and reversible.

**Mode:** `specified` for the union reading; `general` for the reversibility rule.

**Refuter:** an episode in which the two conditions are provably mutually exclusive at the level of the data, so the union reading adds nothing.

### F7 : The gap must be sorted by kind before a term is owed (`general`)

Fig 5 :10-14:

> **"sort the gap into four kinds"**
> **"held: the model was right, nothing owed"**
> **"new: extend perception, aim the probe"**
> **"mis-attached: refit what you have, do not invent"**
> **"mechanism broken: a new term is owed"**

Formula step 2 adds a fifth, REFUTED: *"a term held is false; what is owed is a refusal, not an explanation"*. For an inflation surprise, four outcomes are possible. A correctly forecast broad rise is held. A rise concentrated in an unmeasured component is new, and the probe should be aimed there. A rise attributed to the wrong component is mis-attached, and the existing model should be refitted. A rise that the model structurally cannot represent (for example a supply shock in a model with no supply channel) owes a new term. A standing belief that prices only rise with demand is REFUTED and owes a refusal. The mistake this finding guards against is minting a new theory when the real problem was a mis-attached component reading.

**Mode:** `general` for the sorting rule, `specified` for the mapping to an inflation surprise.

**Refuter:** a surprise that cannot be assigned to any of the five bins without remainder, which would mean the pipeline as stated does not cover the phenomenon.

### F8 : What survives, with modes attached

| claim | mode | figure or source |
|---|---|---|
| A single aggregate reading cannot carry the source; read per component | `general` structural, `specified` applied | Fig 1 :19, :22; Symbols table |
| The cause must be described as an effect, not read off the price level | `general` | Fig 9 :30-32; Fig 6 :30 |
| Independence between readings is what makes the pair informative | `general` | Fig 2 :35, :40, :42; Fig 8 :45, :48-49 |
| The diagnostic set is enumerated from the published statistical habitat | `specified` | Fig 11 :43-44, :52-53; BLS CPI page |
| The aggregate to component move loses information (`R_T` nonzero) | `specified` | Fig 4 :27-30 |
| Demand and supply can co-occur; keep cuts ranked and reversible | `specified` | Fig 9 :54-59; Wikipedia Stagflation |
| Output rises and unemployment falls under demand-pull, while inflation with falling output and rising unemployment marks an adverse supply shock | `specified`, world-sourced, not figure-derived | Wikipedia Demand-pull inflation and Stagflation |
| The framework itself settles which shock occurred in a dated episode | **refused** | no instrument run; Fig 2 :29-30 |

---

## 4. Strain test and re-census

Two candidate figure lines were tried and rejected after a genuine re-census. They are recorded, not silently dropped.

**Fig 13, the six-term substrate.** It would be tempting to map inflation onto the six terms, for example by calling a price index a spectrum (Fig 13 :19-20: *"ordering, so more and less can be said"*) and a cost shock a gradient (Fig 13 :21-22: *"a difference that can be spent"*). Then Fig 13 :74, *"Everything else is a composition across the two kinds, never within one."*, and Fig 13 :75, *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."*, would appear to govern. This is a strain. The six terms govern composition at the substrate level; a Phillips-curve relation between measured macro series is not a bond between space, time and energy, and the figures nowhere claim to be a macroeconometric model. Per the canonical rule, a reading that makes a figure strain has misidentified its domain. **Re-census result:** Fig 13 is moved to the census row "strained, rejected as governing here." It governs what a composition is, not how to identify a shock.

**Fig 12 comparison ⋛.** The Operators table defines ⋛ as *"a threshold relation between two quantities"*, with the test *"is it about which is larger, rather than both being present?"*. It would be neat to call the core-versus-headline comparison a ⋛ bond. But Fig 12 is a theory of composition inside a library, and a comparison of two published index numbers is a measurement operation, not a typed bond joining operands into a molecule. **Re-census result:** ⋛ is retained as a weak structural analogue ("which is larger" captures the shape of a core/headline contrast) and marked `strained-for-now`, single-source, not part of the verdict. The same applies to the isomer reading in `06_isomers_and_order.md`: episodes with the same headline rise but different internal arrangement are isomer-like under Fig 12 :117, but the "atoms" here are measured series rather than primitives, so that claim is an analogue, not a derivation.

After re-census: **no figure line is forced.** The governing set is Figs 1, 2, 3, 4, 5, 6, 8, 9, 10 and 11. Figs 12 and 13 are recorded as strained and non-governing.

---

## 5. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The source-diagnosis shape claim is refuted if any of the following holds:

1. **One-to-one reading.** A single aggregate inflation number plus a fixed rule, with no component detail and no other observable, classifies demand versus supply with zero error across a dated set of episodes that includes at least one adverse supply shock and one overheating episode. This breaks Fig 1 :19-22.
2. **No separating direction.** The candidate second observables (output, unemployment, component dispersion) move in the same direction under both candidate sources, so the triangulation has no surplus. This breaks Fig 8 :45-49 and Fig 2 :35.
3. **Cause readable off effect.** A figure re-census shows that Fig 9 :30-31 and the canonical shape-not-a-name limit govern only missing primitives, so reading the cause off a lossy price reading is permitted after all. This breaks F2.
4. **Union collapsed.** It is shown that demand and supply conditions can never co-occur in the data, so the unbundling of Fig 9 :54-59 is idle. This breaks F6.
5. **World-level failure.** A well-documented episode in which prices, output, unemployment, component dispersion and expectations all move in ways consistent with both sources, with no available instrument that discriminates them, is found after the search. That is a genuine `unreachable-at-this-budget` result and is reported as such, not smoothed into a confident classification.

If any fires, the shape claim is withdrawn or downgraded to `gap`. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with the shape, not with a verdict about any particular episode: a single aggregate reading cannot carry the source; the discriminator must read per component, bring a low-overlap second observable, and range both against outturn data (F1 to F3).
2. State the mode on every sentence. The figures give the shape; economics gives the variables; the ground gives the episode verdict (F4, F8).
3. Report the component split alongside the headline, so the round trip gap is visible rather than assumed zero (F5).
4. Unbundle mixed episodes and keep every cut ranked and reversible (F6).
5. Sort the surprise by kind before minting a new theory (F7).
6. Figure 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the shape plus its refuter, not a table of past classifications.

---

## 7. Canonical usage check

Two local canonical sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit, the framework says *"what a missing thing would have to look like (a shape, not a name)"* and then stops at the limit of the instruments, recording the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md`: mode rule, the five kinds of residual, and the discipline that *"make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else."* This is how the shape claim in §0 was bound before the run.

### Retractions and confirmations

| earlier reading | status after re-census and canonical check |
|---|---|
| Fig 13 six-term substrate governs inflation diagnosis | **Retracted as a strain.** Fig 13 governs substrate composition; a macro relation between measured series is not a state-state bond. Re-census moved it to non-governing. |
| ⋛ comparison bond governs core versus headline | **Downgraded to a weak analogue.** Operators table defines ⋛ for quantities inside a composition; a comparison of published indices is a measurement operation. Strained-for-now, single-source, not in the verdict. |
| The headline CPI rate is the anchor for the diagnosis | **Corrected.** The published series is a measurement in D2; the anchor for the diagnosis is the outturn plus a source-discriminating instrument (Fig 2 :29-30). A reading is not an anchor when the question is about its source. |
| "No second observable is needed if the model is right" | **Refused.** Fig 2 :35: a mirror cannot correct you. Even a correct model needs an independent range against the ground. |
| Union reading of demand and supply | **Canonically confirmed.** Fig 9 :54-59 and the world record of mixed episodes (Wikipedia Stagflation) both support unbundling. |
| Shape not a name | **Canonically confirmed and narrowed.** The README's phrase governs a missing thing. For an episode verdict, the missing thing is the source attribution until an instrument settles it; naming a shock from the price reading is the forbidden move (F2). |
| This derivation settles the question | **Refused.** Simulated derivation, `specified`, candidate. It cannot settle anything it reports on. |

---

## 8. Updated verdict

The shape survives. A single aggregate inflation reading underdetermines its source; the discriminator must read per component, triangulate against a low-overlap observable whose response differs between demand and supply, enumerate the statistical habitat rather than compose a favourite variable list, and keep the union unbundled with reversible cuts. The specific economic variables are world-sourced and `specified`, not figure-derived. No figure line was forced. Strains after re-census: **two, both named and non-governing** (Fig 13 substrate, ⋛ operand type). The episode-level verdict is unreached, not unreachable: it needs data and an instrument, and this document supplies neither.
