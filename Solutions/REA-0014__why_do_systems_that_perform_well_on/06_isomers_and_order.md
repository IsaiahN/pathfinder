# Union, order and isomers: the supporting derivation

**Mode: `general` on the structure, `specified` on the transfer prediction.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The main audit established that a benchmark score is a substituted-habitat reading and that capability is agent-and-habitat. Two supporting questions remain: (1) is the "benchmark failure" one problem or several, and in what order must they be attacked; (2) what is the structural relation between a system-in-benchmark and the same system-in-changed-context: a different amount of the same thing, or a different substance?

## DOMAIN CENSUS

Atoms held: a system S, a task T, a metric m, a habitat H, a ground g. Bonds held: the seven, plus negation. No new primitive is needed to explain the failure; what changes is the arrangement and the habitat. Anchor: the ground g for the task, which is nameable and does not move with the score.

## DERIVATION

### Q1: Union or partition?

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

*The Library of Babel*: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"

The conditions in the bundle:

- C1 **shortcut cue**: the metric is satisfied by a correlate that the habitat supplies.
- C2 **underspecification**: several in-domain-equivalent predictors exist and the benchmark cannot tell them apart.
- C3 **metric saturation**: the channel to the ground is dead while the number stays high.
- C4 **habitat substitution**: conditions the goal required were not reproduced, and new actors were inherited.
- C5 **missing vocabulary**: the system has no terms for what the changed situation affords, so no objective can be stated there.

These overlap. A shortcut cue is often also a missing-vocabulary case (the system never represented the real feature). Saturation is often also habitat substitution (the metric stopped discriminating because the habitat stopped varying). A partition would treat them as five separate problems and five separate fixes. A union says the intersections are categorically different: a case in two conditions is not a harder case of either. Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

**Verdict:** union. Split before searching (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again.").

### Q2: What is the dependency order?

Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

Mapped to this question:

| link | what it is here | instrument status |
|---|---|---|
| 1 perception | can the system tell C1 from C0? | usually has an instrument (a shift detector) |
| 2 vocabulary | does it have terms for what C1 affords? | **no instrument, the usual break** |
| 3 objective | can it say what progress in C1 would mean? | derived from 2, so unread if 2 is broken |
| 4 planning | a route to that objective | measurable only if 3 exists |
| 5 learn and carry | name what worked, verify, carry | measured by the benchmark, which is above the break |

Fig 3 :26: "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Most robustness work lands at link 5 (more data, more regularization, harder items), because that is where the measurements already exist. Fig 3 :30: "Most improvement effort in practice lands above the break, because that is where the measurements already exist." That effort cannot rescue link 2 (Fig 3 :19: "Optimising a link that already works cannot rescue one that does not.").

**Order:** ground first, then habitat enumeration, then vocabulary/objective instrument, then metric, then model. Dependency order, not importance order.

### Q3: What is the order of the membrane transform?

Fig 4 :9: "carry up"; Fig 4 :11: "send down." Fig 4 :22: "Only methods cross up. Only head starts come down."

The score is a reading carried up from the benchmark habitat. A claim about capability in C1 is a concretization sent down into a different habitat. Fig 4 :28: "Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent."

So the order is: habitat to score (abstraction, lossy), then score to deployment claim (concretization, lossy), then measure the gap. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The symbols table defines the quantity: `R_T = gap(x, (T_E ∘ T_A)(x))`. The gap is non-negative by construction in the abstract interpretation reading and is not an error to eliminate (Fig 4 :31: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold").

**Falsifier written before the run:** if a score-to-deployment round trip is information preserving for the capability of interest on a real habitat change, `R_T = 0` and this part of the derivation fails. It has not been measured, so this remains `specified`.

### Q4: Are the benchmark case and the changed-context case isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Write the two cases over the shared atom set {S, T, m, H, g}:

- Benchmark case: S composed with T through m in H0, reported against g0 (where g0 is the benchmark's own proxy ground).
- Deployment case: S composed with T through m in H1, reported against g (the real task ground).

The ingredients are largely the same. What differs is the bond arrangement and the habitat, and the substance differs decisively: a high score in one, a collapse in the other. Over the full shared atom set the two are **isomers** in the figure's sense. They are invisible to a formula that records only the atoms ("a system on a task with a metric"), which is exactly why a leaderboard row cannot tell you which substance you have.

Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Benchmarks as a family share the functional group "S through m to a report"; the qualifier (which habitat, which ground) says which member. A report that lists only scores is listing members of a functional group as if they were one substance.

### Q5: What does this say about "small"?

A "small change in context" is small in the description of H, and large in the bond arrangement that the system must compose. Fig 12 :95: "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond." That is the precise structural reason a tiny contextual perturbation can produce a categorical failure: the notation (the benchmark score) registers the ingredients and not the arrangement, so nothing in it signals that the substance changed.

## CONCLUSION

The failure is a **union compound** of overlapping conditions, to be split before search and ordered by dependency with the unmeasured vocabulary/objective link first. The benchmark case and the changed-context case are **isomers over a shared atom set**: same system, task and metric, different habitat and bond arrangement, different substance, invisible in a score-only formula. The honest measure of the difference is the round-trip gap `R_T`, which is required by Fig 4 and has not been measured here. A "small change" is small in the habitat description and large in the composition, which is why the score cannot warn of it.

**Falsifier, written before the run:** if either case can be written without an atom the other requires (for example, deployment with no metric, or the benchmark with no ground proxy), the isomer claim fails and the weaker functional-group reading stands instead. If `R_T` measures zero on a real habitat change, the round-trip part fails. If the five conditions turn out to be independent rather than overlapping, the union claim fails and they should be searched as a partition.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and the local essays listed in `05_what_shape_means.md`. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order, middle link, no instrument), Fig 4 (membrane direction, lossy transform, round trip), Fig 8 (overlap spends surplus), Fig 9 (union versus partition, unbundle before search), Fig 11 (habitat substitution), Fig 12 (isomer, functional group, bond carries the difference, arrangement invisible in the formula), Symbols table (`R_T`). Strained after re-census: none; the one open item is the unmeasured value of `R_T`, named rather than hidden.
