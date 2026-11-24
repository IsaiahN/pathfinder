# Expert verification packet - the Tether on model priorities

**What this is:** a claim in a form an evaluator or interpretability researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No deployment measurement is claimed. This is a shape and a route, not a result. Simulated derivation checked for internal consistency against the figures; not a ground reading.

## 1. The claim, in one paragraph

When a model is deployed, four objectives can be binding at once: predictive accuracy, interpretability, mechanistic realism and usefulness for intervention. These are not a ranking. They are a union of overlapping conditions, and each is legitimate only against the anchor its own question is constitutively about. Priority is therefore per case and dependency-ordered: accuracy is the only metric for the prediction slot; interpretability is an anchor for questions about a person's ability to understand and contest a decision, and only an instrument for code correctness; mechanistic realism is a shape until a source-discriminating instrument names a generator; and usefulness for intervention belongs to model and habitat, so accuracy without changed contact does not improve it. Description cost and test cost are two currencies and do not add. What is offered is the four-row shape any acceptable answer must have, with falsifiers written in advance, not a universal winner.

## 2. Three checkable sub-claims

### C1 - Framework-internal; checkable by reading Figures 9, 1 and 12

- **Statement:** the four objectives form a union, not a ranking, and the residual is per case, never averaged.
- **Source, verbatim:** Fig 9 :55 - *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :56 - *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* Fig 12 :130 - *"Summing them into one figure is the error this names, not the fix for it."*
- **Refuter:** exhibit a single scalar model-quality objective that preserves all four per-case residuals and resolves their intersections without a second lever, or show that averaging loses no live slot in deployments tested.

### C2 - Evaluation-facing; checkable by an evaluator against the two anchors

- **Statement:** human judgment is a legitimate anchor only for questions constitutively about a person; for code correctness it is an instrument. Mechanistic claims need a discriminating instrument.
- **Source, verbatim:** Fig 2 :37 - *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."* Fig 2 :38 - *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* Fig 9 :32 - *"you get a kind of thing, never the answer itself."* Fig 6 :34-35 - *"Where nothing is, there is no edge to extend from"*
- **What to check:** in your own evaluation setting, is the demand for interpretability a demand about a person's ability to contest a decision, or a disguised demand for correctness? Is there any instrument that discriminates among the candidate generators, or is the mechanism claim a fit to a reading?
- **Refuter:** show human judgment settling code correctness without an instrument, or a metric settling contestability without a person, or name a mechanism settled by a discriminating instrument where the framework said only a shape was available (the last one refutes the gap claim successfully).

### C3 - Deployment-facing; checkable by anyone who has shipped a model

- **Statement:** usefulness for intervention is a property of model and habitat, not of the model alone.
- **Source, verbatim:** Fig 11 :39 - *"capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40 - *"An improvement that does not change contact changes nothing, however much it improves."* Fig 12 :111 - *"A vocabulary without bonds can name a state and cannot name a route to one."*
- **What to check:** take a model with strong held-out accuracy. Did its intervention capability change only when the literature or habitat changed, or did it change with accuracy alone? Does the readable account of the model contain a route (sequence, threshold, comparison), or only a list?
- **Refuter:** a model gaining intervention capability through held-out accuracy alone, with no change of contact or action set, sustained across a habitat substitution; or an interpretable model with no ordered structure guiding a novel intervention reliably against a ground.

## 3. What is explicitly not claimed

- Not a universal first objective and not a total order of the four words.
- Not a single summed model-quality score. Bits and actions are different currencies.
- Not that human judgment settles code correctness, and not that a benchmark settles contestability.
- Not that a mechanism has been identified where no source-discriminating instrument exists.
- Not that an accurate model is therefore useful for intervention.
- Not a theory of everything. The compound case where all four bind and disagree stays open with its own loop.
- Not `grounded`. Nothing here is asserted as settled by a deployment measurement.

## 4. Provenance

- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; every citation above was checked against that file.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, both local.
- The eight essays by Isaiah N, 2026, listed in `05_what_shape_means.md`; three opened and quoted this session.
- World sources read 2026-11-22: Doshi-Velez and Kim 2017 (arXiv:1702.08608), Lipton 2016 (arXiv:1606.03490), Rudin 2019 (arXiv:1811.10154 and Nature Machine Intelligence), Stanford Encyclopedia of Philosophy "Mechanisms in Science" (2015, revised 2024), plus the low-overlap sources recorded in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A ground reading for each row:

1. Held-out accuracy that stays small on new slots in the intended habitat, not just on the training distribution.
2. An application-grounded interpretability test with real people doing the real task, not a sparsity proxy.
3. A design or instrument that discriminates among candidate generators (the spectrometer analogue).
4. A deployment test that changes contact and measures the outcome, including a habitat substitution.
5. For the union claim: a single lever that clears the compound case and survives the pre-registered refuter.

## 6. What an expert can check in twenty minutes

1. Read Fig 9 :55-57 and Fig 1 :19, :22 - four short passages. Do the four objectives behave as a union in your setting?
2. Read Fig 2 :37-38. Decide whether your interpretability requirement is a person question or a code question.
3. Name one instrument or design in your field that discriminates among candidate generators, or say why none exists.
4. Recall one case where held-out accuracy and intervention usefulness diverged. Which changed, the model or the contact?
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
