# Figure-grounded audit: How can a system distinguish stable knowledge from temporary facts and context-specific assumptions?

**Mode: `specified`, not `grounded`.** It states what would have to be measured in a real memory system. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** The Recursive Self-Improvement Trap (essay, fetched 2026-11-23): LLM output is *"an approximate answer/output"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. No memory system was built and no measurement was taken. See `05_what_shape_means.md` section 7.

**Sources.** The canonical text at `FRAMEWORK/reference/03-FIGURES_TEXT.md` and the usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, both reopened this session. `THE_FORMULA.md`. Six substantive world sources from cognitive science, animal behaviour, AI engineering, and database engineering, all opened 2026-11-23 and listed in `10_source_ledger.csv`. World sources corroborate only; they never decide.

---

## 0. The claim under audit

The question is about a *discrimination instrument*, not about a storage technology. A system holds a library Γ of terms. It must decide, per term, whether the term is:

- **stable knowledge:** a generator that can be re-applied in a new situation and composed over,
- **a temporary fact:** a recording of one occasion that paid once and may not pay again,
- **a context-specific assumption:** true only inside the closure of one frame, invisible as an assumption until the frame changes.

The residual is the following. These three are **indiscernible from the stored artifact alone**. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Fig 12 :5: *"The bond is the rest of the information, and it is the half nothing was recording."* Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."* So the question is not *what is stored* but *what the system can legitimately do with what it stores*, and the answer must be an instrument, not a label.

**E, in effect terms.** Let Γ(b,a) predict an observation for slot s, let o' be what happened, and let R = |Γ(b,a) − o'| per slot. A term is stable iff R stays small for that slot after the producing occasion is gone, across a second slot, and across a second frame, with a measured round-trip gap. A global R near zero does not settle this: Fig 1 :13 *"a global R near zero with one live slot residual is a legal state."*

