# Figure-grounded audit: what information do large learning systems encode in their parameters?

**Mode of this document: `general` on the structural shape, `specified` on the per-domain separations, `gap` on the literal inventory. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Canonical local framework files: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `THE_FORMULA.md`, the seat map. World sources opened 2026-11-22 and 2026-11-23 and recorded in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

We hold a reading, the parameter vector of a large learning system, and we ask what source produced it and what it contains. Four candidate answers are on the table:

| candidate | what it says the parameters are | what would have to be true |
|---|---|---|
| A. A compressed copy of the corpus | a recording of training examples | the transform from corpus to weights is close to lossless on the content that matters |
| B. A model of the world | a generator that recovers the data-generating process | the training signal carries enough of the source to reconstruct it |
| C. Surface statistical associations | a bag of correlations useful for prediction | generalization is explained by the distribution alone |
| D. A geometric trace of human output | a lossy projection of traces left by human thought | text carries context and subtext but almost no pretext |

These are not a partition. They overlap. A and D can both be true of the same weights. B and C can both be true at different levels of description. The question as posed asks for one inventory, so it is already a bundled question. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

**What an answer would look like, bound as an ordinary term (Direction discipline).** The figures warn that a frame searching for an answer of a given shape holds that shape as a preference, not a term, so nothing in the mechanism can check it. Fig 5 :62-63: a frame holds the sought shape *"as a PREFERENCE rather than as a term"*, and *"nothing here can see it"*. The remedy is to bind it: define "encoded information" as *the part of the parameters' arrangement that would have to change to change a specific ground-visible behaviour, together with a provenance record of where that arrangement came from*. That definition is now refusable by the same test as everything else. It is deliberately causal and provenance-bearing, because a purely observational reading cannot separate sources (F2).

**Effect statement.** If the parameters encoded a recoverable copy of one source, then an instrument that reads them should name that source without consulting the ground, and two systems with the same reading should behave the same. If they encode a lossy arrangement whose source is undecidable from the contents, then no reading alone will settle the question, and an intervention plus a provenance record is owed. The derivation below decides which of these the figures govern.

---

## 1. Residual shape: arity, symmetry, scale

- **Arity: at least four candidates, so a union.** The residual takes several arguments (corpus, world, distribution, human trace) and asks which is present. Fig 9 :6 separates the question into three: *"the verdict: is φ* in here at all?"*, :7 *"the lookup: which frame holds it?"*, :8 *"the narrowing: which one is it?"*. The question as asked tries to do a lookup and a narrowing before a verdict. That is the wrong order: Fig 9 :27-28, *"describe it before you go looking, or any frame you pick will seem to fit"*.
- **Symmetry: the source-to-parameters map is many-to-one.** Multiple distinct sources yield the same reading. Fig 8 :50: *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."* Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*. The map is symmetric in the sources under exchange, so the reading cannot discriminate them. This is the decisive structural property, and it is why a content-only answer fails.
- **Scale: individual weights are low-level slots; "information encoded" is a high-level arrangement.** The question jumps a scale boundary. Fig 4 :27: *"The transform between scales loses information, and that is the point."* Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* So a claim about encoded information that is made at the weight level and promoted to a claim about what the system knows has crossed a lossy membrane and needs a round trip (Fig 4 :30).

---

## 2. Domain census (before choosing any figure line)

One line per domain with actors, currency and anchor. A domain with no nameable anchor is not yet a domain.

| domain | actors | currency | anchor | partition / union | dependency |
|---|---|---|---|---|---|
| **D1. The parameter frame (the library Γ)** | individual weights, feature directions, superposition geometries, MLP modules | bits, description length, mutual information | **no internal anchor.** The contents are frame-internal. Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* | part of the union | first: a reading must exist before it can be interpreted |
| **D2. The corpus and objective frame (external source)** | training examples, labels, human-authored text, the loss | information content, the compression/prediction tradeoff | **provenance and shadow test.** Fig 6 :9-11 names *"nature · corpus · peer frame"* as external sources; Fig 6 :12-13 gives *"source gate: provenance"* and *"shadow test: explains a gap"*. | part of the union | second: the corpus is imported into the frame |
| **D3. The ground / deployment frame** | the data-generating process, evaluation set, deployment distribution, the board that pays | settlement: what pays | **the ground**, which does not update on what the model thinks. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | the second condition of the union | third: settlement comes after import |
| **D4. The verification / interpretability frame** | researchers, probes, benchmarks, causal-tracing and editing tools | agreement and residual | **the ground, never agreement.** Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* | an overlay on the other three | last: checks come after a claim exists |

