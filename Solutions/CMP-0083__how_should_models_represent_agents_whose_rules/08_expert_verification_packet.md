# Expert verification packet : the Tether on changing, heterogeneous agents

**What this is:** a claim in a form an agent-based modeler or simulation researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the four requirements, `general` on the structural shape, `gap` on the identity of the live rule. Not `grounded`.** No model was built or run. This packet is a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.

## 1. The claim, in one paragraph

A model of agents whose rules, goals or information access differ across time and context must satisfy four structural requirements: keep the residual indexed per agent-slot and per step rather than pooling it; encode heterogeneity as typed relations over a shared library rather than as opaque type labels; carry a reapplicable method with its purchase conditions across context changes rather than replaying a recording; and re-enumerate which agents matter for each new residual. It must hold description cost and ground-check cost in separate columns, and it must report as a `gap` which specific rule is live at a slot, because several rule histories can produce the same behavior and outputs alone cannot discriminate the source. The framework returns this shape and the refuters; it does not return a modeling language or a rule taxonomy.

## 2. Three checkable sub-claims

### C1 : framework-internal plus modeling-facing; checkable by reading Figure 1 and by a pooling intervention

- **Statement:** the residual must stay indexed per agent-slot. Pooling into a representative agent is not a harmless approximation; it is the operation that discards the signal.
- **Source, verbatim:** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Also Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Also Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." Symbols :42 "One object, region or entity being tracked. R is measured per slot, never as a single global number."
- **What to check:** construct or recall a case where one agent changes rule or information at one step while the population average stays near zero. Ask whether the pooled model has any slot on which that change can register. Fig 1 :13 states that "a global R near zero with one live slot residual is a legal state", so this is expected, not exotic.
- **Refuter:** a pooled representation that preserves every per-slot residual trajectory without loss and whose aggregate still pays at the ground after an independent agent-level intervention. If it does, the per-slot requirement is a preference, not a law.

### C2 : framework-internal; checkable by reading Figure 12 and the Operators table

- **Statement:** rule, goal, information limit, progress and rule replacement are different operator kinds. Rule is `→` sequence, goal is `⋛` comparison, information limit and progress are `−` subtraction, rule replacement is `¬` negation. Negation is unary, not a bond, and its price is open.
- **Source, verbatim:** Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." Also Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Also Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Operators :51 "a goal is a comparison, which is why a vocabulary without it cannot state one"; Operators :57 "is the point that it is false, rather than absent? Yes."; Operators :77 "What a unary operator costs is open."
- **What to check:** take two agents with identical state variables where one has an update step before acting and the other has that input removed. Under Fig 12 they are isomers, not variants of one type. Ask whether an ingredient-only representation can tell them apart. It cannot, because the difference is carried entirely by the bond.
- **Refuter:** a flat, bond-free representation that writes a route, a threshold, an absence and a refusal, pays at the ground, and costs less in bits than the typed encoding. If it does, the bond requirement is bookkeeping, not structure.

### C3 : framework-internal plus modeling-facing; checkable by reading Figures 4, 10, 11 and by a pre-registered context shift

- **Statement:** across time and context, a reapplicable method crosses and its purchase conditions are stamped; a recording of the rule that worked does not. Which agents matter is re-enumerated per residual, not held as a standing list.
- **Source, verbatim:** Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." Also Fig 4 :22 "Only methods cross up. Only head starts come down." Also Fig 10 :72 "When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom." Also Fig 11 :51 "No standing list of good actors survives a change of residual." Also Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone."
- **What to check:** pre-register a context shift and ask whether the carried rule still pays without re-grounding. Then ask whether the agent-importance ranking used before the shift still holds after it. Fig 4 :30 requires the round-trip gap to be measured: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- **Refuter:** a fixed rule set and a fixed importance list that continue to pay at the ground across an independent, pre-registered context shift. If they do, the method-not-recording and re-enumeration requirements are narrowed.

## 3. What is explicitly not claimed

- Not a modeling language, architecture, parameter count or claim that one formalism is best.
- Not a representative agent, and not that pooling is a harmless approximation.
- Not a fixed agent taxonomy. The six terms of Fig 13 are structural roles, not agent kinds.
- Not a rule-identification procedure. The operator set has no such operator, and `¬` refuses a rule without identifying its source.
- Not a single objective that merges description bits and ground-check actions.
- Not `grounded`. No model was built, run or measured.
- Not a claim that the world sources prove the framework. They are low-overlap corroboration of the *shape* only, and the four framework essays share the author's evidence pool with the figures.

## 4. The gap, stated explicitly

Which rule, goal or information set is actually live at a slot and a step is a `gap`. Several rule histories can produce the same behavior, so behavior is a projection with lossy information (*The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information"). Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it." This is unreachable-at-this-budget, not proven underivable: Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." A source-discriminating instrument would close it. Agreement, authority or a vote would not (Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you.").

## 5. Provenance

- Question: `complexity science.txt` line 102, section 9 (Modeling, measurement, and reproducibility), ID CMP-0083.
- Figure text extracted verbatim from the canonical file `FRAMEWORK/reference/03-FIGURES_TEXT.md`; citation form is `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Eight essays by Isaiah N, 2026-08 to 2026-11; four opened directly this session and four carried from the exemplar's canonical mapping, declared in `05_what_shape_means.md`.
- World sources read 2026-11-22: Grimm et al. 2020 (JASSS 23(2)7), Talaga and Nowak 2020 (JASSS 23(2)6), and the Wikipedia entries on agent-based models, animal personality, POMDP, concept drift and bounded rationality. Full details and quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22, :28 and Symbols :42 (four short passages). Recall one case where a pooled score hid a live agent-level change. Does the per-slot requirement follow, or is it a preference?
2. Read Fig 12 :112 and Operators :51, :57, :77. Take two agents with the same ingredients and different rule bonds. Can an ingredient-only representation distinguish them? If yes, C2 is refuted.
3. Read Fig 4 :25, Fig 10 :72 and Fig 11 :51. Name one context shift in your own modeling work where a recorded rule stopped paying and a fixed importance list failed. If you cannot name one, say so; that is useful too.
4. Try to break the shape using any of the seven refuter conditions in `01` §4. State which one you would test first and what result would fire it.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation, checked for internal consistency against the figures. It cannot settle the claim it reports on.
