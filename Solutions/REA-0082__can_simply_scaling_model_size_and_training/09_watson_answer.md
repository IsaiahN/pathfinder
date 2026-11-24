# WATSON answer: REA-0082

**Mode: `specified` for the application, `general` for the closure law, not `grounded`.** Figures are primary and decide. World sources are secondary, corroborate but never overrule, and a conflict returns the derivation to the domain census. This is a simulated derivation checked for internal consistency against the figures, not a ground reading. No measurement was taken.

## QUESTION

Can simply scaling model size and training data produce qualitatively new capabilities, or are new learning principles required? Restated as an effect: for a model family at scale k, can a held-out slot s whose residual `R_s = |Γ(b,a) - o'|` persists and does not trend down flip to near zero in a way that requires a new kind of term? Option A (scale only) leads to more search inside the same closure. Option B (new principles) leads to an import that changes the closure or the contact. An answer must say which option applies to a given observed flip, must bind that shape in advance, and must state what each assignment costs if wrong. Source: reasoning.txt line 101, section 9.

## DOMAIN CENSUS

R by arity, symmetry, scale, then one line per domain with actors / currency / anchor, partition or union, order by dependency.

- **R.** Arity: three-place relation (model library `Γ`, scale k, task slot s), ordered in k, carrying an ordered bond into the future and a comparison bond at the threshold "new". Symmetry: "new" is a threshold relative to the old reach, so this is an ordered comparison, not a symmetric join. Scale: one run, one model family, one habitat.
- **D1 Model closure.** Actors: atoms, bonds, `Γ`, candidate terms. Currency: composition and reach. Anchor: figures as metalaws; the ground for any measurement. Admitted.
- **D2 Training search.** Actors: tokens, data, compute, loss curve. Currency: coverage of the closure, compression. Anchor: held-out task slots, not training loss. Admitted.
- **D3 Capability ground.** Actors: evaluator, instrument, held-out tasks. Currency: per-slot residual. Anchor: the ground, which does not update. Admitted.
- **D4 Learning principle / import.** Actors: objective, architecture, environment, peer frames. Currency: new atoms or bonds, provenance, contact. Anchor: source gate and shadow test. Admitted.
- **X1 Emergence as a free-floating property.** No nameable anchor. Not a domain yet; absorbed into D1 and D3.
- **X2 More data is always more evidence.** Absorbed into D2.

**Union, not partition.** D1 with D2 is the budget compound; D1 with D4 is the underivable compound; D3 is the ground both range against. Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." **Order by dependency:** perception, vocabulary, objective, planning, learn and carry (Fig 3); describe the residual before choosing a frame (Fig 9 :27-28); SEARCHED first, then INWARD and OUTWARD as opposed tracks.

Strain test: Fig 6 :29 (inward, extend the instrument) and Fig 6 :30 (outward, cast the description in effect terms) strain only if read as one operation. Re-census: they are two instruments aimed at different failures; scaling is Fig 6 :49's third question. No strain after re-census.

## TETHER (primary, verbatim, per domain)

All quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Each domain verdict is kept separate and is never averaged with another.

**D1 Model closure, status triangulated (Fig 6, Fig 8, Fig 13, distinct roles).**

> "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited." (Fig 6 :49)
> "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." (Fig 8 :32)
> "The set is closed. The arrangements are not. That gap is why import exists." (Fig 13 :115)

Reading: scaling is SEARCHED at fixed reach. It cannot add an atom; infinite effort inside a finite reach does not arrive. Mode `general`. Refuter: a term requiring a new atom produced purely by composition with no import.

**D2 Training search, status triangulated (Fig 1, Fig 7, Fig 9, measurement vs budget).**

> "Aggregating across slots is how a live signal disappears into an average." (Fig 1 :22)
> "They are frame-internal. A frame cannot score itself with a quantity it also produces." (Fig 1 :27)
> "same closure, handed along;" (Fig 7 :12) "agreement compounds, evidence does not" (Fig 7 :13)
> "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." (Fig 9 :60)

Reading: the loss curve prices the budget; it cannot certify a qualitative change. Same-distribution data is a mirror chain. Mode `specified`. Refuter: a continuous aggregate predicts which slots flip across two low-overlap families with no new ground measurement.

**D3 Capability ground, status triangulated (Fig 2, Fig 10, anchor vs channel).**

> "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." (Fig 2 :29)
> "A ground listed as one of the parties has already become a frame." (Fig 2 :47)
> "the ground does not decay, the channel does" (Fig 10 :24) "stale percepts, dropped transients, saturated metrics, pooled readings" (Fig 10 :26)

Reading: a claimed flip is a measurement claim. A benchmark trained on is no longer an anchor; a discontinuous metric can manufacture a flip. Mode `specified`. Refuter: a flip that survives a change of metric and evaluator with the anchor immovable.

**D4 Learning principle / import, status triangulated (Fig 6, Fig 8, Fig 9, gate and arrival).**

