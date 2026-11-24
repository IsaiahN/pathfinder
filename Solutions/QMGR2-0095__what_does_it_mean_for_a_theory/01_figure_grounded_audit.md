# Figure-grounded audit: what "falsifiable" means for statistical predictions

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what would have to be declared before a test. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-23): LLM output can "simulate an approximate answer/output", but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Framework method sources: `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`. World sources were opened on 2026-11-23 and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

**Question as written:** What does it mean for a theory to be "falsifiable" when its predictions are statistical?

**Stated as an effect.** A frame holds a prediction Γ(b,a). An observation o' arrives. The gap is R = |Γ(b,a) - o'| per slot s (Symbols table :36-40, Formula step 1). With a deterministic universal, a single genuine counter-instance can refuse the claim. With a statistical prediction, the "prediction" is a distribution, so almost every point in the sample space has positive mass. Two candidate answers present themselves:

- **Answer A (strict Popperian reading applied naively).** A statistical theory is compatible with every possible finite sample, therefore nothing can refuse it, therefore it is not falsifiable, at most "disconfirmable to an arbitrarily high degree" (Vignero and Wenmackers, opened 2026-11-23). What this leads to: falsifiability collapses into ayes/no verdict on the mathematical form of the distribution, and almost all of physics and cosmology becomes unfalsifiable.
- **Answer B (naive significance reading).** A theory is falsifiable because some outcomes are improbable under it; reject when p < alpha. What this leads to: the threshold is treated as a verdict about the world, the test is chosen after the data, one global number hides where the failure is, and not rejecting gets reported as support.

**The residual R proper.** Neither A nor B asks the right object. The residual is not "is this distribution logically compatible with the data" and not "did p cross a line." The residual is: *what would have to be in place for a statistical claim to be capable of coming back wrong, and for that wrongness to be attributable to the claim rather than to the test, the instrument, or an auxiliary?* Arity: four conditions (a refusal region, a non-updating anchor, independent frames, a non-verification reading of non-refusal). Symmetry: the comparison between a distribution and an observation is ordered, not symmetric; a tail probability orders outcomes by surprise, it does not join two terms (Fig 12 :87 comparison bond, Operators table :47-52). Scale: first order inside one experiment, second order across replications and instruments, with a lossy membrane between a single reading and a distribution over readings (Fig 4 :27-32).

