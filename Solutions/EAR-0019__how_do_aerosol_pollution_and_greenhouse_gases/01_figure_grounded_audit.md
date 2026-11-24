# Figure-grounded audit: aerosol pollution and greenhouse gases on regional climate

**Mode of this document: `specified`, not `grounded`.** It states the shape an answer must have and
what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State
which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM
output is *"simulacra"*, and *"the truly testable output would need to be derived from the real
architecture or working the formula yourself."* This document is a simulated derivation checked
for internal consistency against the figures. It cannot settle the climate question it reports on.
See `05_what_shape_means.md` §6.

**Source of quotes.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, extracted verbatim from the 13
figures plus the Operators and Symbols tables. Every `Fig N :line` quote below was opened in that
file this session. Nothing is quoted from a summary.

---

## 0. The claim under audit

> Aerosol pollution and greenhouse gases are two anthropogenic forcings that are commonly added
> together in a single W m⁻² budget to explain regional climate change. Because the aerosol term is
> negative and the greenhouse term positive, the net regional effect is often read as their
> arithmetic residual.

What is under audit is **the form of that composition**, not the sign of either forcing. The
question asks how they *interact* to affect *regional* climate. The audit asks: what compositional
shape does the interaction have, and which parts of the answer are owed to the ground rather than
derivable from the figures?

The sought-for shape was bound before the run (README) and is stated again here as an ordinary
term: slot-indexed residual, non-interchangeable operands, union compound, lossy cross-scale
crossing, open mechanism slot anchored by measurement.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry and scale

- **Arity.** At least three indices: forcing agent (aerosol species, greenhouse species), region
  (slot `s`), and time (fast aerosol lifetime versus multi-century greenhouse residence). `R` is a
  three-place-plus relation, not a binary sum. Fig 1 :19: *"The residual is indexed by object slot,
  not aggregated."*
- **Symmetry.** The two operands are **not interchangeable**. Swapping a short-lived, heterogeneous
  scattering aerosol for a long-lived, well-mixed absorbing gas changes the regional outcome and
  the timescale. So the bond is ordered or comparative (→, −, ⋛), not the symmetric conjunction `+`.
  The symmetry test is Fig 12 :59: *"swap the operands. Does the meaning change? No."* Applied here
  the answer is yes, so `+` is the wrong bond.
- **Scale.** Particle microphysics (nanometres, days) → cloud and planetary boundary layer →
  regional monsoon and ITCZ → global energy balance. The crossings are lossy. Fig 4 :27:
  *"The transform between scales loses information, and that is the point."*

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Radiative forcing frame | sulfate, black carbon, organic carbon, CO₂, CH₄, clouds, photons | signed W m⁻², effective radiative forcing | top-of-atmosphere flux measured by satellite and aircraft | admitted |
| D2 Regional response frame | land, ocean, monsoon circulation, ITCZ, snow and ice | temperature, precipitation, circulation anomaly | station data, reanalysis, observed monsoon rainfall | admitted |
| D3 Emissions / policy habitat | emitters, clean-air regulation, geoengineering proposals | emission trajectories, aerosol optical depth difference | emissions inventories, AOD records | admitted |
| D4 Model closure frame | parametrizations, Γ, candidate terms, instruments | `R` per slot, description length `|φ|`, `R_T` | the ground, against which the model is settled | admitted |
| X1 "the aerosol offset" as one global number | none nameable at regional scale | a single scalar | none: an aggregate has no regional anchor | **not a domain yet** until the slot is named |

X1 is included to show what is excluded. A single global offset number has no nameable regional
anchor, so by the anchor test it is not a domain. Fig 2 :29: *"An anchor is whatever settles the
question and does not change its answer because of what any frame thinks."*

### 1.3 Partition or union

This is a **union**, not a partition. D1 and D2 overlap (radiative forcing and dynamical response
are coupled through clouds and stability); D3 acts on both; D4 contains all of them as a model
closure. The overlap has its own loop and its own ground. Fig 9 :55: *"A bundled problem is usually
a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"a case in two
conditions is not a harder case of either"*; it is a specific compound. So the aerosol–greenhouse
interaction is not two independent effects beside each other; it is a compound that must be
unbundled before it is searched (Fig 9 :54).

### 1.4 Dependency order (Fig 3)

