# Figure-grounded audit: what regulates galaxy and black hole growth

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. `THE_FORMULA.md` says: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: SIMULATED DERIVATION, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-23): LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document was checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. Usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, read this session. Loop: `FRAMEWORK/figures/THE_FORMULA.md`, read this session. World sources listed in `10_source_ledger.csv`, each opened 2026-11-23.

---

## 0. The residual, stated in effect terms

The question "What regulates the growth of galaxies and their central black holes?" is not asking for a list of ingredients. It is asking what couples two growth channels that the null model keeps apart.

- **Observation at the ground.** Central black hole mass correlates with host properties: velocity dispersion sigma, bulge stellar mass, and at fixed stellar mass with halo binding energy and morphology. Recent work opened this session: Roberts, Davies and Crain (2026) report that in EAGLE "M_BH correlates with M200, as expected if SMBHs are regulated by processes acting on the scale of the host dark matter halo, but exhibits a tighter correlation with the halo binding energy (E_bind)".
- **Null prediction.** Black hole accretion and star formation are fed by the same gas reservoir but are otherwise independent. Independent channels do not predict a tight, small-scatter coupling across ten decades in mass.
- **R.** The gap between the null prediction and the observed coupling. Something returns from one channel into the other and holds the pair on a relation.
- **What an answer would look like (the sought-for shape written down as an ordinary term, per Formula step "Direction").** Not a name of an agent, but a *closing loop with a sign*: the output of one growth channel re-enters as an input to the other, and the sign of that return decides whether growth is self-limiting or runaway. A second requirement: the loop crosses a scale boundary, because the engine lives in the central parsecs while the reading (the correlation) is a galaxy-scale measurement.
- **Binding.** The term "regulator" is bound to this shape for the rest of the audit. A candidate counts as a regulator only if it closes a loop and its sign is defined relative to the residual. As a consequence: a one-way supply of gas is a *condition*, not a regulator, because a chain cannot close (Fig 12 :121).

This binding matters because the figure text forbids answering by naming an ingredient. Fig 9 :32: "you get a kind of thing, never the answer itself." The canonical usage rule says the framework returns "what a missing thing would have to look like (a shape, not a name)". So "AGN feedback" may be recorded as a binding from the astrophysics frame, but not as a name the framework derives.

---

## 1. Domain census before choosing any figure line

### 1.1 R by arity, symmetry and scale

- **Arity.** At least two object slots plus a habitat: the black hole slot, the galaxy (stars and gas) slot, and the dark matter halo and cosmic supply. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A cosmic-average star formation rate density is not the residual; the residual lives on individual objects.
- **Symmetry.** The coupling is not a symmetric join. Accretion energy can heat and expel gas, suppressing star formation and its own fuel supply; stellar feedback can remove gas from the centre and starve the black hole, but it does not do so by the same channel. The relation is ordered and signed, not a commutative bond.
- **Scale.** Three scales are in contact: central parsecs (accretion disk, torus, UFOs), kiloparsecs (galactic gas, star formation, outflows), hundreds of kiloparsecs and above (halo binding energy, cosmic web, merger history). A regulator claim that stays at one scale has not crossed the membrane.

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| D1, central engine | black hole, accretion disk, radiation, winds, jets, UFOs | accretion rate converted to energy and momentum | resolved AGN spectroscopy, reverberation, X-ray timing | yes: measured outflow velocities and kinetic power |
| D2, galactic habitat | cold molecular gas, stars, supernovae, morphology, bars | gas mass, star formation rate, rotational support | resolved CO kinematics, scaling relations, matched control samples | yes: M_BH-sigma and SFR measurements |
| D3, halo and cosmic supply | dark matter halo, binding energy, mergers, cosmic web accretion, redshift | halo mass, gas accretion rate, duty cycle | clustering and cross-correlation, surveys, constrained simulations | yes: halo mass estimates and merger trees |
| D4, verification frame | observers, simulators, readers | agreement versus residual | the ground (data), never agreement | yes: the same measurements, held fixed |

