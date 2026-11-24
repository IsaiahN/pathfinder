# Figure-grounded audit: causal influence from partial correlations on a network

**Mode of this document: `specified`, not `grounded`.** It states what a measurement would have to show. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself." Same essay: "The catch is that the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md` (canonical usage rule), `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, and the public sources in `10_source_ledger.csv`. Figure quotes are verbatim from the SVG extract.

---

## 0. The question stated as a residual

> Can researchers infer a network's causal influence from observed correlations when the network itself is only partially measured?

Restated in effect terms. We hold a correlation reading over the nodes we happened to record. We want the directed influence structure: which node changes which, in which direction, with what sign, and how strongly. The residual `R` is the gap between what the correlation reading predicts and what the causal structure would produce if a node were changed on purpose. The "partially measured" clause means the reading is produced by a channel that does not carry every node and every edge.

What an answer would look like, bound as an ordinary term before the search (Formula step "Direction"). An answer is either:

- **A name**: a unique directed graph with edge signs and strengths over the network, licensed by the reading alone; or
- **A shape**: a narrowed class of structures compatible with the reading, plus an explicit statement of what additional contact would discriminate within that class.

Binding the sought-for shape as a term is what makes it refusable. Fig 5 warns that the preference itself is invisible to the loop: "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." The two bulbs above are the bound terms for this run.

**Direction of the question is not a term the loop can check.** Formula step 2: "a frame searching for an answer of a given SHAPE holds that shape as a PREFERENCE, not a term. Unbound, predicting nothing, no residual - so nothing above can see it." So the pre-registered refuter in section 5 is a design instrument, not an ornament.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry and scale

- **Arity.** The residual has at least two operands: (a) a direction question, which edges point which way; (b) a coverage question, which nodes and edges the channel actually carried. A hidden common cause makes these overlap, so this is a **union compound**, not a list of two separate problems. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." From *The Library of Babel*: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"
- **Symmetry.** Correlation is a symmetric relation over node pairs: the reading treats `(A,B)` and `(B,A)` alike. Causal influence is an ordered relation: "A then B" is not "B then A". Fig 12 names the ordered bonds and the test that identifies them. The Operators table gives the symmetric test ("swap the operands. Does the meaning change? No.") and the ordered test ("swap them. Does it become a different thing? Yes."). This mismatch is the first thing to derive from, because it is structural and does not depend on any field's estimator.
- **Scale.** Node-pair scale (a correlation coefficient, a mutual information estimate) versus network scale (a graph over many nodes). A third scale appears with partial measurement: measured subnetwork versus the larger network that contains its latent causes. Fig 13 :10: "near, far, between, contained" names the state that makes containment legible.

### 1.2 One line per domain: actors, currency, anchor

A domain without a nameable anchor is not a domain yet. Each line below names one.

- **D1, the observation frame.** Actors: the measured nodes, the recorded samples, the correlation or information estimates, the sampling schedule. Currency: association, that is co-variation in the reading. Anchor: the instrument that produced the reading, a counter or assay whose output does not change because an inference frame re-describes it. Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Question type: partition of measured from latent, and description of what the channel carries.
- **D2, the causal-generating frame.** Actors: all nodes including the unmeasured ones, the directed edges, the structural assignments, the interventions. Currency: causal influence, that is what happens to one node when another is set by an operation that overrides its usual causes. Anchor: the ground, here an intervention whose target is known and whose outcome is read. Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Question type: identifiability of a query from a distribution plus assumptions.
- **D3, the inference and verification frame.** Actors: researchers, estimators, candidate graphs, review. Currency: agreement and remaining residual among candidate structures. Anchor: the ground, never the agreement. Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Question type: which frames in this run are independent and which are one pool wearing several names.

### 1.3 Partition or union

Union. D1 and D2 overlap at the latent common cause: a missing node is simultaneously a channel defect in D1 and a generative cause in D2. D3 draws on both. Because it is a union, we keep one loop per condition and do not average the verdicts (Fig 1 :19: "The residual is indexed by object slot, not aggregated."). Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." The "object slots" here are the two conditions (direction, coverage) and the three domains, not a single global accuracy figure.

### 1.4 Order by dependency (Fig 3)

Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." Dependency order for this question:

1. What does the channel return, and what does it omit (perception, D1).
2. Can the vocabulary express a directed bond and a latent node at all (vocabulary, Fig 3 :6).
3. What would count as progress: a unique name, or a narrowed shape with a stated discriminator (objective, Fig 3 :9).
4. Which route: more search at the same reach, an extended instrument, or an imported assumption (planning, Fig 3 :12).
5. What is carried forward with provenance (learn and carry, Fig 3 :14).

