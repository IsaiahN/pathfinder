# Outreach draft: check the decision shape before deciding about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the three checkable sub-claims in `08_expert_verification_packet.md` have been re-checked against the verbatim figure text. The stage-1 shape must survive validation or the two-stage offer collapses on contact.

---

**Subject:** One checkable decision rule for fixed versus changing network topology

> Hi [name],
>
> I have one specific output I would like you to check against what you already know about networks. I am not asking you to read a framework first, and I am not asking you to agree with anything. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** a decision procedure for when a network's adjacency can be held fixed and when link formation and removal must be part of the dynamics. It has four moves:
>
> 1. Index the prediction error per node trajectory and per candidate link. Do not report one global fit. A global fit near zero can hide a live link that keeps being missed.
> 2. If the error on a link stays positive and does not trend down while the node trajectories are already well predicted, the owed term is a refusal of the assumption that the adjacency is constant over that window. It is not another process parameter on the same graph.
> 3. Unbundle the two causes before choosing a lever. More process detail clears the cases where only the process was wrong. It leaves standing the cases where the wiring also changed.
> 4. Run the round trip: predict with a fixed graph and with edge dynamics against the same held-out observations, then report the gap. If the gap is near zero, the extra terms are not owed. If it is large and localised on particular links, those links are the owed term. An edge-revealing measurement settles it.
>
> The framework returns this shape, not a universal number for when to switch. Any threshold is system-specific and has to be measured.
>
> **What I am not claiming:** that any particular network has been measured, that a named timescale ratio is the answer, that a reconstruction method that agrees with another on the same time series is corroboration, or that this derivation is grounded. It is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.
>
> **What would refute it, written before this message:**
> 1. A fixed-adjacency model drives the per-link error to held while node error persists, and no edge observation changes that.
> 2. Adding edge dynamics does not reduce the round-trip gap on held-out data.
> 3. One intervention clears both errors with no categorically different residue.
> 4. No edge observation is available at any resolution, in which case the honest verdict is unreachable for that system, not "dynamic topology required."
>
> If any holds, I withdraw the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Verbatim figure text with line numbers (local extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Canonical usage rule (local): `FRAMEWORK/reference/FIGURES_README_canonical.md`
> - The eight-step loop (local): `FRAMEWORK/figures/THE_FORMULA.md`
>
> **If you want to use the machinery:** the formula is in the local figures folder. Run it on a network you know well and can check against a ground. Write down what would refute your result *before* you run it. The framework's own rule is that a loop cannot check the direction of its own question. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, framework second | Fig 10 :52 *"Bring a characterised residual, never the source."* Frames range against the ground separately. |
| Do not ask for agreement | Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287 *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on every claim | `THE_FORMULA.md` *"Mode. general · specified · grounded. State which."* |
| Per-slot indexing, not a global fit | Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* |
| Refusal before mint | Fig 5 :59 persistent non-trending residual points the refusal; Fig 6 :21 *"MINT composes inside the closure and can never add an atom."* |
| Union unbundling | Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* |
| Round trip reported as a gap | Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* |
| Agreement from one time series is not corroboration | Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"* |
| Shape, not a number | Fig 9 :32 *"you get a kind of thing, never the answer itself"* |
| Offer the formula as a method to reuse | Fig 4 :22 *"Only methods cross up. Only head starts come down."* |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: prestige can fund an action but cannot settle it; only the ground can settle it. |
