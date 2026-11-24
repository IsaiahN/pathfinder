# Figure-grounded audit: technology diffusion and the productivity lag

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Structural findings are `general`; the application to technology diffusion is `specified` and ungrounded.

**Status of this derivation: a simulation, not a ground reading.** The framework's own essay on validation says LLM output is a simulacrum and "the truly testable output would need to be derived from the real architecture or working the formula yourself" (*The Recursive Self-Improvement Trap*, read 2026-11-23). This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement was taken here; the empirical numbers below come from world sources that were opened and are recorded in `10_source_ledger.csv`.

**Framework sources read:** `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources and the eight essays are listed in `10_source_ledger.csv`.

---

## 0. The question in effect terms

Question: why do some technologies spread quickly while others take decades to affect economy-wide productivity?

Restated as an effect: for each technology-in-context slot s, why is the residual R = |Γ(b,a) − o′| (the gap between what the adopting system expected and what its ground returned) closed quickly in some slots and left live for decades in others, and why does the economy-wide reading of that closure lag the local one?

- The slot is a technology in a using context: a firm, a farm, a sector, a region, a country. It is not the technology in the abstract.
- The prediction Γ is that an available technology with a positive advantage will be taken up and will show up in measured productivity.
- The observation o′ is what the ground returned: adoption dates and measured output. World data says the mean lag from invention to adoption across a large technology sample is about 45 years (Comin and Hobijn 2010, opened this session), and that the productivity effect can be invisible at the aggregate for a long time (Solow's aphorism, via Triplett 1999, opened this session).
- R is indexed per slot, never aggregated into a single "speed of diffusion" number. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A global average adoption curve is a filter for the budget, not a witness for the verdict (Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").

**The sought-for shape, bound as an ordinary term.** An answer is a rule that assigns a slot to one of two conditions and states what would refute the assignment:

- Condition C1: the technology composes inside the adopter's existing reach, the per-slot live mass is positive and discriminable, and the channel to the ground is intact. Expect quick local spread.
- Condition C2: the technology needs an atom the adopter's closure does not hold (a complement, a new routine, an institution), or the channel to the economy-wide ground has decayed. Expect a long lag even after local adoption.

This is a shape and a route, not a technology name and not a number. It is written down before the derivation so it can be refused by the same test as everything else (Formula step "Direction").

---

## 1. Domain census

### 1.1 R by arity, symmetry and scale

- **Arity:** at least three places, technology / using context / time, plus an instrument that reads the ground. The relation is not a two-place "technology causes productivity" arrow. It carries an ordered bond (sequence, →), a production bond (⇒, the technology produces a new capability), a subtraction (−, the gap), and a comparison (⋛, advantage relative to the incumbent). The Operators table states that a goal is a comparison and progress is a subtraction, so a vocabulary without these bonds cannot even state the adopter's objective.
- **Symmetry:** not symmetric. Swapping adopter and technology changes the thing. Advantage is a threshold relative to an alternative, not a symmetric join of two equal operands. Fig 12 names the bond as the substance; the same atoms with a different bond are a different thing.
- **Scale:** four scales in play. The single adopter's loop; the population/habitat of adopters; the economy-wide measurement; and the lossy membrane between them (Fig 4). The transform between scales loses information, so an economy-wide reading is not a sum of local readings.

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Adopter decision loop | a using unit, its library Γ of routines and skills, its perceived advantage | reduction of per-slot R; the adoption action | the using unit's own ground, its realized payoff | admitted |
| D2 Habitat and transmission field | peers, networks, communication channels, education, trade openness, standards, institutions | contact and reinforcement (information plus social affirmation) | the ground, never agreement; habitat supplies the actors | admitted |
| D3 The technology's own reach | the artifact's atoms and bonds, complements, infrastructure, skills | reach = closure(Γ), and the cost |φ| of stating the term | settlement against the ground: does it actually work | admitted |
| D4 Economy-wide measurement channel | statistical agencies, productivity metrics, sector boundaries, instruments | contact with the ground; the channel decays | the ground, which does not decay | admitted |
| X1 Technology quality as a free-floating property | the technology alone | intrinsic goodness | none nameable: good relative to what, read where | not a domain yet; absorbed into D1 and D3 |
| X2 Time itself as the cause | none; time is a state, not an agent | none | none | not a domain; absorbed into ordered bonds and D4 |
| X3 "More research" as a lever | more frames using the same evidence | agreement | none; agreement is not an anchor | admitted only as a budget filter, never a verdict |

No nameable anchor means it is not a domain yet. X1 and X2 fail that test. X3 is kept as a filter only, because more search at the same reach changes the budget, not the verdict.

### 1.3 Partition or union

This is a **union, not a partition**. The question bundles two overlapping conditions: (A) how fast a technology is taken up, and (B) when its effect becomes visible in economy-wide productivity. A technology can spread fast and register slowly (information technology in the 1980s and 1990s), or spread slowly and pay quickly where it is used (hybrid corn in high-profitability states, Griliches 1957). These are not the same case with a different parameter.

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." A single lever, for example "subsidize adoption", clears the region where only condition A binds and leaves the intersection standing, where B still binds.

### 1.4 Dependency order

Fig 3 gives the order: perception, vocabulary, objective, planning, learn and carry. The break in most chains is at the middle link, having terms for what a technology affords and being able to say what counts as progress with it. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Effort spent above the break, for example more adoption subsidies, arrives at a step that cannot use it.

---

## 2. Figure census

| figure | bearing on this question | verdict after census |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal counts disqualified | per-slot indexing governs; aggregate curves are filters |
| 2 The Ground | anchor must not update; agreement is not triangulation | market/payoff is the anchor for D1; corroboration from shared pools is one witness |
| 3 Dependency Chain | middle link has no instrument | the vocabulary of affordance and progress is the likely break |
| 4 The Membrane | lossy transform across scales; measure the round trip | local payoff and economy-wide reading are different scales |
| 5 Mint Pipeline | three guards as a product; support before search | positive live mass per slot is a gate, not an average |
| 6 Closure / Reachability | import is the only operator that moves the wall | complements are imports; no amount of same-frame search adds them |
| 7 Room Chain | same closure handed along compounds agreement, not evidence | more diffusion studies inside one frame do not add evidence |
| 8 Union Surplus | closure is idempotent; residual first, frame second | search inside a closure cannot manufacture a complement |
| 9 Leave / Arrive | union versus partition; describe before looking; shape not a name | two conditions kept separate; the complement is not named |
| 10 Ground Maintainer | the ground does not decay, the channel does | the productivity lag is partly a channel fact |
| 11 The Habitat | capability is agent-and-habitat; context cascades | adoption speed is a habitat property, not a technology property |
| 12 The Bond | same atoms, different bond; catalyst; two currencies | two technologies can be isomers; a GPT is catalyst-like; bits and actions do not add |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | a new complement would have to be an import, not a rearrangement |
| Operators table | comparison is a goal; progress is a subtraction | relative advantage is a ⋛ comparison, not a symmetric property |
| Symbols table | R is the aim and is always a slice | what cannot be perceived yet is residual and cannot be read |

Strained readings are named in section 5 and in `11_audit.md`, not smoothed over.

---

## 3. Findings

### F1: The residual is per slot, and the global curve is a filter (triangulated)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

World corroboration, low overlap with the framework: Comin, Hobijn and Rovito (NBER 11928, 2006) report that "within a typical technology, the dispersion in the adoption levels across countries is about 5 times larger than the cross-country dispersion in income per capita", and that once the intensive margin is measured "technologies do not diffuse in a logistic way". Griliches (1957) fit separate logistic parameters by state and district, because the differences among areas were the object of study. A single S-curve hides exactly the signal that says where to look.

Mode `general` for the indexing rule, `specified` for the diffusion application. Refuter: a demonstration that an averaged adoption statistic predicts which specific technology-context slot will lag better than a per-slot residual measured on the same ground. If that holds, per-slot indexing is wrong here.

### F2: The question is a union of two conditions, not one hard problem (triangulated)

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

The world evidence forces the split. Comin and Hobijn (AER 2010) find "substantial variation across technologies and countries" in adoption, and that cross-country variation in adoption "accounts for at least 25 percent of per capita income differences". That is condition A. Triplett (Brookings 1999), discussing Solow, lists as one live explanation: "This is the analogy with the diffusion of electricity, the idea that the productivity implications of a new technology are only visible with a long lag." That is condition B. Fast adoption does not imply fast measured productivity, and slow adoption does not imply low local payoff.

Mode `general` for the union rule, `specified` for the split. Refuter: one intervention that clears both conditions with no categorically different residue left behind, so that a case in both conditions is just a harder case of one.

### F3: Quick spread when the technology composes inside existing reach (triangulated)

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists." Fig 6 :14 names "the only operator that moves the wall".

A technology whose advantage can be composed from what the adopter already holds (existing skills, existing capital, existing routines) needs no new atom. Its adoption is a search inside the closure, which is cheap and fast once the live mass is positive. A technology that needs a complement the adopter does not hold is out of reach until an import arrives from a frame whose closure differs (a supplier, a standard, a reorganised process, a new institution). That import is the long pole.

Mode `general` for idempotence, `specified` for the application. Refuter: two technologies with the same reachable atom set, the same per-slot advantage and the same habitat, one spreading in years and the other in decades, with the difference traced to a term that is already in the adopter's closure.

### F4: Adoption needs positive, discriminable live mass per slot (triangulated)

Fig 5 :21: "the gap has real mass somewhere" is the first guard. Fig 5 :41: "Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

The gate is product-shaped, so a zero on support stops adoption regardless of how good the rest of the machinery is. World corroboration comes from two quite different fields. Griliches (1957) explains differences in origins and in rates of approach to equilibrium by "variability of profitability" tied to market density and to innovation and marketing cost, and the Rogers review (TheoryHub, 2026) reports that "relative advantage, compatibility, trialability and observability of an innovation are positively related to its rate of adoption", with complexity the only negative factor. These are two descriptions of the same gate: the per-slot gap must have mass and must be readable. Fig 12 :125 adds a price warning: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." A technology can be cheap to describe and expensive to settle, so cheap description must not be mistaken for cheap adoption.

Mode `general` for the gate, `specified` for the diffusion mapping. Refuter: a technology with no measured positive per-slot advantage spreading at the same rate under matched habitat, or a clean demonstration that the bit-price and the action-price add into one currency.

### F5: Speed is a property of adopter-and-habitat, not of the artifact (triangulated)

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." Fig 11 :43: "The habitat is enumerated, never composed." Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three".

Here "agent" is the using unit and "artifact" is the technology. Improving the artifact in isolation (a better device, a faster chip) does not change contact if the habitat (skills, complements, infrastructure, incentives, standards) is unchanged. World corroboration from three low-overlap fields:

- Economics: Comin and Hobijn (NBER 12314, 2006) find that "Where adoption lags matter, they are largely determined by lack of educational attainment and lack of trade openness." Those are habitat terms, not artifact terms.
- Social networks: Centola and Macy (AJS 2007) state that "Complex contagions require social affirmation from multiple sources." Adoption of an unproven technology is their own example.
- Animal behaviour: Beck, Sheldon and Firth (eLife 2023) show that "The emergence and spread of novel behaviours via social learning can lead to rapid population-level changes whereby the social connections between individuals shape information flow", and that the learning rule changes who adopts first.

Mode `general` for the capability claim, `specified` for the diffusion application. Refuter: adopters isolated from the habitat (no peers, no supplier, no complementary skill available) adopting at the same speed as embedded adopters, or an artifact-only improvement moving the per-slot ground with the habitat held fixed.

### F6: Part of the long lag is a channel failure, not a missing complement (triangulated)

Fig 10 :24: "the ground does not decay, the channel does". Fig 10 :26: "saturated metrics, pooled readings". Fig 10 :28: "you have lost touch". The seat's output in that state is not a verdict about productivity; it is a report that contact has been lost.

The economy-wide productivity series is a coarse reading of a real ground. Triplett's Brookings review enumerates the ways the reading can fail: computers are a small share of the capital stock, hedonic price indexes may fall too fast, output in heavy IT-using sectors such as finance is poorly specified, some of what computers do is not counted, and the long-lag electricity analogy may simply be right. Rogers' review adds the corresponding measurement warning at the micro level: diffusion research has a "recall problem" when respondents are asked when they adopted, and an "individual-blame bias" that locates the failure in the adopter rather than the system.

Mode `general` for the channel rule, `specified` for the productivity application. Refuter: a documented case where the economy-wide productivity ground moves while channel instruments are unchanged and no new atom was imported into the using units, so the lag cannot be attributed to either contact loss or missing complements.

### F7: The specific complement and the numeric lag are a declared gap (single-source on the limit, gap on the name)

After a genuine re-census no figure line names the missing complement, yields a 45-year lag, or ranks technologies by adoption speed. Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 13 :138: "so something has to be imported before it is asked again." Fig 8 :39: "So a search that finds nothing is never a proof of absence."

What can be said is the shape of what is missing: an atom not in the adopter's closure, or an instrument that restores contact with the ground. The framework returns the kind of thing, not the name. Comin and Hobijn's 45 years and 25 percent are world measurements, not figure derivations, and they are recorded as such.

Mode `general` for the limit, `gap` for the name. Refuter: a figure line that names a specific complement or derives a numeric lag from the six-term substrate. If one is produced, this finding is withdrawn.

### F8: More studies in the same closure do not add evidence (triangulated)

Fig 7 :12: "same closure, handed along;" Fig 7 :13: "agreement compounds, evidence does not". Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool".

A campaign that gathers diffusion economists who already agree on the S-curve produces a convention, not corroboration. The legitimate ask gives the shape claim a budget to be tried against a ground a reader controls. Refuter: a demonstration that two frames drawing on genuinely disjoint evidence can be produced by adding more frames to the same literature, rather than by separate experience.

---

## 4. Pre-registered refuter

Written before the conclusion, per the framework's rule that a falsifier written before the run is a design instrument. The shape claim is refused if any of the following holds:

1. An averaged adoption statistic predicts which specific technology-context slot will lag better than a per-slot residual measured on the same ground (refutes F1).
2. One lever clears both the spread condition and the productivity-visibility condition with no categorically different residue (refutes F2).
3. Two technologies with the same reachable atom set, the same per-slot advantage and the same habitat differ in speed by decades, with the difference traced to a term already in the adopter's closure (refutes F3).
4. A technology with no measured positive per-slot advantage spreads at the same rate under matched habitat (refutes F4).
5. Isolated adopters adopt at the same speed as embedded adopters, or an artifact-only improvement moves the ground with the habitat fixed (refutes F5).
6. The economy-wide ground moves while channel instruments are unchanged and no new atom was imported (refutes F6).
7. A figure line names the missing complement or derives a numeric lag from the substrate (refutes F7).

If any fires, the affected finding is withdrawn and the verdict is re-run from the census. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Step 7 discipline: SEARCHED, INWARD, OUTWARD

No figure closes the residual at the level of a specific technology (F7), so step 7 of `THE_FORMULA.md` is applied in its stated order, with the three kept distinct.

- **SEARCHED first, cheapest.** Is the complement already in the adopter's closure and merely unfound? For incremental technologies yes: the remedy is more search, distributed with independent searchers. Fig 6 :49 states the case: "more search at the same reach: is it in here and unfound? The closure does not change." Importing here would add an atom that was not needed.
- **INWARD second.** Extend the instrument from one already returning something: disaggregate productivity by technology and use-site, and measure the per-slot residual rather than an aggregate curve. This is sharpening in our own terms and must never be read against OUTWARD.
- **OUTWARD third.** If the complement is genuinely absent, characterize R in effect terms and find the frame whose closure predicts its shape: the supplier, the standards body, the engineering discipline, the reorganised workplace. Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Carry only what was not authored, with a source gate and a shadow test.

The three have different instructions and are never averaged into one recommendation.

---

## 6. Recommendation

1. Lead with the union split (F2) and the per-slot indexing (F1). Do not present a single diffusion curve as the answer.
2. State the mode on every substantive claim. The shape is `specified`; the structural rules are `general`; the 45-year figure is a world measurement, not a figure verdict.
3. Ask a checker which of C1 or C2 their own technology-context slot falls into, and what would refute that assignment. Do not ask whether they agree.
4. Offer the sources only after their verdict on stage 1 is recorded. Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."
5. Use the public venues in `03_public_contact_points.csv`. No personal emails, no receptiveness ranking, no bulk send.

---

## 7. Canonical usage check

The canonical usage rule was read locally at `FRAMEWORK/reference/FIGURES_README_canonical.md`. It states that the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary". It also requires re-census where a reading makes two figures appear to contradict: a strain means the line was aimed at another quantity. The framework returns "what a missing thing would have to look like (a shape, not a name)" and then stops at the limit of the instruments, recording the lineage so the stop is honest. Indiscernibility is not identity. Fig 4 :30 requires the round trip gap to be measured: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The round trip is recorded in `11_audit.md`.

### Retractions and confirmations

| earlier reading | status after canonical check and re-census |
|---|---|
| "Fig 11 capability is agent-and-habitat, so diffusion speed is entirely a habitat fact" | **Narrowed.** The capability claim governs D1 and D2, not D3. What the artifact composes (Fig 6 :21, Fig 8 :32) is a separate condition. Both are recorded; neither is erased. Triangulated. |
| "The productivity lag is channel failure" | **Narrowed to one condition of the union.** Fig 10 governs D4; Fig 6 and Fig 8 govern the missing-complement case. A single-cause reading would be a partition error against Fig 9 :55. |
| "The Rogers S-curve is figure-derived" | **Retracted.** The S-curve is a world empirical shape from the innovation-studies pool. Comin, Hobijn and Rovito report that technologies "do not diffuse in a logistic way" once the intensive margin is measured. No figure line yields a logistic, so the S-curve is used only as a filter for the budget. |
| "shape, not a name forbids describing the mechanism at all" | **Retracted as overstated.** The limit governs a missing primitive (Fig 9 :32, canonical README). Conditions C1 and C2 are effect descriptions, not names of a specific complement, so they are within what the framework may say. |
| "per-slot indexing is a methodological preference" | **Confirmed as figure-derived.** Fig 1 :19 and :22 are primary lines; the world data is secondary corroboration only. |
| "more diffusion research will resolve which complement is missing" | **Refused.** Fig 7 :12-13 and Fig 2 :40. More frames on the same evidence pool buy spelling, not evidence. |
| Apparent strain Fig 11 vs Fig 6 | **Not strained after re-census.** Fig 11 governs capability (agent and habitat); Fig 6 governs reach (what composes from what). Different objects. One strain remains live and is named in `11_audit.md`: the coexistence of a decayed channel and a genuinely absent complement inside a union, which the figures do not order for us. |

### Updated verdict

The shape survives: two conditions kept separate, per-slot residuals, quick spread when the technology composes inside existing reach with live mass and an intact habitat, long lag when a complement must be imported or the channel has decayed. What does not survive is any single-cause story, any technology name, and any numeric lag presented as figure-derived. Strains after re-census: one live, declared above and carried into the audit.
