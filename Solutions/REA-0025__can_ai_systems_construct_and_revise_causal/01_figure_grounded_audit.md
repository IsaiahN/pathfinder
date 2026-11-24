# Figure-grounded audit: can a system construct and revise causal models by intervention?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (essay read 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. Fig 11 :70 sharpens the limit: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

**Sources.** The canonical verbatim extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the public sources in `10_source_ledger.csv`.

---

## 0. The residual, stated as an effect

`R = |Γ(b,a) − o'|` per slot `s` (Symbols table). An observation-only system receives `o'` without changing the world. An intervening system performs `a` that sets a variable and thereby changes the distribution that produces `o'`. The effect to be decided is: **which of these two inputs can move a residual on a causal slot to zero, and which can only move a residual on a predictive slot.**

Three clarifications that stop the question from becoming a bundle (Fig 9 :54, "when the split lands on a union rather than a partition, unbundle before you search again"):

1. "Construct" is a mint. Under formula step 3 it needs SUPPORT `|R⁺_s| > 0` for some slot, REACHABILITY in `closure(Γ)`, and NOVELTY relative to `atoms(Γ)`.
2. "Revise" is not a smaller mint. It is a refusal, the fifth gap kind: Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so". A vocabulary that can only add cannot revise.
3. "Intervention rather than observation alone" is not a claim that observation is useless. It is a claim about which input can settle the ordered production bond and which can only settle association.

**Sought-for shape, bound before the run** (Fig 5 :65): "Write down what an answer would look like, bind it, and let it accrue a residual like anything else." I bind it as: acting is a first-class loop operator; the ground is the only metric; causation is an ordered bond not recoverable from ingredients; refusal is available; capability is agent-and-habitat. This bound is refusable by the same test as everything else (see §4).

---

## 1. Domain census, before any figure line is chosen

**R by arity, symmetry, scale.** Arity: several object slots, since "one bet per object slot, every action" (Fig 1 :10) and "The residual is indexed by object slot, not aggregated." (Fig 1 :19). Symmetry: the observational input is symmetric under relabellings that preserve the same conditional independence statements, which is exactly why one graph is not identified from it; the intervention input breaks that symmetry because a do-operation has a direction and a target. Scale: one agent acting in one habitat at a time, with a possible round trip to a population of searchers. The question is about the single-agent loop, not about funding or institutions.

**One line per domain: actors, currency, anchor.** A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 The control loop | agent, belief `b`, library `Γ`, action `a`, observation `o'`, slot residual `R` | residual per slot; terms minted or refused | the ground through RLVR or an experiment, Fig 1 :6-7 and :23 | partition: does acting enter the loop at all |
| D2 Causal composition | variable slots, seven bonds, negation, the graph as molecule | composable terms in `closure(Γ)` | settlement by the ground | partition: which bond carries cause |
| D3 The habitat of intervention | the world, the do-operation, instruments, other frames | causal contact | the ground that does not update, Fig 10 :24 | partition: where capability lives |
| D4 Verification of the claim | expert readers, the packet, the residual | agreement versus residual | the ground, never agreement | union of checking and budget questions |

**Partition or union.** D1 to D3 are partitions of one loop at different levels of description; D4 is a union of an evidence question and a budget question, so it needs its own loop (Fig 9 :54). I keep all four verdicts separate and never average them.

**Order by dependency (Fig 3).** Perception first (the slot and its residual), then vocabulary (terms for what an intervention affords: do, production, negation), then the objective (say what counts as causal progress, not predictive progress), then planning (which variable to intervene on), then learn and carry. The chain is "ordered by dependency, not by importance" (Fig 3 :20). Effort spent above a break arrives at a step that cannot use it.

Strain test before quoting: a line is only used if it fits without forcing. Where it strains, it governs a different quantity and the census is redone. Two strains were found and are recorded in §6 and in `11_audit.md`.

---

## 2. Figure census (bearing and verdict, before the findings)

