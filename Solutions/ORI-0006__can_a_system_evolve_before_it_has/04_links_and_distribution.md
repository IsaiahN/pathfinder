# Public links and distribution

All links below were fetched on 2026-11-23 unless marked otherwise. Two direct fetches were blocked and are recorded honestly rather than hidden.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Evolution before genes | https://pmc.ncbi.nlm.nih.gov/articles/PMC3284417 | Vasas, Fernando, Santos, Kauffman and Szathmáry, Biology Direct 2012. Open access, full text read. Argues that selection can accumulate adaptations in compartmentalized chemical reaction networks before genetic templates, and explicitly declines autocatalytic sets *per se* as units of evolution. |
| Evolution at the Origins of Life? | https://pmc.ncbi.nlm.nih.gov/articles/PMC10890241 | Schoenmakers, Reydon and Kirschning, Life 2024, DOI 10.3390/life14020175. Open access, full text read. Reviews Lewontin's three conditions, Godfrey-Smith on imperfect inheritance, and the Major Evolutionary Transitions objection that prebiotic chemistry is not evolution proper. |
| Quasispecies model | https://en.wikipedia.org/wiki/Quasispecies_model | Eigen and Schuster's model, page fetched. States that selection acts on mutational clouds rather than single sequences at high mutation rates, and gives the four formal assumptions. |
| Outcome bias | https://en.wikipedia.org/wiki/Outcome_bias | Page fetched. Defines the error of evaluating a decision by its known outcome rather than by its quality at the time, with Baron and Hershey 1988 and Gino et al. 2009. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, Substack, 2026-11-19, full text fetched. Contains "Natural selection is what the loop looks like when there is no one maintaining the ground" and the prestige/action separation. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, Substack, 2026-10-02, full text fetched. Contains the general-shape stopping rule and the warning about a bundle of problems masquerading as one. |
| ISSOL | https://issol.org/ | Society landing page fetched. Public contact, meetings, seminars and journal links; 500-plus members in 20-plus countries. |
| Discover Life | https://link.springer.com/journal/11084 | Journal page fetched. Formerly Origins of Life and Evolution of Biospheres; open access; online submission route. |
| Biology Direct | https://biologydirect.biomedcentral.com/ | Journal page fetched. Open access; online submission route. |
| bioRxiv | https://www.biorxiv.org/ | Landing page and subject areas fetched. Evolutionary Biology is a listed area. |
| Gordon Research Conference, Origins of Life | https://www.grc.org/origins-of-life-conference/ | Page fetched. Status Inactive, last held 2020. Mapping aid only, not a submission venue. |

## Fetch failures, recorded

- `https://academic.oup.com/evolut/article/78/1/1/7334978` (the eco-evolutionary origins of life review) returned HTTP 403 on direct fetch. Its abstract and the Lewontin-conditions passage were read through the search integration, with reduced weight, and the row in `10_source_ledger.csv` says so. No full text is claimed.
- `https://www.mdpi.com/journal/life` returned HTTP 403 on direct fetch. The article itself was read in full via PMC (`PMC10890241`), so the quote is verified; only the journal submission page is unverified.

## Two findings that bear directly on this question

1. **Vasas et al. 2012 decline the easy answer.** The paper is titled "Evolution before genes", but it first destroys the naive version: autocatalytic sets *by themselves* do not evolve, because inhibition produces multiple attractors that cannot be selected for. Selection becomes possible only with many viable cores, compartmentalization, and loss of cores at division. This is a **discriminator**, not a yes: it tells us what would have to be present for the shape claim to be true, and it supplies a concrete version of refuter R2 in `01_figure_grounded_audit.md`. Do not present it as "RNA-first is disproved" or as "chemistry evolves automatically."
2. **Schoenmakers et al. 2024 contain both the corroboration and the conflict.** They report Lewontin's schema as substrate neutral: "it does not presuppose any specific material substrate or any specific mechanism in which the principle is implemented." They also report the Major Evolutionary Transitions view that prebiotic chemistry "would not be seen as evolution proper" without unlimited hereditary replicators. The first corroborates the process verdict; the second is a definition dispute and is assigned to Domain D by re-census. Cite both or neither. Quoting only the first would manufacture agreement.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22:** "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described the residual sends a recording, not a generator. Lead with the residual and the refuter.
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40:** "agreement about the world is worthless when the agreeing frames share an evidence pool." A list selected for people who already agree produces a convention, not corroboration.
- **RSI Trap essay:** "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." The ask gives the claim a budget to be tried; it does not ask for endorsement.

**Recommended order in a reply:** (1) the residual, the three domain verdicts and R1 to R5; (2) ask what they would count as a failure, and record the answer; (3) only then the links, with the note that the figures, not the summary, are the authority; (4) optionally, offer the formula as a method for them to reuse with their own refuter.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52, "Bring a characterised residual, never the source", and Fig 2 :45, "Frames range against the ground. They do not negotiate with it." The recipient checks the shape without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Their verdict on stage 1 must be recorded *before* any theory is shown, and later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method, which is permitted** (Fig 4 :22). The formula is a generator, so giving it away does not give away an answer. Each user still needs a ground and a written refuter per problem, because a loop "cannot check the direction of its own question" (`THE_FORMULA.md`, Direction).

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The three domain verdicts are kept separate and the carrier is not named. If a recipient fires R1, R2 or R5, stop and retract the affected verdict before any stage-2 contact.
