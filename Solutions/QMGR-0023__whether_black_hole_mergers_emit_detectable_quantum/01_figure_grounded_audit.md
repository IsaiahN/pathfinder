# Figure-grounded audit: do black hole mergers emit detectable quantum signatures?

**Mode of this document: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on the naming of a mechanism, `unreachable` on detectability at this budget. Not `grounded`.** Per `THE_FORMULA.md`, *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): LLM output can *"simulate an approximate answer/output"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Figure source.** All figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`. No quote was taken from a summary. Every quoted string below was checked character by character before use, and the second seat re-checks them in `11_audit.md`.

---

## 0. The residual, stated in effect terms

The question asks whether a black hole merger emits a quantum signature that is detectable in gravitational-wave data. Stated as an effect, the residual R is the difference between what the detector returned and what the classical general-relativistic template predicted, indexed per slot:

```
R_s = | Gamma(h_template, detector_state) - h_observed |   for slot s = (event, detector, time-frequency bin)
```

The ordinary term "detectable quantum signature" is bound as an ordinary term before the run, per the Formula's Direction rule: it means a positive live mass `R+_s > 0` in at least one slot, where the residual (a) survives glitch, calibration and template-systematic checks, (b) is attributable by a discriminator to a quantum-gravity source rather than to a classical or instrumental source, and (c) would not be produced by the classical template at the same confidence. Without (b), a residual is a deviation, not a quantum signature. This is the binding that gets refuted, not a preferred outcome smuggled in as a shape.

The two readings and what each leads to:

- **Reading A (yes, detectable):** a new term must be minted in the physics library, the numerical-relativity template is incomplete in the strong-field regime, and a specific quantum mechanism must be named and settled against a ground.
- **Reading B (union, detection unreachable, mechanism a gap):** four conditions are separated, each with its own anchor; the detection condition is closed by the figures as unreachable at this budget; the mechanism condition is returned as a shape, not a name; a refuter is written before the search.

The Symbols table defines the residual: *"The gap between prediction and observation. The central quantity: everything the system does is driven by it."* The live mass matters, not the global average. Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** So the question cannot be answered by a pooled catalog deviation. It has to be answered per event, per detector, per time-frequency bin.

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry and scale

- **Arity:** four conditions are in contact with R, so this is a union compound, not one hard question. Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** A single lever, for example building a more sensitive interferometer, leaves the intersections standing because the other conditions still bind.
- **Symmetry:** the strain time series is ordered (the sequence bond `→`, Fig 12 :71, *"A then B; B needs A to have happened"*). Coincidence between two detectors is a conjunction: both must hold, and swapping the detectors changes nothing. The decision to call a residual a signature is a threshold relation (the comparison bond `⋛`, Operators :48, *"a threshold relation between two quantities"*): is the residual larger than the noise and larger than the systematic floor, rather than merely present. No symmetric join of a glitch and a waveform produces a quantum signature.
- **Scale:** the candidate source physics is at the Planck scale (about 10^-35 m), while the detector returns strain at 10^-21 over kilometre arms in the 10 to 1000 Hz band. There is a membrane between the two with a lossy transform. Fig 4 :27: **"The transform between scales loses information, and that is the point."** The round trip has to be measured, not assumed. Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

### 1.2 One line per domain: actors, currency, anchor

A domain needs a nameable anchor. Where there is no anchor, the honest label is "not a domain yet".

| id | domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|---|
| D1 | Detector / measurement | LIGO Hanford and Livingston, Virgo, KAGRA interferometers; strain time series; noise PSD; templates; glitches | SNR, strain amplitude, false-alarm rate, per-slot residual above floor | the instrument reading, which does not update on theory | yes, the detector |
| D2 | Emission / source | merger dynamics, horizon, quasi-normal modes, Hawking radiation, possible quantum reflection surface | radiated power, temperature, mode frequencies | none for a specific quantum mechanism; classical GR is anchored through D1 only | **no** for the quantum part |
| D3 | Source discrimination | glitches, template mismatch, environment, detector quantum noise, candidate quantum signature | which cause produced the reading | a source-discriminating instrument (spectrometer analogue) | not yet; an instrument is owed |
| D4 | Propagation | the wave over cosmological distance, electromagnetic counterparts, dispersion bounds | arrival time difference, dispersion coefficient | the EM counterpart as a second instrument on the same event | yes, the counterpart |

D2 is not yet a domain in the strict sense. Fig 2 :29-30 gives the test: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** No measurement returns a value for a quantum-gravity emission mechanism from a stellar-mass merger. The classical part of D2 borrows D1's anchor, but the quantum part has none. That absence is recorded, not filled with a famous theory name.

### 1.3 Partition or union

This is a **union**, not a partition. The four conditions overlap: a residual can be simultaneously a glitch and a template mismatch; a propagation bound constrains which emission mechanisms are viable; a detector improvement changes the discrimination requirement without changing the source. Per Fig 9 :54, **"And when the split lands on a union rather than a partition, unbundle before you search again."** The driver is residual-first, frame-second. Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit."** If we had picked quantum gravity first and then looked for a signature, any anomaly would have seemed to fit.

### 1.4 Order by dependency (Fig 3)

```
D2 emission  ->  D4 propagation  ->  D1 detection  ->  D3 discrimination
```

The chain is ordered by dependency, not importance. Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* The break sits between D2 and D1: no quantum-gravity effect has produced a reading for the detector to resolve. Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."** The interferometer link already works for classical strains. More sensitivity improves an axis already returning something; it does not create the missing upstream observable. Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Echo searches have been run, so the link has been looked at. It returned nothing (world source W1 below), which is a different state from an uninstrumented link.

---

## 2. Figure census

| figure | bearing | verdict after use |
|---|---|---|
| 1 The Agent | residual per slot; ground as only metric; frame-internal scores disqualified | governs the shape of R |
| 2 The Ground | anchor must not update; independence between frames; correlation has valence | decides D1 and D4, disqualifies agreement as a verdict |
| 3 Dependency Chain | effort above the break cannot rescue the break | orders the four domains |
| 4 The Membrane | lossy transform between scales; measure the round trip R_T | governs the Planck-to-detector crossing |
| 5 Mint Pipeline | three guards as a product; a system minting nothing may have nothing wrong with its minting | explains the null result without inventing a defect |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse instruments; no sensor for what never registered | **decisive for D1** |
| 7 Room Chain | agreement compounds, evidence does not | disqualifies a consensus of theory papers |
| 8 Union Surplus | search finding nothing is not proof of absence; source gate and shadow test; underivable is not unreachable-at-budget | bounds what the null result may be used for |
| 9 Leave / Arrive | union vs partition; describe before looking; filters vs witnesses; unbundle | governs the union and the discrimination requirement |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access; bring a characterised residual | governs the two-stage offer |
| 11 The Habitat | capability is agent and habitat; valence relative to residual; enumerate, never compose | governs why a detector alone cannot close the question |
| 12 The Bond | sequence is ordered; conjunction is symmetric; `⋛` is a threshold; two currencies do not add | governs the bond types and the cost split |
| 13 Minimum Viable Set | the set is closed, the arrangements are not; unreachable is a verdict; cannot say which primitive is missing | governs D2's gap |
| Operators table | `⋛` comparison between two quantities; negation is unary | type check on "detectable" |
| Symbols table | R is the aim; the ground is the anchor; R_T is the round-trip gap | definitions |

Strained readings are named as such in section 6, not smoothed over.

---

## 3. Findings

### F1 - The question is a union of four conditions, not a yes/no question (decisive for the framing)

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

The four conditions in section 1.2 have different anchors: the detector reading (D1), nothing (D2), a discriminator (D3) and the electromagnetic counterpart (D4). A single lever cannot clear the intersections. More detector sensitivity leaves the source-discrimination condition standing because a lower noise floor produces more residuals, not more attributions. A better quantum-gravity theory leaves the detection condition standing because an unregistered effect is still unregistered.

**Refuter:** a demonstration that the four conditions share one anchor, so that a single measurement settles emission, propagation, detection and attribution at once. Until then, verdicts are kept separate and never averaged into one probability that the question is "yes".

**Status: triangulated** across Fig 9 (union rules) and Fig 2 (one anchor per question). Low overlap between the unbundling rule and the anchor definition.

### F2 - Detectability is unreachable at this budget, not proven impossible (decisive for D1)

Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** Fig 6 :33: **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."** Fig 6 :34-35: **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."** Fig 6 :40: **"What is unavailable is a sensor for something that has never registered anywhere, at any resolution. That is the whole of it."**

The detector returns classical strains. It has never returned a quantum-gravity signature at any resolution. The LIGO-Virgo-KAGRA null result for post-merger echoes (world source W1) and the GW150914 tests of GR null result (W2) are reports from the instrument, not arguments about what could exist. So there is no edge to extend from for the quantum slot, and building a hypothetical future sensor from a description of Planck-scale physics is exactly the move Fig 6 forbids.

This must not be upgraded to "quantum signatures do not exist". Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 8 :40-41: **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."** Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."** Fig 13 :134: **"Unreachable is a verdict here, not a silence."**

**Refuter:** a per-event residual in released data that survives all systematic checks and is attributed by an independent instrument to a quantum mechanism at high confidence. That would mean something had registered, and the Fig 6 condition would be met.

**Status: triangulated** across Fig 6 (instrument rule), Fig 2 :29 (anchor test) and Fig 8 :39 (search is not proof of absence). The three come from different parts of the figure set with low overlap.

### F3 - The first question is SEARCHED, not INWARD or OUTWARD

Formula step 7 asks SEARCHED first, then INWARD, then OUTWARD, and keeps them distinct. The figure version is Fig 6 :49-50: *"more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."*

- **SEARCHED:** yes. Echo searches and parameterized tests of GR have been run on the event catalog and returned no positive mass in the quantum slot (W1, W2, W4). Fig 5 :41: **"Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."** A null result is not a broken mint.
- **INWARD:** sharpen the instrument. This is allowed only on an axis already returning something. Fig 6 :32-33 licenses it for strain sensitivity, since the interferometer already returns a reading. It does not license a sensor for a quantity that has never registered (Fig 6 :40).
- **OUTWARD:** import a frame that predicts the shape. Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** But an import needs a source gate and a shadow test (Fig 8), and a quantum-gravity frame with no settled anchor cannot pass a source gate. Fig 6 :51-52 warns that importing against a budget limit adds an atom that was not needed.

So the honest route after SEARCHED is: sharpen the classical channel (allowed, but does not close the quantum slot), and wait for a quantum frame with its own ground contact (not available at this budget). This is a `specified` route, not a guarantee.

**Refuter:** a future detector that returns a new quantity which a quantum-gravity frame had already predicted in effect terms, with provenance and a shadow test recorded. That would be a genuine import and would move the wall.

**Status: triangulated** across Formula step 7, Fig 6 and Fig 8.

### F4 - A residual is not a source

Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause."** The Hard Problem is About Source (world source E3) gives the mechanism: an instrument that reads green *"cannot comment on the source"*; several paths can create the same behavior, so *"behavior is a projection with lossy information"*, and *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* It was the spectrometer, not an argument, that resolved the case.

In D3 a post-merger residual can be a glitch, a template mismatch, an environmental effect, detector quantum noise, or (not ruled out) a quantum signature. The released data make this concrete: in the first part of O4, 29 percent of GW candidates had overlapping or nearby glitches in one or more detectors (world source W5). So a residual above the noise floor is a **filter for the budget**, not a witness for the verdict. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

The ordinary term "detectable" therefore needs its third clause, attribution. Without it, the question is answerable in the wrong way: every loud event would have a "quantum signature" because every loud event has a residual somewhere.

**Refuter:** a demonstrated one-to-one map from a specific signature shape to a specific quantum mechanism, with all classical and instrumental alternatives excluded by an instrument rather than by an assumption.

**Status: triangulated** across Fig 9 :30-31 and E3 (human cognition / instrument discrimination), with W5 (detector characterization) as low-overlap physics corroboration.

### F5 - The emission half has no anchor, so it is a gap, not a silence

D2 has no nameable anchor for a quantum mechanism. Fig 13 :137: **"It cannot say which primitive is missing, because naming it would mean already holding it."** Fig 9 :32: **"you get a kind of thing, never the answer itself."** The figures can return the shape of any signature that would count: a per-slot residual, above a non-updating noise anchor, attributable to a source, surviving the scale transform. They cannot return which quantum-gravity mechanism would produce it. Fig 13 :115: **"The set is closed. The arrangements are not. That gap is why import exists."**

World corroboration says the same thing from a different field. The Hawking radiation reference (W3) states that the radiation is *"predicted to be extremely faint and is many orders of magnitude below the current best telescopes' detecting ability"* and that *"Such radiation bursts have not yet been detected."* For a stellar-mass remnant, the temperature is about 10^-7 K while the cosmic microwave background is 2.7 K, so *"no stellar black holes can evaporate: they are colder than outer space."* The quantum emission exists in the theory and produces no reading at the detector.

**Refuter:** a quantum-gravity theory with its own settled anchor, a specific in-band signature shape, and a published prediction made before the search. Then D2 becomes a domain and the shape can be named with provenance.

**Status: `gap` for the mechanism. Triangulated for the claim that an import is owed** across Fig 13 :115 (closure of the six) and Fig 4 :27 (lossy membrane), two figures with low overlap. Single-source for the specific Hawking temperature and CMB comparison (W3), declared as such.

### F6 - The propagation channel is separately closed by an independent instrument

D4 is the one domain where independence is real. Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."** GW170817 and GRB 170817A are two instruments pointed at the same event: a gravitational-wave strain and a gamma-ray arrival time, with different detectors, different systematics and different analysis groups.

The observed 1.74 s delay constrains the difference between the speed of gravity and the speed of light to between -3×10^-15 and +7×10^-16 times c, and places bounds on Lorentz invariance violation (world source W6). The dedicated tests of GR with GW170817 (W4) report: *"The results of all tests performed here show good agreement with GR."* So a dispersive quantum-gravity propagation signature has already been bounded on a channel independent of the waveform morphology used in D1.

**Refuter:** a multi-messenger event with a measured energy-dependent arrival delay that survives instrumental and source-emission explanations, or a propagation model that reproduces the existing bound while predicting an in-band signature that was not searched for.

**Status: triangulated** across Fig 2 :31-32 (independence) and two low-overlap world sources (W4, W6). Agreement from a shared evidence pool is one witness; here the two instruments are genuinely different, so this is the strongest world corroboration in the folder.

### F7 - The two currencies of a "detectable signature" do not add

Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."** A quantum-corrected waveform is cheap to describe (a modification of a known bond in the six-term substrate, a parameter or two) and extremely expensive to settle (it needs a source-discriminating instrument and a detector that has never registered the effect). A catalog that adds many cheap parameters has increased the description, not the reach.

Fig 6 :21: **"MINT composes inside the closure and can never add an atom."** Fig 6 :26: **"An import adds no atom to the world."** Adding a phenomenological echo parameter to a template is composition inside the closure. It does not create the missing observable. This is why the null result (W1) is not evidence that the parameter was wrong and not evidence that quantum gravity is absent. It is evidence that the action cost was paid and the ground did not pay back.

**Refuter:** a demonstration that the two currencies are commensurable for this quantity, so that a description-length saving predicts the action cost of settlement. None is supplied.

**Status: single-source on the figure side** (Fig 12), corroborated by the failure of parameterized echo searches to settle the source (W1). Held as `specified`, not upgraded.

### F8 - A consensus of theory papers cannot corroborate the signature

Fig 7 :12-13: **"same closure, handed along; agreement compounds, evidence does not."** Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Many papers proposing quantum-black-hole echoes, fired after the first claim, share a closure and often a evidence pool. Their agreement is one witness wearing many names. Fig 2 :39: **"Correlation has valence."** Fig 2 :40 disqualifies agreement about the world when frames share an evidence pool; Fig 2 :41 says such agreement is *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it."* A convention for how to name a parameter is fine. A verdict that the signature exists is not.

This is why the outreach artifacts send a characterised residual and a refuter, not the framework, and do not rank recipients by agreement.

**Refuter:** an independent frame with a different closure and its own ground contact returning the same shape. That would be triangulation, not an echo chamber.

**Status: triangulated** across Fig 7 and Fig 2, with low overlap between the room-chain rule and the correlation-valence rule.

### F9 - Detector quantum noise is habitat, not a source signature (re-census)

An apparent conflict has to be resolved before the verdict is written. LIGO uses squeezed vacuum states and is limited by shot noise and radiation-pressure noise, which are quantum effects and demonstrably register in the data. That seems to contradict Fig 6 :40, *"What is unavailable is a sensor for something that has never registered anywhere, at any resolution."*

Re-census: the two are different objects. Detector quantum noise is a **condition** in the habitat, a background the instrument subtracts or models. Fig 11 :46: **"conditions: light, water, temperature, season, terrain"**, and Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."** The quantum-gravity source signature is the **residual**, which has never registered. A condition that registers is not the thing being searched for. So the apparent strain dissolves: the sensor exists for detector quantum noise and does not exist for a source quantum-gravity signature. This is a re-census, not a softer reading of Fig 6.

**Status: dissolved by re-census.** Kept visible because a reader will otherwise think the figure has been contradicted by ordinary experimental practice.

### F10 - What actually survives

| claim | mode | figure / source |
|---|---|---|
| The question is a union of four conditions with different anchors | `specified` | Fig 9 :54-55, Fig 2 :29 |
| Detectability is unreachable at this budget, not impossible | `specified`, triangulated | Fig 6 :32-40, Fig 8 :39, Fig 9 :44 |
| A residual is a filter, not a witness for a quantum source | `specified`, triangulated | Fig 9 :30-31, :60, E3 |
| Propagation quantum signatures are bounded by an independent instrument | `specified`, triangulated | Fig 2 :31-32, W4, W6 |
| Which quantum mechanism emits is a `gap`; a shape is returned instead | `gap`, triangulated for the import claim | Fig 13 :115, :137, Fig 9 :32 |
| Any answer must be a per-slot residual surviving a lossy scale transform | `general` shape, `specified` per domain | Fig 1 :19, Fig 4 :27, :30 |
| The null search results are not a proof of absence | `specified` | Fig 8 :39, Fig 9 :44 |

---

## 4. Pre-registered refuter

Written before the conclusion and before any outreach, per Fig 10 and the seat map's rule that a falsifier written before the run is a design instrument. The shape verdict is refuted if any of these fires:

1. **Ground firing (D1/D3):** a per-event, per-detector residual in released GW data survives glitch vetoes, calibration checks and template-systematic checks, and is attributed by an independent, source-discriminating instrument to a quantum-gravity mechanism at high confidence.
2. **Sourced import (D2):** a quantum-gravity theory with its own settled anchor predicts a specific in-band signature shape in advance, with provenance and a shadow test, and that shape is found.
3. **Emission firing (D2):** Hawking-like radiation from a stellar-mass merger remnant is detected above the cosmic microwave background and above detector noise.
4. **Structural refutation (shape):** a re-census shows the scale membrane transform is not lossy for this quantity, so a Planck-scale signature could survive unchanged into the detector band.
5. **Union refutation (F1):** the four conditions are shown to share one anchor, so one measurement settles all of them.

If any fires, the relevant domain verdict is withdrawn and the answer is re-derived from the residual line. Until one is run, nothing in this folder is `grounded`.

---

## 5. Recommendation

1. Lead with the union and the refuter, never with a yes or no. The question as posed is a bundled compound (F1).
2. State mode on every substantive claim. "No detectable quantum signatures" is a budget verdict, not a settled fact (F2).
3. Keep the four domain verdicts separate. Do not average a propagation bound with a detector null into one probability (F1, F6).
4. Require attribution, not just deviation, in any positive claim (F4).
5. Use the public, opt-in venues in `03_public_contact_points.csv` and ask what a refuter would count as failure, not whether the reader agrees (F8).
6. Fig 10 :52: **"Bring a characterised residual, never the source."** Send the shape and the refuter, then the links only if asked.

---

## 6. Canonical usage check

Two local framework documents govern how the figures may be used. They were read after the first five sections and before the retraction log below.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also gives the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"* and then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the seven-step route (SEARCHED, INWARD, OUTWARD) and the mode rule. A gate is not the ground; settling is necessary for composition and not sufficient.

### Strains and re-census

| strain | resolution |
|---|---|
| Detector quantum noise registers, but Fig 6 :40 says no sensor for what never registered | Re-census F9: detector noise is a habitat condition, the source signature is the residual. Different objects. Dissolved. |
| Null searches versus Fig 8 :39 (search finds nothing is never proof of absence) | Not strained. The world source reports a null within a closure; the figure limits what the null may be used for. Both held. |
| A 4.2 sigma echo claim cited in W7 versus the LVK null result W1 | World/world conflict, returned to census, not used to flip a verdict. The anchor is the published detector null with a larger event set and hierarchical combination. Recorded as a live literature disagreement, with no weight in the figure verdict. |
| Future detector proposals versus Fig 6 :32 (instruments improved from worse instruments) | Narrowed, not dissolved. Proposed detectors are sharpened versions of instruments already returning strain, so they are permitted moves on the classical axis. They do not create a sensor for an unregistered quantum quantity. |
| Fig 13 minimality applied to quantum fields | Refused. Fig 13 governs the six-term substrate and composition over it; quantum fields are a different frame. Applying minimality to them would be a category error, so no claim is made about whether a quantum-gravity theory needs a new primitive. |

### Retractions and confirmations of my own earlier readings

| earlier reading | status after the canonical check |
|---|---|
| First pass treated the question as a single yes/no about detector sensitivity | **Retracted.** Fig 9 :54-55 forces the union reading. F1. |
| First pass read the null echo result as evidence that quantum black hole signatures do not exist | **Retracted.** Fig 8 :39 and Fig 9 :44 forbid that upgrade. It is unreachable at this budget. F2. |
| First pass called the missing quantum mechanism a silence | **Corrected.** Fig 13 :134 makes unreachable a verdict. F5. |
| First pass treated any waveform residual as a candidate quantum signature | **Retracted.** Fig 9 :30-31 and E3 require a discriminator. F4. |
| First pass saw a conflict between squeezed light and Fig 6 :40 | **Retracted as a conflict.** Re-census assigns the two to habitat and residual. F9. |
| The shape-not-a-name limit | **Narrowed and confirmed.** It governs a primitive not held in the library. Here no quantum-gravity primitive is held with an anchor, so the slot stays open. Naming a phenomenological parameter is a binding from the physics frame, provenanced as such, not a derivation. |
| Fig 6 route selection | **Confirmed.** SEARCHED was asked first, then INWARD and OUTWARD kept distinct. F3. |

### Result of the canonical check

No figure quote drifted. No figure line was found to govern a name for the quantum mechanism, so the gap is declared rather than filled. One world/world disagreement is recorded and given no verdict weight. The apparent Fig 6 versus laboratory quantum optics strain was dissolved by re-census into two different objects, matching the README's rule that a contradiction signals a misidentified domain.
