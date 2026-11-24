# Public links and distribution

All links below were fetched on 2026-11-23 unless marked otherwise. Fetch failures are recorded, not hidden, and nothing is cited from a page that was not opened.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Verbatim figure text with line numbers (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | 1,203 lines, Figures 1 to 13 plus Operators and Symbols tables. Cite as `Fig N :line`. Every quote in this folder comes from here, not from a summary. |
| Figures README, canonical usage rule (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also the shape-not-a-name limit and *"Indiscernibility is not identity."* |
| The Formula (local) | `FRAMEWORK/figures/THE_FORMULA.md` | Eight-step loop; *"Mode. general · specified · grounded. State which."*; *"NOTHING IS EVER DELETED, and the reach falls because something was ADDED."*; the Direction discipline that binds the sought-for shape as an ordinary term. |
| The Seat Map (local) | `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` | *"Bring a characterised residual, never the source."*; *"High correlation is disqualifying for a verdict and efficient for a convention."*; *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Semantic Conceptions of Information | https://plato.stanford.edu/entries/information-semantic/ | First published 2005, substantive revision 2022. Bar-Hillel and Carnap's inverse range principle, content as the set of worlds where a sentence is false, the semantic paradox (*"A self-contradictory sentence asserts too much; it is too informative to be true"*), Shannon's *"informational pluralism"*, and Recanati's mental files: *"The information in question need not be veridical"*. |
| Vagueness | https://plato.stanford.edu/entries/vagueness/ | First published 1997, substantive revision 2022. Distinguishes ambiguity from vagueness (*"an ambiguous word bears its ambiguity directly"*) and gives supervaluationism: statements *"true under all precisifications"*, and Quine's *"indefinitely many, equally adequate rival translation manuals"*. Also: *"a false attribution of indeterminacy will lead to the premature abandonment of inquiry."* |
| Binocular rivalry | http://www.scholarpedia.org/article/Binocular_rivalry | Blake and Tong, 2008, Scholarpedia 3(12):1578. *"physically invariant stimulation leads to fluctuations in perception"*; rivalry reflects processes *"involved in resolving visual conflict arising from inherently ambiguous sensory signals"*; *"rivalry represents a default outcome when the brain fails to register matching features"*. |
| Ambiguous image | https://en.wikipedia.org/wiki/Ambiguous_image | *"Multistable perception is the occurrence of an image being able to provide multiple, although stable, perceptions."* Also the recorded majority view that mental images cannot be ambiguous, which is handled as a conflict in `09` WORLD. |
| What Uncertainties Do We Need in Bayesian Deep Learning for Computer Vision? | https://arxiv.org/abs/1703.04977 | Kendall and Gal, arXiv 1703.04977, NIPS 2017. *"Aleatoric uncertainty captures noise inherent in the observations. On the other hand, epistemic uncertainty accounts for uncertainty in the model"*. |
| Hidden Markov model | https://en.wikipedia.org/wiki/Hidden_Markov_model | Distinguishes the forward and forward-backward computations, which sum over all state sequences, from the Viterbi *"most likely explanation"*, which takes a maximum over all sequences. An engineering instance of keeping the distribution versus collapsing to one path. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question"* and *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* |

## Venue pages verified for `03_public_contact_points.csv`

Cognitive Science Society home and CogSci 2027 submissions (portal dates and double-blind rules confirmed), Cognitive Science journal and topiCS pages on that site, Psychonomic Society home and journal portfolio, Association for Computational Linguistics portal and Anthology, Journal of Philosophical Logic at Springer Nature Link with its manuscript submission link. Stanford Encyclopedia of Philosophy is included as a mapping aid, not a submission venue.

## Fetch failures, recorded honestly

- `https://plato.stanford.edu/entries/supervaluationism/`: 404. The supervaluationism material was taken from the Vagueness entry, section 5, which was fetched in full.
- `https://en.wikipedia.org/wiki/Garden_path_model`: 404. No source was cited from it.
- `https://en.wikipedia.org/wiki/Word_lattice`: 404. The engineering instance was taken from the Hidden Markov model entry instead.
- `https://academic.oup.com/jos`: 403. Journal of Semantics remains in the contact CSV with a verify-before-use note and is not counted as a read source.
- `https://onlinelibrary.wiley.com/journal/14680064`: 403. No source cited.
- `https://www.visionscience.com/`: returned a frames-only shell to the fetcher. No source cited.

## Wider literature: what bears on this question

1. **Logic and semantics, lower overlap with the framework.** Supervaluationism keeps a statement open across all admissible precisifications and calls it true only if it holds under all of them. Quine's rival translation manuals are *"equally adequate"* with no fact selecting one. This is the nearest formal analogue of holding readings without collapse, and it is corroboration of the shape, not a derivation of it. It also marks the limit: supervaluationism is about vagueness and ambiguity in language, not about a system's per-slot error signal.
2. **Perception, lower overlap.** Blake and Tong describe a physically invariant stimulus that yields alternating stable perceptions, and a default outcome when the brain fails to register matching features. That is the multistable shape at the biological scale: the alternative remains live rather than being erased. The Wikipedia entry's claim that mental images cannot be ambiguous is the one source that appears to conflict; it is returned to census in `09`, where it is assigned to a different object ( phenomenal image content, not the library record ).
3. **Engineering, lower overlap.** The HMM entry separates summing over all state sequences (forward, forward-backward) from taking the maximum over all sequences (Viterbi, *"most likely explanation"*). Kendall and Gal separate uncertainty in the observations from uncertainty in the model. Both corroborate the operational distinction between keeping a distribution of readings and collapsing to one, while leaving open when a deployment should collapse. That open part is the `gap` in F9.
4. **Philosophy of information, same general field as the question.** The SEP entry shows that semantic information was defined as a set of possible worlds and that a contradiction can be maximally informative while being false. That is a caution against treating one globally best reading as settled merely because it scores highly on a single measure.

**Overlap declaration.** The two framework essays share the figures' author and evidence pool completely, so they carry no independent witness weight. The SEP entries, Scholarpedia, Wikipedia entries, Kendall and Gal, and the HMM entry are genuinely lower overlap with the framework. The perception and engineering sources corroborate the mechanism shape, not this simulated derivation. No world source overrules a figure line.

## Distribution: offer, do not push

- **Fig 4 :22:** *"Only methods cross up. Only head starts come down."* Send the residual, the shape and the refuter before the links. A recording of a conclusion carried to a new field looks like knowledge and is a description of one occasion.
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28:** *"describe it before you go looking, or any frame you pick will seem to fit"*. Ask what the recipient would expect to see if the shape were true before showing the source list.
- **Seat Map :163:** *"High correlation is disqualifying for a verdict and efficient for a convention."* A send selected for likely agreement produces a convention, not corroboration.

**Recommended order in a reply:** (1) the shape claim and its eight refuters; (2) ask what the recipient would count as a failure; (3) record that verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1.** Send the residual and the shape claim with its refuter. No theory, no links. Ask for a failure or a correction, not agreement.

**Stage 2, opt-in only.** If the recipient is curious and has recorded a stage-1 verdict, offer the figure text and the three lower-overlap links above. Their later agreement is never pooled as corroboration, because by then they hold the frame's interior (Fig 2 :40).

**Stage 3.** Offer the formula as a method to reuse. Each user must state their own ground and write their own refuter before running it, because the formula's Direction note says a frame cannot check the direction of its own question, and *The Recursive Self-Improvement Trap* warns that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."*

**Hard precondition.** Stages 1 to 3 only work if the stage-1 output survives. If any of the eight refuters fires, do not send; narrow the claim first.

## Hosting

Nothing is sent by this agent. Hosting the packet and sending the link is yours to do. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. That is closer to the figure's rule about public, opt-in channels than a mass send.
