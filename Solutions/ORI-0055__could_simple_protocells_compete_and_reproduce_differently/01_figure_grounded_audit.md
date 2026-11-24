# Figure-grounded audit: ORI-0055, differential competition and reproduction in simple protocells

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape, `gap` on the historical chemistry. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: a simulated derivation, not a ground reading.** The essay *The Recursive Self-Improvement Trap*, opened 2026-11-23, says LLMs *"can quickly simulate an approximate answer/output"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the origins-of-life question it reports on. See `05_what_shape_means.md` section 6.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Citation form `Fig N :line` refers to the SVG line number printed in that extract. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, all local framework files. World sources are secondary and are recorded in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot `s` (Formula step 1, Symbols table entry `R`). Read onto this question:

- **b** is the state a protocell carries: membrane composition, encapsulated polymers, catalysts, and the history of its lineage.
- **a** is what it does: grows, takes up material, divides, retains or loses contents.
- **Γ(b,a)** is what a chemical model predicts given that state and action, in a habitat with a finite supply of material.
- **o′** is what a measurement returns: which population's membrane area increased, which shrank, which lineage's trait rose in frequency over rounds, and whether a parasite took over.
- **s** is a protocell lineage, ideally one compartment or one clonal population. R is indexed by lineage, never pooled into a single population growth curve.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The question's "and" is a **union of two conditions**, not one quantity. Competition is an ecological relation inside a habitat; differential reproduction is a hereditary relation across a chain of compartments. A lever that produces the first leaves the second standing (Fig 9 :55-57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound"*). Folding them into one "fitness" number would be aggregation across slots.

**Bind the sought-for shape as an ordinary term before the run**, as the Formula's "Direction" requires. The answer would be a separator of three conditions: (i) variation among protocells in a trait, (ii) a non-updating ground that pays for differential persistence, (iii) a heritable carrier that transmits the difference, plus an instrument that tells a failure of one from a failure of another. Until bound, this shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 6 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Candidate anchors here: a FRET membrane-area trace, a division count, a surviving-population assay, a trait-frequency trajectory over evolution rounds. These do not move when a theorist changes their mind. "Fitness" inferred from the same observation is not an anchor, it is a name for the reading (compare the source-discrimination essay quoted in `05` section 4).

---

## 1. Domain census, before choosing any figure line

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is at least two-place at the population scale (self versus competitor for a limiting resource) and three-place at the evolutionary scale (ancestral trait, action, descendant trait) indexed by lineage and ordered by generation. "Compete" is a threshold relation, a comparison bond ⋛: *"a threshold relation between two quantities"* (Fig 12 :87). The phrase reproduce differently is ordered, a sequence bond →: *"A then B; B needs A to have happened"* (Fig 12 :72). The two are not interchangeable, so the compound is not symmetric.
- **Symmetry.** Advantage is not carried by a protocell. *"An actor's valence is relative to the residual, not a property it carries"* (Fig 11 :49). The same vesicle is a competitor or a meal depending on the residual and the resource regime.
- **Scale.** Three scales are in view: a single compartment and its membrane (Fig 4 one-agent panel), a population of compartments in a shared habitat (Fig 4 :5, *"many agents, a shared library, and something that ranks what they produce"*), and a chain of generations (Fig 7 room panels). The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform between them is lossy, so a round-trip gap R_T must be measured rather than assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Compartment chemistry** | amphiphiles, micelles, fatty acid or phospholipid vesicles, encapsulated polymers, small catalysts | membrane material, osmotic pressure, surface area, division events | yes: measured surface-area change, vesicle count, retention of contents (Fig 2 :29) | admitted |
| **D2 Population and competition habitat** | protocell populations, a limiting resource (lipids, light, feedstock), physical conditions (salt, shear, wet/dry) | relative abundance, growth or shrinkage of one population at another's expense, exclusion | yes: competition outcome in a shared environment, which population persists (Fig 2 :29, Fig 11 :47) | admitted |
| **D3 Heredity and evolution chain** | variants, genotype and phenotype carriers, catalysts, parasites, compartments as rooms | heritable variation, selection differential, trait frequency across rounds, `R = h² × S` | yes: multi-round measurement of trait frequency or mutation fixation (Fig 7 :26, :35) | admitted |
| **X1 Protocell "intelligence" or agency as a free-floating property** | the protocell | talent, cleverness | **no** anchor independent of the outcome measured. Fig 11 :36: *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground"* | not a domain yet; excluded |
| **X2 "Life" as a seventh primitive or essence** | the protocell as a whole | vital force | no nameable anchor. Capability is a relation, *"a property of agent-and-habitat, never of the agent alone"* (Fig 11 :39) | absorbed into D3, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that chemistry is simple. X2 is refused for the same reason the six-term set refuses a seventh member (Fig 13 :115): an essence added as a primitive would be a name, not a shape.

