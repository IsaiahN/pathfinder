# Figure-grounded audit: which planetary environments are most likely to support prebiotic chemistry today

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the literal ranking. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (Isaiah N, 2026) says LLM output can "simulate an approximate answer/output with the formula" and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No spacecraft measurement, laboratory assay or observation was taken by this run.

**Sources.** Figure text and line numbers from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`; the metalaw reading from `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`; the loop from `FRAMEWORK/figures/THE_FORMULA.md`; the checking arrangement from `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources are listed in `10_source_ledger.csv` and were actually opened.

---

## 0. The residual, stated in effect terms

The question asks for a ranking over planetary environments. Stated as an effect, it asks: at which slot `s` (a specific environment, at a specific time, under a specific prebiotic pathway) is the residual `R = |Γ(b,a) − o′|` small enough that a prediction about prebiotic chemistry survives contact with an observation? The anchor is a measurement that does not move when a frame changes its mind (Fig 2 :29).

Three defects are visible before any figure is read:

1. **The word "most" aggregates.** It asks for one global winner. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
2. **The word "support" is a two-place relation.** Support *what*? A cyanide-driven nucleotide pathway, an alkaline-vent protometabolism, a lipid-world encapsulation step? Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." An environment is not intrinsically good; it is good *for* a named residual.
3. **The word "today" changes the ground.** Present-day Mars is not Noachian Mars; present-day Enceladus is not a Hadean pond. Fig 10 :24: "the ground does not decay, the channel does." The question's time index must be carried into the slot, not dropped.

What an answer would look like, bound as an ordinary term before the run (Formula, section "Direction"): not a single name, but (a) a per-slot verdict with the pathway named, (b) the separator conditions that a slot must satisfy, (c) a declared `gap` where no figure line returns a name, and (d) a refuter written in advance. That is the sought-for shape. It is written down here so it can accrue a residual like any other term.

---

## 1. Domain census, before choosing any figure line

**R by arity, symmetry and scale.** Arity: at least three, an environment slot, a pathway residual and an observing instrument; "most likely" silently reduces this to one. Symmetry: "support" is ordered (environment enables pathway, not the reverse), while a similarity ranking of environments is symmetric; the question mixes the two. Scale: the chemistry lives at microns to metres, the environment at metres to kilometres, the comparison across planets and across geological time. The membrane between those scales is lossy (Fig 4 :27).

One line per domain, with actors, currency and anchor. A candidate with no nameable anchor is not admitted as a domain.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Environment / habitat | conditions (light, water, temperature, season, terrain), mineral surfaces, wet-dry and freeze-thaw cycles, gradients | contact: what touches the residual, at first and second order | the ground: an observation or assay at that slot | admitted |
| D2 Chemistry closure | atoms C H N O P S, the seven bonds, negation; reaction sets | reach inside `closure(Γ)` and description cost `|φ|` | settlement of a term against an experiment | admitted |
| D3 Scale membrane | methods going up, head starts coming down | reapplicability versus one-occasion recording | the round-trip gap `R_T` | admitted |
| D4 Instrument / ground | instruments, readings, per-slot residuals, independent frames | residual reduction | the ground, which does not update | admitted |
| D5 Verification seat | outside frame, ground maintainer, convention maker | verdicts versus conventions | the ground plus provenance of the ruling | admitted |
| X1 "intrinsically favourable environment" | a supposed standing property of a place | none nameable | none: valence changes with the residual | **not a domain yet**, absorbed into D1 as a relation |

**Partition or union.** Union, not partition. D1 (habitat), D2 (chemistry closure) and D4 (instrument) overlap: a wet-dry lake is simultaneously a habitat, a chemistry closure and an observing problem. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." So "which environment" splits into one loop per pathway, and the intersections (an environment that supports two pathways) form compounds with their own loops.

**Dependency order (Fig 3).** Describe the residual in effect terms first (Fig 9 :27-28), then enumerate the habitat (Fig 11 :43), then assess the chemistry closure (Fig 6 :21), then check the scale transform (Fig 4 :30), then read the ground per slot (Fig 1 :19), then issue a verdict with provenance (Fig 10 :62-64). Optimising a later link cannot rescue an earlier break (Fig 3 :19).

