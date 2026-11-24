# Figure-grounded audit: how a learner detects invalidation

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured in a real learner. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23) states that *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement of a learner was taken.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. Public: the concept-drift and venue pages recorded in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual under audit

> **Question (source line 83):** How can learners detect when the environment has changed enough to invalidate what they previously learned?

Restated as an effect, with no theory named: a learner holds terms that were paid for by the ground in the past. It acts, observes, and forms a residual `R = |Γ(b,a) − o'|` per slot `s` (formula step 1). After an environmental change, predictions keep missing. The decision is which bin the missing goes into: nothing owed, extend perception, re-fit a binding, mint a mechanism, or refuse a held term. The threshold for "enough" is not given by the question; it is the sought-for shape, and the method must bind it as an ordinary term before the run (Fig 5 :65).

**Proposal header (seat-reasoning discipline).**

```
DECIDES:    What shape must a drift detector have, given that R is per-slot, that the
            invalidation bin is the one sorted by what is WRONG rather than missing,
            and that an anchor which updates on the learner's own output hides drift
            coherently. Answer: per-slot, persistent-and-flat, pinned-anchor,
            independent, refusable. Not an algorithm name (Fig 1 :19; Fig 5 :53;
            Fig 2 :33-34; Fig 9 :32).
HOURS:      One deep pass plus independent re-census; comparable to the exemplar,
            roughly 2-4h of agent time. No new instrument was built.
PRIOR CASE: QMGR-0037, the imported exemplar. Its method (retractions visible,
            mode on every claim, shape not a name, refuter before conclusion) is
            carried here; its subject is different, so no result is carried.
ANALOGUE:   A spectrometer discriminating sources behind one green reading (Hard
            Problem is About Source, 2026-08-28): three drift causes produce one
            residual reading, and only a source-discriminating instrument separates
            them. Analogue corroborates; it does not decide.
LIMIT:      A finite search cannot certify absence (Fig 8 :39, Fig 9 :44). The
            detector shape is `specified`, never a proof of no drift. All seats here
            share one evidence pool, so agreement is internal consistency only.
```

---

## 1. Domain census before choosing any figure line

**R by arity, symmetry and scale.**

- **Arity:** at least two conditions, the learner's held terms and the generating process now in contact with them. The decision also splits three ways underneath (habitat change, channel decay, genuine falsity). That is a **union compound**, not one hard question. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* A single lever clears the region where one condition holds and leaves the intersections standing.
- **Symmetry:** anisotropic. R is indexed by slot, not by run. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*. Any detector that begins by averaging has already erased the signal it is looking for.
- **Scale:** the signal arrives inside one scale (steps 1 to 5). The decision to refuse a term changes the controller's vocabulary, which is a step-3 event, and the decision about the habitat crosses the membrane (Fig 4). The detector therefore has a within-scale loop and a cross-scale note, and they are not the same claim.

**One line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet.**

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 the environment / habitat | actors, conditions, relations in contact with R; conditions, light, season, terrain (Fig 11 :46) | contact | the ground: what settles, and does not update (Fig 11 :73) | union with D2 at the observation; distinct object from the ground |
| D2 the learner's loop and channel | Γ, b, w, a, o′, slots s, the instrument reading the anchor | residual R per slot; cost in bits and actions (Fig 12 :126) | the same ground, reached through a channel that can decay (Fig 10 :24) | partition of R into five bins |
| D3 the checking arrangement | held-out readings, second closures, outside frames | independence, how little evidence is shared (Fig 2 :31) | the ground, never agreement (Fig 7 :35) | separate frame; must not be pooled with D2 |

All three domains have nameable anchors, so all three are domains. There is no fourth domain for "the threshold" because a threshold is a preference until it is bound as a term (Fig 5 :65), not a domain with its own ground.

**Order by dependency (Fig 3).** The chain is perception, vocabulary, objective, planning, learn and carry (Fig 3 :4 to :15). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* A step whose input never arrives cannot be diagnosed (Fig 3 :22), so:

