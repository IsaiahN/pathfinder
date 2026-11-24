# Figure-grounded audit: when an unusual observation is a possible discovery

**Mode of this document: `general` on the structural shape, `specified` on the testable sub-claims. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, opened 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. ... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the decision rule it reports on. See `05_what_shape_means.md` §6.

**Sources for figure quotes.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extract with line numbers), read this session. Cited as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, and the seat guide were read at `FRAMEWORK/`. World sources are listed and opened in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms before any figure line is chosen

An observer holds a library Γ with predictions Γ(b,a) for object slots s. It receives observations o'. The live quantity is the residual R = |Γ(b,a) - o'| per slot (Formula step 1). An unusual observation is a slot where the positive part of the residual is nonzero: R⁺_s > 0, "something happened there the prediction missed" (Symbols table, R⁺_s). Nothing else about it is given yet.

The question asks for a promotion rule: when does R⁺_s owe a new term (a discovery), and when does it stay inside the current library (a fluctuation)?

**Options and what each leads to:**

| option | what it does | what it leads to | cost if wrong |
|---|---|---|---|
| A, mint φ | offers a term into Γ | the bargain cost(φ) + left(R,φ) < cost(R), three guards, then settlement by the ground | a wrong atom enters the library; Fig 6 :24 "A wrong atom costs more than starting from primitives." |
| B, no mint | keeps Γ, leaves R⁺_s live | extend perception, aim the probe at the new bin; more search inside the same closure | a real signal stays unfollowed; reach stays below what it could be |

**The sought-for shape is bound now, before the run** (Formula "Direction"; Fig 5 :65-66: "make the sought-for shape an ORDINARY TERM"). We write down what an answer would look like: a rule that reads R per slot, sorts it into more than two bins, prices a candidate against the confusion it removes, tests whether the residual persists and does not trend down, and defers the verdict to an independent ground while using thresholds only to allocate budget. Because it is bound as a term it can accrue a residual and be refused. The refuter in §4 is written before the conclusions.

---

## 1. Domain census (done before any figure line was selected)

### R by arity, symmetry and scale

- **Arity:** R is a vector indexed by slot, not a scalar. Fig 1 :19: "The residual is indexed by object slot, not aggregated." An anomaly is always an R⁺_s, a one-slot event. Any rule that begins by aggregating has already thrown away the address of the thing it is trying to decide about.
- **Symmetry:** the magnitude |Γ(b,a) - o'| is unsigned, but the live mass R⁺_s is one-sided (only positive departures count as "something to explain"). A fluctuation is additionally *exchangeable*: it could have appeared in any slot at any time and carries no address. A discovery is anchored to a specific slot and recurs there. Symmetry is therefore a diagnostic, not a mere property of the metric.
- **Scale:** the promotion decision is within-scale (steps 1 to 5: is there a new term at this level?). Whether the term becomes a law is cross-scale (step 6, promotion, with R_T as the error signal). Conflating the two is one of the failure modes below.

### One line per domain: actors, currency, anchor

A domain is admitted only if it has a nameable anchor. Where no anchor can be named, the frame is recorded as convention-making, not as a domain where a verdict can be grounded.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1, the observer's inference frame | slots s, belief b, action a, observation o', prediction Γ(b,a), residual R | residual R; price in bits | the ground (an instrument or dataset that can settle a slot) | partition of R into the figure's bins |
| D2, the significance frame | p-values, sigma levels, trials factors, priors, Bayes factors, null hypotheses | probability or evidence strength | none fully independent: the sampling distribution is produced by the model being tested (Fig 1 :27); this frame makes conventions, not verdicts | contributes the budget filter only |
| D3, the ground and experimental frame | independent instruments, datasets, replications, cross-checks | settled contact with the ground | the ground, which does not update (Fig 2 :33) | supplies the verdict |
| D4, the announcement frame | journals, reviewers, community, prestige | agreement, credibility | none that is nameable and independent; explicitly a convention-making frame | zero verdict weight |

D2 and D4 are kept in the census because they are where the question is usually answered in practice, and the figures say that answer is structurally disqualified. They are not dropped; they are assigned the right office.

