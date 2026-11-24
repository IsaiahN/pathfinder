# Figure-grounded audit: BUS-0048, genuine demand versus non-converting interest

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the entrepreneurship question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the founder's belief about what customers want, formed from interest evidence: survey answers, waitlist signups, page views, verbal encouragement, "I would buy that".
- **a** is what the founder does: ask, show a prototype, set a price, offer a pre-order, take payment, deliver, ask for repeat use.
- **Γ(b,a)** is what the founder's library predicts will happen, for example "these 2,000 signups will convert at 10 percent".
- **o′** is what the ground returns: money actually paid at a stated price, then repeat purchase and retention.
- **s** is the individual customer or segment. R is indexed per customer and per time, never averaged into an engagement total.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the *amount* of interest but the **persistence of a large R in slots where interest was high**. Observed: a founder sees enthusiastic agreement and a healthy signup count, yet the payment does not arrive. A frame that predicts all interest converts equally, or that a stronger interest signal is all that is missing, has a residual here.

State the residual as: *why does the gap between what an interest signal predicts a customer will do and what the customer actually pays stay large in some slots and close in others?* This is an effect description. It names no theory, no "lean startup", no "product market fit", no "validated learning". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) a discriminator that separates a signal which can be ranged against the paying ground from a signal which cannot, and (ii) an instrument that returns the reading per customer rather than pooled. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* For "will this customer pay", the purchase with real money is a market and a counter. Fig 2 :29-30: *"If it moves when you push on it, it is not an anchor."* Survey interest moves when the founder pushes: leading questions, social desirability, a flattering pitch, a discount promise. It is an instrument, not an anchor. Fig 2 :37-38: *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* The axis an interest instrument does not measure is willingness to part with money at a stated price.

A subtle point, recorded so it is not lost. Fig 2 :36 says *"An anchor is legitimate when the question is constitutively about it."* The question here *is* constitutively about customer judgment, so a customer's judgment expressed in a payment is the right anchor. That does not promote the interview answer to an anchor: both are human judgment, but only one is a counter that does not update when the founder thinks harder. Chandon, Morwitz and Reinartz 2005 supply the world measurement of this distinction (section 3, F2).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: founder library Γ, probe a, customer return o′, indexed by slot s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72), because interest precedes commitment precedes payment, and a **comparison** bond (`⋛`, *"is it about which is larger, rather than both being present? Yes."*, Fig 12 :87), because "genuine" means willingness to pay clears a price. It is not a symmetric relation: customer and founder are not interchangeable.
- **Symmetry.** "Genuine demand" is a threshold relative to a price, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). It is asymmetric in time: a customer lost after a bad first charge is not recovered by reversing the probe.
- **Scale.** Three scales are in view: the single customer's decision loop, the segment or population with *"something that ranks what they produce"* (Fig 4 :5), and the market across repeated purchases. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and the transform is lossy, so the round-trip gap must be measured (Fig 4 :30): *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Founder probe loop** (one agent, one scale) | founder, pitch, prototype, offer | bets, actions, residual reduction | yes: the customer's realized response to the probe | admitted |
| **D2 Customer and market ground** (population) | customers, competitors, complements, substitutes | willingness to pay, purchase, retention | yes: money changing hands at a price, market and counter (Fig 2 :29) | admitted; this is the ground |
| **D3 Signal instrument channel** | surveys, waitlists, signups, clicks, interviews, landing pages | contact with the ground: does the reading track payment? | yes: the ground that persists while the channel decays (Fig 10 :24) | admitted; "interest" lives here |
| **D4 Commitment and composition structure** | atoms (attention, time, money, data, reputation) and the bonds between them | cost of the signal, |φ| | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted; this is where "free" versus "costly" lives |
| **X1 Enthusiasm as a free-floating property of the idea** | the idea | charm, novelty | **no** anchor independent of payment | not a domain yet |
| **X2 Market size or TAM as sole cause** | a market category | addressable spend | measurable, but already the habitat of D2; Fig 11 :46 names conditions as habitat elements | absorbed into D2 |
| **X3 Founder charisma or persuasion** | the founder | rhetorical force | no independent anchor; absorbed into the D1/D3 instrument | absorbed |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that enthusiastic users never matter.

### 1.3 Partition or union