1. D1 contact must reach D2 perception before any drift verdict is readable. If the channel is dead, the figure's output is a verdict about contact rather than about the world (Fig 10 :27-28, *"you have lost touch"*).
2. Within D2, refuse before mint (formula step 2); the fifth bin is not reachable by the other four.
3. Within D2 no-term case, SEARCHED first, then INWARD, then OUTWARD (formula step 7); the two instruments are opposed.
4. D3 checks the result against an anchor that does not update, using independent frames, and never by pooling agreement.

---

## 2. Figure census (quoted verbatim from `03-FIGURES_TEXT.md`)

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | R per slot; aggregation destroys the live signal; frame-internal quantities cannot score the frame | governs D2, triangulated with Symbols table |
| **2 The Ground** | anchor must not update; coherent drift; independence; correlation valence | governs D1 anchor and D3, triangulated |
| **3 Dependency Chain** | order by dependency; reading below a break is a reading of nothing | governs the sequence of checks |
| **4 The Membrane** | cross-scale transform is lossy; round-trip gap `R_T` | governs the note, not the core detection |
| **5 Mint Pipeline** | four missing-bins plus fifth wrong-bin; persistent-and-flat residual; settling is necessary not sufficient | governs D2 decision, triangulated with formula |
| **6 Closure / Reachability** | two opposed instruments; instruments improved from worse ones; depth versus genuine absence | governs the instrument question and the limit |
| **7 Room Chain** | agreement is variation, not a verdict | governs D3 |
| **8 Union Surplus** | search finding nothing is not proof of absence; overlap collapses frames | governs the honest stop and D3 independence |
| **9 Leave / Arrive** | residual first frame second; union unbundling; filters for budget, witnesses for verdict | governs the method, not a detector name |
| **10 Ground Maintainer** | ground does not decay, channel does; keep anchor reachable; verifier non-access | governs D1/D2 split and D3 |
| **11 The Habitat** | habitat updates, ground does not; enumerate habitat; isolation substitutes | governs D1 |
| **12 The Bond** | same reading different cause; two currencies do not add | governs isomer analysis in `06` |
| **13 Minimum Viable Set** | no privileged stratum; derived quantities are what a turn leaves | background, no direct governance of detection |
| **Operators table** | negation is the refusal operator, not a bond | governs what the fifth bin owes |
| **Symbols table** | R is the aim and always a slice; slot is never aggregated | governs D2, triangulated with Fig 1 |

Strained readings are named in section 5, not smoothed over.

---

## 3. Findings

### F1 - Measure per slot; a global average is not a detector (triangulated, `specified`)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**

Symbols table :38-39: *"It is the aim, not only the error signal, and it is always a slice"* (attributed to the Symbols table, not checked as a Fig N quote).

A learner that tracks only global error can be wrong on one live slot while every headline metric is green. This is exactly the "produced, recorded, and not read" failure genus in the seat map: the evidence exists and nothing looks missing. The detector's first design constraint is therefore structural, not statistical: keep R indexed by slot and refuse to collapse it. Fig 2 :44 calls the same arithmetic a warning when read as effective-sample-size correction; here the warning is that the pooled number is not the quantity that decides.

**Refuter:** show a learner whose global residual is flat while one slot's residual persists and does not trend down, and which detects invalidation as early and as reliably with the per-slot reading removed. If that holds, F1 is false.

### F2 - The invalidation signature is a residual that persists and does not trend down (triangulated, `specified`)

Fig 5 :51: **"The four kinds sort a gap by what is missing. None of them sorts a gap by what is wrong."**

Fig 5 :53: **"refuted: a term we hold is wrong; a term is owed that says so"**

Fig 5 :59: **"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"**

Fig 5 :60: **"The selector asks which residual is improving; this asks which one keeps being wrong and is not."**

The formula's route step states the same test with the opposite sign: the candidates for refusal are every bound, predicting term, ranked by the residual that persists and does not trend down. This is the central figure-grounded answer to "enough." "Enough" is not a raw magnitude and not a single spike. It is the persistence of a non-improving residual on a held term. A transient that shrinks is a coincidence or noise, and the shrinking test already has a bin for it. A spike that decays after a re-fit is a broken binding, not an invalidated term. Only the flat, persistent residual points at a term to refuse.

