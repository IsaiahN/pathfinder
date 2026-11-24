# Figure-grounded audit: ECO-0078, wildlife trade, habitat disruption and disease emergence

**Mode: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries a mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (2026, accessed 2026-11-23): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* Outputs generated this way are *"simulacra"*. This document is checked for internal consistency against the figures. It cannot settle the ecological question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; `FRAMEWORK/figures/THE_FORMULA.md`; `FRAMEWORK/reference/FIGURES_README_canonical.md`. Cite as `Fig N :line`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot `s` (Formula step 1; Symbols table, `R`):

- **b** is what a system takes to be the case before acting: which species are competent hosts, which vectors bite whom, which contacts exist. It is formed from its own history and inherited priors (Symbols table, `b`, `w`).
- **a** is the action: clearing land, fragmenting forest, moving a live animal, mixing species at a market, vaccinating, culling, banning a trade route.
- **Γ(b,a)** is what the library of host associations, transmission models and surveillance categories predicts will happen.
- **o′** is what actually happens: a spillover, a sustained transmission chain, a novel variant, an outbreak that crosses a border.
- **s** is the slot: a host species, a pathogen lineage, a place, a season. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

The phenomenon to explain is a **change in R after an intervention on the contact field**. Stated as an effect: why does the gap between what a host-pathogen system predicts and what it returns stay small in some slots and grow, change sign or open a new slot after animals are moved or habitat is altered?

