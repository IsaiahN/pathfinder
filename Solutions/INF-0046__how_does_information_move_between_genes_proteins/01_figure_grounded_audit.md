# Figure-grounded audit: how information moves across biological scales

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured at each boundary. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the biological question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim SVG extraction), `THE_FORMULA.md`, `FIGURES_README_canonical.md`, the Operators and Symbols tables, and the world sources opened on 2026-11-22 and listed in `10_source_ledger.csv`.

---

## 0. The question under audit, restated in effect terms

> "How does information move between genes, proteins, cells, organisms, and environments?"
> (Information Theory.txt line 57, section 5: Biological information and the origin of life.)

The ordinary wording smuggles in a picture: a substance called information that travels intact along a five-stop line. Stated as an effect, the question asks four things at each boundary:

1. **What crosses?** A physical carrier (a molecule, a concentration change, an action, a change in which sequences persist), not "information" as a free-floating entity.
2. **In what currency?** A nucleotide order, a chemical concentration, a mutual information in bits, a selection pressure, a heritable state.
3. **What is lost?** Every crossing of a scale boundary is a lossy transform (Fig 4 :27), so what looks like the same information at two scales is actually a head start or a method, never a replay.
4. **What settles whether the crossing was functional?** A ground that does not update on what any frame thinks (Fig 2 :29, :33), not agreement among descriptions.

An answer would look like this, bound as an ordinary term before the run (Formula "Direction"): *a per-boundary map giving carrier, currency, loss and anchor for each of the four crossings, plus the feedback loops that connect them, with a failure condition written for each.* This is the shape claim that the refuter below targets. It is a shape, not a list of named pathways.

---

## 1. Residual

**R, by arity, symmetry and scale** (Fig 9 :21-22, *"R, described / arity · symmetry · scale"*):

- **Arity:** five named nodes, but the real object is the set of boundaries between them. The residual is indexed per boundary slot, never as one global "information flow" number. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Symbols table :43: *"R is measured per slot, never as a single global number."*
- **Symmetry:** the boundaries are **ordered**, not symmetric. Sequence information goes DNA to RNA to protein and not back (Cobb 2017, *"Once information has got into a protein it can't get out again"*). Selection goes environment to lineage in the other direction, and niche construction goes organism to environment. These are different arrows, so a single symmetric "exchange" bond is wrong (Operators table :34, *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*).
- **Scale:** the four crossings (molecular, cellular, organismal, environmental/population) are crossings of the membrane between sizes (Fig 4 :2, *"The Membrane Between Scales"*), each with its own actors, currency and anchor. Fig 10 :68: *"Different actors, a different currency, a different ground, and a lossy transform between."*

**Per-slot live mass.** For each boundary s, the live residual is the part of what arrived that the receiving scale's prediction did not account for (Symbols :38, R is *"the aim, not only the error signal, and it is always a slice"*). Averaging across the five stops would hide which boundary is actually live. This is the first discipline the question needs.

---

## 2. Domain census

One line per domain: actors / currency / anchor. A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | anchor (ground) | question type |
|---|---|---|---|---|
| **D1 Gene ↔ protein** (molecular) | DNA, RNA, ribosome, tRNA, amino acids, transcription factors | sequence order; the ⇒ production and → sequence bonds carry the correspondence | the observed sequence correspondence and the cell that survives on the product (experiment, Cobb 2017; Haseltine and Patarca 2024) | binding: a provenanced mapping onto held atoms, not a new primitive |
| **D2 Protein ↔ cell state** (cellular) | receptors, kinases, methylation enzymes, transcription factors, regulatory RNAs | concentration, mutual information, channel capacity, transfer entropy | the input-output measurement and cell survival (Lan and Tu 2016; Ito and Sagawa 2015) | partition of signal from noise; a channel-maintenance loop |
| **D3 Cell ↔ organism** (multicellular) | tissues, endocrine and neural signals, behaviour | coordinated signals and actions | organismal survival and reproduction | level crossing: a settled molecule becomes an atom |
| **D4 Organism ↔ environment** (ecological) | conditions (light, water, temperature, season, terrain), relations (predation, competition, dependency), other organisms | selection pressure, ecological inheritance, niche construction | the environment, which does not update on the organism's belief (Fig 2 :29, :33) | union of conditions; habitat enumerated, not composed |
| **D5 Cross-generation** (heritage) | lineages, germ line, small RNAs, chromatin state | heritable variation and transmitted state | fitness, "what the ground kept" (Fig 11 :36) | unmaintained habitat; selection ran |

