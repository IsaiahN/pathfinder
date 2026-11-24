# Figure-grounded audit: Were early oceans acidic, alkaline, or chemically varied from place to place?

**Mode of this document: `specified` on the shape, `general` on the per-slot rule, `gap` on the numeric pH. It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."**

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-23) says LLM output can simulate an approximate answer but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources for figure lines.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session and quoted character by character. Canonical usage: the GitHub figures README at `https://raw.githubusercontent.com/IsaiahN/tether/general-agent/figures/README.md`. Local formula and seat map in `FRAMEWORK/figures/`. No figure quote in this file is taken from a summary.

---

## 0. The claim under audit and the residual in effect terms

The question offers three answers: acidic, alkaline, or chemically varied from place to place. Restated as an effect:

- If the residual is aggregated into one global slot, the answer is one class label for "the early oceans."
- If the residual is indexed by object slot (basin, depth, setting, time window), the answer is a distribution of classes, and the third option is the one that matches the structure of the observations.
- The residual R = |Γ(b,a) − o′| is always a slice. What cannot be perceived yet is residual and simply cannot be read (Symbols table).

**R, described before any frame was picked.** Arity: pH is a one-place quantity per slot, but the question silently bundles at least three settings (open ocean, hydrothermal interface, shallow or pore water) and two time windows (Hadean, Archean). So the question has the arity of a union, not a scalar. Symmetry: pH is an ordering, "ordering, so more and less can be said" (Fig 13 :20), and acidic versus alkaline is a threshold comparison, "a threshold relation between two quantities" (Fig 12 :87). It is not a symmetric join. Scale: molecular speciation, vent chimney, basin, globe. The transform between these scales loses information (Fig 4 :27).

**What is owed before concluding.** A verdict per domain, kept separate and never averaged; a strain test; a pre-registered refuter; a canonical usage check; a retraction log.

---

## 1. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. A candidate with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Bulk ocean and atmosphere frame | pCO2, silicate weathering, carbonate burial, dissolved inorganic carbon | alkalinity, bulk pH | paleosols, carbonates, BIFs, isotopes | admitted, anchor nameable |
| D2 Local setting and habitat frame | hydrothermal fluids, serpentinization, vent chimneys, pore waters, shallow ponds, impact ejecta | local pH, proton motive force, redox disequilibrium | direct fluid measurement, mineral assemblages | admitted, anchor nameable |
| D3 Archive and instrument frame | boron and oxygen isotopes, carbonate rarity, greenalite, zircons | contact with a past state | the rock, which does not update | admitted, anchor nameable |
| D4 Question frame | the three offered labels {acidic, alkaline, varied} | class labels | none until "varied" is bound to a per-slot distribution | not a domain yet; after binding it is the union of D1 to D3 |
| X1 A single global pH for all early oceans | none nameable | a number | none: no instrument returns a global average of a 4 Ga ocean | not a domain; this is the aggregation error |
| X2 "Life began in one setting" as a separate cause | none | setting name | already inside D2 | absorbed, no separate loop |

**Partition or union.** Union, not partition. D1 and D2 overlap in the carbon cycle (seafloor weathering is both a bulk sink and a local setting); D3 reads both. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." A single lever cannot clear a union; after one condition is removed the intersection still binds.

**Dependency order (Fig 3).** D3 archive and instrument first (perception: can the slot be read at all), then vocabulary for what a slot affords, then the objective (what counts as a slot value), then D1 and D2 frames, then the label. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Effort spent above a broken archive link arrives at a step that cannot use it.

**Strain test applied before conclusions.** Fig 1 demands per-slot residuals, while the world literature reports global pH curves (Hao et al. 2026, Fig 2a; Guo et al. 2026, Fig 2B). If both are read as claims about the same quantity, they strain. Re-census: the global curve is an abstraction across slots (T_A, up a scale), not a slot reading. Fig 4 :27: "The transform between scales loses information, and that is the point." No strain after re-census; the bulk curve is a coarse description and the slot readings are the ground. The gap between them is R_T and must be reported, not assumed zero. This re-census is recorded again in section 5.

