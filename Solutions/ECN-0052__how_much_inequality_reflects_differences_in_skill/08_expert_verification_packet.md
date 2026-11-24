# Expert verification packet: the Tether on inequality source shares

**What this is:** a claim in a form an economist, econometrician or inequality researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the universal percentage. Not `grounded`.** No income microdata, tax record, wage panel or experiment was analysed for this packet. It is a simulated derivation checked for internal consistency against the figures.

**Status of this packet:** internal consistency only. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

The question "how much inequality reflects skill and effort, how much inheritance, bargaining power, discrimination or market structure" asks for a partition of one outcome among six sources with an assignable shared fraction. The figures and the low-overlap literature say the sources form a **union of overlapping conditions** with different anchors and residual-relative valence. The residual must be read per person or household, not aggregated first. Skill is a generator and inheritance a head start, so they are different bond types and cannot be added as comparable shares. A variance share or a Shapley allocation is a budget filter, not a witness for a cause; once it decides an outcome it has become a verdict. The bottleneck is an instrument that changes one source while holding the others fixed against an anchor that does not update on the analyst's preference. Without it, naming a source from an income reading reads a projection as a source. No figure returns a universal percentage; that is a declared `gap`, not a silence.

## 2. Three checkable sub-claims

### C1 - union not partition, per slot (framework-internal plus economics-facing)
- **Statement:** the six named sources are a union of overlapping conditions, not a partition with an assignable shared fraction; the residual is indexed per slot.
- **Source, verbatim:** Fig 9 :54 - *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55 - *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 - *"Aggregating across slots is how a live signal disappears into an average."*
- **What to check:** can you exhibit a population of interest in which the intersections of these six conditions have zero mass? If not, the partition form is not available. Also check whether the unit of analysis (country, region, household) was chosen before the question was asked; Fig 9 :27-28 says *"describe it before you go looking, or any frame you pick will seem to fit"*.
- **Refuter:** a figure line returning a numerical share at one slot; or a demonstration that the six sources are a partition with zero-mass intersections; or a collapse of the per-slot residual into one global number with no signal loss.

### C2 - generator versus head start, and source discrimination (economics-facing)
- **Statement:** skill is a method, effort an action, inheritance a head start, bargaining power and discrimination relations, market structure a condition; these have different bonds and cannot be added as comparable shares. Attribution without a discriminator is a projection error.
- **Source, verbatim:** Fig 4 :22 - *"Only methods cross up. Only head starts come down."* Fig 11 :47 - *"relations: pollination, predation, competition, dependency"*; :49 - *"An actor's valence is relative to the residual, not a property it carries."* Fig 3 :27 - *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
- **What to check:** is there an instrument in your own work that changes one of these at one slot while holding the others fixed, with an exclusion restriction whose validity comes from the model structure rather than from the data? The instrumental-variables entry states: *"Since U is unobserved, the requirement that Z be independent of U cannot be inferred from data and must instead be determined from the model structure"*. If such an instrument exists, C2's gap closes for that source and that slot.
- **Refuter:** an instrument meeting all five conditions in `07` §4; or a source-discriminating measurement with a non-updating anchor; or a demonstration that an income reading uniquely determines its source.

### C3 - allocation is a convention until the ground decides (framework-internal plus mathematics-facing)
- **Statement:** a variance share or Shapley allocation is a filter for the budget, not a witness for the cause. It becomes a verdict when it decides an outcome.
- **Source, verbatim:** Fig 9 :60 - *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Fig 1 :27 - *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Fig 10 :47 - *"a convention that decides an outcome has stopped being one"*.
- **What to check:** the Shapley value is described in the mathematics literature as *"the only solution that satisfies four fundamental properties: efficiency, symmetry, additivity, and the dummy player (or null player) property, which are widely accepted as defining a fair distribution"*, and Shapley value regression allocates *"the total explained variance or predictive power of the model"* among predictors. Fairness of an allocation rule is an axiom set, not a measurement of causal source. Does your use of a decomposition cross from ranking what to investigate into deciding who receives a transfer?
- **Refuter:** a demonstration that an allocation share is anchored to a source-discriminating measurement and does not merely re-describe the frame that produced it.

## 3. What is explicitly not claimed

- Not a percentage, not an allocation ratio, and not a new estimate of any inequality effect.
- Not that skill and effort are unimportant, and not that discrimination, bargaining power or market structure are the hidden main cause.
- Not that the six sources are six comparable atoms; they mix a method, an action, a head start, two relations and a condition.
- Not that an existing decomposition is wrong. It may be a fair and useful convention.
- Not that the framework settles its own claim. *The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- Not grounded. The isomer claim in `06` has one live strain: the fixed-atom condition is not met by the question as written.
- Not a human-authored empirical article. The Journal of Economic Inequality states that LLMs *"do not currently satisfy our authorship criteria"* and that LLM use *"should be properly documented in the Methods section"*.

## 4. Provenance

- Figures: verbatim text at `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`, cited as `Fig N :line`.
- Canonical usage: `local: ...\FRAMEWORK\reference\FIGURES_README_canonical.md`; eight-step loop and mode rule: `local: ...\FRAMEWORK\figures\THE_FORMULA.md`; seat rules: `local: ...\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md`.
- Essays: eight essays by Isaiah N, 2026; *The Hard Problem is About Source* and *The Recursive Self-Improvement Trap* re-opened 2026-11-23, the other six mapped through the completed exemplar. See `05_what_shape_means.md`.
- World witnesses actually opened: Shapley value, Instrumental variables, Identifiability, Metamerism (color), Dominance hierarchy, Fundamental attribution error, Great Gatsby Curve (all Wikipedia entries accessed 2026-11-23), with full details in `10_source_ledger.csv`. Low-overlap fields: mathematics, econometrics, statistics, colour science, animal behaviour, human cognition. The Great Gatsby Curve is the economics pool itself and is not an independent witness.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not another decomposition. Its shape: slot-specific; read against an anchor that does not update on the analyst's preference; with an exclusion restriction justified from the model structure; provenanced and shadow-tested if imported; and accompanied by a failure condition written before the run. Colour metamerism was resolved by a spectrometer, not by an argument (essay 7). Standing falsifiers are in `01` §3 and `07` §4.

## 6. What an expert can check in twenty minutes

1. Read Fig 9 :54-57, Fig 1 :19/:22, Fig 4 :22 and Fig 10 :47. Five short passages.
2. Name one population in which the six conditions do not overlap. If you cannot, C1 stands. If you can, say what the intersections look like.
3. Name one instrument in your own field that shifts a single source at a single slot with a defensible exclusion restriction. If you can, C2's gap closes for that source.
4. Say whether your last use of a decomposition ranked what to investigate or decided who gets what. If the latter, C3 fires.
5. Send the refutation. A failure is more useful than an endorsement.
