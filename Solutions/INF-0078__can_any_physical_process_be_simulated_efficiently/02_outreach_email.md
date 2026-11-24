# Outreach draft: check one output before you decide whether the framing is worth reading

**Use:** one to one, or as a cover letter attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send. Nothing in this folder is sent by this agent.

**Hard precondition:** do not send until the corrections R1 to R6 in `01_figure_grounded_audit.md` section 8 are reflected in the text you actually use. The output must survive validation or the two-stage offer collapses on contact.

---

**Subject:** One checkable output on simulation efficiency, before any theory

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to read a framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** the question "can any physical process be simulated efficiently?" bundles at least five different conditions, not one yes/no. The conditions have different anchors and cannot be averaged:
>
> 1. whether the prediction is reachable inside the simulator's current primitive set at all;
> 2. the cost of the description, in bits, and the cost of finding out whether the prediction holds, in actions. These are two currencies and do not add;
> 3. whether the channel to the physical ground is still reachable, given that a simulation is a substituted habitat and proves wiring rather than capability;
> 4. whether a remainder compounding through the dynamics amplifies small errors, which is the chaos case;
> 5. whether the property asked about is underivable in principle, as with the general spectral gap problem, rather than merely unreachable at this budget.
>
> The shape that survives is: a per-slot, per-currency relation between a simulator and a ground that does not update on what the simulator reports. It refuses a universal efficiency guarantee, because such a guarantee would be a final frame with no outside left to import from. It also refuses a universal "some things always resist", because that would freeze a habitat and forbid a future import.
>
> **What I am not claiming:** that any named algorithm is the winner; that quantum simulators are always faster than classical ones; that chaotic systems cannot be simulated usefully (statistics of an attractor can be well-conditioned even when an exact trajectory is not); or that an undecidable general problem makes every particular instance undecidable. The framework returns a shape, not a name.
>
> **What would refute the shape claim (written before this message was sent):**
> 1. a simulator whose prediction pays at a non-updating ground with no channel to that ground;
> 2. a simulator accepted as settling its own correctness from the same record that produced the prediction;
> 3. a composition inside a fixed primitive set shown to add a new primitive;
> 4. a bounded-precision scheme that tracks the exact reference trajectory of a positive-Lyapunov system over unbounded time;
> 5. a uniform terminating algorithm for the general spectral gap problem;
> 6. two simulation strategies over the same atoms and bonds shown to be one term in both currencies;
> 7. a transform across scales shown to be exactly reversible, so the round-trip gap is zero.
>
> If any holds, the part of the claim it touches is withdrawn. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed. If you do reply with a verdict on stage 1, I will record it before showing any theory.
>
> **If it survives, and only then:** the public sources are below. The figures are the authority, not my summary of them.
> - Canonical figures and formula, branch `general-agent`: https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Feynman's "Simulating Physics with Computers" (1982), bibliographic record and open review: https://arxiv.org/html/2405.03366v1
> - Undecidability of the spectral gap (Cubitt, Perez-Garcia, Wolf 2015): https://www.icmat.es/news/highlighted-papers/paper-04-15
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52, "Bring a characterised residual, never the source." A reader who holds the framework's interiors before giving a verdict has joined the frame being checked. |
| Do not ask for agreement | Fig 2 :35, "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | A falsifier written before the run is a design instrument, not only an honesty device. Seven are listed. |
| Mode stated on every claim | `THE_FORMULA.md`: "Mode. general · specified · grounded. State which." |
| A union of conditions, not a dichotomy | Fig 9 :55, "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." |
| Two currencies, not one efficiency number | Fig 12 :125, "A composition costs in two currencies, and they do not add." |
| A wiring result is not a capability result | Fig 11 :70, "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." |
| Underivable and budget-limited kept apart | Fig 8 :40-41, "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions." |
| No last simulator | Fig 7 :6, "the limit: no last room" |
| Links only after the stage-1 verdict | Fig 4 :22, "Only methods cross up. Only head starts come down." Sending the architecture first sends a recording, not a generator. |
| No request for prestige or trust | *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Shape, not a name | Fig 9 :32, "you get a kind of thing, never the answer itself" |
| Honest status of this whole email | *The Recursive Self-Improvement Trap*: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." This email is a simulated derivation, not a ground reading. |
