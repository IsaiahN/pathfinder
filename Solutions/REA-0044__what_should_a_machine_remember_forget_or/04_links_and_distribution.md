# Public links and distribution

All links below were fetched and read on 2026-11-23. Venue pages establish opt-in routes only; they are silent on the memory question and carry no verdict weight. Research sources are recorded with quotes in `10_source_ledger.csv`.

## 1. Verified venue links actually fetched

| what | URL | verified content |
|---|---|---|
| NeurIPS 2026 Position Paper Track | https://neurips.cc/Conferences/2026/CallForPositionPapers | Invites positions on "what should be done", expects a clear position in fewer than three sentences, invites an "Alternative Views" or counterarguments section, double-blind, 9-page limit. Explicit AI guardrail: the final paper must be "substantially written by human authors" and AI use must be stated at submission. |
| NeurIPS 2026 Call for Papers | https://neurips.cc/Conferences/2026/CallForPapers | Interdisciplinary scope including continual learning, generalization and multi-task learning, socio-technical aspects of AI, and neuroscience and cognitive science. Abstract deadline May 4 2026 AOE, full paper May 6 2026 AOE. |
| NeurIPS 2026 Call for Workshops | https://neurips.cc/Conferences/2026/CallForWorkshops | Public workshop proposal route for narrower topics. |
| ICLR 2027 | https://iclr.cc/ | Representation-learning conference; published author AI policy; abstract deadline Sep 18 2026 AOE, paper deadline Sep 25 2026 AOE. |
| JMLR | https://jmlr.org/ | Open-access machine learning journal, public submission and contact pages, Volumes 26/27 active in 2026. |
| TMLR | https://jmlr.org/tmlr/ | Rolling submissions via OpenReview, double-blind, "technical correctness over subjective significance", shorter format. |
| arXiv cs.LG | https://arxiv.org/archive/cs.LG | Public category description: machine learning including robustness, explanation, fairness and methodology. |

## 2. Verified research links actually fetched

| source | URL | what bears on this question |
|---|---|---|
| Bourtoule et al., *Machine Unlearning*, IEEE S&P 2021 (arXiv v3) | https://arxiv.org/abs/1912.03817 | *"any model trained with said data may have memorized it"* and *"having models unlearn is notoriously difficult."* A channel-level conflict with "nothing is ever deleted": it operates on parameters, not on a provenance-bearing record. Returned to census, zero verdict weight. |
| Kirkpatrick et al., *Overcoming catastrophic forgetting in neural networks*, PNAS 2017 (arXiv v2) | https://arxiv.org/abs/1612.00796 | *"Our approach remembers old tasks by selectively slowing down learning on the weights important for those tasks."* A partial analogue of F1: selective retention depends on importance, which here is a ground-paid quantity. |
| De Lange et al., *A continual learning survey*, TPAMI 2021 (arXiv v3) | https://arxiv.org/abs/1909.08383 | *"continually accumulate knowledge over different tasks without the need to retrain from scratch"* and a "stability-plasticity trade-off" framework. Corroborates that accumulation, not erasure, is the engineering target. |
| Nader, Schafe and Le Doux, *Fear memories require protein synthesis...*, Nature 406, 2000 | https://www.nature.com/articles/35021052 | *"consolidated fear memories, when reactivated, return to a labile state that requires de novo protein synthesis for reconsolidation."* A low-overlap biological analogue: reactivation can change a memory without deleting the organism's history. |
| Martin Fowler, *Event Sourcing*, 2005 | https://martinfowler.com/eaaDev/EventSourcing.html | *"all changes to application state are stored as a sequence of events"*; the event log is "a purely additive structure". An engineering instance of a growing record and a derivable state. |
| Conant and Ashby, *Every good regulator of a system must be a model of that system*, 1970, read via Wikipedia's Good regulator theorem page | https://en.wikipedia.org/wiki/Good_regulator_theorem | The theorem's title claim, plus the note that the map is only a homomorphism, so *"the model can lose information about the entity that is modeled."* Corroborates both retention and lossy compression. |
| Wikipedia, *Forgetting* | https://en.wikipedia.org/wiki/Forgetting | *"Failing to retrieve an event does not mean that this specific event has been forever forgotten."* A low-overlap human-cognition analogue of refusal versus deletion. Also quotes Peter Burke's question about *"who wants whom to forget what"*, a social-memory analogue of the "whose interests" clause. |
| Regulation (EU) 2016/679, Article 17, read at GDPR-info | https://gdpr-info.eu/art-17-gdpr/ | *"The data subject shall have the right to obtain from the controller the erasure of personal data concerning him or her without undue delay."* A real stake that conflicts with record-only-grows at the substrate level and must be declared, not hidden. |

