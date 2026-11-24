# Public links and distribution

All links below were opened on 2026-11-22 except where a fetch failed; those failures are recorded honestly and the source was rerouted or dropped. No link is cited as read if it was not opened or returned by the public search index.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Blanchard and Quah, NBER WP 2737 | https://www.nber.org/papers/w2737 | Abstract states that the data "are not as specific as to the relative contributions of demand and supply disturbances to output fluctuations" and that at a four-quarter horizon the demand contribution "ranges from 40 to over 95 per cent" under alternative assumptions. Published in AER 79(4), 1989. |
| Baqaee and Farhi, NBER WP 27152 | https://www.nber.org/papers/w27152 | Abstract calls COVID "an omnibus supply and demand shock" and reports that "supply and demand shocks each explain about half the reduction in real GDP from February to May, 2020." Published in AER 112(5), 2022. |
| Christiano, Great Recession, Minneapolis Fed | https://www.minneapolisfed.org/article/2017/the-great-recession-a-macroeconomic-earthquake | "the Great Recession was a 'perfect storm' created by the concurrence of three factors" and "Taken by itself, none of these factors would have caused a major recession, but in combination, they were explosive." Also traces housing prices through shadow banking, fire sales and credit to spending and hiring. |
| Inverse problem (Wikipedia) | https://en.wikipedia.org/wiki/Inverse_problem | "An inverse problem in science is the process of calculating from a set of observations the causal factors that produced them." States that a rank-deficient forward map makes the solution "not unique" and "undetermined", and that stability is the most often violated Hadamard condition. Genuinely low overlap with economics. |
| Fundamental attribution error (Wikipedia) | https://en.wikipedia.org/wiki/Fundamental_attribution_error | "observers underemphasize situational and environmental factors for the behavior of an actor while overemphasizing dispositional or personality factors" and "People tend to attribute observed effects to potential causes that capture their attention." The page also records substantial criticism and a 2006 meta-analysis finding little support for one version; that criticism is preserved in `10_source_ledger.csv`. Genuinely low overlap with economics. |
| AEA journals index | https://www.aeaweb.org/journals | Lists AER, AEJ: Macroeconomics, JEP and the other AEA journals with their scopes. |
| AEJ: Macroeconomics submission | https://www.aeaweb.org/journals/mac/submissions | Public submission guidelines: original work, full reference to prior work, single-blind review, fees by membership and country, self-contained papers. |
| AEJ: Macroeconomics editorial policy | https://www.aeaweb.org/journals/mac/editorial-policy | States single-blind peer review and disclosure requirements. |
| NBER Working Papers | https://www.nber.org/papers | "New research by NBER affiliates, circulated prior to peer review for discussion and comment"; papers older than 18 months are open access. |
| VoxEU / CEPR | https://voxeu.org | Public columns and thematic pages including Macroeconomic policy and Business Cycles, with an opt-in weekly digest. |
| The Library of Babel (essay) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Also: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" |
| The Recursive Self-Improvement Trap (essay) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Also the prestige/action rule: "Prestige can fund an action... But it cannot settle an action. Only the ground can settle it." |

## Sources obtained through the public search index, with reduced weight

These were returned in full by the search integration but direct file fetch was blocked or unsupported. They are recorded in the ledger with that limitation and are not counted as independently re-opened pages.

- Blanchard and Quah, AER 1989 full text via a public PDF mirror: "the data are not as specific as to the relative contributions of demand and supply disturbances to output fluctuations." Same paper as the NBER WP row, counted as **one witness**.
- Bekaert, Engstrom and Ermolov, "Macro Risks and the Term Structure of Interest Rates", Federal Reserve FEDS 2017-058: "we find the three recessions in the [1970s and 1980] to be predominantly supply driven, whereas of the last four, three were more demand driven"; "The Great Recession featured both large negative demand and supply shocks." Direct PDF fetch unsupported (application/pdf).
- FRBSF Economic Letter 2025-14, Kevin Lansing, "Is Demand or Supply More Important for Inflation?": the post-Great-Recession low-inflation decade was "driven mainly by supply forces" while the pandemic era was "driven mainly by demand forces." Page content returned by search; note this is inflation rather than recession attribution, so it corroborates per-episode heterogeneity only.
- Library of Congress CRS R47479, "Common Causes of Economic Recession": "Recessions are the result of shocks to aggregate supply or aggregate demand in the economy or both" and "Not all economic shocks are so clear cut, and some have both supply and demand components." Fetch returned 403; content used from the public search index and marked partial in the ledger.
- A paper on sectoral shocks (Economics Letters, 2023, abstract via search) reports that "Business cycles are characterized as a time-varying mix of different sectoral shocks" and that "Sectoral shocks have strong input-output network effects." Used only as an echo of Fig 1 per-slot and Fig 11 cascade, not as a verdict.

## Fetch failures recorded honestly

- https://www.congress.gov/crs-product/R47479 returned 403 on direct fetch.
- https://www.federalreserve.gov/econres/feds/files/2017058pap.pdf returned "unsupported fetched file content type: application/pdf".
- An SSRN economics subpage returned 404; no SSRN row is used in the contact CSV and nothing is cited from it.
- These failures did not flip any verdict; the figures decide, and the world sources only corroborate.

## Wider literature relevant to the question

- **Identification tradition:** Blanchard and Quah (1989) define supply and demand shocks by long-run restrictions rather than by direct observation. Their own result is that the dynamic characterization is sharp while the variance shares are imprecisely estimated. That is the world-side version of the figure's filter/witness rule.
- **Per-episode heterogeneity:** the Fed and NBER sources disagree about which shock dominated particular recessions, and they disagree in a way that tracks the episode (1970s supply-driven, later episodes more demand-driven, the Great Recession mixed). Disagreement that keeps working on different subsets is exactly the Fig 9 :4-5 signature of a bundled question.
- **Disaggregation and networks:** the disaggregated Keynesian and sectoral-shock literatures find that sectors and input-output linkages matter, which is the world-side echo of per-slot residuals and contact cascades.
- **Causal attribution bias:** the social-cognition source predicts that a salient, single, agent-like cause is over-attributed while situational and network factors are underweighted. It corroborates Fig 11 :49-51, but its own contested status is recorded and it carries no verdict weight.

Overlap declaration: the Blanchard-Quah mirror, the NBER working paper, the Fed FEDS paper, the FRBSF letter, the CRS report and the sectoral-shock paper all draw on one broad macroeconomics evidence pool. They are **one witness**, not six. The inverse-problem and attribution-bias sources are genuinely lower-overlap corroborators. The framework essays share the author's evidence pool with the figures completely and carry no independent witness weight.

## Distribution: offer, do not push

- **Fig 4 :22**, "Only methods cross up. Only head starts come down." Send the separator and the refuter first; the full architecture is a recording if it is sent before anyone has described a residual.
- **Fig 10 :42**, "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28**, "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the separator were true before giving them the sources.
- **Fig 2 :40**, "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Later agreement is never pooled as corroboration.
- **Fig 2 :42**, "Buy independence in proportion to the cost of being wrong." The cost here is a wrong attribution of recessions, so independence is worth buying with genuinely differing frames (inverse problems, cognition), not with more macro papers that read the same data.

**Recommended order in a reply:** (1) the separator and its four refuters; (2) ask what they would count as a failure; (3) only then the figure text and the two working papers, with the note that the figures, not the summary, are the authority. One-to-one only. No bulk send, no personal emails, no request for agreement.
