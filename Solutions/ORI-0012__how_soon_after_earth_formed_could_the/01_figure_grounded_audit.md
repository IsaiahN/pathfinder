# Figure-grounded audit: ORI-0012, how soon after Earth formed could the first life have appeared?

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the numerical date. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post." The essay's own limit applies: "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** All `Fig N :line` quotes are taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local extract, opened this session). Framework usage rule from `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop from `FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed with quotes and access dates in `10_source_ledger.csv`; each was opened, and none is treated as primary.

---

## 0. The residual, stated in effect terms

The question asks for an interval, not a point. Let t0 be Earth's formation and t1 the appearance of the first life. The residual R is the interval between them, read as a lower-bound question: what must already be the case before t1 is possible, and what would settle the bound.

- **Arity.** One interval, but it is a compound of several conditions (a cooled crust, liquid water, a persistent habitat, available feedstocks, a self-maintaining evolvable closure, and a preserved signature). It is not one scalar with a single cause.
- **Symmetry.** Time is ordered. t0 precedes t1, and swapping the operands produces a different claim. The bond that governs the interval is `->` sequence, not a symmetric `+`. The Operators table gives the test: "swap them. Does it become a different thing? Yes."
- **Scale.** Planetary (rocks, impacts, oceans) at one end, molecular and cellular at the other. A membrane sits between them (Fig 4 :21: "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."). Reading a molecular event directly off a planetary rock is a cross-scale transform, and it is lossy (Fig 4 :27).

What an answer would look like, bound as an ordinary term before the run (Formula step "Direction"; Fig 5 :65: "make the sought-for shape an ORDINARY TERM"): **a bracketed interval with a dependency order, one non-updating anchor per link, a stated source-discriminating instrument owed for the date, and a written refuter.** Anything that returns a single number without those four parts is not the sought-for shape.

---

## 1. Domain census (done before choosing any figure line)

Describe R by arity, symmetry, scale (done above). One line per domain with actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor (nameable?) | partition or union | order by dependency |
|---|---|---|---|---|---|
| **D1, planetary formation and habitability** | accreting embryos, the Moon-forming impact, later impacts, crust, liquid water, atmosphere | habitability: can chemistry run and persist at a slot? | yes: U-Pb ages in zircons and Sm-Nd ages in metasediments, which do not change because a frame believes a date | union with D2 (conditions overlap, no clean split) | first link: t0 must precede any environment |
| **D2, prebiotic chemistry and the first closure** | molecules, networks, compartments, mineral surfaces, UV, vents, lightning, gradients | composition inside closure(Gamma), then settlement against the ground | yes: laboratory experiments that can be repeated, plus a biosignature that either pays or does not | union with D1 and D3 (a case in more than one condition) | second link: consumes habitability, feeds the first lineage |
| **D3, the biosignature reading and dating channel** | instruments (SIMS, U-Pb, Raman, microscopy), readings (delta-13-C, stromatolite morphology), competing interpretations | reading versus source: does the record distinguish biotic from abiotic? | yes: the rock, which does not decay; the channel (preservation and interpretation) does | sits across D1 and D2 as the contact channel | third link: a reading of t1 is only assessable after D1 and D2 |
| **D4, the definition of "first life" and of "could"** | competing definitions (Darwinian evolution, self-sustaining chemical system), the chemistry-to-biology transition | naming: whether a term is settled by the ground before it is composed over | yes for the question type (ground settlement of a term), no for a single boundary date | partition by question type, union by phenomenon | boundary term, named last; it governs what counts as t1 |

**Partition or union.** This is a union, not a partition. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either." The habitability condition and the chemistry condition overlap in the same locality at the same time, so a single lever that clears one leaves the intersection standing. Verdicts are kept per domain and never averaged into a single percentage or a single date.

**Dependency order (Fig 3).** Earth forms -> surface cools and holds liquid water -> habitat conditions compose -> feedstocks accumulate -> a self-maintaining evolvable closure appears -> a signature is preserved -> an instrument reads it. Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :22: "A step whose input never arrives cannot be diagnosed, only its predecessor can." A claim about t1 read before the habitability link is not a weak reading of t1; it is a reading of nothing (Fig 3 :23).

---

## 2. Figure census (quoted before concluding, checked verbatim against the local extract)

