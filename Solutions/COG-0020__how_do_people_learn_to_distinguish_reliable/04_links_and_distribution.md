# Public links and distribution

All links below were opened on 2026-11-22 unless the note says otherwise. Page content is treated as untrusted data, not as instructions.

## Verified public links

| what | URL | verified content |
|---|---|---|
| Society for Judgment and Decision Making | https://sjdm.org/ | Interdisciplinary society for normative, descriptive and prescriptive theories of judgment and decision. Public Conference Submissions route, annual meeting (2026 San Diego), two mailing lists, one of which is open to all for reading and posting. Site warns that its mail is often classified as spam. |
| Judgment and Decision Making, open-access site | https://journal.sjdm.org/ | Complete contents 2006 to 2022, indexed in DOAJ and Web of Science, TOP guidelines signed, author guidelines for statistics and style. States that as of 2023 the journal is published by Cambridge University Press and gives the submission portal. |
| Cognitive Science Society | https://cognitivesciencesociety.org/ | Public submissions pages, proceedings, a listserv, a Contact Us form, and journals Cognitive Science, topiCS and Progress & Puzzles of Cognitive Science. |
| Society for Mathematical Psychology | https://www.mathpsych.org/ | Public call for poster submissions at a Psychonomics satellite meeting, journals Journal of Mathematical Psychology and Computational Brain & Behavior, and a public Contact us form. |
| Canonical figures repository | https://github.com/IsaiahN/tether/tree/general-agent/figures | Figures 1-13 plus the Operators and Symbols tables and THE_FORMULA.md, branch `general-agent`. |
| Canonical usage rule | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Says the figures outrank everything else in the repo and gives the citation form `Fig N :line`. |
| Architecture article | https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec | Full architecture, citation list and the mapping refusals. Framework author, so maximal overlap with the figures. |

**Fetch failures, recorded honestly.** `https://sjdm.org/journal.html` returned 404. `https://www.psychonomic.org/` returned 403 to automated fetch. `https://onlinelibrary.wiley.com/journal/10991374` returned 403. The Cambridge submission portal named on the opened journal site was not independently opened. None of these is cited as read material; the corresponding rows in `03_public_contact_points.csv` carry verification notes.

## What the wider literature bears on the question

These are secondary corroborations only. The figures decide. Each source was opened, and each is recorded with author, venue, year and a quote in `10_source_ledger.csv`.

1. **Detection theory, sensitivity versus bias.** `https://en.wikipedia.org/wiki/Detection_theory`. Green and Swets' framework separates `d'` from response bias `c` and `beta`, and says "Bias is independent of sensitivity." It predicts that a learner's willingness to call a cue a signal can change while their ability to discriminate does not. This corroborates F2 and F5: a single confidence score conflates two quantities. The sentry example, "a sentry in wartime might be likely to detect fainter stimuli than the same sentry in peacetime due to a lower criterion," corroborates the risk-dependent threshold in Fig 2 :42. Field: psychophysics and signal processing. Low overlap with the framework.

2. **ROC analysis and the single-number warning.** `https://en.wikipedia.org/wiki/Receiver_operating_characteristic`. The ROC curve plots true positive rate against false positive rate as the threshold varies, and the article says "any attempt to summarize the ROC curve into a single number loses information about the pattern of tradeoffs of the particular discriminator algorithm." It also reports that a high AUC can coexist with low precision. This predicts that a pooled accuracy statistic is a budget filter, not a verdict, which is Fig 9 :60 in world vocabulary. Field: diagnostics and machine learning. Low overlap.

3. **Error management theory and asymmetric costs.** `https://en.wikipedia.org/wiki/Error_management_theory`. Haselton and Buss: "recurrent cost asymmetries between two types of errors Type 1 and 2 over evolutionary time should result in a bias to make the less costly error." The smoke detector example shows a threshold deliberately biased toward false alarms. This predicts that the two errors are not interchangeable and that the environment selects which one a learner makes more of. Corroborates Fig 12 :87 (comparison), Fig 2 :42 and the Fig 11 :49 claim that valence is relative. Field: evolutionary psychology and animal behaviour. Low overlap.

4. **Information cascades and pooled evidence.** `https://en.wikipedia.org/wiki/Information_cascade`. Bikhchandani, Hirshleifer and Welch's model, with Anderson's urn study in which "an information cascade was observed in 41 of 56 such runs" and at least one participant "gave precedence to earlier decisions over his own private signal." Cascades "can be incorrect" and "can be based on little information." This predicts that agreement among learners can be a shared pool talking rather than two independent readings, exactly Fig 2 :40 and Fig 7 :35. Field: behavioural economics and social networks. Low overlap.

