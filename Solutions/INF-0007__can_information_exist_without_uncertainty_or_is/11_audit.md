# Second-seat audit of the INF-0007 solution

**Mode: `specified` on per-domain verdicts, `general` on the union shape, not `grounded` on the definitional question.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same canonical README, the same formula, the same world sources, the same folder files. Fig 2 :40 says *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken. This audit cannot settle the claim it audits.

The material audited is the primary domain census and the retraction log in `01_figure_grounded_audit.md`, read together with `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`, `09_watson_answer.md` and `10_source_ledger.csv`.

## Independent domain census

I redid the census from the residual line alone before reading the primary's conclusions, using the WATSON order.

- **R (arity / symmetry / scale).** The residual is the relation between two terms, information and uncertainty. Arity: two, with an ordered relation. Symmetry: asymmetric; the verb "reduces" is directional, so `→` or `⋛` fits and `+` does not. Scale: the measurement exists only inside a frame that assigns a distribution, so the residual is frame-relative. Fig 9 :57 says a case in two conditions is not a harder case of either, which points to a union.
- **Domain 1, communication.** Actors: sender, channel, receiver, distribution. Currency: entropy reduction. Anchor: the code and the mathematical theory of communication. Union member.
- **Domain 2, semantic.** Actors: data, propositions, truth, interpreter. Currency: truth and meaning. Anchor: veridicality and the agent. Union member.
- **Domain 3, algorithmic.** Actors: strings, programs, universal machine. Currency: description length. Anchor: invariance theorem. Union member.
- **Domain 4, physical.** Actors: bits as states, memory, environment. Currency: entropy and heat. Anchor: second law and experiment. Union member.
- **Domain 5, framework.** Actors: Γ, Γ(b,a), o′, R, bonds, ground. Currency: residual and cost. Anchor: the ground. The asking frame.
- **Order:** anchor type first, residual second, unbundle third, figures fourth, ground last.

My census matches the primary's five frames and its union reading. Where the primary derived from Fig 9 and Fig 12, I derived from the asymmetry of the relation and from Fig 2's anchor test. Different starting lines, same boundaries: low overlap between routes inside the framework, so the agreement is weak but not circular at the level of the census. It is still one evidence pool.

## Comparison with primary

I checked each primary finding against the verbatim figure text and the corrected files.

| primary finding | my independent check | agreement |
|---|---|---|
| F1 union / split | Fig 9 :54-57 governs unbundling; the four definitions have different anchors, so a union is correct | agree |
| F2 Fig 12 information is not entropy | the typed-relation reading strains if forced onto a probability spread; re-census gives it its own domain | agree, strain left visible |
| F3 zero-information case exists | Fig 12 :100-101 ties the zero to bond vocabulary, not to uncertainty; the primary correctly refuses the tempting inference | agree |
| F4 uncertainty is frame-internal | Symbols table :38 calls R *"always a slice"*; Fig 1 :27 disqualifies frame-internal self-scoring | agree |
| F5 depth versus absence | Fig 6 :27 says the two look the same from inside the frame | agree |
| F6 information is a derivative | Fig 13 :124 names derivatives that are not a seventh member; information is not among the six | agree |
| F7 definition is a convention | Fig 2 :36 and :41, Fig 10 :46-47 | agree |
| F8 verdicts kept separate | averaging would destroy the union established in F1 | agree |

