# Figure-grounded audit: BUS-0088, balancing data and human judgment

**Mode of this document: `general` on the structural shape, `specified` on the per-domain predictions. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The local verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the world sources listed in `10_source_ledger.csv`. Every figure quote below was taken from the verbatim extract, not from a summary.

---

## 0. Proposal header (seat reasoning)

```
DECIDES:    "Balance" is not one scalar. It is a union of distinct decision questions
            (factual prediction, value about people, legitimacy), each with its own
            anchor. Balance = triangulate two low-overlap frames against one immovable
            ground, per slot. A = B? No. Averaging a model and a manager is not the
            same act as ranging two frames separately against a ground (Fig 2 :35,
            Fig 2 :45).
HOURS:      Derivation 1.5, world search 1, outreach artifacts 0.75, independent
            audit 0.5. Comparable to the exemplar's scale, one question end to end.
PRIOR CASE: QMGR-0037, the imported exemplar. It shows the same discipline: split the
            compound, quote before concluding, keep verdicts per domain, record the
            retraction rather than erase it.
ANALOGUE:   Two navigators taking a bearing on one fixed landmark, not two people
            averaging their guesses (Fig 2 :35). Library of Babel: describe the
            residual before choosing a frame, or every frame will seem to fit.
LIMIT:      If the human judgment offered as anchor for a people-facing question is
            itself moved by the model's framing, there is no immovable anchor and the
            verdict for that slot is `gap`, not a softer balance. Fig 2 :29-30.
```

---

## 1. The residual, stated in effect terms

A company commits an action `a` on a decision slot `s` (one hire, one loan, one launch, one patient). Before acting it holds a prediction `Γ(b,a)` from its data/model frame, where `b` is a belief formed from private history and inherited prior. After acting it observes `o'`. The residual is `R_s = |Γ(b,a) − o'|`.

When data are incomplete or biased, the model's residual on some slot **persists and does not trend down** (Fig 5 :58-60). The manager's lived context may carry an atom the model's closure lacks (Fig 6 :23). The question asks which frame settles which part of `R_s`.

**Arity:** the residual is indexed per slot, not one global number (Fig 1 :19). A decision bundle is many slots, and some are live while the global accuracy is high (Fig 1 :22).

**Symmetry:** model and human are not symmetric substitutes. They are two frames with different actors, currency and anchor (Fig 4 :20). A scalar weight such as 80/20 treats an asymmetry as a ratio and is a category error, not a moderate position.

**Scale:** the first loop is one decision (perceive, route, settle). The second loop is process design, where a method learned at one decision crosses the membrane and a recording of one decision does not (Fig 4 :22).

---

## 2. Domain census (before choosing any figure line)

One line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1, the data/model frame | dataset, model, metric, engineers | reduction of `R_s`, description length | the realized outcome (experiment, market, counter, patient outcome), never in-sample accuracy | partition: which compositions the model's closure can reach |
| D2, the human/judgment frame | manager, expert, affected person, tacit knowledge | context, causal narrative, procedural legitimacy | two-valued by question type: for a constitutively people-facing question the people are the anchor (Fig 2 :36-37); for a factual prediction human judgment is only an instrument with blind spots | union with D1: overlaps in evidence, differs in closure |
| D3, the verification frame | reviewer, board, audit, experimenter | agreement versus residual | the ground, never agreement; independence bought in proportion to cost of error | partition of the checking arrangement |
| D4, the decision habitat (compound) | data sources, incentives, institution, affected people, instruments | contact with the ground | the ground; capability is agent-and-habitat, not agent alone | union: a case in two or more conditions, not a harder case of one |

**Partition or union.** "Data versus judgment" is a **union** of overlapping conditions, not a partition into two clean boxes (Fig 9 :54). A single decision can be simultaneously factually predictable, value-laden about people, and corrupted by a shared evidence pool. Unbundle before searching (Fig 9 :4-5). The residue after unbundling is smaller and categorically different; it stops being a mixture and becomes a specific compound.

