# Public links and distribution

Every URL below was fetched and read on 2026-11-24. Notes on what failed are kept at the end; nothing is presented as read when the fetch failed.

## Verified links

| what | URL | verified content |
|---|---|---|
| Scalable oversight design | https://arxiv.org/abs/2211.03540 | Bowman, Hyun, Perez et al., 2022, cs.HC. Abstract proposes tasks "for which human specialists succeed but unaided humans and current general AI systems fail" and reports that participants using an unreliable LLM assistant through chat "substantially outperform both the model alone and their own unaided performance." This is the superhuman/subhuman regime in the question, tested empirically. |
| Weak-to-strong supervision | https://arxiv.org/abs/2312.09390 | Burns, Izmailov, Kirchner et al., 2023, cs.CL. Abstract: "future superhuman models will behave in complex ways too difficult for humans to reliably evaluate; humans will only be able to weakly supervise superhuman models." Reports weak-to-strong generalisation and that naive finetuning is "far from recovering the full capabilities of strong models." |
| RLHF limitations and oversight | https://arxiv.org/abs/2307.15217 | Casper, Davies, Shi et al., 2023, cs.AI. Abstract surveys "open problems and fundamental limitations of RLHF and related methods" and proposes "auditing and disclosure standards to improve societal oversight of RLHF systems." |
| AI safety via debate | https://arxiv.org/abs/1805.00899 | Irving, Christiano, Amodei, 2018, stat.ML. Abstract: judging "can fail if the task is too complicated for a human to directly judge"; proposes a two-agent debate judged by a human, with a complexity analogy (PSPACE with polynomial judges versus NP for direct judging). A concrete multi-frame arrangement. |
| Reward model overoptimisation | https://arxiv.org/abs/2210.10760 | Gao, Schulman, Hilton, 2022, cs.LG. Abstract: "Because the reward model is an imperfect proxy, optimizing its value too much can hinder ground truth performance, in accordance with Goodhart's law." Directly bears on proxy versus ground. |
| Gödel incompleteness, SEP | https://plato.stanford.edu/entries/goedel-incompleteness/ | Stanford Encyclopedia of Philosophy, first published 2013, substantive revision 2025. "the consistency of F cannot be proved in F itself" (second theorem). A low-overlap mathematical corroboration of a frame's inability to certify its own limit. |
| Automation bias | https://pubmed.ncbi.nlm.nih.gov/?term=automation+bias+systematic+review+Goddard | PubMed results read 2026-11-24. Goddard, Roudsari and Wyatt, J Am Med Inform Assoc 2012;19(1):121-7, PMID 21685142. Abstract: "Automation bias (AB)--the tendency to over-rely on automation--has been studied in various academic fields" and discusses "automation-induced complacency, or insufficient monitoring of automation output." The individual article page returned only a navigation stub on fetch, so the quote is taken from the abstract displayed on the results page that was actually read. |
| Error monitoring in animals | https://pubmed.ncbi.nlm.nih.gov/?term=metacognition+animals+error+monitoring+uncertainty | PubMed results read 2026-11-24. Öztel and Balcı, Sci Rep 2024, PMID 39375395, "Mice monitor their timing errors"; Kononowicz, van Wassenhove and Doyère, PNAS 2022, PMID 35193973, "Rodents monitor their error in self-generated duration on a single trial basis"; Loconsole et al., Anim Cogn 2025, uncertainty monitoring in Eurasian jays. Low-overlap field: animal cognition. The individual article pages returned stubs, so quotes are limited to the abstracts displayed on the results page. |
| NIST AI RMF | https://www.nist.gov/itl/ai-risk-management-framework | NIST Information Technology Laboratory. Framework released 2023-01-26, revised under the 2026 AI Action Plan. Intended "to improve the ability to incorporate trustworthiness considerations into the design, development, use, and evaluation of AI products, services, and systems." Government/engineering venue. |
| NIST AI RMF Engage | https://www.nist.gov/itl/ai-risk-management-framework/ai-risk-management-framework-engage | Public workshops, RFIs, draft review and feedback routes; page updated 2026-08-13. The opt-in institutional contact route used in `03_public_contact_points.csv`. |
| ACM FAccT 2027 CFP | https://facctconference.org/2027/cfp.html | Call for papers with focus areas including "(In)appropriate reliance and (over)trust in computational systems", "Human-centered approaches", "human-in-the-loop systems", "Value alignment and human feedback", and "Science of responsible, safe, ethical, and trustworthy AI evaluation and governance." Submission through OpenReview. |
| ACM FAccT site | https://facctconference.org/ | Interdisciplinary conference description and current calls. |
| ACM CHI 2026 | https://chi2026.acm.org/ | Leading international HCI conference, Barcelona 2026. Confirms papers, posters, panels, workshops and meet-ups as public contribution routes. |

