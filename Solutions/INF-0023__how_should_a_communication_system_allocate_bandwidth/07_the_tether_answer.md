# The Tether's answer on bandwidth allocation

**Mode: `general` on the unbundling, `specified` on the shape, `gap` on the numeric split. Not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A design must arrange a finite channel resource and a finite power budget so that a receiver gets a message that is correct, timely, still correct when the channel misbehaves, and cheap to produce. The residual is per message and per channel state, not a fleet average. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* The question names four goods, but they overlap: accuracy and robustness are both correctness claims, speed and energy are coupled. So the residual is a union compound with its own loop, not one hard problem (Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*).

## 2. The shape

1. **Unbundle before allocating.** The four goods are a union of overlapping conditions. Split them, bind each as an ordinary term that can accrue a residual, and only then search. Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*
2. **Set floors, not shares.** Accuracy, robustness, latency and energy become comparison bonds, thresholds the design must clear. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A weighted objective is a filter presented as a verdict; it can pass while a live slot is failing.
3. **Measure per slot.** Keep the residual indexed by message and channel state. Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A settled per-slot result becomes an atom for the session level (Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."*), so the average destroys the input to the next composition.
4. **Buy independence, not copies.** Robustness is independence between low-overlap failure paths, purchased in proportion to the cost of being wrong. Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Repetition over one fading path is one frame wearing two names.
5. **Keep the two currencies apart.** Bits price the description; joules and seconds price the actions spent finding out whether it holds. Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it."* Report two accounts, not one score.
6. **The numeric split is a `gap`.** No channel law, noise statistic, power ceiling, latency deadline or cost of being wrong came with the question. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. The three distinct searches are SEARCHED (the frontier is already in the library, use rate distortion and Shannon-Hartley), INWARD (measure this channel and this hardware) and OUTWARD (import the cost of being wrong from the application). Importing a number before the cost axis exists adds an atom that was not needed (Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*).

Accuracy and robustness stand to each other as isomers over the shared atoms of signal, code, channel and receiver when robustness adds no new physical path. When it does add one, for example disjoint paths or cross-interleaving, they are functional-group relatives instead. That distinction is checkable, not assumed (Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*).

## 3. What it explicitly does not say

- Not a percentage split. No subspace of the four goods has been measured or settled.
- Not a new coding theorem. Rate distortion, Shannon-Hartley, multiple description coding and interleaved burst codes already exist; this answer imports none of them as a new atom.
- Not that the four goods are a partition. They are a union, and the overlap is where the hard cases sit.
- Not that a committee can settle the split. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- Not that repetition is useless. It is useless only when the copies share the failure mode that matters. The ground decides that.
- Not grounded. Nothing here is asserted as settled by a measurement.

## 4. What would settle it, the ground

A measurement at the receiver, not a further argument. The ground is *"whatever settles the question and does not change its answer because of what any frame thinks"* (Fig 2 :29). Concretely:

- **Per-slot error and latency distributions** under each stated channel state, including burst states, not a fleet average.
- **Joules per delivered correct bit** at the measured operating point, including finite-time costs.
- **Failure-cost axis** imported from the application: what a late or wrong message costs in that system. This is the OUTWARD import, with a source gate.
- **Isomer test:** does the robustness design add a physical atom absent from the accuracy design? If yes, the isomer claim is refused and the functional-group claim stands.
- **Standing falsifiers** from `01` §3: a single anchor for all four goods, an averaged metric that identifies the failing slot, repetition that stays independent under the actual failure mode, or a weighted objective that guarantees every floor.

## 5. The honest stop

**Unreached, not unreachable.** *They're Scanning Books* warns that *"Declaring the primitives does not make them neutral. It makes the choice visible."* The four goods are the questioner's chosen axes, not nature's list. The answer stops at the limit of what can be specified without a channel model and a failure cost, and records the lineage so the stop is checkable. *"Indiscernibility is not identity"* (*How Intelligence Actually Works*): a frontier that fits the measured channel states is still a projection until the unmeasured states are tested.

## 6. One-paragraph version for outreach

> The Tether does not give a percentage split. It says the question is a bundle of overlapping conditions, not four shares of one budget: accuracy and robustness are both correctness claims, speed is a rate and energy is an expenditure, so two are bond properties and two are different currencies. Unbundle them, turn each into a floor an ordinary term can fail, measure the miss per message and per channel state rather than as a fleet average, keep the bits account and the actions account separate, and buy robustness as independence between low-overlap failure paths in proportion to what a failure costs the application. The numeric split stays open until a channel model and a cost of being wrong are imported. What the answer offers is the shape any allocation must have, six refuters written in advance, and the measurements that would close it.
