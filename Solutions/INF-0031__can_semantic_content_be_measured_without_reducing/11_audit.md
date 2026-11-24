# Second-seat audit of the INF-0031 solution

**Mode: `general` on the shape, `specified` on the falsifiable prediction. Not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same formula, the same essays, the same world sources, and the same folder files. Fig 2 :40 says *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement of semantic content was taken. This audit cannot settle the claim it audits.

The material audited is the residual line in `README.md`, the domain census and findings in `01_figure_grounded_audit.md`, the four-constraint shape in `07_the_tether_answer.md`, the canonical WATSON output in `09_watson_answer.md`, and the provenance in `10_source_ledger.csv`.

## Independent domain census

I redid the census before reading the primary's conclusions, using the derive-first order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is the failed passage from a reading to what the reading is about. Arity: three terms (signal, source, interpreter), a seam between a reading and a source. Symmetry: the two proposed measures are asymmetric in unit, bits versus actions, so they cannot be swapped without changing what is being priced. Scale: step-level reading, level-level question. Fig 9 :57 names a case in two conditions a specific compound, so this is a **union**, not a single problem.
- **Domain 1, statistical frame.** Actors: signal, code, distribution, compression. Currency: bits. Anchor: the source statistics. It settles "how surprising", not "about what".
- **Domain 2, behavioral frame.** Actors: agent, action, response, task. Currency: actions. Anchor: experiment or playback. It settles "what did it do", not "what was it about".
- **Domain 3, semantic frame.** Actors: representation, referent, instrument. Currency: aboutness. Anchor: the world state behind the reading, reachable only via a source-discriminating instrument. This is the compound's own loop.
- **Domain 4, verification.** Actors: reader, venue, refuter. Currency: residual and correction. Anchor: the ground, never agreement. In this simulated run its independence is zero.

Order by dependency: statistics before semantics before effectiveness; describe the residual before selecting a frame; report the stop before offering the instrument shape.

**Comparison with the primary census.** My four domains match the primary's four. Where the primary derived the union from Fig 9 :57 and the currency split from Fig 12 :125-130, I derived the union from the three-term arity and the asymmetry from the unit difference itself, then checked Fig 12. Different starting points, same boundaries, low overlap between routes. This is weak internal agreement, not corroboration: one evidence pool throughout.

## Comparison with primary findings

| primary finding | my independent check | agreement |
|---|---|---|
| Union compound, two currencies, summing is the error | Fig 9 :57 splits the compound; Fig 12 :125-130 prices bits and actions separately and names the sum as the error | agree |
| Meaning is carried by the bond, not the ingredients | Fig 12 :5 calls the bond *"the rest of the information"*; Fig 13 :26 says structures decide what a measurement would mean | agree |
| Declared meaning is not grounded | Fig 10 :18 and :49 are explicit; Fig 10 :47 bars a convention that decides an outcome | agree |
| Behavior is an instrument with blind axes for aboutness | Fig 2 :37-38 makes anchor legitimacy depend on the question; the vervet literature supplies the blind-axis case | agree |
| MDL is a filter, not a witness | Fig 5 :45 restricts MDL to model selection; Fig 9 :60 separates budget filters from verdict witnesses | agree, filter kept |
| Single-number measure is unreachable, not impossible | Fig 13 :134 makes unreachable a verdict; Fig 8 :39 forbids a proof of absence from a failed search | agree |
| An instrument is owed, shaped but not named | Fig 6 :34 and Fig 13 :135 | agree with the no-naming limit |
| Round-trip gap nonzero | Fig 4 :31 requires the gap be measured, not assumed zero; three losses are enumerated in `01` F8 | agree |

No disagreement with the primary. Because we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 12 :125 "A composition costs in two currencies, and they do not add." checked.
- Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." checked; the full line continues "They are in different units, so a system holding one accounting cannot compare them". The short form is a truncation of the same line, not a different quote.
- Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it." checked.
- Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." checked.
- Fig 12 :94 "The arrangement is the substance." checked.
- Fig 13 :26 "it decides what the measurement would mean" checked.
- Fig 10 :49 "Declaring a meaning does not ground it." checked.
- Fig 2 :38 "instruments can be wrong on axes they do not measure." checked; the full line ends with a longer clause about human judgment, so the quotation must be presented as a substring.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked; the line continues with a comma.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it." checked.
- Fig 4 :31 "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold" checked; the line continues, so the quotation stops before the trailing clause.
- Fig 5 :45 "This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection." checked.

