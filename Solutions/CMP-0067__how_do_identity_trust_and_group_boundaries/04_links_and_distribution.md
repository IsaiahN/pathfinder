# Public links, wider literature, and distribution

Every URL in the "fetched" table below was opened on 2026-11-22. URLs that failed are listed separately and are not cited as read in `10_source_ledger.csv`. The local framework files are framework primaries, not world sources.

## Verified public links actually fetched

| what | URL | verified content and usable quote |
|---|---|---|
| Complex contagion | https://en.wikipedia.org/wiki/Complex_contagion | Defines complex contagion: "multiple sources of exposure to an innovation are required before an individual adopts the change of behavior." Reports Centola and Macy 2007: information and disease spread as simple contagions, behaviors as complex contagions; weak ties and small worlds can slow complex diffusion. Four mechanisms named: coordination, credibility, legitimacy, emotional contagion. |
| Homophily | https://en.wikipedia.org/wiki/Homophily | McPherson, Smith-Lovin and Cook 2001, "Birds of a Feather", Annual Review of Sociology 27:415-444. Quote: homogeneous personal networks create limited "social worlds in a way that has powerful implications for the information they receive, the attitudes they form, and the interactions they experience." Also: "The effects of homophily on the diffusion of information and behaviors are also complex." Notes global assortativity can hide local heterogeneity. |
| Social identity theory | https://en.wikipedia.org/wiki/Social_identity_theory | Tajfel and Turner 1979 onward. Quote: "Social identity theory suggests that an organization can change individual behaviours if it can modify their self-identity or part of their self-concept that derives from the knowledge of, and emotional attachment to, the group." Documents ingroup favoritism and the permeability of group boundaries. |
| Trust (sentiment) | https://en.wikipedia.org/wiki/Trust_(sentiment) | Schilke et al. 2021 and others. Quote: "Trust is integral to the idea of social influence: it is easier to influence or persuade someone who is trusting." Social identity section: trust in strangers is a function of "salient group memberships" and "people generally think well of strangers but expect better treatment from in-group members in comparison to out-group members." |
| Echo chamber (media) | https://en.wikipedia.org/wiki/Echo_chamber_(media) | Nguyen 2020, Episteme, and Cinelli et al. 2021, PNAS. Key distinction: an epistemic bubble excludes sources by omission and is poppable, while an echo chamber "depends on a manipulation of trust by methodically discrediting all outside sources" and is "incredibly strong." Reports a 2026 pre-registered experiment in which both removing Twitter access and encouraging cross-ideological interaction increased polarization among politically segregated users, while non-segregated users showed little or no response. Also documents fragmented measurement: "unclear definitions, inconsistent measurement methods, and unrepresentative data." |
| SPSP | https://spsp.org | Society for Personality and Social Psychology. Public contact, convention, journals and news routes. Its own 2026 news items cover ideological development, youth radicalization and political polarization. Used for `03_public_contact_points.csv`. |
| Network Science journal | https://www.cambridge.org/core/journals/network-science | Cambridge University Press, fully open access since 2024, submissions via ScholarOne. Scope includes "mathematical, computational, empirical, and substantive aspects of the collection, analysis, modeling, and visualization of network data in any field of scientific inquiry." Recent articles include political behavior and polarization topics. Used for `03_public_contact_points.csv`. |
| Local figure text | local: FRAMEWORK/reference/03-FIGURES_TEXT.md | Primary. Source of every `Fig N :line` quote in the folder. |
| Local canonical usage rule | local: FRAMEWORK/reference/FIGURES_README_canonical.md | "They outrank everything else in the repo... the quotes are the authority, not this summary." |
| Local formula and seat map | local: FRAMEWORK/figures/THE_FORMULA.md ; local: FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md | Mode rule, step 7 (SEARCHED / INWARD / OUTWARD), and Seat Map :163, :225, :283, :287. |

## Fetch failures and omissions (honest record)

