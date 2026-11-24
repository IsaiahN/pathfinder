# Expert verification packet - REA-0029, self-reasoning and assumption failure

**What this is:** a claim in a form a researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on the missing instrument. Not `grounded`.** No measurement of any actual system is claimed here. This packet is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

The question is a union of conditions, so it gets four verdicts and one gap, never a single yes or no. A system can enumerate the assumptions it holds as bound, predicting terms and rank them by a residual that persists and does not trend down, so it can reason about a proper subset of its assumptions. It cannot see the unbound preference that sets the direction of its own question: that object is not a term, predicts nothing and accrues no residual. Detecting that an assumption no longer applies is a relation to a reference that does not update on the system's own report, so a system's own confidence cannot serve as that reference. Certifying the whole set from inside is not available, because a consistent system cannot prove its own consistency and the witness is always imported. A second frame can carry the correction only if it cannot reconstruct the claim and does not share the author's evidence pool. The instrument that would turn an unbound preference into a refusable term is a declared `gap`.

## 2. Three checkable sub-claims

### C1 - the per-domain verdict split is figure-internal; checkable by reading Figures 1, 5 and 8

- **Statement:** "reason about own assumptions" is not one operation. Bound terms are enumerable and rankable; the unbound direction is invisible; whole-set certification is underivable. These are different quantities and are not averaged.
- **Source, verbatim:** Fig 5 :58 *"The candidates are ENUMERABLE rather than intuited: every term currently bound and generating a prediction is a candidate for being the wrong one."* Fig 5 :62 *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no"*; Fig 5 :63 *"residual, so nothing here can see it. Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION"*. Fig 8 :34 *"A frame cannot reach its own metaframe. Godel's second theorem: a consistent system cannot prove its own consistency."*
- **What to check:** are the four objects (bound term, unbound preference, ground relation, metaframe) actually distinct in the figure text, or has the packet split one quantity into four by fiat?
- **Refuter:** demonstrate a frame that ranks a term it does not hold, accrues residual for a preference, and refuses it internally, or show that Fig 5 :58 and :62 govern the same object. Either breaks the split.

### C2 - world-facing; checkable by a cognitive scientist, ML researcher or formal-methods researcher

- **Statement:** detection of "no longer applies" is not a property of an internal score. It requires a reference that does not move when the frame changes its mind, and it must be indexed per assumption rather than pooled. Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 2 :33 *"The anchor must not update."*
- **What to check:** (a) In calibration research, Guo, Pleiss, Sun and Weinberger (ICML 2017, https://arxiv.org/abs/1706.04599) report that *"modern neural networks, unlike those from a decade ago, are poorly calibrated"* and that calibration is measured against true correctness likelihood. Does that support the claim that a model's own confidence cannot be its verdict? (b) In metacognition research, the Wikipedia entry on metacognition (retrieved 2026-11-23) records that *"not all metacognition is accurate"* and distinguishes Monitoring from Control. Does a Monitoring-versus-Control distinction map onto the figure's prediction-versus-ground distinction? (c) In software runtime verification (Wikipedia, retrieved 2026-11-23), monitors can be *"integrated into the system"* or *"provided as an external entity"*. Does the external-specification case genuinely satisfy the non-updating-anchor condition, and does the internal-author case fail it?
- **Refuter:** a system that reliably detects a false held assumption across novel tasks using only a score computed from its own outputs, with no external reading, no second frame and no change of contact. That breaks Fig 1 :27 and Fig 2 :33. A second refuter: a runtime monitor whose specification is authored by the monitored frame and whose verdict is nonetheless confirmed by an independent ground.

### C3 - the verification condition; checkable by anyone who has run a blind check

- **Statement:** a checker that can reconstruct the claim from the claimant's own record is not a checker, and two frames sharing an evidence pool are one witness. Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."* Fig 10 :43 *"Soundness requires the checker to be unable to produce what it is checking. Never a player, never a proxy, never the author of a verdict or an atom."* Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
- **What to check:** in any proposed check of this packet, can the checker derive the four verdicts from the framework's own text alone? If yes, the check is an echo. Do the checker and the author draw on different evidence? If no, the agreement is one pool talking. Also check the open type question S4: for a formal assumption, what plays the role of the anchor? The figures define it functionally (Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks"*) but do not state the type.
- **Refuter:** a verifier that is demonstrably unable to produce the claim, shares no evidence pool with its author, verifies it soundly against a ground, and does so without importing an atom. That breaks Fig 10 :42-43. A live strain, not a refuter: a formal assumption may have a proof checker in a differing frame as its anchor; the packet records this as open rather than solved.

## 3. What is explicitly not claimed

- Not that any actual AI system has, or lacks, self-knowledge. No system was tested.
- Not that a confidence score, loss value or accuracy figure is a verdict on assumptions.
- Not that a second copy of a system is an independent frame. Two frames with the same closure are one frame wearing two names (Fig 8 :48-49).
- Not that an internal runtime monitor proves self-reasoning. It counts only when its specification is imported with provenance and a shadow test (Fig 8 :12-14).
- Not that the metaframe limit forbids checking any particular assumption. Fig 8 :40-43 distinguishes underivable from unreachable-at-budget, and D2 is a `yes` under conditions.
- Not that the missing instrument is impossible, and not that it exists. D5 is `gap`, reported as `unreached`.
- Not `grounded`. Nothing in this packet was settled by measurement.

## 4. Provenance

- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`; the local extract is the authority for every figure quote here.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, a copy of `figures/README.md`, branch `general-agent`, public on GitHub.
- Eight-step loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- Eight essays by Isaiah N, 2026; four opened directly this session (Recursive Self-Improvement Trap, Hard Problem is About Source, Library of Babel, Decoding Tacit Knowledge), four carried from the exemplar's canonical mapping and marked as such in `05_what_shape_means.md`.
- World sources opened 2026-11-23: SEP Gödel's Incompleteness Theorems; SEP Self-Knowledge; Wikipedia Metacognition; Guo et al. 2017 (ICML); Wikipedia Runtime verification. Full details in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A discriminator, not an argument. From *The Hard Problem is About Source*: an instrument *"cannot comment on the source"*, and *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* Concretely:

1. **Per-slot test:** does the residual stay indexed per assumption, or is one global score reported?
2. **Non-updating-anchor test:** does the reference hold still when the system revises its own report?
3. **Refusal test:** does the record gain a refusal term (Operators table :58, negation), or only a re-fitted parameter (Fig 5 :13)?
4. **Direction test:** can the system bind its sought-for shape as an ordinary term and show that term's residual over time (Fig 5 :65)? A positive result closes D5.
5. **Verifier test:** can a checker that cannot reconstruct the claim return a sound verdict against the ground (Fig 10 :42-43)?

## 6. What an expert can check in twenty minutes

1. Read Fig 5 :58-68, Fig 8 :34-43, Fig 1 :27 and Fig 10 :42-43. Four short passages.
2. Check C1: are the four verdicts distinct objects in the figure text, or has the packet invented a split?
3. Check C2 against your own field: does the calibration or metacognition or runtime-verification evidence support the non-updating-anchor condition, or only something like it?
4. Name one instrument that would close D5 in your field, or say why none is available now.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on. No agreement with it should be counted as corroboration unless the checker satisfies C3.
