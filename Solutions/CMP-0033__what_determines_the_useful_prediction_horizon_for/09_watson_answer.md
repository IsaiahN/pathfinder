# WATSON answer: what determines the useful prediction horizon

**Mode: `general` on the shape, `specified` on the mechanisms, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*, read 2026-11-22: LLM output can simulate an answer but "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what sets the turn at which a prediction stops being useful for a system with nonlinear feedback and changing structure. Option A: report a single global horizon time for the system. Option B: report a per-slot boundary with a four-way limiter census and a budget/absence split. What each leads to: A hands over a number that averages away the live slot and names a remedy before the cause is known, which is the named failure in Fig 1 and Fig 9. B hands over a checkable shape, four refuters written in advance, and a clean distinction between the search remedy and the import remedy.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and dependency order.

- **R (arity / symmetry / scale).** The residual is `R = |Γ(b,a) - o'|` between prediction and observation. Arity: indexed by object slot, not a scalar (Fig 1). Symmetry: not symmetric; the loop is ordered and the residual re-enters forward through an amplifying chain (Fig 13). Scale: spans the one-agent loop and the abstraction level, so the round trip carries a gap R_T (Fig 4).
- **Domain 1, the predictive frame.** Actors: library Γ, belief b, action a, slots s, candidate term φ. Currency: residual R and description cost. Anchor: the ground (observation o'), which does not update. Question type: per-slot boundary.
- **Domain 2, the system / habitat.** Actors: feedback cycles, the six substrate kinds, new actors and relations entering contact. Currency: contact. Anchor: what actually happens (the same ground). Question type: cycle sign plus three-step contact enumeration.
- **Domain 3, the verification frame.** Actors: decision maker, instrument, tolerance, scoring function. Currency: agreement vs residual and action cost. Anchor: the ground, never agreement. In this simulated run all three domains draw on one evidence pool (the same figures, essays and local files), so independence between them is zero and their agreement is not corroboration.
- **Partition or union.** Union compound, not one hard question and not two independent ones (Fig 9 :54). The fixed-structure growth question and the structural-change question overlap and draw different remedies.
- **Order by dependency.** Describe the residual per slot; fix the loop sign; enumerate the habitat outward; measure the round-trip gap; then run the budget/absence split (Fig 3).

Strain test applied: an early reading of Fig 7 :26 "progress per handoff: R = h² × S" as a horizon decay law failed the strain test. Re-census: Fig 7 governs progress across handoffs between frames, not within-frame residual growth. It governs another quantity and was retracted in `01_figure_grounded_audit.md` section 6.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> the horizon is a vector of per-slot boundaries, not one time constant.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a global mean is the operation that hides the live slot.
- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." -> nonlinear feedback is a cycle; the sign, not the magnitude, sets the early horizon.
- Fig 13 :31 "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." -> an amplifying chain compounds the residual; discarded detail returns as noise.
- Fig 11 :52 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." -> enumerate contact outward; the breaking term is often several steps out.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> the compression of a forecast has a measurable gap R_T.
- Fig 10 :24 "the ground does not decay, the channel does" -> the horizon ends when contact is lost, not when the world changes.
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." -> a new atom cannot be searched for inside the old closure.
- Fig 8 :41 "Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom." -> two different failures, two opposite remedies.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns a shape, not a system-specific number.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> a list selected for agreement cannot check the shape.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> this simulated second seat is one pool, not a witness.
- Fig 4 :22 "Only methods cross up. Only head starts come down." -> the method may be offered; a recording of a conclusion cannot corroborate.

Triangulation status: the per-slot verdict is triangulated across three Fig 1 lines and Formula step 1 (low overlap: arity, averaging and gap location are separate claims). The loop-sign and contact verdicts are triangulated across Fig 12, Fig 13 and Fig 11 (different objects: structure, dynamics, habitat). The round-trip and channel verdicts are triangulated across Fig 4, Fig 10 and Formula step 6. The budget/absence split is triangulated across Fig 8 and Fig 6. The shape-not-a-number limit is **single-source**: Fig 9 and the canonical README share an author and an evidence pool, so they are one witness. No figure line governs a numeric horizon; that is a `gap` after re-census, not a silence that can be filled by a guess (Fig 8 :39 "So a search that finds nothing is never a proof of absence.").

## WORLD (secondary sources read)

World sources are corroboration only. None shares an author with the framework. Overlap between them is declared.

- **Mathematics / dynamical systems.** Wikipedia contributors, "Lyapunov exponent" (Wikipedia, 2026, accessed 2026-11-22): "The multiplicative inverse of the largest Lyapunov exponent is sometimes referred in literature as Lyapunov time, and defines the characteristic e-folding time." Predicts a finite horizon set by expansion rate; corroborates F2. Overlap: none with the other world sources.
- **Physics / interdisciplinary.** Wikipedia contributors, "Predictability" (Wikipedia, 2026, accessed 2026-11-22): "in principle, the deterministic systems that chaos theory attempts to analyze can be predicted, but uncertainty in a forecast increases exponentially with elapsed time." Also lists "a lack of information or excessive complexity" as distinct causes. Predicts both amplification-limited and information-limited horizons; corroborates F2 and F5. Overlap: shares the host Wikipedia with the other two Wikipedia pages but covers a different field and cites different literature.
- **Economics / statistics.** Wikipedia contributors, "Structural break" (Wikipedia, 2026, accessed 2026-11-22): "a structural break is an unexpected change over time in the parameters of regression models, which can lead to huge forecasting errors and unreliability of the model in general." Predicts that changing structure invalidates the frame; corroborates F3. Overlap: same host, different field.
- **Engineering / control.** Eivind Bøhn, Sebastien Gros, Signe Moe and Tor Arne Johansen, "Reinforcement Learning of the Prediction Horizon in Model Predictive Control" (arXiv:2102.11122, 2021, accessed 2026-11-22): "A longer horizon generally increases the control performance, but requires an increasingly powerful computing platform." Predicts a budget-limited horizon and state-dependent sensitivity; corroborates F1 and F8. Overlap: none.
- **Ecology / forecasting methodology.** Marieke Wesselkamp, Jakob Albrecht, Ewan Pinnington, William J. Castillo, Florian Pappenberger and Carsten F. Dormann, "The ecological forecast limit revisited" (arXiv:2412.00753, 2024, revised 2025, accessed 2026-11-22): "We distinguish the model's potential and absolute forecast limit, and show how a benchmark model can help determine its relative forecast limit." Also: forecast limits need "A verification reference, a scoring function, and a predictive error tolerance." Predicts distinct limit kinds and a tolerance in the definition; corroborates F1 and F5. Overlap: none.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. Agreement from these sources is not pooled into the verdict; the figures decide.

## VERDICT (from the figures)

The shape survives; a global horizon number does not. The useful prediction horizon is a per-slot boundary where the residual crosses the decision's tolerance, with four distinguishable limiters: loop sign, lossy round trip, new atoms entering contact, and channel decay. Two call for more search, two for a frame change or maintained contact, and the budget/absence split must be derived before a remedy is chosen. The four limiters stand as isomers of one residual (same atoms, different bond, different remedy) and are never averaged. The verdict is `general` on the shape and `specified` on the mechanisms, ungrounded, candidate.

- **cost if wrong:** bounded and locatable. The shape is stated with four refuters before any conclusion, so an error is findable rather than invisible. The real cost is handing a decision maker a single global number that averages away the live slot and prescribes the wrong remedy, which Fig 1 :22 and Fig 8 :41 price explicitly. That cost is avoidable by leading with the per-slot residual and the refuter.
- **undoable:** yes. The four-limiter census can be corrected slot by slot without withdrawing the shape. A wrong budget/absence call is reversible because every cut is ranked and reversible; no primitive has to be retracted. A number already issued can be superseded by a per-slot report.
- **reversed by:** a ground reading, not agreement. A measured global tolerance that predicts every slot across a regime change would break Fig 1; an amplifying loop with indefinitely bounded residuals without channel maintenance would break Fig 12; a new term derivable inside the unchanged closure would break Fig 8; a measured round-trip gap of zero would break Fig 4. A figure re-census that restores Fig 7 to this quantity would be a genuine conflict and would send the census back to step 1. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Verbatim figure text with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [WATSON 60, figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [Lyapunov exponent](https://en.wikipedia.org/wiki/Lyapunov_exponent)
- [Predictability](https://en.wikipedia.org/wiki/Predictability)
- [Structural break](https://en.wikipedia.org/wiki/Structural_break)
- [Reinforcement Learning of the Prediction Horizon in Model Predictive Control](https://arxiv.org/abs/2102.11122)
- [The ecological forecast limit revisited](https://arxiv.org/abs/2412.00753)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`.