Strain test applied throughout: a line that only fits by forcing is governing another quantity and is sent back to the census, not smoothed. Three strains were found and are named in section 6.

---

## 2. Findings

### F1 — The framework refuses a standing ranking (decisive against the question as posed)

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
Fig 11 :51: "No standing list of good actors survives a change of residual."

An environment is an actor in this sense. A UV-lit shallow lake that favours cyanosulfidic nucleotide synthesis can destroy a pathway that requires deep-water UV shielding. The ranking flips when the residual changes. Therefore "most likely" is not a stable object for the framework to rank. It is a standing list, and Fig 11 refuses it.

**Refuter (falsifies F1):** exhibit a ranking over environments that remains invariant across two pathway residuals with demonstrably different required conditions (for example, a UV-dependent photochemical pathway and a UV-shielded vent pathway), measured against the ground in both cases. If it holds, valence is carried after all.

**Verdict:** `general` on the structural refusal, `specified` on the astrobiology application. Triangulated: Fig 11 and the comparative-planetarium source (Sasselov et al. 2020, read), which ties a pathway to specific environmental conditions rather than ranking places.

### F2 — Per-slot residual, never a global average

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :21: "Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert one."

A single "most likely environment" is the aggregate the figure forbids. The live signal is the slot where something failed to resolve: the specific pathway step that has no instrument at that place. A global habitability score is a filter for the budget, not a witness for the verdict (Fig 9 :60).

**Refuter:** a case in which an averaged multi-environment score correctly predicts where prebiotic products are found, while all per-slot scores fail. Mode `general`. Triangulated (Fig 1 plus Fig 9 :60).

### F3 — The question is a union of pathways, not one ranking problem

Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones."
Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

The origin-of-life literature is exactly this pattern: each proposed pathway works in its own subset and fails outside it. Ansari 2026 (read) states that "no single setting fully satisfies all requirements for life's emergence" and that "complementary processes operating across interconnected and evolving environments collectively enabled the assembly, concentration, stabilization, and integration of prebiotic molecules." The world source corroborates the union reading, but Fig 9 decides it.

**Refuter:** a single set of conditions that simultaneously satisfies every step of every leading pathway, confirmed by one experiment with one ground. Until then, keep the verdicts per pathway separate and never average them. Mode `specified`. Triangulated (Fig 9, plus the world source at lower weight).

### F4 — The habitat must be enumerated, not composed

Fig 11 :43: "The habitat is enumerated, never composed."
Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :46: "conditions: light, water, temperature, season, terrain"
Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

So the first move is not to name Mars or Europa. It is to enumerate, for a named pathway residual, what is in contact with it and what contacts those. Saha et al. 2022 (read) do exactly this at the micro scale: "These smaller 'microenvironments', which are as small as the microliter or micron scale, could vary significantly in physical and chemical properties." Their table of ionic strength, pH, viscosity and dielectric constant across aqueous films, ice, gels, eutectic solvents, mineral surfaces and tars is a habitat enumeration, not a composition.

**Refuter:** a case where the habitat list was generated by composing environmental classes from a fixed vocabulary and still captured a second-order contact that mattered. Mode `general` for enumeration, `specified` for the astrobiology list. Triangulated (Fig 11, Sasselov et al. 2020 "access" list).

### F5 — What a supporting slot must contain: spendable difference and a route, not ingredients

Fig 13 :22: "a difference that can be spent"
Fig 13 :24: "that entities relate, and influence travels"
Fig 13 :74: "Everything else is a composition across the two kinds, never within one."
Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."

A list of conditions (water, carbon, energy) is an ingredient list. The figures require a gradient that can be spent (a redox, pH, thermal or photochemical disequilibrium) and a network over which influence travels, composed across states and structures. Herschy et al. 2014 (read) put this concretely for alkaline vents: natural proton gradients across thin Fe(Ni)S barriers, plus thermophoretic concentration, are the spendable differences, and their bench reactor obtained "low yields of simple 1C organics including formate and formaldehyde."

