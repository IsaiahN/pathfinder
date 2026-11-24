# Expert verification packet: information gain and rational inquiry

**What this is:** a claim in a form a researcher in information theory, experimental design, decision science, or behaviour can check. Mode, derivation, and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` where applied. Not `grounded`.** No experiment comparing inquiry policies is claimed. This is a constraint on the shape of an answer, not a result.

**Status: simulated derivation, not a ground reading.** It cannot settle the claim it reports on.

## 1. The claim, in one paragraph

Information gain is necessary for rational inquiry but not sufficient. It is a filter that says where signal may be and a gradient generator when nothing is scoring. A next inquire-move is admitted only after three further checks: relevance is the slot index of the live residual (a global average discards the only signal that says where to look); the acceptance rule is a two-sided bargain that charges both the candidate and the unexplained residual; and two currencies must be held apart, bits for the description and actions for finding out whether it holds, with summing them explicitly refused. Consequences enter as a range against a ground the frames cannot move, with independence bought in proportion to the cost of being wrong. The four conditions form a union compound, not a weighted single score, so "combined" is categorical rather than additive. No weighting among them is derived.

## 2. Three checkable sub-claims

### C1 - The self-scored gain is frame-internal, and the residual is per slot

- **Statement:** A quantity the frame produces cannot be the metric that settles the frame's move. A global gain scalar also has the wrong symmetry because the governing residual is indexed by slot.
- **Source, verbatim:** Fig 1 :23 "The ground enters as the only metric." Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." Fig 5 :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."
- **What to check:** is a gain score always computed by the same frame that would use it to choose? Does any figure line aggregate `R` across slots?
- **Refuter:** show a figure line that makes a self-scored quantity the ground; or derive a global gain ranking that provably lands on the live slot for every possible arrangement of slot residuals.

### C2 - The acceptance test is a bargain in two currencies that do not add

- **Statement:** Gain is one term in a comparison that already contains cost and leftover. Description bits and inquiry actions are different units and both must be read.
- **Source, verbatim:** Fig 5 :42 "The acceptance test is a bargain, not a threshold." Fig 5 :43-44 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."
- **What to check:** does `THE_FORMULA.md` step 3 write `accept iff cost(φ) + left(R,φ) < cost(R)`, with gain appearing only in the leftover? Does Fig 12 forbid the addition explicitly?
- **Refuter:** derive a measure in which action cost is bits with no information lost; or exhibit an acceptance in the framework that admits a candidate on gain alone with no cost term and no leftover.

### C3 - The verdict ranges against a ground, and the legs form a union

- **Statement:** The budget filters, the ground decides, and independence is bought against the cost of being wrong. The four conditions are overlapping, so a single lever clears only one of them.
- **Source, verbatim:** Fig 2 :42 "Buy independence in proportion to the cost of being wrong." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
- **What to check:** is there any figure path from a frame's own gain score to a settled verdict without a range against an immovable anchor? Can the four conditions be shown to bind on disjoint move sets?
- **Refuter:** show a verdict produced without any ground range; or re-census the four legs as a partition in which clearing gain alone clears the whole decision; or exhibit an agent-only gain increase that moves the ground while contact is fixed.

## 3. What is explicitly not claimed

- Not that information gain is useless. It is a filter and a gradient generator (Fig 5 :46-47).
- Not an objective function, a weighting, or a named policy. No field-specific formula is derived.
- Not `grounded`. No comparison of inquiry policies was run.
- Not that the shape resolves rational inattention, value of information, or Bayesian experimental design. Those literatures are external frames with their own grounds.
- Not that the four legs are neutral or exhaustive. Declaring constraints makes them visible, not neutral (*They're Scanning Books*).
- Not a second witness. This packet and the audit share one evidence pool and one author; their agreement is internal consistency, not corroboration.

## 4. Provenance

- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim extract of Isaiah's 13 figures plus the Operators and Symbols tables, opened 2026-11-23. All `Fig N :line` citations above are from that file.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, opened 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, opened 2026-11-23.
- Eight essays by Isaiah N, 2026-08 to 2026-11, opened 2026-11-23; see `05_what_shape_means.md` for URLs.
- World sources (secondary): Tishby/Pereira/Bialek 1999/2000; Maćkowiak/Matějka/Wiederholt 2023; Sims handbook chapter; Jackson/Presanis/Conti/De Angelis 2019; Adriaans & van Benthem 2012/2023; Wu/Nakazato/Yang/Shimokawa 2022; Dunlap/Papaj/Dornhaus 2017; Rainforth/Foster/Ivanova/Bickford Smith 2023. Full URLs, quotes, and overlap in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating ground, not another argument. *The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information (it cannot define consciousness in full)." A single information-gain reading is such a projection; several inquiry policies can yield the same bits. What is owed is an instrument that separates them:

1. Hold information gain equal across two inquiry policies and vary the slot index, the two-currency accounting, and the ground range independently. Which changes the policy's settlement?
2. Does an action-cost variation change which move is affordable even when the bits are unchanged?
3. Does a ground that cannot be moved by either frame change the verdict when the two frames agree?

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :23, :27, :28 and Fig 5 :42, :48, five short passages.
2. Read Fig 12 :125-126 and :130. Decide whether a bits-only objective is even expressible without loss.
3. Read Fig 9 :55 and :60. Decide whether the four conditions are a union or a partition in your own field.
4. Name one instrument that would discriminate two policies with the same gain score, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
