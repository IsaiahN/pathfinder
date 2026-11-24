# Isomers and order: random-error and burst protection as different arrangements

**Mode: `specified` on the isomer claim, `general` on the figure definitions, `gap` on which specific code wins.** This is a simulated derivation checked against the verbatim figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

Two code constructions with identical ingredients (same block length n, same message length k, same redundancy n−k, same minimum distance where applicable) can have decisively different behaviour on a correlated channel. The ingredient list cannot explain the difference. What is the bond, and what would falsify the claim that the bond is decisive?

## DOMAIN CENSUS

Atoms held from the figures and the coding frame: symbols, redundancy, parity checks, block length, error patterns, positions in a sequence. Bonds held: symmetric `+` (both hold) and ordered `→` (sequence, A then B), plus `⋛` comparison for the threshold between rate and protection. No new primitive is introduced. The interleaver is an import from the coding frame (provenance in `04_links_and_distribution.md`), not a new kind.

## DERIVATION

### Q1  -  Are random-error and burst protection the same substance with a different name?

No. Fig 12 :40: *"same two atoms, three substances"*. Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

If the error model is memoryless, permuting code positions leaves the model unchanged; the permutation symmetry means many spellings are one term (Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."*). If the channel has memory, position carries information: adjacent symbols fail together. The permutation symmetry is broken, so the bond must be ordered. Fig 12 :73 defines `→` as *"A then B; B needs A to have happened"* and its test as *"swap them. Does it become a different thing? Yes."* Swapping two symbols in an interleaver changes the code, so the ordered bond applies.

Verdict: **two substances**, not two names for one. Triangulated across Fig 12 (bond carries meaning), Fig 1 (per-slot residual, position-indexed), and the coding frame's two-state channel model (independent world source).

### Q2  -  Are they isomers under the figure's definition?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

- **Same atoms.** A block code with symbols written consecutively and the same block code with symbols permuted by an interleaver have the same n, k, distance and redundancy. The interleaver is a permutation, so the ingredient set is identical.
- **Different bond.** Consecutive layout bonds adjacent code positions to adjacent channel uses (`→` over physical time). Interleaved layout bonds adjacent code positions to separated channel uses. Same atoms, different ordered relation.
- **Invisible in the formula.** A raw BER or a rate figure records ingredients, not the arrangement. The burst-code page confirms the consequence: RS over F_2^m is *"well-suited to applications where errors occur in bursts"* and *"a poor choice compared to a binary code"* for random single-bit errors, at comparable redundancy accounting. That is decisive behaviour invisible in the ingredient list.
- **Decisive in behaviour.** The interleaving theorem in the same source: a λ-way interleave of an ℓ-burst-correcting code corrects bursts of length λℓ. Arrangement alone multiplies the corrected burst length.

Verdict: **isomers**, triangulated between the figure definition and the engineering result. Mode `specified` for the application; the figure definition is `general`.

**Falsifier, written before the run.** If two equal-redundancy arrangements produce the same block-error curve on a channel whose errors are demonstrably correlated, the isomer claim fails as applied. A single measured curve suffices to fire it.

### Q3  -  What order is the union? Interleaving, symbol grouping and erasure marking

Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* The route here has a dependency order (Fig 3 :20: *"The chain is ordered by dependency, not by importance"*):

1. **Perceive** the channel: error autocorrelation or fitted two-state transitions (Fig 11 :44, enumerate the habitat).
2. **Group** at the scale where the burst is one event: Reed-Solomon over F_2^m treats m bits as one symbol, so *"whether a single bit, or all of the m bits contain errors, from a decoding perspective it is still a single symbol error"* (world source, read 2026-11-23).
3. **Arrange** across uses: interleave so that one physical burst is spread over many codewords. The deinterleaver reverses the permutation at the receiver.
4. **Mark** uncertain positions as erasures: RS corrects twice as many erasures as errors, so an inner code that flags uncorrectable blocks converts burst damage into erasures the outer code can absorb. The CD CIRC chain does exactly this (world source, read 2026-11-23).
5. **Price** the route: rate, memory and latency stay separate (Fig 12 :126, *"A composition costs in two currencies, and they do not add"*).

Steps 2 to 4 are all arrangements of the same redundancy, not new atoms. Step 5 is the bargain from Fig 5 :42: *"The acceptance test is a bargain, not a threshold."*

**Falsifier.** If a decoder can mark erasures and spread bursts without measurable latency or memory cost, step 5's price is zero and the two-currency finding fails for this case.

### Q4  -  Is there a catalyst-like component? (erasure marking)

Fig 12 :119: *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."* Erasure marking has a catalyst shape: the inner RS decoder is *"spent"* on a burst (it outputs erasures for uncorrectable blocks) and *"regenerating"* in effect, because the deinterleaver spreads those erasures and the outer code restores the block. The marker itself is not consumed; it is reused every frame. Code that records only the error count cannot tell a spent decoder from a regenerating one, which is why a BER plot alone hides the mechanism. This is an analogue, not a figure-derived law: mode `general` for the figure definition, `specified` and unmeasured for the coding application.

**Falsifier.** A channel on which erasure marking degrades monotonically across frames with no regeneration from the outer code. Then the catalyst reading is wrong here.

### Q5  -  What is the cycle? (feedback and retransmission)

Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* A retransmission loop takes the decoder's failure as input to the next transmission, so the channel seen by the code is partly authored by the code: a feedback-driven change in burst length feeds back into the interleaver choice. That is a cycle with a sign (does retransmission shorten or lengthen the effective burst?), not a chain. The habitat cascade (Fig 11 :52: *"And contact cascades."*) makes second-order effects visible.

**Falsifier.** A system with no feedback in which the decoder's output cannot alter future channel inputs. Then the cycle reading does not apply.

## CONCLUSION

Random-error and burst protection are **isomers** under Fig 12: same atoms, different ordered bond, decisive behavioural difference invisible in the ingredient formula. The route is ordered: perceive the channel, group at the symbol scale, arrange by interleaving, mark erasures, price the whole. Erasure marking has a catalyst shape and retransmission has a cycle shape, both as analogues with their own falsifiers. What this does **not** yield is a winning code: that stays a `gap` (Fig 9 :32: *"you get a kind of thing, never the answer itself"*).

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session; the eight essays; the public coding sources in `04_links_and_distribution.md`. No BER curve was measured.

## FIGURE CENSUS

Fig 12 (isomer :117, catalyst :119, cycle :121, bond :5, symmetry :92, ordered bond :73, two currencies :126, no route without bonds :111), Fig 1 (per-slot residual), Fig 3 (dependency order :20), Fig 5 (bargain :42), Fig 9 (shape not a name :32), Fig 11 (habitat enumeration :44, cascade :52). Strained after re-census: **none**. The catalyst and cycle readings are analogies with stated falsifiers, not forced figure lines.
