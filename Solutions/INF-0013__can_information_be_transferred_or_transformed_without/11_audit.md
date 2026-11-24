# Second-seat audit of the INF-0013 solution

**Mode: `specified`, with one `gap`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same formula and seat map, the same eight essays, the same world pages. Fig 2 :40 says *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken. This audit cannot settle the question it audits.

The material audited is `01_figure_grounded_audit.md`, read together with `05`, `06`, `07`, `08`, `09`, `10` and the residual line from the question source.

## Independent domain census

I redid the census from the residual line alone, before using the primary's conclusions, in the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The question bundles an information delta, a physical state delta and a dissipation delta. Arity: three after unbundling. Symmetry: the reading-to-source map is many-to-one, so a matching reading is not a matching source; the Figures' identity bond is symmetric, transfer is ordered. Scale: first order within a carrier, second order at the frame-to-ground crossing. I read the union from Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- **D1 informational / compositional.** Actors: atoms, bonds, molecules, Γ. Currency: description length, arrangement. Anchor: none internal, borrowed from D2. Not a closed domain.
- **D2 physical / thermodynamic.** Actors: carrier states, bath, work reservoir, channel. Currency: physical state, energy, entropy. Anchor: a measurement. Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
- **D3 verification.** Actors: outside frames and instruments. Currency: agreement and residual. Anchor: the ground, never agreement. In this simulated run its independence is zero.
- **Rejected domain: semantic content.** No nameable anchor, so not a domain yet. This matches the primary's move.

Order by dependency: name the physical delta before scoring the information measure; describe the residual before choosing a frame (Fig 9 :27-28); write the refuter before the run (Seat Map :287).

My census reaches the same three domains and the same union reading as the primary. I started from Fig 9's union/partition split and Fig 2's anchor test, whereas the primary started from Fig 12's bond price and Fig 1's frame-internal rule. Different starting lines, same boundaries: low overlap between routes, so the agreement is weak but not circular within the framework. It is still one evidence pool.

## Comparison with primary

| primary finding | my independent check | agreement |
|---|---|---|
| F1 free bond carries nothing | Fig 12 :101 is a statement about price; Fig 5 :45 fixes the price as description length | agree; do not read it as a joule claim |
| F2 arrangement is substance, isomer differs in behaviour | Fig 12 :94 and :117 say exactly this, with the chemistry instance in the figure | agree |
| F3 import changes frame, not world | Fig 6 :25-26 supports the frame/world split only | agree with the narrowing; the wider reading was retracted in the primary and stays retracted |
| F4 information measures are frame-internal | Fig 1 :27 plus Fig 2 :29 | agree |
| F5 scale-relative verdicts, R_T owed | Fig 4 :30 requires the round trip; atoms-level and arrangement-level verdicts are different objects | agree |
| F6 transfer is a flow | Fig 13 :76 supports energy plus gradient; this is a structural claim, not a measurement | agree, single-source |
| F7 no contact change changes nothing | Fig 11 :40 is about capability, so the transfer reading is an analogue | agree; mode `specified` is the honest label |
| F8 cost is a gap | no figure line prices dissipation; world sources are secondary | agree; gap confirmed, not silence (Fig 13 :134) |
| union unbundling | Fig 9 :54-57; one lever leaves the dissipation intersection standing | agree |
| "shape, not a name" narrowing | the README phrase governs a missing primitive; the cost mechanism is missing here, the bond vocabulary is held | agree with the narrowing |

No disagreement. Since both seats share an evidence pool, this agreement carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these character by character before relying on them. Each is a primary quote; none comes from a summary.

- Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." checked.
- Fig 12 :94 "The arrangement is the substance." checked.
- Fig 12 :99 "A bond costs what it could have been, and nothing more." checked.
- Fig 12 :101 "A bond that costs nothing is a bond that carries nothing, which is the flat case." checked.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." checked. The line starts with the lowercase word "isomer.", so that form is the quote.
- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it." checked as a substring of the longer line.
- Fig 5 :45 "This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection." checked.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." checked.
- Fig 6 :25 "An import adds no atom to the world." and Fig 6 :26 "The world does not gain primitives; a frame gains access." checked.
- Fig 13 :76 "Energy and a gradient compose a flow." checked as a substring of the longer line.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked. The SVG line ends with a comma; the quote stops before it.
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." checked.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." checked.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" checked as a substring of the longer line.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." checked.

All checked strings are present verbatim in the extract. One candidate quote from the Operators table on negation was dropped during the primary run because it could not be verified through the shell encoding check; no substitute was used, and none is relied on here.

## Round trip gap R_T

The Symbols table defines R_T as `gap(x, (T_E ∘ T_A)(x))`, what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed zero. I ran the trip on the condensation the folder actually uses.

1. **Sent up (x):** Fig 12 :5/:94/:99/:101/:117 (bond price, arrangement, isomer), Fig 13 :76 (flow), Fig 6 :25-26 (frame/world split).
2. **Abstracted (T_A):** the shipped shorthand, "an information change has a physical companion change, but cost is open."
3. **Concretised (T_E):** the tempting conclusion, "erasing a bit dissipates kT ln 2, therefore information transfer always has a thermodynamic price."

**R_T is nonzero.** Three constraints do not survive the trip back down:

- the **price currency**: bits in Fig 5 :45 versus joules in the world sources;
- the **operation class**: erasure is logically irreversible; transfer and transformation need not be (Bennett 2003, Sagawa 2014);
- the **anchor**: the cost claim needs a calorimeter, not a definition, and the figures provide no such instrument.

One thing survives cleanly: a free bond carries nothing, and the arrangement is part of what changes. That is the residue worth sending. R_T was **not** measured numerically because no new ground reading exists in this run; it is recorded qualitatively as the enumerated set of dropped constraints. Treating the formula as identical to the metalaws would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## Strains and re-census

- **Two senses of "physical change."** State reconfiguration and thermodynamic dissipation are different quantities. Re-census: Fig 12 and Fig 13 govern arrangement and flow; the world sources govern entropy production. Different objects, so no contradiction; the two must still be reported in separate columns. This is the one live strain, named and not hidden.
- **Fig 11 :40 versus transfer.** The figure's object is capability, so the transfer reading is an analogue. Marked `specified`, single-source. No second witness is claimed.
- **Fig 5 :45 versus the physical question.** Description length and energy are different currencies. Re-census resolves the apparent strain; F8 stays a `gap`.
- **Record-level retractions.** The primary withdrew its initial energetic reading of Fig 12 :101 and its wide reading of Fig 6 :25. Those were over-reads, not figure conflicts; no further re-census is owed. The dropped Operators quote is recorded, not silently replaced.
- **After re-census: one strain named, none hidden.**

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files are consistent with each other and with the verbatim figure text. The retraction log is applied rather than ignored: F1 is priced in bits, F3 is narrowed to the frame/world split, F8 is a declared gap, shape-not-a-name is narrowed to the missing cost mechanism, and the union is unbundled. `09_watson_answer.md` carries the canonical WATSON shape with all three verdict fields stated. `10_source_ledger.csv` lists every source read with author, venue, year, accessed date and an exact quote; fetched URLs and local paths are distinguished. This file records the independent check.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is internal consistency, not truth.

**On the claim: `specified`, ungrounded, candidate, with one `gap`.** The structural shape survives; the cost sub-question is open. R1, R2 or R3 would break the shape; a figure line pricing dissipation would close the gap; none has fired here.

**Recommendation.** Send `08_expert_verification_packet.md` with its mode and refuters intact, ask what would refute it, and never pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links.
