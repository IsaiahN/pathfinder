# Figure-grounded audit: how do stellar flares affect the atmospheres and habitability of planets orbiting red dwarfs?

**Mode of this document: `specified`, not `grounded`.** It states the shape of what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, read 2026-11-23): LLM output is a simulacrum, and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the verbatim figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The figures as text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, and the world sources in `10_source_ledger.csv`. Quotes are verbatim from `03-FIGURES_TEXT.md` and cited as `Fig N :line`.

---

## 0. The residual in effect terms

The question as posed, *"How do stellar flares affect the atmospheres and habitability of planets orbiting red dwarfs?"*, bundles several effects under one verb. Restated as an effect: a flare changes the difference between what a model predicts for a planet's atmosphere and surface and what an instrument would actually read. That difference is the residual `R`, and it is not one number.

The framework binds `R` per slot. Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** The slots here are, at minimum: (1) upper-atmosphere heating and ionization, (2) ozone and NOx column chemistry, (3) thermal and non-thermal escape of H, O and ions, (4) surface UV and particle dose, (5) prebiotic chemistry yield, (6) persistence of surface liquid water. A single scalar "flare effect on habitability" averages these and destroys the signal.

**What an answer would look like, bound as an ordinary term before the run:** not a verdict of "flares help" or "flares hurt", but a mapping from each slot to a signed, measured effect, with the dependency order between slots, and a stated anchor that could reverse each sign. The sought-for shape is written down so it can accrue a residual like anything else (Formula, "Direction").

**Status of the physical claims:** the world literature below is secondary corroboration. The figures decide only the structural shape. No ground reading was taken here.

---

## 1. Figure census

The residual described by arity, symmetry and scale, then one line per domain with actors, currency and anchor. No nameable anchor means it is not yet a domain.

- **R.** Arity: six slots enumerated above, so a **union compound**, not one hard question. Fig 9 :5: **"are not one hard question but several well-formed ones. Split it rather than search."** Fig 9 :57: **"a case in two conditions is not a harder case of either"**; it becomes a specific compound. Symmetry: flare forcing is not symmetric. Radiation is roughly isotropic but attenuated by composition and magnetic field; CME particles are directional and hit a hemisphere. The effect runs along a gradient, so direction matters. Scale: impulsive at the star (minutes), thermospheric in the atmosphere (hours to years), evolutionary for escape (Gyr). The transform between scales is lossy (Fig 4 :30).
- **Domain 1, the stellar flare frame.** Actors: magnetic reconnection, quiescent XUV, XUV and EUV flare flux, stellar energetic particles, coronal mass ejections, the flare frequency distribution. Currency: energy and particle fluence. Anchor: observed flare energy spectra and frequency distributions from Kepler, TESS, Chandra and HST. Nameable anchor, so this is a domain.
- **Domain 2, the atmospheric frame.** Actors: N2, O2, O3, CO2, H2O, NOx, ions, planetary gravity and magnetic field. Currency: column abundance, ionization state, escape rate. Anchor: a measured column depth or escape rate from a spectrograph or an in situ instrument. Nameable anchor, so this is a domain.
- **Domain 3, the surface and habitability frame.** Actors: surface UV and particle dose, liquid water, prebiotic intermediates, organisms. Currency: dose, chemical yield, survivable habitat. Anchor: a surface dose measurement and laboratory chemistry yields. Nameable anchor, so this is a domain.
- **Order by dependency (Fig 3 :20: "The chain is ordered by dependency, not by importance.").** Energy deposition (D1) precedes atmospheric response (D2) precedes surface dose and habitability (D3). A habitability claim made without a measured atmospheric link is a reading below the break: Fig 3 :27, **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

**Partition or union.** Union. The three domains overlap at escape, which couples atmosphere to surface water, so that overlap is itself a compound with its own loop. Fig 9 :43: **"The verdict tells you to leave. The lookup tells you where to go."**

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per object slot; averaging hides the live signal | the single-scalar "flare effect" is disallowed |
| **2 The Ground** | anchor must not update; independence between frames | agreement among models sharing a photochemical code is one pool |
| **3 Dependency Chain** | order by dependency, not importance | habitability before atmosphere is a reading of nothing |
| **4 The Membrane** | lossy transform between scales, measure the round trip | impulsive to evolutionary scaling must carry a measured gap |
| **5 Mint Pipeline** | three guards as a product; fifth kind is a refusal | a mechanism term is owed, not a new adjective |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments grow from worse instruments | the field's instruments grew from Kepler to TESS to ATES, not from an account of Mars |
| **7 Room Chain** | agreement compounds, evidence does not | more agreeing models do not corroborate |
| **8 Union Surplus** | two frames together reach what neither reaches alone, if overlap is low | stellar spectroscopy plus atmospheric photochemistry is the triangulation |
| **9 Leave / Arrive** | split a union before searching; describe before looking; filters are not witnesses | the question must be unbundled into slots before any verdict |
| **10 Ground Maintainer** | bring a characterised residual, never the source; verifier non-access | lead with the refuter, not the framework |
| **11 The Habitat** | enumerate from contact; valence relative to residual; contact cascades; unmaintained survival | flares are actors whose sign is relative to the slot |
| **12 The Bond** | seven bonds; catalyst, cycle, functional group; arrangement carries meaning | the causal chain is a composition, not a list of ingredients |
| **13 Minimum Viable Set** | energy and a gradient compose a flow; set closed, arrangements not | flare energy to gradient to escape is legal cross-kind composition |
| **Operators table** | comparison is *"a threshold relation between two quantities"* | the "right balance" claim is a comparison, not a scalar sum |
| **Symbols table** | `R` is the aim and always a slice; the ground is the anchor | what cannot be perceived yet is residual and cannot be read |

