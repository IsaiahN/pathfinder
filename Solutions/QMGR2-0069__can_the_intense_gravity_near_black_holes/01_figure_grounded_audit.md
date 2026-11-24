# Figure-grounded audit: can intense gravity near black holes reveal departures from GR?

**Mode of this document: `specified` on the design claim, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: SIMULATED DERIVATION, not a ground reading.** From the Recursive Self-Improvement Trap, opened this session: *"The catch is that the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. ... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement was taken by this agent.

**Figure source.** All `Fig N :line` quotes are verbatim substrings of `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Nothing is quoted from a summary.

---

## 0. The residual, in effect terms

GR is a frame Γ_GR. It predicts an observation for a strong-field system given a belief and an action: waveform phase, ringdown quasi-normal mode frequency and damping time, shadow diameter and shape, polarisation content, propagation speed. Instruments near black holes return observations o'. The residual is

```
R_s = | Γ_GR(b, a) − o' |     per observable slot s
```

The question decomposes into two different questions that must not be averaged:

1. **Can the configuration reveal a departure?** This is a reachability and instrument question. Does a near-black-hole observation count as an anchor, do we have terms for the observables, and can a residual register at all?
2. **Does it actually reveal one?** This is a ground question. Only a measurement can answer it. The figures do not answer it, and this simulation certainly does not.

**Arity.** The residual is not one scalar. It is a bundle of independent slots: inspiral phasing, merger nonlinearity, ringdown modes, shadow geometry, polarisations, dispersion, echoes. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A global "GR passes" can hide one live slot.

**Symmetry.** The slots are not interchangeable, and a threshold relation is not a symmetric join. One departure may appear in several slots; a single lever clearing one slot leaves the intersections standing (Fig 9 :54-58). This is a union compound, not a single hard question.

**Scale.** Strong-field, near-horizon, dynamical and nonlinear. This is categorically different from weak-field tests, which is exactly the point Berti et al make in the world literature. It is not "the same test, only stronger."

---

## 1. Domain census (before any figure line is chosen)

One line per domain: actors, currency, anchor. A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | anchor | partition or union | status |
|---|---|---|---|---|---|
| D1 GR theory frame | Einstein equations, Kerr/Schwarzschild solutions, QNM spectrum, waveform templates | predicted observable values | internal consistency plus weak-field agreement | a frame, not the ground; it ranges against the ground | cannot certify itself |
| D2 strong-gravity measurement frame | GW detectors (LIGO, Virgo, KAGRA), VLBI imaging (EHT), X-ray timing and spectroscopy | measured observables with error bars | the instrument reading, which does not move when GR's prediction changes | the ground for this question | live anchor already returning readings |
| D3 alternative-theory / departure identity frame | modified-gravity models, parametrised deviations (PN and ppE coefficients, graviton mass, polarisation modes) | deviation from a GR prediction | would require a measurement to name a specific departure | union with D2 at the contact | **gap for a name**, shape characterisable |
| D4 verification / outreach frame | expert readers, independent instruments | agreement and residual | the ground, never agreement | separate seats, but in this run all share one evidence pool | independence zero in this simulation |

**Order by dependency (Fig 3).** The chain is ordered by dependency, not importance. Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

1. **Perception:** does the instrument return a reading at all? Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*
2. **Vocabulary:** do we have terms for the observable (templates, QNM basis, shadow model)? Fig 3 :6-7: *"it has terms for what things afford: what can be moved, opened, joined, blocked"*
3. **Objective:** what would count as a departure? This is the pre-registered refuter, written before the run.
4. **Planning:** which slot, which instrument, which comparison.
5. **Learn and carry:** record the result with provenance so a later reader can locate the error.

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* For question 2 above, the objective link has no instrument in this simulation, which is why it is marked unreached rather than answered.

**Strain test applied before choosing lines.** An earlier draft of this audit imported Fig 13 :75 (*"Two states never bond directly..."*) by analogy with the exemplar QMGR-0037, reading "gravity" as a Gradient between Space and Time. Strain test: that line governs composition of the six-term substrate, not the design of a theory test. It only fit by treating a measurement question as a composition question. Per the rule that a strained line governs another quantity, it was withdrawn. The retraction is preserved in section 6. No remaining finding depends on the substrate composition rule.

---

## 2. Findings F1 to F9

### F1 - The anchor is the measurement, not GR (decisive for question 1)

Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :25: *"pinned: it does not update on A or B"*. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

A test that uses GR's own prediction as its anchor is Fig 2's panel 1 (mutual update): the frame and its check converge on whoever had the most influence. Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* The near-black-hole observation is the anchor precisely because it is constitutively about the strong field (Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*).

**Verdict:** triangulated across Fig 2 (anchor definition) and Fig 10 (ground maintainer), with low overlap between the alignment figure and the seat figure. **Mode: `specified`.** Refuter: show that a candidate anchor shifts when GR's predicted waveform is changed, which makes it another frame, not an anchor.

### F2 - Residual per slot, never aggregated

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :20-21: *"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert one."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

The world literature does exactly this: GWTC-3 tests residual power, post-Newtonian deformation coefficients, spin-induced quadrupole moments, quasi-normal mode frequencies and damping times, polarisations, dispersion and echoes separately. That is per-slot testing, not an averaged "GR pass."

**Verdict:** triangulated across Fig 1 and the method actually used in the opened GWTC-3 abstract (low overlap: figure law versus collaboration method). **Mode: `general`** for the law, `specified` for its application to GW tests. Refuter: exhibit an aggregate statistic in which one live slot is invisible and show the field treats the aggregate as the verdict.

### F3 - A departure is a refusal, not a new molecule

Fig 5 :50 first sentence: *"AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it."* Fig 5 :53: *"refuted: a term we hold is wrong; a term is owed that says so"*. Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*.

A departure from GR does not add a new term beside GR. It refuses a term GR holds. This matters for the search: a frame that only accumulates can accommodate any anomaly with a new parameter and never register a refusal. The negation operator (¬, unary) is required; Fig 12/Operators amendment :73-74: *"Subtraction is the nearest bond and is not it. − is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim."*

**Verdict:** triangulated across Fig 5's fifth kind and the Operators table's negation entry. **Mode: `general`.** Refuter: show a framework that can only accumulate terms still registering a genuine departure as a departure rather than as a refit.

### F4 - The instrument condition is already satisfied in strong gravity

Fig 6 :33: *"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."* Fig 6 :34-35: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*

Strong-gravity tests did not begin from a description. They grew from readings already returning something: binary-pulsar timing, then the first GW merger and its ringdown (GW150914), then horizon-scale imaging (M87). Fig 6 :32 (above) states the rule. So question 1 is not blocked by the proto-instrument condition. This is a `grounded` report about the opened world sources, used as secondary corroboration only; the figure law itself is `general`.

**Verdict:** triangulated across Fig 6 and three independent world instruments (GW, VLBI, X-ray), low overlap. **Mode: `general` (law), `grounded` (the historical claim that readings exist).** Refuter: identify an observable slot where no instrument has ever returned a reading at any resolution, in which case the inward track has no edge to extend from.

### F5 - No detection is not a verdict that GR is correct

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*

The opened papers are careful on exactly this point. GW150914: *"In conclusion, within our statistical uncertainties, we find no evidence for violations of general relativity in the genuinely strong-field regime of gravity."* GWTC-3: *"We find no evidence in support of physics beyond GR."* These are reports of no detection at a given sensitivity, not proofs of GR. The Stanford Encyclopedia entry on Popper, opened this session, gives the low-overlap corroboration: *"an exception, far from 'proving' a rule, conclusively refutes it"* and a theory that withstands testing receives *"corroboration"* and is *"retained provisionally as the best available theory until it is finally falsified."*

**Verdict:** triangulated across Fig 8, Fig 6, Fig 9 and a philosophy-of-science source with a different evidence pool. **Mode: `general`.** Refuter: show a figure line or a valid argument that treats a null result as verification. None was found after re-census.

### F6 - Independence decides whether agreement means anything

Fig 2 :31-32: *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 8 :50: *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."*

Consequences for this field: GW150914 and GWTC-3 share the LIGO/Virgo instrument family and much of the analysis pool, so they are one witness twice, not two. GW plus EHT shadow plus X-ray timing are genuinely different instruments and count as low-overlap frames. Two popular articles quoting the same catalog are one frame wearing two names.

**Verdict:** triangulated across Fig 2 and Fig 8. **Mode: `general`.** Refuter: exhibit two "independent" confirmations that in fact draw on one data release, and show they were counted as two.

### F7 - Filters are for the budget, witnesses are for the verdict

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

A significance threshold, a tier label, a confidence level, a catalog size: these decide what gets tried and how much budget to spend. They do not decide whether a departure exists. The world papers themselves use such filters (for example GWTC-3 restricted to 15 confident signals with false alarm rates at or below 10^-3 per year); that is a budget filter, correctly used, and it is not a witness for the verdict.

**Verdict:** single-source for the figure law (Fig 9), corroborated by the practice visible in the opened abstracts. **Mode: `general`.** Refuter: show a case where a pre-set significance level is treated as proof of GR's correctness rather than as a search threshold.

### F8 - The identity of a departure is a genuine gap

After a genuine re-census, no figure line names which departure could appear, which modified gravity is right, or what a deviation would be made of. What the figures return is a shape: a refused term at a slot, registered by an independent anchor, with a refuter written in advance. Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. The canonical figures README (local copy read this session) states the limit as *"a shape, not a name."*

This is a `gap` for the specific departure, not a silence about it. The shape is stated; the name is owed and only a measurement can pay for it.

**Verdict:** `gap` for D3's anchor and name; shape available for question 1. **Mode: `general`.** Refuter: produce a figure line that derives a specific modified-gravity term from the six-term substrate without an import; that would close this gap and make this finding wrong.

### F9 - What survives

| claim | mode | figure / source |
|---|---|---|
| A near-black-hole measurement can be an anchor that does not update on GR's opinion | `specified` | Fig 2 :29-30, :35 |
| The residual must be read per observable slot, never averaged | `general` (law), `specified` (application) | Fig 1 :19, :22 |
| A departure is a negation of a held term, not an added parameter | `general` | Fig 5 :53, Operators :58 |
| The instrument edge already exists in strong-gravity observation | `general` (law), `grounded` (history) | Fig 6 :33-35, world sources |
| A null result is corroboration, not proof of GR | `general` | Fig 8 :39, Popper (SEP) |
| Which departure is correct | `gap` | Fig 9 :32, Fig 13 :134 |

---

## 3. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written before the run is a design instrument, not only an honesty device. The claim under test is the design claim of F1 to F4 plus the honest stop of F5 and F8. It is refuted if any of the following holds:

1. **Anchor failure.** A candidate strong-gravity observable is shown to move when GR's predicted waveform is changed, so it is a frame rather than an anchor (breaks F1, Fig 2 :30).
2. **Persistent slot residual.** A single observable slot returns a residual that persists and does not trend down under retesting with an independent instrument, and cannot be absorbed by GR's own vocabulary. Formula step 2 names the signal: a residual that *"PERSISTS AND DOES NOT TREND DOWN"* points to the term to refuse. If this fires, a departure is owed and the stop in F5 must be reopened (breaks F5, F8).
3. **False gap.** A figure line is found that derives a specific departure term from the held atoms without an import, or a ground reading settles a specific departure. Then F8's `gap` verdict is wrong.
4. **Aggregation error.** It is demonstrated that per-slot residuals are not required, that a global average is sufficient to locate a departure, and Fig 1 :19 is shown not to govern this domain (breaks F2).

Until one of these is run, no part of the physics answer may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the design claim, not with a verdict on GR. The claim is that the configuration is a valid test; the result of the test is not ours to give.
2. Keep slots separate. Report per-observable residuals with their instruments, and never publish an averaged "GR still stands" as the finding (F2).
3. Write the refuter before looking (section 3), and say what would count as a departure in effect terms: a persistent, non-trending per-slot residual corroborated by a low-overlap instrument (F3, F5).
4. Record independence explicitly. State which results share the LIGO/Virgo evidence pool and which come from a different instrument (F6).
5. Treat thresholds as budgets (F7) and null results as corroboration (F5).
6. Do not name a departure. The figures return a shape. A specific modified-gravity term is an import with a source gate and a shadow test, not a derivation (F8).

Fig 10 :52: *"Bring a characterised residual, never the source."* Send the shape and the refuter; offer the figures only after the reader has recorded a verdict.

---

## 5. Canonical usage check

Two local files govern how the figures may be used, both opened this session:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* And: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the instruments, recording the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the three questions of step 7 (SEARCHED, INWARD, OUTWARD), and the direction discipline (make the sought-for shape an ordinary term so it can accrue a residual).

Step 7 applied: no figure line closes the specific-departure question, so we ask SEARCHED first (is the term already in our closure and unfound? No named departure term is held, so SEARCHED does not apply), then INWARD (do we have an instrument for each slot? Yes, F4), then OUTWARD (which frame already predicts a departure's shape? That is exactly the world search: modified-gravity models in Berti et al, with a source gate). Importing against a budget limit would add an atom not needed, so the answer stays a shape.

### Retraction and confirmation log

| earlier reading | status after the canonical check and re-census |
|---|---|
| Fig 13 :75 (*"Two states never bond directly..."*) was initially used as decisive for the black-hole question, by analogy with QMGR-0037 | **Withdrawn.** Strain test failed: that line governs composition of the six-term substrate, not the design of a theory test. Recorded here rather than silently erased. No finding depends on it. |
| GW150914 and GWTC-3 were initially counted as two independent witnesses that "no departure is seen" | **Downgraded to one witness with two recordings.** They share the LIGO/Virgo instrument family and analysis pool (Fig 2 :40). EHT and X-ray remain low-overlap frames. |
| "No detection" was initially worded as "GR is confirmed" | **Corrected.** Corroboration, not verification (Fig 8 :39; Popper, SEP). Both opened papers say "no evidence for violations," not "proven." |
| F3 initially treated a departure as a new term composed inside Γ_GR | **Corrected to a refusal.** Fig 5's fifth kind and the Operators table's ¬ require negation, not accumulation. |
| The question was initially treated as one hard question | **Split into a design question and a ground question** (Fig 9 :54-58, union not partition). They have different answers and must not be averaged. |
| F8's gap initially read as a failure of the derivation | **Confirmed as a verdict.** Fig 13 :134 (*"Unreachable is a verdict here, not a silence"*) and the README's *"a shape, not a name"* make the gap the honest stopping point. |

---

## 6. Round trip note (expanded in `11_audit.md`)

Condensing the figures into the slogan "strong gravity can test GR if you measure per slot against an independent anchor" loses: (a) the refusal requirement of F3, (b) the no-proof-of-absence limit of F5, (c) the independence arithmetic of F6, and (d) the gap of F8. The round trip gap `R_T` is therefore nonzero. Treating the slogan as identical to the figure set would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a recorded gap.
