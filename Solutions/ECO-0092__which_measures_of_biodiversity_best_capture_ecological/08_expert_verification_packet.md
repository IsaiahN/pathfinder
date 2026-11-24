# Expert verification packet: the Tether on biodiversity measures

**What this is:** a claim in a form a biodiversity measurement researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the per-slot and independence predictions, `general` on the structural shape, not `grounded`.** No field measurement is claimed. This is a shape and a route, not a result.

**Status:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

A question asking which biodiversity measure best captures ecological difference, evolutionary history and functional importance is a union of three questions over one species list, not one hard question (Fig 9 :5, :55). The shape any good answer must have is: three readouts, one per target, reported per species or lineage or function rather than averaged into one scalar; counted as separate witnesses only to the degree they draw on different evidence; with functional importance treated as a relation between a species and a named process in a named habitat, not a property the species carries. Over the shared species set the facets stand as isomers, same atoms with different bonds. The framework returns this shape and its falsifiers, not the name of a winning index.

## 2. Four checkable sub-claims

### C1: framework-internal and question-facing; checkable by reading Figure 9

- **Statement:** the three targets form a union and must be split before an index is chosen.
- **Source, verbatim:** Fig 9 :5: *"are not one hard question but several well-formed ones. Split it rather than search."* Also Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* And Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- **What to check:** is there a representative set of communities in which a change in one target co-occurs with an opposing change in another? Purvis and Hector 2000 and Le Bagousse-Pinguet et al. 2019 report exactly that kind of divergence.
- **Refuter:** if no such co-occurrence exists over a representative set, the targets form a partition or one quantity and the split is unnecessary.

### C2: measurement-facing; checkable against any monitoring dataset

- **Statement:** the residual must be reported per slot, not as an aggregate, and two readouts count as one witness when they are near-invertible.
- **Source, verbatim:** Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 13 :36-38: *"If two members drew on the same underlying fact, their agreement would carry no information, and one of them would be redundant rather than minimal."*
- **What to check:** compute the joint slot vector for the three readouts on your communities. Does any single scalar preserve all three slot-level signals without collision? What is the measured redundancy among the three columns? Santini et al. 2017 recommend reporting separate metrics; Mouchet et al. 2010 report high correlation among most functional indices.
- **Refuter:** an injective aggregate map from the joint slot vector for all three targets, or a proof that two readouts are independent on all communities while one is derivable from the other without loss.

### C3: ecology-facing; checkable against a named process and habitat

- **Statement:** functional importance is relative to the residual and to the habitat, and the habitat must be enumerated by contact out to the cascade.
- **Source, verbatim:** Fig 11 :49: *"An actor’s valence is relative to the residual, not a property it carries."* Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*
- **What to check:** take a species whose "functional importance" is high in one habitat. Does its ranking survive a change of process or habitat, including a second-order contact effect? If it does, importance is intrinsic.
- **Refuter:** a species whose importance ranking is invariant across habitats and residual definitions with no cascade effect. The 2018 Ecological Indicators study of birds across farmland, forest and grassland reports that associations among metrics change across environments, which is the opposite finding.

### C4: framework-internal derivation, with a live premise

- **Statement:** the three facets over one species set are isomers, or at minimum members of one functional group, and a diversity profile of order q is a spectrum not a point.
- **Source, verbatim:** Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* Fig 13 :19-20: *"ordering, so more and less can be said"* (the spectrum term). Jost 2006 supplies the ecology instance: *"The order of a diversity indicates its sensitivity to common and rare species."*
- **What to check:** can each facet be written over the same species set? If one requires an extra atom, the isomer claim falls to the functional-group claim. Do two values of q on the same community give different readouts?
- **Refuter:** an extra atom required by one facet, or a collapse of the q-profile to a point for all communities.

## 3. What is explicitly not claimed

- Not that Shannon, Simpson, Hill numbers, Faith's PD or Rao's Q is the best measure. Naming one needs provenance and a ground reading.
- Not that three readouts are independent because they have different names.
- Not that the order q is a fourth facet. It is an ordering within a readout.
- Not that the three-target list is nature's own list. It is a declared framing.
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not a claim derived from the six substrate terms by mapping targets onto network, spectrum and gradient. That mapping was withdrawn in `01` F10 as an unlicensed import.

## 4. Provenance

- Residual and effect description: `01_figure_grounded_audit.md`, compiled 2026-11-23.
- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; all `Fig N :line` quotes checked against it after whitespace normalisation.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Supporting shape reading: `05_what_shape_means.md` and `06_isomers_and_order.md`.
- World corroboration: Purvis and Hector 2000 (Nature), Morris et al. 2014 (Ecology and Evolution), Jost 2006 (Oikos), Santini et al. 2017 (Biological Conservation), Lyashevska and Farnsworth 2012 (Ecological Indicators), Mouchet et al. 2010 (Functional Ecology), Le Bagousse-Pinguet et al. 2019 (PNAS).
- This packet compiled 2026-11-23.

## 5. What would settle it

A ground reading, not agreement. Four discriminator questions:

1. **Union:** does a change in one target ever co-occur with an opposing change in another on representative communities?
2. **Overlap:** what is the measured redundancy among the three readouts on those communities?
3. **Per-slot:** can any single scalar preserve every slot residual without collision?
4. **Ground for a name:** does a monitoring outcome or experiment show one index settling all three targets with no residual left on any one?

If the fourth fires, the name slot is filled and the `gap` closes. Until then the verdict stays `candidate`.

## 6. What an expert can check in twenty minutes

1. Read Fig 9 :5, :54, :55 and Fig 1 :19, :22: five short passages.
2. Check C1 against your own monitoring data: can you produce a case where two targets move in opposite directions?
3. Check C2: compute the pairwise redundancy of three candidate readouts on one dataset. Are they one witness or three?
4. Check C3: name one process and habitat in which a species' importance ranking changes. That is the valence rule in action.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
