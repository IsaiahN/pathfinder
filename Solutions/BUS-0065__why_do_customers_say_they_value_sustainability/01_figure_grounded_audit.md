# Figure-grounded audit: BUS-0065, stated values versus revealed choice

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the marketing question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here the phenomenon is unusual: **two readings are taken of the same slot, and they disagree.**

- **b**: the customer's belief about what a product affords, formed from private history and inherited priors (symbols table, `w`: priors descend, replays do not).
- **a**: the act available at the point of choice: pay the premium, accept or refuse the data disclosure, take the cheaper item.
- **Γ(b,a)**: what the *word-reading* predicts will happen. "I value sustainability" predicts the certified purchase. "Privacy matters to me" predicts refusing the tracking cookie.
- **o′**: what the *market-reading* returns: the item actually paid for, the data actually disclosed.
- **s**: the customer on a particular occasion. R is indexed per customer, per attribute, per occasion. It is never aggregated into the sentence "consumers care but do not buy."

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

Frame-internal quantities are disqualified on the same page:

> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A survey that reports high stated concern and then scores itself on how well it predicts purchase is scoring itself with the quantity it produces. That is the named frame-internal failure.

**The anchor test.** Fig 2 :29 names the anchor directly:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)

The market is an explicitly named anchor. The survey response is an instrument. Fig 2 :36-38 supplies the discriminator:

> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."** (Fig 2 :37-38)

There are therefore **two questions** in the customer's sentence, with two legitimate anchors:

| question | anchor | what settles it |
|---|---|---|
| What did this person say they value? | their own avowal, since the question is constitutively about the avowal | the stated answer, recorded with its context |
| What did this person actually choose? | the market, since the question is constitutively about choice | the payment, the disclosure, the observed purchase |

The error called "the attitude-behavior gap" is often committed at the moment one of these anchors is used to settle the other's question. An avowal is an instrument for the choice question, and instruments can be wrong on axes they do not measure. This is not a claim that customers lie. It is a claim about which reading settles which question.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) a union of the conditions under which the two readings come apart, (ii) an instrument that discriminates a failure of one condition from a failure of the other, and (iii) an honest open slot for the specific driver that the available instruments cannot yet name. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so section 4's refuter can fire on it.

**The claim under audit.** The common framing is: customers hold a true preference for sustainability, quality, or privacy, and a weaker will or a marketing failure prevents them from enacting it. The audit asks whether the figures license that single-preference framing, or a different shape.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: person, attribute, occasion, ordered in time (say, then choose). It carries a **comparison** bond for "cheaper" against "responsible" (*"a threshold relation between two quantities"*, Fig 12 :87) and an **ordered** bond between avowal and choice. It is not symmetric: the word-reading and the market-reading are not interchangeable, because one is an instrument and one is the anchor for the choice question.
- **Symmetry.** "Value" is a threshold relative to alternatives and to the purchase occasion, not an absolute quantity (Fig 12 :85-89). The divergence is asymmetric in time: a cheap choice does not become a costly one by reversing the survey answer.
- **Scale.** Three scales are in view: one choice occasion, the market habitat containing many customers and firms, and the time channel across repeated purchases. The membrane between them is *"Only the actors, the currency and the anchor change"* (Fig 4 :20); the transform is lossy, so the round-trip gap R_T must be measured, not assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The choice occasion** (one customer, one scale) | customer, product alternatives, price, shelf, checkout, consent dialog | the payment and the residual between predicted and actual choice | yes: the market, realized purchase and realized disclosure (Fig 2 :29) | admitted |
| **D2 The stated-report instrument** (the word-reading) | respondent, questionnaire, interviewer, survey context | words, attitudes, intentions | yes for the question "what was said": the avowal itself (Fig 2 :36). Not an anchor for the choice question | admitted, with restricted competence |
| **D3 The market habitat** (population) | firms, competitors, price premium, availability, labels, defaults, peers, regulators | survival, share, profit, trust | yes: customer choice and willingness to pay; the market as ground | admitted |
| **D4 The temporal channel** (across purchases) | habits, percepts, metrics, remembered consequences | contact with the ground across time | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Hypocrisy or moral weakness as a free-floating property of the person** | the person's character | virtue and vice | **no** anchor independent of the market's verdict. It re-describes the residual instead of explaining it | not a domain yet, excluded before figure lines |
| **X2 Price as sole cause** | the price tag | cheapness | price is measurable, but it is already a habitat condition inside D3 plus a comparison bond in D1 | absorbed, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that customers never act against their own stated values.

