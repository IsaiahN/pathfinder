# Bond, isomer and order in a supply web

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

An approved-vendor list records which suppliers exist. It does not record which sub-tier source feeds which first-tier supplier, nor that two apparently independent lines converge on one raw material. Two supply webs can have the same supplier set and different failure behaviour. The residual is: what carries the difference, and in what order must it be read?

## DOMAIN CENSUS

Atoms held: supplier nodes, parts, sites, conditions (Fig 11 :46). Bonds held: the seven, including `→` sequence (*"A then B; B needs A to have happened"*, Fig 12 :72), `⇒` production (*"A produces B; B did not exist before"*, Fig 12 :76), and `⋛` comparison (*"a threshold relation between two quantities"*, Fig 12 :87). Structure held: network, *"that entities relate, and influence travels"* (Fig 13 :24). No new primitive is available without import.

## DERIVATION

### Q1: Why a bill of materials is the flat formula

- Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
- Fig 12 :14-16: the ingredients are recorded and the arrangement is not; *"nothing downstream can tell them apart, and nothing signals that anything was lost"*.
- A vendor register is the same flat form. It can name every supplier and still cannot distinguish two topologies over the same set. The bond is charged for what it could have been (Fig 12 :99-101), so a register that records only ingredients carries zero information about propagation.

### Q2: Are two supply webs isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Supply web A: two first-tier suppliers, each with its own sub-tier source. Supply web B: the same two first-tier suppliers, both drawing on one sub-tier source. Same atoms, different bond, different failure behaviour. Under Fig 12's definition they are **isomers**, and the difference is invisible in the bill of materials.
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** A single-source sub-component at tier 3 is a functional group: its presence fixes the outcome, and the qualifier (which component) says which member.
- **Falsifier, written before the run:** if two networks with identical supplier sets and materially different dependency bonds show identical propagation under the same perturbation, the isomer claim fails and the flat-form reading stands instead.

### Q3: Catalyst, cycle and the recovery lever

- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** A logistics partner or a credit arrangement that regenerates across uses is a catalyst; one that is spent is not. Nothing in the vendor record distinguishes them.
- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** Financial ripple effects and the bullwhip are cycles; a tiered bill of materials is a chain and cannot represent them. Fig 12 :48: *"A chain is the degenerate case: one bond type, no branching. Nothing about a chain is a different kind of object."*
- World check (not a figure line): Yang, Scoglio and Gruenbacher 2021 find that surplus inventory and backup suppliers *"can enhance the system robustness, compared with the system without the recovery process"*. That is the catalyst and cycle structure being priced, not the ingredient count. Mark `specified`, unmeasured for any particular firm.

### Q4: What order is the union?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance."** The order is not "biggest supplier first" but "what consumes what".
- Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** Contact order, not spend order.
- Formula step 2: refuse before mint. A map that claims completeness at tier 1 is a term to refuse, not a gap to fill with more tier-1 rows. The refusal is a negation, not a new supplier (Formula, composition section: a refutation is a negation and is not a bond).
- Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Depth (C1) and discrimination (C2) are ordered: a depth map is needed before a shared-source claim can be tested, and a shared-source claim changes which depth matters. They are not averaged.

### Q5: The analogues the question needs

- **The habitat cascade (primary, figure-internal):** Fig 11 :52-53, DDT to eagles, biomagnification through the food chain to eggshell thinning, residual three steps out. This is the question's own analogue, not an imported one.
- **Network physics (low overlap, secondary):** Yang et al. 2021, cascading failures in supply networks, a discontinuous phase transition under underload without recovery. Corroborates the bond and recovery readings.
- **Operations (same broad field, secondary):** the bullwhip effect, where a small point-of-sale change becomes a large upstream swing. Corroborates that order and feedback, not node count, decide propagation.
- **Rejected analogue:** a "supply chain as a single organism" framing. Fig 4 :20 requires the anchor to be re-named at a new scale, and no anchor exists for a firm-as-organism claim here. Recorded as a strain sent to the log rather than used.

## CONCLUSION

The difference between two supply webs with the same supplier set is carried by the **bond**, not the ingredient. Under Fig 12's definition such webs are isomers, and a single-source sub-tier node is a functional group that fixes the outcome. The order of reading is dependency and contact, outward from the failed node, with refusal of the "tier 1 is complete" claim before any new mapping term is admitted. Depth and source discrimination form a union and are ordered, not averaged. A catalyst or cycle can survive a perturbation in a way a flat chain cannot represent. None of this names which node is critical; that remains a gap until an instrument discriminates sources.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the field sources listed in `10_source_ledger.csv` were fetched 2026-11-22. No supply event was measured.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (cross-scale anchor), Fig 9 (union unbundling), Fig 11 (contact cascade, enumerate never compose), Fig 12 (flat formula, isomer, functional group, catalyst, cycle, chain), Fig 13 (network structure), Operators (`→`, `⇒`, `⋛`), Formula (refuse before mint). Strained after re-census: none; the rejected organism analogue was withdrawn before use.