> "the only operator that moves the wall" (Fig 6 :14)
> "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." (Fig 6 :23)
> "describe it before you go looking, or any frame you pick will seem to fit" (Fig 9 :27-28)
> "you get a kind of thing, never the answer itself" (Fig 9 :32)

Reading: where a new atom is needed, an import from a differing closure is required, with source gate and shadow test. The framework returns the shape of what it must do, not its name. Mode `general` for the gate, `specified` for AI. Refuter: a new principle derived inside the closure with no import and no binding.

**Branch assignment, status `gap`.**

> "So a search that finds nothing is never a proof of absence." (Fig 8 :39)
> "Unreachable is a verdict here, not a silence," (Fig 13 :134) "It cannot say which primitive is missing, because naming it would mean already holding it." (Fig 13 :135)

Reading: no figure line assigns a real observed capability to a branch. That needs a per-slot ground instrument. Declaring the gap is a verdict, not silence.

## WORLD (secondary, each source opened; field, author/venue/year, quote, prediction, corroborates|conflicts)

**Evidence pool A, machine learning scaling and evaluation (seven papers, one witness).**

- **ML scaling laws.** Jared Kaplan et al., *Scaling Laws for Neural Language Models*, arXiv 2020. Read 2026-11-24. Quote: "The loss scales as a power-law with model size, dataset size, and the amount of compute used for training, with some trends spanning more than seven orders of magnitude." Prediction: smooth aggregate improvement with scale. **Corroborates** D2 as a budget filter; **conflicts** with any claim that aggregate smoothness settles novelty, which returns to the census as D3.
- **ML compute allocation.** Jordan Hoffmann et al., *Training Compute-Optimal Large Language Models*, arXiv 2022. Read 2026-11-24. Quote: "for every doubling of model size the number of training tokens should also be doubled." Prediction: parameters and data co-scale; same closure, more visited space. **Corroborates** D1 and D2.
- **ML evaluation.** Jason Wei et al., *Emergent Abilities of Large Language Models*, TMLR 2022. Read 2026-11-24. Quote: "emergent abilities cannot be predicted simply by extrapolating the performance of smaller models." Prediction: real flips occur. **Corroborates** the existence of flips; cannot assign a branch, which is D4's gap.
- **ML evaluation.** Rylan Schaeffer, Brando Miranda and Sanmi Koyejo, *Are Emergent Abilities of Large Language Models a Mirage?*, arXiv 2023. Read 2026-11-24. Quote: "emergent abilities appear due to the researcher's choice of metric rather than due to fundamental changes in model behavior with scale." Prediction: flips may be artifacts. **Corroborates** D3; shares the task pool with Wei et al., so this is one witness disagreeing with itself, not two.
- **ML objectives.** Ian R. McKenzie et al., *Inverse Scaling: When Bigger Isn't Better*, TMLR 2023. Read 2026-11-24. Quote: "there are tasks for which increased model scale alone may not lead to progress, and that more careful thought needs to go into the data and objectives for training language models." Prediction: objective and data flaws cause reversal. **Corroborates** D4's import reading.
- **ML data selection.** Ben Sorscher et al., *Beyond neural scaling laws: beating power law scaling via data pruning*, NeurIPS 2022. Read 2026-11-24. Quote: "the discovery of good data-pruning metrics may provide a viable path forward to substantially improved neural scaling laws". Prediction: a principle beats raw scale at equal data. **Corroborates** D4.
- **ML generalization.** Alethea Power et al., *Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets*, arXiv 2022. Read 2026-11-24. Quote: "improving generalization performance from random chance level to perfect generalization, and that this improvement in generalization can happen well past the point of overfitting." Prediction: a delayed flip inside the closure. **Corroborates** branch (i) of D1.

**Low-overlap fields (independent witnesses for the mechanism shape).**

- **AI research history.** Rich Sutton, *The Bitter Lesson*, 2019. Read 2026-11-24. Quote: "general methods that leverage computation are ultimately the most effective, and by a large margin." Prediction: scaling wins once a method is held. **Corroborates** D1 branch (i). Initially read as supporting scale-only; narrowed to branch (i) after re-census, because the general methods it praises were themselves imports when first found.
- **Software engineering.** Frederick P. Brooks Jr., *No Silver Bullet: Essence and Accidents of Software Engineering*, IEEE Computer 1987. Read 2026-11-24. Quote: "a scaling-up of a software entity is not merely a repetition of the same elements in larger sizes, it is necessarily an increase in the number of different elements." Prediction: size alone does not change the kind of structure. **Corroborates** D1 and D4 at low overlap. An analogue, not evidence about neural networks.
- **Philosophy of mind.** Mark Rowlands, Joe Lau and Max Deutsch, *Externalism About the Mind*, Stanford Encyclopedia of Philosophy, 2020. Read 2026-11-24. Quote: "externalism is the view that what is going on inside an individual's body does not always, on its own, fix what is going on inside that individual's mind." Prediction: agent-only change cannot fix capability. **Corroborates** Fig 11 :39-40 at low overlap, as a philosophical analogue.

