# Public links and distribution

All URLs below were fetched and checked on 2026-11-23. Automated checks that returned a non-2xx status are recorded as such rather than hidden. Nothing here is a personal address.

## 1. Links actually fetched

| what | URL | verified content and verbatim line |
|---|---|---|
| Big data (Wikipedia) | https://en.wikipedia.org/wiki/Big_data | Fetched. Reports SDSS amassing more in weeks than all prior astronomy, and states: "Big data very often means 'dirty data' and the fraction of data inaccuracies increases with data volume growth. Human inspection at the big data scale is impossible." This is the channel-decay finding in instrument language. |
| Automation bias (Wikipedia) | https://en.wikipedia.org/wiki/Automation_bias | Fetched. "Automation bias is the propensity for humans to favor suggestions from automated decision-making systems and to ignore contradictory information made without automation, even if it is correct." Reports a breast-cancer study in which "Cancers diagnosed in 46% of cases without automated aids were discovered in only 21% of cases with automated aids that failed to identify the cancer." Human cognition, low overlap with the framework. |
| Remote sensing (Wikipedia) | https://en.wikipedia.org/wiki/Remote_sensing | Fetched. "Generally speaking, remote sensing works on the principle of the inverse problem: while the object or phenomenon of interest (the state) may not be directly measured, there exists some other variable that can be detected and measured (the observation) which may be related to the object of interest through a calculation." Also notes ground truth still needs a field survey, and warns that training and validation data must not be spatially correlated. Earth observation, low overlap. |
| FAIR principles (Wilkinson et al.) | https://www.nature.com/articles/sdata201618 | Fetched. Scientific Data 3:160018, published 2016-03-15. "It also necessitates that the machines keep an exquisite record of provenance such that the data they are collecting can be accurately and adequately cited." Data stewardship, low overlap. |
| Why most published research findings are false (Ioannidis) | https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0020124 | Fetched. PLoS Medicine 2(8):e124, 2005-08-30. "Research is not most appropriately represented and summarized by p-values" and, on multiple teams, "hardly any higher than the probability we had before any of this extensive research was undertaken!" Statistics and metascience, low overlap. |
| 1,500 scientists lift the lid on reproducibility (Baker) | https://www.nature.com/articles/533452a | Fetched. Nature 533:452-454, 2016-05-25, by Monya Baker. Pull quote: "Survey sheds light on the 'crisis' rocking research." Full text is subscription-only; the metadata and pull quote were read, and this is stated rather than expanded. |
| Library of Babel: Locating the Book of Books (Isaiah N) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Fetched. "This means that you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Framework author, high overlap, canonical for "shape". |
| The Hard Problem is About Source (Isaiah N) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Fetched. "If several paths create the same behavior, then behavior is a projection with lossy information" and "An instrument that can't distinguish these cases demonstrates its own inadequacy". Framework author, high overlap. |
| The Recursive Self-Improvement Trap (Isaiah N) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Fetched. "the truly testable output would need to be derived from the real architecture or working the formula yourself" and "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Framework author, high overlap. |
| Canonical figures README | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Not re-fetched this session; the local canonical copy at `FRAMEWORK/reference/FIGURES_README_canonical.md` was read instead and is recorded as `local:` in `10_source_ledger.csv`. Two earlier attempts at related pages returned 403 from an automated client (Sage, Zenodo), so neither is used as a cited source here. |

## 2. What the wider literature predicts, and whether it corroborates

- **Big data / information technology.** Dirty data rises with volume and human inspection becomes impossible. Predicts that the failure is in the channel (F3), not in the ground. **Corroborates**, and supplies the instrument-language version of Fig 10 :24-26.
- **Human cognition / human factors.** Automation bias produces errors of omission when the human is in an observatory role. Predicts that an automated pipeline can stop registering a failure while appearing to work, which is "you have lost touch" (Fig 10 :27-28). **Corroborates** F3, from a field with no stake in the framework.
- **Earth observation / remote sensing.** The object is not directly measured; an inverse calculation stands between observation and state, and ground truth still requires a field survey. Predicts the habitat substitution in F6 and the need for a ground anchor in Fig 2 :29. **Corroborates**.
- **Data stewardship / engineering.** Machine-actionable provenance is required at scale. Predicts that the lineage becomes part of the claim (Fig 10 :62). **Corroborates** F7.
- **Statistics / metascience.** More probes at low prior and many teams do not raise the probability that a finding is true; more teams can lower it. Predicts that volume is a budget filter, not a witness (Fig 9 :60, Fig 7 :13). **Corroborates** F4. The Nature reproducibility survey reports the crisis as a measured concern in research practice. **Corroborates** the need for a ground reading, without supplying one.
- **Framework essays.** Shape not a name, source discrimination, and the simulation limit. **Corroborate** the method, but all share the framework author and evidence pool. By Fig 2 :40 this is one witness, not several. Their agreement is expected and carries little independent weight.

No source conflicts with the figure verdict. The conflict rule (a conflict sends the derivation back to the census) was not triggered.

## 3. Distribution rules: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22 and :25-26.** "Only methods cross up. Only head starts come down." and "A recording carried upward looks like knowledge and is a description of one occasion." Sending the full framework before a reader has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter.
- **Fig 10 :42.** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28.** "describe it before you go looking, or any frame you pick will seem to fit". Ask what they would expect to see if the shape claim were true before giving them any source.
- **Fig 2 :35 and :40.** Agreement is not triangulation; a shared evidence pool makes agreement worthless as a verdict. No mass send, no receptiveness ranking, no pooling of later agreement.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure and record it; (3) only then the links, with the note that the figures, not the summary, are the authority; (4) if asked, the formula as a method with the instruction that each user writes their own refuter and states their own mode.

## 4. The two-stage offer

- **Stage 1 (before any theory).** Output first, refuter first. The recipient checks the four claims against their own knowledge. Their verdict is recorded now, before anything else is shown.
- **Stage 2 (opt-in only).** If curious, they read the figures and formula. Their later agreement is never pooled as corroboration.
- **Stage 3 (on request).** The formula is offered as a reusable generator. Each user must state a ground and a refuter for their own problem, because a frame "cannot check the direction of its own question" (`THE_FORMULA.md`, Direction).

**Hard precondition:** stages 1 to 3 only work if stage 1 survives. The packet in `08_expert_verification_packet.md` is written so that a failure is easy to report. If the packet fails, stop and redraw; do not proceed to stage 2.
