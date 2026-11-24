# Figure-grounded audit: compression in perception, efficiency and distortion

**Mode of this document: `specified` on the boundary separators, `general` on the structural shape, not `grounded`.** It states what would have to be measured and what would refute it. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No perceptual measurement was taken. See `05_what_shape_means.md` section 7.

**Sources.** The figure text is `FRAMEWORK/reference/03-FIGURES_TEXT.md`; quotes are verbatim from that extract and cited `Fig N :line`. Supporting primaries are `THE_FORMULA.md`, the Symbols table, the canonical figures README and `60_FIGURES_AS_METALAWS.md`. World sources were opened in 2026-11-23 and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The question asks for a boundary: a perceptual system maps a high-dimensional signal `x` to a coarser description, and the same act is said sometimes to help cognition and sometimes to distort it. State the two options as effects, not as adjectives.

- **Option A, called efficient:** the coarser description is cheaper to state, the system still reads a nonzero, correctly located residual against an anchor that does not move, and a later judgment paid by the ground succeeds. What it leads to: cheaper representation, retained contact, a measured round-trip gap.
- **Option B, called systematic distortion:** the coarser description is cheaper to state, but a term the system needs later is no longer derivable from it. The system reports a verdict where it has only lost touch. What it leads to: coherent, self-consistent error that a same-pool reader cannot see.

The residual `R` is the per-slot gap between prediction and observation. Symbols table :38-39: *"It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."* Fig 1 :10: *"one bet per object slot, every action"*; Fig 1 :11: *"residual R indexed by object slot"*. If compression removes a signal entirely, the error that would have detected its removal cannot be read. That is the whole difficulty: the failure is not visible from inside the compressed frame.

**The question as posed is a bundled union, not a partition with one dial.** Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"A case in two conditions is not a harder case of either."* "Efficient" and "distorting" are not two ends of a compression-ratio scale. They are different compounds with different anchors, so one lever cannot trade one for the other and their verdicts must be kept separate and never averaged.

**R by arity, symmetry and scale.**

- *Arity:* at least three conditions act at once, namely ground contact at the slot, retention of the typed bonds that carry content, and the action budget needed to settle a term built over the compressed description. Arity greater than one, so union.
- *Symmetry:* reading "efficient" and "distortion" as a symmetric pair fails. The first is a ground-paid success; the second is a refusal candidate that persists and does not trend down, plus a channel that stopped delivering. The formula's "WHICH TERM" rule ranks terms by a residual that *"PERSISTS AND DOES NOT TREND DOWN"*, the same shrinking test read with the opposite sign. One is not the complement of the other.
- *Scale:* first order inside one perceptual frame (loop steps 1 to 5), second order across the abstraction membrane (Fig 4), third order in the verification arrangement where independent frames range against a ground (Fig 2, Fig 7).

**Bind the sought-for shape as an ordinary term.** `THE_FORMULA.md` "Direction": a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."* The remedy is a discipline: write down what an answer would look like, bind it, let it accrue a residual. Bound here as: *compression is efficient if and only if it pays the MDL bargain, keeps the residual indexed per slot, keeps the anchor reachable, and reports a measured round-trip gap; it is systematically distorting if the description shrinks while any one of those is lost without a signal that it was lost.* That term is now refusable by the same test as everything else, and its refuters are written in section 4 before the recommendation.

---

## 1. Domain census

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not yet a domain and is not given a verdict. Question type is partition or union. Order is by dependency (Fig 3), not by importance.

