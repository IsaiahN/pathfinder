# Figure-grounded audit: ECN-0051, inequality and growth

**Mode of this document: `general` on the structural shape, `specified` on the slot-indexed predictions. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, and the world sources in `10_source_ledger.csv`.

---

## 0. The question restated as an effect

The question offers two options:

- **Option H (hinders):** a more unequal distribution reduces broad-based investment and demand, so growth falls.
- **Option S (helps):** a more unequal distribution rewards saving and risk-taking, so growth rises.

Stated in effect terms: X is a shift of income mass between object slots (households, firms, capital owners) in one economy. Y is the growth of that economy's productive reach, conventionally reported as a single aggregate rate. The question asks for the sign of dY/dX. It assumes there is one sign to report.

**What an answer would look like (Direction step).** A bound ordinary term, written down before the run: "dY/dX has one sign, decided by which of two mechanisms dominates, and the dominant mechanism is the same across slots and across measurement frames." That is the sought-for shape. Binding it as an ordinary term lets it accrue a residual like anything else, so it can be refused rather than smuggled in as a preference (Fig 5 :61-66; Formula "Direction"). The refuter in section 3 refuses exactly this term.

**Residual in effect terms.** What fails to resolve is which slots carry live mass when income moves, and which residual each mechanism is answering. Measured growth is an aggregate over slots. Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." So the reported quantity Y is not the residual; it is the thing that hides it. R is indexed by slot (Fig 1 :19), and a healthy global figure with one live slot is a legal state (Fig 1 :13). The residual for this question is: *which slots are live, and what is the sign of the mechanism at each one.*

---

## 1. R by arity, symmetry and scale

- **Arity.** Two, then three. Two: a distribution over slots and a growth outcome. Three once the measurement frame is included, because the frame decides what "distribution" and "growth" name. Not one: so the either/or framing is already a compression.
- **Symmetry.** Option H and Option S are not symmetric inverses. H acts through low-income slots (marginal propensity to consume), S acts through high-income slots (marginal propensity to save and invest). They neither swap nor cancel; they address different slots with different currencies. Fig 13 :38-39 "independence is how little two frames draw on the same evidence, and it is what makes their agreement mean anything."
- **Scale.** First order at the slot (a household spends or saves). Second order at the economy aggregate (growth). Fig 4 :19-20 "Only the actors, the currency and the anchor change." A slot-level fact cannot be read off an aggregate, which is the whole content of Fig 1 :22.

---

## 2. Domain census (before choosing any figure line)

One line per domain with actors, currency and anchor. A candidate with no nameable anchor is not yet a domain.

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| A. Broad demand | households by income decile, firms facing sales | spendable income, marginal propensity to consume | yes: measured consumption and sales, a market | first-order, per slot |
| B. Saving and risk | high-income households, capital owners, firms | saved income, investable capital, measured investment | yes: capital formation and savings rates | first-order, per slot |
| C. Measurement frame | statistical agencies, survey and tax records, PIP, LIS, WID | Gini, Palma, GDP, income vs consumption | contested: the anchor moves with the frame (income-based Gini about 13 percent higher than consumption-based, Our World in Data 2026) | upstream, decides what A and B can name |
| D. Cooperation and participation | workers, cooperating agents, firms' employees | fairness, willingness to participate | yes: refusal behaviour in experiments (capuchin refusal, ultimatum rejection) | low-overlap, cross-field |

**Not a domain yet:** "the net effect of inequality on growth." Its anchor cannot be named independently of C, because the quantity whose sign is asked is produced by the measurement frame. A question whose anchor is the frame is not a domain; it is a compound owed to a census (Fig 9 :4-5).

**Partition or union.** Domain C is upstream of A and B; A and B are not a partition of one effect, they are overlapping conditions that can both hold in one economy at different slots and different times. D cuts across both. So the split is a **union**, not a partition. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."

**Order by dependency (Fig 3 :20).** C first (without a slot-indexed measure there is no R to range against), then A and B at first order, then D as the cross-field witness, then any second-order aggregate last. Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Both camps already measure inequality and growth finely, so perception is not the broken link. The broken link is link 3, the objective: what counts as growth and what counts as broad-based. That is why more data has not settled the either/or.

Strain test applied: a figure line that only fits by forcing is sent back to the census. Two such lines were found and are recorded in section 6.

---

## 3. Figure census: verbatim lines cited before conclusions

Quoted from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Every quoted string is a verbatim substring.

