# Figure-grounded audit: EAR-0028, plankton, food webs and the ocean carbon cycle

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the marine question it reports on. No measurement was taken here; all measurements cited are from sources actually opened and recorded in `10_source_ledger.csv`.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the ocean state before the change: temperature, stratification, dissolved inorganic carbon, alkalinity, nutrient supply, plankton community composition and size structure.
- **a** is the perturbation asked about: a change in plankton abundance, community composition, or food-web coupling.
- **Γ(b,a)** is what the current library of pumps predicts will happen to carbon: solubility pump, soft-tissue biological pump, carbonate counter-pump, and circulation and ventilation.
- **o′** is what the ocean actually does: air-sea CO2 flux and the surface-to-deep dissolved inorganic carbon inventory.
- **s** is the ocean region and the carbon pool. R is indexed per region and per pool, never as one global number.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The question asks whether a biological perturbation could "substantially" alter the ocean's role. That word is a threshold relation between two quantities (Fig 12 :87, ⋛, *"a threshold relation between two quantities"*). The residual is therefore: *does any part of the departure between the physics-only prediction and the observed carbon flux arise from the biological actors, and how large is that part relative to the whole sink?* This is an effect description. It names no species, no "diatoms", no "krill", no "blue carbon". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) an enumeration of the distinct conditions that bear on the ocean's carbon role, (ii) the sign of each biological effect on two different quantities, the natural carbon gradient and the anthropogenic sink, and (iii) an instrument that discriminates a biological change from a physical one. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."* Model consensus, narrative and prestige move when pushed; they are instruments at best. Viable anchors: measured air-sea CO2 flux (SOCAT), the DIC inventory (GLODAP), sediment-trap and O2/Ar export estimates, and the plankton record (CPR, DNA). The measured inventory is what settles the question; the models are frames ranged against it (Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."*).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a many-place relation: pump state, biological actors, physical forcing and observed flux, indexed by region and pool. It carries a **sequence** bond for the path of carbon (fixed at the surface, exported, remineralised, returned by upwelling; `→`, Fig 12 :72, *"A then B; B needs A to have happened"*), a **comparison** bond for "substantially" (`⋛`, Fig 12 :87), and a **network** for the food web (Fig 13 :24, *"that entities relate, and influence travels"*). It is not a set of independent ingredients.
- **Symmetry.** Not symmetric. Biology and physics are not interchangeable operands, and "substantially" is a threshold against a second quantity, not a symmetric join. A change in plankton is not the reverse of a change in circulation.
- **Scale.** Several strata are in view: the mixed layer, the mesopelagic zone, the deep ocean and the sediments; and seasonal to millennial times. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30). Fig 12 :104 makes level-relativity explicit: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."*

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Biological pump** (surface plus export) | phytoplankton, zooplankton, bacteria, viruses; grazing, aggregation, remineralisation | POC and DOC export, transfer efficiency, remineralisation depth | yes: sediment traps, 234Th disequilibrium, O2/Ar net community production | admitted |
| **D2 Solubility and carbonate pumps** | CO2, seawater, carbonate ions; the air-sea gradient | dissolved inorganic carbon, pCO2, alkalinity, buffer capacity | yes: pCO2 observations (SOCAT), DIC and alkalinity titration (GLODAP) | admitted |
| **D3 Physical circulation and ventilation** | currents, mixing, stratification, upwelling, overturning | carbon transport, residence time, nutrient supply | yes: Argo and BGC-Argo floats, tracers, reanalysis products | admitted |
| **D4 Food-web relations** (network) | grazers, predators, mixotrophs, parasites, viruses; predation, competition, dependency | transfer efficiency, coupling strength, valence | yes: gut contents, stable isotopes, co-occurrence networks, mesocosms | admitted |
| **D5 Observation and model frame** (ground maintainer) | models, instruments, observers, data syntheses | residual between prediction and measured flux | yes: the measured ocean carbon inventory, which does not update on model opinion | admitted |
| **X1 Plankton as one uniform actor** | a single biomass or chlorophyll number | carbon fixed | **no** anchor for "the plankton" as one thing; plankton is a diverse habitat, not an actor | re-census into D1 and D4 |
| **X2 The ocean as one well-mixed box** | a global mean sink | one aggregate flux | a global mean is a pooled reading that hides the per-slot residual (Fig 1 :22) | absorbed into D2 and D3, not separate |