**Question type: union, not partition.** D1 and D2 overlap (the weights are the trace of the corpus), D2 and D3 overlap (the corpus is a sample of the ground), and D4 reads all three. One lever cannot clear the intersections. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

**Order by dependency (Fig 3).** Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Perception first (we can read weights). Vocabulary second (we need terms for what a reading affords: feature directions, bonds, superposition). Objective third (say what would count as progress: a change in ground behaviour under intervention). Planning and carrying last. The chain usually breaks between perception and objective: Fig 3 :27, *"A link with no instrument is not a link that works. It is a link nobody has looked at."* In this field perception is strong (we can read every weight) and the objective link is weak (what would count as a settled answer to "what is encoded"?), so effort lands above the break: bigger probes, more benchmarks, without a ground-linked criterion. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

**Anchor test applied to each candidate answer.** Candidate A's anchor would be a lossless inverse from weights to corpus, which does not exist at this scale (Fig 4 :27, lossy transform). Candidate B's anchor would be a measurement of the data-generating process recovered from text, which the RSI essay says is combinatorially impossible, while the Platonic Representation Hypothesis says a *statistical* representation converges. That apparent conflict is handled in F8, not by flipping a verdict. Candidate C's anchor would be a purely distributional explanation, which Zhang et al. 2016/2021 show is insufficient, since networks fit random labels perfectly. Candidate D's anchor is a discriminator of source, which Fig 8 :51 says lives in the record, not the contents. Only D3 supplies a non-updating anchor.

---

## 3. Figure census (quoted before concluding)

| figure | bearing on this question | verdict it governs |
|---|---|---|
| Fig 1 | per-slot residual; frame-internal quantities disqualified; ground is the only metric | information is per slot; "compression achieved" cannot score a model |
| Fig 2 | anchor must not update; independence; correlation valence | an internal metric is not an anchor; probes sharing a model are one witness |
| Fig 3 | dependency order; link with no instrument | the objective link is the break, so build the intervention first |
| Fig 4 | methods cross up, recordings do not; lossy transform; round trip | a weight reading is a description of one occasion; measure `R_T` |
| Fig 5 | MDL bargain; three guards; a preference is invisible | compression is a bargain, not a verdict; bind the sought shape |
| Fig 6 | corpus as external source; import with provenance and shadow test; wall moves only on import | the corpus is an import; it adds no atom to the world |
| Fig 7 | agreement compounds, evidence does not; no last room | agreement among probes is not corroboration |
| Fig 8 | convergent derivation and adopted import look identical; a search finding nothing is not proof of absence | contents cannot settle source; the gap is a verdict |
| Fig 9 | verdict / lookup / narrowing; union unbundling; filters not witnesses | the question is a union; a benchmark score is a filter |
| Fig 10 | ground does not decay, channel does; verifier non-access; bring a characterised residual | benchmarks saturate; an internal reader cannot verify itself |
| Fig 11 | capability is agent-and-habitat; an improvement that does not change contact changes nothing | "what it encodes" is a property of model-and-deployment, not weights alone |
| Fig 12 | the bond carries the missing half; per-slot arrangements; two currencies | arrangements, not ingredients; bits and actions do not add |
| Fig 13 | set closed / arrangements not; unreachable is a verdict | the inventory is a `gap`, reported as unreachable, not silence |
| Operators / Symbols | Γ, closure(Γ), R, `R_T`, the ground | notation for the census and the round trip |

Strained readings are named in section 8, not smoothed over.

---

## 4. Findings F1 to F9

### F1 - The question is a union, so there is no single inventory (`general`, decisive)

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

The four candidates of section 0 overlap. Asking "what information, singular" forces a partition onto a union. The separable questions are: what is present (D1), where it came from (D2), whether it pays (D3), and who can check (D4). Verdicts are kept per domain and never averaged into one statement such as "the model encodes a world model of reliability r".

- **Mode:** `general` on the union structure.
- **Status:** triangulated across Fig 9 :54-57 and Fig 1 :19 (the residual is per slot), two figures with low overlap (search topology versus agent percept).
- **Refuter:** show that the four candidates are a genuine partition, that is, that exactly one can be present in any set of parameters and the others are strictly absent. No figure line supports this, and the corpus/world/deployment overlap makes it unlikely, but it would dissolve the union verdict.