| domain | actors | currency | anchor | type |
|---|---|---|---|---|
| **D1, per-slot perceptual readout** | object slots, belief `b`, weighting `w`, action `a`, observation `o'` | per-slot residual `R_s = |Gamma(b,a) - o'|` | the observation at the slot; "the ground enters as the only metric" | union (mass, gap kind and goal weighting overlap) |
| **D2, the abstraction membrane** | one agent and a population, a lower and a higher level, `T_A` and `T_E` | a method carried up, a head start sent down, the round-trip gap `R_T` | the measured round trip, not the compressed description | union (method transfer and recording transfer are different bonds) |
| **D3, composition and bonds** | atoms and typed bonds, seven bonds plus negation | description cost in bits, settling cost in actions | the behavior that differs when the bond differs | union (isomers over a fixed atom set; imports when the atom set changes) |
| **D4, ground-channel maintenance** | the anchor, the channel, stale percepts and pooled readings | contact with a ground that does not update | a non-updating measurement or outcome | union (channel decay and anchor movement are different failures) |
| **D5, verification by other frames** | independent instruments or frames, one evidence pool | agreement versus independence | the ground, never agreement | union (triangulation and mirror agreement are different objects) |

**Partition or union.** All five domains are union compounds. D2 and D3 overlap where a compressed description is both a representation and a candidate term, so that overlap is a compound with its own loop, not a sixth domain to be averaged with the others.

**Dependency order (Fig 3 :20).** Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

1. **Perception, D1.** The system must read a residual per slot. Fig 3 :5: *"the system can tell what is in front of it, and tell it apart from what was there before"*. If the compressed description has removed the transient that would register a change, this link is already broken.
2. **Vocabulary, D3.** The system must have terms for what the retained atoms afford. Fig 3 :7: *"it has terms for what things afford: what can be moved, opened, joined, blocked"*. A list of active features is not a grammar. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*
3. **Objective, D2.** The system must say what counts as progress after compression. The quantity is the round-trip gap `R_T`, measured rather than assumed. Fig 3 :10: *"it can say what would count as progress here, in its own terms"*.
4. **Planning and probing.** Aim a new instrument from one already returning something that fails to resolve (Fig 6 :32).
5. **Learn and carry, D5.** Name what worked, verify it and carry it to the next problem only if it is a method and not a recording.

**Where this chain breaks.** Fig 3 :25-26 says perception and planning have obvious failures and obvious tests, but the middle link, having terms for what a situation affords and saying what would count as progress, has neither. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* For compression in perception, the uninstrumented link is step 3: almost nobody measures the round-trip gap between the compressed percept and the original at the slot, so efficiency is usually assumed from the compression ratio alone. That is the link where the argument below lands.

---

## 2. Figure census

| figure | bearing | verdict for this question |
|---|---|---|
| **1 The Agent** | frame-internal quantities are disqualified; the residual is per slot | compression achieved is not a verdict; the where-to-look signal must survive per slot |
| **2 The Ground** | anchor must not update; triangulation not negotiation | efficiency requires a ground that does not move; distortion is coherent drift that mirrors hide |
| **3 Dependency Chain** | order by dependency; the middle link has no instrument | the round-trip gap is the missing instrument, not the compression ratio |
| **4 The Membrane** | lossy transform between scales; round trip and `R_T` | compression is lawful as a method carried up; a recording carried up is distortion |
| **5 Mint Pipeline** | MDL bargain; one-occasion fit fails; curiosity can produce nothing | compression is licensed by cost plus leftover, not by cost alone |
| **6 Closure / Reachability** | mint adds no atom; only import moves the wall; improve an existing instrument | detail dropped by compression cannot be recovered by more search in the same closure |
| **7 Room Chain** | agreement compounds, evidence does not | a room of readers who all find the compressed percept clear adds no evidence |
| **8 Union Surplus** | closure idempotent; search finding nothing is not proof of absence; independence decides surplus | lost atoms need a different frame, not a longer search in the same one |
| **9 Leave / Arrive** | union before partition; filters for budget, witnesses for verdict | the ratio is a filter, never the witness; unbundle the two outcomes |
| **10 Ground Maintainer** | the ground does not decay, the channel does; stale percepts, dropped transients | systematic distortion is a channel failure reported as a verdict |
| **11 The Habitat** | capability is agent-and-habitat; no standing list of good actors | no fixed feature list is worth compressing across all residuals |
| **12 The Bond** | the bond carries what the ingredient list does not; two currencies | same features under a different bond are a different percept, invisible in the compressed formula |
| **13 Minimum Viable Set** | detail discarded at a crossing reappears as noise; set closed, arrangements not | a general shape for loss: what is thrown away returns as noise above the crossing |
| **Operators table** | negation is unary, not a bond; a vocabulary without it can only accumulate | a compression vocabulary that cannot refuse cannot record what it lost |
| **Symbols table** | `R` is the aim and is always a slice; `R_T` measures the coarser description | the loss is measurable as a gap, not as an adjective |

