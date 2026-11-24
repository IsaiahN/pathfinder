# Expert verification packet - the Tether on demand forecasting, waste and shortage

**What this is:** a claim in a form a demand forecaster, operations researcher or supply chain analyst can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No per-slot measurement is claimed. This is a shape and a route, not a result. It is a simulated derivation checked for internal consistency against the figures, not a ground reading (`05_what_shape_means.md` section 7).

**Boundary of the check.** The first three sections are the whole stage-1 ask. Provenance, links and the method offer come later and only if a verdict on stage 1 is recorded first.

---

## 1. The claim, in one paragraph

Waste falls without a binding shortage when two conditions hold at once: the firm's channel to realized demand stays reachable at SKU and period level, meaning readings are not stale, pooled into an average, or blind to the supply line; and the firm's forecasting reach can represent the demand that actually arrives, importing signals from ways of seeing that differ from its own sales history when the history has no atom for a shift. These are two different failure modes with two different instruments, not two degrees of one accuracy problem. Accuracy is a filter for deciding where to look, not the anchor; the anchor is realized demand and the write-off and lost-sale counters. A perfect point forecast is not sufficient, because the manager who ignores the supply line can still amplify orders. The literal target of zero shortage is refused as written: overage and underage are two costs that trade off, and the canonical optimum deliberately tolerates some shortage. The claim is a shape that any candidate answer must have; it does not name which model, metric or policy wins.

## 2. Three checkable sub-claims

### C1 - Framework-internal; checkable by reading Figures 1, 2 and 10

- **Statement:** the residual is indexed per SKU-slot, never averaged; realized demand and the counters are the anchor, not a frame-produced accuracy score; quick loss of forecast quality is channel failure, not a decay of the ground.
- **Source, verbatim:**
  - Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 - *"Aggregating across slots is how a live signal disappears into an average."*
  - Fig 1 :27 - *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
  - Fig 2 :29 - *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*
  - Fig 10 :24 - *"the ground does not decay, the channel does"*; Fig 10 :26 - *"saturated metrics, pooled readings"*
- **What a practitioner can check against their own knowledge:** Lee, Padmanabhan and Whang write that *"the information transferred in the form of 'orders' tends to be distorted and can misguide upstream members in their inventory and production decisions"* (1997). Does your SKU-level error distribution hide two offsetting errors that a company-level MAPE cancels? A "no" to both is a real refutation of the mapping.
- **Refuter:** a SKU that loses forecast contact while all named channel indicators (data latency, sell-through coverage, metric saturation, aggregation level, supply-line visibility) measure healthy and non-degrading; or an accuracy score that alone prospectively predicts which named SKU will fail and in which direction. Either fires against C1.

### C2 - Framework-internal derivation plus two cross-field checks

- **Statement:** a better model with unchanged contact changes nothing; novel demand requires an import from a differing closure, because composition inside a closure cannot add an atom; agreement among models trained on one history is one witness.
- **Source, verbatim:**
  - Fig 11 :40 - *"An improvement that does not change contact changes nothing, however much it improves."*
  - Fig 6 :23 - *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
  - Fig 8 :32 - *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."*
  - Fig 6 :40 - *"What is unavailable is a sensor for something that has never registered anywhere, at any resolution."*
  - Fig 2 :31 - *"Independence, between two frames, is how little they draw on the same evidence."*
- **What an expert can check against their own knowledge:** Sterman's result is *"Even a perfect forecast will not prevent a manager who ignores the supply line from over ordering"* (1989, p.336, reproduced in the 2003 System Dynamics Society proceedings). And the M5 competition found that *"less than half (48.4%) managed to outperform the Naive benchmark"* (Makridakis, Spiliotis and Assimakopoulos 2022). Are these two findings compatible with the claim that accuracy is the binding constraint? A "yes" to both is a refutation of C2's direction.
- **Refuter:** a model that predicts a demand discontinuity from historical sales alone with no imported signal; or a controlled case in which accuracy improves substantially with contact held fixed and both waste and shortage fall and stay down across a habitat change. Either breaks idempotence and C2 with it.

### C3 - Structure and the cost form

- **Statement:** the question is a union of two conditions that must be unbundled; two setups with the same atoms but different bonds are isomers; waste and shortage are two currencies that do not add, so "accurately enough" is a comparison, not a number.
- **Source, verbatim:**
  - Fig 9 :57 - *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*
  - Fig 12 :117 - *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
  - Fig 12 :125 - *"A composition costs in two currencies, and they do not add."* Fig 12 :126 - *"Bits price the description. Actions price finding out whether it holds."*
  - Fig 12 :112 - *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*
