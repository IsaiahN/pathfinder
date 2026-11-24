# Outreach draft - check the output before deciding about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the three checkable sub-claims in `08_expert_verification_packet.md` survive a readout by someone who has not seen the framework. If they do not, the two-stage offer collapses on contact.

---

**Subject:** Check one shape claim about network control before you decide whether the framework is worth reading

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to read the framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** a controller does not need a complete internal model of a complex networked system in order to control it. What it needs is, first, a ground anchor that fixes the target variable and does not move when the controller's model changes; second, a lever introduced into the habitat that changes the residual at some node; third, a channel that keeps the residual indexed per node instead of pooling it into a single score. If the lever is not derivable from the controller's own model, it can be imported from a frame whose closure differs. Full internal understanding is not one of the requirements. This is a prediction of a **shape**, not a measurement.
>
> The three figure lines it rests on, verbatim:
> - Fig 1 :23: "The ground enters as the only metric."
> - Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
> - Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
>
> **What I am not claiming:** that any particular control algorithm is the answer, that observability guarantees controllability, that model-based control is useless, or that this settles the question for every network. The framework returns a shape, not a name. Which lever works for a given network is a `gap` in this package, not a hidden answer. A coverage or compression score is a filter on what gets tried first, never a witness for whether control is possible.
>
> **What would refute the shape claim:**
> 1. Two controllers with identical anchor, habitat contact, lever and channel, but different internal-model completeness, produce different ground outcomes.
> 2. A case where the target variable has no anchor that fails to move when the model changes.
> 3. A lever is introduced, contact is maintained, and the residual does not change at any controlled node.
> 4. The needed leverage is underivable from every available differing closure and unreachable at this budget. That converts the specific case to `unreachable` and refutes any universal "yes".
>
> I wrote these before sending this. If any one holds, I will retract or narrow the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figures text extract with line numbers (local): `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`
> - Data-driven control of complex networks, Baggio, Bassett and Pasqualetti, Nature Communications 12:1429 (2021): https://www.nature.com/articles/s41467-021-21554-0
> - Controllability of complex networks, Liu, Slotine and Barabasi, Nature 473:167-173 (2011): https://www.nature.com/articles/nature10011
>
> **If you want to use the machinery:** the formula is in the local formula file. Run it on a problem you know well and can check against a ground. Write down what would refute your result **before** you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> - Isaiah / Project Pathfinder

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, framework second | Fig 10 :52 "Bring a characterised residual, never the source." Frames range against the ground separately (Fig 2 :45). |
| Do not ask for agreement | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | The formula's Direction rule: commit the prediction before the run so the preference becomes a refusable term. |
| Mode on every substantive claim | `THE_FORMULA.md`: "Mode. general · specified · grounded. State which." |
| No named control algorithm | Fig 9 :32 "you get a kind of thing, never the answer itself" |
| Coverage called a filter | Fig 9 :60: filters for budget, witnesses for verdict |
| Links only after stage 1 | Fig 4 :22 "Only methods cross up. Only head starts come down." A recipient who has absorbed the framework before the verdict has joined the frame being checked (Fig 10 :42). |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*, read 2026-11-22: prestige can fund an action but cannot settle it; only the ground can settle it. |
| One-to-one, not bulk | Fig 7 :13 "agreement compounds, evidence does not"; Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" |
| Report failures welcome | A failure is a correction on shape, which is what an outside seat is for. |
