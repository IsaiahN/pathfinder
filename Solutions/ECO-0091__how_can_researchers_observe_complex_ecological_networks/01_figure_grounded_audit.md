# Figure-grounded audit: observing rare, hidden, hard-to-measure ecological interactions

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is simulacra and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. All figure quotes below were read from the local verbatim extract this session. World sources are in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The observer holds a library Gamma: a vocabulary of species, interaction types, and detection instruments, with a belief b about which interactions exist. For each action a (a survey, a trap night, a sequence run, an isotope assay), the library predicts Gamma(b,a). The ground returns o'. The residual is

> R = |Gamma(b,a) - o'| per slot s

The slot matters more than the total. The question says many interactions are **rare, hidden, or difficult to measure**. Those are not three ways of saying "small R." They are three different failures of contact:

- **Rare** means the interaction registers at low frequency. The slot is in the closure and is occasionally observed. More of the same observation, distributed, will find it. This is a SEARCHED problem.
- **Hidden** means the interaction has never registered on this instrument at any resolution (below ground, nocturnal, microbial, soft-bodied prey fully digested, a parasitic or indirect link). The slot is not in the reachable set of the current closure. A new or extended instrument is owed, from a frame whose closure differs.
- **Hard to measure** means the interaction registers but at a cost in actions that the budget cannot pay: weak, diffuse, context-dependent, or three steps out in a cascade. The bond is real, and settling it is expensive.

An answer that treats these as one quantity commits the aggregation error Fig 1 names. Section 1 census, then Findings F1 to F12 derive before concluding.

---

## 1. Domain census (before any figure line is chosen)

### 1.1 R by arity, symmetry, scale

- **Arity:** many slots. One slot is one species pair under one interaction type (pollination, predation, parasitism, competition, mutualism, dependency). R is a vector over slots, never a scalar.
- **Symmetry:** mixed. Competition and mutualism approximate the symmetric bond `+` (both hold at once); predation, parasitism, and pollination are ordered (`->`, A then B, or `=>`, A produces B). A network that stores only an undirected adjacency has thrown away the bond type, which Fig 12 :5 says is "the rest of the information."
- **Scale:** two scales. First order is the pairwise interaction detected at a site. Second order is the network property (connectance, nestedness, modularity, robustness) composed from settled first-order links. Crossing the membrane between them is lossy (Fig 4).

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 Observation and instruments | field observers, camera traps, eDNA/metabarcoding, diet DNA, stable isotopes, telemetry, experiments | observations o' that reduce R per slot | **yes:** the interaction web that does not move when a method or a model changes | perception and instrument reach |
| D2 Habitat and ecology | species, conditions (season, temperature, water, terrain), relations (pollination, predation, competition, dependency) | contact, energy flow, influence | **yes:** what survives, what actually interacts | enumerate the habitat, read off the world |
| D3 Inference and verification | independent method frames, observers, reviewers, data archives | agreement and residual | **yes:** the same non-updating interaction web | triangulation, not negotiation |
| D4 Budget and composition | sampling effort, PCR replicates, sequencing depth, assay cost, time | actions (a second currency, not bits) | **yes:** what the budget can actually settle | price the mechanism, not just describe it |

Each domain has a nameable anchor: a ground that does not update on what an observer thinks. So each is a domain. A "fifth domain" of pure observer opinion was refused at census: with no anchor it is not a domain, it is panel 1 of Fig 2.

### 1.3 Partition or union

**Union, not partition.** Rare, hidden, and hard-to-measure overlap. A rare nocturnal cryptic predator is rare (low encounter rate), hidden (invisible to diurnal visual survey), and hard to measure (small biomass, degraded traces). A single lever clears the region where only one condition holds and leaves the intersections standing. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :4-5: disagreements that do not shrink with effort "are not one hard question but several well-formed ones. Split it rather than search." So verdicts are kept per domain and never averaged into one "network is well observed" score.

### 1.4 Order by dependency (Fig 3)

