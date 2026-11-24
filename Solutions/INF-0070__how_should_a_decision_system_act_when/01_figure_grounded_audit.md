# Figure-grounded audit: how a decision system should act when the needed information cannot be had

**Mode of this document: `specified`, not `grounded`.** It states a shape of right action and the instruments that would settle it. `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources of authority.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, with internal line numbers, cited as `Fig N :line`), `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`. World sources are secondary corroboration only and are listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

A decision system has belief `b`, action `a`, and observation `o'`. Its residual is `R = |Γ(b,a) − o'|`, indexed by slot `s` (Symbols table). The question asks what act is licensed when `o'` is either (i) obtainable only with more budget, or (ii) not obtainable at any resolution because nothing has ever registered it.

Stated as an effect: the system must choose while a term that would discriminate the options is absent from its closure. The question is not "which option has the highest expected utility" (that assumes the discriminating term is held). It is "what does a system do at the moment the discriminating term is missing." Two candidate answers bound the space:

- **A:** manufacture the missing discriminator inside the current frame (assign a prior, pick a criterion, act as if the gap were closed), then choose.
- **B:** classify the missing discriminator, report the classification as a verdict, keep the channel to the ground open, and refuse false premises before adding terms over them.

Each leads somewhere different. A spends the system's independence and can compose over an ungrounded term. B keeps the reach recoverable and records what would reverse the stop. The derivation below decides between them from the figures.

---

## 1. Domain census, before choosing any figure line

**R by arity, symmetry, scale.**

- **Arity:** the question is a **union**, not one question. "Unobtainable" contains at least two conditions with different instructions: unreachable-at-this-budget, and underivable-in-principle / genuine absence. Fig 8 :40-43: *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."* A single rule cannot govern both without loss, so the residual must be unbundled before any act is chosen.
- **Symmetry:** `R` is indexed per slot, not symmetric under aggregation. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."* So a low aggregate is not evidence that nothing is owed.
- **Scale:** one loop closes within a frame's closure (Fig 6), and one move crosses between frames (import, Fig 6 :14). The act happens at the loop; the remedy for a missing atom may be cross-scale. These are different quantities and must not be read against each other.

**One line per domain: actors / currency / anchor.** A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1, the decision loop | Γ, b, a, o', R, the selector, the mint pipeline | residuals and description-length cost | the ground, the only metric (Fig 1 :23) | yes |
| D2, reachability and instruments | instruments already returning something, the wall `closure(Γ)`, external source | access, resolution, imported atoms | anything returning a reading at any resolution (Fig 6 :34) | yes |
| D3, verification and multi-frame checking | frames, anchors, seats, rooms | independence, agreement, cost of being wrong | the ground, which does not update (Fig 2 :33) | yes |
| D4, world decision-under-ignorance research | analysts, criteria (maximin, regret, Hurwicz, robustness) | decision rules, robustness, regret | a decision problem's ground (well-calibrated choice) | yes, but secondary |

**Partition or union.** D1 to D3 are a **partition by office within one system** (loop, instrument, checker). D1/D2 versus D4 is a **union**: the world criterion frame overlaps the loop frame in what it tries to do and differs in what it may claim. Overlaps are compounds with their own loop, so D4 is never averaged into D1's verdict.

**Dependency order (Fig 3).** Settle the reachability classification first (D2), because D1's act depends on it. Refuse false held terms before minting (Formula step 2). Describe the residual before choosing a frame (Fig 9 :27-28). Keep the per-slot signal before ranking acts (Fig 1). A reading taken below a broken link is not a weak reading, it is a reading of nothing: Fig 3 :22 *"A step whose input never arrives cannot be diagnosed, only its predecessor can."*

Strain test applied during the census: the phrase "fundamentally uncertain" in the question reads as if it named one condition. It does not. It spans budget-limited depth and genuine absence, which Fig 6 :27 says look the same from inside. That is a census result, not a strain on a figure line.

---

