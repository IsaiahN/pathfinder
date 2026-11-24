# Public links and distribution

All links below were opened on 2026-11-23 unless a row says otherwise. Where a direct fetch failed, the row says so and the quoted content came from the public search index or an open-access mirror. Nothing is quoted from a page that was neither opened nor returned by the search integration.

## Verified sources actually read

| what | URL | verified content |
|---|---|---|
| Autocatalytic chemical networks at the origin of metabolism (Xavier, Hordijk, Kauffman, Steel and Martin, Proc R Soc B 2020) | https://pmc.ncbi.nlm.nih.gov/articles/PMC7126077 | Open-access full text read. *"RAFs are consistent with an autotrophic origin of metabolism and furthermore indicate that autocatalytic chemical networks preceded proteins and RNA in evolution."* Also: *"Our results indicate that RNA monomers can readily arise from autocatalytic networks, though the converse is not true"*, and the paper names *"two deeply divided schools of thought concerning the nature of chemical reactions at the origin of life: genetics first and metabolism first."* |
| Evolution of the first metabolic cycles (Wächtershäuser, PNAS 1990) | https://pmc.ncbi.nlm.nih.gov/articles/PMC53229 | Full abstract read. *"this process is an autocatalytic cycle that can be retrodictively constructed from the extant reductive citric acid cycle"* and *"The cycle is catalytic for pyrite formation and autocatalytic for its own multiplication."* |
| On the origin of biochemistry at an alkaline hydrothermal vent (Martin and Russell, Phil Trans R Soc B 2007) | https://pmc.ncbi.nlm.nih.gov/articles/PMC2442388 | Full text read. *"acetyl phosphate possibly serving as the universal metabolic energy currency prior to the origin of genes"* and *"the ability to harness a naturally pre-existing proton gradient at the vent–ocean interface via an ATPase is older than the ability to generate a proton gradient with chemistry that is specified by genes."* |
| Statistical physics of self-replication (England, J Chem Phys 2013) | https://pubs.aip.org/aip/jcp/article/139/12/121923/74793 | Full article page and open PDF excerpt read. *"Self-replication is a capacity common to every species of living thing, and simple physical intuition dictates that such a process must invariably be fueled by the production of entropy."* The bound depends on growth rate, internal entropy and durability of the replicator. |
| Statistical Physics of Adaptation (Perunov, Marsland and England, Phys Rev X 2016) | https://journals.aps.org/prx/abstract/10.1103/PhysRevX.6.021036 | Abstract read. *"a system devoid of any recognizable self-replicator might still end up seeming 'well adapted' to environmental drives in light of the marks on its current configuration left by its exceptional dissipative history."* |
| Autocatalytic networks in cognition and the origin of culture (Gabora and Steel, J Theor Biol 2017) | https://arxiv.org/html/1703.05917v3 | Full text read. *"Our formal model extends the theory of autocatalytic biochemical networks developed in origin-of-life research."* Mental representations play the role of molecules. Genuinely low-overlap field. |
| Self-generating autocatalytic networks (Huson, Xavier and Steel, J R Soc Interface 2024) | https://pmc.ncbi.nlm.nih.gov/articles/PMC11286130 | Full text read. RAF theory has been applied *"to cognitive modelling in cultural evolution, ecology and economics"*; the generality of RAF theory means a reaction need not be chemical. |
| The Hard Problem is About Source (Isaiah N, 2026) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Full essay read. *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"The answer is unreached until a better instrument exists."* |
| The Library of Babel: Locating The Book of Books (Isaiah N, 2026) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Full essay read. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question"* and the warning that a problem may be *"a bundle or conflation of several problems masquerading as one."* |
| ISSOL society homepage | https://issol.org/ | Verified: public meetings, seminars, membership and award routes; OLEB successor under discussion. |
| Discover Life journal homepage (formerly OLEB) | https://link.springer.com/journal/11084 | Verified: open-access journal, submission route, APC and former OLEB status. |
| arXiv q-bio.MN recent listings | https://arxiv.org/list/q-bio.MN/recent | Verified: public listing and submission route. |
| Nature Portfolio, chemical origin of life | https://www.nature.com/subjects/origin-of-life | Verified: current 2026 papers on both RNA-world timing and abiotic metabolite assembly; the debate is live. |

## Fetch failures and reduced-weight sources, recorded honestly

