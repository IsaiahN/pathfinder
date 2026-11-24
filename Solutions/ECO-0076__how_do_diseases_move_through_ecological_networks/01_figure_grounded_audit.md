# Figure-grounded audit: ECO-0076, movement of disease through ecological networks

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Every substantive claim below carries its mode.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23) says LLM output is an approximate simulation and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Canonical local text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources opened this session: Craft 2015, Hassell et al. 2017, Meurens et al. 2021, Roberts et al. 2021, plus four essays by Isaiah N. All are recorded in `10_source_ledger.csv`. No quote below is taken from a summary.

---

## 0. The question restated in effect terms

> How do diseases move through ecological networks that connect wildlife, livestock, and people?

- **What is being decided:** the route by which a pathogen propagates across a network whose nodes include wildlife, livestock, and people, and what an observer must enumerate to describe that route correctly.
- **Option A:** movement is a chain of direct host-to-host contacts. Describe it by listing who touches whom inside the affected class. A chain is a single bond type with no branching (Fig 12 :48: "A chain is the degenerate case: one bond type, no branching.").
- **Option B:** movement is a contact cascade through an enumerated habitat. The nodes get their roles from the pathogen under study, and the consequential transmission sits two or three links out from the first observed case.
- **What an answer would look like, bound as an ordinary term (formula step "Direction"):** `route = network(structure) over hosts(actors) with typed contact bonds, cascaded outward to the order where the residual stops registering`. Writing the sought-for shape as a term is the discipline `THE_FORMULA.md` "Direction" requires, so the preference becomes refusable rather than invisible.
- **What each option leads to:** A yields a short path that systematically omits bridge hosts, vectors, environmental stages, and trophic side effects. B yields an enumeration that is larger up front but names which links must be measured before a path can be asserted.

The residual is not "where did this disease come from" in the abstract. It is always indexed by a slot: a particular pathogen in a particular host at a particular time (Fig 1 :19 "The residual is indexed by object slot, not aggregated.").

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: the residual is multi-condition. A spillover event involves at least a donor host, a recipient host, and the pathogen, and often a vector, an environmental stage, and a non-host species that changes the contact rate (Roberts et al. 2021 defines the interface as involving "at least three species"). This is a **union compound**, not one hard question: Fig 9 :55 "a bundled problem is usually a union of overlapping conditions, not a list of separate ones" and :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Symmetry: physical contact may be symmetric, but transmission along the edge is directed (donor to recipient); the network is the structure in which influence travels, not a symmetric join. Scale: first order is direct contact; second order is a bridge host or vector; third order is environmental persistence, land-use change, or a trophic cascade. Figure 11 :52 names exactly this ordering.

**One line per domain: actors / currency / anchor.** No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor (nameable, does not move with the frame) | partition or union |
|---|---|---|---|---|
| **E, ecological habitat and contact frame** | wildlife, livestock, people, vectors, soil/water, predators, competitors | contact and the transmission that travels along it | observed infection pattern in a named host population; outbreak and serological data | union compound with its own loop |
| **P, pathogen and host-shift frame** | strains, mutations, receptor compatibility, competence | reproduction and host shifting (ecological fitting or rapid adaptation) | sequence/phylogenetic data and observed host range | shares a boundary with E; cross-species jump is contact between closures |
| **M, management and intervention frame** | managers, surveillance, vaccination, land-use and movement controls | modification of contact rates | outbreak outcome after intervention | depends on E and P; cannot be settled by preference |

**Anchor test applied to each.** In E the anchor is the case count and the contact record; it does not change when a modeller changes their network prior. In P it is the sequence data; it does not change when a virologist changes their transmission hypothesis. In M it is the post-intervention outcome; it does not change when a manager prefers a cheaper policy. If any of these moved when a frame pushed on it, it would be a frame, not an anchor (Fig 2 :33 "The anchor must not update."). All three pass.

**Partition or union.** The three domains are a **union**, not a partition: a bridge host (say a pig or a mink) sits in E and P and M simultaneously. By Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again," each overlap gets its own loop; they are not averaged into onemaster answer.

