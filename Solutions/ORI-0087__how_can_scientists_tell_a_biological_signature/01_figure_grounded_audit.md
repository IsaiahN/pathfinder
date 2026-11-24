# Figure-grounded audit: how to tell a biological signature from an abiotic chemical process

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output can *"simulate an approximate answer/output"*, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The local canonical figure text `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, the eight essays, and the world sources listed in `10_source_ledger.csv`. Every figure quote below was copied from the local extract and checked against it.

---

## 0. The residual in effect terms

An observation `o'` is in hand: a spectrum, an isotope ratio, an enantiomeric excess, a microfossil morphology, a gas abundance. Two candidate sources can produce it: a biological process `B` and an abiotic chemical process `A`. The instrument returns the reading and not the source. Both source hypotheses predict the same `o'`, so the slot that matters (source) has no live signal arriving.

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Symbols table :38: **"The gap between prediction and observation. The central quantity: everything the system does is driven by it."**
Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**

So the residual is not "what molecule is present." It is "which of several sources produced this reading." Aggregating over molecules (a total abundance, a single gas concentration) is exactly how the live source slot disappears. Arity: two candidate sources, plus possibly sources not yet conceived. Symmetry: the map from source to reading is many-to-one, so the reading cannot be inverted to the source. Scale: molecule, sample, site, environment, time.

**Option A**, treat the reading as decisive: fast classification, but false positives when abiotic chemistry mimics life and false negatives when biology does not leave the expected reading. **Option B**, treat the reading as one bearing and require an independent second frame plus a fixed ground: slower, but the attribution becomes checkable and its failure condition can be written in advance. This solution derives Option B as a shape, not as a measurement.

---

## 1. Domain census, before choosing any figure line

R by arity, symmetry and scale; one line per domain with actors / currency / anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| **D1. The reading domain** | instrument, sample, spectrum, observer, the slot "source" | bits of description per slot, residuals | a reproducible physical reading of the sample | partition: which arrangements are composable by which closure |
| **D2. The source-discrimination domain** | biology frame, abiotic-geochemistry frame, anchor instrument | independent bearings on the same reading | an experiment or measurement that does not move when the frames agree (Fig 2 :29-30) | **union**: two conditions overlap at the same reading |
| **D3. The habitat / context domain** | light, water, temperature, minerals, radiation, delivery, decay, contamination | contact, cascades | the world, enumerated rather than composed (Fig 11 :44) | union with D2; conditions co-bind |
| **D4. The name-binding domain** | named signatures: O2, CH4, isotopologues, enantiomeric excess, morphology | provenanced bindings from the chemistry frame | ground settlement or a provenanced import with a shadow test | partition: shape versus name |
| **D5. The time / channel domain** | diagenesis, racemization, cosmic rays, instrument drift, contamination | degradation of contact | the ground does not decay, the channel does (Fig 10 :24) | partition: unreachable-at-budget versus no-source |

**Anchor test applied.** D1's anchor is a reading that can be reproduced. D2's anchor is an experiment neither frame can move. D3's anchor is the enumerated world, not a list someone composed. D4 has an anchor only when a name is settled by measurement or imported with provenance; otherwise D4 is bookkeeping, not inference. D5's anchor is the ground, not the degraded channel. All five name an anchor, so all five are domains.

**Order by dependency (Fig 3).** Perception (read the sample) -> vocabulary (terms for what an arrangement affords) -> objective (what would count as progress, written before the search) -> planning (choose the second frame and the source-discriminating instrument) -> learn and carry (record the lineage). The chain is ordered by dependency, not importance: Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."* The bottleneck here is the middle link. Fig 3 :25-26: **"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** We have good instruments for perception (spectrometers) but weak vocabulary for what a given arrangement discriminates, and no standing objective written before the run.

---

## 2. Figure census (quoted before concluding)

| figure | verbatim bearing | verdict for this residual |
|---|---|---|
| Fig 1 :19, :22 | *"The residual is indexed by object slot, not aggregated."* | source is a live slot; abundance averages erase it |
| Fig 2 :29-30 | *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | a discriminating experiment, not expert agreement, settles attribution |
| Fig 2 :31-32 | *"Independence, between two frames, is how little they draw on the same evidence."* | biology frame and geochemistry frame must not share one evidence pool |
| Fig 2 :35 | *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | two bearings on one fixed landmark, not a vote |
| Fig 2 :40 | *"agreement about the world is worthless when the agreeing frames share an evidence pool"* | two labs reading the same spectrum are one witness |
| Fig 3 :25-27 | *"A link with no instrument is not a link that works."* | the vocabulary/objective link is the bottleneck |
| Fig 4 :30 | *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* | a condensed method must be checked against the full figure set |
| Fig 6 :21 | *"MINT composes inside the closure and can never add an atom."* | more spectroscopy on one closure cannot manufacture a missing discriminator |
| Fig 6 :34-35 | *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."* | instruments are extended from a worse instrument already returning something |
| Fig 6 :40 | *"What is unavailable is a sensor for something that has never registered anywhere, at any resolution."* | distinguishes underivable from unreachable-at-budget |
| Fig 7 :35 | *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* | a panel of agreeable readers does not settle the source |
| Fig 8 :32 | *"no search, however long, adds an atom"* | closure is idempotent |
| Fig 8 :39 | *"So a search that finds nothing is never a proof of absence."* | null detection is not absence of life |
| Fig 8 :45 | *"Two frames together reach what neither reaches alone."* | the discrimination is a union surplus |
| Fig 8 :51 | *"Convergent derivation and adopted import look identical in the contents."* | provenance separates a derived signature from a borrowed one |
| Fig 9 :27-28 | *"describe it before you go looking, or any frame you pick will seem to fit"* | describe the source residual before choosing which signature to seek |
| Fig 9 :30-31 | *"your words are borrowed too, so describe the effect rather than the cause"* | describe what a source would do, not what we call it |
| Fig 9 :32 | *"you get a kind of thing, never the answer itself"* | the framework yields a shape, not a named molecule |
| Fig 9 :55 | *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* | unbundle "biological vs abiotic" before searching |
| Fig 9 :60 | *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* | detection limits are budget filters, not witnesses |
| Fig 10 :24 | *"the ground does not decay, the channel does"* | degradation is in the channel, not in what settles the question |
| Fig 10 :42 | *"A verifier that can reconstruct the claim cannot verify it."* | do not teach the whole framework before asking for a verdict |
| Fig 11 :44 | *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* | enumerate abiotic pathways, including second-order ones |
| Fig 11 :61 | *"Introduction is available; exclusion is not."* | an abiotic pathway cannot be subtracted by decree |
| Fig 12 :5 | *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* | composition alone is not a signature |
| Fig 12 :96 | *"Two entries can share every ingredient and be inverses of one another."* | enantiomers: identical ingredients, different handedness |
| Fig 12 :104 | *"A settled molecule becomes an atom for whatever composes over it."* | a settled signature is an atom at the next level |
| Fig 12 :117 | *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* | the discriminator is an arrangement, not an ingredient list |
| Fig 12 :119 | *"catalyst. A part that survives its own use."* | regeneration across uses is a structural marker |
| Fig 12 :121 | *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* | closure distinguishes a network from an abiotic chain |
| Fig 12 :123 | *"functional group. A substructure whose presence fixes the outcome."* | a group fixes kind, qualifier fixes member; a name is not a kind |
| Fig 13 :134 | *"Unreachable is a verdict here, not a silence"* | a null result must be reported as a verdict with a budget |

All figure lines above are verbatim substrings of the local extract. Quotes that are not figure lines (essays, formula, ledger) are attributed to those sources and are not checked against the figure text.

---

## 3. Findings

### F1 — A signature is a projection, not a source (decisive within D1, triangulated)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
Fig 12 :96: **"Two entries can share every ingredient and be inverses of one another."**
Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**

The reading records composition and often misses arrangement, and arrangement is what could carry source. This is the projection problem in *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the source might be one green light, yellow plus blue, RGB, CMYK, or a scheme not yet discovered. *"If several paths create the same behavior, then behavior is a projection with lossy information."* The remedy in that essay was not an argument but a better instrument, a spectrometer.

**Mode: `specified`.** Triangulated: Fig 12 (bond carries the missing information) and the Symbols table (R is the gap between prediction and observation) are two figures with low overlap. World corroboration is secondary: Wikipedia's article on metamerism defines it as *"a perceived matching of colors with different (nonmatching) spectral power distributions"*, and Seager, Bains and Hu (2013) report that gases produced by life extracting energy from gradients *"will always have false positives because geochemistry has the same gases to work with as life does."*

**Refuter.** Show a reading whose source is uniquely determined by that reading alone, with no context, no second instrument and no provenance, across all processes known to produce it. If demonstrated, F1 fails.

### F2 — The decision is triangulation, not a measurement or a vote (decisive within D2, triangulated)

Fig 2 :29-30: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 8 :45: **"Two frames together reach what neither reaches alone."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

"Biological versus abiotic" is a union compound: both conditions can hold at the same reading. A single lever (one more spectrum) clears the region where only one condition holds and leaves the intersection standing. What is owed is a second bearing from a frame whose closure differs, ranged separately against an anchor neither frame can move. The papers agree at the level of practice: Catling et al. (2018) require four components, including *"Exclusion of false positives"*, and the NASA expert interview asks *"do we have separate independent lines of evidence that corroborate what we've seen and increase our confidence of life?"*

**Mode: `specified`.** Triangulated across Fig 2 (anchor and independence) and Fig 8 (union surplus) plus Fig 9 (union compound). The world sources are independent of the framework author, so they are genuine secondary corroboration, not a shared pool.

**Refuter.** Show that two frames drawing on the same evidence pool settle source attribution as reliably as two low-overlap frames, or that one reading plus its context uniquely fixes source with no second bearing. Either result breaks the triangulation requirement.

### F3 — The discriminator must be at the bond level (D1 and D4, triangulated)

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
Fig 12 :119: **"catalyst. A part that survives its own use."**
Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome."**

Candidate structural discriminators are therefore: an isomer or enantiomer pattern (same ingredients, different arrangement); a catalyst that is regenerated across uses; a cycle that closes, which a chain cannot do; a functional group whose presence fixes the outcome. Chirality is the most-discussed instance. Gleiser (2022) notes that *"life on Earth is mostly homochiral: proteins contain almost exclusively L-amino acids, while only D-sugars appear in RNA and DNA"*, but also that three different mechanisms produce different observational consequences. Atri (2026) warns that *"Amino acid enantiomeric excess (EE) is a potential biosignature, but its measurement requires sufficient surviving material as well as preserved chirality."* So chirality is a **candidate binding**, not a figure-derived name.

**Mode: `specified`.** Triangulated for the structural claim (Fig 12 definition plus Fig 12 :96 enantiomer line). Single-source, unmeasured, for each particular chemical instance.

**Refuter.** Show an abiotic process that composes the exact bond-level arrangement claimed diagnostic, under a declared habitat and budget, with the same behaviour under the discriminating instrument. Then the arrangement is not decisive and F3 falls back to a context-dependent probability.

### F4 — Describe the residual before choosing the signature (D4, triangulated)

Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**
Fig 8 :53: *"Residual first, frame second."*
Fig 9 :32: **"you get a kind of thing, never the answer itself"**

The inversion is to pick a familiar biosignature (oxygen, methane, the red edge) and then look for a process to explain it. *The Library of Babel* names the same failure: the searcher lacks the vocabulary and *"the problem is you"*, not the library. The National Research Council (2007) reports the field-level version: *"The search for life in the solar system and beyond has to date been governed by a model based on what we know about life on Earth (terran life)."* Starting from the terran frame is choosing a room before describing the residual, so any terran-like signature will seem to fit.

**Mode: `specified`.** Triangulated across Fig 9 and the canonical figures README. World corroboration is independent (National Research Council, not the framework author).

**Refuter.** Show that a terran-frame-first search reaches correct source attribution at equal or better rate than a residual-first search across a declared, unauthored sample. Then the priority order is wrong.

### F5 — Habitat must be enumerated, not subtracted (D3, triangulated)

Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**
Fig 11 :61: **"Introduction is available; exclusion is not."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

Abiotic production pathways are actors in the habitat: UV photolysis, volcanism, meteoritic delivery, radiation, mineral catalysis, contamination from the instrument itself. They cannot be subtracted by assertion, because contact is a fact about the world. The NASA interview asks exactly this: *"is there any other way than life to make that thing, any of the possible abiotic processes that we know and even the ones that we don't know?"* Meadows et al. (2017) conclude that *"our ability to interpret O2 observed in an exoplanetary atmosphere is also crucially dependent on environmental context to rule out false positive mechanisms."*

**Mode: `specified`.** Triangulated across Fig 11 (enumeration and asymmetry) and Fig 9 (union compound). World corroboration is independent.

**Refuter.** Produce a complete, finite enumeration of abiotic pathways for a declared signature, closed under all relevant conditions, so that exclusion becomes available. Then F5's asymmetry claim is false for that signature.

### F6 — A null result is not proof of absence (D5, triangulated, with one strain)

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 6 :40: **"What is unavailable is a sensor for something that has never registered anywhere, at any resolution."**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
Fig 10 :24: **"the ground does not decay, the channel does"**

There are two different facts: no trace left (the projection has lost its source, a colour-like case) and a trace below the instrument horizon (the diamond case where isotope ratios later restored the distinction). *How Intelligence Actually Works* calls these the distinction horizon and the union horizon, and says *"Being 'below the union horizon' is never a settled verdict, only a report that nobody has reached it yet."* The correct report is "unreached at this budget," with the instrument and deadline named. Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room."*

**Mode: `specified`.** Triangulated across Fig 8 and Fig 6, two figures with low overlap on this point; Fig 10 governs the channel. World corroboration: NASA's interview notes that in billion-year-old samples *"the evidence of life is often degraded and difficult to detect"*, and Atri (2026) quantifies preservation limits.

**Refuter.** Show a null reading under a complete instrument set that entails no biological source. This would require a sealed search, which Fig 9 :44 says no frame is.

### F7 — A named signature is a binding, not a derivation (D4, triangulated)

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 8 :51: **"Convergent derivation and adopted import look identical in the contents."**
Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**

The figures return the shape of a discriminator. They do not select O2, methane, or chirality as *the* biosignature. A specific molecule enters as a binding from the chemistry and astrobiology frame, with provenance and a shadow test, and carries zero evidentiary weight until that provenance is shown. *They're Scanning Books When They Should Be Studying Nature* adds the deeper limit: *"The real import is not a new term in the existing space. It is a new dimension of the space."* A new instrument axis, not a new name, is what can extend what is perceptible at all.

**Mode: `general` on the structural limit, `specified` on any particular binding.** Triangulated across Fig 9 and the canonical figures README.

**Refuter.** Derive a particular molecule as the unique necessary biosignature from the figures alone, with no binding from the chemistry frame.

### Verdicts per domain, kept separate, never averaged

| domain | verdict | evidence status |
|---|---|---|
| D1 reading is a projection, not a source | F1 holds | triangulated (Fig 12 + Symbols table), world corroboration independent |
| D2 triangulation required | F2 holds | triangulated (Fig 2 + Fig 8 + Fig 9), world corroboration independent |
| D3 habitat enumerated, not subtracted | F5 holds | triangulated (Fig 11 + Fig 9), world corroboration independent |
| D4 shape, not name | F4 and F7 hold | triangulated (Fig 9 + Fig 8 + README) |
| D5 null is unreached, not absent | F6 holds | triangulated (Fig 8 + Fig 6), one strain on instrument horizons recorded below |

No domain is `gap` after this census. No verdict was averaged with another.

---

## 4. Strain test and re-census

1. **Fig 12 :117 says a bond is "decisive in the behaviour," while Seager et al. say gases made by life "will always have false positives."** Re-census: Fig 12 governs arrangement-level difference at a level; Seager's statement governs composition-level gases (CH4, H2S, N2O). Different objects, different levels. Not strained. If a single *arrangement* were shown to be reproducible abiotically under the same habitat, F3 would fire, not Fig 12.
2. **"Anchor" as ground versus "habitat" as the field of contact.** Re-census: the habitat updates and the ground does not (Seat Map, "The habitat is not the ground"; Fig 10 :24). The abiotic pathways are habitat actors; the experiment that settles source is the anchor. Not strained. My first draft called the sample the anchor; this was corrected, see §6.
3. **Fig 6 :21 "MINT composes inside the closure and can never add an atom" versus the improvement of better instruments.** Re-census: Fig 6 :32 says instruments are improved from worse instruments already returning something; they extend what can be represented, they do not add an atom. Not strained. The correct line for a null result is Fig 8 :39, not Fig 6 :21. My first draft used Fig 6 :21 for the null case and this was corrected, see §6.
4. **Live strain, kept open.** The union horizon (which instruments can ever discriminate source) moves with technology. An underivable-in-principle case and an unreachable-at-this-budget case look the same from inside the frame. This is a limit, not a contradiction, and it is reported as a strain rather than smoothed.

---

## 5. SEARCHED, INWARD, OUTWARD (kept distinct)

The formula step 7 asks three questions when nothing in `closure(Γ)` closes R. SEARCHED is asked first because it is cheapest and the other two assume its answer.

- **SEARCHED (is it in here and unfound?).** Reanalyse the readings already in hand for a bond-level discriminator: isotopologue ratios, enantiomeric excess, polarization, temporal modulation. The closure does not change; same atoms, same wall, more of the space visited. Distribute the search and keep the searchers independent, since searchers drawing on one evidence pool are one searcher wearing many names (Fig 6 :53). Mode `specified`.
- **INWARD (is our representation adequate to hold it?).** Extend the instrument from one already returning something: UV spectroscopy down to 0.3 micron to break the O3-land degeneracy (Ulses et al., 2025); polarization to discriminate biotic from abiotic spectral edges (Schwieterman, 2018); microspectroscopy to separate metameric fibres (Wikipedia, Metamerism); drilling and dose modelling to separate preserved chirality from a measurable excess (Atri, 2026). Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*
- **OUTWARD (does another frame already hold it?).** Import the source-discriminating closure: photochemistry, isotope geochemistry, contamination control, statistical inference. Characterise R in effect terms first, then find the frame whose closure predicts its shape. Source gate (provenance), shadow test (explains a gap), debited against independence (Fig 6, Fig 8).
- **Underivable versus unreachable.** Underivable in principle: go outside, because no trace remains in the projection. Unreachable at this budget: more search, not another atom. Importing against a budget limit adds a wrong atom, and Fig 6 prices a wrong atom above starting from primitives (`THE_FORMULA.md` step 7).

---

## 6. Pre-registered refuter (written before the conclusion)

Per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A reading uniquely determines its source with no habitat context, no second frame and no provenance, across all processes known to produce that reading. (Breaks F1.)
2. Two frames drawing on the same evidence pool settle source attribution as reliably as two low-overlap frames, or one bearing plus context suffices with no independent second bearing. (Breaks F2.)
3. An abiotic process composes the exact bond-level arrangement claimed diagnostic, under a declared habitat and budget, with the same behaviour under the discriminating instrument. (Breaks F3.)
4. A terran-frame-first search matches or beats residual-first search on a declared, unauthored sample. (Breaks F4.)
5. A complete, closed enumeration of abiotic pathways is produced for a declared signature. (Breaks F5.)
6. A null reading under a complete instrument set entails no biological source. (Breaks F6.)

If any fires, the shape claim is withdrawn or narrowed. Until one is run, nothing here is `grounded`.

---

## 7. Recommendation

1. Lead with the residual, the shape and the refuter. Do not lead with a named molecule (F4, F7).
2. Write the objective before the search: state what result would count as a failure (§6, Seat Map :287).
3. Enumerate the habitat, including second-order effects and contamination from the instrument (F5, Fig 11 :44).
4. Choose a second frame whose closure differs and whose evidence pool is disjoint; range both against an anchor neither can move (F2).
5. Look for arrangement-level discriminators (isomer, enantiomer, catalyst, cycle, functional group), not ingredient lists (F3).
6. Report a null as "unreached at this instrument and budget," with the instrument and deadline named, never as "no life" (F6).
7. Record every binding of a specific molecule to the vocabulary as a provenanced import with a shadow test (F7).
8. Offer the method, not the conclusion: Fig 4 :22 *"Only methods cross up. Only head starts come down."*

---

## 8. Canonical usage check

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* A reading that makes figures contradict each other has misidentified its domain. The framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of what instruments distinguish and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/03-FIGURES_TEXT.md`: every `Fig N :line` quote in this folder was checked against this file. No quote was taken from a summary.
- `THE_FORMULA.md`: mode rule stated; step 7 separates SEARCHED, INWARD and OUTWARD; step 5 says *"the ground settles it. Verified only by what pays. A gate is not the ground."*
- Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."* Hence no receptiveness ranking, no personal emails, no bulk send.
- Seat Map :171 (stakes): *"an interest in the reading is disqualifying"* and where a stake cannot be removed, declare it. This derivation has a stake in its own shape; it is declared here.