### Partition or union

**Union, not partition.** The apparent binary "discovery or fluctuation" is a bundle of overlapping conditions: is there live mass (support), is it already in Γ (novelty), is it reachable by search, is it compressible (the bargain), does it persist, and is the channel trustworthy? Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either." The decision is a compound with its own loop. Finding F2 below develops this.

### Dependency order (Fig 3)

Perception (can we tell this slot from what was there before?) precedes vocabulary (do we have a bin for it?) precedes objective (what counts as progress here, the bargain?) precedes planning (aim the probe, gather more data) precedes learn and carry (name what worked, verify, carry). Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." The least instrumented link is the middle one, and it is exactly the promotion criterion: Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Within the search, SEARCHED precedes INWARD precedes OUTWARD (Formula step 7), and refusal precedes mint (Formula step 2).

---

## 2. Figure census: verbatim bearing lines before conclusion

Quotes are copied from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked character by character. A line that fits only under a strain is recorded as governing another quantity and sent back to the census (see §6).

| figure | bearing, verbatim where decisive | verdict for this question |
|---|---|---|
| Fig 1 | Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." | grounds F1 and F6; a global significance is not the per-slot decision |
| Fig 2 | Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | grounds F5; the verdict is the ground, not agreement |
| Fig 3 | Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." | orders the decision chain; the criterion is the un-instrumented middle link |
| Fig 5 | Fig 5 :10 "sort the gap into four kinds" Fig 5 :42 "The acceptance test is a bargain, not a threshold." Fig 5 :18 "seeks the gap that is large and compressible" | grounds F2, F3, F8; directly governs the promotion question |
| Fig 6 | Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | grounds F7; search before import |
| Fig 8 | Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 8 :39 "So a search that finds nothing is never a proof of absence." | bounds what more searching can do |
| Fig 9 | Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | grounds F2 and F5; separates the threshold from the verdict |
| Fig 10 | Fig 10 :24 "the ground does not decay, the channel does" Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." | grounds F9 and the outreach ordering |
| Symbols table | R is "It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read." R⁺_s is "The part of the residual on slot s that is positive: something happened there the prediction missed." | defines the live mass that is being sorted |
| Formula | step 2 routing bins; step 3 guards and bargain; step 5 "the ground settles it. Verified only by what pays. A gate is not the ground."; step 7 SEARCHED / INWARD / OUTWARD | supplies the procedure the findings elaborate |
| Fig 12 | Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | used in `06_isomers_and_order.md` for the fluctuation/discovery analogue, not decisive here |
| Fig 13 | Fig 13 :74 "Everything else is a composition across the two kinds, never within one." | no direct bearing after re-census; the six-term substrate is not what is being sorted. Recorded as not governing, not forced |

**Census result:** this question is not a `gap`. Fig 5, Fig 9, Fig 1, Fig 2 and the Formula step 2 routing table govern it directly with low overlap between them (a sorting table, a leave/arrive rule, a per-slot metric, an anchor rule). Verdict status: **triangulated** for the shape, **single-source** for the numerical form of the MDL bargain (Fig 5 plus `THE_FORMULA.md`, which share a source pool).

---

## 3. Findings

### F1 - Read the residual per slot, never as an aggregate (decisive, `general`, triangulated)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
Fig 1 :13: "a global R near zero with one live slot residual is a legal state"

Symbols table, R⁺_s: "The part of the residual on slot s that is positive: something happened there the prediction missed."

A good overall fit does not disqualify a single unusual slot. Conversely, a dramatic deviation found by scanning many slots is not automatically a discovery: the scan is exactly what must be recorded, because Fig 1 :27 says "They are frame-internal. A frame cannot score itself with a quantity it also produces." The significance computed from the same data that selected the slot is a frame-internal score.

- **Verdict (D1):** an anomaly is always an R⁺_s. Triangulated (Fig 1 and Symbols table, independent of the significance frame).
- **Refuter:** show a case where the correct promotion decision requires aggregating across slots, that is, where the address of the deviation carries no information and the average is the sufficient statistic. Then Fig 1 governs a different quantity and this finding is withdrawn.

