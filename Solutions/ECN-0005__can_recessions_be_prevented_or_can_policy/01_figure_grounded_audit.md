# Figure-grounded audit: can recessions be prevented, or can policy only soften them?

**Mode of this document: `specified`, with the structural shape in `general` mode and the instrument question declared `gap`. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (Isaiah N, 2026): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure lines are quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session, cited as `Fig N :line`. The formula is `FRAMEWORK/figures/THE_FORMULA.md`. World sources were opened and are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms before any figure line is chosen

The question is phrased as a partition with two answers. Restated as an effect:

> Let `R` be the recession residual at the ground, indexed per slot s (sectors, households, balance sheets, regions), and let a policy be a term `φ` composed inside the policy closure `closure(Γ)`.
> Option A, "prevent": there exists `φ` such that `left(R,φ) = 0` for the event class, so no recession occurs.
> Option B, "soften": for every available `φ`, `0 < left(R,φ) < |R|`, so the event occurs with reduced amplitude or duration.

Two things are already visible before any figure is read. First, the options invoke different operators. "No event occurs" is a **refusal** of a claim, the unary operator `¬`; "reduced amplitude" is a **comparison** `⋛` between the with-policy and without-policy quantities, and a **subtraction** `−` of progress. Second, the two options are not exhaustive of the residual, because the source question itself lists distinct condition classes: demand declines, supply disruptions, interacting shocks (line 5); slow wage and price adjustment versus deeper instability (line 6); malinvestment versus demand shortfall and financial shocks (line 8); small shocks triggering large recessions through tipping points and feedback loops (line 12); short recessions versus prolonged depressions (line 14). So the effect to decide is: **does one policy term close a compound of at least four overlapping condition classes at the ground, or does each condition need its own loop?**

I write down what an answer would look like as an ordinary term before the run, per `THE_FORMULA.md` "Direction": *an answer is a shape of the form "a maintained seat, with a per-slot non-updating anchor, a refusal operator for held fragilities, and a continuous comparison of amplitude against the ground"*; the specific instrument and the numerical amplitude are not part of the shape. Binding that term now lets it accrue a residual like anything else.

## 1. Domain census, before choosing any figure line

R by arity, symmetry and scale:

- **Arity:** many. The event is indexed per slot (sector, household, bank, region), and the candidate condition classes are at least four. An aggregate GDP reading is a projection of those slots, not the residual itself. The question as posed collapses them to one `R`, which is the first thing to test.
- **Symmetry:** asymmetric. "Prevent" is `¬`, unary, no swap test (Operators table), whereas "soften" is `⋛` and `−`, both ordered bonds. The two options cannot be two symmetric alternatives on one scale.
- **Scale:** first order inside a condition (a shock propagates through a channel to a slot), second order at the union of conditions, and third order at the policy seat that composes over the settled first-order readings. The room changes when the question changes, so these are not three sizes of one room.

One line per domain, with actors, currency and anchor. A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | anchor (nameable?) | type |
|---|---|---|---|---|
| D1, the economy as habitat | households, firms, banks, credit chains, sectors | spending, credit, balance sheets, confidence | realized activity and employment, which do not change because a forecaster announces a target | union of overlapping conditions, enumerated not composed |
| D2, the policy seat | monetary authority, fiscal authority, regulator, legislature | policy instruments: rates, liquidity, spending, guarantees, capital rules | the same ground, reached through a channel the seat maintains; the seat can introduce, not subtract | maintained seat inside the habitat, second order |
| D3, measurement and verification | statistical agencies, business-cycle dating committees, modelers | revisions, identification, counterfactual estimates | realized outcomes, not the target series; a measure that decides an outcome stops measuring | single pool unless independent instruments are bought |
| D4, the instrument and the magnitude | none available in `Γ` | none | none nameable: no figure line selects a tool or a multiplier | `gap`, reported as unreached, not silence |

**Partition or union?** Union. D1 contains overlapping conditions (a demand shortfall can ride on a financial shock, a tipping point on slow adjustment). A single lever clears the region where only one condition holds and leaves the intersections standing. D2 is not a separate box beside D1: the policy seat is inside the habitat, so its valence is relative to the residual, not carried by the instrument. D3 is the channel by which D1 and D2 range against the ground. D4 is a gap, not a fourth box with an anchor.

