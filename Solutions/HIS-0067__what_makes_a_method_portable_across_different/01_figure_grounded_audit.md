# Figure-grounded audit: HIS-0067, portability of methods

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the historical question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the practitioner's belief in the source place, formed from local history and inherited priors.
- **a** is the use of the method: procedure, instrument, protocol, practice, rule.
- **Γ(b,a)** is what the method's library predicts will happen here.
- **o′** is what the place actually returns: measured outcome, count, market, patient result, harvest.
- **s** is the place and population. R is indexed by place and population, never aggregated into a global "does this method work" average.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is the **change in R across a carrying of the method from slot A to slot B**. Call it `P_s`, the persistence of a low-residual slot after transport. Observed historically: some methods keep paying across places and populations, many do not. A frame that predicts all good methods port equally, or that a method's truth is independent of where it is used, has a residual here.

State the residual as: *why does the gap between what a method predicts and what a place returns stay small in some places after the method is carried there, and grow in others?* This is an effect description. It names no theory, no "best practice", no "universal method", no "local knowledge". Those are candidate names withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps `P_s` large after transport, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* For this question the anchor is the ground of the receiving place. Method prestige, author reputation, number of adoptions, and agreement among practitioners all move when pushed, so they are instruments or frame-internal quantities at best (Fig 1 :24-27). Viable anchor: the receiving place's own measurement or outcome, measured per place.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among method-library Γ_m, action a (using the method), observation o′ in the target slot, and the transform between source and target conditions. At least four operands. The carrying of a method carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "still pays here" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: source and target are not interchangeable.
- **Symmetry.** Portability is asymmetric. Carrying a method from A to B is not carrying it from B to A. The transform is lossy, so the trip is not reversible (Fig 4 :27-30). A method that pays in one place can fail in another without anything about the method changing.
- **Scale.** Three scales are in view: the single practitioner's step-by-step loop (Fig 4 one-agent panel), the population of practices with *"something that ranks what they produce"* (Fig 4 :5), and the place or population scale across which the method travels. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The method as generator** (one practitioner, one scale) | the method's Γ, atoms and bonds, the carrying loop | reach, |φ| cost, residual reduction | yes: settlement in the source ground, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D2 The receiving habitat** (new place or population) | actors, conditions, relations of the target (Fig 11 :45-47) | contact, survival of the practice, whether the goal still pays | yes: the target ground, which settles and does not update on the method's reputation (Fig 2 :29) | admitted |
| **D3 The carrying transform** (membrane between places) | the method carried up, the head start brought down, the description | information lost across scales, R_T | yes: R_T as the measured gap, *"take the round trip and measure the gap"* (Fig 4 :30) | admitted |
| **D4 The transmission channel** (record, lineage, provenance) | the record, the lineage, instruments, percepts | what travels, fidelity of the bracket | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Universal validity because it worked at home** | the method considered alone | truth | **no** anchor independent of the source ground's own payment | not a domain yet |
| **X2 Method prestige or number of adopters** | reputation, adoption counts | influence | measurable, but *"Prestige can fund an action... but it cannot settle an action"* (essay, RSI Trap); not a ground | excluded from verdict weight |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that methods never travel. X2 is measurable but is a contact or budget quantity, never an evidence quantity. Both exclusions are recorded so the reader can see them rather than only the surviving domains.

### 1.3 Partition or union

