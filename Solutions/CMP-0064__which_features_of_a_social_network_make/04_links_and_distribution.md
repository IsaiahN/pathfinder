# Public links and distribution

All world links below were fetched and read on 2026-11-22. Local framework files were read the same day. Nothing here was cited without being opened.

## Verified world sources actually fetched

| what | URL | verified content and bearing |
|---|---|---|
| Liu, "When Truth Does Not Take on Its Shoes: How Misinformation Spreads in Chatrooms", econ.GN, 2025 | https://arxiv.org/abs/2510.08658 | "when agents are highly sensitive to peer pressure and the network exhibits structural polarization, even if the majority does not genuinely believe in it, the message still can spread widely without encountering open resistance." Direct corroboration of F2 and F3: relational alignment dominates perceived veracity; structural polarization is the compound. |
| Dehkordi, Miyauchi, Bonchi and Zehmakan, "JECHO: Scalable Echo Chamber Detection via Jaccard-based Homophily and Seed Expansion", cs.SI, 2026, CIKM 2026 | https://arxiv.org/abs/2608.21957 | "three principles: internal opinion homogeneity, opinion extremism, and structural isolation." Corroborates F2: homophily and structural isolation are measurable structural features, not just narratives. |
| Maurya, Shukla, Dandekar, Dandekar and Panat, "Simulating Misinformation Propagation in Social Networks using Large Language Models", cs.SI, 2025, CIKM 2025 Workshop LASS | https://arxiv.org/abs/2511.10384 | "identity- and ideology-based personas act as misinformation accelerators... By contrast, expert-driven personas preserve factual stability." Corroborates F4 (an expert node behaves like a non-updating anchor) and F8 (identity is the imported content atom). Beware: it also reports that heterogeneous interactions escalated distortion once early errors appeared, which is a partial conflict with a naive "more cross-cutting is always better" reading. Recorded as a strain in `11_audit.md`. |
| Robson and Umrawal, "A Community-Aware Framework for Influence Maximization with Explicit Accounting for Inter-Community Influence", cs.SI, 2025/2026 | https://arxiv.org/abs/2512.23973 | "The algorithm partitions the network, computes CDD to prioritize bridging nodes, and allocates seeds adaptively across communities." Corroborates F6 on the catalytic role of bridges, with no claim about false-specific valence. |
| Seki, Murata, Chujyo and Toriumi, "Asymmetric Decline Rather Than Backfire: A Repost-Network Analysis of Japanese Vaccine-Shedding Misinformation on X", cs.SI/cs.CY, 2026, WI-IAT 2026 | https://arxiv.org/abs/2610.40677 | "shedding discourse formed a two-pole structure consisting of pro-vaccine and anti-vaccine clusters" and "corrective information may reshape the composition of misinformation diffusion participants without necessarily converting core opponents." Corroborates F2 (two poles) and F4 (correction changes composition, not core belief). |
| Chauhan, Hong and Vazhaeparambil, "When GenAI Meets Fake News: Understanding Image Cascade Dynamics on Reddit", cs.SI, 2025 | https://arxiv.org/abs/2512.04639 | "accurately predicts both immediate post-level virality (AUC=0.83) and long-term cascade-level spread (AUC=0.998)." Corroborates F7: long-term cascade spread is a distinct, measurable quantity from immediate virality. |
| Furutani, Shibahara and Akiyama, "The Impact of Micro-level User Interventions on Macro-level Misinformation Spread", cs.SI, 2026 | https://arxiv.org/abs/2602.14023 | "current user-level interventions may not necessarily produce sufficient collective effects" and "achieving substantial reductions in misinformation prevalence remains difficult within realistically attainable intervention levels." Corroborates F3: single-lever fixes leave the compound standing. |
| Wikipedia, "Misinformation" | https://en.wikipedia.org/wiki/Misinformation | "At the group level, in-group bias and a tendency to associate with like-minded or similar people can produce echo chambers and information silos that can create and reinforce misinformation beliefs." Also records the 2018 Twitter result that false information spread "significantly faster, further, deeper, and more broadly." Secondary synthesis, low overlap with the arXiv preprints. |
| Wikipedia, "Superspreading event" | https://en.wikipedia.org/wiki/Superspreading_event | "approximately 20% of infected individuals are responsible for 80% of transmissions." Independent epidemiological analogue for catalytic nodes (F6), from a different field and evidence pool. |
| arXiv search, cs.SI discovery query | https://arxiv.org/search/?query=misinformation+diffusion+social+networks&searchtype=all | Discovery aid only. Used to find the preprints above; not a witness for any verdict. |