Describe the residual before picking a frame. Fig 8 :53: "Residual first, frame second." Fig 9 :27: "describe it before you go looking, or any frame you pick will seem to fit." This is why the fields were chosen only after the census above, and why the world sources in `09` are used as corroboration rather than as the derivation.

---

## 2. Figure census

| figure | bearing | verdict after census |
|---|---|---|
| 1 The Agent | residual indexed per slot; frame-internal quantities disqualified | no accuracy average may stand in for the per-condition residual |
| 2 The Ground | anchor, independence, hidden common cause, correlation valence | the governing figure for the hidden-cause condition and for the agreement rule |
| 3 Dependency Chain | ordered by dependency; a link below the break reads nothing | fixes the order: channel, vocabulary, objective, route, carry |
| 4 The Membrane | lossy transform; round trip gap | a correlation summary cannot carry the bond; `R_T` owed |
| 5 Mint Pipeline | three guards; settling is necessary not sufficient; fifth kind | an assumption imported to break equivalence needs source gate and shadow test |
| 6 Closure / Reachability | mint cannot add an atom; import moves the wall; depth looks like absence | more correlation search cannot manufacture direction |
| 7 Room Chain | agreement compounds, evidence does not | a crowd of correlation methods is one room |
| 8 Union Surplus | idempotent closure; search finds nothing is not absence; underivable versus budget | the union is searchable but not by more of the same reading |
| 9 Leave / Arrive | unbundle; describe effect not cause; kind of thing not the answer | governs the shape verdict and the unbundling |
| 10 Ground Maintainer | channel decays, ground does not; verifier non-access | partial measurement is a broken channel, reported as lost touch |
| 11 The Habitat | enumerate, never compose; improvement must change contact | owed: a new reading or intervention, not a better correlation score |
| 12 The Bond | bond carries the information; isomers; arrangement is the substance | the decisive figure for symmetric reading versus ordered cause |
| 13 Minimum Viable Set | network is a structure: "that entities relate, and influence travels"; six members independent | network is a structure needing a state to denote; supports the census, not a verdict alone |
| Operators table | `+` symmetric, `→` and `⇒` ordered, `¬` for refusal | identifies the symmetry mismatch and the refusal of a spurious edge |
| Symbols table | `R` is the gap; `s` is the slot; `R_T` the round trip | notation only; no verdict |
| Formula | steps 1, 2, 3, 5, 7; mode rule | gate, settle, three questions, mode |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings

### F1  -  A correlation reading is written under a symmetric bond; causal influence is ordered (decisive for direction)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

Fig 12 :93: "The arrangement is the substance."

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

The Operators table separates the two cases by a yes-or-no test. Under `+` (conjunction, symmetric) the test is "swap the operands. Does the meaning change? No." Under `→` (sequence, ordered) the test is "swap them. Does it become a different thing? Yes." A correlation matrix has no arrow on its off-diagonal entries; it is a flat formula recording which nodes co-vary. Causal influence is the bond that the flat formula did not record.

So the reader is being asked to recover an ordered bond from a record made under a symmetric one. That is not a harder estimation problem; it is a type mismatch. Fig 12 :95: "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond." Two directed networks can induce exactly the same correlations and behave differently under an intervention. This is the figure version of the statistical equivalence class.

**Refuter for F1.** Exhibit a case in which a symmetric co-variation reading determines a unique ordered bond with no intervention, no extra measurement and no imported assumption. If that is possible, the bond was in the reading after all and this finding collapses.

**Status: `triangulated`** (Fig 12 bond/arrangement lines and the Operators symmetry tests, two low-overlap passages of the same primary source).

### F2  -  A hidden common cause makes two measured nodes agree without influencing each other (decisive for the partial-measurement clause)

Fig 2 :6 and :7: "collapse 2: common cause (hidden shared source)"

Fig 2 :18: "one evidence pool"; :19: "they never talk, and still agree"; :20: "so the agreement is the pool talking,"; :21: "not two frames confirming each other"

This figure names the exact failure. Two measured nodes need not be causally linked for their readings to agree. If an unmeasured node drives both, the correlation is the shared source talking. Partial measurement is what leaves that source unnamed.

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." A hidden common cause is not an anchor. It is a frame (an unobserved source) that has entered the reading without being declared.

