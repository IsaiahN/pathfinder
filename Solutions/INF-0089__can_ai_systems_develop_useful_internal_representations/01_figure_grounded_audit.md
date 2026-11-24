# Figure-grounded audit: can AI systems develop useful internal representations of causal structure from observational data alone?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." (attributed to THE_FORMULA, not a figure quote)

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, the eight essays listed in `05_what_shape_means.md`, and the world sources in `10_source_ledger.csv`.

---

## 0. The claim under audit

> Can AI systems develop useful internal representations of causal structure from observational data alone?

Restated as an effect, before any figure line is chosen. Let a frame be a model with library Γ. Let the only channel be passive observations o', with no interventions and no environment labels supplied by an experimenter. Let R = |Γ(b,a) − o'| per object slot s (formula step 1; Symbols table). Three things are being asked at once:

1. **Representability.** Can Γ hold a term φ with the shape of causal structure at all? This is a question about the atoms and bonds of Γ, not about data.
2. **Identification.** Is such a φ reachable in closure(Γ) from o' alone, with no imported atom? This is a question about reachability, not about representation.
3. **Usefulness.** Is φ settled at the ground, so that something can compose over it? This is a question about settlement, not about either of the above.

What each option leads to. Option A ("yes, observational data alone suffices"): accept a correlation-shaped term as causal, with no anchor that would refuse it, and spend the independence of anyone asked to check it. Option B ("the figures return a shape and a boundary"): keep what is figure-derived, refuse the settled yes, and state what would have to be imported or measured to move it. The word **alone** is load-bearing: it removes the import that is the only operator that moves the wall.

Form of an answer, bound as an ordinary term before the run (formula "Direction"): an answer would look like *(i)* a statement of which bonds a causal representation needs, *(ii)* a statement of whether those bonds are reachable in a closed observational closure, and *(iii)* a statement of what ground would settle usefulness. This binds the sought-for shape so it can accrue a residual like anything else.

---

## 1. Residual and domain census

### 1.1 R by arity, symmetry and scale

- **Arity.** R is indexed per object slot, never aggregated. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A causal claim is at least a binary relation and usually a directed acyclic graph over n slots, so the residual is a vector over slot pairs, not a scalar.
- **Symmetry.** Causal direction is asymmetric. The observational distribution over two variables is symmetric under swapping them (mutual information does not name a direction). The bonds that could carry direction are ordered: `→` sequence, `⇒` production, `⋛` comparison, plus the unary `¬` for refutation (Fig 12; Operators table). This asymmetry is the finding to be explained, not assumed.
- **Scale.** Three scales are in play: one model's loop (per slot), a population of frames in different environments (room chain, Fig 7), and the channel from a frame to the ground (membrane, Fig 4). The transform between them is lossy, so a claim at one scale does not transfer to another without a measured round trip gap R_T.

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Representation frame** | variables, latents, ordered bonds, unary negation | description length `|φ|`, MDL bargain | the figures as metalaws for what composes; the ground for settlement | admitted |
| **D2 Identification channel** | passive o', Γ, the search over closure(Γ) | search budget, atoms, reach | **none nameable inside the frame** | admitted, verdict `gap` |
| **D3 Ground and usefulness** | interventions, experiments, downstream decisions, verifier | settlement by what pays | the ground, which does not update | admitted |
| **D4 Import compound** | inductive biases, causal sufficiency, ICM, auxiliary-variable priors, temporal order | imported atoms, source gate, shadow test, independence debit | provenance record | admitted |
| **X1 "useful" as a frame-internal score** | the model's own reconstruction or compression metric | loss | none that does not move with the frame | not a domain; absorbed into D3 |
| **X2 "causal structure" as a free-floating property** | none nameable apart from D1 to D4 | none | none | not a domain yet; it is the union of D1 to D4 |

X1 has no nameable anchor that does not move when the frame pushes on it, so by the anchor test it is not a domain. Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." X2 is not a separate domain either; it is the compound. Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

### 1.3 Partition or union

**Union, not partition.** D1 and D2 overlap (you cannot search for a term the vocabulary cannot express), and D2 and D4 overlap (an import changes what the search can reach). A single lever applied to one condition leaves the intersections standing (Fig 9 :55-57). Each domain gets its own loop and its own verdict; verdicts are never averaged.

### 1.4 Order by dependency (Fig 3)

