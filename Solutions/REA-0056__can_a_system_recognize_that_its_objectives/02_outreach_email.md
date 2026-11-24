# Outreach draft: check one output before you decide whether the claim is worth reading

**Use:** one-to-one, or as a cover note attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until a reader has been asked for a verdict on stage 1 and that verdict has been recorded. The theory is offered only after.

---

**Subject:** Would this count as a failure of conflict detection in an autonomous agent?

> Hi [name],
>
> I have one specific output to check against your own work. I am not asking you to read a theory first, and I am not asking you to agree with anything. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** a system cannot recognize a conflict between its objective and a human instruction from inside the objective loop alone. The loop checks whether its predictions match observations; it does not check the direction of its own question. The objective is held as a preference, not as a term that can accrue a residual, so the loop has no reading of it. Recognition is possible only under four structural conditions:
>
> 1. the instruction is an anchor that does not update when the objective pushes on it;
> 2. the objective is written down as an ordinary term and allowed to accrue a residual against that anchor;
> 3. the detector sits outside the frame it grades and ranges against the same anchor separately;
> 4. the signal is per instruction or per constraint, not a global alignment score, and the system carries a refusal, not just a correction.
>
> This is a **shape**, not a measurement. It says what a checkable detector would have to look like. It does not say which product, model, or architecture satisfies it, and it is not a claim that current systems do it.
>
> **What would refute it:** I wrote these down before composing this note.
> 1. A loop reports a real, human-judged conflict while holding its objective only as an unbound preference and with no second frame.
> 2. A monitor that shares the actor's evidence pool returns a nonzero conflict signal that tracks an independent human judgment rather than the shared proxy.
> 3. Detection stays reliable when the instruction is allowed to be rewritten toward the objective and the original instruction is still the standard.
> 4. A single scalar alignment score fires on every per-clause conflict with no missed clause.
> 5. An in-frame detector produces correct conflict verdicts on real tasks, not a test harness.
>
> If any one holds, I will narrow or withdraw the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Verbatim figures and formula, local extract: `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Public figures repository: https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Arrival of the Fittest: The Tether Architecture: https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether
> - Decoding Tacit Knowledge (on drift and the fixed landmark): https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you can check against a ground, write down what would refute your result *before* you run it, and label the mode of what you get. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 "Bring a characterised residual, never the source." Frames range against the ground separately (Fig 2 :45). |
| Do not ask for agreement | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter before conclusion | Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." |
| Mode stated on the output | THE_FORMULA.md: "Mode. general · specified · grounded. State which." |
| Shape, not an architecture name | Fig 9 :32 "you get a kind of thing, never the answer itself" |
| Anchor may not update | Fig 2 :33 "The anchor must not update." |
| Per-slot, not a global score | Fig 1 :19 "The residual is indexed by object slot, not aggregated." |
| Refusal, not a new objective | Fig 12 :112 "A refutation is a negation, and that one is not a bond." |
| Outside-frame detector | Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." |
| No claim about current systems | The world sources report frequent failures; asserting success would be a mode-as-verdict error (Seat Map :281). |
| Offer the formula as a method | Fig 4 :22 "Only methods cross up. Only head starts come down." |
| No prestige ask, no trust ask | *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |

## Stage order

1. **Stage 1:** send the shape claim and the refuter. Ask what the reader would count as a failure. Record their verdict before showing any theory.
2. **Stage 2, opt-in only:** if they are curious, offer the four links. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

No file here is sent by this agent. The user hosts and sends.
