# The Tether's answer: reliability under a code-adapting adversary

**Mode: `specified` on the shape claims, `general` on the cited laws, `gap` on the identity of any single winning scheme, nothing `grounded`.** This is a simulated derivation checked for internal consistency against the figures, not a ground reading (`05_what_shape_means.md` §7). It cannot settle the question it reports on.

## 1. The residual it answers

Reliability is R = |Γ(b,a) − o′| per message slot (Formula step 1). The question asks whether R can stay near zero when the channel is shaped by an adversary that reads and adapts to Γ. The residual is a **union compound**, not one hard question: C1 is a code that works under noise, C2 is a channel that does not update on the code. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* A better code clears C1 and leaves C2 standing.

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* An adaptive adversary targets a slot; a pooled average error hides it (Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*).

## 2. The shape

1. **The adaptive channel is a frame, not an anchor.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* A channel that changes when the code changes fails that test. Fig 2 :34: *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."* The real anchor is the decoded-versus-sent message at the receiver, a counter that does not update on any frame's opinion.
2. **A code-aware adversary overlaps the sender's closure.** Fig 8 :48-49: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."* So "the adversary will not find the code" is not a security argument; it already holds the code.
3. **Reliability requires an import from a differing closure.** Fig 6 :14 calls import *"the only operator that moves the wall"*, and Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."* The resource is a variable the adversary cannot read: shared secret randomness, a private key, an authenticated or unforgeable channel, or a physical-layer asymmetry. The framework returns this as a shape, not a name (Fig 9 :32: *"you get a kind of thing, never the answer itself"*).
4. **The import is debited and gated.** Fig 8 :12-13 names *"source gate: provenance"* and *"shadow test: explains a gap"*; Fig 6 :24: *"Import from a live peer is debited against that frame’s independence. A wrong atom costs more than starting from primitives."* A standard cryptographic assumption smuggled in without provenance is a wrong atom.
5. **The channel decays; keeping the anchor reachable is a seat's office.** Fig 10 :24: *"the ground does not decay, the channel does."* Running the coding loop faster does not restore contact. Fresh keys, authentication and physical asymmetry are ground-maintainer moves.
6. **The code is a bonded arrangement.** Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Two codes with the same alphabet and redundancy can behave differently under a code-aware jammer because the arrangement, not the ingredient list, is what the adversary reads (`06_isomers_and_order.md`).
7. **Order matters.** Refuse "channel is an anchor" before minting a better code (Formula step 2: *"a term held is false; what is owed is a refusal, not an explanation"*), import with gates before minting, and settle only at the ground (step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."*).

## 3. Verdicts per domain, kept separate

| domain | verdict | status |
|---|---|---|
| D1 Sender-receiver code loop | A code works under a fixed channel; reliable transmission is achievable there. This is not the question asked. | `general` shape, triangulated (Fig 1 and Fig 12 plus Shannon 1949) |
| D2 Adaptive channel as a frame | The channel is not an anchor. Code-only composition cannot guarantee worst-case reliability when the adversary can mirror the code. | `specified`, triangulated (Fig 2, Fig 8, Fig 10) |
| D3 Verification at the receiver | The anchor is the decoded-versus-sent counter, held separately and reported per slot, never a self-reported average. | `specified`, single-source in the figures (Fig 10), corroborated by Wyner 1975 |
| D4 Import of an unreadable resource | Reliability is restored, where it is restored, by a differing closure the adversary cannot access, with provenance and a shadow test. | `specified`, triangulated (Fig 6, Fig 8, Fig 11); corroborated independently by Lamport et al. 1982 |

No verdict is averaged across domains. `gap`: which specific resource, code, key length or list size wins for a declared channel is not named by any figure line after a genuine re-census (Fig 9 :32; Fig 13 :134-135). Unreachable is a verdict, not a silence.

## 4. What it explicitly does not say

- Not that reliability is impossible in principle. It is impossible **with the code alone** against an adversary that can mirror the code, when no unreadable resource is imported. Adversaries that cannot mirror it admit positive code-only rates.
- Not that a particular cipher, key length, hopping pattern, list size or power constraint is the answer. The framework returns a shape, not a name. Those are provenanced bindings from engineering frames.
- Not a capacity number for any real channel. No measurement at a declared threshold was taken.
- Not that the average error probability is a verdict. It is a pooled reading, and several mechanisms can produce it (Fig 1 :22; Fig 10 :26).
- Not that this derivation settles anything. It is simulated and `specified`, never `grounded`.

## 5. What would settle it, and the standing falsifiers

**The ground:** a receiver counter at a declared channel family, adversary model and threshold, with per-slot residuals and a declared independence statistic between sender and adversary. A source-discriminating instrument, not another argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer settled it, not a further argument.

**Pre-registered refuters** (written before this conclusion in `01` section 4; repeated here so they are visible):

1. the channel statistics are invariant under code changes while the adversary adapts;
2. the adversary's jamming is independent of Γ under a declared statistic;
3. a deterministic code achieves a positive worst-case rate against a fully code-aware symmetrizing adversary with no shared secret, no authenticated channel, no list decoding and no state or power constraint;
4. adding a genuinely private resource leaves per-slot R unchanged;
5. a sustained measurement shows the targeted slot has no larger residual than the mean.

If any fires, the shape is withdrawn or narrowed in a visible retraction. Prestige or agreement cannot fire any of them (Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."*).

## 6. The honest stop

**Unreached, not unreachable.** The resource that makes the shape concrete is a choice, and *They're Scanning Books* warns that *"Declaring the primitives does not make them neutral. It makes the choice visible."* The answer stops where instruments can no longer distinguish, and records the lineage so the stop is checkable. *How Intelligence Actually Works*: *"The recursion converges toward indiscernibility, and indiscernibility is not identity."* One strain remains live and named in `06` and `11`: the operand type of ⋛ when reliability is a worst-case over channel states rather than a plain average.

## 7. One-paragraph version for outreach

> The Tether does not name a winning code, and it does not say reliable communication is impossible. It says that a channel which adapts to the code is no longer a fixed background: it is another frame, and a frame that reads your code cannot corroborate or be designed against as if it were noise. The reliability signal has to be reported per message slot, because an average hides the slot the adversary targets. Against an adversary that can mirror the code, the code alone cannot carry a positive worst-case rate; what changes the situation is an import of something the adversary cannot read, a shared secret, an authenticated channel or a physical asymmetry, brought in with its provenance and a stated reason, then settled at a receiver counter at a declared threshold. The framework gives that shape and the refuters written in advance; it does not give the key length, the code or the rate. The specific member stays open until a ground settles it.
