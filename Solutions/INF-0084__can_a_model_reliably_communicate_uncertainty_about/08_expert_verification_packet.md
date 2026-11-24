# Expert verification packet: the Tether on model uncertainty communication

**What this is:** a claim in a form a machine learning researcher or a metacognition researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` for the shape, `specified` when applied to current models, not `grounded`.** No source-discriminating instrument was run in this derivation. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

The question "Can a model reliably communicate uncertainty about unfamiliar inputs, or does it mainly reflect the limits of its training and evaluation?" bundles two overlapping conditions, calibration on familiar inputs and detection of unfamiliar ones, which must be searched separately and never averaged. A model's own uncertainty score cannot establish that the score is reliable, because a frame cannot score itself with a quantity it also produces. A model inside its own closure cannot tell "I have not seen this" from "I cannot represent this", so a low-confidence flag reports the indistinguishability rather than the cause. The standard verification frame uses an eval set drawn from the training pool, which is a convention promoted to a decider rather than an anchor. The figure-licensed shape of a reliable report is a refusal that ranges against an anchor outside the training and evaluation pools. Under current practice that anchor is usually absent, so the report mainly reflects the limits of training and evaluation. This is offered as a candidate with a written refuter, not as a measurement.

## 2. Three checkable sub-claims

### C1, framework-internal; checkable by reading Figures 1 and 5

- **Statement:** a self-reported uncertainty score cannot, by itself, establish that the report is reliable.
- **Source, verbatim:** Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 5 :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."
- **Why it bears:** confidence is an output of the frame being checked. A benchmark average over familiar inputs cannot supply the missing check on the unfamiliar slot (Fig 1 :19 "The residual is indexed by object slot, not aggregated.").
- **Refuter:** exhibit a composition where the reported confidence is settled by an external measurement and its standing to be composed over comes from that settlement. If shown, this sub-claim fails for that composition.

### C2, empirical-facing; checkable by an uncertainty or OOD researcher

- **Statement:** a confidence flag cannot discriminate depth (not seen) from genuine absence (cannot represent) from inside the frame, and the usual eval pool is not an anchor for this question.
- **Source, verbatim:** Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 10 :47 "a convention that decides an outcome has stopped being one."
- **What to check:** is there an instrument that, on the same input, distinguishes unseen-from-unrepresentable? Guo et al. (2017) and Ovadia et al. (2019) report calibration failure under shift; Hendrycks and Gimpel (2017) show softmax is only a baseline for OOD detection. Do any of these supply an anchor that does not move with the model family?
- **Refuter:** an experiment where the signal tracks ground-truth error on inputs provably disjoint from training and evaluation, stable across two or more independent model families. That would move the report from mirror to anchor.

### C3, structural; checkable by re-census and by re-reading the figure

- **Statement:** the disjunction is a union compound, not a partition, and a confidence number prices a description while the question asks about a settlement.
- **Source, verbatim:** Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again" and Fig 12 :125 "A composition costs in two currencies, and they do not add." Also Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
- **What to check:** can calibration on familiar inputs and novelty detection be separated by a decidable internal boundary? If so, the union claim is wrong and one loop suffices. Can description cost and settlement cost be expressed in one unit? If so, the two-currency claim is wrong.
- **Refuter:** a decidable partition boundary between the two conditions, or a single unit in which the two costs are commensurable.

## 3. What is explicitly not claimed

- Not that models never emit useful uncertainty signals. Fig 8 :39 "So a search that finds nothing is never a proof of absence." This derivation ran no instrument.
- Not that calibration is worthless. It is a filter for the budget, not a witness for the verdict (Fig 9 :60).
- Not that the human metacognition results are an independent second witness. They are world corroboration only and share the question framing.
- Not a theory of everything, not a new primitive, and not a derivation of one field from another.
- Not `grounded`. Nothing here is asserted as settled by experiment.

## 4. Provenance

- Question: Information Theory.txt line 103, section 9, Information in AI and machine learning.
- Figure text extracted verbatim in `FRAMEWORK/reference/03-FIGURES_TEXT.md`; canonical usage in `FIGURES_README_canonical.md`; metalaw reading in `60_FIGURES_AS_METALAWS.md`.
- Derivation files in this folder: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `09_watson_answer.md`, `10_source_ledger.csv`, `11_audit.md`.
- World sources opened 2026-11-23: Guo et al. 2017 (ICML), Kendall and Gal 2017 (NIPS), Ovadia et al. 2019 (NeurIPS), Hendrycks and Gimpel 2017 (ICLR), Fleming 2024 (Annual Review of Psychology), Jin et al. 2022 (Psychonomic Bulletin and Review), and four essays by Isaiah N. Full URLs and quotes in `10_source_ledger.csv`.
- Packet compiled 2026-11-23.

## 5. What would settle it

An anchor, not agreement. From The Hard Problem is About Source: an instrument that reads green "cannot comment on the source"; the spectrometer resolved it. Here:

1. **Anchor test:** uncertainty tracks ground truth on a provably disjoint distribution, stable across independent model families.
2. **Source test:** an instrument discriminates input noise (aleatoric) from model absence (epistemic) on the same case.
3. **Currency test:** a demonstration that the number was paid for by the ground rather than by a cheap description fit.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :27, Fig 5 :48, Fig 6 :27, Fig 9 :54 and Fig 12 :125, five short passages in `FRAMEWORK/reference/03-FIGURES_TEXT.md`.
2. For C2, name one anchor for "unfamiliar input" that does not move with the model family, or say why none is available.
3. For C3, say whether calibration and novelty detection form a partition in your experience, or an overlapping union.
4. Send the refutation. A failure is more useful than an endorsement, and later agreement is never pooled as corroboration.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
