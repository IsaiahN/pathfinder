# Outreach draft: check the output before deciding about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim and its refuter in `01_figure_grounded_audit.md` sections 0 and 6 are stable. The offer collapses on contact if the stage-1 output does not survive.

---

**Subject:** One checkable claim about what an AI system learns to prioritize

> Hi [name],
>
> I have one specific output I would like you to check against what you already know about training data, objectives and feedback. I am not asking you to read any theory first, and I am not asking you to agree with anything. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** "what an AI system learns to prioritize" is not one global ranking. It is a per-slot quantity. Given a fixed architecture, the three inputs act differently:
>
> 1. **Training data** changes priority by changing contact. The system is in contact with a habitat it enumerates, not a recipe it composes. Synthetic data and fixed benchmarks are substituted habitats: they can prove wiring and never ground-contacted capability.
> 2. **The objective** is the dependency link that says what would count as progress in the system's own terms. It is a comparison, not extra information. It is also the link that most often has no instrument, so effort spent above it cannot rescue it.
> 3. **Feedback channels** carry the error signal back. The ground at the far end does not decay; the channel does. It goes stale, drops transients, saturates, and pools readings. When that happens the system loses touch with a ground that has not moved.
>
> The three are a union compound, not a ranked list. Feedback labels are data; the objective weights both. A single lever clears the region where only one condition holds and leaves the intersections standing.
>
> **What I am not claiming:** that any one of the three matters most, that training loss or reward-model score is a ground, that human preference settles a factual question, or that more data adds a new kind of term. A self-produced score is frame-internal. Human judgment is the right anchor only for questions that are constitutively about people.
>
> **What would refute the claim:**
> 1. a system with no per-slot structure that still attends reliably to rare live cases;
> 2. a self-produced score that does not move when the frame is pushed and tracks the ground on untrained axes;
> 3. a working standard instrument for whether an objective says what counts as progress;
> 4. a feedback channel that cannot saturate, stale, drop or pool at any resolution;
> 5. human preference feedback that reliably settles a factual question on an axis humans do not measure;
> 6. full separability of the three levers on every slot.
>
> I wrote these down before sending this. If any holds, I withdraw the corresponding part. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - The figures and formula, public and downloadable: https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Worked narrative on contact and source discrimination: https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
> - The author's account of RLHF, ground and reward models: https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52: *"Bring a characterised residual, never the source."* The recipient checks the shape without holding the framework's interior. |
| Do not ask for agreement | Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated once, up front | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| No ranking of the three levers | Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* |
| Human anchor claim narrowed | Fig 2 :38: *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* |
| Links only after a verdict | Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Offer the formula as a method | Fig 4 :22: *"Only methods cross up. Only head starts come down."* |
| Ask each user to write their own refuter | Fig 5 :65: *"make the sought-for shape an ORDINARY TERM"*; a frame cannot check the direction of its own question. |

## The two-stage offer

1. **Stage 1.** Send the shape claim, the per-domain verdicts and the six refuters. Ask what the recipient would count as a failure. Record their verdict before any framework material is shown.
2. **Stage 2, opt-in only.** If they are curious, offer the three links. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3.** Offer the formula as a method to reuse, with the instruction that each user states a ground and writes a refuter before running it.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. As drafted it is a shape with six live refuters, not a settled result. That is the honest state to send.