| figure line | bearing on ORI-0012 | verdict |
|---|---|---|
| Fig 1 :19 "The residual is indexed by object slot, not aggregated." | timing must be read per site and per environment, not as one global first date | no ground reading here, structural |
| Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the rock record and the experiment are the anchors; a preferred early date is not | governs the anchor test |
| Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | a list of researchers who agree on an early date cannot corroborate it | governs outreach only |
| Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" | the 3.7 to 4.1 Ga claims draw on one sparse rock and isotope pool | declares the overlap |
| Fig 3 :20 "The chain is ordered by dependency, not by importance." | the interval is a chain, not a single duration | **decisive for the shape** |
| Fig 3 :22 "A step whose input never arrives cannot be diagnosed, only its predecessor can." | a t1 reading below a broken habitability link is not assessable | governs the lower bound |
| Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." | the dating link lacks a source-discriminating instrument for Hadean carbon | names the missing instrument |
| Fig 4 :21 "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction." | planetary to molecular is a crossing, not a direct read | governs scale |
| Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | any condensation of rock reading into a date carries a round-trip gap R_T | governs the honest stop |
| Fig 5 :21 "the gap has real mass somewhere" | support condition: there is a real disagreement about the date, so a search is licensed | SUPPORT passes |
| Fig 5 :41 "Any one of them at zero stops the mint entirely." | no new primitive is minted by the timing question; the guards are checked | no mint |
| Fig 6 :21 "MINT composes inside the closure and can never add an atom." | combining existing biosignatures cannot produce a new date-bearing atom | closure is idempotent |
| Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | a new specimen or a new instrument is the only thing that moves the bound | governs arrival |
| Fig 6 :34 "the search for a proto-instrument is a search for one that is already there." | the carbon isotope signal is already returning a reading; the edge exists to extend from | distinguishes unreached from underivable |
| Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | competing early-life scenarios are rooms; the ground selects between them | governs the union |
| Fig 7 :40 "The room is summoned by the residual rather than composed." | the checker is chosen by the timing residual, not by preference for an early-origin frame | governs outreach |
| Fig 8 :32 "no search, however long, adds an atom" | more microscope hours on the same rocks do not add a Hadean specimen | budget versus verdict |
| Fig 8 :39 "So a search that finds nothing is never a proof of absence." | absence of Hadean rocks is not proof life was absent | gap is not silence |
| Fig 8 :53 "Residual first, frame second." | describe the interval before picking RNA-first or vents-first | governs WATSON order |
| Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit" | naming a setting before describing the residual is apophenia | governs the union |
| Fig 9 :32 "you get a kind of thing, never the answer itself" | the figures return a bracket shape, not a year | gap on the number |
| Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." | habitability, chemistry, and preservation overlap | union verdict |
| Fig 9 :57 "a case in two conditions is not a harder case of either" | a Hadean site in two conditions is a specific compound | per-domain verdicts |
| Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | a 200 to 800 Myr range is a budget filter, never a witness for when life began | keeps filter out of verdict |
| Fig 10 :24 "the ground does not decay, the channel does" | the rock is stable; preservation and interpretation are the decaying channel | governs D3 |
| Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." | send the residual and refuter before the framework | governs outreach |
| Fig 10 :52 "Bring a characterised residual, never the source." | first contact carries the bracket and its refuter | governs outreach |
| Fig 11 :14 "nothing selects; what survives is what the ground kept" (Fig 11 :14-15) | the unmaintained Hadean: no seat, pure contact | governs the mode of arrival |
| Fig 11 :36 "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground." | "life" is the label applied afterwards to a lineage that met its ground; it is not a substrate term | decisive for "first life" |
| Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone" | earliest life is a property of lineage-and-habitat, not of a molecule alone | governs D1 and D2 |
| Fig 11 :43 "The habitat is enumerated, never composed." | list the conditions; do not derive them | governs the census |
| Fig 11 :46 "conditions: light, water, temperature, season, terrain" | the enumerated conditions are the preconditions that set the bound | governs the lower bound |
| Fig 11 :51 "No standing list of good actors survives a change of residual." | no standing list of life-bearing settings survives a changed residual | refuses a universal venue |
| Fig 11 :56 "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept." | prebiotic Earth is the unmaintained mode | governs D2 |
| Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." | once a closure settles, it becomes an atom for evolution; the origin is a level crossing | governs the transition |
| Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | one setting versus another over the same feedstocks is an isomer claim, not a different ingredient list | governs the analogue |
| Fig 13 :74 "Everything else is a composition across the two kinds, never within one." | the closure composes conditions and structures, not a seventh primitive | re-census guard |
| Fig 13 :115 "The set is closed. The arrangements are not." | endless prebiotic pathways do not add a new kind of condition | budget versus reach |
| Fig 13 :118 "infinite effort inside a finite reach" | more search over the same six does not by itself yield a date | gap of the unreachable kind |
| Fig 13 :134 "Unreachable is a verdict here, not a silence" | the exact date is reported as unreached, not omitted | honest stop |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings F1 to F9

