# Public links and distribution

Every URL in the tables below was opened on 2026-11-23. Quotes are transcribed from what was actually fetched. Local framework files are cited by path rather than by URL.

## Verified world sources

| what | URL | verified content |
|---|---|---|
| Shortcut learning perspective | https://www.nature.com/articles/s42256-020-00257-z | Geirhos, Jacobsen, Michaelis et al., *Nature Machine Intelligence* 2, 665 to 673, published 10 Nov 2020. Abstract: "Shortcuts are decision rules that perform well on standard benchmarks but fail to transfer to more challenging testing conditions, such as real-world scenarios." Also notes related issues in comparative psychology, education and linguistics. |
| Underspecification | https://arxiv.org/abs/2011.03395 | D'Amour et al., arXiv:2011.03395, v2 2020; JMLR 23. Abstract: "An ML pipeline is underspecified when it can return many predictors with equivalently strong held-out performance in the training domain." and "such predictors can behave very differently in deployment domains." |
| WILDS benchmark | https://arxiv.org/abs/2012.07421 | Koh et al., arXiv:2012.07421, v3 2021; ICML 2021. Abstract: "On each dataset, we show that standard training yields substantially lower out-of-distribution than in-distribution performance." |
| Clever Hans predictors | https://www.nature.com/articles/s41467-019-08987-4 | Lapuschkin et al., *Nature Communications* 10, 1096, 2019, open access. Abstract: "We observe that standard performance evaluation metrics can be oblivious to distinguishing these diverse problem solving behaviors." The text describes a classifier using a source tag as a spurious cue and an Atari agent exploiting a nudging loophole. |
| Texture versus shape bias | https://arxiv.org/abs/1811.12231 | Geirhos, Rubisch, Michaelis et al., arXiv:1811.12231, ICLR 2019 oral. Abstract: "We show that ImageNet-trained CNNs are strongly biased towards recognising textures rather than shapes, which is in stark contrast to human behavioural evidence and reveals fundamentally different classification strategies." |
| Domain adaptation theory | https://link.springer.com/article/10.1007/s10994-009-5152-4 | Ben-David, Blitzer, Crammer et al., *Machine Learning* 79, 151 to 175, 2010, open access. Abstract: "Discriminative learning methods for classification perform well when training and test data are drawn from the same distribution." Target error is bounded by source error plus a divergence between domains. |

## Verified public venues

Opened on 2026-11-23: https://neurips.cc/ , https://iclr.cc/ , https://icml.cc/ , https://www.jmlr.org/ , https://jmlr.org/tmlr/ . Full list in `03_public_contact_points.csv`. Each has a public submission or contact route; none requires a personal email.

## Local authorities actually read

- `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, the citation authority)
- `FRAMEWORK/reference/FIGURES_README_canonical.md` (canonical usage rule)
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (figures as metalaws)
- `FRAMEWORK/figures/THE_FORMULA.md` (eight-step loop and mode rule)
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` (seats, failure genera, correlation rule)

## What the wider literature contributes, and its limits

The six world sources are secondary corroboration only. They are all in or adjacent to the machine-learning evidence pool, and two share a first author (Geirhos), so their agreement is partly one pool talking, not six independent witnesses. Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." What they add is mechanism-level specificity that the figures, being domain-agnostic, do not supply:

1. **The causal shape is corroborated.** Shortcut learning states the failure in almost the same effect terms: a decision rule that performs well on standard benchmarks but fails to transfer. Underspecification and Clever Hans add two distinct mechanisms (multiple equally good in-domain predictors, and spurious cues). These are candidate conditions in the union of §1 of `01_figure_grounded_audit.md`, not replacements for the figure verdict.
2. **The texture/shape paper supplies a concrete "small change".** A texture-shape cue conflict changes very little in the image while changing the classification strategy required. It is an instance of habitat substitution, not a new law.
3. **Domain adaptation theory states the dependency formally.** Target error is a function of source error and the divergence between domains, which is the mathematics of "the score cannot by itself license the transfer claim." It corroborates Fig 9 :60 (filter is not witness) in a different notation and a low-overlap frame (learning theory rather than empirical ML).
4. **No world source conflicts with the figure verdict.** The conflict rule was not triggered. The corroboration is recorded, not promoted to a verdict.

## Distribution: offer, do not push

Figure-grounded reasons, each checked against the verbatim extract:

- **Fig 4 :22:** "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter; offer links after.
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." Outside frame must not hold the interiors. A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27 to :28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the sources.
- **Seat Map :163:** "High correlation is disqualifying for a verdict and efficient for a convention." A mass send selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the residual and the shape claim; (2) the five refuters, and the question of what they would count as a failure; (3) record their verdict; (4) only then the links, with the note that the figures, not this summary, are the authority.

## The two-stage offer (the operational rule)

- **Stage 1 before stage 2** is Fig 10 :52 ("Bring a characterised residual, never the source") and Fig 2 :45 ("Frames range against the ground. They do not negotiate with it."). The recipient checks the shape claim without holding the framework interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. The stage-1 verdict must be recorded first and later agreement never pooled (Fig 2 :40).
- **Stage 3 sends a method, which is permitted.** Fig 4 :22: "Only methods cross up. Only head starts come down." The formula is a generator, so giving it away does not give away an answer.
- **Stage 3 still needs a ground per problem.** `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question. Each user must write down what would refute their result before running it and label the mode of what they get.

## Hosting

Nothing is sent by this agent. Hosting the packet (Drive, Dropbox, a repository release) and sending the link is yours to do. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. That is closer to the figure's rule about opt-in, ground-visible channels (Fig 2 :42: "Buy independence in proportion to the cost of being wrong.").
