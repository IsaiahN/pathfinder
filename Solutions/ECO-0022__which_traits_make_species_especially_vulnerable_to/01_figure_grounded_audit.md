# Figure-grounded audit: which traits make species especially vulnerable to extinction in rapidly changing environments?

**Mode of this document: `specified` on the ecological applications, `general` on the structural shape, `gap` on the literal-standing-list request, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, Adventures in Machine Learning, 2026-11-19, opened 2026-11-23) says LLM output only *"simulate[s] an approximate answer/output with the formula"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No extinction measurement was taken here; the world literature is secondary corroboration only.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the Operators and Symbols tables as extracted in the figure text, and the world sources listed in `10_source_ledger.csv`. Every figure quote below is an exact substring of the figure text file.

---

## 0. The claim under audit and the residual in effect terms

The question as posed: **Which traits make species especially vulnerable to extinction in rapidly changing environments?**

Stated in effect terms, before any trait is named:

> For each species-slot s, let R_s = |(predicted persistence given the species' current library and habitat) minus (observed persistence when the environment moves)|. The question asks which entries of the trait vector systematically enlarge R_s across many species.

Three observations, each already an effect claim and not a vocabulary choice:

1. R is indexed per species, never aggregated into one global score. **Fig 1 :19:** *"The residual is indexed by object slot, not aggregated."* **Fig 1 :22:** *"Aggregating across slots is how a live signal disappears into an average."* A pooled macroecological correlation is a filter for the budget, not a witness for a per-species verdict (Fig 9 :60).
2. "Vulnerable" is a threshold comparison, not a mere presence. The Operators table :49 defines comparison as *"a threshold relation between two quantities"* and :51 gives the test *"is it about which is larger, rather than both being present? Yes."* A trait is not vulnerable in itself; it puts a persistence quantity on one side of a threshold.
3. A trait is a property word, which invites a symmetric reading (trait carried, therefore property held). The figures refuse that symmetry at the habitat: **Fig 11 :49:** *"An actor's valence is relative to the residual, not a property it carries."* The same trait flips sign when the residual changes. This is the first strain, and it is resolved by re-census in §5 S2, not smoothed over.

**What an answer would look like (binding the sought-for shape as an ordinary term, `THE_FORMULA.md` step "Direction"):** a separator that, for any species-slot, decides whether its contact with a non-updating ground is maintained and whether its reach is renewed fast enough to track a moving residual. It is a shape plus per-domain verdicts, not a roster. This binding is written down before the conclusion so it can accrue a residual like anything else.

---

## 1. Domain census (before choosing any figure line)

Describe R by arity, symmetry and scale. Then one line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet. Partition or union. Dependency order from Fig 3.

### R by arity, symmetry, scale

- **Arity:** three-place, (trait configuration T, species-slot s, changing environment E), with an added comparison against a persistence threshold. It is not a two-place (trait, extinction) question; the environment term cannot be dropped without the residual vanishing.
- **Symmetry:** appears symmetric in the ordinary word "trait," but the figure reading makes it ordered and residual-relative (Fig 11 :49-51). The apparent symmetry is a misreading, not a second domain.
- **Scale:** traits are read at organism or lineage scale; extinction is a population-to-lineage event; the causal path crosses the scale membrane (Fig 4) and cascades outward through the habitat (Fig 11 :52-54). A single-scale answer is necessarily incomplete.

### One line per domain

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Species library and closure | alleles, life-history parameters, body size, niche breadth, dispersal capacity, genetic variance | composition inside closure(Γ_s), reach, cost of a term | settlement by the ground: does the trait actually pay in persistence? | admitted |
| D2 Habitat and contact field | conditions (light, water, temperature, season, terrain), relations (pollination, predation, competition, dependency), other species | contact, enumerated not composed | the environment as selector in the unmaintained mode (Fig 11 :36, :56) | admitted |
| D3 The changing environment as ground | rate and severity of change, measurement instruments | what the ground pays: survival or extinction | actual persistence, a non-updating reading, not a Red List category (Fig 2 :29) | admitted |
| D4 Generational and dispersal channel | generations, plastic responses, dispersal events, gene flow | tracking of a moving optimum | the ground (Fig 7 :35, :39) | admitted |
| X1 A universal standing list of vulnerable traits | a fixed roster of "bad" traits | category membership | none: valence flips with the residual (Fig 11 :51) | not a domain yet |
| X2 Trait as free-floating property of the species alone | the trait | intrinsic goodness or badness | absorbed into D2, since capability is agent-and-habitat (Fig 11 :39-40) | absorbed |

X1 has no nameable anchor that does not update when the residual changes, so it fails the anchor test (Fig 2 :29-30) and is not admitted as a domain. X2 is absorbed into D2 by Fig 11 :39-40. This is the decisive structural move of the audit: the question's ordinary object, a standing list, is not a domain.

### Partition or union

**Union, not partition.** D1 through D4 overlap. Small population, small range, large body size, long generation time, and narrow habitat specialization co-occur and are correlated in the literature (Cardillo et al. 2005; Rivas-Salvador and Reif 2023). A single lever that clears a case in one condition leaves the intersections standing.

- **Fig 9 :54:** *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- **Fig 9 :55:** *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- **Fig 9 :57:** *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

The "rarity cluster" (small range, low abundance, narrow habitat tolerance) is a compound with its own loop inside D2, not three independent entries to be added to a roster. Verdicts are kept separate per domain and never averaged into one vulnerability percentage.

### Dependency order (Fig 3)

1. **Perception:** the species and the observer must tell the changed environment from the previous one (Fig 3 :4-5).
2. **Vocabulary:** terms for what the situation affords, which traits can be moved, joined, or blocked.
3. **Objective:** what counts as persistence, a threshold comparison (Operators :49). This is the link that usually has no instrument (Fig 3 :27), because a Red List category is a convention, not a measurement (Fig 10 :18, :47).
4. **Planning:** a route to persistence under incomplete information, through plasticity, dispersal, or genetic change.
5. **Learn and carry:** name what worked, verify it, carry it to the next generation (Fig 3 :14-15).

Dependency, not importance: effort spent above a broken link arrives at a step that cannot use it. **Fig 3 :20:** *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* **Fig 3 :27:** *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 2. Figure census and findings F1 to F10

Every quoted string in this section is verbatim from `03-FIGURES_TEXT.md`. Strained readings are named, not hidden.

### F1: The standing-list request is structurally refused (decisive against the question as posed)

**Fig 11 :51:** *"No standing list of good actors survives a change of residual."*

**Fig 11 :49:** *"An actor's valence is relative to the residual, not a property it carries."*

**Fig 11 :50:** *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*

The figures do not say that a particular trait is never associated with extinction. They say that no list keeps its valence when the residual changes. Large body size, large area requirement, and low reproductive rate are beneficial under a stable, resource-rich regime and costly under rapid change; the Cardillo et al. 2005 abstract reports exactly this sign change, with impacts rising sharply above a threshold body mass around 3 kg and a shift from environmental drivers in smaller species to a combination of environmental and intrinsic traits in larger ones. The world finding corroborates the figure; it does not replace the figure. Verdict: the literal list is a `gap`, and asking for it is a category error under Fig 11 :51. Mode `general` on the structure. Triangulated across Fig 11 and Fig 2 :29-30 (no non-updating anchor for a standing list).

### F2: Vulnerability is agent-and-habitat, not a property of the species alone

**Fig 11 :39:** *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*

**Fig 11 :40:** *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

**Fig 4 :20:** *"it or a thousand. Only the actors, the currency and the anchor change."*

Applying the same loop to ecology is a cross-scale analogue: the kernel is unchanged, only actors, currency and anchor change. A species' traits are the library operand; the habitat supplies the actors and relations; the ground settles survival. A trait-only answer is an agent-only improvement, which by Fig 11 :40 changes nothing if contact is unchanged. Verdict `specified` for the ecological binding, `general` for the structure. Triangulated (Fig 11 and Fig 4, different objects). Refuter: a species whose extinction probability is invariant across a documented habitat substitution that removes all contact with the relevant condition.

### F3: The habitat is enumerated, not composed, and contact cascades

**Fig 11 :43:** *"The habitat is enumerated, never composed."*

**Fig 11 :44:** *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*

**Fig 11 :45:** *"actors: what acts on it, and what it acts on"*

**Fig 11 :46:** *"conditions: light, water, temperature, season, terrain"*

**Fig 11 :47:** *"relations: pollination, predation, competition, dependency"*

**Fig 11 :48:** *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*

The traits that matter are those that govern enumerated contact and cascades: dispersal governs whether a species can reach a substitute habitat; diet and mutualism breadth govern how many relations can be severed before the species loses its ground; trophic position governs which cascades reach it. Fig 11 :52-54 makes the cascade concrete with DDT: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* This is the figure's own ecological example and it governs D2 directly, not by analogy. World corroboration: the Biomagnification reference page (opened 2026-11-23) confirms DDT biomagnification and eggshell thinning in bald eagles and peregrine falcons. Verdict `specified`. Single-source on the figure side for the cascade shape (Fig 11), with a low-overlap world corroborator.

### F4: Narrow niche and habitat specialization are a closure failure

**Fig 6 :21:** *"MINT composes inside the closure and can never add an atom."*

**Fig 6 :23:** *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

**Fig 8 :32:** *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."*

A specialist's library is a narrow closure. When the residual lands outside it, no amount of internal composition produces a fitting term; only an import moves the wall, and import requires a source gate and a shadow test (Fig 6 :12-13, Fig 8 :50-52). The world literature converges here: Zhang et al. 2026 (Science Advances, open access, read 2026-11-23) report that elevated risk in island endemics is *"closely associated with small range size and habitat specialization"*; Rivas-Salvador and Reif 2023 (Naturwissenschaften, abstract read via Europe PMC 2026-11-23) find more vulnerable bird species have *"higher degree of habitat specialization"*; Mi et al. 2025 (Research Square preprint, abstract read 2026-11-23) find climate vulnerability predicted by *"narrow elevational and latitudinal ranges, large body size, and habitat specialization."* These are three records of one broad macroecological evidence pool, so they count as one witness, not three. Verdict `specified`. Single-source on the figure side (Fig 6 and Fig 8 are one closure doctrine), corroborated by one pooled world witness.

### F5: Small population and low genetic variance are a small library

**Fig 13 :115:** *"The set is closed. The arrangements are not. That gap is why import exists."*

**Fig 1 :20:** *"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert one."*

Alexander et al. 2014 (Evolutionary Applications, open access full text read 2026-11-23) state: *"Conservation biology focuses on small populations, often of obligately sexual, multiploid organisms with long generation times."* They define standing genetic variation as *"genetic variation existing within a population prior to an environmental change,"* and note that *"Declining populations face a 'race' between adaptation and extinction."* Bell and Gonzalez 2009 (Ecology Letters, abstract read via Europe PMC 2026-11-23) report that rescue depends on *"population size, the supply of genetic variation, and the degree of maladaptation to the new environment,"* with *"a clear threshold in population size for ER whereby the ancestral population size must be sufficiently large to counter stochastic extinction and contain resistant individuals."* A small Γ is not just fewer individuals; it is fewer reachable terms and a smaller support mass per slot. Verdict `specified`, triangulated across D1 closure (Fig 13) and per-slot support (Fig 1) with experimental-evolution corroboration.

### F6: Long generation time and slow evolution are a loop-rate failure

**Fig 7 :35:** *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

**Fig 7 :36:** *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."*

**Fig 10 :24:** *"the ground does not decay, the channel does"*

The generational channel must produce rooms that differ and match the residual the last one surfaced. If generations are long relative to the rate of environmental change, the chain runs in place: successive rooms are mirrors, agreement compounds, and the channel decays while the ground does not. The Wikipedia Evolutionary Rescue page (opened 2026-11-23) states that under a continuously changing environment rescue appears as *"a stable lag of the mean trait value behind a moving environmental optimum, where the rate of evolution and change in the environment are equal."* Bell and Gonzalez 2009 put the same condition in terms of a *"rate of decline"* that adaptation must counter. Verdict `specified`. Triangulated (Fig 7 chain rule and Fig 10 channel rule, different figures) with world corroboration from an independent mechanism description.

### F7: The ground is actual persistence, not a category assigned by a frame

**Fig 2 :29:** *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."*

**Fig 2 :35:** *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

**Fig 11 :36:** *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."*

**Fig 11 :56:** *"Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept."*

The IUCN Red List category is a frame reading, a convention that classifies high risk (IUCN Red List homepage, opened 2026-11-23: *"The IUCN Red List Categories and Criteria are intended to be an easily and widely understood system for classifying species at high risk of global extinction"*). It is not the ground. The ground is whether the lineage actually persists, measured by a census, a counter, a demographic rate. A trait study that uses Red List status as its outcome is reading a frame, and the correlation it finds is one pool talking. **Fig 10 :18:** *"a declared meaning is not a grounded one"* (with :49 *"Declaring a meaning does not ground it."*). Verdict `general` on the anchor rule, `specified` on the ecological application. Triangulated (Fig 2 and Fig 11).

### F8: Two modes of the habitat, and a managed habitat is permanent work

**Fig 11 :58:** *"Maintained. A seat exists and can act: choose the instruments, distil the impactful actors, introduce what was not there. That is the garden, and it is how arrival is worked on rather than waited for."*

**Fig 11 :61:** *"The seat's power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."*

**Fig 11 :63:** *"Which is why a managed ecosystem is permanent work rather than a solved state."*

**Fig 11 :66:** *"Isolation is not removal of the habitat. It is substitution of one habitat for another."*

**Fig 11 :68:** *"what you failed to reproduce is invisible until the goal fails"*

**Fig 11 :69:** *"what you unintentionally introduced is invisible until it acts"*

Conservation is the maintained mode. This is why the question has practical force even though the standing list is refused: a seat can introduce (corridors, supplementary food, captive propagation, managed fire) but cannot subtract the habitat, and a substituted habitat carries silent failures. The unmaintained mode of F7 and the maintained mode of F8 are two panels of the same figure, not a contradiction (see S1 in §5). Verdict `specified`. Single-source on the figure side (Fig 11), with the Greenspan et al. 2022 microbiome study (Animal Microbiome, open access, abstract read 2026-11-23) as a genuinely low-overlap corroborator for dependency: *"extinction risk factors such as habitat specialization, narrow environmental tolerances, and exposure to anthropogenic disturbance may homogenize host-associated microbial communities critical for stress responses including disease defense."*

### F9: Correlations are filters for the budget, not witnesses for the verdict

**Fig 9 :60:** *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

**Fig 1 :22:** *"Aggregating across slots is how a live signal disappears into an average."*

The macroecological literature supplies strong average effects (body size, generation time, range size, specialization). Those averages decide which species get studied first; they do not decide why a particular species crosses the threshold. A per-slot verdict still requires enumerating that species' habitat and checking the channel to its ground. Verdict `general` on the filter rule. Triangulated across Fig 9 and Fig 1. Refuter: a single averaged coefficient that correctly reorders every species-slot under a documented habitat substitution.

### F10: What survives, and the `gap`

| surviving claim | mode | figure | status |
|---|---|---|---|
| Vulnerability is a relation between species and habitat, not a trait carried in isolation | `general` structure, `specified` binding | Fig 11 :39-40 | triangulated (Fig 4 :20) |
| The standing list flips valence with the residual | `general` | Fig 11 :49-51 | single-source figure + world corroboration |
| The habitat must be enumerated; contact cascades outward | `specified` | Fig 11 :43-48, :52-54 | single-source figure + DDT corroboration |
| Narrow closure leaves no reachable adaptive term | `specified` | Fig 6 :21, :23; Fig 8 :32 | single-source doctrine + pooled world witness |
| Small library gives low support and few reachable terms | `specified` | Fig 1 :20; Fig 13 :115 | triangulated + experimental evolution |
| Long generation time decays the channel while the ground does not | `specified` | Fig 7 :35-36; Fig 10 :24 | triangulated + world corroboration |
| The anchor is persistence, not a Red List category | `general`/`specified` | Fig 2 :29; Fig 10 :18 | triangulated (Fig 11 :36) |
| Which concrete traits occupy the slots, and their effect sizes | `gap` | Fig 9 :32; Fig 13 :134 | no figure line governs |

**Fig 9 :32:** *"you get a kind of thing, never the answer itself."* The figure returns a separator, not a roster. This is a `gap` of the shape-not-a-name kind, not unreachable-in-principle, and not silence.

---

## 3. Pre-registered refuter (written before the conclusion)

Required by the figures' own discipline: a falsifier written before the run is a design instrument. This section was drafted before §4. The shape claim is refuted if any of the following holds:

1. **Invariant valence.** A named trait keeps the same sign for extinction risk across a documented change of residual (a change of environment that alters what the ground pays). This breaks Fig 11 :49-51.
2. **Agent-only sufficiency.** Extinction probability is invariant across a habitat substitution that removes all contact with the relevant condition, with no silent failure and no unchosen actor. This breaks Fig 11 :39-40 and :66-69.
3. **No cascade.** A second-order or third-order contact effect (a contaminant, a mutualist loss, a predator release) fails to reach a species whose enumeration predicted it. This breaks Fig 11 :52-54.
4. **Closure escape by composition.** A specialist whose closure lacks a fitting term nevertheless reaches that term by internal composition alone, with no import, no new atom, and no source gate. This breaks Fig 6 :21 and Fig 8 :32.
5. **Channel that does not decay.** A generational loop tracks a moving optimum with zero lag while the environment changes faster than the generation time and no import occurs. This breaks Fig 7 :36 and Fig 10 :24.
6. **Anchor captured by a frame.** Red List status changes the measured population trajectory rather than merely reporting it, so the frame moves the ground. This breaks Fig 2 :29-34.
7. **Union collapsed to partition.** One lever clears all overlapping conditions (small population, small range, narrow niche, long generation) with no categorically different residue. This breaks Fig 9 :54-57.

If any fires, the shape is wrong and the claim is withdrawn. Until one is run, no part of this folder is `grounded`.

---

## 4. Recommendation

1. Lead with the refusal, not the roster. State that the question as posed asks for a standing list and that Fig 11 :51 refuses it; offer the separator instead.
2. Keep the four domain verdicts separate (§2 F2 to F8). Do not average them into a single vulnerability score; a score is a filter for the budget (F9).
3. Enumerate the habitat for any species to which the shape is applied. Use Fig 11 :45-47 as the checklist (actors, conditions, relations), and read the list off the world (Fig 11 :48).
4. Anchor on persistence measured at the ground, never on a category (F7). If a study uses Red List status, mark it as a frame reading and reduce its evidentiary weight.
5. Pre-register the refuter (§3) and send it in the first contact, before any theory (Fig 10 :52: *"Bring a characterised residual, never the source."*).
6. Treat conservation as the maintained mode (F8). Introduction is available, exclusion is not, and a substituted habitat carries two silent failures.
7. Report the `gap` honestly (F10). No figure line names the concrete trait list or its effect sizes.

---

## 5. Canonical usage check, strains and re-census

Two local framework files were read after §§0 to 3 and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` and the metalaw reading carried into the folder. The README says the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them"* and that *"the quotes are the authority, not this summary."* It also gives the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*

### Strains and their resolution

- **S1: Fig 11 :36/:56 (nothing selects; selection ran) versus Fig 11 :58-61 (a seat acts; introduction available).** Re-census: these are two modes named inside the same figure, unmaintained (:56) and maintained (:58). The conservation question lives in the maintained mode; the underlying extinction process in the unmaintained mode. Different objects, no strain. The framework essay *The Recursive Self-Improvement Trap* confirms this in prose: *"Natural selection is what the loop looks like when there is no one maintaining the ground. When there is no one in the Ground Maintainer seat, the environment is the only selector."*
- **S2: Fig 11 :49-51 (trait valence relative to residual) versus the ordinary word "trait" and the macroecological correlations.** Re-census: a correlation is a statement about an averaged pool, and Fig 9 :60 makes it a budget filter. Fig 1 :19 makes the real object a per-slot residual. The Cardillo 2005 finding that the sign and the drivers change above a ~3 kg threshold is evidence *for* residual-relative valence, not against it. No strain after re-census; the apparent conflict was between a pooled filter and a per-slot verdict.
- **S3: Fig 6 :21 (composition cannot add an atom) versus observed rapid adaptive evolution.** Re-census: adaptation that recombines standing variation composes inside the closure; a genuinely new resistant allele is an import (a mutation is a new atom, with its own provenance and shadow test). Bell and Gonzalez 2009 show rescue within 25 generations from standing and new variation. Both figure lines hold at their proper object. No strain.
- **S4: Fig 12 :117 (isomer) applied to two species with the same trait inventory.** This is a live type question, not a resolved strain. Traits may compose as typed bonds, or merely co-vary as an ingredient list. `06_isomers_and_order.md` states the condition and a falsifier. Named, not hidden.
- **S5: "shape, not a name" applied to ecological traits.** The canonical phrase governs a *missing* primitive: *"what a missing thing would have to look like (a shape, not a name)."* Naming an already-observable trait (body size, dispersal, generation time) is a binding from the ecology frame onto an available term, provenance-bearing, not the invention of a new primitive. Overstatement corrected and preserved in `05_what_shape_means.md` §5.

### Canonical usage check on the refusal

The figures README says the framework returns a shape and *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* It says *"Indiscernibility is not identity."* Fig 13 :134 says *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39 says *"So a search that finds nothing is never a proof of absence."* So F10's `gap` is a legitimate verdict: the figures return the separator, the instrument that would name the concrete list is owed, and the absence of a figure line is not taken as a claim that no trait matters.

### Retractions and confirmations log

| earlier reading | status after the canonical check |
|---|---|
| "Find the vulnerable traits" as a list request | **Retracted as a domain.** X1 has no non-updating anchor (Fig 2 :29) and is refused by Fig 11 :51. Replaced by a four-domain separator. |
| "Trait is a property carried by the species" | **Retracted at first reading (S2).** Valence is residual-relative (Fig 11 :49). Kept visible because the ordinary word invites the error. |
| "Small population means a small Γ" | **Narrowed and confirmed.** It is small closure and low support per slot (Fig 1 :20, Fig 6 :21), not merely few individuals. |
| "Fig 11 :36 contradicts Fig 11 :58" | **Retracted as a strain (S1).** Two modes named in the same figure. |
| "shape, not a name forbids naming body size" | **Retracted and corrected (S5).** It governs missing primitives, not bindings onto observable terms. |
| F1 refusal of the standing list | **Canonically confirmed.** Fig 11 :51 plus the README's shape-not-a-name limit. |
| F7 anchor is persistence, not a category | **Canonically confirmed.** Fig 2 :29 and the ground/habitat distinction in Fig 11 :73. |
| F10 `gap` | **Canonically confirmed as a verdict**, not silence (Fig 13 :134, Fig 8 :39). |
| Isomer claim | **Live condition retained (S4).** Not upgraded to triangulated. |

### Round trip to the formula

The eight-step loop was run once per domain. SEARCHED first: no figure line returns a concrete trait list after a genuine census of all 13 figures and both tables. INWARD: the instrument is a per-species, per-slot persistence measurement with a source-discriminating design, which the world literature says is hard (Alexander et al. 2014: *"few clear-cut empirical examples"*; *"the difficulty of ascertaining whether phenotypic change has a genetic basis"*). OUTWARD: the conservation-biology and evolutionary-rescue frames are imported in effect terms, with their own provenance and overlap recorded in `10_source_ledger.csv`. Importing a trait list from a pooled macroecological regression would add an atom that was not needed (Fig 6 :24: *"A wrong atom costs more than starting from primitives."*). The three routes are kept distinct (Fig 6 :31: *"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."*).

### Final status of this audit

The figure-derived shape is internally consistent with the verbatim text and survives re-census with one live type condition (S4) named. The literal standing list is a `gap`, the structural claims are `specified` or `general`, nothing is `grounded`, and the pre-registered refuter in §3 is unchanged from its first draft. This is a simulated derivation, not a ground reading.
