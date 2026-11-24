# Figure-grounded audit: ECO-0070, distinguishing three sources of persistence

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the ecology question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, and the amended Seat Map are the usage rules. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the organism's current state: its condition, its developmental history, what it has learned, its present phenotype.
- **a** is what it does: forage, hide, migrate, reproduce, alter physiology, choose a microhabitat.
- **Γ(b,a)** is what the organism's library plus its controller predicts the environment will return.
- **o′** is what the environment actually returns: survival, reproduction, resource gained, offspring recruited.
- **s** is the population or the individual, indexed by site and by generation. R is never averaged across sites or species (Fig 1 :19, Fig 1 :22).

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is that R stays small after the environment has changed. Observed: a population persists, a phenotype remains matched, a lineage continues. Call this `P_s`, the persistence of a live, low-residual slot. Three candidate sources produce the same `P_s`:

- **A, genetic adaptation.** The heritable library Γ changed across generations. A new heritable atom or a new arrangement entered the germline and selection settled it.
- **B, behavioral flexibility.** Γ and the habitat are unchanged. The controller rebound b and a within a lifetime. Same atoms, different arrangement, or a different binding.
- **C, movement to a new habitat.** Γ and the controller are unchanged in the relevant respect. The field of contact was substituted, so the old phenotype still pays somewhere else.

State the residual as: *what would discriminate the source of a persistence reading when genetic change, within-lifetime re-composition, and habitat substitution can all produce the same reading?* This is an effect description. It names no gene, no "plasticity gene", no "adaptive allele", no "range shift". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a set of instruments, each changing one of the three state variables while holding the other two fixed, plus a pre-registered failure condition for each. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* For this question the anchor is a fitness or survival count under controlled conditions: a common garden, a reciprocal transplant, a marked-recapture series, a pooled sequencing time series paid by fitness. Expert opinion about what "really" adapted moves when pushed, so it is an instrument at best (Fig 2 :30, *"If it moves when you push on it, it is not an anchor."*).