### F1: The interval is a dependency chain, and the lower bound is the slowest necessary link (decisive for the shape)

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :22: "A step whose input never arrives cannot be diagnosed, only its predecessor can." Fig 11 :43: "The habitat is enumerated, never composed." Fig 11 :46: "conditions: light, water, temperature, season, terrain."

The earliest possible t1 cannot precede the links it consumes. In world terms, Pearce, Tupper, Pudritz and Higgs (2018, Astrobiology; open arXiv abs page) define a habitability boundary and a biosignature boundary and write: "The time taken for life to appear could, therefore, be within 200 Myr or as long as 800 Myr." That is a dependency-chain bracket, not a single date. Lunine (2006, Phil Trans R Soc B) supplies the first link: "terrestrial surface waters were below the critical point within 100 million years after Earth's formation, and liquid water existed continuously on the surface within a few hundred million years." So the lower bound is set by when the enumerated habitat conditions compose, not by a lucky collision.

Refuter: a measurement showing a self-maintaining, evolvable lineage existed before a cooled crust and liquid water at that site. That would break the chain and the shape claim would be withdrawn.

Status: `specified`, triangulated (Fig 3 dependency order and Fig 11 habitat enumeration are low overlap, one about chain order, one about contact conditions, corroborated by Pearce and Lunine in planetary science).

### F2: "First life" is a label applied afterwards, not a seventh primitive

Fig 11 :36: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground." Fig 11 :56: "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept." Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."

Applying this to the origin: the prebiotic Earth is the unmaintained mode. There is no seat, no maintainer; selection runs and the label "life" is applied afterwards to the lineage that met its ground. So "first life" is not a new substrate member and not a sudden atom import. It is the point on a lineage where a self-maintaining, evolvable closure becomes readable. Ansari (2026, Discover Life) says the transition "was likely a gradual process rather than a discrete event" and that "the absence of a clear boundary between non-living and living matter" complicates a universal definition. Marshall (2025, Aeon) makes the same point for LUCA: "LUCA does not represent the origin of life. It is just the most recent ancestor shared by all modern organisms."

Refuter: a demonstration that "life" must be admitted as a seventh primitive under Fig 13, or a sharp, instrument-independent discontinuity that all frames agree marks t1.

Status: `general` on the shape, `gap` on the exact boundary. Single-source on the figure side for the label claim (Fig 11 only); the world corroborators are one origins-research evidence pool and are not counted as independent witnesses.

### F3: The union of conditions is unbundled before it is searched

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either." Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

The proposed settings (hydrothermal vents, ponds, tidal flats, ice, impact craters) are not rival answers to one question. They are rooms in a union, each a compound of overlapping conditions. Ansari 2026 (open access review) states: "no single setting fully satisfies all requirements for life's emergence" and describes "complementary processes operating across interconnected and evolving environments." That is the union verdict from a world source, and it matches Fig 9, but it does not name a winning setting. Fig 11 :51: "No standing list of good actors survives a change of residual."

Refuter: an instrument that shows one and only one setting satisfies all necessary conditions for the origin, with the other settings demonstrably unable to compose the closure. That would collapse the union to a partition and change the verdict.

Status: `specified`, triangulated (Fig 9 union rule and Fig 7 room selection are different figures; world corroboration is low confidence because the origins reviews share a literature pool).

### F4: The reading cannot comment on its source, so the date stays a shape until a discriminator arrives

