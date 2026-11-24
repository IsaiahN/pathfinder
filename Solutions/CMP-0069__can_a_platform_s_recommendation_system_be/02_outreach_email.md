# Outreach draft: check one output before deciding about the framing

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim and its refuter in `01_figure_grounded_audit.md` survive your own check. The two-stage offer collapses on contact if stage 1 does not hold.

---

**Subject:** Check one modeling output before you decide whether the framing is worth reading

> Hi [name],
>
> I have one specific output I would like you to check against what you already know about recommender systems and information spread. I am not asking you to read the framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The residual.** When a model of information spread on a platform fails, the failures cluster in slots where the recommender and the users co-adapt: the algorithm changes what is seen, what is seen changes ties, and the new ties change what the algorithm trains on. A model that treats the recommender as a fixed outside force misses those slots. A model that puts it inside the network sees them. That is the thing to check.
>
> **The output (`general` on the reframing, `specified` on the prediction), stated before any theory:**
>
> 1. "Inside or outside" is a boundary declaration, not a measured property of the recommender. It settles nothing until a test can violate it.
> 2. The recommender is in contact with the spread residual, so it belongs in the field of contact that any model of the spread must enumerate. The default move is to model it as part of the network.
> 3. The exception is precise: a recommender whose ranking does not update on the behavior it affects can legitimately be modeled as an external influence. For a system that retrains on user behavior, that exception does not apply.
>
> **What would refute it:**
> 1. A controlled experiment showing recommender exposure is independent of user behavior and network state, so the recommender really is a fixed external force and the external model predicts as well.
> 2. A controlled experiment showing the recommender has no effect on the spread residual, so it is not in the field of contact at all.
> 3. A demonstration that the organic and the algorithmic channels draw on the same evidence completely, so there is no compound to separate.
>
> I wrote these down before sending this. If any one holds, I will narrow or retract the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the sources. The figure text, not my summary of it, is the authority.
>
> - Canonical figure text with line numbers (local extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - The membrane, habitat, and anchor figures, plus the formula, are in the same framework folder.
> - The public, independent check on the same question: Koley and Digrajkar, "A Simulation Framework for Studying Recommendation-Network Co-evolution in Social Platforms", arXiv:2512.10106. Their words: *"Unlike prior agent-based models that treat networks as static or model recommendations as exogenous inputs, we create a closed-loop system: agents form ties based on content exposure, a graph attention network (GAT) learns to recommend content from observed behavior, and those recommendations alter future tie formation."* That paper is a check on the output, not on the framework.
>
> **If you want to use the machinery:** the formula is in the framework folder. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52: *"Bring a characterised residual, never the source."* A reader ranges the shape against the ground without holding the framework's interiors. |
| Do not ask for agreement | Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | The exemplar's Seat Map: *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on every claim | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| Boundary labeled a convention, not a fact | Fig 10 :18: *"a declared meaning is not a grounded one"* |
| The recommender placed in the habitat | Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* |
| External model kept as a named exception | Fig 2 :25: *"pinned: it does not update on A or B"* |
| Links only after the verdict | Fig 4 :21: *"Not a wall: a filter with a direction."* Stage 2 is opt-in by construction. |
| No request for trust or prestige | *The Recursive Self-Improvement Trap* (essay read this session): *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Independent world source offered as the check | Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* The Koley and Digrajkar paper is from a different research group and does not cite the framework. |
| Offer the formula as a method to reuse | Fig 4 :22: *"Only methods cross up. Only head starts come down."* Giving away a generator does not give away an answer. |
