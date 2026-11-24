# Isomers and order in the early-warning failure question

**Mode: `specified` on the structural derivation, `gap` on the frequency. Not `grounded`.** This is a simulated derivation checked for internal consistency against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The question joins two conditions with "or": an alarm that was not followed by collapse, and a collapse that was not preceded by an alarm. The audit (`01_figure_grounded_audit.md` section 1) already settled that this is a **union compound with an averaging layer**, not one hard question. This file does the supporting work the question needs: what the two conditions are made of, how they are arranged, what order the counting sits at, and what would break the reading.

Atoms held in the frame: an indicator reading on a time series (variance, lag-1 autocorrelation, skewness, spatial clustering), a threshold convention that turns a reading into an alarm, a collapse outcome settled independently of the indicator, a lead-time window, and a system slot. Bonds available: the ordered comparison `⋛` (Fig 12 :87 "a threshold relation between two quantities"; Operators :49 the same), the sequence `→`, and conjunction `+`.

## DOMAIN CENSUS (recap, full version in 01)

- D1 Indicator frame: actors are the statistic and the analyst choosing window, detrending and threshold; currency is signal strength; anchor is the time series, an instrument not a ground.
- D2 Ecological ground: actors are the ecosystem and the observed transition; currency is the transition itself; anchor is the transition only if fixed independently of the indicator.
- D3 Monitoring channel: actors are sensors, sampling interval and observers; currency is contact with the ground; anchor is the ground, which does not move while the channel decays.
- D4 Selection and aggregation: actors are studies and the "how often" statistic; currency is pooled counts; anchor is borrowed from D2 and collapses when studies are selected for having collapsed.

Order by dependency: keep contact (D3), describe the residual per slot (D1), unbundle the union (Fig 9 :54), fix the anchor before selection (D2), then count (D4).

## STRUCTURE: two failure modes are isomers, not one pile

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :5: **"are not one hard question but several well-formed ones. Split it rather than search."**
Fig 9 :57-58: **"It stops being a mixture and becomes a specific compound."**

Write the two conditions as molecules over the same atoms:

- **False alarm:** `(alarm fires)` + `(ground = no collapse)`.
- **Miss:** `(no alarm)` + `(ground = collapse)`, where the "no alarm" atom is itself a compound of three indistinguishable states (absence, depth, channel decay, see `01` F3).

They use the same atom inventory and differ in arrangement: which side of the threshold the reading lands on, and which side of the ground the transition lands on. By the figure's own definition they are **isomers**, not two severities of one substance:

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

The behaviour is decisive for the question. A false alarm is measured against systems that did not collapse; a miss is measured against systems that did. The denominators differ, the costs differ, and detection theory (a low-overlap world source) says the same in its own vocabulary: "Bias is independent of sensitivity. Bias can be desirable if false alarms and misses lead to different costs." Fig 12 :92: **"Symmetry is what decides whether an arrangement is a new thing."** Under the ordered comparison `⋛` the two arrangements are different terms, so a single count that charges them as one undercharges the bond.

The stricter reading is not claimed. By Fig 12 :123, **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member,"** the two failure modes share a functional group (a threshold decision against a ground) but are different members. Calling them isomers is a claim about the atom inventory being identical; if a source-discriminating instrument shows one condition needs an atom the other does not, the isomer reading falls to the functional-group reading, which is weaker but still enough to forbid one pooled rate.

The miss molecule also has a **union inside it**, from `01` F3:

Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."**
Fig 10 :24: **"the ground does not decay, the channel does"**

So "fail to appear" is one observation with three possible sources. From inside D1 they are one atom; from the habitat they are three. This is the same compound-within-a-compound structure Fig 9 names, and it is why the denominator of a miss cannot be read off the indicator alone.

## ORDER: first order per slot, second order at the rate

A **first-order** composition stays inside one slot: a time series is read by a statistic, the statistic is compared `⋛` to a declared threshold, an alarm is issued or withheld, and the outcome is checked against the independently fixed ground. The residual there is per object:

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

The "how often" statistic is **second order**. It composes over first-order outcomes that have already settled. That promotion is legal only because a settled outcome can serve as an atom at the next level:

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"**

Two things go wrong at second order in the question as phrased.

