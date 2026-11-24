# Figure-grounded audit: is information content observer-dependent or objective?

**Mode of this document: `specified` on the claims, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (read 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure quotes are from `FRAMEWORK\reference\03-FIGURES_TEXT.md`, opened this session. Framework rule from `FRAMEWORK\reference\FIGURES_README_canonical.md` and `FRAMEWORK\figures\THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and were fetched this session.

---

## 0. The residual, stated in effect terms

The question is: is the information content of a physical system observer-dependent, or can it be specified objectively?

Stated as an effect, not a definition. Given a physical system S, a candidate quantity I(S), and a frame F that can change its coarse-graining, its probability assignment, its measurement context, its pose and its interpreter, what happens to the value of I when F changes?

- **Option A (observer-dependent).** I changes with F. Consequence: no frame-free value is available, and whatever would settle I is itself a frame that can move. The anchor updates when pushed.
- **Option B (objectively specifiable).** I is invariant under changes of F. Consequence: I must be fixed by something that does not move when a frame changes its mind, and the choice of coarse-graining must be accounted for without an observer's preference doing the work.

**What an answer would look like, bound before the run (formula step "Direction"):** an ordinary term of the form *I is invariant across independent frames ranging against one unmoving ground, the frame-indexed residue is a coordinate choice (pose and abstraction) and not a second ground, and any candidate notion must state its pose, its coarse-graining and its ground separately.* This is bound now so it can be refused by the same test as everything else. A frame cannot check the direction of its own question otherwise.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry and scale

- **Arity.** The term "information content" is at least ternary in every formalisation read this session: system state, a probability distribution or partition supplied by a frame, and a question or interpreter. Shannon entropy is a function of an assigned distribution; von Neumann entropy depends on the subsystem algebra; Kolmogorov complexity is relative to a reference universal machine (SEP, *Information*); semantic information adds an interpreting agent (SEP, *Semantic Conceptions of Information*). A binary "observer versus system" question is already under-specified.
- **Symmetry.** Mutual information is symmetric between two systems, but entropy and semantic content are not symmetric between system and observer. The frame transform F is directional: Symbols table :82 "Cannot be run without a pose." So the relation is not symmetric and cannot be treated as a single undirected quantity.
- **Scale.** The same question appears at the micro stratum (fine-grained, quantum, context dependent) and the macro stratum (coarse-grained, thermodynamic, erasure cost). The abstraction T_A between them is lossy (Fig 4 :27-32), so the value at one scale is not the value at the other.

### One line per domain: actors, currency, anchor

A domain needs a nameable anchor. Where none is nameable, it is not a domain yet and must be split off.

| # | domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|---|
| D1 | Physical and thermodynamic | system, microstates, macrostates, coarse-graining, memory register, heat bath, measuring device | bits, entropy, work (kT ln 2) | experiment: erasure cost and measurement outcome | yes |
| D2 | Frame and pose (observation) | observer, measurement context, coarse-graining, assigned distribution, pose, interpreter, reference machine | mutual information, conditional entropy, description length | **not the observer's judgment**; the ground of D1, which does not move when a frame thinks (Fig 2 :29-30) | yes, as a frame, not as an anchor |
| D3 | Semantic and interpretive | interpreter, code, meaning, truthfulness | semantic content | contested: no instrument read this session settles "meaning" the way a calorimeter settles erasure cost | **not yet** |
| D4 | Framework-internal | Γ, R, slots s, frame transform F, T_A and T_E, ground | residual, cost | the ground: Symbols table :104-106 "It is not a frame and has no vantage to update from." | yes |

D3 is not a domain for this question yet. It is a bundled condition and must be unbundled rather than searched (Fig 9 :54-58): "And when the split lands on a union rather than a partition, unbundle before you search again."

### Partition or union

**Union.** The question binds a physical ground question (D1), a frame-transform question (D2), and a semantic question (D3) under one "or". Fig 9 :57-58: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Attempting one verdict for the bundle is the named failure.

### Order by dependency (Fig 3)

1. Settle what the ground decides in D1 (erasure cost, measurement outcome). Fig 3 :19-20: "Optimising a link that already works cannot rescue one that does not. The chain is ordered by dependency, not by importance."
2. Then apply the frame transform F at one scale (D2), because F "Cannot be run without a pose" (Symbols :82).
3. Then the cross-scale abstraction T_A and its gap R_T (D4), because going up "throws away detail" (Fig 4 :28).
4. Then the semantic add-on (D3). A reading of D3 before D1 is a reading below the break: Fig 3 :22-23 "A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."

---

## 2. Figure census (quoted verbatim before concluding)

Every quotation below is an exact substring of `03-FIGURES_TEXT.md`. Strained readings are named, not smoothed over.

### F1. The observer cannot be the anchor for a question about a physical system

Fig 2 :29-30: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :33: **"The anchor must not update."**
Fig 2 :36: **"An anchor is legitimate when the question is constitutively about it."**
Fig 2 :37-38: **"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."**
Symbols table :104-106: **"It is not a frame and has no vantage to update from. Not in the library; the loop cannot modify it."**

The question is constitutively about a physical system, so the ground is a physical instrument, not an observer's assignment. An observer's probability assignment is an instrument that can be wrong on axes it does not measure. If the observer is promoted to the anchor, the anchor moves when pushed, which is Fig 2 panel 1: Fig 2 :34 "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

**Verdict: `triangulated`** (Fig 2 alignment diagram and Symbols table definition, low overlap between an argument about frames and a notation entry). Applies to D1 and D2.

### F2. Frame dependence is a pose, not a second ground

Symbols table :79-82: **"The map between allocentric and egocentric at one scale. Distinct from T_A and T_E, which run between scales. Cannot be run without a pose."**
Symbols table :111-112: **"A frame is any bounded system with a library: an agent, a person, a discipline, a model. It is a theory with a signature rather than a coordinate system, so frames differ in what they can express and not in how they label it."**
Fig 4 :19-20: **"Only the actors, the currency and the anchor change."**

The change of observer is a change of pose inside one scale (F), not a change of ground and not a change of library signature. A frame's ignorance is a fact about what it can express. This is the harmless sense of observer dependence.

**Verdict: `triangulated`** (Symbols table and Fig 4 kernel rule). Applies to D2.

### F3. The cross-scale residue is a gap, not an error

Fig 4 :27: **"The transform between scales loses information, and that is the point."**
Fig 4 :28-29: **"Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent."**
Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

Coarse-graining is an abstraction. The information content at the coarse level is a derivative of what the abstraction dropped. The round trip gap R_T is the honest report of that loss. This is where a genuine, irreducible observer-indexed residue lives, and it is *not* a defect in objectivity: it is a coordinate choice with a measured cost.

**Verdict: `triangulated`** (Fig 4 and THE_FORMULA step 6, which names R_T). Applies to D4 and D1.

### F4. Objectivity is convergence of independent frames, not a view from nowhere

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence."**
Fig 2 :39: **"Correlation has valence."**
Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 8 :47: **"Independence is one quantity read twice."**
Fig 8 :50: **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."**
Fig 8 :51-52: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."**
Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

This is the constructive half of the answer. The framework's meaning of "objectively specifiable" is not "no observer ever looked". It is: frames that draw on different evidence, ranging separately against the same unmoving ground, converge on the same value. Two observers sharing one code, one prior and one coarse-graining are one frame wearing two names, so their agreement is the pool talking, not corroboration (Fig 2 :18-21). A view from nowhere would be a final room, which Fig 7 :6 rules out.

**Verdict: `triangulated`** (Fig 2 on alignment and Fig 8 on union surplus, low overlap). Applies to D1, D2 and D4.

### F5. The residual is per-slot and a frame cannot score itself

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :27: **"A frame cannot score itself with a quantity it also produces."**
Symbols table :38-40: **"It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."**

An information content that a frame assigns to itself or to its own library is frame-internal and disqualified. The live quantity is per slot, and what a frame cannot yet perceive is residual, not zero.

**Verdict: `single-source`** for the per-slot rule (Fig 1), with the "always a slice" clause from the Symbols table as a weak second witness. Applies to D2 and D4.

### F6. The question is a union compound and must be unbundled

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57-58: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

The forced "or" is a filter on the answer shape, not a witness for either side. Searching for one verdict over the bundle manufactures a false dichotomy.

**Verdict: `single-source`** (Fig 9), corroborated by Fig 3's dependency order. Applies to the whole question.

### F7. The framework's own "information content" is frame-indexed, but bounded

Fig 12 :99: **"A bond costs what it could have been, and nothing more."**
Operators table :66: **"A bond that costs nothing is a bond that carries nothing, which is the flat case."**
Fig 13 :43-44: **"A continuum was the seventh and was removed for failing exactly this: it is a spectrum without gaps, or smoothness over space and time."**
Fig 13 :113-114: **"More compositions never add a member, and no chain reaches outside what the six and their bonds already span."**

The framework prices a term by the size of the atom and bond vocabularies available to the frame. So "information content" inside the framework is relative to Γ. But the vocabulary at the substrate is not an observer's free choice: Fig 13 argues the six are minimal and closed, and the seventh was removed. This gives a bounded objectivity: invariance under *arrangement* inside a fixed, minimal, cross-kind substrate, not invariance under a change of primitive set.

**Verdict: `triangulated`** across Fig 12, Operators table and Fig 13 for the rule. The *application* of the rule to physical information content is a binding from the physics frame, not a derivation. Strain declared in section 4.

### F8. The framework returns a shape, not a name

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134-135: **"It cannot say which primitive is missing, because naming it would mean already holding it."**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**

So the deliverable is the shape any candidate answer must have: state the pose, state the abstraction, name the ground, and refuse the promotion of the observer to an anchor. The framework cannot name which of its six terms physical information "is".

**Verdict: `triangulated`** (Fig 9, Fig 13, and the canonical figures README, which says "a shape, not a name"). Applies to D3 and D4.

---

## 3. Findings per domain, kept separate (never averaged)

| domain | verdict | mode | status | one line |
|---|---|---|---|---|
| D1 physical and thermodynamic | The ground is an instrument, not an observer. Objectivity is convergence of independent instruments on an unmoving ground. | `specified` | `triangulated` | F1, F4, F3 |
| D2 frame and pose | Observer indexing is a pose transform at one scale, not a second ground. It is real and harmless. | `general` | `triangulated` | F2, F1, F5 |
| D3 semantic and interpretive | No nameable non-updating anchor was found for "meaning" in this question. The figures do not close it. | `general` | `gap` | F8, F6 |
| D4 framework-internal | The union split and the shape constraints are derived; the binding of information content to one of the six terms is not. | `specified` for the shape, `single-source` for the binding | triangulated / single-source | F3, F5, F7, F8 |

**D3 is a `gap`, and that is a verdict, not a silence.** Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 13 :134: "Unreachable is a verdict here, not a silence." The claim is only that *at this budget and from these figures* the semantic sub-question has no nameable anchor. It is not a claim that semantic information is impossible, nor that no future instrument could supply an anchor.

---

## 4. Strain test and re-census

**Apparent strain 1:** the framework says R is "always a slice" and indexed by slot (F5), yet says the ground is frame-independent (F1). Re-census: R is the error signal *inside* a frame (Symbols :36-40); the ground is outside the library and does not update (Symbols :104-106). Different objects. The apparent contradiction came from treating an error signal as an anchor. No strain after re-census.

**Apparent strain 2:** "objective" could be read as "no frame at all". That would be a terminal room, which Fig 7 :6 ("the limit: no last room") forbids. Re-census: the framework's positive account of objectivity is convergence across independent frames (F4), not absence of frames. Category error resolved.

**Live strain, declared, not smoothed:** which structure does physical information bind to? Entropy is ordering, so spectrum-like (Fig 13 :20 "ordering, so more and less can be said"); the thermodynamic cost of erasure is directedness that can be spent, so gradient-like (Fig 13 :22 "a difference that can be spent"), bonded to energy. Fig 13 :75 forbids two structures joining directly: "two structures join only through a state." A composed information molecule therefore needs a state between the two structures. The figures can state that shape but cannot select which structure sits in the slot (F8). Naming spectrum or gradient is a binding from the physics frame, provenanced as such. This stays live and is carried into `06_isomers_and_order.md` and `08_expert_verification_packet.md`.

**After re-census: one live strain, named; two apparent strains dissolved.**

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. **Convergence failure.** For a fixed physical process and a fixed, declared coarse-graining, two instruments or observers known to draw on different evidence return systematically different work costs or mutual information values that do not converge against the ground. (Breaks F4.)
2. **Anchor failure.** A derivation or experiment shows that the ground for a physical system's information content must include the observer's current belief state, so that pushing on the frame moves the anchor. (Breaks F1, Fig 2 :33.)
3. **Composition failure.** A figure re-census admits a direct bond between two structures (or two states) with no intervening opposite-kind term, so the state between spectrum and gradient is not required. (Breaks the shape in section 4.)
4. **Gap closure.** The semantic sub-question acquires a nameable, non-updating anchor, for example an instrument that settles meaning in the way a calorimeter settles erasure cost. (Moves D3 from `gap` to a domain.)

If any fires, the shape is withdrawn or revised and the correction is recorded here rather than silently applied.

---

## 6. Recommendation

1. Lead with the union split and the shape, not with "the answer is both". Saying "both" without the dependency order is a blend, not a derivation (Fig 8 collapse 4, :4-8).
2. State the mode on every substantive sentence. An unmeasured binding is a specification of what to measure, not a verdict.
3. Give the observer a pose and a coarse-graining explicitly. Refuse to let an assigned distribution become the anchor.
4. Report the abstraction gap R_T as the irreducible frame-indexed residue, and distinguish it from ground contact.
5. Leave D3 open as `gap`. Do not force a semantic verdict out of a physical ground.
6. Send the generator, the residual, the shape and the refuter, not a recording of the conclusion. Fig 4 :23: "upward: a method that can be reapplied. Never the recording of a particular success."

---

## 7. Canonical usage check

Two local documents were read after sections 0 to 6 and govern how the figures may be used.

- `FRAMEWORK\reference\FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", which is the rule applied to the two apparent strains in section 4. And: the framework says what a missing thing would have to look like, "a shape, not a name", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK\figures\THE_FORMULA.md`: mode rule, the direction discipline (write the sought-for shape as an ordinary term), and step 7's three distinct questions. For this question: SEARCHED was run over the figure text for an anchor line (none gives the semantic sub-question an anchor); INWARD would sharpen the physical instrument, which is already returning erasure costs; OUTWARD would import a frame holding semantic ground, which is why D3 is left as `gap` rather than filled. These three are distinct and were not read against one another.

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| F1 "observer cannot be anchor" | **Confirmed.** Fig 2 and the Symbols table anchor definition agree, and the canonical README's ground-not-agreement rule agrees. |
| F4 "objectivity = convergence" | **Confirmed with care.** Fig 8 :50 is about convergent derivation of an atom, not a direct theorem about physical measurement. The extension to measurement is a `specified` reading, not a `general` one. Marked as such. |
| F7 "information content is frame-indexed" | **Narrowed.** The pricing rule is frame-indexed relative to Γ, but the substrate is minimal and closed, so the frame cannot freely choose new primitives. The claim is bounded objectivity, not relativism. |
| D3 named as a domain in the first census | **Retracted.** First draft listed "semantic interpretation" as a domain with the interpreter as anchor. The anchor test in Fig 2 :29-30 disqualifies an anchor that changes with the frame. D3 is now `gap`, a bundled condition to unbundle. |
| "the question is a partition" | **Retracted.** Re-census under Fig 9 :54-58 makes it a union compound. Recorded, not erased. |
| Apparent Fig 1 versus Symbols strain | **Not strained.** Error signal versus ground, different objects. Matches the README's re-census rule. |

### What survives

The shape survives: the "or" is a union; observer indexing is a pose and an abstraction with a measured gap; objectivity is convergence of independent frames against a ground that does not update; the semantic sub-question stays `gap`; the binding of information content to a particular structure is unproven and mode-labelled. Strained after re-census: one live binding strain (section 4), named rather than hidden.
