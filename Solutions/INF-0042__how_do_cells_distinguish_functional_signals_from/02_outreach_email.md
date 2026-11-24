# Outreach draft: check the shape before you decide about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until you have stated the mode and the refuter on the shape claim in your own words. Stage 2 must not be opened until the stage-1 verdict is recorded.

---

**Subject:** One checkable claim about signal versus noise in cells

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to read the framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The residual, in effect terms.** A receptor binding event gives the same kind of reading whether the ligand arrived because the environment changed or because of a thermal fluctuation. The reading alone cannot name its source. A cell must still decide: commit resources, or ignore the event. The wrong choice is costly in both directions. In a changing environment, the same molecule can flip from signal to noise as the cell's state changes.
>
> **The output (`specified`, not `grounded`).** Any working discriminator must have four features. (1) It resolves events per receptor class and per object slot, not by collapsing everything into one global mean; averaging over time is allowed, averaging over distinct objects destroys the where-to-look signal. (2) It compares against something that does not move when the cell's own model moves, namely what the response pays at the ground (survival, growth, reproduction). (3) It uses either a time comparison or a second channel that does not share the same upstream fluctuation; two channels reading the same noise source are one witness with two names. (4) It pays in two currencies that do not add: bits to state the discrimination and actions (energy, time, receptor copies) to test whether it holds.
>
> A consequence that I find useful: noise is not a kind of molecule. It is the detail that a lossy crossing between scales discards. Signal and noise can share all their atoms and differ only in their relation to the cell's situation, which is the figure framework's notion of isomers.
>
> **What the output does not say.** It does not name a molecular mechanism. It does not say the answer is kinetic proofreading, or a feed-forward loop, or receptor clustering. Those are candidate mechanisms from the biology literature that fit the shape; whether a given cell uses any of them is a ground question for an experiment, not something the framework settles. No measurement claimed here.
>
> **What would refute it, written down before this message was sent:**
> 1. A cell reliably distinguishes a novel signal from a fluctuation from one instantaneous reading of one receptor, with no time comparison, no second channel, and no contact with a ground that would penalise the wrong response.
> 2. Signal and noise are shown to be intrinsic properties of molecules, independent of cell state, environment, and measurement level.
> 3. A cell can certify from inside its own receptor set that it holds every receptor it will ever need.
> 4. A discriminator with zero delay, zero dissipation above equilibrium, and zero extra description length achieves arbitrary specificity for near-cognate ligands.
>
> If any one holds, the shape is wrong and I will retract it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the sources. The figures are the authority, not my summary of them.
> - Figure text with line numbers (local framework extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Canonical usage rule (local framework file): `FRAMEWORK/reference/FIGURES_README_canonical.md`
> - Public biology sources that bear on the shape: https://pmc.ncbi.nlm.nih.gov/articles/PMC434344 (Hopfield 1974), https://pmc.ncbi.nlm.nih.gov/articles/PMC37484 (Thattai and van Oudenaarden 2001), https://pmc.ncbi.nlm.nih.gov/articles/PMC218699 (Mangan and Alon 2003)
>
> **If you want to use the machinery:** the formula is in the framework file. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it. Report a failure rather than a success if that is what you find; a failure is the useful outcome.

---

## Why this version is ordered this way

| move | figure-grounded reason |
|---|---|
| Residual and refuter first, theory second | Fig 10 :52 *"Bring a characterised residual, never the source."* Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287: a falsifier written before the run is a design instrument, not only an honesty device (recorded in `01` §4). |
| Mode stated on the claim | `THE_FORMULA.md` mode rule: *"State which. Accepted means the ground settled it; otherwise candidate."* |
| Mechanism withheld | Fig 9 :32 *"you get a kind of thing, never the answer itself"* |
| Independence before corroboration | Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence."* |
| Do not pool later agreement | Fig 2 :40: agreement within a shared evidence pool is one witness, not two. |
| Offer the formula as a method | Fig 4 :22 *"Only methods cross up. Only head starts come down."* |
| One-to-one, public channels | Fig 7 :35: a room's agreement is variation, not a verdict. No bulk-send plan. |
