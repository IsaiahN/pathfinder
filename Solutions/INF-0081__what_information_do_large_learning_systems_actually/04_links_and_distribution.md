# Public links and distribution

All links below were fetched and read between 2026-11-22 and 2026-11-23. Local framework files are cited by path. Where a page blocked direct fetch, the record says so and the quoted text was obtained from the public search index with reduced weight; see `10_source_ledger.csv`.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Information Bottleneck paper | https://arxiv.org/html/1503.02406v1 | Tishby and Zaslavsky 2015, IEEE ITW. Defines the goal as *"a minimal sufficient statistics of X with respect Y"* via *"relevant compression of the input layer with respect to the output layer"*, and states that *"the IB curve is a property of the joint distribution p(X,Y), however this distribution is obviously unknown in actual machine learning tasks"*. Opened directly. |
| Platonic Representation Hypothesis | https://proceedings.mlr.press/v235/huh24a.html | Huh, Cheung, Wang and Isola, ICML 2024, PMLR 235:20617-20642. *"representations in AI models, particularly deep networks, are converging"* toward *"a shared statistical model of reality"*. Opened directly. |
| Rethinking generalization | https://cacm.acm.org/research/understanding-deep-learning-still-requires-rethinking-generalization | Zhang, Bengio, Hardt, Recht and Vinyals, CACM 64(3), 2021. *"Deep neural networks easily fit random labels"* and *"The effective capacity of neural networks is sufficient for memorizing the entire data set"*; regularization is *"neither necessary nor by itself sufficient"*. Opened directly. Full abstract page also fetched. |
| Locating and Editing Factual Associations in GPT | https://proceedings.neurips.cc/paper_files/paper/2022/file/6f1d43d5a82a37e89b0665b33bf3a182-Paper-Conference.pdf | Meng, Bau, Andonian and Belinkov, NeurIPS 2022. Abstract retrieved with full method text: *"a causal intervention for identifying neuron activations that are decisive in a model's factual predictions"*, localized to *"mid-layer feed-forward modules"*, with Rank-One Model Editing changing the weights. Abstract page and code repository also opened. |
| Toy Models of Superposition | https://transformer-circuits.pub/2022/toy_model/index.html | Elhage et al., Anthropic, 2022. Direct fetch returned a response too large for the tool, so the full page text was obtained from the public search index: *"neural networks 'want to represent more features than they have neurons'"*; representations are *"composed of features which are represented as directions"*. Recorded with that provenance. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. *"If several paths create the same behavior, then behavior is a projection with lossy information."* Opened directly. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. *"the pattern encoded in the geometric weights"*; *"the best you could do is take traces of patterns"*; *"Prestige can fund an action... But it cannot settle an action."* Opened directly. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 2026-11-10. *"Training on it reproduces 'the traces the thought left, not the thought'"*; *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see."* Opened directly. |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer"*; the searcher exits *"as the author"*. Opened directly. |
| Tolman / cognitive map review | https://pmc.ncbi.nlm.nih.gov/articles/PMC3807793 | *Goals and Habits in the Brain*, 2013. Tolman's rats form *"a field map of the environment"* rather than stimulus-response chains; learning and performance are different events. Opened via search index with full passage. |
| Loftus / reconstructive memory | https://www.apa.org/news/podcasts/speaking-of-psychology/memory-manipulated | APA, Speaking of Psychology. Memories are not *"waiting to be played back like a recording device"*; new information causes *"a contamination, a distortion, an alteration in memory"*. Opened via search index with full passage. |
| NeurIPS 2026 call for papers | https://neurips.cc/Conferences/2026/CallForPapers | Opened via search index. Main track, Evaluations and Datasets track, and Position Papers track with separate portals. |
| ICLR 2026 call for papers | https://iclr.cc/Conferences/2026/CallForPapers | Opened via search index. Subject areas include *"visualization or interpretation of learned representations"*. |
| ICLR 2026 Re-Align workshop | https://representational-alignment.github.io/2026 | Opened via search index. *"How can we meaningfully compare and align the internal representations of intelligent systems?"* |
| JMLR author information | https://jmlr.org/author-info.html | Opened via search index. *"Papers should report on what was learned in doing the work, rather than merely on what was done."* |
| TMLR submissions and editorial policies | https://jmlr.org/tmlr/submissions.html | Opened via search index. Scope includes *"new approaches for analysis, visualization, and understanding of artificial or biological learning systems"*. |