### F2 - The contents do not determine the source (`specified`, decisive for the "what it actually encodes" phrasing)

Fig 8 :51: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**. Fig 8 :50: **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."** Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."**

World corroboration, *The Hard Problem is About Source* (Isaiah N, 2026): *"If several paths create the same behavior, then behavior is a projection with lossy information."* The essay's spectrometer example is the same move: the reading says green, *"it cannot comment on the source"*. The parameters are a reading. They do not carry a label saying which source produced them.

This is why "the weights encode a compressed copy of the corpus" and "the weights encode a world model" cannot be decided by inspecting the weights. Both could produce the same geometry. Fig 8 :52 records where the surplus lives: *"the surplus lives only where the closures differ"*, which is a fact about provenance, not contents.

- **Mode:** `specified`.
- **Status:** triangulated across Fig 8 :50-52 and Fig 4 :25 (union surplus versus membrane recording, low overlap). The essay corroborates but shares the framework author's evidence pool, so it is not a third independent witness.
- **Refuter:** an instrument that reads the source uniquely off the parameters without any ground contact or provenance record. If such a spectrometer for weights exists and passes a blind test across independently trained systems, the verdict falls.

### F3 - "Compression achieved" is frame-internal and cannot score the system (`general`)

Fig 1 :24-27 lists what does not count: **"coverage, and compression achieved"** and **"predicates minted, and credibility accrued"**, then **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** Fig 1 :23: **"The ground enters as the only metric."**

Fig 5 :43 gives the legitimate use of compression: **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."** That is the MDL bargain (Fig 5 :45 cites Rissanen 1978). It prices a description; it does not settle what the description is about.

World corroboration, Tishby and Zaslavsky 2015 (Information Bottleneck, IEEE ITW): a representation should be *"a minimal sufficient statistics of X with respect Y"*, found by *"relevant compression of the input layer with respect to the output layer"*. Crucially, the paper states that *"the IB curve is a property of the joint distribution p(X,Y), however this distribution is obviously unknown in actual machine learning tasks"*. So the IB optimum is a normative ideal defined relative to a distribution the learner does not hold. That matches the figure: the bargain is internal to the frame's code, and the ground is the only metric.

- **Mode:** `general` on the structural rule; the specific IB reading is `specified` and world-sourced.
- **Status:** single-source on the figure side (Fig 1) for the disqualification, triangulated with Fig 5 for the legitimate MDL use (different quantities, same document set, so still one framework pool).
- **Refuter:** demonstrate an internal compression measure that settles a contested question about what a model encodes without any ground reference. Until one does, any reported compression ratio is a budget filter, not a witness (Fig 9 :60).

### F4 - Parameters encode arrangements, not ingredients (`specified`)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."** Fig 12 :94: **"The arrangement is the substance."** Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."**

Applied to D1: the atoms are weights and feature directions; the information is in the typed arrangement across them. A literal list of parameter values is the flat formula of Fig 12 :14-16, where **"the ingredients are recorded and the arrangement is not"** and **"nothing signals that anything was lost"**.

World corroboration, Elhage et al. 2022 (Anthropic, *Toy Models of Superposition*): networks represent *"more features than they have neurons"* by superposition, and the field came to think of *"neural network representations as being composed of features which are represented as directions"*. If features are directions in a high-dimensional space rather than individual weight slots, then the ingredient list (the weights) is not the substance (the feature geometry and its bonds). This is genuine low-overlap corroboration from mechanistic interpretability.

- **Mode:** `specified`.
- **Status:** triangulated across Fig 12 :5/:46/:111 and Fig 4 :22 (methods cross up, recordings do not), low overlap between composition theory and the scale membrane.
- **Refuter:** show that a complete inventory of scalar weights, with no bond or arrangement information, fully predicts all ground-visible behaviour under interventions. That would make the bond term zero and collapse the claim to the flat formula.

### F5 - The encoded content is indexed per slot, not a global list (`general`)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

A global statement such as "the model encodes language" aggregates across feature slots and throws away the only signal that says which feature to probe and which to edit. The Symbols table defines the slot as *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*

World corroboration, Meng et al. 2022 (NeurIPS, *Locating and Editing Factual Associations in GPT*): factual associations are *"localized, directly-editable computations"*, found by causal intervention in *"mid-layer feed-forward modules"*. That is exactly a per-slot result: one fact, one location, one intervention. Conway et al. style whole-model scores would aggregate it away.