- **What an operations researcher can check:** the newsvendor model states *"to minimize the expected total cost, the seller should intentionally create some shortage!"* (lecture notes, National Taiwan University). Does that sentence not already refuse the literal "zero shortage" target and replace it with a critical-ratio comparison? A documented policy with zero overage and zero underage for all positive cost pairs would refute the mapping.
- **Refuter:** one intervention that restores both conditions in both failure types and leaves no categorically different residue; or a demonstrated conversion in which bits cost and actions cost are commensurable and their single sum predicts the operational outcome per slot. Either collapses the union or the two-currency rule and breaks C3.

---

## 3. What is explicitly not claimed

- Not `grounded`. No measurement has paid for any part of this.
- Not a theory of everything about operations, and no final or unique theory claim.
- Not an average. No claim about a target MAPE, FVA score or fill rate as a verdict.
- Not that accuracy, models, data, planners or service levels are irrelevant. They are Γ and its instruments; the claim is that Γ alone does not settle the two outcomes.
- Not that zero shortage is always wrong. A safety-critical underage cost simply shifts the critical ratio; it does not abolish the comparison.
- Not that any specific model, algorithm or cost ratio is the answer. That is a `gap` at the instrument boundary, not a hidden answer.
- Not that the operations and forecasting literature independently corroborates this. Those sources share pools in places. The low-overlap sources from cognition, economics, statistics and control corroborate mechanism, not the firm-level fact.
- Not that this packet, produced with an LLM, is submittable or publishable as authored work. See the caveat in section 6 of `04_links_and_distribution.md`.

## 4. Provenance

- Question: `business.txt` line 103, section 8 Operations, supply chains, and resilience. ID BUS-0078.
- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; citations are `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`; formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Essays opened directly 2026-11-22: *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, by Isaiah N, Adventures in Machine Learning.
- World sources opened 2026-11-22, with quote and field in `10_source_ledger.csv`: Lee, Padmanabhan and Whang 1997 (MIT Sloan Management Review and Management Science), the newsvendor notes and slides, IBF's FVA glossary, Doherty's FVA critique, Rodamar on Goodhart and Campbell, Kahneman and Tversky, Makridakis et al. on M5, Wicklin on Box, and the Sterman quote reproduction.
- Public venue pages opened 2026-11-22: IIF, INFORMS, IBF glossary, SSRN. No personal emails were used.
- This packet compiled 2026-11-22. Every substantive claim is tagged `specified`.

## 5. What would settle it

A prospective, per-SKU study that measures C1 and C2 separately, records bonds as well as atoms (model arrangement and feedback structure), and reports which condition failed before the decline. Concretely:

1. **Channel test:** does the firm's reading of realized demand degrade while the market keeps paying someone? Indicators: stale percepts, dropped transients, saturated metrics, pooled readings (Fig 10 :25-26).
2. **Pressure and fidelity test:** are bracket fidelity and ground pressure both nonzero at each forecast-refit handoff? Fig 7 :37-39 says zero either stops the chain.
3. **Import test:** did any new atom enter the forecasting reach from a closure that differs before the horizon in question? If not, C2 is refuted for that case.
4. **Source-discriminating instrument:** can the study distinguish a paying habitat from a protected position from luck when all three produce the same error reading? The source essay says a reading alone *"cannot comment on the source"*.
5. **Cost test:** are overage and underage costs measured separately per SKU and compared, rather than summed into an accuracy target? Fig 12 :125 requires two readings held apart.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :27, Fig 2 :29, Fig 10 :24 and :26, Fig 6 :23 and :40, Fig 8 :32, Fig 9 :57, Fig 11 :40 and Fig 12 :112, :117, :125. Twelve short passages, about eight minutes.
2. Check C2 against what you know of your own forecasting process: is there a documented case of a perfect point forecast plus a visible supply line still producing amplified orders, or a demand discontinuity predicted from history alone? About five minutes.
3. Name one instrument that would discriminate a paying habitat from a protected position from luck using observable SKU-level data, or say why none exists. About five minutes.
4. Send the refutation. A failure is more useful than an endorsement.

**Stage 2, only after a verdict on stage 1 is recorded:** the figure text, the formula and usage rule, and the three essays. The figures, not this packet, are the authority. Later agreement about the framework is not pooled as corroboration (Fig 2 :40).

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