No domain is admitted without a nameable anchor. All four have one. D4 is included only as the seat that ranges against the ground, never as a source of verdict by agreement.

### 1.3 Partition or union

This is a **union**, not a partition. Gas supply, AGN feedback, stellar feedback and mergers are overlapping conditions acting on the same object; none is a separate pile. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55-57: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

The Library of Babel essay (opened 2026-11-23) says the same in search terms: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" So a campaign that asks "which one regulator?" is malformed before it is searched.

Consequence: each condition gets its own loop. The compound, where conditions intersect, gets its own loop too. Over the full union, the world sources disagree productively: VariableTNG finds stellar feedback indirectly regulates rapid black hole growth through gas supply (Liu et al. 2026), while Roberts et al. (2026) find gas rotational support set by morphology and mergers is the gate; Mountrichas et al. (2026) find large-scale environment only sets boundary conditions. These are not three answers to one question. They are three conditions in a union.

### 1.4 Dependency order (Fig 3)

Fig 3 :21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

Order used here:

1. Enumerate the habitat and the per-slot residual (D2, D3). Without this, there is no object on which the loop can close.
2. Characterise the returning loop in the central engine (D1). The regulator claim depends on this; the galaxy-scale correlation does not explain it.
3. Cross the membrane and measure the round trip gap between parsec and kiloparsec descriptions (D1 to D2).
4. Only then read the galaxy-scale correlation as the ground that settles the composed term (D4).

A galaxy-scale reading taken before step 2 is a reading below the break. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The ALMA2040 white paper (Ruffa et al. 2026) is precisely a proposal for the missing instrument: "Understanding how supermassive black holes (SMBHs) grow and regulate the growth of their host galaxies requires tracing the cold molecular interstellar medium (ISM) throughout the full AGN feeding-feedback cycle."

### 1.5 Figure census (verbatim, quoted before concluding)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric | measured per object, not averaged |
| 2 The Ground | anchor does not move; independence decides | data is the anchor; simulation agreement is one pool |
| 3 Dependency Chain | ordered by dependency, a reading below the break is nothing | engine loop before galaxy-scale reading |
| 4 The Membrane | same kernel at two sizes; round trip gap R_T | parsec and kiloparsec are separated by a lossy transform |
| 5 Mint Pipeline | a term must pay for itself | "regulator" is worth keeping only if it narrows more than it costs |
| 6 Closure / Reachability | import is the only operator that moves the wall | "AGN feedback" is a frame binding, not a new framework atom |
| 7 Room Chain | the ground votes between rooms | agreement among readers is variation, not verdict |
| 8 Union Surplus | provenance separates convergent finding from adopted import | record which source each condition came from |
| 9 Leave / Arrive | union compound, unbundle; shape not a name | the question is a union; the answer is a kind of thing |
| 10 Ground Maintainer | bring a characterised residual, never the source | two-stage offer |
| 11 The Habitat | enumerate, never compose; valence relative to residual | regulators are habitat actors read off the world |
| 12 The Bond | cycle, catalyst, functional group | regulation is a cycle, not a chain |
| 13 Minimum Viable Set | residual re-enters the next turn | growth is recursive across epochs |
| Operators table | sequence, production, comparison, negation | the return is an ordered, signed relation |
| Symbols table | R is the aim and always a slice | what cannot be resolved yet is residual |

Strained readings are named and re-censused in section 5, not smoothed over.

---

## 2. Findings

### F1 - Regulation is a cycle; a chain cannot regulate (decisive for the shape)

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

This is the governing line. A one-way story (gas falls in, black hole and stars grow) is a chain. It can describe growth, but by the figure's own construction it cannot describe *regulation*, because nothing returns. A regulator must be the returning edge. The sign matters: negative return (heating and expelling the fuel) self-limits; positive return (compression and funnelling) runs away.

