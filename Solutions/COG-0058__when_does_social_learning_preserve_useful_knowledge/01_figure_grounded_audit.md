# Figure-grounded audit: COG-0058, preservation and corruption in social learning

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. None is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* LLM output is *"simulacra"*. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the social-learning question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the receiver's belief before copying. The Symbols table names the exact mixture: *"How far the belief leans on private history versus inherited prior"* (Symbols table :24), with `w_A + w_B = 1`. Social learning is a change in `w`, not a new faculty.
- **a** is the act of copying, teaching, imitating, or conforming.
- **Γ(b,a)** is what the transmitted practice predicts will happen when the receiver performs it.
- **o′** is what the habitat actually returns when it is performed: a payoff, a survival rate, a task success, a patient outcome.
- **s** is the practice-and-receiver pair in a habitat. R is indexed per practice, per receiver and per habitat. It is never averaged into a single "culture works" number.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of a tradition's success but **the sign and duration of its residual across handoffs**: why does some transmitted knowledge keep R small for generations, while other transmitted practices grow R and leave receivers worse off than individual learning would have left them?

State the residual in effect terms only. Do not name "tradition", "norm", "meme", "cumulative culture", or "prestige" as explanations. Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps R small across a chain of transmissions, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* For social learning the legitimate anchor is a consequence measured in the receiving habitat: a fitness payoff, a foraging return, a task success, an experimental outcome, a clinical outcome. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Popularity, prestige, number of copiers, and internal consistency move when pushed. They are instruments at best. The habitat's payment is the ground; the habitat itself updates (Fig 11 :73): *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."*

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: transmitted practice, source frame, receiving habitat, ordered by transmission time. It is a sequence, not a set, so it carries the **ordered** sequence bond (`→`, *"A then B; B needs A to have happened"*, Fig 12 :71-72) and the **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :86-87) for "useful" and "harmful". It is not symmetric: source and receiver are not interchangeable.
- **Symmetry.** A practice is not useful or harmful in itself. "Useful" is a threshold comparison against a baseline, usually the receiver's own individual learning or prior practice. Harm is asymmetric in time: a tradition that becomes maladaptive is not repaired by reversing the copying act (Formula step 1; Fig 12 :71-74).
- **Scale.** Four scales are in view: the single learner's step-by-step loop (Fig 4 one-agent panel), the transmission dyad between one model and one receiver, the population tradition with *"something that ranks what they produce"* (Fig 4 :5), and the intergenerational chain. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21) and the transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The individual learning loop** | learner, Γ, belief b, weighting w | actions and residual reduction | yes: direct performance in the local habitat | admitted |
| **D2 The transmission dyad / membrane** | source model, receiver, the item crossing | what crosses, and the round-trip gap R_T | yes: re-performance of the item in the receiver's habitat (Fig 4 :25-26, :30) | admitted |
| **D3 The population tradition / room chain** | demonstrators, copiers, majority, prestige | agreement and residuals | yes: ground selection between rooms (Fig 7 :35) | admitted |
| **D4 The habitat of the practice** | conditions, relations, models, competitors, tools | contact and cascade | yes: the ground, which does not update (Fig 11 :73) | admitted |
| **D5 The verification frame** | researchers, experiments, reviewers | evidence and residuals | yes: the experimental result, never agreement | admitted, but shares one evidence pool with this derivation in this run |
| **X1 "Culture" as a substance that is good or bad in itself** | tradition | none independent of a habitat | **no** nameable anchor | not a domain yet |
| **X2 "Prestige" as a property of a practice** | high-status model | deference | measurable, but already inside D3 as a model-based bias | absorbed into D3 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that traditions never matter.

### 1.3 Partition or union

D1 and D2 overlap: the receiver's Γ is inside the learning loop, so the dyad is a compound with its own loop. D3 and D4 overlap: transmission happens inside a habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1, bracket fidelity at the handoff:** does what crosses carry its grounding, so the receiver can reapply and re-check it, or is it a recording of one occasion?
- **C2, ground pressure in the receiving habitat:** does the habitat still pay for the practice, and is the receiver's channel to that payment still reachable?

