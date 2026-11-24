# Figure-grounded audit: why some false claims spread more effectively

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Every finding below carries a mode. None is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the misinformation question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here the frame is a person deciding what to believe and what to pass on, or whether to accept a correction.

- **b** is the belief about what is true, formed from private history and inherited priors. The Symbols table names the weighting: "How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings. Two frames with identical architecture diverge because their histories and their w diverge." (Symbols table, `w`)
- **a** is the action: share, repeat, endorse, or ignore and correct.
- **Γ(b,a)** is what the person's library predicts will follow socially from the action: attention, agreement, identity signal, novelty reward.
- **o′** is what the ground returns: is the claim true, and what actually happened to those who acted on it.
- **s** is the claim, or the person-claim pair. R is indexed per claim and per person, never aggregated into a single "misinformation exposure" score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the truth value of any claim but **the duration for which R stays small across many handoffs and many people, and the failure of an explicit o′ (a correction) to shrink it**. Call the first `D_c` (the propagation distance of a low-residual claim) and the second `C_fail` (the persistence of R after the ground's reading is supplied). Observed: `D_c` ranges from a single share to millions of retweets; `C_fail` ranges from immediate updating to no change or movement in the wrong direction. A frame that predicts all claims are equally sticky, or that supplying the truth always ends the matter, has a residual here.

State the residual as: *why does the gap between what a person's library predicts about a claim and what the ground returns stay small for some false claims across many tellings, and why does showing the ground's reading sometimes fail to close that gap?* This is an effect description. It names no theory, no "motivated reasoning", no "filter bubble", no "illusory truth". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of two conditions, a transmission condition that keeps ground pressure near zero while fidelity to social reward stays high, and a correction condition in which the receiving frame can carry negation and the anchor remains reachable, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it (Fig 5 :62, :65). It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names candidates directly: "A measurement, an experiment, a counter, a market, a patient outcome." For this question the anchor is a verifiable record of whether the claim is true and what actually followed from acting on it. It is not agreement, not share counts, not engagement metrics. Fig 2 :30: "you push on it, it is not an anchor." Consensus, virality and platform rankings all move when pushed. Fig 1 :26-27: "predicates minted, and credibility accrued" and "They are frame-internal. A frame cannot score itself with a quantity it also produces." A claim that accrues credibility by spreading is scored with a quantity the frame itself produces.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: frame Γ, action a, ground return o′, indexed by slot s and ordered in time. It carries an **ordered** bond `→` ("A then B; B needs A to have happened", Fig 12 :72) and a **comparison** bond for "spreads more effectively" (`⋛`, "a threshold relation between two quantities", Fig 12 :85). It is not symmetric: teller and audience are not interchangeable, and a claim once believed is not un-believed by reversing the action.
- **Symmetry.** "More effectively" is a threshold relative to accurate information, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). Spread is asymmetric in time: a correction does not restore the pre-exposure state.
- **Scale.** Three scales are in view: the single person's step-by-step loop (Fig 4 one-agent panel), the population of people with a shared library and *"many agents, a shared library, and something that ranks what they produce"* (Fig 4 :5), and the time channel across handoffs. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The individual belief-and-sharing loop** | person, Γ, belief b, weighting w | residual reduction; fluency and novelty reward | yes: verifiable truth of the claim and consequences of acting on it | admitted |
| **D2 The transmission chain** (people as rooms) | tellers, audiences, the claim as content handed along | exposure, repetition, agreement | yes: per-handoff ground contact, the two factors of Fig 7 :37-39 | admitted; this is where "spread" happens |
| **D3 The correction and refusal frame** | corrections, refutations, the ¬ operator, fact-checkers | reach, refusal, standing to be composed over | yes: the ground, what settles the claim (Fig 2 :45) | admitted; this is where correction failure happens |
| **D4 The attention habitat** (platform conditions) | ranking systems, incentives, novelty, emotion, age cohort, digital literacy | contact, cascade, supply of claims | yes: the ground (what actually helps or harms); the habitat updates but the ground does not (Fig 11 :73) | admitted |
| **X1 "The claim is intrinsically stickier"** as a free-floating property of content | the claim | attention | **no** anchor independent of the receiving habitat | not a domain yet; absorbed into D4 (Fig 11 :49) |
| **X2 "People are gullible or irrational"** as a property of the person alone | the person | credulity | **no** instrument independent of the market of claims they meet | not a domain yet; absorbed into D1 (Fig 11 :40) |

