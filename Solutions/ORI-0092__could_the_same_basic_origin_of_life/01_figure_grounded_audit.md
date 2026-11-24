# Figure-grounded audit: ORI-0092, portability of an origin-of-life pathway

**Mode of this document: `general` for the structural finding, `specified` for any named pathway, `gap` for the exact pathway on a named planet. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* (The Recursive Self-Improvement Trap, 2026-11-19). This document is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Primary: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, and `FRAMEWORK/reference/FIGURES_README_canonical.md`. Secondary: the world sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual in effect terms

R is the gap between a prebiotic habitat and a living, evolving system. The question does not ask whether life arises often. It asks whether a *pathway* P that closed R in one habitat H1 closes R in a different habitat H2.

- **Arity.** Three-place: (P, H, outcome), indexed per planet slot, not aggregated. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Averaging over planets would discard the only signal that says where to look (Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*).
- **Symmetry.** The bonds in a pathway are ordered. Production (⇒) is not reversible and sequence (→) is not symmetric (Fig 12 :73-78, Operators table). The map H → P is therefore not a symmetric join. The only comparison in the question is a threshold: does R reach zero in H2, a ⋛ relation (Operators table: *"a threshold relation between two quantities"*).
- **Scale.** Four levels are in contact: molecular (feedstocks, catalysts), protocell (compartment, replication), planetary (habitat), and the membrane between a working pathway and its re-run in another habitat (Fig 4).

**Bound shape (written before the run, formula step "Direction").** An answer must supply: a substrate-independent operation sequence, a habitat enumerated from H2, and a ground test for whether R closed. This ordinary term is what the refuter in §5 tests.

---

## 1. Domain census

One line per domain with actors / currency / anchor. A candidate with no nameable anchor is not admitted as a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Prebiotic chemistry (laboratory frame) | feedstocks, catalysts, minerals, UV, water | reaction yield, concentration, copy number | measured products in an experiment | admitted |
| D2 Pathway as generator (method / loop) | operations: produce feedstock, activate, polymerise, encapsulate, select, copy with variation | reapplicability, round-trip gap R_T | re-closure of R in a fresh habitat | admitted |
| D3 Planetary habitat | ocean, atmosphere, mineral inventory, energy gradients | flows, gradients, availability | measured planetary conditions (spectra, rover data) | admitted |
| D4 Verification / second-genesis frame | experiments, missions, independent origins | residuals and agreement | the ground, never agreement | admitted, zero independence in this simulated run |
| X1 Life as a free-floating property | none nameable | none | none | not a domain |
| X2 "The one true pathway" | none nameable beyond D2 | none | no census run | not a domain |

**Partition or union.** Union, not partition. The question bundles two conditions: (C1) does the *method* transfer, and (C2) does the *concrete chemistry* transfer. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* A single lever, for example "chemistry is universal", clears C1 and leaves the intersection of C1 and C2 standing. Unbundle before searching (Fig 9 :54).

**Order by dependency (Fig 3).** Enumerate the habitat before evaluating the pathway (Fig 11 :43), then perception → vocabulary → objective → planning → learn and carry (Fig 3 :4-15). The link that usually breaks here is between vocabulary and objective: having terms for what a planet affords and saying what would count as progress toward life. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 2. Figure census (bearing, verdict, triangulation status)

| figure | bearing here | verdict |
|---|---|---|
| 1 The Agent | residual per slot, ground is the only metric | no ground reading for cross-planet transfer |
| 2 The Ground | anchor must not update; independence vs shared pool | mission data is the anchor; simulated seats share one pool |
| 3 Dependency Chain | order by dependency, not importance | enumerate habitat before pathway |
| 4 The Membrane | methods cross, recordings do not; seed and conditions | governs *scale* crossing, an analogue for habitat crossing (strain, see §4) |
| 5 Mint Pipeline | three guards as a product; MDL bargain | no mint occurs; the shape is an existing arrangement, not a new atom |
| 6 Closure / Reachability | import moves the wall; unreachability has two readings | "same pathway on H2" is not composable from H1's library |
| 7 Room Chain | selection between rooms, no last room | agreement among origin-of-life theorists is not a verdict |
| 8 Union Surplus | convergent derivation and adopted import look alike | provenance is the whole issue for "same pathway" |
| 9 Leave / Arrive | union vs partition; describe before looking | the question is a union; describe R before naming a planet |
| 10 Ground Maintainer | generator crosses, instance does not; bring a residual | corroborates D2 at a different stratum |
| 11 The Habitat | enumerate never compose; isolation substitutes habitat; valence relative to residual | **governing figure for D1+D3** |
| 12 The Bond | isomer, functional group, arrangement is substance | governs what "same pathway" can mean |
| 13 Minimum Viable Set | different routes to same substance; set closed, arrangements open | corroborates the chemistry reading, same evidence pool as Fig 12 |
| Operators / Symbols | ⇒ production ordered; ⋛ threshold; Γ, R, ground definitions | type check on "pathway" and "works" |

