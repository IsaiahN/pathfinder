# Figure-grounded audit: when do boards improve oversight?

**Mode of this document: `specified` on the board application, `general` on the structural shape. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** Isaiah N, *The Recursive Self-Improvement Trap* (Adventures in Machine Learning, 2026-11-19), read 2026-11-22: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed". This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Source of every figure quote:** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session, cited as `Fig N :line`. No figure quote in this folder came from a summary.

---

## 0. The residual, stated as an effect

For each board agenda slot s, define R_s = |Gamma_board(b,a) - o'|: the gap between what the board predicts the executive decision will return and what the ground actually returns. R is indexed per slot, never aggregated.

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
> Fig 1 :23 "The ground enters as the only metric."
> Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

"Ratification" is not a small R. It is a dead channel: the board's reading of o' is management's report of o'. The board then scores management with a quantity management produces, which Fig 1 :27 disqualifies. A global measure such as "board effectiveness" or "good governance score" averages away the only signal that says where to look.

**Direction, bound as an ordinary term before the run.** An answer would look like: a set of conditions on the board's relation to the ground, to management's closure, to the information channel, and to refusal, such that when all hold the board reduces R_s per slot, and when any one fails the board default-completes management's reports. This shape is bound here so it can accrue a residual and be refused, rather than remaining an invisible preference (Formula "Direction"; Fig 5 :65-66).

**Question type.** A union, not one hard question. The two outcomes ("improve" versus "ratify") are a threshold comparison across a set of overlapping conditions, and a single lever clears only the region where one condition binds.

> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
> Fig 9 :57 "a case in two conditions is not a harder case of either"

---

## 1. Domain census, before any figure line is chosen

R by arity, symmetry and scale:

- **Arity:** three-place (board frame, management frame, ground), indexed by slot s.
- **Symmetry:** ordered, not symmetric. The board ranges against the ground; management acts. "The board corrects management" is not interchangeable with "management corrects the board." The improve/ratify split is a comparison (threshold), not a symmetric join.
- **Scale:** one decision item (per-slot loop), one board cycle (room), the firm and its market (population ground). The transform between board and firm is lossy.

> Fig 4 :20 "Only the actors, the currency and the anchor change."

One line per domain (actors / currency / anchor). A domain is admitted only when an anchor is nameable.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Board checking seat | directors, audit and risk committees, chair | rulings, approvals, refusal | the ground (market outcome, audited result, regulator finding) insofar as the board cannot move it | admitted |
| D2 Management frame | CEO, executives, their library of plans and forecasts | decisions and reported results | the same ground, against which management also ranges | admitted |
| D3 Channel to the ground | board packets, metrics, internal audit, whistleblowers, customer and regulator data | contact: fidelity of the reading | the ground, which does not decay while the channel does | admitted; the main failure site |
| D4 Habitat and room pool | external auditors, regulators, analysts, journalists, shareholders, staff, directors' other experience | independence (overlap between frames) | the ground, never agreement | admitted; enumerated, not composed |
| X1 "Board quality" as a standing property | a score or a list of "good" directors | reputation | none nameable beyond the ground | not a domain yet; refused |
| X2 "Rubber stamp" as a single cause | none distinct | none | absorbed into D1 and D3 failures | not a domain; absorbed |

Refusals with reasons:

> Fig 10 :18 "a declared meaning is not a grounded one"
> Fig 11 :51 "No standing list of good actors survives a change of residual."
> Fig 2 :47 "A ground listed as one of the parties has already become a frame."

An "independent director" label is a declared meaning, and a list of good directors is a standing list. Neither has an anchor beyond the ground, so neither is admitted as a domain. A governance score is a filter for the budget, never a witness for the verdict (Fig 9 :60).

**Partition or union:** union. D1, D2, D3 and D4 overlap. A board can have independent directors (D4) and still have a dead channel (D3); it can have a live channel and no refusal operator (D1). The four conditions form a product, not a checklist.

> Fig 5 :33 "The three guards are a product, not a checklist."
> Fig 5 :41 "Any one of them at zero stops the mint entirely."

**Dependency order (Fig 3):** perception (D3: can the board see the ground?) to vocabulary (D2: does it have terms for what a report affords?) to objective (D1: can it say what would count as a failure, a comparison?) to planning (D1: oversight action) to learn and carry (D4: room refresh). Optimising a link above the break cannot rescue one below it.

> Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
> Fig 3 :20 "The chain is ordered by dependency, not by importance."
> Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

---

## 2. Figure census and findings

Every line below was checked against `03-FIGURES_TEXT.md` before use. Verdicts are kept per domain and never averaged.

