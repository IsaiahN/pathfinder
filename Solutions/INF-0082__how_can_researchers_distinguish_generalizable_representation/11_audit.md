# Second-seat audit of the INF-0082 solution

**Mode: `specified` on the checks, `general` on the structural claim, `gap` on the universal recipe. Not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same formula, the same essays, the same world pages and the same folder files. Fig 2 :40 says "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness and not a ground reading.** No model was trained and no measurement was taken. This audit cannot settle the question it audits.

The material audited is the full folder, read against the residual line alone first.

## Independent domain census

I redid the census before reading the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is the gap between prediction and observation at a slot in a habitat not used for fitting. Arity: dyadic per slot plus a second-order cross-habitat relation, so a **union compound** (Fig 9 :55), not a single hard question. Symmetry: an aggregate score is symmetric under slot permutation while the claim is ordered (fit first, probe second), so the symmetric statistic cannot decide the ordered claim (Fig 1 :19). Scale: frame-internal versus contact across the membrane, so the round-trip gap `R_T` is the error signal, not the training loss (Fig 4 :30).
- **Domain 1, the learning frame.** Actors: parameters, training examples, loss. Currency: training residual and description length. Anchor: none nameable inside the frame; the training metric updates on the frame's own outputs, so it fails the anchor test (Fig 2 :29). This is the frame under check, not a verdict domain.
- **Domain 2, the new habitat and ground.** Actors: unseen slots, instruments. Currency: per-slot residual on a non-fitted habitat. Anchor: a measurement that does not move when the model's prediction changes. Verdict domain.
- **Domain 3, the evaluation frame.** Actors: benchmark designers, reviewers, metric choices. Currency: accuracy and agreement. Anchor: the ground only if the benchmark genuinely touches it; otherwise a mirror. Verdict domain.
- **Domain 4, the provenance frame.** Actors: the derivation record. Currency: provenance. Anchor: the record itself, checkable by a later reader (Fig 10 :62-64). Verdict domain.
- **Union, not partition.** D2, D3 and D4 overlap; one lever leaves the intersections standing (Fig 9 :56-57).
- **Order by dependency.** See the new slots before choosing a metric (Fig 3 :27); describe the residual before naming a frame (Fig 9 :27-28); refuse the fit-equals-generality term before minting (Formula step 2); measure `R_T` rather than assuming it is zero (Fig 4 :30).

My census matches the primary's four domains and its union reading. I reached it from Fig 9's union/partition split and Fig 3's dependency chain, whereas the primary reached it from Fig 1's per-slot residual and Fig 2's anchor test. Different starting figures, same boundaries: low overlap between routes, so the agreement is weak but not circular within the framework. It is still one evidence pool.

## Comparison with primary

I checked each finding and each retraction against the verbatim figure text and against the primary's own corrected files.