**Refuter:** a prebiotic pathway demonstrated in a setting with no spendable gradient and no network over which influence travels, confirmed by an independent ground reading. Mode `specified`. Single-source on the figure composition rule (Fig 13), triangulated with Fig 12 and the chemistry sources at lower weight.

### F6 — A laboratory success is a substituted habitat, not a planetary verdict

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."
Fig 11 :67: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."
Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

Closed laboratory recreations of vent pores, wet-dry cycles or ice eutectics substitute a habitat. They prove that a mechanism can work (wiring), not that a planet supplies it with the unchosen actors and the duration. Cleaves 2013 (read) names the same gap in experimental practice: "it may be instructive to explore the extreme regions of known and future investigations of prebiotic chemistry, where reactions fail". Herschy et al. 2014 call their reactor result "a preliminary proof of concept, and still require optimising in many respects."

**Refuter:** a laboratory reconstruction that reproduces the full planetary capability, including the unchosen actors, the duration and the second-order cascade, and then a ground measurement at the planet that pays for the same prediction. Mode `specified`. Triangulated (Fig 11 plus two independent chemistry sources, though all share the astrobiology pool).

### F7 — Two opposed instruments, run as two tracks

Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access."
Fig 6 :30: "outward: does another frame already hold it? The description travels."
Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."
Fig 6 :34: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

INWARD: sharpen the instrument at a slot already returning something (a spectrum, a mineral assay, a sample-return measurement). OUTWARD: import the frame that already predicts the residual shape, with a source gate and shadow test (Fig 8). Neither is a substitute for the other. The literature illustrates both: sample return from Mars for the inward track, and laboratory cyanosulfidic chemistry imported into planetary geology for the outward track (Sasselov et al. 2020).

**Refuter:** a single instrument that simultaneously extends representation and imports an external primitive, with both effects measured and neither debited against independence. Mode `general`. Triangulated (Fig 6 plus Fig 8).

### F8 — The ground and the independence of frames

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

For this question the anchor is a detection of prebiotic products or a discriminating measurement at the slot, not the number of papers favouring a venue. The NASA Astrobiology page (read) is explicit about the instrument: Perseverance "will not be looking for organisms living on Mars today" but will collect data "that could be used to identify biosignatures of ancient microbial life." That is a ground-instrument statement, not an endorsement of a ranking.

**Refuter:** a survey in which two frames with genuinely disjoint evidence independently return the same per-slot verdict, with the evidence pools documented. That would be triangulation; until then the agreement of astrobiology reviews is one pool. Mode `general`. Triangulated (Fig 2 plus Fig 10).

### F9 — What to enumerate inside a slot: catalyst, cycle, functional group

Fig 12 :119: "catalyst. A part that survives its own use."
Fig 12 :121: "cycle. The output re-enters as input."
Fig 12 :123: "functional group. A substructure whose presence fixes the outcome."

These three structures, not the ingredient list, are the checkable content of "supports prebiotic chemistry." Does the slot contain a part that is regenerated (a mineral surface, a UV-driven redox shuttle)? Does a product re-enter as input (wet-dry concentration repeated over cycles)? Does one substructure fix the outcome (phosphate availability, borate, a pH window)? Fig 12 :117: "Same atoms, different bond, different substance." Two environments with the same chemical inventory but different arrangement are different substances for this purpose.

**Refuter:** two slots with identical catalysts, cycles and functional groups, over identical histories, that yield different products at the ground with no unenumerated actor. That would break the bond account. Mode `specified`. Single-source on the figure definitions, corroborated at the chemistry level by Cleaves 2013 and Saha et al. 2022.

### F10 — The literal ranking is a declared `gap`, not silence

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :134: "Unreachable is a verdict here, not a silence,"
Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line returns "present-day Mars outranks Enceladus." That ranking requires a ground measurement this run does not hold and a criterion (which pathway, which time slice, which instrument) the question does not supply. It is reported as `gap` of the unreachable-at-this-budget kind, not underivable in principle, and not as a hidden answer. What is returned is the shape any winning candidate must have, the per-slot separator, and the refuter.

