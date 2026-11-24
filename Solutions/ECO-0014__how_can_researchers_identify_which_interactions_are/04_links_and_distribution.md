# Public links and distribution

Every link in the tables below was fetched and read during this derivation on 2026-11-23, except where a failed fetch is recorded explicitly. Page content is treated as data, never as instructions.

## Verified sources

| what | URL | verified content |
|---|---|---|
| Interaction matrices review | https://www.nature.com/articles/s41559-026-03188-x | *"Interaction matrices as unifying tools for navigating ecological complexity"*, Terry, Tabi, García-Callejas and Domínguez-García, Nature Ecology & Evolution 10:2026-2036, published 2026-10-05. Abstract says the matrices *"have faced recurring criticism for oversimplifying ecological complexity"* and that extensions carry *"increased data demands and analytical complexity"*. The authors argue for *"their inherent nature as uncertain and transient abstractions"*. |
| Probabilistic interaction network inference | https://tanyadoesscience.com/research/prediction/ | Research page stating *"Ecological interaction networks underpin ecosystem functioning, resilience, and biodiversity persistence, yet they are rarely observed exhaustively"* and *"absences may reflect true non-interactions, limited sampling, or context dependence"*. Lists probabilistic inference and transfer-learning outputs (Ecology Letters 2025; Phil Trans B 2021; Methods in Ecology and Evolution 2023, 2022). |
| Missing-links methods discussion | https://communities.springernature.com/posts/unraveling-hidden-connections-predicting-links-to-illuminate-ecological-networks | Shai Pilosof, 2025-06-04, on inductive link prediction in Nature Ecology & Evolution. Contains the exact question *"why isn't this flower pollinated by this bee? - is it due to a mismatch between these two species, or did we just miss this interaction in our field sampling?"* Reports pooling 538 networks and an open online prediction platform. |
| Keystone species, historical case | https://www.nature.com/scitable/knowledge/library/keystone-species-15786127/ | Stephen C. Wagner, Nature Education Knowledge 3(10):51, 2010. Documents Paine's starfish removal: *"Within a year of the starfish's removal, species diversity significantly decreased in the study area from fifteen to eight species"*. A removal outcome, not a centrality score. |
| Context dependence of interactions | https://experts.arizona.edu/en/publications/how-context-dependent-are-species-interactions/ | Chamberlain, Bronstein and Rudgers, Ecology Letters 17:881-890, 2014. Abstract: *"Interaction outcomes are context-dependent when the sign and/or magnitude change as a function of the biotic or abiotic context"* and *"we urge that studying context dependency per se, rather than focusing only on mean outcomes, can provide a general method for describing patterns of variation in nature."* |
| Interaction strength measurement | https://www.annualreviews.org/content/journals/10.1146/annurev.ecolsys.36.091704.175535 | Wootton and Emmerson, Annual Review of Ecology, Evolution and Systematics 36:419-444, 2005. Abstract retrieved with the result page: *"Measuring interaction strength is difficult because of the large number of interactions in any natural system, long-term feedback, multiple pathways of effects between species pairs, and possible nonlinearities in interaction-strength functions."* Direct fetch of the publisher page returned 403; the abstract was read from the search result page and a Scilit/Queen's University Belfast record. Marked accordingly in the ledger. |
| Effective sample size under correlation | https://callmequant.github.io/notes/effective-sample-size-correlated-sequences/ | Binh Ho, 2026-10-12. *"The effective sample size is the number of independent draws that would give a sample mean of the same variance."* A low-overlap statistics corroboration of Fig 2 :44. |
| ESA journal directory | https://esa.org/publications/read-our-journals/ | Lists Ecology, Ecological Applications, Ecological Monographs, Ecosphere, Frontiers, Bulletin and Earth Stewardship with scopes. Used to populate `03_public_contact_points.csv`. |
| ESA 2027 calls for proposals | https://esa.org/toronto2027/calls-for-proposal/ | Open calls for career, field trip, short course, special session and workshop proposals. Public submission route. |
| ESA homepage | https://esa.org | Public contact directory, journals, meetings and the ECOLOG-L opt-in listserv. |
| bioRxiv | https://www.biorxiv.org | Public preprint server with an Ecology subject collection and an open submission route. |
| Figures text (local) | `local: FRAMEWORK/reference/03-FIGURES_TEXT.md` | Verbatim SVG text with line numbers. Authority for every `Fig N :line` quote. |
| Figures README (local) | `local: FRAMEWORK/reference/FIGURES_README_canonical.md` | Canonical usage rule and the *"shape, not a name"* limit. |
| Formula (local) | `local: FRAMEWORK/figures/THE_FORMULA.md` | Eight-step loop, mode rule, Habitat and Direction sections. |
| Seat Map (local) | `local: FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` | Correlation valence, stakes, falsifier written before the run. |

