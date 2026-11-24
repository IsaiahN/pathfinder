# Figure-grounded audit: BUS-0050, business support systems and additionality

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries a mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `60_FIGURES_AS_METALAWS.md`. World sources are secondary and are listed with quotes in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the startup's belief about what customers will pay for, formed from the founders' private history and the inherited startup playbook.
- **a** is what the startup does: build, price, pivot, hire, pitch, seek funding.
- **Γ(b,a)** is what the startup's library of routines, assets and predictions says the market will return.
- **o′** is what the market actually returns: revenue, retention, renewal, survival, follow-on payment.
- **s** is the startup. R is indexed by startup and by time, never averaged across a cohort.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not *whether supported startups do better than unsupported ones*. That is a level question and a correlation. The phenomenon is the **causal change in R per slot attributable to the support**: did the support change the startup's contact with what pays, or did it select startups whose R was already trending down before the support arrived? A startup that would have succeeded anyway is one whose Γ(b,a) was already tracking o′, so the support term has no live residual to work on and mints nothing.

State the residual as: *why does the gap between what a startup's routines predict customers will pay and what customers actually pay move toward zero after some support inputs and not after others, and how much of that movement was already underway before the support?* This is an effect description. It names no theory, no "mentorship", no "network", no "funding effect". Those are candidate names withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) a conjunction of conditions under which a support input changes a startup's contact and reach, (ii) an instrument that discriminates a contact change from a pre-existing trend, and (iii) a selection mechanism that does not manufacture the correlation it then measures. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* The market is explicitly a named anchor. Demo-day attendance, pitch scores, accelerator reputation and alumni valuations move when pushed by programme staff; they are instruments at best. Fig 10 :93: *"A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."* A support organisation with a reputation to protect cannot be its own anchor. Viable anchor: realized customer payment and survival, measured per startup, compared against an unauthored counterfactual pool.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: startup Γ, action a, market return o′, indexed by slot s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because support precedes the outcome, and a **comparison** bond for "superior" and "would have succeeded anyway" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: startup and market are not interchangeable.
- **Symmetry.** "Superior" is a threshold relative to competitors, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). Time is asymmetric: a startup cannot be rewound and given the other treatment. Section 3 F5 returns to this as the central limit of the question.
- **Scale.** Three scales are in view: the single startup's step-by-step loop (Fig 4 one-agent panel), the cohort with a shared library and *"something that ranks what they produce"* (Fig 4 :5), and the policy level across programmes and years. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30), which `11_audit.md` does.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The startup loop** (one agent, one scale) | founders, routines, the startup's Γ | actions and residual reduction | yes: realized customer payment on the action | admitted |
| **D2 The market habitat** (cohort and population) | customers, competitors, entrants, suppliers, investors, regulators | survival, revenue, retention | yes: customer willingness to pay; the market as ground (Fig 2 :29) | admitted |
| **D3 The support frame's library** (incubator, accelerator, public funder) | mentors, curriculum, peers, capital, alumni, network | imports into the startup's reach, |φ| cost | yes: did the market pay for what was imported, "then check it against the ground, then carry it up" (Fig 5 :32) | admitted |
| **D4 The evaluation channel** (policy level) | programme staff, evaluators, metrics, control or comparison pools | contact with the counterfactual reading | yes: realized differential outcome per startup against an unauthored pool | admitted |
| **X1 Founder quality as a free-floating property** | the founder | talent, grit, "founder-market fit" | **no** anchor independent of the market's verdict | not a domain yet |
| **X2 Funding amount as sole cause** | the funding instrument | cash | measurable, but it is already a Γ input inside D3 (Fig 11 :46 names conditions as habitat elements) | absorbed into D3 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that founders never matter. It is also the exact content of the phrase "would succeed anyway": a property named from the outcome it is supposed to predict.

### 1.3 Partition or union

D1 and D3 overlap: the support frame enters the startup's loop, so their overlap is a compound with its own loop. D2 and D4 overlap: the evaluation is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1, contact:** the support changes the startup's channel to a ground that still pays, rather than merely adding resources to the agent.
- **C2, reach:** the support moves the startup's reach outward by contact with a closure whose atoms differ from its own.
- **C3, verification:** the cohort and the comparison pool are unauthored and the outcome is read per startup, not as a programme average.