No disagreement with the primary. Since we share an evidence pool, that agreement carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." checked.
- Fig 9 :57 "a case in two conditions is not a harder case of either" checked. This is a substring of the longer line; the quotation stops at the full stop.
- Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." checked.
- Fig 12 :47 "recipe that names only its ingredients has recorded half of itself." checked as a substring of the wrapped sentence; the leading article sits on the previous line.
- Fig 12 :101 "A bond that costs nothing is a bond that carries nothing, which is the flat case." checked.
- Fig 13 :124 "Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member." checked.
- Symbols table :38 "The gap between prediction and observation. The central quantity: everything the system does is driven by it. It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read." checked across the wrapped lines.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." checked.
- Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." checked.
- Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the leading clause is part of the line.
- Fig 10 :46 "A convention makes no claim about the world; a verdict and an atom both do." checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked; the source line ends with a comma, which the quotation omits.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (`x`):** the figure set, chiefly Fig 9 :54-57 (union), Fig 12 :5 (bond is information), Fig 13 :124 (derivative), Symbols table :38 (residual is a slice).
2. **Abstraction (`T_A`):** the shorthand in `07` and `09`: information and uncertainty belong to different frames; uncertainty is essential only in the entropy frame; information is a bond and a derivative.
3. **Concretisation (`T_E`):** the concrete frame claims: Shannon's H = 0 at certainty; Floridi's well-formed, meaningful, truthful data; program length; Landauer's erasure cost.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **unit** differs across the concretisations (bits as entropy versus description length versus joules per erased bit);
- the **anchor** differs (code, truth, invariance theorem, second law);
- the **typed structure of the bond** is lost in the phrase "difference that makes a difference," which has one bond where the figures have seven.

Conversely, one thing survives cleanly: a certain message carries no new information in the entropy frame, while arrangements, truths and physical states carry information elsewhere. That residue is worth sending. R_T was not measured numerically, because no single ground reading spans all four frames; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "information is a difference that makes a difference" as identical to either Shannon entropy or the figures' bond-information would set R_T to zero and commit the dead-reckoning error Fig 4 :30 names.

## Strains and re-census

- **Fig 12 information versus Shannon information.** The primary initially risked reading Fig 12 :5 as a statement about entropy. Re-census resolves it: Fig 12 governs a typed relation and its price; Shannon entropy governs a probability spread. Different objects. This matches the canonical README's rule that a reading which makes figures contradict one another has misidentified its domain. The strain is dissolved but kept visible in `01` F2.
- **Fig 13 primitives versus derivatives.** No strain after re-census: Fig 13 governs the six primitives; F6 governs what a composition leaves behind. Different objects.
- **"Uncertainty is a residual" versus "uncertainty is entropy."** Not a strain: both are frame-relative and Fig 1 :27 disqualifies frame-internal self-scoring. Recorded, not hidden.
- **World-source overlap.** Three world sources share the framework author or a common evidence pool; the Landauer page is low-overlap. Agreement from the first three is one pool talking, not corroboration. `09` declares this.
- **After re-census: one resolved strain left visible, none hidden.**

## Verdict on the solution

**On internal consistency: the solution passes.** The six files are consistent with the verbatim figure text and with one another. The union verdict is applied rather than asserted; F1 to F7 are carried through to `07`, `08` and `09`; the retraction table is applied rather than ignored; the Fig 12 versus Shannon strain is dissolved by re-census and left visible; `10_source_ledger.csv` lists every source actually read with author, venue, year, accessed date and a recorded quote, and marks the one source whose direct PDF fetch failed as provenance only. `09_watson_answer.md` carries the full WATSON shape with the verdict fields stated. This file records the independent check.

**On corroboration: essentially none across the shared pool.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. The Landauer source is genuinely low-overlap, so it is the one external witness with independent weight, and it supports only D4.

**On the claim: `specified` per domain, `general` on the union, not `grounded` on the definition.** The shape survives: a union of frames, uncertainty essential only in the entropy frame, information present without uncertainty in the semantic, algorithmic and physical frames, information as bond and derivative inside the figures, and the choice of definition declared a convention. Nothing here is settled by this derivation: collapsing the frames by a grounded derivation, identifying bond-information with Shannon uncertainty, exhibiting a frame-independent uncertainty measure, finding a case of zero information in every frame, or measuring which definition is correct would each move a part of the verdict. Prestige or agreement is not such an instrument.

**Recommendation.** Send the packet with its split and five refuters in front of the links, ask which definition the reader is using and what they would count as a failure, and do not pool later agreement as corroboration. Keep the one-sentence answer out of the subject line, because a bare yes or no would decide a convention by framing.