1. **Perception:** can the instrument tell an interaction from what was there before? (Fig 3 :4-5)
2. **Vocabulary:** does the observer have a term for what an interaction affords, that is, what can be trapped, sequenced, isotope-traced, or experimentally tested? (Fig 3 :6-8)
3. **Objective:** can the observer say what counts as progress in its own terms, that is, a drop in R on a named slot? (Fig 3 :9-11)
4. **Planning:** which probe goes to which slot? (Fig 3 :12-13)
5. **Learn and carry:** name what worked, verify it, and carry the method (not the occasion) to the next site (Fig 3 :14-16).

The chain is "ordered by dependency, not by importance" (Fig 3 :20). Most effort in ecological monitoring lands at steps 4 and 5, where the instruments already exist. The break is usually between 1 and 2: a hidden interaction has no instrument, and "A link with no instrument is not a link that works. It is a link nobody has looked at" (Fig 3 :27). Optimising a link that already works cannot rescue one that does not (Fig 3 :19).

---

## 2. Figure census

| figure | bearing | verdict / use |
|---|---|---|
| 1 The Agent | residual indexed per slot; frame-internal coverage metrics disqualified | governs D1 and the anti-averaging rule |
| 2 The Ground | anchor must not update; independence is low overlap; correlation disqualifies a verdict | governs D3 and the outreach rule |
| 3 Dependency Chain | order by dependency; a link with no instrument is unassessable | governs the census order and the break location |
| 4 The Membrane | methods cross up, recordings do not; round trip gap R_T | governs cross-scale network properties and what monitoring can carry |
| 5 Mint Pipeline | three guards as a product; MDL bargain | governs when a new method-term is licensed |
| 6 Closure / Reachability | mint cannot add an atom; import moves the wall; instruments improved from worse ones already returning something | governs the rare versus hidden split |
| 7 Room Chain | agreement is variation, not a verdict; next room selected against surfaced residual | governs multi-method sequencing |
| 8 Union Surplus | closure idempotent; search that finds nothing is not absence; surplus needs differing closures and a described residual | governs why one method cannot close the union |
| 9 Leave / Arrive | split a union; describe the residual before choosing a frame; filters for budget, witnesses for verdict | governs the split and the method lookup |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access; bring a characterised residual | governs D3 and stage-1 outreach |
| 11 The Habitat | habitat enumerated, never composed; contact cascades; valence relative to residual; capability is agent-and-habitat | governs D2 |
| 12 The Bond | bond carries information; isomer, catalyst, cycle, functional group; two currencies do not add | governs method analogues and cost |
| 13 Minimum Viable Set | network is a held structure atom; set closed, arrangements not; unreachable is a verdict | governs the refusal of a standing method list |
| Operators table | `->` order, `+` symmetry, negation | governs bond typing of interactions |
| Symbols table | R is always a slice; what cannot be perceived is residual | governs the hidden condition |

Strained readings are named, not smoothed over, in section 6.

---

## 3. Findings

### F1 - The residual must stay indexed per interaction slot (decisive against the one-coverage-number answer)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :13: "a global R near zero with one live slot residual is a legal state"

Symbols table :38-40: "what cannot be perceived yet is residual and simply cannot be read"

A study can report high overall detection coverage and still be blind to a single disappearing pollinator link. Summarising the network with one connectance or one completeness percentage is the named failure: the live slot disappears into the average. The honest report is a vector of per-slot residuals with the live slots listed.

**Refuter:** show that for this question R is genuinely scalar, that is, that one interaction's non-detection has no consequence for any other slot and the observer has no reason to locate it. Contact cascades (F7) make that unlikely, but a demonstrated independent-slot ecosystem would break this finding.

### F2 - Hidden interactions owe an instrument, not more of the same search

Fig 6 :21: "MINT composes inside the closure and can never add an atom."
Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."
Fig 6 :33: "Nobody specified a telescope from an account of Mars."
Fig 6 :34-35: "the search for a proto-instrument is a search for one that is already there."

