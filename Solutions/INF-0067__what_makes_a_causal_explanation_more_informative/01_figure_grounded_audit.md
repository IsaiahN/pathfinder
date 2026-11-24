# Figure-grounded audit: what makes a causal explanation more informative than a predictive correlation?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `FRAMEWORK/figures/THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19) says LLM output simulates an approximate answer and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line` against the SVG line numbers printed in that file), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources actually opened are in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

Take two claims about the same pair of variables X and Y.

- **P:** "X and Y covary; observing X lets me predict Y." This is a predictive correlation. It is scored by fit on the observations already in hand.
- **C:** "X produces Y by a mechanism Z; intervening on X would change Y in a specified way." This is a causal explanation.

When the action `a` is passive observation, both can score well. When `a` changes to an intervention `do(X)`, an environment change, or a source-discriminating instrument, P's prediction can fail while C's need not. The residual R is therefore the gap between a prediction built from co-occurrence and the observation returned after the action changes. In formula terms, R is per slot and per intervention, not a global fit: Fig 1 :19 "The residual is indexed by object slot, not aggregated." and Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

What is being decided: whether "more informative" names a difference in kind (bond, reach, ground) or only a difference in degree (better fit). What each option leads to:

- **Option A, "degree":** a causal explanation is more informative because it predicts better. This makes informativeness a frame-internal score, which Fig 1 :27 disqualifies: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
- **Option B, "kind":** a causal explanation carries a typed, ordered bond, composes across contexts as a generator, and ranges against a ground that does not move when a frame pushes on it. Its extra information is the arrangement and the reach, not a larger fit.

This audit derives B, with the honesty condition that the extra information is only real when the causal bond has been settled at the ground. An unconfirmed "causal" story can be less informative than an honest correlation because it charges for a bond it has not paid for.

Binding the sought-for shape as an ordinary term, per formula step "Direction": *more informative = (i) carries a typed ordered bond where correlation carries symmetric co-occurrence; (ii) supports intervention and transfer, i.e. generator rather than recording; (iii) ranges against a ground; (iv) keeps the residual per slot; (v) pays the description-length bargain including the price of the bond; and (vi) is not merely higher fit on the same evidence pool.* These six bindings are refusable below.

---

## 1. Domain census

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor. No nameable anchor means it is not a domain yet.

**R (the residual).** Arity: two operands X and Y, plus a hidden third term (confounder Z, context, or mechanism) that a bare correlation drops. A correlation is binary; the failure under intervention is ternary or higher. Symmetry: correlation is symmetric (r(X,Y) = r(Y,X)); causation is ordered (X precedes and produces Y). Scale: within one dataset and one closure for P; across interventions, environments or instruments for C.

| domain | actors | currency | anchor | partition or union | order by dependency |
|---|---|---|---|---|---|
| **D1, predictive / statistical frame** | variables, observations, loss, fitted parameters | fit and compression on observed data, frame-internal | held-out observations drawn from the same pool; not a world-settling anchor | shares the observational evidence with D2, so union with overlap | first: describe the residual, then choose the frame (Fig 9 :27-28) |
| **D2, causal / interventional frame** | variables, mechanisms, interventions, confounders, instruments | counterfactual reach priced in actions, plus bits for the typed bond (Fig 12 :125-126) | the experiment, intervention or discriminating instrument that does not update on the frame (Fig 2 :29) | adds a bond and a new anchor to D1; the correlation's predictions are a subset of its closure | second: settle each proposed bond before composing over it (formula step 5) |
| **D3, verification / outreach frame** | expert readers, instruments, experiments | agreement versus residual | the ground, never agreement (Fig 2 :35) | outside D1 and D2; reads both against ground | third: record a reader's verdict before showing interiors (Fig 10 :42) |

**Union, not partition.** A stable causal structure typically yields a correlation, so D1's predictions sit inside D2's closure. The surplus is the bond plus the intervention anchor. The two frames nevertheless share the observational evidence, so their agreement on predictions is one pool talking, not two witnesses (Fig 2 :39-40). Fig 9 :54 says: "And when the split lands on a union rather than a partition, unbundle before you search again." Unbundled, the causal question is not "a harder correlation" but a specific compound with its own ground.