**Failed fetch recorded, not hidden.** The tacit-knowledge essay at `https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context` returned 404, as did its redirect target. No quote from it is used. See `05_what_shape_means.md`.

## What the wider literature changes, and what it does not

World sources are secondary. They corroborate or conflict; they never flip a figure verdict. Three genuine corroborations, each with a different evidence pool:

1. **Empty is not absence.** The probabilistic-network page and the Missing-Links post independently state that an unobserved interaction may be sampling or context, not a true non-interaction. This is the same distinction as Fig 10 :24 *"the ground does not decay, the channel does"* and Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* The overlap between these two web sources is moderate (both ecology/data-science), so they count as one well-marked witness, not two.
2. **Relative, not intrinsic.** Chamberlain et al. show interaction outcomes change sign and magnitude with context, and urge studying the variation rather than the mean. That corroborates Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."* Field overlap with the figures is low (empirical meta-analysis versus framework). **Prediction:** an essentiality ranking that omits focal function and context will fail to replicate.
3. **Correlation drains corroboration.** The effective-sample-size note gives the arithmetic behind Fig 2 :44. Field overlap is very low (computational statistics). **Prediction:** two observational datasets from one sampling campaign cannot double the witness count.

**One tension, sent back to the census rather than used to flip a verdict.** Paine's starfish removal looks like a clean anchor (remove, measure diversity). But the removal outcome is a *function-specific* reading (species richness in rocky intertidal). It does not license a cross-system list of essential interactions. Re-census D3: the anchor is the intervention outcome for the declared function, not "essentiality" in general. No figure was changed.

## Distribution: offer, do not push

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described their residual sends a recording, not a generator. Lead with the per-slot claim and its refuter; offer links after.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27** *"describe it before you go looking, or any frame you pick will seem to fit"* Ask what they would expect to see if the per-slot claim were true before giving them any framework material.
- **Seat Map :163** *"High correlation is disqualifying for a verdict and efficient for a convention."* A send selected for people likely to agree produces a convention, not corroboration.
- **Fig 2 :42** *"Buy independence in proportion to the cost of being wrong."* The cost here is a wrong conservation priority, so two independent checking frames are cheap.

**Recommended order in a reply:** (1) the per-slot shape claim and its refuter; (2) ask what they would count as a failure in their system; (3) record their verdict; (4) only then, the source links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1:** check the output (the per-slot rule and its refuter) against an intervention the recipient knows. No theory is shown.
2. **Stage 2, opt-in only:** if they are curious, offer the three source links. Their stage-1 verdict is already recorded and is never pooled with later interest (Fig 2 :40).
3. **Stage 3:** offer the identification rule as a method to reuse. Each user writes their own refuter and states their own mode (Formula "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. If a refuter in `08_expert_verification_packet.md` fires in your own system, repair or withdraw before sending.

## Hosting

Nothing in this folder is sent by this agent. Hosting and sending are yours. Prefer a link that lets a recipient decline contact, an opt-in download page is closer to the figure's rule than an attachment pushed to a list.
