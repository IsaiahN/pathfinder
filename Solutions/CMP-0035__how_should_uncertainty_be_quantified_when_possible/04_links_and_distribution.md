# Public links and distribution

All links in the first two tables were opened on 2026-11-22. World sources were opened through public pages listed in `10_source_ledger.csv` and are secondary corroboration only. The figures decide.

## 1. Verified public contact and submission links

| what | URL | verified content |
|---|---|---|
| SIAM/ASA Journal on Uncertainty Quantification | https://www.siam.org/publications/journals/siam-asa-journal-on-uncertainty-quantification-juq | Joint SIAM and ASA journal. Scope: "significant mathematical, statistical, algorithmic, and application advances in uncertainty quantification, defined as the interface of complex modeling of processes and data, especially characterizations of the uncertainties inherent in the use of such models." Active 2026 issues visible. |
| JUQ instructions for authors | https://epubs.siam.org/journal/juq/instructions-for-authors | Requires a brief plain-language significance statement and PDF submission through the tracking system. |
| SIAM submission and peer-review system | https://peerreview.siam.org/ | Public portal with a JUQ entry. |
| International Journal for Uncertainty Quantification | https://www.uncertainty-quantification.com/forauthors/ | Begell House journal, free online access. Scope includes "representation of uncertainty, propagation of uncertainty across scales, resolving the curse of dimensionality." Public submission site. |
| IJUQ current issue | https://uncertainty-quantification.com/articles/52034eb04b657aea,6ec03f670534f4b1.html?year=2026 | Volume 16, 2026. Papers on model discrepancy priors, rare-event probabilities and ensemble filters show the active frontier. |
| Society for Risk Analysis | https://www.sra.org/ | "Risk analysis is broadly defined to include risk assessment, risk characterization, risk communication, risk management, and policy relating to risk." Foundational Issues and Decision Analysis and Risk specialty groups are public. |
| SRA contacts page | https://www.sra.org/about-sra/contacts/ | Public institutional contact page and general inquiry route. No personal emails are reproduced in this folder. |
| SRA call for papers: Risk Analysis in Extreme Uncertainty | https://www.sra.org/wp-content/uploads/2026/11/Call-for-Papers-Risk-Issues-in-the-Current-Wartime_Onepage.pdf | Opt-in call seeking work on decisions "amid incomplete information, scarce resources, rapidly changing conditions, and extreme uncertainty." Deadline on the fetched notice: 30 April 2027. |
| Risk Analysis author instructions | https://onlinelibrary.wiley.com/page/journal/15396924/homepage/ForAuthors.html | Public author route for the SRA journal. |

## 2. World sources actually read and what they bear on

These are not figure lines. They predict what a UQ specialist would expect and are used only to check whether the figure verdict is plausible in this field.

