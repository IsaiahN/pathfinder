# Expert verification packet: the Tether on belief change

**What this is:** a decision rule in a form a belief-updating researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified`, not `grounded`.** No experiment or dataset is claimed to settle this rule. It is a shape and a route.

## 1. The claim, in one paragraph

A system should change a learned belief only when a per-slot residual is routed to the fifth bin, REFUTED, meaning a held term is wrong rather than a gap merely unfilled. The target is the bound, predicting term whose residual persists and does not trend down while others improve. The change is made by adding a refusal, not by deleting the term, so the reach falls as a derived consequence and never-held stays distinct from held-and-withdrawn. The refusal must pay a description-length bargain, the anchor must remain fixed while frames update, and the sought-for answer shape must be written down before the run so it can be refused too. The framework leaves open the case where a term and its refusal are both settled. It returns a decision structure, not a numeric threshold.

## 2. Three checkable sub-claims

### C1. Framework-internal; checkable by reading Figures 1, 5 and 3

- **Statement:** belief change is a fifth route, not a fourth; it is triggered by per-slot positive mass and targeted by the persistent-and-flat residual.
- **Source, verbatim:** Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so". Fig 5 :58-60 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign." Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
- **What to check:** do the fifth bin and the ranking follow from what the pipeline already records, or is a new preference smuggled in? Is per-slot indexing compatible with the system's own error signal?
- **Refuter:** a belief change correctly described as a plain mint (fourth bin); or a system that changes a belief whose residual is trending down while another bound term persists flat under the same ground; or a change driven by aggregate error with all per-slot residuals zero.

### C2. Mechanism; checkable by reading Figures 6 and 12 and the Operators table

- **Statement:** the update adds a refusal and never deletes; the operator is negation, unary, not a bond and not subtraction.
- **Source, verbatim:** Fig 6 :43 "A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted." Fig 12 :140 "A vocabulary that cannot refuse can only accumulate." Operators table :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate". Fig 6 :44 "a term is reachable if it is derivable under everything currently held, so what happens to terms built on a refuted one follows from derivation rather than being stipulated."
- **What to check:** can the proposed implementation distinguish "never held" from "held and withdrawn"? If it deletes, it cannot (Fig 6 :46). Can it say a claim is false (`¬`) rather than merely absent (`−`)?
- **Refuter:** a system that genuinely strikes a term from its record yet still distinguishes never-held from held-and-withdrawn; or a belief change expressed with subtraction alone that refuses a claim rather than omitting an operand.

### C3. Legitimacy and limit; checkable by reading Figures 2, 5 and 6

- **Statement:** the ground must not update on frames, and the direction of the question must be pre-bound as an ordinary term. The case of a settled term and a settled refusal is open.
- **Source, verbatim:** Fig 2 :33 "The anchor must not update." Fig 2 :34 "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." Fig 5 :65-66 "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." Fig 6 :47 "If a term and its refusal are both settled, the record holds a contradiction. Whether that is two scopes, an error in the ground, or a world that changed is not yet decidable here."
- **What to check:** in the system under discussion, does measurement ever change in response to the belief? Is the sought-for answer written down before the run? Is the open case reported rather than silently closed?
- **Refuter:** a correction in which the measurement was itself adjusted in response to the belief; or a frame that reliably refuses its own unbound search preference using only mechanism checks; or a framework decision in the both-settled case presented as figure-derived.

## 3. What is explicitly not claimed

- Not a numeric threshold, learning rate, p-value or confidence cutoff.
- Not a new Bayesian, AGM or continual-learning result. Those frames corroborate parts of the shape and are provenanced in `10_source_ledger.csv`.
- Not "change the belief whenever the error is large" (that is NOVEL or BROKEN, not REFUTED).
- Not "delete the false belief". Refusal adds; the record only grows.
- Not "let the data decide what counts as evidence" (that is the mutual-update collapse).
- Not `grounded`, and not a final theory of learning. Fig 7 :6: "the limit: no last room."

## 4. Provenance

- Question: `reasoning.txt` line 21, section "Learning and generalization", ID REA-0016.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`; every quote above was checked against that file on 2026-11-23.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- World sources actually read and recorded in `10_source_ledger.csv`: Hansson (SEP, belief revision), SEP (Bayesian epistemology), Boden/Berenbaum/Gross (2016), Nickerson (1998), Schultz (2016), Parisi et al. (2019), Kirkpatrick et al. (2017, partially verified via indexed full text after a 403).
- Pre-registered refuter: `01_figure_grounded_audit.md` §3, written before the conclusion.
- Packet compiled 2026-11-23.

## 5. What would settle it

A documented, checkable case, not agreement:

1. A per-slot residual trace with a flat term and improving others, followed by a correct refusal.
2. A record showing an added refusal, the old belief still present, and the reach falling by derivation.
3. A case where the measurement stayed fixed while frames changed.
4. A case where a term and its refusal are both settled and the framework must decide among two scopes, a ground error, or a changed world. This would close the figure's open item.

## 6. What an expert can check in twenty minutes

1. Read Fig 5 :50-60 and Fig 6 :42-47: five short passages.
2. Check C1 and C2 against a belief-update system you know: is the target chosen by persistent-and-flat residual, and is the change a refusal rather than a deletion?
3. Name one instrument that would show a per-slot residual staying flat while others improve, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
