# Figure-grounded audit: can AI systems learn continuously without forgetting or becoming unstable?

**Mode of this document: `specified` on the per-domain findings, `general` on the structural split, `gap` on the universal guarantee. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Canonical usage is `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources actually opened are listed in `10_source_ledger.csv`.

---

## 0. The residual under audit

> Can AI systems learn continuously without forgetting earlier knowledge or becoming unstable?

Stated in effect terms, not in the vocabulary of the question:

- A learner holds a library Γ. On each action it predicts Γ(b,a); the world returns o′; the residual is R = |Γ(b,a) - o′|. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* A "slot" here is one previously learned capability or one task's test distribution.
- "Learn continuously" means new slots keep arriving and R on each new slot should trend down.
- "Forget earlier knowledge" means R on an **old** slot rises after an update. This is not necessarily a deletion. Fig 6 :42: *"What is recorded only grows. What is reachable is derived, and it can fall."*
- "Become unstable" means the system drifts because the thing it ranges against has started to move with it. Fig 2 :33: *"The anchor must not update."* Fig 10 :24: *"the ground does not decay, the channel does"*.

The two failure words in the question, "forgetting" and "unstable", name **two different effects with two different anchors**. The question is therefore a union compound, not one question with a yes/no answer (Fig 9 :4-5, Fig 9 :54-57). That is the first finding and it governs everything after it.

What an answer would look like, bound as an ordinary term before the run (Formula, "Direction"): a **separator**, a set of conditions that distinguishes reach-fall from channel-decay from habitat-substitution, each with its own instrument. Written down here and in `06_isomers_and_order.md` before any verdict, so it can accrue a residual like any other term.

---

## 1. Domain census (done before choosing any figure line)

R by arity, symmetry and scale, then one line per domain giving actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

- **R (the residual).** Arity: k slots, one per learned task, plus at least two conditions (retain, adapt). Symmetry: forgetting is a directed interference, old-to-new; it is not a symmetric join. The old-versus-new comparison is a threshold relation, not a co-presence (Operators table :48-51). Scale: first order within one task sequence; second order across model generations or task families, where a whole settled learner becomes an atom for the next (Fig 12 :104). Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Verdict on type: **union compound**, not partition.
- **Domain 1, library and reach.** Actors: Γ, atoms(Γ), closure(Γ), candidate terms φ, the record. Currency: composition and settlement against the ground. Anchor: the ground's payment, *"Verified only by what pays"* (Formula step 5). Question type: partition (which compositions remain reachable after new terms are admitted). No figure line yet chosen; census only.
- **Domain 2, ground and channel (the stability question).** Actors: the anchor, the percepts/transients/metrics that carry contact, the seat that keeps the anchor reachable. Currency: contact with a ground that does not update. Anchor: the ground itself; the channel is not the anchor. Question type: mirror-collapse test (does the reference update on the learner's own output?). No figure line yet chosen.
- **Domain 3, habitat and task sequence.** Actors: tasks, data distributions, replay buffer, prior knowledge/schema, the conditions and relations in contact with each residual. Currency: contact with each slot's ground. Anchor: each task's ground, which must be reproduced when the task changes. Question type: union (retention is many overlapping conditions). No figure line yet chosen.
- **Domain 4, verification and metric frame.** Actors: evaluator, metrics, instruments. Currency: per-slot residuals and independence between frames. Anchor: the ground, never agreement. Question type: partition (per-slot residual versus aggregate score). No figure line chosen until after the strain test.

**Partition or union.** Domain 1 and Domain 4 are partition boundaries (what composes across the record/reach line; what an aggregate hides). Domain 2 and Domain 3 are unions of conditions. The whole question is a union of a union and two partitions; it cannot be averaged into one number (Fig 9 :57: *"a case in two conditions is not a harder case of either"*).

**Order by dependency (Fig 3).** Perception (tell what was there before from what is there now, Fig 3 :5) precedes vocabulary (terms for what an old capability affords, Fig 3 :7) precedes objective (what counts as progress, Fig 3 :9-11) precedes learn-and-carry (Fig 3 :15: *"name what worked, verify it, and carry it to the next problem"*). Refuse before mint (Formula step 2). Describe the residual before choosing a frame (Fig 9 :27-28). The chain typically breaks at vocabulary/objective: almost every continual-learning benchmark has a metric for accuracy, and very few have a term for "did reach on an old slot fall," which is a link with no instrument (Fig 3 :27).

Now, and only now, go to the verbatim figure text.

---

## 2. Figure census (verbatim, before conclusions)

| figure | bearing on this question | first verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | aggregate accuracy is a filter, not a witness |
| 2 The Ground | anchor must not update; independence | instability is drift or lost touch, not an agent property |
| 3 Dependency Chain | learn-and-carry is link 5; a link with no instrument | the old-slot residual has no instrument in most work |
| 4 The Membrane | methods cross, recordings do not | what is retained must be a generator, not a replay of one occasion |
| 5 Mint Pipeline | settling necessary not sufficient; library grows not reach | retention is reach maintenance, not storage |
| 6 Closure / Reachability | record grows, reach can fall; closure monotone, reach not | forgetting is a fall in reach, not a deletion |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | a stream of similar tasks is a mirror chain if rooms match |
| 8 Union Surplus | no search adds an atom; union mute without a described residual | more tasks inside one closure do not add reach |
| 9 Leave / Arrive | split unions; describe before looking; filters not witnesses | the question is a union; universal ratio is a gap |
| 10 Ground Maintainer | ground does not decay, channel does | stability is maintained contact, not parameter stasis |
| 11 The Habitat | capability is agent-and-habitat; isolation is substitution | a task switch substitutes a habitat and inherits unchosen actors |
| 12 The Bond | settled molecule becomes atom; where not recorded, pay again | positive transfer is composition over settled terms |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | no universal guarantee is derivable from the six |
| Operators table | ⋛ threshold; ¬ refusal | "stable" is a threshold, not a substance; refusal needed |
| Symbols table | R is the aim, always a slice | what cannot be perceived yet is simply not read |

Strained readings are named below, not smoothed over.

---

## 3. Findings

### F1 - The question is a union, so "yes/no" is the wrong form (decisive for the framing)

Fig 9 :4-5, verbatim: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

Fig 9 :55-57: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds. What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

"Forgetting" and "instability" are two conditions with two anchors. A method that stops one leaves the other standing. Any answer of the form "yes, continuous learning works" or "no, it cannot" silently averages them. **Mode: `general` (structural), triangulated across Fig 9 and Fig 2 (different objects: union splitting vs anchor independence, low overlap).**

**Refuter:** show that reach-fall and channel-decay are one quantity with one anchor, so a single instrument settles both. Until then the split stands.

### F2 - Forgetting is a fall in reach, not a deletion from the record

Fig 6 :42-43: *"What is recorded only grows. What is reachable is derived, and it can fall. A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted. So the closure and the reach are two quantities: one monotone, one not."*

Fig 5 :72: *"and a library that grows is not a reach that grows."*

Fig 6 :45: *"And a term cannot cycle in and out, because the refusal never leaves the record: it becomes reachable again only if something new is minted, which is growth."*

The ordinary word "forgetting" suggests erasure. The figures refuse that picture. The record is monotone; a new term can reduce what is derivable without deleting anything, because derivability is computed under everything currently held. So the correct effect statement is: after learning task B, the reach that includes task A's term has fallen even though the record still holds it. This is a **structural** result about two quantities, not a claim about a particular network. **Mode: `specified`, triangulated across Fig 6 (reach monotonicity) and Fig 5 (library versus reach), with Formula "The record and the reach" as a third statement of the same distinction.**

**Refuter:** demonstrate a store where reach is monotone with the record under arbitrary new terms, or show a deletion is required for reach to fall. Either breaks Fig 6 :42-43.

### F3 - The metric is a filter; the residual is per slot

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Fig 1 :24-27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* (preceded by *"coverage, and compression achieved"* and *"predicates minted, and credibility accrued"*).

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

The standard continual-learning report is an average accuracy over tasks or an average forgetting measure. Under Fig 1 that average is a frame-internal quantity, and a global score near zero with one dead old slot is a legal state. What is owed is a per-slot residual read against the old task's ground. World corroboration: the survey records average accuracy AA and forgetting FM as *metrics* (Wang et al. 2024), and the van de Ven chapter explicitly notes that a plastic model at 0% on task A and 100% on task B has the same average as a rigid model with the opposite scores. That corroborates the shape, not the figure verdict. **Mode: `specified`, triangulated across Fig 1 and Fig 9 (per-slot residual vs filter/witness, low overlap).**

**Refuter:** show an aggregate metric that is guaranteed to expose a live residual on any single old slot without per-slot access. If one exists, Fig 1 :22 is wrong for this domain.

### F4 - Instability is drift or lost touch, not a property of the agent alone

Fig 2 :33-34: *"The anchor must not update. If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*

Fig 10 :24: *"the ground does not decay, the channel does"*. Fig 10 :25-26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*. Fig 10 :27-28: *"the output is not a verdict, it is you have lost touch"*. Fig 10 :29: *"→ keep the anchor reachable"*.

Fig 11 :39-40: *"capability is a property of agent-and-habitat, never of the agent alone. A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

A learner graded only on its own previous predictions has made its own output its reference. That is Fig 2's panel 1: mutual update, coherent drift, nobody notices. A learner whose metrics saturate or pool readings has lost the channel while the ground did not decay. Both are "instability," and neither is cured by changing parameters alone. **Mode: `specified`, triangulated across Fig 2 (anchor) and Fig 10 (channel), different mechanisms, low overlap.**

**Refuter:** demonstrate an agent-only parameter change that preserves contact with a non-updating ground on all old slots and thereby genuinely improves capability. Fig 11 :40 says such an improvement changes nothing unless contact changes; a measured case would break it.

### F5 - What crosses a task boundary must be a method or a head start, not a recording

Fig 4 :22: *"Only methods cross up. Only head starts come down."* Fig 4 :23: *"upward: a method that can be reapplied. Never the recording of a particular success."* Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one."*

Fig 12 :107-110: *"Settling compresses the description and not what it cost to establish. Whether that cost must be paid again depends on the substrate: where the arrangement is recorded, re-deriving it is a lookup and the actions were spent once. Where it is not, the result carries forward and the deriving does not, so every lineage pays again."*

Retention across tasks is not "keep the weights." It is "keep a reapplicable arrangement, recorded where the next task can use it as a lookup." Where the arrangement is not recorded, the model may carry the result and still re-pay the derivation on every lineage. This is the figure-grounded version of why parameter-only approaches degrade as tasks accumulate. **Mode: `specified`, triangulated across Fig 4 (membrane direction) and Fig 12 (substrate of recording), different scales, low overlap.**

**Refuter:** show a retained recording of one occasion that generates a genuinely new success on an unseen task without being re-derived. That breaks Fig 4 :25.

### F6 - Settling old terms is necessary before they can be composed over, and not sufficient

Fig 5 :69: *"settling is necessary for a term to be composed over, and it is not sufficient."* Fig 5 :70: *"A term is settled when the ground pays for it. A term is usable when something can compose over it."*

Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"*

Positive transfer (a new task becoming easier because an old one was learned) is composition over a settled molecule. It is licensed only for terms the ground already paid for. A term that was merely stored, not settled, cannot serve as the atom. This separates "the old data are still in the buffer" from "the old capability is an atom for the new task." **Mode: `specified`, triangulated across Fig 5 and Fig 12.**

**Refuter:** show positive transfer from a term whose ground never paid, or show a settled molecule that cannot become an atom. Either breaks the pair.

### F7 - Isolation is substitution, so a task switch inherits actors you did not choose

Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* Fig 11 :67: *"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."* Fig 11 :68: *"what you failed to reproduce is invisible until the goal fails"*

Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*

A task switch is a habitat substitution. The failure is not that knowledge was subtracted; it is that the new habitat failed to reproduce the contact the old goal required, and the missing piece is invisible until the old goal is retested. Valence is relative: a replay buffer is a benefactor to one residual and a compute burden to another. **Mode: `specified`, single-source on the figure side (Fig 11), corroborated by the cognitive-science world sources below (different evidence pool).**

**Refuter:** exhibit a task switch that preserved the original habitat (no substitution) and still lost old reach. That would move the cause away from Fig 11 :67.

### F8 - No universal guarantee, ratio, or named architecture is derivable: declared gap

Fig 13 :115: *"The set is closed. The arrangements are not."* Fig 13 :118: *"infinite effort inside a finite reach"*. Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*; Fig 13 :134-135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

No figure line returns a numeric stability-plasticity ratio, an architecture name (replay, EWC, isolation, progressive networks), or a guarantee that reach never falls for all task streams. The closest the figures get is a shape: retain methods, measure per slot, keep the anchor unreachable-by-update, reproduce the habitat. Naming one algorithm as *the* answer is a binding from the machine-learning frame, not a derivation, and it needs a source gate and a shadow test (Fig 6 :23, Fig 8 :50-52). World corroboration: the survey reports the classical shared-parameter continual learning problem is NP-hard in general (Wang et al. 2024, citing Knoblauch et al. 2020), and the van de Ven chapter says preventing catastrophic forgetting is not enough to solve continual learning. That corroborates the `gap`, it does not decide it. **Mode: `general` on the gap, `gap` on the universal claim.**

**Refuter:** exhibit a figure line governing the exact ratio or naming the architecture. That closes the gap and changes the verdict without breaking any other finding.

### F9 - A synthetic benchmark proves wiring, never capability

Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

Fig 10 :47: *"a convention that decides an outcome has stopped being one"*.

Continual-learning benchmarks (Split MNIST, permuted MNIST, Atari sequences) are substituted habitats. Strong benchmark scores establish that a wiring works in that habitat; they do not establish capability in the open habitat. If a benchmark metric is promoted into the outcome the system optimizes, it stops being a measure and becomes a convention that decides the verdict. This is a live caveat on every world source below, recorded rather than hidden. **Mode: `specified`, single-source (Fig 11).**

**Refuter:** show a benchmark whose substitute reproduces exactly the contact of the target habitat, including second-order actors. Then the distinction dissolves.

### F10 - Refusal is needed as well as accumulation

Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*. Fig 5 :50-56 names the fifth kind of gap: *"refuted: a term we hold is wrong; a term is owed that says so"* and *"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."*

A continual learner that can only add terms cannot correct a term that the new task shows to be false. It can accumulate a record and still lose reach. The unary negation operator is what lets it refuse, and a vocabulary with subtraction but not negation can say what is missing and cannot say that a held term is wrong (Operators table :73-74). **Mode: `specified`, single-source on the figure side (Operators + Fig 5 amendment), triangulated with Formula step 2.**

**Refuter:** show a learner that corrects a refuted old term using only additive operations and preserves reach. That breaks the need for negation.

### F11 - What survives: the defensible residue with mode attached

| claim | mode | figure |
|---|---|---|
| forgetting and instability are two conditions with different anchors; the question is a union | `general` (structural) | Fig 9 :4-5, :55-57 |
| forgetting is a fall in reach while the record grows, not a deletion | `specified` | Fig 6 :42-43, Fig 5 :72 |
| residual must be read per slot; aggregate accuracy is a filter | `specified` | Fig 1 :13, :19, :22; Fig 9 :60 |
| stability requires a non-updating anchor and a reachable channel; it is agent-and-habitat | `specified` | Fig 2 :33-34; Fig 10 :24-29; Fig 11 :39-40 |
| retention carries methods/head starts, not recordings of one occasion | `specified` | Fig 4 :22-25; Fig 12 :107-110 |
| positive transfer is composition over settled atoms | `specified` | Fig 5 :69-70; Fig 12 :104 |
| a task switch substitutes a habitat; what failed to reproduce is invisible until the goal fails | `specified` | Fig 11 :66-69 |
| no universal guarantee, ratio, or named architecture follows from the figures | `gap` | Fig 9 :32; Fig 13 :115, :134 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before the verdict, per seat reasoning: a falsifier written before the run is a design instrument. The shape claim in section 5 is refuted if any of the following holds:

1. **Reach monotonicity:** a system maintains non-decreasing per-slot reach on all old tasks under unbounded sequential updates with no replay, no consolidation, no capacity growth, and a ground that does not update, measured on independent held-out old tasks. This breaks Fig 6 :42-43.
2. **Drift without penalty:** when the reference updates on the learner's own outputs, reach on an independent ground is preserved rather than drifting coherently. This breaks Fig 2 :33-34.
3. **Deletion model:** reach falls only because a term was removed from the record, not because something was added. This breaks Fig 6 :42.
4. **Transfer from unsettled terms:** positive transfer is demonstrated from a term whose ground never paid, or a settled molecule cannot become an atom. This breaks Fig 5 :69-70 / Fig 12 :104.
5. **No negation needed:** a learner corrects a refuted old term using only additive operations and preserves reach. This breaks Operators :58 / Fig 5 :50-56.
6. **Universal ratio found:** a figure line governing the exact stability-plasticity ratio or naming the architecture. This closes F8's gap and changes the verdict.

**Not a refuter:** agreement from any number of researchers, benchmark scores inside a substituted habitat, or prestige. *"You may all agree and be wrong."* (Recursive Self-Improvement Trap). Only a ground reading, as defined in Fig 2 :29-30, moves these findings.

---

## 5. Recommendation

1. Split the question in two before answering it: reach preservation, and contact preservation (F1). Keep the verdicts separate and never average them.
2. Replace "did it forget?" with "did reach on slot s fall?" measured on an old task's frozen ground, per slot (F2, F3).
3. Treat stability as maintained contact with a non-updating anchor and an unblocked channel, not as parameter stasis (F4).
4. Say what is retained: a reapplicable method or head start, recorded where the next task can look it up, plus a refusal operator for terms the new task refutes (F5, F10).
5. Declare the gap: no universal guarantee, ratio, or named architecture (F8). Report `unreachable`, not silence.
6. Demand a source-discriminating instrument before naming any algorithm as *the* solution (Fig 6 :29-30, *"Cast it in effect terms"*; Hard Problem is About Source: *"The answer is unreached until a better instrument exists."*).

---

## 6. Canonical usage check (figures README + metalaws, 2026-11-22)

Two local framework sources were read after the first five sections and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` and the metalaws reading: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Fig 10 :24 establishes that the ground does not decay, so "which parameters stayed fixed" is the wrong ground for a stability claim.

