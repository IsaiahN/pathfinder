# Figure-grounded audit: which atmospheric chemicals are signs of life

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This is a simulated derivation checked for internal consistency against the figures. It cannot settle the scientific question it reports on. No telescope was pointed, no spectrum fitted, no laboratory rate measured. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `PLANS/00_MASTER_PLAN.md` (all local, read this session), plus the world sources listed in `10_source_ledger.csv` and opened this session.

---

## 0. The residual, stated in effect terms, and the sought-for shape bound as an ordinary term

**Per-slot residual.** Let the observable `o′` be a spectral feature assigned to a molecule on one planet (one slot `s`). Let `Γ(b,a)` be what the held photochemical and biological library predicts should produce that feature. The residual is `R_s = |Γ(b,a) − o′|`. The live mass is not "is oxygen present?" but "which of the competing source hypotheses still fits this reading?". Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A campaign that asks for one global "is there life?" score has already thrown away the only signal that says where to look.

**The effect the question is really about.** A molecule is a reading. Under substitution of its source (biology, photochemistry, volcanism, impacts, serpentinization), the reading does not change. The generator that produced it is underdetermined by it. This is metamerism, and the figures name the same structure without the chemistry: Fig 8 :51 says *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*; Fig 13 :121 says *"Different routes can arrive at the same substance."*

**Binding the sought-for shape (Formula step "Direction").** A frame cannot check the direction of its own question, because the shape it seeks is a preference, not a term. So write down what an answer would look like and let it accrue a residual:

> **Candidate answer shape (bound 2026-11-23, before the run):** "gas X is a biosignature for planet P in context C" means a three-part molecule: `(detected feature X) + (context C that excludes the enumerated abiotic pathways for X under the host-star and planetary conditions) + (at least one witness whose closure differs from the closure that produced the first two parts)`. Without part two it is a candidate gas, not a biosignature. Without part three it is one frame talking to itself.

That shape is now an ordinary term. It can be refused by the same test as everything else, and the refuter in section 4 points at it.

**What each option leads to.** Option A, sorting gases into "life" and "not life" by molecule alone, sends a `general`-mode verdict that a reading determines a source, and it spends the independence of the people asked to check it. Option B, keeping the shape and refusing the molecule-alone split, sends a checkable conjunction, written refuters, and an open source slot until a ground settles it.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: one gas plus at least two competing source hypotheses, so this is a **union compound**, not a list of independent gases. Fig 9 :57: *"a case in two conditions is not a harder case of either"*. Symmetry: the reading is symmetric under source substitution, so it cannot carry the source in its contents (Fig 8 :50, Fig 13 :121). Scale: molecular (a line in a spectrum), planetary (atmosphere, crust, star, water), temporal (whether a disequilibrium must be replenished).

**One line per domain. No nameable anchor means it is not a domain yet.**

| # | Domain | Actors | Currency | Anchor (nameable?) | Question type |
|---|---|---|---|---|---|
| 1 | Spectroscopic observation | telescope, spectrograph, retrieval model, line list | spectral depth, inferred mixing ratio | yes: the measured spectrum, and the instrument that produced it (Fig 6 :32) | perception and vocabulary for the gas, not for its source |
| 2 | Abiotic chemistry and geochemistry | CO2 and H2O photolysis, volcanism, impacts, serpentinization, crust redox state, stellar UV | reaction fluxes, sinks, thermodynamic disequilibrium | yes: laboratory rates and photochemical models, validated against Solar System spectra | can X be made here without life? |
| 3 | Biology | oxygenic photosynthesis, methanogenesis, nitrification, microbial sulfur and methylated-gas metabolism | metabolic gas fluxes | yes: terrestrial organisms and laboratory cultures | is X made by life under some conditions? (never: by life *here*) |
| 4 | Context and verification | host-star spectrum, surface water, co-detected gases, redox state, time variability, outside reviewers | constraints that exclude abiotic pathways; independent witnesses | **the actual source on that planet**, which is not reachable remotely at this budget | was X made by life *here*? (the ground question) |
| 5 | Outside analogue: clinical testing | screening test, confirmatory test, pre-test probability, gold standard | likelihood ratios | yes: biopsy or autopsy, an independent gold standard | does a positive reading settle the cause by itself? |

