# Figure-grounded audit: how cells decide which environmental information to ignore, retain, or act on

**Mode of this document: `specified` on the routing claims, `general` on the structural shape, `gap` on the literal ligand list. Not `grounded`.** Per `THE_FORMULA.md` step "Mode": general, specified, grounded; state which. Accepted means the ground settled it; otherwise candidate. No measurement was taken here, so nothing is accepted.

**Status of this derivation: a simulated derivation checked for internal consistency against the figures, not a ground reading.** *The Recursive Self-Improvement Trap*, opened 2026-11-23: LLMs "can quickly simulate an approximate answer/output with the formula found in the architecture post", but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This file is the former. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure citations are against `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. The formula and canonical usage rule are local framework files. Ten world sources were opened in full or from the publisher's full abstract where the full text was paywalled, and are declared with overlap in `10_source_ledger.csv`.

---

## 0. The claim under audit and the residual in effect terms

The question asks for a decision rule over environmental information. In effect: a cell is in contact with many signals at once (nutrients, repellents, temperature, pH, osmolarity, quorum molecules, phage, other cells). Each signal channel is a slot `s`. The cell holds a belief `b` (receptor occupancy, receptor methylation level `m`, transcription factor concentrations, epigenetic marks) and takes an action `a` (tumble or run, express or repress an operon, divide, enter a persister state, secrete a signal). It predicts `Γ(b,a)` and observes `o'`. The residual is `R_s = |Γ(b,a) - o'|` per slot.

**What is being decided:** the route each slot's residual takes. Formula step 2 sorts R by boundary diff:

- TRANSFERRED: nothing owed. From the outside this looks like "ignore".
- NOVEL: extend perception, aim the probe. This is one kind of "retain".
- BROKEN, rebinding: re-fit, do not mint. This is the other kind of "retain".
- BROKEN, mechanism: a mint is owed. This is one kind of "act".
- REFUTED: a term held is false; what is owed is a refusal. From the outside this also looks like "ignore", but it is the opposite sign.

**What each option leads to:** ignore (TRANSFERRED or REFUTED) saves the cost of acting but risks a live slot going unread; retain (NOVEL or re-fit) buys a head start for later slots but costs the maintenance of memory; act (mint or rebind) changes contact with the ground and pays immediately in energy and opportunity cost. A wrong route is not symmetric with a right one: ignoring a toxin and acting on a nutrient both cost fitness, but through different channels.

**The shape, bound before the run:** a separator that assigns a route per slot and states the refuter for that assignment. Per Formula "Direction", a frame cannot check the direction of its own question because the sought-for shape is a preference, not a term. So the separator is written down here, before the findings, and allowed to accrue a residual like anything else. Fig 5 :65 "The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM."

The question is not "which information is relevant in general". Fig 11 :51 "No standing list of good actors survives a change of residual." A list valid for one cell in one environment is not valid after the residual changes.

---

## 1. Domain census, written before choosing any figure line

### R by arity, symmetry and scale

- **Arity:** many. One residual per object slot (Fig 1 :10 "one bet per object slot, every action"; Fig 1 :11 "residual R indexed by object slot"). There is no single "the environment"; there is a vector of channels. Fig 1 :13 "a global R near zero with one live slot residual is a legal state." A cell can be almost perfectly adapted overall while one ligand channel demands action.
- **Symmetry:** the three verbs are ordered, not symmetric. `→` is sequence and `⇒` is production; neither can be read backwards (Operators table :30-40). Valence is not carried by the molecule: Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." The same attractant is a food cue in one context and a deceptive cue in another (Fig 11 :50).
- **Scale:** three. Molecular (binding, methylation, transcription), cellular (the route and the action), lineage (selection, duplication, horizontal transfer). Fig 10 :68 "Different actors, a different currency, a different ground, and a lossy transform between." The transform between them is lossy, so a cell-level claim cannot simply be scaled up to a lineage-level claim.

### One line per domain: actors / currency / anchor, and question type

**D1, the cell-internal signaling frame.** Actors: chemoreceptors (Tar, Tsr, Trg, Tap, Aer), CheA, CheW, CheY, CheZ, CheR, CheB, transcription factors, promoters, methylation level `m`, receptor occupancy. Currency: molecular concentrations, binding free energy, bits, methylation state. Anchor: the actual local ligand concentration outside the cell, which the network estimates, and the growth-rate ground that pays for the response. Question type: **partition attempt** of R by kind (held, novel, broken, refuted), but the bins overlap in practice, so the attempt resolves to a union. Dependency: first link (perception) then vocabulary (what a ligand affords) then objective (what counts as progress), per Fig 3 :4-11.

**D2, the habitat and contact domain.** Actors: ligands, nutrients, toxins, temperature, pH, osmolarity, quorum signals, phage, neighbouring cells. Currency: molecular flux, concentration, time. Anchor: the physical environment as it is; it does not update on what the cell believes. Question type: **enumeration, not composition** (Fig 11 :43). Contact cascades beyond first order (Fig 11 :52). Dependency: supplies R before D1 can route it; must be described in effect terms before a frame is chosen (Fig 9 :27-28).

**D3, the lineage and selection domain.** Actors: lineages, mutation, gene duplication, horizontal transfer, selection. Currency: fitness, measured as growth rate in the lab and reproductive success in the wild. Anchor: reproductive success, which is not a frame and has no vantage from which to update. Question type: **union of three modes** (unmaintained, maintained, isolated, Fig 11 :4-9). Dependency: settles the receptor repertoire over generations; the compiled prior arrives in the cell as a head start, not as a replay (Fig 4 :22-24).

**D4, the verification frame (this derivation and its reader).** Actors: expert readers, reviewers, editors. Currency: agreement and residuals. Anchor: the ground, never agreement. Question type: checking arrangement, not a source of verdicts. Dependency: last. In this simulated run all four domains draw on overlapping evidence pools, so independence is low and agreement is not a witness (Fig 2 :40).

### Partition or union

The three verbs are not a partition. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing." A signal can be retained (methylation memory) and acted on (tumble) in the same response. A signal can be ignored because it carries no residual and ignored because a held regularity is false. Those two states have opposite signs and share only an outward appearance. So the compound gets its own loop, and each domain keeps its own verdict.

Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." This is why a single threshold cannot answer the question.

### Order by dependency (Fig 3)

D2 habitat contact supplies R. D1 perception and vocabulary route it and state an objective. D3 selection pays for the compiled repertoire across generations. D4 verifies. Performance effort aimed above the break cannot rescue a link below it: Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Fig 3 :20 "The chain is ordered by dependency, not by importance." The usual break is between vocabulary and objective: Fig 3 :26 "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

### Strain test applied at census time

Trying to make Fig 11 :36 govern the whole question strains: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there." At the cellular moment a controller exists (receptor cluster, methylation feedback), so :36 is about the unmaintained lineage scale, not about the moment of routing. Re-census: D1 and D3 have different actors, currency and anchor. No strain after re-census. Both lines are kept, each in its own domain. This is the canonical re-census rule: a reading that makes figures contradict one another has misidentified its domain.

---

## 2. Figure census, quoted verbatim before concluding

Citations are `Fig N :line` against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Every string in double quotes below was checked character by character against that file.

| figure | bearing on this residual | verdict |
|---|---|---|
| Fig 1 The Agent | R per slot; boundary diff sorts by broken versus novel; ground is the only metric | governs D1 routing, decisive |
| Fig 2 The Ground | anchor does not update; agreement from one pool is worthless | governs D2 anchor and D4 independence |
| Fig 3 Dependency Chain | order by dependency; break between vocabulary and objective | governs D1 objective measurement |
| Fig 4 The Membrane | methods cross up, head starts down; round trip gap | governs D1 to D3 transfer |
| Fig 5 Mint Pipeline | four kinds plus refuted; three guards and the bargain | governs the meaning of "ignore" and "act" |
| Fig 6 Closure / Reachability | import only moves the wall; instruments from worse instruments | governs new ligand specificity |
| Fig 7 Room Chain | handing along without ground is motion, not progress | governs outreach and lineage retrodiction |
| Fig 8 Union Surplus | residual first; convergent derivation versus adopted import | governs union reading and provenance |
| Fig 9 Leave / Arrive | union versus partition; describe effect rather than cause | decisive on the three verbs |
| Fig 10 Ground Maintainer | habitat versus ground; ground does not decay, channel does | governs D2 and D3 separation |
| Fig 11 The Habitat | enumerate habitat; valence relative to residual; selection ran | governs D3 and the meaning of "decide" |
| Fig 12 The Bond | isomer, catalyst, cycle, functional group, two currencies | governs supporting derivation in `06` |
| Fig 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the shape limit |
| Formula | route step, mint guards, settle, direction discipline | governs method |
| Symbols table | R is always a slice; ground is the anchor | governs what a cell cannot perceive |
| Canonical figures README | shape, not a name; indiscernibility is not identity | governs the stop |

---

## 3. Findings, each with verbatim quotes, refuter and mode

### F1. The three verbs are a union, not a partition (decisive, `general` structural)

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Formula step 2 gives five routes, not three. Mapping them:

- TRANSFERRED, Fig 5 :11 "held: the model was right, nothing owed" gives one sense of ignore.
- NOVEL, Fig 5 :12 "new: extend perception, aim the probe here" gives one sense of retain.
- BROKEN rebinding, Fig 5 :13 "mis-attached: refit what you have, do not invent" gives the other sense of retain.
- BROKEN mechanism, Fig 5 :14 "mechanism broken: a new term is owed" gives one sense of act.
- REFUTED, Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so" gives a second, opposite sense of ignore.

A ligand can be retained in working memory and acted on in the same second. In E. coli chemotaxis the methylation level `m` is the working memory while the instantaneous kinase activity drives tumbling; both are simultaneously live (Lan and Tu 2016, opened this session). So "retain" and "act" are not disjoint. A single lever, for example raising a receptor's affinity, clears the region where only one condition holds and leaves the intersections standing, exactly as Fig 9 :55 predicts.

**Verdict:** `general` on the structure, triangulated across Fig 9 and Fig 5 with Formula step 2 (low overlap between a union rule and a pipeline sorting rule). **Refuter:** show a single criterion that sorts every signal of a given cell into exactly one of the three bins with no overlap, measured at one time and one place. If that holds, Fig 9 :54-57 does not govern this residual and F1 is withdrawn.

### F2. The residual must stay indexed per signal, and pooled reading is a named failure (`specified`, triangulated)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." Fig 1 :13 "a global R near zero with one live slot residual is a legal state." Fig 10 :26 "saturated metrics, pooled readings" is listed among the ways the channel, not the ground, decays.

This is not an analogy imposed from outside. Lan and Tu 2016 report that in the strongly coupled MWC model "when one type of ligand is saturated, all receptors in the MWC cluster will be methylated to the highest methylation level", after which "the cluster will completely lose its ability to sense and respond to the change" in a second ligand. They call this "memory contamination". Their local adaptation model restores ligand-specific methylation, and they conclude that "bacteria can distinguish and encode complex external ligand information through methylation levels of their corresponding receptors". The figure's pooled-reading failure and the biological cross-talk result are the same shape at two scales.

Tu 2013 adds the objective side: the adapted activity returns to a fixed level independent of background concentration, so the cell maintains high gain across a wide range. In figure terms, the cell keeps the channel able to register a residual instead of letting the metric saturate.

**Verdict:** `specified`, triangulated across Fig 1, Fig 10 and two low-overlap biological sources (physics-based modelling of chemotaxis versus a framework rule about per-slot residuals). **Refuter:** measure a cell in which two ligands in the same receptor cluster cannot be responded to independently under any perturbation, so that R is genuinely pooled rather than per slot. If that is the general case, Fig 1 :19 and :28 do not govern D1, and F2 falls.

### F3. "Ignore" is at least three different operations with different signs (`specified`, triangulated)

Fig 5 :11 "held: the model was right, nothing owed" (TRANSFERRED). Fig 5 :28 "keep the gap, look for an import" (NOVEL parked). Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so" (REFUTED). Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." Operators table :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate."

These are not versions of one operation. TRANSFERRED changes nothing. NOVEL parked keeps a gap and waits for an import, which Fig 5 :41 "Any one of them at zero stops the mint entirely" explains: a system minting nothing may have nothing wrong with its minting. REFUTED adds a term that removes another term's standing to be composed over, so the reach falls while the record grows. From outside all three look like "the cell did not act on that signal".

The biological instance is anticipatory behaviour. Perkins and Swain 2009, opened in full, report that E. coli responds to a rise in temperature by preparing for loss of oxygen, because temperature predicts entry into a host; and that when the association is broken by experimental evolution, "the association between oxygen and temperature was substantially reduced" and the anticipatory response is lost. A cue that was held as predicting becomes false. That is REFUTED, not TRANSFERRED. Treating them as one bin is the error the figures name.

A second instance is bet hedging. Pedraza, Garcia and Perez-Ortiz 2018, opened in full, write that "under certain conditions it might be better for a cell not to try to determine precisely what environment it is facing but randomly switch between possible responses". That is NOVEL parked with no reachable import: the frame cannot compose a term for the environment, so it keeps a distribution rather than inventing a name.

**Verdict:** `specified`, triangulated across Fig 5, Fig 12, the Operators table and two biology sources. **Refuter:** show that parked, held and refused signals are implemented by the same molecular operation in a given cell, with the same sign of effect on the reach. If so, the three-bin reading is unnecessary and F3 is withdrawn, though the figure distinction would still govern the framework description.

### F4. A cell cannot decide about a signal it has no instrument for, and a new instrument comes from a worse one already returning something (`specified`, triangulated)

Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :33 "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced." Fig 6 :34 "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve." Fig 6 :25 "An import adds no atom to the world." Fig 6 :22 "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."

Symbols table :38-40: R "is always a slice: what cannot be perceived yet is residual and simply cannot be read." A ligand with no receptor is outside the cell's reach, not merely unconsidered.

Gavira et al. 2020, opened in full, show precisely the permitted route: "two chemoreceptors with a narrow ligand range have evolved from an ancestral protein with a broad chemoeffector spectrum." The broad-range PctA was ancestral, and PctB and PctC arose by independent duplications with changes in the ligand-binding pocket. The abstract says these receptors "complemented 'missing' amino acid sensing abilities arose later in specific Pseudomonas lineages." That is an instrument improved from a worse instrument already returning a reading. It is not a sensor specified from a description.

Fig 6 :12 "source gate: provenance" and :13 "shadow test: explains a gap" are the two conditions an import must pass. A horizontal transfer of a receptor gene is an import from a live peer; Fig 6 :24 "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives." Gavira et al. also record "unsuccessful" evolutionary experiments: pseudogenes and complete loss of these genes in various strains, which is the price of a wrong atom paid by the lineage.

**Verdict:** `specified`, triangulated across Fig 6, the Symbols table and an independent molecular-evolution study (different field, different method). **Refuter:** demonstrate a new ligand specificity arising without modification or duplication of any pre-existing sensor that already returned a reading for some ligand. If that occurs, Fig 6 :32-34 does not govern receptor evolution and F4 falls.

### F5. The anchor is fitness, which does not update on the cell's belief (`specified`, triangulated)

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 1 :23 "The ground enters as the only metric." Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." Fig 11 :36 "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."

At the lineage scale no seat maintains the ground, so "the cell decided" is a retrospective label. At the cellular moment a controller does work: Fig 11 :37 "Where a seat exists, something is doing work, and it is exactly what the seat does: enumerate the habitat, rank by cascade, introduce actors, build instruments, read the ground." These are different domains, not a contradiction. Fig 11 :39 "And capability is a property of agent-and-habitat, never of the agent alone."

Fulda 2017, full abstract read from Cambridge Core, reaches the same separation from philosophy: "Bacteria, I conclude, are adaptive agents, hence not mere automata, but not cognitive agents." His claim is about the category "cognitive agent", which requires open-ended responsiveness to rational norms; it is not a claim that the signaling network does no work. Apparent conflict with Perkins and Swain's "cellular decision-making" dissolves by re-census: one governs a philosophical category, the other an information-processing function. The verdict was not flipped.

Pedraza et al. 2018 state the metric directly: "every bit of information is in principle equally valuable in abstract communication channels, but for an organism some bits are more valuable than others." They define the value as "the expected fitness given some particular information minus the expected fitness without it." That is a fitness anchor, not an information measure. It is why Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict" applies to mutual information in biology.

**Verdict:** `specified`, triangulated across Fig 1, Fig 2, Fig 11, a philosophy source and a biophysics review, with low overlap between the last two and the figures. **Refuter:** show two different cellular routings that are equally fitness-discriminable by any available measurement, so the anchor cannot settle between them, or show a lineage in which selection does not settle which repertoire persists. If so, the anchor claim fails for that case.

### F6. Capability is cell-and-habitat; the cell can introduce but not subtract (`specified`, triangulated)

Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not." Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another."

A cell changes its contact by moving (chemotaxis), by secreting signals (quorum sensing) and by expressing receptors that bind what is already there. Perkins and Swain 2009 state that "The response may be a change in internal state or an action that changes the environment itself." That is the two-way contact the figures require. But the cell cannot remove a ligand from the world by deciding to ignore it. Ignoring is gating a channel, not subtracting the habitat. A test harness that presents a clean ligand panel is a substituted habitat (Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."), so a synthetic biology demonstration of a routing circuit proves the wiring, not that the cell would route correctly in its natural habitat.

**Verdict:** `specified`, triangulated across Fig 11 and a systems-biology review (different field). **Refuter:** exhibit a change internal to the cell that increases its capability while leaving contact with the habitat unchanged in every respect. Fig 11 :40 says this cannot happen; a single clear case would refuse it.

### F7. Retention has two scales, and only methods cross between them (`specified`, triangulated)

Fig 4 :22 "Only methods cross up. Only head starts come down." Fig 4 :23 "upward: a method that can be reapplied. Never the recording of a particular success." Fig 4 :24 "downward: something that makes the next search cheaper. Never a replay of what worked once." Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." Fig 10 :70 "The tree of life is what a non-invertible transform looks like from outside."

Within one cell, retention is the methylation level: Lan and Tu 2016 say "the receptor methylation level thus serves as a working memory of the external signal", and Tu 2013 shows the memory tracks the logarithm of ligand concentration. Across generations, retention is a head start: Perkins and Swain 2009 report that the lactose permease LacY "is known to remain at an elevated concentration for generations after an initial exposure to lactose", and that yeast Gal1p does the same for galactose, with chromatin modification as another mechanism. These are head starts, not replays of one success. Gene duplication and horizontal transfer are the lineage-scale version (Gavira et al. 2020).

Fig 4 :34 "The level a method lands on remakes it. A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes." A receptor gene inherited by a daughter cell does not carry the parent's experience; it carries what will acquire it, and the new habitat decides what it becomes.

**Verdict:** `specified`, triangulated across Fig 4, Fig 10 and three biological sources. **Refuter:** show a case where the exact recorded state of one occasion, not a reusable method or a head start, crosses a scale boundary and is used as a replay. If that is the normal route, Fig 4 :22-25 does not govern D1 to D3 transfer and F7 falls.

### F8. The chain usually breaks between vocabulary and objective, and that link has an instrument (`specified`, single-source on the framework side, corroborated)

Fig 3 :25 "Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests." Fig 3 :26 "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :29 "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

For a bacterium the objective can be measured. Perkins and Swain 2009, reporting Dekel and Alon 2005, describe an experiment in which the cost of expressing the lac operon is measured as the reduction in growth rate in a environment without lactose, and the benefit as the increase in growth rate with lactose, so that the optimal expression level follows benefit minus cost. The paper adds the caution that the predicted curve does not match wild type in detail, and that averaging over a distribution of environments and over stochastic fluctuations improves the fit. So the instrument exists but is not perfect. For a cell inside a multicellular organism the objective is much harder to define, and Fig 3 :27 applies: the link is unmeasured, not known to work.

**Verdict:** `specified`; the framework claim is `single-source` (Fig 3), the existence of a growth-rate instrument is corroborated by one biology source. **Refuter:** exhibit a cell that has receptors and effectors but for which no quantity whatsoever can be measured that discriminates progress, and show that its routing is nonetheless reliably improving. That would leave the middle link working without an instrument, which Fig 3 :27 refuses.

### F9. Ignoring under irreducible uncertainty is a distribution, not a failed measurement (`specified`, triangulated)

Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." Fig 5 :62 "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term." Fig 5 :41 "Any one of them at zero stops the mint entirely."

When the needed atom is not in closure(Γ) and no import passes the source gate and shadow test, the cell cannot compose a term for the environmental state. The reachable response is to maintain a phenotype distribution whose switching rates are themselves influenced by what is sensed. Pedraza et al. 2018 give the experimental case: bacterial persistence, where "a very small fraction of a population switches on a timescale of hours in and out of a non-growing or slow-growing state", and it was shown by Balaban et al. that "cells enter the persistent state before the stress is applied". They also report Acar et al.'s engineered yeast strains, where the winning switching rate depends on how fast the environment changes. This is not a cell ignoring information because it cannot be bothered; it is a cell holding a preference it cannot bind as a term, exactly as Fig 5 :62 describes.

**Verdict:** `specified`, triangulated across Fig 5, Fig 8, Fig 9 and one physics review. **Refuter:** show a cell that achieves the same fitness under irreducible uncertainty with a single phenotype and no distribution, in the same environment and at the same cost. If so, the distribution is not forced and F9 is narrowed to a conditional claim.

### F10. No figure line returns the ligand list; that is a declared `gap` (`general` shape, `gap` on the list)

Fig 9 :32 "you get a kind of thing, never the answer itself." Fig 13 :134 "So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence," Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 6 :30 "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."

The figures return the routing shape, not a list of ligands for a named species. Ligand lists are empirical bindings from the biology frame, settled by the ground for that cell in that habitat. This is `unreachable at this budget`, not `underivable in principle`: Fig 9 :40 "Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom." A receptor panel can be measured. The gap is that this derivation did not measure it and the framework cannot supply it.

**Verdict:** `general` on the shape limit, `gap` on the list. **Refuter:** produce a figure line that names a specific ligand, receptor family or threshold concentration for a given cell. None exists; if one were added to the figure set, F10 would be withdrawn.

---

## 4. Pre-registered refuter (written before the conclusion, as required)

Per Seat Map discipline: a falsifier written before the run is a design instrument, not only an honesty device. The separator shape is refuted if any of the following holds.

1. **Per-slot failure.** Response to one ligand in a mixed receptor cluster cannot be measured independently of the others under any perturbation, so R is genuinely pooled rather than indexed per slot. This kills F2 and the Fig 1 route.
2. **Union failure.** A single criterion is shown to sort every signal of a given cell at one time into exactly one of ignore, retain, act, with no overlap and no leftover intersections. This kills F1 and the Fig 9 union reading.
3. **Instrument failure.** A new ligand specificity is shown to arise without duplication or modification of a sensor that already returned a reading. This kills F4 and the Fig 6 :32-34 law.
4. **Anchor failure.** Two different cellular routings are shown to be equally fitness-discriminable by every available measurement, or selection is shown not to settle which repertoire persists. This kills F5.
5. **Scale re-census failure.** One mechanism is shown to do moment-to-moment routing and to constitute lineage selection at the same scale with the same anchor. This kills the F5 separation of Fig 11 :36 from :37.
6. **Shape limit failure.** A figure line is shown to return a specific ligand, receptor or threshold for a given cell without an import or a ground measurement. This kills F10 and Fig 9 :32.

If any fires, the corresponding finding is withdrawn and the shape is re-censused. Until one is run, no part of this is labelled `grounded`.

---

## 5. Recommendation

1. Lead with the per-slot union separator and the pre-registered refuter. Do not lead with the framework (Fig 10 :52 "Bring a characterised residual, never the source.").
2. Keep the three verbs unbundled. Ask a reader which of the five Formula routes they would assign to a given signal before showing them any figure (Fig 9 :27-28).
3. Treat Fig 1 :13 as the licence for one live slot in an otherwise quiet cell. Do not average residuals into a single "how much information does the cell keep" scalar.
4. Report the ligand list as a `gap` and an empirical task, not a silence and not a number to be invented (Fig 13 :134-135).
5. Use the public institutional venues in `03_public_contact_points.csv`, one to one, and never select readers for likely agreement (Fig 2 :40).
6. Label every substantive claim with its mode, and label the whole folder a simulated derivation.

---

## 6. Canonical usage check

Two local framework files were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also states that "a reading that makes one contradict another has misidentified its domain, not found a flaw", and that the framework says "what a missing thing would have to look like (a shape, not a name)", then stops and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight steps, the route and mint guards, the settle rule, and the mode rule. Step "Direction" is the reason the sought-for shape is written down before the run, as an ordinary term.

### Retractions and confirmations, kept visible

| earlier reading | status after the canonical check |
|---|---|
| Fig 11 :36 means cells do not decide at all | **Retracted at the global level.** :36 governs the unmaintained lineage scale; :37-39 govern the maintained cellular moment. Two domains, not one verdict. |
| "ignore" equals Fig 5 :11 held | **Retracted as a single mapping.** PARKED (Fig 5 :28) and REFUTED (Fig 5 :53) are also called ignore from outside and have opposite signs. |
| ignore / retain / act is a partition | **Retracted.** Fig 9 :54-57 makes it a union of overlapping conditions with a compound loop. |
| Fig 13's six terms map onto receptor families | **Refused as a strain.** Fig 13 governs the physical substrate (space, time, energy; spectrum, gradient, network), not signal-transduction proteins. Re-census assigns it to the habitat's physical structure, and it is not used to name receptor types. |
| "shape, not a name" forbids naming a receptor family | **Narrowed and kept visible.** The canonical README's phrase governs a *missing* primitive. Naming a receptor family is a binding from the biology frame onto an already available mechanism, licensed by provenance. What is forbidden is inventing a new primitive or claiming the binding moves the wall (Fig 6 :25 "An import adds no atom to the world."). |
| Apparent conflict, Fulda 2017 (not cognitive agents) versus Perkins and Swain 2009 (cellular decision-making) | **Not a conflict after re-census.** Fulda governs a philosophical category; Perkins and Swain govern an information-processing function. Both stand; the verdict was not flipped. |
| Mutual information as the thing the cell maximises | **Refused.** Pedraza et al. 2018 distinguish amount of information from fitness value. Fig 9 :60 makes mutual information a budget filter, not a witness. |
| Fig 8 union surplus versus Fig 2 agreement worthlessness | **Not strained.** One governs whether a union has a surplus; the other governs whether agreement is a verdict. Same independence parameter, two readings. |

After re-census: one strain recorded and dissolved (Fig 11 scale), one strain refused (Fig 13 applied to receptor proteins), no hidden strains.

---

## 7. Retraction and confirmation log summary

- Retractions: four (global Fig 11 reading, single-bin ignore, partition reading, Fig 13 receptor mapping). Each is preserved above rather than erased.
- Narrowings: two (shape-not-a-name scope, mutual-information status).
- Confirmations: six (per-slot residual, union structure, instrument law, fitness anchor, method-versus-recording, gap on the ligand list).
- No world source conflict remained unresolved after re-census. The conflict rule was triggered once (Fulda versus Perkins and Swain) and sent back to the census; it did not flip any verdict.
