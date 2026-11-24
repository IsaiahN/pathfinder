# Figure-grounded audit: how context and background knowledge change the information conveyed by the same signal

**Mode of this document: `general` on the structural shape, `specified` on the testable predictions, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is an approximate simulation and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the figures README at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and `60_FIGURES_AS_METALAWS.md`. Figure quotes are verbatim from the extract. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The claim under audit

Restated as an effect, not as a theory. A token sequence `o′` arrives at two receivers. Receiver 1 has library `Γ₁`, belief `b₁`, weighting `w₁`, and a history. Receiver 2 has `Γ₂`, `b₂`, `w₂`, and a different history. Both observe the same `o′`. The question asks what makes the information conveyed differ, and what would make it the same.

Two options, stated before the derivation:

- **Option A.** The information is in the signal. Change only the receiver and the information is unchanged; "meaning" is a separate, softer add-on. This is the engineering-level reading Shannon explicitly scoped away from.
- **Option B.** The information is a slot-indexed residual reduction relative to a receiving frame, carried by bonds the frame supplies, and settled only by the ground. The signal fixes the tokens; the receiver fixes what the tokens compose into.

What each leads to: A predicts that a shared token sequence has one information content and that disagreement is noise or error. B predicts that the same tokens yield different per-slot residuals under different libraries and beliefs, that the difference is carried by the arrangement (the bond) rather than the ingredients, that shared context is a convention useful for coordination but worthless as a verdict, and that only a ground ranging against both frames separately settles what the signal was about.

B is what the figures govern. A is not refuted as a description of the code domain; it is refused as an answer to a question constitutively about interpretation. Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*

---

## 1. Domain census

### 1.1 The residual R by arity, symmetry, scale

- **Arity, three:** signal `o′`, receiving frame (`Γ`, `b`, `w`, slots `s`), and ground. A two-place account (signal plus receiver) is under-specified; without the ground there is no way to say which interpretation was right.
- **Symmetry:** the relation is ordered. The signal does not update the receiver's ground; the ground updates the receiver's model. Fig 2 :33: *"The anchor must not update."* The bond between signal and interpretation is therefore one of the ordered bonds, most often sequence `→` or comparison `⋛`, not the symmetric `+`.
- **Scale:** first order inside one receiver (one prediction per slot), second order at the union of two receivers (Fig 8 :45). Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

### 1.2 One line per domain, with actors, currency, anchor

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1, the code or syntactic channel | source, tokens, channel, receiver | bits, surprisal | none internal; the measure is frame-internal (Fig 1 :27) | yes, as a channel, but it cannot settle this question |
| D2, the receiving library and belief | `Γ`, `b`, `w`, slots `s` | residual `R = |Γ(b,a) − o′|` per slot | the ground (Fig 2 :29-30) | yes |
| D3, the bond or arrangement | atoms (tokens), seven bonds, negation | description length, arrangement | behaviour, the difference the arrangement makes (Fig 12 :117) | yes |
| D4, convention versus ground | two frames, a shared meaning, the ground | agreement versus contact | the ground, never agreement (Fig 2 :35) | yes |
| D5, verification across frames | two receiver frames, a witness frame | independence | the ground; evidence bearing only on the maker is inadmissible (Fig 9 :51) | yes |

No domain lacks a nameable anchor. D1 is retained as the channel boundary but is not a domain for this verdict because its anchor is frame-internal: *"They are frame-internal. A frame cannot score itself with a quantity it also produces"* (Fig 1 :27). A domain whose only currency is what it produces cannot range against anything.

### 1.3 Partition or union

This is a **union compound with overlapping conditions**, not a partition. The same signal sits in D1 and D3 at once; the same receiver sits in D2 and D4 at once. Fig 9 :54-56: *"when the split lands on a union rather than a partition, unbundle before you search again. A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Each domain gets its own loop and its own verdict. A single lever (say, "define information as semantic") clears the region where only one condition holds and leaves the intersections standing.

### 1.4 Dependency order (Fig 3)

1. **Perception:** the signal must register as a per-slot residual. Fig 3 :5 *"the system can tell what is in front of it, and tell it apart from what was there before."*
2. **Vocabulary:** the receiver must have terms for what the tokens afford. Symbols table :9-10: *"Everything the system can currently express: its primitives, and everything it can build by combining them."*
3. **Objective:** it must be able to say what counts as progress in its own terms. This is where "background knowledge" bites. Fig 3 :25-26 names this the link that usually breaks: *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*
4. **Planning:** a route to that objective under incomplete information.
5. **Learn and carry:** name what worked, verify it, carry it.

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Adding bits to a channel (link 1) cannot repair a missing vocabulary (link 2). Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

