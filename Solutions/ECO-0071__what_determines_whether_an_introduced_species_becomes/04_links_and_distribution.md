# Public links and distribution

All external links below were opened on 2026-11-23. Two returned a 403 to a direct fetch but their
full text was read through the search index in the same session; that limitation is recorded in
`10_source_ledger.csv` and is not hidden.

## Verified sources actually read

| what | URL | verified content |
|---|---|---|
| Canonical article (Substack) | https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether | "Arrival of the Fittest: The Tether Architecture", Aug 19 2026. All 13 figures, THE FORMULA, symbols and operators, citations tagged borrowed machinery, instance, parallel. Section "Three mappings offered and declined" declines the habitat-as-niche mapping. Section "A note on what is not cited" lists valence-relative-to-residual, introduction/exclusion asymmetry, isolation-as-substitution and capability-as-agent-and-habitat as uncredited claims, and says the capability and isolation claims have not been tested forward. |
| Hui, Pyšek and Richardson 2023 | https://www.nature.com/articles/s44185-023-00019-1 | npj Biodiversity 2, article 13. "Invasiveness is a function of an invader's traits conditioned upon the context of the recipient ecosystem, whereas invasibility is an emergent property of the ecosystem's abiotic and biotic environment." Three-pronged framework: traits, environmental context, propagule pressure. Open access. |
| Cassey et al. 2018 | https://pmc.ncbi.nlm.nih.gov/articles/PMC5933808 | PLoS Biology 16(4):e2005987. Meta-analysis of 56 studies. "We conclude that propagule pressure is indeed the most consistent and strongest determinant of alien species establishment." And: "only complete exclusion of an alien can guarantee no establishment." |
| Jolly, Shine and Greenlees 2015 | https://pmc.ncbi.nlm.nih.gov/articles/PMC4588653 | Ecology and Evolution 5(18):3879-3894. "Some invaders have catastrophic impacts, whereas others may benefit native taxa; some native taxa are more vulnerable than others." Cane toads in temperate Australia, direct and indirect pathways, 52 percent decrease in carrion removal. |
| The Library of Babel essay | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Oct 2 2026. "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." The question acts as the anchor. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Nov 19 2026. "Prestige must never be allowed to validate an action directly." And "the truly testable output would need to be derived from the real architecture or working the formula yourself." Grounds the simulated-derivation warning and the prestige rule. |
| Pettit, Ward-Fear and Shine 2021 | https://esajournals.onlinelibrary.wiley.com/doi/10.1002/ecs2.3488 | Ecosphere 12(5):e03488. Cane toads halve carrion removal rates; "The disruption from that mortality extends beyond the vulnerable species itself and ramifies through the ecological links between the impacted taxa and other components of the ecosystem." Direct fetch returned 403; full text read through search index. |
| Simberloff 2009 | https://www.annualreviews.org/content/journals/10.1146/annurev.ecolsys.110308.120304 | Annual Review of Ecology, Evolution, and Systematics 40:81-102. "increasing empirical and statistical evidence implicates propagule pressure, propagule sizes, propagule numbers, and temporal and spatial patterns of propagule arrival, as important in both facets of invasion." Direct fetch returned 403; abstract and citation read through search index. |
| USDA Forest Service overview 2023 | https://research.fs.usda.gov/download/treesearch/68450.pdf | "Biological invasions: An overview". "no single trait or trait syndrome seems to globally explain invasiveness"; "context dependence plays an important role in invasion outcomes". PDF fetch returned an unsupported content type; text read through search index. |

Local framework files used: `FRAMEWORK/reference/03-FIGURES_TEXT.md`,
`FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`.

## What in the wider literature bears on this question

1. **The invasiveness and invasibility split** (Hui et al. 2023; the USDA overview) is the closest
   independent frame to Fig 11 :39-40. It says the same structural thing in different vocabulary:
   the species' contribution is conditioned on the recipient system. Because it was reached from a
   different evidence pool, its agreement is weak corroboration rather than restatement. It does not
   establish the figure verdict.
2. **Propagule pressure** (Simberloff 2009; Cassey et al. 2018) bears on the seat's asymmetric power
   in Fig 11 :61-62. The finding that only complete exclusion guarantees no establishment is a
   striking independent echo of the asymmetry rule.
3. **Direct and indirect effects** (Pettit et al. 2021; Jolly et al. 2015) bear on Fig 11 :52. The
   multiply-stepped cascade is exactly what the figure's DDT and eagles example warns about, and the
   cane toad studies are a second, separately arrived-at case.
4. **Context dependence of impact** (Jolly et al. 2015) bears on Fig 11 :49-51: the same invader has
   different, even opposite, effects in different places and on different taxa.

None of these conflicts with the figure verdict. Under the framework's own rule, agreement from
overlapping pools is one witness; these ecology sources share a broad literature and are recorded
as high overlap in the ledger.

## Distribution: offer, do not push

- **Fig 4 :22** : *"Only methods cross up. Only head starts come down."* Sending the full framework
  before anyone has described a residual sends a recording, not a generator. Lead with the shape
  claim and its refuter; offer links after.
- **Fig 10 :42** : *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has
  absorbed the architecture before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** : *"describe it before you go looking, or any frame you pick will seem to fit."*
  Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40** : agreement from a shared evidence pool is worthless as corroboration. No bulk send
  selected for likely agreement.

**Recommended order in a reply:** (1) residual and shape claim, (2) the four refuters and the
question "what would you count as a failure?", (3) record their verdict, (4) only then the links,
with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1, before any theory.** Send the residual in effect terms, the shape claim and the
   pre-registered refuters. Fig 10 :52: *"Bring a characterised residual, never the source."* The
   specialist checks the output without holding the framework's interior.
2. **Stage 2, opt-in only.** If they are curious, offer the canonical article and the figure text.
   Their stage-1 verdict is already recorded, and later agreement is never pooled as corroboration
   (Fig 2 :40).
3. **Stage 3, method reuse.** Offer the formula as a generator, with the instruction that each user
   names their own ground, writes their own refuter before the run, and states the mode of the
   result. The canonical article warns that LLM outputs *"must be seen as simulacra"* and that
   solutions could be *"contrived to fit the formula."*

**Hard precondition:** stages 1-3 work only if the stage-1 output survives. The findings in
`01_figure_grounded_audit.md` are internally consistent with the figures, but they are not a field
test. Nothing in this folder should be presented as settled by measurement.

## Hosting and sending

No archive is created here and nothing is sent by this agent. Host the packet on an opt-in page if
you want a recipient to be able to decline contact. A download page with a clear refusal route is
closer to the framework's rules than an attachment pushed to a list.
