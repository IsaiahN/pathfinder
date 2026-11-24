# Figure-grounded audit: How did the Moon form, and what can its composition tell us about early Earth?

**Mode: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on the specific variant and its timing, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself" (The Recursive Self-Improvement Trap, opened this session). This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure quotes are from `FRAMEWORK/reference/03-FIGURES_TEXT.md` only, cited as `Fig N :line`. World sources were fetched and opened on 2026-11-23 and are listed in `10_source_ledger.csv`. Local framework primaries: THE_FORMULA.md, FIGURES_README_canonical.md.

---

## 0. The claim under audit

The question arrives as a bundle of two requests.

> R1 (formation): given the observed features of the Moon, identify the process that produced them.
> R2 (composition to early Earth): given the Moon's composition, say what it legitimately tells us about the early Earth.

The ordinary, unexamined answer would be: "a Mars sized body struck the early Earth about 4.5 billion years ago, the ejecta re-accreted into the Moon, and because lunar rocks match Earth rocks isotopically, the Moon's composition is a sample of the early Earth." The audit tests that answer rather than assuming it.

The shape claim this audit derives, written before the findings, is:

> A high-energy, late, mantle-derived, volatile-depleted, small-iron-core event whose debris re-accretes is the figure-consistent *shape* of a lunar formation answer. The composition fixes that shape but does not uniquely name the variant. The Moon's composition is a *head start* about the pre-impact Earth, not a replay of it. The variant and its timing are a `gap`, reported as unreached rather than as silence.

Glyph and term discipline: no special operator is minted here. Where the figures use `→` (sequence) and `⋛` (comparison), this audit uses them only in their defined senses (Operators table :29, :35). "Source" is used in the sense of the essay The Hard Problem is About Source: the cause behind a reading, not the reading itself.

---

## 1. The residual in effect terms

**R by arity, symmetry, scale.**

- **Arity.** Two slots, not one: a formation slot and a compositional-inference slot. Each slot is itself a union of overlapping conditions, not a single condition with a single answer (Fig 9 :54, :55).
- **Symmetry.** The observed compositional features are many-to-one readings. Several formation paths can produce the same feature set. The mapping from cause to reading is lossy, so the reading does not order the candidate causes. This is a metamerism structure (Hard Problem is About Source; Metamerism (color), Wikipedia 2026), and it is symmetric where the causal question is ordered. Fig 2 :39: "Correlation has valence." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."
- **Scale.** Formation is one event at one scale (the impact and accretion). Composition is a persistent reading at another scale (rocks measured now). The early-Earth inference crosses a scale boundary, so the transform is lossy and the round trip must be measured (Fig 4 :30).

**The residual is indexed per slot, never aggregated** (Fig 1 :19, :22). The six compositional observables are six slots, not one "Moon-likeness" score. A global verdict such as "the giant impact explains the Moon" aggregates the signal away. Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

---

## 2. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet. Partition or union. Order by dependency (Fig 3 :20).