### 1.5 Figure census

| figure | bearing | preliminary verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | governs the unit of information |
| 2 The Ground | anchor, independence, convention versus verdict | governs what settles an interpretation |
| 3 Dependency Chain | vocabulary is the weak middle link | governs where context acts |
| 4 The Membrane | lossy transform, round trip `R_T` | governs method transfer between receivers |
| 5 Mint Pipeline | novelty relative to atoms; "nothing new here" | governs what a signal can be novel for |
| 6 Closure / Reachability | composition cannot add an atom; import moves the wall | governs background knowledge as closure |
| 7 Room Chain | agreement compounds, evidence does not | governs a crowd of interpreters |
| 8 Union Surplus | two frames reach more; provenance, residual first | governs the second receiver |
| 9 Leave / Arrive | describe the effect, not the cause; union unbundling | governs how the residual is described |
| 10 Ground Maintainer | declared meaning is not grounded meaning | governs shared context as convention |
| 11 The Habitat | capability is agent and habitat; contact cascades | governs what a receiver can perceive at all |
| 12 The Bond | bond carries information the operands do not | governs the same tokens under different context |
| 13 Minimum Viable Set | same ingredients under a different bond, different substance | triangulates Fig 12 |
| Symbols table | `b`, `w`, `Γ`, `R` per slot | governs the notation for belief and library |
| Operators table | seven ordered/symmetric bonds | governs which bond context supplies |

Strained readings are named in section 2, not smoothed over.

---

## 2. Findings

### F1: Information is a slot-indexed residual in the receiving frame, not a property of the signal

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Symbols table :37-40: **"The gap between prediction and observation. The central quantity: everything the system does is driven by it."** and **"it is always a slice: what cannot be perceived yet is residual and simply cannot be read."**
Symbols table :9-10: **"Everything the system can currently express: its primitives, and everything it can build by combining them."**

Hold `o′` fixed. The prediction is `Γ(b,a)`, a function of the receiver's library and belief, not of the tokens alone. Therefore `R = |Γ(b,a) − o′|` differs per slot between receivers. The "information conveyed" is the reduction of specific slot residuals, so it differs even though the tokens do not. A global bit count hides exactly this: a receiver can have a near-zero global residual with one live slot still registering (Fig 1 :13).

**Verdict: triangulated.** Fig 1 governs the loop; the Symbols table governs the notation. Low overlap: one is the per-slot agent cycle, one is the definition of `R`, `b`, and `Γ`. They reach the same boundary from different places.

**Refuter:** a receiver with a demonstrably different `Γ` and `b` that produces the same slot-indexed residual vector for the same `o′` across all testable slots. If that holds, the frame does not change the information and this finding falls.

### F2: Background knowledge decides what is composable and what is novel

Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
Fig 6 :22: **"NOVEL means novel relative to atoms, not to the world."**
Fig 5 :30: **"the machinery worked; the answer was already known"**

A token whose atoms are already in `Γ₁` is not news for receiver 1; the same token mints for receiver 2, whose `Γ₂` lacks those atoms. Fig 5 names receiver 1's state: the machinery ran and returned nothing new. This is a direct, figure-grounded statement that background knowledge changes the information a signal carries.

**Verdict: triangulated** across Fig 6 (reach) and Fig 5 (mint guards). Low overlap: closure geometry versus pipeline guards.

**Refuter:** a token that is novel for every possible `Γ`, that is, novelty absolute rather than relative to a frame's atoms. Fig 6 :22 defines that away, so a positive demonstration would strain the figure and send us back to census.

### F3: Context enters through belief `b` and weighting `w`, so identical architectures diverge by history

Symbols table :20-21: **"Formed from its own history and from what it inherited, mixed by w. Not the observation."**
Symbols table :24-26: **"How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings. Two frames with identical architecture diverge because their histories and their w diverge."**

This is the framework's own notation for "context and background knowledge." The observation `o′` is explicitly *not* the belief. Two receivers with identical architecture but different histories and weightings predict differently, hence resolve the same signal differently. This is also Fig 2's independence condition: two people reading the same report are not two frames.

**Verdict: triangulated** across the Symbols table and Fig 2 :31-32. **Refuter:** two frames with identical `Γ` but different histories and `w` that produce identical per-slot residuals for every signal tested.

