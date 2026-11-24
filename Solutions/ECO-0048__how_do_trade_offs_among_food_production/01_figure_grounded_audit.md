# Figure-grounded audit: how do trade-offs among four ecosystem services emerge across landscapes?

**Mode: `general` on the structural shape, `specified` on per-landscape and per-scale findings, `gap` on a single aggregate value. Nothing is `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** LLM output is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The local figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README at `FRAMEWORK/reference/FIGURES_README_canonical.md`, and `FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and discussed in sections 2 and 5. Every figure quote below is an exact substring of the local figure text.

---

## 0. The residual in effect terms

The ordinary term "trade-off" hides the residual, so state it as an effect. Four services are four tracked slots: food production, carbon storage, water quality, biodiversity. For each slot *s*, at each parcel, season and scale, a management action predicts a level and the landscape returns another. The residual is `R_s = |Γ(b,a)_s - o'_s|`, indexed by slot, parcel and time.

A "trade-off" is the observation that under one action two slots move in opposite directions: food rises while carbon, water quality or biodiversity fall. The question asks what governs the sign and magnitude of that coupling, and why it changes when you move from a field to a watershed or from one year to another. It does not ask for a single number that sums the four services. That distinction is decided below by Fig 1 :19 and Fig 12 :125, not by preference.

**R by arity, symmetry, scale.**

- **Arity:** four service slots, further indexed by parcel and time. Multi-slot. There is no single global residual to aggregate.
- **Symmetry:** the coupling between two services under one action is an ordered comparison, not a symmetric join. It has a direction (which slot is being increased) and a sign. On a single parcel the relation is subtraction rather than conjunction: a parcel in crop is not at the same moment in perennial grass.
- **Scale:** the coupling is measured at field, subwatershed and watershed scale and over years to decades. The transform between scales is lossy and may flip the sign of a relation.

**What an answer would look like (bound as an ordinary term before the run):** a rule that, for a given slot and place and scale, names the conditions under which another slot rises or falls, and states what would reverse the sign. This makes the sought-for shape refusable by the same test as everything else (`THE_FORMULA.md`, "Direction").

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not yet a domain and is marked as such.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 biophysical production | crops, perennial grass, forest, wetland, soil, nitrogen, phosphorus, water, pollinators, species | biophysical flows, each in its own unit (yield, Mg C/ha, nutrient load, richness) | flux towers, water gauges, soil and species surveys | nameable anchor; per-slot |
| D2 land allocation and management | farmers, planners, policies, parcels | finite exclusive land plus actions (tillage, nutrient application, set-aside) | the D1 outcomes, which do not update on the manager's belief | nameable anchor; union of conditions |
| D3 spatial configuration | patches, corridors, matrix, edges, ecotones | arrangement: composition, configuration, proportion | mapped pattern (remote sensing, GIS) plus measured flows | nameable anchor; isomer claim |
| D4 valuation and aggregation | analysts, models, economists, stakeholders | money or composite index scores | none named that does not update on the analyst's own weights | **no nameable anchor, gap** |
| D5 science and observation | modelling teams, long-term monitoring programs | evidence | long-term measurements, but independence is low where teams share one model | nameable anchor; independence owed |

**Partition or union.** D1, D2 and D3 are overlapping conditions on the same landscape, not a partition. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." D4 is a separate frame attempting to collapse four incommensurable slots into one scalar; it is refused in F8. The union means one lever clears the region where only one condition holds and leaves the intersections standing, so verdicts are kept per domain and never averaged.

**Order by dependency (Fig 3).** Enumerate the habitat (Fig 11 :43), then measure each slot (Fig 1 :19), then detect sign relations per pair, then check the cross-scale transform (Fig 4 :30), then import a differing frame for any slot the closure cannot hold (Fig 8 :53), and only then attempt valuation. Valuation is never allowed to precede per-slot measurement, because D4 has no anchor yet.

---

## 2. Figure census (quoted before concluding)

