# Outreach draft - check the residual first, then decide about the method

**Use:** one-to-one, or as a cover note attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim in `01_figure_grounded_audit.md` §4 and the three sub-claims in `08_expert_verification_packet.md` have been checked against the verbatim figure lines. The output must survive validation or the two-stage offer collapses on contact.

---

**Subject:** One claim about bandwidth allocation to check before you see the method

> Hi [name],
>
> I have one specific claim about how a communication system should allocate a finite bandwidth and power budget. I am not asking you to read the framework first, and I am not asking you to agree with me. If the claim does not survive, there is nothing else to look at.
>
> **The effect, stated first.** The question "accuracy, speed, robustness, energy" is a bundle of overlapping conditions, not four shares of one pie. Accuracy and robustness are both correctness claims over different channel states. Speed is a rate and energy is an expenditure. Two of the four are bond properties, two are different currencies. So the first output is not a percentage split. It is a rule: unbundle the conditions, set a floor on each one, measure the failure per message and per channel state rather than as a fleet average, and buy robustness as independence between low-overlap paths rather than as repeated copies. The amount of independence is priced by the cost of being wrong, which the communication frame does not own.
>
> **What would refute it.** I wrote these down before sending this:
> 1. show the four goods are one measurable quantity with one anchor, so no unbundling is needed;
> 2. show an averaged quality metric identifies the failing slot under correlated errors;
> 3. show repetition copies stay independent under the actual failure mode, so disjoint paths or interleaving buy nothing;
> 4. show a weighted objective with no explicit floors keeps every live slot above every minimum.
>
> If any holds, I retract the corresponding claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **What I am explicitly not claiming:** I am not giving you a numeric split. No channel law, power ceiling, latency deadline, or cost of being wrong came with the question, so a split is not derivable here. That is a `gap` in the derivation, not a number I am hiding. I am also not claiming that a committee's agreement settles any of this. Agreement among frames sharing one evidence pool is the pool talking.
>
> **If it survives, and only then:** here are the public sources I actually read. They are secondary corroboration, not the authority. The figures and the formula are primary and sit in the framework repository; a local canonical extract with line numbers is in this package's ledger.
> - Rate-distortion theory, the rate versus distortion frontier: https://en.wikipedia.org/wiki/Rate%E2%80%93distortion_theory
> - Shannon-Hartley theorem, the rate versus bandwidth and power frontier: https://en.wikipedia.org/wiki/Shannon%E2%80%93Hartley_theorem
> - Multiple description coding, independent descriptions on disjoint paths: https://en.wikipedia.org/wiki/Multiple_description_coding
> - Finite-time Landauer limit, why speed enters the energy cost: https://en.wikipedia.org/wiki/Landauer%27s_principle
>
> **If you want to reuse the method:** the eight-step formula is in the framework figures. Run it on a channel you know well and can check against a measurement. Write down what would refute your result *before* you run it, and label the mode of what you get. A reported failure is more useful to me than a reported success.
>
> - [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Effect and refuter before theory | Fig 10 :52 - *"Bring a characterised residual, never the source."* Fig 2 - frames range against the ground separately. |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Standing instruction: a falsifier written before the run is a design instrument. |
| Mode stated on the claim | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| Numeric split withheld and named as `gap` | Fig 8 :39 - *"So a search that finds nothing is never a proof of absence."* Fig 13 :134 - *"Unreachable is a verdict here, not a silence"* |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action... but it cannot settle an action. Only the ground can settle it."* The ask gives the claim a budget to be tried; it does not ask anyone to endorse it. |
| Sources only after a verdict is recorded | Fig 10 :42 - *"A verifier that can reconstruct the claim cannot verify it."* Seat 4 must not hold the interiors. |
| Offer the formula as a method to reuse | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask each user to state their own ground and refuter | `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question, because the shape it seeks is not a term it holds. |