### Retractions and confirmations (kept visible)

| earlier reading in this audit | status after canonical check |
|---|---|
| First pass read "stability" onto the gradient atom and "plasticity" onto the spectrum atom of Fig 13 | **Retracted.** Stability and plasticity are not among the six terms. Re-census assigns them to contact maintenance (Fig 10 :24) and reach composition (Fig 6 :42). Different objects, no strain. |
| First pass read "forgetting" as deletion from the library | **Retracted.** Fig 6 :42-43 and the Formula's section on the record and the reach make the record monotone and the reach non-monotone. The correction is kept in F2. |
| First pass suspected replay buffers contradict Fig 4 :25 | **Re-census, not a retraction of the figure.** The buffer is an instrument (a head start), not the retained method. Fig 4 :25 governs what crosses as knowledge. Recorded as strain S1 below. |
| "No instrument for old-slot residual" (F3) | **Confirmed and strengthened.** Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The break in the chain is at vocabulary/objective, not at optimization. |
| F8 gap | **Canonically confirmed.** The README's own limit: a shape, not a name; unreachable is a verdict, not silence. |
| F4 "agent alone" | **Canonically confirmed.** Fig 11 :39-40 and the capability claim in the README's habitat section. |
| Simulated status | **Canonically confirmed.** Recursive Self-Improvement Trap: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* |

