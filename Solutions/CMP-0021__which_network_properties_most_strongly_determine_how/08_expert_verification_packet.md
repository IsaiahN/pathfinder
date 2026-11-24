# Expert verification packet: the Tether on network properties and spreading

**What this is:** a claim in a form a network scientist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` for the shape, `general` for the substrate rule, `gap` for the specific ranking. Not `grounded`.** No controlled cross-process comparison is claimed. This is a shape and a route, not a result.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. See `05_what_shape_means.md` §7.

## 1. The claim, in one paragraph

Spreading is influence travelling over a network structure, and any such travel is a flow requiring a spendable difference and a finite resource. Degree distribution, clustering and community structure are not rival atoms but overlapping arrangements of the same node and edge set, so a single property cannot clear the whole residual. The comparison the question asks for is a per-case comparison of residuals with valence relative to the residual, not an average across processes. No figure line ranks the three properties, so the specific ranking is a declared `gap`, not a hidden answer. What is offered is that shape, falsifiers written in advance, and the kind of source-discriminating experiment that would close the ranking.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 13 and 9

- **Statement:** spreading is influence travel over a network structure, while the process supplies the spendable difference. The three named properties form a union of overlapping conditions, not a partition.
- **Source, verbatim:** Fig 13 :24 "that entities relate, and influence travels". Fig 13 :22 "a difference that can be spent". Fig 13 :76 "Energy and a gradient compose a flow." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
- **Refuter:** derive "network" from the other five substrate terms; show a process that spreads with no spendable difference and no finite resource; or show the three properties are a disjoint partition so one lever clears the intersections.

### C2 - network-science facing; checkable against a simulation or contact-trace dataset

- **Statement:** over a fixed atom set (nodes, edges, transmission states), degree sequence, transitivity and community boundaries are isomer-like arrangements: same ingredients, different bond structure, different spread. Under Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." and Fig 12 :94 "The arrangement is the substance." the ingredient-only description loses the causal information.
- **What to check:** take two networks with identical degree sequence but different clustering or modularity. Run the same SIR, SIS and threshold-cascade processes from matched seeds. Do the per-slot spread residuals differ? If they do not, the arrangement is redundant for this question.
- **Refuter:** identical speed and identical final reach (within measurement resolution) for all such pairs across all process types and seed policies. That kills the isomer claim and leaves the three properties as redundant descriptions of one quantity.

### C3 - methodology; checkable against the figures and against the design of a study

- **Statement:** the ranking must be per network/process/seed slot, with valence relative to the residual, and it is a `gap` at the framework level.
- **Source, verbatim:** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 9 :32 "you get a kind of thing, never the answer itself." Fig 13 :134 "Unreachable is a verdict here, not a silence".
- **What to check:** does any figure line in `03-FIGURES_TEXT.md` rank these three properties? Grep for "degree", "clustering", "community". There are none; the network term is defined only as influence travel.
- **Refuter:** a property whose ranking is stable across process type, seed policy, network size and spatial embedding, with a per-slot residual that trends down under that property and nowhere else; or a figure line that does rank them, which moves C3 from `gap` to figure-grounded.

## 3. What is explicitly not claimed

- Not that degree distribution wins, or that hubs are always the answer.
- Not that clustering or community structure is irrelevant.
- Not that the framework settles the empirical literature. The ranking is a `gap`.
- Not that structure alone determines spread. Without a spendable difference there is no flow.
- Not that the four world sources are independent witnesses. They share a field and an author cluster; by Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool".
- Not `grounded`. Nothing here was settled by a measurement in this derivation.
- Not a claim that the six-term set is nature's own list. It is *"a human's careful guess at reality's compression axes"* (They're Scanning Books, 2026).

## 4. Provenance

- Question: `Questions/complexity science.txt` line 28, Section 3, Network structure and dynamics. ID CMP-0021.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, canonical verbatim extract with line numbers, read 2026-11-22.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, read 2026-11-22.
- Metalaws note: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, read 2026-11-22.
- Eight essays by Isaiah N, 2026, fetched 2026-11-22, listed in `05_what_shape_means.md`.
- World sources actually opened: Pastor-Satorras et al. 2015 (arXiv:1408.2701), Pastor-Satorras and Vespignani 2001 (arXiv:cond-mat/0010317), Girvan and Newman 2002 (arXiv:cond-mat/0112110), Xu et al. 2006 (arXiv:physics/0606256). Full provenance in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A source-discriminating comparator, not an argument. From *The Hard Problem is About Source*, an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here:

1. Hold degree sequence fixed, vary transitivity or community boundaries, and compare per-slot residuals for SIR, SIS and threshold cascades.
2. Hold process fixed and compare speed to final reach. Does the property ranking reverse? If so, aggregation is forbidden.
3. Test the geography-versus-hubs conflict in a spatially embedded network against a non-embedded control.
4. Look for a single property whose residual does not trend down across all cases. That would fire refuter 1 and reverse the verdict.

## 6. What an expert can check in twenty minutes

1. Read Fig 13 :24, Fig 13 :22, Fig 9 :55-56 and Fig 12 :117, four short passages. Five minutes.
2. Grep `03-FIGURES_TEXT.md` for "degree", "clustering" and "community" and confirm no figure line ranks them. Two minutes.
3. Name one pair of networks with equal degree sequence and different transitivity, and say whether their spread curves would differ under a fixed process. Five minutes.
4. Name the instrument that would discriminate hubs from geography in a spatial network, or say why none exists yet. Five minutes.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