| figure | verbatim line | bearing |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | growth must be ranged per slot |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | a single growth rate hides the mechanism |
| Fig 1 :13 | "a global R near zero with one live slot residual is a legal state" | a healthy GDP can coexist with a live distributional failure |
| Fig 1 :23 | "The ground enters as the only metric." | agreement between camps is not the metric |
| Fig 1 :27 | "They are frame-internal. A frame cannot score itself with a quantity it also produces." | Gini and GDP cannot validate the frame that produces them |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | tests the growth measure |
| Fig 2 :30 | "If it moves when you push on it, it is not an anchor." | the measurement frame is not the ground |
| Fig 2 :31 | "Independence, between two frames, is how little they draw on the same evidence." | the two mechanisms must not be pooled |
| Fig 2 :40 | "agreement about the world is worthless when the agreeing frames share an evidence pool" | cross-country panels are one pool |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | no consensus vote settles this |
| Fig 3 :19 | "Optimising a link that already works cannot rescue one that does not." | more measurement cannot fix the objective |
| Fig 9 :4 | "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset" | the empirical literature's pattern |
| Fig 9 :5 | "are not one hard question but several well-formed ones. Split it rather than search." | split rather than average |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | H and S are a union |
| Fig 9 :55 | "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." | the either/or is a bundle |
| Fig 9 :56 | "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." | why one policy lever leaves the other mechanism active |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | the framework returns a shape |
| Fig 9 :44 | "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." | null results do not close it |
| Fig 11 :49 | "An actor's valence is relative to the residual, not a property it carries." | saving is not intrinsically pro- or anti-growth |
| Fig 11 :50 | "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." | the same rich household helps one channel and hurts another |
| Fig 11 :51 | "No standing list of good actors survives a change of residual." | no permanent "job creators" or "drag" class |
| Fig 13 :22 | "a difference that can be spent" | inequality is a gradient, a spendable difference |
| Fig 13 :110 | "And each composition becomes an atom for whatever composes over it." | slot-level gains compose into aggregate growth |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence" | the empirical sign is a verdict of unreachability, not an omission |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | an underpowered panel is not a null |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | the aggregate-to-slot transform is lossy |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | do not teach the frame before asking for a verdict |

---

## 4. Findings

### F1 — The question asks for one sign where the residual is indexed by slot (decisive for the shape)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13 "a global R near zero with one live slot residual is a legal state."

Growth is reported as one number. The two mechanisms act at different slots with different currencies: low-income slots spend a larger share (demand), high-income slots save a larger share (investment). A single rate cannot register which slot is live. The question's premise, "one sign for growth," is precisely the aggregation the figures forbid.

**Mode:** `general` (structural), triangulated across Fig 1 :19/:22 and Fig 13 :110 (Fig 13 :110 says slot-level compositions become atoms at the next level, which is the only legitimate route to an aggregate). The two figures have low overlap: Fig 1 is the per-slot loop, Fig 13 is the substrate composition, so this is triangulation, not restatement.

**Refuter:** show that an aggregate growth measure carries the full per-slot signal, so that no slot-indexed residual is needed to decide H versus S. If that were demonstrated, this finding fails.

### F2 — The two mechanisms are a union compound, not two answers to one question

Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."

H and S are both real and can both be active in one economy: a redistribution toward low-income slots raises demand and may lower investable surplus; a concentration toward high-income slots raises investable surplus and may lower demand. They overlap where both conditions bind. Fig 9 :4 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset" and Fig 9 :5 "are not one hard question but several well-formed ones. Split it rather than search." This is exactly the pattern of the empirical literature: each rule works on a different subset (a country, a development stage, a part of the distribution) and the disagreement does not shrink with more panels.

**Mode:** `general`, triangulated across Fig 9 and the Library of Babel essay: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way." Low overlap between a figure about unions and an essay about search navigation.

**Refuter:** demonstrate a single closed loop with a single ground that settles H and S simultaneously, with no residual left that is indexed to a particular slot. That would collapse the union into one question and refute this finding.

### F3 — The actor's valence is relative to the residual, so "help or hinder" is under-specified

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51 "No standing list of good actors survives a change of residual."

Saving and risk-taking are not intrinsically growth-promoting or growth-destroying. For the residual "investable capital," a concentrated high-income household is a benefactor. For the residual "effective demand," the same household is a malfactor relative to a low-income household with a higher propensity to consume. The question asks whether inequality helps or hinders *growth* without naming which residual is being ranged. Until that is named, both options are the same actor read against two different residuals.

**Mode:** `general`, triangulated across Fig 11 :49-51 and the human-cognition world source (Fehr and Schmidt inequity aversion, via Wikipedia 2026), which independently reports that an employer "can use inequity aversion to get higher performance for less pay than would be possible otherwise." The same distributional fact serves different ends depending on the seat. Overlap low (habitat figure versus experimental economics), so corroboration is weak but real.

**Refuter:** show an actor whose sign is invariant across residuals, i.e. a distributional change that always raises or always lowers growth regardless of which slot's residual is tracked. That would refute valence-relativity.

