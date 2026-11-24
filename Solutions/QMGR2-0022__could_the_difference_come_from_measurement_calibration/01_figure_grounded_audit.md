# Figure-grounded audit: could the Hubble tension difference come from calibration or systematics?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure quotes are taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources actually opened are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

The residual R is the measured gap between two determinations of the same quantity, H0:

- Early-universe frame, Planck 2018 plus LCDM: H0 = 67.4 +/- 0.5 km/s/Mpc (Aghanim et al., arXiv:1807.06209, read 2026-11-23). This is a model-conditional inference from the CMB sound horizon.
- Late-universe frame, SH0ES distance ladder: H0 = 73.04 +/- 1.04 km/s/Mpc (Riess et al., arXiv:2112.04510, read 2026-11-23). This is a geometric calibration chained through Cepheids to Type Ia supernovae.

R = |Gamma_early(b,a) - o'_late| is about 5.8 km/s/Mpc, roughly 5 sigma. The question asks which term is wrong: the ladder's calibration and systematics (the channel), or the early-universe model (the library Gamma). It does not ask for a new number. It asks for the location of a fault.

**Binding the sought-for shape as an ordinary term (Formula, "Direction"):** before searching, write down what an answer would look like. Here it is (a) a decomposition of R per slot, that is per ladder rung, anchor and independent method, with live mass R+_s identified, and (b) the description of a source-discriminating instrument that would tell a miscalibrated channel from a wrong model. Until this is bound, the preference for "calibration" or "new physics" predicts nothing and no check in the loop can see it.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.**

- Arity: two frames ranged against one quantity H0. The residual is indexed per measurement slot, not per theory. Slots include the Gaia parallax zero point, the LMC detached-eclipsing-binary distance, the NGC 4258 maser distance, Cepheid crowding and metallicity corrections, the TRGB zero point, and the SN Ia calibration.
- Symmetry: the H0 comparison is a threshold relation between two quantities, a ⋛ comparison in the figures' notation. It is directional (early versus late), not a symmetric join of two equal operands. Direction matters because the two frames have different anchors.
- Scale: R registers at the channel scale (instrumental calibration) and at the library scale (model primitives). These are two strata, and a crossing between them is a change of role rather than a merging. The figures' rule is that composition crosses kinds, but a fault at one scale is not auto-transferred to the other.

**One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.**

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 Late-universe distance ladder | Cepheids, TRGB, SN Ia, Gaia parallaxes, LMC DEBs, NGC 4258 masers | distance moduli, calibrated luminosity, H0 | geometric zero point (DEBs, masers, parallaxes). It must not move when pushed | partition boundary: which rung carries live residual |
| D2 Early-universe inference | CMB anisotropies, sound horizon r_s, LCDM library Gamma | model-conditional H0 | the sound horizon standard ruler, set by early physics; model-conditional | separate domain, own loop; a wrong primitive here is an import, not a calibration |
| D3 Calibration and systematics | photometric zero points, crowding, dust extinction, metallicity, selection effects, pipeline choices | systematic error budget | a calibration standard that does not update on the frames | union of overlapping conditions, not a list |
| D4 Comparison and verification | two H0 posteriors, independent teams and probes | R = |H0_early - H0_late| | the actual expansion rate (the ground). Never agreement | triangulation across low-overlap frames |

**Dependency order (Fig 3).** The chain runs perception (do we measure H0 differences reliably), vocabulary (do we have terms distinguishing a channel fault from a model fault), objective (what would count as progress), planning (which probe to field), learn and carry. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Effort spent refining the model before the ladder's perception link is checked arrives at a step that cannot use it. Refuse before mint (Formula step 2); settle each rung before composing the ladder (Fig 12 settled-molecule rule).

**Partition or union.** The candidate causes form a union: calibration OR dust OR stellar populations OR analysis choices OR new physics, and the conditions overlap (Fig 9 :54-56). A bundled problem is not a list of separate ones. This is why the question as phrased is not one search but a split into several well-formed slot questions.

---

## 2. Figure census (quoted before concluding)