**Dependency order (Fig 3).** Describe the residual in effect terms; check which frame's closure predicts its shape; import the intervention anchor; settle the bond; only then compose over the explanation. Optimising fit in D1 cannot rescue a missing anchor in D2 (Fig 3 :19: "Optimising a link that already works cannot rescue one that does not.").

---

## 2. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | frame-internal scores disqualified; residual per slot | degree reading fails here |
| **2 The Ground** | anchor definition; correlation has valence; agreement from one pool disqualified | decides the ground half |
| **3 Dependency Chain** | fit cannot rescue a missing intervention link | orders the domains |
| **4 The Membrane** | generator crosses, recording does not | correlation is a recording of one occasion |
| **5 Mint Pipeline** | MDL bargain; a term explains one occasion perfectly fails | prices the bond |
| **6 Closure / Reachability** | import moves the wall; effect descriptions travel | intervention anchor is an import with gates |
| **7 Room Chain** | a room's agreement is variation, not a verdict | many readers cannot settle it |
| **8 Union Surplus** | provenance separates convergence from adoption | hidden structure cannot be read off the reading |
| **9 Leave / Arrive** | describe residual before choosing a frame | prevents picking causation by preference |
| **10 Ground Maintainer** | verifier non-access; pooled readings | outreach discipline |
| **11 The Habitat** | capability is agent and habitat; contact | transfer across contexts is the real test |
| **12 The Bond** | typed, priced bonds; symmetry; isomer | **the decisive figure for the distinction** |
| **13 Minimum Viable Set** | closed primitives, unbounded arrangements; shape not name | why a bond is not a new primitive |
| **Operators table** | symmetric + ∥ ≡ versus ordered → ⇒ − ⋛; negation | identifies the exact operator difference |
| **Symbols table** | R is the aim; ground is the anchor | no R for pure fit |

---

## 3. Findings

### F1 - Correlation records co-occurrence; causal explanation carries the bond (decisive)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
Fig 12 :46-47: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands. A recipe that names only its ingredients has recorded half of itself."

The correlation gives the two operands (X, Y) and the fact that they "both hold at once" (conjunction, `+`). It does not give the relation type. Fig 12 :6-8 names the flat-form failure: "the ingredients are recorded and the arrangement is not", "nothing downstream can tell them apart, and nothing signals that anything was lost." That is exactly the ice-cream-and-drowning case: the reading is correct and the arrangement is unrecorded.

The causal explanation adds a typed bond. There are two candidates in the figure set:

- Fig 12 :72: "A then B; B needs A to have happened" (sequence, `→`).
- Fig 12 :77: "A produces B; B did not exist before" (production, `⇒`).

Both are ordered, so both carry information that co-occurrence does not. The figure quotes its own test: Fig 12 :74 "swap them. Does it become a different thing? Yes." Contrast the symmetric test at Fig 12 :59: "swap the operands. Does the meaning change? No." Correlation passes the symmetric test; causation fails it by design.

**Refuter:** show that a symmetric relation determines the post-intervention distribution `P(Y | do(X))` for every intervention of interest without any causal assumption. If so, the bond adds nothing and F1 falls.

### F2 - Arrangement is the substance, so same readings can be different substances

Fig 12 :94: "The arrangement is the substance."
Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Confounding, reverse causation and direct causation can produce the same correlation. Under Fig 12 they are isomers over the same observed atoms: interchangeable in the flat formula, decisive in behaviour under intervention. This is not an analogy imported from chemistry; the figure itself says so at :97-98 (Liebig and Wöhler, silver fulminate and silver cyanate).

**Refuter:** exhibit two causal structures with the same correlation that also agree on all interventions the question cares about. Then the isomer difference is behaviourally inert and the extra information is not informative for this question.

### F3 - Fit is frame-internal; the ground is the only metric

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."

A correlation's accuracy is produced by the same frame that reports it, so it cannot certify itself. Worse, an aggregate fit hides the slot where the prediction fails under intervention. The causal explanation earns its extra information by ranging against an anchor that the frame cannot move: the intervention, the experiment, the patient outcome. Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

**Refuter:** show a case where held-out predictive accuracy, with no intervention and no anchor, settles which of two competing causal structures is true. Then fit is not frame-internal in the relevant sense.

### F4 - Correlation has valence: efficient for convention, disqualifying for verdict

Fig 2 :39 "Correlation has valence.", :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool", :41 "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it."