**The specific error this question invites.** From *The Hard Problem is About Source*, opened 2026-11-23: *"You can have several underlying causes that create identical readings but the definition of the output would be read as the same."* Persistence is such a reading. The essay's metamerism case is decisive here: an instrument that reads green *"cannot comment on the source"*. A spectrometer, not an argument, resolved it. The same holds here. The world literature already says so in its own terms. Bernatchez et al. write that species cope with climate change *"by genetically adapting to new environmental conditions, through range shifts or through phenotypic plasticity"*, and Donelson et al. note that the standard *"move, acclimate/adapt or die"* framing *"is an oversimplification and unlikely to reflect reality"*. A reading of persistence does not pick one of those three.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among heritable library Γ, current controller state b, action a, and environmental return o′, indexed by slot s and ordered by generation g and time t. It has at least four operands and two orderings. It therefore carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "persisting" or "matched" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not a symmetric relation: organism and environment are not interchangeable.
- **Symmetry.** "Adapted" is a threshold relative to a local environment, not an absolute property (Fig 12 :85-89; Operators table :46-51). Reversibility is asymmetric: a plastic change reversed within a lifetime is not the same event as an allele frequency returning to its old value, and neither is a population returning to its old habitat.
- **Scale.** Three scales are in view: the within-lifetime controller (one organism's loop), the population across generations (the membrane, Fig 4 :5), and the habitat field of contact. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform between scales is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The heritable library** (germline Γ) | alleles, genotypes, mutation, recombination, introgression | heritable variation, allele frequency, reach | yes: pooled sequence or temporal sequence, paid by a fitness count | admitted |
| **D2 The within-lifetime controller** (behavioral flexibility) | nervous system, learning, reaction norms, gene regulation, developmental switches | actions, expression states, reversible phenotype | yes: behavior or expression under common-garden and time-course control | admitted |
| **D3 The habitat field of contact** | conditions (light, water, temperature, season, terrain, Fig 11 :46), relations (predation, competition, dependency, Fig 11 :47), other species | contact, occupancy, environmental coordinates | yes: measured environmental variables and transplant or occupancy survival | admitted |
| **D4 The settlement assay** (the ground for the question) | common gardens, reciprocal transplants, mark-recapture, E&R, resurrection ecology | survival, reproduction, payoff | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Adaptation" as a free-floating property of a population** | the population | adaptedness | **no** anchor independent of a counterfactual fitness assay | not a domain yet |
| **X2 "Instinct versus learned" as a sole dichotomy** | behavior categories | a label | already inside D1 and D2; no separate anchor | absorbed into D1/D2 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that adaptation is unreal.

### 1.3 Partition or union

D1 and D2 overlap: the controller is built by the heritable library, so their overlap is a compound with its own loop. D2 and D3 overlap: behavior selects and alters microhabitat, so that overlap is a second compound. D1 and D3 overlap: movement sieves alleles during colonisation (Luqman et al. 2023), so that overlap is a third compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) did the heritable library change? (C2) did the within-lifetime controller change while habitat held? (C3) did the habitat change while library and controller held? A population changing in C1 only and a population changing in C3 only are not different degrees of one response; they need different instruments. Botero 2026 reports from simulation that behavioural buffering increases standing genetic variation while slowing short-term morphological evolution, and Donelson et al. 2019 state that plasticity, adaptation, and distributional change *"are not mutually exclusive"*. Both corroborate the union reading at different strata. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can we read phenotype and environment at all?) -> 2 vocabulary (do we have terms for what a habitat affords, and a discriminator of sources?) -> 3 objective (what would count as progress, and what failure would we accept for each source?) -> 4 planning (choose the instrument) -> 5 learn and carry (record provenance and refuters). The middle link, having terms that discriminate sources and saying what would count as a failure, is the one with no single instrument. Most effort lands above the break, because the reading of persistence is easy to obtain and the source discriminator is not (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which source produced it |
| 2 The Ground | fitness assay as anchor; independence vs common pool; correlation valence | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs individual-to-population transfer |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new heritable term can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs D1 and the mutation-versus-selection distinction |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs persistence as a sequence of handoffs |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first; filters vs witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs "we cannot tell" versus "we have lost touch" |
| 11 The Habitat | capability is agent-and-habitat; isolation is substitution; enumerate the habitat | decisive for D2 and D3 |
| 12 The Bond | isomer, catalyst, functional group; arrangement is the substance | governs why the same atoms yield different responses |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only (see strain S1) |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to genes, behaviors, and habitats only fit by calling an allele a kind of energy and a habitat a kind of space. That is a strain, so Fig 13 does **not** govern the biological content of this question. Re-census sends Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census, except the two named in section 6.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about organisms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The question is a source-discrimination problem, not a persistence measurement

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 2 and Fig 11, low overlap: indexing vs anchor vs habitat).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."** (Fig 11 :36)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)