Perception (passive contact with o') → vocabulary (does Γ have ordered bonds?) → objective (does the system's objective distinguish correlation from intervention?) → planning (search or mint) → learn and carry (settle at the ground). Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Refusal precedes minting (formula step 2): the first thing owed is a refusal of the word "alone", not a new algorithm.

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | residual per slot; ground the only metric; frame-internal quantities disqualified | usefulness cannot be scored inside the frame |
| Fig 2 | anchor must not update; triangulation not negotiation | observational data supplies no anchor for direction |
| Fig 3 | a link with no instrument is a link nobody has looked at | the vocabulary/objective link is the likely break |
| Fig 4 | only methods cross up; round trip gap R_T | a claim cannot be transferred across scales unmeasured |
| Fig 5 | three guards as a product; own output is not a measure of success | an internal disentanglement score is not a verdict |
| Fig 6 | only import moves the wall; no frame escapes its closure | observational-only is a closed channel |
| Fig 7 | agreement compounds, evidence does not | more agreeing models cannot supply the missing atom |
| Fig 8 | closure is idempotent; underivable is not unknowable; search is not proof of absence | the route is import, not more search |
| Fig 9 | describe the effect; filters for budget, witnesses for verdict | the question must be split before a frame is chosen |
| Fig 10 | verifier non-access; bring a characterised residual | send the residual and refuter, not the theory |
| Fig 11 | capability is agent-and-habitat; habitat is not ground | observations are habitat, interventions are ground contact |
| Fig 12 | the bond carries the information; vocabulary without bonds cannot name a route | causal direction is a bond, not an ingredient |
| Fig 13 | set closed, arrangements not; unreachable is a verdict | a shape is returned, not a name |
| Operators | negation is unary, not a bond; refutation needs ¬ | counterfactual claims need a refusal operator |
| Symbols | R is the aim and always a slice | what cannot be perceived is simply unread |

Strained readings are named in §5, not smoothed over.

---

## 3. Findings

### F1 - Causal direction is a bond, not an ingredient (`general`, triangulated)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."
Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."
Operators table :57: "a refutation is a negation, which is why a vocabulary without it can only accumulate"

A model that fits the joint distribution has the ingredients (the variables and their marginals and dependences). It does not thereby have the arrangement that makes one variable a cause of another. The ordered bonds `→`, `⇒`, `⋛` and the unary `¬` are what carry direction and refusal, and which one holds is not recoverable from the operands. So the representability question is decidable from the figures: **a frame can represent the shape of causal structure only if Γ already holds ordered bonds and a refusal operator.** This is `general` (structural), triangulated across Fig 12 and the Operators table (low overlap: one derives from composition pricing, one from the operator tests). It says nothing about whether such a frame can be trained from data; that is F2.

**Refuter:** show a directional, refusable causal claim written in a vocabulary that has only symmetric bonds and no negation, and that the claim still distinguishes cause from effect and can be refused. If that succeeds, F1 is wrong.

### F2 - From observational data alone, direction is unreachable in a closed closure (`specified`, triangulated)

Fig 6 :21: "MINT composes inside the closure and can never add an atom."
Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."
Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."

If the atom that fixes direction is not in Γ, no amount of search over passive observations adds it. The figure does not say whether the atom is far away or absent: from inside, depth and absence look the same (Fig 6 :27). This is exactly why the verdict is `gap` and not a confident no. World corroboration, not a figure line: Schölkopf et al. report that X→Y, X←Y and a common cause Z all realize the same observational distributions, so "Without additional assumptions, we cannot distinguish these three cases using observational data" (read 2026-11-23). Khemakhem et al. report that recovery of the true latent joint is "generally impossible due to unidentifiability of the model" and that their result "requires a factorized prior distribution over the latent variables that is conditioned on an additionally observed variable" (read 2026-11-23). That additional observed variable, or the environment label, or the intervention, is the imported atom. It is not in the phrase "observational data alone".

Triangulation: Fig 6 (composition cannot add an atom) and Fig 8 (idempotence is definitional) are two figures with low overlap, one about the operator, one about the set. Status `triangulated`. Mode `specified`: the framework's own rule says it cannot name which primitive is missing.

**Refuter:** exhibit a frame whose Γ lacks the direction atom, feed it passive observations only, and show it reliably produces a term that predicts unseen interventions above a correlation baseline, with no imported assumption and no new instrument. That breaks the idempotence finding.

