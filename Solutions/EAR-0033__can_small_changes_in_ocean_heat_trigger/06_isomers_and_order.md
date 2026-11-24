# Union, cycle and scale order for the ocean-heat / ice-flow question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground
reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The record question asks whether a small change in ocean heat can trigger a large or persistent
change in ice-sheet flow. Three structural questions are owed before an answer is attempted:

1. Is the response a **cycle** (self-sustaining) or a **chain** (forcing then result, then stops)?
2. Are delivery and threshold configuration **isomers**, a **partition**, or a **union**?
3. At what **scale / aggregation order** must the residual be read?

## DOMAIN CENSUS

Atoms held: space, time, energy (states); spectrum, gradient, network (structures). Bonds held: the
seven plus negation. No new primitive is available without import. The ice-ocean specifics (cavity,
buttressing, retrograde bed, grounding-line flux) are bindings from the oceanography and glaciology
frames onto held atoms, not new members of the six (Fig 6 :21 *"MINT composes inside the closure and
can never add an atom."*).

## DERIVATION

### Q1 — Cycle or chain?

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

- A chain reading: ocean heat → basal melt → thinning → faster flow. Each step consumes the one
  before it. When the heat anomaly is removed, the chain unwinds. This is a *"large response to a
  small perturbation that is still directly recoverable"* in Rosier et al. 2021's Figure 1b. It is
  not a tipping event.
- A cycle reading: grounding-line retreat → increased ice flux across the grounding line →
  thinning and reduced buttressing → further retreat. The output re-enters as input with a positive
  sign, so the loop closes. Fig 12 :121 permits this; a chain cannot produce it by construction.
- Fig 13 :32: **"comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."** The residual of each turn re-enters the next; that compounding is what the world sources measure as irreversibility, and the discarded detail is why the threshold is uncertain.
- **Conclusion:** "persistent" requires the cycle. "Large" alone does not. Triangulated (Fig 12 and
  Fig 13, different figures, low overlap). Mode `general` for the structural claim, `specified` for
  the ice reading.
- **Falsifier:** a "persistent" flow change that stops as soon as the anomaly is removed across all
  tested slots, with no self-sustaining retreat. If observed, the cycle claim fails for those slots.

### Q2 — Are delivery and threshold configuration isomers? No: they are a union

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

- Isomers require the **same atoms** under different bonds. C1 (heat delivered to the grounding
  zone) and C2 (threshold configuration) do not share an atom set: C1 is chiefly energy plus a
  spatial gradient; C2 is chiefly network/buttressing plus bed geometry expressed through space and
  a gradient over time (Fig 13 :76 *"Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."*).
- Therefore they are **not** isomers. They are the two conditions of a **union compound**:
  Fig 9 :55 **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
  and Fig 9 :57 **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific"**
- Operational consequence: a forcing-only case and a configuration-only case must be searched
  separately before their intersection is searched. A single lever that clears both is the falsifier
  (Fig 9 :55).
- **Triangulation status:** single-source for the figure definition of isomer (Fig 12), triangulated
  for the union reading (Fig 9 plus the world result that some basins decline gradually and others
  tip, Winkelmann et al. 2026). Mode `specified`.
- **Falsifier:** a single intervention that restores small recoverable responses in both a
  forcing-only case and a configuration-only case with no categorically different residue.

### Q3 — Scale and aggregation order

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :20: **"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert"**

- The slot is the glacier or grounding-line sector. A basin mean can be near zero while one slot is
  live, and that is a legal state, not an inert one.
- Fig 4 :20: **"it or a thousand. Only the actors, the currency and the anchor change."** The loop is
  the same at cavity scale and ice-sheet scale; only the cast changes. So a cavity-scale melt result
  can be carried up as a method and sent down as a head start, never as a recording (Fig 4 :22-25).
- Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** The round trip from a basin-scale statement ("Antarctica is tipping") down to a slot ("Thwaites grounding line retreat is self-sustaining") is lossy. The gap is the honest report of what the coarse description cannot hold.
- World check: Winkelmann et al. 2026 write that *"finding the 'right' scale of aggregation is crucial to disentangling the dampening and reinforcing feedbacks"*, and Hill et al. 2024 report that a cavity regime shift does **not** produce a single runaway West Antarctic collapse. Both corroborate the per-slot, lossy-scale reading.
- **Falsifier:** a case where a basin-mean residual is used as the verdict while a single slot is in
  sustained retreat and the mean stays near zero. Under Q3 that is a reporting failure, and the
  claim must be restated per slot.

### Q4 — Dependency order of the checks (which link breaks first)

Fig 3 :20: **"The chain is ordered by dependency, not by importance."**
Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

The order is: perceive heat at the cavity and flow at the slot; have terms for buttressing, grounding-line flux and hysteresis; say what counts as large and persistent; design the reversal experiment; record the result. The middle link, "what counts as a response here", is the one with no obvious test (Fig 3 :24-27). The world literature supplies a partial instrument there: variance and lag-1 autocorrelation as early-warning indicators (Rosier et al. 2021), with skill that is conditional on forcing rate and coupling (Clarke et al. 2026). That is an instrument returning something, so it is an edge that can be sharpened (Fig 6 :34), not a sensor imagined from a description.

**Falsifier:** evidence that the vocabulary link is not the binding constraint, for example a
measured, unambiguous, ground-checked response classification at the slot with no residual left in
the detector. Then the breakdown is elsewhere in the chain and this order is wrong.

## CONCLUSION

The persistent-response claim is a **cycle**, and a chain cannot produce it. Delivery and threshold
configuration are **not isomers** because they do not share an atom set; they are the two conditions
of a **union compound**, so they must be unbundled before they are searched. The residual must be
indexed **per slot**, and cross-scale statements carry a round-trip gap that must be reported rather
than assumed zero. The binding dependency link is the vocabulary link, "what counts as a large and
persistent response here", and it is partially instrumented by early-warning indicators whose skill
is conditional. This rescues what is defensible in the question without naming a threshold or a
doomed glacier.

## ANCHOR

Verbatim figure text read this session from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the four essays
opened and listed in `05_what_shape_means.md`; the five world sources opened and listed in
`10_source_ledger.csv`. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 1 (per-slot residual, live slot), Fig 3 (dependency order, link with no instrument), Fig 4
(membrane, round trip), Fig 6 (no new atom; edge from an existing instrument), Fig 9 (union not
isomer/partition, categorically different residue), Fig 12 (cycle, isomer definition), Fig 13
(gradient over space versus time, remainder compounding). Strains after re-census: none hidden; the
one born in `01` F2 (⋛ governing both magnitude and persistence) was resolved by assigning magnitude
to the comparison bond and persistence to the cycle.