---

## 2. Figure census (verbatim, from 03-FIGURES_TEXT.md)

| figure | verbatim line | bearing |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | decides the per-slot form |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | refuses the single global label |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." | names the ground |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement cannot settle pH |
| Fig 2 :40 | "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | the bulk-model papers are one pool |
| Fig 3 :27 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | archive link governs the label |
| Fig 4 :20 | "it or a thousand. Only the actors, the currency and the anchor change." | same loop at slot and global scale |
| Fig 4 :27 | "The transform between scales loses information, and that is the point." | global curve is lossy |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | R_T is owed |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | naming one setting is an import |
| Fig 7 :13 | "agreement compounds, evidence does not" | many agreeing models are not many witnesses |
| Fig 8 :32 | "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." | more bulk models cannot add a slot |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | absence of a preserved carbonate is not proof of acidity everywhere |
| Fig 8 :50 | "Convergent derivation and adopted import look identical in the contents." | provenance of a pH value decides its weight |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | the number is a gap |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | unbundle the three options |
| Fig 9 :55 | "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." | union verdict |
| Fig 9 :57 | "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." | compound, not a harder scalar |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | tractability tier is not a verdict |
| Fig 10 :24 | "the ground does not decay, the channel does" | the archive channel can fail |
| Fig 10 :26 | "saturated metrics, pooled readings" | the pooled global pH is a live failure mode |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | outreach order |
| Fig 10 :52 | "Bring a characterised residual, never the source." | first contact |
| Fig 11 :40 | "An improvement that does not change contact changes nothing, however much it improves." | better models of the same pool do not add contact |
| Fig 12 :87 | "a threshold relation between two quantities" | pH class is a comparison bond |
| Fig 12 :104 | "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." | a settled slot value becomes a bulk operand |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | acidic and alkaline readings as isomers, see 06 |
| Fig 12 :124 | "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." | weaker reading |
| Fig 13 :20 | "ordering, so more and less can be said" | pH is a spectrum ordering |
| Fig 13 :22 | "a difference that can be spent" | pH gradient is a structure |
| Fig 13 :74 | "Everything else is a composition across the two kinds, never within one." | composition rule |
| Fig 13 :115 | "The set is closed. The arrangements are not. That gap is why import exists." | no new primitive is minted here |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence," | the number is reported as a gap |

Every quoted string above is an exact substring of `03-FIGURES_TEXT.md` (case-insensitive, trailing punctuation ignored). Each finding below uses one of these lines before concluding.

---

## 3. Findings F1 to F9, each with its refuter

### F1 The residual is per slot, so a single global label is an aggregation error (decisive for the form)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

The observations in the opened literature are already slot-indexed: a fluid at a vent chimney, a mineral assemblage in a specific formation, a paleosol at a specific horizon, a modeled global curve. The question asks for one label over all of them. Under Fig 1 that is the named failure: the average hides the live slot. "Chemically varied from place to place" is not one more candidate label alongside acidic and alkaline; it is the statement that the per-slot structure is the thing to be predicted.

**Mode:** `general` for the rule, `specified` for applying it to early oceans. **Status:** triangulated (Fig 1 and Fig 10 :26, low overlap between the agent loop and the ground-maintainer failure list). **Refuter:** a single pH value that predicts every slot's speciation within instrument error, so no slot carries positive residual mass after aggregation. If that is shown, F1 fails.

### F2 The three options form a union compound, not one hard question

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

"Acidic," "alkaline," and "varied" are not three points on one scale. Acidic and alkaline are bulk-frame class labels produced by D1 models; varied is a statement about D2 slot structure that survives after the bulk conditions are removed. After the bulk frame is accounted for, the residue is categorically different: a distribution over slots, not a harder scalar. This is why the world literature can honestly report bulk pH around 6.5 to 7 (Hao et al. 2026) and local alkaline fluids at pH 10 (Ohmoto and Ferry 2026) without either refuting the other.

