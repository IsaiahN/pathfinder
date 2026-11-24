# The Tether's answer: reliability without a shared code

**Mode: `specified` on the verdict, `general` on the shape.** Not `grounded`. This is a shape and a scope boundary, not a protocol and not a measurement. Simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A sender selects a message; a receiver must act on what arrives. Without a shared code, the receiver's prediction from the signal does not match the sender's meaning, and the residual on the live slot stays positive as more of the same signal is sent. The failure is at the vocabulary link (Fig 3 :7: *"it has terms for what things afford"*), not at the wire. Fig 3 :20-21: *"The chain is ordered by dependency, not by importance."* Effort spent on the channel arrives at a step that cannot use it.

Crucially, the question is a **union**, not a partition: a fact-bearing question (did the signal get the world right?) and a meaning-bearing question (did it mean the same thing?) have different anchors. Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

## 2. The verdict, per domain, never averaged

**Domain B, the fact layer (code fixed in advance).** Reliable reproduction is available. Shannon (1948) frames the problem as *"reproducing at one point either exactly or approximately a message selected at another point"* and explicitly sets semantic aspects aside: *"These semantic aspects of communication are irrelevant to the engineering problem."* That is a scope boundary, not a claim that meaning is unimportant. Under a fixed code and known channel statistics, the theorem answers this domain. **Verdict: yes, within the domain.**

**Domain C, the no-shared-code seam.** Neither frame can derive the other's vocabulary from its own library. Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* What can cross is an effect description that both can check against the world outside themselves: Fig 6 :30 *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms"* and Fig 9 :30-31 *"your words are borrowed too, so describe the effect rather than the cause."* The Tacit Knowledge essay: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* (essay source.) The mechanism is a two-way round trip: Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* **Verdict: possible as a rebuilt invariant, not as a transmitted code.**

**Domain D, the convention layer.** A shared meaning can be built through contact; that is a legitimate product, not a corrupted verdict. Fig 2 :41: *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it."* But Fig 2 :43: *"a convention that decides an outcome has stopped being one."* **Verdict: yes for coordination, no as a truth verdict.**

**Domain E, the checking seat.** Any reliability claim must range against something neither frame can move. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :33: *"The anchor must not update."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* **Verdict: the anchor is a condition of the claim, not an option.**

**The combined one-line answer.** Reliability is achievable for the fact layer once a code is fixed, and achievable for the meaning layer only as a convention built by two-way contact and effect descriptions. It is not achievable as a single verdict over the bundle, because the two halves have different anchors, and a convention cannot be promoted to an anchor without ceasing to be a convention.

## 3. What it explicitly does not say

- Not "no reliable communication is possible." No search for a universal code was run, and *"a search that finds nothing is never a proof of absence"* (Fig 8 :39).
- Not that Shannon's theorem is wrong. It governs the fixed-code domain and is silent on the no-code domain.
- Not that meaning is irrelevant, or that more redundancy never helps. Redundancy helps inside a fixed code (Fig 11 :40 applies only when contact does not change).
- Not that any protocol, alphabet, code or grammar is the answer. Fig 9 :32: *"you get a kind of thing, never the answer itself."*
- Not `grounded`. No experiment or measurement in this folder settles whether a specific pair of disjoint frames converges.
- Not that agreement between two frames is corroboration. Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."*

## 4. What would settle it : the ground

The four discriminators from `01` §4, rewritten so each could actually fire:

1. **One-way derivation test.** Two frames with disjoint vocabularies derive a shared mapping for a novel domain from a single one-way signal, with no round trip and no external reference. If observed, the contact requirement is refuted.
2. **Repetition test.** A meaning residual that is open after the first transmission closes after N repetitions inside the same fixed code, with no change in the receiver's library. If observed, the claim that repetition cannot fix vocabulary is refuted.
3. **Self-anchoring convention test.** A convention both sides can revise nonetheless settles a fact about the world with no external reference. If observed, the convention/verdict split is refuted.
4. **Echo test.** Two frames that talk only to each other, with no separate experience, build a shared vocabulary that correctly predicts a measurement neither had seen. If observed, the independence requirement is refuted.

A harness in which sender and receiver are given the same code proves wiring, not capability (Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*). Any real test must vary the code relationship, not just the noise level.

The Hard Problem is About Source essay supplies the reason a discriminator is required: *"If several paths create the same behavior, then behavior is a projection with lossy information."* A correct decode does not tell you which mechanism produced it. What is owed is an instrument, not a verdict from the reading.

## 5. The honest stop

**Unreached, not unreachable.** The result stops at the shape: a shared invariant, built by contact, checked against a reference neither frame can move, with the convention reported as a convention. It cannot name a protocol, and it cannot say whether a given pair of frames will converge at a given budget. Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* The round-trip gap between the figure text and any concrete engineering proposal is nonzero and is recorded in `11_audit.md` as `R_T`. Indiscernibility is not identity.

## 6. One-paragraph version for outreach

> The Tether does not answer "yes" to reliable communication without a shared code, because that question is two questions with different anchors. For a fixed code and known channel, Shannon's result already gives reliability; that is the fact layer, and it is settled within its scope. When the code itself is missing, the two sides cannot derive each other's vocabulary from inside their own libraries. What can cross is a description of effects that both can check against the world, carried by a two-way round trip in which the receiver shows what it took the message to mean. Out of that comes a convention, which is a legitimate thing to build but is not a truth verdict: only a reference neither side can move decides facts. So the answer is a shape and a scope boundary, plus four written refuters and the instruments that would fire them. The specific protocol stays open until a ground settles it.
