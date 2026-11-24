# Figure-grounded audit: reliability under a code-adapting adversary

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured or proved. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, read this session): LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** The canonical figure text `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule `FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the public URLs in `10_source_ledger.csv`. Every figure quote below was re-checked character by character against the verbatim extract after the validator passed.

---

## 0. The question, restated in effect terms

> Can communication systems remain reliable when the channel is shaped by an adversary who adapts to the code?

**Residual R.** Formula step 1: *"R = |Γ(b,a) − o′| per slot s"*. Here Γ is the sender's code and library, a is the act of transmitting a codeword, o′ is what the receiver actually observes, and s is a message slot. Reliability means R stays near zero at the receiver for every slot. The slot index is not optional:

- Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
- Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*

An adversary who adapts to the code does not add independent errors. It targets a slot. So the average error probability can look near zero while one slot carries all the live residual. That is the first structural fact, and it is figure-derived before any world source is opened.

**What is being decided, and what each option leads to.**

- Option A: treat the adversarial channel as a worse noise distribution and design a better code inside the same frame. Leads to an effort that Fig 3 :19 calls *"Optimising a link that already works cannot rescue one that does not."*
- Option B: re-census the channel as a frame rather than an anchor, split the question, and import a resource outside that frame's reading. Leads to a checkable shape and a stated refuter.

**What an answer would look like (the sought-for shape, bound as an ordinary term).** Not "which code wins" and not "a number for capacity." The shape is: *reliability against a code-adapting adversary is a property of the code plus something the adversary cannot read; if there is no such something, the channel can be made to mirror the code and the worst-case rate ceiling is zero.* Binding this shape now makes it refusable by the same test as everything else (Formula step "Direction", Fig 5 :62-66).

**Arity, symmetry, scale of R.**

- Arity: at least three-place (sender code Γ, adversary-chosen channel state, receiver observation o′), indexed per slot and per channel use. It is not a two-place "code versus noise" relation.
- Symmetry: the reliability check is a comparison, *"a threshold relation between two quantities"* (Fig 12 :87; Operators table :49), and the adversary's move is ordered (it reads the code, then chooses the channel), so the governing bonds are ⋛ and →, not a symmetric join.
- Scale: single channel use, block code, protocol layer with keys or physical asymmetry. The membrane between scales is lossy (Fig 4 :27-32), so a round trip must be measured, not assumed.

---

## 1. Domain census (before any figure line is chosen)

One line per domain: actors / currency / anchor. A candidate with no nameable anchor is not yet a domain.

| id | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Sender-receiver code loop | encoder, decoder, codebook Γ, message slots | residual reduction, error probability per slot | the decoded message against the sent message at the receiver, a counter (Fig 2 :29) | admitted |
| D2 Adversarial channel as a frame | the adversary, its jamming distribution, the code it reads | jamming power, mimicking the signal | **none that does not move when pushed**; refused as ground, admitted as frame | admitted as frame, refused as anchor |
| D3 Verification / ground link | receiver, the check "message recovered" | correct or incorrect, per slot | the actual sent message, fixed, which no frame updates | admitted, conditional on D4 |
| D4 Import / resource layer | shared secret randomness, keys, authenticated or physical-layer asymmetry | a variable the adversary cannot read | the ground: does reliability actually change when it is added? | admitted |
| X1 "just add more redundancy in the code" | code designer | code rate, redundancy | none: it does not change contact (Fig 11 :40) | not a domain, absorbed into D1 and fails at D2 |
| X2 "treat the adversary as ordinary noise" | noise model | variance | none: the thing moves when pushed (Fig 2 :30) | refused, absorbed into D2 |

**Partition or union.** Union, not partition. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* The two conditions are C1 (a code that works under noise) and C2 (a channel that does not update on the code). A better code clears C1 and leaves C2 standing. The compound needs its own loop and its own ground (Fig 9 :57: *"It stops being a mixture and becomes a specific compound."*).