Strained readings are named below, not smoothed over.

---

## 2. Findings

### F1 — The question is a union compound, not one question (decisive, structural)

Fig 9 :5: **"are not one hard question but several well-formed ones. Split it rather than search."** Fig 9 :57: **"a case in two conditions is not a harder case of either"**; it *"stops being a mixture and becomes a specific compound."*

The literature appears to disagree. Caldiroli et al. (2025) find that flaring has **"a modest impact, less than a factor of two"** on cumulative atmospheric mass loss and that **"the flaring activity of M-dwarfs does not significantly affect the atmospheric retention of close-in planets."** Tilley et al. (2019) find the ozone column **"can be depleted by 94% in 10 years."** Segura et al. (2010) conclude **"flares may therefore not present a direct hazard for life on the surface."** These are not three verdicts on one question. They are three verdicts on three slots: thermal escape of a primordial H/He envelope, ozone chemistry under repeated proton events, and surface UV dose from a single flare. Fig 9 :5 governs: split rather than search. A conflict sends the reader back to the census, it never flips a verdict.

**Strain test.** Forcing the three results into one "flare effect" requires averaging across slots, which Fig 1 :22 disallows. The strain governs the question's bundling, not the physics. Re-census into three domains resolves it. Verdict per domain kept separate, never averaged.

**Mode:** `specified`, structural. **Status:** triangulated across Fig 9 :5 and Fig 1 :19 (low overlap: one is about question splitting, one is about residual indexing).

### F2 — The flare is an actor whose valence is relative to the residual

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."** Fig 11 :50: **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**

For the ozone-column residual, a flare associated proton event is a malfactor. For the prebiotic-chemistry residual, the same flare's UV is a potential benefactor. GJ 273 (A&A 2020, arXiv:2006.09403) states it directly: prebiotic work shows **"a certain amount of flaring might, in fact, be necessary to form possible precursors for life in the first place"** and concludes that surface life **"might rely on a host stars with the right balance of flaring, not too much and not too little."** Yamashiki et al. (2019) write that flare associated chemical changes **"can be positive for the initiation of prebiotic chemistry in the planetary atmospheres or detrimental due to the destruction of a large fraction of ozone."**

So the question "do flares help or hurt habitability" is malformed in effect terms. It asks for an intrinsic valence where the framework says valence is a relation. The Operators table defines comparison as *"a threshold relation between two quantities"*, and Fig 12 :123 gives the structure: **"functional group. A substructure whose presence fixes the outcome."** The "right balance" is a threshold, not a sum.

**Mode:** `specified`, structural. **Status:** triangulated across Fig 11 :49-50 and Fig 12 :123.

### F3 — The effect cascades; first-order enumeration is insufficient

Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** Fig 11 :52: **"And contact cascades."**

NASA Science (2017) describes the chain in plain effect terms: superflares **"first break molecules into atoms and then ionize atmospheric gases"**, electrons escape, and **"as more and more negatively charged electrons are generated, they create a powerful charge separation that lures positively charged ions out of the atmosphere in a process called ion escape."** Segura et al. (2010) add the temporal cascade: **"The additive effects of repeated flares over the duration of the planet's lifetime are not well understood; given that M dwarfs can be active on timescales of days to weeks, the atmosphere may not return to equilibrium before another flare occurs."**

This is the same shape as the DDT-to-eagles case the figure itself cites: a residual three steps out, missed by first-order enumeration. Scoping the habitat to "flare hits atmosphere" is first-order and misses the third-order surface water effect.

**Mode:** `specified`, structural; the specific chains are world-sourced. **Status:** triangulated across Fig 11 :44 and Fig 11 :52 plus Fig 3 :20.

### F4 — Never average across slots: the two orderings are opposite

