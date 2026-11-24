# Outreach draft - validate the output first, then decide about the theory

**Use:** one to one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the stage-1 shape below survives a refuter from the recipient. The claim must survive validation or the two-stage offer collapses on contact.

---

**Subject:** Check one output about prior knowledge before you decide whether the framework is worth reading

> Hi [name],
>
> I am working on one narrow question in inference: when does prior knowledge help a learner, and when does it lock the learner into a mistaken model? I have one specific output I would like you to check against what you already know. I am not asking you to read the theory first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** the discriminator is not how much prior knowledge a learner has. It is the relation the prior holds to four things. (1) Whether it crossed as a reapplicable method, a head start that makes the next search cheaper, rather than a recording of one past success that gets replayed. (2) Whether it is bound as an ordinary term that predicts and can be refused, rather than an expected answer-shape that accrues no residual and cannot be seen by the checking machinery. (3) Whether it ranges against a ground that does not change its answer when the prior pushes on it. (4) Whether the residual is measured per case against that ground, not averaged into one accuracy number.
>
> Under those four conditions the prior improves inference. When any of them fails, especially the second and third, the same prior locks the learner in: the learner keeps using a once-successful method, misses a simpler current solution, and because the prior has quietly become the standard against which observations are judged, the drift is coherent and invisible from inside.
>
> **What I am not claiming:** that I can give you a number `w*` at which a prior flips from helpful to harmful. The framework returns a shape, not a name, so the numeric threshold is an honest gap until an experiment ablates the prior against a fixed ground and measures the residual per case. I am also not claiming that more prior is worse, or that priors are generally dangerous. I am not claiming this derivation is settled by experiment. It is a simulated derivation checked for internal consistency, not a ground reading.
>
> **What would refute the shape claim:**
> 1. a learner improves its per-case residual while holding the prior as an unbound expectation that predicts nothing and cannot be refused;
> 2. a learner whose prior is allowed to change what counts as the ground still tracks an independent measurement and self-corrects;
> 3. a recording, replayed unchanged on a genuinely novel case, reliably produces a new success rather than a repetition;
> 4. a single global accuracy number predicts per-case correction as well as the per-case vector.
>
> I wrote these down before sending this. If any one holds, the shape is wrong and I will narrow or withdraw it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - The canonical figure text with line numbers (local extract, branch material): `FRAMEWORK/reference/03-FIGURES_TEXT.md` in the public repository tree, https://github.com/IsaiahN/tether/tree/general-agent/figures
> - The canonical usage rule: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - The eight-step loop: `THE_FORMULA.md` in the same folder
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, because the framework's own rule is that a loop cannot check the direction of its own question, and the write-up warns that outputs can be contrived to fit the formula. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Shape claim and refuter first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Fig 2 :45 - *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat rule - *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on every claim | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| No `w*` number asserted | Fig 9 :32 - *"you get a kind of thing, never the answer itself"* |
| Per-case, not average | Fig 1 :22 - *"Aggregating across slots is how a live signal disappears into an average."* |
| Method versus recording stated before theory | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Non-updating ground stated as a condition | Fig 2 :33 - *"The anchor must not update."* |
| Agreement from shared prior disqualified | Fig 2 :40 - *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* The ask gives the claim a budget to be tried; it does not ask for endorsement. |
| Offer the formula as a method to reuse | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask users to state their own ground and refuter | Formula, "Direction" - a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."* |

**Two-stage discipline.** Stage 1 is the shape and its refuter; the recipient's verdict is recorded before any theory is shown. Stage 2 is opt-in only: the links go out after the stage-1 verdict, and later agreement is never pooled as corroboration (Fig 2 :40). Stage 3 offers the formula as a method, with the instruction that each user writes their own refuter and labels their own mode.
