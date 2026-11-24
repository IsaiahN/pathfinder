# Figure-grounded audit: how much can nearby systematics move the local H0 measurement?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-23): LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the empirical question it reports on. No measurement was taken here. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, and the world sources listed in `10_source_ledger.csv`. All figure quotes below are verbatim substrings of the local figure-text extract, cited as `Fig N :line`.

---

## 0. The residual, stated in effect terms

The local distance ladder returns a Hubble constant near 73 km/s/Mpc; the CMB + LCDM inference returns about 67.4. The question asks: how much of that gap could be produced by dust, stellar populations, or distance-ladder choices, acting on nearby measurements?

Restated as a residual R: a ladder frame predicts the apparent brightness (distance modulus) of standard candles after corrections; observation returns their actual brightness. The gap R is the per-object, per-rung discrepancy between prediction and observation. The question is the **source** of that gap: a defect in the measurement channel (dust extinction law, crowding, metallicity and host-mass effects, calibration and rung choices), or a feature of the ground (the true expansion history).

**Bound the sought-for shape as an ordinary term now** (Formula, "Direction"): an answer is acceptable only if it is (a) indexed per systematic slot, (b) explicit about independence between the frames being compared, (c) silent on the numerical size until a source-discriminating instrument settles a slot, and (d) addressed to the channel rather than to the ground. This is the preference the loop cannot check on itself, so it is written down before the derivation and is refutable in section 3.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry and scale

- **Arity: multiple, not one.** The question names three effects (dust, stellar populations, ladder choices) plus their intersections (e.g. dust and crowding both bias Cepheid near-infrared photometry; host mass covaries with SN colour corrections). Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* This is a **union compound with its own loop**, not one hard number.
- **Symmetry: ordered, not interchangeable.** Dust acts through an extinction law (R_V, reddening law); stellar populations act through metallicity, crowding and host-galaxy properties; ladder choices act through which rung, anchor or photometric system is used. They are ordered: rung 1 (geometric anchors: masers, eclipsing binaries, parallaxes) must be settled before rung 2 (Cepheids or TRGB in SN hosts), which must be settled before rung 3 (Hubble-flow SNe Ia). Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Different channels can converge on the same observed bias (Fig 8 :50), so their agreement is not additive.
- **Scale: per-object residuals amplify up the ladder.** Small per-star photometric biases propagate through rung 2 and rung 3 into the inferred H0. Fig 11 :52: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* The effect of a calibration choice is three rungs out.

### 1.2 One line per domain: actors, currency, anchor

No nameable anchor means it is not a domain yet. Each of these has one.

- **Domain 1, the local distance-ladder measurement frame.** Actors: Cepheids, TRGB stars, SNe Ia, the NGC 4258 maser, detached eclipsing binaries, Gaia parallaxes, HST/WFC3 and JWST/NIRCam, dust, crowding, metallicity, host mass, calibration choices. Currency: distance modulus and magnitude residuals, H0. Anchor: geometric distances and the actual expansion rate; these do not move when teams argue. Fig 10 :24: *"the ground does not decay, the channel does."*
- **Domain 2, the early-universe inference frame.** Actors: CMB (Planck), BAO, the LCDM model, the sound horizon. Currency: model-inferred H0. Anchor: the observed CMB anisotropies is a ground reading, but its H0 value is model-mediated, so the *inference* is a frame. Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* The question is about the reading, so the reading is only an instrument here.
- **Domain 3, the verification / comparison frame.** Actors: independent teams, instruments and pipelines (SH0ES, CCHP, and others). Currency: residuals and independence. Anchor: the ground, never agreement. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- **Domain 4, the outreach / publication frame.** Actors: distance-ladder systematics researchers, reviewers, editors. Currency: checkable residuals. Anchor: published data, code and instruments. Fig 10 :52: *"Bring a characterised residual, never the source."*

### 1.3 Partition or union

D1 and D2 are **frames ranging against one ground**, not two grounds; their H0 values are two readings of one quantity. Fig 13 :35: *"Space, time and energy are not three readings of one quantity. Neither are spectrum, gradient and network."* The same independence rule applies to readings: if two readings draw on the same underlying calibration, their agreement carries no information. The three named systematics within D1 are a **union** (overlapping conditions), not a partition, so they must be unbundled before a search (Fig 9 :54). The question itself is a compound (channel defect vs ground feature) crossing D1 and D3.

