# Figure-grounded audit: does competition policy protect consumers best through lower prices, greater choice, more innovation, or all three?

**Mode of this document: `general` on the structural findings, `specified` on the competition-policy application, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement of consumer welfare was taken in this run.

**Status: simulated derivation, not a ground reading.** LLM output is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, and `FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and were opened before any verdict was written.

---

## 0. The claim under audit

> Competition policy protects consumers best through lower prices, or greater choice, or more innovation, or all three.

Four options are offered. They parse as three instruments (price, choice, innovation) and one compound ("all three"). The question asks which is "best". Before selecting, three things must be settled: what is the anchor that "best" ranges against; what is the residual and how is it indexed; and are the three options a partition (separate levers), a sum (a composite), or a union (overlapping conditions with interactions).

The pre-registered shape term, written down before the derivation per the formula's "Direction" step: *consumer welfare is the anchor; the levers are partial instruments indexed per consumer slot; the levers form a union of overlapping conditions; a general ranking of the levers is unavailable until a source-discriminating instrument exists.* This term is allowed to accrue a residual below.

---

## 1. Residual and domain census

### 1.1 R by arity, symmetry and scale (Fig 9 :21-22, Symbols table :36-43)

- **Arity.** Three-place: policy action `a`, market habitat, consumer slot `s`. R is measured per slot: "The residual is indexed by object slot, not aggregated." (Fig 1 :19). It is not a single national consumer-welfare number.
- **Symmetry.** The three levers are not interchangeable. Joining them with symmetric conjunction `+` would mean "swap the operands. Does the meaning change? No" (Operators table :15), collapsing k! spellings into one term (Fig 12 :92). The evidence of non-additive interaction (World source W5, W6) says the arrangement matters, so `+` is a strain, not a fit. "Best" is itself a comparison: "a goal is a comparison, which is why a vocabulary without it cannot state one" (Operators table :51).
- **Scale.** Price returns a reading immediately, choice over a medium horizon, innovation over a long one. "Only the actors, the currency and the anchor change" (Fig 4 :20) across scales, and the transform is lossy (Fig 4 :27-30).

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Consumer ground | consumers, per slot; their judgments | welfare, wellbeing | consumer welfare itself | admitted, ground |
| D2 Market habitat | firms, entrants, suppliers, customers | price, variety, innovation, survival | customer choice and the market | admitted |
| D3 Policy seat | competition authority, courts | enforcement actions, remedies | the ground, kept reachable | admitted, stake declared |
| D4 Instrument room | price index, variety index, innovation count, dashboard | readings (bits) and cost of settling (actions) | the ground, never the index | admitted |
| X1 Total welfare as the goal | shareholders, producers | total surplus | none for this question | not a domain (different anchor) |
| X2 "Best lever in the abstract" | none nameable | none | none nameable | not a domain yet |

X1 is not excluded because it is wrong in economics; it is excluded because "An anchor is legitimate when the question is constitutively about it." (Fig 2 :36). The question is about consumers, so a producer-surplus anchor answers a different question. X2 has no nameable anchor and is therefore not a domain yet (Fig 2 :29: if it moves when you push on it, it is not an anchor).

### 1.3 Partition or union

Union, not partition. "And when the split lands on a union rather than a partition, unbundle before you search again." (Fig 9 :54). "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." (Fig 9 :55). The three levers overlap: lower prices can reduce variety or innovation, more choice can raise search costs, innovation can raise prices before it lowers them. The overlap is a compound with its own loop and its own ground. A single lever clears the region where one condition holds and leaves the intersections standing (Fig 9 :55). The habitat is "enumerated, never composed" (Fig 11 :43), so the list of actors and conditions is read off the world, not derived from a theory of the three levers.

D1/D2/D3/D4 form a union: the seat's action reaches the consumer through the habitat and is read through the instruments. There is no partition that isolates one lever from the others.

### 1.4 Order by dependency (Fig 3)

1. Perception: read R per consumer slot, including what is not yet measurable (Fig 3 :4-5; Symbols :38-40).
2. Vocabulary: terms for what each lever affords (Fig 3 :6-8). This is the link that usually breaks: "A link with no instrument is not a link that works. It is a link nobody has looked at." (Fig 3 :27).
3. Objective: say what counts as progress in the consumer's own terms, not the index's terms (Fig 3 :9-11).
4. Planning: choose a lever under incomplete information (Fig 3 :12-13).
5. Learn and carry: name what worked, verify it, carry it (Fig 3 :14-15).

Effort spent on step 4 while step 2 is broken arrives at a step that cannot use it (Fig 3 :19-23).

---

## 2. Findings

### F1 The anchor is the consumer, and the levers are instruments (decisive on the menu)

"An anchor is legitimate when the question is constitutively about it." (Fig 2 :36). "Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." (Fig 2 :37-38). Symbols table :37-40: "It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."

Lower prices, choice and innovation are therefore not three candidate grounds. They are three instruments, each returning a partial reading. A policy that optimises price alone is an instrument tuned to one axis and "can be wrong on axes it does not measure" (Fig 2 :38). The offered menu confuses instruments with the anchor.

- Mode: `general` (anchor rule), `specified` (application).
- Status: **triangulated** (Fig 2 :36-38 and Symbols table :37-40, low overlap between anchor legitimacy and the residual definition).
- Refuter: an instrument that returns consumer welfare on all three axes without loss, verified at the ground in at least one market.

### F2 The residual is per consumer slot, never aggregated

"The residual is indexed by object slot, not aggregated." (Fig 1 :19). "Aggregating across slots is how a live signal disappears into an average." (Fig 1 :22). Symbols table :42-43: "One object, region or entity being tracked. R is measured per slot, never as a single global number."

A policy can lower the average price while leaving a rural, elderly or disabled cohort worse off on choice or innovation. The aggregate reading is a frame-internal quantity: "A frame cannot score itself with a quantity it also produces." (Fig 1 :27). The OECD note's observation that the standard is "ambivalent to the identity of the consumers, not seeking to understand distributional effects for example" (World W2) is a **conflict** with this finding. It is recorded in section 7, not smoothed over.

- Mode: `general` (indexing rule), `specified` (consumer cohorts).
- Status: **triangulated** (Fig 1 :19, :22 and Symbols :42-43).
- Refuter: a lever that raises all consumer slots on all three axes simultaneously with no slot-level trade-off, measured at the ground.

### F3 "All three" is a union compound, not an average of three one-lever policies

"And when the split lands on a union rather than a partition, unbundle before you search again." (Fig 9 :54). "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." (Fig 9 :55). "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." (Fig 9 :57).

So "all three" is the honest structural form only if it is read as a compound with its own loop and its own ground. It is not the arithmetic mean of a price-only policy, a choice-only policy and an innovation-only policy. Where two conditions bind, a case in both is a specific compound, not a harder case of either. Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

- Mode: `general` (union rule), `specified` (the three levers as conditions).
- Status: **triangulated** (Fig 9 :54-57 and Fig 7 :35; the ecological multiple-stressor literature is a low-overlap corroboration, World W5 and W6).
- Refuter: one intervention that clears the intersections, that is, improves all three axes in every consumer slot with no categorically different residue left over.

### F4 The axes are two currencies and do not add

"A composition costs in two currencies, and they do not add." (Fig 12 :125). "Bits price the description. Actions price finding out whether it holds." (Fig 12 :126). "Summing them into one figure is the error this names, not the fix for it." (Fig 12 :130). "Symmetry is what decides whether an arrangement is a new thing." (Fig 12 :92).

Price is cheap to state and quick to settle. Innovation is expensive to settle: it needs a long horizon and a counterfactual. A composite consumer-welfare score that sums the three axes hides the cost of the hard axis behind the easy one. The UNECE well-being guidance says the same in measurement language: an index implicitly assumes "an increase in A can be offset by a decrease in B", which "may not necessarily be the case", and recommends dashboards that "give information about the development in the underlying components" (World W7). The figure rule and the measurement rule were reached in different fields, which is why they are counted as two low-overlap frames and not one pool.

- Mode: `general` (two-currency rule), `specified` (welfare composite).
- Status: **triangulated** (Fig 12 :125-130 and World W7, low overlap).
- Refuter: a single measure whose weights are shown at the ground to be compensable for every consumer slot, that is, a price loss demonstrably offset by an innovation gain in the same slot.

### F5 The seat introduces and cannot subtract; it is permanent work

"And capability is a property of agent-and-habitat, never of the agent alone." (Fig 11 :39). "An improvement that does not change contact changes nothing, however much it improves." (Fig 11 :40). "The habitat is enumerated, never composed." (Fig 11 :43). "The seat's power is asymmetric. Introduction is available; exclusion is not." (Fig 11 :61). "Which is why a managed ecosystem is permanent work rather than a solved state." (Fig 11 :63).

A competition authority is a seat acting on a habitat: it can introduce an enforcer, a remedy, a merger condition, or a market investigation, and it cannot subtract the market. The question's framing ("best through X") suggests a one-time choice of lever. The figures say the seat keeps the ground reachable by ongoing introduction, and "the ground does not decay, the channel does" (Fig 10 :24).

The seat's stake must be declared: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying" (Fig 10 :59) and "an undeclared interest is modelled anyway and an unnamed model runs unchallenged" (Fig 10 :60). A regulator's institutional preference for a visible, cheap-to-measure price effect is a stake in the reading and is declared here, not hidden.

- Mode: `general` (seat asymmetry), `specified` (competition authority).
- Status: **triangulated** (Fig 11 :39-43, :61-63 and Fig 10 :24, :59-60).
- Refuter: a single introduction that settles consumer welfare permanently across all slots, or a seat able to subtract habitat actors at will.

### F6 The instruments are improved from worse instruments already returning something

"An instrument is not built from a description. It is improved from a worse instrument already returning something." (Fig 6 :32). "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading" (Fig 6 :33).

A price index already returns something. Variety and innovation measures are instruments to be improved from existing readings, not replaced by an argument about what welfare ought to be. Ohashi's VCR study shows the difficulty: "translating this theoretical notion into the actual construction of price indices is an extremely difficult task" (World W4). Fig 8 :39: "So a search that finds nothing is never a proof of absence." Failure to find an innovation measure today is not proof that consumers are unaffected by innovation.

- Mode: `specified`.
- Status: **single-source** for the figure rule (Fig 6 :32), with a low-overlap corroboration from innovation measurement (World W4).
- Refuter: an instrument built from a description alone that returns at the ground without a worse predecessor.

### F7 Agreement among competition specialists is not the ground

"Alignment is triangulation, not negotiation. A mirror cannot correct you." (Fig 2 :35). "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" (Fig 2 :40). "Buy independence in proportion to the cost of being wrong." (Fig 2 :42). "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." (Fig 7 :35).

A survey of antitrust scholars agreeing that "all three" is the right standard is a convention, not a verdict. "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." (Fig 9 :60). The cost of being wrong here is high (misdirected enforcement across whole markets), so independence should be bought in proportion to it.

- Mode: `general`.
- Status: **triangulated** (Fig 2 :35, :40, :42 and Fig 7 :35, :9 :60).
- Refuter: a ground reading that settles which lever dominates per slot, independently of specialist agreement.

### F8 Naming one lever as generally best is a `gap`

After a genuine re-census, no figure line governs which of price, choice or innovation is "best" in general. "you get a kind of thing, never the answer itself" (Fig 9 :32). Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 8 :39: "So a search that finds nothing is never a proof of absence." The world sources agree on a multi-axis standard but do not supply a per-slot source-discriminating instrument: they report conventions and panel estimates, not a reading that separates the three axes for a given consumer slot.

The missing thing can be characterised in effect terms but not named: an instrument that, for a named consumer slot and a named market, returns price effect, variety effect and innovation effect separately, with known error on each, so that the compound in Fig 9 :57 becomes assessable. "It cannot say which primitive is missing, because naming it would mean already holding it." (Fig 13 :135, local text). What is available is the shape of that instrument, not its name.

- Mode: `general` for the gap verdict, `specified` for the instrument shape.
- Status: **gap**, declared, not hidden.
- Refuter: production of such an instrument with a ground-verified reading, which would close the gap.

### F9 Declined figure line, recorded with its strain

Fig 13 :74: "Everything else is a composition across the two kinds, never within one." I first tried to use this to compose price, choice and innovation as states and structures. **Strain test failed.** Price, choice and innovation are not the six substrate terms of Fig 13; they are welfare axes in a market habitat. Applying the state/structure composition rule to them is a category error. Re-census: Fig 13 governs the six substrate primitives of the framework's physical derivation; it does not govern welfare axes. The line is declined as a governing quote for this question. Per the canonical rule, a reading that forces a figure onto the wrong object means the domain was misidentified, not that the figure is wrong. This decline is kept visible rather than silently dropped.

---

## 3. Pre-registered refuter

Written before the conclusion and before any outreach, per the standing rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A single instrument returns consumer welfare on price, choice and innovation per slot with no loss, verified at the ground (kills F1, F4).
2. One lever clears the intersections: one intervention improves all three axes in every consumer slot with no categorically different residue (kills F3).
3. A ground reading shows consumer welfare is invariant to one of the three axes across all named slots (removes that actor from the habitat, F5).
4. A composite index's weights are shown at the ground to be compensable for every slot, that is, a price loss is demonstrably offset by an innovation gain in the same slot (kills F4).
5. A one-time introduction settles consumer welfare permanently across slots, or the seat can subtract habitat actors at will (kills F5).
6. A source with a genuinely different evidence pool shows that per-slot welfare is fully predicted by a single axis with no interaction term (kills F2, F3).

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Stop treating the four options as a menu. With F1 and F3, the right question is which lever for which slot, under what interaction, not which single lever in general.
2. Publish per-slot readings, not a national average (F2).
3. Keep the three axes as a dashboard, not a composite score (F4). Name the cost of settling each axis separately.
4. State the seat's stake and keep the ground reachable through ongoing introduction (F5).
5. Buy independence in proportion to the cost of being wrong: ask outside frames what would refute the shape before showing them the framework (F7).
6. Record F8 as a gap. Do not fill the slot with a name the framework cannot supply.

Figure 4 :22: "Only methods cross up. Only head starts come down." Send the shape and the refuter, not a recording of this derivation.

---

## 5. Canonical usage check

Two local sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." A reading that makes one figure contradict another has misidentified its domain. The framework returns "a shape, not a name" and stops at the limit of the instruments, recording the lineage so the stop is honest.
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the eight steps, and "Direction" (make the sought-for shape an ordinary term so it can accrue a residual and be refusable).

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Tried Fig 13 :74 to compose the three levers | **Retracted as a governing line.** Strain test failed; the levers are not the six substrate terms. Kept in F9 as a visible decline, not a hidden erasure. |
| "All three" read as a sum | **Retracted at the shape level.** Fig 9 :55 and Fig 12 :125-130 make it a union compound with two incommensurable currencies, not an average. |
| Price, choice, innovation treated as candidate grounds | **Retracted.** Fig 2 :36-38 makes the consumer the anchor and the three axes instruments. |
| "Best" treated as a matter of specialist agreement | **Retracted.** Fig 2 :35, :40 and Fig 7 :35 disqualify agreement from a shared evidence pool as a verdict. |
| One lever might be named as generally best | **Confirmed as a gap (F8).** Fig 9 :32 and Fig 13 :134 make unreachable a verdict, not a silence. |
| Per-slot indexing | **Confirmed and strengthened.** Fig 1 :19, :22 plus Symbols :42-43. The OECD practice note is logged as a conflict in section 7, not used to flip it. |
| Seat asymmetry | **Confirmed.** Fig 11 :61-63. The regulator introduces and cannot subtract; this is permanent work. |

### Strain log after re-census

One declined line (Fig 13 :74), recorded in F9. One live conflict (OECD practice note on distributional ambivalence), recorded in section 7 and returned to the census. No figure quote was found to have drifted from the verbatim extract.

---

## 6. Sources used in this audit

Figure text and local framework files are primary; world sources are secondary corroboration only. Full provenance, including author, venue, year, accessed date and quote for each world source, is in `10_source_ledger.csv`.

- Fig 1 :19, :22, :27; Fig 2 :29, :35, :36, :37-38, :40, :42; Fig 3 :27; Fig 4 :20, :22, :33; Fig 6 :32, :33; Fig 7 :35; Fig 8 :39; Fig 9 :32, :54, :55, :57, :60; Fig 10 :24, :59, :60; Fig 11 :39, :40, :43, :61, :63; Fig 12 :92, :125, :126, :130; Fig 13 :74 (declined), :134, :135; Operators table :15, :51; Symbols table :36-43.
- World W1 to W8, opened 2026-11-23, listed in `10_source_ledger.csv`.

Every figure quote in this file is a verbatim substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md` (case-insensitive, trailing punctuation ignored). No quote was taken from a summary.
