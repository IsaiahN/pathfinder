# Figure-grounded audit: physical resources for information operations

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured.
Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground
settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement
Trap* (essay read 2026-11-23) says LLM output cannot settle what it reports on: the testable output
would have to be derived from the real architecture or worked by hand. This document is a simulated
derivation checked for internal consistency against the figures. It cannot settle the question it
reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure lines from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited `Fig N :line`).
`FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources
opened 2026-11-23 and listed in `10_source_ledger.csv`. The eight essays are handled in `05`.

---

## 0. The residual in effect terms

The question asks for the physical resources required by four operations. Stated as an effect:

> For each verb, what must be present in the world for the operation to happen, what is consumed or
> conserved, and what is dumped? Which operations have an unconditional thermodynamic price and
> which can in principle be done for free?

**Option A:** all four operations carry the same unconditional energy-per-bit price.
**Option B:** only erase (the many-to-one logical operation) carries an unconditional floor; create,
store and transmit can be reversible, and their costs come from noise, finite time and maintenance,
not from logic.

What each leads to: A cannot write a reversible memory cycle and is in tension with the reversible
computation literature. B gives a per-operation ledger with separate slots and a refuter. The
residual is a **union compound**, not one hard question. Fig 9 :54: *"And when the split lands on a
union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is
usually a union of overlapping conditions, not a list of separate ones."* A single lever *"information
costs energy"* clears the region where only one condition holds and leaves the erase/reset intersection
standing. Unbundle before searching.

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* The four verbs are four slots.
Averaging them into one "cost of information" throws away the signal that says where the price is.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.**
Arity: four operations, but asymmetric. Erase is many-to-one and logically irreversible; the other
three can be one-to-one and reversible. Symmetry: erase is the only one that changes the state-space
volume and therefore the only one with a mandatory entropy compensation. Scale: one bit in a bath
(first order) and a full memory cycle with measurement plus reset (second order, the Szilard/Maxwell
demon loop).

One line per domain, with actors / currency / anchor. No nameable anchor means it is not yet a domain.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 Thermodynamics and apparatus | memory register, heat bath at T, control field, channel | work, heat, entropy, free energy | calorimetry / single-particle experiment (Bérut et al. 2012) | union: four operations with different symmetry |
| D2 Shannon information theory | source, code, channel, receiver | bits, H, mutual information | coding theorems | partition boundary: theory is substrate-free |
| D3 Tether six-term substrate | space, time, energy; spectrum, gradient, network; seven bonds and negation | composition in closure(Γ), settlement | the figures as metalaws; ground for any measurement | partition: which compositions are legal |
| D4 Verification and outreach | expert readers, public submission portals | agreement and residual | the ground, never agreement | union: stage 1 verdict before stage 2 theory |

**Order by dependency** (Fig 3 :20, *"The chain is ordered by dependency, not by importance"*):
1. establish that a bit is a physical state in a bounded region (Fig 13 :62);
2. refuse the "all four cost equally" claim before minting a ledger (Formula step 2);
3. describe the residual per operation before choosing a frame (Fig 9 :27-28);
4. settle each first-order operation before composing the memory cycle (Fig 12 :104).

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Effort spent
pricing transmission cannot rescue a missing account of erasure.

**Strain test applied before quoting.** The words "energy", "gradient" and "flow" in the physics
literature are not the figure terms Energy, Gradient and flow. I census D3 by the figure's own
definitions and only then bind to D1. A binding is not an import that moves the wall (Fig 6 :26:
*"The world does not gain primitives; a frame gains access."*).

---

## 2. Figure census (verbatim, before concluding)

| figure | verbatim line | bearing on this question | verdict |
|---|---|---|---|
| Fig 1 :19 | *"The residual is indexed by object slot, not aggregated."* | four operations are four slots | governs method |
| Fig 2 :29 | *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | calorimetry is the anchor for the erasure cost | governs D1 |
| Fig 2 :35 | *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | agreement cannot settle the resource ledger | governs D4 |
| Fig 3 :19 | *"Optimising a link that already works cannot rescue one that does not."* | dependency order for the four verbs | governs method |
| Fig 4 :22 | *"Only methods cross up. Only head starts come down."* | send the derivation, not the conclusion | governs D4 |
| Fig 5 :43 | *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."* | a single "cost of information" term fails the bargain | governs D2 |
| Fig 6 :26 | *"The world does not gain primitives; a frame gains access."* | binding Shannon H to Spectrum adds no atom | governs D2/D3 |
| Fig 7 :35 | *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* | expert agreement is not corroboration | governs D4 |
| Fig 8 :39 | *"So a search that finds nothing is never a proof of absence."* | honest stop for the Shannon energy floor | governs method |
| Fig 9 :32 | *"you get a kind of thing, never the answer itself"* | the figures give a shape, not kT ln2 | governs all |
| Fig 9 :54-55 | *"unbundle before you search again"* / *"a union of overlapping conditions"* | four verbs are a union | governs method |
| Fig 9 :60 | *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* | tier/filter cannot decide the cost | governs method |
| Fig 10 :42 | *"A verifier that can reconstruct the claim cannot verify it."* | withhold the framework until the stage 1 verdict | governs D4 |
| Fig 12 :104 | *"A settled molecule becomes an atom for whatever composes over it."* | a settled bit becomes an operand for the cycle | governs D3 |
| Fig 12 :119 | *"catalyst. A part that survives its own use."* | bath survives the cycle; memory does not | governs D3 (analogy with a limit) |
| Fig 12 :121 | *"cycle. The output re-enters as input."* | measurement plus erase is a loop | governs D3 |
| Fig 12 :125 | *"A composition costs in two currencies, and they do not add."* | bits and actions are two currencies | governs D2/D3 |
| Fig 12 :126 | *"Bits price the description. Actions price finding out whether it holds."* | the question conflates the two | governs D2/D3 |
| Fig 13 :14 | *"conserved, finite, directionless alone"* | Energy has no direction on its own | governs D1/D3 |
| Fig 13 :22 | *"a difference that can be spent"* | Gradient is the spendable difference | governs D1/D3 |
| Fig 13 :24 | *"that entities relate, and influence travels"* | Network is the transmission structure | governs transmit |
| Fig 13 :62 | *"no spatial symmetry for Noether, and no region to make isolated mean anything"* | a bit needs a bounded region | governs store |
| Fig 13 :65 | *"no time-translation symmetry, and no finite operations to leave a remainder"* | a finite operation leaves a remainder | governs erase |
| Fig 13 :68 | *"finiteness in a finite region is what makes the counting terminate"* | finite energy bounds the counting | governs store |
| Fig 13 :71 | *"no direction to drive the flow, and no remainder left after each step"* | erase spends a gradient and leaves heat | governs erase |
| Fig 13 :74 | *"Everything else is a composition across the two kinds, never within one."* | no energy-energy bond | governs D3 |
| Fig 13 :75 | *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."* | a bit is a state in a region, not a bare label | governs store |
| Fig 13 :75-76 | *"Energy and a gradient compose a flow."* | erasure work is a flow down a gradient | governs erase |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings F1 to Fn

### F1 - The four verbs are four slots, and only erase has an unconditional price (decisive)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 9 :54-55: *"And when the
split lands on a union rather than a partition, unbundle before you search again."* and *"A bundled
problem is usually a union of overlapping conditions, not a list of separate ones."*

The logical asymmetry decides the partition. Erase maps two or more states to one, so it reduces the
number of distinguishable states in the memory. Fig 13 :71: *"no direction to drive the flow, and no
remainder left after each step."* The remainder is the heat dumped to the bath. Create, store and
transmit can be one-to-one, so in the reversible limit they need no minimum dissipation; the figure
does not price them by logic, only by the apparatus that implements them.

This is the shape, not the number. Fig 9 :32: *"you get a kind of thing, never the answer itself."*
The figures say erase has a floor; they do not say kT ln2. That is a world result (F6).

**Refuter:** a measurement showing a logically irreversible reset dissipating below the floor in the
quasistatic limit, or a demonstration that all four verbs dissipate the same per-bit amount in that
limit. Either breaks the partition.

### F2 - A bit is a state in a bounded region; storage is a barrier, not a substance

Fig 13 :62: *"no spatial symmetry for Noether, and no region to make isolated mean anything."* Fig 13
:75: *"Two states never bond directly. It is not space-time but space, a structure, time; and two
structures join only through a state."* Fig 13 :68: *"finiteness in a finite region is what makes the
counting terminate."*

Storage needs a region that can be isolated and at least two states that stay distinct. The physical
resource is a free-energy barrier, which is a Gradient (Fig 13 :22: *"a difference that can be spent"*)
held over space, large compared with the thermal energy kT. In the ideal static case a stored bit
costs no ongoing power; in a real finite-temperature memory the barrier must be maintained. Note the
two currencies: Fig 12 :126: *"Bits price the description. Actions price finding out whether it
holds."* The bit count and the maintenance actions do not add to one figure.

**Refuter:** a memory that retains distinct states with no spatial isolation and no barrier, or an
instrument showing that barrier height does not track retention time.

### F3 - Erasure is energy spent down a gradient, leaving a remainder

Fig 13 :76: *"Energy and a gradient compose a flow."* Fig 13 :14: *"conserved, finite, directionless
alone"* (Energy on its own has no direction). Fig 13 :22: *"a difference that can be spent"* (the
Gradient supplies the direction). Fig 13 :71: *"no direction to drive the flow, and no remainder left
after each step."*

So the resource ledger for erase is: a gradient to spend (free energy), a state to reset, and a bath
to take the remainder. Fig 13 :65: *"no time-translation symmetry, and no finite operations to leave
a remainder"* names the finite operation whose remainder is the heat. Fig 5 :43: *"A new term is worth
having when stating it, plus what remains unexplained after it, costs less than what was unexplained
before."* A single term "information costs energy" leaves the asymmetry unexplained and fails this
bargain; a per-operation ledger pays for itself.

**Refuter:** a re-census that derives Energy or Gradient from the other five terms (breaks Fig 13
indivisibility), or a measurement showing reset with no heat remainder and no gradient spent.

### F4 - Transmission is a Network effect, and Shannon's theory alone prices nothing

Fig 13 :24: *"that entities relate, and influence travels"* (Network). Transmission is the one verb
whose figure term is a structure whose whole job is influence travelling. But the Shannon frame (D2)
is substrate-independent: its coding theorems say how many bits a channel carries, not what energy
that costs. Fig 6 :26: *"The world does not gain primitives; a frame gains access."* Binding Shannon H
onto Spectrum adds no atom and moves no wall.

Fig 12 :125: *"A composition costs in two currencies, and they do not add."* The Shannon bit count is
a description price in bits; the launch/amplification energy is an action price. The question's phrase
"physical resources required to transmit" conflates them. No figure line gives an energy-per-bit
floor for a noiseless reversible channel, so that sub-question is recorded as **gap** (F7), not filled
by an analogy from erasure.

**Refuter:** a figure line that prices bits in joules directly, or a ground measurement of a nonzero
energy-per-bit floor for a reversible channel at the appropriate limit.

### F5 - The memory cycle is second-order and is closed by the reset

Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes,
and a chain cannot close by construction."* A demon that measures but never erases has an open loop;
the memory fills and the cycle cannot close. Fig 12 :119: *"catalyst. A part that survives its own
use. Spent and regenerating parts behave differently across uses, and nothing records which a term
is."* The bath is the part that survives; the memory is the part that does not survive its own use
unless it is reset. Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."*
The settled first-order operations become operands for the second-order cycle.

This is why the erase cost is not a nuisance detail: it is the term that closes the loop and restores
the second law. It is also why the answer must keep the verbs separate (F1) before composing them.

**Refuter:** a closed memory cycle with no reset, or a demonstration that a spent memory can serve as
a catalyst across uses without regeneration.

### F6 - The kT ln2 number is a world result, not a figure derivation

World source, read 2026-11-23: Iulia Georgescu, *"60 years of Landauer's principle"*, Nature Reviews
Physics 3, 770 (2021): *"In 1961, Landauer showed that there is an absolute minimum thermodynamic cost
associated with erasing one bit of information: kB T ln2."* World source: Antoine Berut et al.,
*"Experimental verification of Landauer's principle linking information and thermodynamics"*, Nature
483, 187-189 (2012): *"we experimentally show the existence of the Landauer bound in a generic model
of a one-bit memory."*

World sources are secondary. Fig 9 :32: *"you get a kind of thing, never the answer itself."* The
figures support the shape (erase has a floor, spent from a gradient, leaving a remainder). They do not
contain Boltzmann's constant or a logarithm. Reporting kT ln2 as figure-derived would be the
metamerism error of `05_what_shape_means.md`: naming a source from a reading.

**Refuter:** a figure line containing the numeric bound (none exists), or a ground measurement that
breaks the bound.

### F7 - Where the figures are silent, say gap

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The following have no
governing figure line after a genuine census, and are recorded as `gap`, not as silence and not as an
analogy:
- the numerical floor for erasure (world source only, F6);
- an energy-per-bit floor for reversible transmission;
- the maintenance power of a real finite-temperature memory above the ideal barrier case;
- whether Shannon entropy and thermodynamic entropy are the same quantity rather than two frames
  that agree at a limit.

"Unreachable is a verdict, not a silence." Fig 9 :60: *"Use filters for the budget and witnesses for
the verdict. Never let a filter hand you a verdict."* A gap stays a gap.

### F8 - The verification frame cannot manufacture corroboration

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 7 :35:
*"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* Fig 2 :40: *"agreement
about the world is worthless when the agreeing frames share an evidence pool."*

This simulated audit shares the primary's evidence pool, so its agreement with the primary is one
pool talking. It is internal consistency, not corroboration. The expert packet (`08`) therefore asks
for a refutation of the shape before showing any framework material.

**Refuter:** an outside frame, drawn from a different closure, that returns a failure on stage 1.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat-map discipline: a falsifier written before the run is a design instrument. The shape
claim is refuted if any of the following holds:

1. A measurement shows logically irreversible reset dissipating below the bound in the quasistatic
   limit (breaks F3/F6 at the ground).
2. A demonstration that create, store and transmit necessarily dissipate the same per-bit floor as
   erase in the reversible limit (breaks the partition in F1).
3. A derivation of Energy or Gradient from the other five terms, or a re-census that composes them
   into something other than a flow (breaks Fig 13 and F3).
4. A derivation showing that bits and actions are one currency (breaks Fig 12 :125-126 and F4).
5. A closed memory cycle with no reset term (breaks F5).

If any fires, the ledger is withdrawn or re-censused. Until one is run, no figure-derived part of this
answer is `grounded`.

---

## 5. Recommendation

1. Send the per-operation ledger as a shape, with the four slots kept separate and the gaps marked
   (F1, F7). Do not send a single "cost of information" number.
2. Report kT ln2 as a world result with provenance, never as a figure output (F6).
3. Lead with the refuter and the asymmetry claim; offer links only after the stage 1 verdict (F8,
   Fig 10 :52 *"Bring a characterised residual, never the source."*).
4. Use the public institutional portals in `03_public_contact_points.csv`. No personal emails, no
   bulk send, no receptiveness rank.
5. Fig 4 :22: *"Only methods cross up. Only head starts come down."* Offer the census method, not a
   recorded conclusion.

---

## 6. Canonical usage check

Two local sources govern how the figures may be used, read after the first sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the
  repo: the code, the rulings and the docs answer to them"* and *"the quotes are the authority, not
  this summary."* It also says a reading that makes figures contradict one another has misidentified
  its domain, and that the framework returns *"a shape, not a name"* then stops at the limit of the
  instruments. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: SEARCHED, INWARD, OUTWARD are three questions, never
  one. For the transmission floor (F7) the honest order is SEARCHED first, then INWARD (a sharper
  calorimeter) or OUTWARD (a frame that already prices it), not an import against a budget limit.

### Retraction and confirmation log

| earlier reading in this audit | status after the canonical check |
|---|---|
| "all four operations cost energy per bit" (initial framing, section 0 Option A) | **Retracted.** Kept only as the refused alternative. Logical reversibility + Fig 1 :19 split the verbs into four slots. |
| "Shannon entropy is thermodynamic entropy" (considered in F4) | **Narrowed to a binding, not an identity.** Fig 6 :26: an import adds no atom. Metamerism rule in `05` applies. |
| "the figures give kT ln2" (considered in F6) | **Retracted.** Fig 9 :32 gives a kind of thing, never the number. The number is a world result. |
| "transmission has a kT ln2 floor" (considered in F4) | **Marked gap, not imported.** No figure line governs it; importing from erasure would be a wrong atom priced above primitives (Fig 6). |
| "Fig 12 :119 catalyst means the memory survives erasure" | **Retracted as a reading.** The bath survives; the memory is spent and must be regenerated. Kept as an analogy with its limit stated. |
| F1 partition | **Confirmed.** Fig 1 :19 and Fig 9 :54-55 triangulate from different figures (slot indexing and union unbundling). |
| F3 erase spends a gradient | **Confirmed and triangulated.** Fig 13 :22, :71, :76, :14 (low intra-figure overlap: definition of Gradient, remainder clause, flow composition, directionlessness of Energy). |
| F7 gaps | **Confirmed as verdicts.** Fig 8 :39 and Fig 9 :60. |

### Strain and re-census

- **Energy as both a state and "energy cost".** Apparent strain between Fig 13 :14 (*"conserved,
  finite, directionless alone"*) and the phrase "energy cost of information". Re-census: Fig 13 :14
  governs the state Energy; the "cost" is the spent Gradient composed with Energy into a flow (Fig
  13 :76). Different objects, no strain after re-census.
- **Gradient as a memory barrier versus Gradient as erasure drive.** Same figure term, two uses: a
  held difference (storage) and a spent difference (erase). Re-census: the sign of use differs, not
  the term. Fig 12 :121 (*"The sign of the loop decides whether it closes"*) governs the loop, not
  the term. Named, not hidden.
- **After re-census: zero hidden strains, one named limit (F7 gaps).**

---

## 7. Updated verdict

The shape survives: the four verbs are separate slots, and only erase carries an unconditional
thermodynamic floor, paid by spending a Gradient composed with Energy into a flow and leaving a
remainder in a bath. Storage is a held barrier in a bounded region; transmission is a Network effect
whose energy price is not figure-governed; create and store can be reversible in principle. The
numeric bound kT ln2 is a world result with provenance, not a figure output. Four sub-questions are
`gap` after a genuine census (F7). Mode `specified` on the ledger, `general` on the structural shape,
nothing `grounded` on the Tether side. The pre-registered refuter in section 4 stands unchanged.
