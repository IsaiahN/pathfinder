# WATSON answer: how accurately do simulations capture gas, stars and dust?

**Mode: `specified`, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement of any code's error was taken.

## QUESTION

Decide, in effect terms, what the Tether says about "accuracy" in hydrodynamical galaxy simulations. Option A: report one accuracy percentage for a named code and treat agreement among flagship suites as corroboration. Option B: treat accuracy as a per-slot residual against an independent observational anchor, unbundle numerical and physical fidelity, and report the round-trip gap and the instrument still owed. What each leads to: A sends a frame-internal score with the disqualifying correlation built in, and it spends the independence of the people checking it; B sends a checkable shape, written refuters and an open number until a source-discriminating observation settles it.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The gap between a model's prediction for ordinary baryons and what a telescope returns. Arity: at least three place (model, observation, slot), ordered by redshift. Symmetry: asymmetric, the sky is the anchor and does not update (Fig 2 :33). Scale: sub-parsec subgrid physics, resolved kpc ISM and CGM, individual galaxy, galaxy population, Mpc web. It is a union of numerical fidelity and physical fidelity, not one hard question (Fig 9 :57).
- **Domain 1, the numerical solver.** Actors: hydro scheme, gravity solver, timestepping, mass and force resolution. Currency: numerical error, convergence. Anchor: analytic test problems and refinement tests. Admitted.
- **Domain 2, the subgrid bonds.** Actors: star formation, stellar and AGN feedback, enrichment, cooling, dust. Currency: parameters calibrated to chosen observables. Anchor: borrowed from Domain 3; the sub-parsec process has no direct instrument. Admitted, overlaps Domain 3.
- **Domain 3, the observational ground.** Actors: telescopes, IFU and photometric surveys, absorption-line and dust probes. Currency: measured observables with uncertainty. Anchor: the sky, a measurement (Fig 2 :29). Admitted.
- **Domain 4, the chaotic ensemble.** Actors: initial particle positions, round-off, RNGs, mergers. Currency: variance across individual galaxies. Anchor: statistical distributions, not individual trajectories. Admitted, overlaps Domain 3.
- **Excluded X1, "the simulation alone".** No anchor independent of Domain 3; absorbed into Domain 3 (Fig 11 :39).
- **Excluded X2, "code-to-code agreement".** Frame-internal and drawn from a shared calibration pool; kept as a budget filter only (Fig 9 :60).
- **Order by dependency.** Settle perception and vocabulary before planning (Fig 3 :20); check convergence before validation but never instead of it; describe the residual before choosing a frame (Fig 9 :27-28).

Strain test: an early reading of Fig 13's six terms as a taxonomy of gas, stars and dust only fit by renaming a component a kind of network. Re-census sent Fig 13 to the honest-stop and chaos role. No strain remains (see `01` section 6).

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Per-domain verdicts are kept separate and never averaged.

**Domain 1, numerical fidelity. Verdict: triangulated (Fig 1 and Formula step 5, low overlap between per-slot indexing and the settlement rule).**

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> accuracy is per slot; one number pools the signal.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a global percentage hides which component is failing.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> resolution and particle count cannot score the code that produced them.

**Domain 2, physical fidelity. Verdict: triangulated (Fig 12 and Fig 6, low overlap between bond structure and closure).**

- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> same-ingredient codes with different feedback are isomers.
- Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." -> the ingredient list and the resolution are not the model.
- Fig 6 :21 "MINT composes inside the closure and can never add an atom." -> refinement cannot supply a missing feedback bond.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." -> the subgrid link is uncalibrated by a direct instrument.

**Domain 3, the ground. Verdict: triangulated (Fig 2 and Fig 10, low overlap between anchor triangulation and the maintainer seat).**

- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." -> the sky is the anchor.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> shared calibration targets make code consensus one witness.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> calibration statistics carry a round-trip gap.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> the first contact carries the residual and refuter, not the framework.

**Domain 4, chaos and ensembles. Verdict: single-source for the figure mechanism (Fig 13), with the astronomy instance corroborated by Ludlow et al. 2020 at low overlap.**

- Fig 13 :32 "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." -> object-level trajectories diverge; ensemble agreement is the reachable claim.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> failing to find a discriminating observation is not proof none exists.

**Per-domain status summary:** Domain 1 triangulated; Domain 2 triangulated; Domain 3 triangulated; Domain 4 single-source with low-overlap world corroboration. The specific accuracy number for any named code is `gap`: the framework returns a shape, not a measurement. Agreement between these verdicts is internal consistency, not independent corroboration, because every seat here shares one evidence pool (Fig 2 :35, "Alignment is triangulation, not negotiation. A mirror cannot correct you.").

## WORLD (secondary sources read)

World sources are corroboration only. Fields are chosen for low overlap; where overlap is high it is declared.

