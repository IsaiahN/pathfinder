# Figure-grounded audit: can evolutionary dynamics explain the emergence of cooperation in networks?

**Mode of this document: `specified` on the per-domain claims, `general` on the shape and the limit.** Not `grounded`. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No experiment was run here.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*, opened 2026-11-22: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Source of figure quotes.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the verbatim SVG extract. Every quoted string below is a substring of that file. Citations use `Fig N :line`. The canonical usage rule in `FIGURES_README_canonical.md` governs: "a reading that makes one contradict another has misidentified its domain, not found a flaw."

---

## 0. The residual, stated in effect terms

The question contains a prediction and an observation that do not agree.

- **Prediction, from the one-shot incentive frame.** In a single interaction where cooperation costs `c` and the temptation payoff `T` exceeds the mutual-cooperation payoff `R`, the payoff-maximizing actor defects. The actor faces `T > R > P > S`. Nothing in that frame returns "cooperate" as the best reply.
- **Observation.** Cooperation persists and recurs in networked populations. It is not a one-off anomaly; it is a stable pattern across empirical and experimental systems (see the world sources in section 6 and `09_watson_answer.md`).
- **Residual.** `R = |Γ(b,a) − o′|` per slot. At the cooperation slots the prediction `Γ(b,a) = defect` misses the observation `o′ = cooperation present and stable`. There is positive live mass `R⁺_s > 0` at those slots. Fig 1 :13: "a global R near zero with one live slot residual is a legal state". A low aggregate defection rate would not dissolve the residual; it would hide it.
- **What the question asks.** Whether the frame called evolutionary dynamics (selection, replication, mutation, drift over generations on a graph) can close this residual, given that the short-term incentive keeps pointing the other way.
- **What an answer would look like, bound as an ordinary term** (`THE_FORMULA.md`, "Direction"): a term `φ` such that (i) it composes from what the frame already holds, (ii) it is not already in its library, (iii) `cost(φ) + left(R,φ) < cost(R)`, and (iv) the ground settles it. If no such `φ` is reachable, the honest output is a shape plus a refuter, not a name. Fig 9 :32: "you get a kind of thing, never the answer itself".

A preliminary warning: the question already names the frame. Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit" and Fig 8 :53: "Residual first, frame second." So the frame-first phrasing is itself an object of the audit, not a neutral starting point.

---

## 1. Domain census (before choosing any figure line)

### 1.1 The residual by arity, symmetry, scale

- **Arity.** Cooperation is a relation, so arity is at least two; "in networks" makes it a set of N slots joined by pairwise edges, with second-order and third-order relations among them. It is not a single scalar. Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
- **Symmetry.** The payoff matrix is symmetric across the two players (each faces `T > R > P > S`), while the desired outcome (mutual cooperation) is a symmetric state that is not the one-shot equilibrium. Selection is ordered in time: generation t produces t+1, so it is a sequence bond, not a symmetric one. The question "is cooperation worth it here" is a threshold comparison, not a symmetric join. Fig 12 :92: "Under a symmetric bond, k operands have k! spellings and one term". The defection-versus-cooperation choice is not such a spelling.
- **Scale.** The incentive is individual and one-shot. The proposed explanation is population-level and multi-generational. That is a membrane crossing, so the rule about what may cross applies (Fig 4 :22: "Only methods cross up. Only head starts come down."). The cooperation pattern at the population scale is not a replay of an individual decision; it is a different term at a different level.

### 1.2 One line per domain: actors, currency, anchor

A domain needs a nameable anchor. Where none is available, it is not yet a domain.

| domain | actors | currency | anchor (nameable, non-updating) | question type |
|---|---|---|---|---|
| D1, the one-shot incentive frame | an individual actor choosing C or D in one round | immediate payoff (T, R, P, S) | the realized payoff counter; what was actually paid, not the declared matrix | a per-slot prediction |
| D2, the network habitat | nodes (agents) and edges (interaction ties), plus second-order relations | contact and interaction opportunity | measured interaction structure, who met whom, which does not move when a model changes | habitat enumeration and composition |
| D3, the evolutionary-dynamics frame | strategies or replicators (C, D, tit-for-tat, Pavlov, etc.) in a population | fitness and reproductive success | observed cooperation frequency over generations, from experiment or field data | selection dynamics |
| D4, the verification frame | models, instruments, experiments, and analysts | residual and independent agreement | the empirical cooperation record, which does not update on any model's opinion | settlement |

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." In D1 the declared payoff matrix is a convention, not an anchor; the realized payment is the anchor. That distinction matters later, because a convention that decides an outcome has stopped being a convention (Fig 10 :47: "a convention that decides an outcome has stopped being one").