| domain | actors | currency | anchor | type |
|---|---|---|---|---|
| D1 The reading | O, Ti, Zn and W isotope ratios; volatile abundances; FeO; core mass fraction; anorthositic crust; Earth-Moon angular momentum; lunar laser ranging | measured ratios, masses, moments | returned samples (Apollo, Luna, Chang'e-5), remote spectra, laser ranging: these do not update on what any hypothesis thinks (Fig 2 :29) | union of constraints with different anchors |
| D2 The source | proto-Earth, impactor, debris disk, magma ocean, silicate vapour atmosphere, degree of equilibration | whether a mechanism composes from held atoms and reproduces the D1 readings; the description cost of the mechanism (Fig 5 :42) | the D1 readings plus hydrodynamic simulation outcomes | union of overlapping candidate paths (capture, fission, co-accretion, giant-impact variants) |
| D3 Early-Earth inference | pre-impact mantle, core, volatile inventory, chronometers (Hf-W, ^142Nd) | what the Moon carries as a head start about the pre-impact Earth (Fig 4 :22) | independent early-Earth constraints, not the Moon alone | union, coupled to D2 |
| D4 Verification | planetary scientists, sample curators, modelers | agreement and residual | the ground, never agreement (Fig 2 :35) | seats; in this simulated run all draw on one evidence pool |

**Partition or union.** The question is a union, not a partition. D1 and D2 overlap: you cannot identify a source without a reading, and the reading is interpreted by the source frame. D2 and D3 overlap: the same impact event is both the formation mechanism and the reason the Moon carries proto-Earth material. Fig 9 :57: "A case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." One lever, for example a new isotope measurement from a different lunar terrane, can clear a D1 slot while leaving a D3 slot standing. Verdicts are therefore kept per domain and never averaged.

**Order by dependency (Fig 3 :20).** Secure the reading (D1) first, since perception and vocabulary precede objective and planning. Then discriminate sources (D2). Then infer early Earth (D3). A D3 inference attempted before D2 is settled is a reading below the break: Fig 3 :22: "A step whose input never arrives cannot be diagnosed, only its predecessor can." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

**Habitat enumeration (Fig 11 :43).** Everything in contact with the residual was enumerated, not composed: sample return missions, remote sensing, impact simulations, isotope geochemistry, orbital dynamics, chronometry, and the surrounding early-solar-system conditions. Actors' valence is relative to the residual (Fig 11 :49): the same high-energy impact is a benefactor to the angular-momentum slot and a malfactor to the volatile-retention slot.

---

## 3. Figure census

Quoted before concluding. Every string below is verbatim from `03-FIGURES_TEXT.md`.

| figure | bearing | verdict | status |
|---|---|---|---|
| Fig 1 | residual per slot, never aggregated; ground is the only metric | forbids a single "Moon-likeness" verdict | triangulated with Fig 9 union |
| Fig 2 | anchor, independence, mirror, filtered verdict | samples and dynamics are the anchor; agreement among models is not corroboration | triangulated |
| Fig 3 | dependency order, reading below the break | reading before source before inference | single-source structural |
| Fig 4 | methods cross up, head starts down, recording of one occasion, lossy round trip | composition is a head start and a recording, not a replay | triangulated with the source essay |
| Fig 5 | three guards as product, MDL bargain, fifth kind (refuted), direction limit | giant impact is a minted term; isotopic similarity is a persistent residual that points to a refusal or a re-fit | triangulated with Formula step 2 |
| Fig 6 | import moves the wall; instruments improved from worse instruments already returning something | new samples are instrument extension, not a new theory from nothing | triangulated with Fig 8 |
| Fig 7 | rooms, selection between rooms, no last room | competing models are rooms; Artemis and Chang'e-5 are new rooms | single-source structural |
| Fig 8 | closure idempotent, absence not proof, convergence vs adopted import, residual first | composition cannot prove which source by inspection; provenance decides convergence from adoption | triangulated with Fig 13 |
| Fig 9 | split, unbundle union, describe before looking, shape not name, filters not witnesses | the question is a union; no figure returns the variant | triangulated |
| Fig 10 | ground does not decay, verifier non-access, bring characterised residual | ask for a refutation before showing the frame | single-source structural |
| Fig 11 | habitat enumerated, valence relative, capability is agent and habitat | sample return changes contact, not belief | single-source structural |
| Fig 12 | bond carries information, isomer, level-relative irreducibility, two currencies | variants are isomers over a fixed atom set; bits and actions do not add | single-source on the figure definition, world-corroborated |
| Fig 13 | route not recoverable from artefact, lineage is proof, unreachable is a verdict, different routes same substance | the compositional artefact does not encode its own formation route | triangulated with the source essay and the world sources |
| Operators table | sequence and comparison senses | no new operator is needed for this question | single-source |
| Symbols table | R is the aim and a slice | unsensed formation detail is residual, not absent | single-source |

---

## 4. Findings

### F1. Composition fixes a shape, not a name of the mechanism (decisive for R1)

Fig 13 :129: "Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available."

Fig 9 :32: "you get a kind of thing, never the answer itself."

Fig 8 :50: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."

The hard-problem essay states the mechanism in effect terms: "If several paths create the same behavior, then behavior is a projection with lossy information." The colour-science source gives the physical instance: metamerism is a "perceived matching of colors with different (nonmatching) spectral power distributions", so a three-receptor reading cannot recover the spectrum that produced it.

The Moon's composition is such a reading. The observed feature set constrains (small iron core, volatile depletion, deep magma ocean, Earth-like O and Ti isotopes, high angular momentum), but it does not by inspection encode which path produced it. The Wikipedia giant-impact article records exactly this: the "equilibration hypothesis", the "direct collision hypothesis", the "synestia hypothesis" and the "terrestrial magma ocean hypothesis" are all presented as ways to reconcile the same compositional similarity. NASA's Moon Formation page says "scientists continue to study existing samples and other information they have now ... to construct computer models" and that "the eventual goal is a comprehensive model that accounts for everything we know about the Moon."

**Verdict for D2: `specified`, triangulated** (Fig 13 + Fig 9 + the source essay + an independent low-overlap philosophy source, see F8). The shape is real; the name of the variant is `gap`.

**Refuter.** A measurement that yields a compositional signature uniquely produced by one and only one formation path, with the exclusivity demonstrated rather than assumed, would move this slot from shape to name. If no such signature can exist even in principle and no other ground is reachable, the source is genuinely unreachable and F1 must be restated as unreachable rather than as underdetermined-at-this-budget.

### F2. This is a reachable ground question, unlike the Planck-scale case

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."

Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

The anchor here is real and reachable: returned samples, remote spectra, and lunar laser ranging. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :34: "Nobody specified a telescope from an account of Mars." The historical sequence in the world literature follows this rule: capture and co-accretion "fell out of favor after the Apollo missions brought back data and 842 pounds (382 kilograms) of lunar samples to Earth" (NASA). The samples were the worse instrument already returning something; the giant-impact frame was ranked against them, not invented from a description.

**Verdict for D1: `specified` and substantially ground-supported at the reading level.** The giant-impact *family* is the favored frame in the world literature, but "favored" is a verdict about the ground, not a derivation from the six-term set. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Refuter.** Two independent sample sets with genuinely different evidence pools yielding formation verdicts that do not shrink with effort would break the single-union reading and force a split (Fig 9 :4). The conflict rule would send us back to the census, not flip the verdict.

### F3. Composition is a head start about early Earth, not a replay

Fig 4 :22: "Only methods cross up. Only head starts come down."

Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."

The Moon is a recording of one occasion, the last giant impact, and a lossy transform of the pre-impact Earth. NASA states the asymmetric reason for valuing it: "Earth's active geological processes, from plate tectonics to erosion, erase the evidence of formation. Aside from events like impacts, much of the Moon's surface changes on a vastly slower timescale." So the Moon gives a head start about early Earth that Earth itself no longer preserves. But a head start is not a replay: the transform discards information (Fig 4 :27), and the round trip has a nonzero gap that must be measured rather than assumed (Fig 4 :30).

The specific error to refuse: reading the Moon's bulk composition as a direct readout of the early Earth's bulk state. Wikipedia's difficulties section records why this fails: the Moon's FeO content of 13 percent is intermediate between Mars at 18 percent and the terrestrial mantle at 8 percent, and "rules out most of the source of the proto-lunar material from Earth's mantle." The Moon is not simply a sample of the early Earth.

**Verdict for D3: `specified`, triangulated** (Fig 4 + the source essay + the FeO and isotope difficulties in the world literature). Composition tells us about early Earth *under a model of the impact and mixing*, not directly.

**Refuter.** If the Moon's composition were shown to be a spectral match for early Earth under multiple incompatible early-Earth states with no discriminator, the head-start reading collapses into the metamerism error it warns against. A source-discriminating instrument (new samples from the far side or poles, as NASA proposes for Artemis) would test this.

### F4. The giant-impact variants are isomers over a fixed atom set

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Fig 13 :121: "Different routes can arrive at the same substance."

Fig 12 :94: "The arrangement is the substance."

Write the candidate paths over the atom set {proto-Earth mantle, impactor mantle, impactor core, debris disk, silicate vapour atmosphere, degree of equilibration, volatile loss}. The canonical grazing impact, the direct hit, the synestia, and the terrestrial-magma-ocean model use the same atoms and differ in arrangement: impact angle, energy, mixing, and which reservoir dominates the debris. By Fig 12's definition they are isomers, not different substances with different ingredients. Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing."

The "isotopic crisis" (Earth-Moon O and Ti similarity under a canonical impact, where the impactor should carry a distinct signature) is a residual that persists and does not trend down under the simple model. Formula step 2 ranks candidate terms by "the residual that PERSISTS AND DOES NOT TREND DOWN", and Fig 5 :50 says "the gap has a fifth kind, and the pipeline has no branch for it." The correct response is a re-fit or a refusal at the level of the specific variant, not the abandonment of the whole giant-impact frame. The equilibration, direct-collision and terrestrial-magma-ocean hypotheses are exactly such re-fits.

**Verdict for D2 variant level: `specified`, single-source on the figure definition, world-corroborated.** Not triangulated: the isomer definition comes from Fig 12 alone; the world literature supplies the cases but not the figure rule.

**Falsifier, written before the run.** If two candidate paths require different atoms (for example one requires an additional reservoir absent from the set above), the isomer claim fails and the relation becomes composition plus import. The synestia model is the standing test case, because it posits a new transient object state.

### F5. The question is a union, so verdicts stay separate

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Fig 9 :57: "A case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

R1 and R2 are not two answers to one question that can be traded off. They have different anchors: R1 is settled by formation-facing measurements and simulation outcomes, R2 by independent early-Earth constraints. A single lever clears the intersection only. This is why the audit does not return a single confidence score for "how the Moon formed and what it tells us."

**Verdict: `general` structural, triangulated** (Fig 9 union rule + Fig 1 per-slot rule). Per-domain verdicts are kept separate throughout files 07 and 09.

**Refuter.** If a single measurement were shown to settle both R1 and R2 simultaneously without a model of the impact, the union reading would be wrong and the question would be a partition after all.

### F6. Frame-first mapping is the named apophenia error

Fig 9 :27: "describe it before you go looking, or any frame you pick will seem to fit."

Fig 9 :30: "your words are borrowed too, so describe the effect rather than the cause."

Fig 8 :53: "Residual first, frame second."

The audit described the four constraint groups in effect terms before naming the giant-impact frame. This matters because the history could be misread as frame-first: Daly proposed an impact in 1946, Hartmann and Davis in 1975, and the 1984 Kona conference made it favored. Read historically, the frame was proposed before the decisive data. Read methodologically, it was *ranked* after the data: capture and co-accretion fell out of favor only after Apollo returned samples, and the Wikipedia article lists the specific compositional difficulties that still constrain the frame. The defensible move is the second, not the first. If we had picked "giant impact" and then mapped every feature onto it, any feature would seem to fit.

**Verdict: `general` structural, triangulated** (Fig 9 + Fig 8 + the historical sequence in the world sources).

**Refuter.** If the giant-impact frame were shown to have been selected and retained independently of the Apollo and later sample constraints, with those constraints playing no role in ranking, the frame-first reading would stand and the apophenia caution would be misplaced here.

### F7. Competing models are rooms; only ground selects between them

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

The candidate formation paths are rooms. Agreement among models trained on the same Apollo dataset is one evidence pool talking, not corroboration (Fig 2 :40). Chang'e-5 samples and future Artemis returns from the far side and poles are genuinely different rooms because they draw on different evidence. NASA: "scientists hope to obtain new samples from different locations, like the far side of the Moon and areas closer to the poles." That is a selection between rooms, not a repetition of one.

**Verdict: `general` structural, single-source on the figure rule, world-corroborated.**

**Refuter.** If new samples simply reproduce the Apollo signature without discriminating among variants, they are another mirror, not a new room, and the expected progress per handoff is zero.

### F8. The specific variant and date are a declared gap

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

Fig 13 :134: "Unreachable is a verdict here, not a silence"

Fig 9 :32: "you get a kind of thing, never the answer itself."

No figure line returns an impactor mass, an impact angle, a date in millions of years, or a percentage of proto-Earth material. The world literature itself records a spread: Wikipedia reports ages from about 4.4 to 4.47 billion years and estimates that "some twenty percent of the original mass of Theia would have ended up as an orbiting ring of debris", with the terrestrial-magma-ocean model reversing the dominant-source estimate from 80 percent impactor to 80 percent proto-Earth. These are measurements and model outputs, not figure derivations. They are recorded as world facts, never as Tether results.

**Verdict: `gap` for the figure derivation, of the unreached-at-this-budget kind, not underivable in principle.** The ground is reachable; the figures do not hand us the number. This is a verdict, not a silence.

**Refuter.** A figure line that directly governs a numerical formation parameter would close this gap. None was found after a genuine re-census across all 13 figures and both tables.

### F9. Underdetermination is independently corroborated, not just framework-internal

The Stanford Encyclopedia of Philosophy entry on Underdetermination of Scientific Theory defines the relevant sense: "contrastive underdetermination ... questions the ability of the evidence to confirm any given hypothesis *against alternatives*". It quotes Mill: "an hypothesis ... is not to be received as probably true because it accounts for all the known phenomena, since this is a condition sometimes fulfilled tolerably well by two conflicting hypotheses". It also records that "no finite amount of data will ever be able to narrow the possibilities down to just a single function".

This is a genuinely low-overlap witness (philosophy of science, not planetary science and not the framework author). It predicts exactly F1: a compositional dataset that several formation paths can fit does not by itself select one. It corroborates, it does not decide. The figures decide (Fig 2 :45).

**Status: corroborates F1. Overlap with other sources: low.** It does not conflict.

---

## 5. Pre-registered refuter

Written before the conclusion, per the Seat Map's rule that "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. A compositional signature is demonstrated to be uniquely produced by one formation path, with the exclusivity shown against all candidates, and the measurement is made. This moves a slot from shape to name.
2. Two independent sample sets with genuinely different evidence pools yield formation verdicts that do not shrink with effort (Fig 9 :4). The union reading is wrong and the question must be split.
3. The Moon's composition is shown to match early Earth under multiple incompatible early-Earth states with no possible discriminator. The head-start reading of F3 collapses.
4. Two candidate paths are shown to require different atoms rather than different arrangements. The isomer claim of F4 fails.
5. A figure line is found that directly governs an impact parameter (angle, mass, date, mixing fraction). The gap of F8 closes and the verdict is restated.
6. The whole shape claim is shown to be frame-first apophenia: the giant-impact frame selected and retained independently of the compositional constraints.

Until one of these is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with the shape and its refuter, not with the name of the favored frame (Fig 10 :52, "Bring a characterised residual, never the source.").
2. Keep D1, D2 and D3 verdicts separate. Do not average them into one "how the Moon formed" score (Fig 1 :22).
3. Treat new sample returns as instrument extension and room selection, not as repetition of the Apollo pool (Fig 6 :32, Fig 7 :36).
4. State mode on every substantive claim. The family is favored in the world literature; the variant is a `gap`; nothing here is `grounded`.
5. When presenting the giant-impact family, say "isomers over a fixed atom set" rather than "one true mechanism" (Fig 12 :117).
6. Ask an expert what would refute the shape claim before showing them the framework (Fig 10 :42).

---

## 7. Canonical usage check

Two local framework sources were read after the first six sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them ... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the canonical limit, the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, three guards as a product, step 5 "A gate is not the ground", step 7's SEARCHED / INWARD / OUTWARD distinction, and the "Direction" discipline of binding the sought-for shape as an ordinary term.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "The figures can tell us how the Moon formed" | **Retracted.** They return a shape, not a name. The variant and date are a `gap`. |
| "Composition directly samples the early Earth" | **Retracted.** Fig 4 :22 and :25 make it a head start and a recording of one occasion; the FeO and isotope difficulties in the world literature independently block the direct reading. |
| "Shape, not a name, forbids naming the giant-impact frame" | **Narrowed and kept visible.** The README's phrase governs a *missing* primitive. Giant impact is a frame already held in the world library; naming it is a binding with provenance, not an invented primitive. See `05_what_shape_means.md` section 5b. |
| "Isotope similarity refutes the giant impact" | **Refused.** Formula step 2 and Fig 5 :50 rank it as a persistent residual that selects a re-fit or a refusal at the variant level, not the whole frame. |
| "F1 is triangulated by the source essay alone" | **Strengthened.** The SEP underdetermination entry and the colour metamerism source are genuinely low-overlap witnesses. The agreement is corroboration, not a second frame deciding the verdict. |
| "Fig 13 cross-kind rule applies directly to geochemical observables" | **Retracted and re-censused.** Fig 13 governs the six substrate terms. Lunar geochemical observables are a different object. The relation to F4 is a shape analogue, not a literal substrate claim. See S4 below. |
| "Favored hypothesis means figure-derivable" | **Retracted.** Fig 8 :50: convergence and adopted import look identical in the contents; only the record separates them. "Favored" is a ground verdict about the world frame. |

### Strains and re-census

- **S1, Fig 2 anchor versus Fig 4 lossy recording.** Re-census: the anchor settles the *reading*; the reading does not uniquely settle the *source*. Two different objects. Not strained after re-census.
- **S2, Fig 8 convergence versus "favored hypothesis".** Kept visible. The contents of a favored frame cannot tell us whether it was converged to or adopted. Only provenance separates them, and the provenance here is historical (Apollo data preceded the ranking).
- **S3, prestige of the consensus.** Fig 9 :60 makes favorability a filter for the budget, not a witness for the verdict. Named, not hidden.
- **S4, Fig 13 applied to geochemistry.** Dissolved by re-census into a shape analogue. No figure forced.
- **S5, the two currencies of F4.** Fig 12 :125: "A composition costs in two currencies, and they do not add." Bits price the description of a variant; actions price finding out which variant holds. New sample returns are action-cost, not description-cost. Both are read, never summed.

### Seven-question recursive derivation (summary)

1. **Is the question one question?** No. Two conditions with different anchors, a union (Fig 9 :54-57).
2. **What is the anchor?** Returned samples, spectra and laser ranging (Fig 2 :29), not model agreement.
3. **Does the reading name the source?** No. Many-to-one projection, metamerism (Fig 13 :129, Fig 9 :32).
4. **What does the reading constrain?** A shape: high-energy, late, mantle-derived, volatile-depleted, small core, re-accreted debris (world sources).
5. **Are the variants different substances?** No. Isomers over a fixed atom set (Fig 12 :117).
6. **What is unreachable?** The specific variant and date from the figures alone. `gap`, unreached at this budget (Fig 8 :39, Fig 13 :134).
7. **What would close it?** A source-discriminating instrument, modeled on the spectrometer in the hard-problem essay: new samples from different terranes that discriminate among pathways. Agreement does not close it (Fig 2 :35).

### Updated verdict

The shape survives: a high-energy, late, mantle-derived, volatile-depleted, small-iron-core event whose debris re-accretes, with the specific variant held open. The naive claims do not: composition does not directly sample the early Earth, isotope similarity does not refute the frame, and no figure returns a date or an angle. Mode `specified` on D1 to D3, `general` on the structural shape, `gap` on the variant. After re-census, no figure line is strained: each was assigned its proper object.