A tradition failing only C1 and a tradition failing only C2 are not different degrees of one failure. They are different compounds and need different instruments. The first needs a provenance and method test; the second needs a habitat and channel test. A single lever, for example "teach the practice more faithfully", clears the region where only C1 holds and leaves the intersection standing, because C2 still binds.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the receiver see what the source does and what the habitat returns?) → 2 vocabulary (does the receiver's Γ have terms for what the practice affords here?) → 3 objective (can it say what would count as progress here?) → 4 planning → 5 learn and carry. Transmission happens at link 5. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* A receiver can copy the visible actions and still have no term for the condition the practice was for. Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not why it persists |
| 2 The Ground | anchor, independence, common-cause and mutual-update collapses | governs the witness rule and prestige failure |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | method up, head start down; recording versus generator; R_T | decisive for C1, item type |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs admission of a practice at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal when the habitat changes |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | decisive for C2 and mirror chains |
| 8 Union Surplus | idempotence; provenance separates convergence from import | governs independence and source tracking |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the honest stop |
| 10 Ground Maintainer | the channel decays, not the ground | governs quick corruption of a still-valid practice |
| 11 The Habitat | valence relative to residual; agent-and-habitat; isolation as substitution | decisive for "same practice, different outcome" |
| 12 The Bond | catalyst, cycle, isomer, level-relative irreducibility | governs why a strength becomes a rigidity |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only (see strain S1) |
| Operators / Symbols | `w` is the inherited-prior weighting; `→` and `⋛` are ordered | governs the shape of the residual |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "cultural traits" only fit by calling a norm a kind of gradient and a tradition a kind of energy. That is a strain, so Fig 13 does **not** govern cultural content. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1).

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about transmission, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Preservation requires a method to cross, not a recording

**Mode: `general` for the membrane rule, `specified` for practice. Domains D1, D2. Status: triangulated (Fig 4 and Fig 12 :104, low overlap: scale membrane versus composition recursion).**

> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one."** (Fig 4 :25-26)
> **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."** (Fig 12 :104)

Social learning preserves useful knowledge when what is transmitted is a reapplicable generator: a rule, a discrimination, a procedure that can be re-run against the receiving habitat. It corrupts when what is transmitted is the recording of one occasion, the exact actions a source happened to perform, because that replay cannot produce a new success when conditions differ. This is the figure-grounded reading of the difference between understanding why and copying how. Fig 12 :119 names the same asymmetry: *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."*

World bearing, secondary and one pool: Rendell et al. 2010 found that copying paid because demonstrators *"frequently demonstrated the highest-payoff behavior in their repertoire, inadvertently filtering information for copiers"*. The demonstrator's performance is the ground-filtered method; the copier must still select. Lyons et al. 2011 show the failure case: children *"reproducing not only the actions that were causally necessary but also those that were clearly superfluous"*, that is, the recording with no discrimination of what was load-bearing.

**Refuter:** a practice transmitted as a verbatim replay with no retained rule and no re-derivation that nonetheless keeps paying across a documented change of habitat. If such a case exists, the method/recording distinction does not govern preservation.

### F2: Quick corruption is a failure of the channel, not of the ground

**Mode: `specified`. Domain D4, D2. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer versus room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :25-26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

A tradition becomes harmful while what pays in the world has not changed when the receiver's contact with the payment degrades. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the population-level version of aggregating across slots (Fig 1 :22): the signal that says which practice is failing disappears into a tradition-level average. Fig 7 adds the two-factor test:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

World bearing: Laland and Williams 1998 used a transmission chain in guppies and reported *"unequivocal evidence that maladaptive information can be socially transmitted through animal populations"*, with socially learned information *"inhibit[ing] learning of the optimal behavior pattern"*. This is not ground decay; the short route remained available and the fish still took the costly long one.

**Refuter:** a tradition that becomes harmful in a habitat where the ground's payment structure is unchanged and where receiver readings are independently measured as fresh, unsaturation-tested and unpooled. If both factors stay high, F2's mechanism is not the cause.

### F3: A mirror chain spreads practices without adding evidence

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms versus anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)

When every receiver copies the same source, the chain is one long room. The number of carriers grows while the evidence does not. Harmful practices spread not because each carrier checked and accepted them but because agreement substitutes for checking. Fig 2 :13-15 describes the same collapse: *"no anchor; each updates on the others"* and *"they converge, and what they converge on is whoever had the most influence"*.