A startup failing only C1 and a startup failing only C2 are not different degrees of one failure; they need different instruments. A programme failing C3 can look successful from inside because its own reading is the one it uses (Fig 1 :27). The essay *The Library of Babel* states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for a startup receiving support: 1 perception (can it read the customer response?) → 2 vocabulary (does Γ have terms for what the market affords and can it say what progress would count as?) → 3 objective (can it state a comparison that counts as getting somewhere?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument (Fig 3 :26). Fig 12 :113-115 says that a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."*

The practical consequence is immediate: cash and office space act above the break. They cannot rescue a broken middle link (Fig 3 :19). The world reports exactly this (Gonzalez-Uribe and Leatherbee 2018, ledger): cash and coworking alone had no treatment effect, while entrepreneurship schooling did.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not why support works |
| 2 The Ground | market is a named anchor; independence vs common pool | governs the anchor and the selection-witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs what support can actually fix |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs startup-to-cohort-to-policy transfer |
| 5 Mint Pipeline | three guards as product; "nothing new here"; MDL bargain | decisive for the "would succeed anyway" case |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of reach (C2) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs cohort agreement and homogeneity |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; unauthored pool | decisive for selection and evaluation (C3) |
| 11 The Habitat | capability is agent-and-habitat; introduction not exclusion | decisive for C1 and D3 |
| 12 The Bond | catalyst, cycle, isomer; vocabulary needs bonds | governs why an input changes valence |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop and the counterfactual |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate to "startup resources" only fit by calling cash a kind of energy and a mentor a kind of gradient. That is a strain, so Fig 13 does **not** govern startup capabilities. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). A second strain, calling the market "the ground" while customer preference plainly moves, was resolved by Fig 11 :73 (habitat updates, ground settles), recorded as S2. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about support systems, `grounded` only if settled by a measurement. None is `grounded`.

### F1: "Would succeed anyway" is the no-support bin, not a smaller success

**Mode: `general` with a `specified` consequence for programmes. Domains D1, D4. Status: triangulated (Fig 5 and Fig 10, distinct roles: mint pipeline vs channel maintainer).**

> **"the gap has real mass somewhere"** (Fig 5 :21)
> **"nothing new here"** (Fig 5 :29)
> **"the machinery worked; the answer was already known"** (Fig 5 :30)
> **"The acceptance test is a bargain, not a threshold."** (Fig 5 :42)

The three mint guards are a product: SUPPORT (|R⁺_s| > 0 for some slot before the search), REACHABILITY, NOVELTY (Formula step 3; Fig 5 :33-41). A startup whose Γ already predicts o′ has no live positive mass on its slot. The support input is admitted by the programme's paperwork but mints nothing. Fig 5 :29-30 names that state exactly: the machinery worked, the answer was already known.

The public-policy vocabulary for this is **deadweight**: the Irish Department of Jobs technical annex states *"Deadweight refers to the policy support outcomes which would have occurred anyway."* Innovate UK states *"Impacts seen in an evaluation should be measured against a baseline of what would have happened had the intervention not occurred"* and names that baseline *"the 'deadweight'"*. These are corroboration from a policy-evaluation pool, not the verdict.

**Specified consequence:** a programme that selects on pre-support success signals spends its budget on slots with zero support mass. It is a convention (an efficient allocation of a budget) presented as a verdict (a causal claim), which is the exact valence error in Fig 2 :40.

**Refuter:** a startup whose pre-support R was already flat near zero, whose post-support R is unchanged, and for which no new atom was recorded. If every supported slot looks like this, the programme is pure deadweight and F1 is confirmed; if a startup with flat pre-support R moves toward the ground with a recorded import, the no-support-bin reading must be narrowed.

### F2: Support helps by changing contact, not by improving the agent in isolation

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat vs membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

A support package that adds only internal resources (cash, desk space, a stipend) is an agent-only improvement. It may change what the founders *feel*, which is what the Innovation Growth Lab structured-accountability trial observed: participants committed to 2.8 times more tasks and valued the programme more, while *"these types of supervisory structures are not a good use of time and resources for new venture performance"*. Agreement inside the cohort is not contact with the ground (Fig 7 :13).

