# Figure-grounded audit: are downturns self-correcting?

**Mode of this document: `general` on the structural shape, `specified` on the two-regime split. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, read 2026-11-22) says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` §6.

**Sources.** All figure quotes are taken from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extract, opened this session). Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Metalaw reading: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and were opened 2026-11-22.

---

## 0. The residual, stated in effect terms

The question asks us to choose between two outcomes. So bind the choice as an ordinary term before searching (Fig 5 :65: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else").

- **Bet and action.** A market economy bets on a path of spending, output and employment. It acts by setting prices, wages, interest rates, output and hiring. Write the bet as `Γ(b,a)` and what happens as `o'`.
- **Residual.** `R_s = |Γ(b,a) − o'|` indexed by slot `s`, where a slot is a sector, a region, a cohort of workers or a balance sheet. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :23: "The ground enters as the only metric." For this question the ground is realized spending, output, employment and prices, observed in national accounts and labour statistics.
- **Bound term under test.** Define, as a `specified` term, **self-correcting** = "the per-slot residual `R_s` trends toward zero within a stated horizon H, using only adjustments composable inside the private frame, with no new atom imported from a frame whose closure differs." Define **persistence** = "at least one slot carries positive mass that does not trend down over H." The horizon H and the closure boundary are declared, not discovered; that declaration is itself a finding (F8).
- **What each option leads to.** If self-correction holds, intervention is an unnecessary import and the correct move is INWARD (sharpen the instrument, wait for adjustment). If persistence holds with no atom available inside the private closure, the correct move is OUTWARD: import final demand from a frame whose closure differs (fiscal spending, central bank money, foreign demand). Choosing wrongly in either direction has a cost: premature intervention adds an atom that was not needed (Fig 8 :42), while refused intervention leaves a live residual unaddressed.

**The residual itself.** After a downturn begins, what fails to resolve is the gap between the predicted path and the observed path in particular slots. The question is whether that gap trends down by internal adjustment alone, or whether no adjustment inside the private closure can close it.

---

## 1. Domain census before choosing any figure line

R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency (Fig 3).

- **R (arity / symmetry / scale).** Arity: at least two conditions, not one (see the union finding F6). Symmetry: broken. Fig 1 :19 says the residual is indexed by slot; a representative-agent model imposes a symmetry the residual does not have. Scale: the private adjustment loop closes at one scale (firms, households, banks); the policy frame is a different stratum with different actors, currency and anchor (Fig 10 :68: "Different actors, a different currency, a different ground, and a lossy transform between").
- **Domain 1, the private adjustment frame.** Actors: firms, households, workers, banks. Currency: prices, wages, interest rates, inventories, quantities. Anchor: realized transactions, output and employment, which do not move because a model thinks otherwise (Fig 2 :29). This is a genuine domain: it has a nameable anchor (markets and counts). Its closure `Γ_1` contains relative prices, wage flexibility, interest-rate adjustment, inventory cycles and intertemporal substitution.
- **Domain 2, the policy / import frame.** Actors: treasury, legislature, central bank, foreign sector. Currency: fiscal spending, taxes, money, credit, guarantees. Anchor: the same outcomes as Domain 1, but reached from a different closure `Γ_2` containing a term not derivable inside `Γ_1` at the relevant time: a spender whose demand does not depend on private profitability. Different closure from Domain 1, so it qualifies as an import source (Fig 6 :23). If the same closure could supply the term, there would be no Domain 2 and the question would be settled as self-correction by definition.
- **Domain 3, the measurement and verification frame.** Actors: statistical agencies, econometricians, economic historians. Currency: estimates, confidence intervals, revisions, residuals. Anchor: the data series, which is the ground here, but with a caveat recorded as a strain (S1): the measured anchor is partly a maintained convention and can be revised (Fig 10 :18: "a declared meaning is not a grounded one"). Independence in this domain is low in practice, because most macro datasets are one evidence pool; Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
- **Partition or union.** Union, not partition. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." The reachability condition (is the needed demand inside `Γ_1` and merely misrouted?) and the absence condition (is there any final demand at any resolution inside `Γ_1`?) overlap. A balance sheet recession is both a broken interest-rate channel and an absence of willing borrowers. So this is a compound with its own loop, not two independent questions to average.
- **Order by dependency (Fig 3).** Perception: is there a persistent per-slot gap? Vocabulary: do we have terms for what the situation affords (output gap, natural rate, liquidity trap, debt overhang, hysteresis)? Objective: what counts as recovery (employment, output, price stability)? Planning: which frame holds the missing term? Learn and carry: name what worked, verify it, carry it to the next downturn. The classical versus Keynesian dispute most often stalls at the third link, which has no instrument of its own (Fig 3 :26: "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments").