- **Mode:** `general` on the indexing rule; the localisation evidence is `specified` and model-specific.
- **Status:** single-source on the figure side (Fig 1 and Symbols, same framework pool). Kept separate from F4 so it is not averaged into a single "arrangements" verdict.
- **Refuter:** a single global scalar extracted from the parameters that fully predicts ground behaviour across all domains and slots. That would make per-slot indexing unnecessary.

### F6 - Settlement requires a contact-changing intervention, not more reading (`specified`)

Fig 2 :29 defines the anchor: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."** Fig 10 :52: **"Bring a characterised residual, never the source."**

World corroboration, Meng et al. 2022: the method is *"causal intervention"*, running the network twice and restoring *"selected internal activations to their clean value"*, then modifying *"feed-forward weights to update specific factual associations"*. This is a spectrometer for one slot: it changes contact and watches what pays. The ROME evaluation reports both specificity and generalization, which is precisely a ground test rather than a reading.

The same figure logic explains why a probe trained on activations is not an anchor. Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."** A probe that learns to decode a feature from the same activations that generated the claim has joined the frame.

- **Mode:** `specified` (the instrument is model- and task-specific).
- **Status:** triangulated across Fig 2 :29, Fig 10 :52 and Fig 11 :40 (anchor definition, verifier non-access, contact). The world source corroborates the mechanism shape, not the framework claim.
- **Refuter:** a purely internal measure of parameter content that settles a ground question without any intervention, provenance or external benchmark. If one works, the contact requirement is wrong.

### F7 - The literal inventory is a `gap`, reported as unreachable and not as silence (`general`, honest stop)

Fig 9 :32: **"you get a kind of thing, never the answer itself"**. Fig 13 :134: **"Unreachable is a verdict here, not a silence,"** and :135 **"It cannot say which primitive is missing, because naming it would mean already holding it."** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

No figure line enumerates what a given network encodes. The figures fix the shape: a lossy, per-slot arrangement of feature directions and bonds, imported through a corpus that is itself a projection, settled only by interventions. They do not return a list of contents. That is a `gap` of the shape-not-a-name kind, not underivable in principle and not a failure of the method.

It is important not to overstate the gap. The canonical README phrase is *"what a missing thing would have to look like (a shape, not a name)"*: it governs a primitive not held in Γ. Feature directions and bonds are already available terms (Fig 13 holds spectrum, gradient, network; Fig 12 holds the bonds). Naming a particular feature direction in a particular model is a **binding** with provenance, not the invention of a primitive. What is forbidden is presenting the binding as a figure-derived name. See `05_what_shape_means.md` section 5 for the correction.

- **Mode:** `general` on the limit; `gap` on the inventory.
- **Status:** triangulated across Fig 9 :32 and Fig 13 :134-135 (narrowing versus lineage and decidability, low overlap).
- **Refuter:** a figure line that names a specific parameter content, or a completed source-discriminating instrument that returns the inventory for an arbitrary model. Either would close the gap and the verdict would be withdrawn.

### F8 - Two world conflicts return to the census and are not allowed to flip a verdict

**Conflict 1: convergence versus non-reconstruction.** Huh et al. 2024 (*The Platonic Representation Hypothesis*, ICML, PMLR 235) report that *"representations in AI models, particularly deep networks, are converging"* toward *"a shared statistical model of reality"*. The RSI essay says *"This is why world models will not work. You cannot recreate our reality. It is combinatorically impossible. The best you could do is take traces of patterns."*

Re-census: the two claims have different objects. PRH measures kernels, that is, *"how they measure distance between datapoints"*, a property of representational geometry. The RSI claim concerns reconstructing the exact lineage of events that produced a world. Fig 13 :121: **"Different routes can arrive at the same substance."** Fig 8 :50: convergence to the same atom from separate frames is *"corroboration at maximum independence"*. So a shared statistical geometry and an unrecoverable source lineage are compatible. The conflict is dissolved, not adjudicated by authority. Verdict unchanged: parameters encode a convergent geometry, not a reconstructed source.

**Conflict 2: compression ideal versus memorization result.** Tishby and Zaslavsky 2015 present a normative optimum, *"relevant compression of the input layer with respect to the output layer"*. Zhang et al. 2016/2021 show empirically that *"Deep neural networks easily fit random labels"* and that *"The effective capacity of neural networks is sufficient for memorizing the entire data set"*, with regularization *"neither necessary nor by itself sufficient"*.