| figure | bearing | verdict on this question |
|---|---|---|
| **1 The Agent** | residual per slot; frame-internal quantities disqualified | no global H0 tension verdict allowed; decompose by rung |
| **2 The Ground** | anchor test, independence, correlation valence | decisive for the calibration question: a moving zero point is not an anchor |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | check the perception/vocabulary links before the model |
| **4 The Membrane** | round trip and gap R_T; methods cross up | cross-checks (TRGB, masers) are round trips; measure the gap |
| **5 Mint Pipeline** | settle is necessary, not sufficient; library grows, reach may not | more analysis variants do not by themselves lower R |
| **6 Closure / Reachability** | instruments improved from worse instruments already returning something | new rungs and independent probes are the legitimate instrument extension |
| **7 Room Chain** | a room's agreement is variation, not a verdict | extra teams using the same data do not corroborate |
| **8 Union Surplus** | a search that finds nothing is never a proof of absence | "no systematics found" is closure-bounded, not a proof that none exists |
| **9 Leave / Arrive** | split disagreements that do not shrink; unbundle unions; shape not a name | the question is a union; the output is a discrimination shape, not a culprit name |
| **10 Ground Maintainer** | the ground does not decay, the channel does; keep the anchor reachable | the central governing line: calibration error is channel decay |
| **11 The Habitat** | capability is agent-and-habitat; introduce, never subtract | independent probes are introduced into the habitat of measurement |
| **12 The Bond** | arrangement carries meaning; settled molecule becomes an atom | the ladder is a chain of settled rungs; a fault in a bond is invisible in the final number |
| **13 Minimum Viable Set** | unreachable is a verdict, not a silence; shape rather than name | honest stop when no instrument can discriminate source |
| **Symbols table** | R is the aim and is always a slice; anchor is the ground | R is per slot; what cannot be perceived yet is residual |
| **THE_FORMULA.md** | step 2 refuse before mint; step 5 the ground settles; step 7 SEARCHED / INWARD / OUTWARD | discriminate before importing new physics |

Strained readings are named as such below, not smoothed over.

---

## 3. Findings

### F1 — The tension is indexed by slot; aggregating it destroys the only signal (decisive for method)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

The SH0ES team ran approximately 70 analysis variants over anchors, SN surveys, redshift range, dust, metallicity, period-luminosity form, SN colour and flows (Riess et al. 2022). That is the right instinct: it is a per-slot sweep. But the published baseline is a single combined number, and the sentence *"lies near the median of all analysis variants"* is itself an average move. A live slot can hide in the spread. The framework's requirement is to report which slot carries positive mass R+_s, not only the median.

**Mode: `specified`.** **Refuter:** a per-rung residual table in which every slot is individually within 1 sigma of the combined value, with no outlier carrying live mass, would refute the claim that aggregation is hiding a signal. **Status: `triangulated`** (Fig 1 plus the Di Valentino review's explicit mention of *"multiple, unrelated errors"*, low overlap between the per-slot rule and the review's taxonomy).

### F2 — A calibration error is channel decay, not ground decay (central governing finding)

Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :25: **"stale percepts, dropped transients, saturated metrics, pooled readings"**
Fig 10 :27-28: **"the output is not a verdict, it is you have lost touch"**
Fig 10 :29: **"keep the anchor reachable"**

This is the direct figure answer to the question. The expansion rate, the ground, does not change because a photometric zero point drifts. What decays is the channel, and the figures name its failure modes: stale percepts, saturated metrics, pooled readings. A systematic error in the distance ladder is exactly a saturated or pooled reading. The honest output of such a state is *"you have lost touch"*, not *"new physics exists"* and not *"no difference exists."*

So the question is well posed in the framework: yes, a nonzero R can be manufactured entirely by the channel. The figures do not say it *is* the case here; they say this is a live, structurally named possibility, and they say what it would look like.

**Mode: `general` on the structural distinction, `specified` on its application to this ladder.** **Refuter:** a demonstration that the ladder's readings change the ground they are pointed at would collapse the distinction and refute this finding. **Status: `triangulated`** (Fig 10 and Fig 2 :33-34, different figures, low overlap).

