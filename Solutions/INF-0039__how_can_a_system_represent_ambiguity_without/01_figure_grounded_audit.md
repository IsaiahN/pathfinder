# Figure-grounded audit: representing ambiguity without premature collapse

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape, `gap` on the universal algorithm. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (every figure quote below is verbatim from it), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, the eight essays, and the public sources listed in `10_source_ledger.csv`.

---

## 0. The residual under audit

> **Question:** How can a system represent ambiguity without prematurely collapsing it into a single interpretation?

Restated in effect terms. A signal `o′` arrives. The library Γ holds a set of candidate molecules φ_1 ... φ_k, each a bonded arrangement of held atoms, each generating a prediction `Γ(b,a)` and therefore a residual `R_s = |Γ(b,a) − o′|` on the slot it addresses. "Ambiguity" is the state in which more than one φ_i carries positive live mass `R⁺_s` on the same slot and none has been settled. "Premature collapse" is any operation that reduces that set to one before the ground pays: aggregation across slots (Fig 1 :22), promotion of a convention to a verdict (Fig 10 :47), or treating a room's internal agreement as a verdict (Fig 7 :35).

What an answer would look like, bound as an ordinary term (formula "Direction" step): *a per-slot ranked set of held candidate molecules, each with its residual and provenance, with every narrowing cut kept reversible, so that the ground, not agreement, selects one.* That is the shape. The question asks how a system can hold that shape without collapsing it.

The pre-registered refuter is written in §3, before the conclusion in §6.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry and scale.**

- **Arity:** the representation relation is one-to-many (one slot, k candidates). It is not a single-valued map from signal to interpretation. It carries a disjunction bond (∥, *"either suffices; not both required"*, Operators :19), a comparison bond (⋛, ranking by residual), and the unary negation operator ¬ for refusing a candidate without deleting it (Operators :58). Three-place if the frame is included: (signal, candidate, ground contact).
- **Symmetry:** candidate interpretations are *not* relabelings. Under Fig 12 :92, *"Symmetry is what decides whether an arrangement is a new thing."* Two candidates sharing every atom but joined by different bonds are different substances whose notation cannot tell them apart (Fig 12 :95). The *naming* is symmetric (k! spellings, one term) while the *arrangement* is not. Collapse is often exactly the error of treating isomers as spellings.
- **Scale:** within one slot (micro, the live residual), within one room (meso, variation among candidates), and across rooms with differing closures (macro, where the ground votes). Fig 4 :21 governs the crossing: *"The membrane is the boundary between the sizes, and the rule about what may cross it."*

**One line per domain: actors / currency / anchor. A domain with no nameable anchor is not admitted.**

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Signal-and-slot | the observation o′, object slots s, instruments/percepts | residual `R_s`, live mass `R⁺_s` | `o′`, *"what actually happened"* (Symbols table) | admitted |
| D2 Library-and-candidates | atoms, seven bonds, negation, candidate molecules φ_i, closure(Γ) | `|φ|` and `left(R,φ)`, reach | settlement against the ground (Fig 5 :32) | admitted |
| D3 Frames-and-independence | frames with differing closures, evidence pools | independence, surplus | the ground, never agreement (Fig 2 :29) | admitted |
| D4 Convention-and-meaning | seats, conventions, shared meanings | conventions (no truth value) versus verdicts (truth value) | the seam made statable (Fig 10 :17) | admitted |
| X1 "the true meaning" as a property floating free of any ground | none nameable | none | none | **not a domain yet** |
| X2 "the most likely reading" as a sole cause | probabilities | posterior mass | absorbed into D2 as a ranking filter (Fig 9 :60) | absorbed |

**Partition or union.** D1 and D2 are a partition boundary (per-slot signal versus library composition). D3 and D4 are a **union**, not a partition: variation inside one frame (Fig 7 :33) and disagreement between differing frames (Fig 8 :45) are two overlapping conditions that both produce multiple live candidates, with different instruments and different anchors. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Verdicts are kept per domain and never averaged. One lever (say, raising confidence) clears the region where only one condition holds and leaves the intersections standing.

