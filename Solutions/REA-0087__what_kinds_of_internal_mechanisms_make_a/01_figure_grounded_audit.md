# Figure-grounded audit: internal mechanisms for robustness

**Mode of this document: `general` on the structural findings, `specified` where a figure line is applied to AI systems, nothing `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-24): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources of figure quotes:** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim, cited as `Fig N :line`. Every quoted string below is an exact substring of that file (case-insensitive, trailing punctuation disregarded). No figure quote was taken from a summary.

---

## 0. The residual in effect terms

`R = |Γ(b,a) − o′|` (Symbols table :37-39: *"The gap between prediction and observation. The central quantity: everything the system does is driven by it. It is the aim, not only the error signal"*), indexed per slot (Fig 1 :11: *"residual R indexed by object slot"*).

The question is: why does `R` stay small in some systems when the observation `o′` is unfamiliar, or when some actor is actively working to make `Γ(b,a)` diverge from `o′`? Both pressures are changes in the input distribution, but they are not the same bin. Unfamiliarity is a NOVEL condition (the model was right about nothing here, extend perception). Adversarial pressure is a REFUTED or BROKEN condition (a regularity the model holds is being made false, or a binding no longer fits). The two may be co-present, which makes the question a union compound, not one hard problem (Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*).

An answer would look like: a list of conditions, each with actors, a currency and an anchor, each falsifiable separately. That shape is bound now so it can accrue a residual like anything else (Fig 5 :66: *"Committing a prediction before a run is this, already working."*). The sought-for shape is made an ordinary term because a frame cannot see its own direction otherwise (Fig 5 :62: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."*).

---

## 1. Domain census, before any figure line is chosen

Describe `R` by arity, symmetry and scale:

- **Arity.** Three-place plus slot: belief `b` (history and inherited prior mixed by `w`), action `a`, observation `o′`, indexed by `s`. Not a scalar. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
- **Symmetry.** The two pressures are not symmetric. NOVEL is about what is missing; REFUTED is about what is wrong. An adversary is an actor whose valence is relative to `R` (Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*). Robustness itself is a threshold relation, a comparison ⋛, not a symmetric join of two operands. The operators needed are ordered or unary: sequence →, production ⇒, negation ¬ (Operators table :70-78).
- **Scale.** Single loop, population through the membrane, and habitat. Fig 4 :19-20: *"the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."*

One line per domain. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Per-slot loop and route | slots `s`, prediction `Γ(b,a)`, observation `o′`, residual `R` | residual reduction and the MDL bargain | the ground, the only metric (Fig 1 :23) | admitted |
| D2 Closure and reach | library `Γ`, atoms, bonds, imports | reach; what can be composed and what cannot | settlement against the ground (Formula step 5) | admitted |
| D3 Ground channel and triangulation | frames, adversary, anchor | independence (how little frames share evidence) | the ground, which does not update (Fig 2 :33) | admitted |
| D4 Habitat and cross scale | habitat actors, conditions, relations, maintainer seat | contact | the ground; contact is read off the world (Fig 11 :48) | admitted |
| D5 Verification and room chain | expert checker, outside frame, rooms | correct shape correction | the ground, never agreement (Fig 7 :35) | admitted |
| X1 "one internal robustness gadget" | the model alone | accuracy under attack | none nameable once contact is removed (Fig 11 :40) | not a domain yet |
| X2 "more training data" as a cause | the corpus | coverage | already inside D2, and idempotent under composition (Fig 8 :32) | absorbed |

**Partition or union:** union. D1 and D2 give the loop and the reach; D3 and D4 give the channel and the habitat; D5 is the checking arrangement. The pressures are co-present conditions, and a case in two conditions is not a harder case of either (Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*). They must be unbundled before search.

**Dependency order (Fig 3):** perception, vocabulary, objective, planning, learn and carry. Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Refuse before mint (Formula step 2); describe the residual before choosing a frame (Fig 9 :27-28). The middle link is where chains break: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (Fig 3 :27).

Strain test applied after the census: a line that only fits with force governs another quantity. Two apparent strains were found and re-censused rather than smoothed (see section 6).

---

## 2. Figure census (bearing, quoted before concluding)

| figure | bearing on this question | verdict used |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified; ground is the only metric | governs D1 |
| 2 The Ground | anchor must not update; independence; correlation disqualifies a verdict | governs D3 |
| 3 Dependency Chain | a link with no instrument is not a working link; order by dependency | governs order |
| 4 The Membrane | methods cross up, head starts down; round trip gap R_T | governs D4 and measurement |
| 5 Mint Pipeline | five bins including REFUTED; guards as a product; MDL bargain | governs D1, D2 |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs D2 |
| 7 Room Chain | agreement is variation, not a verdict; next room must differ | governs D5 |
| 8 Union Surplus | closure is idempotent; provenance separates convergence from import | governs D2 |
| 9 Leave / Arrive | union not partition; describe residual before frame; filters are not witnesses | governs method |
| 10 Ground Maintainer | channel decays, ground does not; verifier non-access; declare stakes | governs D3, D5 |
| 11 The Habitat | capability is agent-and-habitat; valence relative to R; harness is substituted habitat | governs D4 |
| 12 The Bond | negation is not a bond; a vocabulary that cannot refuse can only accumulate; two currencies | governs D1, D2 |
| 13 Minimum Viable Set | closed set, unbounded arrangements; unreachable is a verdict | governs D2 |
| Operators table | ¬ is unary: a refutation is a negation | governs D1 |
| Symbols table | R is the aim and a slice; R measured per slot | governs the residual |

---

## 3. Findings F1 to F9

### F1 - Robustness is per slot. An aggregate is how the signal disappears.

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :20-22: **"a global residual near zero with one live slot is a legal state and not an inert one"**; **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :23: **"The ground enters as the only metric."**
Fig 1 :28: **"A frame cannot score itself with a quantity it also produces."**

An adversary that produces a tiny mean loss while one live slot is wrong is exactly the state that averaging renders invisible. The first internal requirement is therefore a monitor that keeps the slot index and treats the positive part `R⁺_s` as the live mass. A single scalar "robust accuracy" is a frame-internal score if it is the same quantity the system optimises; it cannot settle anything.

**Mode:** `general` for the indexing rule, `specified` for the adversarial reading.
**Status:** triangulated (Fig 1 and the Symbols table's *"R is measured per slot, never as a single global number"*; low overlap between the agent loop and the notation table).
**Refuter:** demonstrate a system whose per-slot worst-case residual is large under a shift while an unaggregated monitor (not a mean) shows no live slot, or show that slot indexing is recoverable from a global average without extra information.

### F2 - A system that cannot refuse can only accumulate.

Fig 5 :53: **"refuted: a term we hold is wrong; a term is owed that says so"**
Operators table :58: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**
Fig 12 :140: **"A vocabulary that cannot refuse can only accumulate."**
Fig 5 :41: **"Any one of them at zero stops the mint entirely."** and Fig 5 :33: **"The three guards are a product, not a checklist."**

The first four route bins sort a gap by what is missing. The fifth sorts it by what is wrong, and no arrangement of the other four reaches it. Adversarial pressure typically makes a held regularity false, not absent. If the mechanism vocabulary has only `+`, `→` and `⇒`, the system can add another term but cannot write "this term no longer holds," so the reach grows by accumulation while the false term keeps composing (Fig 6 amendment: *"What is recorded only grows. What is reachable is derived, and it can fall."*). Refusal is a unary operator, not a seventh bond: it adds a term that refuses and removes nothing (Formula step 3).

**Mode:** `specified` for the application to held regularities; `general` for the operator structure.
**Status:** triangulated (Fig 5 amendment and the Operators table, different figures, different roles).
**Refuter:** exhibit a system with no negation operator that recovers from a refutation of a held term with no new refusing term and no rise in the reach, or show refutation is expressible as a conjunction of the four missing-bins.

### F3 - A closed channel and a perfect prediction look the same from inside.

`THE_FORMULA.md` step 8: *"the loop stops only when R stops arriving, which is either a perfect prediction or a closed channel, and from inside those look the same."*
Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :25-28: *"stale percepts, dropped transients, saturated metrics, pooled readings"*; **"you have lost touch"**
Fig 10 :29: **"→ keep the anchor reachable"**

An adversary need not make the model wrong; it can saturate the metric, drop the transient or pool two readings, so `R` simply stops arriving. Because the loop has no convergence criterion, silence is read as success. The internal requirement is an office outside the loop whose output is a verdict on the connection, not on the world: contact has been lost, restore the reading. This cannot be a component of the same frame, because the frame reads through the channel it would have to check (seat map, failure genera: *the figure point that an instrument points inward unless it is built to point out*).

**Mode:** `specified`.
**Status:** triangulated (formula closure rule and Fig 10, low overlap: one is loop mechanics, one is a checking seat).
**Refuter:** show a system whose ground channel is demonstrably dead under attack while an internal instrument correctly reports the loss of contact without any outside seat, or show a dead channel is distinguishable from perfect prediction from inside the loop.

### F4 - Independence is load bearing. Agreement inside one pool is a mirror.

Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**
Fig 7 :12-13: **"same closure, handed along;"** **"agreement compounds, evidence does not"**
Fig 7 :36: **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**

There are two adversarial routes to coherent drift: mutual update (Fig 2 :13-15, each frame updates on the others and they converge on whoever had most influence) and common cause (Fig 2 :18-21, they never talk and still agree because one evidence pool speaks through both). Robustness therefore requires frames ranged separately against an anchor that does not update, with low overlap. Training only to raise agreement with a shared benchmark enlarges the pool and buys a convention, not a verdict. Red teaming that uses a genuinely different closure (different data, different instruments, different vocabulary) is the competing frame; a second copy of the same evaluator is one searcher wearing many names (Fig 6 amendment :53).

**Mode:** `specified` for AI evaluation, `general` for the anchor rule.
**Status:** triangulated (Fig 2 and Fig 7, different figures and different failures).
**Refuter:** exhibit a system with zero independence (one evidence pool, an anchor that moves when frames push it) that stays robust against an adversary able to move its frames, or show that adding frames to the same pool increases evidence.

### F5 - No amount of internal search adds an atom.

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."**
Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 13 :115: **"The set is closed. The arrangements are not. That gap is why import exists."**
Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

A genuinely unfamiliar input class is not in `closure(Γ)`. The three questions must stay distinct: SEARCHED (is it in here and unfound, cheapest, asked first), INWARD (extend an instrument that is already returning something that fails to resolve), OUTWARD (characterise `R` in effect terms and find the frame whose closure predicts its shape, with source gate, shadow test, and a debit against independence). Underivable-in-principle and unreachable-at-this-budget are different facts with different instructions (Fig 8 :40-43). Importing against a budget limit adds an atom that was not needed.

**Mode:** `general` for idempotence, `specified` for the novelty claim.
**Status:** triangulated (Fig 8, Fig 6, Fig 13; three distinct statements of the same barrier).
**Refuter:** show internal composition alone yielding robustness to a genuinely new atom-class, with no import and no instrument extension, or collapse underivable-in-principle into unreachable-at-budget and get the same instruction.

### F6 - Unfamiliar is not one bin.

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
Fig 5 :11-14: *"held: the model was right, nothing owed"*; **"new: extend perception, aim the probe"**; *"mis-attached: refit what you have, do not invent"*; *"mechanism broken: a new term is owed"*
Fig 5 :53 (the fifth bin, REFUTED, above).

A single lever aimed at "distribution shift" clears the region where only one condition holds and leaves intersections standing, because the second condition still binds (Fig 9 :56). Robustness work that treats novelty, broken binding and refutation as one pile of hard examples applies one lever to a union. The second-order value of unbundling is not a smaller pile but a describable residue (Fig 9 :59).

**Mode:** `specified`.
**Status:** triangulated (Fig 9 union rule and Fig 5 five-bin route).
**Refuter:** exhibit one intervention that clears NOVEL, BROKEN and REFUTED cases with no categorically different residue left over.

### F7 - Capability is a property of agent and habitat, not the agent alone.

Fig 11 :39: **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**
Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**
Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**
Fig 11 :51: **"No standing list of good actors survives a change of residual."**
Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

The habitat is enumerated, never composed (Fig 11 :43), and an adversary is an actor in it whose valence is relative to `R`. A robustness claim measured only in a fixed synthetic harness has substituted a habitat; it proves wiring, not capability. Removing a defence, adding a red team, or changing an evaluation budget changes contact, and when contact changes the claim must be re-measured. This does not mean no internal mechanism exists: it means the mechanism is not checkable apart from the habitat that settles it.

**Mode:** `specified` for AI systems; `general` for the capability claim.
**Status:** triangulated (Fig 11 and Fig 4 membrane rule, distinct figures).
**Refuter:** exhibit an agent-only change that moves the ground under adversarial pressure while the habitat and all contacts are held fixed, or show a synthetic harness proving capability rather than wiring.

### F8 - Every compression of robustness into one number has a measured gap.

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
Fig 4 :31-32: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold"*
Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**

An abstraction from per-slot residuals, refusal states and channel status to a single "robustness score" is a lossy transform. Carrying it up and back down will not match what was sent. The round trip gap `R_T` must be measured qualitatively at least (Symbols table :75-77: `gap(x, (T_E ∘ T_A)(x))`). Bits and actions are different units; a system holding one accounting will not notice the shortfall and will propose arrangements it cannot afford to test (Fig 12 :127-128).

**Mode:** `general`.
**Status:** single-source for the round trip rule (Fig 4), triangulated with Fig 12's two-currency rule, low overlap between them.
**Refuter:** produce a scalar robustness metric from which all per-slot refusals, channel states and bond arrangements are recovered exactly after abstraction and concretisation, with `R_T = 0`.

### F9 - Which specific mechanism fills the shape is a gap, declared.

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

No figure line names an architecture. The figure set constrains the shape any candidate mechanism must have; it does not select among ensembles, regularisers, formal verifiers, redundancy schemes or monitors. Naming one is a binding from the engineering frame onto a held slot, provenanced as such, not a derivation and not an import that moves the wall. What is owed is a source-discriminating instrument (a red team with a differing closure, a formal checker, an out-of-distribution benchmark, a channel monitor) that can tell candidate mechanisms apart. Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*

**Mode:** `general` for the limit, `specified` for the engineering frame.
**Status:** `gap` after a genuine re-census. This is a verdict, not a silence.
**Refuter:** derive a specific architecture from the six-term set and the bond rules alone, with no binding from the engineering frame and no new primitive.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A system retains per-slot robustness after its ground channel is demonstrably dead, or a dead channel is distinguishable from perfect prediction from inside the loop (F3).
2. A system with zero independence (one evidence pool, a moveable anchor) stays robust against an adversary able to move its frames (F4), or adding frames to the same pool increases evidence.
3. Internal composition alone yields robustness to a genuinely new atom-class with no import and no instrument extension (F5).
4. One intervention clears NOVEL, BROKEN and REFUTED cases with no categorically different residue (F6).
5. An agent-only change moves the ground under adversarial pressure with habitat and contacts held fixed (F7), or a synthetic harness proves capability.
6. A scalar robustness metric preserves every per-slot refusal, channel state and bond arrangement across abstraction and concretisation, so `R_T = 0` (F8).
7. A specific architecture is derived from the figures with no external binding and no new primitive (which would close F9).

If any fires, the corresponding condition is withdrawn. Until one is run, no part of this may be labelled `grounded`. Falsifier 7 is the one that would most change the answer, because it would turn the declared gap into a name.

---

## 5. Recommendation

1. Lead with F1, F2, F3 and F4. They are the conditions that are invisible from inside a system being attacked, which is why they are the ones an adversarial pressure exploits.
2. Keep the five bins and three guards distinct (F6). Do not present "distribution shift" as one condition.
3. State that the channel must be checked by a seat that does not read the interior (F3), and that independence is bought, not assumed (F4).
4. Characterise the unfamiliar in effect terms before naming a frame (Fig 9 :27-28), and price imports against independence (Fig 6 :24).
5. Report the round trip gap rather than a single score (F8), and declare F9 openly. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the conditions and the refuter, not a conclusion.

---

## 6. Canonical usage check and strain log

Two sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* And: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, stops at the limit of what instruments can distinguish, and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (2026-11-22): the figures are metalaws that decide design questions. The seat reads the ground; it does not ask the anchor to decide what the figures already settle. So this audit does not end with "this needs a ruling" on a design question it can derive.

### Retraction and confirmation log

| earlier reading | status after re-census and canonical check |
|---|---|
| "robustness is an internal architectural property" | **Retracted in D1 form.** Fig 11 :39-40 puts capability in agent-and-habitat. It survives only as one condition among five, never alone. |
| "adversarial training is the answer" | **Retracted.** It raises agreement in one evidence pool; Fig 2 :40 and Fig 7 :35-36 make that a mirror chain, motion without progress. It is admissible only as an import with a source gate and a debit against independence. |
| "more data covers unfamiliar inputs" | **Narrowed.** Fig 8 :32 makes search inside the closure idempotent. More data helps SEARCHED cases and budget-limited reach, not a missing atom. Underivable and unreachable-at-budget must be separated. |
| "adversarial and unfamiliar are one hard problem" | **Refused.** Fig 9 :55-57 makes it a union of conditions; unbundle before search. |
| "a robustness score settles the claim" | **Refused.** Fig 1 :19 per-slot indexing and Fig 4 :30 round trip rule both forbid a global scalar as a witness. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* |
| F2 negation as a seventh bond | **Corrected before conclusion.** The Operators table :70-78 makes ¬ unary and not a bond. The audit states it as a refusal operator; no bond count was changed. |
| Fig 5 four bins versus Fig 5 amendment fifth bin | **Not strained.** The amendment adds REFUTED; the four bins sort by what is missing, the fifth by what is wrong. Different quantities, recorded separately. |
| Fig 11 capability claim versus "internal mechanisms" in the question | **Not strained after re-census.** The question asks what kinds of mechanisms; the figures answer with conditions spanning loop, reach, channel, independence and habitat. Reading the question as asking for an agent-only gadget was the strain, and it was the question's framing, not the figure, that was narrowed. |

### Strains after re-census

- One live strain: the question's own phrase *"internal mechanisms"* pulls toward an agent-only answer, while Fig 11 :40 forbids agent-only capability. Recorded as a strain in the framing, not hidden and not used to change the figure verdict.
- One open item: whether a settled refusal can be composed over at the next level needs an instrument, not an argument. Same open item the exemplar records for operand types. It does not bear on F1 to F8.

### Updated verdict

The figure-derived shape survives: robustness is a union of conditions, a per-slot signal with a refusal operator, a reachable non-updatable ground with a channel monitor, independent frames ranged against it, an import path for genuine novelty, a habitat in which contact is enumerated, and a measured round trip gap. Which specific internal mechanism fills that shape is a declared `gap` (F9). Mode `general` for the shape, `specified` for the AI mapping, nothing `grounded`. Strains after re-census: one in the framing, named above, none hidden in the figures.
