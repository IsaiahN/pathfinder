# Second-seat audit of the REA-0041 solution

**Mode: `specified`, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same formula, the same essays, the same world sources. Fig 2 :40 says *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken. This audit cannot settle the question it audits.

The material audited is the full solution folder: `01`, `05`, `06`, `07`, `08`, `09`, `10` and the outreach artifacts.

## Independent domain census

I redid the census from the residual line alone, before reading the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is the failure of carried memory to shrink a new encounter's error. Arity: at least two encounters, and the error is indexed per slot. Symmetry: the record and the reach are not symmetric (one monotone, one not); a method and an occasion-record are not symmetric across the membrane. Scale: settling within one scale, method transfer across scales with a lossy round trip.
- **Domain 1, store / record.** Actors: primitives, Γ, closure. Currency: bits. Anchor: the ground pays for a term. Partition (what may enter the library).
- **Domain 2, reach / usable memory.** Actors: settled molecules, methods. Currency: derivability. Anchor: the ground, with reach falling on refutation. Partition against D1.
- **Domain 3, membrane.** Actors: one agent, population, methods, recordings. Currency: methods up, head starts down. Anchor: the round-trip gap. Filter with direction.
- **Domain 4, channel maintenance.** Actors: seat, percepts, instruments, habitat. Currency: contact and channel decay. Anchor: the ground, which does not decay. Seat's office.
- **Domain 5, dependency chain.** Actors: perception, vocabulary, objective, planning, carry. Currency: each link's output. Anchor: the objective link, where chains break. Ordered dependency.

Order by dependency: record, settle, reach, carry, maintain contact. The carry link consumes the objective link (Fig 3 :20).

**Comparison with the primary census.** My boundaries match the primary's five domains. Where the primary derived the record/reach split from Fig 6 :42-43 and Fig 5 :72, I derived it from Fig 5 :69-72 (settlement) and Fig 11 :39-40 (contact), which are different starting figures with low overlap. The membrane and channel domains match exactly. The union reading came in my census from Fig 9 :54-55, the same figure the primary used, so that part is shared rather than independent. Overall: low overlap on two routes, shared on one. Agreement is expected and carries no independent weight because the evidence pool is one.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked each line below character by character before relying on it. Each is a primary quote, none taken from a summary.

- Fig 6 :42 "What is recorded only grows. What is reachable is derived, and it can fall." checked. The SVG line continues into the refutation sentence; my quotation stops at the full stop.
- Fig 6 :43 "So the closure and the reach are two quantities: one monotone, one not." checked.
- Fig 5 :72 "a library that grows is not a reach that grows." checked; a substring of the full line.
- Fig 5 :55 "Nothing leaves the library. What falls is the reach." checked.
- Fig 4 :22 "Only methods cross up. Only head starts come down." checked.
- Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." checked.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." checked.
- Fig 5 :69 "settling is necessary for a term to be composed over, and it is not sufficient." checked; a substring of the line beginning with the amendment marker.
- Fig 12 :106 "Nothing composes over what was never admitted as a part." checked.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 3 :20 "The chain is ordered by dependency, not by importance." checked; a substring of the longer line.
- Fig 3 :15 "name what worked, verify it, and carry it to the next problem" checked.
- Fig 10 :24 "the ground does not decay, the channel does." checked.
- Fig 10 :29 "→ keep the anchor reachable" checked.
- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it." checked; the primary quote is a truncation of the full line, which ends "and there is no bottom." The shorter form is a substring, not a different quote.
- Fig 12 :130 "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term." checked.
- Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone." checked.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.
- Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again." checked; a substring of the line.

All checked lines are present verbatim in the extract. No quote drifted. The truncation at Fig 12 :104 and the substring at Fig 9 :54 are recorded explicitly so a later reader can see what was shortened.

## Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`, and Fig 4 :30 requires it to be measured rather than assumed zero. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 6 :42-43 (record versus reach), Fig 4 :22-25 (method versus recording), Fig 1 :19 (per-slot), Fig 3 :20 (dependency), Fig 11 :39-40 (contact).
2. **Abstraction (T_A):** the shorthand in `07_the_tether_answer.md`: separate the record from the reach, store methods not records, index per slot, order by dependency, judge by contact.
3. **Concretisation (T_E):** a proposed cognitive taxonomy naming which memory systems occupy which slots.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **refusal operator** (Fig 5 :55, Operators table ¬), which a subtraction-only memory cannot represent;
- the **per-slot indexing** (Fig 1 :22), which a global-average implementation drops silently;
- the **objective link** (Fig 3 :25-27), which has no instrument and cannot be assumed present just because the carry link was improved.

One thing survives cleanly: a method is transmissible where an occasion-record is not, and the record and reach are different quantities. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the shape is the taxonomy" would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## Strains and re-census

- **Record/reach as state/structure.** Tried and retracted. Fig 13 governs the six substrate terms; record and reach differ by monotonicity (Fig 6 :43). Different objects, so no contradiction between figures. Matches the figures README re-census rule.
- **Union versus partition.** The five memory functions form a union (Fig 9 :54-55); record versus reach is a genuine partition of quantities (Fig 6 :43). These are different levels of description, not a strain. I checked that the primary does not average them: `07` §3 lists them as distinct organizing rules. Confirmed.
- **Episodic/semantic separation.** The world sources disagree about whether the systems are distinct. Not a figure strain, because the figures do not depend on that taxonomy. `09` records the contestation rather than smoothing it.
- **Isomer claim.** `06` Q3 marks the functions as a functional group unless written over a full shared atom set. This is a single-source figure reading (Fig 12) with a falsifier. Named, not hidden.
- **After re-census: zero concealed strains; one named limitation (union reading), one contested world taxonomy.**

## Verdict on the solution

**On internal consistency: the solution passes.** The folder is consistent with the verbatim figure text and with its own retractions. `01` records the retracted "record/reach is Fig 13's two kinds" reading and the narrowed "shape, not a name" claim; `05` §8 preserves both corrections; `06` carries the dependency order and its falsifier; `07` states mode, non-claims and four falsifiers; `08` gives three checkable sub-claims with verbatim lines, refuters and provenance; `09` carries the full WATSON shape with cost, undoability and reversal; `10` lists every source actually read with access date and overlap. No figure quote was found to have drifted.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the memory claim is true.

**On the claim: `specified`, ungrounded, candidate.** The shape survives (record versus reach; method versus occasion-record; settled status; per-slot residual; channel maintenance; lineage; dependency order). The settled taxonomy does not. Nothing here is settled: a source-discriminating instrument that separates a method from an occasion-record, a measured separation of stored-term count from reachable-set size, or a per-slot readout that locates a live slot a global average misses would be required to move parts of it toward `grounded`. Agreement or prestige is not such an instrument.

**Recommendation.** Send the packet with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the shape claim and the four refuters in front of the links.
