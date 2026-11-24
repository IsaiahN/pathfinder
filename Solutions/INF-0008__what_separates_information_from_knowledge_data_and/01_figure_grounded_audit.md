# Figure-grounded audit: what separates information from knowledge, data, and evidence

**Mode of this document: `general` on the structural separator, `specified` on the per-domain separators, `gap` on the request for one settled definition. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** The local canonical files: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (cited as `Fig N :line`), `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the eight essays. World sources are secondary corroboration only and are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

The question asks for a **separator**: a criterion that lets a frame sort a given item, a reading or a record, into one of four bins called *information*, *knowledge*, *data* and *evidence*, and that lets it notice when it has mis-sorted.

Stated as an effect, not a dictionary request:

- Something is being decided: which of four roles a reading plays, and what each choice leads to.
- The trouble is that the same reading is called *data* by one frame, *information* by another, *evidence* by a third, and *knowledge* by a fourth, and nothing in the ordinary vocabulary says which frame is right. The four terms therefore do no stable sorting work.
- The popular answer is a ladder (data to information to knowledge to wisdom). A ladder is a **sequence**, an ordered bond, not a derivation. Before accepting it we have to ask what kind of bond it is and what anchor, if any, it ranges against.

**R by arity, symmetry and scale.**

- **Arity.** The separator is at least binary: it relates a reading to a frame and, for two of the four terms, to a ground. None of the four is a monadic property of a bare signal.
- **Symmetry.** The four are not symmetric under swapping. A reading becoming knowledge is ordered (something had to settle); a reading becoming evidence is ordered (something had to be at issue). The DIKW ladder quietly treats a symmetric ordering of "value" as if it were an ordered production bond. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* The bond type is the unresolved part, not the list of ingredients.
- **Scale.** Data and syntactic information sit at the carrier scale (instrument, channel, reading); knowledge sits at the agent and library scale; evidence sits at the verification scale (a verifier ranging a claim against an anchor). Different strata, so no single ranking across them is licensed. Fig 4 :19-20: *"The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running"* it or a thousand. Only the actors, the currency and the anchor change.

**What an answer would look like, bound as an ordinary term before the run.** An answer is a *role assignment*: for each of the four names, the frame that assigns it, the currency it moves, the anchor it ranges against, and the bond by which it composes with the others. If a figure line names any of the four as a primitive, that would overturn this shape and is written as a refuter in §3.

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not yet a domain.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1, carrier frame | instrument, channel, signal, reading `o'` | readings, bits, entropy, description length | the code and the probability distribution, a convention; the ground is borrowed through a decaying channel | union member |
| D2, agent and library frame | an agent with `Γ`, belief `b`, weighting `w` | settled terms that can be composed over; methods versus recordings | the ground that paid for a term | union member |
| D3, verification frame | a claim, a verifier (Seat 3 or 4), a ground | residuals and settlement; admissible versus stake-inducing evidence | the non-updating anchor, Fig 2 :29 | union member |
| D4, semantic and source frame | propositions, interpretations, sources, instruments | truth, meaning, source discrimination | the ground as read by a source-discriminating instrument | overlap of D1 and D3, not a fifth domain |

**Why union and not partition.** A single reading can be data in D1, evidence in D3 and a candidate for knowledge in D2 at the same moment. The four conditions overlap. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* So one lever (for example "add context") clears the region where only one condition holds and leaves the intersections standing. Verdicts are kept per domain and never averaged.

**D1 has no anchor of its own.** Its only reference is a convention (the code), and the ground reaches it through a channel that decays. Fig 10 :24: *"the ground does not decay, the channel does"*; Fig 10 :26: *"saturated metrics, pooled readings"*. Under the anchor test, D1 is a domain only because it borrows the anchor from D3. That is already a finding, not an oversight.

**Order by dependency (Fig 3).** Reading at the instrument, then a prediction and a residual in the frame, then settlement against the ground, then a verifier ranging a claim. Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The chain breaks in the middle at the question "what would this reading mean", which has no instrument in most of the literature. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 13 :16: *"it names what is being measured"*; Fig 13 :26: *"it decides what the measurement would mean"*. Neither half alone decides a measurement.

**Strain test applied before concluding.** The six-term substrate (Fig 13) contains none of these four names. If we forced them onto the six terms we would be straining a line that governs primitives onto roles. Fig 13 :115: *"The set is closed. The arrangements are not."* Re-census assigns the four to roles in the loop, not members of the substrate. No strain remains after that reassignment; the strain was a warning that we had the wrong domain.

---

## 2. Figure census and findings

### F1 - Data is the recorded reading; information is the difference the reading makes