**Dependency order (Fig 3).** Perception (D1) → vocabulary of bonds and negation (D2) → objective "keep candidates live until settlement" (D4) → planning SEARCHED / INWARD / OUTWARD (D3) → learn and carry the lineage. Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The link most likely broken is between vocabulary and objective: a system can name the candidate ingredients but has no term for "hold all of them until the ground settles one". Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* That is the middle link with no instrument, and it is where premature collapse lives.

---

## 2. Figure census (bearing and verdict, with verbatim quotes before conclusion)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; aggregation is signal loss | collapse = averaging; keep `R_s` indexed |
| 2 The Ground | anchor, independence, correlation valence | agreement cannot decide; conventions are the legitimate use of agreement |
| 3 Dependency Chain | vocabulary/objective link has no instrument | intermediate collapse is a reading of nothing |
| 4 The Membrane | lossy cross-scale transform, round trip `R_T` | a one-line reading drops constraints; measure the gap |
| 5 Mint Pipeline | three guards, MDL bargain, settling, fifth bin | candidates are held; refusal is a mint, not a deletion |
| 6 Closure / Reachability | only import moves the wall; inward vs outward | new interpretations are imports with a source gate, not relabelings |
| 7 Room Chain | variation inside, selection between | ambiguity is variation; the ground selects |
| 8 Union Surplus | undirected union is mute; residual first | differing closures give surplus only when a residual is described |
| 9 Leave / Arrive | three ranges, ranked reversible cuts, ground decides | narrowing is not settling; keep every cut reversible |
| 10 Ground Maintainer | convention makes the gap statable; declared meaning is not grounded | the convention/verdict distinction is the whole mechanism |
| 11 The Habitat | valence relative to residual; introduction not exclusion | no standing preference for one reading survives a change of residual |
| 12 The Bond | isomers, priced arrangement, unary negation | multiple readings are isomers; without ¬ a system can only accumulate |
| 13 Minimum Viable Set | routes, lineage, shape not name, unreachable is a verdict | the system reports a shape and a stop, not a universal algorithm |
| Operators table | ∥, ⋛, ¬; seven tests, unary amendment | the operator set can write ambiguity and refusal |
| Symbols table | `R` is per slot and is the aim; the ground is the anchor | binds the residual and the anchor used throughout |

Strained readings are named in §5, not smoothed over.

---

## 3. Findings F1 to F9

### F1 — Ambiguity is per-slot live mass, not a global probability (decisive for D1)

Fig 1 :19:

> **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22:

> **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :23:

> **"The ground enters as the only metric."**

Symbols table on `s`: *"R is measured per slot, never as a single global number."* And on `R`: *"It is the aim, not only the error signal, and it is always a slice"*.

**Reading.** An ambiguous signal does not produce one residual; it produces a vector of residuals indexed by candidate interpretation on the addressed slot. Premature collapse is literally the aggregation step the figure forbids: a global "best reading" number near zero can coexist with one live slot still carrying positive mass, and Fig 1 :13 names that a legal state: *"a global R near zero with one live slot residual is a legal state"*. A system that reports one interpretation has thrown away the only signal that says where to look. Mode `specified`. Status **triangulated** (Fig 1 per-slot indexing plus Symbols table `R`/`s` definition, low overlap between the agent loop and the notation table).

**Refuter.** Show a case where two readings on one slot carry positive `R⁺_s` and the system's correct behaviour is to report exactly one with no ranked remainder, verified against a ground that pays.

### F2 — The candidates are isomers, not spellings (decisive for D2)

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :5:

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :95:

> **"Two entries with an identical ingredient set are not variants of one thing."**

Operators :15 on the symmetric bond `+`: *"swap the operands. Does the meaning change? No."* Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."*

