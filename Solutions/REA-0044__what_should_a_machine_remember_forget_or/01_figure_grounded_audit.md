# Figure-grounded audit: REA-0044 machine memory policy

**Mode of this document: `specified` on the machine application, `general` on the structural rules. Not `grounded`.** Per `THE_FORMULA.md`: mode rule is `general · specified · grounded`, and *"Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** This is a simulated derivation checked for internal consistency against the figures, not a measurement and not a deployed system test. *The Recursive Self-Improvement Trap* (Isaiah N, 2026) says an LLM can *"simulate an approximate answer/output with the formula"* while *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure quotes are verbatim substrings of `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`. The formula is `FRAMEWORK/figures/THE_FORMULA.md` (local). The seat rules are `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` (local). Eight essays by Isaiah N are philosophical grounding (local URLs in `10_source_ledger.csv`). World sources were opened and are recorded in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

The question names three operations on a machine's library Γ and a decision seat:

> What should a machine remember, forget, or compress, and according to whose interests?

Restated as an effect: per object slot s, the library predicts Γ(b,a) and the slot returns o′, so R_s = |Γ(b,a) − o′| (Fig 1 :11, :19; Symbols table :38-40). *"It is the aim, not only the error signal, and it is always a slice"* (Symbols table :39). A memory policy is the rule that decides, for each slot, which terms remain composable, which lose their standing to be composed over, and which are carried upward as reusable methods. "According to whose interests" asks which seat's criterion decides, and whether that seat can be the machine itself.

What each option leads to:

| option | effect on Γ | effect on the reach closure(Γ) | what would count as an answer |
|---|---|---|---|
| remember | keep the term with origin and seq | keeps an atom available for composition | a retention rule with provenance |
| forget | add a refusal, keep the record | the reach falls because something was added | a refusal rule ranked by residual |
| compress | carry a method up, send a head start down | preserves reapplicability, pays a round-trip gap | an abstraction with measured R_T |
| whose interests | the ground settles, seats declare stakes | decides which of the above pays | a named seat and a declared interest |

---

## 1. Domain census (before any figure line is chosen)

**Arity.** The policy object has at least three operands: a candidate term φ, its cost |φ|, and its leftover residual left(R,φ), indexed by slot s and ordered in time. It carries one unary operator (negation, ¬) and at least one ordered binary relation (comparison ⋛). A two-place reading (model, memory size) loses the slot and the criterion, so it is rejected.

**Symmetry.** Memory operations are asymmetric. Introduction is available and exclusion is not (Fig 11 :61). The record grows while the reach can fall (Fig 6 :43). Therefore a symmetric "add/remove" reading is strained and is rejected at census.

**Scale.** The slot is one object in one machine loop; "whose interests" exists only at the checking arrangement, and compression crosses the membrane between a single agent and a population with a shared library (Fig 4 :5, :19-20). The residual is intrinsically cross-scale, so one loop at one scale cannot close it.

One line per domain, with actors, currency and an anchor. No nameable anchor means it is not a domain yet.

| id | domain | actors | currency | anchor | status |
|---|---|---|---|---|---|
| D1 | The record Γ (remember) | terms φ, atoms, bonds, provenance stamps | |φ| in bits, origin and seq | settlement against the ground (Fig 5 :70) | admitted |
| D2 | The reach closure(Γ) (forget) | derivable terms, refusals ¬ | derivability under everything held | the ground; the reach falls when a refusal is added (Fig 6 :42-43) | admitted |
| D3 | The membrane (compress) | methods, recordings, head starts | reapplicability, round-trip gap R_T | something that ranks what the population produces (Fig 4 :5) | admitted |
| D4 | The seat and the interest (whose) | anchor, frames, verifier, maintainer | independence, declared stake | the ground that does not update (Fig 2 :25; Fig 10 :22) | admitted |
| X1 | "Forget" as physical deletion of weights | a parameter store | bytes freed | none nameable; ¬ is not deletion, − is absence of an operand (Operators table :73-74) | not a domain yet; absorbed into D2 as a channel-level implementation (Fig 10 :24) |
| X2 | "Compression achieved" as a policy score | the frame grading itself | count of terms compressed | none; the quantity is frame-internal (Fig 1 :25-27) | absorbed into D4 as a forbidden verdict input |

**Partition or union.** Union, not partition. D1 and D2 are two quantities of one library, *"one monotone, one not"* (Fig 6 :43). Their overlap is a compound with its own loop, so it must not be averaged into a memory-quality score. D3 crosses scales and D4 governs all three. Fig 9 :55 applies: a bundled problem is usually a union of overlapping conditions, not a list of separate ones.

