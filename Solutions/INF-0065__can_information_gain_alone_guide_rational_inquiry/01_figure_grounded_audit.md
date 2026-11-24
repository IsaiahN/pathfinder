# Figure-grounded audit: can information gain alone guide rational inquiry?

**Mode of this document: `general` on the structural shape, `specified` where it is applied to this question. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are recorded in `10_source_ledger.csv`.

---

## 0. The claim under audit

> **Option A (gain alone).** A rational inquirer picks the next probe, term, frame, or experiment by maximizing information gain (expected entropy reduction, mutual information, or compression achieved). The scalar is the guide.
>
> **Option B (gain plus three constraints).** Information gain is a filter that says where signal may be. The next move is chosen only after relevance (which slot, which effect), cost (bits and actions), and consequences (what changes at the ground, and the cost if wrong) are also checked.

What each leads to: A produces a policy that is self-consistent inside its frame, can spend its whole budget on high-entropy but irrelevant regions, cannot compare two different currencies, and has no stop tied to the ground. B produces a policy whose residual is per slot, whose acceptance test is a two-currency bargain, and whose stop is a settlement at the ground with a written refuter.

The sought-for shape is bound as an ordinary term before the run, per `THE_FORMULA.md` "Direction": "make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else." The bound shape here is: *an inquiry policy that (i) ranges a live residual per slot, (ii) pays a stated cost in both currencies, and (iii) answers to a ground it cannot move.*

---

## 1. The residual, described before any figure line is chosen

- **Arity.** Selecting a next move is a choice among enumerable candidates. Fig 5 :58 (long line, quoted in `09` context) records that "The candidates are ENUMERABLE". Information gain is a **unary** score on a candidate. Relevance is a **binary** relation between a candidate and a residual slot. Cost is a **two-currency** accounting. Consequence is a relation between a move, the ground, and the future reach. A unary score has the wrong arity to close a four-condition residual.
- **Symmetry.** A global information-gain scalar treats slots symmetrically. The figures forbid that symmetry: Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." So the scalar has the wrong symmetry: it discards *where*.
- **Scale.** Inquiry runs across scales. Fig 4 :20 (from the kernel passage) says only the actors, currency, and anchor change with size. The currency at one scale (bits of description) is not the currency at another (actions spent finding out). A single scalar cannot be the currency at all scales.

**Strain test applied before concluding.** An early reading tried to make Fig 5 :46 ("When nothing is scoring, the drive manufactures a gradient.") endorse gain maximization as a guide. That reading strains against Fig 5 :48, which refuses it. Re-census assigns Fig 5 :46-47 to the *curiosity drive* (a mechanism that manufactures a gradient when nothing scores) and Fig 5 :48 to the *measure of success* (not the same quantity). Strain resolved by assigning different quantities, not by softening either line. The retracted reading is preserved in §6.

---

## 2. Domain census

One line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet. Partition or union, then dependency order (Fig 3).

| # | domain | actors | currency | anchor | question type |
|---|---|---|---|---|---|
| D1 | perception and the metric | agent, object slots, observations | residual `R` per slot; description length | the ground as the only metric (Fig 1 :23) | partition: what counts as a signal at all |
| D2 | the mint and acceptance decision | candidate term φ, library Γ, ground | `cost(φ) + left(R,φ)` versus `cost(R)`; bits | ground settles, a gate is not the ground | partition: which candidate is worth having |
| D3 | composition and its currencies | operands, typed bonds | bits (description) and actions (finding out) | none at this level, the claim is structural | partition: two currencies, not one |
| D4 | alignment, verdict, independence | frames A and B, the anchor, a witness frame | overlap / independence; cost of being wrong | the immovable ground (Fig 2 :29) | partition: what makes an agreement mean anything |
| D5 | habitat, contact, dependency | chain links, rooms, habitat actors | progress `R = h² × S`; contact | the ground | union compound: several conditions must hold together |

**Partition or union.** The four legs of the question are not four independent questions and not one big question. They form a **union compound** (Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."; Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."). Maximizing gain clears the gain condition and leaves the intersections standing, because relevance, cost, and consequence still bind. Unbundle before searching again.

