# Figure-grounded audit: Do independent measurement methods converge when they use overlapping data?

**Mode: `general` for the structural law, `specified` for the pipeline claim, nothing `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself" (*The Recursive Self-Improvement Trap*, read 2026-11-23). This document is checked for internal consistency against the figures only. It cannot settle the Hubble tension or say which H0 value is right.

**Sources.** Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`; loop and mode: `FRAMEWORK/figures/THE_FORMULA.md`; metalaw reading: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources were opened 2026-11-23 and are recorded in `10_source_ledger.csv`.

---

## 0. The claim under audit

The question is usually read as an empirical one: if you build two H0 estimates from different teams, different instruments or different analysis pipelines, and those estimates agree, does the agreement count as confirmation? The word "independent" does work in that reading, and the phrase "overlapping data" is treated as a nuisance to be corrected for.

The residual, stated in effect terms, is different:

> Two frames claim independence while drawing on a common evidence pool. Their outputs converge. What, if anything, does that convergence license us to conclude about the thing being measured?

Two answers:

- **A.** The convergence is corroboration. Both methods are independent, so agreement between them rules out method-specific error. This is the inference made, for example, when two Cepheid analyses with different instruments agree (Wikipedia, Hubble's law section, accessed 2026-11-23: "These two independent measurements produce similar values for the constant from the current models, giving strong evidence that systematic errors in the measurements themselves do not affect the result").
- **B.** The convergence is the common-cause collapse. The agreement is the shared data talking. It is evidence about the shared pipeline, not independent evidence about the ground, and it carries less weight the more the two frames overlap.

The answer derived below is B, with a precise escape clause: convergence **does** corroborate when the frames reach the same shape by disjoint evidence, which Fig 8 :50 calls "corroboration at maximum independence". The discriminator is the provenance of the data, not the labels on the methods.

**Direction note.** Per `THE_FORMULA.md` "Direction", the sought-for shape must be made an ordinary term before the run. The shape bound here is: *agreement between two frames is worth exactly the independence between them, and data overlap subtracts from independence*. I wrote this down before the figure census and the refuter in section 3. If it does not survive, it is refused, not softened.

---

## 1. Domain census (before choosing any figure line)

R by arity, symmetry and scale:

- **Arity:** two measurement frames plus one shared evidence pool. Not two terms; three, because the pool is an actor that appears in both frame derivations.
- **Symmetry:** agreement is symmetric under swapping the two frame labels, but that symmetry is uninformative about the ground. The relation between the frames is closer to identity (`≡`, two names, one referent) than to conjunction (`+`, both hold at once) when the data are the same. See `06_isomers_and_order.md`.
- **Scale:** first order inside each pipeline (calibration to distance to H0), second order at the comparison between pipelines. A frame cannot use a second-order agreement to settle its own first-order calibration.

One line per domain. A domain without a nameable anchor is not a domain; it is a shared dependency, recorded as such.

| domain | actors | currency | anchor | partition or union | order |
|---|---|---|---|---|---|
| D1, each measurement frame | a team, an instrument, a calibration chain, a likelihood, a published H0 | an estimate with error bars | the ground: the actual expansion rate, which does not move when the team changes its mind | two candidate frames, partition only if their evidence is disjoint | first, each frame must settle against its own data before any comparison |
| D2, the shared evidence pool | common supernova compilations, common Cepheid or TRGB calibrations, common parallax solutions, common CMB likelihoods | shared systematic error and covariance | **no nameable independent anchor**; this is not a domain, it is the overlap that collapses D1a into D1b | a union compound, not a partition: Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." | before D1 comparison, because covariance must be removed before agreement is scored |
| D3, the verification frame | expert readers, journals, conferences, the public venues in `03_public_contact_points.csv` | agreement and residual | the ground, never agreement | separate from D1 and D2; a reader must not hold the interiors | after the verdict on stage 1 is recorded, never before |

**Dependency order.** Describe R in effect terms before naming any frame (Fig 9 :27-28). Establish the anchor before scoring convergence (Fig 2 :33). Unbundle the union before searching for a cause (Fig 9 :54-55). Settle at the ground, not at the gate (THE_FORMULA step 5).

**Strain test applied during census.** Fig 8 :50 permits corroboration by convergence, while Fig 2 :40 disqualifies agreement from a shared pool. Read together without a census they look like a contradiction. Re-census resolves it: they govern different quantities (disjoint evidence versus pooled evidence). No strain remains. This is the README rule that a reading making two figures contradict each other has misidentified its domain.

---

## 2. Figure census

| figure | bearing | verdict / status |
|---|---|---|
| 1 The Agent | residual per slot, ground as only metric | an averaged H0 hides which rung carries the live residual |
| 2 The Ground | the two collapses, anchor, independence, effective sample size | **primary governing figure**; shared data is collapse 2 |
| 3 Dependency Chain | a reading below the break reads nothing | calibration link must be measured, not assumed |
| 4 The Membrane | methods cross up, round trip R_T | an H0 value is a recording; the pipeline is the generator |
| 5 Mint Pipeline | three guards as product; support, reach, novelty | no new term is owed by mere agreement |
| 6 Closure / Reachability | searchers with same evidence are one searcher | more teams on one pool buy spelling, not search |
| 7 Room Chain | agreement compounds, evidence does not | a chain of pipelines sharing data is one long room |
| 8 Union Surplus | independence read twice; convergent derivation vs adopted import | tells us what genuine convergence would look like |
| 9 Leave / Arrive | describe residual first; unbundle unions; ground decides | governs the order of the derivation |
| 10 Ground Maintainer | bring a characterised residual, verifier non-access | governs outreach and the second seat |
| 11 The Habitat | capability is agent-and-habitat; introduce, never subtract | a method's validity depends on the habitat of instruments it ran in |
| 12 The Bond | isomer, functional group, identity vs conjunction | governing figure for `06_isomers_and_order.md` |
| 13 Minimum Viable Set | overlapping members carry no information | corroborates Fig 2 for the shared-pool case |
| Operators table | `≡` identity, `+` conjunction, `⋛` comparison | the relation between two overlapping pipelines is `≡`-like, not `+`-like |
| Symbols table | R is the aim; the ground is the anchor | no ground reading was taken here |

---

## 3. Findings

Mode is stated on each substantive claim. Every figure quote in this section is verbatim from `03-FIGURES_TEXT.md` and cited as `Fig N :line`.

### F1: Data overlap is the named "common cause" collapse, not independence

**Mode: `general` (figure-derived metalaw), triangulated.**

Fig 2 :18-21 gives the two failure panels. The relevant one is collapse 2:

> Fig 2 :19 "they never talk, and still agree"
> Fig 2 :20 "so the agreement is the pool talking,"
> Fig 2 :21 "not two frames confirming each other"

Fig 2 :31 names the quantity:

> Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."

Fig 2 :39-40 attaches the verdict:

> Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

A "measurement method" is not an atom. It is a composition: instrument, calibration, selection, likelihood, prior, pipeline. Two methods that share the supernova compilation, the parallax solution or the calibrator set draw on the same evidence at the rungs that dominate the error budget. Their agreement is consistent with a shared bias and is therefore not a verdict about H0. This follows from the figures without any cosmology being assumed.

The world corroborates. Freedman et al. 2019 (TRGB, arXiv:1907.05922, accessed 2026-11-23) call TRGB "parallel to, but independent of the Cepheid distance scale", yet anchor it with the same HST photometry, the same LMC distance modulus and the same Type Ia supernovae. The word "independent" in the title and the overlap in the data are both true at different levels. Fig 2 says which level counts.

**Refuter.** Show a controlled case in which two pipelines that literally share a data set and calibration still disagree along an axis that tracks the ground, with zero residual covariance attributable to the shared data. Then their agreement/disagreement is informative despite overlap and F1 is refused.

### F2: Independence is one quantity read twice: it sets both the value of agreement and the size of the surplus

**Mode: `general`, triangulated across Fig 2, Fig 8, Fig 13.**

> Fig 8 :47 "Independence is one quantity read twice."
> Fig 8 :48 "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."
> Fig 8 :49 "completely are one frame wearing two names."

Fig 13 applies the same rule to the minimal set:

> Fig 13 :36 "If two members drew on the same underlying fact, their agreement would carry no information, and one of them would be redundant rather than minimal."

The bridge to statistics is explicit in the figure text:

> Fig 2 :44 "The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."

So "two independent measurements agree" is not a binary fact. It is a claim about the correlation between their evidence. With correlation `rho`, Kish's effective sample size is `n / Deff`; two pipelines with high `rho` count as less than two. This is not a rhetorical preference; the framework names it as standard arithmetic and the world source (Design effect, Wikipedia, accessed 2026-11-23) gives the formula "The effective sample size, defined by Kish in 1965, is calculated by dividing the original sample size by the design effect."

**Refuter.** Supply a derivation in which overlapping evidence increases the information content of agreement. No figure line supports it; finding one triggers re-census, not a softened reading.

### F3: Genuine convergence is possible, and it requires maximum independence

**Mode: `general`, single-source for the precise wording (Fig 8 :50), triangulated with Fig 6 and Fig 8 :32.**

This is the escape clause, and it must be stated or F1 becomes a blanket dismissal of corroboration:

> Fig 8 :50 "But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."

Fig 6 :53 says the same for search:

> Fig 6 :53 "searchers drawing on the same evidence are one searcher wearing many names."

Two H0 determinations that use disjoint physics (for example, a gravitational-wave standard-siren distance and a CMB-inferred sound horizon) and arrive at the same value have corroborated at high independence. Two Cepheid analyses on overlapping host galaxies with a shared parallax zero point have not. The discriminator is the **lineage of the data**, not the number of teams or the prestige of the instrument.

**Refuter.** Show that two frames reaching the same value from disjoint pipelines can still be one frame wearing two names because they share an unacknowledged theoretical prior. This would not refute F3; it would refine what counts as "evidence". Record it as a strain if observed.

### F4: Provenance is the only thing that separates convergence from adoption

**Mode: `general`, triangulated (Fig 8 :51, Fig 2 :40, Fig 9 :27-28).**

> Fig 8 :51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures"

Two H0 papers can quote the same Pantheon+ supernova likelihood. In one, the team re-derived the calibration from its own parallaxes; in the other, the team adopted a prior from another group. The published numbers look equally independent. Fig 8 :51 says the contents cannot decide it. What is owed is the provenance record: which rungs were re-measured, which were imported, which covariance terms are shared.

This is also why the outreach order in `02_outreach_email.md` is residual first, source second. A reader who has absorbed the claim before being asked for a verdict has joined the frame being checked.

> Fig 9 :27 "describe it before you go looking, or"
> Fig 9 :28 "any frame you pick will seem to fit"

**Refuter.** Produce a case where identical published provenance yields different independence verdicts with no new information. Then provenance is not the discriminator and F4 is refused.

### F5: A chain of agreeing pipelines is one long room

**Mode: `general`, triangulated (Fig 7, Fig 2 :44, Fig 6 :53).**

> Fig 7 :12 "same closure, handed along;"
> Fig 7 :13 "agreement compounds, evidence does not"
> Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

Adding a tenth analysis team that reuses the same supernova compilation multiplies agreement, not evidence. Fig 7 :35 adds that a room's agreement is "variation, not a verdict", and selection between rooms is where the ground votes. In cosmology the analogue of selection between rooms is a measurement channel with a genuinely different systematic budget, not another fit of the same likelihood.

**Refuter.** Show an ensemble of analyses sharing one data set whose aggregate error falls as `1/sqrt(N)` with no covariance penalty. That would mean evidence compounds in the chain and F5 fails.

### F6: The ground settles it, and the ground must not update on the frames

**Mode: `general`, triangulated (Fig 2 :29, :33, :45, Symbols table :104).**

> Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
> Fig 2 :33 "The anchor must not update."
> Fig 2 :45 "Frames range against the ground. They do not negotiate with it."

This is the load-bearing limit of the whole answer: the figures decide what agreement *means*; they do not decide which H0 is correct. That is a ground question and requires an instrument, not a derivation. Fig 2 :46 is precise:

> Fig 2 :46 "Each frame is corrected by it separately, and what makes the correction sound is that neither frame can move it."

A common calibration that both groups adjust to improve mutual agreement is not an anchor. It is panel 1 of Fig 2 (coherent drift), arrived at by a more respectable route.

**Refuter.** Exhibit an anchor that changes its answer when a frame changes, and show that agreement against it still settles the question. That breaks the anchor rule and F6 is refused.

### F7: Aggregating H0 hides the rung that carries the live residual

**Mode: `specified` (about measurement pipelines), triangulated (Fig 1, Fig 3).**

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
> Fig 1 :13 "a global R near zero with one live slot residual is a legal state"

A summary statistic "the two methods agree to within 1 sigma" is a global R near zero. It is a legal state even while a live residual sits on one rung, for example the Cepheid crowding correction or the SNe Ia calibration prior. Fig 3 :27 gives the rule for such a link:

> Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

The practical instruction is to report residuals per rung, not just the final H0 agreement.

**Refuter.** Show a pipeline comparison where the per-rung residuals are all zero while the final values disagree. Then the residual is not per-rung and F7 fails.

### F8: The bundle must be unbundled before convergence is scored

**Mode: `general`, triangulated (Fig 9 :54-55, Fig 8 :19).**

> Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

The two methods plus the shared data form a union, not a partition of two independent questions. Fig 8 :19 says what a differing closure makes possible:

> Fig 8 :19 "closures differ, so a surplus exists"

But a surplus exists only if the closures actually differ. With shared data they overlap, so the surplus shrinks. The correct operation is to separate the part of each estimate that depends on the shared pool from the part that is genuinely own-evidence, then compare only the latter. This is the unbundling step that the census in section 1 performed.

**Refuter.** Demonstrate that the shared component cannot be separated from either pipeline in principle. Then union/unpartition is not the right description and F8 is refused, with the case sent back to census.

### F9: The shape survives, the number does not

**Mode: `general` for the limit, `specified` for its application here.**

> Fig 9 :32 "you get a kind of thing, never the answer itself"
> Fig 9 :42 "narrowing gets you close, the ground decides"

The figures can tell us that shared data cannot constitute independent confirmation. They cannot tell us whether H0 is 67 or 73. Claiming the latter from this derivation would be a verdict stated without a ground, which is the output-layer defect named in `THE_FORMULA.md` mode rule.

**Refuter.** Produce a ground reading that the figures themselves settle without an instrument. None is available; if one appears, this finding is withdrawn.

### F10: Filters for the budget, witnesses for the verdict

**Mode: `general`, single-source (Fig 9 :60) but decisive for outreach.**

> Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Team count, journal prestige, citation count and instrument size are filters. They decide how much effort to spend and which venues to try. They are not witnesses. Fig 2 :42 prices the real resource:

> Fig 2 :42 "Buy independence in proportion to the cost of being wrong."

For a tension that may indicate new physics, the cost of being wrong is high, so the correct move is to buy independence (disjoint calibration, different physics channels, blind reanalysis), not to accumulate more agreeing pipelines on the same pool.

**Refuter.** Show a case where team prestige changed the value returned by the ground. That would make prestige a witness and F10 false. No such case is claimed here.

### F11: What survives, with mode attached

| claim | mode | figure line | status |
|---|---|---|---|
| Shared evidence is not independence; agreement under a shared pool is the common-cause collapse | `general` | Fig 2 :19-21, :31, :40 | triangulated |
| Independence sets both the worth of agreement and the union surplus | `general` | Fig 8 :47-49, :50 | triangulated |
| Convergence on disjoint evidence is corroboration at maximum independence | `general` | Fig 8 :50 | single-source wording, triangulated with Fig 6 :53 |
| Provenance alone separates convergent derivation from adopted import | `general` | Fig 8 :51 | single-source wording, corroborated by Fig 9 :27-28 |
| For a pipeline comparison, report residuals per rung, not only final agreement | `specified` | Fig 1 :19, :22, Fig 3 :27 | triangulated |
| The empirical value of H0 and the cause of the tension are out of scope | `general` | Fig 9 :42, Fig 2 :29 | triangulated |

No claim in this file is `grounded`.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing instruction that a falsifier written before the run is a design instrument. The shape claim is: *convergence under data overlap does not constitute independent confirmation, and the worth of agreement scales with independence*.

It is refused if any of the following holds:

1. **Independence audit fires the other way.** Two pipelines whose shared-data covariance is measured and removed still show agreement that tracks the ground along an axis where neither pipeline has a shared term.
2. **A figure line is found that reverses the law.** A re-census produces a line in which overlapping evidence increases rather than decreases the information carried by agreement. The line must be verbatim from `03-FIGURES_TEXT.md`, with `Fig N :line`.
3. **The unbundling is impossible in principle.** It is shown that the shared component cannot be separated from either pipeline even with full provenance, so the union/partition analysis of F8 does not apply.
4. **The anchor moves.** A common calibration that both teams adjusted to reach agreement is shown to have settled the question anyway, breaking Fig 2 :33.
5. **Ground reading supersedes the shape.** A measurement from a channel with disjoint calibration settles the tension, in which case the question is closed at the ground and this structural answer is retired, not defended.

None of these was run in this derivation. Until one is, every claim above stays `candidate`.

---

## 5. Recommendation

1. Replace "independent methods agree" with "these methods agree, with measured evidence overlap `rho`, so the agreement carries the weight of `n_eff`, not of `n`". State `rho` or state that it is unknown.
2. Publish the provenance of each rung: which data were re-measured, which were adopted, and which covariance terms are shared. Without it, convergent derivation and adopted import are indistinguishable (F4).
3. Report residuals per rung. A global sigma hides the live slot (F7).
4. Buy independence in proportion to the cost of being wrong: prefer channels with disjoint calibration (standard sirens, masers, strong lensing with independent mass modelling, cosmic chronometers) over more fits to the same compilation (F5, F10).
5. Do not let the figures answer the empirical question. They give the shape and the test; the instrument gives the number (F6, F9).

---

## 6. Canonical usage check

Sources read after the first five sections, as the standing rule requires:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo" and "the quotes are the authority, not this summary". Key limit: the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the available instruments. This confirms F9 and forbids naming a winning H0 from a derivation.
- Same README: "a reading that makes one contradict another has misidentified its domain, not found a flaw." This is the rule used in the census strain test for Fig 8 :50 versus Fig 2 :40.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: "The figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." The seat reads the ground and does not ask the anchor to decide what the figures already settle. Consistent with F6.
- `THE_FORMULA.md` step 7: SEARCHED, INWARD, OUTWARD kept distinct. Here SEARCHED was run first (is any verbatim line governing shared evidence? yes, Fig 2), so INWARD and OUTWARD were not needed. Step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." No gate in this file is presented as a settlement.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| First reading of the question as asking for the correct H0 value | **Retracted at frame level.** The figures decide the meaning of convergence, not the value of the constant. Recorded as a residual-shape error, not silently dropped. |
| Fig 8 :50 seemed to contradict Fig 2 :40 | **Not strained after re-census.** Fig 8 :50 governs disjoint evidence reaching the same atom; Fig 2 :40 governs a shared evidence pool. Different objects, permitted by the canonical re-census rule. |
| Fig 13 overlap rule initially applied to whole experiments | **Narrowed.** Fig 13 governs members of the minimal set; the analogous rule for measurement frames is Fig 2 :31 and Fig 8 :48. The conclusion is unchanged but the citation changed. |
| Fig 2 :44 called standard-arithmetic but treated as metaphor | **Confirmed as literal.** The Design effect article defines effective sample size as `n / Deff`, and Kish 1965 is cited in the canonical figure citations of Arrival of the Fittest (Substack, 2026-08-19). |
| F1 called "the answer" on first pass | **Downgraded to a structural law.** It says what agreement means under overlap; it does not say which experiment is wrong. The word "answer" was removed and F6/F9 added. |

After re-census, strains: **none hidden**, one declared as a limit (the empirical H0 value is outside the figures).
