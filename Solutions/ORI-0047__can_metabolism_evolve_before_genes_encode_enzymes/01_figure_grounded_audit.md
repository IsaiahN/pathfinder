# Figure-grounded audit: can metabolism evolve before genes encode enzymes?

**Mode of this document: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on two named items. Not `grounded`.** Per THE_FORMULA: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (essay, opened 2026-11-23) says LLM output is a simulated approximate answer and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. **It cannot settle the question it reports on.** No reactor was run and no phylogenetic measurement was taken.

**Sources.** Local framework files: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text), `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources actually opened 2026-11-23 and listed in `10_source_ledger.csv`. All `Fig N :line` citations are from the verbatim extract, never from a summary.

---

## 0. The residual in effect terms

The question is "Can metabolism evolve before genes encode enzymes?" Stated as an effect, with the ordinary terms bound so they can be checked later (THE_FORMULA "Direction"):

> **R:** the gap between (a) a self-maintaining chemical reaction network that persists, grows and is differentially retained under a geochemical gradient, and (b) a lineage that accumulates adaptations across generations with heritable variation. The word "before" is an ordering supplied by the question, not a result derived by the figures.

- **Option A:** a reaction network, or a population of compartments containing one, is itself a unit of selection with heritable variation. Adaptations accumulate in the network before any template gene. Ground consequence: a laboratory chemical system should show a response to selection that does not decay back to its background dynamics.
- **Option B:** the network can persist and change chemically, but cumulative evolution needs a carrier with transmission fidelity. A hereditary polymer is then imported into a habitat the network prepared. Ground consequence: selection on compositional assemblies should produce change or nonevolutionary adaptation, not open-ended accumulation, until a template replicator is present.

**Arity / symmetry / scale of R.**

- **Arity:** three conditions, not one. Self-maintenance, heritable cumulative change, and the encoding handoff are separately satisfiable. Fig 9 :55 - "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 - "a case in two conditions is not a harder case of either".
- **Symmetry:** "before" is ordered, not symmetric. It is a `→` relation (sequence) given by the question. The figures cannot confirm a historical order from inside a frame; that needs a ground (Fig 2 :29). This is recorded as gap G3, not smuggled in as a conclusion.
- **Scale:** molecular network → compartment → lineage. Three strata with a lossy transform between (Fig 10 :68 - "Different actors, a different currency, a different ground, and a lossy transform between."). A verdict at one scale is not a verdict at the next.

**What an answer would look like, written down before the run:** a per-domain separator, a shape for the missing hereditary carrier, and a refuter per domain. This paragraph is that binding.

---

## 1. Domain census (done before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

### D1. Chemical reaction network (protometabolism proper)
- **Actors:** molecule species, reactions, catalysts (Fe/Ni sulfides, metal ions, cofactors, autocatalytic cores), food set, compartments or pores.
- **Currency:** matter and free-energy flux; catalytic closure; persistence of non-food mass.
- **Anchor:** a reactor measurement. A reaction either proceeds under stated conditions or it does not. Nameable, non-updating ground (Fig 2 :29 - "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."). **This is a domain.**

### D2. Heredity and the evolving lineage (the "evolve" part)
- **Actors:** compartments/protocells, cores (genotype analogue), periphery (phenotype analogue), propagules, division events.
- **Currency:** transmission fidelity across a generation; differential growth and division rates; response to selection.
- **Anchor:** an experimental-evolution or artificial-selection readout. A population either tracks a target above its background dynamics or it does not. Nameable ground (Fig 2 :29). **This is a domain.**

### D3. The encoding handoff (genes encode enzymes)
- **Actors:** template polymers (genes), translated catalysts (enzymes), genotype-to-phenotype map, nucleotide-containing cofactors.
- **Currency:** sequence-encoded heritable information; the arrival of a new kind of atom, a hereditary polymer.
- **Anchor:** nonenzymatic synthesis experiments, ribozyme evolution, reconstructions of ancestral metabolism. Nameable ground for the chemistry, but **the specific historical event is a gap** (G1 and G3). The domain is real; its particular actor is not held.

### Partition or union
Union, not partition (Fig 9 :54 - "And when the split lands on a union rather than a partition, unbundle before you search again."). The three conditions overlap: a catalyst is both a D1 actor and a D2 inherited head start; a cofactor is both a D1 catalyst and, if nucleotide-derived, a D3 precursor. A single lever clears the region where only one condition holds and leaves the intersections standing (Fig 9 :56).

### Dependency order (Fig 3)
D1 → D2 → D3. Each link consumes what the one above produces (Fig 3 :20 - "The chain is ordered by dependency, not by importance."). Establish a self-maintaining network with a gradient, then ask whether heritable variation exists in compartments, then ask what would have to be imported to encode catalysts. Effort spent on D3 before D2 is effort above the break (Fig 3 :19 - "Optimising a link that already works cannot rescue one that does not.").

The chain's middle link here is heredity. Fig 3 :27 - "A link with no instrument is not a link that works. It is a link nobody has looked at." The heredity link in pre-genetic chemistry is exactly the one with the fewest instruments, which is why the world literature disputes it (Section 4).

### Strain test applied during the census
The word "closure" is used in two unrelated senses. Origin-of-life work says a network is *catalytically closed* when it produces its own catalysts (RAF sets, autocatalytic cores). The figures say `closure(Γ)` is the compositional reach of a library (Symbols table). I do **not** infer that the first is the second. Re-census: Fig 8 :32 governs compositional closure of a held vocabulary; catalytic closure governs who makes whose catalyst. Different quantities, same word. Recorded as strain S1 and resolved in Section 7, not smoothed over.

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing on R | verdict it governs |
|---|---|---|
| 1 The Agent | residual per slot, ground is the only metric | per-lineage verdicts, never a pooled network average |
| 2 The Ground | anchor does not update; one evidence pool is one witness | the reactor and the selection assay are the anchors; agreement among reviews is not |
| 3 Dependency Chain | ordered links, unmeasured middle link | D1 to D2 to D3 order; heredity is the unmeasured link |
| 4 The Membrane | methods cross up, head starts come down | what passes a generation boundary is a method, not a recording |
| 5 Mint Pipeline | three guards as a product | the encoding polymer is a mint only if support, reach and novelty pass |
| 6 Closure / Reachability | import is the only wall-moving operator | D3 is an import of a new atom, not a rearrangement |
| 7 Room Chain | variation inside, selection between; two factors per handoff | D2 needs fidelity and ground pressure together |
| 8 Union Surplus | closure idempotent; no search adds an atom | D1 cannot compose D3 from its own metabolites |
| 9 Leave / Arrive | union, unbundle, describe before looking, shape not name | the union reading; the carrier is a shape |
| 10 Ground Maintainer | different actors and ground per level; ground does not decay | avoids cross-scale verdict leaks |
| 11 The Habitat | selection runs with no maintainer; capability is agent-and-habitat | D1 needs no designer and no genes |
| 12 The Bond | catalyst, cycle, settled molecule becomes atom | catalytic parts and loops; the recursion of heredity |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | D3 gap and shape-not-a-name limit |
| Operators table | negation refuses a term; a vocabulary without it only accumulates | the pre-registered refuter is a refusal, not a softer reading |
| Symbols table | R is per slot, anchor is not in the library | binds the census vocabulary |

---

## 3. Findings

### F1 - Selection does not wait for genes (governs D1)

Fig 11 :36 - "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."

Fig 12 :119 - "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

Fig 12 :121 - "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Fig 13 :76 - "Energy and a gradient compose a flow."

A reaction network has the three structural ingredients the figures name: a catalyst that survives its own use, a loop that can close, and a gradient that can be spent to make a flow. Nothing in these lines requires a gene, an enzyme encoded by a gene, or a maintainer. Fig 11 :36 says selection runs where nothing maintains anything; the word "intelligence" or "design" is applied afterwards and does no work. This is the strongest figure-grounded reason to answer the narrow version of the question yes.

**Mode:** `specified`. **Status:** `triangulated` across Fig 11 (no maintainer needed), Fig 12 (catalyst and cycle), and Fig 13 (gradient and flow), three lines with low conceptual overlap. **Refuter:** a self-maintaining network demonstrated with no differential retention among variants would break the selection half of this finding; a network whose loop cannot close by construction would break the cycle half.

**World corroboration (secondary):** Xavier et al. 2020 identify reflexively autocatalytic food-generated networks in ancient autotrophic metabolism and state that autocatalytic chemical networks preceded proteins and RNA in evolution. Knowable Magazine 2025 reports Preiner, Martin and Moran reproducing core metabolic reactions with metals instead of 127 enzymes, and quotes Martin: *"These metals replace 127 enzymes and give us five products which are exactly the products of the biological pathway."* These are different evidence pools (RAF theory and reactor chemistry) and agree on the figure-derived shape.

### F2 - But "evolution" is a two-factor quantity, and the heredity factor is unforgiving (governs D2)

Fig 7 :37 - "Progress per handoff has two factors. Zero either and the chain runs in place:"

Fig 7 :38 - "the bracket's fidelity across the handoff"

Fig 7 :39 - "the ground's pressure on the room"

Fig 7 :35 - "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

This is the pivot of the whole audit. The figures do not say "selection alone is evolution." They say progress per handoff is a product of transmission fidelity and ground pressure. Set either to zero and the chain runs in place: motion without progress. F1 establishes ground pressure on chemical networks. F2 asks whether a pre-genetic network has a bracket with fidelity across the handoff. A compartment that divides and loses its autocatalytic core by segregation has low fidelity. A network without compartments has no handoff at all.

Fig 3 :15 - "name what worked, verify it, and carry it to the next problem"

Fig 3 :27 - "A link with no instrument is not a link that works. It is a link nobody has looked at."

Heredity is the "learn and carry" link of the dependency chain, and in pre-genetic chemistry it is the link with the fewest instruments. That is exactly why the world literature disagrees about it (Section 4), and why this finding is recorded as `specified`, not settled.

Fig 4 :22 - "Only methods cross up. Only head starts come down."

What crosses a generation boundary is a method or a head start: a catalyst, a retained core, a reused membrane. It is not a recording of one success. A compartment that passes on catalysts but not the organization that regenerates them has sent a recording, and the next lineage pays again (Fig 12 :107-110, cited in `06_isomers_and_order.md`).

Fig 1 :19 - "The residual is indexed by object slot, not aggregated."

Fig 1 :22 - "Aggregating across slots is how a live signal disappears into an average."

The response to selection is per compartment or per core, never a property of the pooled network. A claim of the form "metabolism as a whole evolved" aggregates away the only signal that could show where selection acted.

**Mode:** `specified`. **Status:** `triangulated` across Fig 7 (two-factor product), Fig 3 (unmeasured middle link), Fig 4 (method vs recording), and Fig 1 (per-slot indexing). **Refuter:** a compartmentalized chemical network showing a heritable response to selection whose residual trends down across generations, under an assay that does not update on the network's own report, would fire this refuter and demonstrate metabolism-first Darwinian evolution. This is a live experimental target, not a rhetorical one.

**World corroboration (secondary, and genuinely in tension):** Vasas et al. 2012 show that autocatalytic sets by themselves do not evolve, but that compartments containing multiple viable cores with rare core acquisition and loss at division permit *"macromutation, limited heredity and selectability"*, which they call *"a poor man's natural selection"* before genetic templates. Vasas et al. 2010 show the harder negative: for compositional genomes (GARD model), *"replication of compositional information is so inaccurate that fitter compositional genomes cannot be maintained by selection and, therefore, the system lacks evolvability"*, while adding that *"ancient metabolic systems could have provided a stable habitat within which polymer replicators later evolved."* Tessera 2018 reviews four metabolism-first scenarios and concludes that the worst issues concern heredity and chirality, stating that *"without hereditary replicators, no Darwinian evolution is possible."* These sources are not unanimous, and the disagreement is kept as evidence for the union verdict rather than flattened into a yes or no. Overlap: the two Vasas papers share authors and an evidence pool and count as one witness for the limited-heredity claim; Tessera is a separate reviewer of the same small field and is low overlap only at the level of framing.

### F3 - The encoding handoff is an import, not a composition (governs D3)

Fig 6 :21 - "MINT composes inside the closure and can never add an atom."

Fig 6 :22 - "IMPORT adds an atom, and the added atom is what expands the closure."

Fig 6 :14 - "the only operator that moves the wall"

Fig 8 :32 - "no search, however long, adds an atom"

Fig 13 :115 - "The set is closed. The arrangements are not. That gap is why import exists."

A pre-genetic metabolism holds a set of molecule kinds: metabolites, metal cofactors, coenzymes, perhaps short peptides. Arranging and re-arranging them explores the arrangements but cannot add a new kind of atom. A hereditary template polymer is a new kind of atom relative to that set: it stores arbitrary sequence information at roughly equal stability levels and can be copied from a template. Its appearance is therefore the import that moves the wall (Fig 6 :14, :22), not a mint inside the metabolite closure (Fig 6 :21). This is a shape claim about what must arrive, not a chemical claim about which molecule did.

Fig 5 :20-25 names the three guards a mint must pass: something to explain, buildability from held atoms, and novelty relative to held atoms. The template polymer fails the second guard for a metabolite-only library. That is why it must be imported. If it is imported from a live peer frame, Fig 6 :24 debits that frame's independence and a wrong atom costs more than starting from primitives.

**Mode:** `general` on the shape, `gap` on the identity. **Status:** `triangulated` across Fig 6 (only import moves the wall), Fig 8 (closure idempotent), Fig 13 (set closed / arrangements not) and Fig 5 (three guards as a product). **Refuter:** a demonstration that a hereditary polymer is generated purely by composing the molecule kinds already present in a pre-genetic network, with no new kind of atom introduced, would fire this refuter and collapse D3 into D1.

**World corroboration (secondary):** Vasas et al. 2010 state that *"We do not know how the transition to digitally encoded information has happened in the originally inanimate world"* and that template-free systems could only have had the limited role of accumulating material and increasing patchiness. Knowable Magazine 2025 reports that cofactors such as NAD+ and SAM may have preceded and been incorporated into RNA and metabolism, with Preiner speculating that nucleotide-containing cofactors were *"over-produced"* and then *"got different tasks - parts of them got into RNA, and others went into metabolism."* That is a concrete candidate for the import, and it is reported as speculation, which is how this audit treats it: a shape with a named candidate that remains ungrounded.

### F4 - The framework returns a shape for the carrier, not a name (governs G1)

Fig 9 :32 - "you get a kind of thing, never the answer itself"

Fig 9 :27-28 - "describe it before you go looking, or any frame you pick will seem to fit"

Fig 13 :134 - "Unreachable is a verdict here, not a silence"

Fig 13 :135 - "It cannot say which primitive is missing, because naming it would mean already holding it."

The framework can say that a hereditary carrier with sequence-like storage and templated copying must be imported before cumulative evolution can proceed. It cannot say RNA, PNA, a coenzyme-lipid composome, or any other specific molecule. Naming one would mean already holding it. The world literature offers several candidates (RNA world, pre-RNA polymers, the GARD composome, the coenzyme world of Sharov 2009); their multiplicity is itself the evidence that the figure stops at a shape.

**Mode:** `general`. **Status:** `triangulated` across Fig 9 and Fig 13 plus the canonical figures README (*"a shape, not a name"*, read locally and in §6). **Refuter:** a source-discriminating experiment that identifies the first hereditary carrier in a reconstructed pre-genetic lineage would replace the shape with a name and close G1.

### F5 - The "before" ordering is a question parameter, not a derived result (governs G3)

Fig 12 :30 - "A then B; B needs A to have happened"

The `→` bond is ordered. The question hands us "metabolism before genes," so the ordering is legitimate as a parameter of R. But the figures have no instrument for historical priority: a frame cannot certify the order of events from inside its own closure (Fig 8 :34 on the metaframe, Fig 9 :44 on unsealed rooms). The only ground for "before" is geochemical and phylogenetic reconstruction, which is a world source, not a figure derivation.

**Mode:** `general` on the limitation. **Status:** `single-source` for the figure statement about ordered bonds; the historical claim is a declared `gap`. **Refuter:** a phylogenetic or experimental result showing template polymers in the same lineage before any self-sustaining network would reverse the ordering in the question.

### F6 - Habitat is not ground, and the two must not be merged (cross-domain guard)

Fig 11 :73 - "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."

Fig 11 :39 - "capability is a property of agent-and-habitat, never of the agent alone"

Fig 11 :40 - "An improvement that does not change contact changes nothing, however much it improves."

A hydrothermal vent is the habitat: it supplies H2, CO2, Fe/Ni sulfides, pH and redox gradients, and pores that concentrate products. It is not the ground. The ground is what settles a claim about a network: a reactor yield, a selection response, a measured persistence. A claim that "vents drove the evolution of metabolism" conflates habitat with ground. What survives is the contact-claim: a network's capability is network and habitat together, and a modification that does not change that contact changes nothing.

**Mode:** `specified`. **Status:** `triangulated` across three Fig 11 lines. **Refuter:** an improvement in a network that leaves its contact with the habitat and its ground unchanged yet changes its capability would break this guard.

### F7 - Agreement among reviews is one evidence pool, not a witness

Fig 2 :40 - "agreement about the world is worthless when the agreeing frames share an evidence pool"

Fig 2 :42 - "Buy independence in proportion to the cost of being wrong."

The world sources in Section 4 all discuss the same small field and reuse the same few model systems (GARD, RAF, the iron-sulfur world, the RNA world). Their agreement is the pool talking. The genuinely lower-overlap lines are the chemical reactor results (Moran, Preiner, Martin) and the general evolutionary principles quoted from Maynard Smith, not the number of reviews that repeat them. The cost of being wrong here is high (an origin-of-life claim), so independence would have to be bought deliberately, not assumed from citation count.

**Mode:** `general`. **Status:** `triangulated` across Fig 2 and Fig 7. **Refuter:** two genuinely independent instruments (one chemical, one computational, drawing on different evidence) that agree on the heredity verdict would upgrade this from one pool to a triangulation.

### F8 - What actually survives, with modes attached

| claim | domain | mode | figure |
|---|---|---|---|
| A self-maintaining network with catalyst, cycle and gradient can arise and be differentially retained without genes | D1 | `specified` | Fig 11 :36, Fig 12 :119/:121, Fig 13 :76 |
| Capability of that network is network-and-habitat, not network alone | D1 | `specified` | Fig 11 :39/:40/:73 |
| Cumulative evolution requires both transmission fidelity and ground pressure | D2 | `specified` | Fig 7 :37-39 |
| With low fidelity a network can change, or show limited heredity, but not open-ended accumulation | D2 | `specified` | Fig 7 :37, Fig 4 :22, Fig 12 :107-110 |
| The first hereditary polymer is an import of a new atom, not a composition of metabolites | D3 | `general` | Fig 6 :21/:22, Fig 8 :32, Fig 13 :115 |
| Which molecule served as the carrier | G1 | `gap` | Fig 13 :134/:135, Fig 9 :32 |
| Whether the historical order was metabolism first | G3 | `gap` | world ground only |

### F9 - Verdicts per domain, never averaged

- **D1: yes, `specified`, triangulated.** Chemistry can prepare a self-maintaining, selectable network before genes.
- **D2: conditional and `specified`, triangulated on the shape, `gap` on the measurement.** Evolution in the strong sense needs a carrier with fidelity. Whether a purely chemical one suffices is unanswered; the world evidence leans toward limited heredity only.
- **D3: `general` shape, triangulated; identity `gap`.** A hereditary encoding atom must be imported into the prepared habitat.
- **Overall: a union.** "Yes, metabolism evolved before genes" is true of D1 and of a limited version of D2, and false as a claim that gene-level cumulative evolution was already running. Averaging the three domains into "partly yes" would be the aggregation failure Fig 1 :22 names.

---

## 4. World search (secondary corroboration only)

Fields searched for low overlap: theoretical biology and origins-of-life modelling, prebiotic and geochemical chemistry, evolutionary theory, and the framework's own human-cognition essays. Each source below was opened on 2026-11-23; quotes and full provenance are in `10_source_ledger.csv`.

1. **Vasas, Fernando, Santos, Kauffman and Szathmáry 2012, "Evolution before genes," Biology Direct 7:1** (open access, PMC3284417). Directly on the question. Key quote: *"Acquisition of cores by rare chemical events, and loss of cores at division, allows macromutation, limited heredity and selectability, thus explaining how a poor man's natural selection could have operated prior to genetic templates."* Also: *"We cannot confirm previous claims that autocatalytic sets of organic polymer molecules could undergo evolution in any interesting sense by themselves."* **Predicts:** D1 yes, D2 limited yes with compartments and cores. **Corroborates** F1 and the conditional half of F2. Overlap: shares authors with item 2.

2. **Vasas, Szathmáry and Santos 2010, "Lack of evolvability in self-sustaining autocatalytic networks...," PNAS 107:1470-1475** (PMC2824406). Key quote: *"replication of compositional information is so inaccurate that fitter compositional genomes cannot be maintained by selection and, therefore, the system lacks evolvability"*, and *"ancient metabolic systems could have provided a stable habitat within which polymer replicators later evolved."* Also quotes Hull: *"Replication by itself is sufficient for evolution of sorts, but not evolution through natural selection."* **Predicts:** D2 no for compositional inheritance, D3 habitat handoff yes. **Corroborates** F2 and F3.

3. **Tessera 2018, "Is pre-Darwinian evolution plausible?", Biology Direct 13:18** (PMC6151046). Key quote: *"the concept of 'pre-Darwinian evolution' appears questionable, in particular because it is unlikely if not impossible that any evolution in complexity over time may work without multiplication and heritability"*, and *"without hereditary replicators, no Darwinian evolution is possible."* **Predicts:** strict D2 no. **Corroborates** F2 and keeps the answer conditional. Low overlap with items 1 and 2 at the level of reviewer stance, same narrow field.

4. **Xavier, Hordijk, Kauffman, Steel and Martin 2020, "Autocatalytic chemical networks at the origin of metabolism," Proc R Soc B 287:20192377** (PMC7126077). Key quote: *"RAFs are consistent with an autotrophic origin of metabolism and furthermore indicate that autocatalytic chemical networks preceded proteins and RNA in evolution."* **Predicts:** D1 yes. **Corroborates** F1. Overlap with item 1 through Kauffman and RAF theory; note honestly.

5. **Callier 2025, "At the dawn of life, did metabolism come first?", Knowable Magazine** (fetched in full). Key quote from Martin: *"These metals replace 127 enzymes and give us five products which are exactly the products of the biological pathway."* Also Moran: *"we have not identified any conditions that allow an entire metabolism to emerge; we find conditions that allow little stretches of it to happen here, and specific reactions there."* **Predicts:** D1 yes at the reaction level, with an honest boundary on whole-network assembly. **Corroborates** F1 and the gap in F4. This is the lowest-overlap witness: science journalism reporting reactor results, not the modelling pool.

6. **Martin and Russell 2007, "On the origin of biochemistry at an alkaline hydrothermal vent," Phil Trans R Soc B 367:1887-1925** (abstract and overview opened; full text paywalled, marked partial). Key quote from the abstract: acetyl phosphate as *"the universal metabolic energy currency prior to the origin of genes"* and *"the ability to harness a naturally pre-existing proton gradient at the vent-ocean interface via an ATPase is older than the ability to generate a proton gradient with chemistry that is specified by genes."* **Predicts:** D1 yes, D3 after. **Corroborates** F1 and F3. Overlap with item 5 (Martin) declared.

7. **Sharov 2009, "Coenzyme Autocatalytic Network on the Surface of Oil Microspheres," Int J Mol Sci 10:1838** (opened via search-returned full text). Key quote: *"coenzyme-like molecules (CLMs) performed hereditary functions before the emergence of nucleic acids."* **Predicts:** a concrete non-template carrier candidate, so D2 limited yes and G1 open. **Corroborates** the shape-not-a-name reading by supplying one of several competing names. Single-source, low weight.

**Conflict rule:** no world source conflicts with the figure verdict; the disagreement in the field is about D2's magnitude, which the figures also mark as conditional. The conflict rule was therefore not triggered. Agreement among items 1, 2, 4 and 6 is one modelling/chemistry pool, not four witnesses, and is recorded as such.

### Framework essays opened for the canonical shape reading
Recursive Self-Improvement Trap, The Hard Problem is About Source, The Library of Babel, Decoding Tacit Knowledge (all opened in full 2026-11-23). Their quotes are used in `05_what_shape_means.md` and marked as framework-author sources with maximal overlap with the figures, so they carry no independent witness weight. The Recursive Self-Improvement Trap gives the single most on-point line for this question: *"Natural selection is what the loop looks like when there is no one maintaining the ground. When there is no one in the Ground Maintainer seat, the environment is the only selector."*

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any claim is settled: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refused if any of the following fires:

1. **D1 selection failure.** A self-maintaining reaction network is demonstrated with no differential retention among variants under a non-updating ground. F1 falls.
2. **D2 fidelity success.** A compartmentalized chemical network shows a heritable response to artificial selection whose residual trends down across generations under an assay that does not update on the network's own report. The "low fidelity" condition is refuted and pre-genetic Darwinian evolution is demonstrated.
3. **D3 composition success.** A hereditary polymer is derived purely by composing molecule kinds already present in a pre-genetic network, with no new kind of atom. The import claim falls.
4. **Ordering reversal.** Template polymers are shown to precede any self-sustaining network in the same lineage. The "before" in the question is false.
5. **Misassigned figure line.** A figure line used here is shown to govern a different quantity (as with the closure strain S1). Re-census and re-run, not a softer reading.

If any fires, the affected domain verdict is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Canonical usage check (figures README, THE_FORMULA, seat map)

Read after the first four sections:

- **Canonical figures README (local copy).** *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Its re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* Its limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"* and *"Indiscernibility is not identity."* Applied here: G1 is a shape, and the D1/D2 apparent contradiction is a domain misidentification, not a flaw (Section 7).
- **THE_FORMULA (local).** Mode rule stated above; step 7 separates SEARCHED, INWARD and OUTWARD. For this question: SEARCHED is "is a hereditary carrier already in the metabolite closure and unfound?" (no, by definition of a new kind of atom); INWARD is "can we sharpen the assay that measures transmission fidelity?" (yes, and that is the live experiment); OUTWARD is "which other frame already holds a hereditary polymer?" (the genetics-first frame). INWARD and OUTWARD are kept distinct and never read against each other.
- **Seat map (local).** *"High correlation is disqualifying for a verdict and efficient for a convention"* governs the contact rules in `03_public_contact_points.csv`; a verifier must not hold the interiors.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| F1 initially read as "evolution needs no genes at all" | **Retracted and narrowed.** Fig 11 :36 governs selection with no maintainer. Cumulative evolution still needs the two-factor product of Fig 7 :37-39. Both statements are kept; they govern different objects. |
| "Catalytic closure is the figure's closure(Γ)" | **Retracted as a mistaken identity.** Re-census (S1): Fig 8 :32 governs compositional closure of a vocabulary; catalytic closure governs catalyst self-production. The analogy is used only as a shape, never as an identity. |
| "The framework points to RNA as the first carrier" | **Refused.** Fig 13 :135 and the README's "shape, not a name" forbid it. RNA is a world candidate, provenanced as such, not a figure output. |
| "Metabolism-first and genetics-first are opposite answers" | **Retracted.** Fig 9 :54-57 makes the question a union of overlapping conditions. The verdicts are per domain and never averaged. |
| D2 "no" as a flat verdict | **Narrowed.** The figures return a condition (two factors), not a denial. Vasas 2012 supplies a limited-yes mechanism; Vasas 2010 and Tessera 2018 supply the limit. The gap is on the measurement, not on whether the shape is well formed. |
| Fig 11 :36 versus Fig 7 :37 apparent conflict | **Not strained after re-census.** Different objects: selection without a designer versus progress per handoff. See S2. |
| F3 import claim | **Canonically confirmed as a shape.** Figures 6, 8 and 13 agree that only an import adds a kind; the identity remains a gap. |
| Habitat versus ground | **Canonically confirmed.** Fig 11 :73 and Fig 2 :29 agree that the settling thing does not update. |

---

## 7. Strains and re-census

- **S1, "closure" (resolved by re-census).** Chemistry's catalytic closure and the figures' `closure(Γ)` are different quantities. Fig 8 :32, "no search, however long, adds an atom," governs the compositional reach of a held library. RAF closure governs whether members of a network catalyse each other's formation. Same word, different objects. After re-census the figure line still bears on the question, but only as a shape: re-arranging a metabolite set cannot add a new kind of hereditary atom. Kept visible because the temptation to equate them is strong in this field.
- **S2, selection versus two-factor progress (resolved by re-census).** Fig 11 :36 says selection ran with no maintainer. Fig 7 :37-39 says progress needs fidelity and ground pressure. They govern D1 and D2 respectively. No contradiction; the apparent conflict was a domain error, exactly the failure the README warns about.
- **S3, "before" ordering (live, named).** Fig 12 :30 defines sequence, but the figures have no instrument for historical priority. Recorded as G3 and left open.
- **S4, catalyst versus encoded enzyme (resolved by level).** Fig 12 :119's catalyst is "a part that survives its own use." At D1 that part is a metal ion, mineral surface, cofactor or autocatalytic core. The question's "enzyme" is a gene-encoded protein, a D3 actor. Fig 10 :68 gives different actors and currency per level. No strain after the level is named.
- **After re-census: three resolved, one live (S3), none hidden.**

---

## 8. Gaps

- **G1. Identity of the first hereditary carrier.** `gap` of the shape-not-a-name kind. Fig 13 :134-135, Fig 9 :32. RNA, PNA, coenzyme-lipid composomes and peptide-nucleic scaffolds are world candidates, none settled. Not silence: the shape is stated and the discriminator is named in `08`.
- **G2. Whether a pre-genetic compartment network can sustain fidelity high enough for cumulative evolution.** `unreached`, not `unreachable` in principle. The assay exists (artificial selection on compositional assemblies); the budget of this derivation did not run it.
- **G3. Historical order (did metabolism actually precede genes?).** `gap`. Needs a geochemical and phylogenetic ground, not a figure derivation.

"A search that finds nothing is never a proof of absence" (Fig 8 :39). Unreachable is a verdict, not a silence (Fig 13 :134).

---

## 9. Recommendation

1. Lead with the union separator, not with a yes or no. Fig 9 :55-57: unbundle before searching.
2. Keep D1, D2 and D3 verdicts separate and never average them (Fig 1 :22).
3. State the mode on every sentence. `specified` for the shape, `general` for the structural claim, `gap` for G1 to G3, never `grounded` (THE_FORMULA mode rule).
4. Put the pre-registered refuter in front of the links. A failed prediction is more useful than agreement (Fig 2 :35; seat map on falsifiers).
5. Describe the residual in effect terms before naming a frame (Fig 9 :27-28). Do not begin with "RNA world" or "iron-sulfur world" and then map the residual onto it.
6. Send the generator, not a recording: the separator, the shape and the refuter. Fig 4 :25 - "A recording carried upward looks like knowledge and is a description of one occasion."

---

## 10. Round trip and audit pointer

The condensation carried into `07_the_tether_answer.md` and `09_watson_answer.md` is lossy. The full round trip gap R_T, enumerated qualitatively with five dropped constraints, is computed in `11_audit.md` §Round trip gap R_T. Nothing in those summaries may be read as identical to the verbatim figure set. Fig 4 :30 - "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