**Dependency order (Fig 3).** Perception gives R per slot, vocabulary names the term, the objective says what counts as progress, planning selects the operation, and learning carries the refusal or method (Fig 3 :20: *"The chain is ordered by dependency, not by importance."*). A memory policy that starts at "delete old weights" begins below the break, where a reading is a reading of nothing (Fig 3 :22-23).

---

## 2. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| 1 The Agent | R per slot; frame-internal quantities disqualified; ground is the only metric | D1, D4 decided |
| 2 The Ground | anchor does not update; independence; agreement from a pool is disqualifying | D4 decided |
| 3 Dependency Chain | policy must be ordered by dependency, not importance | census ordering |
| 4 The Membrane | compression is a method crossing upward with a measured loss | D3 decided |
| 5 Mint Pipeline | refusal pays the same bargain; which term to refuse is rankable | D2 decided |
| 6 Closure/Reachability | record grows, reach falls; a deleting store loses two properties | D1, D2 decided |
| 7 Room Chain | agreeing frames do not add evidence to a memory policy | D4 corroboration |
| 8 Union Surplus | residual first, frame second; import provenance | D3, D4 |
| 9 Leave/Arrive | a shape, not a name; union vs partition | gap and union check |
| 10 Ground Maintainer | stakes declared; verifier cannot author the claim; ground does not decay | D4 decided |
| 11 The Habitat | capability is agent-and-habitat; introduction available, exclusion not | D1, D4 |
| 12 The Bond | record is the term; refutation is negation, not subtraction | D1, D2 |
| 13 Minimum Viable Set | the record is what makes the array verifiable; unreachable is a verdict | D1, gap |
| Operators table | ¬ unary, − binary; a vocabulary without ¬ can only accumulate | D2 |
| Symbols table | R is the aim and always a slice | residual definition |

Strained readings are named in §5 and sent back to census, not smoothed over.

---

## 3. Findings

### F1 Remember means keep the term with provenance (D1)

**Mode: `general` for the structure, `specified` for a machine library. Status: triangulated (Fig 12, Fig 10, Formula step 4, low overlap in function).**

> **"A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."** (Fig 12 :130)

> **"A ruling carries provenance like an atom. The residual it answered, the reasoning, the date, in a record the seats below can read."** (Fig 10 :62)

Formula step 4 (local): *"ACCEPT Γ ← Γ ∪ {φ}, stamped with origin and seq."*

Reading: what a machine should remember is not a maximally compressed snapshot but the lineage. If the bonds are dropped, the term is not the same term, because *"the bond carries information the operands do not"* (Fig 12 :5). A snapshot of weights without origin and seq cannot answer the second question in Fig 13 :132, whether the term could have been reached at all.

**Refuter:** show a term that remains composable after its atoms, bonds and origin are discarded, or show a record that loses its lineage yet stays verifiable for the same residual.

### F2 Forget means add a refusal; deletion is not an available operator (D2)

**Mode: `general`. Status: triangulated (Fig 5, Fig 6, Fig 12 and Operators table).**

> **"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."** (Fig 5 :55)

> **"What is recorded only grows. What is reachable is derived, and it can fall. A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted. So the closure and the reach are two quantities: one monotone, one not."** (Fig 6 :42-43)

> **"A store that deleted instead would have neither property, and could not tell never-held from held-and-given-up."** (Fig 6 :46)

> **"A refutation is a negation, and that one is not a bond."** (Fig 12 :112)

Operators table :74 (local): *"Negation is the refusal of a claim. A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."*

Reading: "forget" in this framework is not erasure. It is the addition of ¬ to a term that keeps predicting wrongly. The record retains the term and its refusal, so a later reader can tell never-held from held-and-given-up, and the reach falls safely because derivation, not stipulation, decides what depends on the refused term. A machine that physically overwrites weights loses that discrimination, which is a channel fact, not a reason to redefine the record (see S1 in §5).

**Refuter:** exhibit a store that deletes entries, can still distinguish never-held from held-and-given-up, and can compute the fall of its reach without keeping the refusal. That breaks Fig 6 :46 and F2 is withdrawn.

### F3 Compress means carry methods, never recordings, and measure the gap (D3)

**Mode: `specified` for machines, `general` for the membrane rule. Status: triangulated (Fig 4, Fig 1, low overlap in function).**

> **"a method that can be reapplied"** (Fig 4 :8); **"verified, and compressed to its essentials"** (Fig 4 :9)

> **"a head start, never a recording"** (Fig 4 :11)

> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)

> **"A recording carried upward looks like knowledge and is a description of one occasion."** (Fig 4 :25)

