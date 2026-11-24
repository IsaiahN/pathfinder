# Outreach draft — check the output before you decide about the theory

**Use:** one to one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** the shape claim and its five refuters in `01_figure_grounded_audit.md` section 2 are written down and dated before the first contact. The email carries them in stage 1.

---

**Subject:** One question about when evidence is enough, before any theory

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to agree with it, and I am not asking you to read the theory first. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** sufficiency to act is a comparison, not a certainty bar. In plain terms, a person stops gathering evidence when the residual that would remain if they acted now is judged against the cost of one more observation. Three parts follow from that:
>
> 1. The residual is tracked per live case, not as one global confidence score. Averaging across cases hides the one that still needs an answer.
> 2. Two things are being priced and they are not the same thing: the cost of describing what is still unexplained, and the cost of the actions spent finding out whether it holds. A single number that adds them hides which one is binding.
> 3. Waiting has a payoff only while new observations can still change the reach. Once the residual persists and does not trend down, more waiting spends the budget without adding anything. The stop signal is the flat residual, not a certainty threshold being reached.
>
> **What I am not claiming:** that I can tell you the numeric threshold, the drift rate, or the boundary height. The framework returns a shape, not a name. I am also not claiming that people actually use this rule, since that is an empirical question your field is better placed to settle than mine.
>
> **What would refute the shape.** I wrote these down before sending this:
> 1. a controlled study showing a stable, well-calibrated stop rule that waits for a fixed certainty criterion when delay is costly and that criterion is unreachable at the budget, with no comparison against delay cost;
> 2. a demonstration that the threshold is one scalar in one currency which trades residual against delay additively at every level, with no distinction between description cost and action cost;
> 3. evidence that sufficiency is decided on an aggregated global confidence measure with no per-case residual and no lost live signal;
> 4. a fixed-sample procedure at matched error rates that uses no more observations than a sequential boundary rule across several decision domains;
> 5. measured stopping thresholds that do not move with the opportunity cost of time in a task where the optimum is known to depend on it.
>
> If any one holds, I will withdraw or narrow the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figures and formula, public repo, branch `general-agent`: https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Canonical usage rule: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - Worked architecture with the citation list: https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it. The framework's own limit is that a loop cannot check the direction of its own question, and its author warns that outputs could never be verified if the solutions presented were not contrived to fit the formula. A reported failure is more useful to me than a reported success.
>
> Thanks for reading,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 "Bring a characterised residual, never the source." |
| Do not ask for agreement | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | Seat Map :287 "a falsifier written before the run is a design instrument, not only an honesty device." |
| Mode stated on the claim | `THE_FORMULA.md` mode rule: "general · specified · grounded. State which." |
| Numeric threshold withheld | The canonical README says the framework returns "a shape, not a name"; Fig 9 :32 "you get a kind of thing, never the answer itself". |
| Two currencies kept apart | Fig 12 :125 "A composition costs in two currencies, and they do not add." |
| Per-slot claim stated in effect terms | Fig 6 :30 "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Links held to stage 2 | Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." |
| Stage 3 sends a method | Fig 4 :22 "Only methods cross up. Only head starts come down." |
| Each user writes their own refuter | Formula "Direction": a frame cannot check the direction of its own question. |
| One to one, no bulk | Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool"; Fig 7 :13 "agreement compounds, evidence does not". |

## Two-stage discipline

1. **Stage 1:** send the residual, the shape claim and the five refuters. Ask what the recipient would count as a failure. Record the verdict before any framework interior is shown.
2. **Stage 2, opt-in only:** if they are curious after stage 1, send the three links with the note that the figures, not the summary, are the authority.
3. **Stage 3:** offer the formula as a method to reuse, with the instruction that each user states their own mode and writes their own refuter before running it.

Later agreement is never pooled as corroboration. A later refutation is copied into `11_audit.md` with provenance and re-evaluated by the auditor seat as if it came from any other source.
