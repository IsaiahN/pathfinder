# Outreach draft - validate the output first, then decide about the theory

**Use:** one to one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the three checkable sub-claims in `08_expert_verification_packet.md` survive a check by someone who has not read the framework. The output must survive validation or the two-stage offer collapses on contact.

---

**Subject:** Check one output on continual learning before you decide whether the theory is worth reading

> Hi [name],
>
> I have one specific output about continual learning that I would like you to check against what you already know. I am not asking you to read the theory first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`).** The question "can AI systems learn continuously without forgetting or becoming unstable?" is two questions with two different anchors, not one. "Forgetting earlier knowledge" is a fall in what the system can still reach on an old task while its stored record keeps growing. "Becoming unstable" is the system drifting because the thing it grades itself against has started to move with it, or because the channel to that thing has decayed. A method that fixes one leaves the other standing.
>
> The shape claim, written before I ran the derivation:
>
> 1. Measure the residual per previously learned task-slot, not as an average accuracy. A global score near zero with one dead old slot is a legal state, and averaging is exactly how that signal disappears.
> 2. What must be retained across tasks is a reapplicable method or a head start, not a recording of one occasion. Positive transfer is composition over a term the ground already paid for.
> 3. Stability is maintained contact with a reference that does not change when the learner pushes on it. A learner graded only on its own previous predictions is a mirror chain; coherence is the symptom, not safety.
> 4. A task switch is a substitution of one habitat for another. What you failed to reproduce is invisible until the old goal is retested.
>
> **What I am not claiming.** I am not claiming a universal no-forgetting guarantee, a stability-plasticity ratio, or that replay, regularization, or parameter isolation is *the* answer. The framework returns a shape, not a name. Naming an algorithm is a binding from the machine-learning literature, not a derivation, and it carries zero evidentiary weight until provenance is shown. I am not claiming that a benchmark score establishes deployed capability; a test harness is a substituted habitat.
>
> **What would refute the shape claim (written before this email):**
> 1. per-slot reach on all old tasks stays non-decreasing under unbounded sequential updates with no replay, no consolidation, no capacity growth, and an independent ground;
> 2. when the reference updates on the learner's own outputs, reach on an independent ground is preserved rather than drifting coherently;
> 3. a positive transfer is demonstrated from a term whose ground never paid, or a settled capability cannot be composed over by a later task.
>
> If any one holds, the shape claim is wrong and I will retract it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Canonical figures README and usage rule (public repo): https://github.com/IsaiahN/tether/tree/general-agent/figures
> - A comprehensive survey of continual learning (Wang et al., 2024): https://arxiv.org/html/2302.00487
> - Continual Learning and Catastrophic Forgetting (van de Ven, Soures and Kudithipudi, 2024): https://arxiv.org/html/2403.05175
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a continual-learning problem you know well and can check against a ground. Write down what would refute your result *before* you run it: the framework's own rule is that a loop cannot check the direction of its own question. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Each frame ranges against the ground separately. |
| Split forgetting from instability before answering | Fig 9 :4-5 and Fig 9 :55-57: a bundled problem is a union of overlapping conditions, not one hard question; a single lever leaves the intersections standing. |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | A falsifier written before the run is a design instrument. It is in the email before any theory link. |
| Mode stated on the claim | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| Per-slot residual, not average accuracy | Fig 1 :19 and Fig 1 :22 - the residual is indexed per slot; aggregation is how a live signal disappears. |
| No algorithm named as the answer | Fig 9 :32 - *"you get a kind of thing, never the answer itself"*; imports need a source gate and a shadow test (Fig 8 :50-52). |
| Benchmark caveat stated | Fig 11 :70 - a test harness is a substituted habitat; a synthetic solve proves wiring, never capability. |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Offer the formula as a method to reuse | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask users to state their own ground and refuter | Formula, "Direction": a frame cannot check the direction of its own question because the sought-for shape is not a term it holds. |
| The whole packet is labelled a simulation | *The Recursive Self-Improvement Trap*: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* |

---

## Distribution note

The first contact carries the residual and its refuter only. The three links come after the recipient has recorded a verdict on stage 1. Later agreement is never pooled as corroboration (Fig 2 :40 - *"agreement about the world is worthless when the agreeing frames share an evidence pool"*). One to one, no bulk send, no opt-out suppression.