**Reading.** The same signal can be composed into several molecules over the same held atoms with different bonds. An ingredient list cannot tell them apart; *"nothing signals that anything was lost"* (Fig 12 :16). So the representation of ambiguity is not a list of labels attached to one reading; it is the typed arrangement, with the bond recorded, for each candidate. Collapse by treating candidates as notational variants is the "flat formula" failure: *"the ingredients are recorded and the arrangement is not"* (Fig 12 :14). Fig 12 :97 anchors the claim outside the framework: *"This is not an analogy. Chemistry hit it first: silver fulminate and silver cyanate have the same composition and different properties"*.

Mode `general` for the structural claim, `specified` for a given signal. Status **triangulated** (Fig 12 bond pricing plus Fig 13 :121, *"Different routes can arrive at the same substance"*, and the Operators symmetry test; low overlap).

**Refuter.** Exhibit two candidate readings with identical atoms and identical bonds whose downstream behaviour is nonetheless the same in every ground test, so the distinction the figure charges for carries nothing.

### F3 — Agreement is efficient for a convention and disqualifying for a verdict (the mechanism)

Fig 2 :40:

> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

Fig 2 :41:

> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"**

Fig 2 :35:

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

**Reading.** This pair is the hinge of the answer. A system can hold multiple interpretations without collapsing them by demoting agreement to a **convention**, a shared meaning that makes the disagreement statable, while denying it verdict standing. The moment a convention decides which reading is correct, it has stopped being a convention (Fig 10 :47: *"a convention that decides an outcome has stopped being one"*). So "represent without collapse" has a precise figure-derived meaning: keep the candidates in the record as competing meanings; let the ground, and only the ground, settle one. Agreement among the candidates is the product of the convention, not a vote. Mode `specified` on the mechanism. Status **triangulated** (Fig 2 correlation-valence pair plus Fig 10 :16-17; different figures, different objects).

**Refuter.** Show a system in which agreement about a reading legitimately settles that reading while the agreeing frames demonstrably draw on one evidence pool, and where the result still ranges correctly against an independent ground.

### F4 — A declared meaning is not a grounded one: the convention makes the bug statable

Fig 10 :16-17:

> **"the convention does not fix the bug"**
> **"it makes the bug statable"**

Fig 10 :18:

> **"a declared meaning is not a grounded one"**

Fig 10 :49:

> **"Declaring a meaning does not ground it."**

Fig 10 :13: *"two frames, one field, no shared reading"*; :15: *"a disagreement nothing can state is not yet a defect"*; :19: *"install what can be violated"*.

**Reading.** The apparent paradox in the question, that a system must hold incompatible readings without choosing, is dissolved by the seam. Two frames in one field with no shared reading produce a disagreement nothing can state. That is not yet a defect. The seat authors a convention, not a verdict: a shared meaning that makes the incompatibility statable and violable. This is exactly how a system represents ambiguity without resolving it: it installs a vocabulary in which the multiple readings can be written down and ranged separately against the ground. It does not fix the bug; it makes the bug statable. Mode `specified`. Status **triangulated** (Fig 10 seam plus Fig 2 :41 convention valence).

**Refuter.** Exhibit a multi-reading state that the system can range against the ground correctly with no shared meaning across the seam, so no convention is load-bearing.

### F5 — A refutation is a negation, not a subtraction: nothing is deleted

Fig 12 :140:

> **"A vocabulary that cannot refuse can only accumulate."**

Operators :58:

> **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**

Fig 6 :42:

> **"What is recorded only grows. What is reachable is derived, and it can fall."**

Fig 5 :55:

> **"What it removes is not a term but a term's standing to be composed over."**

`THE_FORMULA.md` step 3: *"NOTHING IS EVER DELETED, and the reach falls because something was ADDED."*

**Reading.** To hold ambiguity and later narrow it, the vocabulary needs the unary operator ¬, which is not one of the seven bonds (Fig 12 :139: *"So the operators divide by arity, and this figure describes the binary ones."*). With only `+` the system can accumulate readings and cannot write that any of them is wrong. When the ground pays for one reading, the others are refused, not erased: they stay in the record with their residuals and provenance, and the reach falls because a refusal was added. That is what makes the held set safe to compute and the collapse reversible. Mode `general` (operator arity), `specified` (the narrowing step). Status **triangulated** (Fig 12 amendment, Operators amendment, Fig 6 reach amendment; three distinct statements of one structural fact).

