# Public links and distribution

All links below were opened on 2026-11-23, either by direct fetch or, where the publisher returned 403 or served a PDF, through the search integration. The route is recorded per source and in `10_source_ledger.csv`. Nothing is cited from a page that was not opened.

## Verified sources actually opened

| what | URL | route and verified content |
|---|---|---|
| The Return to Protectionism (Fajgelbaum, Goldberg, Kennedy, Khandelwal) | https://www.nber.org/papers/w25638 | direct fetch. NBER WP 25638, March 2019, revised October 2019, published QJE 135(1) 2020. Abstract states complete pass-through, $51 billion (0.27% of GDP) losses to consumers and importing firms, $7.2 billion (0.04% of GDP) aggregate real income loss, and that tradeable-sector workers in heavily Republican counties were most negatively affected by retaliation. |
| The Impact of the 2018 Tariffs on Prices and Welfare (Amiti, Redding, Weinstein) | https://www.aeaweb.org/articles?id=10.1257%2Fjep.33.4.187 | direct fetch. JEP 33(4), Fall 2019, 187-210. Abstract states substantial price increases, dramatic changes to the supply-chain network, reduced variety, complete pass-through, and full incidence on domestic consumers and importers. |
| Disentangling the Effects of the 2018-2019 Tariffs (Flaaen and Pierce) | https://www.federalreserve.gov/econres/feds/files/2019086pap.pdf | PDF fetch unsupported; full text returned by search integration. FEDS 2019-086, December 2019; later Review of Economics and Statistics 108(5), 2026. Three channels: import protection, input costs, retaliation. Small positive protection effect more than offset by the other two. |
| Help for the Heartland? (Autor, Beck, Dorn, Hanson) | https://economics.mit.edu/sites/default/files/2024-01/Help%20for%20the%20Heartland%20-%20The%20Employment%20and%20Electoral%20Effects%20of%20the%20Trump%20Tariffs%20in%20the%20United%20States.pdf | PDF fetch unsupported; full text returned by search integration. January 2024. Import tariffs neither raised nor lowered employment in newly protected sectors; retaliatory tariffs had clear negative employment impacts, primarily in agriculture; subsidies only partly compensated. |
| Did the 2018 Trade War Improve Job Opportunities for US Workers? (Javorcik, Stapleton, Kett, O'Kane) | https://documents1.worldbank.org/curated/en/099421212012251677/pdf/IDU0500ae4fa0848304bab089c9089e7cdc8970e.pdf | PDF fetch unsupported; full text returned by search integration. World Bank PRWP 10249, 2022. No positive effect of import protection on job postings; input and retaliatory tariffs reduced postings, stronger for lower-skilled and part-time. |
| The Smoot-Hawley Trade War (Mitchener, Wandschneider, O'Rourke) | https://academic.oup.com/ej/article/132/647/2500/6519264 | direct fetch 403; full text and abstract returned by search integration. Economic Journal 132(647), 2022. US exports to retaliators fell 28-32%; retaliators' welfare gains from trade fell 8-16%. |
| Milestones: protectionism (Smoot-Hawley) | https://history.state.gov/milestones/1921-1936/protectionism | full text returned by search integration. US Office of the Historian. World trade declined by some 66% between 1929 and 1934; describes beggar-thy-neighbor policies. |
| The (non) effect of tariffs on manufacturing employment | https://cepr.org/voxeu/columns/non-effect-tariffs-manufacturing-employment | direct fetch 403; full text returned by search integration. CEPR VoxEU column summarising Flaaen-Pierce, Autor et al. 2024 and Javorcik et al. Key line: for every one job in steel production there are 80 jobs in industries that use steel. |
| Response diversity determines the resilience of ecosystems (Mori et al.) | https://onlinelibrary.wiley.com/doi/full/10.1111/brv.12004 | direct fetch 403; abstract returned by search integration. Biological Reviews 88(2), 2013, 349-364. Response diversity as a determinant of ecosystem resilience; functional redundancy and compensation. |
| Biodiversity as insurance: from concept to measurement and application (Loreau et al.) | https://onlinelibrary.wiley.com/doi/full/10.1111/brv.12756 | abstract and opening returned by search integration. Biological Reviews 96, 2021, 2333-2354. Insurance hypothesis: aggregate properties vary less in more diverse communities because declines in some performers are offset by others. |
| Recursive Self-Improvement Trap (essay) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | direct fetch. Isaiah N, 2026-11-19. Prestige is not action; LLM output is simulacra and the testable output must be derived from the architecture. |
| The Library of Babel: Locating the Book of Books (essay) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | direct fetch. Isaiah N, 2026-10-02. Shape of the answer, proximity bootstrapping, and the possibility that the question is a bundle of several problems. |
| The Hard Problem is About Source (essay) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | direct fetch. Isaiah N, 2026-08-28. Metamerism: a reading cannot comment on its source; a spectrometer, not an argument, resolved the case. |

Framework primaries were read locally: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`.

## Fetch failures, recorded honestly

- `direct.mit.edu` Review of Economics and Statistics article page: 403. Replaced by the Federal Reserve FEDS version of the same paper.
- `federalreserve.gov` FEDS PDF: unsupported content type on direct fetch. Read via search integration and marked accordingly.
- `economics.mit.edu` Autor et al. PDF and `documents1.worldbank.org` Javorcik et al. PDF: unsupported content type. Read via search integration.
- `academic.oup.com` Economic Journal, `cepr.org` VoxEU, `onlinelibrary.wiley.com` Biological Reviews: 403 on direct fetch. Content read via search integration; only text actually returned was quoted.
- `worldbank.org/en/research/working-papers`, `aeaweb.org/journals/jep/information-for-authors`, `piie.com/about/contact-us`: 404. Replaced by the verified document URL, the verified journal article page, and the WTO and NBER public pages respectively.

## Wider literature that bears on the question

1. **Three-channel decomposition is the per-slot residual made measurable.** Flaaen and Pierce, Autor et al. 2024 and Javorcik et al. use different data and identify the same three channels, import protection, input costs and retaliation. Their convergence is one evidence pool (shared 2018 tariff episodes and methods), not three independent witnesses. It corroborates F1 and F2 at the shape level: the residual must be split before it is summed.
2. **Pass-through is a source-discrimination result.** Amiti et al. and Fajgelbaum et al. both establish that tariffs were passed into domestic prices rather than absorbed by foreign exporters. *The Hard Problem is About Source* predicts exactly this hazard: a headline reading (import price) cannot comment on its source until a discriminator is built. The customs unit-value instrument is that discriminator.
3. **The long loop is a real historical cycle.** The Smoot-Hawley record corroborates Fig 12 :121 at low overlap with contemporary trade econometrics, because it is economic history rather than the same 2018 data.
4. **Resilience is a network property, not a price property.** Mori et al. and Loreau et al. (ecology) are the genuinely low-overlap witnesses. They support the shape claim that resilience lives in response diversity across a network, which is what Fig 13's network atom and Fig 11's cascade law predict. They do not bear on any specific tariff coefficient and are not used as such.

## Distribution: offer, do not push

- Fig 10 :52 — *"Bring a characterised residual, never the source."* Lead with the per-slot separator and its four refuters. The reader checks the output without holding the framework interior.
- Fig 2 :35 — *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not ask for a position on tariffs.
- Fig 9 :27-28 — *"describe it before you go looking, or any frame you pick will seem to fit"*. Ask what the reader would expect to see in each of the five slots before giving them the links.
- Fig 2 :42 — *"Buy independence in proportion to the cost of being wrong."* One-to-one only. A bulk send to a list selected for agreement purchases a convention, not a check.
- Fig 4 :22 — *"Only methods cross up. Only head starts come down."* Stage 3 offers the formula as a method, never as a verdict.

**Recommended order in a reply:** (1) the per-slot separator and its refuter; (2) ask what the reader would count as a failure in each slot; (3) record their verdict before showing any framework material; (4) only then, if curious, the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1.** The output: a union of five slots, a currency and a non-updating anchor per slot, per-slot verdicts kept separate, and a declared gap for the universal aggregate. The reader's verdict is recorded here.

**Stage 2, opt-in only.** Offer the figures and the derivation. A reader who has absorbed the framework before giving a stage-1 verdict has joined the frame being checked, so their later agreement is never pooled as corroboration (Fig 2 :40 — *"agreement about the world is worthless when the agreeing frames share an evidence pool"*).

**Stage 3.** Offer the formula as a generator to reuse on another trade question, with the instruction that each user names a ground and writes a refuter before running it.

**Hard precondition.** Stages 1 to 3 only work if the stage-1 output survives. `01_figure_grounded_audit.md` records the refuter conditions; if one fires, the separator is retracted rather than defended.