**What an answer would look like, bound as an ordinary term (Formula "Direction").** Before running the census, I bind the sought-for shape: *falsifiability of a statistical theory is a conjunction of pre-committed refusal, reachable non-updating ground, independent frames, and honest non-refusal, with the threshold as a budget filter and no universal number returned.* Binding it makes it refusable by the same test as everything else (Fig 5 :65-66: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else. Then the preference is refusable by the same test as everything else."). The pre-registered refuter in §3 is this term's residual test.

---

## 1. Domain census

R by arity / symmetry / scale, then one line per domain with actors / currency / anchor. No nameable anchor means it is not a domain yet. Partition or union. Order by dependency (Fig 3 :20: "The chain is ordered by dependency, not by importance.").

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1. The statistical model frame** (the theory as predictor) | parameters, priors, likelihoods, the prediction distribution Γ, the rejection region, the sufficient statistic | probability mass and description length; what the theory stakes and what it costs to state | the pre-registered test procedure, which must not move when the data move | partition boundary: which outcomes are staked as refusal, which are compatible |
| **D2. The measurement frame** (data-generating process and instruments) | instruments, datasets, trials, calibrations, systematics, pooled readings | observations o'; readings ranged against the prediction | the physical process that produces the data, which does not update on what the theory thinks | union: signal plus channel decay plus auxiliary assumptions, overlapped |
| **D3. The verification frame** (the community checking the claim) | test protocol, independent replications, reviewers, significance conventions, journals | residuals and agreement; refusal or non-refusal | the ground, never agreement; refusal recorded before theory is shown | union of conditions, not a partition of "falsifiable" versus "not falsifiable" |

**No domain is missing an anchor.** D1's anchor is the pre-committed test, not the theorist's taste. D2's anchor is the data-generating process, not the instrument's self-report. D3's anchor is the ground, not consensus. If a test is chosen after seeing data, D1's anchor has been moved into D2 and the domain dissolves into a fit (findings F3 and F5).

**Union, not partition.** These are not three mutually exclusive kinds of falsifiability. They are overlapping conditions in one compound. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." A theory can fail at D1 while passing at D2, or pass at D1 and D2 but fail at D3 because the community reports non-refusal as confirmation. One lever does not clear the bundle.

**Dependency order.** (1) Bind the sought-for shape and write the refusal rule before the run (Formula "Direction"; Fig 5 :66). (2) Keep the channel to the ground reachable before judging the residual (Fig 10 :24). (3) Refuse before minting an adjustment (Formula step 2; Fig 5 :53). (4) Describe the residual before choosing a comparison frame (Fig 9 :53: "Residual first, frame second."). (5) Only then settle, and only then compose across replications (Fig 5 :69: "settling is necessary for a term to be composed over, and it is not sufficient.").

---

## 2. Figure census

| figure | bearing | verdict on this question |
|---|---|---|
| 1 The Agent | residual indexed per slot; frame-internal quantities disqualified | a single global p-value aggregates the signal; per-observable residuals are required |
| 2 The Ground | anchor must not update; independence; triangulation vs mirror | the data-generating process cannot be moved by the theory; one evidence pool is one witness |
| 3 Dependency Chain | a reading below the break is a reading of nothing | refuse and anchor before testing; optimising the test statistic cannot rescue a missing refusal rule |
| 4 The Membrane | lossy cross-scale transform; round trip gap | a single reading versus a distribution over readings is a lossy crossing; R_T must be recorded |
| 5 Mint Pipeline | guards as product; MDL bargain; negation amendment; pre-registration | a theory that can fit any outcome fails the bargain; the refusal is a negation, not a fit |
| 6 Closure / Reachability | import is the only wall-moving operator; instruments improved from worse ones | a test chosen after data is a post-hoc import with no source gate; unreachable and underivable differ |
| 7 Room Chain | agreement is variation, not a verdict; mirror chain | replication by rooms that share a pool is motion, not progress |
| 8 Union Surplus | no search adds an atom; search finding nothing is not proof of absence; provenance | non-refusal is unreached, not verified; underivable versus unreachable issue different instructions |
| 9 Leave / Arrive | describe residual first; union; filters not witnesses; threshold as narrowing | the significance level is a filter for the decision budget, never a witness for the theory |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access; convention that decides an outcome | the channel, not the ground, usually fails; pre-registration protects verifier independence |
| 11 The Habitat | capability is agent-and-habitat; enumerate, never compose; valence relative to residual | enumerate the instruments and auxiliaries in contact with the residual; no standing list of valid tests |
| 12 The Bond | isomers, functional groups, priced bonds, two currencies, flat formula | competing theories over one atom set are isomers; an unfalsifiable theory is the flat formula |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict; split a bundle | no figure line returns a correct alpha or a correct prior; that is a declared gap |
| Operators table | negation is unary and is a refusal; comparison is a threshold relation | falsification requires ¬; p < alpha is a comparison, not a truth verdict |
| Symbols table | R is the aim and a slice; anchor; per-slot measurement | the residual is a slice per observable, never a single global number |

Strained readings are named as such in §8, not smoothed over.

---

## 3. Findings

### F1 - The residual must stay indexed per observable slot (decisive for D1)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
Symbols table :43-44: "One object, region or entity being tracked. R is measured per slot, never as a single global number."

A statistical test that reduces all observables to one goodness-of-fit number or one p-value has performed exactly the prohibited aggregation. A live mismatch in one bin, one moment or one dataset is averaged into an acceptable global fit. The figure's own legal state is the opposite: Fig 1 :13 "a global R near zero with one live slot residual is a legal state". In cosmology the analogue is direct: a model can fit the full dataset while one parameter, H0, carries a live, persistent residual.

**Consequence.** Statistical falsifiability requires a pre-declared per-slot refusal region, not just a global threshold. The slots are the observables or bins the theory claims to predict.

**Refuter.** Show that a single scalar summary preserves the per-slot refusal information for every bundle the theory predicts, so the indexing condition is redundant. If such a sufficient global statistic exists for the theory in question, this finding does not apply to it. Fig 9 :60 warns against letting the filter hand you the verdict, so the burden is on the claim of sufficiency.

**Triangulation status:** `triangulated` across Fig 1 and the Symbols table (two figure passages with low overlap: one is the loop's metric rule, the other is the notation definition).

### F2 - Falsification is a negation, and a fit-only vocabulary cannot carry it

Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so"
Fig 5 :54: "A term that refuses another pays the same bargain."
Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate"
Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."

A report that only says "consistent with the data at 95 percent confidence" has no operator for "this is false." It can accumulate fits forever and cannot carry a correction. This is the framework's amendment to the mint pipeline: the fifth kind of residual sorts by what is *wrong*, and "no arrangement of the other four reaches it" (Formula step 2: "the fifth by what is WRONG, and no arrangement of the other four reaches it"). A p-value is not a negation. It is a comparison of a reading to a model (Fig 12 :87: "a threshold relation between two quantities"), and the decision to call it a refusal is a separate, pre-declared act.

**Refuter.** Provide a formal statistical language in which "the data are consistent with the model" and "the model is false" are the same assertion under a declared semantics, with no separate refusal operator. Until then the amendment stands.

**Triangulation status:** `single-source` on the figure side (Fig 5 amendment, Operators table and the formula agree but share one framework origin); corroborated in the world by the ASA principle that a p-value is not a statement about the theory's truth. One pool, so this is agreement, not independent corroboration.

### F3 - The refusal rule must be fixed before the run (decisive for D1 and D3)

Fig 5 :65-66: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else. Then the preference is refusable by the same test as everything else. Committing a prediction before a run is this, already working."
Fig 10 :52: "Bring a characterised residual, never the source."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :30: "If it moves when you push on it, it is not an anchor."
Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"

Popper, in the SEP entry opened this session, states the operational version: "criteria of refutation have to be laid down beforehand" (Popper 1963:38 footnote 3, quoted in SEP). Gelman and Loken show the failure mode: "In neither case were the data inclusion rules and data analysis choices preregistered", and a single analysis can still have an invalid p-value when the choices were contingent on the data. If the rejection region, the statistic, the exclusions and the stopping rule are chosen after the data, the "prediction" has updated on the observation. It is a fit wearing a prediction's clothes, and D1's anchor has been moved into D2.

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." A post-hoc test is not an import from a differing closure; it is a re-arrangement inside the same one, and "mint moves only in here" (Fig 6 :7).

**Refuter.** Exhibit a test whose refusal region is demonstrably independent of the observed data, in the sense that a different dataset would have produced the same region, and show that its error rate is unchanged by the analyst's contingent choices. If that holds, the pre-registration condition is satisfied for that test and the finding is confirmed rather than refuted; the finding is refuted only if no such independence is possible in principle and yet genuine refutations still occur.

**Triangulation status:** `triangulated` across Fig 5 :65-66 (pre-registration as direction discipline), Fig 2 :29-30 (non-updating anchor) and Fig 10 :52 (verifier non-access). Three figure lines with low overlap between the mint amendment, the ground definition and the seat rule.

### F4 - The threshold is a filter for the budget, not a witness for the verdict

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 12 :42: "The acceptance test is a bargain, not a threshold."
Fig 10 :47: "a convention that decides an outcome has stopped being one"
Fig 10 :49: "Declaring a meaning does not ground it."
Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"

The significance level alpha is a declared error rate that manifests under hypothetical repetition, not a probability that the theory is true (SEP, Philosophy of Statistics: "the significance level of a test is an error rate that will manifest if data collection and testing is repeated, assuming that the null hypothesis is in fact true"). The ASA statement's third principle: "Scientific conclusions and business or policy decisions should not be based only on whether a p-value passes a specific threshold." Crossing 0.05 does not change the world and does not, by itself, turn a fit into a falsification or a non-refusal into a verification. It allocates the decision budget: how much surprise the community will treat as owing an explanation.

**Named strain, not smoothed.** In Neyman-Pearson testing the threshold *does* decide an action: reject or do not reject. Fig 10 :47 says a convention that decides an outcome has stopped being one. The re-census that resolves this is: the threshold legitimately decides a **decision** (an action, a publication, a follow-up budget), but it must not decide the **truth verdict** (the theory is false, the theory is confirmed). A rule that decides actions is a convention doing its job; a rule promoted to a verdict about the world has stopped being a convention. Both readings are kept visible.

**Refuter.** Show a case where crossing a pre-declared threshold constitutes a fact about the data-generating process rather than a decision rule of the testing community, with no convention left in the chain. If such a case exists, the filter/verdict distinction collapses for it.

**Triangulation status:** `triangulated` across Fig 9 :60, Fig 10 :47-49 and Fig 12 :42, with world corroboration from the ASA statement and SEP. The live strain above is recorded in §8.

### F5 - Not being refused is not verification

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."
Fig 13 :134: "Unreachable is a verdict here, not a silence"
Fig 6 :38: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."

A statistical theory that survives all current tests has not been verified. It has not been refused at this budget. Fig 8 :40-41 separates two different facts: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions." The practical instruction for a non-refusal is to report it as unreached, list which slots were checked, and name the instrument that would change the report. The ASA statement's sixth principle agrees at the world level: "By itself, a p-value does not provide a good measure of evidence regarding a model or hypothesis."

This is the precise point where Answer A and Answer B both fail. A says statistical theories can never be refuted, so falsifiability is lost; but refusing nothing is not the same as verifying everything. B says a non-significant result supports the theory; but absence of a refusal is a statement about the search budget, not about the world.

**Refuter.** Exhibit a statistical theory for which survival of all possible tests at a fixed budget entails truth, with no further instrument that could discriminate. That would make non-refusal a verification. No figure line supports it, and the issue is left open rather than declared impossible: Fig 8 :40 notes the metaframe proof does not prove any particular atom is far away.

**Triangulation status:** `triangulated` across Fig 8, Fig 9 and Fig 13 (three different figures, low overlap).

### F6 - Independence, not agreement, makes a replications count

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 8 :45: "Two frames together reach what neither reaches alone."
Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."
Fig 8 :50-51: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence. Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"

A rejection is informative about the theory only when the reading that produced it was not generated by the same evidence pool as the prediction. In the H0 tension the early-universe probes and late-universe distance-ladder determinations are two instruments pointed at one thing; the review records "the high precision and consistency of the data at both ends" and demands "a hypothesis with enough rigor to explain multiple observations, whether these invoke new physics, unexpected large-scale structures or multiple, unrelated errors." That is Fig 2's triangulation. By contrast, ten analyses of the same dataset with different exclusions are one frame wearing ten names (Fig 8 :49: "Two frames that overlap almost completely are one frame wearing two names.").

The same figure governs the Clever Hans analogue: if the questioner knows the expected answer, the reading is generated by the questioner's cues, not by the subject's competence, and the "data" share an evidence pool with the prediction. The fix is to cut the channel, not to argue harder.

**Refuter.** Provide a case where two frames known to draw on the same evidence legitimately corroborate a verdict about the world, with the overlap quantified and shown not to disqualify. Fig 8 :50 allows convergence at maximum independence as corroboration, so the refuter must show the overlap was not there, not that agreement is always worthless.

**Triangulation status:** `triangulated` across Fig 2 and Fig 8; low-overlap world corroboration from cosmology (two instruments) and animal behaviour (cue channel).

### F7 - Falsifiability is graded by informativeness; an all-purpose fit is the flat formula

Fig 5 :43-44: "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."
Fig 12 :6: "collapse 6: the flat formula"
Fig 12 :94: "The arrangement is the substance."
Symbols table :63: "the typed relation between two operands. Seven of them, and which one holds is not recoverable from the operands, so a term naming only its ingredients has recorded half of itself."
Fig 13 :43-44: "A continuum was the seventh and was removed for failing exactly this"

A statistical theory with enough free parameters can accommodate any observation "albeit not all with the same probability" (Vignero and Wenmackers, Class II). A theory with fudge factors or probability gaps (their Classes III and IV, the extreme case being "anything can happen") stakes nothing. The figures price this: a term is worth having only when stating it plus the leftover residual costs less than the residual it removes (Fig 5 :43), and a vocabulary with only one bond "carries nothing" (Fig 12 :101: "A bond that costs nothing is a bond that carries nothing, which is the flat case."). Di Valentino et al. report that several cosmological proposals restore agreement "in light of their additional degrees of freedom", and that "reduced tension might not simply come from a change in H0 but also from an increase in its uncertainty due to degeneracy with additional physics". That is a fit bought with parameters, not a refused residual.

The world literature agrees that this is graded, not binary. Vignero and Wenmackers: "the (degree of) falsifiability of a hypothesis co-depends on the severity of available experiments", and informativeness is the load-bearing dimension. Popper, via SEP: "the more improbable a theory is the better it is scientifically, because the probability and informative content of a theory vary inversely". "Improbable" here means bold, not likely to be true.

**Refuter.** Show a maximally vague theory (one that stakes no low-probability region) that is nevertheless refuted by an ordinary test with no ad hoc rescue and no added auxiliary. That would break the link between informativeness and falsifiability. The figures price the bond, so the burden is on the counterexample.

**Triangulation status:** `triangulated` across Fig 5 (MDL bargain), Fig 12 (flat formula and priced bond) and Fig 13 (minimality), with lower-overlap world corroboration from the cosmology review and from Vignero and Wenmackers.

### F8 - The question is a union of conditions, so verdicts stay per-domain

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."
Fig 1 :19: "The residual is indexed by object slot, not aggregated."

"Falsifiable or not" is a bundled verdict over D1, D2 and D3. A theory can have a clean refusal region (D1 pass) but a decaying channel (D2 fail), or both but a community that reports non-refusal as confirmation (D3 fail). The intersections are categorically different compounds, not harder instances of one condition. A single lever, for example lowering alpha, clears the region where only D1 binds and leaves the channel and independence conditions standing.

**Refuter.** Show that the three domains' conditions are logically independent in the wrong way: that satisfying one entails the others for all statistical theories, making the union a partition after all.

**Triangulation status:** `single-source` for the union rule (Fig 9), with low-overlap world corroboration from the Library of Babel essay: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually".

### F9 - Which term to refuse: the residual that persists and does not trend down

Fig 5 :59: "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"
Formula step 2: "They rank by a quantity already held: the residual that PERSISTS AND DOES NOT TREND DOWN. Same shrinking test the selector runs, opposite sign."
Fig 6 :39: "instruments do not have to improve by small steps. A jump in resolution is fine" (attributed to the figure's Neptune example; read in FIGURES_TEXT.md :312-313)

When several terms could be refused, the candidates are enumerable: every bound term that is currently predicting (Fig 5 :58). They rank by the residual that keeps being wrong and is not improving. In the H0 case, the persistent 4 to 6 sigma disagreement survived more data and many model proposals, which is why the review treats it as a live refusal target rather than a fluctuation. The decision of *which* term is wrong is partly outside the pipeline: Fig 5 :61 "BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL." Fig 5 :62-63 "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term." Hence the pre-registration discipline of F3.

**Refuter.** Exhibit a case where the term with the largest persistent flat residual is correctly retained and a different term with a shrinking residual is the one actually false, under a declared ground. That would break the ranking rule.

**Triangulation status:** `single-source` on the figure side (Fig 5 amendment plus formula), corroborated in the world by the Hubble tension review's account of a residual that "has existed since the first release of results from Planck in 2013 and has grown in significance with the improvement of the data." Different pool, so weak but genuine corroboration of the shape.

### F10 - No figure line returns a correct alpha, prior or test (declared gap)

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :134: "Unreachable is a verdict here, not a silence" Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it."
Fig 13 :138-139: "narrowing gets you close while the ground decides"

The figures fix the shape (refusal, anchor, independence, honest non-refusal) and refuse to name the number. Whether 0.05, 0.005, a Bayes factor threshold, a false-discovery rate or a severity requirement is the right decision convention is not derivable from any figure line. It depends on the cost of being wrong in the field in question, which Fig 2 :42 prices: "Buy independence in proportion to the cost of being wrong." The frequentist versus Bayesian choice is likewise a union of different anchors and currencies, not a single figure verdict. This is a `gap` of the shape-not-a-name kind, reported as unreached rather than as silence. "Unreachable is a verdict here, not a silence."

**Refuter.** Derive a universally correct significance level or prior from the figure set without importing a field-specific cost of error. Until that happens the gap stands.

**Triangulation status:** `gap`, triangulated as a limit across Fig 9 :32 and the canonical figures README, which says the framework returns "a shape, not a name".

---

## 4. Pre-registered refuter (written before the conclusion)

Required before the shape claim is used, per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." Fig 5 :66: "Committing a prediction before a run is this, already working."

The four-condition separator is refuted if any of the following holds:

1. **No refusal region is needed.** A statistical theory with no bound low-probability region gets genuinely refuted in ordinary practice, with no ad hoc rescue and no auxiliary shifted, so F1, F3 and F7 fail together.
2. **Aggregation is lossless.** A single global statistic preserves the per-slot refusal information for every bundle the theory predicts, so F1's indexing condition is unnecessary.
3. **Independence is dispensable.** Two frames known to draw on the same evidence pool legitimately corroborate a verdict about the world, with the overlap quantified, so F6 fails.
4. **Non-refusal is verification.** Survival of all tests at a fixed budget entails the truth of the theory, with no further instrument that could discriminate, so F5 fails.
5. **The threshold is a world fact.** Crossing a declared threshold is shown to be a fact about the data-generating process rather than a decision rule of the testing community, with no convention left in the chain, so F4 fails.

If any fires, the separator is withdrawn or narrowed to the conditions that survive. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the separator, not with the p-value debate. The question is not "is p < 0.05 legitimate" but "what would have to be in place for any statistical prediction to come back wrong".
2. State the mode on every sentence (findings F4 and F5 are where `specified` most easily slips into `grounded`).
3. Bind the sought-for shape before the test, with the refusal region written down, time-stamped and per observable (F1 and F3).
4. Treat the significance threshold as a budget filter and record it as a convention; never let it decide the truth verdict (F4).
5. Report non-refusal as unreached, with the checked slots and the instrument that would change the report (F5).
6. Buy independence from instruments and datasets with different evidence pools; do not multiply analyses of one pool (F6).
7. Price the theory. Ask what it stakes and what it costs to state, and refuse the all-purpose fit (F7).
8. Use the public opt-in venues in `03`, and ask for a refutation rather than belief. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, the refusal rule and the refuter, not the conclusion.

---

## 6. Canonical usage check (figures README, metalaws doc, seat map)

Three sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: "the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." The seat reads the ground; it does not ask the anchor to decide what the figures already settle. Asking for a ruling on a design question that the figures answer is the named failure mode.
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`: the two guards do not substitute. "Provenance, did anything enter off the books? Retrospective... Falsifiability, can this come back wrong, and what happens when it does? Prospective, about the question, checked by inspecting the losing condition." And: "Perfect provenance with an unfalsifiable claim is an unimpeachable record of nothing." Also Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention."

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| F1 called "decisive for D1" | **Narrowed, not withdrawn.** The canonical text confirms per-slot indexing as a framework rule, but it applies only where the theory makes claims per observable. A theory with one scalar prediction has one slot, so the condition is vacuous for it, not violated. Recorded as a scope condition. |
| F3 read as a blanket ban on looking at data before choosing a test | **Retracted in that form.** The figures require the *refusal rule* to be bound before the run. Exploratory analysis after the run is allowed if it is labelled exploratory and does not accrue the predictive claim's standing. Fig 5 :65-66 binds the sought-for shape; it does not forbid exploration. |
| F4 read as "the threshold is meaningless" | **Retracted in that form.** Re-census distinguishes a decision convention (legitimate) from a truth verdict (forbidden). Fig 10 :47 governs only the latter. The threshold is a filter for the budget, not nothing. |
| F7 "an all-purpose fit is the flat formula" | **Canonically confirmed and narrowed.** Fig 12 :6 names the flat formula and :101 prices the bond at zero when it carries nothing. Vignero and Wenmackers independently grade falsifiability by informativeness, so the claim is not a paraphrase of a single figure. |
| F10 "no figure returns an alpha" | **Canonically confirmed.** The figures README's "shape, not a name" governs missing primitives and here governs the missing decision constant. This is a `gap`, not an omission to be filled by invention. |
| Apparent Fig 2 :41 versus Fig 10 :47 strain | **Not strained after re-census.** Fig 2 :41 concerns agreement about a *shared meaning* (efficient for a convention). Fig 10 :47 concerns a convention that decides an *outcome*. Different objects. Both readings kept visible in F4. |
| Attempted mapping of "spectrum" onto a probability distribution | **Retracted.** In a first pass I tried to bind the statistical distribution to the six-term Spectrum atom. Re-census: the six terms govern composition, not the formalism of measurement. That binding is an import from the statistics frame with no shadow test, exactly the error the exemplar's `01` F7 names. No figure line licenses it. |
| "Falsifiable" treated as one property of one theory | **Retracted.** The union finding F8 governs. Verdicts are kept per domain and never averaged into a single yes/no label. |

---

## 7. Seven-question recursive derivation (summary)

1. **Is the question about the distribution or the claim?** Neither. It is about the refusal condition attached to a claim whose prediction is a distribution (residual restated in effect terms).
2. **Can the six-term set decide it?** Only structurally: it requires an anchor, per-slot residuals and a negation operator. It returns no alpha (Fig 13 :134, gap).
3. **Is Answer A right?** No. "Cannot be strictly refuted" does not entail "not falsifiable in practice"; it entails that the refusal rule must be stated explicitly (F3, F7).
4. **Is Answer B right?** No. A p-value is a comparison, not a negation; not crossing a line is not verification (F2, F4, F5).
5. **Where does the test come from?** It must be bound before the run (Fig 5 :66), ranged against a non-updating anchor (Fig 2 :29), and checked by independent instruments (Fig 8 :45).
6. **What survives non-refusal?** An `unreached` report with checked slots and a named instrument, not a confirmation (F5).
7. **What is the gap?** The specific threshold and the frequentist/Bayesian framing. A cost of error must be imported from the field, with provenance and a shadow test, debited against independence (Fig 6 :24).

---

## 8. Strains and status

| strain | treatment |
|---|---|
| Threshold decides an action in NP testing, but Fig 10 :47 forbids a convention deciding an outcome | Kept live and narrowed: decision convention legitimate, truth verdict forbidden (F4). |
| Fig 2 :41 (agreement efficient for a convention) versus Fig 2 :40 (disqualifying for a verdict) | Dissolved by re-census: shared meaning versus claim about the world. |
| "improbable" in Popper (bold) versus "improbable" in a p-value (tail area) | Named as a vocabulary collision. The figures' comparison bond governs tail areas; Popper's informative content governs boldness. Different quantities, both held apart. |
| Statistical distribution mapped onto the Spectrum atom | Retracted as an unfounded import; recorded in §6. |
| Clever Hans and cosmology as world corroboration | Low overlap, but neither settles the figure verdict. They illustrate the shape only. |

**Per-domain verdicts, kept separate and never averaged.**

- **D1, statistical model frame:** `specified`, `triangulated` (F1, F2, F3, F7). A falsifiable statistical theory stakes a pre-declared, per-slot, low-probability refusal region and carries a negation operator.
- **D2, measurement frame:** `specified`, `triangulated` (F5, F6). The anchor must not update; the channel can decay; independence decides whether agreement means anything.
- **D3, verification frame:** `specified`, `triangulated` (F3, F4, F5, F8), with a declared `gap` for the threshold. Non-refusal is unreached, the threshold is a budget filter, and no external frame may hold the interiors before giving its verdict.

**After re-census: one live narrowed strain (threshold as decision versus verdict), one vocabulary collision (improbable), one retracted import (distribution as Spectrum), one declared gap. No figure quote was found to have drifted; the second seat in `11_audit.md` rechecked them character by character.**