**Partition or union.** This is a **union of overlapping conditions, not a partition**. The same protein is a product in D1, a signal in D2, a trait in D4 and a transmitted cause in D5. Crossings form feedback cycles: environment → organism (selection) → germ line → gene → protein → cell → organism → environment (niche construction). Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55-57: a case in two conditions is not a harder case of either, it becomes a specific compound. Each boundary therefore gets its own loop and its own verdict. Verdicts are never averaged.

**Order by dependency** (Fig 3 :20, *"The chain is ordered by dependency, not by importance"*): settle the code at D1 before the signal at D2; settle the cell before the organism; the environmental ground at D4 anchors all of them. Refuse the "one substance on a line" framing before minting any mechanism (Formula step 2). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Strain test, applied before any figure line was chosen.** Reading the five stops as the six physical terms of Fig 13 (gene = spectrum, protein = gradient, and so on) strains the text: Fig 13 :74 says *"Everything else is a composition across the two kinds, never within one."* Re-census: Fig 13 governs the physical substrate; at the biological scale only the actors, currency and anchor change (Fig 4 :20, *"Only the actors, the currency and the anchor change."*). After re-census there is no strain. The mapping is a binding from the biology frame onto the cross-kind composition rule, not an atom substitution.

---

## 3. Findings F1 to F10

Each finding: verbatim quote first, then the verdict, then its refuter. Quotes are checked character by character against `03-FIGURES_TEXT.md`. Per-slot verdicts are kept separate and never averaged.

### F1 - What crosses is a bonded carrier; the bond carries the information (decisive for the framing)

Fig 12 :5:

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :46:

> **"which one holds is not recoverable from the operands."**

Symbols table :62: *"The typed relation between two operands. Seven of them, and which one holds is not recoverable from the operands, so a term naming only its ingredients has recorded half of itself."*

A gene is not a packet of information that travels. The sequence-to-protein correspondence is a typed relation (production ⇒ and sequence →) between a nucleic acid and a polypeptide, and the relation carries the mapping the operands do not. Destroy the bond and the atoms are still there but the "message" is gone. The same holds at D2: a concentration is not a signal until it is bonded to a receptor and a downstream response.

**Verdict:** `triangulated` across Fig 12 and the Symbols table (low overlap in phrasing, one framework pool). Mode `specified`.
**Refuter:** demonstrate full recovery of the message at the receiving scale after the typed relation has been destroyed, with no new bond supplied. If that happens, the bond does not carry the information and F1 falls.

### F2 - Every crossing is a lossy membrane, not an identity-preserving pipe

Fig 4 :27:

> **"The transform between scales loses information, and that is the point."**

Fig 4 :22:

> **"Only methods cross up. Only head starts come down."**

Fig 4 :30:

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

THE_FORMULA step 6 defines the round-trip gap `R_T = gap(x, (T_E ∘ T_A)(x))`. Symbols table :77: *"The gap between what was sent up and what came back down"*, which measures what the coarser description cannot hold.

So what looks like the same information at two scales is not the same token. What crosses up is a re-applicable method; what comes down is a head start that makes the next search cheaper (Fig 4 :23, *"upward: a method that can be reapplied. Never the recording of a particular success."*). The question's ordinary word "move" is refused as a substance metaphor and re-grounded as a lossy transform plus a measured gap.

**Verdict:** `triangulated` across Fig 4, THE_FORMULA step 6 and the Symbols table. Mode `general` on the topology, `specified` on any one boundary.
**Refuter:** a measured round trip with `R_T = 0` across a boundary, that is, a transform that preserves everything in both directions. That would break the membrane claim.

### F3 - The topology is a cycle, not a one-way line

Fig 12 :121:

> **"cycle. The output re-enters as input."**

The figure adds: *"The sign of the loop decides whether it closes, and a chain cannot close by construction."*

