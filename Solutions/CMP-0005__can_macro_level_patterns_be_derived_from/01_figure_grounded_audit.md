# Figure-grounded audit: macro patterns from micro rules

**Mode of this document: `specified`, with `general` structural claims. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026) says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The canonical figures as text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`; `FRAMEWORK/reference/FIGURES_README_canonical.md`; `FRAMEWORK/figures/THE_FORMULA.md`; the eight essays. Every figure quote below was taken from the verbatim extract, not from a summary. World sources are secondary and are confined to `09_watson_answer.md` and `10_source_ledger.csv`.

---

## 0. The question, restated in effect terms

> Can macro-level patterns be derived from micro-level rules without losing essential information?

Stated as an effect: we hold a micro-rule set (a closure at one scale) and want to produce a macro pattern (a claim at another scale). "Without losing essential information" is the property that the macro description can be brought back down to the micro description with nothing missing, that is, the round trip is the identity, `x = (T_E ∘ T_A)(x)`, so `R_T = 0`.

Two options and what each leads to:

- **Option A, yes.** The crossing is information-preserving. This licenses treating macro patterns as mere shorthand, discarding the macro level as explanatory, and optimising the micro solver as the whole task.
- **Option B, no.** The crossing is lossy by construction. This licenses treating `R_T` as the object of study, asking what survives the crossing and what the discarded detail becomes, and keeping the macro level as a genuine frame with its own ground.

**The sought shape is bound now, before the run, so it can be refused.** "Essential information" is not taken as a primitive. It is split into two checkable readings: (i) the reapplicable method or kernel, and (ii) the particular per-slot detail. The answer is kept per reading and never averaged (Fig 1 :19). This is the discipline `THE_FORMULA.md` "Direction" demands: make the sought-for shape an ordinary term so the preference is refusable by the same test as everything else.

---

## 1. The residual, described by arity, symmetry and scale

- **Arity:** two descriptions plus a transform between them. This is a *crossing*, not a composition inside one level. The relation is not between a part and a whole in the same closure; it is between frames with different closures (Fig 10 :68).
- **Symmetry:** the transform is ordered and non-reversible. Fig 4 :28-29 says the trip is not reversible. There is an up direction (`T_A`, abstraction) and a down direction (`T_E`, concretisation), and they are not inverses. Fig 13 :4 calls a crossing "a change of role rather than a step upward", so no member of the pair is senior.
- **Scale:** the residual lives *at the membrane between scales*. That is its native domain. Treating it as a within-scale optimisation problem is a category error (Fig 3 :20-21).

**Residual line (used by the second seat in `11_audit.md`):** "A cross-scale transform is asserted to preserve essential information; what is the measurable gap, what survives the crossing, and where does the discarded detail go?"

---

## 2. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 micro-rule frame | micro rules, `atoms(Γ)`, per-slot residuals `R_s` | composition inside `closure(Γ)` | ground at micro scale: simulation or experiment | partition (what is in the closure) |
| D2 macro-pattern frame | coarse-grained observables, reapplicable methods | reapplication and predictive power | ground at macro scale: measurement of the pattern | partition (what the coarser description can hold) |
| D3 the membrane / transform | `T_A`, `T_E`, kernel, recording, gap `R_T` | methods up, head starts down | the round-trip gap `R_T` itself | crossing with its own loop (the round trip) |
| D4 verification / outreach frame | expert readers | agreement and residual | the ground, never agreement | selection between frames, not negotiation |

**Partition or union.** D1 and D2 do not share a closure: different actors, different currency, different ground. Fig 10 :68 states: "Different actors, a different currency, a different ground, and a lossy transform between." Their joining is therefore a **union across a membrane**, not a partition of one set. The union is not undirected: the residual is described first, then the frame that predicts its shape is sought (Fig 9 :53). Because the split lands on a union rather than a partition, it must be unbundled before searching again (Fig 9 :54). D3 is where the residual actually lives, and it gets its own loop: the round trip. D4 is a checking arrangement, not a source of verdicts.

**Order by dependency (Fig 3).** Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." The order is: (1) characterise R at the membrane; (2) determine what may cross; (3) measure `R_T`; (4) settle each claim against the ground. Optimising a micro solver in step 1 before the macro slot is described is effort spent above the break.

**Seat discipline.** The outside frame (D4) sees the residual and the shape claim only, not the framework's interiors. The auditor (also D4 in this simulated run) reads the residual and the records. All four seats in this run draw on one evidence pool, so their agreement is one pool talking, not corroboration (Fig 2 :40).

---

## 3. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| 1 The Agent | per-slot residual; aggregation destroys the where-to-look signal | governs the concrete loss mechanism |
| 2 The Ground | anchor must not update; independence decides whether agreement means anything | governs D4, not the crossing itself |
| 3 Dependency Chain | status per link; order by dependency | governs the run order |
| 4 The Membrane | the transform between scales loses information; round trip and gap | **decisive for the crossing** |
| 5 Mint Pipeline | when a new term is owed; settle then carry up | governs what may cross (methods, not recordings) |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs the underivable case |
| 7 Room Chain | no last room; agreement compounds, evidence does not | governs scale-without-end and outreach |
| 8 Union Surplus | closure idempotent; underivable is not unknowable; residual first | governs D1/D2 union and the verdict type |
| 9 Leave / Arrive | describe the residual before choosing a frame; shape not answer | governs method and canonical limit |
| 10 Ground Maintainer | different actors, currency, ground, lossy transform; verifier non-access | triangulates D3 and governs D4 |
| 11 The Habitat | capability is agent-and-habitat; contact cascades | governs what a real check would cost |
| 12 The Bond | level-relative irreducibility; settled molecule becomes an atom | governs the "irreducible" sub-question |
| 13 Minimum Viable Set | crossing changes role; discarded detail reappears as noise | triangulates the loss verdict |
| Symbols table | `R_T = gap(x, (T_E ∘ T_A)(x))` | defines the measurable quantity |
| Operators table | bonds and negation; no cross-scale bond | no operator escapes closure by composition |
| Formula | step 6 PROMOTE; step 7 three questions | defines `R_T` and the unreachable branches |

Strained readings are named in §8, not smoothed over.

---

## 4. Findings

Each finding carries its mode, its verbatim figure line(s), and a refuter. Verdicts are kept per domain and are never averaged.

### F1 — The crossing is lossy by construction (decisive, `specified`)

Fig 4 :27: "The transform between scales loses information, and that is the point."

Fig 4 :28-29: "Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent."

This is the membrane domain (D3), and it answers the literal question. "Without losing information" is not the behaviour of a scale transform. The trip is not reversible; a macro description brought back down will not match what was sent. So `R_T` is not exceptional noise on an otherwise lossless derivation: it is the normal output of a crossing.

**Mode:** `specified` and falsifiable. **Triangulated** with Fig 13 and Fig 1 below (different domains, low overlap: scale transform versus chaos/remainder versus per-slot statistics).

**Refuter:** demonstrate a scale transform whose domain of applicability admits `x = (T_E ∘ T_A)(x)` for all `x` in that domain, that is `R_T = 0` with a measured ground check. If that is shown for a genuine crossing, F1 is withdrawn.

### F2 — The loss is a measurement, not an error (`general` structural)

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

Symbols table :77-78: "The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x)). Measures what the coarser description cannot hold."

`THE_FORMULA.md` step 6: "unbracketed the transform is dead reckoning: R_T = gap( x , (T_E ∘ T_A)(x) )".

So the framework does not ask whether information was lost and then apologise. It asks how much, and it refuses to treat the question as settled until the gap is measured. The phrase "essential information" in the question is precisely this gap: what the coarser description cannot hold. A derivation "without losing essential information" would be a claim that `R_T = 0`; the figures require that claim to be paid for, not assumed.

**Mode:** `general` (a rule about how the loop must report), with `specified` consequences. **Triangulated** across Fig 4, the Symbols table and the Formula, which are distinct artifacts of the same framework and are therefore related but not identical witnesses.

**Refuter:** show the framework admitting a cross-scale claim with no `R_T` measurement and no dead-reckoning penalty, or a case where the gap is zero and the methodology does not change.

### F3 — "Essential information" is two readings, not one (`general`)

Fig 4 :19-20: "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."

Fig 4 :22: "Only methods cross up. Only head starts come down."

Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."

Fig 4 :34-35: "The level a method lands on remakes it. A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."

This is the key disambiguation of the question. Reading (i): if "essential" means the reapplicable method or kernel, then **yes**, that survives the crossing; it is exactly what the membrane passes upward. Reading (ii): if "essential" means the full particular detail, then **no**, that is the recording and it does not cross. The two readings are not a compromise and must not be averaged (Fig 1 :19). Even the surviving kernel is remade by the level it lands on, so strict identity is not preserved on either reading: the method is reapplicable, not replayed.

**Mode:** `general`. **Triangulated** with Fig 5 (the settlement/carry-up step) and Fig 12 :104 (recursion).

**Refuter:** show a case where the kernel does not survive a scale crossing, or where a recording crosses and is reapplicable as a method. Either breaks the split and forces a re-census of D3.

### F4 — Discarded detail does not vanish: it becomes noise above the crossing (`specified`)

Fig 13 :31-32: "And because each turn leaves a remainder (the residual) that re-enters the next, it is also where the randomness comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."

This governs where the lost information goes. It is not annihilated; it stops being a controllable variable at the macro level and reappears as noise, and when the chain amplifies, as chaos. This is the figure-grounded analogue of coarse-graining in statistical mechanics: micro detail is not destroyed, it becomes the entropy term of the macro description.

**Mode:** `specified`. **Triangulated** with Fig 4 :27 and Fig 1 :28 (different figures, different domains).

**Refuter:** exhibit a crossing where discarded detail neither reappears as noise nor re-enters as a residual, and where the higher level is nevertheless a distinct frame. That would break the remainder claim and require re-census.

### F5 — A concrete mechanism of loss: aggregation kills the per-slot signal (`specified`)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

Macro patterns are typically produced by aggregation over components. Fig 1 says exactly what that costs: a live slot residual disappears into the average. So a large class of "derivations of macro from micro" lose the where-to-look signal by construction. This is not a side objection to statistical mechanics; it is the per-slot form of the coarse-graining loss in F1 and F4.

**Mode:** `specified`. **Single-source** for the slot indexing (Fig 1), corroborated at the figure level by Fig 4 :27. The specific claim that a given macro pattern aggregates across slots is `specified`, not measured.

**Refuter:** name a macro pattern that preserves the per-slot residual of every constituent while still being a macro pattern. That case would need its own loop, since it would be a union, not a partition.

### F6 — "Irreducible" is a fact about a level, not about the world (`general`)

Fig 12 :103: "Composition is recursive, and the level decides what is irreducible."

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"

Fig 13 :103: "Composition is recursive, and the level decides what is irreducible."

This bears on the adjacent question of genuinely irreducible macroscopic properties. Under the framework, a macro pattern is irreducible *at the level where it is not yet settled*, and becomes an atom once it is settled. So irreducibility is not an eternal metaphysical badge; it is a status that changes with the loop. It is wrong to read this as "everything is reducible in principle from the current micro vocabulary": composition never leaves the closure it started in (Fig 6 :23).

**Mode:** `general`. **Triangulated** across Fig 12 and Fig 13, which state the rule in two places with different surrounding arguments.

**Refuter:** derive a member of the six from the other five (breaks level-relative irreducibility from below), or show a settled term that cannot become an atom for any composition (breaks it from above).

### F7 — The union needs independence and an anchor that does not update (`general`)

Fig 10 :68: "Different actors, a different currency, a different ground, and a lossy transform between."

Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence."

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

Fig 10 :52: "Bring a characterised residual, never the source."

D1 and D2 must be checked against their own grounds, not against each other's agreement. A verification frame that shares an evidence pool with the claim, or that is shown the framework interior before giving its verdict, is a mirror, not a checker. This governs D4 and the outreach artifacts. In this simulated run the second seat shares the primary's pool, so its agreement is internal consistency only.

**Mode:** `general`. **Triangulated** with Fig 7 :35 and Fig 5 :48-49 (different collapse descriptions).

**Refuter:** produce a case where two frames with identical evidence pools constitute corroboration for a world claim. Under the figures that is impossible by definition, so this refuter is a census test rather than a measurement.

### F8 — Underivable is not the same as unreached (`general`)

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

Fig 8 :40-43: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

If a macro pattern requires an atom absent from the micro closure, more micro search does not help: that is underivability from that closure, and the remedy is a characterised import, not a longer run. If the atom is already in the closure and was not found, the remedy is more search. The two look the same from inside, so the answer must be a shape and a route, never a bare yes or no.

**Mode:** `general` for the distinction, `specified` for any particular claim that a given macro pattern needs a new atom.

**Refuter:** show a composition inside a closed set that adds an atom. That breaks closure idempotence and the whole barrier reading with it.

### F9 — The framework returns a shape, not the macro pattern (`general`)

Fig 9 :32: "you get a kind of thing, never the answer itself"

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

The canonical usage rule says the framework reports "what a missing thing would have to look like (a shape, not a name)". So the deliverable here is the round trip, the split of survivor versus recording, the gap `R_T`, and the refuter. It is not a catalogue of which macro patterns happen to be derivable in which systems; that is a world question for a ground.

**Mode:** `general`. **Triangulated** with the figures README and Fig 13 :134-138 ("Unreachable is a verdict here, not a silence").

**Refuter:** show the framework naming a specific macro pattern or atom as the answer to this question while claiming figure derivation. That is the naming error the README forbids.

### F10 — Ordering the work: characterise, then cross, then measure, then settle (`general`)

Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Because D1 and D2 form a union across D3, describing R comes before choosing a frame. Most practical work on this question starts by optimising a micro simulator (above the break) and assumes the macro slot is understood. Fig 3 says a reading taken below the break is a reading of nothing, so the order is a methodological result, not a preference.

**Mode:** `general`. **Single-source** for the ordering claim (Fig 3), corroborated structurally by Fig 9.

**Refuter:** show a case where optimising the micro link repairs an undescribed macro slot. If that happens, the chain is not ordered by dependency here and the census is wrong.

### F11 — What the ground would have to do (`specified`)

Fig 9 :42: "narrowing gets you close, the ground decides"

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when"

Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

To move any of the above from `specified` to `grounded`, a ground must be named that does not update when a frame thinks: for a given system, a measured `R_T` under a declared macro map, plus a source-discriminating instrument that says whether the discarded detail reappears as noise (F4) and whether the kernel survived (F3). Agreement between statisticians and complex-systems researchers is not such an instrument.

**Mode:** `specified`. **Triangulated** across Fig 2, Fig 9 and Fig 11.

**Refuter:** name a ground for "essential information is preserved" that does not depend on a declared macro map. If none can be named, the question stays a shape question and the verdict stays `specified`.

---

## 4b. Verdicts per domain, kept separate

| domain | verdict | status |
|---|---|---|
| D1 micro frame | compositions inside the closure are derivable from its atoms; nothing outside the closure is reached by search | `general`, triangulated (Fig 8, Fig 6) |
| D2 macro frame | the coarser description holds only what the gap leaves; it is reapplicable, not a replay | `general`, triangulated (Fig 4, Symbols, Fig 12) |
| D3 membrane | lossy, ordered, with measurable `R_T`; kernel crosses, recording does not; discarded detail becomes noise | `specified`, triangulated (Fig 4 + Fig 13 + Fig 1, low overlap) |
| D4 verification | anchor is the ground, never agreement; this simulated seat is internal consistency only | `general`, triangulated (Fig 2 + Fig 10) |

No verdict was averaged across domains. The single decisive domain for the literal question is D3, and its verdict is **no, not without loss**, with the loss measured by `R_T`.

---

## 5. Pre-registered refuter

Required before the conclusion and before outreach: "a falsifier written before the run is a design instrument, not only an honesty device" (Seat Map field guide, failure genera).

The shape claim (lossy crossing with measured `R_T`; kernel preserved; detail reappears as noise) is refuted if any of the following holds:

1. A scale transform is demonstrated with `R_T = 0` over a declared domain of applicability, checked against a ground rather than assumed (breaks F1 and F2).
2. The detail discarded at a crossing is shown to vanish entirely, without reappearing as noise or re-entering as a residual, while the higher level remains a distinct frame (breaks F4).
3. The kernel or reapplicable method is shown not to survive a scale crossing, or a recording is shown to cross and be reapplicable as a method (breaks F3).
4. A macro pattern is derived using no atom outside the micro closure while still constituting a genuine new level, so the union collapses to a partition (breaks the D1/D2 census, forces re-census).
5. One of the six substrate terms is derived from the other five (breaks Fig 13 minimality and F6).

If any fires, the claim is withdrawn or the census is redone. Until one is run, nothing here is `grounded`.

---

## 6. Recommendation

1. Lead with the shape, not with a yes or no. State that the crossing is lossy and that `R_T` is the honest measure of what was given up (F1, F2).
2. Disambiguate "essential information" explicitly into the kernel reading and the detail reading; give a verdict for each and do not blend them (F3).
3. Ask for a measured `R_T` under a declared macro map, not for agreement that macro patterns are "really" derivable (F11).
4. Describe the residual before choosing a field or a frame; the field in this package (statistical mechanics and complex systems) is a contact venue, not a verdict (F9, Fig 9 :27-28).
5. Send the generator (the round-trip method and the refuter), not a recording of which patterns were derived on one occasion (Fig 4 :25).
6. Keep the second seat's internal-consistency check labelled as such; it is not a witness (Fig 2 :40).

---

## 7. Canonical usage check

Two framework sources govern how the figures may be used, read after §§0 to 6:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit, a shape rather than a name, with "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: the mode rule, step 6 (`R_T`), step 7 (SEARCHED / INWARD / OUTWARD, kept distinct), and the "Direction" discipline of binding the sought shape as an ordinary term.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "the answer is simply no" | **Refined, not retracted.** The literal reading is no, but that is a `specified` structural verdict, and the framework's actual deliverable is a shape with a measured gap. Bare no would be a verdict without the route. |
| "information is destroyed by coarse-graining" | **Retracted.** Fig 13 :31-32 says the discarded detail reappears above the crossing as noise. The correct claim is loss of availability at the macro level, not annihilation. |
| "the kernel survives unchanged" | **Narrowed.** Fig 4 :34-35 says the level remakes the method. Reapplicable, not identical, and not replayed. |
| "this is a problem about reductionism in physics only" | **Retracted.** The domain census makes D3 the membrane and D4 the verification frame; physics is a contact venue (statistical mechanics), and Fig 4 is domain-agnostic. |
| apparent strain Fig 12 :104 versus Fig 4 :27 | **Not strained.** Re-census: Fig 12 :104 governs composition after settlement within or across a level where the settled molecule becomes an atom; Fig 4 :27 governs the transform between scales. Different objects. Matches the README's re-census rule. |
| "second seat corroborates" | **Retracted at source.** The auditor shares the evidence pool. Internal consistency is not corroboration (Fig 2 :40). |
| shape-not-a-name applied to macro patterns | **Confirmed and narrowed.** The README's phrase governs a missing primitive. Here the missing thing is the measured gap and the source-discriminating instrument, not a seventh atom. The shape is the round trip. |

---

## 8. Strains and re-census

- **Fig 12 :104 versus Fig 4 :27.** Already dissolved in §7 by re-census. No strain remains; the two lines govern settlement-recursion and scale-crossing respectively.
- **Fig 1 :19 (per-slot, never aggregate) versus the practice of statistical mechanics (aggregate by definition).** This is a genuine tension between a figure rule and the chosen world field, not between figures. It is recorded, not hidden: the figures say aggregation loses the where-to-look signal (F5), while statistical mechanics is built on aggregation. The resolution is that the question asks about derivation from micro rules, so the loss is the answer, not a flaw in the choice of field. The field supplies the ground; the figure supplies the verdict.
- **"Essential" remains observer-relative in the world literature.** Fig 13 :49-51 says valence is relative to the residual, not carried. So what counts as essential depends on which residual is being served. This is recorded as an open item and is the reason the answer is a shape plus a declared residual rather than a universal yes or no.
- **After re-census: two strains named, none hidden, no verdict flipped.**

---

## 9. Verdict of this audit

The shape survives; a bare yes or bare no does not. Across scales the transform is lossy (F1), the loss is a measurable gap `R_T` and must be reported (F2), the reapplicable kernel crosses while the recording does not (F3), and the discarded detail reappears as noise (F4). Aggregation is one concrete mechanism (F5). Irreducibility is level-relative (F6). Underivability from a closure is different from unreachability at a budget (F8). The framework returns a shape and a route (F9). All of this is `specified` or `general`, none of it `grounded`, and this document is a simulated derivation, not a ground reading. The pre-registered refuter in §5 is the instrument that would move it.
