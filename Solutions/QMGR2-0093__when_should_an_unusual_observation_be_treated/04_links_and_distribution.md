# Public links and distribution

Every link in the table below was opened during this run on 2026-11-23 unless marked otherwise. The quotes recorded from them are in `10_source_ledger.csv`. Where a fetch failed, that is stated rather than hidden.

## Verified sources actually fetched

| what | URL | field | verified content |
|---|---|---|---|
| ASA Statement on p-Values (Wasserstein and Lazar, 2016) | https://www.tandfonline.com/doi/full/10.1080/00031305.2016.1154108 | statistics | The American Statistician 70(2), 129-133. Principle 3: "Scientific conclusions and business or policy decisions should not be based only on whether a p-value passes a specific threshold." Principle 4 requires full reporting of the number and choice of analyses. |
| ASA public statement PDF | https://www.amstat.org/asa/files/pdfs/P-valueStatement.pdf | statistics (institutional) | The six principles as published by the ASA, including "The p-value was never intended to be a substitute for scientific reasoning." |
| Gross and Vitells, Trial factors for the look elsewhere effect (2010) | https://arxiv.org/abs/1005.1891 | high-energy physics / statistics | Eur. Phys. J. C 70, 525-530. Abstract: "the significance of observing a local excess of events must take into account the probability of observing such an excess anywhere in the range. This is the so called 'look elsewhere effect'." |
| Benjamini and Hochberg, Controlling the False Discovery Rate (1995) | https://academic.oup.com/jrsssb/article-pdf/57/1/289/49173396/jrsssb_57_1_289.pdf | statistics / multiple testing | JRSS B 57(1), 289-300. "An unguarded use of single-inference procedures results in a greatly increased false positive (significance) rate." |
| Simmons, Nelson and Simonsohn, False-Positive Psychology (2011) | https://journals.sagepub.com/doi/full/10.1177/0956797611417632 | psychology / research methodology | Psychological Science 22(11), 1359-1366. "flexibility in data collection, analysis, and reporting dramatically increases actual false-positive rates." |
| Yaddanapudi, The ASA statement on P-values explained (2016) | https://pmc.ncbi.nlm.nih.gov/articles/PMC5187603 | medicine / statistical communication | Journal of Anaesthesiology Clinical Pharmacology 32(4), 421-423. "The fundamental problem discussed here is the implicit practice of defining success on passing an arbitrarily defined threshold." |
| LIGO and Virgo, Observation of Gravitational Waves from a Binary Black Hole Merger (2016) | https://dcc.ligo.org/public/0122/P150914/014/LIGO-P150914:Detection_of_GW150914.pdf | gravitational-wave astronomy / instrumentation | Physical Review Letters 116, 061102. False alarm rate below 1 per 203000 years, significance above 5.1 sigma, with two detectors and two independent matched-filter analyses. |
| Cartlidge, Error Undoes Faster-Than-Light Neutrino Results (2012) | https://www.science.org/content/article/breaking-news-error-undoes-faster-light-neutrino-results | experimental physics / instrumentation | Science, 22 Feb 2012. "A bad connection between a GPS unit and a computer may be to blame" for the OPERA 60 ns early arrival. |
| Center for Open Science, Registered Reports | https://www.cos.io/initiatives/registered-reports | metascience / publishing | Peer review before results are known; in-principle acceptance; stage 1 protocol and stage 2 results. |
| Nature, Matters Arising | https://www.nature.com/nature/for-authors/matters-arising | publishing / post-publication review | Public criteria for formal commentary on papers published within 18 months. |
| FQxI | https://fqxi.org | foundations of physics and cosmology | Public competitions and contact route for foundational and high-risk work. |
| Figures README, canonical local copy | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | framework primary | "They outrank everything else in the repo: the code, the rulings and the docs answer to them", and the limit "a shape, not a name". |
| Figures text with line numbers | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | framework primary | Verbatim source of every `Fig N :line` quote in this folder. |
| THE_FORMULA.md | local: `FRAMEWORK/figures/THE_FORMULA.md` | framework primary | Eight-step loop, mode rule, step 7 SEARCHED / INWARD / OUTWARD. |

