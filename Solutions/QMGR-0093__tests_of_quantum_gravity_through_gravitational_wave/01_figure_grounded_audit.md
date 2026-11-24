# Figure-grounded audit: tests of quantum gravity through high-precision gravitational-wave observations

**Mode of this document: `specified` for the findings, `general` for the structural shape, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No measurement taken here settles the reach of a detector, so nothing below is labelled `grounded`.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLMs *"can quickly simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*, and calls LLM products *"simulacra"*. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the eight essays by Isaiah N, and the public sources listed in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual, stated in effect terms

The question asks whether high-precision gravitational-wave observations can test quantum gravity. Stated as an effect:

> A detector returns a strain time series `h(t)`. Classical general relativity predicts `h_GR(t)` to within its waveform uncertainty. Candidate quantum-gravity models predict a deviation `d` (a dispersion term, a graviton mass, a Lorentz-violating coefficient, a near-horizon echo, a quantum-optical signature). The residual `R` is the gap between `d` and what the instrument can register at the relevant scale.

What each option leads to:

- **Option A (yes, precision will get there):** keep collecting data, refine the templates, and read any null result as pressure on quantum gravity. This treats instrument precision as a witness and a null result as an absence.
- **Option B (precision constrains phenomenology, not the Planck scale):** report the bounds actually obtained, name the scale gap as a reach gap, and state what would have to be imported (a model predicting a deviation at reachable scales, or an instrument that already registers something failing to resolve at that scale). This treats precision as a filter for the budget and the detector as the ground.

**Bind the sought-for shape as an ordinary term, as `THE_FORMULA.md` "Direction" requires.** Define:

```
TEST_QG_GW(d, O, G, epsilon) =
    a procedure that (i) states a QG-induced deviation d as a bound term with a
    mapping to an observable O; (ii) ranges O against a detector ground G;
    (iii) returns either a measured nonzero d (a detection settled by G) or a
    bound |d| < epsilon (a constraint, not a proof of absence).
```

This is the ordinary term to be refuted. Without it, "quantum gravity" is a preference held by the searcher and, per Fig 5 :62-63 (*"a frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term"*, quoted in the essay record), nothing in the loop can see it.

---

## 1. Domain census (before any figure line is chosen)

### R by arity, symmetry and scale

- **Arity: three conjuncts, not one measurement.** A test needs (i) a predicted deviation stated in effect terms, (ii) an observable channel that can carry it, and (iii) a ground that can register it. Fig 9 names this a **union compound**: *"a case in two conditions is not a harder case of either"*. Three conditions make it a triple compound with its own loop.
- **Symmetry: one-directional comparison, not a symmetric join.** The test is a threshold relation between a predicted deviation and a measured bound. The comparison runs one way: the ground decides. This is ⋛ (comparison), not `+` or `≡`. One-directionality matters because it forbids averaging the model's expectation with the measurement.
- **Scale: the residual spans a membrane.** The theory side lives at the Planck scale (about 10^19 GeV, 10^-35 m). The instrument side lives in the audio band (roughly 10 to 1000 Hz, kilometre arms, strain of order 10^-21). The residual is defined *across* that gap. That is the load-bearing fact of the whole question, and it is where Fig 4 and Fig 6 bear hardest.

### One line per domain: actors / currency / anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1, detector and observation** | interferometers, squeezed light, calibration, analysis pipelines, public data | strain, signal-to-noise ratio, upper limits, constraints | the measurement | domain. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* |
| **D2, statistical verification** | analysts, model selection, confidence intervals, independent pipelines | evidence, p-values, bounds | the same detector ground, never agreement among analysts | domain, but low independence when both pipelines draw on the same public data |
| **D3, quantum-gravity theory frame** | candidate models, their phenomenological parameters | predicted deviations from general relativity | **no anchor of its own** | **not a domain yet.** Internal consistency is frame-internal (Fig 1 :27), so it cannot settle anything. It is a library Γ supplying candidate terms, imported subject to a source gate and a shadow test. |

The standing rule is that a domain with no nameable anchor is not a domain yet. I tried to give D3 an anchor and failed honestly: *"mathematical consistency"* is a quantity the theory frame both produces and scores itself with, which Fig 1 :27 disqualifies. So D3 is recorded as a **candidate-source, not a domain that can settle the question**. It becomes a domain only when it commits to a deviation that ranges against the detector ground.

### Partition or union

