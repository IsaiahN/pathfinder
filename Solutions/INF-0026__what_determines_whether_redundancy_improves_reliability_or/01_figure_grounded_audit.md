# Figure-grounded audit: what decides the sign of redundancy

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** LLM output is simulacra; the truly testable output would need to be derived from the real architecture or working the formula by hand (Recursive Self-Improvement Trap, opened 2026-11-23, recorded in `10_source_ledger.csv`). This file is checked for internal consistency against the figures only. It cannot settle the question it reports on.

**Sources.** Verbatim figure text: local `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Formula: local `FRAMEWORK/figures/THE_FORMULA.md`. Seat rules: local `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. Canonical usage: local `FRAMEWORK/reference/FIGURES_README_canonical.md` and `60_FIGURES_AS_METALAWS.md`. World sources listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

A communication system has a finite capacity budget. It can add a repeated signal, a second channel, a second copy of a component, or a second judge. Two outcomes are reported in the literature: the repetition reduces the error rate, or it consumes budget while leaving the error rate unchanged (and in some regimes making it worse).

R, stated per slot s (one repetition, one copy, one judge), is the gap between the reliability predicted from adding copy s and the reliability observed after adding copy s. Arity: two conditions, separate noise versus shared cause. Symmetry: under independent noise the order of copies is immaterial; under a shared cause the copies are interchangeable spellings of one state. Scale: bit-level coding, component-level fault tolerance, and committee-level judgment. R must not be averaged across slots, because Fig 1 :22 says "Aggregating across slots is how a live signal disappears into an average."

The sought-for shape was written in `README.md` before this audit: *independence of the repeats plus a cost bargain*. It is an ordinary term now and can be refused.

## 1. Domain census, before any figure line is chosen

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 coding and channel | source, encoder, channel, noise, decoder, receiver | bits, capacity C, error probability | measured error rate at the receiver | which noise structure does the redundancy combat |
| D2 reliability engineering | redundant components, common cause, diversity, separation | failure probability, beta factor | observed failure rate in service | are the failure modes independent or coupled |
| D3 collective judgment | voters, experts, sensors, models | correctness probability, effective sample size | the state of the world (truth) | are the errors independent or from one pool |
| D4 framework-internal | frames, closures, atoms, evidence, ground | agreement versus evidence, bits versus actions | the ground, which does not update | does the union of two frames have surplus |

A domain with no nameable anchor is not yet a domain. Each of the four has one. D1 and D2 are a **union**, not a partition: a system can have independent noise at the bit level and a common-cause failure at the component level at once, so a single lever clears only the region where one condition holds (Fig 9 :55-56, "A bundled problem is usually a union of overlapping conditions, not a list of separate ones"). D3 and D4 overlap in the word independence but keep different currencies, so they stay separate loops.

**Dependency order (Fig 3).** First ask whether the repeat carries any new information about the ground (the source/independence link). Only then ask whether it pays in bits (the bargain link). Fig 3 :19-20: "Optimising a link that already works cannot rescue one that does not" and "The chain is ordered by dependency, not by importance." A cost calculation performed on correlated copies is effort spent above the break; it arrives at a step that cannot use it.

## 2. Findings, each with verbatim figure text before the conclusion

### F1 — Independence is the quantity that decides whether repetition carries information (decisive)

Fig 8 :47-49:

> **"Independence is one quantity read twice. How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."**

Fig 2 :31-32, at lower overlap with F1's framing (a definition of the term, not a union-surplus claim):

> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."**

Fig 13 :36-37 uses the exact word in the question:

> **"If two members drew on the same underlying fact, their agreement would carry no information, and one of them would be redundant rather than minimal."**

So adding a copy that draws on the same evidence adds an agreement, not an observation. It improves reliability only if the thing being counted is the agreement itself (a convention), not the truth of a claim. Fig 8 :32 closes the escape route: "no search, however long, adds an atom." Repeating inside one closure cannot manufacture a new primitive.

*Status:* triangulated. Fig 8 (union surplus), Fig 2 (definition) and Fig 13 (generating set) are three different jobs with low overlap. World corroboration from D2 and D3 is recorded in `09_watson_answer.md`.

### F2 — The sign of the gain tracks overlap, continuously, not categorically

Fig 6 :53-54:

> **"searchers drawing on the same evidence are one searcher wearing many names. Independence decides whether more of them buy more search or only more spelling, which makes it the parameter rather than a caveat."**

