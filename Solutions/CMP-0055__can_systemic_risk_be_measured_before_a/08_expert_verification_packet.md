# Expert verification packet, CMP-0055

**What this is:** a claim in a form a financial-stability researcher or complex-systems scientist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on substantive claims, `general` on structural shape, not `grounded`.** No crisis measurement is claimed. This is a shape and a route, not a number.

**Status of this packet: a simulated derivation checked for internal consistency against the figures, not a ground reading.** It cannot settle the question it reports on.

## 1. The claim, in one paragraph

Systemic risk can be characterized before a crisis, but only as a per-slot warning structure, not as a certified scalar. Because the residual is indexed by institution and exposure edge, a global score is a pooled reading that loses the signal that says where to look. Hidden common exposures are the common-cause collapse, so apparent diversification can be the shared source talking. More computation on the same reported data cannot add the missing edges, because closure is idempotent; the missing edges require an import of exposure-level data with provenance and a shadow test. The measurement stays `candidate` until the realized crisis pays for it. The question is a union of perceiving the connections and composing the cascade dynamics, and the two conditions must be unbundled before any lever is chosen. The framework returns this shape and its falsifiers, not the exact pre-crisis number.

## 2. Three checkable sub-claims

### C1 — framework-internal plus finance-facing; checkable by reading Figures 1, 2 and 10

- **Statement:** measure per slot; treat hidden common exposures as a common-cause collapse, not as independence.
- **Source, verbatim:** Fig 1 :19, *"The residual is indexed by object slot, not aggregated."* Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average."* Fig 10 :26, *"saturated metrics, pooled readings"*. Fig 2 :7, *"(hidden shared source)"*, with Fig 2 :20, *"so the agreement is the pool talking,"* and Fig 2 :21, *"not two frames confirming each other"*.
- **What to check:** does a single aggregate score, in the reviewer's own domain, discard the per-institution signal? Are the comovements they have observed traceable to shared exposures rather than independent shocks?
- **Refuter:** a scalar index that prospectively and per slot names which institution or edge fails first in a held-out crisis, verified at the ground; or documented independence of correlated losses with no shared hidden exposure.

### C2 — framework-internal; checkable by reading Figures 6, 8 and 13

- **Statement:** hidden edges cannot be composed from held data; only an import from a differing closure moves the wall. They are unreachable at this budget, not underivable in principle.
- **Source, verbatim:** Fig 8 :32, *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."* Fig 6 :21, *"MINT composes inside the closure and can never add an atom."* Fig 6 :23, *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 13 :115, *"The set is closed. The arrangements are not. That gap is why import exists."*
- **What to check:** is the hidden exposure an atom absent from the model's primitives, or merely an arrangement of primitives already held? If the latter, idempotence does not apply and this sub-claim narrows.
- **Refuter:** a missing exposure derived purely from reported data and verified at the ground with no new data source and no provenance-bearing import.

### C3 — framework-internal plus cross-field; checkable by reading Figures 11 and 12

- **Statement:** the habitat must be enumerated outward past direct counterparties; two networks with the same ingredients but different bonds are different risk substances, and a chain cannot close a feedback loop.
- **Source, verbatim:** Fig 11 :44, *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 12 :117, *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :121, *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
- **What to check:** in the reviewer's own case, did the residual that mattered sit more than one step out? Did the cascade require feedback that a linear exposure chain could not express?
- **Refuter:** a documented crisis confined to first-order direct contacts, or two same-balance-sheet networks with indistinguishable cascade behaviour at the ground.

## 3. What is explicitly not claimed

- Not that systemic risk is unknowable. Hidden exposures are unreachable at this budget, which issues the instruction "get the data", not a verdict of impossibility.
- Not that a scalar index is worthless. It is a budget filter, disqualified as a verdict (Fig 9 :60).
- Not a forecast, not a named crisis, not a certified pre-crisis number.
- Not that models which agree must be wrong. Their agreement carries no verdict weight when they share an evidence pool; it remains useful for setting checking budget (Fig 7 :13, Fig 9 :60).
- Not a derivation of any world source from the figures, and no new primitive is minted.
- Not `grounded`. Nothing here is asserted as settled by experiment or by a realized crisis.

## 4. Provenance

- Question: `Questions/complexity science.txt` line 68, CMP-0055, section 6 (Cascades, contagion, and systemic risk).
- Figure text extracted verbatim from the canonical SVGs: local `FRAMEWORK/reference/03-FIGURES_TEXT.md`, line citations `Fig N :line`.
- Canonical usage rule: local `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Formula: local `FRAMEWORK/figures/THE_FORMULA.md`.
- World sources actually opened 2026-11-22: Scheffer et al. 2009 (Nature), Buldyrev et al. 2010 (Nature), May, Levin and Sugihara 2008 (Nature), Ramadiah et al. 2018 (arXiv), Sergueiva 2013 (arXiv), Pichler, Poledna and Thurner 2018 (arXiv), Biswas and Chakrabarti 2024 (arXiv), Fischer 2013 (arXiv). Each is recorded with a quote in `10_source_ledger.csv`.
- Full ledger of every source read: `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*, fetched 2026-11-22: an instrument that reads green *"cannot comment on the source"*, and *"The answer is unreached until a better instrument exists."* Here:

1. **Disclosure test:** does new exposure-level data move the measured risk in a direction the held-data model did not predict?
2. **Independence test:** are the correlated losses traceable at the ground to a shared hidden exposure or to independent shocks?
3. **Cascade-reach test:** how many steps out did the residual actually matter? First-order-only cascades weaken C3.
4. **Threshold test:** does the warning hold at the predicted slot in a held-out crisis, or demonstrably not?

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22; Fig 2 :7, :20, :21; Fig 8 :32; Fig 11 :44; Fig 12 :117, :121. Eight short passages.
2. Check C1 against one case you know: did a pooled score hide the failing slot, and was a shared exposure mistaken for diversification?
3. Check C2: was the missing information an absent atom (new data needed) or a rearrangement of data already held? If the latter, say so; that narrows the claim.
4. Name one instrument that would discriminate among the hidden sources here, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Please record your verdict before reading the framework.** Stage 2 is opt-in; the figures, not our summary, are the authority.
