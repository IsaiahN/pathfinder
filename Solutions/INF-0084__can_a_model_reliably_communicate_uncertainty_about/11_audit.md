# Second-seat audit of the INF-0084 solution

**Mode: `general` for the shape, `specified` for the application to models, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same local canonical files, the same essays and the same world sources. Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness and not a ground reading.** No measurement was taken. This audit cannot settle the claim it audits.

I wrote this census from the residual line alone before reading the primary's conclusions, then compared. The residual line I was given was:

> "Can a model reliably communicate uncertainty about unfamiliar inputs, or does it mainly reflect the limits of its training and evaluation?"

## Independent domain census

I redid the census using the WATSON order: R by arity, symmetry and scale; one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** Arity: three terms, not two. The report, the ground value on the input, and the regime that emitted the report. The third term is the one the question's wording hides. Symmetry: "report gives a claim about the input" is directed; reliability is a threshold comparison, not a symmetric join. Scale: first order inside the trained closure, second order at the unfamiliar boundary. I reached a **union compound** independently of the primary: calibration and novelty detection are conditions that can hold separately and overlap, so the disjunction cannot be searched as one scale with two ends.
- **Domain 1, the inference frame.** Actors: parameters, belief, weighting, prediction, softmax score, calibration metric. Currency: accuracy and loss on an eval set. Anchor: the eval set is present but fails the Fig 2 anchor test, because it shares a pool with training and moves with the model family.
- **Domain 2, the ground.** Actors: the unfamiliar inputs, true labels or consequences, the shift. Currency: contact between report and actual error. Anchor: a measurement on a provably disjoint distribution, stable across model families. This one is nameable and does not update.
- **Domain 3, verification.** Actors: evaluators, benchmark designers, metric choosers. Currency: confidence-accuracy agreement. Anchor: should be Domain 2; in practice the benchmark, a convention promoted to decider.
- **Domain 4, human analogue.** Actors: a person and their confidence feeling. Currency: confidence-accuracy correlation. Anchor: objective performance. World corroboration only.

Order by dependency: novelty perception before calibration objective (Fig 3); bind the sought-for shape as an ordinary term before judging it (Formula, Direction); describe the residual before selecting a frame (Fig 9 :27).

My census matches the primary's three governing domains and its union reading. I derived the union from the three-term arity and Fig 9's compound rule; the primary derived it from Fig 9 :54 and Fig 1 :19. Different starting points, same boundary. That is low overlap *between routes within one evidence pool*, so the agreement is weak but not circular in the trivial sense. It is still one pool talking.

## Comparison with primary

| primary finding | my independent check | agreement |
|---|---|---|
| F1 self-report cannot ground itself | Fig 1 :27 and Fig 5 :48 are different figures with low overlap; a confidence scalar is produced by the frame it would check | agree, and triangulated |
| F2 averaging hides the unfamiliar slot | Fig 1 :19 plus :13 make a near-zero global residual with one live slot a legal state | agree |
| F3 the boundary cannot be named from inside | Fig 6 :27 governs depth versus genuine absence; Fig 9 :44 forbids self-certified coverage | agree, and refined: Fig 8 governs underivability, not novelty |
| F4 the honest shape is a refusal | Fig 9 :32 and Fig 13 :133 license a shape; the two-currency claim is Fig 12 :125 | agree, with the naming narrowed as in `05` section 7 |
| F5 verification shares a pool | Fig 2 :29 anchor test plus Fig 10 :47 convention-as-decider | agree |
| F6 slot support before a claim | Formula step 3 guards are a product; Fig 1 :19 supplies the slot | agree |
| F7 union not partition | Fig 9 :54 and the compound rule; conditions overlap across the input space | agree |
| Retraction: Fig 8 :39 does not govern novelty | re-census confirms it governs underivability; Fig 6 :27 governs the depth/absence distinction | agree, correction correctly kept visible |

