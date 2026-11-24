# Independent second-seat audit, ECN-0013

**Seat:** ground maintainer / reviewer. What this seat may see: the residual line, the records, the provenance, the verbatim figure text. What it must not see: the primary solution's interiors while it writes its own census.

**Honesty limitation, stated first.** This audit was written in the same session by the same model that wrote `01` through `10`. It is a **simulated second seat**, not a second person and not an independent witness. It checks the solution for internal consistency, re-censes from the residual line, and measures the round-trip gap. It cannot supply the independence that a real outside frame would supply. Per Fig 2 :31, *"Independence, between two frames, is how little they draw on the same evidence."* This seat and the primary seat draw on the same text, so any agreement between them is one evidence pool. Record that plainly.

**Mode: `specified`.** This is a simulated derivation, not a ground reading.

---

## 1. The residual line, taken alone

> Why does the per-slot gap between a firm's pricing prediction and the market's realized price move in some slots and regimes and not others, and what is lost when those slots are pooled into an inflation rate?

R = |Γ(b,a) − o′| per slot. The object of explanation is the behaviour of a per-slot price residual under pooling. Nothing in this line says "markup", "market power", "greed", "cost shock", "monopoly", "demand" or "inflation expectations". Any answer that begins with one of those words has already named a candidate before describing the residual, against Fig 9 :28 (*"any frame you pick will seem to fit"*) and Fig 8 :53 (*"Residual first, frame second"*).

**Anchor check.** A nameable anchor exists: the market, explicitly listed in Fig 2 :29. But the line also asks what is lost in pooling, which makes the pooled index an object of suspicion rather than an anchor. So this is a well-formed question and not a `gap` at the anchor step; the `gap` arises later, at the magnitude step.

**Bind the sought-for shape.** Written before the re-census: the answer would be (i) conditions governing the per-slot residual, (ii) an account of the pooling transform and what it discards, and (iii) an instrument that discriminates among sources of a markup reading. This seat binds the same three-part shape as the primary, independently, from the residual line alone. That is internal consistency, not corroboration.

---

## 2. Independent re-census from the residual line

### 2.1 Arity, symmetry, scale

- **Arity:** a relation among firm-library Γ, action a, market outcome o′ and slot s, ordered by time t. It has at least four operands and one ordering. A two-place reading (firm, inflation) would lose the action, the prediction, the slot and the pooling, so it is rejected.
- **Symmetry:** not symmetric. The market is an anchor and does not update on the firm's opinion (Fig 2 :25). "High markup" and "inflation" are threshold comparisons (Fig 12 :87), so operands are quantities compared against others, not merely conjoined. The comparison is ordered: `P ⋛ MC` is not `MC ⋛ P`.
- **Scale:** the slot is a firm, but the ranking "high" or "superior" exists only at the population scale (Fig 4 :5). The time index and the pooling step cross the membrane between the firm's step loop and the population's selection loop (Fig 4). The residual is intrinsically cross-scale, and the transform is lossy, so R_T is owed.

### 2.2 Domains, one line each

| domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|
| A: single firm pricing loop | decision makers, pricing routines, Γ | price quotes, markups, predicted margin | realized transaction price and marginal cost at the slot | yes |
| B: population and index | firms, buyers, entrants, monetary authority | share, survival, price level | realized market outcomes; the market as ground (Fig 2 :29). The index is a pooled reading of it | yes |
| C: cost and pass-through composition | marginal cost, overhead, input prices, expectations of future cost | cost changes, pass-through, markup readings | realized cost and price data; source of a reading not fixed by the reading | yes |
| D: measurement channel | estimators, accounts, index rules, price statisticians | contact with the ground | the ground that persists while the channel does not (Fig 10 :24) | yes |
| E: "greed" as a free property | a firm | a disposition | none independent of measured price and margin | no, not a domain |
| F: "market power" as one scalar cause | an industry | a concentration statistic | measurable, but it is a reading of A and C already | absorbed into A and C |

**Divergence from the primary census, recorded.** The primary named D1 firm loop, D2 habitat/index, D3 cost structure and D4 channel. This seat at first proposed splitting the measurement channel into two domains: "estimator construction" (how a markup is computed) and "index pooling" (how slots become an index). On re-census they share one anchor, the persisting ground, and their overlap is a compound, so they are one domain D. This seat also tested merging B and D because both concern the index; it declined, because the anchors differ in kind: B is settled by market outcomes at the moment, D by the persistence of the ground across the transform. The primary kept them separate for the same reason without stating the test. Both censuses arrive at four admitted domains.

**Partition or union:** union. The two named conditions are contact maintenance (A and C) and source discrimination (C and D), with B supplying the differing closure. Their overlaps are compounds with their own loops (Fig 9 :54-57).

**Dependency order:** perception, vocabulary, objective, planning, learn and carry (Fig 3). This seat agrees with the primary ordering and adds that the residual line itself supports only the first three links; planning and carrying are candidate answers introduced by the frame, not forced by the residual. In particular, "how much" presupposes an objective link that has no instrument here (Fig 3 :27).

