# Figure-grounded audit: how often do real Earth systems show the warning signals, and when do they fail?

**Mode of this document: `general` on the structural shape, `specified` on the per-domain verdicts, `gap` on the universal frequency. Nothing here is `grounded` by this derivation.**

Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is checked for internal consistency against the canonical figure text. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources were opened 2026-11-22 and are listed in `10_source_ledger.csv`.

---

## 0. Proposal header (seat reasoning)

```
DECIDES:    Split the question into a union of three loops, not one search. D: does a signal
            range against a ground. FP: does it fire without a transition. FN: does it miss a
            transition. The frequency "how often" is a filter over slots, not a witness for any
            slot (Fig 9 :60; Fig 1 :19). A = B? No: "how often" asks a population count,
            "when do they fail" asks a channel condition. Each has its own ground.
HOURS:      Read first 1.0. Census 0.7. Figure grep and quote check 0.8. World search 2.0.
            Write 12 files 4.0. Second-seat audit 0.8. Total about 9.3 agent-hours.
PRIOR CASE: QMGR-0037, imported exemplar. Its retraction table is the calibration for what
            counts as a strain rather than a contradiction.
ANALOGUE:   A detector is a channel in the Ground Maintainer's sense (Fig 10). The same loop
            governs a thermostat, a medical screening test, and an ecosystem indicator: the
            channel decays, the ground does not (Fig 10 :24). The habitat of real Earth systems
            is enumerated, never composed (Fig 11 :43).
LIMIT:      The figures return a shape and a failure taxonomy. They return no frequency.
            Fig 13 :134: "Unreachable is a verdict here, not a silence". A 1,300-question
            pipeline must record this gap rather than fill it with a percentage.
```

---

## 1. The residual in effect terms

The question follows question 73 in the same section, which asks whether early-warning signals such as slower recovery after disturbance can reliably indicate an approaching threshold. Question 74 asks two things about those signals in real Earth systems: how often they appear, and when they fail.

State the residual per slot, not as one global number.

```
For system s:   Gamma(b,a)_s = "a threshold is approaching"   (the indicator's reading)
                o'_s         = the realised transition, or none  (the ground)
                R_s          = |Gamma(b,a)_s - o'_s|
```

- **True positive:** the signal rises and the system crosses. `R_s` goes to zero in time.
- **False positive:** the signal rises and no crossing follows (or the crossing was chance, not a bifurcation). The frame has ranged itself against a moving picture of itself.
- **False negative:** the crossing occurs and the signal never rose. The residual arrived but the channel did not carry it.

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** A single percentage for "Earth systems" is exactly the average that Fig 1 forbids. It is a budget statistic, not a reading of any system.

**R by arity, symmetry and scale.** Arity: one residual per system and per realization; the question bundles three overlapping conditions. Symmetry: the indicators are ordered and threshold-like, not symmetric conjunctions; a rising trend before a fall is a sequence, and the decision is a comparison (`⋛` in the Operators table, *"a threshold relation between two quantities"*). Scale: within one time series, across realizations of one system, and across a population of systems.

**Partition or union.** This is a **union**, not a partition. Detection, false positive and false negative are conditions that overlap in the same indicator and the same series. Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** So unbundle into three loops and keep their verdicts separate. Averaging them would produce the number the question seems to want and the number the figures forbid.

---

## 2. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. A domain without a nameable anchor is not yet a domain.

