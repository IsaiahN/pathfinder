# Figure-grounded audit: ORI-0063, wet–dry cycles and polymer formation

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on which sequences acquire function. It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."**

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (opened 2026-11-23) says LLMs "can quickly simulate an approximate answer/output" but "the truly testable output would need to be derived from the real architecture or working the formula yourself". This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the chemistry it reports on. The laboratory studies in `09_watson_answer.md` are the ground; this audit is not a substitute for them. See `05_what_shape_means.md` section 6.

**Sources.** Framework primaries: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, all `Fig N :line` citations), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources actually opened are listed in `10_source_ledger.csv` and synthesised in `09_watson_answer.md`. No figure quote is taken from a summary.

---

## 0. The residual, stated in effect terms

The gap is between a prebiotic inventory of small molecules and a population of long, bonded chains. Three effects are usually bundled into the single word "polymer":

1. **Bond formation.** Monomers must be joined by typed bonds; a condensation bond releases water, so low water activity favours it.
2. **Length accumulation.** Chains must survive and grow across successive cycles; the product of one cycle is the input to the next.
3. **Sequence and function.** The arrangement of different monomers, not merely the count, is what makes a chain catalytic or templateable.

Wet–dry cycling bears on all three, but not in the same way and not with the same anchor. Section 1 gives the census before any figure line is chosen.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry and scale

- **Arity.** The residual is indexed by monomer slot and chain slot, not by a single bulk yield. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A reported "total oligomer yield" hides which length class and which sequence moved. Each length class and each sequence is a slot with its own residual.
- **Symmetry.** Bond formation in a homopolymer is symmetric (identical monomers, one bond type), so permutations are not new substances: Fig 12 :92, "Symmetry is what decides whether an arrangement is a new thing." Once monomers differ, order becomes load bearing: the sequence bond is ordered (→), and different orders are different terms. The cycle itself is not symmetric under time reversal: formation and hydrolysis are different operators with different rates.
- **Scale.** Three nested scales: (i) one monomer and one bond, (ii) one chain of length k, (iii) a population of chains across N environmental cycles. The transform between (ii) and (iii) is lossy, so a round trip must be measured rather than assumed (Fig 4 :30).

### One line per domain, with actors, currency and anchor

| domain | actors | currency | anchor (what settles it) |
|---|---|---|---|
| D1 Chemical composition inside one dry phase | monomers, bond types, water, salts, mineral surfaces, activating agents | net bonds formed per chain, measured as a length distribution after a controlled dry-down | a laboratory measurement of yield and length at fixed time, temperature and starting concentration |
| D2 Cycle dynamics across repeated handoffs | successive wet and dry phases, product of cycle n as input to n+1, hydrolysis in the wet phase | change in mean chain length per cycle (loop sign) and shift in product distribution | measured length distribution after N cycles versus N=1, with matched hydrolysis time |
| D3 Habitat (where the cycle runs) | water availability, temperature, relative humidity, deliquescent salts, volcanic pools, UV, day length | contact: concentration, hydration state, molecular mobility | measurable environmental variables (temperature, humidity, salt identity, cycle period) |
| D4 Sequence, isomers and function | monomer order, bond arrangement, catalysts, templates | description length of the arrangement and sequence diversity | an assay of function on a named sequence, not on the mixture |
| D5 Verification frame (this solution) | this simulated derivation, expert readers, laboratory groups | residuals and agreement | the ground (an experiment), never agreement |

**Partition or union?** Union (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." ; Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."). D1 and D3 overlap in the wet phase, D2 and D3 overlap in cycle period, and D4 sits inside all three. A lever that clears D1 (drying) leaves the D4 intersection standing. Verdicts are kept per domain and never averaged into a single "yes".

**Order by dependency (Fig 3).** Monomers and bond vocabulary (links 1 to 2) precede an objective (link 3), which precedes cycle engineering (link 4), which precedes accumulated settled chains (link 5). Fig 3 :20: "The chain is ordered by dependency, not by importance." The middle link is the one to watch, Fig 3 :25-26: the link between having terms for what a situation affords and being able to say what counts as progress "has neither, so it attracts the least attention and the fewest instruments." Here that link is the decision to treat "longer" as the objective when the relevant objective may be "functional". Optimising cycle timing cannot rescue a missing objective, Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

