# Outreach draft - validate the output first, then decide about the theory

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** the stage-1 output in `08_expert_verification_packet.md` must survive validation before this is sent. The output is a shape and a decision rule, not a number, and it must survive as such on contact.

---

**Subject:** Check one output on redundancy before you decide whether the framing is worth reading

> Hi [name],
>
> I have one specific output I'd like you to check against what you already know about supply chain resilience or reliability engineering. I am not asking you to read a theory first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** "how much redundancy is worth paying for" is not one number. In effect terms the gap between predicted supply continuity and an actual disruption is indexed per slot (supplier, component, route, region, tier), not averaged across a network. Three consequences follow from the framework's own rules. First, a redundancy premium buys *independence*, so a second source that shares a port, a sub-tier supplier, or a maintenance regime is one frame wearing two names, not redundancy. Second, independence should be sized to the cost of being wrong, not to a point estimate of disruption probability, because a clean history is a search that found nothing and is not evidence of a low probability. Third, probability and cost are two different readings and should not be multiplied into a single expected-loss number. The honest output is a shape and a decision rule, not "hold X weeks of inventory."
>
> **What I am not claiming:** that I can compute the optimal number, that the framework names which supplier to dual-source, or that this settles how firms should actually budget. The framework returns a shape, not a name. A specific binding is a choice from the supply frame and needs a provenance gate before it carries weight. Nothing here is grounded: the ground is a future disruption and it has not returned a reading.
>
> **What would refute the shape claim:**
> 1. Two sources that share a demonstrable common cause are shown in a real event to fail independently (then headcount redundancy is a valid unit).
> 2. Adding an identical duplicate inside one closure is shown to expand the reachable set (then the idempotence reading fails).
> 3. A clean history is shown to be a sufficient statistic for the disruption probability in this class of systems (then "absence is not p=0" fails).
> 4. The two currencies, probability and cost, are shown to be addable under the framework's own rule (then the expected-loss form is admitted).
>
> I wrote these down before sending this. If any one holds, the corresponding part is withdrawn. A one-line "this fails because..." is more useful to me than agreement. If you'd rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figures and formula for direct download (SVG, branch `general-agent`): https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Canonical usage rule: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - Worked narrative: https://adventuresinml.substack.com/p/how-intelligence-actually-works
>
> **If you want to use the machinery:** run the formula on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Fig 2 :45 - *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map rule recorded in `01`: a falsifier written before the run is a design instrument. |
| Mode stated on every claim | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| Shape, not a number | Fig 9 :32 - *"you get a kind of thing, never the answer itself."* |
| Independence counted by shared evidence | Fig 2 :31-32 - *"Independence, between two frames, is how little they draw on the same evidence."* |
| No claim that the ground settled it | Fig 2 :29 - the anchor "does not change its answer because of what any frame thinks"; here it has not spoken. |
| No request for agreement or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Offer the formula as a method to reuse | Fig 4 :22-25 - *"Only methods cross up. Only head starts come down."* |
| Ask users to state their own ground and refuter | `THE_FORMULA.md` "Direction": a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."* |
