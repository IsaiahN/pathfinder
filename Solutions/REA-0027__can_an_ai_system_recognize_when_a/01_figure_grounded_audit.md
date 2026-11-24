# Figure-grounded audit: can an AI system recognize underdetermination?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be settled by an instrument. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* (2026-11-19). This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the Operators and Symbols tables in the figure text. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

**Question.** Can an AI system recognize when a problem is underdetermined by the available information?

**Effect statement.** A system holds a problem P and information I (a library Γ, a set of atoms, and instruments). The report in question is: "the answer to P is not fixed by I." Two options and what each leads to:

- **Option A**, treat the report as a world-level verdict issued from inside the system. This leads to a frame certifying its own limit, to treating "found nothing" as "not there," and to confusing depth with absence. Fig 8 :37: *"A frame cannot certify its own limit."*
- **Option B**, treat the report as a relative reachability result (the answer is not in closure(Γ) as declared) plus a characterised shape of what would have to be imported. This leads to a checkable claim with a pre-registered refuter and an honest stop. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*.

**R by arity, symmetry, scale.**

- *Arity.* Two operands plus a third term: the problem P, the information I, and the instrument/channel through which I is read. "Underdetermined" is a relation between constraints and unknowns, not a property of P alone.
- *Symmetry.* It is not a symmetric bond. It has two faces that must not be merged: a **comparison** (⋛, a threshold relation between constraints and unknowns, Operators table :47-51) and a **negation** (¬, the refusal of "the answer is fixed," Operators table :53-57). Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."*
- *Scale.* First order inside one frame (is φ in closure(Γ)?). Second order at the metaframe (can the frame certify its own limit?). The second is not reachable by doing more of the first: Fig 8 :34 *"A frame cannot reach its own metaframe."*
- *Slot structure.* The residual must not be averaged. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*. A problem can look well determined overall while one slot is entirely open.

**Binding the sought shape as an ordinary term.** Per the formula's "Direction" step, write down what an answer would look like before searching: *a border, stated in effect terms, between what a declared closure can decide and what requires a new atom or a live ground reading.* Binding it makes the preference refusable like any other term. This is what the pre-registered refuter below does.

---

## 1. Domain census (before choosing any figure line)

One line per domain. No nameable anchor means it is not yet a domain with its own loop.

| domain | actors | currency | anchor | partition or union | verdict |
|---|---|---|---|---|---|
| **D1 Formal reachability** | a system with Γ, atoms(Γ), closure(Γ), candidate φ, the eight operators | derivability and stated cost | the declared library and operator set; it does not move when the system searches (Fig 6 :21) | partition: φ ∈ closure(Γ) or φ ∉ closure(Γ) | **YES** for relative reachability |
| **D2 Ground contact and instrument** | the ground, instruments, channels, seats | residual R arriving or not | the ground, which does not update (Fig 2 :29; Fig 10 :24) | union compound: depth, genuine absence, and a closed channel are three conditions | **NO** for world-level certification |
| **D3 Verification / outside frame** | expert readers, outside frames, the ground maintainer | agreement versus residual | the ground, never agreement (Fig 2 :35) | partition by independence: who shares the evidence pool | **ONLY** from outside |
| **Limit, not a domain: the direction of the question** | the searcher holding the sought shape as a preference | none: unbound, predicts nothing, accrues no residual | none inside the frame | not a loop; a boundary condition | **LIMIT**, not a verdict |

The fourth row is deliberately not promoted to a domain. Fig 5 :62-63: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."* With no nameable anchor inside the frame it fails the census rule, so it is recorded as a limit, not given a fake loop.

**Order by dependency (Fig 3).** Vocabulary with negation (Operators table :73-74) → D1 reachability check → D2 ground contact → D3 outside verification. The chain usually breaks between vocabulary and objective. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* A system with terms for what a problem affords but no term for "not fixed" has a dictionary where it needs a grammar.

**Union, not a single question.** D1 and D2 are different conditions. A single lever does not clear both: settling reachability leaves ground contact untouched, and a live ground does not tell you what your closure can derive. Fig 13 :136: *"It can say the question is not one question and must be split before it is searched again."*

