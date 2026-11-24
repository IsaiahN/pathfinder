# Figure-grounded audit: INF-0062, the best formal account of learning under sparse, noisy, uneven data

**Mode of this document: `specified`, with `general` structural constraints. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23) says LLM output can *"simulate an approximate answer/output with the formula found in the architecture post"* but that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is checked for internal consistency against the figures only. It cannot settle the question it reports on. No learning system was run and no dataset was measured in this session.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and were opened 2026-11-23.

---

## 0. The residual, in effect terms

The question asks for "the best formal account of learning when data are sparse, noisy, and unevenly informative." Stated as an effect, not a name: we need an account that still tells us where to look, and what to admit, when (a) few observations arrive, (b) observations are corrupted, and (c) different observations carry very different amounts of information. The decision is among candidate accounts, each of which leads somewhere different.

| option | what it does with R | what it leads to |
|---|---|---|
| A: minimize one global loss over the pooled data | aggregates residuals into a single number | sparse and uneven data let a live slot disappear into the average; the account reports success where it has not looked |
| B: Bayesian updating over a hypothesis class with a prior | carries a weighting between inherited prior and private history; converges only under conditions on the prior and the space | with sparse data the prior dominates and the account cannot say whether this is knowledge or lock-in; *"hard convictions are insensitive to counter-evidence"* (Wikipedia, Bayesian inference, opened 2026-11-23) |
| C: per-slot residual ledger plus a description-length admission bargain | keeps R indexed by slot, admits a term only if it pays | says "unreached" where no slot registers, and keeps the expensive slots visible; this is the shape the figures license |

This is not a menu to be averaged. Fig 9 :54-57: *"when the split lands on a union rather than a partition, unbundle before you search again."* The three options are overlapping conditions of one question, so the honest first move is to split rather than declare a winner (Fig 9 :4-5: disagreements that do not shrink with effort are several well-formed questions, not one hard one).

**Direction bound as an ordinary term.** The sought-for shape is written down now, before the run: *an account that keeps residuals per slot, admits terms by a cost bargain, holds bits and actions apart, reports unreached honestly, and is settled by the ground rather than by agreement.* Binding it makes it refusable by the same test as anything else (Fig 5 :65-66; Formula, "Direction").

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: at least two conditions, sparse and noisy and unevenly informative, so a **union compound**, not one homogeneous failure (Fig 9 :57: *"a case in two conditions is not a harder case of either"*). Symmetry: not symmetric. Uneven informativeness means the operands are not interchangeable, and swapping a data-rich slot with a data-poor slot changes the account. Scale: one loop at the level of a single slot, a second at the level of the library and what may be minted, and a third at the level of the learner in its habitat.

**One line per domain. Actors, currency, anchor.**

- **D1, the inference mechanism.** Actors: object slots, a prediction, an observation, a residual per slot, candidate terms. Currency: residuals and description length. Anchor: the ground through what pays. Nameable? yes, a slot with positive residual mass.
- **D2, the data and ground relation.** Actors: observations, instruments, independent frames. Currency: independence and settlement. Anchor: a measurement or counter that does not move when a frame pushes on it. Nameable? yes, the anchor of Fig 2 :29.
- **D3, the learner in its habitat.** Actors: the learner, the data source, conditions, relations, the seat that maintains contact. Currency: contact, not accuracy. Anchor: the ground, which decides; the habitat, which only supplies actors. Nameable? yes, the habitat enumerated from contact (Fig 11 :44).
- **D4, the cost accounting.** Actors: descriptions and actions. Currency: bits and actions, in different units. Anchor: the budget, which decides how much of the space is reached. Nameable? yes, the two readings of Fig 12 :125-126.

**Partition or union.** D1 to D4 are a **union**, not a partition. They overlap at R: the mechanism consumes data, the ground settles it, the habitat supplies it, and the budget bounds it. Each overlap is a compound with its own loop, so verdicts are kept separate and never averaged.