| figure | verbatim line | bearing |
|---|---|---|
| Fig 1 | :19 "The residual is indexed by object slot, not aggregated." | four services are four slots |
| Fig 1 | :22 "Aggregating across slots is how a live signal disappears into an average." | a composite index hides the signal |
| Fig 2 | :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | test for a valuation anchor |
| Fig 2 | :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement is not evidence |
| Fig 2 | :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | one model plus scenarios is one pool |
| Fig 3 | :20 "The chain is ordered by dependency, not by importance." | valuation comes after measurement |
| Fig 4 | :20 "Only the actors, the currency and the anchor change." | same loop at field and watershed scale |
| Fig 4 | :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | cross-scale sign flip is a gap to measure |
| Fig 6 | :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | need hydrology, carbon and biodiversity frames |
| Fig 8 | :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." | more indices cannot add a value anchor |
| Fig 8 | :39 "So a search that finds nothing is never a proof of absence." | gap is a verdict |
| Fig 9 | :4 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." | split into per-pair compounds |
| Fig 9 | :32 "you get a kind of thing, never the answer itself" | shape, not a universal trade-off curve |
| Fig 9 | :54 "And when the split lands on a union rather than a partition, unbundle before you search again." | four services are a union |
| Fig 9 | :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | an index is a budget filter, not a witness |
| Fig 10 | :24 "the ground does not decay, the channel does" | monitoring channel decays, ground does not |
| Fig 10 | :47 "a convention that decides an outcome has stopped being one" | a chosen weight is not a measurement |
| Fig 11 | :43 "The habitat is enumerated, never composed." | read the actors off the world |
| Fig 11 | :49 "An actor's valence is relative to the residual, not a property it carries." | sign is relative to the service tracked |
| Fig 11 | :52 "And contact cascades." | indirect effects reach third order |
| Fig 11 | :61 "The seat's power is asymmetric. Introduction is available; exclusion is not." | you can add a use, not subtract the habitat |
| Fig 12 | :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." | configuration is the missing half |
| Fig 12 | :94 "The arrangement is the substance." | same composition, different landscape |
| Fig 12 | :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | land sharing and sparing as isomers |
| Fig 12 | :125 "A composition costs in two currencies, and they do not add." | four services are four currencies |
| Fig 12 | :130 "Summing them into one figure is the error this names, not the fix for it." | refuse the composite index |
| Fig 13 | :115 "The set is closed. The arrangements are not." | finite land uses, unbounded configurations |
| Fig 13 | :134 "Unreachable is a verdict here, not a silence," | gap reported, not hidden |
| Fig 13 | :135 "It cannot say which primitive is missing, because naming it would mean already holding it." | cannot name a universal winner |

**Strain test applied before concluding.** An early reading tried to map the four services onto the six substrate terms of Fig 13 (food as energy, carbon as energy, water as space, biodiversity as network). That reading strains: two services would have to be the same state, and Fig 13 :35 says "Space, time and energy are not three readings of one quantity." Re-census assigns the services to the habitat and the library, not to the six as if they were those terms. The strain is named and re-censused in section 6 rather than smoothed over.

---

## 3. Findings F1 to F9

### F1 — Four slots, not one score (decisive for method)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it."

Yield, tonnes of carbon, nutrient concentration and species richness are different units. A single "total ecosystem service" score requires weights that are not measurements. The world corroborates from a low-overlap frame: Wikipedia's Pareto efficiency entry states that for multiple objectives "various solutions can be incomparable as there is no total order relation" and that Pareto dominance is "a partial order, which leads to solutions (and solution sets) being incomparable". A Pareto frontier returns a set of non-dominated landscapes, not a rank.

**Mode:** `general` structural, triangulated across Fig 1, Fig 12 and the Pareto frame. **Refuter:** a single non-updating instrument that preserves every decision-relevant slot signal and is settled by the ground. Until then the index is a budget filter (Fig 9 :60), not a witness.

### F2 — A trade-off is a valence relation, not a property of a land use

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51: "No standing list of good actors survives a change of residual."

Fertilizer is a benefactor to food production and a malfactor to water quality; forest is a malfactor to food and a benefactor to carbon and biodiversity. Neither is good or bad in itself. Qiu et al. 2018 (open access, Environmental Research Letters) report that some service relationships "even reversed signs over time" and that "relationships among ES indicators changed over time". The optimal-foraging literature supplies a genuinely low-overlap corroboration: what counts as the "currency" changes which strategy is optimal, "the currency could be defined as net energy gain per digestive turnover time instead of net energy gain per unit time." Choose the currency and you choose the verdict.

**Mode:** `general` structural, `specified` for any named pair in a named place. Triangulated across Fig 11, Qiu et al. and the animal-behaviour frame. **Refuter:** a land use that is a benefactor to all four slots at every scale and season, or a service pair whose measured sign never changes under any driver.

### F3 — A parcel is a subtraction, not a conjunction

On one parcel, crop and perennial grass are mutually exclusive. Qiu et al.: "at a given time, a pixel of land can be devoted to either crop or perennial grass, but not both". Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not." Wikipedia's land-use page describes land as "a finite resource" facing "competing demands including urban expansion, biofuel production, and changing consumption patterns". The bond on a parcel is subtraction, and the habitat cannot be subtracted, only substituted (Fig 11 :66).

