# Figure-grounded audit: which network structures limit cascades without blocking beneficial diffusion?

**Mode of this document: `specified` on the shape, `general` on the union and valence laws, `gap` on the ranking of named topologies. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (essay, fetched 2026-11-22) says *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* and the Arrival of the Fittest architecture page says an LLM output *"could never be verified if the solutions presented were not contrived to fit the formula."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement, simulation or experiment was run here.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, the eight essays, and the world sources opened 2026-11-22 and listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

Let R be the gap between two requirements placed on one set of links:

- **Containment.** A failure at node s should not reach nodes more than a small number of steps from s.
- **Diffusion.** A beneficial signal, resource, practice or control action should still reach nodes far from its source.

Both requirements are carried by the same links. Removing a link to satisfy the first removes capacity for the second. Adding a link to satisfy the second adds a path for the first. R is therefore not "how do we make a network robust" but "how does one structure give opposite valences to the same link, depending on what is travelling over it."

**Arity:** two conditions, not one quantity. **Symmetry:** asymmetric. A failure propagates by overload or threshold; a beneficial diffusion propagates by adoption, reinforcement or control. The two have different threshold rules, so the link is not a symmetric connector between equivalent states. **Scale:** micro (node and link), meso (module, community, bridge node), macro (global cascade or system-wide spread). The effect is multi-step: the residual that matters may be three steps out, not at the neighbour.

Because R has two conditions, the first question is not "which topology wins" but whether the two conditions form a partition or a union. That decision is made below before any topology is named.

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D0, the residual | failed nodes, adopting nodes, bridge links | cascade reach versus diffusion reach per slot | the measured per-node outcome, Fig 1 :19 | union or partition; order by dependency |
| D1, network structure (substrate) | nodes, links, modules, bridge nodes, overlapping memberships | influence travel, Fig 13 :24 | the six-term substrate and its cross-kind rule, Fig 13 :74 | partition of which compositions are legal, union at meso scale |
| D2, failure dynamics frame | overloaded links, thresholds, loads, failed components | cascade size, giant component, served demand | experiment, outage data, physics-based simulation | containment measurement |
| D3, diffusion and contagion frame | seeds, adopters, reinforcing neighbours, control signals | diffusion speed and reach | experiment, field data, threshold model | beneficial-spread measurement |
| D4, ecology and finance frame | species, sectors, mutualistic partners, exposures | persistence, stability, diversification | empirical persistence and loss data | valence reversal by flow type |
| D5, verification and outreach frame | expert readers, reviewers | agreement and residual | the ground, never agreement, Fig 2 :29 | checking; all seats here share one evidence pool |

**Partition or union.** D2 and D3 are conditions on the same links. The overlap (a link carrying both a failure and a benefit) is a compound with its own loop, so the whole is a **union**, not a list of separate questions. D1 is upstream of both: the structure decides what a measurement would mean (Fig 13 :26). D4 is a low-overlap witness to the valence claim. D5 is a checking arrangement, not a source of verdict.

**Order by dependency (Fig 3).** Describe R in effect terms, decide union versus partition, enumerate the habitat outward (Fig 11 :44) and measure per slot (Fig 1 :19). Only then search for a frame that predicts the shape. Effort spent ranking topologies before the residual is described lands above the break and cannot be used.

---

## 2. Figure census (candidate lines, quoted before concluding)

| figure | line quoted | bearing | preliminary verdict |
|---|---|---|---|
| 1 The Agent | Fig 1 :19, Fig 1 :22 | residual is per slot, never averaged | global "robustness score" is disqualified as an aim |
| 2 The Ground | Fig 2 :29, :35, :40, :42 | anchor, mirror, correlation, cost | agreement cannot rank topologies |
| 4 The Membrane | Fig 4 :30 | round trip gap | any condensation into "modularity helps" must be bracketed |
| 6 Closure | Fig 6 :23 | import moves the wall | the missing atom is flow-specific link typing, from another frame |
| 8 Union Surplus | Fig 8 :39, :45 | search is not proof of absence; two frames reach more | a failed search for a universal best topology proves nothing |
| 9 Leave / Arrive | Fig 9 :4-5, :27-28, :32, :54, :55-56, :60 | split rather than search; describe before looking; union unbundling | the question is a union compound; shape not a name |
| 10 Ground Maintainer | Fig 10 :42, :52 | verifier non-access; bring the residual | ask for refutation before showing the framework |
| 11 The Habitat | Fig 11 :40, :43, :44, :49, :50, :51, :52-54 | valence relative to residual; cascades multi-step | no standing "good structure" list; enumerate outward |
| 12 The Bond | Fig 12 :94, :117 | arrangement is the substance; isomer | same nodes, different wiring, different behaviour |
| 13 Minimum Viable Set | Fig 13 :24, :26, :74, :134 | network is a structure; cross-kind composition; unreachable is a verdict | the framework supplies a shape and a stop, not a ranking |

