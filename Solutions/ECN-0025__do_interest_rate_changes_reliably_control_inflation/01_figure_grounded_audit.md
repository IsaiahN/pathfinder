# Figure-grounded audit: do interest-rate changes reliably control inflation and employment?

**Mode of this document: `specified` on the structural verdict, `general` on the indexing and union rules, nothing `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* records that LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure quotes are taken only from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Formula: `FRAMEWORK/figures/THE_FORMULA.md`. World sources actually opened are listed in `10_source_ledger.csv` and used in `09_watson_answer.md`.

---

## 0. The residual, stated in effect terms

Write the policy problem per slot:

```
R_s,t = | Γ_s,t(b,a) − o'_s,t |
```

- `a` = the policy action, a change in the policy interest rate.
- `o'` = the observed outcomes, inflation and employment.
- `s` = the economy slot; `t` = the date.
- `Γ_s,t` = the monetary transmission model held by the central bank at that slot and date.

The question asks whether `R_s,t` stays small and stable across `s` and `t` for the same action `a`. It is **not** asking whether a pooled average fit is good. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

**Restating the two options as effects.** Option A ("reliably control") says the map `a → o'` is stable enough that the same action yields the same sign and comparable magnitude in every slot and epoch. Option B ("effects vary substantially") says the map's parameters, and possibly its sign, change with the habitat and the epoch. Each leads to a different practical act: A licenses one rule transported everywhere; B requires the rule to be re-estimated per slot and re-checked when the channel changes.

**The sought-for shape, bound as an ordinary term before the run** (Formula step "Direction"): an answer would say whether the stability of `a → o'` is a property of the action, of the policy-plus-habitat pair, or of the measurement channel. It would name which of these changes when the residual changes, and it would state what instrument would settle a per-slot coefficient. Binding this in advance makes the preference refusable by the same test as everything else.

---

## 1. Domain census (before any figure line)

**R by arity, symmetry, scale.** Arity: the action-to-outcome mapping is polyadic and ordered (rate change → money-market and asset prices → expectations → credit and spending → aggregate demand → domestic price and wage setting → inflation and employment); it carries an ordered bond, a comparison bond (inflation against target), and a network along which influence travels. Symmetry: "reliably control" is a threshold claim, not a symmetric join; it asks whether `R_s,t` is below a bound in each slot. Scale: one central-bank loop per economy, a population of economies, and two time scales (within-cycle lags and across-decade drift); the membrane between scales is lossy.

One line per domain. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Policy loop | central bank, policy rate, money market, banks | actions and residual reduction | measured inflation and employment | admitted |
| D2 Transmission habitat | banks, borrowers, firms, households, exchange-rate regime, labour market, expectations | survival and cascade through credit, spending, import prices | realized outcomes and who actually pays | admitted |
| D3 Model library Γ | atoms (rate, credit, exchange rate, expectations, demand) and their bonds | reach and cost `|φ|` | settlement against the data | admitted |
| D4 Temporal channel | instruments, metrics, percepts | contact with the ground | the ground, which does not decay | admitted |
| X1 "The natural rate" as a free-floating constant | a single unobserved number | none nameable | not directly nameable | **not a domain yet**; it is a term inside Γ whose own residual must be examined, not an anchor |
| X2 "The global financial cycle is the sole cause" | global investors | risk appetite | would displace the D2 outcome anchor | absorbed into D2 as a condition when it acts on credit and exchange rates; refused as a sole anchor |

**Partition or union:** union, not partition. Time-variation and cross-economy variation are overlapping conditions, not a list of separate questions. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* Unbundle before searching: C1 a maintained channel to a paying ground; C2 a model closure matching the economy's habitat; C3 terms for the middle transmission link. Each gets its own loop and its own ground. A single lever that clears one condition leaves the intersections standing.