**Refuter.** Show a system that correctly drops an interpretation after a ground reading without any operator equivalent to ¬, and whose record can still distinguish never-held from held-and-given-up.

### F6 — Narrowing is not settling; keep every cut ranked and reversible

Fig 9 :40:

> **"so keep every cut ranked and reversible"**

Fig 9 :42:

> **"narrowing gets you close, the ground decides"**

Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

Fig 9 :39: *"cheap because the new atom shrank the space"*; :37: *"elimination compounds here, and only here"*.

**Reading.** Once the residual has selected a smaller candidate set, elimination is cheap and irreversible-looking, but the figure requires each cut to stay ranked and reversible, because a wrong cut removes the answer and speeds up. So the correct operational form of "do not collapse prematurely" is not "never narrow"; it is "narrow with every cut recorded, ranked and reversible, and stop calling it decided until the ground pays". Fig 5 :70: *"A term is settled when the ground pays for it. A term is usable when something can compose over it."* Settling is necessary and not sufficient. Mode `specified`. Status **triangulated** (Fig 9 narrowing plus Fig 5 settlement amendment).

**Refuter.** Exhibit a narrowing step after which a previously held reading cannot be reinstated without new growth, while a later ground reading shows the kept reading was wrong.

### F7 — Multiple readings can arise inside one frame or between frames; this is a union

Fig 7 :33:

> **"variation inside, selection between"**

Fig 7 :35:

> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

Fig 8 :45:

> **"Two frames together reach what neither reaches alone."**

Fig 8 :49:

> **"Two frames that overlap almost completely are one frame wearing two names."**

Fig 8 :21: *"nothing was aimed; the union is mute"*.

**Reading.** The census was right to keep D3 and D4 as a union. Within-room variation (several candidates in one library) is cheap and useful for a convention but says nothing about the world. Between-room difference (low-overlap frames ranged against one anchor) is where a surplus exists, but only if a residual is described first: Fig 8 :53, *"Residual first, frame second."* An undirected union of agreeing frames adds nothing, so simply adding more interpretations does not improve the representation; independence is the parameter. Mode `specified`. Status **triangulated** (Fig 7 selection-between plus Fig 8 independence; two figures, different mechanisms).

**Refuter.** Show that adding a tenth reading drawn from the same evidence pool as the first nine buys as much discriminating power as a reading from a genuinely differing closure, measured against the same ground.

### F8 — No standing preference for one reading survives a change of residual

Fig 11 :49:

> **"An actor's valence is relative to the residual, not a property it carries."**

Fig 11 :51:

> **"No standing list of good actors survives a change of residual."**

Fig 10 :71:

> **"The room composition is a function of the question."**

**Reading.** A temptation in "avoid premature collapse" is to prefer the simpler, more probable, or more familiar reading as a standing rule. The figures refuse that. Valence is relative to the residual; when the question moves, the room should change (Fig 10 :72: *"When the question changes, the room should change."*). Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Simplicity and probability are filters for the budget, never witnesses for which reading is right. Mode `specified`. Status **triangulated** (Fig 11 valence plus Fig 10 room-function).

**Refuter.** Exhibit a standing ranking of interpretations that remains correct across two documented changes of residual and two different grounds, with no re-census.

### F9 — The literal universal algorithm is a `gap`, reported as unreachable rather than silence

Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

Fig 13 :134:

> **"Unreachable is a verdict here, not a silence,"**

Fig 8 :39:

> **"So a search that finds nothing is never a proof of absence."**