## 2. Figure census, quoted verbatim before concluding

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | per-slot residual, ground is the only metric | no averaging; no ground reading here |
| 2 The Ground | anchor must not update, independence | agreement cannot substitute for a ground |
| 3 Dependency Chain | ordered by dependency, reading below the break | classify reachability before choosing an act |
| 4 The Membrane | lossy round trip, methods cross up | a condensed rule carries a gap `R_T` |
| 5 Mint Pipeline | four missing-kinds plus a fifth wrong-kind | a false premise owes a refusal, not a new term |
| 6 Closure / Reachability | import is the only wall-mover; no proto-instrument | depth and absence split; absence has no edge to extend |
| 7 Room Chain | no last room; agreement is variation | more agreeing rooms do not settle the act |
| 8 Union Surplus | underivable versus unreachable-at-budget | the union is unbundled before search |
| 9 Leave / Arrive | verdict / lookup / narrowing; filters not witnesses | report a kind of thing; never let a budget filter hand a verdict |
| 10 Ground Maintainer | ground does not decay, channel does | keep the channel; verifier cannot hold interiors |
| 11 The Habitat | capability is agent-and-habitat; introduce, never subtract | internal refinement alone does not change contact |
| 12 The Bond | arrangement is the substance; a goal is a comparison | a named criterion is a different molecule, not a new atom |
| 13 Minimum Viable Set | unreachable is a verdict; shape not a name | the report is a verdict and a shape |
| Operators / Symbols | R is the aim, indexed per slot; ground is the anchor | no act is verified by a gate |

---

## 3. Findings

### F1: The missing-information condition is a union, and must be unbundled before acting (general, triangulated)

Fig 8 :40-43:

> **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."**
> **"the remedy is more search, not another atom"**

Fig 9 :54: **"when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :57: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

The question conflates them. If the discriminator is in the closure and unfound, the instruction is SEARCHED (Fig 6 :49-50: distribute the search, keep searchers independent). If no atom can hold it, the instruction is INWARD or OUTWARD (extend an instrument that already returns something, or import a frame whose closure predicts the shape). Applying "search harder" to genuine absence, or "import a new rule" to a budget gap, are the two errors this split prevents. Fig 8 :42: **"Importing against a budget limit adds an atom that was not needed."**

**Refuter:** one decision rule that handles both conditions with identical instructions and no loss, demonstrated on a problem where the atom is known to be in the closure and on one where it is known to be absent.

**Status:** `general`, triangulated across Fig 8 and Fig 9 (different figures, different moves: closure wall versus leaving and arriving). Both are framework-internal, so this is within-framework triangulation, not two independent world witnesses.

### F2: Search first, but no amount of search manufactures the missing atom (specified, triangulated)

Formula step 7 asks SEARCHED first because it is cheapest and the other two assume its answer. Fig 8 :32: **"no search, however long, adds an atom."** Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

So the system may not conclude "unobtainable" from a failed search alone. It may conclude "not found at this budget in this closure," which is a different report with a different instruction. The honest stop is a shape plus a lineage, not a silence and not a proof.

**Refuter:** an instance in which search confined to a fixed closure added a genuinely new atom rather than a rearrangement of held atoms.

**Status:** `specified`, triangulated across Fig 8, Fig 9, and Formula step 7.

### F3: Depth and absence look the same from inside; absence has no edge to extend (specified, single-source for the no-edge claim)

Fig 6 :27: **"some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."** Fig 6 :34: **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."** Fig 6 :40: **"What is unavailable is a sensor for something that has never registered anywhere, at any resolution. That is the whole of it."**

This bears directly on "unobtainable or fundamentally uncertain." The system cannot tell the two apart from inside. What it can test is whether anything, at any resolution, is already returning something that fails to resolve (Fig 6 :34). If nothing is, INWARD has no purchase and the only remaining move is OUTWARD, characterized in effect terms before the frame is chosen (Fig 9 :27-28). The figure explicitly limits this rule: it is not a theory of what instruments could exist, only of what is already returning something.