Failed or deliberately excluded: `https://aaai.org/Conferences/ Conferences/aies.php` returned 404 and is not cited. `https://europepmc.org/article/MED/21685142` and the MED/39375395 equivalent returned 403 and are not cited. `https://info.arxiv.org/help/submit.html` returned 404 and is not cited. `https://pmc.ncbi.nlm.nih.gov/articles/PMC3372699/` turned out to be an unrelated drug-use paper and was discarded rather than cited. `https://pmc.ncbi.nlm.nih.gov/articles/PMC3243219/` was also unrelated and discarded.

## Wider literature that bears on the question

1. **The regime in the question is a real experimental target.** Bowman et al. define scalable oversight by tasks where specialists succeed but unaided people and current systems fail. Their positive result (a person using an unreliable assistant beat both) is not evidence that unaided people are good at detecting errors; it is evidence that the *arrangement* changed capability. That matches Fig 11 :39 and refutes any reading of this solution that says oversight cannot work.
2. **Weak supervision is the structural limit.** Burns et al. name the exact axis in Fig 2 :37-38: complex model behaviour is "too difficult for humans to reliably evaluate." Their recovery of near GPT-3.5 performance with a GPT-2-level supervisor plus an auxiliary confidence loss is an imported instrument, not a demonstration that the weak supervisor became strong.
3. **The proxy is not the ground.** Gao et al.'s overoptimisation curve instantiates Goodhart's law, which is the same warning as Fig 2 :29-30: if a reading moves when you optimise it, it is not an anchor.
4. **Multi-frame arrangements are the empirical counterpart of triangulation.** Debate (Irving et al.) makes the human judge a comparator of two frames rather than a producer of the answer, which is close to the soundness condition in Fig 10 :42.
5. **Low-overlap corroboration from animal cognition.** Rodents and jays show that error and uncertainty monitoring are solvable by arrangements of memory, reward and decision, not by a single global self-report. This is corroboration only; it does not decide the human-oversight question.
6. **Mathematics, lower overlap still.** The second incompleteness theorem, as reported by SEP, forbids a consistent system from proving its own consistency. Fig 8 uses this as a metaframe barrier. It corroborates the structural claim that an oversight arrangement cannot certify itself from inside.

## Distribution rules: offer, do not push

The figure-grounded reasons:

- **Fig 10 :52** "Bring a characterised residual, never the source." Sending the full framework before a recipient has described a residual sends a recording, not a generator. Lead with the claim and the refuter.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a verdict has joined the frame being checked. Record their verdict on stage 1 before showing anything else.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the claim were true before giving them the literature.
- **Fig 2 :40** "agreement about the world is worthless when the agreeing frames share an evidence pool." Do not select recipients for likely agreement, and do not pool later agreement as corroboration.
- **Fig 4 :22** "Only methods cross up. Only head starts come down." The formula may be given away as a method; the conclusion may not be smuggled in with it.

**Recommended order in a reply:** (1) the claim and its four refuters; (2) ask what they would count as a failure; (3) record that verdict; (4) only then the links, with the note that the figures, not the summary, are the authority; (5) offer the formula as a method with a ground and a refuter per problem.

## Two-stage offer, restated

Stage 1 is checkable by an outside frame with no access to the interiors. Stage 2 is opt in and never counted as evidence. Stage 3 is a method transfer. Nothing is sent by this agent; the user hosts and sends. Prefer an opt-in download or submission page over an attachment pushed to a list. One to one, no bulk send, no personal emails.
