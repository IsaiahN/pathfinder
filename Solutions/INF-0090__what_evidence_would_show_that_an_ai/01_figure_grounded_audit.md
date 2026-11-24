# Figure-grounded audit: what would count as evidence of flexible use

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, plus the public sources in `10_source_ledger.csv` fetched 2026-11-23.

---

## 0. The residual, in effect terms

Two hypotheses are consistent with the same observation, a system producing correct outputs on a task:

- **H1, flexible use:** the system holds a method it can reapply in a context whose arrangement differs from anything it trained on.
- **H2, familiar association:** the system reproduces associations familiar from training, succeeding wherever the familiar cues recur and failing where they do not.

The residual R is that **current evidence does not discriminate H1 from H2**. In-distribution accuracy is a frame-internal quantity that both hypotheses produce equally. Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

R by arity, symmetry, scale (Fig 9 :21-22, *"R, described / arity · symmetry · scale"*):

- **Arity:** at least two conditions, a new-context condition and a familiar-cue condition. This is a **union compound**, not one hard question (Fig 9 :54 *"when the split lands on a union rather than a partition, unbundle before you search again"*). It has its own loop and its own ground.
- **Symmetry:** the transfer from training context to new context is ordered. Fig 12 :70-72 names → *"sequence", "A then B; B needs A to have happened"*. The reverse, new to familiar, is not the same test.
- **Scale:** first order inside one context, second order across a distribution of contexts. Fig 12 :104 *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"*.

**What an answer would look like, written down and bound before the run** (Formula step "Direction"): a discriminating observation that (a) separates a reapplied method from a replayed recording, (b) is indexed per context and never averaged, (c) is triangulated by frames that do not share an evidence pool, (d) costs less to state than the associations it explains, and (e) is announced with a refuter written in advance. This binding is an ordinary term from here on, so it can accrue a residual like anything else.

---

## 1. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| **D1, the model's closure** | atoms(Γ), bonds, Γ, φ, R per slot | composition, residual, cost (bits) | the ground, via settlement | partition boundary: what composes inside closure(Γ) |
| **D2, the evaluation frame** | test sets, metrics, benchmark designers | accuracy, score | *should be* the ground; often a proxy the benchmark produces | union with D3 when the harness is the habitat |
| **D3, the deployment habitat** | new contexts, conditions, users, distribution shift | contact with R in a new context | the ground in that new context | union with D2; unbundle before searching |
| **D4, the verifier frame** | outside frame, refuter, instrument | residual, agreement | the ground, never agreement | partition: verifier must not hold the interiors |

**Order by dependency (Fig 3).** Perception: can the system tell a new context from a familiar one? Vocabulary: does it have terms for what the new context affords? Objective: can it say what would count as progress in its own terms? Planning: a route under incomplete information. Learn and carry: name what worked, verify it, carry it. Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."* The middle link is the one that breaks and has the fewest instruments: Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**A gap in the census is recorded, not filled.** D2 and D3 are a union, not a partition: Fig 11 :70 *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* Until they are unbundled, any benchmark success carries both a wiring condition and a capability condition, and a single lever will clear only one (Fig 9 :55-56 *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds"*).

---

## 2. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, aggregate hides it, frame-internal quantities disqualified | governs the *form* of the evidence |
| **2 The Ground** | anchor does not update; independence; agreement from one pool is one witness | governs *who may settle it* |
| **3 Dependency Chain** | the middle link has no instrument; a reading below the break is nothing | governs *where to instrument* |
| **4 The Membrane** | *"Only methods cross up. Only head starts come down."* | **decisive**: method versus recording |
| **5 Mint Pipeline** | MDL bargain; *"explains one occasion perfectly"* fails; own output is not success | governs *what the evidence must cost* |
| **6 Closure / Reachability** | novel is relative to atoms; depth and absence look the same from inside | governs *what a failure means* |
| **7 Room Chain** | room agreement is variation, not a verdict; mirrors do not correct | governs *why more of the same tests fail* |
| **8 Union Surplus** | residual first, frame second; search finding nothing is not proof of absence | governs *search discipline* |
| **9 Leave / Arrive** | describe the effect not the cause; filters are not witnesses; unbundle unions | governs *the description of R* |
| **10 Ground Maintainer** | verifier cannot reconstruct the claim; bring a characterised residual | governs *the checking arrangement* |
| **11 The Habitat** | capability is agent-and-habitat; synthetic solve proves wiring only | governs *where capability lives* |
| **12 The Bond** | same atoms, different bond, different substance (isomer) | governs *the operational transfer test* |
| **13 Minimum Viable Set** | unreachable is a verdict; set closed, arrangements not | governs *the honest stop* |
| **Operators table** | → is an ordered bond; ¬ is the refusal a vocabulary needs | governs *refuter and order* |
| **Symbols table** | R is the aim; the ground is the anchor; R_T is the round trip gap | governs *notation* |

