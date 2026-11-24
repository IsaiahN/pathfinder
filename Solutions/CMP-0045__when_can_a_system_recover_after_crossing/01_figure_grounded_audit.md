# Figure-grounded audit: recovery after crossing, and hysteresis

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured in any named system. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output can *"quickly simulate an approximate answer/output"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources opened this session are listed in `10_source_ledger.csv` and discussed in `09_watson_answer.md`.

---

## 0. The residual, stated in effect terms

`R = |Γ(b,a) − o′|` per slot `s` (Formula step 1; Symbols table :38-44). Before a crossing, the library's prediction that the current control setting keeps the system in its current regime matches observation. After the crossing, the prediction that reversing the control restores the old regime fails against observation: the system stays where it is, or needs a much larger reversal to move. That failure is the residual.

- **Arity:** at least two quantities are compared (control against critical value). The event also involves an action and an observation, so it is a compound, not a single number.
- **Symmetry:** the comparison is ordered, not a symmetric join. The forward crossing and the return crossing are different terms, not the same term traversed twice.
- **Scale:** the crossing is local to one frame; which terms remain reachable is a property of that frame's library, and settled compositions become operands at the next level.
- **Per slot:** *"The residual is indexed by object slot, not aggregated"* (Fig 1 :19) and *"Aggregating across slots is how a live signal disappears into an average"* (Fig 1 :22). A global average that looks recovered while one component is still in the new regime is a legal state, not a healthy one.

**Anchor:** a measurement of system state against a ground that does not update on what any frame thinks (Fig 2 :29-30, :33). Agreement among observers is not the anchor. The currency is **reach**: the set of terms derivable under everything currently held (Symbols table :14-17; Fig 6 :42-43). The effect to be explained is an **asymmetry between forward and reverse reach**.

**What an answer would look like, bound as an ordinary term (Formula, "Direction"):** a system has recovered when its per-slot reach is again at least what it was before the crossing, as settled by the ground. This binding makes the question's own word refusable. Without it, the frame searches for a shape it cannot see: *"the shape a frame is searching for is not a term it holds"* (Formula, step 2).

---

## 1. Figure census (read before choosing any line)

| figure | bearing on this residual | preliminary verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | no ground reading here; measure per component |
| 2 The Ground | anchor must not update; independence; agreement is not verdict | anchor is the measurement, not observer agreement |
| 3 Dependency Chain | middle link (vocabulary/objective) breaks chains | "what counts as recovered?" needs an instrument |
| 4 The Membrane | directional filter; trip not reversible; measure R_T | governs crossing between scales, not within-level reach fall |
| 5 Mint Pipeline | refusals pay the same bargain; reach falls when a term is added | governs the forward crossing as a refusal |
| 6 Closure / Reachability | wall moves inward as well as outward; record grows, reach falls; a term cannot cycle back without new growth | decisive for hysteresis |
| 7 Room Chain | agreement compounds, evidence does not | no verdict from a room of agreeers |
| 8 Union Surplus | idempotent closure; no search adds an atom; import from a differing frame | governs recovery as import after SEARCHED |
| 9 Leave / Arrive | union versus partition; describe residual before frame; keep cuts reversible | governs the split and the intervention rule |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | governs loss of contact after crossing |
| 11 The Habitat | asymmetric power; isolation is substitution; capability is agent-and-habitat | governs managed recovery as permanent work |
| 12 The Bond | ⋛ comparison is ordered; isomer; cycle sign; melt/freeze/boil | governs threshold, path dependence, feedback |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | no figure line names a numerical recovery threshold |
| Operators table | ⋛ is ordered, symmetric = no | crossing and recrossing are different terms |
| Symbols table | R is the aim; ground is the anchor; reach is derivable | reach is the currency, not library size |

Strained readings are named in §7, not smoothed over.

---

## 2. Domain census (performed before figure lines were selected)

### 2.1 R by arity, symmetry, scale

A threshold is a binary ordered comparison `⋛` between two quantities. The event as a whole is a union compound: at least (i) the comparison crossing, (ii) a possible loss of standing of a term in the library, (iii) a possible substitution of habitat across a membrane, and (iv) a channel by which a checker reads the ground. These overlap; they are not independent. `Fig 9 :55`: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Symmetry is broken by the ordered comparison. Scale: local crossing, with cross-level propagation through settled molecules (Fig 12 :104).