The Start-Up Chile result is the cleanest world bearing. Gonzalez-Uribe and Leatherbee write: *"we find no evidence that basic accelerator services of cash and coworking space have a treatment effect on fundraising, scale, or survival"*, while entrepreneurship schooling bundled with those services raised the probability of additional financing by 21.0 percent and tripled capital raised for the subpopulation randomized in by the pitch cutoff. Cash is a Γ operand; schooling is contact with a differing closure. This corroborates F2 and F3 at a different method (regression discontinuity) from the same topical field.

**Refuter:** a documented startup whose internal resources increased with no change in contact or imported atom and whose per-slot R nevertheless moved toward the market ground across a habitat change. That breaks Fig 11 :40 and F2.

### F3: Renewal of reach requires an import from a differing closure

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8, Fig 13, three distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A startup can iterate on its own product forever and never add an atom. To keep paying, its reach must be expanded by contact with frames whose closures differ: customers, mentors, adjacent technologies, other founders, regulators. Fig 11 :61 records the asymmetry: *"The seat’s power is asymmetric. Introduction is available; exclusion is not."* Fig 11 :65 names the ecological analogue directly: *"Introducing an actor for its cascade is ecosystem engineering, after Jones, Lawton and Shachak, 1994."* The 1994 paper itself says ecosystem engineers *"modify, maintain and create habitats"*, which is what a mentor network does to a startup's habitat. That is a low-overlap ecological witness for the mechanism, not a business measurement.

Hallen, Cohen and Bingham report that the key driver of accelerator effects is *"broad, intensive, and paced consultation"* with mentors, customers, peers and alumni, and Cohen, Bingham and Hallen report that founders *"systematically satisfice prematurely"* and benefit from *"reigniting search for problems that they already view as solved"*. Both are the import described in Fig 6 :23, stated in the organizational-science vocabulary.

**Refuter:** a startup that renews its reach solely by composing inside its own closure, with no new atom entering from a differing closure, and that still passes the ground test across a change of habitat. That breaks idempotence and F3 with it.

### F4: The selection is the failure, not a detail of programme administration

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 10, Fig 2 and Fig 7, low overlap: unauthored pool vs anchor triangulation vs room chain).**

> **"The residual selects the members, but only from what is available."** (Fig 10 :73)
> **"A conscientious selection is still a selection, so unauthored needs a mechanism:"** (Fig 10 :75)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"High correlation is disqualifying for a verdict and efficient for a convention."** (Seat Map :163)

A candidate set chosen by a participant is an authored room, however well the selection is reasoned (Fig 10 :73-74). The mechanism must be a lottery, everyone who qualifies, a set assembled before the question existed, or the habitat itself, enumerated rather than composed (Fig 10 :75-79). An accelerator that chooses its own cohort on signals of likely success is selecting on the thing it later claims to cause. Its outcome difference is then the pool talking, not two frames confirming each other (Fig 2 :18-21).

The world is unusually explicit. The 2025/2026 accelerator meta-analysis reports that *"the results reveal the presence of a selection bias, as many accelerator programs tend to favor start-ups that have already obtained some form of funding before entering the program."* Hallen et al. write *"We also find some evidence of sorting dynamics"* and state that *"sorting’s relationship to venture development is not causal and merely correlational"*; they find ventures are more likely to be accepted if they have more web traffic, more full-time founders and prior venture capital. Lenihan 2004 names the administrative version: *"development agencies may in all probability be more inclined to provide financial assistance to certain types of firms than others (e.g. firms whom they consider to have growth potential-notion of backing or picking winners)."* Innovate UK's evaluation framework supplies the practical repair: *"control group design should focus on projects deemed to be high-quality and fundable, but for which funding was not available."*

Fig 7 :35: *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."* A homogeneous cohort selected for resemblance is one long room. The meta-analysis notes that accelerators deliberately create *"homogeneous cohorts that benefit from shared industry insights"*; that is a benefit for peer learning and a cost for verdicts, and the two must not be pooled.