1. **The second-order composition is performed before the first-order settlement is described.** Studies are selected for having collapsed, a threshold is fitted after the trajectory is seen, and only then is a rate computed. This reverses the dependency chain (Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."). A reading taken below the break is "a reading of nothing" (Fig 3 :22-23).
2. **Two incommensurable currencies are summed.** The cost of stating a rate and the cost of settling whether an alarm was correct are different readings:

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."**

A single pooled frequency is exactly such a sum: it adds the descriptive bill to the settling bill and reports one number. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Second order is not forbidden. A per-slot rate table, with denominator, lead time, convention and selection rule exposed, is a legitimate second-order composition over settled first-order outcomes. What is refused is the unbracketed jump from a reading to a pooled verdict. The cross-scale analogue is Fig 4 :27 "The transform between scales loses information, and that is the point," with a round trip that must be measured (Fig 4 :30), and a gap that is a measurement, not an error to erase.

## ANALOGUES (declared as analogues, not as evidence)

| analogue | source | what it licenses | where it stops |
|---|---|---|---|
| Chemical isomerism | Fig 12 :117, with the figure's own Liebig and Wöhler / Berzelius reference (Fig 12 :97-98) | same atoms, different arrangement, different behaviour; two failure modes share an atom inventory | chemistry settles identity by experiment; here identity is settled by the ground, which we have not read |
| Signal detection theory | world source, Wikipedia, read 2026-11-23 | four outcomes (hit, miss, correct rejection, false alarm); bias independent of sensitivity | it is a human cognitive frame, not a figure line, so it corroborates only |
| Habitat cascades | Fig 11 :52-53 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." | an alarm may register a real disturbance three steps from the monitored state variable | does not say which disturbance, needs a source-discriminating instrument |
| Base rate arithmetic | world source, Wikipedia, read 2026-11-23 | the population sampled determines the meaning of a positive reading | arithmetic, not a rate for this question |

The analogues agree on structure: separation before counting. Agreement from a shared evidence pool is one witness, not two (Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."). Detection theory and Fig 12 are low overlap, so their agreement is weak corroboration, not a proof.

## FALSIFIER (written before the conclusion)

The isomer-and-order reading is refuted if any of the following holds:

1. A single pooled frequency is shown sufficient to decide where an indicator fails, invariant to per-system, per-indicator, per-lead-time and per-convention decomposition (breaks the union reading, Fig 9 :54, and the per-slot rule, Fig 1 :19 and :22).
2. False alarms and misses are shown to share one atom inventory, one bond, one mechanism, one denominator and one cost structure, so that one term describes both (breaks Fig 12 :117 and Fig 9 :57-58; the functional-group fallback would also fail).
3. A source-discriminating instrument shows that a named "failure to appear" was genuine absence at every resolvable scale, not depth and not channel decay (breaks the internal union, Fig 6 :27, Fig 10 :24, Fig 8 :39 "So a search that finds nothing is never a proof of absence.").
4. A second-order rate is produced whose round trip from local alarm to system verdict has a measured gap of zero at the resolution that matters (breaks Fig 4 :27 and :30).

If any fires, the reading is withdrawn and the failure is recorded. Until one is run, nothing here is `grounded`.

## CONCLUSION

The two failure modes are **isomers over a shared atom inventory** in the figure's sense: same atoms, different arrangement, different consequence, therefore different denominators. The miss molecule contains a second union (absence, depth, channel decay) that only a source-discriminating instrument can split. The per-slot reading is first order; the rate is a second-order composition over settled first-order outcomes, and the question as phrased performs that composition before settlement and sums two currencies. The repair is not to refuse counting but to bracket it: per-slot rates, denominators exposed, anchor fixed before selection, round-trip gap reported. The requested single frequency remains a `gap` at this budget and by this method. Fig 13 :134: **"Unreachable is a verdict here, not a silence"**

## ANCHOR

Verbatim figure text extracted from the 16 attached SVGs, read 2026-11-23. Framework essays and the two world sources were opened the same day. No measurement was taken.

## FIGURE CENSUS

Fig 1 (per-slot residual, aggregation), Fig 3 (dependency order), Fig 4 (lossy transform, round trip), Fig 6 (depth versus absence), Fig 8 (empty search, union mute), Fig 9 (union split, describe before looking, filters versus witnesses), Fig 10 (channel decay, convention), Fig 11 (habitat cascade), Fig 12 (isomer, functional group, ordered bond, two currencies, settled molecule as atom), Fig 13 (unreachable as verdict), Operators (`⋛` type). Strains named rather than hidden: the miss molecule's internal union is unresolved by any instrument read here, and whether settled per-slot outcomes count as quantities for a `⋛`-style aggregation needs an instrument, not an argument.