Strained readings are named and re-censused below, not smoothed over.

---

## 3. Findings

### F1. "Compression achieved" is disqualified as a verdict (decisive re-grounding)

Fig 1 :24 to :27 names the frame-internal quantities that do not count:

> Fig 1 :25 *"coverage, and compression achieved"*
> Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
> Fig 1 :23 *"The ground enters as the only metric."*

The ordinary meaning of "efficient compression" is exactly the disqualified quantity: a system reports how many bits it saved and calls that efficiency. Fig 1 forbids that score. A frame produces its own compression ratio, so it cannot use the ratio to score itself. This does not ban compression ratios from the accounting. It moves them to the budget side. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

**Re-grounded verdict.** Efficiency is not a property of the description length alone. It is a ground-paid relation: the compressed description is cheaper *and* the system still ranges against a non-updating anchor at the slot. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

**Refuter.** If a frame can settle whether its compression helps by its own bits-saved score, with no ground reading, Fig 1 :25 to :27 is false and this finding falls.

### F2. The residual must stay per slot, or the where-to-look signal disappears

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*
Symbols table :43: *"R is measured per slot, never as a single global number."*

This is the first place where compression can go wrong without looking wrong. A global distortion average can be near zero while one object slot carries the entire failure. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*. A compressed representation that reports only a global reconstruction error has thrown away the only signal that says where to look. The world analogue is change blindness: a change is missed unless it produces a localizable transient at a specific retinal position (Kording-style change detection, see `09_watson_answer.md` WORLD). Fig 10 :25 names the same artifact in the channel: *"stale percepts, dropped transients, saturated metrics, pooled readings"*.

**Refuter.** If a global pooled readout locates the failing slot as well as a per-slot readout, after the same compression, Fig 1 :19 and :22 are false for this domain.

### F3. Compression crosses a membrane, and the trip must be measured

Fig 4 :27: *"The transform between scales loses information, and that is the point."*
Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
Fig 4 :31 and :32: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."*

The central move. A lossy transform between scales is not a defect to be repaired; it is what makes a result reapplicable. But the loss is only honest if the round trip is measured. Fig 4 :22: *"Only methods cross up. Only head starts come down."* Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

Applied here: compression supports cognition when what crosses is a re-applicable method, for example a filter or a regularity that can be used on the next input, and the gap `R_T` between the original signal and the compressed-then-reconstructed signal is measured. It distorts when what crosses is a recording of one occasion, or when the gap is never measured. A system that reports "the reconstruction looks fine" is navigating by dead reckoning. The world source on abstract interpretation (Cousot and Cousot) is the formal case where abstraction and concretisation are defined separately and the gap is the object of study.

**Refuter.** If a lossy transform across this membrane is shown to be reversible at the level in question, so `R_T = 0` at the slot, Fig 4 :27 to :32 do not govern it and the finding is withdrawn for that level.

### F4. The MDL bargain licenses compression, and one-occasion fit fails it

Fig 5 :42: *"The acceptance test is a bargain, not a threshold."*
Fig 5 :43 and :44: *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."*
Fig 5 :44: *"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."*
Fig 5 :45: *"This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."*

This is the second central move, and it resolves an apparent strain with F1. Compression length is admissible as one term of a bargain whose other term is leftover residual measured against the ground; it is inadmissible as the verdict itself. Fig 5 :48: *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."* Fig 5 :49: *"Machinery firing is not the milestone. A running system can mint and still return nothing new, which is exactly what the third guard exists to record."*

