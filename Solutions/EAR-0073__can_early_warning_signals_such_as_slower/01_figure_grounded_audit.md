# Figure-grounded audit: Can early-warning signals reliably indicate an approaching threshold?

**Mode of this document: `general` on the shape, `specified` on the four domain verdicts, `gap` on a universal numeric reliability rate.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Nothing here is accepted by a measurement.

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, 2026-11-19): *"LLMs can quickly simulate an approximate answer/output with the formula... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World: five sources listed in `10_source_ledger.csv`, each opened 2026-11-22.

---

## 0. The residual in effect terms

The question asks whether an observer may treat a slowing recovery (or any leading indicator) as evidence that a threshold is approaching, and whether that treatment is *reliable*. Stated as an effect:

- An indicator frame reads a time series and predicts "resilience is falling, a threshold is nearing."
- The ground returns one of two states at some later time: a crossing occurred, or it did not.
- The residual `R` is the gap between the indicator's prediction and the observation at the ground.
- "Reliably" is not a property of the indicator in isolation. It is a property of the whole arrangement: indicator, system class, observation channel, and the error rate the observer is willing to bear.

The outcome set has four cells, and reliability depends on all four:

| | crossing later occurs | no crossing later |
|---|---|---|
| signal fired | true positive (lead time) | false positive (false alarm) |
| no signal | false negative (missed event) | true negative |