A persistence reading is consistent with three sources. Calling it "adaptation" from the reading alone is the metamerism error the source essay names. The framework-internal warrant is Fig 11 :36: where nothing maintains, the label is applied afterwards to a lineage that met its ground. The world warrant is Bernatchez et al. 2024, which lists genetic adaptation, range shift, and plasticity as three distinct response classes that need different omics tools. Their agreement with the figures is a corroboration of shape, not a second independent witness for the framework (the essays share the figure author's evidence pool; the ecology review does not, so it is one low-overlap witness for the shape).

**Refuter:** a single reading of persistence that uniquely determines the source, in the way a thermometer reading uniquely determines temperature. If such a reading is demonstrated, F1 is false.

### F2: Genetic adaptation is the only candidate that changes heritable atoms

**Mode: `specified`. Domain D1. Status: triangulated (Fig 6, Fig 9, Fig 5, three distinct roles).**

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"the only operator that moves the wall"** (Fig 6 :14)
> **"No frame escapes its own closure"** (Fig 6 :23)
> **"then check it against the ground, then carry it up"** (Fig 5 :32)

Selection alone narrows what is already in the library; it does not add an atom. Mutation, recombination, and introgression are the operators that add heritable atoms, and they are the import-like part of genetic adaptation. Hence the discriminating evidence for A is a change in heritable state: allele-frequency trajectories measured by evolve-and-resequence (Schlötterer et al. 2015 write that Pool-Seq *"can identify selected variants in controlled and replicable experimental settings"*), temporal genomics, or resurrection genomics. See also the systematic re-census in section 6, strain S2: the framework separates the *source* of new heritable atoms from the *filter* that settles them, and refusing to conflate them is the point.

**Refuter:** a documented case of genetic adaptation in which no heritable state, sequence or regulatory, changes between ancestral and descendant generations while the phenotype change persists in a common garden across generations. If such a case exists, "genetic adaptation" needs redefining and F2 fails as written.

### F3: Behavioral flexibility is a re-composition inside the same closure, with the same atoms and the same habitat

**Mode: `specified`. Domain D2. Status: triangulated (Fig 12 and Fig 11, low overlap: bond structure vs habitat valence).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"Symmetry is what decides whether an arrangement is a new thing."** (Fig 12 :92)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)

Under the six-term reading is not needed here; under Fig 12 the system holds the same atoms and changes the bond. That is an isomer of response, and a resource or trait inventory cannot see it. The discriminating evidence for B is a reaction norm: the same genotype producing different phenotypes under different conditions, with reversibility, measured in a common garden and in expression time courses. Sommer 2020 defines the class: *"Phenotypic plasticity is defined as the property of organisms to produce distinct phenotypes in response to environmental variation."* Rittschof and Robinson 2014 add that gene expression profiles can be used to *"evaluate phenotypic plasticity"* and to manipulate behavior to test adaptive hypotheses. Their result is that the genomic and behavioral frames are mutually informative, which corroborates using both instruments rather than treating behavior as a free-floating label.

A warning against a lazy inference: Botero 2026 reports from simulation that *"behaviourally flexible lineages are likely to exhibit slower rates of phenotypic evolution not because they are unable to evolve, but because they are less affected by selection."* A slow rate of genetic change is therefore **not** by itself evidence for flexibility, nor is a fast rate evidence for its absence. The discriminator must hold selection pressure constant or measure it. That warning is recorded as a strain, S3.

**Refuter:** a case in which the same genotype, in the same measured environment, with the same developmental history, produces two different phenotypes with no detectable heritable difference and no controller state difference. Under F3 that cannot happen; if it does, the atom/bond framing misses a source.

### F4: Movement is substitution of a habitat, not a change of the organism's library

**Mode: `specified`. Domain D3. Status: triangulated (Fig 11 and Fig 2, low overlap: habitat law vs anchor rule).**

> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat’s actors, which you did not choose."** (Fig 11 :67)
> **"what you failed to reproduce is invisible until the goal fails"** (Fig 11 :68)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)
> **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."** (Fig 11 :73)

The discriminating evidence for C is a change in the enumerated field of contact without a corresponding heritable change: occupancy records, mark-recapture, telemetry, microhabitat coordinates, and transplant survival in the old and new habitat. Fig 11 :43: *"The habitat is enumerated, never composed."* You read the list off the world; you do not invent it from the mechanism name. The world supply is strong here. Donelson et al. 2019 state that species *"can move to new areas that become available within their thermal niche"* and treat range shift as a process distinct from plasticity and adaptation. Luqman et al. 2023 complicate it: movement and adaptation can be coupled, because local conditions *"sieve"* genotypes during colonisation. The discriminator must therefore separate in-situ selection from arrival of pre-adapted genotypes, which is exactly why genomic continuity alone is insufficient.

**Refuter:** a population that persists after a documented substitution of habitat while its habitat coordinates, actor list, and occupancy are measured as unchanged and no within-lifetime controller change occurred. Under F4 all three sources fail, so the residual was misdescribed, not resolved.