**Refuter:** a participant-authored cohort whose selection score correlates with outcomes but whose outcome difference survives an unauthored near-cutoff or lottery comparison with the same score distribution. That would show the authored room added a real effect beyond the correlation and would weaken F4.

### F5: The per-startup counterfactual is unreachable, and that is a verdict

**Mode: `general`. Domain D4. Status: triangulated (Fig 13, Fig 6 and the statistics source, low overlap: figure reach vs causal-inference theory).**

> **"So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"It cannot say which primitive is missing, because naming it would mean already holding it."** (Fig 13 :135)
> **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."** (Fig 6 :27)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

"What would this startup have done without the support?" asks for both potential outcomes of the same slot at the same time. Imbens and Rubin state the limit in their own notation: *"the fundamental problem of causal inference"* is that *"at most one of the potential outcomes can be realized and thus observed."* Holland 1986, as quoted in the Oxford causal-inference lecture notes: *"It is impossible to observe for the same unit i the values Di = 1 and Di = 0 as well as the values Y1i and Y0i and, therefore, it is impossible to observe the effect of D on Y for unit i."*

The honest figure reading is that the per-slot causal effect is unreachable with the instruments held, not that the programme is untestable in aggregate. Imbens and Rubin give the statistical solution: replace the unobservable unit effect with an estimable **average** causal effect over a population using an assignment mechanism. That is exactly where Fig 1 :19 must be held in tension with the aggregate: the average is a **filter for the budget**, never a witness for any particular slot (Fig 9 :60, *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*). A programme evaluation that reports only a cohort average has answered the budget question and silently swapped the slot question.

**Refuter:** an instrument that returns both potential outcomes for the same startup at the same moment, or a derivation from the figures that makes the per-slot counterfactual reachable. Either would break F5 and the cited causal-inference result.

### F6: Realized payment is the anchor; programme metrics are instruments

**Mode: `general` with a `specified` programme consequence. Domains D2, D4. Status: triangulated (Fig 2 and Fig 10, anchor rule vs ground maintainer).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."** (Fig 10 :93)

Demo-day attendance, pitch scores, number of mentors and alumni valuations are quantities the support frame produces. Scoring the frame with them is the named failure in Fig 1 :27. They are also the classic saturated metric and pooled reading of Fig 10 :26: a cohort average hides the slot that is losing contact.

**Specified consequence:** the outcome column of any evaluation must be realized customer payment and survival, read per slot, and the selection instrument must be reported separately from the outcome instrument. Innovate UK's framework states the same discipline operationally: *"Successful impact evaluations will be judged by their capability of proving causality, measuring the counterfactual and therefore estimate impact. Analysts need to understand difference between causation and association."*

**Refuter:** a programme-produced metric that prospectively predicts per-slot market payment better than an unauthored ground comparison, with provenance showing it was not fitted to the same outcomes. That would promote the metric from instrument to anchor and break F6.

### F7: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source for the figure claim (Fig 3), with Cohen, Bingham and Hallen 2019 as a business-facing corroboration from a different method but the same topical field.**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

The usual startup failure is not that the founders cannot plan. It is that Γ has no terms for what the changed situation affords and cannot say what would count as progress there. Cohen, Bingham and Hallen describe the mechanism from the accelerator side: founders *"systematically satisfice prematurely across many decisions"* and benefit from *"increasing the amount of external information searched, often by reigniting search for problems that they already view as solved."* Reopening a problem the founders consider solved is the vocabulary/objective link being rebuilt; it is not a planning input.

Fig 3 :29-30 predicts that budget will pile up above the break, because that is where the measurements already exist. Pitch training, deck polish and follow-on fundraising are above the break; the vocabulary link has almost no instrument.

**Refuter:** a documented startup whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually middle" claim, though not the dependency ordering.

### F8: Cohort agreement and published agreement are not evidence

**Mode: `specified`. Domains D4, D2. Status: triangulated (Fig 7 and Fig 2, room chain vs anchor rule).**

> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)

