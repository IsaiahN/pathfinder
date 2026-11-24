# Figure-grounded audit: how close can real communication systems come to theoretical limits when channels change unpredictably?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (opened 2026-11-23) says LLM output can *"simulate an approximate answer/output with the formula"* while *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local canonical figure text (`03-FIGURES_TEXT.md`), the figures README, `THE_FORMULA.md`, the seat map, `60_FIGURES_AS_METALAWS.md`; three essays by Isaiah N opened 2026-11-23; the public sources in `10_source_ledger.csv`, each opened 2026-11-23.

---

## 0. The residual under audit

> How close can real communication systems come to theoretical limits when channels change unpredictably?

Stated as an effect, not a theory: a transmitter sends at rate `R` over a channel whose behaviour is not fixed in advance. A quantity `C` (theoretical capacity) is offered as the ceiling. The residual is the gap `C - R` that persists after the usual coding effort. What is being decided is whether that gap is:

- **A)** a shortfall against one stable anchor, closable by enough engineering (more blocklength, better codes, more compute), or
- **B)** an artefact of asking the wrong question, because when the channel moves the "theoretical limit" is not one anchor, so the gap cannot be reported without first saying which limit, which knowledge at the transmitter and receiver, which latency and which threat model.

The derivation below finds **B**, with **A** surviving only inside a re-censused domain (fixed channel, known statistics, asymptotic blocklength). Binding the sought-for shape as an ordinary term before the run (formula step "Direction"): the answer we are looking for is *a family of limits indexed by what the frames hold, reported with a measured loss from abstraction to implementation, and a clean split between what more search closes and what requires an import*. That term is written down here so it can accrue a residual and be refused like anything else.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry and scale.**

- **Arity:** at least three frame positions (sender, channel, receiver) plus a maintainer/measurement position. Not a two-body problem: who knows the channel state is a fourth variable.
- **Symmetry:** the claimed bound is asymmetric. capacity with channel state at the transmitter differs from capacity without it; worst-case (adversarial) capacity differs from average (ergodic) capacity. "Symmetric" here would mean the limit is the same regardless of which frame holds which information. It is not.
- **Scale:** per channel use, per block (blocklength `n`), and per adaptive episode (a sequence of blocks across which the channel changes). Per-slot residuals do not aggregate into one global gap (Fig 1 :19, :22).

**One line per domain: actors / currency / anchor.**

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1 Channel / ground | sender, receiver, channel, noise | bits per channel use, error probability | the quantity that actually settles reliability: measured block error rate under a specified state process | yes, when the state process and latency are specified |
| D2 Coding frame | encoder, decoder, codebook, decoder complexity | rate `R`, blocklength `n`, actions to encode/decode | ground settlement of a minted code: measured error at a stated `R`, `n` | yes |
| D3 Knowledge / adaptation frame | transmitter with or without CSI, receiver with or without CSI, estimator, adversary | channel state information, observations, regret | the state sequence itself and the instrument that reads it | yes, when an estimator exists; no instrument means not yet a domain |
| D4 Verification / outreach frame | expert readers, replicators | agreement and residual | the ground (a measured rate/error pair), never agreement | yes |

**No nameable anchor means not a domain yet.** D3 is only a domain when a channel estimator or a defined CSI assumption exists. "The channel changes unpredictably" by itself is not a domain; it is a bound on what D1's anchor can do. It is re-censused at F1.

**Partition or union.** This is a **union compound**, not one hard question. Three conditions overlap: (i) finite blocklength, (ii) unpredictable channel variation, (iii) unknown or adversarial statistics. A single lever that clears one condition leaves the intersections standing. Fig 9 :53: *"Nobody chooses. The gap does, and the gap is only as good as its description."* Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Seat Map :211 carries the same rule: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*

**Dependency order (Fig 3).** perception (read or estimate the channel) → vocabulary (a code that can express a state-dependent action) → objective (a target rate under a stated benchmark) → planning (coding and adaptation strategy) → learn and carry (carry what worked across changes). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* The break in an unpredictable channel is most often at perception/CSI and at learn-and-carry.

