# Public links and distribution

Every URL below was fetched and verified on 2026-11-24. One fetch failed and is recorded as such at the end. Nothing is sent by this agent; hosting and sending are yours to do.

## Verified sources

| what | URL | verified content |
|---|---|---|
| METR time-horizon paper | https://arxiv.org/html/2503.14499 | Kwa, West et al., NeurIPS 2025, arXiv v4 July 2026. Abstract: "Despite rapid progress on AI benchmarks, the real-world meaning of benchmark performance remains unclear." Discussion: time horizon "is always measured relative to a domain, task distribution, and human baseliners' level of skill and context." Code and raw data are public. |
| Hidden stratification | https://arxiv.org/html/1909.12475v2 | Oakden-Rayner, Carneiro, Dunnmon and Ré, 2019, published CHIL 2020. "aggregate performance measures such as accuracy, sensitivity (i.e. recall), or ROC AUC can be dominated by larger subsets, obscuring the fact that there may be an unidentified subset of cases within which performance is poor." Concrete case: pneumothorax AUC 0.94 with chest drains, 0.77 without, aggregate 0.87. |
| AI safety case construction | https://arxiv.org/html/2601.22773 | Lee, Zhu et al., Data61 CSIRO and University of Ottawa, arXiv v3 March 2026. "safety properties cannot be assessed independently of the surrounding system and its operational context." Also: "evidence must be continually refreshed as model behaviour and deployment contexts evolve." Systematic review of 112 primary studies. |
| Underspecification | https://www.jmlr.org/papers/v23/20-1335.html | D'Amour et al., JMLR 23(226), 2022. "Such a pipeline is underspecified when it can return many distinct predictors with equivalently strong test performance" and "such predictors can behave very differently in deployment domains." |
| Dangerous-capability evaluations | https://arxiv.org/abs/2403.13793 | Phuong et al., 2024. "We do not find evidence of strong dangerous capabilities in the models we evaluated, but we flag early warning signs." The authors frame the work as advancing a rigorous science of evaluation, not as certifying safety. |
| NIST AI RMF | https://www.nist.gov/itl/ai-risk-management-framework | NIST, released 26 January 2023, revision noted 2026. "intended for voluntary use and to improve the ability to incorporate trustworthiness considerations into the design, development, use, and evaluation of AI products, services, and systems." Developed through public comments and workshops. |
| International AI Safety Report 2026 | https://internationalaisafetyreport.org/ | Bengio et al., published 3 February 2026, over 100 experts, over 30 countries. Technical-safeguards update: "significant gaps remain: sophisticated attackers can often bypass current defences, and the real-world effectiveness of many safeguards is uncertain." |
| METR organisation page | https://metr.org/ | "We inform the public about the risks and capabilities of advanced AI systems." Public research, notes, updates and risk-assessment pages; public partnerships listed. |
| AIES 2026 | https://www.aies-conference.com/ | Ninth AAAI/ACM Conference on AI, Ethics, and Society, Malmo, Sweden, 12 to 14 October 2026. Public proceedings and author policies. |
| ACM FAccT | https://facctconference.org/ | "A computer science conference with a cross-disciplinary focus that brings together researchers and practitioners interested in fairness, accountability, and transparency in socio-technical systems." Public calls and author resources for 2026 and 2027. |
| Library of Babel essay | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2 October 2026. Anchor and shape passages, including "you will need something to tether and anchor you to reality, the same way a mountaineer needs a tether when rappelling or climbing." |
| Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 28 August 2026. Metamerism and spectrometer case: "An instrument that can't distinguish these cases demonstrates its own inadequacy." |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 19 November 2026. "Prestige can fund an action... But it cannot settle an action. Only the ground can settle it." Also the simulated-output caveat used throughout this folder. |
| Figures README, canonical local copy | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md | Read this session. "They outrank everything else in the repo" and the framework returns "a shape, not a name." |
| Figures text with line numbers | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md | Read this session. Source of every Fig N :line citation in this folder. |

**Fetch that failed.** `https://www.york.ac.uk/media/assuring-autonomy/documents/AMLASv1.1.pdf` returned "Unsupported fetched file content type: application/pdf" on 2026-11-24. It is not cited anywhere in this solution and no quote is taken from it. The safety-case definition used here comes from the Lee et al. HTML paper, which was opened. Kept visible so the withdrawal is checkable.

## What in the wider literature bears on this question

1. **Benchmark success is not deployment success.** METR states the real-world meaning of benchmark performance is unclear and that its time horizon is relative to a domain and task distribution; D'Amour et al. show that pipelines with equivalently strong test performance can "behave very differently in deployment domains." Together they are the empirical version of Fig 11 :70 (harness as substituted habitat). The two sources are from different author groups and different subfields, so their agreement is not one lab's pool.
2. **Aggregates hide the slots that matter.** Oakden-Rayner et al. give a measured instance: a model with strong aggregate AUC performs far worse on the clinically important subgroup. This is the empirical version of Fig 1 :19-22. It also supplies a practical instrument (subclass labels and error auditing) for the slot test in `08` §5.
3. **Safety cases are the current institutional form of the certificate.** Lee et al. show that classical assurance rests on well-specified boundaries, stable architectures and known failure modes, while AI systems have none of those, so assurance becomes "a process of continuous learning rather than static certification." This corroborates the maintenance constraint without needing the framework's authority.
4. **Non-detection is reported carefully by practitioners.** Phuong et al. explicitly separate "we do not find evidence" from "there is no risk." That is Fig 8 :39 followed in practice. The International AI Safety Report adds that the real-world effectiveness of many safeguards is uncertain.
5. **None of these sources claims to settle the question.** They supply methods, measurements and caveats. The verdict in `09_watson_answer.md` comes from the figures; these sources corroborate at low overlap and do not decide.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22 and :25** : "Only methods cross up. Only head starts come down." and "A recording carried upward looks like knowledge and is a description of one occasion." Sending the full packet before anyone has described a residual sends a recording. Lead with the residual and its refuter; offer the links after.
- **Fig 10 :42** : "A verifier that can reconstruct the claim cannot verify it." Seat 4 must not hold the interiors. A recipient who has absorbed the framework before giving a stage-1 verdict has joined the frame being checked.
- **Fig 9 :27-28** : "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the essays.
- **Fig 2 :40** : "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A list ranked by likely agreement produces a convention, not corroboration.
- **Fig 2 :42** : "Buy independence in proportion to the cost of being wrong." Safety is a high-cost verdict, so seek reviewers whose instruments differ from yours, not reviewers who share your evidence.

**Recommended order in a reply:** (1) the residual and its refuter; (2) ask what they would count as a failure; (3) record that verdict; (4) only then the three source links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52, "Bring a characterised residual, never the source", and Fig 2 :45, "Frames range against the ground. They do not negotiate with it." The recipient checks the shape claim without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Stage-1 verdicts are recorded before any theory is shown and are never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method, which is permitted.** Fig 4 :22: "Only methods cross up." The formula is a generator, so giving it away does not give away an answer. Each user still needs a ground per problem, and must write their own refuter before running it (Formula "Direction"; *Recursive Self-Improvement Trap* on simulated outputs).
- **Hard precondition:** the three stages work only if the stage-1 object survives. Here the stage-1 object is the shape claim in `08` §2, not the certificate reading, which was refused in `01` §5. Send the corrected form only.

## Hosting

The folder is local. If you host it, prefer a link that lets a recipient decline contact, an opt-in download page rather than an attachment pushed to a list. That is closer to the figure's rule than a mass send, and it avoids the GDPR and CAN-SPAM style failures that come with harvested addresses.