**Order by dependency (Fig 3).** Perception first (can the system register a slot at all), then vocabulary (does it have terms for what a slot affords), then objective (can it say what counts as progress in its own terms), then planning, then learn-and-carry: *"name what worked, verify it, and carry it to the next problem"* (Fig 3 :15). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* A data-starved slot is a problem at the perception link, and no amount of optimizer tuning above the break reaches it. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | per-slot residual, support evaluated per slot, ground the only metric | governs D1; no ground reading here |
| 2 The Ground | anchor does not update, independence, correlation valence | governs D2; agreement disqualified |
| 3 Dependency Chain | ordered links, reading below the break is a reading of nothing | governs the order above |
| 4 The Membrane | lossy transform, round trip gap | governs how the formula may be used |
| 5 Mint Pipeline | bargain, three guards, MDL named outright | governs D1 admission |
| 6 Closure and Reachability | import moves the wall, instruments improved from worse ones, depth versus absence | governs the unreached verdict |
| 7 Room Chain | selection between rooms, agreement compounds and evidence does not | governs multi-frame checks |
| 8 Union Surplus | low overlap, residual first, search that finds nothing proves nothing | governs the union reading and D2 |
| 9 Leave, Arrive, Search | describe R first, filters versus witnesses | governs the census method |
| 10 Ground Maintainer | ground does not decay, channel does, verifier non-access | governs the check arrangement |
| 11 The Habitat | capability is agent and habitat, enumerate, introduce never subtract | governs D3 |
| 12 The Bond | two currencies, bits and actions, not additive | governs D4 |
| 13 Minimum Viable Set | closed set, unbounded arrangements, shape not name | governs the refusal to pick a winner |
| Operators and Symbols tables | `R` is the aim and always a slice; `w` is the learnable weighting | supports D1 and D2 |

---

## 3. Findings

### F1 - A single aggregate loss throws away the only signal (governs D1)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

Under sparsity and uneven informativeness this is decisive against option A. If one slot carries a large residual and the rest carry near zero, a pooled loss reports a small number and the system looks elsewhere. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."* The global number is not the state of the world; the per-slot ledger is.

**Refuter:** demonstrate an account that minimizes a single pooled loss and still identifies which slot is live, on data where the live slot's contribution to the pooled number is smaller than the noise in the others. If that account works, F1 is false.

**Mode:** `general` for the structural claim, `specified` for its application to sparse and uneven data.

### F2 - The one named formal principle is the description-length bargain (governs D1)

Fig 5 :42: **"The acceptance test is a bargain, not a threshold."**
Fig 5 :43: **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."**
Fig 5 :45: **"This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."**

The figures do not rank PAC against Bayesian against MDL. They do one thing that looks like a ranking: Fig 5 names MDL as the acceptance test for minting a term. So the most that can be said figure-groundedly is that an account which admits structure only when it shortens the description plus the remaining confusion is the one the framework incorporates. This is a `specified` claim about the framework, not a `grounded` claim that MDL is best in the world.

The world source opened this session agrees in effect: *"any regularity in a given set of data can be used to compress the data, i.e. to describe it using fewer symbols than needed to describe the data literally. (Grünwald, 2004)"* (Wikipedia, Minimum description length, accessed 2026-11-23). One witness, not two, because the figure predates and does not depend on that page.

**Refuter:** show a term admitted by the framework whose statement cost plus leftover residual exceeds the original residual, with no other compensating condition. That breaks the bargain.

### F3 - Support is per slot, so sparsity is legal and silence is inert (governs D1)

Formula step 3: *"SUPPORT |R⁺_s| > 0 for some s before the search"*, and *"gated by a product; any factor at zero forces inertness."*
Fig 5 :33: **"The three guards are a product, not a checklist."**
Fig 5 :41: **"Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."**
Fig 1 :20 (prefix): **"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state"**
Fig 5 :21: **"the gap has real mass somewhere"**

"Some s", not "all s" and not "the average s". Sparse data is therefore not a defect provided at least one slot carries positive mass. Noisiness matters because noise can manufacture small positive mass everywhere, so the support guard must be paired with settlement (F6). Total absence of mass is not a failure of the learner; it is an inert state, and the correct report is that nothing is owed.

**Refuter:** exhibit a mint that the framework licenses in a state where every slot has zero positive residual mass. That sets SUPPORT to zero and breaks the product.

### F4 - Bits and actions are two currencies and must not be summed (governs D4)

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**
Fig 12 :130 (prefix): **"Summing them into one figure is the error this names, not the fix for it."**

This is the figure-grounded answer to the "cost and consequences" part of the question. The value-of-information literature, opened this session, defines *"Value of information (VOI or VoI) is the amount a decision maker would be willing to pay for information prior to making a decision"* (Wikipedia, Value of information). That is an action price expressed in one monetary scalar. The figures forbid summing it with the bit price: *"A price in bits and a price in actions are two readings, held apart."* (Fig 12 :130). An account that collapses both into one score will *"propose arrangements it cannot afford to test"* (Fig 12 :128).

**Refuter:** produce a single scalar that prices both description length and the actions needed to settle a term without information loss on either axis. If one exists, Fig 12's non-additivity claim is false.

**Mode:** `general`. It is a structural claim about the units, not a measured fact about any learner.

