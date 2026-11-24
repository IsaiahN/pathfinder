# Outreach draft: check one output before you decide about the framework

**Use:** one to one, or as a cover letter attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim and the refuter below survive the recipient's own check. If the output fails, there is nothing else to look at.

**Mode of the claim below: `specified`, not `grounded`.** No detector or platform was measured in this derivation.

---

**Subject:** One checkable claim about misinformation detection, and the failure condition I wrote first

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to read a theory first and I am not asking you to agree with me. If the output does not survive, there is nothing else to look at.
>
> **The question, in effect terms.** A system sees an item that presents as evidence. It must say whether the item tracks what the ground will later settle, or whether it was shaped to produce belief without tracking the ground. The residual is the gap between that label and what the ground returns, measured per claim, not as one batch accuracy number. A famous benchmark finding is that a fact-verification model can score better by *ignoring* its evidence (50.91 percent against 31.87 percent in FEVER). That is what happens when a system is scored with a quantity it also produces.
>
> **The output (`specified`, not `grounded`).** "Reliably distinguish" does not name one capability. It names a union of at least three loops with different anchors:
>
> 1. **Claim classification.** Reach is per-slot against an anchor that does not change when the system's frames push on it. Aggregate accuracy is a budget filter, never a verdict witness.
> 2. **Correction landing.** Whether the corrected claim stops driving belief in the audience that saw it. This has a human anchor for questions about people, and it is not settled by the classifier being right.
> 3. **Self-certification.** A system cannot certify from inside its own closure that it has detected every relevant item. A search that finds nothing is not a proof of absence.
>
> The consequence I would like checked: a detector can be ground-anchored and still not be *reliably* distinguishing in the full sense, because the second and third conditions are separate compounds. Fluency, virality and audience agreement are not evidence of reliability. The figures call this the difference between triangulation and negotiation, and they say a mirror cannot correct you.
>
> **What I am not claiming.** That any named detector, platform or fact-checking organisation is reliable or unreliable. That provenance data decides truth (the C2PA principles themselves refuse that value judgment). That a list of known false claims generates detection of new ones. That aggregate benchmark accuracy says anything about a live slot where a correction did not land. Nothing here is a measurement, so nothing here is `grounded`.
>
> **What would refute it. I wrote these down before sending this.**
> 1. A system whose every slot ranges against a non-updating anchor, sourced readings and low-overlap checkers still fails a held-out live slot above an agreed threshold.
> 2. A source-discriminating instrument is introduced and detection of novel fabrications does not improve.
> 3. A proof from inside a frame's own closure that it has detected every relevant item in its habitat.
> 4. Agreement among frames sharing one evidence pool is shown to carry verdict weight for a claim about the world.
>
> If any one holds, the shape claim is wrong and I will retract it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the sources. The figures are the authority, not my summary of them.
> - Figures with line numbers, local extract: `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Canonical usage rule: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - FEVER dataset paper: https://arxiv.org/abs/1803.05355
> - FEVEROUS bias paper: https://arxiv.org/abs/2106.05707
> - C2PA guiding principles: https://c2pa.org/principles/
>
> **If you want to reuse the method:** the figures link above carries the formula. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. The canonical article warns that outputs produced this way can be "contrived to fit the formula," so a reported failure is more useful to me than a reported success.
>
> Thanks for reading,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52, "Bring a characterised residual, never the source." The recipient checks the claim without holding the framework's interior. |
| Residual stated in effect terms before any frame is named | Fig 9 :27, "describe it before you go looking, or any frame you pick will seem to fit." |
| Do not ask for agreement or trust | Fig 2 :35, "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Refuter before theory | Seat Map, failure genera: "a falsifier written before the run is a design instrument, not only an honesty device." |
| Mode stated on the claim | `THE_FORMULA.md`: "Mode. general · specified · grounded. State which." |
| FEVER result used as a frame-internal-metric example, not as ground | Fig 1 :27, "They are frame-internal. A frame cannot score itself with a quantity it also produces." |
| Audience agreement withheld from the verdict column | Fig 2 :40, "agreement about the world is worthless when the agreeing frames share an evidence pool." |
| Provenance described as a gate, not a verdict | Formula step 5, "A gate is not the ground"; C2PA principles refuse value judgments. |
| No claim about a named institution | Fig 10 :65, a wrong ruling stays wrong however clean its record; no ground reading was taken here. |
| Offer the formula as a method only after stage 1 | Fig 4 :22, "Only methods cross up. Only head starts come down." |
| Ask each user for their own ground and refuter | Formula "Direction": a frame "cannot check the direction of its own question." |

## Two-stage rule

Stage 1 is the residual, the shape and the four refuters. Record the recipient's verdict **before** any framework is shown. Stage 2 is opt-in: send the figure links only if they ask. Later agreement is never pooled as corroboration, because a shared evidence pool is one witness (Fig 2 :40). A reply that names a failure is the useful outcome.
