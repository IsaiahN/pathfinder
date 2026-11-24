# Figure-grounded audit: hidden or unobserved connections

**Mode of this document: `specified`, not `grounded`.** The six-term substrate claims are `general`. The claim about which edge is hidden in any particular system is a `gap`. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers, fetched and re-read this session), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are listed in `10_source_ledger.csv` and are secondary corroboration only.

---

## 0. The residual, in effect terms

An observer has a network: a set of entities and a set of recorded relations between them. Some relations that exist in the system were not recorded (false negatives), some recorded relations do not exist in the system (false positives), and some apparent relations run through entities that were never measured (hidden nodes, hidden common causes). The observer draws conclusions of two kinds from this record: conclusions about **structure** (centrality, centralization, clustering, component size, path length, community partition, assortativity) and conclusions about **behavior** (spread, synchronization, congestion, robustness, cascade reach).

The residual R is the gap, per conclusion slot, between what the incomplete record supports and what the full system would settle. It is not one number. It is indexed by the measured property, by the process run over the network, and by the system instance. Stated as the framework's own loop: R equals the difference between the prediction the library makes from the observed graph and the observation the ground returns. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

What an answer would look like, bound as an ordinary term before searching (Formula step "Direction"): a statement of (a) **why the omission is invisible from inside the record**, (b) **which conclusion slots move and in which direction**, (c) **what would have to be imported or measured to close R**, and (d) **which part stays a declared gap** because no figure line selects a particular missing edge. Any answer that names a specific hidden connection without an instrument or a provenanced import has smuggled in a name where the framework returns a shape (Fig 9 :32).

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry and scale

- **Arity.** A hidden connection is a relation between at least two operands, and often involves a third, unobserved operand mediating them. It is therefore a **bond** question, not an ingredient question. Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Symbols table: a bond is *"The typed relation between two operands... which one holds is not recoverable from the operands."*
- **Symmetry.** Which bond holds is not recoverable from the operands (Fig 12 :46). A false negative (a missing edge) is absence of an operand under subtraction, while calling a recorded edge wrong needs refusal, the unary operator negation (Operators table :73-74). The error is not symmetric with its correction: you can subtract an edge and never notice; you can only refuse one with an operator the seven bonds do not contain.
- **Scale.** First order inside the observed graph; second and third order when the missing relation carries influence outward. Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three" (continued at :53 "steps out."). Round trip between observed graph, inferred graph and observed graph adds a further scale (Fig 4 :27-32).

### 1.2 One line per domain: actors, currency, anchor

A domain needs a nameable anchor, or it is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1, bond grammar of the record | nodes as atoms, edges as typed bonds, the seven bonds plus negation | description length in bits; the arrangement carried by the bond (Fig 12 :125-127) | the figure definition of bond, molecule, isomer and flat formula; the ground for any measurement | partition at first order (which bond holds), but the hidden-connection case is a **union** of overlapping error conditions |
| D2, the inference instrument | observer, instrument, observation, generative model family, hidden nodes | residuals and reliability; actions spent to settle an edge (Fig 12 :126) | the ground (a measurement or experiment), which does not update (Fig 2 :29) | union: SEARCHED, INWARD, OUTWARD are three distinct questions (Formula step 7) |
| D3, the behavior frame | processes, flows, gradients, cascades, spread and synchronization | influence travelling over a network structure; actions | a process outcome measured against the ground (epidemic threshold, synchronizability, congestability) | compound: structure and process are two kinds, never one list (Fig 13 :74-75) |
| D4, the verification frame | outside frames, reviewers, reviewers' instruments | agreement and residual | the ground, never agreement (Fig 2 :35, :45) | triangulation, not negotiation; a shared prior is a collapse (Fig 2 :6-8) |

No domain here is admitted on a vocabulary alone. D1's anchor is the bond table and isomer definition, D2's anchor is a measurement that can pay for an edge, D3's anchor is a process outcome, D4's anchor is the ground.

### 1.3 Partition or union

