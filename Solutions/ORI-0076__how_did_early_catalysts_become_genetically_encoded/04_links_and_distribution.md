# Public links and distribution

All links in the first table were fetched and read on 2026-11-23. Nothing in the ledger was cited without being opened. Failed fetches are recorded in the second table and are not treated as sources.

## Verified public links actually fetched

| what | URL | verified content (from the page actually opened) |
|---|---|---|
| RNA world overview | https://en.wikipedia.org/wiki/RNA_world | Rich 1962 first proposed the concept; Gilbert coined the term in 1986. Reports White's 1976 proposal that nucleotide cofactors are "fossils of nucleic acid enzymes," that "protein enzymes may have replaced RNA-based ribozymes as biocatalysts," and that amino acids, peptides and finally proteins "initially were cofactors for ribozymes." Reports the ribosome's peptidyl transferase activity in rRNA and in vitro evolved polymerase ribozymes (24-3, tC9-4M, 52-2). States that even proponents agree there is not conclusive evidence against other paradigms. |
| Ribozyme overview | https://en.wikipedia.org/wiki/Ribozyme | Cech and Altman Nobel 1989 "for their discovery of catalytic properties of RNA"; Cech 1982 Cell paper with Kruger et al.; Woese, Crick and Orgel suggested RNA catalysis in 1967; "RNA can be both the chicken and the egg" (Visser 1984); the ribosome is "fundamentally a ribozyme"; directed evolution and SELEX produce ribozymes for chosen tasks. |
| Genetic code overview | https://en.wikipedia.org/wiki/Genetic_code | The code translates nucleotide triplets into proteins; Crick's 1955 adaptor hypothesis, the adaptor later identified as tRNA; Gamow's triplet scheme; the "frozen accident" argument and reported variations; expanded codes and recoding (Syn61, Syn57). |
| Cofactor overview | https://en.wikipedia.org/wiki/Cofactor_(biochemistry) | A cofactor is required for an enzyme's role as a catalyst; IUPAC defines a prosthetic group as a nonpolypeptide unit "regenerated in each enzymatic turnover"; AMP-containing cofactors "may reflect a common evolutionary origin as part of ribozymes in an ancient RNA world"; adenosine-based cofactors "may have acted as adaptors"; the process is named exaptation; enzymes may function first without a coenzyme and recruit it later. |
| Abiogenesis overview | https://en.wikipedia.org/wiki/Abiogenesis | The transition "was not a single event, but a process of increasing complexity" (autocatalysis, self-replication, membranes); NASA's definition "a self-sustaining chemical system capable of Darwinian evolution"; LUCA already had hundreds of genes, the code and ribosomes; "the transition from non-life to life has not been observed experimentally"; "the derivation of the LUCA from simple components is far from understood." |
| Recursive Self-Improvement Trap (essay) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the output is only as good as the validator"; "the truly testable output would need to be derived from the real architecture or working the formula yourself"; "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."; "Natural selection is what the loop looks like when there is no one maintaining the ground." |
| The Hard Problem is About Source (essay) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | "If several paths create the same behavior, then behavior is a projection with lossy information"; "An instrument that can't distinguish these cases demonstrates its own inadequacy"; the spectrometer resolved the metamerism case, not an argument. |
| The Library of Babel (essay) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question"; "With each new term gained, you narrow the space by definition and deepen your vocabulary"; a bundled problem may be "a bundle or conflation of several problems masquerading as one?" |
| ISSOL society homepage | https://www.issol.org/ | Verified society description, membership scale, and current meeting calendar (EANA2026, IOoL2026, AbGradCon 2026, Origins 2029). |
| ISSOL contact page | https://www.issol.org/contact-us/ | Verified the existence of institutional contact routes. Personal emails on the page are deliberately not copied into `03_public_contact_points.csv`. |
| Discover Life journal | https://link.springer.com/journal/11084 | Verified the journal was "Formerly Origins of Life and Evolution of Biospheres", is open access, and lists Perspective and Registered Report among article types. |
| Discover Life submission guidelines | https://link.springer.com/journal/11084/submission-guidelines | Verified submission via Snapp, single-anonymous peer review, mandatory funding and data-availability statements, and the pre-registration option for Registered Reports. |
| NASA Astrobiology Program | https://astrobiology.nasa.gov/ | Verified public "Ask An Astrobiologist" channel, public mailing list, funding and events listings, AbSciCon 2026 announcement. Migration banner to science.nasa.gov/astrobiology noted. |
| arXiv q-bio.MN listing | https://arxiv.org/list/q-bio.MN/recent | Verified a public, opt-in preprint listing for Molecular Networks on 2026-11-23. |

