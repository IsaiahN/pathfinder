# Outreach draft: check the shape before you decide about the number

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim below has been checked against the refuter in section 4 of `01_figure_grounded_audit.md`. If the shape does not survive, there is nothing else to offer.

---

**Subject:** One checkable claim about early-warning false alarms, before any theory

> Hi [name],
>
> I have one specific claim I would like you to check against what you already know. I am not asking you to read any framework first, and I am not asking you to agree with anything. If the claim does not survive, there is nothing else to look at.
>
> **The question I started from:** how often do rising variance or slower recovery falsely signal an approaching transition?
>
> **The claim (`specified`, not `grounded`):** there is no single answer to that question in the sense of one percentage. A false-alarm rate is a per-system, per-indicator curve. It depends on where the decision threshold sits, on how common transitions are in the systems being examined, and on which look-alike conditions (large deviations, noise-induced shifts, a rapidly moving control parameter, a benign bifurcation) were in the set. The same indicator at the same tolerance has been reported at very different false-alarm rates in different datasets. So the rate has to be reported as a curve with its base rate and its list of conditions stated, and each alarm has to be scored against whether a transition actually followed. Agreement among researchers that an alarm was false does not settle that; only the realized transition does.
>
> **What I am explicitly not claiming:** that early warning signals are useless, that they are always unreliable, or that any particular percentage is "the" false-alarm rate. I am also not claiming that variance and recovery are two independent confirmations. They are both consequences of slowing down, so their agreement is one witness read twice.
>
> **What would refute the claim, written down before I sent this:**
> 1. A labelled ensemble on which one scalar false-alarm rate is invariant across system class, indicator, threshold and base rate of transitions.
> 2. Evidence that rising variance and slower recovery are conditionally independent given the true state and the control-parameter trajectory.
> 3. An agreement-only calibration of alarms that matches ground calibration on held-out systems.
>
> If any of those holds, I will narrow or retract the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the sources. The figures, not my summary of them, are the authority.
> - Quantifying limits to detection of early warning for critical transitions (Boettiger and Hastings, 2012): https://pmc.ncbi.nlm.nih.gov/articles/PMC3427498
> - No early warning signals for stochastic transitions (Boettiger and Hastings, 2013): https://arxiv.org/html/1307.4415v1
> - Signal detection theory reference (sensitivity, criterion, ROC): https://en.cognitivepsychology.com/Signal_Detection_Theory
>
> **If you want to use the method:** the figures and the formula are public. Run the loop on a problem you can check against a ground, write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Claim and refuter first, theory second | Fig 10 :52 : *"Bring a characterised residual, never the source."* Fig 2 :45 : *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement or trust | Fig 2 :35 : *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287 : *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on the claim | `THE_FORMULA.md` : *"Mode. general · specified · grounded. State which."* |
| No universal percentage asserted | Fig 1 :19 : *"The residual is indexed by object slot, not aggregated."* |
| Ground, not consensus, scores an alarm | Fig 7 :35 : *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* |
| Two indicators not counted as two witnesses | Fig 2 :40 : *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* |
| Links only after stage 1 | Fig 10 :42 : *"A verifier that can reconstruct the claim cannot verify it."* Seat 4 must not hold the interiors before giving a verdict. |
| Offer the formula as a method, not an answer | Fig 4 :22 : *"Only methods cross up. Only head starts come down."* |
| Ask users to state their own ground and refuter | `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question; the sought-for shape must be made an ordinary term. |

## What is deliberately not in the message

- No request to endorse the Tether framework, no claim that it settles an empirical frequency.
- No "bombshell", no "the true answer", no "trust me".
- No list of people selected for likely agreement. Fig 2 :39: *"Correlation has valence."*
- No personal data beyond the recipient's name. One-to-one only, with an opt-out line.
