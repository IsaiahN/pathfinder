# Figure-grounded audit: gravitational-wave background signatures from the early universe

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the source name and the discriminating instrument. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened this session) says LLM output can *"simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode: `FRAMEWORK/figures/THE_FORMULA.md`. Seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources opened 2026-11-23 and listed in `10_source_ledger.csv`.

---

## 0. The claim under audit

The ordinary question is abbreviated in three ways that must be separated before any figure is chosen:

1. **Detection:** a stochastic gravitational-wave background (GWB) has been reported in the nanohertz band. NANOGrav's 15-year analysis reports *"multiple lines of evidence for a stochastic signal that is correlated among 67 pulsars"* and that *"the correlations follow the Hellings-Downs pattern expected for a stochastic gravitational-wave background"* (Agazie et al. 2023, arXiv:2306.16213). This is a ground reading in the detector domain.
2. **Source:** the same abstract says the inferred amplitude and spectrum are *"consistent with astrophysical expectations for a signal from a population of supermassive black-hole binaries, although more exotic cosmological and astrophysical sources cannot be excluded."* Wikipedia's GWB article states the same limit in effect terms: *"The sources of this gravitational-wave background cannot be identified without further observations and analyses, although binaries of supermassive black holes are leading candidates."* So the source of the observed background is not settled even though the background is detected.
3. **Signature:** an early-universe signature would be a feature of the background's spectral or statistical form, not the bare existence of a background. The question asks what such a signature would be and whether current instruments can register it.

The claim audited is therefore: **an early-universe GWB signature is a per-frequency-slot feature of the background, over a union of candidate sources, and the figures can return the shape of that feature and the instrument condition for naming its source, but cannot name the source itself.** Mode `specified` / `general`, with a declared `gap`.

The alternatives are kept separate: *"Space, time and energy are not three readings of one quantity"* (Fig 13 :35) is the figure's own warning that different questions need different readings. Here, detection, source and signature are three questions with three anchors, not one question with three answers.

---

## 1. Residual, in effect terms

The residual R is: **something is registering in the detector channel whose source the current frame cannot resolve**. Its description:

- **Arity:** several conditions. The candidate sources form a union (supermassive black-hole binaries, inflationary tensor modes, phase transitions, cosmic strings, reheating/preheating), any of which can produce a stochastic background in some band. The observed excess is a case in several conditions, not a harder case of one (Fig 9 :54-58).
- **Symmetry:** the background is statistically homogeneous and isotropic to first approximation, which is why a Hellings and Downs correlation is the gravitational signature. But the *discriminating information* is asymmetric across frequency: a spectral slope, a bump, anisotropy, non-Gaussianity and polarization states are not interchangeable. Romano and Cornish (2017) list exactly these degrees of freedom as things a search must allow for: *"we allow for anisotropy, non-Gaussianity, and non-standard polarization states."* A symmetric average over these is where the signal disappears.
- **Scale:** the background crosses detector scales. Ground interferometers are sensitive roughly 10 Hz to 1000 Hz (Wikipedia GWB); pulsar timing arrays cover nanohertz to a few hundred nanohertz; LISA occupies the millihertz band. A signature that exists at one scale may be invisible at another. This is a membrane question (Fig 4), not a single-scale measurement question.
- **What cannot be read yet:** the source. This is residual by the Symbols table definition: *"It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."*

---

## 2. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. A domain without a nameable anchor is not yet a domain, so it does not get its own loop.

| # | domain | actors | currency | anchor | partition or union | status |
|---|---|---|---|---|---|---|
| D1 | Detector and ground | PTA consortia (NANOGrav, EPTA, PPTA, CPTA, IPTA), ground interferometers (LIGO, Virgo, KAGRA), LISA | strain sensitivity, observation span, Hellings and Downs correlation signal to noise | the measured timing residuals and strain cross-correlation | partition boundary: which band is being read | `grounded` for the nHz detection, not for the source |
| D2 | Early-universe source models | inflation, phase transitions, cosmic strings, reheating, SMBH binary populations | predicted spectral shape, spectral index, amplitude, statistical properties | none of its own; settles only through D1 | union: several conditions can produce the same band | `specified`, ungrounded |
| D3 | Inference and model selection | Bayesian searches, frequentist statistics, MDL model comparison | evidence, description length, leftover residual | D1 data through a lossy transform | union compound; a fit is not an anchor | `general` / `specified` |
| D4 | Verification and outreach | expert readers, collaborations, reviewers | agreement and residual | the ground, never agreement | one evidence pool in this simulation, so independence is zero | `general` |