X1 and X2 fail the anchor test and are excluded before any figure line is applied to them. This is a structural exclusion, not a claim that content and people never matter.

### 1.3 Partition or union

D2 and D3 overlap: corrections travel in the same channel as the claims they correct. D1 and D4 overlap: the person is inside the habitat. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) a transmission condition, the claim keeps travelling while ground pressure stays near zero and fidelity to social reward stays high; (C2) a correction condition, the receiving frame can carry ¬ and the anchor stays reachable. A claim that fails only C1 and a claim that fails only C2 are not different degrees of one failure. They are different compounds and need different instruments. The essay *The Library of Babel* names the same stop: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the person tell this claim from what they saw before?) → 2 vocabulary (does Γ have terms for what the claim affords, and a term for "this is false"?) → 3 objective (would being right count as progress here, or does fitting in count?) → 4 planning (what to share, what to check) → 5 learn and carry. The middle link, having terms for what the claim affords and saying what would count as progress, is the one with no instrument. Fig 12 :113: "A vocabulary without bonds can name a state and cannot name a route to one." The Operators table :58 gives the missing operator: "a refutation is a negation, which is why a vocabulary without it can only accumulate." Most "media literacy" effort lands above the break, where measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and what may count as evidence |
| 2 The Ground | anchor vs mirror; two collapses, mutual update and common cause | governs C1 and C2; the anchor rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs individual to crowd transfer, and the lossy condensation |
| 5 Mint Pipeline | three guards as product; the fifth kind, refuted | governs why a correction is a refusal and why a warning is not one |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs why repetition inside a closure adds no ground |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | decisive for spread (C1) |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs echo chambers and source confusion |
| 9 Leave / Arrive | union vs partition; describe the residual before choosing a frame | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | decisive for correction failure (C2) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; contact cascades | governs novelty, emotion and indirect effects |
| 12 The Bond | catalyst, cycle, functional group; arrangement is the substance | governs why a repeated claim becomes self-maintaining |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest stop only (see strain S1) |
| Operators table | ¬ negation is the refusal of a claim; a vocabulary without it can only accumulate | governs C2 at the operator level |
| Symbols table | R is the aim; w leans on private history vs inherited prior | governs b and the divergence between frames |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate to "beliefs as energy, attention as gradient" only fit by renaming mental states as physical states. That is a strain, so Fig 13 does **not** govern misinformation directly. Re-census sends Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about claims and people, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Spread is a property of claim-and-habitat, not of the claim alone

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat relations vs membrane across scale).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"Only the actors, the currency and the anchor change."** (Fig 4 :20)

The effect: a false claim's reach is not a property of its text considered alone. Change the audience's history, the ranking system, or the available ground contact, and the same text travels differently. The habit of answering with a list of content features (novelty, emotion, length) is an agent-only framing that may not change contact.

