# Public links and distribution

All external links below were fetched and read on 2026-11-23. Local framework files were opened in the same session. Full provenance, including quotes and overlap, is in `10_source_ledger.csv`.

## 1. Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Minimum description length | https://en.wikipedia.org/wiki/Minimum_description_length | "any regularity in a given set of data can be used to compress the data"; the biased-coin example concludes "there is not enough evidence to support the hypothesis of the biased coin, even though the best element of the second model class provides better fit to the data." Rissanen 1978 is cited as the origin. |
| Overfitting | https://en.wikipedia.org/wiki/Overfitting | "The essence of overfitting is to unknowingly extract some of the residual variation (i.e., noise) as if that variation represents the underlying model structure." Also: the selection criterion and the suitability criterion are different things. |
| Inductive bias | https://en.wikipedia.org/wiki/Inductive_bias | Inductive bias is "the set of assumptions that the learner uses to predict outputs of given inputs that it has not encountered"; "Without any additional assumptions, this problem cannot be solved since unseen situations might have an arbitrary output value." |
| Apophenia | https://en.wikipedia.org/wiki/Apophenia | "the human propensity to seek patterns in random information where none exist"; in statistics it is "an example of a type I error - the false identification of patterns in data." Includes the random-pellet pigeon case from animal behaviour. |
| Texas sharpshooter fallacy | https://en.wikipedia.org/wiki/Texas_sharpshooter_fallacy | "focusing on evidence that supports a conclusion, while disregarding evidence that does not"; the hypothesis must be specified before gathering data, or the pattern is drawn after the shot. |
| No free lunch in search and optimization | https://en.wikipedia.org/wiki/No_free_lunch_in_search_and_optimization | "any two algorithms are equivalent when their performance is averaged across all possible problems"; "incompressible, or Kolmogorov random, objective functions have no regularity for an algorithm to exploit". |
| Cross-validation (statistics) | https://en.wikipedia.org/wiki/Cross-validation_(statistics) | Cross-validation assesses generalization "to an independent data set"; it "only yields meaningful results if the validation set and training set are drawn from the same population and only if human biases are controlled." Reports the MAQC-II swap-sampling result, where models developed by blinded teams across independent samples predicted poor external validity better than traditional cross-validation. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question"; "a bundle or conflation of several problems masquerading as one". |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | "If several paths create the same behavior, then behavior is a projection with lossy information"; "it cannot comment on the source"; "It was proven wrong not by argument, but by the arrival of a better instrument." |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself"; "the truly testable output would need to be derived from the real architecture or working the formula yourself." |

## 2. What the wider literature adds (corroboration only, never verdict)

1. **The world has the same one-occasion failure.** The MDL article's biased-coin example is a direct parallel to Fig 5 :43-44: better fit to the observed sequence is not enough evidence for the biased hypothesis once the hypothesis class is paid for. This corroborates the MDL *gate* reading, not the claim that MDL settles the question.
2. **The criterion mismatch is named independently.** The overfitting article says the possibility of overfitting exists when the criterion used for selecting the model differs from the criterion used to judge its suitability. That is the same structural point as Fig 1 :27 (a frame cannot score itself with a quantity it also produces), reached from statistics rather than from the figures. Separate evidence pool, so real corroboration.
3. **The test is itself a habitat substitution.** The cross-validation article states the same-population condition and the human-bias condition, and reports that swap sampling with blinded modelers predicted external validity better than ordinary cross-validation. This corroborates Fig 11 :70 and Fig 2 :31 from an engineering/statistics pool.
4. **Pattern finding in noise is a cross-species failure.** Apophenia covers human pattern seeking and the random-pellet pigeon in animal behaviour. Texas sharpshooter adds the pre-registration requirement. These corroborate Fig 9 :27-28 from cognitive science and reasoning, not from the framework.
5. **There is no universal discriminator.** No free lunch and inductive bias both say that a learner must bring assumptions; a test that worked for every regularity is not available. This corroborates the honest stop in F10, and also warns that any proposed test carries its own bias.

**Conflict rule check.** No world source conflicts with the figure verdict. Had one, the rule is to return to the domain census, not to flip the verdict. Note that the essays (W8 to W10) share an author with the figures, so their agreement is expected and carries little independent weight. The Wikipedia sources are a different pool, but they are secondary and do not overrule anything.

## 3. Distribution rules

- **Fig 4 :22:** "Only methods cross up. Only head starts come down." Send the test and the refuter, not a fitted conclusion.
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." Do not hand over the framework before the reader has recorded a verdict on stage 1.
- **Fig 9 :27-28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before showing them any source.
- **Fig 2 :40:** agreement from a shared evidence pool is worthless as a world verdict. Never pool later agreement as corroboration.
- **Fig 7 :35:** a room's agreement is variation, not a verdict. No bulk send, no ranking by likely agreement, no personal emails.

## 4. The two-stage, actually three-step offer

1. **Stage 1.** Send the residual, the three-condition shape, and the pre-registered refuter. Ask what they would count as a failure. Record their verdict before showing any theory.
2. **Stage 2, opt-in.** Only if they are curious, offer the three local sources above. The figures, not the summary, are the authority.
3. **Stage 3, opt-in.** Offer the formula as a method to reuse, with the instruction that each user names a ground, writes a refuter before the run, and states the mode of what they get.

**Hard precondition.** Stages 1 to 3 work only if the stage-1 shape survives a ground check. This folder is a simulated derivation and has not performed one. It offers the shape to be checked; it does not assert that the check has passed.