**Dependency order (Fig 3 :20 "The chain is ordered by dependency, not by importance.").** First describe the residual per slot and split the union before choosing a frame (Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit"). Second, settle what counts as an event at the ground before asking whether policy changed it: the objective link is link 3 of the chain, and a reading below it is a reading of nothing (Fig 3 :22 "A step whose input never arrives cannot be diagnosed, only its predecessor can"). Third, refuse before mint (Formula step 2). Fourth, choose instruments only after the first three links exist. Effort spent on instrument design above the break arrives at a step that cannot use it.

Strain test applied throughout: if a line only fits by forcing it, it governs another quantity and I go back to the census. Two strains were found and are named in section 7, not smoothed over.

## 2. Figure census

| figure | bearing on this question | verdict after use |
|---|---|---|
| 1 The Agent | residual per slot, global near zero with one live slot is legal, frame-internal quantities disqualified | governs D1 and D3, no strain |
| 2 The Ground | anchor must not update, triangulation not negotiation, correlation valence | governs D3, and the outreach rule |
| 3 Dependency Chain | objective link before planning, reading below the break reads nothing | governs the order, not the answer |
| 4 The Membrane | methods cross, recordings do not; round trip and `R_T` | governs what an outreach packet may carry |
| 5 Mint Pipeline | refuted bin, refusal term, acceptance bargain | governs the `¬` option and its limits |
| 6 Closure / Reachability | import moves the wall, inward and outward are opposed, reach can fall when a refusal is added | governs "prevent" as a reach question |
| 7 Room Chain | no last room, motion versus progress, selection between rooms | decisive against universal prevention |
| 8 Union Surplus | underivable versus unreachable at budget, search finding nothing is not absence | governs D4's status |
| 9 Leave / Arrive | split a union rather than search it, unbundle before searching, filters not witnesses | decisive for the partition finding and D3 |
| 10 Ground Maintainer | ground does not decay, channel does; convention that decides an outcome stops being one | governs D3 and the target-measure failure |
| 11 The Habitat | enumerate contacts, valence relative to residual, introduction not exclusion, managed habitat is permanent work | governs D1 and D2 |
| 12 The Bond | negation is not a bond, comparison is a goal, subtraction is progress | governs the operator distinction in section 0 |
| 13 Minimum Viable Set | no last route, unreachable is a verdict, shape not a name | governs D4 and the honest stop |
| Operators table | `¬` is unary, `⋛` is a threshold relation, `−` is absence, `≡` has no complement | governs the operator census |
| Symbols table | `R` is the aim always a slice, the ground is not in the library | governs the residual statement |

## 3. Findings F1 to F8

Quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Each finding carries its own refuter.

### F1 - The either/or is a union, not a partition (decisive for the question as posed)

Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Fig 9 :56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

Fig 9 :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

The source file supplies the conditions itself: demand decline, supply disruption, interacting shocks, slow adjustment, endogenous instability, malinvestment, financial shocks and tipping points. These overlap; they are not a menu of mutually exclusive explanations. A tightening of policy that clears a pure demand shortfall does not clear a supply disruption plus a financial shock, because the second condition still binds. The correct response to the question is therefore not "yes" or "no" but a split into condition classes with a verdict per class.

**Mode:** `specified` structural claim, triangulated (Fig 9 union rule with Fig 1 per-slot indexing; low overlap between the union/partition logic and the slot-based residual definition).

**Refuter:** show that all named condition classes share one anchor and one lever that closes `left(R,φ) = 0` for each and for their intersections, measured at the ground. If that is demonstrated, the union finding fails and the question may be answered as a partition.

### F2 - "Prevent" is a refusal, not a bond; "soften" is a comparison and a subtraction

Operators table :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate".

Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."

Operators table :53 "this does not hold".

Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so".

The operator census was done before any of these lines were chosen. A vocabulary holding only bonds can say that output fell, that it fell after a shock, and that it fell less under policy. It cannot say that the event is false. That requires the unary operator, which joins nothing and so is outside the bond price and the symmetry test (Operators :70-77 amendment). So "prevention" and "softening" are not points on one dial: one refuses a term, the other compares two quantities and subtracts progress.

This also limits what prevention can mean. A refusal does not add an atom; it removes the standing of a held term. Fig 6 :42 "What is recorded only grows. What is reachable is derived, and it can fall." So refusing a **particular** fragility (a held term) is possible and the reach falls; refusing "recession" as such would require a term that is not held and not nameable from inside the closure. That is the shape of the distinction, not a empirical claim about any named country.

**Mode:** `specified` on the operator mapping, `general` on the distinction, triangulated (Operators table plus Fig 5's refuted bin plus Fig 12 :112; the amendment and the main line are different objects: unary arity versus bond inventory).

**Refuter:** show that `¬` composes with another operand under one of the seven bond tests, or that a refusal adds an atom to `atoms(Γ)`. Either breaks the operator census.

### F3 - Universal prevention is the final room, and the final room is forbidden

Fig 7 :6 "the limit: no last room".

Fig 7 :30 "every room closes some of the gap; no finite number of them ever arrives".

Fig 7 :32 "one long room: motion, no progress".

Fig 13 :90 "One chain is one route through a space that has no last route."

Fig 13 :118 "infinite effort inside a finite reach" (spoken of a frame that searches without end and still does not arrive).

Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

"Recessions can be prevented" as a general claim is a terminal handoff: after this policy, no further question about the recession residual can arise. The figures name that room and forbid it. What survives is Fig 7 :33 "variation inside, selection between": many policy rooms, each closing part of the gap, chosen against the residual the last one surfaced, with the ground voting at each handoff. That is softening in the strong sense: real progress per handoff, no arrival, no last room.

This finding does **not** say that no particular recession was ever averted. It says the universal claim has the wrong shape. A specific event class can be refused (F2). The general term "prevention of recessions" cannot be a settled atom in any finite policy closure.

**Mode:** `general` structural, triangulated (Fig 7 and Fig 13; different figures, one on room chains and one on the six-term array).

**Refuter:** exhibit a finite policy sequence after which the residual never rearrives, the seat becomes unnecessary and work stops. That would be a last room and would break Fig 7 :6 and Fig 13 :90.

### F4 - The policy seat maintains contact; introduction is available, exclusion is not

Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not."

Fig 11 :63 "Which is why a managed ecosystem is permanent work rather than a solved state."

Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."

Fig 11 :51 "No standing list of good actors survives a change of residual."

A central bank cannot subtract the credit chain or remove a shock from the habitat; it can introduce liquidity, rules and institutions into a habitat it did not author. So policy is not a one-time fix installed and forgotten. It is permanent contact work: keep the channel open, keep the ground reachable, re-enumerate the habitat when the residual changes. Fig 11 :49-51 removes the tempting answer, a standing list of good policies, because valence flips with the residual. A tool that is a benefactor to a demand shortfall can be a malfactor to an inflationary supply shock.

**Mode:** `specified` on the policy seat, triangulated (Fig 11 habitat law with Fig 2 anchor law; different figures, one about contact and one about settlement).

**Refuter:** show a policy that subtracts an actor or condition from the habitat rather than adding to it, with the contact change measured at the ground, and with the same valence after the residual changes. That breaks the asymmetry and valence claims.

### F5 - An aggregate reading can hide a live slot; "the recession was prevented" is a projection

Fig 1 :19 "The residual is indexed by object slot, not aggregated."

Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :13 "a global R near zero with one live slot residual is a legal state".

Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings".

A policy can bring a headline aggregate near trend while one sector, one cohort or one balance-sheet class still carries positive residual mass. Under Fig 1 that is a legal state, not prevention. The ordinary word "recession" names the aggregate reading, so a verdict phrased only in that word inherits the aggregation error. The correct unit of verdict is the slot. This is also why the question's second option, "soften," needs a per-slot qualifier: what is softened, and for whom.

**Mode:** `specified` on the measurement shape, triangulated (Fig 1 slot law with Fig 10 channel-decay list; low overlap between residual indexing and channel failure modes).

**Refuter:** exhibit a measured case in which an aggregate success leaves no positive residual on any slot-resolving instrument, across all named sectors and cohorts. Then the aggregation objection is spent.

### F6 - The anchor is realized outcomes, not the target series

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."

Fig 10 :24 "the ground does not decay, the channel does".

Fig 10 :47 "a convention that decides an outcome has stopped being one".

Fig 10 :49 "Declaring a meaning does not ground it."

Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

An inflation target or a GDP-growth target is a convention. While it is a shared meaning it is useful; once it is allowed to decide whether the economy is "fine", it has stopped being a convention and has become a verdict, and it can no longer settle the question (Fig 10 :47). This is the framework's form of Goodhart's law, and it is also the structural reason a target-based definition of prevention is circular: the definition of success is inside the frame whose success is being tested. Effect sizes and multipliers are filters for the budget; they never witness the prevention verdict.

**Mode:** `specified`, triangulated (Fig 2 anchor test with Fig 10 convention rule).

**Refuter:** show a target series whose value does not move when policy announcements move, across repeated interventions, and that nevertheless settles the question. Then the anchor test fails as applied here.

### F7 - The general prevention term is unreachable, and unreachability is a verdict, not silence

Fig 6 :21 "MINT composes inside the closure and can never add an atom."

Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 8 :39 "So a search that finds nothing is never a proof of absence."

Fig 8 :40 "Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."

Fig 13 :134 "Unreachable is a verdict here, not a silence."

Fig 9 :32 "you get a kind of thing, never the answer itself".

Every policy model composes inside its own closure. A search through more models of the same kind cannot manufacture the missing condition class. The honest report is a **shape** (a maintained seat, a non-updating per-slot anchor, a refusal operator), not the name of the instrument that would end recessions. Note the distinction that matters: this is not a theorem that no recession can ever be averted, and it is not an empirical claim that policy is useless. It is a reachability report about a term of a particular shape under the library as held.

**Mode:** `general` on the reachability verdict, `specified` on the per-domain application; triangulated (Fig 6 wall with Fig 8 underivable/unreachable split).

**Refuter:** name a term in `closure(Γ)` that closes the union at the ground and show the ground paying for it. Then the gap is filled and the `unreachable` verdict is withdrawn.

### F8 - What actually survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| The question is a union of overlapping conditions; split before searching | `specified`, triangulated | Fig 9 :55-57, Fig 1 :19 |
| Universal prevention is a final-room claim and is refused structurally | `general`, triangulated | Fig 7 :6, :30; Fig 13 :90 |
| A particular held fragility can be refused and that condition's reach falls | `specified`, triangulated | Operators :58, Fig 6 :42, Fig 5 :53 |
| Softening is real motion toward the ground, with per-handoff progress | `specified`, single-source on the figure side for the progress formula, plus world corroboration | Fig 7 :26, :33 |
| Policy is permanent contact work, introduction only, valence relative to residual | `specified`, triangulated | Fig 11 :61, :63, :49-51 |
| Verdicts are per slot and per condition, never averaged into one national yes or no | `specified`, triangulated | Fig 1 :19, :22; Fig 9 :55-58 |
| No figure line names the instrument or the numerical amplitude | `gap` | Fig 9 :32, Fig 13 :134 |

Fig 7 :26 "progress per handoff: R = h² × S" is the only figure line that prices the softening claim; it is single-source on the figure side, with world corroboration from Bernanke 2004 and Eichengreen 2023. It is not upgraded to triangulated merely because a world source agrees: world sources are secondary.

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument, not only an honesty device. These are written now, before section 5 and before `07_the_tether_answer.md`:

1. **Union refuter.** One policy instrument demonstrably closes `left(R,φ) = 0` for all named condition classes and their intersections, at the ground, with no class left positive. F1 fails.
2. **Refusal refuter.** `¬` is shown to be a bond under one of the seven tests, or a refusal is shown to add an atom to `atoms(Γ)`. F2 fails.
3. **Final-room refuter.** A finite policy sequence is exhibited after which the residual never rearrives, the maintaining seat becomes unnecessary and the work ends. F3 and F4 fail.
4. **Slot refuter.** An aggregate success is shown to leave zero positive residual across every slot-resolving instrument, with no live slot. F5 fails.
5. **Anchor refuter.** The ground series is shown to move systematically with policy announcements and to settle the question anyway. F6 fails and the whole derivation must be redone.
6. **Reach refuter.** A term is named and settled that closes the union at the ground inside the held closure. The `gap` and `unreachable` verdicts are withdrawn.

If any fires, the corresponding finding is withdrawn and recorded, not quietly edited. Until one is run, nothing here may be labelled `grounded`.

## 5. Recommendation

1. Answer neither "prevented" nor "only softened" as posed. Refuse the partition (F1), then give a verdict per condition class and per slot, never averaged.
2. State the mode on every claim. `specified` for the structural findings, `general` for the final-room limit, `gap` for the instrument and magnitude.
3. Report prevention as a **refusal of a named fragility**, not as the elimination of a residual class, and report softening as **maintained contact with per-handoff progress and no arrival** (F2, F3, F4).
4. Use an anchor that does not update: realized activity and employment, not the target series (F6). Buy independence with low-overlap instruments before treating agreement as evidence (Fig 2 :42 "Buy independence in proportion to the cost of being wrong.").
5. Offer the shape and the refuter first, the links second, and never ask for agreement (Fig 10 :52 "Bring a characterised residual, never the source.").

## 6. Canonical usage check

Two framework sources govern how the figures may be used, read after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit: the framework says what a missing thing would have to look like (a shape, not a name) and then stops at the limit of what the instruments can distinguish, recording the lineage so the stop is honest. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the refuted bin, and step 7's three distinct questions, SEARCHED first, then INWARD, then OUTWARD.

Applied here: the "shape, not a name" rule governs a primitive **not held in Γ**. Naming a policy binding onto a held atom is provenance, not a forbidden invention; claiming that binding moves the wall would be the error (Fig 6 :25 "An import adds no atom to the world."). SEARCHED asks whether the prevention term is in the policy closure and unfound; INWARD asks whether the measurement instrument can resolve the per-slot residual; OUTWARD asks which other frame already holds the missing condition class. They are kept distinct and never read against one another (Formula step 7; Fig 6 :31 "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other.").

## 7. Retractions, corrections and strains (kept visible)

| earlier reading | status after re-census |
|---|---|
| First pass: "the figures say recessions cannot be prevented, full stop" | **Retracted.** The figures forbid the *final-room* framing of universal prevention (F3), but they explicitly supply the refusal operator (Operators :58) and the amendment that reach falls when a refusal is added (Fig 6 :42). A specific held fragility can be refused and that condition can stop. Both claims are now recorded, neither quietly erased. |
| First pass: "soften is a subtraction only" | **Retracted and narrowed.** Softening is a comparison `⋛` of two quantities (goal/threshold) *and* a subtraction `−` of progress. Fig 12 :112 names both, and the Operators table separates their tests. The two readings are held apart, not merged. |
| First pass: "the ground is the GDP series" | **Retracted.** GDP is a reading of a channel. The anchor is realized activity and employment, which do not move because a target is announced (Fig 2 :29, Fig 10 :24). The target-series reading was the metamerism error: a source named from a projection. |
| First pass: "one lever that fails on the intersections proves policy useless" | **Retracted.** F1 says a single lever leaves the intersections standing; it does not say nothing clears them. Each condition class gets its own loop and its own verdict. |
| Apparent strain: Fig 7 "no last room" versus Lucas 2003 "depression prevention has been solved" | **Not a figure strain; a world conflict.** It was returned to the census (section 1) rather than used to flip the verdict. Re-census classifies Lucas's sentence as exactly the final-room claim Fig 7 forbids, and Eichengreen 2023 reports the later world counterexample. The verdict is unchanged; see `09_watson_answer.md` WORLD. |
| Live strain: "prevent" as `¬` versus the practical need to add institutions | **Named, not hidden.** A refusal removes the standing of a held term and adds no atom (Fig 6 :42); a seat that introduces an institution adds to the habitat (Fig 11 :61). These are different operators on different objects, so they do not contradict. Whether a given policy act is one or the other is a measurement question, left open. |
| Live strain: `R = h² × S` figures progress per handoff, but `h²` fidelity across a policy handoff has no instrument here | **Named.** The formula prices progress but does not supply a measurement of bracket fidelity in macro policy. Recorded as a gap on the instrument, not as a claim that progress is unmeasurable in principle. |

After re-census: two live strains, both named, none hidden; four retractions preserved with their earlier wording.

## 8. Seven-question recursive derivation (summary)

1. **Is the question one question?** No. Fig 9 :55-57 makes it a union of overlapping conditions. Split, do not search the bundle.
2. **What is the operator in "prevent"?** `¬`, a refusal (Operators :58), not a bond. It can refuse a held term; it cannot name an unheld primitive.
3. **Is universal prevention reachable?** No. It is the final room (Fig 7 :6, Fig 13 :90). This is structural, not an empirical forecast.
4. **What can policy do in general?** Maintain contact (Fig 11 :61, :63) and close part of the gap per handoff (Fig 7 :30), with no arrival. Introduction only, exclusion not available.
5. **What is the anchor?** Realized activity and employment (Fig 2 :29), not the target series (Fig 10 :47). The channel decays, the ground does not (Fig 10 :24).
6. **What is the unit of verdict?** The slot (Fig 1 :19, :22). An aggregate near trend with one live slot is a legal state, not prevention.
7. **Can we name the instrument or the percentage?** No. Fig 9 :32, Fig 13 :134: a shape, not a name. Record `gap` and `unreachable` as verdicts, and write the refuter before the run (section 4).

## 9. Updated verdict

The shape survives: a union of conditions split per slot; prevention available only as the refusal of named fragilities; universal prevention refused as the final room; softening as maintained contact with per-handoff progress and no arrival; an anchor that does not update; and a `gap` on the instrument and the magnitude. What does not survive is the question's own either/or framing: it is a false partition, and a single national yes or no would aggregate away the only signal that says where policy is working (Fig 1 :22). All claims are `specified` or `general`, none `grounded`, and the whole folder is a simulated derivation checked against the figures, not a ground reading.