**Order by dependency (Fig 3).** Perception (can the receiver see the per-slot divergence?) then vocabulary (terms for code, channel, adversary, key) then objective (reliability as a ⋛ threshold) then planning (a scheme) then learn and carry (settle against ground, carry the method not the recording, Fig 4 :22). For adversarial channels the break is typically between vocabulary and objective: with no term for "a channel that is a frame," design effort lands above the break and arrives at a step that cannot use it (Fig 3 :20-22).

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | R is per slot; average error hides the targeted slot | decides the measurement units |
| 2 The Ground | anchor must not move; mirror cannot correct; correlation disqualifies | decides D2: adaptive channel is a frame, not ground |
| 3 Dependency Chain | a reading below the break reads nothing | decides where design effort can land |
| 4 The Membrane | methods cross up, head starts down; round-trip gap | governs the scale transform and R_T |
| 5 Mint Pipeline | three guards as a product; direction of question is outside | governs refusal before mint |
| 6 Closure / Reachability | import is the only operator that moves the wall | decides D4 |
| 7 Room Chain | agreement compounds, evidence does not | governs repeated relays and consensus |
| 8 Union Surplus | overlap decides both agreement and surplus; imported atom from a differing closure | decides why a secret resource helps and why a code-only search cannot |
| 9 Leave / Arrive | union vs partition; describe the residual before the frame; filters not witnesses | governs the split and the search discipline |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | decides D3 and the outreach order |
| 11 The Habitat | capability is agent-and-habitat; introduction available, exclusion not | decides why the code alone cannot be made reliable in isolation |
| 12 The Bond | reliability is a ⋛ comparison; codes are bonded molecules | governs the objective and `06_isomers_and_order.md` |
| 13 Minimum Viable Set | set closed, arrangements not; import exists | corroborates D4 |
| Operators table | ⋛ is a threshold relation between two quantities | the objective is a threshold, not a field |

Strained readings are named in §6, not smoothed over.

---

## 3. Findings F1 to F10

### F1. The adaptive channel is not an anchor, it is a frame (decisive)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."*

The question says the channel is *"shaped by an adversary who adapts to the code."* Change the code and the adversary's shaping changes. The channel therefore moves when pushed. It fails the anchor test. Fig 2 :34: *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*

The anchor for reliability is not the channel statistics. It is the decoded message against the sent message at the receiver, a counter that does not update on what any frame thinks. Re-census consequence: D2 is a frame, D3 holds the anchor. This is not a strain, it is the anchor test applied correctly.

**Refuter:** a demonstration that the channel's statistics are invariant under a change of code even though the adversary is adapting, i.e. that the adaptation cannot reach the channel distribution that the decoder ranges against. Then D2 is not a frame and this finding fails.

### F2. The adversary overlaps the sender's closure, so their agreement is one pool talking

Fig 8 :48-49: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."*

A code-aware adversary reads Γ and builds its jamming from it. It draws on the same evidence as the encoder. Fig 2 :20-21 names the resulting collapse: *"they never talk, and still agree / so the agreement is the pool talking, not two frames confirming each other."* In the mutual-update form, Fig 2 :13-15: *"no anchor; each updates on the others / they converge, and what they converge on / is whoever had the most influence."*

So a scheme whose security argument is "the adversary will not find the code" is relying on a frame that already holds the code. Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."*

**Refuter:** evidence of genuinely low overlap, i.e. an adversary whose jamming is independent of Γ in the precise sense of Fig 8 :29 *"low overlap: B does not draw on A's evidence"*, with a declared independence statistic. Then agreement between them would mean something.

### F3. This is a union, so one lever cannot close it

Fig 9 :55, quoted in §1. Adding more code redundancy clears C1 and leaves C2 standing. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

World corroboration (secondary, read this session): in the arbitrarily varying channel literature this is the Ahlswede dichotomy, *"the capacity either corresponds to the AVC randomized code capacity or else it equals zero"* (Hosseinigoki and Kosut 2019, quoting Ahlswede). Zero or full, not a smooth gradient that more redundancy climbs. The figure verdict is not derived from that literature; the literature corroborates it.

**Refuter:** a single code parameter that moves both C1 and C2 monotonically against a code-aware adversary, measured per slot, with no change of contact. That would be a partition, not a union.

### F4. The objective is a comparison, and a comparison is decided at the ground

Fig 12 :87 and Operators table :49: ⋛ is *"a threshold relation between two quantities."* Reliability is "error probability below threshold," not a quantity to be maximised in the abstract. Fig 9 :42: *"narrowing gets you close, the ground decides."* The verdict comes from a measurement at the receiver, not from an internal score.

Warning against self-scoring: Fig 1 :23-27: *"The ground enters as the only metric. / Everything else either produces a residual or consumes the library. These do not count: coverage, and compression achieved / predicates minted, and credibility accrued / They are frame-internal. A frame cannot score itself with a quantity it also produces."* A code that reports its own average error is frame-internal unless the receiver's counter is separate.

**Refuter:** a claimed reliability result scored only by a quantity the code itself produces, with no independent receiver counter. It is not a verdict and does not count as one.

### F5. The channel decays; this is a seat's office, not the loop's

Fig 10 :24: *"the ground does not decay, the channel does"*, with Fig 10 :25-26: *"stale percepts, dropped transients, / saturated metrics, pooled readings."* An adaptive jammer is a concrete mechanism for channel decay. Formula step 8 says the same: *"Nothing here maintains the ground. The ground does not decay; the channel does, and that is a seat's office, not the loop's."*