D1 and D3 overlap: the instrument is inside the founder loop, so their overlap is a compound with its own loop. D2 and D4 overlap: a commitment is exercised inside the customer habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) a maintained, unpooled channel to a paying ground, and (C2) a commitment that costs something and can therefore be ranged against that ground. A founder failing only C1 (she asks the wrong people, or pools the readings) and a founder failing only C2 (she collects free enthusiasm) are not different degrees of one failure. They are different compounds and need different instruments. A single lever clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55).

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for a founder facing a possible demand gap: 1 perception (can the founder read a customer response at all?) → 2 vocabulary (does Γ have terms for what a customer affords: trying, paying, returning, referring?) → 3 objective (can the founder state what would count as progress, namely a payment at a price rather than an expression of interest?) → 4 planning (which probe to run) → 5 learn and carry (name what worked, verify it, carry it to the next segment).

The middle link is the one that breaks here. Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* An interest-only vocabulary can name a state ("they liked it") and cannot state a comparison ("they paid above our price"). Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* Most founder effort lands above the break, on surveys and acquisition, because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and which metrics are banned |
| 2 The Ground | purchase is a named anchor; interest moves when pushed; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks; effort above the break is wasted | governs the diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs customer to segment transfer and the round-trip gap |
| 5 Mint Pipeline | three guards as product; settlement; MDL bargain | governs when a signal can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs customer frame versus founder frame |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs repeated interviews with the same kind of person |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs stale interest and pooled readings |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | governs why yesterday's fan is not today's buyer |
| 12 The Bond | isomer, functional group, comparison, sequence, bond price | governs the structure of the discriminator |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop, not a business substrate |
| Operators table | ⋛ comparison; a bond that costs nothing carries nothing | governs "genuine" as a threshold and "free signal" as empty |
| Symbols table | `R` is the aim; the ground is the anchor | no ground reading exists here |

Strain test applied during this census: an early attempt to apply Fig 13's six physical substrate terms directly to "customer demand" only fit by calling attention a kind of energy and an interview a kind of gradient. That is a strain, so Fig 13 does **not** govern customer demand. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about founders, `grounded` only if settled by a payment measurement here. None is `grounded`.

### F1: The ground is the purchase, not the expressed interest

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 2 and Fig 1, low overlap: anchor rule versus frame-internal metric).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :29-30)
> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

Interest counts are produced by the founder's own framing: who was asked, how the question was put, whether the product was described flatteringly. A signup total is a frame scoring itself. The market does not consult the founder's enthusiasm; it pays or does not. This is the figure-grounded reason the discriminator must reach the paying ground, not a better enthusiasm meter.

**Refuter:** a controlled case in which an interest signal alone, with no payment and no cost to the customer, prospectively predicts which named slots will purchase at a stated price through a change of habitat. If it does, F1 is false.

**World bearing (secondary only, three different fields).** Hulland and Houston 2021, an editorial in the *Journal of the Academy of Marketing Science*, report that use of intention measures alone *"often undermines the potential contribution of the work, resulting in early rejection"* and quote Sheeran 2002 that *"intentions explain only 28% of the variance in behavior"*. That is a marketing-practice witness. Kanya, Saghera, Lewin and Fox-Rushby 2019, in *Social Science and Medicine*, found *"Hypothetical WTP was on average 3.2 times greater than actual WTP"*. List and Gallet 2001, in *Environmental and Resource Economics*, found *"on average subjects overstate their preferences by a factor of about 3 in hypothetical settings"*. The last two corroborate the same direction but partly share the contingent-valuation evidence pool, so they count as one witness plus a related one, not three independent confirmations (Fig 2 :31). None flipped the verdict.

### F2: Asking the question moves the reading

**Mode: `specified`. Domain D3. Status: triangulated (Fig 2 anchor must not update, plus a world field experiment).**

> **"The anchor must not update."** (Fig 2 :33)
> **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."** (Fig 2 :34)

The interest interview is a measurement that acts on its object. Chandon, Morwitz and Reinartz 2005, *Journal of Marketing*, report that *"the very act of measurement may inflate the association between intentions and behavior, a phenomenon called self-generated validity"* and that *"the correlation between latent intentions and purchase behavior is 58% greater among surveyed consumers than it is among similar nonsurveyed consumers"*. The authors' practitioner summary states the mechanism: *"Answering a purchase intention question makes consumers more likely to remember their original intentions and to follow them at the time of the purchase."* That is the anchor updating on the frame, which is exactly the collapse Fig 2 warns about. The founder's survey result looks more predictive because the survey made it predictive.