Fig 10 :24: "the ground does not decay, the channel does." Fig 9 :27: "describe it before you go looking, or any frame you pick will seem to fit." Fig 9 :32: "you get a kind of thing, never the answer itself."

Framework essay *The Hard Problem is About Source* (opened 2026-11-23) gives the mechanism: "the instrument detects green, and says that it's green. However, the instrument is speaking only about what it measured, it cannot comment on the source." And: "If several paths create the same behavior, then behavior is a projection with lossy information." Carbon isotope fractionation is a reading of that kind. Bell, Boehnke, Harrison and Mao (2015, PNAS, open via PMC) report graphite in a 4.10 Ga zircon with a signature "consistent with a biogenic origin" and immediately list abiotic alternatives: "Abiotic processes that could produce light δ13C during the Hadean include Fischer-Tropsch mechanisms and carbon isotopic fractionation by diffusion, incorporation of meteoritic materials, mid-ocean ridge basalt degassing, and high-temperature disproportionation of siderite." Harding et al. (2025, Communications Earth & Environment) show that even within one 3.7 Ga belt the same average reading can come from "detrital biogenic matter and abiotic fluid-precipitated graphite," distinguished only by host mineral and spread. The essay's conclusion is the one that governs: "It was proven wrong not by argument, but by the arrival of a better instrument."

Refuter: a source-discriminating measurement that assigns a Hadean or Eoarchean carbon reading unambiguously to a biotic or abiotic source, with two low-overlap instruments agreeing. That would close the gap for that specimen.

Status: `specified` that the channel is lossy (triangulated: Fig 10 plus the essay plus two independent isotope papers), `gap` on the date itself.

### F5: Absence of a record is not absence of life, and a search at one budget cannot settle the bound

Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 8 :32: "no search, however long, adds an atom." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

There are no intact Hadean rocks. Lunine (2006): "The difficulties associated with determining the Hadean record are likely to remain regardless of the extent of field investigations, because the conditions postulated to be present during that time preclude significant preservation of the geologic record." Pearce et al. (2018) put the largest uncertainty on the habitability boundary, not on the chemistry: "The lack of consensus on whether there was a late heavy meteorite bombardment that was significant enough to prevent life is the largest uncertainty in estimating the time of the habitability boundary." A 200 to 800 Myr interval is a filter for where to spend a search budget. It is not a witness for when life began (Fig 9 :60).

Refuter: a sealed, complete Hadean record in which the absence of any signature would be decisive. No such record exists, so this refuter is written but cannot currently fire.

Status: `specified`, triangulated (Fig 8 and Fig 6 are different figures with low overlap, both about closure and arrival).

### F6: An instrument is extended from one that already returns something

Fig 6 :34: "the search for a proto-instrument is a search for one that is already there." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

The source-discriminating instrument is not conjured from a description. The carbon isotope edge already exists: SIMS and U-Pb are already returning readings, and Bell et al. note the remedy is scale and multiplicity, not a new principle: "we could start to see patterns in the data to make a much more solid case for Hadean life" (Bell, quoted in Scientific American 2015, opened 2026-11-23, reporting on the same study). So this is `unreached`, not `underivable`: the term is in the closure and was not found at this budget (Fig 8 :40-43). Importing a new primitive against a budget limit would add an atom that was not needed (Fig 6 :51-52).

Refuter: a demonstration that no instrument at any resolution could discriminate biotic from abiotic carbon in a 4.1 Ga zircon. That would move the verdict from unreached to underivable and would require a different instruction (outward import rather than more search).

Status: `specified`, single-source for the instrument rule (Fig 6), with world corroboration from Bell's own stated remedy.

### F7: The early-arrival evidence rules out pure chance, which is a structural, not a numerical, result

Fig 11 :36 and Fig 11 :56 (above) give arrival as contact, not as a lucky atom. Marshall (2025, Aeon), reporting the shift in the field, writes: "if life really formed within 0.1 billion years of the planet's birth, ideas like this are absolutely untenable. There just wasn't time." Fig 6 :21: "MINT composes inside the closure and can never add an atom." The figures do not supply a probability or a rate. They supply the structural reason a chance-only story is the wrong kind of story: composition explores a reach and cannot add the atom that would make the event arbitrarily improbable-then-lucky; the arrival is a contact event whose timing is set by the habitat.

