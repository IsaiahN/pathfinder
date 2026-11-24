# Figure-grounded audit: which Earth-system interactions are strongest at each scale?

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the literal ranking. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-22): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* And: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Framework primaries used.** Local `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, and `FRAMEWORK/figures/THE_FORMULA.md`. Every figure string quoted below is an exact substring of the verbatim figure text and is cited as `Fig N :line`.

---

## 0. The residual, stated in effect terms

The question asks for a ranking: at local, regional, continental and global scale, name the Earth-system interactions that are strongest. Read as an effect, the failure is not that we lack a longer list of candidate interactions. The failure is that "strongest" is not defined until three things are named:

1. **The slot.** Which component, region, variable and outcome is being tracked? Without a slot there is nothing for a strength reading to attach to.
2. **The currency.** Strong in what units? Carbon flux, water flux, albedo, teleconnection correlation, recovery time after perturbation, cascade reach? These are different measures and do not add (`Fig 12 :125`).
3. **The residual.** Strong at doing what? An interaction that amplifies warming is "strong" for one question and irrelevant for another.

The effect therefore is: *given a scale and a list of interactions, we cannot order the list by strength until we have named a per-slot residual and a currency, and we have no figure line that returns the ordering directly.* The question bundles four scale questions and a definition question into one. It is a **union**, not a partition, and must be unbundled before search (`Fig 9 :54`).

**What an answer would look like (the sought-for shape, bound as an ordinary term).** A checkable separator that, for any named scale and residual, outputs: the slot, the currency, the interactions whose contact with that slot survives an independent non-updating measurement, the second-order cascades that must be enumerated, and the round-trip gap across the scale membrane. It does **not** output a standing list. Writing this down before the run makes the preference refusable by the same test as everything else (`THE_FORMULA.md` "Direction"; `Fig 5 :65-66`).

---

## 1. Domain census, before any figure line is chosen

### 1a. R by arity, symmetry and scale

The figure text names these three descriptors explicitly: `Fig 9 :22` *"arity · symmetry · scale"*.

- **Arity.** At least five: four named scales (local, regional, continental, global) plus the definition of "strongest" that all four depend on. More precisely, the residual is indexed per object slot, so the arity is the number of live slots in the chosen Earth-system cut, not the number of scales. `Fig 1 :19` *"The residual is indexed by object slot, not aggregated."*
- **Symmetry.** The comparison "stronger than" is ordered, not symmetric. It is a threshold relation between two quantities (`Fig 12 :87` *"a threshold relation between two quantities"*; Operators table test: *"is it about which is larger, rather than both being present? Yes."*). Its ordering axis is a spectrum (`Fig 13 :20` *"ordering, so more and less can be said"*). Swapping operands changes the claim. A pooled correlation, by contrast, is symmetric, so it cannot by itself choose the arrow (`Fig 2 :39` *"Correlation has valence."*).
- **Scale.** The question spans four scales, but scale is a parameter of the observing frame, not a ladder of different physics. `Fig 4 :20` *"Only the actors, the currency and the anchor change."* The kernel does not change with size (`Fig 4 :19`), and there is no top rung (`Fig 10 :68`, `Fig 4 :33`). Cross-scale movement is a lossy membrane with a measured round trip (`Fig 4 :30`), and contact cascades reach the residual several steps out (`Fig 11 :52-54`).

### 1b. One line per domain: actors / currency / anchor

A domain requires a nameable anchor. Where none can be named, the thing is not yet a domain.

| domain | actors | currency | anchor (nameable?) |
|---|---|---|---|
| **D1 Observation and measurement** | instruments, reanalyses, model tiles, datasets | residual `R` per slot (`Fig 1 :11`, Symbols `s`) | a measurement that does not move when a frame pushes on it (`Fig 2 :29` *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*). Yes. |
| **D2 Mechanism and composition** | atmosphere, ocean, ice, land, ecosystems; their actors, conditions and relations (`Fig 11 :45-47`) | cross-kind composition and contact (`Fig 13 :74`) | experiment, paleo record, process study. Yes. |
| **D3 Cross-scale transfer** | the four scales as nested rooms; the membrane between them | methods carried up, head starts carried down (`Fig 4 :22`); contact cascades | the round-trip gap `R_T` (`Fig 4 :30`). Yes, a measured quantity. |
| **D4 Strength and valence ranking** | the candidate interactions as relations | comparison `⋛` and spectral ordering (`Fig 13 :20`) | the *named residual* to which valence is relative (`Fig 11 :49`). Yes, once the residual is written down. Without it, this is not yet a domain. |
| **D5 Human alteration** | land and water use, emissions, introductions | introduction, not subtraction (`Fig 11 :61`) | observation of the altered state. Yes. |

### 1c. Partition or union

Union, not partition. The overlaps are compounds with their own loops:

- D1 ∩ D2 = **measured mechanism**. A mechanism with no measurement is not assessable; a measurement with no mechanism is a reading without a source.
- D2 ∩ D3 = **cross-scale cascade**. The residual that matters at the receiving scale is often not the first-order contact (`Fig 11 :52-54`).
- D4 depends on D1: no named residual, no slot, no valence. Ranking before naming the residual is the apophenia the figure forbids (`Fig 9 :27-28`).
- D5 overlaps both D2 and D3: human introduction changes the habitat and the cascade at once.

Because it is a union, one lever leaves the intersections standing. Verdicts are kept per domain and never averaged (`Fig 1 :22`).

### 1d. Order by dependency (`Fig 3 :20` *"The chain is ordered by dependency, not by importance."*)

1. **Name the residual and the slot** (D1). This is the perception and vocabulary links.
2. **Enumerate the habitat** around that slot (D2). `Fig 11 :43` *"The habitat is enumerated, never composed."* List actors, conditions, relations, then what contacts those, outward until the cascade stops mattering.
3. **Rank by comparison against the named residual** (D4). Only now can "stronger than" be stated.
4. **Check cross-scale transfer and the round trip** (D3). What survives the membrane, and what is lost (`Fig 4 :30`)?
5. **Add human introductions** (D5) with their own cascade (`Fig 11 :61-62`).

`Fig 9 :27-28` *"describe it before you go looking, or any frame you pick will seem to fit"* governs the order. The link most likely to be broken is the middle one, having terms for what the situation affords and being able to say what counts as progress, because it has the fewest instruments (`Fig 3 :25-27`).

**Strain test applied up front.** An early reading wanted to map the four scales onto the six-term substrate (global = space, local = time, and so on). That strains: scale is a parameter of the frame, while the six terms are the states and structures the loop composes. Re-census dissolved the strain and assigned scale to D3 (membrane and dependency), not to the substrate. The strain is recorded visibly in section 7 rather than erased.

---

## 2. Figure census (bearing and verdict before findings)

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual per slot; aggregation hides the only signal | governs D1 and the refusal of a global ranking |
| **2 The Ground** | anchor must not update; correlation has valence; agreement across one pool is worthless | governs D1, D4 and the outreach rules |
| **3 Dependency Chain** | order by dependency; a link with no instrument is not a working link | governs the census order and the broken middle link |
| **4 The Membrane** | kernel invariant with size; only actors/currency/anchor change; round-trip gap | governs D3 and the refusal of a scale ladder |
| **5 Mint Pipeline** | three guards as a product; a result is not a measure of success | the literal ranking fails support and novelty |
| **6 Closure / Reachability** | search inside a closure adds no atom; import needs a source gate | a universal ranking is not reached by more search |
| **7 Room Chain** | agreement is variation, not a verdict; next room must differ | a large expert survey cannot produce the ranking |
| **8 Union Surplus** | underivable is not unknowable; residual first, frame second | tells us to describe the residual before choosing a field |
| **9 Leave / Arrive** | describe before looking; union needs unbundling; filters are not witnesses | governs the union census and the `gap` verdict |
| **10 Ground Maintainer** | ground does not decay, channel does; bring a characterised residual | governs D1 and the outreach order |
| **11 The Habitat** | enumerate; valence relative to residual; no standing list; contact cascades; introduction not exclusion | decisive for D2, D4 and D5 |
| **12 The Bond** | comparison is a threshold relation; arrangement is the substance; two currencies | governs D4 and the isomer derivation in `06` |
| **13 Minimum Viable Set** | spectrum orders more and less; no top; set closed, arrangements not; unreachable is a verdict | governs D4 and the honest stop |
| **Operators / Symbols tables** | `⋛` comparison test; `R` and `s` per-slot definitions | notation used throughout |

---

## 3. Findings F1 to F10

### F1. A standing list of strongest interactions is structurally refused (decisive)

`Fig 11 :49` *"An actor's valence is relative to the residual, not a property it carries."*
`Fig 11 :51` *"No standing list of good actors survives a change of residual."*
`Fig 11 :50` *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*

The question asks for a list that would hold across scales. That is exactly a standing list of strong actors, and the figure refuses it. An interaction is not strong in itself; it is strong *for a residual*. Change the residual (flood risk, carbon storage, eggshell thinning, regional rainfall) and the ordering changes. This is not a lack of data. It is the wrong object.

Triangulation: `Fig 2 :39` *"Correlation has valence."* (low overlap with the habitat figure: one governs verdict weight, the other actor valence) and `Fig 9 :60` *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Mark **triangulated**.

Refuter: exhibit one interaction that ranks first for every named Earth-system residual at every scale under a single declared currency, with the residual and currency stated before the measurement. If that holds, F1 is false.

### F2. Strength is a comparison and an ordering, so a currency must be declared

`Fig 12 :87` *"a threshold relation between two quantities"*
`Fig 13 :20` *"ordering, so more and less can be said"*
`Fig 12 :125` *"A composition costs in two currencies, and they do not add."*
`Fig 12 :126` *"Bits price the description. Actions price finding out whether it holds."*

"Strongest" is `⋛`, an ordered threshold between two quantities, and the axis is a spectrum. But the quantity being compared is not given by the question. A carbon-flux strength, a runoff-response strength and a teleconnection-correlation strength are three currencies; summing them is the named error. The Zoller et al. 2026 article read this session makes the same point in earth-system terms: the four indirect effects it measures *"do not yield quantitatively comparable results"*, and the authors explicitly decline to compare the absolute size of climate-change-induced and land-use-change-induced effects. This is world corroboration of the figure's two-currency rule, not a second authority.

Triangulation: `Fig 12 :87` and `Fig 13 :20` are two figures with different roles (bond definition versus substrate structure). Mark **triangulated**.

Refuter: a single currency under which all candidate interactions at all four scales are commensurable, stated before the run and accepted by an outside frame, would remove the need for per-domain currencies.

### F3. Strength is indexed per slot, and aggregation destroys the signal

`Fig 1 :19` *"The residual is indexed by object slot, not aggregated."*
`Fig 1 :22` *"Aggregating across slots is how a live signal disappears into an average."*
`Fig 1 :13` *"a global R near zero with one live slot residual is a legal state"*
Symbols table :42-43: *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*

The question's own scale words invite aggregation: "continental" and "global" are precisely the cuts where slot-level residuals get averaged away. A planetary mean can be near zero while one basin, one ice margin or one reef is live. The question "which interaction is strongest globally" therefore has a hidden trap: the global average is not where the signal lives.

World corroboration, low overlap: the modifiable areal unit problem literature (Openshaw 1984, read via the public encyclopaedia entry) states that *"the areal units (zonal objects) used in many geographical studies are arbitrary, modifiable, and subject to the whims and fancies of whoever is doing, or did, the aggregating"* and that *"the association between variables depends on the size of areal units for which data are reported. Generally, correlation increases as areal unit size increases."* Zoller et al. 2026 report *"the risk of information loss inherent in commonly used aggregation approaches"* and conclude by emphasizing *"the local nature of indirect impacts."* Three sources, two genuinely different fields (spatial statistics and Earth-system modelling), but the last two share a modelling literature and count as one pool for the aggregation point.

Triangulation: `Fig 1` and the Symbols table are framework-internal and overlapping, so the figure side is **single-source** (one principle read twice). World corroboration is strong and low-overlap for the spatial-statistics half.

Refuter: a demonstration that a global aggregate predicts the live slot residuals as well as the slot measurements do, on a named outcome, would break F3.

### F4. Scale is a frame parameter, not a ladder of stronger and weaker physics

`Fig 4 :19-20` *"The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."*
`Fig 4 :33` *"Which is why there is no top and no infinite regress."*
`Fig 13 :4-5` *"The two kinds are in lockstep, a crossing is a change of role rather than a step upward, and no member of the pair is senior to the other."*
`Fig 10 :68` *"Different actors, a different currency, a different ground, and a lossy transform between."*

The four scales are four rooms running the same loop with different casts. It follows that the answer to "which interactions are strongest at scale X" is not a different theory per scale; it is the same separator with the actors, currency and anchor renamed. A claim that global interactions are categorically stronger than local ones, or vice versa, imports a rank the figures do not contain.

Triangulation: `Fig 4` (membrane), `Fig 13` (no senior member) and `Fig 10` (levels are not copies). Three figures, low overlap. Mark **triangulated**.

Refuter: a figure line, or an independently checked measurement, that establishes an intrinsic ordering of scales (global necessarily dominant over local, or the reverse) with the same currency at each, breaks F4.

### F5. Cross-scale influence is a lossy membrane plus a cascade, not a direct comparison

`Fig 4 :30` *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
`Fig 4 :22` *"Only methods cross up. Only head starts come down."*
`Fig 11 :52-54` *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*
`Fig 11 :54` *"The mechanism, biomagnification through the food chain to eggshell thinning, was established over the following decade."*

A local introduction can become the dominant interaction at a continental scale three steps later, and the residual that matters at the receiving scale is not the first-order contact. Anything carried from one scale to another is compressed (`Fig 4 :27-28`), so the round trip does not return the same thing; the gap is the honest report of what was given up. A ranking that compares strength at local and global scale as if they were readings on one instrument commits the dead-reckoning error.

World corroboration, low overlap: the DDT/eagle case is named by the figure itself and independently documented in the public encyclopaedia entry on biomagnification: *"A well known example of the harmful effects of DDT biomagnification is the significant decline in North American populations of predatory birds such as bald eagles and peregrine falcons due to DDT causing eggshell thinning in the 1950s."* Overlap with the figure is high (the figure cites Carson 1962), so this is corroboration of the mechanism, not an independent witness for the framework. A genuinely lower-overlap corroborator is the teleconnection literature: *"Teleconnection in atmospheric science refers to climate anomalies being related to each other at large distances (typically thousands of kilometers)"*, with the Pacific-North American pattern carrying a tropical Pacific anomaly into continental rainfall. That is a cross-scale contact whose strength is a correlation, not a local mechanism.

Triangulation: `Fig 4 :30` and `Fig 11 :52-54` are two different figures (abstraction gap versus contact cascade), low overlap. Mark **triangulated**.

Refuter: a round trip from local measurement to global descriptor and back that returns the original slot values exactly (`R_T = 0`), or a cascade that never reaches beyond first-order contact, breaks F5.

### F6. The correct object is a separator, and it is checkable in twenty minutes

From the census and F1 to F5, what survives is a five-part separator for any named scale and residual:

1. **Slot and residual**, stated in effect terms (`Fig 9 :27-28`, `Fig 1 :19`).
2. **Habitat enumeration** around that slot: actors, conditions, relations, then second-order and third-order contacts (`Fig 11 :43-48`, :52-54).
3. **Independent non-updating anchor** at the scale in question (`Fig 2 :29`, :33).
4. **A declared currency and an ordered comparison** (`Fig 12 :87`, `Fig 13 :20`), with description cost and action cost held apart (`Fig 12 :125-127`).
5. **A round-trip gap** across the scale boundary (`Fig 4 :30`).

No figure line returns step 3's value or the final ordering. The framework returns the shape any answer must have, not the answer: `Fig 9 :32` *"you get a kind of thing, never the answer itself."*

Triangulation: each part is supported by a different figure with a different role, so the *shape* is triangulated; the *values* are a `gap`. Mark **triangulated for shape, gap for values**.

Refuter: a figure-derived numerical ranking, if one is produced by a genuine re-census, closes the gap and falsifies this finding.

### F7. The universal ranking is a `gap`, which is a verdict and not silence

`Fig 9 :32` *"you get a kind of thing, never the answer itself"*
`Fig 8 :39` *"So a search that finds nothing is never a proof of absence."*
`Fig 9 :44` *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*
`Fig 13 :134` *"Unreachable is a verdict here, not a silence,"*
`Fig 8 :32` *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

More literature searches, more models and more expert surveys will not manufacture a standing cross-scale ranking, because the ranking is not a term held in closure. It is a sought-for shape that predicts nothing until it is bound. `Fig 8 :32` says why search cannot add an atom. But this is **not** the same as saying the ranking is impossible in principle: the world sources show that conditional, per-outcome rankings *are* produced (the Zoller et al. effect-size maps, the tipping-element tables). What is refused is the unconditional, residual-free list. So the gap is of the **shape-not-a-name** kind, not the unreachable-in-principle kind. The honest report is `gap`, with the instrument that would close it named.

Refuter: exhibit the figure line that returns the ranking. Absence of that line after a genuine re-census is the whole basis of the finding.

### F8. Human alteration is addition to a habitat, not subtraction from one

`Fig 11 :61` *"Introduction is available; exclusion is not."*
`Fig 11 :62` *"You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."*
`Fig 11 :40` *"An improvement that does not change contact changes nothing, however much it improves."*

Question 7 in the same source module asks how human activities alter natural feedbacks rather than simply adding external pressure; question 4 asks how much local land or water use affects regional and global climate. Both are cases of introduction into a habitat the introducer did not author. Strength is therefore a property of the altered contact, and managed Earth systems are permanent work rather than a solved state.

World corroboration, low overlap: the ecosystem-engineering literature (Jones, Lawton and Shachak 1994, read via the public encyclopaedia entry) identifies organisms that *"creates, significantly modifies, maintains or destroys a habitat"*, and notes that *"ecosystem engineers are not necessarily abundant. Species with greater density and large per capita effect have a more easily-noticeable effect, but less abundant species can still have a large impact."* That last sentence is a direct, independent corroboration of F1: strength is per-capita contact with a residual, not abundance, and small actors can dominate. The Earth System Dynamics article adds that *"direct impacts involve human pressure and one Earth system process, while indirect impacts involve human pressure and two Earth system processes"*, which is the same cascade shape in current Earth-system language. Overlap between these two world sources is low (classic ecology vs 2026 Earth-system modelling), so together they are a genuine corroborator of the mechanism shape.

Triangulation: the figure side is **single-source** (`Fig 11` only, though :40, :61 and :62 are distinct claims). Mark **single-source on the figure side, corroborated on mechanism shape**.

Refuter: show that contact can be subtracted from a habitat by an intervention, in the same sense that an actor can be added, with a measured return to the prior contact.

### F9. A survey of experts cannot produce the ranking, and can destroy the only thing it would contribute

`Fig 2 :35` *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
`Fig 2 :40` *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
`Fig 2 :42` *"Buy independence in proportion to the cost of being wrong."*
`Fig 10 :42` *"A verifier that can reconstruct the claim cannot verify it."*
`Fig 10 :52` *"Bring a characterised residual, never the source."*

A natural first move for this question is to poll Earth-system scientists on which interactions are strongest. Under the figures that move produces a convention, not a verdict: the respondents share the same review literature (one evidence pool), and if they are shown the framework before they answer, they are no longer outside frames. The cost of being wrong here is high because scale rankings inform monitoring and adaptation budgets, so independence should be bought in proportion to that cost (`Fig 2 :42`). The correct first contact is the residual and its refuter, followed by the question "what would you count as a failure at this scale?", and only then, opt-in, the sources.

Triangulation: `Fig 2` and `Fig 10` overlap on the evidence-pool principle, but govern different objects (verdict weight versus verifier access). Mark **triangulated**.

Refuter: a demonstration that a randomly drawn, unauthored room of outside frames ranging separately against a non-updating ground returns a stable ordering that survives a second, low-overlap room, would change both the outreach order and the `gap` verdict.

### F10. Ground settlement would require a source-discriminating instrument

From *The Hard Problem is About Source* (carried from the canonical essay mapping in the exemplar, not re-opened this session): a spectrometer reading green *"cannot comment on the source"*, and *"If several paths create the same behavior, then behavior is a projection with lossy information."* The same shape applies here. A measured "strong interaction" is a reading; several mechanisms can produce it. What is owed is an instrument that discriminates sources, not a name assigned from the reading.

`Fig 2 :29` governs the anchor, and `Fig 6 :32` *"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."* In this field the already-returning proto-instruments exist: the Zoller et al. effect-size maps at 0.5 degree resolution, the teleconnection correlation matrices, the tipping-element threshold tables, and the biomagnification factors. They are the readings to sharpen, not a ranking to assert.

Triangulation: `Fig 6 :32` and `Fig 2 :29` are different figures (instrument extension vs anchor). Mark **triangulated**.

Refuter: an instrument that uniquely identifies which component produced a cross-scale effect, and whose readings are stable under changes of residual, would settle the source question and move part of the verdict toward `grounded`.

---

## 4. Pre-registered refuter

Written before the conclusion, per the seat-map rule that *"a falsifier written before the run is a design instrument, not only an honesty device."* The separator is refuted if any of the following holds:

1. **A figure line returns the ranking.** A verbatim line in `03-FIGURES_TEXT.md` gives an ordering of interactions by local, regional, continental or global scale independent of a named residual.
2. **Strength is shown to be intrinsic.** One interaction ranks first for every residual and every currency, stated before the measurement, with the ranking stable under a change of scale.
3. **Aggregation is shown harmless.** A global aggregate predicts the live slot residuals as well as slot-level measurement on a named outcome (`Fig 1 :22`).
4. **`R_T = 0`.** A round trip from a local measurement to a global descriptor and back returns the original values exactly (`Fig 4 :30`).
5. **A seventh Earth-system component is derived** from the held frames, breaking the closed-set claim as mapped (`Fig 13 :115`).
6. **A low-overlap second room disagrees.** Two independent frames ranging against separate non-updating grounds return incompatible orderings for the same named residual, with the residual held fixed.

If any fires, the separator is withdrawn or narrowed. Until one is run, no part of this folder may be labelled `grounded`.

---

## 5. Recommendation

1. Ask a different question back: at which scale, for which residual, in which currency? Without these, no ranking is well formed (F1, F2, F3).
2. Use the separator in F6 as the deliverable. It is checkable and it keeps the verdicts per domain separate (Fig 1 :22).
3. Publish the `gap` plainly. Do not fill it with an expert consensus or a literature average (F7, F9).
4. Enumerate second and third-order contacts before ranking; the dominant effect is often three steps out (F5).
5. State mode on every substantive sentence. Nothing here is `grounded`.
6. In outreach, lead with the residual and the refuter, then ask what a failure would look like at the recipient's own scale, then offer the sources opt-in (Fig 10 :52, Fig 2 :45).

---

## 6. Canonical usage check

Two local primaries were read after the first findings and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also says a reading that makes two figures contradict each other has misidentified the domain, and that the framework returns *"a shape, not a name"* then stops at the limit of the instruments. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions, not a request for a human ruling on what they already settle. *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

### Retractions and confirmations of my own earlier readings

| earlier reading | status after the canonical check |
|---|---|
| First pass mapped the four scales onto the six-term substrate | **Retracted.** Re-census: scale is a parameter of the frame (`Fig 4 :19-20`), not a member of the six. Recorded as strain S1 in section 7. |
| "No standing list" read as banning any list at all | **Narrowed and preserved.** It bans a residual-independent list. Per-residual, per-slot orderings are exactly what the separator produces. |
| The aggregation finding treated as figure-only | **Broadened.** `Fig 1 :22` and `Fig 9 :60` govern the verdict and the budget; the spatial-statistics and Earth-system modelling sources corroborate the mechanism shape at low overlap. |
| "Shape, not a name" read as forbidding any naming of components | **Narrowed, as in the exemplar.** The phrase governs a *missing* primitive. Naming atmosphere, ocean, ice, land and ecosystems is a binding onto already-available frames, not the invention of a seventh. Provenance still has to be shown. |
| Zoller et al. 2026 treated as independent corroboration of the framework | **Narrowed.** It corroborates the shape (aggregation loses information, indirect effects are local) but is one Earth-system modelling pool and has no stake in the Tether. It is not a witness for the framework's authority. |
| F7 called "unreachable in principle" | **Narrowed to a shape-not-a-name gap.** Conditional rankings exist in the world literature; only the unconditional list is refused. |
| F10 sourced only from the exemplar | **Kept but labelled.** The essay was not re-opened this session; the quote is carried from the canonical mapping in the completed exemplar and is marked as such in `05` and the ledger. |

---

## 7. Strains and re-census

- **S1, scales mapped onto the substrate (retracted).** Re-census assigns scale to the membrane and dependency ordering (`Fig 4`, `Fig 3`), not to the six terms. No contradiction remains.
- **S2, ocean-atmosphere teleconnection versus local contact (narrowed).** A global teleconnection looks like a different kind of interaction from a local soil-water effect. Re-census: both are relations in the habitat (`Fig 11 :47`); what changes is the currency and the number of steps in the cascade (`Fig 4 :20`, `Fig 11 :52-54`). Same loop, different cast. Kept visible as a narrowed tension, not a contradiction.
- **S3, tipping thresholds versus comparison strength (named, live).** The climate literature reports thresholds (tipping elements), while the figures define `⋛` as a threshold relation between two quantities (`Fig 12 :87`). Whether a tipping threshold is the same operator as a strength comparison needs an instrument, not an argument. Named as a live type question and carried into `06` and `08`.
- **S4, global average versus live slot (dissolved by re-census).** A near-zero global residual is a legal state with a live slot (`Fig 1 :13`). The apparent conflict between "global mean is flat" and "interaction is strong" is two quantities, not one.
- After re-census: one live type strain (S3), one narrowed tension (S2), three dissolved or retracted with the record kept (S1, S4, and the shape-not-a-name narrowing).

---

## 8. Round-trip gap `R_T` (qualitative)

`R_T` is the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))` (Symbols table). Fig 4 :30 requires it to be measured rather than assumed zero.