X1 fails the anchor test and is re-censused, not discarded: the figures require enumeration (Fig 11 :43, *"The habitat is enumerated, never composed."*). X2 is absorbed because the anchor of the question is measured per region and per pool, and the global mean is a summary of those, not a separate ground.

### 1.3 Partition or union

D1 and D4 overlap: the food web is inside the biological pump, so their overlap is a compound with its own loop. D2 and D3 overlap: solubility and circulation compose a flow together (Fig 13 :76, *"Energy and a gradient compose a flow."*). D1, D2 and D3 all bear on the same observed flux, so a single lever cannot clear all of them. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The critical unbundling, and the one the world literature actually forces on us, is between two different quantities that the question conflates:

- **Q1, the natural surface-to-deep carbon gradient.** Biological fluxes set most of it. Resplandy, Lévy and Bopp 2026 report that *"The biological carbon pumps explain ~90% of the present-day surface-to-deep increase in carbon, while the solubility pump only explains the remaining 10%."*
- **Q2, the contemporary anthropogenic sink.** Physics and chemistry set it. The same source reports that *"human-driven changes in the biological pump have only a small effect on the air-sea CO2 flux [<0.15 GtC/year], more than an order of magnitude smaller than the anthropogenic carbon sink (+2.70 GtC/year)."*

A change in plankton can be large for Q1 and small for Q2 without any contradiction. They are different quantities with different instruments. Treating them as one question is the bundle that Fig 9 :54-57 forbids.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

Order for this question: 1 perception (can we measure the flux and the plankton?) → 2 vocabulary (do we have terms for what the changed community affords: size, coupling, valence?) → 3 objective (what would count as "substantially": a threshold comparison against which quantity?) → 4 planning → 5 learn and carry. The middle link, having terms for what a changed community affords and saying what would count as a substantial change, is the one with no instrument. Most effort lands above the break on flux measurement and model intercomparison, because that is where the instruments already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, never a global average |
| 2 The Ground | measured carbon inventory is the anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | level-relativity, lossy transform, R_T | governs scaling from organisms to basins |
| 5 Mint Pipeline | three guards as product; "nothing new here" | governs whether a new mechanism is owed |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs adaptation and invasion as new atoms |
| 7 Room Chain | same closure handed along; agreement compounds | governs model ensembles that agree by shared construction |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the honest stop |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs observing-system failure |
| 11 The Habitat | habitat enumerated; relations named; contact cascades; valence relative | **decisive for the food-web cascade** |
| 12 The Bond | cycle sign, catalyst, isomer, functional group, level-relativity | **decisive for the pump's sign and for community structure** |
| 13 Minimum Viable Set | energy plus gradient compose a flow; set closed, arrangements not; unreachable is a verdict | governs the physical substrate and the honest stop |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to plankton functional types only fit by calling a diatom a "state" and grazing a "gradient". That is a strain, so Fig 13 does **not** govern a taxonomic list. Re-census sent Fig 13 to the physical-substrate and honest-stop roles only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about the ocean carbon cycle, `grounded` only if settled by a measurement. None is `grounded` by this derivation.

### F1: The question is a union of conditions, not one lever

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 9 and Fig 1, low overlap: union rule vs per-slot indexing).**

Fig 9 :54, :55 and :57 are quoted in section 1.3. The two conditions that must be separated are Q1 (the natural gradient, mostly biological) and Q2 (the anthropogenic sink, mostly physicochemical). A single lever, for example "more plankton means more carbon uptake", clears the region where only Q1 holds and leaves the Q2 intersection standing (Fig 9 :55).

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

