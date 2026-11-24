# Figure-grounded audit: ECN-0053

**Mode of this document: `specified` on the structural findings, `general` on the shape, `gap` on the grounded ranking.** It states what would have to be measured before a ranking could be called `grounded`. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (fetched 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** The local verbatim figure extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the exemplar `QMGR-0037` for structure, and the public pages listed in `10_source_ledger.csv`, all fetched 2026-11-23.

---

## 0. The question under audit

> "Does inequality of opportunity matter more than inequality of outcomes, and can one be reduced without the other?"

Stated in effect terms: over a population of slots (persons, cohorts), there are two distributions. One is realized outcomes (O), the readout after action. The other is the opportunity or circumstance field (C), the habitat that precedes and conditions action. The question carries two operations:

1. an ordered comparison between the two inequalities, "matters more", which is a comparison bond (`⋛`) over a common currency;
2. a separability question, whether an intervention on one distribution leaves the other unchanged.

**Shape bound as an ordinary term before the run** (Formula "Direction"): an answer would name an anchor A that settles "matters", state which distribution's manipulation moves A more, and report whether a lever on one distribution changes the other. Binding this in advance lets the preference accrue a residual instead of hiding as an unbound direction. The result below is that no such A is nameable from the figures, so the ranking is `gap`, while the separability half does resolve into a union compound with an asymmetric overlap.

---

## 1. The residual by arity, symmetry and scale

- **Arity.** Two distributions over the same slots, plus a third term, the comparison between them. Three-place, not two-place. The comparison cannot be reduced to either distribution alone.
- **Symmetry.** Ordered, not symmetric. The generator-to-output direction is one-way: C conditions O, not the reverse. Fig 10 :68: "Different actors, a different currency, a different ground, and a lossy transform between." The same line adds: "a generator crosses, an instance does not". Swapping C and O changes the claim, so the bond is ordered (Fig 12, sequence/production), not a symmetric join.
- **Scale.** Three scales are in play: the single slot (one person's outcome and circumstances), the distribution (an aggregate inequality index), and the habitat (institutions, families and intergenerational transmission). Fig 4 :20: "it or a thousand. Only the actors, the currency and the anchor change." A claim at one scale does not transfer to another without a measured round trip.

**Strain test applied early.** An initial reading tried to map C to Gradient and O to Spectrum, both structures in the six-term set. That reading strains Fig 13 :75 and is retracted in §7. The two distributions are not two structures at one level; they sit at different dependency levels, generator before output.

---

## 2. Domain census

One line per domain with actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Outcome field | persons, income/health/education outcomes | realized outcome, read after action | a measurement: survey, tax record, administrative register | admitted |
| D2 Opportunity field (habitat) | families, schools, institutions, circumstances | access and condition before action | a measurement: mobility data, a natural experiment, a legal standard | admitted |
| D3 Aggregation/measurement | inequality indices, per-slot residuals | an aggregate scalar score | none: the index is produced by the frame that uses it | not a domain (frame-internal, Fig 1 :27) |
| D4 Comparison "matters more" | the two distributions, a common value | weight or priority | **none nameable** that does not update on the frames | **not a domain yet (gap)** |
| D5 Separability | policy levers, the two conditions | which condition clears | an experiment that moves one lever and reads the other | admitted |

D3 and D4 are not admitted as domains. D3 fails the anchor test because an inequality index is a quantity a frame produces and then scores itself with (Fig 1 :27). D4 fails because "matters" has no anchor: any candidate anchor proposed so far, a social welfare function, a majority preference, a constitutional standard, is a convention authored by a seat, and "a declared meaning is not a grounded one" (Fig 10 :18).

**Partition or union.** D1 and D2 are a **union with intersection**, not a partition. The same persons appear in both; circumstances partially produce outcomes; the overlap is the live part. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." D5 is the loop that runs on this union.

**Order by dependency (Fig 3).** Perception and vocabulary first (name the slots and the two fields), then objective (what would count as progress on the residual), then a lever, then learn and carry. Concretely: D2 (habitat/opportunity) is upstream of D1 (outcome), because the habitat produces the readout; D5 (separability) consumes both; D4 (ranking) depends on an anchor that has not arrived, so the chain stops there. A reading taken at D4 without that anchor is "a reading of nothing" (Fig 3 :22), not a weak reading.

---

## 3. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot, never aggregated; frame-internal quantities disqualified | outcome indices are readouts, not grounds |
| 2 The Ground | anchor must not update; correlation has valence; independence | no anchor for "matters more"; Gatsby correlation is not a verdict |
| 3 Dependency Chain | ordered by dependency; a reading below the break reads nothing | opportunity upstream of outcome; ranking is below its break |
| 4 The Membrane | actors/currency/anchor change with size; round trip required | slot, distribution and habitat cannot be equated |
| 5 Mint Pipeline | support, reach, novelty, settlement as a product | no mint here: no `R` on a slot is settled by a ranking |
| 6 Closure / Reachability | import is the only operator that moves the wall | an outcome-only lever rearranges the closure, adds no atom |
| 7 Room Chain | a room's agreement is variation, not a verdict | expert agreement cannot rank the two inequalities |
| 8 Union Surplus | two frames together reach what neither reaches alone | the two fields are low-overlap frames over one residual |
| 9 Leave / Arrive | union vs partition; describe before looking; filters vs witnesses | separability is a union; the Gatsby correlation is a filter |
| 10 Ground Maintainer | anchor must not update; stake declaration | chosen priority is an interest in the outcome, declare it |
| 11 The Habitat | capability is agent-and-habitat; improvement must change contact | outcome-only change does not change contact |
| 12 The Bond | ordered bonds, isomer, functional group | C/O order is ordered; two inequality measures share a functional group |
| 13 Minimum Viable Set | spectrum/gradient/network; cross-kind composition | initial C=Gradient mapping strained, retracted in §7 |
| Operators table | `⋛` is a threshold relation between two quantities | "matters more" needs a common quantity on both sides |
| Symbols table | `R` is the aim, indexed per slot; the ground is the anchor | "matters more" is not an `R` on a slot until an anchor is named |

---

## 4. Findings

### F1 — "Matters more" has no anchor. This is `gap`, not a verdict (decisive)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."

Fig 9 :32: "you get a kind of thing, never the answer itself"

A ranking needs a comparison over a common currency. The figures supply no quantity that settles "matters" and is invariant to what either distribution's advocates think. Fig 10 :18: "a declared meaning is not a grounded one". A social welfare function or a political majority is a convention, and Fig 10 :47 adds: "a convention that decides an outcome has stopped being one".

The shape is still stateable: any answer must name that anchor before it can rank. Fig 13 :134: "Unreachable is a verdict here, not a silence". So report `gap` plainly for the grounded ranking. Mode `general`.

**Refuter:** produce an anchor A such that (i) A returns a determinate ordering of interventions on C and O, (ii) A does not change its answer when a frame argues for the other side, and (iii) A is not authored by the seat seeking the verdict. If such an A exists and pays, F1 is closed. Until then no ranking may be labelled `grounded`.

### F2 — Opportunity is upstream of outcome: dependency order, not moral priority

Fig 10 :68: "Different actors, a different currency, a different ground, and a lossy transform between." and "a generator crosses, an instance does not"

Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone"

The opportunity field is the habitat and the generator; outcomes are the readout and the instance. An intervention that changes only the readout, leaving the habitat untouched, is an improvement that does not change contact. So in the **structural** sense of "matters", the generator governs what is reachable and the output does not. This is a dependency claim (Fig 3), **not** a moral claim that opportunity is more important. Mode `specified`, ungrounded.

**Triangulation status:** `triangulated` across Fig 10 (generator crosses, instance does not) and Fig 11 (capability is agent-and-habitat), two figures with low conceptual overlap (one about level crossing, one about contact). The world essays corroborate but share the author, so they are not a second witness.

**Refuter:** a habitat substitution that fully restructures C while holding the O distribution fixed, with downstream dynamics (mobility, persistence) unchanged. That would reverse the dependency order. Mode `specified`, to be settled by data.

### F3 — An outcome index is a disqualified aggregate: equality at the mean can hide a live slot

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :13: "a global R near zero with one live slot residual is a legal state"

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :27: "A frame cannot score itself with a quantity it also produces."

A single outcome-inequality number (a Gini, a share of top 1 percent) is exactly the aggregate Fig 1 disqualifies. A near-zero global outcome residual is compatible with one slot carrying a large live opportunity residual. Therefore "inequality of outcomes" as one scalar cannot tell you where to look, and a frame that scores itself with that scalar is producing its own evidence. Mode `general`, structural.

**Refuter:** exhibit a distribution where the aggregate outcome-inequality index is at its minimum and every slot's opportunity residual is also zero. Then aggregation hid nothing. Also refuted if a single outcome index is shown to be an externally anchored instrument, not a frame-produced summary.

### F4 — Separability: a union with intersection, not two independent levers

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Because C and O overlap (same persons, circumstance partly produces outcome), a lever on one clears only the region where that condition holds alone. The intersection stands, because the second condition still binds. So the honest answer to "can one be reduced without the other?" is: **locally yes, globally no**. A lever can reduce outcome inequality in the non-overlap region while leaving opportunity inequality untouched, and vice versa, but the compound case in both conditions requires both levers and becomes a specific compound, not a smaller instance of either. Mode `specified`, pending a lever experiment.

**Refuter:** a measured partition, that is, a zero intersection between the opportunity condition and the outcome condition, with an experiment showing a one-lever reduction leaves the other measure unchanged in every slot. That restores full separability and kills the union reading.

### F5 — Asymmetry inside the union: what the decomposition predicts

This finding is secondary to F4 and is carried by world sources read 2026-11-23. Under Roemer's algorithm, equality of opportunity is the component of an outcome distribution attributable to circumstances, with persons held responsible for choice or effort (see `10_source_ledger.csv`). On that construction the opportunity component is **inside** the outcome distribution, so:

- reducing opportunity inequality necessarily reduces total outcome inequality (the part removed is a component of the whole);
- reducing total outcome inequality by changing the effort component can leave opportunity inequality unchanged.

This is F4's union read as an asymmetric composition, not a new figure line. It predicts that the two levers are not interchangeable. Mode `specified`; the decomposition itself is `grounded` in published measurement practice but the causal lever claim is not settled here.

**Refuter:** a decomposition in which circumstance and effort contributions are non-separable (interaction terms dominate, or circumstances determine effort), so that no component can be reduced independently. Then the asymmetry fails and only the weaker F4 union claim stands.

### F6 — The Gatsby correlation is a filter, not a witness for the ranking

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Fig 2 :39: "Correlation has valence."

The cross-country correlation between income inequality and intergenerational mobility (Corak 2013, Great Gatsby curve) is real and well documented. It is evidence that C and O are coupled, which supports F4's union. It is **not** an anchor for "matters more": a correlation over countries says nothing about which intervention to prioritize in a given slot, and the literature contains a live objection that the pattern is an artefact of group heterogeneity (Mankiw 2013, recorded in `10_source_ledger.csv`). A conflict sends the derivation back to the census, which is why D4 remains `gap`. Treating the correlation as the verdict would let a filter hand us an answer.

**Refuter:** a design in which the correlation itself returns a determinate, invariant ordering of C-levers and O-levers on a declared ground. None of the sources read supplies one.

### F7 — The stake in choosing a priority is structural and must be declared

Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying."

Fig 10 :60: "Where a stake cannot be removed, declare it."

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Any ranking of the two inequalities is chosen by someone with an interest in the outcome. That is unavoidable. An interest in how the figures are read, by contrast, would disqualify the check. The declaration is recorded in `09_watson_answer.md`. A reader who selects sources for likely agreement manufactures the correlation that makes their agreement worthless.

**Refuter:** a checking arrangement in which the ranker has no interest in which inequality wins and no gain from a particular reading. Rare but not impossible; if achieved, the declared-stake requirement is satisfied rather than merely honoured on paper.

### F8 — What actually survives, with modes

| claim | mode | figure or source |
|---|---|---|
| Ranking of the two inequalities on a ground | `gap` | F1, Fig 2 :29 |
| Opportunity is upstream of outcome (generator before readout) | `specified` | F2, Fig 10 :68, Fig 11 :40 |
| A single outcome index hides slot-level residuals | `general` | F3, Fig 1 :19, :22 |
| The two fields are a union with intersection | `specified` | F4, Fig 9 :54-57 |
| The overlap is asymmetric (opportunity component inside outcomes) | `specified` | F5, Roemer (world source) |
| Gatsby correlation couples them but cannot rank them | `general` | F6, Fig 9 :60 |
| The ranker's stake must be declared | `general` | F7, Fig 10 :59 |

---

## 5. Pre-registered refuter

Written before the conclusion, per the exemplar's Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following fires:

1. **Anchor produced.** An anchor A settles "matters more", does not update when either distribution's advocates push on it, and is not authored by the ranker (closes F1).
2. **Dependency reversed.** A habitat substitution that restructures C while holding O fixed leaves all downstream mobility dynamics unchanged (reverses F2).
3. **Partition measured.** The opportunity condition and the outcome condition have zero intersection in every slot, and a one-lever reduction leaves the other measure unchanged (kills F4).
4. **Non-separable decomposition.** Circumstance and effort contributions interact so strongly that neither component can be reduced independently (kills F5).
5. **Aggregation vindicated.** A single outcome index is shown to be an externally anchored instrument that preserves every live slot residual (kills F3).

If any fires, the derivation is withdrawn on that point and re-censused. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Report the ranking half as `gap`. Do not manufacture an anchor to fill it. "Unreachable is a verdict here, not a silence" (Fig 13 :134).
2. Lead with the dependency order and the union finding, both `specified` and checkable.
3. State the stake in the priority choice in the first paragraph of any external packet (F7).
4. Keep the Gatsby correlation in the budget/filter column. It tells us where to look (coupling), not what to conclude (priority). Fig 9 :60.
5. Send the generator, the derivation and the refuter, not a conclusion. Fig 4 :22: "Only methods cross up. Only head starts come down."

---

## 7. Canonical usage check, retractions and confirmations

Two local sources govern use: `FRAMEWORK/reference/FIGURES_README_canonical.md`, which says the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary", and `THE_FORMULA.md`, whose mode and Direction sections are applied above.

| earlier reading | status after re-census |
|---|---|
| C = Gradient, O = Spectrum, both structures in the six-term set | **Retracted as a strain.** Fig 13 :75: "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." Two structures at one level cannot bond directly, and the mapping is a binding from the economics frame, not a derivation. Re-census: C and O are generator and output at different dependency levels (Fig 3), not two peer structures. |
| Gatsby curve supplies the ranking | **Retracted as filter/witness confusion.** Fig 9 :60 forbids letting a filter hand a verdict. The correlation supports F4's union, nothing more. The Mankiw objection (source ledger) is recorded as a live conflict, not smoothed over. |
| "Matters more" could be answered by choosing a welfare function | **Refused.** Fig 10 :18 "a declared meaning is not a grounded one" and Fig 10 :47 "a convention that decides an outcome has stopped being one" apply directly. |
| Outcome inequality is a legitimate single-number target | **Narrowed, not retracted.** Fig 1 :19 and :22 disqualify the aggregate as a guide to where to look. The index can still be a reporting summary; it cannot be the ground for a ranking. |
| F1 gap | **Canonically confirmed.** Fig 13 :134 "Unreachable is a verdict here, not a silence", and Fig 9 :32 "you get a kind of thing, never the answer itself". |
| F2 dependency order | **Confirmed by low-overlap triangulation** (Fig 10 level crossing plus Fig 11 contact), still `specified` because no lever experiment was run. |
| Apparent strain Fig 13 structures vs C/O fields | **Dissolved by re-census.** Different objects: the six-term set governs primitives; C/O govern dependency levels. No figure was softened. |

**Strains after re-census: one live, named.** The comparison bond `⋛` is defined in the Operators table as "a threshold relation between two quantities". Before "matters more" can be computed, both sides must be quantities in the same currency. None is declared in the sources read. This is not hidden: it is the reason D4 has no anchor. It is a strain at the level of the question's own vocabulary, not a figure conflict.

**Final audit verdict.** The shape survives: opportunity is upstream of outcome, the two form a union with an asymmetric intersection, and a single outcome index hides slot-level residuals. The requested ranking does not survive as a `grounded` verdict. Status: `specified` on structure, `general` on shape, `gap` on the ranking. Simulated derivation, internally consistent with the figures, not a ground reading.
