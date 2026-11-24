# Figure-grounded audit: distinguishing cause from consequence in the institutions and prosperity question

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured in a case. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, plus the web sources listed in `10_source_ledger.csv`. Every figure quote below was checked against the local verbatim extract before use.

---

## 0. The question in effect terms

> How should researchers distinguish institutions that cause prosperity from those that arise as a consequence of it?

The effect to be decided: given a joint observation of institutions I and prosperity P, assign a direction. Four outcomes are possible and they are not variations of one answer.

| option | what it asserts | what it licenses |
|---|---|---|
| I produces P | an institutional reform changes later prosperity | reform the institution |
| P produces I | richer societies build and keep better institutions | wait for growth and education |
| both (a loop) | each re-enters as input to the other | expect a sign that closes or runs away |
| a third thing C produces both | neither is a lever on the other | find and act on C |

An answer that returns only "institutions matter, effect size 0.4, significant" does not decide among these. It prices a quantity the question did not ask for. The sought-for object is bound as an ordinary term in section 5 ("Direction"): a **direction discriminator**, a check that (a) supplies an asymmetry the association does not carry, (b) ranges against an anchor that does not update on the researcher's preferred story, (c) returns a verdict per institution-slot and per prosperity-slot, and (d) carries a refuter written before the run.

---

## 1. Domain census (done before choosing any figure line)

### The residual R by arity, symmetry and scale

- **Arity:** at least two (I and P), in practice three or more (a candidate common cause C: geography, disease environment, human capital, trade integration, colonial history). The literature's "institutions versus geography versus human capital" is already an arity-three-plus problem.
- **Symmetry:** the observation is symmetric. Correlation, co-movement and a cross-country regression coefficient are defined in the joint distribution; exchanging the operands leaves the reading unchanged. The sought relation is ordered. A production bond is not a symmetric bond. This mismatch is the structural core of the residual, not a data shortage.
- **Scale:** cross-country panels, within-country over time, sub-national regions, and experimental or discontinuity margins at the edge. The same pair I, P behaves differently at each scale, so scale is a slot index, not a nuisance.
- **Slot indexing:** Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Property rights, judicial independence, electoral rules and bureaucratic quality are different slots; income, life expectancy and schooling are different prosperity slots. A pooled "institutions cause prosperity" coefficient averages them and loses the only signal that says where to look.

### One line per domain: actors, currency, anchor

- **D1, the observational / statistical frame.** Actors: variables I, P, covariates X, coefficients, standard errors. Currency: association, variance explained, predictive accuracy. Anchor: **none inside the frame**. Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." By the census rule (no nameable anchor means not a domain yet), D1 is a frame awaiting an imported anchor, not yet a domain with its own ground.
- **D2, the identification frame.** Actors: instruments, natural experiments, discontinuities, temporal ordering, random assignment, process traces. Currency: exogenous variation and a counterfactual contrast. Anchor: a source of variation whose value is not set by P or by the researcher's preferred theory. AJR's settler mortality, Frankel-Romer trade instruments and J-PAL randomised evaluations are attempts at such an anchor. This is a domain: the anchor is nameable and checkable.
- **D3, the institutional habitat.** Actors: rules, rulers, citizens, policies, and the external conditions in contact with them (disease, geography, trade, education). Currency: survival and persistence of rules, plus contact with material outcomes. Anchor: material outcomes that do not move because a researcher prefers a story. Fig 11 :73: "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." Fig 2 :29: an anchor "does not change its answer because of what any frame thinks."
- **D4, the verification / review frame.** Actors: seminar audiences, reviewers, editors, replicators. Currency: agreement and residuals. Anchor: the ground, never agreement. Fig 2 :45: "Frames range against the ground. They do not negotiate with it." In this simulated run all four domains draw on one evidence pool, so their agreement is the pool talking, not independent corroboration (Fig 2 :40).

### Partition or union?

**Union.** Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." The question bundles at least five overlapping conditions:

1. the direction of the arrow;
2. which institution-slot is in question;
3. which prosperity-slot is in question;
4. the time scale (cross-section, decades, centuries of persistence);
5. the level (a village rule, a national constitutional rule, an international regime).

One lever clears the region where only condition 1 binds and leaves the intersections standing. Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." So the honest answer is a separator with per-slot verdicts, not one global direction.

An apparent world-level conflict (AJR 2001 versus Glaeser et al. 2004; see section 6) is returned to this census: the two papers use different instruments and different institutional measures, so they are two frames with different anchors, not one frame with an opposite answer. The conflict is evidence for the union verdict and never flips it.

