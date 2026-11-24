# Figure-grounded audit: can a forecast stay reliable when it changes its subject?

**Mode of this document: `specified` on the separator and the per-domain claims, `general` on the structural shape, `gap` on a universal reliability guarantee. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."*

**Status of this derivation: a simulated derivation checked for internal consistency against the figures, NOT a ground reading.** *The Recursive Self-Improvement Trap* (essay) says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Figure source.** Every figure quote is taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md` (local copy of the figures README) read with `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. No figure quote was taken from a summary or from memory.

---

## 0. The question restated as an effect, with the sought-for shape bound as an ordinary term

> Can forecasts remain reliable when predictions themselves alter people's behavior and thereby change the system?

**Effect statement.** Let Γ be the forecaster's library, b its belief, a its act of publishing, and o' the observed outcome. The forecast is Γ(b,a). Its residual is R = |Γ(b,a) − o'|, indexed per slot s (Fig 1 :19). When the forecast is published, agents in the system treat it as credible and employ it (King and Mertens 2023 call this "employment"); their changed actions become part of what produces o'. So the forecast is scored against an observation that its own employment helped to make. In effect terms the question asks: can R stay small and non-increasing when the predictor is coupled into the thing it predicts?

**Option A:** yes, reliability is robust to behavioral response, so accuracy alone is the right test. **Option B:** reliability survives only under conditions that keep the outcome an anchor the forecast does not move, keep R per slot, treat the forecast as an introduced actor, and verify against a held-out measure with independent frames.

**What an answer would look like (Formula step "Direction", binding the preference as an ordinary term).** A checkable separator: a finite set of conditions, each with a verbatim figure line and a refuter, that say when a published forecast's residual stays small and when it is a coherent drift. Written down before the run so it can accrue a residual like any other term. This is the pre-registered refuter in §5.

---

## 1. Residual described in effect terms (arity, symmetry, scale)

- **Arity.** At least three operands: the forecast frame, the agents' employment of it, and the ground that settles the outcome. The question bundles two conditions: (i) is there a stable statistical regularity to predict at all, and (ii) does publication perturb that regularity? These are a **union**, not a partition (Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."*). A case with both conditions is a compound with its own loop, not a harder case of either (Fig 9 :55).
- **Symmetry.** The coupling is a directed **cycle**, not a symmetric join: forecast → employment → changed behavior → outcome → next forecast (Fig 12 :121 *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*). Because it is ordered, a pooled correlation between "forecast published" and "outcome observed" cannot choose the arrow. Positive sign is self-fulfilling; negative sign is self-defeating (King and Mertens 2023). A symmetric bond (+) would erase exactly this distinction.
- **Scale.** The forecast is a compact model at one scale; agents act at the system scale; publication crosses the membrane between prediction-as-observation and prediction-as-intervention (Fig 4 :22 *"Only methods cross up. Only head starts come down."*). The condensation carries a round-trip gap R_T that must be measured, not assumed zero (Fig 4 :30).

---

## 2. Domain census (one line per domain: actors, currency, anchor)

No domain is admitted without a nameable anchor. Where the anchor is a frame, that is recorded as the finding, not hidden.

### D1. The forecasting frame

- **Actors:** the model Γ, belief b, the forecast F, the analyst.
- **Currency:** residual R (prediction error per slot).
- **Anchor:** the ground, "whatever settles the question and does not change its answer because of what any frame thinks" (Fig 2 :29). **This anchor fails under performativity**: when F moves o', the outcome starts updating on F, so it is no longer an anchor (Fig 2 :33, :34).
- **Question type:** partition boundary (which compositions can cross from model to ground without corrupting the ground).
- **Status of verdict:** `triangulated` across Fig 2 (collapse geometry) and Fig 10 (ground-maintainer office), two figures with low overlap (one is about drift geometries, the other about channel decay).

### D2. The social habitat (agents and institutions)

