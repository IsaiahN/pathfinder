# Outreach draft: check the criterion before you decide about the claim

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim, its mode and its refuter are stated exactly as below. The output must survive stage 1 or the two-stage offer collapses on contact.

---

**Subject:** Check one criterion before you decide whether the claim is worth reading

> Hi [name],
>
> I am working on a narrow question in machine learning for complex systems: what observation would license the word *mechanism* for a fitted model, rather than *correlation that fails under change*? I am not asking you to read a theory first, and I am not asking you to agree with me. If the criterion does not survive, there is nothing else to look at.
>
> **The stage-1 output (`general` on the shape, `specified` on the per-domain findings, not `grounded`):**
>
> 1. In-distribution accuracy cannot be the verdict. It is a quantity the training loop also produces, so it cannot score the frame that produced it. Treat it as a budget filter, not a witness.
> 2. The discriminating measurement is the per-slot residual under a **changed habitat**, taken by a probe that shares no evidence pool with training. If the prediction keeps paying when the ground is pushed, the mechanism claim has something behind it. If it fails, the correlation claim wins for that model.
> 3. Correlation versus mechanism is an ingredients-versus-arrangement distinction. A model can hold every relevant feature and still hold the wrong bond. Two models with the same features can be different substances, invisible in the accuracy formula and decisive under intervention.
> 4. A held-out test set is a substituted habitat. Passing it proves the wiring, not the capability, in the same way a synthetic solve does.
>
> I wrote the refuter before this message:
>
> - **Refutes the "mainly correlations" side:** a model with near-zero per-slot residual under a genuinely new habitat, where the probe shares no data or preprocessing with training, and the new habitat reproduces deployment conditions.
> - **Refutes the "mechanism" side:** two models with the same ingredient set and different arrangements behave identically under intervention, so the arrangement carries nothing.
> - **Refutes the question's form:** one measurement decides reachability, bond and habitat with no residual left over, so the question did not need splitting.
>
> If any holds, I retract the corresponding claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **What I am not claiming:** that models cannot reveal mechanisms (the figures give criteria, not a blanket denial); that feature importance is a mechanism (it reports ingredients, not the bond); that a bigger test set fixes under-specification; or that any particular model class has been certified. I am claiming only the shape a legitimate mechanism-credit would have to take.
>
> **If it survives, and only then:** the detailed derivation and the public sources are below. The figures, not my summary of them, are the authority.
> - Figure text extract with line numbers (local framework copy): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Shortcut learning in deep neural networks, Geirhos et al., Nature Machine Intelligence 2020: https://www.nature.com/articles/s42256-020-00257-z
> - Underspecification presents challenges for credibility in modern machine learning, D'Amour et al.: https://arxiv.org/abs/2011.03395
> - Unmasking Clever Hans predictors and assessing what machines really learn, Lapuschkin et al., Nature Communications 2019: https://www.nature.com/articles/s41467-019-08987-4
>
> **If you want to reuse the machinery:** the formula is public in the figures link. Run it on a problem you know and can check against a ground, and write down what would refute your result *before* you run it. A reported failure is more useful to me than a reported success.
>
> - [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Criterion first, theory second | Fig 10 :52: *"Bring a characterised residual, never the source."* Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on the output | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| Accuracy called a filter, not a witness | Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* |
| Independence required | Fig 2 :31-32: *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."* |
| Benchmarks called substituted habitats | Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* |
| No blanket "models cannot" claim | Fig 9 :32: *"you get a kind of thing, never the answer itself"*; the framework returns a shape, not a model-level verdict. |
| Links after the verdict | Fig 4 :22: *"Only methods cross up. Only head starts come down."* Send the generator, not the recording. |
| Offer the formula as a method | Fig 4 :22-25; each user writes their own refuter and states their own mode. |
| No prestige ask | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
