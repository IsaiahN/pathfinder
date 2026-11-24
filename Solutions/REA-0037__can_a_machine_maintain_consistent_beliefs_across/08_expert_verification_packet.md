# Expert verification packet - the Tether on belief consistency

**What this is:** a claim in a form a researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the per-domain claims, `general` on the structural split, `gap` on a numerical threshold. Not `grounded`.** Simulated derivation checked for internal consistency against the figures, not a ground reading. No machine was measured.

## 1. The claim, in one paragraph

"Consistent beliefs" names two quantities, not one. Internal coherence is a symmetric relation among held terms and is disqualified as a self-score: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* The meaningful quantity is stable contact with an anchor that does not change because the machine thinks so. Across a long conversation the channel decays, not the ground: *"the ground does not decay, the channel does."* Under changing evidence, accumulation cannot substitute for a refusal, because a refusal is a unary operator and not a subtraction. Where the world moved, a term and its refusal can both be settled and the record cannot decide from inside which case it is. The framework returns this shape and its refuters, not an architecture and not a threshold.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 1, 2 and 12

- **Statement:** internal coherence and ground contact are different relations. Coherence is symmetric (`+`), contact is ordered (`frame ⋛ anchor`), and a coherence score produced by the frame cannot serve as evidence about contact.
- **Source, verbatim:**
  - Fig 1 :24-27 - *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
  - Fig 2 :29 - *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
  - Fig 2 :34 - *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*
  - Fig 12 :112-113 - *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."*
- **Refuter:** show a frame that certifies its own contact using only quantities it produces, where the certification changes the anchor's answer; or show that swapping observation and held belief leaves revision behaviour identical with no anchor consulted.

### C2 - channel-side; checkable against work on knowledge conflicts and continual learning

- **Statement:** a long conversation degrades the channel while the ground stays fixed; agreement between consecutive states is cheap and is not progress; progress per handoff needs both bracket fidelity and independent ground pressure.
- **Source, verbatim:**
  - Fig 10 :24 - *"the ground does not decay, the channel does"*
  - Fig 10 :25-28 - *"stale percepts, dropped transients, saturated metrics, pooled readings the output is not a verdict, it is you have lost touch"*
  - Fig 7 :12-13 - *"same closure, handed along; agreement compounds, evidence does not"*
  - Fig 7 :36 - *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."*
- **What to check:** in real systems, does counter-memory context accumulation move belief without moving the ground? The Xu et al. survey reports belief alteration of 20.7% to 78.2% over multiple dialogue rounds. Does a measured per-turn round trip gap stay zero without re-derivation? Does catastrophic forgetting and its converse, catastrophic remembering, show that retention and flexibility are separate failure modes?
- **Refuter:** a chain of rooms with measured bracket fidelity and independently applied ground pressure that still cannot revise any belief; or a measured per-turn `R_T` of zero without any re-derivation step.

### C3 - revision-side; checkable against the Operators table and the world literature on belief updating

- **Statement:** changing evidence requires a refusal, and a vocabulary with only addition cannot carry a correction. Where the old term and the new evidence were both once grounded, the record alone cannot discriminate two scopes, a ground error, or a changed world.
- **Source, verbatim:**
  - Fig 5 :53 - *"refuted: a term we hold is wrong; a term is owed that says so"*
  - Fig 5 :55 - *"Nothing leaves the library. What falls is the reach."*
  - Fig 6 :47 - *"If a term and its refusal are both settled, the record holds a contradiction. Whether that is two scopes, an error in the ground, or a world that changed is not yet decidable here."*
  - Operators table :58 - *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*
- **What to check:** does the system's "refusal" remove the old term's standing to be composed over, or is it only a new addition competing in a score? Animals in serial reversal learning increase their update rate and lower sensitivity to the old association when the reward reverses (Lukas et al., Peer Community Journal 2024); is there an analogous measured discriminator for a machine?
- **Refuter:** a system with no unary refusal operator that removes a held belief's standing when the ground moves, where the removal is not reducible to a new addition; or a decision procedure inside the record that discriminates two scopes from a changed world without a new ground reading.

## 3. What is explicitly not claimed

- Not that any named model does or does not maintain contact. No architecture is licensed by the shape.
- Not that a larger context, a larger memory or a refined confidence score is sufficient. These can grow the dictionary without writing the grammar (Fig 12 :115).
- Not that coherence is always worthless. It is *"efficient for a convention"* when the product is a shared meaning (Fig 2 :41); it is disqualifying only as a verdict about the world (Fig 2 :40).
- Not a number. No turn count, context length, drift rate or confidence threshold is asserted. That is a declared `gap` (Fig 9 :32, Fig 13 :134).
- Not `grounded`. Nothing in this packet was settled by a measurement.
- Not that the framework resolves its own open item in Fig 6 :47. It records it and stops.

## 4. Provenance

- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim extract with line numbers. Every quoted string above was re-opened there.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`.
- Eight essays by Isaiah N, 2026-08 to 2026-11, mapped in `05_what_shape_means.md`; quotes there carried from the completed exemplar and marked as such, not re-opened this session.
- World sources opened 2026-11-23: Xu et al., EMNLP 2024; SEP Gödel (2025 revision); SEP Coherence Theory of Truth (2025 revision); IBM Think on CAP; Britannica on cognitive dissonance; plus three search-indexed abstracts recorded at reduced weight in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source* (carried in `05`): an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here:

1. Does a high consistency reading come from contact with a non-updating anchor, coherent drift, a saturated metric, or a shared evidence pool? An instrument that discriminates these settles the source.
2. **Handoff test:** measure `R_T` per turn. Is the belief re-derived against the anchor, or is the transcript replayed (Fig 4 :30)?
3. **Refusal test:** when the ground moves, does the held term's standing to be composed over fall, and is the correction carried (Fig 5 :55)?
4. **Per-slot test:** is the residual indexed per belief, with one live slot hiding inside a good global score (Fig 1 :13, :19)?

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :24-27, Fig 2 :29/:34, Fig 5 :53, Fig 7 :36, Fig 10 :24 and Fig 12 :112-113. Seven short passages.
2. Check C1 against their own field: is the coherence-versus-contact distinction real there, or does the field use "consistency" in only one of these senses?
3. Name one instrument that would discriminate genuine contact from coherent drift in the system they know, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on. Check the target venue's authorship and AI policy before submitting any of it; a simulated derivation is not a research result.
