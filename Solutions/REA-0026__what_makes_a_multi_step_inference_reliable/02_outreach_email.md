# Outreach draft - check the output first, then decide about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the verifier in `08_expert_verification_packet.md` has had an independent look at C1 to C3. The output must survive validation or the two-stage offer collapses on contact.

---

**Subject:** Check one claim about multi-step reasoning before you decide whether the framework is worth reading

> Hi [name],
>
> I have one specific claim I would like you to check against what you already know. I am not asking you to read the framework first, and I am not asking you to agree with it. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** a multi-step inference is not reliable because its steps are confident or numerous. It is reliable when five conditions hold, each separately checkable:
>
> 1. The residual (the gap between what a step predicted and what it observed) is reported per slot and per link, never collapsed into one confidence number. A global average is exactly how a live failure signal disappears.
> 2. Each link's input actually arrived and was measured. The link most likely to break is the middle one, where a system has terms for what a situation affords and says what would count as progress, because that link has neither obvious failures nor obvious tests.
> 3. Each step is settled against a ground before the next step composes over it. An unsettled step carries a remainder into the next turn, and a remainder compounding through an amplifying chain is chaos.
> 4. Progress per handoff has two factors: how faithfully the bracket naming the residual survives the handoff, and how much the ground presses on the receiving step. Zero either and the chain runs in place.
> 5. The checker sees the lineage, not the generator's interior, and ranges against an anchor that does not move when the generator changes. A checker that can reconstruct the claim cannot verify it.
>
> This is a shape and a set of refuters, not a measurement. I am explicitly not claiming that sampling more chains, or a higher final confidence, makes an inference reliable. Those are budget filters, not witnesses for the verdict.
>
> **What would refute it:**
> 1. a single scalar confidence that preserves every per-slot failure signal on a labelled test set;
> 2. an uninstrumented middle link reliably rescued by compute applied above it;
> 3. an unsettled intermediate composing over many runs with no final degradation;
> 4. a majority vote from one model beating a genuinely independent pinned anchor on a shared systematic error;
> 5. a checker given the full generator interior detecting propagated errors as well as one denied it.
>
> I wrote these down before searching the literature. If any one holds, the corresponding condition comes out of the claim and I will retract it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figures and formula for direct download (SVG, branch `general-agent`): https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Worked narrative and the derivation method: https://adventuresinml.substack.com/p/how-intelligence-actually-works
> - Full architecture (19 min): https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a reasoning chain you know well and can check against a ground. Write down what would refute your result *before* you run it, and label the mode of what you get. A reported failure is more useful to me than a reported success.
>
> - Isaiah

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Claim and refuters first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Fig 2 :45 - *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on every claim | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| Per-slot, not one score | Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* |
| Middle link before more compute | Fig 3 :19 - *"Optimising a link that already works cannot rescue one that does not."* |
| Settle before composing | Fig 12 :106 - *"Nothing composes over what was never admitted as a part."* |
| Independence bought, not assumed | Fig 2 :42 - *"Buy independence in proportion to the cost of being wrong."* |
| Lineage, not interiors | Fig 10 :42 - *"A verifier that can reconstruct the claim cannot verify it."* |
| Sampling as filter, not witness | Fig 9 :60 - *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* |
| No request for agreement or prestige | Prestige can fund a trial but cannot settle an action; only the ground settles it. The ask gives the claim a budget to be tried. |
| Offer the formula as a method to reuse | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask users to state their own ground and refuter | The formula's "Direction": a frame cannot check the direction of its own question because the sought-for shape is not a term it holds. |
