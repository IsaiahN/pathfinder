# Figure-grounded audit: how customers decide under complexity, opaque quality, and incomplete information

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-22) says LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Primary source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the verbatim extraction; citations are `Fig N :line`. Every quoted string below was copied from that file. World sources are secondary and are recorded in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

Let `R = |Γ(b,a) - o'|` per slot `s`, where `b` is the customer's belief before purchase, `a` is the choice, and `o'` is the quality actually experienced on use. The slot is one customer by one product by one purchase occasion.

Fig 1 :19 says *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 says *"Aggregating across slots is how a live signal disappears into an average."* So the question is not "how do customers in general decide" but "what does a single chooser do when her local `R` will not come down."

The three conditions in the question are three ways the same thing happens:

- **Complex product:** `Γ` lacks the atoms to compose a prediction of `o'` from the attributes that can be read. The vocabulary link is missing.
- **Quality hard to judge:** no instrument returns a failing reading of quality before purchase. The perceiving link has no instrument.
- **Information incomplete:** the quality-predicting atom is not in `closure(Γ)`. More of the same search returns more of the same information.

The customer bets, observes a mismatch, and must either extend perception inward, import a signal from a different closure, or adopt a cheap rule that pays. That is the residual this package answers. A correct answer must be per slot, must keep the three conditions distinct, and must name the ground that could settle each part.

**What an answer would look like (Direction bound as an ordinary term).** Before searching, write down the sought-for shape so it can accrue a residual: an answer will (i) name the slot and the anchor for a customer's "good enough," (ii) say what moves the wall when the local library cannot predict quality, (iii) say when agreement counts as evidence and when it is a shared pool, and (iv) say what instrument would close the residual. Anything that only lists heuristics without these four features is not an answer to this residual.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry, scale

- **Arity:** ternary at minimum, `customer x product x occasion`, with belief, action, and observed quality. Indexed per slot, never averaged (Fig 1 :19).
- **Symmetry:** "good enough" is a threshold comparison (⋛), not a symmetric join of two equal operands. Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one."* The threshold is relative to the chooser's residual and willingness to pay, not an absolute property carried by the product (Fig 11 :49).
- **Scale:** one customer loop; a market habitat; a social frame of other choosers. The transforms between them are lossy (Fig 4).

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Customer loop | one chooser, her `Γ` of cues and rules, belief `b` with weight `w` | reduction of `R` against experienced quality; description cost of a rule | experienced quality on use (`o'`); for a question about a person, the person is the right anchor (Fig 2 :36-37) | admitted |
| D2 Market habitat | products, prices, brands, sellers, warranties, returns | purchase, willingness to pay, survival of products | the market, named as an anchor in Fig 2 :29 | admitted |
| D3 Signal frame | price, brand, certification, expert test, specification | imported atoms that predict quality | source gate and shadow test: does the cue come from a differing closure and explain the gap (Fig 8 :10-13) | admitted |
| D4 Social frame | other customers, reviewers, ratings, word of mouth | agreement and ratings | only independent instruments; otherwise a mirror chain (Fig 7 :12-13) | admitted |
| X1 "true quality independent of any instrument" | none nameable | none | none. If it moved when a frame pushed on it, it would not be an anchor (Fig 2 :29-30) | not a domain yet |
| X2 "the single best product for everyone" | none | none | absorbed into D1 and D4; valence is relative to the residual (Fig 11 :49-51) | absorbed |

A domain without a nameable anchor is not admitted. X1 fails the Fig 2 anchor test, so it is recorded as not a domain rather than smuggled in.

### Partition or union

This is a **union**, not a partition. D1 couples to D2 through payment and returns; D3 and D4 overlap whenever a brand cue and a review both draw on the seller's evidence pool, and that overlap is a compound with its own loop (Fig 9 :54-57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*). Each compound needs its own check, not an average over the four.

### Dependency order (Fig 3)

1. perception: can quality be read at all?
2. vocabulary: are there terms for what the product attributes afford?
3. objective: what counts as "good enough" (a threshold, Operators table :51)?
4. planning: which search and choice route is affordable?
5. learn and carry: did the purchase pay, and do `w` and `Γ` update?

Fig 3 :27 says *"A link with no instrument is not a link that works. It is a link nobody has looked at."* When quality is hard to judge, the break is at links 1 and 2. Most decision aids (comparison charts, more reviews, more metrics) land at links 3 and 4, above the break, where the measurements already exist. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