World bearing: Boyd and Richerson 2024 write that imitating a proxy for fitness *"can lead to adaptation but may also lead to the spread of maladaptive traits"*, and that a low-confidence learner who copies an arbitrary group member allows *"maladaptive behaviors to spread because they copy the behavior of individuals chosen at random from the group"*.

**Refuter:** a chain in which every receiver observes the same single demonstrator and yet the receivers' agreement predicts new, ground-verified discriminations that the demonstrator never had, with no import from a differing closure. Under Fig 7 :36 that should be impossible; if observed, F3 is wrong.

### F4: Independence decides whether more copiers buy more evidence or more spelling

**Mode: `general` with a `specified` consequence. Domains D2, D3, D5. Status: triangulated (Fig 2 and Fig 8 :50-52, low overlap).**

> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."** (Fig 2 :31-32)
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."** (Fig 8 :50-52)
> **"Same closure, handed along;"** (Fig 7 :12)

A thousand people who learned from one teacher are one witness with a thousand spellings. A practice spreads harm fastest when the copy chain is also a single evidence pool: everyone read the same report, watched the same demonstrator, or followed the same prestige signal. Independence is not a virtue of the copiers; it is a fact about where each one's information came from. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

World bearing: the same point is made in the social-learning-strategies literature. Kendal et al. 2018 report that conformity judgments are *"sensitive to whether the demonstrators have obtained their information from independent sources or from each other"*. Laland 2004 notes that *"theoretical models used to investigate the adaptive advantages of social learning lead to the conclusion that social learning cannot be indiscriminate"*, which is the policy layer that F4 constrains.

**Refuter:** a tradition held by many copiers who demonstrably drew on one source whose agreement predicts new ground readings as well as a set of independent re-derivations does. If so, shared provenance does not destroy the verdict value of agreement.

### F5: The same practice changes valence when the residual changes

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 11 and Fig 4 :19-20, low overlap: habitat relations versus scale invariance).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."** (Fig 11 :67)

This is the core answer to "when does a useful practice become harmful". Nothing about the practice changed; the habitat or the residual did. The kernel is constant across scales, *"Only the actors, the currency and the anchor change"* (Fig 4 :20), so a practice that paid in one habitat can be a malfactor in another without any corruption in transmission. The converse matters too: a practice that looks harmful here may be preserving knowledge against a residual that this habitat no longer has.

World bearing: Kameda and Nakanishi 2003 revisit Rogers and note that *"the temporally fluctuating nature of adaptive environments ... poses a theoretical challenge"* to the assumption that copying always helps. Laland and Williams 1998 show the same sign flip in a controlled chain. Boyd and Richerson 1985 report that *"increasing the predictability of the environment decreases the optimal amount of individual learning"*, which is the flip expressed as an optimal policy.

**Refuter:** a practice whose measured contribution to payoff is invariant across a documented change of habitat or residual, with payment measured at both sites. If no sign change is ever found, F5 weakens to `general`.

### F6: The question is a union of two conditions, not a single lever

**Mode: `general` with a `specified` consequence. Domains all. Status: triangulated (Fig 9 and Fig 7, low overlap).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. C1 (bracket fidelity) and C2 (ground pressure) have different instruments:

- A C1 failure shows up as a recording where a method should be, a lost provenance, an over-imitated causally inert step, a copy that cannot be re-derived in the new habitat (Fig 4 :25-26, Fig 12 :119).
- A C2 failure shows up as saturated metrics, pooled readings, a bracket that no longer matches the residual, or a habitat whose payment has changed (Fig 10 :26, Fig 7 :38-39, Fig 11 :67).

A single lever, for example "increase fidelity of teaching" or "copy more models", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). F6 is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F7: The break is usually at vocabulary and objective, not at planning

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111 as a same-framework corroborating line, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In transmission terms, the usual failure is not that the receiver cannot copy or cannot plan. It is that the receiver has no terms for what the practice affords in this habitat and cannot say what would count as progress here. More teaching budget lands above the break (Fig 3 :29-30). F7 predicts that the highest-value diagnostic question is not "is this tradition well transmitted?" but "at which link does the receiving chain stop, and was that measured?"