### F2 - The discovery/fluctuation binary is a false partition (decisive, `general`, triangulated)

Fig 5 :10: "sort the gap into four kinds"
Fig 5 :11: "held: the model was right, nothing owed"
Fig 5 :12: "new: extend perception, aim the probe here"
Fig 5 :13: "mis-attached: refit what you have, do not invent"
Fig 5 :14: "mechanism broken: a new term is owed"
Fig 5 :50: "AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it."
Fig 5 :51: "The four kinds sort a gap by what is missing. None of them sorts a gap by what is wrong."

Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."
Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :57: "a case in two conditions is not a harder case of either."

The question as posed collapses five bins into two. That is a notation failure, not a hard question. A fluctuation may be *new* (extend perception), *mis-attached* (refit what you have), or the sign that a held term is *refuted* (Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so"). Only "mechanism broken" owes a mint. Treating all five as one binary makes the same lever clear the region where only one condition holds and leave the intersections standing (Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones.").

- **Verdict (D1, D3):** unbundle before deciding. The union has its own loop and its own ground. Triangulated (Fig 5 bin table and Fig 9 union rule, low overlap).
- **Refuter:** exhibit a closed, decidable two-way criterion that correctly sorts all five bins without loss, including the refuted bin, which by Fig 5 :56 requires a unary negation operator that the four missing-kind bins do not use. If such a criterion exists, the union finding is refuted.

### F3 - Compressibility, not magnitude, separates a discovery from a fluctuation (`specified`, triangulated)

Fig 5 :42: "The acceptance test is a bargain, not a threshold."
Fig 5 :44: "fails this, and so does a term that explains one occasion perfectly."
Fig 5 :18: "seeks the gap that is large and compressible"
Fig 5 :47: "So a system that starts with nothing can still be shaped, by seeking the gap that is large and compressible, which is the same quantity the acceptance test scores."

`THE_FORMULA.md` step 3: "accept iff cost(φ) + left(R,φ) < cost(R)" and "gated by a product; any factor at zero forces inertness".

A fluctuation can be enormous in a single slot and still fail, because it fits one occasion and compresses nothing. A discovery is a gap that is both large *and* compressible: stating the candidate term plus what remains unexplained must cost less than the confusion it removes. This is the same quantity the curiosity drive seeks, so the attractor and the acceptance test are consistent rather than opposed. A fixed sigma cut is not this test. It is a single number where a two-part bargain is required.

- **Verdict (D1):** the discriminator is the MDL bargain, stated in advance under a declared code. `specified` because a code and a dataset are needed to compute it; triangulated across Fig 5 and the Formula, with the caveat that they share an evidence pool (one framework source, not two independent witnesses).
- **Refuter:** a controlled benchmark (known injected signals versus null fluctuations) in which a candidate with lower cost-plus-leftover is *worse* at separating the two than a fixed threshold. That would break the bargain's discriminating role and this finding falls.

### F4 - A real residual persists and does not trend down (`specified`, single-source for the figure wording)

`THE_FORMULA.md` step 2: "They rank by a quantity already held: the residual that PERSISTS AND DOES NOT TREND DOWN. Same shrinking test the selector runs, opposite sign."
Fig 5 :59: "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"
Fig 5 :60: "already runs, read with the opposite sign."

The selector asks which residual is improving; this asks which one keeps being wrong and is not. Applied to an unusual observation: accumulate data and watch the per-slot residual. A fluctuation trends down toward the prior prediction as the sample grows; a signal that owes a term holds its mass. This is cheap, it is mechanical, and it avoids having to name the term before the evidence warrants one. It also applies to the refuted bin: the same persistent-and-flat residual can point at a held term that must be refused rather than at a new atom to mint (Fig 5 :53).

- **Verdict (D1, D3):** persistence is a necessary check before promotion. `specified`, and **single-source** in the figure text (Fig 5 amendment and the Formula derive from the same framework); the world sources corroborate the direction but come from a different pool.
- **Refuter:** a case where a residual trends down under accumulation yet a genuine discovery is being missed (for example, a signal whose effect is diluted by increasing sample heterogeneity), demonstrated with a declared stopping rule. Then persistence is not a reliable discriminator and the rule must be re-censused.

