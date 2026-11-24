# Expert verification packet: the Tether on the fiscal multiplier

**What this is:** a claim in a form a fiscal-policy researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` for the shape, `specified` for the per-slot and union claims. Not `grounded`.** No measurement is claimed by this packet and no multiplier value is supplied. Simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

"How large is the fiscal multiplier?" asks for one coefficient. The figures say that is the wrong object. A residual is indexed by slot, so the multiplier should be a vector indexed by state of the economy, country and identifying route, each component anchored to its own measured output response. The variation across recession, expansion and country is a union of overlapping conditions that must be unbundled, not noise around a constant. Study agreement is weighted by independence, not counted as votes, and identification precedes estimation in dependency order. The framework returns no number. What it offers is a checkable shape, refuters written in advance, and the kinds of instrument that would settle each slot.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figure 1

- **Statement:** a global multiplier average discards the signal the question asks about; the object is per-slot.
- **Source, verbatim:** Fig 1 :19 - **"The residual is indexed by object slot, not aggregated."** Fig 1 :22 - **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :28 - **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**
- **Refuter:** fit one constant `k` on one set of slots and show it predicts held-out output response as well as or better than a slot-indexed vector.

### C2 - framework-internal; checkable by reading Figure 9

- **Statement:** recession, expansion and country are a union of overlapping conditions, not a partition; a compound in two conditions is categorically different, not a harder case of one.
- **Source, verbatim:** Fig 9 :54 - **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :57-58 - **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**
- **What to check:** does the empirical variation disappear under one additive control, or does it persist at intersections (slack AND lower bound AND openness)?
- **Refuter:** show that one condition, with no interactions, accounts for all cross-slot variation with no residual structure left.

### C3 - framework-internal; checkable by reading Figures 2 and 3

- **Statement:** the anchor is a measured response, and shared data makes agreement a convention rather than a verdict; identification is upstream of estimation.
- **Source, verbatim:** Fig 2 :29-30 - **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** Fig 2 :40 - **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** Fig 3 :20-21 - **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**
- **Refuter:** two estimates from the same dataset and the same identifying assumptions are counted as independent and that changes the verdict; or an estimator recovers a stable slot vector from fully anticipated spending changes.

## 3. What is explicitly not claimed

- Not a numeric multiplier. The framework returns **"a kind of thing, never the answer itself"** (Fig 9 :32). Published estimates are secondary readings with provenance, not outputs of the figures.
- Not a law that recessions always have larger multipliers. That is an empirical claim per slot with its own ground.
- Not that monetary accommodation, debt or openness are figure-derived causes. They are enumerated conditions from the economics frame, recorded as such.
- Not that study consensus settles the question. Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
- Not grounded. Nothing here was settled by measurement.
- Not a Fig 13 derivation. The mapping of macro variables onto the six-term substrate was re-censed out as strained (see `01_figure_grounded_audit.md` §3).

## 4. Provenance

- Local figure text extracted verbatim this session from `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`; every `Fig N :line` quote in this packet was checked against it.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- `THE_FORMULA.md`, mode rule and dependency structure; `THE_SEAT_MAP_Field_Guide_amended.md`, pre-registration and correlation rules.
- World sources read 2026-11-23, with field, year and quote: Auerbach and Gorodnichenko (NBER 17447, 2011; AEJ: Economic Policy, 2012), Ramey (JEL, 2011), Baum and Poplawski Ribeiro (IMF WP 12/86, 2012), House, Proebsting and Tesar (NBER 23147, 2017), Gechert and Rannenberg (Journal of Economic Surveys, 2018), Silberzahn et al. (2018), Anoke et al. (Statistics in Medicine, 2019). Full URLs and quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A ground reading per slot, not further agreement. For the economics frame:

1. an identified spending change that is not predictable from real-time forecasts;
2. the measured output response for that slot, with the conditions of the slot recorded;
3. a comparison across slots that varies one condition while keeping the others visible, or a heterogeneity method that refuses to substitute the population mean for the compound-specific effect.

*The Hard Problem is About Source*: *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"the answer is unreached until a better instrument exists."*

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22 and Fig 9 :54, :57-58, four short passages.
2. Check C1 against one dataset you know: does the slot-indexed vector forecast better out of sample than a single coefficient?
3. Check C3 against the identification you trust: is the spending change predictable in real time, and which studies share a data pool?
4. Name one instrument that would discriminate the conditions in your country and episode, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
