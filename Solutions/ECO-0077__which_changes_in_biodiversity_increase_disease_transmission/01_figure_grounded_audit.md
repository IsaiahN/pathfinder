# Figure-grounded audit: biodiversity change and disease transmission

**Mode of this document: `general` on the shape, `specified` on the mechanism conditions, not
`grounded`.** Per `THE_FORMULA.md` (local): *"Mode. general · specified · grounded. State which.
Accepted means the ground settled it; otherwise candidate."*

**Status: SIMULATED DERIVATION, not a ground reading.** From *The Recursive Self-Improvement Trap*
(essay, read 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula
found in the architecture post" and "the truly testable output would need to be derived from the real
architecture or working the formula yourself." This document is checked for internal consistency
against the figures. It cannot settle the question it reports on.

**Sources.** Figure quotes: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local verbatim extract, cited
`Fig N :line`). Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` (local). Loop and
mode rule: `FRAMEWORK/figures/THE_FORMULA.md` (local). World sources: eight opened on 2026-11-23,
listed in `10_source_ledger.csv`.

---

## 0. The question as residual, in effect terms

The question asks which changes in biodiversity increase disease transmission and under what
conditions biodiversity can reduce it. Stated as an effect: a manager, conservation planner or
health officer is considering a change in the living community (a restoration, a removal, a
fragmentation, a rewilding, an introduced predator or a lost competitor) and needs to know the sign
and size of the resulting change in transmission of a specified pathogen to a specified host.

- **Arity.** At least three operands, not two: the biodiversity change, the residual (pathogen and
  target host) and the transmission outcome, with context as a fourth (scale, transmission mode,
  season, landscape). The question as written suppresses the second and fourth operands.
- **Symmetry.** Not a symmetric join. "Biodiversity up" plus "pathogen" does not yield one term. The
  same community change has opposite valence for different residuals. A flat formula cannot carry
  that, because the bond carries the information the operands do not (Fig 12 :46-47).
- **Scale.** Local community, landscape and regional scales are different slots. Effects reverse
  across scale, and the residual that matters can be several links out from the direct contact
  (Fig 11 :52-53). Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
- **What a legal answer looks like.** Not a list of universally good or bad biodiversity changes.
  A rule that, for a named residual, enumerates the habitat and the contact cascade and then reads
  valence at each changed link. Fig 11 :49: *"An actor's valence is relative to the residual, not a
  property it carries."*
- **Binding the sought-for shape as an ordinary term (Formula step "Direction").** We bind the
  sentence "valence is relative to the residual, not to the diversity change" and let it accrue a
  residual. It is then refusable by the same test as everything else, instead of being an invisible
  preference.

---

## 1. Domain census (done before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union | dependency |
|---|---|---|---|---|---|
| **D1, the pathogen's habitat** | reservoir hosts, vectors, non-competent hosts, predators, competitors, people | contacts x probability of transmission per contact x host density; measured prevalence or incidence | an instrument reading infection in the target host; it does not move because a frame changes its mind | **union** of component mechanisms (density, contact rate, transmissibility, competence); net pattern is a compound, not one variable | first: residual and habitat must be described before valence is assigned |
| **D2, the management seat** | managers, conservation bodies, public-health agencies | interventions: introductions, habitat substitution, vaccination, culling, restoration | the same ground, read as disease risk after intervention | **partition** of lever types by which contact mechanism each acts on | second: depends on D1's enumerated habitat, since a lever is only defined against a contact |
| **D3, the verification frame** | field ecologists, meta-analysts, modellers, philosophers of science | effect sizes, mechanistic paths, falsifiers | experiment, intervention, measurement; never agreement | **union** of component hypotheses, checked separately; a net null is not a mechanism null | third: depends on D1 for the residual and on D2 for the intervention actually applied |

**Order by dependency (Fig 3).** Describe the residual before choosing a frame (Fig 9 :27-28:
*"describe it before you go looking, or any frame you pick will seem to fit"*); enumerate the habitat
before assigning valence (Fig 11 :43-44); measure component mechanisms before reading a net effect;
let the ground settle, never the number of agreeing frames.

**Anchor test (Fig 2 :29-30).** *"An anchor is whatever settles the question and does not change its
answer because of what any frame thinks."* A meta-analytic mean, a prestige-weighted review and a
policy consensus are not anchors for this question. A measured change in infection in a defined host
population is.

**Strain test applied during the census.** The lines about capability being agent-and-habitat
(Fig 11 :39) and about introduction being available but exclusion not (Fig 11 :61-62) initially
seemed to compete for D1. Re-census: the first governs what capability is a property of, the second
governs what a seat can do. They are assigned to D1 and D2 respectively, so no line is strained.
A line that only fits with a strain governs another quantity.

---

## 2. Figure census (figures that bear on this residual)

| figure | verbatim bearing | verdict used |
|---|---|---|
| **1 The Agent** | *"The residual is indexed by object slot, not aggregated."* | the aggregate "biodiversity" is the wrong slot |
| **2 The Ground** | anchor does not update; shared pools disqualify agreement | verdict comes from measured disease, not consensus |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | describe residual and habitat before mechanism claims |
| **6 Closure / Reachability** | *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* | imported concepts need provenance and a shadow test |
| **7 Room Chain** | *"agreement compounds, evidence does not"* | many agreeing reviews are one pool |
| **8 Union Surplus** | *"Residual first, frame second."* | describe the effect before picking a discipline |
| **9 Leave / Arrive** | *"you get a kind of thing, never the answer itself"*; *"Use filters for the budget and witnesses for the verdict"* | a shape, not a universal list; filters never decide |
| **10 Ground Maintainer** | *"Bring a characterised residual, never the source."* | outreach order in `02` and `04` |
| **11 The Habitat** | valence is relative to the residual; habitat enumerated never composed; contact cascades; introduction available, exclusion not | **primary governing figure** for all three domains |
| **12 The Bond** | isomer, functional group | same species list, different interaction structure; net effects as a functional group |
| **13 Minimum Viable Set** | habitat is not the ground; the ground does not update | keep D1 (habitat, updates) apart from the anchor (ground, does not) |

---

## 3. Findings

Each finding carries its mode, verbatim figure lines quoted before the conclusion, a refuter and a
triangulation status. `triangulated` means two figures with low overlap. `single-source` means one
figure line governs and world sources only corroborate.

### F1: The aggregate variable is the wrong slot (decisive for the question as asked)

**Mode:** `general`, structural. **Status:** `triangulated` (Fig 1 slot indexing plus Fig 11 habitat
valence; a per-object residual rule and a habitat-valence rule share no evidence pool inside the
framework).

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism
and parasitism are relations rather than kinds."*
Fig 11 :51: *"No standing list of good actors survives a change of residual."*

A single number "biodiversity went up or down" averages over the slots that carry the signal: which
species changed, which pathogen, which host, which transmission mode. The figure line does not say
that diversity is harmless; it says valence is a relation between an actor and a residual, not an
ingredient carried by the actor. Applied here: a predator that lowers a reservoir host for one
pathogen can raise it for another, and the same forest can dilute one tick-borne agent and amplify
another.

World corroboration (secondary, each opened): Keesing et al. 2010 (Nature) write that "In principle,
loss of biodiversity could either increase or decrease disease transmission" and that areas of high
biodiversity "may serve as a source pool for new pathogens"; Salkeld et al. 2013 (Ecology Letters)
conclude the relationship is "probably idiosyncratic"; Luis et al. 2018 (PNAS) find dilution and
amplification "at the same time in the same host-pathogen system"; Hopkins et al. 2022 (Lancet
Planetary Health) report that forest cover or host biodiversity can be associated with "unexpected
amplification of Lyme disease risk" in some contexts.

**Refuter:** if one aggregate diversity metric predicted the sign of transmission change across
independently chosen pathogen systems with high out-of-sample accuracy and no interaction terms,
valence would be a property of the diversity change and this finding would fail.

### F2: Which changes increase transmission: enumerate the habitat and the contact cascade

**Mode:** `specified`, mechanism-level. **Status:** `triangulated` (Fig 11 enumeration plus Fig 9
"R's own predicates name the habitat"; the world sources across disease ecology, network mathematics
and animal behaviour add independent, low-overlap detail).

Fig 11 :43: *"The habitat is enumerated, never composed."*
Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and
outward until the cascade stops mattering."*
Fig 11 :47: *"relations: pollination, predation, competition, dependency"*
Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or
measure yet is the residual."*
Fig 11 :52-53: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the
eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps
out."*
Fig 9 :26: *"R's own predicates name the habitat that holds φ*"

The figure-licensed shape of the answer to "which changes" is therefore: take the specific residual
(pathogen, host, place, scale); enumerate actors, conditions and relations in contact with it and
outward until the cascade stops mattering; locate the changed link; then read the sign from that
link. Changes that raise competent-host density, contact rate or probability of transmission per
contact amplify; changes that lower them, or that add non-competent hosts or predators that suppress
reservoir density, dilute. The list is read off the world, not composed from "biodiversity".

World corroboration: Luis et al. 2018 decompose transmission into host density, contact rate and
transmissibility and show opposing component effects in one system; Keeling and Eames 2005 (J R Soc
Interface) show that transmission depends on the structure of the mixing network, not population-wide
random mixing; Silk et al. 2019 (Phil Trans R Soc B) show that non-random mixing changes demographic
thresholds for amplification or attenuation and that interventions can rewire contact networks; the
Cary Institute project page (Ostfeld lab, fetched 2026-11-23) states the four conditions under which
host diversity dilutes a vector-borne zoonosis.

**Refuter:** a proposed change whose effect sign cannot be localised to any enumerated contact link,
after an honest enumeration, would refute the shape rather than merely leave it empty. A study that
predicted the sign from a species count without measuring any contact link and then survived
out-of-sample tests would also refute it.

### F3: Under what conditions biodiversity reduces transmission: a four-part instance, not a law

**Mode:** `specified`. **Status:** `single-source` at the figure level (Fig 11 valence lines) with
world corroboration from an overlapping disease-ecology pool, declared as one witness.

Fig 11 :49 (above) governs the form of the condition: the same actor is a benefactor to one residual
and malfactor to another. Keesing, Ostfeld and colleagues, via the Cary Institute page, give the
instanced conditions for a vector-borne zoonosis: a generalist vector, hosts that vary strongly in
reservoir competence, horizontal rather than transovarial acquisition, and a competent host that is a
dominant member of the community. These are not new figure primitives. They are a reading of which
contacts exist in a specific habitat, so they are an instance of Fig 11 :44 and Fig 9 :26.

Fig 9 :32: *"you get a kind of thing, never the answer itself"* is the limit: the framework returns
the shape of the condition (generalist vector, variable competence, dominant competent host as a
functional group), not a guarantee for any named place.

**Refuter:** a system meeting all four stated conditions in which increasing diversity reliably
increased transmission, with the contact enumeration checked, would break the instanced reading
while leaving F1 intact. That is a useful, cheap refutation to run.

### F4: Management: introduction is available, exclusion is not

**Mode:** `general` for the rule, `specified` for any intervention. **Status:** `triangulated` (Fig 11
asymmetry plus Silk et al. 2019 on culling-induced rewiring and Hopkins et al. 2022 on context
dependency and trade-offs; low overlap between the framework line and the intervention literature).

Fig 11 :61-62: *"The seat's power is asymmetric. Introduction is available; exclusion is not. You can
add an actor and you cannot subtract the habitat, because contact is a fact about the world and does
not consult you."*
Fig 11 :65: *"Introducing an actor for its cascade is ecosystem engineering, after Jones, Lawton and
Shachak, 1994. Cane toads and kudzu are the same move with the cascade unenumerated."*
Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."*
Fig 11 :67: *"Move the residual and you must reproduce everything its goal required, and you inherit
the new habitat's actors, which you did not choose."*
Fig 11 :68: *"what you failed to reproduce is invisible until the goal fails"*
Fig 11 :69: *"what you unintentionally introduced is invisible until it acts"*

Consequence for this question: "reduce biodiversity to reduce disease" is not generally an available
lever. Available levers add actors (predators, non-competent hosts, vaccination, vector control) or
substitute habitats, and they require ongoing work because the habitat is never authored. A
restoration that removes a reservoir by changing the habitat is a substitution with inherited actors,
not an erasure. Cane toads and kudzu are the named failure mode of introduction with an unenumerated
cascade.

**Refuter:** show a managed system in which a habitat contact can be subtracted outright, with no
substitution and no continuing maintenance, and the asymmetry line is broken for that domain.

### F5: A net pattern is not a mechanism, and a filter is not a witness

**Mode:** `general`. **Status:** `triangulated` (Fig 9 budget/witness rule plus Fig 11 world-reading
rule; Chen and McFarlane 2025 is an independent philosophy-of-science witness to the same failure).

Fig 11 :48 (above): *"You do not invent the list. You read it off the world, and what you cannot
perceive or measure yet is the residual."*
Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a
verdict."*
Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search
again."*
Fig 2 :40 (above): shared-pool agreement disqualifies a verdict.

A meta-analytic mean, a review verdict or a policy label ("biodiversity buffers disease") is a
filter for where to spend effort. It is not a witness for the mechanism in a given system. Chen and
McFarlane 2025 (Ecology and Evolution) argue that the net dilution and amplification hypotheses are
not falsifiable as proposed because a null can be either a true null or opposing component effects
that cancel, and conclude that "process cannot be inferred from pattern." Salkeld et al. 2013 report
a weak, heterogeneous relationship and idiosyncrasy. Both agree with the figure reading; because
they draw on the same disease-ecology literature, they count as one evidence pool, not two
independent witnesses.

**Refuter:** a demonstrated cross-system rule in which the net effect sign uniquely identified the
component mechanism, without component measurement, would break this finding.

### F6: Provenance on imported concepts

**Mode:** `general`. **Status:** `triangulated` (Fig 6 plus Fig 8 on provenance; the import here is
the ecological literature itself).

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose
closure differs."*
Fig 8 :53: *"Residual first, frame second."*

Terms such as dilution, amplification, reservoir competence, density-dependent transmission and
mixing network come from the ecology and mathematics frames, not from the six-term substrate. They
are imports and are recorded as such in `10_source_ledger.csv` with author, venue, year, accessed
date and quote. They are secondary corroboration of a figure verdict, never a source of that
verdict. Agreement from a shared evidence pool is one witness (Fig 2 :40).

**Refuter:** derive a transmission-sign rule from the figures alone that out-predicts the imported
mechanism vocabulary on measured systems; that would show the import was unnecessary.

### F7: What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| The sign of a biodiversity change is not carried by the aggregate change | `general` | Fig 1 :19, :22; Fig 11 :49-51 |
| The habitat is read off the world and enumerated, including cascade links | `general` | Fig 11 :43-48, :52-53 |
| For a named residual, sign is read at changed contact links (density, contact, transmissibility, competence) | `specified` | Fig 11 :44, :49; Fig 9 :26 |
| A seat can add actors or substitute habitats but cannot subtract a habitat | `general` | Fig 11 :61-69 |
| Net effect patterns are filters, component measurements are witnesses | `general` | Fig 9 :60; Fig 11 :48 |
| Dilution and amplification are net outcomes of a functional group of component mechanisms | `specified` | Fig 12 :124 |
| Which changes increase transmission in a specific place | **not answered here** | needs the ground |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written before the run is a design instrument. The shape
claim is refuted if any of the following holds.

1. **Invariant valence.** One aggregate diversity metric predicts the sign of transmission change
   across independently chosen pathogen systems with high accuracy and no interaction terms, in
   out-of-sample tests. (Breaks Fig 11 :49-51 and F1.)
2. **Standing good-actor list.** The same actor keeps the same transmission valence for two
   different pathogens in the same habitat, at the same scale, after honest enumeration. (Breaks
   Fig 11 :50-51.)
3. **Subtraction available.** A managed habitat contact is removed outright, with no substitution
   and no continuing maintenance, and disease risk falls accordingly. (Breaks Fig 11 :61-69.)
4. **Pattern licenses process.** A net effect sign identifies the component mechanism without
   component measurement and survives independent replication. (Breaks F5 and Fig 9 :60.)
5. **Shallower cascade suffices.** A first-order enumeration predicts the measured sign where the
   residual that mattered was known to be three links out. (Breaks Fig 11 :52-53.)

None of these fired in the sources read. That is recorded, but it is not a victory: most of those
sources draw on the same disease-ecology pool, so their agreement is one pool talking (Fig 2 :40).

---

## 5. Recommendation

1. Send the shape, not a list. Lead with F1 and the pre-registered refuter (Fig 10 :52).
2. Ask an outside checker for the habitat enumeration of a pathogen they know, not for agreement
   with the framework (Fig 8 :53).
3. State mode on every substantive claim; nothing here is `grounded` (Formula mode rule).
4. Record world imports with provenance and overlap; never let a review verdict decide the verdict
   (Fig 9 :60).
5. Treat management advice as introduction and substitution with monitoring, never as subtraction
   (Fig 11 :61-69).

---

## 6. Canonical usage check and retraction / confirmation log

Two local files were read after the first sections and govern how the figures may be used:
`FRAMEWORK/reference/FIGURES_README_canonical.md`, which says the quotes are the authority and that
a reading making one figure contradict another has misidentified its domain; and
`FRAMEWORK/figures/THE_FORMULA.md`, which supplies the mode rule and the three-question branch in
step 7.

| earlier reading | status after the canonical check |
|---|---|
| "Which changes increase transmission?" should receive a universal list | **Retracted.** The framework returns a shape, not a name (Fig 9 :32; figures README: *"a shape, not a name"*). The list is read off a specific habitat. |
| Fig 11 :39 capability line governs the sign of transmission | **Retracted.** It governs agent-and-habitat capability. Re-census moved it to a background claim only; sign is governed by :49-51. |
| Fig 11 :61-69 asymmetry seemed to conflict with restoration practice | **Not strained after re-census.** The line governs what a seat can do (D2), not what happens in an unmaintained habitat (D1). Managed ecosystems are permanent work. |
| World literature "confirms" the figure verdict | **Narrowed.** Several sources share the disease-ecology evidence pool (Keesing, Luis, Salkeld, Cary, Hopkins overlap). Keeling and Eames (mathematics) and Chen and McFarlane (philosophy of science) are the low-overlap witnesses. Agreement from a shared pool is one witness, not two. |
| This derivation could settle the ecological question | **Retracted.** Simulated derivation, not a ground reading. Only measured infection in a defined host population settles a system. |
| "Unreachable" language | **Not used.** The universal list is not unreachable; it is the wrong slot. Fig 13 :134 *"Unreachable is a verdict here, not a silence"* is noted but not deployed here. |

**After re-census: no strained figure line remains.** F1 through F6 keep their verdicts, with F3
marked single-source and the shared evidence pool declared rather than hidden.
