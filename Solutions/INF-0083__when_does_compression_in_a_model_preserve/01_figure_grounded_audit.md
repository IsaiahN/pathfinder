# Figure-grounded audit: when does compression preserve structure and when does it erase rare cases?

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the numerical ratio. It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."**

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too". But "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the exemplar folder, and the world sources listed in `10_source_ledger.csv`. All web sources opened 2026-11-23. Figure citations use `Fig N :line` against the local extract.

---

## 0. The question as a residual in effect terms

The question asks: given a model and a transform that reduces its description, what decides whether the remaining description still carries the structure that matters, and what decides whether the loss landed on the rare case the ground would have paid for?

Stated in effect terms:

- **Actors.** A finer model x, a coarser description T_A(x), a concretisation T_E that brings the coarse description back to a slot, object slots s, and the ground that pays or does not pay at each slot.
- **Currency.** Two distinct currencies. Bits price the description (Fig 12 :125-126). Actions price finding out whether it holds at a slot. The question's word `useful` mixes them until it is split.
- **Anchor.** The ground at the rare slot, not the compression ratio, and not agreement among readers that the compressed model looks fine.

What an answer would look like, bound as an ordinary term before the run (formula step `Direction`): a **separator**, a set of conditions such that a compression lands in the preserve class or the erase class at a named slot, each with a refuter. The framework returns a shape of that separator, not a universal safe percentage, and not a list of layers to keep.

Two options and what each leads to:

- **Option A, one dial.** There is a safe compression ratio. Leads to a frame-internal score being promoted to a verdict, which Fig 1 :25-27 disqualifies, and to the rare slot being hidden by aggregation, which Fig 1 :22 names as the failure.
- **Option B, union of conditions.** Preservation and erasure are different conditions with different anchors. Leads to per-slot verdicts, a measured round trip gap, and a declared gap where no figure line returns a number.

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry and scale

- **Arity.** R is the gap between what the compressed description predicts at a slot and what the ground returns there. It has slot arity, not global arity. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
- **Symmetry.** The transform is asymmetric. Going up throws detail away and cannot be undone by inspection; Fig 4 :28 "Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent." So preservation cannot be read off the artefact; it needs the round trip.
- **Scale.** The transform is cross-scale, between a finer and a coarser description, so it is a membrane question (Fig 4), not a within-scale optimisation (Symbols table: T_A and T_E run between scales, F runs at one scale).

### 1.2 One line per domain, with actors, currency and anchor

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1, the compression transform | finer model x, coarser T_A(x), concretisation T_E | round trip gap R_T in bits and settlement actions | the ground at the slot | cross-scale transform; what the coarse description cannot hold |
| D2, the representation | atoms in the library, seven bonds, negation | description length in bits | an established derivation that still goes through (Fig 13 :49) | partition of what is kept: atoms, bonds, or both |
| D3, the residual and the channel | object slots, live mass at a slot, rare cases | per-slot residual mass | the ground, which does not update (Fig 10 :24) | union of conditions; rare case as a live slot |
| D4, the score | the evaluator of the compression, the compressed model | compression achieved, frame-internal | ground payment at the slot | verdict versus filter; who is allowed to score |

No nameable anchor means it is not a domain yet. D4 would be a domain only if a non-updating instrument for `useful` exists; in this simulated run its anchor is borrowed from D1 and D3, which is recorded rather than hidden.

### 1.3 Partition or union

The question is a **union**, not a partition. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." A rare case that is also structurally decisive is not a harder common case; it is a compound with its own loop. One lever (raise bits, lower compression ratio) cannot clear both conditions.

### 1.4 Order by dependency (Fig 3)

1. Perceive the residual per slot (Fig 1 :19). Before that there is nothing to preserve.
2. Say what would count as progress in the model's own terms: which derivations must still go through after compression (Fig 3 :10, :11).
3. Decide what kind of structure is being kept: atoms, bonds, or both (Fig 12 :5).
4. Run the transform and measure the round trip (Fig 4 :30).
5. Settle at the ground per slot (formula step 5: "the ground settles it. Verified only by what pays. A gate is not the ground.").

