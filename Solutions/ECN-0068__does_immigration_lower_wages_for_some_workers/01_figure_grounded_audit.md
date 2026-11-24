# Figure-grounded audit: does immigration lower wages for some workers?

**Mode of this document: `general` on the shape, `specified` on the checkable pattern reported by the literature. Nothing is `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The framework's own warning applies: LLM output is simulacra, and the truly testable output would need to be derived from the real architecture or by working the formula yourself (see `05_what_shape_means.md` section 6). This is a simulated derivation checked for internal consistency against the figures. It cannot settle the empirical question it reports on. No measurement was taken here.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, plus the public sources in `10_source_ledger.csv`. Every figure quote below is taken from the verbatim extract, not from a summary.

---

## 0. The residual, in effect terms

The question is put as three alternatives: lower wages for some workers, raise overall productivity, or different effects across skill groups and horizons. Stated as an effect, the residual R is the mismatch between a one-sign headline prediction and the measured wage outcomes on individual slots. A slot s is a cell of (skill group, region, wage percentile, horizon). The mismatch is not one number: it is the pattern of plus and minus mass across those cells.

- **Arity:** at least four indices, education-experience cell, local labour market, position in the wage distribution, and short run versus long run. More than one condition is in play, so the object is a bundle, not a scalar.
- **Symmetry:** asymmetric. A supply shock into a cell lowers the wage of workers who compete in that cell and can raise the wage of workers who complement it. Swapping the two kinds of worker does not preserve the claim. Fig 12 :59-60 and Fig 12 :92: "swap the operands. Does the meaning change? No." identifies the symmetric case; this is not it.
- **Scale:** two membranes at least. Local and national are different scales, and short run (capital quasi-fixed) and long run (capital adjusted) are different scales. Fig 4 :19-20: "Only the actors, the currency and the anchor change." A number carried across the membrane needs a round trip gap, not an identity.

R is therefore a slot-indexed effect. That term is bound here before the search, per Formula "Direction", so that a preferred one-sign answer is refusable rather than invisible.

## 1. Domain census before choosing any figure line

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 Labour market as habitat | workers by education-experience cell, firms, immigrants, natives, capital, wage-setting institutions | wages, employment, hours, total factor productivity, output | measured data (census, labour force surveys, firm registers) that do not move when a frame changes its mind | **union compound**: skill x region x percentile x horizon overlap; effects in intersections are categorically different from effects in single conditions |
| D2 Empirical research programme | competing research teams, natural experiments, instrument designs, meta-analysts | estimates, identification checks, confidence intervals | reproducible data and the identification strategy, not the prestige of the author | **union**: relative-wage estimand and total-wage estimand are different questions, not two estimates of one quantity |
| D3 Verification and distribution | expert readers, referees, editors, first-contact recipients | agreement and residual | the ground (data), never agreement | partition: this domain can check a claim but cannot author the result |

**No nameable anchor means it is not a domain yet.** D1 and D2 both have anchors: measured wages and output, and reproducible estimates. D3's anchor is the same measured ground, reached through a reader who must not hold the interiors (Fig 10 :52). A venue with no public, checkable record would not count as a domain here.

**Partition or union.** D1 is a union, not a partition. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." The skill effect and the horizon effect are not separate items on a list; the low-skill short-run cell is an intersection that a single lever aimed at only one condition leaves standing. Fig 9 :57: "a case in two conditions is not a harder case of either."

**Order by dependency (Fig 3).** Fig 3 :20: "The chain is ordered by dependency, not by importance." The order is: (1) describe the slot-indexed residual before choosing a frame (Fig 9 :27-28); (2) settle the estimand and the anchor before reading a sign (Fig 3 :19, "Optimising a link that already works cannot rescue one that does not"); (3) read slot results before any aggregate; (4) only then compare frames. A headline number computed at step 2 is a reading of nothing at step 3.

## 2. Figure census, with bearings

| figure | bearing on this question | verdict after census |
|---|---|---|
| 1 The Agent | R per slot; aggregation kills the only signal; ground is the only metric | governs the shape, not the sign |
| 2 The Ground | anchor must not update; independence, not agreement | governs how a sign may be settled |
| 3 Dependency Chain | order by dependency; a reading below the break is nothing | governs search order |
| 4 The Membrane | scale change is lossy; round trip gap R_T | governs local versus national and short versus long |
| 5 Mint Pipeline | three guards, acceptance bargain | no new primitive is owed here |
| 6 Closure / Reachability | instruments improved from worse instruments; closure idempotent | governs INWARD versus OUTWARD |
| 7 Room Chain | agreement compounds, evidence does not | rules out bulk corroboration |
| 8 Union Surplus | residual first, frame second; low overlap buys surplus | governs frame selection |
| 9 Leave / Arrive | split a union before searching; describe before looking | the decisive governance figure for the compound |
| 10 Ground Maintainer | bring a characterised residual; verifier non-access | governs the first contact |
| 11 The Habitat | valence relative to the residual; enumerate the habitat | governs "some workers" as slots |
| 12 The Bond | arrangement carries meaning; two currencies do not add | governs relative versus total as different terms |
| 13 Minimum Viable Set | closed set, unbounded arrangements; unreachable is a verdict | governs the stop, and the limit on what figures can say |
| Operators / Symbols tables | R is per slot, never a single global number | supports Fig 1; no sign is encoded |

## 3. Pre-registered refuter

Written before the findings were drawn, per the standing instruction that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A single aggregate statistic fully predicts every slot's wage trajectory, so no slot carries live residual while the aggregate is near zero (breaks Fig 1 :13 and :19).
2. All credible identification strategies, on non-overlapping data and with different instruments, converge on the same sign and magnitude for every skill group, region, percentile and horizon (breaks the union-compound reading, Fig 9 :55-57).
3. The anchor is shown to move with the frame: estimates track the researcher's preferred model rather than the measured data (breaks Fig 2 :29, the anchor test).
4. The figures are shown to license a determinate wage sign from the six-term set alone (breaks the `gap` verdict and the stop at Fig 13 :134).

If any fires, the corresponding finding is withdrawn, not softened. Until one is run, no part of this audit is `grounded`.

## 4. Findings

### F1 - The question is a union compound, not one hard question (decisive for the shape)

Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

The literature supplies the same distinction from inside economics. Dustmann, Schonberg and Stuhler (JEP 2016) classify studies into three groups: two estimate different *relative* effects, the third estimates the *total* effect, and they "demonstrate that they are not comparable". Edo (JES 2019) reports that average effects are null or slightly positive while "immigration can create winners and losers among native workers via changes in the wage structure". Foged, Hasager and Yasenov (SJE 2022) find the mean and median *relative* wage effect negative and significantly different from the small positive *average* wage effect. These are not three measurements of one quantity; they are different slots and different estimands.

- **Mode:** `general` for the union rule, `specified` for the estimand split.
- **Status:** `triangulated` (Fig 9 and the independent estimand distinction in JEP 2016; low overlap between a structural figure and a measurement taxonomy).
- **Refuter:** finding 2 above, or a demonstration that relative and total wage effects are the same estimand under every accepted identification strategy.

### F2 - R is indexed by slot; the aggregate and the losses are both legal states

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :13: "a global R near zero with one live slot residual is a legal state"

Symbols table, line 43: "R is measured per slot, never as a single global number."

The figure rule says there is no contradiction between "overall productivity rose" and "this cell lost". Foged, Hasager and Yasenov (2022) report exactly that joint pattern across 1,030 wage estimates: relative-wage effects negative in the mean and median, average-wage effects small and positive. Ottaviano and Peri (NBER w12497, 2006; JEEA 2012) find a positive average effect "resulting from averaging a positive effect on wages of U.S.-born workers with at least a high school degree and a small negative effect on wages of U.S.-born workers with no high school degree". Dustmann, Frattini and Preston (REStud 2013) find wages depressed below the 20th percentile and slightly increased in the upper part of the distribution. Caiumi and Peri (NBER w32389, 2024), using more recent data, find a positive effect for less educated natives in 2000-2019. The signs move with the slot and the period, which is what the figure predicts about where the residual lives, not what sign it predicts.

- **Mode:** `general` for the per-slot rule, `specified` for the reported sign patterns.
- **Status:** `triangulated` for the shape (Fig 1, the Symbols table, and the independent statistical result on aggregation in the Stanford Encyclopedia of Philosophy entry on Simpson's Paradox: "an association between two variables in a population emerges, disappears or reverses when the population is divided into subpopulations"). The sign pattern itself is world-sourced and `single-source` per study, never averaged into a verdict.
- **Refuter:** finding 1 above.

### F3 - The actor's valence is relative to the residual

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."

Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

An immigration inflow is not a "good" or "bad" lever in itself. Borjas (QJE 2003) finds "immigration lowers the wage of competing workers: a 10 percent increase in supply reduces wages by 3 to 4 percent". Ottaviano and Peri (2006) attribute a positive average to imperfect substitutability and task specialisation. Both can be reading the same actor against different residuals and different cells. Edo (2019) names the result directly: winners and losers among native workers via the wage structure.

- **Mode:** `general` for the valence rule, `specified` for the competing/complementary mapping.
- **Status:** `triangulated` (Fig 11 and Fig 1, two figures with low overlap, plus the economics distinction between competing and complementary workers).
- **Refuter:** a demonstration that one and the same worker cell is always helped or always harmed regardless of which residual it is measured against.

### F4 - The two horizons are different terms, not one estimate

Fig 4 :19-20: "Only the actors, the currency and the anchor change." Fig 4 :27-32 requires a round trip and a measured gap when a description crosses a scale: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Edo (2019) states the horizon dependence: "because adjustments take time, the immediate labor market effects of unexpected (as opposed to expected) migration episodes can be detrimental". Ottaviano and Peri (NBER w12497) show that "most of the wage effects of immigration accrue to native workers already within a decade". Card (NBER w14683, 2009) notes that with capital freely available at a fixed price, immigration has no effect on the absolute level of wages for any group, which is a long-run limiting case, not a short-run one. So a short-run loss and a long-run neutral or positive read are different terms in the same way that a coarse description and its concretisation are different terms.

- **Mode:** `general` for the scale rule, `specified` for the timing pattern from the literature.
- **Status:** `triangulated` for the shape (Fig 4 membrane plus Fig 9 subset rule), `single-source` per study for any particular timing magnitude.
- **Refuter:** showing that the same estimate applies at both horizons with no R_T, or that the data themselves do not distinguish the two.

### F5 - The anchor is measured data; no figure line returns the sign

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."

Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

Fig 13 :138: "narrowing gets you close while the ground decides."

Fig 13 :134: "Unreachable is a verdict here, not a silence."

After a genuine re-census of all three domains, no figure line governs whether a given low-skill cell loses 1 percent or gains 1 percent. The six-term set says nothing about wages, and the closure of the set is not a labour-market model. The honest report is `gap` for that question from the figures. Peri (NBER w15507, 2009) and the NBER Digest summary supply a candidate for the productivity half of the question: "an increase in employment in a US state of 1% due to immigrants produced an increase in income per worker of 0.5% in that state", with the Digest adding that "a measure of task-specialization of native workers induced by immigrants explains half to two thirds of the positive effect on productivity". That is a world candidate settled by an instrument (border distance, pre-1960 communities), not a figure result.

- **Mode:** `general` for the anchor rule, `specified` for the world candidate.
- **Status:** `triangulated` for the method (Fig 2 and Fig 13), `gap` for the sign from figures.
- **Refuter:** finding 4 above.

### F6 - Agreement between studies is not a second witness when they share a pool

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."

Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not"

Fig 8 :50: "two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."

Reviews and meta-analyses are valuable maps of the pool, but Foged, Hasager and Yasenov pool 1,030 estimates drawn from the same literature; their mean is a description of that pool, not an independent instrument pointed at the world. The low-overlap pair here is a natural-experiment design (Card's Mariel-style designs, Glitz's German location rules) against a structural general-equilibrium design (Ottaviano and Peri), because they fail differently. Even then, agreement is corroboration only if the closures differ, and Fig 8 :51 warns: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."

- **Mode:** `general`.
- **Status:** `single-source` for the rule itself (Fig 2 and Fig 7 are two figures, so `triangulated` as a framework claim); the empirical independence of any given pair of studies is `grounded` only by checking their data and instruments, which is not done here.
- **Refuter:** a demonstration that two agreeing studies used disjoint data, disjoint instruments and disjoint identifying assumptions, in which case their agreement is a genuine second witness.

### F7 - What survives

| claim | mode | figure or source |
|---|---|---|
| The residual must be read per slot, never as one global sign | `general` | Fig 1 :19, :22; Symbols table :43 |
| This is a union compound; unbundle before searching | `general` | Fig 9 :4-5, :54-57 |
| Actor valence is relative to the residual | `general` | Fig 11 :49-50 |
| Scale changes carry a round trip gap R_T | `general` | Fig 4 :27-32 |
| Relative and total wage effects are different estimands | `specified` | JEP 2016; JES 2019; SJE 2022 |
| Some low-skill cells lose and some cells gain, with horizons differing | `specified`, world candidate, not a figure verdict | Borjas 2003; Ottaviano and Peri 2006/2012; Dustmann et al 2013; Caiumi and Peri 2024 |
| Immigration raises measured TFP in some settings | `specified`, world candidate | Peri 2009; NBER Digest 2010 |
| The sign for any particular cell and horizon | `gap` from figures | after re-census, Fig 13 :134 |

## 5. Strain test and re-census

**Strain named.** Fig 13 :76 says "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." My first reading wanted this to govern short-run versus long-run wage effects. That is a strain: Fig 13 governs how a structure bonds to a state in the six-term substrate, not how an econometric estimate changes with a capital-adjustment horizon. Re-census sends the horizon claim to Fig 4 (scale membrane, round trip gap) and Fig 9 (a rule that works on a different subset), where it fits without force. The strain is recorded, not hidden, and the Fig 13 line is left governing its own quantity.

**Second strain named.** Fig 11 :49-50 speaks of a benefactor or malfactor actor. Calling an immigrant flow a "benefactor" would strain the economics language. Re-census: the figure governs *valence relative to a residual*, and the economics term for the same relation is competing versus complementary worker. The mapping is a binding from the research frame, with provenance, not a figure-generated name.

**After re-census: two strains named, both resolved by assigning the line to its own domain; none hidden.**

## 6. Recommendation

1. Lead with the shape: per-slot residual, union compound, ground-settled signs. Do not lead with a verdict on the sign.
2. Ask a checker which slots and which horizon they would measure before showing them any literature (Fig 9 :27-28, Fig 10 :52).
3. Keep relative and total effects in separate columns (F1). Never average them into "the effect of immigration".
4. Record provenance for every mapping between figure vocabulary and economics vocabulary (Fig 8 :51).
5. Use the public, opt-in venues in `03_public_contact_points.csv`. Ask for a refutation, not an endorsement (Fig 2 :35).

## 7. Canonical usage check and retraction log

Read after sections 0-6: the canonical figures README and `THE_FORMULA.md`. The README states the figures outrank everything else and that "the quotes are the authority, not this summary"; it also states the stop: the framework reports "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments, with "Indiscernibility is not identity."

| earlier reading | status after the canonical check |
|---|---|
| "Fig 13 governs short versus long horizons" | **Retracted.** Re-census assigns the horizon claim to Fig 4 and Fig 9. Kept visible as a strain. |
| "the figures decide whether immigration lowers wages" | **Retracted.** Genuine re-census finds no figure line governing an empirical wage sign. This is `gap`, and "Unreachable is a verdict, not a silence" (Fig 13 :134). |
| "the meta-analysis is an independent second witness" | **Retracted.** It pools the same literature. By Fig 2 :40 its agreement is the pool talking. |
| "immigration is a benefactor or malfactor actor" | **Narrowed.** Fig 11 governs valence relative to the residual, not a moral label. The economics binding is competing versus complementary. |
| "overall productivity and some workers losing is a contradiction" | **Refused.** Fig 1 :13 makes that joint state legal; Fig 4 :31 makes the gap the thing to measure. |
| "Fig 9 union rule is triangulated" | **Confirmed.** Fig 9 :55 and the estimand split in JEP 2016 are low-overlap routes to the same boundary. |
| "the sign for low-skill workers is negative" | **Not confirmed as a verdict.** It is one `specified` world candidate among several, with opposite results for later periods. Kept as candidate, never as figure output. |

**Updated verdict.** The shape survives and the empirical sign is owed. What the figures give is a discipline: split the compound, read R per slot, keep the two currencies and the two estimands separate, buy independence in proportion to the cost of being wrong, and stop where the ground decides. They do not give a number or a sign. That is the honest stop, not a silence.