Fig 12 :14: *"the ingredients are recorded and the arrangement is not"*; Fig 12 :15: *"nothing downstream can tell them apart,"* and Fig 12 :16: *"and nothing signals that anything was lost"*. Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :46: *"A bond is the typed relation between two operands."*

So *data* is the atom list that got recorded: the reading `o'`, the symbols, the ingredients. *Information* is what the bond carries that the operands do not: the typed relation, the arrangement, the part of the description that is not recoverable from its parts.

The same separator appears at the loop scale. Symbols table :36: *"The gap between prediction and observation. The central quantity"*; :39: *"it is the aim, not only the error signal, and it is always a slice"*. A reading becomes information only relative to a prediction `Γ(b,a)` held by a frame. With no prediction there is no residual and hence no information for that frame, which is exactly what an unmeasurable slot means.

The tempting shortcut is to identify information with compression achieved. Fig 1 :25 lists *"coverage, and compression achieved"* among the quantities that do not count, and Fig 1 :27 gives the reason: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* A bit count that the frame both produces and uses to score itself is a convention, not a ground reading.

**Verdict D1: `general` (structural), triangulated** across Fig 12 :5/:14/:46 (bond carries information the operands do not) and the Symbols table definition of `R` (difference relative to prediction) plus Fig 1 :24-27 (self-scoring disqualified). Low overlap between the composition figures and the loop symbols.

**Refuter:** show a reading that carries information for a frame with no prediction at all, or show that a bond contributes nothing beyond its operands. Either breaks this finding.

### F2 - Information is not knowledge; a recording is not a method

Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Fig 4 :22: *"Only methods cross up. Only head starts come down."* Fig 4 :23: *"upward: a method that can be reapplied. Never the recording of a particular success."*

Fig 5 :69: *"AMENDMENT · settling is necessary for a term to be composed over, and it is not sufficient."* Fig 5 :70: *"A term is settled when the ground pays for it. A term is usable when something can compose over it."* Fig 5 :72: *"and a library that grows is not a reach that grows."*

Information can be stored in `Γ` without being settled or reachable. Knowledge is the narrower class: settled against the ground *and* composable, so that something can be built on it. Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."* Fig 12 :107: *"Settling compresses the description and not what it cost to establish."* Where the arrangement is not recorded as a method, the next lineage pays the establishing cost again (Fig 12 across :107-110). That is the practical difference between carrying information and carrying knowledge: one travels as a description of an occasion, the other as a reapplicable route.

The world literature agrees on the shape without settling it. The DIKW page records Zeleny's *"Knowledge is action, not a description of action"* and the observation that even the direction of transformation is doubted (*"occasional doubt being cast over any simple, linear, unidirectional model"*). SEP *Semantic Conceptions of Information* reports that "information and meaning come apart" on Fodor's account. These are corroboration only.

**Verdict D2: `specified`, triangulated** across Fig 4 :22-25 (method versus recording), Fig 5 :69-71 (settled versus usable, library versus reach) and Fig 12 :104/:107 (settled molecule becomes atom; settling compresses description). Low overlap between the membrane, mint and bond figures.

**Refuter:** exhibit a recording of one occasion that can be composed over as a method without settlement, or a settled term that cannot be used, and show the framework has no term for the difference. Or show a library that grows with a reach that grows by exactly the same amount and argue that settling was not the difference.

### F3 - Evidence is not a stock; it is a reading ranged against a non-updating anchor

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

Fig 9 :51 is the only direct figure line on evidence in the set: *"evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it"*. So evidence is defined by its relation to a live residual and to the ground, not by its content. The same physical reading is evidence in one context and irrelevant in another. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

Fig 10 :52: *"Bring a characterised residual, never the source."* A verifier that is handed the source, the whole framework, can no longer tell whether the claim is right or merely matches the picture it has been given (Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*). This is why the outreach artifacts in this folder put the residual and its refuter first.

The legal and scientific literature corroborates the relational shape. The Wikipedia *Evidence* page gives the evidential relation as three-place: *"the evidential relation becomes a three-place relation between evidence, hypothesis and auxiliary assumptions"*, and notes underdetermination and theory-ladenness as threats to evidence's role as *"neutral arbiter"*. A bloody knife and a perceptual experience have little in common except the role they play. That is the same role claim as Fig 2 :29.

**Verdict D3: `specified`, triangulated** across Fig 2 :29/:35/:45 (anchor and triangulation), Fig 9 :51 (admissibility by bearing on the residual) and Fig 10 :42/:52 (verifier non-access). Low overlap between the ground figure, the leave/arrive figure and the ground maintainer figure.

**Refuter:** settle a claim by agreement among frames that share one evidence pool and have no non-updating anchor, and show the framework has no way to call that a mirror chain rather than triangulation. Or show evidence that does not bear on any residual yet still settles a claim.

