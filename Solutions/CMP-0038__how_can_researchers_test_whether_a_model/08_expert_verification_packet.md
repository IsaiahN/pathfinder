# Expert verification packet: testing generalization rather than historical fit

**What this is:** a claim in a form a validation researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` on the falsifiable predictions, not `grounded`.** No model was deployed and no measurement was taken. This is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on.

## 1. The claim, in one paragraph

Generalization is a property of a model and its habitat, not of the model alone. A valid test therefore ranges the model against an anchor it cannot update, in conditions that draw on a different evidence pool from the training data, and reports the residual per condition rather than as an average. The measured quantity is the round-trip gap between fitting and deployment. A fit score is produced by the frame being scored and cannot witness transport; a same-distribution holdout substitutes the training habitat and proves wiring rather than capability. Passing a finite suite leaves the model a candidate, not a validated generalizer.

## 2. Three checkable sub-claims

### C1. Fit is not transport evidence `[general]`
- **Statement:** a quantity the model produces on its training pool cannot settle a transport claim. A term that explains one occasion perfectly fails the bargain.
- **Source, verbatim:** Fig 1 :27, "A frame cannot score itself with a quantity it also produces." Fig 1 :23, "The ground enters as the only metric." Fig 5 :44, "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."
- **Refuter:** exhibit a model-produced score that settles a transport question with no range against an independent observation. Breaks Fig 1 :23.

### C2. Conditions must be low-overlap and sealed `[general]`, with a `specified` prediction
- **Statement:** the test conditions must be fixed before model selection and must not draw on the training evidence pool; a random split of one dataset carries one pool under two names. Prediction: such a split will systematically understate deployment error relative to genuinely new conditions.
- **Source, verbatim:** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30 "If it moves when you push on it, it is not an anchor." Fig 2 :40, "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 8 :48-49, "Two frames that overlap almost completely are one frame wearing two names."
- **What to check:** for a given validation protocol, list the evidence sources behind the training set and the holdout. If they are the same pool, the agreement is the pool talking, whatever the score.
- **Refuter:** show that same-pool train and test samples carry as much information about deployment behaviour as samples from closures that differ. Breaks Fig 2 :31 and Fig 8 :48-49.

### C3. Transport error is a measured round-trip gap, reported per condition `[general]`
- **Statement:** fitting is abstraction and deployment is concretisation; the residual observed after the return is R_T, and it must be published per condition with the worst case, not as a mean.
- **Source, verbatim:** Fig 4 :30, "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 4 :31, "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold". Fig 1 :22, "Aggregating across slots is how a live signal disappears into an average."
- **Refuter:** show that the abstraction-to-deployment transform is lossless (sets R_T to zero), or that averaging preserves every live per-condition failure. Breaks Fig 4 :31 or Fig 1 :22. Note the declared strain: "conditions" is a level crossing from Fig 1's "object slot", stated in `01` §7 rather than hidden.

### Supporting check, not counted as a fourth witness
Fig 11 :70, "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." This is the structural basis for preferring external validation over an i.i.d. holdout. It shares an evidence pool with C2, so it is not counted as independent corroboration.

## 3. What is explicitly not claimed

- Not that any named model generalizes. No model was tested.
- Not that cross-validation is invalid as a fit check. It is not a transport witness.
- Not that a passed suite proves absence of failure. Fig 8 :39: "So a search that finds nothing is never a proof of absence."
- Not a unified validation scalar. Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
- Not a derivation of a benchmark or a dataset. Such a name is a binding from the validation frame and is provenanced as such.
- Not `grounded`. Nothing here was settled by an observation.
- **Stake declared:** the author of this package benefits if the shape survives. By Fig 10 :59, "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." The stake is stated so it can be modelled rather than left unnamed.

## 4. Provenance

- Question: `Questions/complexity science.txt` line 47, section 4.
- Primary text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, extracted from Isaiah N's SVGs; every `Fig N :line` above was checked against it this session.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Essays opened 2026-11-22: Library of Babel; Hard Problem is About Source; Decoding Tacit Knowledge; Recursive Self-Improvement Trap.
- Independent world sources opened 2026-11-22: Arjovsky et al. 2019/2020; D'Amour et al. 2020; Koh et al. 2020/2021; Geirhos et al. 2020; Collins et al. 2015. Full details in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A ground reading: a sealed, low-overlap condition observed after the model is frozen, with the per-condition residual published. Concretely:

1. Does a model selected on a single historical pool show a larger gap on a new site, a later period, or an intervened-on environment than on a same-pool holdout? That measures R_T.
2. Does the per-condition vector contain a live failure that the mean hides? That tests Fig 1 :22.
3. Does retuning on the test conditions change the verdict? If yes, the anchor updated and the test is invalid under Fig 2 :30.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :27, Fig 2 :29-30, Fig 2 :40, Fig 4 :30, Fig 1 :22, Fig 11 :70. Six short passages.
2. Name one validation protocol you know and list the evidence pool behind its training set and its holdout. Are they one pool?
3. Name one instrument that would discriminate a genuine transport failure from a same-pool artefact in your domain, or say why none exists.
4. Try to fire one of the three refuters. A failure is more useful than an endorsement.
5. Send the refutation. Record the verdict before opening any framework material.

**Status:** simulated derivation, internally consistent with the figures, not a ground reading. It cannot settle the claim it reports on.