**Mode:** `specified`. **Status:** triangulated (Fig 9 plus Fig 13 :74 composition rule). **Refuter:** one mechanism under one condition that accounts for every setting and leaves no categorically different residue. Then it is a partition and F2 fails.

### F3 pH is an ordering and a threshold, not a substance or a bond between substances

Fig 13 :20: "ordering, so more and less can be said"
Fig 12 :87: "a threshold relation between two quantities"

Acidic versus alkaline is a ⋛ comparison relative to a threshold, not a symmetric join and not a seventh primitive. The six-term set already supplies the needed structure: spectrum for the ordering, gradient for the directed difference (Fig 13 :22), space and time for the slots. No new member is required.

**Mode:** `general`. **Status:** triangulated (Fig 13 plus Operators table :49). **Refuter:** evidence that no more or less ordering applies to early ocean pH, or that the class label is not a threshold relation. Then the bond mapping fails but F1 survives.

### F4 The ground is the rock record and it must not update on the models

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Most early-ocean pH estimates are model outputs conditioned on proxy constraints. A model is a frame; the anchor is the proxy and the measurement, which does not move when a model changes. Agreement among models is negotiation unless each ranges separately against the rock. The opened Hao et al. review says exactly this about the state of the record: "Direct geological constraints on the Hadean ocean's chemistry, including its pH, salinity, and trace element inventory, are sparse and contentious." Sparse and contentious is a description of a weak anchor, not an invitation to average models.

**Mode:** `specified`. **Status:** triangulated (Fig 2 and Fig 10, anchor rule and ground maintainer). **Refuter:** a single frame whose reported pH changes when a different frame's model changes, with no new measurement. That is coherent drift and would break the anchor.

### F5 Agreement among bulk-model papers is one evidence pool, not two witnesses

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 7 :13: "agreement compounds, evidence does not"
Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

Hao et al. (2026), Guo et al. (2026) and the Wikipedia synthesis all lean on carbon-cycle models and the same sparse proxy families. Convergent derivation is possible, but absent a provenance record separating them they are one witness. Fig 8 :50: "Convergent derivation and adopted import look identical in the contents." So the verdict here is not strengthened by counting papers.

**Mode:** `general` for the rule. **Status:** triangulated (Fig 2, Fig 7, Fig 11). **Refuter:** two instruments with genuinely low overlap, for example boron isotopes in primary carbonates and an independent mineral equilibrium thermometer, returning the same slot pH. That would be triangulation and would raise the weight.

### F6 The framework returns a shape; the numeric pH is a gap

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :134: "Unreachable is a verdict here, not a silence,"
Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line yields a number. What the figures license is the form: a slot-indexed distribution with a bulk abstraction across it, a threshold comparison, and gradient structures where settings meet. The actual values are owed from the ground. The GitHub canonical usage rule states the limit in words I opened this session: "what a missing thing would have to look like (a shape, not a name)." This governs a primitive not held in Γ. A measured pH from a world frame is not a missing primitive, so naming a number is not forbidden; it is permitted only as a provenanced import with a source gate and a shadow test (Fig 6 :23, Fig 8 :50). Until then the numeric field is `gap`.

**Mode:** `specified` for the shape, `gap` for the number. **Status:** triangulated (Fig 9, Fig 13, canonical usage rule). **Refuter:** a figure line that returns a numeric pH, or a provenanced measurement with a source gate and shadow test that closes a named slot. The latter would remove the gap for that slot without changing the shape.

### F7 A pH gradient is a spendable structure, not a mere distribution

Fig 13 :22: "a difference that can be spent"
Fig 4 :20: "it or a thousand. Only the actors, the currency and the anchor change."