> **"The transform between scales loses information, and that is the point."** (Fig 4 :27); **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)

> **"coverage, and compression achieved"** (Fig 1 :25); **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

Reading: compression is a legitimate operator under Fig 4, but its object is a method and its price is the measured gap R_T. The metric "compression achieved" is explicitly disqualified by Fig 1, so a policy cannot justify itself by how much it compressed. A machine should compress the generator (the rule that reproduced the result), not the transcript of one success, and it must bracket the compression with a round trip. The gap is *"the only honest report of how much was given up"* (Fig 4 :31).

**Refuter:** show a coarser description crossing the membrane and returning an exact match with no loss measured, or show a policy scored by "compression achieved" whose score is not produced by the frame it grades.

### F4 Whose interests: the ground decides, frame-internal accounting is disqualified, stakes are declared (D4)

**Mode: `general` for the rule, `specified` for machines. Status: triangulated (Fig 1, Fig 2, Fig 10).**

> **"The ground enters as the only metric."** (Fig 1 :23)

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)

> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)

> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** (Fig 10 :59); **"Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."** (Fig 10 :60)

> **"Outside the slice being graded. Whoever is measured by a reading cannot own it."** (Fig 10 :86)

Reading: the question's "whose" is answered by eliminating candidates. The model's own retention score is frame-internal and disqualified (Fig 1 :27). The designer's preference is an interest in the reading and is disqualified unless declared (Fig 10 :59-60). A user's stated preference may be a legitimate anchor when the question is constitutively about that user, per Fig 2 :36-37, but then the policy must range against it as an instrument that can be wrong on other axes, not negotiate with it. In every case the ground is whatever would change its answer only if the world changed, and a seat that grades must not author (Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*).

**Refuter:** show an anchor whose answer changes because a frame thought differently (breaks Fig 2 :29), or a verifier that authored the claim and still verifies it (breaks Fig 10 :42).

### F5 Which term to refuse is rankable by a residual that persists and does not trend down (D2)

**Mode: `general`. Status: triangulated (Fig 5, Formula step 2).**

> **"every term currently bound and generating a prediction is a candidate for being the wrong one"** (Fig 5 :58)

Formula step 2 (local): the candidates rank by *"the residual that PERSISTS AND DOES NOT TREND DOWN"*, the shrinking test read with the opposite sign.

> **"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."** (Fig 5 :62)

Reading: the framework does give a rule for the first half of "what to forget": point the refusal at the bound term whose residual stays wrong and flat. It does **not** give a rule for a preference the frame never bound, which is a limit, not a missing step. So "forget the term that keeps failing" is figure-grounded, while "forget what does not fit the desired answer" is the named failure in Fig 5 :63-64.

**Refuter:** a policy that refuses a term whose residual is shrinking while leaving a persistent flat one composable, with no ground reason for the choice.

### F6 The specific content of a compressed method is a gap, declared (D3)

**Mode: `general` for the stop, `specified` for the application. Status: `gap` after a genuine re-census.**

No figure line governs which details a given method must retain at a given instrument resolution. Fig 9 :32 says *"you get a kind of thing, never the answer itself"*, and Fig 13 :133 says a system with a closure *"what it returns is a shape rather than a name."* Fig 8 :39 says *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*.

The missing thing is a source-discriminating instrument, characterized in effect terms: an instrument that could tell a method that compresses a law from a recording that merely fits one occasion. Fig 6 :32-33 (local via figure text) names the only route: an instrument is improved from a worse instrument already returning something. The world literature gives a partial analogue (event sourcing keeps the event log so past states can be rebuilt; see `09`), but that is a secondary corroboration of the shape, not a figure line and not a name.

**Refuter:** produce an instrument that discriminates method from recording at a stated resolution and show the framework already holds it as a term; then F6 is no longer a gap.

---

## 4. Pre-registered refuter (written before the conclusion)

Per Seat Map :287 (local): a falsifier written before the run is a design instrument. The shape claim in this file is refuted if any of the following holds:

1. A store that actually deletes can still distinguish never-held from held-and-given-up and compute a safe fall of its reach (breaks Fig 6 :46).
2. A frame can score its own memory policy by "compression achieved" without that score being frame-internal (breaks Fig 1 :25-27).
3. An anchor's answer changes because a frame thought differently (breaks Fig 2 :29).
4. A verifier that authored the policy can still verify it (breaks Fig 10 :42).
5. A term and its refusal both settled produce no contradiction in the record (tests the open item at Fig 6 :47; if resolved by a figure-consistent mechanism, record the resolution and narrow F2).