**Refuter:** a case in which information that had never registered anywhere at any resolution became available by refining an existing instrument alone, with no new atom imported and no different frame contacted. That would break the "no edge" claim.

**Status:** `specified`; depth/absence split triangulated with Fig 8 :40-43; the no-edge claim is `single-source` (Fig 6) and is marked as such.

### F4: The right report is a verdict, not a manufactured answer (specified, triangulated; decisive for the prescriptive question)

Fig 13 :134: **"Unreachable is a verdict here, not a silence,"** Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."** Fig 9 :32: **"you get a kind of thing, never the answer itself."** Fig 13 :140: **"not only what was concluded, but what could have been concluded, and what would have had to be true for the answer to differ."**

A decision system should therefore report three things when it cannot read the discriminator: what was concluded under the current closure, what could have been concluded if one atom were added, and what would have had to be true for the conclusion to differ. That is exactly what a hard decision needs and rarely gets. Manufacturing a name from inside the closure (option A in §0) is the error this forbids: naming the missing thing would mean already holding it.

The "no last room" finding reinforces this. Fig 7 :6 names **"the limit: no last room"**; :30 says *"every room closes some of the gap; no finite number of them ever arrives"*; :35: **"A room's agreement is variation, not a verdict."** A terminal decision rule that closes the question forever is the final room the figures rule out.

**Refuter:** a decision system that, with the ground unreadable, can name the missing primitive from inside its own closure without an import, and whose name is later settled by the ground without any new instrument or frame.

**Status:** `specified`, triangulated across Fig 13 and Fig 9; the no-last-room support from Fig 7 is a third, low-overlap figure.

### F5: Keep the residual per slot; do not let an aggregate swallow the live signal (general, triangulated)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Symbols table :43: **"R is measured per slot, never as a single global number."** Fig 1 :13: **"a global R near zero with one live slot residual is a legal state."**

Under uncertainty the temptation is to collapse to one expected value and act. The figures forbid it: a global near-zero with one live slot is a legal, non-inert state, and averaging is how the signal that says where to look disappears. The act must preserve the live slot, not the comforting aggregate.

**Refuter:** a decision system whose aggregate is near zero while one slot's residual is live, and which still chooses well on the ground without ever attending to that slot.

**Status:** `general`, triangulated across Fig 1 and the Symbols table (same framework, different documents).

### F6: Buy independence in proportion to the cost of being wrong (general, triangulated)

Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool."** Fig 7 :35: **"A room's agreement is variation, not a verdict."**

When the ground cannot be read, the system's only protection is frames that draw on different evidence. Adding agreeing frames from one pool buys spelling, not search (Fig 6 :53: *"searchers drawing on the same evidence are one searcher wearing many names"*). This is a budget rule, not a verdict rule, but it changes what the system should do next: commission a different frame rather than another copy.

**Refuter:** a case where adding more agreeing frames drawn from one evidence pool increased ground-settled decision quality.

**Status:** `general`, triangulated across Fig 2 and Fig 7.

### F7: When a held premise is false, the owed term refuses it rather than explaining around it (specified, single-source across two framework documents)

Fig 5 :53: **"refuted: a term we hold is wrong; a term is owed that says so."** Fig 5 :52: **"the term it owes refuses another rather than explaining a gap."** Formula step 2: *"a term held is false; what is owed is a refusal, not an explanation."*

Part of "fundamental uncertainty" is produced by a premise the system still holds. Then the right act is negation, not a new probability distribution over the premise's consequences. Fig 5 :55: *"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."* Operators table :73: *"A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."*

**Refuter:** a case in which adding an explaining term, rather than refusing the false premise, correctly removed a residual that persisted and did not trend down.

**Status:** `specified`. Marked `single-source` in the strict sense: Fig 5 and THE_FORMULA are one framework, not two independent witnesses.

### F8: Keep the channel to the ground; internal refinement alone does not change contact (specified, triangulated)