### 1.3 Partition or union

D1 and D2 overlap: competition *is* a membrane-level physical process when lipid is limited. D2 and D3 overlap: a selection differential is produced by competition, and a lineage without a differential has no evolution to undergo. The whole question is a **union, not a partition**. One lever clears the region where only competition holds and leaves the intersection (heredity) standing (Fig 9 :54-58). Over a fixed chemical atom set, two protocell "species" that differ only in arrangement stand as isomers (Fig 12 :117; see `06_isomers_and_order.md`).

### 1.4 Order by dependency (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A step whose input never arrives cannot be diagnosed, only its predecessor can."** (Fig 3 :22)

1. Can differential growth and division be perceived and measured at all? (D1, perception and vocabulary)
2. What would count as progress, in the system's own terms? A change in trait frequency, not a change in total biomass. (D3 objective, the link Fig 3 names as the one that usually breaks)
3. Settle D1 before composing D2 over it; settle D2 (competition) before composing D3 (evolution) over it (Fig 12 :104, settled molecule becomes an atom).
4. Describe the residual before choosing a frame (Fig 9 :27-28), otherwise any field, biology or astrobiology, will seem to fit.

---

## 2. Figure census: quote before concluding

I grepped the verbatim extract for each line below and quote it before drawing any finding from it. A line that only fits with a strain governs another quantity and sends the reading back to the census (section 7).

| figure | bearing | verdict status |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | no ground reading here |
| 2 The Ground | anchor must not update; agreement from one pool is worthless | competition outcome and trait frequency are anchors; theory agreement is not |
| 3 Dependency Chain | break between vocabulary and objective; reading below a break is nothing | the objective "differential" must be defined per lineage before experiments are scored |
| 4 The Membrane | kernel fixed, actors/currency/anchor change; methods cross up, head starts down | scales differ; a lab protocol is a head start, not a replay |
| 5 Mint Pipeline | three guards as a product; settlement is not sufficiency | a heritable carrier is a mint that needs support, reach, novelty, then settlement |
| 6 Closure / Reachability | import is the only operator that moves the wall | a genotype is an imported atom; composition of lipids alone adds no atom |
| 7 Room Chain | variation inside, selection between; `R = h² × S` | **the decisive figure for differential reproduction** |
| 8 Union Surplus | closure idempotent; finding nothing is not proof of absence; provenance | union of conditions; provenance separates a grown genotype from an adopted one |
| 9 Leave / Arrive | union versus partition, split before search, describe before looking, filters not witnesses | the question is a union; no figure line names the winning chemistry |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | the anchor is the experiment, not the prestige of the lab |
| 11 The Habitat | selection runs with no maintainer; capability is agent-and-habitat; introduce not subtract; harness caveat | **the decisive figure for "could"** |
| 12 The Bond | catalyst, cycle, functional group, isomer; arrangement is the substance | "differently" is a bond/arrangement difference, not an ingredient difference |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict; shape not a name | historical "which one" is a `gap`, not silence |
| Operators table | ⋛ comparison, → sequence, ¬ refusal | type of each bond in the compound |
| Symbols table | R is aim and error; anchor is whatever settles | no global fitness number is admitted |

