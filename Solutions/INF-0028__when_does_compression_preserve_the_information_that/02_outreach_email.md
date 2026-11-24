# Outreach draft: check the effect claim before you decide about the theory

**Use:** one-to-one, or as a cover letter attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the refuter below is stated in your own words. A two-stage offer collapses on contact if stage 1 is not checkable on its own.

---

**Subject:** One checkable claim about compression and "what matters"

> Hi [name],
>
> I have one effect claim I would like you to check against what you already know. I am not asking you to read a theory first, and I am not asking you to agree with anything. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`specified` on the shape, `general` on the cited rule):**
>
> 1. A compression ratio cannot decide whether what matters survived. It is a quantity the compressor produces, so it is disqualified as a verdict. It is still fine as a budget filter.
> 2. Any lossy transform must be reported with its round-trip gap, measured at the level where the receiving check actually reads. Sending the compressed representation back up and comparing is not optional; without it a preservation claim is dead reckoning.
> 3. When the ingredients of a representation are kept and the arrangement between them is dropped, what is lost is exactly the part that decides behaviour, and nothing in the ingredient count signals that it was lost. Two different arrangements over the same atoms are different things, not variants of one thing.
> 4. "What matters" is not decided by the compressor. It is fixed by the ground of the use at the far end, and that ground must not change its answer when the compressor pushes on it. A distortion measure chosen by the designer is a convention; if that convention decides the outcome, it has stopped being a convention.
>
> **What I am not claiming:** that any particular distortion function is the answer, that a universal importance measure exists, that Shannon coding settles semantics, or that this is settled by experiment. The framework returns a shape, not a name. The particular relevance variable for your application is an import from your field, and I would ask you to supply it, not me.
>
> **What would refute the claim, written down before this message:**
> 1. A compressor's own ratio predicts the receiving check's verdict across two independent applications with low overlap.
> 2. A lossy transform and its inverse reproduce the source at the reading level with a measured zero gap, twice.
> 3. Two arrangements over the same atoms with different bonds behave identically on the ground under a declared measure and two independent uses.
> 4. A criterion of mattering that moves when frames push on it is still accepted as settling the question.
>
> If any one holds, I withdraw the corresponding part. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figure text, not my summary of it, is the authority.
> - Verbatim figure text with line numbers (local framework extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Figures and formula (public repo, branch `general-agent`): https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Rate-distortion theory, for the external statement that the distortion measure is chosen and still under discussion: https://en.wikipedia.org/wiki/Rate%E2%80%93distortion_theory
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and label the mode of what you get. The author's own write-up warns that outputs can be *"contrived to fit the formula"*, so a reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Effect claim first, theory second | Fig 10 :52, *"Bring a characterised residual, never the source."* Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."* |
| No request for agreement | Fig 2 :35, *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter before the claim is discussed | Seat Map, failure genera: *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode on every claim | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| Ratio labelled a filter, not a witness | Fig 1 :27, *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Fig 9 :60, *"Use filters for the budget and witnesses for the verdict."* |
| Round trip required | Fig 4 :30, *"So take the round trip and measure the gap."* |
| No universal importance measure named | Fig 9 :32, *"you get a kind of thing, never the answer itself"*; canonical README: *"a shape, not a name"*. |
| Designer-chosen distortion declined as an anchor | Fig 10 :47, *"a convention that decides an outcome has stopped being one"*; Fig 2 :30, *"If it moves when you push on it, it is not an anchor."* |
| No prestige ask | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Links only after stage 1 | Fig 10 :42, *"A verifier that can reconstruct the claim cannot verify it."* |
| Offer the formula as a method | Fig 4 :22, *"Only methods cross up. Only head starts come down."* The author's term for LLM-derived outputs is *"simulacra"*, so ask each user to derive against their own ground. |