The fifth bin is not a rearrangement of the first four. The formula says no arrangement of the other four reaches it. Negation is the operator owed (Operators table :57: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*, attributed to the Operators table), so a learner whose vocabulary has re-fit but no refusal can be corrected and cannot carry the correction.

**Refuter:** exhibit a held term whose residual persists and does not trend down, and for which re-fitting the binding or extending perception removes the failure with no residual left over. If that is generally possible, the flat-persistent residual does not mark invalidation and F2 is false.

### F3 - The four bins are distinct verdicts; do not collapse drift into refusal (single-source for the figure amendment, triangulated with the formula)

Fig 5 :12: **"new: extend perception, aim the probe here"**

Fig 5 :13: **"mis-attached: refit what you have, do not invent"**

Fig 5 :14: **"mechanism broken: a new term is owed"**

Fig 5 :11: **"held: the model was right, nothing owed"**

Fig 5 :50: **"AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it."**

An environmental change does not always invalidate learning. New conditions are NOVEL (extend perception). A changed mapping of the same conditions is REBINDING (re-fit, do not mint). A genuinely new generating mechanism is a MINT. Only a false held term is REFUTED. The question's phrase "changed enough to invalidate what they previously learned" compresses these four into one, so the first act of the census is to unbundle them (Fig 9 :54). A detector that fires a refusal on every distribution shift pays for a mint or a re-fit with a refusal instead, and a vocabulary that refuses too early loses the standing to compose over terms that were still good.

**Refuter:** show that all four bins issue the same remedy at the ground, that is, that re-fit, mint, extend and refuse are interchangeable for every observed change. If so, the five-way partition is bookkeeping, not a result.

### F4 - An anchor that updates hides drift coherently (triangulated, `specified`)

Fig 2 :25: **"pinned: it does not update on A or B"**

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 2 :33: **"The anchor must not update."**

Fig 2 :34: **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."**

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

This is the reason a learner can fail to notice its own invalidation. If "correct" is defined by the learner's own current predictions, or by a moving average of them, the anchor has become a frame. The system and its criterion drift together, and the drift is coherent, which is why internal instruments stay green. The fix is structural: range against an anchor that does not update on the learner's opinion. A held-out reading, a fresh experiment, an external counter, a label that stabilises later. The Wikipedia concept-drift article (opened 2026-11-23) reports the same shape in field terms: labels initially incorrect *"typically stabilize toward their ground truth"*, so treating the early label stream as the anchor is treating an updating frame as ground.

**Refuter:** show a learner whose anchor is updated by its own predictions and which detects invalidation as reliably and as early as one with a pinned anchor, under the same change. If so, the pinning rule is not doing the work claimed here.

### F5 - The environment that changes is the habitat, not the ground (triangulated, `general` to `specified`)

Fig 11 :73: **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."**

Fig 10 :24: **"the ground does not decay, the channel does"**

Fig 10 :25: **"stale percepts, dropped transients, saturated metrics, pooled readings"**