### F3 - "Useful" is settled at the ground, not inside the frame (`specified`, triangulated)

Fig 1 :23: "The ground enters as the only metric."
Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."
Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."
Fig 11 :73: "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."

Observational data is the habitat: it is where the actors come from and it updates. It is not the anchor. Reconstruction loss, disentanglement scores and compression achieved are quantities the frame produces, so by Fig 1 :27 they cannot score the frame. A representation is useful only when something outside the frame pays for it: an intervention outcome, a downstream decision, a patient outcome. "Useful" is therefore not a property of the representation alone. Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

Mode `specified`, triangulated (Fig 1 and Fig 11 have low overlap: metric rule versus capability/locus rule). The world literature corroborates without overruling: Schölkopf et al. list "Predict under distr. shift/intervention" and "Answer counterfactual questions" as columns a purely statistical model cannot fill, while "Learn from data" is the column it can fill.

**Refuter:** show a frame scoring its own causal representation as useful with a metric it also produces, where that metric does not move when the ground changes, and where an external intervention test disagrees. If usefulness survives disagreement with the ground, F3 is wrong.

### F4 - The import rule predicts the shape of the real literature (`specified`, triangulated)

Fig 6 :14: "the only operator that moves the wall"
Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."
Fig 8 :54: "The atom cannot be derived from inside A. But the union is searchable from contact, so underivable is not unknowable."
Fig 8 :40-43: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

Remove the word "alone" and the question becomes: observational data plus a provenanced import. The framework then predicts yes under conditions, and the import must carry a source gate, a shadow test and an independence debit (Fig 6, formula step 7 OUTWARD). That is what the field actually does. Schölkopf et al.: causal discovery "frequently requires collecting data from multiple environments, or the ability to perform interventions", and overall "a significant amount of prior knowledge is encoded in which variables are measured". Khemakhem et al.: identifiability needs a prior conditioned on an additionally observed variable. Meltzoff, Waismeyer and Gopnik (2012, developmental psychology, low overlap) found that 24 to 36 month olds "were more likely to make causal inferences when covariations were the outcome of human interventions than when they were not" and that "Results fell to chance when the cause and effect were temporally reversed, so that the events were merely associated but not causally related." Schulz, Gopnik and Glymour (2007): "The conditional intervention principle is a formal principle that relates patterns of interventions and outcomes to causal structure." All four are imports of the same shape: environment labels, auxiliary variables, intervention evidence, temporal order.

This is the strongest positive result in the audit: the framework does not deny causal representation learning, it prices the import that makes it work. Mode `specified`, triangulated (Fig 6 and Fig 13 differ in object: operator versus set structure).

**Refuter:** show identification of causal direction from a single observational distribution with zero structural assumptions, zero temporal information, zero environment labels and zero imported prior, validated against interventions. That would break the import rule.

### F5 - More models cannot supply the missing atom (`general`, triangulated)

Fig 7 :13: "agreement compounds, evidence does not"
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Ten models trained on the same observational corpus are one frame wearing ten names. Agreement among them is the pool talking. Independence is bought in proportion to the cost of being wrong, and a genuine second frame here would be one with a different closure: an interventional frame, a different sensorium, or a formal checker. This is `general`. Triangulated across Fig 7 (chain) and Fig 2 (anchor), low overlap.

**Refuter:** show two frames with disjoint evidence pools, both trained without interventions, agreeing on a direction that a subsequent intervention confirms. That would mean agreement carried evidence, and Fig 7 is wrong.

### F6 - The question is a union compound, so it must be split (`general`, single-source for the split rule)

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."
Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"

The question bundles representation, identification and usefulness. A benchmark score is a filter for the budget, never a witness for the verdict. Describing the residual first matters: pick the frame ("neural network", "transformer", "SSM") before describing the effect and any frame will seem to fit. Status single-source for the union/split claim (Fig 9 only), `general` mode.

**Refuter:** show that the three conditions collapse to one measure such that a single lever clears all intersections and leaves no categorically different residue. Then the split is unnecessary.

