# Expert verification packet: reproducibility practices in computational complexity science

**What this is:** a claim in a form a reproducibility researcher, computational-methods specialist or complexity-science modeler can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the practice set, `general` on the structural claims, not `grounded`.** No controlled comparison is claimed. This is a shape and a route, not a measured result.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.

---

## 1. The claim, in one paragraph

A published computational result in complexity science is reproducible only if three constraints hold together: its lineage is recoverable (exact software versions, data provenance, parameter values, seeds and the executable route between them), its tolerance for agreement is declared before the comparison, and at least one frame with a different closure ranges against the same unmoving ground. Re-running the same container with the same seed is repeatability, not corroboration. A synthetic harness proves wiring, never capability. The cost of describing a configuration and the cost of executing the search to settle it are in different units and must be reported apart. The practices run in dependency order, with the declared comparison as the link that usually breaks. What is offered is the shape any reproducible result must have, five refuters written in advance, and the tests that would close it.

## 2. Three checkable sub-claims

### C1: framework-internal; checkable by reading Figure 13 and Figure 10

- **Statement:** the artifact does not carry its own provenance. The lineage is the proof, not documentation added for politeness.
- **Source, verbatim:** `Fig 13 :128` "Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available." `Fig 13 :130` "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term." `Fig 10 :63` "The residual it answered, the reasoning, the date, in a record the seats below can read."
- **Cross-field check:** Sandve et al. (2013) Rule 1 requires the program name, version, exact parameters and inputs for every step; Wilson et al. (2017) requires recording all processing steps; FAIR applies to workflows as well as data. Three independent author groups agree operationally.
- **Refuter:** exhibit a published artifact from which an independent party can decide both provenance (how it was made) and decidability (whether it could have been reached from the declared library) with no lineage record. If that exists, C1 fails.

### C2: verification-facing; checkable against the reproducibility literature and against your own standard

- **Statement:** reproducibility is a threshold comparison within a declared tolerance (⋛), not bitwise identity (≡), and it requires a frame whose closure differs. Repeatability (same team, same setup) is a different substance, not a weaker degree of the same one.
- **Source, verbatim:** `Fig 4 :30` "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." `Fig 2 :35` "Alignment is triangulation, not negotiation. A mirror cannot correct you." `Fig 2 :40` "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
- **Cross-field check:** ACM Artifact Review and Badging version 1.1 defines repeatability, reproducibility and replicability by which operands are held fixed, and states: "exact replication or reproduction of results is not required, or even expected. Instead, the results must be in agreement to within a tolerance deemed acceptable for experiments of the given type."
- **Refuter:** show that bitwise identity across two different software stacks is both achievable and the correct acceptance criterion, or that two runs sharing code, data and seed count as a verdict for the world in a real publication standard. Either result breaks C2.

### C3: habitat and cost; checkable by a complexity-science modeler against a real system

- **Statement:** reproducing the code path is not reproducing the result's habitat, and description cost and settling cost cannot be added into one score.
- **Source, verbatim:** `Fig 11 :70` "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." `Fig 12 :125` "A composition costs in two currencies, and they do not add." `Fig 12 :126` "Bits price the description. Actions price finding out whether it holds."
- **What to check:** on a model you know, does a result on generated data survive when the contact conditions (initial states, interaction rules, boundary conditions, data revision) actually change? Does a single "reproducibility score" over config length and compute budget predict survival better than the two reported apart?
- **Refuter:** the harness result transfers with no contact conditions reproduced, or one summed number predicts reproducibility better than the two held apart. Either breaks C3. Fig 11 :71-72 already names the deeper refuter: "an agent-only improvement that moved the ground would refute the capability claim."

## 3. What is explicitly not claimed

- Not a reproducibility score, rubric or ranking of people or venues.
- Not that a badge, checklist or container makes a claim true. Those are filters for the budget (`Fig 9 :60` "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").
- Not that bitwise identity is the target, and not that same-stack re-runs are worthless. They find transcription errors and hardware faults; they are not corroboration.
- Not that synthetic benchmarks are forbidden. They are valid for wiring and invalid for capability.
- Not that the framework selects which tolerance or implementation is correct. No measurement here was taken.
- Not `grounded`. Nothing in this packet has been settled by an experiment.
- Not the only possible practice set, and not a theory of everything. There is no last room (`Fig 7 :6`).

## 4. Provenance

- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim extraction from 13 SVGs plus Operators and Symbols tables, read 2026-11-22. Every `Fig N :line` quote above was checked against this file.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, read 2026-11-22.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, read 2026-11-22.
- Eight essays by Isaiah N, 2026-08 to 2026-11, read 2026-11-22; used in `05_what_shape_means.md`.
- External sources, all fetched 2026-11-22: Sandve et al. 2013 (PLOS Computational Biology), Wilson et al. 2017 (PLOS Computational Biology), Wilkinson et al. 2016 (Scientific Data), ACM Artifact Review and Badging v1.1 (2020), ACM artifacts program, The Turing Way, JOSS. Full provenance in `10_source_ledger.csv`.
- Compiled 2026-11-22. Simulated derivation; no ground reading.

## 5. What would settle it

A controlled comparison on a named complexity-science model with a fixed dataset, a declared tolerance and an independent implementation. The five loss conditions are in `01_figure_grounded_audit.md` section 3. The relevant question for each is: what would you count as a failure of this claim? If a failure is named and run, the corresponding part of the claim is withdrawn. Agreement with the framework is not a substitute for that run: *The Recursive Self-Improvement Trap* (2026-11-19) states "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."

## 6. What an expert can check in twenty minutes

1. Read `Fig 13 :128`, `:130`, `Fig 10 :63`, `Fig 4 :30`, `Fig 2 :35`, `:40`, `Fig 11 :70`, `Fig 12 :125-126`. Eight short passages.
2. Check C2 against your institution's or journal's own reproducibility standard. Does it already treat same-stack re-runs as repeatability rather than corroboration?
3. Name one intervention on a model you know that would test C3, and say which contact conditions you would have to reproduce.
4. Write down one failure condition for C1, C2 and C3 before reading `01_figure_grounded_audit.md`.
5. Send the failure. A reported failure is more useful than an endorsement.

**Status:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