**Dependency order (Fig 3).** perception (is the channel returning a readable signal?) → vocabulary (do we have terms for what the situation affords?) → objective (what counts as progress on this slot?) → planning (which frame acts where?) → learn and carry (name what worked, verify it, carry it). Optimising a link above the break cannot rescue one that does not (Fig 3 :19). Most improvement effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 3. Figure census (verbatim, quoted before concluding)

| figure | verbatim line | bearing | verdict per domain |
|---|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | R is per decision, not per dashboard | D1, D3 |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | a global accuracy figure hides the failing slot | D1, D4 |
| Fig 1 :23 | "The ground enters as the only metric." | model accuracy is not the metric | D1 |
| Fig 1 :27 | "They are frame-internal. A frame cannot score itself with a quantity it also produces." | coverage and credibility cannot settle a decision | D1, D3 |
| Fig 2 :29-30 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor." | the anchor is neither the model nor the manager | D1, D2, D3, D4 |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | averaging the two frames is the mirror | D3 |
| Fig 2 :36 | "An anchor is legitimate when the question is constitutively about it." | scopes when human judgment may be the anchor | D2 |
| Fig 2 :37-38 | "Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." | two roles for judgment, by question type | D2 |
| Fig 2 :40 | "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | model and manager agreeing from the same data is one witness | D1 ∩ D2, D3 |
| Fig 2 :42 | "Buy independence in proportion to the cost of being wrong." | sets how much separation to buy | D3 |
| Fig 2 :45 | "Frames range against the ground. They do not negotiate with it." | the operating rule for balance | all domains |
| Fig 3 :19 | "Optimising a link that already works cannot rescue one that does not." | a better model cannot fix a dead perception link | D1, D4 |
| Fig 3 :29-30 | "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed. Most improvement effort in practice lands above the break, because that is where the measurements already exist." | diagnose the chain before choosing a frame | D4 |
| Fig 4 :20 | "Only the actors, the currency and the anchor change." | model and human are frames, not interchangeable weights | D1, D2 |
| Fig 4 :22 | "Only methods cross up. Only head starts come down." | send the method of checking, not a decision recording | D3, D4 |
| Fig 5 :58-60 | "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at" | tells us where judgment should aim: the live slot | D1, D2 |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | the positive reason for a second, low-overlap frame | D1, D2 |
| Fig 6 :29 | "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms." | inward remedy for incomplete data | D1 |
| Fig 6 :30 | "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." | the residual must be described in effect terms before outreach | D3 |
| Fig 6 :32 | "An instrument is not built from a description. It is improved from a worse instrument already returning something." | repair the instrument from one already returning something | D1, D4 |
| Fig 7 :35 | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | committee consensus is not a decision ground | D3 |
| Fig 8 :29 | "low overlap: B does not draw on A's evidence" | the independence condition for triangulation | D1 ∩ D2 |
| Fig 8 :45 | "Two frames together reach what neither reaches alone." | the surplus from a human frame that differs | D1, D2 |
| Fig 8 :50-52 | "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence. Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ." | provenance decides whether agreement is a witness | D3 |
| Fig 8 :54 | "underivable is not unknowable" | the union is searchable from contact | D4 |
| Fig 9 :4-5 | "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." | split before balancing | D4 |
| Fig 9 :27-28 | "describe it before you go looking, or any frame you pick will seem to fit" | residual first, frame second | D4 |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | the output is a shape, not a policy number | all |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | the union diagnosis | D4 |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | a balance ratio is a budget filter, not a witness | D3 |
| Fig 10 :24 | "the ground does not decay, the channel does" | incomplete/biased data is channel decay | D1, D4 |
| Fig 10 :25-26 | "stale percepts, dropped transients, saturated metrics, pooled readings" | names the decay modes in a company | D1 |
| Fig 10 :29 | "keep the anchor reachable" | the remedy is contact, not argument | D1, D4 |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | why the first contact carries only the residual | D3 |
| Fig 10 :52 | "Bring a characterised residual, never the source." | order of the two-stage offer | D3 |
| Fig 11 :39 | "And capability is a property of agent-and-habitat, never of the agent alone." | a better model in the same habitat gains nothing | D4 |
| Fig 11 :40 | "An improvement that does not change contact changes nothing, however much it improves." | refuter for model-only fixes | D4 |