### F7 - The shape-not-a-name limit and the word "unreachable" (`general`, triangulated)

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :132: "A system with a closure can answer that before it searches, and what it returns is a shape rather than a name."
Fig 13 :134: "Unreachable is a verdict here, not a silence,"
Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The framework can say that a causal-direction atom is not reachable in a closed observational closure, and can characterize in effect terms what is owed (a channel that ranges against an unmovable ground). It cannot name the missing primitive, because naming it would mean already holding it. And "unreachable" is not "impossible in the world": a search that finds nothing proves nothing. This is why the verdict is `gap` on direction rather than a universal no. Triangulated (Fig 9 limit and Fig 13 reporting rule).

**Refuter:** have the framework name the missing primitive from the residual alone, with provenance, and show the name was not already in Γ. That breaks the shape-not-a-name limit.

### F8 - The verdict must be refused before it is minted (`specified`, single-source for the ordering)

Formula step 2 routes a residual whose content is that a held term is false to REFUTED, and owes a refusal, not an explanation. The term held here is "observational data alone suffices". Formula: "the fifth by what is WRONG, and no arrangement of the other four reaches it". Fig 5 :50-56 names the fifth kind and requires a unary negation. So the first output owed is a refusal of "alone", not a new architecture. Mode `specified` for this application, single-source (formula step 2 and the Fig 5 amendment are one evidence pool).

**Refuter:** show that "observational data alone suffices" is not a held term in the frame being audited, so no refusal is owed and the residual should be sorted as NOVEL instead. Then F8's ordering is wrong for this case.

### F9 - What actually survives

| claim | mode | figure / source |
|---|---|---|
| Causal direction is carried by ordered bonds, not by ingredients | `general`, triangulated | Fig 12 :5, :111; Operators :57 |
| A closed observational closure cannot add the direction atom | `specified`, triangulated | Fig 6 :21; Fig 8 :32 |
| Usefulness is settled at the ground; frame-internal scores are disqualified | `specified`, triangulated | Fig 1 :23, :27; Fig 11 :73 |
| An import (environment, auxiliary variable, intervention, time) can move the wall | `specified`, triangulated | Fig 6 :14; Fig 13 :115 |
| The three conditions form a union and need separate loops | `general`, single-source | Fig 9 :55, :57 |
| Which concrete latent variable is causal | `gap` | Fig 9 :32; Fig 13 :132 |
| Whether some non-framework system can do it in the world | not settled by the figures | Fig 8 :39 |

### F10 - An overstatement I am retracting

An earlier reading of this audit (recorded here rather than erased) said: "the framework proves that causal representation learning from observational data is impossible." That overstates two things. First, the framework returns a shape and a boundary, not a universal impossibility proof; Fig 8 :39 says a search that finds nothing is never a proof of absence. Second, the barrier is stated for a **closed** Γ with **no import** and **no ground contact**, which is what the word "alone" means here, not for every system that ever sees passive data. See §6 for the formal retraction and confirmation log.

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim is refused if any of the following holds:

1. **Reachability.** A direction term φ is derived in closure(Γ) from passive o' alone, with no imported atom, no environment label, no temporal order and no new instrument, and it predicts unseen interventions above a correlation baseline. Breaks Fig 6 :21 and Fig 8 :32.
2. **Settlement.** A frame settles "useful" using only a metric it produces itself, and that score remains stable across an intervention that changes the ground outcome. Breaks Fig 1 :27 and Fig 2 :29.
3. **Bond necessity.** A directional and refusable causal claim is written in a vocabulary with only symmetric bonds and no negation, and it still distinguishes cause from effect and can be refused. Breaks Fig 12 :111-112 and Operators :57.
4. **Independence.** Two frames with disjoint evidence pools, both without interventions, agree on a direction that a later intervention confirms. Breaks Fig 7 :13 and Fig 2 :40.
5. **Union.** One intervention clears all three conditions (representation, identification, settlement) and leaves no categorically different residue. Breaks Fig 9 :57.
6. **Ground reversal.** A controlled study shows that passive observational training with no structural prior reliably yields intervention-valid causal representations across domains. Breaks the whole `specified` verdict at the ground.

If any fires, the affected domain verdict is withdrawn and the audit is re-run from §1. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation and strains

1. Split the question before answering it (F6). Do not let one benchmark score stand for three conditions.
2. Refuse the word "alone" first (F8), then state the shape each domain can return.
3. Quote the import rule with its source gate, shadow test and independence debit (F4). Do not present an imported inductive bias as if it were learned from the observations.
4. Ask for a refutation, not agreement (F5), through the public venues in `03_public_contact_points.csv`.
5. Send the generator, the residual and the refuter, not the conclusion (Fig 4 :22: "Only methods cross up. Only head starts come down.").

