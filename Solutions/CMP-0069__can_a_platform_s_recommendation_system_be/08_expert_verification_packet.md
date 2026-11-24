# Expert verification packet: the Tether on the recommender boundary

**What this is:** a claim in a form a recommender-systems or network researcher can check. Mode, derivation, and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the reframing, `specified` on the habitat prediction. Not `grounded`.** No platform measurement is claimed. This is a shape, a test, and an exception, not a result.

## 1. The claim, in one paragraph

"Inside or outside" is a boundary convention, not a measured property of a recommender. The recommender is in contact with the spread residual, so it belongs in the habitat that a model of that spread must enumerate; the default is to model it as part of the network. The deciding property is whether its state updates on the behavior it affects. A recommender that retrains on the behavior it induces is a frame, not a pinned anchor, and treating it as fixed external forcing is the mutual-update collapse in which users and the algorithm converge on whoever had the most influence. The narrow exception is a genuinely pinned recommender, for example a randomized or fixed signal, which can be modeled as an external influence. The two arrangements are isomers over the same cast with different bonds.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 11 and 2

- **Statement:** an actor in contact with the residual belongs in the enumerated habitat; you cannot exclude it by relabeling it external. The deciding property is the anchor test: a pinned actor may be external.
- **Source, verbatim:** Fig 11 :43 *"The habitat is enumerated, never composed."* Fig 11 :44 *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :61-62 *"Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."* Fig 2 :25 *"pinned: it does not update on A or B"*.
- **Refuter:** show the recommender has no contact with the spread residual, or that its ranking is invariant to the behavior it affects in a controlled test. The first kills the habitat claim; the second licenses the external exception.

### C2 - field-facing; checkable by a recommender-systems researcher against a real system

- **Statement:** deployed recommenders retrain on user responses to their own output, so they fail the anchor test and the external model hides a feedback loop. Their distinguishing property is co-evolution of exposure, ties, and retraining.
- **What to check:** in the system you know, does the ranking or model update on the exposures it caused? Is the retraining loop closed? If it is, the two arrangements predict different cascade shapes and are not relabelings of one model.
- **Independent source to check against:** Koley and Digrajkar, arXiv:2512.10106, *"Unlike prior agent-based models that treat networks as static or model recommendations as exogenous inputs, we create a closed-loop system: agents form ties based on content exposure, a graph attention network (GAT) learns to recommend content from observed behavior, and those recommendations alter future tie formation."* Also Krauth, Wang and Jordan, ACM TORS, *"the recommender influences the user behavioral data that is subsequently used to update the recommender itself, thus creating a feedback loop."*
- **Refuter:** a controlled test showing the recommender's signal is exogenous to user behavior and network state, so the external model predicts the failed slots as well as the co-evolution model.

### C3 - framework-internal derivation

- **Statement:** the two arrangements are isomers, and the modeling steps are ordered by dependency. "Inside" is the symmetric bond `+`, "outside" is the ordered bond `→` or `⇒`.
- **Source, verbatim:** Fig 12 :117 *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 3 :20 *"The chain is ordered by dependency, not by importance."*
- **Refuter:** show that reparameterization alone makes the two arrangements produce identical predictions (they are then one substance, not isomers), or that the boundary decision can be validated before the residual is described (the dependency order is wrong).

## 3. What is explicitly not claimed

- Not that the recommender is a social tie or that it has no distinct objective. It is a distinct actor enumerated into the same habitat.
- Not that the external model is always invalid. It is licensed when the recommender is pinned.
- Not that agreement among researchers settles the boundary. Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- Not a platform effect size, a particular architecture, or a number. Those are `gap` until a ground settles them.
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not that the figures decide the platform question. They decide only the shape of the check.

## 4. Provenance

- Figure text extracted verbatim from the local canonical file `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line` against the SVG line numbers.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, read 2026-11-22.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, read 2026-11-22.
- Five independent world sources, all opened 2026-11-22, recorded with author, venue, year, and quote in `10_source_ledger.csv`.
- Three essays by Isaiah N read directly 2026-11-22, cited in `05_what_shape_means.md`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: an instrument *"cannot comment on the source"*, and the color case was *"proven wrong not by argument, but by the arrival of a better instrument."*

1. **Pinned test:** randomize or fix the recommender signal while user behavior varies. If exposure and cascade shape are independent of user behavior, the external model is licensed.
2. **Contact test:** neutralize the recommender and measure whether the spread residual changes. If not, it is not in the habitat.
3. **Union test:** check whether the organic and algorithmic channels can be ranged against a common ground independently. If their evidence pools are identical, the union surplus is zero.

## 6. What an expert can check in twenty minutes

1. Read Fig 11 :43-44 and :61-62, Fig 2 :25, and Fig 12 :117. Four short passages.
2. Name one system you know and say whether its recommender updates on the behavior it induced. That single fact decides which modeling option the figures license.
3. Say what you would expect to observe if the external model were correct, before reading the sources. A failure is more useful than an endorsement.
4. Send the refutation, or the pinned-case example. A reported failure is more useful to me than agreement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