If nothing at any resolution has registered the interaction, there is no edge to extend from inside the current frame. The remedy is outward: import a method from a frame whose closure differs (molecular diet analysis, eDNA, isotope tracing, acoustic monitoring), with a source gate and a shadow test. The method must explain a gap the old one left. Fig 8 :53: "Residual first, frame second." Describe the effect (a soft-bodied prey item invisible to morphology, a below-ground link invisible to transect survey) before choosing the frame, or any method will seem to fit.

**Refuter:** exhibit an instrument designed from a pure description with no prior worse instrument returning anything, or show that the hidden interaction is already registered at some resolution by the current method and merely misfiled. Either breaks the claim that an import is owed.

### F3 - Rare is a SEARCHED problem; the remedy is more search, not a new atom

Fig 6 :49: "more search at the same reach: is it in here and unfound? The closure does not change."
Fig 6 :50: "Distribute the search, and keep the searchers independent."
Fig 8 :42: "Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."

A rare interaction that has been seen once is in the closure. Importing a new method against a budget limit adds an atom that was not needed, and a wrong atom costs more than starting from primitives. The correct response is repeated, distributed, independent sampling: more trap nights, more PCR replicates, more sequencing depth, with searchers kept independent so they are not one searcher wearing many names (Fig 6 :53-54).

**Refuter:** show that all additional sampling draws on one evidence pool (the same site, the same observer, the same primer set with identical bias), so that "more search" buys only more spelling. Then independence, not quantity, is the owed atom, and this finding narrows to F6.

### F4 - Hard to measure is a two-currency problem

Fig 12 :125: "A composition costs in two currencies, and they do not add."
Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."

A short description of a diffuse interaction can be cheap in bits and take a whole field budget to settle. A long chain of cheap detections can be expensive to describe and cost one action to refute. "Neither figure predicts the other, so both are read or the choice is made blind" (Fig 12 :129). Reporting only method sensitivity (bits) while ignoring assay and field cost (actions) is the error this names. A filter such as a sensitivity threshold is for the budget, never a witness for the verdict (Fig 9 :60).

**Refuter:** exhibit a single accounting in which description cost and action cost are commensurable for this question, with an exchange rate derived from the ground rather than declared. Until then the two readings are held apart.

### F5 - The three conditions form a union with intersections

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57: "A case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

A single lever clears only the region where one condition holds. The intersection of rare and hidden needs distributed search *with* an imported instrument; the intersection of hidden and hard-to-measure needs an instrument whose detection cost is affordable. Verdicts are per condition and per intersection, never averaged into a single observation-quality score.

**Refuter:** show a partition, that is, a method assignment that covers every slot with no overlap and no residual compound left at the intersections. Then the union finding is retracted to a partition finding.

### F6 - The anchor is the interaction web, not agreement between observers

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Two observers reading the same field report are one frame. Two instruments pointed at the same interaction are two frames. Agreement among methods that share a sample, a primer, or a detection threshold is the pool talking. Independence is one quantity read twice: it decides both whether agreement means anything and whether the union has surplus (Fig 8 :48). The anchor is whether the interaction actually occurred, which does not move when a reviewer thinks it did.

**Refuter:** show a case in ecology where inter-observer consensus, with all observers drawing on the same evidence, changes the world rather than the report. No such case is known here; if produced, the anchor rule is re-censused, not merely softened.

### F7 - The interaction list is read off the world, not composed

Fig 11 :43: "The habitat is enumerated, never composed."
Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :47: "relations: pollination, predation, competition, dependency"
Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

A standing list of "the interactions that matter" is exactly what the habitat rule forbids. Valence is relative to the residual (Fig 11 :49): the same actor is a pollinator for one residual and a competitor for another, so "No standing list of good actors survives a change of residual" (Fig 11 :51). Contact cascades: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out" (Fig 11 :52-53). An observation design that enumerates only direct links is blind to the link that matters.

**Refuter:** derive an interaction from the standing list alone, with no reading off the world, and show it registers at the ground. That would make the list a generator rather than a remembered habitat.

### F8 - Capability lives in observer-and-habitat, not the observer alone

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone"
Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

