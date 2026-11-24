# Figure-grounded audit: when is evidence sufficient to act?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what would refute the shape. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*, read this session: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers, opened this session), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, and the world sources in `10_source_ledger.csv`. Every figure quote below is an exact substring of the local figure text.

---

## 0. The residual in effect terms

A decision maker holds a belief `b`, takes an action `a`, observes `o'`, and carries a residual per object slot: `R_s = |Gamma(b,a) - o'|` (Formula step 1; Symbols table :36-44). The question asks for the rule that stops evidence gathering and commits to action when waiting for certainty is costly.

Stated as an effect, the decision maker faces two live quantities:

- the residual that would remain if one acted now, that is the risk of a wrong act;
- the cost of another observation, that is the price of delay.

Acting early pays the first. Waiting pays the second. The failure to avoid is infinite effort inside a finite reach (Fig 13 :115-118), or a live slot disappearing into an average (Fig 1 :22). An answer is a rule that says when the residual is enough, and what changes when delay is costly.

**Shape of an answer, written down before the run (Formula "Direction"):** a checkable stop rule with three parts, (i) a per-slot residual that is still live, (ii) a comparison of remaining residual against the cost of waiting, (iii) a ground that settles whether the act paid. Binding it now makes the preference refusable by the same test as everything else, instead of an invisible direction the loop cannot check.

---

## 1. Domain census, before choosing any figure line

**R by arity, symmetry and scale.** Arity: two conditions, evidence sufficiency and cost of delay, so a **union compound**, not one harder question (Fig 9 :57 "a case in two conditions is not a harder case of either."). Symmetry: the stop/go relation is an ordered comparison, not a symmetric join. The operators table defines `⋛` comparison as "a threshold relation between two quantities" with the test "is it about which is larger, rather than both being present? Yes." (Operators table :46-51). Scale: first order inside one decision episode, second order when the rule itself is learned from outcomes and the environment.

**One line per domain: actors / currency / anchor.**

- **Domain 1, the single decision episode (per-slot perception).** Actors: the decision maker, one object slot `s`, the observation stream `o'`, the candidate action. Currency: residual mass `R⁺_s` (Symbols table :45-48) and description bits. Anchor: the outcome of the act, the ground for this domain. Type: **partition** (which slot is live). Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 3 :5-11 names perception, vocabulary and objective as the upstream links. No nameable anchor here? No: the outcome of the act pays or does not pay. This is a domain.
- **Domain 2, the stopping rule (comparison and price).** Actors: the two quantities being compared, remaining residual and cost of waiting, and the comparison operator `⋛`. Currency: **two currencies which do not add**, bits for the description and actions for finding out whether it holds (Fig 12 :125-127). Anchor: the ground payoff, for example reward rate or a correct/incorrect outcome. Type: **union compound** with Domain 1 (two conditions) and an ordered comparison inside it. Fig 5 :42 "The acceptance test is a bargain, not a threshold." distinguishes the act decision from the mint decision.
- **Domain 3, the verification and research frame.** Actors: participants, experimenters, journals, conferences. Currency: agreement and residuals. Anchor: the ground (behavioural data, paid outcomes), never agreement (Fig 2 :35). Type: a checking frame over Domains 1 and 2, not a fourth condition of the decision. In this simulated run all three domains draw on one evidence pool, so its independence is zero.

**Partition or union.** Domains 1 and 2 are a union compound: a case in two conditions is not a harder case of either, so unbundle before searching again (Fig 9 :54-58). Domain 3 sits over both as a verifier.

**Order by dependency (Fig 3).** Perceive and track the residual per slot (Domain 1), then describe the residual in effect terms, then decide stop or wait (Domain 2), then let the ground settle the act (Domain 1 anchor), then repeat with a changed reach. Settle before composing over the result (Fig 12 :106 "Nothing composes over what was never admitted as a part."). A reading taken below the break is a reading of nothing (Fig 3 :22-23).

**Anchor test applied.** Each named domain has a nameable anchor: the outcome of the act for Domain 1, the ground payoff for Domain 2, behavioural data for Domain 3. If none existed the domain would not be admitted yet.

---

## 2. Pre-registered refuter (registered before the figure lines were selected)

