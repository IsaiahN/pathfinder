# Figure-grounded audit: ECO-0054, habitat corridors and connectivity

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries a mode. None is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the ecology question it reports on (see `05_what_shape_means.md` §6).

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; cited as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_SEAT_MAP_Field_Guide_amended.md` (local). World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). For a corridor decision:

- **b** is the expectation of connection held by the planner or by the organism: a resistance surface, a least-cost path, an assumption that a strip of habitat will carry individuals.
- **a** is the action: build, restore, retain or widen a corridor, or do nothing and leave the patches isolated.
- **Γ(b,a)** is what the connectivity model predicts: a movement rate, an F_ST, an interaction rate, a speed of spread.
- **o′** is what the ground returns: genetic assignment and F_ST, fruit set and seed rain, predation or parasite incidence, mapped fire or pathogen spread.
- **s** is the slot: a species pair, a patch pair, a mutualism, a pathogen, a fire event. R is indexed per slot, never pooled.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not corridor use but **the divergence between predicted and observed connection across slots and across orders of effect**. A frame that predicts "corridors always connect" or "corridors always harm" has a residual here: it fits some slots and fails others in a structured way.

State the residual as: *why does the gap between what a corridor is expected to connect and what the genetic, interaction and disturbance data actually show stay small in some species-slots and grow quickly in others, and why does it grow at a different rate for gene flow than for disease or fire?* This names no mechanism and no villain. Candidate names (conduit, drift fence, disease highway, genetic rescue) are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), written before the run: the answer would be a change in contact, a valence relative to a named residual, and a cascade across at least three orders of effect, with an instrument for each order. It is now bound, so the pre-registered refuter in §4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the admissible kinds: *"A measurement, an experiment, a counter, a market, a patient outcome."* For this question they are a genetic assay, a marked-recapture count, a fruit-set count, a disease incidence survey, a fire map. Expert opinion about the value of corridors moves when pushed, so it is an instrument at best. Fig 2 :30: *"you push on it, it is not an anchor."* Note the crucial distinction in Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."* A corridor is a change to the habitat, not to the ground. Treating the corridor itself as the thing that settles an argument is the category error this audit is built to avoid.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is at least a four-place relation: patch pair, species or process, action, time. It carries an **ordered** bond (`→`, sequence, Fig 12 :72: *"A then B; B needs A to have happened"*) because movement precedes gene flow and contagion, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) because "connected" and "isolated" are thresholds relative to a baseline, not absolutes.
- **Symmetry.** A corridor is not symmetric in its operands. The same strip is a conduit for one residual and a barrier or a sink for another. Contact is asymmetric in time: building it is available, removing the contact it creates is not (Fig 11 :61-62).
- **Scale.** Three scales are in view: the individual crossing a strip, the population exchanging genes, the landscape over which a pathogen or fire moves. The membrane between them is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured rather than assumed zero (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Contact and movement** | dispersing individuals, pollen, seeds, spores, propagules | crossings per unit time | yes: mark-recapture, telemetry, fluorescent pollen or seed marks | admitted |
| **D2 Population genetics** | alleles, genotypes, demes, effective population size | gene flow versus drift | yes: F_ST, heterozygosity, assignment tests | admitted |
| **D3 Species interactions** | pollinators, seed dispersers, predators, parasites, competitors | interaction rate and its demographic consequence | yes: fruit set, seed rain, predation or parasite incidence | admitted |
| **D4 Disturbance spread** | pathogens, fire, invasive species, synchronized fluctuations | spatial incidence and rate of advance | yes: mapped incidence, time-to-first-detection | admitted |
| **X1 Corridor quality as an intrinsic property** | the strip of habitat | "goodness" | **no** anchor independent of a named residual | not a domain yet, absorbed into D1-D4 |
| **X2 Connectivity as one scalar score** | the landscape | a single index | measurable, but it is already a pooled reading of D1-D4 | absorbed, not separate |

X1 fails the anchor test. This is a structural exclusion, not a claim that corridor quality never matters: it matters *relative to a residual*, which is exactly Fig 11 :49-51. X2 is measurable but is a pooled reading (Fig 10 :26), so it cannot be a domain of its own.

### 1.3 Partition or union

The four domains overlap. D1 and D2 overlap because movement is the input to gene flow. D2 and D3 overlap because a mutualism changes effective population size and hence drift. D3 and D4 overlap because a pathogen is an interaction and a disturbance at once. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) contact is actually established, (C2) an atom crosses the previously closed boundary, (C3) the crossing changes an interaction or a demographic rate, and (C4) a contagious process can now travel the same path. A corridor failing only C1 and one failing only C4 are not different degrees of one failure. They need different instruments. This is why the exemplar's habit of keeping verdicts per domain and never averaging them is followed here.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can we detect that the strip is used?), 2 vocabulary (do we have a term for what the strip affords to *this* species?), 3 objective (what would count as connection here: a crossing, an allele, a fruit set, a slowed fire?), 4 planning (which corridor design), 5 learn and carry. The middle link is where this field is weakest: presence and movement are easy to record, but "what would count as progress" differs per residual, and a single scalar connectivity score stands in for a grammar it cannot express. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most corridor effort lands above the break, where the measurements already exist (Fig 3 :29-30).

The second-order dependency order follows the cascade in Fig 11 :52: contact is first order, gene flow and interactions second order, disturbance spread third order. A reading taken at third order without a first-order measurement is not a strong reading, it is a reading of nothing (Fig 3 :22-23).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing, not mechanism |
| 2 The Ground | genetic and incidence data are the anchor; agreement is not | governs anchor and witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs individual to landscape transfer |
| 5 Mint Pipeline | three guards as product; settlement; fifth kind (refuted) | governs "corridors are good" as a held term owed a refusal |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs the crossing of a closed boundary |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs repeated monitoring of the same corridor type |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs the import and the union |
| 9 Leave / Arrive | union versus partition; describe the residual before naming a frame | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings | governs monitoring failure and the scalar score |
| **11 The Habitat** | **enumeration, valence relative to residual, cascade, asymmetry, isolation as substitution** | **decisive for all four domains** |
| 12 The Bond | sequence, catalyst, cycle; arrangement is the substance | governs cascade order and the carrier of a pathogen |
| 13 Minimum Viable Set | network as a structure: relations and influence travel | governs why a corridor is a structure, not a substance |
| Operators / Symbols | → sequence, ⋛ comparison, network, habitat, anchor | notation for the above |

**Strain test applied during the census.** An early attempt to map "gene flow" onto Fig 13's *network* and "disturbance" onto *gradient* only fit by calling an allele a kind of energy and a fire a kind of spent gradient. That is a strain, so Fig 13's six-term physical substrate does **not** govern these ecological quantities directly. Re-census sent Fig 13 to two narrower roles: (a) the structural fact that a network is the relation across which influence travels, and (b) the honest-stop rule that the set is closed and the arrangements are not (Fig 13 :115). No other figure needed a strain after re-census (see §6, strain S1).

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about corridors, `grounded` only if settled by a measurement. None is `grounded`.

### F1: A corridor is an introduction to the habitat, not the removal of isolation

**Mode: `general`. Domains D1, D4. Status: triangulated (Fig 11 asymmetry/isolation and Fig 6 import, low topical overlap).**

> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."** (Fig 11 :67)
> **"The seat's power is asymmetric. Introduction is available; exclusion is not."** (Fig 11 :61)
> **"Which is why a managed ecosystem is permanent work rather than a solved state."** (Fig 11 :63)

Building a corridor does not subtract a barrier; it adds a contact and thereby substitutes a new habitat for the old isolated one. The manager chooses the introduction, not the actors that arrive through it. This is why a corridor is a permanent maintenance obligation and why "we connected them, so the job is done" is a category error. Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

**Refuter:** a documented case in which a corridor removes a contact without substituting another habitat, with no new actor arriving and no new ground pressure. If that exists, F1 is false.

### F2: The same corridor is a benefactor to one residual and a malfactor to another

**Mode: `specified`. Domains D1 to D4. Status: triangulated (Fig 11 valence and Fig 9 filter/witness rule, low overlap).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

The corridor is an actor in this sense. To a target species whose patches are demographically isolated it is a benefactor (Fig 11 :52, the DDT example shows why first-order scoping is not enough). To a pathogen, an invasive ant or a fire front it is a malfactor. "Corridor quality" is therefore not an intrinsic scalar; it is a relation between a strip and a named residual. The world corroborates from two independent pools: Christie and Knowles (2015) find that *"species interactions can play a greater role than corridor design in shaping the genetic responses of populations to corridors"*, and the Oxford Biology summary of Firth et al. (2025) reports that *"Connectivity often helps populations persist, yet it can also create pathways for pathogens."*

**Refuter:** a corridor whose measured valence is invariant and positive across a documented change of residual (for example the same strip improving gene flow and also slowing the spread of every pathogen and every fire that uses it). No such case is claimed here.

### F3: Contact cascades: first-order enumeration misses the effect that mattered

**Mode: `specified`. Domains D1, D3, D4. Status: triangulated (Fig 11 cascade and Fig 12 cycle, distinct roles).**

> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** (Fig 11 :52)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

The three parts of the question are not three aspects of one effect. They are successive orders of a cascade. Movement is first order. Gene flow and pollination or seed dispersal are second order, and Tewksbury et al. (2002) demonstrate the linkage experimentally: *"corridors not only increase the exchange of animals between patches, but also facilitate two key plant–animal interactions: pollination and seed dispersal"*, and *"Increased fruit set and seed movement between connected patches have additive effects on gene flow and population dynamics."* Disease and fire are third order, where the sign of the loop may reverse. Conservation Corridor (2026) states the same asymmetry in practitioner terms: *"In the same ways that corridors may facilitate movement of rare, endangered, or declining species, they may also increase dispersal of unwanted species, such as invasive species, or antagonists (predators or diseases) of conservation targets."*

**Refuter:** a corridor system in which first-order movement counts alone predict third-order pathogen or fire incidence with no additional term for the carrier's biology. If that holds generally, the cascade claim collapses into a single lever.

### F4: The corridor moves the wall because it lets an atom cross a closed boundary

**Mode: `general` with a `specified` ecology consequence. Domain D2. Status: triangulated (Fig 6, Fig 8, Fig 13, three distinct roles).**

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

An isolated patch is a closure. Waiting longer cannot introduce a new allele into it; that is idempotence. What moves the boundary is an import from a frame whose closure differs: a dispersing individual, a pollen grain, a seed, a propagule. The anchor is the genetic assay, because it can tell whether an atom actually crossed (Fig 2 :29). Manel et al. (2003) define the corresponding ground instrument: *"Understanding the processes and patterns of gene flow and local adaptation requires a detailed knowledge of how landscape characteristics structure populations."*

**Refuter:** a corridor that changes F_ST or heterozygosity with no individual, gamete or propagule crossing a previously closed boundary (no import at all). That would break idempotence and F4 with it.

### F5: Use is not function; a breeding population in the strip does not establish connectivity

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 10 pooled readings, Fig 9 filter/witness rule, Fig 2 anchor).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A presence record is a filter for where to look, not a witness for the verdict. Horskins, Mather and Wilson (2006) supply the cleanest field statement: *"connectivity between connected populations will not always be achieved by the construction or retention of a corridor and that connectivity cannot be inferred solely from the presence of individuals, or breeding populations, within the corridor."* Their 85-year-old corridor had comparable vegetation and breeding populations of two rodent species, yet the connected patches showed the same significant genetic differentiation as isolated ones. The channel can report use while the ground reports no new atom. A scalar "connectivity score" that pools a crossing count with a genetic reading repeats the failure of Fig 1 :22: the live signal disappears into an average.

**Refuter:** a corridor system in which presence and movement alone prospectively predict F_ST and recolonization, per patch and per species, with no genetic or demographic measurement added. If one exists, F5 weakens to a caution.

### F6: The three effects are a union and must keep separate verdicts

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 union rule and Fig 1 per-slot rule).**

Fig 9 :54, :55 and :57 are the governing lines (quoted in §1.3). The four conditions C1 to C4 have different instruments:

- **C1 failure** shows up as a crossing count near zero while the habitat is suitable (Fig 10 :26, saturated metrics miss it).
- **C2 failure** shows up as intact movement with unchanged F_ST, the Horskins et al. result.
- **C3 failure** shows up as movement plus gene flow with no change in fruit set, seed rain or predation.
- **C4 failure** shows up as movement plus interactions with a new pathogen or fire pathway, the Firth et al. result.

A single lever, for example "make every corridor wider", clears the region where only C1 holds and leaves the intersections standing (Fig 9 :55). This is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores all four conditions in all failure types with no categorically different residue left over. That would collapse the union into a partition.

### F7: Monitoring loss is channel failure, not a change in the ground

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"you have lost touch"** (Fig 10 :28)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)

A long-running corridor program that keeps booking the same monitoring room (same taxa, same season, same metric) produces agreement without evidence. The genetic and incidence ground keeps paying or not paying independently of the reviews. The two-factor test from Fig 7 :37-39 applies: *"Progress per handoff has two factors. Zero either and the chain runs in place:"*, namely *"the bracket's fidelity across the handoff"* and *"the ground's pressure on the room"*.

**Refuter:** a monitoring program that keeps the same closure for a decade and still returns new, ground-verified readings of connection without any new instrument or taxon. Under Fig 7 :36 that should be impossible.

### F8: The conflict between disease studies is itself a union, not a contradiction to be averaged

**Mode: `general`. Status: figure-governed; world sources conflict and were returned to census.**

Johnson and Haddad (2011, *Ecology*) report: *"Our results show that worries over the potentially harmful effects of conservation corridors on disease dynamics are misplaced, and that, in a conservation context, many diseases can be better managed by mitigating edge effects."* Firth et al. (2025, reported by Oxford Biology) report that connectivity *"can also create pathways for pathogens"* and cite African swine fever in wild boar. These appear to conflict. The rule is that a conflict sends the derivation back to the census and never flips a verdict (master plan §2).

**Re-census R2.** The two claims are about different residuals. Johnson and Haddad studied a facultative foliar fungal pathogen in an experimental patch system and found edge effects, not connectivity, governed incidence. Firth et al. discuss specialist wildlife pathogens (chytrid fungus, African swine fever) moving through linked landscapes at a different scale. Different pathogen biology, different carrier, different scale, so different slots. They are corroborating evidence for F2's valence-relative claim, not two measurements of one quantity. No verdict changes. A third source, Conservation Corridor (2026), records both sides: *"Evidence to date suggests that some parasites, particularly those that are dispersed by animals, move more frequently between patches connected by corridors"* and also *"there has been no evidence that this reduces the persistence of species in restoration or conservation."* The second clause is the honest stop on the harm side.

### F9: What survives, and what is a gap

| claim | mode | figure | status |
|---|---|---|---|
| R is per species and per patch, never a single connectivity average | general | Fig 1 :19, :22 | figure-derived |
| Genetic and incidence data are the anchor, not corridor advocacy | general | Fig 2 :29, :35 | figure-derived |
| A corridor is an introduction; isolation is substitution | general | Fig 11 :61, :63, :66 | triangulated F1 |
| Valence is relative to the residual, not carried by the strip | specified | Fig 11 :49-51 | triangulated F2 |
| Effects cascade: movement, then genes and interactions, then disturbance | specified | Fig 11 :52; Fig 12 :121 | triangulated F3 |
| A crossing imports an atom into a closure; waiting cannot | general | Fig 6 :21, :23; Fig 8 :32; Fig 13 :115 | triangulated F4 |
| Use is not function; presence alone does not establish connection | specified | Fig 10 :24, :26; Fig 9 :60 | triangulated F5 |
| The three effects are a union, not one question | general | Fig 9 :54, :55, :57 | figure-derived |
| Which specific corridor design wins in a named landscape | not stated | none | **gap**: Fig 9 :32, *"you get a kind of thing, never the answer itself"* |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A corridor removes contact without substituting a habitat and without importing any actor (breaks F1, Fig 11 :66, :61).
2. A corridor's valence stays positive and invariant across a documented change of residual (breaks F2, Fig 11 :49-51).
3. First-order movement counts alone predict third-order pathogen or fire incidence across taxa with no carrier term (breaks F3, Fig 11 :52).
4. Gene flow or diversity changes with no individual, gamete or propagule crossing a previously closed boundary (breaks F4, Fig 6 :21, Fig 8 :32).
5. Presence and movement alone predict F_ST and recolonization prospectively, per species and per patch, without a genetic or demographic anchor (breaks F5, Fig 10 :26).
6. One lever restores all four conditions in all failure types with no categorically different residue (breaks F6, Fig 9 :57).
7. Fig 8's idempotence fails inside a closed set, or Fig 11's habitat is shown to be the ground that settles an argument (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a genetic or incidence ground has paid for the shape in the named slot.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a position for or against corridors (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the four conditions separate in every report. A blended "connectivity score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which order of effect the measurement addresses and whether the anchor was read (Fig 3 :29). Do not fund above the break.
4. Treat "corridor quality" as a relation to a named residual (Fig 11 :49-51), not as a property of the strip. Record which residual each claim is about.
5. Use the corridor literature as one witness pool, not several. Tewksbury et al. 2002, Christie and Knowles 2015, Horskins et al. 2006, Firth et al. 2025 and Johnson and Haddad 2011 come from adjacent ecological fields and share methods, so their agreement is one pool talking (Fig 2 :31, :40).
6. Stop at the shape. Do not name the corridor design that wins in a landscape the derivation has not measured (Fig 9 :32). Fig 13 :134: *"Unreachable is a verdict here, not a silence"*, and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `60_FIGURES_AS_METALAWS.md`, the seat guide, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs §5's stop.
- WATSON 60 confirms that the figures are the ground for design questions and that the seat must not ask an anchor to decide what the figures decide. No ruling was requested in producing this audit.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to map gene flow to Fig 13 network and fire to gradient | **Retracted, strain S1** | Only fit by calling alleles energy and fire a spent gradient. Re-census: Fig 13 governs the physical substrate; here it licenses only the network-as-relation reading and the honest-stop rule |
| Treated "corridors connect populations" as a single finding | **Retracted as a verdict, kept as a hypothesis** | Horskins et al. 2006 shows use without functional connection; the claim must be split into C1 to C4 |
| Read the Johnson-Haddad disease result as refuting the corridor-risk claim | **Conflict, re-census R2** | Different pathogen biology and scale; different slots. Verdict unchanged, F2 corroborated |
| Planned to recommend a corridor width as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Christie and Knowles' width result is a model finding in a named pool, recorded as such |
| Wanted to call Fig 11 :49 a general law of all corridors | **Narrowed to `specified`** | It is a structural claim about valence; no field measurement here pays for the corridor-level version |
| F1 "isolation is substitution" | **Canonically confirmed** | Fig 11 :66 and :67 plus Fig 6 :23; the README's re-census rule keeps the two figures consistent |
| F8 conflict handling | **Canonically confirmed** | Master plan §2 and Fig 9 :57: a conflict returns to the census, never flips the verdict |

**Strains sent to the log:** S1 (Fig 13 applied to ecological flows), resolved by re-census; S2 (treating the corridor as the ground), resolved by Fig 11 :73: the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55 and :57 plus the *Library of Babel* bundle passage: it is a union of contact, import, interaction and contagion, each with its own instrument.
2. **What is the anchor?** Genetic, demographic and incidence data, named in Fig 2 :29. Not agreement about corridors, not a connectivity index (Fig 1 :27).
3. **Is the effect in the corridor alone?** No. Fig 11 :39 and :40: a capability is a property of agent and habitat. An improvement that does not change contact changes nothing.
4. **How does connection happen?** By an import across a closure: a disperser, pollen, a seed, a propagule (Fig 6 :23, Fig 8 :32).
5. **How does it fail at second order?** Movement without an atom crossing, or an atom crossing without a demographic consequence (Horskins et al. 2006; Fig 10 :26).
6. **Why can the same strip help and harm?** Valence is relative to the residual (Fig 11 :49-51); the contagion is a cycle whose sign can close the wrong loop (Fig 12 :121).
7. **What can be said at the stop?** A shape, four conditions with separate instruments, and falsifiers. Not a universal corridor width, not a `grounded` answer. Fig 9 :32: *"you get a kind of thing, never the answer itself."*

---

## 8. Updated verdict

The shape survives: **a corridor changes contact, and its effects unfold in orders. First comes movement; then an import of genes, individuals or propagules into a previously closed population and a change in interactions; then, where a pathogen, invader or fire can use the same path, a third-order spread that can reverse the sign of the benefit. Which of these happens in a named slot is a matter of valence relative to that slot's residual, not a property of the strip. The four conditions are a union and must be measured with separate anchors. Which design wins in a particular landscape is a `gap`, not a hidden answer.** Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (Johnson and Haddad versus Firth et al.) was returned to the census and resolved as different slots. No unresolved strain remains after re-census.
