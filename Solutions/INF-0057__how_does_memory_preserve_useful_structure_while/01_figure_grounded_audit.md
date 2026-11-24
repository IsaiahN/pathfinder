# Figure-grounded audit: how memory preserves useful structure while discarding irrelevant detail

**Mode of this document: `specified`, with one `general` structural claim.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No measurement of a memory system is claimed here, so nothing below is `grounded`.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The verbatim extract `FRAMEWORK/reference/03-FIGURES_TEXT.md` (all `Fig N :line` citations), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, and the world sources opened 2026-11-23 and listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

A memory system faces two demands that pull against each other. It must **keep** the part of an experience that lets a later act, inference or retrieval succeed, and it must **drop** the part that would not change that later success. Call the first the kept structure and the second the discarded detail. The question is not "how much is stored" but **what decides the cut**, and what shape the resulting memory must have so that the kept part is still usable when it is needed later.

Three effects make this a genuine residual:

1. **Loss is unavoidable and non-invertible.** The map from a full episode to a stored trace is many-to-one. Replaying the trace cannot reconstruct the episode. That is a property of any compression, not a defect of a particular memory.
2. **"Useful" is a relation, not a property of the trace.** Something is useful **for** a later task, a relevance variable external to the memory's own account of itself. A frame cannot score its own economy: Fig 1 :26-27, *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
3. **The kept part must compose.** A memory that stores only an item list can say what a situation contained; it cannot say what would follow from it. Fig 12 :113: *"A vocabulary without bonds can name a state and cannot name a route to one."*

So the residual is: **what is the shape of the cut, and what is the anchor that makes the cut non-circular?** A candidate answer must name an anchor that does not move when the memory's frame changes its mind (Fig 2 :29), and it must say what survives the cut in composable form (Fig 5 :70).

---

## 1. Domain census

### 1.1 The residual R by arity, symmetry and scale

- **Arity:** at least two, in fact three operands. Kept structure, discarded detail, and a relevance variable Y that decides which is which. The question is relational: usefulness is not carried by the trace alone.
- **Symmetry:** strongly asymmetric. Many episodes map to one structure; the map cannot be reversed. The cut is an abstraction, not a permutation. Fig 4 :21: *"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."*
- **Scale:** the residual crosses scales. One episode at the lower scale becomes a structural term at the higher scale, and that term can then serve as an operand for the next episode. Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."*

### 1.2 One line per domain (actors, currency, anchor)

**Domain 1, the coding and compression frame (information theory).** Actors: a source X, a compact representation T, a relevance variable Y. Currency: bits and mutual information, priced by a distortion measure. Anchor: the joint statistics p(x,y) and a ground-defined task. This is a nameable anchor, so this is a domain. Triangulated across the information bottleneck and rate-distortion literature.

**Domain 2, the memory-systems frame (cognitive science and neuroscience).** Actors: a fast, pattern-separated system for specific events and a slow, overlapping system for structure across events. Currency: synaptic change and consolidation. Anchor: behavioural recall, inference and lesion evidence. Nameable anchor, so this is a domain. The two-system literature is itself a union, not one mechanism.

**Domain 3, the framework-internal compositional frame (Tether).** Actors: atoms, typed bonds, molecules, the library Γ, and the ground. Currency: composition inside closure(Γ) followed by settlement against the ground. Anchor: the ground, *"whatever settles the question and does not change its answer because of what any frame thinks"* (Fig 2 :29). Nameable anchor, so this is a domain.

**Domain 4, the verification and outreach frame.** Actors: expert readers. Currency: agreement and residuals. Anchor: the ground, never agreement. In this simulated run all four domains draw on one evidence pool, so the independence of this domain is zero and its agreement is not a witness (Fig 2 :40).

### 1.3 Partition or union

This is a **union compound, not a partition**. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either."* "Preserve useful structure" and "discard irrelevant detail" are two conditions with a nonempty intersection. A single lever that only clears the detail condition leaves the structure condition bound, and the residue becomes *"finally describable"* only after both are named (Fig 9 :59). A general-purpose "compression" answer that ignores the bond structure is a lever aimed at one condition.

