# Public links and distribution

All links marked fetched were opened on 2026-11-23. Links marked "linked from a fetched page" were seen there but not opened separately, and are labelled as such. Three fetch failures are recorded at the end and are not cited as read sources anywhere in this folder.

## 1. Verified links actually fetched

| what | URL | verified content |
|---|---|---|
| Canonical figure text (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | 13 figures plus Operators and Symbols tables with line numbers. All `Fig N :line` citations in this folder were checked against this file. |
| Canonical usage rule (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"They outrank everything else in the repo"*; *"a shape, not a name"*; *"Indiscernibility is not identity."* |
| Formula (local) | `FRAMEWORK/figures/THE_FORMULA.md` | Eight steps, mode rule, three guards, three distinct questions of step 7. |
| Figures repository | https://github.com/IsaiahN/tether/tree/general-agent/figures | Listed in the exemplar and in the framework README as the public figure set. The local canonical copies, not a re-fetch of the repository, are the authority used here. |
| NASA Ladder of Life Detection | https://astrobiology.nasa.gov/news/the-ladder-of-life-detection/ | Published ladder with rungs ordered by *"decreasing strength of evidence for life"* and *"increasing ease of measurement"*; columns for *"contamination-free likelihood of false positive"*, *"survivable likelihood of false negative"*, *"Compatible: Specificity to Earth life"*; bottom row *"Habitability: Liquid water, building blocks, energy source, gradients. Redox, temperature, pH, energy, disequilibria."* Cites Neveu et al. 2018, doi 10.1089/ast.2017.1773. |
| NASA Life Detection portal | https://astrobiology.nasa.gov/research/life-detection/ | Material is collected *"to stimulate and support discussions about how one would detect extant life beyond Earth"*; public Contribute Content route. |
| NASA Ask an Astrobiologist | https://astrobiology.nasa.gov/ask-an-astrobiologist/ | Monthly live public Q and A; the page includes a long FAQ with a section on life as we do not know it and a definition of life as *"a self-sustaining chemical system capable of Darwinian evolution."* |
| NASA Astrobiology Strategy | https://astrobiology.nasa.gov/about/astrobiology-strategy/ | Three basic questions, including *"How do we search for life in the Universe?"*; six research topics including *"Identifying, exploring, and characterizing environments for habitability and biosignatures."* |
| NASA Astrobiology Contact | https://astrobiology.nasa.gov/contact/ | Public contact form requiring human verification; no personal address used. |
| NASA ROSES funding page | https://science.nasa.gov/researchers/sara/grant-solicitations/ | *"Research Opportunities in Space and Earth Science (ROSES)"*; proposals through NSPIRES; dual-anonymous review expanded; several planetary programmes with no fixed due date. |
| NASA Europa Clipper | https://science.nasa.gov/mission/europa-clipper/ | Launched 14 October 2024; 49 flybys; objective *"Determine if Europa has conditions suitable to support life"*; nine instruments. |
| NASA Europa | https://science.nasa.gov/jupiter/jupiter-moons/europa/ | *"strong evidence Jupiter's moon Europa has a saltwater ocean that may be one of the best places to look for environments where life could exist beyond Earth."* |
| LPI Meetings | https://www.lpi.usra.edu/meetings/ | Meeting calendar, meeting portal and abstract routes; LPI describes five decades of organising conferences for the international scientific community. |
| Europlanet Society | https://www.europlanet.org/ | Public society site with a Transnational Access call, an Icy Moons Collection and the EPSC meeting series. |
| EPSC 2026 | https://www.epsc2026.eu/ | Public congress site with programme, contact and presenter guidelines; the 2026 meeting had concluded at access time. |
| International Journal of Astrobiology | https://www.cambridge.org/core/journals/international-journal-of-astrobiology | Gold open access peer-reviewed forum; scope includes *"life detection in our solar system and beyond"*; public submission system. |
| arXiv API, ocean worlds and life detection | http://export.arxiv.org/api/query?search_query=all:%22ocean%20worlds%22%20AND%20all:%22life%20detection%22 | Returned the Higgins et al. 2026 preprint abstract used as a world source. Abstracts were read through this API, not from a publisher PDF. |

## 2. Wider literature that bears on this question

These are the world sources used in `09_watson_answer.md`. Every one was opened, either as a full web page, an arXiv API abstract, or a journal/listing page. Author, venue, year, accessed date and a quote are in `10_source_ledger.csv`.

1. **Abiotic baseline and ocean worlds.** Higgins, Chen, Warr, Fifer, Kang, Cockell and Sherwood Lollar, 2026, arXiv:2605.15337. The paper states that identifying life requires *"clear and unambiguous biosignature signals above the existing abiotic baseline"* and that neglecting that baseline *"risks false negative life detection claims for both isotopic and chiral biosignatures."* It prescribes complementary geophysical observations (internal temperature, rheology, lithology, initial organic inventory, ocean transport timescales). This is the strongest single corroborator of F6 and F8, and it is a different evidence pool from the framework essays.
2. **Molecular assembly and construction history.** Rutter, Sharma, Seet, Alobo, Goto and Cronin, 2025, arXiv:2507.19057. An agnostic biosignature readable by mass spectrometry, chosen because it *"reflects the assembly of molecules with their bonds as building blocks, in contrast to approaches that discount construction history."* Corroborates the bond-and-lineage reading in Fig 12 :104. Also notes that *"even small instrumental inconsistencies can double model error"*, which corroborates Fig 10 :24 (*"the ground does not decay, the channel does"*).
3. **Bioessential elements.** Lingam and Loeb, 2018, Astronomical Journal 156(4):151, arXiv:1806.00018. Models phosphate and molybdenum scarcity; *"the putative biospheres might be oligotrophic, and perhaps harder to detect."* A budget filter, not a verdict (F9).
4. **Ocean pH from plume phosphates.** Glein and Truong, 2025, Icarus 441:116717, arXiv:2506.20937. *"The ratio of HPO4/PO4 species serves as a pH indicator"*; preferred estimate around pH 10.6. A measured habitat condition already returning something, so Fig 6 :34 is satisfied for this slot.
5. **H2 and episodic energy.** Oberg, Magnabosco and Tosca, 2026, Earth and Planetary Science Letters, arXiv:2606.16860. Tidal rock grinding can supply H2, which *"could serve as both an energy source for life and a driver of prebiotic organic chemistry"*; the mechanism may be episodic over millions of years. Corroborates the spendable-difference requirement and adds a time-dependence the figures alone do not supply.
6. **Subsurface habitability of icy exomoons.** Tjoa, Mueller and van der Tak, 2020, A&A 636:A50, arXiv:2003.09231. *"Icy moons in our Solar System, such as Europa and Enceladus, have already been shown to possess liquid water, a prerequisite for life on Earth."* Reproduces Enceladus' ocean and predicts other bodies; corroborates per-slot indexing and the finding that habitability is not fixed by stellar distance alone.
7. **Homochirality as an agnostic candidate.** Patty, Pommerol, Kuhn, Demory and Thomas, 2022, Astrobiology 22(9), arXiv:2207.08125. *"Homochirality is a generic and unique property of all biochemical life and is considered a universal and agnostic biosignature."* Corroborates the search for substrate-independent shapes while remaining a candidate, not a settlement.
8. **Polymerisation in cold icy environments.** Kimura and Kitadai, 2015, Astrobiology 15(6):430, arXiv:1506.06600. Polymerisation of amino acids and nucleotides *"could proceed spontaneously in the cold environment of icy moons"* under thermodynamic calculation; kinetics not addressed. Corroborates that the habitat list includes surface and shallow-ice chemistry, not only the deep ocean.
9. **Distinguishing biotic from abiotic amino acids.** Ramirez-Colon, Ni and Carr, 2026, arXiv:2602.18490. *"Distinguishing life from non-life based on AAs in a sample remains an unsolved problem"*; the LUMOS framework reports greater than 95 percent accuracy on compiled datasets. Direct corroboration of F6; the dataset result is not a ground settlement of an icy moon.
10. **Mission priority.** Moore, Spilker, Cable, Edgington, Hendrix, Hofstadter, Hurford, Mandt, McEwen, Paty, Quick, Rymer, Sayanagi and Schmidt, 2020, OPAG decadal white paper, arXiv:2003.11182. Endorses *"a life detection Ocean World mission, along with additional technological development for life detection."* A budget and priority input, never a witness.
11. **Framework essays (high overlap, weak corroboration).** Isaiah N, *The Hard Problem is About Source* (28 Aug 2026), *The Library of Babel: Locating The Book of Books* (2 Oct 2026), *The Recursive Self-Improvement Trap* (19 Nov 2026), all Adventures in Machine Learning. Opened this session. They supply the canonical reading of shape, source and simulation status in `05`, but they share the framework author's evidence pool completely, so their agreement with the figures is expected and carries no independent weight.

**Overlap declaration.** Sources 1, 2 and 9 are different evidence pools from the framework (geochemistry, mass spectrometry and machine learning, chemical statistics). Sources 4 and 5 are ocean-world geochemistry and share the Cassini plume dataset, so they are one witness for the Enceladus habitat, not two. Sources 3, 6 and 10 are astrobiology and planetary-science modelling, overlapping in the ocean-world literature. Sources 11 share the framework author. No world source conflicted with the figure verdict, so the conflict rule was not triggered.

## 3. Distribution rules: offer, do not push

- **Fig 10 :52**, *"Bring a characterised residual, never the source."* Lead with the split, the habitat shape and the refuter. Send the figure links only after a stage-1 verdict is recorded.
- **Fig 10 :42**, *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the entire framework before answering has joined the frame being checked. The verdict must be recorded before stage 2.
- **Fig 2 :45**, *"Frames range against the ground. They do not negotiate with it."* Ask what the recipient would count as a failure; do not negotiate agreement.
- **Fig 2 :31**, *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Do not pool later agreement from people who read the same material as corroboration.
- **Fig 4 :23**, *"upward: a method that can be reapplied. Never the recording of a particular success."* Stage 3 offers the formula as a generator, not the conclusion as a trophy.
- **Fig 9 :60**, *"Use filters for the budget and witnesses for the verdict."* A venue's prestige, a journal's impact factor and a conference's size are contact-cost or budget filters, never evidence that the claim is right.
- **Legal and practical.** Personal emails on public programme pages are deliberately not collected. Public opt-in channels and forms avoid both the structural failure (selected agreement) and the legal one (unsolicited bulk email rules). No bulk send, no automation, no misleading subject line, and an opt-out line in every one-to-one message.

## 4. The two-stage offer

1. **Stage 1:** send the residual, the union split, the shape claim and the five pre-registered refuters. Ask one question: what would you count as a failure? Record the answer before any framework material is shown.
2. **Stage 2, opt-in only:** if the recipient is curious, send the three links in `02_outreach_email.md`. State that the figures, not the summary, are the authority.
3. **Stage 3, optional and method-only:** offer the formula as a method to reuse, with the instruction that each user writes a refuter, names a ground and states a mode before running it.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. The existence half is explicitly a `gap` owned by the ground and the structure slot stays unbound, so the offer is a shape plus an instrument instruction, never a claim that a named moon is inhabited.

## 5. Fetch failures, recorded honestly

| URL attempted | result | handling |
|---|---|---|
| https://www.nature.com/articles/s41586-023-06252-9 | 200, but the DOI resolved to an unrelated single-cell genomics paper, so the guessed identifier was wrong | Not cited. Real Enceladus sources were located through the arXiv API instead. |
| https://journals.sagepub.com/doi/10.1089/ast.2017.1773 (Astrobiology journal via DOI) | HTTP 403 | The Ladder content was read from the NASA page that hosts the published version; the publisher page is not cited as read. |
| https://journals.sagepub.com/journals/ast (Astrobiology journal home via DOI redirect) | HTTP 403 | Not cited. The International Journal of Astrobiology journal page was fetched successfully and is used instead. |
| https://science.nasa.gov/astrobiology/research/life-detection/ | HTTP 404 | The working astrobiology.nasa.gov URL was used and fetched successfully. |
| https://www.esa.int/Science_Exploration/Space_Science/Juice | HTTP 404 | ESA JUICE is represented only by the arXiv instrument paper found through the arXiv API and by the Europlanet/EPSC venue pages; no failed page is cited. |

No source that failed to open was cited as evidence in any other file of this folder.
