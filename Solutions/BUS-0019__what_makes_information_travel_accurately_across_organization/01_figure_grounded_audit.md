# Figure-grounded audit: what makes information travel accurately across organizational levels, and what distorts it

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulated derivation checked for internal consistency against the figures, NOT a ground reading.** From *The Recursive Self-Improvement Trap*: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is that simulation. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** The local canonical figure text `FRAMEWORK/reference/03-FIGURES_TEXT.md` (cited as Fig N :line), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight framework essays, and the world sources in `10_source_ledger.csv`. Every quote below was checked character by character against the local figure text before use.

---

## 0. The residual, in effect terms

Ordinary wording: "information travels accurately across organizational levels" and "information becomes distorted". Stated as an effect:

- A decision-relevant signal is raised at level N about a situation. It must arrive at level N+k in a form that lets the receiver make the decision the ground would have supported had the receiver been in contact with that situation.
- **R** is the gap between the receiver's picture (prediction) and what the ground returns (observation). It is the central quantity, always a slice, indexed per slot (per decision, per signal), never a single global "communication accuracy" number. Symbols table :36: "The gap between prediction and observation. The central quantity: everything the system does is driven by it." Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
- **Accurate travel** = the decision-relevant content survives the crossing and the receiver can still range against the same non-updating ground. **Distortion** = the arriving content diverges systematically from what would let the receiver do that, in a way that is invisible from inside the levels that produced it.

What an answer would look like, bound as an ordinary term before the search (Formula "Direction"): a set of conditions, each stated in effect terms, each with a named anchor and a stated refuter, that decides whether a given signal crosses with its decision content intact. A single number, a universal org chart, or a named best medium is *not* the answer shape; the figures do not return that.

**Arity, symmetry, scale.**

- *Arity*: a chain of ordered handoffs, k >= 2, each link consuming what the previous produced (Fig 3 :20). More than two frames are involved when verification is included.
- *Symmetry*: not symmetric. Upward and downward crossings carry different things (Fig 4 :22), so the bond is ordered (→ sequence), not a symmetric join. This is why "more communication" is not a monotone good: direction and content decide.
- *Scale*: recursive. The same loop runs at each level; only actors, currency and anchor change (Fig 4 :19-20). Between levels sits a lossy transform (Fig 10 :68). There is no privileged level and no final room (Fig 7 :6).

---

## 1. Domain census (before choosing any figure line)

One line per candidate domain: actors / currency / anchor. A candidate with no nameable anchor is not a domain yet.

| id | domain | actors | currency | anchor | status |
|---|---|---|---|---|---|
| D1 | The vertical membrane, one level boundary | level N reporter, level N+1 receiver, the operational fact | the report or signal carried across the boundary | the operational fact, which does not move when either level pushes on it (Fig 2 :29) | admitted |
| D2 | The handoff chain, levels in sequence | the sequence of levels as rooms, each a frame with its own library | residual passed up, head start passed down; progress per handoff | ground pressure on each room (Fig 7 :39) | admitted |
| D3 | Verification, does the arrived picture match the ground? | two or more frames: reports, instruments, direct measurements | agreement and residual | the ground, never agreement (Fig 2 :35, :45) | admitted |
| X1 | "Communication effectiveness" as one global score | none nameable (it is a frame-internal quantity) | coverage, number of messages sent | none. Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." | not a domain; refused and absorbed into per-slot R |

**Partition or union?** Union, not partition. D2 is a recursive composition of D1 loops. D3 overlays each handoff in D1 and D2. They overlap, so the intersection (a handoff that is also a verification against the ground) is a compound with its own loop. Fig 9 :54-55: "And when the split lands on a union rather than a partition, unbundle before you search again. A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Verdicts are therefore kept per domain and never averaged into a single "communication quality" percentage.

**Order by dependency (Fig 3).** Perception, then vocabulary, then objective, then planning, then learn and carry. Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." The break usually sits between vocabulary and objective: Fig 3 :25-26: "Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." In information-flow terms, organizations instrument that data arrived and that a decision was made, but rarely instrument whether the receiving level has terms for what the situation affords and can say what would count as progress. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

