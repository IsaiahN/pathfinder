# Public links and distribution

All links below were fetched and read on 2026-11-22 unless a fetch failure is recorded. A fetch failure is reported, not hidden, and nothing is quoted from a page that was not opened.

## 1. Verified framework links

| what | URL | verified content |
|---|---|---|
| Verbatim figure text with line numbers (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Figures 1 to 13 plus the Operators and Symbols tables, one SVG text element per line, with the citation form `Fig N :line`. Every figure quote in this folder is checked against it. |
| Canonical usage rule (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also the limit: "what a missing thing would have to look like (a shape, not a name)". |
| The formula (local) | `FRAMEWORK/figures/THE_FORMULA.md` | The eight-step loop, the SEARCHED / INWARD / OUTWARD split, the mode rule and the Direction discipline. |
| Arrival of the Fittest: The Tether Architecture | https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether | The canonical architecture essay, listed in `05_what_shape_means.md`. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Opened 2026-11-22. "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Also: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This is the source of the simulated-status label on every file. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Opened 2026-11-22. "If several paths create the same behavior, then behavior is a projection with lossy information." Metamerism and the spectrometer: a reading cannot name its source without a discriminating instrument. Used in `05` section 4. |

## 2. Wider literature actually read (secondary corroboration only)

These are opened sources, with the field given so overlap can be judged. None of them is the source of a figure verdict.

| source | URL | field | what it bears on here |
|---|---|---|---|
| Dimitri Lozeve, summary of Adler and Borys 1996, "Two Types of Bureaucracy: Enabling and Coercive" (2026) | https://lozeve.com/posts/types-of-bureaucracy-enabling-and-coercive.html | organizational sociology | Enabling versus coercive formalization. "what is important is not the *degree* of formalization (i.e. more formalization is not necessarily bad), but its type". Coercive logic "try to force commitment, compliance, through a reluctant effort"; enabling logic aims at helping employees "deal more effectively with their job". Also: "Absence of reality checks (e.g. competition, demanding customers)" encourages the coercive logic. This is the closest world analogue to F3 and F4. |
| Christianson, Sutcliffe, Miller and Iwashyna, "Becoming a high reliability organization", Critical Care 15(6):314 (2011) | https://pmc.ncbi.nlm.nih.gov/articles/PMC3388695 | reliability science / patient safety | "reliability is fundamentally a dynamic set of properties, activities, and responses". Five principles: preoccupation with failure, reluctance to simplify, sensitivity to operations, resilience, deference to expertise. "high reliability is an ongoing process, not a state of achievement." Corroborates the channel-contact claim in F9 and warns against reading HRO as mere standardization. |
| Banja, "The normalization of deviance in healthcare delivery", Business Horizons 53(2):139 (2010) | https://pmc.ncbi.nlm.nih.gov/articles/PMC2821100 | safety science / organizational deviance | "What begin as deviations from standard operating rules become, with enough repetitions, 'normalized' practice patterns". Also: "Findings of system flaws and weaknesses are frequently revised and diluted as that information ascends the chain of command". Direct corroboration of the coherent-drift and saturated-channel findings F3 and F9. |
| Diane Vaughan, "The Normalization of Deviance", Encyclopedia of Criminological Theory (Sage, 2010) | https://sk.sagepub.com/ency/edvol/criminologicaltheory/chpt/vaughan-diane-normalization-deviance | organizational sociology / deviance | "it was not deviance per se, but conformity that was responsible for the Challenger disaster." Vaughan: "a series of seemingly harmless decisions were made that incrementally moved the space agency toward a catastrophic outcome". The mirror-chain and drift findings in a non-framework evidence pool. |
| Columbia Magazine, "How the Challenger Disaster Became a Case Study of the 'Normalization of Deviance'" (2026) | https://magazine.columbia.edu/article/challenger-disaster-normalization-deviance | journalism / organizational history | Vaughan on why NASA looked like a case of misconduct and turned out to be a case of conformity. Same evidence pool as the Vaughan entry above; counted as one witness, not two. |
| Lisanne Bainbridge, "Ironies of Automation", Automatica 19(6):775-779 (1983), reproduced full text | https://tc.ifac-control.org/4/1/newsletter/ironies-of-automation/@@download/file/Bainbridge1983_Automatica_Ironies%20of%20automation.pdf | human factors / control engineering | "the designer who tries to eliminate the operator still leaves the operator to do the tasks which the designer cannot think how to automate... the rare, the abnormal and the poorly understood." Also physical skill "deteriorates when they are not used." The low-overlap engineering witness for F6. A second reproduction appeared in search results at https://abhinavgautam.in/ironies-of-automation but was not opened separately; the IFAC PDF above was the version actually read. |
| AHRQ PSNet primer, "High Reliability" (2024) | https://psnet.ahrq.gov/primer/high-reliability | health services research | "high reliability is better described as a condition of persistent mindfulness" and goes beyond standardization; the aircraft-carrier example keeps "hierarchical organizational structure" while giving personnel "authority and the responsibility to make real-time operational adjustments." Useful against a crude "less hierarchy is safer" reading. |
| Journal of Organization Design, Springer page (2026) | https://link.springer.com/journal/41469 | organization design | Scope covers "the analysis and improvement of structures, systems, and processes"; current issue includes Martela, Mäkkeli and Kostamo (2026) on the ten functions of middle managers in a decentralized organization. Venue verification, not a substantive witness. |

## 3. Fetch failures, recorded honestly

- `https://journals.aom.org/` returned HTTP 403 on 2026-11-22. The AOM main site at `https://www.aom.org/` was fetched successfully and supplies the submission links used in `03`.
- `https://www.sciencedirect.com/journal/reliability-engineering-and-system-safety` returned HTTP 400 on 2026-11-22. No claim is made from that page; no venue row depends on it.
- `https://journals.sagepub.com/home/asq` returned HTTP 403 on 2026-11-22. The Administrative Science Quarterly row in `03` carries an explicit verify-before-use note; no quote is taken from that page.

## 4. Overlap judgment

- The three management and reliability streams (Adler and Borys, Vaughan, Banja, Christianson et al.) partly overlap through the high-reliability and normal-accidents literature. They are one broad safety-and-organization evidence pool, not four independent witnesses.
- Bainbridge 1983 is genuinely low overlap: control engineering and human factors, with its own experiments.
- The framework essays are by the framework author and share its evidence pool completely. Their agreement with the figures is expected and carries no independent weight. They are used only for the canonical reading of "shape" and the simulated-status warning.

## 5. Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22 "Only methods cross up. Only head starts come down."** Sending the full framework before a recipient has described a residual sends a recording, not a generator. Lead with the shape claim and its six refuters; offer links after.
- **Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."** A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :28 "rather than the cause"). Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** A send selected for people already inclined to agree produces a convention, not corroboration.
- **Fig 2 :42 "Buy independence in proportion to the cost of being wrong."** The cost of being wrong about error control is high, so independence is worth buying with a genuinely different frame, not with more names on a list.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) ask which refuter they think is closest to firing and why; (3) record that verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## 6. The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52 "Bring a characterised residual, never the source" and Fig 2 :45 "Frames range against the ground. They do not negotiate with it." The recipient checks the output without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. The stage-1 verdict must be recorded first, and later agreement is never pooled as corroboration.
- **Stage 3 sends a method, which is permitted.** Fig 4 :22. The formula is a generator, so giving it away does not give away an answer. Each recipient writes their own refuter and states their own mode, because a frame "cannot check the direction of its own question" (Formula "Direction").

**Hard precondition:** the three stages only work if the stage-1 output survives. This folder is a simulated derivation checked for internal consistency, not a ground reading, and says so on every file.

## 7. Submission caution

AOM journals and similar venues have policies governing AI-assisted or simulated work. A simulated derivation must be declared under the current policy of the target venue; the wording changes, so verify it before submitting. This folder makes the declaration in its mode line and in `08` section 3. No submission is made by this agent; hosting and sending are the user's to do.
