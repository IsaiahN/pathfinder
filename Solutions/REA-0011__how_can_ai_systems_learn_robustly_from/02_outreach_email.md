# Outreach draft: check one output before you decide whether the theory is worth reading

**Use:** one to one, or as a cover note attached to a submission through the public venues in
`03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until F1 to F3 in `01_figure_grounded_audit.md` have been stated
with their modes. The output must survive the first question or the two-stage offer collapses on
contact.

---

**Subject:** Check one output about data-efficient learning before you decide about the theory

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not
> asking you to read the theory first, and I am not asking you to agree with it. If the output does
> not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** the framework indexes the learning residual per
> object or task slot and never aggregates it. From that it follows that data efficiency is first
> a support question: with few examples most slots carry no live signal, and a new term is only
> licensed when a positive live residual exists on some slot. The three gates on a new term are a
> product, so a zero on any one of them stops the mint. The second claim is that a learner can only
> compose from atoms it already holds; what few examples do is select among those compositions.
> What descends from prior experience is a head start that makes the next search cheaper, never a
> recording of one past success. Neither claim names an algorithm.
>
> **What I am not claiming:** that a particular method (meta-learning, a Bayesian prior, a
> pretrained representation) is *the* answer. The framework returns a shape, not a name. Naming a
> specific binding is provenance from your field, not a derivation, and until it is provenanced it
> carries no evidentiary weight. I am also not claiming that "robust" is a property of the model
> alone: it is a property of learner and habitat, and a benchmark harness proves wiring, not
> capability.
>
> **What would refute the shape claim:**
> 1. a learner with zero positive residual on the held-out slot mints a term the ground settles;
> 2. few-shot success on a task whose required atom is provably absent, with no import recorded;
> 3. few-shot accuracy holding across a documented habitat substitution while contact is unchanged;
> 4. independence making no difference to whether agreement predicts the ground.
>
> I wrote these down before sending this. If any one holds, that domain verdict is withdrawn. A
> one-line "this fails because..." is more useful to me than agreement. If you would rather not
> engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my
> summary of them.
> - Local verbatim figures with line numbers: `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Public figures repository, branch `general-agent`: https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Canonical figures README: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you
> know well and can check against a ground. Write down what would refute your result *before* you
> run it, and state the mode of what you get. A reported failure is more useful to me than a
> reported success.
>
> - Isaiah

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52: *"Bring a characterised residual, never the source."* Frames range against the ground separately (Fig 2 :45). |
| Do not ask for agreement | Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | A falsifier written before the run is a design instrument. |
| Mode on every claim | `THE_FORMULA.md` mode rule: state which; accepted means the ground settled it. |
| No named winning algorithm | Fig 9 :32: *"you get a kind of thing, never the answer itself."* The README limit is a shape, not a name. |
| Residual indexed per slot | Fig 1 :19 and :22: an average throws away the live signal. |
| Robustness moved to habitat | Fig 11 :39-40 and :70: capability is agent-and-habitat; a harness proves wiring. |
| Links only after the verdict | Fig 4 :22: *"Only methods cross up. Only head starts come down."* A recording sent first spends the reader's independence. |
| No request for prestige or trust | *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Offer the formula as a method | Fig 4 :22-25: methods and head starts cross; replays do not. |

## Stage discipline

Stage 1: the four refuters and the shape claim, with the recipient's expected observation asked for
before any theory. Stage 2, opt in only: the three links, with the note that the figures, not the
summary, are the authority. Stage 3: offer the formula as a method to reuse, with each user writing
their own refuter and mode. Record the stage-1 verdict before stage 2 is shown; never pool later
agreement as corroboration (Fig 2 :40).