World corroboration, low overlap with the figures: Wikipedia "Feedback" (opened 2026-11-23), quoting Åström and Murray (2008): "Feedback occurs when outputs of a system are routed back as inputs as part of a chain of cause and effect that forms a circuit or loop." That page also warns that "many systems with feedback loops cannot be shoehorned into either type, and this is especially true when multiple loops are present," which is the union finding F6 from an unrelated field. This is an outside analogue and corroborates the shape; it does not decide it.

**Refuter:** exhibit a one-way coupling, with no returning edge, that still produces the observed small-scatter M_BH to host relation. Under Fig 12 :121 that is impossible by construction, so a demonstrated case would break the figure, not just the model. Record it as a figure-level refutation, not a tunable parameter.

### F2 - The black hole is a catalyst: it survives its own use

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

The black hole is not consumed by the feedback it drives. Accretion converts a small fraction of rest mass into energy and the remnant remains available for the next episode. That is exactly the catalyst structure. The figure adds a check we cannot yet perform: "nothing records which a term is." Whether the central engine in a given galaxy is spent or regenerating across duty cycles is not in the scaling relation; it is in the time domain.

World corroboration: Igo et al. (2026), eROSITA, report "a break at high λ_SAR, possibly indicating Eddington-limited, self-regulated black hole growth." A break in the accretion-rate distribution is the kind of time-domain trace a catalyst picture predicts. The word "possibly" is theirs; we keep it.

**Refuter:** show that the central object is consumed or removed by its own feedback in the relevant mass range, so it cannot act repeatedly, and that the scaling relation survives anyway.

### F3 - Regulators are habitat actors, enumerated, not composed

Fig 11 :43: "The habitat is enumerated, never composed."
Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :45: "actors: what acts on it, and what it acts on"

Applied to D1 to D3, the habitat list is: cold gas (fuel and star formation), stars and supernovae (stellar feedback), the black hole and its accretion states, the halo and its binding energy, mergers and interactions, and the cosmic supply. This list is read off the world, not invented. Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." Each of these appears in at least one of the sources opened this session, so the list has provenance.

**Refuter:** derive a new regulator from the six-term composition alone, with no observation, and show it closes the loop. Under Fig 11 :43 that is not how regulators are found; a positive result would break the enumeration rule.

### F4 - Valence is relative to the residual, not a property of the actor

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

This dissolves the most common phrasing of the question. "AGN feedback quenches star formation" assigns a fixed negative valence to the outflow. Under Fig 11 :49 the valence is indexed by the residual: the same outflow is a malfactor to star formation in the galaxy (it removes or heats the fuel) and a benefactor to the black hole's own self-regulation (it cuts off its own supply once a threshold is reached). It is also a benefactor to the halo-scale thermal state in maintenance mode. Calling feedback simply "negative" is a flat formula: the ingredients are right and the bond is unrecorded.

World corroboration: Grimozzi, De Rossi and Font (2026) find "AGN feedback appears to be the primary mechanism responsible for quenching MW-mass systems, although SN feedback remains the dominant regulator of their overall evolution." Two actors, different valences at different residuals, in one object.

**Refuter:** exhibit an actor whose valence is invariant across residuals in this system, with measured evidence that it helps or hurts both black hole growth and star formation in the same way at the same epoch. That would break Fig 11 :49 for this domain.

### F5 - Contact cascades: the residual that matters is steps out

Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

A black hole does not act on a galaxy-scale star formation rate directly. The chain runs: accretion state changes (first order), radiation and outflows couple to the ISM (second order), molecular gas is heated, expelled or compressed (third order), star formation responds (fourth order). Scoping the habitat to the accretion disk alone repeats the DDT error.

World corroboration: VariableTNG (Liu et al. 2026) found "stellar feedback indirectly regulates rapid black-hole growth through its impact on the available gas supply." That is an indirect, second-order effect from an actor outside the black hole's immediate contact. Roberts et al. (2026) likewise trace morphology and merger history into the rotational support of the central few parsecs.