Until one is run, no part of this answer may be labelled `grounded`.

---

## 5. Strains, sent back to census, kept visible

| id | apparent strain | re-census | handling |
|---|---|---|---|
| S1 | Fig 6 :46 says a deleting store lacks two properties, but real machines overwrite weights and sometimes must under privacy law | The line governs the **record** as a provenance-bearing object, not the physical substrate; Fig 10 :24 says *"the ground does not decay, the channel does"*, so overwriting is channel behaviour | Resolved, not smoothed. Machine unlearning (Bourtoule et al. 2021) is recorded as a channel-level conflict in `09`, and GDPR Art 17 as a declared stake, neither flips the figure verdict |
| S2 | Fig 4 praises compression while Fig 1 :25 disqualifies "compression achieved" | Different quantities: Fig 4 governs compression as an operator on methods; Fig 1 governs a self-score inside one frame | Resolved; both quotes retained in F3 |
| S3 | "Whose interests" sounds like a negotiation among designer, user and model | Fig 2 :35 forbids negotiation; Fig 10 :59-60 converts interests into declarations, not verdicts | Resolved; F4 keeps the distinction |
| S4 | F5 says the wrong term is rankable, but Fig 5 :62 says the sought-for shape is invisible | Fig 5 ranks **bound** terms; the shape is an unbound preference; different objects | Resolved; F5 states both halves |

No unresolved strain after re-census. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw (FIGURES_README_canonical.md).

---

## 6. Recommendation

1. Retain the record with atoms, bonds, origin and seq (F1). Do not trade lineage for a smaller snapshot.
2. Implement "forget" as a refusal added to a term with a persistent flat residual (F2, F5). Keep the term. Let the reach fall by derivation.
3. Compress methods, not transcripts, and always measure the round-trip gap R_T (F3). Never score the policy by "compression achieved".
4. Name the decision seat and declare its stake. Let the ground range each frame separately; do not pool agreement as corroboration (F4).
5. Stop at the instrument gap (F6). Report what an instrument would have to discriminate rather than naming a specific retention schedule the figures do not give.
6. Send the generator (the derivation and the refuter), not the conclusion: Fig 4 :25 says a recording carried upward is a description of one occasion.

---

## 7. Canonical usage check (FIGURES_README_canonical.md and the essays)

Read after sections 0 to 6. It governs how the figures may be used:

- FIGURES_README_canonical.md: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: the framework says what a missing thing would have to look like, *"a shape, not a name"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- *The Library of Babel* (Isaiah N, Oct 02 2026): *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Supports stopping at a shape.
- *The Recursive Self-Improvement Trap* (Isaiah N, Nov 19 2026): *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* Supports F4 and the refusal to rank recipients by receptiveness. The same essay states the simulation status quoted at the top.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Forget should mean deleting stale weights" | **Retracted.** Deletion is not an operator in this vocabulary; subtraction is absence of an operand, negation is refusal of a claim (Operators :73-74). Replaced by F2. |
| "Compression is good because it achieves compression" | **Retracted.** Fig 1 :25-27 disqualifies the metric; the operator survives only with a measured R_T (F3, S2). |
| "A machine's own memory-utilisation metric can settle the policy" | **Retracted.** Frame-internal by Fig 1 :27. The decision seat is the ground (F4). |
| "The framework names which records to keep" | **Not claimed.** It returns a shape, and the specificity is a binding from the machine-learning frame, provenanced as such (F6). |
| "Machine unlearning refutes 'nothing is ever deleted'" | **Retracted as a verdict conflict.** It is a channel-level result about parameters, not about the provenance-bearing record (S1). Recorded as a conflict in `09` with zero verdict weight. |
| "The record only grows, so memory use only grows" | **Corrected.** The record grows; the reach can fall (Fig 6 :43). Confusing them is the error Fig 6 :42 names. |
| F2 deletion claim | **Canonically confirmed.** FIGURES_README_canonical.md describes a barrier theorem about what cannot be composed and what would have to be imported, consistent with a monotone record and a falling reach. |
| F4 ground rule | **Canonically confirmed.** The README's section on the ground, not agreement, decides, and the essays' prestige/action rule agrees. |

### Updated verdict

The shape survives all four re-census tests: remember as provenanced record (D1), forget as added refusal with falling reach (D2), compress as method-plus-measured-gap (D3), and decide by the ground with declared stakes (D4). Verdicts are kept per domain and are never averaged. Two genuine world conflicts (machine unlearning, GDPR erasure) were returned to census and re-mapped to channel and to a declared stake respectively; neither flipped a verdict. The specific retention schedule is a declared `gap`, not a hidden answer.