### 1.4 Dependency order (Fig 3)

1. **Perception:** encode the episode and tell it apart from what preceded it.
2. **Vocabulary:** have terms for what a trace affords, what can be reused, what can be composed.
3. **Objective:** say what would count as useful, in the system's own terms. This is the relevance variable.
4. **Planning:** choose which detail to keep and which to drop.
5. **Learn and carry:** name what worked, verify it, carry it to the next episode.

Fig 3 :25-27 names the likely break: *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments"*; and *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The usefulness criterion (link 3) is the least instrumented link in memory research, which is why the question stays open. Effort spent optimising storage capacity (link 1 or 2) cannot rescue a missing criterion.

### 1.5 Figure census (bearing and verdict before conclusion)

| figure | bearing on this residual | verdict after census |
|---|---|---|
| **1 The Agent** | frame-internal quantities disqualified; residual indexed per slot | governs the anchor and the per-slot cut |
| **2 The Ground** | anchor must not update; agreement from one pool is worth nothing | governs "useful" as a ground relation |
| **3 Dependency Chain** | objective is the least instrumented link | governs dependency order |
| **4 The Membrane** | lossy cross-scale transform, methods up, head starts down | **primary governs the cut** |
| **5 Mint Pipeline** | MDL bargain: stating the term plus what is left costs less | **primary governs retention** |
| **6 Closure / Reachability** | import moves the wall; instruments improved from worse ones | governs what a memory cannot hold |
| **7 Room Chain** | a chain of agreeing rooms is one long room | governs verification only |
| **8 Union Surplus** | provenance separates convergent derivation from adopted import | governs the two-system union |
| **9 Leave / Arrive** | union vs partition; describe the residual first | governs the unbundling |
| **10 Ground Maintainer** | bring a characterised residual; verifier non-access | governs outreach only |
| **11 The Habitat** | capability is agent-and-habitat; contact, not isolated improvement | governs the relevance variable as contact |
| **12 The Bond** | bond carries structure the operands do not; isomer, catalyst, settled molecule | **primary governs what is kept** |
| **13 Minimum Viable Set** | discarded detail reappears above as noise | governs the noise side effect |
| **Symbols table** | `T_A`, `T_E`, `R_T` give the transform and its round-trip gap | notates the cut |
| **Operators table** | seven bonds and their tests name the possible kept relations | names the structure vocabulary |

Strained readings are named as such in §2, not smoothed over.

---

## 2. Findings

### F1: Memory is a lossy cross-scale transform; discarding detail is the condition of reuse

Fig 4 :27: **"The transform between scales loses information, and that is the point."**

Fig 4 :28: **"Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent."**

Symbols table: **"Abstraction. Detail is thrown away, which is what makes the result reusable."**

The framework does not treat information loss as damage to be repaired. It is what buys reusability. A memory that kept every detail of every occasion would be a recording, and a recording is not portable. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

**Mode:** `general` for the structural claim that any cross-scale memory must lose information; `specified` for the claim that this is what the "discarding detail" half of the question is.

**Status:** triangulated across two figures with low overlap (Fig 4 governs the membrane rule; the Symbols table governs the notation `T_A`), plus a world source from information theory that independently arrives at the same tradeoff.

**Refuter:** a demonstration of a cross-scale memory that is both perfectly reversible and genuinely reusable, with no loss on the upward trip. Under Fig 4 :28 that combination is excluded; showing it would break this finding.

### F2: What is preserved is the bond, not the ingredient list

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :46: **"A bond is the typed relation between two operands."**

Fig 12 :47: **"A recipe that names only its ingredients has recorded half of itself."**

Fig 12 :94: **"The arrangement is the substance."**

Fig 12 :113: *"A vocabulary without bonds can name a state and cannot name a route to one."*

This is the framework's sharpest answer to "useful structure." The useful part of an episode is not the list of things that were present, it is the typed relations among them, because the relations are what let a later situation be recognised as the same kind of thing and let a route to an outcome be stated. A memory that stores facts without relations has stored half of itself. The bond is priced by what it could have been (Fig 12 :99, *"A bond costs what it could have been."*), so keeping a relation is not free and the cut must be selective even among relations.