**Strain test before concluding.** An early reading tried to make Fig 13's six physical terms (space, time, energy, spectrum, gradient, network) stand for reporting layers. That strains the figure: Fig 13 governs the substrate of physical systems, not org charts. Re-census assigns Fig 13 :74 ("Everything else is a composition across the two kinds, never within one") to the **composition rule** that any level must obey, not to a mapping of layers onto the six atoms. The network atom (Fig 13 :23-24: "network / that entities relate, and influence travels") is the one held structure with direct bearing on cross-level influence, and "level" is a scale parameter (Fig 4 :19-20), not a seventh term. No strain remains after that re-census. Recorded in §7 and in `11_audit.md`.

---

## 2. Figure census (bearing and verdict, quoted before concluding)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot, never aggregated; frame-internal quantities disqualified | no global accuracy score; per-decision residual only |
| 2 The Ground | two collapse modes (mutual update, common cause); anchor must not update; independence | governs D3; agreement is not accuracy |
| 3 Dependency Chain | ordered by dependency; middle link has no instrument | governs order; names where the chain breaks |
| 4 The Membrane | methods cross up, head starts come down, lossy transform, measured round trip | governs D1; a summary is not the situation |
| 5 Mint Pipeline | MDL bargain; a term explaining one occasion perfectly fails | governs what may travel as knowledge |
| 6 Closure / Reachability | import is the only wall-mover; describe the effect, not the cause | governs how an outside signal enters a level |
| 7 Room Chain | mirror chain: agreement compounds, evidence does not; progress per handoff | governs D2; a handoff must differ and match the residual |
| 8 Union Surplus | independence read twice; convergent derivation vs adopted import | corroborates D3 on independence (shared construct, not a new witness) |
| 9 Leave / Arrive | describe the residual before choosing a frame; union vs partition; filters vs witnesses | governs the method and the union reading |
| 10 Ground Maintainer | channel decay; convention that decides an outcome; bring the residual, not the source | governs D3 decay and the outreach order |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; isolation is substitution | governs "improve the messenger" vs change contact |
| 12 The Bond | arrangement is the substance; route needs bonds; isomer, functional group | governs the middle link's vocabulary |
| 13 Minimum Viable Set | composition rule; lineage is the proof; unreachable is a verdict | governs structure and the honest stop |
| Operators / Symbols | R is the aim; the ground is the anchor; → is ordered sequence | notation and the per-slot definition of R |
| THE_FORMULA | mode rule; refuse before mint; three questions when no term closes R | mode and procedure |

---

## 3. Findings F1 to F10

### F1. Accuracy is a measured round trip, not identity with the raw detail

Fig 4 :27: "The transform between scales loses information, and that is the point."
Fig 4 :28-29: "Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent."
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

A frontline-to-leadership summary is an abstraction. It must throw away detail to be reapplicable at the higher level. Accurate travel does not mean the summary equals the raw situation; it means the decision-relevant content survived and the loss (the round trip gap R_T) was measured rather than assumed zero. The common organizational fiction is that a clean dashboard is the situation. That is dead reckoning: confident about a position nobody checked. Mode `general` on the shape, `specified` on the claim that a given summary's gap is bounded.

**Refuter:** a level demonstrates that what went up and came back down matched on every decision-relevant slot, with the gap measured and non-zero but bounded against the ground. If the gap is zero on all slots, the transform did not actually cross a scale.

### F2. What may cross: methods upward, head starts downward, never recordings

Fig 4 :22: "Only methods cross up. Only head starts come down."
Fig 4 :23: "upward: a method that can be reapplied. Never the recording of a particular success."
Fig 4 :24: "downward: something that makes the next search cheaper. Never a replay of what worked once."
Fig 4 :25-26: "A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one."
Fig 5 :43-44: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."

Accurate upward travel carries a re-applicable method, not a one-off success story. A local fix reported upward as "what we did" is a recording of one occasion; replayed downward as a rule, it produces cargo-cult repetition. This is the mechanism behind "best practice" transfer that fails. Mode `specified`.

**Refuter:** a one-occasion recording, replayed downward into a different situation, still generates a valid new decision at the receiving level with the ground paying for it. If it does, the method/recording distinction does not bind in that case.

### F3. The two collapse modes: coherent drift and the shared evidence pool

Fig 2 :13: "no anchor; each updates on the others"
Fig 2 :14-15: "they converge, and what they converge on is whoever had the most influence"
Fig 2 :19: "they never talk, and still agree"
Fig 2 :20-21: "so the agreement is the pool talking, not two frames confirming each other"
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."
Fig 2 :30: "If it moves when you push on it, it is not an anchor."
Fig 2 :33: "The anchor must not update."
Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Two distinct distortions. **Mutual update**: levels calibrate their reports to each other, each adjusting to what the other wants to hear; the group converges on whoever has the most influence, and because nobody consults the ground, the drift is coherent and invisible. **Common cause**: two levels that never speak still produce identical reports because they read the same filtered dashboard; their agreement is the pool talking. In both cases the remedy is a ground that does not move when pushed. Mode `specified`.