### 2.2 One line per domain (actors / currency / anchor)

- **D1, the threshold domain.** Actors: the two quantities, the `⋛` comparison, the control action. Currency: which quantity is larger, a classification. Anchor: a measurement of system state against a non-updating ground. Nameable anchor, so this is a domain. Question type: partition (which side of the critical value).
- **D2, the closure and reach domain.** Actors: `Γ`, `atoms(Γ)`, `closure(Γ)`, refusals (`¬`), candidate terms `φ`. Currency: reach, which is non-monotone. Anchor: derivability under everything held, plus the ground settling a term. Nameable anchor, so this is a domain. Question type: partition of reachable versus unreachable; a union when two refusals bind on the same term.
- **D3, the membrane and habitat domain.** Actors: methods up, head starts down, habitats, actors in contact with the residual. Currency: contact and the round-trip gap `R_T`. Anchor: the measured gap and the ground, which does not update, as distinct from the habitat, which does. Nameable anchor, so this is a domain. Question type: substitution, not removal.
- **D4, the ground and channel domain.** Actors: the ground, the channel, the maintainer seat, outside frames. Currency: whether a reading reaches the checker. Anchor: the ground. Nameable anchor, so this is a domain. Question type: contact lost or maintained.

**No nameable anchor, no domain.** There is no separate "recovery percentage" domain. A percentage has no anchor here: it aggregates per-slot residuals into one number that the figures explicitly disqualify (Fig 1 :22). It is refused as a domain rather than admitted as one.

### 2.3 Partition or union

Union. The four domains overlap: a refusal in D2 changes what can be imported in D3; a dead channel in D4 means D1's comparison is read from a stale percept. One lever cannot clear all four. `Fig 9 :57`: *"a case in two conditions is not a harder case of either."* Verdicts are recorded per domain and never averaged.

### 2.4 Order by dependency (Fig 3)

Perception of the crossing (D1) requires a working channel (D4). Vocabulary of what is still reachable after the crossing (D2) is consumed by the objective (what counts as recovered) and the route (D3). The chain is ordered by dependency, not importance: *"Optimising a link that already works cannot rescue one that does not"* (Fig 3 :19). The middle link, having terms for what the crossing affords and being able to say what would count as progress, is the one that usually breaks, because *"A link with no instrument is not a link that works. It is a link nobody has looked at"* (Fig 3 :27). Resilience research has two instruments for "recovery" (return time versus disturbance absorbed), and that is evidence the middle link is genuinely unsettled rather than a vocabulary problem.

---

## 3. Findings, with verbatim figure lines and refuters

### F1 : A threshold is an ordered comparison; crossing and recrossing are different terms

Operators table :49: **"a threshold relation between two quantities"**. Operators table :51: **"is it about which is larger, rather than both being present? Yes."** The symmetry column is `no`. Fig 12 :52 (as quoted in the Operators table): *"a goal is a comparison, which is why a vocabulary without it cannot state one."*

A threshold therefore does not bind symmetrically. The forward comparison `control ⋛ critical` and the reverse comparison `critical ⋛ control` are different terms with different truth conditions. Hysteresis is not an accident layered on a symmetric gate; it is what an ordered comparison looks like when the reverse threshold differs from the forward one. Beisner (2012) states the field's version: *"This contingency represents hysteresis: a condition wherein the reverse path is not the same as the forward path."*

**Refuter:** exhibit a crossing for which the reverse comparison is the same term as the forward comparison at every queried value, so that the loop width is zero for all driving rates. That would make hysteresis a measurement artefact rather than an ordered-bond phenomenon, and this finding fails.

### F2 : In hysteresis the reach falls because something was added, not subtracted

Fig 6 :41-43: **"the wall moves outward on import. It also moves inward, and this figure is silent on that. What is recorded only grows. What is reachable is derived, and it can fall. A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted."** Fig 6 :43: **"So the closure and the reach are two quantities: one monotone, one not."** Fig 5 :55: **"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."** Seat Map :188 repeats the law for checking arrangements.