### 1.3 Partition or union

This is a **union**, not a partition. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." The payoff environment changes which strategy is fit; the network changes who meets whom and therefore the effective payoff; selection changes strategy frequencies, which changes the environment each actor faces; and the measurement of "emergence" picks which residual counts. A lever that clears the region where only one condition holds leaves the intersections standing (Fig 9 :57-58: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."). Therefore verdicts are kept per domain and never averaged into a single "evolutionary dynamics can/cannot explain cooperation" percentage.

### 1.4 Order by dependency

Fig 3 :20: "The chain is ordered by dependency, not by importance." The dependency order for this residual is:

1. **Perception:** locate the live slot, the cooperation slot where the one-shot model misses (Fig 3 :5).
2. **Vocabulary:** have terms for what a situation affords, including the bond types. A vocabulary of ingredients cannot name a route; Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." Naming "cooperator" and "defector" as ingredients is not enough to name the repeated interaction that changes their payoff.
3. **Objective:** say what would count as progress, that is, what observation would count as cooperation having emerged (Fig 3 :10).
4. **Planning:** construct the evolutionary model under incomplete information.
5. **Learn and carry:** verify against the ground and carry the method.

The likely break is between 2 and 3. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." A model can name strategies (vocabulary) and still lack an instrument for what would count as the emergence of cooperation (objective). Fig 3 :22: "A step whose input never arrives cannot be diagnosed, only its predecessor can."

One ordering rule precedes all five: refuse before mint. `THE_FORMULA.md` step 2 sorts a residual whose content is that a held regularity is false into REFUTED, which owes a refusal rather than an explanation. The statement "short-term incentives favor defection" is **not** a false regularity to refuse. It is the correct prediction of D1 inside its own one-shot closure. Refusing it would be aiming the refusal at the wrong term. This is recorded as a retraction in section 7.

---

## 2. Figure census, quoted before concluding

The following lines were selected from the verbatim extract before the findings were written. A line that only fit with a strain was sent back to the census rather than smoothed over (section 5).

| figure | verbatim line | bearing |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | cooperation must be read per node or type, not as one global rate |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | a mean cooperation level can erase the live residual |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the ground is the observed cooperation record, not model agreement |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreeing models are not corroboration when they share a payoff pool |
| Fig 2 :40 | "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | independence decides whether multiple models mean anything |
| Fig 4 :22 | "Only methods cross up. Only head starts come down." | the population-level explanation is a method crossing a scale membrane, not a recording of one choice |
| Fig 6 :21 | "MINT composes inside the closure and can never add an atom." | no search inside a one-shot payoff closure adds a network atom it lacks |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | import is conditional on which atoms the frame already holds |
| Fig 8 :32 | "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." | more one-shot iterations do not by themselves produce cooperation |
| Fig 8 :45 | "Two frames together reach what neither reaches alone." | the union of payoff and graph frames has a surplus |
| Fig 9 :27-28 | "describe it before you go looking, or any frame you pick will seem to fit" | the question's frame-first phrasing is an apophenia risk |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | the output is a shape, not a named mechanism |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | the four conditions must be unbundled |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | a payoff threshold is a budget filter, not the verdict |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | do not hand the checker the full model before asking for a refutation |
| Fig 11 :39 | "And capability is a property of agent-and-habitat, never of the agent alone." | cooperation lives in the agent plus network |
| Fig 11 :40 | "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." | retuning a strategy alone cannot explain network cooperation |
| Fig 11 :49 | "An actor's valence is relative to the residual, not a property it carries." | cooperator and defector are not fixed kinds |
| Fig 11 :51 | "No standing list of good actors survives a change of residual." | the label "cooperative strategy" is residual-relative |
| Fig 12 :112 | "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." | the explanation needs ordered and comparative bonds |
| Fig 12 :121 | "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." | repeated interaction is a cycle; the one-shot result is a chain |
| Fig 13 :115 | "The set is closed. The arrangements are not. That gap is why import exists." | no new primitive is needed; new arrangements over held ones are |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence" | the specific mechanism is a declared gap |

