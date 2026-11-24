# The Tether's answer on trust in AI systems

**Mode: `specified` - not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## 1. The residual it answers

People decide whether to trust an AI system by relying, checking, or overriding. The residual is whether their confidence tracks what the system actually does in that decision slot. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A person can be right about a system on average and still be miscalibrated on the one case that matters.

## 2. The shape

1. **The anchor type comes first.** Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* Fig 2 :37: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."* Fig 2 :38: *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* For a person-facing question, the person settles it. For a correctness question, a measurement settles it and human judgment is an instrument that can be wrong on axes it does not measure. Fluency, confidence and explanations are frame outputs, not anchors.

2. **Calibration is per slot, not a global score.** Each slot carries its own residual. The overall accuracy of the system is a filter for a budget, not a witness for the person's judgment in this slot. Averaging is how the live signal disappears.

3. **Checks must be independent.** Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* A check that reuses the system's own explanation or confidence is the system talking twice. A different instrument, a person with separate experience, or a held-out case is what makes agreement mean something.

4. **The channel decays, not the ground.** Fig 10 :24: *"the ground does not decay, the channel does"*; Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*. Overtrust after long flawless operation and undertrust after one salient failure are channel states. Calibration is maintained by refreshing readings across task changes and by declaring where readings were pooled or saturated. A room of agreeing users is not a new anchor: Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

5. **Trust is habitat-relative.** Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."* Benchmark trust does not transfer to deployment without measuring the round-trip gap between the two habitats.

6. **Vocabulary and objective come before any display.** Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* People are offered confidence scores, rationales and citations without terms for what those readings discriminate. The objective is correct reliance, not agreement. Transparency is a budget input until an instrument makes it checkable.

7. **The threshold is a declared gap.** Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. The framework returns the conditions a calibrated judgment must satisfy. It does not return a universal number, a specific interface, or the name of the one instrument that would settle it.

## 3. What it explicitly does not say

- Not that a confidence display, an explanation, or a citation calibrates anyone by itself.
- Not that transparency is the answer. The world evidence says disclosure is often inert; the figures say filters are not witnesses.
- Not that high model accuracy produces well-calibrated human trust. The review literature finds the opposite can happen.
- Not that user agreement or expert endorsement is evidence. Agreement is a convention unless the frames are independent.
- Not a universal trust threshold. That slot stays open as a `gap`.
- Not grounded. No human-subject measurement was taken and no instrument was built in this folder.

## 4. What would settle it - the ground

A source-discriminating instrument, not a further argument. A reading that can tell fluent-but-wrong from fluent-and-right in the same slot would name what the slot needs. Concretely:

- **Anchor-type test:** a controlled task switch from a person-facing question to a code-correctness question. If the same deference rule is correct in both, the anchor-type finding fails.
- **Per-slot test:** inject one live failure into an otherwise accurate system. If a global accuracy score preserves the detection of that slot, F2 fails.
- **Independence test:** compare a check that reuses the system's explanation with one that uses a held-out source. If the reused check corroborates independently, F3 fails.
- **Channel test:** refresh readings across a documented habitat change. If calibration holds with no refresh, F4 fails.
- **Habitat test:** improve the model in isolation with deployment contact unchanged. If real-world calibration improves, F5 fails.
- **Instrument test:** find a reading that discriminates the sources behind an identical fluent output. Until then the threshold remains `gap`.

## 5. The honest stop

**Unreached, not unreachable.** The figures give the conditions, not the number. The six-term substrate is a visible guess at compression axes, not nature's own list; declaring it makes the choice visible, not neutral. Here the position is weaker still: we are not claiming a substrate derivation of trust, only that the anchor, residual, independence, channel and habitat rules constrain any answer. The stop is recorded so a later reader can locate the error. *"Indiscernibility is not identity."*

## 6. One-paragraph version for outreach

> The Tether does not give a number for when to trust an AI system. It gives the shape a well-calibrated judgment must have. First decide what the question is about: for a person-facing question the person is the anchor, and for a code-correctness question a measurement is the anchor while human judgment becomes an instrument that can be wrong on axes it does not measure. Then track the residual per decision slot, because an average hides the one live failure that matters. Verify with a check that does not reuse the system's own output, refresh the reading when the task or habitat changes, and build the vocabulary and the objective before adding more displays. What it refuses is a universal trust threshold and the claim that a confidence score or an explanation settles the matter. Those are declared gaps, owed to a better instrument. What it offers is the shape, five written refuters, and the direction of the instrument that would close it.
