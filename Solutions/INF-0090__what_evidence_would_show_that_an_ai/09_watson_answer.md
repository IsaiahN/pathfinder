# WATSON answer: what evidence would show flexible use rather than familiar association?

**Mode: `specified` on the shape, `general` on the method-versus-recording distinction. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement of any AI system was taken.

## QUESTION

Decide, in effect terms, what evidence would discriminate two hypotheses that the same in-distribution accuracy leaves standing. H1: an AI system holds a method it can reapply in a new context. H2: the system reproduces associations familiar from training. Option A: treat a higher benchmark score as the evidence. Option B: specify an instrument that discriminates H1 from H2. What each leads to: A reads a quantity both hypotheses produce and cannot comment on the source; B returns the shape of a discriminating observation, a pre-registered refuter and an honest stop, with no claim that any system passes.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain giving actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** In-distribution accuracy does not discriminate H1 from H2. Arity: two conditions, the familiar-cue condition and the new-context condition, so a union compound (Fig 9 :54 *"when the split lands on a union rather than a partition, unbundle before you search again"*). Symmetry: the transfer from training context to new context is ordered; Fig 12 :70 defines -> as sequence, "A then B; B needs A to have happened". Scale: first order inside one context, second order across a distribution of contexts (Fig 12 :104).
- **Domain 1, the model's closure.** Actors: atoms(Γ), bonds, Γ, candidate term φ, residual R per slot. Currency: composition, residual, description cost in bits. Anchor: the ground via settlement. Type: partition boundary, what composes inside closure(Γ).
- **Domain 2, the evaluation frame.** Actors: test sets, metrics, benchmark designers. Currency: accuracy and score. Anchor: should be the ground; is often a proxy the benchmark itself produces. Type: union with Domain 3 when the harness is the habitat.
- **Domain 3, the deployment habitat.** Actors: new contexts, conditions, users, distribution shift. Currency: contact with R in a new context. Anchor: the ground in that new context. Type: union with Domain 2; Fig 11 :70 says a synthetic solve proves wiring and never capability.
- **Domain 4, the verifier frame.** Actors: outside frame, refuter, instrument. Currency: residual and agreement. Anchor: the ground, never agreement. Type: partition, verifier must not hold the interiors. In this simulated run all four domains draw on one evidence pool, so this domain's independence is zero.
- **Order by dependency.** Tell new from familiar (perception), have terms for what the new context affords (vocabulary), say what counts as progress (objective), find a route (planning), then carry what worked. Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Strain test applied: Fig 11 :70 (synthetic solve proves wiring only) versus the positive compositionality results of Lake and Baroni 2023. Re-census resolves it: Fig 11 governs capability in a substituted habitat, while those results are wiring plus method transfer within a meta-learned distribution, a limit the paper states itself. No strain after re-census. The real conflict between the 2023 Nature paper and the 2026 TACL rebuttal is a conflict between world sources and sends us back to the census; it never flips the figure verdict.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Domain by domain, with status.

**Domain 1, the model's closure.**
- Fig 4 :23 "upward: a method that can be reapplied. Never the recording of a particular success." -> flexible use is a reapplicable method; familiar association is a replayed recording. Triangulated with Fig 11 and Fig 12 (low overlap between membrane, habitat and bond frames).
- Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one." -> the discriminator is whether the compressed description transfers, not whether it describes one occasion perfectly. Triangulated.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> report per context, never an average. Triangulated with Fig 9 :60.
- Fig 6 :22 "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure." -> a new context is defined relative to what the system holds, not to the experimenter. Single-source in the figures.
- Fig 5 :44 "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." -> the method must pay a description-length bargain; memorisation fails it. Single-source in the figures.

**Domain 2, the evaluation frame.**
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> benchmark success inside one harness establishes wiring, not flexibility in new contexts. Triangulated with Fig 4 and with Geirhos et al. 2020 (secondary).
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> accuracy the system also produces cannot score the system. Single-source.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> a score is a filter for what gets tried, not a witness. Triangulated with Fig 1.

