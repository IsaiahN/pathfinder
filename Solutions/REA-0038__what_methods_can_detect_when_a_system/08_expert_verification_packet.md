# Expert verification packet: detecting distribution-driven confidence

**What this is:** a claim about confidence calibration in a form a researcher can check. Mode,
derivation and refuters are stated before the conclusion, so a reader knows what to look for and
what would settle it.

**Mode: `specified` on the method shapes, `general` on the structural limit, not `grounded`.** No
measurement is claimed. This is a shape and a route, not a result. It is an LLM-assisted simulated
derivation, not a ground reading.

## 1. The claim, in one paragraph

A confidence value cannot certify its own source. The frequency structure of a training corpus and
the strength of evidence in the present case can produce the same scalar, so a method that reads
only confidence and model internals, with no held-out ground and no perturbation of the marginal,
cannot tell them apart. What can tell them apart is a procedure with five parts: a ground that does
not move when confidence moves; per-case rather than averaged reporting; a deliberate change of the
marginal with per-case evidence held fixed; two low-overlap readings whose gap is the signal; and a
provenance record, because sources that return the same number are separable only by their history.
Held-out calibration proves wiring, not contact. The method families in the literature satisfy
different parts of this shape and stand to one another as isomers, not as a winner and its runners
up. The framework returns that shape and refuses to name a single detector.

## 2. Three checkable sub-claims

### C1. Framework-internal, checkable by reading Figures 1, 5 and 8

- **Statement:** confidence is frame-internal, and two sources producing one reading are separable
  only by a record.
- **Source, verbatim:** Fig 1 :27, *"They are frame-internal. A frame cannot score itself with a
  quantity it also produces."* Fig 5 :48, *"Its own output is never a measure of success. A system
  can be enthusiastically curious and produce nothing."* Fig 8 :51, *"Convergent derivation and
  adopted import look identical in the contents. Only the record of where each came from separates
  them, and the surplus lives only where the closures differ."*
- **What to check:** is there any way for a frame to score a quantity it also produces? If yes, the
  three lines do not govern this domain and the re-census in `01` was wrong.
- **Refuter:** a method using confidence and model internals alone, no held-out ground and no
  perturbation, separates the two sources above chance and replicates on a different corpus.

### C2. Ground-facing, checkable with a calibration or OOD benchmark you know

- **Statement:** held-out calibration under one marginal is not a source discriminator; the
  discriminator is a change of marginal with per-case evidence held fixed, read through two
  independent measurements.
- **Source, verbatim:** Fig 11 :70, *"A test harness is a substituted habitat. Which is why a
  synthetic solve proves wiring and never capability."* Fig 2 :29, *"An anchor is whatever settles
  the question and does not change its answer because of what any frame thinks. A measurement, an
  experiment, a counter, a market, a patient outcome."* Fig 2 :31, *"Independence, between two
  frames, is how little they draw on the same evidence."* Fig 12 :126, *"Bits price the description.
  Actions price finding out whether it holds."*
- **What to check:** does post-hoc calibration keep its guarantee under a documented covariate
  shift? Does a scalar score and a ground-checked set give different answers under that shift? Can
  sensitivity and criterion be estimated separately for the system you study?
- **Refuter:** confidence tracks per-case ground across a documented shift with no source change in
  the provenance record, or the two readings provably cannot be separated under any admissible
  probe.

### C3. Aggregation and round trip, checkable by inspection of any calibration report

- **Statement:** an averaged calibration statistic can hide a live per-case signal, and the gap
  between the one-line claim and its concretisation is the measurement, not noise.
- **Source, verbatim:** Fig 1 :19, *"The residual is indexed by object slot, not aggregated."* Fig 1
  :22, *"Aggregating across slots is how a live signal disappears into an average."* Fig 4 :30, *"So
  take the round trip and measure the gap. Without it you are navigating by dead reckoning:
  confident about a position nobody checked."*
- **What to check:** take a published reliability diagram with a good overall ECE. Are there
  subgroups or slots with a large gap? Carry the paper's one-sentence conclusion into one concrete
  case: what does it lose?
- **Refuter:** an aggregate statistic that fires on a planted single-case source substitution while
  per-case readings are withheld, replicated on a second corpus.

## 3. What is explicitly not claimed

- Not that confidence is useless. It is a filter for the budget, not a witness for the verdict
  (Fig 9 :60, *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you
  a verdict."*).
- Not that calibration, signal detection theory or conformal prediction is a Tether result. Each is
  a provenanced import from a frame whose closure differs.
- Not that there is one universal detector. Fig 9 :32, *"you get a kind of thing, never the answer
  itself."*
- Not `grounded`, and not a human-verified result. This packet is an LLM-assisted simulated
  derivation checked for internal consistency against the figures.
- Not a claim about any named model, dataset or lab.

## 4. Provenance

- Question: REA-0038, `Questions/reasoning.txt` line 47, section 4.
- Figure text: verbatim extraction at `local: FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and
  re-checked 2026-11-23. Cited as `Fig N :line`.
- Canonical usage rule: `local: FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Loop and mode rule: `local: FRAMEWORK/figures/THE_FORMULA.md`.
- World sources read 2026-11-23 and recorded with quotes in `10_source_ledger.csv`: Guo et al. 2017,
  Ovadia et al. 2019, Hendrycks and Gimpel 2017, Angelopoulos and Bates 2021/2023, Lynn and Barrett
  2014, Tversky and Kahneman 1974, Casscells et al. 1978, and five framework essays. All are
  secondary and carry no verdict weight.
- Pre-registered refuter in `01_figure_grounded_audit.md` §4 was written before this packet.
- Compiled 2026-11-23 by an LLM agent. A human owner must check and own any submission.

## 5. What would settle it

A source-discriminating instrument. From *The Hard Problem is About Source*, opened 2026-11-23: an
instrument that reads green *"cannot comment on the source"*, and *"The answer is unreached until a
better instrument exists."* Here:

1. **Marginal test:** hold evidence fixed, change prevalence or covariate shift, and see whether
   confidence follows the marginal.
2. **Two-reading test:** separate sensitivity from criterion, or compare ground-checked coverage
   with the reported score, across the shift.
3. **Provenance test:** does a known source substitution change the record as well as the reading?
4. **Round-trip test:** does the one-line conclusion survive concretisation without losing per-case
   identity?

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :27, Fig 8 :51, Fig 11 :70 and Fig 12 :126, four short passages.
2. Check C2 against a benchmark you know: does post-hoc calibration survive a shift you have
   actually measured?
3. Name one instrument that would separate a prior-driven from an evidence-driven confidence on that
   benchmark, or say why none exists.
4. Try to break C3 with a counterexample from a paper you have read.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the
figures, not a ground reading. It cannot settle the question it reports on.
