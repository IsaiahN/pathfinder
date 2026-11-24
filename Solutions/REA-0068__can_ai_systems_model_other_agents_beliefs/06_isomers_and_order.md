# Isomers, order and competing explanations - supporting derivation for REA-0068

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 8).

## RESIDUAL

The primary audit (`01`) returned a union of two conditions, prediction (C1) and source attribution (C2), with a `gap` for C2 on real agents. Three questions are still owed before the answer can be stated cleanly:

1. **Structure.** If two latent states produce the same behaviour, are they isomers under Fig 12, or is a weaker claim all that is licensed?
2. **Order.** In what order do the conditions and their instruments bind? Which link breaks first?
3. **Competing explanations.** Can the standard positions in the literature be generated from the shape, or do they name something the shape cannot reach?

## DOMAIN CENSUS (carried forward, not re-run)

- D1 model prediction loop: actors model Γ, b_model, attribution a, agent behaviour o′; currency residual reduction per slot; anchor held-out behaviour.
- D2 agent's own loop: actors Γ_agent, b_agent, w_agent, a_agent; currency reduction of its own residual; anchor the agent's ground.
- D3a frame boundary, synthetic: actors two frames plus recorded latent ground truth; anchor experimenter-controlled latent.
- D3b frame boundary, real agent: same actors, no recorded latent; no nameable anchor.
- D4 verification frame: actors outside checkers; currency agreement and residual; anchor the ground, never agreement.
- Partition or union: union of C1 and C2, with D1/D3 and D2/D3 forming two compounds (Fig 9 :54-57).
- Dependency order: perception → vocabulary → objective → planning → learn and carry (Fig 3 :4-15).

No new domain is introduced here. The figure lines below were selected only after this census was fixed.

---

## Q1 - Are two latent states that yield the same behaviour isomers?

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)
> **"Symmetry is what decides whether an arrangement is a new thing."** (Fig 12 :92)
> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)

Take two agents with identical observable behaviour: the same utterance, the same reaching pattern, the same answer to a false-belief question. If their latents differ, for one believes the marble is in the basket while the other has learned a policy that returns the same answer without any belief, then the observable atoms are the same and the bond is different. They are **isomers** under Fig 12 :117: same atoms, different bond, different substance, with the difference invisible in the behaviour formula and decisive in what happens next when the world changes. This is the figure-grounded form of the source problem in the essay *The Hard Problem is About Source*: *"If several paths create the same behavior, then behavior is a projection with lossy information"*.

If the two agents share only a pattern, for example `perception → latent → action`, while differing in which latent occupies the middle slot, the weaker claim holds: they are members of the same **functional group** (Fig 12 :124), the qualifier saying which member. The presence of the pattern fixes the kind, not the source.

The distinction is testable, because the bond has to be recorded. A behaviour-only comparison that finds no difference between the two agents cannot distinguish isomer from functional group. What is owed is a latent manipulation with ground truth, not a finer behaviour sensor.

**Falsifier, written before the run:** if two agents with identical behaviour and recorded identical latents nevertheless diverge in subsequent attribution accuracy with no difference in contact or imported atoms, the isomer framing is insufficient and the difference must be habitat (D2), which moves the explanation out of D3.

**Status:** `specified`, triangulated for the legality of the reading (Fig 12 and Fig 9 :30-31, different figures), single-source for the AI application. World corroboration is the metamerism argument in the source essay, which is framework-internal, plus Bender and Koller's form/meaning distinction from formal semantics, which is low-overlap. The two agree on shape but come from different evidence pools.

## Q2 - What order do the conditions bind in?

> **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."** (Fig 3 :20-21)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)

Order for a model facing a new agent:

1. **Perception.** Can it read the agent's behaviour at all? Failure here is visible and has obvious tests.
2. **Vocabulary.** Does Γ_model have terms for belief and intention, and does it have a pose for a frame transform? This is the middle link. Fig 3 :26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*
3. **Objective.** Can it state a comparison that would count as getting somewhere: behavioural accuracy, or source discrimination? Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* A vocabulary with only behaviour ingredients cannot state a source goal.
4. **Planning.** A route to that objective under incomplete information about the latent.
5. **Learn and carry.** Name what worked, verify it, carry it to the next agent.

The two conditions map onto this chain: C1 (prediction) is mostly a failure of links 1 and 3 when the objective is set to accuracy; C2 (attribution) is mostly a failure of link 2, because the model has no pose from which to transform into the other frame and no instrument that discriminates sources. That mapping is why a single lever cannot clear both (Fig 9 :55).

The order also decides which instrument to buy first. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The behaviour link (1) has benchmarks and held-out data; link 2 has almost none for real agents. So evaluation budget piles up at link 1 while the break sits at 2. Sclar et al. 2023 make the same point operationally: an explicit symbolic tracker is needed because the implicit model lacks the vocabulary, and even then the benchmark has *"spurious patterns"* that only out-of-distribution evaluation catches.