**Mode:** `general` structural. Triangulated across Fig 11, Qiu et al. and the land-use source. **Refuter:** a measured parcel delivering full food and full carbon and full water quality simultaneously with no reduction in any, without importing land from elsewhere.

### F4 — Coupling cascades beyond first contact

Fig 11 :52: "And contact cascades." The figure's own example is DDT reaching eagles: first-order enumeration missed a third-order effect. Here the cascade runs nutrient application to nitrate leaching and phosphorus yield to surface-water quality to hypoxia to biodiversity. Qiu et al. report "persistent tradeoffs between crop production and water quality" and "tight coupling of nitrate leaching vs. phosphorus yield" across all spatial scales, and the Wikipedia ecosystem-service page gives the Catskill watershed case where restoration was cheaper than a filtration plant, a second-order water-quality effect on human infrastructure.

**Mode:** `specified` (the particular chain must be measured in each landscape). Single-source on the figure side for the cascade rule, corroborated by Qiu et al. **Refuter:** a landscape in which every measured coupling is first order, with the third-order links absent.

### F5 — The cross-scale transform is lossy and can flip the sign

Fig 4 :20: "Only the actors, the currency and the anchor change." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Qiu et al. report that "local tradeoffs between food production and water quality do not necessarily scale up, so reducing local tradeoffs may be insufficient to mitigate such tradeoffs at the watershed scale", and that crop-water relations "differed substantially across spatial scales". The Wikipedia ecosystem-service page agrees: "interpreting ecological information collected from one spatial-temporal scale does not necessarily mean it can be applied at another". Landscape ecology adds the pattern-process-scale coupling: "the relationship among pattern, process and scales".

**Mode:** `specified` per landscape, `general` that the gap must be measured. Triangulated across Fig 4, Qiu et al., landscape ecology and the ecosystem-service source (the last two partly share an ecology pool, so they count as one witness). **Refuter:** a demonstrated scaling rule that preserves both sign and magnitude from field to watershed across drivers.

### F6 — Configuration is the bond; landscapes can be isomers

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Fig 12 :94: "The arrangement is the substance." Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 13 :115: "The set is closed. The arrangements are not."

Landscape ecology distinguishes composition from configuration: "composition refers to the number of patch types represented on a landscape and their relative abundance", while "structure is determined by the composition, the configuration, and the proportion of different patches across the landscape". The land-sharing versus land-sparing pair (Conservation agriculture page, citing Green et al. 2005 and Fischer et al. 2014) is the same atoms under a different bond: sharing keeps trees and patches inside farmed land at lower yield; sparing concentrates yield and sets other land aside. Over a fixed set of land-use types and a fixed total area, they are isomers under Fig 12 :117.

**Mode:** `specified`, conditional on a fixed atom set. Single-source on the figure side (Fig 12 gives the definition); world corroboration from landscape ecology and the land-sparing/sharing literature, which are partly overlapping ecology pools. **Refuter:** a controlled comparison holding composition fixed in which configuration changes no service and no coupling.

### F7 — The problem is a union of overlapping conditions

Fig 9 :4: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Qiu et al. give four mechanisms for why a relation changes: "effects of biophysical connections", "effects of dominant drivers", "combined effects of biophysical linkages and dominant drivers", and "artificial scale effects". A single lever, for example afforestation, clears the region where only one condition holds and leaves the intersections standing. The four services form at least six pairwise compounds plus higher-order intersections, each with its own loop and its own ground reading.

**Mode:** `general` structural, `specified` per compound. Triangulated across Fig 9 and Qiu et al. **Refuter:** a single intervention that removes all pairwise trade-offs in a landscape without creating a new one elsewhere or at another scale.

### F8 — No anchor for a single aggregate value (declared gap)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 10 :47: "a convention that decides an outcome has stopped being one". A monetary weight chosen by an analyst is a convention; if it decides which landscape wins, it has stopped being a convention and has become an ungrounded verdict. The Pareto frame returns a non-dominated set, which is a shape, not a value. Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The world literature confirms the difficulty without supplying an anchor: the ecosystem-service page lists six distinct valuation methods (avoided cost, replacement cost, factor income, travel cost, hedonic pricing, contingent valuation) and notes that "an especially challenging aspect of this process is that interpreting ecological information collected from one spatial-temporal scale does not necessarily mean it can be applied at another". Six methods are six frames, not one ground.

**Mode:** `general` with an explicit `gap`. **Refuter:** a non-updating instrument that settles a common currency for all four services at the ground. This is unreached, not underivable in principle: someone may build such an instrument. Until then, report the frontier, not the winner.

### F9 — Enumerate the habitat, do not compose it

