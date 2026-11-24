# Public links and distribution

Every link below was fetched or its indexed content opened on 2026-11-22. Failures are recorded as failures, not quietly dropped. All of them are in `10_source_ledger.csv` with author, venue, year, accessed date and a quote where one was obtained.

## Verified sources actually read

| what | URL | what it returned |
|---|---|---|
| Anderson 1972, "More is Different" (notes quoting the paper) | https://hugocisneros.com/notes/andersonmoredifferent1972 | Full quote: *"The ability to reduce everything to simple fundamental laws does not imply the ability to start from those laws and reconstruct the universe."* Bibliography: P. W. Anderson, Science 177(4047), 393-396, 1972. |
| Lloyd 2001, "Measures of complexity: a nonexhaustive list" | https://csc.ucdavis.edu/~cmg/Group/readings/SL-MeasOfComplexity.pdf | **Partial.** Direct fetch returned `Unsupported fetched file content type: application/pdf`. The quoted abstract text was read from this same URL through the search index: *"The world has grown more complex recently, and the number of ways of measuring complexity has grown even faster."* IEEE Control Systems Magazine 21(4), 7-8. DOI page https://doi.org/10.1109/mcs.2001.939938 was fetched and confirms author, venue, volume and year. Recorded as partial, not as a full read. |
| Mitchell 2009, "Complexity: A Guided Tour", ch 7 | https://publicism.info/science/complexity/8.html | Full chapter text. *"genome size is not a very good measure of complexity; our complexity must come from something deeper than our absolute number of base pairs or genes"*; Simon's *"the complex system being composed of subsystems that, in turn, have their own subsystems, and so on"*. |
| Wiesner and Ladyman, "Measuring complexity" | https://arxiv.org/html/1909.13243 | Full HTML. *"assigning a single number to complexity cannot do it justice"*; *"Counting alone does not tell us what counts as 'more' in the sense of 'more is different', because, when we consider emergent behaviour, how many is 'enough' depends on the system"*; and the conflict: *"Certainly, chaos and complexity are two distinct phenomena."* arXiv:1909.13243v2, 2020. |
| Kauffman, "Order for Free" | https://edge.org/conversation/stuart_a_kauffman-chapter-20-order-for-free | Full transcript. *"Chaos is a subset of complexity."*; *"Complex systems have evolved which may have learned to balance divergence and convergence, so that they're poised between chaos and order."* Edge, 1996, excerpted from *The Third Culture* (1995). |
| Wikipedia, "Complex system" | https://en.wikipedia.org/wiki/Complex_system | Full article. *"A great deal of system thinking, especially in social systems, assumes decomposability. Yet a truly decomposable system is not a complex system."*; Weaver's *"problems which involve dealing simultaneously with a sizable number of factors which are interrelated into an organic whole."* |
| NECSI, "About NECSI / About Complex Systems" | https://necsi.edu/about | Full page. *"Complex Systems is a new field of science discovering how parts of a system give rise to its collective behaviors, and how the system interacts with its environment."* |
| Complex Systems journal, "About" | https://www.complex-systems.com/about/ | Full page. Founded by Stephen Wolfram in 1987; *"The original journal devoted to the science, mathematics and engineering of systems with simple components but complex overall behavior."* |
| Complex Systems Society, "CCS" | https://www.cssociety.org/ccs/ | Full page. CCS is *"the most important annual meeting for the complex systems research community"*; society contact [institutional contact: see source URL]. |
| CCS 2026 call for abstracts | https://ccs26.cssociety.org/calls.html | Full page. Call explicitly includes *"Theoretical foundations of complex systems"* and *"Historical and philosophical aspects of complex systems"*. |
| PLOS Complex Systems submission guidelines | https://journals.plos.org/complexsystems/s/submission-guidelines | Full page. *"PLOS Complex Systems publishes research of broad significance that untangles the complex systems at the heart of the world we live in."* Public journal address [institutional contact: see source URL]. |
| TOCSS, About | https://tocss.cssociety.org/index.php/tocss/about | Full page. Official CSS journal, started 2026, *"online-only, diamond open-access and truly interdisciplinary"*, publishing *"high-quality research in complex systems, in any field of science"*. |
| Complexity Science Hub Vienna | https://csh.ac.at/ | Full page. Has an explicit "Foundations of Complex Systems" research topic and a public beginner's guide to complexity. |
| arXiv cond-mat.dis-nn recent | https://arxiv.org/list/cond-mat.dis-nn/recent | Full listing, 52 recent entries; a public opt-in route to the specialist readership. |
| Santa Fe Institute, "Engage with SFI" | https://santafe.edu/engage/ | Full page: lectures, courses, podcasts, public contact. The field definition quoted in `03` was read from the indexed text of https://www.santafe.edu/about/faq/; a direct fetch of that page returned only the site footer, so the FAQ quote is marked as index-derived in the ledger. |
| Tether figures folder | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repository; figures and formula for download. The canonical usage rule states the figures *"outrank everything else in the repo"*. |
| Eight essays (Isaiah N) | links in `05_what_shape_means.md` | All eight opened and read on 2026-11-22. High-overlap pool: same author as the figures, so their agreement is not independent corroboration. |

