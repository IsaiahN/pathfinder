# Figure-grounded audit: should economic models assume rational expectations?

**Mode of this document: `specified` on the modelling application, `general` on the rules. Not `grounded`.**
Per `THE_FORMULA.md` (local): *"Mode. general · specified · grounded. State which. Accepted means the ground
settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From the Recursive Self-Improvement Trap
essay (local URL in `10_source_ledger.csv`): LLM output can *"simulate an approximate answer/output"*, but
*"the truly testable output would need to be derived from the real architecture or working the formula
yourself."* This document is a simulated derivation checked for internal consistency against the figures.
It cannot settle the question it reports on.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited `Fig N :line`),
`FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the public
sources in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. The question under audit

> Should economic models assume people and firms form expectations rationally, or use more
> psychologically and institutionally realistic alternatives?

Restated in effect terms, without choosing a camp: a model is a frame Γ that predicts outcomes o′ from a
belief b and an action a. The residual is R = |Γ(b,a) minus o′|, and it is indexed per slot, not aggregated
(Fig 1 :19; Symbols table, local: *"The gap between prediction and observation... It is always a slice"*).
The two options are two ways of filling b:

- **Option A, rational expectations:** set b to the model's own model-consistent prediction of o′. Muth's
  formulation is the source: *"expectations are essentially the same as the predictions of the relevant
  economic theory"* (Muth 1961, Econometric Society page, opened 2026-11-22).
- **Option B, realistic alternatives:** set b from documented cognitive, behavioural or institutional
  mechanisms (bounded rationality, prospect theory, noise traders, rules and enforcement).

**What an answer would look like, bound as an ordinary term (Formula step "Direction").** Before running
anything I commit to this shape: an expectation assumption is admissible only if (i) its belief term is
distinguishable from the model's own prediction, (ii) it is violable by a ground reading, and (iii) it is
measured per slot, not averaged away. If a candidate fails (i) or (ii), it is frame-internal and carries
zero verdict weight, whichever camp it comes from. This commitment is refusable by the same test as
everything else; see the pre-registered refuter in section 5.

---

## 1. Residual, arity, symmetry, scale

- **R (the residual).** Persistent per-slot forecast failure in macroeconomics and finance: inflation
  surprises, asset bubbles, recession turning points, the failure of sharp downturns to fit equilibrium
  models. Arity: a three-place relation (model Γ, belief assumption b, realised outcome o′), indexed by
  household, firm, market and period. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
  Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
- **Symmetry.** "Rational" is a threshold comparison relative to a standard, not an identity or a symmetric
  join. Fig 12 :87 names ⋛ as *"a threshold relation between two quantities"*; the Operators table (local)
  gives its test as *"is it about which is larger, rather than both being present?"* So "rational" is a
  comparison bond ⋛ against a norm, not a property carried by an actor.
- **Scale.** Individual decision loop, market/population loop, and the macro time channel. The membrane
  between scales is lossy (Fig 4 :27-30), so a verdict at one scale does not transfer as a recording.
- **Question type.** A **union**, not a partition. Two conditions must hold at once: contact with the
  ground (C1) and renewal of the frame's reach by an import from a differing closure (C2). Fig 9 :55:
  *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*

---

## 2. Domain census (done before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 The model frame | modeller, Γ, the expectation operator, b | description length |φ|, within-frame residual | none that is a ground; internal consistency only | admitted as a frame, not as a ground |
| D2 The real economy | households, firms, markets, institutions, central bank | realised outcomes, income, profit, survival | the market and realised outcome | admitted, this is the ground |
| D3 Cognitive and institutional knowledge | bounded rationality, heuristics, prospect-theory weights, noise traders, formal and informal rules | documented regularities and their prediction errors | experiments, field data, measurement | admitted, a closure that differs from D1 |
| D4 Verification and policy use | forecasters, central bankers, regulators, model users | forecast loss, policy outcome | the ground, never agreement among modellers | admitted |
| X1 "Rationality" as a free-floating property of agents | a disembodied optimizing agent | none nameable | none | not a domain yet; an idealisation no occupant meets (Fig 10 :54) |
| X2 "Markets are efficient, so expectations must be rational" | the market | prices | already inside D2 | absorbed into D2, not a separate domain |

**Partition or union.** D1/D3 form the import compound; D2/D4 form the contact compound. The whole is the
**union** C1 (contact maintained) and C2 (reach renewed). A single lever, such as swapping rational for
behavioural assumptions, clears C2 but can leave C1 untouched if the new assumption is not ground-tested.
Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a
harder case of either."*

**Order by dependency (Fig 3).** 1 perception: where does Γ fail per slot? 2 vocabulary: terms for belief
b, action a, observation o′ (Symbols table, local). 3 objective: what counts as progress, namely a smaller
R against the ground per slot. 4 planning: which assumption to test. 5 learn and carry: settle, then carry.
Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 3. Figure census (read and quoted before concluding)

| figure | bearing | verdict on this question |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | fixed the residual and the self-scoring failure |
| 2 The Ground | anchor, independence, correlation valence, market as anchor | fixed the ground and the anti-agreement rule |
| 3 Dependency Chain | status per link; a reading below the break reads nothing | fixed dependency order and the instrument requirement |
| 4 The Membrane | lossy transform; round trip gap R_T | forbids transferring results between scales as recordings |
| 5 Mint Pipeline | MDL bargain; a term explaining everything by saying nothing fails | prices the rational-expectations shortcut |
| 6 Closure / Reachability | import is the only operator that moves the wall; source gate | governs the behavioural/institutional import |
| 7 Room Chain | agreement compounds, evidence does not | forbids settling by consensus of methodologies |
| 8 Union Surplus | convergent derivation vs adopted import look alike; provenance | governs the source gate on imported atoms |
| 9 Leave / Arrive | describe the residual before picking a frame; union vs partition; filters vs witnesses | governs the union and the tractability filter |
| 10 Ground Maintainer | idealisation no occupant can meet; declared meaning not grounded; verifier non-access | decided the status of the rational-expectations idealisation |
| 11 The Habitat | capability is agent-and-habitat; isolation substitutes habitat; a synthetic solve proves wiring | decided the status of a clean synthetic model |
| 12 The Bond | comparison ⋛; the arrangement is the substance; isomer and functional group | classified "rational" and the family resemblance of models |
| 13 Minimum Viable Set | a human's careful guess at compression axes; unreachable is a verdict | bounds the answer and licenses `gap` |
| Operators and Symbols tables | b is not o′; ⋛ is a threshold relation | fixed the belief/observation distinction |
| THE FORMULA (local) | Direction, mode rule, settle vs gate | fixed mode and the pre-committed shape |

---

## 4. Findings F1 to F11

### F1. Rational expectations conflates the belief b with the observation o′ (decisive, framework-internal)

Symbols table (local extract): b is *"What the system takes to be the case before it acts... Not the observation."*;
o′ is *"What actually happened."*; Γ(b,a) is *"What the library says should happen, given belief b and action a."*
Muth's hypothesis sets b equal to the prediction of the theory, so b and Γ(b,a) are the same object. Then
R = |Γ(b,a) minus o′| is understated by construction: the term that was supposed to be measured against
the ground was filled from inside the frame. This is not a claim that Muth was wrong about markets; it is a
claim about what the assumption does to the residual term.

**Mode:** `general` for the b/o′ distinction, `specified` for the application to Muth's hypothesis.
**Status:** `triangulated`, Symbols table plus Fig 1 :19 and Fig 2 :29 (low overlap: notation vs metric).
**Refuter:** a case where the model-consistent belief and the realised outcome coincide per slot through a
documented recession, with an instrument that measures the belief independently of the model.

### F2. The idealisation no real occupant can meet (decisive, general)

Fig 10 :53: *"And a prohibition nothing can satisfy is a prohibition stated wrong."*
Fig 10 :54: *"A rule no real occupant could meet describes an idealisation, not a position. Before enforcing an absolute, ask what would have to be true for a real occupant to meet it."*
Fig 10 :55: *"The cost is not only that the rule describes nobody. An idealisation licenses inferences no real position would support, and those inferences will be drawn by whoever finds them useful."*

Unbounded knowledge of the true model and error-free solution of it is a condition no real household or
firm meets. The bounded-rationality literature says the same in world terms: Simon's task is to replace
*"the global rationality of economic man"* with behaviour compatible with the information and computation
actually possessed (Stanford Encyclopedia of Philosophy, 2024 revision, opened 2026-11-22). Fig 10 governs
the standing of the idealisation, not its usefulness as an approximation.

**Mode:** `general` for the rule, `specified` for naming rational expectations as such an idealisation.
**Status:** `triangulated`, Fig 10 and the SEP entry on bounded rationality (framework vs philosophy,
low overlap).
**Refuter:** an instrument showing a real population whose beliefs equal the model-consistent expectation
per slot and remain there without updating.

### F3. A frame cannot score itself with a quantity it also produces

Fig 1 :23: *"The ground enters as the only metric."*
Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
Fig 1 :24-26 names the disqualified quantities: *"coverage, and compression achieved"*, *"predicates minted,
and credibility accrued"*.

If expectations are assumed model-consistent, then within-model forecast accuracy and tractability are
quantities the frame produces. They cannot be the metric that settles which expectation assumption to use.
This is the figure-grounded answer to Friedman's defence: *"the only relevant test of the validity of a
hypothesis is comparison of its predictions with experience"* (Mäki 2003, Erasmus University PDF, opened
2026-11-22, quoting Friedman 1953). Comparison with experience is exactly what the ground is for; the
figure refuses the substitution of an internal score for that comparison. Hausman's used-car analogy in
*"Why Look under the Hood"* (opened 2026-11-22) makes the same point in world terms: *"Wide, not narrow
predictive success, constitutes the grounds for judging whether a theory's assumptions are adequate
approximations."*

**Mode:** `general` for the self-scoring rule. **Status:** `triangulated`, Fig 1 and Fig 2 :29.
**Refuter:** a ground measure of forecast error that is not generated by the model's own expectation
operator and that yields the same ranking of assumptions.

### F4. The ground is the market and the realised outcome, not agreement among modellers

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*
Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

A verdict reached by counting how many methodologists prefer rational expectations is a convention, not a
corroboration. Two camps citing the same textbook or the same data release are one evidence pool. The
anchor is out-of-sample ground contact: a market, a forecast record, an experiment, a policy outcome.

**Mode:** `general`. **Status:** `triangulated`, Fig 2 and Fig 7 (anchor rule vs room chain, low overlap).
**Refuter:** a consensus shift with no change in ground contact that improves out-of-sample prediction.

### F5. A clean model is a substituted habitat; a synthetic solve proves wiring, not capability

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*
Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."*
Fig 11 :68: *"what you failed to reproduce is invisible until the goal fails"*
Fig 11 :69: *"what you unintentionally introduced is invisible until it acts"*
Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

A representative-agent rational-expectations model is a substituted habitat: heterogeneity, institutions,
liquidity constraints and enforcement are not reproduced. What was left out is invisible until the goal
fails. Vernon Smith's experimental economics is the world-side corroboration and the sharpest warning:
*"common information is not sufficient to yield common 'knowledge' or expectations"* and *"institutions
matter"* (Smith 1994, JEP 8(1):113-131, abstract, opened 2026-11-22). Smith's laboratory is itself a
substituted habitat, which is why his own "wind tunnel" framing is honest: it tests design wiring before
field use, it does not prove field capability.

**Mode:** `specified`, ungrounded. **Status:** `triangulated`, Fig 11 and Smith (framework vs experimental
economics, low overlap).
**Refuter:** a model whose synthetic solve transfers to ground prediction without habitat reproduction and
without a documented import.

### F6. Realistic alternatives are imports and need a source gate and a shadow test

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 6 :24: *"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."*
Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*
Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*

Bounded rationality (Simon), prospect theory (Kahneman and Tversky 1979: *"a critique of expected utility
theory as a descriptive model of decision making under risk"*), noise traders and limits to arbitrage
(Shleifer and Vishny 1997: *"Both arbitrageurs and their investors are fully rational"*), and institutions
as *"the humanly devised constraints that shape human interaction"* (North 1991, JEP 5(1):97-112) are
imports from closures that differ from the standard model's. They add atoms. They are licensed only with
a provenance record (where the atom came from) and a shadow test (which gap it explains). A bias parameter
bolted on with no ground contact is a wrong atom, not an advance.

**Mode:** `specified` for the economic application, `general` for the import rule.
**Status:** `triangulated`, Fig 6 plus Fig 8 plus the world sources (multiple low-overlap fields).
**Refuter:** an imported behavioural atom that adds no atom to the closure and explains no previously
unexplained per-slot residual.

### F7. Tractability is a filter for the budget, never a witness for the verdict

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
Fig 5 :43: *"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."*

The usual defence of rational expectations is tractability: it makes models solvable. Tractability decides
what gets tried first. It does not decide what is true. More sharply, an assumption that makes the belief
match the model's prediction explains everything by assuming the answer, which is the named MDL failure.
The methodological literature is split on this exact point: the "theorem on the methodology of positive
economics" concludes that *"the Friedman's methodology of positive economics does not exclude science
fiction"* (2015, Cogent Economics and Finance, opened 2026-11-22); Mäki's rereading of F53 (Cambridge,
2009, opened 2026-11-22) reports an *"F-mix"* rather than a single doctrine, so neither a crude
instrumentalist defence nor a crude realist criticism is licensed here.

**Mode:** `general` for the filter rule, `specified` for the tractability defence.
**Status:** `triangulated`, Fig 9 and Fig 5 and the methodology sources.
**Refuter:** a demonstration that tractability alone reversed a verdict already settled by ground contact.

### F8. The question is a union; one lever leaves the intersection standing

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*
Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

C1 is ground contact (F3, F4, F5). C2 is reach renewal (F6). Switching to behavioural assumptions clears
C2 only if the new atom truly differs; it does nothing for C1 unless the new assumption is itself
ground-tested per slot. Conversely, refining a rational model internally cannot clear C2, because closure
is idempotent (Fig 8 :32). A single lever applied to a union leaves the intersection standing.

**Mode:** `general` for the union rule, `specified` for this question.
**Status:** `triangulated`, Fig 9 and Fig 8.
**Refuter:** one intervention that restores both C1 and C2 with no categorically different residue.

### F9. "Rational" is a comparison bond, and the framework returns a shape, not a name

Fig 12 :87: *"a threshold relation between two quantities"*. Fig 9 :32: *"you get a kind of thing, never the answer itself"*.
Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

Calling an expectation rule "rational" applies ⋛ against a norm; it does not name an entity or a unique
rule. The figures can constrain the shape of any admissible expectation assumption (measurable per slot,
distinct from o′, violable, provenanced if imported). They cannot name "the correct expectation rule".
The Library of Babel essay states the shape limit in world terms: *"you can cut your search short if the set
of books returned is small and descriptive enough that it provides a general shape of the answer that
satisfies your question"* (opened 2026-11-22).

**Mode:** `general`. **Status:** `single-source` for the figure definition of ⋛ (Fig 12), triangulated for
the shape-not-a-name limit (Fig 9 plus the canonical figures README).
**Refuter:** a figure line deriving a specific expectation-update rule from the six-term set alone.

### F10. The representative agent aggregates away the live signal

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Symbols table (local): *"Two frames with identical architecture diverge because their histories and their w diverge."*

A single representative expectation collapses heterogeneity into an average, which is exactly how a live
per-slot residual disappears. This is a figure-grounded reason to prefer distributed, per-slot measurement
over a representative-agent shortcut, independent of whether the agents are modelled as rational.

**Mode:** `general`. **Status:** `triangulated`, Fig 1 and the Symbols table (notation and metric, low overlap).
**Refuter:** a case where per-slot residuals vanish while the representative agent's residual stays live.

### F11. Declared meaning is not grounded meaning; the assumption must be violable

Fig 10 :18: *"a declared meaning is not a grounded one"*
Fig 10 :19: *"→ install what can be violated"*
Fig 10 :49: *"Declaring a meaning does not ground it."*

If "rational" is true by construction (agents are defined as using all available information and not
repeating mistakes), no observation can violate it, so it is not an installed, checkable claim. This is not
a ban on idealisation as a tool. It is a refusal to grant a declared meaning verdict weight. Fig 10 :46:
*"A convention makes no claim about the world; a verdict and an atom both do."*

**Mode:** `general`. **Status:** `triangulated`, Fig 10 and Fig 2 :29.
**Refuter:** a test, using only the model's own output, that could fire against the rational-expectations
assumption.

### What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| The residual must be measured per slot, never averaged | `general` | Fig 1 :19, :22 |
| A model cannot score its own expectation assumption with a quantity it produces | `general` | Fig 1 :27 |
| The anchor is the realised outcome or market, not methodological agreement | `general` | Fig 2 :29, :35 |
| An expectation rule that cannot be violated has no verdict weight | `general` | Fig 10 :18, :54 |
| Realistic alternatives are imports and need a source gate and shadow test | `general`, application `specified` | Fig 6 :23, Fig 8 :51 |
| Rational expectations is disqualified as a ground-settled verdict | `specified`, ungrounded | F1-F3, F11 |
| Which specific expectation rule wins in a given market | `gap` | unreachable at this budget, see section 8 |

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written before the run is a design instrument. The shape claim
is refuted if any of the following holds:

1. A ground instrument measures beliefs independently of the model and shows the model-consistent belief
   coinciding with o′ per slot across a documented crisis, with no updating.
2. The figures are re-censed and a line is found that admits a frame-internal quantity as the metric that
   settles a verdict (breaks Fig 1 :23, :27).
3. An imported behavioural atom is shown to add no atom and explain no previously unexplained per-slot
   residual, and yet the frame's reach demonstrably grows (breaks Fig 6 and Fig 8).
4. One intervention is shown to clear both C1 and C2 with no categorically different residue (breaks the
   union reading, Fig 9 :55-57).
5. A test built from the model's own output is shown capable of violating the rational-expectations
   assumption (breaks F11).

If any fires, the corresponding finding is withdrawn. Until one is run, no part of the answer is labelled
`grounded`.

---

## 6. Recommendation

1. Stop treating the question as a choice between two orthodoxies. It is a union of ground contact and
   reach renewal (F8). Refuse any single lever that claims to settle both.
2. Report expectations per slot, with an instrument that measures the belief separately from the model's
   prediction (F1, F10).
3. State the mode on every modelling claim (F2, F11). An idealisation may fund a model; it may not settle
   a verdict.
4. Demand a provenance record and a shadow test for every behavioural or institutional atom (F6).
5. Keep tractability as a budget filter only (F7).
6. Use the public economic-methodology venues in `03_public_contact_points.csv`. Ask for a refutation
   of the shape claim, not for agreement with either camp.

Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send
the generator: the residual, the refuter and the shape claim, not a conclusion.

---

## 7. Canonical usage check and retraction/confirmation log

Read after sections 0 to 6: `FRAMEWORK/reference/FIGURES_README_canonical.md` and WATSON 60
(2026-11-22, local). Two rules govern how the above may be used: the figures outrank the code, the rulings
and the docs, and *"the quotes are the authority, not this summary"*; and a reading that makes one figure
contradict another has misidentified its domain, not found a flaw.

| earlier reading | status after the canonical check |
|---|---|
| F2 initially applied Fig 10 :54 directly to households and firms as if they were seat occupants | **Narrowed.** Fig 10 governs an office/seat. The application to agents is an analogue, so the claim is marked `specified`, not `general`. The idealisation rule itself is `general`. |
| F3 initially equated rational expectations with Friedman's "as if" defence | **Retracted as stated.** Friedman's defence is ground-facing (predictions vs experience); Muth's hypothesis makes the belief equal the model prediction, a frame-internal move. Mäki's "F-mix" (Cambridge 2009) and Hausman's critique confirm that no single Friedman doctrine can be cited here. The two are kept separate in F3. |
| F7 initially treated "unrealistic assumptions do not matter" as a settled methodological verdict | **Retracted.** The methodology sources conflict (Mäki 2009 vs the 2015 theorem paper vs Hausman). A conflict returns to the census; it does not flip the figure verdict. Fig 9 :60 stands. |
| F9 initially read "shape, not a name" as forbidding any specific expectation rule everywhere | **Narrowed.** The README's phrase governs a **missing** primitive. The claim here is only that the figures do not derive a specific rule; provenanced imports from D3 remain admissible (F6). |
| "Rational expectations is false" | **Refused.** The figures decide its standing as an idealisation and a self-scoring term, not its empirical truth in a particular market. That is a `gap` until a ground instrument runs. |
| Apparent strain Fig 8 :32 (closure idempotent) vs behavioural imports moving the wall | **Not strained.** Re-census: behavioural atoms come from a differing closure (D3), so Fig 6 :23 governs them; Fig 8 :32 governs internal search only. Different objects. |

---

## 8. Strains, re-census and the honest stop

- **Strain, Fig 10 seat rules vs agents.** Resolved by narrowing F2 to `specified`. The seat rule is
  `general`; applying it to households is an analogue, not a derivation.
- **Strain, world methodology sources conflict.** Recorded, not smoothed. Hausman and the 2015 theorem
  paper attack the Friedman defence; Mäki says F53 has no single doctrine. The figure verdict does not
  depend on which reading wins, because Fig 9 :60 governs the budget/verdict distinction independently.
- **Strain, "rational" as ⋛ at the agent level.** The Operators table defines ⋛ as a threshold between two
  quantities; at the agent level the operands are beliefs and a norm. Level relativity permits the
  reading, but whether a norm counts as a quantity at that level needs an instrument, not an argument.
  Named, not hidden.
- **After re-census: one live operand-type strain, one honest `gap`.** Which specific expectation rule wins
  in a given market is unreachable at this budget. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*.
  Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

**Updated verdict.** The figures do not choose between "rational" and "realistic" as wholesale packages.
They decide the meta-question: neither assumption earns verdict weight by declaration; each is a
frame-internal term whose standing comes only from per-slot ground contact, violability and, if imported,
a provenance record. Rational expectations is disqualified as a ground-settled verdict by F1, F2, F3 and
F11. Realistic alternatives are owed as governed imports by F6, not as a replacement orthodoxy. The
specific winning rule stays a `gap`. Mode `specified` on the application, `general` on the rules, nothing
`grounded`.