Effort spent above step 4 arrives at a step that can still use it only if steps 1 and 2 were measured. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Strain test applied: a figure line that only fits with a strain governs another quantity and sends the census back. Two such moves are recorded in section 7, not smoothed over.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | per-slot residual; compression achieved is frame-internal | governs the rare case and disqualifies the self-score |
| 2 The Ground | anchor must not update; agreement is not a verdict | governs who may settle `useful` |
| 3 Dependency Chain | order by dependency; reading below the break is nothing | governs the order of the separator |
| 4 The Membrane | lossy cross-scale transform; measure the round trip | governs what compression is and how loss is reported |
| 5 Mint Pipeline | MDL bargain; cost plus leftover | governs the acceptance test for a compressed description |
| 6 Closure / Reachability | mint cannot add an atom; import moves the wall | compression inside the closure cannot add the missing rare case |
| 7 Room Chain | rooms do not add evidence | a panel of readers cannot certify preservation |
| 8 Union Surplus | low-overlap frames; silent blends | corroboration must be independent, not a pooled benchmark |
| 9 Leave / Arrive | union before partition; describe before looking | the question is a union; no universal number |
| 10 Ground Maintainer | channel decays, ground does not; dropped transients, pooled readings | governs the mechanism of rare-case erasure |
| 11 The Habitat | valence relative to residual; capability is agent-and-habitat | which cases matter changes with the residual |
| 12 The Bond | arrangement is the substance; bond priced; two currencies | governs what "useful structure" is |
| 13 Minimum Viable Set | set closed, arrangements not; load-bearing terms | governs loss of a term that carries a derivation |
| Operators table | symmetry decides a new term; bond price | governs over/undercharge for symmetric versus ordered structure |
| Symbols table | R_T as round trip; R as per-slot aim | governs the measurement of what was given up |

---

## 3. Findings

### F1 - `compression achieved` cannot score the compression (decisive for the verdict question)

Fig 1 :25-27:

> **"coverage, and compression achieved"**
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fig 1 :23: **"The ground enters as the only metric."**

The ordinary reading of the question treats the compression ratio as the measure of success. The figures forbid it. A frame cannot score itself with a quantity it also produces; the ratio is produced by the compression. The ground, at a slot, settles. This does not ban compression. It bans promoting the ratio to a verdict.

**Refuter:** exhibit a compression metric whose value does not move when the compressed model's own scoring rule is changed, and which predicts ground payment at a rare slot. If such a metric exists, F1 is wrong.

### F2 - A rare case is a live slot, and aggregation erases it

Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**. Fig 1 :20-21: **"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert one."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Symbols :38-40: R "is always a slice: what cannot be perceived yet is residual and simply cannot be read."

An aggregate benchmark reports a low global R. A rare case can still have positive mass at its own slot. The model looks preserved in the aggregate and has erased the case. This is the structural form of the world finding that quantization has "minimal impact on accuracy" while disparate impact on minority groups is exacerbated (Bellam and Kim 2025, section 9). The two are the same arithmetic read twice: one pooled reading, one per-slot reading.

**Refuter:** show that for a given compression, every aggregate-preserving transform also preserves positive mass at every rare slot. That requires an instrument, not an argument.

### F3 - Compression is a lossy cross-scale transform, and the loss must be reported as a measured gap

Fig 4 :27: **"The transform between scales loses information, and that is the point."** Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."** Symbols :77-78: R_T is "The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x)). Measures what the coarser description cannot hold."

So the honest report of compression is R_T, measured per slot. Treating a formula or a ratio as identical to the full description sets R_T to zero and is the dead-reckoning error Fig 4 names. The information bottleneck result that a short code should preserve maximum information about the target (Tishby, Pereira and Bialek 2000) corroborates the shape of the objective, but its distortion measure emerges from joint statistics and still has to be paid at each slot.