- **Field: astronomy, numerical galaxy formation.** Robert A. Crain and Freeke van de Voort, *Hydrodynamical simulations of the galaxy population: enduring successes and outstanding challenges*, Annual Review of Astronomy and Astrophysics 61:473-515, 2023, arXiv:2309.17075. Quote: "Similar galaxy populations can emerge in simulations with dissimilar subgrid feedback implementations. However, these models generally predict markedly different gas flow rates into, and out of, galaxies and their haloes." Also: "the characteristics used for the calibration cannot be considered as predictions of the simulation." Predicts the isomer reading and the round-trip gap; **corroborates** Domains 2 and 3. Overlap: high with the astronomy pool, low with the figures.
- **Field: astronomy, numerical convergence.** Aaron D. Ludlow, Joop Schaye, Matthieu Schaller and Richard Bower, *Numerical convergence of hydrodynamical simulations of galaxy formation*, arXiv:1908.05019, 2020. Quote: "even simulations starting from the same initial conditions, but carried out using different hydrodynamical codes, do not converge to similar solutions." Also: chaotic variations account for up to 50 percent of scaling-relation variance. Predicts that convergence and physical fidelity differ and that object-level accuracy is capped; **corroborates** Domains 1 and 4. Overlap: moderate with Crain and van de Voort (same field, different method).
- **Field: astronomy, observation.** Jesse van de Sande et al., *The SAMI Galaxy Survey: comparing 3D spectroscopic observations with galaxies from cosmological hydrodynamical simulations*, arXiv:1810.10542, 2018. Quote: "The validity of simulation predictions become doubtful if the main parameter that is being used to make the predictions matches well with observations, while other parameters do not." Predicts per-slot residuals and a measured round trip; **corroborates** Domains 1 and 3. Overlap: moderate with the other astronomy sources.
- **Field: engineering, simulation governance.** NAFEMS Simulation Governance and Management Working Group, with William Oberkampf, *Verification and Validation: An Introduction*, nafems.org, 2021. Quote: "Verification deals with the issues of numerical solution reliability, accuracy... Validation deals with the issue of how well the model results compare to experimental measurements... two completely different issues." Predicts the union of two conditions with different anchors; **corroborates** Domain 1 and the union structure. Overlap: low with astronomy and with the figures.
- **Field: human cognition, instrument discrimination.** Isaiah N, *The Hard Problem is About Source*, adventuresinml Substack, 2026. Quote: "If several paths create the same behavior, then behavior is a projection with lossy information." Also: "the instrument... cannot comment on the source." Predicts that a single accuracy reading cannot name its subgrid source; **corroborates** Domain 2 and the choice of instrument. Overlap: high with the framework author, so weak independent weight.
- **Field: search and information theory.** Isaiah N, *The Library of Babel: Locating The Book of Books*, adventuresinml Substack, 2026. Quote: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a narrowed shape, not a filled number; **corroborates** the stop. Overlap: high.
- **Field: validation, prestige and self-validation.** Isaiah N, *The Recursive Self-Improvement Trap*, adventuresinml Substack, 2026. Quote: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Also: "Prestige can fund an action... But it cannot settle an action." Predicts that this derivation cannot settle its own claim and that famous codes are not witnesses; **corroborates** the status line. Overlap: high.
- **Field: human cognition, tacit knowledge and contact.** Isaiah N, *Decoding Tacit Knowledge*, adventuresinml Substack, 2026. Quote: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Predicts the two-stage offer; **corroborates** the outreach order. Overlap: high.

No world source conflicts with the figure verdict after re-census. The apparent conflict between code agreement (the review) and code divergence (Ludlow) was returned to the census and resolved: agreement is about calibration targets, divergence is about physical implementation, different quantities. The essays share an author and an evidence pool with the figures, so their agreement is one pool talking, not independent corroboration (Fig 2 :40).

## VERDICT (from the figures)

"How accurately" is a per-slot residual against an independent observational anchor, not one number. Convergence is a gate; physical fidelity lives in the subgrid bonds, so same-ingredient codes are isomers whose differences are invisible in the ingredient list and decisive in gas flows. The live residual concentrates at the uninstrumented middle link and in uncalibrated components such as the CGM; chaos caps object-level claims to ensemble statements; calibration carries a round-trip gap that must be reported. Accuracy is a property of simulation-and-observation-contact, not of a code considered alone. Numerical and physical fidelity are kept separate and never averaged. Which number belongs to which named code is a `gap`. Mode `specified`, ungrounded, candidate.

- **cost if wrong:** bounded and locatable. The packet states its mode, refuters and provenance before the conclusion, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending one number or a prestige list instead of a per-slot residual, which Fig 2 :42 prices ("Buy independence in proportion to the cost of being wrong."). That cost is avoidable by leading with the shape claim and its refuter.
- **undoable:** yes. The defects in the naive framing, one number, consensus as witness, convergence as ground, are removable without touching the derivation. `07_the_tether_answer.md` and `08_expert_verification_packet.md` already remove them. A sent claim can be superseded by the corrected packet; no primitive has to be withdrawn.
- **reversed by:** a ground reading, not agreement. A source-discriminating observation showing which feedback bond produces a given CGM or dust signature would name the live slot; a single global number that predicts per-slot divergence prospectively would break F1; agreement between suites with independent solvers, subgrid physics and calibration data on a held-out observable would break F2; a calibration statistic with zero round-trip gap would break F9. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE_FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE_SEAT_MAP_Field_Guide_amended (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Hydrodynamical simulations of the galaxy population: enduring successes and outstanding challenges](https://arxiv.org/html/2309.17075v1)
- [Numerical convergence of hydrodynamical simulations of galaxy formation](https://arxiv.org/html/1908.05019v3)
- [The SAMI Galaxy Survey: comparing 3D spectroscopic observations with simulations](https://arxiv.org/html/1810.10542v1)
- [Verification and Validation: An Introduction (NAFEMS)](https://www.nafems.org/blog/posts/verification-validation-an-introduction/)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
