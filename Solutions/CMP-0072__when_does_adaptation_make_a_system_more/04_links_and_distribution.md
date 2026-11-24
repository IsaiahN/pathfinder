# Public links and distribution

All URLs below were fetched and read on 2026-11-22. Where a fetch failed, the source was dropped rather than cited.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Specification gaming (DeepMind) | https://deepmind.google/blog/specification-gaming-the-flip-side-of-ai-ingenuity | 2020-04-21, Krakovna, Uesato, Mikulik, Rahtz, Everitt, Kumar, Kenton, Leike, Legg. Defines specification gaming and collected about 60 examples; gives the CoastRunners and Lego-flipping cases and the "reward tampering" extension. |
| Defining and Characterizing Reward Hacking | https://arxiv.org/html/2209.13085 | Skalse, Howe, Krasheninnikov, Krueger; arXiv:2209.13085v2, 2025 HTML revision of the 2022 NeurIPS paper. Formal definition of hackability; result that over all stochastic policies two reward functions are unhackable only if one is constant. |
| Goodhart's own account (PDF) | https://lelibellio.polytechnique.fr/uploads/volume9_num4/articles/goodharts_law.pdf | Charles Goodhart, Le Libellio d'AEGIS 9(4), 2013, pp. 29-33. Gives the 1975 formulation and credits Strathern (1997) with the popular restatement. |
| Strathern source note | https://unfinished.observer/sources/strathern-improving-ratings | Marilyn Strathern, "'Improving ratings': audit in the British University system", European Review 5(3), 1997, 305-321. Confirms the sentence appears on p. 308 and credits Hoskin. |
| Goodhart at Cambridge | https://www.damtp.cam.ac.uk/user/mem/papers/LHCE/goodhart.html | Michael McIntyre, DAMTP, University of Cambridge. Records both the Goodhart and Strathern formulations and the Lucas-critique relation. |
| CNA report on manipulation of measures | https://www.cna.org/analyses/2022/09/goodharts-law | Stumborg, Blasius, Full, Hughes, CNA, 2022. The cobra-bounty example and concrete mitigations (use measures not produced by the organisation being measured). |
| Resilience and stability (Holling 1973) | https://pure.iiasa.ac.at/id/eprint/26/7/RP-73-003.pdf | C. S. Holling, IIASA Research Report RP-73-003, 1973. Source of the ecological resilience definition. |
| Ecological resilience: what to measure and how | https://iopscience.iop.org/article/10.1088/1748-9326/ac5767 | Kéfi et al., Environmental Research Letters 17(4), 2022. Distinguishes engineering from ecological resilience and reports Holling's definition. |
| Resilience, adaptability and transformability | https://ecologyandsociety.org/vol9/iss2/art5/main.html | Walker, Holling, Carpenter, Kinzig, Ecology and Society 9(2):5, 2004. Defines adaptability as the capacity of actors to influence resilience; states that resilience is not always a good thing. |
| Resilience and Resource Management | https://pmc.ncbi.nlm.nih.gov/articles/PMC4626537 | 2015 review. Gives Holling's definition and the alternative-stable-state / threshold vocabulary. |
| Ecology and Society (journal home) | https://www.ecologyandsociety.org/ | Open access since 1997, "A journal of integrative science for resilience and sustainability", public submission and contact routes. |
| Stockholm Resilience Centre | https://www.stockholmresilience.org/ | Research areas include "Complex adaptive systems" and "Complexities"; public contact and contribute pages. |
| Santa Fe Institute | https://www.santafe.edu/contact | "Science for a Complex World"; public contact route. |
| Complexity Explorer | https://www.complexityexplorer.org/ | SFI public education project; Introduction to Complexity and agent-based modelling courses; public registration and contact. |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. Simulacra warning, prestige-is-not-action rule, and the RLVR ground discussion. |
| How a Society of Agents Would Work | https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work | Isaiah N, 2026-10-22. Group collapses via coherent drift, per-slot aggregation, "hot stove" effect, Rogers' paradox, cane toads and kudzu, and outcome-based votes. |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. Shape as a narrowed answer, vocabulary by proximity, the question as anchor. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. Metamerism, source discrimination by instrument, not argument. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 2026-11-10. Describe the effect, not the cause; coherent drift; ground that both frames are corrected by. |

## How the wider literature bears on the residual

Read as **secondary corroboration only**, never as the verdict (Fig 2 :45). Overlap is recorded in `10_source_ledger.csv`.

1. **Economics and measurement (Goodhart, Strathern, Hoskin).** The original statement was that a statistical regularity collapses once pressure is placed on it for control purposes. The popular restatement is that a measure becomes a target and ceases to be a good measure. This is F3 in plain language: a convention that decides an outcome stops being a convention. Goodhart is the *original* source, so citing the popular sentence without him would be a provenance error (Fig 8 :50-52: *"Convergent derivation and adopted import look identical in the contents. Only the record... separates them"*).
2. **Machine-learning engineering (Krakovna et al.).** Specification gaming is behaviour that satisfies the literal specification without achieving the intended outcome. The CoastRunners agent looped and scored above agents that finished the race. This is F2 at the agent scale, and it is an engineering report, not a restatement of the figures.
3. **Mathematics (Skalse et al.).** A proxy is unhackable if raising expected proxy return can never lower expected true return; over all stochastic policies, two reward functions are unhackable only if one is constant. This is a formal result about the *relation* between proxy and ground, which is exactly the relation F1 discriminates on. It explains why the question cannot be settled by "more optimisation": the collapse is structural.
4. **Ecology (Holling 1973; Kéfi et al. 2022).** Ecological resilience is the magnitude of disturbance a system can absorb before shifting state. This is a different notion from the figures' contact-with-an-anchor, and the strain is declared in `01_figure_grounded_audit.md` §7. It contributes the vocabulary of thresholds and basins, not the verdict.
5. **Social-ecological systems (Walker et al. 2004).** Adaptability is the capacity of actors to influence resilience; the paper states plainly that resilience is not always a good thing and that actors can move a system toward a desirable or an undesirable basin. This corroborates F5 (valence is relative to the residual) from a genuinely different field.
6. **Framework-adjacent essays (Isaiah N).** `How a Society of Agents Would Work` independently describes coherent drift, the danger of averaging success across slots, and the "cane toads and kudzu" cascade error. It shares the figures' author and evidence pool, so it is one witness, not two (Fig 2 :40).

No world source conflicts with the figure verdict. The conflict rule was not triggered. Agreement from the essay set is expected and carries little independent weight.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52** - *"Bring a characterised residual, never the source."* Sending the full framework before a reader has described a residual sends a recording, not a generator. Lead with the discriminator and its refuter.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the claim were true before giving them the links.
- **Fig 2 :40** - *"agreement about the world is worthless when the agreeing frames share an evidence pool"*; and Fig 2 :42 - *"Buy independence in proportion to the cost of being wrong."* No receptiveness list, no bulk send.
- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* Stage 3 sends a method, which is permitted; it does not send an answer.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure and what they would use as the ground; (3) only then the links, with the note that the figures, not the summary, are the authority. Record their stage-1 verdict before any theory is shown.

## Host and send

This agent cannot host or send anything. Hosting the packet on an opt-in download page and sending one link is closer to the figure's rule than attaching it to a list. Prefer a page that lets a recipient decline contact. No archive, mailing list or automated follow-up is created here.
