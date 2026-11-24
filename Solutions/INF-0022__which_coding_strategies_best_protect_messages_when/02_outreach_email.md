# Outreach draft: check one output before deciding about the framework

**Use:** one-to-one, or as a cover note attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the cost claim in `08_expert_verification_packet.md` sub-claim C3 has been checked against your own channel data. The two-stage offer collapses on contact if the stage-1 output does not survive.

---

**Subject:** One checkable claim about correlated errors and coding, no theory attached

> Hi [name],
>
> I have one specific output I would like you to check against what you already know about coding for channels with memory. I am not asking you to read the framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`).** When errors are correlated, the corrupted symbols in a burst are not independent witnesses to the noise. They are several readings of one event, a scratch, a fade, a lightning stroke. Coding analysis that treats them as independent errors is aggregating a live per-symbol signal into a global bit error rate. The framework's rule is that the residual is indexed per slot and never aggregated, and that correlation is disqualifying for a verdict when the agreeing readings share an evidence pool.
>
> That gives a shape, not a leaderboard. A strategy that protects a message on a correlated channel should:
> 1. break the shared pool by rearranging symbols, so one physical burst becomes separate correctable events at the decoder;
> 2. work at the scale where the burst is already one symbol, rather than counting its bits separately;
> 3. mark uncertain positions as erasures where the code allows it;
> 4. be priced against a declared channel and metric, with rate, memory and latency held separate.
>
> It does **not** name a winning code. The framework returns a kind of thing, never the answer itself. Reed-Solomon, Fire codes, LDPC and interleaved convolutional codes are candidates from your field, not outputs of this derivation. Any name I attach to the shape is my import and carries no figure-derived weight.
>
> **What would refute it:**
> 1. a burst whose errors are statistically independent at the decision scale on a measured channel, so there is no shared pool to break;
> 2. an equal-redundancy reordering of symbols that leaves the corrected burst length unchanged on that channel;
> 3. a single code family that dominates across both memoryless and correlated channels on one declared metric, with no arrangement change;
> 4. a strategy whose latency and memory cost exceeds the residual burst failures it removes under a declared budget.
>
> I wrote these down before writing this email. If any holds, I will retract the affected claim. A one-line "this fails because..." is more useful to me than agreement. A pointer to a channel trace or a counter-example is better still. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** I can send the sources. The verified public starting points are:
> - Burst error-correcting codes, including burst bounds, Fire codes, Reed-Solomon burst capacity and interleaving: https://en.wikipedia.org/wiki/Burst_error-correcting_code
> - Burst error and the Gilbert-Elliott two-state channel model, with the original Gilbert and Elliott references: https://en.wikipedia.org/wiki/Burst_error
> - Reed-Solomon error correction, including the burst trade-off and the compact-disc concatenation: https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction
>
> These are offered as the field's own checkable record, not as evidence for the framework. The figures, not my summary, are the authority.
>
> **If you want to use the method:** the formula is public at the figures link below. Run it on a channel you know and can measure. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52  -  *"Bring a characterised residual, never the source."* The reader checks the shape without holding the framework's interior. |
| Do not ask for agreement | Fig 2 :35  -  *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287  -  *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on the output | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| No code named as the winner | Fig 9 :32  -  *"you get a kind of thing, never the answer itself"*; X1 has no nameable anchor. |
| The burst is described as a shared pool, not a bigger error rate | Fig 2 :20-21  -  *"so the agreement is the pool talking, not two frames confirming each other"*; Fig 1 :22  -  *"Aggregating across slots is how a live signal disappears into an average."* |
| Cost held separate from benefit | Fig 12 :126  -  *"A composition costs in two currencies, and they do not add."* |
| Links come after the verdict | Fig 4 :22  -  *"Only methods cross up. Only head starts come down."* A link sent before a verdict is a recording, not a generator. |
| No request for trust or prestige | Recursive Self-Improvement Trap essay: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Ask readers to state their own ground and refuter | THE_FORMULA.md "Direction": a frame *"cannot check the direction of its own question"*; the Arrival of the Fittest article warns outputs *"could never be verified if the solutions presented were not contrived to fit the formula."* |

## Distribution rule

One to one. No BCC list, no mailing list, no sequence of follow-ups that depends on whether the recipient agreed. If a recipient returns a refutation, copy it into `11_audit.md` with provenance and have the auditor seat re-evaluate it as if it came from any other source (Track B rule in `PLANS/00_MASTER_PLAN.md` §9: a reply is a conversation, never corroboration).