### 1.3 Partition or union

D1 and D2 overlap: both read the same slot, and their overlap is a compound with its own loop. D2 and D3 overlap: the survey context is itself a habitat, with its own price of words. D3 and D4 overlap: contact with the ground is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1, an instrument-and-anchor condition.** The word-reading is taken as if it were the market-reading, so an instrument is promoted to an anchor for a question it cannot settle.
- **C2, a contact condition.** The habitat at the point of choice does not pay for the attribute, or the customer's contact with that fact has degraded in the channel.

A customer failing only C1 and a customer failing only C2 are not different degrees of one failure. They are different compounds and need different instruments. More information clears the region where only C1 holds; changing the habitat clears the region where only C2 holds; neither clears the intersection by itself.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29-30)

Order for this question: 1 perception (can the customer read the label, the price difference, the consent consequence?) → 2 vocabulary (does Γ have terms for what the product affords: "sustainable", "premium", "private"?) → 3 objective (can the customer say what would count as progress here? "Cheaper" is a comparison) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Most intervention effort lands above the break because that is where the measurements already exist, which is why information campaigns are the default lever. That is a budget filter, not a witness for the verdict (Fig 9 :60).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual, frame-internal quantities disqualified | governs how R is indexed and what may count as evidence |
| 2 The Ground | the market is a named anchor; instruments can be wrong on unmeasured axes; independence | decisive for the two-question split and the witness rule |
| 3 Dependency Chain | the middle link breaks first; effort above the break is wasted | governs diagnosis order and the information-campaign default |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs individual-to-market transfer and the honest condensation |
| 5 Mint Pipeline | three guards as a product; "nothing new here" | governs why a new attitude term is often not a mint |
| 6 Closure / Reachability | import is the only operator that moves the wall; describe in effect terms | governs how a low-overlap frame is sought |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs the "everyone says they care" argument |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs corroboration claims and the source ledger |
| 9 Leave / Arrive | union versus partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings | governs quick reversals of stated value |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; test harness | decisive for D1, D3 and D2 |
| 12 The Bond | two currencies, bits and actions; isomer, functional group, comparison | decisive for the word/action distinction |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only, after re-census |
| Operators table | ⋛ is a threshold comparison of two quantities | governs "cheaper versus responsible" |
| Symbols table | `R` is the aim; the ground is the anchor; `Γ` is the library | governs the restatement and the anchor test |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to customer valuations, by calling sustainability a "gradient", price a quantity of "energy", and the market a "network", fit only by forcing: a gradient in the figure is *"a difference that can be spent"* with directedness, and a premium is not that. That is a strain, so Fig 13 does **not** govern the mechanism. Re-census sent Fig 13 to the honest-stop role and handed the word/action distinction to Fig 12's two-currencies rule. No other figure needed a strain after re-census. The strain is recorded, not smoothed over.

A second apparent conflict was resolved by re-census rather than by forcing. Fig 2 :36 says an anchor is legitimate when the question is constitutively about it, and :37 says human judgment is the right anchor when the question is about people. Reading that as "therefore the stated preference is the ground" strains against Fig 2 :29's "market" and against the question actually asked, which is constitutively about *choice*. Re-census: there are two questions with two legitimate anchors, and the answer is the union compound, not a preference ranking. Recorded as R1 in section 6.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about customers, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The two readings are different instruments with different anchors, not one preference that fails

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 2 anchor rule and Fig 11 test harness; low overlap: the anchor definition versus the substituted-habitat rule).**

> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."** (Fig 2 :37-38)
> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."** (Fig 2 :31)
> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** (Fig 11 :70)

