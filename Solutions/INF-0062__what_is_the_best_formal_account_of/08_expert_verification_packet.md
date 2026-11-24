# Expert verification packet: the Tether on learning under sparse, noisy, uneven data

**What this is:** a claim in a form a learning-theory researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the shape, `general` on the structural constraints. Not `grounded`.** No experiment was run in this session. This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

## 1. The claim in one paragraph

An adequate formal account of learning when data are sparse, noisy and unevenly informative must keep the residual indexed by slot and never aggregate it into one pooled loss; admit a term only when its statement cost plus what remains unexplained costs less than the original confusion, with support, reachability and novelty as a product rather than a checklist; keep the price in bits separate from the price in actions; and report data-poor slots as unreached at this budget rather than as absent. The ground, not agreement among frames on one evidence pool, settles which account is best. The framework names minimum description length as its admission test but does not rank the named candidates, so the answer is a shape plus refuters, not a winner.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figure 1

- **Statement:** residuals are per slot; a global number near zero with one live slot is a legal state; averaging destroys the signal.
- **Source, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :20 (prefix) *"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state"*
- **Refuter:** exhibit an account that minimizes one pooled loss and still identifies which slot is live when that slot's contribution is below the noise in the others. If it works, this sub-claim is false for this question.

### C2 - learning-theory-facing; checkable against PAC, Bayesian and MDL

- **Statement:** the framework's admission rule is the description-length bargain with three guards as a product. It names MDL as that principle, gives sample complexity the budget role, gives Bayesian updating the weighting role, and does not rank them. The weighting is learnable (Symbols table: *"w is learnable from the outcomes of past weightings"*), and an account that can only accumulate cannot carry a refusal.
- **Source, verbatim:** Fig 5 :42 *"The acceptance test is a bargain, not a threshold."* Fig 5 :43 *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."* Fig 5 :45 *"This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."* Fig 5 :33 *"The three guards are a product, not a checklist."*
- **What to check:** is each role assignment faithful to those theories? Sample complexity prices examples needed; PAC adds noise and computational bounds; Bayesian updating uses prior and likelihood; MDL codes model plus data. Does any of them give a ground settlement of "best," or only a budget, a mechanism or an admission price?
- **Refuter:** a term admitted at `cost(term) + left(R, term) >= cost(R)` with no compensating condition that still improves ground prediction; or a demonstration that one of the four accounts settles the "best" question against an anchor independent of its own evidence pool.

### C3 - framework-internal derivation; checkable by reading Figures 12, 6 and 8

- **Statement:** two currencies are held apart, and "unreached at this budget" is a verdict rather than a silence.
- **Source, verbatim:** Fig 12 :125 *"A composition costs in two currencies, and they do not add."* Fig 12 :126 *"Bits price the description. Actions price finding out whether it holds."* Fig 6 :27 *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*
- **Refuter:** a single scalar that prices description length and settling actions with no loss on either axis; or an establishment of genuine absence from inside a frame with no import available. Either breaks this sub-claim.

## 3. What is explicitly not claimed

- Not that MDL, PAC, Bayesian inference or active learning is the best account in the world.
- Not `grounded`. No measurement or comparison was run in this session.
- Not that more data always helps. Importing against a budget limit adds an atom that was not needed (Fig 6 :52).
- Not that a synthetic benchmark settles capability. *"A test harness is a substituted habitat"* (Fig 11 :70).
- Not that the three adjectives are one condition. They are a union (Fig 9 :54).
- Not that agreement among frames is corroboration when they share an evidence pool (Fig 2 :40).

## 4. Provenance

- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-23. Every `Fig N :line` citation resolves there.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, read 2026-11-23.
- Loop, guards and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, read 2026-11-23.
- Essays opened 2026-11-23: *The Library of Babel*, *The Hard Problem is About Source*, *The Recursive Self-Improvement Trap* (adventuresinml.substack.com). Five other essays named in the exemplar were not opened and are not cited.
- World sources opened 2026-11-23: Wikipedia articles on minimum description length, PAC learning, sample complexity, active learning, Bayesian inference and value of information. Full author, venue, year, quote and overlap in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating comparison with an anchor that does not move when the compared frames push on it. The six refuters are listed in `01_figure_grounded_audit.md` section 4 and `07_the_tether_answer.md` section 4. A leaderboard alone does not qualify unless its ground is independent of the evidence pool used to build the compared accounts.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :20, :22 (three short lines). Try the C1 refuter against a pooled-loss account you know.
2. Read Fig 5 :42-45 and :33. Decide whether the description-length bargain plus the product of guards is a fair statement of the framework's admission rule.
3. Read Fig 12 :125-126 and Fig 8 :39. Name one case where a bit price and an action price have been correctly summed into one scalar, or say why none is possible.
4. Check one role assignment in C2 against your own field: does sample complexity settle "best," or only bound how many examples are needed?
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation, internal consistency only. It cannot settle the claim it reports on.
