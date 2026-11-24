# Outreach draft: check one output before you decide about the theory

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the three sub-claims in `08_expert_verification_packet.md` have been checked against a real ground by someone other than this derivation. The stage-1 output must survive or the two-stage offer collapses on contact.

---

**Subject:** Check one output about model uncertainty before you decide whether the framing is worth reading

> Hi [name],
>
> I have one specific output I would like you to check against your own work. I am not asking you to read a framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`general` shape, `specified` when applied to current models, not `grounded`):** a model's own uncertainty score cannot establish that the score is reliable, because a frame cannot score itself with a quantity it also produces. The figure I am citing says exactly that: "They are frame-internal. A frame cannot score itself with a quantity it also produces." (Fig 1 :27). A second, independent figure says "Its own output is never a measure of success." (Fig 5 :48).
>
> The question I am addressing is "Can a model reliably communicate uncertainty about unfamiliar inputs, or does it mainly reflect the limits of its training and evaluation?" I find that the question bundles at least two conditions that do not shrink together: calibration on familiar inputs, and detection of unfamiliar ones. A model can be good at one and fail at the other. So I do not average them.
>
> **The shape claim:** reliable uncertainty communication, if it exists, is a refusal that ranges against an anchor outside the training and evaluation pools. It is "this is outside my range, do not compose over my output as if it were settled," not a precise probability the model scores itself. A model inside its own closure cannot tell "I have not seen this" from "I cannot represent this" (Fig 6 :27), so a low confidence flag reports the indistinguishability, not which case holds.
>
> **What I am not claiming:** that no model ever signals anything useful. That would be a claim this derivation cannot make, because "a search that finds nothing is never a proof of absence" (Fig 8 :39). I am claiming that the reliability horn is not established by a score the model produces and a benchmark drawn from the same pool that trained it.
>
> **What would refute the shape claim, written before this message:**
> 1. an experiment where the uncertainty signal tracks ground-truth error on inputs provably disjoint from training and evaluation, stable across two or more independent model families;
> 2. a demonstration that a reported confidence on a novel input was settled by the ground, not by a convention;
> 3. a re-census showing the two conditions form a partition with a decidable internal boundary.
>
> If any holds, I will narrow or withdraw the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Local verbatim figure text with line numbers: `FRAMEWORK/reference/03-FIGURES_TEXT.md` in the Project Pathfinder workspace.
> - Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
> - The empirical backdrop on calibration and shift: Guo et al., ICML 2017, https://arxiv.org/abs/1706.04599 ; Ovadia et al., NeurIPS 2019, https://arxiv.org/abs/1906.02530 ; Hendrycks and Gimpel, ICLR 2017, https://arxiv.org/abs/1610.02136 ; Kendall and Gal, NIPS 2017, https://arxiv.org/abs/1703.04977.
> - The human analogue, low overlap: Fleming, Annual Review of Psychology 2024, https://www.annualreviews.org/content/journals/10.1146/annurev-psych-022423-032425.
>
> **If you want to use the machinery:** run the eight-step loop on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it. The framework's own rule is that a loop cannot check the direction of its own question, so a reported failure is more useful to me than a reported success.
>
> [your name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 "Bring a characterised residual, never the source." The recipient checks the shape claim without holding the framework's interior. |
| Do not ask for agreement | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | The framework requires a falsifier written before the run; it is a design instrument, not only an honesty device. |
| Mode stated on every claim | `THE_FORMULA.md` mode rule: general, specified, grounded. Accepted means the ground settled it; otherwise candidate. |
| Say what is not claimed | Fig 8 :39 "So a search that finds nothing is never a proof of absence." Refusing the reliability horn is not proving absence. |
| Union split before search | Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again" |
| Shape, not a name | Fig 9 :32 "you get a kind of thing, never the answer itself" and Fig 13 :133 "what it returns is a shape rather than a name". The email never asserts a precise probability as a grounded fact. |
| Links only after stage 1 | Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." A recipient who has absorbed the frame before judging has joined the frame being checked. |
| Offer the formula as a method | Fig 4 :22 "Only methods cross up. Only head starts come down." A generator can be given away without giving away an answer. |
| No bulk send, no personal emails | Fig 2 :42 "Buy independence in proportion to the cost of being wrong." A purchased list of believers is independence spent in advance. |