D1 and D3 overlap: the method and the transform that carries it form one compound with its own loop. D2 and D4 overlap: contact with the target ground is exercised inside the receiving habitat, forming a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **C1**, what crosses is a generator and not a recording; **C2**, the receiving habitat reproduces what the goal required and the unchosen actors are enumerated. A method failing only C1 and a method failing only C2 are not different degrees of one failure; they are different compounds needing different instruments. The essay *The Library of Babel* states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for a method arriving in a new place: 1 perception (can the receiver read the target ground at all?) → 2 vocabulary (does its Γ have terms for what the new situation affords, and can it say what would count as progress there?) → 3 objective (can it state a comparison that counts as getting somewhere?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, has no instrument and attracts the least attention (Fig 3 :26). C1 (generator) is mostly a failure of link 5 and the membrane. C2 (habitat) is mostly a failure of links 1 and 2. That is why a single lever cannot clear both.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not why it persists |
| 2 The Ground | receiving place's ground is the anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | methods cross, recordings do not; lossy transform; R_T | **decisive for C1** |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether the carried thing is admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; effect terms | governs renewal of reach and the description |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repeated application in the new place |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the effect, not the cause | governs the unbundling and the census itself |
| 10 Ground Maintainer | a generator crosses, an instance does not; ground does not decay | triangulates C1 and governs the channel |
| 11 The Habitat | capability is agent-and-habitat; isolation substitutes habitat | **decisive for C2** |
| 12 The Bond | isomer, functional group, catalyst; record is the term | governs arrangement and lineage |
| 13 Minimum Viable Set | set closed, arrangements not; record is the term; unreachable is a verdict | governs the honest stop |
| Operators table | `→` sequence, `⋛` comparison, `−` subtraction | governs the arity reading above |

Strain test applied during this census: an early attempt to apply Fig 13's six physical substrate terms (space, time, energy, spectrum, gradient, network) directly to "components of a method" only fit by calling a protocol step a kind of gradient and a skill a kind of spectrum. That is a strain, so Fig 13 does **not** govern the physical identification of method parts. Re-census sent Fig 13 to three other roles: the record-is-the-term principle, the set-closed-arrangements-open principle, and the honest stop. See strain S1 in section 6. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about methods and places, `grounded` only if settled by a measurement. None is `grounded`.

### F1 — What crosses must be a generator, not a recording (decisive for C1)

**Mode: `specified`. Domain D1, D3. Status: triangulated (Fig 4 membrane and Fig 10 cross-scale rule, low overlap).**

> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"upward: a method that can be reapplied. Never the recording of a particular success."** (Fig 4 :23)
> **"A recording carried upward looks like knowledge and is a description of one occasion."** (Fig 4 :25)
> **"The level a method lands on remakes it."** (Fig 4 :34)
> **"a generator crosses, an instance does not"** (Fig 10 :68)

A method that is carried as a fixed recipe, a list of steps that worked once, is a recording. Replayed in a new place it repeats a past success and cannot produce a new one (Fig 4 :25). What can cross is the compressed, verified, reapplicable method and the head start it gives the next searcher. Fig 4 :34 states the consequence directly: the level a method lands on remakes it, so a seed carries no small tree. This is the figure-grounded content of the historical distinction between a method that travels and a result that is copied.

**Refuter:** a method carried to a new place that keeps paying while only a fixed recipe crossed, with no reapplicable generator and no head start for the receiver, and with the target ground measured throughout. If it survives, F1 is false.

**World bearing (secondary only):** Deaton and Cartwright write that *"credibility in estimation can lead to incredibility in use"* and that RCTs can serve science only *"as part of a cumulative program, combining with other methods, including conceptual and theoretical development, to discover not 'what works', but 'why things work'."* That is F1 in the language of evidence policy: the recorded estimate is a recording; the mechanism-level understanding is the generator. Corroborates, different field and pool.

### F2 — Portability is a property of method-and-habitat, not of the method alone (decisive for C2)

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 habitat and Fig 4 landing-condition rule, low overlap).**

> **"capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."** (Fig 11 :67)
> **"what you failed to reproduce is invisible until the goal fails"** (Fig 11 :68)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)
> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** (Fig 11 :70)

Carrying a method to a new place is not moving an object into an empty room. It is a habitat substitution. Two silent failure modes follow from Fig 11 :68-69. What you failed to reproduce is invisible until the goal fails: the method quietly stops paying because a condition its goal required was not carried. What you unintentionally introduced is invisible until it acts: the new place's actors, which you did not choose, change the method's valence. Fig 11 :70 gives the standing trap: a controlled pilot that works is a substituted habitat, so it proves the wiring and not the capability in the real place.

**Refuter:** a documented transport in which the method's performance survives a habitat substitution that demonstrably removes a condition its goal required, and in which the new habitat's unchosen actors measurably do not affect the outcome. If both hold, F2 is false.

**World bearing (secondary only):** Lissa Roberts, in *Situating Science in Global History*, writes that *"the achievements of modern science must not blind us to the complex history whereby its institutions, practices and visions of nature came both to be shaped by, and to have a formative impact on, the global context in which they developed."* She describes the productive role of *"globally situated intercultural exchanges"* while recognising the asymmetry of the conditions. That is F2 at the historical stratum, and it refuses the diffusionist story that a method simply works because it is true. Corroborates, low overlap.