Fig 7 :13, on the mirror chain: "agreement compounds, evidence does not". Fig 10 :80-81:

> **"Frames whose independence is renewed by separate experience can be maintained; frames whose correlation is fixed at origin can only be rotated, because no amount of use makes them less alike and replacement is the only refresh."**

This is the mechanism that makes "more copies" fail. Copies whose correlation is fixed at origin (same code, same training set, same design defect) cannot be refreshed by using them more. Only replacement with a different closure raises the information gained per bit. Fig 2 :44 names the arithmetic: "The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."

*Status:* triangulated across Fig 6, Fig 7 and Fig 10. The world sources give the same formula independently (see the LLM ensemble paper and the Society of Agents essay in §5).

### F3 — The capacity question is a second loop: a bargain, not a threshold

Fig 5 :42-43:

> **"The acceptance test is a bargain, not a threshold."**
> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."**

Redundancy is a term one pays for. It is licensed only when `cost(copy) + left(R, copy) < cost(R)`. Fig 5 :45 connects the bargain to this very field: "This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."

Fig 12 :125-126:

> **"A composition costs in two currencies, and they do not add."**
> **"Bits price the description. Actions price finding out whether it holds."**

Scarce communication capacity is the bits currency. A redundancy analysis that reports only bits, or only the number of extra observations, is blind to the other currency. Fig 12 :129-130 adds: "Neither figure predicts the other, so both are read or the choice is made blind."

*Status:* triangulated across Fig 5 and Fig 12 (different subject matter: term licensing versus composition price).

### F4 — Repetition can actively hide the signal it was meant to protect

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." If all copies are pooled into one score, the one slot carrying a live residual is diluted. Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." A committee of copies that update on one another is Fig 2's coherent-drift collapse; a committee that never talks but shares one source is the common-cause collapse. Neither is a check.

*Status:* single-source for the per-slot claim (Fig 1), triangulated with Fig 2 for the mirror/common-cause claim.

### F5 — Independence matters differently for a convention and for a verdict

Fig 2 :39-41 separates the two valences: "correlation has valence", it is "disqualifying for a verdict" when frames share an evidence pool, and "efficient for a convention" where agreement about a shared meaning is the product. So the answer to the question is not "redundancy is bad" or "redundancy is good". For a convention (a repeated acknowledgement, a shared protocol word, a duplicated checksum used as a label) high correlation is the product. For a verdict about the world, the same correlation is the collapse. Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention."

Fig 2 :43 gives the guard: "a convention that decides an outcome has stopped being one."

*Status:* triangulated (Fig 2 and Seat Map, different documents).

### F6 — What the figures do not settle: the number

No figure line gives Shannon's channel capacity C, an error exponent, a code rate, or a critical correlation rho at which a particular system flips. The exact quantitative threshold is **unreachable from this closure**. The figures decide the shape (independence plus bargain, in two currencies); the number must be imported from a frame whose closure differs, with a source gate and a shadow test (Fig 6 :23, Fig 8 :9-13). Fig 13 :134: "Unreachable is a verdict here, not a silence,". Importing a number and pretending it was derived would breach provenance.

*Status:* gap, reported as a gap. The world sources in `09_watson_answer.md` supply the number as secondary corroboration, never as a figure-derived result.

### F7 — The question is a bundle, and must be unbundled before it is searched

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Two conditions bind: (a) does the repeat carry independent information, (b) does it pay in the budget. A single lever (for example, "add more copies") clears the region where only (a) or only (b) holds and leaves the intersection standing, which is a specific compound rather than a harder case of either. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

*Status:* triangulated (Fig 9 union rule, Fig 3 dependency order).

### F8 — The residual must be described before a field is chosen

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit." The world search below was run after the domain census, not before. Otherwise information theory would have been chosen because the word "capacity" appears in the question, and reliability engineering would have been missed.

*Status:* single-source (Fig 9) but methodological, not a claim about redundancy.

### F9 — What actually survives