**Order by dependency** (Fig 3 :20: *"The chain is ordered by dependency, not by importance."*): perception (measure inflation and employment) → vocabulary (terms for the transmission channels) → objective (target and loss function) → planning (set the rate) → learn and carry (re-estimate). Effort spent above a break arrives at a step that cannot use it (Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*).

**Strain test applied before conclusions.** An early reading wanted Fig 2's anchor rule (the market settles) to govern the whole question. That strains: under a fixed exchange rate the interest rate cannot be used to manage aggregate demand at all, so there is no policy loop to anchor in that slot. Re-census sends that case to D2, where the anchor is the peg plus the foreign monetary policy, and the "anchor" figure line then governs D1 only. Different objects, no strain after re-census.

---

## 2. Figure census (bearing and verdict, before findings)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric | averaging across economies hides the live signal; a pooled fit is frame-internal |
| 2 The Ground | anchor definition, independence, agreement valence | consensus among economists is not an anchor; measurement is |
| 3 Dependency Chain | middle link has no instrument | the transmission mechanism is exactly the unmeasured middle link |
| 4 The Membrane | same loop, cast changes; round-trip gap | invariance is in the loop, not in the cast; transported models carry `R_T > 0` |
| 5 Mint Pipeline | three guards as a product; settlement | a coefficient without a ground reading is a candidate, not settled |
| 6 Closure / Reachability | import is the only operator that moves the wall | another economy's effect cannot be derived from one model's closure alone |
| 7 Room Chain | variation inside, selection between | cross-economy evidence is selection between differing rooms; agreement inside one room is not a verdict |
| 8 Union Surplus | idempotent closure; search finds nothing is not absence | more estimation inside one model cannot manufacture the missing regime term |
| 9 Leave / Arrive | union vs partition; describe before looking | unbundle time-variation from cross-economy variation; do not pick a theory then map it |
| 10 Ground Maintainer | ground does not decay, channel does | time-variation is often a channel failure, not a changed ground |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | the same rate change has different (even opposite) effects in different habitats |
| 12 The Bond | ordered and comparison bonds; isomer and functional group | the transmission chain is ordered, not symmetric; "control" is a comparison |
| 13 Minimum Viable Set | closed set, unbounded arrangements | there is no seventh macro primitive to absorb the variation; the variation is in arrangement and contact |

---

## 3. Findings F1 to F9

Each finding carries a verbatim figure line, a mode, a world corroboration where one exists, and a refuter written before the conclusion. World sources are secondary and corroborate only; they never flip a figure verdict.

### F1, Reliability belongs to policy-plus-habitat, not to the instrument (decisive, `specified`)

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*
Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

The "instrument" is the policy rate. The property asked about ("reliably controls") is a property of the pair (policy action, transmission habitat). A rate change with no banking channel, no credit response, or a pegged exchange rate is not the same action in effect, even though the number moved by the same amount. Fig 11 :43: *"The habitat is enumerated, never composed."* So enumerate banks, borrowers, exchange-rate regime, labour market, and expectations before estimating; do not compose them out of a model.

World corroboration (secondary): Bernanke and Gertler, *Inside the Black Box: The Credit Channel of Monetary Policy Transmission*, Journal of Economic Perspectives 9(4), 1995: *"informational frictions in credit markets worsen during tight-money periods"* and the mechanism has *"the balance sheet and bank lending channels."* Same pool warning: this is one economics witness.

**Refuter:** an invariant sign and comparable magnitude of the inflation and employment response to the same rate change across documented habitat substitutions that remove the credit channel and the exchange-rate channel, with the ground reported per slot.

### F2, The same action changes valence with the residual and the regime (`specified`)

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*
Fig 11 :51: *"No standing list of good actors survives a change of residual."*

A rate increase is not universally "contractionary." Under a flexible exchange rate with a credible inflation target it appreciates the currency and dampens demand and import prices. Under a fixed exchange rate the interest rate cannot be used to manage aggregate demand at all. CORE Econ, *The Economy 2.0*, section 7.2: *"fixing, or targeting a given value of the exchange rate means that the interest rate cannot be used to manage aggregate demand in the economy."* Under a low-credibility, high-inflation flexible regime, exchange-rate movements *"often reinforce inflationary shocks, making the situation worse"* (same CORE section). This is the direct figure answer to "varies substantially across economies": the variation is in the relation, not in a noisy constant.