### F4 — The measurement frame is not the ground

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30 "If it moves when you push on it, it is not an anchor." Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

The economy does have anchors: an expenditure, an investment decision, a market outcome. But the standard reported quantities are frame products. Our World in Data (2026) records that "income-based Gini coefficients are about 13% higher than consumption-based ones for the same country," and the WID FAQ notes that its estimates combine "national accounts and survey data with fiscal data sources" and "should however not be seen as perfect and definitive." The World Inequality Database's own warning, quoted by Our World in Data: "these series should be viewed as imperfect and provisional." A quantity that changes when the frame is pushed is not the anchor. It can still be an instrument; it just cannot be the thing that settles.

**Mode:** `specified` (the claim is about these named measurement systems), triangulated across Fig 2 :29-30 and the world measurement sources. **Strain:** Fig 2 permits a market to be an anchor, and markets are inside the economy being measured. Re-census: the market anchor is the particular transaction (an actual purchase, an actual investment), not the aggregate index computed from many transactions. The aggregate index is the frame. Strain dissolved by re-census, recorded here rather than hidden.

**Refuter:** exhibit a growth or inequality statistic whose value is invariant across the income/consumption and survey/tax frame choices and that settles H versus S at the ground. Then the measurement frame would be behaving as an anchor.

### F5 — The gradient is spendable, which is why Option S is not empty

Fig 13 :22 "a difference that can be spent." Fig 13 :110 "And each composition becomes an atom for whatever composes over it."

Inequality is a spectrum (an ordering, so more and less can be said) together with a gradient (a spendable difference). The concentrated end of the distribution can be spent on investment, so Option S is a real mechanism, not a rhetorical claim. The distributed end can be spent on consumption, so Option H is real too. Neither is excluded by the substrate. What the substrate does exclude is treating the two as one quantity: which state the difference is bonded to is part of what the gradient is.

**Mode:** `specified` (a mapping from the economics frame onto held atoms, not a derivation of economics from the six terms), single-source for the figure line and corroborated by the natural experiment record (Hope and Limberg 2022, via Wikipedia: "we find no significant effects of major tax cuts for the rich", which constrains but does not settle the size of the gradient effect). **Strain:** mapping an income distribution onto Fig 13's spectrum/gradient is an analogy, not a derivation. Marked as such; it governs a shape, not a number.

**Refuter:** show that the concentration of income has no spendable difference at the relevant margin (perfectly inelastic investment out of concentrated income), so the gradient mapping carries nothing.

### F6 — Filters for the budget, witnesses for the verdict

Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 7 :13 "agreement compounds, evidence does not."

Most of the empirical inequality-and-growth literature draws on overlapping data infrastructure: World Bank PIP, LIS, WID, and the same panels of countries. Agreement across those papers is one pool talking. It is useful for deciding where to look (budget) and useless as a witness for the verdict. The IMF finding quoted in Wikipedia's reference list, "inequality continues to be a robust and powerful determinant both of the pace of medium-term growth and of the duration of growth spells," and Hope and Limberg's "no significant effects of major tax cuts for the rich," lean in different directions on specific policies, but both come from the same macro-panel tradition. Their disagreement is not two independent witnesses; their agreement would not be either.

**Mode:** `general`, triangulated across Fig 2 :40 and Fig 7 :13. **Refuter:** identify two studies of this question with genuinely independent anchors (different data generation, different contact with the ground, not two readings of the same panel) and show their agreement changes the verdict.

### F7 — The empirical net sign is a gap, not a silence

Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." Fig 13 :134 "Unreachable is a verdict here, not a silence."

After a genuine census, no figure line governs the *net sign* of dY/dX. The figures constrain what any answer must look like (per-slot, unbundled, valence-relative, anchor-checked). They do not contain a measurement of an economy. That is a `gap` for this quantity, reported plainly. The Kuznets curve literature concurs at ground level: Wikipedia (2026) states "The hypothesis remains highly contested among economists, with no consensus regarding its validity," and records Palma's finding that "the statistical evidence for the 'upwards' side of the 'Inverted-U' between inequality and income per capita seems to have vanished." *The Hard Problem is About Source* gives the instrument rule: "The answer is unreached until a better instrument exists." The distinction there is between an unreached answer and an unanswerable one, which is the same distinction Fig 8 draws between underivable and unreachable at this budget.

**Mode:** `general` on the unreachability verdict, `specified` on which instrument would close it. Single-source for the figure lines that license the verdict (Fig 8 and Fig 13), corroborated by the world literature.

**Refuter:** a ground reading, not an argument. A slot-indexed, frame-invariant measurement that returns a stable sign for both channels would move this from `gap` to `grounded`.