**Refuter:** a single intervention that changes Q1 and Q2 by the same factor in every region, with no categorically different residue left over. That would collapse the union into a partition.

**World bearing (secondary only):** Resplandy, Lévy and Bopp 2026 state that *"The misconception that ecosystems and the biological pump contribute to the ocean carbon sink largely stems from the conflation between the mean state of the carbon cycle... and the human-driven changes in these fluxes"*. This corroborates the unbundling from a low-overlap ground (a global carbon synthesis), not from the framework.

### F2: The habitat is enumerated, and contact cascades beyond the first trophic step

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat enumeration vs cycle structure).**

> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)
> **"relations: pollination, predation, competition, dependency"** (Fig 11 :47)
> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** (Fig 11 :52)
> **"Carson, Silent Spring, 1962. The mechanism, biomagnification through the food chain to eggshell thinning, was established over the following decade."** (Fig 11 :54)

The figure's own worked case is a marine-style food-chain cascade: DDT reached eagles three steps out. So a change at the plankton base is not confined to the base. Predation, competition and dependency are named relations, and the residual that matters can be several steps from the actor that changed. This is the strongest single figure-grounded point in the solution, and it is low-strain: no renaming is needed to read a food web off Fig 11.

**Refuter:** a documented change in plankton composition whose cascade demonstrably stops at the first trophic step, with no change in export, remineralisation depth or flux attenuation anywhere downstream. Under Fig 11 :52 that should be impossible; if observed, F2 is false.

**World bearing (secondary):** Benedetti et al. 2021 report that *"nearly 40% of the phytoplankton and zooplankton assemblages are replaced by poleward shifting species"* and that about 40 percent of species associations are reshuffled, producing *"potentially novel species interactions"*. Ostle et al. 2022 find that *"long term variability in the CO2 sink in the North Atlantic is associated with changes in phytoplankton abundance and community structure."* Both corroborate the cascade, with the first a global model study and the second a 1982 to 2020 in situ record, so they are not one evidence pool.

### F3: The ocean's carbon role is a property of community and habitat, not of plankton alone

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 11 and Fig 4, low overlap: capability vs membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

Asking whether plankton alone can alter the sink is an agent-only framing. The sink is a property of the biological community and the physical habitat together. The world states the same thing in different words: Ostle et al. 2022 conclude that *"The role of phytoplankton role in this process is dictated by the community composition (predominantly diatoms in the North Atlantic), the latitude (subpolar systems drawing down more carbon) and by large-scale hydro-climatic processes operating over multidecadal scales."* Community, latitude and climate are exactly the habitat axes.

**Refuter:** a controlled case in which a plankton-only change moves the measured sink while temperature, stratification, DIC inventory and nutrient supply are held fixed across a habitat substitution. If it survives, F3 is false.

### F4: Valence is relative to the residual; the same change can strengthen or weaken the sink

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 11 and Fig 12 :121, low overlap: habitat valence vs cycle sign).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

In carbon terms, there is no standing list of good plankton. A group that increases export in one state can reduce it in another, and the sign depends on the residual asked about (Q1 or Q2) and on the rest of the community. The world provides a direct sign-flip observation. Armstrong McKay et al. 2021 report that *"interactions with carbonate chemistry cause opposite sign responses for the carbon sink in both cases: TDR leads to a smaller sink relative to default runs (-∼1.0%), whereas ECOGEM leads to a larger sink (+∼0.2%)."* In their model, adding temperature-dependent remineralisation increased POC export yet reduced the sink, while adding trait-based plankton ecology decreased POC export yet increased the sink. Export and sink are different quantities, and the sign flips between them.

**Refuter:** a plankton group whose measured valence on carbon export is invariant across a documented change of residual and community context. If no such change of valence can be found, F4 weakens to `general`.

