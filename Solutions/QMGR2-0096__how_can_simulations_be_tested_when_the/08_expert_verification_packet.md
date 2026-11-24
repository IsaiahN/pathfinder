# Expert verification packet — the Tether on testing early-universe simulations

**What this is:** a claim in a form a simulation-validation researcher or observational cosmologist can check. Mode, derivation and refuters are stated before the conclusion.

**Mode: `general` structurally, `specified` for early-universe cosmology, not `grounded`.** No claim here has been settled by a measurement taken for this package.

## 1. The claim, in one paragraph

A simulation cannot be tested by internal consistency or by agreement with other simulations that share its inputs. It must be ranged against a ground that does not move when the model changes. For the early universe that ground is the observed universe, accessed through independent probes (CMB, BBN, large-scale structure) rather than a laboratory recreation. The test protocol must write its per-slot observables before choosing a tool, commit a prediction before the measurement, use analogues and harnesses for wiring only, enumerate second-order systematics, report the round-trip gap between the model and the published claim, and name which reach limit was hit. The absence of a laboratory recreation changes the route to the ground, not the necessity of one. This is a shape, not a certificate for any named code.

## 2. Three checkable sub-claims

### C1 — framework-internal; checkable by reading Figures 1, 2 and 11

- **Statement:** a frame cannot validate itself; the anchor must not update on the frame; a test harness proves wiring, never capability.
- **Sources, verbatim:**
  - Fig 1 :23 "The ground enters as the only metric." and Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."
  - Fig 2 :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."
  - Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
- **What to check:** do these three lines say what the claim says, or is the claim straining them? Read them in `FRAMEWORK/reference/03-FIGURES_TEXT.md` with their line numbers.
- **Refuter:** a simulation settled as correct by internal consistency alone with no observation; or an analogue shown to establish capability for the actual universe rather than correct wiring; or a proposed ground whose value changes when the model is edited.

### C2 — field-facing; checkable by a V&V researcher or cosmologist against their own practice

- **Statement:** independence, not count of simulators, is what makes agreement meaningful; the real low-overlap pair in cosmology is CMB versus BBN; a post-hoc fit does not carry the weight of a pre-committed prediction.
- **Sources, verbatim:**
  - Fig 2 :31-32 "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."
  - Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
  - Fig 5 :43-44 "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."
  - World corroboration (secondary, opened 2026-11-23): W5 (Big Bang nucleosynthesis, Wikipedia) states that "BBN and the formation of the CMB are separated by roughly 400,000 years of evolution; they are two independent epochs in cosmology... Concordance between these epochs is observed, and so Lambda-CDM passes this consistency test." W1 (Verification and validation, Wikipedia) states: "It is entirely possible that a product passes when verified but fails when validated."
- **What to check:** is the CMB/BBN concordance genuinely low-overlap, or does it share an evidence pool through a common prior? Is the internal/external V&V distinction a real disciplinary distinction rather than a figure-imposed one? Would you weight a pre-registered prediction differently from a post-hoc fit?
- **Refuter:** two simulations sharing all inputs and data counted as two independent witnesses; or a demonstration that the CMB and BBN determinations of the baryon-to-photon ratio draw on one evidence pool and so are one witness; or post-hoc fits shown to carry identical weight to surviving pre-committed predictions.

### C3 — reachability; checkable by an instrument scientist or numerical modeller

- **Statement:** instruments are extended from worse instruments already returning something; a sensor for a never-registered quantity cannot be specified from a description alone; unreachable-at-budget and underivable-in-this-closure are different facts with different remedies.
- **Sources, verbatim:**
  - Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something."
  - Fig 6 :40 "What is unavailable is a sensor for something that has never registered anywhere, at any resolution. That is the whole of it."
  - Fig 8 :40-43 "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions. Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."
- **What to check:** does the COBE to WMAP to Planck chain (world source W4) fit Fig 6 :32? Is there a counterexample where a novel instrument was specified purely from theory without a prior reading and succeeded? (Neptune is claimed as a theory-first case in Fig 6 :38; check whether it really was one.)
- **Refuter:** a description-built sensor for a never-registered quantity that succeeds; or a case where more search and an import yield indistinguishable results at indistinguishable cost.

## 3. What is explicitly not claimed

- Not a validation of any named simulation, code, likelihood or cosmological model.
- Not a claim that the early universe can be recreated in a laboratory. The analogue is a substituted habitat and proves wiring only.
- Not a claim that agreement among simulators is corroboration. Shared inputs make one witness.
- Not a claim that resolution, particle count or CPU-hours are evidence. They are budget filters.
- Not `grounded`. This packet states a shape and its refuters; it reports no new measurement.

## 4. Provenance

- Derivation: this folder, `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `09_watson_answer.md`, `10_source_ledger.csv`, `11_audit.md`.
- Figure text extracted verbatim from Isaiah's 13 figures plus the Operators and Symbols tables: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Cite as `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Checking rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- Nine world sources opened 2026-11-23; URLs, authors, venues, years, accessed dates and exact quotes in `10_source_ledger.csv`.
- Compiled 2026-11-23.

## 5. What would settle it

The claim is about method, so a ground pays when the method is applied:

1. Pre-commit a prediction for a not-yet-measured slot and test whether it survives the new measurement.
2. Compare the marginal leverage of a new independent probe against more runs of the same code.
3. Show a harness success that changes contact with the real universe, or show that none can.
4. Return a refutation from a checker selected from the residual, not from agreement.

## 6. What an expert can check in twenty minutes

1. Open `FRAMEWORK/reference/03-FIGURES_TEXT.md` and read the nine short passages quoted in C1 to C3. Confirm or correct the line numbers.
2. Say whether the CMB/BBN concordance is genuinely low-overlap in your field, or whether it shares a prior.
3. Name one instrument that would discriminate a currently degenerate reading, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. By the framework's own rule (Recursive Self-Improvement Trap: LLM output is a simulacrum) it cannot settle the claim it reports on.
