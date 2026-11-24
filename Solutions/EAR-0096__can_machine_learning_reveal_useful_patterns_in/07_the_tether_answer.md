# The Tether's answer: ML patterns and misleading correlations

**Mode: `general` on the shape, `specified` on the guards, not `grounded`.** This is a shape and a checking discipline, not a result about any named model or dataset. Simulated derivation checked against the figures (`05_what_shape_means.md` §7), not a ground reading.

## 1. The residual it answers

Can ML reveal useful patterns in Earth-system data, and how can scientists guard against misleading correlations? The residual is the gap between what a model predicts and what the ground returns, **per slot** (Fig 1 :19). The question is a **union compound** (Fig 9 :55-56), so it has two loops and two grounds, not one. The capability loop is settled by a held-out observation paying for a pattern. The guard loop is settled by a checking arrangement that keeps correlation out of the verdict seat.

## 2. The shape

1. **ML narrows a candidate set of regularities. It returns a shape, not a causal name.** Fig 9 :32: *"you get a kind of thing, never the answer itself."* The canonical README says the framework returns *"what a missing thing would have to look like (a shape, not a name)."* A pattern may be named with provenance; its mechanism may not, until a source-discriminating instrument pays for it.
2. **Correlation is disqualifying for a verdict when the agreeing frames share an evidence pool.** Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool."* Two models trained on the same reanalysis are one witness. Fig 7 :13: *"agreement compounds, evidence does not."* This is the central guard against a misleading correlation.
3. **The residual is per slot, never only a global score.** Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A model can be globally skilful and locally wrong. Regional and seasonal residuals are the signal.
4. **The ground is the only metric.** Fig 1 :23: *"The ground enters as the only metric."* Training accuracy, compression achieved, feature counts, and credibility are frame-internal and cannot score the frame (Fig 1 :27).
5. **Overfit and vacuous patterns fail the MDL bargain.** Fig 5 :43-44: *"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."*
6. **Describe the residual and the predicted signature before model search.** Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."* Fix thresholds before the run: Fig 10 :47, *"a convention that decides an outcome has stopped being one."*
7. **The anchor must not update.** Fig 2 :33: *"The anchor must not update."* The channel decays, not the ground: Fig 10 :24, *"the ground does not decay, the channel does."*
8. **Enumerate the habitat for confounders.** Fig 11 :52-54 names the DDT and eagles cascade, where *"the residual that mattered was three steps out."* A spurious correlation is often a common cause several links away.
9. **Measure the round trip.** Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

## 3. What it explicitly does not say

- **Not that any named pattern from any named dataset is established.** No measurement is reported here.
- **Not that a correlation is a cause.** Correlation is the symmetric `+` bond; causation is `⇒` or `→` (Operators table). Same operands, different substance (Fig 12 :117).
- **Not that an ensemble is corroboration.** An ensemble drawn from one evidence pool is a variance reducer (Fig 2 :31-32).
- **Not that more data alone fixes a misleading correlation.** Closure is idempotent; more of the same atoms does not add the missing bond (Fig 8 :32).
- **Not that synthetic validation proves capability.** Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*
- **Not grounded.** Nothing here has been settled by an instrument.

## 4. What would settle it — the ground

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: a reading that cannot discriminate sources *"cannot comment on the source,"* and *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* Concretely here:

- **Independence test:** two models with genuinely disjoint evidence agree against a third held-out ground. Fails if their agreement still adds nothing (F2).
- **Per-slot test:** a global metric shown to preserve every per-slot live residual, with no slot averaged away (F3).
- **Ground-only metric:** a scoring quantity producible only by the ground and not by the frame it scores (F4).
- **MDL test:** description length plus residual for a named pattern, measured against its baseline (F5).
- **Source test:** an intervention or causal discovery that names the mechanism with recorded provenance (F9). Runge et al. 2023 list hidden confounding, contemporaneous causation and non-stationarity as the exact Earth-system obstacles this must overcome.

## 5. The honest stop

**Unreached, not unreachable.** The figures are domain-agnostic and do not mention ML; they set the shape of a defensible answer and the checking discipline, not the truth of an empirical claim. The result stops where the instruments stop discriminating, and records the lineage so the stop is checkable. *"Indiscernibility is not identity"* (canonical README). The gap on "is this named pattern actually useful in this dataset" is a verdict, not a silence. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

## 6. One-paragraph version for outreach

> The Tether does not claim that ML delivers causal knowledge of the Earth system. It says ML narrows a shape, a candidate set of regularities that becomes useful only when ranged against an independent ground. The guards are figure-derived: a correlation shared by models on one evidence pool cannot ground a verdict; the residual must be read per region, variable and season rather than as a global score; training accuracy and feature counts are frame-internal and cannot score the frame; overfit and one-occasion patterns fail the description-length bargain; the residual and its predicted signature must be described before model search; thresholds must be fixed before the run; the anchor must not update; the habitat must be enumerated for confounders several links out; and the round trip from data to abstraction and back must have its gap measured. What it offers is the shape any defensible answer must have, refuters written in advance, and the instruments that would close it. No named pattern is asserted useful here because no ground reading is reported. The center stays open until the ground settles it.