Domain 5 is included deliberately as a low-overlap frame (medicine), so that any agreement with domains 1 to 4 is not an echo of the same astrobiology literature pool.

**Partition or union.** This is a **union**, not a partition. Domains 2 and 3 can both produce the same molecule; their overlap is the residual. Domain 4 is not a fourth pile of gases, it is the loop that must run over the overlap. Per Fig 9 :54, *"And when the split lands on a union rather than a partition, unbundle before you search again."* Unbundle before searching: ask the chemistry question (domain 2) and the source question (domain 4) separately, and never average their answers.

**Dependency order (Fig 3).** Perception (detect a feature, domain 1) → vocabulary (know the abiotic and biotic routes, domains 2 and 3) → objective (say what would count as excluding an abiotic route, domain 4) → planning (assemble independent witnesses) → ground settlement. The chain characteristically breaks between vocabulary and objective. Fig 3 :25-26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* We have excellent instruments for detecting gases and poor instruments for deciding biological origin at interstellar distance. Effort spent above the break does not arrive below it.

**Strain test applied.** A line that only fits with a strain governs another quantity and sends us back to the census. Two strains were found and handled in section 7, not smoothed over.

---

## 2. Figure census (bearing and verdict before findings)

| figure | bearing here | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal counts disqualified | the question must be asked per gas and per context, never as a global life score |
| 2 The Ground | anchor must not update; independence is low shared evidence | context is the anchor only if it is measured, not if it is another model; agreement among co-authored reviews is one pool |
| 3 Dependency Chain | objective link has no instrument | the break sits between "we can detect X" and "we can settle why X is here" |
| 4 The Membrane | only methods cross up; round trip is lossy | the shorthand "gas is not a source" loses constraints on return (see `11_audit.md`, R_T) |
| 5 Mint Pipeline | three guards as a product; fifth kind is refusal | "X is a biosignature" fails novelty if X is already in the chemistry library; a refusal of molecule-alone is owed first |
| 6 Closure and Reachability | import is the only operator that moves the wall; instruments grow from worse ones | the source atom is not in the spectrum's closure; a context frame must be imported, with provenance |
| 7 Room Chain | a room's agreement is variation, not a verdict | more reviews agreeing do not add an anchor |
| 8 Union Surplus | identical contents, different provenance; idempotent closure | same gas, different source, indistinguishable in the reading; search inside the spectrum never adds the source |
| 9 Leave / Arrive | describe the effect before the cause; union must be unbundled; no sealed room | describe the ambiguous reading first, then look for a frame that discriminates sources; absence of a gas proves no absence of life |
| 10 Ground Maintainer | bring a characterised residual; verifier non-access | outside checkers get the residual and refuter, not the metatheory |
| 11 The Habitat | capability is agent-and-habitat; actors' valence is residual-relative; habitat enumerated | the same gas is evidence for life on one planet and against it on another; enumerate the habitat, do not compose a generic "habitable planet" |
| 12 The Bond | the bond carries the information the ingredients do not; isomer and functional group | O2 and O3, or CH4 and CO2, differ by bond and history, not by ingredient list; a conjunction is a molecule, not a pile |
| 13 Minimum Viable Set | different routes to the same substance; unreachable is a verdict | the source of a settled molecule is not recoverable from the molecule; say unreachable, do not manufacture a name |
| Operators table | a relation failing every test is a claim not yet made | "biosignature" used as a substance-property predicate is a claim not licensed by the readings |

---

## 3. Findings, with verbatim quotes and per-domain verdicts

### F1. The molecule does not determine its source (governs domains 1 and 3)

Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*. Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause"*. Fig 13 :121: *"Different routes can arrive at the same substance."*

An oxygen line is the same line whether oxygenic photosynthesis made the O2 or UV photolysis of water or CO2 did. The discrimination lives in the record (stellar UV, surface water, redox sinks, co-gases), not in the line. Fig 9 :32: *"you get a kind of thing, never the answer itself."*