**Strain test applied before concluding.** Fig 2 :37 appears to make human judgment an anchor, while Fig 2 :29-30 says an anchor cannot change its answer because of what any frame thinks. The strain is real and is handled in §5 by re-census, not by smoothing.

---

## 4. Findings (one loop per domain, verdicts never averaged)

### F1. The anchor is the realized outcome, not either frame and not their mean - `general`, triangulated

Fig 2 :29-30 and Fig 2 :45 are decisive: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."* and *"Frames range against the ground. They do not negotiate with it."* Fig 1 :23 adds *"The ground enters as the only metric."*

A blended "data-informed, human-reviewed" score is a negotiation output. It has no anchor unless the blended score is itself compared with what happened. **Refuter:** show a decision where the weighted mean of a model score and a manager score settles the outcome at the ground without a separate reading of what happened. Until then the mean is a convention, not a verdict (Seat Map :163: *"a convention that decides an outcome has stopped being one."*). Triangulated across Fig 2 and Fig 1, low overlap between the ground definition and the metric rule.

### F2. Track the residual per decision slot, not on a dashboard - `specified`, triangulated

Fig 1 :19 and :22: *"The residual is indexed by object slot, not aggregated."* and *"Aggregating across slots is how a live signal disappears into an average."* Fig 10 :25-26 names the pooling failure: *"stale percepts, dropped transients, saturated metrics, pooled readings"*.