**Dependency order (Fig 3).** Perception first: does anything register at all (Fig 3 :5, *"the system can tell what is in front of it, and tell it apart from what was there before"*). Vocabulary second: do we have terms for what a background affords, namely a spectral shape, a correlation curve, anisotropy (Fig 3 :7). Objective third: what counts as progress, namely a discriminating feature rather than a detection (Fig 3 :10). Planning fourth: which band and which instrument (Fig 3 :13). Learn and carry fifth: name what worked and carry it (Fig 3 :15). The chain is *"ordered by dependency, not by importance"* (Fig 3 :20). In this question the chain stops at vocabulary and objective: the 2023 announcements establish perception, and the source is still unresolved because the discriminating objective is not yet measurable. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Partition or union.** Union. Fig 9 :4-5: disagreements that do not shrink with effort, where each rule keeps working well on a different subset, *"are not one hard question but several well-formed ones. Split it rather than search."* The GWB literature itself makes the split: cosmological backgrounds and astrophysical backgrounds are separate categories with different statistical properties (Wikipedia GWB). A single lever, for example fitting a power law, clears the region where one condition holds and leaves the intersections standing (Fig 9 :54-58). Verdicts are therefore kept per domain and never averaged into a single "the GWB signature."

---

## 3. Findings, each with a verbatim figure line and a refuter

### F1 : The residual is indexed by frequency slot, not by a broadband average

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Symbols table :43: **"One object, region or entity being tracked. R is measured per slot, never as a single global number."**

A stochastic background is a superposition across frequency and sky. The object slot here is a frequency bin, or a sky pixel for anisotropy work, not the experiment as a whole. A single fitted amplitude and index is a compressed description of many slots; if the discriminating feature lives in one band or in one angular pattern, the broadband fit is exactly the average that hides it. Romano and Cornish define the search at the level of *"detector response functions, detection sensitivity curves, and, more generally, at the level of the likelihood function"*, which is a per-slot construction, and note that *"the choice of signal and noise models and prior probability distributions are actually what define the search."*

**Mode:** `general` structural, `specified` for the claim that the discriminator lives in the shape.
**Status:** triangulated across Fig 1 and the Symbols table (low overlap: one is the agent loop, one is the notation table), with the world source as secondary corroboration.
**Refuter:** exhibit a signature that is detectable only in a broadband aggregate and that vanishes in every frequency bin and every sky pixel at achievable resolution. Then the per-slot claim fails.

### F2 : The anchor is the detector reading, and instruments grow from worse instruments

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**
Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 6 :33: **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."**
Fig 6 :34: **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."**

The anchor for "is there a background" is the measured inter-pulsar correlation, not a model and not a consensus. The NANOGrav result supplies a Hellings and Downs shaped reading, which is a point that already returns something and fails to resolve its source. By Fig 6 :33-35 the next instrument is built on that residual: longer PTA baselines, more pulsars, MeerKAT and SKA, LIGO bands, and LISA. The SciAm report describes exactly this sequence: *"all those disparate teams are now feverishly gathering more data for a grander goal: to understand exactly where this background hum is really coming from."*

For the early-universe question specifically, the ground is further away. Christensen's review says: *"The physical processes occurring at the earliest moments of the universe certainly created a stochastic background that exists, at some level, today."* That is a model expectation, not a measurement. Whether a primordial component has been Registered is a different question from whether a background exists, and the figures forbid merging them: Fig 13 :35 says two readings of one quantity are not one reading.

**Mode:** `grounded` for the nHz detection in D1, `specified` for any primordial attribution.
**Status:** triangulated (Fig 2 anchor rule plus Fig 6 instrument rule, different figures and different functions).
**Refuter:** show a reported correlation that moves when the analysis frame or prior changes. If the "anchor" updates on what a frame thinks, it is panel 1 of Fig 2, not panel 3, and the detection claim loses its ground.

### F3 : This is a union compound, not one hard question

Fig 9 :4-5: **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**
Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