**Domain 3, the deployment habitat.**
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> hold atoms fixed, change the bond; that is the cheapest transfer discriminator. Triangulated with Fig 4 and corroborated at low overlap by Lake and Baroni 2018.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> carry the compressed method into the new context and measure the round trip gap R_T. Single-source.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> failure at this budget is not proof of no flexibility. Triangulated with Fig 6 :27.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" -> report depth versus absence instead of silence. Single-source.

**Domain 4, the verifier frame.**
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are." -> two checks must be low-overlap. Triangulated with Fig 7 and Fig 10.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> do not select verifiers for agreement. Triangulated.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> the outside frame sees the residual and shape, not the interiors. Triangulated.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> a named benchmark or threshold is a name where the framework returns a shape. gap for a specific test.

Triangulation summary: the method-versus-recording distinction is triangulated across Fig 4, Fig 11 and Fig 12 (three low-overlap figure frames). The per-context and no-filter rules are triangulated across Fig 1 and Fig 9. Independence is triangulated across Fig 2, Fig 7 and Fig 10. The round trip gap and the MDL bargain are single-source in the figures (Fig 4, Fig 5) and corroborated from world fields only. A specific benchmark or number is a genuine `gap`: no figure names one, and Fig 8 :50 says only the record separates a convergence from an adopted import.

## WORLD (secondary sources read)

World sources are corroboration only. They never overrule a figure. Each entry gives field, author / venue / year, a quote from the page actually fetched, a prediction here, and status.

- **Field, machine learning robustness. Robert Geirhos, Jörn-Henrik Jacobsen et al., Nature Machine Intelligence, 2020.** Quote: "Shortcuts are decision rules that perform well on standard benchmarks but fail to transfer to more challenging testing conditions, such as real-world scenarios." Predicts that benchmark success does not discriminate H1 from H2. Corroborates Fig 11 :70. Overlap: low overlap with the figure derivation, high topical overlap with the other ML sources.
- **Field, machine learning / compositionality. Brenden Lake and Marco Baroni, ICML (PMLR 80), 2018.** Quote: "when generalization requires systematic compositional skills (as in the 'dax' example above), RNNs fail spectacularly." Predicts that small cue differences are handled by mix-and-match (H2) while bond changes fail. Corroborates Fig 12 :117. Overlap: shares authors with the 2023 Nature paper.
- **Field, cognitive science / AI. Brenden M. Lake and Marco Baroni, Nature 623, 2023.** Quote: "in contrast to perfectly systematic but rigid probabilistic symbolic models, and perfectly flexible but unsystematic neural networks, only MLC achieves both the systematicity and flexibility needed for human-like generalization." Predicts that an instrument can be built to train for transfer, but its own Discussion limits it to episodes in-distribution with meta-training. Corroborates Fig 4 (a method can be trained) and Fig 11 (within-habitat limit). Overlap: same authors as the 2018 paper.
- **Field, cognitive science / NLP. Michael Goodale and Salvador Mascarenhas, TACL 14, 2026.** Quote: "their model struggles to learn rules that are even slightly out of distribution compared to their training data. Furthermore, the model behaves unsystematically even on many within-distribution problems." Predicts that the 2023 result does not settle the question. Conflicts with the 2023 Nature source; per the method, the conflict returns us to the census and strengthens the demand for low-overlap instruments and for separating wiring from capability. Overlap: different team, genuinely independent.
- **Field, AI evaluation. Rylan Schaeffer, Brando Miranda and Sanmi Koyejo, arXiv:2304.15004, 2023.** Quote: "emergent abilities appear due to the researcher's choice of metric rather than due to fundamental changes in model behavior with scale." Predicts that a metric can manufacture the appearance of a new ability. Corroborates Fig 1 :22 and the pre-registered refuter rule. Overlap: distinct evaluation frame.
- **Field, machine learning / memorisation. Alethea Power, Yuri Burda et al., arXiv:2201.02177, 2022.** Quote: "improving generalization performance from random chance level to perfect generalization, and that this improvement in generalization can happen well past the point of overfitting." Predicts that generalization and memorisation separate over training time, a candidate instrument. Corroborates Fig 5 :44. Overlap: ML field, different authors.
- **Field, intelligence measurement. François Chollet, arXiv:1911.01547, 2019.** Quote: "unlimited priors or unlimited training data allow experimenters to 'buy' arbitrary levels of skills for a system, in a way that masks the system's own generalization power." Predicts that skill is not flexibility and that a benchmark must be designed against prior buying. Corroborates Fig 11 :70. Overlap: distinct subfield.
- **Field, statistics / causal learning. Martin Arjovsky, Léon Bottou, Ishaan Gulrajani and David Lopez-Paz, arXiv:1907.02893, 2019.** Quote: "enable out-of-distribution generalization" via invariances learned across training distributions. Predicts that invariance across environments is a candidate source discriminator. Corroborates Fig 2 independence and Fig 6 novelty. Overlap: distinct statistical frame.
- **Field, canonical metatheory. Isaiah N, figures README, general-agent branch (GitHub), 2026.** Quote: "what a missing thing would have to look like (a shape, not a name)". Predicts a refused slot and a recorded stop; corroborates Fig 9 :32. Overlap: high, framework author, weak independent weight.
- **Field, human cognition / source discrimination. Isaiah N, The Hard Problem is About Source (adventuresinml Substack), 2026.** Quote: "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that a reading of "correct" cannot comment on its source, so an instrument is owed. Corroborates the residual. Overlap: high, framework author.
- **Field, human cognition / tacit knowledge. Isaiah N, Decoding Tacit Knowledge (adventuresinml Substack), 2026.** Quote: "Sounding right isn't the same as being checked against the world, which is why I call the Turing test a test of fluency, not of accuracy." Predicts that fluent output is not flexible use. Corroborates Fig 4 :25. Overlap: high, framework author.