Triangulation status is set per finding below, not averaged across the table.

---

## 3. Findings

### F1 - The question is a union, so "yes / no" is the wrong form (decisive for framing)

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

C1 (method transfer) and C2 (concrete chemistry transfer) are different questions with different anchors. A verdict of "yes, the same pathway works" collapses them. The honest form is two separate verdicts kept apart:

- C1: the operation sequence can be re-applied in H2. Mode `general`. Status candidate.
- C2: the same molecules in the same bond order with the same catalysts close R in H2. Mode `specified`. Status candidate, and the default expectation is no.

**Refuter:** show that C1 and C2 are one condition, namely that re-applying the method in H2 never changes a single atom or bond relative to H1. If that holds, the union reading is wrong and the question is a partition.

### F2 - The habitat is enumerated, never composed, and isolation is substitution (governing finding)

Fig 11 :43: *"The habitat is enumerated, never composed."*
Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*
Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."*
Fig 11 :67: *"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."*

You cannot derive H2's habitat from P or from H1's habitat. You read it off H2. Moving R from H1 to H2 substitutes a habitat; you inherit H2's actors, including the ones you did not select. So "same pathway" cannot be a claim about replaying P; at best it is a claim about re-running a method against a newly enumerated habitat.

**Refuter:** demonstrate that H2's habitat is composable from P alone, or that moving R to H2 leaves the actor set unchanged. Either breaks Fig 11 :43 and :66.

**Status:** `single-source` for the habitat law (Fig 11 alone). Corroborated at a different stratum by Fig 10 :68 *"a generator crosses, an instance does not, and the level it lands on remakes it"*, so the *method versus instance* half is `triangulated` across Fig 11 and Fig 10, with the caveat that both are framework figures.

### F3 - Actor valence is relative to the residual, so the same actor is not the same intervention

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*
Fig 11 :51: *"No standing list of good actors survives a change of residual."*

A mineral, a UV dose, or a wet-dry cycle that helped close R in H1 can be neutral or destructive in H2. This is not a detail about chemistry, it is the rule that prevents carrying a recipe. It also explains the practical failure mode: a catalyst stockpiled in H1 can become a sink in H2.

**Refuter:** exhibit an actor whose measured valence toward R is invariant across two habitats with disjoint solvent, atmosphere, and mineral sets. This is the cleanest ground-level falsifier in the packet.

**Status:** `single-source` for the valence law (Fig 11 :49-51). It is one of the claims the framework's own bibliography notes has no outside citation, so it must be stated as a framework prediction, not a measured fact.

### F4 - "Same pathway" has two figure-licensed readings: isomer or functional group

Fig 12 :94: *"The arrangement is the substance."*
Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
Fig 13 :121: *"Different routes can arrive at the same substance."*
Fig 13 :124: *"the same ingredients under a different bond are a different substance."*

Two readings of "same basic pathway" survive:

1. **Isomer reading.** Same feedstock set (for example HCN, sulfite, ferrocyanide, UV, minerals), different bond order and different catalysts, yielding a functionally equivalent living system. This is Fig 12 :117. It is the strongest form of "same pathway" the figures license.
2. **Functional-group reading.** Same operation shape (produce feedstock, activate, polymerise, encapsulate, select, copy with variation) with different atoms in the slots. This is Fig 12 :124. It is weaker but more likely across very different oceans and minerals.

The reading that fails is **identical molecule list and identical bond order in H2**, because the bond carries information the operands do not.

**Refuter:** show that two living systems with identical atom sets but different bond orders behave identically in every measurable respect, or that Fig 12's bond term carries no information for prebiotic networks. The level move from a molecule to a pathway is licensed by Fig 12 :104 *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."*, but whether a whole pathway counts as a molecule at that level is a `specified` assumption, not a measurement.

