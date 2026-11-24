# Expert verification packet: the Tether on fixed versus changing topology

**What this is:** a claim in a form a network scientist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified`, not `grounded`.** No network was measured in this derivation. This is a decision shape and a route, not a result.

## 1. The claim, in one paragraph

Index the prediction error of a network model per node trajectory and per candidate link, not as one global fit. Treat "adjacency is constant over the window" as a held term. When the link-slot residual persists and does not trend down while the node residual is already small, the owed term is a refusal of that held assumption, not another process parameter on the same graph. Unbundle this case from the case where only the process was mis-specified, because more process detail clears one region of a union and leaves the intersection standing. Then run the round trip: predict with a fixed graph and with edge dynamics against the same held-out observations and report the gap. A time-resolved edge observation settles the choice. With timescale separation the fast process acts as a catalyst for slow rewiring; with comparable timescales the coupling is a cycle. The framework returns this shape, not a universal switching threshold, and stops at the instrument limit with the lineage recorded.

## 2. Three checkable sub-claims

### C1 — framework-internal; checkable by reading Figures 1, 5 and 6
- **Statement:** the decision variable is a per-slot residual, and a persistent non-trending link residual points a refusal at constant adjacency rather than a new process parameter.
- **Source, verbatim:**
  - Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
  - Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*
  - Fig 5 :59 *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"*
  - Fig 6 :21 *"MINT composes inside the closure and can never add an atom."*
- **Refuter:** a fixed-adjacency model drives the per-link residual to held while the node residual persists, and no edge observation changes that; or a process-only term drives the persistent link residual to held without changing any edge. Either breaks the refusal rule.

### C2 — framework-internal derivation with a world-facing check; checkable by reading Figures 4, 9 and 12
- **Statement:** the residual is a union compound needing unbundling; the fixed and dynamic descriptions sit at two scales separated by a lossy membrane; the gap R_T is the measurement, and the two regimes are catalyst versus cycle rather than one a refinement of the other.
- **Source, verbatim:**
  - Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."*
  - Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
  - Fig 12 :119 *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."*
  - Fig 12 :121 *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
  - Fig 13 :36 *"adjacency is not duration, an ordering is not a pathway, a pathway is not a direction."*
- **What to check against your own field:** Gross and Blasius (2008) and Holme (2015) state the timescale criterion in the network-science vocabulary; de Meijere et al. (2026) find the relevant scale is endogenous and system-specific. Are those faithful readings? Does any of them supply a universal threshold (the claim says none does)?
- **Refuter:** one intervention reduces both the node residual and the link residual to held with no categorically different residue; or a measured round-trip gap near zero across a window with demonstrable link turnover that changes the outcome; or a comparable-timescale system fully decomposed into one-way catalyst steps. Any of these dissolves the union or the order claim.

### C3 — framework-internal limit; checkable by reading Figures 2, 9 and 13
- **Statement:** the anchor is a time-resolved edge observation; agreement from a shared time series is not corroboration; the universal threshold is a `gap`, not a hidden figure line.
- **Source, verbatim:**
  - Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
  - Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"*
  - Fig 9 :32 *"you get a kind of thing, never the answer itself"*
  - Fig 13 :134 *"Unreachable is a verdict here, not a silence,"*
- **Refuter:** a figure line giving a universal fixed/dynamic threshold after a genuine re-census; or two reconstructions from demonstrably independent instruments whose convergence is then confirmed by the edge anchor (that would be genuine corroboration and would change the weight we give the world sources, though not the figure verdict).

## 3. What is explicitly not claimed

- Not a claim that any particular network has been measured. Nothing here is `grounded`.
- Not a universal timescale ratio, window length, or link count. The framework returns a shape, not a number.
- Not that topology is metaphysically "real" or "emergent." The out-of-observation candidate has no nameable anchor and is not a domain.
- Not that link prediction accuracy or a better static fit settles the choice. A projection that cannot distinguish sources demonstrates its own inadequacy.
- Not that agreement among readers or among reconstructions sharing data is evidence. Fig 2 :40 and Fig 7 :35.
- Not a derivation from network science. The world sources are secondary and are recorded with provenance and overlap in `10_source_ledger.csv`.

## 4. Provenance

- Question: `complexity science.txt` line 32, section "3. Network structure and dynamics", ID CMP-0025.
- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked this session; citations are `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` (local copy), read this session.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, read this session.
- Seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, read this session (lines 171 and 287).
- Essays opened this session: *The Library of Babel*, *The Hard Problem is About Source*, *The Recursive Self-Improvement Trap* (adventuresinml Substack, 2026). The other five essays in the set were not opened and are not cited.
- World sources opened this session: Gross and Blasius 2008, Holme 2015, de Meijere et al. 2026, Ma et al. 2023, Li et al. 2022, Nadini et al. 2020, all in `10_source_ledger.csv` with URLs, accessed date 2026-11-22, and verbatim quotes.
- This packet compiled 2026-11-22.

## 5. What would settle it

A source-discriminating observation, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here:

1. **Edge observation:** a time-resolved edge record at a resolution where the node residual is already small. If none exists at any resolution, the verdict for that system is `unreachable`, not "dynamic topology required."
2. **Round-trip test:** does admitting formation and removal close the gap on held-out observations?
3. **Slotted refusal:** is the link residual positive and flat on specific pairs while the node residual is small?
4. **Standing falsifiers:** the four in `01_figure_grounded_audit.md` section 4, written before this packet was compiled.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :28, Fig 5 :59, Fig 6 :21, Fig 4 :30, Fig 9 :54, Fig 13 :36 and :134, and Fig 2 :29 and :40. Ten short passages.
2. Check C2 against your own knowledge of temporal or adaptive networks: is the catalyst/cycle distinction faithful, and does any source you know give a universal threshold?
3. Name one instrument that would return edge identity through time at the resolution where your process residual is already small, or say why none is available.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