The forward crossing, on this reading, is a refusal: a term that previously composed no longer has standing. The record keeps the old term and adds the refusal. Library size goes up; reach goes down. This is the structural reason reversal is hard. It also explains why counting accumulated terms is the wrong progress measure: *"a library that grows is not a reach that grows"* (Formula step 5; Seat Map :194).

**Mode:** `general` on the structural law, `specified` on the claim that a given hysteresis loop is an instance of it (no system was measured here). **Triangulated** across Fig 5 amendment, Fig 6 amendment, Formula step 5 and Seat Map :188, four statements with low textual overlap that govern the same quantity.

**Refuter:** show a system whose reachable set is unchanged after crossing (no term loses standing, no new habitat) yet which displays a genuine loop in the ground reading. That breaks the identification of hysteresis with a fall in reach. Or show a library whose reach is monotone non-decreasing under all refusals, which breaks Fig 6 :42-43 directly.

### F3 : Recovery cannot be an un-crossing; a refused term cannot cycle back without growth

Fig 6 :45-46: **"a term cannot cycle in and out, because the refusal never leaves the record: it becomes reachable again only if something new is minted, which is growth. A store that deleted instead would have neither property, and could not tell never-held from held-and-given-up."**

This is the sharpest statement of the question's second half. Reversal is difficult because the record does not delete. To get the old state back you must add something new, not remove the refusal. The system that could simply un-cross would be one that deleted the refusal, and the figures say such a store loses two properties: safe computation of the fall, and the ability to distinguish never-held from held-and-given-up. Beisner (2012) reports the field-level analogue: in the alternative-state model, *"much more work must be done to reverse this action"*, and *"going back is not as simple as was going forward."*

**Refuter:** exhibit a crossing after which reversing the input restores the exact prior reachable set with no new term minted or imported and with the prior record intact. That is deletion-like reversal, which a grow-only record cannot perform; if observed in a system the framework claims to govern, the record model is wrong for that system.

### F4 : Recovery is possible, but only by growth, in a fixed order of three questions

Formula step 7: **"SEARCHED  is it in here and unfound? The closure does not change: same atoms, same wall, more of the space actually visited."** Then **"INWARD    extend the instrument, from one already returning something. Sharpen in our own terms."** Then **"OUTWARD   IMPORT. Characterize R in effect terms, then find the frame whose closure predicts its shape."** Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."** Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

The three recovery routes are distinct and ordered. SEARCHED is cheapest and both other routes assume its answer; if the old reach is intact and simply unfound, importing an atom is a wrong atom that costs more than starting from primitives (Fig 8 :42-43). INWARD extends an instrument already returning something, never one specified from a description (Fig 6 :32-35). OUTWARD imports with a provenance gate, a shadow test, and a debit against independence (Fig 8 :9-13; Formula step 7). Formula step 8 adds: **"IT IS THE REACH THAT DRIVES THE LOOP, NOT THE LIBRARY."**

**Mode:** `general` on the ordering, `specified` on which route a given system needs. **Triangulated** across Formula step 7, Fig 8 and Fig 6.

**Refuter:** show a recovery that changes the reachable set with no contact with a differing frame, no instrument extension and no new mint, while SEARCHED was genuinely exhausted. That breaks the import law. Or show that OUTWARD beat SEARCHED at equal cost when both were available, which breaks the stated order.

### F5 : Crossing changes the bond, not just the quantities, and the formula cannot see it

Fig 12 :13-17 gives the melt/freeze/boil case: **"three different changes, one written formula"**, **"the ingredients are recorded and the arrangement is not"**, **"nothing downstream can tell them apart, and nothing signals that anything was lost"**, **"the parts are not the thing"**. Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Before and after a hysteresis crossing the state variables can be the same; what changed is the arrangement of the reinforcing loops, so the same recorded formula describes two different substances. The world source closest to this is the physics definition: *"Hysteresis is the dependence of the state of a system on its history"* (Wikipedia, Hysteresis), with the agar example where melting and solidifying occur at different temperatures. Fig 12 :121 adds the feedback condition: **"The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** A positive feedback loop that closes is what makes the new state self-maintaining after the control is reversed.

**Refuter:** show a threshold crossing that changes only quantities while every bond arrangement is identical before and after, so the two states are the same molecule. Then the isomer/path-dependence reading does not apply and only the magnitude reading survives.