**Status:** `triangulated` between Fig 12 and Fig 13 for the chemistry shape, **with an overlap warning**: both figures cite the same Liebig and Wöhler isomerism case (Fig 12 :97-98; Fig 13 :122-123), so that pair is one evidence pool, not two witnesses. The cross-figure support with Fig 11 (habitat) is low-overlap and carries the verdict.

### F5 - What you failed to reproduce and what you unintentionally introduced are invisible until they act

Fig 11 :68: *"what you failed to reproduce is invisible until the goal fails"*
Fig 11 :69: *"what you unintentionally introduced is invisible until it acts"*
Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

A laboratory demonstration of P under H1-like conditions is a substituted habitat. It proves the wiring of the reactions, not that the pathway would close R in H2. This is the figure's own reason for demanding a ground reading in the new habitat rather than an argument by analogy.

**Refuter:** a synthetic or laboratory solve that closes R in H2 under measured H2 conditions with no unenumerated condition introduced by the experimenter. Until one is run, the lab result is wiring, not capability.

**Status:** `single-source` (Fig 11 :70), corroborated by the world source on assembly theory under a different method (see §7 and `09_watson_answer.md`).

### F6 - Which pathway closes R in H2 is a `gap`, not a hidden answer

Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 13 :134: *"what it returns is a shape rather than a name."*
Fig 13 :135: *"Unreachable is a verdict here, not a silence,"*
Fig 6 :39: *"What is unavailable is a sensor for something that has never registered anywhere, at any resolution. That is the whole of it."*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

The figures return the shape an answer must have, not the name of the pathway on a named planet. Naming one would require a ground reading (a second genesis observed, or a controlled experiment under H2 conditions). Searching harder inside the H1 library cannot manufacture the H2 atom (Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*).

SEARCHED / INWARD / OUTWARD kept distinct, per formula step 7:

- **SEARCHED:** is a working pathway already in our closure and unfound? Check the existing catalog of prebiotic routes under H2 conditions first. The closure does not change.
- **INWARD:** can an existing instrument be sharpened to read H2's concentrations and gradients? The instrument must already be returning something (Fig 6 :34-35).
- **OUTWARD:** find a frame whose closure differs. Here that is a different habitat or a different chemistry, characterized in effect terms (Fig 6 :30: *"Cast it in effect terms."*).

**Status:** `gap` declared after a genuine re-census, triangulated across Fig 9, Fig 13, Fig 6, and Fig 8. Unreachable is a verdict.

### F7 - Agreement among origin-of-life researchers cannot settle it

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 7 :13: *"agreement compounds, evidence does not"*

The anchor is the experiment or the observation of a second genesis, not the consensus of a room. In this simulated run all seats draw on the same figure text and the same essays, so their agreement is one pool talking.

**Refuter:** a demonstrated case where expert agreement, with no new ground reading, correctly changed the state of R. Agreement may set a budget for an experiment (Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*), never the verdict.

### F8 - Filters are not witnesses

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
Fig 1 :23: *"The ground enters as the only metric."*

Tractability scores, how famous a laboratory is, how many papers cite a pathway, and how many planets resemble Earth are budget filters. They choose what to try first; they do not say whether P closes R in H2.

**Refuter:** any argument whose conclusion depends on a count, a ranking, or an authority rather than on a measured residual.

---

## 4. Strain and re-census: Fig 4 membrane versus Fig 11 habitat

The first draft of this audit used Fig 4 :22 *"Only methods cross up. Only head starts come down."* to govern cross-planet portability. That is a strain. Fig 4's membrane runs between **scales** (one agent and a population, Fig 4 :3 *"The same machine at two sizes"*), not between **habitats** (two planets with different chemistry). Forcing it to govern H1 → H2 would make one figure do another figure's work.

**Re-census.** The governing figure for cross-environment transfer is Fig 11 :66-70 (isolation is substitution of a habitat; you inherit actors you did not choose; a test harness proves wiring, not capability). Fig 4 and Fig 10 are retained as **analogues at a different stratum**: they say what crosses when a method moves between sizes, which is the same shape but not the same quantity. This matches the canonical rule that a reading which makes figures contradict one another has misidentified its domain.

A second, smaller strain: Fig 12's isomerism is defined for molecules, while a pathway is a composition of molecules. Fig 12 :104 licenses the level move, but it remains `specified`. Both strains are recorded, not smoothed.

---