Refuter: a quantitative model showing an origin rate low enough that a sub-100-Myr appearance is a genuine coincidence rather than a contact-driven arrival. That would not flip the figure verdict by itself (a conflict sends the census back to work), but it would force a re-census of whether F7 is a figure claim or a world claim.

Status: `specified` structurally, `gap` on any numerical rate. Single-source on the figure side.

### F8: Isomers over a fixed atom set, and the single-event versus continuum analogue

Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."

Over the fixed set of early-Earth conditions, two proposed settings that use the same feedstocks but arrange them differently (vents with a sustained gradient versus ponds with wet-dry cycling) are isomers: same atoms, different bond, different substance. The difference is invisible in an ingredient list and decisive in whether a closure persists. The deeper analogue is the event-versus-continuum split: a single-event origin and a gradual origin share the same atoms and differ in the bond (sequence versus conjunction). This is worked out in `06_isomers_and_order.md` with its own falsifier.

Refuter: showing that one setting uses an atom the other cannot have (a genuinely different feedstock or a different substrate kind), which would make the relation composition plus import rather than isomerism.

Status: `specified`, single-source for the figure definition, with the fixed-atom condition named as a live strain.

### F9: What survives, with its mode attached

| claim | mode | figure / source |
|---|---|---|
| t0 precedes t1; the interval is a dependency chain whose lower bound is the slowest necessary link | `specified` (triangulated) | Fig 3 :20, :22; Fig 11 :46 |
| "first life" is a label on a lineage that met its ground, not a seventh primitive | `general` shape, `gap` boundary (single-source) | Fig 11 :36, :56 |
| the settings form a union of overlapping conditions, not a partition with one winner | `specified` (triangulated) | Fig 9 :54, :57; Fig 7 :35 |
| a carbon isotope reading cannot comment on its source; the date stays a shape | `specified` (triangulated on the lossy channel) | Fig 10 :24; Hard Problem is About Source; Bell 2015; Harding 2025 |
| absence of Hadean rocks is not absence of life; the bound is unreached, not underivable | `specified` (triangulated) | Fig 8 :39; Fig 6 :34 |
| the exact year | `gap`, unreached at this budget | Fig 9 :32; Fig 13 :134 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: "a falsifier written before the run is a design instrument." The shape claim fails if any of the following fires:

1. **Chain break.** A measurement shows a self-maintaining, evolvable lineage existed at a site before liquid water and a cooled crust were present there. This breaks Fig 3 :20 and :22.
2. **Source discriminator fires.** Two low-overlap instruments assign a Hadean or Eoarchean carbon reading unambiguously to a biotic or abiotic source, fixing t1 for that specimen within error bars. This closes the local `gap`.
3. **Habitat enumeration fails.** A composition of the listed conditions (Fig 11 :46) is shown to be unnecessary for a lineage to meet its ground, or one of the six substrate terms is derived from the other five. This breaks Fig 11 :43 and Fig 13.
4. **Union collapses.** One setting is shown to satisfy all necessary conditions with the others demonstrably unable, converting the union to a partition (Fig 9 :54).
5. **Ground-scale contradiction.** A figure re-census shows that arrival is not dependency-ordered but a symmetric conjunction, so the sequence bond is the wrong bond for the interval.

Until one fires, no part of this may be labelled `grounded`. The verdict remains `candidate`.

---

## 5. Recommendation

1. Lead with the bracket shape and the refuter, not with a favourite date (Fig 10 :52: "Bring a characterised residual, never the source.").
2. Keep the four domains separate. Do not average habitability, chemistry, preservation, and definition into a single "life arose about X million years after formation" claim (Fig 1 :19; Fig 9 :60).
3. Treat the 200 to 800 Myr literature range as a filter for the budget, never as a witness for the verdict (Fig 9 :60).
4. Name the missing instrument, not a missing primitive: more Hadean carbon specimens and a source-discriminating protocol (Fig 6 :34; Fig 3 :27).
5. Offer the public institutional venues in `03_public_contact_points.csv`, one-to-one, and ask what would refute the bracket. A failure is more useful than an endorsement.

---

## 6. Canonical usage check (figures README, read after sections 0 to 5)