---

## 2. Findings

### F1 - The perceiving link has no instrument (decisive for the opaque-quality case)

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Fig 6 :34-35: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*

If no independent reading of quality exists at any resolution, INWARD extension has nothing to sharpen. The decision cannot wait for a better eye; it must import or adopt a cheap rule. This is why "complex, hard to judge, incomplete" is one mechanism, not three separate topics.

**Mode:** `specified`. **Status:** triangulated (Fig 3 on the broken link, Fig 6 on the absence of an edge, low overlap between a dependency argument and an instrument argument). **Refuter:** show an instrument already returning a failing quality reading in that category (for example, an independent lab test that discriminates brands). Then INWARD is the correct route and this finding is withdrawn.

### F2 - More of the same information adds no atom

Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

Reading eleven more reviews that all trace to the seller's copy does not create quality information the pool did not contain. Equally, the absence of a complaint is not a measurement of quality. The practical instruction is to change closures, not to read more of the same.

**Mode:** `general` for idempotence, `specified` for the review case. **Status:** triangulated (Fig 8 definitional closure plus Fig 6 :23 contact rule). **Refuter:** exhibit a corpus whose atom set genuinely differs from the seller's claims (verified purchasers with no incentive and no exposure to marketing). More search in that corpus is search in a new closure and does not contradict idempotence. Conversely, a finding that all agreement in a market traces to one source and yet tracks quality would break Fig 2 :40 and must be returned to census.

### F3 - Belief is a weighted mix of private history and inherited prior

Symbols table :24-25: *"How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings."*

This is the closest the figures come to a direct statement of how a customer decides under incomplete information. With little private history, `w` leans on the inherited prior: brand reputation, price, advertising, the choices of others. Because `w` is learnable from outcomes, a first bad purchase can move the weight. The model is not "customers are irrational"; it is "the weighting is a learnable state variable."

Symbols table :20-21: *"Formed from its own history and from what it inherited, mixed by w. Not the observation."* So belief is not quality. Conflating them is the error F5 and F6 police.

**Mode:** `specified`. **Status:** triangulated (Symbols table `w` rule and Fig 1 :13 per-slot belief). **Refuter:** a decision protocol with fixed `w` that never updates after outcomes contradicts "w is learnable"; a chooser with purely private history and zero inherited prior in a credence category would need a mechanism for the prior term that is not in the symbols.

### F4 - The decision is a threshold bargain, not a full optimization

Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one."*

Fig 5 :43: *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."*

"Good enough" is a ⋛ comparison against an aspiration level, and a satisficing rule is admitted by the same minimum-description-length bargain as any other term: the cost of stating the rule plus the leftover residual must be less than the original confusion. This is why customers stop searching before the option set is exhausted. It is a budget fact, not a character flaw.

Fig 12 :125-126: *"A composition costs in two currencies, and they do not add."* *"Bits price the description. Actions price finding out whether it holds."* The customer is short of both. A rule that is cheap to state but costs a whole budget to verify is not affordable, and a system holding only one accounting will not notice the shortfall.

**Mode:** `specified`. **Status:** triangulated (Operators table comparison, Fig 5 MDL bargain, Fig 12 two currencies, low overlap). **Refuter:** a chooser who demonstrably maximizes over the full option set with a complete utility function, no threshold, and no time or information cost, in a category where quality is unobservable. That would break the threshold claim.

### F5 - Signals are imports and need a source gate and a shadow test

Fig 6 :14: *"the only operator that moves the wall."* (The import operator.)

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

Fig 8 :50-52: *"Convergent derivation and adopted import look identical in the contents."*

Price, brand, certification, expert testing, and specification are imports into the customer's closure. They move the wall only when they come from a frame whose closure differs and when they explain the quality gap. A brand that merely repeats the seller's own claim is inside the same closure and moves nothing, however loudly it is stated. A warranty or return right is a different kind of import: it changes the cost of being wrong rather than adding a quality atom, and it should be recorded as such.

**Mode:** `specified`. **Status:** triangulated (Fig 6 on the operator, Fig 8 on provenance). **Refuter:** a cue with no provenance and no shadow test that predicts experienced quality out of sample as well as an independent instrument. Then the source gate is not load bearing and this finding is narrowed.