The word-reading is a legitimate answer to "what did they say" and an instrument for "what did they choose". The market-reading is the anchor for the choice question and says nothing directly about what the person avowed. Treating one as the other is a category error between two instruments, not a weak will.

**Refuter:** a preregistered field test in which changing only the survey response, with price, availability, habitat, and contact held constant, changes the realized purchase at a rate above the instrument's own error. If the word-reading moves the market anchor directly, F1 is false.

**World bearing (secondary only):** ElHaffar, Durif and Dubé (2020) define the green gap as *"the discrepancy between what consumers say about their growing concern regarding the environment, on the one hand, and what they truly do to help sustain this environment, on the other hand."* That is a two-reading description, corroborating F1's frame. Norberg, Horne and Horne (2007) name the same structure for privacy: *"despite the complaints, it appears that consumers freely provide personal data."* The two sources are in different disciplines and use different instruments, so they are nearer independent witnesses than two papers in the same review pool, but neither derives from the figures and neither can settle the figure claim.

### F2: The survey is a substituted habitat; it proves wiring, never capability

**Mode: `specified`. Domains D2, D1. Status: triangulated (Fig 11 test harness and Fig 12 two currencies; low overlap: habitat substitution versus pricing rule).**

> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** (Fig 11 :70)
> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)

In a survey the costly operand is absent. Responding costs words (bits); buying costs money and disclosure (actions). The respondent's "yes" is a correct answer to the question the survey actually posed, which is a cheap question. A field purchase is a different composition over the same person and product, with a different bond and a different price. The two are not a scale of one another.

**Refuter:** a stated-preference instrument whose predictions of realized purchase match a revealed-preference instrument under the same conditions, with the price of the action actually paid. Then the substitution claim fails.

**World bearing:** Penn and Hu (2018) find that *"hypothetical bias (HB) associated with stated preference methods has garnered frequent attention in the broad literature trying to describe and understand human behavior"* and that *"choice experiment, cheap talk, consequentiality and certainty follow-up all significantly contributed to explaining and mitigating the magnitude of HB."* This corroborates the two-currency distinction: the gap is sensitive to the instrument's incentive structure. Economics is a low-overlap field relative to the figures.

### F3: "Value" in words and "value" in choice are two currencies, held apart

**Mode: `general` for the structure, `specified` for the customer case. Domains D1, D2. Status: triangulated (Fig 12 and Fig 1, pricing rule versus per-slot indexing).**

> **"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."** (Fig 12 :130)
> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)

The marketing phrase "they say they value it but will not pay for it" sums two currencies into one figure and then reports the difference as a preference strength. Fig 12 names that summation as the error. What survives is the per-slot statement: on this attribute, for this customer, on this occasion, the word-reading and the action-reading came apart, and the two readings have different prices.

**Refuter:** exhibit a common unit in which stated willingness to pay and actual payment are commensurable without loss on the same slot, validated against the ground. Then the two-currency claim is false for that slot.

### F4: A quick reversal of stated value is channel failure, not a changed ground

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 1, ground maintainer versus aggregation).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"the output is not a verdict, it is"** (Fig 10 :28) **"you have lost touch"** (Fig 10 :29)

A customer who avows a value and then chooses against it under time pressure, at a shelf with a pooled "green" label, is not necessarily a customer whose value changed. The contact degraded. "Pooled readings" is the individual version of aggregating across slots (Fig 1 :22): the signal that says what this product actually costs disappears into a category average.

**Refuter:** a documented case in which stated value disappears at purchase while the customer's contact with price and consequence is independently measured as fresh, unpooled, and non-declining. If contact stays high, F4's mechanism is not the cause.

**World bearing:** Rhodes and de Bruijn (2013) report *"The overall intention–PA gap was 46%"* in a health-behaviour meta-analysis, and Feil, Fritsch and Rhodes (2023) report that *"Successful translation of a positive intention into behaviour is nearly at chance."* These are different fields with different instruments and they corroborate the shape of the gap, not its figure derivation. The shared vocabulary of "intention-behaviour gap" means they also share a evidence pool at the label level; overlap is declared in the ledger.