Fig 11 :43: "The habitat is enumerated, never composed." Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :46: "conditions: light, water, temperature, season, terrain". Fig 11 :47: "relations: pollination, predation, competition, dependency".

For this residual the enumerated habitat includes land-use classes, nutrient inputs, soil, drainage, pollinator habitat, patch edges and the seasonal and interannual drivers Qiu et al. identify. None of these is one of the six abstract substrate terms; they are the imported content of the habitat. Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." The import needs provenance and a shadow test (Fig 8 :50), so the source of each actor and condition is recorded in the ledger rather than treated as figure-derived.

**Mode:** `general` (enumeration rule), `specified` (the enumerated list is landscape-specific). Triangulated across Fig 11 and the world sources. **Refuter:** a landscape whose relevant actor list can be derived a priori from the six-term set without reading the world.

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A single non-updating scalar preserves every decision-relevant slot signal and is settled by the ground (breaks F1 and F8).
2. A land use or management action is found to be a benefactor to all four services across all measured places, scales and seasons (breaks F2).
3. A controlled comparison with composition held fixed shows that configuration changes no service and no coupling (breaks F6).
4. A scaling rule preserves both sign and magnitude of every pairwise relation from field to watershed across drivers (breaks F5).
5. All measured couplings in a landscape are first order, with no third-order cascade (breaks F4).
6. The four services are derived from the other members of the six-term substrate so that two collapse into one state (breaks the re-census in section 6).

If any fires, the specific claim is withdrawn and the census is reopened. Until one is run, no part of this audit may be labelled `grounded`.

---

## 5. Recommendation

1. Keep the four services as four slots at every stage. Publish the per-pair, per-place, per-scale relations, not a total score (F1).
2. State the relative-to-residual qualifier on every "trade-off" sentence: which service is being increased, in which place, at which scale (F2, F5).
3. Enumerate the habitat before modelling; record the provenance of each imported actor (F9).
4. Test configuration against composition with composition held fixed; that is the isomer test (F6).
5. Ask for the cross-scale round-trip gap, not for an extrapolation (F5).
6. Report the Pareto frontier and the declared gap where valuation is asked for a single winner (F8). "Unreachable is a verdict here, not a silence," (Fig 13 :134).

---

## 6. Canonical usage check and retraction log

Read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Governing sentences: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name" and "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest"; "Indiscernibility is not identity."

| earlier reading | status after the canonical check |
|---|---|
| Four services mapped onto the six substrate terms (food/carbon as energy, water as space, biodiversity as network) | **Retracted and preserved.** Re-census: Fig 13 :35 says "Space, time and energy are not three readings of one quantity." The services belong to the enumerated habitat, not to the six. No primitive was added. |
| "There is a universal win-win land use" | **Retracted.** Fig 11 :51 refuses the standing list. What survives is a conditional per-slot rule. |
| "Trade-offs are properties of farming" | **Retracted.** Fig 11 :49-50 makes valence relative to the residual. The sign is a relation, not a property. |
| "Fig 12 isomer claim applies unconditionally" | **Narrowed, not retracted.** Isomerism requires a fixed atom set (Fig 12 :117); where one landscape adds or removes a land-use type the relation becomes composition plus import, not isomerism. Kept as a live strain in `06` and `11`. |
| F8 value gap | **Canonically confirmed.** The README's "shape, not a name" and Fig 9 :32 govern. A single aggregate value is not a shape the framework returns. |
| F5 cross-scale sign flip | **Canonically confirmed and not a contradiction.** Fig 4 :27-32 makes the transform lossy; a flip is the measured gap, not a flaw in the figures. |

**Seven-question recursive check.** (1) Residual: four slots, per parcel and scale. (2) Slots: keep separate, Fig 1 :19. (3) Coupling sign: relative to residual, Fig 11 :49. (4) Parcel exclusivity: subtraction, not conjunction. (5) Cross-scale: measure R_T, Fig 4 :30. (6) Import: enumerate habitat and gate provenance, Fig 6 :23 and Fig 8 :50. (7) Valuation: no anchor, report gap, Fig 13 :134. No figure line returns a universal trade-off curve or a best aggregate landscape. That is a shape-not-a-name gap, reported as unreachable at this budget, not silence.

**Updated verdict.** The shape survives: trade-offs emerge as valence-relative couplings among per-slot residuals, on a finite exclusive habitat, propagated by cascades, reconfigured by spatial arrangement, and changing across scale. The problem is a union of overlapping conditions. The aggregate winner does not survive: no figure line and no non-updating world instrument supplies a common currency. Strains after re-census: one live (the fixed-atom condition on the isomer claim), named in `06` and `11`, none hidden.
