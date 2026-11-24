# Public links and distribution

Every URL below was opened on 2026-11-23 unless marked otherwise. Failed fetches are recorded rather than hidden.

## Verified links actually fetched

| what | URL | verified content |
|---|---|---|
| Verbatim figure text with line numbers (local primary) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | All 13 figures, Operators and Symbols tables. Every `Fig N :line` citation in this folder was checked against this extract. |
| Canonical usage rule (local copy) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | The framework returns *"a shape, not a name"* and stops at the limit of the instruments, recording the lineage. |
| WATSON 60, figures as metalaws (local) | `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` | The figures decide design questions; the human anchor is not an oracle for what the figures already settle. |
| The formula (local) | `FRAMEWORK/figures/THE_FORMULA.md` | Eight-step loop, mode rule, SEARCHED / INWARD / OUTWARD as three distinct questions. |
| A Grand Gender Convergence: Its Last Chapter | https://www.aeaweb.org/articles?id=10.1257/aer.104.4.1091 | Claudia Goldin, *American Economic Review* 104(4), 2014, pp. 1091 to 1119. Abstract includes: "The gender gap in pay would be considerably reduced and might vanish altogether if firms did not have an incentive to disproportionately reward individuals who labored long hours and worked particular hours." |
| The Gender Wage Gap: Extent, Trends, and Explanations | https://www.aeaweb.org/articles?id=10.1257/jel.20160995 | Francine D. Blau and Lawrence M. Kahn, *Journal of Economic Literature* 55(3), 2017, pp. 789 to 865. Abstract reports that human-capital variables explained little by 2010, occupation and industry remained important, interruptions and shorter hours remained significant in high-skilled occupations, and experimental evidence suggests discrimination cannot be discounted. |
| Children and Gender Inequality: Evidence from Denmark | https://www.nber.org/papers/w24219 | Kleven, Landais and Søgaard, NBER WP 24219, 2018; published *AEJ: Applied Economics* 11(4), 2019. Abstract: "most of the remaining gender inequality in earnings is due to children"; the gap is around 20 percent in the long run, driven in roughly equal proportions by labor force participation, hours, and wage rates; the child-penalty share rose from about 40 percent in 1980 to about 80 percent in 2013. |
| Nobel press release, Economic Sciences 2023 | https://www.nobelprize.org/prizes/economic-sciences/2023/press-release/ | Royal Swedish Academy of Sciences, 9 October 2023: "Historically, much of the gender gap in earnings could be explained by differences in education and occupational choices. However, Goldin has shown that the bulk of this earnings difference is now between men and women in the same occupation, and that it largely arises with the birth of the first child." |
| Are Emily and Greg More Employable Than Lakisha and Jamal? | https://www.aeaweb.org/articles?id=10.1257/0002828042002561 | Bertrand and Mullainathan, *American Economic Review* 94(4), 2004, pp. 991 to 1013. "White names receive 50 percent more callbacks for interviews." Race audit, used here as a method analogue only. |
| Decomposition Methods in Economics | https://www.nber.org/papers/w16045 | Fortin, Lemieux and Firpo, NBER WP 16045, 2010; *Handbook of Labor Economics* 4th ed., 2011. Abstract states the methods decompose distributional differences and discusses "the assumptions required for identifying the different elements of the decomposition". |
| Simpson's Paradox | https://plato.stanford.edu/entries/paradox-simpson/ | *Stanford Encyclopedia of Philosophy*, first published 2021, substantive revision 2026. Section 5.5, "Policy Questions: Interpreting Data on Discrimination", uses the Berkeley admissions case: women were more likely to apply to departments with lower acceptance rates, which can produce Simpson reversals. |
| Fundamental attribution error | https://en.wikipedia.org/wiki/Fundamental_attribution_error | Observers "underemphasize situational and environmental factors" and overemphasize dispositional ones. The page also records a contested literature (2006 meta-analysis, 2015 critique), so weight is reduced. |
| Parental investment | https://en.wikipedia.org/wiki/Parental_investment | Defines care as "any parental expenditure (e.g. time, energy, resources) that benefits offspring", with Trivers 1972. Mechanism-shape corroboration from evolutionary biology only. |
| Economic empowerment | https://www.unwomen.org/en/what-we-do/economic-empowerment | UN Women, verified: women perform the bulk of household work and often have little time left to pursue economic opportunities. |
| AEA journal policies | https://www.aeaweb.org/journals/policies/ | Verified public policies on data and code availability, legality, disclosure, and registration of field experiments. |
| AEJ: Applied Economics editorial policy | https://www.aeaweb.org/journals/app/editorial-policy | Verified single-blind review, replication package at revise-and-resubmit, and explicit AI policy. |
| SSRN | https://www.ssrn.com/index.cfm/en/ | Verified open preprint platform, 69 disciplines, with an Economics Research Network. |
| RePEc / IDEAS | https://ideas.repec.org/ | Verified public bibliography, over 5.6 million items, with MPRA upload and author registration. |