This is the strain test doing work. "A correlation is less informative" fails as a global claim. For prediction inside a fixed context, and for coordinating a shared expectation, a correlation is efficient and a causal model can be wasteful. The figures do not say correlation is bad; they assign its valence by use. So the answer must be stated per domain: more informative for verdicts, interventions and transfer; not automatically more informative for within-context forecasting.

**Refuter:** show a decision context where a correlation settles the outcome as well as a causal model and where "verdict" is the right word for what it does. Then the domain split here is wrong.

### F5 - A causal explanation is a generator; a correlation is a recording

Fig 4 :22: "Only methods cross up. Only head starts come down."
Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."
Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."
Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

A fitted correlation describes one occasion. It can be reapplied only where the joint distribution is unchanged. A causal explanation is a generator: it says what would happen if the input changed, so it travels to a new habitat. This is the operational content of "more informative": not more bits about this sample, but a route to observations not yet made. Improving fit without changing contact changes nothing (Fig 11 :40).

**Refuter:** show a correlation-only model that transfers to a new environment and supports a successful intervention as well as the causal model. Then the generator/contact distinction has no bite.

### F6 - Two currencies, not one score

Fig 12 :125: "A composition costs in two currencies, and they do not add."
Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
Fig 5 :43-44: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing / fails this, and so does a term that explains one occasion perfectly."

A causal explanation is more expensive in bits (a typed bond is charged for what it could have been) and buys reach in actions. A correlation is cheap in bits and may be impossible to act on. Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it." This is why "more informative" must not be collapsed into mutual information or fit: the currencies are in different units.

**Refuter:** produce a single unit in which bond cost and intervention cost add without loss, and show that ranking by that sum reproduces the verdict. Then "more informative" can be a scalar after all.

### F7 - The extra information is only real if the source is discriminated

Fig 8 :51-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."
Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings"
Fig 10 :24: "the ground does not decay, the channel does"

A "causal explanation" that just renames the correlation's source is a metamerism: several sources give the same reading, and the reading cannot say which (see `05_what_shape_means.md` §4, from *The Hard Problem is About Source*, fetched 2026-11-23). Without an instrument or intervention that discriminates sources, the causal label is borrowed authority, not extra information. This is the honest stop on the answer.

**Refuter:** show that the causal label changes a decision or a prediction in a way the correlation does not, with no instrument and no intervention, because the causal structure was already settled by a prior ground reading that is recorded. If the prior reading is recorded, F7 is satisfied rather than refuted; if it is not, the label is unpaid.

### F8 - Describe the residual before naming the frame

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit."
Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Choosing "causal explanation" as the preferred answer and then finding supporting features is echo without shadow. The residual (correlation fails under intervention) must be described first; the frame follows. The figures return a shape, not a name: the answer is "a typed ordered bond plus an intervention anchor", not "this particular causal model is true."

**Refuter:** show a derivation that starts from a named causal theory and still predicts the intervention failures it was not fitted to, with the residual described only afterwards. That would be convergent derivation at maximum independence, which F8 does not forbid; it would only change the provenance record.

### F9 - Many readers cannot settle it

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention."

A survey of experts who agree that causal explanations are better measures agreement about a shared meaning (a convention), not a verdict about the world. The verdict needs an intervention with a recorded outcome, or a source-discriminating instrument, and independence between readers.

**Refuter:** exhibit a case where a structured expert panel, with no instrument and no intervention, changed a causal verdict by surfacing a previously unstated confounder and a later experiment confirmed it. Then agreement can generate a testable atom, and the room is not merely a mirror.

### F10 - What survives after re-census

| claim | mode | figure | status |
|---|---|---|---|
| Correlation records operands and co-occurrence, not the typed relation | `general` | Fig 12 :5, :46-47 | triangulated with Operators table symmetric/ordered split |
| Causation adds an ordered bond (`→` or `⇒`) | `general` | Fig 12 :72, :77, :74, :59 | single-source for the figure definition; world sources corroborate |
| Same reading, different arrangement: isomers | `specified` | Fig 12 :117 | single-source figure definition; unmeasured here |
| Fit is frame-internal and aggregated fit hides slots | `general` | Fig 1 :19, :22, :27 | triangulated with Fig 2 ground |
| The anchor is an intervention or discriminating instrument | `specified` | Fig 2 :29, Fig 10 :24 | triangulated with world causal-inference sources |
| Generator beats recording for transfer | `specified` | Fig 4 :22, :25, Fig 11 :39-40 | single-source framework claim; world transfer evidence corroborates |
| Correlation remains efficient for convention | `general` | Fig 2 :41 | single-source, but directly on point |
| A causal label without source discrimination is an unpaid bond | `specified` | Fig 8 :51-52, Fig 10 :25-26 | triangulated with the source essay |

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device. Stating what failure looks like surfaces constraints the design does not, and the constraint arrives as a change to the experiment rather than as a note about it."