| figure | bearing on this residual | verdict |
|---|---|---|
| 1 The Agent | action is a first-class loop operator; ground is the only metric; residual per slot | action is in the loop, so intervention is not an optional add-on |
| 2 The Ground | an anchor is a measurement or experiment; correlation disqualifies a verdict | observation drawn from one pool cannot corroborate |
| 3 Dependency Chain | vocabulary and objective are the middle link with the fewest instruments | the bottleneck is terms for what an intervention affords |
| 4 The Membrane | methods cross up, head starts come down; round trip has a gap | a named architecture is a recording, not the generator |
| 5 Mint Pipeline | support, reach, novelty; fifth kind refuted; shape as ordinary term | construct needs a mint; revise needs a refusal |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improve from worse ones | an assumption imported from the world can identify a graph, but it is an import |
| 7 Room Chain | agreement compounds, evidence does not | a crowd of agreeing systems cannot settle the question |
| 8 Union Surplus | closure is idempotent; search that finds nothing proves nothing | a failed search is a verdict, not silence |
| 9 Leave / Arrive | describe the residual before choosing a frame; filters are not witnesses | name the effect first, the algorithm second |
| 10 Ground Maintainer | bring a characterised residual, never the source; verifier non-access | send the refuter first, the theory second |
| 11 The Habitat | capability is agent-and-habitat; contact is the thing that changes | the capacity is not a property of the model alone |
| 12 The Bond | ordered production versus sequence; negation is not a bond | causation is a bond, revision is a unary operator |
| 13 Minimum Viable Set | composition crosses kinds; reach is derived and can fall | structure, not a seventh primitive, is owed |
| Operators table | `⇒` production, `→` sequence, `¬` negation | distinguishes construct from predict and from revise |
| Symbols table | `R` is the aim; the ground is the anchor | fixes the meaning of the residual and the anchor |

---

## 3. Findings

### F1. Acting is inside the loop, so intervention is a structural requirement, not an implementation detail (decisive for D1)

Fig 1 :9: "perceive · plan · act · predict". Fig 1 :23: "The ground enters as the only metric." Fig 1 :10: "one bet per object slot, every action".

A system restricted to observation executes three quarters of the loop. It has `o'` but no `a` that changes the world, so it never produces the new observation that a do-operation would produce. The residual remains indexed by slot, and a slot whose discriminating evidence can only come from acting stays live. Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." A model trained to minimise average prediction error can therefore be globally near zero with one live causal slot, which is a legal state by Fig 1 :13, and it will not look for the thing that would settle that slot.

**Status: triangulated** across Fig 1 (loop topology) and Fig 11 :40 (contact changes or does not change). **Refuter:** show a figure reading in which `a` is frame-internal bookkeeping rather than world contact, so acting does not change what the ground returns. If that holds, intervention becomes optional and F1 falls.

### F2. Causation is an ordered bond that observation alone cannot recover (decisive for D2)

Fig 12 :77: "A produces B; B did not exist before" defines production `⇒`, with symmetry "no". Fig 12 :72: "A then B; B needs A to have happened" defines sequence `→`, also ordered but weaker. Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."

Observation supplies co-variation and temporal order, which can support sequence and association. It does not by itself supply the production relation, because several directed graphs encode the same conditional independencies. The world source He and Geng (JMLR 2008) states the same effect in different terms: "Because we cannot distinguish the different directed acyclic graphs (DAGs) in a Markov equivalence class learned from observational data, we have to collect further information on causal structures from experiments with external interventions." I read their abstract on 2026-11-23. This is corroboration from the causal-learning field, not a figure line, and it does not decide the verdict.

Stronger figure support: Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Two models with the same variables but different bond arrangements are different substances, and the difference is invisible in the ingredient list. Intervention is the operation that makes the difference visible.

**Status: triangulated** across Fig 12 (bond typology), Fig 13 (cross-kind composition), and Fig 6 (import of an assumption). **Refuter:** derive the ordered production bond from a symmetric bond over the same ingredients, with no intervention and no imported assumption, or show an observational input that distinguishes two I-Markov-inequivalent graphs without any extra assumption. Either would collapse the distinction F2 rests on.

### F3. Revision is negation, and a system without it can only accumulate (decisive for the "revise" half)

Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so". Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate". Fig 12 :140: "A vocabulary that cannot refuse can only accumulate."