Fig 11 :36:

> **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."**

The ordinary five-stop line is false as topology. Genes → proteins → cells → organisms is a production chain, but organisms → environments → lineages → genes is a selection loop, and niche construction (Laland, Matthews and Feldman 2016: *"organisms do not passively adapt to conditions in their environment, but actively construct and modify environmental conditions"*) is a third direction.

This dissolves an apparent conflict. Crick's dogma forbids sequence information going protein → nucleic acid (Cobb 2017: *"there is no evidence in any organism that the information in a DNA sequence can be rewritten from information in a protein"*). Niche construction and ecological inheritance say the environment organisms modify feeds back on which genes persist. These are **different quantities**: sequence-order information versus selection pressure and frequency. Conflict sends us back to the census; re-census assigns each to a different bond and different anchor, so the verdict does not flip.

**Verdict:** `triangulated` across Fig 12 and Fig 11, with two low-overlap world witnesses (Cobb 2017; Laland et al. 2016). Mode `general` on the cycle, `specified` per direction.
**Refuter:** a demonstration that the four crossings form an acyclic chain with no feedback in any regime. A chain cannot close by construction, so finding a genuine chain would refute the cycle reading.

### F4 - The anchor is the ground, not agreement among descriptions

Fig 2 :29:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 2 :33:

> **"The anchor must not update."**

Fig 2 :45:

> **"Frames range against the ground. They do not negotiate with it."**

For D2 the anchor is the measured input-output relation and cell survival, not the coherence of a signalling story. Lan and Tu 2016 state the limit directly: information theory *"does not reveal the underlying mechanism that leads to the observed input-output relationship, nor does it tell us much about which information is important for the organism and how biological systems use these information to carry out specific functions."* For D4 and D5 the anchor is the environment and fitness, which do not move when a lineage's model of them changes.

**Verdict:** `triangulated` across Fig 2 and Fig 10 :24 (different figures, same anchor rule), with the systems-biology source as corroboration. Mode `specified`.
**Refuter:** an "anchor" whose answer changes when the observing frame's description changes, or a ground that lists one of the parties (Fig 2 :47, *"A ground listed as one of the parties has already become a frame."*).

### F5 - Reliability is a channel property; the ground does not decay

Fig 10 :24:

> **"the ground does not decay, the channel does"**

Fig 10 :26:

> **"saturated metrics, pooled readings"**

Lan and Tu 2016 describe the channel side in molecular terms: biochemical noise, intrinsic and extrinsic, receptor crosstalk and methylation boundaries that limit adaptation. Ito and Sagawa 2015 give a bound: *"the robustness of adaptation can be enhanced against the environmental noise by the feedback using information"*, with transfer entropy setting the upper bound. So molecular noise, turnover and crosstalk are channel failures to be maintained against; they are not changes in what the environment settles.

This is the figure-grounded answer to the neighbouring questions 42 and 45 (signals versus noise; reliability despite turnover): a cell distinguishes signal from noise by keeping a channel to a non-updating ground, not by inventing a better story.

**Verdict:** `triangulated` across Fig 10 and two low-overlap biophysics sources. Mode `specified`, ungrounded for any particular organism.
**Refuter:** a case where the ground changes while the channel is held fixed and the failure is attributed to the ground. That would collapse the distinction the finding rests on.

### F6 - The residual is per boundary, not one global flow

Fig 1 :19 and :22, quoted in §1, plus Symbols table :43. A single number called "the amount of information transferred from genes to environments" aggregates across slots and throws away the only signal that says where to look. Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* A mutual-information measure computed from the same variables used to declare the transfer is a frame-internal score (Fig 5 :48, *"Its own output is never a measure of success."*).

**Verdict:** `single-source` for the structural rule (Fig 1 and Symbols are one framework pool), `specified`. The world sources corroborate the practice of per-channel measurement but do not decide the rule.
**Refuter:** a measurement showing that all four boundaries share one residual that trends down together under a single intervention. Then slot indexing buys nothing.

### F7 - No figure line names the molecular mechanism; that is a declared gap

Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

Fig 13 :134:

> **"It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."**

Fig 8 :39:

> **"a search that finds nothing is never a proof of absence"**

The figures return the shape: cross-kind composition, lossy membrane, bond-carried information, cycles, non-updating anchor, enumerated habitat. They do not return "transcription, translation, phosphorylation, synaptic transmission, niche construction" as a derived list. Naming those is a **binding from the biology frame onto held atoms**, which is legitimate provenance (see `05` §5b and the correction in §7 below) but is not a figure derivation and does not move the wall (Fig 6 :21, *"MINT composes inside the closure and can never add an atom."*).

**Verdict:** `gap`, of the unreached-at-this-budget kind, not underivable in principle. Reported as a verdict, not as silence (Fig 13 :134).
**Refuter:** a figure line that, after a genuine re-census of the six terms and the eight operators, selects one specific molecular pathway as the required carrier. None was found.

### F8 - At the origin boundary, interpretation does not need an interpreter

Fig 11 :36 (quoted in F3) and Fig 11 :40:

> **"An improvement that does not change contact changes nothing, however much it improves."**

Section 5 of the source file is "Biological information and the origin of life", and the adjacent question 50 asks how early life stored, copied and interpreted information before modern cells existed. The figures' answer is a refusal of the question's framing: where no maintainer sits in the seat, "interpretation" is a label applied afterwards to a lineage that met its ground. Capability is agent-and-habitat, not agent alone (Fig 11 :39, *"capability is a property of agent-and-habitat, never of the agent alone."*).

**Verdict:** `specified`, triangulated across Fig 11 :36/:39/:40. Mode `specified`; no prebiotic measurement exists, so nothing is `grounded`.
**Refuter:** a demonstration that a pre-cellular sequence could only be "read" by an already-existing maintainer, with the maintainer shown to be necessary rather than assumed. That would break the selection-ran reading.

### F9 - Two currencies: bits do not settle which information matters

Fig 12 :125:

> **"A composition costs in two currencies, and they do not add."**

Fig 12 :126:

> **"Bits price the description. Actions price finding out whether it holds."**

A channel-capacity number prices the description; it does not price what it costs the organism to find out whether that information pays. Lan and Tu 2016 make the same separation in world terms: information theory is *"a general tool in analysing noisy biological data"* but does not say *"which information is important for the organism."* Ito and Sagawa 2015 add a thermodynamic price for the feedback that maintains the channel. The two readings are held apart; summing them into one "information score" is the error the figure names.

**Verdict:** `triangulated` across Fig 12 and the two biophysics sources, different fields, low overlap. Mode `general`.
**Refuter:** a demonstration that description bits and action costs are the same quantity in a given biological decision, with a shared unit and a conversion that preserves settling power.

### F10 - The environmental side is a habitat to enumerate, not a list to derive

Fig 11 :43:

> **"The habitat is enumerated, never composed."**

Fig 11 :46:

> **"conditions: light, water, temperature, season, terrain"**

Fig 11 :47:

> **"relations: pollination, predation, competition, dependency"**

Fig 11 :49:

> **"An actor's valence is relative to the residual, not a property it carries."**

Fig 11 :51:

> **"No standing list of good actors survives a change of residual."**

So there is no figure-derived standing list of which environmental information a cell or organism should ignore, retain or act on (adjacent question 48). The habitat is read off the world by enumerating what is in contact with the residual, then what contacts those, outward until the cascade stops mattering (Fig 11 :44). Valence flips with the residual; the same cue is a benefactor to one residual and a malfactor to another.

**Verdict:** `triangulated` across Fig 11 and the niche-construction source (different fields). Mode `general` on the enumeration rule, `specified` per habitat.
**Refuter:** a figure line that ranks environmental cues by importance independently of a residual, or a world case where a cue's valence is fixed across all residuals.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing rule: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim in §0 is refuted if any of the following holds:

1. **Bond test (F1).** The message is fully recovered at the receiving scale after the typed relation has been destroyed and no new bond is supplied.
2. **Round-trip test (F2).** A cross-scale transform is measured with `R_T = 0`, that is, lossless in both directions.
3. **Cycle test (F3).** The four crossings are shown to be an acyclic chain with no feedback in any regime.
4. **Anchor test (F4, F5).** The supposed ground changes its answer when a frame's description changes, or lists one of the parties.
5. **Slot test (F6).** All boundaries share one residual that trends down under a single intervention, so per-slot indexing buys nothing.
6. **Instrument test (F7, F8).** A source-discriminating instrument at the origin or cell boundary shows that a named interpreter or a specific pathway is required by the framework, not merely borrowed from biology.

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Refuse "information moves" as a substance metaphor. Restate every boundary as carrier, currency, loss and anchor (F1, F2).
2. Draw the topology as a cycle with feedback loops, not a five-stop line, and keep the sequence-information and selection-pressure arrows distinct (F3).
3. Keep the four per-boundary verdicts separate. Never average them into one flow rate (F6).
4. Treat reliability as channel maintenance against a non-updating ground; name the instrument that would show a failure (F5, F9).
5. Enumerate the habitat for each residual; do not assert a standing list of useful cues (F10).
6. Report the molecular mechanism list as `gap`, not as a figure result. Tag every borrowed biological name with its provenance (F7, F8).
7. Send the generator (shape claim plus refuter), not a recording of one occasion (Fig 4 :25, *"A recording carried upward looks like knowledge and is a description of one occasion."*).

---

## 6. Canonical usage check

Two local framework sources were read after the first five sections and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit, the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the three questions of step 7 (SEARCHED, INWARD, OUTWARD), and the mode rule. Step 7 was run explicitly: SEARCHED first (no figure line was found that names a pathway), then INWARD (sharpen the per-slot instrument), then OUTWARD (import the biology frame's pathway names as bindings with provenance). These were kept distinct; importing against a budget limit would add an atom that was not needed.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "a five-stop line: genes → proteins → cells → organisms → environments" | **Retracted as topology.** Re-census gives a union of boundaries with feedback cycles (F3). The line is a recording of one direction, not the generator. |
| "information is a substance that moves" | **Retracted at effect level.** What crosses is a bonded carrier across a lossy membrane (F1, F2). |
| "the central dogma conflicts with niche construction" | **Dissolved by re-census.** Sequence-order information and selection pressure are different quantities with different bonds and anchors (F3). No verdict flipped. |
| "shape, not a name" as a ban on biological names | **Narrowed and kept visible.** It governs a *missing primitive* (a term not held in Γ). Naming transcription, translation or methylation is a binding from the biology frame onto a held cross-kind composition, provenance required, not a forbidden invention. See `05` §5b. |
| Fig 13 applied to genes and proteins as physical states | **Retracted as a strain.** Fig 13 governs the six physical terms; at the biological scale only actors, currency and anchor change (Fig 4 :20, Fig 10 :68). |
| "F1 is merely a metaphor" | **Refused.** Fig 12 :5 is a structural claim about what the bond records; its refuter is experimental, not rhetorical (F1). |
| F7 (mechanism list) | **Canonically confirmed as a gap.** Fig 9 :32 and the README both return a kind of thing, never the answer. `unreached` is reported rather than silence (Fig 8 :39). |
| F8 (no interpreter needed at origin) | **Canonically confirmed.** Fig 11 :36 is explicit: where nothing maintains anything, selection ran. |
| F4 (non-updating anchor) | **Confirmed.** Fig 2 :33 and the README's section on the ground, not agreement, decides. |

---

## 7. Round trip note carried to the audit

The condensation used in `07` and `09` is: *cross-kind composition; lossy membrane; bond carries the information; cyclic topology; non-updating anchor; enumerated habitat.* The concretisation is the biology: transcription and translation, signalling, multicellular coordination, selection and niche construction. Three constraints drop out on the way down: the typed-bond requirement (F1), the loss/gap measurement (F2), and the prohibition on treating agreement as settlement (F4). `11_audit.md` records this as a nonzero `R_T`, measured qualitatively. Treating the formula as identical to the figures would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names.

**Verdict after re-census:** the shape survives with no strain. The literal mechanism list is a declared `gap`. Strains: none hidden, one live type question noted in `06` (whether a directed production bond ⇒ is the right typing for a lossy cross-scale transform), and one honest overlap admission (all figures and essays share one framework evidence pool).