**Order by dependency (Fig 3).** D1 (slot-indexed residual) → D2 (the two-currency bargain) → D3 (both currencies read) → D4 (verdict ranges against ground, not agreement) → D5 (contact is what an improvement can change). Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Fig 3 :20 "The chain is ordered by dependency, not by importance." Optimizing the gain calculation above a missing relevance link is effort that arrives at a step which cannot use it.

---

## 3. Findings

Every quote is verbatim from `03-FIGURES_TEXT.md`. Verdicts are kept per domain and never averaged.

### F1 - Information gain, if scored by the frame, is frame-internal (D1, decisive against Option A)

Fig 1 :23 "The ground enters as the only metric."
Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

Information gain is produced by the same frame that would use it to steer. Under this rule it cannot be the metric that settles the move. Fig 1 :25-26 names the frame-internal candidates: "coverage, and compression achieved" and "predicates minted, and credibility accrued." Compression achieved is precisely what information gain reports. Fig 5 :48 closes the same point from the curiosity side: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

**Mode:** `general` (structural, from the figures). **Verdict:** `triangulated` across Fig 1 and Fig 5, two figures with low overlap (the agent's metric versus the mint pipeline's curiosity drive). **Refuter:** show a figure line that makes a quantity the frame both produces and scores the ground, or exhibit a system whose self-scored compression settles a move against an independent anchor.

### F2 - The loss of slot index is a loss of the only signal that says where (relevance) (D1)

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

A scalar that sums or averages information gain over slots has the wrong symmetry. It can be large while the live slot is unaddressed. Fig 1 :20-21 adds that a global residual near zero with one live slot is a legal state, so an aggregate cannot even detect that there is work to do. Relevance is not an extra aesthetic preference bolted on after gain; it is the slot index the gain score must carry to be about anything.

**Mode:** `general`. **Verdict:** `single-source` at the figure level (Fig 1), corroborated in the world by Tishby et al. (relevance defined through a second variable) and by the Stanford Encyclopedia of Philosophy (quantitative information does not deal with truthfulness or meaning). **Refuter:** derive a per-move ranking from a global gain scalar that provably lands on the live slot for every possible arrangement of slot residuals, or show the figures aggregating `R` across slots.

### F3 - The acceptance test is a bargain that already contains cost (D2, decisive against "alone")

Fig 5 :42 "The acceptance test is a bargain, not a threshold."
Fig 5 :43-44 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."

`THE_FORMULA.md` step 3 writes the bargain as "accept iff cost(φ) + left(R,φ) < cost(R)". Information gain corresponds to the reduction in the leftover; it is one term of an inequality that also contains the cost of stating the term and the cost of the residual before it. A maximand that ignores either side of the bargain is not the figure's acceptance rule. Fig 5 :26 asks the same question in words: "and then: does the new term cost less to state than the confusion it removes?"

**Mode:** `general`. **Verdict:** `triangulated` across Fig 5 and `THE_FORMULA.md` step 3 (different condensation routes, low overlap in wording). **Refuter:** show an acceptance in the framework that admits a term on gain alone with no cost term and no leftover, or derive the bargain from gain alone.

### F4 - Bits and actions are two currencies that do not add (D3, decisive against "alone")

Fig 12 :125 "A composition costs in two currencies, and they do not add."
Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."
Fig 12 :129 "Neither figure predicts the other, so both are read or the choice is made blind."
Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."

Information gain is priced in bits. Every inquiry move that tests whether a candidate holds is priced in actions. These are different units. A policy that maximizes gain and treats the action cost as an afterthought does exactly what Fig 12 :127 names: "It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all." This is the sharpest figure-grounded reason the word "alone" fails.

**Mode:** `general`. **Verdict:** `triangulated` across Fig 12 (composition currencies) and Fig 9 :60 (filters versus witnesses), where the budget is a filter and never a witness. **Refuter:** produce a derivation in which action cost is representable as a number of bits with no loss, or show a rule in the framework that sums the two into one objective.

