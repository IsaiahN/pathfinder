# The Tether's answer: interaction versus pre-collected data

**Mode: `specified` on the domain verdicts, `general` on the structural shape, not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures, not a ground reading.

## 1. The residual it answers

A system must spend a learning budget either by acting and observing or by training on a corpus collected earlier. The question asks whether the first can be as efficient as the second. Stated as an effect: can one number rank two regimes that price different things and stay in contact with different grounds?

Fig 9 :54-55: **"And when the split lands on a union rather than a partition, unbundle before you search again."** The question is a union compound with at least two conditions (currency and habitat), so it is split before it is searched. Verdicts are kept per domain and never averaged.

## 2. One loop per domain

**D1, the learning loop.** Actors: Γ, belief, weighting, action, observation, per-slot residual. Currency: residual reduction per slot. Anchor: the ground. Fig 4 :19-20: **"The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."** Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Verdict: the loop is invariant; efficiency is not a property of the loop alone. `general`, triangulated (Fig 4 plus Fig 1).

**D2, habitat and contact.** Actors: environment, corpus, instrument, seat. Currency: contact and cascade. Anchor: the ground, which does not update. Fig 11 :39-40: **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** Verdict: interaction is live contact; a stored corpus is a substituted habitat that can prove wiring and cannot by itself prove live capability. `specified`, triangulated. Qualification kept visible: the corpus distribution can itself be the ground when the question is constitutively about that distribution.

**D3, accounting and budget.** Actors: bits and actions. Currency: two prices in different units. Anchor: ground settlement, not agreement. Fig 12 :125-126: **"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."** Fig 12 :126-127: **"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."** Verdict: no single efficiency ratio is well typed until one currency, one slot and one habitat are declared. `specified`, single-source for the non-additivity claim (Fig 12), triangulated with Fig 9 :60 for the filter-versus-witness rule.

**D4, channel freshness.** Actors: live percepts, stored percepts, the channel. Currency: freshness of contact. Anchor: the ground. Fig 10 :24: **"the ground does not decay, the channel does"**. Verdict: a corpus is a channel, not a ground. Offline failure is reported as lost touch rather than wrong answer. `general`, triangulated (Fig 10 plus Fig 6 :32 on instruments improved from worse instruments).

## 3. The shape of a valid comparison

A valid efficiency claim must have: a per-slot residual (Fig 1 :19), a declared currency (Fig 12 :125-127), a named habitat (Fig 11 :66), a ground that does not update on the system's own report (Fig 2 :29), a stated objective before planning (Fig 3 :22-23), and a refuter written before the run (Seat Map :287). Within one currency and one habitat a comparison is licensed. Across currencies it is a type error.

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** Sample counts, wall-clock time and benchmark rank are budget filters. They decide what gets tried first; they do not decide which regime is right.

Fig 5 :48: **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."** A corpus-trained system cannot score itself; a live system's curiosity does not guarantee a result either.

## 4. What it explicitly does not say

- Not that interaction always wins. Interaction can manufacture a probe (Fig 5 :46) only where something is already returning a residual (Fig 6 :34-35).
- Not that offline learning is useless. It is a legitimate habitat when the ground is the distribution the corpus carries.
- Not that sample count is a single neutral currency. It packs bits and actions into one accounting.
- Not that the regimes are isomers. Fig 12 :117 defines an isomer by a different bond; live versus stored is a substituted habitat (Fig 11 :66), and provenance is not one of the seven bonds. The weaker functional-group reading stands (see `06_isomers_and_order.md`).
- Not `grounded`. No measurement here settles `left(R,φ)` for either regime.

## 5. What would settle it - the ground

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: a reading cannot comment on its source; the spectrometer, not an argument, resolved the green-light case. Here:

1. **Currency Test:** price both regimes in one declared unit at the same slot and habitat. Does one dominate at every slot? If yes, the single-number `gap` closes.
2. **Contact Test:** hold contact fixed and vary only the habitat. Does capability move? If not, the agent-and-habitat verdict is narrowed.
3. **Distributional Shift Test:** query states outside the corpus. Does the corpus-trained policy's reading still track the ground? Offline RL literature says this is where the failure lives.
4. **Channel Test:** age the stored percepts. At what point does the output become "you have lost touch" (Fig 10 :27-28) rather than a verdict?
5. **Standing falsifiers:** the five in `01_figure_grounded_audit.md` §4, written before this conclusion.

## 6. The honest stop

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 13 :134: **"Unreachable is a verdict here, not a silence."** Fig 9 :32: **"you get a kind of thing, never the answer itself"**

The single ratio is a `gap` of the unreachable kind, not because nobody searched hard enough but because the operands are in different units. What is returned is a shape, a set of per-domain verdicts and a refuter. Importing a number against this limit would add an atom that was not needed, and Fig 6 :24 prices a wrong atom above starting from primitives. The lineage is recorded so the stop is checkable.

## 7. One-paragraph version for outreach

> The Tether does not say that interaction beats stored data, or that stored data is useless. It says the comparison as posed is mistyped: bits and actions are two currencies that do not add, so a single efficiency ratio compares quantities in different units. The learning loop is the same kernel in both regimes; what changes is the habitat and the channel. Capability belongs to agent and habitat, so a stored corpus is a substituted habitat that can prove wiring and cannot by itself prove capability in the live world, while the ground does not decay even though the channel does. The framework returns a shape, not a name: a per-slot residual reduction, priced in one declared currency, against a ground that does not update on the system's own report, with the habitat named and failures written down before the run. Within one currency and one habitat, comparison is licensed. Across currencies, the answer is a `gap` reported as a verdict, not a silence and not an invented number.
