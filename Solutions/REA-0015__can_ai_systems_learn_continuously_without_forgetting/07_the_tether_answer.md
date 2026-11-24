# The Tether's answer on continuous learning

**Mode: `specified` on the four per-domain verdicts, `general` on the union structure, `gap` on the universal no-forgetting guarantee. Not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` §7), not a ground reading.

## 1. The residual it answers

The question bundles two failures with different anchors. "Forgetting earlier knowledge" is a fall in what the system can still reach on an old task while its stored record keeps growing. "Becoming unstable" is drift or lost touch: the reference the system ranges against has started to move with it, or the channel carrying contact has decayed while the ground did not. A single method can fix one and leave the other standing, so the question is a union compound, not one hard question (Fig 9 :4-5, Fig 9 :55-57). Verdicts are kept per domain and never averaged into one number.

## 2. The four domain verdicts

**D1, library and reach (`specified`, triangulated).** Forgetting is a fall in reach, not a deletion. Fig 6 :42: *"What is recorded only grows. What is reachable is derived, and it can fall."* Fig 6 :43: *"So the closure and the reach are two quantities: one monotone, one not."* Fig 5 :72: *"and a library that grows is not a reach that grows."* A learner can add terms and lose reach. The metric must therefore be per-slot reach against an old task's ground, not library size or average accuracy. No figure line guarantees reach never falls.

**D2, ground and channel (`specified`, triangulated).** Stability is maintained contact with a reference that does not update. Fig 2 :33-34: *"The anchor must not update. If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."* Fig 10 :24: *"the ground does not decay, the channel does"*. Fig 11 :39-40: *"capability is a property of agent-and-habitat, never of the agent alone."* A learner graded only on its own previous predictions is a mirror chain, and coherence is the symptom rather than safety.

**D3, habitat and task sequence (`specified`, single-source on the figure side, corroborated by low-overlap world sources).** A task switch substitutes a habitat. Fig 11 :67: *"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."* Fig 11 :68: *"what you failed to reproduce is invisible until the goal fails"* Retention carries methods and head starts, not recordings of one occasion (Fig 4 :22-25), and positive transfer is composition over a term the ground already paid for (Fig 5 :69-70, Fig 12 :104). Refusal is required as well as accumulation, because a vocabulary without negation can only accumulate (Operators :58).

**D4, verification and metric frame (`general` structural, triangulated).** A global accuracy near zero with one dead old slot is a legal state (Fig 1 :13), the residual is indexed per slot (Fig 1 :19), and aggregation is how the live signal disappears (Fig 1 :22). *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* (Fig 9 :60). A benchmark is a substituted habitat and proves wiring, not capability (Fig 11 :70).

## 3. The shape, in one block

A continual learner is checkable by four conditions:

1. **Per-slot residual.** Report R on every old task-slot against that task's frozen ground, separately. Never accept a pooled average as the witness.
2. **Method, not recording.** What crosses a task boundary must be a reapplicable arrangement recorded where the next task can look it up. A replay buffer is a head start by use, not a recording by data structure; it becomes the forbidden thing only when a replayed occasion is treated as the answer.
3. **Non-updating anchor and reachable channel.** The reference must not change when the learner pushes on it. Held-out tests are proxy anchors, not the ground; if they are used to update the model they become frames.
4. **Reproduced contact.** At each switch, enumerate what the old goal required and reproduce it. What you failed to reproduce is invisible until the goal fails.

Plus a refusal operator: when a new task refutes an old term, the learner owes a term that says so, which removes the old term's standing to be composed over without deleting anything (Fig 5 :50-56, Operators :58).

## 4. What it explicitly does not say

- Not a universal "yes". No figure line guarantees no forgetting for all task streams.
- Not a universal "no". EWC and interleaved replay are real designs that slow reach decay; the frozen system is not the only safe option.
- Not a stability-plasticity ratio. The two read in different currencies and do not add (Fig 12 :125-127).
- Not an architecture name. Replay, regularization, parameter isolation and progressive networks are bindings from the machine-learning frame, not derivations (Fig 9 :32).
- Not that a benchmark score establishes capability. A test harness is a substituted habitat (Fig 11 :70).
- Not grounded. No independent old-slot ground reading was taken in this derivation.
- Not a claim that the figure set is the only true account of learning. A frame cannot certify its own limit.

## 5. The gap, stated plainly

No figure line governs the exact stability-plasticity ratio, the identity of the retaining mechanism, or a universal no-forgetting guarantee. The figures return a shape: retain methods, measure per slot, keep the anchor unreachable-by-update, reproduce the habitat. Naming more than that is a preference held as a term, and the Formula warns that such a preference predicts nothing and cannot be checked by the loop. The honest report is `gap` with the kind of thing that would close it, not silence and not an invented number (Fig 9 :32, Fig 13 :134). World corroboration that the shared-parameter problem is NP-hard (reported inside Wang et al., citing Knoblauch et al. 2020, not opened separately this session) points the same direction, but corroboration is not a verdict.

## 6. What would settle it - the ground

A source-discriminating instrument, not a further argument. *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here:

- **Reach discriminator:** per-slot residual on every old task against a ground frozen before the sequence began, with no reuse of that ground for updating. If reach stays non-decreasing under unbounded updates without replay or capacity growth, D1 breaks.
- **Drift discriminator:** compare against an independent frame that did not share the training data or the metric. If a self-graded learner preserves reach on that independent frame, D2 breaks.
- **Source-discriminating test for a score fall:** an instrument that separates reach decay, channel decay and habitat substitution on one run. Today a held-out accuracy curve cannot do it; that is why the question looks like one yes/no problem.
- **Transfer test:** positive transfer from a term whose ground never paid, or failure of a settled molecule to become an atom, breaks D3.

## 7. The honest stop

**Unreached, not unreachable in principle.** The gap is a shape-not-a-name gap and an unreachable-at-this-budget gap in different places: the universal guarantee is not derivable from the six-term set (underivable), while the specific mechanism for a given learner is reachable in the literature but not read off a ground by this derivation (unreached at this budget). Those are different facts with different instructions (Fig 8 :40-43). The answer stops at the limit of the available instruments and records the lineage. *"Indiscernibility is not identity."*

## 8. One-paragraph version for outreach

> The Tether does not answer yes or no to "can AI systems learn continuously without forgetting", because the question bundles two failures with different anchors. Forgetting is a fall in reach on an old slot while the stored record keeps growing, so the witness must be a per-slot residual against a frozen ground, not an average accuracy. Instability is incoherent contact: drift when the reference updates on the learner's own output, or lost touch when the channel decays while the ground does not. What has to survive a task switch is a reapplicable method or a head start, not a recording of one occasion; positive transfer is composition over a capability whose ground already paid, and a new task that refutes an old term needs a refusal, not just another addition. A task switch substitutes a habitat, so what you failed to reproduce stays invisible until the old goal is retested. The figures return that shape, not a stability-plasticity number and not the name of an algorithm; those are declared gaps. What is offered is the shape, the pre-registered refuters, and the instruments that would close it. The old slots stay open until a ground settles them.
