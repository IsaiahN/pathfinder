# Figure-grounded audit: INS-0088, PPPs, improvement and risk transfer

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. `THE_FORMULA.md` mode rule: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* calls LLM output "simulacra" and says "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources for figure lines.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extract, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

The question asks two things at once: when a public-private partnership (PPP) improves infrastructure and services, and when it transfers public risks to private actors. Stated as an effect, not a cause:

> A PPP is a long-term arrangement in which a public frame and a private frame pool capital and allocate risk through a contract. What fails to resolve is whether the arrangement changes **contact with the ground** (the asset and service are actually delivered, and the real cost and risk exposure to the public fall), or whether it only **relocates the reading** of cost and risk from one frame's books to another (paper transfer, off-balance-sheet debt, contingent liabilities, later bailout) while the ground outcome is unchanged.

The two clauses of the question are not two ends of one scale. "Improve" names a relation to an anchor. "Transfer risk" names a bond between two frames. Whether a transfer improves anything depends on which party can bear that particular risk in that particular habitat, which is a measurement, not a definition.

Mode of the residual statement: `specified`. It names what would have to be observed, not an observed result.

**What an answer would look like, bound as an ordinary term (Formula step "Direction").** Before searching, I commit to this shape so it can accrue a residual like anything else: *a PPP improves iff (a) the delivered service and the public's risk exposure are read against an anchor that does not move when the contract or the appraisal changes, and (b) the risk that crosses to the private frame is one that frame can actually bear, priced in the arrangement.* A PPP that satisfies (b) but not (a) has moved a reading, not a ground. This commitment is written before the derivation and is refutable in §4.

---

## 1. DOMAIN CENSUS (before any figure line is chosen)

### a. R by arity, symmetry and scale

- **Arity:** relational and compound. It relates at least three things: a public frame, a private frame, and a ground (service outcome, cost to the public, risk events). A contract is the typed relation between the two frames. The residual is indexed per project and per risk type, not aggregated (Fig 1 :19).
- **Symmetry:** the frames are not interchangeable. Swap "public authority" and "special purpose vehicle" and the meaning changes: one is constitutively about the service owed to the public, the other about return on capital. The bonds are therefore ordered (sequence, production), not symmetric. Risk is not a symmetric quantity either: a risk "transferred" on paper can still land on the public when the event fires.
- **Scale:** four nested loops. (i) The delivery loop: build, operate, maintain, measured per contract. (ii) The payment loop: availability payments, tariffs, subsidies, refinancing. (iii) The oversight loop: audit office, treasury, legislature, electorate. (iv) The procurement-policy lineage: PFI to PF2 to hybrid PPP, across projects and decades. The membrane between project and programme is lossy (Fig 4).

### b. One line per domain: actors / currency / anchor

| domain | actors | currency | anchor (nameable?) | status |
|---|---|---|---|---|
| **D1 Delivery loop** | SPV consortium, contractor, operator, public authority | residual reduction: asset delivered to the output specification, service quality, "no service, no fee" | the asset and service actually delivered; a measurement | admitted |
| **D2 Contract and risk-allocation frame** | contract writers, lawyers, lenders, insurers, refinancers | risk allocated, debt priced, payment stream, contingent liability | whether the loss-bearing party changes when the risk event fires; not the contract text itself | admitted |
| **D3 Public-accountability frame** | audit office, treasury, legislature, taxpayer, regulator | value-for-money assessments, balance-sheet treatment, reports | real cost to the public and service outcome, which must not move with the assessment | admitted |
| **D4 Appraisal / instrument frame** | planners, forecasters, consultants, appraisal reviewers | forecast cost, demand, benefits (the business case) | outturn costs of a reference class of completed comparable projects | admitted |
| **X1 "Private sector efficiency" as a free-floating property** | the private actor alone | talent, discipline, profit motive | none nameable independent of the arrangement | not a domain yet; absorbed into D1's habitat |
| **X2 "Risk transferred" as a single scalar** | n/a | one number | none; risk is per slot (construction, demand, refinancing, political, force majeure) | not a domain; the aggregation error |

A nameable anchor is required before a line of actors counts as a domain. X1 and X2 fail that test and are not smuggled in later as explanations.

### c. Partition or union?

