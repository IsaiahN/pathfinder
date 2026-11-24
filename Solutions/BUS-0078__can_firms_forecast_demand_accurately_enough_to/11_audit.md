# Independent second-seat audit, BUS-0078

**Seat:** ground maintainer / reviewer. What this seat may see: the residual line, the records, the provenance, the verbatim figure text. What it must not see: the primary solution's interiors while it writes its own census.

**Honesty limitation, stated first.** This audit was written in the same session by the same model that wrote `01` through `10`. It is a **simulated second seat**, not a second person and not an independent witness. It checks the solution for internal consistency, re-censes from the residual line, and measures the round-trip gap. It cannot supply the independence that a real outside frame would supply. Per Fig 2 :31, *"Independence, between two frames, is how little they draw on the same evidence."* This seat and the primary seat draw on the same text, so any agreement between them is one evidence pool. Record that plainly.

**Mode: `specified`.** This is a simulated derivation, not a ground reading.

---

## 1. The residual line, taken alone

> Why does the gap between what a firm's forecasting library predicts customers will buy and what customers actually do fail to be tethered closely enough, per SKU and period, to keep overage and underage both small, and which failure mode is binding?

R = |Γ(b,a) - o′| per slot. The object of explanation is the **joint behavior of two costs under uncertainty**, not the magnitude of an accuracy score. Nothing in this line says "model", "algorithm", "MAPE", "machine learning", "safety stock" or "accuracy target". Any answer that begins with one of those words has already named a candidate before describing the residual, against Fig 9 :28 (*"any frame you pick will seem to fit"*) and Fig 8 :53 (*"Residual first, frame second"*).

**Anchor check.** Nameable anchors exist: realized unit sales, the write-off counter and the lost-sale counter, all named as counters in Fig 2 :29. So this is a well-formed question and not yet a `gap`. A candidate anchor that fails the test is MAPE, because changing the aggregation level changes it without changing customer behavior (Fig 2 :30: *"you push on it, it is not an anchor"*).

---

## 2. Independent re-census from the residual line

### 2.1 Arity, symmetry, scale

- **Arity:** a relation among firm-library Γ, order action a and realized demand o′, indexed by slot s and ordered by time t. At least three operands plus an ordering. A two-place reading (firm, accuracy) loses the action and the two cost outcomes, so it is rejected.
- **Symmetry:** not symmetric. Realized demand is an anchor and does not update on the firm's opinion (Fig 2 :25). "Accurate enough" is a threshold comparison against two costs, so one operand is compared, not merely conjoined (Fig 12 :87). The two costs are in different units (Fig 12 :125), so there is no single natural scale.
- **Scale:** the slot is a SKU, but "superior" and "accurate enough" only acquire meaning against a population of slots and a supply chain of echelons (Fig 4 :5). The time index crosses the membrane between the firm's step loop and the population's selection loop (Fig 4). So the residual is intrinsically cross-scale.

### 2.2 Domains, one line each

| domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|
| A: the demand channel | POS data, orders, sell-through, supply line | contact with realized demand | realized unit sales | yes |
| B: the forecasting frame | models, history, priors, overrides | reach, description cost | settlement against realized demand (Fig 5 :32) | yes |
| C: the operational decision | replenishment, safety stock, capacity | actions and two costs | write-off and lost-sale counters | yes |
| D: the market habitat | customers, competitors, promotions, shocks | demand shifts | customer choice | yes |
| E: "accuracy" as a free property | the metric | MAPE, FVA score | none independent of the model that produces it | no, not a domain |
| F: "zero shortage" as absolute | a service policy | fill rate | measurable, but already inside C and contradicted by the canonical optimum | absorbed into C |

**Divergence from the primary census, recorded.** The primary called its first two domains D1 (demand channel) and D2 (forecasting frame). This seat at first proposed splitting the channel into "data freshness" and "supply-line visibility". On re-census they share one anchor, realized demand, and their overlap is a compound, so they are one domain A. This seat also tested merging B and C because both involve the order decision; it declined, because the currencies differ in kind: B is settled by whether a prediction pays, C by whether the action pays. The primary kept them separate for the same reason without stating the test. Both censuses arrive at four admitted domains.

**Partition or union:** union. The two named conditions are contact maintenance (A and D) and reach renewal (B, with D supplying the differing closure). Their overlap is a compound with its own loop (Fig 9 :54-57).

