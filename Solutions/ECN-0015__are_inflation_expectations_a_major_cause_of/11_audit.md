# Second-seat audit of the ECN-0015 solution

**Mode: `specified` on the shape, `gap` on the magnitude.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same essays, the same world pages, the same folder files. Fig 2 :40 says "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No instrument was operated. This audit cannot settle the claim it audits.

The material audited is the full eleven-file set, with special attention to the residual and census in `01`, the shape in `07`, the WATSON output in `09`, the provenance in `10_source_ledger.csv`, and the retraction log in `01` §7.

## Independent domain census

I redid the census from the residual line alone, before reading the primary's findings, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is the forecast error between expected and realised inflation. Arity: three terms are needed, belief, action and observation, so the question's binary framing is under-specified. Symmetry: the Operators table separates ordered bonds from symmetric ones; the coupling is a directed relation, not a symmetric coincidence. Scale: first order within a period, second order across periods when the outturn re-enters the belief.
- **Domain 1, belief formation.** Actors: households, firms, forecasters. Currency: stated expectations. Anchor: the survey response, legitimate for stated expectations only. Not a causal anchor.
- **Domain 2, price and wage setting.** Actors: firms, unions. Currency: prices and wages. Anchor: realised inflation from a price index.
- **Domain 3, identification.** Actors: econometricians and central banks. Currency: residuals and instrument design. Anchor: exogenous variation in expectations. Specified in shape, not operated here.
- **Partition or union:** union. The two named conditions are jointly present and overlap; the outturn updates the belief and the belief enters price setting.
- **Order by dependency:** term distinctness, per-slot residual, bond and sign, then magnitude. Refuse the forced choice before minting anything (Formula step 2).

My census matches the primary's three domains and its union reading. Where the primary derived from Fig 12's cycle line and the Symbols table, I derived from Fig 9's union/partition split and Fig 3's dependency order. Different starting figures, same domain boundaries: low overlap between routes, so the agreement is weak but not circular within the framework. It is still one evidence pool.

## Comparison with primary findings

I checked each primary finding against the verbatim figure text and against the primary's own corrected files.

| primary finding | my independent check | agreement |
|---|---|---|
| F1: forced choice is a union compound | Fig 9 :54 and :58 govern splits; Fig 9 :5 says do not search an unsplit bundle. The cycle line is a separate reason, not the only reason | agree, with a different leading figure |
| F2: `b` and `o'` are distinct terms | Symbols table distinguishes belief from observation; without this the residual has no two operands | agree |
| F3: cause leg structurally real | "What the system takes to be the case before it acts" plus "one bet per object slot, every action" support action conditioned on belief | agree, `specified` not `grounded` |
| F4: response leg structurally real | "learnable from the outcomes of past weightings" plus the re-entering output support it | agree, `specified` not `grounded` |
| F5: per-slot residual | Fig 1 :19 and :22 are explicit and are the strongest single pair of lines in the folder | agree |
| F6: magnitude is a gap | Fig 9 :32 and Fig 13 :134; no figure line returns a number | agree, and the word "unreached" is correct rather than "unreachable in principle" |
| F7: agreement is not a witness | Fig 2 :40 and Fig 7 :13; the three economics sources cite overlapping work | agree, overlap honestly declared |
| F8: sharpen the existing instrument | Fig 6 :32 and :35; the proto-instrument already exists in surveys and announcements | agree |
| F9: channel decay | Fig 10 :24; a rebased survey is a channel failure | agree |
| F10: surviving/refused table | Each row traces to a figure line or to a declared gap | agree |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." checked.
- Fig 9 :5 "are not one hard question but several well-formed ones. Split it rather than search." checked. Note the line begins "are not one hard question" after a line wrap; quoting from the wrap is legitimate because the extract joins on normalisation, and the quoted words are present verbatim.
- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." checked.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." checked.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the leading clause is part of the line and is included where quoted.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked.
- Fig 10 :52 "Bring a characterised residual, never the source." checked.
- Fig 10 :24 "the ground does not decay, the channel does" checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Symbols table :21 "mixed by w. Not the observation." checked (the extract wraps the sentence across two numbered lines; the substring is present).
- Operators table :36 "A produces B; B did not exist before" checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap R_T

