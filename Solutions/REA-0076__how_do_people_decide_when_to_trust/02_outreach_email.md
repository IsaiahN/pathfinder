# Outreach draft - validate the shape first, then decide about the framework

**Use:** one to one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the anchor-type distinction and the per-slot claim in `01_figure_grounded_audit.md` F1 and F2 are intact. If the output does not survive a stage-1 check, there is nothing else to look at.

---

**Subject:** Check one shape about AI trust before you decide whether the framework is worth reading

> Hi [name],
>
> I am working on a narrow question: how do people decide when to trust an AI system, and what makes those judgments well calibrated? I have one specific output I would like you to check against what you already know. I am not asking you to trust the framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** a well-calibrated trust judgment has a shape. It is indexed per decision slot, not averaged into a single accuracy number. It is ranged against a legitimate anchor, which depends on the question: for a person-facing question, human judgment is the right anchor; for a code-correctness question, human judgment is only an instrument and a measurement is the anchor. It uses at least one check that does not draw on the same evidence as the system. It is refreshed when the task or habitat changes, because the ground does not decay but the channel to it does. And it has an objective stated in advance: correct reliance, not agreement.
>
> The framework returns that shape. It does not return a universal trust threshold, a single calibration number, or a specific interface design. I am explicitly leaving the threshold open as a gap.
>
> **What I am not claiming:** that a confidence score, an explanation, or a citation by itself calibrates anyone; that more transparency is the answer; that a room of users saying the system is reliable constitutes evidence; or that better benchmark accuracy transfers to deployment without measuring the gap. Those are filters for a budget, not witnesses for a verdict.
>
> **What would refute the shape:**
> 1. a controlled case where a single global calibration score preserves every live per-slot signal;
> 2. a case where human judgment legitimately settles a code-correctness question with no instrument, or a system's own confidence settles a person-facing question with no person;
> 3. two checks sharing one evidence pool shown to give independent corroboration;
> 4. calibration improved by an intervention that changes only the model in isolation and leaves deployment contact unchanged;
> 5. a universal numeric trust threshold derived from the figures alone.
>
> I wrote these down before sending this. If any one holds, I will narrow or retract the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Canonical figures text with line numbers (local framework extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Figures README, canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`
> - Public FAccT 2027 call for papers, which lists "(In)appropriate reliance and (over)trust in computational systems" as a topic: https://facctconference.org/2027/cfp.html
>
> **If you want to use the machinery:** the formula is in the local figures folder. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it; the framework's own rule is that a loop cannot check the direction of its own question. A reported failure is more useful to me than a reported success.
>
> [your name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Shape first, framework second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Fig 2 :45 - *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for trust or agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Anchor type before verdict | Fig 2 :36 - *"An anchor is legitimate when the question is constitutively about it."* |
| Pre-registered refuter | local Seat Map :287 - a falsifier written before the run is a design instrument, not only an honesty device. |
| Mode stated on every claim | local `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| Threshold withheld as a gap | Fig 9 :32 - *"you get a kind of thing, never the answer itself"* |
| Transparency described as a filter, not a witness | Fig 9 :60 - *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* |
| Independence, not agreement, is the ask | Fig 2 :40 - *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* |
| No "bombshell", no "true answer", no "trust me" | local Seat Map output-layer failure genus: an unmeasured quantity is a specification, not a verdict. |
| Offer the formula as a method to reuse | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |

**One-to-one rule.** Send to one person at a time through an opt-in or public institutional channel. Do not send the same packet to a list, and do not record later agreement as corroboration (Fig 2 :40). A reply is a conversation, not a witness.