**Framework essays, canonical reading only, not world witnesses.** Isaiah N, eight essays read 2026-11-24 (links in `05_what_shape_means.md`). Key quotes: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question" (*Library of Babel*); "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world" (*Decoding Tacit Knowledge*); "The real import is not a new term in the existing space. It is a new dimension of the space" (*They're Scanning Books*); "the truly testable output would need to be derived from the real architecture or working the formula yourself" (*Recursive Self-Improvement Trap*). Overlap with the figures is maximal, same author, so they carry no independent corroboration weight.

**Venue pages opened, no verdict bearing (silent on the question).** arXiv submission, JMLR author information, ICML 2026 call for papers, NeurIPS 2025 call for papers, ACL 2026 call for papers, OpenReview TMLR venue. They establish public opt-in routes only.

No world source overrules a figure. One initial conflict, Sutton read as "scale is enough", was returned to the census and narrowed to branch (i). The Wei-Schaeffer disagreement is one shared evidence pool and was recorded as D3, not used to flip the verdict.

## VERDICT (from the figures)

The question is a false dichotomy. Scaling is the correct and sufficient remedy when the capability is already in `closure(Γ)` and merely unfound: it visits more of the same reach and cannot add an atom (Fig 6 :49, Fig 8 :32, :41-42). Where a new atom or bond is required, composition is inert and an import from a differing closure is needed (Fig 6 :14, :23). Aggregate loss is a budget filter, not a witness for a qualitative change (Fig 1 :22, Fig 9 :60), and agent-only scaling does not change capability unless it changes contact (Fig 11 :40). Which branch an observed capability belongs to is a `gap` needing a per-slot ground instrument. Mode `specified` for the application, `general` for the closure law, ungrounded throughout. Verdicts are kept per domain and never averaged.

- **cost if wrong:** misallocated compute and credibility. A model in the budget branch would be given a new principle it does not need, which Fig 8 :43 prices as a wrong atom above starting from primitives; a model needing a new atom would be given more compute that cannot reach it. In outreach terms, an expert's twenty minutes would be spent checking a shape that was never the right shape. The cost is real but bounded and largely reversible.
- **undoable:** yes. If the claim fails, nothing is deleted; a refuter is added and the reach falls because "something was added rather than because anything was deleted" (Fig 6 :42-43). The branch rule and its four refuters are recorded in a provenance trail so a later reader can locate the error (Fig 10 :62-64).
- **reversed by:** any of the four pre-registered falsifiers in `01` §4: a new atom produced by composition alone; a per-slot flip fully predicted by a continuous aggregate curve across two low-overlap families; capability improving with scale while contact is independently measured as unchanged; or one operation closing both branches without branch assignment. A source with a genuinely different evidence pool showing that per-slot flips are fully predicted by aggregate loss would also reverse it. Agreement or prestige is not such an instrument.

## Sources

- [The figures, as text, with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [figures README, canonical usage rule (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA, eight-step loop and mode rule (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Scaling Laws for Neural Language Models, Kaplan et al. 2020](https://arxiv.org/abs/2001.08361)
- [Training Compute-Optimal Large Language Models, Hoffmann et al. 2022](https://arxiv.org/abs/2203.15556)
- [Emergent Abilities of Large Language Models, Wei et al. 2022](https://arxiv.org/abs/2206.07682)
- [Are Emergent Abilities of Large Language Models a Mirage?, Schaeffer et al. 2023](https://arxiv.org/abs/2304.15004)
- [Inverse Scaling: When Bigger Isn't Better, McKenzie et al. 2023](https://arxiv.org/abs/2306.09479)
- [Beyond neural scaling laws, Sorscher et al. 2022](https://arxiv.org/abs/2206.14486)
- [Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets, Power et al. 2022](https://arxiv.org/abs/2201.02177)
- [The Bitter Lesson, Sutton 2019](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
- [No Silver Bullet: Essence and Accidents of Software Engineering, Brooks 1987](https://www.cgl.ucsf.edu/Outreach/pc204/NoSilverBullet.html)
- [Externalism About the Mind, Rowlands, Lau and Deutsch 2020](https://plato.stanford.edu/entries/content-externalism/)
- [How Intelligence Actually Works, Isaiah N 2026](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Recursive Self-Improvement Trap, Isaiah N 2026](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge: Why Context, Isaiah N 2026](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How a Society of Agents Would Work, Isaiah N 2026](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [The Library of Babel: Locating the, Isaiah N 2026](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [They're Scanning Books When They Should Be Studying Nature, Isaiah N 2026](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [The Hard Problem is About Source, Isaiah N 2026](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Arrival of the Fittest: The Tether Architecture, Isaiah N 2026](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
- [arXiv submission](https://arxiv.org/submit)
- [JMLR information for authors](https://www.jmlr.org/author-info.html)
- [ICML 2026 call for papers](https://icml.cc/Conferences/2026/CallForPapers)
- [NeurIPS 2025 call for papers](https://neurips.cc/Conferences/2025/CallForPapers)
- [ACL 2026 main conference call](https://2026.aclweb.org/calls/main_conference_papers/)