| claim | mode | figure |
|---|---|---|
| Independence of the repeated signals decides whether their agreement carries information about the ground | `general`, structural | Fig 8 :47-49; Fig 2 :31-32; Fig 13 :36-37 |
| Copies whose correlation is fixed at origin cannot be refreshed by more use; replacement is the refresh | `specified`, falsifiable | Fig 10 :80-81; Fig 6 :53-54 |
| Redundancy is licensed only by a bargain, and the two currencies (bits, actions) do not add | `specified` | Fig 5 :42-45; Fig 12 :125-130 |
| High overlap is fine for conventions and fatal for verdicts | `specified` | Fig 2 :39-43; Seat Map :163 |
| Exact error rate, capacity C, code rate and critical rho | **gap** | no figure line; import required |

## 2b. Strain test and re-census

The first pass tried to make Fig 13 :37 ("one of them would be redundant rather than minimal") govern the whole question. That is a **strain**: the sentence is about a *generating set*, where two members deriving from one fact are not minimal, not about a receiver combining two noisy observations. A communicating pair can be "redundant" in the engineering sense and still both be needed against independent noise. Re-census sends that line to D4 only. The governing line for the question is Fig 8 :47-49, which explicitly says independence decides both the value of agreement and the surplus of a union. No strain remains after re-census.

A second apparent strain: Fig 5's MDL bargain is stated for a new *term*, while a repeated symbol is not a new term. Re-census: the bargain is about what it costs to state something versus what confusion it removes (Fig 5 :43), and that is exactly the capacity trade in the question. It is the same quantity at a different level, which Fig 12 :103-104 permits. Not strained.

## 3. Pre-registered refuter (written before the conclusion)

The shape claim is refuted if any of the following holds:

1. A system with demonstrably independent noise draws and low evidence overlap across its repetitions fails to improve its error rate at any capacity cost (breaks F1 and F2).
2. A system whose copies are correlated at or near one, drawing on one evidence pool and one cause, improves its *verdict* accuracy without adding any independent contact with the ground (breaks "agreement compounds, evidence does not").
3. A redundancy scheme that carries no new information about the ground lowers the combined cost in bits and actions (breaks F3).
4. A figure re-census shows that Fig 8 :47-49 governs conventions only, not the reliability of a verdict (breaks the census).

Written down before this run. If any fires, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded`.

## 4. Recommendation

1. Lead with the sign-changing quantity (independence of the repeats), not with an answer about any particular code.
2. Keep the two conditions separate and ordered: source independence first, cost bargain second (Fig 3).
3. Report both currencies (bits and actions), because the question's framing in terms of "scarce communication capacity" sees only one (Fig 12).
4. Do not quote a critical correlation or a channel capacity as if it were figure-derived. It is imported, provenanced as such.
5. Use the public submission venues in `03_public_contact_points.csv`. Ask what would refute the shape, not whether the reader believes it.

## 5. Canonical usage check

Two local documents govern how figures may be used. `FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also gives the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit: the framework reports "what a missing thing would have to look like (a shape, not a name)" and then stops at what instruments can distinguish. `60_FIGURES_AS_METALAWS.md` says the figures are the ground for design questions and the seat must not ask for rulings the figures already decide. The figures therefore decide F1 to F5 and F7; the numeric remainder in F6 is not a ruling anyone can hand down, it is an import.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Fig 13's 'redundant rather than minimal' settles the question" | **Retracted.** It governs a generating set, not a receiver. Re-census moved it to D4 and promoted Fig 8 :47-49. Kept visible as the strain in §2b. |
| "The question is one question about redundancy" | **Retracted.** It is a union of two conditions (Fig 9 :54-56), with a dependency order (Fig 3). |
| "The figures decide the critical correlation" | **Retracted.** Gap. The figures give the shape; the number is an import with a source gate. |
| "Independence is a caveat on reliability" | **Retracted.** Fig 6 :53-54 calls it "the parameter rather than a caveat." |
| F1 independence decides surplus | **Canonically confirmed.** Fig 8 :47-49 plus Fig 13 :36-39 plus Fig 2 :31-32, three different jobs. |
| F3 bargain in two currencies | **Canonically confirmed.** Fig 5 :42-45 and Fig 12 :125-130. |
| "More copies always help" and "more copies always waste" | **Both refused.** The sign depends on overlap and on whether the setting is a convention or a verdict (Fig 2 :39-43). |

## 6. Status

No figure line was forced. One strain was found, sent back to census, and resolved. One gap is recorded honestly. Verdict: `specified`, ungrounded, candidate. The second seat in `11_audit.md` re-censused from the residual alone and found the same four domains by a different route; because it shares this folder's evidence pool, that agreement is internal consistency, not corroboration.
