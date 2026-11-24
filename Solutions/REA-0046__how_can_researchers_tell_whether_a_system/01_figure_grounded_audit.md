# Figure-grounded audit: REA-0046, telling whether internal representations correspond to the world

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what shape a checkable test has. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: simulated, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure quotes from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extract, cited `Fig N :line`). Loop and mode rule from `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources opened this run are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

Question as given: "How can researchers tell whether a system's internal representations correspond to meaningful structures in the world?"

Restated as an effect: a researcher holds two things, an internal state X of a system (activations, a feature vector, a circuit, a module output) and a claimed world structure W (an object, a spatial layout, a causal relation, a category). The researcher wants to decide the claim C = "X corresponds to W." The residual R is the gap between what the system's own account delivers and what the world returns under the researcher's probes. Concretely, the system can produce fluent output, coherent internal activation patterns, and high probe accuracy, all of which are frame-internal quantities. None of them is an anchor. The effect question is: what would an instrument have to do so that C is settled by something that does not change its answer when the frame is pushed?

**What an answer would look like, bound before the search (formula "Direction").** A *correspondence test* with three separable conditions:

1. **Information.** X carries a decodable signal about W. Necessary, not sufficient. A probe can learn the task itself.
2. **Causal role.** Intervening on X changes the system's W-tracking behavior with specificity, and intervening on W changes X as predicted. This is the anchor test applied to representations.
3. **Structure.** X preserves the arrangement (the bond) rather than only the ingredient list. Feature presence is not relational structure.

A correspondence claim is settled only when the world, as anchor, pays for all three, and when independent frames converge with a recorded lineage that shows they were independent. Written down and bound, this shape can now accrue a residual and be refused. Without that binding, the sought-for shape is an unbound preference that no check in the loop can see (Fig 5 :62-66, quoted in section 2).

---

## 1. Domain census, before choosing any figure line

Describe R by arity, symmetry and scale. Then one line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet. Then partition or union, then dependency order (Fig 3).

**R (arity / symmetry / scale).** Arity: the claim C is a binary relation between X and W, but the deciding structure is triadic: X, W, and the instrument that links them. This is the same triadic shape the symbol-grounding literature records (sign, object, interpreter; see `09_watson_answer.md` WORLD). Symmetry: correspondence is directional, "X is about W" does not reverse, and the reverse is not recoverable from content, because Fig 8 :51 says "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". Scale: X lives at the level of the system's internals, W at the level of the environment, and the researcher's instrument spans the two.

| domain | actors | currency | anchor | standing |
|---|---|---|---|---|
| D1, the system's internal frame | features, activations, circuits, library Γ, weighting w | prediction residual, description length, activation magnitude, probe accuracy | none available from inside | a frame, not a domain with a nameable anchor. Its own scores are disqualified (Fig 1 :27) |
| D2, the world / ground | world structures, environment, interventions | measurements, counterfactual changes, behavioral consequences | the world, which does not update on what any frame thinks (Fig 2 :29) | the only domain with a genuine anchor |
| D3, the researcher / verification frame | researchers, probes, independent frames (seeds, architectures, labs), instruments | agreement and residual across frames | the ground, never agreement (Fig 9 :60) | a seat; its agreement is a budget filter, not a witness |

**Partition or union: union compound.** "Telling whether representations correspond to meaningful structures" bundles at least three conditions: information, causal role, structure. They overlap and do not reduce to one list. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." A probe that decodes W clears the information region and leaves the causal and structural intersections standing. So one lever cannot settle C.

**Order by dependency (Fig 3).** perception (can we read X and W at all?) then vocabulary (do we have terms for what X affords?) then objective (what counts as progress, i.e. what would count as correspondence in our own terms?) then planning (design the intervention) then learn and carry. The question lives at the vocabulary-to-objective link. Fig 3 :25 says "Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests." Fig 3 :26-27 says the link between them "has neither, so it attracts the least attention and the fewest instruments. A link with no instrument is not a link that works. It is a link nobody has looked at." That is exactly where this question sits: "correspondence" is a term with no instrument until we bind the test above.

Strain test before concluding: a figure line that fits only with forcing governs another quantity, so re-census rather than soften. Two candidate strains are named and resolved in section 5.

---

## 2. Figure census and findings, quoted verbatim before concluding

| figure | bearing | verdict |
|---|---|---|
| Fig 1 The Agent | frame-internal quantities disqualified; ground is the only metric | no self-score settles correspondence |
| Fig 2 The Ground | anchor test, independence, triangulation vs negotiation | correspondence must range against the world, not against agreement |
| Fig 3 Dependency Chain | a reading below the break is a reading of nothing | the vocabulary-to-objective link is where this question lives |
| Fig 4 The Membrane | round trip gap R_T must be measured | a summary of the test is lossy, not identical to it |
| Fig 5 Mint Pipeline | three guards, MDL bargain, own output never a measure of success | a probe's accuracy cannot be its own validation |
| Fig 6 Closure / Reachability | instruments improved from worse instruments already returning something | a probe is refined from a returning reading, not specified from a description |
| Fig 7 Room Chain | a room's agreement is variation, not a verdict | many researchers agreeing cannot anchor the claim |
| Fig 8 Union Surplus | convergence at maximum independence, record separates import from derivation | independent models converging is strong but record-dependent |
| Fig 9 Leave / Arrive | describe before looking, union unbundling, filters vs witnesses | unbundle information, causal role, structure; agreement is a filter |
| Fig 10 Ground Maintainer | declared meaning is not grounded, verifier non-access | naming a unit "the W unit" does not ground it |
| Fig 11 The Habitat | capability is agent-and-habitat; contact changes or nothing changes | only a change of contact with the world changes the claim |
| Fig 12 The Bond | ingredients are not the molecule; isomer | feature presence is not the relation that makes X about W |
| Fig 13 Minimum Viable Set | unreachable is a verdict; order from lineage | stop at the instrument limit and record the route |
| Formula | mode rule; direction must be bound as an ordinary term | mode `specified`, shape bound before the run |

### F1: Self-consistency and output are frame-internal and disqualified (general, structural)

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

A system's fluent answer, its low training loss, its internal coherence, and the fact that a probe can decode W from X are all quantities produced inside the frame under test. They are not witnesses for the claim that X corresponds to W. In the world literature this is the exact failure Hewitt and Liang name when they ask whether high probe accuracy means "the representations encode linguistic structure or just that the probe has learned the linguistic task" (see `09_watson_answer.md` WORLD).

**Refuter:** show a frame scoring itself with a quantity it does not produce, or show a mirror correcting the frame. If either is demonstrated, F1 falls. Until then no frame-internal score is admitted as a verdict.

### F2: The anchor test: push on the world, not on the frame (specified)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 10 :18: "a declared meaning is not a grounded one."
Fig 10 :49: "Declaring a meaning does not ground it."
Fig 10 :24: "the ground does not decay, the channel does."

The label "the dog unit" is a declared meaning. It becomes grounded only when the world pays: intervene on the world and the unit's response changes as the claimed structure predicts; intervene on the unit and the system's world-tracking behavior changes with specificity. If pushing on the frame changes the world's answer, the supposed anchor was another frame. Fig 2 :29 continues: "If it moves when you push on it, it is not an anchor." This is the causal-intervention method the world literature uses (Meng et al., 2022, "a causal intervention for identifying neuron activations that are decisive in a model's factual predictions").

**Refuter:** a representation whose declared correspondence survives removal or alteration of W in the world, or a case where changing the researcher's description of X changes the world's verdict. Either fires against F2.

### F3: Independence and convergence, but only with a record (specified)

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool."
Fig 8 :50: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."
Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them".
Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Independent seeds, architectures, or laboratories that arrive at the same representation atom by separate routes are the strongest available corroboration. But two pages quoting the same review are one witness. The record of provenance is what distinguishes convergence from copying, and the surplus lives only where closures differ. Agreement among many researchers, or among models trained on one corpus, is a convention or a shared pool, not a verdict (Fig 2 :42: "Buy independence in proportion to the cost of being wrong.").

**Refuter:** show that the supposedly independent frames share training data, weights, vocabulary, or an author, so their agreement is the pool talking. If independence is zero, the convergence witness is withdrawn. This refuter is cheap to run and should be run first.

### F4: Union compound: a probe is necessary but not sufficient (specified)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The question bundles information, causal role, and structure. Fig 9 :55's lever clears the region where only information holds and leaves the intersections. A control-task probe (Hewitt and Liang, 2019) improves the information condition by showing the probe is selective rather than memorizing, but it still does not show the system uses X to track W. Only intervention on X (Meng et al., 2022) addresses causal role, and only a relational test (Fig 12) addresses structure. Each condition keeps its own verdict; they are never averaged into a single "representation quality" score.

**Refuter:** a probe that is selective on control tasks and whose ablation of X abolishes the W-tracking behaviour, with no change to the world needed. If such a probe is demonstrated and survives a new intervention, the causal condition collapses into the information condition and F4 is narrowed.

### F5: Ingredients are not the structure (general, structural; specified where world-checkable)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
Fig 12 :125: "A composition costs in two currencies, and they do not add."

A feature list recovered from X is an ingredient list. The claim that X corresponds to W is a claim about the arrangement, about which structure mediates which states, not just which features are present. The superposition result (Elhage et al., 2022: "Neural networks often pack many unrelated concepts into a single neuron") makes this concrete: one unit can carry several features, so "a unit for W" is the wrong granularity and reading the ingredient list off a single unit misrecords the bond. By Fig 12 :117, two representations with the same features under different relations are different substances.

**Refuter:** a representation in which each world structure maps to a dedicated unit with no superposition, and the relation among structures is recoverable from the feature list alone. Then the bond adds no information and F5 is withdrawn for that system.

### F6: The framework returns the shape of the test, not a name (general)

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 13 :134: "Unreachable is a verdict here, not a silence"
Fig 5 :62: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term." (attributed to the figure text, Fig 5 :62-63)

The canonical README states the limit: the framework returns "what a missing thing would have to look like (a shape, not a name)." For this question that shape is the three-condition correspondence test, not a verdict that any particular activation "is" a particular world structure. Failing to find a correspondence at current resolution is unreached, not a proof that none exists; the honest stop records the instrument limit and the lineage (Fig 13 :129: "the order is not recoverable from the artefact. It is recoverable from the lineage.").

**Refuter:** a figure-derived criterion that names a specific internal representation as corresponding to a specific world structure without an anchor reading, or a proof that indiscernibility at the instrument limit is identity. The README's rule "Indiscernibility is not identity" forbids the second.

### F7: Instruments are improved from a worse instrument already returning something (general)

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."
Fig 6 :34-35: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

A probe for correspondence is not specified from a verbal account of "meaning." It is built from a worse probe that already returns a reading: raw activation similarity, then a linear decode, then a control-task-selective decode, then an interventional test. Fig 6 :38 allows theory to precede the instrument ("Neptune was calculated before it was seen"), but even then a returning reading is what tells anyone where to point. If nothing at any resolution is returning a failed reading, there is no edge to extend and the search is for a proto-instrument, not a better one.

**Refuter:** a probe designed purely from the description, with no prior returning reading, that settles correspondence on first use. Fig 6 permits jumps in resolution but not a sensor for something that has never registered; a demonstrated first-use probe would need a re-census of what "registered" means here.

### F8: The frame cannot certify its own completeness (general)

Fig 8 :37: "A frame cannot certify its own limit." (part of "A frame cannot certify its own limit. Chaitin: beyond a fixed constant, no system proves that any object exceeds its own complexity.")
THE_FORMULA.md mode rule: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."
From the essay *The Recursive Self-Improvement Trap*: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."

This audit is itself a frame. It cannot certify that it has enumerated every condition of correspondence. That is why the refuters are written before the conclusion and why a world search across low-overlap fields is run at all. Agreement between this audit and the world sources that share the framework's author would be one pool talking; the sources used here are independently authored, which is a genuine but still limited improvement.

**Refuter:** a demonstration that the derivation fails to enumerate a condition that the world sources independently require. That sends the census back to step 1, it does not flip a verdict by assertion.

---

## 3. Pre-registered refuter (written before the conclusion)

Per the seat rule that a falsifier written before the run is a design instrument. The shape claim (that correspondence is a three-condition, anchor-settled, independence-checked union) is refuted if any of the following holds:

1. A frame-internal quantity (raw probe accuracy, activation magnitude, output fluency, internal coherence) is shown to settle correspondence without any anchor reading.
2. A representation passes the anchor test, the independence test, and the structure test, and then fails to track the world under a new intervention. This is the strongest refuter because it targets the shape itself, not one condition.
3. A world source demonstrates that decoding W from X is sufficient for correspondence, with no causal or structural condition needed. A conflict sends us back to the census, never to a softer reading.
4. A figure re-census shows that "meaning" here is constitutively about the frame rather than the world, making agreement the legitimate anchor, as in Fig 2 :36-37 where human judgment is the right anchor for a question about people. The question as given says "structures in the world", so the world is the anchor; if the question were reframed as "is this a good representation for a person", that would be a different question with a different anchor and a separate loop.

Until one of these is run, no part of this folder may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the shape of the test and the pre-registered refuter, not with any claim that a named unit is a named structure (F2, F6).
2. Unbundle the question into information, causal role and structure before searching for a method; report verdicts per condition and never average them (F4, Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").
3. Buy independence in proportion to the cost of being wrong: multiple seeds and architectures with a recorded provenance, not a larger crowd of agreeing readers (F3).
4. Build the probe from a reading that already fails to resolve, and report the round-trip gap between the shorthand and the actual protocol (F7, Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked.").
5. Use the public submission and contact points in `03_public_contact_points.csv`. Ask what would count as a failure. A failure is more useful than an endorsement.

---

## 5. Canonical usage check and retraction / confirmation log

Read after sections 0 to 4: `FRAMEWORK/reference/FIGURES_README_canonical.md`, the noun "shape" definition in the eight essays, and the metalaw reading that figures decide and world sources only corroborate.

Two governance rules were applied. First: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Second: "a reading that makes one contradiction another has misidentified its domain, not found a flaw." Both are from the canonical README.

| earlier reading in this audit | status after the canonical check |
|---|---|
| "probe accuracy cannot validate correspondence" | **Narrowed, not withdrawn.** F1 forbids a self-score as a verdict, but a selective control-task probe is a legitimate reading that fails to resolve. The probe is an instrument to be improved, not a disqualified quantity. Compare Fig 6 :32. |
| "independent convergence proves meaning" | **Narrowed.** F3 now requires a recorded lineage (Fig 8 :51). Without the record, convergent derivation and adopted import are indistinguishable in content. |
| "superposition refutes single-unit representations" | **Narrowed.** F5 is a granularity warning, not a ban. Fig 12 concerns the bond, not the existence of units. |
| "the framework returns a shape, so naming any structure is forbidden" | **Not claimed here.** As in the exemplar's correction, the shape-not-a-name rule governs a missing primitive; here it governs the *criterion*, not a ban on discussing features already observed. Naming a decoded feature is a binding from the system frame and must be recorded as such. |
| Apparent strain: Fig 1 disqualifies frame-internal scores, yet the method uses probe accuracy as a reading | **Not strained.** Re-census: Fig 1 disqualifies a self-score *as a verdict*; Fig 6 :32 permits a worse instrument that returns a reading to be improved. Different quantities (verdict weight vs instrument input). |
| Apparent strain: Fig 2 makes the world the anchor, but Fig 2 :36 allows human judgment as an anchor for questions about people | **Not strained.** An anchor is legitimate when the question is constitutively about it. REA-0046 is about structures in the world, so the world is the anchor. A "is this good for a person" reframing is a different question with a different loop. |
| "no correspondence found" as a final answer | **Refused.** Fig 8 :39: "So a search that finds nothing is never a proof of absence." Status `unreached`, not `gap` by default; `gap` only after a genuine re-census finds no governing line, which did not happen here. |

### Round trip and where the answer stops

The condensation "three conditions, anchor, independence" is lossy relative to the figure set. The dropped constraints are named rather than hidden: the requirement that the instrument already return a reading (Fig 6 :32), the requirement that the record separate convergence from import (Fig 8 :51), and the requirement that the union be unbundled before search (Fig 9 :54). Fig 4 :30 requires the gap to be measured, not assumed zero. No numerical R_T is claimed because no ground reading exists; the gap is recorded qualitatively. The honest stop is at the limit of what current instruments discriminate, with the lineage recorded (Fig 13 :134: "Unreachable is a verdict here, not a silence").

### Seven-question recursive derivation (summary)

1. **Is this one hard question?** No. Fig 9 :54-55 unions information, causal role and structure. Unbundle first.
2. **Can the system settle it alone?** No. Fig 1 :27 and Fig 5 :48 disqualify self-scores and output.
3. **What settles it?** An anchor that does not update: the world. Fig 2 :29. A declared label does not ground it (Fig 10 :49).
4. **What counts as the world paying?** Intervention with specificity: change W, X changes as predicted; change X, world-tracking behaviour changes. World source: Meng et al., 2022.
5. **How do independent frames help?** Convergence at maximum independence, but only with a record separating it from import. Fig 8 :50-51. Agreement alone is a filter (Fig 9 :60).
6. **What about the arrangement, not just features?** Fig 12 :5 and :117: the bond is the missing half; superposition makes single-unit readings unreliable.
7. **When do we stop?** At the instrument limit, with the route recorded. Fig 8 :39, Fig 13 :134. Not with a name, not with a consensus.

### Updated verdict after the canonical check

The shape survives and is sharper than the raw question: correspondence is a union of three independently failing conditions, settled only by an anchor that does not update, corroborated (if at all) by independent frames with a recorded lineage, and reported as a shape with refuters rather than a named mapping. Strains after re-census: **none hidden**; two candidate strains were dissolved and two findings narrowed above. Mode remains `specified`; nothing is `grounded`. The strongest single figure-grounded point is F2 plus F3: a declared meaning is not a grounded one, and a mirror cannot correct you.
