# Public links and distribution

All framework and venue links were fetched and verified on 2026-11-22. World-source links were opened the same day; those that returned a fetch error were read through the search integration's extracted page text and are marked as such in `10_source_ledger.csv`.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Verbatim figure text with line numbers | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | All `Fig N :line` citations in this folder come from this extract; citation form is `Fig N :line`. |
| Canonical figures usage rule | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also the stop condition: "what a missing thing would have to look like (a shape, not a name)". |
| Eight-step loop and mode rule | local: `FRAMEWORK/figures/THE_FORMULA.md` | "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Steps 3, 5, 6 and 7 bear on this question. |
| Source-discrimination essay | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, Aug 28 2026. "the instrument is speaking only about what it measured, it cannot comment on the source"; "If several paths create the same behavior, then behavior is a projection with lossy information"; "The answer is unreached until a better instrument exists." The spectrometer, not an argument, resolved the green reading. |
| Verification and prestige essay | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, Nov 19 2026. "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Figures for direct download | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`, folder `figures/`, with Figures 1-13 and the Operators and Symbols tables as SVG. Its README gives the citation form `Fig N :line`. |
| AOM Publishing with AOM | https://www.aom.org/publications/journals/publishing-with-aom/ | Double-blind peer review, per-journal submission guidelines, and the AI policy: "Work submitted to AOM must be created by the authors and not the product of artificial intelligence tools unless appropriate to the research question and properly cited." |
| AOM 2027 Call for Submissions | https://www.aom.org/events/annual-meeting/submitting/call-for-submissions/ | Vienna, 30 July to 3 August 2027. Deadline 12 January 2027. Lists OB, HR, OMT and RM scholarly programs. |
| AMD Registered Reports call | https://www.aom.org/event/call-for-submissions-amd-registered-reports/ | Permanent call through 31 December 2026; introduction, methods, measurement and analysis plan without results; explicitly willing to publish negligible or non-effects. |
| SSRN homepage | https://www.ssrn.com/ | Open preprint platform, over 1.5 million full text papers across 69 disciplines, including Social Sciences. |
| SSRN Submit a Paper | https://hq.ssrn.com/submission.cfm | The actual opt-in submission route; free account required. |

## Wider literature that bears on the question

All were opened on 2026-11-22. Each is a secondary witness. None overrules a figure; the one genuine conflict was returned to the census and re-mapped in `01_figure_grounded_audit.md` section 7.

- **Social psychology, compliance versus internalization.** Herbert C. Kelman, "Compliance, identification, and internalization: Three processes of attitude change", *Journal of Conflict Resolution* 2(1), 1958. Read via the Harvard Scholars PDF. "the underlying processes in which an individual engages when he adopts induced behavior may be different, even though the resulting overt behavior may appear the same." Predicts that one agreement reading has several sources. **Corroborates** F1 and F5. Shares the business/social-psychology pool with the commitment scales below, so one witness.
- **Organizational commitment.** Natalie J. Allen and John P. Meyer, "The measurement and antecedents of affective, continuance and normative commitment to the organization", *Journal of Occupational Psychology* 63(1), 1990. Read via the Internet Archive PDF. "Employees with strong affective commitment remain because they want to, those with strong continuance commitment because they need to, and those with strong normative commitment because they feel they ought to do so." Predicts three sources of one observable (staying). **Corroborates** the union structure in F5, but its scale is a reading, not a discriminator.
- **Survey method, common method bias.** Philip M. Podsakoff, Scott B. MacKenzie, Jeong-Yeon Lee and Nathan P. Podsakoff, "Common method biases in behavioral research: A critical review of the literature and recommended remedies", *Journal of Applied Psychology* 88(5), 2003. Read via full-text PDF. "common method biases pose a rival explanation for the correlation observed between the measures." Predicts that two readings from one source inflate agreement. **Corroborates** F3 and Fig 2 :44.
- **Organizational survey method, impression management.** Robert J. Fisher, Saurabh Rawal, Bryan Hochstein and Christopher R. Plouffe, "Development and validation of the SDR-O: A new measure of socially desirable responding in organizations", *Personality and Individual Differences* 222, 2024. Open-access article. "Organizational respondents often provide misleading or patently false information on job applications, personality tests, and other self-reports." Predicts that a general social-desirability scale misses organizational impression management; a domain-specific instrument is owed. **Corroborates** F2 and F7.
- **Survey design, source triangulation.** Leopold Ried, Stephanie Eckerd and Lutz Kaufmann, "Social desirability bias in PSM surveys and behavioral experiments", *Journal of Purchasing and Supply Management* 28(1), 2022. Open-access article. "source triangulation can help in reducing social desirability bias." Predicts that multiple sources and archival data reduce the reading's dependence on the respondent. **Corroborates** F3, with the same methods pool as Podsakoff, so one witness.
- **Vision science, metamerism (low overlap).** Brian V. Funt and Emitis Roshan, "Metamer mismatching underlies color difference sensitivity", *Journal of Vision* 21(12):11, 2021. Read via PMC. "the greater the degree of metamer mismatching for a color, the wider the range of spectral reflectances that could have led to it". Predicts that one reading is compatible with many sources, and that changing the illuminant is a readymade discriminator. **Corroborates** F1 and F7 from a different field with different instruments.
- **Evolutionary biology, honest signalling (low overlap, with a conflict noted).** Szabolcs Számadó, István Zachar, Dániel Czégel and Dustin J. Penn, "Honesty in signalling games is maintained by trade-offs rather than costs", *BMC Biology* 21:4, 2023. Read via PMC. "Our results refute the claim that signals must be costly at the evolutionary equilibrium to be reliable"; "Honesty is maintained by the potential costs of cheating through dishonest signals, but not by some general cost of signalling at the evolutionary equilibrium." A naive reading would have corroborated "make agreement costly". It **conflicts** with that lever. The conflict was returned to the census and re-mapped: what matters is the cost of deviating or faking, that is, a source-discriminating instrument, not the magnitude of the visible signal. After re-mapping it corroborates F7. Verdict unchanged.

## Distribution: offer, do not push

- **Fig 4 :22** "Only methods cross up. Only head starts come down." Sending the full framework before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter; offer the links after.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if genuine sharing were present, before giving them the article.
- **Fig 2 :42** "Buy independence in proportion to the cost of being wrong." A list selected for people who already agree produces a convention, not corroboration (Fig 2 :40).
- **AOM AI policy**, quoted above. Declare the simulated provenance. Do not present this package as human-authored empirical work.

**Recommended order in a reply:** (1) the shape claim and its three refuters; (2) ask what they would count as a failure; (3) record their verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1 before stage 2** is Fig 10 :52 "Bring a characterised residual, never the source." The recipient checks the output without holding the framework's interior.
2. **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. The stage-1 verdict must be recorded before any theory is shown, and later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3 sends a method, which is permitted** (Fig 4 :22). Each team writes its own refuter, states its own mode and names its own ground.
4. **Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The refuters in `02_outreach_email.md` are live. A failure is more useful than an endorsement.

## Zip

The twelve files in this folder are the package. I cannot upload them or send them to anyone. Hosting and sending is yours to do. Prefer an opt-in download page over an attachment pushed to a list, so a recipient can decline contact without friction.