### F5 - Threshold is a filter; the ground is the verdict (`general`, triangulated)

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 5 :42: "The acceptance test is a bargain, not a threshold."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :33: "The anchor must not update."
Fig 2 :31: "Two people reading the same report are not two frames; two instruments pointed at the same thing are."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :45: "Frames range against the ground. They do not negotiate with it."
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

A significance level, a trials-corrected p-value or a Bayes factor is a *filter*: it decides how much follow-up budget to spend, how many independent instruments to point at the slot, and which cuts to keep ranked and reversible (Fig 9 :41: "so keep every cut ranked and reversible"). It is not the verdict. The verdict is the ground: an independent measurement from a frame with low overlap, which does not move when anyone agrees. This is why a 5-sigma result is not the end of the check: the LIGO detection paired the threshold with two detectors, two independent pipelines and background re-estimation (world source W5). Agreement inside one evidence pool is one witness wearing many names.

- **Verdict (D2, D3, D4):** thresholds and prestige are budget filters with zero verdict weight; the ground alone settles. Triangulated across Fig 9, Fig 2 and Fig 5 (different figures, low overlap), with the practical consequence that the announcement frame D4 is not a domain at all.
- **Refuter:** show a domain where a threshold, with no independent ground contact, correctly settles the promotion decision and where changing the threshold changes the truth of the claim. Such a domain would make the threshold an anchor and contradict Fig 2 :29-33.

### F6 - The search cannot score itself: multiplicity and pre-registration (`general`, triangulated)

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
Fig 5 :62: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."
Fig 5 :65: "make the sought-for shape an ORDINARY TERM"
Fig 5 :66: "residual like anything else. Then the preference is refusable by the same test as everything else. Committing a prediction before a run is this, already working."
Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

The anomaly is usually found by scanning many slots. The reported significance of the winner, computed after the scan and from the same data, is inflated for exactly the reason Fig 1 :27 names: the frame is scoring itself with a quantity it also produces. The look-elsewhere correction (world source W2) and the researcher-degrees-of-freedom result (W4) are world-level instances of this structural rule. The remedy in the framework is a discipline rather than a new operator: write the sought-for shape down as an ordinary term before the run, bind it, let it accrue a residual, and let the same test that refuses other terms refuse it. This is what the pre-registered refuter in §4 does.

- **Verdict (D2):** multiplicity and stopping rules must be declared before the scan; the post-hoc winner's p-value is frame-internal. Triangulated (Fig 1 :27 and Fig 5 direction amendment; low overlap between a metric figure and an operator amendment).
- **Refuter:** a formal argument that a frame can produce a quantity that is both its own selection statistic and an unbiased external measure of the same effect. Without such an argument, the frame-internal score stays disqualified.

### F7 - Search before import; do not mint an atom that more search would find (`general`, triangulated)

Formula step 7: SEARCHED ("is it in here and unfound? The closure does not change"), INWARD ("extend the instrument, from one already returning something"), OUTWARD ("IMPORT. Characterize R in effect terms, then find the frame whose closure predicts its shape").
Fig 6 :21: "MINT composes inside the closure and can never add an atom."
Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 6 :24: "A wrong atom costs more than starting from primitives."
Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."
Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 8 :40-42: "underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions. Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."

If the candidate explanation is already composable from what the field holds, the anomaly is a SEARCHED case: distribute the search and keep the searchers independent. Only when the residual is underivable from the current closure does an OUTWARD import become licensed, and then only with a source gate and a shadow test (Fig 6 :12-13: "source gate: provenance", "shadow test: explains a gap"). INWARD and OUTWARD are opposed and must never be read against each other.

- **Verdict (D1):** check reachability before declaring a discovery. Triangulated across Fig 6, Fig 8 and the Formula; the three share a framework pool, so this is internal consistency, not independent corroboration.
- **Refuter:** show a case where importing an atom into a closure that already contained the answer costs less than the distributed search that would have found it. Fig 6 :24 prices that case, so a demonstrated counter-example would reset the price.