Buying a better camera does not improve observation if it is never placed where the interaction occurs. A sharper primer does not help if the DNA has degraded before sampling. Improvement that does not change contact changes nothing. The unit of improvement is the observer together with the habitat it is pointed at.

**Refuter:** produce an observer-only change that moves the ground (changes which interactions register) without any change in habitat, placement, timing, or contact. The capability claim fits known cases and has not been tested forward, so this remains a live falsifier.

### F9 - The chain usually breaks between perception and vocabulary

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
Fig 3 :20: "The chain is ordered by dependency, not by importance."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Ecological monitoring has excellent instruments for the links that already work (visual transects, standard traps) and weak instruments for the links that afford a hidden interaction. Effort lands above the break because that is where the measurements already exist. Before asking how good the network estimate is, ask which link it currently stops at and whether that was measured or assumed (Fig 3 :29-30).

**Refuter:** show a study whose chain demonstrably continues past perception and vocabulary into objective, planning, and verified carrying, for the very slot whose interaction was said to be hidden. Then the break was assumed, not real.

### F10 - Describe the effect before choosing the method

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"
Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause"
Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 8 :53: "Residual first, frame second."

The framework returns a kind of thing, not the name of the method. "Use eDNA" is not a conclusion the figures deliver. What they deliver is the shape: for an interaction invisible to morphology, an instrument whose closure includes molecules rather than hard remains; for a rare link, a distributed independent search. Naming metabarcoding, camera trapping, or isotope analysis is a binding from the methods frame onto a held shape, provenanced as such (see `05_what_shape_means.md` section 6).

**Refuter:** derive a named instrument from the residual alone with no import from a methods frame and no provenance. Until then any named method is a candidate binding, not a figure output.

### F11 - What crosses scales is a method, never a recording of one occasion

Fig 4 :20: "Only the actors, the currency and the anchor change."
Fig 4 :22: "Only methods cross up. Only head starts come down."
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Per-slot detections settle at first order. Network-level properties (connectance, nestedness, modularity, robustness) are second-order compositions. The transform loses information; that is the point. Carrying a field season's recording upward looks like knowledge and is a description of one occasion. What may cross is a reapplicable method. The round-trip gap R_T between "interaction detected" and "network property inferred" must be measured, not assumed zero (see `11_audit.md`).

**Refuter:** exhibit a network property that is recoverable from the per-slot detections without loss, so that T_E compose T_A is the identity and R_T is zero. That would dissolve the membrane for this case.

### F12 - Methods over a fixed atom set are isomers; some are catalysts

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
Fig 12 :119: "catalyst. A part that survives its own use."

Camera traps, diet metabarcoding, and stable isotope analysis can be written over the same atom set: a detection event, a consumer, a resource, a channel, a cost. They differ in the bond between consumer and resource (direct image, molecule, isotope ratio) and in what survives use. A camera trap and a primer protocol are catalysts: they survive their own use and are reused across sites. A consumptive gut-content sample is a spent part. Nothing in the method list records which a term is. See `06_isomers_and_order.md`.

**Refuter:** show two methods with the same atom set and the same bond whose results differ on a settled interaction, or show that a consumptive assay regenerates itself. Either breaks the isomer or catalyst reading.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. The shape claim is **refuted** if any of the following holds:

1. **Per-slot refusal:** a single global detection-coverage number is shown to preserve every live slot's information, so no interaction can hide inside an average (breaks F1, Fig 1 :19/:22).
2. **Instrument refusal:** a hidden interaction is shown to be resolvable by search alone at the current closure with no imported frame, or an instrument is built from a pure description with no prior worse instrument returning anything (breaks F2, Fig 6 :21/:32).
3. **Union refusal:** a partition of rare, hidden, and hard-to-measure is demonstrated with no residual compound at the intersections (breaks F5, Fig 9 :54-57).
4. **Anchor refusal:** agreement among methods sharing one evidence pool is shown to change the interaction web rather than the report (breaks F6, Fig 2 :40).
5. **Habitat refusal:** an interaction list is derived from a standing catalogue with no reading off the world and is confirmed at the ground (breaks F7, Fig 11 :43/:48).
6. **Scale refusal:** a network property is recovered losslessly from per-slot detections, giving R_T = 0 (breaks F11, Fig 4 :30).

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Report residuals **per interaction slot**. Publish the live slots, not one coverage score (F1).
2. Split the union before choosing a method. Ask first: rare, hidden, or hard to measure, and which intersection (F5).
3. For rare, distribute independent search. For hidden, import an instrument with a source gate and a shadow test. For hard to measure, price both bits and actions (F2 to F4).
4. Enumerate the habitat outward to second order; never work from a standing interaction list (F7).
5. Range each method separately against the non-updating ground; do not pool agreement as corroboration (F6).
6. Carry methods across scales and measure the round-trip gap (F11).
7. Keep the named method as a provenanced binding. The figures return a shape, not an instrument brand (F10).
8. Figure 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator (the residual, the split, the refuter), not the field report.

---

## 6. Canonical usage check, strains, and retraction log

Two local sources were read after the first five sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` ("the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw") and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (the seat reads the ground; it does not ask the anchor to rule on what the figures already decide).

### Strains and re-census

- **S1, first pass forced the six-term substrate onto ecological networks.** The first draft read "network" in Fig 13 as a command to map ecological actors onto the six primitives. Re-census: network is a *held structure atom* ("that entities relate, and influence travels", Fig 13 :24). Ecological actors are habitat members enumerated under Fig 11, not the six primitives. Two different objects, no contradiction. Kept visible here rather than erased.
- **S2, "shape, not a name" initially read as a ban on naming any method.** The canonical phrase governs a *missing* primitive. Naming metabarcoding or camera trapping is a binding from the methods frame onto a held shape, licensed by provenance and a shadow test, not an invented seventh primitive. Narrowed in `05` section 6 and `06` Q1. The earlier overstatement is preserved here.
- **S3, "search finds nothing" versus "hidden means no instrument."** Not strained after re-census. Fig 8 :39 says a null search is not proof of absence; Fig 6 :34 says no proto-instrument can be built from nothing. Fig 8 governs the verdict from a null search; Fig 6 governs where a new instrument comes from. Different quantities.
- **S4, Fig 1 per-slot residual versus network-level connectance.** Re-census: Fig 1 governs the object-level signal; Fig 4 governs the lossy crossing to a network property. R_T in `11_audit.md` records what the crossing drops. No contradiction.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "one detection method can close the question" | **Retracted.** F2, F5, Fig 6 :21, Fig 9 :54-57. The union has intersections that one closure cannot reach. |
| "more sampling always helps" | **Narrowed.** True for rare (F3), false for hidden (F2) and budget-limited hard-to-measure (F4). Kept both forms visible. |
| "shape, not a name forbids naming a method" | **Retracted as overstatement.** Narrowed to missing primitives. Naming a method is a provenanced binding (S2). |
| "six-term set maps onto ecological species" | **Retracted (S1).** Re-census assigns the network atom to Fig 13 and the species list to Fig 11. |
| "interaction list can be derived from a standing catalogue" | **Refused at census.** No anchor, hence not a domain (Fig 11 :43/:48). |
| "hidden interactions are just rare ones" | **Refused.** Different instruments are owed (Fig 6 :32 versus Fig 6 :49). |
| no last room (Fig 7, Fig 13) | **Confirmed.** No universal observation protocol is final; each habitat re-opens the residual. |
| "unreachable is a verdict, not a silence" | **Confirmed.** Fig 13 :134. The method name stays a gap until a ground settles it. |

---

## 7. Gap declaration

No figure line selects a named instrument, a sampling intensity, a primer, a detector, or a universal method mix. Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence." The specific method that fills a slot is a `gap` of the shape-not-a-name kind, reported as unreached rather than silently filled. It is not a failure of the derivation; it is the honest limit of what the figures can decide. What would move it: a ground reading in which a named method registers, with provenance and an independent frame ranged against the same non-updating interaction web.
