# Outreach draft: check the output first, then decide whether the framework is worth reading

**Use:** one-to-one, or as a cover note attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the claim and the three refuters in `08_expert_verification_packet.md` survive your own check. The two-stage offer collapses on contact if the stage-1 output does not hold.

---

**Subject:** Check one claim about network measurement before you decide whether the method is worth reading

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to read the framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The question in effect terms.** Which network measurements remain reliable when data are incomplete, sampled unevenly, or collected through biased platforms? The output does not answer that with a ranked list of measures. It says the question as asked is missing two terms: the collection channel and an independent ground. Reliability is a property of a measure together with a channel and a ground, not of a measure alone. That is the same structural move as saying capability is a property of agent and habitat, never of the agent alone.
>
> **The claim (`specified`, not `grounded`).** Four things follow, each checkable on its own:
>
> 1. A global network statistic cannot certify that individual slots are right. A whole-graph average near a reference value is a legal state with materially wrong nodes underneath it. What must be reported is the residual per node, edge, or region.
> 2. A metric published by the platform that collected the data scores itself. It is a frame, not an anchor, because its value changes with the platform's ranking rule. It can be used only when ranged against an independent enumeration.
> 3. Incomplete, uneven, and biased are three overlapping conditions, not three severities of one condition. One correction clears the places where only one condition holds and leaves the intersections standing. Each condition and each intersection needs its own check.
> 4. The gap between the measurement on the observed graph and the measurement on the true graph must be measured, not assumed zero. The channel loses information; the ground does not.
>
> **What I am not claiming.** I am not saying which named measure wins. I am not saying degree is reliable or betweenness is not. I am not saying platform data must be thrown away. I am not saying all global statistics are wrong. The framework returns a shape any reliable measurement must have, not a name. A ranking needs an independently enumerated ground network and measured per-slot residuals. I have not measured one.
>
> **What would refute this, written down before I ran it:**
>
> 1. A named measure whose per-slot residual stays near zero under all three defects against an independently enumerated ground, with two low-overlap channels.
> 2. A global aggregate that moves materially whenever any single live slot moves materially, under all three defects.
> 3. A platform-published metric invariant to the platform's own ranking rule, verified against an independent enumeration.
> 4. One correction that drives the residual to zero for all three conditions and their intersections.
>
> I wrote these before running anything. If any one holds, I retract the corresponding claim. A one-line "this fails because ..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the sources. The figures are the authority, not my summary of them.
>
> - Figures and formula for direct download: https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Canonical figures usage rule: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - Worked architecture essay: https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec
>
> **If you want to reuse the method:** run the same loop on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, framework second | `Fig 10 :52` "Bring a characterised residual, never the source." The recipient checks the output without holding the framework's interior. |
| Do not ask for agreement | `Fig 2 :35` "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | Seat rule: "a falsifier written before the run is a design instrument, not only an honesty device." |
| Mode on every claim | `THE_FORMULA.md`: "Mode. general · specified · grounded. State which." |
| No ranking of named measures | Figures README: "what a missing thing would have to look like (a shape, not a name)". `Fig 9 :32`: "you get a kind of thing, never the answer itself". |
| Platform metric treated as a frame, not discarded | `Fig 2 :45` "Frames range against the ground. They do not negotiate with it." `Fig 2 :47` "A ground listed as one of the parties has already become a frame." |
| Union, not one lever | `Fig 9 :57` "a case in two conditions is not a harder case of either". |
| Per-slot residual, not a global average | `Fig 1 :22` "Aggregating across slots is how a live signal disappears into an average." |
| Round-trip gap measured | `Fig 4 :30` "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." |
| No request for trust or prestige | Recursive Self-Improvement Trap: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Links only after stage 1 | `Fig 10 :42` "A verifier that can reconstruct the claim cannot verify it." Their verdict on stage 1 is recorded before any theory is shown, and later agreement is never pooled as corroboration (`Fig 2 :40`). |
| Offer the method, not the answer | `Fig 4 :22` "Only methods cross up. Only head starts come down." Each user writes their own refuter and states their own mode. |