### F6 - Agreement from a shared pool is disqualifying as a verdict

Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*

Fig 7 :13: *"agreement compounds, evidence does not"*

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Ratings and word of mouth are evidence only when they are independent instruments. When thousands of reviews repeat one seller narrative, they are one frame wearing many names. Fig 2 :31-32 defines independence as how little two frames draw on the same evidence and says *"Independence is what makes agreement mean something."* The honest report about a five-star average that traces to one pool is "you have lost touch," not "the product is good" (Fig 10 :27-28).

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* A cheap purchase can rely on a cheap cue; a medical procedure or a used car deserves independent instruments, and paying for them is rational.

**Mode:** `specified`. **Status:** triangulated (Fig 2 anchor/independence, Fig 7 mirror chain, low overlap). **Refuter:** ratings collected from purchasers with no exposure to the seller's claims, no coordination, and no incentive, which still fail to predict experienced quality. That would break the claim that independence is what makes agreement mean something.

### F7 - Decision quality belongs to the customer and the habitat together

Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone."*

Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

Teaching a shopper to be more careful does not improve decisions if the information habitat is unchanged. Disclosure rules, standard labels, independent tests, warranties, and return rights change contact; exhortations to "decide better" do not. For the firm-side reader of this question, the lever is the habitat, not the consumer's virtue.

**Mode:** `specified`. **Status:** triangulated (Fig 11 capability claim and Fig 2 anchor rule). **Refuter:** decision accuracy improves under consumer-only training while the habitat supplies no new quality feedback. That would refute the capability claim at the customer stratum.

### F8 - No standing list of good cues survives a change of residual

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* (Fig 11 actually spells *"actor’s"* with a typographic apostrophe; the normalized string is identical.)

Fig 11 :51: *"No standing list of good actors survives a change of residual."*

Price is a quality signal in a credence category and a mere halo in a search category. Brand helps when reputation was earned through repeated ground contact and harms when it was bought. This is why a universal "top ten cues customers use" list is the wrong output for this question: the valence of each cue is fixed by the local residual, not by the cue.

**Mode:** `specified`. **Status:** triangulated (Fig 11 valence rule and Fig 4 :20 *"Only the actors, the currency and the anchor change."*). **Refuter:** an invariant cue-to-quality mapping across categories with demonstrably different residuals.

### F9 - The channel can be lost while the ground does not decay

Fig 10 :24: *"the ground does not decay, the channel does"*

Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*

Fig 10 :27-28: *"the output is not a verdict, it is you have lost touch"*

More metrics can mean less contact. "Pooled readings" is precisely an averaged rating that hides the per-slot signal; "saturated metrics" is a star scale on which everything is four stars. The customer's problem in an opaque market is often not too little data but a channel that no longer discriminates. Fig 1 :19 requires the per-slot reading to be kept.

**Mode:** `specified`. **Status:** triangulated (Fig 10 channel rule and Fig 1 per-slot indexing). **Refuter:** a decision environment where adding pooled metrics increases per-slot discrimination rather than masking it.

### F10 - Gap: which cue is diagnostic in a given category

Fig 9 :32: *"you get a kind of thing, never the answer itself"*

Fig 13 :134: *"Unreachable is a verdict here, not a silence"*

The figures govern the shape of the answer: a different closure must be contacted, independence is required, the rule is a threshold, and the residual is per slot. No figure line selects among price, brand, certification, and review for used cars, or for dental work, or for software. That selection is a binding from the world frame and must be provenanced as such. Naming it as a figure result would be the error Fig 9 :27-28 warns against: *"describe it before you go looking, or any frame you pick will seem to fit."*

**Mode:** `general` on the limit, `gap` on the specific cue. **Status:** `gap` after a genuine re-census of the three domains. **Refuter:** a figure line that, after re-census, selects a diagnostic cue for a named category. Until one is produced, the gap stands; unreachable is a verdict, not a silence.

---

## 3. Pre-registered refuter (written before the conclusion)

Required by the discipline recorded in the exemplar and by Fig 5 :65-66: *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."*

The shape claim is refuted if any of the following holds:

1. A consumer decision is shown to be made on an aggregate residual, with the per-slot signal demonstrably discarded and no loss of prediction (breaks Fig 1 :19 and :22).
2. More search inside one evidence pool is shown to add a new atom that predicts experienced quality out of sample (breaks Fig 8 :32).
3. A cue with no provenance and no shadow test, tracing entirely to the seller's claims, predicts experienced quality as well as an independent instrument (breaks Fig 2 :40 and Fig 8 :50).
4. Decision accuracy improves under consumer-only training in a habitat that supplies no new quality feedback (breaks Fig 11 :40).
5. A figure line is found that names the diagnostic cue for a specific product category after re-census (closes the F10 gap).

If any fires, the corresponding finding is withdrawn and the audit is rerun from the census. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the shape, not a list of "ten heuristics customers use." The shape is: per-slot residual, threshold rule, import required when the local closure cannot predict, independence required before agreement counts.
2. For practice, invest in the perceiving link (independent tests, standardised labels, warranties, return rights) rather than in more consumer education (F1, F7).
3. Make signals provenance-bearing: record who measured what and when (F5). Separate the seller's own claims from third-party readings (F6).
4. Keep ratings per slot; an average that hides the signal is a lost channel, not a summary (F9).
5. Do not name a diagnostic cue for a category. Characterise what it would have to do and let the ground select it (F10).
6. Figure 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator (residual, shape, refuter), not the conclusion.

---

## 5. Canonical usage check

Three sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"the quotes are the authority, not this summary"*; a reading that makes figures contradict each other has misidentified its domain; and the framework returns *"what a missing thing would have to look like (a shape, not a name)"* then stops at the limit of the instruments. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule; step 2 refuses before minting; step 7 keeps SEARCHED, INWARD, and OUTWARD distinct; step 8 says the reach, not the library, drives the loop.
- `THE_SEAT_MAP_Field_Guide_amended.md` as represented in the local plan and exemplar: *"High correlation is disqualifying for a verdict and efficient for a convention."* This governs the outreach artifacts, not the verdict.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "incomplete information means customers need more information" | **Retracted.** Fig 8 :32 makes more of the same information inert. What is owed is a different closure (Fig 6 :23). |
| "satisficing is what the Tether says customers do" | **Retracted as a figure result.** Satisficing is a binding from the behavioural-economics frame onto the figure's MDL bargain (Fig 5 :43). It is a checkable hypothesis, not a named figure output. Fig 9 :32 gives a kind of thing, never the answer itself. |
| "brand is a quality signal" | **Narrowed.** Fig 11 :49 makes valence relative to the residual. A brand is a signal only when provenance and independence are shown (F5, F6). |
| Apparent strain: Fig 2 :36 makes human judgment an anchor, Fig 2 :29 names a market as an anchor | **Not strained.** Re-census: they anchor different questions (personal satisfaction in D1, settlement in D2). Fig 4 :20 says only the actors, currency, and anchor change. Two domains, two anchors. |
| Apparent strain: price as a signal versus Fig 2 :40 correlation disqualifying | **Not strained.** Re-census: price set by a seller is inside the seller's closure; a price emerging from many independent buyers is a different closure. Fig 8 :50 says the record separates them. |
| F10 called a gap | **Canonically confirmed.** *"Unreachable is a verdict here, not a silence"* (Fig 13 :134); *"a search that finds nothing is never a proof of absence"* (Fig 8 :39). |
| Simulation status | **Confirmed.** *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* (*The Recursive Self-Improvement Trap*). |

### SEARCHED / INWARD / OUTWARD kept distinct (Formula step 7)

- **SEARCHED:** can a diagnostic cue be found inside the customer's current closure? Fig 8 :32 says no atom is added. More browsing is SEARCHED and its answer is "same wall, more of the space visited." Asked first because it is cheapest.
- **INWARD:** is there an instrument already returning a failing reading? If yes, sharpen it. Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*
- **OUTWARD:** which frame already predicts quality? Cast the residual in effect terms, then find that frame. Fig 6 :30: *"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."*

These are different instructions and were not averaged into one recommendation.

---

## 6. Verdict of the audit

The shape survives: a per-slot threshold decision whose local library cannot predict quality, hence an import from a differing closure, hence a provenance and independence requirement before any cue or rating can count, all of it settled only by experienced quality and the market. Nine findings are figure-triangulated; one (F10, the specific diagnostic cue per category) is a declared `gap`. Two apparent strains were dissolved by re-census and none remain hidden. Strains after re-census: **none**. The result is `specified`, ungrounded, and a candidate until a ground reading pays for it.