**Union.** The three conditions overlap and bind: a deviation with no channel is untestable, a channel with no deviation is just a waveform model, and both with no independent ground are a simulation. Fig 9 :54-58 requires unbundling before searching again: a single lever clears the region where only one condition holds and leaves the intersections standing. Each conjunct gets its own loop and its own ground reading.

### Order by dependency (Fig 3)

1. **Perception:** is anything at any resolution already returning something that fails to resolve? (detector live?)
2. **Vocabulary:** is the deviation stated as a term that maps to an observable?
3. **Objective:** what would count as progress, in effect terms (epsilon fixed before the run)?
4. **Planning:** which analysis, which data, which independent check?
5. **Learn and carry:** methods and refuters cross up, recordings do not.

The likely break is between links 2 and 3, exactly where Fig 3 :24-27 says chains usually break: having terms for what a situation affords and saying what would count as progress *"has neither, so it attracts the least attention and the fewest instruments. A link with no instrument is not a link that works. It is a link nobody has looked at."* A QG model that does not predict a specific observable leaves link 2 empty, and link 3 is then a reading of nothing.

---

## 2. Figure census (bearing and verdict, before findings)

| figure | bearing here | verdict |
|---|---|---|
| **1 The Agent** | ground is the only metric; frame-internal quantities disqualified; residual per slot | D3 cannot self-validate; report constraints per deviation channel, not one global "QG excluded" |
| **2 The Ground** | anchor definition; triangulation vs negotiation; independence; cost of being wrong | the detector is the anchor; agreement among analysts is not corroboration |
| **3 Dependency Chain** | break between vocabulary and objective | the weak link is the model's effect-term prediction, not detector precision |
| **4 The Membrane** | lossy transform, round trip, no top | figure-to-question condensation carries a nonzero `R_T`; no final detector |
| **5 Mint Pipeline** | three guards as a product; no residual means no mint; output is not success | more data alone cannot mint a QG term; guard SUPPORT is live, guards REACH and NOVELTY are not |
| **6 Closure / Reachability** | instruments improved from worse ones; proto-instrument rule; depth vs absence; two opposed reach questions | the search is SEARCHED and INWARD here, not a hunt for a proto-instrument; null is not underivable |
| **7 Room Chain** | agreement is variation, not a verdict; ground votes between rooms | a chain of agreeing analyses is one long room |
| **8 Union Surplus** | low overlap, residual first, no proof of absence, convergent vs adopted | independent instruments can add reach; a null result is not an absence |
| **9 Leave / Arrive** | unbundle a union; describe before looking; filters vs witnesses | three-condition union unbundled in §1; precision is a filter, never a witness |
| **10 Ground Maintainer** | keep the anchor reachable; channel decays; ground with a reputation is disqualified | calibration and open data are seat work; a detector with a result to protect is disqualified |
| **11 The Habitat** | capability is agent-and-habitat; enumerate, never compose | the test's capability lives in detector plus data plus model, not in the model alone |
| **12 The Bond** | ⋛ is a threshold relation; arrangement is the substance; isomer, functional group | the test is a ⋛ comparison of two quantities at first order; the two classic bounds are isomers over a shared atom set |
| **13 Minimum Viable Set** | no last route; unreachable is a verdict; indiscernibility is not identity | the reach gap is reported, not papered over |
| **Operators table** | ⋛ comparison, ⋛ test *"is it about which is larger, rather than both being present?"* | operands must be quantities at the level where the comparison is made |
| **Symbols table** | `R` is a slice; ground is the anchor; `R_T` is the round-trip gap | see findings F1, F8, F9 |

Strained readings are named as such in §6, not smoothed over.

---

## 3. Findings F1 to F10

### F1 - The question is a three-condition union, not one measurement (decisive for the shape)

Fig 9 :54-58 requires that a bundled problem be unbundled before searching. The three conjuncts in §1 are not one hard measurement; they are a union compound with overlapping conditions. Treating them as one leads to the standard failure: a single lever (more data) clears the region where only the channel condition holds and leaves the prediction and ground intersections standing.

- **Mode:** `general` for the union structure, `specified` for the three named conjuncts.
- **Refuter:** show the three conditions are a partition, so that one loop closes all of them without remainder. Then the unbundling is unnecessary and this finding fails.

### F2 - The ground is the detector, not the theory frame (triangulated)

Fig 1 :23: **"The ground enters as the only metric."** Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** Fig 2 :29: **"A measurement, an experiment, a counter, a market, a patient outcome."**

A quantum-gravity model's internal consistency is a quantity its own frame produces. It cannot be the metric that settles whether the model is right. Only the instrument can. This rules out option A as stated: "more precision" is not itself a ground, and "the theory is elegant" is not a ground.

