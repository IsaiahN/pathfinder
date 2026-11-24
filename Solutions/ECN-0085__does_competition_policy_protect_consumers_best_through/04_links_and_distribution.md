# Public links and distribution

World links were opened on 2026-11-23. Framework links are local files in this workspace. Where a direct fetch failed, the failure is recorded rather than hidden; those sources were read through the search result text and are marked accordingly in `10_source_ledger.csv`.

## Verified links actually read

| what | URL | verified content |
|---|---|---|
| European Commission, Article 102 speech, 1 March 2024 | https://ec.europa.eu/commission/presscorner/detail/en/speech_24_1247 | "one ensures 'well-being in the EU' by tackling all sorts of anticompetitive effects, may they impact price, choice, diversity, quality or innovation." Also: "A 'narrow focus on price' is not what you take away from those cases." The press-corner page itself rendered as a shell on direct fetch; the speech text was obtained through the search result and is recorded as such. |
| European Commission, Competition topic page | https://commission.europa.eu/topics/competition_en | "The EU's competition rules help keep prices down and product quality high..." and "It also speeds up innovation..." Fetched directly 2026-11-23. |
| OECD, Consumer Welfare Standards background note, 2023 | https://www.oecd.org/content/dam/oecd/en/publications/reports/2023/05/consumer-welfare-standards-advantages-and-disadvantages-compared-to-alternative-standards_4de3277e/3d174fdf-en.pdf | "the consumer welfare standard is not concerned only with lower prices... This also includes innovation." Direct PDF fetch unsupported; text obtained via search result. |
| Aghion, Bloom, Blundell, Griffith and Howitt, QJE 2005 | https://academic.oup.com/qje/article-abstract/120/2/701/1933966 | Abstract: "We find strong evidence of an inverted-U relationship using panel data." Open access copy checked at https://dash.harvard.edu/server/api/core/bitstreams/7312037c-614d-6bd4-e053-0100007fdf3b/content |
| Pirotta et al., Science of the Total Environment, 2022 | https://www.sciencedirect.com/science/article/pii/S0048969722004144 | "their combined effects often cannot be predicted reliably from the individual effects of each stressor" |
| Stockbridge et al., Ecological Applications, 2025 | https://esajournals.onlinelibrary.wiley.com/doi/10.1002/eap.3056 | "Additive models have the potential to misrepresent cumulative impact intensity and do not provide the opportunity for targeted mitigation measures when managing the interactive effects of stressors." |
| UNECE, Guidelines on Measurement of Well-being, ch. 4, 2025 | https://w3.unece.org/Stories/2025/09/wellbeing/webpage6.html | "an increase in A can be offset by a decrease in B... This may not necessarily be the case... The recommendation is therefore that composite indices should be accompanied by dashboards" |
| Figure text with line numbers (local) | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md | Primary source for every Fig N :line citation in this folder. |
| Canonical usage rule (local) | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md | "They outrank everything else in the repo... the quotes are the authority, not this summary." |
| The eight-step loop (local) | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md | Mode rule, Direction step, three questions at step 7. |

## Wider literature that bears on the question

Two findings from the competition-policy sources change the shape of the answer rather than decorate it:

1. **The standard is explicitly multi-axis.** The EC speech and the OECD note both say that consumer welfare includes price, choice, quality and innovation. This corroborates F1 and F3: the offered menu is not how the field actually frames the goal. It does **not** settle which axis dominates a given slot, which remains a gap (F8).
2. **The axes interact.** Aghion et al. find an inverted-U between competition and innovation, so "more competition" cannot be assumed to raise the innovation axis monotonically. The ecology sources find that combined effects often cannot be predicted from individual effects and that additive models misrepresent the compound. These are low-overlap witnesses for Fig 9 :55 and Fig 12 :125, and they are the reason "all three" is read as a union compound rather than a sum.

One source conflicts. The OECD note says the standard is "ambivalent to the identity of the consumers, not seeking to understand distributional effects for example". That conflicts with per-slot indexing (F2). It was returned to the census and re-mapped: the OECD sentence describes a *convention as practiced*, while F2 is a claim about the residual the policy is trying to reduce. Fig 10 :47 says "a convention that decides an outcome has stopped being one." The conflict does not flip the verdict; it is kept visible in `01_figure_grounded_audit.md` section 7 and `09_watson_answer.md`.

## Distribution: offer, do not push

- **Fig 4 :22:** "Only methods cross up. Only head starts come down." Sending the full framework before a recipient has described a residual sends a recording, not a generator. Lead with the shape claim and the refuter; offer links after.
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40:** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A send selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure; (3) record their verdict; (4) only then offer the links, with the note that the figures, not this summary, are the authority.

## The two-stage offer

1. **Stage 1:** validate the shape claim against the ground. The recipient checks the output without holding the framework's interior. Fig 10 :52: "Bring a characterised residual, never the source."
2. **Stage 2, opt-in only:** if curious, they may read the framework. Their agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse. Fig 4 :22 permits sending methods. Each user must still write their own refuter and state their own mode, because the formula's Direction step says a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if the stage-1 shape survives. If a reader supplies one of the four refuters, the shape is narrowed or withdrawn and no theory is shown.

## Hosting

Nothing here is sent by this agent. Hosting and sending are yours. Prefer a link that lets a recipient decline contact, which is closer to the figures' rule than an attachment pushed to a list.
