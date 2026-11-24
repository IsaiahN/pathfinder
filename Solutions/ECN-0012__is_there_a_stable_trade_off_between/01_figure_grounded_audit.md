# Figure-grounded audit: is there a stable inflation-unemployment trade-off?

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape, `gap` on the numerical slope. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (carried from the completed exemplar's canonical essay mapping, see `05_what_shape_means.md` section 7): LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement was taken by this agent.

**Sources.** Framework primaries: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the Operators and Symbols tables in the extract. World sources fetched 2026-11-23 and recorded in `10_source_ledger.csv`.

---

## 0. The question restated as a residual

The observed inverse relation between inflation and unemployment (the Phillips curve) is a prediction that keeps failing at the moment someone tries to use it. The 1970s produced high inflation and high unemployment together. Later work found the curve flattens and shifts. The Lucas critique says the estimated relation changes when policy changes because expectations change. Goodhart's law says a statistical regularity collapses once it is used for control.

The residual R is therefore: **what is the status of this relation, a stable structure or a shifting convention?** Concretely, what failed to resolve is the claim that a single curve can be read off the data and then used as a fixed lever.

Bound term written down before the run (Formula, Direction): an answer would have to say (a) whether the relation is indexed per case or pooled into one curve, (b) what plays the role of the anchor and whether it updates when pushed, (c) which conditions compose into the observed correlation, and (d) what quantity the figures cannot name. That term now accrues a residual like everything else, so the preference for "one stable curve" is refusable.

- **Arity.** At least two conditions compose here: a short-run spare-capacity channel and an expectation position, plus supply versus demand shocks. Possibly more (labour-market structure, hysteresis, open-economy import prices). Not one variable against one variable.
- **Symmetry.** The estimated correlation is symmetric and associational (inflation and unemployment move together). "Trade-off" and "policy lever" are ordered (move inflation to get unemployment). A symmetric reading cannot select the arrow. Fig 2 :39: "Correlation has valence."
- **Scale.** Per economy, per period, per expectation regime. A global average across countries and decades throws away the live slot.
- **Question type.** Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." This is a union of overlapping conditions, not a partition into "stable" and "shifting" camps.

---

## 1. Domain census (before any figure line is chosen)

One line per domain: actors, currency, anchor. A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | anchor | partition or union | dependency order |
|---|---|---|---|---|---|
| D1 Observational and econometric frame | inflation rate, unemployment rate, NAIRU estimate, survey expectations | statistical fit, residuals, estimated slope | measured data (price index, unemployment count, expectation surveys). The *coefficient* has no invariant anchor; it moves across regimes | union of regimes (short-run / long-run, demand / supply) | first: perception and measurement of the two rates |
| D2 Policy and control frame | central bank, policy rule, firms, workers | policy actions and realised outcomes | a declared inflation target and full-employment mandate (a convention, not the figure-anchor). The curve itself is not an anchor: it moves when pushed | union: rule choice and response are coupled | fourth: a plan under incomplete information |
| D3 Expectation-formation frame | firms, workers, households | beliefs about future inflation and jobs | survey readings and revealed-preference measures (inferable, not directly observable) | union: adaptive and rational formation overlap | second: vocabulary (what a trade-off and an expectation are) |
| D4 Verification frame | researchers, central-bank staff, outside frames | agreement and residual | out-of-sample policy shifts and natural experiments, never agreement | partition boundary: each frame must be corrected separately | third: objective (what would count as stability), fifth: learn and carry |

**No nameable anchor case.** For the *numerical coefficient* of the trade-off and for a point value of the NAIRU, there is no nameable invariant anchor. Ellis 2019 (RBA) calls both expected inflation and the NAIRU "invisible" and inferable only with error. By the census rule that quantity is not yet a domain; it is a `gap`, recorded in F8 and Section 9.

**Order by dependency (Fig 3).** Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The literature is strong at perception (measuring inflation and unemployment) and at planning (policy rules), but the middle link, "what would count as stability", has no non-updating instrument. Effort spent on more elaborate curve estimates lands above that break (Fig 3 :19: "Optimising a link that already works cannot rescue one that does not.").

All four domains draw on overlapping evidence in this simulated run. Their agreement is one pool talking, not independent corroboration (Fig 2 :40). That is stated rather than hidden in `09` and `11`.

---

## 2. Figure census (quoted before concluding)

Each quote is verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`. Strain is named, not smoothed.

| figure | bearing on this question | verdict it supports |
|---|---|---|
| Fig 1 The Agent | residual indexed per slot; ground is the only metric; pooled averages hide the live signal | per-case verdicts, no global coefficient |
| Fig 2 The Ground | anchor must not update; coherent drift when it does; correlation has valence; convention that decides an outcome stops being one | the curve is not an anchor; the target is a convention |
| Fig 3 Dependency Chain | a link with no instrument is not a working link | the stability objective is unmeasured, not settled |
| Fig 4 The Membrane | only methods cross up; round trip must be measured | a pooled curve is a recording of one regime, not a generator |
| Fig 5 Mint Pipeline | MDL bargain; a refused term is a negation; write the sought shape as an ordinary term | the stable-curve term is refused, not repaired |
| Fig 6 Closure and Reachability | mint cannot add an atom; instruments built from worse instruments already returning something | the slope is not derivable from the figures; an instrument is owed |
| Fig 7 Room Chain | rooms must differ and match the surfaced residual | regime-switched estimates are the selection, not a single long room |
| Fig 8 Union Surplus | residual first, frame second; independence one quantity read twice | describe the failure before naming a school of thought |
| Fig 9 Leave and Arrive | split a union before searching; describe before looking; shape not answer | the either/or is unbundled; the coefficient is a gap |
| Fig 10 Ground Maintainer | ground does not decay, channel does; bring a characterised residual; declare stakes | data stay, the estimated curve decays; check before theory |
| Fig 11 The Habitat | capability is agent-and-habitat; valence relative to residual; no standing good-actor list | conditions flip valence with the residual; no universal lever |
| Fig 12 The Bond | a goal is a comparison; isomers over a fixed atom set; two currencies do not add | trade-off is a threshold reading; demand and supply episodes are isomers |
| Fig 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | no figure returns a slope or NAIRU value; that is a gap, not silence |
| Operators and Symbols tables | ⋛ is a threshold relation between two quantities; R is per slot; R_T is the round-trip gap | the trade-off is a threshold reading, and the condensation carries a gap |

---

## 3. Findings F1 to F11

### F1 - The question is a union compound, not a two-way choice (decisive framing)

Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :55-57: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." and "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

The empirical record is exactly a set of subsets on which different readings work: distinct downward-sloping clouds at different levels in the US data (Wikipedia, Phillips curve, reporting Chang's formal analysis of up to five groups over 1953 to 1992), a flattening slope in the 2010s, and stagflation where the inverse relation disappears. "Stable" and "shifts" are not opposite answers to one question; they are summaries of different regimes with an unassignable shared fraction. **Verdict: `specified`, triangulated** (Fig 9 union rule plus per-slot Fig 1 rule plus the empirical regime evidence). One lever cannot clear the intersections.

### F2 - Aggregate correlation throws away the live signal

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

A single "Phillips curve" pools countries, decades, and expectation regimes. That pooling is how a live slot residual (a particular regime where the relation has broken) disappears into a plausible average slope. Fig 1 :23: "The ground enters as the only metric." The ground is the measured data per slot, not a pooled coefficient. This is not a complaint about data quality; it is the figure's indexing rule applied to this residual. **Verdict: `specified`, triangulated** (Fig 1 plus Fig 9).

### F3 - The trade-off is not an anchor because it moves when you push on it

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 2 :30: "If it moves when you push on it, it is not an anchor." (line 29 wraps into line 30 in the extract)

Fig 2 :33: "The anchor must not update."

The policy reading of the question wants the estimated curve to be the anchor of a control rule: set inflation here, get unemployment there. But the position of the curve depends on expectations, and expectations respond to the policy itself. Push on the curve and it moves. By the figure's own test it is not an anchor.

World corroboration at genuinely low overlap: Goodhart 1975, "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." Campbell 1979 (evaluation research, not economics), "The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor." These are different fields naming the same update-on-use structure. **Verdict: `specified`, triangulated** (Fig 2 plus two low-overlap world sources). This is the strongest single finding.

### F4 - Expectations are the updater inside the frame: coherent drift

Fig 2 :13-15 names "collapse 1: mutual update (coherent drift)" with "no anchor; each updates on the others", "they converge, and what they converge on is whoever had the most influence".

Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

The expectations-augmented curve says actual inflation feeds expected inflation, which feeds wage setting, which feeds inflation. That is a mutual update loop. When the "anchor" (the expected inflation rate used to position the curve) updates on the outcomes it was supposed to settle, the frame becomes panel 1: coherent drift. The Lucas quote in the world record makes the same point in economics language: "any change in policy will systematically alter the structure of econometric models." **Verdict: `specified`, single-source on the figure mechanics (Fig 2), corroborated by the expectations-augmented literature at higher overlap.**

### F5 - Stagflation is the hidden-common-cause collapse, not a broken curve

Fig 2 :6-7 names "collapse 2: common cause (hidden shared source)", and Fig 2 :18-21: "one evidence pool", "they never talk, and still agree", "so the agreement is the pool talking, not two frames confirming each other".

A supply shock (an oil price rise) moves inflation up and unemployment up together. The observed co-movement is not a trade-off at all; it is one hidden source driving both readings. The 1970s stagflation that broke the naive curve is, in figure terms, a common-cause collapse: two series agreeing because the same shock writes both, not because one was traded for the other. The RBA speech notes Phillips himself attributed deviations to cost factors, specifically import prices with a lag, so the common cause was in the original data. **Verdict: `specified`, triangulated** (Fig 2 plus the stagflation record).

### F6 - The policy target is a convention, and a convention that decides an outcome stops being one

Fig 10 :46: "A convention makes no claim about the world; a verdict and an atom both do."

Fig 10 :47: "a convention that decides an outcome has stopped being one"

Fig 2 :43: "Guard, from Figure 10: a convention that decides an outcome has stopped being one."

Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"

A central bank's inflation target is a declared convention, a shared meaning that coordinates expectations. It becomes a verdict if it is used to assert that the natural rate has a particular value that policy may then exploit. Conversely the *observed correlation* remains useful "efficient for a convention" as a short-run forecasting rule of thumb, while being "disqualifying for a verdict" about structural stability (Fig 2 :40). These are two valences of one quantity (Fig 8 :47: "Independence is one quantity read twice."), not a contradiction. **Verdict: `general` on the structural distinction, `specified` on the target application; triangulated.**

### F7 - The middle link has no instrument

Fig 3 :25-27: "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." and "A link with no instrument is not a link that works. It is a link nobody has looked at."

Economists can measure the two rates (perception) and can write policy rules (planning). What counts as "stability" of the trade-off, a quantity that would not update on the policy using it, has no instrument. Ellis 2019: "Neither expected inflation nor the NAIRU can be directly measured." The world source is unusually explicit that the two invisible quantities in the curve are inferable at best. **Verdict: `specified`, triangulated** (Fig 3 plus the RBA source). The honest label is `unreached`, not `disproved`.

### F8 - The numerical slope and the NAIRU point are a gap, not a silence

Fig 9 :32: "you get a kind of thing, never the answer itself"

Fig 13 :134-135: "Unreachable is a verdict here, not a silence," and "It cannot say which primitive is missing, because naming it would mean already holding it."

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line returns a coefficient, a slope, a sacrifice ratio, or a NAIRU value. Those are bindings from the econometric frame and are owed an instrument that does not infer the invisible quantity from the same data used to position the curve (Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."). The NY Fed Survey of Consumer Expectations is an example of a *proto-instrument already returning something* (it publishes median inflation expectations at one, three, and five years), but it measures beliefs, not the structural coefficient. **Verdict: `gap` (shape-not-a-name kind), stated as unreached rather than silence.**

### F9 - The two episodes are isomers over a fixed atom set

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Over a fixed atom set {spare capacity, expectation position, price-setting response, supply shock}, a demand-driven disinflation and a supply-driven inflation episode contain the same atoms arranged differently: which atom binds to which, and with which sign (Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."). They are isomers, not different amounts of one curve. If the atom set itself changes (a new expectation regime, a new labour-market institution), the relation is composition plus import, not re-arrangement. The fixed-atom condition is a live strain, named in `06` and `11`, not hidden.

A separate, sharper point: Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." "Trade-off" is a threshold comparison (Operators :49: "a threshold relation between two quantities"). Reading it as a stable *substance* rather than a *comparison under a regime* is the flat-formula error Fig 12 :6 names. **Verdict: `specified` on the isomer reading with a fixed-atom condition; `general` on the comparison reading; triangulated.**

### F10 - The ground does not decay, the channel does

Fig 10 :24: "the ground does not decay, the channel does"

Fig 10 :26: "stale percepts, dropped transients, saturated metrics, pooled readings"

Measured inflation and unemployment series are the ground for this question and they do not decay. What decays is the estimated mapping between them: pooled readings across regimes, saturated metrics near the zero lower bound, dropped transients. The observed "instability of the Phillips curve" is a channel failure, not a failure of the data and not evidence that no regularities exist. This is the precise sense in which the question's two options are a false dichotomy. **Verdict: `specified`, triangulated** (Fig 10 plus the regime record).

### F11 - No figure returns a stable lever, so the stable-trade-off claim is refused as written

Formula step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." The claim "there is a stable exploitable trade-off" is a `general`-mode verdict with no per-slot ground reading and a non-updating anchor that fails the Fig 2 :30 test. The honest residue is: a short-run, regime-conditional inverse relation exists and is useful as a convention, its position is set by expectations and by supply or demand conditions, it is not a policy-invariant structure, and the figures cannot name its coefficient. Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so." The term held is "one stable curve"; a refusal is owed, not a repair. Fig 6 :21: "MINT composes inside the closure and can never add an atom." **Verdict: `specified` on the refusal, `general` on the shape, not `grounded`.**

### Findings summary (verdicts kept per domain, never averaged)

| domain | finding | status | mode |
|---|---|---|---|
| D1 observational | pooled curve hides per-slot residuals; regimes are a union | triangulated | `specified` |
| D2 policy | curve moves when pushed, so not an anchor; target is a convention | triangulated | `specified` |
| D3 expectations | updater inside the frame; coherent drift when used as anchor | single-source figure mechanics, world corroborated | `specified` |
| D4 verification | no instrument for stability; slope and NAIRU are a gap | gap on the number | `general` shape / `gap` number |

---

## 4. Pre-registered refuter (written before the conclusion)

Required by Fig 5 :65: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else." A falsifier written before the run is a design instrument. The shape claim (union, expectation-mediated, non-invariant, number ungoverned) is refuted if any of the following holds:

1. **Invariant anchor found.** A structural relation between inflation and unemployment is demonstrated, out of sample, that keeps its coefficient across a deliberate policy-regime change without expectations updating on the change. That is an anchor that does not move when pushed (breaks F3 and F4).
2. **No live slot residual.** The per-slot residual distribution collapses to a single stable curve across regimes with no regime-conditional shift (breaks F1 and F2).
3. **Expectations inert.** The position of the short-run relation is shown not to move when independently measured expectations move (breaks F4).
4. **Common cause absent.** Supply shocks are shown to move inflation and unemployment in opposite directions only, never together, so no hidden shared source can produce stagflation (breaks F5).
5. **Named anchor for the number.** An instrument returns the slope or NAIRU without inferring it from the same inflation and unemployment data it is meant to explain (fills F8 gap).
6. **Same atoms, same bond.** Demand and supply episodes are shown to differ in atom set rather than arrangement, so the isomer reading is void (breaks F9).

If any fires, the union verdict is withdrawn and the stable-trade-off reading is reinstated for the affected domain. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the union finding and the anchor test, not with a verdict on any school of macroeconomics (F1, F3).
2. Keep the four domain verdicts separate. Do not average them into "the trade-off mostly shifts, a little."
3. State the mode on every substantive sentence. The correlation is useful for a convention and disqualifying for a verdict (F6).
4. Report the numerical slope and NAIRU point as a `gap` with a discriminator owed, not as an approximate number (F8).
5. Send the refuter with the shape claim. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." The generator is the union-plus-anchor test, not a fitted curve.

---

## 6. Canonical usage check (figures README and metalaws)

Two framework sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops where instruments cannot distinguish, and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: figure text is primary; mode rule stated; step 7 separates SEARCHED (cheapest, asked first), INWARD (sharpen an instrument already returning something), and OUTWARD (import with source gate, shadow test, debited against independence).

Search ordering for this question: **SEARCHED** is the regime evidence already in hand, does the stable coefficient hide in a pooled estimate? The evidence says no, it splits into regimes, so more pooling is not the answer. **INWARD** is the expectations instrument, sharpened from surveys already returning readings (NY Fed SCE is a live example). **OUTWARD** is the import of Goodhart and Campbell, cast in effect terms and debited against independence; they are low-overlap witnesses, not a new primitive for the six-term set. The three are kept distinct.

### Retractions and confirmations (kept visible)

| earlier reading | status after the canonical check |
|---|---|
| "The question has two sides, pick one" | **Retracted.** Fig 9 union rule governs; it is a compound of conditions with an unassignable shared fraction. |
| "A pooled correlation is a stable anchor" | **Retracted.** Fails Fig 2 :30 anchor test; Goodhart and Lucas corroborate at low overlap. |
| "A non-updating anchor is required, therefore none exists anywhere" | **Narrowed.** The figure requires a non-updating anchor for a *verdict about the world*. For a *convention* (rule of thumb, target), updatable agreement is the product, not a corruption (Fig 2 :41). Kept both readings. |
| "No figure governs, so report silence" | **Refused.** Unreachable is a verdict (Fig 13 :134); a `gap` with a named instrument is reported instead. |
| "The stable-trade-off term can be repaired with a better estimate" | **Refused.** Fig 5 :53 owes a refusal; Fig 6 :21 says minting cannot add the missing atom. |
| Fig 2 "anchor" versus "nominal anchor" in central-bank practice | **Re-censused, not strained.** Fig 2 anchor = what settles the question without updating. A policy target is a declared convention (Fig 10 :46-49). Different objects. |
| Fig 12 isomer versus changing atom sets across regimes | **Live strain, named.** Fixed-atom condition required; if atoms change, the relation is composition plus import, not isomerism. |
| Eight-essay "shape, not a name" applied to a numerical slope | **Overstatement narrowed and preserved.** The rule governs a missing primitive; here the slope is a binding from the econometric frame, not a figure derivation. See `05` section 6 and `06` Q1. |

---

## 7. Seven-question recursive derivation (summary)

1. **Union or partition?** Union. Fig 9 :55-57 plus the regime record. One lever leaves the intersections standing.
2. **Is the observed curve an anchor?** No. Fig 2 :30, :33. It moves when pushed; Goodhart and Campbell corroborate.
3. **What moves it?** Expectations and condition mix. Fig 2 :34 coherent drift; expectations-augmented curve; supply shocks as common cause (Fig 2 :6-7).
4. **Is the policy target an anchor?** No, a convention (Fig 10 :46-49). It may coordinate but must not decide an outcome.
5. **Can the figures name the coefficient?** No. Fig 9 :32, Fig 13 :134-135. Shape, not a number. Owed an instrument.
6. **Are the regimes different things?** Isomers over a fixed atom set (Fig 12 :117) with a named strain; otherwise composition plus import.
7. **Where does the loop stop?** At the limit of instruments that can hold an invisible quantity without inferring it from the same data (Fig 6 :32, :34). The lineage is recorded so the stop is checkable.

---

## 8. Updated verdict

The shape survives: the inflation-unemployment relation is a per-slot, regime-conditional comparison whose position is set by expectations and by supply or demand conditions, and it is not a policy-invariant structure. The specific stable-trade-off claim does not survive: it treats an updatable correlation as a non-updating anchor and a convention as a verdict. No figure returns a slope or a NAIRU value, so the number is a `gap`, reported as unreached. Strains after re-census: one live (fixed-atom condition on the isomer reading), two dissolved by re-census (anchor versus nominal anchor; correlation valence), one narrowed correction kept visible (shape-not-a-name applied to a numerical binding). Consistent with the canonical README's re-census rule.
