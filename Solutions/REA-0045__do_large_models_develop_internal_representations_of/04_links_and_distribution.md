# Public links and distribution

All links below were fetched and read on 2026-11-23. Each is recorded with author, venue, year and a quote in `10_source_ledger.csv`.

## Verified sources, primary

| what | URL | verified content |
|---|---|---|
| Figures text with line numbers (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | The verbatim SVG text that governs every `Fig N :line` citation in this folder. Fig 1 per-slot residual, Fig 2 anchor and collapses, Fig 9 effect-not-cause, Fig 11 capability is agent-and-habitat. |
| Canonical figures README (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo: the code, the rulings and the docs answer to them" and "what a missing thing would have to look like (a shape, not a name)". |
| The formula (local) | `FRAMEWORK/figures/THE_FORMULA.md` | The eight-step loop, the mode rule, SEARCHED / INWARD / OUTWARD, and the Direction discipline. |
| Figures repository (public) | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public figures folder, branch `general-agent`, with the README that names the figures as authority. |
| Canonical usage rule (public) | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Same document as the local copy; the re-census rule and the shape-not-a-name limit. |
| Architecture essay (public) | https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether | The verbatim figure set and the note that LLM outputs must be "seen as simulacra"; the weights are frozen and the architecture cannot be added post-training. |

## Wider literature actually fetched

These are secondary corroboration only. The figures decide; a conflict sends us back to the census.

| field | source | what it bears on |
|---|---|---|
| Philosophy of mind, low overlap | Extended mind thesis (Wikipedia), reporting Clark and Chalmers 1998: "the mind does not exclusively reside in the brain or even the body but extends into the physical world." Clark: "It is the way the information is poised to guide reasoning ... and behavior that counts." | Corroborates Fig 11 :39. Capability is not inside the agent alone. |
| Cognitive science / anthropology, low overlap | Distributed cognition (Wikipedia), reporting Hutchins 1995: "Nervous systems do not form representations of the world, they can only form representations of interactions with the world." | Corroborates Fig 9 :30-31 and Fig 11. The unit is contact, not an internal picture. |
| Ecological psychology, low overlap | Affordance (Wikipedia), reporting Gibson 1979: "The affordances of the environment are what it offers the animal, what it provides or furnishes, either for good or ill. ... It implies the complementarity of the animal and the environment." | Corroborates Fig 3 :7 (terms for what a situation affords) and Fig 11 :39. |
| Philosophy of mind, low overlap | Chinese room (Wikipedia), reporting Searle 1980 and the 2024 Goldstein and Levinstein discussion: LLMs show "robust internal representations of the world" while "the evidence for LLMs having action dispositions necessary for belief-desire psychology remains inconclusive." | Corroborates the C1 / C2 split: internal structure may be present while the action/contact claim stays open. |
| Direct field, probing | Hewitt and Liang, "Designing and Interpreting Probes with Control Tasks", EMNLP 2019, https://arxiv.org/abs/1909.03368: "does this mean that the representations encode linguistic structure or just that the probe has learned the linguistic task?" and "popular probes on ELMo representations are not selective." | Corroborates Fig 10 :49 ("Declaring a meaning does not ground it") and Fig 6 :34. An instrument can manufacture the reading. |
| Direct field, interpretability | Mechanistic interpretability (Wikipedia): "high-level concepts are represented as linear directions in the activation space of neural networks ... although it does not hold up universally." | Weak corroboration that internal structure exists; does not settle the "of the world" or "supports reasoning" claims. |
| Direct field, metrics | Schaeffer, Miranda and Koyejo, "Are Emergent Abilities of Large Language Models a Mirage?", 2023, https://arxiv.org/abs/2304.15004: "emergent abilities appear due to the researcher's choice of metric rather than due to fundamental changes in model behavior with scale." | Corroborates Fig 1 :27 and Fig 9 :60. A metric is a filter for the budget, not a witness for the verdict. |
| Direct field, reasoning and acting | Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models", ICLR 2023, https://arxiv.org/abs/2210.03629: "actions allow it to interface with external sources, such as knowledge bases or environments, to gather additional information" and the method "overcomes issues of hallucination and error propagation prevalent in chain-of-thought reasoning by interacting with a simple Wikipedia API." | Strong, direct-field corroboration of Fig 11 :40. Reasoning improves when contact changes. |
| Framework essays, high overlap | The eight essays at `adventuresinml.substack.com`, listed in `10_source_ledger.csv`. Key line for this question, from "They're Scanning Books": "A corpus is the compressed output of human minds; the capacity that produced it is a generator, and outputs do not contain their generator." | Corroboration only. Same author and evidence pool as the figures, so their agreement is one witness. |

**Conflict rule not triggered.** No world source conflicts with the figure verdict. Where a source seemed to pull the other way (the linear representation hypothesis looks like a yes to C1), re-census showed it governs internal structure, not the ground-settled "of the world" claim. It is a different quantity, so there is no strain.

**Overlap warning.** The four low-overlap sources (extended mind, distributed cognition, affordance, Chinese room) are genuinely different closures from ML. The four direct-field sources share the claim's evidence pool with it. The eight essays share the figures' author. None of these groups should be counted as three independent witnesses.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25** - "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter.
- **Fig 10 :42** - "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** - "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them any links.
- **Fig 2 :42** - "Buy independence in proportion to the cost of being wrong." The cost here is a wrong answer about reliability in systems people will deploy, so independent checks are worth buying.

**Recommended order in a reply:** (1) the two unbundled claims and the shape; (2) the three refuters, written in advance; (3) ask what they would count as a failure and record the answer; (4) only then, the three primary links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52, "Bring a characterised residual, never the source," and Fig 2 :45, "Frames range against the ground. They do not negotiate with it." The recipient checks the shape without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. The stage-1 verdict must be recorded before any theory is shown, and later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method, which is permitted.** Fig 4 :22. The formula is a generator, so giving it away does not give away an answer. Each user must write down what would refute their own result and state the mode of what they get: the formula's Direction section says a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. As written, the literal question has no anchor and the internal name is a borrowed cause-word (F2, F3 in `01_figure_grounded_audit.md`). Do not reverse the order.

## Legal and practical note

Public submission portals and opt-in channels avoid both the structural failure (a list selected for agreement is a convention, not corroboration) and the legal one (GDPR and CAN-SPAM style rules on unsolicited outreach). Nothing in this folder sends anything. Hosting and sending are yours to do.