Perception (per-slot regional residual) → vocabulary (signed forcing, pattern, lifetime, slot) →
objective (what would count as progress per slot) → planning (which import or instrument) → learn
and carry. The link that usually breaks is the third: "regional climate" has no single agreed
objective until the variable, baseline and scale are named. Fig 3 :25:
*"having terms for what a situation offers and being able to say what would count as progress"* is
the middle link with the fewest instruments. Fig 3 :19: *"Optimising a link that already works
cannot rescue one that does not."*

### 1.5 Figure census (bearing and verdict before findings)

| figure | bearing here | verdict used below |
|---|---|---|
| 1 The Agent | residual per slot; global near-zero with a live slot is legal; frame-internal quantities disqualified | F1, F8 |
| 2 The Ground | anchor, independence, one evidence pool | F1, F8 |
| 3 Dependency Chain | middle link has no instrument; order by dependency | F7 |
| 4 The Membrane | lossy transform, round trip gap `R_T` | F4 |
| 5 Mint Pipeline | three guards as a product; settle then carry up | F5 |
| 6 Closure / Reachability | import is the only wall-mover; source gate and shadow test; proto-instrument must already register | F5, F6 |
| 7 Room Chain | agreement compounds, evidence does not | F8 |
| 8 Union Surplus | union, idempotent closure, provenance, residual first | F3, F6 |
| 9 Leave / Arrive | union vs partition, describe effect not cause, shape not name, filters not witnesses | F3, F7, F8, F9 |
| 10 Ground Maintainer | pooled readings lose contact; ground does not decay; verifier non-access | F1, F8 |
| 11 The Habitat | valence relative to residual; contact cascades; introduction available, exclusion not | F6, F7 |
| 12 The Bond | symmetric vs ordered bond; flat formula; cross-kind composition; isomer / functional group | F2, F3, F9 |
| 13 Minimum Viable Set | two kinds, cross-kind only, gradient over space vs time | F2, F4 |
| Operators table | ⋛ is a threshold comparison between two quantities | F2 (single-source) |
| Symbols table | `R` is the aim and always a slice; the ground is the anchor | F1, F8 |

---

## 2. Findings

Each finding keeps its verdict separate. `triangulated` means two figures with low overlap govern
the same claim; `single-source` means one figure or table; `gap` means no figure line governs after
a genuine re-census.

### F1 - The residual is per region and per season; a global average hides it (triangulated)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 10 :26: *"saturated metrics, pooled readings"* - pooled readings are named as a way the channel
loses contact with the ground.

A global mean temperature that matches observation while a monsoon region drifts is not a
contradiction; it is the legal state Fig 1 :13 names. Aggregating the forcing into one W m⁻² number
throws away the only signal that says where to look. The regional question is therefore about the
slot map, not about the global budget.

- **Mode:** `general` for the per-slot law; `specified` for applying it to regions and seasons.
- **Status:** **triangulated** (Fig 1 per-slot indexing and Fig 10 pooled-readings warning; low
  overlap: one is about the error signal, the other about the maintenance of the channel).
- **Refuter:** a documented case where the global mean forcing fully predicts every regional
  trajectory at every season with no live slot left over. Then per-slot indexing adds nothing.

### F2 - The two forcings are not symmetric ingredients (triangulated; comparison role single-source)

Fig 12 :59 gives the test for the symmetric bond: *"swap the operands. Does the meaning change?
No."* Fig 12 :74 gives the ordered test: *"swap them. Does it become a different thing? Yes."*
Fig 13 :76: *"A gradient over space and one over time are different terms, because which state it is
bonded to is part of what it is."*

Aerosol and greenhouse forcing fail the symmetric test and pass the ordered one. Their identities
include the state they are bonded to (patchy troposphere versus well-mixed global atmosphere) and
the timescale (days to weeks versus centuries). Under a flat `+` both would be interchangeable, and
the bond would carry nothing. Fig 12 :40: *"same two atoms, three substances"*; Fig 12 :94:
*"The arrangement is the substance."*

The competitive, sign-opposed part of the interaction is naturally a comparison, not a sum. The
Operators table defines ⋛ as *"a threshold relation between two quantities"* and Fig 9 uses a
comparison for a goal. But the figures do not license ⋛ here at first order: applied to two
same-kind operands it would need a re-census. I record that role as **single-source** (Operators
table) and do not build the verdict on it. Strain test: the ordered-bond claim fits Fig 12 and Fig
13 without force; the ⋛ claim fits only the Operators table, so it governs a different quantity and
is reported separately.