Fig 10 :27-28: *"the output is not a verdict, it is"* / *"you have lost touch"* (attributed to Fig 10 line wrap; the sense is that the maintainer's output on a dead channel is a verdict about contact, not about the world).

This resolves the apparent contradiction between "concept drift is real" and "the ground does not decay." What changes is the habitat: the actors, conditions and relations in contact with the residual (Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*). What must not change is the thing that settles whether a prediction paid. A second failure mode sits beside the first: the channel to the ground decays. A saturated metric or a pooled reading produces the same flat residual as a genuine habitat shift. The learner owes two different verdicts, *"the world changed"* and *"you have lost touch"*, and only one of them licenses a refusal of held terms. Fig 10 :29 closes the office: *"→ keep the anchor reachable"*.

This is also why the detector must enumerate the habitat rather than compose it. A first-order scoping misses the cascade; the drift that matters can be three steps out, as the seat map's DDT example records.

**Refuter:** show a case where channel decay and habitat change require the same remedy, so that discriminating them buys nothing. Or show a learner that reliably separates them with no independent reading of the channel.

### F6 - Independence, not the number of detectors, is what a check buys (triangulated, `general`)

Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."**

Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

Fig 8 :50: **"Two frames that overlap almost completely are one frame wearing two names."**

Adding more monitors trained on the same stream is adding spellings, not searchers. Fig 6 :55 states the same quantity for the budget: searchers drawing on the same evidence are one searcher wearing many names. For a drift alarm, the meaningful check is a second frame with a different closure reading the same residual, for example a held-out performance reading beside a feature-distribution reading, and even then their agreement is one pool talking unless the evidence is genuinely disjoint. The cost of being wrong sets how much independence to buy, not how many copies to run.

**Refuter:** show two detectors with fully shared evidence whose agreement carries as much information about the residual as two detectors with disjoint evidence. If so, independence is not the quantity here.

### F7 - No finite search certifies "no drift" (triangulated, `general`)

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."**

A detector that has not fired has not proved stability. It has failed to find a drift within its reach, which could be budget depth or genuine absence, and from inside those look the same. The honest output is a bounding statement with its reach and window recorded, not "no change detected, therefore no change." Fig 13 :134 gives the form: *"Unreachable is a verdict here, not a silence"* (attributed to Fig 13, not used as a Fig N quote here). This is the limit that keeps the answer `specified`.

**Refuter:** produce a finite, inside-the-frame procedure that certifies no drift of any shape is present. Since that would require a sealed room, a successful production would refute Fig 9 :44 and the whole metalaw reading, not just this solution.

### F8 - The specific detector is a binding, not a derivation (triangulated with the canonical README)

Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

Fig 6 :34: **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."**

Fig 9 :32: **"you get a kind of thing, never the answer itself"**

The canonical figures README states the limit as *"what a missing thing would have to look like (a shape, not a name)"*. The framework therefore returns the shape of a drift detector, not ADWIN, DDM, Page-Hinkley or any other algorithm. Those are bindings from the machine-learning frame, admitted by provenance like any other import. What the figures do govern is the instrument question: an instrument is extended from one already returning something, so the choice among real detectors is driven by what is already registering a failing residual, not by a description of an ideal detector. The River ADWIN documentation (opened 2026-11-23) gives an instance: it *"compares the average of W0 and W1 to confirm that they correspond to the same distribution"*, which is a working proto-instrument, not a figure consequence.

**Refuter:** derive a named detector's thresholds and window from the figures alone, with no binding from the ML frame. If that succeeds, F8 is false and the shape limit is narrower than claimed.

### F9 - Bind the sought-for threshold as an ordinary term before the run (single-source for the figure discipline, corroborated by the seat map)

Fig 5 :65: **"Write down what an answer would look like, bind it, and let it accrue a residual like anything else."**

Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**

The seat map states: *"a falsifier written before the run is a design instrument, not only an honesty device."* A detector's threshold and window are a PREFERENCE until they are written down. Unbound, they predict nothing and accrue no residual, so no internal check can see them. A learner that chooses the threshold after seeing the stream will find the drift it was looking for. The pre-registered criterion in section 4 is the mechanism by which the preference becomes refusable.

**Refuter:** show a run in which choosing the threshold after observing the stream is as diagnostic as choosing it before, across the same drift events. If so, the direction check buys nothing here.

### F10 - What survives and what is refused

| claim | mode | status | figure |
|---|---|---|---|
| R must stay per slot; a global average is not sufficient to detect a live slot | `specified` | survives, triangulated | Fig 1 :19, :22, :13 |
| The invalidation signature is a persistent, non-trending-down residual on a bound term | `specified` | survives, triangulated | Fig 5 :51, :53, :59, :60 |
| Re-fit, mint and extend are distinct from refusal, and do not reach it | `specified` | survives, single-source for the amendment plus formula | Fig 5 :11-14, :50 |
| The detector needs an anchor that does not update on the learner | `specified` | survives, triangulated | Fig 2 :25, :29, :33, :34 |
| Drift is in the habitat; the ground does not decay, the channel does | `general` | survives, triangulated | Fig 11 :73, Fig 10 :24 |
| Independence, not detector count, sets the value of a check | `general` | survives, triangulated | Fig 2 :31, :40, :42; Fig 7 :35 |
| No finite search proves absence of drift | `general` | survives, triangulated | Fig 8 :39, Fig 9 :44 |
| ADWIN or DDM is *the* answer | `specified` | refused as written | Fig 9 :32, Fig 6 :32 |
| A global error average is enough | `specified` | refused as written | Fig 1 :19, :22 |
| Any named threshold can be derived from the figures | `specified` | refused as written | canonical README, shape not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat map, *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A learner detects invalidation as early and as reliably with R aggregated across slots as with R indexed per slot, when one slot is live and the global residual is near zero. (Breaks F1, Fig 1 :19, :22.)
2. A learner whose anchor updates on its own predictions detects drift as reliably as one with a pinned anchor under the same change. (Breaks F4, Fig 2 :33-34.)
3. A residual that persists and does not trend down is reliably removed by re-fitting or extending perception with nothing left over. (Breaks F2,Fig 5 :59-60.)
4. A detector certifies "no drift of any shape" from a finite inside-the-frame search. (Breaks F7, Fig 9 :44.)
5. Channel decay and habitat change are shown to require the same remedy in every case, so the discrimination buys nothing. (Breaks F5, Fig 10 :24, Fig 11 :73.)

If any fires, the corresponding finding is withdrawn. Until one is run, nothing here is `grounded`.

---

## 5. Strains, re-census and retraction log

**Strain 1, first reading of Fig 10.** Initial reading: "the ground does not decay" denies concept drift. Re-census: Fig 11 :73 separates the habitat (updates) from the ground (does not). Different objects, so no contradiction. The reading was corrected, the figure was not.

**Strain 2, world ADWIN averages a window.** River's ADWIN compares averages of two sub-windows, while Fig 1 :19 forbids aggregating across slots. Re-census: the figure's slot is an object or region tracked; the window average is over time for one scalar stream. Different objects. The strain is **named, not hidden**: a scalar error stream that already pools slots will lose the one-live-slot signal before ADWIN sees it. The detector should run per slot or per disjoint frame, not on a pooled scalar.

**Strain 3, partial invalidation.** When only some slots change, is a refusal owed for the whole term or only for its changed bindings? Fig 9 :54 governs: unbundle the union before searching again. The residue is categorically different, a compound of changed and unchanged conditions, and a single global refusal is a wrong cut. Recorded as an open implementation question, not smoothed.

**Retraction log.**

| earlier reading | status after re-census |
|---|---|
| "All drift is REFUTED" | **Retracted.** Only persistent-and-flat residual on a held term is REFUTED; novel conditions and broken bindings have their own bins (F3). |
| "The ground changes in concept drift" | **Retracted and replaced.** The habitat changes; the ground does not; the channel decays (F5). |
| "A named detector is the answer" | **Refused.** The framework returns a shape, not a name (F8). |
| "Global error rate is the residual" | **Refused.** R is per slot (F1). |
| "No drift detected means no drift" | **Refused.** Search finding nothing is not proof of absence (F7). |
| Apparent Fig 10 versus concept drift conflict | **Dissolved by re-census** (Strain 1). Consistent with the canonical rule that a reading making figures contradict one another has misidentified its domain. |

**Canonical usage check.** The local `FIGURES_README_canonical.md` was read after sections 0 to 3. Its governing sentences were applied: the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary"*; a reading that makes figures contradict one another *"has misidentified its domain, not found a flaw"*; the framework returns *"a shape, not a name"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest"*; *"Indiscernibility is not identity"*. Accordingly no world source was allowed to flip a verdict; the ADWIN strain went back to the census and was resolved by distinguishing slot from window, exactly as the README prescribes.

**Round-trip note.** The condensation from figures to the shorthand "per-slot, persistent-and-flat, pinned anchor, independent, refusable" loses at least three constraints when brought back down: the five-way bin distinction, the habitat/channel split, and the no-certificate-of-absence limit. `11_audit.md` measures this qualitatively as `R_T`. Treating the shorthand as the whole law set would be the dead-reckoning error Fig 4 :30 names.
