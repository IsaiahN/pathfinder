# Independent audit of the REA-0085 solution

**Mode: `specified`, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It writes its own census from the residual line alone, then reads the primary's files. It draws on the same evidence pool: the same verbatim figure text, the same essays, the same papers. Fig 2 :40 says "agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken. This audit cannot settle the claim it audits.

## 1. Independent domain census

Written before reading the primary's conclusions, from the residual line: *can smaller specialized systems outperform large general-purpose models in reliability and adaptability?* WATSON order: R by arity, symmetry and scale; one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** Two axes crossed with two overlapping conditions: four cells. Arity four, so a union compound (Fig 9 :5), not one hard question. Symmetry: the axes are not symmetric and the architecture classes overlap, so a small model can be general and a large model can be tuned. Scale: parameters within one scale, habitat change across scales with `R_T` as the error signal.
- **Domain 1, architecture frame.** Actors: models, data, objectives, parameter count. Currency: loss on a fixed distribution. Anchor: held-out evaluation if it does not update. Type: partition inside a closure.
- **Domain 2, evaluation frame.** Actors: benchmarks, rephrased sets, leaderboards. Currency: measured score. Anchor: ground only if leakage is excluded. Type: anchor integrity.
- **Domain 3, habitat frame.** Actors: task distribution, deployment conditions, operators. Currency: contact. Anchor: ground. Type: maintained versus substituted habitat.
- **Order by dependency:** describe R; name the anchor; enumerate the habitat; settle reliability; then adaptability; then compare architectures. Fig 3 :19.

My census matches the primary's four domains and its union reading. I reached it from the arity of the question and Fig 9 :5; the primary reached it from Fig 9 and Fig 12's two-currency rule. Different starting figures, same domain boundaries, low overlap between routes within the framework. It is still one evidence pool.

## 2. Comparison with the primary census

I checked each primary finding against the verbatim figure text and against the primary's own corrected files.

| primary finding | my independent check | agreement |
|---|---|---|
| F1 union compound | four cells; the two axes are different currencies (Fig 12 :125); architecture classes overlap | agree |
| F2 size frame-internal | Fig 1 :27 and Fig 4 :20 both disqualify a self-produced quantity; no figure ranks size | agree |
| F3 specialist surplus conditional | Fig 8 :32 plus Fig 6 :23 plus Fig 2 :29; the anchor condition is essential, not decorative | agree, narrowed form correct |
| F4 anchor corruption | Fig 2 :29 and :34; contamination papers are one witness | agree |
| F5 capability is agent-and-habitat | Fig 11 :40; the figure itself admits the claim has not been tested forward | agree, lower confidence recorded |
| F6 broken middle link | Fig 3 :19 and :27 | agree |
| F7 two currencies | Fig 12 :125 and :130 | agree |
| F8 agreement is not witness | Fig 7 :35, Fig 2 :42, Fig 9 :60 | agree |
| F9 absolute ranking is `gap` | Fig 13 :134 and Fig 8 :39 permit an honest unreachable verdict | agree |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## 3. Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 9 :5 "are not one hard question but several well-formed ones. Split it rather than search." checked.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." checked.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." checked.
- Fig 4 :20 "Only the actors, the currency and the anchor change." checked.
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." checked.
- Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." checked.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked. Note the line continues onto the next SVG line with "If it moves when you push on it, it is not an anchor." The quotation used stops at the full stop and is a valid substring.
- Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." checked.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." checked.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" checked as a substring of the longer line; the leading clause is omitted, so it is presented as a substring, not a whole line.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## 4. Round trip gap R_T

The Symbols table defines `R_T` as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 9 :5 (split the union), Fig 1 :27 and Fig 4 :20 (size frame-internal), Fig 8 :32 and Fig 6 :23 (closure and import), Fig 2 :29 (anchor), Fig 11 :40 (habitat).
2. **Abstraction (T_A):** the shorthand carried in `07_the_tether_answer.md`: split axes, size does not decide, specialist can win on a fixed habitat with a sound anchor, contact wins after habitat change, absolute ranking is a gap.
3. **Concretisation (T_E):** an actual experiment design: dynamic non-leaked anchor, size varied independently of contact, two reported numbers, habitat enumerated before and after a change.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **definition of the anchor**, which in the concrete design requires demonstrating non-leakage rather than merely asserting a held-out set;
- the **independence of size from contact**, which must be engineered in the experiment or the comparison is confounded;
- the **two-currency separation**, which a single leaderboard score collapses even when the paper claims to report both.

Conversely, two things survive cleanly: a specialist surplus is reachable only where closures differ and the anchor holds, and agent-only scaling cannot repair a broken objective link. R_T was **not** measured numerically because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating the formula as identical to the figure set would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names.

## 5. Strains and re-census

- **Scaling gains versus specialist wins.** Apparent conflict resolved by re-census: Kaplan et al. describe search inside a closure; fine-tuning imports an atom from a labelled-data frame. Different objects, no figure bent. Matches the canonical rule that a reading which makes figures contradict one another has misidentified its domain.
- **Fig 11 :40 confidence.** Live and declared. The figure itself says the capability claim "fit cases already known and have not been tested forward, so they can still come back wrong". The primary records this honestly; I confirm that it should not be smoothed into a law.
- **Three ecology sources.** They appear to be three witnesses but share a theory pool (specialist/generalist niche-breadth paradigm). Recorded as one witness. The primary does this correctly.
- **Two contamination sources.** Same pool, one witness. Recorded correctly.
- **After re-census:** one declared low-confidence claim, no hidden strain.

## 6. Verdict on the solution

**On internal consistency: the solution passes.** All twelve files exist and are non-trivial. The union split, the exclusion of size, the anchor condition, the habitat claim, the two-currency rule and the final `gap` are each tied to a verbatim figure line and each carries a refuter. The retractions in `01` §6 are applied rather than ignored: the "small beats large" reading is retracted and narrowed, the claim that Fig 11 ranks size is retracted, the seat-map line citations are retracted because that file was not opened this session, and the apparent scaling conflict is dissolved by re-census. `09_watson_answer.md` carries the full WATSON shape with the verdict fields stated. `10_source_ledger.csv` lists every source actually opened, with author, venue, year, accessed date, quote and overlap.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is internal consistency, not truth.

**On the claim: `specified` and ungrounded, with one `gap`.** The shape survives: split the bundle, exclude size as a deciding variable, condition specialist surplus on a sound anchor and differing closures, treat adaptation as maintained contact, report two numbers. The absolute ranking is unreachable from the question as posed and is recorded as a verdict, not a silence. Nothing here is settled. A dynamic non-leaked anchor with size varied independently, a specialist retaining adaptability with no import channel, a derivation showing size changes the loop, or a lossless conversion of the two currencies would each move a cell.

**Recommendation.** Send the corrected packet with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links. If a checker supplies a named habitat and a non-updating anchor with the four cells measured, that result, not this derivation, settles the question.
