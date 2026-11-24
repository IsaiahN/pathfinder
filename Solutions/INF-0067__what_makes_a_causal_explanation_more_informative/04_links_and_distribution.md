# Public links and distribution

All links below were fetched and checked on 2026-11-23 unless marked otherwise. Local framework files were read directly from the workspace.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Causal Models (SEP) | https://plato.stanford.edu/entries/causal-models/ | First published 2018-08-07, substantive revisions since. Defines interventions and the do-calculus. Key line: "A causal model makes predictions about the behavior of a system. In particular, a causal model entails the truth value, or the probability, of counterfactual claims about the system; it predicts the effects of interventions". Section 4.7 distinguishes observation from intervention. |
| Causal Approaches to Scientific Explanation (SEP) | https://plato.stanford.edu/entries/causal-explanation-science | First published 2023-03-17. Interventionist account: a generalization is causal if an intervention changing C changes E or its distribution; explanations answer "what-if-things-had-been-different questions" (w-questions). "A randomized experiment provides one paradigm of an intervention." |
| Causation and Manipulability (SEP) | https://plato.stanford.edu/entries/causation-mani | First published 2001-08-17. Barometer and storm common-cause case; two equation systems can "agree about the correlations so far observed" while disagreeing about an intervention on Y. |
| Causal Models, do-calculus supplement (SEP) | https://plato.stanford.edu/entries/causal-models/do-calculus.html | Three rules for replacing do-expressions with conditional probabilities; completeness results by Huang & Valtorta and Shpitser & Pearl. |
| Causation in Physics (SEP) | https://plato.stanford.edu/entries/causation-physics | Published 2020-08-07. Raises a real strain: "Newtonian gravitational forces, for example, cannot be turned off", and interventions into the universe as a whole are not physically possible. Handled in `09_watson_answer.md` by re-census, not by hiding it. |
| A Causal Calculus for Statistical Research (Pearl, 1995) | https://proceedings.mlr.press/r0/pearl95a.html | PMLR R0:430-449. Abstract: "we lack the mathematical notation for distinguishing causal influence from statistical association." Proposes two conditioning operators: ordinary Bayes conditioning and causal conditioning by external intervention. |
| Causal History, Statistical Relevance, and Explanatory Power (Kinney, 2023) | https://www.cambridge.org/core/journals/philosophy-of-science/article/causal-history-statistical-relevance-and-explanatory-power/57625834E512134B882653EE4B3036F6 | Philosophy of Science 90(5):1161-1172, open access. Representation theorem for explanatory power over causal history depth and "causal statistical relevance" defined as `Pr(e | do(c)) - Pr(e)`. |
| Correlation does not imply causation (Wikipedia) | https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation | Defines the phrase and lists reverse causation, common cause, bidirectionality and coincidence. Also states the legitimate use: correlational evidence "may be useful for prediction despite failing to provide evidence for causation." |
| How Can Causal Explanations Explain? (Williamson, 2013) | https://jonwilliamson.uk/publications/documents/CausalityExplanation.pdf | Erkenn 78:257-275. Prizes mechanistic and causal accounts apart; difference-making requires "some chain of events A0 = C → A1 → ... → An = E" in which each member changes the probability of the next. |
| Making Things Happen (Woodward, 2004) | https://academic.oup.com/book/4324 | Oxford University Press. Manipulationist theory: "causal and explanatory relationships are relationships that are potentially exploitable for purposes of manipulation and control"; invariant relationships do the explanatory work. |
| Inferring Unseen Causes (Civelek, Call & Seed, 2020) | https://pmc.ncbi.nlm.nih.gov/articles/PMC7218093 | Frontiers in Psychology. Human adults infer unseen causes via causal mechanisms; "it has been a challenge to decisively distinguish associative learning from causal reasoning." Source read via the search result's full abstract and introduction, accessed 2026-11-23. |
| Of babies and birds (Taylor et al., 2014) | https://pmc.ncbi.nlm.nih.gov/articles/PMC4071556 | 24-month-old children produce an effective novel action after observing a correlation; tool-making New Caledonian crows do not. Source read via the search result's full abstract, accessed 2026-11-23. |
| The Hard Problem is About Source (Isaiah N, 2026-08-28) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Metamerism: "If several paths create the same behavior, then behavior is a projection with lossy information." The spectrometer, not an argument, resolved the source question. |
| The Library of Babel: Locating The Book of Books (Isaiah N, 2026-10-02) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." |
| Decoding Tacit Knowledge (Isaiah N, 2026-11-10) | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." |
| The Recursive Self-Improvement Trap (Isaiah N, 2026-11-19) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Also the simulacra warning quoted in `README.md`. |
| How Intelligence Actually Works (Isaiah N, 2026-09-16) | https://adventuresinml.substack.com/p/how-intelligence-actually-works | Projection and provenance; "The recursion converges toward indiscernibility, and indiscernibility is not identity." |
| Figures text (local) | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md | Verbatim SVG text with line numbers. All `Fig N :line` quotes in this folder come from it. |
| Figures README (local copy) | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md | "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." |