### F5 - The verdict ranges against a ground that does not move (D4)

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :42 "Buy independence in proportion to the cost of being wrong."
Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Consequences enter here, not as a vague addition. The cost of being wrong sets how much independence to buy; the ground decides; the budget only filters which options get tried. An inquiry policy whose single objective is gain has no place to put the cost of being wrong except as a multiplier on the same scalar, which Fig 12 :130 forbids. Fig 7 :35 adds: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

**Mode:** `general`. **Verdict:** `triangulated` across Fig 2, Fig 9, and Fig 7 (anchor / filters / selection), three distinct figures with different actors. **Refuter:** show a verdict in the framework produced by a frame's own gain score without any range against an immovable anchor.

### F6 - Relevance is contact with the residual, not a property the information carries (D5)

Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."
Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

An actor, probe, or datum is relevant relative to the residual, not in itself. Increasing information gain without changing contact with the live residual is an improvement in the agent in isolation, which Fig 11 :40 says changes nothing. Fig 11 :39 (same passage) states that "capability is a property of agent-and-habitat, never of the agent alone."

**Mode:** `general`. **Verdict:** `triangulated` across Fig 11 (habitat and contact) and Fig 1 (per-slot residual). **Refuter:** exhibit a case where an agent-only increase in gain moves the ground while contact stays fixed. The framework names this as the one experiment that would refute its capability claim (Fig 11 :72).

### F7 - Search, inward, and outward are three distinct questions, not one gain gradient (D5, scope)

Fig 6 :28 "Which makes reachability two questions, not one. The instruments are opposed."
Fig 6 :31 "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."
Fig 8 :39 "So a search that finds nothing is never a proof of absence."

`THE_FORMULA.md` step 7 separates SEARCHED (is it in here and unfound), INWARD (extend the instrument), and OUTWARD (import from a frame whose closure differs). A single gain objective collapses these into "keep sampling where entropy is high." Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." No amount of gain inside a closure manufactures the missing atom. Fig 6 :24 prices a wrong import: "A wrong atom costs more than starting from primitives."

**Mode:** `general`. **Verdict:** `triangulated` across Fig 6, Fig 8, and the formula's step 7. **Refuter:** derive the inward and outward instruments from a single gain objective with the same instructions, or find a figure line that merges the three questions.

### F8 - What actually survives (the defensible residue)

| claim | mode | figure |
|---|---|---|
| A frame cannot score itself with the quantity it also produces | `general` | Fig 1 :23, :27 |
| The residual is per slot; a global gain scalar loses the "where" | `general` | Fig 1 :19, :28 |
| The acceptance rule is a two-sided bargain, not a gain threshold | `general` | Fig 5 :42-44; formula step 3 |
| Bits and actions are two readings and do not add | `general` | Fig 12 :125-130 |
| The verdict ranges against an immovable ground; independence is bought against cost of being wrong | `general` | Fig 2 :29, :42; Fig 9 :60 |
| Relevance is contact with the residual, relative to it, not carried by the datum | `general` | Fig 11 :39, :40, :48 |
| Gain is still useful as a filter for where to look, and for the curiosity drive when nothing is scoring | `general` | Fig 5 :26, :46-47; Fig 9 :60 |

The last row is the part of Option A that survives. Gain is necessary as a filter and as a gradient generator. It is not sufficient as a guide. That is the answer to the "or" in the question.

### F9 - No gap after re-census

A genuine re-census was run before concluding. Every domain has a nameable anchor (D3 is structural and is anchored by the two-currency rule itself), and every leg has a governing figure line. No domain needed to be marked `gap`. Where a line initially seemed to strain (Fig 5 :46 versus :48), the strain was resolved by assigning different quantities to the two lines. One live strain remains and is named in §6 and in `11_audit.md`: the exact mode of "information gain" is not fixed by the question (Shannon entropy reduction versus Bayesian expected KL), but both readings are frame-internal quantities produced by the scoring frame, so F1 and F4 hold under either reading. This is a precision limit, not a gap in governance.

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim (gain is necessary but not sufficient; relevance, cost, and consequences are also required) is refuted if any of the following holds:

1. A figure line is found that makes a self-scored quantity the ground, or that makes gain alone the acceptance test (breaks Fig 1 :23, :27 and Fig 5 :42-44).
2. A derivation shows that bits and actions are the same currency, or that summing them loses nothing (breaks Fig 12 :125-130).
3. A frame selects a next move with no per-slot residual, no cost term, and no range against a ground, and the move still settles `R` (breaks Fig 1 :19, Fig 5 :42-44, Fig 2 :29).
4. Under re-census the four legs form a partition rather than a union, so maximizing gain alone clears the whole residual (breaks Fig 9 :55, :57).
5. An agent-only increase in gain moves the ground while contact stays fixed (breaks Fig 11 :40).

If any fires, the answer flips to Option A and this solution is withdrawn. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Report information gain as a **filter for the budget**, never as the verdict (Fig 9 :60). Let it say where to look, not what is true or what to do.
2. Carry the slot index with the gain figure. An aggregate gain score is a different quantity from the one the figures govern (Fig 1 :19, :28).
3. State both currencies on every proposed move: bits to state it, actions to test it (Fig 12 :125-130). Do not add them.
4. Buy independence in proportion to the cost of being wrong (Fig 2 :42), and keep the three step-7 questions separate (SEARCHED, INWARD, OUTWARD).
5. Bind the sought-for shape as an ordinary term before the run (`THE_FORMULA.md` "Direction"), write the refuter first, and stop at the ground rather than at agreement (Fig 2 :35).
6. Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Any compression of the four legs into one score must report its round trip gap `R_T` (see `11_audit.md`).

---

## 6. Canonical usage check and retraction / confirmation log

Two canonical sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the limit: the framework reports "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the available instruments. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: Fig 9 :60 is quoted directly as "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." The figures decide design questions; the seat does not ask the anchor to rule on what the figures already settle.

| earlier reading | status after the canonical check |
|---|---|
| Fig 5 :46 "the drive manufactures a gradient" endorses gain maximization as a guide | **Retracted.** Re-census assigns :46-47 to the curiosity mechanism and :48 ("Its own output is never a measure of success") to the measure of success. Different quantities. The mechanism manufactures a gradient; it does not license the gradient as a verdict. |
| Fig 8 :32 closure shows that more search cannot find the atom, so search is useless | **Corrected.** Closure governs what is composable from held atoms. The formula's step 7 still asks SEARCHED first because it is cheapest. The line governs the budget question, not whether to search at all. |
| Relevance is an added preference outside the loop | **Retracted.** Fig 1 :19 puts the slot index inside the residual itself. Relevance is not external to the metric; a global gain scalar is the distorted reading. |
| D3 has no anchor, so it is not a domain | **Refused.** D3 is structural, and the two-currency rule (Fig 12 :125-130) is the anchor for a structural claim: it is what settles whether a proposed composition is well-formed. The metalaws document confirms that structural claims are settled by derivation from the figures. |
| F4 (two currencies) is decisive | **Canonically confirmed.** The figures README's "quotes are the authority" rule makes Fig 12 :125-130 primary; the world literature (Sims; rational inattention) is secondary corroboration only. |
| "gain alone" fails | **Canonically confirmed in shape, not as a measurement.** The figures return a shape: an inquiry policy with a per-slot residual, a two-currency bargain, and a ground-tied verdict. No measured performance of any such policy is claimed. |
| Apparent strain Fig 5 :46 versus Fig 5 :48 | **Not strained after re-census.** Gradient generation and success measurement are different quantities, matching the README's re-census rule. |
| Ambiguity in what "information gain" denotes | **Named, not hidden.** Both Shannon entropy reduction and Bayesian expected KL are frame-internal quantities under F1 and F4. No single reading is forced by the question. |

### Verdict after re-census

The shape survives: information gain is a necessary filter and a gradient generator, but it cannot alone guide rational inquiry because it has the wrong arity for a four-condition residual, the wrong symmetry for a per-slot signal, one currency where two are required, and no place to put cost of being wrong or ground settlement. The four legs must be combined, and they combine as a union compound requiring unbundling rather than as a single score. Strains after re-census: one precision limit on the meaning of "information gain", named above; no figure conflict.