| domain | actors | currency | anchor | partition / union | status |
|---|---|---|---|---|---|
| 1. Indicator frame | AR(1), SD/variance, skewness, kurtosis, density ratio, recovery-rate estimators, flickering indices | a trend statistic computed from a detrended series; a description of a series, not a fact about a transition | none of its own; it must range against domain 2 | union member | named, anchor borrowed |
| 2. The ground (the realised transition) | the crossing itself, the counterfactual "no crossing", replicated experiments, palaeo records, whole-ecosystem manipulations | the realised transition or its absence | this settles the question and does not update on the indicator | the thing ranged against | named, anchor present but hard to reach |
| 3. The channel (observation and analysis) | sampling interval, window length, detrending, seasonal adjustment, variable choice, truncation rule, number of replicates | contact with the ground | the ground, held fixed while the channel decays | union member | named, anchor inherited from 2 |
| 4. The habitat (population of real Earth systems) | lakes, forests, reefs, climate subsystems, their conditions and relations | frequency counts over systems | each system's own ground | union of enumerations, not a composition | named, enumerated |

**Order by dependency (Fig 3).** Perception: can the signal be perceived at all at the chosen sampling rate and noise level? Vocabulary: does the frame have a term for what the signal affords, namely an approaching catastrophic threshold rather than generic instability? Objective: what counts as a signal, and was that threshold set before or after the outcome was known? Planning: can anyone act on the warning? Learn and carry: can the result be checked and carried to the next system? The chain is ordered by dependency, not importance; a step whose input never arrives cannot be diagnosed. Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** The middle link is the one that fails here: there is no instrument that reads off the time series alone whether a system is approaching a bifurcation or merely becoming more sensitive to perturbation (Kéfi et al. 2013, O'Brien et al. 2023). Everything downstream of that missing vocabulary is effort spent above the break.

**Every domain has a nameable anchor except domain 1, which borrows domain 2's.** By the census rule that is correct: an indicator is a frame, and a frame is not an anchor. Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :30: **"If it moves when you push on it, it is not an anchor."**

---

## 3. Figure census and verbatim quotes, quoted before concluding

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Each string below is an exact substring of that file.

| figure | bearing on this question | preliminary verdict |
|---|---|---|
| Fig 1 | residual per slot; aggregating across systems destroys the signal | governs "how often" directly |
| Fig 2 | anchor, independence, mirror, correlation valence | governs the indicator-ground relation |
| Fig 3 | dependency order; the middle link has no instrument | governs the vocabulary failure |
| Fig 6 | instruments improved from worse instruments; inward vs outward | governs method design, not frequency |
| Fig 8 | underivable vs unreachable at budget; search that finds nothing proves nothing | governs the honest stop |
| Fig 9 | union vs partition; describe before looking; filters vs witnesses | governs the unbundling and the frequency verdict |
| Fig 10 | ground does not decay, channel does; four channel failures; convention that decides | governs "when do they fail" directly |
| Fig 11 | habitat enumerated never composed; contact cascades; improvement must change contact | governs the population enumeration |
| Fig 12 | functional group and isomer; order and arrangement | governs indicator relations |
| Fig 13 | unreachable is a verdict; shape not a name | governs the gap |
| Operators / Symbols | ⋛ threshold; R per slot | notation and definition only |
| THE_FORMULA | settle by ground; mode rule; searched / inward / outward | method, cited as local doc, not as a figure line |

**Quotes, before any conclusion:**

- Fig 1 :19 "The residual is indexed by object slot, not aggregated."
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
- Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
- Fig 2 :30 "If it moves when you push on it, it is not an anchor."
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong."
- Fig 2 :45 "Frames range against the ground. They do not negotiate with it."
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
- Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something."
- Fig 6 :34 "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."
- Fig 8 :39 "So a search that finds nothing is never a proof of absence."
- Fig 8 :40 "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."
- Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit"
- Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- Fig 10 :24 "the ground does not decay, the channel does"
- Fig 10 :25 "stale percepts, dropped transients, saturated metrics, pooled readings"
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."
- Fig 10 :47 "a convention that decides an outcome has stopped being one"
- Fig 10 :52 "Bring a characterised residual, never the source."
- Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying"
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."
- Fig 11 :43 "The habitat is enumerated, never composed."
- Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."
- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Fig 13 :134 "Unreachable is a verdict here, not a silence"

---

## 4. Findings, one loop per domain, verdicts separate

Mode is stated on each finding. `general` = structural, `specified` = falsifiable prediction, `grounded` = measured by a cited study (not by this derivation).

### F1 - An early-warning signal is a channel, not an anchor (`general`, triangulated)

Fig 2 :29 and :30 define the anchor. Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."** A rising AR(1) or SD is a reading made by a frame from a detrended series. It is not the crossing. The crossing, or the counterfactual no crossing, is what settles the question.

World corroboration, low overlap with the figure text: Gsell et al. 2016 tested four indicators in five lakes and concluded that *"EWIs do not provide reliable and consistent signals of impending critical transitions despite using some of the best routinely monitored freshwater ecosystems."* They also note that *"Unfortunately, we lacked records to serve as controls"*, so the true-negative rate could not be measured. Boettiger and Hastings 2012 show that systems which cross by chance look like systems approaching a bifurcation, so an indicator can range against a picture of itself. Both corroborate the figure verdict. **Triangulated** across Fig 2 and Fig 10 with the empirical literature.

**Refuter:** a pre-registered detector that separates replicated bifurcation systems from replicated stable systems at stated false-positive and false-negative bounds would refute F1. Until then F1 stands as `general`.

### F2 - The figures give a failure taxonomy, and it is the channel taxonomy (`general`, triangulated)

Fig 10 :24: **"the ground does not decay, the channel does"**; :25: **"stale percepts, dropped transients, saturated metrics, pooled readings"**.

Mapped to this field, mode `specified`:

| figure failure | EWS instance | world corroboration |
|---|---|---|
| stale percepts | a window that still contains the pre-tip regime after the crossing; a trend truncated only after the collapse is visible | Boettiger and Hastings 2012: *"Exactly where a particular study will choose to truncate such a trajectory will necessarily be arbitrary without an underlying model of the process."* |
| dropped transients | a fast excursion missed by a fortnightly or monthly sample | Gsell et al. 2016: *"Low AR-1 values ... reflect the fact that transitions in the real world are likely triggered well before the actual tipping point is reached"*, and sampling intervals were long relative to plankton generation times |
| saturated metrics | variance or autocorrelation that cannot discriminate because the series is too short, noisy, detrended the wrong way, or already near its bound | Contosta et al. 2023: detrending and sliding-window decisions *"affect the power to detect an approaching regime shift and the likelihood of false positives"* |
| pooled readings | averaging across variables, taxa, trophic levels or systems, which is exactly the aggregation Fig 1 forbids | Gsell et al. 2016: *"agreement among the four indicators was low"*; O'Brien et al. 2023: *"different trophic levels often expressing different forms of abrupt change"* |

This is the part of the question the figures answer directly: **signals fail when the channel loses ground contact while the indicator keeps producing readings.** It is not a list of statistical inconveniences; it is the named office of the Ground Maintainer. **Triangulated** (Fig 10 plus Fig 1, low overlap in the figure set, and several external studies).

**Refuter:** show an EWS failure that is not any of the four channel states and not a vocabulary gap (F4), and F2 is incomplete. A cleaner taxonomy would replace it.

### F3 - Agreement among indicators drawn from one series is one witness (`general`, triangulated)

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."** Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

AR(1), SD, skewness and density ratio are four functions of the same detrended series. Their agreement is the pool talking. Gsell et al. 2016 found that AR(1) and SD concurrently increased in only 5 of 16 series, and only three of 64 trend tests were significant in more than half of the surrogate comparisons. Contosta et al. 2023 found that *"Temporal trends in critical slowing down and flickering were neither coherent across ecosystem state variables, nor were they unambiguous."* O'Brien et al. 2023 found that *"most indicators not performing better than chance"* and that *"no indicator displayed reliability across resolutions or true positive/true negative time series better the 0.5 probability"* (the source prints a missing word; the sense is "better than the 0.5 probability").

**Refuter:** demonstrate that two indicators computed from the same series draw on genuinely independent evidence, and Fig 2 :40's disqualification does not apply to that pair. Independence must be bought, not assumed.

### F4 - The middle link has no instrument (`general`, single-source for the figure rule, world-corroborated)

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** The vocabulary link, "what does a slowing recovery afford: an approaching bifurcation, or merely rising sensitivity?", has no reading from the series alone.

World evidence, mode `grounded` by the cited studies: Kéfi et al. 2013 show that *"a decrease in recovery rate cannot be considered as specific to approaching catastrophic shifts"* and that *"indicators specific to catastrophic shifts are still lacking."* O'Brien et al. 2023 found *"few instances of critical transitions"* in nine lakes, so most regime shifts were not the mechanism the indicators assume. Wang et al. 2012 found the opposite pattern in one lake: flickering, with *"rising variance coupled to decreasing autocorrelation and skewness"*, which is *"consistent with flickering rather than critical slowing down."* Three different vocabularies, one family of statistics.

**Refuter:** an instrument that reads the transition mechanism off the pre-tip series alone would close this link. None of the sources opened reported one.

### F5 - The universal frequency is a gap, not a silence (`general`, gap)

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** A frequency is a filter. It tells a budget how often to expect a hit; it does not tell you whether system s is approaching a tip.

Fig 11 :43: **"The habitat is enumerated, never composed."** Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."** The count can only be made by enumerating systems, and each enumeration defines its own habitat:

| enumeration (world, `grounded` by the study) | what was counted | reported result |
|---|---|---|
| Gsell et al. 2016, PNAS | 16 pre-breakpoint series in 5 lakes, 4 indicators | at least one indicator signalled in 14 of 16; AR(1) and DR in 10 of 16, SD in 9, SK in 7; *"In 44% of the 64 cases, the EWI failed"*; agreement low |
| Contosta et al. 2023, ERL | 31 state variables at one forest, 4 indicators | *"More than half of the early warning signals calculated (58%) indicated declining resilience"*; critical slowing down only about 20 percent; the rest increasing or unchanged |
| O'Brien et al. 2023, Nature Communications | 9 lakes, plankton, classic and second-generation indicators | *"We find few instances of critical transitions"*; *"most indicators not performing better than chance"* |
| Wang et al. 2012, Nature | one lake, sediment record | signals appeared 10 to 30 years early, but of the flickering kind, not critical slowing down |

These are not one estimate with noise. They are different enumerations over different habitats and different definitions of "signal" and "transition". Averaging them would repeat the error Fig 1 :22 names. **The figures cannot produce a universal frequency. That is a `gap`, recorded as a verdict.** Fig 13 :134: **"Unreachable is a verdict here, not a silence"**. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

**Refuter:** a single protocol applied to an enumerated habitat, with a pre-registered definition of signal and ground, that returns a stable frequency across independent enumerations would close this gap. Until then no percentage is asserted here.

### F6 - A post-hoc convention that decides the outcome has stopped being a convention (`general`, triangulated)

Fig 10 :47: **"a convention that decides an outcome has stopped being one"**. Fig 9 :27: **"describe it before you go looking, or any frame you pick will seem to fit"**.

Boettiger and Hastings 2012 select simulations conditional on having collapsed, then look backwards for a trend. The signals appear precisely because the window was chosen after the outcome. Their phrase for it is the prosecutor's fallacy, and their remedy is replication: *"experimental studies with replicates avoid this pitfall entirely."* Contosta et al. 2023 likewise note that detrending and window choice change the false-positive rate. Mode `specified`: any study that chooses its window, its variable or its trend threshold after seeing the collapse has made a convention decide the outcome.

**Refuter:** show a pre-registered window, variable and threshold whose verdict is unchanged when the same analysis is run on stable controls, and this finding does not apply to that study.

### F7 - More indicators from the same series do not increase ground contact (`general`, single-source)

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."** Adding a fifth moment of the same series is an agent-only improvement in the sense of Fig 11. Gsell et al. 2016 is the check: four indicators, low agreement, no relation to mechanism, variable level, step height, series length or sampling interval. **Single-source** for the figure rule (Fig 11), corroborated by one empirical study. No second figure triangulates it; do not upgrade it.

**Refuter:** an added indicator that uses an independent instrument, not the same series, and measurably raises the true-positive rate at fixed false-positive rate, refutes the application here (not the figure rule).

### F8 - Instruments are improved from instruments already returning something (`general`, triangulated)

Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** Fig 6 :34: **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

All the methods opened here are refinements of statistics already returning a reading: AR(1), variance, skewness, spectral ratios, then multivariate and likelihood versions (Boettiger, Ross and Hastings 2013; O'Brien et al. 2023). None was specified from bifurcation theory alone and then built. Mode `general`: the next EWS instrument will come from a worse instrument that already registers something, not from a description of what a perfect detector would do.

**Refuter:** a detector specified from first principles and built without a predecessor returning a reading would break this rule. None was found.

### F9 - The outreach verdict is constrained by the same figures (`general`, triangulated)

Fig 10 :52: **"Bring a characterised residual, never the source."** Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."** Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"**. Fig 2 :35 and :40 govern selection: do not pick recipients for likely agreement. So stage 1 sends the failure taxonomy and its refuter, records the verdict, and only then offers the framework. `02_outreach_email.md` follows this order.

**Refuter:** if a reviewer can show that sending the full framework first does not spend the reader's independence, the ordering is a preference rather than a rule. The figures say otherwise.

---

## 5. Pre-registered refuter (written before the conclusion)

1. **Detector refuter.** A pre-registered EWS detector, tested on replicated bifurcation and replicated stable systems, with false-positive and false-negative rates below bounds fixed before the run, refutes F1 and F2.
2. **Independence refuter.** Demonstrating that two indicators drawn from one series are independent evidence rather than one pool refutes F3 for that pair.
3. **Vocabulary refuter.** An instrument that reads the transition mechanism off the pre-transition series alone refutes F4.
4. **Frequency refuter.** One protocol, applied to an enumerated habitat with a fixed definition of signal and ground, returning a stable frequency across independent enumerations, refutes F5's gap.
5. **Moving-ground refuter.** A demonstration that the ground itself, not the habitat around it, changes after the forecast would require re-census of Fig 2 :29 and Fig 10 :24 (see §7 strain S1).
6. **Convention refuter.** A study whose window, variable and detection threshold were fixed before the outcome and whose verdict survives stable controls refutes F6 for that study.

If any fires, the corresponding finding is withdrawn. None was fired in this simulated run.

---

## 6. Recommendation

1. Lead with the failure taxonomy, not with a success rate. The figures answer "when do they fail" directly (Fig 10 :24, :25) and "how often" only as a gap (Fig 9 :60, Fig 13 :134).
2. Keep the three loops separate. Do not average detection, false positive and false negative into one score.
3. Report frequencies only with their habitat attached: which systems, which variables, which window, which definition of crossing. The four world enumerations disagree because their habitats differ.
4. Require replication or an independent control before treating indicator agreement as evidence (Fig 2 :40, :42).
5. Pre-register the window, the variable and the trend threshold before looking at the collapse (Fig 10 :47).
6. Send the generator, not the recording. Fig 4 :22: *"Only methods cross up. Only head starts come down."* The refuter and the failure taxonomy travel; the conclusion does not.

---

## 7. Canonical usage check and re-census

Two framework sources were read after the first findings and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also gives the re-census rule: a reading that makes one figure contradict another has misidentified its domain; and the limit: the framework reports *"a shape, not a name"* and stops at the limit of the instruments.
- `FRAMEWORK/figures/THE_FORMULA.md`: step 5, *"the ground settles it. Verified only by what pays. A gate is not the ground."* Step 7 separates SEARCHED, INWARD and OUTWARD. Underivable-in-principle and unreachable-at-this-budget are different facts with different instructions.

### Strains, named and re-censused

**S1, moving thresholds.** Fig 10 :24 says the ground does not decay, but Earth-system thresholds can move as climate, ecosystem or human pressures change (question 75 in the same section). Re-census: the ground for a forecast is the realised crossing inside a stated window, which is a past fact once it has happened. What moves is the habitat, the set of conditions and relations in Fig 11's enumeration, and with it the frame's model of where the threshold lies. The decay is in the channel (the model), not in the ground (the crossing). No strain after re-census. If a case is shown where the crossing itself changes after settlement, Fig 2 :29 must be re-censused, and refuter 5 covers it.

**S2, no measured ground for prospective forecasts.** Fig 2 :29 lists a measurement, experiment, counter or patient outcome as an anchor. For a prospective Earth-system tip there is often no such measurement yet; there is one realization and no control. Re-census: this is unreachable at this budget, not underivable in principle. Fig 8 :40: **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."** The remedy is replication, controls and longer records (Fig 2 :42), not a new primitive. Recorded honestly as a reachability limit.

**S3, all-figure agreement is expected.** Every figure quote here comes from one canonical set, and every world source on EWS cites the same small literature. Agreement between the figures is internal consistency, and agreement among the world sources is one evidence pool talking. Neither is independent corroboration of the framework. The world sources corroborate specific empirical claims, not the framework's authority.

### Retraction and confirmation log

| earlier reading | status after the check |
|---|---|
| "EWS are unreliable" as a blanket verdict | **Narrowed.** The figures do not say unreliable. They say a frame is not an anchor and the channel decays. Per-system verdicts remain separate; no global average. |
| "the figures give a success percentage" | **Retracted before conclusion.** Fig 9 :60 makes frequency a filter, not a witness. Recorded as `gap`. |
| "false positives are a statistical nuisance" | **Upgraded.** Fig 10 :47 makes the post-hoc convention the failure, and Boettiger and Hastings 2012 give the mechanism. |
| "four indicators give four independent checks" | **Retracted.** Fig 2 :40 disqualifies agreement from a shared pool; Gsell et al. 2016 measure low agreement. |
| "Kéfi and Wang conflict" | **Not a conflict.** Kéfi addresses mechanism specificity; Wang reports flickering in one lake. Different residuals, different scales. Re-census, not a contradiction. |
| "O'Brien 44 percent versus Contosta 58 percent conflict" | **Not one number.** Different habitats and definitions. Both are kept as separate enumerations; no average taken. |
| S1 and S2 | **Recorded as strains, then re-censused.** S1 resolves to habitat versus ground; S2 resolves to budget versus principle. Neither was smoothed over. |
| "shape not a name" applied to the frequency | **Confirmed.** The figures return the taxonomy and the gap, not the count. |
| simulated status | **Confirmed.** This audit is a simulated derivation. It cannot settle the empirical question. |

---

## 8. Updated verdict

- Domain 1 (indicator frame): **triangulated**, `general`. A signal is a channel, not an anchor.
- Domain 2 (ground): **triangulated**, `general` with a `specified` reachability limit. Prospective forecasts lack a measured ground at this budget; that is not underivability.
- Domain 3 (channel and failure modes): **triangulated**, `general` taxonomy with `specified` instances. This is the direct answer to "when do they fail".
- Domain 4 (frequency over real systems): **`gap`**, `general`. The figures cannot produce a number; the empirical enumerations are habitat-specific and disagree.
- Strains after re-census: two named (S1, S2), both resolved by re-census; one standing limitation (S3, shared evidence pools).
- Nothing in this audit is `grounded` by this derivation. The empirical frequencies quoted from Gsell, Contosta, O'Brien and Wang are `grounded` by those studies only.