Note on Fig 9 :54 and Fig 9 :55: both are quoted at length in finding F6. Note on Fig 2 :40: the quoted string includes the leading clause "disqualifying for a verdict:" because that is part of the source line; quoting only the second half would still be a substring, but the full clause carries the valence rule.

---

## 3. Findings F1 to F10

Each finding states its mode, quotes the governing figure line verbatim, gives the strain test result, and ends with a refuter. Modes are `general` (structural), `specified` (falsifiable shape claim about this question), or `grounded` (settled by measurement). None here is `grounded`.

### F1: The question selects the frame before describing the residual

**Mode: `general`.**

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit". Fig 8 :53: "Residual first, frame second."

The question asks "Can evolutionary dynamics explain...?" That binds the frame in the question. If we then search evolutionary dynamics and find a mechanism, we have not learned that evolutionary dynamics is the right frame; we have found what we went looking for. Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause".

The effect description is available without the frame: a per-slot prediction of defection misses an observation of stable cooperation. Only after that description do we ask which closure predicts its shape. The world literature does in fact offer more than one candidate closure (kin selection, direct and indirect reciprocity, network reciprocity, group selection, punishment, conformist learning), so the frame is not unique on the evidence (Wikipedia, "The Evolution of Cooperation", 2026: "In a 2006 paper Nowak listed five mechanisms by which natural selection can lead to cooperation"). Multiple candidate closures are exactly the condition in which frame-first selection is dangerous.

**Strain test:** none. The line governs the *order of inquiry*, not the *truth of evolutionary dynamics*. No re-census needed.

**Refuter:** show a residual-first description that selects evolutionary dynamics as the unique closure predicting cooperation's shape, with the other candidate closures failing the one-pass match (Fig 9 :29: "matching is a one-pass check, not a search"). If that succeeds, the frame-first phrasing is harmless. Until then the claim is an adopted frame, and the shape is reported without it.

### F2: Cooperation and defection are relations with residual-relative valence, not actor kinds

**Mode: `specified`.**

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51: "No standing list of good actors survives a change of residual."

The question speaks as though "defection" and "cooperation" are fixed strategies with fixed signs: defection is the short-term winner, cooperation is the puzzle. The figures say the sign is not carried by the strategy. The same act that is defection relative to a one-shot payoff residual is cooperation relative to a repeated-interaction residual, and a strategy that is a benefactor to one residual is a malfactor to another. What fixes valence is the ground against which the slot is measured.

This is not a terminological quibble. It changes what "emergence" means. Emergence is not the appearance of a new kind of actor called a cooperator; it is the appearance of a relation whose valence flips when the residual is held at the network and generational scale instead of the one-shot scale. The world literature corroborates the mechanism shape at low overlap: Carter and Wilkinson (2013, Proceedings of the Royal Society B) found that "Food received was the best predictor of food given across dyads, and 8.5 times more important than relatedness", so whether the act reads as kin altruism or as reciprocity depends on which residual the instrument resolves.

**Strain test:** apparent tension with Fig 1 :19, which indexes residuals per slot and might suggest fixed slot identities. Re-census: Fig 11 governs the *valence* of an actor relative to a residual; Fig 1 governs the *indexing* of the residual itself. Different objects. Not strained.

**Refuter:** exhibit a context-independent classification of an actor as cooperator or defector that predicts its effect on the ground across changed residuals (changed payoff matrix, changed network topology, changed time horizon). The vampire-bat result above is a candidate disconfirmation of such a classification: reciprocity beat relatedness once association was held constant.

### F3: Cooperation is a property of agent and habitat, not of the agent alone

**Mode: `specified`.** This is the strongest per-domain finding.

Fig 11 :39: "And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." Fig 11 :43: "The habitat is enumerated, never composed."