### F6 : Crossing between scales or habitats is directional and lossy; the return is not a replay

Fig 4 :21: **"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."** Fig 4 :28-30: **"it means the trip is not reversible, and something carried up and brought back down will not match what was sent. So take the round trip and measure the gap. Without it you are navigating by dead reckoning"**. Fig 11 :66-67: **"Isolation is not removal of the habitat. It is substitution of one habitat for another. Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."**

A crossing that substitutes a habitat cannot be undone by returning the control value, because two silent failures accompany the move: what you failed to reproduce and what you unintentionally introduced (Fig 11 :68-69). The round-trip gap `R_T` is the measurement of what the coarser description could not hold; it is not an error to zero out (Fig 4 :31-32).

**Mode:** `general` on the directional filter, `specified` on any claimed value of `R_T`. **Triangulated** across Fig 4 and Fig 11, which govern different objects (scale transform and habitat substitution respectively) but the same asymmetry.

**Refuter:** exhibit a scale or habitat crossing whose round trip has zero gap and whose habitat is unchanged, so the return is an exact replay of the forward path. That falsifies the lossy-membrane claim for that crossing.

### F7 : Managed recovery is permanent work because introduction is available and exclusion is not

Fig 11 :61-63: **"The seat's power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you. Which is why a managed ecosystem is permanent work rather than a solved state."** Seat Map :225 states the same law for checking arrangements.

This is the deepest reason a recovery intervention does not end at a solved state. You can add a herbivore predator, a policy, an instrument, an actor; you cannot subtract the contact relations the habitat already contains. So the intervention must be maintained. The world literature agrees in effect: *"might lock SES in an undesirable system state that can be difficult to reverse"* (Allen et al. 2016, USGS).

**Refuter:** exhibit an operator that removes an actor or a contact relation as cleanly as it adds one, with the removal visible at the ground. Then the asymmetry that makes recovery permanent work fails for that system.

### F8 : "When can it recover?" is a union of conditions, and the objective link has no single instrument

Fig 9 :56-58: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."** Fig 3 :25-27: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments. A link with no instrument is not a link that works."* Gunderson (2000) records two competing definitions of resilience in the same literature: the amount of disturbance absorbable before changing stable state, and the return time after a perturbation. Allen et al. (2016) add that ecological and engineering resilience assume different numbers of equilibria.

So the question's own verb "recover" has at least two objectives with different anchors. Choosing one is a binding, not a discovery, and must be recorded as such. No figure line selects between them. This is a **gap of the shape-not-a-name kind** for the choice of objective, reported as unreached rather than as silence (Fig 13 :134: *"Unreachable is a verdict here, not a silence"*; Fig 8 :39: **"a search that finds nothing is never a proof of absence."**).

**Refuter:** exhibit a single instrument that measures both the amount of disturbance absorbed and the return time in the same units for the same system, such that one number settles both objectives. Then the union reading collapses for that system.

### F9 : Keep every cut ranked and reversible; a cut is not the ground

Fig 9 :40-41: **"a wrong cut removes the answer and speeds up so keep every cut ranked and reversible"**, and Fig 9 :42: **"narrowing gets you close, the ground decides"**. Formula step 5: **"the ground settles it. Verified only by what pays. A gate is not the ground."** Fig 5 :42: **"The acceptance test is a bargain, not a threshold."**

A threshold crossing is a gate (a `⋛` classification), not a settlement. Treating the crossing itself as proof that the system is now permanently in the new state skips the ground. Conversely, an intervention that prunes possibilities must remain reversible and ranked, because a wrong cut both removes the answer and accelerates the search toward the wrong place.

**Refuter:** exhibit an intervention that permanently prunes the reach, cannot be unpruned, and is still shown by the ground to leave the correct recovery term reachable. Then the reversibility prescription is empty for that class of intervention.

### F10 : Recovery is a property of system-and-habitat, and the channel, not the ground, decays

Fig 11 :39-40: **"capability is a property of agent-and-habitat, never of the agent alone. A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** Fig 10 :24: **"the ground does not decay, the channel does."** Fig 10 :29: **"keep the anchor reachable"**.