---

## 7. Strains and re-census

- **S1, replay buffer versus Fig 4 :25 (recording).** Dissolved by re-census: the buffer is an instrument that makes the next search cheaper (Fig 4 :24, *"downward: something that makes the next search cheaper"*), while what must cross as knowledge is the reapplicable arrangement. A buffer that stores a recording of one occasion and replays it as the answer is the failure Fig 4 :25 names. Kept visible because it decides how the world sources are read.
- **S2, parameter regularization versus Fig 11 :40 (contact).** Dissolved: regularization preserves the old input-output mapping, which changes contact with the old task's ground indirectly. The quantity to check is whether old-task ground contact is preserved, not whether parameters moved. Different objects.
- **S3, Fig 6 :42 (reach falls) versus EWC maintains old expertise.** No strain: EWC is a design that slows reach decay; it does not assert monotonicity. World result and figure law are different quantities (design target versus structure).
- **S4, anchor versus unavailable old data (live).** A frozen held-out test set is a proxy anchor, not the ground. If it is used to update the learner it becomes a frame, and Fig 2 :29-30 applies: *"If it moves when you push on it, it is not an anchor."* Kept as a live strain with the refuter in section 4.2.
- **S5, benchmark versus habitat (live, narrowed).** Fig 11 :70 says a harness proves wiring. World sources report benchmark gains. No conflict, but the world claims are read at reduced scope: mechanism shape only, not deployed capability.

