# Public links and distribution

Every URL in this file was fetched on 2026-11-23. A fetch that failed is recorded as a failure and is not cited as read.

## Verified sources

| what | URL | verified content |
|---|---|---|
| Gödel's Incompleteness Theorems, Stanford Encyclopedia of Philosophy | https://plato.stanford.edu/entries/goedel-incompleteness/ | First published 2013, substantive revision 2025. States the second incompleteness theorem: *"For any consistent system F within which a certain amount of elementary arithmetic can be carried out, the consistency of F cannot be proved in F itself."* Also has sections on Tarski's undefinability of truth and on Löb's theorem. This is the world-side statement of Fig 8 :34. |
| Self-Knowledge, Stanford Encyclopedia of Philosophy | https://plato.stanford.edu/entries/self-knowledge/ | First published 2003, substantive revision 2026. Reports Nisbett and Wilson (1977): *"The accuracy of subject reports is so poor as to suggest that any introspective access that may exist is not sufficient to produce generally correct or reliable reports."* Also Goldman's *"problem of calibration"* and the transparency account with Evans's remark that *"one's eyes are, so to speak, or occasionally literally, directed outward - upon the world."* |
| Metacognition, Wikipedia | https://en.wikipedia.org/wiki/Metacognition | Flavell (1979) defined metacognition as *"knowledge about cognition and control of cognition"*; the article distinguishes Monitoring from Control (Nelson and Narens), notes that *"not all metacognition is accurate"*, and records animal uncertainty monitoring in primates, rats and dolphins plus the debate that low-level conditioning may explain some results. |
| On Calibration of Modern Neural Networks, Guo, Pleiss, Sun and Weinberger | https://arxiv.org/abs/1706.04599 | ICML 2017. *"We discover that modern neural networks, unlike those from a decade ago, are poorly calibrated."* Calibration must be measured against true correctness likelihood, not read off the model's own output. This is the machine-side witness for Fig 1 :27. |
| Runtime verification, Wikipedia | https://en.wikipedia.org/wiki/Runtime_verification | *"extracting information from a running system and using it to detect and possibly react to observed behaviors satisfying or violating certain properties"*; monitors can be integrated into the system or provided as an external entity; *"Reasoning about intervention effects"* is listed as an open challenge. This is the engineering case that strains Fig 10 :42 until re-census. |
| The Recursive Self-Improvement Trap, Isaiah N | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | 2026-11-19. *"The catch is that the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* Also: *"I am not claiming that the Tether is a self-validating axiom system. Metatheories cannot validate themselves. This is Godel's insight, and it still holds here."* |
| The Hard Problem is About Source, Isaiah N | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | 2026-08-28. *"the instrument is speaking only about what it measured, it cannot comment on the source."* and *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* Governs the discriminator requirement in `07`. |
| Decoding Tacit Knowledge, Isaiah N | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | 2026-11-10. *"A frame is any viewpoint that predicts: a person, a model, a field. It can't see its own limits from inside."* Also gives the Gentzen example: consistency of arithmetic was settled from outside by importing one extra rule. |
| The Library of Babel, Isaiah N | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | 2026-10-02. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Governs the shape-not-a-name rule. |
| Figures repository, canonical usage rule | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them."* Copied locally to `FRAMEWORK/reference/FIGURES_README_canonical.md`. |
| Figures folder, direct download | https://github.com/IsaiahN/tether/tree/general-agent/figures | Branch `general-agent`, folder `figures/`, SVG figures plus formula and tables. |

## Fetch failures, recorded honestly

- `https://en.wikipedia.org/wiki/Out-of-distribution_detection` returned 404 on 2026-11-23. No content from it is cited. The calibration paper above was used in its place.
- `https://www.psychonomic.org/` returned 403 on 2026-11-23. No content from it is cited, and it is not in the contact CSV.
- `https://www.aclweb.org/portal/content/acl-submission-information` returned 404. No content from it is cited. ACL ARR venues are reachable through the verified OpenReview directory instead.

## What the wider literature contributes (corroboration only)

1. **Formal limit.** The SEP Gödel entry states the same barrier the figure names at Fig 8 :34. It predicts that whole-set self-certification is unavailable. It does **not** predict that no particular assumption can be checked, which is why D3 and D2 are kept separate.Corroborates Fig 8.
2. **Human self-knowledge.** The SEP Self-Knowledge entry and the Wikipedia metacognition article agree on a partial picture: first-person access exists, is fallible, and must be calibrated against something other than the report itself. The Nisbett and Wilson result is a direct case of an assumption the subject cannot see. Corroborates Fig 5 :62 and Fig 1 :27.
3. **Animal behaviour (low overlap).** Uncertainty monitoring in rhesus macaques, rats and dolphins shows that detection of "I do not have this" can be behaviourally real without a language of assumptions. The debate about low-level conditioning is the record's own warning that a behaviour and its source can look identical (Fig 8 :50-52). Corroborates the separation of detection from representation.
4. **Machine calibration (low overlap).** Guo et al. show that confidence estimates need a ground truth to be calibrated against. A model's own output cannot certify its own correctness. Corroborates Fig 1 :27 and F6.
5. **Engineering (low overlap, conditional).** Runtime verification shows a practical form of self-monitoring that is legitimate only when the specification comes from outside the monitored frame. Corroborates Fig 10 :42 after re-census, and is the source of strain S3.

Overlap: sources 1 and 2 are philosophy references; sources 3, 4 and 5 are genuinely different fields. All four framework essays share the author of the figures and carry no independent witness weight (Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*). No world source was allowed to overrule a figure line.

## Distribution: offer, do not push

- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* Send the residual and the refuter first. Sending the full architecture before anyone has described a failure sends a recording of one occasion, not a generator.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked. Record the stage-1 verdict first.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what the reader would expect to see if the four verdicts were true before giving them any link.
- **Fig 2 :40 and Fig 9 :60** - do not select recipients for receptiveness and do not let a budget filter hand you a verdict. Venues in `03` are public and opt-in; no personal emails and no bulk send.

**Recommended order in a reply:** (1) the residual and its refuter; (2) the question "what would you count as a failure here?"; (3) record the answer; (4) only then the three links, with the note that the figures, not this summary, are the authority.

## The two-stage offer

**(1)** Validate the output against a ground the reader chooses. **(2)** Only if curious, read the theory that produced it. **(3)** Use the formula recursively on other problems, writing a fresh refuter and stating a fresh mode each time. This order follows Fig 10 :52 and Fig 2 :45. Stage 2 is opt-in by construction: once a reader has absorbed the theory, their agreement stops being evidence, so it must never be pooled as corroboration. Stage 3 sends a method, which is permitted by Fig 4 :22, but each user still needs a ground per problem, because a frame *"cannot check the direction of its own question"* (Formula, "Direction").

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. The output in `08_expert_verification_packet.md` states its mode, three checkable sub-claims and five failure conditions before any conclusion. If a reader fires one, the affected verdict is retracted rather than defended.

## Hosting

Nothing here is sent by this agent. Hosting and sending are yours. Prefer an opt-in download page over a pushed attachment, so the recipient can decline contact without explanation.