---

## 3. Findings F1 to F9

### F1 - "Could" is answered structurally: selection runs without a maintainer (triangulated, `general`)

The question asks about possibility, which in this framework is a claim about the mode of operation of an unmaintained habitat, not about a particular experiment.

> **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."** (Fig 11 :36)
> **"Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept."** (Fig 11 :56)

A prebiotic protocell population has no ground maintainer, no instrument-designing seat, no breeder choosing which vesicle to keep. That is precisely the unmaintained panel. The framework says the loop still runs: variation is generated, the ground settles which variants persist, and there is no additional agent required. So "could simple protocells compete and reproduce differently" is not answered by importing an intelligent selector. It is answered by showing that the two conditions in the residual are present in the habitat.

This is `general` on the structure, not `grounded`. Fig 11 :39 adds *"capability is a property of agent-and-habitat, never of the agent alone"*, and Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* A protocell's advantage is a contact relation, not an intrinsic grade.

Triangulated across Fig 11 and the *Recursive Self-Improvement Trap* essay's line *"Natural selection is what the loop looks like when there is no one maintaining the ground"* (different frame, framework author, so high overlap; see `09` WORLD for the honest weight).

### F2 - Competition is a habitat relation with residual-relative valence (triangulated, `specified`)

> **"relations: pollination, predation, competition, dependency"** (Fig 11 :47)
> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)

Competition is listed by the figure as a habitat relation, not as a property of an organism. A fatty-acid vesicle with a phospholipid fraction is a benefactor to itself and a resource donor (a malfactor) to a neighbour, depending on which lineage's residual is tracked. Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* The protocells are the rooms; differential persistence is the ground's vote.

World corroboration (secondary, actually read): Chen, Roberts and Szostak 2004 demonstrated swollen vesicles growing at the expense of relaxed ones; Katla, Lin and Pérez-Mercader 2023 reported two biochemistry-free protocell populations differing only in a reproduction advantage and competing until one died out; Shirt-Ediss et al. 2014 modelled lipid "stealing" driven by membrane asymmetry; Armstrong et al. 2018 showed in silico that a finite environment induces selection. These are one broad evidence pool in origin-of-life chemistry, so they count as one witness for the mechanism, not four. Low-overlap corroboration for the valence claim comes from human cognition and animal behaviour only if separately sourced; none is claimed here beyond the habitat figure itself. Status: `specified` on the mechanism, triangulated (Fig 11 plus Fig 7 plus the experiments, with the overlap declared).

### F3 - Reproduction "differently" requires two positive factors, not one (single-source on the figure side for the shape, `specified`)

> **"progress per handoff: R = h² × S"** (Fig 7 :26)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"→ variation inside, selection between"** (Fig 7 :33)

This is the figure that governs the word "differently" as a multi-generation claim. `S` is the selection differential supplied by competition (F2). `h²` is heritability, the fraction of the trait difference carried into descendants. If `S = 0`, all lineages persist equally and there is no competition effect. If `h² = 0`, the winner of one round does not seed the next, so the chain runs in place and no accumulation occurs. A product, not a sum: one factor at zero forces inertness, which is the same product rule the mint guard uses (`THE_FORMULA.md` step 3).

World corroboration is unusually sharp because a paper states its own zero factor. Adamala and Szostak 2013: *"Since the catalyst we used is not heritable, our system cannot yet evolve."* The experiment demonstrates competitive growth but explicitly withholds the evolution claim, exactly the `h² = 0` branch. Joyce and Szostak 2018: *"Replication of both the protocell and its encapsulated genetic material would have enabled natural selection to operate based on the differential fitness of competing cellular entities."* Abil et al. 2024 demonstrated in-liposome DNA evolution with a genotype-phenotype link and reported that in bulk (no compartments) molecular parasites outcompeted the full-length replicator, which is a direct demonstration of the compartment's role in keeping `h²` and the link intact.

