# Public links and distribution

All links below were fetched and read on 2026-11-23. Nothing is cited here that was not opened. Local framework files are framework primaries, not world sources.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Lottery Ticket Hypothesis | https://arxiv.org/abs/1803.03635 | Frankle and Carbin, ICLR 2019. "sparse architectures produced by pruning are difficult to train from the start"; the paper finds subnetworks whose initializations let them train effectively, reaching test accuracy comparable to the original at under 10 to 20 percent of size. |
| Deep Compression | https://arxiv.org/abs/1510.00149 | Han, Mao and Dally, ICLR 2016 oral. Pruning, trained quantization and Huffman coding reduce storage 35x to 49x "without affecting their accuracy" on aggregate ImageNet benchmarks. A generator-level preservation result, reported in aggregate. |
| The information bottleneck method | https://arxiv.org/abs/physics/0004057 | Tishby, Pereira and Bialek, 2000. "finding a short code for X that preserves the maximum information about Y"; a generalization of rate distortion in which the distortion measure emerges from joint statistics. |
| Distilling the Knowledge in a Neural Network | https://arxiv.org/abs/1503.02531 | Hinton, Vinyals and Dean, NIPS 2014 workshop. Compresses an ensemble into one model; introduces specialist models "which learn to distinguish fine-grained classes that the full models confuse". |
| Explaining How Quantization Disparately Skews a Model | https://arxiv.org/abs/2509.07222 | Bellam and Kim, 2025. "disparate impacts are exacerbated by quantization, especially for minority groups"; PTQ has "minimal impact on accuracy" in aggregate while group accuracies are compromised. The erasure-side witness. |
| Catastrophic interference (Wikipedia entry) | https://en.wikipedia.org/wiki/Catastrophic_interference | Summarizes McCloskey and Cohen 1989 and Ratcliff 1990. Representational overlap in distributed codes drives abrupt loss of earlier learning when new items arrive; "the greater the amount of new learning, the greater the disruption in old knowledge". Low-overlap analogue from cognitive science. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. "If several paths create the same behavior, then behavior is a projection with lossy information"; "The answer is unreached until a better instrument exists." |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Also the prestige/action separation and the simulated-output caveat. |
| NeurIPS 2026 Call for Papers | https://neurips.cc/Conferences/2026/CallForPapers | Verified main-track scope, dates and submission link. |
| ICLR 2026 Call for Papers | https://iclr.cc/Conferences/2026/CallForPapers | Verified scope, dates, double-blind policy and program-chairs contact. |
| ICML 2026 Call for Papers | https://icml.cc/Conferences/2026/CallForPapers | Verified scope and the generative-AI and authorship policies. |
| JMLR homepage | https://www.jmlr.org/ | Verified open-access journal scope and current volumes. |
| MLSys homepage | https://mlsys.org/ | Verified 2027 conference, call for papers and topic list. |
| ACL 2026 homepage | https://2026.aclweb.org/ | Verified venue, ARR submission requirement, and the statement on desk rejecting papers with hallucinated references. |

## What the world sources bear on the question

1. **The preservation side.** Frankle and Carbin and Han et al. show that compression can leave a trainable subnetwork or an aggregate-accuracy-equivalent model. Both report success in aggregate or on held-out benchmarks. By Fig 1 :22 ("Aggregating across slots is how a live signal disappears into an average"), such a report does not settle the rare slot. The figures do not conflict with these results; they constrain what the results certify.
2. **The erasure side.** Bellam and Kim report exactly the split the figures predict: minimal aggregate impact, exacerbated disparate impact on minority groups, and a mechanism (lower logit variance, cascaded loss increase). This corroborates Fig 1 :13 and :22 and Fig 10 :25-26.
3. **The information objective.** Tishby et al. supply the shape of "preserve useful structure" as a short code retaining maximum information about a target, with the distortion measure coming from joint statistics. This is a low-overlap mathematical corroborator for the MDL bargain in Fig 5 :43, but it does not by itself enforce per-slot scoring.
4. **The bond point.** Hinton et al.'s soft targets and fine-grained specialist models are the engineering form of Fig 12 :46: the relation among classes carries information the hard label does not.
5. **The low-overlap analogue.** Catastrophic interference in distributed codes is cognitive science, not model compression research. It corroborates the mechanism shape (overlap and pooling erase earlier, less frequent material) and is counted as one analogue witness, not as evidence about deployed compressed models.

Overlap is declared in `10_source_ledger.csv`. The four ML engineering sources are one broad evidence pool, not four independent witnesses. The three framework essays share the author of the figures and carry no independent witness weight. No world source conflicts with the figure verdict, so the conflict rule was not triggered.

## Distribution: offer, do not push

Figure-grounded rules:

- **Fig 4 :22-25** - "Only methods cross up. Only head starts come down." Sending the full framework before anyone has named a residual sends a recording, not a generator. Lead with the separator and its refuter; offer links after stage 1.
- **Fig 10 :42** - "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the separator were true before giving them the sources.
- **Fig 2 :40** - "agreement about the world is worthless when the agreeing frames share an evidence pool". Later agreement from a stage-1 reader is never pooled as corroboration.
- **Fig 9 :60** - "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A venue's prestige is a contact-cost estimate, not evidence.

**Recommended order in a reply:** (1) the separator and its five refuters; (2) ask what they would count as a failure at a named slot; (3) only then the three local framework links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1.** The recipient checks the separator against the ground of their own choosing, without holding the framework's interior. This is Fig 10 :52 ("Bring a characterised residual, never the source") and Fig 2 :45 ("Frames range against the ground. They do not negotiate with it.").
- **Stage 2, opt-in only.** If curious, they read the framework. Their stage-1 verdict must already be recorded; later agreement is never pooled.
- **Stage 3.** Offer the formula as a method to reuse. Fig 4 :22 permits a generator to cross. Each user writes their own refuter and states their own mode, because *The Recursive Self-Improvement Trap* says "the truly testable output would need to be derived from the real architecture or working the formula yourself."

## Venue constraints on simulated work

ICML 2026 requires disclosure of generative-AI use, states that LLMs are not eligible for authorship, and forbids prompt injection. NeurIPS 2026 points to a main-track handbook governing LLM use. ACL 2026 carries a statement on desk rejecting papers with hallucinated references. This folder is a simulated derivation, so any submission must present it as a checkable method plus a measured ground test, not as reported experimental results. Do not represent the figure-derived claims as measurements.

## Hosting

The artifacts here can be hosted on any opt-in page the author controls. Prefer a download page that lets a recipient decline contact over an attachment pushed to a list. Nothing in this folder is sent by this agent.