---

## 2. Figure census (quoted verbatim before concluding)

| figure / table | bearing | verdict after census |
|---|---|---|
| Fig 1, The Agent | residual per slot, not aggregate | governs detection resolution; D1 |
| Fig 2, The Ground | anchor must not update; agreement is valence | governs D2 anchor and D3 |
| Fig 3, Dependency Chain | a reading below the break reads nothing; middle link has no instrument | governs the vocabulary prerequisite |
| Fig 5, Mint Pipeline | direction is a preference, invisible to the loop | governs the limit row; strain resolved by re-census |
| Fig 6, Closure / Reachability | depth and absence look the same from inside; instruments improve from worse instruments | governs D2; decisive for Option A |
| Fig 7, Room Chain | agreement compounds, evidence does not | governs D3; no pooling |
| Fig 8, Union Surplus | no search proves absence; metaframe and limit theorems; underivable versus unreachable | governs D1/D2 split and the cost of confusion |
| Fig 9, Leave / Arrive | split a non-shrinking disagreement; describe the residual before choosing a frame; one sealed-room rule | governs union reading and D3 order |
| Fig 10, Ground Maintainer | channel decays; a verifier that can reconstruct cannot verify | governs D2 and D3 |
| Fig 12, The Bond and Fig 13 | comparison and negation are different operators; decidability before search; unreachable as verdict | govern D1 positively |
| Operators / Symbols tables | ⋛ threshold, ¬ refusal, closure(Γ) as what endless search could say | govern the arity/symmetry reading |

Strains are named in section 5, not smoothed over.

---

## 3. Findings

### F1: The question is a union compound and must be split (decisive for the framing)

Fig 9 :4-5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

"Can an AI recognize underdetermination?" reads as one yes/no question. The census shows two conditions with different anchors (a declared closure in D1, the ground in D2). Averaging them into one verdict is the named error. Fig 9 :54-55: *"when the split lands on a union rather than a partition, unbundle before you search again."*

**Refuter:** show that reachability-relative-to-Γ and world-level non-uniqueness are the same condition with the same anchor, so one instrument settles both. I did not find such a derivation.

### F2: YES for reachability relative to a declared closure (triangulated)

Fig 13 :132-133: *"The second is decidability: given the library as it stands, could this have been reached at all. A system with a closure can answer that before it searches, and what it returns is a shape rather than a name."*

The Symbols table defines closure(Γ) as *"Everything expressible by combining the primitives, at any depth. What the system could say if it searched forever."* Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*

So a system that can enumerate its own closure can answer, before spending a search budget, whether a candidate answer is reachable under what it holds. If the answer is not in closure(Γ), it can report that it lacks something rather than inventing an answer. This is a genuine, mechanisable form of "recognizing underdetermination by the available information," with Γ doing the work of "the available information." The output is a shape: it can say the answer needs an atom it does not have, not which atom.

**Mode:** `specified`, and conditional on the system actually exposing Γ and closure(Γ). `general` for the structural claim.

**Triangulation:** Fig 13 (decidability) + Symbols table (definition of closure) + Fig 6 (composition cannot leave the closure). Low overlap between a substrate claim, a definition, and a wall claim. All are framework sources, so this is internal triangulation, not independent corroboration.

**Refuter:** a system that cannot enumerate closure(Γ) but can still certify non-reachability by derivation would break the condition, not the claim; a system that reports "not in closure" for a candidate that is in closure would break the claim.

### F3: NO for world-level certification from inside (triangulated, decisive for Option A)

Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*

Fig 8 :34: *"A frame cannot reach its own metaframe."* Fig 8 :37: *"A frame cannot certify its own limit."*

A system can discover that its search is not converging. It cannot conclude from that discovery that the world itself leaves the question open. Three conditions look identical from the inside: the answer is genuinely absent from the information; it is present but far beyond the budget; or the channel has stopped delivering residual. Fig 2 :34 gives the drift version: *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*

**Mode:** `specified`. This is a barrier claim about what a frame can certify, not a measurement of any particular AI.