---

## 2. Figure census (which lines govern, checked before concluding)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric | bulk yield is the wrong object; no ground reading here |
| 2 The Ground | anchor must not update; independence | the anchor is the experiment, not agreement among models |
| 3 Dependency Chain | order by dependency; the middle link has no instrument | "long" versus "functional" is the unmeasured link |
| 4 The Membrane | lossy transform, round trip required | scaling from one chain to a population needs a measured gap |
| 5 Mint Pipeline | three guards; MDL bargain | a new chain is only worth stating if it pays; no mint occurs in this derivation |
| 6 Closure / Reachability | MINT cannot add an atom; import moves the wall | cycling rearranges a fixed monomer set |
| 7 Room Chain | progress needs differing rooms; motion is not progress | repeated identical cycles are not automatically cumulative |
| 8 Union Surplus | closure idempotent; no search adds an atom | confirms D5; union verdict, not a partition |
| 9 Leave / Arrive | union versus partition; describe residual before frame; filters not witnesses | governs the whole census |
| 10 Ground Maintainer | ground does not decay, channel does; bring a characterised residual | hydration is a channel property; lead with the refuter |
| 11 The Habitat | enumerate conditions; valence relative to residual; no maintainer | governs D3 and the unmaintained selection reading |
| 12 The Bond | chain is a degenerate molecule; sequence isomers; cycle has a sign | governs D1, D2 and D4 directly |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the declared gap on function |
| Operators table | → ordered, + symmetric; negation not a bond | sequence order is typed; hydrolysis is not merely negation |
| Symbols table | R is the aim; anchor is not in the library | the residual is the aim, not an error to hide |

Strained readings are named in section 6, not smoothed over.

---

## 3. Findings

### F1 - A polymer is a bonded arrangement, and a chain is the degenerate case (D1, structural, decisive for the framing)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

Fig 12 :48: "A molecule is a bonded arrangement. A chain is the degenerate case: one bond type, no branching. Nothing about a chain is a different kind of object."

Polymerisation is therefore a composition problem, not an accumulation problem. Adding monomers to a vessel does not add a chain; only bonds do. Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." A list of monomers names a state; the bond is the route to a polymer.

Fig 12 :43: "one bond type costs nothing; seven cost 2.8 bits each." A homopolymer built with one bond type is the zero-cost, degenerate case. This is why glycine oligomers are the standard model system: length changes, bond vocabulary does not.

- **Refuter:** show a "polymer" whose monomers are not joined by typed bonds, or show that chain length carries no information beyond the ingredient list. If either holds, F1 is false and the figure framing must be re-censused.

### F2 - Cycling adds no monomer kinds (D1 and D5, triangulated)

Fig 8 :32: "no search, however long, adds an atom."

Fig 13 :115: "The set is closed. The arrangements are not."

Fig 6 :14: "the only operator that moves the wall."

Wet–dry cycling explores arrangements over a fixed alphabet. It cannot manufacture an amino acid or a nucleotide that was not present, and it cannot change which bond types the chemistry affords. If a required monomer is absent, the remedy is an import from another frame (a different geochemical source, a delivery mechanism), not more cycles. Fig 13 :134: "Unreachable is a verdict here, not a silence."

- **Refuter:** demonstrate a new monomer species arising from cycling a closed starting set with no external input, under mass balance. That would add an atom and break the closure claim for this domain.

### F3 - The cycle has a sign, and motion is not progress (D2, triangulated)

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Fig 7 :26: "Progress per handoff has two factors. Zero either and the chain runs in place:"

Fig 7 :32: "one long room: motion, no progress"

Fig 7 :36: "The next room must differ from the last, and match the residual it surfaced."

A wet–dry cycle is exactly the figure's cycle structure: product of cycle n re-enters as input to n+1. Its sign is the net bonds gained minus bonds hydrolysed. If the wet phase is long enough that hydrolysis dominates, the loop is negative or zero and repeated cycles are "motion, no progress". If every cycle is identical in chemistry and conditions, the chain is a mirror chain (Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."). Progress requires either fresh monomers, differing surfaces, or selective retention of the longer chains, so that the next room differs from the last.

