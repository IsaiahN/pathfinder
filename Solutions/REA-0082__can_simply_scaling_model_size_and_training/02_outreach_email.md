# Outreach draft: check the output before you decide about the theory

**Use:** one-to-one, or as a cover letter for a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the stage-1 output below survives the reader's own refutation. The offer collapses on contact if the output cannot be checked.

---

**Subject:** One checkable claim about scaling and new capabilities

> Hi [name],
>
> I have one output I would like you to check against what you already know. I am not asking you to read a theory first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`).** Take a model family at increasing scale (parameters, tokens, compute) and track a held-out task slot s, not just the average loss. The claim is a split of the question into two cases:
>
> 1. If the capability is already expressible from what the learner holds but was not found at a smaller scale, more scale is the right remedy. It visits more of the same reach. Calling that "new" is a statement about our surprise, not about a new kind of term.
> 2. If the capability requires a primitive or a relation the learner does not hold, more scale cannot produce it. Composition inside a closed set never adds an atom, however long it runs. Something has to be imported from a frame whose closure differs: a new objective, a new interaction, a new instrument.
>
> The framework's own words for the second case: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." And for the first: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."
>
> **What I am not claiming:** that any particular observed jump is case 2. Telling the two apart needs a per-slot ground measurement and a metric that would survive a change of evaluator. A curve alone cannot do it, because "Aggregating across slots is how a live signal disappears into an average." I also have no name for the principle that case 2 would require. The framework returns a shape, not a name. My verdict on the branch assignment is recorded above, before any theory is shown.
>
> **What would refute the claim.** I wrote these down before writing the rest:
> 1. A new atom or relation appears purely by scaling inside the same closure, with no import.
> 2. A per-slot jump is fully predicted by a continuous aggregate loss curve, across two model families with different data, with no new ground measurement.
> 3. Capability improves with scale while contact with the ground is independently measured as unchanged.
> 4. One operation closes both cases without anyone having to say which case is live.
>
> If any one holds, I retract the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures, not my summary of them, are the authority.
> - Verbatim figure text with line numbers (local framework extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Figures README, canonical usage rule: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - The eight-step formula and mode rule: https://github.com/IsaiahN/tether/tree/general-agent/figures
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52: "Bring a characterised residual, never the source." Frames range against the ground separately. |
| No request for agreement | Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter before conclusion | Formula step "Direction": make the sought-for shape an ordinary term so it is refusable. |
| Mode on every claim | THE_FORMULA: "Mode. general · specified · grounded. State which." |
| No name for the new principle | Fig 9 :32: "you get a kind of thing, never the answer itself"; Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." |
| Aggregate loss demoted to a budget filter | Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." |
| No "breakthrough", no "true answer", no "trust" | Fig 2 :40: shared-pool agreement is disqualifying for a verdict; Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." |
| Offer the formula as a method, not a result | Fig 4 :22: "Only methods cross up. Only head starts come down." |
| Ask readers to state their own ground and refuter | Fig 11 :40: capability is agent-and-habitat, so a method needs a habitat and a ground at each use. |
| One-to-one, public venues only | Fig 2 :40 and :42: buy independence in proportion to the cost of being wrong; a mass send selected for agreement is one pool talking. |

**Legal and practical note.** The venues in `03_public_contact_points.csv` are public submission or contact routes. Nothing is sent by this agent. An unsolicited bulk send to private addresses would breach GDPR and CAN-SPAM style rules in many jurisdictions and would blacklist the sending domain, on top of the structural failure above.
