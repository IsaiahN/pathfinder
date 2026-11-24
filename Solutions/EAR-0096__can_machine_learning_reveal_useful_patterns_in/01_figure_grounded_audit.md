# Figure-grounded audit: can ML reveal useful patterns in Earth-system data, and how to guard against misleading correlations?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and which guards are figure-licensed. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is a simulation and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** The canonical figure text at `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`, the canonical figures README at `local: ...\FIGURES_README_canonical.md`, `local: ...\THE_FORMULA.md`, and the public pages in `10_source_ledger.csv`. All `Fig N :line` quotes are verbatim substrings of the figure text.

---

## 0. The residual in effect terms

The question arrives as a bundle. State what each option leads to:

- **Option A, strong reading.** ML reads patterns off Earth-system data and those patterns are knowledge about how the Earth system works. What it leads to: a model output treated as a verdict, the frame's own scoring quantities counted as evidence, agreement among models trained on the same reanalysis counted as corroboration, and a correlation promoted to a cause without a gap-closing instrument.
- **Option B, figure-grounded reading.** ML narrows a shape, a candidate set of regularities, and that shape is useful only when ranged against an independent ground through guards that keep correlation out of the verdict seat. What it leads to: a checkable output with written refuters, per-slot residuals, and an honest stop at the limit of the instruments.

The residual `R` is the gap between what a model predicts and what the ground returns, **per object slot** (per region, per variable, per season), not as a global average. The question asks two things at once, so before any figure line is chosen the census must decide whether this is one domain or several.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry, scale

- **Arity:** two conditions. (a) Can ML return a useful pattern at all? (b) How do we stop a correlation being mistaken for knowledge? These are not one hard question. Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :54: *"when the split lands on a union rather than a partition, unbundle before you search again."* Verdict: **union compound**, with its own loop and its own ground for each half.
- **Symmetry:** correlation is a symmetric relation, two variables co-vary; causation is ordered (production ⇒ or sequence → in the Operators table). The residual asks about a misleading correlation, so it is about a bond that has been misread as another bond. Fig 12 :46: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*
- **Scale:** first order inside a model (fit on data), second order at the handoff from model to ground (Fig 4). A pattern that survives at one scale need not survive the round trip to the other.

### One line per domain: actors / currency / anchor

| domain | actors | currency | anchor (nameable?) | partition or union |
|---|---|---|---|---|
| D1 Model frame | samples, features, parameters, loss, predictions | prediction error, description length | the held-out ground observation, external to the frame (yes) | one partition of the compound |
| D2 Earth-system ground | satellites, stations, field campaigns, reanalyses, physical measurements | measured observations | the physical world as measured (yes, and it must not move) | the ground for D1 and D3, not a third frame |
| D3 Verification frame | scientists, reviewers, independent instruments, independent datasets | residuals and agreement | the ground, never agreement (yes) | one partition of the compound |
| Overlap D1 ∩ D3 | an ensemble of models trained on the same corpus | agreement | none independent (no nameable anchor) | treated as a compound, not a domain (Fig 9 :54) |

No domain is admitted without a nameable anchor. The overlap of correlated models has no independent anchor, so it is not a domain and gets no verdict of its own.

### Dependency order (Fig 3)

1. Perception: is there a fact here, and which link does the chain stop at? (Fig 3 :5, Fig 9 :4-5.) Settle the union/partition before optimising either half.
2. Vocabulary: name the anchors (ground observations) before naming models. (Fig 9 :27-28.)
3. Objective: state what would count as progress in effect terms (a per-slot residual that trends down against held-out ground). (Fig 3 :9-10.)
4. Refuse before mint: a held correlation with a persistent flat residual owes a refusal, not another layer. (Formula step 2; Fig 5 :53.)
5. Only then mint, and only if the bargain pays (Fig 5 :43).

A reading taken below the break in this chain is a reading of nothing (Fig 3 :22-23), so a guard aimed at step 4 cannot rescue a failure at step 2.

---