Fig 10 :24: **"the ground does not decay, the channel does."** Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."** Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

So under unobtainable information the system should act to preserve contact: keep a proto-instrument that returns something, keep a seat that ranges against the ground separately, and introduce a differing frame rather than polishing the current one. Fig 10 :52: *"Bring a characterised residual, never the source."* The output that travels is the effect description, checkable by anyone, not the framework's interior.

**Refuter:** a system that improved its decision under unobtainable information by internal refinement alone, with no new contact to the ground and no contact with a differing frame.

**Status:** `specified`, triangulated across Fig 10, Fig 11 and Fig 6.

### F9: Import is the only wall-mover, but a wrong atom costs more than starting from primitives (specified, triangulated)

Fig 6 :14: **"the only operator that moves the wall."** Fig 6 :24: **"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."** Fig 8 :42: **"Importing against a budget limit adds an atom that was not needed."**

Import is licensed only after F1 classifies the gap. For budget-limited gaps the remedy is more search; for genuine absence it is a provenanced import with a source gate and a shadow test (Fig 8 :9-13: *"source gate: provenance"*, *"shadow test: explains a gap"*). Fig 8 :50-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."*

**Refuter:** a case where importing an atom into a problem known to be merely budget-limited reduced total cost below more search.

**Status:** `specified`, triangulated across Fig 6 and Fig 8.

### F10: Filters price the budget; witnesses settle the verdict (general, single-source)

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** Fig 1 :24-27: frame-internal quantities such as *"coverage, and compression achieved"* and *"predicates minted, and credibility accrued"* do not count: *"A frame cannot score itself with a quantity it also produces."*