## 5. Pre-registered refuter (written before the conclusion)

Per the seat-map rule, a falsifier written before the run is a design instrument. The shape claim is the conjunction of C1 and C2 as separated in F1. It is refuted if any of the following holds:

- **R1.** A single concrete pathway (same molecular set, same bond order, same catalyst roles) demonstrably closes R in two habitats with disjoint solvent, atmosphere, and mineral sets, measured, with no unenumerated condition introduced (breaks F4 and F5).
- **R2.** A claimed universal method fails to re-close R in a fresh habitat after every condition its goal required was reproduced and measured (breaks C1 and F2).
- **R3.** An actor's valence toward R is invariant across a documented change of habitat and residual (breaks F3).
- **R4.** A habitat is shown to be composable from the pathway alone, or moving R to H2 leaves the actor set unchanged (breaks F2).
- **R5.** Expert agreement, with no new ground reading, correctly changes the state of R (breaks F7).

If any fires, the shape claim is withdrawn or narrowed. Until one is run, no part of it may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with the union split (F1). Do not answer the question yes or no. Give the two verdicts separately.
2. State that the habitat must be enumerated from H2, not carried from H1 (F2, F3).
3. Offer "same pathway" only in the isomer or functional-group sense (F4). Refuse identical-atom-identical-bond portability.
4. Declare `gap` on the exact pathway for any named planet (F6). Report what would close it: a second genesis observed, or a controlled experiment under measured H2 conditions.
5. Send the generator, the shape claim and the refuter, not a recording of one successful laboratory route (Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion."*).
6. Use filters for budget only (F8), and record the strain in §4 so a later reader can see where Fig 4 was demoted to an analogue.

---

## 7. Canonical usage check and retraction / confirmation log

Two sources govern how the figures may be used and were read after the first sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary"*; a reading that makes figures contradict one another has misidentified its domain; the framework returns *"a shape, not a name"* and stops at the limit of what instruments distinguish.
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop and the mode rule; step 7 separates SEARCHED, INWARD and OUTWARD; the Habitat note says *"Valence is relative to R, not carried. Introduction is available; exclusion is not. Isolation substitutes a habitat, it does not remove one."*

| earlier reading | status after canonical check |
|---|---|
| Fig 4 membrane governs cross-planet portability | **Retracted and demoted to analogue.** Fig 11 is the governing figure; §4 records the re-census rather than erasing the first reading. |
| "the same pathway could work" as a single verdict | **Refused as a union collapse.** F1 splits C1 from C2. |
| isomerism proves identical chemistry transfers | **Refused.** Fig 12 :117 says same atoms plus different bond gives different substance; transfer is of the method or of the functional group, not of the exact arrangement. |
| naming a specific H2 pathway | **Declared `gap`.** Fig 9 :32 and Fig 13 :134-135 forbid a name where only a shape is held. |
| "expert consensus decides" | **Refused.** Fig 2 :29, :35, :40. |
| Fig 12 versus Fig 13 as two witnesses | **Downgraded to one evidence pool.** Both cite Liebig and Wöhler; their agreement is not independent corroboration. |
| Fig 11 valence law as a measured fact | **Declared a framework prediction.** The canonical article lists it among claims with no outside citation. |
| C1 method transfer, triangulated | **Confirmed** across Fig 4 :22-25 and Fig 10 :68, at different strata. |
| C2 concrete transfer refused, triangulated | **Confirmed** across Fig 11 :66-70 and Fig 12 :117 / :124 with Fig 13 :121, :124, low overlap between habitat and bond figures. |

### Round-trip note (measured qualitatively in `11_audit.md`)

Sending up the figure set and bringing back down the single sentence "the same pathway works on other planets" drops at least three constraints: the union split, the habitat enumeration requirement, and the isomer-versus-identical distinction. The round-trip gap R_T is nonzero and is recorded in `11_audit.md`.

---

## 8. Updated verdict (summary)

The shape survives. **Only the generator crosses between habitats; the concrete pathway does not.** What recurs on a planet with a very different ocean, atmosphere, and mineral inventory is an isomer or a functional analogue, found by re-enumerating that planet's habitat, not by replaying the Earth recipe. Which exact pathway would close R on a named planet is a declared `gap`, unreached rather than unreachable. Everything is `general` on the structural claim, `specified` on any named pathway, and `gap` on the specific route. Strains after re-census: two, named in §4, none hidden.
