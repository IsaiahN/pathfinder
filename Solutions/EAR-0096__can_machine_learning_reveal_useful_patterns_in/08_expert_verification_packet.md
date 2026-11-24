# Expert verification packet: ML patterns and misleading correlations in Earth-system data

**What this is:** a claim in a form an ML or Earth-system scientist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` on the guards, not `grounded`.** No named model or dataset is asserted useful. This is a shape and a checking discipline, not a result.

## 1. The claim, in one paragraph

Machine learning can narrow a candidate set of regularities in Earth-system data, a shape rather than a causal name. Such a pattern is useful only when ranged against an independent ground. The guards that keep a correlation out of the verdict seat are figure-derived and independently corroborated: shared evidence pools cannot corroborate (Fig 2), the residual must be per slot (Fig 1), the ground is the only metric (Fig 1), overfit fails the description-length bargain (Fig 5), the residual must be described before the model is chosen (Fig 9), the anchor must not update (Fig 2, Fig 10), the habitat must be enumerated for confounders (Fig 11), and the round trip must have its gap measured (Fig 4). The question is a union of two conditions with two grounds, not one hard problem (Fig 9).

## 2. Three checkable sub-claims

### C1 — Framework-internal; checkable by reading Figures 1, 2 and 9

- **Statement:** a correlation among models trained on one evidence pool is disqualified for a verdict, and a global skill score cannot replace per-slot residuals.
- **Source, verbatim:**
  - Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
  - Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
  - Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
  - Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
  - Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*
- **Refuter:** show two models with genuinely disjoint evidence whose agreement against a third held-out ground still adds nothing; or show a global metric that preserves every per-slot live residual so no slot is averaged away; or produce a pre-registered residual dated before model search and show the pattern was manufactured anyway.

### C2 — ML-facing; checkable by a machine-learning researcher against standard practice

- **Statement:** frame-internal scores cannot score the frame, and the description-length bargain rejects both overfitting and vacuous patterns. Concretely: training accuracy, compression achieved, and feature counts are not evidence of usefulness.
- **Source, verbatim:**
  - Fig 1 :23: *"The ground enters as the only metric."*
  - Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
  - Fig 5 :43-44: *"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."*
- **What to check:** Domingos 2012 independently states that learners "can only learn correlations," that testing on training data gives "the illusion of success," and that multiple testing requires false-discovery-rate control. Does the claimed guard survive if those standard results are accepted? Is there any scoring quantity in current practice that is not producible by the frame it scores?
- **Refuter:** name a scoring quantity producible only by the ground and not by the frame it scores; or show a pattern whose description length plus residual is below its baseline yet which is still rejected; or show that multiple-testing correction makes the shared-pool guard unnecessary (it does not in the framework, but an empirical demonstration would be a real conflict).

### C3 — Earth-system-facing; checkable by a climate or Earth-system scientist

- **Statement:** the anchor must not update, the channel decays, and confounders cascade several links out; a synthetic test proves wiring, not capability.
- **Source, verbatim:**
  - Fig 2 :33: *"The anchor must not update."*
  - Fig 10 :24: *"the ground does not decay, the channel does"*
  - Fig 11 :52-54: *"contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*
  - Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*
  - Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
- **What to check:** Reichstein et al. 2019 say data-driven approaches "do not guarantee physical consistency per se, are highly dependent on data quality, and have difficulty extrapolating." Runge et al. 2023 list "contemporaneous causation, hidden confounding and non-stationarity." Are these the same guards in different vocabulary, or do they conflict with the figure claims?
- **Refuter:** an experiment in which changing the model cannot move the held-out observation, with fresh unsaturated per-slot readings; plus a confounder cascade scoped three steps out; plus a measured round trip with a stated nonzero R_T. If a real case shows the channel does not decay where the figure says it does, the guard is wrong.

## 3. What is explicitly not claimed

- Not that any named pattern from any named dataset is established. No measurement is reported.
- Not that a correlation is a cause. Same operands, different bond, different substance (Fig 12 :117).
- Not that an ensemble is corroboration, or that more data alone fixes a misleading correlation (Fig 7 :13, Fig 8 :32).
- Not that synthetic validation proves capability (Fig 11 :70).
- Not `grounded`. Nothing here has been settled by an instrument.
- Not a claim about the truth of the Tether framework. It is used as a source of guards, not asserted as settled.

## 4. Provenance

- Canonical figure text: `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` (verbatim, with line numbers).
- Canonical usage rule: `local: ...\FIGURES_README_canonical.md`; formula and mode rule: `local: ...\THE_FORMULA.md`.
- Domingos, P., "A Few Useful Things to Know About Machine Learning," Communications of the ACM 55(10), 2012, doi 10.1145/2347736.2347755. Fetched 2026-11-22.
- Reichstein, M. et al., "Deep learning and process understanding for data-driven Earth system science," Nature 566, 195-204, 2019, doi 10.1038/s41586-019-0912-1; MPI-M news page fetched 2026-11-22.
- Runge, J. et al., "Causal inference for time series," Nature Reviews Earth and Environment 4, 487-505, 2023, doi 10.1038/s43017-023-00431-y. Fetched 2026-11-22.
- Vigen, T., "Spurious Correlations," https://www.tylervigen.com/spurious-correlations. Fetched 2026-11-22.
- Framework essays by Isaiah N, 2026, listed in `05_what_shape_means.md` (high overlap with the figures).
- This packet compiled 2026-11-22. Simulated derivation, not a ground reading.

## 5. What would settle it

1. An independence test with genuinely disjoint evidence and a third held-out ground.
2. A per-slot residual audit showing whether global scores hide live slots.
3. A source-discriminating instrument (intervention or causal discovery) naming a mechanism, with provenance and a measured round trip R_T.

Details in `07_the_tether_answer.md` §4.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22, :23, :27 and Fig 2 :31, :33, :40. Six short passages.
2. Check C2 against standard ML practice: are frame-internal scores ever legitimate evidence? Should multiple-testing correction change the shared-pool guard?
3. Check C3 against one Earth-system case you know: was the apparent correlation a common cause several links out? Did the channel, not the ground, decay?
4. Name one instrument that would discriminate source from reading for that case, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
