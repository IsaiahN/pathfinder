# Outreach draft — check the separator before you decide about the theory

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the live strain in `01` section 6 (S2, the operand type of the threshold comparison) is stated openly in the note and the two outcomes are kept separate. A blended "clustering effect" collapses on contact with anyone who works on both SIR and SIS.

---

**Subject:** One checkable separator for the clustering question, written before the result

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to read a theory first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** clustering in a contact network (triangles, cliques, communities) is an *arrangement*, not a scalar. A single clustering coefficient counts closed triples and drops the arrangement, so it cannot by itself tell you what the infection will do. Two outcomes that the literature reports with opposite signs are a **union of two conditions with different anchors**, not two ends of one dial:
>
> 1. **Slow-down.** When a contact is spent on a neighbour the infection has already reached, the local pool of susceptible slots is depleted and early growth and final size fall. Anchor: observed incidence, per cluster and per time.
> 2. **Reservoir.** When the same closed path can re-enter infection, because reinfection or waning immunity is possible, the cluster becomes a cycle and the disease persists even as global incidence falls. Anchor: observed fade-out versus endemicity, and disease lifetime.
>
> The separator is the immunity/regime question, not a coefficient value. Under permanent removal the closed triangle is a dead end; under re-entry it is a reservoir. The same structure changes valence without changing. Fig 11 :49: "An actor’s valence is relative to the residual, not a property it carries." Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
>
> **What I am not claiming:** that there is a universal clustering threshold, that a transmission tree recovers the arrangement, that degree heterogeneity is irrelevant, or that one lever ("reduce clustering") clears both conditions. The framework returns a shape, not a number. The operand type of the threshold comparison is a live strain, not a hidden one: a comparison is "a threshold relation between two quantities", while the things being compared here are arrangements. I cannot close that with an argument.
>
> **What would refute the separator:**
> 1. A fixed scalar clustering coefficient, with degree distribution, transmissibility and immunity regime held fixed, predicts both early growth and long-run persistence with no residual.
> 2. A clustered SIR-like system with permanent removal sustains endemicity without re-entry, or a clustered SIS-like system with documented reinfection shows no threshold shift and no longer disease lifetime versus a degree-matched control.
> 3. Two networks matched on degree distribution, clustering coefficient and degree correlations give statistically indistinguishable SIR and SIS outcomes across many runs.
> 4. A published instrument reads the underlying arrangement from outbreak data alone, with calibrated error confirmed by an independent contact census.
>
> I wrote these before sending this. Number 4 would close the honest gap rather than refute the whole thing, and I would record it as a fix. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figures and formula for direct download (SVG, branch `general-agent`): https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Verbatim figure text with line numbers (local framework file): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Architecture essay: https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, hold the degree sequence fixed, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> — [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 — "Bring a characterised residual, never the source." Fig 2 :45 — "Frames range against the ground. They do not negotiate with it." |
| Do not ask for agreement | Fig 2 :35 — "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | Seat Map rule: a falsifier written before the run is a design instrument, not only an honesty device. |
| Mode stated on every claim | `THE_FORMULA.md` — "Mode. general · specified · grounded. State which." |
| Two outcomes kept separate | Fig 9 :57 — "a case in two conditions is not a harder case of either." |
| No universal coefficient value | Fig 9 :32 — "you get a kind of thing, never the answer itself." |
| Live strain disclosed, not smoothed | Operators table :48, threshold between two quantities; Fig 13 re-census rule, a strained line governs another quantity. |
| Degree distribution held fixed | Fig 9 :60 — "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." |
| No request for agreement or prestige | *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Offer the formula as a method to reuse | Fig 4 :22 — "Only methods cross up. Only head starts come down." |
| Ask users to state their own ground and refuter | Formula, "Direction": a frame cannot check the direction of its own question. |