## 3. Wider literature context (why fields were chosen)

The search was driven by the residual, not by a preferred answer (Fig 8 :53, *"Residual first, frame second"*). Three low-overlap fields were opened deliberately:

- **Machine learning and privacy** (unlearning, continual learning, catastrophic forgetting) is the host field and is treated as **one evidence pool**, not three independent witnesses. It supplies the engineering vocabulary for "forget" and "compress".
- **Neuroscience and human cognition** (reconsolidation, forgetting and retrieval failure) is a separate pool. It supports the shape that a memory can be altered or made inaccessible without the past being erased, and it does not share the ML evidence base.
- **Software engineering, cybernetics and law** are three further separate pools. Event sourcing instantiates an additive record; the good regulator theorem states that what a regulator must keep is a model of what it regulates, and that the model is lossy; GDPR states whose interest can legally require erasure.

Agreement across these pools is corroboration of the **shape** only. No pool supplies a figure line, and no pool is allowed to flip a verdict (Fig 9 :60, *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*).

## 4. Distribution rules: offer, do not push

- **Fig 4 :22-25** — *"Only methods cross up. Only head starts come down."* A recording carried upward is a description of one occasion. Lead with the refuter and the shape; offer the links after a verdict is recorded.
- **Fig 10 :42** — *"A verifier that can reconstruct the claim cannot verify it."* A recipient who absorbs the framework before judging stage 1 joins the frame being checked.
- **Fig 9 :27-28** — *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape were true before showing the source.
- **Fig 2 :40** — agreement from a shared pool is *"disqualifying for a verdict"*. Do not select recipients by likelihood of agreement and do not pool later agreement as corroboration.
- **Fig 10 :59-60** — *"an interest in the reading is disqualifying"* and any stake that cannot be removed must be declared. State that this package is simulated derivation and that its author has a stake in the framework being found useful.

## 5. The two-stage offer (stage 1 verdict before any theory)

1. **Stage 1.** Send `08_expert_verification_packet.md` (or the short form in `02_outreach_email.md`): the residual in effect terms, the three sub-claims with verbatim figure lines, and the four falsifiers. Ask what the recipient would count as a failure. Record that verdict before anything else is shown.
2. **Stage 2, opt-in only.** If they are curious, offer the three source links. The figures, not this summary, are the authority. A later agreement is never added to stage 1 as corroboration (Fig 2 :40).
3. **Stage 3, method only.** Offer the formula and ask each user to write their own refuter and state their own mode. Fig 4 :22 permits method transfer; Formula "Direction" (local) explains why a loop cannot certify its own question.

**Hard precondition:** stage 1 works only if the three sub-claims survive. F2 and F3 in `01_figure_grounded_audit.md` are the ones most likely to fail on contact with a memory researcher. A failure is a useful result; send it back to the census rather than softening the claim.

## 6. Legal and venue constraint

NeurIPS 2026 position papers, JMLR, TMLR, ICLR and arXiv are public opt-in routes. None requires a personal email or a purchased list. The NeurIPS position-paper call explicitly restricts AI authorship and requires disclosure. Since this work is LLM-assisted, a human researcher must own and write any submission; this file set is a private checking instrument and a source of refuters, not an authored paper. No material is sent by this agent. Hosting and sending are the user's to do.