### F5: Choice capability is customer-and-habitat, never customer alone

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 11 and Fig 4, habitat valence versus membrane kernel).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"Only the actors, the currency and the anchor change."** (Fig 4 :20)

"Sustainability" is not a standing good. It is a benefactor to the residual when the habitat pays for it (it is available, affordable, legible, trusted at the shelf) and a malfactor when it does not. More consumer education is an agent-only improvement; if it does not change contact, it changes nothing however much it improves. The kernel (word-reading, action-reading, comparison, payment) is the same at one customer and at a market; only the actors, currency, and anchor change.

**Refuter:** a controlled case in which the attribute keeps an invariant positive valence across a documented habitat substitution that removes payment, availability, or trust at the point of choice. Under Fig 11 :49 that should be impossible; if observed, F5 is wrong.

### F6: The habitat is enumerated, and contact cascades beyond the label

**Mode: `specified`. Domain D3. Status: triangulated (Fig 11 habitat enumeration and Fig 3 dependency chain).**

> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."** (Fig 11 :48)
> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** (Fig 11 :52)

The habitat of a purchase is read off the world: price premium, shelf position, default option, certification trust, peer norm, time pressure, income constraint, prior habit, and what the customer can perceive of the consequence. Scoping to the immediate attitude is first-order enumeration; the residual that matters is often second or third order, as in the DDT and eagles case. The seat may introduce an actor (a default, a label, a subsidy) and may not subtract the habitat, because *"contact is a fact about the world and does not consult you"* (Fig 11 :61-62).

**Refuter:** a case in which realized purchase is fully predicted by the immediate stated attitude once habitat terms are measured and entered, with no residual three steps out. Then the cascade claim fails for that case.

### F7: The union needs two instruments, and the specific driver stays a declared gap

**Mode: `specified` for the union, `gap` for the naming. Domains union. Status: triangulated for the union (Fig 9 and Fig 3); `gap` for the missing instrument.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

No figure line, after a genuine re-census, names *which* driver dominates for a given customer: habit, price, distrust of the label, availability, or something not yet representable. The figure set returns the shape of the answer (a union of an instrument condition and a contact condition) and an instrument characterized in effect terms: a source-discriminating design that separates the word-reading from the market-reading on the same slot. It does not return the name. That is a `gap`, reported plainly, not a silence filled with a slogan.

**Refuter:** produce a figure line that, after re-census with no strain, selects the specific driver for a class of customers. Until then, no segment-level causal claim in this folder is `grounded`.

### F8: Agreement about the gap is not evidence about the gap

**Mode: `specified`. Domain: verification. Status: triangulated (Fig 7 and Fig 2, room chain versus anchor rule).**

> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)

A survey in which many people agree that sustainability matters is a room, not an anchor. A list of researchers selected because they already believe the attitude-behavior gap is real is a mirror chain. The only admissible witness is a frame that can see the purchase independently of the avowal, and whose verdict is recorded before it sees this derivation (Fig 10 :52: *"Bring a characterised residual, never the source."*).

**Refuter:** an independent frame with a genuinely different evidence pool whose verdict on the stage-1 shape is unchanged after seeing the derivation and whose refusal criterion was written in advance. That would count as corroboration; agreement from the same pool would not.

---

## 4. Pre-registered refuter

Required before any outreach. *A falsifier written before the run is a design instrument.* The shape claim is refuted if any of the following holds:

1. Changing only the survey response, with habitat and contact held constant, changes realized purchase above instrument error (breaks F1 and F2).
2. A common unit makes stated and revealed value commensurable without loss on the same slot, validated against the ground (breaks F3).
3. Stated value vanishes while contact with price and consequence measures fresh and unpooled (breaks F4).
4. The attribute keeps invariant positive valence across a habitat substitution that removes payment or availability (breaks F5).
5. Purchase is fully predicted by immediate attitude with no habitat term three steps out (breaks F6).
6. One intervention restores both union conditions with no categorically different residue (breaks the union reading of F7).
7. A figure re-census admits the six physical terms as customer valuations without strain (breaks the S1 strain record, not the verdict).