**Falsifier:** a model whose chain demonstrably works at 1, 2 and 3 and fails only at 4. That would falsify the "usually middle" claim of F8 in the primary audit, though not the dependency ordering.

## Q3 - Competing explanations, and what each can and cannot reach

| candidate explanation | what it names | figure-line bearing | what it cannot reach |
|---|---|---|---|
| **Behavioural prediction / ToMnet** (Rabinowitz et al. 2018) | a model of agents built *"from observations of their behaviour alone"* | Γ as a real library; C1 in a synthetic habitat | Why the latent is right, not just the next action. In D3a the latent comes from the experimenter; in D3b it is not observed |
| **Scale-only account** (reported and questioned by Sap et al. 2022/2023) | more parameters and more data | conflicts with Fig 6 :21; composition inside a closure adds no atom | *"even ChatGPT and GPT-4 do not display emergent Theory of Mind"* on ToMi; a budget filter, not a witness (Fig 9 :60) |
| **Explicit symbolic belief tracking** (Sclar et al. 2023) | an ordered representation of multiple characters' beliefs | close to C2 and to Fig 12's bond information | It is a binding with provenance needed; the same paper finds *"spurious patterns in existing theory of mind benchmarks"* |
| **Benchmark-success account** (Pang et al. 2025 discussing Kosinski 2024) | passing isolated ToM tasks | a room score (Fig 7 :35) | *"successfully solving isolated ToM tasks is insufficient evidence to indicate the presence of ToM"*; no convergent case |
| **Formal-semantics objection** (Bender and Koller 2020) | form without meaning | matches Fig 12 :5, the missing bond | It argues the limit of form; it does not supply the source-discriminating instrument |
| **Simulation theory reading** (one of the two philosophical positions in the reference entry) | putting oneself in the other's place | requires a frame transform F with a pose | Symbols `F`: *"Cannot be run without a pose"*; no known transform between frames |
| **Theory-theory reading** (the other philosophical position) | applying a folk theory to the agent | Γ with mental-state terms, a binding | A theory can fit behaviour while being wrong about the source; provenance still owed (Fig 8 :51) |
| **Dennett's intentional stance** (reference entry) | adopting a predictive stance for practical utility | explicitly *"rather than the accuracy of its representation of the world"* | It is a functional relation, not a source claim; useful for C1, silent on C2 |
| **Luck or hidden training** | patterns from the training corpus rather than the model | Fig 8 :40: underivable and unreachable are different facts | Cannot be excluded from inside a frame; *"So a search that finds nothing is never a proof of absence"* (Fig 8 :39). Honest `gap`, not a rival verdict |

No candidate is discarded by prestige or familiarity. Each is ranged against the same residual, in the order Fig 8 :53 requires. The point is not to pick one; it is to notice that the first six are mostly in one evidence pool (Fig 2 :31) and that formal semantics and comparative primatology corroborate the mechanism shape, not the AI-specific fact.

## Q4 - Does the shape generate the literature's positions?

Partly. The shape can generate:

- the behavioural-prediction emphasis, as C1 under a synthetic habitat where the latent is supplied as ground truth;
- the scale-sceptical finding, as Fig 6 :21, composition inside a closure cannot add the atom;
- the symbolic-tracking remedy, as C2 and the bond information of Fig 12 :5;
- the benchmark caution, as Fig 7 :35 and Fig 9 :60;
- the form-versus-meaning objection, as the missing bond of Fig 12 :5.

It cannot generate the *name* of the agent's actual belief, nor whether any given model has it. That is the `gap` recorded in F10 of `01`. It is a gap at the instrument boundary, not a silence: Fig 13 :134 (*"Unreachable is a verdict here, not a silence"*) and Fig 8 :39 apply. The source essay states why: an instrument that reads a result *"cannot comment on the source"*, and *"the answer is unreached until a better instrument exists."*

## CONCLUSION

Two latent states that yield identical behaviour are isomers under Fig 12 :117; two that share only a `perception → latent → action` pattern are members of one functional group under Fig 12 :124. The conditions bind in dependency order, with the vocabulary and objective link the usual break, which is why C1 and C2 need different instruments. The standard positions are mostly bindings of one evidence pool and are generated by the shape only up to the point where a name or a source discriminator would be required. The isomer claim has a written falsifier; the order claim has one; the real-agent naming gap is declared rather than filled.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. World sources opened and recorded in `10_source_ledger.csv`. No measurement was used. Mode `specified`.

## FIGURE CENSUS

Fig 3 (dependency order, middle break, instrument absence), Fig 6 (import moves the wall, proto-instrument rule), Fig 7 (room agreement, selection against residual), Fig 8 (residual first, underivable vs unreachable, provenance), Fig 9 (union vs partition, describe before looking), Fig 12 (isomer, functional group, symmetry, bond information, goal as comparison), Fig 13 (unreachable is a verdict), Formula (step 5 settlement, Direction, negation). Strained after re-census: none. The two earlier strains are logged in `01_figure_grounded_audit.md` section 6.