### F4: The same atoms under a different bond are different information, and the bond is supplied by context

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
Fig 12 :46-47: **"which one holds is not recoverable from the operands"**
Fig 12 :94: **"The arrangement is the substance."**
Fig 12 :96-97: **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**
Fig 13 :124-125: **"the same ingredients under a different bond are a different substance."**

The signal is the ingredient list. Context and background knowledge supply the bond: sequence `→` when order matters, identity `≡` when two tokens name one referent, comparison `⋛` when the question is which is larger, subtraction `−` when an absence is the point. Fig 12 :40-41: *"same two atoms, three substances / and the bond is charged for what it could have been."* Same tokens under different context are therefore not variants of one message; they are different messages whose notation cannot tell them apart. This is the strongest figure-grounded answer to the exact question.

**Verdict: triangulated** across Fig 12, the Operators table, and Fig 13. Low overlap: notation and pricing versus the minimum set.

**Refuter:** a case where the same tokens under two different bonds yield behaviourally identical residual reductions and no instrument can discriminate them. Then the bond carries no information and Fig 12 is strained. Write the discriminator down before running the case.

### F5: A declared meaning is not a grounded meaning; shared context is a convention

Fig 10 :18: **"a declared meaning is not a grounded one"**
Fig 10 :49: **"Declaring a meaning does not ground it."**
Fig 10 :47: **"a convention that decides an outcome has stopped being one"**
Fig 2 :41: **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"**
Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**

Two receivers in the same culture, discipline, or conversation share context. They will decode the signal the same way. That agreement is the product, not a check on truth. The ground decides what the signal was actually about. Fig 10 :11-15: *"two frames, one field, no shared reading / a disagreement nothing can state / is not yet a defect."* The convention makes the disagreement statable; it does not decide it.

**Verdict: triangulated** across Fig 10 (seam and convention) and Fig 2 (valence of correlation). **Refuter:** a case where agreement between two frames that share all context is itself the thing that settles a factual question. That would collapse Fig 2's panel 3 into panel 1, the coherent-drift collapse, and the figure would need re-census.

### F6: Two frames with different closures get more information from the same signal, but only if the residual is described first

Fig 8 :45: **"Two frames together reach what neither reaches alone."**
Fig 8 :50-52: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."**
Fig 8 :53: **"Residual first, frame second."**
Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**

Adding a second receiver whose closure differs adds an atom to the union, so the same signal supports more compositions. But the second frame must be selected against the residual, not against the interpretation you hope for. Otherwise any frame will seem to fit and the extra reach is an artefact of selection.

**Verdict: triangulated** across Fig 8 and Fig 9. **Refuter:** two frames with provably disjoint closures whose union adds no new composable term for the signal. Fig 8 :19 says a surplus exists when closures differ; a counterexample would need to show differing closures with zero surplus.

### F7: A reading that cannot discriminate sources cannot tell you what the signal was about

Fig 6 :30: **"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**
Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**
Fig 9 :32: **"you get a kind of thing, never the answer itself"**

The same token pattern can have several sources, the metamerism case in *The Hard Problem is About Source*: *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"An instrument that can’t distinguish these cases demonstrates its own inadequacy."* Context narrows which source a receiver selects, but only a source-discriminating instrument can name it. The framework returns a kind of thing, not the answer.

**Verdict: triangulated** across Fig 6, Fig 9, and the essay. The essay shares the framework author's evidence pool with the figures, so it is one witness on that side, not two. **Refuter:** a reading that uniquely determines its source with no external instrument and no prior discrimination.

### F8: The effect is per slot, and the middle link is where it goes unnoticed

Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**
Fig 3 :25-26: **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."**
Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

An aggregate measure of "information conveyed" hides the slot where context changed the interpretation. The vocabulary link (link 2) is where background knowledge operates and is the link with the fewest instruments.

**Verdict:** per-slot claim triangulated (Fig 1 plus Symbols table); middle-link claim **single-source** (Fig 3 only). Marked single-source rather than inflated.

**Refuter:** an instrument for link 2 that measures vocabulary fit without reference to the ground, or an aggregate information measure that reliably predicts which slot will change interpretation.

### F9: What survives, with mode attached