## Failed or partial fetches, recorded honestly

- `https://csc.ucdavis.edu/~cmg/Group/readings/SL-MeasOfComplexity.pdf`: PDF content type unsupported by the fetch tool. Partial quote from the search index only.
- `https://academic.oup.com/comnet/pages/About`: HTTP 403. Not used.
- `https://www.worldscientific.com/worldscinet/acs`: HTTP 403. Not used.
- `http://assets.press.princeton.edu/chapters/s9208.pdf`: not fetched as a PDF. Its search-index snippet ("lacks a single definition") was **not** used as a cited quote.
- `https://www.santafe.edu/about/faq/`: fetch returned the site footer; the definition was taken from that URL's indexed text and is marked as such.

## The wider literature, and what each predicts here

These are secondary corroboration only. The figures decide; the world does not overrule them.

1. **Physics / emergence (Anderson 1972).** Predicts that the behaviour of large aggregates is not recoverable from fundamental parts alone. Corroborates F1 and F2.
2. **Complexity measurement (Lloyd 2001, Mitchell 2009, Wiesner and Ladyman 2020).** Predicts that no single complexity scalar captures the phenomenon and that counting alone is insufficient. Corroborates F5 and F8. These three share a literature pool in places (Mitchell discusses Lloyd; Wiesner and Ladyman discuss the classic measures), so they are counted as a cluster, not three independent witnesses.
3. **Organismic biology (Kauffman 1996).** Predicts that chaos is a subset or companion of complexity and that complex systems balance divergence and convergence. Partly corroborates F4 (the compounding remainder) and conflicts with the draft that promoted chaos to the criterion. The conflict was resolved by re-census, not by ignoring it.
4. **Systems reference (Wikipedia, "Complex system").** Predicts that a purely decomposable system is not complex; near-decomposability, feedback and emergence are the markers. Corroborates F1 and F3 at low overlap with the framework.
5. **Institute definitions (NECSI, SFI).** Predict a residual stated exactly as this question states it: collective behaviour not understandable from parts in isolation. Corroborates the residual, not the verdict.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* A recording carried upward looks like knowledge and is a description of one occasion. Send the check list and the refuter; offer the architecture only after a verdict is recorded.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the source links.
- **Fig 2 :40** - *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*; Seat Map :163 - *"High correlation is disqualifying for a verdict and efficient for a convention."* No list selected for receptiveness.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) the question "what would you count as a failure here?"; (3) record their verdict on stage 1; (4) only then the links, with the note that the figures, not the summary, are the authority. A Track B style reply is a conversation and never corroboration.

## The two-stage offer

1. **Stage 1 (output).** Residual, shape, refuter. No theory shown. The recipient ranges the claim against a system they know.
2. **Stage 2 (opt-in theory).** If they are curious after recording a verdict, offer the figures link and the canonical article. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3 (method reuse).** The formula is a generator, so giving it away does not give away an answer. Each user writes their own refuter and states their own mode before running it.

Nothing here was hosted or sent by this agent. Hosting and sending are yours to do. Prefer an opt-in download or submission page over an attachment pushed to a list.