### F4 - Data and evidence are the same reading under different roles

This follows from F1 and F3 rather than being a new claim. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* A reading's category is likewise relative to the residual and to whether it is ranged against an anchor. Fig 10 :24-26 explains why perfectly good data can fail as evidence: the channel decays, readings go stale or get pooled, and the ground does not. Fig 4 :27: *"The transform between scales loses information, and that is the point."*

The *Hard Problem is About Source* essay supplies the discriminator that the figures only gesture at: *"If several paths create the same behavior, then behavior is a projection with lossy information"*, and *"An instrument that can't distinguish these cases demonstrates its own inadequacy"*. Calling a reading evidence when an instrument cannot distinguish its sources is the metamerism error, not a fact about the reading.

**Verdict D4: `general` (structural) on the role relativity, `single-source` on the figure side for the source-discriminator claim (Fig 6 :26 plus Fig 8 :39), corroborated by the essay.** Kept separate from D3 and not averaged with it.

**Refuter:** produce a reading whose category is invariant under change of residual and change of anchor, with no frame doing the ranging.

### F5 - All four are roles, not primitives; the request for one definition is a `gap`

The six-term substrate is space, time, energy (states) and spectrum, gradient, network (structures). Fig 13 :116: *"six members, and no amount of arranging produces a seventh"*. Fig 13 :121: *"Different routes can arrive at the same substance."* Information, knowledge, data and evidence are not among the six and cannot be composed into a seventh. They are positions in the loop.

So when the question demands a single separator, the honest figure-grounded report is a shape plus a gap. Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. There is no figure line that picks Shannon over Kolmogorov over Floridi, or that returns one definition of "information". The world literature makes the same point in its own terms: SEP *Information* quotes Shannon's *"It is hardly to be expected that a single concept of information would satisfactorily account for the numerous possible applications of the general field"* and calls this *"informational pluralism"*; the DIKW page reports *"130 definitions of data, information, and knowledge formulated by 45 scholars"* and no consensus. Agreement from that shared pool is one witness, not two.

**Verdict: declared `gap`, of the shape-not-a-name kind, not a failure and not silence.** The separator can be stated; the unique definition cannot be returned.

**Refuter:** produce a verbatim figure line that names any one of the four as a seventh substrate member, or that ranks them by value. If one exists, F5 falls and the gap closes.

### F6 - The DIKW ladder is a convention being used as a verdict

Fig 12 :72 gives sequence: *"A then B; B needs A to have happened"*. Fig 12 :77 gives production: *"A produces B; B did not exist before"*. Fig 12 :82 gives subtraction: *"A with B removed or absent"*. Fig 12 :87 gives comparison: *"a threshold relation between two quantities"*. The ladder asserts an ordering among the four without saying which bond holds. If it is sequence, it is a route; if it is production, the upper term did not exist before the lower fired; if it is comparison, it is a threshold relation between two quantities. Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."*

Fig 2 :41 gives the legitimate use of such an ordering: *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"*. Fig 10 :47 names the failure: *"a convention that decides an outcome has stopped being one"*. A value ladder used to decide which term a given reading belongs to has stopped being a convention and started being a verdict, with no ground.

**Verdict D2/D4 overlap: `specified`, single-source on the figure side for the convention/verdict distinction (Fig 10 :47), corroborated by the world DIKW criticisms.** Kept as an overlap, not folded into F2.

**Refuter:** show a figure line that derives the value ordering of the four from the substrate, with a ground that pays for the ordering.

### F7 - The same item crosses categories; this is a union, not a broken ladder

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :56: *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* So "data versus information versus knowledge versus evidence" is not one hard question with four answers. It is a bundle of at least four conditions, and verdicts per domain must be kept separate. Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A single combined definition of all four would aggregate away the very thing that distinguishes them.

**Verdict: `general`, triangulated** across Fig 9 :54-57 (union/partition) and Fig 1 :19/:22 (per-slot residual, no aggregation).

**Refuter:** show that the four conditions form a partition in which each reading falls into exactly one bin with no overlap and no anchor dependence.

### F8 - What survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| Data is the recorded reading or ingredient list; information is the difference the bond and the residual make | `general` | Fig 12 :5/:14/:46; Symbols :36/:39 |
| A frame cannot score its information content with a quantity the frame also produces | `general` | Fig 1 :25/:27 |
| Knowledge is a settled, composable method, not a recording of one occasion | `specified` | Fig 4 :22-25; Fig 5 :69-71; Fig 12 :104 |
| Evidence is a reading ranged against a non-updating anchor on a live residual, never the maker | `specified` | Fig 2 :29/:45; Fig 9 :51; Fig 10 :42/:52 |
| The four are roles in one loop, not members of the six-term substrate | `general` | Fig 13 :115/:116/:121 |
| A single settled definition of information is not returned | `gap` | Fig 9 :32; Fig 13 :134 |
| The DIKW value ladder is a convention, not a derivation | `specified` | Fig 12 :72/:77/:92; Fig 2 :41; Fig 10 :47 |
| Source cannot be recovered from a reading without a discriminating instrument | `general`, `single-source` on the figure side | Fig 6 :26; Fig 8 :39; *Hard Problem is About Source* |