### F5: The biological pump is a cycle, and the sign of the loop decides whether it closes

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 12 and Fig 13, low overlap: bond structure vs physical flow).**

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)
> **"Energy and a gradient compose a flow."** (Fig 13 :76)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

The soft-tissue pump is not a one-way chain. Carbon is fixed, exported, remineralised and returned by upwelling; the loop closes only if the return does not cancel the export. Armstrong McKay et al. 2021 state the consequence explicitly: *"Although the biological pump itself does not act as a carbon sink when in long-term equilibrium (as exported carbon is returned to the surface by upwelling on millennial timescales), a change in biological pump strength would create a transient carbon sink if it enables accumulation of carbon in the deep ocean before a new equilibrium state is reached."* A nutrient that is regenerated is a catalyst in Fig 12 :119's sense; a nutrient buried is a spent part. Nothing in the nutrient's description records which.

**Refuter:** a demonstration that in a given ocean basin the pump is a one-way chain in steady state with no return flux, or that a regenerated nutrient does not behave as a catalyst across uses. That breaks F5 and the cycle reading with it.

### F6: Two communities with the same species but different bonds are isomers

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 12 plus two low-overlap world sources).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)

A species inventory is an ingredient list. If two communities hold the same species but differ in coupling, who grazes whom and how tightly, they are isomers under Fig 12 :117: the difference is invisible in the inventory and decisive in the export. If they share only a pattern, such as large cell plus grazer plus fast sinking, they are members of one functional group, the qualifier saying which member.

Lin et al. 2017 supply a direct, low-overlap test. They find that *"as few as two or three key OTUs, i.e. large diatoms, Phaeocystis, and mixotrophic/phagotrophic dinoflagellates, can explain a large majority of the spatial variability in the carbon export potential (76–92%). Moreover, we find based on a community co-occurrence network analysis that ecosystems with lower export potential have more tightly coupled communities."* Using specific OTUs rather than broad functional groups raised explained NCP variance from 35 percent to 92 percent. The Woods Hole OCB summary of Bach et al. reports that *"degradation rates changed maximally 15-fold over the course of the study while sinking speed changed only 3-fold"*, an unexpectedly large effect of community composition on the fate of sinking carbon.

**Refuter:** two communities with identical atoms and identical measured bonds whose export diverges with no difference in habitat contact or imported atoms. That would move the explanation out of composition and into habitat alone.

### F7: "Substantially" is a threshold, and the framework returns a shape, not a name or a number

**Mode: `general` for the limit, `specified` for its application here. Domain D5. Status: triangulated (Fig 9 and canonical README).**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."** (Fig 12 :112)

The canonical usage rule adds the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments cannot distinguish. No figure line yields the numeric magnitude that would make a plankton change "substantial". IPCC AR6 WG1 Chapter 5 states the ground's own position: *"There is low confidence in how changes in the biological pump will influence the magnitude and direction of the ocean carbon feedback."* So the numeric threshold is a `gap`, not a hidden answer: the instrument that would attribute a flux change to biology is characterized in effect terms but is not held here.

**Refuter:** a figure line that governs the numeric magnitude of the biological contribution to the sink after a genuine re-census. If found, the `gap` closes and F7 is withdrawn.

### F8: The residual is per pool and per region, never a global average

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and the level-relativity of Fig 13).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A global mean sink of roughly 2.5 PgC per year is a useful budget filter and a bad verdict. It hides opposing regional behaviour. Ostle et al. 2022 report *"opposing trends in productivity between the subpolar and subtropical North Atlantic"*. Carroll et al. 2022 show the same level-relativity numerically: *"When integrated across the full ocean depth, the 24-year DIC mass increase of 64 Pg C (2.7 Pg C year−1) primarily tracks the anthropogenic CO2 growth rate, with biological processes providing a small contribution of 2% (1.4 Pg C). In the upper 100 m, which stores roughly 13% (8.1 Pg C) of the global increase, we find that circulation provides the largest DIC gain (6.3 Pg C year−1) and biological processes are the largest loss (8.6 Pg C year−1)."* Biology is small at one level and the largest loss at another. Averaging across levels throws away the only signal that says where to look.