**Strain test applied before concluding.** Fig 13's six physical terms (space, time, energy; spectrum, gradient, network) were re-censused and not forced onto macroeconomic categories. Mapping sectors onto spectrum or spending onto gradient would only fit with a strain, so by the rule it governs another quantity: here the governing figures are the residual, closure, ground and union figures (1, 2, 3, 5, 6, 8, 9, 10, 11). Recorded in the retraction log.

---

## 2. Figure census

All 15 primary artifacts. Verdicts are per figure, not averaged.

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual is per slot; ground is the only metric; frame-internal quantities cannot score the frame | governs the measurement setup (F1) |
| **2 The Ground** | anchor must not update; agreement from one pool is not corroboration | governs the verdict source (F5) |
| **3 Dependency Chain** | a reading below the break is a reading of nothing; the vocabulary-to-objective link has no instrument | governs the dependency order and explains the stall |
| **4 The Membrane** | only methods cross up; round trip carries a gap R_T | governs how a condensation of the figures may be used |
| **5 Mint Pipeline** | persistent, flat residual points a refusal at a held term; shape must be bound as an ordinary term | governs F4 and F8 |
| **6 Closure / Reachability** | no frame escapes its closure; inward and outward are opposed; depth and absence look the same | decisive for the two-regime split (F2, F3) |
| **7 Room Chain** | a room's agreement is variation, not a verdict | corroborates F5; no last room |
| **8 Union Surplus** | closure idempotent; no search adds an atom; a search that finds nothing proves nothing | decisive for F2 and the honest stop |
| **9 Leave / Arrive** | split a compound before searching; describe the residual before picking a frame; filters are not witnesses | decisive for F6 and F7 |
| **10 Ground Maintainer** | the ground does not decay, the channel does; bring a characterised residual, never the source | governs outreach order and the data-quality caveat |
| **11 The Habitat** | introduction is available, exclusion is not; capability is agent-and-habitat | governs the asymmetry of intervention (F9) |
| **12 The Bond** | cycle: the output re-enters as input, sign decides whether it closes | governs the feedback-loop reading (F9) |
| **13 Minimum Viable Set** | six physical terms; cross-kind composition | **re-censed out of direct application**: forcing the physical six onto macro would strain. See retraction log |
| **Operators table** | negation refuses a claim; subtraction only removes an operand | supports F4 (a refusal is owed, not a new explanation) |
| **Symbols table** | R is the aim; the ground is the anchor; R_T is the round-trip gap | supports the residual and audit sections |

---

## 3. Findings F1 to F9

Each finding quotes the figure line verbatim before concluding, states its mode, and carries a refuter.

### F1 — Demand must be measured per slot, not as an aggregate

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

A single "aggregate demand" number is the wrong object if the live mass sits in particular sectors, regions or balance sheets. The classical story (representative agent, one price level, continuous market clearing) imposes a symmetry the residual does not have. "Weak demand persists" is therefore a claim about at least one slot, not about the mean. This is `general` (a measurement constraint), not a claim about any particular recession.

**Refuter.** If a full sectoral and regional decomposition shows every slot's residual trending down together through the downturn while only the aggregate appears flat, the slot-wise claim is unnecessary and the aggregate is the right object. Until such a decomposition is shown, an aggregate-only verdict is a live signal averaged away.

### F2 — Internal adjustment cannot add an atom; intervention is an import

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

