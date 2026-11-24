# Figure-grounded audit: changes of unit, instrument and definition in a time series

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape, `gap` on the numerical decomposition of any particular trend. Not `grounded`.** `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: SIMULATED DERIVATION, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the historical question it reports on. No measurement was taken. See `05_what_shape_means.md` §6.

**Figure source.** Every `Fig N :line` citation is checked against `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the verbatim extract. Quotes from essays are attributed to the essay and are not treated as figure lines. Local framework documents are cited as `local: PATH`.

---

## 0. The residual, stated in effect terms

An observer holds a series of readings `o′(t)` over time and a trend fitted to them. The residual R is the gap between the trend in the recorded readings and the trend in the quantity the readings are supposed to be about. Three kinds of change can open that gap without any change in the quantity:

1. **Unit change**: the scale or the definition of the unit is altered, so the same quantity receives a different number.
2. **Instrument change**: the channel that produces the reading is altered, so a different reading is returned for the same quantity.
3. **Definition change**: the category or the inclusion rule is altered, so a different set of events is counted as the same thing.

A naive answer treats all three as "measurement error" and subtracts a single correction. The figures refuse that flattening. The residual is *"The residual is indexed by object slot, not aggregated."* (Fig 1 :19), and *"Aggregating across slots is how a live signal disappears into an average."* (Fig 1 :22). A single correction across a unit change, a sensor change and a category change is exactly that forbidden average.

**What an answer would look like, bound as an ordinary term (formula step "Direction").** Before searching, I write down the sought-for shape as a term that can accrue a residual: *a per-slot decomposition in which each change of unit, instrument or definition is attached to a provenanced record, checked against an anchor that did not itself change, and closed by an instrument that discriminates among candidate sources*. Binding it makes it refusable by the same test as everything else (THE_FORMULA.md, "Direction"). If I cannot produce that object, the answer has not arrived; it has only been paraphrased.

**Arity, symmetry, scale of R.**

