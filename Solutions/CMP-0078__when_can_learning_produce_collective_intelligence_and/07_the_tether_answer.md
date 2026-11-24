# The Tether's answer: when does learning produce collective intelligence?

**Mode: `general` on the shape, `specified` on the four conditions. Not `grounded`.** Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading. It cannot settle the question it reports on.

## 1. The residual it answers

The fork is a union of two overlapping conditions, not one question about "more learning" (Fig 9 :54-56). Given many agents that each learn from experience, the observable to predict is whether the collective's error against a ground falls, or whether internal agreement rises while error against the ground stays flat. Agreement is not a reading of the ground; it is a reading produced by the frames themselves. Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

## 2. The answer, kept per domain and never averaged

### D1, the single learning loop

Learning inside one agent mints terms against a per-slot residual and settles them only when the ground pays. Fig 1 :19: "The residual is indexed by object slot, not aggregated." A global score near zero with one live slot is a legal state (Fig 1 :13), so the agent that "looks fine overall" may have a live, unaddressed error. This domain is necessary but not sufficient for collective intelligence.

### D2, the population

Learning produces collective intelligence in this domain only when all four conditions hold together:

1. **The objective is ground error, not agreement.** Fig 1 :23: "The ground enters as the only metric." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
2. **Residuals stay per slot.** Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Average a prediction against a ground if you like; never average the search signal.
3. **Frames are independent, and the independence is renewed.** Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are." Fig 10 :80-81: "Frames whose correlation is fixed at origin can only be rotated, because no amount of use makes them less alike and replacement is the only refresh." Headcount is a budget filter, never a witness (Fig 9 :60).
4. **Variants are selected, not blended.** Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 7 :33: "→ variation inside, selection between". Fig 7 :14: "blending: novelty swamped to the mean". Progress per handoff is R = h² × S (Fig 7 :26), the product of bracket fidelity and the ground's pressure; zero either and the chain runs in place.

The anchor is the fifth structural requirement and it belongs to D2 as a whole: Fig 2 :33: "The anchor must not update." If it does, "the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices" (Fig 2 :34).

Learning amplifies shared errors in this domain in exactly two structures:

- **Mutual update, no anchor.** Agents update on one another; the group converges on "whoever had the most influence" (Fig 2 :14-15). Coherent drift, invisible from inside.
- **Common cause.** They never talk and still agree, "so the agreement is the pool talking, not two frames confirming each other" (Fig 2 :18-21).

The two can co-occur. A group can be mutually updating *and* trained on one corpus, in which case both mechanisms bind and the compound is categorically different from either (Fig 9 :57).

### D3, the design and verification seat

Capability is not in the agents. Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

So "when can learning produce collective intelligence?" receives its shortest answer here: **when the learning changes contact.** New instruments, newly independent frames, a pinned anchor, a selection rule, or a redirected habitat. More training on the same evidence leaves contact unchanged and changes nothing however much it improves. The design seat must also keep the objective link instrumented: Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

The outside checker is disqualified if it can reconstruct the claim: Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." This is why the packet in `08` carries the residual and refuters before the theory.

## 3. What it explicitly does not say

- Not that a larger crowd is wiser. Independence, not headcount, is the parameter (Fig 6 :53-54).
- Not that averaging is always wrong. Averaging independent predictions against a known ground is a legitimate use of R; averaging the per-slot search signal is not (F4 in `01`).
- Not that independence means silence. Fig 2 panel 2 is the case of frames that never talk and still agree. Independence is about evidence pools.
- Not a universal threshold for overlap, a named platform, or a "collective intelligence quotient". The framework returns a shape, not a name (Fig 9 :32).
- Not a verdict about any particular crowd. No measurement was taken here.
- Not that prestige or agreement can settle it. *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action."

## 4. What would settle it: the ground tests

Four falsifiers were written before the derivation (`01` section 4). Restated as measurements:

1. **Mutual-update test.** Build a collective whose members update only on one another, with no external ground. Score it against a separate held-out ground each round. Track pairwise evidence overlap. A sustained fall in held-out error over more than three rounds with overlap above 0.8 refutes the coherent-drift prediction.
2. **Correlated-origin test.** Give a set of frames provably identical training data. Add rounds without replacement or new experience. Accuracy gain refutes the rotation claim (Fig 10 :80-81).
3. **Blend test.** Compare a blend of independent models against selection between rooms on the same held-out ground at equal action budget, while logging a per-slot residual. A blend that matches or wins while the residual stays readable refutes F4.
4. **Agent-only test.** Improve only the agents' internal libraries, holding habitat and all contact fixed. A move in ground-measured collective error refutes Fig 11 :40.

Two instruments already return something and can be improved rather than invented (Fig 6 :32): separation of held-out ground error from internal agreement, and pairwise evidence overlap. Lorenz et al. 2011 (PNAS) measured the first divergence experimentally: "social influence triggers the convergence of individual estimates and substantially reduces the diversity of the group without improving its accuracy", and "This confidence gain happens despite a lack of improvements." That is a world witness for the shape, not the verdict.

A third, framework-internal ground test comes from *How a Society of Agents Would Work*: "Three tests against the ground would settle it. Does an agent born into the shared store reach its first level in fewer moves than one starting alone? Does that hold on kinds of game the store has never seen? Does adding agents with different experience help more than adding copies?" The third is the direct test of the independence condition.

## 5. The honest stop

**Unreached, not unreachable.** The conditions are stated; their values for any real system are not measured here. The canonical README limits the framework to "what a missing thing would have to look like (a shape, not a name)" and says it "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." Fig 11 :71-72 records the live empirical caveat: the capability claim "fit cases already known and have not been tested forward, so they can still come back wrong: an agent-only improvement that moved the ground would refute the capability claim." That caveat is kept visible, not smoothed over. "Indiscernibility is not identity."

Verdict: `candidate`, `general` on the shape, `specified` on the conditions. Moved to `grounded` only by one of the ground tests above.

## 6. One-paragraph version for outreach

> The Tether does not say that more learning, or more agents, makes a group smarter. It says that collective intelligence and shared-error amplification are two different bonds between the same kinds of agents: independent frames ranging against a ground that cannot move, selected between by the ground, versus frames that update on one another or share one evidence pool until they agree without learning anything. Four conditions have to hold together: measure error against the ground, not agreement; keep residuals per slot instead of averaging them into one score; keep evidence independent and renew that independence by separate experience; and select between variants rather than blending them into a mean. When learning changes those things, it can produce collective intelligence. When it only changes the agents' internal libraries, contact is unchanged and so is capability, however much the group improves by its own lights. This is a shape with refuters written in advance, not a result about any particular crowd. The measurements that would close it are named in the packet.
