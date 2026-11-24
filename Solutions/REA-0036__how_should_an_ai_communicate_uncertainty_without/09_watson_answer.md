# WATSON answer: how should an AI communicate uncertainty without making its answers unusable or misleading?

**Mode: `specified` on the substantive claims, `general` on the structural shape, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md` and `07_the_tether_answer.md`. It is checked for internal consistency against the figures. By its own rule, LLM output is a simulated answer and the testable output would need a real derivation or a ground reading, so it cannot settle the human-facing half of the question it reports on. No reader experiment was run.

## QUESTION

Decide, in effect terms, what the Tether says about an AI's uncertainty message. Option A: a bare scalar or uniform hedge, with no stated ground, scope or cost, which leads to a misleading number that grades its own frame or an unusable message that hedges everything and decides the outcome by convention. Option B: a per-slot, ground-referenced uncertainty shape that carries the measured round-trip gap, two separately priced costs, provenance for imports and an explicit gap where nothing closes R. The question is a union of two conditions, contact with the ground and usability for a person, not one hard problem. The two anchors must be kept separate: outcomes settle truth, human judgment settles usability.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. A domain needs a nameable anchor; otherwise it is not a domain yet.

- **R (the residual).** Three-place at least: model state, message, reader decision, indexed per claim slot. Symmetry: the model-to-reader crossing is ordered, and adding a hedge is not interchangeable with adding evidence. Scale: one answer loop per slot, the seam between model and message, and the population of readers over time. Symbols table :43-44 states that R is measured per slot, never as one global number.
- **D1 Model-ground contact.** Actors: model Γ, belief b, weighting w, held-out outcomes. Currency: per-slot residual reduction. Anchor: observed correctness, a counter that does not update on the model's opinion. Admitted.
- **D2 Message seam.** Actors: the compressed message and the reader. Currency: bits to describe, actions to check. Anchor: outcomes for truth and human judgment for usability. Admitted.
- **D3 Reader decision habitat.** Actors: reader, task, tools, time, other sources. Currency: reliance and decision accuracy. Anchor: the task outcome. Admitted.
- **D4 Channel maintenance.** Actors: instruments, metrics, percepts, pooled readings. Currency: contact. Anchor: the ground, which does not decay while the channel does. Admitted.
- **X1 Confidence as a self-certifying model property.** Actors: the model's self-report. Currency: fluency. Anchor: none nameable, because a frame cannot score itself with a quantity it also produces. Not a domain yet, demoted to an instrument for another question.
- **X2 One universal score trading usability against accuracy.** Already inside D2 as a compound of two currencies. Absorbed, not admitted as a third domain.
- **Partition or union.** Union, not partition. The figures require unbundling before searching again when the split is a union rather than a partition. A single lever such as add more hedging clears the region where only one condition holds and leaves the intersection standing.
- **Order by dependency.** Perceive what failed to resolve per slot, then find terms for the uncertainty, then say what counts as progress, then plan the message, then record provenance so the route is checkable. Effort above a broken middle link cannot rescue it.

Strain test applied: the anchor rule for a question about people and the verifier non-access rule govern different objects, a message about a person and a claim about the world, so no strain after re-census. The one declared analogue is minimum description length applied to empty hedging; it corroborates but does not govern the communication seam.

## TETHER (primary, verbatim)

Cited against the local verbatim extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are exact substrings of that file. Verdicts are kept per domain and never averaged.

### D1 Model-ground contact (triangulated)

- Fig 2 :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor." Ground contact requires an anchor that cannot be moved by the model's opinion.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." One scalar over a multi-claim answer averages away the live slot.
- Fig 2 :33 "The anchor must not update." A confidence that rises because the answer got longer is a drifting anchor.

Status: `triangulated`, low overlap between the anchor definition in Fig 2 and the per-slot rule in Fig 1.

### D2 Message seam (triangulated)

- Fig 2 :37-38 "Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." The model's own score cannot certify usability.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The uncertainty text reports what the lossy compression dropped, measured rather than assumed zero.
- Fig 4 :31-32 "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up." The gap is the content of the message.
- Fig 9 :30-31 "your words are borrowed too, so describe the effect rather than the cause" State what would be seen if the claim were wrong, not a story about internals.
- Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." Description cost and checking cost are different currencies.
- Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it." A single trust score is the named error.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." Self-reported confidence is disqualified as an anchor.

Status: `triangulated`, across the round-trip rule in Fig 4, the two-currency rule in Fig 12 and the anchor rule in Fig 2. The verbal form itself is `gap`, since no figure line selects words, numbers or intervals.

### D3 Reader decision habitat (triangulated with one world measurement at a different evidence pool)

- Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." A message-only rewrite changes the message, not the capability.
- Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." The intervention must change the reader's contact.

Status: `triangulated` for the structure, with the world measurement by HEAR recorded below as low-overlap corroboration.

### D4 Channel maintenance (triangulated)

- Fig 10 :24 "the ground does not decay, the channel does" Saturation and pooling are channel failures.
- Fig 10 :27-28 "the output is not a verdict, it is you have lost touch" The check reports lost contact, not a new score.
- Fig 7 :13 "agreement compounds, evidence does not" A room of agreeing readers is a mirror chain.

Status: `triangulated`, distinct mechanisms in Fig 10 and Fig 7.

### Compound, import and honest stop (triangulated)

- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Contact and usability need separate loops.
- Fig 9 :57-58 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." A case in two conditions is not a harder case of one.
- Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." A conformal guarantee is an import with a source gate and a shadow test.
- Fig 8 :50-52 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ." Provenance is the whole difference.
- Fig 13 :134 "Unreachable is a verdict here, not a silence," An honest gap is an output.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." A reported gap is not a claim of impossibility.

Status: `triangulated`, low overlap between the union rule, the import rule and the reachability rule.

### Rejected candidates and gaps

- X1 confidence as self certifying: refused. Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." Status: `triangulated` refusal.
- X2 a universal scalar trading usability against accuracy: refused by Fig 12 :130 above. Status: `single-source` for the figure pricing rule, corroborated by the world two-currency result below.
- Verbal form that maximizes decision quality: `gap`. No figure line governs it; it needs a reader study with a decision-accuracy ground.

## WORLD (secondary, corroboration only)

Figures decide. World sources are read for corroboration and never overrule a figure. Each source was opened and is recorded with author, venue, year, accessed date and quote in `10_source_ledger.csv`. No double-quoted phrase below is attributed to a figure.

- **Calibration / machine learning.** Guo, Pleiss, Sun and Weinberger, ICML 2017. Quote: "modern neural networks, unlike those from a decade ago, are poorly calibrated." Prediction: calibration is a real D1 problem, so a number needs a ground; it does not show that a message carrying the number is usable. Corroborates D1 boundary.
- **Statistics / conformal prediction.** Angelopoulos and Bates, arXiv 2021, revised 2022. Quote: "guaranteed to contain the ground truth with a user-specified probability, such as 90%". Prediction: a coverage guarantee is a legitimate import with a source, a shadow test and an outcome ground, so it supports the import rule. Corroborates the provenance line.
- **Human-computer interaction / uncertainty quantification.** Devic, Srinivasan, Thomason, Neiswanger and Sharan, arXiv 2025. Quote: "optimizing metrics that are not necessarily indicative of downstream utility". Prediction: current metrics optimize the instrument, not the reader, so D2 and D3 are under-measured. Corroborates.
- **Human-computer interaction / navigation.** Zhao, Nguyen and Daumé, EMNLP 2024, HEAR. Quote: "warns users of potential errors in its instructions and suggests corrections". Prediction: an intervention that changes the reader's habitat can move decision accuracy, with a reported 13 percent success gain and 29 percent lower error distance over 80 users. Corroborates D3 at a different evidence pool.
- **Human cognition / explanations.** Steyvers et al., Nature Machine Intelligence 2025. Quote: "longer explanations increased user confidence, even when the extra length did not improve answer accuracy." Prediction: spending description bits without spending checking actions can increase the misleading failure, which is the direct negative witness for the two-currency claim. Corroborates.
- **Tool-using agents / predictive uncertainty.** AlRabah, Yang, Hakkani-Tür and Alawini, arXiv 2026, PredActBench. Quote: "when tools are noisy, SOTA models rarely make predictor uncertainty visible to users". Prediction: under noise the channel fails and users over-rely on incorrect predictions, so D4 is live. Corroborates.
- **Canonical usage / metatheory.** Isaiah N, figures README, branch general-agent, GitHub 2026. Quote: "what a missing thing would have to look like (a shape, not a name)". Prediction: the framework returns a shape, not a UI binding, so the verbal form stays a declared gap. Corroborates, with high author overlap.
- **Source discrimination / perception.** Isaiah N, The Hard Problem is About Source, adventuresinml 2026. Quote: "If several paths create the same behavior, then behavior is a projection with lossy information." Prediction: one confidence reading can come from several sources, so a source-discriminating instrument is owed. Corroborates D1 and D4, with high author overlap.
- **Tacit knowledge / checkable description.** Isaiah N, Decoding Tacit Knowledge, adventuresinml 2026. Quote: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Prediction: the uncertainty text should carry a checkable effect, which is C2 of the packet. Corroborates, with high author overlap.
- **Validation / self-validation.** Isaiah N, The Recursive Self-Improvement Trap, adventuresinml 2026. Quote: "the truly testable output would need to be derived from the real architecture or working the formula yourself." Prediction: this WATSON run is a simulation and cannot settle its own claim. Corroborates the declared status.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. Overlap note: the four essays and the canonical README share an author and an evidence pool with the figures, so their agreement is expected and carries little independent weight. The arXiv papers and the Nature Machine Intelligence paper come from different author groups and venues; PredActBench, Devic et al. and Steyvers et al. are the lowest-overlap witnesses for the human-facing half. Agreement from a shared pool is one witness, not two.

## VERDICT (from the figures)

The shape survives; the bindings do not. Report uncertainty per claim slot, range each slot against the right anchor, make the measured round-trip gap the content of the message in effect terms, keep bits and actions in two ledgers, carry provenance for any imported number, fix the channel when contact is lost, and output `gap` or `unreachable` where nothing closes R. Refuse a single self-certifying confidence, refuse a universal score that trades usability against accuracy, and refuse to treat reader agreement as calibration evidence. Which verbal form works best is a declared `gap`, not a figure result. This verdict is `specified` and ungrounded: a source-discriminating instrument, here a reader study with a decision-accuracy ground, is required to move it to `grounded`.

- **cost if wrong:** bounded but real. The packet states its mode, refuters and provenance before the claim, so an error is locatable rather than invisible. The larger cost is spending the independence of outside readers by sending a recording instead of a generator. Fig 2 :42 "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its five falsifiers and offering links only after a verdict is recorded.
- **undoable:** yes. No primitive is withdrawn and no architecture is committed. The per-slot shape, the two ledgers, the provenance rule and the honest stop can be amended or withdrawn independently if a refuter fires. A sent claim can be superseded by a corrected packet with the revision visible.
- **reversed by:** a ground reading, not agreement. A reader study showing that a self-report with no outcome or reader measurement settles usability would break the anchor rule; a controlled case where one scalar preserves both failure modes would break the two-currency rule; a message invariant under forced information loss, or one that lets the reader reconstruct the interior, would break the gap rule; a derivation of an optimal verbal form from the figures alone, with no world import and no reader measurement, would send the verbal form gap back to census. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [figures README, canonical](https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md)
- [On Calibration of Modern Neural Networks](https://arxiv.org/abs/1706.04599)
- [A Gentle Introduction to Conformal Prediction](https://arxiv.org/abs/2107.07511)
- [From Calibration to Collaboration](https://arxiv.org/abs/2506.07461)
- [Successfully Guiding Humans with Imperfect Instructions (HEAR)](https://arxiv.org/abs/2402.16973)
- [What Large Language Models Know and What People Think They Know](https://arxiv.org/abs/2401.13835)
- [PredActBench](https://arxiv.org/abs/2608.02372)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge: Why Context](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Library of Babel: Locating the Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`.