### Dependency order (Fig 3)

Fig 3 :20: "The chain is ordered by dependency, not by importance." The order for this question:

1. **perception**, measure I and P separately and per slot;
2. **vocabulary**, have terms for what each institution affords (what it can constrain, distribute, enforce);
3. **objective**, say what would count as resolving direction (the discriminator bound above), in the frame's own terms;
4. **planning**, choose an identification strategy under incomplete information;
5. **learn and carry**, name what worked, verify it against an anchor, carry the method (not the estimate) to the next case.

The break is between 2 and 3. Fig 3 :25-26: the middle link "has neither" obvious failures nor obvious tests and "attracts the least attention and the fewest instruments." The literature has elaborate vocabulary for institutional quality and many estimators for magnitude, but no agreed instrument for "what would count as direction resolved" other than another coefficient, which is a frame-internal quantity. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :22: "A step whose input never arrives cannot be diagnosed, only its predecessor can." Effort spent on sharper estimates above the break cannot rescue the missing objective (Fig 3 :19: "Optimising a link that already works cannot rescue one that does not.").

### Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | pooled "institutions matter" hides the live slot |
| 2 The Ground | anchor must not update; correlation has valence | institutional indices built from current income are not anchors |
| 3 Dependency Chain | middle link has no instrument | objective (direction discriminator) is unbuilt |
| 4 The Membrane | only methods cross up; round trip has a gap | export the discriminator, not the estimate |
| 5 Mint Pipeline | the sought-for shape must be an ordinary term; refutation is a fifth kind | bind the discriminator; allow refusal of a held term |
| 6 Closure / Reachability | import is the only operator that moves the wall | asymmetry must be imported from a differing closure |
| 7 Room Chain | a room's agreement is variation, not a verdict | many agreeing studies cannot settle direction |
| 8 Union Surplus | convergent derivation and adopted import look identical in the contents | instrument provenance is the whole issue |
| 9 Leave / Arrive | describe the effect before choosing a frame; unbundle a union | residual first, frame second; split before searching |
| 10 Ground Maintainer | ground does not decay, channel does; a convention that decides an outcome stops being one | saturated indices and significance thresholds sever the channel |
| 11 The Habitat | enumerate, never compose; valence relative to residual; isolation is substitution | no standing list of good institutions; third-order contact matters |
| 12 The Bond | ordered bonds carry direction; flats lose the bond; cycle and catalyst | the two causal stories are isomers, not variants |
| 13 Minimum Viable Set | closed set, unbounded arrangements; unreachable is a verdict | a shape is returned; the name of the cause is a `gap` |
| Operators table | `+` symmetric, `→`/`⇒` ordered, `¬` unary | a symmetric statistic cannot choose an ordered bond |
| Symbols table | R is the aim, not only the error signal; the ground is the anchor | no anchor was stated in the raw question |

Strained readings are named in section 2b, not smoothed over.

---

## 2. Findings

### F1 - the observation is symmetric and the question is ordered (decisive, structural)

Operators table :15 (conjunction): "swap the operands. Does the meaning change? No." Operators table :33 (sequence): "swap them. Does it become a different thing? Yes." Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing." Fig 2 :39: "Correlation has valence."

A cross-country association between institutional quality and income is a symmetric reading. Exchanging I and P leaves the coefficient's magnitude and significance intact; only the labelling changes. The claim "institutions cause prosperity" is an ordered bond, and "prosperity causes institutions" is the same two operands under the reversed order. Under Fig 12 :94 ("The arrangement is the substance."), the two are different substances whose ingredients are identical. A vocabulary that records only ingredients cannot tell them apart (Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording.").

World corroboration (secondary): Pearl 2009 writes that "one cannot substantiate causal claims from associations alone, even at the population level" and that a causal concept is one that "cannot be defined from the distribution alone." That is the same structural point in statistics notation.

**Verdict per domain:** D1 `gap` as a domain until an anchor is imported; D2 `specified` (triangulated across the Operators table, Fig 12 and Pearl, low overlap). Not averaged.

**Refuter:** exhibit a statistic computed solely from the joint distribution of I and P that entails a directive verdict with no added asymmetry and no imported anchor. This would break the operators table's symmetry test. If it appears, F1 is withdrawn.

### F2 - correlation is efficient for a convention, disqualifying for a verdict

Fig 2 :39-43: "Correlation has valence." It is "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it" and "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :43: "Guard, from Figure 10: a convention that decides an outcome has stopped being one." Fig 10 :47: "a convention that decides an outcome has stopped being one".