A model that reweights edges after new data has not revised in the figure's sense. It has kept every term and changed a parameter. Refusal adds a term that says a held term is false and removes the refused term's standing to be composed over. Fig 6 amendment :42: "A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted." So the reach, not the library, is what shrinks when a causal model is genuinely revised.

The selector for which held term to refuse is already recorded. Fig 5 :58: "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at". A causal edge that keeps being wrong despite more observation is the candidate for refusal. Intervention supplies the fresh observation that makes the persistence measurable.

**Status: triangulated** across Fig 5, Operators table, and Fig 12. **Refuter:** exhibit a system with no negation operator that genuinely refuses a held causal claim, so that a term loses standing to be composed over without a refusal term being added. If that is possible, this finding is wrong.

### F4. The capacity is agent and habitat, not the model alone (decisive for D3)

Fig 11 :39: "And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

An AI system with no way to act on the habitat has no intervention channel, so no amount of internal optimisation creates one. This is the same move as asking what generates lift rather than whether the thing is a bird (Fig 11 :41). The causal-learning literature instantiates the habitat half: Méndez-Molina, Morales and Sucar (PMLR 2022) write that "the interventional nature of the data generating process in RL favors the discovery of the underlying causal structure" (abstract read 2026-11-23). CORE (Sauter et al., AAMAS 2024) states that "passive observations alone are not enough to distinguish correlation from causation" and formulates causal discovery as a POMDP with informative interventions (abstract read via indexed PDF text 2026-11-23).

**Status: single-source for the figure verdict** (Fig 11 only, corroborated by two ML-world sources and one human-cognition source from a genuinely different field). **Refuter:** a ground reading in which an agent-only improvement moves the ground, that is, changes what the anchor returns without changing contact. Fig 11 :72 already names this as the experiment that would refute the capability claim. Until it is run, the verdict stands as `candidate`.

### F5. The middle link is vocabulary and objective, and it has the fewest instruments

Fig 3 :7: "it has terms for what things afford: what can be moved, opened, joined, blocked". Fig 3 :10: "it can say what would count as progress here, in its own terms". Fig 3 :26 says this middle link "has neither, so it attracts the least attention and the fewest instruments." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

For this question the missing vocabulary is the do-operation, the production bond, and negation. The missing objective is a score that counts causal progress rather than predictive accuracy. The world literature has built those terms (do-calculus, interventional equivalence classes, budgeted intervention design), which means the link is not empty in the world; it is simply under-instrumented relative to the size of the field. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Scaling a prediction objective cannot rescue a vocabulary that cannot express an intervention.

**Status: triangulated** across Fig 3 and Fig 5 :12 ("new: extend perception, aim the probe here"). **Refuter:** show a published instrument that measures causal progress with the same directness that a score measures prediction, and show that the field's bottleneck has therefore moved. That would not refute the figure, only its application here; I record it as a scope limit rather than a hidden strain.

### F6. Imported assumptions can identify a graph from observation, and they are imports

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 6 :14: "the only operator that moves the wall". Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."

There are observational identification results that rely on functional-form assumptions, such as non-Gaussian noise or additive mechanisms. These do not refute F2. They import an assumption from outside the observational data, which is exactly a new atom by Fig 6. Fig 6 :25: "An import adds no atom to the world." The world does not gain a primitive; the frame gains access. The honest report is that such methods buy identifiability by paying with an assumption, not that observation alone suffices.

This matters for the pre-registered refuter in §4, which must be stated precisely enough not to fire on a method that imports an assumption.

**Status: single-source for the figure mechanism** (Fig 6), with world corroboration from Yang, Katcoff and Uhler (ICML 2018) who distinguish observational MEC from interventional I-MEC, and Li, Jaber and Bareinboim (NeurIPS 2023) who define S-Markov over multiple domains. **Refuter:** show a method that identifies a directed acyclic graph from a single observational distribution with no functional-form assumption, no prior causal knowledge, and no import. If one exists, F2 and F6 both need re-census.

