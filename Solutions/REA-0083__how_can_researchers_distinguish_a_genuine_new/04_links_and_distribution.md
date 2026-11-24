# Public links and distribution

All links below were fetched 2026-11-24 unless marked otherwise. A fetch that failed is recorded as a failure, not quoted from.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Emergent abilities, defining paper | https://arxiv.org/abs/2206.07682 | Wei et al., *Emergent Abilities of Large Language Models*, TMLR 2022. "We consider an ability to be emergent if it is not present in smaller models but is present in larger models. Thus, emergent abilities cannot be predicted simply by extrapolating the performance of smaller models." |
| Emergence as a metric artifact | https://arxiv.org/abs/2304.15004 | Schaeffer, Miranda and Koyejo, *Are Emergent Abilities of Large Language Models a Mirage?*, 2023. "nonlinear or discontinuous metrics produce apparent emergent abilities, whereas linear or continuous metrics produce smooth, continuous predictable changes in model performance." |
| Contamination-limited benchmark | https://arxiv.org/abs/2406.19314 | White et al., *LiveBench: A Challenging, Contamination-Limited LLM Benchmark*, ICLR 2025 Spotlight. "Test set contamination, wherein test data from a benchmark ends up in a newer model's training set, is a well-documented obstacle for fair LLM evaluation and can quickly render benchmarks obsolete." |
| LiveBench project repository | https://github.com/LiveBench/LiveBench | Public repo, readme verifies monthly refreshed questions, "verifiable, objective ground-truth answers", 18 tasks in 6 categories, and a public Issues route for model evaluation. Published project email exists on the readme; this folder uses the Issues route only. |
| Capability evaluation organization | https://metr.org/ | METR, "Model Evaluation & Threat Research", states "We inform the public about the risks and capabilities of advanced AI systems." Public research, notes, and risk-assessment pages; institutional contact published. |
| Statistics of model selection | https://en.wikipedia.org/wiki/Overfitting | "The possibility of over-fitting exists when the criterion used for selecting the model is not the same as the criterion used to judge the suitability of a model." |
| Measurement and targets | https://en.wikipedia.org/wiki/Goodhart%27s_law | "When a measure becomes a target, it ceases to be a good measure." Includes Goodhart's 1975 formulation and Strathern 1997. |
| Competence versus performance | https://en.wikipedia.org/wiki/Linguistic_competence | "Competence is the collection of subconscious rules that one knows when one knows a language; performance is the system which puts these rules to use." The article records the critique that choosing between the two explanations "can require investigating whether the additional assumptions are supported by independent evidence." |
| Shape, search, and stopping | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." |
| Simulated-output warning and prestige rule | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Also the simulator warning quoted in `README.md` and `01`. |
| Source discrimination | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. "If several paths create the same behavior, then behavior is a projection with lossy information" and "An instrument that can't distinguish these cases demonstrates its own inadequacy". |
| Contact and effect descriptions | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 2026-11-10. "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Also "Sounding right isn't the same as being checked against the world, which is why I call the Turing test a test of fluency, not of accuracy." |
| Benchmark venue | https://neurips.cc/Conferences/2025/CallForDatasetsBenchmarks | The 2025 call welcomes "novel benchmarking methodologies and designs, e.g., approaches to mitigate LLM contamination" and directs track questions to a public contact form. |
| Conference submission route | https://iclr.cc/Conferences/2026 | ICLR 2026 site with public contact page, OpenReview proceedings, and current-year calls. |
| Review venue | https://openreview.net/group?id=TMLR | OpenReview shell confirmed; venue identity cross-checked against the Wei et al. record naming TMLR 2022. |
| Preprint submission rules | https://arxiv.org/help/submit | Public submission guidelines: registered authors, moderation, topical and refereeable contributions. |
| Government consortium mapping | https://www.nist.gov/artificial-intelligence/nist-ai-consortium/nist-ai-consortium-members | Public member list including METR, MLCommons, and universities, updated 2026-10-20. |
| Venue integrity policy | https://blog.iclr.cc/2025/11/19/iclr-2026-response-to-llm-generated-papers-and-reviews/ | "if an author or reviewer uses an LLM, they must disclose this and they also are ultimately responsible for the LLM's outputs". |

## Fetch failures, recorded honestly

- `https://neurips.cc/Conferences/2026/CallForDatasetsBenchmarks` returned 404 on 2026-11-24. The 2025 call was fetched and is the one cited. Check the current-year page before submitting.
- `https://plato.stanford.edu/entries/chomsky/` returned 404. The competence/performance point is taken from the Wikipedia article that was opened, and attributed to that article, not to the Stanford Encyclopedia.
- `https://livebench.ai/` returned no tool output (a JavaScript-only page). The arXiv paper and the GitHub repository were opened instead; both are cited.
- The NIST AI Consortium interest form was seen as a link on the verified members page but was not separately fetched, so it is noted as a mapping aid and not treated as a verified submission route.

## Two things in the wider literature that bear directly on this question

1. **The jump can be in the metric, not the model.** Schaeffer et al. 2023 confirm three predictions on InstructGPT/GPT-3 and a meta-analysis of BIG-bench, then manufacture never-before-seen emergent abilities in vision tasks by choosing metrics. This is a direct outside witness for Fig 1 :19 and Fig 1 :22: a per-slot residual must be read before a capability is inferred from an aggregate. Cite it when explaining why the first condition is per-slot.
2. **The anchor has to be kept fresh.** LiveBench releases new questions monthly with objective ground-truth answers, explicitly so that contamination does not make the benchmark obsolete. This is the practical counterpart of Fig 2 :29-30 and Fig 10 :26. Cite it when explaining why a fixed public benchmark stops being an anchor. Wei et al. 2022 is the claim under test, not corroboration for our verdict; it is included so the recipient sees the strongest form of the opposing case.

## Overlap declaration

Wei et al., Schaeffer et al., LiveBench, METR, arXiv, and the venue pages are all in one AI-evaluation evidence pool. They are several witnesses from that pool, not independent corroboration of each other. The genuinely low-overlap witnesses are the statistics source (overfitting), the measurement source (Goodhart's law), and the linguistics source (competence versus performance). The framework essays share the framework author's pool completely with the figures and carry no independent witness weight. Where an outside source agrees with a figure, it corroborates a mechanism shape; it does not settle the framework claim.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52:** "Bring a characterised residual, never the source." The separator and its refuter go first. The figures go after a verdict is recorded.
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :30:** "your words are borrowed too, so describe the effect". Ask what they would expect to see if the separator were true before giving them the theory.
- **Fig 2 :40:** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Do not select recipients for likely agreement, and do not pool later agreement as corroboration.
- **Fig 4 :25:** "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, the separator and the refuter, not a conclusion.

**Recommended order in a reply:** (1) the residual and the four conditions; (2) ask what they would count as a failure and record it; (3) only then the links, with the note that the figures, not the summary, are the authority; (4) if asked, the formula as a method to reuse with their own refuter and mode.

## Venue constraint

ICLR's policy post states that LLM use must be disclosed and that authors remain responsible for outputs. This folder is a simulated derivation. Anything submitted must disclose that, must not present simulated output as a ground reading, and must carry a pre-registered refuter. The same caution applies to all other venues in `03_public_contact_points.csv`; check each current-year policy before submitting.

## Hosting and sending

Nothing in this folder is sent by this agent. Hosting and sending the packet are yours to do. Prefer an opt-in download page or a public submission portal over an attachment pushed to a list, so a recipient can decline contact. For the LiveBench route, use the public Issues tracker rather than the project email, so the exchange stays visible and opt-in.
