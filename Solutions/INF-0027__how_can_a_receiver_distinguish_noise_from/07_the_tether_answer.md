# The Tether's answer on noise versus a rare signal

**Mode: `specified` - not `grounded`.** This is a shape and a route, not a detector and not a result.
Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground
reading.

## 1. The residual it answers

A receiver's library Γ predicts what the channel will return; the channel returns o'; R = |Γ(b,a) - o'|
is measured per slot s and per time, never as a global energy (Fig 1 :19). Both noise and a rare
genuine signal produce a positive residual. The failure is not sensitivity but discrimination:
the receiver cannot tell from amplitude alone whether a live slot is source-bearing or is the
detail its own representation discarded. This is a **union compound**, not one hard problem (Fig 9
:57: *"What remains is smaller and it is also categorically different: a case in two conditions is
not a harder case of either."*). It has its own loop and its own ground.

## 2. The shape

1. **Keep the residual per slot.** Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A rare signal is one live slot with the rest quiet. Pooling destroys it. This is the support condition before any pattern is named.

2. **Compressibility ranks candidates; it does not decide sources.** Fig 5 :18: *"seeks the gap that is large and compressible"*; Fig 5 :43: *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."* A pattern worth naming pays this bargain. Noise is large but incompressible, and a pattern that fits one occasion perfectly fails Fig 5 :44. But Fig 9 :60 says *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* The bargain is the filter; the ground is the witness. This is the F2 retraction, carried here.

3. **Keep the channel to the ground reachable.** Fig 10 :24: *"the ground does not decay, the channel does"*; Fig 10 :25-26 names *"stale percepts, dropped transients,"* and *"saturated metrics, pooled readings"*. A rare signal is a transient and a small live slot, so these four modes are its named ways of dying. The remedy for *"you have lost touch"* (Fig 10 :28) is to restore the reading, not to adjudicate from a degraded one.

4. **Corroborate the source across differing closures.** Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* One reading cannot name its source; two frames fed the same samples are one witness. The source-discriminating instrument, not another threshold, is what closes the question.

5. **The criterion is a budget filter, never the verdict.** Detection theory separates sensitivity from response bias, and the ROC literature assesses discrimination *"independently from (and prior to specifying) the cost context or the class distribution."* Fig 9 :60 governs. Report sensitivity, criterion and source confirmation as three separate lines.

6. **If no term fits, run the three reachability questions in order.** SEARCHED first, then INWARD or OUTWARD, never read against each other (Formula step 7). Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Underivable and unreachable-at-budget issue different instructions.

7. **Noise is relative to the representation.** Fig 13 :32: *"the detail a crossing discards reappears above it as noise."* So "is this noise or a signal?" is under-specified until the receiver's Γ and the ground are named. What the framework can return is a shape, not a name: Fig 9 :32, *"you get a kind of thing, never the answer itself."*

## 3. What it explicitly does not say

- Not a detector design. No matched filter, criterion value, prior or threshold is specified.
- Not a claim that compressibility proves a source. It ranks which candidate to check (retraction F2).
- Not a claim that a likelihood ratio, d', a p-value or an alarm is the ground. These are instruments, and instruments can be wrong on axes they do not measure (Fig 2 :37-38).
- Not a claim that receiver confidence or ensemble agreement settles anything. A room is not an anchor (Fig 7 :35).
- Not `grounded`. No source-confirming measurement was taken here.

## 4. What would settle it - the ground

A source-discriminating instrument, not a further argument. The framework's own metamerism case: a color instrument *"cannot comment on the source"*, and the question was closed by a spectrometer, not by reasoning. Here the corresponding questions are:

- **Slot test:** does per-slot R, at the resolution used, show one live slot over a near-zero background, or is the apparent excess a pooled average? An instrument that reports the per-slot vector settles this.
- **Channel test:** are transients preserved, metrics unsaturated, readings unpooled and percepts fresh, verified by an independent readout of the channel rather than by the receiver's own green light?
- **Compressibility test:** does the candidate pattern's description plus its leftover cost less than the raw residual under a declared code, and does that ranking stay stable across repeated trials? This is a filter check, not the verdict.
- **Source test:** does a second frame with a different closure and no shared evidence pool confirm the same source? If the source set can be closed and each member shown to yield a distinct reading, F4's triangulation requirement weakens (this is a pre-registered refuter).
- **Standing falsifiers from the audit:** recovery of every signal after global averaging; channel intact yet rare signals still missed at the decay-predicted rate; a detection rule invariant to its cost pair; a receiver detecting a novel signal with no search, no instrument refinement and no import.

## 5. The honest stop

**Unreached, not unreachable.** A source-discriminating instrument is not held here. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence."* What can be said at the stop is the class of thing a candidate answer must be: per-slot, compressible, channel-preserving and source-corroborated. Which physical source produced a particular reading remains a `gap`, not a hidden answer. The lineage is recorded so the stop is checkable. Indiscernibility is not identity.

## 6. One-paragraph version for outreach

> The Tether does not give the receiver a better threshold. It says that a rare signal is one live
> slot in an otherwise quiet residual, so averaging the residual destroys the only thing that says
> where to look; that a candidate pattern is worth naming only when its description costs less than
> the confusion it removes, which ranks candidates but does not prove a source; that the ground
> does not decay while the channel does, so dropped transients, saturated metrics and pooled
> readings are how rare signals are lost; and that one reading cannot name its own source, so a
> source must be corroborated across frames that do not share an evidence pool. The detection
> criterion is a budget filter and never a verdict. What the framework offers is that shape, the
> refuters written in advance, and the instruments that would close it. The specific source stays
> open until the ground settles it.