**Fetch note (visible correction).** An attempted arXiv URL, `https://arxiv.org/abs/1010.1286`, was opened and turned out to be a paper on trellis-coded quantizers, not the intended 5-sigma paper. It is recorded here as a failed identification and is not cited in any file. The look-elsewhere claim is supported by Gross and Vitells (verified above) instead. The Taylor and Francis journal landing page returned 403 to the automated fetch; the article DOI page was fetched successfully and is the URL used.

## Wider literature and how it bears

The world sources are secondary corroboration. They were chosen from low-overlap fields so that agreement is not just one evidence pool wearing several names.

- **Statistics (ASA, Benjamini and Hochberg):** multiplicity and thresholds are the field's own named problems. The ASA statement says conclusions should not rest on passing a threshold and that un-reported multiple analyses make p-values uninterpretable. Benjamini and Hochberg give a formal way to control the expected proportion of false discoveries when many slots are tested. Both corroborate F1, F2, F5 and F6 at the level of statistical practice. They do not derive the framework's five-bin sort; they are instances of it.
- **Physics and astronomy (Gross and Vitells, LIGO):** the look-elsewhere effect is explicitly the correction for finding an excess *anywhere* in a range, which is the per-slot problem at scale. The GW150914 detection pairs a 5.1 sigma threshold with two detectors, independent pipelines and an estimated background. Corroborates F1, F5 and F9: the number is a filter inside a larger ground-checking chain, not a verdict by itself.
- **Instrumentation (Cartlidge, OPERA):** a 60 ns anomaly with a careful error budget was traced to a connection and a clock. Corroborates F9 and the mis-attached bin of F2: sometimes the right answer is to repair the channel, not to mint a term.
- **Psychology and medicine methodology (Simmons et al., Yaddanapudi):** hidden flexibility inflates false positives, and defining success by any single threshold produces bias regardless of which measure is used. Corroborates F6 and F5. Simmons et al. report that combining four common degrees of freedom raises the false-positive rate to 60.7 percent at p < .05 in their simulation, a concrete instance of a frame scoring itself with a quantity it also produces (Fig 1 :27).
- **Metascience infrastructure (COS, Nature):** registered reports and post-publication commentary are institutional routes that implement pre-registration and independent challenge. These are contact venues, not evidence for the claim.

No world source conflicts with the figure verdict, so the conflict rule (a conflict sends the census back for re-census, never flips the verdict) was not triggered. Overlap: the world sources are independent of the framework author, but they are overwhelmingly about statistical practice rather than the metalaw itself, so they corroborate the *problem statement* more strongly than the specific five-bin shape. That limit is stated rather than smoothed.

## Distribution: offer, do not push

- **Fig 4 :22** "Only methods cross up. Only head starts come down." A reader who receives the full architecture before describing a residual has been handed a recording, not a generator. Lead with the rule and its refuter; offer the links after.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the rule were true before giving them the article.
- **Fig 2 :40** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Do not pool later agreement as corroboration.

**Recommended order in a reply:** (1) the residual, the five-bin claim and the pre-registered refuter; (2) ask what they would count as a failure, and record the answer; (3) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1.** Validate the decision rule against the reader's own ground. Their verdict is recorded before any theory is shown. By Fig 10 :52 "Bring a characterised residual, never the source" and Fig 2 :45 "Frames range against the ground. They do not negotiate with it."

**Stage 2, opt-in only.** If they are curious, offer the three source families: the figures and formula (local extract and public repository), the eight essays, and the world literature above. Their later agreement is never counted as evidence (Fig 2 :40).

**Stage 3, opt-in only.** Offer the formula as a method to reuse on a problem the reader can check. Each user writes their own refuter first and states their own mode, because a frame "cannot check the direction of its own question" (Formula "Direction").

**Hard precondition:** stages 1 to 3 work only if stage 1 survives. The refuter in `01_figure_grounded_audit.md` §4 and `08_expert_verification_packet.md` §2 is written for exactly that test. A failure is more useful than an endorsement.

**What this agent cannot do.** It cannot host or send anything. Hosting the packet on an opt-in page and sending the link is yours to do. Prefer a link that lets a recipient decline contact over an attachment pushed to a list.
