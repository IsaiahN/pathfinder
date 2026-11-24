# Figure-grounded audit: can economic theories predict adaptive systems?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure lines from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. The canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and `60_FIGURES_AS_METALAWS.md`. World sources opened 2026-11-23 are in `10_source_ledger.csv`.

---

## 0. The claim under audit, stated as a residual effect

> Question: Can economic theories make reliable predictions about systems where people adapt to policies and expectations?

Stated in effect terms, the residual is:

```
R = | Γ(b,a) − o' |   per object slot s
```

where Γ(b,a) is what the theory predicts given its belief b and action (policy) a, and o' is what actually happens. Symbols table: "The gap between prediction and observation. The central quantity: everything the system does is driven by it."

The distinguishing feature of this question is that the objects being predicted are themselves frames. They read the policy and often the published theory, form expectations, and change their decision rules. So the thing that would settle whether the prediction was right, namely the outcome o', is produced partly by a frame that has already seen the prediction. The measurement channel and the object are coupled.

**Bound answer-shape (written before the run):** a reliable prediction is one whose terms are invariant to the intervention and to the publication of the theory, whose residual stays indexed per slot, whose frame is independent of the adapting agents, and whose check is made by a seat that did not author the forecast. This shape is an ordinary term, so it can be refused (Fig 5 :65: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else.").

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: at least three frames in contact (the forecasting frame, the adapting agents, the measurement frame) plus one ground that settles the prediction. Symmetry: the policy-to-outcome map is ordered, the policy precedes the adaptation, but the adaptation is a *cycle* in which output re-enters as input (Fig 12 :121), so a chain vocabulary misstates it. Scale: individual slot, population aggregate, policy regime; a membrane lies between scales (Fig 4).

**One line per domain, actors / currency / anchor.** No nameable anchor means it is not a domain yet; all four below have one.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 the model frame | the model, reduced-form coefficients, deep parameters, the policy rule | prediction residual R, description length | a measured outcome that does not move when the model changes its story | partition: which terms are invariant to intervention |
| D2 the adapting agents | people, firms, investors, their expectations and incentives | payoff, action | their own constraints and payoffs, though they update on policy and on published theory | union: adaptation plus policy signal plus measurement |
| D3 the policy / seat frame | the policy maker, the rule, the target metric | welfare, outcome | the ground, unless the metric becomes a target and stops being a measure | union: intervention plus convention collapse |
| D4 the verification frame | the econometrician, the instrument, the data | identification, residual | the ground; independence between frames | union: instrument plus independence plus refusal seat |

**Partition or union.** Union. These four overlap. A single lever such as "use microfoundations" clears the region where only D1 binds, and leaves the intersections standing where agents adapt, or where the metric becomes a target, or where the instrument is pooled. Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either."

**Order by dependency (Fig 3).** Settle the invariant vocabulary before planning the intervention (link 3 before link 4). Describe the residual before choosing a frame (Fig 9 :27-28). Refuse a held but false regularity before minting a replacement (Formula step 2). Per-slot reading before aggregate reading (Fig 1 :19).

---

## 2. Figure census (bearing before verdict)

| figure | bearing here | verdict |
|---|---|---|
| 1 The Agent | residual per slot, ground as only metric | aggregate reliability hides live slot residuals |
| 2 The Ground | anchor must not update; independence; correlation valence | the central collapse: the outcome is produced by a frame that read the forecast |
| 3 Dependency Chain | break between vocabulary and planning | invariance is the unmeasured link |
| 4 The Membrane | method versus recording across regimes | reduced-form coefficients are recordings of one regime |
| 5 Mint Pipeline | guards, MDL bargain, persistent residual, write the shape down | a new theory is not owed; an invariant and a refusal are |
| 6 Closure / Reachability | import is the only wall-moving operator | invariance testing is an instrument extension, not an import |
| 7 Room Chain | agreement is variation, not a verdict | a consensus of forecasters is not corroboration |
| 8 Union Surplus | residual first, frame second; one evidence pool | the four domains form a union; low-overlap frames needed |
| 9 Leave / Arrive | describe effect not cause; union versus partition; filters not witnesses | the global yes/no is a shape-not-a-name gap |
| 10 Ground Maintainer | ground does not decay, channel does; convention collapse; non-updating anchor | target metrics and pooled readings sever the channel |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | agents are habitat, not ground; no standing good-actor list |
| 12 The Bond | cycle versus chain; settled molecule as atom; two currencies | reflexivity is a cycle; deep parameters are settled atoms |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | returns shape, not a reliability number |
| Operators / Symbols | R is the aim; negation is not a bond | the refusal of a held regularity needs ¬, not a new coefficient |

Strained readings are named below, not smoothed over.

---

## 3. Findings F1 to F10

### F1: The residual must stay indexed per slot; aggregate regularities hide adaptation

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 10 :26 names the mechanism: "stale percepts, dropped transients, saturated metrics, pooled readings".

A famous adaptive-system regularity is the historical negative correlation between inflation and unemployment (the Phillips curve). Under a policy that tries to exploit it, firms raise their inflation forecasts and the relationship breaks. That is a slot-level story: each firm's residual moved. The aggregate curve is the pooled reading in which the live slot signal disappears. A prediction can look reliable at the pooled level while every slot's residual is live and trending up.

**Refuter:** a controlled intervention in which the aggregate relationship survives unchanged AND every slot-level residual stays flat AND agents demonstrably observed the policy. If that runs, this finding fails. **Status: `triangulated`** (Fig 1 plus Fig 10, different quantities in the same figure set; world corroboration from the Lucas critique page, low-overlap field of economic methodology).

### F2: The ground updates: mutual-update collapse

Fig 2 :33: "The anchor must not update."

Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

This is the figure-grounded core of the whole question. When agents adapt to the policy and to the published theory, the outcome o' is generated partly by a frame that read Γ(b,a). The predictor and its object mutually update. They can converge, and the convergence is precisely the coherent drift that Fig 2 names. Agreement between the forecast and the outcome is then the pool talking, not two independent frames ranging against a fixed ground.

Popper's "Oedipus effect" and Soros's reflexivity (Wikipedia, Reflexivity (social theory), opened 2026-11-23) describe the same structure in a different vocabulary: "Reflexivity presents a problem for science because if a prediction can lead to changes in the system that the prediction is made in relation to, it becomes difficult to assess scientific hypotheses by comparing the predictions they entail with the events that actually occur."

**Refuter:** an intervention where agents demonstrably did not observe or respond to the theory or policy, so the outcome is independent of the forecast. A genuine exogenous shift is the clean case. **Status: `triangulated`** (Fig 2 plus reflexivity and Lucas, low overlap between the figure set and the social-theory and methodology sources).

### F3: Reliable prediction requires a term invariant to the intervention

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 10 :24: "the ground does not decay, the channel does".

Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."

Lucas's positive recommendation is to model "deep parameters" relating to preferences, technology and resource constraints, because those are assumed to govern individual behaviour and to be invariant to the policy rule. In figure terms, a deep parameter is a term settled against the ground at the individual scale. It can be composed over when the policy changes. A reduced-form coefficient is a recording of one regime; carried into another regime it is a replay, not a generator (Fig 4 :22: "Only methods cross up. Only head starts come down.").

So the figure answer is neither "prediction impossible" nor "prediction guaranteed". It is a conditional: prediction is reliable to the degree that the composition uses settled, invariant terms and keeps a channel to a ground that does not move with the policy.

**Refuter:** a policy change under which the proposed "deep" parameter moves systematically at the same rate as the reduced-form coefficient, so no invariant is available. **Status: `triangulated`** (Fig 2 plus Fig 4 plus the Lucas critique source, the last from a different field).

### F4: A metric that becomes a target stops being a measure

Fig 10 :47: "a convention that decides an outcome has stopped being one".

Fig 10 :49: "Declaring a meaning does not ground it."

Goodhart's law, as quoted on the source page: "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." Campbell's law (social research methodology, a low-overlap field): "The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor."

The figure reading: the metric is a convention, a shared reading of the ground. When the policy makes the metric decide an outcome (bonuses, targets, regulated risk weights), it acquires a stake in the reading and stops being a convention. It is now a frame that can be moved, so it is no longer an anchor. Danielsson's corollary in the Goodhart source is exact: "A risk model breaks down when used for regulatory purposes."

**Refuter:** a target regime in which the measured variable remains an unbiased sufficient statistic for the underlying outcome across the whole regime, with no sign of gaming. **Status: `triangulated`** (Fig 10 plus Goodhart and Campbell, the latter from psychology and research methodology).

### F5: The feedback is a cycle, not a chain

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."

Reflexivity in markets is a positive feedback cycle: prices affect sentiment, sentiment affects prices, and the loop closes until sentiment reverses. A comparative-statics model is a chain. The framework's own bond table says a chain cannot close by construction, so a chain vocabulary cannot represent a closing loop at all. This is a structural limit, not a complaint about parameter values. The machine-learning corroborator is *Concept drift*: "an evolution of data that invalidates the data model", and "Concept drift cannot be avoided for complex phenomena that are not governed by fixed laws of nature. All processes that arise from human activity, such as socioeconomic processes, and biological processes are likely to experience concept drift."

**Refuter:** an adaptive system with zero feedback sign whose dynamics are exactly a chain and remain a chain under intervention. **Status: `triangulated`** (Fig 12 plus reflexivity in social theory and concept drift in ML, both low overlap with the figures).

### F6: Settled parameters become atoms for the next level, but settling is not sufficient

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."

`THE_FORMULA.md` step 5: "SETTLE the ground settles it. Verified only by what pays. A gate is not the ground." And its amendment: "a library that grows is not a reach that grows."

A micro-founded parameter settled against individual data becomes an atom for the policy model. That is recursion, not a new theory. But settlement buys only the right to be composed over, not the guarantee that composition succeeds. A parameter can be well measured at the individual level and still fail to compose into an aggregate prediction when agents change their decision rules. This is where the Lucas programme can stall, and it is a live strain, not a defect in the figures.

**Refuter:** a demonstration that any settled individual-level parameter composes into an aggregate prediction without re-estimation under a changed policy. **Status: `triangulated`** (Fig 12 plus `THE_FORMULA.md`, different documents in the same framework; held as `specified`, unmeasured).

### F7: Agreement among forecasters is not corroboration

Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool".

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention."

Economics is unusually exposed here: forecasters often train on the same data, read the same literature, and use the same model families. Their agreement is one pool talking. Fig 8 :50: "two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Convergence is possible, but only the record of independent derivation separates it from adopted import (Fig 8 :51: "Only the record of where each came from separates them"). A Survey of Professional Forecasters consensus is a convention about a shared meaning, efficient for coordination and worthless as a verdict about the world.

**Refuter:** two demonstrably low-overlap forecasting frames (for example a structural model and a genuine natural experiment) ranging against the same non-updating anchor and returning the same shape. **Status: `triangulated`** (Fig 2 plus Fig 7 plus Seat Map, with the seat map sharing authorship but a different checking context; recorded as one framework pool).

### F8: The checking seat must not author the forecast and must be able to refuse

Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

Seat Map :171: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying".

An evaluation in which the model builder also writes the evaluation metric has merged Seat 1 and Seat 3. The reader then grades the report against the picture they already hold, not against the ground. The minimum viable arrangement requires an anchor that cannot be moved by anyone in the arrangement and a maintainer with nothing to gain from a particular reading. This is also why the outreach material leads with the refuter: the outside frame must be able to refuse before it has absorbed the interiors.

**Refuter:** an evaluation design in which the builder did not author the metric, cannot benefit from a favourable verdict, and holds a recorded refusal condition. **Status: `single-source` on the framework side (Fig 10 plus Seat Map, same author and pool); corroborated in a genuinely different field by Goodhart's "A risk model breaks down when used for regulatory purposes" (Danielsson, in the Goodhart source page).** Not upgraded to two independent witnesses.

### F9: The literal universal yes/no is a `gap`, not an overlooked fact

Fig 9 :32: "you get a kind of thing, never the answer itself".

Fig 13 :134: "Unreachable is a verdict here, not a silence".

Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

The question as written asks for a yes or no over *all* economic theories and *all* adaptive systems. After the census, that is a union of four conditions with different anchors, not one question with two opposite answers. The figures return the shape a reliable prediction must have: per-slot residual, invariant term, non-updating ground, independent frames, a refusal seat. They do not return a reliability coefficient. No amount of figure search supplies one, because the figures are a shape generator and stop at the limit of what instruments distinguish. This is a declared `gap` of the shape-not-a-name kind, not unreachable in principle by an instrument.

**Refuter:** a figure re-census that yields a line returning a universal reliability percentage or a global yes/no after re-census. **Status: `triangulated`** (Fig 9 plus Fig 13 plus the canonical figures README, which states the framework returns "a shape, not a name").

### F10: Most effort lands above the broken link

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Fig 3 :29: "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

The chain here is: perceive the residual per slot, have terms for what an invariant is, say what would count as progress under an intervention, plan the policy, then learn and carry. Estimation fits coefficients (a link that works and has abundant instruments). The broken link is whether the regularity is invariant to the intervention. It has no standard instrument in much applied work, so effort piles up above the break. Lucas's critique is "in essence, a negative result" telling analysts "how not to do economic analyses", which is a diagnosis of a broken link, not a claim that the chain cannot exist.

**Refuter:** a literature in which invariance is directly tested with an instrument under a changed regime rather than assumed. **Status: `triangulated`** (Fig 3 plus the Lucas methodology source, different fields).

---

## 4. Pre-registered refuter (written before the conclusion)

Per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. A policy intervention leaves all slot-level residuals flat and the aggregate relationship unchanged, with agents demonstrably aware of and adapting to the policy (breaks F1 and F2).
2. A proposed "deep" parameter moves systematically with the policy regime at the same rate as the reduced-form coefficient, so no invariant exists (breaks F3).
3. A metric used as a policy target remains an unbiased sufficient statistic for the underlying outcome across the regime, with no gaming (breaks F4).
4. Two demonstrably low-overlap forecasting frames, ranging against the same non-updating anchor, prove no more reliable than one shared evidence pool (breaks F7).
5. A figure re-census yields a line that returns a universal reliability coefficient or settles the global yes/no (breaks F9).
6. A settled individual-level parameter composes into an aggregate prediction under a changed policy with no re-estimation (breaks F6, the live strain).

If any fires, the corresponding finding is withdrawn and the shape is revised. Until one is run, no part of this audit is `grounded`.

---

## 5. Recommendation

1. Lead with the residual and the pre-registered refuter, not with a verdict on economics (Fig 10 :52).
2. Keep the four domain verdicts separate and never average them into a reliability percentage (Fig 1 :19).
3. Treat "reliable" as a bound ordinary term and test it per slot and per intervention (Formula "Direction"; Fig 5 :65).
4. Ask what would count as a failure before offering any framework material (Fig 9 :27-28).
5. Offer the method, not a recording: Fig 4 :22 "Only methods cross up. Only head starts come down."

---

## 6. Canonical usage check

Two local documents govern how the figures may be used, read after the first five sections.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the limit, the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of what instruments distinguish. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat must not ask for rulings the figures decide. "Needing a human RLHF ruling is itself the signal that I stopped deriving too early."

### Apparent strain, resolved by re-census

The first pass read Fig 2 ("the anchor must not update") as contradicting the premise of this question ("people adapt"). Re-census dissolves it. Fig 2 governs the *verification frame's* anchor, the thing the forecaster ranges against. It does not claim the *object of study* is static. In an adaptive economy, the adapting agents are **habitat** (Fig 11 :43: "The habitat is enumerated, never composed."), not ground. Fig 11 :73: "The habitat is not the ground." The anchor for a policy prediction must be found either in deep parameters that do not move with the policy, or in an outcome produced outside the feedback loop. If none exists, that is a `gap`, not a contradiction between figures. Matches the README rule: a reading that makes figures contradict one another has misidentified its domain.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "economic theories cannot reliably predict adaptive systems" | **Retracted as a global verdict.** The universal yes/no is a union of four conditions with different anchors, and the figures return a shape plus per-domain verdicts. F9 records it as `gap`. |
| "reflexivity contradicts the figure's non-updating anchor" | **Retracted and replaced by re-census.** Fig 2 governs the verification anchor; adapting agents are habitat (Fig 11), not ground. |
| "shape, not a name, forbids naming deep parameters" | **Narrowed and kept visible.** The README phrase governs a *missing* primitive. Naming preferences or technology is a binding from the economics frame onto an already-held candidate, so it is provenance, not an invented primitive. What is forbidden is claiming the framework derives which parameter. See `05` section 6. |
| "F8 is triangulated" | **Downgraded to `single-source` on the framework side.** Fig 10 and the Seat Map share an author and evidence pool. The Goodhart/Danielsson line corroborates the structure from a different field but does not make it a second independent witness. |
| F6 "settled parameters compose" | **Kept as a live strain.** Settling is necessary, not sufficient (`THE_FORMULA.md` step 5). Refuter 6 stands. |
| F2, F3, F4, F5, F7, F10 | **Canonically consistent.** Each cites verbatim figure text and has at least one genuinely low-overlap world corroborator. |

### Seven-question recursive derivation (summary)

1. **Is the residual per slot or aggregate?** Per slot. Fig 1 :19 and :22; the Phillips-curve breakdown is a pooled reading hiding live slot residuals.
2. **Does the anchor update?** In the naive design yes, and that is the mutual-update collapse (Fig 2 :33-35). A reliable design must find a non-updating anchor or report a gap.
3. **What term is invariant?** Deep parameters, as a binding from the economics frame (Lucas). Settled at the individual level, composable as atoms (Fig 12 :104), but sufficiency is unmeasured (F6).
4. **What is the failure class of a target metric?** Convention collapse (Fig 10 :47), Goodhart and Campbell. The measure acquires a stake and stops measuring.
5. **Is the feedback a bond the vocabulary holds?** Yes, the cycle (Fig 12 :121); a chain cannot close by construction. Reflexivity and concept drift corroborate.
6. **Is more consensus a mint?** No. A shared evidence pool adds a name, not an atom (Fig 8 :32, Fig 7 :35). Independence must be bought in proportion to the cost of being wrong (Fig 2 :42).
7. **Does any figure close the global yes/no?** No. Fig 9 :32 and Fig 13 :134 return a shape and treat unreachable as a verdict. `gap` recorded, not silence.

---

## 7. Per-domain verdict summary

| domain | verdict | mode | status |
|---|---|---|---|
| D1 model frame (invariant terms) | conditional reliability: holds if a non-updating invariant is found and composed; reduced-form coefficients are recordings of one regime | `specified` | triangulated (F2, F3, F6) |
| D2 adapting agents (feedback) | reliability is defeated where the loop closes on the forecast; the cycle is real and a chain model cannot represent it | `specified` | triangulated (F1, F5) |
| D3 policy / seat (target metrics) | reliability fails where the metric becomes a target; the measure stops being a measure | `specified` | triangulated (F4), F8 `single-source` |
| D4 verification (agreement, instrument) | agreement inside one pool is not corroboration; two low-overlap frames against a fixed anchor are required | `specified` | triangulated (F7, F10) |
| global yes/no over all theories | no figure line governs it; the question is a union and the framework returns a shape | `gap` | triangulated (F9) |

Verdicts are kept separate and never averaged. Strains after re-census: one live (F6 sufficiency of settled parameters), one narrowed correction (shape-not-a-name scope), one downgraded witness (F8). None hidden.