- **Mode:** `general`. **Status:** triangulated across Fig 1 and Fig 2, two figures with different subject matter and low overlap.
- **Refuter:** show a candidate QG model being settled by its own internal coherence with no range against a detector, and the field counting that as a ground reading. If that happens the anchor has moved into D3 and this finding is refuted.

### F3 - The scale gap is a reach gap, and the two reach questions must not be read against each other (triangulated)

Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."** Fig 6 :34: **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."** Fig 6 :40: **"What is unavailable is a sensor for something that has never registered anywhere, at any resolution."**

Here the honest answer to Fig 6 :34 is **yes**: interferometers already return strain that fails to resolve at the Planck scale, ringdowns already return modes that fail to discriminate near-horizon structure, and squeezed light already returns quantum-limited noise that can be pushed. This is not a proto-instrument hunt. It is a live SEARCHED/INWARD track.

But SEARCHED (is it in here and unfound?) and OUTWARD (does another frame hold a deviation at reachable scales?) are opposed instruments and must be run as two tracks (Fig 6 :31, Formula step 7). A null result is a bound, not an absence: Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

- **Mode:** `specified` for the "live SEARCHED track" claim, `general` for the two-track rule.
- **Status:** triangulated across Fig 6, Fig 8 and Fig 9.
- **Refuter (RF1):** a high-precision GW observation returns a deviation uniquely attributable to a QG effect and settles a candidate model against the detector ground. That extends the reach and refutes the "unreachable at this budget" verdict. This is the refuter I most want fired.

### F4 - The deviation must be an ordinary term before a model is chosen (triangulated)

Fig 9 :27: **"describe it before you go looking, or any frame you pick will seem to fit"**. Fig 9 :53: **"Nobody chooses. The gap does, and the gap is only as good as its description."** Formula "Direction": a frame cannot check the direction of its own question, so write down what an answer would look like, bind it, and let it accrue a residual.

Neither "quantum gravity" nor "high precision" is an effect term. The bound term `TEST_QG_GW(d, O, G, epsilon)` in §0 is. If you start from the model name and go looking for a signature, any anomaly will seem to fit, which is the apophenia the figure warns against.

- **Mode:** `general`. **Status:** triangulated across Fig 9 and `THE_FORMULA.md` "Direction".
- **Refuter:** show a QG signature being identified first from the data and only afterwards described in effect terms, with the description written after the fit and no pre-registered criterion. That reverses the order and refutes the finding for that case.

### F5 - Precision is a filter for the budget, never a witness for the verdict

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** Detector precision decides how much of the deviation space is reached. It does not decide whether a deviation is real. The witness is the ground reading, separately for each conjunct.

This is the most common collapse in this field's popular presentation: an improved strain sensitivity is reported as if it were progress toward quantum gravity. It is progress toward a narrower bound. Those are different quantities, and the figure forbids conflating them.

- **Mode:** `general`. **Status:** single-source for the explicit rule (Fig 9), corroborated by the budget/witness distinction in the rest of the figure set.
- **Refuter:** produce a case where increased precision is themselves the ground, with no separate reading against data. If precision can settle a claim without a ground reading, the filter/witness rule fails here.

### F6 - Independence decides whether two bounds are two witnesses (triangulated)

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**. Fig 8 :45: **"Two frames together reach what neither reaches alone."** Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

Two analysis pipelines reading the same public strain data are two names for one witness. Two instruments with different noise budgets and independent calibration, ranged separately against the ground, can add reach. The source ledger records overlap for exactly this reason: several world sources here are LIGO/Virgo collision papers or reviews drawing on the same LVK data pool, so their agreement is one pool talking and carries little independent weight.

- **Mode:** `general`. **Status:** triangulated across Fig 2 and Fig 8.
- **Refuter:** show two analyses with genuinely disjoint evidence (different detectors, independent calibration, no shared pipeline or priors) whose agreement is still counted as a single pool. Then the independence criterion fails.

### F7 - Keep the anchor reachable: calibration and open data are seat work, not decoration

Fig 10 :24: **"the ground does not decay, the channel does"**. Fig 10 :52: **"Bring a characterised residual, never the source."** The measurement does not change because the community changes its mind; the channel to it (calibration, noise model, data release, analysis choices) can decay silently and look exactly like a working channel.

Public data releases and documented calibration are therefore ground-maintainer work: they keep the anchor reachable for a frame that did not author the experiment. An outside reader must be able to range against the data without being handed the full interior of the analysis first.