Consequence: do not try to solve adversary adaptation by running the coding loop faster. The channel must be kept reachable as a ground, which is a ground-maintainer task (Fig 10 :29: *"keep the anchor reachable"*). In engineering terms this is where authenticated channels, fresh keys and physical-layer asymmetry live.

**Refuter:** a coding loop that, with no extra resource and no change of contact, keeps R at zero per slot while the adversary continuously adapts. That would mean the channel is not decaying and Fig 10 :24 was aimed at another quantity.

### F6. "More redundancy in the code" is not a domain and does not change contact

Fig 11 :39-40: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* and *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

A code improved in isolation leaves the code-adversary contact unchanged, because the adversary reads the improved code too. X1 has no nameable anchor and is absorbed into D1. The seat's asymmetry matters: Fig 11 :61: *"The seat’s power is asymmetric. Introduction is available; exclusion is not."* You can introduce a private randomness source or an authenticated channel; you cannot subtract the adversary from the habitat.

**Refuter:** an agent-only improvement that moves the ground, i.e. a code change that reduces per-slot R against a fully code-aware adversary with no new resource. The habitat essay itself names this as the refutation of the capability claim (Fig 11 :71-72).

### F7. The resolution is an import from a differing closure, and it is a shape

Fig 6 :14 names *"the only operator that moves the wall"* (import). Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*

The resource that makes reliability possible against a code-aware adversary is a variable outside the adversary's reading: shared secret randomness, a private key, an unforgeable or authenticated channel, or a physical-layer asymmetry the adversary cannot shape. All of these are imports from a closure that differs from the adversary's. Fig 8 :27-28: *"1: describe R, then find the frame / that already predicts its shape."*

The framework returns a shape, not a name. Fig 9 :32: *"you get a kind of thing, never the answer itself."* It says "a differing closure the adversary cannot read," not "use AES" or "use frequency hopping." Which resource is a binding from the engineering frame, provenanced as such, and settled only by the ground at the receiver.

Two gates apply to the import (Fig 8 :12-13: *"source gate: provenance"*, *"shadow test: explains a gap"*). A key is not admitted because it is fashionable; it is admitted because it explains the specific gap "the adversary reads Γ."

**Refuter:** a case where adding a genuinely differing-closure resource leaves per-slot R unchanged against a code-aware adversary. Then the import does not move the wall here and this finding fails.

### F8. Per-slot reporting is mandatory, not cosmetic

Fig 1 :19 and :22 (quoted in §0). The adversary's optimal strategy in the world literature is exactly a targeted one: the symmetrizing or superposition attack that makes several codewords indistinguishable at the decoder (Hosseinigoki and Kosut 2019, read this session: *"the decoder can be confounded by the adversarial superposition of several codewords"*). A pooled bit error rate cannot see this; a per-slot residual can.

Fig 10 :26 *"pooled readings"* is named as one of the things that make the channel decay. **Refuter:** a measurement in which the adversarially targeted slot shows no larger residual than the mean, sustained over the block length. Then the aggregation warning does not bite here.

### F9. List decoding and state constraints are imports too, not free magic

The world literature reports that list decoding can restore positive capacity for many symmetrizable channels (*"list-decoding combats the symmetrizing attack by allowing the list to contain the true message as well as the counterfeit(s) generated by the adversary"*, Hosseinigoki and Kosut 2019) and that power constraints can restore positive capacity (Csiszar and Narayan 1988, read this session: *"the capacity is zero if and only if the AVC is symmetrizable"* and constraints *"may lead to a positive capacity"*).

Both are changes of what the frame can represent, which Fig 6 :26 calls *"instruments extend what can be represented at all."* They are admissible, but they are imports, and Fig 6 :24 prices them: *"Import from a live peer is debited against that frame’s independence. A wrong atom costs more than starting from primitives."*

**Refuter:** a demonstration that list size or a constraint changes the decoder's representation without importing anything from outside the adversary's closure. Then the import label is wrong.

### F10. "Reliable with certainty" is the wrong question shape

Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* A demand for a code that is reliable against every possible adaptation, with no stated resource and no stated threshold, is a request for a sealed-room proof. Fig 9 :32 applies: you get a kind of thing, never the answer itself.

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* The honest question names the threshold and the resource, then asks whether the ground settles it.

**Refuter:** a sealed-room proof of universal reliability with no resource boundary and no threshold. Under this figure set it cannot be produced, which is not a silence but a verdict about the question's shape.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, per Formula step "Direction": bind the sought-for shape as an ordinary term so it can be refused. The shape claim, *reliability against a code-adapting adversary requires a differing-closure resource; without one the channel can symmetrize the code and the worst-case rate ceiling is zero*, is refuted if any of the following holds:

1. **Anchor refuter.** The channel's statistics are shown to be invariant under code changes while the adversary adapts, so the adaptive channel is not a frame (breaks F1).
2. **Independence refuter.** The adversary's jamming is demonstrated to have low overlap with Γ under a declared independence statistic, so the two frames are not one pool (breaks F2).
3. **Code-only refuter.** A deterministic code achieves a positive worst-case rate against a fully code-aware, symmetrizing adversary with no shared secret randomness, no authenticated or private channel, no list decoding and no state or power constraint (breaks F3, F7).
4. **Contact refuter.** Per-slot R falls and stays near zero against a code-aware adversary with no change of contact and no new resource (breaks F5, F6).
5. **Import refuter.** Adding a genuinely differing-closure resource leaves per-slot R unchanged against a code-aware adversary (breaks F7).
6. **Aggregation refuter.** A sustained measurement in which the adversarially targeted slot shows no larger residual than the mean (breaks F8).

If any fires, the shape claim is withdrawn or narrowed in a visible retraction. Until one is run, nothing here may be labelled `grounded`.

---

## 5. Recommendation

1. State R per slot and report it per slot, never as a pooled bit error rate (F1, F8).
2. Re-census the channel as a frame and name the real anchor at the receiver (F1).
3. Split the question into a union and say which condition each proposed lever clears (F3).
4. Ask for a threshold and a resource before asking for reliability (F4, F10).
5. Price the import with a source gate and a shadow test; do not smuggle in a "standard" cryptographic assumption as if the figure produced it (F7, F9).
6. Send the generator, not the recording. Fig 4 :22: *"Only methods cross up. Only head starts come down."* Lead with the shape claim and its refuter; offer links after a verdict is recorded.
7. Search low-overlap fields for corroboration (distributed computing as well as information theory), and record overlap honestly. Agreement from a shared pool is one witness, not two (Fig 2 :40).

---

## 6. Canonical usage check (figures README and formula, read this session)

- `FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework reports *"what a missing thing would have to look like (**a shape, not a name**)"*, then stops where instruments can no longer distinguish and records the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md`: the mode rule, the refusal-before-mint rule (step 2), the import gate (step 7), and *"the ground does not decay, the channel does"* (step 8).

### Strains, named not smoothed

- **Fig 2 anchor rule applied to the channel.** Initially read as "the channel is the ground for communication." That strains, because the adversary moves it. Re-census: the channel is a mechanism, the decoded message at the receiver is the ground. No strain after re-census; F1 records the move.
- **Fig 11 capability claim applied to a code.** Reads naturally as "a better code is a better agent." Re-census: capability is agent-and-habitat, so the code plus its resource is the unit. The essay's own stated refuter (an agent-only improvement that moves the ground) is carried in F6.
- **Ahlswede zero-or-full dichotomy versus a smooth reliability gradient.** The world result says the deterministic capacity is zero or equals the random-code capacity. This is a theorem about a model, not a figure line; it is corroboration only. No figure is strained by it.
- **"Shape, not a name."** The canonical phrase governs a *missing* primitive. Here the resource is not in the six-term set and is genuinely outside the frame, so the phrase governs it directly. The narrower correction in `05_what_shape_means.md` §7 (naming a held atom is a binding, not a prohibited invention) is kept so neither reading is silently lost.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "the channel is an anchor that jamming damages" | **Retracted at domain level.** The channel updates on the code, so it fails Fig 2 :29. It is a frame (F1). |
| "more redundancy must improve reliability" | **Retracted as a general claim.** It clears C1 only; it does not change contact (F3, F6). |
| "the framework returns a specific best code" | **Retracted.** The framework returns a shape. Which resource and which code are bindings from engineering frames (F7). |
| "list decoding solves the problem for free" | **Narrowed.** It is an import with a price and a provenance requirement (F9). |
| "the adversary is just noise with larger variance" | **Retracted.** Noise that reads the code is a frame (F1, F2). |
| "no last room" applied to universal reliability | **Confirmed.** Fig 9 :44 plus Fig 7 :13, *"agreement compounds, evidence does not."* |
| F1 anchor test | **Canonically confirmed.** Canonical README: an anchor does not change its answer because of what any frame thinks. |

### What survives

The shape survives: reliability under a code-adapting adversary is a property of the code plus a resource the adversary cannot read, reported per slot, decided at a receiver counter, with a shift from code-only composition to import when the adversary can mirror the code. Every specific binding (which key, which code, which list size) is a provenanced import, ungrounded here. Strained after re-census: none; one live type-level strain is recorded in `06_isomers_and_order.md` and `11_audit.md` and is not hidden.