### F1 (D1, the board seat): TRIANGULATED

> Fig 2 :45 "Frames range against the ground. They do not negotiate with it."
> Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."
> Fig 10 :43 "Soundness requires the checker to be unable to produce what it is checking."
> Fig 10 :86 "Outside the slice being graded. Whoever is measured by a reading cannot own it."

A board improves oversight when it occupies a checking seat: it ranges management against an anchor it cannot move, and it does not hold the interior of the thing it grades. It ratifies when it becomes another frame in the arrangement. Low overlap between the two routes (anchor rule versus verifier non-access), so the agreement is weak triangulation, not circularity. Mode `general` for the seat rule, `specified` for applying it to a board. Per-slot refuter: a board that produces ground-verified corrections to management's reports while demonstrably holding management's full interior and reconstructing the claim itself.

### F2 (D2, management as frame): TRIANGULATED

> Fig 2 :34 "the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."
> Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
> Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Ratification is the mutual-update collapse. The board updates on management's reports and management updates on the board's approvals; they converge on whoever has the most influence, and the drift is coherent, which is why nobody notices. A board that resembles the last room is a mirror, and a chain of mirrors is one long room. Refuter: a board whose composition is fixed by the CEO and whose readings come from the CEO, yet whose per-slot corrections track the ground rather than the report.

### F3 (D3, the channel): TRIANGULATED

> Fig 10 :24 "the ground does not decay, the channel does"
> Fig 10 :26 "saturated metrics, pooled readings"
> Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."
> Fig 2 :31 "Two people reading the same report are not two frames; two instruments pointed at the same thing are."

This is the main failure site. If every reading reaches the board through management, the board and management share one evidence pool. Two directors reading the same report are not two frames; an internal audit and an external auditor pointed at the same ledger are. Ratification needs no bad faith: a saturated metric or a pooled reading is enough, and the internal instruments stay green because they read through the channel. Refuter: a board receiving every item through management-filtered reports that repeatedly catches concealed material facts with no other channel.

### F4 (D4, habitat and room pool): TRIANGULATED

> Fig 11 :43 "The habitat is enumerated, never composed."
> Fig 2 :42 "Buy independence in proportion to the cost of being wrong."
> Fig 10 :73 "A candidate set chosen by a participant is an authored room however well the selection is reasoned"
> Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

Directors nominated by the person they check are an authored room, however careful the nomination. The pool must be enumerated from the habitat in contact with the residual (auditors, regulators, analysts, employees, customers) and examined second. Independence is bought in proportion to the cost of being wrong, not maximised as a label. Refuter: a board whose members are entirely CEO-nominated and share the CEO's evidence pool, yet whose oversight residual trends down across slots against ground-verified outcomes.

### F5 (the single lever): SINGLE-SOURCE, STRUCTURAL

> Fig 9 :56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
> Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

"Add more independent directors" is a single lever. It clears the region where closure is the only missing condition and leaves the channel and refusal failures standing. It is a filter for the budget, not a witness for the verdict. Status single-source (Fig 9 only) and structural. Refuter: one intervention that clears all four conditions and leaves no categorically different residue.

### F6 (which specific board fixes a given firm): `gap` after genuine re-census

> Fig 9 :32 "you get a kind of thing, never the answer itself"
> Fig 13 :134 "Unreachable is a verdict here, not a silence,"
> Fig 8 :39 "So a search that finds nothing is never a proof of absence."

No figure line names a particular board composition, committee structure or director who will improve oversight in a given firm. The figures return the shape of a checking arrangement, not a name. The missing thing is a source-discriminating instrument that measures channel fidelity and refusal events per slot; it is characterised in effect terms but not held here. Unreachable is a verdict, recorded as such.

### F7 (the strain: manager and checker in one board): NAMED, RESOLVED BY RE-CENSUS

A genuine strain appeared: the board appoints the CEO and sets the mandate, which gives it standing, yet the checking sub-function must not hold the interior and must have no stake in the reading.

> Fig 10 :61 "And standing is a stake that survives the outcome it was earned on."
> Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying."

Re-census resolves it without softening either line: the appointing and advising function and the monitoring function are different loops with different anchors. The monitoring loop (audit and risk committees, independent directors, external audit) is the object of this question. D1 is therefore partitioned internally into D1a (monitoring seat) and D1b (mandate and advice). The strain was aimed at a different quantity, as the strain test requires.

### F8 (a conflict from the world pool, returned to census): NOT A VERDICT FLIP

Black and Bhagat (2002) report no correlation between board independence and long-term firm performance (opened via Stanford Law bibliographic page and the indexed abstract; access noted in the ledger). At first reading this conflicts with F4. The conflict was returned to the census, not used to flip the verdict.