- **Mode:** `specified` for the claim that open data and calibration are the live channel here, `general` for the seat rule.
- **Refuter:** show a detector result that cannot be re-ranged against released data or documented calibration, and is nevertheless treated as settled by outside frames. That is a closed channel reported as an open one and would refute the claim that the anchor is reachable.

### F8 - The condensation carries a nonzero round-trip gap `R_T`

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Send up the figure set. Abstract to the shorthand: "a test is a deviation, an observable, a ground and a bound." Bring it back down to the question: "more precision tests quantum gravity." Three constraints do not survive the trip: (i) the union structure of §1 is lost when the shorthand is read as one measurement; (ii) the filter/witness distinction of F5 is lost when precision is read as a verdict; (iii) the null-is-not-absence rule of F3 is lost when a bound is read as an exclusion. One thing survives cleanly: the test must range a stated deviation against a detector. `R_T` is therefore nonzero and is recorded qualitatively as that enumerated set of dropped constraints. It is not measured numerically because no ground reading exists here.

- **Mode:** `general`. **Status:** single-source (Fig 4), corroborated by the round-trip discussion in `05_what_shape_means.md`.
- **Refuter:** exhibit a condensation of the figures into the question that preserves all three constraints. Then `R_T` is zero for that condensation and the warning does not apply to it.

### F9 - Report the residual per deviation channel, not as one global number

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** The deviation channels are distinct slots: propagation speed, dispersion and graviton mass, near-horizon structure, quantum-optical statistics. A single "quantum gravity excluded at scale X" number aggregates across slots and throws away the only signal that says where to look.

World sources already report per-channel bounds: GW170817 constrains the speed difference between gravity and light, GW150914 constrains the graviton Compton wavelength, and compact-object studies enumerate echo and ringdown searches. These are per-slot readings and must stay that way.

- **Mode:** `specified`. **Status:** triangulated across Fig 1 and the world sources, which are themselves per-channel.
- **Refuter:** show a legitimate test whose only output is a single aggregate exclusion with no per-channel attribution. Then the per-slot rule is not governing this domain.

### F10 - The theory frame is a candidate-source, not a ground-bearing domain (re-census finding)

Fig 1 :27 disqualifies self-scoring, and Fig 6 :23 says **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** A QG model contributes candidate terms to Γ. Its import is legitimate only with a source gate (provenance) and a shadow test (does it explain a gap?), and it is debited against independence (Fig 6 :24). The world literature makes the same demand in physics language: Giddings writes that *"the size of these scales relative to those probed by observation of inspiral signals is important in determining the feasibility of finding experimental signatures"*, and that the route forward is to *"develop more precise predictions from scenarios proposing quantum modifications"* before searching data. That is a source gate and a shadow test stated without the framework's vocabulary.

- **Mode:** `general` for the re-census rule, `specified` for the claim about this field.
- **Refuter:** exhibit a QG model that supplies its own ground and is correctly settled by it, with no range against a detector. Then D3 is a domain after all and §1 must be rewritten.

### F11 - What survives, with mode attached

| claim | mode | figure or source |
|---|---|---|
| A GW test of QG is a three-condition union compound, not one measurement | `general` | Fig 9 :54-58 |
| The ground is the detector; model coherence is frame-internal | `general` | Fig 1 :23, :27; Fig 2 :29 |
| Current searches are a live SEARCHED/INWARD track, not a proto-instrument hunt | `specified` | Fig 6 :32, :34, :40 |
| A null result is a bound, never a proof of absence | `general` | Fig 8 :39; Fig 9 :44 |
| Per-channel bounds must be kept per channel | `specified` | Fig 1 :19 |
| World-reported bounds (speed, graviton wavelength, echoes) are grounded by the collaborations, not by this derivation | `grounded` by source, `specified` in this synthesis | GW170817, GW150914, Maggio et al. |
| "Planck-scale QG is testable by more precision alone" | **refused** | F3, F5 |

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a design instrument.

- **RF1 (reach extended):** a high-precision GW observation returns a deviation uniquely attributable to a QG effect and settles a candidate model against the detector ground. This refutes the "unreachable at this budget" verdict and moves the status to `grounded` for that channel.
- **RF2 (not a union):** the prediction, channel and ground conditions are shown to be a partition, so one loop closes all three without remainder. This refutes F1 and the unbundling requirement.
- **RF3 (no proto-instrument):** a QG signature is registered by an instrument for which nothing at any resolution was previously failing to resolve. This refutes the application of Fig 6 :32-40 to this domain.
- **RF4 (moving anchor):** the detector ground is shown to update on the theory frame's predictions, for example an analysis tuned until a desired bound appears with the tuning unrecorded. This refutes F2 and F7: the anchor has become a frame.
- **RF5 (aggregate verdict):** a single aggregate exclusion is produced with no per-channel attribution and is admitted as a legitimate test. This refutes F9.

