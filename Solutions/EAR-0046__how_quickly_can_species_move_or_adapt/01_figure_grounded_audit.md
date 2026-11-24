# Figure-grounded audit: How quickly can species move or adapt as climate zones shift?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. `THE_FORMULA.md` line 107: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** LLM output is a simulated derivation checked for internal consistency against the figures. It is not a test of the claim and cannot settle the question it reports on. See `05_what_shape_means.md` section 6 and `11_audit.md`.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, plus the world sources in `10_source_ledger.csv`, each opened 2026-11-22.

---

## 0. The residual in effect terms

A climate zone is a band of suitable conditions (an isotherm or climate envelope) whose position on the landscape moves at a rate set by the temporal rate of change divided by the spatial gradient of the climate variable. A species persists if its realized niche can follow that moving band, either by moving in space (range shift) or by changing its relationship to the conditions in place (adaptation, phenotypic plasticity, acclimation). The residual is the gap between the rate of the moving band and the rate at which the species' realized niche can track it.

- **What is being decided:** whether a species tracks its shifting niche and persists, or falls behind into local extinction, range contraction, or an extinction debt.
- **What each option leads to:** Option A, "how quickly" is one number and a global average is reported. This hides the per-species signal. Option B, the union is unbundled, each mechanism gets its own rate shape and its own ground, and the number is left to measurement.
- **What an answer would look like, bound as an ordinary term:** a per-species **tracking capacity**, decomposed into a dispersal-driven range-shift rate and an in-place adaptive rate, each compared against a local climate velocity, with the comparison settled by observed persistence. This makes the sought-for shape refusable (Formula step "Direction").

**Arity / symmetry / scale.** Arity: at least three conditions (climate forcing, movement, adaptation), so a union compound, not one hard question. Symmetry: movement (a change of location) and adaptation (a change of the species-to-condition relation) are not interchangeable operators. Scale: individual (plasticity, behaviour), population (selection, gene flow), species range (migration), community (contact cascades). Recursive across those strata (Fig 12 :103 "Composition is recursive, and the level decides what is irreducible.").

---

## 1. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 Climate forcing / habitat conditions | isotherms, temperature and precipitation gradients, topography, season | climate velocity (km per year) | none for persistence; the forcing is a condition enumerated from the world, not the ground that settles survival | condition, not its own domain with a verdict |
| D2 Movement / range shift | dispersing individuals, propagules, corridors, barriers, mutualists and partners | distance per time, colonization and extinction rates | **yes:** observed range boundaries through time, a measurement that does not update on our models | ground-visible domain |
| D3 Adaptation / plasticity | individuals, heritable variation, generation time, selection gradient, phenotype | trait change per generation (Haldanes), plastic response magnitude | **yes:** measured trait change, heritability estimates, common-garden and selection experiments | ground-visible domain |
| D4 Verification and management | researchers, managers, monitoring datasets, models | agreement and residual | **yes:** observed persistence and extinction, never agreement | ground-visible domain |

**Partition or union.** Union, not partition. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A single lever clearing one condition leaves the intersections standing because the second condition still binds.

**Dependency order (Fig 3).** Perception of the shift, then vocabulary of what the habitat affords (corridors, gradients, partners), then objective (persistence), then planning (routes and adaptive responses), then learn and carry. Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." The middle link, having terms for what a changing situation affords, is the usual break.

D1 has no ground of its own for the biological question, so by the census rule it is a condition inside D2 to D4 habitat, not a domain that issues a verdict. It is enumerated, not composed: Fig 11 :43 "The habitat is enumerated, never composed." Fig 11 :46 "conditions: light, water, temperature, season, terrain".

---

## 2. Figure census (verbatim, quoted before concluding)

Each quote below is a verbatim substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Strained readings are named, not smoothed over.

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | per-slot residual | "The residual is indexed by object slot, not aggregated." A global mean across species throws away the signal about which one is failing. |
| Fig 2 | ground and anchor | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Observed persistence is the anchor; agreement is not. |
| Fig 3 | dependency order | "A link with no instrument is not a link that works." The middle link is where this question usually breaks. |
| Fig 4 | head start vs recording | "A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes." A dispersule is a head start, not a recording. |
| Fig 6 | instruments | "An instrument is not built from a description. It is improved from a worse instrument already returning something." Rate instruments are sharpened from existing failing readings. |
| Fig 7 | rooms | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." |
| Fig 8 | union surplus and search | "no search, however long, adds an atom" and "So a search that finds nothing is never a proof of absence." |
| Fig 9 | union, describe first | "And when the split lands on a union rather than a partition, unbundle before you search again." |
| Fig 10 | verifier non-access | "A verifier that can reconstruct the claim cannot verify it." |
| Fig 11 | habitat, contact, selection | The governing figure for this question: capability is agent-and-habitat, contact cascades, introduction without exclusion, isolation as substitution. |
| Fig 12 | recursion and structures | "Composition is recursive, and the level decides what is irreducible." Movement and adaptation are different structures, not isomers. |
| Fig 13 | states and structures | "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." The figures give the shape of a rate, not its number. |