Status: figure shape triangulated between Fig 7 :26 and the Formula's product guard; the empirical identification of `h²` in any given protocell is `specified`, ungrounded for the prebiotic case. Single-source on the figure side (only Fig 7 returns the product), so not upgraded to triangulated on the figure side alone.

### F4 - "Different" is a bond/arrangement difference, not an ingredient difference (triangulated, `specified`)

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"The arrangement is the substance."** (Fig 12 :94)

Two protocell populations made of the same amphiphiles can differ in behaviour because of how the material is arranged: a vesicle with a phospholipid fraction grows at the expense of one without; a vesicle with an encapsulated catalyst grows faster than one with a less efficient catalyst (Adamala and Szostak 2013); two polymer vesicle "species" differing only in light sensitivity show competitive exclusion (Katla et al. 2023). By Fig 12 :117, *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* they are isomers over a shared atom set. See `06_isomers_and_order.md` for the full derivation, including catalysts (Fig 12 :119), cycles (Fig 12 :121) and functional groups (Fig 12 :123).

This matters for the question because it removes a common objection: "they are made of the same stuff, so how could they reproduce differently?" The figure's answer is that the ingredient list was never the whole record. Status `specified`, triangulated (Fig 12 plus Fig 13's convergence line plus the chemistry).

### F5 - Per-slot indexing is mandatory; a population curve hides the result (single-source, `specified`)

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert one."** (Fig 1 :20)

An experiment that reports only total vesicle biomass can show growth while one lineage is being excluded and another is winning. The signal "which lineage reproduces differently" lives in the per-lineage trace. Armstrong et al. 2018 report that appreciable compositional variability is generated from a single starting composition by stochastic division, which is a slot-level effect that a bulk average would erase. Abil et al. 2024 found the full-length replicator persisted in liposomes but was outcompeted by shorter parasites in bulk, a result that only appears when the molecular species are tracked separately. Status `specified`, single-source on the figure side for the indexing rule (Fig 1), corroborated by the practice of the cited experiments.

### F6 - A heritable carrier is an import with provenance, not a composition of lipids (triangulated, `specified`)

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."** (Fig 8 :32)

If the library contains only amphiphiles, micelles and vesicles, endless composition of those atoms will not manufacture a templating polymer. The genotype, when it appears, is an imported atom. It needs a source gate (provenance) and a shadow test (it explains a gap), and import from a live peer is debited against that peer's independence (Fig 6 :24). Joyce and Szostak 2018 review the RNA-world frame that supplies such a polymer; the PNAS 2023 coevolution paper reports the union condition explicitly, *"All known cells and organisms comprise a union between replicators and reproducers."* The framework's own import rule forbids simply declaring the genotype a product of vesicle chemistry. Status `specified`, triangulated (Fig 6 plus Fig 8 plus the provenance practice of the cited reviews).

**Strain handled here, not hidden:** a first pass read Fig 6 as claiming that competitive interaction can generate a new heritable atom. Re-census: Fig 6 governs what composition can add; the RNA frame is a different closure, so the polymer enters by import. That is the re-census rule of the figures README (*"a reading that makes one contradict another has misidentified its domain"*), not a softening.

### F7 - The historical "which one" is a `gap`, and a lab flask is a substituted habitat (`gap`, unreachable at this budget)

> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** (Fig 11 :70)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

Every experiment cited in F2 to F6 is performed in an artificial, prepared, substituted habitat: a defined buffer, a chosen lipid mixture, an illuminated reactor. Under Fig 11 :66, *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* Those experiments prove that the wiring works, not that a particular prebiotic habitat ran it. No figure line names the chemistry, the lipid mixture or the genotype that won on early Earth, and Fig 9 :32 says the framework returns a kind of thing, never the answer itself. This is reported as `gap`, of the unreachable-at-this-budget kind (no discriminator instrument for prebiotic heredity is available), not underivable in principle, and not as silence.

