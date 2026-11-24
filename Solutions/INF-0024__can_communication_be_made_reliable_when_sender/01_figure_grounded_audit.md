# Figure-grounded audit: reliability without a shared code

**Mode of this document: `specified`, not `grounded`.** It states what would have to hold. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap essay says LLM output can *"simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6. No experiment, channel measurement or simulation was run here.

**Sources.** The local figure text extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, and the public sources in `10_source_ledger.csv`, all opened on 2026-11-23. Every figure quote below was checked against the extract character by character.

---

## 0. The residual, as an effect (before any figure line is chosen)

A sender selects a message; a receiver must act on the signal that arrives. The two do not hold the same mapping from signal to meaning. In the notation of the Symbols table, the receiver's prediction `Γ_R(b_R, a_R)` does not match what the sender meant or what the world returns, so the residual `R = |Γ(b,a) − o′|` on the live slot stays positive and does not trend down as more of the same signal is sent. Reliability fails at the vocabulary link, not necessarily at the wire.

Arity, symmetry, scale (Fig 9 :22 gives the three descriptors: *"arity · symmetry · scale"*):

- **Arity.** Two frames plus a reference. A single field with two readers is a seam (Fig 10 :13: *"two frames, one field, no shared reading"*).
- **Symmetry.** Sender and receiver are not interchangeable. The message is selected at one end and reconstructed at the other; Shannon's transmitter and receiver perform inverse operations, not symmetric ones. The ordering matters.
- **Scale.** One exchange is a step; repeated exchanges form a cycle in which the vocabulary itself can change; the checking arrangement is a seat above both. These are different levels and must not be averaged (Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*).

The key diagnostic: **where is the residual positive?** If it is positive on a fact-bearing slot (what the world did), that is a ground domain. If it is positive only on a meaning-bearing slot (what the signal was taken to mean), that is a convention domain, and demanding a fact verdict from it is a category error. Fig 9 :4-5 names this: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

---

## 1. Domain census (written before choosing figure lines)

### 1a. R by arity, symmetry and scale

Covered in §0. R is a two-frame seam with an asymmetric direction and a reference that may or may not be nameable. Scale runs from one exchange to a vocabulary-changing cycle to a checking seat.

### 1b. One line per domain: actors / currency / anchor

A domain is admitted only if it has a nameable anchor. If there is no anchor, it is not a domain yet and is recorded as a convention instead.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| A. The physical channel | signal, noise, transmitter, receiver | bits per second, error probability | measured channel output against sent codeword | **yes**, an instrument and a codebook |
| B. The shared-code fact layer | sender's encoding, receiver's decoding, the world state | reproduced message, equivocation | the world state the message denotes | **yes**, a measurement both can range against |
| C. The no-shared-code seam | the two frames' libraries Γ_A and Γ_B, the signal | agreement or disagreement on meaning | none, until a third invariant is introduced | **no** until an invariant is built; this is where the question bites |
| D. The convention layer | the two frames negotiating a mapping | mutual expectation, common ground | consistency of the convention, not truth | **no**, and correctly so: this is a convention, not a verdict |
| E. The checking seat | the ground, two frames, an outside reader | residuals, refutations | the ground (Fig 2 :29) | **yes**, by construction |

C and D are not the same domain. C is a defect (a residual that does not close); D is a legitimate product (a convention that works because both sides expect it). Conflating them is the central failure mode of the bundled question. Fig 2 :40-41 separates them explicitly: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it."*

### 1c. Partition or union?

This is a **union**, not a partition. The fact layer B and the convention layer D overlap in every real exchange: a signal both denotes something and means something to the participants. The overlap A ∩ D is a **compound with its own loop** (Fig 9 :54-57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*). It must be unbundled before search: asking "is reliable communication possible?" over the bundle is asking two questions with different anchors at once. Fig 9 :4-5 requires the split.

Domain C (the seam) is upstream of B and D: you cannot ask whether facts are reproduced or meanings coordinated until you have said how two frames with different libraries meet at all. Dependency order, from Fig 3, is therefore **E (seat) → C (seam) → B (fact) and D (convention)**, with B and D each requiring the invariant that C must supply.