### F3 — The anchor test: the ladder zero point must not move when pushed

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :29-30: **"If it moves when you push on it, it is not an anchor."**
Fig 2 :33: **"The anchor must not update."**
Fig 2 :34: **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."**

The distance ladder is only a measurement frame if its geometric zero point is an anchor. Test it by pushing: do the three geometric anchors agree without being tuned to one another? Riess et al. 2019 report that *"Removing any one of these anchors changes H0 by < 0.7%"*, which is evidence that no single anchor is dragging the result. Freedman et al. 2019 obtain H0 = 69.8 +/- 0.8 (stat) +/- 1.7 (sys) from the independent TRGB ladder, which sits between Planck and SH0ES rather than reproducing either. That is the round trip of Fig 4 :30: carry the calibration up, bring it back down as an independent method, and measure the gap. The gap is not zero.

Coherent drift is the named danger: if the calibration standard is adjusted in response to the H0 it is meant to measure, the anchor becomes another frame and the drift is invisible from inside. This is the precise structural shape of a calibration explanation, and it is checkable in the analysis records.

**Mode: `specified`.** **Refuter:** if all three geometric anchors agree to better than their stated systematic errors *and* two independent non-Cepheid ladders converge on the same H0 to within 1 sigma, the coherent-drift version of the calibration hypothesis is refuted. **Status: `triangulated`** (Fig 2 anchor rule plus Fig 4 round trip; corroborated by Riess 2019 and Freedman 2019, which draw on different instruments).

### F4 — Independence decides whether the disagreement is evidence, and whether agreement is worth anything

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence."**
Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

Verde, Treu and Riess 2019 report six new late-universe H0 determinations from Cepheids, strong lensing time delays, TRGB, megamasers, Oxygen-rich Miras and surface brightness fluctuations, and state that *"combining any three independent approaches to measure H0 in the late universe yields tension with the early Universe values between 4.0 sigma and 5.8 sigma"* and that *"the discrepancy does not appear to be dependent on the use of any one method, team, or source."* That is a genuine low-overlap triangulation result, and it is the strongest world evidence against a *single-rung* calibration explanation.

But the same rule cuts the other way. Several "independent" determinations still use SN Ia calibrated by some ladder rung; teams that reduce the same Cepheid photometry are one evidence pool. The figures require the overlap to be declared, not assumed away. Independence is bought, not asserted, and it is bought in proportion to the cost of being wrong, which here is a possible false claim of new physics.

**Mode: `specified`.** **Refuter:** show that the six probes named above share a calibration input sufficient to move all of them together; that would turn the triangulation back into one frame with six names. **Status: `triangulated`** (Fig 2 plus Verde et al., low overlap between the figure rule and the probe census).

### F5 — "No systematics found" is closure-bounded, not a proof of absence

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room."**

Riess et al. 2022 write that they find *"no indication this arises from measurement errors or analysis variations considered to date"*. The qualifying phrase is doing the work. The search was inside the closure of the analysis variants they enumerated. By Fig 8, that search cannot prove there is no unconsidered systematic. Equally, the Di Valentino review notes that solutions may invoke *"new physics, unexpected large-scale structures or multiple, unrelated errors"*, which is a union, not a single alternative. It does not follow that a calibration error exists either. The honest state is `unreached`, not `refuted` and not `grounded`.

Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."** More variants of the same analysis test depth; only a new probe or a new instrument tests for an absent term.

**Mode: `specified`.** **Refuter:** a complete enumeration of the systematic closure together with a proof that it is sealed would permit a proof of absence; no such proof is offered here. **Status: `triangulated`** (Fig 8 and Fig 6, corroborated by the explicit "considered to date" wording in SH0ES).

### F6 — The question is a union of overlapping conditions, so split it before searching

Fig 9 :4-5: **"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**
Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

"Calibration or other systematic errors" bundles at least four conditions: zero-point calibration, crowding and stellar populations, dust extinction, and pipeline/analysis choices. They overlap. A single lever that fixes zero point clears the region where only zero point binds and leaves the intersections standing because the second condition still binds (Fig 9 :55-57). The honest answer shape is a per-slot decomposition and an unbundled set of sub-questions, each with its own ground.