Strain test applied as findings are written: if a line only fits by forcing it, it governs another quantity and the census is redone. Two such strains were found and are recorded in section 9, not smoothed over.

---

## 3. Findings

### F1 - The question is a union compound, not one hard problem

Fig 9 :4-5: *"are not one hard question but several well-formed ones. Split it rather than search."*

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*

Containment and diffusion are two conditions on one set of links. Their intersection is the link that must both stop a cascade and pass a benefit. A single lever, for example removing links or adding modularity, clears the region where only one condition holds and leaves the intersection standing, because the other condition still binds. This is why the literature below reports opposite effects for the same structural feature: the studies are measuring different conditions and then aggregating them into one verdict.

**Mode:** `general` (structural). **Status:** triangulated (Fig 9 plus four independent world fields, section 5). **Refuter:** if a single lever is shown, on one system and in one measurement, to move containment and diffusion monotonically in the same direction across every slot, then the two conditions were a partition and this finding is withdrawn.

### F2 - Valence is relative to the flow, so no standing list of best structures survives

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*

Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*

Fig 11 :51: *"No standing list of good actors survives a change of residual."*

Apply this to links and modules rather than species. A bridge node that is a malfactor for a failure cascade is a benefactor for beneficial diffusion. A module boundary that contains a fault also blocks a practice. The label "good structure" is a relation between a topology and a flow, not a property of the topology. The question as asked, "which structure most effectively limits cascades without blocking beneficial diffusion," therefore cannot have a flow-independent answer. It has an answer only after the two flows are named in effect terms, which is the discipline Fig 9 :27-28 requires: *"describe it before you go looking, or any frame you pick will seem to fit"*.

**Mode:** `general`. **Status:** triangulated (Fig 11 plus the ecology reversal in Landi et al. 2018 and the social diffusion reversal in Centola and Macy 2007; low overlap between the fields). **Refuter:** exhibit a link whose effect on cascade size and whose effect on diffusion reach have the same sign under the same threshold rule and same measurement; then valence is carried by the link and Fig 11 was misapplied.

### F3 - Cascade effects are multi-step; a first-order census misses the residual

Fig 11 :52-54: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

Fig 11 :43: *"The habitat is enumerated, never composed."*

Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*

A topology assessed only by degree or immediate neighbours is a first-order enumeration. The failure that matters can be at the second or third step, through a dependency link or an overloaded parallel path. This is the figure-grounded reason the world literature disagrees about scale-free hubs: load is concentrated at hubs, and the step at which the measurement is taken changes the verdict (Kusunoki and Hayashi 2024; Korkali et al. 2017). The habitat must be enumerated outward until the cascade stops mattering, and re-enumerated when the question changes.

**Mode:** `general`. **Status:** single-source for the figure rule (Fig 11), corroborated by the world literature on nonlocal propagation. **Refuter:** a measurement showing that for a given system the cascade never propagates beyond direct neighbours, at every resolution tried, would make the extra enumeration unnecessary for that system while leaving the general rule intact.

### F4 - The residual must be measured per slot, not as a global robustness score

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

A single number such as "network robustness R" hides the one community whose cascade probability is still rising while the mean falls. The world analogue is Kleinberg's µ-risk, the maximum failure probability of any node rather than the average (Kleinberg 2011, FOCS). The correct measurement is a vector: failure probability and diffusion reach for each node, module and bridge, kept separate and never averaged into a headline.

**Mode:** `specified`. **Status:** triangulated (Fig 1 plus Kleinberg 2011). **Refuter:** show that for the system in question the per-slot residuals are exchangeable and the mean is a sufficient statistic; then the aggregation is harmless here.

### F5 - The framework returns a shape, not a name; it cannot rank named topologies

Fig 9 :32: *"you get a kind of thing, never the answer itself"*

The canonical figures README states the limit as *"what a missing thing would have to look like (a shape, not a name)"*. Fig 13 :134 adds *"Unreachable is a verdict here, not a silence"*. The figures supply structural constraints on any candidate, but no figure line compares a modular network with a lattice, a scale-free network or a multiplex network and declares a winner. The ranking is empirical, and it must be settled by a ground, not by reading it off the framework.

