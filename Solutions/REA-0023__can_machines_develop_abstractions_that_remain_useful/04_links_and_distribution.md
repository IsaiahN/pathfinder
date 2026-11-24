# Public links and distribution

All links below were fetched or returned by the search integration on 2026-11-23. Where a direct fetch returned 403, that is stated and the quote comes from the publisher abstract or a public author manuscript returned by the search integration. Nothing is cited from a page that was not opened or returned.

## Verified sources actually read

| what | URL | verified content |
|---|---|---|
| CLIP, PMLR abstract page | https://proceedings.mlr.press/v139/radford21a.html | Radford et al., ICML 2021, PMLR 139:8748-8763. Abstract read: *"After pre-training, natural language is used to reference learned visual concepts (or describe new ones) enabling zero-shot transfer of the model to downstream tasks."* |
| Platonic Representation Hypothesis, PMLR abstract page | https://proceedings.mlr.press/v235/huh24a.html | Huh, Cheung, Wang and Isola, ICML 2024, PMLR 235:20617-20642. Abstract read: *"Neural networks, trained with different objectives on different data and modalities, are converging to a shared statistical model of reality in their representation spaces."* |
| Cross-Modal Scene Networks, arXiv full text | https://arxiv.org/pdf/1610.09003 | Aytar, Castrejon, Vondrick, Pirsiavash and Torralba, 2016. Full text read: modality-specific early layers and shared higher layers; *"A representation is invariant to modality if the feature vector does not store information about the origin modality."* |
| Cross-Modal Discrete Representation Learning, ACL Anthology | https://aclanthology.org/2022.acl-long.215 | Liu, Jin, Lai, Rouditchenko, Oliva and Glass, ACL 2022, pages 3013-3035. Abstract read: *"the discretized representation uses individual clusters to represent the same semantic concept across modalities."* |
| Cross Modal Generalization, NeurIPS proceedings | https://proceedings.neurips.cc/paper_files/paper/2023/hash/c89f09849eb5af489abb122394ff0f0b-Abstract-Conference.html | Xia, Huang, Zhu and Zhao, NeurIPS 2023. Abstract read: the model *"can achieve zero-shot generalization ability in other modalities when only one modal is labeled."* |
| Objective drives the consistency of representational similarity, PMLR | https://proceedings.mlr.press/v267/ciernik25a.html | Ciernik, Linhardt, Morik, Dippel, Kornblith and Muttenthaler, ICML 2025, PMLR 267:10920-10948. Abstract read: *"the objective function is a crucial factor in determining the consistency of representational similarities across datasets."* |
| Bumble bees display cross-modal object recognition, Science | https://www.science.org/doi/10.1126/science.aay8064 | Solvi et al., Science 2020. Direct fetch returned 403; abstract and the perspective summary returned by search integration: *"bumble bees possess the ability to integrate sensory information in a way that requires modality-independent internal representations."* |
| Cross-modal object recognition in a fish, PNAS | https://www.pnas.org/doi/10.1073/pnas.1603120113 | Schumacher et al., PNAS 2016. Direct fetch returned 403; abstract returned by search integration: *"spontaneous cross-modal object recognition"* and *"the sensory inputs are weighted dynamically according to their reliability"*. |
| Crossmodal correspondences: a tutorial review, Springer | https://link.springer.com/article/10.3758/s13414-010-0073-7 | Spence, Attention, Perception, & Psychophysics 73(4):971-995, 2011. Page read: *"crossmodal correspondences need to be considered alongside semantic and spatiotemporal congruency, among the key constraints that help our brains solve the crossmodal binding problem."* |
| What, if anything, can be considered an amodal sensory dimension?, Springer | https://link.springer.com/article/10.3758/s13423-023-02447-3 | Spence and Di Stefano, Psychonomic Bulletin & Review 31:1915-1933, 2024. Open-access page read: *"the term means something different to the researchers working in the different contexts."* |
| Understanding across the senses: cross-modal studies in cetaceans, author manuscript | https://scholarworks.sfasu.edu/biology/190/ | Bruck and Pack, Animal Cognition, published 2022, record dated 2023. Abstract read: cross-modal approaches reveal *"equivalencies that suggest that different sensory stimuli associated with objects or individuals may effectively evoke mental representations that are, respectively, object based or individual based."* |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, Aug 28 2026. Full essay read: *"The answer is unreached until a better instrument exists."* Framework-internal, maximal overlap with the figures. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, Nov 10 2026. Full essay read: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* Framework-internal. |
| Figures and formula, public repo | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public branch and folder. Its README says the figures *"outrank everything else in the repo"* and gives the citation form `Fig N :line`. |
| Full architecture article | https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec | 19 min read, Aug 19 2026; cited from the completed exemplar's verification record, not re-read this session. Framework-internal. |

