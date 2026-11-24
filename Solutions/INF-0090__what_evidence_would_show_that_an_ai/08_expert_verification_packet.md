# Expert verification packet — what would count as evidence of flexible AI use

**What this is:** a claim in a form a researcher on generalization, evaluation or compositionality can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the shape, `general` on the method-versus-recording distinction. Not `grounded`.** No measurement of any AI system is claimed. This is a shape and an instrument list, not a result. It is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

A higher score on a familiar benchmark does not discriminate "the system holds a method it can reapply in a new context" from "the system reproduces associations familiar from training." The figures return the shape of evidence that would discriminate them: a compressed method carried across a change of arrangement with the round trip gap measured (not assumed zero); a residual reported per context rather than averaged; a same-atoms, different-bond transfer check; at least two low-overlap instruments ranged against an anchor that does not update; a description-length bargain that rejects a term explaining one occasion perfectly; and a failure condition written down before the test. The framework names no specific benchmark and claims no system passes. What it offers is the shape the evidence must have, refuters written in advance, and the instruments that would close the question.

## 2. Three checkable sub-claims

### C1 — framework-internal; checkable by reading Figures 4, 1 and 12
- **Statement:** flexible use and familiar association are different quantities, and the cheapest discriminator is a same-atoms, different-bond transfer check with a measured round trip.
- **Source, verbatim:**
  - Fig 4 :23 *"upward: a method that can be reapplied. Never the recording of a particular success."*
  - Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one."*
  - Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
  - Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
  - Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
- **Refuter:** a system fully described by a lookup of training associations shows a round trip gap indistinguishable from a method-holding system across bond changes with atoms fixed; or the system transfers equally when the bond is changed and when it is preserved, so the isomer manipulation has no discriminating power.

### C2 — verification-facing; checkable by anyone who has run transfer experiments
- **Statement:** agreement between benchmark families that share a corpus, metric or author team is one witness, not corroboration; the outside frame must not hold the interiors.
- **Source, verbatim:**
  - Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."*
  - Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
  - Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
  - Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."*
  - Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
- **What to check:** are the two instruments actually low-overlap? Does the verifier see only the residual and the shape claim, not the model's internals? Is the anchor something that does not change its answer when a frame pushes on it (Fig 2 :29-30)?
- **Refuter:** the instruments draw on the same corpus, metric family or author team; or the anchor moves when a frame pushes on it. either fires the disqualification, not the claim.

### C3 — evaluation-facing; checkable against the measurement literature
- **Statement:** a single aggregate score with a pre-registered refuter is still not enough; the reading must discriminate sources, and a term that explains one occasion perfectly fails the bargain.
- **Source, verbatim:**
  - Fig 5 :44 *"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."*
  - Fig 5 :48 *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*
  - Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
  - Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*
- **World corroboration, secondary only:** Geirhos et al. 2020 report shortcuts that "perform well on standard benchmarks but fail to transfer to more challenging testing conditions"; Schaeffer et al. 2023 show apparent emergent abilities "due to the researcher's choice of metric rather than due to fundamental changes in model behavior." These corroborate the figure lines; they do not outrank them.
- **Refuter:** show a case where the aggregate score is itself the discriminating observation, so no per-context or source-discriminating instrument is owed; or show that "no proof of absence" is being used to shield a claim that has actually been refuted.

## 3. What is explicitly not claimed

- Not that any named system uses information flexibly. No measurement was taken.
- Not that a benchmark exists which the figures endorse. That row is a `gap`: Fig 9 :32 *"you get a kind of thing, never the answer itself."*
- Not that the 2023 Nature result (Lake & Baroni, MLC) is correct, nor that the 2026 TACL rebuttal (Goodale & Mascarenhas) is correct. Both are world sources, secondary; the conflict sends us back to the census.
- Not that in-distribution accuracy is worthless. It is a filter for the budget, never a witness for the verdict.
- Not that ARC, SCAN or BIG-bench settles the question. Fig 11 :70 *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*
- Not `grounded`, and not a derivation of one world paper from another.

## 4. Provenance

- Figure text extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables: local `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Every `Fig N :line` above was checked against it.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` and public `https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md`.
- Eight-step loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, especially step 7 and "Direction."
- Eight essays by Isaiah N, 2026. The three read for this question are listed in `05_what_shape_means.md`; the rest are carried from the exemplar's read and marked as such.
- World sources fetched 2026-11-23 and recorded with quotes in `10_source_ledger.csv`: Geirhos et al. 2020, Lake & Baroni 2018 and 2023, Goodale & Mascarenhas 2026, Schaeffer et al. 2023, Power et al. 2022, Chollet 2019, Arjovsky et al. 2019.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; it was the spectrometer, not an argument, that resolved the case. Here:

1. Does a compressed description of the system's behaviour predict performance in a third context better than a lookup of training associations? That is the round trip gap `R_T` (Symbols table: `gap(x, (T_E ∘ T_A)(x))`).
2. Does transfer survive a change of bond with atoms held fixed (the isomer check), and does it fail for a system known to key on ingredient cues?
3. Are the two instruments genuinely low-overlap, and is the anchor unupdating?
4. Does the pre-registered refuter in `01` §4 fire or survive?

## 6. What an expert can check in twenty minutes

1. Read Fig 4 :23, :25, :30, Fig 12 :117 and Fig 1 :19, five short passages.
2. Check C1 against their own work: have they seen a case where same-atoms/different-bond separated a method from a cue, or a case where it failed to discriminate?
3. Name one low-overlap second instrument for their favourite benchmark, or say why none is available.
4. Check the 2023 Nature result against the 2026 TACL rebuttal and decide which refuter in `01` §4 is closest to firing.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
