# The Tether's answer: closeness to capacity under an unpredictable channel

**Mode: `specified` for the substantive claims, `general` for the structural shape. Not `grounded`.** This is a shape and a route, not a measured result. Simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A transmitter sends at rate `R`; a quantity `C` is offered as the theoretical limit; the question asks how small `C - R` can be when the channel changes unpredictably. The residual is the persistent gap. It is a **union compound**: finite blocklength, unpredictable variation, and unknown or adversarial statistics overlap (Fig 9 :53: *"Nobody chooses. The gap does, and the gap is only as good as its description."*). It has its own loop and its own ground.

## 2. The shape

1. **There is no one fixed anchor for a moving channel.** Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** For a fixed known channel, Shannon capacity passes. For a channel that changes unpredictably, the limit depends on CSI, latency, blocklength and threat model; a single number does not settle reliability. Wikipedia (2026-11-23) distinguishes `ε`-outage capacity in slow fading from ergodic capacity in fast fading. Langberg and Sabag (2024) show a worst-case benchmark changes the rate. **So the answer is a family of limits, not one.**

2. **The gap is per slot, not a mean.** Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** A single mean throughput can look near capacity while a small set of deep-fade slots carries almost all the error. Hesham et al (2023) derive the rate meta-distribution for exactly this reason. Report the distribution.

3. **Reaching a state-dependent limit requires an import.** Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** Channel state information is an atom from the channel-tracking frame imported into the coding frame. A fixed, state-blind codebook can be-endlessly refined inside its own closure and still not reach a limit that depends on the current state (Fig 8 :32). Seifert et al (2024) work without CSI; Hosseinigoki and Kosut (2021, abstract only) show capacity changes with who holds the fading gains.

4. **Two different failures, two different instructions.** Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."** Short blocklength is depth: unreachable at this budget, instruction = more search or longer blocks. Missing CSI is absence: underivable in the code's closure, instruction = import. Fig 8 :40: *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."* Importing CSI to fix a merely short block is the priced error (Fig 6 :24: *"a wrong atom costs more than starting from primitives"*).

5. **The realised gap is a measurable round trip `R_T`.** Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** Symbols table :77: `R_T = gap(x, (T_E ∘ T_A)(x))`. The abstract capacity formula sent up and the measured operating point brought back down will not match; that mismatch is the honest report of what the abstraction dropped. Hesham et al (2023) report the *"discrepancy between the actual network rate and idealistic classical channel capacity."*

6. **Two currencies, held apart.** Fig 12 :125-126: *"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."* Rate shortfall is bits; channel estimation and encode/decode effort are actions. A "percent of capacity" number prices only bits and can hide an exploded action budget.

7. **The chain breaks at perception or learn-and-carry, not at coding.** Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."** Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Instrument CSI estimation and adaptation before refining an already working codebook. Bernardo et al (2023) study the learn-and-carry link for an unknown channel.

8. **The framework returns a shape, not a name.** Fig 9 :32: **"you get a kind of thing, never the answer itself."** It says the limit is a family indexed by frame knowledge with a per-slot gap and a measured `R_T`. It does not name which benchmark is "right"; that is a convention until a ground settles it (Fig 10 :47: *"a convention that decides an outcome has stopped being one"*).

## 3. What it explicitly does not say

- Not that capacity is undefined. For a fixed, known channel it is a legitimate anchor.
- Not that coding is futile, or that systems are far from capacity. No measurement was taken.
- Not which benchmark (ergodic, outage, worst-case, competitive) is correct for a given system. That choice is reported, not decided, here.
- Not a single "percent of capacity" number. Bare percentages are refused until a benchmark and state model are stated.
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not that many agreeing readers corroborate the claim (Fig 7 :13, Fig 2 :40).

## 4. What would settle it: the ground

A source-discriminating measurement, not a further argument. From *The Hard Problem is About Source* (opened 2026-11-23): a colour instrument reads green *"cannot comment on the source"*; the spectrometer, not an argument, resolved the ambiguity. Here the corresponding tests are:

- **Single-anchor test:** exhibit one stable frame-independent limit for the moving channel and show it settles reliability without CSI, latency, blocklength or threat model. (Refuter 1 in `01` §4.)
- **No-import test:** show a state-blind fixed codebook reaches the same rate at the same blocklength and error as a full-CSI code. (Refuter 2.)
- **Zero-gap test:** show `R_T = 0` at finite blocklength and finite compute for the channel class. (Refuter 3.)
- **Mean-sufficiency test:** show the rate distribution carries no reliability information beyond its mean. (Refuter 4.)
- **Depth/absence collapse:** show the two failure classes issue the same instruction. (Refuter 5.)

Standing figure-level refuters: derive one of the six from the other five; exhibit a state-state or structure-structure composition the framework must admit; measurement that forces the benchmark choice to be revised.

## 5. The honest stop

**Unreached, not unreachable.** The framework returns a shape. The benchmark for a given moving channel is choice-dependent until the ground settles it; that is a live limitation, recorded as F8 in `01_figure_grounded_audit.md` and Q2 in `06_isomers_and_order.md`, not smoothed away. The stop is at the limit of what the available instruments distinguish, and the lineage is recorded so the stop is checkable. *"Indiscernibility is not identity"* (figures README).

## 6. One-paragraph version for outreach

> The Tether does not give one number for "how close" a real system is to capacity when the channel moves. It says the single fixed-channel limit stops being an anchor once the channel and the frames' knowledge move, so the honest limit is a family indexed by channel state information, latency, blocklength and threat model; the gap to it must be reported per channel realisation rather than as a mean, with the abstract-to-measured round-trip loss `R_T` stated, and with bits of rate shortfall kept apart from the actions spent tracking the channel. Two different failures follow: a short blocklength is a budget problem fixed by more search, while missing channel state is an absence that has to be imported from the channel-tracking frame. The framework returns that shape, names no single benchmark as the right one, and writes its refuters down before the run. The center stays open until a measurement under a stated state process settles it.

## 7. Cost if wrong, undoable, reversed by

- **cost if wrong:** bounded and locatable. The packet states its mode, refuters and lineage before its conclusion, so an error is findable rather than invisible. The real cost is sending a bare "percent of capacity" that lets a benchmark convention decide the answer before the ground speaks; that is avoidable by leading with the shape claim and its refuters.
- **undoable:** yes. The union unbundling, benchmark reporting and two-currency accounting are additions to how the question is answered; they do not require withdrawing any established coding result. A sent claim can be superseded by the corrected packet.
- **reversed by:** a ground reading, not agreement. The five tests in §4, or a figure re-census that shows the union is actually a partition, would move the verdict. Until one fires, the verdict stands as `candidate`, mode `specified`.