All checked lines are present verbatim in the extract. No quote drifted. One correction to my own first pass: I had recorded Fig 13 :134 with a full stop; the extract has a comma after "silence", so the quotation in `09` stops before the punctuation. Recorded here rather than silently smoothed.

## Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`, measuring what the coarser description cannot hold. Fig 4 :30 requires it be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 12 :5, :94, :125-130 (bond and two currencies), Fig 13 :26, :134 (structures decide meaning; unreachable as verdict), Fig 2 :37-38 (anchor legitimacy).
2. **Abstraction (T_A):** the shorthand in `07_the_tether_answer.md`: two currencies do not add; meaning is the bond; declared meaning is not grounded; single-number measure unreachable; four-constraint shape.
3. **Concretisation (T_E):** a concrete proposed measure, for example a weighted sum of normalized entropy and task success reported as a "semantic score".

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **unit difference** between bits and actions collapses in a weighted sum; the weight is a convention with no ground (Fig 12 :125-130);
- the **bond** is not reconstructed from the ingredients; the flat formula is lossy (Fig 12 :5);
- the **source behind a reading** is not identified; several sources give the same statistics and the same response (the metamerism case in `05` §4).

One thing survives cleanly: a typed relation must hold between a signal and a source for the reading to be about anything. That is the residue worth sending. R_T was not measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and commit the dead-reckoning error Fig 4 :30 names.

## Strains and re-census

- **MDL as meaning measure.** Primary initially treated Fig 5 :45 as possible positive support. Re-census: that line governs model selection, a different quantity. It is a budget filter, not a witness (Fig 9 :60). Recorded as a retracted positive claim in `01` §7.
- **"No measure exists" versus "unreachable".** First phrasing drifted toward impossibility. Re-census with Fig 8 :39 and Fig 13 :134 corrects it to a report of a stop. Both phrasings are recorded so the correction is visible.
- **Catalyst analogue (Fig 12 :119).** Single-source at figure level and offered as an analogue for the instrument's reuse, not as a derivation of its mechanism. Not hidden, not claimed as triangulated.
- **Framework essays.** They share an author with the figures. Their agreement with the verdict is expected and is not counted as independent corroboration. `10_source_ledger.csv` marks that overlap on every essay row.
- **After re-census: one open item, named, none hidden.** The shape of the source-discriminating instrument cannot be specified beyond effect terms (Fig 13 :135).

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files are consistent with one another and with the verbatim figure text. The union finding is kept separate from the two-currency finding; the four domains are not averaged; the two retractions are applied in `01` §7; the round-trip gap is enumerated rather than assumed zero; the refuters are written before the conclusion; `09_watson_answer.md` carries the full WATSON shape with cost, undoability and reversal fields; `10_source_ledger.csv` lists every source actually read with URLs, accessed dates, quotes and declared overlap. The strongest artifact remains `08_expert_verification_packet.md`: mode, three checkable sub-claims, verbatim lines, refuters and provenance before the conclusion.

**On corroboration: none from this seat.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is internal consistency, not truth.

**On the claim: `general` shape, `specified` falsifiable prediction, ungrounded candidate.** The shape survives: the two reductions are incommensurable currencies; meaning is carried by the bond; declared meaning is not grounded; behavior is a blind-ass instrument for aboutness; the single-number measure is unreachable with current instruments; an instrument is owed and not nameable from inside. What does not survive is any single number, any weighted sum, any claim of impossibility, and any naming of the missing primitive. Nothing here is settled: a source-discriminating instrument that separates identical readings, a commensurable unit, a lossless flat formula, or a behavioral assay with source access would be required to move it to `grounded` or to refute it. Prestige or agreement is not such an instrument.

**Recommendation.** Send the packet with its mode and refuters attached, ask what would refute the shape, record the verdict before showing any theory, and do not pool later agreement as corroboration. Keep the four-constraint shape and the refuter in front of the links.