The naive reading is a partition: one error type, one bias. That is wrong. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A missing edge, a hidden node mediating two observed nodes, a spurious edge and a truncated system boundary are four overlapping conditions. A single lever, for instance "add the most probable missing links", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :56). So the census keeps four loops and does not average them.

### 1.4 Order by dependency (Fig 3)

1. **Perception.** Is anything at the suspicious edge returning a residual at any resolution? Fig 6 :34: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."
2. **Vocabulary.** Do we have a term for false negative, false positive and hidden-mediated edge, or only the word "missing"? Fig 3 :7: *"it has terms for what things afford: what can be moved, opened, joined, blocked."*
3. **Objective.** What counts as progress? Reliability of an edge, not coverage of edges. Fig 3 :11: *"what the search is for."*
4. **Planning.** Imputation, new observation, or import from a frame with a different closure.
5. **Learn and carry.** Which inferred edge settled, with provenance and date, so the next run need not pay again.

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The missing-edge question is usually treated as if it were step 4. It is step 1 for most systems.

---

## 2. Figure census

All quotes below were checked against `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. A strained reading is named and sent back to the census, never smoothed over.

| figure | bearing on this residual | preliminary verdict |
|---|---|---|
| Fig 1 | per-slot residual; global averages hide the live signal | governs D2/D3, no global bias number |
| Fig 2 | collapse 2, hidden shared source; independence; anchor must not update | governs D4, hidden common cause manufactures correlation |
| Fig 3 | dependency order; a link with no instrument | governs D2 ordering |
| Fig 4 | lossy transform, round trip gap | governs D1 to D3 bridge; R_T owed |
| Fig 5 | fifth gap kind (refuted); mechanism broken | governs false-positive refusal |
| Fig 6 | closure, depth versus genuine absence, inward/outward | governs D2, distinguishes gap from silence |
| Fig 7 | agreement compounds, evidence does not | governs D4, mass agreement cannot settle an edge |
| Fig 8 | idempotent closure, no proof of absence, union surplus, provenance | governs D2 and D4 |
| Fig 9 | unbundle a union; describe before looking; shape not a name | governs the whole census order |
| Fig 10 | channel decay; verifier non-access; bring a characterised residual | governs D4 outreach |
| Fig 11 | habitat enumeration; contact cascades; valence relative to residual | governs D3, hidden second/third-order effects |
| Fig 12 | the bond carries the missing half; isomer; two currencies | governs D1, the central finding |
| Fig 13 | network is a structure; cross-kind composition; unreachable as verdict | governs D1/D3 substrate and the honest stop |
| Operators table | subtraction is absence, negation is refusal; ¬ price open | governs false negative versus false positive |
| Symbols table | R is always a slice; what cannot be perceived yet is residual | governs the framing of R |

---

## 3. Findings

### F1 - The hidden connection is the bond that was not recorded (decisive, D1)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

Fig 12 :14: "the ingredients are recorded and the arrangement is not"; :15: "nothing downstream can tell them apart,"; :16: "and nothing signals that anything was lost".

Fig 12 :94: "The arrangement is the substance." Fig 12 :95: "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is" (continued :96 "carried entirely by the bond.").

A node list with some edges omitted is notationally indistinguishable from a correct, sparser network. Nothing in the record announces the omission. This is the mechanism by which the bias is invisible from inside: the observer holds a perfectly self-consistent graph, and the graph's own notation cannot signal that a bond is missing. This is *collapse 6, the flat formula*, the failure of notation named in Fig 12 :6.

The behavioral consequence follows from the isomer clause. Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Two networks with the same nodes and different edge sets are different substances whose behavior can differ decisively, and the difference is invisible in the ingredient-only formula the observer holds.

**Triangulation:** Fig 12 (bond, flat formula, isomer) plus the Symbols table definition of bond, plus the canonical figures README's rule that a reading which makes figures contradict one another has misidentified its domain. Two low-overlap routes within the framework. Marked `triangulated`. **Refuter:** show a representation that carries the arrangement with no bond term, such that two different edge sets over the same nodes give the same recorded structure and the same downstream behavior. That would break Fig 12 :5, :14-16 and :117 at once.

### F2 - The bias is per slot, not one global direction (D2/D3)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

Different network measures respond differently to the same missing data. The world literature agrees, at low overlap with the framework: Smith and Moody (Social Networks, 2013) found that betweenness and Bonacich centralization are sensitive to missing nodes while closeness and in-degree are robust, and that transitivity shows little bias even at high missingness. Kossinets (Social Networks, 2006) found clustering and assortativity overestimated under boundary truncation and underestimated under non-response. So there is no single "hidden connections make X bigger" law. There is a per-measure, per-process, per-system residual.

**Mode:** `specified`, ungrounded for the qualitative direction; the world direction is `grounded` within its own studies but is secondary here. **Triangulation:** Fig 1 :19/:22/:28 plus Fig 13 :35 "Space, time and energy are not three readings of one quantity. Neither are spectrum, gradient and network." and Fig 13 :38 "Which is Figure 2's condition applied to the set itself: independence is how little two frames draw on the same evidence,". Marked `triangulated`. **Refuter:** a demonstration that all network statistics have one identical bias function of missingness across all systems and processes.

### F3 - A hidden common cause manufactures both correlation and false corroboration (D4)

Fig 2 :6: "collapse 2: common cause"; :7: "(hidden shared source)". Fig 2 :18: "one evidence pool"; :19: "they never talk, and still agree"; :20: "so the agreement is the pool talking,"; :21: "not two frames confirming each other".

If two observed nodes are both driven by an unobserved node, they correlate without an observed edge. If two analysts infer the same edge from that correlation, they have one evidence pool, not two independent confirmations. Fig 2 :39: "Correlation has valence." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

The world corroborates at low overlap: Huang (J. Phys. A, 2015, arXiv:1506.00358) states that *"the correlation observed between two neurons may arise from a hidden common input outside the measured population"* and that the interaction may be *"mediated by a chain of unobserved neurons."* He also finds the inferred effective coupling grows with the coupling from hidden common inputs, which is a direction, not just a variance warning.

**Triangulation:** Fig 2 :6-8/:18-21/:39-40 plus Fig 8 :48-49 (overlap decides both agreement value and union surplus) plus Fig 7 :13 "agreement compounds, evidence does not". Marked `triangulated`. **Refuter:** show that two frames drawing on the same hidden source plus the same observed graph count as two independent witnesses for the hidden edge.

### F4 - The behavior error is often two or three steps out (D3)

Fig 11 :43: "The habitat is enumerated, never composed." Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :52-53, the DDT passage quoted in section 1.1. Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

A hidden edge that looks locally unimportant can change the reach of a cascade, because it changes which second-neighborhood is in contact with the residual. Fig 13 :24: "that entities relate, and influence travels"; Fig 13 :76: "Energy and a gradient compose a flow." A behavioral conclusion is a compound of a structure and a process, not a property of the adjacency matrix alone.

**Triangulation:** Fig 11 :43-44/:48/:52-53 plus Fig 13 :24/:76 plus Fig 1 :19 (per-slot). Marked `triangulated`. **Refuter:** exhibit a system where a hidden edge changes first-order structure estimates but provably cannot change any second-order process outcome on that substrate.

### F5 - Depth and genuine absence look identical from inside (D2)

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 8 :41: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

A candidate edge that no instrument has returned may be real but unobserved (depth, or unreachable at this budget), or genuinely absent. Searching the same closure harder does not discriminate them. Fig 13 :134: "Unreachable is a verdict here, not a silence,". So the honest output for "which edge is hidden here" is a declared `gap`, not a fabricated edge and not quiet omission.

The Formula step 7 split must be kept distinct: SEARCHED (is it in here and unfound?), INWARD (extend an instrument already returning something), OUTWARD (import from a frame whose closure differs). Formula step 7 also warns that importing against a budget limit adds an atom that was not needed.

**Triangulation:** Fig 6 :27 plus Fig 8 :32/:39/:41 plus Fig 13 :134/:136. Marked `triangulated`. **Refuter:** show an instrument that, without new observation or import, distinguishes a hidden-but-real edge from a genuinely absent one at the same closure and resolution.

### F6 - This is a union of four conditions, not one hard question (census level)

Fig 9 :54-58, quoted in section 1.3. Fig 13 :136: "It can say the question is not one question and must be split before it is searched again." Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

The four conditions (missing edge, hidden node, spurious edge, boundary truncation) have different instruments. A link-prediction score addresses the first, a latent-variable model the second, an edge-refusal test the third, a habitat enumeration the fourth. Treating them as one "incomplete network" problem is the bundling error, and a single imputation lever will clear single-condition cases and leave the intersections standing.

**Triangulation:** Fig 9 :54-58 plus Fig 13 :136 plus the four-domain census in section 1.2. Marked `triangulated`. **Refuter:** show that one instrument settles all four conditions without a provenanced import between closures.

### F7 - The reconstruction is a lossy round trip, priced in two currencies (D1 to D3)

Fig 4 :27: "The transform between scales loses information, and that is the point." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 4 :31: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was"

Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." A dense set of candidate missing edges is cheap to state and expensive to settle; a short list over a costly measurement is the opposite. Neither price predicts the other (Fig 12 :128-129).

The world supports the lossy reconstruction claim at low overlap: Guimerà and Sales-Pardo (PNAS, 2009) report that *"we are able to reliably identify both missing and spurious interactions in noisy network observations"* and that reconstructions give estimates of true network properties *"more accurate than those provided by the observations themselves."* This corroborates that the round trip can improve an estimate. It does not make the gap zero, and it is not a ground reading of this framework.

**Triangulation:** Fig 4 :27-32 plus Fig 12 :125-129 plus the symbols-table definition of `R_T`. Marked `triangulated` for the need to measure the gap, `single-source` for the specific claim that reconstruction improves every property (world only, and even there it fails below 10 percent error in the PNAS study). **Refuter:** show a reconstruction whose round trip gap is zero for all network properties at all error rates.

### F8 - Missing and spurious are different operators (D1, with a live strain)

An absent edge is the absence of an operand: Fig 12 :39 "A without B" under subtraction. A recorded edge that is actually wrong needs refusal. Operators table :73-74: *"− is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim. A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."*

Fig 5 :50: "AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it." Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so".

So the framework's own vocabulary distinguishes false negatives (subtraction, absence) from false positives (negation, refusal). The world classification agrees: Wang, Shi, McFarland and Leskovec (Social Networks, 2012) embed missing data as *"false negative nodes and edges"* inside a broader scheme including *"false positive nodes and edges"*.

**Live strain, named not hidden:** the price of negation is open in the Operators table (*"What a unary operator costs is open"*). The framework can require ¬ for edge refusal and still not price it. That is an open item in the operator set, not a defect in this derivation. Marked `single-source` for the operator distinction (Operators table) with world corroboration. **Refuter:** show a false-positive edge that can be refused using only the seven binary bonds and no unary operator, with the refusal priced inside the bond formula.

### F9 - Whether an edge was observed, derived or imported is part of the quantity (D4)

Fig 8 :50: "But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them," (continued :52 "and the surplus lives only where the closures differ.").

Two analysts can infer the same hidden edge, one by independently deriving it from dynamics and one by copying a prior from a review. The contents are identical; the evidentiary standing is not. The source ledger and the provenance column are the instrument that separates them, which is why the verification packet records exactly where each figure line came from.

**Triangulation:** Fig 8 :50-52 plus Fig 2 :31-32 plus Fig 7 :13. Marked `triangulated`. **Refuter:** treat two imported copies of the same prior as independent corroboration and show the verdict is unchanged.

### F10 - The instrument is improved from a worse instrument already returning something (D2)

Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access." Fig 6 :30: "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 3 :27 (quoted above). Fig 9 :27: "describe it before you go looking"; :28: "any frame you pick will seem to fit".

Inward for this question means sharpening an observation that is already returning something: link prediction scores, node dynamics, perturbation response. Outward means finding a frame whose closure already predicts the shape of the residual, for example a network tomography or hidden-node inference literature, and importing its method with a source gate and shadow test. Underivable and unreachable-at-budget issue different instructions (F5), so the two tracks are never read against each other.

**Mode:** `general` for the instrument rule; `specified` for its application here. **Refuter:** specify a sensor for an edge that has never registered at any resolution anywhere, and show it was built from a description alone rather than a worse instrument.

### F11 - Network is a structure; flow is a separate composition (D3, correction to first pass)

**Retraction kept visible.** My first pass treated "network" as a state-like thing whose bias could be read off the adjacency matrix directly. That was wrong. Fig 13 :23-24 lists network under **structures**: "that entities relate, and influence travels". Fig 13 :74: "Everything else is a composition across the two kinds, never within one." Fig 13 :75: "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." Fig 13 :76: "Energy and a gradient compose a flow."

So a hidden edge is a structural change, and the behavioral consequence is a **compound** of structure with a state and a spendable difference (energy and gradient), not a property of the edge set alone. This is re-census, not a softening: the first reading strained Fig 13 :23 into a state, so it governed the wrong quantity. After re-census, no strain.

**Refuter:** derive a flow, a spread or a synchronization outcome from an adjacency matrix alone with no state and no gradient, and show the framework must admit it.

### F12 - What survives, and what is a declared gap

| claim | mode | status from figures |
|---|---|---|
| A hidden connection is a missing bond; omission is invisible in an ingredient-only record | `specified` | triangulated (Fig 12, Symbols table) |
| The bias is per conclusion slot and per process, never one global number | `specified` | triangulated (Fig 1, Fig 13) |
| Hidden common sources manufacture correlation and can fake corroboration | `specified` | triangulated (Fig 2, Fig 8, Fig 7) |
| Second and third order contact effects are the usual place the behavior residual lives | `specified` | triangulated (Fig 11, Fig 13, Fig 1) |
| Depth versus absence is undecidable from inside the same closure | `general` | triangulated (Fig 6, Fig 8, Fig 13) |
| The observed to inferred round trip has a nonzero, measurable gap | `specified` | triangulated (Fig 4, Fig 12) |
| Which particular edge is hidden in a given system | `gap` | unreached and reported as a verdict (Fig 9 :32, Fig 13 :134, Fig 8 :39) |

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :137: "It can characterise what is missing in effect terms, which is the description that travels to a frame that may hold it." The framework can say what a hidden connection would have to look like and which instrument would find it. It cannot name the edge.

---

## 4. Pre-registered refuter

Written before the recommendation and before the conclusion, per the standing instruction that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A representation carries the bond arrangement with no bond term, so two different edge sets over the same nodes yield the same recorded structure and the same downstream behavior (breaks F1, Fig 12 :5, :14-16, :117).
2. All network measures show one identical bias function of missingness across all systems and processes (breaks F2, Fig 1 :19, :22, :28).
3. An instrument at the same closure and resolution distinguishes a hidden-but-real edge from a genuinely absent one without new observation or import (breaks F5, Fig 6 :27, Fig 8 :39).
4. Hidden nodes and hidden common causes are shown not to change inferred couplings or to change them only by adding variance, never direction (breaks F3 and the Huang corroboration).
5. The observed to reconstructed to observed round trip has zero gap for every property at every error rate (breaks F7, Fig 4 :30).
6. False positives are shown to be refusable using only the seven binary bonds with the refusal priced inside the bond formula (breaks F8 and the Operators table distinction).

If any fires, the corresponding finding is withdrawn, not softened, and the log is updated. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with F1: the missing bond is the half nothing was recording, and nothing signals the loss. That is the mechanism, and it is figure-derived rather than literature-derived.
2. Keep the four conditions unbundled (F6). Do not report one bias score. Report per measure, per process, per system, with the instrument named for each.
3. Distinguish SEARCHED, INWARD and OUTWARD explicitly (F5, F10). Do not import a prior to cover a budget shortfall.
4. Measure `R_T` on any reconstruction and report it as a gap, not as accuracy (F7). State that bits and actions are two currencies (Fig 12 :125-127).
5. Record edge provenance as part of the estimate (F9): observed, convergently derived, or imported.
6. Declare the specific hidden edge a `gap` (F12). Figure 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator (the shape, the refuter and the instrument question), not a made-up edge list.

---

## 6. Canonical usage check, retraction and confirmation log

The canonical figures README was read after the first pass. It says the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary"*, that *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and that the framework reports *"what a missing thing would have to look like (a shape, not a name)"* then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* Also: *"Indiscernibility is not identity."*

| earlier reading | status after the canonical check |
|---|---|
| "network" treated as a state (F11 first pass) | **Retracted and re-censused.** Network is a structure (Fig 13 :23-24); flow is a composition with a state and a gradient (Fig 13 :76). Different quantity, so no contradiction between Fig 13 and the behavioral claims. |
| "one global bias direction" (F2 first pass) | **Retracted.** Fig 1 :19/:22/:28 governs per-slot residuals, so verdicts are per measure and never averaged. |
| "hidden connections" treated as one condition | **Corrected to a union** (Fig 9 :54-58). Four overlapping conditions with different instruments. |
| "shape, not a name" read as a ban on naming anything | **Narrowed.** The README's phrase governs a *missing* primitive. Selecting a held bond or naming a candidate edge is a binding that needs provenance or an instrument, not an invented primitive. Naming a specific edge from a projection alone remains the metamerism error the source essay forbids. |
| F5 "depth versus absence" | **Canonically confirmed.** Unreachable is a verdict, not silence (Fig 13 :134); a search that finds nothing proves nothing (Fig 8 :39). |
| F1 "invisible omission" | **Canonically confirmed.** Indiscernibility is not identity: two isomorphic-looking records can be different substances. |
| Apparent conflict Fig 8 :48-49 versus :50-51 | **Not strained after re-census.** :48-49 concerns shared evidence making agreement worthless; :50-51 concerns independently reached atoms. Different quantities, same independence measure read twice. |
| F7 claim that reconstruction always improves estimates | **Narrowed.** The PNAS study itself finds that below about 10 percent observation error the observed network is sometimes better. This is a `single-source` world result, not a figure line, and does not change the figure verdict that `R_T` must be measured. |

### Seven-question recursive derivation, summary

1. **Is anything owed?** Yes. A record and a full system differ (R), indexed per conclusion slot (Fig 1 :19).
2. **What kind of thing is the missing item?** A bond, not an ingredient (Fig 12 :5, :46).
3. **Why is it invisible?** The arrangement is not recorded and nothing signals the loss (Fig 12 :14-16).
4. **Can more search inside the record find it?** Not necessarily: closure is idempotent and absence is not provable (Fig 8 :32, :39).
5. **Which direction:** inward or outward? Both, as opposed tracks (Fig 6 :29-31); inward assumes something already returning a residual (Fig 6 :34).
6. **Does an import close it?** Only with a source gate and shadow test, debited against independence (Fig 6 :23-24, Fig 8 :51-52). Importing against a budget limit adds an unneeded atom.
7. **What is the honest stop?** A shape and an instrument question; the specific edge stays a `gap` (Fig 9 :32, Fig 13 :134).

---

## 7. Strains, re-census and confirmation

- **Strain S1, resolved:** Fig 13 :23 read as a state. Re-census assigns network to structures and flow to a state-structure-state composition. Kept visible in F11.
- **Strain S2, live and named:** negation is required to refuse a recorded edge, but its price is open in the Operators table. No re-census dissolves this; the figure is silent on the price, not wrong about the operator. Carried into `06_isomers_and_order.md` and `08_expert_verification_packet.md`.
- **Strain S3, resolved:** "one missing network" as a single object. Re-census to a union of four conditions under Fig 9 :54-58.
- **Strain S4, resolved:** Fig 8 :50-51 read as contradicting Fig 8 :48-49. Re-census: convergent derivation versus adopted import, and shared evidence versus independent evidence, are two readings of one independence quantity.
- **After re-census: one live strain (S2), named, none hidden.**