## 2. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | residual indexed per slot; ground is the only metric; frame-internal quantities disqualified | per-slot guard; global accuracy is not evidence |
| **2 The Ground** | correlation valence; anchor must not update; independence; triangulation not negotiation | the central anti-misleading-correlation law |
| **3 Dependency Chain** | union/partition and dependency order | chain must be settled before optimisation |
| **4 The Membrane** | round trip and measured gap R_T | abstraction loses information; measure it |
| **5 Mint Pipeline** | MDL bargain; fifth kind (refuted); preference invisible to frame | overfitting and apophenia named |
| **6 Closure / Reachability** | import moves wall; instruments improved from worse ones | new data source is import with a source gate |
| **7 Room Chain** | agreement compounds, evidence does not | ensembles of correlated models are not corroboration |
| **8 Union Surplus** | convergent derivation vs adopted import; independence one quantity read twice | provenance separates the two |
| **9 Leave / Arrive** | split union; describe before looking; shape not name; filters vs witnesses | describe residual before model search |
| **10 Ground Maintainer** | channel decay; convention that decides an outcome; bring a characterised residual | data quality and threshold discipline |
| **11 The Habitat** | enumerate habitat; contact cascades; test harness as substituted habitat | confounders three steps out; synthetic tests prove wiring only |
| **12 The Bond** | bond not recoverable from operands; isomer; priced arrangement | correlation is a bond misread as production |
| **13 Minimum Viable Set** | space, time, spectrum, gradient, network; independence applies to the set | Earth-system data has the six structures; not itself a verdict on ML |
| **Operators table** | ⇒ production vs + conjunction; ¬ for refusal | causation is not correlation; vocabulary needs negation |
| **Symbols table** | R is the aim and a slice; ground is the anchor | R is per slot, not a single global number |

Strained readings are named as such in §5 and in `11_audit.md`, not smoothed over.

---

## 3. Findings

### F1 — The question is a union compound, unbundle before searching (governs the shape of the answer)

Fig 9 :4-5: **"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**

Fig 9 :54: **"when the split lands on a union rather than a partition, unbundle before you search again."**

Fig 9 :55-56: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

The capability question and the guard question have different grounds. The first is settled by whether a held-out ground pays for a pattern. The second is settled by whether the checking arrangement keeps correlation out of the verdict seat. Answering one does not answer the other. **Verdict: union, triangulated (Fig 9 plus Fig 3 dependency order).**

**Refuter:** if a single instrument can settle both halves without changing the checking arrangement, the split is wrong and the union claim is withdrawn.

### F2 — Correlation is disqualifying for a verdict when frames share an evidence pool (decisive for the guard half)

Fig 2 :39: **"Correlation has valence."**

Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence."** and **"Independence is what makes agreement mean something."**

Two neural networks trained on the same reanalysis are "two people reading the same report," not "two instruments pointed at the same thing." Their agreement is the pool talking. This is the figure-grounded reason an ensemble is a variance reducer, not a corroborator. Domingos (CACM 2012) independently warns that learners "can only learn correlations" and that results are routinely "treated as representing causal relations" (world source, low overlap, see `10_source_ledger.csv`). Fig 2 :44 names the statistics: *"The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."*

**Verdict: triangulated** (Fig 2 valence plus Fig 8 independence plus Fig 7 agreement). **Mode: `specified`**, the direction is general but the application to a named dataset is not measured here.

**Refuter:** show two models whose training evidence is genuinely disjoint (different instruments, different closures) and whose agreement persists against a third held-out ground. That is a witness, not a pool.

### F3 — The residual is indexed per slot; a global score hides the live signal

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :13: **"a global R near zero with one live slot residual is a legal state."**

An Earth-system model with excellent global RMSE can be failing completely over one region or one regime. The framework forbids treating the global score as the whole residual. This is the figure-grounded form of the standard caution that a single skill score can hide regional failure. **Verdict: triangulated** (Fig 1 per-slot plus Symbols table "R is always a slice").