The same nanohertz band can be populated by SMBH binaries and by cosmological processes. Wikipedia: cosmological sources include *"relic gravitational waves produced directly by cosmic inflation"*, preheating, phase transitions such as the electroweak transition, and cosmic strings; the astrophysical background is *"produced by the combined noise of many weak, independent, and unresolved astrophysical sources."* These are overlapping conditions, not mutually exclusive answers. A power-law fit does not separate them; the NANOGrav abstract says the data are *"consistent with astrophysical expectations ... although more exotic cosmological and astrophysical sources cannot be excluded."*

The SciAm article reports the community's own unbundling program: look for anisotropy and individual hotspots, and if none appear, *"that could point to stranger things as the source of low-frequency gravitational waves"* including phase transitions and cosmic strings. That is a union being searched condition by condition, with a stated failure condition, which is the figure's instruction.

**Mode:** `general` for the union structure, `specified` for the per-source verdicts.
**Status:** triangulated across Fig 9 and two independent world sources (NANOGrav Collaboration and Wikipedia), but the world sources share the same physics literature pool, so count as one witness on the physics side.
**Refuter:** demonstrate one mechanism that accounts for all bands and all statistical properties with no leftover residual. That would collapse the union to a partition and remove the need to unbundle.

### F4 : The framework returns a shape, not a name; the source is a declared gap

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**

The shape is: a stochastic strain field whose spectral and statistical form deviates in a way that a source-discriminating instrument could settle. The name, inflation versus a phase transition versus cosmic strings versus SMBH binaries, is not derivable from the figures because no figure line names a source for any background. Fig 9 :32 and Fig 13 :134 are the limit, not an omission. The canonical README confirms the reading: the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the instruments and records the lineage.

This is a `gap` of the *unreachable-at-this-budget* kind, not a claim that the source is unknowable in principle. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** The instrument condition is stated in F10.

**Mode:** `general` (limit), with the specific name recorded as `gap`.
**Status:** triangulated across Fig 9, Fig 13 and the canonical README (three low-overlap statements of the same limit).
**Refuter:** produce a source-discriminating measurement already in hand that names the source of the observed nHz background. Then the gap closes and this finding is withdrawn. Until such a reading exists, naming a source is the searcher's preference bound as if it were a term (Fig 5 :62-66).

### F5 : Candidate sources are isomers over a shared atom set

Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Wikipedia says the sources produce *"a background with different statistical properties"* and lists cosmological and astrophysical classes. Romano and Cornish require a search to allow for anisotropy, non-Gaussianity and non-standard polarization states, which are arrangements of the same underlying strain field. Over the shared atom set (a stochastic strain field over frequency and sky, with energy and a spectrum), the candidate sources are Fig 12's isomers: same atoms, different arrangement, different substance. The functional-group form is weaker and is the one the current data support: *"a stochastic background in a detector band"* fixes the kind, and the qualifier (spectral slope, bump, anisotropy, non-Gaussianity, polarization) would fix the member. Fig 12 :123: the group says what kind; the qualifier says which member.

This is the one place where a figure gives a genuine structural handle on the physics: it says that *type*, not mere presence, is the discriminator. It does not say which type discriminates.