World corroboration (secondary): Yoldas, FEDS Note, Federal Reserve Board, 2024: *"domestic factors led to notable variation in the timing and extent of monetary policy responses"* and, for emerging markets, *"factors other than surprise changes in interest rate differentials tend to dominate moves in EME currencies."*

**Refuter:** identical sign and comparable magnitude of the response to a rate hike across fixed, flexible-credible, and flexible-noncredible regimes with other habitat conditions explicitly controlled.

### F3, The residual is per slot; a pooled coefficient throws away the signal (`general` indexing, `specified` application)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*
Fig 1 :23: *"The ground enters as the only metric."*

A single "average effect of monetary policy" is a frame-internal score, not a ground reading for any economy. Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

World corroboration, low overlap (medicine): Dahabreh, Hayward and Kent, *International Journal of Epidemiology* 45(6), 2016: *"determining the best treatment for an individual (the task of a doctor) is fundamentally different from determining the average effect of treatment in a population (the purpose of a trial)."* Their key message: *"population average treatment effects may not apply to all patients."* This is a mechanism analogue, not a measurement of monetary policy.

**Refuter:** a pooled estimate that, after regime stratification, predicts each economy's inflation and employment response with no remaining per-slot residual against the ground.

### F4, Apparent time-variation is often channel failure, not a changed ground (`specified`)

Fig 10 :24: *"the ground does not decay, the channel does"*
Fig 10 :26: *"saturated metrics, pooled readings"*
Fig 10 :27: *"the output is not a verdict, it is"* and Fig 10 :28: *"you have lost touch"*

When the measured effect of a rate change drifts across decades, two different facts can look identical from inside the model: the economy changed, or the instrument measuring it stopped resolving. The figures require the channel to be kept reachable before calling it a structural change. Financial innovation, changed policy implementation, and redefined price indices are channel candidates.

World corroboration (secondary): Boivin, Kiley and Mishkin, NBER Working Paper 15879, 2010: *"Monetary policy innovations have a more muted effect on real activity and inflation in recent decades as compared to the effects before 1980."* ECB, *Transmission mechanism of monetary policy* (institutional page, accessed 2026-11-23): *"The transmission mechanism is characterised by long, variable and uncertain time lags. Thus it is difficult to predict the precise effect of monetary policy actions on the economy and price level."*

**Recorded tension, not a flip.** Boivin et al. attribute the shift mainly to changed policy behaviour and expectations, *"leaving little role for changes in underlying private-sector behavior."* A habitat-only reading conflicts with that attribution. Returned to census: D1 (the controller and its Γ) and D2 (the habitat) are separate domains; a change in either changes the cast named by Fig 4 :20 (*"Only the actors, the currency and the anchor change."*). Both routes corroborate time-variation; neither is granted the verdict. The conflict does not flip it.

**Refuter:** a documented time shift in the effect with the measurement channel demonstrably unchanged (same instruments, same definitions, same coverage) and the ground reading itself moved.

### F5, The chain breaks at the middle link, which has no instrument (`specified`)

Fig 3 :24: *"Why the middle link is where chains usually break."*
Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

Perception (inflation and employment data) has obvious tests. Planning (setting the rate) has obvious tests. The link between them, having terms for what a rate change affords in this specific economy and being able to say what counts as progress, has neither. That is the transmission mechanism. More elaborate rate rules spend effort above the break.

**Refuter:** a direct instrument that measures the middle link (the available transmission affords) without reading them off the outcomes the link is supposed to explain.

### F6, A transported model is a lossy transform; measure the round-trip gap (`specified`)

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
Fig 4 :31: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."*