**Verdict, domain 1: `triangulated`** across Fig 8 (closure/provenance) and Fig 13 (many routes to one substance) with low overlap between those two lines of argument, and a third, genuinely low-overlap witness in clinical testing (a positive screening result is not a diagnosis; see section 5). Mode `general` for the structure, `specified` for its application to spectra.

**Verdict, domain 3: `single-source` for the figure claim.** The figure says routes converge; it does not say which metabolisms exist. The gas list (O2, O3, CH4, N2O, CH3Cl, DMS and others) comes from Schwieterman et al. 2018 and Des Marais et al. 2002, read this session, and is `specified` world content, not a figure derivation.

**Refuter:** exhibit a molecule whose physically possible production set contains exactly one pathway and that pathway requires a living agent. Then the reading would determine the source and F1 falls.

### F2. Every candidate gas has an abiotic route under some context (domain 2)

The abiotic frame is not empty for any gas on the usual candidate list. Des Marais et al. 2002: *"Abundant CH4 might require a biological source, yet abundant CH4 also can arise from a crust and upper mantle more reduced than that of Earth."* Segura et al. 2007 show CO2 photolysis can make O2 and O3, while also finding that *"such false positives are unlikely on any planet that possesses abundant liquid water"*. Harman et al. 2014 find *"simultaneous detection of O3 and CH4 by a UV-visible mission is not a strong biosignature without proper contextual information"*, and that discrimination is *"possible through analysis of the stellar and atmospheric context"*. Schwieterman et al. 2018 state the field-level consequence directly: *"a gas may be a 'biosignature gas,' even if the gas may have nonbiological sources"*.

This is the figure's closure rule met in the data. Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."* More spectra of the same gas, however many, do not add the missing source discriminator. What adds it is a different frame: stellar UV measurements, water detection, redox-state constraints, time variability.

**Verdict, domain 2: `triangulated`** between the figure closure rule and several independent world results (photochemical modelling, crustal geochemistry, review synthesis). **But** the world results share a literature pool and several authors (Des Marais, Kasting, Meadows, Segura, Harman, Schwieterman), so their mutual agreement counts as one witness, not several (Fig 2 :40). The triangulation that matters is figure rule versus modelled chemistry, which are different closures. Mode `specified`.

**Refuter:** a candidate biosignature gas with an empty abiotic closure under every physically allowed planetary context.

### F3. The context is the anchor, and anchors must not update (domain 4)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :33: *"The anchor must not update."*

For exoplanets the anchor that would settle "did life make this gas?" is the actual biota on that planet. It is not in the spectrum, not in the photochemical model, and not in the terrestrial-analogue library. Schwieterman et al. 2018 say *"ground truth verification of the biogenicity of any remotely detected signature will be unachievable for the determinable future"*, and Meadows 2017 and the NASA Life Detection Forum respond by building confidence scales (CoLD) rather than a yes/no detector. That is the correct figure move: when the anchor cannot be reached, report a gradient and a lineage, not a verdict.

Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* A null detection of O2 is not evidence of no life (a cryptic or anoxic biosphere is possible); a positive detection is not evidence of life. Both are residuals, not verdicts.

**Verdict, domain 4: `triangulated`** across Fig 2 (anchor), Fig 8 (absence is not proof), Fig 13 (unreachable is a verdict), and the world's own confidence-scale literature. Status `unreachable`, not `gap` and not `grounded`. The distinctive claim is that the framework can report this: it *"can report that it lacks something rather than producing an answer anyway"* (Fig 13, near :134).

**Refuter:** a remote instrument whose output changes when the biogenicity hypothesis changes, that is, a measurement that comments on source rather than only on composition. Until such an instrument exists, the honest label is `unreachable`.

### F4. Independence is between frames, not between molecules (sorts the proposed remedy)

The natural objection is: detect two gases, O2 and CH4, and the coincidence does the work. Hitchcock and Lovelock 1967 argued exactly this: *"any planetary biota which interacts with its atmosphere will drive that atmosphere to a state of disequilibrium which, if recognized, would also constitute direct evidence of life, provided the extent of the disequilibrium is significantly greater than abiological processes would permit."* The Galileo Earth flyby read this as a strong positive (Sagan et al. 1993).

