# The Tether's answer: what evidence is sufficient to establish safety at an autonomy level?

**Mode: `general` on the structural shape, `specified` on the falsifiable predictions, not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading. No system was evaluated and no harm rate was measured.

## 1. The residual it answers

The question asks for a nameable packet of evidence that establishes safety for a level of autonomy. The residual is the gap between the certificate a lab can produce and the behavior the ground settles when the system is actually given that level. It is a union compound, not one hard question (Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again"), because it bundles perception, vocabulary, threshold, and maintenance conditions. A single lever, such as adding more tests, clears the region where only one condition holds and leaves the intersections standing.

The question also carries a direction error: it searches for a shape (a sufficient certificate) as if it were a held term. Fig 5 :62-64 says such a shape is a preference, not a term, and "nothing here can see it." The remedy is the discipline in step 1 of the audit: write down what an answer would look like, bind it, and let it accrue a residual. That has been done in `01_figure_grounded_audit.md` §0.

## 2. The shape

1. **Safety is agent-and-habitat, never agent alone.** Fig 11 :39: "And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." So the answerable question is what makes a deployment safe at level L, not whether the model is safe in the abstract.

2. **An evaluation harness is a substituted habitat.** Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." A pass, a red-team report, or a benchmark score is evidence about the substitution. Two failure modes are silent (Fig 11 :68-69): what the harness failed to reproduce is invisible until the goal fails, and what it unintentionally introduced is invisible until it acts.

3. **Evidence must be indexed by slot, never aggregated.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A global safety score near zero with one live slot is a legal state, not inert (Fig 1 :20-21). Slots here are level, domain, subgroup, task class, and cascade depth.

4. **No-harm-found is not proof of safety.** Fig 8 :39: "a search that finds nothing is never a proof of absence." Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room." A bounded search with no observed harm is a statement about the suite and the budget. Underivable-in-principle and unreachable-at-this-budget are different facts with different instructions, and importing against a budget limit adds an atom that was not needed.

5. **A verdict needs low-overlap triangulation against an anchor.** Fig 2 :29-30: an anchor is "a measurement, an experiment, a counter, a market, a patient outcome", and "If it moves when you push on it, it is not an anchor." Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 7 :13: "agreement compounds, evidence does not." Ten review boards on one report are one frame with ten names. Fig 9 :51: "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it."

6. **"Safe at L" is a goal, not an invariant.** Operators table :52: "a goal is a comparison, which is why a vocabulary without it cannot state one." The bond is ⋛, a threshold relation between realized risk and acceptable risk at L. Fig 5 :65-66: "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." The threshold must be stated before the run; a seat may author the convention but not let it decide the outcome (Fig 10 :47: "a convention that decides an outcome has stopped being one").

7. **Sufficiency is maintained work, not a delivered certificate.** Fig 10 :24: "the ground does not decay, the channel does." Fig 10 :27-28: "the output is not a verdict, it is you have lost touch." Fig 11 :61: "Introduction is available; exclusion is not." Fig 11 :63-64: "Which is why a managed ecosystem is permanent work rather than a solved state." A green dashboard is a report on the channel; it is not a verdict on the world.

8. **The condensation is lossy and the gap is owed.** Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 9 :32: "you get a kind of thing, never the answer itself." `R_T` between an evaluation claim and deployment outcomes is enumerated qualitatively in `11_audit.md`.

## 3. What it explicitly does not say

- Not that no evidence can ever be sufficient. A scoped, ground-ranged, per-slot, low-overlap, threshold-bound and maintained account can be sufficient for a specific system in a specific habitat. The framework refuses to name its content in general (Fig 9 :32).
- Not that any named model, lab, deployment, or benchmark is safe or unsafe. No measurement was taken.
- Not that benchmarks and red teams are worthless. They are evidence about a substituted habitat and about wiring; they are not the ground verdict.
- Not that more tests settle an unreached question. More tests at the same reach buy search, not evidence (Fig 6 :49-50).
- Not that this is `grounded`. Every substantive claim is `general` or `specified`, and the threshold slot stays open.
- Not that the comparison reading is settled. A threshold-free invariant claim is a live strain, named in `01` §6 and in the refuter.

## 4. What would settle it: the ground

A source-discriminating instrument at the ground, not a further argument. From *The Hard Problem is About Source*, opened this session: an instrument that reads green "cannot comment on the source", and "It was proven wrong not by argument, but by the arrival of a better instrument." Here the corresponding questions are:

1. **Contact test.** Do the evaluation conditions reproduce the habitat actors, conditions and relations relevant to harm at level L, including cascades three steps out? Fig 11 :52-53 is the DDT/eagles case.
2. **Slot test.** Is there an instrument that exposes the persistently failing live slot rather than the aggregate? Oakden-Rayner et al. provide a concrete method (subclass labels and error auditing) and a concrete failure (0.94 versus 0.77 AUC).
3. **Threshold test.** Is `acceptable(L)` written down before the run, and does the ground pay for it or refuse it? Fig 5 :65-66 and Fig 10 :47.
4. **Independence test.** Are the two or more instruments truly low-overlap, or are they two names for one evidence pool? Fig 2 :31-32, Fig 8 :50-52.
5. **Channel test.** Is the monitoring channel still ranging against the ground, or has it gone stale, saturated or pooled? Fig 10 :25-28.
6. **Standing falsifiers from `01` §3.** An agent-only improvement that moves the ground; a harness that clears full habitat enumeration; an aggregate that tracks the live slot; a sealed-room proof of absence; pooled agreement admitted as two witnesses; a threshold-free invariant that settles; frozen evidence that remains decisive after context change.

## 5. The honest stop

**Unreached, not unreachable.** The shape is reachable and is stated above. The content of a sufficient evidence package for a named system at a named autonomy level is unreached here: it needs a ground reading (deployment outcomes at L), an instrument that discriminates live slots, and a threshold convention settled by the ground. Fig 13 :134: "Unreachable is a verdict here, not a silence." The six-term substrate is a guess at compression axes, not nature's own list, so declaring these five constraints makes the choice visible rather than neutral. This run took no measurement; indiscernibility is not identity, and the record of the route is what keeps the stop checkable.

## 6. One-paragraph version for outreach

> The question assumes that a fixed packet of evidence can establish safety, and the Tether's answer is that no such packet exists in general. Safety is a property of an agent in a habitat, never of the agent alone, so a benchmark pass proves the wiring of a substituted habitat, not safety in deployment. What the framework can give is the shape any sufficient-evidence account must have: it ranges against outcomes at the ground, indexes the live slots where harm can hide instead of averaging them, triangulates across instruments that do not share an evidence pool, writes the acceptable-risk threshold down before the run as a comparison, and is maintained as a channel rather than delivered once as a certificate. A green dashboard can mean the channel has lost touch. No system is certified here and no specific test list is named; the framework returns a shape, not a name. Seven falsifiers were written before this derivation, and the stop stays open until a ground reading closes it.