- **Refuter:** measure a monotonic increase in mean length across cycles while wet-phase hydrolysis exceeds dry-phase bond formation, or with an exactly identical, closed, unvaried cycle. Either result kills the sign claim.

### F4 - Habitat conditions determine the valence of the cycle (D3, triangulated)

Fig 11 :46: "conditions: light, water, temperature, season, terrain"

Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."

Fig 10 :24: "the ground does not decay, the channel does"

Water is not simply good or bad for polymerisation. In the dry phase its removal favours condensation; in the wet phase its presence restores mobility but also hydrolysis. The valence of a wet–dry cycle is therefore relative to the residual (which bond, which monomer set, which target length) and to the habitat (salt identity, humidity, temperature, cycle period). The hydration channel can decay while the chemical ground (the thermodynamics) does not. In the unmaintained prebiotic case, Fig 11 :56 applies: "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept." Fig 11 :36: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."

- **Refuter:** exhibit a cycle whose yield increases monotonically with water activity for every monomer set and every target length, with no trade-off. That would make valence a carried property, not residual-relative, and break F4.

### F5 - Length is not function; the arrangement is invisible in the formula (D4, structural claim `specified`, functional outcome `gap`)

Fig 12 :94: "The arrangement is the substance."

Fig 12 :95-96: "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

A mixture can be richer in long chains while remaining functionally inert, because function depends on which sequence occupies which slot. The figure returns a shape (a sequence-specific arrangement is required) and refuses the name (which sequence). Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence." The functional sequence list is a `gap`, not an omission to be filled with a guess.

- **Refuter:** show that a bulk length measurement predicts catalytic or templating function without sequence information, on a held-out set of chains. Then the arrangement would not carry the information and F5 fails.

### F6 - The question is a union, so one lever cannot close it (all domains, `general` structural)

Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :55-56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

Drying clears the thermodynamic and concentration subset. It does not clear the loop-sign subset (D2), nor the sequence subset (D4). A single "wet–dry cycles: yes/no" verdict conflates three well-formed questions. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A higher yield is a filter for which regime to try next, not a witness for the origin of life.

- **Refuter:** show one cycle parameter that controls bond formation, length accumulation, sequence distribution and function simultaneously, with each measured against its own anchor. Then the union reading is unnecessary.

### F7 - The middle link has no instrument (D2 to D4, `specified`)

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

The chain here is: perceive available monomers → have terms for the bonds they afford → say what counts as progress ("longer" or "functional") → plan a cycle → carry the result. The middle link, what counts as progress, is the one without a general instrument. Most experimental effort lands on cycle timing and yield, which are downstream of it. Fig 3 :29: "Most improvement effort in practice lands above the break, because that is where the measurements already exist."

- **Refuter:** exhibit an instrument that reads function per chain and shows that length is the quantity it actually tracks. Then the middle link has an instrument and F7 is withdrawn.

### F8 - The anchor is the experiment, not agreement (D5, `general`)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

This audit and the laboratory papers draw on overlapping evidence in this folder. Agreement between them is one pool talking, not two witnesses (see `11_audit.md`). The anchor is a length-distribution measurement and a function assay. Prestige does not substitute: the Recursive Self-Improvement Trap says "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."

- **Refuter:** identify a source in this solution that is being treated as a verdict but changes its answer when a frame thinks differently. Then the anchor identification is wrong.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. The shape claim is refuted if any of the following holds:

1. A controlled experiment shows wet–dry cycling gives no higher net bond formation or mean chain length than a matched static control with the same integrated time, temperature and starting concentration (breaks D1 and F1 to F3).
2. A length-distribution measurement shows mean chain length fails to increase with cycle number when wet-phase hydrolysis is short, or increases when hydrolysis dominates (breaks the loop-sign claim, F3).
3. A cycle's valence is shown to be residual-independent: the same cycle increases yield for every monomer set and every water activity with no trade-off (breaks F4).
4. Cycling a closed starting set produces a new monomer species under mass balance with no external input (breaks F2 and the closure claim).
5. A figure re-census shows that a chain is not a bonded arrangement under Fig 12, or that output-re-entering-as-input is not the cycle structure named in Fig 12 :121 (breaks the derivation itself).