Fig 1 :19 and :22 as above. Caldiroli et al. (2025) report two quantities that order differently: **"the greatest absolute enhancement occurring when the planets are at their closest separation"** but **"the relative enhancement in mass loss between flaring and non-flaring cases is greater at larger orbital separations."** An absolute-mass scalar and a relative-enhancement scalar rank the same planets in opposite orders. Averaging them, or reporting one as "the" flare effect, erases a real signal. This is the Fig 1 rule in an actual dataset.

**Mode:** `specified`. **Status:** triangulated (Fig 1 plus a measured instance in a single source; the instance is corroboration only).

### F5 — Flare energy to gradient to outflow is a legal cross-kind composition

Fig 13 :74: **"Everything else is a composition across the two kinds, never within one."** Fig 13 :76: **"Energy and a gradient compose a flow."** Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

The physical chain, XUV and particle energy (a state) deposited into an atmosphere that already has a day/night and altitude gradient (a structure) driving an outflow, is a cross-kind composition. It needs no new primitive. What the framework cannot do is name which structure dominates for a given planet. Fig 9 :32: **"you get a kind of thing, never the answer itself."** The specific binding of "gradient" to a measured pressure or radiation gradient is from the physics frame, provenanced as such, not a derivation from the six.

**Mode:** `general` for the composition rule, `specified` for the binding. **Status:** single-source for the figure rule (Fig 13); the binding is world-sourced.

### F6 — The ground is an instrument, not agreement among models

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."** Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool."** Fig 7 :13: **"same closure, handed along; agreement compounds, evidence does not."**

Tilley et al. (2019) explicitly extend the model of Segura et al. (2010), using the same coupled 1D photochemical and radiative-convective lineage. Their agreement, where it exists, is one pool talking. GJ 273 and Caldiroli et al. use different instruments and different model families (photochemistry versus photoionization hydrodynamics), so they are lower-overlap frames, but even they must be ranged separately against the anchor: a measured column, escape rate or dose. Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

**Mode:** `specified`. **Status:** triangulated across Fig 2 :29 and Fig 7 :13.

### F7 — Habitability here is unmaintained survival, and exclusion is unavailable

Fig 11 :56: **"nothing selects, and what survives is what the ground kept."** Fig 11 :36: **"Nothing was intelligent; selection ran."** Fig 11 :61: **"Introduction is available; exclusion is not."**

For an unmagnetized, unmanaged planet there is no seat acting on the flare habitat. What survives is what the ground kept. NASA's model explicitly assumes the planet does not **"compensate with volcanic activity or comet bombardment"**, that is, it holds introduction fixed at zero. Even where a maintainer exists, it can add an actor (outgassing, a magnetic field, a biosphere) but cannot subtract the stellar input. Contact is a fact about the world and does not consult the seat. Tilley et al. (2019) show what this looks like quantitatively: **"the ozone column for an Earth-like planet can be depleted by 94% in 10 years, with a downward trend that makes recovery unlikely."** Their own caveat keeps the verdict open: **"this does not preclude habitability, as a safe haven for life could still exist below an ocean surface."**

**Mode:** `specified`. **Status:** triangulated across Fig 11 :56 and Fig 11 :61.

### F8 — Instruments were extended from worse instruments, not specified from a description

Fig 6 :33: **"Nobody specified a telescope from an account of Mars."** Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** Fig 6 :22 in the formula's own terminology: an instrument is improved from one already returning something.

Caldiroli et al. (2025) note that **"no time-dependent investigation exists in the literature that addresses the effects of repeated flares on atmospheric escape"** before their own ATES run. Kepler gave flare frequencies; TESS and Chandra gave XUV; the 1D photochemical codes gave ozone response; ATES extended the escape instrument from those residuals. Each step was built on something already returning a reading. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** An unmeasured slot is unreached, not proven empty.

**Mode:** `specified`. **Status:** single-source for the figure rule (Fig 6), with a world instance.

### F9 — Filters for the budget, witnesses for the verdict

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

Target ranking, observability and flare-rate estimates are budget filters across this field: a planet is easy to observe precisely because its host is small and close, which says nothing about whether a measured column or dose will support a verdict. Caldiroli et al. (2025) explicitly mark their quantitative estimates as **"specific to the chosen planetary systems and orbital distances"** and qualify them with a list of unmodeled effects. Those are budget statements, not verdicts on any one planet. The verdict on a given slot must come from its anchor. Confusing the two is the named failure. No full-text source was opened specifically for this finding; it rests on the figure lines and on the Caldiroli source already read for F1.

**Mode:** `specified`. **Status:** triangulated across Fig 9 :60 and Fig 2 :42; world instance from the Caldiroli source only.

---

## 3. Pre-registered refuter