### 1.4 Order by dependency (Fig 3)

1. Perception: resolve each per-slot residual separately (Fig 1 :19). 2. Vocabulary: do we have terms for each systematic (extinction law, crowding, metallicity, host mass, rung choice)? 3. Objective: what counts as a resolved slot (a source-discriminating instrument, not agreement)? 4. Planning: which instrument or subsample reduction reduces which slot? 5. Learn and carry: name what worked and carry the method, not the number, to the next host. Effort spent on rung 3 precision cannot rescue a broken rung 1 anchor (Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*).

---

## 2. Figure census and findings

Every line below was read from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. Strained readings are named, not smoothed over. Verdicts are kept per domain and never averaged.

### F1 - Keep the residual per slot; do not aggregate into one error number (governs D1)

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*
Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

The three named effects are three slots. A single "total systematic budget" in km/s/Mpc is an aggregate; it can be near zero while one slot is live. Fig 1 :13 (a global residual near zero with one live slot residual is a legal state) makes this explicit. The world literature cooperates: the Riess et al. 2019 LMC error budget lists LMC P-L mean 0.42%, DEB mean 1.20%, count-rate nonlinearity 0.11%, LMC geometry 0.09%, photometry methods 0.14% as separate lines, total 1.28%. The separation is what makes the budget actionable. **Mode: `general` (structural). Triangulated** across Fig 1 and the published per-line error budget (low overlap: metatheory vs photometry).
**Refuter:** show that dust, population and ladder-choice effects share one generative mechanism such that a single aggregated residual is sufficient to locate the fault. If so, Fig 1's per-slot rule does not apply to this residual and F1 falls.

### F2 - The ground does not decay; the channel does (governs D1)

Fig 10 :24 *"the ground does not decay, the channel does"*
Fig 10 :25 *"stale percepts, dropped transients, saturated metrics, pooled readings"*
Fig 10 :28 *"you have lost touch"* (the output of a degraded channel is not a verdict)

Dust extinction, crowding, metallicity effects and calibration choices are channel defects. They change the reading, not the expansion rate. "Keep the anchor reachable" (Fig 10 :29) means: keep geometric distances and independent standard candles live so the ground can still be ranged against. The world literature: Riess et al. 2023 (JWST) found crowding bias in HST Cepheid photometry is not significant, and Wojtak et al. 2025 found a dust-model bias of order 1.5 km/s/Mpc (30 per cent of the tension) in Pantheon+ calibration galaxies. Both are statements about the channel. **Mode: `specified`. Triangulated** (Fig 10 plus two independent photometric analyses; note overlap, both use HST/SN data).
**Refuter:** demonstrate that a dust or population change actually moves the ground (a local environmental modification of the expansion rate) rather than the reading. If the effect is in the ground, F2 is wrong.

### F3 - Independence decides whether agreement means anything (governs D3)

Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence."*
Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."*
Fig 8 :48 *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."*

Two ladder analyses that share the same Gaia parallaxes, the same WFC3 zero points or the same SN compilation share an evidence pool; their agreement is the pool talking, not two frames confirming each other. Freedman et al. 2019 is the clean case: *"There are no measurements in common between these two methods; therefore, the results are an excellent test of systematics"* (TRGB/CSP vs maser+parallax Cepheids/Supercal). Fig 8 :50 *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence"* distinguishes this from adopted import. **Mode: `specified`. Triangulated** (Fig 2 plus Fig 8 plus the published independence claim; low overlap on the TRGB comparison).
**Refuter:** show that two analyses sharing all calibration inputs are nevertheless independent in the figure's sense, or that their agreement is convergent derivation rather than a shared pool. Either breaks F3.

### F4 - Describe the effect, not the cause; a shape, never the number (governs D1, D2, D4)

Fig 9 :30 *"your words are borrowed too, so describe the effect rather than the cause"*
Fig 9 :32 *"you get a kind of thing, never the answer itself"*
Fig 13 :134 *"Unreachable is a verdict here, not a silence"*

The figures are a metatheory of residuals, closure and grounds. They contain no line that returns "dust contributes 1.2 km/s/Mpc." So a figure-grounded answer to "how much" is a shape: the form any defensible magnitude must take (per-slot, independence-weighted, channel-directed, instrument-settled), with the magnitudes themselves left open. This is not evasion; Fig 9 :32 is the explicit limit. **Mode: `general` (structural). Triangulated** (Fig 9 + Fig 13 + figures README *"a shape, not a name"*).
**Refuter:** produce a figure line that quantifies a systematic's numerical magnitude. If one exists, this finding and the metatheory reading are wrong.