**Refuter:** a documented transmission failure in which perception, vocabulary and objective links all measure as working and the failure is located at planning. That would falsify "usually at the middle", though not the dependency ordering.

### F8: Why the framework cannot name which practice wins

**Mode: `general`. Status: `gap` after a genuine re-census.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

No figure line governs which specific practice preserves knowledge in a named habitat. After re-census, Fig 13 governs the physical substrate only (strain S1) and cannot be applied to cultural content. Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause"*. What is owed is a source-discriminating instrument for the practice's contribution, characterized in effect terms but not held here. The honest report is `gap`, not a made-up name. World sources supply candidate discriminators (payoff bias, copy when uncertain, intentionality cue) but cannot supply the ground reading for this question.

### F9: A world conflict, and how it was resolved

**Mode: `general`. Status: figure-governed.**

Kameda and Nakanishi 2003 report Rogers's result that *"mean fitness of such a mixed 'cultural' population at evolutionary equilibrium is exactly identical to the mean fitness of an 'acultural' population consisting only of individual learners"*. Rendell et al. 2010 report that in their tournament *"average individual fitness in mixed-strategy populations was positively correlated with the proportion of learning in the population that was social"*. Read as raw claims these conflict. The conflict rule sends the derivation back to the census; it never flips the verdict (Sec. 2 of the master plan; Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*).