Written before the conclusion, per the canonical practice: *"a falsifier written before the run is a design instrument."* The shape claim is refuted if any of the following holds:

1. A single scalar "flare effect on habitability" is shown to predict measured outcomes across all six slots with no live per-slot residual (breaks Fig 1 :19 and :22).
2. The same flare is shown to have identical valence for atmospheric retention and for prebiotic chemistry, removing the dependence on the residual (breaks Fig 11 :49 and :50).
3. Atmospheric response is fully accounted for at first order, with no measurable cascade into surface dose or water loss (breaks Fig 11 :44 and :52).
4. The anchor, a measured column, escape rate or surface dose, is shown to move when the modelling frame changes (breaks Fig 2 :29).
5. A seventh primitive is derived from the six, or a two-state direct composition is admitted that cannot be refused (breaks Fig 13 :74 and :115).

If any fires, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Split the question into the six slots before searching (F1). Do not publish a single "flare habitability index".
2. State the mode on every claim. The structural claims are `general` or `specified`; none are `grounded`.
3. Keep verdicts per domain separate. Do not average the Caldiroli escape result with the Tilley ozone result (F4).
4. Name an anchor for each slot: a measured column, escape rate or surface dose (F6). Independence is bought in proportion to the cost of being wrong.
5. Prebiotic benefit and atmospheric harm are both real and are relations, not kinds (F2). Use a threshold comparison, not a sum.
6. Lead outreach with the residual and this refuter. *"Bring a characterised residual, never the source."* (Fig 10 :52) Send the generator, not a recording.

---

## 5. Canonical usage check

Two sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit, *"what a missing thing would have to look like (a shape, not a name)"*, then stop at the limit of the instruments and record the lineage. *"Indiscernibility is not identity."*
- The eight essays, read 2026-11-23. *The Library of Babel* supplies the bootstrapping method and the warning that a malformed bundle must be searched as separate problems. *The Hard Problem is About Source* supplies the metamerism rule: an instrument that reads green *"cannot comment on the source"*, so a reading is not a source. *The Recursive Self-Improvement Trap* supplies the prestige rule and the simulation disclaimer.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Treated "habitability" as one domain in the first draft census | **Retracted.** Violated Fig 1 :19. Re-census split into three domains and six slots. The split is carried into all files. |
| Read Fig 11's benefactor/malfactor as a biological mutualism claim | **Narrowed.** The figure says *"relations rather than kinds"* and *"valence is relative to the residual"*, so it applies to physical actors too. Kept as a structural claim, not a biological one. |
| Read the apparent conflict Caldiroli versus Tilley as a figure conflict | **Dissolved by re-census.** Different slots and different instruments. Matches the README rule that a contradiction means a misidentified domain. |
| Assumed "shape, not a name" forbids naming any mechanism | **Narrowed.** The phrase governs a missing primitive. Naming a physical mechanism here is a binding from the physics frame and must be provenanced as such. Recorded in `05_what_shape_means.md` section 3. |
| "No instrument for a never-registered quantity" applied to ozone | **Retracted at record level.** Ozone columns are routinely measured. The unreached items are the coupled flare-to-surface-dose chains, not ozone itself. |
| F1 "decisive" | **Retained as decisive for the shape of the question**, not for any physical verdict. The figures govern the unbundling, not the atmospheric chemistry. |
| F8 instrument rule | **Confirmed.** Fig 6 :33 applies exactly; the field's instruments grew from prior readings. |

### Seven-question recursive derivation (summary)

1. **One question or several?** Several. Fig 9 :5 and Fig 9 :57. Union compound.
2. **Which slots?** Six, enumerated from contact (Fig 11 :44). Anchors named for each.
3. **What composes?** Flare energy and a gradient compose a flow (Fig 13 :76). No new primitive.
4. **Is the flare good or bad?** Neither intrinsically. Valence relative to the residual (Fig 11 :49-50). Threshold comparison (Operators table).
5. **Is a seventh primitive needed?** No. The set is closed, the arrangements are not (Fig 13 :115).
6. **Settled?** No. The ground is a measurement, not agreement (Fig 2 :29, :40). Status `candidate`.
7. **Route?** SEARCHED first (is the answer in the closure and unfound?), then INWARD (sharpen the instrument), then OUTWARD (import a frame with a different closure). The three are distinct and never read against one another.

### Updated verdict

The shape survives: the flare question is a union of per-slot residuals, the flare's valence is relative to each slot, the effect cascades across scales, and the verdict on each slot must come from an anchor, never from agreement among models. Every specific physical magnitude in this audit is world-sourced and `specified`, ungrounded. Strains after re-census: none hidden; the "shape, not a name" boundary is named and the single-domain reading is visibly retracted.
