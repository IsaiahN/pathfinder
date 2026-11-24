# Outreach draft - check the output first, then decide about the framing

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send. Field: galaxy simulation research.

**Hard precondition:** do not send until the reporting defect in F1 and the witness defect in F2 of `01_figure_grounded_audit.md` are fixed in the recipient's own terms. The output must survive validation or the two-stage offer collapses on contact.

---

**Subject:** Which slot carries the largest live residual in your galaxy simulations?

> Hi [name],
>
> I have one specific output about simulation fidelity that I would like you to check against what you already know. I am not asking you to read the framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** "accuracy" is not one number. It is a residual between what a simulation predicts and what a telescope returns, indexed per component (gas, stars, dust), per object and per regime. A code can match the stellar mass function while carrying a live residual in circumgalactic gas or dust attenuation, and a single averaged score throws away the only signal that says where to look. Two further things follow from the same rule: convergence of a code at fixed subgrid physics is a gate, not a settlement, and two codes that calibrate to the same observables are one evidence pool, not two confirmations.
>
> **What I am not claiming:** that any named simulation is inaccurate, that I have measured a residual for your code, or that a particular feedback prescription is right. The framework returns a shape and a class of instrument, not a number and not a name. What is owed is a source-discriminating observation, not another tuning of the stellar mass function.
>
> **What would refute the shape claim:**
> 1. a single global accuracy number that predicts, prospectively and per slot, which component will diverge next in a held-out galaxy;
> 2. two suites with independent solvers, subgrid physics and calibration data that agree on a held-out observable and survive an independent measurement of it;
> 3. convergence alone settling accuracy on a held-out observable with no observational comparison.
>
> I wrote these down before sending this. If any one holds, I will retract the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figures text extract with line numbers (local): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Canonical usage rule (local): `FRAMEWORK/reference/FIGURES_README_canonical.md`
> - Crain & van de Voort 2023 review: https://arxiv.org/html/2309.17075v1
> - van de Sande et al. 2018 SAMI comparison: https://arxiv.org/html/1810.10542v1
>
> **If you want to use the machinery:** the formula is in the local figures folder. Run it on a simulation claim you know well and can check against a ground. Write down what would refute your result *before* you run it, and label the mode of what you get. A reported failure is more useful to me than a reported success.
>
> — [your name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Fig 2 :45 - *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287 - *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on every claim | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| No accuracy percentage asserted | Seat Map :281 - *"An unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict."* |
| Code consensus withheld until independence is shown | Fig 2 :40 - agreement about the world is worthless when the frames share an evidence pool; Fig 8 :50 - convergent derivation and adopted import look identical in the contents |
| Ask which slot, not how accurate overall | Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* |
| Figure glyphs only, no imported notation | The figures define `→` as sequence and `⋛` as comparison; importing a new symbol for "accuracy" would add an atom with no source gate (Fig 6 :23) |
| No request for agreement or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Offer the formula as a method to reuse | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask users to state their own ground and refuter | `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question; the essay warns that outputs would need to be derived from the real architecture or working the formula yourself |