Altair et al. (2025), opened 2026-11-23, write that "pH separation across vent walls could have been the forerunner to pH separation across cell membranes." That is the framework's gradient in a low-overlap field: an ordering across space with directedness that can do work. The same structure appears at every scale, so the vent-wall gradient and the global acidity drift are the same loop with different actors and anchors.

**Mode:** `specified`. **Status:** single-source for the figure definition (Fig 13), corroborated by one low-overlap world frame (electrochemistry). **Refuter:** a pH difference that cannot drive any chemistry or work; then it is a distribution, not a gradient, and this mapping fails.

### F8 The pooled global curve is a channel failure unless the round trip is measured

Fig 10 :24: "the ground does not decay, the channel does"
Fig 10 :26: "saturated metrics, pooled readings"
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Alian et al. (2024/2025) report that vent-chimney microenvironments carry "microenvironmental complexity lost within standard bulk analyses." That is Fig 10 :26 in a different field: the bulk reading pools what the slot holds. Fig 4 :30 then requires that the abstraction from slots to a global curve be carried back down and the gap measured. R_T here is nonzero: the global curve cannot hold the chimney-scale gradient, the pore-water excursion, or the setting-specific time window. Treating "the early ocean had pH X" as identical to the slot readings is the dead-reckoning error.

**Mode:** `specified`. **Status:** triangulated (Fig 10 and Fig 4, different figures and different quantities). **Refuter:** a measured R_T of zero between the bulk abstraction and the slot readings at the resolution in question. Then pooling is harmless and F8 fails.

### F9 Naming one setting as the cause is an import with no source gate

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :50: "Convergent derivation and adopted import look identical in the contents."

The world literature offers many settings: deep vents, volcanic lakes, hot springs, geysers (Moldogazieva et al. 2026: "life emerged in multiple local environments"). Selecting one as *the* answer adds an atom from that frame into ours. Without provenance and a shadow test, the import is unpriced. The honest form is to keep the envelope of settings and let the ground narrow it.

**Mode:** `specified`. **Status:** triangulated (Fig 6 and Fig 8). **Refuter:** a provenanced import from a differing closure with a stated shadow test that predicts the observed slot distribution. Then the setting may be named and the wall has genuinely moved.

---

## 4. Pre-registered refuter (written before the conclusion)

Per Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device." Before the world search and before the verdict, the shape claim is refuted if any of the following holds:

1. A single pH value predicts every slot's speciation within instrument error, so no slot retains positive residual mass after aggregation (kills F1).
2. One mechanism under one condition accounts for all settings and leaves no categorically different residue after the bulk frame is removed (kills F2).
3. A source-discriminating measurement of bulk Archean seawater yields one unambiguous value and shows local variation is below detection at the resolution of the instrument (kills "varied" at the ground).
4. A figure re-census admits a global-pH primitive, or derives one of the six from the other five (breaks Fig 13 minimality).
5. A measured round-trip gap R_T of zero between the bulk abstraction and slot readings (kills F8).

If any fires, the shape is withdrawn or narrowed. None was fired in this run. The conflict between the alkaline and weakly acidic world frames was not a firing: it is a conflict inside one evidence pool and was returned to the census (section 5).

---

## 5. Canonical usage check and re-census of strains

Two usage sources were read after the first four sections and govern how the figures may be used:

- The GitHub figures README (`https://raw.githubusercontent.com/IsaiahN/tether/general-agent/figures/README.md`), opened 2026-11-23: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also says a reading that makes figures contradict one another has misidentified its domain, and gives the limit: "a generator of the shape of an answer at any level... what a missing thing would have to look like (a shape, not a name)."
- The local seat map, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, lines 163 and 287, verified this session: "High correlation is disqualifying for a verdict and efficient for a convention." and "And a falsifier written before the run is a design instrument, not only an honesty device."

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "The answer is acidic because carbonate rocks are rare." | **Retracted as a verdict.** That is a bulk-frame abstraction (Wikipedia synthesis, tertiary), not a slot reading. Kept only as an example of the X1 aggregation error. |
| "The ocean was alkaline at pH 10, so the third option is false." | **Retracted as a generalization.** Ohmoto and Ferry (2026) is one thermodynamic frame with its own closure. Their own text reports an earlier BIF-based estimate of "oceanic pH was ~7", so even within that paper the reading is frame-dependent. It is a per-slot result, not a global refutation. |
| "Varied is one of three equally weighted options." | **Retracted.** Varied is the per-slot form the other two presuppose. It is not a third label on the same scale (F1, F2). |
| "Global pH curves from models are the ground." | **Retracted.** They are abstractions across slots; R_T is nonzero (F8). |
| "The framework forbids naming any pH number." | **Narrowed and corrected.** The "shape, not a name" limit governs a missing primitive. A measured pH is a provenanced import from a world frame, allowed with a source gate and shadow test (F6). See `05_what_shape_means.md` section 5b for the same correction. |
| F1 per-slot rule | **Canonically confirmed.** Fig 1 :19 and Fig 10 :26 agree from two different figures. |
| F2 union reading | **Canonically confirmed.** Fig 9 :54-57 and the README's re-census rule agree. |
| Apparent strain: Fig 1 per-slot versus global pH curves | **Not strained.** Re-census: Fig 1 governs residuals at a slot; a global curve is T_A over many slots. Fig 4 :27 licenses the loss and Fig 4 :30 requires measuring it. Different objects, different scales. |
| Apparent strain: alkaline pH 10 versus weakly acidic 6.5 to 7 | **Not a figure strain; it is a world-source conflict.** Both are bulk-frame model outputs sharing a proxy pool. Returned to the census, not used to flip the verdict. The figure verdict (per-slot form) is independent of which bulk value wins. |

### What survives

The figure-licensed residue: the answer must be indexed by slot; the bulk acidic or alkaline readings are abstractions that live inside the per-slot answer; the settings form a union whose intersections keep their own loops; the numeric values are a `gap` until a source-discriminating instrument settles them; pH gradients are spendable structures that appear at every scale. Strains after re-census: none hidden. The one live world conflict is named and is not a framework strain.

### Per-domain verdicts, kept separate

| domain | verdict | status | mode |
|---|---|---|---|
| D1 Bulk frame | weakly acidic to circumneutral is the current model abstraction, not the ground; R_T nonzero | `single-source` for the figure rule, world models one pool | `specified` |
| D2 Local settings | chemically varied across slots; alkaline vent and pore-water readings are real per-slot values | `triangulated` (Fig 1 plus Fig 13 and low-overlap world frames) | `specified` |
| D3 Archive | the rock does not update; the channel is sparse and pooled | `triangulated` (Fig 2 plus Fig 10) | `general` for the rule |
| D4 Label | varied is the figure-licensed form; acidic and alkaline are retained as slot values | `triangulated` (Fig 1, Fig 9, Fig 12) | `specified` |
| Numeric pH of a named slot | no figure line governs it; provenanced imports exist but conflict | `gap` | `gap` |

Never averaged. If D1 says pH 6.7 and D2 says pH 10 at a vent interface, the answer is not 8.35; it is two slot values with two provenance records.

---

## 6. Recommendation

1. Answer in the per-slot form. Refuse a single global class label as an aggregation error (F1, F2).
2. Record every numeric pH as a slot value with its frame, provenance and shadow test. Do not promote a bulk model number to the ground (F4, F6).
3. Measure and report R_T between the bulk abstraction and the slot readings before using a global curve as an input to another argument (F8).
4. Keep the settings as a union and let the ground narrow them; do not name one setting as the cause (F9).
5. Lead the outreach with the per-slot claim and the five refuters, then offer links only if asked (Fig 10 :52).
6. Fig 4 :22: "Only methods cross up. Only head starts come down." Send the derivation and the refuter, not a recording of the conclusion.