### F5: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and Fig 7, low overlap: union structure vs handoff selection).**

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)

Fig 9 :54, :55 and :57 are the governing lines. The three conditions C1, C2 and C3 have different instruments:

- A C1 failure shows up as heritable allele-frequency change, paid by fitness in a common garden or an E&R time series (Fig 5 :32; Fig 6 :23).
- A C2 failure shows up as a reaction norm, reversible expression change, or learned behavior with genomic continuity (Fig 12 :117; Fig 11 :50).
- A C3 failure shows up as changed habitat coordinates and actor list with genomic and controller continuity (Fig 11 :66-69; Fig 11 :43).

A single lever, for example "measure trait change over time", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). Ho & Zhang 2018 show why the intersection matters: across 44 experimental adaptations, *"genetic changes more frequently reverse than reinforce plastic phenotypic changes in virtually every adaptation"*. A naive "plasticity leads the way" reading of a time series would mis-source that case. This is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention or instrument that separates all three sources in all their overlaps and leaves no categorically different residue. That would collapse the union into a partition.

### F6: Never answer this by averaging across slots

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"coverage, and compression achieved"** (Fig 1 :25)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A species-level mean of trait change, a pooled FST, or a global range-shift rate reports a quantity the frame produces. It is a filter for where to look and a budget instrument, not a witness (Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*). Donelson et al. 2019 make the same point from inside ecology: *"they are rarely studied together to understand climate change-driven biological responses"* and *"This compartmentalization of responses is an oversimplification"*. The specified consequence: any answer to ECO-0070 that is an average across populations has already thrown away the only signal that says which slot changed in which state variable.

**Refuter:** an averaged species-level statistic that predicts, prospectively and per population-slot, which of the three sources produced persistence, and that survives transplant or common-garden settlement.

### F7: The anchor is a settlement assay, not expert agreement about the mechanism

**Mode: `specified`. Domain D4. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor rule vs channel decay).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"→ keep the anchor reachable"** (Fig 10 :29)

A committee of evolutionary biologists who agree about what "really" happened is a room, not an anchor (Fig 7 :35). The ground here is what survives and reproduces under controlled conditions. When we cannot tell which source acted, the honest report is that the channel to the ground is lost or too coarse, not that all three are equally true. Fig 10 :27-28: *"the output is not a verdict, it is you have lost touch"*. This is the distinction between "unreached" and "unreachable" that the honest stop in `07` keeps.

**Refuter:** a mechanism attribution that changes when the examining community is told a different story about the same fitness data. If it moves when pushed, it is not an anchor.

### F8: The break is at the middle link, and the missing thing is an instrument

**Mode: `general` with a `specified` consequence. Domain D4. Status: single-source (Fig 3, with Fig 6 and Fig 9 as corroborating lines from the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)
> **"The gap is measured per object, not per step."** (Fig 1 :28)
> **"Cast it in effect terms."** (Fig 6 :30)

We can already read persistence easily. We do not have one instrument that reads source. But this is not an unreachable-in-principle question: common gardens, reciprocal transplants, pooled sequencing, and mark-recapture are proto-instruments already returning something that fails to resolve the source, so there is an edge to extend (Fig 6 :34-35). The remedy is SEARCHED and INWARD first, not an imported theory (Formula step 7). An external frame that already holds a discriminator is the OUTWARD track, and the ecology literature supplies several: E&R, resurrection genomics, reaction norms, genomic offset. Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Those four come from different fields and count as more than one witness for the instrument shape, though all still need ground settlement.

**Refuter:** a demonstrated single instrument that reads genetic versus plastic versus movement source from one reading of a field population, with no controlled comparison. Under F8 that should be impossible; if it exists, the middle-link diagnosis is wrong.

### F9: Conflict between the ecology literature and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

Three apparent conflicts were returned to the census, not used to flip a verdict:

1. Ho and Zhang 2018 report that genetic change usually reverses plastic change. That seems to say plasticity is not a source of persistence at all. Re-census: their result concerns the *direction* of expression change between stages o, p and a, not whether a plastic response kept the organism alive at stage p. The paper states plasticity may be *"an emergency response to a new environment that is necessary for survival"* while not facilitating adaptation. Fig 11 :50 (valence relative to residual) governs the first claim; Fig 7 :37-39 governs the second. Different objects, no strain.
2. Luqman et al. 2023 show range shift and adaptation coupled. That seems to collapse C into A. Re-census: sieving during migration is selection acting on standing variation during a change of contact, so it is a compound of D1 and D3 with its own loop (Fig 9 :54-57). It does not erase the discriminator; it requires measuring both state variables.
3. Botero 2026 reports that behavioural flexibility slows morphological evolution while increasing standing variation. That seems to reverse the expected sign of evidence. Re-census: rate of evolution is a filter on budget and time, not a witness for the source (Fig 9 :60). The instrument is the buffering term measured directly, not the slope of the trait time series.

No world source was allowed to flip a figure verdict. Each conflict produced a sharper census.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per population-slot, never a species mean | general | Fig 1 :19, :22 | figure-derived |
| The anchor is a fitness or survival assay, not agreement | general | Fig 2 :29, :30, :35 | figure-derived |
| Persistence is a reading with several possible sources | general | Fig 1 :23; Fig 11 :36 | triangulated F1 |
| Genetic change alone adds heritable atoms | specified | Fig 6 :14, :21, :23 | triangulated F2 |
| Flexibility is same atoms, different arrangement, same habitat | specified | Fig 12 :5, :92, :117; Fig 11 :50 | triangulated F3 |
| Movement substitutes a habitat and inherits its actors | specified | Fig 11 :66-69, :73 | triangulated F4 |
| The three sources form a union with overlapping compounds | general | Fig 9 :54, :55, :57 | figure-derived |
| Discriminating evidence must hold two state variables fixed | specified | Fig 3 :19, :27; Fig 6 :30 | single-source F8 |
| The break is at the source discriminator | specified | Fig 3 :24, :29 | single-source F8 |
| Which allele, which behavior, or which habitat is the actual source here | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule in the amended Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A single reading of persistence uniquely determines the source, with no controlled comparison (breaks F1, the metamerism claim).
2. A documented genetic adaptation with no heritable state change, sequence or regulatory, between ancestors and descendants while the phenotype change persists in a common garden (breaks F2, Fig 6 :21-23).
3. A documented plastic response with the same genotype, the same measured environment, and the same history but no controller-state difference (breaks F3, Fig 12 :117).
4. A documented habitat substitution with no change in the enumerated actor and condition list or occupancy coordinates (breaks F4, Fig 11 :66-69).
5. A single intervention separates all three sources in every overlap and leaves no categorically different residue (breaks F5, Fig 9 :57).
6. An averaged species-level statistic prospectively identifies the source per population-slot and survives transplant or common-garden settlement (breaks F6, Fig 1 :22).
7. Fig 6's idempotence fails inside a closed heritable set, or one of the six terms is derived from five (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a fitness-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of adaptation (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the three conditions separate in every report. A blended "response score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Enumerate the habitat before attributing anything to it: conditions, actors, relations, and their second-order cascade (Fig 11 :43-48). DDT reached the eagles three steps out (Fig 11 :52-54); a source attribution can be equally far from the reading.
4. Buy the discriminating instruments at the middle link, not more persistence measurements (Fig 3 :27, :29).
5. Treat any list of candidate genes or behaviors as Γ, that is, as a library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
6. Use the ecology literature as a budget filter and as low-overlap witnesses for the instrument shape, never as the verdict. Bernatchez, Donelson, Luqman, Ho and Schlötterer do not share one evidence pool with the framework, but they do not settle the local case either (Fig 2 :31).
7. Stop at the shape. Do not name which allele, which behavior, or which habitat is responsible without a settlement assay. Fig 9 :32: *"you get a kind of thing, never the answer itself."*

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`, and the amended Seat Map. Three essays were opened directly: *The Hard Problem is About Source*, *The Recursive Self-Improvement Trap*, and *The Library of Babel* (all 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- WATSON 60 confirms that the figures are metalaws for design questions; the seat reads the ground and does not ask the anchor to decide what the figures already settle.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six terms to genes, behaviors and habitats | **Retracted, strain S1** | Only fit by renaming an allele a kind of energy. Re-census: Fig 13 governs the physical substrate, not biological response classes. It serves here only in the honest-stop role |
| Called the environment "the ground" in an early draft | **Retracted, strain S2** | Fig 11 :73: the habitat updates, the ground settles. Anchor is the fitness assay, not the habitat description |
| Read Ho and Zhang 2018 as saying plasticity is not a source | **Narrowed, strain S3** | Their result concerns direction of expression change between stages; the survival role of plasticity is separate. Re-census keeps both claims, different objects |
| Read "genetic adaptation = import moves the wall" as one mechanism | **Corrected by re-census, strain S4** | Mutation, recombination and introgression add heritable atoms; selection only filters. Fig 6 :21 and Fig 9 narrowing have different jobs. Both records kept |
| Wanted to name "the adaptive allele" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Any name is a binding with provenance owed, not a derivation |
| F1 called "decisive" in an early draft | **Downgraded to triangulated** | Fig 1, Fig 2 and Fig 11 are three figures but one framework; triangulation means low topical overlap, not independent evidence pools |
| Treating the three ecology reviews as if they settled a local case | **Narrowed to instrument-shape corroboration** | They are low-overlap witnesses for the shape, not a fitness-ground settlement of any population |
| "Which allele, behavior or habitat" row in F10 | **Marked `gap`** | Fig 13 :134, *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39, *"So a search that finds nothing is never a proof of absence."* The missing thing is a discriminator of sources, characterised in effect terms but not held here |

**Strains sent to the log:** S1 (Fig 13 applied to biology), resolved by re-census; S2 (habitat called the ground), resolved by Fig 11 :73; S3 (direction versus survival role of plasticity), resolved by re-census; S4 (source of atoms versus filter of atoms), resolved by re-census. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of heritable change, within-lifetime re-composition, and habitat substitution, each with its own loop and instrument.
2. **What is the anchor?** A fitness or survival assay, named in Fig 2 :29. Not consensus, not the persistence reading (Fig 1 :27).
3. **Is the answer in the organism alone?** No. Fig 11 :39-40. Capability, and therefore persistence, is agent-and-habitat.
4. **How does genetic change enter?** As an added heritable atom from mutation, recombination, or introgression (Fig 6 :14, :21, :23), settled by selection, which is narrowing at the ground (Fig 9 narrowing stage).
5. **How does flexibility work?** Same atoms, different bond, same habitat (Fig 12 :117); reversible and measurable as a reaction norm or expression time course.
6. **How does movement work?** By substituting the habitat, not removing it (Fig 11 :66), and inheriting actors the organism did not choose (Fig 11 :67).
7. **What can be said at the stop?** A shape and three discriminating instruments with seven falsifiers. Not which allele, not which behavior, not which habitat, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39 apply.

---

## 8. Updated verdict

The shape survives: **to distinguish genetic adaptation from behavioral flexibility or movement to a new habitat, change one state variable and hold the other two fixed. The evidence that decides is heritable-state change paid by a fitness assay for the first, a reaction norm or reversible controller change under a held habitat for the second, and a substituted field of contact with genomic and controller continuity for the third. The three are a union with overlapping compounds, so the verdicts stay separate per domain and are never averaged; a species-level mean is a filter, not a witness. Which allele, which behavior, or which habitat is the actual source in any given case is a `gap` at the instrument boundary.** Mode `specified`. No world source flipped a verdict; the three apparent conflicts were returned to the census and re-mapped. No unresolved strain remains after re-census. The missing thing is a source-discriminating instrument, and it is owed.