- **Arity**: the trend is a comparison between at least two time slices, and it is exposed to three independent conditions. Fig 9 :4-5 names the test: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* A series broken at a redefinition date is not one hard series; it is several well-formed ones. Fig 9 :57 adds: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*
- **Symmetry**: the three causes are not interchangeable. A unit rescale is a symmetric identity (`≡`, "two names, one referent", Operators :25); an instrument replacement is an ordered change in the channel; a definition change alters which objects enter the count. Their composition is not commutative, so the bond matters (Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands.").
- **Scale**: the reading is first order (quantity, instrument, reading); the trend is a second-order comparison over first-order readings, since each settled reading can become an atom for what composes over it (Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom").

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not a domain yet. Here all four have anchors, but D3's anchor is borrowed, which is itself a finding (F2).

| id | domain | actors | currency | anchor | partition or union | dependency |
|---|---|---|---|---|---|---|
| D1 | the quantity / ground | the measured property, the world, the phenomenon | the value the ground actually takes | the ground (Fig 2 :29, Fig 10 :24) | union member | last: it is what the corrected verdict answers to |
| D2 | the instrument / channel | sensors, calibrations, observers, recording practice | readings `o′`, transients, resolution | the ground, reached through calibration (Fig 10 :24, Fig 6 :32) | union member | first: a broken channel cannot carry a later correction |
| D3 | the unit / definition / convention | standard bodies, category schemes, names, codes | conventions, shared meanings | borrowed from D1, because a convention alone has no truth anchor (Fig 10 :18, :47) | union member | second: a convention must be fixed before readings are comparable |
| D4 | the record / lineage | metadata, station histories, revision dates, provenance | the trace of which change happened when | the lineage itself, which is checkable (Fig 13 :127, :130) | the seam that binds the other three | before D1 verdict: without the record the causes cannot be separated |

**Partition or union.** This is a union, not a partition. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55-56: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." A station that changed both thermometer and screen sits in an intersection; correcting only one lever leaves that intersection standing.

**Order by dependency (Fig 3).** The chain runs: perception (is the channel returning anything, Fig 3 :4-5) then vocabulary (is the unit/category stable, :6-7) then objective (what trend would count, :9-10) then planning (the correction) then learn and carry (:14-15). Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing." Fitting a trend to a series whose vocabulary link never arrived is a reading of nothing, not a weaker reading.

**Census rule applied.** D3 initially appeared to have no anchor, because a shared meaning is settled by agreement and agreement is a convention (Fig 2 :41). Re-census gives it a borrowed anchor: it is legitimate only while it does not decide an outcome (Fig 10 :47). A convention that changes the trend it is meant to measure has promoted itself into a verdict and is refused. This is recorded as a strain resolved by re-census (§7, S1), not smoothed over.

---

## 2. Figure census (bearing, quoted before concluding)

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | residual per slot; ground is the only metric; frame-internal scores disqualified | no single global trend correction; D1 anchor only |
| **2 The Ground** | anchor must not update; independence between frames; agreement valence | multiple records from one revision are one pool, not witnesses |
| **3 Dependency Chain** | perception and vocabulary precede objective and planning | a trend below the vocabulary break is a reading of nothing |
| **4 The Membrane** | round trip loses information; measure the gap | harmonisation is a round trip with nonzero R_T |
| **5 Mint Pipeline** | support, reachability, novelty; refusal as a fifth kind | a correction is a mint only if it pays and is provenanced |
| **6 Closure and Reachability** | import moves the wall; instruments improved from worse ones; the world gains no primitives | unit change adds no atom; instrument change changes representation |
| **7 Room Chain** | agreement compounds, evidence does not; next room selected against residual | more readers of the same series cannot corroborate |
| **8 Union Surplus** | convergent derivation vs adopted import; residual first, frame second | lineage is the only discriminator between causes |
| **9 Leave / Arrive** | split a union; describe the residual before choosing a frame; filters are not witnesses | the question is a union; no universal percentage is returned |
| **10 Ground Maintainer** | declared meaning is not grounded; ground does not decay, channel does; a convention that decides an outcome stops being one | decisive for D2 and D3 |
| **11 The Habitat** | improvement that does not change contact changes nothing; no standing list survives a residual change | a better instrument may change the channel without moving ground contact |
| **12 The Bond** | bonds are typed and priced; `→` orders; `−` subtracts; `⋛` compares; isomers | a trend is a typed composition, not an ingredient list |
| **13 Minimum Viable Set** | lineage is the proof; unreachable is a verdict; shape not a name | decomposition share is a `gap`, not a silence |
| **Operators table** | `≡` identity; `→` sequence; `−` subtraction; `⋛` comparison; `¬` negation | the three causes are different operators, not one error term |
| **Symbols table** | `R` is the aim, always a slice; `R_T` the round trip; ground is the anchor | framework for the restatement in §0 |

Strained readings are named in §7, not hidden.

---

## 3. Findings

### F1 - The question is a union of overlapping conditions, not one trend with noise (decisive for the framing)

Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

A temperature series spanning a 1985 thermometer replacement and a 2004 staging revision is not one series plus noise. It is a specific compound: two conditions bind over different intervals, and the intersection (a station that changed both) needs its own loop. A global correction clears only the regions where one condition holds and leaves the intersections standing.

**Refuter:** show that one correction, applied uniformly, reduces the residual on every interval and every intersection without importing a frame-specific term. If it does, the union finding fails.

**Status: triangulated** (Fig 9 split rule plus Fig 1 per-slot residual, low overlap between the search figure and the agent figure).

---

### F2 - A unit change is a convention, not a move of the ground

Operators :25: "two names, one referent." Operators :28: "a definitional identity is not a recipe at all, which is where this glyph does two jobs."

Fig 10 :18: "a declared meaning is not a grounded one." Fig 10 :45: "It does author conventions, because nothing else can see across a seam." Fig 10 :46: "A convention makes no claim about the world; a verdict and an atom both do." Fig 10 :49: "Declaring a meaning does not ground it."

Fig 6 :25: "An import adds no atom to the world." Fig 6 :26: "The world does not gain primitives; a frame gains access. Composition explores what the operators reach; instruments extend what can be represented at all."

Fig 2 :41 permits agreement here: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it", but Fig 2 :40 disqualifies the same agreement for a verdict: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."

Therefore a redefinition of the metre or of a cancer stage is a change of convention. It is licensed for what it is (shared meaning) and forbidden from deciding the trend verdict. Fig 10 :47: "a convention that decides an outcome has stopped being one." Fig 10 :48: "a convention nothing can check is a constant the seat authored, carrying the seat's authority."

**Correction kept visible.** My first pass called every convention a "verdict in disguise". That overstates. A convention is legitimate and necessary; it is only when it fixes an outcome that it stops being one. The narrowed claim is what survives.

**Refuter:** exhibit a unit redefinition that changed the quantity itself rather than the name, code or realisation of the quantity. The world source in §4.3 (BIPM on the metre) is a case where custodians deliberately prevent this, which corroborates but does not decide.

**Status: triangulated** (Fig 10 convention rule plus Operators `≡` plus Fig 6 no-new-atom, three low-overlap figure sections).

---

### F3 - Instrument change is channel decay, not ground decay

Fig 10 :24: "the ground does not decay, the channel does." Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings." Fig 10 :27-28: "the output is not a verdict, it is you have lost touch."

These three lines name the mechanism. A sensor replacement, a change in observation time, or a new screen does not alter the quantity; it alters the channel. A series can therefore trend while the ground does not, and the trend is a signal that contact has degraded, not that the world moved.

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :33: "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced." So the correction cannot be designed from a verbal account of the quantity; it must be built from the residual the old instrument produced. That is why parallel measurements (old and new instrument side by side) are the instrument that closes this gap: they are the worse instrument's residual used to build the better one.

Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." A higher-precision instrument that is not calibrated to the old one improves the reading while leaving contact with the historical ground unchanged, so it cannot settle the trend by itself.

**Refuter:** show an instrument change for which the ground reading moved first and the channel change was a consequence, such that correcting the channel would erase a real trend. This is the failure mode the world literature actively tests for (§4).

**Status: triangulated** (Fig 10 channel rule plus Fig 6 instrument rule plus Fig 11 contact rule, three separate figures).

---

### F4 - Definition change re-slices the slots, and the residual must be re-indexed

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

A category change moves cases between slots. Under the old rule a deep-muscle tumour is T3, under the new rule it is T2. The counts in each slot change while the underlying disease does not. The fix is not to average the two schemes; it is to re-index the slots and keep every cut ranked and reversible (Fig 9 :40-41: "a wrong cut removes the answer and speeds up so keep every cut ranked and reversible").

Fig 10 :72: "When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom." A stable category applied to a changed question is that failure.

**Refuter:** exhibit a definition change that leaves slot membership identical for every case in the record. Then F4 does not apply to that case.

**Status: triangulated** (Fig 1 per-slot plus Fig 11 valence plus Fig 10 room/question, low overlap).

---

### F5 - A trend is a typed composition, not a fitted line over ingredients

Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."

Operators :34: "the only bond a flat chain can express, so every term today is a sequence whether or not it should be." Operators :46: "progress is a subtraction, which is why a vocabulary without it cannot say how far along it is." Operators :51: "a goal is a comparison, which is why a vocabulary without it cannot state one."

A trend over time is the composition of (a) a sequence over readings (`→`), (b) a subtraction between two time-indexed readings (`−`), and (c) a comparison against a threshold or a reference (`⋛`). Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." A list of values with no record of which bond joined them has recorded half of itself.

Fig 12 :14-16: "the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, and nothing signals that anything was lost." This is the exact failure of an unannotated historical series.

**Refuter:** show a trend for which no comparison bond is needed, that is, a bare monotonic report with no reference value and no threshold. Then the `⋛` component of F5 is not required for that case.

**Status: single-source** for the bond typing (Fig 12 and Operators share a figure lineage, so this is one witness within the framework), corroborated by the world source on `→` ordering only if an independent source is found. It is not upgraded to triangulated.

---

### F6 - Provenance is the only discriminator among the three causes

Fig 8 :50: "But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."

Fig 13 :127: "The array cannot be checked by inspection, so the record is what makes it verifiable." Fig 13 :129: "Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available." Fig 13 :130: "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."

Fig 6 :12: "source gate: provenance." Fig 6 :13: "shadow test: explains a gap." Fig 10 :62: "A ruling carries provenance like an atom."

A break in a series cannot be attributed from the break alone. Two series can show the same step because both adopted a new standard (common cause, one pool) or because two independent instruments reached the same correction (convergence at maximum independence). Only the record of where each came from separates them.

**Refuter:** exhibit a series in which the cause of a break is recoverable from the values alone, with no station history, no revision date and no instrument metadata. If such a case exists, provenance is not necessary for it.

**Status: triangulated** (Fig 8, Fig 13 and Fig 6, three separate figures).

---

### F7 - Harmonisation is a round trip; measure the gap R_T, do not assume it is zero

Fig 4 :27-29: "The transform between scales loses information, and that is the point. Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent."

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

Symbols :77-78: "The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x)). Measures what the coarser description cannot hold."

Re-expressing an old series in a new unit or a harmonised category is exactly abstraction and concretisation. The new figure will not match the old one at every point, and the residual is the honest report of what the harmonisation dropped. Treating a harmonised series as identical to the original sets R_T to zero and is the dead-reckoning error.

**Refuter:** exhibit a harmonisation that is information-preserving at every point, with a demonstrated inverse. Then R_T is zero for that case and the warning does not apply.

**Status: triangulated** (Fig 4 plus Symbols table; the formula repeats the definition, but that is the same framework, not a second witness).

---

### F8 - Multiple records of the same revision are one witness, not several

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when" (Fig 2 :30) "you push on it, it is not an anchor."

Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Ten stations that all adopted the same instrument on the same date are ten readings of one event, not ten independent confirmations. Conversely, an XBT profile and a collocated CTD profile are two instruments pointed at the same water, so their disagreement is informative and their agreement is triangulation at maximum independence. Independence is the parameter, not a caveat (Fig 8 :48).

**Refuter:** exhibit a case where records sharing one revision date still draw on disjoint evidence at the ground level. Then they are independent despite the shared cause, and the "one pool" verdict fails for that case.

**Status: triangulated** (Fig 2 and Fig 7, separate figures, with the independence definition distinct from the room-chain result).

---

### F9 - The ground is not restored by agreement; it is restored by contact

Fig 11 :36: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground." Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

Fig 2 :33: "The anchor must not update." Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

A corrected series whose anchor is the consensus of the correcting community has become another frame. Coherent drift is the named failure: every station agrees, and all are off. The anchor must be something that does not move when the community pushes on it, such as a parallel measurement, a physically independent instrument, or an outcome measured on a different channel.

**Refuter:** exhibit a correction whose anchor is demonstrably invariant under the community's own revisions, and show that a cohort of agreeing stations remained independent. Then F9 does not bite.

**Status: triangulated** (Fig 11 contact plus Fig 2 anchor, separate figures).

---

### F10 - There is no standing list of corrections

Fig 11 :51: "No standing list of good actors survives a change of residual." Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."

A correction that is beneficial for a temperature trend (screen change adjustment) may be harmful for a precipitation trend (windshield geometry), because the residual changed. So the answer cannot be a fixed table of "unit factors, instrument factors, definition factors" with fixed signs. It must be a procedure that re-enumerates the habitat per residual (Fig 11 :43-44: "The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering.").

Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

**Refuter:** exhibit a correction whose sign and magnitude are invariant across all residuals in the field. Then a standing list is possible for it.

**Status: single-source** (Fig 11 only; the world sources on homogenisation show practice-specific corrections, which corroborate the shape but are not figure lines).

---

### F11 - The numerical decomposition is a `gap`, not a silence

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence," Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line returns "62 percent of the trend is instrumental, 21 percent definitional, 17 percent real". That quantity needs a ground reading per series and a discriminator among sources; the figures give the shape those instruments must have, not the number. This is `gap` of the unreached kind at this budget, not underivable in principle: the world literature in §4 shows that parallel measurements and homogenisation algorithms do make progress on it.

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A confidence interval on a fitted trend is a filter for the budget; it is not a witness for which cause produced the trend.

**Refuter:** exhibit a figure line that returns a numerical share for a named cause. I found none after a genuine census of all 13 figures and both tables.

**Status: gap (declared).**

---

### F12 - Some trends are refused, not corrected

Fig 5 :50-52: "AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it. The four kinds sort a gap by what is missing. None of them sorts a gap by what is wrong. A residual whose content is that a regularity the system holds is false owes a term, and the term it owes refuses another rather than explaining a gap."

Operators :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate."

If the apparent trend rests on a term that is false (for example, a category that was never comparable across the boundary), the right move is a refusal, not a new correction factor. Nothing is deleted: "Nothing is ever deleted, and the reach falls because something was ADDED" (THE_FORMULA.md step 3). The record keeps the old series and the refusal together, and what falls is the standing of the old series to be composed into a longer trend.

**Refuter:** show that a false regularity can be repaired by adding a correction without refusing its standing to be composed over. Then the fifth kind is not needed for that case.

**Status: triangulated** (Fig 5 amendment plus Operators negation, plus the formula's step 3, with the caveat that the formula shares the figure lineage).

---

## 4. WATSON world corroboration (secondary only, opened and recorded)

Figures decide; world sources corroborate and never overrule. All were opened on 2026-11-23. Full provenance is in `10_source_ledger.csv`.

### 4.1 Metrology: the custodians engineer continuity

BIPM, *metre, historical perspective* (bipm.org): "The 1889 definition of the metre, namely, the length of the international prototype of platinum-iridium, was replaced by the 11th CGPM (1960) using a definition based on the wavelength of the radiation corresponding to a particular transition in krypton 86... In turn, this was replaced in 1983 by the 17th CGPM (Resolution 1) with a definition referenced to the distance that light travels in vacuum in a specified interval of time." **Prediction:** a unit change is a convention whose custodians try to preserve the quantity while changing its realisation. **Corroborates F2.** Overlap: low overlap with the framework, different field (metrology), high authority within its own field.

BIPM *SI Brochure, 9th edition preface*: "great attention has been paid to ensure that these definitions are consistent with those in place at the time the change was implemented." The CIPM joint statement adds: "care has been taken to ensure that there will be no perceptible impact on daily life and that measurements made with previous definitions of the units remain valid within their measurement uncertainties." **Prediction:** curators of units explicitly prevent a convention from becoming a trend-generating event. **Corroborates F2 and F7** (continuity is a designed round trip).

NIST, *Meter* (nist.gov): "It was later discovered that scientists made errors in calculating the curvature of the earth, and as a result the original prototype meter was 0.2 millimeters shorter than the actual distance between the North Pole and the equator... Nonetheless, it was decided that the meter would remain as realized in the platinum bar. Subsequent definitions of the meter have since been chosen to hew as closely as possible to the length of that first meter bar, despite its shortcomings." **Prediction:** a definition can be deliberately held stable even when it is known to miss the ground, precisely so that series stay comparable. This sharpens F2: continuity of convention and contact with the ground are different desiderata and can come apart. **Corroborates with a nuance**, does not conflict.

### 4.2 Instrumentation: apparent trends produced by channel changes

Wijffels, Willis, Domingues, Barker, White, Gronell, Ridgway and Church (2008), *Journal of Climate* 21: "The XBT fall rate minimum from 1975 to 1985 appears as a 10-yr 'warm period' in the global ocean in thermosteric sea level and heat content estimates using uncorrected data. Upon correction, the thermosteric sea level curve has reduced decadal variability and a larger, steadier long-term trend." **Prediction:** a manufacturing change in a probe produces a decade-long apparent trend that disappears on correction. **Corroborates F3 and F9** at the ground, with an instrument (XBT/CTD intercomparison) that discriminates sources.

Williams, Menne and Thorne (2012), *Journal of Geophysical Research: Atmospheres* 117, D05116: "the two dominant sources of bias in the U.S. temperature records are caused by changes to time of observation (spurious cooling in minimum and maximum) and conversion to electronic resistance thermometers (spurious cooling in maximum and warming in minimum)." Also: "Since these biases are comparable in magnitude to climate change signals, homogeneity 'corrections' are necessary to make the records suitable for climate analysis." **Prediction:** two channel changes in one record, with opposite signs on different slots (maximum versus minimum). **Corroborates F1, F3, F4.** Note the slot structure: the same instrument change has different valence for Tmax and Tmin, exactly Fig 11 :49-51.

World Meteorological Organization (2020), *Guidelines on Homogenization*, WMO-No. 1245: "No climate time series should be used without homogenization testing and adjustment, where appropriate..." and "A change in the instrumentation. For precipitation, changes in the outside geometry and windshield will affect undercatchment and thus produce inhomogeneities." **Prediction:** the field's own standard is to test every series for non-climatic breaks before reading a trend. **Corroborates F1 and F3** as a practice, not as a figure.

Coscarelli, Caroletti, Joelsson, Engström and Caloiero (2021), *Scientific Reports* 11, 18288: "in a data reconstruction study for the Alpine region, Eccel et al. managed to decrease standard deviation of temperature in the range of 50%; this allowed to attribute at least 60% of the apparent climate signal to instrument inhomogeneities." **Prediction:** a large share of an apparent signal can be instrumental, and the share is measured, not assumed. **Corroborates F3 and F11** (the number is measured by an instrument, which is exactly what the figures require; the figures do not supply it).

Hubbard and Lin (2006), *Geophysical Research Letters* 33, L15710 (text retrieved via search index, direct PDF fetch unsupported): "the magnitudes of bias due to the instrument change at individual stations range from less than 1.0 C to over +1.0 C and some stations show no statistical discontinuities associated with instrument changes while others show a discontinuity for either maximum or minimum but not for both. Therefore, the universal constants to adjust for instrument change in the HCN are not appropriate." **Prediction:** a universal correction fails per slot. **Corroborates F1 and F10.** Reduced weight because the full PDF was not fetched directly.

### 4.3 Definitions: category change re-slices the counts

Kumar, Ruhl, Chiddarwar, Garibay-Treviño, Roy Chowdhury, Osei, Alarid-Escudero, Jacobs, Kuntz and Jalal (2025), *Cancer Epidemiology, Biomarkers & Prevention* 34(9):1635 to 1643: "Coding changes in disease definitions have influenced trends in bladder cancer epidemiologic outcomes in registries." And: "There were generally more discontinuities in trends with the original system than with the revised system." Also: "it indicates that abrupt trends are sometimes driven by changes in definitions rather than by risk factors." **Prediction:** a definition change produces breakpoints and even reverses an apparent trend; harmonising the definition removes the artefact. **Corroborates F2, F4, F6.**

*Changing rates of cancer. The hazards of using a single definition* (2001), PubMed record (full text behind a cookie gate, abstract via search index): "Case definition affects incidence rates and changing rates of cancer. Thus the use of a single case definition along with changing coding practices may alone explain changing cancer rates." **Prediction:** the same population yields opposite slopes under upper and lower case definitions. **Corroborates F4 and F11.** Reduced weight because the full text was not opened directly.

Levitus, Antonov, Boyer, Locarnini, Garcia and Mishonov (2009), *Geophysical Research Letters*: "The strong interdecadal variability of global ocean heat content reported previously by us is reduced in magnitude but the linear trend in ocean heat content remain similar to our earlier estimate" after "correcting for instrumental biases of bathythermograph data". **Prediction:** correcting the channel changes the variability but not necessarily the long-term slope. This is an important honesty check on F3: instrument correction does not always erase the trend. **Corroborates F3 with a boundary condition**, and is recorded as a partial conflict with the stronger form "instrument change always creates the trend", which I therefore do not assert.

### 4.4 Framework essays (maximal overlap, no independent witness weight)

*The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information" and "An instrument that can't distinguish these cases demonstrates its own inadequacy". **Prediction:** a reading cannot name its source; the spectrometer, not an argument, resolved the metamerism. **Corroborates F6 and F11.** Overlap: high, framework author.

*The Recursive Self-Improvement Trap*: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." **Prediction:** this audit cannot certify its own result. **Corroborates the simulated-status line at the top of this file.**

*The Library of Babel: Locating the...*: "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." **Prediction:** the deliverable is a narrowed shape, not a filled numerical slot. **Corroborates F11.**

*Decoding Tacit Knowledge*: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." **Prediction:** describe the residual before choosing a correction frame. **Corroborates F6.**

**Overlap statement.** The two metrology sources (BIPM, NIST) are one institutional evidence pool. The climate/homogenisation sources (Wijffels, Williams, WMO, Coscarelli, Hubbard and Lin, Levitus) share the XBT/USHCN literature and are one pool, not six witnesses. The two epidemiology sources (Kumar, the 2001 PubMed abstract) share the cancer-registry literature and are one pool. The essays share the framework author and carry no independent witness weight. The genuinely low-overlap corroboration is the metrology practice of engineering continuity, which comes from a different field from the figures, plus the source-discrimination shape in the instrument literature.

**No world source overrules a figure.** The Levitus result (correction changes variability but not the slope) is a boundary condition on F3, not a reversal; the conflict rule sends us back to the census, where F3 was already stated as "a channel change *can* open a gap", not "always does". No verdict was flipped.

---

## 5. Pre-registered refuter (written before the conclusion)

Required by the seat map, *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A single uniform correction reduces the residual on every interval and every intersection of a multi-break series, with no frame-specific term. (Breaks F1.)
2. A unit redefinition is exhibited that changes the quantity itself rather than its name, code or realisation, in a case where the quantity is held fixed by an independent anchor. (Breaks F2.)
3. An instrument change is exhibited for which the ground moved first and the channel change was a consequence, such that correcting the channel erases a real ground trend. (Breaks F3.)
4. A definition change leaves slot membership identical for every case in the record. (Breaks F4.)
5. A break's cause is recoverable from the values alone, with no metadata, no revision date and no instrument history. (Breaks F6.)
6. A harmonisation is demonstrated to be information-preserving at every point, with a working inverse. (Breaks F7.)
7. A figure line is produced that returns a numerical share for a named cause. (Breaks F11 and closes the `gap`.)
8. A correction is shown to have invariant sign and magnitude across all residuals in the field. (Breaks F10.)

If any fires, the shape is withdrawn and the relevant domain is re-censussed. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. **Split before fitting.** Segment the series at every documented unit, instrument and definition change, and treat intersections as their own cases (F1).
2. **Bind the convention.** Record which standard was in force on each date and treat it as a shared meaning, never as evidence about the world (F2, Fig 10 :47).
3. **Build corrections from the old residual.** Use parallel measurements and the worse instrument's residual, not a description of the quantity (F3, Fig 6 :32-33).
4. **Re-index the slots.** Re-map cases across definition changes and keep every cut ranked and reversible (F4, Fig 9 :40-41).
5. **Carry the lineage.** For each break, source-gate the cause (provenance) and shadow-test it (explains the gap) before admitting it (F6, Fig 6 :12-13).
6. **Measure R_T.** Report what the harmonisation dropped rather than presenting the new series as identical to the old (F7, Fig 4 :30).
7. **Check independence.** Two records from one revision are one witness. Prefer collocated, physically different instruments (F8, Fig 2 :31-32).
8. **Keep the anchor outside.** Never let the corrected community's consensus become the reference (F9, Fig 2 :33-34).
9. **Refuse where needed.** Where the old term is false, refuse it and keep both the old series and the refusal in the record (F12).
10. **Report the gap.** Do not manufacture a percentage. Say what instrument would close it (F11).

---

## 7. Canonical usage check, strains and re-census

**Canonical files read after the first six sections:** `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. The README states: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also gives the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The limit is explicit: the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of what instruments distinguish, recording the lineage so the stop is honest. "Indiscernibility is not identity."

| earlier reading | status after the canonical check |
|---|---|
| "all three causes are measurement error" | **Retracted.** They are a union of conditions with different anchors (F1). Kept visible above. |
| "a convention is a verdict in disguise" | **Narrowed, not erased.** A convention is legitimate shared meaning; it fails only when it decides an outcome (Fig 10 :47). Kept visible in F2. |
| "instrument correction restores the ground" | **Narrowed.** It changes contact; whether the slope changes is measured, not assumed (Levitus boundary condition, §4.3). |
| "the figures can name which cause dominates a trend" | **Refused.** Shape, not a name; the numerical share is a `gap` (F11). |
| "shape, not a name forbids naming a unit or category" | **Narrowed.** The phrase governs a *missing* primitive. Naming a held convention is a binding with provenance, not an invented primitive (see `05` §5b). |
| apparent Fig 10 "declared meaning is not grounded" vs Fig 2 "agreement is efficient for a convention" | **Not strained.** Different objects: Fig 10 governs truth claims, Fig 2 :41 governs shared meaning. Re-census, not a softer reading. |
| apparent Fig 11 :40 "improvement that does not change contact changes nothing" vs the success of homogenisation | **Not strained.** Homogenisation changes the channel to a non-updating reference; it is an improvement that *does* change contact at the record level. Different objects. |
| Fig 5 fifth kind (refusal) vs Fig 1 frame-internal quantities | **Not strained.** Refusal removes standing to compose, not a term from the library; the record only grows. |

**Strains still live.**

- **S1, the operator type of a trend.** A trend uses `→`, `−` and `⋛`; whether a fitted slope is itself a quantity that can be a `⋛` operand at second order needs an instrument, not an argument. Named in F5 and `06`, not hidden.
- **S2, the D3 anchor.** The convention domain borrows its anchor from D1. That is why a convention that decides an outcome is refused. Recorded as a dependency, not treated as an independent anchor.
- **S3, the numerical share.** `gap` remains open; Fig 8 :39 says a search that finds nothing is not a proof of absence, so this is `unreached`, not `unreachable in principle`.

**Updated verdict.** The shape survives: a change of unit, instrument or definition is a convention or a channel change, not a move of the ground; the residual is a union compound indexed per slot; the discriminator is provenance plus an instrument that separates sources; the anchor must not update. What does not survive is the naive single-correction reading and any claim to a universal numerical decomposition. Strains after re-census: three, all named, none hidden. Mode `specified` on domains D1 to D4, `general` on the shape, `gap` on the share.
