# Outreach draft - check the output first, then decide whether the framework is worth reading

**Use:** one-to-one, or as a cover letter attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** the shape claim must survive stage 1 on its own. If it does not, there is nothing else to look at.

---

**Subject:** One checkable claim about robustness, before any theory

> Hi [name],
>
> I have one specific output I would like you to check against what you already know about robust systems. I am not asking you to read a theory first, and I am not asking you to agree with anything. If the output fails, there is nothing else to look at.
>
> **The output (`general` on the shape, `specified` on the mapping to AI systems, not `grounded`):** a system's prediction error is a gap between what its current vocabulary predicts and what actually happens, and that gap is indexed per object slot, never averaged. From that alone, four things follow about robustness to unfamiliar inputs and adversarial pressure.
>
> 1. A mean score cannot carry the signal. A global residual near zero with one live slot is a legal state, and averaging is exactly how the live signal disappears. So the first mechanism is a slot-indexed monitor, not a better aggregate metric.
> 2. A system that cannot say "a term I hold is false" can only accumulate. Unfamiliarity is not one bin: something new needs perception extended, a broken binding needs a refit, and a refuted regularity needs a refusal, which is a different operator from adding a term.
> 3. Silence is ambiguous. When the error signal stops arriving, that is either a perfect prediction or a dead channel, and from inside the system those look identical. Adversarial pressure can saturate a metric or pool readings without ever making a wrong prediction. So a separate check whose output is "you have lost touch" is load bearing, and it has to sit outside the loop it checks.
> 4. Independence, not agreement, is what makes a check mean something. Adding evaluators that share one benchmark and one evidence pool is one frame wearing many names. The checking frame has to differ from the thing it checks.
>
> There are two more conditions that follow at larger scale. Genuine novelty cannot be composed from inside a fixed vocabulary, so a system needs a route to a frame whose vocabulary differs, or an instrument that was already returning something unresolved. And capability is a property of the system and its habitat, not of the system alone, so a result from a fixed synthetic harness proves wiring and not capability.
>
> **What I am not claiming:** I am not naming an architecture. The derivation returns the shape a robust system must have, not which mechanism fills it. Specific ensembles, regularisers, verifiers and monitors are bindings from the engineering frame, and until a source-discriminating instrument separates them they carry no weight here. I am also not claiming this is settled by experiment. No measurement was taken.
>
> **What would refute it:**
> 1. A dead ground channel that is distinguishable from perfect prediction from inside the system.
> 2. A system with one evidence pool and a moveable reference that stays robust against an adversary able to move its frames.
> 3. Internal composition alone producing robustness to a genuinely new class of input, with no new instrument and no contact with a different frame.
> 4. An agent-only change that moves the ground while the habitat and all contacts are held fixed.
>
> I wrote these down before sending this. If any one holds, that condition is withdrawn and the shape has to be rebuilt. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the sources. The figures are the authority, not my summary of them.
> - Verbatim figure text with line numbers (local extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Canonical usage rule (local extract): `FRAMEWORK/reference/FIGURES_README_canonical.md`
> - The eight-step loop and the mode rule (local): `FRAMEWORK/figures/THE_FORMULA.md`
> - Habitat, channel and the checking seats (local): `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and label the mode of what you get. The framework's own rule is that a loop cannot check the direction of its own question, so a favourable output is not a result. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 *"Bring a characterised residual, never the source."* Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287 *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on every claim | `THE_FORMULA.md` *"Mode. general · specified · grounded. State which."* |
| No architecture named | Fig 9 :32 *"you get a kind of thing, never the answer itself"* |
| Per-slot before aggregate | Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* |
| Refusal before mint | Formula step 2; Operators table :58 *"a refutation is a negation, which is why a vocabulary without it can only accumulate"* |
| Channel check outside the loop | Fig 10 :24 *"the ground does not decay, the channel does"* |
| Independence not agreement | Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"* |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Offer the formula as a method | Fig 4 :22 *"Only methods cross up. Only head starts come down."* |
| Ask each user to write their own refuter | `THE_FORMULA.md` Direction: a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."* |