After a crossing, a checker can lose touch with the ground through stale percepts, dropped transients, saturated metrics and pooled readings (Fig 10 :25-27). The output then is not a verdict but *"you have lost touch"* (Fig 10 :28). Recovery therefore requires two things at once: restored reach in the system, and a reachable anchor for the checker. Improving the system in isolation while the channel is dead changes nothing that can be verified. Figure 11 :72 supplies the standing refuter of its own claim: *"an agent-only improvement that moved the ground would refute the capability claim."*

**Mode:** `general` on the capability claim, `specified` on any given system's channel state. **Triangulated** across Fig 10, Fig 11 and Seat Map :93 (the anchor channel).

**Refuter:** an agent-only improvement that moves the ground (which Fig 11 itself names as the refuter); or a measurement showing that a system's reach improved while no contact relation changed, as read by an independent instrument.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: Seat Map :287, **"a falsifier written before the run is a design instrument, not only an honesty device."** The shape claim of this folder is: *reversal after crossing is asymmetric wherever a refusal was added or a habitat substituted, because the record grows while reach can fall and a refused term cannot cycle back without new growth; recovery is possible only by growth (SEARCHED, then INWARD, then OUTWARD import), with per-slot measurement against a non-updating ground.*

The claim is refuted if any of the following holds:

1. A refused term cycles back into reach without any new mint or import, with the prior record intact (breaks Fig 6 :45-46, F3).
2. A threshold crossing is symmetric in the sense that the reverse comparison is the same term at every value, with a zero loop width at all driving rates (breaks F1, Operators :51).
3. The reachable set is monotone non-decreasing under all refusals and crossings, or a hysteresis loop is observed with no change in reach (breaks Fig 6 :42-43, F2).
4. Recovery changes the closure with no import and no instrument extension after SEARCHED was exhausted (breaks Fig 6 :23, Fig 8 :32, F4).
5. A scale or habitat crossing has a zero round-trip gap and an unchanged habitat, so the return is an exact replay (breaks Fig 4 :28-30, F6).
6. Exclusion is available as cleanly as introduction for the actors in the habitat (breaks Fig 11 :61-63, F7).
7. A single instrument settles both resilience objectives in the same units, so the union reading of "recover" collapses (breaks F8).
8. A ground reading of a named system contradicts the per-domain verdict for that system. This is the only refuter that would move any claim toward `grounded` in the other direction.

If any of 1 to 7 fires, the relevant finding is withdrawn and the domain is re-censused. If 8 fires, the simulation is corrected to match the ground. Until a ground reading exists, no part of this folder is `grounded`.

---

## 5. Recommendation

1. Split before searching. Ask which condition holds: reach intact but unfound (SEARCHED), reach fallen by a refusal (growth required), habitat substituted (reproduce and import), or channel dead (restore contact). A single "recovery probability" over these conditions aggregates away the signal (Fig 1 :22; Fig 9 :54-58).
2. Measure per slot. A system-level average can be near zero with one component still in the new regime (Fig 1 :13, :19, :22).
3. Name the objective before measuring. Return time and disturbance absorbed are different objectives with different anchors (F8). Bind the chosen one as an ordinary term and state its refuter.
4. Keep cuts ranked and reversible (Fig 9 :41). A threshold intervention is a gate, not the ground (Formula step 5).
5. Import only after SEARCHED is exhausted, with provenance and a shadow test (Fig 8 :9-13; Fig 6 :24). A wrong atom costs more than starting from primitives.
6. Expect permanent work where the habitat was substituted (Fig 11 :63). Do not report a solved state.
7. Do not ask a room to corroborate. Agreement among frames that share an evidence pool is one witness (Fig 2 :40; Seat Map :163).

---

## 6. Canonical usage check (figures README, metalaw reading, seat map)

Read after §§0-5 and applied as a constraint on how the figures may be used.

- The canonical README states: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Every quote above was taken from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, not from a summary.
- The README's re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* Applied in §7 to the apparent Fig 4 versus Fig 6 strain.
- The README's limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* This folder therefore returns the shape of a recovery, not a numerical recovery time for any named system.
- Formula step 8 and Fig 13 :115: *"The set is closed. The arrangements are not."* No amount of composing inside the closure adds a new recovery mechanism; only import or instrument extension does.
- Fig 13 :134: *"Unreachable is a verdict here, not a silence."* F8's gap is reported in that form.
- Seat Map :281: *"An unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict."* All per-domain verdicts are `candidate` until a ground reading pays.