The figures permit the conjunction, but they price independence correctly. Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Two molecules read from **one** spectrum are one frame with two slots, not two independent witnesses. Harman et al. 2014 show O3 plus CH4 can arise abiotically in a UV-visible spectrum, so the conjunction alone does not close the residual. Robustness comes when the second witness comes from a different closure: surface liquid water (a separate detection), the stellar UV spectral energy distribution (a separate measurement), the absence of the specific false-positive conditions named by Meadows 2017, or a time signal. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* A false claim of life is costly, so several genuinely independent witnesses are owed. Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* The bond here is the co-occurrence under a modelled context, and it must be recorded explicitly.

**Verdict: `triangulated`** across Fig 2 (independence), Fig 12 (bond carries the information), Harman 2014 (conjunction still ambiguous) and the clinical analogue (independent confirmatory tests). Mode `specified`.

**Refuter:** demonstrate that two co-detected gases from a single retrieval are statistically independent evidence about source, or that a single gas with no context reaches a stated confidence threshold.

### F5. The habitat is enumerated, not composed (domains 2 and 4)

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*

CH4 is a benefactor to the residual on a cold, water-bearing, oxidising planet with no serpentinization, and a malfunction on a hot, reduced, ultramafic world. There is no standing list of "good gases". The same is true of O2: abundant liquid water and an active hydrological cycle suppress the abiotic false positive (Segura et al. 2007), while a desiccated M-dwarf planet can accumulate ~20% abiotic O2 through CO2 photolysis (Luger & Barnes 2015, as reported in the searched literature). The habitat must be read off the specific planet, not composed from a generic Earth analogue.

**Verdict: `triangulated`** across Fig 11 (enumeration, valence relative to residual) and the context-dependent photochemistry results. Mode `specified`. **Strain named:** the figure's "habitat" is a biological/ecological concept; applying it to a planetary atmosphere is a level crossing. It survives because the actors (UV flux, water, crust redox) are literally in contact with the residual, but it is a cross-level application, not a native chemistry term.

**Refuter:** exhibit a gas whose biosignature status is invariant across all habitats. That would make valence a property of the molecule, contradicting Fig 11 :49.

### F6. What actually survives (the defensible residue)

| claim | mode | source |
|---|---|---|
| A molecular reading does not determine its source | `general` (structure), `specified` in application | Fig 8 :51, Fig 9 :30-31, Fig 13 :121 |
| Every candidate gas has some abiotic route under some context | `specified`, well corroborated within one literature pool | Fig 6 :23, Fig 8 :32; Des Marais 2002, Segura 2007, Harman 2014, Schwieterman 2018 |
| A conjunction of gas + excluded context + independent witness narrows the shape | `specified`, ungrounded | Fig 2 :31, :42; Fig 12 :5; Hitchcock & Lovelock 1967 |
| Source on a remote exoplanet is unreachable at this budget | `specified`, declared unreachable | Fig 2 :29, Fig 8 :39, Fig 13 :134; Schwieterman 2018; NASA CoLD |
| "Which gases are signs of life?" as a molecule-only question | **refused as written** | F1 to F5: it is a union compound that must be unbundled |

**Not claimed:** that any named gas is *the* biosignature; that O2 + CH4 is sufficient; that a null detection means no life; that the framework settles which exoplanet is inhabited.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat-rule that *"a falsifier written before the run is a design instrument, not only an honesty device"*, the shape claim in section 0 is refuted if any of the following holds:

1. A molecule is exhibited whose physically possible production routes contain exactly one pathway and that pathway requires a living agent. This breaks the source-substitution symmetry (F1) and makes a molecule-alone biosignature possible.
2. A remote measurement is demonstrated whose output changes with the biological-origin hypothesis rather than only with composition, that is, an instrument that comments on source. This moves domain 4 from `unreachable` to `grounded`.
3. Two co-detected gases from a single retrieval are shown to be statistically independent evidence about source, or a single gas with no context is shown to cross a stated confidence threshold. This breaks F4.
4. The dependency break is mislocated: an existing instrument is shown to decide biological origin from composition alone, which would make Fig 3 :25-27 inapplicable to this question.

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Stop asking "which gas?" and ask "which gas, under which characterised context, with which independent witness?" (F1, F5).
2. State the mode on every sentence. Every gas list is `specified` world content; the no-source-from-reading structure is `general`; nothing is `grounded`.
3. Unbundle the union before searching (Fig 9 :54). Run the chemistry loop and the source loop separately; never average them.
4. Lead the outreach with the shape, the refusal of the molecule-only split, and the four refuters. Offer the three source links only after a checker has recorded their own verdict on stage 1 (Fig 10 :52).
5. Use public opt-in venues in `03_public_contact_points.csv`, not personal inboxes. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
6. Report confidence as a gradient with a lineage, as the NASA CoLD scale does, rather than as a yes/no label. That is what `unreachable` looks like in practice.