### F5 - "Unreached" is the correct verdict for most data-poor slots (governs D1 and D2)

Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."**
Fig 6 :51 (prefix): **"Figure 8 separates underivable-in-principle from unreachable-at-this-budget."**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

With sparse data the common state is that a term is already in the closure and was not found. The remedy is more search, not a new primitive. The world source on sample complexity makes the same structural point from the other side: *"The No Free Lunch Theorem ... proves that, in general, the strong sample complexity is infinite"* (Wikipedia, Sample complexity, opened 2026-11-23), while *"if we are only interested in a particular class of target functions ... then the sample complexity is finite, and it depends linearly on the VC dimension."* A restriction of the hypothesis class is the import that moves the wall; more data at an unrestricted class is search at the same reach.

**Refuter:** show a term that no amount of search inside the current closure reaches, with no import available, and that nonetheless settles against the ground. That would make genuine absence observable from inside, which Fig 8 :39 denies.

### F6 - The ground settles; agreement never does (governs D2)

Fig 2 :29 (prefix): **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**
Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**
Fig 10 :24: **"the ground does not decay, the channel does"**

The question asks for the "best" account. "Best" cannot be established by counting adherents. It is established by what pays against a ground, and the independence bought is proportional to the cost of being wrong. Because agreement about the world from a shared evidence pool is one witness wearing many names, the three open-world sources that agree with the figures (MDL, sample complexity, active learning) are corroboration of low weight where they share the learning-theory pool, and somewhat stronger where they come from decision theory.

**Refuter:** exhibit a case where two frames drawing on one evidence pool settle a question about the world, with no anchor separate from them. Under Fig 2 that is panel 1 or panel 2, not a verdict.

### F7 - Capability belongs to the learner and its habitat together (governs D3)

Fig 11 :39: **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**
Fig 11 :40 (suffix): **"An improvement that does not change contact changes nothing, however much it improves."**
Fig 11 :43: **"The habitat is enumerated, never composed."**
Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

Sparse and uneven data is a property of the habitat's contact with R, not a defect located inside the learner. This is why active learning, opened this session, is relevant but not sufficient: *"there is a risk that the algorithm is overwhelmed by uninformative examples"* (Wikipedia, Active learning). Choosing which points to label is an introduction into the habitat (Fig 11 :61: introduction is available, exclusion is not), and it changes contact. A synthetic benchmark that declares its own sparsity proves wiring, not capability.

**Refuter:** an agent-only change that moves the ground and improves capability with contact held fixed. Fig 11's own standing note says this would refute the capability claim.

### F8 - Strain and re-census: compression is disqualified as a verdict but licensed as a price

There is a real apparent contradiction to work through rather than smooth over.

Fig 1 :24-27 says *"They are frame-internal. A frame cannot score itself with a quantity it also produces,"* and the same passage lists *"coverage, and compression achieved"* among the quantities that do not count. Fig 5 :45 makes description length the acceptance test for minting. If both governed the same quantity, the framework would contradict itself.

Re-census: they govern different quantities. Fig 1 disqualifies compression as a **ground metric**, a way for a frame to report its own success. Fig 5 uses description length as an **internal admission price**, a question of whether adding a term is worth it. Fig 9 :60 separates the two registers: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** Compression is a filter for what to try; the ground is the witness for whether it worked. Matches the canonical re-census rule in the figures README: a reading that makes figures contradict each other has misidentified its domain.

No strain remains after this re-census. It is recorded here so the correction is visible.

### F9 - What survives, with modes attached

| claim | mode | figure |
|---|---|---|
| Residuals must be kept per slot, never averaged | `general` structural, `specified` for this question | Fig 1 :19, :22, :28 |
| A term is admitted only if statement cost plus leftover costs less than the original residual | `general` for the framework, `specified` for a learner | Fig 5 :42-45 |
| Support needs positive mass in some slot, not in all | `general` | Fig 1 :20, Formula step 3 |
| Bits and actions are non-additive prices | `general` | Fig 12 :125-130 |
| Unreached at budget and underivable in principle are different facts | `general` | Fig 6 :27, :51; Fig 8 :39 |
| The ground, not agreement, settles which account is best | `general` | Fig 2 :29, :40, :45 |
| Capability is agent and habitat | `general` | Fig 11 :39-40 |
| MDL is the formal principle the figures name | `specified` about the framework | Fig 5 :45 |
| Any one named account is "the best" in the world | **refused** | Fig 13 :115, Fig 9 :32 |

---

## 4. Pre-registered refuter

