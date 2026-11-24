# Figure-grounded audit: reliability of cellular communication under noise and turnover

**Mode of this document: `specified` on the mechanism shapes, `general` on the union structure. Nothing here is `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** Isaiah N, *The Recursive Self-Improvement Trap* (adventuresinml Substack, 2026-11-19, opened 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post." The same essay says "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the biological question it reports on. See `05_what_shape_means.md` §6.

**Sources used.** Framework: Fig 1 to 13 plus Operators and Symbols tables in `FRAMEWORK/reference/03-FIGURES_TEXT.md` (opened this session), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, the exemplar's nine files. World: six sources listed in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual, stated as an effect

**R (effect terms).** A cell maps an external signal to a correct downstream response. That mapping stays stable even though (a) the molecules carrying it fluctuate stochastically and exist at low copy number, and (b) the molecules themselves are degraded, replaced, misfolded, or otherwise turned over. The residual is the gap between "the response is correct and repeatable" and "the physical substrate is noisy and transient."

**What an answer would look like, bound as an ordinary term.** Before searching, bind the sought-for shape: *a set of mechanisms, one per broken condition, that each keep a link of the signal-to-response chain from being destroyed by fluctuation or replacement.* Fig 5 :65 "make the sought-for shape an ORDINARY TERM" is the discipline this obeys. Without that binding, any field picked afterwards will seem to fit (Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit").

**Arity, symmetry, scale.** Arity: at least two, a signal and a response, with a channel between them; the two failure conditions (noise, turnover) attach to different links. Symmetry: asymmetric, signal to response is a directed sequence or production, not a symmetric join (Fig 12 :55-59, :70-74). Scale: molecular binding, pathway state, cell decision, and population selection are distinct strata; Fig 12 :103 "Composition is recursive, and the level decides what is irreducible."

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet. All three below have one.

| domain | actors | currency | anchor (what settles it) | question type |
|---|---|---|---|---|
| D1 recognition: signal versus noise at the receptor | receptors, ligands, near-match competitors, enzymes, delay steps | binding free energy, kinetic rates, error fraction | the actual identity of the molecule present, discriminated by a refusal step | partition: correct versus wrong, decided by ¬ not by a bond |
| D2 propagation and maintenance: the intracellular pathway | kinases, phosphatases, second messengers, scaffolds, chaperones, degradation machinery, ATP | concentration, phosphorylation state, flux, energy spent | the external signal's meaning must stay reachable while the channel decays | union and maintenance: keep contact through turnover |
| D3 redundancy and selection: parallel paths and cell population | degenerate pathways, isogenic cells, variants, the environment | independent agreement, variation, ground pressure | the true signal state, against which variants are selected | triangulation plus selection, not averaging |

**Partition or union.** This is a **union**, not one hard problem and not a clean partition. Noise and turnover are two conditions that overlap in the same pathway but require different levers. Fig 9 :55 "a bundled problem is usually a union of overlapping conditions, not a list of separate ones"; :57 "a case in two conditions is not a harder case of either." A cell that stops noise perfectly by stronger binding can still fail when the receptor is replaced; a cell that maintains its channel perfectly can still respond to the wrong molecule. Each condition gets its own loop.

**Order by dependency (Fig 3).** D1 perception first (tell the signal from a near-match), then the vocabulary/objective link (what counts as the correct response), then D2 maintenance (carry the signal through a decaying channel), then D3 selection across parallel paths and cells. Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Optimising binding affinity cannot rescue a broken maintenance link, and vice versa.

---

## 2. Figure census

Quotes are verbatim from the local `03-FIGURES_TEXT.md`, cited as `Fig N :line`.

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | residual per object slot; frame-internal quantities disqualified | reliability must be measured per component, not as one global average |
| **2 The Ground** | anchor does not update; independence makes agreement mean something; correlation disqualifies | redundancy works only as independent triangulation |
| **3 Dependency Chain** | ordered by dependency; a reading below the break reads nothing | the three domains must be fixed in dependency order |
| **4 The Membrane** | transform between scales loses information; round trip must be measured | noise is structural loss, not a removable defect |
| **5 Mint Pipeline** | refuted bin; three guards as a product; settle is separate | a wrong near-match must be refused, not explained away |
| **6 Closure / Reachability** | instruments are improved from worse instruments already returning something | receptors are bootstrapped, not specified from scratch |
| **7 Room Chain** | variation inside, selection between; ground votes between rooms | population-level reliability is selection, not internal averaging |
| **8 Union Surplus** | two frames together reach what neither reaches alone; shared evidence makes one frame under two names | degenerate paths add surplus; identical copies do not |
| **9 Leave / Arrive** | bundled problem is a union; describe the residual before choosing a frame | the union reading is figure-derived, chosen before biology |
| **10 Ground Maintainer** | the ground does not decay, the channel does; keep the anchor reachable | component turnover is channel decay; maintenance is a seat's office |
| **11 The Habitat** | capability is agent and habitat; introduce, never subtract; selection runs where nothing maintains | reliability is a property of pathway and habitat, not of parts alone |
| **12 The Bond** | catalyst, cycle, functional group; refutation is a negation and is not a bond | self-maintaining structures and a refusal operator are the two required shapes |
| **13 Minimum Viable Set** | remainder re-enters; discarded detail reappears as noise; set is closed, arrangements are not | noise is the leftover of a lossy cross; it cannot be engineered to zero |
| **Operators table** | ¬ is unary, joins nothing, and closes what bonds cannot | grounds the refusal finding |
| **Symbols table** | R is the aim; ground is the anchor; habitat is the field of contact | the residual is the aim, not only an error signal |

Strained readings are named in §7, not smoothed over.

---

## 3. Findings (F1 to F9), each with verbatim figure lines and a refuter

### F1: Noise is the discarded detail of a lossy cross, not an external enemy (decisive for the word "despite")

Fig 13 :31 "because each turn leaves a remainder (the residual) that re-enters the next"; :32 "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." Fig 4 :27 "The transform between scales loses information, and that is the point." Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

So noise is where the figures say it is: the detail a crossing cannot carry, reappearing above the crossing. It is a structural remainder of composition across scales (molecule to pathway to cell), not a contaminant that a better part could remove. Reliability is therefore not "zero noise." It is keeping the residual indexed per slot and the round-trip gap `R_T` measured rather than assumed. Fig 1 :19 "The residual is indexed by object slot, not aggregated."

**Refuter:** a measurement showing that noise in a decision-relevant variable is not the leftover of a lossy cross between scales but an independently added input with no upstream remainder; or a re-census showing Fig 13 :32 governs chaos, not noise, so that the noise claim loses its figure ground.

**Mode:** `general` (structural). **Status:** triangulated across Fig 13 and Fig 4, low overlap (one governs the remainder of a turn, the other governs the transform between sizes). World corroboration: Elowitz et al. 2002 (intrinsic and extrinsic noise, low copy number limits precision).

### F2: Turnover is channel decay; maintenance is a separate office

Fig 10 :24 "the ground does not decay, the channel does"; :25 "stale percepts, dropped transients, saturated metrics, pooled readings"; :28 "the output is not a verdict, it is you have lost touch"; :29 "keep the anchor reachable." Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." Fig 11 :36 "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."

The external signal (ground) does not decay because a receptor degraded. The signaling machinery (channel) does. Component turnover is the figure's channel decay at the molecular stratum. Reliability therefore requires work that keeps the anchor reachable: replacement, chaperone surveillance, feedback. It is not a property of any isolated part. Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation" is the same claim in the capability vocabulary.

**Refuter:** a pathway shown to keep exact signal-to-response contact across full component replacement with no maintenance process and no feedback, so that the channel demonstrably does not decay while the ground stays fixed.

**Mode:** `specified` (the molecular mapping), `general` (the channel-decay shape). **Status:** triangulated across Fig 10 and Fig 11. World corroboration: Hartl, Bracher and Hayer-Hartl 2011 (constant chaperone surveillance); Barkai and Leibler 1997 (robustness from connectivity, not fine tuning).

### F3: A reliable discriminator must be able to refuse, not only to accumulate

Fig 12 :112 "A refutation is a negation, and that one is not a bond." Operators table :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate." Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so." Fig 12 :103 "Composition is recursive, and the level decides what is irreducible."

A near-match molecule is not a missing term; it is a false term that must be refused. Under a vocabulary with only bonds, a system can bind and accumulate and has no way to say "this one is wrong." The figure requires a unary refusal operator. The classic kinetic proofreading delay step is a molecular instance of that shape: it gives the wrong substrate a second chance to dissociate before the effect fires.

**Refuter:** a discrimination system that reaches the observed error rate with no energy-dissipating delay or rejection step, purely from the equilibrium free-energy difference of the first binding event. That would show refusal is not required for the shape at this stratum.

**Mode:** `general` (the operator is required), `specified` (kinetic proofreading is an instance). **Status:** triangulated across Fig 12, Fig 5 and the Operators table. World corroboration: Hopfield 1974.

### F4: Redundancy is triangulation, not averaging

Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 8 :49 "Two frames that overlap almost completely are one frame wearing two names." Fig 8 :45 "Two frames together reach what neither reaches alone."

Two identical copies of the same noisy signal share the same error. Averaging them is one frame wearing two names, and it is exactly how the live difference disappears into the mean. Reliability needs structurally different paths (degenerate, in the biology vocabulary) that range against the same ground separately. Fig 2 :42 "Buy independence in proportion to the cost of being wrong."

**Refuter:** a demonstration that reliability in a given pathway comes from averaging many identical correlated copies and that independent degenerate paths contribute nothing to the error rate.

**Mode:** `general`. **Status:** triangulated across Fig 2, Fig 1 and Fig 8. World corroboration: Edelman and Gally 2001 (degeneracy versus identical redundancy).

### F5: Self-maintaining structures, not static parts, carry the signal through turnover

Fig 12 :119 "catalyst. A part that survives its own use." :120 "Spent and regenerating parts behave differently across uses, and nothing records which a term is." :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." :122 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

These four structures are exactly what a pathway needs under turnover. A catalyst survives its own use; a cycle re-enters its output so the loop can close despite component loss; a functional group fixes the kind of outcome regardless of which member enzyme currently occupies it. The figure also warns that "nothing records which a term is", so a notation that lists molecules without recording their renewal state has lost half the information.

**Refuter:** a reliable pathway built only from one-shot parts and open chains, with no catalyst, no cycle and no substitutable functional group, across a full turnover interval.

**Mode:** `general`. **Status:** triangulated across the four Fig 12 structure definitions and Fig 10 :24. World corroboration: Kitano 2004 (modularity, fail-safe alternatives, system control); Barkai and Leibler 1997 (nested feedback).

### F6: Population reliability is selection between rooms, not agreement inside one

Fig 7 :33 "variation inside, selection between"; :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 13 :134 "Unreachable is a verdict here, not a silence." Fig 6 :21 "MINT composes inside the closure and can never add an atom." (the agreement of a room cannot add an atom to the ground)

At the population stratum, variability among isogenic cells is not a defect to be averaged away. It is the variation inside a room; the ground votes between rooms. This is the unmaintained mode of Fig 11 :36, where "selection ran." It does not replace D1 to D3; it is their recursion at the next level. Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it."

**Refuter:** a population in which reliable response is shown to depend on within-room consensus alone, with no differential survival or ground-driven selection among variants.

**Mode:** `general`. **Status:** single-source for the figure definition (Fig 7), with Fig 11 and Fig 12 as corroborating structure. World corroboration: Edelman and Gally 2001 (degeneracy is a prerequisite of natural selection).

### F7: Receptors are instruments improved from worse instruments, not designed from a description

Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." :34 "the search for a proto-instrument is a search for one that is already there."

This bears on how a cell could have acquired a reliable discriminator. The figure forbids specifying a sensor from an account of the signal; it requires a pre-existing reading that fails to resolve and is then sharpened. The question of origin is left open here: the figure gives the shape (proto-instrument already returning something), not the historical molecule.

**Refuter:** a receptor system shown to have appeared without any precursor returning a weaker reading of the same signal, if such a negative could be established. Until then this is a shape, not a history.

**Mode:** `specified`, ungrounded. **Status:** single-source (Fig 6). World corroboration: none read that settles the origin; declared as a gap rather than filled.

### F8: The three findings are a union, so they must be unbundled before being searched again

Fig 9 :55 "a bundled problem is usually a union of overlapping conditions, not a list of separate ones"; :57 "a case in two conditions is not a harder case of either"; Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."

Because the residual is a union, a single lever aimed at "reliability" will clear only the region where one condition holds and leave the intersections standing. Noise plus turnover is a specific compound, not a harder noise problem (F7 addresses a separate origin question and is not one of the three union conditions).

**Refuter:** a single mechanism shown to remove both failure conditions by one operation, with no separable refusal, maintenance, or independence component. Then the union reading is wrong.

**Mode:** `general`. **Status:** triangulated across Fig 9 and Fig 3.

### F9: What actually survives, with mode attached

| claim | mode | figure |
|---|---|---|
| Noise is the discarded detail of a lossy cross and cannot be engineered to zero | `general` | Fig 13 :31-32, Fig 4 :27 |
| Turnover is channel decay and requires active maintenance | `specified` mapping, `general` shape | Fig 10 :24, Fig 11 :40 |
| Refusal (¬) is required for near-match discrimination | `general` | Fig 12 :112, Fig 5 :53, Operators :58 |
| Independent degenerate paths beat averaged identical copies | `general` | Fig 2 :31, :35, Fig 1 :22, Fig 8 :49 |
| Self-maintaining structures (catalyst, cycle, functional group) are the shapes that persist through turnover | `general` | Fig 12 :119-122 |
| Population reliability is selection between rooms | `general` | Fig 7 :33, :35 |
| Kinetic proofreading, chaperones, integral feedback are the molecular occupants of those shapes | `specified`, ungrounded bindings | world sources only |

The last row is the one most likely to be mistaken for a figure result. It is not. The figures return shapes; the molecular names come from the biology frame and are recorded as provenanced bindings.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds.

1. **F1 fires:** noise in a decision-relevant variable is shown to be an independently added input rather than the remainder of a lossy cross, or Fig 13 :32 is re-censused as governing chaos only.
2. **F2 fires:** exact signal-to-response contact persists across full component replacement with no maintenance, replacement, feedback, or chaperone process.
3. **F3 fires:** the observed discrimination error rate is reached at equilibrium with no energy-dissipating delay or refusal step.
4. **F4 fires:** reliability is shown to come from averaging identical correlated copies, with independent degenerate paths contributing nothing.
5. **F5 fires:** a reliable pathway is built from one-shot parts and open chains only, with no catalyst, cycle, or substitutable functional group.
6. **F8 fires:** one operation is shown to remove both noise and turnover failures with no separable components.

If any fires, the corresponding shape is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with F1 and F2: they reframe "despite" as the actual question. Noise is structural and the channel decays, so the mechanisms are management, not elimination (Fig 4 :30, Fig 10 :24).
2. Keep the three verdicts separate and never average them into one "robustness" score. Fig 1 :19 "The residual is indexed by object slot, not aggregated."
3. Ask an expert which refuter in §4 they would fire first. A failure is more useful than an endorsement.
4. Do not send the molecular names as if the framework derived them. Fig 9 :32 "you get a kind of thing, never the answer itself"; Fig 9 :30 "your words are borrowed too, so describe the effect rather than the cause."
5. Offer the generator, not the conclusion. Fig 4 :22 "Only methods cross up. Only head starts come down."

---

## 6. Canonical usage check and retraction / confirmation log

Two local framework files were read after the first five sections and govern how figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` (the figures "outrank everything else in the repo"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name"; "Indiscernibility is not identity") and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (the figures are the ground for design questions, and the seat reads the ground rather than asking the anchor to decide).

| earlier reading | status after the canonical check |
|---|---|
| Initially treated "noise" as a frame-internal quantity disqualified by Fig 1 :24-27 | **Retracted.** Re-census put noise under Fig 13 :32 as the discarded detail of a crossing. Fig 1 disqualifies quantities a frame scores itself; noise is a remainder at the ground, not a self-score. |
| Initially mapped "component turnover" to Fig 12 :119 (catalyst) alone | **Corrected.** The governing line is Fig 10 :24 "the ground does not decay, the channel does." Catalyst, cycle and functional group are the maintenance structures that answer it, not the statement of the problem. |
| Initially read "reliability" as one property to be optimised | **Refused.** Fig 9 :55-57 makes it a union of two conditions; the recommendation now unbundles before searching. |
| Wanted to name kinetic proofreading, chaperones and integral feedback as the answer | **Refused at figure level.** They are `specified` bindings from the biology frame. The figures return shapes (canonical README, Fig 9 :32). Recorded in F9's last row. |
| Fig 13 :32 versus Fig 4 :27 apparent overlap | **Not a strain.** Fig 13 governs the remainder of a turn; Fig 4 governs the loss across a size transform. Different objects, matching the README's re-census rule. |
| Fig 7 population selection versus Fig 11 :36 unmaintained mode | **Confirmed, not strained.** Fig 7 governs selection between rooms; Fig 11 says where no maintainer exists, selection ran. Same structure at different strata (Fig 12 :103). |
| Fig 12 :112 refutation versus the five-bin route in `THE_FORMULA.md` | **Confirmed.** The formula's REFUTED bin and the figure's negation operator are the same requirement at two levels of compression. |

### Strains still live

- The mapping of Fig 2 "frames" onto molecular pathways is a cross-stratum binding. The figures are domain-agnostic and recursive, so the shape travels, but calling a receptor a "frame" is an import from the biology frame onto a held figure atom, not a derivation. Recorded, not hidden.
- Fig 10 "the ground does not decay, the channel does" is written about a verifying seat, not a receptor. It extends cleanly in shape (channel = pathway) but the specific mapping is `specified`, not `grounded`.

---

## 7. Honest stop

**Unreached, not unreachable.** The figures give the three shapes and the union order. They do not name the molecules and they do not measure an error rate. Fig 13 :134 "Unreachable is a verdict here, not a silence." Fig 9 :32 "you get a kind of thing, never the answer itself." The lineage is recorded so the stop is checkable, and §4 records what would reverse each part.
