# Outreach draft - check a test-design criterion before you decide about the theory

**Use:** one to one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** the stage-1 output below must survive the recipient's check before any theory is shown. If the shape claim has a defect, the two-stage offer collapses on contact.

---

**Subject:** One criterion for an OOD test, checked before you decide if the theory is worth reading

> Hi [name],
>
> I have one specific claim about how to test out-of-distribution learning. I would like you to check it against what you already know. I am not asking you to read a theory first, and I am not asking you to agree with anything. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** a convincing OOD test is not a larger, harder held-out set from the same generator. It is a test whose conditions are enumerated from the deployment habitat, whose anchor is a real outcome that does not move when pushed, which puts the learner in contact with a closure that differs from its training closure, which reports the residual per environment instead of as one average, and whose test pool was chosen before the method authors picked their method. A pass on a synthetic corruption suite proves the wiring works, not that the capability is there. From the framework's own words: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* (Fig 11 :70)
>
> **What this does not say:** that existing benchmarks are worthless, that a particular named metric is the answer, that this is settled by measurement, or that the framework returns the name of the shift that will break a given system. It returns a shape, not a name. Convergent derivation and adopted import look identical in the contents and only the record separates them.
>
> **What would refute the shape claim:**
> 1. a synthetic suite whose scores prospectively predict deployment performance across independently sampled real shifts, with no shared generator;
> 2. a model-only change that moves OOD ground performance while measured contact with the deployment habitat is unchanged;
> 3. a method that expands OOD reach solely by more search inside a fixed training closure, with no new atom and no contact with a differing frame, and still passes a fresh real-shift ground test;
> 4. a single averaged score that both reports OOD failure and tells an engineer whether to search longer or import.
>
> I wrote these down before sending this. If any one holds, the shape is wrong and I will retract it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the public sources. The figures, not my summary of them, are the authority.
> - The figures and the formula, branch `general-agent`: https://github.com/IsaiahN/tether/tree/general-agent/figures
> - The canonical figures README: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - The architecture essay, which includes the ARC-AGI ground story: https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
> - A benchmark built from real shifts rather than synthetic ones: https://wilds.stanford.edu/ and https://arxiv.org/abs/2012.07421
> - Evidence that synthetic robustness need not transfer: https://arxiv.org/abs/2007.00644
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on an evaluation problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Shape claim first, theory second | Fig 10 :52, *"Bring a characterised residual, never the source."* Fig 2 :45, frames range against the ground separately. |
| Do not ask for agreement | Fig 2 :35, *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | the seat-reasoning rule: a falsifier written before the run is a design instrument, not only an honesty device. |
| Mode stated on the claim | `THE_FORMULA.md`, *"Mode. general · specified · grounded. State which."* |
| No theory before verdict recorded | Fig 10 :42, *"A verifier that can reconstruct the claim cannot verify it."* |
| Links only after stage 1 | Fig 4 :22, *"Only methods cross up. Only head starts come down."* A recording sent first is a description of one occasion, not a generator. |
| Per-environment residual, not an average | Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average."* |
| Shape, not a named benchmark | Fig 9 :32, *"you get a kind of thing, never the answer itself."* |
| No "bombshell", no "true answer", no "trust" | Prestige can fund an action but cannot settle it; only the ground can settle it (*Recursive Self-Improvement Trap*). |
| Ask the user to state their own ground and refuter | Formula, "Direction": a frame cannot check the direction of its own question. The essay warns the output is only as good as the validator. |

**Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Their verdict on stage 1 must be recorded before any theory is shown, and later agreement is never pooled as corroboration (Fig 2 :40, *"agreement about the world is worthless when the agreeing frames share an evidence pool"*).
