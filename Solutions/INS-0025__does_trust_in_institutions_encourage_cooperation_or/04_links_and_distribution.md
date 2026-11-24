# Public links and distribution

All links below were opened on 2026-11-23. Where a fetch failed, the failure is recorded rather than hidden and a working record URL is given.

## Verified framework links (local paths, read this session)

| what | path | verified content |
|---|---|---|
| Figures as text | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | 13 figures plus Operators and Symbols tables with SVG line numbers. All `Fig N :line` quotes in this folder come from it. Key lines: Fig 1 :19, Fig 2 :35, Fig 9 :54, Fig 11 :39, Fig 12 :121. |
| Canonical usage rule | `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo"; the framework returns "a shape, not a name"; "Indiscernibility is not identity." |
| The loop and mode rule | `FRAMEWORK/figures/THE_FORMULA.md` | Eight steps; REFUTED bin before mint; mode `general · specified · grounded`; the "Direction" discipline. |
| The seat map | `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` | Seat 4 sees shape without referent; Seat Map :163, :171, :287. |
| Figures as metalaws | `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` | Figures decide design questions; Fig 11 capability claim is a metalaw; no human ruling is owed for what the figures settle. |

## Wider literature actually opened

| source | URL | what it bears on |
|---|---|---|
| Bauer, Keusch and Kreuter 2019, "Trust and cooperative behavior: Evidence from the realm of data-sharing", PLoS ONE | https://pmc.ncbi.nlm.nih.gov/articles/PMC6703688/ | Full text opened. "We found that there is no relationship between trust and cooperation." A real-situation null result; supports the per-slot reading (F5) and the projection warning (F7). |
| Kuipers 2022, "Trust and Cooperation", Frontiers in Robotics and AI | https://pmc.ncbi.nlm.nih.gov/articles/PMC9100567/ | Full text opened. "Where that trust exists, cooperation is possible"; a low-overlap AI/robotics field supporting the enabling path and the mutual-update warning (F1, F4). |
| Murtin et al. 2026, "What explains trust in institutions?", European Journal of Political Research | https://researchonline.lse.ac.uk/id/eprint/138251/ | Abstract opened. Trust "hinges primarily on perceived governance quality" and is built "through repeated, positive interactions with well-functioning public services". Institution to trust, habitat reading (F3). |
| Martinangeli, Povitkina, Jagers and Rothstein 2023, "Institutional Quality Causes Generalized Trust", American Journal of Political Science | https://doi.org/10.1111/ajps.12780 | Abstract read via the search-result record; full text 403 to the fetcher. "Our contributions are the first causal experimental evidence on the link between institutional quality and trust." Institution to trust path (F1, F3). |
| Dinesen, Schaeffer and Sønderskov 2020, "Ethnic Diversity and Social Trust", Annual Review of Political Science | https://doi.org/10.1146/annurev-polisci-052918-020708 | Abstract opened via the Semantic Scholar API record. "We find a statistically significant negative relationship between ethnic diversity and social trust across all studies." Common-cause and habitat condition (F1, F3). |
| Goist and Kern 2018, "Traditional institutions and social cooperation: Experimental evidence from the Buganda Kingdom", Research & Politics | https://doi.org/10.1177/2053168017753925 | Abstract opened via the Crossref API record. Traditional institutions increase cooperation through expected reward by social elites, not peer effects. Habitat-specific mechanism (F3). |
| Kim, Putterman and Zhang 2022, "Trust, Beliefs and Cooperation: Excavating a Foundation of Strong Economies", European Economic Review | https://doi.org/10.1016/j.euroecorev.2022.104166 | Abstract snippet opened via the search result and the Brown University manuscript landing page; the PDF itself was not parsed by the fetcher. "it is hard to identify the effect of beliefs regarding others' trustworthiness on cooperation in natural settings." Measurement warning (F1, F2, F7). |
| Wikipedia, "Trust (sentiment)" | https://en.wikipedia.org/wiki/Trust_(sentiment) | Full article opened. "Trust acts as a reducing agent of social complexity, allowing for cooperation." Orientation only, low evidentiary weight. |

## Fetch failures and how they were handled

- `oecd.org` trust survey page returned 403 and was dropped from the source set rather than cited.
- `wiley.com` full text of the AJPS paper returned 403; the abstract was read through the DOI search record and is recorded as such in `10_source_ledger.csv`.
- `tandfonline.com` Journal of Trust Research returned 403 and was dropped from the contact-point set.
- `sagepub.com` journal home returned 403; the DOI record was opened via Crossref instead.
- `cambridge.org` journal page timed out; the LSE repository copy was opened and used as both source and mapping point.
- The Brown-hosted PDF for Kim et al. returned an unsupported content type; the abstract snippet was read and the limitation recorded.

No source was cited that was not actually opened in some form, and the form is stated in the ledger.

## Distribution: offer, do not push

- **Fig 4 :22** "Only methods cross up. Only head starts come down." Sending the full framework before a checker has described a residual sends a recording, not a generator. Lead with the shape and the refuter; offer links after.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the architecture.
- **Fig 2 :40** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Agreement from people selected for likely agreement is one pool talking.
- **Fig 1 :19** "The residual is indexed by object slot, not aggregated." Do not collapse a checker's per-slot correction into an overall rating.

**Recommended order in a reply:** (1) the shape claim and its three refuters; (2) ask what they would count as a failure and which slot they would test first; (3) only if curious, the three local framework paths; (4) offer the loop as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

## The two-stage offer, and why it is in this order

1. **Stage 1 before stage 2** is Fig 10 :52 "Bring a characterised residual, never the source." The recipient checks the output without holding the framework's interior.
2. **Stage 2 is opt-in by construction.** Seat 4 "must not hold the interiors, the records, the anchor, any stake, or any authority." Once a recipient has absorbed the theory, their agreement stops being evidence. Record their Stage 1 verdict before showing anything, and never pool later agreement as corroboration.
3. **Stage 3 sends a method, which is permitted.** Fig 4 :22 again: the formula is a generator, so giving it away does not give away an answer.
4. **Stage 3 still needs a ground per problem.** `THE_FORMULA.md` "Direction": a frame "cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds." Each user must write down what would refute their result before running it, and label the mode of what they get.

**Hard precondition:** stages 1 to 3 only work if the Stage 1 output survives. That is what the three refuters in `02_outreach_email.md` are for. Nothing in this folder sends anything; hosting and sending are yours to do.
