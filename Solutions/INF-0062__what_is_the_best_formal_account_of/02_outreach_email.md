# Outreach draft: check the output first, then decide about the theory

**Use:** one-to-one, or as a cover note attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim in `01_figure_grounded_audit.md` survives the refuter list in section 4. If the stage-1 claim does not survive, there is nothing else to look at.

---

**Subject:** One checkable claim about learning from sparse data, before any theory

> Hi [name],
>
> I have one output I would like you to check against what you already know. I am not asking you to read a theory first, and I am not asking you to agree with anything. If the output fails, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`).** When data are sparse, noisy, and unevenly informative, an adequate formal account cannot use a single pooled loss. It has to keep the residual indexed by slot. A global number near zero with one live slot is a legal state, and averaging across slots is how the live signal disappears. A new term is admitted only when stating it plus what remains unexplained costs less than what was unexplained before; that is the description-length bargain, with three guards as a product, one of which is that some slot must carry positive mass. Two prices are held apart: bits for the description, actions for finding out whether it holds. They do not add. And a slot with no data is reported as unreached at this budget, not as underivable in principle; those are different facts with different instructions.
>
> **What this is not.** It is not a claim that one named theory wins. The framework from which this comes names minimum description length as its admission test, but it returns a shape, not a name. PAC and sample complexity price the budget; Bayesian updating is a mechanism for weighting prior against history; active learning changes which data arrive. None of those is settled as "best" by anything I can show you here.
>
> **What would refute it, written down before this message:**
> 1. an account that minimizes one pooled loss and still identifies the live slot when that slot's contribution is smaller than the noise in the others;
> 2. a term admitted without paying the description-length bargain that still improves ground prediction;
> 3. one scalar that prices description length and settling actions with no loss on either axis;
> 4. a case where two frames on one evidence pool, with no separate anchor, settle a question about the world.
>
> If any one holds, the shape claim is wrong and I will retract it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Local verbatim figure text with line numbers: `FRAMEWORK/reference/03-FIGURES_TEXT.md` in the project folder.
> - Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
> - The eight-step loop and the mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
>
> **If you want to use the machinery:** run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it. The framework's own limit is that a loop cannot check the direction of its own question, and its author warns that outputs can be simulated rather than tested. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked. |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Refuter before conclusion | Formula, step 2 and Fig 5 :65-66: bind the sought-for shape as an ordinary term so it can be refused. |
| Mode on the claim | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| No claim that MDL or any named theory wins | Fig 9 :32 - *"you get a kind of thing, never the answer itself."* |
| Two currencies kept apart | Fig 12 :125 - *"A composition costs in two currencies, and they do not add."* |
| Unreached rather than absent | Fig 8 :39 - *"So a search that finds nothing is never a proof of absence."* |
| Sources after the verdict | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask for a refutation, not a belief | Fig 2 :42 - *"Buy independence in proportion to the cost of being wrong."* |
| No prestige language | *"Prestige must never be allowed to validate an action directly"* (*The Recursive Self-Improvement Trap*, opened 2026-11-23). *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action."* |

## Two-stage offer

1. **Stage 1.** Send the residual, the shape claim and the four refuters. Ask what the recipient would count as a failure. Record the verdict before showing any theory.
2. **Stage 2, opt-in only.** If they are curious, offer the three local links with the note that the figures, not the summary, are the authority.
3. **Stage 3.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

Stage 1 before stage 2 is Fig 10 :52 and Fig 2 :45. Stage 2 is opt-in because Seat 4 must not hold the interiors; once a recipient has absorbed the theory, their agreement stops being evidence (Fig 2 :40). Stage 3 sends a generator, which is permitted by Fig 4 :22, but still needs a ground per problem.
