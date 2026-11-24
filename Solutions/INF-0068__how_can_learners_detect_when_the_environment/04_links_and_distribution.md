# Public links and distribution

All public links below were fetched and read on 2026-11-23. Local framework files are cited by path. Nothing here was sent to anyone by this agent.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Concept drift (reference article) | https://en.wikipedia.org/wiki/Concept_drift | Defines *"concept drift or drift is an evolution of data that invalidates the data model."* Lists remedy families (DDM, EDDM, ADWIN, KSWIN), the warning/drift phase description, the delayed-labels point, and a further-reading list of surveys and meetings. |
| A Survey on Concept Drift Adaptation | http://eprints.bournemouth.ac.uk/22491/ | Gama, Zliobaite, Bifet, Pechenizkiy and Bouchachia, ACM Computing Surveys 46(4), 2014, DOI 10.1145/2523813. Abstract opens: *"Concept drift primarily refers to an online supervised learning scenario when the relation between the input data and the target variable changes over time."* Full text accepted version linked from the page. |
| River drift detector documentation | https://riverml.xyz/latest/api/drift/ADWIN/ | States *"ADWIN (ADaptive WINdowing) is a popular drift detection method with mathematical guarantees"* and that it *"compares the average of W0 and W1 to confirm that they correspond to the same distribution."* Cites Bifet and Gavalda, SIAM SDM 2007. |
| River repository | https://github.com/online-ml/river | Topics include concept-drift and incremental learning; maintainers write *"It's more useful to ask your question in public rather than sending us a private email."* Public Discussions and Issues are enabled. |
| Journal of Machine Learning Research | https://www.jmlr.org/ | *"provides an international forum for the electronic and paper publication of high-quality scholarly articles in all areas of machine learning."* Public author-info and submission pages. |
| Machine Learning journal | https://link.springer.com/journal/10994 | *"Machine Learning is an international forum focusing on computational approaches to learning."* States it *"Prioritizes verifiable and replicable supporting evidence in all published papers."* Public submission link. |
| ACM SIGKDD | https://www.sigkdd.org/ | *"The community for AI, data science and analytics."* Public contact page and opt-in email updates. |
| KDD conference | https://www.kdd.org/ | Public conference site; KDD 2026 listed at https://kdd2026.kdd.org/ with proceedings archives. |
| ECML PKDD | https://ecmlpkdd.org/ | Official site for the European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases; public contact and paper-preprint pages. |
| arXiv cs.LG | https://arxiv.org/list/cs.LG/recent | Public listing and submission venue for machine-learning preprints; drift papers appear here. |

Framework essays opened 2026-11-23, all by Isaiah N:

| essay | URL | use here |
|---|---|---|
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Source discrimination behind one reading: *"If several paths create the same behavior, then behavior is a projection with lossy information."* Used in `05` and `06`. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Shape as a narrowed search result: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* Also the prestige/action rule. |

## Wider literature that bears on this question

1. **Gama et al. 2014 survey** is the field's own map: drift adaptation is categorised strategies and evaluation methodology. It supports the claim that "enough" is a family of decisions, not one threshold. Treat it as secondary corroboration, not as the authority for the figure-derived shape.
2. **Wikipedia's remedy list** separates reactive detection (change-detection tests, statistical process control charts) from tracking (continual updating, recent-sample retraining, ensembles). That split is the field's version of the figure's five bins: reactive detection is closest to REFUTED, tracking is closest to re-binding. The mapping is an analogue, not a derivation.
3. **The delayed-labels discussion** states that labels *"typically stabilize toward their ground truth"* over days to years. This is the field's own version of Fig 2 :33, *"The anchor must not update."* An early noisy label stream is an updating frame if it is used as the criterion.
4. **River's ADWIN** is a working proto-instrument, which is why Fig 6 :32 matters: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* ADWIN already returns something, so it is eligible to be sharpened. The figures do not derive it.
5. **Wikipedia's security section** notes that detectors tested only on short windows and lab data overstate real performance, and recommends time-aware evaluation that preserves causal ordering. That is a field-level instance of Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*, applied to evaluation protocol rather than to frame selection.

## One named strain, kept visible

ADWIN compares averages of two time windows. Fig 1 :19 says *"The residual is indexed by object slot, not aggregated."* Re-census resolves the apparent conflict: a slot is an object or region tracked, a window is a run of time for one scalar. They are different objects. The practical consequence is not a correction but a warning: if the stream feeding the detector has already pooled slots into one scalar error, the one-live-slot signal is gone before the window comparison begins. Run the check per slot or per disjoint frame.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25** - *"Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion."* Sending the full framework before anyone has described a residual sends a recording. Lead with the shape claim and its refuter; offer links after.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole architecture before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the source links.
- **Fig 2 :31 and Fig 8 :50** - independence is how little evidence frames share; two overlapping detectors are one detector wearing two names. A bulk send to a single community buys spelling, not checking.
- **Fig 2 :42** - *"Buy independence in proportion to the cost of being wrong."* Choose venues whose readers are positioned to refute the residual, not likely to endorse it.

**Recommended order in a reply:** (1) the shape claim and the pre-registered refuter; (2) ask what they would count as a failure, and record that answer first; (3) only then the three source links, with the note that the figures, not the summary, are the authority; (4) the formula as a method to reuse, with the instruction that each person writes their own refuter and states their own mode.

## The two-stage offer

**Stage 1.** Validate the shape against the ground, without the source. The recipient checks the five structural requirements and the four refuters using their own knowledge of drift. Their verdict is recorded before any theory is shown.

**Stage 2, opt-in only.** If curious, read the source material. The figures are the authority. Later agreement is never pooled as corroboration, because a reader who has now absorbed the framework shares the evidence pool (Fig 2 :40).

**Stage 3.** Offer the formula as a method. Fig 4 :22 permits a generator to cross; Stated plainly: giving away the method does not give away an answer. Each user still needs a ground and a written refuter, because *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* (*The Recursive Self-Improvement Trap*).

**Hard precondition.** Stages 1 to 3 only work if the stage-1 shape survives. The refuters are written and dated in `01_figure_grounded_audit.md` section 4; until one is run, the result is `candidate`, not `grounded`.