**Strain test applied before concluding.** A figure that only fits with a strain governs another quantity. The fixed-channel capacity is a legitimate anchor for a fixed channel; calling it *the* anchor for an unpredictably changing channel strains Fig 2. That strain sends us back to the census (F1), not to a softer reading.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual is per slot; aggregation hides the live signal | governs the rate distribution, not the mean rate |
| **2 The Ground** | anchor must not update; agreement is not triangulation | governs the "theoretical limit" term; re-census owed |
| **3 Dependency Chain** | a broken link cannot be rescued from above | governs where adaptation effort lands |
| **4 The Membrane** | round trip gap `R_T` must be measured | governs the abstract-to-realised gap |
| **5 Mint Pipeline** | guards as a product; MDL bargain | no new primitive is being minted; capacity is a composition |
| **6 Closure / Reachability** | only import moves the wall; depth versus absence | governs CSI as an imported atom and the two instruments |
| **7 Room Chain** | agreement compounds, evidence does not | many readers cannot corroborate the shape claim |
| **8 Union Surplus** | closure idempotent; no search adds an atom | governs why code-only search cannot reach a moving capacity |
| **9 Leave / Arrive** | union before search; describe the residual first; filters are not witnesses | governs the unbundling and the benchmark choice |
| **10 Ground Maintainer** | ground does not decay, channel does; verifier non-access | governs measurement discipline and outreach order |
| **11 The Habitat** | capability is agent-and-habitat; introduce, never subtract | governs adaptation as contact, not agent-only tuning |
| **12 The Bond** | comparison is a threshold relation; two currencies | governs the `R ⋛ C` test and bits versus actions |
| **13 Minimum Viable Set** | set closed, arrangements not; shape not a name | governs capacity as a composition, not a primitive |
| **Operators table** | ⋛ is "a threshold relation between two quantities" | the "how close" test is a comparison, not a merge |
| **Symbols table** | `R` is the aim; `R_T` is the round trip gap | names the two quantities the answer must report |

Strained readings are named in §3 and re-censused in §5, not smoothed over.

---

## 3. Findings

### F1 - When the channel moves, the "theoretical limit" is not one fixed anchor (decisive)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :33: **"The anchor must not update."**
Fig 2 :34: **"the anchor becomes another frame, everything drifts together, and the drift is coherent"**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

For a fixed channel with known statistics, Shannon capacity `C = sup I(X;Y)` is a legitimate anchor: it settles the question and does not move when a coder changes their mind. For a channel that changes unpredictably, that single number no longer settles the question. The literature splits it: in slow fading Wikipedia (opened 2026-11-23) reports *"there is no definite capacity as the maximum rate of reliable communications supported by the channel"* and defines an `ε`-outage capacity instead; in fast fading the meaningful quantity is the ergodic average `E(log2(1+|h|^2 SNR))`. Langberg and Sabag (arXiv:2407.02949, 2024) show that a worst-case benchmark *"may result in low rates for state sequences that are associated with relatively good channels"*, and that a competitive benchmark answers a different question. Bakshi et al (arXiv:2608.28939, 2026) find a dichotomy: *"whenever the authentication capacity is positive, it coincides with the no-adversary Shannon capacity."*

So the residual is not "how close to `C`?" but "which `C`, under which state knowledge, latency and threat model, and does it settle anything?". Applying "anchor must not update" to a single fixed channel is fine. Applying it to a time-varying channel strains, so it governs the frame's knowledge, not the channel. **Re-census performed.**

- Mode: `specified` (falsifiable: exhibit one frame-independent `C` for an unpredictably changing channel that settles reliability without stating CSI, latency and blocklength).
- Status: **triangulated** (Fig 2 plus two world subfields, fading-capacity and competitive/adversarial-capacity, with low overlap).
- Refuter: a single stable limit is produced for the moving channel and is shown to decide the question without any side information. If that holds, F1 fails.

### F2 - The gap is indexed by slot; averaging over channel states hides the live slots

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**

A single mean rate over many channel realisations can look close to capacity while a small set of deep-fade slots carries almost all the error. Fig 1 forbids aggregating that away. Hesham et al (arXiv:2312.10412, 2023) derive not only a spatially averaged rate outage but *"the coding rate meta distribution"*, which is exactly the distributional object the figure asks for. Langberg and Sabag (2024) make the same point from the other side: worst-case optimisation hides the good state sequences.

- Mode: `general` (structural), with `specified` consequences for any system that reports only a mean throughput.
- Status: **triangulated** (Fig 1 plus two distinct world subfields: network finite-blocklength and competitive AVC).
- Refuter: show that the distribution of achieved rate carries no information beyond its mean for the channel class in question, so the per-slot census is idle.

### F3 - Reaching a moving limit requires importing state into the code; a fixed codebook cannot do it alone

Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