**Refuter:** demonstrate that the metric in use preserves per-slot live mass and that no slot with positive residual is averaged away.

### F4 — The ground is the only metric; frame-internal quantities cannot score the frame

Fig 1 :23: **"The ground enters as the only metric."**

Fig 1 :24-27: **"coverage, and compression achieved"**, **"predicates minted, and credibility accrued"**, **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Training accuracy, compression achieved, number of features selected, and reviewer credibility are all quantities the model frame also produces. They cannot be the evidence that the pattern is useful. What can be evidence is the held-out observation. **Verdict: single-source for the direct quote (Fig 1), corroborated in a low-overlap field by Domingos' "It's Generalization that Counts" section** (training error is a surrogate for test error, and testing on training data gives "the illusion of success").

**Refuter:** name a scoring quantity that is not producible by the frame it scores, and show the ground paying for it.

### F5 — The MDL bargain rejects the overfit and the one-occasion pattern

Fig 5 :42: **"The acceptance test is a bargain, not a threshold."**

Fig 5 :43-44: **"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

Fig 5 :45: **"This is minimum description length, Rissanen 1978"**

A pattern that fits the training record perfectly and generalizes to nothing is the named failure. A pattern so flexible it explains every outcome is the other named failure. Both fail the same bargain: stating the pattern plus what remains unexplained must cost less than the confusion it removes. Domingos' "Overfitting Has Many Faces" section is an independent, low-overlap corroboration. **Verdict: triangulated** (Fig 5 plus Domingos 2012, and Fig 9 :60 on filters vs witnesses).

**Refuter:** show a pattern admitted as useful whose description length plus residual exceeds the baseline it replaced, or which only fits one occasion.

### F6 — Describe the residual before choosing the model, or any model will seem to fit

Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**

Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**

Fig 9 :32: **"you get a kind of thing, never the answer itself"**

This is the apophenia guard. If a model is chosen first and then found to "discover" a pattern, the pattern was manufactured by the choice. Describe the residual in effect terms, register the predicted signature, then go looking. Vigen's "Spurious Correlations" page (low-overlap, statistics education) demonstrates the failure mechanically: with 25,237 variables and 636,906,169 pairwise correlations, "any sufficiently large dataset will yield strong correlations completely at random." **Verdict: triangulated** (Fig 9 plus Vigen plus Domingos' multiple-testing section).

**Refuter:** produce a pre-registered residual and predicted signature dated before model search. If none exists, the pattern carries zero evidentiary weight.

### F7 — The anchor must not update; channel decay is the real failure mode

Fig 2 :33: **"The anchor must not update."**

Fig 2 :34: **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."**

Fig 10 :24: **"the ground does not decay, the channel does"**

Fig 10 :25-26: **"stale percepts, dropped transients, saturated metrics, pooled readings"**

Two guards follow. First, the observational ground must not be retuned to make the model look correct; when it moves, the whole checking arrangement drifts coherently. Second, the failures are usually in the channel, not in the ground: stale data, dropped short-lived events, saturated sensors, and pooled readings. Reichstein et al. (via MPI-M, 2019) state independently that "All data-driven and statistical approaches do not guarantee physical consistency per se, are highly dependent on data quality, and have difficulty extrapolating." **Verdict: triangulated** (Fig 2 plus Fig 10 plus Reichstein).

**Refuter:** an experiment in which changing the model cannot change the held-out observation, and in which the channel's per-slot readings are shown to be fresh and unsaturated.

### F8 — Enumerate the habitat for confounders and cascades

Fig 11 :43: **"The habitat is enumerated, never composed."**

Fig 11 :52-54: **"contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

A misleading correlation in Earth-system data is often a common cause several links away, not a direct relation. The habitat of a residual is listed from the world, outward until the cascade stops mattering. Runge et al. (Nature Reviews Earth & Environment 2023) list "contemporaneous causation, hidden confounding and non-stationarity" as the typical Earth-system challenges and show that causal methods, not more correlation, address them. **Verdict: triangulated** (Fig 11 plus Runge 2023).