"A falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. A controlled experiment shows a stable, well-calibrated human stop rule that waits for a fixed certainty or probability criterion even when delay is costly and that criterion is unreachable at the budget, with no comparison against delay cost. This kills "sufficiency is a cost comparison" (F1).
2. The threshold is demonstrated to be a single scalar in one currency that trades remaining residual against delay additively at every level, with no distinction between description cost and action cost. This kills the two-currency constraint (F2).
3. Sufficiency is shown to be decided on an aggregated global confidence measure with no per-slot residual and no loss of a live signal. This kills Fig 1 :19 and :22 (F4).
4. A fixed-sample procedure at matched error rates uses no more observations than a sequential boundary rule across several decision domains. This kills the claim that waiting has a price the rule should account for (F3).
5. Measured stopping thresholds do not move with the opportunity cost of time in a foraging or search task where the optimum is known to depend on it. This kills the cost-of-delay prediction (F3, F6).

If any fires, the shape is withdrawn or narrowed and the retraction is recorded in section 7. Until one is run, no part of this may be labelled `grounded`.

---

## 3. Figure census (full set, with bearing)

| figure | bearing | verdict for this question |
|---|---|---|
| 1 The Agent | residual per object slot, never aggregated | governs Domain 1; the stop signal is per slot |
| 2 The Ground | anchor must not update; agreement vs triangulation | governs the verdict, forbids consensus as evidence |
| 3 Dependency Chain | perception, vocabulary, objective before planning | governs order; a stop rule needs a stated objective |
| 4 The Membrane | methods cross up, recordings do not | governs distribution, not the decision rule |
| 5 Mint Pipeline | acceptance is a bargain; persistent flat residual | distinguishes mint from act; gives the stop signal |
| 6 Closure / Reachability | import moves the wall; more search at same reach | governs when waiting has a payoff |
| 7 Room Chain | agreement compounds, evidence does not | forbids a panel of agreeable people as corroboration |
| 8 Union Surplus | idempotent closure; underivable vs unreachable-at-budget | governs "certainty is costly to wait for" |
| 9 Leave / Arrive | three questions; split unions; filters vs witnesses | governs the compound and the budget discipline |
| 10 Ground Maintainer | verifier cannot reconstruct; bring a residual | governs the verification packet |
| 11 The Habitat | capability is agent-and-habitat; introduction not exclusion | governs the cost-of-delay analogue in section 6 of `06` |
| 12 The Bond | `⋛` is an ordered threshold comparison; two currencies do not add | governs F1 and F2 directly |
| 13 Minimum Viable Set | infinite effort inside a finite reach | governs F3 |
| Operators table | `⋛` comparison; `¬` refusal; a goal is a comparison | supplies the verbatim operator definition |
| Symbols table | `R` is the aim and is always a slice per slot | governs the per-slot constraint |
| THE_FORMULA | steps 1, 2, 3, 5, 7 and the mode rule | supplies the loop and the mode discipline |

---

## 4. Findings (verbatim figure lines before conclusions)

### F1 — Sufficiency is a comparison of two quantities, not a certainty bar

Fig 12 :87 "a threshold relation between two quantities". Fig 12 :89 "is it about which is larger, rather than both being present? Yes." The operators table :51-52 adds "a goal is a comparison, which is why a vocabulary without it cannot state one". Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction."

"Enough evidence" is therefore a `⋛` comparison of two magnitudes: the residual that would remain if one acted now, against the cost of acquiring more. It is not a fixed bar of certainty that evidence is accumulated up to. A vocabulary without `⋛` can state that evidence is present and cannot state that it is enough.

Distinction, held separate: Fig 5 :42 "The acceptance test is a bargain, not a threshold." The bargain `cost(phi) + left(R,phi) < cost(R)` (THE_FORMULA step 3) governs accepting a **new term**. The `⋛` comparison governs the **act**. They are different operators at different levels, and conflating them is a type error.

**Status: `specified`, triangulated** across Fig 12, the Operators table (a different figure with the same operator definition), and Fig 5 (a different figure with a different decision rule). Low overlap between the comparison rule and the bargain rule. World corroboration: SEP satisficing and Wald's SPRT, both independent authors, below.

### F2 — The two quantities are in different currencies and cannot be collapsed into one

Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." Fig 12 :127 "They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall." Fig 12 :128-129 "A long chain of cheap parts is expensive to describe and may cost one action to refute. A short arrangement over a costly operand is cheap to state and may take a whole budget to settle."

Consequence: a single "utility of waiting" scalar that adds description cost and action cost is the flat-formula failure the figure names. The stop rule must keep the two readings and report which one is binding. A short rule over a costly observation can be cheap to state and expensive to settle, which is exactly the case where delay is costly.

**Status: `specified`, single-source within the figures (Fig 12), with an external strain recorded in section 5.** World sources give a mixed picture, and the conflict is resolved by re-census, not by flipping the verdict.