---

## 3. Pre-registered refuter (written before the conclusion)

Required by the Seat Map: *"And a falsifier written before the run is a design instrument, not only an honesty device."*

The whole shape is refuted if any of the following holds:

1. A verbatim figure line names any one of the four as a member of the six-term substrate, or admits it as a seventh member.
2. A reading is shown to carry information for a frame that holds no prediction and has no residual.
3. A recording of one occasion is shown to be composable over as knowledge without settlement, or a library is shown to grow in reach by exactly as much as it grows in terms.
4. A claim is shown to be settled by agreement among frames drawing on one evidence pool with no non-updating anchor, and the framework cannot call it a mirror chain.
5. The value ordering of the four is derived from the substrate and paid for by a ground, so the ladder is a derivation rather than a convention.
6. A source-discriminating instrument makes one of the four collapse into another at the ground, so the role assignment no longer holds.

If any fires, re-census rather than soften a reading. Until one is run, no part of this folder may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the role assignment, not with a definition. The question asks for a separator and the figures return a separator: anchor plus loop position plus bond type.
2. State the mode on each claim (F8 table). Do not present the `general` shape as a `grounded` definition.
3. Report the `gap` out loud. "No figure line returns one definition" is a verdict, not an omission (Fig 13 :134).
4. Keep the four domain verdicts separate. Do not average them into a single hierarchy (Fig 1 :22, Fig 9 :54-57).
5. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the derivation and the refuter, not a finished dictionary entry.

---

## 5. Canonical usage check (figures README, metalaws doc, 2026-11-23)

Two local sources govern how the figures may be used and were read after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit, the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of what the available instruments can distinguish. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. The figures are metalaws, so design questions are answered by derivation, not by escalation.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "information is a quantity of bits" | **Narrowed, not erased.** Bits are the currency of D1 and Fig 5 :45 does compose Shannon coding into MDL, but Fig 1 :25/:27 disqualifies compression achieved as a self-score. The bit count is a currency, not a separator. |
| "knowledge is stored information" | **Retracted.** Fig 4 :25 and Fig 5 :69-71 separate a recording from a settled, composable method. The earlier phrasing collapsed D1 into D2. |
| "evidence is a kind of data" | **Retracted.** Evidence is a role in D3, defined by bearing on a residual (Fig 9 :51), not a subtype of the D1 reading. Same item, different role. |
| "the DIKW ladder is figure-derived" | **Retracted.** No figure line derives the ordering. Fig 12 :72/:77 shows the bond type is undetermined and Fig 10 :47 names the convention-as-verdict failure. |
| "the question has no answer" | **Retracted and replaced by `gap`.** Fig 13 :134 makes unreachable a verdict, not silence. The role separator is returned; the unique definition is not. |
| F5 gap versus the many world definitions | **Confirmed as one witness, not corroboration.** SEP Information, SEP Semantic Conceptions and the DIKW page share a philosophy-of-information evidence pool; their agreement is expected and is recorded as overlap in `10_source_ledger.csv`. |
| Apparent strain Fig 12 (bond carries information) versus Symbols `R` (information as residual) | **Not strained after re-census.** Fig 12 governs what a composition carries at a level; Symbols `R` governs the loop's error signal between prediction and observation. Different objects; two witnesses for the same separator. |

### Round trip, stated here and measured in `11_audit.md`

`T_A` abstracts the four-role separator to "data, information, knowledge and evidence are four stages of one ladder". `T_E` brings that back to the record: "a recording is knowledge" and "compression achieved is information". The two dropped constraints are the method/Recording distinction (Fig 4 :25) and the self-scoring disqualification (Fig 1 :27). The gap is nonzero and is reported qualitatively in `11_audit.md`.

### Updated verdict

The role separator survives: data is the recorded reading, information is the difference the bond and the residual make, knowledge is a settled and composable method, evidence is a reading ranged against a non-updating anchor on a live residual. All four are roles in one loop, not stages in a value ladder and not members of the six-term substrate. The single definition the question appears to ask for is a declared `gap`. Strains after re-census: none hidden; one live type question, the bond type of the DIKW ladder, named in F6. Every substantive claim is `general` or `specified`, none `grounded`, and the whole folder is a simulated derivation checked for internal consistency against the figures, not a ground reading.