**Refuter:** an averaged global statistic that predicts prospectively and per region which pool will change next under a biological perturbation. If one exists, the methodological consequence of F8 is false.

### F9: Conflict between the world and the naive reading, resolved by re-census

**Mode: `general`. Status: figure-governed.**

Resplandy, Lévy and Bopp 2026 say the ocean sink *"is not determined by the biological production of marine and blue carbon ecosystems or the subsequent burial in sediments"* and that human-driven biological change is *"more than an order of magnitude smaller than the anthropogenic carbon sink"*. Read literally as an answer to "could plankton substantially alter the ocean's carbon role", that conflicts with the cascade finding of F2 and with the common claim that plankton drive the sink. A conflict between world and figures sends the derivation back to the census; it never flips the verdict (section 6, re-census R1). The re-census resolves it: the two sources are about different quantities at different levels, Q1 and Q2 of section 1.3. Fig 12 :104 licenses the level-relativity, and Fig 11 :52 licenses the cascade. Both findings stand, kept separate. The figures decide the shape of the answer; the measurement decides the magnitude. No world source was allowed to flip a figure verdict.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per region and per pool, never a global average | general | Fig 1 :19, :22 | figure-derived |
| The measured carbon inventory is the anchor, not model agreement | general | Fig 2 :29, :35; Fig 1 :23 | figure-derived |
| The question is a union of conditions, not one lever | general | Fig 9 :54, :55, :57 | figure-derived |
| Contact cascades through the food web beyond the first step | specified | Fig 11 :43, :44, :47, :52 | triangulated F2 |
| The carbon role is community-and-habitat, not plankton alone | specified | Fig 11 :39, :40; Fig 4 :20 | triangulated F3 |
| A plankton group's valence is relative to the residual | specified | Fig 11 :49, :50, :51 | triangulated F4 |
| The pump is a cycle whose sign decides whether it closes | specified | Fig 12 :121; Fig 13 :76 | triangulated F5 |
| Same species, different bonds give a different substance | specified | Fig 12 :5, :117, :124 | triangulated F6 |
| The numeric threshold for "substantial" | not stated | none after re-census | **gap**, F7 |
| Which named species is decisive in a given basin | not stated | none | **gap**, shape not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A plankton change whose cascade stops at the first trophic step with no downstream change in export, remineralisation or flux (breaks F2, Fig 11 :52).
2. A plankton-only change that moves the measured sink with the physical habitat held fixed across a substitution (breaks F3, Fig 11 :40).
3. A plankton group whose valence on carbon export is invariant across a documented change of residual and community context (breaks F4, Fig 11 :49-51).
4. A basin where the pump is demonstrably a one-way chain with no return flux, or a regenerated nutrient that does not behave as a catalyst across uses (breaks F5, Fig 12 :121, :119).
5. Two communities with identical atoms and identical bonds whose export diverges with no difference in contact or imported atoms (breaks F6, Fig 12 :117).
6. A single lever that changes both Q1 and Q2 by the same factor in every region with no categorically different residue (breaks F1, Fig 9 :57).
7. A figure line governing the numeric magnitude of the biological contribution after a genuine re-census (closes the F7 gap), or a derivation of one of the six physical substrate terms from the other five (breaks Fig 13 itself).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a source-discriminating measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of the carbon cycle (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep Q1 (the natural gradient) and Q2 (the anthropogenic sink) separate in every report. A single "plankton effect on the sink" number is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Enumerate the habitat outward until the cascade stops mattering; do not scope to the first trophic step (Fig 11 :44, :52).
4. Record bonds as well as atoms. A species list alone cannot distinguish isomer from functional group (Fig 12 :5).
5. Treat the sign of a biological effect as a prediction to be measured, not a property of a species (Fig 11 :51).
6. Use the world literature as one corroborating witness and a budget filter, never as the verdict. The marine carbon sources share syntheses and datasets; the cognition and metatheory sources are framework-internal (Fig 2 :31, :40).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. The numeric threshold is a `gap` with an instrument characterized in effect terms, not a number to be invented. *"Unreachable is a verdict here, not a silence,"* (Fig 13 :134).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs the F7 stop.
- Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."* Seat Map :171: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* These govern the outreach artifacts.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six physical substrate terms to plankton functional types | **Retracted, strain S1** | Only fit by renaming a diatom a state and grazing a gradient. Re-census: Fig 13 governs the physical substrate (energy plus gradient compose a flow) and the honest stop, not a taxonomic list |
| Read Resplandy 2026 as refuting the cascade finding and nearly flipped the verdict | **Conflict, re-census R1** | It governs Q2 (the anthropogenic perturbation), F2 governs Q1 and the cascade. Different quantities and levels. Verdict unchanged, findings kept separate |
| Planned to name diatoms as "the" decisive plankton group | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer; Fig 11 :51 says no standing list of good actors survives a change of residual |
| Read the 0.15 GtC per year number as the answer to the question | **Retracted as a witness, kept as a filter** | It is a world measurement of one quantity at one level, not a figure verdict. Fig 9 :60: filters are for the budget, not the verdict |
| Wanted to call Fig 11 :40 a `general` law about all oceans | **Narrowed to `specified`** | It is a structural claim; no source-discriminating measurement pays for the ocean-level version here |
| Treated Benedetti 2021 and Ostle 2022 as one corroborating block | **Separated** | Different methods, basins and evidence pools; they agree but are not the same witness, and their agreement does not make the figure verdict true |
| F7 row "numeric threshold for substantial" | **Marked `gap`** | No figure line governs a magnitude after re-census. The source essay's metamerism argument applies: an instrument that reads a flux *"cannot comment on the source"* |
| F2 "decisive" in an early draft | **Downgraded to triangulated** | Fig 11 and Fig 12 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to plankton functional types), resolved by re-census; S2 (reading "Energy and a gradient compose a flow" as if the biological pump were a physical state, not a composition at a different level), resolved by Fig 12 :104 level-relativity; S3 (calling the measured inventory "the ground" while the inventory is itself estimated by models), resolved by Fig 11 :73: the habitat updates, the ground settles, and the anchor is the measurement that does not move on model opinion. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: it is a union of conditions, with the natural gradient and the anthropogenic sink as two different quantities.
2. **What is the anchor?** The measured carbon inventory and air-sea flux, named as a measurement in Fig 2 :29. Not consensus and not a global average (Fig 1 :22).
3. **Can plankton be treated as one actor?** No. The habitat is enumerated (Fig 11 :43). Re-census X1 into D1 and D4.
4. **Can the effect stop at the base?** No first-scope reading is licensed. Contact cascades and the residual can be three steps out (Fig 11 :52, DDT and eagles).
5. **Is the sign fixed?** No. Valence is relative to the residual (Fig 11 :49-51), and the loop's sign decides whether the pump closes (Fig 12 :121).
6. **Does a species list decide?** No. Bonds carry the information the ingredients do not (Fig 12 :5); same atoms, different bond, different substance.
7. **What can be said at the stop?** A shape, a union, a cascade, a sign rule and written falsifiers. Not the numeric threshold, not a decisive species, not a `grounded` answer. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **the ocean's carbon role is a union of conditions held by a biological community and a physical habitat; plankton changes propagate through an enumerated food web and can flip the sign of the pump, but the effect has opposite weight on the natural surface-to-deep gradient and on the contemporary anthropogenic sink.** The two quantities are kept separate, never averaged. Which named species is decisive and what numeric change counts as "substantial" are `gap`s at the instrument boundary, not hidden answers. Mode `specified`. No world source flipped a verdict; the one genuine conflict (Resplandy 2026 versus the cascade reading) was returned to the census and resolved as a difference of quantity and level. No unresolved strain remains after re-census.