### F3 — The description must travel in effect terms; the record is the term

**Mode: `general` for the rule, `specified` for its application here. Domain D3, D4. Status: triangulated (Fig 6, Fig 9, Fig 13 with distinct roles).**

> **"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."** (Fig 6 :30)
> **"your words are borrowed too, so describe the effect"** (Fig 9 :30)
> **"rather than the cause"** (Fig 9 :31)
> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."** (Fig 13 :130)

A method written as a list of ingredients loses the bonds that make it work. Fig 12 :5 says a recipe that names only its ingredients has recorded half of itself, and nothing signals what was lost. What must travel is the lineage: the atoms, the bonds, and the route by which the method was settled. Fig 13 :130 makes the strong claim that the record is not documentation of the term but the term itself. In historical terms, a protocol whose local preconditions and reasons for modification are not recorded is not portable knowledge; it is a description of one occasion (Fig 4 :25).

**Refuter:** a method transported by a description in source-only terms, with no bonds or lineage recorded, that still keeps paying in the target place against a measured ground. That would falsify the claim that effect-term description is necessary.

**World bearing (secondary only):** Stirman, Baumann and Miller's FRAME framework requires reporting *"when and how in the implementation process the modification was made"* and the *"reasons for the modification"*, and distinguishes fidelity-consistent from fidelity-inconsistent modification by whether core elements are preserved. Their observation that *"the function of intervention elements"* can be prioritised *"over the form"* is F3 in implementation science: the bond and its reason travel, not just the ingredient list. Corroborates, low overlap.

### F4 — The round-trip gap R_T must be measured, not assumed zero

