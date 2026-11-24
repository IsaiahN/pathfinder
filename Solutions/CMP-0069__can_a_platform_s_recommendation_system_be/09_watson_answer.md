# WATSON answer: can the recommender be modeled as part of the social network?

**Mode: `general` on the reframing, `specified` on the habitat prediction. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLMs quickly simulate an approximate output, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*) it cannot settle the claim it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, whether a platform's recommendation system should be modeled as part of the social network or as an external influence. Option A: place it inside, as an actor whose state co-evolves with ties and content. Option B: place it outside, as a fixed forcing term with its own state. What each leads to: A admits the recommender into the enumerated habitat and exposes the loop among exposure, tie formation, and retraining; B treats it as a pinned anchor and hides that loop, so prediction fails in exactly the slots where users and the recommender co-adapt. The sought-for shape is bound as an ordinary term: a boundary test with one exception.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** Failed prediction of information spread in recommender-mediated slots. Arity: two conditions compose, so a union compound (Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."*). Symmetry: asymmetric, since "external influence" is an ordered bond and "part of the network" is a symmetric composition. Scale: population-level selector acting on individual exposures, with a lossy round trip between sizes.
- **Domain 1, the modeling convention.** Actors: modeler, graph, the labels inside and outside. Currency: descriptive convenience. Anchor: none nameable, since a label does not settle a question. Not a ground-bearing domain yet. Governed by Fig 10 :18 *"a declared meaning is not a grounded one"*. Verdict `general`, triangulated (Fig 10 and Fig 9).
- **Domain 2, the contact and habitat frame.** Actors: users, content, recommender, instrumentation. Currency: exposure and attention. Anchor: observed cascades and randomized exposure tests, which do not move when a component is relabeled. Verdict `specified`, triangulated (Fig 11 and Fig 6): the recommender is in contact and belongs in the habitat.
- **Domain 3, the two-frame and closure frame.** Actors: the network-model frame and the recommender-model frame. Currency: predictions and independence. Anchor: the same cascade ground, ranged against both frames separately (Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."*). Verdict `specified`, triangulated (Fig 6, Fig 8, Fig 2): a learning recommender is a frame, not a pinned anchor.
- **Order by dependency.** Describe the residual and settle the boundary convention; then enumerate the habitat from contact; then decide closure, import, and two-frame triangulation. Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

Strain test applied: Fig 4's membrane governs boundaries between sizes; the question's dichotomy governs a modeling convention. Different objects, so no strain after re-census (see `01` §7).

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 10 :18 "a declared meaning is not a grounded one" -> the inside/outside label is a convention until a test violates it. Domain 1, `general`, triangulated with Fig 4 :21 "Not a wall: a filter with a direction."
- Fig 11 :43 "The habitat is enumerated, never composed." -> the field of contact is read off the world, not assembled from a preferred component list. Domain 2.
- Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." -> the recommender is in contact, so it is enumerated in the habitat. Domain 2, triangulated with Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
- Fig 11 :61-62 "Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you." -> relabeling the recommender external cannot remove it from the habitat. Domain 2.
- Fig 2 :25 "pinned: it does not update on A or B" -> an external influence must be pinned. A recommender that retrains on induced behavior fails this test. Domain 3, triangulated with Fig 6 :23.
- Fig 2 :4 "collapse 1: mutual update" -> treating a learning recommender as fixed is the named failure. Fig 2 :14-15 "they converge, and what they converge on is whoever had the most influence" gives its outcome.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." -> the question is a compound to unbundle. Domain 1 and 3, triangulated with Fig 8 :45 "Two frames together reach what neither reaches alone."
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." -> the two frames must be ranged separately; agreement from one pool is one witness. Domain 3.
- Fig 6 :25 "An import adds no atom to the world." -> no new primitive is owed to model the recommender as internal. Domain 2, triangulated with Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone".
- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> the two arrangements are isomers, not relabelings. Domain 3, single-source for the figure definition with the field-facing check still unmeasured.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> the condensed answer carries a nonzero round-trip gap R_T, enumerated in `01` §7.

Triangulation status: the habitat verdict is triangulated across Fig 11 and Fig 6 (low overlap: where actors come from versus what moves a boundary). The anchor test is triangulated across Fig 2 and Fig 6. The convention verdict is triangulated across Fig 10 and Fig 9. The isomer reading is single-source for the figure definition in Fig 12, with the field-facing check still unmeasured. The effect size for any particular platform is `gap`: no ground reading was taken. No strain remains hidden after re-census.

## WORLD (secondary sources read)

World sources corroborate only; they do not overrule the figures. These five come from five different research groups and none cites the framework, so their overlap with each other is low. Their agreement is therefore stronger than an author-overlapping essay set. Overlap with the framework is zero.

- **Field:** network science and agent-based simulation. **Source:** Gaurav Koley and Sanika Digrajkar, "A Simulation Framework for Studying Recommendation-Network Co-evolution in Social Platforms", arXiv:2512.10106 [cs.SI], 2025. **Quote:** "Unlike prior agent-based models that treat networks as static or model recommendations as exogenous inputs, we create a closed-loop system: agents form ties based on content exposure, a graph attention network (GAT) learns to recommend content from observed behavior, and those recommendations alter future tie formation." **Prediction:** a closed-loop model is required; the exogenous model is a different substance. **Verdict:** corroborates Fig 11 and Fig 4.
- **Field:** causal inference and recommender systems. **Source:** Karl Krauth, Yixin Wang and Michael I. Jordan, "Breaking Feedback Loops in Recommender Systems with Causal Inference", ACM Transactions on Recommender Systems 4(1), Article 14, 2025/2026. **Quote:** "During this process, the recommender influences the user behavioral data that is subsequently used to update the recommender itself, thus creating a feedback loop." **Prediction:** a recommender that updates on induced data fails the pinned-anchor test. **Verdict:** corroborates Fig 2 :25 and :4.
- **Field:** machine-learning ethics. **Source:** Ray Jiang, Silvia Chiappa, Tor Lattimore, Andras Gyorgy and Pushmeet Kohli, "Degenerate Feedback Loops in Recommender Systems", AIES 2019. **Quote:** "The decisions made by these systems can influence user beliefs and preferences which in turn affect the feedback the learning system receives - thus creating a feedback loop." **Prediction:** user dynamics and recommender dynamics co-evolve. **Verdict:** corroborates Fig 11 :39.
- **Field:** machine-learning engineering and software quality. **Source:** Anton Khritankov, "Positive feedback loops lead to concept drift in machine learning systems", Applied Intelligence 53, 22648-22666, 2023. **Quote:** "We study systems in their context of use, because both learning algorithms and user interactions are important." **Prediction:** capability is a property of the system in context, not of the algorithm alone. **Verdict:** corroborates Fig 11 :39.
- **Field:** web science. **Source:** Francesco Fabbri, Maria Luisa Croci, Francesco Bonchi and Carlos Castillo, "Exposure Inequality in People Recommender Systems: The Long-Term Effects", ICWSM 2022. **Quote:** "multiple interactions between users and recommendation algorithms tend to nourish a feedback loop: i.e., the output generated by the recommendation algorithm is then fed as future input for the next training of the recommender." **Prediction:** the loop changes the network the recommender trains on. **Verdict:** corroborates Fig 6 :23. Abstract-level only; the direct PDF fetch failed on this host. Recorded as weaker evidence.
- **Field:** communication studies. **Source:** "Modeling news recommender systems' conditional effects on selective exposure: evidence from two online experiments", Journal of Communication 73(2), 2023. **Quote from the abstract:** "an NRS can increase or decrease the chance that selective exposure occurs, depending on what the NRS is designed to achieve." **Prediction:** a designed, fixed recommender acts as an exogenous intervention, which is the pinned exception. **Verdict:** corroborates the exception; full text was access-limited, so abstract-level.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The two abstract-level sources carry less weight and are marked as such.

## VERDICT (from the figures)

The shape survives; the dichotomy does not. "Inside or outside" is a boundary convention until a test violates it. The recommender is in contact with the spread residual and therefore belongs in the enumerated habitat, so the default is to model it as part of the network. The deciding property is whether its state updates on the behavior it affects: a learning recommender is a frame, not a pinned anchor, and the external model hides the mutual-update loop; a genuinely pinned recommender, such as a randomized or fixed signal, may be modeled as external. The two arrangements are isomers over the same cast with different bonds. This is a `general` reframing plus a `specified`, ungrounded habitat claim, offered as candidate. No platform effect size is asserted.

- **cost if wrong:** bounded and locatable. If a learning recommender is modeled as fixed, prediction fails in the co-adaptation slots and the feedback loop becomes invisible to intervention analysis. The packet states the criterion, the exception, and the refuters in advance, so an error is findable rather than invisible. The avoidable cost is spending a reader's independence by sending a conclusion before a check; Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."*
- **undoable:** yes. The boundary can be redrawn by re-enumerating the habitat and re-running the pinned test. No primitive is withdrawn and no import is unbought. A sent claim can be superseded by a corrected packet that keeps the shape and changes the exception.
- **reversed by:** a ground reading, not agreement. A randomized or fixed-signal experiment showing exposure and cascade shape are independent of user behavior would license the external model; a test showing the recommender has no effect on the spread residual would remove it from the habitat; a demonstration of complete overlap between the organic and algorithmic frames would dissolve the union; a derivation requiring a new primitive to represent the recommender would force an import. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [A Simulation Framework for Studying Recommendation-Network Co-evolution in Social Platforms](https://arxiv.org/html/2512.10106v1)
- [Breaking Feedback Loops in Recommender Systems with Causal Inference](https://arxiv.org/html/2207.01616)
- [Degenerate Feedback Loops in Recommender Systems](https://arxiv.org/abs/1902.10730)
- [Positive feedback loops lead to concept drift in machine learning systems](https://link.springer.com/article/10.1007/s10489-023-04615-3)
- [Exposure Inequality in People Recommender Systems: The Long-Term Effects](https://cdn.aaai.org/ojs/19284/19284-28-23297-1-2-20220531.pdf)
- [Modeling news recommender systems' conditional effects on selective exposure](https://academic.oup.com/joc/article/73/2/138/6958533)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`.