**Refuter:** exhibit a compression with R_T exactly zero at every slot of interest. If one exists, the round trip is unnecessary.

### F4 - A method survives compression; a recording of one occasion does not

Fig 4 :22: **"Only methods cross up. Only head starts come down."** Fig 4 :23: **"upward: a method that can be reapplied. Never the recording of a particular success."** Fig 4 :25-26: **"A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one."**

Compression preserves useful structure when what crosses is a generator: a rule, a binding, a method that can be reapplied to an unseen slot. It erases when what crosses is a recording of the training occasions. The lottery ticket result (Frankle and Carbin 2019) is the engineering instance: a sparse subnetwork, when its initialization is preserved, can be trained to test accuracy comparable to the original. What crossed was a trainable subnetwork, a generator, not a snapshot of outputs.

**Refuter:** show a compressed recording of one occasion that generates a correct, novel output at a slot never present in the original occasion. If it can, the method/recording distinction has no bite here.

### F5 - The arrangement is the substance; a flat formula loses it silently

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Fig 12 :14-16: **"the ingredients are recorded and the arrangement is not"**, **"nothing downstream can tell them apart,"**, **"and nothing signals that anything was lost"**. Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands. A recipe that names only its ingredients has recorded half of itself."** Fig 12 :94: **"The arrangement is the substance."**

This is the mechanism by which "useful structure" is lost while the compressed model reports no loss. Weight quantization and low-rank factorization that preserve a parameter count but discard the typed relation between components produce a flat formula. The artefact looks intact; the bond is gone; nothing signals the loss. Distillation partially resists this because its soft targets carry the relative structure among classes (Hinton, Vinyals and Dean 2015), which is bond information rather than ingredient information.

**Refuter:** show that behaviour at every slot is unchanged when all bond information is dropped from a compressed representation and only the ingredient multiset is kept. If behaviour is unchanged, the bond was not load-bearing there.

### F6 - Symmetric and ordered arrangements are priced differently; confusing them loses or invents structure

Fig 12 :92: **"Symmetry is what decides whether an arrangement is a new thing."** Fig 12 :93: **"Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."** Operators :59: **"Symmetry decides whether an arrangement is a new thing."** Fig 12 :43: **"one bond type costs nothing; seven cost 2.8 bits each"**

Compression preserves structure when it collapses the k! spellings of a symmetric bond into one term and charges an ordered bond correctly. It erases structure when it flattens an ordered bond into a symmetric one, merging what are different arrangements, and it invents structure when it charges for spellings that one symmetric term already covers. Both errors are silent in the artefact, which is why the round trip is required.

**Refuter:** show a compression that charges sequence over symmetric operands, or collapses an ordered bond, and still pays the acceptance bargain with no leftover at any slot.

### F7 - Removing a load-bearing term breaks an established derivation

Fig 13 :48: **"And the set is minimal: remove one and something stops."** Fig 13 :49: **"Read the established laws of thermodynamics as a test rather than a scorecard. Each member is load-bearing in at least one of them, and the continuum in none."** Fig 13 :40: **"Each is indivisible: no arrangement of the other five yields it."**

Compression that removes one of the held primitives does not merely reduce detail. It can break a derivation the model could previously make. The test is not that the compressed model looks simpler, but that an established derivation still goes through. This is the D2 anchor: the still-running derivation, checked against the ground.

**Refuter:** remove one of the six and derive an established law anyway. If the law still goes through, that term was not load-bearing and the minimality claim fails.

### F8 - The acceptance bargain must include the leftover, scored per slot

Fig 5 :42: **"The acceptance test is a bargain, not a threshold."** Fig 5 :43-44: **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."** Fig 5 :45: **"This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."** Fig 12 :102: Rissanen's "minimum description length applied to the relation rather than to the operands."