**Refuter:** an enumerated habitat with the confounder cascade scoped to at least three steps, and a test that the apparent correlation survives conditioning on the common cause.

### F9 — What ML returns is a shape, not a causal name

Fig 9 :32: **"you get a kind of thing, never the answer itself"**

Canonical README: the framework says *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments can no longer distinguish, recording the lineage so the stop is honest.

So ML can find a useful pattern in the shape sense: it narrows a candidate set. It does not, by that act, name the mechanism that produced the pattern. *The Hard Problem is About Source* gives the reason: a reading that cannot discriminate sources "cannot comment on the source," and an instrument that cannot distinguish cases "demonstrates its own inadequacy." The spectrometer, not an argument, resolved the case. **Verdict: triangulated** (Fig 9 plus canonical README plus the source essay).

**Refuter:** a source-discriminating instrument that names the mechanism at the ground, with provenance showing the discrimination.

### F10 — Measure the round-trip gap R_T

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

An abstraction of the data (a learned representation, a downscaled field, an emulator) loses information. Carrying it back to a specific region and comparing is the only honest report of what was dropped. Treating a compressed model as identical to the observations sets R_T to zero and is the dead-reckoning error the figure names. **Verdict: triangulated** (Fig 4 plus Fig 11 test-harness rule).

**Refuter:** a measured round trip with a stated, nonzero R_T and an enumerated list of what the coarser description cannot hold.

### F11 — A threshold that decides an outcome has stopped being a convention

Fig 10 :47: **"a convention that decides an outcome has stopped being one"**

Fig 10 :48: **"a convention nothing can check is a constant the seat authored, carrying the seat's authority"**

A significance threshold tuned after seeing the results is a constant the analyst authored, carrying the analyst's authority. It does not become a ground. Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** A pattern validated only against a simulator proves the simulator's wiring, not the capability. **Verdict: single-source for the direct quotes (Fig 10, Fig 11), corroborated by Vigen's account of how naive p-values and truncated axes manufacture significance.**

**Refuter:** a threshold fixed before the run, and a validation against withheld real observations rather than only synthetic data.

### F12 — What actually survives

| claim | mode | figure |
|---|---|---|
| ML can narrow a candidate set of regularities, a shape | `general` (structural) | Fig 9 :32; canonical README |
| A correlation shared by models on one evidence pool cannot ground a verdict | `specified`, falsifiable | Fig 2 :39-40, :31-32 |
| Residual must be read per slot, never only as a global score | `specified`, falsifiable | Fig 1 :19, :22 |
| The ground is the only metric; frame-internal scores are disqualified | `general` with `specified` guards | Fig 1 :23-27 |
| Overfit and vacuous patterns fail the MDL bargain | `specified` | Fig 5 :42-45 |
| Describe the residual before model search | `specified` | Fig 9 :27-28 |
| The anchor must not update; channel decay is the real failure | `specified` | Fig 2 :33-34; Fig 10 :24-26 |
| Enumerate the habitat; confounders cascade | `specified` | Fig 11 :43, :52-54 |
| The specific usefulness of any named pattern in a named dataset | **not claimed**, needs a ground reading | Fig 5 :69-72 settlement condition |

---

## 4. Pre-registered refuter

Required before any outreach, per the seat rule that "a falsifier written before the run is a design instrument." The shape claim and its guards are refuted if any of the following holds:

1. Two models with genuinely disjoint evidence are shown to agree against a third held-out ground, and the agreement still fails to add evidence (breaks F2).
2. A global skill metric is shown to preserve every per-slot live residual such that no slot can be averaged away (breaks F3).
3. A scoring quantity is shown to be producible only by the ground and not by the frame it scores (breaks F4).
4. A pattern is admitted as useful whose description length plus residual exceeds its baseline, or which fits only one occasion (breaks F5).
5. A pre-registered residual and predicted signature are shown to postdate the model search and the pattern is still counted as a discovery (breaks F6).
6. A source-discriminating instrument names the mechanism at the ground with recorded provenance (closes F9 and would move the claim toward `grounded`).

