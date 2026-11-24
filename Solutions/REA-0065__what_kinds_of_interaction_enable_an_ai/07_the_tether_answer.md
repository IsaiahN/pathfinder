# The Tether's answer: what kinds of interaction enable learning a person's perspective

**Mode: `specified` on the shape, `general` on the barrier rules, `gap` on ranking named protocols. Not `grounded`.** Simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading. No AI system was tested.

## 1. The residual it answers

The question is not "how much does the model know about people." It is: for each person `s`, does `R_s = |Γ(b,a) − o′|` fall, where `Γ(b,a)` is the system's prediction of what that person will expect or do in situation `a`, and `o′` is what they actually do? Fig 1 :19: "The residual is indexed by object slot, not aggregated." The word *different* is load-bearing; averaging people deletes the signal the question asks about.

Two frames are in contact: the system and a person, each a bounded system with a library. A person's expectation is a term in their closure. The system cannot derive it by searching its own library (Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."). So the question is a contact question, not a storage question.

## 2. The shape: six conditions, kept separate, never averaged

1. **Contact with a differing closure.** The interaction must bring the system into contact with a frame whose closure differs from its own, because the needed term is underivable from the system's library. Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :45: "Two frames together reach what neither reaches alone." A corpus is a weaker source; a live person is a peer frame. **Mode `general` for the barrier, `specified` for AI.**
2. **Per-person attribution.** Each person's prediction must be scored as that person's residual. Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single pooled human-preference score cannot be the quantity. **Mode `specified`.**
3. **An anchor the system cannot move.** Because the question is constitutively about people, human judgment is the legitimate anchor (Fig 2 :37), but "The anchor must not update" (Fig 2 :33). If the person only sees the system's own outputs, the pair converges coherently and nobody notices (Fig 2 :34). Two-way contact builds meaning; an unchanging ground settles accuracy. **Mode `specified`.**
4. **Independence between the people, not headcount.** Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence." Fig 8 :49: "Two frames that overlap almost completely are one frame wearing two names." Ten copies of one source are one witness. **Mode `general` for the quantity, `specified` for its application.**
5. **Carried history and the possibility of refusal.** What must travel is the person's history and their weighting of private experience against inherited prior. The Symbols table: "Two frames with identical architecture diverge because their histories and their w diverge." Fig 6 :30: "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." And the interaction must be able to revoke a held generic prediction: Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so"; Fig 12 :140 "A vocabulary that cannot refuse can only accumulate." **Mode `specified`.**
6. **A real, enumerated habitat.** Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." The habitat is enumerated, not composed: actors, conditions, and relations in contact with the residual. **Mode `specified`.**

These compose as a molecule, not a list: a conjunction with an ordered interior of act, respond, compare, refuse (see `06_isomers_and_order.md`). Conditions 1 and 3 form a union of two overlapping compounds; a single lever clears only one region (Fig 9 :54).

## 3. What it explicitly does not say

- **Not a named protocol.** No figure line ranks dialogue, demonstration, correction, imitation, shared attention, or role-play as the winner. Fig 9 :32: "you get a kind of thing, never the answer itself." Protocol ranking is a declared `gap`.
- **Not a claim that text-only systems cannot answer theory-of-mind questions.** Kosinski 2024 reports strong false-belief task performance from text-trained models. That reading cannot discriminate source; it is a shadow requiring a source-discriminating instrument, not a refutation of the shape (audit §4).
- **Not empathy, consciousness, or a mental module.** The question is about contact and per-slot residuals, not about what an internal state is called.
- **Not "more parameters" or "more data."** Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."
- **Not a ground result.** No interaction protocol was run, no per-person residual was measured, and no protocol was ranked. Everything here is a candidate.

## 4. What would settle it, the ground

Four instruments would move parts of this from `specified` to `grounded`:

1. **A source-discriminating test.** Present the same held-out person in a novel situation and ask whether the system's successful prediction came from an imported, provenanced person-model or from a statistical trace. *The Hard Problem is About Source*: a reading "cannot comment on the source"; it was the spectrometer that resolved the analogue. Fig 6 :29 distinguishes inward sharpening from outward import; this test is the outward instrument.
2. **Attribution ablation.** Compare per-person residuals under separately attributed scoring versus one pooled reward. If pooling does not degrade `R_s`, condition 2 falls.
3. **Independence manipulation.** Compare people with disjoint evidence against people sharing one source. If independence has no effect on held-out `R_s`, condition 4 falls. Lorenz et al. 2011 is an external hint at the expected direction, not the ground for this system.
4. **Habitat transfer.** Test the same people in a substituted synthetic habitat and in the real enumerated one. If accuracy transfers with no loss, condition 6 falls.

Standing falsifiers are the six in `01_figure_grounded_audit.md` §5, written before this conclusion.

## 5. The honest stop

**Unreached, not unreachable.** The six conditions are the shape any candidate interaction must have. Which named protocol best realises them is out of reach with the instruments held here, and Fig 8 :39 says a search that finds nothing "is never a proof of absence." The record stops at the limit of what can be distinguished and keeps the lineage: the residual, the census, the verbatim lines, the conflict, the refuters. Fig 13 :134: "Unreachable is a verdict here, not a silence," and "Indiscernibility is not identity" (figures README). No seventh term was minted to fill the slot.

## 6. One-paragraph version for outreach

> The Tether does not name a winning interaction protocol. It gives the shape that any such interaction must have. To learn what a *different* person expects, a system must reach a frame whose closure differs from its own, because its own closed library cannot derive another person's terms; it must score that person's prediction separately, since averaging slots removes the only signal that says where to look; it must check against a response the system did not author, because an anchor that updates produces coherent drift; it must seek people with separate evidence, since overlapping frames are one frame wearing two names; it must carry that person's history in effect terms and be able to refuse its own generic guess when the person contradicts it; and it must do this in the real habitat, because a substituted test harness proves wiring and never capability. A text-only theory-of-mind benchmark score is a reading that cannot comment on its source, so it does not settle the shape either way. The framework returns a shape, not a name, and records what would refute it.