### F7. A rounded-up answer is a kind of thing, never a named architecture

Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 9 :27: "describe it before you go looking, or". Fig 8 :53: "Residual first, frame second." Fig 4 :23: "Only methods cross up. Only head starts come down."

The figures return the shape of a system that can do this: one that acts, ranges a per-slot residual against a non-updating ground, composes an ordered production bond, and can refuse. They do not return a network architecture, an algorithm name, or an accuracy target. Naming one is a binding from the engineering frame, provenanced as such. The canonical usage rule is explicit that the framework returns "a shape, not a name". This is why the outreach artifacts ask a checker what they would count as a failure before offering any theory.

**Status: triangulated** across Fig 9 and the canonical figures README. **Refuter:** a figure passage in which a specific architecture is derived from the loop rather than bound onto it. None was found.

### F8. Agreement from a shared evidence pool is not a second witness

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 7 :13: "agreement compounds, evidence does not". Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

The world sources read for this solution divide into two pools. Six are ML or causal-inference papers that share the Pearl framework, Markov equivalence, and the same vocabulary; their agreement is one pool talking. Two are developmental-psychology papers (Sobel and Sommerville 2010, Frontiers in Psychology; Lapidow and Walker 2020, Cognition) working on children's interventions with gear toys and lightboxes, which is low overlap with the ML pool. Their agreement with the shape is weaker evidence of a different kind, but it is from a genuinely different field. The simulated second seat in `11_audit.md` shares this solution's evidence pool and is therefore not corroboration.

**Status: triangulated** across Fig 2, Fig 7, and Fig 9. **Refuter:** an independent ground reading, not a third agreeing document. Until one exists, no amount of source count changes the verdict.

### F9. The benchmark is a substituted habitat, so a synthetic solve proves wiring

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :67: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."

Much of the interventional-causal-discovery literature evaluates on synthetic graphs and simulators. That is legitimate for wiring, and the strongest papers in the pool say so: CORE reports generalisation to unseen graphs and CAASL reports evaluation on synthetic data and a single-cell simulator. A system that solves those has demonstrated that its parts work together. It has not demonstrated capability in the figure's sense, because the habitat was substituted and its actors were chosen by the experimenter. Fig 11 :69: "what you unintentionally introduced is invisible until it acts."

**Status: single-source** (Fig 11), corroborated by the world sources' own statements of their evaluation settings. **Refuter:** a deployment in an unauthored habitat where the residual and its contact cascade were not specified by the experimenter, with the ground still paying. That is the experiment that would move this from `specified` toward `grounded`.

---

## 4. Pre-registered refuter (written before the conclusion)

Per `THE_FORMULA.md` direction discipline and Fig 5 :65: the preference is bound as an ordinary term and written down before the run. The shape claim is refuted if any of the following fires:

1. A figure re-census shows that `a` in "perceive · plan · act · predict" (Fig 1 :9) is frame-internal bookkeeping and does not change what the ground returns. Then intervention is not structurally required (kills F1).
2. The ordered production bond `⇒` is derived from a symmetric bond over the same ingredients without an intervention or an import, or a vocabulary is produced that can name a route with only a state and no structure (kills F2 and F3).
3. A system with no negation operator is shown to refuse a held causal claim so that the term loses standing to be composed over, with no refusal term added (kills F3).
4. A ground reading shows a system with no action on its environment settling a slot that observational equivalence leaves open, with no functional-form assumption, no prior causal knowledge, and no import (kills F2, F6, F4).
5. An agent-only change is shown to move the ground without changing contact (kills F4 through Fig 11 :72).

Explicitly **not** a refuter: "an observational method identified a DAG". Many do so by importing a functional-form assumption, which F6 predicts. A refuter that ignores the import would fire on the method the framework already accommodates, and would therefore be a bad instrument.

If any of 1 to 5 holds, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with a system name (F7, Fig 9 :27).
2. Separate the two verbs. "Construct" is a mint; "revise" is a negation. They have different guards and different effects on the reach (F2, F3).
3. Report the habitat with the model. Ask what the system can act on, not only what it can fit (F4).
4. Treat imported assumptions as imports, with provenance and a shadow test (F6, Fig 6 :23).
5. Do not count agreeing papers as agreeing frames when they share a pool (F8).
6. Keep synthetic results labelled as wiring (F9).
7. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Send the generator, which is the residual, the derivation, and the refuter, not the conclusion.