## Wider literature that bears on the question

The world sources split into three pools. Overlap is declared so a pool is not mistaken for several witnesses.

1. **Interpretability and representation (low overlap with the framework).** Elhage et al. 2022 gives the per-feature, directional reading: features are directions, and more features than dimensions can be stored in superposition. Meng et al. 2022 gives the intervention: a per-slot causal test plus a weight edit. Huh et al. 2024 gives the convergence claim: different models measure distance between datapoints in increasingly alike ways. These are three distinct groups and three distinct instruments; they count as three witnesses, but all three are inside the ML pool, so they share a broad methodological commitment to representational analysis.
2. **Information theory and generalization (low overlap with the framework, partial overlap with each other).** Tishby and Zaslavsky 2015 gives the normative compression ideal and notes that the joint distribution is unknown. Zhang et al. 2016/2021 gives the empirical counterexample to simple capacity accounts. Their disagreement is recorded in F8 of `01` and was resolved by re-census, not by picking a side.
3. **Animal behaviour and human cognition (genuinely low overlap).** Tolman's latent learning separates acquisition from expression, which mirrors the internal-representation versus ground-visible-behaviour distinction. Loftus's reconstructive memory shows that a reading need not be a recording and that source confusion is a real failure. These corroborate the *shape* of the source/contents verdict, not the ML fact.

The four framework essays share the framework author and the figures' evidence pool completely. Their agreement with the figures is expected and carries no independent witness weight. They are used for the canonical reading of "shape", not as outside confirmation.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25** - *"Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the union split, the source/contents distinction and the refuter; offer links after.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A reader who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit"* - ask what they would expect to see if the claim were true before giving them the article.
- **Fig 2 :40** - *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* - a send selected for people who already agree produces a convention, not corroboration.
- **Fig 9 :60** - *"Use filters for the budget and witnesses for the verdict."* Venue prestige and reviewer fame are budget filters. They never enter a verdict.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) ask what they would count as a failure; (3) record their verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1: validate the output.** Send the union split, the source/contents distinction, the per-slot claim and the pre-registered refuter. Ask what they would count as a failure. Record the verdict before showing any theory. This is Fig 10 :52, *"Bring a characterised residual, never the source"*, and Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."*
2. **Stage 2, opt-in only: read the theory that produced it.** Once a reader has absorbed the framework, their agreement stops being evidence. Later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3: use the formula recursively on a problem they can check.** Fig 4 :22 permits sending a method, because a generator is not an answer. `THE_FORMULA.md` "Direction" requires each user to write down what would refute their result before running it.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. The claim as currently drafted is a shape with a stated gap, not an inventory. Do not strengthen it into a verdict during outreach.

## Venue AI-policy caution

Two venues that are otherwise good targets have visible policies on generated content: ICLR 2026 announced an *"ICLR 2026 Policy for LLM Usage"* and a later retrospective on LLM-generated papers and reviews, and NeurIPS lists an AI reviewing experiment among its 2026 programme links. A submission of this folder must therefore be honest that the derivation was simulated with an LLM and checked only for internal consistency. Do not present it as an independently derived ground reading. The packet in `08` states this in its provenance and status lines, and the README of this folder carries the same label. Check the current cycle's policy before submitting; both policies were observed in 2026 public pages and may have changed.

## Zip

No archive was created. The folder itself is the deliverable. If you host it, prefer a link that lets a recipient decline contact, an opt-in download page is closer to the figure's rule than an attachment pushed to a list. Nothing in this folder sends anything.