**Mode: `general` on the split rule, `specified` on this bundle.** **Refuter:** if every proposed condition were shown to be the same condition under different names, the union would collapse to a partition and the unbundling instruction would not apply. **Status: `single-source` for the figure rule (Fig 9), corroborated at low overlap by the Di Valentino review's "multiple, unrelated errors".**

### F7 — The output is a shape and a discriminator, not the name of a culprit

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**

The canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"* (figures README, local copy). Naming "the Cepheid crowding correction" as *the* cause before a discriminating measurement is the inversion Fig 9 :27-28 forbids. What can be stated in advance is the shape of the discriminator: an instrument or analysis that returns different readings for (i) a channel fault and (ii) a wrong model, on the same data. The metamerism essay supplies the precedent: an instrument that reads green *"cannot comment on the source"*, and the spectrometer, not an argument, resolved the case.

**Mode: `specified`.** **Refuter:** an argument that derives the culprit's name from the figures alone would refute the shape limit; none is offered. **Status: `triangulated`** (Fig 9 plus the figures README plus the source essay, three routes with low overlap).

### F8 — New probes are instruments improved from worse instruments already returning something

Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**
Fig 6 :33: **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."**

The legitimate extension here is not a imagined perfect standard candle. It is the probes already returning readings: TRGB, masers, strong-lensing time delays, surface brightness fluctuations, Miras, and gravitational-wave sirens. Verde et al. 2019 list exactly this habitat. Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."** A better fit to the same Cepheid data does not change contact; a maser distance or a completely independent ladder does.

**Mode: `specified`.** **Refuter:** a proposed instrument that has never registered anything at any resolution would not be an instrument under Fig 6 :34-35; such a proposal would refute this extension route. **Status: `triangulated`** (Fig 6 plus Fig 11 plus Verde et al.).

### F9 — Prestige cannot settle which term is wrong

From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"**

The reputation of a team, the size of a collaboration, or the number of papers endorsing one explanation is a budget to try a measurement, never a verdict. In this field the stake is structural: a collaboration whose result has become a reference has standing that survives the outcome it was earned on (Fig 10 :61). Declare it; do not convert it into evidence.

**Mode: `general`.** **Refuter:** none within the framework: this is a rule the framework imposes on itself, not a claim about the world. **Status: `single-source`** (the essay plus Fig 10, same author, high overlap, declared).

### F10 — More terms are not more reach

Fig 5 :70: **"A term is settled when the ground pays for it."**
Fig 5 :72: **"a library that grows is not a reach that grows."**
Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

Adding analysis variants, nuisance parameters or model extensions grows Gamma. It does not necessarily lower R, because settlement is paid by the ground, not by the number of options. THE_FORMULA.md step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* This is why the correct response to a 5-sigma residual is a discriminating measurement, not another fit.

**Mode: `general`.** **Refuter:** a case in which adding a parameter demonstrably moved the ground reading would refute the necessity/sufficiency distinction; none is shown here. **Status: `triangulated`** (Fig 5 plus Fig 11 plus Formula step 5).

### F11 — What survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| R must be decomposed per rung, never averaged into one global tension | `general` (structural) | Fig 1 :19, :22 |
| A calibration error is channel decay, not ground decay; the honest output is loss of contact | `general` | Fig 10 :24-29 |
| The ladder zero point is legitimate only if it does not move when pushed | `general`, testable | Fig 2 :29-34 |
| The question is a union of overlapping conditions and must be unbundled | `general` | Fig 9 :54-56 |
| The output is a discrimination shape and an instrument description, not a culprit name | `general` | Fig 9 :32, figures README |
| Current searches have not located a single bad rung; "no indication considered to date" is closure-bounded | `specified`, ungrounded | Fig 8 :39; Riess 2022 |
| Which term is actually wrong in our world | `grounded` claim, NOT made here | no measurement in this folder |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, per the seat discipline: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted, or the question settled, if any of the following fires:

1. **Calibration confirmed:** a single documented zero-point or correction shift, applied to the ladder, brings the local H0 into agreement with Planck plus LCDM within 1 sigma, while the three geometric anchors still agree and no other cosmology is broken. This confirms the channel reading and refutes the new-physics reading.
2. **Calibration refuted as a common cause:** three or more late-universe methods sharing no calibration anchor (TRGB, masers, strong-lensing time delays, GW sirens) all return H0 above 71 km/s/Mpc at more than 3 sigma. A common ladder calibration fault is then excluded for those probes.
3. **One-bad-rung shape refuted:** a full per-slot residual table in which no rung carries live mass R+_s and all rungs agree with the combined value. The "locate the bad rung" programme then has no target.
4. **Early-universe model at fault:** a measurement of the sound horizon r_s that differs from the LCDM prediction. The residual then migrates to D2 and becomes an import question, not a calibration question.
5. **Instrument limit reached:** a demonstration that no instrument at any resolution can discriminate a channel fault from a model fault on these readings. Then the shape claim of a findable discriminator is unreached, and by Fig 13 :134 that is a verdict, not a silence.

Until one of these is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape, not the theory: R is per slot, a calibration error is channel decay, and the deliverable is a per-rung residual table plus a discriminator description (F1, F2, F7).
2. Unbundle the question into its four overlapping conditions before searching (F6).
3. Treat the SH0ES "no indication considered to date" sentence as closure-bounded, not as a verdict (F5). Do not convert it into either "systematics ruled out" or "new physics established".
4. Buy independence where the cost of being wrong is high: prioritise probes that share no ladder calibration (F4, F8).
5. Declare stakes; do not let team reputation settle the reading (F9).
6. Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."** Send the generator, the per-slot method and the refuter, not a conclusion about who is right.

---

## 6. Canonical usage check and retraction / confirmation log

Two sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` — *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"* and *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest. Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` — the eight-step loop, the refuse-before-mint order, the SEARCHED / INWARD / OUTWARD split, and the mode rule.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F5 first drafted as "SH0ES has ruled out systematics" | **Retracted.** The paper says "no indication... considered to date". Fig 8 :39 forbids reading an empty search as proof of absence. Restated as closure-bounded. |
| F3 first drafted as "the geometric anchors are an anchor" | **Narrowed.** They are anchor-*candidates* until tested by pushing. Fig 2 :29-30 supplies the test; Riess 2019 supplies a partial pass. |
| F4 first drafted as "six probes are six independent witnesses" | **Narrowed.** Independence is a quantity to be measured by overlap, not asserted by counting probe names (Fig 2 :31-32). Several probes still use SN Ia. |
| F7 first drafted as "the framework cannot say which rung is wrong, ever" | **Narrowed.** It cannot name one from the figures alone. A ground measurement can. The limit is about derivation, not about the world. |
| F2 (channel decay) | **Canonically confirmed.** Fig 10 :24-29 and Fig 2 :33-34 are explicit. This is the strongest figure-grounded point and should lead the pitch. |
| F6 (union split) | **Canonically confirmed.** Fig 9 :4-5 and :54-58. |
| F9 (prestige is not action) | **Canonically confirmed.** The essays and Fig 10 :59 agree; declared as high overlap, not treated as two witnesses. |

### Strain check

- **Fig 10 "channel decays" versus Fig 2 "ground does not update".** Not strained: Fig 2 governs the anchor's independence from frames; Fig 10 governs the channel's contact with an anchor that does not decay. Different objects.
- **Fig 8 "search finds nothing" versus the SH0ES 70-variant sweep.** Not strained: the sweep is SEARCHED at fixed reach, which is cheap and necessary, but it does not answer OUTWARD for an unconsidered systematic. Formula step 7 keeps the three questions distinct.
- **After re-census: two strains named, none hidden.**

### Updated verdict

The shape survives and is genuinely figure-derived: decompose R per slot, treat calibration as channel decay, test the anchor by pushing, unbundle the union, and stop at a discriminator rather than a name. The specific claim that *this* tension *is* a calibration error is not made: no ground reading in this folder settles it, and the world sources are divided between a clean broad search (SH0ES) and an independent ladder sitting midway (TRGB). Status `specified`, `candidate`, ungrounded. The honest stop is `unreached`, which is a verdict.