---

## 3. Verbatim figure lines checked

Each line below was re-opened in `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. The "exact" column records whether the quoted string is an exact substring of the cited figure line after the validator's normalisation (curly quotes and apostrophes straightened, whitespace collapsed, trailing punctuation ignored).

| citation | exact string checked | exact? |
|---|---|---|
| Fig 1 :19 | The residual is indexed by object slot, not aggregated. | yes |
| Fig 1 :22 | Aggregating across slots is how a live signal disappears into an average. | yes |
| Fig 1 :27 | They are frame-internal. A frame cannot score itself with a quantity it also produces. | yes |
| Fig 2 :29 | An anchor is whatever settles the question and does not change its answer because of what any frame thinks. | yes |
| Fig 2 :31 | Independence, between two frames, is how little they draw on the same evidence. | yes |
| Fig 2 :42 | Buy independence in proportion to the cost of being wrong. | yes |
| Fig 4 :22 | Only methods cross up. Only head starts come down. | yes |
| Fig 4 :30 | So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked. | yes |
| Fig 7 :13 | agreement compounds, evidence does not | yes |
| Fig 7 :36 | A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced. | yes |
| Fig 8 :32 | Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. | yes |
| Fig 8 :39 | So a search that finds nothing is never a proof of absence. | yes |
| Fig 9 :32 | you get a kind of thing, never the answer itself | yes |
| Fig 9 :55 | A bundled problem is usually a union of overlapping conditions, not a list of separate ones. | yes |
| Fig 9 :57 | What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. | yes |
| Fig 9 :60 | Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict. | yes |
| Fig 10 :24 | the ground does not decay, the channel does | yes |
| Fig 10 :25 | stale percepts, dropped transients, saturated metrics, pooled readings | yes |
| Fig 10 :42 | A verifier that can reconstruct the claim cannot verify it. | yes |
| Fig 11 :39 | capability is a property of agent-and-habitat, never of the agent alone. | yes |
| Fig 11 :49 | An actor's valence is relative to the residual, not a property it carries. | yes |
| Fig 12 :117 | isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour. | yes |
| Fig 12 :121 | cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction. | yes |
| Fig 12 :125 | A composition costs in two currencies, and they do not add. | yes |
| Fig 13 :134 | Unreachable is a verdict here, not a silence, | yes (substring; the line opens "So the system can report that it lacks something rather than producing an answer anyway.") |

**One misuse found and corrected.** An early draft of the primary audit cited Fig 13 :134 as if the line began *"Unreachable is a verdict here, not a silence,"*. The actual line begins *"So the system can report that it lacks something rather than producing an answer anyway."* The quoted phrase is an exact substring of the line, so the quote is valid, but the citation should not imply it opens the line. `01`, `07` and `09` now cite it as a substring, which is accurate. No figure quote in the solution was invented and no quote came from a summary.

**One world quote checked against the opened page.** The Richmond Fed brief's line *"A percentile marks a position rather than a firm, and the firm in the middle of the distribution in 2020 is not the firm that was there in 1960."* appears verbatim in the page fetched 2026-11-23. The Kansas City Fed's share-plus-qualification sentence and the BIS asymmetry sentence were also re-checked against the fetched pages. All match.

---

## 4. Round-trip gap R_T

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

- **T_A, going up:** carry the four-condition union to one sentence. Result: *inflation's dependence on firms is a conditional relation, not a share; keep the slots separate and find the source-discriminating instrument.*
- **T_E, coming back:** put that abstraction into a specific policy or research situation. Result: *collect per-firm price and cost data, separate the four conditions, and report a gap until a discriminator exists.*

**R_T = gap(x, (T_E ∘ T_A)(x)).** The gap is what the abstraction cannot hold:

1. The one-sentence form collapses the union into one lever. It loses Fig 9 :57, *"a case in two conditions is not a harder case of either."* Coming back down, it tells a researcher failing the measurement condition merely to collect better data, which is effort above the break (Fig 3 :29-30).
2. It loses the anchor rule. "Conditional relation" does not specify that the market at the slot, not internal agreement or a markup series, settles the question (Fig 2 :29; Fig 1 :27). Coming back down, it permits a study to measure its own cause with a quantity it produces.
3. It loses the valence flip. "Conditional" has no place for the possibility that the same high markup changes sign when the residual changes (Fig 11 :49-51; BIS 2023). Coming back down, it invites a standing coefficient.
4. It loses the source-discriminator requirement. The abstraction cannot say what instrument would distinguish a barrier from expected future cost, which is the actual `gap` in the answer.
5. It loses the chain-of-cast distinction. "Conditional relation" does not say whether the aggregate moved because firms changed their pricing or because the cast changed (Fig 12 :121; Richmond Fed 2026).

This gap is not an error to eliminate; it is the measurement of what the coarser description cannot hold (Fig 4 :31). It is also the reason the outreach packet sends the generator, not the one-sentence version (Fig 4 :25). The one-paragraph version in `07` is a deliberately lossy artefact and is labelled as such.

---

## 5. Strains

| id | strain | handling |
|---|---|---|
| S1 | Applying Fig 13's six physical substrate terms to "market power" only fits by calling a markup a gradient | sent back to census; Fig 13 now governs only the honest stop, not inflation mechanics. Resolved |
| S2 | Calling the aggregate price index "the ground" while the index is built by a channel | re-census: habitat/outcome updates, ground settles (Fig 11 :73, Fig 10 :24); the slot-level market is the anchor, the index is an instrument. Resolved |
| S3 | Reading Fig 12 :121, "the sign of the loop decides whether it closes", as a calibrated equation | strained: the figure supplies the two factors and a sign, not numbers. Re-census: treat it as a structural claim, mode `specified`, not a formula to fit. Resolved |
| S4 | Treating "market power" as the framework's answer to the residual | re-census: it is a business/economics-pool binding with no source gate; a name where the framework returns a shape. Recorded as an import with zero verdict weight. Resolved |
| S5 | Treating the BIS pass-through asymmetry as ground-settled proof of Fig 11 :49 | narrowed to mechanism-shape corroboration, mode `specified`; one shock family, one sample. Fig 4 :20 requires the anchor to be re-named at the new scale. Resolved |
| S6 | Whether a firm's market position counts as a "quantity" for the comparison bond at the composed level | **live type question**, recorded in `01` F10 and `06` Q1 with a falsifier; named, not hidden |

Five strains dissolved by re-census; one live type question. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw; each dissolved strain was returned to the census rather than smoothed over.

---

## 6. Comparison with the primary census

| item | primary (`01`) | second seat (this file) | outcome |
|---|---|---|---|
| admitted domains | D1 firm loop, D2 habitat/index, D3 cost structure, D4 channel | A firm loop, B population/index, C cost composition, D channel | same four, different names; agree |
| excluded candidate | "greed", no anchor | "greed", no anchor | agree |
| scalar "market power" | absorbed into D1 and D3 | absorbed into A and C | agree |
| partition or union | union of four conditions | union of contact maintenance and source discrimination | agree on union; second seat differs on which pair names the conditions |
| measurement channel | one domain D4 | initially split into estimator and pooling, re-merged on shared anchor | same endpoint; second seat adds the anchor test |
| dependency order | per Fig 3, middle link breaks | per Fig 3, plus note that only first three links are forced by residual | refinement, not conflict |
| decisive figures | Fig 1, 2, 9, 10, 11, 4, 8, 12 | Fig 1, 2, 9, 10, 4, 3, 12 | agree on core set; second seat elevates Fig 3's objective link |
| verdict on the number | `gap`, unreached | `gap`, unreached, confirmed by source-discriminator argument | agree |
| world sources | secondary, no verdict flip | secondary; one pool counted as one witness; conflicts returned to census | agree |
| correction retained | `05` §5b on "shape not a name" governs missing primitives | independently reached the same correction from the residual line | agree |

**Round trip between seats.** The two censuses were written from the same residual line and the same figure text. Their agreement is a check of internal consistency, not triangulation (Fig 2 :31, :40). A real outside frame with a different evidence pool is still needed, and that is what the expert packet is for.

---

## 7. Verdict on the solution

**Status: pass, with four annotations.**

1. **Pass on structure.** Residual stated in effect terms, census before figure lines, verbatim quotes with `Fig N :line`, verdicts per domain and never averaged, pre-registered refuter of ten conditions written before the conclusion, mode stated, `gap` declared where no line governs, no em dashes, sources opened and recorded. The figure quotes checked in section 3 are exact.
2. **Pass on derive-first discipline.** The one genuine world/figure tension (a rising markup reading versus a flat profit share) was returned to the census and re-mapped as a source problem, not used to flip the verdict. Six strains were logged; five resolved and one live type question named.
3. **Annotation A, independence.** This second seat is simulated and shares an evidence pool with the primary. The solution has not received an independent human check. Its status must remain `specified`, and it must not be presented as corroborated by this audit.
4. **Annotation B, round trip.** The one-paragraph version in `07` is lossy in five named ways (section 4). It is suitable only as an invitation to check the full packet, never as a substitute for it.
5. **Annotation C, source pool.** Six economics sources reuse the Compustat markup construction. Their agreement is one witness. The two low-overlap sources (Simpson's paradox in statistics and in psychological methods) corroborate the method only. No source was allowed to hand the verdict.
6. **Annotation D, submission.** This is AI-assisted work. Most economics journals require disclosure of AI use and prohibit submitting AI-generated work as one's own. It is to be used as a private checking instrument; a human researcher owns and writes anything submitted.

**Final:** the solution is internally consistent with the figures, honest about its simulation status, and correctly stopped at a `specified` shape with an open source-discriminator gap. It is not a ground reading and cannot settle ECN-0013. `Unreachable is a verdict, not a silence`: the missing instrument is characterized, the refuters are written, and the stop is recorded.