- **Actors:** people, their actions a, and the forecast F now an introduced actor in their habitat.
- **Currency:** agents' payoffs and behavior.
- **Anchor:** the real consequences that settle things for the agents *if* those consequences are measured by something the forecast did not shape. Where the measure is itself forecast-driven (arrests in a predicted hotspot, grades after a predicted "bloom"), the anchor is interpretively sensitive and fails (King and Mertens 2023).
- **Question type:** the habitat is enumerated, never composed; the forecast is an introduction, not a new primitive.
- **Status of verdict:** `triangulated` across Fig 11 (introduction, cascade, valence), Fig 6 :23 (bound moves only on contact with a differing closure), and Fig 8 :48 (independence is one quantity read twice).

### D3. The verification frame (the one asking "is it reliable?")

- **Actors:** evaluator, the claim, the ground, and any second frame.
- **Currency:** evidence and the reliability verdict.
- **Anchor:** a held-out outcome that does not read the forecast and does not share the predictor's evidence pool (Fig 2 :31-32). If the verifier reads the same forecast-derived data, it is one pool talking (Fig 2 :40).
- **Question type:** triangulation, not negotiation.
- **Status of verdict:** `single-source` for the verifier-non-access rule (Fig 10 :42) and `triangulated` for independence (Fig 2 + Fig 8).

**Partition or union overall:** a **union** of D1, D2, D3 with an unassignable shared fraction. One lever (for example, "publish less often") can clear D1 while leaving D2 and D3 standing, because the coupling in D2 still binds (Fig 9 :55-57).