### F8 — A list selected for agreement cannot check this

Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool."

Outreach must go to public, opt-in institutional venues (see `03_public_contact_points.csv`), one-to-one, with the residual and the refuter first and the framework withheld until a verdict is recorded. A list ranked by likely receptiveness would select for the very correlation that disqualifies agreement. *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."

**Mode:** `general`, triangulated across Fig 2 and Fig 10. **Refuter:** a checking arrangement where agreement from a receptiveness-selected list is shown to be independent evidence. By Fig 2 :40 that cannot happen by construction, so this finding is close to definitional, which is why it is stated as a design rule rather than an empirical prediction.

### F9 — What survives

| claim | mode | status | figure |
|---|---|---|---|
| Growth must be ranged per slot, not as a single aggregate | `general` | triangulated, survives | Fig 1 :19, :22; Fig 13 :110 |
| H and S are a union of overlapping conditions and must be unbundled | `general` | triangulated, survives | Fig 9 :54-56; Library of Babel |
| The sign of an actor depends on which residual is ranged | `general` | triangulated, survives | Fig 11 :49-51 |
| The measurement frame is not the ground | `specified` | triangulated, survives, one strain dissolved | Fig 2 :29-30; Fig 1 :27 |
| The concentrated gradient is spendable, so S is a real mechanism | `specified` | single-source, analogy marked | Fig 13 :22 |
| The net empirical sign of dY/dX | not a claim | `gap`, unreachable at this budget | Fig 8 :39; Fig 13 :134 |
| "Inequality helps" or "inequality hinders" as a single verdict | refused | neither option survives as written | F1 to F3 |

---

## 5. Pre-registered refuter (written before the conclusion)

Required by the discipline: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is this document's conclusion: growth responds to distribution per slot, the two mechanisms form a union, and valence is residual-relative. It is refuted if any of the following holds:

1. An aggregate growth statistic is shown to carry the full per-slot signal, so that no slot-indexed residual is needed to decide between H and S. (Breaks Fig 1 :19/:22.)
2. A single closed loop with one ground is shown to settle both mechanisms simultaneously, with no overlapping-condition residue. (Breaks Fig 9 :54-56.)
3. An actor is shown to have invariant sign across residuals, so a distributional change always raises or always lowers growth regardless of the slot tracked. (Breaks Fig 11 :49-51.)
4. A frame-invariant growth or inequality statistic is shown to exist and to settle at the ground. (Breaks Fig 2 :29-30 and closes the F7 `gap`.)

If any fires, the shape is withdrawn. None was fired in this run. Until one is attempted, no part of this may be labelled `grounded`.

---

## 6. Strains, retractions and confirmations

| earlier reading | status after re-census |
|---|---|
| "Market can be an anchor" strained, because markets are inside the economy | **Not strained.** Re-census: the anchor is the particular transaction, not the aggregate index computed from transactions. The index is the frame. Recorded in F4. |
| "Inequality is a gradient" could be read as deriving economics from the six-term set | **Narrowed.** It is a binding from the economics frame onto held atoms (spectrum, gradient), not a derivation and not a new primitive. Recorded in F5. |
| World sources lean toward "inequality hurts growth," so perhaps the verdict should be H | **Refused.** Fig 1 :23 "The ground enters as the only metric," and world sources are secondary. The conflict between the IMF finding and the Hope and Limberg finding is a conflict inside one evidence pool, not two witnesses. Per the WATSON rule a conflict sends us back to the census, which produced F2, not a flip. |
| "No consensus in the literature means the question is open" | **Refined.** No consensus is not itself evidence of a gap. The gap is structural: no figure line governs an empirical net sign, and the measurement anchor moves. The literature's non-shrinking disagreement is a symptom (Fig 9 :4), not the reason. |
| Outreach could target well-known inequality researchers to get a quick verdict | **Retracted.** Prestige is not action; reputation-selected agreement is the named collapse (Fig 2 :40, *The Recursive Self-Improvement Trap*). Public opt-in venues only. |

Strains after re-census: **none live.** Two were found, both dissolved by re-census above. One analogy is explicitly marked (F5).

---

## 7. Recommendation

1. Send the shape claim and its four refuters to the public venues in `03`, not a conclusion about the sign. Ask what the recipient would count as a failure.
2. Keep the two mechanisms separate in every artifact. Never average their signs into one "net effect."
3. State mode on every substantive sentence: `general` for structure, `specified` for the slot-indexed predictions, `gap` for the empirical sign.
4. Withhold the figures and the framework until the stage-1 verdict is recorded. Fig 10 :52 "Bring a characterised residual, never the source."
5. Treat the measurement question as upstream, not as a footnote. A slot-indexed, frame-checked measure is the instrument this question is owed.
