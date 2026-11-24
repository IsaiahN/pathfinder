# The Tether's answer: can smaller specialized systems outperform large general-purpose models?

**Mode: `specified` on the per-domain shapes, `general` on the meta-shape, `gap` on the absolute ranking. Nothing here is `grounded`.** This is a simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

The question asks whether one architecture beats another on reliability and adaptability. As posed it omits the habitat, the anchor, and the fact that the two axes are different currencies. Fig 9 :5: "are not one hard question but several well-formed ones. Split it rather than search." Fig 12 :125: "A composition costs in two currencies, and they do not add."

The residual that can actually be answered is: *under which conditions does a narrow closure with a maintained import beat a wide closure, separately for reliability and for adaptability?* That is the question this answer addresses.

## 2. The shape

1. **The bundle must be split.** Reliability is a residual against a fixed anchor; adaptability is a residual across a habitat change. Two numbers, never one score (Fig 12 :130).
2. **Size alone cannot decide.** Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 4 :20: "Only the actors, the currency and the anchor change." Parameter count changes the cast, not the loop.
3. **On reliability in a fixed habitat, the specialist can win, conditionally.** Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." A wide closure cannot derive an atom it does not hold; a specialist in contact with a different frame can import it. The condition is a non-updating anchor (Fig 2 :29).
4. **On adaptability after a habitat change, maintained contact wins.** Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." A static benchmark win is a wiring result (Fig 11 :70).
5. **Scaling cannot repair a broken objective or vocabulary link.** Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
6. **The absolute ranking is a `gap`.** Fig 13 :134: "Unreachable is a verdict here, not a silence". With no habitat and no anchor named, no figure line governs "smaller beats larger". Reporting this as a gap is the honest stop, not a failure to answer.

## 3. What it explicitly does not say

- Not "small is better" and not "big is better". Size is excluded as a deciding variable.
- Not that every specialist beats every general model. The surplus is conditional on differing closures and a sound anchor.
- Not that reliability and adaptability can be averaged or summed.
- Not that scaling never helps. Scaling searches a closure more efficiently; the figures only deny that search adds an atom.
- Not that the ecology analogue settles an ML measurement. It imports one conditional shape from one evidence pool and no magnitude.
- Not grounded. No controlled comparison was run.

## 4. What would settle it, the ground

A controlled comparison with four cells (two axes x stable habitat / changed habitat), in which:

1. The habitat H and task distribution are written down before any model is chosen (Fig 9 :28).
2. The anchor A is demonstrated not to update when a model is tuned on it. A dynamic or rephrased, provably non-leaked evaluation is the instrument already returning something (Fig 6 :32).
3. Model size is varied independently of contact, so the two variables are not confounded.
4. Reliability and adaptability are reported as two numbers (Fig 12 :125).
5. For the adaptability cell, the habitat contacts are enumerated before and after the change (Fig 11 :43).

Standing falsifiers from `01` §3: general model matches or beats specialist at equal contact on a non-leaked anchor; specialist retains adaptability after habitat change with no import channel; a derivation shows size changes the loop; a lossless conversion is found between the two currencies.

## 5. The honest stop

The answer stops at the shape. It says which comparisons are well formed and what instrument would close each one. It does not say which architecture wins in the abstract, because that question has no named habitat and no anchor. The lineage is recorded so the stop is checkable. "Indiscernibility is not identity" (canonical figures README). The derived result is a candidate until the ground pays; agreement from readers cannot move it to `grounded`.

## 6. One-paragraph version for outreach

> The Tether does not say that small models beat big ones, or the reverse. It says that the question as asked is a bundle: reliability measured against a fixed anchor and adaptability measured across a habitat change are two currencies that do not add. Size is a quantity the architecture frame produces, so it cannot score the frame. What the figures do predict is conditional: on a fixed habitat with an anchor that does not update, a specialist in contact with a different frame can reach a term that a wide general closure cannot derive from its own library; after the habitat changes, what wins is maintained contact, not a larger model working in isolation. Scaling searches a closure more efficiently but does not add an atom, and it cannot repair a broken objective link. So the answer offered is a shape with four cells and three falsifiers written in advance, not a winner. The absolute ranking stays open until someone names the habitat, builds a non-updating anchor, and measures the two axes separately.