### F5 - Instruments are improved from worse instruments already returning something (governs D1)

Fig 6 :33 *"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."*
Fig 6 :34 *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."*

JWST/NIRCam did not replace an imagined ideal photometer; it refined HST's blending-limited reading (Riess et al. 2023 reduced the Cepheid P-L dispersion from 0.45 to 0.17 mag). Gaia parallaxes and DEB distances refined the same geometric anchor. The blue-SNe subsample (Gall et al. 2024) is a refinement of an existing colour correction, not a new instrument conjured from a description. **Mode: `general`. Single-source** for the figure line (Fig 6), corroborated by the world cases.
**Refuter:** exhibit a distance-ladder instrument designed from a pure description with no prior reading that resolved a systematic. Fig 6 says no such design route exists; one would refute it.

### F6 - A null result is a bound at the resolution reached, not proof of absence (governs D1, D3)

Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*
Fig 9 :44 *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*

Riess et al. 2019 "not attributable to an error in any one source or measurement" and Riess et al. 2023 "do not play a significant role in the present Hubble Tension" are bounds at achieved resolution, not declarations that no channel defect exists. Wojtak et al. 2025 and Gall et al. 2024 show slots still live at that resolution (dust model, ~1.5 km/s/Mpc; blue-SN subsample, ~3 km/s/Mpc). Also distinguish underivable-in-principle from unreachable-at-this-budget (Fig 6, Fig 8 :40-43): importing a new systematic against a budget limit adds an atom that was not needed. **Mode: `specified`. Triangulated** (Fig 8 + Fig 9 + opposed world results).
**Refuter:** identify a sealed room here, a frame whose closure is complete and exhaustively searched, so that a null result would be a proof of absence. None of D1 to D4 is sealed.

### F7 - A new systematic is owed only if the three mint guards pass (governs D1)

Formula step 3: SUPPORT `|R_s+| > 0` for some s; REACHABILITY `phi in closure(Gamma)`; NOVELTY `phi not in atoms(Gamma)`.
Fig 5 :41 *"Any one of them at zero stops the mint entirely."*
Fig 5 :48 *"Its own output is never a measure of success."*

A claimed new systematic term is accepted only if a per-slot residual persists (support), the term composes from held photometry and calibration concepts (reachability), it is not already in the library (novelty), and it pays the description-length bargain. The dust-law modifications in the literature are exactly this kind of term; they are candidates until the ground settles them, not verdicts. **Mode: `general`. Triangulated** (Fig 5 + Formula).
**Refuter:** a proposed systematic that fits the residual but whose description costs more than the confusion it removes, yet is admitted as a settled term. That breaks the mint bargain.

### F8 - Filters for the budget, witnesses for the verdict (governs D4)

Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

Ranking the three systematics by apparent size is a budget filter: it says where to point JWST time or which subsample to cut next. It is not a witness that the tension is solved. Coverage, number of papers and fit statistics are frame-internal quantities, not the ground. **Mode: `general`. Single-source** for the rule (Fig 9), corroborated by Fig 1.
**Refuter:** a case in which the size ranking of systematics is itself the ground settlement. By Fig 9 :60 this cannot happen; if it does, the rule fails.

### 2.1 Domain verdicts, kept separate

| domain | verdict | status | figure basis |
|---|---|---|---|
| D1 local ladder | residual is multi-slot, ordered by rung, channel-not-ground; magnitudes open | `specified`, triangulated | F1, F2, F5, F6, F7 |
| D2 early-universe inference | a frame ranging against one ground; its H0 is model-mediated, not a second anchor | `general`, single-source for the anchor rule | F4 + Fig 2 :36 |
| D3 verification | independence is the deciding quantity; shared calibration collapses two frames into one | `specified`, triangulated | F3, F6 |
| D4 outreach | send residual and refuter, never the interior; size ranking is a budget filter | `general`, triangulated | F8 + Fig 10 :52 |

No verdict was averaged across domains. D1's open magnitudes do not make D3's independence verdict weak, and the reverse.

---

## 3. Pre-registered refuter (written before the conclusion)

Per the standing rule that a falsifier written before the run is a design instrument, the shape claim of this audit is refuted if any of the following holds:

1. A figure line is found that returns the numerical magnitude of a systematic effect in km/s/Mpc. The figures would then be a measurement, contradicting their metatheory status (F4).
2. Dust, stellar populations and ladder choices are shown to be a single slot with one generative mechanism, so per-slot indexing is the wrong description (F1).
3. Two frames sharing all calibration inputs are still counted as independent corroboration by the figures (F3).
4. A change in dust or stellar populations is demonstrated to move the ground (the expansion rate) rather than the reading (F2).
5. A sealed room is exhibited in D1 to D4, so a null search would be a proof of absence (F6).
6. The loop stops because the channel closed, not because R stopped arriving, and the two are not distinguished in the record. Formula: *"the loop stops only when R stops arriving, which is either a perfect prediction or a closed channel, and from inside those look the same."*

If any fires, the shape claim is withdrawn or rewritten. Until one is run, nothing here is labelled `grounded`.

---

## 4. Recommendation

1. Keep a per-slot systematics ledger (dust law, crowding, metallicity, host mass, rung and anchor choice); never reduce it to one "total systematic" number (F1).
2. Buy independence deliberately: prefer comparisons with no measurements in common (TRGB against Cepheid with maser+parallax anchors) over more analyses of the same HST/SN pool (F3).
3. Describe each slot's effect in effect terms, then look for the instrument or subsample that predicts its shape (F4, Fig 9 :27-28).
4. Read null tests as bounds at achieved resolution, not absolution (F6). Keep live slots live.
5. Use the size ranking only to allocate telescope time and cuts (F8).
6. Send the generator, the per-slot residual and its refuter, not a recording of which number won (Fig 4 :22 *"Only methods cross up. Only head starts come down."*).

---

## 5. Canonical usage check and retraction / confirmation log

Two sources were read after sections 1 to 4 and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` (the figures *"outrank everything else in the repo"*; *"the quotes are the authority, not this summary"*; a reading that makes one contradict another has misidentified its domain; the framework returns *"a shape, not a name"* and stops at the limit of what instruments distinguish) and the eight essays (source discrimination, tacit knowledge, prestige is not action, simulation not ground reading).

| earlier reading | status after the canonical check |
|---|---|
| "The figures settle how much dust matters" | **Retracted.** The figures are a metatheory; they return a shape, not a number. No figure line quantifies a systematic (F4). |
| "CMB is the ground, the ladder is a frame" | **Corrected.** Both are frames ranging against one ground. The observed CMB is a ground reading, but H0 inferred from it is model-mediated (Fig 2 :36). |
| "The three named systematics are independent of one another" | **Retracted.** They share calibration inputs (Gaia, WFC3 zero points, SN compilations). Independence must be measured, not assumed (F3). |
| "Riess 2019 and 2023 prove systematics are excluded" | **Retracted at the strong form.** They bound slots at achieved resolution; Wojtak 2025 and Gall 2024 show live slots (F6). |
| "Aggregate the error budget into one number for reporting" | **Narrowed.** An aggregate is fine for reporting a total, but it must never stand in for the per-slot verdict (F1, Fig 1 :13). |
| "No single systematic explains the tension" | **Not strained.** A global R near zero with one live slot is a legal state (Fig 1 :13); both statements can hold. Re-census, not a contradiction. |
| Fig 1 per-slot rule vs the published total 1.28% budget | **Not strained.** Different objects: per-slot governs where to look, the total governs how to report. Matches the README's re-census rule. |
| "This audit determines the size of the effect" | **Retracted.** It is a simulated derivation checked for internal consistency only. It cannot settle the question. |

### Strains after re-census

One live strain, named not hidden: **Fig 1's per-slot rule against Fig 9's "describe the effect" instruction when the effect is shared across slots.** Dust and crowding both alter Cepheid near-infrared magnitudes; describing one effect may point at two slots. Fig 13 :35 (*"Each answers a question the other two cannot"*) supports keeping the slots distinct even when their readings overlap. The remedy is a better instrument that discriminates sources (the spectrometer move in *The Hard Problem is About Source*), not a merged slot. No other strain was found.

### Final audit status

The shape survives: the residual must be kept per slot, ordered by dependency, independence-weighted, channel-directed and instrument-settled. Every specific numerical claim about "how much" is refused as outside what the figures can return. Verdict `specified`, ungrounded, candidate.
