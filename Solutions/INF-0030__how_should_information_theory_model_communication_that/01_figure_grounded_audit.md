# Figure-grounded audit: modeling communication that changes beliefs or behavior

**Mode of this document: `general` on the shape, `specified` on the predictions, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: SIMULATED DERIVATION, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output can *"simulate an approximate answer/output"*, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* Every claim below is checked for internal consistency against the figures. No instrument measuring belief or behavior change was run for this audit. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Primary source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Every quoted figure string below is a substring of that file. Supporting primary files: `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `FIGURES_README_canonical.md`.

---

## 0. The residual, stated in effect terms

**Question:** How should information theory model communication that changes the beliefs or behavior of its participants?

**Two readings of the same sentence, and which one is being audited.**

- Reading A: *add a semantic layer to the Shannon pipeline*, keeping the anchor at fidelity of symbol reproduction. The model asks whether the receiver reconstructed the message that was sent.
- Reading B: *change the anchor*, so the model asks what changed in the participant and what at the ground settles whether that change occurred.

The residual differs under the two readings.

- Under A: `R = |sent message − received message|`, a distortion or error probability at the channel output. Belief change is invisible unless it shows up as a symbol error.
- Under B: `R_s = |predicted change in participant s − observed change in participant s|`, indexed by participant slot `s`. The observation `o′` is an action, a decision, a purchase, a vote, a survival outcome, or a measured belief report that neither sender nor receiver can move by agreement.

Symbols table :38-40: R is *"the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."* Under A the belief-change slice is unperceivable, so it is residual and simply cannot be read. Under B it becomes the aim. The question asks for B.

**What an answer would look like, written down as an ordinary term before the run (Formula, "Direction").** An answer is a *model shape* with six properties: an anchor at participant effect, per-slot measurement, a message as an import into the receiver's library gated by three conditions, a bond that carries the effect, a separation between convention-agreement and world-verdict, and an honest stop where instruments cannot discriminate. Writing this down binds the sought-for shape so it can accrue a residual and be refused. The refuter in section 3 is the binding.

---

## 1. Domain census, before choosing any figure line

**R by arity, symmetry and scale.**

- **Arity:** at least two participants (a sender frame and a receiver frame), plus a ground that neither can move. The message is an operand; effect on each participant is a separate slot. A population adds further slots, not a single aggregate.
- **Symmetry:** the message-to-effect bond is **ordered** (`→` sequence, `⇒` production) and **comparative** (`⋛` goal). Swapping sender and receiver changes the thing. The shared-code bond is symmetric (`≡` identity). This asymmetry is load-bearing: persuasion is not a reversible exchange.
- **Scale:** first order is a change inside one receiver's library (a mint). Second order is the settled change becoming an atom that propagates through a network of other frames.

**One line per domain: actors / currency / anchor. A domain with no nameable anchor is not a domain yet.**

| domain | actors | currency | anchor | partition or union | dependency |
|---|---|---|---|---|---|
| D1 Encoding and transmission | source, transmitter, channel, noise, receiver | bits, code length, distortion | the sent message, reproduced at the receiver | overlaps D2 | must be read before D2, but cannot settle D2 |
| D2 Receiver as a frame | receiver's library Γ, belief b, weighting w, live residual R⁺_s, candidate φ | belief update, description length | observed action or outcome that neither frame can move | overlaps D1 | depends on a vocabulary for "what would count as a change" (Fig 3) |
| D3 Convention and meaning | sender, receiver, shared code, mutual knowledge | agreement about meaning | **a convention, not a ground**; the shared code is the reference | overlaps D1 and D2 | precedes D2: the code must be shared before a claim can be assessed |
| D4 Habitat and propagation | other participants, network, conditions, relations | influence, valence relative to the residual | behavioral outcome at population scale (market, election, outcome) | overlaps D2 | depends on D2's settled change becoming an atom |

**D3 needs an explicit warning.** Its "anchor" is a convention, which has no truth value. Fig 2 :41 calls agreement about shared meaning *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"*. A convention is not a ground. Calling it one would be the failure Fig 10 names: *"a declared meaning is not a grounded one"* and *"a convention that decides an outcome has stopped being one"*. So D3 is a genuine domain (actors and currency are nameable) but it must not be used to settle D2 or D4. This is the hinge of the whole question.

**Partition or union.** This is a **union, not a partition**. Faithful transmission and belief change are overlapping conditions: a message can be reproduced exactly and change nothing (already believed), or be garbled and still move behavior (a false rumor moves a market). Fig 9 :54-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing."* Improving the channel clears D1 and leaves D2 to D4 standing. So unbundle before searching; treat the compound as its own loop with its own ground.

**Order by dependency (Fig 3).** Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* For this question the chain is: (1) perceive that a belief or behavior changed, (2) have terms for what the change affords, (3) say what would count as progress, (4) design the message, (5) carry what worked. The break is between (2) and (3): information theory has terms for bits, entropy and noise, but not a settled objective for "change that matters". Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Effort lands on coding because that is where the measurements already exist.

**Strain test applied to the census.** Two potential strains are named here, not smoothed over, and re-census below sends each to the right quantity:

- Fig 2 :40 (agreement disqualifying for a verdict) versus Fig 2 :41 (agreement efficient for a convention). Not a strain: they govern different objects. Re-census confirms.
- Fig 12 :125-126 (bits price description, actions price finding out whether it holds, they do not add) versus the question's demand for one measure of "information that changes belief". This is a strain that governs two quantities, so the model must carry both, not sum them. Re-census confirms.

---

## 2. Figure census, quoted before concluding

| figure | verbatim bearing | verdict for this question |
|---|---|---|
| Fig 1 | *"The ground enters as the only metric."* (Fig 1 :23) | the anchor must be the effect at the ground, not fidelity alone |
| Fig 1 | *"The residual is indexed by object slot, not aggregated."* (Fig 1 :19) | measure per participant, never as a campaign average |
| Fig 2 | *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* (Fig 2 :29) | a belief report that moves with the sender's framing is not an anchor |
| Fig 2 | *"Correlation has valence."* (Fig 2 :39) | one quantity, two valences, depending on whether the agreement is about a code or about the world |
| Fig 3 | *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (Fig 3 :27) | the break is at the objective, not at the channel |
| Fig 5 | *"is there anything to explain?"* (Fig 5 :20), *"it composes from what we already have"* (Fig 5 :23), *"it is not already in the library"* (Fig 5 :25) | three guards on a belief-changing message: support, reachability, novelty |
| Fig 6 | *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* (Fig 6 :23) | persuasion is import, not transmission |
| Fig 7 | *"same closure, handed along;"* (Fig 7 :12), *"agreement compounds, evidence does not"* (Fig 7 :13) | echo chambers are motion, not progress |
| Fig 9 | *"describe it before you go looking, or any frame you pick will seem to fit"* (Fig 9 :27-28) | describe the effect before choosing the discipline |
| Fig 10 | *"the ground does not decay, the channel does"* (Fig 10 :24) | a trusted belief report can go stale; keep the channel to the ground reachable |
| Fig 11 | *"capability is a property of agent-and-habitat, never of the agent alone"* (Fig 11 :39) | the same message has different effects in different information habitats |
| Fig 12 | *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* (Fig 12 :5) | framing and order carry the effect, not just the symbol set |
| Fig 12 | *"isomer. Same atoms, different bond, different substance."* (Fig 12 :117) | equally framed messages are isomers, not variants |
| Fig 13 | *"that entities relate, and influence travels"* (Fig 13 :24) | propagation is a structure (network), not a channel property |
| Symbols | b is *"Formed from its own history and from what it inherited, mixed by w."* (Symbols :20-21) | belief change is a change in b and w, not just in the received symbols |
| Operators | `⇒` production: *"A produces B; B did not exist before"* (Operators :37) | a new belief is produced, not merely transferred |

---

## 3. Findings F1 to F8

### F1 - The anchor is wrong for the question (decisive for the re-frame)

Fig 1 :23: **"The ground enters as the only metric."**

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."**

Shannon's pipeline (world source, section 4) anchors on reproducing the selected message at the destination. That anchor is legitimate for *"How do I send this symbol stream reliably?"* It is an instrument, not the ground, for *"What did this message do to the people who received it?"* A receiver who repeats the message verbatim and never acts on it is perfect under fidelity and null under effect. Conversely a garbled rumor can move a market.

**Verdict:** the model must change its anchor, not merely add a semantic layer on top of the old one. Mode `general` (structural), triangulated across Fig 1, Fig 2 and Shannon's own statement of the problem.

**Refuter:** a communication system whose fidelity metric and whose per-participant behavioral-effect metric rank all messages in the same order under a ground measurement that neither sender nor receiver can move. If they always agree, changing the anchor buys nothing.

### F2 - The effect is per participant, never averaged

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

A campaign that reports a mean attitude shift can hide one strongly moved subgroup and one unmoved subgroup. Under Fig 1, that is exactly how the live signal disappears. Symbols table :42-43: R is measured *"per slot, never as a single global number."*

**Verdict:** `specified`, triangulated across Fig 1 and the Symbols table. World corroboration from Lorenz et al. 2011 (section 4): social influence narrows the diversity of estimates without improving collective accuracy, so a mean can look unchanged while the distribution has collapsed.

**Refuter:** a controlled experiment in which the per-participant effect distribution is flat (no live slot) but the aggregate effect is large and survives a ground test. That would falsify the per-slot requirement.

### F3 - A belief-changing message is an import gated by a product

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 5 :20: **"is there anything to explain?"** Fig 5 :21: **"the gap has real mass somewhere"** Fig 5 :23: **"it composes from what we already have"** Fig 5 :25: **"it is not already in the library"**

`THE_FORMULA.md` step 3 states the guards as a product: SUPPORT `|R⁺_s| > 0 for some s`, REACHABILITY `φ ∈ closure(Γ)`, NOVELTY `φ ∉ atoms(Γ)`; *"gated by a product; any factor at zero forces inertness"*. Applied to the receiver:

- SUPPORT: the receiver must have a live unresolved slot. A person with no question has nothing to update.
- REACHABILITY: the message must compose with beliefs the receiver already holds. An untranslatable message is inert.
- NOVELTY: the message must not already be in the receiver's library. Repeating a known claim changes nothing.

Symbols table :24-26: *"Two frames with identical architecture diverge because their histories and their w diverge."* So the same message does different things to different receivers, because their `w` (private history versus inherited prior) differs.

Fig 5 :29-30 names the zero case: **"nothing new here"**, *"the machinery worked; the answer was already known"*.

**Verdict:** `specified`, triangulated across Fig 5, Fig 6 and the Symbols table. World corroboration from Clark and Brennan's grounding theory (section 4): communication advances only when the receiver provides evidence of understanding, which is a per-receiver check, not a channel property.

**Refuter:** a message that is already in the receiver's library and for which no live residual exists, yet that produces a measured per-participant belief or behavior change tracking the message rather than the receiver's history. That would falsify the import/mint account.

### F4 - Two quantities: convention agreement and world verdict (the central distinction)

Fig 2 :39: **"Correlation has valence."**

Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

Fig 2 :41: **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"**

This figure is the answer to the question at the level of shape. Communication *needs* high correlation when the content is the code: shared meaning is the product, so maximizing mutual information between sender's code and receiver's decoding is correct for D3. Communication *must not use* that same correlation as evidence that a belief about the world is right, because the two frames then share an evidence pool. D3's product must never be promoted into D2's verdict.

Fig 7 :12-13: **"same closure, handed along;"** **"agreement compounds, evidence does not"**. Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** This is the echo-chamber result inside the framework: many agreeing voices raise the vocabulary and do not add an anchor.

**Verdict:** `general`, triangulated across Fig 2 and Fig 7. World corroboration from Lorenz et al. 2011 and from the framing literature (section 4), both low overlap with the framework.

**Refuter:** a verified case where a population of frames drawing on one shared evidence pool produces a belief about the world that tracks a movable ground better than a low-overlap frame drawing on separate evidence. That would falsify the valence law in this domain.

### F5 - The effect is carried by the bond, not by the symbol set

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :94: **"The arrangement is the substance."**

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

A message is a molecule: atoms (symbols, facts) joined by typed bonds (order, framing, relation, negation). Shannon's model records the atoms and their probabilities; the bond is the half that is not being recorded. Two messages with identical symbol distributions under different frames are isomers: same atoms, different behavior.

World corroboration: the framing literature (section 4) reports that logically equivalent statements about the same facts change preferences when the frame changes. That is Fig 12 :117 instantiated outside the framework, in a field with no contact with these figures.

**Verdict:** `specified`, triangulated across Fig 12 and the framing source. The specific functional form of the bond price is not claimed.

**Refuter:** a controlled framing manipulation (same atoms, different bond) that produces no behavioral or belief difference under an instrument that resolves the effect, across participants with a live residual. That would falsify the bond claim.

### F6 - Influence travels; the effect belongs to agent-and-habitat

Fig 13 :24: **"that entities relate, and influence travels"**

Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone"**

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

The effect of a message is not a property of the message alone. It is a property of message-and-habitat: the receiver's history and `w`, the other frames in contact, the available ground readings. This is why the same advertisement, warning, or scientific result works in one community and fails in another. Introduction is available and exclusion is not (Fig 11 :61-62); a communicator can add a frame to the habitat but cannot subtract the habitat.

**Verdict:** `general`, triangulated across Fig 11, Fig 13 and the animal-signalling source (section 4), which defines communication by its effect on receiver behavior.

**Refuter:** an experiment showing the same message produces the same measured effect in two habitats that differ in receiver history and surrounding frames, with the ground held fixed. That would falsify the habitat claim.

### F7 - The framework returns a shape, not the model

Fig 9 :32: **"you get a kind of thing, never the answer itself"**

Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**

Fig 6 :30: **"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**

The result of this audit is a shape (the six properties named in section 0), not a formula with fitted coefficients. A specific measure of "belief change" is a binding from the measurement frame onto the shape, licensed only by a ground instrument or a provenanced import with a shadow test. The framework cannot name it.

**Verdict:** `general`, triangulated across Fig 9 and the canonical figures README. Any specific functional form offered below is marked as a candidate, not a derivation.

**Refuter:** a demonstration that one of the six shape properties is not required for a communication system to change belief or behavior at the ground, with the other five held fixed.

### F8 - Two currencies do not add

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**

Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**

Shannon's bit is a price in the first currency. Whether a message actually changed a participant costs actions: an experiment, a measurement, a behavioral observation. A model that reports a single "information delivered" number by summing them makes the error this figure names. The two readings come apart in both directions (Fig 12 :128): a short message over a costly-to-check claim is cheap to state and expensive to settle.

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** Any compression of the effect into a report carries a round-trip gap R_T, measured in section 4 of `11_audit.md`.

**Verdict:** `specified`, single-source for the two-currency rule (Fig 12), with the round-trip requirement triangulated across Fig 4 and `THE_FORMULA.md` step 6.

**Refuter:** a model that converts description bits and settlement actions into one commensurable unit and whose predictions survive a ground test that keeps them separate.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before outreach: Seat Map :287, *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A message already inside the receiver's library, with no live residual on any slot, still produces a measured per-participant change tracking the message rather than the receiver's history (breaks F3).
2. A population of frames drawing on one shared evidence pool produces a world-belief that tracks a movable ground better than a low-overlap frame with separate evidence (breaks F4 and Fig 2's valence law).
3. A framing manipulation with identical atoms and different bond produces no discriminable behavioral or belief difference (breaks F5).
4. A chain of agreeing frames whose agreement tracks the ground better than any single frame does (breaks Fig 7 :13).
5. The per-participant effect distribution is flat while the aggregate effect is large and survives a ground test (breaks F2).

If any fires, the corresponding finding is withdrawn. Until one is run, nothing in this folder may be labelled `grounded`.

---

## 5. Recommendation

1. Re-anchor the model. Keep the Shannon channel for the symbol layer, but add an effect channel whose anchor is an observed per-participant change that neither sender nor receiver can move (F1, F2).
2. Make the receiver a frame with `Γ`, `b`, `w` and `R`, and gate message effect by support, reachability and novelty as a product (F3).
3. Carry two quantities, never one: agreement about the code (maximize, it is the product) and information about the world (do not substitute agreement for a verdict) (F4).
4. Include the bond in the message description. Same atoms under a different frame are isomers with different effects (F5).
5. Price in two currencies, bits for description and actions for settlement, and measure the round-trip gap rather than assuming it is zero (F8).
6. Describe the effect in effect terms before choosing a discipline, and stop where the instruments can no longer discriminate (F7).
7. Use the public submission venues in `03_public_contact_points.csv`, ask for a refutation rather than belief, and record the verdict before offering any theory (Fig 10 :52).

---

## 6. Canonical usage check and retraction log

Two primary usage rules were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit, the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of what the instruments can distinguish and records the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md` mode rule and step 7 distinguish SEARCHED, INWARD and OUTWARD. For this question: the effect-measurement instrument exists in behavioral science (SEARCHED returns something), so the missing piece is not a new primitive but a re-anchoring; importing a new primitive is not owed and would be a wrong atom.