**What an answer would look like, written down and bound before the run** (Formula, "Direction"): *"a four-instrument discriminator with per-slot verdicts and a measured round-trip gap, whose verdict is refusable by the ground."* This is the sought-for shape. Writing it down here binds it as an ordinary term so it accrues a residual like anything else (Fig 5 :62: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."*).

---

## 1. Figure census

I described R by arity, symmetry and scale before selecting any line, then one line per domain with actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

### 1.1 R by arity, symmetry, scale

- **Arity.** Three-way (stable / temporary / context-bound), and it is also indexed by slot. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* A term's verdict is a function of a term, a slot, and a frame, not of a term alone.
- **Symmetry.** Not symmetric. Each class is a different directed relation between a term and the ground: paid repeatedly, paid once, paid only here. The relevant bond ⋛ is ordered, not a symmetric join (Fig 12 :87: *"a threshold relation between two quantities"*). Swapping a term's origin and its content does not preserve the verdict.
- **Scale.** Within one scale (a term's life in Γ) and across scales (Fig 4 membrane, abstraction T_A and concretisation T_E, measured by R_T). A term stable at one level need not survive a crossing.

### 1.2 Domain census (actors / currency / anchor)

| # | domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|---|
| D1 | term life and settlement | terms φ, atoms, bonds, Γ, slots s | per-slot R, settlement, composition | **the ground**: Fig 5 :32 *"then check it against the ground"* | partition of what composes across the two kinds |
| D2 | membrane and scale transform | one agent, population, methods, recordings, head starts, replays | reapplicability, round-trip gap R_T | **the measured round trip**: Fig 4 :30 *"So take the round trip and measure the gap"* | partition with a lossy transform |
| D3 | frame and closure | frames, closures, imports, provenance records | independence, surplus, provenance | **a differing closure plus the ground**: Fig 6 :23 *"The bound moves only on contact with a frame whose closure differs"* | union of overlapping conditions |
| D4 | channel and maintenance | anchor, channel, seats, percepts, transients, pooled readings | anchor reachability | **keep the anchor reachable**: Fig 10 :29 | partition of what is a verdict versus a loss of touch |

All four have a nameable anchor, so all four are domains. D1 and D2 share the word "ground" but different instruments: settlement by a measurement versus a round-trip measurement across a scale. D3's anchor is a second closure, which is why it cannot be collapsed into D1. D4's anchor is the reachability of the anchor itself, an operational condition, not a truth condition.

### 1.3 Partition or union

**Union.** The question bundles at least two axes with different anchors: persistence through time (D1, D2) and frame dependence (D3). Fig 9 :5: *"are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :54: *"when the split lands on a union rather than a partition, unbundle before you search again."* A term can be settled and composable in one closure and an assumption in another, so the three classes are not mutually exclusive under one test. The honest move is to run four loops and keep four verdicts.

### 1.4 Order by dependency (Fig 3)

Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

1. **D4 first**, anchor reachable. Without a channel nothing else can be measured. Fig 3 :5 perception link.
2. **D1 second**, settlement. A term must be settled before it can be composed over (Fig 12 :106).
3. **D2 third**, round trip. A settled term must still be a method, not a recording, to cross a scale.
4. **D3 fourth**, closure provenance. A term that survives (1) to (3) can still be an assumption bound to one frame.

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The missing instrument in this question is usually link 3, vocabulary/objective: having a word for "stable" is not a test for what counts as stability here. That is what the four-instrument shape supplies.

### 1.5 Figure census table

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | *"The residual is indexed by object slot, not aggregated."* | verdicts per term-slot, never averaged |
| **2 The Ground** | anchor must not move; agreement is worthless inside one pool | the stability certificate must be outside the frame that uses it |
| **3 Dependency Chain** | order by dependency; middle link has no instrument | four loops in dependency order; the missing instrument is link 3 |
| **4 The Membrane** | *"Only methods cross up. Only head starts come down."* | stable = generator; temporary = recording |
| **5 Mint Pipeline** | *"A term is settled when the ground pays for it. A term is usable when something can compose over it."* | two conditions, not one; growth of Γ is not growth of reach |
| **6 Closure / Reachability** | *"No frame escapes its own closure."* | context-bound terms are closure-bound; record grows, reach can fall |
| **7 Room Chain** | *"agreement compounds, evidence does not"* | more agreeable checkers do not make a term stable |
| **8 Union Surplus** | *"Convergent derivation and adopted import look identical in the contents"* | provenance is the discriminator, not content |
| **9 Leave / Arrive** | *"are not one hard question but several well-formed ones"* | split before searching; filters are not witnesses |
| **10 Ground Maintainer** | *"the ground does not decay, the channel does"* | transients and pooled readings are channel failures, not verdicts |
| **11 The Habitat** | *"capability is a property of agent-and-habitat"* | stability is a contact property, not a term property |
| **12 The Bond** | *"The bond is the rest of the information"*; settled molecule becomes atom | origin and bond decide class, not ingredient list |
| **13 Minimum Viable Set** | *"Unreachable is a verdict here, not a silence"* | the numeric cutoff is a `gap`, reported as unreachable |
| **Operators table** | ¬ refuses a claim; − removes an operand | a temporary fact is usually refused, not deleted |
| **Symbols table** | `R_T` measures what the coarser description cannot hold | the round trip is the measurement, not an assumption |

Strained readings are named as such below, not smoothed over.

---

## 2. Findings

### F1. There is no single test; the question is a bundle that must be split (structural, `general`)

Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*
Fig 9 :54: *"when the split lands on a union rather than a partition, unbundle before you search again."*

A test based on persistence alone will call a context-specific assumption that happens to hold for a long time "stable". A test based on coherence alone will call a well-integrated temporary recording "knowledge". They are not the same axis, and they have different anchors (D1/D2 versus D3). The Library of Babel essay says the same thing in prose: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

**Refuter:** a single test that classifies all three correctly across all four domains, with one anchor, and that stays correct when the frame changes while the ground is held fixed. Until such a test is produced, the split stands.

### F2. Stable knowledge is a method, a temporary fact is a recording (triangulated, `specified`)

Fig 4 :22: *"Only methods cross up. Only head starts come down."*
Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*
Fig 5 :44: *"a term that explains one occasion perfectly"* is named as a failure of the acceptance bargain. Formula step 6: *"PROMOTE generators cross up, playback never does."*

A generator is something that can be re-applied; a recording pays for one occasion and cannot generate a new success. This is the primary discrimination, and it is not a content test: the two have the same atoms. Fig 12 :5: *"The bond is the rest of the information, and it is the half nothing was recording."*

**Refuter:** a term that is a recording of a single occasion, with no re-applicable structure, that is later shown to produce a novel success in a new situation without a new mint. If that happens, the method/recording distinction as stated fails.

### F3. Settlement is necessary but not sufficient; usability is a second, independent condition (triangulated, `specified`)

Fig 5 :70: *"A term is settled when the ground pays for it. A term is usable when something can compose over it. Those are two conditions and this figure names one."*
Fig 5 :72: *"a library that grows is not a reach that grows."*
Fig 12 :106: *"a system that cannot settle has one level however large its library."*

This is the sharpest figure-grounded answer to "what should a machine keep". Keeping more terms is not the same as keeping more usable knowledge. A system can hold a term that the ground paid for and still not be able to compose over it, because whether a settled term composes is *"a fact about how it composes, not about what it paid"* (Fig 5 :71). So a memory that grows monotonically can lose reach. Fig 6 :42: *"What is recorded only grows. What is reachable is derived, and it can fall."*

**Refuter:** exhibit a system whose reach grows exactly as fast as its library, for all libraries, with no refusals and no change of composition rules. That would collapse the two conditions into one. Named as a strain candidate, resolved by re-census in section 5: record and reach are two quantities, not one.

### F4. The round trip is the measurement; without it the system navigates by dead reckoning (triangulated, `specified`)

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
Fig 4 :31: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold."*
Symbols table: `R_T` is *"The gap between what was sent up and what came back down"*.

Operational reading for a memory system: abstract the term to a rule, concretise it in a new situation, and measure what the abstraction dropped. A stable abstraction has a small, measured, non-zero `R_T`. A temporary recording has no stable abstraction to send up, or fails on return. The gap is not driven to zero; driving it to zero is the dead-reckoning error, because it pretends the lossy transform was lossless.

The Decoding Tacit Knowledge essay gives the human analogue and an instrument: *"The size of a correction tells you how much of the knowledge is still tacit for that learner, and it should shrink as their experience builds. That makes tacit transfer measurable: watch the trend in correction size, not the count of lessons given."* Trend in correction size is a per-slot residual trend, the same quantity Fig 5 :59 uses to choose a term to refuse: *"a term whose residual PERSISTS AND DOES NOT TREND DOWN."*

**Refuter:** a round trip whose gap is exactly zero for a term that was subsequently shown to have lost information in the abstraction, or a term whose gap never shrinks with repeated contact yet is judged stable by the ground. Either breaks the instrument.

### F5. Verdicts are per slot; aggregation destroys the only signal (triangulated, `general`)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."*

A term can be stable for one object and a temporary fact for another. A single "this fact is stable" flag on a term is an aggregation across slots and is exactly the failure this figure names. The system must keep a vector of verdicts indexed by slot, and a global score near zero is not evidence that all slots are stable.

**Refuter:** a system whose per-slot residuals are all zero for a term while the term fails when re-applied to a previously unseen slot. If that is impossible by construction, the per-slot requirement is satisfied by that construction; if it occurs, the per-slot instrument as described is insufficient and needs a novelty channel (Fig 5 :12 *"new: extend perception, aim the probe here"*).

### F6. Context-specific assumptions are closure-bound and identified by provenance (triangulated, `specified`)

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."*
Fig 10 :62: *"A ruling carries provenance like an atom."*
Fig 10 :65: *"Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that."*

A context-specific assumption is a term whose justification is a premise of one closure. It travels with its origin tag. The discriminator is not the proposition's content but the record of where it came from and which frame it was derived in. This is also the reason agreement between two systems is not evidence of stability: if they share the premise, they are one frame wearing two names (Fig 8 :48: *"Two frames that overlap almost completely are one frame wearing two names."*).

Important limit, preserved: provenance shows legitimacy, not truth. A perfectly recorded assumption can still be false. So provenance is a *necessary* discriminator for the class "context-specific", not a verdict about the content.

**Refuter:** two propositions with identical provenance records, identical content, and identical closure, one of which is stable and the other context-specific. That would break provenance as the discriminator and send us back to the census.

### F7. The certificate must be an anchor: it must not move when the frame is pushed (single-source on the anchor rule, triangulated with Fig 2 :37, `general`)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*

If a system's "stability" flag changes when the checking frame changes while the ground is held fixed, the flag was a frame opinion, not an anchor. And the anchor must be legitimate for this question: Fig 2 :37: *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* A benchmark score is an instrument for "does the model recall this string", not the anchor for "is this knowledge stable in the world".

**Refuter:** a stability certificate that changes under a frame swap while the ground measurement is identical, and that is nonetheless shown to settle the question. Named single-source: the anchor rule is argued in Fig 2, with Fig 2 :37 as an internal triangulation, not a second independent figure.

### F8. Transient, stale and pooled are channel failures, not verdicts (triangulated, `specified`)

Fig 10 :24: *"the ground does not decay, the channel does"*
Fig 10 :25: *"stale percepts, dropped transients, saturated metrics, pooled readings"*
Fig 10 :28: *"you have lost touch"*

A "temporary fact" in a real system is often not a false belief at all. It is a dropped transient, a stale percept, or a pooled reading that saturated a metric. Fig 10 :27: *"the output is not a verdict, it is"* followed by :28. The system must distinguish "this term is temporary" from "I have lost contact with the ground and my readings are stale". The second is an operational alarm, not a knowledge classification, and it is the failure that hides inside the first.

**Refuter:** a system that correctly labels a dropped transient as temporary knowledge and is later shown to have had a fully reachable ground and a fresh percept at the time. Then the channel explanation is wrong for that case and the classification must be revised.

### F9. Independence, not agreement, is what makes the verdict mean anything (triangulated, `general`)

Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 7 :13: *"agreement compounds, evidence does not"*

Two checkers who learned the term from the same corpus are one witness. Asking a community whether a term is stable produces a convention, not a verdict. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* In this simulated run all four domains draw on one evidence pool, so their agreement is one pool talking. This is recorded honestly in `11_audit.md`.

**Refuter:** two frames with demonstrably disjoint evidence that agree on a stability verdict while the ground returns a residual that persists and does not trend down. That would be a genuine conflict sending us back to the census, not a correction to the verdict.

### F10. Refusal, not deletion: the temporary fact stays in the record but loses its standing (triangulated, `specified`)

Fig 6 :42: *"What is recorded only grows. What is reachable is derived, and it can fall."*
Formula step 3: *"NOTHING IS EVER DELETED, and the reach falls because something was ADDED."*
Fig 6 :45: *"a term cannot cycle in and out, because the refusal never leaves the record."*

This resolves an apparent strain. The system cannot simply forget temporary facts, because a store that deletes cannot tell never-held from held-and-given-up (Fig 6 :46). What it can do is add a term that refuses the temporary one's standing to be composed over. The reach falls because something was added. This is why temporary knowledge must be *marked*, not erased, and why a memory system that only accumulates is structurally unable to correct itself. Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."*

**Refuter:** a system that deletes a refused term and still distinguishes never-held from held-and-given-up without an external record. By Fig 6 :46 it cannot; if one is exhibited, the revision rule is wrong.

### F11. The sought-for discriminator is a preference until it is bound (single-source on the limit, `general`)

Fig 5 :62: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."*
Formula, "Direction": *"make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else."*

So the four-instrument shape in section 0 is not an answer; it is a commitment written down early so it can be refuted. Without this discipline a system can check the mechanism and never check whether it was looking for the right kind of thing.

**Refuter:** a derivation that checks the four instruments but never states what a failure of the overall aim would look like. That is the named defect, and this file's section 3 is the guard against it.

### F12. `gap`: the figures fix the shape, not the numerical cutoff (unreachable, `general`)

Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 13 :134: *"Unreachable is a verdict here, not a silence"*
Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

No figure line selects a duration, a count of contexts, or a numeric value of `R_T` below which a term counts as stable. Any such number would be a convention declared by the author, not a figure-derived result. The honest report is a `gap` of the unreachable kind: the shape is reachable, the cutoff is not, and naming one would be inventing an atom. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

**Refuter:** a figure line that does select a numeric stability threshold. A genuine re-census would then replace this `gap`. Until then, unreachable is recorded as the verdict.

---

## 3. Pre-registered refuter

Written before the conclusion, per the seat-map rule *"a falsifier written before the run is a design instrument, not only an honesty device."* The four-instrument shape claim is refuted if any of the following holds:

1. A term is settled by the ground and composable over **without** any re-application test, and later produces a novel success in a new situation (breaks F2, F3; Fig 4 :22, Fig 5 :70).
2. The stability certificate changes when the checking frame changes while the ground measurement is held fixed (breaks F7; Fig 2 :29).
3. A recording of one occasion survives the round trip with zero gap and is later shown to have lost information in the abstraction (breaks F4; Fig 4 :30).
4. Two frames with demonstrably disjoint evidence agree a term is stable while the ground returns a residual that persists and does not trend down (breaks F9; Fig 2 :40).
5. A single test classifies all three classes correctly across all four domains with one anchor, and remains correct under a frame swap (breaks F1; Fig 9 :5).
6. A figure line is found that selects a numeric stability cutoff (replaces F12's `gap`).

If any fires, the shape is wrong and the relevant finding is withdrawn. Until one is run, nothing here may be labelled `grounded`.

---

## 4. Recommendation

1. Run four instruments, not one. Keep the verdicts separate and never average them (F1, F5).
2. Keep the anchor reachable first (F8). A stale reading is an alarm, not a classification.
3. Mark temporary facts with a refusal; do not delete them (F10). The record grows, the reach can fall.
4. Measure `R_T`; do not assume it is zero (F4). Watch the trend in correction size per slot (F11).
5. Tag provenance and closure on every term. Convergence and import look identical in content (F6).
6. Buy independence in proportion to the cost of being wrong (F9). Two checkers from one corpus are one witness.
7. Publish the `gap` on the numeric cutoff (F12). Do not invent a threshold and call it figure-derived.
8. Fig 4 :25 again: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the discriminator, not a list of which facts were stable last Tuesday.

---

## 5. Canonical usage check and re-census

Two sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md` and its public copy `https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md` (fetched 2026-11-23): *"the quotes are the authority, not this summary"*; *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit, the framework says *"what a missing thing would have to look like (a shape, not a name)"* and then stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* Also: *"Indiscernibility is not identity."*
- `THE_FORMULA.md`: step 7 separates SEARCHED from INWARD from OUTWARD; mode rule stated above; step 5 *"A gate is not the ground."*

### Apparent strains, re-censused rather than smoothed

| apparent strain | re-census | result |
|---|---|---|
| Fig 5 :72 "a library that grows is not a reach that grows" versus Fig 6 :42 "what is recorded only grows" | two quantities: record (monotone) and reach (derived, can fall). Different objects. | not strained; F3 and F10 both stand |
| Fig 4 :25 "a recording carried upward looks like knowledge" read as banning all storage | Fig 4 :22 permits recordings to be stored as head starts downward; what is banned is passing a recording off as a re-applicable method upward | retracted in part, see log |
| "temporary fact" and "context-specific assumption" treated as one class | different anchors: ground persistence (D1/D2) versus closure (D3). Fig 9 :54 unbundles unions | split, F1 and F6 both stand |
| F8 channel failure versus F2 recording | D4 is an operational alarm about reachability of the anchor; D2 is a classification of a term's re-applicability. Different anchors | not strained; four-domain census holds |
| Desire to give a numeric cutoff | canonical "shape, not a name" and Fig 9 :32 forbid it | recorded as F12 `gap`, not silently guessed |

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "A recording carried upward looks like knowledge" means never store a recording | **Retracted in part.** Recordings may be stored as head starts (Fig 4 :24 *"something that makes the next search cheaper"*). What is forbidden is promoting a recording to a method. F2 is narrowed accordingly. |
| "temporary facts and context-specific assumptions are the same failure" | **Retracted.** Re-census separates the persistence axis from the closure axis. F1 split and F6 are the surviving forms. |
| "a stability score would settle the question" | **Refused.** A single score is an aggregation across slots (Fig 1 :22) and a filter handed a verdict (Fig 9 :60). |
| "the system should learn which facts are stable and then delete the rest" | **Refused.** Fig 6 :46: a store that deletes cannot tell never-held from held-and-given-up. F10 replaces it with refusal. |
| F3 settlement/usability distinction | **Canonically confirmed.** Fig 5 :70 names two conditions and Fig 5 :72 makes the growth point. |
| F4 round trip as measurement | **Canonically confirmed.** Fig 4 :30 and the Symbols `R_T` definition. The exemplar's round-trip discipline is carried over. |
| F12 numeric cutoff | **Confirmed as `gap`.** "Unreachable is a verdict here, not a silence." Reported, not hidden. |
| Simulated standing of this audit | **Confirmed and declared.** The RSI trap essay refuses self-validation; no ground reading was taken. |

---

## 6. Round-trip note carried to `11_audit.md`

- **Sent up (x):** the four-domain census and the four-instrument shape.
- **Abstraction (T_A):** "a stable term is settled, composable, re-applicable with measured gap, and provenance-tagged".
- **Concretisation (T_E):** an actual memory system with slots, a ground channel, a promotion gate, and provenance records.
- **R_T is nonzero.** What tends to drop on the way down: the per-slot indexing (collapsed to one global flag), the refusal marker (replaced by deletion), the round-trip measurement (assumed zero), and the closure tag (assumed universal). Each drop is enumerated in `11_audit.md`; none is smoothed.

**Final status of this audit:** `specified`, ungrounded, candidate. The shape survives; the numerical cutoff does not exist in the figures and is reported as `gap`. Strains after re-census: **none hidden, two named and resolved above, one `gap` declared**.