No substantive disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." checked.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 5 :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." checked.
- Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." checked.
- Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again" checked. The full SVG line begins "And when"; the quotation is a correct substring.
- Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." checked.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked. The SVG line continues "A measurement..."; the quotation stops at the full stop.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked. If presented as the whole line, the leading clause must be included; the primary uses the trailing substring.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." checked.
- Fig 10 :47 "a convention that decides an outcome has stopped being one" checked.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." checked.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." checked.
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." checked.
- Fig 13 :133 "what it returns is a shape rather than a name" checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked. The SVG line ends with a comma; the quotation is a correct substring.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted. No em dash was found in `09_watson_answer.md`.

## Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`, measuring what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation the folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :27 (self-scoring disqualified), Fig 6 :27 (depth versus absence), Fig 9 :54 (union), Fig 2 :29 (anchor test).
2. **Abstraction (T_A):** the shorthand carried in `07_the_tether_answer.md`: own confidence cannot ground itself; the boundary cannot be named from inside; eval pools are mirrors; reliable uncertainty is a refusal that ranges against an anchor.
3. **Concretisation (T_E):** the concrete claim about a model's confidence on a particular unfamiliar input.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- **Which input is at issue.** Fig 1 :19 indexes the residual by slot. The shorthand says "unfamiliar input" without naming the slot or the live mass, so a global average can be substituted for the claim unnoticed.
- **Whether the eval pool is genuinely disjoint.** Fig 2 :29 requires an anchor that does not update. The shorthand says "outside the training pool" but the folder did not verify disjointness for any actual case.
- **Whether the report is a shape or a name.** Fig 9 :32 and Fig 12 :125 separate a description from a settlement. The shorthand can be read as if a refusal flag were itself a ground-settled measurement.

One thing survives cleanly: a frame cannot score itself with a quantity it produces, and the boundary between unseen and unrepresentable cannot be named from inside. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating the formula as identical to the figure set would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## Strains and re-census

- **Fig 8 versus Fig 6.** The primary initially read Fig 8 :39 as governing novelty detection. Re-census resolves it: Fig 8 governs underivability inside a closure, Fig 6 :27 governs depth versus genuine absence. Different quantities. Matches the canonical README rule that a reading which makes figures contradict one another has misidentified its domain.
- **Shape-not-a-name overreach.** My first reading treated the limit as a blanket ban on numbers. Re-census narrows it: the README phrase governs a *missing* thing. For an input the model cannot represent, the missing representation makes the refusal form apply; for an atom already held, a binding is a different case. `05_what_shape_means.md` section 7 keeps both readings visible.
- **Hendrycks and Gimpel conflict.** The OOD baseline finds a real, if weak, signal in softmax scores. This conflicts with the strongest form of the limits horn. The conflict was returned to the census and resolved by keeping calibration and detection as separate conditions, which is the union finding. The verdict was not softened to accommodate it.
- **Record-level omissions.** The mis-fetched arXiv id (1610.02154, a condensed matter paper) is recorded in `10_source_ledger.csv` as discarded, not silently removed. It is not cited anywhere.
- **After re-census: no strain hidden, two corrections recorded.**

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files are consistent with each other and with the verbatim figure text. The union finding is applied rather than assumed, the three domain verdicts are kept separate, the retraction and confirmation table is applied, the Fig 8 versus Fig 6 strain is dissolved by re-census, and `09_watson_answer.md` carries the full WATSON shape with cost if wrong, undoable and reversed by stated. `10_source_ledger.csv` lists every source actually read with accessed date 2026-11-23, including the discarded fetch, and this file records the independent check. The strongest artifact remains `08_expert_verification_packet.md`: mode, three checkable sub-claims, verbatim lines, refuters and provenance before the conclusion.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the claim is true.

**On the claim: `general` shape, `specified` application, ungrounded, candidate.** The shape survives: the disjunction is a union; a model's own report cannot ground its reliability; the unseen-versus-unrepresentable boundary cannot be named from inside; the standard eval pool is a mirror; reliable uncertainty is a refusal that must range against an anchor. What is not established is the empirical strength of any particular signal. A source-discriminating instrument on a provably disjoint distribution, stable across model families, would be required to move the claim toward `grounded`. Prestige or agreement is not such an instrument.

**Recommendation.** Send the packet with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links.
