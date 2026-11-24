# Figure-grounded audit: how four conditions jointly shape epidemic spread

**Mode of this document: `specified` on the shape, `general` on the composition rule, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local framework files under `FRAMEWORK/`: `03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and were fetched 2026-11-22. Figure quotes below are verbatim from `03-FIGURES_TEXT.md`, cited `Fig N :line`.

---

## 0. The residual under audit (stated in effect terms)

The question asks how mobility, household structure, institutions, and online connections **jointly** shape epidemic spread. State it as an effect: epidemic spread is the quantity whose prediction we want (incidence over time, peak, persistence, arrival time at a place). Four conditions are candidates for shaping it. The residual is the gap between what a model using these conditions predicts and what the ground (case data, serology, arrival times) returns.

There are two live readings of "jointly":

- **Reading A, partition:** four independent contributions that can be added. Each condition has its own loop and its own slice of the residual.
- **Reading B, union compound:** overlapping conditions whose intersections are categorically different from any single condition. A lever that clears the region where only one condition binds leaves the intersections standing.

The audit must decide between A and B before choosing any figure line, because reading A selects Fig 1's per-slot rule while reading B selects Fig 9's unbundling rule. Choosing the figure first would be apophenia (Fig 9 :27-28).

**Bound answer-shape (ordinary term).** A condition-independent partial answer would be: "the four conditions form an unbundled union compound; the residual is indexed per slot; the habitat is enumerated out to second-order cascades; the information-to-contact link is a cycle; and the coefficients are owed from measurement." This term is what the refuter in §3 targets.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: the question bundles four conditions, so R is at least four-dimensional, not one scalar. Symmetry: the four are not interchangeable. Mobility moves people between places; household structure fixes small persistent cliques; institutions add or remove edges by rule; online connections carry information rather than pathogen. Scale: mobility is spatial and between-place, household is within-place and small-group, institutions are meso to macro, online is an information layer overlaid on the physical one.

**One line per domain, with actor, currency, and anchor.** A domain needs a nameable anchor: a measurement that does not move because a frame thinks differently (Fig 2 :29-30). If none exists, it is not yet a domain.

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 physical transmission habitat | people, households, schools, workplaces, transport nodes, pathogen | physical contacts and infection events | case counts, seroprevalence, arrival times: yes | union of overlapping conditions (mobility x household) |
| D2 information and behavior | people as information receivers, online platforms, institutions as broadcasters | awareness, beliefs, behavior change | measured mobility change after advisories, compliance surveys: yes | cycle crossing D1 and D2 |
| D3 institutional / policy | institutions, regulators, policies | rules, closures, mandates | the dated policy decision plus its measured effect on D1 outcomes: yes | modifier of D1 and D2 |

All three domains range against one shared ground: measured epidemic outcomes. The four named factors are **actors and frames inside these domains**, not domains themselves. That distinction matters: a "mobility model" is a frame, and frames range against the ground (Fig 2 :45).

**Partition or union.** Union, not partition (Fig 9 :54-57). Mobility changes who mixes inside households; institutions change both mobility and the information environment; online information changes behavior, which changes physical contact. These are overlaps, so a single lever clears a region but leaves the intersections.

**Order by dependency (Fig 3 :20).** (1) state the residual per slot, (2) enumerate the contact habitat, (3) pin the ground, (4) identify the couplings, (5) only then fit coefficients. Effort spent refining a transmission coefficient above the break cannot rescue a household or information slot that was never enumerated.

**Strain test applied before quoting.** An earlier draft tried to map the six physical terms of Fig 13 literally onto epidemics (energy = "infectious pressure", spectrum = "severity ordering"). That mapping strains: energy has no clean analogue in a social contagion. Re-census: only Fig 13's **network** structure generalizes ("that entities relate, and influence travels"), plus its cross-kind composition rule. The full six-term set is not used as an epidemic model. This retraction is kept visible in §6.

---

## 2. Figure census (verbatim quotes before conclusions)

| figure | bearing on this question | verdict |
|---|---|---|
| 1 The Agent | residual must be indexed by object slot, not averaged | governs F2 |
| 2 The Ground | anchor = measurement; frames range against ground; independence | governs F5, F6 |
| 3 Dependency Chain | order by dependency; a reading below the break is nothing | governs census order |
| 4 The Membrane | models are lossy; measure the round-trip gap | governs F8 |
| 5 Mint Pipeline | three guards; a gate is not settlement | governs F8 (no term is settled here) |
| 8 Union Surplus | two frames together reach what neither alone; independence decides surplus | governs F1 |
| 9 Leave / Arrive | union vs partition; unbundle; describe residual before frame | governs F1, F6 |
| 10 Ground Maintainer | bring a characterised residual, never the source | governs outreach, not the derivation |
| 11 The Habitat | enumerate actors and cascades; valence relative to residual | governs F3 |
| 12 The Bond | cycle, isomer, functional group | governs F4, F7 |
| 13 Minimum Viable Set | network structure; cross-kind composition only | governs F3 (partial), strain noted |
| Operators / Symbols | R is always a slice; bond carries the arrangement | governs census |

---

## 3. Findings F1 to F8, each with a refuter

### F1 - "Jointly" is a union compound, not an average (triangulated)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Fig 9 :57: "a case in two conditions is not a harder case of either"

Fig 8 :46: "Two frames together reach what neither reaches alone."

The four conditions overlap, so the honest shape is a union compound. The intersections (mobility x household, information x contact, institution x both) become specific compounds with their own loops and their own grounds. A single "joint effect" number is a blend, which Fig 8 names as a collapse: high overlap frames have the same atoms under different names and their union adds nothing.

**Triangulation:** Fig 9 (union/partition) and Fig 8 (union surplus) low overlap, so `triangulated`.

**Refuter:** if the four effects on a measured outcome are separable and additive with no interaction terms and no cross-cascade, reading A holds and this finding is refuted.

### F2 - Keep the residual per slot, never average it (single-source)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

A single scalar "epidemic impact" score across the four conditions throws away the only signal that says where to look. The slot here is the condition-in-context (mobility between two places, a household of a given size, a specific institution, an online information link), not the whole epidemic. This is why a pooled regression that reports one coefficient per factor is structurally the wrong instrument, even if it is statistically convenient.

**Status:** `single-source` (Fig 1).

**Refuter:** if one scalar summary predicts held-out outcomes as well as the per-slot residuals, and no live slot is hidden by the average, the finding is refuted.

### F3 - Enumerate the habitat, including second-order cascades (triangulated)

Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

Fig 11 :52: "contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles"

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."

Fig 13 :25: "that entities relate, and influence travels"

Online connections are the textbook second-order cascade: information travels along virtual contacts, changes behavior, changes physical contact, then changes infection. Scoping the habitat to direct physical contacts misses it, exactly as first-order DDT enumeration missed the eagles. Valence is relative: mobility can seed an outbreak or import immunity; online information can suppress contact or trigger panic buying and travel. No actor carries a fixed sign.

**Triangulation:** Fig 11 (habitat/cascade) and Fig 13 (network/influence travels), low overlap, so `triangulated`. The full six-term physical set is not imported (see strain in §1).

**Refuter:** if empirical contacts are random-mixed within each condition and no second-order information effect is measurable, the cascade finding is refuted at the ground (though the figure-level enumeration rule stands).

### F4 - The information-to-contact link is a cycle, not a chain (single-source figure, world-corroborated)

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

A one-way chain (online information changes behavior, full stop) cannot represent the fact that rising cases themselves generate information and behavior change. The loop closes: cases produce information, information produces behavior, behavior produces contact, contact produces cases. The sign of the loop decides whether it damps or amplifies. Fig 12 distinguishes this from a chain, which cannot close by construction. World sources corroborate: Wang et al. (2015) describe a "coupled, nonlinear system" in which prevalence alters behavior; Granell et al. (2013) model a "cyclic information awareness process" on a virtual layer coupled to persistent real contacts.

**Status:** `single-source` for the figure (Fig 12); corroborated, not decided, by world sources.

**Refuter:** if the information effect is demonstrated to be one-way with no measurable feedback from cases to behavior, the cycle claim is refuted.

### F5 - The ground for this question is measured outcomes, not model agreement (triangulated)

Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Case data, serology, and arrival times are anchors. A mobility model, a household model, and an information model do not settle anything by agreeing with one another. They are three frames ranging against one ground. An epidemic curve is also a "projection with lossy information" in the sense of *The Hard Problem is About Source*: the same observed curve can arise from many combinations of the four conditions, so the curve cannot, by itself, name its source. A source-discriminating instrument (contact tracing, mobility data, serology by subgroup) is owed.

**Triangulation:** Fig 2 plus Fig 1's ground-is-the-only-metric rule, low overlap, so `triangulated`.

**Refuter:** if model-to-model agreement is treated as settlement in this field, or if no discriminating measurement exists in principle, the finding is refuted.

### F6 - Independence and filters: do not let a method pick the verdict (single-source core)

Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."

Two models calibrated on the same case data are one witness with two names. Their agreement is the pool talking. Independence is a budget parameter, not a verdict. Tractability scores, tier labels, and "this factor is trendy" are filters for what gets tried, never witnesses for what is true.

**Status:** `single-source` core in Fig 2, with Fig 8's independence restatement.

**Refuter:** if two models drawing on the same data are shown to carry genuinely independent evidence about the residual, the independence finding is refuted.

### F7 - The four conditions are not one substance; at best they share a functional group (single-source)

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

If mobility, household, institutions, and online connections are written over one shared atom set (persons, places, contacts, information, rules) and differ only in which structure mediates which pair, they are Fig 12 isomers: same atoms, different arrangement, different substance. If they are written with disjoint atoms, they are merely members of a functional group ("conditions that alter contact") with different qualifiers. The difference is invisible in a flat coefficient list and decisive in behaviour. `06_isomers_and_order.md` carries the full derivation and a falsifier.

**Status:** `single-source` (Fig 12 definition).

**Refuter:** if one condition can be written without any atom the others require and still produces the same outcome class, the isomer claim fails and the functional-group reading stands.

### F8 - The figures return the shape, not the coefficients (single-source; gap on numbers)

Fig 9 :32: "you get a kind of thing, never the answer itself"

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

The figure-grounded result is the constraint set (union compound, per-slot residual, enumerated habitat, cyclic coupling). It is not an R0 value or a set of interaction coefficients. Any condensation of the figures into a headline ("mobility x household x online is what matters") is lossy and carries a round-trip gap R_T that must be measured, not assumed zero. The quantitative answer is **unreachable at this budget**: it is owed from a ground reading, not from more searching inside the figure set. "Unreachable is a verdict, not a silence" (Fig 13 :134).

**Status:** `single-source` for shape-not-a-number; `gap` for the numerical coefficients.

**Refuter:** if a figure line is shown to yield a numeric reproduction ratio or interaction coefficient without a measurement, this finding is refuted.

---

## 4. Pre-registered refuter (written before the conclusion)

Per Seat Map :287: a falsifier written before the run is a design instrument, not only an honesty device. The shape claim is refuted if any of the following holds:

- **R1:** the four effects on a measured outcome are separable and additive, with no interaction terms and no cross-cascade (refutes F1).
- **R2:** one scalar summary predicts held-out outcomes as well as per-slot residuals with no hidden live slot (refutes F2).
- **R3:** the information effect is demonstrably one-way, with no measurable feedback from cases to behavior (refutes F4).
- **R4:** within-condition contacts are random-mixed and no second-order information effect is measurable (refutes F3's empirical arm).
- **R5:** model-to-model agreement is treated as settlement, or no discriminating instrument exists in principle (refutes F5).
- **R6:** a figure line yields a numeric coefficient without a measurement (refutes F8).

If any fires, the affected finding is withdrawn. Until a ground reading is run, nothing here may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape claim and R1 to R6, not with a coefficient table (Fig 10 :52, "Bring a characterised residual, never the source").
2. Unbundle the question before searching: ask each intersection its own question with its own ground (Fig 9 :54).
3. Refuse averaging; report per-slot residuals (Fig 1 :19).
4. Enumerate the habitat to second order, including the virtual-contact to physical-contact cascade (Fig 11 :44, :52).
5. Pin the ground as measured outcomes; keep model agreement out of the verdict (Fig 2 :35, :45).
6. Buy independence in proportion to the cost of being wrong; do not pool co-calibrated models as witnesses (Fig 2 :40, :42).
7. Offer links only after a verdict on stage 1 is recorded (Fig 4 :22).

---

## 6. Canonical usage check and retraction / confirmation log

Two local files were read after the first sections and govern usage: `FIGURES_README_canonical.md` (the figures "outrank everything else in the repo"; "the quotes are the authority, not this summary"; a contradiction means the domain was misidentified) and `03-FIGURES_TEXT.md` (verbatim lines). `THE_FORMULA.md` step 7 splits the next move into SEARCHED, INWARD, OUTWARD: SEARCHED first (cheapest), then INWARD (sharpen an instrument already returning something), then OUTWARD (characterise R in effect terms and find a frame whose closure predicts its shape). These three were kept distinct in §7.

| earlier reading | status after canonical check |
|---|---|
| "jointly means four additive contributions" | **Retracted.** Fig 9 :54 to :57 makes the overlapping case categorically different. Reading A is retained only as the refuter R1. |
| map the six physical terms onto epidemics (energy = infectious pressure, spectrum = severity ordering) | **Retracted as strain.** Re-census in §1: only the network structure and cross-kind rule generalize. No seventh atom is imported. |
| "one joint R0 is the answer" | **Refused.** Fig 9 :32 returns a shape, not a number; coefficients are a ground debt (F8). |
| "more model search will close the numeric gap" | **Retracted.** Fig 8 :32: no search inside a closure adds an atom. The gap is for measurement, not more search. |
| treat online connections as a direct physical contact layer | **Corrected.** They act in D2 (information) and couple to D1 through behavior (F4). |
| label the result `grounded` | **Refused.** No measurement settles it; mode is `specified`/`general` throughout. |
| F1 union compound | **Confirmed** by Fig 9 and Fig 8, low overlap. |
| F3 habitat cascade | **Confirmed** by Fig 11 and Fig 13 network line. |

---

## 7. Next move under formula step 7 (kept distinct)

- **SEARCHED:** is a figure line governing the union/per-slot/cycle shape already inside the figure set and merely unfound? Yes, F1 to F4 locate it. No outward import is needed for the shape.
- **INWARD:** which instrument already returning something could be sharpened? Contact tracing data, household contact surveys (Goeyvaerts et al. 2018), and mobility traces already return partial readings; sharpening these resolves which intersection dominates. An instrument is improved from a worse one already returning something (Fig 6 :32).
- **OUTWARD:** which frame whose closure differs holds the missing coefficients? Multiplex-network epidemic models (Granell et al. 2013, 2014) and coupled disease-behavior models (Wang et al. 2015) are frames that already predict the shape of a coupled information-contact system. They are imported as corroboration with a source gate and shadow test, not as a new atom in the figures (Fig 6 :23, Fig 8 :50-52).

INWARD and OUTWARD were run as two tracks and never read against one another.

---

## 8. Round trip gap R_T (qualitative)

Symbols table: R_T = gap(x, (T_E o T_A)(x)). Sent up (x): the verbatim figure set governing union, per-slot residual, habitat cascade, and cycle. Abstraction (T_A): the shorthand "four conditions jointly shape spread as a union compound with a cyclic information link." Concretisation (T_E): a concrete epidemic model with interaction coefficients. Three constraints drop on the way back down: (a) the per-slot indexing is lost if the model reports one pooled score, (b) the second-order habitat enumeration is lost if only direct contacts are measured, (c) the cycle's sign is lost if information is modelled as one-way. One thing survives: a structure (network) mediates contact and influence travels. R_T is nonzero, recorded as an enumerated set of dropped constraints, not measured numerically because no ground reading was taken. Treating "the formula is the condensed metalaw" as identity would set R_T to zero, the dead-reckoning error Fig 4 :30 names.

**Final status of this audit:** the shape survives, the coefficients are unreachable at this budget and owed from the ground, and one strain (the physical six-term mapping) was re-censused and retracted rather than smoothed over.
