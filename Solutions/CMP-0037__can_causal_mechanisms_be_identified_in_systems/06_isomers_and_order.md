# Isomers and order: the supporting derivation for CMP-0037

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` section 6).

## RESIDUAL

The question says the intervention changes *several connected parts at once*. Three things are therefore owed before any verdict: (1) what kind of arrangement joins the parts, (2) what order the operations of identification must run in, and (3) what the analogues from other fields actually license. "Several parts at once" is ambiguous between a symmetric conjunction, an ordered cascade, a production relation, and a network. Those are different terms. If the wrong one is chosen, the mechanism claim is mistyped before any data is examined.

## DOMAIN CENSUS

Atoms held: the six substrate terms plus, in a real system, whatever parts are enumerated from the habitat. Bonds held: the seven, three symmetric (`+`, `∥`, `≡`) and four ordered (`→`, `⇒`, `−`, `⋛`), plus negation. No new primitive is available without import. The Operators table warns: **"the only bond a flat chain can express, so every term today is a sequence whether or not it should be."** This is the standing risk for causal language: a flat causal chain writes `A then B` even when the claim is production.

## DERIVATION

### Q1. Which bond does a multi-part intervention assert?

- Conjunction `+` is symmetric: *"both hold at once."* Under it, k parts have k! spellings and one term. If the mechanism claim is only "these parts changed", it is a conjunction and carries no route.
- Sequence `→` is ordered: *"A then B; B needs A to have happened."* It carries order but not bringing-about.
- Production `⇒` is ordered and creates its operand: **"A produces B; B did not exist before"**, with the test **"is there a B before A fires? No."** This is the bond a causal mechanism claim must assert if it is to be a mechanism rather than a chronology.
- Comparison `⋛` is a threshold relation between two quantities. A goal is a comparison; it is not a producer.

Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."** So the first question about a proposed mechanism is not "is it true" but "what bond is it, and does the evidence test that bond?" The Operators table's warning is that defaulting to sequence is a notation failure: the arrangement is not recovered from the parts.

**Falsifier, written before the run:** if a multi-part response can be fully specified by an unordered set of changed parts and still supports counterfactual production claims, the bond distinction is idle and this derivation is refuted.

### Q2. Are two mechanisms over the same parts isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Take two candidate mechanisms over the same enumerated part set `{P1, P2, P3}`:

```
M1 = P1 ⇒ P2 → P3
M2 = P1 → P2 ⇒ P3
```

Same atoms, different bond placement, different substance. By Fig 12 they are **isomers**, not variants of one mechanism. This is exactly the case where an outcome vector at `P3` cannot discriminate them: the reading is the same projection, the sources differ. It is the Fig 12 flat-form collapse stated causally: *"the ingredients are recorded and the arrangement is not"*, so *"nothing downstream can tell them apart."*

If the two candidates use *different* part sets, they are not isomers; they are different molecules at most sharing a **functional group** (Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**). The isomer claim is therefore conditional on a shared, fully enumerated part set. That condition is load-bearing and is recorded in the falsifier below.

### Q3. What about feedback and catalysts?

A mechanism in a complex system is often not a chain. Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

Consequences for CMP-0037:

1. An intervention that changes several parts at once may be acting on a cycle. If the vocabulary holds only `→`, the cycle cannot be written at all: *"a chain cannot close by construction."*
2. A part that persists across uses (a catalyst-like part) behaves differently on the second intervention. Pooling both uses into one effect size is the same error as aggregating per-slot residuals: the distinguishing structure is averaged away. This is the graph-grounded version of the world finding that jointly applied interventions interact (Jeunen et al., NeurIPS 2022).
3. The sign of the loop decides whether it closes. That is a threshold/comparison question, not a sequence question.

### Q4. What is the order of operations?

The loop has a required order, and violating it produces a claim that cannot be checked.

1. **Describe the residual in effect terms** before choosing a frame. Fig 9 :27: **"describe it before you go looking, or any frame you pick will seem to fit."**
2. **Unbundle the union.** Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** And Fig 9 :4 on splitting rather than searching.
3. **Enumerate the habitat outward.** Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**
4. **Buy low-overlap frames and a fixed anchor.** Fig 2 :29 and :31. This is the inward/outward distinction of Fig 6 :31: **"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."**
5. **Refuse before mint.** The formula routes `REFUTED` to a refusal, not an explanation. Negation is the eighth operator (Operators table): **"a refutation is a negation, which is why a vocabulary without it can only accumulate."**
6. **Mint under the three guards**, then settle at the ground. Fig 5 :33: **"The three guards are a product, not a checklist."**
7. **Measure the round trip** when the mechanism crosses scales. Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Dependency note from Fig 3: a claim about step 6 taken when step 4 was never run is not a weak claim, it is *"a reading of nothing."*

### Q5. What do the analogue cases license, and what do they not?

| analogue | what it licenses | what it does not license |
|---|---|---|
| Chemical isomerism (Fig 12) | same parts, different bond, different behaviour; the arrangement is the substance | naming which isomer without a discriminator |
| Paine's starfish removal (Wagner 2010, *Nature Education Knowledge*) | a one-part intervention can expose a cascade several steps out, given an unchanged control | concluding that the nearest changed neighbour is the mechanism |
| QCA equifinality (Hancock et al. 2021, *BMC Public Health*) | different configurations can reach the same outcome; causal asymmetry is real | treating one configuration as *the* mechanism across contexts |
| Cyclic causal models (Besserve & Schölkopf 2022, UAI) | feedback makes intervention effects non-inferable from graph structure alone | assuming the cycle is absent because the diagram is a chain |
| Chain-reaction identifiability (Panayiotou & Şimşek 2026) | blocking interventions can identify a tree when each node has one trigger | extending the result to multi-parent cases; the authors explicitly exclude them |
| do-calculus completeness (Hitchcock, SEP) | identification is a conditional, formal question relative to structure and assumptions | reading "not identified" as "no mechanism exists" |

The analogues are second seat only. The figures decide; an analogue that conflicts sends us back to the census, it never flips the verdict. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

## CONCLUSION

The multi-part intervention is not one effect with several readouts. It is a bond question first: the candidate mechanism must state whether it asserts conjunction, sequence, production or threshold, and the evidence must test that bond. Over a shared, fully enumerated part set, two mechanisms differing only in bond placement are Fig 12 isomers, and the same outcome vector cannot discriminate them; the lineage or a new axis of measurement can. Feedback and catalysts break the chain vocabulary, so a chain-only representation is structurally unable to name the mechanism even before data are considered. The required order is describe, unbundle, enumerate, frame, refuse, mint, settle, measure the round trip.

This rescues what is defensible in the question without upgrading it: identification of a shape is possible under these conditions, identification of a name requires a discriminator, and the multi-part intervention is an asset because it makes the residue describable, not because it delivers one mechanism.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (Fig 12, Fig 9, Fig 11, Fig 2, Fig 6, Fig 5, Fig 4 and the Operators table), the eight essays, and the six world sources listed in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 4 (round trip), Fig 5 (guards), Fig 6 (inward/outward), Fig 9 (union, describe before looking, filters), Fig 11 (enumerate habitat), Fig 12 (ingredients versus arrangement, isomer, catalyst, cycle, functional group), Fig 2 (anchor and independence), Operators (bond tests, negation).

## FALSIFIER

The isomer and bond claims fail if any of the following holds:

1. A multi-part response fully specified by an unordered part set supports counterfactual production claims with no bond information.
2. Two mechanisms over the same enumerated part set with different bond placements are always distinguishable from the outcome vector alone.
3. A chain vocabulary with no cycle or catalyst reproduces the same counterfactual predictions under a closed loop.
4. The required order can be reversed without loss, that is, a mechanism can be settled before the habitat is enumerated and the frames are chosen.

If any fires, the corresponding row of `01` section 4 is withdrawn and the domain verdict that rests on it is recomputed. Strains after re-census: the isomer claim is live only under the shared-part-set condition (it is named, not hidden); the extension of single-trigger identifiability to multi-parent settings is a world-source limit, not a figure strain.