**Mode:** `specified`, figure-derived, not grounded.

**Status:** single-source within the figures (Fig 12 is the only figure that defines the bond), corroborated from a low-overlap field by the information bottleneck's insistence that a good code must specify *"which features of X play a role in the prediction"* (Tishby, Pereira and Bialek, 2000). The corroboration is from a different evidence pool, so it is weak support rather than a second figure.

**Refuter:** show a case where a memory supports later inference and generalisation while carrying no typed relation among its items, only an unordered bag of ingredients, and where that bag is not merely a compressed encoding of a bond. Under Fig 12 :94 that case cannot be the same substance, so finding it would break the finding.

### F3: Retention is an MDL bargain, not a threshold

Fig 5 :42: **"The acceptance test is a bargain, not a threshold."**

Fig 5 :43: **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

Fig 5 :45: **"This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."**

This is the selection rule the question asks for. A detail is worth keeping when the cost of stating it, plus what remains unexplained after it, is less than what was unexplained before. The two failure cases named by the figure are exactly the two failure modes of memory: a memory that explains everything by saying nothing (a vacuous summary), and a memory that explains one occasion perfectly (an unreplayable recording). Fig 4 :23 reinforces the direction: *"upward: a method that can be reapplied. Never the recording of a particular success."*

**Mode:** `specified`, figure-derived.

**Status:** triangulated across two figures with low overlap (Fig 5 governs when a term is worth having; Fig 12 :102 applies the same bargain one level in to the relation itself), and corroborated from the mathematics of rate distortion, which defines the quality of a representation by a distortion measure rather than by a raw bit count (Cover and Thomas, 2006).

**Refuter:** show a memory system whose retention rule is a fixed threshold on detail count or storage capacity, with no dependence on what remains unexplained, and which nevertheless generalises to novel cases. Under Fig 5 :43 that system should fail on one occasion or say nothing, so its success would break the finding.

### F4: "Useful" must be anchored outside the memory's own frame

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 1 :26-27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

A memory cannot decide what is useful by asking how much it has stored, how many items it holds, or how coherent its own trace is. Those are quantities the frame produces, and Fig 1 disqualifies them. Usefulness is settled by contact with something the memory does not control: a later retrieval, an inference, an action, a task outcome. This is why the relevance variable in the information bottleneck formulation is a second variable Y rather than a property of the code alone, and why the two-system memory literature anchors consolidation in behavioural evidence.

**Mode:** `general` for the anchor requirement, `specified` for the claim that the relevance variable plays that role here.

**Status:** triangulated across Fig 1 (disqualification of frame-internal quantities) and Fig 2 (anchor definition), with world corroboration from both information theory and memory systems research.

**Refuter:** exhibit a memory system that stably improves its later performance while its contact with any outcome, task or relevance variable is unchanged, and whose own internal bookkeeping is the only thing that changed. Fig 11 :40 says that cannot be an improvement, so a verified case would break the finding.

### F5: The residual must be kept per slot, not averaged away

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

A global measure of "how much detail was discarded" throws away the only signal that says **where** the memory is failing. A memory that reports an average reconstruction error cannot tell which relation is still live and needs another instrument. This constrains the shape of the answer: the cut must be described per slot, per relation, per object, not as a single compression ratio.

**Mode:** `specified`, figure-derived.

**Status:** single-source (Fig 1), with the per-object emphasis echoed in the per-slot structure of the residual in `THE_FORMULA.md` step 1. Not triangulated across two independent figures.

**Refuter:** show a memory system whose only available error signal is a global scalar, and which can still locate the specific relation responsible for a failure without any additional instrument. Under Fig 1 :22 that would be impossible, so a working case breaks the finding.

### F6: Settled structure becomes the vocabulary for the next episode

Fig 12 :104: **"Composition is recursive, and the level decides what is irreducible."**

Fig 12 :104 also: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"**

