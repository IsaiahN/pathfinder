# Outreach draft - validate the shape claim first, then decide about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the refuter in `01_figure_grounded_audit.md` §5 has been checked and the retractions in §7 have been read. The output must survive validation or the two-stage offer collapses on contact.

---

**Subject:** Check one claim about random failure versus targeted attack before you decide whether the framework is worth reading

> Hi [name],
>
> I have one specific output I would like you to check against what you already know about network robustness. I am not asking you to read the theory first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** the two halves of your question are not one property viewed twice. They are a union compound of two different operations on one graph, and a single robustness score averages away the asymmetry you asked about. The figure set calls this a union rather than a partition, and says that a case in two conditions is not a harder case of either. The first operation, uniform random removal, has no selector: nodes are sampled exchangeably, so with a heavy-tailed degree distribution the few high-degree slots are almost never touched and the giant component deflates one leaf at a time. The second operation, targeted removal, has a seat: an agent enumerates the nodes, ranks them by degree, and removes the highest first. Same atoms, different operation, different substance. What the framework returns is the shape, not the number: per-slot heterogeneity plus a ranking seat. It does not derive a percolation threshold or the word "scale-free". Those belong to your field, not mine.
>
> **What I am not claiming:** that the framework predicted the numerical results in the network literature. It did not. Those are imports from your frame, and until provenance and a shadow test are shown they carry no evidentiary weight for the framework. I am also not claiming that hubs are "good" or "bad" nodes. Their valence flips with the removal regime. I am not asking you to trust anything.
>
> **What would refute the shape claim, written before this message:**
> 1. a homogeneous degree network shows the same late fragmentation threshold as a heavy-tailed one under uniform removal, at matched node and edge counts;
> 2. a heavy-tailed network does not collapse early under degree-ranked removal, while a homogeneous one does;
> 3. the same asymmetry appears under a sampler that is exchangeable across nodes with a different random seed;
> 4. degree sequence alone, with wiring varied freely, fully determines both removal curves;
> 5. a seventh primitive called robustness is derivable from the other five terms, or a direct composition of two states or two structures is admitted in this domain.
>
> If any one holds, the shape is wrong and I will retract it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figures and formula, verbatim text with line numbers (local extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Canonical usage rule (local copy): `FRAMEWORK/reference/FIGURES_README_canonical.md`
> - The worked comparison that supplies the ground: https://arxiv.org/html/cond-mat/0008064v1
>
> **If you want to use the machinery:** the formula is in the framework files. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Each reader ranges against the ground separately (Fig 2). |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Refuter before conclusion | Seat Map :287 - *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode on every claim | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| Numbers withheld pending provenance | Fig 6 :23 - *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* An import needs a source gate and a shadow test. |
| No request for agreement or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Shape, not a name | Figures README: *"a missing thing would have to look like (a shape, not a name)"*. So the email never asserts that the framework names "scale-free". |
| Two regimes not averaged | Fig 9 :57 - *"a case in two conditions is not a harder case of either"*. |
| Offer the formula as a method | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask for a falsifier, not an endorsement | Seat 4's output is a correction on shape and a named failure class, not verification. |