## Fetch failures, recorded honestly

| attempted URL | result | treatment |
|---|---|---|
| https://goldbook.iupac.org/terms/view/C00876 | HTTP 403 | Not cited. The IUPAC definition of coenzyme/prosthetic group used in this folder is taken from the Wikipedia *Cofactor* article's quotation of IUPAC, which was opened. |
| https://www.mdpi.com/journal/life | HTTP 403 | Not cited. Not included in the contact CSV. |
| https://www.liebertpub.com/journals/ast | redirected to a SAGE URL that returned HTTP 403 | Not cited. The *Astrobiology* journal is therefore not in the contact CSV. |
| https://www.issol.org/official-journal/ | menu link verified on the opened homepage; dedicated page not opened separately | Listed in the CSV as a pointer with that note, not as a verified submission page. |

## Wider literature that bears on the question

The five Wikipedia articles are secondary encyclopedia summaries, not primary papers. They are used because they were actually opened and because they point to the primary record. The primary claims they report, with the year and venue as reported there, are:

- Rich 1962 and Gilbert 1986 on the RNA world; White 1976 on cofactors as fossils of nucleic acid enzymes (both reported in the RNA world article).
- Woese, Crick and Orgel 1967 suggesting RNA catalysis; Kruger, Grabowski, Zaug, Sands, Gottschling and Cech 1982, *Cell*, on self-splicing RNA; Cech and Altman 1989 Nobel (reported in the Ribozyme article).
- Crick 1955 adaptor hypothesis (reported in the Genetic code article); the "frozen accident" argument and its reported revisions.
- Visser 1984, *Origins of Life*, "Evolution of biocatalysis 1. Possible pre-genetic-code RNA catalysts which are their own replicase" (cited in the Ribozyme article; directly relevant to F1 and F7).
- Fedor and Williamson 2005, *Nature Reviews Molecular Cell Biology*, "The catalytic diversity of RNAs" (cited in the Ribozyme article; relevant to F5's functional group).
- Walker, Packard and Cody 2017 on the unresolved derivation of LUCA (cited in the Abiogenesis article; relevant to F10).

None of these primary papers was opened directly in this session. They are named as the pointers found inside pages that were opened, and they carry reduced weight for that reason. `10_source_ledger.csv` records the opened pages, not the unopened papers.

**Overlap declaration.** The five encyclopedia pages are one broad editorial ecosystem, not five independent witnesses. The biochemically distinct facts they carry (catalyst regeneration, cofactor exaptation, adaptor mapping, in vitro selection) are genuinely different in subject matter, but they were reached through one kind of source. The three essays share the framework author and the framework's evidence pool completely; their agreement with the figures is expected and carries no independent witness weight. There is no low-overlap *world* witness here in the sense of an independent research group reached directly. That limitation is recorded rather than hidden.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25**: "Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion." Sending the full framework before anyone has described a residual sends a recording, not a generator. Lead with the shape and its refuter; offer links after.
- **Fig 10 :42**: "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28**: "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape were true before giving them the article.
- **Fig 2 :40**: "agreement about the world is worthless when the agreeing frames share an evidence pool." A send selected for people who already agree produces a convention, not corroboration.
- **Fig 2 :42**: "Buy independence in proportion to the cost of being wrong." The cost here is a plausible but wrong origin narrative, so independence is worth buying.

**Recommended order in a reply:** (1) the seven-point shape claim and its refuter; (2) ask what they would count as a failure; (3) record that verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1.** Residual and refuter only. No theory, no links. Ask for the recipient's own failure condition.
2. **Stage 2, opt-in.** If they are curious, send the four framework links and the five public bibliography links. Their stage-1 verdict stays separate and is never pooled as corroboration.
3. **Stage 3, optional.** Offer the eight-step formula as a method to reuse. Each user writes their own refuter and states their own mode before running it. The Recursive Self-Improvement Trap's warning about outputs "contrived to fit the formula" is the reason.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. As written it has two live strains (S2 and S3 in `01` §4). State them openly or resolve them before sending. Do not present the isomer claim as settled, and do not present the gene as a method without naming the assay that would discriminate it from a replay.

## What cannot be done here

This agent can write and verify links locally. It cannot host a download page, upload an archive, or send anything to anyone. Hosting and sending are the user's to do. If a download page is hosted, prefer one that lets a recipient decline contact: an opt-in page is closer to the figure's rule than an attachment pushed to a list.