**Refuter:** a pre-registered survey versus no-survey field comparison in the target category showing the intention-to-purchase correlation is statistically indistinguishable between surveyed and unsurveyed groups. If reactivity is zero, F2 is false.

**Strain handled:** a careful reader may say this makes interviews useless. It does not. Fig 2 :33-34 says the *anchor* must not update; instruments that produce a reading are allowed to be used, provided the reading is not treated as the verdict. The interviews remain useful for vocabulary (D1 link 2). They are disqualified as the settlement. Re-census, not a softer reading.

### F3: Interest is a frame-internal metric, and pooling destroys the only signal

**Mode: `specified` with a `general` method consequence. Domains D1, D3. Status: triangulated (Fig 1 and Fig 10, low overlap: per-slot residual versus channel decay).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"the ground does not decay, the channel does"** (Fig 10 :24)

A waitlist total is a pooled reading. It combines the person who will buy tomorrow with the person who clicked for a freebie and the person who forgot by lunchtime. When the aggregate rises, the founder cannot tell where to look. Y Combinator-adjacent practitioner Ries 2009 puts the same point in business language: *"Consider the most basic of all reports: the total number of “hits” to your website. Let’s say you have 10,000. Now what?"* He calls these *"Vanity Metrics"* that *"might make you feel good, but they don’t offer clear guidance for what to do"*, and recommends per-customer or per-segment readings because *"Metrics are people, too."* Fig 1 :27 explains why: the metric is produced by the frame and cannot score the frame.

Morwitz, Steckel and Gupta 2007, *International Journal of Forecasting*, found intentions track purchases better *"when purchases are measured in terms of trial rates than when they are measured in terms of total market sales"* and *"when respondents are asked to provide intentions to purchase specific brands or models than when they are asked to provide intentions to buy at the product category level"*. Specificity, not volume, is the property that survives. These are two world witnesses from the same broad business/marketing pool as Ries, so one witness for the verdict (Fig 2 :31).

**Refuter:** a pooled aggregate interest count that prospectively identifies which named customer will purchase next, at a stated price, better than a per-slot reading does. If it exists, F3's consequence is false.

### F4: The discriminator must cost the customer something

**Mode: `specified`. Domain D4. Status: figure-supported structurally triangulated, world conflict recorded.**

> **"A bond that costs nothing is a bond that carries nothing, which is the flat case."** (Operators table :66)
> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."** (Fig 5 :43)
> **"then check it against the ground, then carry it up"** (Fig 5 :32)

A free signal (a like, a click, a yes in a survey) is a free bond. It carries no information about willingness to pay because it did not require the customer to give up anything. A payment, a deposit, a pre-order, or a repeat visit with a switching cost is a priced bond: it costs the customer, so it can be ranged against the ground. The figure line is structural, about the price of a relation in a description, and the business application (payment as the priced relation) is a **binding** from the business frame, not a derivation. That distinction matters for the world check.

**World conflict, returned to census.** In biology, Zahavi's claim that signals are honest *because* they are costly is contested. Penn and Számadó 2020, *Biological Reviews*, report that *"signalling costs paid at the equilibrium are neither sufficient nor necessary to maintain signal honesty"* and conclude the Handicap Principle has *"no theoretical or empirical support"*. So the low-overlap witness does **not** corroborate "cost guarantees honesty". Conflict sends the derivation back to the census (Fig 2 conflict rule), and the re-census result is recorded: the figures price a *bond*, not a biological display. The claim is downgraded from "cost makes a signal honest" to the weaker, checkable "a signal that costs the customer nothing is not a reading of willingness to pay". That weaker form is corroborated by the business pool (pre-orders, deposits, trial rates) and is not contradicted by the biology pool. It stays `specified`.

**Refuter:** a zero-cost signal that discriminates purchasers from non-purchasers as well as a payment across matched slots, through a habitat change. If one exists, F4 is false.

### F5: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal so the external witness count is one).**

Fig 9 :54, :55 and :57 are the governing lines (quoted in section 1.3). The two conditions have different instruments:

- A C1 failure shows up as a channel that has lost touch: stale interest, pooled readings, a bracket that no longer matches who is actually paying (Fig 10 :26, Fig 7 :38).
- A C2 failure shows up as a free signal whose reach never moves: more signups, no payment, no new atom entering the founder's closure (Fig 6 :21, Operators :66).

A single lever, for example "run more customer interviews" or "add a pre-order button", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). This is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F6: The break is usually at the objective link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-112 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."** (Fig 12 :112)

The usual founder failure is not an inability to plan; it is that the objective link has been mis-set to "interest" instead of "payment at a price". With the objective mis-set, every later instrument optimises the wrong quantity. Fig 12 :112 names why a vocabulary of interest states cannot fix this by itself: a goal is a comparison, and the interest vocabulary has no comparison term. F6 predicts the highest-value diagnostic question is not "how much interest is there?" but "at which link does this founder's chain currently stop, and was that measured?"

**Refuter:** a documented founder whose perception, vocabulary and objective links all measure as working and whose failure is located at planning or at learn-and-carry. That would falsify the "usually at the objective link" claim, though not the dependency ordering.

### F7: A founder's frame differs from the customer's, so the reading must travel

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 6 and Fig 8, low overlap: import rule versus provenance separation).**

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."** (Fig 8 :50)
> **"Residual first, frame second."** (Fig 8 :53)
> **"describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :27-28)

The founder's pitch and the customer's wallet are two closures. The purchase is an import from a frame that differs. If the founder interviews only people who already like the pitch, she is handing the same room to herself (Fig 7 :12, :13: *"agreement compounds, evidence does not"*). If a stated-intent survey and a real payment independently point to the same slot, that is corroboration at maximum independence (Fig 8 :50); if both came from the same pitch, it is one witness wearing two names (Fig 2 :40).

**Retraction recorded:** an early draft of this audit named "Lean Startup validated learning" as the answer before describing the residual. That inverts Fig 8 :53 and Fig 9 :27-28. It is retracted at record level. The practitioner material is retained as a business-pool binding with zero verdict weight, listed in `10_source_ledger.csv` and used only to corroborate the shape after the residual was fixed.

**Refuter:** a founder whose reach is demonstrably renewed by internal composition alone, with no reading entering from a customer frame that differs, and who still passes the payment test across a habitat change. Under Fig 6 :23 that should be impossible.

### F8: A strength changes valence when the residual changes

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations versus composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

An enthusiastic early user can be a benefactor to one residual (a first buyer) and a malfactor to another (a signal that attracts more hobbyists and masks the absence of payers). Nothing in the user's description records which. This is the figure-grounded form of the warning that a waitlist can be a liability as well as an asset. The world corroboration is the same business pool as F3 and F7, so it adds no independent witness; its value is as a name for the shape, not as evidence.