**Dependency order:** perception → vocabulary → objective → planning → learn and carry (Fig 3). This seat agrees with the primary ordering and adds that the residual line itself only supports the first three links; planning and carrying are candidate answers introduced by the frame, not forced by the residual.

---

## 3. Verbatim figure lines checked

Each line below was re-opened in `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. The "exact" column records whether the quoted string is an exact substring of the cited figure line, case-insensitively and ignoring trailing punctuation.

| citation | exact string checked | exact? |
|---|---|---|
| Fig 1 :19 | The residual is indexed by object slot, not aggregated. | yes |
| Fig 1 :22 | Aggregating across slots is how a live signal disappears into an average. | yes |
| Fig 1 :27 | They are frame-internal. A frame cannot score itself with a quantity it also produces. | yes |
| Fig 2 :29 | An anchor is whatever settles the question and does not change its answer because of what any frame thinks. | yes |
| Fig 2 :31 | Independence, between two frames, is how little they draw on the same evidence. | yes |
| Fig 3 :27 | A link with no instrument is not a link that works. It is a link nobody has looked at. | yes |
| Fig 6 :21 | MINT composes inside the closure and can never add an atom. | yes |
| Fig 6 :23 | No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs. | yes |
| Fig 6 :40 | What is unavailable is a sensor for something that has never registered anywhere, at any resolution. | yes |
| Fig 7 :13 | agreement compounds, evidence does not | yes |
| Fig 8 :32 | Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. | yes |
| Fig 9 :32 | you get a kind of thing, never the answer itself | yes |
| Fig 9 :57 | What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. | yes |
| Fig 10 :24 | the ground does not decay, the channel does | yes |
| Fig 10 :26 | saturated metrics, pooled readings | yes |
| Fig 11 :40 | An improvement that does not change contact changes nothing, however much it improves. | yes |
| Fig 12 :112 | A plan is a sequence. A goal is a comparison. Progress is a subtraction. | yes |
| Fig 12 :117 | isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour. | yes |
| Fig 12 :125 | A composition costs in two currencies, and they do not add. | yes |
| Fig 13 :115 | The set is closed. The arrangements are not. That gap is why import exists. | yes |

**One citation discipline note, not a drift.** Fig 13 :134 is a longer line beginning *"So the system can report that it lacks something rather than producing an answer anyway."* The phrase *"Unreachable is a verdict here, not a silence,"* is an exact substring, but a citation should not imply it opens the line. `01` and `07` cite it as a substring, which is accurate. No figure quote in the solution was invented, and no quote came from a summary.

---

## 4. Round trip gap R_T

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

- **T_A, going up:** carry the primary's two-condition shape to a one-sentence abstraction. Result: *sustained forecasting value requires maintaining a relational loop between the firm and realized demand.*
- **T_E, coming back:** put that abstraction into a specific SKU situation. Result: *listen to customers more closely and use a better model.*

**R_T = gap(x, (T_E ∘ T_A)(x)).** The gap is what the abstraction cannot hold:

1. The one-sentence form collapses the union into one lever. It loses Fig 9 :57, *"a case in two conditions is not a harder case of either."* Coming back down, it tells a firm failing C2 merely to listen harder, which is effort above the break (Fig 3 :29-30).
2. It loses the anchor rule. "Relational loop" does not specify that realized demand and the counters, not internal accuracy agreement, settle the question (Fig 2 :29, Fig 1 :27). Coming back down, it permits a firm to score itself with a quantity it produces.
3. It loses the channel/reach distinction. "Listen more closely" could mean refreshing a stale channel (C1) or importing a new atom (C2); the abstraction cannot tell them apart, so it buys the wrong instrument.
4. It loses the two-currency result. "Better model" counts only bits cost, and has no place for the actions cost of finding out whether the forecast holds (Fig 12 :125-130).
5. It loses the source-discriminator requirement. The abstraction cannot say what instrument would distinguish a paying habitat from luck, which is the actual `gap` in the answer.

This gap is not an error to eliminate; it is the measurement of what the coarser description cannot hold (Fig 4 :31). It is also why the outreach packet sends the generator, not the one-sentence version (Fig 4 :25). The one-paragraph version in `07` is a deliberately lossy artefact and is labelled as such.

---

## 5. Strains

| id | strain | handling |
|---|---|---|
| S1 | Applying Fig 13's six physical substrate terms to demand "ingredients" only fits by renaming inventory as energy and trend as gradient | sent back to census; Fig 13 now governs only the honest stop. Resolved |
| S2 | Treating "forecast accuracy" as an anchor while MAPE changes with aggregation and error measure | re-census: Fig 1 :27 disqualifies it; the anchor is realized demand and the counters. Resolved |
| S3 | Reading Fig 7 :26, *"progress per handoff: R = h² × S"*, as a calibrated equation with measurable h² and S | strained: the figure supplies two factors and no numbers. Re-census: product structure, mode `specified`, not a formula to fit. Resolved |
| C1 | The newsvendor optimum deliberately creates shortage, against the literal question form (zero shortage) | genuine world/figure conflict; returned to census and re-mapped to a two-cost comparison (Fig 12 :112). Verdict unchanged, question form refused. Resolved by re-census, not by a softer reading |
| S4 | Treating "Machine Learning" or "FVA" as the framework's answer to C2 | re-census: business-pool bindings with no source gate; names where the framework returns a shape. Recorded as imports with zero verdict weight. Resolved |

No unresolved strain after re-census. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw; each strain above was returned to the census rather than smoothed over.

---

## 6. Comparison with the primary census

| item | primary (`01`) | second seat (this file) | outcome |
|---|---|---|---|
| admitted domains | D1 channel, D2 frame, D3 decision, D4 habitat | A channel, B frame, C decision, D habitat | same four, different names; agree |
| excluded candidate | forecast accuracy, no anchor | accuracy as free property, no anchor | agree |
| partition or union | union of C1 and C2 | union of contact and reach | agree |
| demand channel | one domain D1 | initially split, re-merged on shared anchor | same endpoint; second seat adds the anchor test |
| dependency order | per Fig 3, middle link breaks | per Fig 3, plus note that only first three links are forced by residual | refinement, not conflict |
| decisive figures | Fig 1, Fig 10, Fig 7, Fig 6, Fig 12 | Fig 2, Fig 1, Fig 10, Fig 6, Fig 12 | agree on the core set; second seat elevates Fig 2's anchor rule |
| verdict | two conditions, kept separate, `specified` | two conditions, kept separate, `specified` | agree |
| zero shortage | refused, re-mapped to cost comparison | refused, re-mapped to cost comparison | agree |
| naming the winning model | `gap` | `gap`, confirmed by source-discriminator argument | agree |
| world sources | secondary, no verdict flip | secondary; one witness per pool; conflicts returned to census | agree |

**Round trip between seats.** The two censuses were written from the same residual line and the same figure text. Their agreement is a check of internal consistency, not triangulation (Fig 2 :31, :40). A real outside frame with a different evidence pool is still needed, and that is what the expert packet is for.

---

## 7. Verdict on the solution

**Status: pass, with three annotations.**

1. **Pass on structure.** Residual stated in effect terms, census before figure lines, verbatim quotes with `Fig N :line`, verdicts per domain and never averaged, pre-registered refuter, mode stated, `gap` declared where no line governs, no em dashes, sources opened and recorded. The figure quotes checked in section 3 are exact substrings of the verbatim extract.
2. **Pass on derive-first discipline.** The one genuine world/figure conflict (newsvendor's nonzero optimum vs the literal zero-shortage question) was returned to the census and re-mapped rather than used to flip the verdict. Five strains or conflicts were logged and resolved by re-census.
3. **Annotation A, independence.** This second seat is simulated and shares an evidence pool with the primary. The solution has not received an independent human check. Its status must remain `specified`, and it must not be presented as corroborated by this audit.
4. **Annotation B, round trip.** The one-paragraph version in `07` is lossy in five named ways (section 4). It is suitable only as an invitation to check the full packet, never as a substitute for it.
5. **Annotation C, submission.** This is LLM-assisted work. It must not be submitted as an authored empirical or theoretical article; venue AI policies were not opened in this session, so none is asserted. Use it as a private checking instrument; a human researcher owns and writes anything submitted.

**Final:** the solution is internally consistent with the figures, honest about its simulation status, and correctly stopped at a `specified` shape with an open instrument gap. It is not a ground reading and cannot settle BUS-0078. `Unreachable is a verdict, not a silence`: the missing instrument is characterized, the refuters are written, and the stop is recorded.