World corroboration (secondary, not the basis of the verdict): Verny, Sella, Affeldt, Singh and Isambert, *PLOS Computational Biology* 2017, write that "unmeasured (latent) variables may be hidden in many genomic datasets and lead to spurious causal relationships between observed variables." Their `miic` method learns from observational data with latent variables, which shows the class is narrowable, not that a name is recoverable. Overlap with the figures: low (different field and evidence pool).

**Refuter for F2.** Show that adding the formerly latent common cause to the measured set leaves the inferred equivalence class and its interventional predictions unchanged. If it does, the "hidden source" was idle and this finding does not apply.

**Status: `triangulated`** (Fig 2 hidden-source passage and Fig 12 isomer passage, with low overlap between the ground/anchor figure and the bond figure).

### F3  -  Correlation is valence, not a verdict

Fig 2 :39: "Correlation has valence."

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

Fig 1 :23: "The ground enters as the only metric." Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A correlation is produced by the observation frame. It cannot certify the causal frame, because the causal frame's claim is about what would happen under a change the observation frame never made. Agreement among estimators that all consume the same correlation matrix is one evidence pool. Fig 7 :12 and :13: "same closure, handed along; agreement compounds, evidence does not."

The *Hard Problem is About Source* essay makes the instrument side precise: "the instrument is speaking only about what it measured, it cannot comment on the source." And: "If several paths create the same behavior, then behavior is a projection with lossy information (it cannot define consciousness in full)." A correlation reading is exactly such a projection. The equivalent of the spectrometer here is an intervention with a known target, not a larger correlation table.

**Refuter for F3.** Show that a panel of correlation-only estimators whose agreement is high predicts interventional outcomes at better-than-chance rate in a partially observed network, with the panel's shared data held fixed. If it does, their agreement carries information about the world and this finding is weakened to a caution.

**Status: `triangulated`** (Fig 2 valence/anchor lines, Fig 1 metric line, Fig 7 room-chain line, and the source essay, with low overlap between the instrument argument and the figure argument).

### F4  -  Partial measurement is a decayed channel, and the honest output is "you have lost touch"

Fig 10 :24: "the ground does not decay, the channel does"

Fig 10 :27 and :28: "the output is not a verdict, it is you have lost touch"

Fig 10 :25: "stale percepts, dropped transients, saturated metrics, pooled readings"

A network that is only partially measured is not a network whose ground has changed. It is a channel that failed to carry some of what the ground returned. Fig 10 :29: "→ keep the anchor reachable". The correct report from a degraded channel is a loss-of-contact report with an account of what is missing, not a confident graph.

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." With partial measurement, the researcher cannot tell from the reading alone whether a missing edge is unfound because of insufficient sampling (depth) or because the relevant node was never recorded (absence). That is the whole difficulty in one line.

**Refuter for F4.** Exhibit a channel diagnostic computed from the reading alone that distinguishes depth from absence in a partially observed network without external knowledge of which nodes were omitted.

**Status: `triangulated`** (Fig 10 channel passage and Fig 6 depth/absence line).

### F5  -  More search at the same reach cannot add the missing direction

Fig 6 :21: "MINT composes inside the closure and can never add an atom."

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."

Running more correlation estimators on the same measured nodes enlarges the visited portion of a fixed closure. It does not add the latent node or the intervention that would carry direction. Fig 8 :39: "So a search that finds nothing is never a proof of absence." So the absence of a detectable edge in the reading is not evidence that the edge is absent from the network.

Fig 8 :40: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions." These must not be conflated. If the direction is underivable from the reading plus assumptions, the remedy is a new atom, that is an intervention, a measured latent node, or an imported assumption with a provenance record. If it is merely unreachable at this budget, the remedy is more search. Partial measurement usually makes it the first, and the two look the same from inside.

**Refuter for F5.** Show an algorithm that, using only the same correlation reading and the same measured node set, reduces an undirected Markov equivalence class to a unique directed graph with no additional assumption encoded in its objective or priors. If so, the direction was in the closure and more search was the right remedy.

**Status: `triangulated`** (Fig 6 closure lines, Fig 8 idempotence and search lines).

### F6  -  The reachable answer is a shape, not a name

Fig 9 :30 and :31: "your words are borrowed too, so describe the effect rather than the cause"

Fig 9 :32: "you get a kind of thing, never the answer itself"

Fig 13 :134: "Unreachable is a verdict here, not a silence,"