The compression that supports cognition is the one that shortens the description and leaves a smaller residual on the slots that matter. The compression that distorts is the one that shortens the description by fitting one occasion perfectly, which Fig 5 :44 refuses explicitly. The MDL world source gives the canonical coin example where the best-fitting biased coin is rejected because the single code does not pay for the hypothesis.

**Refuter.** If a term whose stated cost plus leftover is larger than the uncompressed residual is nevertheless retained and pays at the ground, Fig 5 :42 to :45 do not govern perceptual compression.

### F5. What compression drops cannot be recovered by more search in the same closure

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*
Fig 6 :22: *"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."*
Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 8 :32: *"no search, however long, adds an atom"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

If the thrown-away detail was an atom, no amount of re-reading the compressed description will bring it back. It needs an import from a frame whose closure differs, with a source gate and a shadow test, or a better instrument. Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* Fig 6 :34 and :35: *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."*

This is why systematic distortion is systematic rather than random. The error is not a noisy reading that averages out; it is a missing operand in the closure, so the system's own search is structurally unable to find it and will confidently report that nothing is there.

**Refuter.** If repeated search inside the same compressed closure recovers the dropped atom and pays at the ground, Fig 6 :21 and Fig 8 :32 are false for this domain.

### F6. The bond is what compression most often throws away

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
Fig 12 :46 and :47: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*
Fig 12 :14 to :16: *"the ingredients are recorded and the arrangement is not"*, *"nothing downstream can tell them apart,"*, *"and nothing signals that anything was lost"*
Fig 12 :94: *"The arrangement is the substance."*
Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

A perceptual compression that keeps the active feature list and drops the typed relation between features has recorded half of itself. Two percepts with the same features under a different bond are isomers: invisible in the compressed formula and decisive in behavior. The world source on color metamerism is the exact case: two different spectral power distributions produce one tristimulus reading, and the match fails when the illuminant, observer or field size changes. The world source on neural coding adds the rate-code case, where two spike sequences with the same mean rate are different strings.

The collapse is silent. Fig 12 :16: *"and nothing signals that anything was lost"*. That is the definition of systematic distortion: the representation looks complete by its own accounting.

**Refuter.** If a compressed description that retains only the ingredient set behaves identically to one that retains the typed bonds, on a task where the bond matters at the ground, Fig 12 :5 and :117 do not govern this domain.

### F7. Distortion is a channel failure reported as a verdict

Fig 10 :24: *"the ground does not decay, the channel does"*
Fig 10 :25 and :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*
Fig 10 :27 and :28: *"the output is not a verdict, it is you have lost touch"*
Fig 10 :29: *"→ keep the anchor reachable"*

A compressed percept can stop delivering a signal while the world it was reading stays exactly as it was. The failure is in the channel. The system's report then looks like a verdict and is not one. Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* A cheaper description that does not change contact with the ground is not an improvement in capability, however good its compression ratio.

World corroboration: change blindness experiments show that a major scene change is missed unless it produces a localizable transient. The compression here is not a metaphor; it is the measured dropped transient of Fig 10 :25.

**Refuter.** If a channel exhibiting dropped transients and pooled readings still delivers a ground-paid verdict at the affected slot, at the same rate as an intact channel, Fig 10 :24 to :28 do not govern this domain.

### F8. The error is coherent, so only an independent frame can see it

Fig 2 :33: *"The anchor must not update."*
Fig 2 :34: *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 7 :13: *"agreement compounds, evidence does not"*

A compressed frame is internally consistent. Its own readers will find it clear. Agreement inside it is the pool talking, not corroboration. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* For high-cost perception, for example clinical image reading or aviation display monitoring, the independent frame is not optional. Fig 8 :48 and :49: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."*

