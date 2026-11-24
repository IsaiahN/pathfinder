# Figure-grounded audit: how should machines combine formal reasoning with intuitive, approximate, or context-sensitive judgments?

**Mode of this document: `general` on the barrier findings, `specified` on the architecture shape, `gap` on the named architecture.** `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, and the world sources in `10_source_ledger.csv`. All opened this session.

---

## 0. The residual, in effect terms

A machine holds a formal library Γ: symbols, atoms, typed bonds, a proof checker. It faces a slot `s` where the ground returns an observation `o′` that Γ fails to predict or compose. The candidate term `φ*` is outside the reach:

> Fig 6 :8: *"not composable: REACHABILITY fails"*
> Fig 9 :6: *"the verdict: is φ* in here at all?"*
> Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

So `R = |Γ(b,a) − o′|` per slot, not a global average. At the same time, a second frame, a learned model drawing on a wide, tacit, context-sensitive evidence pool, registers structure in that slot that Γ cannot name. The question "how should machines combine the two" is therefore not about speed or average accuracy. It is this: how can the registered-but-unnameable structure be brought into a form the ground settles, without either pretending Γ already had it or accepting the intuitive frame's own self-report as a verdict?

Two collapses are named by the figures before any theory is chosen:

- **Pure formalism.** The wall does not move from inside. Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*
- **Blended intuition as a soft prior inside Γ.** Fig 8 :4-5: *"collapse 4: the blend"*, *"→ vocabulary, never an atom"*; Fig 8 :14: *"their union adds nothing."* Agreement inside one pool is the pool talking (Fig 2 :18-21).

**What an answer would look like, bound as an ordinary term before the run.** Formula, "Direction": *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."* The shape bound here is: *a rule for coupling two independent frames to one immovable ground such that a fast frame may propose terms, a slow frame may refuse them, and the coupling is measurable.* That shape is refutable by the pre-registered refuter in section 3.

---

## 1. Domain census (before any figure line is chosen)

### 1.1 Arity, symmetry, scale

- **Arity.** A composition among three frames (formal Γ, approximate frame, ground) plus a residual indexed by slot. At least three operands and one error signal. A two-place reading (machine, output) loses the ground and the residual, so it is rejected. The bonds required are an ordered one (methods cross up, head starts down, Fig 4), a comparison one (is φ* in the closure, Fig 9 :6), and an import (Fig 6 :14).
- **Symmetry.** The two machine frames are symmetric in rank and asymmetric in role. Fig 13 :4-5: *"There is no order of rank here. The two kinds are in lockstep"*, *"and no member of the pair is senior to the other."* Neither is senior, yet one proposes and one settles. Independence is a property of the pair, not of either member (Fig 2 :31).
- **Scale.** Three scales are in play: the single inference loop, a population of frames or rooms, and the membrane between them (Fig 4 :1-3). The residual is intrinsically cross-scale because an unnameable register at one scale becomes a candidate term at another.

### 1.2 Domains, one line each (actors, currency, anchor)

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Formal frame | Γ, atoms, bonds, verifier | `|φ|` cost, reach, settlement | a proof checker that does not move when the frame argues (Fig 6 :6, Fig 10 :22) | admitted |
| D2 Approximate / context frame | learned model, percepts, weighting `w`, tacit evidence pool | prediction residual against observation, speed, context sensitivity | perceptual contact with a task outcome; it registers but *"cannot comment on the source"* (source essay) | admitted |
| D3 Combination seat / membrane | import operator, ground maintainer, source gate, shadow test | provenance, independence, round-trip gap `R_T` | the ground, which does not update (Fig 10 :22-24) | admitted |
| D4 The ground | measurement, experiment, counter, verifiable reward | `R` | itself; *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| X1 "Intuition as noise to be eliminated" | a fast guess | none distinct from D2 | none nameable outside D2 | not a domain yet; absorbed, valence relative to residual (Fig 11 :49) |
| X2 "Human approval as the anchor for machine reasoning" | a rater | preference | only when the question is about people (Fig 2 :36-38) | absorbed into D4 as one fallible instrument, with its limit declared |

### 1.3 Partition or union, and dependency order

**Union, not partition.** D1/D3 and D2/D4 are two compounds; their overlap is itself a compound with its own loop. Fig 9 :54-57: *"And when the split lands on a union rather than a partition, unbundle before you search again."* *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

**Dependency order** follows Fig 3 :4-15: perception, vocabulary, objective, planning, learn and carry. This question lives at the middle link. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 12 :114-115: *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* The formal frame holds a dictionary; what it lacks is the grammar that says what would count as progress in a context-sensitive slot.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | no ground reading here |
| 2 The Ground | triangulation vs mirror; anchor must not update; human judgment only an instrument here | governs D3 and D4 |
| 3 Dependency Chain | the middle link has no instrument | governs why the question is hard |
| 4 The Membrane | only methods cross up, only head starts down; measure the round trip | governs D3 |
| 5 Mint Pipeline | three guards; a preference is invisible to its frame | governs the pre-run binding |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs D1 and D2 |
| 7 Room Chain | agreement compounds, evidence does not | governs outreach, not the derivation |
| 8 Union Surplus | blend adds no atom; independence is one quantity read twice | governs the refusal of the blend |
| 9 Leave / Arrive | describe the residual first; narrow, then the ground decides | governs method order and the `gap` |
| 10 Ground Maintainer | verifier cannot reconstruct the claim; bring the residual, never the source | governs D3 |
| 11 The Habitat | capability is agent-and-habitat; valence is relative to the residual | governs X1 |
| 12 The Bond | a vocabulary of atoms cannot name a route; settled molecules become atoms | governs the "what is combined" derivation |
| 13 Minimum Viable Set | lockstep without rank; closed set, unbounded arrangements; unreachable is a verdict | governs the honest stop, not six physical terms |
| Operators / Symbols | `R` is the aim; the ground is the anchor | no `R` was omitted |

---

## 3. Findings, with verbatim lines and refuters

### F1 — The residual is a REACHABILITY failure, not a speed or accuracy problem (`general`)

> Fig 6 :8: *"not composable: REACHABILITY fails"*
> Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*
> Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

A formal frame searching harder inside Γ cannot manufacture the missing structure. This is definitional, not empirical. It rules out "just add more symbolic rules" as an answer. **Refuter:** a system that produces a genuinely new atom inside Γ by internal composition alone, with the atom's provenance recorded and its reach gain measured.

### F2 — A blend is not a combination (`general`)

> Fig 8 :4: *"collapse 4: the blend"*
> Fig 8 :5: *"→ vocabulary, never an atom"*
> Fig 8 :14: *"their union adds nothing"*

The common engineering move, feeding a fast model's output as a soft prior into a symbolic layer, adds vocabulary. It does not add a primitive. Two frames whose closures overlap almost completely are one frame wearing two names (Fig 8 :48-49). **Refuter:** a blended single frame that adds a genuinely new primitive to the formal closure, passes a source gate and a shadow test, and whose reach gain survives an independent check.

### F3 — The combination is triangulation, not negotiation (`general`, triangulated: Fig 2 and Fig 10)

> Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
> Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*
> Fig 2 :46: *"Each frame is corrected by it separately, and what makes the correction sound is that neither frame can move it."*

The fast frame and the slow frame must each range against the same fixed ground separately. If they update on each other and then call the result settled, the arrangement is the coherent-drift collapse of Fig 2 :33-34. **Refuter:** an architecture in which the two frames update on each other's outputs and the joint output is accepted as ground-settled without a separate check by each.

### F4 — Independence is the currency of the combination (`general`, triangulated: Fig 2 and Fig 8)

> Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
> Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
> Fig 8 :47: *"Independence is one quantity read twice."*
> Fig 8 :50: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."*

The two frames must not draw on the same evidence pool. If they do, their agreement is one witness stated twice. The record of which terms were derived and which imported is the only thing that separates convergence from adoption. **Refuter:** two frames with measured high overlap whose agreement is used as a verdict and the ground pays for the joint claim.

### F5 — The formal frame is the verifier and must not author what it checks (`general`, triangulated: Fig 10 and Formula step 5)

> Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*
> Fig 10 :43: *"Soundness requires the checker to be unable to produce what it is checking."*
> Formula step 5: *"SETTLE — the ground settles it. Verified only by what pays. A gate is not the ground."*

This is the structural reason a self-certifying hybrid cannot work. World corroboration, low overlap with the AI field: Barbosa et al. separate proof finding from proof checking so the checker need not be trusted; the seL4 proof makes the kernel's behaviour checkable end to end. **Refuter:** a verifier that generates its own witness, checks it, and the claim still settles against an independent ground.

### F6 — The fast frame is an import source, and imports need a source gate and a shadow test (`specified`)

> Fig 6 :10: *"nature · corpus · peer frame"*
> Fig 6 :14: *"the only operator that moves the wall"*
> Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
> Fig 6 :24: *"A wrong atom costs more than starting from primitives."*
> Fig 9 :12: *"REACHABILITY fails"*

The role is general (a differing closure supplies the atom); which concrete frame plays it is `specified`. Every proposed import carries provenance and must explain a gap it was brought in for. A wrong import is worse than no import. **Refuter:** an import that crosses into Γ with no recorded provenance and no stated gap, and the reach still expands.

### F7 — Describe the residual first, frame second (`general`)

> Fig 8 :53: *"Residual first, frame second."*
> Fig 9 :27: *"describe it before you go looking, or"*
> Fig 9 :28: *"any frame you pick will seem to fit"*
> Fig 9 :30: *"your words are borrowed too, so describe the effect"*
> Fig 9 :31: *"rather than the cause"*
> Fig 9 :32: *"you get a kind of thing, never the answer itself"*

Choosing "neural plus symbolic" because it is fashionable, then finding a residual to fit, is the inversion the figures forbid. **Refuter:** show that the residual line alone, with no frame named, determines the chosen architecture.

### F8 — The membrane is two-way and lossy; measure the round trip (`general`, triangulated: Fig 4 and Formula step 6)

> Fig 4 :22: *"Only methods cross up. Only head starts come down."*
> Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
> Fig 4 :31: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold"*

What crosses up is a reusable method, never the recording of one success. The round-trip error `R_T = gap(x, (T_E ∘ T_A)(x))` is the honest report of what the fast-to-slow translation gave up. **Refuter:** a combination that copies outputs between frames with no round trip and claims transfer on the strength of the copy.

### F9 — The sought-for shape must be bound as an ordinary term before the run (`general`)

> Fig 5 :62: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."*
> Fig 5 :63: *"It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."*
> Fig 5 :65: *"make the sought-for shape an ORDINARY TERM."*
> Fig 5 :66: *"Write down what an answer would look like, bind it, and let it accrue a residual like anything else."*

An architecture optimized for "good reasoning" with no written, refutable operational definition has a preference the loop cannot check. The shape bound in section 0 is the remedy. **Refuter:** a system that reports its own reasoning quality with a quantity it also produces (Fig 1 :27: *"A frame cannot score itself with a quantity it also produces."*).

### F10 — The middle link is where this question lives (`general`)

> Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
> Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*
> Fig 12 :114: *"having terms for what a situation affords was taken for a dictionary and it is a grammar."*

Formal reasoning supplies a dictionary of atoms. Context-sensitive judgment supplies the grammar that says what counts as progress. Neither alone composes a route. **Refuter:** an instrument that measures the middle link directly and shows it already works; then the diagnosis changes, though the barrier findings do not.

### F11 — Human judgment is an instrument here, not the anchor (`specified`)

> Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*
> Fig 2 :37: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."*
> Fig 2 :38: *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*

This question is about machine capability, not about human preference. A human rater is one instrument among many and can be wrong on axes the rater does not measure. **Refuter:** a restatement of the question that is constitutively about human judgment; then human judgment becomes the anchor and this finding is withdrawn.

### F12 — Which specific architecture settles on the ground is a `gap`

> Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*
> Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*
> Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
> Fig 9 :42: *"narrowing gets you close, the ground decides"*

No figure line names a neural symbolic architecture, a system 1 / system 2 split, a routing rule, or a training schedule. After a genuine re-census there is no line that closes the residual at that level. The missing thing can be characterized in effect terms: a source-discriminating instrument that tells *the fast frame supplied a genuine new atom* from *the fast frame supplied a fast binding of an atom already held.* That is a shape, not a name.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. The shape claim of section 0 is refuted if any of the following holds:

1. A hybrid system produces a new atom in the formal frame by internal composition alone, no import, provenance and reach gain recorded (breaks F1).
2. Two frames with measured high evidence-pool overlap produce a verdict from their agreement and the ground pays (breaks F4).
3. A formal checkpoint reconstructs the claim it checks, checks it, and the claim still settles against an independent ground (breaks F5).
4. An import crosses with no source gate and no shadow test and still expands reach (breaks F6).
5. A specific architecture is derived from the figures and settles on a ground (closes F12 and supersedes this derivation).

Until one is run, no part of this package may be labelled `grounded`.

---

## 5. Recommendation

1. **Do not blend** (F2). Coupling, not merging, is the figure-compliant move.
2. **Hold two independent frames, both ranged separately against one immovable ground** (F3, F4). Measure overlap; if it is high, the frames are one witness.
3. **Let the fast frame propose; require provenance and a stated gap for every import into the formal frame** (F6). Refuse the import that cannot say what it explains.
4. **Let the formal frame verify, and keep it unable to produce what it checks** (F5). The verifier must be a different seat from the proposer.
5. **Bind the sought-for shape as an ordinary refutable term before the run** (F9), and **measure the round-trip gap** (F8).
6. **Declare the architecture-level answer a `gap`** (F12). Characterize the missing instrument, do not name an architecture the figures do not yield.
7. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the shape claim and the refuter, not a conclusion.

---

## 6. Canonical usage check (figures README and WATSON metalaws reading)

Two sources were read after sections 0 to 5 and they govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit, the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and then stops at *"the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
- `FRAMEWORK/figures/THE_FORMULA.md` and the WATSON metalaws reading: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. The figures are metalaws, so design questions are answered by derivation, not by escalation.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Applied Fig 13's six physical substrate terms to reasoning frames | **Retracted at domain level.** The six are physical states and structures. Fig 13 governs here only the lockstep/no-rank relation and the closed-set/unbounded-arrangement stop. A strain sent back to census, not smoothed over. |
| "Every intuition input is an import that moves the wall" | **Corrected.** A fast binding of an atom already held adds no atom (Fig 6 :21). Only the subset that supplies a genuinely new primitive is an import. F6 now says this. |
| "Shape, not a name" read as a ban on naming architectures | **Corrected.** The phrase governs a *missing* primitive. Naming an already-held atom is a binding, not a mint. F12 is a `gap` about a missing instrument, not a prohibition on implementations. |
| "Human approval is the anchor for machine reasoning" | **Retracted.** Fig 2 :36-38 makes human judgment an instrument for a correctness question. F11 now records this with its own refuter. |
| F1 idempotence, F3 triangulation, F4 independence, F5 verifier non-access | **Canonically confirmed** by the README's barrier-theorem and ground-not-agreement sections. |
| F12 `gap` | **Canonically confirmed.** *"Unreachable is a verdict here, not a silence."* The framework returns a shape and stops. |

### Strains sent to the log

| id | strain | handling |
|---|---|---|
| S1 | Fig 13 six terms applied to reasoning frames | re-census; Fig 13 restricted to lockstep and the honest stop. Resolved. |
| S2 | "import adds an atom" applied to every fast output | re-census; bindings separated from imports by provenance. Resolved. |
| S3 | Calling the combined output "the ground" | re-census; habitat updates, ground settles (Fig 11 :73). The anchor is the task outcome, not model agreement. Resolved. |

### Updated verdict

The shape survives: *a fast frame may propose, a slow frame may refuse, both range against one immovable ground, the coupling is measured by a round trip, and the sought-for shape is a refutable term bound before the run.* The blend, the vote, and the self-certifying architecture are refused. Strains after re-census: three, resolved. No figure quote in this file came from a summary.
