# State versus route: the probe analogue and the order of the loops

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §8).

## RESIDUAL

The audit left three open items that need a supporting derivation:

1. If an internal feature is a **state** and reliable reasoning is a **route**, what carries the claim that the first supports the second? The bond is not in the operands.
2. Where exactly does the chain from "model has internal structure" to "model reasons reliably" break?
3. Is the interpretability probe an instrument extending a worse instrument, or a new atom imported from outside? This decides which of Fig 6's two opposed questions applies.

## DOMAIN CENSUS

Atoms held in the ML frame: activations, weights, features, circuits, probes, benchmarks, environments. Bonds held: ≡ identity ("feature is object"), ⇒ production ("state produces behaviour"), → sequence ("then"), ⋛ comparison ("goal"). No new primitive is available without import. The anchor is the ground, never agreement.

## DERIVATION

### Q1 - Which bond is "representation of"?

- Operators table: ≡ identity is "two names, one referent," with the test "substitute one for the other. Is anything lost? No."
- To say "this activation is the representation of that object" is to claim ≡. But the test fails: substituting the object for the activation loses everything about causal role, and substituting the activation for the object loses everything about the world slot.
- Operators table: ⇒ production is "A produces B; B did not exist before," with the test "is there a B before A fires? No."
- "Supports reliable reasoning" is ⇒ or →, not ≡. The question silently swaps one bond for another under a single verb.

**Conclusion:** the question conflates an identity claim with a production claim. They are different molecules over possibly the same atoms. Fig 12 :94: "The arrangement is the substance." **Falsifier, written before the run:** show that the identity and production readings of "representation" are the same term under the figure's six bond tests. If they are, the conflation is harmless and this finding is withdrawn. Status: `general`, single-source (Fig 12 and Operators table, low overlap between them).

### Q2 - State versus route

- Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."
- Fig 12 :112-113: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."
- An internal feature names a state. Reliable reasoning requires a sequence (a plan), a comparison (a goal) and a subtraction (progress). Those are three ordered bonds. A vocabulary holding only the feature cannot write any of them.
- Fig 12 :115-116: "having terms for what a situation affords was taken for a dictionary and it is a grammar." So the missing thing is not more features; it is the grammar that composes them into a route.

**Conclusion:** even a complete inventory of internal states would not compose "reliable reasoning" without the ordered bonds. The bond is charged for what it could have been (Fig 12 :99-101), so it cannot be assumed free by pointing at the feature. Status: `general`, single-source (Fig 12), structural.

### Q3 - Where the dependency chain breaks

Fig 3 names five links: perception, vocabulary, objective, planning, learn and carry. Applied here:

| link | question | instrument exists? | status |
|---|---|---|---|
| 1 perception | are objects, people, events separate slots? | partly: per-slot behavioural probes | reached, assessable |
| 2 vocabulary | are there terms for what those slots afford? | probe tasks, but see Q4 | reached, weak |
| 3 objective | what counts as "reliable reasoning"? | a benchmark average, which Fig 1 :19 forbids | **the likely break** |
| 4 planning | the route from state to grounded action | causal intervention studies | not assessable if link 3 is broken |
| 5 learn and carry | settlement and transfer across boundaries | absent here | not reached |

- Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
- Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
- Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."

**Conclusion:** the break is at link 3. Reporting reasoning as one benchmark number is effort above the break, because that is where measurements already exist (Fig 3 :29-30). The remedy is a per-slot objective with a named ground, not a larger model or a finer probe. **Falsifier:** demonstrate that a single global objective preserves the live-slot residual that an average destroys. Then link 3 works and the break moves. Status: `specified`, single-source (Fig 3) with Fig 1 corroboration.

### Q4 - Is the probe INWARD or OUTWARD?

Fig 6 :28-31 splits reachability into two opposed instruments:

- INWARD: "is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."
- OUTWARD: "does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."
- Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."

A probe trained on the model's own activations is INWARD. A human-subject or animal-behaviour result about how contact produces capability is OUTWARD. They are not rival answers to one question. The audit kept them separate (F5 and the WORLD section of `09_watson_answer.md`).

- Fig 6 :32-33: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Probes were improved from earlier decoding methods that already returned a reading; that makes them legitimate INWARD instruments, but not grounds.
- Hewitt and Liang 2019 (read this session): "popular probes on ELMo representations are not selective." A non-selective probe is an instrument that returns a reading manufactured by the probe itself. It fails by refining on an axis that cannot carry the claim.

**Conclusion:** the probe is INWARD, legitimate for sharpening, disqualified as a verdict. OUTWARD imports (extended mind, distributed cognition, affordance) corroborate the shape but must be cast in effect terms. Status: `general`, triangulated (Fig 6 and Fig 9 :30-31 for effect terms).

### Q5 - Is there an isomer claim here?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Two candidate systems over the same atoms (activations, weights, a task):

- System A: an internal feature is **identified** (≡) with a world object, and reasoning is read off the feature's presence.
- System B: the same feature is **used as an input** (⇒) to a grounded, per-slot route that can be refuted.

Same atoms, different bond, different substance. They are isomers in Fig 12's sense, and the difference is invisible in a description that lists only the ingredients ("the model has an object feature"). This is a real, checkable structural claim: a benchmark that cannot distinguish A from B is the flat formula failure, because "the ingredients are recorded and the arrangement is not" (Fig 12 :14).

**Falsifier:** if a measurement can distinguish A from B without access to the bond (for example, if feature presence alone predicts per-slot correctness on novel slots with an independent ground), the isomer claim fails and the flat description is adequate. Status: `specified`, single-source (Fig 12), with the direct-field probe-selectivity result as corroboration.

### Q6 - Order of the loops

- Formula step 2: refuse before mint. The claim "feature F is the object representation" is refused until grounded, not minted and then tested for loyalty.
- Fig 9 :53: "Residual first, frame second." Describe the per-slot failure before choosing the interpretability frame.
- Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." Once a per-slot result is settled against the ground, it can serve as an atom for a claim about the model's capability. Not before.
- Fig 11 :39-40: capability is agent-and-habitat; an improvement that does not change contact changes nothing.

**Conclusion:** settle the per-slot ground first, then the route, then the name. Any other order mints a representation term that can only accumulate, because its standing was never paid for.

## CONCLUSION

The supporting derivation yields three checkable structures: the state/route bond distinction (Q1, Q2), the break at the objective link (Q3), and the isomer claim between an identified feature and a used feature (Q5). The probe is an INWARD instrument and is kept separate from OUTWARD contact frames (Q4). The order is refuse, ground per slot, compose, then name (Q6). Each item has its falsifier above. Nothing here is `grounded`.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the Operators table; the formula; the eight essays; the direct-field sources in `10_source_ledger.csv`. No new measurement was taken.

## FIGURE CENSUS

Fig 1 (per-slot), Fig 3 (order, break, no-instrument), Fig 4 (two scales), Fig 6 (INWARD versus OUTWARD, instrument improvement), Fig 9 (residual first, effect terms), Fig 11 (capability and contact), Fig 12 (bond, state versus route, isomer, settled molecule), Operators (≡ versus ⇒), Formula (steps 2, 5, 7). Strains after re-census: none hidden. One live terminological strain, representation as state versus representation as grounded correspondence, is named and bound to two terms rather than smoothed.