| claim | mode | figure | status |
|---|---|---|---|
| Information is a per-slot residual relative to a receiving frame | `general` (structural) | Fig 1 :19, :22; Symbols :37-40 | triangulated |
| Background knowledge decides novelty and composability | `specified` (testable) | Fig 6 :21-22; Fig 5 :30 | triangulated |
| Context enters through `b` and `w`, not through the tokens | `specified` | Symbols :20-26 | triangulated |
| Same atoms under a different bond are different information | `general` (structural) | Fig 12 :5, :94, :96-97; Fig 13 :124-125 | triangulated |
| Shared context is a convention, not a verdict | `general` | Fig 10 :47-49; Fig 2 :40-41 | triangulated |
| A second, different frame adds reach from the same signal | `specified` | Fig 8 :45, :50-52 | triangulated |
| The vocabulary link is where the effect is missed | `specified` | Fig 3 :25-27 | single-source |
| Which specific bond a given context supplies | unbound | Operators table | gap: needs an instrument |

The last row is a genuine `gap`. The figures define the bonds but do not select which one a particular social or cognitive context instantiates. Naming one would be a binding from another frame, not a derivation. *"Unreachable is a verdict here, not a silence"* (Fig 13 :134).

---

## 3. Pre-registered refuter

Written before the conclusion, per the standing instruction that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A receiver with demonstrably different `Γ` and `b` produces the same per-slot residual vector for the same `o′` across all testable slots.
2. Novelty is shown to be absolute rather than relative to a frame's atoms (a token that mints for every possible `Γ`).
3. The same tokens under two different bonds yield behaviourally identical residual reductions with no instrument that can discriminate the bonds.
4. Agreement between two frames sharing all context is shown to settle a factual question, collapsing Fig 2's anchor into a frame.
5. A source-discriminating instrument is unnecessary because a reading already uniquely determines its source.

If any fires, the corresponding finding is withdrawn and the shape is re-censused. Until one is run, nothing here is `grounded`.

---

## 4. Recommendation

1. Lead with the shape (same tokens, different per-slot residual, bond supplied by the frame), not with a theory of semantics. Fig 10 :52: *"Bring a characterised residual, never the source."*
2. Keep the five domain verdicts separate. Do not average D2, D3, and D4 into a single "context matters" claim; D4 is a convention claim and D2 is a residual claim and they license different actions.
3. Describe the residual in effect terms before selecting a checking frame. Fig 9 :27-28.
4. Treat shared context as a coordination product, never as corroboration. Fig 2 :40-41.
5. Ask the checker what they would count as a failure. Record the verdict before offering the links.

---

## 5. Canonical usage check and retraction log

Two sources were read after the first four sections and they govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* The canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments stop, recording the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* The figures are metalaws, so design questions are settled by derivation, not by asking for a ruling.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Option A (information is in the signal) is wrong | **Retracted as a refutation.** It is correct in D1, the code domain, where its anchor is internal. It is refused only as an answer to a question constitutively about interpretation. Kept visible as a boundary, not erased. |
| "Context equals the library `Γ`" | **Corrected.** Context in the essay is the search pointer; pretext (history) is closer to `Γ` plus `b` plus `w`; subtext is the interpretation. Recorded in `06_isomers_and_order.md` Q1. Both readings kept. |
| "The figures name the bond context uses" | **Refused as a gap.** Fig 12 defines seven bonds and does not select one for a given social context. Writing `→` for "context" would be a binding, not a derivation. |
| "Shannon information is frame-free" | **Narrowed.** The measure is defined over a source distribution, which is a frame assumption; but this does not make it a verdict about semantics. The point is scope, not error. |
| F5 initially read as "shared context corrupts meaning" | **Corrected.** The figures separate two valences: disqualifying for a verdict, efficient for a convention. Shared context is the latter. Both clauses retained. |
| F7 initially cited the essay as a second independent witness | **Corrected.** The essay shares author and evidence pool with the figures, so it corroborates at low independence. Recorded as one witness, not two. |
| Apparent strain Fig 12 versus Fig 13 on isomers | **Not strained.** Fig 12 governs the bond and its price; Fig 13 governs the minimum set and notes that two chains can compose the same substance. Different quantities. Re-census, not a softened reading. |
| Canonical "shape, not a name" applied to this question | **Confirmed but narrowed.** It governs a primitive not held in `Γ`. The finding here is a shape (a three-part receiver structure plus a ground), not a name of a new primitive. |

### Updated verdict

The shape survives: the same signal conveys different information because the receiving frame supplies a bond and a per-slot residual against its own library and belief, while the ground alone decides which interpretation was right. What does not survive is any attempt to name a single mechanism or to treat shared context as corroboration. Strains after re-census: **one**, the identity of the bond a given context supplies, recorded as a gap rather than hidden.