The Symbols table defines `R_T` as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`, measuring what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." I ran the round trip on the condensation the folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 9 :54 (union split), Fig 12 :121 (cycle), Fig 1 :19 and :22 (per-slot residual), Fig 9 :32 and Fig 13 :134 (shape not magnitude).
2. **Abstraction (T_A):** the shorthand in `07` §2 and `09` VERDICT: it is a signed cycle, read per slot, with the magnitude gap.
3. **Concretisation (T_E):** the concrete answer an economist would want: a coefficient on expected inflation in a price equation, a variance share, a sign by regime, and the identifying instrument that produced them.

**R_T is nonzero.** Four things the shorthand holds do not survive the trip back down:

- the **sign of the loop**, which Fig 12 :121 says must be measured but which the shorthand merely names as "signed";
- the **specific slot list**, which the shorthand abbreviates as "country, horizon, forecaster type, regime" while the full census names the anchor problem for each;
- the **source-discrimination requirement**, which the shorthand compresses into "market and survey readings are not the same" without carrying the metamerism argument from `05` §4;
- the **instrument design**, which the shorthand reduces to "exogenous variation" without the source gate and shadow test that a real import would require.

Conversely, two things survive cleanly: the union split and the per-slot rule. They are the residue worth sending. `R_T` was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a recorded gap, which is what `01` §5 and `09` state.

## Strains and re-census

- **First reading "the figures prove the cause leg" versus "the figures prove the response leg".** Re-census resolved it: each reading governed one domain. Fig 3 dependency order requires both before the magnitude. Retracted as one-sided in `01` §6 and §7.
- **Fig 12 :119 (catalyst) considered for credibility.** Strained: credibility is a world import. Re-census to Fig 12 :121. The catalyst line is recorded as declined, not silently dropped.
- **Live strain, one.** Can a secondary report of a ground reading (Moessner's coefficients, Fair's finding) close a gap that the figures leave open? The figures say the seat reads the ground and that agreement from a shared pool is not a witness. The world sources are secondary and overlap. I keep the magnitude at `gap` and declare the strain. This is a limitation of this simulated run, not a claim that the economics literature has measured nothing.
- **Underived versus unreached.** The primary correctly distinguishes them (Fig 8 :39-43). The magnitude is unreached at this budget, not underivable in principle. More search inside the same closure would not help; a sharper instrument would. This distinction issues the right instruction and is preserved.
- **After re-census: one strain, named, none hidden.**

## Verdict on the solution

**On internal consistency: the solution passes.** The eleven files are consistent with one another and with the verbatim figure text. The retraction log is applied rather than ignored: the one-sided reading is retracted, the catalyst mapping is declined, the magnitude is kept as a gap, and the agreement claim is disqualified by the shared-pool rule. `09_watson_answer.md` carries the full WATSON shape with all verdict fields stated. `10_source_ledger.csv` lists every source actually read with URL, author, venue, year, accessed date and quote, including local paths. This file records the independent check. The strongest artifact remains `08_expert_verification_packet.md`: mode, three checkable sub-claims, verbatim lines, refuters and provenance before the conclusion.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the claim is true. The lower-overlap world source (predictive coding) corroborates the response leg as a general learning mechanism, but it is an analogy and not a measurement of inflation.

**On the claim: `specified` on shape, `gap` on magnitude, candidate.** The shape survives: a union compound with a signed cycle, a per-slot residual, and both directional legs present. The forced A-or-B is refused. The word "major" is owed to an instrument, not answered. Nothing here is settled. An exogenous expectations shift with no price response, inflation surprises with no expectation update, an identical coupling in every slot, or an instrument reporting the attributable share would move it. Prestige, agreement and longer time series are not such instruments.

**Recommendation.** Send the corrected packet with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links.