**Refuter:** a controlled habitat substitution (same claim, different audience-habitat with the ground's payment for the claim removed) in which propagation distance is unchanged. If it survives, F1 is false.

**World bearing (secondary only).** Vosoughi, Roy and Aral (Science 2018, via MIT News 2018) report that "falsehood diffuses significantly farther, faster, deeper, and more broadly than the truth, in all categories of information, and in many cases by an order of magnitude" and that "False news is more novel, and people are more likely to share novel information." Novelty is relative to what the audience already holds, which is Fig 11 :49 (valence relative to the residual), not a property of the text. Berger and Milkman (Journal of Marketing Research 2012, via the accessible PDF mirror) find that "Content that evokes high-arousal positive (awe) or negative (anger or anxiety) emotions is more viral." Arousal is a habitat condition, not an intrinsic atom. Both corroborate the shape, from network science and marketing respectively, so they are two low-overlap witnesses to this claim, not one pool.

### F2: An agreeing chain is one long room; agreement compounds, evidence does not

**Mode: `specified`. Domain D2. Status: triangulated (Fig 7 and Fig 2, low overlap: handoff selection vs anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)

A claim passed person to person through people who share the same evidence pool is a room chain with ρ ≈ 1. Each retelling raises the appearance of confirmation but adds no independent bearing on the ground. Fig 7 :14 names "blending: novelty swamped to the mean", the mechanism by which repeated exposure makes a claim feel familiar rather than checked.

**Refuter:** a chain in which every handoff is a different closure selected against the residual the previous room surfaced, with measured low overlap, and propagation still tracks agreement rather than ground contact. Under Fig 7 :36 that should not happen.

**World bearing.** Pennycook, Cannon and Rand (Journal of Experimental Psychology: General 2018, PMC6279465) show that "even a single exposure increases subsequent perceptions of accuracy" and that "tagging such stories as disputed is not an effective solution to this problem." This is Fig 7 :13 and Fig 7 :14 observed in a cognitive experiment. Guilbeault, Becker and Centola (arXiv 2017) review complex contagions across "health, innovation diffusion, social media, and politics" and stress "the effects of individual-level attributes and thresholds." Complex contagions need reinforcement from several contacts, which is the room chain's ρ ≈ 1 condition stated in network-science terms. The animal source in F6 supplies a third, non-human witness.

### F3: Spread has two factors, bracket fidelity and ground pressure

**Mode: `specified`. Domain D2. Status: single-source for the two-factor form (Fig 7), with Fig 10 as a corroborating figure from the same framework, so one witness.**

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket's fidelity across the handoff"** (Fig 7 :38)
> **"the ground's pressure on the room"** (Fig 7 :39)
> **"the ground does not decay, the channel does"** (Fig 10 :24)

A false claim travels far when fidelity to social reward stays high (each teller reads what gains attention) and ground pressure stays low (nobody checks the claim against what settles it). Either factor going to zero stops genuine progress, though the chain may keep moving. Guess, Nagler and Tucker (Science Advances 2019, PMC6326755) report a strong age effect: "users over 65 shared nearly seven times as many articles from fake news domains as the youngest age group." The authors suggest digital media literacy and source memory as candidate mechanisms, both of which are bracket-fidelity failures (Fig 10 :26: "stale percepts, dropped transients, saturated metrics, pooled readings"). This is a specified, unmeasured mapping, not a ground reading.

**Refuter:** a documented cascade in which bracket fidelity and ground pressure are both independently measured as high and non-declining, yet the false claim still out-travels the accurate one. If both stay high, F3's mechanism is not the cause.

### F4: Correction is a refusal, and a vocabulary without ¬ can only accumulate

**Mode: `specified`. Domain D3. Status: triangulated (Fig 5 amendment and Operators table, low overlap: pipeline dynamics vs operator set).**

> **"refuted: a term we hold is wrong; a term is owed that says so"** (Fig 5 :53)
> **"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."** (Fig 5 :55)
> **"a refutation is a negation, which is why a vocabulary without it can only accumulate"** (Operators table :58)
> **"Negation is the refusal of a claim. A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."** (Operators table :73)

A correction is not another item added beside the claim. It is a refusal that removes the claim's standing to be composed over, while the claim remains in the record (Fig 5 :55). If the receiving frame's library has no ¬ operator, the correction cannot do that work: it becomes just another term, and Fig 5 :29-30's "the machinery worked; the answer was already known" applies. A "Disputed by third-party fact-checkers" tag is a frame-internal warning, not a refusal, which is exactly what Pennycook et al. tested: the warning lowered perceived accuracy slightly but the repetition effect persisted, "even when the stories are labeled as contested by fact checkers."

**Refuter:** a frame demonstrably lacking ¬ that nevertheless removes a false claim's standing to be composed over, with no new atom added and no ground measurement. That would break the operator rule and F4 with it.

### F5: The ground does not decay, the channel does

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 10 and Fig 2 :33-34, low overlap: ground-maintainer seat vs the two collapse panels).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"the output is not a verdict, it is you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"everything drifts together, and the drift is coherent, which is why nobody notices."** (Fig 2 :34)