A code designed for a fixed channel can be made ever more elaborate inside its own closure and still not reach a capacity that depends on the current state. The missing item is channel state information (or a predictor, or an adaptive input distribution). That item is an atom from the channel-tracking frame, imported into the coding frame. Fig 6 :14 names import **"the only operator that moves the wall"**.

World corroboration: Seifert, Günlü and Schaefer (arXiv:2409.08786, 2024) build a *"finite-blocklength code construction for multi-tap fading wiretap channels without channel state information"*; Hosseinigoki and Kosut (arXiv:2106.07189, 2021) show capacity changes with *"whether the transmitter and/or adversary have access to the fading gains"*, and that with a strong jammer *"the capacity to drop to zero."* Langberg and Sabag (2024) find the encoder *"benefits from varying its input distribution as time proceeds"* even without predicting states. Import here adds no atom to the world; it gives the coding frame access to one (Fig 6 world rule).

- Mode: `specified`.
- Status: **triangulated** (Fig 6 and Fig 8 plus CSI-dependent capacity results from fading and AVC literature).
- Refuter: a fixed, state-blind codebook at a given blocklength and error probability reaches the same rate as a code with full CSI on the same channel class. If shown, F3 fails.

### F4 - The realised gap is a round-trip gap `R_T`: measurable, not eliminable

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
Fig 4 :31: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold"**

Symbols table :77 defines `R_T = gap(x, (T_E ∘ T_A)(x))`: what was sent up (the abstract capacity formula) and what came back down (a measured operating point) will not match, and the mismatch is the honest report of what the abstraction dropped. Hesham et al (2023) put it directly: their results *"demonstrate the discrepancy between the actual network rate and idealistic classical channel capacity."*

- Mode: `general` (structural), `specified` for any given channel class.
- Status: **triangulated** (Fig 4 plus Symbols table plus a world source; note Fig 4 and Symbols table are one framework, so the framework agreement alone is one witness, the world paper is the second).
- Refuter: a channel class is exhibited where the abstraction-to-implementation map is lossless at finite `n` and finite compute, so `R_T = 0` for that class.

### F5 - Depth and absence are different facts and take different instructions

Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."**
Fig 8 :40: **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."**
Fig 9 :43: **"The verdict tells you to leave. The lookup tells you where to go."**

The finite-blocklength penalty is **depth**: the noise-channel coding theorem in Wikipedia (opened 2026-11-23) requires *"for a sufficiently large block length"*, so a short-block system is unreachable-at-budget and the instruction is more search, longer blocks, better decoding. The missing state information in F3 is **absence**: it is underivable from a state-blind code closure and the instruction is import. Importing CSI to fix a merely short block is the error Fig 6 prices: *"a wrong atom costs more than starting from primitives."* Seat Map :207 states the same rule: *"Underivable in principle and unreachable at this budget are different facts, and they issue different instructions."*

- Mode: `general`.
- Status: **triangulated** (Fig 6, Fig 8, Fig 9, seat map, plus the blocklength requirement in the reference source).
- Refuter: show the two cases issue the same instruction for some channel class, collapsing the distinction.

### F6 - The chain usually breaks at perception or at learn-and-carry, not at coding

Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

If the estimator never returns a usable state reading, a better codebook arrives at a planning step whose input never came. Fig 3 :22: *"A step whose input never arrives cannot be diagnosed, only its predecessor can."* The "learn and carry" link is the other candidate: Bernardo, Zhu and Evans (arXiv:2304.10033, 2023, ISIT 2023) study *"the maximum code rate achievable by a data-driven communication system over some unknown discrete memoryless channel in the finite blocklength regime"*, which is precisely a learn-and-carry link for an unknown channel. Krishnakumar and Sinha (arXiv:2501.13551, 2025) study an online scheduler *"oblivious to the current channel rates"* that learns across slots.

- Mode: `specified`.
- Status: **single-source for the figure boundary** (Fig 3), corroborated in direction by two world sources from learning and networking. The figure's "which link breaks" claim is not measured here.
- Refuter: measure a channel class where the break is demonstrably at the planning step with intact perception and intact learn-and-carry.

### F7 - The question is a union; unbundle before searching

Fig 9 :4: **"Split it rather than search."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

The Library of Babel essay (opened 2026-11-23) names the same failure: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* The three conditions (short blocks, unpredictable variation, unknown or adversarial statistics) form a compound with its own ground. Chaudhuri et al (arXiv:2105.03420, 2021) model this directly with compound arbitrarily varying channels, a noisy channel with a *"fixed, but unknown, compound-state and an AVC-state which may vary with every channel use."*