**Mode:** `specified`.
**Status:** single-source on the figure side (Fig 12's definition), with low-overlap world corroboration from the detection-methods review; the actual discrimination is unmeasured.
**Refuter:** show two candidate sources whose statistical properties are indistinguishable at every achievable resolution. Then they are one term under Fig 12, not isomers, and the isomer claim fails.

### F6 : Independence between instruments, and the cost of losing it

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

The 2023 result came from four consortia using different telescopes and analysis methods; Wikipedia calls this *"cross validation of the evidence for the GWB using different telescopes and analysis methods."* That is closer to two instruments pointed at the same thing than to two people reading one report, and the cost of being wrong is high (a claim about the early universe), so Fig 2 :42 says to buy independence. But there is a live strain: SciAm reports that the groups are *"pooling their data together to improve the result"* through the IPTA. Pooling raises sensitivity and can reduce witness independence if the merged product and one pipeline become the single evidence pool. The figures do not forbid pooling; they require the two quantities be read separately.

**Mode:** `specified` on the detection, `general` on the independence rule.
**Status:** triangulated (Fig 2 :31/:35/:40 are one figure but three distinct moves; the world sources are two separate reports of the same announcements, so one physics witness).
**Refuter:** show that the apparently independent PTA results derive from one shared data product and one analysis pipeline. Then the agreement is one pool talking and the triangulation verdict is withdrawn.

### F7 : Non-detection in one band is not proof of absence

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**
Fig 6 :34-35: **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."**

Christensen's review notes that *"whether the stochastic background is observed directly, or upper limits placed on it in specific frequency bands, important astrophysical and cosmological statements about it can be made."* Upper limits are band-specific. Turning an audio-band limit into a claim that no primordial background exists at nanohertz or millihertz frequencies would violate Fig 8 :39 and the Fig 6 instrument rule. Where nothing is registering at any resolution, there is no edge to extend from; where something is registering and failing to resolve, an instrument can be built on that residual.

**Mode:** `general`.
**Status:** single-source on the figure side (Fig 8 and Fig 9 agree but are one framework), corroborated by the band-specific wording of the review.
**Refuter:** a closed-frame argument that proves no source exists in all bands, which would have to evade Fig 8's three underivability results. No such argument was found in the sources read.

### F8 : Model selection is an MDL bargain, and the sought shape is invisible until bound

Fig 5 :42-44: **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**
Fig 5 :62-63: **"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."**

Choosing among a power law, a broken power law, a bump from a phase transition, and a cosmic-string plateau is an MDL bargain: state the model plus what it leaves unexplained and compare with the unexplained excess. The NANOGrav result reports Bayes factors in excess of 10^14 for a background over independent pulsar noises, and 200 to 1000 over an uncorrelated common power law depending on spectral modeling choices. Those are model comparisons, not a source name, and the dependence on modeling choices is exactly the leftover the bargain prices.

The direction of the question, *"an early-universe signature,"* is a preference the loop cannot see (Fig 5 :62-66). That is why section 0 binds it as an ordinary term with an explicit form. Without that binding, any fitted excess would be read as the sought signature, the Fig 9 :27-28 apophenia.

**Mode:** `specified` for the bargain, `general` for the direction limit.
**Status:** triangulated (Fig 5 plus the formula's "Direction" section plus the NANOGrav model-choice statement as secondary).
**Refuter:** a model that explains all bands by saying nothing (fails MDL), or a reported signature that appears only because the search was aimed at that source (apophenia).

### F9 : The round trip from spectral shape to source loses information

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

Compressing a background to an amplitude and a spectral index is an abstraction T_A. Bringing it back down to a source, T_E, is not the inverse: anisotropy, non-Gaussianity, polarization, band-to-band coherence and individual hotspots are dropped. Romano and Cornish's requirement to allow those degrees of freedom is the evidence that the compression is lossy. The round trip gap R_T for this folder is enumerated in `11_audit.md`; it is nonzero and is reported qualitatively, not numerically, because no source-discriminating ground reading exists. Treating the spectral index as if it were the source would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

**Mode:** `general`.
**Status:** triangulated (Fig 4 and the detection-methods review, different domains).
**Refuter:** show a compression of the background into a few parameters that preserves the source-discriminating information exactly. Then R_T is zero for that discriminator and this finding is narrowed.

### F10 : An instrument that reads a spectrum cannot comment on its source

Fig 6 :30: **"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**
Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**

*The Hard Problem is About Source* (opened this session) gives the mechanism: an instrument that reads green *"cannot comment on the source"*, and *"If several paths create the same behavior, then behavior is a projection with lossy information."* It was a spectrometer, not an argument, that resolved the case; *"the answer is unreached until a better instrument exists."* The GWB case has the same shape. A Hellings and Downs curve certifies a gravitational origin; it does not certify SMBH binaries rather than a phase transition. The SciAm report says the discriminating route is a slowly built map of anisotropy and individual sources, quoting Stephen Taylor: *"It'll be a slow resolution of the individual sources ... It's a slow burn."* That is a source-discriminating instrument being assembled from a worse instrument already returning something, exactly Fig 6 :33-35.

No figure line names that instrument. Which observation will first discriminate, anisotropy mapping, multi-band spectral coverage, non-Gaussianity statistics or a multi-messenger counterpart, is a `gap`, reported as unreached, not as silence (Fig 13 :134).

**Mode:** `general` structural, `gap` for the instrument identity.
**Status:** single-source on the figure side, with low-overlap world corroboration from a cognition essay and a science-news report.
**Refuter:** demonstrate a currently available reading that discriminates sources at the resolution required. Then the gap closes.

### F11 : Prestige, agreement and a ground with a reputation

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 10 :93: **"A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."**
Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*

*The Recursive Self-Improvement Trap* states the same rule in plain words: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* The NANOGrav result is not settled because a large collaboration or a famous journal published it; it is settled, to the degree it is settled, by the measured inter-pulsar correlation. An outreach campaign that gathers prestigious names to agree that a fitted spectral index is primordial would be the named collapse, not corroboration. In this simulation all seats draw on one evidence pool, so their agreement is one pool talking (Fig 2 :40).

**Mode:** `general`.
**Status:** triangulated across Fig 2, Fig 10 and the seat map plus the essay as secondary.
**Refuter:** show a case where the reputation of the measuring group changes the value of the measured correlation. That would make the anchor update and break the rule.

### F12 : What survives, with modes attached

| claim | mode | figure or source | status |
|---|---|---|---|
| A signature must be read per frequency or sky slot, not as a broadband average | `general` | Fig 1 :19, :22; Symbols :43 | triangulated |
| The ground for detection is the detector correlation, not a model or a consensus | `specified` | Fig 2 :29; Fig 10 :24 | triangulated |
| Candidate sources form a union compound with overlapping conditions | `general` | Fig 9 :4-5, :54-58 | triangulated |
| The figures return the shape of a signature and refuse the source name | `general`, `gap` for the name | Fig 9 :32; Fig 13 :134; canonical README | triangulated |
| Over a shared atom set the sources are isomers; as currently read they are a functional group | `specified` | Fig 12 :117, :123 | single-source, unmeasured |
| Two detectors agree about the world only if they do not share one evidence pool | `specified` | Fig 2 :31-32, :40, :42 | triangulated |
| Non-detection in one band is not proof of absence | `general` | Fig 8 :39; Fig 9 :44 | single-source |
| Source discrimination needs an instrument, not a further argument | `general`, `gap` for which instrument | Fig 6 :33-35; Hard Problem essay | single-source, corroborated |

---

## 4. Re-census and strains, kept visible

**S1, resolved by re-census: Fig 13's "spectrum" versus the observed frequency spectrum.** A first pass wanted to read Fig 13 :20, *"ordering, so more and less can be said,"* as the measured GWB power spectrum Ω_gw(f). That is a strain: Fig 13's spectrum is one of six primitive structures, while Ω_gw(f) is a composed, instrument-dependent quantity (energy as a state bonded to a spectrum or gradient structure). Re-census assigns the primitive to the six-term set and the measured spectrum to the composition built over it. Different objects, no contradiction. The canonical rule applies: a reading that makes figures contradict one another has misidentified its domain.

**S2, refused: "gradient" as a name for strain h.** The word "strain" in gravitational physics and the figure's "gradient" (Fig 13 :22, *"a difference that can be spent"*) resemble each other. They are not the same term. Naming h as the Gradient would be a binding from the physics frame onto a held atom, allowed only with provenance and a shadow test (Fig 8 :50-52), not a derivation. Refused.

**S3, live and narrowed: independence versus pooling.** Fig 2 :31-32 requires independent instruments for triangulation; the IPTA pooling described in SciAm improves sensitivity. These are two quantities, sensitivity and witness independence, and Fig 2 :42 says to buy independence in proportion to the cost of being wrong. The strain is not dissolved; it is recorded as a live design question for anyone who pools data: keep the per-instrument readings so the anchor can be ranged against separately.

**S4, live and narrowed: isomer versus functional group.** Fig 12 :117 gives the isomer reading only over a shared atom set. Current practice writes SMBH backgrounds and primordial backgrounds with different atoms and different assumptions, which is the functional-group case of Fig 12 :123. Both are recorded; the stronger isomer claim is held `specified` and is not used as a verdict about which source is present.

**S5, retracted and preserved: "the early-universe signature has been detected."** Removed. It conflates a detection of a background with a source attribution, against Fig 13 :35 and the NANOGrav abstract's own caveat. The earlier wording is kept here so the correction is visible.

After re-census: two live strains (S3, S4), two dissolved (S1, S2), one retracted claim (S5). None hidden.

---

## 5. Pre-registered refuter

Written before the conclusion and before any outreach, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A signature is returned only in a broadband aggregate and disappears in every frequency bin and every sky pixel at achievable resolution (breaks F1).
2. Two candidate sources produce statistically indistinguishable backgrounds at every achievable resolution (breaks F5, the isomer claim).
3. A reported correlation moves when the analysis pipeline, noise model or prior changes (breaks F2, the anchor test).
4. Apparent agreement among detectors comes from one shared data product and one analysis pipeline rather than from independent instruments pointed at the same ground (breaks F6).
5. A source-discriminating measurement already exists at current resolution and names the source of the nHz background (closes F4 and F10, removing the `gap`).
6. A non-detection in one band is converted into a claim of global absence by argument alone (breaks F7).
7. A model explains all bands by saying nothing, or a signature is found only because the search was aimed at that source (breaks F8).

If any fires, the shape claim is withdrawn or narrowed as specified. Until one is run, no part of this folder may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with the shape claim and its refuter, not with a source name (F4, F8). The honest form is: a signature is a per-slot deviation that a source-discriminating observation would settle; the source stays open.
2. Keep per-band and per-source verdicts separate; do not average a nHz detection, a mHz forecast and a Hz upper limit into one "early-universe signature" (Fig 1 :19, Fig 9 :54-58).
3. Buy independence: preserve per-instrument readings even when pooling for sensitivity (Fig 2 :42, F6).
4. Treat model choice as an MDL bargain with a stated leftover, and state the modeling choices that move the Bayes factors (F8).
5. Name the instrument as an owed thing, not as a discovered thing: a source-discriminating observation is required to close the `gap` (F10, Fig 6 :33-35).
6. Use public, opt-in institutional venues and ask for a refutation rather than belief (Fig 10 :52: **"Bring a characterised residual, never the source."**).

---

## 7. Canonical usage check and retraction or confirmation log

Two framework sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: SEARCHED, INWARD, OUTWARD are distinct. For this question: SEARCHED means the existing bands have not been swept to their limit (more pulsars, longer baselines, full spectral modeling). INWARD means sharpen the instruments already returning something. OUTWARD means import a source model from a frame whose closure differs, with a source gate and a shadow test. Importing against a budget limit adds an atom that was not needed, so no new primitive is minted here.
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` :281: *"An unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict."*

| earlier finding or reading | status after the canonical check |
|---|---|
| First pass wanted Fig 13's spectrum to be Ω_gw(f) | **Retracted and re-censused (S1).** Primitive and composition are different objects. |
| First pass wanted "gradient" to name strain h | **Refused (S2).** A binding needs provenance and a shadow test. |
| "The early-universe signature has been detected" | **Retracted (S5).** Detection and source attribution have different anchors. |
| Shape, not a name, applied to the source | **Canonically confirmed.** The README's phrase is about a missing thing; the source of the GWB is not in the closure of the detector frame. |
| Non-detection is silence | **Canonically refused.** Fig 8 :39 and Fig 13 :134 make unreachability a verdict. |
| Independence from four PTA teams | **Narrowed.** Different instruments are independent; one pooled pipeline is one pool. Both readings kept (S3). |
| Isomer claim | **Narrowed.** Held `specified` over a shared atom set; functional group as currently written (S4). |
| This audit is a ground reading | **Refused.** It is a simulation checked for internal consistency. It cannot settle the question. |

### Seven-question recursive derivation, summary

1. **Is a background registered?** Yes in the nHz band, by the detector anchor (Fig 2 :29). Not a source name.
2. **Is it one question?** No, a union compound of source conditions (Fig 9 :54-58).
3. **Where is the per-slot residual?** In spectral and statistical form across frequency and sky (Fig 1 :19/:22; Romano and Cornish).
4. **What is the shape?** A discriminating deviation, written as an ordinary term in section 0, not a preference.
5. **Is a new primitive needed?** No. The six-term set and the seven bonds suffice to describe the shape; the source is an import that needs a gate (Fig 6 :23, Fig 8 :50-52).
6. **Is it settled?** The detection is settled in D1; the source is not. Status `candidate` for any primordial attribution (Fig 5 step 5 rule, *"the ground settles it"*).
7. **What is the route?** SEARCHED across bands first, INWARD on instruments already returning something, OUTWARD only for a provenanced source model. Instrument condition in F10.

### Updated verdict

The shape survives: per-slot, union-compound, isomeric over a shared atom set when written that way, and source-refusing until a discriminating instrument pays. The specific claim that the observed nHz background is already an early-universe signature does not: it names where the framework returns a shape, it merges two anchors, and it is a verdict stated without the required instrument. Strains after re-census: two live (S3, S4), both named, none smoothed over.