### F8 - Selection with no selector is not a contradiction; re-census dissolves it (structural, `general`)

A first pass found a strain: Fig 11 :56 says *"nothing selects"*, while Fig 7 :35 says *"Selection between rooms is where the ground votes."* Re-census with the figure README's rule:

- Fig 11 :56 governs **who holds the selector seat**. In an unmaintained habitat there is no maintainer and no live frame in the seat. "Nothing selects" means no intentional selector, no gardener, no breeder.
- Fig 7 :35 governs **how the chain moves when a ground exists**. Rooms vary; the ground settles which room persists. The ground is not a frame and does not need a seat (Symbols table: the anchor *"is not a frame and has no vantage to update from"*).

Different objects, same loop. Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."* After re-census: no strain. This correction to my own first reading is kept visible here and in `11_audit.md`.

### F9 - Filters are not witnesses; the magnitudes are not verdicts (structural, `general`)

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Numbers from the literature (growth-rate constants, fold-changes, number of evolution rounds) decide which experiment to run and how much budget to spend. They do not decide whether differential reproduction occurred. A 10-fold enrichment in a mock selection (Abil et al. 2024) is a bench result in a substituted habitat, not a verdict about abiogenesis. Similarly, an experiment that fails to find a mechanism is not proof of absence (Fig 8 :39). Verdicts come from the three conditions and their anchors, kept separate.

---

## 4. Verdicts per domain, never averaged

| domain | verdict | status | governing line |
|---|---|---|---|
| D1 Compartment chemistry: do simple compartments grow and divide differentially? | **Yes, `specified`**. Growth, competitive uptake and division by physical chemistry are observed. | triangulated (Fig 11 :47, :49 plus chemistry experiments) | Fig 11 :49, Fig 12 :119, :121 |
| D2 Competition habitat: can one protocell population persist at another's expense? | **Yes, `specified`**, where a resource is limiting. Competitive exclusion and lipid transfer are real. Valence is residual-relative. | triangulated (Fig 7 :35, Fig 11 :47 plus experiments) | Fig 7 :35, Fig 11 :47 |
| D3 Heredity chain: can the difference be reproduced across generations? | **Conditional, `specified`**. Yes iff `h² > 0` and `S > 0` and a genotype-phenotype link keeps parasites from taking over. Competition alone is pre-Darwinian. | single-source for the figure shape (Fig 7 :26), with world corroboration | Fig 7 :26, :33, :37 |
| Historical "which protocell did it on early Earth?" | **`gap`**, unreachable at this budget. A discriminator instrument is owed. | gap (Fig 9 :32, Fig 13 :134, Fig 8 :39) | Fig 11 :70, Fig 13 :134 |

No average is taken across these rows. "Yes" in D1 and D2 plus "conditional" in D3 plus "gap" in the historical question is the honest compound answer.

---

## 5. Recommendation for anyone checking this