| earlier reading in this audit | status after the canonical check |
|---|---|
| F1 called "the anchor is wrong" | **Narrowed.** The Shannon anchor is legitimate for reproduction, which is constitutively about the sent message. It is an instrument, not a ground, for the effect question. Not retracted, but the word "wrong" is replaced by "wrong for this question" (Fig 2 :36-37). |
| F3 "persuasion is import" | **Confirmed with a correction.** Naming a structure in the receiver's library is a binding onto an atom already held, not an import that moves a wall. The import that matters is the atom the receiver did not hold (Fig 6 :22). |
| "information gain equals belief change" | **Retracted.** Mutual information between code and decoding is high precisely when the message is predictable and may change nothing. It is a D3 quantity, not a D2 effect (Fig 2 :41). |
| Apparent Fig 2 :40 versus :41 strain | **Not strained.** Re-census: :40 governs claims about the world, :41 governs agreement about a shared meaning. Different objects, so no soft reading is needed. |
| Apparent Fig 12 :126 versus one-number measure strain | **Not strained, but it changes the requested output.** Bits and actions are two quantities held apart. A single scalar "information that persuades" is the flat-formula error, not a simplification. |
| "the framework can supply the measure of persuasion" | **Refused.** Fig 9 :32 and the README's "shape, not a name" limit. The instrument, not the framework, names the measure. |

### The three step-7 questions, kept distinct

- **SEARCHED:** is the effect-measurement term already in the behavioral-science closure? Yes (grounding, framing, social-influence experiments). The remedy is re-anchoring and more search, not a new primitive (Fig 8 :42).
- **INWARD:** sharpen our own instrument. A per-participant, ground-anchored behavioral readout already returns something; refine it, do not invent a sensor from a description (Fig 6 :32-33).
- **OUTWARD:** find a frame whose closure predicts the shape of "message changes belief". Candidate frames actually read: cognitive science (grounding), social science (framing, crowd influence), animal behaviour (signalling), information theory (Shannon). Each is a witness from a different closure; see `09_watson_answer.md`.

### Updated verdict

The shape survives all eight findings and the canonical check: re-anchor to per-participant effect at the ground, gate the message as an import with three guards, carry the bond, keep convention and verdict separate, price in two currencies, and stop where instruments cannot discriminate. Strains after re-census: **none hidden**, two dissolved by assigning them to different quantities (Fig 2 :40/:41; Fig 12 two currencies). The specific functional form of a persuasive-information measure is `gap`, not `unreachable` at this budget: the instruments exist, the binding has not been measured here.