| source (field) | quote read | predicts here | relation to figure verdict |
|---|---|---|---|
| Knight, *Risk, Uncertainty and Profit* (1921), economics. https://www.econlib.org/library/Knight/knRUP.html?chapter_num=3 | "The essential fact is that 'risk' means in some cases a quantity susceptible of measurement, while at other times it is something distinctly not of this character" | Two categories must not be collapsed into one number | Corroborates F1 and F4 from economics, a low-overlap field. Knight's "unmeasurable uncertainty" is not identical to structural absence, so the corroboration is partial. |
| Hüllermeier and Waegeman, *Machine Learning* 110 (2021), statistics/ML. https://link.springer.com/article/10.1007/s10994-021-05946-3 | "epistemic uncertainty refers to the reducible part of the (total) uncertainty, whereas aleatoric uncertainty refers to the irreducible part" | A report must mark which part is which | Corroborates F2 and F4. Their later statement that these are "context-dependent" corroborates F9 level relativity rather than conflicting with it. |
| Kendall and Gal, NIPS 2017, ML/engineering. https://papers.neurips.cc/paper/7141-what-uncertainties-do-we-need-in-bayesian-deep-learning-for-computer-vision.pdf | "Aleatoric uncertainty captures noise inherent in the observations. On the other hand, epistemic uncertainty accounts for uncertainty in the model" | Model uncertainty is a distinct object from observation noise | Corroborates the need for separate fields. They also say the models are "not mutually exclusive," which supports reporting both rather than choosing one. |
| Roy and Oberkampf, *CMAME* 200 (2011), scientific computing. http://ftp.demec.ufpr.br/disciplinas/TM798/Artigos_seminarios/roy_oberkampf_2011-verification.pdf | "Aleatory (random) uncertainties in model inputs are treated as random variables, while epistemic (lack of knowledge) uncertainties are treated as intervals with no assumed probability distributions" | The structural field must not be a probability over outcomes | Corroborates F3 and the field 3 recommendation. |
| Sandia perspective, OSTI 933214, risk assessment. https://www.osti.gov/servlets/purl/933214 | "Where it is practical, calculation input characterizations should separate aleatory and epistemic uncertainties. Similarly, aleatory and epistemic uncertainties should be represented separately in calculation outputs." | Separation is required at the output, not only internally | Corroborates F2 and F3 from a high-consequence engineering practice. |
| Gneiting and Raftery, *JASA* 102 (2007), statistics. https://sites.stat.washington.edu/raftery/Research/PDF/Gneiting2007jasa.pdf | "In prediction problems, proper scoring rules encourage the forecaster to make careful assessments and to be honest" | Scoring must be against the materialised outcome, not self-reported | Corroborates F6. The score is the world-side instrument the figure's anchor rule asks for. |
| Wimmer et al., PMLR 216 (2023), ML. https://proceedings.mlr.press/v216/wimmer23a.html | "we critically discuss the idea of an additive decomposition of total uncertainty into its aleatoric and epistemic constituents" and "raise concerns about current practice in uncertainty quantification" | Additive recombination reintroduces the error | Corroborates F3. Agreement here is from a shared problem pool with the other ML sources, so it is one witness, not three. |
| Bickford Smith et al., PMLR 267 (2025), ML. https://proceedings.mlr.press/v267/bickford-smith25a.html | "the aleatoric-epistemic view being insufficiently expressive to capture all the distinct quantities that researchers are interested in" | A two-way split alone is not enough; a structural marker is owed | Corroborates F1 and F3. Same pool caveat as above. |
| Caraco, Martindale and Whittam, *Animal Behaviour* 28 (1980), animal behaviour. https://www.sciencedirect.com/science/article/pii/S0003347280801424 | "foraging preferences for variable rewards respond not only to the mean, but also the variance, of food rewards. The nature of their preferences for variable rewards is related to their expected daily energy budget." | The same variance has opposite valence depending on the residual | Corroborates Fig 11 :49 at low overlap: "An actor’s valence is relative to the residual, not a property it carries." Variance is not good or bad in itself. |
| Baranski and Petrusic, *Perception & Psychophysics* 55 (1994), human cognition. https://link.springer.com/article/10.3758/BF03205299 | "providing trial-by-trial response feedback on difficult tasks improved resolution but had no effect on calibration" | Self-report without ground feedback does not improve | Corroborates F6 at low overlap with UQ. |

**Overlap warning.** Kendall and Gal, Hüllermeier and Waegeman, Wimmer et al. and Bickford Smith et al. all draw on the same modern ML literature. Their agreement is one evidence pool speaking four times. Knight (economics), Caraco et al. (animal behaviour), Baranski and Petrusic (human cognition), Roy and Oberkampf (scientific computing) and Gneiting and Raftery (statistics) are genuinely lower-overlap witnesses. No world source overrules a figure line; a conflict would send the census back to the start.

## 3. Distribution: offer, do not push

- **Fig 4 :22** "Only methods cross up. Only head starts come down." Sending a full derivation before anyone has described their residual sends a recording. Lead with the shape claim and the refuter.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what the recipient would expect to see if the shape claim were true before giving them any source.
- **Fig 2 :40** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Do not rank recipients by likely agreement, and do not pool later agreement as corroboration.
- **Fig 9 :60** "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Journal scope, impact and prestige are filters for where to try, never reasons the claim is right.

**Recommended order in a reply:** (1) the shape claim and the five refuters; (2) ask what the recipient would count as a failure and what their ground would be; (3) record that verdict; (4) only then offer the source links, with the note that the figures, not the summary, are the authority; (5) offer the formula as a method for their own problem, with the instruction to write their own refuter and state their own mode first.

## 4. The two-stage offer

1. **Stage 1 (verdict first):** the residual in effect terms, the five-field shape claim, and the pre-registered refuters. The recipient checks this without holding the framework's interior. Ground: Fig 10 :52 "Bring a characterised residual, never the source." Fig 2 :45 "Frames range against the ground. They do not negotiate with it."
2. **Stage 2 (opt-in only):** links and the derivation, offered only after the stage-1 verdict is recorded. Later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3 (method reuse, optional):** the formula as a generator for the recipient's own problem. Fig 4 :22 permits sending a method. Each user must write their own refuter and label their own mode, because "Direction" in `THE_FORMULA.md` says a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. As written in `01_figure_grounded_audit.md`, it is a `specified` shape with an unrun refuter, not a settled result. Say so in the first contact; do not upgrade it to a finding.

## 5. Hosting

Nothing in this folder is sent by this agent. The packet in `08_expert_verification_packet.md` and the draft in `02_outreach_email.md` are ready to host and send. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. That is closer to the figure's account of a frame ranging against a ground and keeps the contact cost separate from the evidence.