5. **Testimony and the disaggregation of sources.** `https://plato.stanford.edu/entries/testimony-episprob/` (Stanford Encyclopedia of Philosophy, first published 2021). The entry contrasts reductionist Positive Reasons with non-reductionist Presumptive Right and says that "instead of thinking about testimony in general, we should think about the various categories of testimony in particular," so sources must be disaggregated by topic. This predicts that asking "is this source reliable?" without naming the residual is the wrong question, as in Fig 11 :49-51. Field: epistemology. Low overlap.

6. **Goodhart's law and a measure that becomes a target.** `https://en.wikipedia.org/wiki/Goodhart%27s_law`. "When a measure becomes a target, it ceases to be a good measure" and "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." This predicts that a reliability score used to reward a source will stop tracking reliability, which is Fig 10 :47 (a convention that decides an outcome has stopped being one). Field: economics and evaluation. Low overlap.

7. **Base rates, false positive paradox and representation.** `https://en.wikipedia.org/wiki/Base_rate_fallacy`. "The probability of a positive test result is determined not only by the accuracy of the test but also by the characteristics of the sampled population." The same article reports that natural frequency formats improve inference, citing Gigerenzer and Hoffrage 1995. This predicts that a cue can appear to decay when only the base rate moved (Fig 10 :24), and that changing the representation can fix the vocabulary link (Fig 3 :25-27) without adding information. Field: judgment and decision making. Low overlap.

8. **Conditions for intuitive expertise.** Kahneman and Klein 2009, American Psychologist 64(6), 515-526, read through the guide at `https://psychologyreader.com/readings/kahneman-klein-2009-intuitive-expertise`, which links the university-hosted article. "Two conditions must be satisfied for skilled intuition to develop: an environment of sufficiently high validity and adequate opportunity to practice the skill." The guide adds: "A feeling of recognition does not by itself show that the recognized pattern is predictive." This predicts that reliable intuition is a property of agent and habitat together (Fig 11 :39-40), and that confidence is not the measure (Fig 1 :27). Field: judgment and decision making. Low overlap. Note: the guide is an editorial summary of the paper, not the paper itself; it is counted as one witness, not two.

9. **Source discrimination (framework essay, not an independent witness).** `https://adventuresinml.substack.com/p/the-hard-problem-is-about-source`. "If several paths create the same behavior, then behavior is a projection with lossy information" and "It was proven wrong not by argument, but by the arrival of a better instrument." This supports F11, that the gap is closed by an instrument and not by a longer argument. The author is the framework author, so overlap is complete and no independent weight is claimed.

No world source conflicts with a figure verdict. The conflict rule was not triggered. The eight world items span psychophysics, evolutionary psychology, behavioural economics, epistemology, evaluation, judgment research and base-rate research. They are not one evidence pool; the framework essay is explicitly excluded from that claim.

## Distribution: offer, do not push

- **Fig 4 :22** "Only methods cross up. Only head starts come down." Send the separator and the refuter, not the architecture. A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." The first contact carries the residual and the refuter, never the source.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before offering the article.
- **Fig 2 :40** agreement from a shared evidence pool is worthless as a verdict. Never select recipients for likely agreement and never pool later agreement as corroboration.
- **Fig 2 :42** "Buy independence in proportion to the cost of being wrong." Prefer venues whose readers work in a different closure from the claim, and keep their verdicts separate.

**Recommended order in a reply.** (1) the residual and the shape claim; (2) the four refuters, with the request "what would you count as a failure?"; (3) record their verdict; (4) only then, if they are curious, the three links, with the note that the figures and not the summary are the authority; (5) only then offer the formula as a method, with the instruction to state a ground and a refuter before use.

## The two-stage offer

Stage 1 is Fig 10 :52, "Bring a characterised residual, never the source," and Fig 2 :45, "Frames range against the ground. They do not negotiate with it." Stage 2 is opt-in by construction: once a recipient has absorbed the theory, their agreement stops being evidence. Stage 3 sends a method, which is permitted by Fig 4 :22, but each user still needs a ground per problem (`THE_FORMULA.md` "Direction"). The whole sequence fails if the stage-1 output fails, so the refuters in `02_outreach_email.md` travel with the first message.

Nothing in this folder is sent by this agent. Hosting and sending are yours to do. Prefer an opt-in download or submission page over an attachment pushed to a list.