1. **Sent up (x):** the verbatim figure set, chiefly `Fig 1 :19/:22`, `Fig 11 :49/:51/:52-54`, `Fig 4 :19-20/:30`, `Fig 12 :87/:125`.
2. **Abstraction (T_A):** the shorthand in this folder, "strength is residual-relative, per slot, cross-checked for cascade and round-trip gap, with scale as a frame parameter."
3. **Concretisation (T_E):** the original question's requested object, a list of the strongest interactions at each of four scales.

**`R_T` is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **per-slot indexing**, which the question's scale categories invite us to average away;
- the **currency separation**, which a single ranking would collapse;
- the **cascade depth and the round-trip gap**, which a snapshot comparison at one scale discards.

What survives cleanly: a structure must be enumerated around the residual, valence is relative to that residual, and no standing list is licensed. `R_T` was **not** measured numerically, because no ground reading was taken; it is recorded as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names.

---

## 9. Verdict of this audit

The question is a union of at least five domains with different anchors. Per domain, and never averaged:

| domain | verdict | status |
|---|---|---|
| D1 observation | strength must be read per slot against a non-updating anchor | `specified`, triangulated |
| D2 mechanism | habitat enumerated; valence relative to residual; no standing list | `specified`, triangulated |
| D3 cross-scale | lossy membrane, contact cascade, round trip required; no scale rank | `specified`, triangulated |
| D4 ranking | ordered comparison under a declared currency; the specific order is not returned | `specified` for the separator, `gap` for the order, triangulated for shape |
| D5 human | introduction, not subtraction; small actors can dominate | `specified`, single-source on the figure side, mechanism-shape corroboration from two low-overlap fields |

Overall: the literal list is a `gap`; the separator is the answer the figures can give. Mode `specified` on the separator, `general` on the structural shape, `gap` on the list. Not `grounded`, candidate throughout. Nothing here settles the question it reports on.