The network in the question is not a container that the strategies run inside. It is part of the term that closes the residual. The actors, conditions, and relations must be read off the world, not invented: who interacts with whom, how often, with what memory, and what second-order effects cascade from a local defection. Fig 11 :52: "And contact cascades." Scoping the habitat to direct neighbours is how a third-order effect goes unseen.

Consequently, an evolutionary explanation that only retunes the strategy (a more forgiving tit-for-tat, a higher mutation rate) while leaving the contact structure fixed is an improvement of the agent in isolation. It does not change contact, so by Fig 11 :40 it changes nothing at the ground. The world literature agrees from a different closure: Szabo and Fath (2007, Physics Reports) state that "The major theme of the review is in what sense and how the graph structure of interactions can modify and enrich the picture of long term behavioral patterns emerging in evolutionary games." The graph is not scenery.

**Strain test:** apparent tension with Fig 13, where network is one of six held structures and might be treated as a fixed atom. Re-census: Fig 13 licenses the atom "network" (Fig 13 :24: "that entities relate, and influence travels"); Fig 11 governs the habitat as the enumerated field of contact for a particular residual. The atom is held; its binding to a specific network is enumerated from the world. Different quantities. Not strained.

**Refuter:** produce a ground measurement in which an agent-only change (a different strategy rule, with the interaction graph, encounter rate, and time horizon all held fixed) raises stable cooperation without changing any contact variable. If that is shown, Fig 11 :40 is wrong at this scale and F3 falls.

### F4: The one-shot defection result is a chain; cooperation needs a cycle

**Mode: `specified` on the structure, `general` on the bond definition.**

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." Fig 12 :72: "A then B; B needs A to have happened". Operators table :34: "the only bond a flat chain can express, so every term today is a sequence whether or not it should be".

The short-term-incentive result has the form of a chain: defect, collect the temptation payoff, encounter ends. There is no re-entry, so the chain cannot close into a cooperative equilibrium by construction. Cooperation in the networks literature is exactly the re-entry case. Wikipedia, "The Evolution of Cooperation" (2026): "whether cooperation is supported at all, depends crucially on the probability (called ω [omega]) that the players will meet again, also called the discount parameter or, figuratively, the shadow of the future." And: "When ω is low – that is, the players have a negligible chance of meeting again – each interaction is effectively a single-shot Prisoner's Dilemma game, and one might as well defect in all cases". The shift from a chain to a cycle is the shift from ω near zero to ω high enough.

Two additional bonds are owed. Comparison (⋛) is needed for the threshold question "is future cooperation worth present restraint"; Operators table :52: "a goal is a comparison, which is why a vocabulary without it cannot state one". Sequence (→) is needed for the ordering "I cooperate now, you respond later"; Fig 12 :72: "A then B; B needs A to have happened". A vocabulary holding only the payoff atoms can name the state "defection pays now" and cannot name the route "cooperation pays across rounds".

**Strain test:** a genuine limit, not a strain. Fig 11 :50 says mutualism and parasitism are relations, and one form of mutualism pays immediately, so a one-shot chain *can* close when both acts are simultaneously beneficial. The cycle requirement therefore governs the costly-cooperation case, which is the case the question poses ("short-term incentives favor defection"). The immediate-benefit case is outside the residual. Named as a scope condition in `06_isomers_and_order.md`, not hidden.

**Refuter:** exhibit a stable cooperation equilibrium in a one-shot interaction with no re-entry of output as input, where cooperation is nevertheless costly relative to defection for each actor in that round. Under the stated scope that would break F4. If the equilibrium relies on simultaneous immediate benefit, it is mutualism and does not bear on this residual.

### F5: Import is conditional on which atoms the frame already holds

**Mode: `general`.**

Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."

