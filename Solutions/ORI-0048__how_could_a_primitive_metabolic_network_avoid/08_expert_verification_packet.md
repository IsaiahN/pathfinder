# Expert verification packet: the Tether on primitive metabolic robustness

**What this is:** a claim in a form a researcher in metabolic robustness, origins of life, or systems chemistry can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the structural claims, `general` on the shape, not `grounded`.** No measurement of a prebiotic network is asserted. This is a shape and a route, not a result.

**Status:** simulated derivation checked for internal consistency against the figures, not a ground reading (see `05_what_shape_means.md` section 7). It cannot settle the question it reports on.

## 1. The claim, in one paragraph

A primitive metabolic network does not keep its function by holding a fixed reaction list. The function is a closing arrangement: essential steps sit in cycles that regenerate their catalysts, redundancy is different arrangements over the same molecular inventory, and an atom that is genuinely absent from the network's closure and food set can only be restored by import from outside. Robustness is a property of network plus habitat, not of the network alone, so a change in conditions is a substitution of habitat and a laboratory demonstration under one fixed condition set proves wiring, not capability. Variation among network variants plus selection between them against the changed ground is sufficient; no foresight is claimed. The framework names no molecule, pathway or setting, and offers instead the shape, written refuters, and the instruments that would close it.

## 2. Three checkable sub-claims

### C1: framework-internal; checkable by reading Figure 12

- **Statement:** the unit that persists is the functional arrangement, not the reaction. Essential reactions sit in closing cycles whose catalysts are regenerated, and redundancy is isomeric overlap over shared atoms.
- **Source, verbatim:**
  - Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
  - Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
  - Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
  - Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- **What to check:** are these four figure quantities being applied to distinct things (function, topology, catalyst persistence, rearrangement), or is one being stretched to cover the others? Check the verbatim text, not a summary.
- **Refuter:** a primitive network that keeps self-maintenance across a change while its essential reactions form only open chains whose catalysts are externally replenished, with no output re-entering as input. If that holds, C1 fails.

### C2: chemistry-facing; checkable against models and data

- **Statement:** catalyst loss is recoverable through closure, independent fluxes are the world analogue of isomeric overlap, and a closed system cannot create an absent atom.
- **Source for the barrier, verbatim:** Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 8 :32 "no search, however long, adds an atom." Fig 6 :14 "the only operator that moves the wall".
- **World checks:** Piedrafita et al. 2010, PLOS Computational Biology, report a three-cycle (M,R) system that recovers from "a catastrophic disappearance of a catalyst" and note that components with the same composition have different functions by arrangement. Soyer and Pfeiffer 2010, PLOS Computational Biology, report "an increased number of independent fluxes and multifunctional enzymes" in networks evolved under fluctuating media, and predict "robustness should decrease upon switching to more stable environments."
- **Refuter:** a closed reaction system that regenerates a catalyst absent from its initial closure and food set with no external supply. That would falsify the barrier for this domain.

### C3: habitat-facing; checkable against geochemical and experimental practice

- **Statement:** robustness belongs to network plus habitat. Changing conditions is a substituted habitat; introduction is available and exclusion is not; a synthetic solve proves wiring and never capability.
- **Source, verbatim:**
  - Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone"
  - Fig 11 :61 "Introduction is available; exclusion is not."
  - Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another."
  - Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
- **What to check:** does the network being modelled have a specified food set, external catalysts and retention conditions, or are those being treated as properties of the network alone? If the latter, C3 says the claim is not yet assessable.
- **Refuter:** a demonstrated network that retains the same robustness after an arbitrary habitat substitution with no import route and no functional overlap, sustained purely by its internal reaction list. If that holds, C3 fails.

## 3. What is explicitly not claimed

- Not a first pathway, not rTCA, not a named mineral, cofactor or early-Earth setting. Those are bindings requiring a ground and provenance.
- Not that autocatalytic or RAF sets have been demonstrated in a prebiotic setting.
- Not that a laboratory network is robust under real change. Fig 11 :70.
- Not that a network anticipates change. Fig 11 :36 "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."
- Not that the bit-price of an arrangement is the same as its free-energy cost. Fig 12 :125-126 "A composition costs in two currencies, and they do not add." This is a named strain, not an identification.
- Not `grounded`. Nothing here is asserted as settled by experiment.

## 4. Provenance

- Question: ORI-0048, `Questions/origins of life.txt` line 66, section 5 Metabolism-first and chemical networks.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read and checked verbatim this session (2026-11-23).
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- World sources actually opened: Piedrafita et al. 2010 (PLOS Comput Biol, DOI 10.1371/journal.pcbi.1000872); Soyer and Pfeiffer 2010 (PLOS Comput Biol, DOI 10.1371/journal.pcbi.1000907); Braakman and Smith 2013 (Physical Biology 10 011001); Ansari 2026 (Discover Life 56, article 35). Full details and quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not further agreement:

1. **Regeneration test:** after catastrophic catalyst loss in a steady-state network, does the same state return without external replenishment? Discriminates cycle-regeneration from external supply.
2. **Boundary test:** does the same arrangement re-assemble after a full habitat substitution and boundary drop, with no carried template? Fig 12 :107-110 predicts the cost is paid again.
3. **Overlap test:** under two food sets, do two distinct arrangements over the same molecular inventory close the function? Fig 12 :117 predicts yes.

## 6. What an expert can check in twenty minutes

1. Read Fig 12 :117, :119, :121, :124 and Fig 6 :14, :21, Fig 8 :32, Fig 11 :39, :61, :70 (ten short passages).
2. Check C1 against one network you know: are the essential steps in cycles with regenerated catalysts, or in open chains fed externally?
3. Check C2 against one published perturbation experiment: was recovery internal regeneration or external supply?
4. Check C3: was the habitat enumerated, and was the food set treated as external or as a network property?
5. Run one of the three tests above, or name one instrument that would discriminate regeneration from replenishment, or say why none is possible.
6. Send the refutation. A failure is more useful than an endorsement (Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes.").

## 7. Handling a reply

Record the reader's verdict on stage 1 before showing any framework material. If a refutation arrives, copy it into `11_audit.md` with provenance and re-evaluate it as if it came from any other source. Agreement is not pooled as corroboration (Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"). No personal emails are used and no bulk send is planned.
