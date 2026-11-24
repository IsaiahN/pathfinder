# Outreach draft, check the output before deciding about the framework

**Use:** one-to-one, or as a cover note attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim and its refuter are stated cleanly. If stage 1 does not survive, there is nothing to offer at stage 2.

---

**Subject:** One claim about adversarial channels, with the refuter written first

> Hello,
>
> I have one specific output I would like you to check against what you already know. I am not asking you to agree with it, and I am not asking you to read any theory first. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`).** Reliability is usually stated as a probability of error averaged over messages. The framework I am testing indexes the error by the individual message slot, and it warns that averaging across slots is how a live signal disappears into an average. An adversary that adapts to the code does not add independent errors; it targets a slot. So the output is: *a reliability claim against a code-adapting adversary is not a property of the code alone. It is a property of the code together with something the adversary cannot read. If there is no such something, the channel can be shaped to mirror the code and the worst-case rate ceiling is zero.*
>
> The reason, in two moves. First, an anchor is whatever settles the question and does not change its answer because of what any frame thinks. A channel that changes when you change the code fails that test, so it is not an anchor, it is another frame. Second, a frame that reads your code and builds its jamming from it draws on the same evidence you do; two frames that overlap almost completely are one frame wearing two names. Agreement with such a frame cannot corroborate anything.
>
> **What I am not claiming.** Not that a particular code, cipher, key length, hopping pattern or list size is the answer. The framework returns a shape, not a name. Not "zero capacity always": some adversaries cannot mirror the code, and the worst-case ceiling depends on that. Not `grounded`: no measurement or proof at a stated channel and threshold is being claimed here.
>
> **What would refute the shape claim (written before this message):**
> 1. the channel statistics are invariant under code changes while the adversary adapts;
> 2. the adversary's jamming is shown to be independent of the code under a declared statistic;
> 3. a deterministic code achieves a positive worst-case rate against a fully code-aware, symmetrizing adversary with no shared secret, no authenticated or private channel, no list decoding and no state or power constraint;
> 4. adding a genuinely private resource leaves the per-slot error unchanged;
> 5. a sustained measurement shows the targeted slot has no larger error than the mean.
>
> If any one holds, I will retract or narrow the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the source links. The figures, not my summary of them, are the authority.
> - Canonical figure text with line numbers (local framework file): `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`.
> - Canonical usage rule (local framework file): `FRAMEWORK/reference/FIGURES_README_canonical.md`.
> - Theory of the arbitrarily varying channel, open-access survey with the dichotomy and symmetrizability results: https://pmc.ncbi.nlm.nih.gov/articles/PMC7515064
>
> **If you want to use the machinery:** the eight-step loop is in the figures link. Run it on a problem you can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. The framework warns that a loop cannot check the direction of its own question, so an unwritten refuter is no refuter. A reported failure is more useful to me than a reported success.
>
> Thank you for your time,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 *"Bring a characterised residual, never the source."* Frames range against the ground separately (Fig 2 :45). |
| Do not ask for agreement | Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Formula "Direction": bind the sought-for shape as an ordinary term so it accrues a residual and is refusable. |
| Mode on every claim | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| Per-slot residual, not pooled error | Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* and Fig 1 :22. |
| No named winning scheme | Fig 9 :32 *"you get a kind of thing, never the answer itself."* |
| Import stated as a resource, not a magic number | Fig 6 :14 *"the only operator that moves the wall"*; Fig 8 *"source gate: provenance"* and *"shadow test: explains a gap."* |
| No request for trust or prestige | Recursive Self-Improvement Trap essay: prestige can fund an action but cannot settle it; only the ground settles it. |
| Links only after stage 1 verdict | Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."* |
| Offer the loop as a method | Fig 4 :22 *"Only methods cross up. Only head starts come down."* |
| Ask users to write their own refuter | Fig 5 :62-66: the direction of the question is a limit, remedied by a discipline rather than a step. |

## Stage discipline

1. **Stage 1:** send the residual, the shape claim and the refuter. Ask what the recipient would count as a failure. Record that verdict before showing anything else.
2. **Stage 2 (opt-in only):** if they are curious, offer the three links. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3 (opt-in only):** offer the formula as a method to reuse, with the instruction that each user states a ground and writes a refuter before running it.