### Retraction and confirmation log (kept visible)

| earlier reading | status after the canonical check |
|---|---|
| First pass used Fig 5 :42, *"The acceptance test is a bargain, not a threshold,"* as the governing line for "crossing a threshold." | **Retracted and preserved.** Strain test failed: the question's threshold is the `⋛` comparison of two quantities (Operators :49), while the MDL bargain is a cost inequality governing whether a term is worth minting. Different quantities, so re-census moved the threshold line to Fig 12/Operators. The bargain line is retained in F9 to govern intervention acceptance, not the crossing. |
| First pass mapped hysteresis entirely to Fig 4's *"the trip is not reversible."* | **Narrowed, not erased.** Fig 4 governs the between-scale transform. The within-level fall of reach is governed by Fig 6 :41-46, which is the sharper account. Both are retained in F2 and F6 for their proper objects. |
| Temptation to conclude "recovery is impossible after crossing." | **Refused.** Fig 6 :45-46 allows it through new growth, and Fig 9 :44 says searching and finding nothing proves nothing. `Unreachable` is not silence, but it is also not a blanket impossibility claim. |
| "Hysteresis is a path-dependent difference in work" as a world-only finding. | **Confirmed by figures, independently sourced.** Beisner (2012) and Wikipedia (physics/engineering) state the same effect shape from outside the framework. Two low-overlap fields, one witness each, used as corroboration only (Fig 2 :31-32, :39-40). |
| The two definitions of resilience in the literature. | **Confirmed as a union, not a contradiction.** Gunderson (2000) and Allen et al. (2016) describe different objectives (amount absorbed versus return time); Fig 9 :4-5 says disagreements that do not shrink with effort are several well-formed questions, not one hard one. |
| Use of "shape, not a name" in F8. | **Narrowed.** The rule governs a missing primitive. Here the missing thing is an instrument that discriminates the two resilience objectives, so F8's gap is of the right kind. Naming an already-held atom (for example the network atom in a feedback account) would be a binding, not a forbidden invention. See `05_what_shape_means.md` §6. |

---

## 7. Strains and re-census

- **S1, Fig 4 versus Fig 6.** Fig 4 says the trip between scales is not reversible; Fig 6 says the wall moves inward and reach can fall within one closure. These are not the same object. Re-census assigns Fig 4 to D3 (membrane and habitat) and Fig 6 to D2 (closure and reach). No contradiction, and both findings kept.
- **S2, "threshold" as ⋛ versus threshold as MDL bargain.** Dissolved in §6 by re-census: different quantities. Kept visible as a retracted first reading.
- **S3, ordered comparison versus symmetric physical hysteresis loops.** In physics a loop is often plotted with symmetric axes. The figures' `⋛` is ordered, which is a claim about the comparison, not about the geometry of the plot. No strain after re-census: the loop's width is evidence that the two comparisons differ; the ordering is a property of the operator. Named rather than hidden.
- **S4, live type question: the ground of "recovery."** Fig 2 :36 says an anchor is legitimate when the question is constitutively about it. For "has the system recovered?" the question is constitutively about the system's state relative to a reference regime, so a measurement is a legitimate anchor. But if "recovered" is defined as stakeholder satisfaction, human judgment is the legitimate anchor for that question (Fig 2 :37). The two anchors are not interchangeable; F8 records the gap. Live, not smoothed.
- **After re-census: four strains, three dissolved by object reassignment, one live and bounded.**

## 8. What survives

The shape survives across all four domains: a threshold is an ordered comparison; a crossing that adds a refusal lowers reach while the record grows, so reversal requires growth rather than deletion; the three recovery questions are ordered SEARCHED, INWARD, OUTWARD; a scale or habitat crossing is directional and lossy; introduction is available and exclusion is not; recovery is system-and-habitat contact, not an agent-only property. What does not survive: any single symmetric "undo the lever" story, any averaged recovery percentage, any numerical threshold or return time, and any claim that this simulation has settled a real system's fate. Mode `specified`, ungrounded, candidate.