**Dependency order (Fig 3).** The chain is ordered by dependency, not importance:
1. describe the residual in effect terms before naming a frame (Fig 9 :27-28);
2. enumerate habitat contacts, first order then outward (Fig 11 :43-44);
3. assign valence relative to the residual (Fig 11 :49-51);
4. trace the cascade until the residual stops registering (Fig 11 :52);
5. only then choose an intervention, with introduction available and subtraction unavailable (Fig 11 :62).
A step whose input never arrives cannot be diagnosed (Fig 3 :22), so a management proposal made at step 5 before steps 2-4 is a reading of nothing, not a weak reading.

**Strain test planned in advance.** A figure line that fits only if we stretch it governs another quantity. Lines that will be tested and declined below: Fig 4 :22 "Only methods cross up. Only head starts come down." (governs what passes between research scales, not what passes between species); Fig 6 :22 "NOVEL means novel relative to atoms, not to the world." (governs novelty in a library, not epidemiological novelty); Fig 12's `→` (a composition bond in a library, not an epidemiological time axis). None of these is used as verdict.

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing on this question | verdict after strain test |
|---|---|---|
| **Fig 1 The Agent** | R is per slot, not aggregated; frame-internal quantities cannot score themselves | governs how the residual is indexed; no ground reading |
| **Fig 2 The Ground** | anchor must not update; agreement from one pool is not corroboration | governs the checking arrangement, not the ecological route |
| **Fig 3 Dependency Chain** | enumerate before intervening | governs order of the derivation |
| **Fig 4 The Membrane** | lossy transform between scales; round trip must be measured | seed line is an analogy only; "methods cross up" strained, declined |
| **Fig 5 Mint Pipeline** | three guards; a new term is owed only when support, reach and novelty all pass | no new primitive is minted here |
| **Fig 6 Closure / Reachability** | boundary moves on contact with a differing closure | governs the cross-species jump, `general` |
| **Fig 7 Room Chain** | agreement is not a verdict | governs outreach, not ecology |
| **Fig 8 Union Surplus** | residual first, frame second; a search finding nothing is not proof of absence | governs method and honesty limits |
| **Fig 9 Leave / Arrive** | describe the residual before you look; union must be unbundled | governs the census above |
| **Fig 10 Ground Maintainer** | non-invertible transform produces branches; bring the residual, not the source | governs host-shift shape and outreach |
| **Fig 11 The Habitat** | enumerate contacts; valence is relative to the residual; contact cascades; asymmetric power | **primary verdict for domains E and M** |
| **Fig 12 The Bond** | network is a structure; chain is the degenerate case; isomer/functional group | governs what kind of thing a network is; `→` strained, declined |
| **Fig 13 Minimum Viable Set** | network is one of six structures: "that entities relate, and influence travels" | triangulates Fig 11 at low overlap |
| **Operators table** | typed relations, not a flat ingredient list; negated cases cannot be written without `¬` | governs contact typing and falsifiers |
| **Symbols table** | R is the gap between prediction and observation, always a slice | governs the residual definition |

---

## 3. Findings F1..Fn

### F1 : Movement is an enumeration problem, not a composition problem (`general`, single-source in figures)

Fig 11 :43: **"The habitat is enumerated, never composed."**
Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**
Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**

This is the first move. The network cannot be derived from a vocabulary of host classes; it is read off the world. A contact that has not been observed is not absent, it is residual. Craft 2015 (opened) makes the same operational point from inside disease ecology: researchers should have "a pathogen of interest in mind before collecting or using contact data," because the definition of a relevant contact changes with the pathogen. That is world corroboration, not the verdict.

**Refuter:** a complete, measured contact enumeration for a named pathogen in a named landscape that leaves no unobserved contact and no residual, with the cascade provably stopped at first order. Until such a census exists the enumeration stays open.

### F2 : Network is a substrate structure, so "influence travels" is a structural fact (`general`, triangulated)

Fig 13 :23-24: **"network" / "that entities relate, and influence travels"**.
Fig 12 :48: "A chain is the degenerate case: one bond type, no branching." (cited from the same verbatim extract.)

