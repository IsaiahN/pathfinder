# The Tether's answer: conditions for adaptive-network convergence

**Mode: `specified` on the conditions, `general` on the structural shape, `gap` on the internal
criterion. Not `grounded`.** Simulated derivation checked against the figures, not a measurement
(`05_what_shape_means.md` §6).

## 1. The residual it answers

An adaptive network is a cycle: states change, links rewire in response, and the rewired topology
feeds the next state update. We observe two regimes, settling and continual reorganization, and ask
for the discriminating conditions. R is per node or per link, never a global average (Fig 1 :19).
The question is a **union compound**, not one hard problem: "A case in two conditions is not a harder
case of either" (Fig 9 :57). It must be unbundled before any lever is proposed (Fig 9 :54).

## 2. The answer

1. **The conditions form a union, not a threshold.** No single coupling strength, rewiring rate, or
   noise level decides convergence. Fig 9 :55: "A bundled problem is usually a union of overlapping
   conditions, not a list of separate ones." Fig 9 :60: "Use filters for the budget and witnesses for
   the verdict. Never let a filter hand you a verdict."

2. **The reference must not update on the network.** Fig 2 :33: "The anchor must not update." If the
   only reference is the network's own last output, the system is in the mutual-update collapse and
   "everything drifts together, and the drift is coherent, which is why nobody notices" (Fig 2 :34).
   A self-consistent freeze point defined by the rewiring rules alone is "a convention that decides
   an outcome" (Fig 10 :47), not a settlement.

3. **The loop sign decides whether the cycle closes.** Fig 12 :121: "cycle. The output re-enters as
   input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
   The figure supplies the variable but not the direction; strong and symmetric coupling giving
   stable locking, and weaker or asymmetric coupling giving metastability, is imported from world
   sources S2 and S3 and marked `single-source`.

4. **A composed structure must be settled and admitted.** Fig 12 :106: "Nothing composes over what was
   never admitted as a part." Fig 12 :103: "A settled molecule becomes an atom for whatever composes
   over it." Without settlement, continued rewiring is a search through arrangements inside a closed
   reach: "infinite effort inside a finite reach" (Fig 13 :117-118).

5. **Continual reorganization has two distinct sources.** Residual pressure from the ground, and an
   internally manufactured gradient: Fig 5 :46, "When nothing is scoring, the drive manufactures a
   gradient." Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically
   curious and produce nothing." These must not be averaged into one cause.

6. **Convergence must be measured per slot.** Fig 1 :19: "The residual is indexed by object slot, not
   aggregated." Fig 1 :13: "a global R near zero with one live slot residual is a legal state". Fig 1
   :22: "Aggregating across slots is how a live signal disappears into an average." A network-wide
   edge-change rate going to zero is not a convergence verdict.

7. **Maintenance changes the verdict.** Fig 11 :63: "Which is why a managed ecosystem is permanent
   work rather than a solved state." Unmaintained settling is "what the ground kept" (Fig 11 :15). A
   test harness is a substituted habitat, so "a synthetic solve proves wiring and never capability"
   (Fig 11 :70).

## 3. The honest limit: no internal convergence criterion

`THE_FORMULA.md` (Closure):

> **"No convergence criterion: the loop stops only when R stops arriving, which is either a perfect prediction or a closed channel, and from inside those look the same."**

So "converged" is a `candidate` verdict. The framework can state the shape of the conditions but
cannot certify, from inside the model, that the residual stopped because the network settled rather
than because a metric saturated or the channel to the ground died (Fig 10 :24-28). This is a `gap`,
recorded explicitly. Per Fig 13 :134: "Unreachable is a verdict here, not a silence".

## 4. What it explicitly does not say

- Not a numeric threshold, a critical exponent, or a stability theorem. Those are names owed by a
  ground we did not consult.
- Not that all continual reorganization is pathological. Metastability with dwells and escapes is a
  distinct regime, corroborated in S2 and S3.
- Not that a frozen network is a settled one. A frozen convention is not a ground settlement.
- Not that a simulation proves a real network converges. A substituted habitat proves wiring only.
- Not `grounded`. No experiment or dataset was run in this derivation.

## 5. What would settle it

The ground, through a source-discriminating instrument, not further argument. *The Hard Problem is
About Source* (Isaiah N, 2026-08-28): an instrument that reads green "cannot comment on the source";
the spectrometer, not an argument, resolved the source. Here:

1. **Per-slot trend test:** does positive residual at every node or link actually trend to zero
   against a reference that does not update, rather than being pooled into a global average?
2. **Channel test:** can an instrument from outside the frame show that the channel to the ground is
   still open when the global reading saturates? This is the F1 gap.
3. **Sign intervention:** under a declared sign convention, does flipping the cycle sign take the
   system from locking to metastability? That would ground the imported direction of F3.
4. **Manufactured-gradient test:** with the curiosity branch off and per-slot residual at zero, does
   rewiring stop? If not, F5 needs revision.
5. **Standing falsifiers:** a live slot coexisting with a correct convergence verdict; settlement
   against a self-updating reference; a frame that tells perfect prediction from a closed channel
   using only its own instruments; a maintained network that reaches a solved state with no work.

## 6. The honest stop

**Unreached, not unreachable.** The answer stops at the limit of the instruments available in this
simulated derivation. The lineage is recorded so the stop is checkable. Fig 4 :30 requires the
round-trip gap R_T to be measured rather than assumed; treating the formula as identical to the
metalaws would set R_T to zero and be the dead-reckoning error. The shape is stated; the name is owed
by a ground.

## 7. One-paragraph version for outreach

> The Tether does not give a critical rewiring rate for adaptive networks. It says the conditions are
> a union, not one lever: the reference the network ranges against must not itself update, the
> rewiring loop must close under its sign, a composed structure must be settled and admitted before
> later structure can build on it, and convergence must be read per node or per link rather than as a
> network-wide average. Continual reorganization has two sources, residual pressure and a gradient
> the system manufactures when nothing is scoring, and a maintained network is permanent work rather
> than a solved state. The framework also states a limit: it has no internal convergence criterion,
> because a settled residual and a closed channel look the same from inside the frame. So "converged"
> is a `candidate` verdict until an outside instrument shows the channel is still open. That is a
> shape, a set of refuters, and an honest stop, not a threshold.