Taking a model estimated in one economy and applying it in another is abstraction plus concretisation. The round trip gap `R_T = gap(x, (T_E ∘ T_A)(x))` is the honest report of what did not survive. Setting `R_T` to zero is the dead-reckoning error.

World corroboration, low overlap (ecology): Beisner, *Alternative Stable States*, Nature Education Knowledge 3(10):33, 2012: *"Which alternative state is occupied depends on the history of the system and the perturbations to which it has been exposed."* And on hysteresis: *"a condition wherein the reverse path is not the same as the forward path."* An intervention calibrated in one state does not transport to the other.

**Refuter:** a model transported from one economy to another with `R_T` measured at zero against the receiving economy's ground, not assumed at zero.

### F7, This is a union; unbundle before searching (`general`)

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*
Fig 9 :45: *"Describing the residual is the expensive part. Leaving, looking up and recognising are one step each, and cheap only in that order."*

The two halves of the question ("reliable?" and "varies?") are not contradictory answers to one question. They are two conditions: a maintained channel (C1) and a matching habitat (C2), plus the middle-link vocabulary (C3). A case where the channel failed is categorically different from a case where the regime changed, even if both show a large residual.

**Refuter:** one intervention that clears the time-variation residue and the cross-economy residue and leaves no categorically different remainder.

### F8, Agreement is not the anchor; buying independence is the correct move (`general`)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

A survey of economists agreeing that "rates work" is a convention, not a measurement. Karau, Deutsche Bundesbank Research Brief 77, 2025: *"there is no consensus on how monetary policy impulses take effect over time and on their overall importance for exchange rate developments."* That absence of consensus is itself not evidence about the ground; it is a reason to buy low-overlap witnesses and go to the data. Note the scope: Karau's brief concerns exchange-rate effects and concludes impulses take effect immediately there, while the ECB page concerns price-level and activity lags. Different quantities, so no strain on the figure verdict; recorded as a scope difference.

**Refuter:** a benchmark in which committee agreement alone, with no new measurement, moves the estimated transmission coefficient.

### F9, The specific per-economy, per-date coefficient is a `gap` (`general`)

Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
Fig 13 :134: *"Unreachable is a verdict here, not a silence"*

After a genuine census no figure line yields a number for "one percentage point of tightening lowers inflation by x and raises unemployment by y in economy s at date t." That is owed, not hidden. What the figures yield is the shape: per-slot indexing, habitat-relative valence, channel maintenance, union unbundling, and a measured round-trip gap. The honest stop is "unreached until a source-discriminating instrument settles it," not "no effect" and not "universal effect."

**Refuter:** a source that supplies that per-slot, per-date coefficient with the ground settling it, reported with its instrument and its provenance.

### F9b, What survives, with modes attached

| claim | mode | figure |
|---|---|---|
| The residual must be read per economy and per date, never pooled away | `general` | Fig 1 :19, :28 |
| The loop is invariant; actors, currency and anchor change | `general` | Fig 4 :20 |
| Capability is a property of policy-plus-habitat | `specified` | Fig 11 :39-40 |
| The same rate change changes valence with regime and residual | `specified` | Fig 11 :49-51 |
| Apparent time-variation may be channel failure | `specified` | Fig 10 :24-28 |
| The middle transmission link lacks a direct instrument | `specified` | Fig 3 :27 |
| The question is a union to be unbundled | `general` | Fig 9 :55-57 |
| A numeric coefficient for a named slot and date | **`gap`** | Fig 9 :32, Fig 13 :134 |

---

## 4. Pre-registered refuter

Written before the derivation was run and before any conclusion, per the standing rule that a falsifier written before the run is a design instrument. The union/conditional verdict is refuted if any of the following holds:

1. The same policy rate change yields invariant sign and comparable magnitude across fixed, flexible-credible, and flexible-noncredible regimes with other habitat conditions explicitly controlled (F1, F2).
2. A pooled cross-economy estimate predicts each slot's inflation and employment response with no remaining per-slot residual after stratification (F3).
3. A documented time shift in the effect is observed with the measurement channel demonstrably unchanged and the ground itself moved (F4).
4. A single lever clears both variation residues and leaves no categorically different remainder (F7).
5. A per-slot, per-date effect coefficient is settled by a source-discriminating instrument and reported with provenance (F9).

If any fires, the "reliably controls" reading wins in that domain and this package is withdrawn or narrowed accordingly. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Do not answer the either/or as a partition. Unbundle into channel maintenance, habitat match, and middle-link vocabulary, per F7.
2. Report per-slot residuals, not a pooled multiplier, per F3.
3. Before calling a time shift structural, audit the channel: instruments, definitions, coverage, and implementation, per F4.
4. Enumerate the habitat at each slot (banks, credit, exchange-rate regime, labour market, expectations), per F1 and Fig 11 :43.
5. Measure `R_T` when transporting a model between economies, per F6. Do not assume zero.
6. Ask for a refutation, not endorsement. Use the institutional, opt-in venues in `03_public_contact_points.csv`, and lead with the residual and its refuter per `02_outreach_email.md`.
7. Keep the `gap` visible. A request for "the answer" is answered with the shape and the instrument that would close it.

---

## 6. Canonical usage check

Read after sections 0 through 5:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* and the limit that the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the three distinct questions of step 7 (SEARCHED, INWARD, OUTWARD), and step 5: *"SETTLE, the ground settles it. Verified only by what pays. A gate is not the ground."*

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "the effect is simply unstable" | **Narrowed.** Instability is a union of channel failure and habitat change, not one property. Fig 9 :55. |
| "a fixed exchange rate means monetary policy has no effect at all" | **Narrowed.** The interest rate cannot manage aggregate demand there, but other policy tools and the foreign anchor still act. CORE 7.2; D2 anchor. |
| "Boivin et al. conflict with the habitat reading" | **Dissolved by re-census.** D1 (policy behaviour and Γ) and D2 (habitat) are separate; both change the cast of Fig 4 :20. No verdict flipped. |
| "Karau and ECB conflict on lags" | **Dissolved by scope.** Exchange-rate response versus price-level and activity response are different quantities. No strain on the verdict. |
| "a pooled estimate is the answer" | **Refused.** Fig 1 :19 and the HTE analogue in medicine. Pooled estimates are filters for budget, not witnesses for the verdict (Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*). |
| "the framework can supply the coefficient" | **Refused as `gap`.** Fig 9 :32 and Fig 13 :134. The framework returns a shape. |
| X1 natural rate as anchor | **Not a domain yet.** No nameable anchor was found. It remains a term in Γ with its own residual, not the ground. |
| X2 global cycle as sole anchor | **Absorbed/refused.** It is a condition in D2, not a substitute for the outcome anchor. |

### Round trip, qualitative

Sent up (x): the verbatim figure set governing indexing, cast change, habitat-relative valence, channel maintenance, and union unbundling. Abstraction (T_A): "reliability is conditional, not invariant; per-slot; channel must be maintained." Concretisation (T_E): a named central bank's actual reaction function and multiplier. Things dropped on the way back down: the identity of the regime term, the identity of the channel that failed, and any numeric coefficient. `R_T` is therefore nonzero and is recorded qualitatively, not measured numerically, because no ground reading exists in this package. Treating "the formula is the condensed version of the metalaws" as identity would set `R_T` to zero and commit the dead-reckoning error Fig 4 :30 names.

### Updated verdict

The shape survives and the specific coefficient does not. Reliability is a property of policy-plus-habitat with a maintained channel; the same action changes valence across regimes; the residual must be read per slot; the question is a union of conditions, not a single lever. Mode `specified` on the structure, `general` on the indexing and union rules, `gap` on the number. Strains after re-census: none hidden, one scope difference recorded (Karau versus ECB), one attribution tension recorded and dissolved by the D1/D2 split.