**Dependency order (Fig 3).** Settle the anchor first (link 1, perception), then build vocabulary for the forecast-as-intervention (link 2), then state what counts as "reliable" (link 3, objective), then plan (link 4). The chain usually breaks at link 3 because "the outcome" is itself moved by the forecast. Effort spent above the break, such as refining model accuracy, arrives at a step that cannot use it (Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."*; Fig 3 :20 *"The chain is ordered by dependency, not by importance."*).

---

## 3. Figure census (verbatim, quoted before concluding)

| figure | bearing on this question | verdict |
|---|---|---|
| Fig 1 The Agent | residual is per slot; a frame cannot score itself with a quantity it also produces | governs the indexing and the self-score prohibition |
| Fig 2 The Ground | the anchor must not update; mutual update is coherent drift; alignment is triangulation | decisive for D1; governs the whole verdict |
| Fig 3 Dependency Chain | the chain breaks at the objective/anchor link; a link with no instrument is not a working link | governs the order and the broken link |
| Fig 4 The Membrane | only methods cross; the round trip loses information and needs a measured gap | governs publication as a crossing and R_T |
| Fig 5 Mint Pipeline | three guards as a product; direction of the question is outside the mechanism | governs the shape claim as an ordinary term |
| Fig 6 Closure / Reachability | import is the only wall-moving operator; a wrong atom costs more than primitives | governs "publishing adds an actor" as an introduction with provenance |
| Fig 7 Room Chain | same closure handed along: agreement compounds, evidence does not | governs pooling many agreeing forecasters |
| Fig 8 Union Surplus | independence is one quantity read twice; describe the residual before the frame | governs independent frames and the union reading |
| Fig 9 Leave / Arrive | union vs partition; describe the effect before the cause; filters are not witnesses | governs the union and the gap |
| Fig 10 Ground Maintainer | ground does not decay, channel does; verifier cannot reconstruct the claim; room changes with question | governs held-out ground and non-access |
| Fig 11 The Habitat | introduction available, exclusion not; valence relative to residual; contact cascades | decisive for D2 |
| Fig 12 The Bond | cycle sign decides closure; isomer, functional group, two currencies | governs self-fulfilling vs self-defeating and the interpretive/substantive split |
| Fig 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the gap on a universal guarantee |
| Operators table | negation is a refutation; a goal is a comparison | governs the pre-registered refusal |
| Symbols table | R is the gap between prediction and observation; the ground is the anchor | governs the residual definition |

Strained readings are named, not smoothed over. One live strain (S1) is recorded in §8.

---

## 4. Findings F1 to F10

### F1. The forecast stops being a prediction and becomes a co-updating frame (decisive, D1)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30: "If it moves when you push on it, it is not an anchor." Fig 2 :33: "The anchor must not update." Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

When publishing F changes agents' actions and hence o', the outcome updates on F. By Fig 2 :30 it is not an anchor. By Fig 2 :34 the situation is collapse 1 (mutual update): forecast and outcome drift together, and because they agree, nobody notices. The forecast can therefore be "accurate" in the sense that it matched what happened, while having helped to make what happened. This is the structural core of the self-fulfilling prophecy literature (Biggs 2009; King and Mertens 2023) and of Goodhart's law (Goodhart 1975; Strathern 1997).

**World corroboration, not the verdict.** Biggs (2009) notes that the actors "fail to understand how their own belief has helped to construct that reality; because their belief is eventually validated, they assume that it had been true at the outset." King and Mertens (2023) say self-fulfilling prophecies "prompt no error signals; truth shrouds their mistakes from humans and machines alike." Both are independent fields (sociology; philosophy of prediction) and both corroborate Fig 2 :34. They do not decide it.

**Refuter.** Show a forecast whose employment demonstrably moves the outcome, yet whose per-slot residual against a ground that does not read the forecast stays small and non-increasing across at least two independent frames. If that is shown, F1 fails.

**Status: `triangulated`** (Fig 2 collapse geometry + Fig 10 channel office, low overlap).

### F2. The predictor cannot certify its own reliability (D1, D3)

Fig 1 :27: "A frame cannot score itself with a quantity it also produces." Fig 1 :23: "The ground enters as the only metric." Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

If F helps produce o', then scoring F against o' is a frame scoring itself with a quantity it also produces. The reported accuracy of a performative forecast is therefore frame-internal, like coverage or predicates minted in Fig 1 :24-27. A reliability claim needs a verifier that did not author the forecast and a ground the forecast did not shape.

**Refuter.** Exhibit a single frame that certifies its own reliability against an outcome its employment produced, with an independent ground confirming the certification. If that works, Fig 1 :27 is wrong as applied here.

**Status: `single-source` for the self-score line (Fig 1), corroborated by Fig 10 :42.** Corroboration from a different figure with a different office, so weak triangulation; recorded honestly.

### F3. Reliability must be indexed per slot, not averaged (D1, D3)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13: "a global R near zero with one live slot residual is a legal state."

A published forecast may be accurate on average while systematically wrong for the subpopulation whose behavior it changed. The Petalas et al. (2017) experiment is exactly a per-slot result: a negative message reduced risk taking (number of inflations fell from baseline M = 5.86 to M = 5.29, p < .001) and a positive message raised it (M = 6.24, p = .010), with earnings lower in the negative condition. A pooled accuracy figure would have hidden both shifts, because the underlying burst probabilities never changed.

**Refuter.** Show that a performative forecast's residual is uniform across all relevant slots, or that per-slot indexing changes no verdict in a published empirical case.

**Status: `single-source` (Fig 1), structurally decisive for the measurement prescription.** World corroboration is per-slot empirical, not a figure.

### F4. Self-fulfilling and self-defeating are the two signs of one cycle (D2)

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."

The feedback loop is a cycle whose sign decides the outcome. Positive sign: the forecast induces the behavior that realizes it (self-fulfilling; Biggs 2009, King and Mertens 2023, Petalas et al. 2017). Negative sign: the forecast induces avoidance and is defeated (self-defeating; King and Mertens 2023 give the hotspot example where patrols displace offenders, lowering recorded crime). Because the sign is a property of a directed cycle, a symmetric correlation between forecast and outcome cannot distinguish the two. The bond is ordered (→) with a sign, not a symmetric +.

**Refuter.** Exhibit a case where self-fulfilling and self-defeating outcomes are produced by the same loop sign over the same atoms, so the sign does not decide closure.

**Status: `single-source` (Fig 12) for the sign-decides claim, with `triangulated` world corroboration from two genuinely low-overlap fields (philosophy of prediction; experimental psychology).** The world sources agree with each other and with the figure, but they share the Mertonian prophecy literature, so that agreement is one pool, not two independent witnesses.

### F5. Publishing is an introduction into the habitat with a cascade (D2, decisive)

Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not." Fig 11 :43-44: "The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :52: "And contact cascades." Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

A forecast is a term in Γ; publishing it introduces that term as an actor into the agents' habitat. You cannot un-introduce it (exclusion is not available), so reliability is a property of forecast-and-habitat contact, not of the model in isolation. A better model that does not change the contact between forecast and agents changes nothing about reliability. Biggs's depositors and King and Mertens's predictive-policing example are the same introduction with a cascade two or three steps out (Fig 11 :52-53).

**Note on import.** Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Introducing the forecast to the habitat is an introduction of an actor, not the import of a new primitive into Γ. No atom is added by publication (Fig 6 :26 "The world does not gain primitives; a frame gains access."). Treating it as a wall-moving import would be a strain, and is refused.

**Refuter.** Show a case where publishing a forecast changes no agent's action and no measure, so no actor was introduced and the habitat is unchanged (then F5 does not apply to that case).

**Status: `triangulated`** (Fig 11 habitat + Fig 6 bound + Fig 8 independence, three low-overlap figure offices).

### F6. The world's three names for this collapse corroborate but do not decide it (D1, D2)

Read in full via public pages and search index (see `10_source_ledger.csv`):

- **Goodhart (1975)**, quoted at Cambridge (McIntyre page): "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." Strathern's restatement: "When a measure becomes a target, it ceases to be a good measure." Field: economics and measurement.
- **Campbell**, quoted in Rodamar 2018: "The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor." Field: social science methodology.
- **Lucas (1976)**, quoted in Rudebusch 2002: "a change in policy will systematically alter the structure of econometric models." Fudenberg and Levine (2009) formalize the same point as a "self-confirming equilibrium" in which "a behavioral parameter that is estimated under one government policy may not be invariant to changes in that policy."

These three names describe the same structural fact: a regularity used by the agents who generate it stops being invariant. That is Fig 2 :34 and Fig 10 :71-72 (*"The room composition is a function of the question. When the question changes, the room should change."*) in the economics and measurement vocabulary. They are genuinely lower-overlap witnesses relative to the framework, but Goodhart, Campbell, Lucas and their commentators are **one broad measurement-and-policy evidence pool**, not four independent witnesses. Agreement from a shared pool is one witness (Fig 2 :40).

**Refuter.** Produce a controlled case where a regularity remains invariant after being made a target under a non-updating ground. That would be evidence against the universal form of Goodhart and against F1's mechanism; it would not by itself reverse the figure verdict, which is structural.

**Status: world corroboration only. It never sets the verdict.**

### F7. Blind verification and independent frames are required (D3)

Fig 10 :52: "Bring a characterised residual, never the source." Fig 8 :45: "Two frames together reach what neither reaches alone." Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus." Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

To test whether a forecast stayed reliable, give the verifier the residual and the pre-registered refuter, not the model's interiors. Use a held-out outcome that the forecast could not shape, and at least two frames whose evidence does not overlap the predictor's. If the verifier reads the same forecast-derived series, agreement is the pool talking (Fig 2 :40). A crowd of forecasters who all read the same forecast is one long room: "same closure, handed along; agreement compounds, evidence does not" (Fig 7 :12-13).

**Refuter.** Show that a reliability verdict from two frames sharing the predictor's evidence carries the same weight as one from independent frames with a held-out ground.

**Status: `single-source` for non-access (Fig 10), `triangulated` for independence (Fig 2 + Fig 8).**

### F8. The broken link is the objective/anchor link, not the model (D1, D3)

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Petalas et al. (2017) report that although no changes occurred in the burst probabilities, "participants did not pick up on this lack of change." There was no instrument available to the agents that could separate "the world changed" from "the forecast changed my reading of the world." This is the middle link of Fig 3: having terms for what a situation affords but no term for what would count as progress, so it attracts the fewest instruments (Fig 3 :25-27). The practical consequence is that effort spent on forecast accuracy is effort above the break.

**Refuter.** Show an instrument that lets agents discriminate a real change in the ground from a forecast-induced change in their own behavior, and show that reliability improves with model accuracy once the instrument exists.

**Status: `single-source` (Fig 3), with a direct experimental corroboration of the missing-instrument condition.**

### F9. What survives: the separator, with modes

| claim | mode | figure / source |
|---|---|---|
| A published forecast can move the outcome it predicts | `general` (structural possibility) | Fig 11 :61, Fig 12 :121; Petalas et al. 2017 |
| When it does, the outcome is not an anchor and naive accuracy is coherent drift | `specified` (falsifiable) | Fig 2 :29-30, :33-34 |
| Reliability requires per-slot residuals and a held-out, non-updating ground | `specified` (falsifiable) | Fig 1 :19, Fig 2 :29, Fig 10 :24 |
| Self-fulfilling and self-defeating are the two signs of one cycle | `specified` | Fig 12 :121; King and Mertens 2023 |
| The forecast must be treated as an introduced actor with cascading valence | `specified` | Fig 11 :43-44, :49-51, :61 |
| A universal reliability guarantee, coefficient, horizon or winning method | `gap` | Fig 9 :32, Fig 13 :134 |

### F10. Gap, not silence

No figure line returns a numerical reliability bound, a prediction horizon, or a rule for how much to publish or to whom. Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence." Fig 8 :39: "So a search that finds nothing is never a proof of absence." The gap is of the **shape-not-a-name / unreachable-at-this-budget** kind, not underivable in principle: a ground-measuring instrument plus a pre-registered refuter is owed, and importing a reliability number against a budget limit would add an atom that was not needed (Fig 6 :24 "A wrong atom costs more than starting from primitives."). "Unreachable is a verdict, not a silence."

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written before the run is a design instrument. The shape claim is that reliability under performativity is conditional on (a) an outcome anchor that does not update on the forecast, (b) per-slot indexing, (c) treatment of the forecast as an introduced actor, and (d) held-out verification with independent frames. It is refuted if any of the following holds:

1. A forecast whose employment demonstrably changed the outcome keeps a small, non-increasing per-slot residual against a ground that does not read the forecast, across at least two independent evidence frames. (Breaks F1 and F2.)
2. A measure that updates on the forecast is shown to settle the reliability question anyway. (Breaks Fig 2 :33.)
3. A single frame certifies its own reliability against an outcome its employment produced, with independent ground confirmation. (Breaks Fig 1 :27 and Fig 10 :42.)
4. Self-fulfilling and self-defeating outcomes are shown to arise from the same loop sign over the same atoms. (Breaks Fig 12 :121.)
5. For a class of forecasts no held-out outcome can be defined even in principle; then that class is a `gap`, not reliable and not unreliable by this test. (Confirms the gap rather than refuting the separator.)

If 1 to 4 fire, the shape claim is withdrawn. Until one is run, nothing may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with the separator and its refuter, not with a verdict about whether forecasting "works." Fig 4 :25 (*"A recording carried upward looks like knowledge and is a description of one occasion."*) applies to a single accuracy report.
2. Before publishing, enumerate the habitat cascade: who treats the forecast as credible, who employs it, what measure registers the outcome, and whether that measure is substantively or interpretively sensitive (Fig 11 :43-44; King and Mertens 2023).
3. Choose a held-out outcome measure the forecast cannot move, or declare that none exists for the case (Fig 2 :29-30). If the only available outcome is forecast-driven, say so; that is a gap, not a pass.
4. Index the residual per slot, per horizon, and per population (Fig 1 :19, :22).
5. Verify blind: residual and refuter first, model interiors only after the verdict is recorded (Fig 10 :52). Use independent frames (Fig 2 :31, Fig 8 :45). Never pool later agreement as corroboration.
6. State the mode on every substantive sentence. Refuse a universal guarantee (Fig 9 :32).

---

## 7. Canonical usage check (figures README + WATSON 60)

Two local sources govern how the figures may be used, read after §§0 to 6:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* A reading that makes figures contradict one another has misidentified its domain, not found a flaw. The framework returns *"what a missing thing would have to look like (a shape, not a name)"* and *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws for design questions, so the separator is derived, not escalated to an authority.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| First pass put "forecast" among the six terms of Fig 13 | **Retracted.** Re-census assigns the forecast to the library Γ (a term in the closure), and publication to an introduction into the habitat (Fig 11 :61). No new primitive is added. Kept visible here. |
| First pass read Goodhart, Campbell and Lucas as three independent witnesses | **Retracted to one pool.** They share the measurement-and-policy literature. They corroborate the figure verdict but do not multiply it (Fig 2 :40). |
| First pass read "shape, not a name" as forbidding any named forecasting method | **Narrowed.** The phrase governs a *missing* primitive. Naming a binding onto an already-held term is provenance, not an invented primitive. What is genuinely missing here is a source-discriminating instrument, which is the real gap. |
| F1 called "decisive" | **Kept, with scope.** It is decisive for D1 only; D2 and D3 keep their own verdicts and are never averaged into it. |
| Apparent conflict Fig 2 (anchor must not update) vs Fig 11 (introduction available) | **Not strained after re-census.** Fig 2 governs the anchor's independence; Fig 11 governs the seat's power to introduce an actor. Different objects. |
| Apparent conflict Fig 8 (union surplus) vs Fig 2 (agreement worthless) | **Not strained.** Same independence parameter read twice: it both creates the surplus and disqualifies pooled agreement. |

### Round trip note

The condensation "reliability needs a non-updating ground" drops three constraints that the full figure set carries: the per-slot indexing (Fig 1 :19), the introduction/cascade (Fig 11 :43-44, :61), and the loop sign (Fig 12 :121). The round-trip gap R_T is therefore nonzero and is enumerated qualitatively in `11_audit.md`. Treating the formula as identical to the figures would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

---

## 8. Strains

- **S1 (live, narrow).** Fig 2 :33 (*"The anchor must not update."*) versus real forecasting practice, where the outcome is often *defined* by a forecast-shaped measure (credit scores, hotspot arrest counts, predicted "bloom" grades). Re-census: Fig 2 governs what may serve as an anchor; the forecast-shaped measure is a frame wearing the anchor's clothes (Fig 2 :47 *"A ground listed as one of the parties has already become a frame."*). The strain is not dissolved away; it is the practical reason the gap in F9 is real. Kept live, with a falsifier under F7.
- **S2 (dissolved by re-census).** Fig 13 six-term substrate versus social-system actors. Re-census: the six are states and structures assumed by the loop; agents and forecasts are terms in Γ and actors in the habitat, not new members of the six. No contradiction.
- **S3 (dissolved by re-census).** Goodhart/Campbell/Lucas "law" versus the figure verdict. Re-census: the "law" is a world description of the same collapse; the figures are the deciding primary. No conflict, but the conflict rule was genuinely triggered and resolved rather than waved away.
- **After re-census: one live strain, named, none hidden.**

---

## 9. Updated verdict

The question has no unconditional answer from the figures. What survives is a separator: a forecast remains reliable only while its outcome is an anchor that does not update on it, its residual is indexed per slot, its publication is treated as an introduction with a cascade, and its verification is blind and independent. When publication couples the forecast into the outcome, the ordinary accuracy claim is a coherent drift in which the forecast looks right because it made the outcome, and no error signal fires. Self-fulfilling and self-defeating are the two signs of one cycle, and a pooled correlation cannot tell them apart. No universal guarantee, coefficient, horizon or winning method is returned; that is a `gap`, a verdict and not a silence. Mode `specified` on the separator, `general` on the structural shape, `gap` on the guarantee, never `grounded`. Strained after re-census: S1 only, and it is the practical content of the gap.