A pooled institutional-quality index is a shared meaning. It is useful for ranking and for communication, which is exactly the convention use. It becomes a verdict the moment a p-value threshold or a fixed coefficient sign is allowed to decide that I produces P. At that point the convention has decided an outcome and has stopped being a convention. Glaeser et al. 2004 make the same move from inside economics: the standard indices are "strongly correlated with each other, as well as with per capita income," which is "consistent with institutions having a causal positive effect on growth, but also with reverse causality," and "the commonly used measures of institutions cannot be used to establish causality."

**Verdict:** D1 `specified`, triangulated (Fig 2 plus Fig 10, with Glaeser et al. as a low-overlap world witness for the measurement half). **Not** a claim that the index is useless: it is a claim about which use is legitimate.

**Refuter:** show a case where the shared-meaning use and the world-claim use are the same quantity with the same non-updating anchor, so that valence does not apply. Until then "significant and positive" is a filter for the budget, never a witness for the verdict (Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").

### F3 - the anchor must not update on prosperity or on the preferred theory

Fig 2 :29: an anchor is "whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :33: "The anchor must not update." Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Apply the anchor test to the measures in this field. An institutional index whose value rises with current income (Glaeser et al.: subjective measures "rise sharply with the level of economic development") cannot anchor a claim about institutions producing income: it moves with the outcome. It is panel 1, a frame that updates on P. AJR's settler mortality is an explicit attempt at a variable that does not update on current income, chosen because mortality "faced by the settlers more than 100 years ago explains over 25 percent of the variation in current institutions" while being historically prior. Rodrik, Subramanian and Trebbi 2004 import more than one instrument for the same reason and report that "the quality of institutions 'trumps' everything else" once institutions are controlled for. Their disagreement with Glaeser et al. is about which candidate anchor survives, not about whether an anchor is needed.

**Verdict:** D2 `specified`, triangulated (Fig 2 plus the three economics papers, with AJR and Glaeser et al. as opposing witnesses for the same requirement). **Live constraint:** no candidate anchor used so far is assumption-free. An instrument's validity is an exclusion restriction that is not testable from the data alone (Pearl 2009: a causal assumption "is not testable in observational studies"). This is the price of the import, recorded as a strain in 2b, not hidden.

**Refuter:** exhibit an institutional measure whose value is invariant both to current prosperity and to the researcher's preferred theory, while still predicting later prosperity. F3 is withdrawn for that measure if it survives an out-of-sample check that the measure's own constructors did not choose.

### F4 - the asymmetry cannot be minted from the association; it must be imported

Fig 6 :14: "the only operator that moves the wall". Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 8 :45: "Two frames together reach what neither reaches alone."

There is no amount of re-analysis of the same I-P dataset that produces an arrow. The closure of the statistical frame contains I, P, X and their associational combinations; the directed term is not in it. What moves the wall is contact with a frame whose closure differs: a natural experiment (AJR's disease environment), a discontinuity, a random assignment (J-PAL's evaluations), a temporal-ordering frame, or a process-trace frame that can see a mechanism rather than a correlation. Fig 9 :26-28 require the order: "R's own predicates name the habitat that holds" the missing term, so "describe it before you go looking, or any frame you pick will seem to fit." Applying this to the literature: the residual was described as an unassigned direction, and only then were instruments considered. Had the instruments been named first, any of them would have seemed to fit.

Imports require gates. Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". Fig 6 :24: "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives." A poorly chosen instrument is not a neutral extra check; it adds a wrong atom at a cost above starting from primitives. The Albouy-AJR exchange (Albouy 2012 critique; AJR 2012 reply) is a documented instance of this cost being argued in public.

**Verdict:** D2 `specified`, triangulated (Fig 6, Fig 8, Fig 9 low overlap, plus Pearl's formal statement). **Not** a ranking of which instrument is best; that is a budget filter.

**Refuter:** derive a direction discriminator purely from the joint distribution of I and P with no added assumption, no import and a non-updating anchor. Fig 8 :34-37 gives the theorems for why this cannot be done from inside a frame. If it is done, F4 is withdrawn and closure is not the barrier the figures claim.

### F5 - the residual is per slot; a pooled coefficient hides the live one

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

"Property rights protect investment," "education enables bargaining," "impartial courts enforce contracts," "electoral rules constrain rulers" are different mechanism-shaped slots with different currencies and different plausible anchors. Pooling them into one institutional-quality factor produces a global number near some value with a live slot residual underneath, which is a legal state in Fig 1 :13 ("a global R near zero with one live slot residual is a legal state"). The fix is not a better global number. It is to keep verdicts per institution-slot and per prosperity-slot.

**Verdict:** D3 and D1 `specified`, triangulated (Fig 1 plus Fig 11, different figures, low overlap). **Not** averaged into "institutions matter somewhat."

**Refuter:** demonstrate a single aggregate statistic that preserves the per-slot direction verdict for every institution-slot and prosperity-slot, including the slots where the sign reverses. This would break Fig 1 :22.

### F6 - no standing list of good institutions; valence is relative to the residual

Fig 11 :43: "The habitat is enumerated, never composed." Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :49: "An actor’s valence is relative to the residual, not a property it carries." Fig 11 :51: "No standing list of good actors survives a change of residual." Fig 11 :52-53: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

A rule that is a benefactor to a "contract enforcement" residual can be a malfactor to a "distributional fairness" residual. Strong property rights may raise investment and also entrench exclusion, so the same institution carries two valences depending on which residual is tracked. Contact also cascades: settler mortality affects settlement, settlement affects early institutions, early institutions affect current institutions, current institutions affect income (AJR's own schematic). The cause three steps out is not visible from a first-order enumeration. And isolation is not removal: Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another." Transplanting an institution into a different country inherits actors the reformer did not choose.

**Verdict:** D3 `specified`, triangulated (Fig 11 plus AJR's chain and Rodrik et al.'s geography channel). **Not** a claim that any particular institution is always good or always bad.

**Refuter:** exhibit an institution whose effect sign is the same across every residual and every habitat, with no reversal under a change of prosperity measure. That breaks Fig 11 :49 and :51.

### F7 - the middle dependency link has no instrument

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :25-26: the link between having terms for what a situation affords and saying what counts as progress "has neither" obvious failures nor obvious tests. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

The field has strong instruments for link 1 (national accounts, institutional indices) and link 2 (legal and political taxonomies), and an elaborate technology for link 4 (IV, RD, diff-in-diff, RCTs). What it lacks is an instrument for link 3: a check that says "the direction is now resolved" independently of the estimator that produced it. A t-statistic cannot be that check, because the same frame produces both the estimate and its significance. This is why adding a fifth estimator to a literature does not move the direction question.

**Verdict:** D1/D2 boundary `specified`, single-source on the figure side (Fig 3), with a world witness from Glaeser et al.'s observation that the indices are "constructed to be conceptually unsuitable for that purpose." Marked single-source on the figure side because the dependency claim is Fig 3's, not triangulated across figures.

**Refuter:** point to a published check that directly tests a direction claim rather than a magnitude claim, and whose pass/fail is not computed from the same estimator. If one exists and is in routine use, the break is elsewhere and F7 is withdrawn.

### F8 - the ground does not decay; the channel does

Fig 10 :24: "the ground does not decay, the channel does". Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings". Fig 10 :27-28: "the output is not a verdict, it is you have lost touch". Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

Prosperity itself did not stop changing; the instruments that read institutional quality saturated (every country scored "good" at the top of an index), pooled readings across slots (F5), and went stale (a 1995 legal code used for a 2020 outcome). When the channel decays, more agreement among users of the same index is not repair. Fig 2 :35 again: a mirror cannot correct you. A reviewer who reconstructs the institutional index from the same source used to build the claim cannot verify it; they share the evidence pool.

**Verdict:** D4 `specified`, triangulated (Fig 10 plus Fig 2). **Not** a claim that the underlying institutions changed or that prosperity stopped being measurable.

**Refuter:** show the channel restored by adding more users of the same measure, with a fresh ground contact that those users could not previously read. If that works, the decay diagnosis is wrong.

### F9 - provenance separates convergence from adoption; refusal adds, it does not delete

Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". Fig 10 :62: "A ruling carries provenance like an atom." Fig 10 :65-66: "Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record." Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate."

Two literatures can arrive at "institutions matter" by independent routes (Ostrom's committees-and-fisheries route and the institutional-economics cross-country route are an example the framework's author reports). The agreement means something only if the closures differ and the record shows it. If one literature simply adopted the other's measure, the agreement is one pool talking. When a measure is refuted, the correct move is to add the refusal as a term, not silently erase the earlier reading: the reach falls because something was added (Fig 6 :42-43). The retraction table in section 5 is kept visible for exactly this reason.

**Verdict:** D4 `specified`, triangulated (Fig 8, Fig 10, Operators). **Not** a claim that a well-documented wrong result becomes right.

**Refuter:** show a case where provenance makes no difference to verdict weight, that is, where two indistinguishable contents with different origins are legitimately treated identically. Then the lineage requirement is vacuous.

### F10 - the framework returns a shape, not a name: this is a `gap`

Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 13 :139: "narrowing gets you close while the ground decides." Fig 6 :26: "The world does not gain primitives; a frame gains access."

No figure line names property rights, democracy, education or the rule of law as the cause of prosperity. What the figures license is a **shape** that any valid discriminator must have: an imported asymmetry from a differing closure, an anchor that does not update, per-slot verdicts, a provenance record, and a written refuter. Which institution occupies the cause slot in a given country is a question for the ground, not for the figures. This is a `gap` of the shape-not-a-name kind, reported as unreachable at this budget rather than as silence. It is not a claim that no institution causes prosperity.

**Verdict:** all domains, `gap`, explicitly triangulated as a limit (Fig 9 plus Fig 13 plus the canonical figures README). **Not** an invitation to invent a primitive.

**Refuter:** produce a figure line that names a specific institution as the cause of prosperity, with a verbatim citation and a checkable line number. None exists after the census above.

---

## 2b. Strains and re-census (named, not hidden)

- **S1, the anchor's exclusion restriction.** A candidate instrument is checkable for relevance and for temporal priority, but its exclusion assumption is not testable from the distribution alone (Pearl 2009). This is a live strain between the figure requirement that the anchor not update and the practical fact that the anchor's independence is an imported assumption. It is the price of the import (Fig 6 :24), not a defect in the derivation. Kept open.
- **S2, Fig 13's six-term substrate applied to social institutions.** Tempting, and retracted. Fig 13 governs a physical substrate (space, time, energy; spectrum, gradient, network). Social institutions are not members of that set and applying the cross-kind composition rule to them would be a strain. Re-census: the governing figures here are Fig 11 (habitat), Fig 2 (anchor), Fig 6/8 (import), Fig 9 (union and describe-first) and Fig 12 (ordered bonds). The retraction is kept visible rather than erased.
- **S3, "shape, not a name" overextended.** The first pass read it as forbidding the naming of any institution. Narrowed: the README's phrase governs a **missing** primitive, that is, one not held in the frame's library. Naming an atom already in the literature is a provenanced binding, not the invention of a seventh term. The gap in F10 survives, because no figure line selects which binding is correct. Correction kept visible.
- **S4, AJR versus Glaeser et al. as a conflict.** Not a conflict after re-census: two frames, different instruments, different institutional measures, different anchors. The disagreement is returned to the union census as evidence for F1/F2/F3. The verdict was not flipped. Fig 8 :50 supports treating convergence and adoption as distinguishable only by record.
- **S5, Pearl versus the figures on "causal assumption not testable in observational studies."** Not strained. Pearl works inside statistics and proves a limit on what associations can identify; the figures prove a barrier on what a closure can compose. Different objects, same direction. Counted as one low-overlap witness, not two independent ones for the same claim.

After re-census: one live strain (S1), four dissolved or narrowed with the earlier readings preserved.

---

## 3. Pre-registered refuter

Required before any outreach. *The Recursive Self-Improvement Trap* gives the reason: a frame cannot validate itself, and "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Written before the conclusion.

The shape claim is refuted if any of the following holds:

1. A statistic computed solely from the joint distribution of I and P is shown to entail a directive verdict with no added asymmetry, no import and a non-updating anchor (breaks F1 and F4).
2. An institutional measure is shown whose value is invariant to current prosperity and to the researcher's preferred theory, while still predicting later prosperity out of sample (breaks F3).
3. A synthetic or purely observational harness is shown to reproduce the direction verdict without importing an asymmetry from a frame whose closure differs (breaks Fig 11 :70, "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." and Fig 6 :23).
4. A verbatim figure line is found that names a specific institution as the cause of prosperity (breaks F10).
5. A single aggregate direction verdict is demonstrated to be invariant across every institution-slot and prosperity-slot, including the slots where the sign reverses (breaks F5).
6. A convention (a fixed significance threshold or a fixed coding rule) is shown to decide a causal outcome while still functioning as a convention (breaks F2 and Fig 10 :47).

If any fires, the shape claim is withdrawn or narrowed accordingly. Until one is run, nothing in this folder is labelled `grounded`.

---

## 4. Recommendation

1. **Unbundle before searching.** Split "do institutions cause prosperity" into per-slot direction questions (Fig 9 :54-57). One lever will not clear the intersections.
2. **Describe the residual in effect terms first.** Write "an unassigned direction between a named institution-slot and a named prosperity-slot" before selecting any instrument (Fig 9 :27-28). Otherwise any instrument will seem to fit.
3. **Require an imported asymmetry.** A valid discriminator must come from a frame whose closure differs, with provenance and a shadow test (Fig 6 :23, Fig 8 :51). No amount of re-analysis of the same association qualifies.
4. **Apply the anchor test to the instrument itself.** Its value must not move with the prosperity outcome or with the preferred theory (Fig 2 :29, :33). Declare the exclusion assumption instead of hiding it (Fig 10 :60).
5. **Keep verdicts per slot and per domain.** Never average them into "institutions matter somewhat" (Fig 1 :19, :22; Fig 9 :60).
6. **Bind the discriminator as an ordinary term before the run** and state its mode. This is the framework's Direction discipline; a frame cannot check the direction of its own question otherwise.
7. **Send the generator, not the recording.** Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." The method plus the refuter travels; the estimate for one country does not.
8. **Correct visibly.** A revised reading adds a refusal term; it does not silently erase the earlier one (Operators table :58).

---

## 5. Canonical usage check and retraction / confirmation log

Two sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw," and the canonical limit, the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD, and states "underivable-in-principle and unreachable-at-this-budget are DIFFERENT FACTS with different instructions." Step 5 says "A gate is not the ground."

| earlier reading | status after the canonical check |
|---|---|
| "institutions cause prosperity" is one question with two opposite answers | **Retracted.** It is a union of at least five overlapping conditions (Fig 9 :55-57); verdicts are per slot and never averaged. |
| a pooled significant coefficient can decide direction | **Retracted.** Symmetric observation, ordered question (Operators :15/:33); correlation is "disqualifying for a verdict" (Fig 2 :40). |
| the AJR instrument settles the direction | **Narrowed.** It is an import with a source gate and a shadow test, and it carries an untestable exclusion assumption (Fig 6 :24; Pearl 2009). It is a candidate anchor, not an accepted one. |
| AJR versus Glaeser et al. is a conflict that flips the verdict | **Retracted.** Re-census returns it to the union as evidence for F1/F2/F3. Conflict rule followed, verdict not flipped. |
| "shape, not a name" forbids naming any institution | **Narrowed.** It governs a missing primitive. Naming a held atom is a provenanced binding. The gap on which institution is the cause survives. |
| Fig 13's cross-kind composition governs institutions | **Retracted as a strain.** Fig 13 is the physical substrate; Fig 11/2/6/8/9/12 govern this question. Kept visible in S2. |
| no direction discriminator exists in the field | **Kept as a `gap`, not silence.** Fig 9 :32 and Fig 13 :134 license "unreachable," not an invention. |
| this derivation is a ground reading | **Retracted.** Simulated derivation checked for internal consistency, per the simulation status at the top. |

### Seven-question recursive derivation (summary)

1. **Is the raw association a direction verdict?** No. It is symmetric; the claim is ordered (Operators :15/:33, Fig 12 :92).
2. **Can the frame mint the arrow from more data?** No. MINT cannot add an atom (Fig 6 :21); closure is idempotent (Fig 8 :32).
3. **Where does the arrow come from?** A differing closure: natural experiment, discontinuity, random assignment, temporal or process frame (Fig 6 :23, Fig 8 :45). Residual first, frame second (Fig 9 :53).
4. **What makes the anchor an anchor?** It does not update on P or on the preferred story (Fig 2 :29/:33). The exclusion assumption is declared, not hidden (Fig 10 :60).
5. **Is this one question?** No. A union of five conditions (Fig 9 :55-57). Split, then search.
6. **What is settled?** A shape only: imported asymmetry, non-updating anchor, per-slot verdicts, provenance, refuter. No named cause (Fig 9 :32).
7. **What would reverse it?** A ground reading that fires one of the six refuters, not agreement among users of the same index (Fig 2 :40, Fig 10 :42).

### Updated verdict

The separator survives; any global naming of a cause does not. What the figures license is a method for assigning direction per slot, with an imported asymmetry, a non-updating anchor, a provenance record and a pre-registered refuter. Strains after re-census: one live (S1, the untestable exclusion assumption), four preserved as retractions or narrowings. Mode `specified` on the separator and per-domain verdicts, `general` on the structural shape, `gap` on the identity of any named cause, ungrounded candidate throughout.
