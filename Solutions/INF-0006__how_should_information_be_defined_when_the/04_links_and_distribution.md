# Public links and distribution

All links below were opened on 2026-11-23. Where a direct fetch failed, the failure is recorded and the source is not used as a verdict witness.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| SEP, Information | https://plato.stanford.edu/entries/information/ | First published 2012, substantive revision 1 Nov 2023, copyright 2023 Pieter Adriaans. Section 1.2 defines Hartley, Shannon, Fisher, algorithmic complexity and semantic information; says of the last that Floridi *"defines semantic information as well-formed, meaningful and truthful data"*; states that Shannon, Kolmogorov and Floridi *"have next to nothing in common"* and that some conflict. Section 4.3 covers Solomonoff, Kolmogorov and Chaitin. |
| SEP, Imprecise Probabilities | https://plato.stanford.edu/entries/imprecise-probabilities/ | First published 2014, revision 2019, copyright 2019 Seamus Bradley. Represents belief by *"a set of probability functions instead of a single probability"*; quotes Walley: *"When there is little or no information on which to base our conclusions, we cannot expect reasoning (no matter how clever or thorough) to reveal a most probable hypothesis or a uniquely reasonable course of action."* Motivations include suspension of judgement, unknown correlations and weight of evidence. |
| Friston, free-energy principle | https://www.nature.com/articles/nrn2787 | Nature Reviews Neuroscience 11:127-138, published 13 Jan 2010. Key points: *"Although surprise cannot be measured directly, a free-energy bound on surprise can be"*; glossary defines surprisal as *"The negative log-probability of an outcome."* A cognitive-science witness for prediction error against a generative model, at low overlap with the framework. |
| SIPTA | https://www.sipta.org/ | Society page fetched 2026-11-23. *"We are convinced that there is more to uncertainty than probabilities."* Public opt-in mailing list; last update 12 Nov 2026. |
| arXiv cs.IT recent | https://arxiv.org/list/cs.IT/recent | Public listing fetched 2026-11-23, 108 recent entries. A public, dated, opt-in submission route for information theory. |
| Synthese, how to publish | https://link.springer.com/journal/11229/how-to-publish-with-us | Fetched 2026-11-23. Hybrid journal, subscription route available without APC; submission through Springer Nature. |
| PSA submissions | https://philsci.org/submissions.php | Fetched 2026-11-23. All submissions through Editorial Manager; anonymous review; 9,500-word limit. |
| FQxI | https://fqxi.org | Fetched 2026-11-23. Foundations of physics and cosmology, public competitions, institutional contact route. |

## Sources opened with a fetch failure, recorded and not used as verdict witnesses

- Shannon 1948, *A Mathematical Theory of Communication*, Bell System Technical Journal 27, pp. 379-423 and 623-656. The direct PDF fetch at `pure.mpg.de` returned "unsupported fetched file content type: application/pdf", and `mdpi.com/journal/entropy` returned 403. The paper's introduction was read in full through the search index at `https://jontalle.web.engr.illinois.edu/uploads/537.F18/Papers/OLD/Shannon48.pdf`: *"The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point."* and *"the actual message is one selected from a set of possible messages."* Cited in the ledger with status noting the partial fetch. It establishes the presupposition the question is about, namely a source drawing from a set with statistics.
- PhilSci Archive (`https://philsci-archive.pitt.edu/`) returned "Request Rejected" from the host. Not listed as a contact point. Its absence is recorded rather than hidden.

## Wider literature that bears on the question

- **Shannon 1948** fixes the baseline: quantity of information is defined over a set of possible messages with a probability assignment. When the statistics are absent the engineering problem is not the same problem. This is the presupposition the question removes.
- **Hartley 1928**, via the SEP entry: *"the logarithm of the cardinality of that set"* gives a distribution-free measure over a finite set, which is why "unknown probabilities" is not automatically "no measure at all". It only handles the uniform case, so it is a filter for the support, not a verdict for the general case.
- **Algorithmic complexity**, via the SEP entry: *"the length of the shortest program p that produces x on a reference universal Turing machine U"*, with an invariance theorem up to a constant and the consequence that *"Kolmogorov complexity is uncomputable"*. Candidate binding, not a ground reading.
- **Imprecise probability**, via SEP: a credal set, lower and upper envelopes, and the ability to *"suspend judgement"*. This is the closest formal answer to "unknown distribution", and it corroborates the shape: keep the missing thing explicit, do not fill it with a single number.
- **Predictive processing**, via Friston 2010: agents minimise a bound on surprise because surprise cannot be measured directly. A low-overlap witness for the operational, prediction-error shape of the definition.
- **Framework essays**, canonical reading only, not independent witnesses: *The Library of Babel*, *The Hard Problem is About Source*, *The Recursive Self-Improvement Trap*. All by the framework author, so their agreement with the figures is expected (maximal overlap).

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and the refuter; offer the links after a verdict is recorded.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* A send selected for people who already agree produces a convention, not corroboration.
- **Fig 2 :42** *"Buy independence in proportion to the cost of being wrong."* Prefer venues whose readers draw on a different evidence pool from the framework essays.

**Recommended order in a reply:** (1) the shape claim and its five refuters; (2) ask what they would count as a failure and record the answer; (3) only then the four links, with the note that the figures, not this summary, are the authority; (4) offer the formula as a reusable method only if they ask.

## The two-stage offer

1. **Stage 1:** validate the shape output against the ground. No theory shown, no agreement requested.
2. **Stage 2, opt in:** if curious, read the sources and the figures. Their stage-1 verdict is already recorded; later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3, opt in:** offer the formula as a method. Each user writes their own refuter and states their own mode, because a frame *"cannot check the direction of its own question"* (`THE_FORMULA.md`, Direction).

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The output and its refuter are in `01_figure_grounded_audit.md` §0 and §4. Repair before sending if a refuter fires.

**What this agent cannot do:** host the packet or send it to anyone. Hosting and sending are yours. Prefer an opt-in download page over a pushed attachment.