Re-census: different objects again. The IB result describes what an optimal representation would preserve under a joint distribution; Zhang describes what a finite-sample optimization actually produces with more parameters than points. Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."** Fig 5 :48: **"Its own output is never a measure of success."** Both can hold: the capacity to encode a sufficient statistic is not the same as the fact of having done so. Verdict unchanged: parameters encode what the objective and data pay for, not what they could encode. This is Fig 11 :39, *"capability is a property of agent-and-habitat, never of the agent alone"*.

- **Mode:** `specified` on both re-censuses.
- **Status:** each conflict uses genuinely low-overlap world sources (ML theory versus ML empiricism, representation geometry versus source lineage), so they are real corroborators of the union reading, not one pool talking.

### F9 - What actually survives, with modes attached

| claim | mode | figure line | status |
|---|---|---|---|
| The question is a union of source, content, settlement and checking | `general` | Fig 9 :54-57 | triangulated (F1) |
| The contents do not determine the source | `specified` | Fig 8 :50-52 | triangulated (F2) |
| Compression achieved cannot score the system; MDL is a bargain | `general` | Fig 1 :24-27, Fig 5 :43 | single-source on the figure side (F3) |
| The substance is the arrangement, not the ingredients | `specified` | Fig 12 :5, :46, :111 | triangulated (F4) |
| Content is per slot, never a global list | `general` | Fig 1 :19, :22 | single-source on the figure side (F5) |
| Settlement needs a contact-changing intervention | `specified` | Fig 2 :29, Fig 11 :40 | triangulated (F6) |
| The literal inventory is a `gap` | `general` | Fig 9 :32, Fig 13 :134 | triangulated (F7) |
| Convergence of geometry is compatible with loss of source lineage | `specified` | Fig 13 :121, Fig 8 :50 | triangulated with two low-overlap world sources (F8) |

---

## 5. Which of the three route questions to ask (formula step 7)

When no term in `closure(Γ)` closes R, the formula asks three distinct questions. Keeping them distinct matters here because the obvious move is to skip to the wrong one.

- **SEARCHED, asked first and cheapest: is it in here and unfound?** Fig 6 :49: **"more search at the same reach: is it in here and unfound? The closure does not change."** We already hold per-slot residuals, bonds, the corpus-as-import, and the ground. The failure is not that we have not read enough papers; it is that no term in this closure returns an inventory. Answer: searched, and the closure does not change with more probing.
- **INWARD: extend the instrument from one already returning something.** Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** The existing instrument is causal tracing plus model editing (Meng et al.) and sparse-feature extraction (Elhage et al.). It already returns something: a per-slot change in ground behaviour under intervention. Sharpening it can name more slots. It cannot recover the exact source lineage, because there is nothing at any resolution currently returning that lineage. Fig 6 :34: **"the search for a proto-instrument is a search for one that is already there."**
- **OUTWARD: import a frame whose closure predicts the shape.** The low-overlap frames here are animal behaviour and human cognition (Tolman's latent learning, Loftus's reconstructive memory) and information theory (Shannon, Rissanen via Fig 5 :45). The shape they corroborate is that acquisition and expression are different events and that a reading does not determine its source. What travels is the effect description, not the jargon: Fig 6 :30 **"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**

INWARD and OUTWARD are opposed and were not read against one another (Fig 6 :31). Underivable-in-principle and unreachable-at-this-budget are different facts: a perfect inventory is underivable from the figures (shape, not a name), while naming this or that feature in GPT-2 XL is unreachable at this budget without running the instrument. Importing a whole new primitive against a budget limit would add an atom that was not needed (Fig 8 :42-43).

---

## 6. Pre-registered refuter (written before the conclusion)

Per the seat rule, *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following fires:

1. **R1, source spectrometer.** An instrument reads the source of a parameter set uniquely from its contents, without provenance or any ground contact, and passes a blind test across independently trained systems. This breaks F2.
2. **R2, internal settlement.** A purely internal measure of parameter content settles a contested ground question without intervention or benchmark. This breaks F6 and the anchor rule of Fig 2 :29.
3. **R3, global collapse.** A single global scalar extracted from the parameters predicts ground behaviour across all feature slots and domains, so per-slot indexing is unnecessary. This breaks F5 and Fig 1 :19.
4. **R4, lossless recording.** The corpus-to-parameters transform is shown to be lossless on the content that matters, so a recording carried upward is not a description of one occasion. This breaks F2 and Fig 4 :25.
5. **R5, figure name.** A figure line names a specific parameter content, closing the gap of F7 without an instrument.
6. **R6, partition proof.** The four candidate sources are proven to be a partition rather than a union. This breaks F1.

