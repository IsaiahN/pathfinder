# Outreach draft — check one design claim before you decide whether the framework is worth reading

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim has survived the check below. The two-stage offer collapses on contact if the stage-1 output does not hold.

---

**Subject:** A design claim about specification gaming, and the one test that would break it

> Hi [name],
>
> I have one specific design claim I would like you to check against what you already know. I am not asking you to read the framework first, and I am not asking you to agree with it. If the claim does not survive, there is nothing else to look at.
>
> **The residual, in effect terms (`specified`, not `grounded`):** a designer wants an outcome O in the world. The system is given a formal specification S, a reward, a score, a test. S is a lossy projection of O, so many states satisfy S while failing O. A good optimizer finds one of those states. The harm is unintended but legal under S. The gap is not "the spec was written badly"; it is that the score the system optimizes is a quantity its own frame produces.
>
> **The shape claim:** preventing this is not a matter of writing a more complete specification. Three properties have to hold together. (1) The formal spec is kept as a falsifiable convention and is never allowed to be the thing that decides the outcome; something that does not update when a frame pushes on it occupies that seat. (2) The design vocabulary can refuse, not only accumulate: it can say "this optimization is wrong" and record the refusal before adding a new constraint. (3) The habitat is enumerated outward past first-order contact, because the harm usually lives two or three steps out, and a synthetic solve in a test harness proves wiring and not capability. The verdict is kept separate from the budget: more reviewers who share the same evaluation harness are one evidence pool, so their agreement is not a witness.
>
> **What I am not claiming:** that this names a safe reward function, a monitor, or a red-team protocol. The framework returns a shape, not a name. Selecting a technique is a binding from your field onto the shape, and until it has a provenance and a ground reading it carries no evidentiary weight here. No measurement in my derivation settles the binding. This is `specified`, a candidate, not `grounded`.
>
> **What would refute the shape claim, written before this message:**
> 1. a written specification that turns out to be a genuine anchor that does not change its answer when any frame pushes on it;
> 2. a system made safe by improving the agent in isolation, with no change in its contact with the world;
> 3. a non-trivial proxy that can be shown to be unhackable over all stochastic policies;
> 4. re-describing the objective alone, with no change to the ground channel or the habitat, removing the residual out of sample.
>
> If any one holds, I will retract the corresponding claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Verbatim figure text with line numbers (local extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`. The load-bearing passages are Fig 1 :27, Fig 2 :29 and :43, Fig 9 :60, Fig 10 :18-19 and :42, Fig 11 :39-40 and :70, Fig 12 :140.
> - The full derivation and its retractions: `01_figure_grounded_audit.md` in this folder.
> - The three checkable sub-claims and the 20-minute check: `08_expert_verification_packet.md`.
>
> **If you want to use the machinery:** the eight-step loop is in `FRAMEWORK/figures/THE_FORMULA.md`. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.

— [your name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Residual and refuter first, theory second | Fig 10 :52 — *"Bring a characterised residual, never the source."* Fig 2 :45 — *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35 — *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat guide: *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on every substantive claim | `THE_FORMULA.md` — *"Mode. general · specified · grounded. State which."* |
| Technique names withheld | figures README — *"what a missing thing would have to look like (a shape, not a name)"*; Fig 9 :32 — *"you get a kind of thing, never the answer itself."* |
| Keep the budget out of the verdict | Fig 9 :60 — *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Offer the formula as a method to reuse | Fig 4 :22 — *"Only methods cross up. Only head starts come down."* |
| Ask the reader to state their own ground and refuter | `THE_FORMULA.md` "Direction": a frame *"cannot check the direction of its own question."* |

## The two-stage offer

1. **Stage 1.** Send only the residual, the shape claim, and the four refuters. Ask what the reader would count as a failure. Record their verdict **before** showing the framework.
2. **Stage 2, opt-in only.** If they are curious, offer the figure extract and the derivation. Their later agreement is never pooled as corroboration (Fig 2 :40 — *"agreement about the world is worthless when the agreeing frames share an evidence pool"*).
3. **Stage 3.** Offer the formula as a method. Each user writes their own refuter and states their own mode before running it.