---

## 6. Canonical usage check and retraction log

Read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, which says the quotes are the authority and that "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and `FRAMEWORK/figures/THE_FORMULA.md`, which supplies the mode rule and the three-question step 7.

| earlier reading in this audit | status after the check |
|---|---|
| F1 called "structural requirement" | **Narrowed, not retracted.** It is a requirement of the loop as figured, not a claim that every AI product has that loop. The mode is `specified`. |
| "Observation alone cannot recover causation" in F2 | **Narrowed.** Observation plus an imported functional-form assumption can. F6 now carries that case explicitly, and refuter 4 was rewritten so it does not fire on imports. |
| F4 "capability is agent and habitat" | **Canonically confirmed.** Fig 11 :39 is verbatim. Agreement from two ML sources and one psychology source is corroboration only; the figure decides. |
| F5 called a "bottleneck" | **Retracted as an empirical claim.** I have not measured the field's attention. What I can say from Fig 3 :26 is that the middle link has the fewest instruments in the framework's own account. The field-specific wording is removed. |
| Apparent strain: Fig 1 calls the ground "RLVR" while causal discovery has no scalar score | **Not a figure strain after re-census.** Fig 1 :6-7 names one ground for one loop; Fig 2 :29 defines an anchor generically as "A measurement, an experiment, a counter, a market, a patient outcome". RLVR is an instance of an anchor, not a restriction on what may anchor. Re-census dissolves it. |
| Apparent strain: Fig 6 says import moves the wall while causal identification from observation is sometimes possible | **Not a strain.** F6 re-census: the functional-form assumption is the imported atom. Different object from the data, so no contradiction. |
| "Shape, not a name" applied to algorithms | **Canonically confirmed with scope.** The phrase governs a missing primitive. Here it governs the absence of a figure-derived architecture, which is a different but related limit: Fig 9 :32 gives a kind of thing. Both are stated, neither silently erased. |
| The world sources all agree | **Declared as one pool plus one low-overlap pool.** Six ML papers share the Pearl/Markov vocabulary; two psychology papers are low overlap. No source is counted twice as a witness. |

---

## 7. Strains, gaps, and the honest stop

- **Live strain, named:** Fig 1 :6 names `ground: RLVR`, a verifiable reward. For causal discovery the reward would have to be a causal-contact signal, not an association score. Whether such a reward can be made verifiable at scale is an instrument question, not a figure question. I leave it open rather than smoothing it.
- **Live strain, named:** the human-cognition sources show that children select informative interventions, yet Sobel and Sommerville (2010) also find that not all self-generated action produces equivalent learning. The figures say only that action changes contact. The quality of the action is a world detail, and Fig 5 :12 already sorts "new: extend perception, aim the probe here" from merely firing the machinery.
- **Gap:** no figure line names an architecture, no world source I read settles which deployed AI system has this capacity, and no ground reading was taken. So the answer to "can AI systems" is a shape with a mode, not a yes-or-no measurement. "Unreachable is a verdict here, not a silence" (Fig 13 :134).
- **Re-census count:** two apparent strains, zero figure contradictions, one empirical overstatement retracted.

## 8. Cross-check with the world sources, kept subordinate

Every world source was opened on 2026-11-23 and is recorded with a quote in `10_source_ledger.csv`. None overrules a figure. None conflicts with the figure verdict. The ML pool predicts that interventional data refines or removes an equivalence class, which corroborates F2 and F6. The psychology pool predicts that acting gives information observation does not, which corroborates F1 and F4 from a low-overlap field. The full list and the per-source predictions are in `09_watson_answer.md` §WORLD.

**Verdict of this audit:** the figure verdict is `specified`, ungrounded, candidate. D1, D2 and D4 are triangulated. D3 is single-source for the figure with low-overlap world corroboration. There is no `grounded` claim in this folder.
