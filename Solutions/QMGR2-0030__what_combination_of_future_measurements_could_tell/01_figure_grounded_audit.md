# Figure-grounded audit: what combination of future measurements could tell a real physical discrepancy from an analysis problem?

**Mode of this document: `specified`, not `grounded`.** It states what a discriminating measurement set must look like. `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (2026-11-19) says LLM output can "simulate an approximate answer/output with the formula" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Figure quotes are verbatim from `FRAMEWORK\reference\03-FIGURES_TEXT.md` (cited `Fig N :line`). Local framework files: `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`. World sources are listed in `10_source_ledger.csv` and were fetched 2026-11-23.

---

## 0. The residual, stated in effect terms

R is the observed disagreement in the inferred expansion rate: early-universe probes under ΛCDM return one value of H0, late-universe local measurements return another, with each side internally precise. The question is not "what is H0" and not "which value is right". It is: **which source produced the mismatch**.

- Candidate source P (physical): the ground differs from the model. The expansion history is not ΛCDM in the relevant epoch. The channel is fine.
- Candidate source A (analysis): the channel differs from the ground. Calibration, crowding, stellar populations, lens mass-profile priors, pipeline choices, or a model assumption shifts the inferred value. The ground is fine.

The same reading is compatible with both sources. That is a metamerism problem: an instrument returns a value and "cannot comment on the source" (*The Hard Problem is About Source*, 2026-08-28). Refining the same measurement that produced the reading cannot separate P from A, because closure is idempotent: Fig 8 :32, "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

What is owed is a **source-discriminating measurement set**: a combination whose outcome would be different under P and under A. The effect we need to name is not a number but a **differential signature**.

**Arity / symmetry / scale of R.** Arity: at least two conditions (P and A, and they can overlap), so this is a union compound, not one hard problem. Symmetry: the two sources are not interchangeable under a swap of instruments; a lensing mass-profile prior changes the lensing inference but not a Cepheid calibration, so the discriminant is ordered, not symmetric. Scale: R is first order inside each measurement regime, and second order at the comparison between regimes. Per Fig 9 :22, describe it by "arity · symmetry · scale" before selecting any frame.

---

## 1. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not yet a domain. All six below have one.

| # | domain | actors | currency | anchor | partition / union | status |
|---|---|---|---|---|---|---|
| D1 | Early-universe inference | CMB photons, sound horizon, Boltzmann solver, ΛCDM assumptions | H0 inferred under a model | the CMB measurement itself, fixed by observation | one condition of the union | named |
| D2 | Late-universe ladder | Cepheids, TRGB, SNe Ia, water masers, DEBs, parallaxes, Miras, SBF | calibrated distances, H0 | geometric distances (DEBs, masers, parallaxes) | one condition of the union | named |
| D3 | Independent late-time geometry | GW standard sirens, strong-lensing time delays, cosmic chronometers, cluster counts, GRBs | luminosity distance, time-delay distance, H(z) | the physics of GW propagation and lensing, independent of the ladder and of the sound horizon | a second frame whose closure differs from D1 and D2 | named |
| D4 | Consistency / null tests | dimensionless ratios of distance measures, early-vs-late predictions of the same statistic | a null value predicted under "no discrepancy" | the measured distances; the identity is a convention that can be violated, not the ground | where the union becomes describable | named |
| D5 | The channel (analysis) | pipelines, priors, mass-profile models, calibration choices, selection effects | systematic error budget, shift in H0 under assumption swaps | the ground, which the channel must not move | the part of the union that is a channel failure | named |
| D6 | Verification / outreach | independent teams, blind analyses, reviewers | agreement and residual | the ground, never agreement | the seat that must not draw on one pool | named |

**Partition or union.** Union. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A bundled question about "the H0 tension" contains overlapping conditions: early-time physics, late-time physics, ladder calibration, CMB analysis assumption, and independent-method systematics. A single extra measurement of the same kind clears the region where only one condition holds and leaves the intersections standing. This is why question QMGR2-0030 cannot be answered by "measure H0 more precisely".

**Order by dependency (Fig 3).** 1 perception: is the offset stable and not noise? 2 vocabulary: do we have terms for "ground changed" versus "channel changed"? Yes (D4, D5). 3 objective: what counts as progress here, in our own terms? A statistic that is fixed under the null and departs under one alternative. 4 planning: choose frames with low overlap. 5 learn and carry: blind reanalysis, pre-registered refuters, ranked reversible cuts. The chain is ordered by dependency, not importance: Fig 3 :19, "Optimising a link that already works cannot rescue one that does not." Most effort today lands on link 1 (more of the same measurement), because that is where the instruments already exist. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The under-instrumented link is 3, the objective (the discriminant).

**Strain test before concluding.** Reading Fig 10 :24 ("the ground does not decay, the channel does") as "the early-universe data are the ground and the late-universe data are the channel" strains the line, because both regimes have their own ground (their own measurements) and both have their own channel (their own analysis). Re-census: the line governs the relation between a measurement regime and its own analysis chain, not a ranking between regimes. It governs D5, not D1 versus D2. No strain remains after the re-census.

---

## 2. Figure census (quoted before concluding)

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | residual per slot, never averaged | report each method's residual, not one global tension |
| Fig 2 | anchor must not update; independence decides whether agreement means anything | the combination must be low-overlap and range against a ground |
| Fig 3 | dependency order; the middle link has no instrument | the discriminant, not more precision, is the missing link |
| Fig 4 | round trip and `R_T` | early-to-late prediction must be brought down and compared |
| Fig 5 | the fifth kind, refuted, and the persistent-flat residual test | an analysis problem is a refusal of a held term, not a new term |
| Fig 6 | inward and outward instruments are opposed; instruments improved from worse ones | refine existing methods and import new closures in two separate tracks |
| Fig 7 | selection between rooms; a chain of mirrors is one long room | the next measurement must differ from the last and match the residual |
| Fig 8 | closure idempotent; independence is one quantity read twice; residual first | more of the same cannot add an atom; union surplus lives in differing closures |
| Fig 9 | union vs partition; describe the effect; narrowing gets close, ground decides; reversible cuts | this is a union compound; the answer is a shape and a ranked set of cuts |
| Fig 10 | ground does not decay, channel does; install what can be violated | the analysis problem is a channel failure; a null test must be able to fire |
| Fig 11 | capability is agent-and-habitat | a new instrument changes contact, which is what moves the answer |
| Fig 12 | isomers, functional group, arrangement | different measurement sets with the same ingredients are different terms |
| Fig 13 | six kinds, cross-kind composition | the residual is not a primitive; "physical discrepancy" is a composite |
| Operators / Symbols | ¬ refusal; R is the aim; ground is the anchor | an analysis problem is a refusal of a calibration term, using ¬, not a new bond |

---

## 3. Findings F1 to F9

### F1: One more measurement of the same kind cannot close this residual

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

A tenth H0 determination using the same ladder, the same sound-horizon prior, or the same lens mass-profile family explores more of a space already swept. It can shrink statistical error without touching the systematic that defines the union. The world literature agrees: Di Valentino et al (2021) write that the data "demand a hypothesis with enough rigor to explain multiple observations--whether these invoke new physics, unexpected large-scale structures or multiple, unrelated errors," and conclude by "pointing to the need for additional probes."

**Refuter:** if a single additional measurement within one existing family removes the offset under every analysis choice, without any change in assumptions, the union reading is wrong and the problem was a plain statistical fluctuation. Until that fires, "more precision" is a filter for the budget, not a witness for the verdict (Fig 9 :60).

### F2 - The two sources are "ground changed" and "channel changed"

Fig 10 :24: "the ground does not decay, the channel does"

Fig 10 :25-28: "stale percepts, dropped transients, saturated metrics, pooled readings" and "the output is not a verdict, it is" / "you have lost touch"

A physical discrepancy is a change in what the ground returns. An analysis problem is a change in the channel: the reading drifts while the ground does not. The concrete mechanism exists in the world literature. Birrer et al (2020, TDCOSMO IV) identify the mass-sheet transform as "the dominant source of residual uncertainty in H0" and find that adding stellar-kinematics constraints moves the inferred H0 from 73.3 to 67.4 km/s/Mpc on the same lens data. That is a channel change large enough to cover the tension.

**Refuter:** produce a channel change that flips the proposed discriminant while leaving the ground reading invariant, or a ground change that leaves every channel reading invariant. The second is not observable from inside, so if only the second is possible, the question is not decidable with these instruments and must be reported as unreached, not answered.

### F3 - The combination must be low-overlap, or its agreement is one witness

Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence." and "Independence is what makes agreement mean something."

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."

Two teams reading the same Pantheon supernova catalog with different priors are not two frames. A Cepheid ladder and a TRGB ladder share the SNe Ia relative distances and the same host-galaxy photometry; they are partly one frame. A GW standard-siren luminosity distance shares no calibration with either. Independence is the parameter, not a caveat. Fig 2 :42: "Buy independence in proportion to the cost of being wrong." The cost here is a 4 to 6 sigma tension shaping all inferred cosmological parameters, so independence is worth paying for.

**Refuter:** show that two supposedly independent methods draw on the same calibration, the same data release, or the same assumed prior. Then their agreement is the pool talking (Fig 2 :40) and the surplus claimed in F5 disappears.

### F4 - The discriminant must be a null statistic predicted to be fixed under the null, and must not contain the disputed quantity

Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause"

Fig 8 :53: "Residual first, frame second."

Fig 10 :18-19: "a declared meaning is not a grounded one" and "→ install what can be violated"

A null statistic must be able to fire; a definition that is true by construction is a constant the analyst authored, not a measurement. The cleanest published shape is Kouniatalis and Saridakis (2026): combine strong-lensing time-delay distances with GW standard-siren luminosity distances into a dimensionless ratio that is "exactly independent of the Hubble constant," then compare its early-universe prediction with its late-time measurement. Because the disputed quantity H0 cancels, no ladder calibration can move the statistic.

**Refuter:** if a proposed statistic is identically satisfied by both a new-physics model and a systematics model, it is not a discriminant. Show one such pair and the statistic is demoted to a consistency check on precision only.

### F5 - Run inward and outward instruments as two tracks and never read one against the other

Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."

Fig 6 :30: "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."

Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Fig 6 :34-35: "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."

Inward track: refine the ladder and the CMB analysis until a systematics floor appears. The world record already does this: TRGB is "parallel to, but independent of the Cepheid distance scale" (Freedman et al 2019) and lands "midway in the range defined by the current Hubble tension"; Riess et al (2019) report "independent tests which show this discrepancy is not readily attributable to an error in any one source or measurement." Outward track: import a different closure, standard sirens, lensing time delays, distance-duality tests (Alfano et al 2025: "Deviations from the so-called cosmic distance duality relation may result from systematic errors in distance measurements or, more interestingly, hint at new physics"), cosmic chronometers, BAO. Both tracks already return something; neither is a hypothetical sensor.

**Refuter:** if an inward refinement alone removes the offset under blind reanalysis, the outward import was an unnecessary atom, priced above starting from primitives (Fig 6 :51-52). If only outward frames can register the discrepancy, record that and do not force an inward explanation.

### F6 - Report the residual per method, never as one averaged tension

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

A single combined H0 with a single error bar throws away the only signal that says where to look. The workshop summary of Verde, Treu and Riess (2019) is the right shape: "combining any three independent approaches to measure H0 in the late universe yields tension with the early Universe values between 4.0σ and 5.8σ. This shows that the discrepancy does not appear to be dependent on the use of any one method, team, or source." The finding is stated per slot, which is why it survives.

**Refuter:** if a global combined statistic fully reproduces the per-method pattern, so that no live slot remains after aggregation, then aggregation is harmless and this finding is withdrawn. Until that is checked, the per-method table is the reportable object.

### F7 - The next measurement must differ from the last and match the residual it surfaced

Fig 7 :35: "A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

Booking another Cepheid analysis is booking a room like the last one. The room summoned by this residual is the one whose closure lacks the ladder and the sound horizon: lensing plus sirens, with lensed sirens as the eventual single-system version. The published forecast is explicit that "with the forthcoming detection of lensed gravitational-wave standard sirens, the proposed test provides a timely and robust framework" (Kouniatalis and Saridakis 2026). That is a room selected against the residual, not a preferred frame chosen first.

**Refuter:** if the next measurement shares a calibration or an analysis pipeline with the one that surfaced the residual, the chain is a mirror chain and no progress is purchased, whatever the precision.

### F8 - The framework returns the shape of the combination, not the name of the instrument

Fig 9 :32: "you get a kind of thing, never the answer itself"

Fig 9 :41: "so keep every cut ranked and reversible"

Fig 9 :42: "narrowing gets you close, the ground decides"

The canonical usage rule (local `FIGURES_README_canonical.md`) says the framework returns "a shape, not a name" and stops "at the limit of what the available instruments can distinguish". No figure line names a telescope. So the deliverable here is a set of required properties, plus a ranked list of cuts that can be reversed when the ground decides. Naming DESI, Rubin, JWST, LIGO, or Euclid is an import from the cosmology frame, provenanced in `10_source_ledger.csv`, and carries zero framework authority.

**Refuter:** produce a figure line that names a specific instrument or survey as the resolver of an H0-type residual. There is none. If one is produced, this finding is retracted.

### F9 - An analysis problem is a refusal, not a new term

Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so"

Fig 5 :59-60: "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign."

`THE_FORMULA.md` step 2 names the REFUTED bin: "a term held is false; what is owed is a refusal, not an explanation." When a blind reanalysis with a different mass-profile prior moves H0 by the size of the tension, the term being refused is a held calibration or modeling assumption, not a new particle. Fig 12's negation is the operator: ¬, not a bond. The candidate to point the refusal at is the term whose residual persists and does not trend down under more data within its own family.

**Refuter:** if the persistent-flat residual is located in a term that is genuinely about the ground (an early-universe physics term that fails the same test across every independent late-time frame), then the refusal is aimed at the wrong term and the physical-discrepancy reading survives.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written now, before the recommendation is finalized.

The shape claim is refuted if any of the following holds:

1. **Independence fails.** Every candidate "independent" measurement in the combination is shown to draw on the same calibration, data release, or prior. Then the combination is one frame and Fig 2 :31-32 voids the triangulation.
2. **No differential signature.** A proposed discriminant returns the same value under a specified new-physics model and a specified systematics model of the size of the tension. Then it is not a source-discriminating measurement (F4).
3. **Inward sufficiency.** A blind reanalysis within one existing family removes the offset under all analysis choices with no import from another closure. Then the union reading (F1) and the need for an outward track (F5) are wrong.
4. **Refuter aimed wrong.** The persistent-flat residual points at a held analysis term in every independent frame, and refusing that term removes the discrepancy (F9), in which case the "real physical discrepancy" branch is excluded for this data set. This is a successful outcome, not a failure: the refuter is designed to fire.

If any of 1 to 3 fires, the recommended combination is withdrawn and the question is re-censused. If 4 fires, the question is answered for the present instruments, and the answer is "analysis problem". Until one of these is actually run with data, no part of this folder may be labelled `grounded`.

---

## 5. Recommendation: the combination, as a shape

`specified`, not `grounded`. This is a set of properties and a dependency order, not a named observational program.

**Core discriminant (the object of F4 and F7).** A dimensionless, H0-independent consistency statistic, predicted from early-universe data and measured at late times without the distance ladder or the sound horizon. The published instance is the lensing time-delay distance to standard-siren luminosity-distance ratio of Kouniatalis and Saridakis (2026), with an independent standard-siren H0 alongside it. Its eventual single-system form is a lensed GW standard siren.

**Two tracks, never read against each other (F5).** Inward: per-anchor ladder cross-checks (Cepheids with DEB and maser anchors, TRGB, SBF, Miras, parallaxes), each reported as its own slot. Outward: standard sirens, lensing time delays with stellar-kinematics constraints, distance-duality tests (luminosity distance versus angular-diameter distance), cosmic chronometers, BAO and CMB lensing.

**Blind assumption swaps (F2, F9).** Pre-registered reanalyses that change exactly one modeling assumption at a time, with the H0 shift recorded. The TDCOSMO mass-sheet-transform result is the template: 73.3 becomes 67.4 when the mass profile is constrained by kinematics.

**Reporting rules (F6, F8, Fig 9 :41).** Per-method residuals with their own systematics. Every ranked cut reversible. The early-to-late prediction is carried down and the round trip gap measured (Fig 4 :30, "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."). No single averaged H0 presented as the verdict.

**What the outcome table would look like.** Three rows are enough to be checkable: (a) null statistic consistent between early prediction and late measurement while independent H0 estimates disagree in a way that tracks one analysis choice, or analysis problem; (b) null statistic inconsistent while the independent H0 estimates agree, or physical discrepancy in the expansion history; (c) null statistic consistent and H0 estimates agree, or no discrepancy at current sensitivity, which is Fig 8 :39, "So a search that finds nothing is never a proof of absence." A fourth cell (null inconsistent and H0 estimates disagree) is a union compound that must be split again, not read as a verdict.

---

## 6. Canonical usage check

Read after sections 0 to 5: local `FIGURES_README_canonical.md` and local `60_FIGURES_AS_METALAWS.md`.

The figures README says the quotes are the authority and that a reading making one figure contradict another has misidentified its domain. It also says the framework returns "a shape, not a name" and reports "unreachable is a verdict, not a silence." The metalaws note says the seat reads the ground and does not ask the ground's maintainer to decide design questions that the figures already settle. Applied here: the figure lines decide the properties of the combination; the cosmology literature is secondary corroboration; no expert or institution should be asked to endorse the shape before checking stage 1.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "The answer is a named set of surveys" | **Retracted.** The README says a shape, not a name. Survey names are imports and are labelled as such in `10_source_ledger.csv`. |
| "Independence of teams is enough" | **Retracted.** Fig 2 :31 defines independence by shared evidence, not by headcount. Two teams on one catalog are one witness. |
| "The null identity is the ground" | **Retracted.** Fig 10 :18-19: "a declared meaning is not a grounded one" and "install what can be violated". The identity is a convention; the measured distances are the ground. |
| "More precision settles the tension" | **Retracted at figure level** by Fig 8 :32 closure idempotent. Precision is a filter for the budget, not a witness for the verdict (Fig 9 :60). |
| "Physical discrepancy versus analysis problem is one hard question" | **Refused as a partition.** Fig 9 :55 makes it a union of overlapping conditions. |
| "Fig 10 :24 ranks early data above late data" | **Retracted.** Re-census puts it in D5: ground versus its own channel, not regime versus regime. |
| "This derivation settles which source is real" | **Refused.** No measurement was taken. Mode `specified`, candidate. |
| Shape requirement (low overlap, H0-independent null, blind swaps, per-slot, reversible) | **Canonically confirmed.** Fig 2, Fig 8, Fig 9, Fig 10, Fig 1 all bear and were quoted verbatim. |

---

## 7. Strains and honest stops

- **Fig 10 :24 versus D1 and D2.** Resolved by re-census as above. The line governs a regime and its own channel, not a ranking of regimes.
- **Fig 6 inward versus outward.** Not a strain. Fig 6 :31 explicitly orders them as two tracks. Reading one against the other would be the error, so the recommendation keeps them separate.
- **What settles it is not yet available at full strength.** Lensed gravitational-wave standard sirens are "forthcoming" (Kouniatalis and Saridakis 2026). The null test is therefore a designed instrument awaiting its ground, not a delivered verdict. This is Fig 6 :34-35 applied honestly: the measurement has registered in forecast and in unlensed sirens, but the specific lensed version has not yet returned data.
- **Searched / inward / outward kept distinct (formula step 7).** SEARCHED: is the discriminant already in the published literature and unfound? Yes, it was found (F4, F7), so no more budget goes to re-searching that space. INWARD: sharpen existing ladder and CMB analyses (F5, in progress, with the TDCOSMO shift as the live signal). OUTWARD: import independent closures (F5, the siren and lensing tracks). These are not interchangeable instructions.
- **After re-census: one re-census recorded, no unresolved strain.** The only live limit is instrument availability, which is a budget and ground fact, not a figure conflict.

---

## 8. Final verdict

The combination that distinguishes a physical discrepancy from an analysis problem is not a single measurement and not a majority vote. It is a low-overlap set containing at least one statistic that cannot be shifted by the disputed calibration, run in two independent tracks, with blind single-assumption swaps and per-method residual reporting, and with every cut ranked and reversible. Verdict statuses per domain: D3 and D6 are **triangulated** for the independence and anchor requirements (Fig 2 and Fig 8, low overlap between the anchor argument and the union-surplus argument). The null-statistic shape is **single-source** for the figure level (Fig 9 and Fig 10), corroborated by one published proposal. Naming any particular instrument is a **gap** by design: the framework returns a shape. This is `specified`, ungrounded, and candidate. No measurement here settles which source is real.