The shape that survives is: two conditions to be unbundled before search (F1); flow-relative valence recorded, not assumed (F2); habitat enumerated to the step where the cascade stops mattering (F3); per-slot measurement (F4); cross-kind composition where the question is about composition at all (Fig 13 :74); and a source-gated import for the missing atom (F6).

**Mode:** `specified`. **Status:** triangulated (Fig 9 and the canonical README). **Refuter:** produce a figure line that ranks named topologies, quoted verbatim from `03-FIGURES_TEXT.md`; until then the ranking is `gap`.

### F6 - The missing atom is flow-specific link typing, to be imported with a source gate

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

The framework's closure contains network as a structure (Fig 13 :24, *"that entities relate, and influence travels"*) but not a typed distinction between a failure-propagation link and a beneficial-diffusion link. That distinction exists in the network-science frame: coupled infrastructure helps only *"if modes of internetwork failure propagation are constrained"* (Korkali et al. 2017), and a link that is redundant for a simple contagion is a wide bridge for a complex contagion (Centola and Macy 2007). Importing the flow label onto links is the operator that moves the wall. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* A search inside the six-term set that cannot rank topologies is not evidence that no ranking exists; it is a signal to import.

**Mode:** `specified`. **Status:** single-source for the import rule (Fig 6); the imported content is corroborated by two low-overlap world fields. **Refuter:** derive a flow-discriminating link type from the six terms alone without adding an atom; then no import is owed and F6 is retracted.

### F7 - Verdict on the empirical ranking: gap, plainly

After a genuine re-census over all thirteen figures, the Operators and Symbols tables and the formula, no line governs the question "which named topology ranks first." The world literature itself conflicts: modularity is reported as inversely related to cascade robustness in Internet null models (Wang et al. 2015), as having an optimal intermediate value for information diffusion (Pereira et al. 2020), as stabilising food webs while reducing persistence in mutualistic networks (Thébault and Fontaine 2010, as reported by Landi et al. 2018), and as both harmful and helpful depending on how internetwork cascades are modelled (Korkali et al. 2017).

By the framework's own conflict rule, a conflict sends the search back to the domain census, never to a flipped verdict. Re-census resolves it: the studies are not measuring one quantity. They differ in flow type (failure versus benefit), in threshold rule (simple versus complex), in scale of measurement (node versus module) and in whether coupling enables a beneficial control function. Once those four axes are named, the apparent contradiction becomes the valence finding F2. The empirical ranking itself remains `gap`.

**Mode:** `general` on the resolution of the conflict, `gap` on the ranking. **Status:** triangulated for the resolution, `gap` for the name. **Refuter:** the ground, namely a per-slot comparative measurement with both flows defined on the same system; this is what would close the gap.

### F8 - The arrangement carries the difference, so isomorphic topologies must be compared by bonds

Fig 12 :94: *"The arrangement is the substance."*

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Two networks with the same nodes and the same number of links but different wiring are Fig 12 isomers: identical ingredient lists, different substances. Degree distribution alone is therefore not a sufficient description, which is exactly what the null-model study reports: *"the degree distribution is not enough to identify the robustness of a network"* (Wang et al. 2015). `06_isomers_and_order.md` develops this into the catalyst and cycle cases and attaches a falsifier.

**Mode:** `general`. **Status:** triangulated (Fig 12 plus the null-model result, low overlap between a metatheory and an empirical network study). **Refuter:** exhibit two topologies with identical atoms and bonds, under the same flow and the same measurement, that differ in cascade or diffusion outcome; then the bond is not carrying the difference.

### F9 - Agreement and prestige cannot decide this question

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

A list of researchers selected for agreeing that modularity is the answer is a convention, not corroboration. The danger is concrete here because most of the network-science sources in section 5 cite one another and share the same Watts threshold and percolation machinery. Agreement among them is one evidence pool talking. The two low-overlap witnesses, ecology and social diffusion, are worth more precisely because they reach a similar valence conclusion from different instruments.

**Mode:** `general`. **Status:** triangulated (Fig 2 and the overlap column in `10_source_ledger.csv`). **Refuter:** an independent instrument, for example a physical power-system test or a field experiment, that returns the same ranking without sharing the percolation model; that would be a real witness, not a poll.

### F10 - A note on what the figures do not say

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

The figures do not say modularity is good, that hubs are bad, that decentralisation always helps, or that a particular degree distribution is optimal. They say what shape a discriminating structure must have and how to check it. Treating this derivation as a ranking would be the named error of letting a filter hand you a verdict. Fig 10 :52: *"Bring a characterised residual, never the source."*

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The following are committed in advance, before the verdict in sections 5 to 8 was written.