**Reading.** After a genuine re-census of all domains, no figure line returns: an algorithm that decides how long to hold ambiguity, a numerical threshold for collapse, a universal representation format, or a rule that picks which bond each candidate must use. What the figures return is a **shape**: per-slot live residuals, isomer candidates with recorded bonds, a convention that makes the disagreement statable, ranked and reversible cuts, the ground as the only selector, and the refusal operator. Asking for more is asking the framework to name what it says it cannot: Fig 13 :133, *"what it returns is a shape rather than a name"*. This is `gap` of the shape-not-a-name kind, not underivable in principle and not a failure of search. Mode `general` on the limit. Status **single-source for the limit** (Fig 9 :32, Fig 13 :133, canonical README; corroboration only).

**Refuter.** Produce a figure line, quoted verbatim from `03-FIGURES_TEXT.md`, that selects a holding time, a collapse threshold, or a universal ambiguity encoding. None was found after the census in §1 and the re-census in §5.

---

## 4. What survives, with modes

| claim | mode | figure |
|---|---|---|
| Ambiguity registers per slot as several live residuals, never one global number | `specified` | Fig 1 :19, :22; Symbols `s` |
| Candidate readings are isomers over held atoms; the bond carries the difference | `general` structure, `specified` instance | Fig 12 :117, :5; Fig 13 :121 |
| Agreement is efficient for a convention and disqualifying for a verdict | `specified` | Fig 2 :40, :41 |
| A convention makes the disagreement statable without grounding it | `specified` | Fig 10 :16-17, :18, :49 |
| Narrowing is allowed only with ranked, reversible cuts; the ground alone settles | `specified` | Fig 9 :40, :42; Fig 5 :70 |
| Refusal is a negation that adds to the record and lowers the reach | `general` | Fig 12 :140; Fig 6 :42; Operators :58 |
| Within-frame variation and between-frame difference are a union, not a partition | `specified` | Fig 7 :33, :35; Fig 8 :45, :49 |
| No universal algorithm, holding time or collapse threshold is returned | `gap` | Fig 9 :32; Fig 13 :133 |

---

## 5. Strains, re-census and corrections

**S1, apparent conflict Fig 2 :40 versus Fig 2 :41.** One says agreement is disqualifying for a verdict, the other says it is efficient for a convention. Re-census: they govern two different quantities, verdict weight and shared meaning. No strain after the distinction is made; it is the mechanism of the answer, not a defect.

**S2, apparent conflict "represent ambiguity" versus Fig 12 :104 (*"A settled molecule becomes an atom for whatever composes over it."*).** One might read this as a licence to settle early so composition can proceed. Re-census: Fig 12 :104 governs what may be composed over; it does not licence settling before the ground pays. Fig 5 :69 (*"settling is necessary for a term to be composed over, and it is not sufficient"*) is the governing line. Not strained; different objects.

**S3, the world source that appears to conflict.** Wikipedia's *Ambiguous image* says the majority of research has theorised that mental images cannot be ambiguous. Read literally that would conflict with the claim that a system can represent ambiguity. Re-census: that entry governs the phenomenal content of a mental image, a different object from the library Γ and the record of a candidate set. Blake and Tong (2008) describe multistable perception as two interpretations competing while the stimulus is physically invariant, which is the shape claim at the perceptual scale. The conflict is returned to the census and does not flip the verdict. It is recorded in `09_watson_answer.md` WORLD.

**S4, live type question.** Fig 8 :19 requires a described residual before a frame is sought, but the system in D2 does not yet have a way to describe the residual of an unresolved reading without already holding a candidate. The framework's answer is to bind the sought-for shape as an ordinary term (formula "Direction", Fig 5 :65), which is a discipline rather than a step. Marked `specified`, not hidden, and named in `08` and `09`.

**Correction to my own first pass, kept visible.** I initially read "a vocabulary without ¬ can only accumulate" as a ban on holding multiple readings. That was wrong. The ban is on *refusing* one without ¬, not on holding several. Holding several is exactly what ∥, isomerism and the convention provide. The corrected reading is in F5 and is recorded here rather than silently substituted.

---

## 6. Pre-registered refuter (written before the conclusion)

The shape claim is refuted if any of the following holds:

1. Two candidate readings on one slot carry positive `R⁺_s` and the correct ground-verified behaviour is to report exactly one with no ranked remainder (breaks F1).
2. Two readings with identical atoms and different bonds are behaviourally identical under every ground test, so the bond carries nothing (breaks F2).
3. Agreement among frames sharing one evidence pool legitimately settles a reading about the world (breaks F3).
4. The system ranges multiple readings correctly with no convention making the disagreement statable (breaks F4).
5. A reading is dropped without a refusal operator and the record still distinguishes never-held from held-and-given-up (breaks F5).
6. A narrowing cut is irreversible and the later ground shows the kept reading was wrong (breaks F6).
7. A new reading from the same evidence pool buys as much as one from a differing closure (breaks F7).
8. A verbatim figure line is produced that selects a universal collapse threshold, holding time or encoding (breaks F9).

If any fires, the shape is wrong or incomplete and the claim is withdrawn or narrowed. Until one is run, nothing here is `grounded`.

---

## 7. Recommendation

1. Lead with F3 and F4. The convention/verdict distinction is the answer's centre; the rest is supporting structure.
2. State mode on every claim and label F9 a `gap`, not a failure (F9, F3).
3. Send the generator (the residual, the shape and the eight refuters), not a recording of a conclusion. Fig 4 :22: *"Only methods cross up. Only head starts come down."*
4. Keep the pure-reading instruments and the world corroboration separate. The essays share the framework author's evidence pool; the perception and logic sources are genuinely lower overlap, but they corroborate the mechanism shape, not this derivation (see `09`).
5. Do not ask for agreement. Ask what would refute the shape. Fig 2 :35 and Seat Map :163 both forbid the alternative.

---

## 8. Canonical usage check and retraction log

Two local sources were read after §§1 to 5 and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"* then stops and records the lineage. *"Indiscernibility is not identity."*
- `THE_SEAT_MAP_Field_Guide_amended.md`: *"Bring a characterised residual, never the source."* Seat 4 must not hold the interiors; Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."* Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

| earlier reading | status after the canonical check |
|---|---|
| F1 "global probability is the collapse" | **Narrowed.** The figure forbids aggregation across slots; it does not forbid a probability ranking inside a slot. Ranking is a filter (Fig 9 :60), not a witness. |
| F2 "isomers carry the difference" | **Canonically confirmed.** Fig 12 :97 anchors isomerism in chemistry; the README returns a shape, which is what the bond difference is. |
| F3 "agreement is disqualifying" | **Narrowed and preserved.** It is disqualifying for a verdict only; Fig 2 :41 keeps it for conventions. Both halves retained. |
| F5 "¬ bans holding multiple readings" | **Retracted.** See §S4 correction above. The ban is on refusing without ¬, not on holding several. |
| F9 "no algorithm is a failure to find one" | **Refused as a failure.** Unreachable is a verdict here, not a silence; the limit is shape-not-a-name, so the `gap` is claimed positively. |
| S3 world conflict | **Returned to census, not flipped.** Mental image content versus library record are different objects. |
| "the figures settle the question" | **Refused.** The canonical usage rule and *The Recursive Self-Improvement Trap* both bar it. This is a simulated derivation and cannot settle anything. |

### Round trip note

The condensation of the figures into the shape in §4 is lossy. Three constraints are dropped if the shorthand is treated as identity: per-slot indexing (Fig 1 :19), the convention/verdict distinction (Fig 2 :40-41), and the ¬-refusal requirement (Fig 12 :140). Fig 4 :30 requires the round trip to be measured: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* `11_audit.md` records `R_T` qualitatively as nonzero and enumerates what does not survive.

### Final verdict

The shape survives every re-census: ambiguity is a set of per-slot, ranked, reversible, isomer candidate molecules held under a convention that makes the disagreement statable, with the ground as the only selector and negation as the refusal operator. The specific universal algorithm is a declared `gap`. No strain remains hidden; one is live and named (S4). This is `specified` on the domains, `general` on the structural shape, `gap` on the algorithm, and not `grounded`.