Local framework files read: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `PLANS/00_MASTER_PLAN.md` and the project README.

## What in the wider literature bears on this question

1. **Structural isolation is measurable, not merely asserted.** JECHO defines echo chambers by internal homogeneity, extremism and structural isolation and gives a Jaccard-based homophily threshold. This is the closest world analogue to Fig 8's "Two frames that overlap almost completely are one frame wearing two names."
2. **Relational alignment can beat perceived truth.** Liu's psychological game gives the exact figure shape of F3: agents forward what their network will accept even when they privately judge it false, and structural polarization lets it spread "without encountering open resistance."
3. **An anchor-like node stabilises content.** Maurya et al. find expert personas preserve factual stability while identity personas accelerate drift. This is world corroboration, not a figure derivation.
4. **Bridges matter for reach.** Robson and Umrawal explicitly model inter-community influence and prioritise bridging nodes. Combined with Fig 11's valence-relative-to-residual rule, the honest claim is about reach, not about a bridge being pro-false.
5. **Corrections change composition, not necessarily core belief.** Seki et al. found "asymmetric decline rather than backfire": the anti-vaccine cluster withdrew from reposting rather than converting. This is the closest world test of F4's persistence claim.
6. **Individual-level fixes do not scale.** Furutani et al. is the world counterpart of the union-compound result in F3.
7. **An independent analogue from epidemiology.** Superspreading's 20/80 pattern is a different field's version of Fig 12's catalyst. Agreement from a different evidence pool is one extra witness, but it is still only an analogue.

### One recorded conflict

Maurya et al. report that "heterogeneous persona interactions rapidly escalate misinformation to propaganda-level distortion" once early distortion appears. A naive reading of Fig 6 and Fig 8 says cross-closure import buys independence and therefore correction. The conflict does not flip the figure verdict; per the method, a conflict sends us back to the census. Re-census: the figure governs *evidence independence*, while the simulation's heterogeneity is *identity conflict between personas*, which is high overlap on identity and low overlap on expertise. Those are different axes, so the two claims can both hold. The strain is named in `11_audit.md` and not smoothed over.

## Distribution: offer, do not push

- **Fig 10 :52:** "Bring a characterised residual, never the source." Send the shape claim and refuter first.
- **Fig 9 :27-28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would count as a failure before showing the article.
- **Fig 2 :40:** "agreement about the world is worthless when the agreeing frames share an evidence pool." Do not select recipients for likely agreement and do not pool their agreement as corroboration.
- **Fig 4 :22-25:** "Only methods cross up. Only head starts come down." Send the generator (the refuter and the derivation), not a recording of the conclusion.

**Order in a reply:** (1) the shape claim and its refuter; (2) what they would count as a failure; (3) only then the links, with the note that the figures, not this summary, are the authority. No attachments pushed to a list. One-to-one only.

## The two-stage offer

- **Stage 1:** residual, shape claim, refuter. Record their verdict before any theory is shown.
- **Stage 2, opt-in:** the verbatim figure text and the source list. Their later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3:** the formula as a reusable method, with the instruction that each user writes their own refuter and states their own mode. Ground contact must be re-established per problem; a synthetic solve proves wiring, not capability.

**Honest stop:** this is a simulated derivation. It cannot settle which feature dominates. What it offers is the shape any candidate answer must have, the falsifiers written in advance, and the kind of instrument that would close it.
