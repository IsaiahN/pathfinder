# Outreach draft - validate the output first, then decide about the theory

**Use:** one to one, or as a cover letter attached to a submission through the public venues in
`03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the F2 retraction and the F1 to F3 repairs in
`01_figure_grounded_audit.md` are understood. The output must survive validation or the two-stage
offer collapses on contact.

---

**Subject:** Check one output before you decide whether the framework is worth reading

> Hi [name],
>
> I have one specific output I would like you to check against what you already know about
> detection. I am not asking you to read the theory first, and I am not asking you to agree with
> it. If the output does not survive, there is nothing else to look at.
>
> **The question:** how can a receiver distinguish noise from a rare but meaningful signal?
>
> **The output (`specified`, not `grounded`):** a receiver cannot do it from amplitude alone,
> because both noise and a genuine transient produce a residual. What separates them is a
> conjunction of four things, kept separate rather than blended into one score:
>
> 1. The residual stays indexed per slot and per time. A rare signal is one live slot with the rest
>    quiet. Averaging across slots throws away the only thing that says where to look.
> 2. A candidate pattern is worth naming only if its description plus what it leaves unexplained
>    costs less than the raw residual. This ranks candidates by compressibility. It does not by
>    itself prove a source exists.
> 3. The channel to the ground is kept reachable. Rare signals are transients and small live
>    slots, and the named ways they die are dropped transients, saturated metrics, pooled readings
>    and stale percepts. The ground does not decay; the channel does.
> 4. A source is corroborated across frames that do not share an evidence pool. One reading cannot
>    comment on its own source. A criterion tuned to trade misses against false alarms allocates a
>    budget; it is not evidence that a signal was present.
>
> This is a shape and a route, not a detector design and not a measurement. It does not name which
> physical source produced any particular reading.
>
> **What I am not claiming:** that a likelihood-ratio test is the ground, that d' settles source,
> that a low p-value is a detection verdict, or that a threshold crossing means a signal exists.
> Those are instruments and budget choices. The framework returns a kind of thing, never the
> answer itself. Convergent derivation and adopted import look identical in the contents and only
> the record separates them, so until provenance is shown they carry no evidentiary weight.
>
> **What would refute the shape claim:**
> 1. a detector that recovers every ground-confirmed rare signal after replacing per-slot residual
>    with the global average and adding no other information;
> 2. a channel independently verified as fresh, unsaturated, unpooled and transient-preserving that
>    still misses a rare signal at the rate predicted by channel decay;
> 3. a closed, enumerated set of possible sources each yielding a distinct reading, verified
>    against the ground for every member, so that one reading uniquely names its source;
> 4. a detection rule that works with its miss/false-alarm cost pair varied freely and no change
>    in decision.
>
> I wrote these down before sending this. If any one holds, the shape is wrong and I will retract
> it. A one-line "this fails because..." is more useful to me than agreement. If you would rather
> not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my
> summary of them.
> - Figures and formula for direct download (local framework folder): `FRAMEWORK/figures/` and
>   `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Detection theory background: https://en.wikipedia.org/wiki/Detection_theory
> - Minimum description length: https://en.wikipedia.org/wiki/Minimum_description_length
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you
> know well and can check against a ground. Write down what would refute your result *before* you
> run it, and state the mode of what you get. A reported failure is more useful to me than a
> reported success.
>
> — Pathfinder agent (on behalf of the framework author)

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Fig 2 :45 - frames range against the ground separately. |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287 - *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on every claim | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| Compressibility demoted from verdict to filter | Fig 9 :60 - *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* See the F2 retraction in `01`. |
| Criterion kept out of the verdict | ROC and Neyman-Pearson sources: sensitivity and cost context are separate; Fig 9 :60 governs. |
| No request for agreement or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* The ask gives the claim a budget to be tried; it does not ask anyone to endorse it. |
| The framework returns a shape, not a name | *"what a missing thing would have to look like (a shape, not a name)"* - so the email never asserts which physical source occupied a slot. |
| No "bombshell", no "true answer", no "trust" | Seat Map :281 (mode as verdict); Fig 10 :42 (*"A verifier that can reconstruct the claim cannot verify it."*). |
| Offer the formula as a method to reuse | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask users to state their own ground and refuter | `THE_FORMULA.md` "Direction": a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."* |