---

## 3. Findings F1 to F9

### F1 - The question is a union compound, not one rate (decisive for the shape)

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

"How quickly" bundles at least three conditions: the moving forcing, movement, and in-place change. Fig 9 :32 "you get a kind of thing, never the answer itself." A single global number is a filter for the budget, not a witness for the verdict (Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").

Mode `general` (structural). Triangulated across Fig 9 and the residual's own arity census.
**Refuter:** show that movement and adaptation share one closure and one ground, so their rates compose additively into a single measured quantity with no residual left at the intersections.

### F2 - Capability is a property of agent-and-habitat, never of the species alone (decisive, per D2)

Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone."
Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

So "how quickly can a species move" is not answerable from the species in isolation. A fast disperser in a fragmented landscape with no corridor and no required partner has low realized tracking capacity; a slow disperser in a steep, connected gradient can track with little movement. World corroboration: Nathan et al. 2008 (movement ecology) decompose movement into internal state, motion capacity, navigation capacity and external factors, so the external factors are load-bearing in the same way. Ackerly 2010 shows the required speed rises to about 6 km per year on flat temperate terrain and about 0.06 km per year on a mountainside for the same warming rate, a habitat effect on the required rate.

Mode `specified`. Triangulated (Fig 11 plus two low-overlap world frames, movement ecology and conservation biogeography).
**Refuter:** Fig 11 :72 gives the exact form: an agent-only improvement that moved the ground would refute the capability claim. Concretely, a demonstrated increase in realized tracking from an intervention that changed only the species and left habitat contact identical.

### F3 - The habitat is enumerated, and contact cascades (per D2 and D3)

Fig 11 :43 "The habitat is enumerated, never composed."
Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :47 "relations: pollination, predation, competition, dependency"
Fig 11 :52 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

A species can arrive in a newly suitable climate band and still fail because a pollinator, a prey item, or a competitor did not arrive, or because a pathogen did. The rate that matters is the rate of the slowest required relation, not the focal species' own dispersal rate. Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." A corridor is a benefactor to one species and a highway for a competitor to another.

Mode `specified`. Triangulated (Fig 11 enumeration rule plus the DDT cascade instance recorded in the same figure; world corroboration from the assisted-colonization literature, which names interspecific interactions as the source of contingency).
**Refuter:** a documented case where a species tracks its climate band with no dependence on any other actor and with no effect beyond first-order contact, sustained across the whole tracking interval.

### F4 - Movement is a head start, not a recording; isolation is substitution (per D2)

Fig 4 :34 "A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."
Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another."
Fig 11 :67 "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."
Fig 11 :68 "what you failed to reproduce, and what you brought with you"

A dispersing seed or larva carries what will grow, not the adult and not its habitat. Assisted migration is the managed version of this substitution. Fig 11 :61 "Introduction is available; exclusion is not." You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you. Fig 11 :65 "Cane toads and kudzu are the same move with the cascade unenumerated." World corroboration: Ricciardi and Simberloff 2009 argue that impacts vary with local environmental variables, interspecific interactions and evolutionary change, and that some impacts are large and irrevocable.

Mode `specified`. Triangulated (Fig 4, Fig 11, world conservation literature).
**Refuter:** a translocation that reproduces every condition the species' goal required, inherits no unchosen actors, and has no silent failure mode of the two named in Fig 11 :68.

### F5 - Adaptation is selection running, and only contact-changing improvement counts (per D3)

Fig 11 :36 "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."
Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

A species does not decide to adapt. Selection acts on heritable variation in a lineage, and the adaptive rate is meaningful only if it changes contact with the ground, meaning realized fitness in the new conditions. World corroboration: Hoffmann and Sgrò 2011 use the breeder's equation and report that evolutionary responses may be sufficient for only a few per cent per generation unless plastic effects act alongside evolution; Gonzalez et al. 2013 state the concern directly, that the rate of environmental change is now exceeding the capacity of many populations to adapt; Buskirk et al. 2012 find that phenological change is best explained by a combination of plasticity and rapid microevolution rather than either alone.

Mode `specified`. Triangulated (Fig 11 plus three independent evolutionary-biology sources).
**Refuter:** a plastic or genetic change that demonstrably alters persistence without changing contact with the ground, or a lineage that adapts with no selection acting on heritable variation. The first is a contradiction of Fig 11 :40; the second contradicts Fig 11 :36.

### F6 - The ground is observed persistence, not agreement (per D4)

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."
Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."

Climate velocity is a habitat condition, not the ground. Model projections and expert agreement are frames. The ground for this question is the observed range boundary through time and the observed persistence or extinction of the population. World corroboration: Chen et al. 2011 report observed median shifts of 11.0 m per decade in elevation and 16.9 km per decade in latitude, with individual species varying greatly. The 2024 Nature mountain study assesses tracking by comparing observed range-shift velocities with isotherm velocities, which is exactly a ranging against the ground.

Mode `specified`. Triangulated (Fig 2, Fig 11, world ground studies).
**Refuter:** a demonstration that two datasets drawn from the same monitoring pool, or two models fed the same occurrence records, constitute two independent witnesses rather than one pool talking.

### F7 - The number is not in the figures; it is an OUTWARD import (gap for the numeric rate)

Fig 8 :39 "So a search that finds nothing is never a proof of absence."
Fig 13 :134 "Unreachable is a verdict here, not a silence,"
Fig 9 :32 "you get a kind of thing, never the answer itself"
Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists."

No figure line yields km per year or Haldanes for a named species. Formula step 7 instructs: "OUTWARD    IMPORT. Characterize R in effect terms, then find the frame whose closure predicts its shape." The frames that hold the number are empirical ecology, movement ecology and evolutionary biology, imported with a source gate (provenance) and a shadow test (they explain the tracking gap). Importing against a budget limit would add an atom that was not needed, so the figures are not stretched to produce a speed.

Mode `general` on the gap verdict. Single-source for the closure claim (Fig 8 and Fig 13 agree, but they are one framework), corroborated by the world sources supplying the rates.
**Refuter:** derive a species-specific numeric tracking rate from the six-term set and the bond set alone, with no empirical import, and show it matches observation.

### F8 - Per-slot residual, never a global average (per D4)

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

Chen et al. 2011 report rapid average shifts that derive from a wide diversity of individual responses. An average is a filter for the budget. The verdict about which species is failing must be per species and per habitat, never averaged into one "biotic attrition" number.

Mode `general`. Triangulated (Fig 1 plus Chen et al.).
**Refuter:** show that a global mean across species preserves the signal identifying which species is about to fall behind its moving climate band.

### F9 - Rate instruments are sharpened from readings already failing (per D4)

Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something."
Fig 6 :35 "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

The way to close the numeric gap is not to demand a perfect species-speed sensor from a verbal description. It is to take the already-returning readings (occurrence records, isotherm velocities, heritability estimates, common-garden trials) and sharpen them. Where nothing at any resolution is returning a failing reading, the search is for a proto-instrument, and that is a different fact from "merely hard."

Mode `general`. Single-source (Fig 6), with the world literature as corroboration that such instruments exist and are being improved.
**Refuter:** build a tracking-rate instrument from a description alone where no prior reading at any resolution was returning something that failed to resolve.

---

## 4. Per-domain verdicts (kept separate, never averaged)

| domain | verdict | status | mode |
|---|---|---|---|
| D2 movement / range shift | tracking capacity is agent-and-habitat; a dispersule is a head start; contact cascades can bind the rate | triangulated | `specified` |
| D3 adaptation / plasticity | adaptive response is selection on a lineage; only contact-changing response counts; the numeric rate is imported | triangulated | `specified` |
| D4 verification / management | ground is observed persistence; per-slot, never averaged; agreement among pooled frames is one witness | triangulated | `specified` |
| D1 forcing / habitat condition | no verdict issued; climate velocity is a habitat condition enumerated from the world, not the ground | gap (as a ground) | `general` shape only |
| cross-cutting numeric rate | not in closure(Γ); OUTWARD import required | gap for the figures | `general` |

No verdict was averaged with another. The word "triangulated" here means two low-overlap figure lines or a figure line plus an independent world frame. Where the two sources share an evidence pool, the agreement is downgraded in `09_watson_answer.md`.

---

## 5. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. Movement and adaptation share one closure and one ground, so a single global rate with no residual at the intersections is adequate (refutes F1).
2. A species-only improvement changes realized tracking while habitat contact is held identical (refutes F2; this is Fig 11 :72's own stated refutation of the capability claim).
3. A species tracks its climate band with no dependence on any other actor and no effect beyond first-order contact across the whole interval (refutes F3).
4. A translocation reproduces all required conditions and inherits no unchosen actors, with no silent failure mode (refutes F4).
5. A plastic or genetic change alters persistence without changing contact with the ground, or adaptation occurs with no selection on heritable variation (refutes F5).
6. Two datasets from one monitoring pool are shown to be independent witnesses (refutes F6).
7. A species-specific tracking rate is derived from the six-term set alone and matches observation (refutes F7, the gap verdict).

Until one of these is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Send the shape and the refuter first, per domain, and never a single global speed (F1, F8).
2. Name the habitat in the claim. A rate without actors, corridors, gradients and partners is not a claim this framework can make (F2, F3).
3. Treat movement and adaptation as separate mechanisms with separate grounds, and report the per-domain verdicts separately (F2, F3, F5).
4. Label the number as a provenanced import from empirical ecology, never as a figure derivation (F7).
5. Ask what would refute the shape before offering the links. Fig 10 :52 "Bring a characterised residual, never the source."
6. Use the public submission and contact points in `03_public_contact_points.csv`, one to one, not bulk.

---

## 7. Canonical usage check

Two sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them", and "the quotes are the authority, not this summary." Also: a reading that makes one figure contradict another has misidentified its domain, and the framework returns "a shape, not a name" for a missing primitive. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws that decide design questions; the seat reads the ground and does not ask the anchor's maintainer to decide what the figures already settle. Fig 11 is a metalaw about capability and contact, so F2 and F5 are decided by derivation, not by asking an expert to rule.

### Strain test and re-census

- **Initial strain:** I first tried to make Fig 13's gradient-over-space and gradient-over-time govern the numeric rate, so that the figures would "answer how quickly." Re-census: Fig 13 :76 governs what a gradient is and which state it bonds to, not the magnitude of a rate. The line only fits the number with a strain, so by the rule it governs another quantity. It governs the shape of the comparison. The number is a gap for the figures (F7). Kept visible, not erased.
- **Second strain:** I first treated Loarie's climate velocity as the anchor. Re-census: Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." Climate velocity updates with emissions and models, so it is a habitat condition. The anchor is observed persistence (F6). Kept visible, not erased.
- **Third strain:** I first wrote "move or adapt" as one mechanism with two labels. Re-census on arity and symmetry: movement changes location, adaptation changes the species-to-condition relation, and they have different currencies and different instruments (km per year versus Haldanes). They are separate union conditions (F1), not one lever.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "Fig 13 answers how quickly" | **Retracted.** Fig 13 gives the shape of a rate, not its number. Recorded as F7 gap. |
| "climate velocity is the anchor" | **Retracted.** Climate velocity is a habitat condition; observed persistence is the ground (Fig 11 :73). |
| "move and adapt are one mechanism" | **Retracted.** Union of two operators with different currencies (Fig 9 :54). |
| "no instrument exists for the rate" | **Retracted at record level.** Occurrence records, isotherm velocities and heritability estimates are already returning readings; the instrument is sharpened from them (Fig 6 :32). |
| "no figure governs this question" | **Refused.** Fig 11 governs capability, contact, enumeration and substitution; F2 to F5 stand. |
| Fig 11 capability claim | **Canonically confirmed.** The metalaws note reads Fig 11 as "capability is a property of agent-and-habitat, never of the agent alone" and calls an agent-only improvement that changes contact the standing refutation. |
| Fig 2 ground rule | **Canonically confirmed.** "Frames range against the ground. They do not negotiate with it." |
| shape-not-a-name | **Narrowed, not retracted.** The README's phrase governs a missing primitive. "How quickly" asks for a magnitude, and magnitudes are never in the six-term set, so the numeric rate is a gap rather than a nameable slot. |

### After re-census

Strains: three named, all resolved by re-census, none smoothed. Live gap: the numeric rate, recorded as an OUTWARD import rather than stretched. No figure line was found to drift from the verbatim extract.