The compressed description is a candidate term φ. It is worth having iff cost(φ) plus left(R,φ) is less than cost(R). A compression that explains the common cases perfectly and leaves the rare slot unexplained is exactly the "explains one occasion perfectly" failure. The leftover must be scored per slot (F2), so the bargain cannot be struck on a pooled average.

**Refuter:** show a compressed description where cost(φ) plus left(R,φ) is greater than or equal to cost(R), yet the ground pays for it at the rare slot. If so, the bargain is not the governing test.

### F9 - The channel decays; the ground does not

Fig 10 :24: **"the ground does not decay, the channel does"**. Fig 10 :25: **"stale percepts, dropped transients,"** Fig 10 :26: **"saturated metrics, pooled readings"** Fig 10 :27: **"the output is not a verdict, it is"** Fig 10 :28: **"you have lost touch"**

Rare cases are transient, brief, and easily pooled away. Compression that drops transients or saturates a metric does not change the ground; it severs the channel. The symptom is not wrong answers on the benchmark but "you have lost touch" with the slot. Bellam and Kim's cascade from quantization to "logits with lower variance, increased loss, and compromised group accuracies" is the empirical form of the decayed channel.

**Refuter:** produce a ground reading for the rare slot that is identical before and after the compression that pooled it. If identical, the channel was not decayed there.

### F10 - Two currencies do not add

Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"** Fig 12 :128-129: **"The two readings come apart in both directions."**

A compression can be cheap in bits and expensive in actions to verify at the rare slot, or expensive in bits and cheap to refute. A single scalar such as `bits per parameter saved` holds only one accounting and will not notice the shortfall. This is why `useful` cannot be a single number until both currencies are declared.

**Refuter:** exhibit a scalar that trades description bits against settlement actions without loss, and that predicts both the aggregate and the per-slot verdict. If it exists, the two-currency claim fails.

### F11 - Preservation and erasure are conditions in a union, not ends of one dial

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

The compression ratio is a filter for the budget. It is not a witness for preservation. The conditions that decide preservation (method crosses, bonds kept, load-bearing terms kept, round trip measured, leftover paid at each slot) and the conditions that decide erasure (aggregation, pooling, dropped transients, flat formula, self-scoring) overlap. A case satisfying both is a compound, not an intermediate value.

**Refuter:** exhibit a single lever that clears both conditions with no residue, so that the union collapses to a partition. If found, F11 is wrong.

### F12 - No figure line returns a safe ratio: declared gap

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 13 :133: "A system with a closure can answer that before it searches, and what it returns is a shape rather than a name."

After a genuine census, no figure line selects a numerical compression ratio, a layer count, or a universal threshold for "rare". The framework returns the shape of the separator and the instrument that would close it. The ratio is `gap` of the shape-not-a-name kind, not unreachable in principle and not silence.

**Refuter:** exhibit a figure line that names a ratio or a universal rarity threshold. Until one is produced, the gap stands.

---

## 4. Pre-registered refuter

Written before the conclusion and before any verdict was recorded, per the framework's own requirement that a falsifier written before the run is a design instrument. "a falsifier written before the run is a design instrument, not only an honesty device" (exemplar `01`, citing Seat Map :287).

The separator shape is refuted if any of the following holds:

1. A compression whose per-slot residual is measured, whose round trip gap R_T is measured and bounded, and whose method rather than recording crosses, still erases a rare case that the ground pays for.
2. `compression achieved` is shown to be a ground metric that does not move when the compressed model's own scoring changes.
3. A bond can be dropped from a compressed representation with no behaviour change at any slot, so the arrangement was not load-bearing.
4. One of the six held terms can be removed with no established law losing its derivation.
5. A single scalar currency is exhibited that prices description and settlement without loss and predicts both aggregate and per-slot verdicts.
6. A figure line is found that names a universal safe ratio or rarity threshold.