Written before the recommendation and verdict. Per the framework's own discipline, a falsifier written before the run is a design instrument. The shape claim stands only if none of the following fires:

1. **Per-slot claim.** An account that minimizes one pooled loss is demonstrated to preserve the live slot on data where that slot's contribution is below the noise in the others. Breaks Fig 1 :19 and :22.
2. **Bargain claim.** A term is admitted with `cost(term) + left(R, term) >= cost(R)` and no compensating condition, and it improves ground prediction. Breaks Fig 5 :42-43.
3. **Two-currency claim.** One scalar prices both description length and the actions needed to settle a term without loss on either axis. Breaks Fig 12 :125-130.
4. **Unreached claim.** Genuine absence of a term is established from inside a frame with no import available. Breaks Fig 8 :39.
5. **Ground claim.** Two frames on one evidence pool, with no separate anchor, settle a question about the world. Breaks Fig 2 :40.
6. **Habitat claim.** An agent-only improvement changes contact and capability with the habitat held fixed. Breaks Fig 11 :40.

If any fires, the corresponding finding is withdrawn and the shape is re-censused from the residual line. No part of this audit is `grounded` until one of these tests is actually run against a real learner.

---

## 5. Recommendation

1. Do not answer "MDL wins." Answer with the shape and the refusers: per-slot residuals, a description-length bargain with three guards, two currencies, an honest unreached verdict, and ground settlement. Mode: `specified`.
2. Use PAC and sample complexity as the **budget literature**, not the verdict literature. They price how many examples are needed; they do not settle what counts as learning (Fig 9 :60).
3. Use Bayesian updating as a compatible mechanism for the weighting between inherited prior and private history (Symbols table: *"w is learnable from the outcomes of past weightings"*), but flag the lock-in case explicitly, because the figures require a refusal operator and an account with only accumulation cannot carry one.
4. Use active learning as habitat work: choosing which points to label changes contact. Keep its queries out of the evidence pool that later grades the learner (Fig 10 :42).
5. Split the union before searching again. Sparse, noisy, and uneven are three conditions; a single lever clears the region where only one binds and leaves the intersections standing (Fig 9 :55-57).

---

## 6. Canonical usage check and retraction log

Two local sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary."* The limit is that the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest,"* returning *"a shape, not a name."* Also: *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the three guards, the five residual kinds, steps 5 and 7, and the Direction discipline.

| earlier reading | status after the canonical check |
|---|---|
| "the best formal account" must name a winner | **Refused.** The README says the framework returns a shape, not a name; Fig 9 :32 says *"you get a kind of thing, never the answer itself."* |
| F8 looked like a Fig 1 versus Fig 5 contradiction | **Dissolved by re-census.** Compression is disqualified as a ground metric and licensed as an internal price. Fig 9 :60 separates the registers. |
| "MDL is the best account" | **Narrowed.** It is the one formal principle the figures name (Fig 5 :45). Calling it best in the world would be a `general`-mode verdict with no ground reading. |
| Sparse data means the learner is broken | **Retracted.** Fig 1 :20 makes a near-zero global residual with one live slot a legal state, and Fig 5 :41 says a system minting nothing may have nothing wrong with its minting. |
| World sources agree, so the verdict is corroborated | **Narrowed.** MDL, sample complexity and active learning share the learning-theory pool with each other; decision theory is lower overlap. Agreement from a pool is one witness (Fig 2 :40). |
| Eight essays were used as authorities | **Corrected.** Only three essays were opened this session and only those three are quoted in `05_what_shape_means.md` and the ledger. The other five are not cited. |

---

## 7. Verdict per domain

- **D1, inference mechanism:** triangulated across Fig 1 (per-slot residual) and Fig 5 (bargain and guards). Low overlap between the agent/slot figure and the mint pipeline. Verdict: keep per-slot residuals and the MDL bargain; `specified`, ungrounded.
- **D2, data and ground:** triangulated across Fig 2 (anchor, independence) and Fig 8 (underivable versus unreachable, search proves nothing). Verdict: the ground settles; data-poor slots are unreached until a ground or an import arrives; `general`.
- **D3, learner in habitat:** single-source (Fig 11). Verdict: capability is agent-and-habitat, and choosing which data to label is an introduction that changes contact; `general`.
- **D4, cost accounting:** single-source (Fig 12). Verdict: bits and actions are held apart; no single scalar is licensed; `general`.
- **Overall:** the shape is triangulated across D1 and D2; D3 and D4 are single-source and are reported as such. No domain is a `gap`, because each has a nameable anchor. The refusal to name a single winning theory is not a gap, it is the framework's stated limit.