If any fires, the corresponding guard is withdrawn. Until a ground reading is taken, nothing here may be labelled `grounded`.

---

## 5. Strains and re-census

- **Fig 13 vs the usefulness of ML.** Fig 13 lists space, time, energy, spectrum, gradient, network as the six terms and says *"Every cell is a composition, and each becomes an operand for the next"*. It does not govern whether a statistical model is useful; it governs what composes across the two kinds. Re-census: Fig 13 is background for the data types (space, time, spectrum, gradient, network all appear in Earth-system data), not a verdict on ML. No strain after re-census.
- **Fig 2 independence vs ensembles.** A reader may strain Fig 2 :31 to say ensembles are corroboration. That is the wrong domain: an ensemble drawn from one corpus is one frame wearing many names (Fig 8 :48-49). Re-census: independence is the quantity, bootstrap resampling is not independent evidence.
- **Fig 5 overfitting vs Fig 12 simplicity.** Domingos notes correctly that simplicity does not imply accuracy. Fig 5's bargain is about description length plus residual, not parameter count. Re-census: no contradiction, different quantities. Named, not hidden.
- **After re-census: no hidden strains.** The open item is the ground reading of a named pattern, which is not a strain in the figures but the honest stop of the derivation.

---

## 6. Recommendation

1. Unbundle the question before searching (F1). Treat capability and guard as two loops with two grounds.
2. Lead with the guard that a shared evidence pool cannot corroborate (F2), because it is the most decision-relevant and the most triangulated.
3. Require per-slot residuals and held-out observations; disqualify frame-internal scores (F3, F4).
4. Register the residual and predicted signature before model search (F6), and fix thresholds before the run (F11).
5. Enumerate the habitat and the confounder cascade (F8), and measure the round-trip gap (F10).
6. Send the generator, not the recording. Fig 4 :22: *"Only methods cross up. Only head starts come down."* Ship the shape claim and the refuter first.

---

## 7. Canonical usage check (figures README + formula)

Two local sources were read after the first sections and govern how the figures may be used:

- `local: ...\FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the instruments, recording the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `local: ...\THE_FORMULA.md`: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict"* is in Fig 9 :60; the formula's step 2 *"BROKEN · mechanism a mint is owed"* and step 5 *"SETTLE — the ground settles it. Verified only by what pays. A gate is not the ground"* set the order: refuse before mint, settle before call a pattern useful.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "ML returns a shape not a name" | **Narrowed, not retracted.** The README's phrase governs a missing primitive. Here the shape is a candidate set of regularities, and naming a particular mechanism still needs a ground reading or a provenanced import. Both forms recorded. |
| "correlation is always disqualifying" | **Narrowed.** Fig 2 :41 says agreement is *"efficient for a convention."* Correlation is disqualifying for a verdict, not for choosing a convention or generating a hypothesis. |
| "the figures govern ML" | **Retracted at record level.** The figures are domain-agnostic metatheory and do not mention ML. They govern the shape of a defensible answer and the checking discipline; they do not settle any empirical claim about a named dataset. Mode `specified`, never `grounded`. |
| "no figure line governs" | **Not the case.** Twelve figure lines bear directly (F1 to F11). This is a structural verdict with `gap` only on the ground reading of a named pattern. |
| Fig 13 strain | **Dissolved by re-census.** Fig 13 governs composition across the two kinds, not the usefulness of a statistical model. |
| Fig 5 vs simplicity | **Not strained.** MDL bargain and parameter count are different quantities. |

### Updated verdict

The shape survives: ML can narrow a candidate set of regularities, and the guards against misleading correlation are figure-licensed and independently corroborated. What does not survive is the strong reading that a model output is knowledge about the Earth system without a ground reading. The result is `specified`, ungrounded, and `candidate` until a source-discriminating instrument pays for a named pattern.