If any fires, the affected domain verdict is withdrawn and the shape is re-censused. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Report the answer as a **conditional, per-domain verdict**, not a global yes. Wet–dry cycles are structurally appropriate for bond formation and concentration; they are neither necessary nor sufficient for functional long polymers.
2. Lead outreach with the separator and the pre-registered refuter, not with the framework. Fig 10 :52: "Bring a characterised residual, never the source."
3. Name the middle link explicitly. Ask which objective a given experiment is measuring, length or function, before comparing results (F7).
4. Record habitat conditions as enumerations, not compositions (Fig 11 :43: "The habitat is enumerated, never composed."). Salt identity, humidity and cycle period are variables to read off the world.
5. Declare the `gap` on functional sequences as a verdict, not silence (Fig 13 :134).

---

## 6. Canonical usage check and retraction log

Two framework sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the canonical limit, the framework says "what a missing thing would have to look like (a shape, not a name)", then stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; a seat must not ask an anchor to decide what the figures decide. "Needing a human RLHF ruling" is the signal that derivation stopped too early. So this audit derives from figures first and uses the laboratory papers as secondary corroboration, never as an override.

| earlier reading | status after the canonical check |
|---|---|
| "wet–dry cycles build polymers" as a global verdict | **Retracted.** It aggregates across slots (Fig 1 :22) and flattens a union (Fig 9 :55). Replaced by per-domain verdicts. |
| Fig 13's six physical terms mapped onto chemical monomers and bonds | **Retracted as a strain.** Fig 13 governs the physical substrate (states space, time, energy; structures spectrum, gradient, network). Mapping monomer to "state" and bond to "structure" forces a reading the figure does not carry. Re-census: chemical composition is governed by Fig 12 (atoms and bonds) and Fig 6/Fig 8 (closure and import). Fig 13 is used only for the closed-set / open-arrangements distinction and for the honest-stop rule. Kept visible. |
| "shape, not a name" forbids naming a bond type or a deliquescent salt | **Corrected and narrowed.** The README's phrase governs a *missing* primitive. A bond type or salt is a binding onto what the chemical frame already holds, so naming it is provenance, not an invented primitive and not an import that moves the wall. The correction is kept visible rather than silently applied. |
| "no figure line governs the functional sequence" | **Confirmed as `gap`.** Fig 9 :32 and Fig 13 :134 give the shape and the stop, not the list. Unreachable is a verdict. |
| Apparent conflict: drying favours polymerisation while rewetting is said to help | **Not strained after re-census.** Fig 12 :121 governs the loop sign, Fig 10 :24 governs channel decay and Fig 11 :49 governs residual-relative valence. The two statements concern different quantities (thermodynamics of one phase versus kinetics across phases). |
| "repeated cycles guarantee accumulation" | **Retracted.** Fig 7 :32 and :36 require variation between rooms. Repeated identical cycles are motion without progress. |
| World-source agreement treated as corroboration | **Narrowed.** All substantive sources read are in one prebiotic-chemistry pool, and the essays share the framework author. Their agreement is internal consistency and a pool, not independent witnesses (Fig 2 :40). |

### Seven-question recursive derivation (summary)

1. **Is this one question?** No. Fig 9 :4-5 and :55 split it into bond formation, loop sign, habitat and sequence. Verdicts per domain.
2. **What is being composed?** Atoms by typed bonds; a chain is the degenerate case (Fig 12 :5, :48).
3. **Does cycling add atoms?** No. Fig 8 :32, Fig 13 :115. It explores arrangements over a fixed alphabet.
4. **What makes cycles cumulative?** A positive loop sign plus differing rooms (Fig 12 :121, Fig 7 :32/:36).
5. **What sets the valence?** The habitat and the residual (Fig 11 :46/:49, Fig 10 :24). Enumerate, do not compose.
6. **Is length the objective?** Not necessarily. The middle link has no instrument (Fig 3 :27); the arrangement, not the count, carries function (Fig 12 :94/:117).
7. **What is the stop?** A `gap` on functional sequences (Fig 9 :32, Fig 13 :134), with the refuter above written in advance.

**Final status of the audit.** Seven findings, five pre-registered refuters, one declared `gap`, one retracted strain, one narrowed overstatement. Strains after re-census: none hidden; the functional-sequence gap and the simulated status are stated rather than repaired.