Fig 5 :69: **"settling is necessary for a term to be composed over, and it is not sufficient."**

Fig 5 :70: **"A term is settled when the ground pays for it. A term is usable when something can compose over it."**

The structure kept from an episode does not merely sit in a store. Once the ground pays for it, it becomes an atom at the next level, which is how a small structural vocabulary supports unbounded later use. Two conditions are distinguished and must not be collapsed: a term can be settled by the ground and still be unusable because nothing can compose over it. A library that grows is not a reach that grows. So "preserve useful structure" means preserve structure that is both settled and composable, not merely structure that was once confirmed.

**Mode:** `specified`, figure-derived.

**Status:** triangulated across Fig 12 (level recursion) and Fig 5 (settling versus usability), two figures with different subjects.

**Refuter:** show a term that is settled against the ground and composable by the system's own operators, yet cannot serve as an operand for a later episode. That would break the recursion Fig 12 :104 states.

### F7: The round-trip gap is the honest report of what was given up

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Fig 4 :31: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

Symbols table: **"The gap between what was sent up and what came back down"** (`R_T`).

Fig 13 :32: **"because each turn leaves a remainder (the residual) that re-enters the next, it is also where the randomness comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."**

The detail thrown away does not vanish from the accounting. It returns as noise at the level above, and the round-trip gap `R_T` is what measures it. So a memory's distortion is not an embarrassment to be hidden: it is the measurement of what the compact description cannot hold, and it is checkable. This is the figure-grounded reason to report what a memory forgets, not only what it recalls.

**Mode:** `general` for the requirement to measure the gap, `specified` for the identification of discarded detail with the noise term.

**Status:** triangulated across Fig 4 (round trip) and Fig 13 (discarded detail returning as noise), with the Symbols table providing the notation. Corroborated from information theory and signal coding: rate distortion quantifies exactly this tradeoff.

**Refuter:** exhibit a cross-scale memory whose coarser description loses information but whose round trip returns exactly what was sent, for every input, and where the discarded detail never appears as noise anywhere. That would set `R_T` to zero and break the finding.

### F8: The question is a union compound and must be unbundled before it is searched

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

Fig 9 :57: **"a case in two conditions is not a harder case of either."**

The two halves of the question have different anchors. "Discard irrelevant detail" is anchored by a distortion measure and a resource budget. "Preserve useful structure" is anchored by a relevance variable and the composability of what survives. They are not one harder optimisation problem. A single lever, for example minimising reconstruction error, clears the region where only the detail condition holds and leaves the structure condition standing. This is why a pure rate-distortion answer and a pure "semantic memory" answer each look right from inside their own frame and neither closes the residual.

**Mode:** `specified`, figure-derived.

**Status:** triangulated across Fig 9 (union handling) and Fig 3 (dependency order), corroborated by the two-system memory literature, which is itself a union of fast episodic capture and slow structural extraction.

**Refuter:** show that a single scalar objective, with no second relevance variable and no bond structure, simultaneously maximises detail discard and structure preservation on a task battery where both are independently measured. That would collapse the union into a partition and break the finding.

### F9: What actually survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| Any cross-scale memory is lossy; loss buys reuse | `general` | Fig 4 :27-28, Symbols `T_A` | triangulated |
| The preserved part is the typed relation, not the item list | `specific` | Fig 12 :5, :46, :94 | single-source, world-corroborated |
| Retention follows an MDL bargain, not a fixed threshold | `specified` | Fig 5 :42-45, Fig 12 :102 | triangulated |
| "Useful" is settled by a ground external to the memory's frame | `general` | Fig 2 :29, Fig 1 :26-27, Fig 11 :40 | triangulated |
| The cut must be described per slot, not averaged | `specified` | Fig 1 :19, :22 | single-source |
| Kept structure becomes an atom for the next episode once settled | `specified` | Fig 12 :104, Fig 5 :69-70 | triangulated |
| Discarded detail returns as noise; `R_T` measures the gap | `specified` | Fig 4 :30-32, Fig 13 :32 | triangulated |
| The two halves are a union compound | `specified` | Fig 9 :54, :57 | triangulated |
| The specific neural implementation (which region, which synapse) | not claimed | no figure line governs it | gap, deliberately unfilled |