Two agreement failures are visible in the world record. The meta-analysis finds *"publication bias, indicating that the existing literature may overrepresent studies with significant positive results while underreporting studies with null or negative findings"* and notes *"a tendency within the field to publish studies that confirm accelerator effectiveness."* That is a room handed along: the same positive result reproduced in the same evidence pool. The Innovation Growth Lab trial is the converse: participants valued structured accountability and committed to more tasks, while the quantitative analysis found no performance effect. Valence from inside the room and the ground's verdict came apart.

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* A programme deciding public funding has a high cost of being wrong, so it should buy low-overlap checks, not more agreeing alumni.

**Refuter:** a cohort-level agreement measure that prospectively predicts per-slot market outcomes better than an unauthored ground comparison, with independence demonstrated rather than assumed. That would make agreement a witness and break F8.

### F9: The same input changes valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"A chain of mirrors is one long room."** (Fig 7 :36)

Mentorship, a peer cohort and seed capital are not good or bad things. They are catalysts when they regenerate across uses and spent parts when they do not, and the programme's own description does not record which. The meta-analysis reports that accelerators *"are most effective when tailored to the specific needs of ventures"* and that benefits are larger for *"smaller start-ups with high growth potential"*, which is valence relative to the startup's residual. The Innovation Growth Lab trial reports that platoons are more appreciated when peers are homogeneous in industry and maturity; homogeneous peers are good for sentiment and can be one long room for verdicts (Fig 7 :36).

