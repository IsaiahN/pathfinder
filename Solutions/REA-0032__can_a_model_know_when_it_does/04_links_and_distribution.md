# Public links and distribution

All links below were fetched and verified on 2026-11-23. They are public pages. No personal email addresses were collected, stored or used.

## Verified framework sources

| what | URL | verified content |
|---|---|---|
| Figures folder, branch `general-agent` | https://github.com/IsaiahN/tether/tree/general-agent/figures | public repo with Figures 1 to 13 plus Operators and Symbols tables as SVG, with `README.md` and `THE_FORMULA.md`. Its README says the figures "outrank everything else in the repo" and gives the citation form `Fig N :line`. |
| Canonical figure text with line numbers | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | verbatim extract regenerated from the SVGs; every `Fig N :line` citation in this folder was checked against it. |
| Canonical usage rule | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | states that the framework returns "a shape, not a name" and that "Indiscernibility is not identity." |
| Figures as metalaws | local: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` | WATSON 60, 2026-11-22: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. |

## Verified public venues

Those are recorded in `03_public_contact_points.csv` with source URLs and verification dates. The load-bearing ones are the AUAI site and its opt-in mailing list, OpenReview, ICML 2026, JMLR and arXiv. All are institutional or opt-in. None is a purchased or scraped list.

## Wider literature actually read, and what each bears on the question

These are secondary corroboration only. The figures decide. Overlap is declared in `10_source_ledger.csv`.

1. **Guo, Pleiss, Sun and Weinberger, "On Calibration of Modern Neural Networks", ICML 2017.** https://arxiv.org/abs/1706.04599 . Verified abstract: "We discover that modern neural networks, unlike those from a decade ago, are poorly calibrated." Predicts that raw confidence is not a reliable correctness likelihood. Corroborates F1 (confidence disqualified) from the ML calibration field.
2. **Geifman and El-Yaniv, "Selective Classification for Deep Neural Networks", NeurIPS 2017.** https://proceedings.neurips.cc/paper_files/paper/2017/hash/4a8423d5e91fda00bb7e46540e2b0cf1-Abstract.html . The paper names the question directly: "a rudimentary kind of self-awareness... is the ability to know what you don't know, which can make you smarter." It delivers a "dial" that guarantees a target error rate by abstaining, at a cost in coverage. Corroborates F5 (the discrimination is a contact relation, not inspection) from engineering practice.
3. **Angelopoulos and Bates, "A Gentle Introduction to Conformal Prediction and Distribution-Free Uncertainty Quantification", FTML 2023.** https://arxiv.org/abs/2107.07511 . Verified abstract: sets "are valid in a distribution-free sense" and cover the ground truth "with a user-specified probability, such as 90%." The full text adds that conformal prediction is "a method for taking any heuristic notion of uncertainty from any model and converting it to a rigorous one," and warns that if the scores are bad, "then the sets will be useless." Corroborates F5 and sharpens it: the external calibration data is doing the work, not the model's private confidence.
4. **Kadavath et al., "Language Models (Mostly) Know What They Know", 2022.** https://arxiv.org/abs/2207.05221 . Verified abstract: models are well-calibrated "when they are provided in the right format"; P(True) self-evaluation works; P(IK) "partially generalize[s] across tasks, though they struggle with calibration of P(IK) on new tasks." Corroborates F7 (format and direction matter) and F6 (out-of-distribution calibration fails). Note the overlap with Guo 2017 (cited inside the paper); they are one evidence pool on the calibration point, so count them as one witness there.
5. **Koriat, "How do we know that we know? The accessibility model of the feeling of knowing", Psychological Review 1993.** https://psycnet.apa.org/record/1994-04361-001 . Abstract: "The results challenge the view that FOK is based on a direct, privileged access to an internal monitor." Corroborates F9 from human cognition.
6. **Koriat, "The Feeling of Knowing: Some Metatheoretical Implications for Consciousness and Control", Consciousness and Cognition 2000.** https://www.sciencedirect.com/science/article/pii/S1053810000904331 . Abstract: "Rather than reflecting direct access to memory traces, noetic feelings are based on inferential heuristics that operate implicitly and unintentionally." Second Koriat source; high overlap with the 1993 paper. Counted as one witness in the human-cognition field.

Fields covered: machine learning calibration, machine learning selective prediction, statistics and conformal prediction, language-model self-evaluation, human cognition and metacognition. Disciplines are different and the evidence pools are mostly distinct; the two Koriat papers and the Guo/Kadavath link are declared overlaps.

## What the world sources do not do

None of them settles the figure verdict. They predict the same direction (confidence alone is insufficient, external calibration helps, self-knowledge is cue-based rather than privileged) from different instruments. Agreement from a shared pool is one witness, not two (Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool").

## Distribution rules: offer, do not push

- **Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."** Seat 4 "must not hold the interiors". A recipient who has absorbed the whole framework before giving a verdict has joined the frame being checked. Record the stage-1 verdict first.
- **Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit."** Lead with the residual and the refuter; only then offer the links.
- **Fig 4 :22: "Only methods cross up. Only head starts come down."** The formula is a generator, so sharing it does not give away an answer. Send the generator, not a recording of a conclusion.
- **Fig 2 :42: "Buy independence in proportion to the cost of being wrong."** In high-stakes contexts buy a real anchor and a genuinely independent frame; do not substitute a larger room of agreeing readers (Seat Map :283: "A room does not upgrade the label.").
- **Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention."** No receptiveness ranking, no bulk send, no pooling of later agreement as corroboration.

**Recommended order in a reply:** (1) the four domain verdicts and the refuter; (2) ask what the recipient would count as a failure; (3) record that verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer, restated

Stage 1: the shape claim and its pre-registered refuter, with no theory attached. Stage 2, opt-in only: the source links. Stage 3, opt-in only: the formula as a reusable method, with the instruction that each user writes their own refuter and states their own mode.

Stages 2 and 3 are gated on stage 1 surviving. Fig 10 :52: "Bring a characterised residual, never the source." Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

## Hosting

Nothing is sent by this agent. Hosting (Drive, Dropbox, a repo release) and sending are yours to do. Prefer an opt-in download page that lets a recipient decline contact, which is closer to the figure's rule than an attachment pushed to a list.