The shape claim is refuted if any of the following holds:

1. `P(Y | do(X))` is determined by `P(Y, X)` for all interventions of interest without any causal assumption, so a symmetric co-occurrence carries the full interventional content.
2. A correlation-only model transfers to a new environment and supports a successful intervention as well as the causal model, so contact is unchanged.
3. Two frames drawing on the same evidence pool can settle a causal verdict by agreeing, with no intervention and no source-discriminating instrument.
4. A single currency is found in which bond cost and intervention cost add without loss, and the scalar "more informative" ranking reproduces the verdict.
5. A causal explanation is shown to increase fit on held-out observations while leaving the bond ungrounded, and that increase is the whole of what users mean by "informative".

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. State "more informative" in effect terms before answering: for verdicts, interventions and transfer, a causal explanation carries more information; for within-context forecasting and convention, a correlation can be the better instrument (F4).
2. Lead with the operator difference: symmetric `+` versus ordered `→` / `⇒`. That is the smallest checkable claim (F1).
3. Make the ground explicit. The extra information is an intervention outcome or a source-discriminating instrument, not agreement (F3, F7).
4. Keep the two currencies apart in any write-up; do not report a single informativeness score (F6).
5. Do not present this as a scalar victory of causation over correlation. The figures assign valence by use, and the honest claim is a shape with a refuter attached (F8, F9).

---

## 6. Canonical usage check and retraction log

Two sources were read after the first sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." A reading that makes one contradict another has misidentified its domain. The framework returns "a shape, not a name" and stops where instruments can no longer distinguish.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground and does not ask the maintainer to decide what the figures already settle. "Use filters for the budget and witnesses for the verdict."

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "causal is always more informative" | **Retracted.** Fig 2 :41 gives correlation a legitimate convention role. The claim is domain-scoped now (F4). |
| "more informative means higher mutual information or fit" | **Retracted.** Fig 1 :27 disqualifies frame-internal scores and Fig 12 :125-126 keeps the currencies apart (F3, F6). |
| "any labelled causal story beats a correlation" | **Retracted.** Without source discrimination the causal label is an unpaid bond (F7). |
| "correlation is symmetric, causation ordered" | **Canonically confirmed.** Fig 12 :59 versus :74 and the Operators table symmetric column. |
| "same reading, different structure" | **Canonically confirmed** as the figure's isomer definition (Fig 12 :117), with the physics-facing check unmeasured. |
| "generator beats recording" | **Canonically confirmed** as a framework rule (Fig 4 :22, :25), not a world measurement. |
| "a room of experts can settle this" | **Canonically refused** (Fig 7 :35, Fig 2 :35, Seat Map :163). |

### Strain found and resolved

The apparent strain between Fig 2 :41 (correlation efficient for convention) and Fig 12 :5 (the bond is the missing half) is **not a contradiction after re-census**. Fig 2 governs the valence of agreement by use; Fig 12 governs what a composition carries. Different quantities. Per the canonical usage rule, the strain sent us back to the census, not to a softer reading; the result is the domain split in §1. No strain remains hidden.

---

## 7. Verdict

**The extra information in a causal explanation is the arrangement and the reach, not a larger fit.** Concretely: a typed ordered bond where a correlation has symmetric co-occurrence (F1, F2); contact with an intervention ground where a correlation ranges only against the same evidence pool (F3, F5); and a per-slot residual that survives transfer instead of an average that hides it (F3). The comparison is domain-scoped: correlation stays efficient for prediction and convention (F4), and causal language without a discriminating instrument can be less informative than an honest correlation (F7). Mode `specified`, ungrounded. Cost if wrong, undoable and reversal conditions are stated in `09_watson_answer.md`.