**Bind the sought-for shape as an ordinary term** before the run (Formula, "Direction"). The answer would be: two categorically different operators on the habitat, one acting by re-enumeration of contacts and one acting by import across a closure boundary; each with a scale at which it operates; plus an instrument that discriminates a failure of one from a failure of the other. Until written down and bound, that shape is a preference, predicts nothing, and no loop check can see it (Fig 5 :62-63, *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term"*). It is now bound, so the refuter in §3 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."* For this question, viable anchors are confirmed outbreaks, seroprevalence, sequence data, vector counts and trade records. Expert opinion, risk scores, model outputs and news volume move when pushed; they are instruments at best. A confirmed case and a deposited genome are anchors because no frame can talk them into moving.

---

## 1. Domain census, before choosing any figure line

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a multi-place relation: pathogen, host, vector, place, time, indexed by slot. It is not a single scalar risk. Any move to one global "emergence risk" number is an aggregation across slots (Fig 1 :19, :22).
- **Symmetry.** The relation is **not symmetric**. Trade has a source and a destination. Emergence has a before and an after. A spillover chain is a sequence, not a set. Fig 12 :71-72: *"A then B; B needs A to have happened"*. A risk judgment is a `⋛` comparison. Fig 12 :85-87: *"a threshold relation between two quantities"*, relative to a baseline, not absolute.
- **Scale.** Four scales are in view: within-host, between-host and population, ecosystem and regional landscape, and the global trade network. Crossing scales is lossy, so the round-trip gap `R_T` must be measured rather than assumed (Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The pathogen frame** (closure of a lineage) | pathogen genotypes, competent hosts, vectors, immune pressures | host range, reproduction number, reach inside closure(Γ) | yes: culture, sequence, infection assay | admitted |
| **D2 The habitat / contact field** (Fig 11) | wild hosts, domestic animals, people, vectors; conditions such as season, terrain, land use; relations such as predation, competition, vector contact | contact rate, cascade distance, valence relative to R | yes: field surveillance, serology, vector counts | admitted |
| **D3 The trade system** (import frame, Fig 6 and Fig 8) | traders, markets, transport, source and destination ecosystems, seized shipments | movement of animals and their pathogens across closures | yes: CITES and LEMIS records, seizure data, genomic tracing | admitted |
| **D4 The verification / surveillance frame** | public health, veterinary and wildlife agencies, sequence databases, researchers | reports, residuals, agreement versus ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Invasive species are harmful per se"** | the species singled out | intrinsic badness | **no** anchor independent of a named residual; Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* | not a domain yet; absorbed into D2 |
| **X2 "Biodiversity loss is always the cause"** | the ecosystem | a single diversity index | partially nameable, but Fig 2 :40 warns that the evidence frames share a pool, and the consensus source shows the sign depends on scale and pathogen type | absorbed into D2 as a condition, not a separate domain |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that a given introduced species never harms a given host.

### 1.3 Partition or union

D2 and D3 overlap: trade moves actors into the contact field, and the field is where an import lands. D1 and D2 overlap: a pathogen meets a new host inside a habitat. D4 observes all three. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1:** an actor crosses a closure boundary (trade or introduction).
- **C2:** the receiving habitat contains a competent host and a contact route (Fig 11 :43-48).
- **C3:** the surveillance channel can register the cascade before it leaves the slot (Fig 10 :24).

A pathogen failing C1, a pathogen failing C2 and a cascade failing C3 are not different degrees of one pressure. They are different compounds needing different instruments. A single "trade volume" score or a single "habitat integrity" index is a filter, and *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* (Fig 9 :60).

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order: 1 perception (can the spillover be detected at all?) → 2 vocabulary (does Γ have terms for the novel host association?) → 3 objective (what counts as emergence, spillover versus establishment versus pandemic?) → 4 planning (trace, contain, ban) → 5 learn and carry. The middle link, having terms for what a situation affords and saying what would count as progress, is the one with no instrument. Effort lands above the break because that is where measurements already exist (Fig 3 :29-30). In this question, that is why most work goes into more sampling and more sequences, and relatively little into the vocabulary that would say what a positive finding would mean.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| **1 The Agent** | residual per slot; aggregation destroys the signal | risk must be reported per host/pathogen/place, not as one global index |
| **2 The Ground** | anchor, independence, two collapses | confirmed cases and sequences anchor; opinion and model consensus do not |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | detection vocabulary is the unmeasured middle link |
| **4 The Membrane** | lossy scale transform; round trip | within-host to global claims carry a measurable `R_T` |
| **5 Mint Pipeline** | three guards as a product; fifth kind (refuted) | emergence is a mint or a refusal, not a discovery of a pre-existing name |
| **6 Closure / Reachability** | import is the only operator that moves the wall | trade is an import; disruption is not |
| **7 Room Chain** | agreement compounds, evidence does not | multiple agreeing reviews are one pool talking |
| **8 Union Surplus** | two frames together reach what neither reaches alone; provenance | the surplus is the new transmission route; source records discriminate |
| **9 Leave / Arrive** | union unbundling; describe before looking; filters versus witnesses | split the two drivers before searching; do not let a risk index decide |
| **10 Ground Maintainer** | the ground does not decay, the channel does | surveillance is an office, not a loop property |
| **11 The Habitat** | enumeration, cascade, relative valence, asymmetric power | disruption changes the enumeration; exclusion is unavailable |
| **12 The Bond** | catalyst, cycle, functional group, route versus state | reservoirs are catalysts; transmission is a route, not an ingredient list |
| **13 Minimum Viable Set** | network as structure; cross-kind composition | spread is a network over states, not a substance |
| **Operators table** | `→` sequence, `⇒` production, `⋛` comparison, `¬` refusal | route, replication and threshold are different bonds |
| **Symbols table** | `R`, `s`, `φ`, the ground, the habitat | vocabulary for the derivation |

Strained readings are named as such in §7, not smoothed over.

---

## 3. Findings

### F1: The two drivers are different operators, not two strengths of one pressure (decisive for the census)

Mode: `general` on the structural distinction, `specified` on the identification of trade with import.

Habitat disruption changes the **enumeration** of the contact field. Fig 11 :43-48:

> **"The habitat is enumerated, never composed."**
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**
> **"actors: what acts on it, and what it acts on"**
> **"conditions: light, water, temperature, season, terrain"**
> **"relations: pollination, predation, competition, dependency"**

Wildlife trade is an **import**: it carries an actor, and the pathogens it carries, from one closure into another. Fig 6 :14: *"the only operator that moves the wall"*. Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

These are not interchangeable. Re-enumerating a field can change which slots exist without moving any atom across a wall. Moving an atom across a wall can change the reach without re-enumerating the whole field. Conflating them into "human disturbance" produces a bundled question that Fig 9 :54-57 forbids searching as one.

**Refuter:** show a case where a change in emergence is fully accounted for by re-enumeration of contacts *and* by an import, with the two operations identical in their effect on `R` at the same scale. Then F1 collapses and the two drivers are one operator.

### F2: Contact cascades make a first-order intervention a third-order effect

Mode: `specified`, unmeasured for any particular outbreak.

Fig 11 :52:

> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

A forest fragment moves a bat roost closer to a farm; the farm attracts pigs; the pigs bridge to people. The intervention touched one relation; the residual that matters is several steps out. This is why a direct-contact risk assessment undercounts. Fig 11 :63: *"Which is why a managed ecosystem is permanent work rather than a solved state."*

**Refuter:** a documented intervention whose cascade stops at first-order contact in every measured slot, with a sufficiently broad instrument to see the second and third order. That would not refute the figure, but it would refute applying the cascade claim to this intervention.

### F3: Valence is relative to the residual; there is no standing list of dangerous species

Mode: `general`.

Fig 11 :49-51:

> **"An actor's valence is relative to the residual, not a property it carries."**
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**
> **"No standing list of good actors survives a change of residual."**

The world literature agrees from an independent direction. Keesing et al. 2010 (Nature): *"In principle, loss of biodiversity could either increase or decrease disease transmission. However, mounting evidence indicates that biodiversity loss frequently increases disease transmission. In contrast, areas of naturally high biodiversity may serve as a source pool for new pathogens."* The same community can dilute one pathogen and source another. This is not a paradox once valence is a relation to R.

**Refuter:** a species or trade pathway shown to be a hazard for every residual at every scale, independent of which pathogen and which receiving community is tracked. Such a finding would break Fig 11 :49-51.

### F4: Trade is an import; the union of two closures has a surplus that neither holds alone

Mode: `specified`, triangulated across Fig 6 and Fig 8 (low overlap: closure mechanics versus union surplus).

Fig 6 :21-22: *"MINT composes inside the closure and can never add an atom."* *"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."*

Fig 8 :45-46:

> **"Two frames together reach what neither reaches alone."**
> **"Composition crosses the boundary between them, and that surplus is where imports live."**

A live animal in a market is a node where the source frame's closure (its native pathogens and competent hosts) and the destination frame's closure (local hosts, vectors, people) overlap. The surplus is the set of transmission routes neither frame held alone. Rush et al. 2021 (*Animals*): *"The mixing of non-endemic species within the wildlife trade, such as wet markets, is a threat for zoonosis emergence because many wildlife species are reservoirs or incidental hosts for many zoonotic pathogens and can create opportunities for host switching."*

Crucially, the world does not gain a primitive. Fig 6 :25-26: *"An import adds no atom to the world."* *"The world does not gain primitives; a frame gains access."* The pathogen was already reachable somewhere; the import extends which frame can compose over it.

**Refuter:** a trade event that moves an animal and its pathogens into a new closure without adding any reachable transmission route to either frame, measured at the scale where contact occurs. That would break the import identification.

### F5: Provenance is the whole issue; detection is not discovery

Mode: `specified`.

Fig 8 :51-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*. Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*.

Two observations that look the same, a "new" pathogen in a new place, can be a genuinely new lineage or an old lineage newly detected. The discriminator is not the observation but the record: sequence phylogeny, trade manifests, seizure records, sampling dates. Fig 8 :53: *"Residual first, frame second."*

The 2026 *Science* study on 40 years of trade data is exactly this kind of record work. EurekAlert (University of Lausanne, 2026-04-09): *"the length of time an animal has been present in trade plays a key role: on average, a species shares one additional pathogen with humans for every ten-year period spent on the market."* The finding is about cumulative contact recorded over time, not about a single dramatic spillover.

**Refuter:** a case where two independent provenance records (genomic and documentary) give incompatible routes and no third instrument can discriminate them. Then "the record separates them" fails for this domain and we mark a gap at provenance rather than forcing a verdict.

### F6: Emergence is a mint under guards, and sometimes a refusal

Mode: `specified`.

Fig 5 :14: *"mechanism broken: a new term is owed"*. The three guards are a product (Formula step 3): SUPPORT `|R⁺_s| > 0` before the search, REACHABILITY `φ ∈ closure(Γ)` during, NOVELTY `φ ∉ atoms(Γ)` after. A newly dominant variant is a `φ`: it must have positive residual on some slot, compose from what the pathogen holds or be imported, and be new relative to the library.

The fifth kind matters. Fig 5 :53: *"refuted: a term we hold is wrong; a term is owed that says so"*. Some "emergence" is the refusal of a held term, for example the assumption that a given host is competent or that a route is closed. Fig 12 (Operators table) :57: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*. A surveillance system that can only add species to a watchlist and cannot refuse a host-association claim accumulates without correcting.

**Refuter:** a documented emergence where no held term was refuted, no new composition was required and no import occurred, that is, a pure re-description with unchanged reach and unchanged record. That would break the mint reading.

### F7: Spread needs bonds; a reservoir is a catalyst and transmission can close into a cycle

Mode: `specified`, `general` on the bond typing.

Fig 12 :111-112:

> **"A vocabulary without bonds can name a state and cannot name a route to one."**
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**

A list of species and pathogens is an ingredient list. Spread is a route: `→` sequence from host to host, `⇒` production where the pathogen replicates into a host that did not carry it, and `⋛` threshold when a contact rate or density crosses a transmission condition.

Fig 12 :119: *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."* A reservoir host is the ecological catalyst: it supports the pathogen without being consumed by the transmission event. Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* Establishment in a reservoir closes the loop; a chain of spillovers that never re-enters does not.

Fig 13 :24 names the substrate structure for spread: *"that entities relate, and influence travels"* (network). Fig 13 :74-75: *"Everything else is a composition across the two kinds, never within one."* *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."* A network over hosts must be bonded to a state, a place or a time, before it says anything about an outbreak.

**Refuter:** a sustained transmission chain that cannot be written as a route over states with a network structure, or a reservoir that does not survive its own use. Either breaks the bond reading.

### F8: The union must be unbundled before a frame is chosen

Mode: `specified`.

Fig 9 :55-57 (quoted in §1.3) governs here too. The three conditions C1 (crossing), C2 (competent receiving habitat) and C3 (detectable cascade) are a union. A single lever clears the region where only one condition holds and leaves the intersections standing. Concretely: a ban on one trade route can clear C1 and leave C2 intact; a habitat restoration can reduce C2 and leave C1 untouched; better surveillance clears C3 and changes the measured incidence without changing transmission at all (a channel effect, not a ground effect, Fig 10 :24).

Rohr et al. 2020 (*Nature Ecology and Evolution*), a consensus review by researchers from both sides of the biodiversity debate: *"Other studies support alternatives to the dilution effect, such as no relationship, a context-dependent relationship or an amplification effect"*. The sign depends on scale, pathogen type and community composition. That is a conflict with any single-cause reading; by the rules it sends us back to the census, and the census already returned a union. It does not flip a verdict.

**Refuter:** a single continuous variable that predicts the change in `R` across all three conditions better than the unbundled set, with no interaction terms and no loss of per-slot resolution. Then the union split is unnecessary.

### F9: Detection is an office, not a property of the loop

Mode: `general`.

Fig 10 :24: *"the ground does not decay, the channel does"*. Stale surveillance, dropped transients, saturated metrics and pooled readings produce the output *"you have lost touch"*, not a verdict (Fig 10 :27-28). Fig 10 :52: *"Bring a characterised residual, never the source."*

The anchor discipline: Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

Most published reviews of wildlife trade and disease draw on overlapping pathogen lists and a shared set of hotspot papers. Agreement among them is one evidence pool talking (Fig 7 :12-13: *"same closure, handed along; agreement compounds, evidence does not"*). Independent frames here would be, for example, genomic phylogeny, customs seizure records, field serology and clinical case data, each ranging separately against the ground.

**Refuter:** a verified case where two frames with genuinely disjoint evidence pools disagree and the ground settles one of them, with the losing frame refusing its held term. That is not a refutation of F9; it is F9 firing. F9 is refuted if agreement between overlapping reviews is shown to be as diagnostic as an anchor.

### F10: Scale changes the answer; the round trip is not identity

Mode: `specified`.

Fig 4 :22: *"Only methods cross up. Only head starts come down."* Fig 4 :30 (quoted in §1.1) requires the gap to be measured. Rohr et al. 2020 again: the association between biodiversity and disease *"declined with spatial scale in multiple regression analyses"*, and the two major syntheses reached different conclusions partly because one used small experimental plots and the other whole countries. A local dilution effect and a national amplifying association can both be true: they are different slots at different scales.

This is why a result at one scale cannot be carried up as a recording. The lossy transform drops the contact-level mechanism and keeps only a correlation.

**Refuter:** a scale-invariant relation between the intervention and `R` that survives the round trip with zero measured gap `R_T`. That would allow the condensation to be treated as identity, which Fig 4 forbids on the evidence we have.

### F11: What survives, with its mode attached

| claim | mode | figure / source |
|---|---|---|
| Disruption and trade are different operators on the habitat contact field | `general`, structural | Fig 11 :43-48; Fig 6 :14, :23; triangulated |
| Disruption changes enumeration; trade imports an atom into a new closure | `specified`, falsifiable | Fig 11 :43; Fig 6 :22, :25; F1, F4 |
| Contact cascades make first-order interventions third-order effects | `specified`, unmeasured per case | Fig 11 :52; Carson's DDT case named in the figure |
| Valence is relative to the residual; no permanent hazard list | `general` | Fig 11 :49-51; Keesing 2010 corroborates from ecology |
| Emergence is a mint under guards, and can be a refusal | `specified` | Fig 5 :14, :53; Operators table :57 |
| Spread is a route with catalyst and cycle structure, not an ingredient list | `general` on typing, `specified` on any case | Fig 12 :111, :119, :121; Fig 13 :24 |
| Detection is a channel office and needs an anchor | `general` | Fig 10 :24, :52; Fig 2 :29, :35, :40, :42 |
| Which species, which pathogen, which place is **not** given by the framework | `general`, a limit | Fig 9 :32: *"you get a kind of thing, never the answer itself"* |

---

## 4. Pre-registered refuter

Required before any outreach: write the falsifier first. (The seat reasoning instruction that a falsifier written before the run is a design instrument is carried into the outreach files; the figure-grounded version of the same discipline is Fig 9 :60 and Formula step 2.)

The shape claim is refuted if any of the following holds:

1. **Operators collapse.** A change in emergence is demonstrated with identical effect on `R` from re-enumeration and from import at the same scale, with no distinguishable instrument for the two (breaks F1 and the union split).
2. **Intrinsic valence.** A species or pathway is shown to be hazardous for every residual at every scale, independent of receiving community and pathogen (breaks Fig 11 :49-51).
3. **No surplus.** A documented import moves hosts and pathogens across a closure boundary without adding any reachable transmission route to either frame (breaks Fig 6 :22 and Fig 8 :45-46).
4. **Union fails.** A single continuous variable predicts changes in `R` across crossing, competent habitat and detection with no interaction and no loss of slot resolution (breaks Fig 9 :54-57).
5. **Ground fails.** Two frames with disjoint evidence pools are shown to produce no better determination than overlapping reviews (breaks Fig 2 :35, :40).

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the operator distinction (F1), not with a list of notorious species. The list selects frames before the residual is described (Fig 9 :27-28).
2. Report `R` per slot. Never let a single risk index hand a verdict (Fig 1 :19, :22; Fig 9 :60).
3. Use provenance, not novelty of observation, to identify emergence (Fig 8 :51-52). Sequence and trade records are the discriminating instruments.
4. Treat surveillance as a maintained channel with an office, not as evidence that the ground moved (Fig 10 :24, :52).
5. Send the generator: the shape, the refuter and the three checkable sub-claims in `08`, not this whole audit. Fig 4 :22: *"Only methods cross up. Only head starts come down."*

---

## 6. Canonical usage check and retraction / confirmation log

Two local sources govern how the figures may be used, read after §§0 to 5:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit, the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- The eight essays (all opened 2026-11-23) ground *"shape"*, *"prestige is not action"*, *"source"*, and *"outputs are not generators"*. See `05_what_shape_means.md`.

### Retractions and confirmations made during this derivation

| earlier reading in this run | status after the canonical check |
|---|---|
| Treat habitat disruption as a second import | **Retracted.** Fig 11 :43 says the habitat is enumerated, and Fig 6 :22 reserves "adds an atom" for import. They are different operators (F1). |
| Call the two drivers **isomers** over a shared atom set | **Retracted.** Fig 12 :117 requires "same atoms, different bond"; drivers are operators, not molecules. The reactant/product analogy is kept in `06` only as a typed analogue with a falsifier. |
| Name reservoir competence as something the framework derives | **Retracted at framework level.** Fig 9 :32 returns a kind of thing, not the answer. Reservoir is a role read off a specific ground, not a named primitive. |
| Read the biodiversity literature as a single verdict ("loss always raises risk") | **Corrected.** Rohr et al. 2020 documents context and scale dependence. Conflict sent us back to the census, which returned a union (F8). No verdict flipped. |
| Treat surveillance agreement as corroboration | **Refused.** Fig 2 :40; most reviews share a pathogen list and a hotspot paper pool. Overlap is declared in `10_source_ledger.csv`. |
| "A search finds no governing line, so the question is unanswered" | **Refused.** Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The census found governing lines; the identity of any particular outbreak remains a gap, which is a verdict, not a silence. |
| Apparent strain Fig 11 :61 versus isolation as a management tool | **Not strained after re-census.** Fig 11 :61: *"The seat's power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."* Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* They govern different acts: adding an actor versus substituting a whole field. |

### Verdict on canonical usage

Every quoted string in this file was checked character by character against `03-FIGURES_TEXT.md` before use. No figure line was taken from a summary. The one live strain, the type of `⋛` when applied to incidence thresholds at different scales, is named in `11_audit.md` rather than hidden.
