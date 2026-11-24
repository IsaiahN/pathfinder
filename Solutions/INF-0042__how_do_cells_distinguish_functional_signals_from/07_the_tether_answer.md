# The Tether's answer: how cells distinguish functional signals from molecular noise

**Mode: `specified` on the shape, `general` on the structural rules, `gap` on the molecular mechanism. Not `grounded`.** Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading. It cannot settle the biological question it reports on.

## 1. The residual it answers

A receptor binding event gives the same kind of reading whether the ligand arrived because the environment changed or because of a thermal fluctuation. The reading cannot name its source. The cell must commit or ignore, and both errors cost. In a changing environment the same molecule can flip from signal to noise as the cell's state changes. The question bundles at least four conditions (transient versus sustained, intrinsic versus extrinsic, this channel versus another, this time scale versus another), so it is a **union compound** and needs its own loop, not one lever (Fig 9 :4-5, :54-58).

## 2. The shape: what any working discriminator must have

1. **Resolve per slot, not by a global average.** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."* Time averaging of one receptor is allowed; collapsing distinct receptor classes into one scalar is not. (F1)
2. **Range against a ground that does not move with the cell's model.** Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* What settles the discrimination is what the response pays at the ground. (F3)
3. **Use time or an independent second channel.** Fig 3 :5 *"the system can tell what is in front of it, and tell it apart from what was there before"*. Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence."* Two channels reading the same fluctuation are one witness with two names. (F4, F5)
4. **Pay in two currencies that do not add.** Fig 12 :125 *"A composition costs in two currencies, and they do not add."* Bits price the description, actions price the delay and the test. (F5)
5. **Noise is the discarded detail of a crossing.** Fig 13 :32 *"the detail a crossing discards reappears above it as noise."* Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."* Signal and noise can be isomers: same atoms, different bond to the ground (`06`). (F2)
6. **Keep the channel reachable.** Fig 10 :24 *"the ground does not decay, the channel does"*; Fig 10 :25 *"stale percepts, dropped transients, saturated metrics, pooled readings"*. Receptor adaptation and saturation are channel failures, not a changed world. (F6)
7. **Refuse, not only accumulate.** Operators table :58 *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*. (F9)
8. **Split before searching.** Fig 9 :32 *"you get a kind of thing, never the answer itself"*. The framework gives the constraints; it does not name the pathway. (F7, F10)

## 3. Verdicts per domain, kept separate and never averaged

| domain | verdict | status |
|---|---|---|
| D1 molecular sensing frame | Must be per-slot, must compare over time or across independent channels, cannot decide from a single reading. Triangulated across Fig 1, Fig 3, Fig 10, Berg and Purcell 1977. | `specified`, triangulated |
| D2 environmental ground / habitat | The anchor is what pays; valence is relative to the residual, so a changing environment flips the same molecule between roles. A ground that moves independently of the cell is still an anchor. Triangulated across Fig 2, Fig 11, Elowitz 2002. | `specified`, triangulated, one named fork for a coupled habitat |
| D3 population / evolution | Selection between rooms, not agreement within a room, settles which discriminator persists. New receptor specificities arrive as imports across generations. Triangulated across Fig 6, Fig 7, Fig 11. | `specified`, triangulated |
| D4 maintenance / channel seat | The ground does not decay, the channel does; keeping the anchor reachable is a seat's office. Single-source for the exact split in Fig 10, corroborated by receptor-adaptation biology. | `specified`, single-source |
| D5 the specific molecular pathway | No figure line names a pathway. World sources supply candidates that instantiate the shape, but none is endorsed by the figures. | `gap` at figure level |

## 4. Pre-registered refuter (written before the conclusion, see `01` §4)

The shape claim is refuted if any of the following holds:

1. A cell reliably discriminates a novel signal from a fluctuation from one instantaneous reading of one receptor, with no time comparison, no second channel, and no contact with a ground that would penalise the wrong response.
2. Signal and noise are intrinsic properties of molecules, independent of cell state, environment, and measurement level.
3. A cell certifies from inside its own receptor set that it holds every receptor it will ever need.
4. A discriminator with zero delay, zero dissipation above equilibrium, and zero extra description length achieves arbitrary specificity for near-cognate ligands.
5. The environment's answer to the cell's response is driven entirely by the cell's internal model, with no independent ground component. This is a re-census trigger (add a coupled habitat domain, Fig 11 :73 *"The habitat is not the ground."*), not a refutation of D1 to D4.

## 5. What it explicitly does not say

- Not that the answer is kinetic proofreading, a feed-forward loop, receptor clustering, or any other named pathway. Those are provenanced imports from the biology frame, recorded with author, venue, year, and quote.
- Not that the framework derived a molecular mechanism. Fig 9 :32: *"you get a kind of thing, never the answer itself"*.
- Not that all cells use one discriminator. The question is a union compound; the answer is a family of discriminators.
- Not that "noise" is a kind of molecule. It is the detail a crossing discards.
- Not that more receptors always help. Independence is the parameter, and the two currencies do not add.
- Not `grounded`. No measurement in this folder settles any of the above.

## 6. What would settle it, and the honest stop

A ground reading, not agreement. The relevant instruments are already named in the world sources: two-identical-gene constructs to split intrinsic from extrinsic noise (Elowitz 2002, Swain 2002); perturbation of the delay step to test whether specificity falls as kinetic proofreading predicts (Hopfield 1974, Boeger 2022); input trajectories rather than instantaneous steps to test whether the discriminator's ranking changes with time scale (Tostevin and ten Wolde 2010); and persistence versus pulse tests on the circuit motif (Mangan and Alon 2003, Alon 2007).

The stop is honest: the shape holds as far as the figures and these instruments can distinguish. Unreachable is a verdict here, not a silence (Fig 13 :134 *"Unreachable is a verdict here, not a silence"*). What is missing is not a name we can supply but a ground reading we have not taken. The lineage of the stop is in `01`, `06`, `09`, and `11`.

## 7. One-paragraph version for outreach

> The Tether does not name a molecular mechanism for signal versus noise, and it does not claim to settle how any particular cell works. It says that a reading cannot name its own source, so a single binding event is underdetermined; that detection must be resolved per receptor slot rather than collapsed into one global mean; that the decision must range against a ground that does not move when the cell's own model moves, namely what the response pays; that a discriminator needs time or an independent second channel, because two channels reading the same fluctuation are one witness with two names; and that it pays in two currencies, bits and actions, that do not add. Noise is not a kind of molecule but the detail a lossy crossing discards, so signal and noise can be isomers: same atoms, different bond. What the framework returns is this shape, the four refuters written in advance, and the instruments that would close it. The pathway stays open until the ground settles it.