The canonical usage rule (figures README) says the framework returns "what a missing thing would have to look like (a shape, not a name)". For this question the shape is: a class of directed structures compatible with the observed independence constraints over the measured nodes, together with a list of the discriminating readings that would narrow the class. That is close to the statistical notion of a Markov equivalence class or a partial ancestral graph when latents are present, but the figure claim is the structural one: the effect description is reachable, the unique name is not owed by the reading.

World corroboration (secondary): Christopher Hitchcock, *Stanford Encyclopedia of Philosophy*, "Causal Models" (first published 2018), section 4.4: "it will not always be possible to identify the causal structure from probability alone. In general, given a probability distribution P on V, it is only possible to identify a Markov equivalence class of causal structures." Also Jaber, Zhang and Bareinboim, ICML 2019: "a PAG can be learned directly from data, and the scientist does not need to commit to a particular, unique diagram." Both agree with the shape verdict. Neither decides it.

**Refuter for F6.** Produce, from the partial correlation reading alone, a unique directed graph whose interventional predictions are confirmed at the ground and whose uniqueness does not rest on an unstated assumption. If so, the answer was a name and this finding is false.

**Status: `triangulated`** (Fig 9 kind-of-thing line, canonical README, and two low-overlap world fields: philosophy and machine learning).

### F7  -  Sample size and significance are filters for the budget, not witnesses for the verdict

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

A larger sample, a smaller p value, or a higher edge confidence score tells us how much of the chosen space was visited. It does not tell us that an ordered edge is real. The exemplar's field guide makes the same point about prestige; here the analogous leak is methodological prestige, the reputation of a well known estimator standing in for ground contact.

World corroboration: Siegenthaler and Gunawan, *PLOS ONE* 2014, found that when non-inferable edges are excluded, "the overall team rankings showed a prominent change from the original scoring". They also write: "network inferability depends on the available information contained in the data, but not on the inference method." A better method cannot infer what the data did not carry. This is F5 in a laboratory frame.

**Refuter for F7.** Show that an estimator's confidence score, computed only from the same partial reading, tracks interventional truth across networks with different latent structures at a rate better than the score's own calibration would predict.

**Status: `triangulated`** (Fig 9 filter line, Fig 1 per-slot line, and a systems-biology benchmark).

### F8  -  Direction and coverage are a union compound and must be unbundled

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

The direction condition (F1, F3) and the coverage condition (F2, F4) bind each other only at the latent common cause. Searching them as one problem invites the error of treating a better direction estimator as if it repaired a missing node, or a denser sampling schedule as if it oriented an edge. Keep two loops:

- **Loop A, direction.** What in the reading can carry an ordered bond? Answer: nothing by symmetry alone (F1).
- **Loop B, coverage.** What in the reading can identify a hidden shared source? Answer: only constraints over more than two measured variables, and only under assumptions, or a direct measurement of the source (F2 and the `miic` source).

The compound is Loop A composed with Loop B at the latent node. That composition has its own ground: an intervention that both changes a node and reveals whether the apparent edge was a shared source.

**Refuter for F8.** Show that the two conditions have identical habitat enumerations (same actors, same anchors, same currency) and can be settled by one instrument. If so, the union reading is wrong and they should be merged.

**Status: `single-source` for the figure rule (Fig 9), with the world benchmark and the latent-variable paper as low-overlap corroboration for the existence of the two conditions.**

### F9  -  The owed thing is contact, not cleverness

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Fig 4 :27: "The transform between scales loses information, and that is the point."

What closes the residual is a reading that was not available before: a targeted perturbation with known target, an additional measured node, or a time-resolved measurement that resolves which change preceded which. An imported structural assumption can also narrow the class, but only with a source gate and a shadow test (Fig 6 :23, Fig 8 :50). The round trip must then be measured: Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

World corroboration: Seçilmiş, Hillerton, Tjärnberg, Nelander, Nordling and Sonnhammer, *Scientific Reports* 2022, conclude that "Targeted gene perturbations combined with inference methods that use the perturbation design are indispensable for accurate GRN inference." This is F9 tested in a specific field, and it corroborates rather than decides.

**Refuter for F9.** Exhibit a setting in which adding a known-target intervention or a formerly latent node to the measured set leaves the discriminating power of the inference unchanged across all tested graphs. If so, contact is not what is owed here.

**Status: `triangulated`** (Fig 6 instrument line, Fig 11 contact line, Fig 2 triangulation line, and an interventional benchmark in a different field).

---

## 4. Pre-registered refuter

