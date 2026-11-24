# Figure-grounded audit: what distinguishes information from mere correlation

**Mode of this document: `general` on the shape, `specified` on the per-domain verdicts, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No measurement in this run settles which definition of information is correct. See the boundary and simulated-derivation warning in `README.md`.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`, the eight essays, and the world sources listed in `10_source_ledger.csv`. Every figure quote below was checked character by character against `03-FIGURES_TEXT.md` before use. Quotes from essays and web sources are attributed as such and are never presented as figure lines.

---

## 0. The residual, stated in effect terms

The question arrives as a definition request. It has to be restated as an effect before any figure line is chosen, otherwise any theory of information will seem to fit.

**Observed effect.** Two readings, X and Y, are found to move together. The same bare co-variation is consistent with at least four different arrangements: X produces Y; Y produces X; a hidden common cause Z produces both; or the co-variation is an accident of sampling. "Correlation" names the co-variation and stops there. "Information" is the word we use when the co-variation does work: it discriminates one state from another, it supports an intervention, it identifies a source, or it changes a prediction at a ground.

**Residual R.** Given a co-variation, what additional structure must be present before the co-variation is correctly called information rather than merely correlation?

- **Option A:** none. Co-variation is sufficient. Information is mutual information, covariance, or the shared entropy, full stop.
- **Option B:** correlation is necessary but not sufficient. Information requires a typed arrangement (which relation holds), a ground that can refuse the reading, and a per-slot signal that is not averaged away.

**What each leads to.** A dissolves the distinction the question asks about, and it is contradicted by cases where the same correlations coexist with different arrangements (F3, F9). B yields a checkable shape, per-domain verdicts, and refuters that can actually fire. The answer will be domain-indexed: in some domains correlation is disqualified, in one domain it is the product. Averaging those verdicts would destroy the result.

**Binding the sought-for shape as an ordinary term** (formula step "Direction"): an answer to this question would look like a predicate `Info(X,Y)` such that (i) it is false in at least one case where `Corr(X,Y)` is true, (ii) it is checkable against a ground by an instrument, and (iii) it separates the four arrangements above. This is written down before the run so it can accrue a residual like any other term, rather than remaining an invisible preference that steers the reading.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry and scale

- **Arity.** Correlation is at least binary: it relates two variables, or a set of variables through a joint distribution. Information can be unary as well. Negation, the eighth operator, *"acts on a single operand"* (Operators table amendment), and a refusal carries information about what is false without joining two operands. Any definition that makes information essentially binary has already excluded the refuter.
- **Symmetry.** Correlation, in the covariance or mutual-information form, is symmetric under exchange of its operands. The bond set is not symmetric throughout. Three bonds are symmetric (`+`, `∥`, `≡`) and four are ordered (`→`, `⇒`, `−`, `⋛`); the Operators table puts the test as *"swap the operands. Does the meaning change? No."* for conjunction and *"swap them. Does it become a different thing? Yes."* for sequence. A symmetric scalar cannot carry an ordering. This is the first structural difference and it is decisive for causal readings.
- **Scale.** Correlation is reported as one aggregate number over whole variables. The framework's residual is *"indexed by object slot, not aggregated"* (Fig 1 :19). Information here is per-slot and recursive: a settled molecule becomes an atom at the next level (Fig 12 :104). A scale mismatch is therefore built into the naive identification of the two.

### 1.2 One line per domain: actors, currency, anchor

No domain is admitted without a nameable anchor. Where there is no anchor, there is not yet a domain.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1 Composition / structure** | variables or atoms; the seven bonds and negation; the arrangement (molecule) | bits, the priced description: an arrangement costs what it could have been | the code and the MDL settlement; a bond that carries nothing is a free bond | partition (which bond holds, which arrangement is this) |
| **D2 Verification / evidence** | frames, instruments, evidence pools | residuals and agreement | the ground, which is pinned and does not update: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* (Fig 2 :29) | union vs partition (is the co-variation two witnesses or one pool) |
| **D3 Perception / source discrimination** | object slots, readings, the hidden source, the instrument | per-slot live mass `R⁺_s` | the ground behind the reading, reached only through a discriminating instrument | partition (which source produced this reading) |
| **D4 Semantic / convention** | agents, a language community, shared meanings | conventions and shared meaning | the community's convention, legitimate when *"the question is constitutively about it"* (Fig 2 :36) | partition (is the agreement about the world or about a shared meaning) |

D1 and D3 are about what a reading carries. D2 and D4 are about what agreement permits you to conclude. These are different questions with different anchors; that is the partition the answer must respect.

### 1.3 Partition or union

The four domains form a **union of overlapping conditions**, not a list of separate ones and not one hard problem.

- D1 and D3 overlap on the reading: the bond and the source are both properties of the arrangement, not of the marginals. Where they overlap, the compound is "which typed bond connects which source to which reading".
- D2 and D4 overlap on agreement: the same numerical co-variation can be evidence about the world (D2) or glue for a shared meaning (D4). Fig 2 :39 to :41 gives correlation opposite valences in those two cases. Fig 9 :54 warns: *"when the split lands on a union rather than a partition, unbundle before you search again."*
- The union is not a single lever. A refuter in D1 (showing the bond is recoverable from the operands) would not clear D2 (shared-pool agreement). Each domain gets its own loop and its own verdict. Fig 9: *"a case in two conditions is not a harder case of either."*

### 1.4 Order by dependency (Fig 3)

1. **Perception.** Can the system tell the slots apart, and tell a current reading from a previous one? Without this, no residual can be indexed (Fig 1 :19).
2. **Vocabulary.** Are there terms for what the co-variation affords: bond type, direction, source? This is the middle link. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Information theory has an excellent instrument for the amount of co-variation (entropy, mutual information) and no standard instrument inside the definition for bond type or source. **This is where the chain for this question breaks.** Effort spent above the break, for example arguing about axioms of information, arrives at a step that cannot use it.
3. **Objective.** Can the system say what would count as progress here, in its own terms? Operators table: *"a goal is a comparison, which is why a vocabulary without it cannot state one."* The objective is a threshold between "co-variation with a bond and a ground" and "co-variation without one".
4. **Planning.** Design an intervention that would separate the four arrangements. In causal-modelling terms this is the do-operator; in the figures it is an instrument improved from a worse one already returning something (Fig 6 :32 to :34).
5. **Learn and carry.** Settle the term against the ground and carry the method up, never the recording (Fig 4 :22 to :25).

---

## 2. Figure census (bearing and verdict before findings)

| figure | bearing on this question | preliminary verdict |
|---|---|---|
| **1 The Agent** | residual indexed per slot; frame-internal quantities disqualified | an aggregate correlation drops the live signal |
| **2 The Ground** | correlation has valence; common cause; anchor must not update | the answer is conditional on which anchor is in play |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | the break is at vocabulary/instrument for bond type and source |
| **4 The Membrane** | only methods cross up, never recordings | send the discriminator, not a definition |
| **5 Mint Pipeline** | three guards as a product; MDL bargain | a definition of information is a candidate term, not a free name |
| **6 Closure / Reachability** | import is the only operator that moves the wall | importing "information" from another field needs a source gate |
| **7 Room Chain** | agreement is variation, not a verdict | polling more people on a definition does not settle it |
| **8 Union Surplus** | independence is one quantity read twice | same-reading different-source is the surplus, not the correlation |
| **9 Leave / Arrive** | describe the effect before choosing a frame; union must be unbundled | describe the residual before picking Shannon, causal, or semantic theory |
| **10 Ground Maintainer** | verifier non-access; bring a characterised residual | asking a reader to trust the definition spends their independence |
| **11 The Habitat** | capability is agent-and-habitat; enumerate, never compose | the instrument, not the definition, is what changes contact |
| **12 The Bond** | bond carries the information the operands do not; isomers; priced bond | the core of the answer |
| **13 Minimum Viable Set** | overlapping frames would be fewer members with six names | independence is a condition of a term carrying information |
| **Operators table** | seven bonds, one unary operator; flat formula records ingredients not arrangement | correlation is the flat case; information is the typed case |
| **Symbols table** | `R` is the aim; ground is the anchor; `R_T` is the round trip | the question is a residual, not a vocabulary dispute |

---

## 3. Findings F1 to F12

Each finding quotes verbatim before it concludes, and carries its own refuter.

### F1 — The bond carries the information that the operands do not

Fig 12 :5:

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :46 and :47:

> **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**
> **"recipe that names only its ingredients has recorded half of itself."**

A correlation reports that two operands are present together. It is the flat conjunction case. The Operators table :16 says flat formula is *"the only bond in a flat chain can express, so every term today is a sequence whether or not it should be"*; the point is that a flat record cannot say which bond holds. The typed relation is not a function of the operands, so no amount of information about the operands alone determines it.

**Therefore, in D1:** information is the arrangement, correlation is the ingredient list. The same two variables with a sequence bond and with a common-cause bond are different substances that share the same marginals.

**Refuter for F1:** exhibit an invariant that maps the joint distribution of the operands plus the operand set to a unique bond type in every case, such that no instrument is needed to decide which bond holds. If that invariant exists and is settled, the bond adds no information and F1 falls. Status: `triangulated` (Fig 12 plus Operators table plus the "information channel" analysis in the SEP semantic entry, a low-overlap world source).

### F2 — The free bond is the flat case, and it carries nothing

Fig 12 :101:

> **"A bond that costs nothing is a bond that carries nothing, which is the flat case."**

This prices F1. A co-occurrence that could not have been otherwise (one bond type, no choice recorded) costs zero and therefore carries zero. Mutual information is positive exactly when the co-occurrence is not already forced by the marginals, but the figure's price is on the *choice of relation*, not on the surprise of an outcome. These are different currencies: bits price the description, actions price finding out whether it holds (Fig 12 :125 to :127). Collapsing them into one number is the named error.

**Refuter for F2:** show a case where a bond available in one and only one form still carries information under the framework's own cost rule, or show that description bits and test actions are the same currency. Status: `single-source` for the framework price, corroborated by the Williams and Beer partial-information decomposition (world source, information theory) which separates redundancy from synergy rather than reporting one scalar.

### F3 — Same reading, different source

Fig 12 :117:

> **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Operators table :68 and Fig 8 :50:

> **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."**

Two systems can present the same co-variation while differing in which bond holds and what produced the reading. The correlation is identical; the information is not. The world-corroborating case is the metamerism example in *The Hard Problem is About Source*: one instrument reads green for a single green light, for yellow plus blue, for RGB, for CMYK, and for schemes not yet discovered. The reading *"cannot comment on the source."* An instrument that cannot distinguish those cases demonstrates its own inadequacy; the spectrometer, not an argument, resolved it.

**Therefore, in D3:** a correlation does not determine the source. Information about the source requires a discriminating instrument. This is not a claim that the source is unknowable; it is the figure's distinction between unreached and unreachable (Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*).

**Refuter for F3:** produce a complete reading-to-source map that is invariant across all possible producing schemes, or demonstrate a closed set of producing schemes. Status: `triangulated` (Fig 12 :117 and the source-discrimination essay; different fields, low overlap).

### F4 — Correlation has two valences, decided by the anchor

Fig 2 :39 to :41:

> **"Correlation has valence."**
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"**

This is the figure line that governs the question most directly, and it refuses to give one answer. The same word, correlation, is disqualifying in D2 and productive in D4. The discriminator is the anchor:

- In D2 the anchor is the ground, which *"does not update"* (Fig 2 :33). Two frames reading the same report are one frame under two names; their agreement is the evidence pool talking. Fig 2 :18 to :21: *"so the agreement is the pool talking, not two frames confirming each other."*
- In D4 the anchor is a shared meaning, and the question is constitutively about that meaning (Fig 2 :36). There is no independent ground to triangulate against, so agreement is not a corrupted verdict, it is the thing being made.

**Refuter for F4:** show a case where agreement between frames with identical evidence is a valid verdict about the world, or show that shared-meaning agreement is corrupt even when the question is about the meaning. Status: `triangulated` (Fig 2 plus Fig 8 plus the SEP causal-modelling entry on probabilistic dependence and Reichenbach screening off, a low-overlap world source).

### F5 — Independence is the quantity read twice

Fig 8 :47 and :48:

> **"Independence is one quantity read twice."**
> **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."**

This gives the operational test behind F4. Information from agreement requires low overlap at the evidence level, not low overlap in vocabulary. Two disciplines using different words for one dataset have high overlap; two instruments pointed at one thing have low overlap (Fig 2 :31 to :32). Fig 13 :38 to :39 applies the same rule to the composition set: *"Six members that overlapped would be fewer members wearing six names."*

**Refuter for F5:** demonstrate that two frames with fully shared evidence can supply a second independent witness, or that overlap is not the parameter controlling both verdict validity and union surplus. Status: `triangulated` (Fig 8 and Fig 2 and Fig 13).

### F6 — The residual is indexed by slot; correlation aggregates it away

Fig 1 :19 and :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

A single correlation coefficient over whole variables is an aggregate. It can be near zero while one object slot carries a live residual, or high while the live signal sits in a subpopulation the average erased. Fig 1 :20 to :21 makes the legal state explicit: *"a global residual near zero with one live slot is a legal state and not an inert one."* The framework's support guard is evaluated per slot, and *"Aggregating across slots is how a live signal disappears into an average."*

**Refuter for F6:** prove that information is always recoverable losslessly from a global aggregate, for every slot partition and every scale. Status: `single-source` for the figure rule, corroborated by the partial-information-decomposition source, which exists precisely because one aggregate cannot hold the redundancy and synergy structure.

### F7 — The chain breaks at vocabulary, not at perception or planning

Fig 3 :27:

> **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

The source question sits inside "1. What information is", which is a vocabulary question. The framework's own warning is that this middle link attracts the least attention because it has neither the obvious failures of perception nor the obvious tests of planning (Fig 3 :24 to :27). A definition that measures the amount of co-variation but has no instrument for bond type or source is a chain that stops at link 2. Optimising the amount estimate further lands above the break.

**Refuter for F7:** exhibit a standard instrument, used in the field, that returns bond type or source as part of the definition of information rather than as a separate causal or semantic step. If one exists, the break has been mislocated. Status: `single-source` framework diagnosis with a world corroboration from the Shannon-pluralism quote in the SEP semantic entry.

### F8 — A definition is a candidate term, not a free name

`THE_FORMULA.md` step 3:

> SUPPORT `|R⁺_s| > 0 for some s` before the search
> REACHABILITY `φ ∈ closure(Γ)` during
> NOVELTY `φ ∉ atoms(Γ)` after
> *"gated by a product; any factor at zero forces inertness"*

Fig 5 :42 to :44:

> **"The acceptance test is a bargain, not a threshold."**

A proposed predicate `Info(X,Y)` owes support (something failed to resolve), reachability (it composes from what is held), novelty (it is not already covariance under another name), and settlement (the ground pays). Naming the correlation "information" fails novelty; it is already in the library. Inventing a seventh kind of information without import fails reachability. The honest form is a candidate term with a residual and a refuter.

**Refuter for F8:** show that the identification is novel relative to atoms already held and that a ground settles it without an instrument. Status: `single-source` framework rule.

### F9 — Same correlations, different higher-order structure

Fig 12 :94 to :96:

> **"The arrangement is the substance."**
> **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**

Williams and Beer, *Nonnegative Decomposition of Multivariate Information* (arXiv:1004.2515, 2010), is a low-overlap information-theory source that reaches the same structural point in a different field: interaction information can be negative because it *"confounds redundancy and synergy"*, and their partial information decomposition *"exhaustively decompose[s] the Shannon information in a multivariate system"* into atoms. Two systems can have the same pairwise mutual informations and different redundancy/synergy profiles. This corroborates F1 and F3 without sharing the framework's evidence pool.

**Refuter for F9:** show that the partial information atoms are a reparametrisation of one scalar with no behavioural consequence. Status: `triangulated` (Fig 12 plus an independent information-theory paper).

### F10 — Where the question is about meaning, correlation is the product

Fig 2 :36 to :38:

> **"An anchor is legitimate when the question is constitutively about it."**

Floridi's strongly semantic information, reported in the SEP semantic entry, adds truthfulness to well-formed and meaningful data: information is factive, and the veridicality thesis is the demarcation from purely quantitative concepts. The SEP entry reports Shannon's own *"informational pluralism"*: *"It is hardly to be expected that a single concept of information would satisfactorily account for the numerous possible applications of the general field."*

**Therefore, in D4:** the word "information" does different work. A correlation between a signal and a shared convention is not a defect to be corrected by an instrument; it is the convention operating. Fig 2 :43 warns that *"a convention that decides an outcome has stopped being one"*, which is the failure mode when a convention from D4 is smuggled into a D2 verdict.

**Refuter for F10:** show a single concept of information that satisfies the composition, verification, perception and convention domains at once without losing a distinction the field actually uses. Status: `triangulated` (Fig 2 plus SEP semantic and SEP information, two sources outside the framework).

### F11 — Import cannot be used to smuggle a definition

Fig 6 :23:

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 8 :50 to :52:

> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**

Bringing in Shannon's definition, Pearl's intervention, or Floridi's truth condition is an import. It needs a source gate (provenance) and a shadow test (it explains a gap the frame could not close). Fig 9 :26: *"R's own predicates name the habitat that holds φ*"*, and Fig 9 :27 to :28: *"describe it before you go looking, or any frame you pick will seem to fit."* Since this is a foundational question, the temptation to pick a favourite definition first is exactly the apophenia the figure names.

**Refuter for F11:** demonstrate that every candidate frame was selected from the residual's predicates alone, with the selection record dated before the reading, and that low overlap holds. Status: `triangulated` (Fig 6, Fig 8, Fig 9).

### F12 — The verdict is not obtainable by polling

Fig 7 :35 and Fig 2 :42:

> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
> **"Buy independence in proportion to the cost of being wrong."**

A definition dispute is not settled by counting how many people favour one definition. Adding agreeable readers raises the vocabulary and not the anchor. What buys progress is selection between low-overlap frames, each ranged against the same residual separately (Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*). This is why the contact file lists venues, not a list of likely believers.

**Refuter for F12:** show a case where majority agreement among a pool selected for the same evidence changed a ground reading. Status: `triangulated` (Fig 7 and Fig 2).

---

## 4. Strain tests and re-census

A figure that needs forcing governs another quantity. Three apparent strains were checked, not smoothed.

1. **Fig 2 :40 (correlation disqualifying) versus Fig 2 :41 (correlation efficient).** Both are in the same figure, so a careless reading sees a contradiction. Re-census: they govern different anchors and different question types. D2 asks about the world, anchor is the ground; D4 asks about a shared meaning, anchor is the convention. Once unbundled, both stand. This is the Fig 9 :54 union rule applied to the figure's own text. No strain remains.
2. **Fig 12 :101 (free bond carries nothing) versus the fact that mutual information of independent variables is zero.** These agree on the number but not on the object being priced. The figure prices the choice of relation; mutual information prices the reduction in uncertainty. Held as two readings in two currencies (Fig 12 :125 to :127), no strain. Treating them as one quantity is the error, not a strain to be resolved.
3. **Fig 1 :19 (residual indexed per slot) versus a joint distribution over all variables, which is standard in information theory.** Re-census: the joint distribution is an object in D1; the per-slot indexing is a rule about where a live residual is visible in D3. A joint distribution can be defined over slots without being aggregated into one scalar; the figure forbids the aggregation, not the joint. Different objects, no strain.

**After re-census: zero live strains.** One open item is recorded rather than hidden: the framework's operator set is silent on whether a unary operator's cost is an atom slot, nothing, or the choice of what to negate (Operators table amendment), and this question turns on negation because refutation is part of what information does.

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach. A falsifier written before the run is a design instrument, not only an honesty device.

The shape claim of this solution is refuted if any of the following holds:

1. **R1, composition.** A mapping is exhibited from the operand set and all pairwise correlations to a unique typed bond and source in every case, validated against the ground, such that no additional instrument is required. This breaks F1, F3 and F9.
2. **R2, verification.** Two frames drawing on the identical evidence pool are shown to provide independent corroboration for a verdict about the world, or a shared-meaning convention is shown to be corrupt when the question is constitutively about the meaning. This breaks F4 and F5.
3. **R3, perception.** Per-slot information is proven recoverable without loss from a single global aggregate, for every slot partition and scale. This breaks F6.
4. **R4, partition.** A single definition of information is shown to cover the composition, verification, source-discrimination and convention domains without discarding a distinction the field actually uses. This breaks the domain census itself.

If any fires, the corresponding domain verdict is withdrawn and the synthesis in `07` and `09` is rewritten. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Do not answer the question with one definition. Answer it by domain. The framework's own rule is that a case in two conditions is not a harder case of either; four conditions are four loops.
2. Lead with the residual: same co-variation, different arrangement, what closes the gap. Then give F1 and F4, the two figure lines that govern the answer.
3. Put the pre-registered refuter in front of any theory link. Fig 10 :52: *"Bring a characterised residual, never the source."*
4. Treat imported definitions (Shannon, Pearl, Floridi, Williams and Beer) as witnesses with provenance, never as the authority. The figures decide; the world corroborates.
5. Use public submission venues in information theory research (`03_public_contact_points.csv`), one to one. Do not rank recipients by likely agreement.
6. Record the round trip gap `R_T` between the verbatim figures and any one-sentence summary of them. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

---

## 7. Canonical usage check and retraction log

Two local documents were read after the first six sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says what a missing thing would have to look like, *"a shape, not a name"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. The figures are metalaws, so design and definition questions are answered by derivation, not by escalation to an authority.

| earlier reading | status after the canonical check |
|---|---|
| "information is the bond" (F1) | **Confirmed and narrowed.** The README's *"shape, not a name"* governs a missing primitive, not the typed relation between held operands. Fig 12 :5 and :46 are the figure's own account of where information lives in a composition. |
| "correlation is disqualified" (F4, first draft) | **Retracted as a universal claim.** It holds in D2 only. Fig 2 :41 makes correlation *"efficient for a convention"*. The corrected claim is anchor-conditional and is now F4/F10. |
| "the framework answers the question" | **Retracted.** The framework returns a shape and a partition, not a chosen definition of information. Naming Shannon or Floridi as *the* answer is a binding from a world frame, provenanced as such. |
| "same reading different source means the source is unknowable" | **Retracted.** Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The honest statement is unreached until a discriminator exists. The metamerism essay says the spectrometer, not an argument, resolved the colour case. |
| "one scalar can never carry information" | **Narrowed.** F2 and F6 refuse the *identification* of information with one aggregate. They do not deny that a scalar is useful inside a declared code. The claim is about what is lost, citing Fig 4 :31 to :32. |
| Apparent Fig 2 :40 versus :41 strain | **Not strained.** Re-census gives two anchors and two question types. Matches the README's re-census rule. |
| Apparent Fig 12 :101 versus mutual information strain | **Not strained.** Two currencies, bits for description and actions for testing (Fig 12 :125 to :127). |

---

## 8. Verdict of the audit

The question has no single-domain answer. In the composition and perception domains, information is the typed, priced arrangement and the source-discriminating reading; correlation is the flat co-occurrence that leaves both undetermined. In the verification domain, correlation among frames that share an evidence pool is disqualifying for a verdict, and information from agreement requires low-overlap frames ranged against an unmoving anchor. In the semantic and convention domain, correlation is not a defect but the product, because the question there is constitutively about shared meaning.

The shape is `general` and survives the canonical check. The four domain verdicts are `specified` and are kept separate. Nothing is `grounded`. The strongest figure-grounded line is Fig 2 :39, *"Correlation has valence,"* because it is the line that refuses the false unity of the question rather than answering one side of it. Strains after re-census: none live, one open item on unary operator cost recorded in §4. Refuters R1 to R4 are written before the conclusion and are unchanged by the findings.
