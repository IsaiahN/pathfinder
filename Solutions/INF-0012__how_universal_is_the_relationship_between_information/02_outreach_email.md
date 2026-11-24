# Outreach draft - validate the output first, then decide about the theory

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** send only the shape claim and its refuter in stage 1. The numeric constant, the finite-time corrections and the quantum cases are deliberately withheld until the reader has recorded a verdict on stage 1.

---

**Subject:** One checkable claim about erasure cost, before any theory

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not
> asking you to read any theory first, and I am not asking you to agree with anything. If the
> output does not survive, there is nothing else to look at.
>
> **The question in effect terms.** The familiar statement is that erasing one bit of
> information costs at least `kT ln2` of heat. The open question is how universal that
> relationship is in real, noisy systems, where protocols are fast, baths are small and finite,
> bits are asymmetric, and quantum coherence is present.
>
> **The output (`specified`, not `grounded`).** A figure-derived scheme says four things, and
> none of them is a new physical constant:
>
> 1. The relationship is a **priced floor**, not an equality. Information discarded and
>    thermodynamic cost are two currencies in different units; the figures say they do not add.
>    So a single number cannot be an identity between bits and joules.
> 2. The relationship is **substrate-relative**. Its derivation needs something to count, a
>    finite region to make the counting terminate, and a direction to spend. Universality holds
>    inside that substrate, not over all possible physical implementations.
> 3. In noise the cost is a **per-slot quantity**. Averaging over many realisations hides which
>    one carried the live residual; the floor is approached in the mean in the reversible limit.
> 4. "How universal" is a **union of overlapping conditions**, not one hard question, so it must
>    be unbundled before it is searched. A single universality score is the aggregation error.
>
> What the scheme explicitly does **not** say: it does not supply `kT ln2` from the figures, it
> does not predict a finite-time correction formula, it does not settle the quantum-coherence
> case, and it does not claim a final or unique theory. Those are `gap` for the framework and
> belong to experiment, not to a derivation.
>
> **What would refute the output (written before this message):**
> 1. a symmetric bit erased quasi-statically in a thermal bath, reproducibly measured below the
>    stated floor on average;
> 2. the relationship demonstrated where there is nothing to count, no finite region, and no
>    direction to spend;
> 3. per-realisation residuals shown to be preserved by averaging rather than hidden;
> 4. the overlapping conditions shown to be independent, so the question is a partition.
>
> If any one holds, I will retract the claim. A one-line "this fails because..." is more useful
> to me than agreement. If you would rather not engage, no reply is needed.
>
> **Please record your verdict on the four points above before reading further.**
>
> **If it survives, and only then:** here are the sources. The figures, not my summary, are the
> authority.
> - Local figure text extract with line numbers (the authority for every quote above):
>   `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`
> - The eight-step loop: `FRAMEWORK/figures/THE_FORMULA.md`
> - Expert packet with verbatim lines and a 20-minute check: `08_expert_verification_packet.md`
>
> **If you want to reuse the method:** the formula is in the figures link. Run it on a problem
> you know well and can check against a ground. Write down what would refute your result
> *before* you run it, and state whether your output is general, specified or grounded. A
> reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* A reader ranges against their own ground, not against my framework. |
| Ask for a failure, not agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Refuter before the conclusion | The seat rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode on every substantive claim | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| Numeric constant withheld as `gap` | F1 in `01_figure_grounded_audit.md`; the figures return a shape, not a name. |
| Union unbundled into four points | Fig 9 :54 - *"when the split lands on a union rather than a partition, unbundle before you search again."* |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Links only after the verdict | Fig 10 :42 - *"A verifier that can reconstruct the claim cannot verify it."* |
| Offer the formula as a method | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask users to write their own refuter | `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question. |

## Legal and practical note

Public opt-in venues only. One-to-one contact. No scraped personal emails, no automation, no misleading subject lines. An opt-out line is included ("if you would rather not engage, no reply is needed"). GDPR and CAN-SPAM style rules apply to unsolicited outreach in many jurisdictions, which is the practical reason, on top of the structural one, for using public submission channels.