1. **Union refuter.** On one system, in one measurement, a single lever moves containment and diffusion monotonically in the same direction across every slot. Then F1 was a partition, not a union, and the call to unbundle is withdrawn.
2. **Valence refuter.** A link is exhibited whose effect on cascade size and whose effect on diffusion reach have the same sign under the same threshold rule and measurement. Then F2 is false and a flow-independent "best structure" becomes possible in principle.
3. **Shape refuter.** A figure line is quoted verbatim from `03-FIGURES_TEXT.md` that ranks named topologies, or a ground measurement shows a structure that violates cross-kind composition yet contains cascades and passes benefits. Then F5 fails.
4. **Per-slot refuter.** After measurement, the per-slot residuals are exchangeable and the mean is a sufficient statistic. Then F4's demand for per-slot reporting was unnecessary for that system.
5. **Import refuter.** A flow-discriminating link type is derived from the six terms with no added atom. Then F6 is retracted.

If any fires, the affected finding is retracted in section 9 with the date and the reason. None fired during this derivation, which is weak evidence only: the derivation is simulated and shares one evidence pool.

---

## 5. Recommendation

1. Ask the question in two parts, never one. State the failure flow and the beneficial flow in effect terms before naming any topology (F1, Fig 9 :54).
2. Record valence per link per flow, not as a property of the structure (F2).
3. Enumerate the habitat outward until the cascade stops mattering, including overlapping modules and dependency links (F3).
4. Report per-node and per-module failure probability and diffusion reach as vectors, never as one robustness score (F4).
5. Treat any import of flow typing as sourced and shadow-tested, with its provenance in the record (F6).
6. Call the empirical ranking `gap` until a ground settles it, and send the shape plus its refuter rather than a list of "best" networks (F5, F10).
7. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Any one-sentence condensation of this audit into "modularity helps" loses the gap and must carry a `R_T` note.

---

## 6. Canonical usage check

Two sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* The framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground and does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not escalation.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "Modularity limits cascades, therefore modularity is the answer" | **Retracted.** F2 and F7. Modularity contains one flow and can block another; valence is residual-relative. The world literature is itself split, and the conflict resolves by re-census into two different flows. |
| "The framework can name the best topology" | **Retracted.** F5. The canonical README says shape, not a name, and no figure line ranks topologies. Status `gap` for the ranking. |
| "Fig 13's network line decides which topology wins" | **Retracted as a strain.** Re-census: Fig 13 :24 defines what a network is and :26 says a structure decides what a measurement would mean. It does not rank instances. Different quantity, no strain after re-census. |
| "Fig 11 :49-51 is about species only" | **Narrowed and confirmed.** The figure speaks of actors and residual; the Society of Agents essay explicitly says *"And nothing is bad in itself, only bad for a given goal, the way one species is both predator and prey."* The link-to-flow reading is an application, marked `specified`, not a verbatim figure claim. |
| "The world sources agree, so the verdict is corroborated" | **Retracted.** Most share the Watts/percolation model and cite each other. Overlap is recorded in `10_source_ledger.csv`. Only ecology and social diffusion are low-overlap, and even they are simulated witnesses here, not ground readings. |
| "This derivation settles the question" | **Retracted.** Simulated derivation, not a ground reading. No measurement was run. |

### Round trip gap R_T

`10_source_ledger.csv` and `11_audit.md` carry the full round trip. In brief: the verbatim figure lines are abstracted into the shorthand "two conditions on one set of links, valence relative to flow, enumerate outward, measure per slot, import flow typing." Concretising that shorthand back into the claim "modularity is the best structure" drops four constraints: the union split, the per-slot requirement, the source gate on the import, and the shape-not-a-name limit. R_T is nonzero and is recorded as an enumerated set of dropped constraints, not as a number. Treating the shorthand as identical to the figure set would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

### Strains after re-census

- **Fig 13 network vs world topology rankings.** Dissolved: the figure defines the structure and what a measurement means; the world rankings are measurements. Different quantities.
- **Modularity helps versus modularity hurts in the world literature.** Dissolved by F7 re-census: flow type and scale of measurement differ between studies. No figure was forced.
- **After re-census: one live gap (the empirical ranking), no hidden strain.**

---

## 7. Final audit position

The shape survives: this is a union compound; link valence is relative to the flow; the habitat must be enumerated several steps out; the residual must be reported per slot; and the missing atom is a flow-typed link imported with provenance. The empirical ranking of named topologies does not survive as a framework claim; it is `gap`, owed to a ground. All substantive shape claims are `specified` or `general`, none `grounded`, and the whole derivation is a simulation checked for internal consistency, not a reading of the ground.