**Triangulation:** Fig 6 (depth versus absence) + Fig 8 (no proof of absence, metaframe) + Fig 9 (no sealed room). Different figures, different arguments, low overlap.

**Refuter:** demonstrate a derivation inside a single non-sealed frame that discriminates genuine absence from depth with no imported instrument and no outside ground. Any such demonstration would have to defeat Fig 6 :27 and Fig 8 :39 at once.

### F4: The silent channel failure is the practical form of the limit

Fig 10 :24: *"the ground does not decay, the channel does"*. Fig 10 :27-28: *"the output is not a verdict, it is you have lost touch"*.

The formula's Closure section says the loop stops when R stops arriving, which is either a perfect prediction or a closed channel, and from inside those look the same. So a system that reports "nothing more is arriving, therefore the problem is underdetermined" may be reporting its own dead channel. Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* Detection of genuine absence needs a proto-instrument already registering something that fails to resolve, not a conclusion drawn from silence.

**Refuter:** show a discriminator that fires on a channel with zero residual and distinguishes "perfect" from "dead" without any external reading. Fig 10 :24 and Fig 6 :32 jointly forbid it as written.

### F5: Vocabulary prerequisite: negation, and the direction limit (single-source per figure)

Operators table :73-74: *"A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."*

"Not determined by the information" is a negation. A system with only ingredients and subtraction can say what is missing from an arrangement; it cannot write that the claim "this answer is fixed" is false. It can accumulate candidates and never carry the correction. That is a structural prerequisite for recognizing underdetermination, and it is separate from the reachability check.

Then the limit on self-inspection: Fig 5 :62-63: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."* A system looking for "a complete answer" cannot see that this shape is a preference it holds. The remedy from the formula is a discipline, not a step: write the shape down as an ordinary term and let it accrue a residual, which is what section 0 does.

**Triangulation:** each figure is single-source for its own claim (Operators table for negation; Fig 5 for direction). The two are not merged: negation is a term-level prerequisite, direction is a limit on what the loop can inspect.

**Refuter:** exhibit a system that declares "not fixed" as a refusable term using only − and no ¬, or that inspects its own sought shape as a bound predicting term. Neither is ruled out by experiment here; both are ruled out by the operator definitions as written.

### F6: The cost of conflating the two conditions

Fig 8 :40-41: *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."* The same passage says the budget case needs more search, not another atom, and that importing against a budget limit adds an atom that was not needed.

A system that misreads "unreachable at this budget" as "genuine absence" will import a new primitive and pay for a wrong atom. Fig 6 :24: *"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."* This is the practical cost of a false underdetermination verdict, and it is why Fig 9 :60 says *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

**Refuter:** show that a budget-limited search can certify genuine absence, so importing never costs anything. This would collapse Fig 8 :40 and Fig 6 :24.

### F7: Detection must be per slot, not per problem average

Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*.

Underdetermination can live in one slot of an otherwise well-predicted problem. An AI that scores only a global measure will report "determined" while a slot is open. This is a detection-resolution finding, not a new verdict: it tells you how to look, not what is true.

**Refuter:** a case where a global score is sufficient to locate every open slot. That would require all open slots to move the global score together, which the figure denies.

### F8: What survives (defensible residue with mode attached)

| claim | mode | figure |
|---|---|---|
| A system with an enumerable closure can decide reachability before searching | `general`, conditional on Γ being exposed | Fig 13 :132-133; Symbols closure |
| "Not fixed by I" is a negation, not a missing ingredient | `general`, structural | Operators table :73-74 |
| Depth, genuine absence, and a closed channel are indiscernible from inside | `specified`, barrier claim | Fig 6 :27; Fig 8 :39; Fig 10 :24 |
| World-level underdetermination can only be certified from outside the frame | `specified`, barrier claim | Fig 8 :37; Fig 2 :35 |
| Detection must be per slot | `specified`, methodological | Fig 1 :19, :22 |
| A system can see its own reached-but-unfound region but not its own sought shape | `specified`, limit | Fig 6 :48-50; Fig 5 :62-63 |

### F9: The shape answer in one line