Until one is run, no part of this may be labelled `grounded`. If one fires, the affected finding is withdrawn and the audit is re-censused from the residual line, not patched with a softer reading.

---

## 7. Recommendation

1. Answer at the shape level and refuse the inventory (F7). State mode on every claim.
2. Lead with the union (F1) and the source/contents distinction (F2). These are the parts that decide what the question can mean.
3. Treat compression ratios and benchmark scores as filters for the budget, never witnesses for the verdict (F3, Fig 9 :60).
4. Report encoded content per slot, with provenance, and require an intervention before calling anything settled (F5, F6).
5. Offer the instrument, not the conclusion. Fig 4 :23: **"upward: a method that can be reapplied. Never the recording of a particular success."**

---

## 8. Canonical usage check (figures README, WATSON 60 local copy, formula)

Two local canonical documents govern how the figures may be used and were read after the first sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the governing limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of what instruments distinguish and records the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws for design questions, so a design dispute is settled by derivation from the figures, not by escalation or authority.

### Strains and re-census

| strain | resolution | kept visible? |
|---|---|---|
| PRH convergence versus RSI "world models will not work" | Different objects: representational geometry versus exact source lineage. Fig 13 :121 and Fig 8 :50. | yes, F8 |
| IB optimal compression versus Zhang random-label memorization | Different objects: normative optimum under p(X,Y) versus finite-sample optimization. Fig 6 :27, Fig 5 :48. | yes, F8 |
| "Shape, not a name" applied to feature directions | Overstated in a first reading. The phrase governs missing primitives; a feature direction is a held atom, so naming one is a provenanced binding, not an invented primitive. | yes, F7 and `05` section 5 |
| Compression disqualified (Fig 1) versus compression as MDL bargain (Fig 5) | Different quantities: a self-score versus a price under a declared code. | yes, F3 |
| Fig 1 per-slot residual versus a whole-model "what it encodes" | Re-census: the whole-model phrase aggregates across slots and throws away the signal (Fig 1 :22). | yes, F5 |
| Fig 11 capability (agent-and-habitat) versus "parameters alone encode X" | Re-census: capability is a property of the deployment relation, so "what it encodes" is not a property of weights in isolation. | yes, F6 |

After re-census: **six strains recorded, none hidden, none requiring a change to the findings.** No figure line was forced.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "The model encodes a compressed copy of the world" as a verdict | **Retracted.** It is a `specified` shape at best. The framework returns a shape, not a name, and naming a source is a binding with provenance. |
| "Compression is irrelevant" (from Fig 1 :24-27) | **Narrowed, not retracted.** Compression achieved is disqualified as a self-score; compression as an MDL bargain (Fig 5 :43) is legitimate. Both claims are kept. |
| "Shape, not a name" bans naming features | **Retracted as applied to held atoms.** It governs a missing primitive. See F7 and `05` section 5. |
| "The parameters encode the training corpus" | **Retracted as a recording.** Text carries context and some subtext but almost no pretext (Decoding Tacit Knowledge), so what crosses is a trace; a recording carried upward looks like knowledge (Fig 4 :25). |
| "More probing will eventually reveal the inventory" | **Retracted as a route.** Fig 6 :49 names the searched case; more search at the same reach does not change the closure. |
| The union reading of F1 | **Canonically confirmed.** Fig 9 :54-57 and the README's re-census rule both govern unbundling before search. |
| The `gap` verdict of F7 | **Canonically confirmed.** The README states that *"Unreachable is a verdict here, not a silence"* (Fig 13 :134) and that the framework returns a kind of thing, not the answer. |

---

## 9. Updated verdict

The question as posed asks for a single inventory. The figures refuse that object and return a shape instead. The defensible residue is: the question is a union of source, content, settlement and checking; the contents of the parameters do not determine their source, so the record of where each arrangement came from is the whole issue; what is encoded is a lossy per-slot arrangement of feature directions and bonds rather than a list of scalar weights; compression achieved is a frame-internal score and a benchmark is a filter, neither a witness; and settlement requires a contact-changing intervention, of which causal tracing plus model editing is the current instance. The literal inventory is a `gap`, reported as unreachable rather than as silence. Mode: `general` on the shape, `specified` on the per-domain separations, `gap` on the inventory, not `grounded`. Six strains are named after re-census; none was smoothed over.
