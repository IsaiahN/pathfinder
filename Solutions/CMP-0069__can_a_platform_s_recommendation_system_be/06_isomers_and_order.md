# The boundary as membrane: order, bonds, and the two-frame union

**Mode: `specified` on the structural derivation, `general` on the ordering rule.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The question offers two arrangements of the same cast: a recommender placed inside the network, and a recommender placed outside it. Two questions are owed: (1) what bond each arrangement commits to, and (2) in what order the modeling steps must be taken so that an earlier step does not spend the independence a later step needs.

## DOMAIN CENSUS

Atoms already available: users, content, ties, exposure events, and the recommender's state (Domain 2 of `01`). Bonds available from Fig 12 and the Operators table: `+` conjunction (symmetric), `→` sequence (ordered), `⇒` production (ordered), `−` subtraction, `⋛` comparison, and the others. No new primitive is available without import, and none is needed (Fig 6 :25: *"An import adds no atom to the world."*).

## DERIVATION

### Q1 - What bond does each arrangement commit to?

- Operators table :15: for `+`, *"swap the operands. Does the meaning change? No."* Operators table :33: for `→`, *"swap them. Does it become a different thing? Yes."*
- "Part of the network" is `+`: the recommender and the users both hold, and they compose as peers in one habitat. Swapping their descriptive order changes nothing.
- "External influence" is `→` or `⇒`: the recommender acts first, the network responds. The Operators table :39 distinguishes production: *"is there a B before A fires? No."* The external model asserts that the network's response did not exist before the recommender fired, which is false for a system that retrains on that response.
- Fig 12 :41: *"same two atoms, three substances and the bond is charged for what it could have been"*. The two arrangements are not two names for one model. They are different terms over the same atoms, and the difference is carried entirely by the bond.
- **Falsifier, written before the run:** if swapping the order of "recommender acts" and "network responds" leaves all predictions unchanged, the bond is symmetric and the ordered/external reading is not a different substance. The dichotomy collapses.

### Q2 - Are the two arrangements isomers?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- Both arrangements use the same cast (users, content, ties, exposure, recommender state). They differ in the bond. So under Fig 12's definition they are **isomers**: same atoms, different bond, different predicted behavior. The difference is invisible if you list only the components and decisive if you ask whether a feedback loop is represented.
- The stronger reading: the two arrangements are not variations of one model but different substances whose notation can hide the difference, which is exactly the flat-formula collapse Fig 12 :14-16 names: *"the ingredients are recorded and the arrangement is not nothing downstream can tell them apart, and nothing signals that anything was lost"*.
- **Falsifier:** if a single model can produce both the loop-representing and the loop-hiding predictions by reparameterization alone, they are one substance and the isomer claim fails.

### Q3 - What is the order of the union?

- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*
- Required order:
  1. **Perception.** State the failed slots: recommender-mediated exposures and the tie changes they cause. Fig 3 :5: *"the system can tell what is in front of it, and tell it apart from what was there before"*.
  2. **Vocabulary.** Bind the boundary convention as an ordinary term and distinguish convention, contact, and anchor property (`05` §5). This is Fig 3's middle link, the one with the fewest instruments (Fig 3 :25-27).
  3. **Objective.** Say what counts as progress: a model that predicts the failed slots. Fig 3 :10: *"it can say what would count as progress here, in its own terms"*.
  4. **Planning.** Choose the two-frame union and the independent ground check.
  5. **Learn and carry.** Name what worked, verify it, carry the method to the next platform.
- Trying to settle the boundary before steps 1 to 3 is effort above the break. It arrives at a step that cannot use it.
- **Falsifier:** if a boundary decision can be validated without first describing the residual slots, the dependency order is wrong and this finding is refuted.

### Q4 - What crosses the membrane, and in which direction?

- Fig 4 :22: *"Only methods cross up. Only head starts come down."* Fig 4 :23: *"upward: a method that can be reapplied. Never the recording of a particular success."*
- From the network-model frame to a population-level account, what crosses upward is the method for enumerating contact and checking the anchor property. From the population frame back down comes a head start: which slots to look at first. Neither crossing carries a recording of one platform's result.
- Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* The round-trip gap R_T for this question is enumerated in `01_figure_grounded_audit.md` §7.
- **Falsifier:** if a particular platform's fitted parameters must be copied verbatim into another platform's model to get the same prediction, a recording has crossed upward and the method-only rule is broken.

### Q5 - Does comparison apply here?

- The Operators table :51 says of `⋛`: *"is it about which is larger, rather than both being present? Yes."* Fig 12 :52 (in the extract's bond table) gives the same test.
- The two arrangements are not being compared on a quantity. They are alternative bonds over the same cast. So `⋛` is the wrong operator for the question's own wording, just as it was mistyped in the exemplar. The right operator for relating the two arrangements is structural identity under a different bond (Fig 12 :117), not a threshold comparison.
- **Falsifier:** if the modeling choice reduces to a measurable threshold, for example a single value of recommendation update rate above which the external model fails, then `⋛` is the right bond and this finding is refuted. In that case the question becomes a parameter question, not a structure question.

## CONCLUSION

The two arrangements are **isomers** under Fig 12: same cast, different bond, different behavior, with the difference hidden by a flat component list. "Inside" is `+`, "outside" is `→` or `⇒`. The modeling steps are **ordered by dependency**, with the vocabulary and objective link as the fragile middle of Fig 3's chain. What crosses the membrane is methods upward and head starts downward, never recordings. The round trip carries a nonzero gap that must be recorded. No new primitive, no import that moves a wall, and no threshold comparison is required.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. The Operators table and Fig 4, Fig 9, Fig 12, and Fig 3 were consulted directly. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order, middle link), Fig 4 (membrane direction, method-only crossing, round trip), Fig 6 (no atom added by import), Fig 9 (union before search), Fig 12 (isomer, functional group, flat-formula collapse, bond pricing), Fig 13 (closed set, open arrangements), Operators table (`+`, `→`, `⇒`, `⋛` tests). Strained after re-census: none hidden.
