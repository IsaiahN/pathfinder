# Expert verification packet: the Tether on ecosystem-climate-land-use feedback models

**What this is:** a claim in a form an ecosystem or climate modeler can check. Mode, derivation and refuters are stated before the conclusion, so the reader knows what to look for and what would settle it.

**Mode: `specified` on the three sub-claims, `general` on the structural shape, not `grounded`.** No measurement of an Earth-system feedback is claimed here. This is a simulated derivation checked for internal consistency against the figures; it cannot settle the claim it reports on.

## 1. The claim, in one paragraph

"Without losing useful detail" cannot mean "without any loss." Every representation that passes from the coupled ecosystem-climate-land-use system to a coarser model is lossy. The shape any adequate model must have is: range against an observational anchor; measure the round-trip loss against the ground; keep residuals per slot rather than averaging them away; wire feedbacks as cycles with a sign rather than one-way chains; enumerate each feedback's habitat out to where the cascade stops mattering; triangulate observationally independent frames; and treat resolution and cost as filters for the budget, never as witnesses for the verdict. The framework returns this shape, not a particular model architecture.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 4 and 1

- **Statement:** cross-scale representation is lossy, so the honest report is a measured round-trip gap, and the residual must be kept per slot rather than aggregated.
- **Source, verbatim:** Fig 4 :27 "The transform between scales loses information, and that is the point." Fig 4 :31-32 "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up." Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Also Fig 13 :32 "the detail a crossing discards reappears above it as noise."
- **What to check:** are those lines present verbatim in the figure text, and do they govern a transform between scales and the indexing of a residual, as claimed?
- **Refuter:** exhibit a coupling of the three subsystems with zero round-trip gap on every decision-relevant slot against the ground, or show that aggregation preserves the decision-relevant signal as well as a per-slot reading. Then C1 fails.

### C2 - topology; checkable by an ecosystem or climate modeler against the actual feedbacks

- **Statement:** the coupled system is a cycle with a sign, not a chain; a chain cannot represent the return path. The three frames are a functional group as usually written, and a genuine isomer claim only when written over a shared atom set.
- **Source, verbatim:** Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Fig 13 :24 "that entities relate, and influence travels."
- **What to check:** is the carbon-climate return path (warming, respiration and uptake, atmospheric CO2, warming) a closed loop with a sign in your model? If you write the three subsystem models over the same state and structure atoms, do they differ only in arrangement, which would make them isomers under Fig 12's definition?
- **Refuter:** represent one of the three feedbacks faithfully as a one-way chain with no return path and no change in the decision outcome, or show that one frame requires an atom the others do not. The first kills the cycle instruction for that case; the second reduces the isomer claim to the functional-group claim.

### C3 - verification discipline; checkable by a data-assimilation or observation specialist

- **Statement:** independent observers are required because shared systematic bias is one witness; the habitat must be enumerated out to third-order contact; resolution and cost are filters, not verdicts.
- **Source, verbatim:** Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 8 :45 "Two frames together reach what neither reaches alone." Fig 11 :43-44 "The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :52-53 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- **What to check:** in a given multi-model study, do the frames draw on independent observations, or the same reanalysis and parameterizations? Is the decision-relevant residual first-order contact, or does it sit three steps out? World-facing corroboration: Cox 2019 writes "Where the models share similar systematic biases, or neglect similar processes, even statistically significant emergent relationships may mislead about the likely changes in the real system."
- **Refuter:** show that two frames sharing the same evidence give independent corroboration, or that third-order contact effects are provably irrelevant to the decision, or that a resolution budget is itself the verdict. Any one fires C3.

## 3. What is explicitly not claimed

- Not that any lossless coupled model exists, and not that maximum resolution is the answer.
- Not that a particular model, emulator, DGVM, grid spacing, or coupling scheme is derived by the framework. The models in `04_links_and_distribution.md` are instances from other closures with recorded provenance.
- Not that the framework returns a name. Fig 9 :32: "you get a kind of thing, never the answer itself."
- Not that agreement among models validates the representation. Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
- Not `grounded`. No Earth-system measurement was taken. Mode is `specified` and `general` throughout.
- Not a claim that this is a theory of everything or a final answer. There is no last room (Fig 7).

## 4. Provenance

- Figure text extracted verbatim from the 13 figures plus Operators and Symbols tables, local file `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-22. Cite as `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, local, read 2026-11-22.
- Eight-step loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, local, read 2026-11-22.
- Seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, local, read 2026-11-22.
- Three framework essays re-read this session: "The Recursive Self-Improvement Trap", "The Library of Babel", "The Hard Problem is About Source" (Isaiah N, adventuresinml, 2026), URLs and quotes in `10_source_ledger.csv`.
- World-facing instances opened this session: Womack et al. 2026 (Earth System Dynamics), Cox 2019 (Current Climate Change Reports), Williams et al. 2009 (Biogeosciences), Van Katwyk et al. 2026 (Communications Earth and Environment), Lu and Ricciuto 2019 (Geoscientific Model Development).
- This packet compiled 2026-11-22. Full derivation in `01_figure_grounded_audit.md`.

## 5. What would settle it

A ground reading, not agreement. Concretely:

1. **Round-trip measurement:** for a chosen land-use decision, coarsen the coupled model and measure R_T against decision-relevant observations. Fig 4 :30 requires measuring the gap rather than assuming it away.
2. **Slot test:** show whether the per-slot residual carries a signal the global average destroys for that decision.
3. **Cycle intervention:** perturb one subsystem and observe whether the return path closes with the predicted sign.
4. **Independence audit:** check whether the observing frames share a reanalysis or a systematic bias; if so, they are one witness (Cox 2019).

## 6. What an expert can check in twenty minutes

1. Read Fig 4 :27, :30-32, Fig 1 :19, :22, Fig 12 :121, Fig 11 :43-44 (six short passages), all in the local figure text. Confirm the quotes are verbatim.
2. Check C2 against your own model: name the return path of one feedback and its sign, or say why there is none.
3. Name one observation that would discriminate between two dropped details that give the same global skill score, or say why none exists.
4. Send the refutation. A failure is more useful than an endorsement. If you would rather not engage, no reply is needed.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