A network is not an aggregate of hosts; it is a structure in the minimal set, one of the three structures alongside spectrum and gradient. Its deciding question in Fig 13 :26 is "it decides what the measurement would mean." So the sentence "disease moves through the network" is not a metaphor layered on top of the host list: relation and travel are what the network term means.

Triangulation: Fig 11 gives the habitat/enumeration route and Fig 13 gives the substrate/structure route. These two figures draw on different evidence in the framework (contact cascade ecology versus the thermodynamic minimality argument), so the agreement is low-overlap within the figures. **Triangulated** for the structural claim.

**Refuter:** derive "network" from the other five substrate terms, or show that influence can travel between related entities without a network term (which would make it redundant and break Fig 13's minimality).

### F3 : Actor roles are relations relative to the pathogen, not fixed kinds (`general`, single-source in figures, strongly corroborated in world)

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**
Fig 11 :50: **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**
Fig 11 :51: **"No standing list of good actors survives a change of residual."**

This is the decisive figure for the three host classes. There is no figure-licensed sense in which "wildlife" is inherently the source, "livestock" inherently the bridge, and "people" inherently the victim. For pathogen X a wild bird may be reservoir, a pig amplifying host, and a person a dead end; for pathogen Y the valences change. Roles are assigned by the residual, then recorded.

World corroboration at low overlap: Hassell et al. 2017 distinguish "maintenance hosts," "non-maintenance hosts," "bridge hosts" and "dead-end" hosts; Roberts et al. 2021 state that "host species exhibit considerable variation in competence for maintaining pathogen transmission cycles." Both are findings from epidemiology, not from the framework. They corroborate; they do not decide.

**Refuter:** show a host class with a fixed valence as source, bridge or sink that does not change across pathogens and across residuals, such that the same actor cannot be re-assigned when the pathogen changes. That would break Fig 11 :49-51.

### F4 : Movement is a contact cascade, and first-order enumeration misses the third step (`specified`, triangulated)

Fig 11 :52-53: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**
Fig 11 :54: **"Carson, Silent Spring, 1962. The mechanism, biomagnification through the food chain to eggshell thinning, was established over the following decade."**

The figure's own worked case is ecological and about biomagnification: DDT reached the eagles not through a direct contact that a first-order list would capture, but through a cascade whose consequential residual sat three steps out. The mode here is `specified` when applied to a named pathogen: the claim is falsifiable and not yet measured for ECO-0076. The mechanism for the general case is `general`.

Why triangulated: the contact-cascade claim comes from Fig 11 (habitat and enumeration) and the "influence travels" claim comes from Fig 13 (substrate structure). Different figures, different evidence in the framework, same route shape.

**Refuter:** a named disease in a wildlife/livestock/people system whose full transmission is accounted for by first-order direct contacts, with no bridge host, vector, environmental stage, or trophic side effect, and with a measured residual of zero after first-order enumeration. If that is shown, the cascade claim fails for that case and must be narrowed.

### F5 : Cross-species jump is contact with a frame whose closure differs, and it is lossy (`general`, single-source in figures)

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 10 :70: **"If levels were copies there would be one lineage drifting and no branches. The tree of life is what a non-invertible transform looks like from outside."**
Fig 10 :68: "Different actors, a different currency, a different ground, and a lossy transform between." (same extract.)

A host jump is not a copy of the pathogen into a new species. It is a crossing into a habitat that was not authored by the pathogen and that remakes what the pathogen becomes; the branching pattern (a phylogeny with a non-invertible transform) is what this looks like from outside. Meurens et al. 2021 report that "all zoonotic pathogens from wildlife or other vertebrate reservoir must overcome a hierarchical series of barriers to cause spillover in humans," which is the world-facing version of the same barrier shape.

**Refuter:** demonstrate an invertible, lossless cross-species transfer in which the pathogen's behaviour in the new host is a copy of its behaviour in the old one and no branching or remainder appears. That would break the non-invertibility claim.

### F6 : Intervention asymmetry: you can add actors, you cannot subtract the habitat (`general`, single-source in figures)

Fig 11 :62: **"The seat's power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."** (quote used in full in `07`/`09`; the line continues onto :63 "the world and does not consult you.")

Management does not remove a network. It adds vaccination, surveillance, barriers, or alternative resources to a habitat that continues to exist. Roberts et al. 2021 say "Removing a particular species identified as a reservoir from the ecosystem will not necessarily remove the pathogen," which is the ecological consequence of the same rule.

**Refuter:** exhibit an intervention that deletes a contact from the habitat entirely, with the contact remaining absent without continuing maintenance, and with the ground confirming the deletion. Since contact is a fact about the world, this is expected to fail; if it succeeded, Fig 11 :62 would need re-census.

### F7 : The ground is the case data, not agreement among reviews (`general`, triangulated)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

The four opened reviews agree with one another on broad structure, but three of them share the same evidence pool (outbreak and modelling literature on zoonoses). Agreement among them is one pool talking (Fig 2 :40). What would settle a route claim is paired contact and genetic/serological data in one landscape, not a consensus of reviews.

**Strain test applied here:** Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." fits the outreach frame, not the ecological route. Using it as if it were a transmission law would be a strain; it governs how a checker is chosen. Re-census keeps it in F9, not in F1-F6.

### F8 : What survives, with mode attached

| claim | mode | figure / status |
|---|---|---|
| The habitat must be enumerated outward, not composed from host classes | `general` | Fig 11 :43-44, single-source |
| Network is a substrate structure in which influence travels | `general` | Fig 13 :23-24 + Fig 11 :52, triangulated |
| Host roles (reservoir, bridge, dead end) are relative to the pathogen | `general` | Fig 11 :49-51, single-source, world-corroborated |
| A first-order contact list misses third-order effects | `specified` for a named disease | Fig 11 :52-53, triangulated |
| A host jump is a lossy crossing into a habitat, producing branches | `general` | Fig 6 :23 + Fig 10 :70, single-source |
| Interventions add actors; they do not subtract habitat | `general` | Fig 11 :62, single-source |
| The specific route of any named pathogen in this system | **not reached** | requires the ground; `gap` for measurement |

---

## 4. Strains, declines and re-census (kept visible)

1. **Fig 4 :22 "Only methods cross up. Only head starts come down."** First tried as a line about a pathogen crossing species. Re-census: the figure governs what passes between *scales of a learning system* (methods up, head starts down), not what passes between species. Declined as verdict. It survives in `04_links_and_distribution.md` only as a rule about what to send an expert.
2. **Fig 4 :34-35 "A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."** Tempting as a pathogen metaphor. Re-census: it governs a method landing at a new level. Used nowhere as a disease claim; recorded here as a declined analogue so it is not silently smuggled in later.
3. **Fig 6 :22 "NOVEL means novel relative to atoms, not to the world."** An "emerging novel pathogen" is novel to the world, not novel relative to a library. Strain. Declined; novelty of a pathogen is not governed by this line.
4. **Fig 12's `→` sequence bond.** Used as a transmission chain would give a single-bond chain and would hide the branching that Fig 12 :48 calls degenerate. Declined as the route structure; the route is network + cascade (F2, F4).
5. **Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room."** Fits the claim that a contact list can never be declared complete. Kept in the honesty limit, not promoted to a route claim.
6. **After re-census: no live strain in F1-F7.** Each line governs the quantity it was assigned. Three declines are recorded above and remain visible.

---

## 5. Pre-registered refuter (written before the conclusion, per Seat Map :287)

The shape claim is refuted if any of the following is observed:

1. A named disease in a wildlife/livestock/people network whose transmission is fully accounted for by first-order direct contacts, with no bridge, vector, environmental stage or third-order effect, and with residual zero after enumeration.
2. A host class whose valence as source, bridge or sink is fixed across pathogens, such that the same actor cannot be re-assigned when the residual changes (breaks Fig 11 :49-51).
3. A demonstrated deletion of a contact from the habitat that persists without maintenance (breaks Fig 11 :62).
4. A lossless, non-branching cross-species transfer (breaks Fig 10 :70).
5. A figure re-census showing that "network" is derivable from the other five substrate terms (breaks Fig 13 minimality and F2).

If any fires, the corresponding claim is withdrawn. Until one is run, nothing here is labelled `grounded`. This refuter was written before the WATSON search and before the answer file; the world search was not allowed to change it.

---

## 6. Recommendation

1. Lead with the residual and the refuter, not with the framework (Fig 10 :52 "Bring a characterised residual, never the source.").
2. Ask a checker for the enumeration they would expect if the shape were true, before showing them any figure (Fig 9 :27-28).
3. Send the generator, which is the enumeration method and its refuter, not a recording of this derivation (Fig 4 :22).
4. Keep the three domain verdicts separate; do not merge E, P and M into one "answer" (Fig 9 :54-57).
5. State the mode on every substantive sentence. The honest form of the headline is: "Under the figures, a disease route through wildlife, livestock and people has the shape of a contact cascade over an enumerated habitat with roles relative to the pathogen. This is `specified`, not a measured path."

---

## 7. Canonical usage check

Two local canonical sources were read after sections 0-6 and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." A reading that makes figures contradict one another means the domain was misidentified, not that the figures are flawed. They return "what a missing thing would have to look like (a shape, not a name)" and stop where instruments cannot distinguish.
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the eight-step loop, and the Habitat line "Enumerate, never compose. Everything in contact with R, then what contacts those, outward until the cascade stops mattering. Valence is relative to R, not carried. Introduction is available; exclusion is not. Isolation substitutes a habitat, it does not remove one." This is the compact form of Fig 11 and is consistent with it.

### Retractions and confirmations

| earlier reading in this run | status after canonical check |
|---|---|
| F1 "enumeration problem" | **Confirmed.** The Formula habitat section says "Enumerate, never compose," which is the same rule at loop level. Triangulated inside the framework. |
| F3 "roles are relative" | **Confirmed and narrowed.** The Formula says "Valence is relative to R, not carried." It does not license calling a host good or bad in general. |
| F5 "lossy jump" | **Confirmed as shape, not mechanism.** Fig 10 :68-70 gives the structure; the biological mechanism (ecological fitting versus adaptation) is world content from Roberts et al. 2021 and is recorded as such. |
| Tempting use of Fig 4 seed line for pathogens | **Retracted.** Strain; governs methods across levels, not pathogens across species. Kept in section 4. |
| Tempting use of Fig 12 `→` for a transmission chain | **Retracted.** Strain; the chain is the degenerate case. Kept in section 4. |
| "We have answered how diseases move" | **Retracted at ground level.** No measurement was taken. The package returns a shape and a route with a refuter; the named path for a named pathogen is a `gap` awaiting the ground. |
| Apparent conflict Fig 11 enumeration vs Fig 13 six-term set | **Not strained.** Re-census: Fig 11 governs the habitat of a specific residual; Fig 13 governs the minimal substrate of any composing system. Different objects, as the canonical README requires. |
| F7 "reviews agree" | **Downgraded.** Three of the four opened reviews draw on the same outbreak/modelling pool. Their agreement is one witness, not four (Fig 2 :40). |

### Round trip recorded here, measured in `11_audit.md`

Sent up: the verbatim figure lines F1-F7. Abstracted: "diseases move by contact cascade over an enumerated habitat; roles are relative to the pathogen; interventions add, not subtract." Brought back down to a concrete claim: "avian influenza moved from wild birds through poultry to people." Three constraints drop on the return: the requirement to enumerate outward until the cascade stops, the role-relativity (frozen into "wild birds are the source"), and the asymmetry of intervention (planning to remove the reservoir rather than add barriers). The round-trip gap `R_T` is nonzero and is enumerated qualitatively; it is not a number because no ground reading was taken.

### Final verdict of this audit

The shape survives: a route has the form of a contact cascade over an enumerated habitat with typed contact bonds and roles relative to the pathogen, and the consequential step is often third order. It is `specified` where applied to a named host system, `general` as structural rule, and nowhere `grounded`. Domain E is triangulated (Fig 11 + Fig 13); domain P is single-source in the figures (Fig 6 + Fig 10 are one framework pool) with independent world corroboration; domain M is single-source (Fig 11). Strains after re-census: none live; three recorded and declined. Reached: shape and method. Unreached: the named path of any named pathogen. "Unreachable is a verdict here, not a silence" (Fig 13 :134, verbatim substring).