Strained readings are named as such below, not smoothed over.

---

## 3. Findings

### F1 — The discriminating evidence is a method that survives a round trip, not a recording (decisive)

Fig 4 :23-25:

> **"upward: a method that can be reapplied. Never the recording of a particular success."**
> **"downward: something that makes the next search cheaper. Never a replay of what worked once."**
> **"A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one."**

This is the question's own distinction stated in the figures' vocabulary. H1 is the left column: a method that can be reapplied, verified and compressed to its essentials (Fig 4 :19 *"carry up / a method that can be reapplied / verified, and compressed to its essentials"*). H2 is the right column: a description of one occasion, replayed.

Fig 4 :30 supplies the operational test:

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

So the evidence is not "the system scored well." It is: a compressed description of what the system does is carried up, brought back down into a genuinely different context, and **the round trip gap `R_T` is measured rather than assumed zero**. A system that only replays shows a large gap at the first change of arrangement; a system holding a method shows a small one. Status: **triangulated** across Fig 4 and Fig 11 (low overlap: the membrane rule about what crosses versus the habitat rule about where capability lives).

**Refuter:** if a system's compressed description can be reapplied across changes of arrangement with a round trip gap indistinguishable from zero, while its behaviour in those contexts is still fully predicted by a lookup of training associations, then F1's distinction fails as a discriminator. Record this before running any test.

### F2 — Capability is not a property of the benchmark; a synthetic solve proves wiring only

Fig 11 :39-40:

> **"capability is a property of agent-and-habitat, never of the agent alone."**
> **"An improvement that does not change contact changes nothing, however much it improves."**

Fig 11 :70:

> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

So evidence collected inside one harness cannot by itself establish flexibility in new contexts. It establishes that the wiring works in the substituted habitat. What is owed is contact with a habitat the harness did not supply, with the substitutions recorded (Fig 11 :66-68 *"Isolation is not removal of the habitat. It is substitution of one habitat for another"* and *"what you failed to reproduce is invisible until the goal fails"*).

This is not a rhetorical objection. It is the reason the question is answerable at all: capability is a property of agent-and-habitat, so changing the habitat is a legitimate instrument. Status: **triangulated** with F1 and with Geirhos et al. 2020 (shortcut learning: rules that "perform well on standard benchmarks but fail to transfer to more challenging testing conditions").

**Refuter:** an agent-only improvement that moves the ground in a new habitat would refute the capability claim (Fig 11 :72 *"an agent-only improvement that moved the ground would refute the capability claim"*).

### F3 — The signal is per context, never an average

Fig 1 :19, :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"* and Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

Applied here: "object slot" is the individual new context or test item. A system may score near-perfectly in aggregate while one context carries all the live residual. A single mean accuracy number is exactly the aggregation that throws the signal away. The evidence must be a vector of per-context residuals, with the live slots identified. This is also why the common claim "it scored 95 percent on the benchmark" is not yet evidence of either H1 or H2.

Status: **triangulated** with Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* An aggregate score is a filter for the budget, not a witness for the verdict.

**Refuter:** show a context in which the system's residual stays positive and flat across repeated attempts while the aggregate score improves. If none can be produced after a genuinely distributed search, the per-context requirement is still a discipline, not a discovery.

### F4 — The method must pay a bargain; a term that explains one occasion perfectly fails

Fig 5 :43-44:

> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

Fig 5 :48:

> **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."**

A memorised association is a term that explains one occasion perfectly. It fails the minimum description length bargain: it does not compress the new contexts, so stating it plus what remains unexplained costs more than the confusion it removed. A reapplied method compresses many contexts under one description and pays. Status: **single-source** for the figure rule (Fig 5), corroborated from different fields by Chollet 2019 (*"masks the system's own generalization power"*) and Power et al. 2022 (generalization "well past the point of overfitting"). The figure line itself governs; the world sources only corroborate.

**Refuter:** a compact rule that fits one occasion and assigns high probability to every novel context also would pass the cost test while being mere association. The cost test alone is therefore insufficient; it must be run together with F1 and F5.

### F5 — The check must be independent and the verifier must not hold the interiors

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."**

Fig 2 :31-32:

> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."**

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."*

Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* Fig 10 :52: *"Bring a characterised residual, never the source."*