If the thing needed for recovery is a source of final demand that is not in the private closure `Γ_1`, then no amount of internal adjustment (lower wages, lower prices, lower rates, inventory rundown) manufactures it. Lowering the price of credit does not create a borrower where every private agent is minimising debt. A public spender, a central bank balance sheet or a foreign buyer is a term from a frame whose closure differs, and importing it is what moves the wall (Fig 6 :14: "the only operator that moves the wall").

This is `specified`, and explicitly conditional on the closure boundary. It is not the categorical claim that markets can never self-correct. If the needed demand is already inside `Γ_1` and merely mispriced or misallocated (a reachability failure), then Fig 8 :32 implies the opposite: more search inside the frame, not an import. The boundary must be declared (Fig 9 :27: "describe it before you go looking, or any frame you pick will seem to fit").

**Refuter.** Exhibit a private adjustment mechanism that creates a new source of final demand from inside `Γ_1` after nationwide balance-sheet damage at the zero lower bound, with no public or foreign atom. If observed repeatedly, Fig 8 :32 has been applied to the wrong closure and the intervention conclusion fails.

### F3 — Depth and absence look the same from inside; this is the decisive split

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 8 :40: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

The same observed persistent gap is consistent with two different worlds:

1. **Depth / reachability failure.** The demand exists inside `Γ_1` but is not arriving: sticky wages and prices, a savings-investment coordination failure, a credit channel that has stopped transmitting. Instruction: INWARD, extend the instrument (Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access").
2. **Genuine absence.** There is no source of final demand at any resolution inside `Γ_1`: a liquidity trap where money is held rather than spent, or a balance sheet recession where the entire private sector saves and no one borrows. Instruction: OUTWARD, import (Fig 6 :30: "outward: does another frame already hold it? The description travels").

The two must never be read against each other (Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other"). This is the strongest figure-grounded result in the folder: it explains why the classical and Keynesian literatures can each be internally coherent and still disagree, because each is reading one of two indistinguishable states from inside the frame. `specified` on the split, `general` on the indistinguishability claim.

**Refuter.** If a single within-frame statistic reliably discriminates depth from absence in real time, before the policy decision, then the two are not indistinguishable from inside and this split loses its decision value. That would be a genuine refutation of F3, not a refinement.

### F4 — A flat residual points a refusal at a held term

Fig 5 :59: "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign." Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate."

When the output-gap residual keeps being wrong and does not improve, the move is not to mint another explanation of why recovery is just around the corner. It is to refuse the operative term (for example, "wage flexibility reliably restores full employment in this regime", or "markets clear"). A refusal adds a term; nothing is deleted, and the reach falls because something was added (Fig 6 :42). This is `general` as a method, `specified` as applied to those two example terms.

**Refuter.** Show the same term's residual trending down under observation, with no import and no refusal. Then the term was improving and the refusal was aimed at the wrong object.

### F5 — The ground is outcomes, not agreement among economists

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Counting economists, citing consensus, or assembling a panel of likeminded researchers cannot settle whether weak demand persisted. Those are rooms, not anchors. Most macro datasets are also one evidence pool, so two teams reading the same series are not two frames. Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." Buy independence in proportion to the cost of being wrong (Fig 2 :42: "Buy independence in proportion to the cost of being wrong."). Here the cost is high: a wrong verdict either imposes an unnecessary deficit or leaves a prolonged slump untreated.

**Refuter.** Exhibit a case where an outcome-blind group of agreeing economists reliably predicted the recovery path without any measurement of realised spending or employment, and did so across several downturns. Agreement would then be carrying ground information, which Fig 2 denies.

### F6 — The question is a union compound and must be split before it is searched

Fig 9 :4: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

The debate does not shrink with effort because each side's rule works on a different subset. The flexible-price rule works in ordinary demand shortfalls; the demand-injection rule works in traps and deleveraging episodes. A single lever, "let markets clear" or "stimulate", clears only the region where one condition holds and leaves the intersection standing (Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds"). The residue is categorically different, a specific compound, not a harder case of either. `general` on the split, `specified` on which conditions compose it.

**Refuter.** Exhibit one mechanism that closes both conditions in all observed downturns, so the compound behaves as a partition and no split is owed. Then Fig 9 :54's instruction ("when the split lands on a union rather than a partition, unbundle before you search again") would have been misapplied.

### F7 — "Self-correcting" becomes a measurable trend, and the instrument is improved from a worse one

Fig 5 :59 gives the shrinking test; Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :34: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

The empirically answerable form of the question is not a yes or no about "markets", but a trend: does `R_s` trend down per slot after a perturbation, and at what rate? This reframing is an INWARD move and it has a live instrument to improve from: measured recovery rates of output, employment and credit after recessions. The cross-field corroboration is Scheffer et al. (2009, Nature, read 2026-11-22), who report that complex systems approaching a threshold show "slower recovery from perturbations, increased autocorrelation and increased variance". That is a prediction about the same quantity: recovery rate as a discriminator of regime. It is secondary only; it cannot overrule a figure line. `specified` on the reframing.

**Refuter.** Show two regimes with indistinguishable recovery-rate profiles that nevertheless require opposite policy responses, so a recovery-rate instrument cannot discriminate them. Then F7's preferred ground variable is inadequate and another instrument is owed.

### F8 — The debate's pivot is an unbound preference, not a term

Fig 5 :65: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else." Formula "Direction": a frame "cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."

Much of the classical versus Keynesian argument is a dispute about the horizon H and the closure boundary, neither of which is a term that accrues a residual. They are preferences held by the searcher. Once bound explicitly ("full recovery within H without importing a spender from a different closure"), the preference becomes refusable by the ordinary test. This is why both camps can report "victory" while talking past each other: one has silently set a long H and a wide closure, the other a short H and a private-only closure. `general` as a discipline, `specified` as applied to H and the boundary.

**Refuter.** If the framework itself could fix H and the closure boundary without a researcher declaring them, then they would be terms after all and this finding would be withdrawn. Fig 9 :30 says "your words are borrowed too, so describe the effect rather than the cause," which is why this remains a declared choice.

### F9 — Intervention is asymmetric introduction, and feedback loops decide whether recovery closes

Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not." Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

An intervention introduces an actor (a spender, a lender of last resort) into the private habitat. It cannot subtract the habitat: private balance sheets, expectations and debts remain and must be repaired. This is why managed recovery is continuing work rather than a solved state (Fig 11 :63). And the debt-deflation mechanism is Fig 12's cycle with a negative sign: falling prices raise real debt, which forces more deleveraging, which lowers demand and prices further, so the loop closes. A chain cannot close by construction; only a cycle can. `general` on the asymmetry, `specified` on the sign of any named loop.

**Refuter.** Exhibit an intervention that removes (rather than introduces or compensates for) a private constraint without leaving the habitat to be repaired, and the asymmetry claim fails for that case. Koo's account of debt minimization (world source, read 2026-11-22) is a direct corroboration of the asymmetry: the private sector must finish repairing before self-sustaining growth resumes.

---

## 4. Pre-registered refuter

Written before the conclusion follows. Required by the discipline: a falsifier written before the run is a design instrument.

The shape claim (the two-regime split, per-slot residual, conditional-import conclusion) is refuted if any of the following holds:

1. A single within-closure statistic discriminates, in real time, reachability failure from genuine absence across several downturns (kills F3).
2. A private adjustment mechanism creates a new source of final demand inside `Γ_1` after nationwide balance-sheet damage at the zero lower bound, with no public or foreign atom (kills F2).
3. All per-slot residuals trend down together through the downturn while only the aggregate appears flat (kills F1).
4. An outcome-blind, agreeing group predicts recovery paths reliably without ground measurement (kills F5).
5. One mechanism closes both union conditions in every observed downturn (kills F6).
6. Recovery-rate statistics cannot discriminate regimes that require opposite responses (kills F7).

If any fires, the corresponding finding is withdrawn or repaired in this file with the correction left visible. Until one is run, no part of this folder is `grounded`.

---

## 5. Recommendation

1. Lead with the split (F3) and the bound term (F8), not with a verdict about markets. The figures deliver a decision procedure, not a side.
2. Ask for a refuter first. Use `08_expert_verification_packet.md`, which is the file to send.
3. Treat the empirical question as a ground question: per-slot trend data plus a regime discriminator, not more argument. This is Fig 2 :45: "Frames range against the ground. They do not negotiate with it."
4. Do not import an atom against a budget limit. If the gap is depth, more search and better measurement are the answer; if it is absence, an import is owed. Importing in the wrong regime adds an atom that was not needed, which Fig 8 :42 prices above starting from primitives.
5. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator (the split, the bound term, the refuter), not a conclusion.

---

## 6. Canonical usage check (figures README + WATSON 60, read 2026-11-22)

Two local sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them" and "the quotes are the authority, not this summary." It also says a reading that makes two figures contradict one another "has misidentified its domain, not found a flaw," and that the framework returns "what a missing thing would have to look like (a shape, not a name)" and then stops at the limit the instruments can distinguish, recording the lineage.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws and decide design and structural questions; the seat reads the ground and does not ask the anchor to decide what the figures already settle. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Every double-quoted figure line in this folder was checked against `03-FIGURES_TEXT.md` character by character, not taken from a summary. The figures decide the shape here; they do not report which regime the world is in, so the empirical verdict is honestly `gap` at this budget (Fig 13 :134: "Unreachable is a verdict here, not a silence").

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Fig 13's six physical terms govern the macroeconomy directly; sectors map onto spectrum and spending onto gradient | **Retracted after re-census.** Applying the physical six to macroeconomic categories only fits with a strain, so by the strain test it governs another quantity. The governing figures here are 1, 2, 3, 5, 6, 8, 9, 10, 11. Kept visible so the forced mapping is not repeated. |
| Fig 8 :32 proves markets can never self-correct | **Downgraded to conditional.** It proves nothing about self-correction unless the private closure `Γ_1` is fixed and shown to lack the needed atom. Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room." A market is not a sealed room, so the boundary is a declared, refutable choice. |
| "Depth and absence are indistinguishable" is a claim about permanent ignorance | **Narrowed.** It is a claim about indistinguishability from inside the current frame with the current instrument (Fig 6 :27). A better instrument can move it; the essays' metamerism example (source instrument reads green but cannot comment on the source, resolved by the spectrometer) is the corroborating pattern. |
| Agreement among economists is useless | **Confirmed with scope.** It is disqualifying as a verdict, not as a contact signal. Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it." This is why outreach asks for a refutation and never pools later agreement as corroboration. |
| The question is one hard question | **Refused and split.** Fig 9 :4 and :55 govern. The compound is union, not partition, and its intersection is a specific case, not a harder instance of either side. |
| Fig 6 :27 and Fig 8 :40 strain against each other | **Not strained.** Fig 6 states the indistinguishability; Fig 8 states the different instructions. Same object, two aspects. No re-census owed. |

### Strains recorded, not hidden

- **S1, the economic anchor.** Fig 2 :29 requires an anchor that does not move when frames think about it. Macro data series are revised and definition-dependent (Fig 10 :18: "a declared meaning is not a grounded one"). The anchor is therefore approximate in this domain. This lowers confidence in any single data point but not in the shape: per-slot trends measured with stated vintages remain the best available ground. Recorded, not smoothed.
- **S2, the horizon and boundary.** H and the closure are declared choices (F8), not given by the figures. This is not a defect to hide; it is the reason the debate persists. It must be stated in every report of the verdict.
- **S3, the causal word "self".** "Self-correcting" smuggles in an agent-like subject. Fig 11 :36: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran." An unmaintained market does not "try" to correct; what survives is what the ground kept. The bound term in §0 avoids this by speaking of trends and imports, not intentions.

---

## 7. Updated verdict

The shape survives; the empirical answer is not located in this folder. What the figures deliver: the residual is per slot (F1); internal adjustment cannot add an atom once the closure is fixed (F2); depth and absence are indistinguishable from inside and issue opposite instructions (F3); a flat residual points a refusal at a held term (F4); outcomes, not agreement, are the ground (F5); the question is a union compound that must be split (F6); the answerable form is a per-slot recovery-rate trend (F7); the pivot is an unbound horizon and closure (F8); intervention is asymmetric introduction over a live habitat (F9). No strain remains hidden after re-census: three are recorded in §6. Mode `general` / `specified`, ungrounded, candidate.