### F3 — Waiting for certainty is usually buying more search in a swept region

Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 8 :40-42 "Underivable: go outside." and "the remedy is more search, not another atom." Fig 6 :49 "more search at the same reach: is it in here and unfound? The closure does not change." Fig 6 :50 "Fails by spending budget on a region already swept. Distribute the search, and keep the searchers independent." Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists." Fig 13 :117-118 "So a frame can search without end and still not arrive: infinite effort inside a finite reach." Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room."

Consequence: when certainty is unreachable-at-budget rather than underivable-in-principle, waiting buys observations without changing the reach. The three questions must be kept distinct: SEARCHED (is it in here and unfound, distribute independent searchers), INWARD (sharpen the instrument already returning something), OUTWARD (import a frame whose closure predicts the residual's shape). Waiting is only productive if it is SEARCHED with independent searchers or if an import is actually available. Otherwise the cost of delay is a pure loss.

**Status: `specified`, triangulated** across Fig 8, Fig 6 and Fig 13 (three figures, different mechanisms: closure, instrument, substrate). World corroboration from SPRT, optimal stopping, and the marginal value theorem, all independent authors.

### F4 — The residual is per slot, never aggregated

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Symbols table :43-44 "R is measured per slot, never as a single global number."

Consequence: sufficiency is decided for the live slot. A single global confidence score hides the slot that still carries positive mass. The stop rule must name what it is about before it says that it is enough. This is the same failure Fig 3 :19 names at the chain level: "Optimising a link that already works cannot rescue one that does not."

**Status: `general` to `specified`, triangulated** across Fig 1 and the Symbols table. World corroboration from multi-attribute decision research, which finds that strategy shifts depend on the structure of the specific problem, not a global accuracy score.

### F5 — The stop signal is a residual that persists and does not trend down

Fig 5 :58 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

Consequence: the operational stop signal is not "certainty reached". It is "more observation is not shrinking the residual". At that point, continuing to wait spends actions without changing contact. The rule is either act on the residual as it stands, refuse the term it was testing, or change frame by import. This is the same shrinking test with the opposite sign, so it is checkable from the record.

**Status: `specified`, single-source within the figures (Fig 5), with world corroboration from drift diffusion and sequential sampling where extended sampling without drift lowers reward rate.**

### F6 — The question is a union compound, and filters are not witnesses

Fig 9 :5 "First: is there a fact here?" and "Split it rather than search." Fig 9 :57 "a case in two conditions is not a harder case of either." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 7 :13 "agreement compounds, evidence does not"

Consequence: do not merge "is the evidence enough" and "is waiting cheap" into one score and call it decision quality. The two conditions must be unbundled before a search is run. A cost-based filter decides what gets tried first; it never decides whether stopping was right. A panel of people selected for their willingness to agree is a filter masquerading as a witness.

**Status: `general`, triangulated** across Fig 9 and Fig 7.

### F7 — The ground settles the act; agreement does not

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :42 "Buy independence in proportion to the cost of being wrong." Fig 9 :42 "narrowing gets you close, the ground decides". THE_FORMULA step 5 "SETTLE — the ground settles it. Verified only by what pays. A gate is not the ground."

Consequence: whether stopping was right is settled by the paid outcome, not by how many people thought the evidence was enough. Fig 2 :42 is the figure that prices the cost of being wrong directly: independence should be bought in proportion to it. That is a statement about how to check the rule, not about what the rule should be.

**Status: `general`, triangulated** across Fig 2, Fig 9 and the formula.

### F8 — Verification rules that bear on the outreach, not on the answer

Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." Fig 10 :52 "Bring a characterised residual, never the source." Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." Fig 10 :60 "Where a stake cannot be removed, declare it." Fig 4 :22 "Only methods cross up. Only head starts come down."

Consequence: send the residual and its refuter first, ask what the researcher would count as a failure, and record that verdict before showing the framework. Their later agreement is never pooled as corroboration (Fig 2 :40).

### F9 — What actually survives, with mode

| claim | mode | figure / source |
|---|---|---|
| A stop decision is a comparison of two quantities, not a certainty bar | `general` structural | Fig 12 :87, :89; Operators :51 |
| The two quantities are in different currencies and must be held apart | `specified` | Fig 12 :125-127 |
| The residual that decides the stop is per slot, never aggregated | `specified` | Fig 1 :19, :22; Symbols :43-44 |
| Waiting past a swept region buys no new atom | `specified` | Fig 8 :32, :40-42; Fig 6 :49-50 |
| Stop signal: residual persists and does not trend down | `specified` | Fig 5 :58 |
| The rightness of the stop is settled by the paid outcome | `general` | Fig 2 :29, :35; Fig 9 :42 |
| A specific numeric threshold, drift rate, or boundary height | **not given** | gap: the framework returns a shape, not a name |
| Which exact cognitive mechanism a person uses | **not given** | gap: empirical, world sources only |

---

## 5. Strain test, conflict handling and re-census

**Strain found between Fig 12 :125-127 and the world literature.** The figures say the two currencies do not add. Herbert Simon's archive text says a satisficing procedure can be turned into an optimizing one only if "the values of alternatives must be measured in units comparable with the units for measuring search cost, in order to permit comparison at the margins". Constantino and Daw likewise express the foraging threshold in one reward unit (opportunity cost of time as long-run average reward). This looks like a direct conflict.

**Rules applied.** "A conflict sends us back to the census, it never flips the verdict." A reading that only fits with a strain governs another quantity, so re-census.

**Re-census result: different levels, not a contradiction.** Fig 12 :125-127 governs the price of a **composition inside a frame**: bits price the description of a molecule, actions price finding out whether it holds, and a frame with one accounting cannot compare them. Simon and Constantino and Daw govern an **ecological comparison within one currency** at the level of the environment: value of an alternative against the reward rate forgone by searching. The first is a structural constraint on what a composed term costs; the second is a measured trade in reward units between two options the organism already represents. Different objects, like the Fig 13 versus article Rule 2 re-census in the exemplar. No verdict flip. The strain is **named, not hidden**, and it means the shape cannot be used to forbid an empirical reward-rate model; it only forbids treating the description cost and the settling cost as one accounting.

**Second strain, resolved.** Fig 5 :42 calls the acceptance test a bargain, not a threshold, while Fig 12 :87 defines `⋛` as a threshold relation. Re-census: Fig 5 prices a mint; Fig 12 defines a comparison operator used for goals. Act and mint are different operations. No strain after re-census.

**No other strain found.** All figure lines used were checked as exact substrings of `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

---

## 6. Recommendation

1. Lead with the shape: sufficiency is a per-slot comparison, not a certainty bar, and the two costs must be held apart.
2. State mode on every sentence. Nothing here is `grounded` (F9).
3. Do not assert that people use this rule. Offer it as a shape a descriptive rule must answer to, and ask a JDM researcher what would refute it.
4. Unbundle the two conditions before any literature search (F6). A single "decision quality" score is a filter, not a witness.
5. Use the public submission and contact points in `03_public_contact_points.csv`. Ask for a refutation, not belief (F7, F8).
6. Put the derivation and the pre-registered refuter in front of the links (Fig 10 :52, Fig 4 :22).

---

## 7. Canonical usage check and retraction / confirmation log

Two usage sources were read after the first sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md`, which says the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary", and `FRAMEWORK/figures/THE_FORMULA.md`, which supplies the mode rule and the three distinct questions in step 7.

| earlier reading | status after the check |
|---|---|
| The question can be answered by satisficing alone | **Retracted.** Satisficing is a world analogue (Wheeler, Simon), not a figure line. Figures decide. |
| `⋛` threshold means a fixed certainty bar | **Retracted and re-censused.** It is an ordered comparison of two quantities (Fig 12 :87, :89), not a stored criterion. |
| Fig 12 two-currency rule conflicts with reward-rate models | **Re-censused, not flipped.** Different levels: composition cost versus ecological reward comparison. Strain named in section 5. |
| Bargain and threshold are the same decision | **Retracted.** Fig 5 :42 governs mint, Fig 12 :87 governs the act. |
| "How people decide" can be answered by the figures | **Retracted.** Figures give the shape. The descriptive mechanism is empirical and belongs to WORLD. |
| Waiting for certainty is always waste | **Narrowed.** It is waste only when the target is unreachable-at-budget and no import changes the closure. SEARCHED with independent searchers still has a payoff (Fig 6 :50). |
| Per-slot constraint | **Canonically confirmed.** Fig 1 and the Symbols table both state it. |
| No last room / no final rule | **Canonically confirmed.** The repo README's own section "This is not a Theory of Everything" applies: this is a generator of a shape, not a final decision theory. |

**Final audit position after the canonical check.** The shape survives (per-slot comparison, two currencies held apart, waiting bounded by reach, stop when the residual stops trending down, ground settles). Every descriptive or numeric claim that would go beyond the shape is retracted or marked as a gap. The solution is a `specified`, ungrounded candidate with three named open items: the numeric threshold, the cognitive mechanism, and the exact level at which reward-rate models meet the two-currency rule.
