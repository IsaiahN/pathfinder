# Expert verification packet: the Tether on advertising and behavior change

**What this is:** a claim in a form an advertising researcher, econometrician, or marketing-analytics practitioner can check. Mode, derivation, and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified`: not `grounded`.** No holdout result is claimed. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

A company cannot distinguish "the ad changed this purchase" from "the ad reached someone who would have bought anyway" using exposure, reach, clicks, or attributed conversions, because those are quantities the measurement frame produces. The two cases are isomers over the atom set {exposure, purchase, prior intention, assignment}: same atoms, different bond, different substance, and the flat log records only `exposure + purchase` for both. What separates them is a per-consumer counterfactual comparison against an assignment the analyst could not influence, with two conditions kept separate: C1, did behavior change, and C2, did the ad reach likely buyers. A blended ROAS is a pooled reading that destroys both diagnostics. The framework returns that shape, not a named tool, and states what would refute it before any theory is shown.

## 2. Three checkable sub-claims

### C1: framework-internal; checkable by reading Figures 1, 2 and 9

- **Statement:** reach, clicks, and attributed conversions are frame-internal quantities and cannot be the witness for a verdict about behavior change. The verdict needs an anchor that does not update on the analyst's opinion, and the question is a union of two conditions that must not be averaged.
- **Source, verbatim:**
  - Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
  - Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*
  - Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*
- **Refuter:** a statistic computed only from exposure and click logs that predicts, prospectively and per named consumer, whether that consumer's purchase was caused by the ad, verified against a randomised holdout; or a single intervention that raises incremental purchases and removes exposure to likely buyers in both failure types with no categorically different residue.

### C2: measurement-facing; checkable by an advertising researcher against the literature and their own experiments

- **Statement:** a purchase reading does not determine its source. Extensive demographic and behavioural conditioning on observational data often fails to recover the experimental effect, and "frequent users" who are not influenced can account for most spend. Per-slot indexing is therefore load-bearing, and a campaign average can hide a negative frequent-user residual behind a positive new-user one.
- **Source, verbatim:**
  - Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
  - Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
  - Fig 6 :34: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*
- **What to check:** (1) Gordon, Zettelmeyer, Bhargava and Chapsky, Marketing Science 38(2), 2019: do the observational methods fail to recover the randomised effects even after extensive conditioning? (2) Blake, Nosko and Tadelis, Econometrica 83, 2015: do brand-keyword ads show no measurable short-term benefit, and do frequent users who are not influenced account for most expense? (3) Lewis and Rao, QJE 130(4), 2015: is the median ROI confidence interval over 100 percentage points, and can informative experiments require more than 10 million person-weeks? (4) Is there a counterexample in which an observational instrument provably separates the two sources without a counterfactual assignment?
- **Refuter:** any one of: an observational instrument whose reading determines the source; a campaign-level average that predicts per-consumer causation at the ground; or a proof that no holdout or geo design could resolve the term for a class of campaigns at any budget.

### C3: framework-internal derivation; checkable by reading Figures 5, 6, 10 and the Formula

- **Statement:** the honest order is refuse the attributed-purchase claim first, then mint the counterfactual contrast, then settle it against the holdout, then carry the method upward with a measured round-trip gap `R_T`. Contact with the counterfactual decays; the ground does not.
- **Source, verbatim:**
  - Fig 6 :42: *"What is recorded only grows. What is reachable is derived, and it can fall."*
  - Fig 10 :24: *"the ground does not decay, the channel does"*
  - Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*
  - Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
- **Refuter:** a documented case in which refusing the attributed-purchase claim first produced a worse measurement outcome at the ground than minting a new metric on top of it while leaving the old claim standing; or a campaign whose channel is documented as stale, pooled, or saturated whose estimate still matches a refreshed holdout at every handoff.

## 3. What is explicitly not claimed

- Not that advertising never works, or that a particular campaign had no effect.
- Not that a randomised holdout is always affordable, necessary, or free of spillover.
- Not that observational methods are useless. They are budget filters and possible corroboration at maximum independence.
- Not that any named attribution product, MMM, or statistical package is the answer. Fig 9 :32: *"you get a kind of thing, never the answer itself."*
- Not a derivation of any specific platform's lift methodology from the figures.
- Not `grounded`. This packet states a shape and its refuters. No experiment was run by this agent.
- Not a second, independent witness. This derivation and its audit share one evidence pool; by Fig 2 :40 agreement from that pool is not corroboration.

## 4. Provenance

- Question: `business.txt` line 91, ID BUS-0069, section "Customers, marketing, and competition".
- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-22. Citations are `Fig N :line` against that file.
- `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, local canonical copies.
- Eight essays by Isaiah N, cited in `05_what_shape_means.md`; four re-fetched 2026-11-22, the other three not re-fetched and marked as such.
- Gordon, Blake, Lewis and Rao, Hernán and Robins, and the Ghost Ads working paper, each opened 2026-11-22 and recorded in `10_source_ledger.csv` with author, venue, year, quote and overlap.
- This packet compiled 2026-11-22.

## 5. What would settle it

An instrument, not a further argument:

1. **Per-slot counterfactual test:** does `⋛(P | A=1, P | A=0)` stay positive at the named slot, where A is an assignment the analyst could not influence?
2. **Source-discrimination test:** can a logs-only reading separate a persuaded purchase from an otherwise identical likely-buyer purchase? If yes, C2 is broken and attribution alone suffices for that case.
3. **Budget test:** is a wide interval a budget limit or a genuine underivability? Fig 8 :39-43 issues different instructions for the two.
4. **Channel test:** is the assignment still genuinely randomised, or has the channel decayed into stale, pooled, or saturated readings (Fig 10 :26)?

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :27, Fig 2 :29, Fig 9 :57 and Fig 12 :117, five short passages.
2. Check C2 against their own knowledge of ad measurement: do the three cited papers say what this packet says they say? A one-line correction is welcome.
3. Name one instrument that would distinguish a persuaded purchase from a likely-buyer purchase, or say why none is possible at that stratum.
4. Try to fire one of the four refuters in `01_figure_grounded_audit.md` §4. A failure is more useful than an endorsement.
5. Send the refutation. Record it before showing any framework material.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
