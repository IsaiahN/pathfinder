# Figure-grounded audit: could late-universe new physics explain the Hubble difference?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured
and what an admissible import would have to look like. Per `THE_FORMULA.md`: "Mode. general ·
specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement
Trap* (opened 2026-11-23): "the truly testable output would need to be derived from the real
architecture or working the formula yourself." This document is a simulated derivation checked
for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** The local figure text `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the local
`FIGURES_README_canonical.md`, and `FRAMEWORK/figures/THE_FORMULA.md`. All figure quotes below are
verbatim substrings of the local figure text extract. World sources are listed in
`10_source_ledger.csv` and were opened 2026-11-23.

---

## 0. The residual in effect terms

"the same difference" is the Hubble tension. It is not one number but a disagreement between
procedures:

| slot | what it actually returns | representative value | is it an anchor for H0? |
|---|---|---|---|
| early inference | CMB acoustic scale θ* combined with ΛCDM; H0 is derived and depends on the sound horizon r_d | 67.4 ± 0.5 km/s/Mpc (Planck 2018 VI) | no: it moves when the model changes; θ* is the anchor, not H0 |
| late local ladder | Cepheids to SNe Ia calibrated by geometric distances (SH0ES, also TRGB, masers, Miras) | about 73 km/s/Mpc | closer to a direct reading, but has a calibration chain |
| late inverse ladder / sound-horizon-free | BAO + BBN + θ*, and CMB without the sound horizon | 68.52 ± 0.62 (DESI 2024 VI), 69.37 ± 0.34 (Pantos & Perivolaropoulos 2026 aggregate) | a genuinely different instrument set, independent of Cepheids |

The effect we must explain is a live residual on more than one slot, not a single global H0
discrepancy. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22:
"Aggregating across slots is how a live signal disappears into an average." Collapsing the three
rows above into one "H0 tension" number throws away the only information that says where to look.

The question asks specifically about *late-universe* new physics (Q24), in contrast to Q23
(*early*-universe new physics). In figure terms, a new low-redshift degree of freedom is a
proposed **import**, an addition to the cosmological model's closure. The task is to derive what
the figures say about such an import before consulting any particular physics paper.

---

## 1. Domain census

### R by arity, symmetry, scale

- **Arity:** at least three conditions (early-inference, local ladder, inverse ladder / sound
  horizon free), with overlaps in data. This is a **union**, not a single hard question.
- **Symmetry:** the slots are not exchangeable. The early slot returns a *derived* quantity; the
  late local slot returns a *calibrated measurement*. Their residuals are different kinds of
  quantities, so they cannot be averaged or treated as mirror images.
- **Scale:** H0 is a late-time number, yet under ΛCDM it is fixed by pre-recombination physics at
  the early scale. The disagreement crosses the membrane between scales (Fig 4 :20: "Only the
  actors, the currency and the anchor change.").

### One line per domain: actors / currency / anchor

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 early inference | photons, baryons, r_d, θ*; Boltzmann codes | comoving distance to last scattering / sound horizon as a standard ruler | yes: the CMB acoustic peaks (θ* to 0.03%), but this anchors θ*, not H0 | derived inference under a model |
| D2 late local ladder | Cepheids, SNe Ia, TRGB, masers, Miras | calibrated distances and redshifts | yes: geometric parallax / maser distances at the first rung | measurement with a calibration chain |
| D3 late inverse ladder | BAO tracers, BBN baryon density, uncalibrated SNe | H0 r_d and the dimensionless shape E(z) | yes: BAO + BBN + θ*, independent of Cepheids | low-redshift measurement robust to early modifications |
| D4 proposed late new physics | w(z), modified gravity fields, dark-sector exchange, backreaction | changes to H(z) at low z | must be supplied: low-z data (SNe, BAO, growth fσ8) | import (adds an atom) |
| D5 verification | future instruments: standard sirens, lensing time delays, DESI/Euclid/Roman | independent ground readings | yes: an instrument that does not update on any model's prediction | ground frame |

Every domain has a nameable anchor except D4 until it is constrained by D3 or D5. By the census
rule, an unanchored proposal is not yet a domain; it is a candidate import awaiting a source gate.

### Partition or union

A **union of overlapping conditions**, not a partition. The same H0 appears in all rows, so the
split is a compound. Fig 9 :54: "And when the split lands on a union rather than a partition,
unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of
overlapping conditions, not a list of separate ones." Pantos & Perivolaropoulos 2026 corroborate
in world language: they conclude the tension is better characterised as the distance ladder
versus all other methodologies than as an early-versus-late split. That is a low-overlap
corroboration of the union reading, not a figure line.

### Order by dependency (Fig 3)

Fig 3 :20: "The chain is ordered by dependency, not by importance." The order is:
(1) localize which slot carries live residual R⁺_s > 0 (Fig 1 :17-20), (2) describe R in effect
terms (Fig 9 :27-28), (3) only then choose a frame, (4) test whether an import is owed and passes
the source gate and shadow test, (5) settle against a ground that does not update. Optimising a
late-time model at step (4) cannot rescue an unlocalized residual at step (1), Fig 3 :19:
"Optimising a link that already works cannot rescue one that does not."

### Strain test applied before choosing a figure line

If I pick "late-universe new physics" first and then look for a figure to fit, any model will seem
to fit. Fig 9 :27: "describe it before you go looking, or any frame you pick will seem to fit."
So the residual was described per slot before selecting figure lines, and a line that only fits
with a strain was sent back to re-census rather than smoothed over.

---

## 1b. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric | the global H0 number hides which slot is live; no ground read here |
| 2 The Ground | anchor must not update; independence between frames; correlation disqualifies | θ* is an anchor, H0 derived under ΛCDM is not;CEPheid and inverse-ladder frames are low overlap |
| 3 Dependency Chain | order by dependency; a link with no instrument is not a link that works | localize residual before fitting a model |
| 4 Membrane | actors/currency/anchor change with size; measure the round trip | early and late slots are two sizes of one inference; R_T owed |
| 5 Mint Pipeline | three guards as a product; MDL bargain | a late import must cost less than the confusion it removes |
| 6 Closure / Reachability | import is the only operator that moves the wall; no mint adds an atom | late new physics is an import, not a mint; source gate + shadow test required |
| 7 Room Chain | agreement compounds, evidence does not | more models agreeing is not corroboration |
| 8 Union Surplus | no search adds an atom; absence is not proved by a failed search | late import reachable in principle; failed searches are budget facts |
| 9 Leave / Arrive | union vs partition; describe residual first; shape not name | the compound must be unbundled; figures return a shape |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | keep the ground reachable; bring the residual, not the theory |
| 11 Habitat | valence relative to residual; contact, not isolated improvement | a model's value flips with which slot is live |
| 12 Bond | a composition costs in two currencies; level-relative irreducibility | description cost and action cost do not add |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | new physics is a new atom; the figures narrow its shape |
| Operators table | a relation failing all tests is a claim not yet made | no operator in the set is a "late-universe fix" bond |
| Symbols table | R is the aim and always a slice; ground is the anchor | what cannot be perceived yet is residual |

---

## 2. Findings

### F1 - The single "H0 tension" is an illegitimate average (decisive for method)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

The early-inference slot, the local-ladder slot and the inverse-ladder slot carry different
residuals and different kinds of quantity. Averaging them into one discrepancy decides where to
look by hiding it. The world literature corroborates: Pantos & Perivolaropoulos 2026 find a
6.5σ tension between the distance ladder and all sound-horizon-free methods, larger than the
Planck-SH0ES discrepancy, and conclude the split is "Distance Ladder versus all other
methodologies." If that is right, a late-*physics* import aimed at the early slot is aiming at the
wrong slot; the live residual may be in the ladder itself.

**Refuter:** if a single global H0 discrepancy with no per-slot structure were the only object in
play, this finding fails. It is refuted empirically by the three-row table in section 0.

### F2 - This is a union compound, not one hard question

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you
search again."
Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two
conditions is not a harder case of either."
Fig 13 :136: "It can say the question is not one question and must be split before it is searched
again."

A lever that clears the local-ladder condition (better calibration) leaves the inverse-ladder
condition standing; a lever that changes the sound horizon (early physics) leaves the local
ladder standing. Late-universe new physics governs one condition of the union. Asking whether it
explains "the same difference" before unbundling is the bundled-question error.

**Strain test:** "early versus late" is a tempting partition. It fails because the inverse-ladder
slot is neither (it is a low-redshift measurement that is independent of the sound horizon).
Re-census keeps three slots. No strain remains.

**Refuter:** if early, local-ladder and inverse-ladder readings were shown to be one evidence pool
with perfectly correlated systematics, the union collapses to one frame and this finding is
withdrawn.

### F3 - Late new physics is an import, not a mint

Fig 6 :21: "MINT composes inside the closure and can never add an atom."
Fig 6 :22: "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the
added atom is what expands the closure."
Fig 6 :14: "the only operator that moves the wall"
Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

A genuinely new low-redshift degree of freedom is not derivable by rearranging ΛCDM's parameters
inside its closure; it adds an atom. So the question "could it explain" is a **reachability**
question. The figures answer it conditionally: an import can move the wall (Fig 6 :14), but only
on contact with a frame whose closure differs, Fig 6 :23: "No frame escapes its own closure. The
bound moves only on contact with a frame whose closure differs." Import carries a source gate
(provenance) and a shadow test (it must explain a named gap). Without those, "new physics" is a
label, not a licensed term.

**Refuter:** if a late-time effect were shown to be already in ΛCDM's closure (a parameter
re-fit, not a new degree of freedom), it would be a mint, and importing an atom would be
unnecessary and wrong (Fig 8 warns that a wrong atom costs more than starting from primitives).

### F4 - The figures return the shape an admissible import must have

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :134: "Unreachable is a verdict here, not a silence"

No figure names w0waCDM, f(R) gravity, decaying dark matter or backreaction. The shape is the
constraint set any such import must satisfy:

1. It must change H(z) at low z enough to move the H0 inferred from the late slot.
2. It must **not** change r_d or θ*, because that is the early slot (Q23), pinned to 0.03% by the
   CMB acoustic scale. An import that moves the early slot has answered a different question.
3. It must remain ranged against anchors it does not itself move: BAO fixes the product H0 r_d,
   uncalibrated SNe fix the shape E(z), and growth (fσ8 / S8) constrains the same modification.

This shape has a striking world-language twin. Sabogal et al. 2026 ("Shape wall", opened
2026-11-23) show that with r_d and θ_s fixed, δH0/H0 ≈ δI/I, and relative-distance constraints
cap the increase at ≲ 2% against the ≳ 8% needed. Fig 4 :30: "So take the round trip and measure
the gap. Without it you are navigating by dead reckoning: confident about a position nobody
checked." The figure shape and the measured wall agree: the import must produce a large
fractional change while the anchor refuses to move. This is the barrier-theorem use of the
figures, narrowing the shape without needing the answer in advance.

Corroboration status: **triangulated** (Fig 9 :32 and Fig 13 :134 are two figure lines with low
overlap in wording; the world "shape wall" is a secondary, independent-field corroborator sharing
no author with the figures).

**Refuter:** a late-time-only modification that delivers δH0 ≥ 8% at fixed θ_s and r_d while
keeping BAO, SNe and growth fits inside current constraints would break this shape and refute F4.

### F5 - The MDL bargain: an import must cost less than the confusion it removes

Fig 5 :26: "does the new term cost less to state than the confusion it removes?"
Fig 5 :43: "A new term is worth having when stating it, plus what remains unexplained after it,
costs less than what was unexplained before."

A late-time model that adds parameters (w0, wa, extra couplings) must pay for them in residual
reduction. World sources, secondary only: the H0 World Cup (Schöneberg et al. 2026) finds that
late-time scenarios "do not improve over ΛCDM," while early dark energy and early modified
gravity perform best; Tiwari et al. 2026 find that even distance-duality violation cannot rescue
late-time-only solutions. These are evidence about the current budget, not theorem-level figure
lines. The figure verdict is the bargain and the shape, not the specific failure.

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you
a verdict." The σ-level of a fit is a filter for the budget. It is not the witness for the verdict;
the ground is.

**Refuter:** a late-time import with no more free parameters than ΛCDM that fits joint data better
would pay the bargain and clear this finding.

### F6 - Anchor discipline: what is allowed to settle the question

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of
what any frame thinks."
Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence
pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

The CMB acoustic scale is a legitimate anchor for θ* because it does not change when a late-time
model is proposed. H0 inferred under ΛCDM is not a legitimate anchor for H0 because it does change
when the model changes. The local ladder and the inverse ladder draw on substantially different
evidence, so their disagreement carries information; their agreement, if it came, would be worth
something. A late-time model fit to the same low-z data it is invoked to explain is correlated
with that data and its "success" is one pool talking. Fig 7 :13: "agreement compounds, evidence
does not."

World corroboration: DESI 2024 VI (Adame et al., JCAP 02 2025, opened via the JCAP page) is a blind
analysis giving H0 = 68.52 ± 0.62 from DESI BAO + BBN + the acoustic scale, explicitly
independent of the local ladder. That is a second, low-overlap range against the ground.

**Refuter:** if the late local ladder and the inverse ladder were shown to share a dominant
systematic, their independence collapses, their agreement would be worthless, and this finding's
use of them as two frames fails.

### F7 - Reachability verdict: not forbidden, not derivable by mint, currently failing the bargain

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search,
however long, adds an atom."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 13 :134: "Unreachable is a verdict here, not a silence"

Three distinct statements must not be merged:

- **Underivable in principle?** No. An import can move the wall (F3). Late-universe new physics is
  not excluded by the figures.
- **Reachable from ΛCDM by minting?** No. No amount of re-arranging the closed parameter set adds
  the new atom (Fig 8 :32).
- **Actually explanatory at this budget?** The world sources read say no so far: ≲ 2% versus ≳ 8%
  (shape wall), no improvement over ΛCDM (World Cup), distance-duality no-go (Tiwari et al.). This
  is "unreachable at this budget," not "underivable in principle," and the figures require the
  two to be kept apart (Fig 8 scope lines 40-43). Importing against a budget limit adds an atom
  that was not needed.

So the honest answer to "could it" is: **yes in principle as a provenanced import with the shape
of F4; no as a pigeonhole derivation; and not demonstrated at the current budget.**

**Refuter:** a measured late-time deviation of E(z) of the required size, reported by an
instrument independent of both ladders, would move this from "unreachable at budget" to
"reachable and found."

### F8 - What survives, with mode attached

| claim | mode | figure / basis |
|---|---|---|
| the H0 difference must be indexed per slot, never averaged | `general` | Fig 1 :19, :22 |
| the tension is a union of overlapping conditions, not one question | `specified`, falsifiable | Fig 9 :54-57; Pantos 2026 corroborates |
| late-universe new physics is an import, not a mint | `general` | Fig 6 :21-22; Fig 13 :115 |
| an admissible import must change low-z H(z), preserve r_d and θ*, and stay anchored to BAO/SNe/growth | `specified` shape | Fig 9 :32; Fig 13 :134; Sabogal 2026 corroborates |
| no figure line names which new physics, nor which slot is live | `gap` | Fig 9 :32; Fig 13 :134, :136 |
| late-time models currently fail the MDL bargain | `specified`, world-sourced, secondary | Fig 5 :26; Schöneberg 2026; Tiwari 2026 |
| the local ladder, inverse ladder and early inference are three ranges, not two | `specified` | Fig 2 :31; Pantos 2026; DESI 2024 VI |

Per-domain verdicts are kept separate and never averaged. The early-inference slot's residual is a
model-dependence problem; the local-ladder slot's residual is a calibration problem; the
inverse-ladder slot currently agrees with the early slot; the proposed new-physics slot is an
unanchored import until F4's shape is met.

---

## 2b. Canonical usage check and additions

### A note on "new physics" as a term

Fig 6 :22 says novelty is relative to atoms, not to the world. Calling an import "new physics"
does not make it novel relative to the model's atoms unless it actually adds an atom. A changing
dark-energy equation of state w(z) where w was fixed is an added atom; a re-fit of the same atoms
is not. This distinction is why the audit refuses to treat every "late-universe solution" paper as
the same kind of object.

### The analogue to a barrier theorem

The framework is a barrier theorem (see the local figures README). Applied here it says: from a
closed set of cosmological atoms, no arrangement of those atoms can generate the missing
residual-closing atom; only import moves the wall, and the wall's shape is fixed by the anchors
that refuse to move. That is exactly what the "shape wall" and "normalization wall" literature
report in physical language (Sabogal et al. 2026). The agreement is structural, not a claim that
the figures derived the physics.

### Correction to my own first reading (kept visible)

I first drafted F7 as "late-universe new physics is excluded." That was wrong and is retracted.
The figures exclude *minting* a new atom from inside the closure; they do not exclude an import.
The correct form is F7's three-way split. The earlier sentence is retained here so the correction
is visible rather than silently erased.

### Second correction (kept visible)

I first treated the tension as a clean early-versus-late partition (two frames, two options).
The inverse-ladder and sound-horizon-free measurements (DESI 2024 VI; Pantos & Perivolaropoulos
2026) forced a re-census to a three-slot union. The earlier binary is retained as evidence of the
re-census.

---

## 3. Pre-registered refuter

Required before any outreach, on the rule that a falsifier written before the run is a design
instrument. Written here before the conclusion in section 2 (the findings were derived, then this
was written before synthesis into `07` and `09`). The shape claim is refuted if any fires:

1. A late-time-only modification produces δH0 ≥ 8% at fixed θ_s and r_d while keeping BAO, SNe and
   growth fits within current constraints, breaking F4's shape wall.
2. A single global H0 discrepancy with no per-slot structure is established, breaking F1 and F2.
3. The local ladder and the inverse ladder are shown to share a dominant systematic, so they are
   one evidence pool, breaking F6's independence claim.
4. An import with no more free parameters than ΛCDM fits joint data better, breaking F5's MDL
   finding.
5. An instrument independent of both ladders reports a late-time E(z) deviation of the required
   size, which would move the verdict to "reachable and found" and require rewriting F7.

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this may be
labelled `grounded`.

---

## 4. Recommendation

1. Lead with the union and the per-slot residual (F1, F2), not with a model.
2. State that late new physics is an import, not a derivation (F3), and that the figures return a
   shape, not a name (F4).
3. Ask what ground would have to move for a late import to be admitted (F6), before showing any
   theory.
4. Put the world no-go results (shape wall, World Cup, distance duality) in the WORLD section as
   secondary corroboration, never as the verdict (F5, F7).
5. Keep the `gap` explicit: no figure line names the physics, and which slot is live is not
   settled. "A search that finds nothing is never a proof of absence" (Fig 8 :39).
6. Fig 10 :52: "Bring a characterised residual, never the source." Send the shape and the
   refuter, not the full framework.

---

## 5. Canonical usage check

Two local sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the
  repo: the code, the rulings and the docs answer to them"; "a reading that makes one contradict
  another has misidentified its domain, not found a flaw"; and the framework returns "what a
  missing thing would have to look like (a shape, not a name)" then stops at the limit of the
  instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md` step 7 keeps SEARCHED, INWARD and OUTWARD distinct. For this
  question: SEARCHED (is the import already in the closure?) answered no by Fig 8 :32; INWARD
  (sharpen the low-z instrument) is the inverse-ladder and null-test work; OUTWARD (import a frame
  whose closure predicts the shape) is late new physics itself. Inward and outward are opposed
  and must not be read against each other.