- **Mode:** `specified`.
- **Status:** ordered-bond claim **triangulated** (Fig 12 + Fig 13); ⋛ role **single-source** and
  not verdict-bearing.
- **Refuter:** a model in which swapping aerosol and greenhouse forcing histories produces the same
  regional climate trajectory at every slot. That would make the operands symmetric and the ordered
  bond wrong.

### F3 - The interaction is a union compound, not an arithmetic sum (triangulated)

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the
half nothing was recording."* Fig 9 :55: *"A bundled problem is usually a union of overlapping
conditions, not a list of separate ones."* Fig 9 :57: *"a case in two conditions is not a harder
case of either"*; Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle
before you search again."*

Adding an aerosol ERF to a greenhouse ERF under `+` is the flat-formula collapse Fig 12 names: the
ingredients are recorded and the coupling is not. The coupling lives in the bond, that is, in
aerosol–cloud interactions, atmospheric stability, the interhemispheric temperature gradient and
the ITCZ response. Fig 12 :125: *"A composition costs in two currencies, and they do not add."* A
regional response is priced in bits of description and in actions needed to settle it; those units
do not add, so a single summed forcing cannot be the whole account.

- **Mode:** `specified` for the climate application; `general` for the flat-formula law.
- **Status:** **triangulated** (Fig 9 union split and Fig 12 bond/price; low overlap).
- **Refuter:** a documented case where the regional response to the combined forcing equals the
  arithmetic sum of the responses to each forcing separately, in every slot, with no interaction
  term. Then the union compound claim fails and a single lever would clear the region.

### F4 - The microphysics to regional crossing is a lossy membrane with a nonzero R_T (triangulated)

Fig 4 :27: *"The transform between scales loses information, and that is the point."*
Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead
reckoning: confident about a position nobody checked."*
Fig 10 :68: *"Different actors, a different currency, a different ground, and a lossy transform
between."*