**Refuter:** a figure re-census that yields a line selecting a specific environment at a specific time for a named residual, checked verbatim. If found, the `gap` is withdrawn. Mode `general`. Triangulated (Fig 9, Fig 13, Fig 8).

---

## 3. Pre-registered refuter

Written before the conclusion, per the seat map's rule that "a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. A standing ranking over environments remains invariant across two pathway residuals with demonstrably different required conditions, measured at the ground (breaks F1).
2. An averaged multi-environment score predicts detections correctly while all per-slot scores fail (breaks F2).
3. A prebiotic pathway is demonstrated at the ground with no spendable gradient and no network over which influence travels (breaks F5).
4. A laboratory reconstruction reproduces the full planetary capability, including unchosen actors and second-order cascade, and the planet-side measurement pays for the same prediction (breaks F6).
5. Two slots with identical catalysts, cycles and functional groups over identical histories yield different products with no unenumerated actor (breaks F9).

If any fires, the shape is withdrawn or re-censused. Until one is run, nothing here is `grounded`.

---

## 4. Recommendation

1. State the pathway before the place. Split the question into one loop per residual; keep verdicts separate, never averaged (F1 to F3).
2. Enumerate the habitat, including second-order contacts, rather than composing a list from environmental classes (F4).
3. Check for a spendable gradient and a network, then name catalysts, cycles and functional groups inside each slot (F5, F9).
4. Treat laboratory results as wiring proofs, not planetary capability (F6).
5. Run inward and outward as two tracks and keep them separate (F7). Buy independence before pooling agreement (F8).
6. Report the ranking as `gap`, with the shape and the refuter in front of any links (F10).

---

## 5. Canonical usage check and retraction log

Two sources govern how the figures may be used and were read after the first four sections.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary"; a reading that makes one contradict another "has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name" and stops at the limit of what instruments distinguish, recording the lineage so the stop is honest; "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat does not ask the anchor to decide what the figures already settle. The metalaw reading makes F1, F4 and F5 structural, not preferences.

| earlier reading | status after the canonical check |
|---|---|
| "answer the question with a ranked list" | **Refused.** The canonical limit is a shape, not a name. F10 records the `gap` rather than filling it. |
| "apply Fig 11's actor rule to planets literally" | **Kept, with scope named.** Fig 11's habitat actors are planets' conditions and gradients by the domain-agnostic rule (Fig 4 :20: "Only the actors, the currency and the anchor change."); the rule governs valence, not geology. |
| "more literature agreement would settle the ranking" | **Retracted.** Fig 2 :35 and :40 make agreement a mirror or a shared pool, not an anchor. |
| "lab synthesis proves an environment supports chemistry" | **Retracted.** Fig 11 :70 makes a test harness a substituted habitat; wiring is not capability. |
| "the ranking is underivable in principle" | **Narrowed.** It is unreachable at this budget and with this unstated pathway; a measurement plus a named residual could move it. |
| apparent Fig 11 versus Fig 2 tension | **Not strained.** Fig 11 governs valence relative to a residual; Fig 2 governs whether agreement is an anchor. Different objects; re-census, no change to either verdict. |

---

## 6. Strain log

- **S1, Fig 11 actor language applied to planetary environments.** Resolved by re-census: Fig 4 :20 licenses the cast change (actors, currency, anchor); the rule that transfers is residual-relative valence, not the biological examples. Kept visible.
- **S2, "gradient" as figure structure versus "redox/UV/pH gradient" in chemistry.** These are the same object at different strata: a difference that can be spent. Fig 13 :22 governs. No strain after the stratum is named, but the mapping is a binding, not a derivation.
- **S3, two currencies in F9.** Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." Describing an environment and testing it are different quantities; no combined habitability score is licence to add them.

After re-census: three strains, all named, none hidden, none used to soften a verdict.
