# Public links and distribution

All links below were fetched and read on 2026-11-23. Links that were seen on a fetched page but not opened are marked as such.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Towards Causal Representation Learning | https://arxiv.org/abs/2102.11107 | Schölkopf, Locatello, Bauer, Ke, Kalchbrenner, Goyal, Bengio, submitted 2021-02-22, Special Issue of Proceedings of the IEEE. Abstract names "causal representation learning, the discovery of high-level causal variables from low-level observations." Full HTML read. |
| VAEs and Nonlinear ICA: A Unifying Framework | https://arxiv.org/abs/1907.04809 | Khemakhem, Kingma, Monti, Hyvärinen, AISTATS 2020, pp 2207-2217. Abstract: "This is known to be generally impossible due to unidentifiability of the model" and "Our result requires a factorized prior distribution over the latent variables that is conditioned on an additionally observed variable". |
| Causal inference (Wikipedia) | https://en.wikipedia.org/wiki/Causal_inference | Multi-field survey. States "one cannot determine the direction of a causal relation based on correlations only" and that in applied economics and political science "randomized field experiments are widely used to identify causal effects, since they help address confounding that complicates observational studies." |
| Causality (Wikipedia) | https://en.wikipedia.org/wiki/Causality | Philosophy and cognition. Hume: "the human mind is unable to perceive causal relations directly." Structure-learning section: Type 1 and Type 2 triplets "represent the same statistical dependencies ... and are, therefore, indistinguishable within purely cross-sectional data." |
| PubMed search, causal learning children intervention | https://pubmed.ncbi.nlm.nih.gov/?term=Gopnik+causal+learning+children+intervention | 18 results. Located two developmental studies used below. |
| Meltzoff, Waismeyer and Gopnik 2012 abstract | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:22369335&format=json&resultType=core | Developmental Psychology 48(5):1215-1228. Quote: "Results fell to chance when the cause and effect were temporally reversed, so that the events were merely associated but not causally related." |
| Schulz, Gopnik and Glymour 2007 abstract | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:17444973&format=json&resultType=core | Developmental Science 10(3):322-332. Quote: "The conditional intervention principle is a formal principle that relates patterns of interventions and outcomes to causal structure." |
| Figures README, canonical | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Listed in the exemplar and the local canonical copy; the local `FRAMEWORK/reference/FIGURES_README_canonical.md` was opened and used. GitHub page not opened this session, so the local copy is the cited form. |
| Arrival of the Fittest: The Tether Architecture | https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether | 2026-08-19. Full architecture post with all figures, formula, citation list, and the section "Three mappings offered and declined." |
| Eight essays | see `05_what_shape_means.md` and `10_source_ledger.csv` | All eight were opened this session; verbatim quotes are recorded in the ledger. |

## What in the wider literature bears on the question

1. **Observational equivalence is the exact shape the figures predict.** Schölkopf et al. write that without additional assumptions three causal structures over X and Y "can be realized by these models ... the same in all three cases", and that "a right price" on function complexity is one of the extra assumptions that can break the tie. The Wikipedia Causality article gives the three-variable version: two DAGs in the same Markov equivalence class imply the same conditional independence. This is Fig 12's isomer in a new field: same variables, different bond, identical observable formula, different behaviour under intervention. It corroborates F1 and F2, it does not overrule them.

2. **Every positive identifiability result pays for an import.** Khemakhem et al. achieve identification only with a prior "conditioned on an additionally observed variable, such as a class label". Schölkopf et al. note that causal discovery "frequently requires collecting data from multiple environments, or the ability to perform interventions" and that "a significant amount of prior knowledge is encoded in which variables are measured". This is Fig 6 :14 "the only operator that moves the wall" with a source gate. It is the reason the answer splits on the word "alone".

3. **A low-overlap field reaches the same conclusion from human development.** Meltzoff et al. (developmental psychology) found that young children give special weight to goal-directed interventions to "distinguish correlations from genuine causal relations", and that performance fell to chance when cause and effect were temporally reversed. Schulz et al. (developmental science) show preschoolers using the conditional intervention principle "even in the absence of differential spatiotemporal cues and specific mechanism knowledge". This corroborates the import verdict from a field with almost no overlap with machine learning. It is a different witness, not a second copy of the ML literature.

4. **A second low-overlap field, philosophy of mind.** The Causality article's report of Hume, that "the human mind is unable to perceive causal relations directly", is the oldest version of the same per-slot residual: causation is not given in the percept. Use it as a framing quote, not as evidence for a modern ML claim.

5. **Overlap warning.** Schölkopf et al. and Khemakhem et al. share authors, venues and a bibliography. They are one evidence pool with two names (Fig 2 :40). The developmental studies and the philosophy article are genuinely lower overlap. The eight essays are by the framework's author and carry no independent corroboration weight.

## Distribution: offer, do not push

- **Fig 4 :22 "Only methods cross up. Only head starts come down."** Sending the full framework before anyone has described the residual sends a recording. Lead with the three conditions and the refuter; offer links after.
- **Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."** A recipient who has absorbed the theory before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit"** Ask what they would expect to see if the shape claim were true before naming any method or benchmark.
- **Fig 2 :42 "Buy independence in proportion to the cost of being wrong."** Send to venues whose reviewers are positioned to refute the claim, not to people chosen for likely agreement.

**Recommended order in a reply:** (1) the three conditions and the boundary claim; (2) the pre-registered refuter and the question "what would you count as a failure?"; (3) record the verdict; (4) only then the links, with the note that the figure text, not my summary, is the authority.

## The two-stage offer

1. **Stage 1.** Send the residual, the three-domain shape and the refuter. Ask what would count as a failure. Record the answer before any theory is shown.
2. **Stage 2, opt in only.** If they are curious, offer the figure text, the canonical README and the architecture post. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3.** Offer the formula as a method to reuse. Each user writes their own refuter and states their own mode. The architecture post warns that outputs "could never be verified if the solutions presented were not contrived to fit the formula."

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The universal impossibility reading in F10 does not and was retracted. Send the corrected shape and its refuter.

## Hosting

I can keep the artifacts local. **I cannot upload them or send them to anyone.** Hosting and sending is yours to do. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list.