A company can report 95 percent accuracy and still be wrong on the one loan segment where the model is systematically unfair. That live slot is exactly where judgment should be aimed (Fig 1 :15: *"where to look: broken vs novel"*; Fig 5 :58-60: *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"*). **Refuter:** a live case in which a global accuracy figure closes every per-slot residual, so nothing is hidden by the average. Triangulated across Fig 1 and Fig 10.

### F3. Human judgment has two different roles, set by the question type - `specified`, single-source in the figures

Fig 2 :36-38: *"An anchor is legitimate when the question is constitutively about it."* and *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*

So the rule is not "trust people more" or "trust people less." For the part of the decision that is constitutively about people (is this a fair hire, is this answer good for this customer), the affected people and the practitioners who know them are the legitimate anchor. For the part that is a factual prediction, human judgment is an instrument with axes it does not measure; it can be overconfident or anchored, just as a model can be biased. **Refuter:** show a people-facing value question where a non-human instrument is constitutive, or a factual prediction question where an untrained intuition reliably ranges against the ground on every axis. Single-source in the figures (Fig 2); world corroboration from the fairness literature and the organizational-behavior study in §7, not counted as a second figure.

### F4. Agreement between model and manager is worth nothing if they share the evidence pool - `specified`, triangulated

Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 8 :29: *"low overlap: B does not draw on A's evidence"*. Fig 8 :50-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."*

A manager who reads the same dashboard, the same CRM and the same evaluation rubric as the model is not a second frame. Their agreement is the pool talking. Independence has to be bought, and bought in proportion to the cost of being wrong (Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*). Practical form: elicit the manager's judgment before showing the model's output, keep separate experience, and record which atom came from which frame. **Refuter:** a case where the manager's judgment is provably formed without any of the model's evidence and still adds no surplus, so the independence purchase is wasted. Triangulated across Fig 2 and Fig 8.

### F5. Incomplete or biased data is channel decay, and the remedy is inward instrumentation, not a wholesale swap to intuition - `general`, triangulated

Fig 10 :24: *"the ground does not decay, the channel does"*; :29: *"keep the anchor reachable"*. Fig 6 :29 and :32: *"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."* and *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*

The right response to biased data is to find the worse instrument already returning something (a complaint log, a field audit, a holdout experiment, an affected person's account) and sharpen it. Replacing the model with intuition does not restore contact; it swaps one lossy channel for another, and the bias is often institutional rather than computational. World corroboration: NIST's bias report, which states that bias stems from *"human and systemic institutional biases as well"* (§7). **Refuter:** a case where the channel is dead at every resolution and no proto-instrument exists (then INWARD is the wrong instrument and the verdict is `unreachable at this budget`, not a call for intuition). Triangulated across Fig 10 and Fig 6.

### F6. A scalar "balance ratio" is a filter for the budget, not a witness for the verdict - `general`, single-source in the figures

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Fig 9 :32: *"you get a kind of thing, never the answer itself"*.

An 80/20 rule can decide how much analyst time to allocate. It cannot decide whether the loan was fair. Treating the allocation rule as the answer is the output-layer failure genus in the seat map: a mode stated as a verdict. **Refuter:** show a ratio that closes `R_s` at the ground on a live slot. Single-source (Fig 9), corroborated by the shape-not-a-name limit in the canonical figures README.

### F7. The human frame's positive contribution is an import or a refusal, not a vote - `specified`, triangulated

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :45: *"Two frames together reach what neither reaches alone."* Fig 5 :58-60 gives the ranking rule for what to refuse. Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

The manager contributes when their closure holds an atom the model cannot reach (tacit context, a causal mechanism, an affected person's account), or when they name a residual that persists and does not trend down. They do not contribute a vote. Their import must carry a source gate and a shadow test (Fig 6 :12-14: *"source gate: provenance"*, *"shadow test: explains a gap"*), or it is an undeclared second voice. **Refuter:** a case where the human frame's closure is provably a subset of the model's and no residual is ever named by it. Triangulated across Fig 6, Fig 8 and Fig 7.

### F8. Capability lives in the agent-and-habitat, so a model-only improvement changes nothing - `general`, single-source in the figures

Fig 11 :39-40: *"And capability is a property of agent-and-habitat, never of the agent alone."* and *"An improvement that does not change contact changes nothing, however much it improves."*

A better model dropped into the same incentive system, the same missing-feedback loop and the same underrepresentation is a better reader with nothing new to read. The habitat (who gets measured, what feedback returns, who can contest) must change for contact to change. **Refuter:** an agent-only improvement that demonstrably moves the ground reading in a fixed habitat. That would refute the capability claim, which the figures mark as a claim still open to forward testing. Single-source (Fig 11); world corroboration from NIST's socio-technical finding and the ACM FAccT scope (§7).

### F9. Diagnose the broken link before choosing a frame - `general`, triangulated

Fig 3 :19 and :29-30: *"Optimising a link that already works cannot rescue one that does not."* and *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed. Most improvement effort in practice lands above the break, because that is where the measurements already exist."*

If the decision chain stops at perception (the data are not a readable signal for this slot), adding a second reviewer above the break is effort spent where the measurements already are and cannot rescue the link below. If it stops at vocabulary (no term for what the situation affords), more data do not help. **Refuter:** a case where effort above the break closes the residual below it. Triangulated across Fig 3 and Fig 10 :24.

---

## 5. Live strain and re-census (kept visible)

**Strain S1, anchor legitimacy versus anchor immovability.** Fig 2 :37 permits human judgment as an anchor for people-facing questions; Fig 2 :29-30 forbids an anchor that changes its answer because of what a frame thinks. A manager asked for a "human override" after seeing the model's recommendation is a moving anchor, and the arrangement collapses into Fig 2's panel 1 (coherent drift).

*Re-census, not a softer reading.* The two lines govern different objects. Fig 2 :36 (*"An anchor is legitimate when the question is constitutively about it."*) supplies the scope: the people's judgment is the referent for the constitutive value question, not a per-case reaction to a model output. To keep it immovable, the judgment must be elicited before the model's framing is shown, from a person with separate experience, and recorded with its provenance (Fig 8 :50-52). If that cannot be arranged, the slot has no legitimate anchor and the honest verdict is `gap` for that slot. The strain is named and survives; it is not dissolved into a recommendation to "use both."

**Strain S2, convergence versus import in the contents.** A manager's intuition may be a genuinely separate derivation of the same atom, or an import absorbed from the company's data culture. The contents look identical (Fig 8 :50-52). The record of where it came from is the only discriminator. This is not resolved by better psychology; it is resolved by recording the order of elicitation and the sources each frame actually used.

**After re-census:** two live strains, both named, neither hidden. No figure line was strained to fit a quantity it does not govern.

---

## 6. Pre-registered refuter (written before the conclusion)

The shape claim is refuted if any of the following holds:

1. A decision is shown whose ground provably moves when a frame pushes on it, and which nevertheless settles correctly. This breaks Fig 2 :29-30.
2. Model and human frames are shown to be necessarily correlated in a domain, so no independent elicitation or separate experience is possible and triangulation buys zero surplus. This breaks Fig 2 :31-32 and Fig 8 :29.
3. A single global accuracy or balance ratio is shown to close every per-slot residual in a live biased-data case. This breaks Fig 1 :19 and :22.
4. A model-only improvement is shown to change contact with the ground in a case where the habitat and instruments are unchanged. This breaks Fig 11 :40.
5. For a people-facing value question, a non-human ground is shown to be constitutive. This breaks Fig 2 :36-37.

If any fires, the corresponding finding is withdrawn and the verdict for that domain becomes `gap`. Until one is run, nothing here is `grounded`.

---

## 7. Recommendation (verdict recorded as a shape, not a ratio)

1. **Split before balancing.** Enumerate the constituent questions of the decision (factual, value-about-people, legitimacy) and name which has a ground. Fig 9 :4-5, :54.
2. **One ground, two separate ranges.** Make the model and the human each range against the same immovable outcome, separately, and record both. Never average them into one score. Fig 2 :35, :45.
3. **Per slot, not per dashboard.** Keep `R_s` indexed by decision, and aim review at slots with persistent, non-declining residual. Fig 1 :19, :22; Fig 5 :58-60.
4. **Repair the channel inward.** For incomplete or biased data, sharpen an instrument already returning something, and change the habitat if needed. Do not substitute intuition for a dead channel. Fig 6 :32; Fig 10 :29; Fig 11 :40.
5. **Import with provenance.** Where the human frame holds an atom the model lacks, carry it with a source gate and a shadow test, and record which frame produced it. Fig 6 :23; Fig 8 :50-52.
6. **Buy independence in proportion to cost of error.** Low-cost decisions can use one frame plus a spot check; high-cost decisions need two low-overlap frames plus a ground reading. Fig 2 :42.
7. **Keep the lineage.** Record which frame settled which slot, what was imported, what was refused, and what would reverse the decision. Fig 4 :30 requires the round trip gap to be measured: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

---

## 8. Canonical usage check and retraction/confirmation log

Two canonical sources were read after the first sections and govern usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`, which says the figures *"outrank everything else in the repo"* and return *"what a missing thing would have to look like (a shape, not a name)"*, and `FRAMEWORK/figures/THE_FORMULA.md`, whose step 7 distinguishes SEARCHED, INWARD and OUTWARD and whose mode rule is quoted above. The seat map was also checked for the correlation and falsifier rules.

| earlier reading | status after the canonical check |
|---|---|
| "balance means triangulate, so average the two scores" | **Retracted at the formulation stage.** Triangulation is two separate ranges against one anchor (Fig 2 :45), not a weighted mean. A mean is the negotiation collapse. |
| "the human is the anchor" (initial shorthand) | **Narrowed, not erased.** Fig 2 :36-37 makes it anchor only for constitutively people questions and an instrument for factual prediction. F3 carries the narrowed form. |
| "biased data means the model is wrong and the manager is right" | **Refused.** Fig 10 :24 puts the fault in the channel; NIST and the fairness literature put part of it in the institution. Neither frame is thereby exonerated. |
| "more data will fix it" | **Refused as an unconditional claim.** Fig 3 :19 and Fig 6 :32 require a diagnosis of which link stopped and whether an instrument already returns something. |
| F1 to F9 verdicts kept per domain | **Confirmed.** No averaging across domains, as required by Fig 1 :19 and the plan's per-slot rule. |
| S1 human-anchor strain | **Kept live.** Re-census scopes it to constitutive questions; it is not dissolved. |
| Simulated status | **Confirmed.** The Recursive Self-Improvement Trap makes LLM output simulacra; this audit cannot settle the question. |

**Round trip note.** The condensation from the figures into the six recommendations above is lossy. What drops out on the way back down is precisely the type of S1 (can a moving human judgment still be an anchor?) and the provenance distinction in S2. `11_audit.md` records the gap `R_T` as an enumerated set of dropped constraints, not as a number, because no ground reading exists here.