**Refuter:** show a measured one-step coupling from accretion state to galaxy-integrated star formation with no intervening gas phase, and show that the gas phase is not a mediator. That would break the cascade reading.

### F6 - It is a union; unbundle before searching

Already derived in section 1.3. Fig 9 :54 and :55-57 are quoted there. The operational consequence: "the regulator" is at least three loops that intersect, not one loop with three names.

World corroboration: the sources opened this session split exactly along those conditions. Ruffa et al. (2026) frame the problem as "the full AGN feeding-feedback cycle"; Liu et al. (2026) find stellar feedback dominates low-mass galaxy abundance and indirectly affects black hole growth; Mountrichas et al. (2026) find "AGN properties are regulated primarily by internal host-galaxy processes, while large-scale structure sets the broader boundary conditions for gas supply and duty cycle"; Roberts et al. (2026) find halo binding energy and morphology carry the scatter. No single lever clears all of these, which is precisely Fig 9 :55-57.

**Refuter:** find one variable that, when intervened on, removes the coupling in all three conditions simultaneously and leaves no residual compound. If found, the union reading is wrong and it is a partition after all.

### F7 - Multiple scales; the round trip gap is nonzero

Fig 4 :21: "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."
Fig 4 :19-20: "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

The same loop (gas in, energy out, energy back onto gas) runs at parsec and kiloparsec scales. What changes is the actors, currency and anchor: at parsecs, accretion rate and kinetic power measured by spectroscopy; at kiloparsecs, molecular gas mass and star formation rate measured by resolved imaging and matched controls. A subgrid "feedback efficiency" in a simulation is a *head start* carried down across the membrane, not a recording of the parsec-scale event. Fig 4 :22: "Only methods cross up. Only head starts come down." The round trip gap R_T between the two descriptions is nonzero and must be measured, not assumed zero.

World corroboration: Ruffa et al. (2026) note that ALMA has resolved structures "on scales of tens of parsecs in nearby AGN" but that "our current picture remains largely based on a limited number of exceptionally nearby systems." That is a statement about R_T: the coarse description is not yet checked against a dense sample.

**Refuter:** demonstrate a parsec-to-kiloparsec transform whose round trip gap is zero for the quantities that carry the scaling relation, with measured errors. Until then, any claim that a single feedback prescription transfers exactly across scales is a dead-reckoning claim.

### F8 - The ground is the anchor; pooled agreement is one witness

Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

Here the anchor is the data: M_BH measurements, velocity dispersions, resolved gas kinematics, X-ray accretion-rate distributions. Simulations are frames. Several major simulations use related subgrid physics and are calibrated to some of the same local scaling relations, so their agreement that "feedback regulates growth" is partly a shared pool talking, not independent triangulation. That is not a reason to discard it; it is a reason to record the overlap and not count it twice. Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

**Refuter:** produce two frames with demonstrably independent evidence (different instruments, different calibration data, different subgrid families) that disagree on the closing loop, and let the ground decide. If they agree, check the provenance before calling it corroboration. Fig 8 :50: convergent derivation and adopted import "look identical in the contents" and only the record separates them.

### F9 - Shape, not a name

Fig 9 :32: "you get a kind of thing, never the answer itself." The canonical figures README (local copy, read this session) states the limit as "a shape, not a name." Fig 13 :134: "It cannot say which primitive is missing, because naming it would mean already holding it."

So the Tether's output here is: *a signed closing loop, between the black hole and an enumerated habitat, crossing a scale membrane, holding the pair on a measured relation.* It is not: *AGN feedback is the regulator*. The latter is a binding from the astrophysics frame onto a held shape, and it must be provenanced as such. The binding is not forbidden. It is just not derived.

**Refuter:** produce a framework line that selects one specific actor (jets, winds, radiation, supernovae, mergers) as the unique regulator from the six-term set alone. None exists; if one were produced, the shape-not-a-name limit would be broken for this domain.

