# Outreach draft: check the output before you decide about the framework

**Use:** one to one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until a stage-1 recipient has recorded what they would count as a failure. The output must survive that check or the two-stage offer collapses on contact.

---

**Subject:** Check one claim about correlated risk and diversification, then decide if the rest is worth reading

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to read the framework first and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`general` on the shape, `specified` on each domain, not `grounded`):**
>
> 1. The usefulness of diversification is not a function of how many holdings, species or components you have. It is a function of how many *independent* ones you have. When risks share a hidden source, the collection has fewer independent bets than it has names.
> 2. Correlated risk is not a new kind of risk. It is the case where separate parts fail together because of a source they share, without ever influencing one another.
> 3. This has a valence. For a claim about independent exposure (a verdict about the world), high correlation is disqualifying. For a shared protocol or common meaning (a convention), correlation is the product. A payment network whose participants co-move is a better payment network; a portfolio whose assets co-move is a worse portfolio. Saying "correlation always destroys diversification" is wrong because it ignores the second half.
> 4. How much independence to buy scales with the cost of being wrong. That is a rule for the budget, not a rule for whether a particular asset or species is good.
>
> This is a shape and a route, not a measurement. I took no ground reading.
>
> **What I am not claiming:** no number for the correlation at which diversification stops helping, no functional form for usefulness against correlation, and no name for the shared source in any particular system. Those need a measurement. I am also not claiming that every connection is bad: point 3 is the part most often dropped.
>
> **What would refute it, written before this message:**
> 1. Show that a collection's realised loss reduction does not fall as instrumented overlap rises, with other terms held fixed.
> 2. Instrument the shared source in one domain and show the parts' losses stay independent conditional on it.
> 3. Show a convention-function of a network made worse by rising agreement, or a verdict-function made better by perfect correlation.
> 4. Show that a first-order correlation audit predicts joint losses under stress as well as a full enumeration of shared sources three steps out.
>
> A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Canonical figure text with line numbers (local file in this solution's project): `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cite as `Fig N :line`.
> - Figures README, canonical usage rule: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - Full architecture: https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
>[your name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, framework second | Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." The recipient checks the claim without holding the framework's interior. |
| Do not ask for agreement | Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | A falsifier written before the run is a design instrument, not only an honesty device. |
| Mode stated on every claim | `THE_FORMULA.md`: mode is `general`, `specified` or `grounded`; state which. |
| Valence included, not stripped | Fig 2 :39: "Correlation has valence." Reporting only the disqualifying half would be a single-line reading forbidden by the canonical usage rule. |
| No number or source named | Fig 9 :32: "you get a kind of thing, never the answer itself." |
| Independence priced, not verdictised | Fig 2 :42: "Buy independence in proportion to the cost of being wrong"; Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." |
| Ask for a refutation, not a belief | A failure is more useful than an endorsement. A reply is a conversation, never corroboration. |
| Offer the formula as a method | Fig 4 :22: "Only methods cross up. Only head starts come down." |

---

## Stage two (opt-in only)

Send this only after the recipient has recorded a verdict on stage 1.

> Thanks for checking the first part. If you are curious about where it came from, the three links above are the sources. The figures are the authority, not the summary in `01_figure_grounded_audit.md`. If you want to reuse the method, `THE_FORMULA.md` is the eight-step loop; write your own refuter and state your own mode before you run it.

Stage 2 is opt-in by construction. Once a recipient has absorbed the framework, their agreement stops being evidence (Fig 2 :40), so the stage-1 verdict is recorded before any theory is shown and is never pooled as corroboration.