The question as phrased names only the top-left cell. That is the first thing the census must repair. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* The four cells are four slots, and a single reliability number that blends them throws away the only signal that says where the method fails (Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average."*).

**What an answer would look like (bound as an ordinary term).** An admissible answer states, for a named system class and a named observation channel, an ordered pair of error rates (false-alarm rate, miss rate) measured against crossings, with the window, detrending, and sampling choices disclosed. Anything less is a shape, not an answer. Mode: `specified`.

---

## 1. Domain census before choosing any figure line

### R by arity, symmetry, scale

- **Arity:** at least two conditions (signal state, crossing state), so a 2x2 outcome structure, not one scalar. The word "reliably" bundles sensitivity, specificity, transfer across system classes, and the error trade-off.
- **Symmetry:** the relation is ordered. A signal that fires *before* a crossing is evidence; the same pattern observed *after* a crossing is hindsight, not a forecast. The Operators table calls the threshold relation `⋛` *"a threshold relation between two quantities"* (Operators table :48), which is ordered, not a symmetric join.
- **Scale:** first order inside one system's dynamics (the return rate toward its attractor); second order at the observer-to-system arrangement (indicator plus channel plus ground). A figure line that strains across these scales is governing the other one.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1, indicator frame | the time series, variance, lag-1 autocorrelation, return rate, the moving window, detrending choice | statistical pattern inside one series (a rising trend) | **none inside the frame** | a frame, not a domain with a ground |
| D2, ground frame | the system, the slowly changing driver, the crossing event, replicated experiments | physical state and event | the crossing itself | a genuine domain; the anchor is legitimate because the question is constitutively about it (Fig 2 :36) |
| D3, observation channel | sampling interval, series length, window, interpolation, detrending, which systems were selected for study | contact with the ground | the ground, kept reachable | a genuine domain; this is where failure lives |
| D4, verification frame | indicator papers, reviews, multiple statistics computed from the same data | agreement | the ground, never agreement | a frame that cannot corroborate itself |

No nameable anchor means it is not a domain yet. D1 has no anchor of its own, so it cannot decide reliability; this is the structural result, not a gap in the literature.

### Partition or union

This is a **union**, not a partition (mode: `general`). Fig 9 :4: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* The *Library of Babel* essay puts the same test: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers."*

The four sub-questions are: (a) does the signal precede a crossing when one occurs; (b) does it stay quiet when none occurs; (c) across which system classes does each answer hold; (d) what false-alarm/miss trade-off is acceptable for the decision at hand. They share conditions, so single-lever answers clear only the exclusive regions (Fig 9 :54). The compound needs its own loop.

### Dependency order (Fig 3)

1. **Perception:** is anything returning a signal at all? Fig 6 :34: *"the question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."*
2. **Vocabulary:** terms for what an indicator affords, including the four outcome cells.
3. **Objective:** what counts as reliable. This is "what the search is for" (Fig 3 :11). It is the link with no instrument in this field until an error-rate pair is declared; Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
4. **Planning:** which indicator, which system class, which sampling design.
5. **Learn and carry:** verify against crossings and carry the result per class, never as a global average.

Effort spent above the break (more indicators) cannot rescue link 3 (an undefined reliability objective).

---

## 1b. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities cannot score the frame | no self-scored reliability; per-class rates only |
| 2 The Ground | anchor, triangulation, correlation valence | the crossing is the anchor; agreement is not |
| 3 Dependency Chain | objective link before planning | "reliably" is undefined until an error pair is set |
| 4 The Membrane | lossy round trip; measure the gap | a single reliability scalar loses the per-class signal |
| 5 Mint Pipeline | support/reach/novelty gates; a gate is not the ground | a threshold crossing is not a mint |
| 6 Closure/Reachability | instruments improved from worse ones; depth vs absence | INWARD and OUTWARD are separate tracks |
| 7 Room Chain | agreement compounds, evidence does not | many agreeing papers are one room |
| 8 Union Surplus | no proof of absence from a failed search | no signal is not no threshold |
| 9 Leave/Arrive | split a union; filters are not witnesses; describe before looking | reliability is a filter for attention, not a verdict |
| 10 Ground Maintainer | channel decay; stale, dropped, saturated, pooled readings | both error directions are channel failures |
| 11 The Habitat | contact and valence relative to residual | reliability is agent-and-habitat, not indicator alone |
| 12 The Bond | comparison is an ordered bond; a goal is a comparison | the threshold is a comparison, not a field |
| 13 Minimum Viable Set | gradient is spent directedness; spectrum is ordering | the signal reads directedness; the threshold compares |
| Operators table | `⋛` is "a threshold relation between two quantities" | governs the threshold, not the reliability rate (strain test) |
| Symbols table | `R` is the aim and always a slice; the ground is the anchor | reliability is measured per slot against crossings |

Strained readings are named below, not smoothed over.

---

## 2. Findings

### F1 - There is no single global reliability rate (mode: `general`; triangulated)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 9 :4: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

Averaging "reliability" across lakes, ice cores, chemostats and markets is exactly the aggregation the figure forbids. World corroboration (independent of the figures): Boettiger and Hastings, *J R Soc Interface*, 2012, Table 1, report the fraction of crashes detected at a fixed 5 percent false-alarm rate as 25 percent (simulation), 5.0 percent (chemostat), and 5.4 percent (glaciation). One number cannot carry that spread. Fig 4 :30 requires the round trip to be measured rather than assumed: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

**Refuter:** a systematic multi-class study showing that a single aggregate reliability preserves the per-class false-alarm and miss rates to within the decision tolerance. Until then, report per class.

### F2 - The ground is the crossing; the indicator is a channel, not the ground (mode: `specified`; triangulated)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*
Fig 10 :24: *"the ground does not decay, the channel does"*

The question is constitutively about whether a crossing occurs, so the crossing is the legitimate anchor. A rising autocorrelation is an instrument reading, not the event. Formula step 5 puts the same rule: *"A gate is not the ground."* A signal that crosses a statistical threshold is a gate that decides whether to look harder; it is not the ground settling that a threshold is being approached.

**Refuter:** show a case where the indicator is settled against the crossing at the ground with zero channel loss and no decision left open, or where the question is not about the crossing at all. Then the anchor would be misidentified.

### F3 - Signal and threshold are different bond types; do not make ⋛ govern reliability (mode: `specified`; strain test)

Fig 13 :22 (gradient): *"a difference that can be spent"*
Fig 13 :20 (spectrum): *"ordering, so more and less can be said"*
Operators table :48: *"a threshold relation between two quantities"*
Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*

Slower recovery is a return-rate reading, a directedness (gradient-like) quantity over time. An approaching threshold is a comparison between a driver and a critical value. In the first pass of this audit I tried to read `⋛` as governing the *reliability of the signal*. It strains: a comparison between two quantities does not price an error rate. Strain test says the line governs another quantity, so it governs the **threshold** only, and the census was re-cut. This is a re-census, not a correction of the figure.

**Refuter:** a derivation in which the comparison bond prices false alarms and misses directly, with no channel or ground term. That would let ⋛ govern reliability and would break this re-census.

### F4 - Both error directions are channel failures (mode: `specified`; triangulated)

Fig 10 :25: *"stale percepts, dropped transients, saturated metrics, pooled readings"*
Fig 10 :27: *"the output is not a verdict, it is you have lost touch"*

The world literature supplies both directions from different methods:

- **False positives.** Boettiger and Hastings, *Proc R Soc B*, 2012 (prosecutor's fallacy): *"By analysing simulated systems that have experienced transitions purely by chance, we reveal an elevated rate of false-positives in common warning signal statistics."* Systems selected *because* they collapsed show warning-like patterns even with no approaching bifurcation. Selecting cases conditional on the outcome is a pooled/stale channel, exactly the failure Fig 10 names.
- **False negatives.** Dakos et al., *PNAS*, 2008: *"transitions caused by a sudden large disturbance without a preceding gradual loss of resilience will not be announced by slowing down."* A large shock crosses without a preceding slow trend, so the channel returns nothing.

The same channel therefore produces both errors. The signal is neither sufficient nor necessary for a crossing. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

**Refuter:** a replicated, prospectively registered study with no conditional selection showing both error rates at zero with finite data across system classes. That would show the channel does not decay and would falsify F4.

### F5 - "Reliably" is a filter, not a verdict, until an error pair is declared (mode: `general`; triangulated)

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

A warning threshold decides how much attention and sampling budget to spend. It cannot decide that a crossing is approaching. The operational question is the error trade-off: Boettiger and Hastings, *J R Soc Interface*, 2012, Table 2, show that at a fixed 90 percent detection rate the false-alarm rate is 49 percent (simulation), 81 percent (chemostat), and 93 percent (glaciation) for variance-based indicators. Choosing the threshold chooses which error you accept; it does not settle the fact.

**Refuter:** a decision context in which the warning signal itself is the outcome being questioned and no ground exists to range it against. Then the filter would be the verdict and F5 would be wrong.

### F6 - Agreement among indicators or studies sharing data is one witness (mode: `general`; triangulated)

Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 7 :13: *"agreement compounds, evidence does not"*
Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

Variance, lag-1 autocorrelation, skewness, DFA and spectral ratio computed from the same series are not independent confirmations; they are one witness with five names. Reviews that reuse the same paleoclimate records are the same. Dakos et al., *PLoS ONE*, 2012, list more than a dozen such metrics, all reading the same underlying return-rate and variability structure. Their agreement is the structure talking. Genuine low-overlap corroboration for "signals sometimes precede crossings" does exist across a chemostat experiment, a glaciation record, and simulation, but those are three datasets, not independent agreement from the *same* data, and all three share the saddle-node modelling assumption (one theoretical pool).

**Refuter:** show that two indicators computed from one series draw on disjoint measurement channels (for example, one from satellite albedo and one from in situ temperature with independent calibration and no shared detrending). Then they are two frames and their agreement carries information.

### F7 - Absence of a signal is not absence of a threshold (mode: `specified`; single-source on the figure, corroborated by world sources)

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*

A null result means "no signal detected at this resolution with this window and this detrending." It does not mean "no approaching threshold." Fig 13 :134 (local text) states the general verdict: *"Unreachable is a verdict here, not a silence."* The depth/absence distinction cannot be made from inside one frame: more search at the same resolution and absence at every resolution look identical (Fig 6 :27). The world sources agree: Boettiger and Hastings, *J R Soc Interface*, 2012, note that *"Some classes of sudden transitions may exhibit no warning signals"*, and the chemostat-versus-glaciation comparison shows the same indicator working differently in different data.

**Refuter:** a proof that a null early-warning result at a stated resolution entails the absence of an approaching threshold. That would make unreachability a proof, which Fig 8 forbids.

### F8 - Improving reliability means improving the channel, along two opposed tracks (mode: `specified`; triangulated)

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*
Fig 6 :34: *"the question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."*

The indicator family is a proto-instrument: it is already returning something that fails to resolve (a rising trend that sometimes fires without a crossing). That licenses improvement rather than replacement.

- **INWARD:** longer and higher-frequency series, designed experiments with replicates, window and detrending sensitivity checks. Boettiger and Hastings, *Proc R Soc B*, 2012: *"experimental studies with replicates avoid this pitfall entirely."* Dakos et al., *PNAS*, 2008: *"Long time series of sufficient quality are needed, and resolution needs to be sufficient to capture the characteristic time scale of the internal dynamics of the system."*
- **OUTWARD:** import a statistics frame that fits a model instead of a summary trend. Boettiger and Hastings, *J R Soc Interface*, 2012, show a likelihood-based indicator improves detection (61 percent vs 25 percent at 5 percent false alarms in simulation) but does not eliminate the trade-off.

Fig 6 :30-31 requires these as two tracks, never read against one another: importing against a budget limit adds an atom that was not needed.

**Refuter:** a single instrument that removes both error directions at once without replication or an imported model. That would collapse the two tracks and falsify the separation.

### F9 - The literal yes/no is `gap`; the figures return a shape (mode: `general`)

No figure line produces a reliability coefficient. The figures decide what an admissible reliability claim must look like:

1. it ranges against crossings at the ground (F2);
2. it is reported per system class and per channel, never as one average (F1);
3. it is a pair of error rates with a declared trade-off, not a verdict (F5);
4. it keeps the channel visible and discloses window, detrending, and case selection (F4, F8);
5. it reports null results as unreached at this resolution (F7).

Fig 9 :32: *"you get a kind of thing, never the answer itself."* The numeric rate is unreachable from the figures by construction and must be won at the ground. Declaring that is a verdict, not a silence.

**Refuter:** a figure-derived theorem that yields a numeric false-alarm rate for a given sampling design. None exists in `03-FIGURES_TEXT.md`; if one is shown, `gap` becomes `grounded` for that quantity.

---

## 2b. An apparent world conflict, resolved by re-census, not by flipping a verdict

Dakos et al., *PNAS*, 2008, report slowing down before all eight abrupt climate shifts examined. Boettiger and Hastings, *Proc R Soc B*, 2012, report elevated false positives for the same statistics. Read as answers to one question, these conflict. Re-census shows they answer different sub-questions of the union identified in §1:

- Dakos et al. ask a **hindsight** question: given eight transitions already identified, did slowing precede them? Fig 2 :36, the anchor is the crossing; the cases were selected on the crossing.
- Boettiger and Hastings ask a **prospective** question: given a system observed now, will a signal firing now correspond to a later crossing? The cases were selected on the signal, and stable systems were found to produce it.

Fig 9 :4 says split rather than search; Fig 9 :54 says unbundle a union before searching again. The disagreement is structural, so it does not change any verdict above. It *strengthens* F4 and F5. No figure line was flipped.

---

## 3. Pre-registered refuter

Written before the conclusion, as required by Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A figure line is produced that yields a numeric reliability rate for a stated sampling design, collapsing the `gap` in F9.
2. A replicated, prospectively registered multi-system study shows both false-alarm and miss rates at zero with finite data, so the channel does not decay (F4).
3. A single aggregate reliability across system classes preserves the per-class rates to within the decision tolerance (F1).
4. Two indicators computed from one time series are shown to draw on disjoint measurement channels with independent calibration (F6).
5. A null early-warning result at a stated resolution is shown to entail the absence of an approaching threshold (F7).
6. A decision context is exhibited in which the warning signal itself is the questioned outcome and no ground exists, making the filter the verdict (F5).

If any fires, the affected finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Stop asking "are early-warning signals reliable?" as one question. Split it into the four sub-questions in §1 (F1).
2. Report every result as an ordered pair of error rates for a named system class, with window, detrending, and sampling interval disclosed (F1, F4).
3. Use the signal as a budget filter that triggers sampling, replication, and model-based checking, never as a verdict that a crossing is approaching (F5).
4. Treat a null signal as "not detected at this resolution," never as "no threshold" (F7).
5. Prefer replicated experiments and model-based indicators where the system allows, and never pool agreeing papers that reuse the same data (F6, F8).
6. Lead outreach with the residual and the refuter, not with a survey of supportive literature (Fig 10 :52: *"Bring a characterised residual, never the source."*).

---

## 5. Canonical usage check and retraction log

Two local sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit, the framework reports *"what a missing thing would have to look like (a shape, not a name)"* then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor for rulings the figures already decide. Design questions are settled by derivation. Fig 9 :60 therefore governs the practical use of an early-warning threshold directly.

### Retractions and confirmations of my own earlier readings

| earlier reading in this run | status after the canonical check |
|---|---|
| Operators `⋛` read as governing signal reliability | **Retracted and re-censused.** Strain test showed it prices the threshold only (F3). The line now governs the threshold quantity, and reliability is left as a channel question. Both readings are preserved so the correction is visible. |
| "the ground does not decay, the channel does" applied only to measuring instruments | **Widened, not erased.** Case selection (conditioning on collapse) is also a channel failure, because it pools readings before the check (F4). The original narrow reading was incomplete. |
| Apparent Dakos versus Boettiger conflict | **Re-censused, not flipped.** Hindsight and prospective questions are different cells of the union (§2b). Fig 9 :54 governs. |
| "many indicators agree, therefore reliable" | **Refused.** Fig 2 :40 and Fig 7 :13 disqualify agreement within one evidence pool (F6). |
| Reliability as one global number | **Refused.** Fig 1 :19, :22 and the ROC spread across datasets (F1). |
| Shape-not-a-name applied to the numeric rate | **Confirmed and sharpened.** The numeric rate is not a primitive in Γ; it is owed to the ground. This is `gap`, not silence. |
| Fig 6 depth versus absence | **Confirmed as a live distinction, not resolved.** Nothing in this derivation decides whether a given null result is depth or genuine absence. Recorded as unreached. |

### Verdict summary by domain

| domain | verdict | status | mode |
|---|---|---|---|
| D1 indicator frame cannot score itself | self-scoring refused; reliability is not a property of the statistic alone | triangulated (Fig 1 + Fig 3) | `general` |
| D2 the crossing is the anchor | reliability must range against crossings | triangulated (Fig 2 + Fig 10, low overlap) | `specified` |
| D3 channel decay governs both error directions | per-class error pairs; INWARD and OUTWARD kept separate | triangulated (Fig 10 + Fig 6 + two independent world methods) | `specified` |
| D4 literature agreement is one witness | no corroboration from shared data | triangulated (Fig 2 + Fig 7) | `general` |
| Numeric universal reliability coefficient | no figure governs it | `gap` | `general` |

Strains after re-census: one named and resolved (⋛ operand), one live and unresolved (depth versus genuine absence for any given null result). None hidden.