**Strains, named not hidden:**

- **Fig 8 :54 versus "observational alone".** Not strained after re-census. "Underivable is not unknowable" concerns a frame that can import; the question as posed forbids the import. Two quantities, different instructions (Fig 8 :40-43).
- **Fig 5 MDL bargain versus "useful".** Not strained after re-census. The bargain in Fig 5 :26 ("and then: does the new term cost less to state than the confusion it removes?") is a filter for which term to mint; usefulness is a witness from the ground (Fig 9 :60). Held apart.
- **Observationally equivalent DAGs as isomers.** Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." This fits the three two-variable graphs exactly: same variables, different directed bond, identical joint distribution, different intervention behaviour. It is a structural fit, not a forward-tested claim; recorded as corroboration, not as a new law. See `06_isomers_and_order.md`.
- **Negation's price.** Operators table :77-78: "What a unary operator costs is open". Recorded as open, not as a strain. The figure needs ¬ for refusal but does not price it.

---

## 6. Canonical usage check and retraction / confirmation log

Two local sources govern how the figures may be used, read after the first five sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them", "the quotes are the authority, not this summary", and the canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest"; "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (2026-11-22): the figures are the ground for design questions; the author is the anchor only for what the figures genuinely cannot settle. The seat reads the ground and does not ask the anchor to decide design.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "the framework proves observational causal representation learning impossible" | **Retracted.** Fig 8 :39 forbids reading a failed search as a proof of absence, and the barrier is conditional on a closed Γ with no import. Replacement: "in a closed observational frame with no imported atom, the direction atom is unreachable; the result is a shape and a boundary, mode `specified`." |
| "a metric cannot ever be useful" | **Narrowed.** Fig 5 :26's MDL bargain is legitimate as a mint filter; only its promotion to a verdict is refused by Fig 1 :27 and Fig 9 :60. |
| "shape, not a name, forbids naming any causal variable" | **Narrowed.** The README phrase governs a missing primitive. Binding an already-held atom to a domain variable is a provenanced import, not the invention of a new term. The name still carries zero verdict weight until the ground pays. |
| F1 bond necessity | **Confirmed and kept.** Fig 12 :5, :111 and the Operators table agree, two different routes. |
| F2 unreachability | **Confirmed at the level of a closed frame.** Downgraded from a universal claim to a conditional one by F10. |
| F3 ground rule | **Canonically confirmed.** Fig 1, Fig 2, Fig 5 and Fig 11 all carry the same anchor rule at different strata. |
| F4 import route | **Canonically confirmed.** The figures README's "shape, not a name" and Fig 8 :54 together are the exact statement: underivable from inside, searchable from contact. |
| Fig 8 :54 apparent conflict with F2 | **Not strained.** Re-census: underivable without import, searchable with import. Different closures. |

### Round trip gap R_T (qualitative)

1. **Sent up (x):** the verbatim figure set, chiefly Fig 12 :5, :111 (bond), Fig 6 :21, :23 (closure and import), Fig 1 :23, :27 (ground rule), Fig 13 :132, :134 (shape and unreachable).
2. **Abstraction (T_A):** "observational data alone cannot settle causal structure; an import is owed."
3. **Concretisation (T_E):** the overstatement retracted in F10, "causal representation learning from observations is impossible."

**R_T is nonzero.** Three things the shorthand drops: the condition that Γ be closed and unimported; the difference between underivable-in-principle and unreachable-at-budget (Fig 8 :40-43); and the shape-not-a-name limit (Fig 9 :32). What survives the trip cleanly: a direction atom is not added by searching a closed set, and usefulness is settled at the ground. R_T is recorded as an enumerated set of dropped constraints, not measured numerically, because no ground reading exists (Fig 4 :30 requires it be measured rather than assumed).

### Updated verdict

The shape survives: causal direction is a bond, a closed observational closure cannot add it, usefulness is settled at the ground, and import is the only operator that moves the wall. The universal impossibility reading does not. Strains after re-census: none hidden; one open item (the price of negation) and one structural fit (observationally equivalent graphs as isomers), both recorded.