**Refuter:** a support input whose measured valence is invariant across a documented change of the startup's residual. If no such change of valence can be found, F9 weakens to `general`.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per startup, never a cohort average | general | Fig 1 :19, :22 | figure-derived |
| Market payment is the anchor, not programme metrics | general | Fig 2 :29, :35; Fig 10 :93 | figure-derived |
| "Would succeed anyway" is a zero-support bin, not a smaller win | general / specified | Fig 5 :21, :29, :30 | triangulated F1 |
| Support helps only by changing contact | specified | Fig 11 :39, :40 | triangulated F2 |
| Reach renewal needs an import from a differing closure | specified | Fig 6 :14, :21, :23 | triangulated F3 |
| Cohort and comparison pool must be unauthored | specified | Fig 10 :73, :75; Fig 2 :40; Seat Map :163 | triangulated F4 |
| Per-slot counterfactual is unreachable; the average is a filter | general | Fig 13 :134, :135; Fig 6 :27; Fig 9 :60 | triangulated F5 |
| Break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :27 | single-source F7 |
| Agreement from one evidence pool is not corroboration | specified | Fig 7 :12, :13, :36; Fig 2 :40 | triangulated F8 |
| Which specific startups will benefit | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule in the Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A startup's post-support R is unchanged while its pre-support R was already flat near zero and no import was recorded (breaks F1 and F2, Fig 5 :21, :29-30).
2. A startup whose internal resources increased (cash, space) with no change in contact or reach still moves the market ground per slot across a habitat change (breaks F2 and F3, Fig 11 :40).
3. A participant-authored cohort whose selection score correlates with outcomes retains that correlation under an unauthored near-cutoff or lottery comparison (breaks F4, Fig 10 :75, Fig 2 :40).
4. An instrument returns both potential outcomes for the same startup at the same moment (breaks F5 and the causal-inference limit).
5. A programme-produced metric predicts per-slot market payment prospectively without being fitted to the same outcomes (breaks F6, Fig 1 :27).
6. A startup whose perception, vocabulary and objective links all measure as working fails only at planning (breaks F7, Fig 3 :27).
7. A support term is admitted without SUPPORT, REACHABILITY or NOVELTY, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground reading has paid for the shape per startup.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of incubation (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Build the unauthored comparison pool **before** the cohort is chosen: a lottery, everyone who qualifies, a capacity cutoff, or the enumerated habitat (Fig 10 :75-79). The pool is unauthored first and examined second; reverse the order and the stacking is the selection.
3. Keep C1, C2 and C3 separate in every report. A blended "accelerator impact score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
4. Measure per startup and record the bonds as well as the atoms: what was imported, from which closure, and at which handoff, not just how much cash was disbursed (Fig 12 :5, *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*).
5. Use pitch scores, attendance and alumni valuations as budget filters, never as witnesses (Fig 9 :60).
6. Report the average treatment effect honestly as a budget filter and say plainly that it does not settle any individual slot (F5).
7. Stop at the shape. Do not name which startups will win; the framework returns *"you get a kind of thing, never the answer itself"* (Fig 9 :32). The missing thing is a per-slot source discriminator, and it is owed.
8. Offer the formula as a method only after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `60_FIGURES_AS_METALAWS.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- `60_FIGURES_AS_METALAWS.md` confirms that the figures are the ground for design questions: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* No external ruling was requested or used.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Applied Fig 13 six-term set to startup resources | **Retracted, strain S1** | Only fit by renaming cash as energy and mentors as gradients. Re-census: Fig 13 governs the honest stop, not a startup's Γ |
| Treated the meta-analysis's positive pooled effect (r = 0.102) as corroboration that accelerators work | **Retracted as a witness, kept as a filter** | Small effect, publication bias and selection bias are reported in the same source. Fig 9 :60 and Fig 2 :40 |
| Read Gonzalez-Uribe and Leatherbee as "funding is useless" | **Narrowed** | Result is local to cash and coworking alone and to the subpopulation randomized in by the cutoff; it corroborates F2 and F3, not a general claim about money |
| Treated Barney-style resource logic (quoted inside the meta-analysis) as straightforward corroboration | **Conflict, re-census R1** | "Valuable, rare, inimitable resources" is an agent-only stock and conflicts with Fig 11 :40 as written. Re-mapped to Γ operands; causal work is the import (Fig 6 :23). Verdict unchanged; binding has no source gate, so zero verdict weight |
| Wanted to call "selection" the single answer | **Refused** | Union of C1, C2 and C3 (Fig 9 :54-57); one lever clears only the region where one condition holds |
| Called the market "the ground" while customer preference moves | **Re-census, S2** | Habitat updates, ground settles (Fig 11 :73); the anchor is realized payment and survival, not stated preference |
| Read Fig 7 :26, *"progress per handoff: R = h² × S"*, as a calibrated equation | **Narrowed, S3** | The figure supplies two factors and no numbers; treated as a product structure in `specified` mode |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 5 and Fig 10 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |
| Naming which specific startups will benefit | **Marked `gap`** | The source essay's metamerism rule: a reading of success *"cannot comment on the source"*, and *"the answer is unreached until a better instrument exists"* |

**Strains sent to the log:** S1 (Fig 13 applied to startup resources), S2 (market as ground while preference moves), S3 (Fig 7 :26 as a calibrated equation). All resolved by re-census; no unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: it is a union of contact maintenance, reach renewal and unauthored verification, each with its own instrument.
2. **What is the anchor?** Realized market payment, named in Fig 2 :29. Not pitch scores, not alumni sentiment, not programme reputation (Fig 10 :93).
3. **Is the answer in the startup alone?** No. Fig 11 :39-40. Capability is agent-and-habitat.
4. **What is "would succeed anyway"?** A zero-support bin (Fig 5 :21, :29-30): the machinery worked and the answer was already known. Deadweight in the policy vocabulary.
5. **What does useful support do?** Changes contact (Fig 11 :40) and moves reach by import from a differing closure (Fig 6 :23), usually by rebuilding the middle link (Fig 3 :27).
6. **Why does selecting winners fail?** An authored room manufactures the correlation it then cites (Fig 10 :73-75; Fig 2 :40; Seat Map :163). Agreement compounds, evidence does not.
7. **What can be said at the stop?** Three conditions, their instruments, and their falsifiers. Not which startup wins. The per-slot counterfactual is unreachable with the held instruments, which is a verdict and not a silence (Fig 13 :134; Fig 8 :39).

---

## 8. Updated verdict

The shape survives: **support helps a startup only when it changes the startup's contact with a market that still pays, when it moves the startup's reach outward through contact with a closure that differs from its own, and when the cohort and comparison pool are unauthored and read per startup; "favoring businesses that would succeed anyway" is the zero-support deadweight bin, not a smaller kind of success, and selecting on it manufactures the correlation that disqualifies the verdict.** The three conditions are kept separate, never averaged. Which specific startups will benefit is a `gap`, not a hidden answer: the missing instrument is a per-slot source discriminator. Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (resource-based logic) was returned to the census and re-mapped. No unresolved strain remains after re-census.