## What the wider literature bears on the question

1. **The transfer result is real at the wiring level.** CLIP's zero-shot transfer and the NeurIPS Cross Modal Generalization task show that a term learned with one modality or one labelled modality can pay in another. Fig 4 :22 (*"Only methods cross up. Only head starts come down."*) predicts this, and CLIP is a case where a generator (the paired image-text objective) crossed rather than a replayed label set. But CLIP's own limitations (weak on abstract tasks such as counting, poor on out-of-distribution MNIST) are the per-slot residuals that a pooled score hides (Fig 1 :19, :22).
2. **Convergence is not two witnesses.** The Platonic Representation Hypothesis reports different networks converging toward a shared statistical model of reality. That is exactly the case Fig 8 :50-52 separates: convergent derivation and adopted import look identical in the contents. Ciernik et al. 2025 is an internal dissent within the same ML pool, reporting that the objective function, not modality alone, governs consistency across datasets. The conflict was returned to the census (F4), not used to flip the verdict. The ML pool remains one witness.
3. **The carrier is a bond, not an atom list.** Cross-Modal Scene Networks keep early layers modality-specific and share higher layers, and report units that respond to the same concept across modalities. Liu et al. 2022 report individual discrete clusters representing the same semantic concept across modalities. Both are world-level corroboration of Fig 12 :5 (*"A set of ingredients is not one. The bond is the rest of the information"*), but they are still the same ML evidence pool.
4. **Low-overlap corroboration comes from animals and humans.** Bumble bees and weakly electric fish recognise objects across senses without a shared sensorium; fish dynamically reweight inputs by reliability (Fig 11 :49-51). Horses, goats and dolphins show cross-modal individual recognition. Spence 2011 shows humans solve the binding problem via crossmodal correspondences that act as shared constraints. These fields do not share the ML evidence pool, so they are genuinely independent witnesses for the *shape* of the claim, not for the machine-level fact.
5. **A name is still owed.** Spence and Di Stefano 2024 show that even the term *amodal* means different things in different contexts. That is a direct, low-overlap analogue of Fig 9 :32: *"you get a kind of thing, never the answer itself."*

## Distribution: offer, do not push

- Fig 4 :22-25: sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and refuter; offer links after a verdict is recorded.
- Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the article.
- Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."* A mass send selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure; (3) record that verdict; (4) only then the three links, with the note that the figures, not this summary, are the authority.

## The two-stage offer

1. **Stage 1:** the residual and the shape, with the pre-registered refuters. The recipient checks it without holding the framework's interior.
2. **Stage 2, opt-in only:** if curious and only after a stage-1 verdict is recorded, offer the figures and the article. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse. Each user writes their own refuter and states their own mode before running it.

**Hard precondition:** stages 1 to 3 work only if the stage-1 shape survives. Nothing in this folder claims it has been settled at the ground.

## Fetch failures and honest notes

- `https://www.science.org/doi/10.1126/science.aay8064` returned 403 on direct fetch; the abstract and perspective were obtained via the search integration and are marked as such in `10_source_ledger.csv`.
- `https://www.pnas.org/doi/10.1073/pnas.1603120113` returned 403 on direct fetch; the abstract was obtained via the search integration.
- `https://pubmed.ncbi.nlm.nih.gov/21264748` returned a cookie gate; the Spence 2011 record was obtained from the Springer article page and the Oxford ORA record instead.
- `https://www.jmlr.org/papers/submission.html` returned 404; the verified JMLR homepage `https://jmlr.org/` was used and its Submissions link noted.
- The direct `Animal Cognition` journal submission URL was not fetched; the journal's relevance is documented through a verified author-manuscript record and is marked as a mapping aid in `03_public_contact_points.csv`.

## Zip / hosting

Nothing here is sent by this agent. The packet in `08_expert_verification_packet.md` and the two-stage email are to be hosted and sent by the user. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list.