### 1d. Order by dependency (Fig 3)

Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* Here the middle link, Fig 3 :25-26, is the vocabulary link: having terms for what a situation affords. Most engineering effort lands on the channel (the bottom link, with obvious tests) and on the decoder (the top link), while the vocabulary link has neither obvious failure nor obvious instrument. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* That is the honest location of this question's difficulty.

---

## 2. Figure census and per-domain derivation (verbatim, before conclusions)

Quotes are from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`. Strained readings are named, not smoothed.

### Domain E, the checking seat: what counts as a fix

- Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* A fix that only makes both sides more confident does not close the residual.
- Fig 2 :33-34: *"The anchor must not update."* and *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."* A shared vocabulary that both sides tune is not an anchor.
- Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- Fig 5 :48: *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*
- **Verdict E:** reliability requires something neither frame authors and both can be corrected by separately. `triangulated` (Fig 2 and Fig 5, low overlap: one is about anchors, the other about self-scoring).

### Domain C, the seam: what can cross between two frames with no shared code

- Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Neither side can derive the other's vocabulary from its own library alone.
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."*
- Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause"*
- Fig 9 :26: *"R's own predicates name the habitat that holds φ*"*, and :27-28 *"describe it before you go looking, or any frame you pick will seem to fit"* (verbatim across the wrap).
- Fig 8 :45: *"Two frames together reach what neither reaches alone."*
- Fig 8 :50: *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."* This matters: two frames can arrive at the same invariant independently, and that is the only agreement that carries weight.
- Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* Adding redundancy to a code the receiver cannot read does not change contact.
- **Verdict C:** the only thing that crosses is a description of effects that both frames can range against something outside themselves. Meaning is not transmitted as a codeword; it is rebuilt through two-way contact. A one-shot message cannot carry its own pretext. `triangulated` (Fig 6, Fig 8, Fig 9, Fig 11, four distinct mechanisms).

### Domain B, the fact layer: what Shannon reliability actually requires

- Shannon (1948), opened on 2026-11-23: *"The fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point."* This is the engineering fact question. This quote is from the Shannon essay source, not a figure line.
- Shannon, same source: *"These semantic aspects of communication are irrelevant to the engineering problem."* This is not a claim that meaning is unimportant; it is a scope boundary. It is exactly why the bundled question must be split.
- Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* A shared symbol alphabet is not a shared code; the bond (the relation between symbols) is unrecorded by the alphabet alone.
- Fig 12 :94: *"The arrangement is the substance."*
- **Verdict B:** reliable reproduction of a selected message is available when the set of possible messages and the channel statistics are fixed at design time, so that encoding and decoding are inverse operations. When the mapping itself is not shared, the problem is no longer B. `single-source` for the figure contribution (Fig 12 structural point), with the Shannon source as secondary corroboration of the split.

### Domain D, the convention layer: what does not need an anchor

- Fig 2 :41: *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"*
- Fig 2 :43: *"a convention that decides an outcome has stopped being one"* (also Fig 10 :47).
- Fig 4 :22: *"Only methods cross up. Only head starts come down."* What passes between frames is a reusable method, not a recording of one success.
- Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
- **Verdict D:** a convention can be made to work through contact without being true or false. That is a genuine success, but it is not a reliability verdict about the world. `triangulated` (Fig 2 and Fig 7).

---

## 3. Findings F1 to F10

### F1 : The question is a union, and the yes/no form hides the split (decisive for framing)

Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :54-57: *"when the split lands on a union rather than a partition, unbundle before you search again."*

The fact-bearing question and the meaning-bearing question have different anchors (§1b). A single verdict is not available. Any answer that says simply "yes, communication can be made reliable" has silently answered B while appearing to answer C and D. **Status: confirmed.**

### F2 : A shared code is an anchor substitute, not an anchor

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :43: *"a convention that decides an outcome has stopped being one."*

A codebook is a convention. It can be agreed, revised and replaced by the participants, so by Fig 2 :33 (*"The anchor must not update."*) it cannot be the anchor for a fact question. This is why Shannon's *"semantic aspects of communication are irrelevant to the engineering problem"* is a scope statement, not an embrace of meaninglessness: the engineering problem has a codebook fixed in advance, which the meaning question does not. **Status: confirmed.**

### F3 : Redundancy cannot fix a vocabulary failure

Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* Fig 5 :48: *"Its own output is never a measure of success."*

Repeating a signal, adding error-correcting bits, or slowing the rate all operate inside a fixed code. They reduce channel error, not misinterpretation. If the receiver's library lacks the term, more copies of the same signal accrue no discriminating residual. Fig 8 :32: *"no search, however long, adds an atom."* **Status: confirmed.** This is the answer to the common engineering intuition that "reliability" is always a code-rate problem.

### F4 : The only cross-frame path is a description in effect terms, and it is lossy

Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."* Fig 4 :27: *"The transform between scales loses information, and that is the point."*

A receiver with no shared code can still check a claim of the form "if this were true, you would see X" against the world. It cannot check a claim stated in the sender's private vocabulary. This is the Tacit Knowledge essay's *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* (essay source, not a figure line.) **Status: confirmed.** The lossy nature is the reason the round-trip gap `R_T` in `11_audit.md` is nonzero and is reported rather than assumed away.

### F5 : Reliability needs a round trip, not a send

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Fig 4 :31-32: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."*

The Tacit Knowledge essay's account of grounding (Clark and Brennan, 1991, read via that essay and the Wikipedia entry) is the world analogue: a conversation advances only when the addressee shows evidence of understanding. One-way transmission cannot correct anything. **Status: confirmed.** This is the positive half of the answer: two-way contact with an effect-description loop is the mechanism that builds a shared invariant.

### F6 : Independence is the scarce resource, not agreement

Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 8 :48: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."* Fig 7 :13: *"same closure, handed along; agreement compounds, evidence does not."*

If sender and receiver converge by only talking to each other, their agreement is coherent drift (Fig 2 :34) and is worthless as a check. Reliability that matters must survive contact with a reference neither can move. Long, close contact builds the convention while consuming the independence that makes the convention checkable. That tension is not a bug to be engineered away; it is the design constraint. **Status: confirmed.**

### F7 : Agreement selects a convention; the ground decides a fact

Fig 2 :40 and :41 (quoted in F1 and F2) plus Fig 9 :42: *"narrowing gets you close, the ground decides"* and Fig 7 :35. The common-knowledge literature corroborates the structure from a low-overlap field: Vanderschraaf and Sillari (SEP, 2023) note that Lewis himself later said the term "common knowledge" was unfortunate since there is no assurance the proposition is true. That is a convention, not a verdict, stated by an outside field. **Status: confirmed.**

### F8 : A harness proves wiring, not capability

Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

A simulation in which sender and receiver are given the same code and asked to report agreement proves only that the implementation is correct. The drift-aware semantic codec paper (Wang et al., arXiv, 2026) is a real engineering witness to this exact boundary: it reports that distribution drift makes an offline-trained codec stale and that performance depends on consistency between training and target-domain distributions. That is a shared-code result, not a no-shared-code result. It corroborates the scope split; it does not corroborate a solution to C. **Status: confirmed.**

### F9 : "Unreachable" is a verdict, and "not found" is not "absent"

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* Fig 8 :40-43 distinguishes *"Underivable-in-principle and unreachable-at-this-budget"* as different facts.

This folder did not run a search for a universal code and therefore cannot report that none exists. It reports the structural result: two frames with different closures cannot derive each other's vocabulary from inside (Fig 6 :23), and what can cross is an effect description plus two-way contact. Whether a given pair of frames can converge in practice is a ground question about those frames. **Status: confirmed.**

### F10 : What survives as the answer

The defensible residue, with modes attached:

| claim | mode | figure |
|---|---|---|
| Reliability is not one question; fact reproduction and meaning coordination have different anchors | `general` (structural) | Fig 9 :4-5, Fig 2 :29 |
| A codebook is a convention and cannot anchor a fact verdict | `specified`, falsifiable | Fig 2 :29, :33, :43 |
| Repeating or re-encoding within a fixed code cannot close a vocabulary residual | `specified`, falsifiable | Fig 11 :40, Fig 8 :32 |
| Two-way contact with effect descriptions can build a shared invariant | `specified`, ungrounded | Fig 6 :30, Fig 4 :30, Fig 8 :45 |
| The resulting convention is not a truth verdict; only a ground outside both frames decides facts | `general` | Fig 2 :40-41, Fig 7 :35 |
| A particular protocol, code or alphabet is the answer | **refused** | Fig 9 :32: *"you get a kind of thing, never the answer itself"* |

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the derivation discipline: a falsifier written before the run is a design instrument. If any of the following holds, the shape claim in this folder is withdrawn:

1. A demonstration that two frames with disjoint closures can derive a shared mapping for a novel domain from a one-way signal alone, with no round trip and no reference outside either frame.
2. A case where repeating a signal inside a fixed code closes a meaning residual that was open at the first transmission, with no change in the receiver's library.
3. A convention that both participants can revise, which nonetheless settles a fact about the world independently of any external reference.
4. A shared vocabulary that increases as the two frames talk only to each other, with no separate experience, which still correctly predicts a measurement neither frame had seen.

None of these was run in this folder. Until one is run and fails to fire, no claim above is `grounded`.

---

## 5. Recommendation

1. Split the question before answering it (F1). Report the fact verdict and the convention outcome separately, never averaged.
2. For fact reliability, state the reference explicitly and keep it unupdatable by either frame (Fig 2 :33). This is the part Shannon's theory already handles when a code is fixed.
3. For no-shared-code reliability, design for two-way contact and effect descriptions, not for a bigger code (F4, F5). The unit of progress is the shrinking round-trip gap, not the number of messages sent.
4. Buy independence deliberately: keep separate experience alive even as the convention forms (Fig 2 :31, Fig 8 :48). A pair that only talks to itself cannot check itself.
5. Report `R_T` and the strains (see `11_audit.md`). Do not present the formula as identical to the figures; it is a lossy condensation.

---

## 6. Canonical usage check

Two local sources govern how the figures may be used, both opened this session:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* The canonical limit is that the framework says *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of what instruments distinguish, recording the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD and warns that *"underivable-in-principle and unreachable-at-this-budget are DIFFERENT FACTS with different instructions."* Step "Direction" requires the sought-for shape to be written down as an ordinary term before the run, done in the README above.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "The answer is yes, reliability is achievable" | **Withdrawn as a single verdict.** It answers the fact layer while appearing to answer the no-shared-code layer. Replaced by the split in F1 and F10. |
| "Shannon proved reliable communication, so the answer is settled" | **Narrowed, not retracted.** Shannon's theorem assumes a fixed code and channel statistics (opened source). It governs B and is silent on C. Quoting it as a verdict on C would be a strain, so it was re-censused into the fact domain. |
| "A codebook is the anchor" | **Refused at canonical check.** Fig 2 :33 and :43 make a revisable convention ineligible. This is not a preference, it is the anchor definition. |
| "Meaning and fact are separate domains" | **Confirmed and sharpened to a union.** They overlap in every exchange, so the compound is unbundled rather than simply listed apart (Fig 9 :54-57). |
| "Two frames agreeing is corroboration" | **Refused unless independence is shown.** Fig 2 :40 and Fig 8 :48. The simulated second seat in `11_audit.md` shares this folder's evidence pool and is explicitly not a witness. |
| "No universal code exists" | **Not claimed.** Only the cross-frame closure result (Fig 6 :23) is claimed. A failure to find a universal code is not a proof of absence (Fig 8 :39). |
| "The formula is the condensed version of the metalaws, so applying it is identical to reading the figures" | **Refused.** Fig 4 :30 requires a measured round-trip gap; the condensation is lossy. `R_T` is recorded qualitatively in `11_audit.md`. |

### Strains after re-census

- **Convention versus verdict.** Resolved by re-census: Fig 2 :40 governs verdicts, Fig 2 :41 governs conventions. Same figure, different quantities, so there is no contradiction. This matches the canonical rule that an apparent contradiction means the domains were misread.
- **Shannon's scope.** Resolved by re-census: the engineering problem fixes a code in advance (*"The system must be designed to operate for each possible selection"*), so it governs domain B only. No strain remains.
- **One live strain, named.** Whether a shared invariant built by two frames counts as "reliable" for a fact about a world neither has yet measured is not decidable from the figure text alone. Fig 2 :36 says an anchor is legitimate when the question is constitutively about it. The convention layer is constitutively about agreement, so asking it for a fact verdict is a type error, but the operational threshold at which a converged convention becomes a fair instrument is unmeasured here. It is recorded as a gap for a ground reading, not smoothed into a verdict.
