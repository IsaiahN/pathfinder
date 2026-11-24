# Figure-grounded audit: defining information when the distribution is unknown

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (read this session). Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. Loop and mode: `FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and enter only in §7 and in `09_watson_answer.md`.

---

## 0. The residual in effect terms

A frame (an observer, a code designer, a scientist) holds a library Γ, a belief b, and a weighting w between private history and inherited prior. It bets, acts, and observes. The symbols table defines the residual:

> **"It is the gap between prediction and observation. The central quantity: everything the system does is driven by it."** (Symbols table :36-38)

The question asks what "information" names when the probability distribution p that would turn a set of possibilities into an entropy is not held by the frame. In effect terms, three things are missing at once: the support (which possibilities are real), the weights (how likely each is), and an anchor that would settle a candidate weight instead of merely agreeing with it. So the residual is itself a slice: the frame cannot read what it has no instrument for. Fig 1 :19 says **"The residual is indexed by object slot, not aggregated."** The slots here are the individual receiver events, not a global average over a population of messages.

What each option leads to:

- **Keep Shannon and declare information undefined without p.** Honest but silent at exactly the cases in question. Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room."* A silence is not a finding.
- **Name a distribution-free substitute and assert it as the definition.** Buys a name at the price Fig 1 :27 forbids: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* A shortest-description length assigned by the same machine that built the description scores the machine's own choice.
- **Bind the term to the residual, with guards, and stop at the gap.** The option derived below. It gives a shape that a checkable definition must have, and records what would settle a name.

**Direction, committed before the run.** The sought-for shape is made an ordinary term now: a definition of information is a rule mapping a slot's prediction/observation pair to a quantity that (i) does not move when a frame is pushed, (ii) is indexed per slot and never averaged, (iii) prices description bits and test actions separately, (iv) carries provenance for any imported primitive, and (v) stays a candidate until the ground pays. Formula step 2 warns that a frame cannot see the direction of its own question; writing it down is the discipline that makes it refusable.

---

## 1. Domain census (before any figure line is chosen)

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor. A domain with no nameable anchor is not a domain yet.

- **R (residual).** A three-place relation: frame-with-library, action/encoding, observation, indexed per slot. Arity three, ordered (source to channel to receiver), not symmetric. Symmetry: "information" behaves as a comparison (more/less), so it carries an ordered/comparison bond, not a symmetric join. Scale: single receiver slot, a message or block, and a habitat of encoders and decoders across a lossy membrane (Fig 4).
- **Term to be bound.** "Information" is not a primitive of the six-term set. It is an ordinary term we are trying to bind to something already in the loop, the way `07_the_tether_answer.md` of the exemplar binds "spacetime" to a derivative. Binding is not minting.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Carrier / source side | signal states, channel, noise | distinguishable physical differences | a reading at the receiver, an instrument | admitted |
| D2 Receiver / frame side | Γ, belief b, weighting w, per-slot R | residual reduction, description length | the ground that settles whether the reading was right | admitted |
| D3 The missing distribution p | candidate distributions, priors, histories | weight between private history and inherited prior | none nameable while p is genuinely unknown | **not a domain yet** |
| D4 Instrument / verification habitat | instruments, encoders, decoders, peer frames | contact and independence | the ground, which does not decay (Fig 10 :24) | admitted |
| X1 Information as free-floating property of the signal alone | the signal | none independently checkable | none nameable | not a domain |
| X2 Information as pure agreement among analysts | the agreeing frames | convention | the agreement itself, which moves when pushed | absorbed into D4 as a convention, never a verdict anchor |

**D3 is the crux.** When p is genuinely unknown there is no nameable anchor for p. By the standing rule, that is not a domain yet; it is the residual, the missing thing. Treating a guessed p as if it were an anchor is the error Fig 2 names: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* A guess changes when the frame is pushed.

**Union, not partition.** Fig 9 :4-5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* The carrier question, the receiver question, the missing-distribution question and the instrument question each work on a different subset. Fig 9 :54: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* So the answer is a union of per-domain verdicts, never one averaged formula. A case in several conditions is not a harder case of one.

**Order by dependency (Fig 3).** Perception: get a reading at a slot (link 1). Vocabulary: have terms for what the signal affords (link 2). Objective: say what counts as progress, namely reducing R (link 3). Planning: choose an encoding/action under incomplete information (link 4). Learn and carry: name what worked, verify it, carry it (link 5). D1 must be perceived before D2 can take a reading; D2's residual selects the D4 habitat; D3 would have to be imported before it can be asked again. *"Optimising a link that already works cannot rescue one that does not"* (Fig 3 :19).

---

## 2. Figure census (quoting before concluding)

| figure | bearing | verdict after census |
|---|---|---|
| 1 The Agent | per-slot residual, ground the only metric, frame-internal quantities disqualified | disqualifies self-assigned p as a metric; keeps per-slot indexing |
| 2 The Ground | anchor must not update; correlation has valence; buy independence | convention is not a verdict; gathers no evidence by agreement |
| 3 Dependency Chain | a reading below the break is a reading of nothing | order the union by dependency, not by importance |
| 4 The Membrane | methods cross up, head starts down; measure the round trip | a definition is a method, not a recording of one success |
| 5 Mint Pipeline | MDL bargain, large-and-compressible gap, output is not success | MDL is a budget filter, never a witness for the verdict |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | unknown p is a reachability fact, not a silence |
| 7 Room Chain | agreement compounds, evidence does not | a consensus of definitions cannot settle the definition |
| 8 Union Surplus | closure idempotent; convergent derivation vs adopted import; residual first | no search adds p; provenance decides; describe R before naming a frame |
| 9 Leave / Arrive | split a union; describe before looking; filters vs witnesses; shape not name | the governing structure for this question |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | an anchor with a reputation to protect is disqualified |
| 11 The Habitat | enumerated, not composed; capability is agent-and-habitat; valence relative to R | information is not a property of the signal alone |
| 12 The Bond | bond carries information the operands do not; two currencies; negation | "information" needs the arrangement, and bits/actions stay apart |
| 13 Minimum Viable Set | ordering and directedness are distinct structures; a shape, not a name; unreachable is a verdict | the six alone cannot choose which distribution-free substitute is the answer |
| Operators table | seven bonds, one unary operator (negation); price is open for the unary | a definition that cannot refuse cannot self-correct |
| Symbols table | R is a slice; the ground is not in the library and cannot be modified | what cannot be perceived yet is residual, simply cannot be read |

Strained readings are named as such in §3 and §6, not smoothed over.

---

## 3. Findings

### F1 — The anchor rule disqualifies "everyone agrees" as a definition (decisive for D4)

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
> **"If it moves when you push on it, it is not an anchor."**

Fig 2 :40-41:

> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"**

A definition adopted because probabilists and information theorists find it convenient is a convention, and conventions are efficient. But a convention that decides a verdict has stopped being one. The anchor for D4 must be something that fails to move when pushed: a discriminating reading at a receiver, not a vote among frames. Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."** The algorithmic-complexity community and the imprecise-probability community draw on partly different evidence, so their agreement is worth buying, but only in proportion to the cost of being wrong (Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**).

- Mode: `specified` for the D4 application, `general` for the anchor rule.
- Status: triangulated (Fig 2 anchor rule and Fig 10 ground rule, low overlap: one defines settlement, one defines channel failure).
- Refuter: a proposed definition whose acceptance is unchanged when every agreeing frame's evidence is replaced by a single pool, and which still predicts the receiver's readings. That would make agreement a verdict, breaking Fig 2 :40.

### F2 — A distribution the frame assigns is a frame-internal quantity (decisive for D2)

Fig 1 :23-27:

> **"The ground enters as the only metric."**
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

If a frame fills the missing p with a maximum-entropy prior and then measures the entropy of that prior, the number measures the frame's own assignment. The essays call this the metamerism error: a reading that *"cannot comment on the source"* (*The Hard Problem is About Source*). Fig 1 :28: **"The gap is measured per object, not per step."** So the per-slot gap, not the entropy of an assigned prior, is the quantity that can be ranged against the ground.

This does not forbid using a prior as a working assumption. It forbids scoring the prior with a quantity the prior itself produced. That is the exact distinction the MDL reading in F5 must respect.

- Mode: `specified`. Status: triangulated (Fig 1 :27 and Fig 2 :29, different quantities: self-scoring versus anchor).
- Refuter: a case where a frame assigns p, scores its own assignment, and the score changes contact with a receiver that never saw p. Then the assignment is not frame-internal here.

### F3 — Missing p is a reachability fact, not a silence (D3)

Fig 6 :21 and :23:

> **"MINT composes inside the closure and can never add an atom."**
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."**

So no amount of searching inside a frame that lacks p will produce p. Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."** The honest report is a reachability verdict, not a silence. Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room."**

The remedy is not to invent a definition from an armchair. Fig 6 :32-34:

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**
> **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

The proto-instrument that is already returning something is the receiver's own error signal: a slot-level discrepancy between prediction and observation. That is the edge to extend from. An OUTWARD import of a distribution-free definition with no source gate and no shadow test is a wrong atom priced above starting from primitives (Fig 6 :24).

- Mode: `general` for closure idempotence, `specified` for D3. Status: triangulated (Fig 6 wall rule and Fig 8 idempotence, distinct proofs).
- Refuter: a frame derives p from within its own closure with no new atom and no peer frame, and the derivation pays against the ground.

### F4 — What survives: bind "information" to per-slot residual reduction (D1 and D2)

Fig 1 :11, :19: **"residual R indexed by object slot"**, **"The residual is indexed by object slot, not aggregated."** Symbols table :36-40:

> **"It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."**

Binding "information" to the reduction of R at a slot gives a definition that needs no p: it needs a prediction, an observation, a slot, and an anchor that does not move. This is the operational shape. But it is a **binding**, not a derivation. The figures define R, not the English word "information." Marked as such.

- Mode: `specified`, ungrounded. Status: single-source for the binding (framework-internal), triangulated for the per-slot requirement (Fig 1 and Symbols table).
- Refuter: a case where R at a slot decreases while no receiver's discriminable state changes, or where a receiver's discriminable state changes while R at every slot stays flat. Either breaks the binding.

### F5 — MDL and the large-and-compressible gap are budget filters, not verdicts (D4)

Fig 5 :43-45:

> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."**
> **"This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."**

Fig 5 :47-48:

> **"So a system that starts with nothing can still be shaped, by seeking the gap that is large and compressible, which is the same quantity the acceptance test scores."**
> **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."**

This licenses algorithmic-complexity and MDL definitions as `specified` candidates when p is unknown, because they price the description rather than the distribution. It also forbids promoting them to the verdict: the gap they score is a filter. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** A shortest program is a witness to compressibility, not to what information *is*.

- Mode: `specified` for the candidate family, `general` for the filter rule. Status: triangulated (Fig 5 acceptance test and Fig 9 :60, low overlap: one prices a term, one separates budget from verdict).
- Refuter: a definition that wins solely by a shorter description, with no receiver-level residual reduction and no anchor. Then the filter handed us a verdict.

### F6 — It is a union, so split before searching (governing structure)

Fig 9 :4-5 (quoted in §1): **"Split it rather than search."** Fig 9 :54-57:

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

Searching for one definition of information across physics, biology, cognition and society is the undirected-union collapse of Fig 8. The four domains stay separate. Each gets its own verdict and its own ground. No averaging.

- Mode: `general` structural. Status: triangulated (Fig 9 split rule and Fig 8 union-surplus rule, different figures).
- Refuter: a single definition shown to be necessary across all four domains with one shared ground, so that splitting is unmotivated.

### F7 — Bits and test actions are two currencies, held apart

Fig 12 :125-130:

> **"A composition costs in two currencies, and they do not add."**
> **"Bits price the description. Actions price finding out whether it holds."**

A definition of information that adds a bit count to an experimental cost has made the named error. A short description over a costly operand is cheap to state and may take a whole budget to settle; a long chain of cheap parts is expensive to describe and may cost one action to refute. Neither predicts the other. This bears directly on "how should information be defined": any answer that collapses representational cost and verification cost is disqualified by construction.

- Mode: `general`. Status: single-source (Fig 12 price rule), with the two-currency claim structural rather than measured.
- Refuter: a definition for which description length and test cost are shown to be the same quantity in the same units at the same level.

### F8 — Information is agent-and-habitat, not a property of the signal (D1, X1)

Fig 11 :39-40 and :43-44:

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**
> **"The habitat is enumerated, never composed."**

Fig 11 :49: **"An actor’s valence is relative to the residual, not a property it carries."** A carrier has no information-valence by itself; its valence is relative to a residual and a receiver. This refuses X1 (signal alone, no anchor) and the agent-only version at once. It also licenses enumeration of the habitat: list the encoders, channels, receivers, noises and instruments in contact with the slot, then outward until the cascade stops mattering.

- Mode: `specified` for the information application, `general` for capability. Status: single-source (Fig 11), corroborated at low overlap by Friston's free-energy account in §7 (prediction error against a generative model).
- Refuter: an agent-only improvement that moves the ground, which Fig 11 :72 names as the refutation of the capability claim.

### F9 — The framework returns a shape, not the single formula (the honest stop)

Fig 9 :32: **"you get a kind of thing, never the answer itself."** Fig 13 :134: **"Unreachable is a verdict here, not a silence,"** and Fig 13 :138-139:

> **"you get a kind of thing, never the answer itself, and narrowing gets you close while the ground decides."**

Figure 13 holds ordering (spectrum, *"ordering, so more and less can be said"*) and directedness (gradient, *"a difference that can be spent"*) as distinct structures and forbids deriving one from the other. It therefore cannot select, from the six alone, which distribution-free substitute (shortest program, credal set, free-energy bound, residual reduction) is *the* answer. That would be naming a primitive the frame does not hold. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** So this is a `gap` on the unique formula, not a silence and not a failure.

- Mode: `general` limit. Status: triangulated (Fig 9 :32 and canonical figures README: *"a shape, not a name"*).
- Refuter: a derivation from the six-term set that singles out one substitute and pays against the ground.

### F10 — A definition that cannot refuse cannot self-correct

Fig 12 :139-140 (Operators table :58, same content):

> **"A vocabulary that cannot refuse can only accumulate."**

Negation is the eighth operator and is not a bond; with it a frame can say that a candidate distribution is false, not merely absent. Without it, a definition of information accumulates correlations and cannot record the correction that one of them was wrong. Fig 12's *"A recipe that names only its ingredients has recorded half of itself"* applies to definitions too: a definition that lists entropy inputs without the bond to a ground records half of itself.

- Mode: `general`. Status: single-source (Fig 12 amendment / Operators table), structural.
- Refuter: a definition with no refusal operator that nonetheless retracts a failed candidate without silently erasing it.

---

## 4. Pre-registered refuter (written before the conclusion)

Per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is: when p is unknown, "information" should be bound to a per-slot, ground-anchored reduction of residual; any candidate term must pass support, reachability and novelty, pay the MDL bargain, keep bits and actions in separate currencies, and stay a candidate until the ground settles it; no single formula is named. It is refuted if any of the following holds:

1. A receiver's discriminable state changes while R at every slot stays flat, or R at a slot falls while no receiver state changes (breaks F4 binding).
2. A frame derives the missing p from inside its own closure, with no new atom and no peer frame, and the derivation pays against the ground (breaks F3, Fig 6 :21 and Fig 8 :32).
3. A definition wins by agreement alone, with no anchor that fails to move when pushed, or by a shorter description with no receiver-level residual reduction (breaks F1 and F5, Fig 2 :40 and Fig 9 :60).
4. A single definition is shown necessary across all four domains with one shared ground, so the union must be collapsed into a partition (breaks F6).
5. Description length and test cost are shown to be the same quantity in the same units at the same level (breaks F7).

If any fires, the shape claim is withdrawn and the line is sent to the log. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and its refuter, not with a formula. Fig 10 :52: **"Bring a characterised residual, never the source."**
2. State the mode on every claim. A shortest program is a `specified` candidate, not a definition settled by the ground.
3. Keep D1 to D4 separate and never average their verdicts. Split the union first (F6).
4. Treat MDL, algorithmic complexity, credal sets and predictive surprise as filters for the budget and candidates for binding, each with provenance and a shadow test. Never let one hand you the verdict (F5).
5. Use the public opt-in venues in `03_public_contact_points.csv`. Ask what would refute the shape, not whether the reader agrees. Fig 7 :13: **"agreement compounds, evidence does not"**

---

## 6. Canonical usage check and retraction / confirmation log

Two documents were read after sections 0 to 5 and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo... the quotes are the authority, not this summary."* Also the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws and decide design questions by derivation; the seat reads the ground and does not ask the anchor to decide what the figures already settle.

| earlier reading in this derivation | status after the canonical check |
|---|---|
| Initial temptation to answer "use Shannon entropy with a maximum-entropy prior" | **Retracted.** F2: the prior is frame-internal and the entropy of it scores the frame's own assignment. |
| Initial temptation to answer "use Kolmogorov complexity instead" | **Retracted as a verdict, kept as a candidate.** F5: MDL is a filter; the figures price a term, they do not name the definition. |
| Initial reading of F3 as "the framework is silent about unknown p" | **Retracted.** F3: unreachability is a verdict, not a silence (Fig 13 :134). |
| Initial reading of F9 as "shape not a name forbids any substitute" | **Narrowed, following the exemplar's own correction.** The phrase governs a *missing* primitive. Algorithmic complexity, credal sets and residual reduction are already bindable terms from other frames, so naming them is a binding with provenance, not the invention of a seventh primitive. What is forbidden is asserting the binding as figure-derived. |
| Apparent strain: Fig 1 :27 (frame-internal quantities disqualified) versus Fig 5 (MDL acceptance test) | **Not strained after re-census.** Fig 1 governs metrics that a frame uses to score itself; Fig 5 governs the price of admitting a term into Γ. Different objects. MDL is a budget instrument, not a ground metric. Matches the README re-census rule. |
| Apparent strain: Fig 11 :39 (capability is agent-and-habitat) versus D2 (receiver frame does the work) | **Not strained.** Fig 11 governs the locus of capability; D2 is one slot in the enumerated habitat, not the whole habitat. |
| F10 ("cannot refuse") | **Kept, marked `general`.** It is a structural requirement on a vocabulary, not a measurement. |

**Verdict of the canonical check.** The shape survives: per-slot, ground-anchored, guard-gated, two-currency, provenance-stamped, and plural across a union. The unique formula does not. Strains after re-census: none hidden; one live limit, the D3 anchor gap, recorded plainly.

**Round trip gap `R_T`.** The condensation "information is residual reduction" drops three things that only the full figure set holds: the anchor-must-not-update rule (Fig 2 :29), the two-currency separation (Fig 12 :125), and the shape-not-a-name limit (Fig 9 :32). `R_T` is therefore nonzero and qualitative; no ground reading exists to measure it numerically. `11_audit.md` runs this trip explicitly.