If any fires, the relevant finding is withdrawn or re-censused. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Stop summing the two currencies. Report the word-reading and the market-reading as separate readings per slot, with separate anchors (F1 to F3).
2. Diagnose the link before prescribing the lever. Ask whether the failure is in the instrument condition, the contact condition, or their intersection, and state how each was measured (section 1.4).
3. Enumerate the habitat off the world, out to the second and third order, before designing an intervention (F6). Consumer education alone is an agent-only improvement.
4. Treat a room as a room. Do not pool survey agreement or agreeable experts as corroboration (F8). Buy independence in proportion to the cost of being wrong.
5. Figure 4 :22: *"Only methods cross up. Only head starts come down."* Send the generator, meaning the shape, the census, and the refuter, not a recording of the conclusion.
6. Keep the specific driver open. The framework returns a shape; naming a segment is a provenanced binding from a world frame, not a derivation (F7).

---

## 6. Canonical usage check and retraction or confirmation log

Two sources were read after the first five sections and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` - *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the available instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` - the figures are metalaws, so design questions are answered by derivation, not escalation to an authority; the seat reads the ground and does not ask the anchor to decide what the figures already settle.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "the attitude-behavior gap is one preference failure" | **Refused at the census.** Fig 9 :54-57 makes it a union of overlapping conditions; a case in two conditions is categorically different, not harder. |
| "the survey is ground for what customers value" | **Narrowed.** Fig 2 :36 makes the avowal the legitimate anchor for the question "what was said" only. Fig 2 :29 makes the market the anchor for choice. Both claims are recorded; neither is erased. |
| initial attempt to use Fig 13's six terms as customer valuations | **Retracted as a strain (S1).** The gradient-as-premium reading fails Fig 13's directedness test. Fig 13 retained in the honest-stop role only; Fig 12 governs the two currencies. |
| apparent Fig 2 :36 versus Fig 2 :29 conflict | **Not strained after re-census (R1).** Two questions, two anchors. The union is the object of study. |
| "more information closes the gap" | **Demoted to a budget filter.** Fig 3 :29-30 says effort lands above the break because measurements exist there. Fig 9 :60 forbids letting a filter hand a verdict. |
| "the driver is price" or "the driver is habit" | **Declared `gap`.** Fig 9 :32, Fig 13 :134, Fig 8 :39. A name would require a source-discriminating instrument not held here. |
| "two disciplines agreeing corroborates the shape" | **Partly retracted.** Where sources share the "intention-behaviour gap" label they are one pool at the label level (Fig 2 :40). Where they use different instruments in different fields they are nearer independent witnesses. Overlap is recorded per row in `10_source_ledger.csv`, never averaged into a verdict. |
| "this audit settles the question" | **Refused.** The Recursive Self-Improvement Trap: LLM output is a simulation, not a ground reading. No purchase data was collected here. |

### Seven-question recursive derivation (summary)

1. **Is there one residual or two readings?** Two readings of one slot; the divergence is the residual. Fig 1 :19, Fig 2 :29.
2. **Which anchor settles which question?** Avowal settles "what was said"; market settles "what was chosen". Fig 2 :36-38.
3. **Are the readings the same substance?** No. Same person and product, different bond and different price. Fig 12 :125-126, :130; Fig 11 :70.
4. **Is the capability in the customer?** No. Customer-and-habitat; valence is relative to the residual. Fig 11 :39, :49.
5. **Where does the residual sit in the habitat?** Out to second and third order, not at the label. Fig 11 :52; Fig 3 :27.
6. **Is this a partition?** No, a union. Unbundle instrument from contact. Fig 9 :54-57.
7. **What is unreachable?** The specific driver. A shape, not a name; unreachable is a verdict. Fig 9 :32, Fig 13 :134.

### Updated verdict

The shape survives: two instruments with different anchors, two currencies held apart, a habitat that must pay for the attribute, and a channel that can lose contact; the whole is a union of an instrument condition and a contact condition. The single-preference framing does not survive, and the specific driver stays a declared `gap`. Strains after re-census: **none live**; two were found and recorded (S1, R1), and both were resolved by returning to the census. Mode: `specified`, ungrounded, candidate.