**After re-census: two live strains (S4, S5), three dissolved, none hidden.**

---

## 8. Canonical figure lines used (checked character by character)

Fig 1 :13, :19, :22, :24-27; Fig 2 :29-30, :33-35, :40; Fig 3 :5, :7, :9-11, :15, :27; Fig 4 :22-25; Fig 5 :50-56, :69-72; Fig 6 :23, :29-30, :42-45; Fig 7 :35; Fig 8 :32, :50-52; Fig 9 :4-5, :27-28, :32, :54-57, :60; Fig 10 :24-29, :42, :47; Fig 11 :39-40, :44, :49, :66-70; Fig 12 :104, :107-110; Fig 13 :115, :118, :134-135; Operators table :48-51, :58, :73-74; Symbols table :38-40. The second seat re-checks these in `11_audit.md`.

---

## 9. Updated verdict

The question is a union compound, and its two halves have different anchors. Reach preservation is a record/reach distinction: the record grows, reach can fall, and forgetting is a fall in reach rather than a deletion. Contact preservation is an anchor/channel distinction: instability is coherent drift when the anchor updates on the learner's own output, or lost touch when the channel decays while the ground does not. Retention across tasks carries methods and head starts, not recordings of one occasion, and positive transfer is composition over settled atoms. A task switch substitutes a habitat and inherits actors you did not choose. The separator is a shape with per-slot residuals, a non-updating anchor, a reachable channel, reproduced contact, and a refusal operator. No figure line returns a universal guarantee, a stability-plasticity ratio, or a named architecture; that is a declared `gap`. Mode `specified` on the four domain verdicts, `general` on the union structure, `gap` on the universal claim, not `grounded`. Simulated derivation, not a ground reading.
