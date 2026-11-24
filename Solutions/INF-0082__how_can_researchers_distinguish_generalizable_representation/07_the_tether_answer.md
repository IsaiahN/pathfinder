# The Tether's answer on generalizable versus training-only representations

**Mode: `specified` on the separator and on each per-domain verdict, `general` on the structural shape, `gap` on the universal recipe. Not `grounded`.** Simulated derivation checked for internal consistency against the figures, not a ground reading (`05_what_shape_means.md` section 7).

## 1. The residual it answers

A low training residual is consistent with both a reapplicable method and a good memory of one occasion. The residual is the gap between prediction and observation at a slot in a habitat the representation was not fitted on. Arity: dyadic per slot plus a second-order relation across habitats. Symmetry: aggregate accuracy is symmetric, while generalizing is ordered (train then probe). Scale: frame-internal fit versus cross-habitat contact, with `R_T` as the error signal.

The question is a **union compound** of four conditions (Fig 9 :55), not a two-item partition. One lever leaves the intersections standing.

## 2. The shape: a seven-part separator

1. **Index the residual per slot, not by a global score.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single test accuracy is a budget filter, not a witness (Fig 9 :60).
2. **Use a ground that does not update on the model's own outputs.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." A held-out split from the same corpus is a mirror (Fig 2 :35).
3. **Distinguish a method from a recording.** Fig 4 :22: "Only methods cross up. Only head starts come down." Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Fig 4 :26: "and cannot produce a new one." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."
4. **Check bonds, not just ingredients.** Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Probe by holding the atom set fixed and changing the bond (Fig 12 :117: "isomer. Same atoms, different bond, different substance.").
5. **Check reach, not library size.** Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Ask Formula step 7 in order: SEARCHED, INWARD, OUTWARD. Never read INWARD against OUTWARD.
6. **Buy evaluator independence in proportion to the cost of error.** Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Shared-pool agreement is disqualifying for a verdict (Fig 2 :40).
7. **Require the lineage.** Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". Fig 12 :130: "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."

Each part is falsifiable separately. The six refuters are in `01` section 5 and are repeated in `08_expert_verification_packet.md`.

## 3. Verdicts per domain, kept separate and never averaged

| domain | verdict | mode | status |
|---|---|---|---|
| **D1, learning frame** | Training fit and compression achieved are frame-internal and cannot witness generality. The one-occasion explanation fails the MDL bargain. Reach is bounded by closure. | `specified` | `triangulated` (Fig 1, Fig 2, Fig 5, Fig 6, Fig 8) |
| **D2, new habitat and ground** | Generalization is contact with a non-updating ground in a substituted habitat, read per slot, by a carried method rather than a replay. | `specified` | `triangulated` (Fig 4, Fig 11, Fig 12) |
| **D3, evaluation frame** | Agreement from a shared evidence pool is a convention. Independent instruments and a blinded swap can make agreement mean something. | `specified` | `triangulated` (Fig 2, Fig 7, plus cross-validation literature) |
| **D4, provenance** | Contents cannot separate convergent derivation from adopted import; the lineage is part of the term. | `specified` | `triangulated` (Fig 8, Fig 12) |
| **F9, universal recipe** | No figure line names an architecture, sample count, threshold, or the missing primitive. | `general` shape, `gap` for the name | `gap`, unreached, not silence |

## 4. What it explicitly does not say

- Not a universal recipe. No figure line returns "use method X with N samples." That is the F9 gap.
- Not that a held-out accuracy score is worthless. It is a legitimate ground reading when the anchor does not update and the closures differ; otherwise it is a mirror.
- Not that every perfect fit is memorization. Benign overfitting is a recorded conflict (S2 in `01`); the refusal is of a term whose *statement* is the occasion itself, not of every interpolating model.
- Not that a new atom is required. Most generalization is a new arrangement over held atoms (Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists.").
- Not that any named architecture is the answer. Naming a held binding is provenance, not a derivation; naming a missing primitive is forbidden (Fig 13 :135).
- Not `grounded`. No probe was run.

## 5. What would settle it

A source-discriminating probe, not another accuracy comparison. From *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; the spectrometer, not an argument, resolved it. Here:

1. **Isomer probe:** hold the atom set fixed, re-bond or reorder, read per-slot residual on a habitat whose ground does not update (Fig 12 :117).
2. **Method-versus-recording test:** require the lineage to show atoms, bonds and source gates; run the same probe with the record removed and compare (Fig 8 :51).
3. **Independence test:** compare a shared-corpus evaluation with a blinded swapped evaluation; the figure verdict predicts the former cannot see external-validity failures (Fig 2 :40).
4. **Round trip:** carry the method up, bring it down into the new habitat and measure `R_T` rather than assuming it is zero (Fig 4 :30).
5. **Standing refuters:** any of the six in `01` section 5 firing.

## 6. The honest stop

**Unreached, not unreachable.** Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 8 :39: "So a search that finds nothing is never a proof of absence." The seven-part shape is stated, its refuters are written down, and the stop is recorded with its lineage. Indiscernibility is not identity: two representations with the same accuracy reading are not thereby the same representation.

## 7. One-paragraph version for outreach

> The Tether does not name a universal generalization trick and does not claim to settle this question. It says the residual must be read per slot, not as one accuracy score; that the held reading must come from a ground that does not update on the model's own outputs; that the thing that crosses to a new habitat must be a reapplicable method with its bonds recorded, not a recording of one occasion; that a probe should hold the ingredients fixed and change the arrangement, because same atoms under a different bond are a different substance; that fitting inside a closed reach cannot add an atom, so a missing atom must be imported with a source gate and a shadow test; that agreement between frames sharing one corpus is a convention, not a verdict; and that the lineage, not the weights, is what separates convergent derivation from adopted import. What it offers is the shape any checkable separator must have, six refuters written in advance, and the instruments that would close it. The universal recipe stays open until the ground settles it.
