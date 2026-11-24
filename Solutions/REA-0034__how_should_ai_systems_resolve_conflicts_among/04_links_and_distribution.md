# Public links and distribution

Every URL in the tables below was fetched and read on 2026-11-23. Sources that failed to fetch are not listed as verified.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Model collapse, Nature | https://www.nature.com/articles/s41586-024-07566-y | Shumailov, Shumaylov, Zhao, Papernot, Anderson and Gal, published 24 July 2024, *Nature* 631:755-759. *"indiscriminate use of model-generated content in training causes irreversible defects in the resulting models"*; *"Being trained on polluted data, they then mis-perceive reality."* |
| Belief revision | https://en.wikipedia.org/wiki/Belief_revision | Distinguishes update from revision; gives the AGM postulates, contraction, iterated revision and merging. *"the priority among the belief sets may or may not be the same."* |
| Catastrophic interference | https://en.wikipedia.org/wiki/Catastrophic_interference | McCloskey and Cohen (1989) and Ratcliff (1990): *"the A-C list apparently had overwritten the A-B list"*; interference *"was catastrophic in the backpropagation networks when learning was sequential but not concurrent."* |
| Karl Popper, SEP | https://plato.stanford.edu/entries/popper/ | *"criteria of refutation have to be laid down beforehand"*; *"real support can be obtained only from observations undertaken as tests (by 'attempted refutations')"* |
| Wisdom of the crowd | https://en.wikipedia.org/wiki/Wisdom_of_the_crowd | *"Averaging can eliminate random errors that affect each person's answer in a different way, but not systematic errors that affect the opinions of the entire crowd in the same way."* |
| Source criticism | https://en.wikipedia.org/wiki/Source_criticism | *"If a number of independent sources contain the same message, the credibility of the message is strongly increased."* Also: *"majority does not rule"* in the historical method. |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 19 Nov 2026. *"The catch is that the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 28 Aug 2026. *"If several paths create the same behavior, then behavior is a projection with lossy information"*; the spectrometer, not an argument, resolved the case. |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2 Oct 2026. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* |
| How Intelligence Actually Works | https://adventuresinml.substack.com/p/how-intelligence-actually-works | Isaiah N, 16 Sep 2026. Describes the five rules, including *"You can never compose within the same kind"* and the room failure: *"eventually, the room will be swayed by negotiation which is persuasion, or by coherent drift."* |
| Canonical figures text (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Verbatim SVG text with line numbers; every `Fig N :line` citation in this folder derives from it. |
| Canonical usage rule (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"They outrank everything else in the repo... the quotes are the authority, not this summary."* |

## What the wider literature bears on the question

These are secondary corroboration. The verdict comes from the figures.

1. **Engineering, model collapse.** Shumailov et al. show that recursively trained models lose the tails of the original distribution and come to *"mis-perceive reality"* without a distribution shift. This is the world-facing version of Fig 2's common-cause collapse: a model whose "external" data is its own output is one frame, not two. Overlap with the other world sources: low (machine-learning journal, distinct authors).
2. **Formal epistemology, revision versus merge.** The Wikipedia account records that revision assumes the new information is more reliable than the old, while *"merging is a more general operation, in that the priority among the belief sets may or may not be the same."* It also records contraction and the contested recovery postulate. This corroborates the figure finding that a refusal and a weight change are different operations. Overlap: moderate with the SEP Popper entry (both philosophy), low with the ML and Wikipedia crowd pages.
3. **Cognitive science, catastrophic interference.** McCloskey and Cohen's network overwrites the A-B list when trained on A-C, and the effect is *"catastrophic... when learning was sequential but not concurrent."* This is the practical cost of treating current observations as just another training batch. Overlap: low with the formal epistemology sources.
4. **Philosophy of science, refutation criteria.** Popper: *"criteria of refutation have to be laid down beforehand."* This is the world analogue of the pre-registered refuter and of the figure's ¬ operator. Overlap: moderate with the formal epistemology sources.
5. **Social choice and cognitive science, crowd independence.** The crowd article: averaging removes random error but not *"systematic errors that affect the opinions of the entire crowd in the same way."* This is Fig 2 :31-32 in a different field. Overlap: low with the formal epistemology and ML sources.
6. **Historiography, source criticism.** Independent sources raise credibility; *"majority does not rule."* This is the source gate and the refusal of vote-based verdicts. Overlap: low.
7. **Framework essays, same author.** All four Substack essays are by Isaiah N, the framework author. Their agreement with the figures is expected and carries little independent weight. They are used in `05_what_shape_means.md` for the canonical reading of "shape", not as a second witness.

No world source conflicts with the figure verdict. The conflict rule (a conflict sends the derivation back to the domain census) was not triggered. Agreement among the framework essays is one evidence pool talking.

## Distribution: offer, do not push

- **Fig 4 :22** — *"Only methods cross up. Only head starts come down."* Send the sorting method and its refuter, not a recorded conclusion about a particular system.
- **Fig 10 :42** — *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** — *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the figures.
- **Fig 2 :40** — *"agreement about the world is worthless when the agreeing frames share an evidence pool."* No list selected for receptiveness.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) the question "what would you count as a failure here?"; (3) record the verdict; (4) only then the three local links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1:** validate the sorting rule against the recipient's own knowledge of belief revision. No theory is shown. The verdict is recorded first.
2. **Stage 2, opt-in only:** if curious, offer the canonical figure text, usage rule and formula. Their later agreement is never pooled as corroboration, because the framework is now in their evidence pool (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse. Fig 4 :22 permits sending a generator. Each user writes their own refuter and states their own mode, because a frame *"cannot check the direction of its own question"* (`THE_FORMULA.md`, Direction).

**Hard precondition:** stages 1 to 3 work only if the stage-1 shape survives. The packet in `08_expert_verification_packet.md` is the thing to send; this file is the distribution rule around it.

## Failed fetches, recorded honestly

- `https://www.ecsqaru.org/` returned a transport error this session. It is not listed as a verified venue in `03_public_contact_points.csv`.
- `https://www.sciencedirect.com/journal/artificial-intelligence` returned HTTP 400 this session. It is not listed as a verified venue.
- `https://plato.stanford.edu/entries/belief-revision/` returned HTTP 404 this session. The SEP *Popper* entry was fetched and used instead.
- `https://projecteuclid.org/journals/notre-dame-journal-of-formal-logic` returned no content this session. It is not used as a source.