Re-census R1 resolves it. The two results are about different objects. Rogers's result concerns copying that saves cost only; Rendell's concerns copying filtered by demonstrators who *"demonstrated the highest-payoff behavior in their repertoire"*. Under the census, the first is F3 with no ground vote (a mirror chain with no bracket), the second is F1 with a ground-filtered item. Rendell et al. also report the harm side: *"strategies using a mixture of social and asocial learning are vulnerable to invasion by those using social learning alone, which may result in a population with lower mean fitness"*. Both findings therefore corroborate the two-condition shape once re-mapped. Verdict unchanged; the re-mapping is recorded as a binding with no provenance for the general claim, so it carries no independent verdict weight (Fig 8 :50-52).

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per practice and per habitat, never a culture-wide average | general | Fig 1 :19, :22 | figure-derived |
| The habitat's payment is the anchor, not agreement or prestige | general | Fig 2 :29, :35; Fig 10 :24 | figure-derived |
| Preservation needs a method to cross, not a recording | specified | Fig 4 :22, :25-26; Fig 12 :104 | triangulated F1 |
| Quick corruption is channel failure, not ground decay | specified | Fig 10 :24-29; Fig 7 :37-39 | triangulated F2 |
| A single-source chain compounds agreement without evidence | specified | Fig 7 :12-13, :35-36; Fig 2 :35, :40 | triangulated F3/F4 |
| Independence decides the value of more copiers | general | Fig 2 :31-32, :40; Fig 8 :50-52 | triangulated F4 |
| A practice changes valence when the residual changes | specified | Fig 11 :49-51, :67 | triangulated F5 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F7 |
| Which particular practice wins in a named habitat | not stated | none | `gap`: Fig 9 :32, Fig 13 :134, Fig 8 :39 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule (Seat Map :287): *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A practice transmitted as a verbatim replay with no reapplicable rule and no re-derivation keeps paying across a documented habitat change (breaks F1, Fig 4 :25-26).
2. A tradition becomes harmful while the ground's payment in the receiving habitat is unchanged and receiver readings measure fresh, unsaturated and unpooled (breaks F2, Fig 10 :24-29).
3. A chain in which all receivers observe the same single demonstrator produces new, ground-verified discriminations absent in the demonstrator, with no import from a differing closure (breaks F3 and F4, Fig 7 :12-13, Fig 2 :40).
4. A practice's measured contribution to payoff is invariant across a documented change of residual or habitat (breaks F5, Fig 11 :49-51).
5. A single intervention restores both conditions in both failure types and leaves no categorically different residue (breaks F6, Fig 9 :57).
6. Fig 6 idempotence fails inside a closed set, or one of Fig 13's six terms is derived from the other five (breaks the figures themselves, not merely this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a habitat-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of culture (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep C1 and C2 separate in every report. A blended "tradition health score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask at each handoff which link the receiving chain stops at and whether that was measured (Fig 3 :29). Do not fund teaching above the break.
4. Record for every transmitted item whether it is a method or a recording, and where it came from (Fig 4 :25-26, Fig 8 :50-52). Fidelity of a recording is not evidence of a method.
5. Buy independence in proportion to the cost of being wrong (Fig 2 :42). Count sources, not copiers.
6. Use the cultural-evolution and animal-behaviour literatures as one corroborating witness pool and as budget filters, never as the verdict (Fig 9 :60).
7. Stop at the shape. Do not name which practice wins in a named habitat; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32), and the missing discriminator is declared, not invented.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md` and `60_FIGURES_AS_METALAWS.md`.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs F8's stop.
- `60_FIGURES_AS_METALAWS.md` confirms that the figures are the ground for design questions and that the seat reads the ground rather than asking the anchor to decide. No ruling was requested from outside the framework.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical substrate to cultural traits | **Retracted, strain S1** | Only fit by renaming a norm a gradient and a tradition a kind of energy. Re-census: Fig 13 governs the physical substrate; it is used here only for the honest-stop claim |
| Treated Rendell 2010 as straightforward evidence that social learning preserves knowledge | **Narrowed to one witness, both signs** | The same paper reports a parasitic effect lowering mean fitness. Both signs were kept; see F1 and F9 |
| Read "copy when uncertain" as an unqualified endorsement of copying | **Narrowed to `specified` and conditional** | Laland 2004 and Boyd and Richerson 2024 make it conditional on confidence, environmental rate and source independence |
| Read "prestige" as a separate domain | **Absorbed into D3** | It is a model-based bias inside the population tradition, with no anchor separate from the habitat's payment |
| Wanted to call Fig 11 :40 a `general` law about all traditions | **Narrowed to `specified`** | It is a structural claim; no habitat measurement pays for the social-learning version here |
| Read Rogers 1988 and Rendell 2010 as a contradiction needing a verdict choice | **Conflict, re-census R1** | Different objects: cost-saving copying versus ground-filtered copying. Both retained, verdict unchanged; see F9 |
| Kameda 2003 as firm-level style evidence for copy rates | **Retracted as a witness, kept as a boundary condition** | It is about environmental fluctuation, not a measured rate; it governs F5 only |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 4 and Fig 12 are two figures, but both from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to cultural content), resolved by re-census. S2 (calling the habitat "the ground" while also treating conditions as changing), resolved by Fig 11 :73: the habitat updates, the ground settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the domain census: it is a union of bracket fidelity and ground pressure, each with its own loop and instrument.
2. **What is the anchor?** A consequence measured in the receiving habitat. Not agreement, not popularity, not prestige (Fig 2 :29, :35; Fig 1 :27).
3. **What crosses?** A generator can cross; a recording cannot. Fig 4 :22, :25-26. This is C1.
4. **Does the receiving habitat still pay?** If not, no fidelity helps. Fig 7 :37-39; Fig 11 :67. This is C2.
5. **How does a useful practice turn harmful?** Its valence changes with the residual; it becomes a spent part (Fig 11 :49-51; Fig 12 :119). Nothing about the practice need change.
6. **How does harm spread without anyone checking?** A mirror chain plus a single evidence pool: agreement compounds, evidence does not (Fig 7 :12-13; Fig 2 :40).
7. **What can be said at the stop?** A shape and two conditions with five falsifiers. Not which practice wins, not a `grounded` answer. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **social learning preserves useful knowledge when what crosses is a reapplicable method whose grounding travels with it and the receiving habitat still pays for it with a reachable channel; it spreads ineffective or harmful practices when what crosses is a recording of one occasion, when all receivers draw on one evidence pool, when the channel to the ground decays, or when the habitat or residual changes so that a former benefactor becomes a malfactor.** The two conditions are kept separate, never averaged. Which particular practice wins in a named habitat is a `gap`, not a silence: the framework returns a shape, and the source-discriminating instrument is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (Rogers versus Rendell) was returned to the census and re-mapped. No unresolved strain remains after re-census.

The strongest single figure-grounded point for outreach is canonical: a mirror chain is one long room, and *"alignment is triangulation, not negotiation"*. A list of people selected for agreeing with a claim cannot test the claim.