**Mode: `general` for the requirement, `specified` for this carrying. Domain D3. Status: triangulated (Fig 4, Symbols table, Formula step 6).**

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)
> **"The transform between scales loses information, and that is the point."** (Fig 4 :27)

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E composed with T_A)(x))`, measuring what the coarser description cannot hold. A method compressed for transport and then reapplied in the target place will not match the source method. The gap is not an error to eliminate; it is the measurement of what the coarser description cannot hold (Fig 4 :31). Treating a transported method as identical to the original is the dead-reckoning error Fig 4 :30 names.

**Refuter:** a measured round trip in which the compressed method reapplied in the target returns exactly the source method's prediction, so R_T = 0 across a real place change. That would falsify the claim that the transform is necessarily lossy.

### F5 — Renewal of reach in the new place needs contact with a differing closure

**Mode: `specified`. Domain D1, D2, D3. Status: triangulated (Fig 6, Fig 8, Fig 13, distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A method transplanted and then optimised only inside its own library never adapts to the new place. It can keep refining the same atoms forever and never add what the target habitat requires. Renewal needs contact with frames whose closures differ: local practitioners, adjacent practices, the target ground itself, instruments that were not available at home. Fig 6 :14 calls import the only operator that moves the wall, and Fig 8 :32 says why nothing else can.

**Refuter:** a method that keeps paying in a new place across a change of habitat while its practitioners demonstrably never contact a differing closure and only compose inside their own library. That breaks idempotence and F5 with it.

**World bearing (secondary only):** Pearl and Bareinboim define transportability as *"a license to transfer causal effects learned in experimental studies to a new population"* and introduce *"selection diagrams for expressing knowledge about differences and commonalities between populations of interest"*. Their formal result is that transfer is licensed only when the relevant differences are explicitly represented. That is F5 in statistics: the wall moves only on contact with a representation of the other population. Corroborates, low overlap.

### F6 — The target ground, not agreement or prestige, settles portability

**Mode: `general` for the anchor rule, `specified` for this question. Domain all. Status: triangulated (Fig 2 and Fig 7, low overlap: anchor triangulation vs selection between rooms).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)

A list of places that adopted a method, or a list of practitioners who agree that it works, is a room, not an anchor. A method's prestige can give it a budget to be tried in a new place, but prestige cannot settle whether it paid there. Only the target ground can. Fig 7 :12-13 describes the failure: handing the same closure along a chain of adoptions compounds agreement without adding evidence.

**Refuter:** a documented case in which agreement among practitioners, with no ground reading in the target place, correctly settles whether a method ported successfully and prospectively predicts the next failure. That would falsify the anchor rule as applied here.

### F7 — The break is usually at the middle link

**Mode: `specified`. Domain D1, D4. Status: single-source (Fig 3, with Fig 12 :112 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :26)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."** (Fig 12 :112)

The usual failure when a method arrives somewhere is not that the practitioners cannot execute it. It is that their vocabulary has no terms for what the new situation affords and cannot say what would count as progress there. Fig 3 :26 says this middle link has neither obvious failures nor obvious tests, so it attracts the least attention. Budget piles up at perception (link 1) and planning (link 4) because those have instruments, while the break sits at links 2 and 5.

**Refuter:** a documented transport where perception, vocabulary and objective all measure as working and the failure is located at planning or execution. That would falsify the "usually middle" claim, though not the dependency ordering.

### F8 — Same method components, different arrangement: isomer or functional group

**Mode: `specified`. Domains D1, D3. Status: single-source for the figure definition (Fig 12), with the implementation-science source corroborating the function-over-form distinction but from a different frame.**

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

Two methods with the same list of steps, tools and skills but different bonds between them are **isomers** under Fig 12 :117: same atoms, different arrangement, different behaviour, with the difference invisible in the ingredient list. Two methods sharing only a pattern such as "diagnose, intervene, check" are members of one **functional group** (Fig 12 :124). A component that survives its own use is a catalyst; a spent component behaves differently across uses and nothing in the method's description records which it is (Fig 12 :119). This is carried out fully in `06_isomers_and_order.md`.

**Falsifier, written before the run:** if two methods with identical atoms and identical bonds nevertheless diverge in portability with no difference in ground contact or imported atoms, the isomer framing is insufficient and the difference must be habitat (D2), which moves the explanation out of D1/D3.

### F9 — What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per place and population, never a global average | general | Fig 1 :19, :22 | figure-derived |
| The receiving place's ground is the anchor, not consensus | general | Fig 2 :29, :35 | figure-derived |
| What crosses must be a generator, not a recording | specified | Fig 4 :22, :23, :25 | triangulated F1 |
| Portability is method-and-habitat, not method alone | specified | Fig 11 :39, :40 | triangulated F2 |
| Isolation is habitat substitution with two silent failures | specified | Fig 11 :66-70 | triangulated F2 |
| The description travels in effect terms; the record is the term | general | Fig 6 :30, Fig 9 :30-31, Fig 13 :130 | triangulated F3 |
| R_T must be measured, not assumed zero | general | Fig 4 :27, :30 | triangulated F4 |
| Renewal needs contact with a differing closure | specified | Fig 6 :14, :23; Fig 8 :32 | triangulated F5 |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :24, :26 | single-source F7 |
| Same components, different bonds: isomer or functional group | specified | Fig 12 :117, :124, :119 | single-source F8 |
| Which specific method will work in a given new place | not stated | none | `gap`: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A method keeps paying in a new place while only a fixed recipe crossed, with no reapplicable generator and no head start for the receiver, and with the target ground measured throughout (breaks F1, Fig 4 :22-25).
2. A method's performance survives a habitat substitution that removes a condition its goal required, and the new habitat's unchosen actors measurably do not affect the outcome (breaks F2, Fig 11 :67-70).
3. A method transported by a description in source-only terms, with no bonds or lineage recorded, still keeps paying in the target place against a measured ground (breaks F3, Fig 6 :30, Fig 9 :30-31).
4. A measured round trip from source to target and back matches exactly, so R_T = 0 across a real place change (breaks F4, Fig 4 :30).
5. A method keeps paying in a new place while its practitioners never contact a differing closure and only compose inside their own library (breaks F5, Fig 6 :23, Fig 8 :32).
6. Agreement among practitioners, with no ground reading, correctly and prospectively settles which methods will port (breaks F6, Fig 2 :35, Fig 7 :13).
7. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a target-ground measurement has paid for the shape in a named place.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of method transfer (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Carry the generator and its lineage, not the recipe. Record what was compressed and what the round trip dropped (Fig 4 :22-25, :30).
3. Enumerate the receiving habitat before transport: actors, conditions, relations, and the two silent failures of Fig 11 :68-69. A pilot in a substituted habitat proves wiring, not capability (Fig 11 :70).
4. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
5. Keep the two conditions separate in every report. A blended "portability score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
6. Use the secondary literature as a budget filter and as corroborating witnesses, never as the verdict. Roberts and Sibum are different fields; Pearl and Bareinboim, Deaton and Cartwright, and Stirman et al. are three different evidence pools (Fig 2 :31, :40).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which specific method will work in a named place; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `60_FIGURES_AS_METALAWS.md`, and three essays opened directly this session (*The Library of Babel*, Oct 02 2026; *The Recursive Self-Improvement Trap*, Nov 19 2026; *The Hard Problem is About Source*, Aug 28 2026; all Adventures in Machine Learning).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop.
- WATSON 60 confirms that the figures are metalaws for design questions: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* No ruling was requested here.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six physical substrate terms to components of a method | **Retracted, strain S1** | Only fit by renaming protocol steps as gradients and skills as spectra. Re-census: Fig 13 governs the record-is-the-term principle, the set/arrangements distinction, and the honest stop, not the physical identification of method parts |
| Read Fig 4 "Only methods cross up" as a literal claim about geographic diffusion | **Narrowed to an analogue** | Fig 4 governs scale transforms in the loop. The geographic sense is an instance, corroborated by Roberts and Sibum at a different stratum. Fig 4 still decides C1 structurally |
| Initially wrote that "shape, not a name" forbids naming any method | **Narrowed and corrected** | The canonical phrase governs a *missing* primitive. Naming an already-held method is a binding from another frame, recorded as such, with provenance owed. The gap row in F9 stands |
| Treated FRAME's "fidelity-consistent" as a direct figure quote | **Corrected at source level** | FRAME is a world source, quoted in `10_source_ledger.csv` and section 3 only as secondary corroboration; no figure line was invented |
| Read "A test harness is a substituted habitat" as applying only to artificial labs | **Broadened by re-census** | Fig 11 :70 names any substituted habitat, which includes a pilot site or a training workshop. Kept as a standing trap in F2 |
| Wanted to call C1 and C2 a partition | **Marked union** | Fig 9 :54-57; D1/D3 and D2/D4 overlap, so the union must be unbundled before search |
| Which method will work in the target place | **Marked `gap`** | Fig 9 :32; the essay's source rule says an instrument reading a result *"cannot comment on the source"*. What is owed is a discriminator, not a name |

**Strains sent to the log:** S1 (Fig 13's six physical terms applied to method components), resolved by re-census to record-as-term and honest-stop roles; S2 (Fig 4's membrane read literally as geographic diffusion), narrowed to an analogue with the structural claim retained; S3 (calling FRAME's "core elements" the framework's atoms), re-census: a world-source binding with zero verdict weight. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: it is a union of generator-crossing (C1) and habitat-reproduction (C2), each with its own loop and instrument.
2. **What is the anchor?** The receiving place's ground, named in Fig 2 :29. Not adoption counts, not prestige, not internal agreement (Fig 1 :27).
3. **What crosses?** A generator, not a recording. Fig 4 :22-25 and Fig 10 :68. A seed carries what will grow, not the tree.
4. **What happens on arrival?** Habitat substitution with two silent failures. Fig 11 :66-70. What you failed to reproduce and what you unintentionally introduced.
5. **How does the method stay alive there?** Renewal of reach through contact with a differing closure. Fig 6 :14, :23; Fig 8 :32.
6. **What carries the know-how?** The lineage and the bonds, not the ingredient list. Fig 12 :5, Fig 13 :130. Cast in effect terms (Fig 6 :30, Fig 9 :30-31).
7. **What can be said at the stop?** A shape and two conditions with six falsifiers. Not the name of the method that will work everywhere. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a method is portable when what crosses is a generator and a head start rather than a recording, and when the receiving habitat reproduces what the method's goal required with its unchosen actors enumerated; portability fails when a recording is replayed, or when a required condition was not reproduced, or when the new actors change the method's valence; the description must travel in effect terms with its lineage, the round-trip gap must be measured, and the receiving place's ground and not agreement settles the result.** The two conditions are kept separate, never averaged. Which specific method will work in a named place is a `gap`, not a hidden answer. Mode `specified`. No world source was allowed to flip a verdict; the one genuine strain (physical substrate terms applied to method parts) was returned to the census and re-mapped. No unresolved strain remains after re-census.
