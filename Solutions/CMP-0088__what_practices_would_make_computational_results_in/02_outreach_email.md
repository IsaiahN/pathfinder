# Outreach draft: check a shape claim before you decide whether the method is worth reading

**Use:** one to one, or as a cover letter attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the five checks in section 3 of `01_figure_grounded_audit.md` are written down and dated in your own words. A two-stage offer collapses on contact if the stage-1 claim cannot fail.

---

**Subject:** What would you count as a failure of this reproducibility claim?

> Hi [name],
>
> I have one checkable claim about reproducibility in computational complexity work. I am not asking you to read the method first, and I am not asking you to agree with it. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** a published computational result is reproducible only if three things hold. Its lineage is recoverable (exact software versions, data provenance, parameter values, seeds and the executable route between them). Its tolerance for agreement is declared before the comparison. And at least one frame with a different closure, typically a different team or a different implementation, ranges against the same ground. Re-running the same container with the same seed is repeatability. It is not corroboration.
>
> This is a shape, not a score. I am not proposing a single reproducibility number.
>
> **What would refute it, written before this message:**
> 1. An independent party can decide how a result was made and whether it could have been reached from the declared components, from the artifact alone, with no lineage record.
> 2. Two runs that share code, data and seed count as a verdict for the world in your journal's or community's standard.
> 3. Bitwise identity across two different software stacks is both achievable and the right acceptance test.
> 4. A synthetic harness result transfers to the real system with none of the contact conditions reproduced.
> 5. A single summed number over description cost and compute cost predicts reproducibility better than the two reported apart.
>
> If any one holds, the corresponding part of the claim is wrong and I will withdraw it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **What I am not claiming:** that any particular checklist, badge, or container recipe makes a result true. A badge says artifacts were audited or a result was re-observed within tolerance. It does not settle the claim. I am not claiming this method is the only one, and I am not asking you to trust it.
>
> **If it survives, and only then:** here are the public sources. The figures, not my summary of them, are the authority.
> - The 13 figures, Operators and Symbols tables, as text with line numbers (local framework extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - The canonical usage rule (local): `FRAMEWORK/reference/FIGURES_README_canonical.md`
> - Ten Simple Rules for Reproducible Computational Research: https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003285
> - Artifact Review and Badging, ACM, version 1.1: https://www.acm.org/publications/policies/artifact-review-and-badging-current
> - The Turing Way, handbook for reproducible data science: https://book.the-turing-way.org/
>
> **If you want to reuse the method:** the eight-step loop is in `FRAMEWORK/figures/THE_FORMULA.md`. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Shape claim and refuter first, theory second | `Fig 10 :52` "Bring a characterised residual, never the source." Each frame is corrected by the ground separately (`Fig 2 :45-46`). |
| Do not ask for agreement | `Fig 2 :35` "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Refuter written before contact | Formula step 2, direction discipline: write down what an answer would look like and bind it so it can be refused. A falsifier written before the run is a design instrument. |
| Mode stated on the claim | `THE_FORMULA.md`: "Mode. general · specified · grounded. State which." |
| No single reproducibility score | `Fig 12 :130` "Summing them into one figure is the error this names, not the fix for it." |
| Same-stack re-runs labelled repeatability | `Fig 2 :40` "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" |
| Badges called filters, not verdicts | `Fig 9 :60` "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Links only after a verdict | `Fig 10 :42` "A verifier that can reconstruct the claim cannot verify it." Seat 4 reads shape without referent. |
| Offer the formula as a method to reuse | `Fig 4 :22` "Only methods cross up. Only head starts come down." |
| Ask each user for their own ground and refuter | Formula "Direction": a frame "cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds." |

**Stage 2 note.** If the recipient replies with a verdict on stage 1, record the verdict and its date before sending any further material. Later agreement with the framework is never pooled as corroboration (`Fig 2 :40`). A reply is a conversation, not a witness.