Re-census: "long-term firm performance" is an aggregate, frame-internal financial metric, not the board's per-slot residual. Fig 1 :19 and Fig 1 :22 govern the correct quantity. A board evaluated by a metric it helped produce is disqualified by Fig 1 :27. Weisbach (1988) measures a per-event ground reading instead: CEO turnover sensitivity to stock performance. That is the per-slot form, and it does vary with outside directors. The two sources are not in conflict once the residual is re-censused; they measure different quantities. Mode `specified` for the re-mapping; no figure verdict was changed.

> Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

---

## 3. Pre-registered refuter (written before the conclusion)

The shape claim is the four-condition product: C1 an unmovable anchor, C2 a closure that differs from management, C3 a live channel to the ground, C4 an operator that can refuse. It is refuted if any of the following holds:

1. A board that receives every item through management-filtered reports (one evidence pool), with no other channel, repeatedly catches concealed material facts that management did not disclose. (Refutes C3.)
2. A board whose members are appointed by the CEO and share the CEO's closure, with no differing frame, reduces the per-slot oversight residual at a higher rate than boards with genuinely outside directors, across ground-verified events. (Refutes C2.)
3. A board whose own approval changes the metric by which it is judged (a movable anchor) still produces ground-verified oversight at the same rate. (Refutes C1.)
4. A single lever, applied alone, clears all four conditions with no categorically different residue left standing. (Refutes the union claim, Fig 9 :56.)
5. A board gains no refusal capability at all, has no negation operator in its vocabulary, and still produces ground-verified corrections to management. (Refutes C4; Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate".)

If any fires, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Diagnose which link the board stops at before asking whether it is good (Fig 3 :29: "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed.").
2. Treat independence as one condition, not the answer. Keep the four conditions separate and never average them into a score (Fig 1 :22).
3. Build the channel first: direct access to audit, regulators, employees and customers, so the board is not reading management's report of the ground (Fig 10 :52: "Bring a characterised residual, never the source.").
4. Install refusal as an office, not a personality trait: a named contrarian function with a written case against each material recommendation (Operators table :58).
5. Measure per slot. A board that approves everything is not detected by a global effectiveness rating; it is detected by R_s that never arrives (Fig 1 :19).

---

## 5. Canonical usage check

Two local canonical sources were read after the first four sections and govern how figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the limit: what a missing thing would have to look like is "a shape, not a name".
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground and does not ask the anchor to decide what the figures already settle. "Use filters for the budget and witnesses for the verdict."

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "Board independence is the governing condition" | **Retracted.** Re-census: independence is one of four product conditions. A single lever clears only one region (Fig 9 :56). |
| "Firm performance is the board's ground" | **Retracted.** Performance is aggregate and frame-internal (Fig 1 :22, :27). The ground is the per-slot outcome. This dissolved the Black and Bhagat conflict without flipping the verdict. |
| "Board quality" treated as a domain | **Refused.** No nameable anchor; a declared meaning is not a grounded one (Fig 10 :18); no standing list of good actors (Fig 11 :51). |
| Manager-versus-checker strain | **Resolved by re-census, not smoothed.** Monitoring loop and mandate loop are different objects; D1 split into D1a and D1b. |
| "Rubber stamp" as a cause | **Absorbed.** It is the name of a channel death and a mutual-update collapse, not a separate domain. |
| No figure line names a winning board | **Confirmed as `gap`.** Fig 9 :32 and Fig 13 :134. Named in `06_isomers_and_order.md` as an honest stop. |

### Round trip on the condensation

The shorthand "independent, informed boards oversee better" was carried up and brought down to test R_T. Three constraints are dropped on the return: the channel condition (D3), the refusal operator (C4), and the per-slot indexing (Fig 1 :19). What survives is only the differing-closure condition. The condensation is lossy and R_T is nonzero; treating the shorthand as the full derivation would be dead reckoning.

> Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

---

## 6. Updated verdict

The shape survives: boards improve oversight when four conditions hold as a product, an unmovable anchor, a closure that differs from management, a live channel to the ground, and an operator that can refuse. Boards ratify when any condition fails, most commonly through a single evidence pool (Fig 2 :40) or a dead channel (Fig 10 :24). Verdicts are kept per domain: D1 triangulated, D2 triangulated, D3 triangulated, D4 triangulated, the union single-source, the specific board `gap`. Strains after re-census: none hidden; one named (D1 partition), one world conflict returned to census and dissolved. Mode `specified`, ungrounded, candidate.