### Fetch failures, recorded honestly

- `https://www.ilo.org/topics-and-sectors/equal-pay-discrimination/equal-pay` returned 404 on 2026-11-23.
- `https://www.tandfonline.com/journals/rfec20` (Feminist Economics) returned 403.
- `https://journals.sagepub.com/home/ilr` (ILR Review) returned 403.
- `https://www.oecd.org/en/data/indicators/gender-wage-gap.html` returned 403.
- `https://www.journals.uchicago.edu/journals/jole/about` (Journal of Labor Economics) returned 403.
- An early guess for the Goldin and Rouse blind-audition paper (NBER WP 7369) resolved to a different paper on environmental compliance costs. It was discarded, not cited.
- `populationassociation.org` produced a transport error. It is not in the contact CSV.

These failures reduce coverage of the journal-venue set. The venues that were verified are sufficient for one-to-one opt-in contact.

## What the wider literature actually bears on the question

1. **The explained location moves.** Blau and Kahn (2017) and the 2023 Nobel press release both report that the portion of the gap attributed to occupation and to within-occupation differences changes over time. That is evidence for F5: the aggregate does not have a fixed causal location.
2. **One event fires several channels.** Kleven et al. (2018) report a child penalty of about 20 percent driven in roughly equal proportions by participation, hours, and wage rates. That is a union measured at the worker-slot and direct empirical support for F2.
3. **The aggregate can reverse under partitioning.** The SEP entry on Simpson's Paradox gives the general mathematical condition and a documented discrimination case. This is the lowest-overlap corroborator in the folder and it corroborates Fig 1 :28 without using any labor dataset.
4. **An instrument exists for differential treatment.** Bertrand and Mullainathan (2004) demonstrate the callback-audit design. Because it is a race audit, it licenses only the *method* claim in F4, never a gender effect size.
5. **Decomposition parts are identification-dependent.** Fortin, Lemieux and Firpo (2010) say so in their abstract. This is why F3 treats shares as filters.

All five labor-economics items (Goldin, Blau and Kahn, Kleven et al., the Nobel press release, Fortin et al., plus the race audit) share a broad evidence pool and count as **one witness**. The SEP entry, the attribution-psychology entry, and the biology entry are genuinely low overlap. The attribution source is contested and carries reduced weight.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** - "Only methods cross up. Only head starts come down." Sending the full framework before a recipient has described a residual sends a recording, not a generator. Lead with the refuter and the shape claim; offer links after.
- **Fig 10 :42** - "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the union claim were true before giving them any of the links.
- **Fig 2 :35** - "Alignment is triangulation, not negotiation. A mirror cannot correct you." Do not ask for agreement.
- **Fig 2 :40** - "agreement about the world is worthless when the agreeing frames share an evidence pool." Do not pool later agreement as corroboration.
- **Seat Map :163** - "High correlation is disqualifying for a verdict and efficient for a convention." A send list selected for likely agreement produces a convention, not a check.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure, and record the answer; (3) only then, the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1.** Send the residual, the union claim, and the pre-registered refuter. Ask what the recipient would count as a failure. Record the verdict before showing any framework material. This is Fig 10 :52 - "Bring a characterised residual, never the source."
2. **Stage 2, opt-in only.** If they are curious, offer the verified links. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode. This sends a generator, which Fig 4 :22 permits.

## Constraint on submission and authorship

The verified AEJ: Applied Economics editorial policy states: "Artificial intelligence (AI) software, such as chatbots or other large language models, may not be listed as an author. If AI software was used in the preparation of the manuscript, including drafting or editing text, this must be briefly described during the submission process" and "Authors are solely accountable for, and must thoroughly fact-check, outputs created with the help of AI software." The AEA journal policies page adds a data and code availability policy and a requirement to register field experiments before submission.

Consequences for this folder:

- This simulated derivation must not be submitted as if it were a human-authored empirical finding. It is a checkable shape plus a refuter, and its AI provenance must be disclosed.
- A labor economist or gender researcher who wants to use it must fact-check every empirical statement themselves. The figure derivations are internal-consistency checks, not ground readings.
- A discrimination audit built from this material must be registered in the AEA RCT Registry before submission, per the verified policy.

## Zip or hosting

There is no archive in this folder. If the material is hosted, prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. This agent cannot upload or send anything. Hosting and sending are the owner's action.