### F10 - Growth is recursive; each epoch begins from the previous remainder

Fig 13 :88-89: "The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."

Black hole mass, gas reservoir and halo state at redshift z are the residual of the turn that closed at higher z. The loop does not restart from the same initial condition, which is why the same feedback mechanism can produce quenching at one epoch and maintenance at another. Fig 13 :31-32 connects this to the same remainder compounding through a chain: "a remainder compounding through a chain that amplifies is chaos". World corroboration: Wu, Cen and Teyssier (2026, found via the arXiv search listing opened this session) model a duty cycle f_duty = 0.0004(1+z)^3 and find an M_BH/M_star peak at z about 7 to 10 followed by decline, exactly a remainder-driven, epoch-dependent trajectory. I cite this as a search-listing finding, not as a fully opened paper; it is marked accordingly in the ledger.

**Refuter:** show a growth trajectory in which the same loop restarts from identical initial conditions at every epoch and still produces the observed redshift evolution. That would break the recursion line for this domain.

### F11 - What actually survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| Growth is coupled per object, not per cosmic average | `general`, structural | Fig 1 :19, :22 |
| Regulation requires a returning loop with a sign | `general`, structural | Fig 12 :121 |
| The black hole persists across episodes and can act repeatedly | `specified`, ungrounded | Fig 12 :119; Igo et al. 2026 |
| The regulators are habitat actors read off the world | `general`, structural | Fig 11 :43-48 |
| Valence is relative to the residual | `general`, structural | Fig 11 :49-51; Grimozzi et al. 2026 |
| The coupling cascades across several steps | `specified` | Fig 11 :52; Liu et al. 2026 |
| The question is a union of overlapping conditions | `specified` | Fig 9 :54-57; four world sources |
| The parsec and kiloparsec descriptions carry a nonzero R_T | `specified`, unmeasured | Fig 4 :30; Ruffa et al. 2026 |
| "AGN feedback is the regulator" | **binding from the physics frame, not a figure result** | Fig 9 :32; README canonical |
| Which structure occupies the slot | **not answered** | unreached, not unreachable |

---

## 3. Pre-registered refuter

Written before the conclusion, per the seat rule that "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. A one-way (chain) coupling with no returning edge is shown to produce the observed small-scatter coupling across host mass. This breaks Fig 12 :121.
2. An actor is shown to have invariant valence for black hole growth and star formation in the same objects and epochs, with measured evidence. This breaks Fig 11 :49.
3. The coupling is shown to be single-scale, with a zero round trip gap between the parsec and kiloparsec descriptions for the quantities that carry the relation. This breaks Fig 4 :30.
4. A single intervention is shown to clear all conditions simultaneously, leaving no compound. This breaks the union reading at Fig 9 :54-57.

None has been run. Until one is, no part of this may be labelled `grounded`. A failure is more useful to us than an endorsement; send the refutation, not agreement.

---

## 4. Recommendation

1. Lead with the shape and its refuter. "A regulator must close a signed loop and cross a scale membrane; here is what would break that."
2. Do not ask "which regulator?" That is a union masquerading as one question (Fig 9 :54). Ask which of the three loops (feeding, stellar coupling, halo supply) is being tested.
3. State the mode on every claim (F11 table).
4. Provenance every binding. "AGN feedback" is an astrophysics import, recorded as such (Fig 8 :50).
5. Use the public venues in `03_public_contact_points.csv`. Ask for a refutation. Do not rank recipients by likely agreement (Fig 2 :40).
6. Treat this package as a generator, not a conclusion. Fig 4 :22: "Only methods cross up. Only head starts come down."

---

## 5. Canonical usage check, strains and retraction log