1. Check the union before the yes/no. Ask which of the three conditions a cited experiment actually settles (Fig 9 :54-58).
2. Demand per-lineage traces, not population averages (Fig 1 :19, :22).
3. Require an explicit heritability measurement before the word "Darwinian" is used (Fig 7 :26, :37; Adamala and Szostak's own limit).
4. Treat every flask as a substituted habitat and keep the wiring/capability distinction visible (Fig 11 :66, :70).
5. Send the generator, the separator and the refuter, not a recording of a lab result (Fig 4 :22, :25).

---

## 6. Pre-registered refuter, written before the conclusion

A falsifier written before the run is a design instrument. The shape claim is refuted or narrowed if any of the following holds:

1. **Selection factor test.** A protocell population with a heritable advantage, a fixed environment and a limiting resource shows no change in trait frequency across generations, with the measurement resolving individual lineages. This breaks `R = h² × S` (Fig 7 :26) and the selection-between claim (Fig 7 :35).
2. **Ground test.** Two chemically identical protocell populations under identical conditions drift without any measurement that discriminates which persists, so the ground does not settle differential persistence. This breaks Fig 11 :56 and Fig 11 :36.
3. **Closure test.** A new heritable atom is derived purely by composition inside a chemical closure that did not contain it, with provenance showing no import. This breaks Fig 6 :21 and Fig 8 :32.
4. **Harness transfer test.** A result from a substituted laboratory habitat is demonstrated to transfer unchanged to a specific prebiotic habitat, or the historical claim is directly measured. This would retire the `gap` in F7 rather than break the figure (Fig 11 :70).
5. **Aggregation test.** A population-average growth curve fully predicts which lineage wins and which trait fixes, with no per-slot information added. This breaks Fig 1 :19, :22.
6. **Union test.** A single lever is shown to clear both the competition and the heredity condition at once, so the question is a partition rather than a union. This breaks Fig 9 :54-58.

Until one of these is run, no part of this may be labelled `grounded`.

---

## 7. Strains, re-census and retraction log

| item | earlier reading | status after re-census / canonical check |
|---|---|---|
| S1, "nothing selects" vs "selection between" | apparent contradiction between Fig 11 :56 and Fig 7 :35 | **Dissolved.** Different objects: who holds the selector seat versus how the chain moves. Kept visible as F8. |
| S2, import versus composition | first pass let competition generate a heritable atom | **Retracted and preserved.** Fig 6 :21 governs composition, the RNA frame supplies the atom by import with provenance. Kept visible as F6. |
| S3, six-term substrate mapped onto lipid species | first pass tried to cast amphiphiles as members of the six-term set | **Retracted.** The invariant across scales is the loop and cross-kind composition, not a list of physical primitives assigned to molecules (Fig 4 :20). Kept visible in `05` section 5. |
| S4, "fitness" as a property of a protocell | ordinary reading of the literature | **Re-grounded.** Valence is relative to the residual (Fig 11 :49); fitness is a contact relation, not a carried grade. |
| S5, two Katla/Pérez-Mercader papers | counted as two witnesses | **Overlap recorded.** Same lab, 2023 and 2025, one evidence pool. |
| F1 scope | initially phrased as "the answer is yes" | **Narrowed.** It is `general` on the structure only; the per-domain verdicts are separate and the historical question is a `gap`. |
| F3 status | initially called triangulated | **Corrected to single-source on the figure side.** Only Fig 7 returns the product `h² × S`; world sources are corroboration, not a second figure. |
| Canonical usage check | figures README and WATSON 60 read after sections 0 to 5 | **Consistent.** The README's rule *"a reading that makes one contradict another has misidentified its domain"* governs S1 to S3. The README's limit, *"a shape, not a name"*, governs F7. |

After re-census: no hidden strains. One live design constraint remains (F7, the harness caveat), one live evidential limit remains (F3, `h²` is measured, not assumed), and one declared gap remains (the historical chemistry).

---

## 8. Canonical usage check

Two local framework files were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo... the quotes are the authority, not this summary."* Also *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit that the framework says *"what a missing thing would have to look like (a shape, not a name)"* then stops where instruments stop.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; design questions are settled by derivation, not escalation to authority.

Neither source changes the verdicts. Both confirm the re-census discipline used in section 7 and the `gap` in F7.

---

## 9. What survives

The shape survives: differential competition is the normal operation of an unmaintained habitat (Fig 11 :36, :56); competition is a habitat relation with residual-relative valence (Fig 11 :47, :49); and a multi-generation difference requires two positive factors, variation and selection, kept together by a heritable carrier and a compartment (Fig 7 :26, :33, Fig 9 :32). The specific claim "simple protocells can and did undergo sustained Darwinian evolution on early Earth" does not survive as a verdict: it is a conditional `specified` mechanism claim plus a `gap` for the history. The framework returns a shape and a refuter, then stops.