The canonical rule at `FRAMEWORK/reference/FIGURES_README_canonical.md` states: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Two consequences govern this audit.

First, the README's re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw." Applied here, the apparent conflict between Fig 11 :56 ("nothing selects") and the standard statement that evolution by natural selection ran on the early Earth is dissolved by re-census: Fig 11 governs the *maintenance seat*, not whether selection runs. With no maintainer, selection runs and the label is applied afterwards (Fig 11 :36). No contradiction, and no retracted figure line.

Second, the README's limit: the framework says "what a missing thing would have to look like (a shape, not a name)" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." Applied here, the figures can return the shape of the interval and the shape of the missing discriminator, but not the year and not the name of the winning setting. That is the declared `gap` in F9.

### Retractions and confirmations (kept visible)

| earlier reading in this audit | status after the canonical check |
|---|---|
| First pass read "how soon" as a request for a single date and was about to report the LUCA estimate (about 4.2 Ga) as the answer. | **Retracted.** The figures return a shape, and LUCA is a node in a family tree, not the origin (Marshall 2025). The date is a `gap`. Kept as evidence of the correction. |
| First pass mapped "life" onto a seventh substrate term. | **Retracted.** Fig 11 :36 makes life a label applied afterwards to a lineage that met its ground, not a primitive. Re-census under Fig 13 confirms no seventh member. |
| F5 initially called the Hadean rock gap "underivable." | **Narrowed.** Fig 6 :34 and Fig 8 :40-43 distinguish underivable-in-principle from unreachable-at-this-budget. The carbon isotope edge already returns a reading, so the verdict is `unreached`. |
| F3 initially treated vents and ponds as rival answers to one question. | **Reframed as a union**, under Fig 9 :54 and :57, with per-domain verdicts. The world reviews corroborate the union but do not name a winner. |
| "shape, not a name" applied to the settings. | **Narrowed and kept visible.** The README phrase governs a *missing* primitive. Naming vents or ponds is a binding onto held conditions, not the invention of a new primitive. What is forbidden is claiming the binding moves the wall (Fig 6 :23). |
| Apparent Fig 11 versus natural-selection strain. | **Not strained.** Re-census assigns Fig 11 to the maintenance seat and selection to the habitat. Matches the README re-census rule. |
| Fig 4 round trip from a rock reading to a date. | **Confirmed.** Fig 4 :30 requires the gap R_T to be measured. It is enumerated qualitatively in `11_audit.md`, not set to zero. |

---

## 7. Strains and limits, named not hidden

- **S1, live limit: figures constrain the shape of the interval, not its length.** The dependency chain gives ordering and prerequisite structure; it returns no number. The numerical bound is ground-settled. This is the honest limit of the derivation, not a defect to paper over.
- **S2, live type question: the bond on the interval is sequence, but the origin itself may be a continuum.** `->` orders t0 before t1; the chemistry-to-biology transition may be gradual (Ansari 2026). The interval is ordered even if the boundary is fuzzy. Named in `06_isomers_and_order.md` with a falsifier.
- **S3, live but narrowed: the fixed-atom condition on the isomer claim.** If a setting uses a genuinely different feedstock, the relation becomes composition plus import, not isomerism (Fig 6 :23).
- **S4, retracted and preserved: the underivable reading in F5.** Narrowed to unreached at this budget after re-census.
- **S5, dissolved: Fig 11 :56 versus evolution by selection.** Different object (maintenance seat versus selection), no strain after re-census.
- **S6, dissolved: the instrument question against Fig 6 :34.** The isotope signal already registers, so the instrument is extended from one that is already there; the missing thing is specimens and a protocol. No strain.

After re-census: three live items (S1, S2, S3), all named, none hidden, none used to flip a verdict.

---

## 8. Ground reading status

No measurement was taken by this derivation. The world sources were read and quoted, but they are secondary corroboration in a single broad evidence pool (early-Earth geoscience and origins research), and the framework essays share the framework author's pool completely. No source conflicts with the figure verdict strongly enough to trigger the conflict rule; where the world literature disagrees with itself about dates, that disagreement is kept as evidence for the union verdict rather than used to flip it (Fig 7 :35). The verdict stands as `candidate` until the pre-registered refuters are run against a ground.