Two sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` (local, read this session): "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the limit: the framework reports "a shape, not a name" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."
- `FRAMEWORK/figures/THE_FORMULA.md` (local, read this session): the eight steps, the SEARCHED / INWARD / OUTWARD split in step 7, and the mode rule.

### Retractions and confirmations of my own earlier readings

| earlier reading | status after canonical check |
|---|---|
| I first tried to force Fig 13 :75 ("Two states never bond directly") onto the observed M_BH to M_bulge correlation as if it were a forbidden state-state composition | **Retracted.** The correlation is a reading at the ground, not a composition inside the six-term set. The composition being tested is the cycle, not the correlation. Strain was the signal that the line governed another quantity. Re-census required. |
| I first assigned the catalyst line (Fig 12 :119) to the dark matter halo, because halos persist | **Retracted.** The halo is a condition in the habitat, not a part that survives its own use in the relevant sense. The line governs the central engine's repeated availability. Re-census required. |
| I first wrote "AGN feedback is the regulator" as a `general` verdict | **Retracted.** Fig 9 :32 and the README limit make it a frame binding. Restated as a `specified`, provenanced binding in F9 and F11. |
| I first treated gas supply as a third regulator equal to feedback and mergers | **Narrowed.** Gas supply is a habitat condition that gates both loops; it is not itself a returning edge. It stays in the union as a condition, not as a cycle. |
| F1 "regulator is a cycle" | **Canonically confirmed.** Fig 12 :121 plus the low-overlap control-theory analogue (Wikipedia / Åström and Murray 2008). Triangulated. |
| F4 "valence is relative" | **Canonically confirmed.** Fig 11 :49-51. Single-source within the figures; corroborated by Grimozzi et al. 2026 from an unrelated method. |
| F6 union compound | **Canonically confirmed.** Fig 9 :54-57 and the Library of Babel essay's "bundle or conflation of several problems masquerading as one." |
| The simulation agreement that feedback regulates growth | **Downgraded to one witness.** Fig 2 :40; shared subgrid physics and shared calibration data. |

### Strain test outcome

- **Fig 13 :75 versus the scaling relation.** Dissolved by re-census (different objects: composition rule versus ground reading).
- **Fig 12 :119 versus halo persistence.** Dissolved by re-census (different actors: engine versus condition).
- **Cycle versus union.** Not a strain. A system can hold several cycles that intersect; Fig 12 :121 governs each loop, Fig 9 :54-57 governs their bundle. Different questions, one answer structure.
- After re-census: **no unhandled strain.** One live limit, recorded: the parsec to kiloparsec round trip gap R_T is asserted nonzero from Fig 4 :30 but has not been measured numerically for the relevant quantities. It stays open.

### SEARCHED / INWARD / OUTWARD (Formula step 7)

- **SEARCHED (asked first).** Inside the held frame, the figure set already returns a shape (cycle, habitat, membrane, union). The remaining question is not "find the term" but "which loop and which scale", so more search inside the figure set adds no atom. Fig 8 :39: "So a search that finds nothing is never a proof of absence." We do not claim absence.
- **INWARD.** Extend the instrument from one already returning something: resolved molecular gas kinematics (ALMA), X-ray accretion-rate distributions (eROSITA), time-domain outflow monitoring. These are sharpenings of existing instruments, not imagined sensors. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."
- **OUTWARD.** Import from a frame whose closure differs: control theory and cybernetics (the feedback analogue), and the galaxy-formation literature itself as a set of low-overlap observational and simulation frames. Each import is source-gated and provenanced in `10_source_ledger.csv`. Imports here add no framework atom; they bind existing shape terms. Fig 6 :25: "An import adds no atom to the world."
- The three are kept distinct. No filter handed us a verdict. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

### Updated verdict

The shape survives and is now sharper than the question's usual phrasing: regulation is a signed cycle between the black hole and an enumerated galactic habitat, crossing a lossy scale membrane, held on a relation that is read at the ground per object. The question is a union of at least three overlapping conditions and must be unbundled before it is searched. What does not survive is any claim to have named the unique regulator, any claim that a simulation consensus is independent corroboration, and any claim that the parsec to kiloparsec transfer has zero round trip gap. Status: `specified`, ungrounded, candidate.
