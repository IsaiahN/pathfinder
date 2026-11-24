# Figure-grounded audit: under what conditions do adaptive networks converge?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured.
Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground
settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** Per *The Recursive Self-Improvement
Trap* (Isaiah N, 2026-11-19): LLM output is "simulacra" and "the truly testable output would need to
be derived from the real architecture or working the formula yourself." This document is a simulated
derivation checked for internal consistency against the figures. It cannot settle the question it
reports on.

**Figure source.** All figure quotes cited as `Fig N :line` are verbatim from the local
`FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes not marked with a figure number come from
`THE_FORMULA.md`, the figures README, or the named essay, and are marked as such.

---

## 0. The residual in effect terms

The question is: under what conditions does an adaptive network settle into stable structure (regime
A) rather than continually reorganize (regime B)?

Stated as a residual rather than a topic. An adaptive network is a cycle: the state of the nodes
changes, the links rewire in response to those states, and the rewired topology becomes the input to
the next state update. For each tracked slot s, which may be a node or a link, define

> R_s = the gap between what the system predicted for slot s and what was observed at slot s.

Regime A is the case where R_s stops arriving at every live slot. Regime B is the case where at least
one slot keeps producing positive residual against any candidate reference. We deliberately do not
name coupling strength, feedback sign, noise, annealing schedule, or a Lyapunov function yet. Those
are candidate vocabulary, and picking one before describing R would violate Fig 9 :27-28: "describe
it before you go looking, or any frame you pick will seem to fit."

**Arity.** Many slots, indexed per node or per link. Never one global number. Fig 1 :19: "The
residual is indexed by object slot, not aggregated."

**Symmetry.** The loop is a cycle, not a chain: the output re-enters as input (Fig 12 :121). Whether
the cycle closes is decided by its sign, not by its length.

**Scale.** Two time scales are present: state dynamics and topological evolution. Their separation
or coincidence changes what can settle at all (Fig 4, membrane between scales; world source S1).

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 The adaptive core | nodes, links, local rewiring rule, observed state o' | per-slot residual R_s, prediction versus observation | the observed state, i.e. the ground for this domain, **but it is produced by the network itself** | will the reference hold still while the network pushes on it? |
| D2 Composition and reach | the six substrate terms (space, time, energy; spectrum, gradient, network), seven bonds, negation | composition inside closure(Γ), then settlement | the ground settles a composed term; a settled molecule becomes an atom (Fig 12 :103) | is the stable structure a settled composition or a revisited arrangement inside a closed set? |
| D3 Habitat and maintenance | the habitat (conditions, relations, outside actors), a maintainer seat if one exists | contact | the ground decides; the seat cannot author it (Fig 10) | maintained versus unmaintained, a partition of two modes (Fig 11) |
| D4 Observer and verification | the researcher's instrument, the frame, the report | agreement versus residual | the ground, never agreement | per-slot versus global measurement; one frame versus two low-overlap frames |

D1 has a nameable anchor only conditionally. If the only "ground" is the network's own next state,
then D1 collapses into Fig 2 panel 1: mutual update. That is the first finding, not a footnote.

**Partition or union.** The conditions form a **union of overlapping conditions**, not a list of
independent levers. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a
list of separate ones." Fig 9 :57: "A case in two conditions is not a harder case of either." A single
lever, for example slowing the rewiring rate, clears the region where only that condition binds and
leaves the intersections standing. So unbundle before searching (Fig 9 :54).

**Order by dependency (Fig 3).** D4's instrument must return something before D1's residual can be
read (perception, link 1). D1's anchor question must be answered before D2 can ask whether anything
settled. D2 must be settled before D3 asks whether the resulting structure is maintained. Fig 3 :19:
"Optimising a link that already works cannot rescue one that does not." A convergence claim based on
a global average, when a live slot remains, is "a reading of nothing" (Fig 3 :23: "It is a reading of
nothing.").

---

## 2. Figure census

| figure | bearing on this question | preliminary verdict |
|---|---|---|
| 1 The Agent | residual indexed per slot; global near-zero is legal; frame-internal scores disqualified | measurement discipline governs, no ground reading supplied |
| 2 The Ground | anchor must not update; mutual update yields coherent drift | convergence requires a pin, not mutual confirmation |
| 3 Dependency Chain | a reading below the break is a reading of nothing | order: instrument, anchor, settlement, maintenance |
| 4 The Membrane | two scales, lossy transform, round-trip gap R_T | state/topology separation is load-bearing, not incidental |
| 5 Mint Pipeline | curiosity drive manufactures gradient when nothing scores | a source of regime B that needs no residual |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | the discriminator for settlement versus closed channel must come from outside |
| 7 Room Chain | "agreement compounds, evidence does not"; progress needs two factors | a converged-looking ensemble is not a verdict |
| 8 Union Surplus | closure idempotent; no search adds an atom | continual rewiring can be a search inside a finite reach |
| 9 Leave / Arrive | describe residual first; union needs unbundling; filters are not witnesses | the union must be split before one lever is proposed |
| 10 Ground Maintainer | "the ground does not decay, the channel does"; verifier non-access | saturation and lost contact mimic convergence |
| 11 The Habitat | managed systems are permanent work; introduction available, exclusion not | regime A is mode-dependent |
| 12 The Bond | cycle: sign of the loop decides whether it closes; settled molecules become atoms | the structural core of the answer |
| 13 Minimum Viable Set | network is a structure; cross-kind composition; "infinite effort inside a finite reach" | the shape of the settled structure is constrained |
| Operators / Symbols tables | R is the aim and error signal; bonds typed, including cycle and comparison | notation for the derivation, no new verdict |

Strained readings are named in section 6, not smoothed over.

---

## 3. Findings F1 to F8

### F1. The framework supplies no convergence criterion (decisive; `gap`)

`THE_FORMULA.md`, Closure section:

> **"No convergence criterion: the loop stops only when R stops arriving, which is either a perfect prediction or a closed channel, and from inside those look the same."**

So the Tether does not hand over a critical coupling value or a stability certificate. It gives an
operational definition of stopping and declares the discriminator unobservable from inside the frame.
Fig 6 :27 states the same limit: "Which is why some unreachability is depth and some is genuine
absence, and from inside the frame the two look the same." Fig 10 :24: "the ground does not decay, the
channel does." Fig 10 :25-28 names what a dead channel looks like: "stale percepts, dropped transients,
saturated metrics, pooled readings", and the output is then "you have lost touch", not a verdict.

**Verdict: `gap`** on the criterion that would separate genuine settlement from a closed channel
using only the frame's own instruments. This is not silence. Per Fig 13 :134, "Unreachable is a verdict
here, not a silence". Mode: `general` for the limit, `specified` for its application to adaptive
networks.

### F2. A non-updating pin is required; otherwise convergence is coherent drift

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what
any frame thinks." Fig 2 :33: "The anchor must not update." Fig 2 :34:

> **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."**

An adaptive network is exactly a system in which topology and state update on each other. If the
only reference available is the other's last output, the system is in Fig 2 panel 1. Fig 2 :14-15
says what such convergence converges on: "they converge, and what they converge on is whoever had the
most influence." Fig 10 :47: "a convention that decides an outcome has stopped being one." A
self-consistent freezing point defined only by the rewiring rules is a convention that has become an
outcome, not a settlement against a ground.

**Verdict: triangulated** (Fig 2 and Fig 10, low overlap between the anchor rule and the convention
rule). Mode: `specified`. Refuter: show a case where the reference updates on the network and the
result is still demonstrably settlement against an independent ground, not coherent drift.

### F3. The sign of the loop decides whether it closes

Fig 12 :121:

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

Adaptive networks are cycles by construction: the rewired topology re-enters as the substrate for the
next state update. Fig 13 :31-32 adds the failure mode: "a remainder compounding through a chain that
amplifies is chaos, and the detail a crossing discards reappears above it as noise."

The figure names the sign as the deciding variable but does **not**, in this line, say which sign
produces which regime. That direction is imported from world sources S2 and S3 (strong, symmetric
coupling gives stable locking; weaker or asymmetric coupling gives metastability), and is therefore
marked `single-source` for the direction while the structure is `triangulated` (Fig 12 + Fig 13).

**Verdict on structure: triangulated. Verdict on sign direction: `single-source`, world-supported,
unsettled by the figure alone.** Mode: `specified`. Refuter: a closing (settling) cycle whose sign is
the amplifying one under a fixed, nameable convention for sign.

### F4. Convergence is settlement of a composition, not a revisited arrangement

Fig 12 :106: "Nothing composes over what was never admitted as a part." Fig 12 :103: "A settled
molecule becomes an atom for whatever composes over it." Fig 13 :115: "The set is closed. The
arrangements are not. That gap is why import exists." Fig 13 :117-118:

> **"So a frame can search without end and still not arrive: infinite effort inside a finite reach."**

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search,
however long, adds an atom." Regime B is therefore not necessarily a failure to settle; it can be a
frame searching arrangements inside a finite reach forever. Regime A is what happens when a composed
structure is settled and admitted as an atom for the next level. World source S1 reports both: models
that "freeze in a final configuration, a so-called network Nash equilibrium", and models where the
network "does not approach a frozen configuration, but remains evolving as links keep appearing and
disappearing".

**Verdict: triangulated** (Fig 12, Fig 13, Fig 8). Mode: `specified`. Refuter: a network that keeps
rewiring forever while every composed structure it visits has been settled against a non-updating
ground.

### F5. Continual reorganization can be internally manufactured, not ground-driven

Fig 5 :46: "When nothing is scoring, the drive manufactures a gradient." Fig 5 :15-18 describes the
curiosity drive as firing when nothing is scoring, aimed at the new bin, seeking "the gap that is
large and compressible". Fig 5 :48:

> **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."**

So regime B can arise with zero ground pressure: the system manufactures gradients because nothing is
scoring. This matters because a naive reader would infer continual reorganization from a large
external residual; the figure says the opposite source is also available. Fig 1 :27 disqualifies the
system's own score: "They are frame-internal. A frame cannot score itself with a quantity it also
produces."

**Verdict: triangulated** (Fig 5 + Fig 1, different mechanisms, low overlap). Mode: `specified`.
Refuter: show that the manufactured-gradient branch is inactive in a given continually reorganizing
network, leaving residual pressure from the ground as the only driver.

### F6. Apparent convergence can hide one live slot

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :13: "a global R near zero
with one live slot residual is a legal state". Fig 1 :22:

> **"Aggregating across slots is how a live signal disappears into an average."**

A claim of the form "the edge-change rate went to zero, so the network converged" is exactly the
disallowed aggregation. Fig 10 :24-26 lists "saturated metrics, pooled readings" as channel failure,
and Fig 10 :28 says the output in that case is "you have lost touch", not a verdict. A sound
convergence claim requires per-slot residual to trend to zero at every slot. World source S1 defines
the analogous unit explicitly: a node is "frozen" if its state does not change over the long-term
behaviour of the network (a per-node, not a network-average, definition).

**Verdict: triangulated** (Fig 1 + Fig 10). Mode: `general` for the measurement rule, `specified` for
its application. Refuter: demonstrate a network that is correctly called converged while at least one
slot has positive residual that does not trend down.

### F7. Convergence is mode-dependent: maintained versus unmaintained habitat

Fig 11 :36: "Where nothing maintains anything, intelligence is a label applied afterwards to a
lineage that met its ground. Nothing was intelligent; selection ran." Fig 11 :14-15: "nothing selects;
what survives is what the ground kept." Fig 11 :61: "The seat's power is asymmetric. Introduction is
available; exclusion is not." Fig 11 :63:

> **"Which is why a managed ecosystem is permanent work rather than a solved state."**

Consequences:

- **Unmaintained:** regime A is survival of what the ground kept. It is selection, not design.
- **Maintained:** regime A is never a solved state. It is maintained contact. A claim of stable
  structure under maintenance is a claim about ongoing work, not about intrinsic stability.
- **Isolation:** Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one
  habitat for another." Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic
  solve proves wiring and never capability." A simulated adaptive network converging in silico is a
  substituted habitat, and says nothing by itself about a real one.

Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

**Verdict: triangulated** (Fig 11 + Fig 4 :22 "Only methods cross up. Only head starts come down.").
Mode: `specified`. Refuter: exhibit a maintained network that reaches a solved state with no further
work and no change in contact.

### F8. The conditions are a union; filters must not hand over the verdict

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search
again." Fig 9 :57: "A case in two conditions is not a harder case of either." Fig 9 :60:

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Coupling strength, rewiring rate, and convergence speed are filters for how much budget to spend on a
model. They are not witnesses that the network settled. Fig 9 :27-28 requires the residual to be
described before a frame is chosen: "describe it before you go looking, or any frame you pick will
seem to fit." Fig 9 :32: "you get a kind of thing, never the answer itself."

**Verdict: triangulated** (Fig 9 + Fig 6 :32, "An instrument is not built from a description. It is
improved from a worse instrument already returning something."). Mode: `general`. Refuter: a case
where a budget filter, used alone, correctly and provably decides settlement.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the standing rule, a falsifier written before the run is a design instrument. The shape claim is
refuted if any of the following holds:

1. A global convergence measure is shown sufficient: one live per-slot residual can persist while the
   network is still correctly called converged (breaks F6, Fig 1 :19 and :22).
2. A network can settle against a reference that itself updates on the network, and the result is
   shown to be settlement rather than coherent drift (breaks F2, Fig 2 :33-34).
3. A frame can distinguish, from its own instruments alone, a perfect prediction from a closed
   channel (breaks F1, `THE_FORMULA.md` Closure, and Fig 6 :27).
4. A maintained network reaches a solved state with no further work and no change in contact (breaks
   F7, Fig 11 :63 and :40).
5. World refuter: a model in which links keep reorganizing indefinitely while every per-slot
   residual against an independent ground is zero and the manufactured-gradient branch is off (breaks
   F4 and F5).

Until one of these is run, no part of this answer may be labelled `grounded`.

---

## 5. Recommendation

1. Answer in effect terms with a **union of conditions**, not one threshold: a non-updating pin (F2),
   a cycle sign that damps (F3), a composition that settles into an atom (F4), per-slot measurement
   (F6), and continued work when maintained (F7).
2. State the limit plainly: there is no convergence criterion inside the loop (F1). Report
   "converged" as `candidate` until an outside instrument registers against a ground that does not
   update.
3. Name regime B's two distinct sources: residual pressure and manufactured gradient (F5). Do not
   merge them.
4. Unbundle before proposing a lever (F8). Coupling strength and rewiring rate are budget filters,
   never verdicts.
5. Treat an in-silico convergence result as a substituted habitat (F7). It proves wiring, not
   capability in a real network.

---

## 6. Canonical usage check and retraction log

Two rules were checked after the first five sections and they govern the reading.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the quotes are the authority; a reading that
  makes one figure contradict another has misidentified its domain, not found a flaw. The framework
  returns "a shape, not a name" and stops at the limit of what instruments distinguish, recording the
  lineage.
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule and the closure statement quoted in F1.

| earlier reading | status after the check |
|---|---|
| Wanted to name "negative feedback" as *the* condition | **Retracted.** The figures give the sign as the deciding variable (Fig 12 :121) but do not name which sign for which regime. The direction is imported from world sources and marked `single-source` (F3). |
| Called a "network Nash equilibrium" convergence | **Reclassified.** Under Fig 10 :47 a convention that decides an outcome has stopped being one. It is a frozen convention, not a ground settlement (F2). |
| Treated a global edge-change rate as an adequate convergence measure | **Retracted.** Fig 1 :19 and :22 forbid aggregation; a live slot can hide (F6). |
| Read Fig 13's cross-kind rule as bearing on convergence | **Narrowed.** Fig 13 :74 governs the six primitives. What bears on a network settling is :115/:117 to :118 (closed set, unbounded arrangements). Different objects, no strain. |
| Hoped the framework supplies a stability criterion | **Refused.** `THE_FORMULA.md` Closure explicitly says no convergence criterion and that settlement and a closed channel look the same from inside (F1). Recorded as `gap`, not silence. |
| Assumed continual reorganization must be driven by residual | **Corrected.** Fig 5 :46 manufactures gradient when nothing scores (F5). |

### Strains after re-census

One live strain: the **sign convention** in F3. Fig 12 says the sign decides whether the loop closes
but does not fix the mapping from sign to regime; world sources supply it. This is recorded, not
hidden. No other strain: each figure line was returned to its own quantity on re-census.

### Final status of this audit

The shape survives with its limit attached. The answer is a union of conditions, not a threshold;
the discriminating instrument is a `gap`; per-slot measurement is mandatory; maintained convergence
is work, not a solved state. Mode `specified`, ungrounded, `candidate`.