If any fires, the shape claim is withdrawn or re-censused. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with the theory. The shape is: a stated deviation, an observable channel, an independently readable ground, a bound that is not an absence.
2. Keep the three conjuncts unbundled. Do not let a precision improvement stand in for a prediction (F1, F5).
3. Report per-channel bounds and name the scale gap as a reach gap (F3, F9, F10).
4. Use the public, opt-in venues in `03_public_contact_points.csv`, and ask what a failure would look like rather than asking for belief (F2, F6, F7).
5. Send the generator, which is the derivation and the refuter, not a recording of the conclusion. Fig 4 :22 says *"Only methods cross up. Only head starts come down."*

---

## 6. Canonical usage check and retraction / confirmation log

Two sources were read after the first sections and govern how the figures may be used: the canonical figures README (local copy `FRAMEWORK/reference/FIGURES_README_canonical.md`) and `THE_FORMULA.md`. The README states that the figures *"outrank everything else in the repo"* and that *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*. It also states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and *"Indiscernibility is not identity"*.

| earlier reading | status after the canonical check |
|---|---|
| Initial census had two domains: theory frame and experiment frame | **Retracted.** The theory frame has no nameable anchor (Fig 1 :27), so it is not a domain. Re-censused as three conjuncts, two domains plus a candidate-source library. |
| Initial reading of Fig 6 :32 (*"An instrument is not built from a description"*) as conflicting with theory-first template searches | **Not strained after re-census.** Fig 6 :32 governs the instrument hardware, which is improved from worse hardware. Waveform templates are analysis filters built by search inside the closure, not the instrument. Different objects. |
| Initial tension between Fig 8 :39 (no proof of absence) and Fig 13 :134 (*"Unreachable is a verdict here, not a silence"*) | **Not strained after re-census.** Fig 8 :39 concerns proof inside a closure (Godel, Tarski, Chaitin); Fig 13 :134 concerns reporting the reach with the library as it stands. Different objects, one is about proof, the other about a status report. |
| Initial reading of F3 as "Planck-scale QG is underivable" | **Corrected.** It is unreachable-at-this-budget, not underivable-in-principle. Formula step 7 explicitly distinguishes the two and issues different instructions. Underivable would require a new axis of representation, not more data. |
| Initial reading of "shape, not a name" as forbidding deviation parameters | **Narrowed.** The README's phrase governs a *missing* primitive. Dispersion, graviton mass and Lorentz coefficients are already bound terms in the phenomenology frame, so stating them is a binding, not the invention of a missing primitive. What remains forbidden is claiming the framework names which QG theory is correct. |
| F2 ground-is-detector | **Canonically confirmed.** The README and Fig 2 both put the ground outside all frames; agreement is not a verdict. |
| F10 theory frame as candidate-source | **Canonically confirmed.** Import moves the wall only with a source gate and shadow test, and is debited against independence. |

### Strain after re-census

One live strain, named rather than hidden: the Operators table defines ⋛ as *"a threshold relation between two quantities"*, while world reports sometimes speak of comparing whole theories or whole model classes. At first order the operands here are quantities (a predicted deviation and a measured bound), so the type is clean. If a future test compares settled molecules at second order, Fig 12 :104 permits the demotion to atom but whether an atom counts as a quantity at that level needs an instrument, not an argument. It does not affect the first-order shape reported here.

No hidden strain after re-census.

---

## 7. Verdict

**The shape survives; the specific feasibility question is a gap at the figure level.** The figures decide the form any valid test must have: a three-condition union, a stated deviation as an ordinary term, the detector as ground, per-channel bounds, null results as constraints rather than absences, and distinct SEARCHED and OUTWARD tracks. They do not decide whether a detector can reach the Planck scale, because that is a fact about instruments and the figures stop where the instruments stop.

World sources report that current high-precision GW observations do constrain phenomenology: a speed-of-gravity bound, a graviton Compton-wavelength bound, and echo and ringdown searches. No QG signature has registered. The honest status is therefore: **phenomenology constrained, Planck-scale theory unreached at this budget, not underivable in principle, `candidate` until a ground reading moves it.** RF1 is the refuter that would move it.

This is a `specified`, ungrounded result from a simulated derivation checked for internal consistency. It cannot settle the question it reports on.