### F8 - Some anomalies owe a refusal, not a new term (`general`, single-source for the figure amendment)

Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so"
Fig 5 :54: "A term that refuses another pays the same bargain. Stating the refusal, plus what remains unexplained after it, costs less than what was"
Fig 5 :55: "unexplained before. What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."
Fig 5 :56: "Same mint operator, same three guards, same bargain. Only the direction of the residual differs. Requires an operator for negation, which the seven bonds do not contain."
Fig 5 :58: "The candidates are ENUMERABLE rather than intuited: every term currently bound and generating a prediction is a candidate for being the wrong one."

An unusual observation may be evidence that a held regularity is false. The framework's answer to that is a negation (¬), not an additional positive term: "NOTHING IS EVER DELETED, and the reach falls because something was ADDED" (Formula step 3). This matters for the anomaly question because a community that can only accumulate positive explanations will answer every anomaly by adding an epicycle, never by refusing the term that produced the surprise.

- **Verdict (D1):** the vocabulary must contain a refusal operator, and the persistent-and-flat residual points at which bound term to refuse. **Single-source** in the figures (Fig 5 amendment plus Operators table, one framework pool); corroborated structurally by the configuration space of anomaly explanations in the world literature, not independently derived there.
- **Refuter:** demonstrate a vocabulary without negation that can correctly retire a false held term while adding only positive terms. If it can, the refusal requirement is not necessary.

### F9 - A channel can fail while the ground does not (`specified`, triangulated with a world case)

Fig 10 :22: "the ground does not update"
Fig 10 :24: "the ground does not decay, the channel does"
Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings"
Fig 10 :28: "you have lost touch"
Fig 6 :34: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

An anomaly can be a property of the instrument chain, not of the world. The OPERA faster-than-light result (world source W7, opened 2026-11-23) is a recorded case: a 60 ns early arrival that was traced to a GPS/fibre connection and a clock oscillator, with the apparent signal disappearing after the channel was repaired. This is the "mis-attached" bin of F2, and it is why a discovery claim must include a channel audit before it is promoted to a mint. The ground did not change; the reading did.

- **Verdict (D3):** a channel audit is a precondition of promotion, not an optional courtesy. `specified` in general form; triangulated for the principle across Fig 10 and the world case (low overlap: a framework rule and an experimental history), though the world case is a single instance, not a frequency estimate.
- **Refuter:** show an anomaly that survived every independent channel audit and was still a pure instrument artifact at every resolution. That would break the "extend an instrument already returning something" rule in Fig 6 :34-35, because there would be no edge to extend from.

---

## 4. Pre-registered refuter (written before the conclusions above were assembled)

Required by Fig 5 :66: "Committing a prediction before a run is this, already working." The shape claim in §0 and the verdict in §5 are refuted if any of the following holds:

1. A closed two-way discovery/fluctuation criterion is demonstrated that correctly handles all five bins of Fig 5, including the refuted bin, without a union split (breaks F2).
2. A controlled benchmark shows that cost(φ) + left(R,φ) separates known injected signals from null fluctuations worse than a fixed threshold at the same budget (breaks F3).
3. A case is documented where the per-slot residual trends down under accumulation and a genuine discovery is nevertheless being missed under a declared stopping rule (breaks F4).
4. A domain is exhibited where a significance threshold, with no independent ground contact, sets the truth of a promotion decision (breaks F5).
5. A frame is shown to compute an unbiased external measure of its own post-hoc selection effect from the same data that selected it (breaks F6).
6. A post-mortem shows that importing a new atom beat distributed search inside a closure that already contained the answer (breaks F7).

If any fires, the corresponding finding is withdrawn and the shape is re-censused. Until one is run, no part of this is labelled `grounded`. Note that none of these refuters is itself a figure quote; they are the discipline applied to the figure-derived shape.

---

## 5. Recommendation