World corroboration from change blindness: detection improves when people work in teams and communicate, which is the shape of a second frame with separate contact. World corroboration from metamerism: the match fails under a different illuminant or a different observer, which is a second instrument ranging against the same thing.

**Refuter.** If two frames drawing on the same compressed source count as two independent witnesses for this question, Fig 2 :31, :40 and Fig 7 :13 are false.

### F9. Bits and actions are two currencies and do not add

Fig 12 :125: *"A composition costs in two currencies, and they do not add."*
Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*
Fig 12 :127: *"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."*
Fig 12 :129: *"Neither figure predicts the other, so both are read or the choice is made blind."*

A representation can be very cheap in bits and still unaffordable to settle. The budget decides how much of the space is reached. This is why a compression ratio cannot answer the question: it prices one currency and is silent on the other. A system holding only the bit accounting will propose arrangements it cannot afford to test. The world source on rate-distortion theory is explicit that the distortion measure is not given by the coding rate; it has to be modeled on what the receiver needs, and this remains an open problem in image and video compression.

**Refuter.** If a single scalar can price both the description and the actions needed to settle it, with no loss of information, Fig 12 :125 to :129 do not govern this domain.

### F10. No standing list of what to compress survives a change of residual

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
Fig 11 :51: *"No standing list of good actors survives a change of residual."*
Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."*
Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*

There is no general answer of the form "compress color but keep edges." Which feature is load bearing depends on the current residual and the ground that pays it. The same feature is redundant for one task and decisive for another. A compression vocabulary that lacks refusal can only accumulate; it cannot record that a held compression is now wrong. Fig 10 :72: *"When the question changes, the room should change."*

**Refuter.** If a fixed feature list can be shown to be optimal across all residuals in a given modality, with the same ground paying every slot, Fig 11 :49 and :51 do not govern that modality.

### F11. Two strains, one re-census and one withdrawal

**Strain S1, dissolved by re-census.** Fig 1 :25 disqualifies compression as a self-score; Fig 5 :45 uses description length inside the MDL bargain. These look contradictory. Re-census: Fig 1 governs a quantity used as a *metric*, where the frame both produces and scores it. Fig 5 governs the same quantity as a *cost term* in a bargain whose other term is leftover residual paid by the ground. Different roles, different objects, no contradiction. This is the canonical re-census rule: a reading that makes figures contradict one another has misidentified its domain.

**Strain S2, withdrawn.** Fig 13 :74 and :75 (*"Everything else is a composition across the two kinds, never within one."* and *"Two states never bond directly..."*) were tried on perceptual atoms in the first pass. They strain: the six terms are a physical substrate claim and a perceptual feature is not a state of space, time or energy. This solution follows the earlier INF re-census and withdraws the literal mapping. Only Fig 13 :29 (*"A state with no structure has no magnitude..."*) and Fig 13 :32 (*"the detail a crossing discards reappears above it as noise."*) are used, and only as general structural statements about any representation with states and structures. The withdrawal stays visible here.

---

## 4. Pre-registered refuter

Required before the conclusion and before outreach. The shape claim is refuted if any of the following holds:

1. A frame can settle whether its compression helps using only its own bits-saved score, with no ground reading (breaks Fig 1 :25 to :27).
2. A global pooled readout locates the failing slot as well as a per-slot readout after the same compression (breaks Fig 1 :19, :22 and Symbols :43).
3. A lossy transform across the perceptual membrane is reversible at the slot, so `R_T = 0` and the round trip holds nothing (breaks Fig 4 :27 to :32).
4. A compressed representation that keeps the ingredient set but drops the typed bonds behaves identically to one that keeps both, on a task where the bond matters at the ground (breaks Fig 12 :5, :94 and :117).
5. Repeated search inside the same compressed closure recovers a dropped atom and pays at the ground (breaks Fig 6 :21, Fig 8 :32).
6. A channel with dropped transients and pooled readings still delivers a ground-paid verdict at the affected slot at the same rate as an intact channel (breaks Fig 10 :24 to :28).
7. Two frames drawing on the same compressed source count as independent witnesses (breaks Fig 2 :31, :40 and Fig 7 :13).

