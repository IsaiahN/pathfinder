# The Tether's answer: where does the recommender sit?

**Mode: `general` on the reframing, `specified` on the habitat prediction. Not `grounded`.** This is a shape, a test, and an exception, not a platform result. Simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A model of information spread fails in the slots where the recommender and the users co-adapt: the algorithm changes exposure, exposure changes ties, and the new ties change the algorithm's training data. The question presumes a partition, inside or outside. That presumption is the thing to audit first.

## 2. The shape

1. **The label is a convention, not a measurement.** Fig 10 :18: *"a declared meaning is not a grounded one"*. Fig 4 :21: *"Not a wall: a filter with a direction."* Calling the recommender an "external influence" declares a boundary. It becomes a ground fact only when a test can violate it.

2. **The recommender is in the habitat of the spread residual.** Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* The recommender acts on what users see and is changed by what users do. It is in contact. Fig 11 :61-62: *"Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."* So the default modeling move is to put it inside, as an actor in the field of contact.

3. **The deciding property is the anchor test.** Fig 2 :25: *"pinned: it does not update on A or B"*. An external influence must be pinned: its state must not change because of what the network does. A recommender that retrains on the behavior it induces fails that test. Modeling it as fixed while it updates is Fig 2 :4 *"collapse 1: mutual update"*, whose outcome is *"they converge, and what they converge on is whoever had the most influence"* (Fig 2 :14-15). The drift is coherent, which is why nobody notices.

4. **The exception is real and narrow.** A recommender whose ranking is genuinely invariant to the behavior it affects, for example a randomized or fixed external intervention, can be modeled as an external influence. That is the pinned case. The answer is therefore not a bare yes: it is yes with a criterion and one exception.

5. **It is a union to unbundle, not a dichotomy to choose.** Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Organic transmission and algorithmically mediated exposure are two conditions with their own closures. Fig 8 :45: *"Two frames together reach what neither reaches alone."* Range both frames against the same ground, separately, and keep their evidence pools independent (Fig 2 :31).

6. **No new primitive is owed.** Fig 6 :25: *"An import adds no atom to the world."* Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone"*. Adding the recommender to the model is re-enumerating the habitat, not minting a seventh term.

7. **The two arrangements are isomers.** Same cast, different bond, different predicted behavior (Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*). The flat component list hides the difference, which is why the question can look like a mere labeling choice. See `06_isomers_and_order.md`.

## 3. What it explicitly does not say

- Not that the recommender is identical to a social tie. It is a distinct actor with its own closure and objective, enumerated into the same habitat.
- Not that the external model is always wrong. It is licensed in the pinned case (point 4).
- Not that agreement among researchers settles the boundary. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- Not a platform-specific effect size, a particular architecture, or a number. Those are `gap` until a ground settles them.
- Not `grounded`. No experiment, A/B test, or dataset analysis was run in this folder.

## 4. What would settle it, the ground

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: a reading *"cannot comment on the source"*, and the color case was *"proven wrong not by argument, but by the arrival of a better instrument."* Here that means exogenous variation in the recommender's signal:

1. **Pinned test.** Randomize the recommender's ranking, or hold it fixed while user behavior changes, and check whether exposure and cascade shape are independent of user behavior. If yes, the external model is licensed.
2. **Contact test.** Remove or neutralize the recommender and measure whether the spread residual changes. If there is no change, it is not in the habitat.
3. **Union test.** Check whether the organic and algorithmic channels can be ranged against the same ground independently. If their evidence pools are identical, the compound reading falls.
4. **Standing refuters from `01` §4:** any of those firing narrows or withdraws the shape claim.

## 5. The honest stop

**Unreached, not unreachable.** The canonical README says the framework stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest"* and that *"Indiscernibility is not identity."* We can state the test that decides the boundary and the exception that licenses the external model. We cannot report what a given platform's recommender actually does without its data. The lineage of this stop is in `01_figure_grounded_audit.md` §7 and `11_audit.md`.

## 6. One-paragraph version for outreach

> The Tether does not answer "inside or outside" as a bare yes. It says the label is a boundary convention until a test violates it, that the recommender is in contact with the spread residual and therefore belongs in the habitat any model of that spread must enumerate, and that the deciding property is simple: does the recommender's state update on the behavior it affects? If it does, it is a frame, not a pinned anchor, and treating it as a fixed external force is the mutual-update collapse in which users and the algorithm converge on whoever had the most influence. If it genuinely does not update, a randomized or fixed signal, the external model is licensed. The two arrangements are isomers over the same cast with different bonds, so a flat component list hides the difference that matters. What is offered is the test, the exception, and the refuters written in advance. The platform-specific answer stays open until a randomized or otherwise discriminating instrument settles it.