A cloud-droplet parameter and a monsoon rainfall anomaly are different actors, currencies and
grounds. Carrying one up to the other is a method, not a recording (Fig 4 :22: *"Only methods cross
up. Only head starts come down."*). The round trip from regional observation down to microphysical
parameter and back up again does not close: `R_T = gap(x, (T_E ∘ T_A)(x))` is nonzero. Treating a
parameterisation as if it were the phenomenon is the dead-reckoning error.

- **Mode:** `general` for the structural claim; `specified` for this scale pair.
- **Status:** **triangulated** (Fig 4 membrane and Fig 10 ground-maintainer seam).
- **Refuter:** a parameter-to-region map that round-trips with zero measured gap across more than
  one independent regional dataset. Then the membrane is not lossy for this pair.

### F5 - A missing aerosol–cloud term is a mint or an import with gates, not a free parameter (triangulated)

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*
Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose
closure differs."*
Fig 6 :12: *"source gate: provenance"*; Fig 6 :13: *"shadow test: explains a gap"*; Fig 6 :14:
*"the only operator that moves the wall"*.
Fig 8 :50: *"Convergent derivation and adopted import look identical in the contents. Only the
record of where each came from separates them"*.

If a model's closure lacks the aerosol–cloud mechanism that closes a regional residual, adding a
tuned coefficient is not a mint: it composes inside the closure and adds no atom. What is owed is an
import from a frame whose closure differs, with a provenance record and a shadow test that shows it
explains the gap. Without the record, a fitted parameter and a derived mechanism look identical in
the output.

- **Mode:** `specified`.
- **Status:** **triangulated** (Fig 6 gates and Fig 8 provenance).
- **Refuter:** a regional residual closed by a term derived purely inside the original closure with
  no external source and no new atom, and shown to transfer to an independent region. Then no
  import was owed.

### F6 - Actor valence is relative to the residual; the instrument question stays open (triangulated; mechanism name is gap)

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another"*
Fig 9 :30: *"your words are borrowed too, so describe the effect"*; Fig 9 :31: *"rather than the
cause"*.

Sulfate aerosol is a benefactor to a warming residual (it cools) and a malfactor to an air-quality
or monsoon residual (it harms health and shifts rainfall). Black carbon warms the atmosphere while
reducing rainfall through stabilisation. There is no standing list of good or bad actors; the sign
is a relation to a named residual. This is why the question cannot be answered by listing species
and adding their forcings.

Which mechanism dominates in a given region is a **`gap` from the figures**. Fig 9 :32: *"you get
a kind of thing, never the answer itself."* Fig 8 :39: *"So a search that finds nothing is never a
proof of absence."* Fig 6 :34: *"the search for a proto-instrument is a search for one that is
already there."* The figures return a shape (a signed, slot-indexed, role-differentiated coupling)
and stop. They do not name the dominant species, and a search inside the figures cannot manufacture
that atom.

- **Mode:** `general` for the valence law; `gap` for the mechanism name.
- **Status:** **triangulated** for valence (Fig 11 + Fig 9); **`gap`** for the dominant mechanism.
- **Refuter for the gap:** a figure line that directly selects which species or process dominates a
  named regional residual, found after a genuine re-census. Until then, naming one is a binding
  from the climate frame, recorded as such (see `05_what_shape_means.md` §3).

### F7 - The seat can introduce, not subtract; the objective link has no instrument (triangulated)

Fig 11 :61: *"The seat's power is asymmetric. Introduction is available; exclusion is not."*
Fig 11 :63: *"Which is why a managed ecosystem is permanent work rather than a solved state."*
Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked
at."*

Emission policy and stratospheric aerosol injection are introductions into a habitat the seat did
not author. Existing committed warming and the atmospheric circulation that has already shifted
cannot be subtracted by the seat; contact is a fact about the world and does not consult it. This
is a structural reason the interaction is permanent management, not a solved balance. And the
objective link, what counts as progress in a given region, is exactly the link Fig 3 says has
neither obvious failure nor obvious instrument.

- **Mode:** `specified`.
- **Status:** **triangulated** (Fig 11 asymmetry and Fig 3 instrument gap).
- **Refuter:** a demonstrated intervention that removes a forcing from the regional habitat as
  cleanly as it adds one, with no committed residue. Then the asymmetry claim fails for this domain.

### F8 - The anchor is measurement, not agreement among correlated models (triangulated)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of
what any frame thinks."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing
frames share an evidence pool"*
Fig 7 :13: *"agreement compounds, evidence does not"*

A multi-model ensemble whose members share the same aerosol–cloud parametrisation family is one
evidence pool. Its agreement is efficient for a convention and disqualifying for a verdict. The
anchor is the top-of-atmosphere flux, the station record, the AOD series, the observed monsoon
rainfall, none of which updates because a model agrees. Independence must be bought in proportion
to the cost of being wrong (Fig 2 :42: *"Buy independence in proportion to the cost of being
wrong."*).

- **Mode:** `general` for the anchor law; `specified` for the ensemble case.
- **Status:** **triangulated** (Fig 2 anchor/independence and Fig 7 room chain).
- **Refuter:** two climate frames with genuinely separate instruments and parcelled evidence that
  converge on the same regional slot residual without sharing a parametrisation pool. Then their
  agreement would carry weight and the one-pool reading would need re-census.

### F9 - What survives, and what is refused

| claim | mode | figure | verdict |
|---|---|---|---|
| `R` is indexed by region and season, never a global mean | `general` + `specified` | Fig 1 :19, :22; Fig 10 :26 | triangulated |
| Aerosol and greenhouse forcing are not symmetric operands | `specified` | Fig 12 :59, :74; Fig 13 :76 | triangulated |
| Their combination is a union compound, not a sum | `specified` | Fig 9 :55; Fig 12 :5 | triangulated |
| The cross-scale crossing is lossy, with measurable `R_T` | `general` + `specified` | Fig 4 :27, :30; Fig 10 :68 | triangulated |
| A missing mechanism is an import with gates | `specified` | Fig 6 :12-14, :21, :23; Fig 8 :50 | triangulated |
| Actor sign is relative to the residual | `general` + `specified` | Fig 11 :49, :50; Fig 9 :30 | triangulated |
| The anchor is measurement, not pooled model agreement | `general` + `specified` | Fig 2 :29, :35, :40; Fig 7 :13 | triangulated |
| ⋛ governs the sign-opposed competition at first order | `specified` | Operators table only | single-source, not verdict-bearing |
| Which species or process dominates a regional residual | `gap` | Fig 9 :32; Fig 8 :39; Fig 6 :34 | no figure line governs |
| A numerical regional forcing or precipitation response | `gap` | none | ground reading required |

---

## 3. Pre-registered refuter

Written before any outreach, per the seat-map rule that a falsifier written before the run is a
design instrument. The shape claim is refuted if any of the following holds:

1. A documented case where global-mean forcing predicts every regional and seasonal trajectory
   with no live slot residual left (breaks F1).
2. A documented case where swapping aerosol and greenhouse forcing histories yields the same
   regional trajectories at every slot (breaks F2, makes the operands symmetric).
3. A documented case where the combined regional response equals the sum of the separate responses
   in every slot, with no interaction term (breaks F3, makes the union a list).
4. A parameter-to-region map that round-trips with zero measured `R_T` on independent datasets
   (breaks F4).
5. A regional residual closed entirely inside a model's original closure with no new atom and
   shown to transfer (breaks F5).
6. A forcing agent with invariant sign across two different named residuals (breaks F6).
7. Two independent-instrument frames converging on the slot residual with no shared
   parametrisation pool (re-census owed for F8).

If any fires, the affected finding is withdrawn and the shape is re-derived. Until a ground test is
run, nothing here is labelled `grounded`. Written in advance, 2026-11-22.

---

## 4. Recommendation

1. Lead with the slot-indexed residual, not with the global forcing budget (F1).
2. Describe the coupling in effect terms before choosing a bond; do not add two forcings under `+`
   (F2, F3).
3. Measure the round-trip gap `R_T` whenever a microphysical parameter is carried to a regional
   response (F4).
4. Demand a provenance record and a shadow test for any new mechanism term (F5).
5. Name the residual before naming a species; the sign of an actor is a relation, not a property
   (F6).
6. Buy independence with separate instruments; do not count ensemble agreement as corroboration
   (F8).
7. Keep the dominant-mechanism slot open and say plainly that the figures return a shape, not a
   name or a magnitude (F9).

---

## 5. Canonical usage check

Read after sections 0 to 4: `FRAMEWORK/reference/FIGURES_README_canonical.md` and
`FRAMEWORK/figures/THE_FORMULA.md`. Two rules govern how the figures may be used here.

- The figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this
  summary."* A reading that makes one figure contradict another has misidentified its domain, not
  found a flaw. The apparent conflict between Fig 12's ordered-bond rule and the common practice of
  adding forcings is resolved by re-census: Fig 12 governs typed composition; the forcing budget is
  a frame-internal accounting convention, which Fig 1 :27 disqualifies as a ground metric.
- The framework gives *"a shape, not a name"* and stops at the limit of what the instruments can
  distinguish. So the dominant-mechanism slot is recorded as a `gap`, not filled by the most
  familiar aerosol species.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Aerosol and greenhouse forcings should be joined by ⋛" | **Retracted as a first-order claim.** ⋛ is defined only by the Operators table as a comparison of two quantities; Fig 13 :75 bars same-kind direct joins. Kept as a single-source observation about the sign-opposed competition, not verdict-bearing. |
| "The two forcings can be added under `+`" | **Refused.** Fig 12 :5 and :59: the flat formula loses the bond and `+` fails the swap test. |
| "The global forcing budget answers the regional question" | **Refused at the ground level.** Fig 1 :19, :22 and Fig 2 :29: a global scalar has no regional anchor. This is an aggregation error, not a figure conflict. |
| "The figures identify which aerosol species dominates" | **Confirmed as forbidden.** Fig 9 :32 and the canonical README: a shape, not a name. Recorded `gap`. |
| "Model agreement corroborates the regional response" | **Retracted.** Fig 2 :40 and Fig 7 :13: shared parametrizations are one evidence pool. Agreement is a convention, not a witness. |
| Apparent strain Fig 12 vs the forcing-budget practice | **Not strained.** Re-census: Fig 12 governs typed composition; the budget is a frame-internal accounting quantity (Fig 1 :27). Different objects. |
| "The interaction is one hard problem" | **Refused.** Fig 9 :55, :57: it is a union compound with its own loop, not one harder case. |
| "Emission policy can subtract the committed warming" | **Refused.** Fig 11 :61: introduction is available, exclusion is not. |

No earlier reading was silently erased. Each refused or retracted reading is preserved above with
the reason.

---

## 6. Final note on mode

Every substantive claim in this audit carries `general`, `specified`, or `gap`. The whole document
is `specified` or `general`, never `grounded`, because no measurement was taken and no figure line
returns a regional magnitude. It is a simulated derivation checked for internal consistency against
the figures, not a ground reading, and it cannot settle the question it reports on.
