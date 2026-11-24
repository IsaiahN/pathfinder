# Figure-grounded audit: Can smaller, specialized systems outperform large general-purpose models in reliability and adaptability?

**Mode of this document: `specified` on the per-domain shapes, `general` on the meta-shape, never `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-24): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself". This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode from `FRAMEWORK/figures/THE_FORMULA.md`. World sources were opened on 2026-11-24 and are recorded in `10_source_ledger.csv`.

---

## 0. The claim under audit, stated as a residual

The question compares two architectures (small specialized system, large general-purpose model) on two axes (reliability, adaptability). Stated in effect terms:

> R = the gap between what a size-and-scope frame predicts about which architecture wins, and what a controlled measurement on a named habitat would return, separately for reliability and for adaptability.

Nothing in the question names the habitat, the task distribution, the anchor, or the axis weighting. The residual is therefore underdetermined as posed. That is a finding, not an excuse to defer. The measured facts that would close it are: a held-out distribution that does not update when a model is tuned on it, and a deployment environment whose contact conditions are enumerated rather than assumed.

Binding the sought-for shape as an ordinary term (formula "Direction"): an answer has the form "for habitat H and non-updating anchor A, architecture X has smaller residual than Y on axis g at equal contact." This shape is written down now so it can be refuted later, rather than held as an invisible preference.

---

## 1. Figure census

| figure | bearing on this residual | verdict after reading |
|---|---|---|
| 1 The Agent | frame-internal quantities disqualified; residual per slot, not aggregated | parameter count and coverage are frame-internal; no verdict from size alone |
| 2 The Ground | anchor must not update; agreement from one pool is not corroboration | benchmark contamination is the named collapse; "can outperform" claims need a non-updating anchor |
| 3 Dependency Chain | optimising a working link cannot rescue a broken one; middle link has no instrument | scaling lands above the break if the objective/vocabulary link is broken |
| 4 The Membrane | kernel unchanged with size; only actors, currency, anchor change; round trip gap | size changes the cast, not the loop; `R_T` owed on any condensation |
| 5 Mint Pipeline | three guards as a product; machinery firing is not success | a bigger search is not a new atom; guard REACHABILITY fails inside a fixed closure |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse instruments | a narrow closure with a live import can reach what a wide closure cannot derive |
| 7 Room Chain | agreement is variation, not a verdict; no last room | more evaluators do not settle; a rate claim cannot be a final theory of systems |
| 8 Union Surplus | closure is idempotent; two frames together reach what neither reaches alone | predicts specialist surplus where closures differ; provenance decides convergence versus import |
| 9 Leave / Arrive | split a union before searching; describe residual before picking frame; filters are not witnesses | the question is a union compound; splitting is the first move |
| 10 Ground Maintainer | bring the residual, never the source; verifier non-access | outreach order: residual and refuter before theory |
| 11 The Habitat | capability is agent-and-habitat; agent-only improvement changes nothing; isolation substitutes a habitat | specialization is an asset in a stable habitat and a liability after a habitat change |
| 12 The Bond | two currencies, bits and actions, do not add | reliability and adaptability are not one score; summing them is the named error |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict, not a silence | absolute "smaller beats larger" is a gap after re-census, not silence |
| Formula | steps 1 to 8, mode rule, SEARCHED / INWARD / OUTWARD | three distinct questions kept distinct; nothing `grounded` |
| Figures README (canonical) | "a shape, not a name"; "Indiscernibility is not identity" | the answer is a conditional shape with a recorded stop, not a ranking of architectures |

Strained readings are named in section 2 and re-censused in section 6. No em dashes are used.

---

## 2. Findings

### F1: The question is a union compound, not one question (decisive for the form of the answer)

Fig 9 :5: "are not one hard question but several well-formed ones. Split it rather than search."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 12 :125: "A composition costs in two currencies, and they do not add."

The two axes are not one axis. Reliability is a residual measured against a fixed anchor; adaptability is a residual measured across a change of habitat. Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." They are in different units. Fig 12 :129: "Neither figure predicts the other, so both are read or the choice is made blind." A single "performance" number that averages reliability and adaptability is the named error, not a summary.

Also, "smaller specialized" and "large general-purpose" are two conditions that overlap: a small model can be general-purpose, and a large model can be fine-tuned to a narrow domain. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

**Verdict:** `general` on the meta-shape. Split before measuring. Triangulated across Fig 9 (union) and Fig 12 (two currencies), low overlap.
**Refuter:** a controlled study in which one intervention moves reliability and adaptability together with no interaction term, and the two system descriptions are disjoint rather than overlapping. Then the bundle is a partition and this finding fails.

### F2: Size is a frame-internal quantity and cannot hand down a verdict

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
Fig 4 :20: "Only the actors, the currency and the anchor change."
Fig 4 :22: "Only methods cross up. Only head starts come down."

The kernel is the same loop at one agent or a thousand. What changes with size is the cast, the currency, and the anchor, not the loop. Parameter count, training corpus size, and benchmark coverage are all produced by the same frame that would use them to score itself. Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A global "bigger is better" curve averages over the object slots where the residual actually lives.

**Verdict:** no figure line governs the absolute comparison "smaller beats larger". This is stated as `gap` at the end of the census, not filled with an outside intuition. Triangulated (Fig 1 and Fig 4) on the frame-internality claim.
**Refuter:** a derivation from the figures showing that changing size changes the loop or the anchor rather than only the actors and currency. Until that, Fig 4 :20 stands.

### F3: On reliability in a fixed habitat, the specialist can win, and the figure says when

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :45: "Two frames together reach what neither reaches alone."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

A large general-purpose model is a wide closure. Scaling searches more of that closure, and by Fig 8 :32 no amount of that search adds an atom it does not hold. A specialized system in contact with a different frame (a domain corpus, an instrument, an expert check) can import the atom that closes the local residual. So on a narrow, fixed habitat with a genuine non-updating anchor, the specialist can reach a term the general model cannot derive. This is a shape with a condition, not a promise that every specialist beats every general model.

Fig 4 :22 matters here: "Only methods cross up. Only head starts come down." A larger model gives a cheaper head start; it does not give a better loop. The specialist's advantage is an imported atom or a maintained anchor, not a smaller parameter count as such.

**Verdict:** `specified`, triangulated (Fig 8 :32 and Fig 6 :23 with Fig 2 :29), low overlap between the closure law and the anchor law.
**Refuter:** on a held-out anchor that provably does not update, with size varied independently of contact, the general model matches or beats the specialist at equal contact. That would refute the conditional surplus claim at the ground.

### F4: Most reported wins are readings against an anchor that moved

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool."

A benchmark that leaked into pretraining does not settle generalization; it reports the frame's own influence on the anchor. Dekoninck, Müller and Vechev (NeurIPS 2024, opened this session) define contamination as "artificially inflated and non-generalizing benchmark performance" and find high levels in several popular models. Deng et al. (Findings ACL 2024) note that contamination "can obscure the true generalization performance of LLMs". These are two papers in one evidence pool (benchmark contamination), so they count as one witness, not two.

Concretely: a large model trained on internet-scale corpora is more exposed to benchmark leakage than a small model tuned on a private domain set. An observed "general model is worse" or "specialist is better" result could be a difference in anchor integrity, not a difference in capability. Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

**Verdict:** `specified`, triangulated within the figures (Fig 2 :29 and :35, distinct panels) and corroborated by the world sources, though the world sources share a pool.
**Refuter:** a dynamic or rephrased benchmark with demonstrably zero leakage that preserves the same ordering of architectures. Then anchor integrity is not the explanation and this finding is narrowed to the contaminated cases.

### F5: Adaptability out of habitat is where specialization fails, and where the general model only helps if it maintains contact

Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
Fig 11 :72: "an agent-only improvement that moved the ground would refute the capability claim."

Fig 11 :40 cuts both ways. Making the small agent smaller, or the large agent larger, is an agent-only improvement if contact is unchanged, and changes nothing. General-purpose breadth helps adaptability only if breadth is actual contact with a live frame, not merely a wide training corpus. Specialization buys reliability inside a stable habitat and costs adaptability when the habitat changes, because a substituted habitat drops actors the goal needed: "what you failed to reproduce is invisible until the goal fails" (Fig 11 :68).

The figure itself supplies the refuter. Fig 11 :71 to :72 says the capability claim "fit cases already known and have not been tested forward, so they can still come back wrong: an agent-only improvement that moved the ground would refute the capability claim." That is an unusually honest standing for a finding, and it is preserved here.

**Verdict:** `specified`, single-source within the figures (Fig 11 only) for the isolation law, triangulated with Fig 4 :20 for the agent-in-isolation claim. Corroborated from a low-overlap field (ecology, below).
**Refuter:** a specialist moved to a new habitat retains its adaptability without any maintained import channel or re-enumeration of contact. That would move the ground by an agent-only change and break Fig 11 :40 as applied here.

### F6: Scaling cannot rescue a broken middle link

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
Fig 3 :20: "The chain is ordered by dependency, not by importance."

Fig 3 :24 to :26 says the middle link (having terms for what a situation affords and saying what would count as progress) has neither obvious failures nor obvious instruments, so it attracts the least attention. Reliability failures in deployed systems are often failures of this link: the system has no term for what the deployment situation affords and no local statement of what progress would be. More parameters optimise perception and planning, which are above the break. Fig 3 :23: "A step whose input never arrives cannot be diagnosed, only its predecessor can."

**Verdict:** `specified`, single-source (Fig 3).
**Refuter:** a measured case where scaling alone repaired a broken objective/vocabulary link, with the link's state assessed before and after and the instrument named.

### F7: Reliability and adaptability are priced in different units, and so are bits and actions

Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."
Fig 12 :127: "It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all."

A specialized system is cheap to describe and often expensive to retarget; a general system is expensive to describe and may be cheap to retarget by prompting. Neither reading predicts the other. A claim that one architecture "wins overall" sums two prices that do not add.

**Verdict:** `general` on the meta-shape, triangulated with F1.
**Refuter:** a lossless conversion between description cost and action cost under a declared code, such that the two prices become one comparable figure. Fig 12 says they are in different units; a conversion would have to be demonstrated, not asserted.

### F8: Agreement from the evaluator pool is not a witness

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."
Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A public call for opinions about which architecture is better produces a convention, not an anchor. A second seat drawn from the same literature is a mirror with a different name. Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."

**Verdict:** `general`, triangulated (Fig 7, Fig 2, Fig 9).
**Refuter:** two evaluators with demonstrably disjoint evidence pools returning the same ordering on a non-updating anchor, with each pool documented. That would be corroboration at maximum independence rather than one pool talking.

### F9: What actually survives, with mode and status kept separate

| claim | mode | figure line | status |
|---|---|---|---|
| The bundled question must be split before it is searched | `general` | Fig 9 :5, Fig 9 :54, Fig 12 :125 | triangulated |
| Size alone cannot decide an architecture comparison | `general` | Fig 1 :27, Fig 4 :20 | triangulated |
| On a fixed habitat with a non-updating anchor, a specialist can reach what a wide closure cannot derive | `specified` | Fig 8 :32, Fig 6 :23, Fig 2 :29 | triangulated |
| Adaptation across a habitat change favours maintained contact, not agent-only scaling | `specified` | Fig 11 :40, Fig 11 :70 | single-source in the figures, ecology corroboration |
| Scaling cannot repair a broken objective/vocabulary link | `specified` | Fig 3 :19, Fig 3 :27 | single-source |
| Reliability and adaptability must be reported separately | `general` | Fig 12 :125, Fig 12 :130 | triangulated |
| The absolute ranking "smaller beats larger" | `gap` | Fig 13 :134, Fig 8 :39 | no line governs after re-census |

Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 8 :39: "So a search that finds nothing is never a proof of absence." The `gap` is recorded honestly and not filled by an outside intuition. The reason is structural: the question omits the habitat and the anchor, and Fig 9 :28 warns "any frame you pick will seem to fit" if the residual is described after the frame is chosen.

---

## 3. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a design instrument. The shape claim and its per-domain findings are refuted if any of the following holds:

1. A controlled measurement on a dynamic, provably non-leaked anchor, with model size varied independently of habitat contact, shows the large general-purpose model matching or beating the specialist on reliability in the specialist's own narrow habitat at equal contact. This kills F3.
2. A specialist moved to a new habitat retains its adaptability with no import channel, no re-enumeration of contact, and no instrument added. This moves the ground by an agent-only change and kills F5 and Fig 11 :40 as applied here.
3. A derivation from the figures shows that size changes the loop or the anchor rather than only actors, currency and anchor. This kills F2 and forces a re-census of Fig 4.
4. A lossless conversion is demonstrated between the two prices in Fig 12, so reliability and adaptability can be summed without residue. This kills F1 and F7.

If any fires, the affected finding is withdrawn, not softened. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Do not answer the bundled yes or no question. Split it on axis first (reliability versus adaptability) and on condition second (stable habitat versus habitat change). Fig 9 :5 and Fig 9 :54.
2. Name the habitat H and the anchor A before naming any architecture. Fig 9 :28: "any frame you pick will seem to fit" otherwise.
3. For a reliability claim, require a non-updating anchor. Report the leakage check as part of the claim, not as a footnote. Fig 2 :29.
4. For an adaptability claim, enumerate the habitat and report which contacts were changed. A static benchmark result is a wiring result, not a capability result (Fig 11 :70).
5. Report two numbers, never one score. Fig 12 :130.
6. Treat scale as a budget filter, not a witness. Fig 9 :60.
7. Send the generator: the residual, the shape, and the refuter. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."

---

## 5. Canonical usage check

Two local canonical sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo", "the quotes are the authority, not this summary", and "a reading that makes one contradict another has misidentified its domain, not found a flaw". The canonical limit is that the framework reports "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments, recording the lineage so the stop is honest. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 keeps SEARCHED, INWARD and OUTWARD distinct. In this question, the missing atom is not a new AI architecture; it is the missing specification of habitat and anchor. Searching more benchmark results (SEARCHED) cannot supply that specification. Extending the instrument (INWARD) means building a dynamic, non-leaked evaluation. Importing (OUTWARD) means bringing in an ecology or instrumentation frame whose closure already predicts the specialist/generalist trade-off under disturbance.

---

## 6. Retractions and confirmations

Corrections are kept visible. No earlier reading was silently erased.

| earlier reading in this derivation | status after canonical check and re-census |
|---|---|
| "Fig 8 :32 predicts specialists beat general models" | **Retracted and narrowed.** It predicts a surplus only where closures differ and the anchor does not update. Size as such contributes nothing (F2). The narrowed form is F3. |
| "Reliability and adaptability are two ends of one performance axis" | **Retracted.** Fig 12 :125 and :130 forbid the sum. They are two currencies. F1 and F7 now keep them separate. |
| "Fig 11 :40 says small is better" | **Retracted.** It says an agent-only improvement changes nothing. It does not rank size. The habitat, not the parameter count, is the variable. |
| "Seat Map line numbers can be cited for the outreach restrictions" | **Retracted.** The seat map was not among the local files opened this session, so no line number from it is cited. The same restrictions are grounded in Fig 2 :35, Fig 9 :60 and Fig 10 :42, which were opened. |
| "More evidence sources make the verdict stronger" | **Narrowed.** Dekoninck et al. and Deng et al. share the benchmark-contamination pool, so they are one witness. Peers et al., Fried et al. and Morris et al. share the ecology specialist/generalist pool, so they are one witness from a low-overlap field. |
| F1 union compound | **Canonically confirmed.** Figs README and Fig 9 :5 agree; "unbundle before you search again". |
| F4 anchor must not update | **Canonically confirmed.** Fig 2 :29 and :34 plus the two contamination papers. |
| F5 capability is agent-and-habitat | **Canonically confirmed and self-refuting by design.** Fig 11 :71 to :72 names the observation that would break it. |
| F9 `gap` for the absolute ranking | **Confirmed.** Fig 13 :134 permits a verdict of unreachable; Fig 8 :39 forbids treating an unfound answer as proof of absence. |

**Strain after re-census:** one live strain, named. Fig 8 :32 says search inside a closure adds no atom, while the empirical literature reports that fine-tuning a small model on 100 labelled examples changes its behaviour substantially (Pecher et al.). Re-census resolves the apparent contradiction: fine-tuning is an import from a labelled-data frame, not search inside a fixed closure. The atom was in the data frame and crosses the boundary. No figure was bent; the domain of "search" was corrected. A second strain remains open: Fig 11 :71 to :72 says the capability claim "fit cases already known and have not been tested forward, so they can still come back wrong" by the figure's own admission, so F5 carries lower confidence than F3.

**Updated verdict:** the answer is a conditional shape with one `gap`, not a single comparison. The strongest figure-grounded points are the union split (Fig 9 :5), the frame-internality of size (Fig 1 :27 and Fig 4 :20), the closure-surplus condition (Fig 8 :32 and Fig 6 :23), and the anchor law (Fig 2 :29). Nothing here is `grounded`.