---

## 3. Pre-registered refuter

Written before the conclusion and before any outreach, per the standing rule at `THE_SEAT_MAP_Field_Guide_amended.md` :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A cross-scale memory is demonstrated that is both perfectly reversible and genuinely reusable, with no loss on the upward trip (breaks F1).
2. A memory is demonstrated that supports inference and generalisation while carrying only unordered item lists and no typed relations, where the list is not merely a compressed encoding of a bond (breaks F2).
3. A memory system is shown whose retention is a fixed capacity or count threshold, independent of what remains unexplained, and which still generalises to novel cases (breaks F3).
4. A memory system improves its later performance while its contact with every task, outcome and relevance variable is unchanged, with only internal bookkeeping changing (breaks F4).
5. A figure re-census admits a reader that can certify the completeness of its own frame (breaks the anchor requirement and Fig 8's metaframe limit).

If any fires, the corresponding claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the shape and the refuter, not with a neural story. The figures govern the shape, not the anatomy.
2. Keep the union unbundled: report the detail-discard criterion and the structure-preservation criterion separately, each with its own anchor (F8).
3. Report `R_T`, not just what was recalled. The honest artifact is the gap, because it is the only report of what was given up (F7).
4. Do not name a brain region as the answer. The two-system literature is a world-source corroboration of the union, not a figure-derived binding.
5. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Offer the generator (the cut rule and its refuter), not a list of remembered occasions.

---

## 5. Canonical usage check and retraction / confirmation log

Two sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments can no longer distinguish, recording the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the mode rule, and the direction limit, that a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."*

### My own readings corrected during this run

| earlier reading in this derivation | status after re-census |
|---|---|
| First pass read "discarding irrelevant detail" as pure rate distortion: keep high-probability signals, drop low-probability ones. | **Retracted at the figure level.** Rate distortion governs the budget side. Fig 12 :5 and :94 govern what is kept, and the unit is the bond, not the scalar signal. The pure rate-distortion reading strained because it could not say what "useful structure" is. Re-census moved it to F2. |
| First pass treated the question as one optimisation problem with a single objective. | **Retracted.** Fig 9 :54 and :57 make it a union compound. Kept as F8 with its own anchor. |
| I initially used the phrase "the brain compresses" as if the framework named a mechanism. | **Retracted.** No figure line governs neural anatomy. The brain claim is demoted to world-source corroboration only and is marked `specified` in `09_watson_answer.md`. |
| Apparent conflict: Barlow (2001) says the original redundancy-reduction hypothesis was *"wrong in over-emphasizing the role of compressive coding and economy in neuron numbers."* | **Recorded as a world-source conflict, not a verdict flip.** Re-census: Fig 5's MDL bargain is about model selection and what remains unexplained, not about economy of neural impulses. Different quantities, so the figures are not strained. This sent me back to the census and sharpened F3. |
| Apparent conflict: two-system memory research seems to say the cortex extracts structure slowly, which sounds like "compression is good." | **Not strained.** The two-system result is a union of conditions (fast separation plus slow integration), matching F8, not a claim that one objective does both. |

### Confirmations

- F1 and Symbols `T_A` confirmed the lossy-transform reading with no strain.
- F7 confirmed by Fig 13 :32, which independently states that discarded detail reappears as noise. Two figures with different subjects, so low overlap.
- Fig 2 :29 and Fig 1 :26-27 confirmed the anchor requirement from two directions: the anchor does not update, and frame-internal quantities are disqualified.
- The shape-not-a-name limit is confirmed by the canonical README and applies here: the framework returns the shape of the cut, not the name of a synapse, region or algorithm.

### Strain after re-census

One live strain, named and not hidden: the figures price a term in **bits** and in **actions** as two currencies that do not add (Fig 12 :125-127). This solution reports the selection rule in bits and the settlement rule in actions but does not sum them. Any future formalisation that merges them into one score would be the dead-reckoning error Fig 4 :30 names.