A correction fails when contact with the ground degrades while the ground itself keeps paying someone else. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the person-level version of aggregating across slots (Fig 1 :22).

**Refuter:** a documented case in which the ground's verdict changed because a community changed its mind, with no new measurement or instrument, and the old claim becomes false without anything in the world moving. That would make the ground a frame, panel 1 of Fig 2, and F5 would be false.

**World bearing and a genuine conflict.** Nyhan and Reifler (Political Behavior 2010) write that "corrections frequently fail to reduce misperceptions among the targeted ideological group" and document "several instances of a 'backfire effect' in which corrections actually increase misperceptions among the group in question." Wood and Porter (Political Behavior 2019) ran five experiments with more than 10,100 subjects across 52 issues and report: "Across all experiments, we found no corrections capable of triggering backfire, despite testing precisely the kinds of polarized issues where backfire should be expected." The two conflict. Per the method, a conflict sends the derivation back to the census, not to a softer verdict. Re-census R2 in section 6 resolves it by splitting C2: an ordinary channel that heeds facts (Wood and Porter's result) and an identity-protective channel in which the correction is read as an attack and the frame updates only on itself (Fig 2 :13, "no anchor; each updates on the others"). The split is in the figures already; the world studies are measuring different subtypes. Verdict unchanged.

### F6: Shared evidence pools and convergent agreement

**Mode: `general` with a `specified` consequence for method. Domains D2, D4. Status: triangulated (Fig 2 and Fig 8, low overlap: anchor collapse vs union surplus).**

> **"no anchor; each updates on the others"** (Fig 2 :13)
> **"one evidence pool"** (Fig 2 :18)
> **"so the agreement is the pool talking, not two frames confirming each other"** (Fig 2 :20)
> **"Two frames that overlap almost completely are one frame wearing two names."** (Fig 8 :49)
> **"But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."** (Fig 8 :50)

A community in which everyone heard the same feed is one frame with many names. Ten thousand people repeating the same claim is not ten thousand witnesses. "Correlation has valence" (Fig 2 :39): "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" (Fig 2 :40), "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it" (Fig 2 :41). Fig 2 :42 prices the remedy: "Buy independence in proportion to the cost of being wrong."

**Refuter:** two frames with measured low overlap whose agreement still carries zero information about the world. That would break the independence condition and F6 with it.

**World bearing from a low-overlap field.** van de Waal, Borgeaud and Whiten (Science 2013, via the University of St Andrews research portal) report that "wild vervet monkeys will abandon personal foraging preferences in favor of group norms new to them." This is an animal-behaviour witness with no shared evidence pool with political communication research: social conformity can override a private reading without any language, and it does so in the direction of the group norm. It corroborates the shape of C1, not the human mechanism.

### F7: The question is a union of two conditions; unbundle before choosing a lever

**Mode: `general` with a `specified` consequence for intervention. Domains all. Status: figure-governed (Fig 9 :54-57).**

Fig 9 :54, :55 and :57 are quoted in section 1.3. The two conditions have different instruments:

- A **C1 failure** (transmission) shows up as agreement compounding without ground pressure, high ρ between rooms, and novelty swamped to the mean (Fig 7 :12-14, :39).
- A **C2 failure** (correction) shows up as a vocabulary without ¬, a correction that becomes another term, and a channel that has lost touch (Operators table :58; Fig 5 :55; Fig 10 :24-28).

A single lever, for example "publish more fact checks", clears the region where only C2 holds and leaves the intersection standing, because the claim keeps travelling through a C1 channel (Fig 9 :55). F7 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F8: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :113 and Operators table :58 as corroborating lines from the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In person terms, the usual failure is not that people cannot reason; it is that they have no term for "this is false" and no objective for which being right counts more than fitting in. Fig 3 :29-30 predicts that most intervention budget lands above the break, where the measurements already exist (more fact-check articles, more warnings, more literacy tips). The essay *Decoding Tacit Knowledge* supplies the same warning from a different register: "Context, subtext and pretext decide what a message means to you. None of them decides whether it is true. Only the ground does that."

**Refuter:** a documented person whose perception, vocabulary and objective links all measure as working and whose failure to reject a false claim is located at planning or execution. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F9: What the framework returns is a shape, not a name

**Mode: `general`. Status: triangulated (Fig 9 :32 and the canonical figures README).**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"your words are borrowed too, so describe the effect rather than the cause"** (Fig 9 :30-31)

The figures license the two conditions, the union, and the instrument gap. They do not license naming novelty, arousal, partisan identity, age, or any other single mechanism as *the* answer. Those are bindings from the world frame onto held atoms, provenanced as such. *The Hard Problem is About Source* gives the reason: "If several paths create the same behavior, then behavior is a projection with lossy information" and the fix was "not by argument, but by the arrival of a better instrument." An instrument that cannot distinguish sources cannot name one. Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 8 :39: "So a search that finds nothing is never a proof of absence."

**Refuter:** a source-discriminating experiment that shows one mechanism is necessary across all habitats and all claim types. That would move the slot from shape to name.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per claim and per person, never an exposure average | general | Fig 1 :19, :22 | figure-derived |
| The ground, not agreement or virality, is the anchor | general | Fig 2 :29, :30, :35 | figure-derived |
| Spread is a property of claim-and-habitat | specified | Fig 11 :39, :40; Fig 4 :20 | triangulated F1 |
| An agreeing chain is one long room | specified | Fig 7 :12, :13, :35, :36 | triangulated F2 |
| Spread has two factors, fidelity and ground pressure | specified | Fig 7 :37-39 | single-source F3 |
| Correction is a refusal, not an added item | specified | Fig 5 :53, :55; Operators :58, :73 | triangulated F4 |
| The ground does not decay; the channel does | specified | Fig 10 :24-29; Fig 2 :34 | triangulated F5 |
| Shared evidence pools make agreement worthless as a verdict | general | Fig 2 :13, :18, :20, :40; Fig 8 :49 | triangulated F6 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F8 |
| Which specific mechanism occupies the slot | not stated | none | gap: the framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following is observed:

1. A claim's propagation distance is unchanged across a habitat substitution that removes the ground's payment for it (breaks F1, Fig 11 :39-40).
2. A chain of measured low-overlap rooms, each selected against the residual it surfaced, still shows spread tracking agreement rather than ground contact (breaks F2, Fig 7 :36).
3. A cascade with bracket fidelity and ground pressure both measured high and non-declining still out-runs the accurate claim (breaks F3, Fig 7 :37-39).
4. A frame with no ¬ operator removes a false claim's standing to be composed over without a new atom or a ground measurement (breaks F4, Operators table :58).
5. The ground's verdict moves because a community changed its mind, with no new measurement (breaks F5, Fig 2 :33-34 and Fig 10 :24).
6. Two frames with measured low overlap agree and still carry zero information (breaks F6, Fig 2 :40).
7. One lever restores both C1 and C2 with no categorically different residue (breaks F7, Fig 9 :57).
8. A source-discriminating experiment names one necessary mechanism across all habitats (breaks F9, Fig 9 :32).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground measurement pays for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of misinformation (Fig 10 :52, "Bring a characterised residual, never the source").
2. Keep C1 (transmission) and C2 (correction) separate in every report. A blended "misinformation score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat "novelty", "arousal", "identity" and "age" as Γ, that is, as candidate libraries whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the world literature as one corroborating witness at a time and as a budget filter, not as the verdict. Vosoughi, Pennycook, Guess, Nyhan and Wood draw on overlapping Western political-communication pools in places; the animal and network-science sources are genuinely low overlap (Fig 2 :31, :40).
6. Design corrections as refusals (¬), not as additional claims. A warning is a frame-internal cue; a refusal removes standing to compose over (Fig 5 :55; Operators table :58).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which mechanism occupies the slot. The framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and four essays opened 2026-11-23 (*The Hard Problem is About Source*, *The Recursive Self-Improvement Trap*, *The Library of Babel*, *Decoding Tacit Knowledge*).

- The README confirms: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also confirms the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- The README's canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop and F9.
- The source essay confirms the simulation status: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to beliefs and attention | **Retracted, strain S1** | Only fit by renaming mental states as physical states. Re-census: Fig 13 governs the physical substrate, not a person's Γ |
| Treated "backfire" as a single established mechanism | **Conflict, re-census R2** | Nyhan and Reifler 2010 vs Wood and Porter 2019. Resolved by splitting C2 into ordinary channel and mutual-update channel; see F5. Verdict unchanged |
| Read virality metrics as evidence for the claim's truth | **Retracted as a witness, kept as a filter** | Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 1 :26 names credibility accrued as frame-internal |
| Planned to name "novelty" or "identity" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. These are world-frame bindings, recorded as such |
| Wanted to call F6 a `general` law about all crowds | **Narrowed to `general` with a `specified` consequence** | It is a structural claim; no measurement pays for the crowd-level version here |
| Used Guess et al. age effect as a mechanism | **Narrowed to bracket-fidelity corroboration** | The study is observational and the authors offer competing candidate mechanisms; Fig 4 :20 requires the anchor to be re-named at the new scale |
| F9 row "which mechanism occupies the slot" | **Marked `gap`** | The essay's metamerism rule: an instrument that reads a behavior "cannot comment on the source"; what is owed is a discriminator, not a name |
| F2 "decisive" in an early draft | **Downgraded to triangulated** | Fig 7 and Fig 2 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to mental states), resolved by re-census. S2 (calling a verifiable record "the ground" while also treating what that record measures as changing with better instruments), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not; an instrument can improve without the ground moving. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: it is a union of transmission and correction, each with its own loop and instrument.
2. **What is the anchor?** A verifiable record of truth and consequence, named by Fig 2 :29. Not consensus, not engagement (Fig 1 :26).
3. **Is the answer in the claim alone?** No. Fig 11 :39-40. Capability is claim-and-habitat.
4. **How does spread happen?** An agreeing chain with ground pressure near zero and fidelity to social reward high (Fig 7 :12-14, :37-39).
5. **How does correction fail?** The channel loses touch and, in the identity-protective subtype, frames update only on each other (Fig 10 :24-29; Fig 2 :13, :34).
6. **Why does repetition work?** The fifth kind of gap is refuted, not novel; a library without ¬ accumulates (Fig 5 :53-55; Operators table :58).
7. **What can be said at the stop?** Two conditions, a union, and falsifiers. Not which mechanism, not a `grounded` answer. *"Unreachable is a verdict here, not a silence"* (Fig 13 :134).

---

## 8. Updated verdict

The shape survives: **a false claim travels far when the transmission chain keeps ground pressure near zero and high fidelity to social reward, and a correction fails when the receiving frame cannot carry ¬ or the anchor is no longer reachable.** The two conditions are kept separate, never averaged. Which particular mechanism fills the slots is a `gap`, not a silence: the framework returns a shape, and the source-discriminating instrument is not held here. Mode `specified`. No world source was allowed to flip a figure verdict; the one genuine conflict (backfire) was returned to the census and split into subtypes. No unresolved strain remains after re-census. This is a simulated derivation, internally consistent with the figures, and it does not settle the question it reports on.
