# The Tether's answer: what kinds of training produce representations that generalize beyond familiar patterns?

**Mode: `specified` on the three per-domain conditions, `general` on the structural shape, `gap` on the named algorithm. Not `grounded`.** Simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The residual it answers

A learner can drive error on familiar situations to near zero while a live residual remains on one novel situation slot. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*; Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* The question asks which training regimes leave `R` small on the novel slot, where the slot is measured against something that does not move when the model changes. "Generalize beyond familiar patterns" is a threshold comparison, not a property of the vector considered alone.

## 2. The shape

1. **Capability is agent and habitat, not agent alone.** Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* The first condition on a generalizing regime is that it changes contact: what conditions the learner meets, and how far the contact cascade reaches. Fig 11 :43: *"The habitat is enumerated, never composed."* This is where the world evidence is strongest: pigeons trained with broader initial exemplar sets transferred to novel pictures (Nakamura et al. 2009), students trained with examples from varied contexts transferred better than those trained in one context (Mondoux et al. 2020).

2. **Reach must grow, not just the library.** Fig 4 :23: *"upward: a method that can be reapplied. Never the recording of a particular success."* THE_FORMULA step 8: *"a library that grows is not a reach that grows."* A regime that stores more patterns without carrying a re-applicable generator produces a system that *"repeats a past success and cannot produce a new one"* (Fig 4 :26). In the field's own vocabulary, this is the difference between recovering explanatory factors of variation and fitting surface regularities (Bengio et al. 2013; Geirhos et al. 2020). Rule-variant reasoning after prototype learning promotes far transfer where worked examples alone do not (Zhang et al. 2023), which is the same distinction in an education setting.

3. **The wall moves only on contact with a differing closure.** Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :45: *"Two frames together reach what neither reaches alone."* Many correlated examples are one frame wearing many names (Fig 8 :48). So the habitat condition is not "more examples"; it is differing structure, with a provenance record (source gate, shadow test) for what crosses. IRM (Arjovsky et al. 2019) and invariant causal prediction (Peters et al. 2016) are two world formulations of this condition from adjacent pools. IRM's own caveat (Kamath et al. 2021) shows why multiplicity without diversity is not enough.

4. **The ground must not update, and the score must stay per slot.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A benchmark a model trained on is a frame, not an anchor. Coverage and compression are frame-internal and disqualified as a metric (Fig 1 :27).

5. **The representation is a molecule, not an ingredient list.** Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :117: *"Same atoms, different bond, different substance."* Transfer is carried by the arrangement, which the vector's magnitude list does not record. This is why inspecting the representation cannot by itself tell you whether you have a generator or a recording.

6. **A vocabulary that cannot refuse can only accumulate.** Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."* Shortcut learning persists partly because the learner has no term that withdraws a regularity that worked in training and fails outside it. The reach can fall when a refusal is added, even though the record only grows (Fig 6 :41-43).

## 3. What it explicitly does not say

- Not a ranking of training methods. No figure line selects contrastive over self-supervised, or augmentation over meta-learning, or returns an OOD threshold number. That is a declared `gap` (Fig 9 :32), not a hidden answer.
- Not "more data and bigger models." Scale is a filter for the budget, never a witness for the verdict (Fig 9 :60). It can help inside a closure; it cannot add an atom (Fig 8 :32).
- Not "invariant risk minimization is the answer." IRM is a provenanced import from causal inference with a diversity requirement and a published failure case. It is a candidate binding onto condition 3, not a verdict.
- Not "the learned vector is the cause of transfer." The vector is a reading; its source is not recoverable from it (Fig 11 :129). What is owed is an instrument and a lineage.
- Not `grounded`. No training run, no OOD measurement, no ground reading exists in this folder.

## 4. What would settle it - the ground

A source-discriminating experiment, not a further argument. Three concrete instruments:

1. **Second-use test.** Train two systems with the same ingredient list but different arrangement (generator-preserving versus recording-preserving objective). Test both on a novel situation measured by a ground neither trained on. If transfer is identical, the bond claim (condition 5) fails.
2. **Contact substitution.** Hold the agent architecture fixed and change only the habitat to one with genuinely differing closures, with provenance for what crosses. If the per-slot OOD residual does not move, the habitat claim (condition 1) fails. Nakamura et al.'s carryover result and Mondoux et al.'s varied-context result are existing, low-overlap instances of this test.
3. **Per-slot anchor check.** Re-run the evaluation with a benchmark that was inside training contact, then with a held-out intervention-based probe, and compare per-slot residuals. If the averaged score reproduces the per-slot verdict and the trained-on benchmark agrees with the held-out probe, the ground condition (4) is not doing the work claimed.

Standing refuters from `01` section 4 apply. Any one firing retracts the corresponding condition.

## 5. The honest stop

**Unreached, not unreachable.** The figures fix the shape of a generalizing regime and the kind of instrument that would close it. They do not name a method. The canonical limit is *"a shape, not a name"*, and the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* Indiscernibility is not identity. The boundary between "familiar" and "beyond familiar" is a comparison whose threshold needs an instrument; until one is supplied, the answer stops there and records the gap.

## 6. One-paragraph version for outreach

> The Tether does not name a winning training algorithm. It says that generalization beyond familiar patterns is a union of three conditions, not a single recipe: the training must leave a re-applicable generator so the reachable space grows rather than the stored library; the habitat must bring the learner into contact with conditions whose structure genuinely differs, with a provenance record for what crosses; and the evaluation ground must not update on the model and must be read per situation, not as one averaged score. The representation that results is a molecule, not an ingredient list, so two systems with the same features but different arrangement are different substances with different transfer behaviour. Which named method satisfies the three conditions is a declared open item; the figures return a shape, not a name. What is offered is the shape, four failure conditions written in advance, and the instruments that would close the gap. The answer stops there until a ground settles it.