- Mode: `general`.
- Status: **triangulated** (Fig 9, seat map :211, the essay, and a world paper).
- Refuter: show the three conditions are a partition whose intersections are empty for the channel class in question.

### F8 - Agreement cannot substitute for the ground, and a benchmark convention that decides an outcome has stopped being a convention

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**
Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."**
Fig 7 :13: **"agreement compounds, evidence does not"**

Choosing ergodic capacity rather than outage capacity is a convention until it decides whether we say "close to capacity"; at that point Fig 10 :47 applies: *"a convention that decides an outcome has stopped being one."* The decision must be made by the ground, a measured rate and error pair under a stated state process. A large group of readers who all use the same benchmark are one evidence pool, not corroboration. Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*

- Mode: `general` with `specified` consequences for outreach and benchmark reporting.
- Status: **single-source within the framework for the convention rule** (Fig 10 plus seat map, which is one framework) and **triangulated** with the competitive-benchmark literature that shows the choice changes the rate value.
- Refuter: a benchmark is shown to be neutral with respect to the verdict for all channel classes, so the convention/verdict distinction is idle.

### F9 - Capacity is a composition, not a primitive; the framework returns a shape

Fig 13 :3: **"No system functions without any of them, none is built from the others, and everything else is a composition across the two kinds."**
Fig 13 :115: **"The set is closed. The arrangements are not. That gap is why import exists."**
Fig 9 :32: **"you get a kind of thing, never the answer itself"**

Bandwidth (spectrum), signal energy and noise, time and blocklength, gradient (directedness of SNR), and the network of transmitter/channel/receiver are compositions of the six terms, not new primitives. The framework cannot name a single new universal limit for a moving channel; it returns a shape: *a limit that depends on CSI, latency, blocklength and adversarial power, with a stated round-trip gap*. Fig 13 :134: *"Unreachable is a verdict here, not a silence"* applies to the request for one universal number.

- Mode: `general`.
- Status: **triangulated** for the composition rule (Fig 13 plus canonical figures README), **single-source** for applying it to this channel question.
- Refuter: derive a seventh primitive that is capacity itself and show the six-term set is not minimal for communication.

### F10 - What survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| A fixed-channel capacity is a legitimate anchor for a fixed, known channel | `general` | Fig 2 :29-33; world reference source |
| A single fixed-channel capacity does not settle an unpredictably changing channel | `specified`, falsifiable | F1; Fig 2 :34 plus world fading/AVC sources |
| The relevant gap is per slot, not a mean | `general` | Fig 1 :19, :22 |
| Reaching a state-dependent limit needs import of state into the code | `specified` | Fig 6 :21, :23; Fig 8 :32 |
| Finite-blocklength shortfall is depth; missing CSI is absence | `general` | Fig 6 :27; Fig 8 :40 |
| Realised rate versus abstract capacity is a measurable `R_T` | `general` | Fig 4 :30-31; Symbols table :77 |
| The answer is a family of limits, not one number | `specified`, ungrounded | Fig 9 :32; Fig 13 :115 |

---

## 4. Pre-registered refuter (written before the conclusion)

Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim (B above) is refuted if any of the following holds:

1. **Single-anchor test.** A single, stable, frame-independent limit `C` is exhibited for an unpredictably changing channel, and it is shown to settle the reliability question without stating CSI, latency, blocklength or threat model. (Breaks F1 and F9; Fig 2 :29.)
2. **No-import test.** A fixed, state-blind codebook at a given blocklength and error probability is shown to reach the same rate as a code with full channel state on the same channel class. (Breaks F3; Fig 6 :23.)
3. **Zero-gap test.** The abstraction-to-implementation map is shown lossless at finite blocklength and finite compute for the channel class, so `R_T = 0`. (Breaks F4; Fig 4 :30.)
4. **Mean-sufficiency test.** The distribution of achieved rate is shown to carry no reliability information beyond its mean for that channel class, so the per-slot census is idle. (Breaks F2; Fig 1 :19.)
5. **Depth-absence collapse.** The two failure classes in F5 are shown to issue the same instruction for that channel class. (Breaks F5.)

Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **Re-census the limit before comparing to it.** State which benchmark is in play (ergodic, `ε`-outage, worst-case/AVC, competitive) and which side holds CSI, latency and blocklength. Do not report a bare "fraction of capacity" (F1, F8).
2. **Report the distribution, not the mean.** Include per-slot or per-realisation rate/error so a deep-fade slot cannot be averaged away (F2).
3. **Target the two weak links.** Put instrumentation into channel estimation/CSI and into learn-and-carry adaptation before refining an already working codebook (F6, F3).
4. **Price the round trip.** Report `R_T` between the abstract capacity formula and the measured operating point as a quantity, not as a quality score (F4).
5. **Split budget from verdict.** Use blocklength and compute estimates as filters for what gets tried; let a measured rate/error pair under a stated state process be the witness (F8, F5).
6. **Unbundle before searching.** Treat short blocklength, unpredictable variation and unknown statistics as a union compound with its own loop (F7).
7. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the shape claim and its pre-registered refuter, not a list of impressive throughput numbers.