### Fetches that failed, recorded rather than hidden

- `https://www.degruyter.com/journal/key/jci/html` (Journal of Causal Inference) returned 405 via a redirect to degruyterbrill.com. Not cited as verified; not in the contact CSV.
- `https://uai.org/` redirected to an unrelated knife-supplies domain. Not cited; not in the contact CSV. The UAI proceedings are reachable through PMLR instead.
- `https://pnas.org/doi/full/10.1073/pnas.1208724109` returned 403. The New Caledonian crow result is used only through the abstract returned by the search integration, and is marked as such in the ledger.
- `https://academic.oup.com/bjps/pages/General_Instructions` returned 403. No BJPS link is presented as a verified contact point.

## Wider literature that bears on the claim, by field

1. **Statistics and AI (Pearl 1995; SEP Causal Models).** The need for two conditioning operators is exactly the operator gap in `06_isomers_and_order.md`: observation (`P(y|x)`) versus intervention (`do(x)`). Corroborates F1 and F3.
2. **Philosophy of science (SEP Causal Explanation; Kinney 2023; Woodward 2004; Williamson 2013).** Explanatory power is tied to w-questions, interventions and invariant difference-making; Kinney gives a formal measure in which `Pr(e | do(c)) - Pr(e)` enters. Corroborates F3, F5 and F6, but note the overlap: these sources share a tradition, so they are one broad witness, not several independent ones.
3. **Physics (SEP Causation in Physics).** Conflicts with a naive "intervention is always available" reading. Re-census resolution: the anchor in Fig 2 is whatever settles the question and does not move with a frame; natural experiments and discriminating instruments can serve where a hard intervention cannot. Recorded as a strain, not smoothed.
4. **Animal behaviour (Taylor et al. 2014; Civelek, Call & Seed 2020).** Children produce a novel intervention after observing a correlation where tool-making crows do not; distinguishing associative learning from causal reasoning remains hard. Corroborates F5's generator/contact split and F7's caution about labels. Low overlap with the statistics and philosophy sources.
5. **General reference (Wikipedia).** Correlational evidence is explicitly said to be useful for prediction even when it gives no causal evidence. Corroborates F4's valence split.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25** "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the residual, the shape claim and the refuter; offer the links after.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the whole framework before giving a verdict has joined the frame being checked.
- **Fig 8 :53** "Residual first, frame second." Ask what they would expect to see if the shape claim were true before giving them the bibliography.
- **Fig 2 :35** "Alignment is triangulation, not negotiation. A mirror cannot correct you." Do not ask for agreement; ask for a failure.
- **Seat Map :163** "High correlation is disqualifying for a verdict and efficient for a convention." No bulk send, no receptiveness ranking.

**Recommended order in a reply:** (1) the residual and the shape claim; (2) the pre-registered refuter and the question "what would you count as a failure?"; (3) record their verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52 "Bring a characterised residual, never the source." The reader checks the output without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a reader has absorbed the theory, their agreement stops being evidence. The stage-1 verdict is recorded before any theory is shown and is never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method, which is permitted.** Fig 4 :22 "Only methods cross up." The formula is a generator, so giving it away does not give away an answer. Each user still needs a ground and a self-written refuter (formula "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. If a reader shows that the observed joint distribution already fixes `P(Y | do(X))` for the interventions at issue, or that a correlation-only model transfers just as well, stop and retract rather than offer the theory.
