# Outreach draft: check the claim before you decide about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until a recipient can answer the stage-1 question without seeing the framework. If the claim collapses on contact, there is nothing else to look at.

---

**Subject:** a checkable claim about model self-knowledge, with its refuter written in advance

> Hi [name],
>
> I am working on a narrow question in epistemic uncertainty: can a model tell when it does not know, given that it can produce fluent, well-formed, plausible but unsupported answers? I have one specific output I would like you to check against what you already know. I am not asking you to read any theory first, and I am not asking you to agree with anything. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** the claim is not a single yes or no. It splits by what the model is ranged against.
>
> 1. Inside a single model, on its own confidence: no. A frame cannot certify its own completeness; the relevant theorems (Godel's second, Tarski, Chaitin) are the reason. A confidence score is also a quantity the model itself produces, so by the framework's own rule it cannot score the model. A scalar score additionally hides the one live error slot in an otherwise good answer.
> 2. Ranged against an external ground (held-out data, an experiment, a measurement, a human judgment where the question is about people): yes, as a checkable contact relation. Calibration, selective prediction and conformal prediction are working instances. This is not the model inspecting itself; it is the model being ranged against something it cannot move.
> 3. With a second, genuinely independent frame: yes only when the two draw on different evidence pools. Repeated samples from one model are one pool, not corroboration.
> 4. At the meta-level: a loop cannot check the direction of its own question. The only remedy the framework offers is to write down what "knowing you don't know" would look like and let that prediction be refuted like anything else.
>
> What this predicts for the field: confidence is a budget filter, not a verdict. The live signal is per-slot, not aggregate. The missing operator is a refusal ("this does not hold"), which is a unary negation, not a low probability. The open research question is how to price that refusal.
>
> **What I am not claiming:** that any particular model reliably does this under distribution shift; that calibration equals self-knowledge; that a model's verbalised uncertainty is privileged access to its own grounding; that the framework derives a particular mechanism. It returns a shape, not a name. Naming a mechanism is a binding from your field and must be recorded as such.
>
> **What would refute the claim (written before this message):**
> 1. a figure line permitting a frame to certify its own completeness or reach its own metaframe;
> 2. a self-produced score shown not to be a quantity the frame also produces;
> 3. a method giving valid abstention with no external calibration data, no ground labels and no second frame;
> 4. repeated samples from one model shown to draw on distinct evidence pools;
> 5. the metaframe theorems refuted or shown not to apply to models as frames.
>
> If any holds, I withdraw the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figures and formula for direct download: https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Canonical figure text with line numbers (local extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Working world sources: Guo et al. 2017 (calibration), Geifman and El-Yaniv 2017 (selective prediction), Angelopoulos and Bates 2023 (conformal prediction), Koriat 1993 and 2000 (human metacognition), Kadavath et al. 2022 (language-model self-knowledge). Full URLs in `04_links_and_distribution.md`.
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it. The framework's own rule is that a loop cannot check the direction of its own question, and a reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 "Bring a characterised residual, never the source." Fig 2 :45 "Frames range against the ground. They do not negotiate with it." |
| Four domain verdicts, not one averaged verdict | Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." |
| Do not ask for agreement | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | Seat Map :287 "a falsifier written before the run is a design instrument, not only an honesty device." |
| Mode stated on every claim | THE_FORMULA "Mode. general · specified · grounded. State which." |
| Confidence called a filter, not a witness | Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." |
| No request for prestige or trust | Recursive Self-Improvement Trap: prestige can fund an action but cannot settle it; only the ground settles it. |
| Shape, not a name | figures README: "a shape, not a name". The email never asserts a mechanism the figures do not derive. |
| Offer the formula as a method | Fig 4 :22 "Only methods cross up. Only head starts come down." |
| Ask users to write their own refuter | Fig 5 :65 "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." |

## Distribution constraint

One-to-one only. No bulk send. The venues in `03` are public, opt-in submission or discussion points; they are not mailing lists to be harvested. Stage 2 (the links) is released only after a recipient has recorded a verdict on stage 1. Later agreement is never pooled as corroboration (Fig 2 :40).