If any fires, the separator is wrong and the claim is withdrawn or narrowed accordingly. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Report compression by the measured round trip gap R_T at named slots, not by the ratio alone (F1, F3).
2. Score the residual per slot; treat an aggregate near zero with one live rare slot as a legal, not inert, state (F2).
3. Preserve methods and bonds, not ingredient lists or snapshots of one occasion (F4, F5, F6).
4. Strike the MDL bargain on cost plus per-slot leftover, in both currencies held apart (F8, F10).
5. Keep preservation and erasure as separate verdicts per domain; never average them into one quality number (F11).
6. State the gap: no figure returns a universal safe ratio (F12).

**Canonical form of the claim to send:** a separator, with a measured R_T, per-slot live mass, and written refuters; not a percentage, not a list of layers, not a claim that the framework names the rare case.

---

## 6. Canonical usage check and retraction log

Two framework sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit, the framework returns "what a missing thing would have to look like (a shape, not a name)", then stops and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the mode rule, and the record/reach distinction. "The record and the reach. What is recorded only grows; what is reachable is derived and can fall."

### Corrections and retractions, kept visible

| earlier reading in this derivation | status after canonical check | reason |
|---|---|---|
| "Compression must be minimized to preserve structure." | **Retracted as an overstatement.** | F1 disqualifies the ratio as a self-score. The claim is now about which structure crosses and what the round trip measures, not about a smaller being better. |
| "Fig 1 bans using compression metrics altogether." | **Narrowed.** | It bans a frame scoring itself with a quantity it produces. Compression can be a budget filter (Fig 9 :60). It cannot hand over the verdict. |
| "The rare case is a particular example type." | **Retracted.** | Fig 11 :51: "No standing list of good actors survives a change of residual." A rare case is relative to the residual (Fig 11 :49), indexed per slot, not a fixed class of samples. |
| "Preservation and erasure are opposite ends of one compression dial." | **Retracted; union adopted.** | Fig 9 :55-57. Conditions overlap; a case in two conditions is categorically different. |
| "The framework should name the safe ratio." | **Forbidden, not merely unsupported.** | The README returns "a shape, not a name"; Fig 13 :133 says what it returns is "a shape rather than a name". |
| Apparent conflict: Fig 4 (lossy transform) versus Fig 12 (bond carries information). | **Not strained after re-census.** | Fig 4 governs what the transform throws away between scales; Fig 12 governs what a term must carry to be the thing it is. Different objects. Matches the README's re-census rule. |

---

## 7. Strains and re-census

- **S1, live.** F8 requires left(R,φ) scored per slot, while the MDL bargain as stated in Fig 5 :43 is written over a single residual R. Re-census: Fig 1 :19 and :28 govern the indexing of R, so the per-slot reading is the governing one and Fig 5 supplies the bargain form. Kept as a live price question, not hidden. An instrument that measures the leftover per slot is owed.
- **S2, dissolved.** Reading Fig 10 :25-26 (dropped transients, pooled readings) as a claim about the ground would conflict with Fig 10 :24 (ground does not decay). Re-census: it is the channel that decays. No contradiction.
- **S3, dissolved.** Reading "compression achieved" (Fig 1 :25) as banned outright would conflict with practical model selection. Re-census: it is disqualified as a verdict and usable as a budget filter (Fig 9 :60). Different offices, same quantity.
- **S4, named.** The world source on quantization (Bellam and Kim 2025) reports group accuracy, which is a ground reading in their frame, while the figures require a per-slot residual against an unmoved anchor. These are compatible in shape, not identical in measurement. Corroboration of shape only; overlap declared in `10_source_ledger.csv`.

After re-census: one live price question (S1), one compatibility limit (S4), none hidden.

---

## 8. What the figures do not settle

No figure returns the compression ratio at which a particular model loses a particular case. No figure selects the rarity threshold, the benchmark, or the set of slots that matter. Those are questions for an instrument and a ground, not for a further argument. The honest stop is the shape of the separator, the list of refuters, and the name of the measurement that would close it. Fig 8 :39: "So a search that finds nothing is never a proof of absence." Unreached is reported, not silence.