**Union, not partition.** Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The compound is: **C1 (contact maintained or improved: delivery and service actually better) ∩ C2 (channel honest: appraisal, contract and audit do not let the anchor move).** A single lever, for example "transfer more risk to the private party", clears the region where only one condition binds and leaves the intersection standing (Fig 9 :54). The question's two halves overlap: the same transfer can improve service when the receiver can bear the risk, and merely relocate a reading when it cannot. That overlap is why it is a compound with its own loop, not two independent questions.

### d. Order by dependency (Fig 3)

Perception (can we read the service outcome and the real public cost at all?) -> vocabulary (do we have terms for what each risk affords, that is, who can bear it?) -> objective (what counts as progress, in the contract's own terms: value for money?) -> planning (allocate risk, set payments, write the output specification) -> learn and carry (audit, refinancing, next procurement). Fig 3 :20 "The chain is ordered by dependency, not by importance." Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."

The chain usually breaks in the middle, at the objective. Fig 3 :24 "Why the middle link is where chains usually break." Having terms for what a contract affords and being able to say what would count as progress (a VfM metric) has neither an obvious failure nor an obvious test. Effort lands above the break, in financing and risk-transfer language, while the middle link is unmeasured.

---

## 2. Figure census (bearing, before findings)

| figure | bearing here | preliminary verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric; frame-internal quantities disqualified | aggregate VfM cannot settle a per-project, per-risk question |
| 2 The Ground | anchor must not update; triangulation vs mirror; independence | off-balance-sheet treatment moves the reading; a room of PPP advocates is a mirror |
| 3 Dependency Chain | order by dependency; the break at the objective | VfM is the unmeasured middle link |
| 4 The Membrane | methods cross up, head starts down; round trip gap | a policy lesson must be a method, not a recording of one project |
| 5 Mint Pipeline | three guards as a product; settlement necessary and not sufficient | "value for money achieved" is not settlement of the ground |
| 6 Closure / Reachability | import moves the wall; instrument improved from a worse one | reference class forecasting is an instrument, not a new frame |
| 7 Room Chain | agreement is variation, not a verdict | more PPP advocates do not add evidence |
| 8 Union Surplus | closure idempotent; residual first, frame second | describe the failure of contact before choosing a discipline |
| 9 Leave / Arrive | union vs partition; describe before looking; filters vs witnesses | the question is a union; VfM is a filter, not a witness |
| 10 Ground Maintainer | channel decays, ground does not; convention that decides an outcome; verifier non-access | accounting conventions and appraisals are the channel, not the ground |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; introduction not exclusion | "private efficiency" alone is refuted; risk valence is per residual |
| 12 The Bond | the arrangement is the substance; isomer, functional group; two currencies | risk transfer is a bond, not an atom; same ingredients, different substances |
| 13 Minimum Viable Set | two kinds, cross-kind composition | strained if forced onto public/private frames; see F10, re-census |
| Operators / Symbols | ordered vs symmetric bonds; `R` per slot; ground as anchor | transfer and payment are ordered bonds; no scalar `R` for "the PPP" |

Strained readings are named as such in F10, not smoothed over.

---

## 3. Findings F1 to F10

### F1 - The question is a union compound and must be unbundled before it is searched (decisive for method)

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The two clauses ("improve" / "transfer risk") are conditions, not alternatives. Asking "which one is it?" is asking the question in the wrong form. A PPP can improve service and transfer a risk at the same time; the transfer can be real or nominal. Verdict: `general` for the union rule, `specified` for this binding. Triangulated (Fig 9 union rule plus the domain census's two nameable anchors, low overlap). Refuter: a demonstrated single-scalar law in which aggregate VfM fully predicts both service outcome and public risk exposure with no live per-slot residual.

### F2 - Per-slot indexing: "value for money achieved" hides the live signal

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13 "A global R near zero with one live slot residual is a legal state."

A project can show a positive overall VfM while a specific risk slot (demand, refinancing, force majeure, maintenance quality) is live and unmanaged. The aggregate is a filter for the budget, not a witness for the verdict. Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Verdict: `general` (indexing rule), `specified` (PPP VfM). Triangulated with Fig 2's anchor rule, different quantities. Refuter: a study in which a single VfM number, with no per-risk decomposition, predicts later bailouts and service failures at the same accuracy as a per-slot reading.

### F3 - The anchor is the delivered service and the real public cost, and it must not update

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." Fig 2 :33 "The anchor must not update." Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Off-balance-sheet accounting is the central failure here. The Wikipedia PFI page records that PFI was used to take debt off the government balance sheet to meet Maastricht criteria, and that the effect on public accounts was "largely illusory"; it also records the UK Treasury Select Committee's 2011 recommendation that "PFI should be brought on balance sheet." When the procurement's reason is the accounting treatment, a convention has decided an outcome. Fig 10 :47 "a convention that decides an outcome has stopped being one."

Mode `specified` for the PPP application; `general` for the anchor rule. Triangulated (Fig 2 anchor plus Fig 10 convention, low overlap). Refuter: a case where moving a PPP liability on or off the public balance sheet demonstrably does not change the measured VfM, the real cost to the taxpayer, or the service outcome, with the same contract otherwise. Such a case would show the convention is separable from the ground and would narrow this finding.

### F4 - Risk transfer is a bond, not an atom: the arrangement, not the list of risks, is the substance

Fig 12 :5 "the bond is the rest of the information, and it is the half nothing was recording." The Operators table distinguishes ordered bonds (sequence, production, subtraction, comparison) from symmetric ones, and notes "the bond carries information the operands do not."

A PPP contract can list the same ingredients (private finance, 25-year concession, availability payments, a risk-allocation matrix) and yet be a different substance depending on whether the risk actually crosses to a party that can bear it and whether the payment changes when the risk event fires. Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Where two PPPs share the same structure but differ only in which risk is borne by which party, they are Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Verdict `general` for bond-carries-meaning, `specified` for the contract reading. Triangulated (Fig 12 plus Operators table, and Fig 11 valence rule below). Refuter: a documented case where the same risk allocation produces the same loss-bearing regardless of which party holds the risk or what habitat the project sits in.

### F5 - "Private sector efficiency" as a free-floating property is refused

Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

The claim "PPPs improve because the private sector is more efficient" is an agent-only improvement. It does not say what changed in contact. Under the figures, the efficiency would have to show up as a changed delivery residual against the ground (D1), not as a property of the contractor. Verdict: `general` for the capability rule, `specified` for the PPP claim. Triangulated (Fig 11 plus Fig 1 :23 "The ground enters as the only metric"). Refuter: a controlled comparison in which the same habitat and contract yield different outcomes attributable to the private identity of the operator alone, with contact held constant. That would break the capability claim and would be sent back to the census, not averaged into the verdict.

### F6 - Valence is relative to the residual: risk transfer is not itself an improvement

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 11 :51 "No standing list of good actors survives a change of residual."

Transferring construction risk to a contractor who can price and absorb it may lower cost. Transferring demand risk to a consortium that then walks away, leaving the public to refinance, is the same bond with the opposite valence. There is no standing list of "risks that should be transferred". This is why the question cannot be answered at the level of "PPP versus public procurement": the unit is the risk slot and the receiving frame's capacity. Verdict `specified`. Single-source for the figure definition (Fig 11), with the PFI record as corroboration only. Refuter: an invariant valence of a given risk across residuals and receivers.

### F7 - Appraisal is an inward instrument unless it is built to point out

Fig 10 :24 "the ground does not decay, the channel does". Fig 10 :26 "saturated metrics, pooled readings". Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Flyvbjerg's arXiv abstract states that project inaccuracy is explained "in terms of optimism bias and strategic misrepresentation", and that reference class forecasting "achieves accuracy by basing forecasts on actual performance in a reference class of comparable projects and thereby bypassing both optimism bias and strategic misrepresentation." The Wikipedia reference-class page records the Edinburgh Tram business case at £320 million against an outturn of £776 million. Under the figures, an appraisal produced by the party that wants approval is an inward-pointing instrument; a forecast built from completed projects' outturns is an outward one, improved from the worse instrument (the project-specific estimate) that was already returning something. Verdict `specified` for PPP appraisal; `general` for the instrument rule. Triangulated (Fig 10 channel plus Fig 3 instrument plus Fig 6 instrument improvement). Refuter: a prospective study in which appraisals for PPPs are shown unbiased against outturn without any reference-class correction and with no difference from public-procurement appraisals.

### F8 - Agreement cannot substitute for an anchor, especially in a contested field

Fig 7 :13 "agreement compounds, evidence does not". Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :42 "Buy independence in proportion to the cost of being wrong."

PPP research is unusually exposed to this failure: proponents and opponents often draw on the same small set of PFI and World Bank records, so their disagreement is not two frames against an anchor but two readings of one pool. Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" (the leading clause "disqualifying for a verdict:" belongs to the full line). The only legitimate corroboration here is a frame with a different closure, for example an audit office measuring outturn per project against an appraisal that did not use its data. Verdict `general`. Refuter: two genuinely independent datasets with no shared source that converge on the same per-slot result.

### F9 - What survives, with its mode

| surviving claim | mode | source |
|---|---|---|
| An aggregate VfM verdict hides per-risk slot residuals; read per slot | `general` -> `specified` | Fig 1 :19, :22; Fig 9 :60 |
| The anchor is delivered service and real public cost, and must not move with the contract's accounting | `general` -> `specified` | Fig 2 :29, :33; Fig 10 :47 |
| Risk transfer is an ordered bond; the same ingredients can be different substances | `general` -> `specified` | Fig 12 :5, :117; Operators table |
| Capability lives in the arrangement, not the private actor alone | `general` -> `specified` | Fig 11 :39-40 |
| Risk valence is relative to the residual and the receiving frame | `specified` | Fig 11 :49, :51 |
| Appraisal needs an outward instrument (reference class outturns) | `general` -> `specified` | Fig 10 :24; Fig 3 :27; Fig 6 :32 |
| Which specific risk should be transferred in which sector | **`gap`** | Fig 9 :32 "you get a kind of thing, never the answer itself" |

The last row is a declared gap, not a hidden answer. Fig 13 :134 "Unreachable is a verdict here, not a silence," and Fig 8 :39 "So a search that finds nothing is never a proof of absence." What is missing is a source-discriminating instrument, characterized in effect terms but not held at this budget: per-project, per-risk outturn data with an anchor that does not update.

### F10 - A strained reading, refused and kept visible (re-census)

I first tried to map Fig 13 :75 "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." onto public and private as "two states needing an intervening structure". That is a strain. Public authority and private consortium are frames with libraries and anchors, not the space/time/energy states of the six-term substrate. Fig 13 :74 "Everything else is a composition across the two kinds, never within one." governs the six primitives, not institutional parties.

Re-census: the relation between public and private frames in a PPP is a composition of frames, which Fig 12's bond theory and Fig 8's union-surplus theory govern, not Fig 13's substrate grammar. The Fig 13 line is withdrawn as applied here and retained only as the general statement that any composed system requires cross-kind composition. This is the framework's own rule: a reading that makes figures contradict one another has misidentified its domain. Strain sent to the log, not hidden as a correction.

---

## 4. Pre-registered refuter (written before the conclusion)

"A falsifier written before the run is a design instrument, not only an honesty device" (Seat Map :287). The shape claim in §0 is refuted if any of the following holds:

1. A single aggregate VfM number fully predicts service outcome and public risk exposure per project, with no live per-slot residual that changes any decision (breaks Fig 1 :19, :22 and the union reading).
2. A documented case where the same risk allocation produces identical loss-bearing regardless of which party holds the risk and regardless of the project's habitat, or where a transfer improves outcomes with no difference in who can bear the risk (breaks Fig 11 :49-51 and Fig 12 :5).
3. PPP appraisals are shown unbiased against outturn with no reference-class correction, and no different from public-procurement appraisals (breaks F7's inward-instrument finding).
4. A case where the accounting convention demonstrably is the ground for the question, that is, reclassifying the liability changes nothing real and the public cost is fully constituted by the reporting rule (breaks F3's anchor rule and sends the question back to census).

Until one is run, no part of this may be labelled `grounded`.

---

## 5. Seat-reasoning header (the five-line design check)

```
DECIDES:    If the shape survives (contact with an unmoved anchor AND risk borne by a frame
            that can carry it), send the packet in 08 and ask what would refute it. If it
            fails on C1, stop and re-census the anchor; if it fails on C2, stop and re-census
            the risk slots. A = B? No: "improve" and "transfer risk" answer different
            questions (Fig 9 :54-57), so a single lever is not a decision rule.
HOURS:      One primary seat and one independent reviewer about 1 to 1.5 h each for the
            twelve files; WATSON world search about 0.5 h; auditor re-census about 0.25 h.
            Hours are a budget, never evidence (Fig 12 :126-130).
PRIOR CASE: BUS-0001, "why do some firms sustain superior performance", same union shape
            (contact maintained AND reach renewed), two-condition compound, pre-registered
            falsifiers, `specified` ungrounded verdict.
ANALOGUE:   Ecosystem engineering after Fig 11 :61-65: a seat can introduce an actor and
            cannot subtract the habitat. A PPP can add a private frame and a contract; it
            cannot remove the public's contact with the service or the taxpayer's exposure.
LIMIT:      At 1,300 questions and many procurement regimes, does the audit stay flat? Only
            with an independent re-census per question (Fig 7 :13, evidence does not compound
            with agreement). This folder has one; it is simulated, not a second witness.
```

---

## 6. Recommendation

1. Do not ask "PPP or public procurement?". Unbundle into C1 (contact) and C2 (honest channel) and read them per project, per risk slot (F1, F2).
2. Anchor on delivered service and real public cost, never on the balance-sheet treatment or the appraisal's own VfM figure (F3, F7).
3. Treat risk transfer as a bond: ask who bears the loss when the event fires, at what price, and in which habitat (F4, F6).
4. Drop the claim that private identity alone produces efficiency; the arrangement is the unit (F5).
5. Use filters for budget and witnesses for verdict. The aggregate VfM is the former (F2).
6. Send the generator (shape claim plus refuter), not a recording of one procurement success (Fig 4 :22 "Only methods cross up. Only head starts come down.").

---

## 7. Canonical usage check (figures README, WATSON 60, formula)

Read after the first sections, and governing how the figures may be used:

- `FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; "the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the canonical limit, the framework reports "what a missing thing would have to look like (a shape, not a name)", then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." This licenses the `gap` in F9 and the refusal in F10.
- `60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground and does not ask for rulings the figures decide. Fig 9 :60 is quoted there as "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." So the decision here is derived, not escalated to an authority on PPPs.
- `THE_FORMULA.md` step 7: SEARCHED, INWARD, OUTWARD are distinct. SEARCHED first, cheapest. Here the inward instrument is outturn-based appraisal (already returning something, just biased). The outward frame is audit and comparative procurement data with a different closure. Importing a favourite procurement ideology against a budget limit would add an atom that was not needed.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| First instinct: the question is "which is it, improvement or risk transfer?" | **Retracted.** Fig 9 :54-57 makes it a union compound. Recorded in F1. |
| First instinct: aggregate VfM settles improvement | **Retracted at record level.** Fig 1 :19, :22 make the aggregate a filter. Recorded in F2. |
| F10 read Fig 13 :75 as governing public/private frames | **Withdrawn as applied.** Re-census: Fig 12's bond theory governs frame composition; Fig 13 governs the six primitives. The strain is visible in F10. |
| "Private sector efficiency" treated as an explanation | **Refused.** Fig 11 :39-40 makes capability agent-and-habitat. F5. |
| Appraisal treated as a neutral measurement | **Corrected to channel.** Fig 10 :24, :26; Fig 3 :27. F7. |
| World sources (Wikipedia, World Bank, Flyvbjerg) treated as corroboration | **Downgraded to one pool.** They overlap heavily on the same PFI and forecasting literature. They corroborate the mechanism shape, not the figure verdict. See `09_watson_answer.md` WORLD. |
| Which specific risk to transfer | **Declared `gap`**, not filled. Fig 9 :32. |

No earlier reading was silently erased. The retractions above are part of the derivation record.

---

## 8. Closing state

The shape survives the census and the re-census; the specific claim that PPPs improve because the private sector is inherently efficient does not. One strain was found (F10) and resolved by re-census rather than by softening the figure. One gap is declared (which risk, which sector). All substantive claims are `specified` or `general`; none is `grounded`. The next honest instrument is per-project, per-risk outturn data with an anchor that does not move when the contract or the appraisal changes.