---

## 6. Canonical usage check and retraction / confirmation log

Two sources were read after the first five sections and govern how the figures may be used: the canonical figures README (`FRAMEWORK/reference/FIGURES_README_canonical.md`) and the master plan sections 2, 8 and 9. The README states that the figures *"outrank everything else in the repo"*, that *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and that the framework returns *"what a missing thing would have to look like (a shape, not a name)"*. The plan adds: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* (also Fig 9 :60).

| earlier reading in this derivation | status after the canonical check |
|---|---|
| "The answer is a ranked list of candidate gases" | **Retracted.** The framework returns a shape, not a name. A ranked list is a budget filter over candidates; it cannot be the verdict. Fig 9 :60 is explicit. |
| "O2 + CH4 disequilibrium is the biosignature" | **Narrowed.** Hitchcock and Lovelock is a real world result, but Harman 2014 and Schwieterman 2018 show the conjunction is still context-dependent. It survives as the strongest *specified* conjunctive shape, never as a name. |
| "No figure line governs, so this is a gap" (first pass on the source question) | **Retracted.** Fig 2 :29, Fig 8 :39 and Fig 13 :134 govern directly. The correct status is `unreachable`, which the figures call a verdict, not a silence. |
| "Two co-detected gases are two independent witnesses" | **Retracted at re-census.** One retrieval is one frame with two slots (Fig 1 :19, Fig 2 :31). Independence must come from a different closure. See section 7. |
| "Biosignature is a property of a molecule" | **Refused.** Fig 11 :49 makes valence relative to the residual, and the Operators table's rule means a predicate that fails every identification test is a claim not yet made. |
| My first reading of Fig 8 :50 as mutual corroboration by two gases in one spectrum | **Re-censed.** Fig 8 :50 is about two frames holding the same atom by *convergent* derivation. A single instrument is one frame. The correct analogue is independent instruments or independent contexts. |
| Apparent conflict: "gases can be biosignatures" (world literature) vs "no gas determines source" (figures) | **Not strained.** Different objects. The world claim is about a candidate gas under a context; the figure claim is about the gas stripped of context. Re-census resolves it; matches the README rule. |

---

## 7. Strains, re-census and honest stop

**Strain 1, Fig 11 habitat applied to a planetary atmosphere.** The habitat figure is written for ecological systems. Here the "actors" are UV photons, water, crust redox state and co-gases. This is a level crossing, not a native use. It survives the strain test because those actors are literally in contact with the residual and the figure itself says the habitat is enumerated from the world, not composed. Recorded as a cross-level application, `specified`, not hidden.

**Strain 2, the word "source" in Fig 8 versus biology.** Fig 8 :51 speaks of the provenance of a term (where a belief came from). This derivation applies the same structure to the provenance of a molecule (what process made it). The isomorphism is real but it is an analogue, not an identity. The world source "The Hard Problem is About Source" makes the bridge explicit with metamerism: *"the instrument is speaking only about what it measured, it cannot comment on the source."* Marked as an analogue with high author overlap with the framework; the clinical-testing witness is included precisely because it is low-overlap.

**After re-census: two strains, both named, none hidden.**

**Honest stop.** The derivation stops where the instruments stop. We can measure a line, model a photochemistry, enumerate an abiotic background, and rank candidate gases by how hard they are to fake. We cannot, from that line alone, read the source. *"narrowing gets you close while the ground decides"* (Fig 13 :138-139). The lineage is recorded so the stop is checkable. This is `specified` and `unreachable`, not `grounded`, and it does not settle the question it reports on.