---

## 9. Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F1 called "projection" on Fig 12 alone | **Strengthened and narrowed.** Triangulated with the Symbols table (R is per-slot gap) and the source-discrimination essay. Mode `specified`, not a claim about all readings. |
| Fig 6 :21 used to explain a null result | **Retracted.** Fig 6 :21 governs closure composition, not instrument reach. Correct lines are Fig 8 :39 and Fig 6 :40. The strain is dissolved by re-census. |
| "The sample is the anchor" | **Retracted.** The sample is habitat; it can be contaminated and degraded. The anchor is the experiment that settles the source and does not update (Fig 2 :29-30, Fig 10 :24). |
| Chirality treated as the decisive biosignature | **Retracted to candidate binding.** Gleiser (2022) gives abiotic mechanisms with different observational consequences; Atri (2026) shows preservation constraints. It is an instance of Fig 12 :96, not a figure-derived name. |
| Fig 12 "decisive in the behaviour" versus abiotic false positives | **Not strained.** Re-census: arrangement level versus composition level. Recorded in §4. |
| "No domain is a gap" | **Confirmed after re-census.** All five domains name an anchor and a dependency order. F6 keeps an open instrument-horizon strain, which is a limit, not a gap. |
| Fig 9 :32, the shape, not a name limit, applied to all names | **Narrowed.** The limit governs naming what is not held or not settled. A molecule can be named as a provenanced binding from the chemistry frame; what cannot be done is to present that binding as figure-derived. |
| Outreach plan originally listed named scientists' email addresses | **Removed before writing.** Only public, opt-in institutional venues remain in `03_public_contact_points.csv`. |

---

## 10. Updated verdict

The shape survives: a signature is a projection, so source attribution needs an arrangement-level discriminator, a second low-overlap frame, an unmoving anchor, an enumerated habitat, and a null reported as unreached rather than absent. The specific names do not survive as figure-derived results: O2, methane, chirality and isotopic ratios are bindings from the chemistry frame, provenanced as such and carrying zero verdict weight until a ground settles them. Mode `specified` on the substantive claims, `general` on the structural shape, `grounded` on none. Strains after re-census: one open, the moving union horizon of instrument discrimination. No figure line was silently smoothed.