**Refuter:** show a reporting anchor (an operational measurement, a customer outcome, a counter) that does not move when leadership pushes on it, and two genuinely independent instruments that still agree against it. If the anchor moves with the report, it was a frame, not an anchor.

### F4. Agreement is not evidence; independence decides its value

Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."
Fig 2 :44: "The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."
Fig 8 :48-49: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."

"Everyone agrees" is not accuracy. If the agreement comes from a shared source (one dashboard, one narrative cascade, one consultant's deck), it is the pool talking. But agreement about *meaning* is different and legitimate: a shared vocabulary across levels is the product, not a corruption. Organizational "alignment" on definitions is efficient; alignment on facts drawn from one pool is disqualifying. This distinction is why the fix is not "less communication" but "independent contact with the same ground." Mode `general` on the valence rule, `specified` on any given case.

**Refuter:** two frames with genuinely low overlap (different instruments or different evidence, not the same report) that agree against a non-updating anchor. If they do, their agreement carries evidence; if they only agree because they read the same source, it does not.

### F5. Channel decay: the ground does not degrade, the connection does

Fig 10 :24: "the ground does not decay, the channel does"
Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings"
Fig 10 :27-28: "the output is not a verdict, it is you have lost touch"
Fig 10 :29: "→ keep the anchor reachable"
Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

Much distortion is not a wrong ground but a degraded channel: stale information, dropped transient signals, a KPI that saturates and stops discriminating, pooled readings. Fig 10 calls the output "you have lost touch", a contact alarm rather than a verdict about the world. The practical consequence: training the messenger or adding a layer does not help if the channel to the ground is stale, saturated or pooled. Mode `specified`.

**Refuter:** show that the received picture tracks the ground across the full operating range, with no saturation, no dropped transients and disaggregated readings, measured per slot. If a metric saturates, the channel has lost discriminating power even while the numbers look healthy.

### F6. Residuals must stay per slot; the average hides the live signal

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
Fig 10 :26: "saturated metrics, pooled readings"

A single "communication accuracy" percentage, an engagement score or an averaged satisfaction index destroys the signal. The live failure sits in one decision slot, and aggregation folds it into an acceptable mean. This is a measurement instruction, not a metaphor: report the per-decision residual and its trend, not a pooled score. Mode `general`.

**Refuter:** produce an organization-level aggregate accuracy figure together with the per-slot residuals, and show that no slot carries a live positive residual that the aggregate conceals. If a live slot exists, the aggregate was a filter that handed you a verdict (Fig 9 :60).

### F7. The mirror chain: a handoff of the same closure is motion, not progress

Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not"
Fig 7 :14: "blending: novelty swamped to the mean"
Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
Fig 7 :37: "Progress per handoff has two factors. Zero either and the chain runs in place:"
Fig 7 :38: "the bracket's fidelity across the handoff"
Fig 7 :39: "the ground's pressure on the room"
Fig 7 :42: "The chain approaches the truth only as the world runs out of ways to refuse it. Which means the next room you book is the direction you travel, and booking a room like the last one is how a chain stops travelling at all."

If each level simply re-summarizes the previous level's summary, the same closure is handed along: agreement compounds while evidence does not, and novelty is swamped to the mean. Accurate travel needs two things per handoff: the bracket's fidelity must survive, and the receiving room must be under the ground's pressure. A room that merely echoes the last one adds motion, not progress. Mode `specified`.

**Refuter:** a handoff chain in which each receiving level is a genuinely differing room (its own evidence, its own instrument), the surfaced residual drives which room is consulted next, and evidence increases per handoff as measured against the ground. If evidence does not increase, the chain is a mirror.

### F8. The break is the unmeasured middle link

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."
Fig 3 :24: "Why the middle link is where chains usually break."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
Fig 3 :29-30: "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed. Most improvement effort in practice lands above the break, because that is where the measurements already exist."
Fig 12 :111-112: "A vocabulary without bonds can name a state and cannot name a route to one. A plan is a sequence. A goal is a comparison. Progress is a subtraction."

Organizations instrument that information arrived (perception) and that a decision was made (planning). They rarely instrument the middle: does the receiving level have terms for what the situation affords, and can it say what would count as progress? A data dictionary names ingredients; it cannot name the route. Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." This is why adding dashboards, meetings or reporting layers (effort above the break) fails to repair a chain whose middle link has no instrument. Mode `specified`.

**Refuter:** build an instrument that reads the middle link (the receiver's affordance vocabulary and progress criterion), and show the chain works when it is present and fails when it is absent, with the ground paying. If the chain works without it, the middle link is not the binding constraint in that case.

### F9. A convention that decides an outcome has stopped being one

Fig 10 :16-19: "the convention does not fix the bug / it makes the bug statable / a declared meaning is not a grounded one / → install what can be violated"
Fig 10 :47: "a convention that decides an outcome has stopped being one"
Fig 10 :49: "Declaring a meaning does not ground it."
Fig 2 :43: "Guard, from Figure 10: a convention that decides an outcome has stopped being one."

Harmonizing definitions across levels is a convention that makes disagreement statable, which is legitimate and useful. But when a standard or KPI is treated as the ground rather than as a fallible reading (the metric says X, therefore X is true), it has become a verdict authored by the seat, and a convention that decides an outcome has stopped being a convention. This is a distinct distortion from F5: F5 is a degraded channel, F9 is a healthy-looking channel whose output was promoted to ground. Mode `specified`.

**Refuter:** show a shared definition that remains violable and is corrected by the ground when it is wrong, with the correction recorded. If no observation could violate the standard, it is a constant carrying the seat's authority, not a convention.

### F10. The declared gap: no figure names the medium, the org chart, or a layer count

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :134: "Unreachable is a verdict here, not a silence"
Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 6 :30: "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."

No figure line selects which channel (town hall, dashboard, memo, stand-up, apprentice pairing) occupies a slot, nor how many layers an organization should have, nor a universal accuracy percentage. The figures return a shape, not a name. This is reported as a `gap` of the unreachable-at-this-budget kind, not underivable in principle: a given organization's medium is decidable by its own ground (does the receiver's picture track the operational fact per slot?), which is an instrument to build, not a line to quote. More searching inside the framework will not produce it (Fig 8 :32, "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."). "Unreachable is a verdict, not a silence."

---

## 4. Verdicts per domain (kept separate, never averaged)

| domain | status | verdict | mode |
|---|---|---|---|
| D1 vertical membrane | **triangulated** (Fig 4 membrane rule + Fig 10 :68 lossy transform between levels, low overlap: one governs what crosses, the other governs the actor/currency/ground difference) | Accurate crossing needs a re-applicable method upward and a head start downward, with the round trip gap measured. A recording of one occasion is the distortion. | `specified` |
| D2 handoff chain | **triangulated** (Fig 7 room chain + Fig 3 dependency chain, low overlap: one governs selection between rooms, the other governs link order; Fig 1 corroborates on no-aggregation) | A handoff that hands the same closure along is a mirror: agreement compounds, evidence does not. Progress needs a differing room, bracket fidelity and ground pressure. | `specified` |
| D3 verification | **triangulated** (Fig 2 anchor/independence + Fig 10 channel decay, low overlap: one governs correction against a ground, the other governs degradation of contact). Fig 8 corroborates on independence but shares the independence construct with Fig 2, so it is not an extra witness. | The anchor must not update; independence decides whether agreement means anything; decay is in the channel, not the ground; a convention that decides an outcome is a verdict. | `specified` |
| Gap (medium, org chart, percentage) | **gap**, unreachable-at-this-budget | No figure governs it. Build an organization-specific instrument; report the shape, not a name. | `general` on the limit |

The two collapse modes in F3 (mutual update and common cause) are **single-source** as named mechanisms within Fig 2, but they are cross-checked by independent world witnesses of low overlap (serial-reproduction experiments in human cultural evolution, social-influence experiments in complex systems, and the effective-sample-size result in survey statistics). Those corroborate the shape; they never override the figure verdict.

---

## 5. Pre-registered refuter (written before the conclusion)

"A falsifier written before the run is a design instrument." The shape claim is refuted if any of the following holds:

1. A level demonstrates that its received picture matches the operational ground on every decision-relevant slot, with the round trip gap measured, non-zero and bounded, and the ground did not move when pushed (breaks F1 and F3).
2. Two frames with genuinely low overlap (different instruments or different evidence, not the same report) agree against a non-updating anchor (breaks F4).
3. A one-occasion recording, replayed downward into a different situation, still generates a valid new decision with the ground paying (breaks F2).
4. An instrument reads the middle link and the chain works when it is present and fails when it is absent (breaks F8).
5. A single lever, such as one new reporting system, clears all three domain conditions (transfer fidelity, chain independence, verification) simultaneously with measured ground contact (breaks the union reading, F10 and §1).

If any fires, the corresponding finding is withdrawn and the affected domain verdict is re-derived. Until one is run, nothing here is labelled `grounded`.

---

## 6. Recommendation

1. Keep R per decision slot. Kill the single accuracy score (F6). Publish the per-slot residual and its trend.
2. Treat the ground as an anchor that must not update. Name it explicitly for each domain: the operational fact, the customer outcome, the counter (F3).
3. Buy independence deliberately where the cost of being wrong is high: separate instruments, separate experience, an unauthored pool of checkers (F4, Fig 2 :42). Do not select checkers for likely agreement.
4. Carry methods upward and head starts downward. Refuse one-occasion recordings as "knowledge" (F2). Require a source gate and a shadow test for any outside atom (Fig 6 :12-14, Fig 8 :50-52).
5. Measure the round trip gap R_T rather than assuming the summary is the situation (F1).
6. Instrument the middle link before adding more reporting machinery (F8). A data dictionary is not a grammar of routes.
7. Keep shared meanings as conventions, but never let a convention decide an outcome (F9).
8. Report the gap honestly: no figure selects a medium or a layer count (F10).

---

## 7. Canonical usage check, strains, retractions and confirmations

Two canonical sources were read after the first six sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the available instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md` and the Symbols table: R is the aim and the anchor is the ground; a gate is not the ground; mode must be stated.

### Strains and re-census

| strain | first reading | after re-census |
|---|---|---|
| S1: Fig 13 six-term substrate mapped onto reporting layers | I first tried to read the six physical terms as layer types (strained) | Re-census: Fig 13 :74 governs the cross-kind composition rule that any level obeys; "level" is a scale parameter (Fig 4 :19-20) and network is the held influence atom (Fig 13 :23-24). Different object, no strain. |
| S2: "More communication is better" vs Fig 4 direction rule | Ordinary intuition says more channels always help | Re-census: the bond is ordered. Upward methods and downward head starts are different currencies (Fig 4 :22). More of the wrong currency is more distortion. Dissolved. |
| S3: Fig 2 "agreement is worthless" vs Fig 2 :41 "agreement about a shared meaning is the product" | Looks like a contradiction | Re-census: Fig 2 :39 names "Correlation has valence". Disqualifying for a verdict, efficient for a convention. Two quantities, no contradiction. Dissolved. |
| S4: F9 convention vs F5 channel decay | Both look like "bad reporting" | Re-census: F5 is a degraded channel (contact lost); F9 is a healthy channel whose output was promoted to ground (status error). Different mechanisms, both retained. |

No strain is hidden. After re-census, none remains live.

### Retractions and confirmations of my own earlier readings

| earlier reading | status |
|---|---|
| "A global communication score would be useful for benchmarking" | **Retracted.** Fig 1 :19/:22 disqualify it; it is the frame-internal quantity X1 with no anchor. Kept visible here as the refused candidate. |
| "Fig 13 maps layers onto the six terms" | **Retracted and re-censused** as S1. The figure governs the composition rule, not an org chart. |
| "Agreement across levels proves information is travelling accurately" | **Retracted.** Fig 2 :40 and Fig 8 :48-49 show agreement from a shared pool is one witness. Confirmation only when independence is bought (Fig 2 :42). |
| "Shape, not a name" used to forbid naming any concrete mechanism | **Narrowed.** The figures README phrase governs a *missing* primitive. Naming an already-held mechanism (e.g., a non-updating anchor, an independent instrument) is a binding with provenance, not an invented primitive. Same correction recorded in `05_what_shape_means.md` §7 and in sibling BUS solutions. |
| F1 to F10 | **Confirmed** after the canonical check, with S1 to S4 dissolved by re-census. |

### Updated verdict

The shape survives: accuracy is a measured round trip under a non-updating anchor with independent frames; distortion is a recording crossing instead of a method, a mirror chain, a decayed or saturated channel, an averaged-away live slot, or a convention promoted to ground. What the figures do not give is a medium, an org chart, or a percentage. That gap is declared as `unreachable`, not as silence. Mode `specified` on domain claims, `general` on the structural shape, not `grounded`.