One real conflict is recorded (2023 Nature versus 2026 TACL) and was handled by re-census, not by choosing a side. The framework essays share an author with the figures, so their agreement is expected and carries little independent weight. No world source outranks a figure line.

## VERDICT (from the figures)

The evidence that would show flexible use rather than familiar association has a shape, not a name. It is a compressed method carried across a change of arrangement with the round trip gap measured; a residual reported per context and never averaged; a same-atoms, different-bond transfer check; at least two low-overlap instruments ranged against a ground that does not update, with the verifier blind to the interiors; a description-length bargain that rejects a term explaining one occasion perfectly; a refuter written before the test; and an honest report of depth versus absence when nothing is found. No figure names a benchmark or number, so that row stays a `gap`. The verdict is `specified`, ungrounded, candidate. Nothing here claims any AI system passes.

- **cost if wrong:** choosing the wrong evidence, such as an aggregate score from one benchmark family, manufactures the label "flexible" without changing contact and spends the independence of outside readers. Fig 2 :42 says "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuter, and by declaring overlap between instruments.
- **undoable:** yes. The shape and its instrument list are stated separately from any binding to a particular benchmark, so a wrong binding can be withdrawn without touching the derivation. No primitive is withdrawn. A sent packet can be superseded by a corrected one.
- **reversed by:** a ground reading, not agreement. A source-discriminating instrument showing that a compressed method predicts new contexts better than a lookup would confirm the shape at the ground; a demonstration that the isomer check fails to discriminate on every available system would fire refuter 1 in `01` section 4 and withdraw it; a finding that all apparently independent instruments share one evidence pool would fire refuter 3; a pre-registered refuter firing at the ground moves the verdict to refused. Until one of these, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Shortcut learning in deep neural networks](https://www.nature.com/articles/s42256-020-00257-z)
- [Generalization without Systematicity](https://proceedings.mlr.press/v80/lake18a.html)
- [Human-like systematic generalization through a meta-learning neural network](https://www.nature.com/articles/s41586-023-06668-3)
- [Fodor and Pylyshyn's Systematicity Challenge Still Stands](https://aclanthology.org/2026.tacl-1.73/)
- [Are Emergent Abilities of Large Language Models a Mirage?](https://arxiv.org/abs/2304.15004)
- [Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets](https://arxiv.org/abs/2201.02177)
- [On the Measure of Intelligence](https://arxiv.org/abs/1911.01547)
- [Invariant Risk Minimization](https://arxiv.org/abs/1907.02893)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)

Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`.