An AI can recognize underdetermination **relative to what it holds**. It cannot, from inside, promote that report to a verdict about the world. The honest output is: "not reachable in closure(Γ) as declared, here is the effect-term shape of what would settle it, and here is what would refute my report." Fig 9 :32: *"you get a kind of thing, never the answer itself"*.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. The shape claim is refuted if any of the following holds:

1. A system with a declared closure Γ is shown to certify, from inside alone and with no outside ground, that a problem is underdetermined in the world rather than merely relative to Γ. This would break Fig 8 :37 and Fig 6 :27.
2. A search that finds nothing is demonstrated to be a proof of absence for a non-sealed frame. This would break Fig 8 :39 and Fig 9 :44.
3. Depth and genuine absence are discriminated inside one frame with no imported instrument. This would break Fig 6 :27.
4. A system with no negation operator is shown to declare "not fixed" as a refusable term, or a system is shown to inspect its own sought shape as a bound, predicting term. This would break Operators table :73-74 and Fig 5 :62-63.
5. A global residual score is shown sufficient to locate every open slot. This would break Fig 1 :19, :22.

If any fires, the shape claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Strain test, re-census, and canonical usage check

**Strain 1, resolved by re-census.** The first pass tried to make Fig 5 :62-63 carry the whole cannot-recognize verdict. It strains: that line governs the *direction* of the question (an unbound preference), while Fig 6 :27 governs *reachability* (depth versus absence), and Fig 8 :37 governs *self-certification of a limit*. Re-census separates three objects. Fig 5 is now the limit row of the census, not a verdict.

**Strain 2, resolved by re-census.** "Underdetermined" was initially read as a pure negation. It is also a comparison. Re-census: ¬ refuses "the answer is fixed" (Operators table :53-57); ⋛ compares constraints with unknowns (:47-51). Fig 12 :112 keeps the two distinct. Both figure lines govern different quantities, so neither is strained.

**Strain 3, no strain.** Fig 6 says import is the only operator that moves the wall, while Fig 13 :132-133 says the system can decide reachability before searching. Different operations: one asks whether φ is in the closure, the other asks how the closure changes. No conflict.

**Canonical usage check.** `FRAMEWORK/reference/FIGURES_README_canonical.md` states the figures *"outrank everything else in the repo"* and that *"the quotes are the authority, not this summary."* It gives the canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* It also says *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, which is the rule applied to Strains 1 and 2. `THE_FORMULA.md` step 7 separates SEARCHED (is it in here and unfound?), INWARD (extend the instrument) and OUTWARD (import): the three must not be collapsed, and F3/F4 are about the second and third, not the first.

### Retraction and confirmation log

| earlier reading | status after the checks |
|---|---|
| "The answer is simply no, an AI cannot detect underdetermination." | **Retracted.** It averaged D1 and D2. Split into a yes for relative reachability and a no for world-level certification (F1, F2, F3). |
| "The system can detect underdetermination" (first pass, F2 only). | **Narrowed.** It detects non-reachability relative to a declared Γ. It cannot certify world absence (F3). |
| Fig 5 :62-63 used as the decisive cannot-recognize line. | **Strained and re-censed.** It governs the direction/preference limit, not reachability. Now the limit row, not a verdict. |
| "Underdetermined is a ¬ claim." | **Incomplete, corrected.** It is ¬ plus ⋛. Both are recorded; neither is smoothed into the other. |
| Treating the direction row as a fourth domain. | **Refused.** No nameable anchor inside the frame, so by the census rule it is a limit, not a loop. |
| "A search that finds nothing proves nothing" read as "AI can never know anything about absence." | **Narrowed.** It forbids a world-level proof of absence, not a relative reachability report. Fig 13 :134 makes "unreachable" a verdict, not a silence. |

### Updated verdict

The question is a union. For a system that exposes its library, relative underdetermination is decidable before search and returns a shape. World-level underdetermination is not certifiable from inside a non-sealed frame: depth, genuine absence, and a closed channel look the same. The recognition claim must be brought to an outside frame as a characterised residual, with the refuter written first. Strains after re-census: one live type question (⋛ compares quantities; whether a missing constraint counts as a quantity at the relevant level needs an instrument), named and not hidden.