Required before the conclusion, per the exemplar's discipline: a falsifier written before the run is a design instrument. The shape claim of this solution is: **from a partial correlation reading, a unique causal influence on the network is not recoverable; only a narrowed class is, and discriminating within it requires new contact or a provenanced import.**

It is refuted if any of the following holds:

1. **Symmetry broken without contact.** A symmetric co-variation reading over measured nodes determines a unique ordered causal bond with no intervention, no additional measurement and no imported assumption (kills F1).
2. **Idle latent.** Adding a formerly latent common cause to the measured set leaves the equivalence class and all interventional predictions unchanged (kills F2 and F4).
3. **Agreement predicts.** A panel of correlation-only estimators, drawing on the same evidence pool, predicts holdout interventional outcomes at better-than-chance rate and better than its own calibration (kills F3 and F7).
4. **Closure escaped by search.** An algorithm using only the same reading and node set reduces the class to a unique directed graph whose uniqueness does not rest on an assumption hidden in its objective (kills F5 and F6).

If any fires, the answer is withdrawn or narrowed accordingly. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Report a shape, not a name: the class of structures consistent with the reading, plus the specific readings that would discriminate within it. Do not report a single graph as "the inferred causal network" (F1, F6).
2. Declare the channel. State which nodes were not measured and which edges were not observable, and treat the missing ones as residual rather than as absent (F2, F4).
3. Keep the two conditions separate. Direction and coverage are a union compound with different anchors (F8).
4. Price an assumption when one is used. If a structural prior (linearity, no unmeasured confounding, faithfulness, a known time order) narrows the class, record its source, its shadow test and what would falsify it (F5, F9).
5. Use significance and sample size as budget filters only (F7).
6. The ground is an intervention with a known target, or an instrument that resolves a formerly hidden source. Agreement among correlation methods is not one (F3, F9).
7. Send the generator (the residual, the shape claim and the refuter) before the links. Fig 4 :22: "Only methods cross up. Only head starts come down."

---

## 6. Canonical usage check

Two local rules were applied after the first five sections.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the limit: the framework gives "a shape, not a name" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest. Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, gates (support, reachability, novelty), and step 7's three distinct questions SEARCHED, INWARD, OUTWARD. Underivable-in-principle and unreachable-at-budget are different facts.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Fig 2 :40 forbids all use of correlations in causal inference" | **Retracted and narrowed.** Re-census: Fig 2 :40 governs agreement between frames sharing an evidence pool, not the use of one frame's reading to narrow a class. The latent-variable and PAG sources show observational data constrain the shape. F3 now states only the agreement prohibition. |
| "Partial measurement is one gap in the data" | **Retracted as a union.** Re-census under Fig 9 :54 splits it into a direction condition and a coverage condition that overlap at the latent common cause. F8 is the replacement. |
| "The remedy is always an intervention" | **Narrowed.** Observational constraint discovery (`miic`, FCI, PAG identification) can narrow the class without an intervention. What it cannot do is supply the missing contact for free. F9 now says new contact OR a provenanced import, and states the gate. |
| "Fig 8 :39 means a null correlation proves no edge" | **Refused.** The line says a search that finds nothing is not a proof of absence. It does not say absence is impossible to establish. Replaced by the depth/absence distinction at Fig 6 :27. |
| F1 symmetry mismatch | **Canonically confirmed.** Fig 12 :117 (isomer) and the Operators symmetric/ordered tests are low-overlap passages of the same primary source and survive the re-census. |
| F6 shape, not a name | **Canonically confirmed.** The figures README uses the exact phrase and the local exemplar applies it as a limit on naming, not as a ban on binding held terms. |
| Apparent strain, Fig 1 frame-internal quantities versus causal discovery | **Not strained after re-census.** Fig 1 disqualifies a frame scoring itself with a quantity it also produces. A constraint-based method does not score itself; it returns a class that a ground later tests. Different objects. |
| Apparent strain, Fig 6 "mint cannot add an atom" versus interventions adding information | **Not strained after re-census.** An intervention is not a mint inside the correlation frame's closure. It is an instrument extension or an import from a frame whose closure differs (Fig 6 :23), and it is priced as such. |
| This derivation's authority | **Confirmed as simulated.** By the RSI Trap's own rule, an LLM derivation cannot validate itself. No ground reading was taken. |

### Final status after re-census

Strains after re-census: **none hidden**, three resolved by distinguishing the objects each line governs. The shape survives. The unique-name claim is refused. Verdict on the question, from the figures: **not in general; a shape is reachable, a unique name is not, and the discriminating contact is owed.** Mode `specified`, not `grounded`, candidate.