A cost estimate, a tier, or a confidence score may decide how much search to buy. It may not decide whether the act was right. Only the ground settles that (Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."*).

**Refuter:** a decision system in which a low cost estimate is treated as proof that the chosen act is correct.

**Status:** `general`, single-source (Fig 9 plus Formula, same framework).

### F11: What survives, and what is a gap

| claim | mode | figure | status |
|---|---|---|---|
| Split the missing-information condition before acting | `general` | Fig 8 :40-43, Fig 9 :54 | triangulated |
| Search cannot add an atom; a failed search is not proof of absence | `specified` | Fig 8 :32, :39, Fig 9 :44 | triangulated |
| Depth and absence look the same from inside; absence has no proto-instrument | `specified` | Fig 6 :27, :34, :40 | split triangulated, no-edge single-source |
| Report unreachable as a verdict and give what would reverse it | `specified` | Fig 13 :134-135, :140, Fig 9 :32 | triangulated |
| Keep the live per-slot residual | `general` | Fig 1 :19, :22, Symbols :43 | triangulated |
| Refuse a false premise before minting over it | `specified` | Fig 5 :52-53, Formula step 2 | single-source |
| Keep contact; buy independence proportional to cost | `specified` | Fig 10 :24, Fig 11 :40, Fig 2 :42 | triangulated |
| Import only after classification, with provenance | `specified` | Fig 6 :14, :24, Fig 8 :42, :50-52 | triangulated |
| Selecting **which named criterion** (maximin, regret, Hurwicz, robustness) is right here | not claimed | no figure line selects among them | **gap after re-census** |

The last row is a genuine `gap`, not a silence. The figures narrow the shape of right action and forbid a manufactured name; they do not bind a particular decision rule. Fig 9 :32: **"you get a kind of thing, never the answer itself."** The named criteria in the world frame are imports with their own provenance, to be tested against a ground before they are composed over. "Unreachable is a verdict, not a silence" applies to them too.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the framework's Direction discipline, the sought shape was bound in `README.md` before this audit was written. The shape is refuted if any of the following holds:

1. One rule governs budget-limited and in-principle missing information with identical instructions and no loss (breaks F1).
2. Search confined to a fixed closure adds a genuinely new atom, or a failed search is shown to be a proof of absence (breaks F2).
3. Information that never registered anywhere becomes available by refining an existing instrument alone, with no import and no different frame (breaks F3's no-edge claim).
4. A system names the missing primitive from inside its closure and the name is settled without new contact (breaks F4).
5. An aggregate near zero with one live slot is shown to be safe without attending to that slot (breaks F5).
6. Adding agreeing frames from one evidence pool improves ground-settled decisions (breaks F6).
7. An explaining term, rather than a refusal, removes a persistent flat residual (breaks F7).
8. Internal refinement alone changes contact (breaks F8).
9. Importing against a budget limit beats more search (breaks F9).

If any fires, the corresponding finding is withdrawn and the shape is redrawn. Until one is run, no part of this is `grounded`.

---

## 5. Recommendation

1. Lead with F1 and F4: unbundle, then report a verdict and a shape. Do not open with a decision rule (F11 gap).
2. Preserve the per-slot residual through the decision; never present a single aggregate as the whole state (F5).
3. Treat a false premise with negation, not with more terms (F7).
4. Buy a second frame when the cost of being wrong is high; do not buy agreement (F6).
5. Ship the generator, the derivation and the refuter, not the conclusion. Fig 4 :23: *"upward: a method that can be reapplied. Never the recording of a particular success."*

---

## 6. Canonical usage check

Two sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"the quotes are the authority, not this summary"*; a reading that makes one contradict another *"has misidentified its domain, not found a flaw"*; the framework says *"what a missing thing would have to look like (a shape, not a name)"* and then stops at the limit of the instruments, *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground and does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not escalation.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F4 "report unreachable as a verdict" read as "do not act" | **Retracted as an overreading.** Fig 13 :134 governs what the system may *report* about a missing primitive. It does not forbid acting. Acting under ignorance is governed by F8 (keep contact) and F5 (preserve the live slot). Different quantities, no strain. |
| "fundamentally uncertain" treated as one condition | **Retracted.** The canonical re-census rule sends it back to the census; it is a union (F1), not a single state. |
| F7 read as "the system must never add a term under uncertainty" | **Retracted.** Fig 5 sorts a gap by what is *wrong* into a fifth kind. Refusal applies only when a held term is false and its residual persists flat; genuine novelty still mints. |
| "shape, not a name" applied to the world criteria | **Narrowed.** The README's phrase governs a *missing* primitive. Maximin and regret are held terms in the world frame. Calling them imports is a provenance claim, not a ban on naming held atoms. |
| F3 no-edge claim | **Confirmed and bounded.** Fig 6 :40 says exactly what is unavailable and adds *"That is the whole of it"*; :36-37 says the rule is about instruments, not theory. No extension to theory was made here. |
| F11 named criterion is a gap | **Canonically confirmed.** Fig 9 :32 and the README's *"a shape, not a name"* both return a kind of thing, never the answer. |

### Strain check after re-census

- **F4 (report unreachable) versus F9 (import moves the wall).** Not strained. F4 governs the report when no import is available; F9 governs the move when one is. Sequential, not contradictory.
- **Fig 6 :34 (no proto-instrument) versus Fig 6 :38 (Neptune calculated before seen).** Not strained. Re-census: :38 governs theory preceding its instrument; :34 governs a sensor for something that never registered. Different objects; the figure itself separates them under "What this rule does not say."
- **After re-census: no hidden strains.** One named gap (the named criterion), one single-source claim (the no-edge rule), both marked where they occur.

---

## 7. Final verdict of the audit

The figures decide between option A and option B in §0. **Option B survives; option A does not.** The right act under unobtainable information is a discipline: split the condition, search where search can pay, refuse false premises, keep the live slot and the channel to the ground, buy independence, and report unreachable as a verdict with the shape of what would close it. The framework does not name the decision criterion and does not settle it; that remains an honest gap to be closed by a ground, not by a preference. Mode: `specified` on the discipline, `general` on the structural splits, nothing `grounded`.
