# Figure-grounded audit: Does globalization reduce global poverty while worsening inequality within some countries?

**Mode: `general` on the structural shape, `specified` on the slot-level prediction. Nothing here is `grounded`.** `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** This file is a simulated derivation checked for internal consistency against the figures. By the framework's own standing rule (*The Recursive Self-Improvement Trap*, opened 2026-11-23): *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* No dataset was run and no estimate was recomputed here. This audit cannot settle the empirical question it reports on. See `05_what_shape_means.md` §6.

**Primary source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim with line numbers. Every figure quote below was re-opened and checked character by character against that extract. Citations use `Fig N :line` form.

---

## 0. The claim under audit

> Globalization reduces global poverty while worsening inequality within some countries.

Stated as an effect, the claim asserts that one process, an open trade and capital regime, drives two measured quantities in opposite directions at the same time: a **global headcount** against an absolute line goes down, and a **within-country spread** goes up in at least some national slots. The word "while" carries the whole problem. It can be read as a conjunction of two independent readings, as a causal tradeoff, or as one balanced net welfare verdict. These are three different questions with three different grounds.

What an answer would look like, bound as an ordinary term before the run (Formula step "Direction"): a **two-slot shape** with the actor's valence stated per slot, a declared anchor for each slot, a union/partition decision, and an explicit `gap` marker where the causal magnitude is not settled by anything the figures hold. That is the sought-for shape, written down in advance so it can be refused.

---

## 1. Residual, before any figure line is chosen

**R in effect terms.** The residual is not "is globalization good or bad". It is: *can one actor's contact with two differently scaled slots return opposite-signed readings, and are those two readings one question or two?*

- **Arity:** two slots, global population aggregate and within-country distribution. Not one scalar.
- **Symmetry:** the two readings are not interchangeable. The headcount is a threshold crossing of income against a fixed line. The inequality measure is an ordering/spread over a distribution. Swapping them changes the meaning, so the relation between them is ordered, not symmetric.
- **Scale:** global (all households pooled across countries) versus national/within (households inside one country). This is a cross-scale question, so Fig 4 governs, and the transform between scales is lossy.

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** So a falling global headcount and a live within-country inequality residual are not a contradiction to be resolved by averaging. They are two slot readings. A single global welfare scalar is the move that would destroy the signal.

---

## 2. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1 Measurement of poverty | households, household surveys, an international poverty line, the national lines it is averaged from | income or consumption per person in international dollars, headcount | the declared line and the survey count | yes. A line and a count do not move because a frame changes its mind. Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* |
| D2 Measurement of within-country inequality | households within one country, Gini or P90/P10, surveys, tax records, national accounts | income shares and ordering (more and less) | the distributional statistic for that country and year | yes. Same test. |
| D3 Causal attribution to globalization | trade flows, capital flows, firms, workers, governments, policy regimes | prices, wages, profits, fiscal revenue, observable flows | an instrument or natural experiment that can register the counterfactual | **not yet supplied.** Cross-country observational associations share one evidence pool and are frames, not an anchor. |
| D4 Verification and contact | expert readers, journals, datasets | agreement and residual | the ground, never the agreement | yes. Fig 1 :23: *"The ground enters as the only metric."* |

**Partition or union?** Union, with an overlap that is its own compound. Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :57: **"a case in two conditions is not a harder case of either"** The two conditions (headcount falls, spread rises) overlap because both are read off the same household surveys and the same growth process. The overlap needs its own loop; it is not cleared by answering either side alone.

**Order by dependency (Fig 3).** Fig 3 :20: **"The chain is ordered by dependency, not by importance."** Order: (1) fix the poverty line and the inequality statistic (perception and vocabulary), (2) state what would count as a causal contribution in those terms (objective), (3) only then attempt attribution (planning), (4) carry the result to another country (learn and carry). Fig 3 :22: **"A step whose input never arrives cannot be diagnosed, only its predecessor can."** Asking "did globalization do it" before fixing the measures is a reading taken below the break. Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** That is the status of D3.

---

## 3. Figure census (verbatim, before concluding)

| figure | bearing on this residual | verdict after strain test |
|---|---|---|
| Fig 1 The Agent | per-slot residual; aggregation destroys the live signal; ground is the only metric | governs D1, D2, D4 directly |
| Fig 2 The Ground | anchor must not update; independence; agreement from one pool is worthless | governs D3, D4 |
| Fig 3 Dependency Chain | measurement before attribution; a reading below the break is of nothing | governs the order of the loop |
| Fig 4 The Membrane | cross-scale transform is lossy; measure the round trip | governs global versus national |
| Fig 5 Mint Pipeline | a causal claim owes support, reach, novelty and settlement | governs D3 candidate status |
| Fig 6 Closure / Reachability | inward and outward are opposed instruments; import adds an atom | governs the `gap` verdict |
| Fig 7 Room Chain | agreement compounds, evidence does not | governs D4 |
| Fig 8 Union Surplus | low overlap required for a surplus; search finding nothing is not proof of absence | governs union reading and `gap` |
| Fig 9 Leave / Arrive | split before search; unbundle a union; describe before choosing a frame | governs the split |
| Fig 10 Ground Maintainer | bring the residual, never the source; no gain from a particular reading | governs outreach order |
| Fig 11 The Habitat | enumerate the habitat; valence is relative to the residual; one actor, two valences | governs globalization's status as actor |
| Fig 12 The Bond | a comparison is a threshold relation; arrangement is the substance | strained see F7, re-census required |
| Fig 13 Minimum Viable Set | independence applied to frames; unreachable is a verdict | governs the honest stop |
| Operators table | ⋛ is a threshold relation between two quantities | strained see F7 |
| Symbols table | R is measured per slot, never as a single global number | governs D1/D2 split |

---

## 4. Findings F1 to F9

### F1. The "while" is a union of two slots, not one net welfare scalar (decisive shape finding)

Fig 1 :19 **"The residual is indexed by object slot, not aggregated."** Fig 1 :22 **"Aggregating across slots is how a live signal disappears into an average."** Fig 9 :54 **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :57 **"a case in two conditions is not a harder case of either"**

A global headcount is a slot at one scale; inequality within a country is a set of slots at another. The conjunction "poverty down while inequality up" is legal state description, not a paradox. A single net-welfare number that averages them is exactly the operation Fig 1 forbids. **Mode: `general`, structural.** **Triangulated:** Fig 1 (slot indexing) and Fig 9 (union/partition), two different figures with low overlap. World corroboration: Ravallion 2019 reports *"While fewer people are poor by the global absolute standard, more are poor by the country-specific relative standard."* That is a different field and a different instrument, so it is a genuine second witness to the shape, though it never enters the figure verdict.

**Refuter:** show that one global scalar with no live per-slot component accounts for both observed trends, or that headcount and within-country spread are the same quantity under two names.

### F2. One actor, two valences ( globalization )

Fig 11 :49 **"An actor's valence is relative to the residual, not a property it carries."** Fig 11 :50 **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** Fig 11 :51 *"No standing list of good actors survives a change of residual."* Fig 11 :43 **"The habitat is enumerated, never composed."**

Globalization is not "good" or "bad" by kind. Against the global-headcount residual it can register as benefactor; against the within-country-spread residual it can register as malfactor. The same actor, two residuals, opposite signs. This is a relation, not a contradiction, and enumerating the habitat (trade, capital, firms, workers, policy, institutions) is required before any verdict about the actor. **Mode: `general`.** **Single-source** for the valence law (Fig 11), triangulated with Fig 1's slot indexing at the level of "different slots, different readings".

**Refuter:** exhibit an actor whose valence is intrinsic, surviving a change of residual, or show that the valence law fails for an economic actor.

### F3. The cross-scale transform is lossy; the lost distribution is the round-trip gap

Fig 4 :20 **"Only the actors, the currency and the anchor change."** Fig 4 :27 **"The transform between scales loses information, and that is the point."** Fig 4 :30 **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Aggregating national distributions into one global headcount is abstraction (T_A). The within-country spread is what the coarser description cannot hold. Bringing the global claim back down to a particular country is concretisation (T_E), and it will not match the national reading. The gap `R_T` is not noise to be eliminated; it is the measurement of what global aggregation gave up. **Mode: `general` for the loss law, `specified` for identifying the spread as this question's lost quantity.** **Triangulated:** Fig 4 and Fig 1.

**Refuter:** show a global-to-national aggregation that preserves the full within-country distribution exactly, or show the round trip returns the original with zero gap.

### F4. Anchors exist for the two measurements, not yet for the causal claim

Fig 2 :29 **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :30 **"If it moves when you push on it, it is not an anchor."** Fig 2 :36 **"An anchor is legitimate when the question is constitutively about it."**

D1 and D2 have nameable anchors: a declared line plus a survey count, and a declared inequality statistic. Those are legitimately constitutive because each question is about its measure. D3 does not. A cross-country correlation between openness and poverty "moves when you push on it" if the sample, the line, or the study years change, and studies drawing on the same PIP-derived surveys are one pool. Fig 2 :31 **"Independence, between two frames, is how little they draw on the same evidence."** Fig 13 :38 **"independence is how little two frames draw on the same evidence, and it is what makes their agreement mean anything."** **Mode: `specified`.** **Triangulated:** Fig 2 and Fig 13.

**Refuter:** produce an instrument settling globalization's counterfactual contribution that does not update when a frame changes its mind.

### F5. Measurement precedes attribution (dependency break)

Fig 3 :20 **"The chain is ordered by dependency, not by importance."** Fig 3 :27 **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Fig 9 :27-28 **"describe it before you go looking, or any frame you pick will seem to fit"**

Most of the public argument starts at "globalization did it" and only later picks a poverty line and an inequality metric. That is frame first, residual second. Fig 9 :32: **"you get a kind of thing, never the answer itself"**. The correct order is: describe the two residuals in effect terms, then ask which frame predicts their shape. **Mode: `general`.** **Single-source** (Fig 3) for the dependency order, corroborated by Fig 9.

**Refuter:** show a causal attribution that survives changing the poverty line and the inequality statistic.

### F6. Filters are not witnesses

Fig 9 :60 **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** Fig 7 :13 **"agreement compounds, evidence does not"** Fig 2 :42 **"Buy independence in proportion to the cost of being wrong."** Fig 2 :40 **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

Number of studies, journal prestige, and how many authors agree are budget filters and contact-cost estimates. They cannot settle the causal claim. Two reviews that both cite the same World Bank surveys are one witness wearing two names (Fig 8 :45 contradicts only apparent disagreement: **"Two frames together reach what neither reaches alone."** requires low overlap). **Mode: `general`.** **Triangulated:** Fig 9, Fig 7, Fig 2.

**Refuter:** produce a verdict whose only support is count of agreeing publications.

### F7. Strain: the "while" is not a comparison bond (re-census performed)

First reading attempted: the "while" is a comparison ⋛, the threshold relation between two quantities (Operators table :51: *"a threshold relation between two quantities"*). **Strain test fails.** In Fig 12's bond set, ⋛ is a threshold relation holding between two quantities at one comparison; the question's "while" is a conjunction of two trends over the same period across two different slots. Forcing ⋛ here changes its arity and its scale.

Re-census: the "while" is a **conjunction** of two slot residuals, not a bond between them. ⋛ has a legitimate role one level down, inside D1, where a household's income is compared against the poverty line. That is the threshold the headcount counts. **Retraction recorded:** the ⋛ reading is withdrawn; see §7. Fig 12 :125 **"A composition costs in two currencies, and they do not add."** A headcount in people and a spread in Gini points are different currencies and must not be summed. **Mode: `specified`.**

**Refuter:** exhibit a reading in which ⋛ connects a global headcount and a within-country Gini without changing the bond's declared operands or scale.

### F8. The empirical magnitudes are `gap` from the figures

Fig 8 :39 **"So a search that finds nothing is never a proof of absence."** Fig 13 :134 **"Unreachable is a verdict here, not a silence"** `THE_FORMULA.md` step 7 distinguishes underivable-in-principle from unreachable-at-this-budget. No figure line contains a trade elasticity, a Gini trajectory, or a counterfactual. Therefore:

- The **structural shape** is triangulated and figure-decided (F1, F2, F3).
- The **causal magnitude**, how much of the poverty fall and the inequality rise is attributable to globalization, is `gap`. It is *not* claimed to be underivable in principle. It is unreached by these instruments in this run, and the remedy for that is world measurement, not a new figure line.

**Mode: `general` on the gap verdict.** **Triangulated** as a verdict: Fig 8 (search finding nothing is not absence) plus Fig 13 (unreachable is a verdict) plus `THE_FORMULA.md` step 7's two-instrument rule.

**Refuter:** point to a figure line that determines the sign or size of a causal effect of trade openness on a Gini coefficient.

### F9. What actually survives, with mode attached

| claim | mode | status | figure |
|---|---|---|---|
| Two slots, one aggregate and one per-country; averaging destroys the signal | `general` | triangulated | Fig 1 :19, :22; Fig 9 :54 |
| One actor can carry opposite valence for two residuals | `general` | single-source + world corroboration | Fig 11 :49, :50 |
| Global-to-national is a lossy transform with a measurable `R_T` | `general` | triangulated | Fig 4 :27, :30; Fig 1 :22 |
| D1 and D2 have constitutive anchors; D3 has none yet | `specified` | triangulated | Fig 2 :29, :36; Fig 13 :38 |
| The "while" is a conjunction, not ⋛ | `specified` | re-censused | Fig 12 :125; Operators :51 |
| The causal magnitude is `gap` from the figures | `general` | triangulated | Fig 8 :39; Fig 13 :134 |
| Globalization caused X percent of the poverty fall | none: not claimed | gap | no figure line |

---

## 5. Pre-registered refuter (written before the conclusion)

Per the standing rule, a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. One global scalar residual with no live per-slot component fully accounts for both trends (breaks Fig 1 :19, :22).
2. The headcount and the within-country spread are shown to be the same quantity under two names (breaks Fig 2 :31 and Fig 13 :38 independence).
3. A measurement that does not move when a frame changes its mind settles globalization's causal contribution to both trends (breaks F8's `gap`).
4. An actor is found whose valence is intrinsic rather than residual-relative (breaks Fig 11 :49, :50).
5. The global-to-national transform is shown to preserve the full within-country distribution with `R_T = 0` (breaks Fig 4 :27, :30).

Until one fires, this file may not be labelled `grounded`.

---

## 6. Recommendation

1. Keep the verdicts per domain separate. Do not average the poverty result and the inequality result into a net score (F1, F6).
2. State the anchor for each measurement before any causal claim (F4, F5).
3. Report the causal magnitude as `gap`, and let world measurement speak to it as secondary evidence (F8).
4. Measure `R_T` qualitatively by enumerating what the global aggregate discards (F3).
5. Send the residual and the refuter first, never the framework interior (Fig 10 :52: **"Bring a characterised residual, never the source."**).

---

## 7. Canonical usage check and retraction log

Read after the first six sections, per the standing order: `FRAMEWORK/reference/FIGURES_README_canonical.md` and the figure text itself.

- The README says the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also says a reading that makes figures contradict one another has misidentified its domain, and that the framework returns *"a shape, not a name"* then stops at the limit of the instruments and records the lineage.
- `THE_FORMULA.md` step 7 confirms that underivable-in-principle and unreachable-at-this-budget are different facts with different instructions. F8 preserves that distinction.

| earlier reading | status after canonical check |
|---|---|
| "The while is ⋛, a comparison of poverty and inequality" | **Retracted.** Strain test failed. ⋛ governs a threshold between two quantities at one scale (Operators :51), not a conjunction of two cross-scale slots. Re-censused as a conjunction in F7. |
| "The figures show globalization reduces poverty" | **Retracted.** No figure line contains a trade elasticity or a causal effect. Only the shape is figure-decided; the magnitude is `gap`. |
| "The figures show globalization worsens inequality" | **Retracted for the same reason.** Fig 11 makes the opposite-valence reading legal, not actual. |
| F1, two slots and a union | **Confirmed.** Fig 1 and Fig 9 with low overlap; world corroboration from Ravallion 2019 is a second witness from a different field. |
| F3, lossy cross-scale transform | **Confirmed.** Fig 4 round trip plus Fig 1 slot indexing. `R_T` is enumerated qualitatively, never set to zero. |
| F8, `gap` on causal magnitude | **Confirmed.** A search that finds nothing is not proof of absence; unreachable is a verdict. |
| Possible strain, Fig 11 valence versus a fixed "globalization is good" claim | **Dissolved by re-census.** The claim was the thing at fault, not the figure. Valence is relative to the residual. |

**After re-census: no live strain.** The one apparent strain (⋛) was corrected and is retained visibly in this log.
