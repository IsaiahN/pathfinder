# Expert verification packet: the Tether on poorly represented climate extremes

**What this is:** a claim in a form a climate-extremes researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` on the three sub-claims, `grounded` only in the cited world assessments.** No new measurement is claimed by this derivation. This packet is a simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The claim, in one paragraph

The poorly-represented set has a shape that the figures govern even though they do not name its members. Rare extremes are live object slots hidden by averaging, so near-zero global mean skill is compatible with a badly missed event. Local extremes are lost in a lossy scale transform, and the round-trip gap R_T is the honest report of what the coarse description cannot hold. Compound extremes are a union of overlapping conditions, so a model that represents heat and drought separately can still miss hot-dry. The anchor is the observation, not multi-model agreement. The membership list (unprecedented heat, sub-daily flash floods, fire weather, compound flooding, spatially concurrent heat) is an import from cited climate assessments, recorded with provenance, not a figure derivation.

## 2. Three checkable sub-claims

### C1 — rare is an indexing failure, checkable by recomputing skill per event slot

- **Statement:** per-slot skill will surface excess residual at rare-event slots that global or regional-mean scoring hides.
- **Source, verbatim:** Fig 1 :19 **"The residual is indexed by object slot, not aggregated."** Fig 1 :13 **"a global R near zero with one live slot residual is a legal state"**. Fig 1 :22 **"Aggregating across slots is how a live signal disappears into an average."**
- **What to check:** take a CMIP6 historical ensemble and an observed extreme index. Score once as a regional mean, then again with one bin per event and equal weight per event. Does the mean-based score understate the event-slot error?
- **Refuter:** the excess residual at rare slots disappears under equal event weighting. Then C1 fails and rarity is not an indexing effect here.

### C2 — local is a lossy scale transform, checkable by a downscaling round trip

- **Statement:** the coarse-to-fine-to-coarse transform is not invertible for a local extreme, and the gap is the quantity to report rather than an error to eliminate.
- **Source, verbatim:** Fig 4 :27 **"The transform between scales loses information, and that is the point."** Fig 4 :31 **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."** Also Fig 10 :24 **"the ground does not decay, the channel does"**.
- **What to check:** for a sub-daily flash-flood or high-topography precipitation case, carry a fine field up to the model grid and back. Is the returning field identical for the tested quantity? If not, report the gap rather than declaring the event represented.
- **Refuter:** a round trip whose R_T is indistinguishable from zero for the tested quantity. Then C2 fails for that quantity.

### C3 — compound is a union, checkable by comparing marginal and joint skill

- **Statement:** a case in two conditions is a specific compound, not a harder instance of either marginal, so improving a marginal need not improve the joint.
- **Source, verbatim:** Fig 9 :55 **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."** Fig 9 :57 **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."** Fig 12 :117 **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- **What to check:** for hot-dry or compound flooding, compare a model's skill on each driver with its skill on the joint occurrence. Does a marginal improvement leave the joint residual standing? Does an independent-driver model reproduce the observed joint frequency?
- **Refuter:** a driver-independent model reproduces the joint frequency and impacts. Then the intersection is not a different object and C3 fails.

## 3. What is explicitly not claimed

- Not that the figures name any specific extreme. Fig 9 :32: *"you get a kind of thing, never the answer itself."*
- Not that multi-model agreement corroborates the claim. Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*.
- Not that absence in a model proves absence in the world. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
- Not that resolution alone fixes locality, or that rarity is a property of the atmosphere alone.
- Not `grounded` by this derivation. The membership list is grounded in the cited assessments, not produced by this packet.
- Not a final answer. The set of kinds is closed; the arrangements are not.

## 4. Provenance

- Figure text extracted verbatim from the local file `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`; all `Fig N :line` citations resolve against it.
- Canonical usage rule and mode rule: local `FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`, both opened 2026-11-22.
- World sources opened 2026-11-22: IPCC AR6 WG1 Ch 11 (Seneviratne, Zhang et al., 2021); Zscheischler et al. 2020, Nature Reviews Earth and Environment; Bevacqua et al. 2023, Nature Communications; Ridder et al. 2022, npj Climate and Atmospheric Science. Full URLs, quotes, fields and overlap notes in `10_source_ledger.csv`.
- The eight essays by Isaiah N, 2026, mapped in `05_what_shape_means.md`.
- This packet compiled 2026-11-22. No measurement was taken by this agent.

## 5. What would settle it

A discriminating observation, not further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here:

1. Per-event equally weighted skill that closes or widens the rare-slot gap (C1).
2. A downscaling round trip with a measured R_T for a named local quantity (C2).
3. A driver-independent joint-frequency estimate tested against observation (C3).
4. An observing instrument that distinguishes no event from sub-grid event from unregistered compound event at the same slot.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :13, :19, :22, Fig 4 :27, :31 and Fig 9 :55, :57. Six short passages, all from the verbatim extract.
2. Check C1 against one dataset you know. Would an equal-event rescore change the conclusion?
3. Check C3 against one compound event you know. Does a marginal-only model reproduce the joint?
4. Name one instrument that would distinguish the three source cases in section 5, or say why none is available.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