- `https://royalsocietypublishing.org/rspb/article/287/1922/20192377/...` returned 403 on direct fetch. The paper was read in full via the PMC mirror above; the abstract was also returned by the public search index. One paper, one witness.
- `https://www.mdpi.com/2075-1729/8/4/62` (Hordijk, *Autocatalytic Networks at the Basis of Life's Origin and Organization*, Life 2018) returned 403. Substantial excerpts were returned by the public search index, including the formal RAF definition and the statement that autocatalytic sets are *"a necessary (although not sufficient) condition for life-like behavior."* Marked as search-indexed in `10_source_ledger.csv`, reduced weight.
- `https://www.mdpi.com/2075-1729/11/8/777` (Altair et al., experimental alkaline-vent approaches, Life 2021) returned 403. Its abstract was returned by the search index and a related PMC record was read.
- `https://pubmed.ncbi.nlm.nih.gov/18393692` (quantitative critique of the iron-sulfur world) returned a cookie gate on direct fetch. The abstract was returned by the public search index and is used as a genuine conflict: *"it is apparent that the iron-sulfur scheme could not have played a role in life's beginnings."* This is a conflict with one metabolism-first instantiation, not with the figure verdict, and is handled as such in `09_watson_answer.md`.
- `https://journals.sagepub.com/journals/ast` returned 403 and a redirect. Used only as a venue note in `03_public_contact_points.csv`, not as evidence.
- `https://astrobiology.nasa.gov/` returned 502. Not used as a source or a venue.
- `https://link.springer.com/journal/11014` (old OLEB number) returned 404. The journal is now at 11084, verified above.

## What the wider literature bears on the question

1. **The structural claim is real chemistry, not a metaphor.** Reflexively autocatalytic food-generated networks (RAFs) are defined by two conditions: each reaction is catalyzed by a molecule produced by the network or present in the food set, and all reactants are generated from that food set by the network itself. That is a precise version of F3, a cycle whose catalysts survive their own use. Xavier et al. found that *"amino acids and bases without organic catalysts do not generate metabolic RAFs"*, which is a per-condition result, not a global yes.
2. **The direction claim supports the dependency order, with a limit.** Xavier et al. report the asymmetry: monomers arise from the network, but adding amino acids and bases to the simplest food set yields only a minute 33-reaction maxRAF. Martin and Russell independently argue that harnessing a pre-existing proton gradient is older than generating one with gene-specified chemistry. These corroborate the order D2 then D1 then D4. They do not settle the historical date, and both are retrodictions from modern metabolism, which Fig 10 :52 would call recordings rather than generators.
3. **The physics is about dissipation, not about a name.** England's bound and Perunov et al.'s adaptation result make a template-free, energy-harvesting, persistently rearranging system physically expectable. They corroborate Fig 13 :46 (a spendable gradient) and Fig 11 :36 (selection without a maintainer). They do not say which chemical network won.
4. **There is real conflict inside the metabolism-first family.** The quantitative critique of the iron-sulfur world says the scheme could not have worked at the required catalytic proficiency. A 2026 PNAS paper re-examines alkaline vent hypotheses and questions whether strong pH gradients existed at hydrothermal temperatures. These are returned to the census as constraints on particular instantiations (D2, D3); they do not flip the union verdict.
5. **Low-overlap corroboration of the mechanism shape.** RAF theory has been carried into cognition, ecology and economics. The Gabora and Steel cognitive model and the Huson, Xavier and Steel methods paper show the same structure, catalysts that are not consumed, a food set, a closure, recurring under very different actors and currencies. That is what Fig 4 :20 predicts: *"Only the actors, the currency and the anchor change."* It is corroboration of the shape, not of the historical origin-of-life fact.
6. **The field is not converged.** The Nature subject index for 2026 contains both a Hadean timeline for an RNA world and a functional abiotic metabolite assembly hypothesis in which amino acids and nucleobases precede peptides and RNA. Agreement in either camp is one evidence pool talking (Fig 2 :40).

## Distribution: offer, do not push

Figure-grounded rules:

- **Fig 10 :52** - *"Bring a characterised residual, never the source."* Send the shape and its refuter first. A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 2 :45** - *"Frames range against the ground. They do not negotiate with it."* Ask what they would expect to see if the shape were true, before giving them the articles.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* The residual is described in effect terms in the email, not in framework vocabulary.
- **Fig 2 :42** - *"Buy independence in proportion to the cost of being wrong."* A checker from mathematics, ecology or cognition is worth more than another agreeable reader in the same pool.
- **Fig 7 :35** - *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Do not pool later agreement as corroboration.
- **Fig 9 :60** - *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A citation count or a venue's prestige is a budget filter only.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure and which of the four conditions they would test; (3) record that verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1:** the residual, the shape and the pre-registered refuter. No theory, no links, no request for trust or agreement.
- **Stage 2, opt in only:** if they are curious after recording a verdict, offer the three source links. Their stage-1 verdict is never retroactively pooled with later agreement (Fig 2 :40).
- **Stage 3:** offer the formula as a method to reuse. Fig 4 :22 - *"Only methods cross up. Only head starts come down."* Each user must state their own ground and write their own refuter before running it, because a frame cannot check the direction of its own question (`THE_FORMULA.md`, "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. If a checker fires one of the four refuters, the shape is narrowed or withdrawn before anything else is sent.