### Retraction / confirmation log

| earlier reading | status after canonical check |
|---|---|
| "late new physics is excluded" | **Retracted and replaced** by F7's three-way reachability split. Mint excluded, import allowed, budget-limited. |
| "tension is early versus late" | **Retracted and replaced** by a three-slot union after the sound-horizon-free sources. |
| "CMB gives an H0 anchor" | **Refined.** θ* is the anchor; H0 under ΛCDM is a derived quantity and moves with the model. |
| "shape, not a name forbids naming new physics" | **Refined** per `05_what_shape_means.md`: the rule governs a missing primitive. Here the physics is missing from ΛCDM's atoms, so the rule applies, but the figures still return the shape, not the name. |
| Fig 6 :32 "an instrument is not built from a description" | **Confirmed** against the null-test proposal (Kouniatalis & Saridakis 2026): the proposed standard-siren plus lensing ratio is an instrument already returning something, not a sensor specified from nothing. |
| Fig 13 :134 "Unreachable is a verdict here, not a silence" | **Confirmed** as the correct form of F7's budget statement. |

### Strains

- **S1, live and named:** the "shape wall" language in Sabogal et al. and the figures' "wall"
  (Fig 6) are different objects. The figure wall is closure; the physical wall is a likelihood-
  constraint surface. They rhyme structurally; they are not the same theorem. Recorded as an
  analogue, not an identity.
- **S2, dissolved by re-census:** early-versus-late partition versus three-slot union. Different
  object counts; the inverse-ladder slot is neither early nor local-ladder. Re-census keeps the
  union.
- **S3, named:** "unreachable at this budget" (world no-go results) versus "underivable in
  principle" (figure closure). Fig 8 requires them distinct; importing against a budget limit adds
  an unneeded atom.
- After re-census: three strains named, none hidden, no unpublished correction.

## 6. Honest stop

The figures fix the shape of an answer and the refuter. They do not say which late-universe
physics, if any, occupies the slot, and they do not settle which slot is live. The world sources
currently favour the view that late-time-only modifications fall short of the shape wall, but that
is secondary evidence at a budget, not a figure verdict. The stop is recorded with its lineage so
a later reader can locate the error rather than only feel it.