| primary finding | my independent check | agreement |
|---|---|---|
| F1 training fit is frame-internal | Fig 1 :23/:27 and Fig 2 :29 are exact; the anchor test fails for the training metric | agree |
| F2 one-occasion explanation fails the bargain | Fig 5 :43-44 exact; Zhang et al. 2017 confirms random-label fitting; benign overfitting kept as live strain S2 | agree, strain still live |
| F3 method versus recording | Fig 4 :22/:25/:26 and Fig 11 :70 exact; the substrate condition in Fig 12 :107-110 supports where the arrangement is recorded | agree |
| F4 bonds, not ingredients | Fig 12 :5/:94/:117 exact; Operators :34 warns about the flat chain | agree, bond definition single-source, probe triangulated |
| F5 reach, not library | Fig 6 :21/:22, Fig 8 :32, Fig 13 :115 exact; no-free-lunch corroborates from mathematics | agree |
| F6 evaluator independence | Fig 2 :31/:35/:40 and Fig 7 :35 exact; cross-validation twinning and swap sampling corroborate from statistics | agree |
| F7 gap is a filter | Fig 9 :60, Fig 1 :19/:22, Fig 10 :24/:26 exact; CV variance passage corroborates | agree |
| F8 provenance | Fig 8 :51 and Fig 12 :130 exact; contents cannot separate the two routes | agree |
| F9 universal recipe is a gap | Fig 9 :32, Fig 13 :134-135, Fig 8 :39 exact; unreached reported as a verdict | agree |
| "held-out accuracy settles it" retracted | Fig 1 :23/:27 and Fig 9 :60 support the retraction | agree |
| "generalizable means a new atom" narrowed | Fig 6 :22 and Fig 13 :115 support the narrowing | agree |
| "Fig 5 :44 bans every fit" narrowed | re-census on stating plus leftover; strain S2 preserved, not erased | agree |
| union rather than partition | Fig 9 :55-57 exact | agree |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight (Fig 2 :40).

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 1 :23 "The ground enters as the only metric." checked.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." checked.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked. The SVG line wraps onto "If it moves when"; the quotation stops at the full stop.
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." checked.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the leading clause is part of the line.
- Fig 4 :22 "Only methods cross up. Only head starts come down." checked.
- Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." checked.
- Fig 5 :44 "and so does a term that explains one occasion perfectly." checked.
- Fig 6 :21 "MINT composes inside the closure and can never add an atom." checked.
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." checked.
- Fig 8 :51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" checked; the SVG line continues with a clause about the surplus, so the quotation is a truncation at the clause boundary, not a different quote.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." checked.
- Fig 10 :52 "Bring a characterised residual, never the source." checked.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." checked.
- Fig 12 :130 "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term." checked.
- Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists." checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked; the full line continues with a comma, so the quotation stops before it.
- Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, measuring what a coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :19/:22/:27, Fig 2 :29/:40, Fig 4 :22/:25, Fig 9 :60 and Fig 12 :117.
2. **Abstraction (T_A):** the shorthand carried in `07_the_tether_answer.md`, the seven-part separator: per slot, non-updating anchor, method not recording, bonds not ingredients, reach before import, independence, provenance.
3. **Concretisation (T_E):** a concrete evaluation practice: a train/test split, a leaderboard score, a fixed architecture with regularization.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **anchor condition** is routinely replaced by a split from the same corpus, which is a mirror, not an anchor;
- the **method-versus-recording distinction** is lost when the lineage is not kept, so a lookup and a convergent derivation become indistinguishable in the contents;
- the **per-slot indexing** is lost when an aggregate accuracy is reported, which is exactly the disappearance named in Fig 1 :22.

Conversely, one thing survives cleanly: a held reading on a habitat with a different closure is stronger evidence than training fit. That is the residue worth sending. R_T was **not** measured numerically, because no probe exists in this folder; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and commit the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a measured gap, which is what `09_watson_answer.md` states.

## Strains and re-census

- **S1 (dissolved):** aggregate accuracy versus per-slot residual. Re-census: Fig 1 governs how R is indexed inside a frame; an aggregate score is a budget filter. Different objects.
- **S2 (live):** Fig 5 :44 versus benign overfitting. The figure prices stating plus leftover, while the world result concerns a low-complexity interpolant with good unseen contact. I keep this as a live type question about "stating the term," not a correction. An instrument that measures effective description length on the probe habitat would settle it.
- **S3 (live but narrowed):** Fig 11 :70 versus ordinary benchmark evaluation. A benchmark is a substituted habitat. It proves wiring and proves capability only where the anchor does not update and the closure differs. Kept visible as a design constraint.
- **S4 (dissolved by re-census):** Fig 8 union surplus versus Fig 2 agreement-worthlessness. Same independence parameter read twice (Fig 8 :47), so no contradiction.
- **No world/figure conflict flips a verdict.** The benign-overfitting tension returned to the census and was re-mapped to a type question; the figure verdict was not reversed.
- **After re-census: two live strains, both named, none hidden.**

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files agree with each other and with the verbatim figure text. The retraction table is applied rather than ignored: the held-out-accuracy claim is retracted, the new-atom reading is narrowed, the perfect-fit reading is narrowed with the conflict preserved, the union ruling replaces the partition, and the four strains are either dissolved by re-census or left visible. `09_watson_answer.md` carries the full WATSON shape with all verdict fields stated; `10_source_ledger.csv` lists every source actually read with verified URLs, accessed date 2026-11-23 and local paths where applicable; this file records the independent check.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the separator is true.

**On the claim: `specified`, ungrounded, candidate.** The shape survives: per-slot residual, non-updating anchor, method over recording, bonds over ingredients, reach before import, independence, provenance. The universal recipe is a `gap`, reported as unreached rather than silence (Fig 13 :134). Nothing here is settled: an isomer probe with a non-updating anchor, a discriminator between convergent derivation and adopted import, or any of the six refuters firing would be required to move it to `grounded`. Prestige, leaderboard position and agreement are not such instruments.

**Recommendation.** Send the separator and its six refuters first, ask what the recipient's own field would count as a failure, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links. Preserve S2 and S3 in any future revision; do not silently erase them.