---

## 6. Canonical usage check (figures README and WATSON 60, 2026-11-23)

Two local canonical sources were read after §§0-4 and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also says a reading that makes figures contradict one another has misidentified its domain, and that the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments stop distinguishing, recording the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* So the re-census in F1 is a derivation, not a request for a ruling.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Fig 2 says capacity is not an anchor at all" | **Refined, not kept.** Fig 2's anchor test governs whatever settles the question. For a fixed known channel, `C` passes. For a moving channel, the fixed-channel `C` does not settle it, so the anchor must be re-censused (outage, ergodic, worst-case). Different objects, no strain. |
| "Missing CSI is another kind of unreachability, like short blocklength" | **Retracted and split.** Re-census (F5) puts blocklength in the depth/budget bin and CSI in the absence/import bin. Fig 8 :40 makes them different facts with different instructions. Both readings are recorded here so the correction stays visible. |
| "The framework names the right benchmark" | **Refused.** The README's "shape, not a name" governs a missing primitive. For this question the missing thing is the operating limit for an unpredictable channel; the framework returns a family indexed by frame knowledge, not a single name. Benchmark choice is a convention until it decides an outcome (Fig 10 :47), and then it is not a convention. |
| "Importing CSI adds an atom to the world" | **Refused.** Fig 6 :25: *"An import adds no atom to the world."* It gives the coding frame access to an atom the channel frame already holds. |
| "Many expert readers corroborate the shape claim" | **Refused.** Fig 7 :13, Fig 2 :40, Seat Map :163. Agreement inside one evidence pool is one witness. |
| F1 (limit re-census) | **Canonically confirmed.** Consistent with the metalaw reading: figures decide design questions, so the anchor question is derived, not escalated. |
| F4 (round trip) | **Confirmed and sharpened.** Fig 4 :30 requires the gap be measured. The Symbols table names it `R_T`. Treating capacity as identical to its implementation would set `R_T = 0` and is the dead-reckoning error. |

### Seven-question recursive derivation (summary)

1. **One limit or many?** Many, under frame knowledge. Fig 2 :29-34 plus fading/AVC literature.
2. **Is the gap an average?** No. Fig 1 :19, :22. Per-slot residual is the live signal.
3. **Can a fixed code reach the moving limit?** Not without import. Fig 6 :21, :23; Fig 8 :32.
4. **Is the shortfall depth or absence?** Both, in different domains. Fig 6 :27; Fig 8 :40.
5. **Is the framework naming a new primitive?** No. Capacity is a composition. Fig 13 :3, :115.
6. **Is anything settled?** No. Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* Status `candidate`.
7. **What is the route?** Unbundle (Fig 9 :54), re-census the anchor (F1), import state (F3), measure the round trip (F4), then let the ground decide (Fig 9 :42).

---

## 7. Updated verdict

The shape survives: **for a channel that changes unpredictably, the honest theoretical limit is a family indexed by what the frames hold (CSI, latency, blocklength, adversarial power), the realised gap is the measured round trip to that limit, and the work is split between what more search closes and what requires an import.** The single-number framing ("we are at 90% of capacity") is refused until a benchmark and a state model are stated and a ground measurement is produced.

Triangulated: F1, F2, F3, F4, F5, F7, F8 (in part), F9 (in part). Single-source: F6, F8's convention rule within the framework, F9's application. Strains after re-census: **none hidden**; one live limitation remains, namely that the "right" benchmark is choice-dependent until the ground settles it, which is recorded as F8 rather than smoothed away. Mode: `specified`, ungrounded, candidate.

This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.