**Refuter:** an interest signal whose measured valence is invariant across a documented change of residual and price. If no such change of valence can be found anywhere, F8 weakens to `general`.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per customer, never a vanity total | general | Fig 1 :19, :22 | figure-derived |
| The purchase with money is the anchor, not agreement | general | Fig 2 :29, :33-34 | figure-derived |
| Asking can move the reading, so a survey is an instrument | specified | Fig 2 :33-34; Chandon 2005 | triangulated F2 |
| Interest is frame-internal; pooled readings hide the signal | specified | Fig 1 :27; Fig 10 :24, :26 | triangulated F3 |
| A free signal is not a reading of willingness to pay | specified | Operators :66; Fig 5 :43 | figure-supported; world conflict in F4 recorded |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at the objective link | specified | Fig 3 :19, :29; Fig 12 :112 | single-source F6 |
| The reading must come from a differing closure | specified | Fig 6 :23; Fig 8 :50 | triangulated F7 |
| A signal's valence flips with the residual | specified | Fig 11 :49, :51; Fig 12 :119 | triangulated F8 |
| Which specific probe, price or deposit will work | not stated | none | gap: Fig 9 :32 returns a kind of thing, not the answer |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. An interest signal alone, with no payment and no cost to the customer, prospectively predicts which named slots pay at a stated price through a habitat change (breaks F1).
2. A pre-registered survey versus no-survey field comparison shows zero reactivity in the target category (breaks F2, Fig 2 :33-34).
3. A pooled aggregate interest count predicts the next named purchaser better than a per-slot reading (breaks F3, Fig 1 :19-22).
4. A zero-cost signal discriminates purchasers from non-purchasers as well as a payment across matched slots (breaks F4, Operators :66).
5. A single lever restores both union conditions with no categorically different residue (breaks F5, Fig 9 :57).
6. An instrument returns per-slot revealed preference at any resolution without a payment or switching cost (closes the F9 gap; compare Fig 6 :33-34: *"Where nothing is, there is no edge to extend from"*).
7. Fig 1's per-slot indexing fails, or an anchor that moves when pushed still settles the question (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a payment measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of startups (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the two conditions separate in every report. A blended "engagement score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat any interest metric as Γ, that is, as a candidate instrument whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Make the signal cost the customer something before treating it as demand, while recording that this is a binding from the business frame and not a derivation (Operators :66, F4).
6. Use the entrepreneurship and marketing literature as a budget filter and as one corroborating witness, not as the verdict. Ries, Morwitz-Steckel-Gupta, Hulland-Houston and Chandon-Morwitz-Reinartz overlap heavily (Fig 2 :31, :40).
7. Stop at the shape. Do not name which survey question, which price, or which deposit will work. The framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to customer demand | **Retracted, strain S1** | Only fit by renaming attention as energy. Re-census: Fig 13 governs the physical substrate, not a founder's Γ |
| Named "Lean Startup validated learning" as the answer | **Retracted at record level, strain S2** | Residual first, frame second (Fig 8 :53); the name is a business-pool binding with zero verdict weight |
| Treated the biology costly-signalling literature as corroboration | **Conflict, re-census F4** | Penn and Számadó 2020 says cost is neither necessary nor sufficient. Downgraded to "a free signal is not a reading of WTP" |
| Read intention-behavior statistics as a verdict about founders | **Narrowed to corroboration** | Fig 9 :60: *"Use filters for the budget and witnesses for the verdict."* Statistics from another pool cannot settle the founder-level claim |
| Wanted to call Fig 2 :29 a `general` law about all markets | **Narrowed to `specified`** | The anchor rule is structural; no payment measurement in this folder pays for the founder-level version |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 2 and Fig 1 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |
| Which probe or price to use | **Marked `gap`** | The essay's source rule: an instrument that reads a result *"cannot comment on the source"*, and *"The answer is unreached until a better instrument exists."* |
| Called the interest interview useless after F2 | **Retracted, strain S3** | The anchor must not update; the instrument may. Re-census separates D3's vocabulary use from D2's settlement |

**Strains sent to the log:** S1 (Fig 13 substrate applied to demand), resolved by re-census; S2 (naming Lean Startup before the residual), resolved by re-census and retraction; S3 (F2 over-read as a ban on interviews), resolved by the anchor/instrument distinction; S4 (costly-signalling conflict), resolved by narrowing F4. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of contact maintenance and costly commitment, each with its own loop and instrument.
2. **What is the anchor?** The purchase with real money, named as market and counter in Fig 2 :29. Survey agreement is an instrument that can update (Fig 2 :33-34, Chandon 2005).
3. **Can interest alone close R?** No, not on the evidence here. Fig 1 :27 disqualifies the frame's own metric; Hulland-Houston and the WTP meta-analyses corroborate from other pools.
4. **Why does pooling hurt?** Fig 1 :22 and Fig 10 :26: the aggregate throws away the only signal that says where to look.
5. **What discriminates?** A priced, per-slot, non-reactive probe: Operators :66, Fig 5 :43, Fig 9 :27-28.
6. **Why does the founder need a different frame?** Fig 6 :23: the purchase is an import from the customer's closure. Repeating the same room gives agreement, not evidence (Fig 7 :13).
7. **What can be said at the stop?** A shape, two conditions, different instruments, written falsifiers. Not which survey, not which price, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **genuine demand is not a stronger kind of interest. It is a reading taken at a costly, non-reactive, per-slot probe where the customer's judgment ranges against the paying ground. Interest is a frame-internal instrument, it can be wrong on the axis it does not measure, and asking the question can change the reading. Where such a probe cannot be run, the answer stops at a `gap` characterized in effect terms: an instrument that discriminates stated from revealed preference per slot is not held here.** The two conditions are kept separate, never averaged. Mode `specified`. No world source flipped a verdict; the one genuine conflict (Penn and Számadó on costly signalling) was returned to the census and narrowed. No unresolved strain remains after re-census.
