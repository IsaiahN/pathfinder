# Public links and distribution

Every URL below was fetched and read on 2026-11-23. Failed fetches and discarded URLs are recorded at the end, because a record of what was dropped is part of the provenance.

## Verified world sources actually read

| what | URL | what it says, in the author's own words or close paraphrase |
|---|---|---|
| Solow, Prize Lecture, "Growth Theory and After" (1987, printed 1992) | https://www.nobelprize.org/prizes/economic-sciences/1987/solow/lecture/ | *"the permanent rate of growth of output per unit of labor input is independent of the saving (investment) rate and depends entirely on the rate of technological progress in the broadest sense."* Also *"Thus technology remains the dominant engine of growth, with human capital investment in second place."* On institutions: *"the markets for goods and for labor look to me like imperfect pieces of social machinery with important institutional peculiarities."* On a third factor: *"rapid technical progress and high investment could both be the result of some third factor, like the presence of conditions that encourage entrepreneurial activity."* |
| Solow, Facts | https://www.nobelprize.org/prizes/economic-sciences/1987/solow/facts/ | *"In the 1950s, he developed a mathematical model illustrating how various factors can contribute to sustained national economic growth."* His work *"helped persuade governments to channel funds into technological research and development to spur economic growth."* |
| Acemoglu, Johnson and Robinson, "Institutions as the Fundamental Cause of Long-Run Growth", NBER WP 10481 (2004) | https://www.nber.org/papers/w10481 | *"differences in economic institutions are the fundamental cause of differences in economic development."* *"Economic institutions determine the incentives of and the constraints on economic actors, and shape economic outcomes."* Uses divided Korea and colonisation as quasi-natural experiments. |
| Charles I. Jones, "Growth and Ideas", NBER WP 10767 (2004) | https://www.nber.org/papers/w10767 | *"Ideas are different from nearly all other economic goods in that they are nonrivalrous. This nonrivalry implies that production possibilities are likely to be characterized by increasing returns to scale."* |
| Ortiz-Ospina, "The importance of social networks for innovation and productivity", OWID (2019) | https://ourworldindata.org/social-networks-innovation-and-productivity | *"social networks facilitate the diffusion of ideas across individuals and firms, and because of this, they play an important role in productivity growth."* Reports patent-citation evidence that citations are three to four times as likely to come from the same state, and Facebook-ties evidence that connectedness predicts cross-county citation after controlling for distance. |
| Roser, "Breaking out of the Malthusian trap", OWID (2020) | https://ourworldindata.org/breaking-the-malthusian-trap | *"the speed of innovation fueling productivity growth became so fast that both the size of the population and income per person started growing at the same time."* Before that, *"Any increase in productivity would only lead to a brief increase in living standards, because it ultimately led to an increasing size of the population."* |
| Roser et al., "Economic Growth" topic page, OWID (2023) | https://ourworldindata.org/economic-growth | *"Economic growth means an increase in the quantity or quality of the many goods and services that people produce."* Supplies the long-run per-capita and productivity charts that serve as the ground anchor. |
| Isaiah N, "The Library of Babel: Locating The Book of Books" (2026) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Also *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* Framework essay, high overlap, used for the shape vocabulary only. |
| Isaiah N, "The Recursive Self-Improvement Trap" (2026) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* Used for the simulated-status and prestige rules. |
| Isaiah N, "The Hard Problem is About Source" (2026) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | *"If several paths create the same behavior, then behavior is a projection with lossy information."* An instrument reading green *"cannot comment on the source"*; the spectrometer, not an argument, resolved the ambiguity. Used for the warning about naming a driver from an aggregate reading. |

All ten are recorded with author, venue, year, access date, quote, field and overlap in `10_source_ledger.csv`.

## Wider literature that bears on this question

- Solow's lecture cites Denison's decomposition (education 30 percent, advance of knowledge 64 percent of output per worker growth, 1929 to 1982), and notes that the percentages sum to more than 100. Solow's own comment: *"One does not have to believe in the accuracy of these numbers; the message they transmit is pretty clear anyway."* This is a useful precedent for reporting a shape rather than a precise coefficient.
- Jones (2004) and Romer (1990, linked from the OWID article as http://web.stanford.edu/~klenow/Romer_1990.pdf) give the ideas side of the case. The OWID page reports Romer's 2018 prize *"for integrating technological innovations into long-run macroeconomic analysis"*.
- Jaffe, Trajtenberg and Henderson (1993, QJE) and Bailey, Cao, Kuchler, Stroebel and Wong (2018, JEP) supply the network evidence summarised by OWID.
- The AJR paper is the institutional side. Its own abstract says political institutions and the distribution of resources are the state variables that change over time, which is a habitat, not a one-off lever.

None of these sources was cited without being opened. The two framework essays share an author and an evidence pool with the figures, so their agreement is expected and carries little independent weight. The economics sources are independent of the framework but share a growth-accounting literature with one another, so their agreement is one pool, not several witnesses.

## Failed or discarded fetches, recorded honestly

- A guessed NBER number (w7981) for the colonial-origins paper resolved to a different paper about retail prices. It was discarded and never cited. The institutions claim is cited from w10481, which was opened and checked.
- An MIT economics PDF URL for the AJR chapter returned 404. The NBER working-paper page was used instead.
- A University of Wisconsin PDF for a growth-econometrics survey returned 404. No substitute was read, and no claim in this folder depends on it.
- A Santa Fe Institute page for "adjacent possible" resolved to a generic "This is not the page you are looking for" stub. No corroboration is claimed from complexity science here; that field was attempted and yielded nothing usable at this budget.
- A Britannica niche-construction page returned 404. No ecology corroboration is claimed.
- A Springer journal URL guessed for the Journal of Economic Growth resolved to an archived operations-research journal. It was removed from `03_public_contact_points.csv` rather than left as a dead link.
- The Romer 1990 PDF link was seen on the OWID page but the PDF itself was not fetched successfully by the text fetcher. Romer is therefore cited through the OWID article's description, not as a directly read primary source.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Sending the full framework before anyone has described a residual sends a recording, not a generator.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit"*. Ask what they would expect to see if the shape were true before giving them the source list.
- **Fig 2 :39** *"Correlation has valence."* Selecting recipients for likely agreement produces a convention, not a test.
- **Fig 9 :60** *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Venue prestige is a contact or budget filter here, never evidence.

## The two-stage offer

1. **Stage 1.** Send the residual, the three constraints, the `gap`, and the four refuters. Ask what they would count as a failure. Record their verdict *before* showing any framework material.
2. **Stage 2, opt-in only.** If they are curious, send the source links. The figures, not this summary, are the authority. Their later agreement is never pooled as corroboration.
3. **Stage 3, if asked.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. It is reported as `gap` on the literal single-driver question by design. If a recipient reads that as a failure to answer, say so plainly rather than defending a name the derivation does not license.
