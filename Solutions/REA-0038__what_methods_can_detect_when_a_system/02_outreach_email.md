# Outreach draft: check one claim about confidence before you decide about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in
`03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the stage-1 claim in
`08_expert_verification_packet.md` has been checked by a human against their own ground. This is an
LLM-assisted simulated derivation. The validator must know that.

---

**Subject:** One claim about confidence calibration, and what would refute it

> Hi [name],
>
> I am working on a narrow question in confidence calibration. I have one specific claim I would
> like you to check against what you already know. I am not asking you to read the theory first,
> and I am not asking you to agree with it. If the claim does not survive, there is nothing else to
> look at.
>
> **The residual (`specified`, not `grounded`):** a model emits one confidence value per case. Two
> very different sources produce the same value: the frequency structure of the corpus it was
> trained on, and the strength of evidence in the present case. I am asking what could tell those
> two apart. An accuracy number will not do it. A confidence value cannot comment on its own
> source, any more than a colour reading can tell you whether the source was one green light or a
> mixture of yellow and blue.
>
> **The stage-1 claim:** no method that inspects the confidence value and the model's own internals
> can make that separation, with no held-out ground and no change to the input distribution. What
> does make it possible is a procedure with four parts: a ground that does not move when the model's
> confidence moves, per-case rather than averaged reporting, a deliberate change of the marginal
> with the per-case evidence held fixed, and a second, low-overlap reading whose gap with the first
> is the actual signal. A provenance record of what data and which frame produced the result is the
> fifth requirement, because two sources that return the same number look identical in the contents
> and only the record separates them.
>
> **What is not claimed:** that confidence is useless, that calibration research is wrong, or that
> there is one universal statistic. Confidence is useful for routing attention. It becomes a defect
> only when it is promoted to evidence that a claim is true. The framework returns the shape of a
> detector, not the name of a detector.
>
> **What would refute the claim, written before this message:**
> 1. a method using only confidence and model internals, no held-out ground and no perturbation,
>    that separates the two sources above chance and replicates on a different corpus;
> 2. a case where confidence tracks per-case ground across a documented covariate shift with the
>    marginal held fixed and no import in the provenance record;
> 3. a demonstration that two low-overlap readings, for example sensitivity versus bias or
>    ground-checked coverage versus softmax score, cannot be estimated separately for the system,
>    so their gap carries no information.
>
> If any of these holds, I will retract the claim. A one-line "this fails because..." is more useful
> to me than agreement. If you would rather not engage, no reply is needed.
>
> **Please answer stage 1 before asking for the source.** I want your verdict on the claim while you
> are still outside the framework. Your later agreement, if any, is not evidence and I will not
> count it as such.
>
> **If it survives, and only then:** I can send three links. The figures are the authority, not my
> summary of them.
>
> **If you want to reuse the method:** write down your own refuter before you run it, and state the
> mode of what you get. A reported failure is more useful to me than a reported success.

[Your name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Claim and refuter first, theory second | Fig 10 :52, *"Bring a characterised residual, never the source."* Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35, *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | A falsifier written before the run is a design instrument, not only an honesty device. |
| Mode stated on the claim | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| Verdict recorded before the source is shown | Fig 10 :42, *"A verifier that can reconstruct the claim cannot verify it."* |
| No promise that confidence is meaningless | Fig 9 :60, *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Confidence is a good filter. |
| No universal statistic claimed | Fig 9 :32, *"you get a kind of thing, never the answer itself."* The README limit: *"a shape, not a name."* |
| Provenance required | Fig 8 :51, *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them..."* |
| No prestige ask | *The Recursive Self-Improvement Trap*, 2026-11-23: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Offer the formula as a method to reuse | Fig 4 :22, *"Only methods cross up. Only head starts come down."* |
| Simulation status declared | The same essay: the truly testable output *"would need to be derived from the real architecture or working the formula yourself."* |

## Stage handling

- **Stage 1:** the claim and the three refuters. Record the recipient's verdict in writing before
  any theory or link is sent. A reply that begins with a failure is the desired outcome.
- **Stage 2, opt-in only:** if the recipient asks for the source, send the three links in
  `04_links_and_distribution.md`. Their earlier stage-1 verdict is kept separate and is never
  pooled as corroboration (Fig 2 :40, *disqualifying for a verdict: agreement about the world is
  worthless when the agreeing frames share an evidence pool*).
- **Stage 3:** offer the formula as a method, with the instruction that each user writes their own
  refuter and states their own mode before running it.