If any fires, the separator as written is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Stop scoring compression by compression ratio. Record the ratio as a budget filter and measure the ground-paid residual per slot as the witness (F1, F2).
2. Measure the round trip. Report `R_T` as the honest account of what the coarser description cannot hold, not as an error to be driven to zero (F3).
3. Require the MDL bargain: description cost plus leftover must be less than the uncompressed residual, and a one-occasion fit does not count (F4).
4. Track which atoms the compression removed. If an atom was removed, an import or a better instrument is owed; more search in the same frame is not (F5).
5. Keep the typed bonds in the accounting. If a feature list is kept without its relations, label that as a known loss, not as a representation (F6).
6. Treat a missing transient as a channel failure, not a verdict (F7), and buy an independent frame in proportion to the cost of being wrong (F8).
7. Price bits and actions separately (F9), and refuse any standing "compress this, keep that" list (F10).
8. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Offer the separator and its refuter, not a claim that a particular compression scheme is the answer.

---

## 6. Canonical usage check

Two sources were read after sections 0 to 5 and govern how the figures may be used.

- The canonical figures README: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also states the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit that the framework says what a missing thing would have to look like, *"a shape, not a name"*, then stops at the instruments and records the lineage. *"Indiscernibility is not identity."*
- `60_FIGURES_AS_METALAWS.md`: the figures are metalaws for design questions, so the boundary is derived rather than escalated to an authority. A disagreement between two figure readings sends the reader back to the domain census.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Efficient means a high compression ratio" | **Refused.** Fig 1 :25 to :27 disqualifies the self-produced score; the ratio survives only as a budget filter (Fig 9 :60). |
| "The round-trip gap is an error to eliminate" | **Refused.** Fig 4 :31 and :32 call it the only honest report of what was given up. |
| "Fig 1 versus Fig 5 MDL is a contradiction" | **Dissolved by re-census S1.** Metric versus cost term in a ground-paid bargain. |
| "Fig 13 six-term substrate applies to perceptual features" | **Withdrawn and preserved as S2.** The physical six-term set does not map onto perceptual atoms; only the general state/structure and noise claims are used. |
| "shape, not a name forbids naming any compression scheme" | **Narrowed.** Canonical usage applies the phrase to a missing primitive. Naming a scheme already in the library is a binding from the neuroscience frame with provenance owed, not a forbidden invention. |
| "distortion is just inefficient compression" | **Refused.** They have different anchors and are a union, not a scalar trade (Fig 9 :55 to :57). |
| "global reconstruction error is enough to report perceptual quality" | **Refused at record level.** Fig 1 :19, :22 and :28 require per-slot indexing; a pooled average hides the live slot. |
| "agreement among readers that the percept looks clear is evidence" | **Refused.** Fig 2 :40 and Fig 7 :13: a shared evidence pool is one witness talking. |
| "this audit settles the question" | **Refused.** Simulated derivation, not a ground reading; see the standing note at the top. |

### Round trip of this audit

Abstraction from the figures to this folder yields: keep the residue per slot, measure `R_T`, price both currencies, refuse a standing list. Concretisation back onto a real perceptual experiment would require choosing a slot definition, a reconstruction, a ground, a bond taxonomy and an action budget. Those choices are imports from the experimental frame and are not supplied by the figures. The gap between the shorthand and the experiment is nonzero and is recorded rather than hidden; see `11_audit.md` section 4.

### Final state

Verdict: `specified` on the five separators, `general` on the structural shape, not `grounded`. One union compound, five domains with nameable anchors, ten findings, two strains handled (one re-census, one withdrawal), seven pre-registered refuters. No figure line returns a universal compression ratio, a particular coding scheme or a feature list; that absence is a `gap` of the shape-not-a-name kind, reported as unreached rather than silence (Fig 9 :32, Fig 13 :134).
