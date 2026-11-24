# Second-seat audit of the INF-0023 solution

**Mode: `general` on the unbundling, `specified` on the shape, `gap` on the numeric split. Not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same essays, the same question file, the same world pages, the same folder files. Fig 2 :40 says *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No channel was measured. This audit cannot settle the question it audits.

The material audited is the retraction and confirmation table and canonical usage check in `01` §5, read together with `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`, `09_watson_answer.md` and `10_source_ledger.csv`.

## Independent domain census

I redid the census from the residual line alone, before reading the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is the per-message gap between predicted and received message under a stated channel state. Arity: four named goods, but two are correctness claims, one a rate, one an expenditure. Symmetry: none, so no equal split is licensed by the question. Scale: slot, session, fleet. The four overlap at the anchors, so this is a **union**, not a partition. I reached this from the distinct units of measure (bits, seconds, joules) rather than from Fig 9's union rule, which the primary used.
- **Domain 1, channel and coding.** Actors: sender, encoder, channel, noise, decoder, receiver. Currency: bits and error probability per slot. Anchor: known sent message versus received message under a stated channel state. Union with D2 at speed and energy.
- **Domain 2, resource and thermodynamics.** Actors: transmitter, clock, power source. Currency: joules, hertz, seconds. Anchor: power meter and clock. Speed and energy are coupled at the anchor.
- **Domain 3, design and objective.** Actors: designer, maintainer, checker. Currency: budget and residual. Anchor: the application's failure cost, which the design frame does not own. This is the import.
- **Domain 4, verification.** Actors: primary seat, second seat, outside frame. Currency: agreement and residual. Anchor: the ground, never agreement. In this simulated run all four domains draw on one evidence pool, so D4 independence is zero.

Order by dependency: perceive the channel, build the channel vocabulary (burst versus independent), bind the objective as floors, then plan the allocation, then carry the method (Fig 3). My route in was Fig 3's dependency chain and the measurement units; the primary's route in was Fig 9's union rule. Different starting figures, same domain boundaries. Low overlap between routes within the framework, so the agreement is weak but not circular in the figure text. It is still one evidence pool overall.

## Comparison with primary

I checked each primary finding against the verbatim figure text and against the corrected files.

| primary finding | my independent check | agreement |
|---|---|---|
| F1 union, no single split | distinct anchors for the four goods plus Fig 9 :55 yield the same union; a single split would need a fifth anchor that no source supplies | agree |
| F2 per-slot residual | Symbols table :43 and Fig 1 :19 both require per-slot; a fleet average cannot recover the failing slot | agree |
| F3 two currencies | Fig 12 :125 and :126 price bits and actions separately; accuracy and robustness are bond properties, not a third currency | agree |
| F4 independence not repetition | Fig 2 :31 and :42 plus two independent engineering literatures: burst interleaving and multiple descriptions | agree, with the caveat that both world literatures are read here, not independently reported by a second seat |
| F5 floors before optimisation | Fig 9 :60 forbids a filter as a verdict; a weighted sum can pass with a live slot failing | agree |
| F6 numeric split is a `gap` | Formula step 7 separates SEARCHED, INWARD and OUTWARD; without a channel model and failure cost no ground settles the split | agree |
| F7 agreement cannot settle | Fig 2 :35, :40 and Fig 7 :13 all agree; the essay on prestige agrees but shares the author | agree, rule stands, witness count is one |
| F8 lossy round trip | Fig 4 :27 and :30 require the gap to be measured | agree |
| Retracted six-term mapping | re-census confirmed: Fig 13 governs system states and structures, not allocated resources; strain test fired correctly | agree, retraction stands |
| Narrowed "shape, not a name" | the canonical limit governs a missing primitive; floors on held measurable terms are ordinary terms and are allowed | agree with the narrowed form |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none came from a summary.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are." checked; the SVG line wraps after "are." and the quotation is a substring of the combined text.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the leading clause is part of the line and is included when the whole line is presented.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." checked.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." checked.
- Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." checked; the full SVG line continues with "They are in different units", so the quotation is a truncation at the sentence boundary, not a different quote.
- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." checked; the leading word "isomer." precedes it on the line and is omitted by design.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked; the SVG line ends with a comma, which is dropped as trailing punctuation.
- Symbols table :43 "One object, region or entity being tracked. R is measured per slot, never as a single global number." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`, measuring what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :19 (per-slot residual), Fig 9 :55 and :57 (union), Fig 2 :31 and :42 (independence priced by failure cost), Fig 12 :125 and :126 (two currencies).
2. **Abstraction (T_A):** the shorthand carried in `07` and `08`: unbundle, set floors, measure per slot, buy independence, keep two accounts, leave the number open.
3. **Concretisation (T_E):** a concrete transmitter and allocator for a specific channel.

**R_T is nonzero.** Four things the shorthand holds do not survive the trip back down:

- the **channel state list**, which must be enumerated before a floor can be tested;
- the **failure-cost axis**, which no communication frame authors and which the shorthand merely names;
- the **failure-mode independence**, which must be measured on the actual path rather than inferred from a block diagram;
- the **slot identity**, which a fleet average discards on the way down.

Conversely, one thing survives cleanly: two goods are bond properties and two are different currencies, so a single additive score is wrong at any scale. That residue is worth sending. R_T was **not** measured numerically, because no concrete channel and no ground reading exist; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the figures" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a measured gap.

## Strains and re-census

- **Four goods versus the six-term substrate.** The primary first mapped the goods onto four of the six terms. Re-census confirms the retraction: Fig 13 governs states and structures of a system; bandwidth and energy are measured resources; accuracy and robustness are bond properties. Different objects, so no contradiction between figures. Matches the README rule that an apparent contradiction means a misidentified domain.
- **Speed and energy as a partition.** Initially I treated them as separate slots. Re-census: the finite-time Landauer result couples operation time to dissipated work, so they overlap at the anchor. No strain, just a correction to my own first pass.
- **Fig 2 :42 versus a fixed redundancy budget.** Not strained. Fig 2 :42 gives the purchase rule, not the amount; the amount requires the imported failure cost. The `gap` in F6 is the honest report of that missing axis.
- **The two world-literature witnesses.** Multiple description coding and burst interleaving are low overlap with the framework but share an engineering tradition with each other. I record them as one corroborating witness about independence, not two.
- **After re-census: one correction recorded (speed and energy overlap), no live strain, no hidden contradiction.**

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files are consistent with one another and with the verbatim figure text. The retraction table is applied rather than ignored: the six-term mapping is retracted, the numeric split is declared a `gap`, the shape-not-a-name limit is narrowed so floors are allowed while the unique split is not derived, and the four-goods-versus-six-terms strain is dissolved by re-census. `09_watson_answer.md` carries the full WATSON shape with the verdict fields stated; `10_source_ledger.csv` lists every source actually read with the verified URLs and the accessed date 2026-11-23; this file records the independent check. The strongest artifact remains `08_expert_verification_packet.md`: mode, three checkable sub-claims, verbatim lines, refuters and provenance before the conclusion.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the allocation shape is true.

**On the claim: `general` on the unbundling, `specified` on the shape, `gap` on the number, ungrounded, candidate.** The shape survives (union, floors, per-slot residual, two accounts, independence priced by failure cost). No numeric split is claimed. Nothing here is settled: per-slot error and latency distributions, measured joules per correct bit, and an imported failure-cost axis would be required to move the number from `gap` to `grounded`. Prestige or agreement is not such an instrument.

**Recommendation.** Send the packet with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links.
