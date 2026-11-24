# Expert verification packet: the Tether on real-world AI evaluation

**What this is:** a claim in a form an AI evaluation researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the substantive claims, `general` on the structural shape. Not `grounded`.** No deployment measurement is claimed. This is a shape and a route, not a result.

**Status: simulated derivation checked for internal consistency against the figures, not a ground reading.** It cannot settle the question it reports on.

## 1. The claim, in one paragraph

A single evaluation score cannot settle whether an AI system is good in a real environment where outcomes are delayed, multi-valued and human-mediated. What survives is a five-part shape: (1) an outcome anchor that is legitimate for the question and does not move when the score moves; (2) residual reported per slot (use case, population, site, time window, affected party), not as a global average; (3) the habitat enumerated, including the system as an introduced actor and second and third-order effects; (4) at least two low-overlap instruments ranging separately against that anchor; (5) the round trip gap between score and field outcome recorded rather than assumed. Delay is a stale channel to a live ground. Benchmark results are head starts, not capability certificates. What is offered is the shape, six written refuters, and the field tests that would close it.

## 2. Three checkable sub-claims

### C1 - Framework-internal; checkable by reading Figures 1 and 2

- **Statement:** the evaluation score is frame-internal and cannot be its own ground; the ground for a question about people is a human or institutional outcome that does not update.
- **Sources, verbatim:** Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Fig 1 :23 *"The ground enters as the only metric."* Fig 2 :33 *"The anchor must not update."* Fig 2 :36 *"An anchor is legitimate when the question is constitutively about it."* Fig 2 :37-38 *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*
- **Refuter:** show a score that is non-updating under optimisation **and** constitutively about the deployment outcome, or show that the chosen real-world anchor moves when a frame pushes on it. Either breaks the claim.

### C2 - Evaluation-facing; checkable against any real deployment

- **Statement:** residual must be indexed per slot; a global average can be near zero with one live slot. A test harness is a substituted habitat, so a synthetic solve proves wiring and never capability, and human behavior is part of the habitat.
- **Sources, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 11 :70 *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* Fig 11 :40 *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*
- **What to check:** in a deployment you know, can you exhibit a slot with positive residual while the reported global score is healthy? Does a score improvement that leaves habitat contact unchanged leave real outcomes unchanged? If the second fails, the figure's own standing refuter fires.
- **Refuter:** no slot carries a live residual when the aggregate is healthy, **and** an agent-only improvement moves the real outcome. Both would be needed; either one alone only narrows the claim.

### C3 - Framework-internal derivation with a design consequence

- **Statement:** low-overlap triangulation is required, not a larger agreeing room; the round trip gap between score and field outcome must be measured; no evaluation room is final.
- **Sources, verbatim:** Fig 2 :31-32 *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Fig 7 :6 *"the limit: no last room"*
- **What to check:** can you name two instruments for your setting whose evidence overlap is low and measurable? Can you state three constraints that the score abstraction drops when brought back to the field? If the overlap is high or the gap is assumed zero, the verdict has no independent weight.
- **Refuter:** demonstrate convergent derivation at measured near-zero overlap (Fig 8 :50-52), or show a sealed final evaluation room with no outside left to import from.

## 3. Full pre-registered refuter set

Written before any outreach or conclusion (Seat Map :287 *"a falsifier written before the run is a design instrument, not only an honesty device."*):

1. A single score shown to be both a legitimate, non-updating anchor and to retain the per-slot where-to-look signal.
2. An agent-only improvement that moves real outcomes without changing habitat contact.
3. Two frames with measured near-zero overlap whose agreement is independent convergence, not shared evidence.
4. One lever that clears delay, ambiguity and human response with no categorical residue.
5. A sealed final evaluation room with no outside left to import from.
6. A metric that remains a live channel to the field outcome indefinitely with no maintenance.

## 4. What is explicitly not claimed

- Not that benchmarks are useless. They are head starts (Fig 4 :22 *"Only methods cross up. Only head starts come down."*).
- Not that any named metric, venue or metric suite is the anchor. The framework returns a shape, not a name.
- Not that any specific deployment was measured, and not `grounded`.
- Not that human judgment is always the anchor; only when the question is constitutively about people.
- Not that the three conditions are one problem. They are a union compound with separate loops.
- Not that this packet has been tested against a ground. It is a simulation.

## 5. Provenance

- Question: `reasoning.txt` line 114, section 10, ID REA-0093.
- Figure text extracted verbatim from the 13 figures plus the Operators and Symbols tables; local canonical extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked 2026-11-24.
- Canonical usage rule and seat rules: local `FIGURES_README_canonical.md` and `THE_SEAT_MAP_Field_Guide_amended.md`.
- Eight essays by Isaiah N, 2026, listed and quoted in `05_what_shape_means.md`.
- Low-overlap world sources actually opened: HELM (Liang et al., 2022/2023, TMLR), The Leaderboard Illusion (Singh et al., 2025, NeurIPS), AI Measurement Science chapter 11 (Stanford AIMS textbook, 2025), Thomas and Uminsky (Patterns, 2022), Holleman et al. (Frontiers in Psychology, 2020), CAST via the StatsAlly explainer citing Echt et al. (NEJM, 1991), and Ericsson and Irons (1995) quoting Lucas (1976). All are in `10_source_ledger.csv`.
- Packet compiled 2026-11-24.

## 6. What would settle it

1. **Anchor test:** does the named outcome stay fixed while the score is pushed up, and is the question about that outcome?
2. **Per-slot test:** publish the per-slot residual table, not only the aggregate.
3. **Habitat test:** does a score-only improvement leave real outcomes unchanged?
4. **Independence test:** measure the overlap between the two instruments.
5. **Round trip test:** measure `R_T` between score and field outcome and list the dropped constraints.

## 7. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22, :27 and Fig 2 :33, :36, :37-38, :31-32. Seven short passages.
2. Pick one deployment you know and name the legitimate anchor. Ask whether it moves when the score moves.
3. Name one slot you suspect carries positive residual while the global score looks healthy, and one second-order human effect the harness omits.
4. Name one instrument with low overlap with your first one, and one thing the score abstraction drops on the way back to the field.
5. Send the refutation. A failure is more useful than an endorsement. If you would rather not engage, no reply is needed.

**Status:** simulated derivation. Internal consistency against the figures is all this packet establishes. It is not corroboration, not a second witness, and not a ground reading.