1. **Do not answer the binary.** Re-census into the five bins (F2). Ask which kind of residual this is before asking whether to announce.
2. **Keep R per slot and record the scan** (F1, F6). Report how many slots were searched and what stopping rule was used, before reporting a winner.
3. **Run the bargain, not the threshold** (F3, F5). State a candidate under a declared code, compute cost plus leftover, and use any sigma or p-value only to decide how much independent follow-up to buy.
4. **Accumulate and watch the trend** (F4). A residual that does not trend down is the one worth pointing a term at, either a mint or a refusal.
5. **Audit the channel** (F9). Ask what instrument or calibration would make this reading disappear before asking what new law it implies.
6. **Search before importing** (F7). Check whether the candidate is already in the field's closure. A wrong atom costs more than starting from primitives.
7. **Keep a refusal in the vocabulary** (F8). Do not let the only available moves be "add another explanation" and "announce".
8. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Send the decision rule with its refuter, not a list of famous anomalies that happened to fit it.

---

## 6. Canonical usage check, strains and retraction log

Two local canonical sources were read this session and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` (the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them", and a reading that makes one contradict another "has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name") and `THE_FORMULA.md` (mode rule, step 5 "A gate is not the ground", step 7 SEARCHED/INWARD/OUTWARD).

### Strains encountered and resolved by re-census

| apparent strain | re-census | status |
|---|---|---|
| Fig 13 :74 cross-kind composition seemed to require a fixed number of anomaly types | Fig 13 governs the six substrate primitives, not the sorting of residuals; the sorting table is Fig 5 :10-14 and the union rule is Fig 9 :54 | **not strained**; Fig 13 is recorded in §2 as not governing this question rather than forced to fit |
| Fig 5 :42 "bargain, not a threshold" seemed to forbid all numerical cutoffs | Fig 9 :60 separates budget filters from verdicts; a cutoff is admissible as a filter | **not strained**; different quantities |
| MDL bargain (F3) seemed to conflict with "large and compressible" (Fig 5 :18) | The curiosity drive and the acceptance test score the same quantity (Fig 5 :47); one finds a candidate, the other prices it | **not strained**; corroboration within one framework pool, not two witnesses |
| Refusal (F8) seemed to require a new atom, contradicting "MINT can never add an atom" (Fig 6 :21) | A negation adds a refusing term to the record; Fig 5 :55 says what falls is the reach, and Formula step 3 says nothing is deleted | **not strained**; the amendment in Fig 5 and the amendment in Fig 6 describe the same monotonic record from two sides |

### Retraction and confirmation log

| earlier reading during this derivation | status after canonical check |
|---|---|
| "the question is a one-dimensional threshold problem" | **Retracted.** F2: it is a union of five bins (Fig 5, Fig 9). |
| "5 sigma is the framework's answer" | **Retracted.** F5: a threshold is a budget filter; the ground is the verdict (Fig 9 :60). The LIGO case shows the threshold embedded in a larger verification chain. |
| "a very large residual is a discovery" | **Retracted.** F3: magnitude alone fails; compressibility is required (Fig 5 :44). |
| "Fig 13's six-term set governs the anomaly decision" | **Retracted.** Fig 13 governs primitives; Fig 5 governs bins. Recorded in §2 as not governing here. |
| "shape, not a name means we cannot describe the rule at all" | **Retracted.** The figures README limits that phrase to a *missing* primitive. Here the shape is the decision procedure, which can be stated as a constraint set without naming a particular anomaly's cause. See `05_what_shape_means.md` §3. |
| "two framework figures agreeing is corroboration" | **Retracted.** They share an evidence pool (Fig 2 :40). Agreement is internal consistency; world sources from other fields are corroboration, and even they are mostly about statistical practice rather than the metalaw itself. |
| F1, F2, F3, F4, F5, F6, F7, F8, F9 | **Confirmed** after re-census, with the overlap declarations attached to each. |

### Honest stop

The figures govern the *shape* of the decision: per-slot, sorted, priced, persistent, ground-settled, channel-audited, search-before-import, refusal-capable. They do not supply a number, a specific instrument, or a verdict on any particular anomaly. `07_the_tether_answer.md` states what would settle the remaining gap, and `11_audit.md` checks the round trip. Status: `candidate`, `general`/`specified`, not `grounded`.