- `https://pubmed.ncbi.nlm.nih.gov/20813952/` (Centola 2010, Science) returned an HHS vulnerability-disclosure page instead of the abstract. The paper is cited only through the Complex contagion page's reference list, with reduced weight, and the quote in `10_source_ledger.csv` is from the encyclopedia page, not from PubMed.
- `https://en.wikipedia.org/wiki/Strength_of_weak_ties` returned 404. The weak-ties bridge concept is taken from the Complex contagion and Network Science pages instead (the latter lists Neal 2024, "The not-so-forbidden triad: Evaluating the assumptions of the Strength of Weak Ties").
- `https://en.wikipedia.org/wiki/Interpersonal_bridge` returned 404. No claim rests on it.
- The web search integration returned no results for two queries about Centola and McPherson; sources were reached by direct fetch instead.
- No source was cited from a page that was not opened or returned by the fetch. Where only a reference-list entry was available, this is stated in the ledger.

## Wider literature relevant to the residual

These are primary papers named in the fetched pages' reference lists. They were not individually opened this session, so they are listed as leads for a checker, not as read witnesses. The exception is where a quote from a fetched page conveys their content directly.

- Centola and Macy 2007, "Complex Contagions and the Weakness of Long Ties", American Journal of Sociology, via the University of Pennsylvania repository. Directly relevant to tie strength and the number of exposures needed for a behavior.
- Centola 2010, "The Spread of Behavior in an Online Social Network Experiment", Science 329(5996):1194-1197. Cluster seeding experiment; the key experimental anchor for complex contagion.
- McPherson, Smith-Lovin and Cook 2001, "Birds of a Feather: Homophily in Social Networks", Annual Review of Sociology 27:415-444. The identity-to-tie mechanism.
- Easley and Kleinberg 2010, *Networks, Crowds, and Markets*, Cambridge University Press. Threshold model q and cascade obstacles; the source of the "clusters of density d > 1 - q are obstacles to cascades" statement on the Complex contagion page.
- Tajfel and Turner 1979, "An integrative theory of intergroup conflict". Foundational social identity source.
- Turner and Oakes 1986, British Journal of Social Psychology 25(3):237-252. Self-categorization and social influence.
- Platow et al. 2012; Foddy et al. 2008, 2009; Tanis et al. 2005. Experimental allocator and trust-game evidence for in-group trust.
- Schilke et al. 2021. Generalized and particularized trust, two research streams.
- Nguyen 2020, "Echo Chambers and Epistemic Bubbles", Episteme 17(2):141-161. The trust-manipulation distinction used in F3.
- Cinelli et al. 2021, "The echo chamber effect on social media", PNAS 118(9):e2023301118. Cross-platform clustering result.
- Diaz Ruiz and Nilsson 2023, Journal of Public Policy & Marketing 4(1):18-35. Disinformation circulation through identity-driven controversies.
- Bakshy et al. 2015. Political homophily in a 10.1 million user Facebook dataset; cross-cutting exposure of 24 percent for liberals and 35 percent for conservatives.

## Distribution: offer, do not push

Figure-grounded reasons:

- Fig 4 :22 "Only methods cross up. Only head starts come down." Sending the whole framework before anyone has described a residual sends a recording, not a generator. Lead with the separator and its refuter; offer links after.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." Seat 4 must not hold the interiors. A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the separator were true before giving them the framework.
- Seat Map :163 "High correlation is disqualifying for a verdict and efficient for a convention." A mass send selected for people who already agree produces a convention, not corroboration.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Agreement from a pool that has read this packet is not a second witness.

**Recommended order in a reply:** (1) the separator and its six refuters; (2) ask what they would count as a failure and what their ground would be; (3) record their verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer (and the optional third stage)

1. **Stage 1:** validate the output against the ground. The recipient checks the separator without holding the framework's interior.
2. **Stage 2, opt-in only:** if curious, read the theory that produced it. Their stage-1 verdict is already recorded and is never pooled as corroboration after they have seen the source.
3. **Stage 3:** offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode. A generator crossing a membrane is permitted; a recording is not.

**Hard precondition:** this package is a simulated derivation with no ground reading. Say that plainly if asked. A polite reply, an endorsement, or a shared evidence pool is not a refutation and not a confirmation.

## Hosting and sending

Nothing here is sent by this agent. Hosting the packet on an opt-in page and sending the link is for the user to do. Prefer a link that lets a recipient decline contact, since an opt-in download is closer to the figure's rule than an attachment pushed to a list. Do not attach a bulk-send plan to any venue in `03_public_contact_points.csv`; every entry is a public submission or contact route, not a mailing list.