So the evidence must include at least two frames with **low overlap** (for example, a behavioural transfer test and a mechanistic or provenance probe) ranging separately against a ground that does not update. Ten benchmarks from one family are one witness wearing ten names (Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes"*; Fig 7 :36 *"A chain of mirrors is one long room"*). The outside frame sees the residual and the shape claim, not the model's interiors.

Status: **triangulated** across Fig 2, Fig 7 and Fig 10. This is also the rule that makes the real-world conflict in the literature informative rather than paralysing: Lake & Baroni 2023 report human-like systematic generalization under their MLC procedure; Goodale & Mascarenhas 2026 reply that the challenge still stands and that the model "struggles to learn rules that are even slightly out of distribution." A conflict sends the derivation back to the census, never flips the verdict. Here it reinforces F2 and the demand for low-overlap instruments.

**Refuter:** if two apparently independent tests draw on the same training corpus and the same metric family, their agreement is disqualified (Fig 2 :40), not doubled.

### F6 — Novelty is relative to the library, not to the world

Fig 6 :22:

> **"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."**

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*

So "new context" must be defined in effect terms relative to what the system holds. A context that is novel to the benchmark designer but uses only the atoms and bonds already in Γ is a search question, not an import question: the answer may be in the closure and merely unfound. A context that requires an atom the system does not hold is a genuine absence, and no amount of testing inside the closure will supply it. From inside, the two look the same, so the report must keep them separate. Status: **triangulated** with Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*

**Refuter:** a system that fails a "novel" context and then succeeds after a single new primitive is added is shown to have been at a genuine absence; one that succeeds after more search at the same reach was merely unreached. Confusing the two is the failure this finding names.

### F7 — Same atoms, different bond: the operational transfer test

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :95-96: *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."*

This gives the cheapest discriminating experiment. Hold the atoms (the ingredients available in the new context) fixed and change only the bond (the arrangement, order or relation). A system relying on familiar associations keys on the ingredient set and fails; a system holding a method tracks the bond and transfers. This is a one-pass check rather than a search: Fig 9 :29 *"matching is a one-pass check, not a search"*. Full derivation in `06_isomers_and_order.md`. Status: **triangulated** with Fig 4 (method vs recording) and with Lake & Baroni 2018 (mix-and-match works for small differences; systematic composition fails).

**Falsifier, written before the run:** if the system transfers equally well when the bond is changed and when it is preserved, the bond is not what it is using, and the isomer test has no discriminating power here. Record that as a failure of the test, not as evidence of flexibility.

### F8 — A refuter must be written as an ordinary term before the test

`THE_FORMULA.md`, "Direction": *"The remedy is a discipline rather than a step: make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else. Then the preference is refusable by the same test as everything else. Committing a prediction before a run is this, already working."*

Fig 5 :65-66: *"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."*

A frame cannot check the direction of its own question (Formula step 2, *"a frame searching for an answer of a given SHAPE holds that shape as a PREFERENCE, not a term... nothing above can see it"*). So the claim "this system uses information flexibly" must be paired, before the run, with a statement of what would count as failure. Without that, any result can be read as flexibility. This is the same discipline that produces the pre-registered refuter below.

Status: **single-source** as a figure rule (Formula "Direction" plus Fig 5), but it is a rule this framework imposes on itself, corroborated by Schaeffer et al. 2023: apparent abilities can be "due to the researcher's choice of metric rather than due to fundamental changes in model behavior."

### F9 — What actually survives, with its mode attached

| claim | mode | figure |
|---|---|---|
| Flexible use and familiar association are not the same quantity; one is a reapplicable method, the other a replayed recording | `general` (structural) | Fig 4 :23-25 |
| Capability is agent-and-habitat, so harness success proves wiring only | `general` (structural) | Fig 11 :39, :70 |
| Evidence must be per context, not aggregate | `specified` (falsifiable) | Fig 1 :19, :22 |
| Evidence must triangulate across low-overlap frames with an unupdating anchor | `specified` | Fig 2 :29-32, Fig 10 :42 |
| The method must pay the MDL bargain and not explain one occasion perfectly | `specified` | Fig 5 :43-44 |
| Holding atoms fixed and changing the bond is the discriminating transfer test | `specified` | Fig 12 :117 |
| A particular benchmark or numeric threshold that settles this question | **gap** | no figure names one; Fig 9 :32 *"you get a kind of thing, never the answer itself"* |

The last row is a genuine gap, not a restrained claim. Fig 8 :50 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*: naming a specific benchmark would be an import with no source gate and no shadow test. The answer returned here is a shape, not a name.

---

## 4. Pre-registered refuter

Required before any outreach. Formula step "Direction" and Fig 5 :65-66 make the sought-for shape an ordinary term; a falsifier written before the run is a design instrument.

The shape claim (that the evidence above discriminates flexible use from familiar association) is refuted if any of the following holds:

1. **No discrimination:** a system fully described by a lookup of training associations shows a round trip gap `R_T` indistinguishable from a system holding a reapplied method, across changes of bond with atoms held fixed (breaks F1, F7).
2. **Aggregate sufficiency:** a single aggregate score, checked per context, leaves no live slot residual anywhere, yet the system still fails when the habitat is substituted (breaks F2, F3).
3. **Pool collapse:** the two supposedly independent frames are found to draw on the same corpus, metric family or author team, so their agreement is one witness (breaks F5).
4. **Bargain failure:** the "method" costs more to state than the associations it replaces, or explains only the occasion it was fitted to (breaks F4).
5. **Direction failure:** no failure condition was written down before the test, so the result cannot be refuted (breaks F8).

If any fires, the shape claim is withdrawn or repaired and the retraction is recorded here. Until a discriminating test is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape claim and the refuter, not with a benchmark name (F8, Fig 10 :52).
2. Replace aggregate accuracy with a per-context residual vector and name the live slots (F3).
3. Build the transfer test as same-atoms, different-bond, with the bond change declared in effect terms before the run (F7, Fig 9 :30-31 *"your words are borrowed too, so describe the effect rather than the cause"*).
4. Use at least two low-overlap frames and an anchor that does not update; record the verifier's blindness to interiors (F5).
5. Report depth versus absence separately, and `unreachable` rather than silence when nothing is found at this budget (F6, Fig 13 :134 *"Unreachable is a verdict here, not a silence"*).
6. Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator (the shape and the refuter), not a list of scores.

---

## 6. Canonical usage check

Two local sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` — *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at *"the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` — step 7 separates SEARCHED, INWARD and OUTWARD, with SEARCHED *"Asked FIRST — it is cheapest and the other two assume its answer."* World sources are secondary corroboration only; figures decide.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "A higher benchmark score is evidence of flexible use" | **Refused.** Fig 11 :70 and Fig 1 :27 disqualify the harness-internal quantity. The benchmark score is a filter for the budget. |
| "Novel context means novel to the experimenter" | **Corrected.** Fig 6 :22 defines novelty relative to atoms(Γ), not to the world. |
| "A synthetic benchmark that requires composition settles the question" | **Narrowed.** Fig 11 :70 proves wiring, never capability. Lake & Baroni 2023's own Discussion limits MLC to episodes in-distribution with meta-training, which agrees with the figure rather than straining it. |
| "The two world papers conflict, so the verdict is undecided" | **Refused.** Lake & Baroni 2023 and Goodale & Mascarenhas 2026 conflict. Per the method, conflict sends the derivation back to the census, never flips the verdict. It strengthens F2 and F5. |
| "The framework can name the benchmark that would settle this" | **Forbidden.** The README says a shape, not a name; Fig 9 :32 *"you get a kind of thing, never the answer itself."* Row F9 remains a gap. |
| "Same atoms, different arrangement is an analogy" | **Not an analogy.** Fig 12 :97-98 *"This is not an analogy. Chemistry hit it first: silver fulminate and silver cyanate have the same composition and different properties."* |

### Seven-question recursive derivation (summary)

1. **Is the residual one question?** No. Fig 9 :54 union compound; unbundle the familiar-cue condition from the new-context condition.
2. **What is owed first?** SEARCHED (Formula step 7): is the flexible method already in the closure and merely unfound? Same atoms, same wall, more of the space visited.
3. **What instrument extends access inward?** Per-context residual vector (Fig 1 :19) and a tighter instrument at the middle link of Fig 3 (Fig 3 :27).
4. **What frame might hold the missing atom outward?** A different closure with low overlap: comparative psychology or human developmental data, cast in effect terms (Fig 6 :30 *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."*).
5. **Is a mint owed?** Only if SUPPORT, REACHABILITY and NOVELTY all pass (Formula step 3). A named benchmark fails NOVELTY and has no source gate.
6. **What settles it?** The ground in the substituted habitat, ranged against by independent frames (Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."*).
7. **Where does it stop?** At the limit of the available instruments, with the lineage and the gap recorded (Fig 13 :134).

### Updated verdict

The shape survives: the discriminating evidence is a reapplied method with a measured round trip gap, reported per context, triangulated by low-overlap frames against a ground that does not update, paying a description-length bargain, and announced with a refuter written before the test. What does not survive is any claim that a specific benchmark or number settles the question; that is a name where the framework returns a shape. Strained after re-census: **none**. The apparent conflict between the 2023 Nature result and the 2026 TACL rebuttal is resolved by re-census, not by choosing a side (both are world sources, secondary; the figures decide).