If the one-shot payoff frame holds only the payoff matrix and a fitness update, then iterating it forever does not add a network or a cycle atom. An import from a frame whose closure differs (graph theory, interaction topology, repeated games) is owed, with a source gate and a shadow test (Fig 6 :14: "the only operator that moves the wall"; Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ.").

But this is **conditional**. The question's phrase "evolutionary dynamics" in the research literature usually already includes the network and the cycle. Szabo and Fath (2007): "In its evolutionary form and especially when the interacting agents are linked in a specific social network the underlying solution concepts and methods are very similar to those applied in non-equilibrium statistical physics." For that frame the atoms are already inside the closure, so no import is owed; the frame is searching its own arrangement space (Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists.").

This is the site of my first-pass error, recorded in section 7: I initially wrote "an import is owed" without the condition. The corrected claim is that *either* the frame already holds the atom, in which case the remedy is more search (Fig 6 :49: "more search at the same reach: is it in here and unfound?"), *or* it does not, in which case an import is owed. Underivable-in-principle and unreachable-at-this-budget are different facts with different instructions (Fig 8 :40-43).

**Strain test:** apparent conflict resolved. Fig 6 says only import moves the wall; Fig 8 says why. They govern the same operator at different levels of explanation. No strain.

**Refuter:** derive the network-and-cycle atom from the one-shot payoff and fitness atoms alone, inside the closure, with no graph-theoretic or repeated-game input. If that succeeds, no import is owed for even the narrow frame, and the conditional collapses to a single case.

### F6: The question is a union of four conditions, with separate verdicts

**Mode: `general` on the union, `specified` per domain.**

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57-58: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

The four conditions from the census (D1 payoff environment, D2 network habitat, D3 selection dynamics, D4 measurement of emergence) overlap. This is why different literatures can all claim to have "solved" cooperation while disagreeing: each clears the region where its own condition binds and leaves the intersections standing. A single lever, for example "add a reputation mechanism", clears the indirect-reciprocity region and leaves kin-selected and group-selected cases as they were.

The verdicts are therefore kept apart:

| domain | verdict | status |
|---|---|---|
| D1, one-shot incentive | the one-shot prediction of defection is correct **inside D1**; it is not a false term and owes no refusal | `specified`, triangulated (Fig 1 :13, world game theory) |
| D2, network habitat | cooperation is agent-and-habitat; the contact structure is part of the closing term | `specified`, triangulated (Fig 11 :39-40, Fig 13 :24, Carter 2013, Szabo and Fath 2007) |
| D3, selection dynamics | selection changes strategy frequencies; it does not by itself add the graph or the cycle atom | `specified`, triangulated (Fig 6 :21, evolutionary game theory) |
| D4, measurement | "emergence" is settled only by a ground that does not update on the model | `general` with `specified` instrumentation owed, single-source on the figure side plus the source-discrimination essay |

No averaging. Fig 12 :125: "A composition costs in two currencies, and they do not add." The payoff currency and the contact currency do not add into one "amount of cooperation explained".

**Strain test:** none after re-census. The union reading was adopted because the four conditions demonstrably overlap, not because a partition was hard to find.

**Refuter:** show that the four conditions partition the cases, each observed cooperation case falling in exactly one, and that one lever generalizes across all of them. Then the union verdict is wrong and a single mechanism answer is admissible.

### F7: Read the residual per slot, not as a cooperation rate

**Mode: `specified`.**

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Symbols table :43-44: "R is measured per slot, never as a single global number."

A reported cooperation frequency of, say, 40 percent is an aggregate. It can be produced by all nodes cooperating 40 percent of the time, or by 40 percent of nodes cooperating always and the rest defecting always. These are different residuals requiring different terms. Fig 1 :13: "a global R near zero with one live slot residual is a legal state". A network can look cooperatively healthy in aggregate while one class of nodes carries a live residual that the average erases.

This is not only a measurement nicety. The world data show exactly this structure: in vampire bats, "Sixty-four per cent of sharing dyads were unrelated" and reciprocal help, not relatedness, predicted giving (Carter and Wilkinson 2013). A pooled "cooperation level" would have missed which dyads were live. The relevant unit is the dyad or node class, not the colony mean.

**Strain test:** none. Fig 1 governs indexing; Fig 2 governs anchoring. Distinct.

**Refuter:** show that the aggregate cooperation rate predicts which node or dyad class carries the live residual, with no loss of slot information. If it does, per-slot indexing adds nothing here and F7 is withdrawn for this domain.

### F8: "Explains" must be settled by a non-updating ground, not by agreement among models

**Mode: `general`, with a `specified` instrumentation requirement.**

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

A claim of the form "evolutionary dynamics explains cooperation" is not settled by the number of models that produce cooperation, because the models share a payoff-and-fitness evidence pool. Agreement among them is the pool talking. Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." The needed anchor is an observation whose value does not change when the model changes: measured cooperation persistence, measured network structure, measured payoff transfers.

The source-discrimination essay sharpens the requirement. *The Hard Problem is About Source* (2026): "If several paths create the same behavior, then behavior is a projection with lossy information" and "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." Observing cooperation rising does not by itself identify its source; kin selection, reciprocity, group selection, and punishment can generate the same reading. What is owed is a discriminating instrument, not a vote among models. Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

**Strain test:** apparent conflict with Fig 8 :45 ("Two frames together reach what neither reaches alone") dissolved by re-census: Fig 8's surplus requires low overlap at the evidence level; Fig 2 :40 disqualifies verdicts from high-overlap agreement. Same independence parameter, two readings, not a contradiction.

**Refuter:** name a measurement of cooperation whose value is invariant under changing the explanatory model, and show that it discriminates among at least two candidate sources (for example, reciprocal help versus relatedness, as Carter and Wilkinson 2013 did). Absent that, "explains" remains a candidate, not a settlement.

### F9: Which mechanism occupies the slot is a declared gap

**Mode: `general` on the limit, `gap` on the value.**

Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line returns kin selection over reciprocity, or a threshold value such as `ω > ω*`, `r > c/b`, or a benefit-to-cost ratio for a given network. The figures constrain the shape of any answer: a relation rather than a kind, agent-and-habitat, cycle-bearing, slot-indexed, ground-settled. They do not select among the mechanisms that the literature supplies. Naming one would be a binding from the world frame, provenanced as such (Fig 8 :50-52), not a derivation from the figures.

The gap is of the *shape-not-a-name* kind, not of the underivable-in-principle kind. It is not a case of searching harder inside a closure (Fig 6 :49); it is a case where the framework's stated output is a kind of thing. It is reported as `unreached`/`gap`, which is a verdict.

**Strain test:** none. The limit is explicit in the canonical README, which says the framework returns "what a missing thing would have to look like (a shape, not a name)".

**Refuter:** a figure line that selects one mechanism, or an instrument that settles the mechanism at the ground for a specified network. Either would close the gap. Until then the gap stands.

### F10: "Explains" stated as a verdict is an output-layer defect

**Mode: `general`.**

Seat Map, failure genera, output layer: "an unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict." And: "The modes are general, specified, and grounded; each is legitimate and the mode must be stated." Fig 1 :24-27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 1 :23: "The ground enters as the only metric."

"Evolutionary dynamics explains cooperation" is a `general`-mode verdict delivered as though it were `grounded`. The honest form is: "Under the figure constraints, any closing explanation must be a cycle-bearing, habitat-inclusive, slot-indexed relation; whether a given evolutionary model supplies one is `specified` and awaits a discriminating ground." The framework's own essay says the same at the level of the loop: *The Recursive Self-Improvement Trap* (2026): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality."

**Strain test:** none. The mode rule governs the *statement*, not the *content*, so it cannot conflict with the content findings.

**Refuter:** exhibit the instrument whose payment settles "explains", state the mode as `grounded`, and show the residual at the ground actually falling. Until then the `specified`/`general` labels stand.

---

## 4. Pre-registered refuter

Written before the conclusion, per the Seat Map: "And a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. **Kind versus relation (F2).** A context-independent actor classification predicts its effect across changed residuals, so valence is carried rather than residual-relative.
2. **Agent-only sufficiency (F3).** An agent-only change that leaves all contact variables fixed raises stable cooperation at the ground. This would falsify the agent-and-habitat claim.
3. **Chain closure (F4).** A stable, costly-cooperation equilibrium exists in a one-shot interaction with no re-entry of output as input.
4. **Union collapsed to partition (F6).** The four conditions partition the cases and one lever generalizes across all of them.
5. **Aggregation suffices (F7).** The aggregate cooperation rate preserves the slot information needed to locate the live residual.
6. **Model agreement as settlement (F8).** An instrument is named whose cooperation reading is invariant under model change *and* which discriminates among candidate sources, and that reading is then used to settle a specific mechanism.
7. **Frame-first harmlessness (F1).** A residual-first census selects evolutionary dynamics as the unique closure predicting cooperation's shape, with rival closures failing the one-pass match.

If any fires, the corresponding finding is withdrawn and the answer in `07_the_tether_answer.md` is retracted. Until one is run, nothing here is `grounded`.

---

## 5. Strains and re-census

| strain | resolution |
|---|---|
| Fig 11 :36 "selection ran" (no maintainer) versus Fig 11 :37 "where a seat exists, something is doing work" (maintainer present) | Two modes of the habitat, not a contradiction. Evolutionary dynamics as posed is the unmaintained mode. The maintained mode (designing incentives, introducing actors) is a different question and is not answered here. Fig 10 :68: "Different actors, a different currency, a different ground, and a lossy transform between." |
| Fig 2 non-updating anchor versus a fitness landscape that populations modify | Re-census: the modified fitness landscape is habitat (Fig 11 :73, "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."). The ground is the measured cooperation outcome. No strain. |
| Fig 13 holds "network" as one of six atoms versus Fig 11 enumerating a specific habitat | Atom versus binding. The kind is held; its instance is read from the world. No strain. |
| Fig 12 mutualism can close in one stroke versus cycle requirement for costly cooperation | Scope condition, not a strain. Cycle governs costly cooperation (the posed residual). Immediate-benefit mutualism is outside it. Named in F4 and `06`. |
| Fig 8 surplus (low overlap) versus Fig 2 agreement-worthlessness (shared pool disqualifies) | Same independence parameter read at two places. No strain. |
| One-shot defection as REFUTED bin versus as a correct within-frame prediction | Corrected by re-census: it is TRANSFERRED inside D1. Recorded as a retraction in section 7. |

After re-census: **no live strain**. The one earlier unqualified claim, the import verdict, is corrected conditionally in section 7.

---

## 6. World sources consulted in this audit

Opened 2026-11-22. Full provenance and quotes in `10_source_ledger.csv`.

- Wikipedia, "The Evolution of Cooperation" (2026), evolutionary biology / game theory. Gives Nowak's five mechanisms, the shadow of the future `ω`, the sucker-bet problem, and the co-evolution result that cooperators end up central and defectors peripheral. Corroborates F2, F4, F9.
- Wikipedia, "Reciprocal altruism" (2026), evolutionary biology / animal behaviour. Gives Trivers, the cheater-detection and repeated-opportunity conditions, and the pigeon result that pigeons "defect instead of a random response or a tit-for-tat in a prisoner's dilemma game against a computer. This may be due to favoring short-term thinking over long-term thinking." Corroborates F2 and the short-term-bias premise.
- Carter, G. G. and Wilkinson, G. S. (2013), "Food sharing in vampire bats: reciprocal help predicts donations more than relatedness or harassment", Proceedings of the Royal Society B 280(1753):20122573. Open access via PMC. Corroborates F2, F7, F8 at genuinely low overlap (animal behaviour, field-controllable measurement).
- Szabo, G. and Fath, G. (2007), "Evolutionary games on graphs", Physics Reports 446(4-6):97-216, arXiv:cond-mat/0607344. Corroborates F3 and F5 at low overlap (statistical physics / complex systems).
- Wikipedia, "Evolutionary game theory" (2026), mathematics / biology. Gives replicator dynamics, ESS, Hamilton's rule `R > c/b`, and Haig's line "For direct reciprocity you need a face; for indirect reciprocity you need a name." Corroborates F3, F5, F9.
- Isaiah N, "The Recursive Self-Improvement Trap" (2026), framework essay. "Natural selection is what the loop looks like when there is no one maintaining the ground." Also the simulacra and prestige rules. Maximal overlap with the figures, so no independent witness weight.
- Isaiah N, "The Library of Babel: Locating The Book of Books" (2026), framework essay. Shape and bundle rules. Maximal overlap, no independent weight.
- Isaiah N, "The Hard Problem is About Source" (2026), framework essay. Source-discrimination and metamerism. Maximal overlap, no independent weight.

Overlap declaration: the three Wikipedia pages and the two framework essays that discuss cooperation share the broad evolutionary-behaviour evidence pool, so they count as one witness for the biology-facing claims, not several. Carter and Wilkinson (2013) and Szabo and Fath (2007) are genuinely lower-overlap witnesses. The framework essays share the framework author's pool entirely and corroborate only the framework-internal claims. No world source conflicts with the figure verdict; the conflict rule was not triggered. Where the literature appears to pressure a finding (multiple mechanisms, so no unique frame), it was returned to the census and sharpened F1 rather than flipping the verdict.

---

## 7. Retraction and confirmation log

Corrections are kept visible. Nothing below was silently erased.

| earlier reading | status after re-census and world check |
|---|---|
| "The question's defection premise is a false regularity and owes a refusal (REFUTED bin)." | **Retracted.** Formula step 2 sorts by what is wrong versus what is missing. "Short-term incentives favor defection" is the correct one-shot prediction of D1. It belongs in TRANSFERRED inside that domain. The missing thing is the cycle and the habitat, not a false term. Kept visible here. |
| "An import is owed to explain cooperation." | **Narrowed to a conditional.** If the frame lacks the network and cycle atoms, import is owed with provenance and a shadow test. Evolutionary game theory on graphs already holds them (Szabo and Fath 2007), so for that frame the remedy is more search at the same reach, not another atom (Fig 6 :49). The unqualified claim is retracted. |
| "Cooperation is a new primitive that the six-term set cannot express." | **Retracted.** Network is already one of the six structures (Fig 13 :24). What is required is an arrangement over held atoms, not a seventh member. Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists." |
| "The figures decide which mechanism is correct." | **Refused.** Fig 9 :32 and Fig 13 :134 return a shape and a gap, not a name. Mechanism selection is a world-frame binding with provenance. |
| "Averaging cooperation across the network is an acceptable measurement." | **Narrowed.** A mean is a budget filter for planning; it is not a witness for the per-slot verdict (Fig 9 :60, Fig 1 :19). |
| F2, valence relative to the residual | **Confirmed and strengthened** by Carter and Wilkinson 2013: reciprocity beat relatedness once association was held constant. |
| F3, agent-and-habitat | **Confirmed** by Fig 11 :39-40 and by Szabo and Fath 2007 on graph structure. |
| F4, cycle versus chain | **Confirmed with a scope condition**: immediate-benefit mutualism is outside the posed residual. |
| F9, mechanism gap | **Confirmed** by the literature's plurality of mechanisms (Nowak's five plus punishment and conformism), which is exactly the condition under which a figure-selected name would be unwarranted. |
| Apparent Fig 11 versus Fig 2 conflict | **Dissolved by re-census**: habitat updates, ground does not (Fig 11 :73). |

---

## 8. Recommendation

1. Lead with the shape, not with a verdict: cooperation is a residual-relative relation, agent-and-habitat, cycle-bearing, and slot-indexed. State the mode on every sentence (F10).
2. Describe the residual before naming a frame (F1). Do not let "evolutionary dynamics" do the selecting.
3. Unbundle the four conditions and give a verdict per domain (F6). Do not average them.
4. State the import condition explicitly (F5). Ask whether the frame already holds the graph and cycle atoms before importing anything.
5. Ask for a discriminating ground, not for agreement (F8). The question that matters is what observation would distinguish reciprocity from kin selection from group selection in a given network.
6. Report the mechanism as a `gap` with a named instrument owed, not as silence and not as a name (F9).
7. Send the generator (the derivation, the per-domain verdicts, and the seven refuters), not a recording of one literature result (Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion.").

---

## 9. Canonical usage check

Two local canonical sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the output limit: "what a missing thing would have to look like (a shape, not a name)", stopping "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest". Applied here in sections 5 and 7.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already decide. Fig 9 :60 is carried from it: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Applied in F7 and in the treatment of payoff thresholds as filters.

Neither source changes a verdict. Both change the *form* of the report: shape not name, lineage recorded, disagreements sent to re-census rather than to a ruling.
