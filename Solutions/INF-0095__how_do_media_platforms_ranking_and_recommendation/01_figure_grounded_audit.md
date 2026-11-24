# Figure-grounded audit: how ranking and recommendation alter encounter and trust

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md` :107: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (Isaiah N, 2026-11-19) says LLM output can *"simulate an approximate answer/output"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` §6.

**Sources.** Primary: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. Secondary: eight essays by Isaiah N and the public web pages in `10_source_ledger.csv`, all opened 2026-11-23. Every figure quote below is an exact substring of the figure text extract, checked before use.

---

## 0. The residual, before any figure is chosen

### 0.1 The effect statement

A user holds a belief `b` about what is worth attending to and what is true. A platform predicts `Γ(b,a)`, what the user will engage with given an action `a` (a click, a dwell, a share), orders a finite slate of candidate items, and observes `o'`, what the user actually did. The platform's own residual is `R = |Γ(b,a) − o'|` per item slot `s`. The question asks about a different residual: the discrepancy between the information a user would encounter under a selection referenced to something that does not move when the platform pushes on it, and the information they encounter under a selection referenced to predicted engagement. Call this `R_E` (encounter) and `R_T` (trust). They are not one residual.

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." So the unit of analysis is the individual item the user did and did not see, not a site-wide average of clicks or time spent.

### 0.2 R by arity, symmetry, scale

- **Arity: two conditions.** `R_E` (what is encountered) and `R_T` (what is trusted) are two well-formed questions, not one hard question. Fig 9 :5: "are not one hard question but several well-formed ones. Split it rather than search." A single combined "effect on information" is a bundle and must be unbundled before search.
- **Symmetry: ordered, not symmetric.** Ranking is a comparison. Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction." A goal/comparison is the ordered bond ⋛ (Fig 12 :85 to :89). Swapping two slots changes the slate, so `A ⋛ B` is not `B ⋛ A`. Fig 13 :20: "ordering, so more and less can be said" names the structure being produced.
- **Scale: first order inside one feed, second order at the population.** First order is one user, one slate, one session. Second order is the network diffusion of what was encountered (Fig 11 :52 on first-order enumeration and second-order effect). A third-order effect is what people subsequently share, vote on and act on. Contact cascades; scoping to direct contact is the classic mistake.

### 0.3 Domain census: one line per domain, before any figure line is chosen

A domain needs actors, a currency and a nameable anchor. If no anchor can be named, it is not a domain yet.

| domain | actors | currency | anchor (what settles it and does not move when pushed) | partition or union | dependency order |
|---|---|---|---|---|---|
| D1 Exposure / selection | the ranking function (comparison over an ordering), the candidate pool, the user's click / dwell / share actions, the engagement metric | predicted engagement: a quantity the ranking frame itself produces | the logged slate: a record of what was shown in what order, which does not change when the ranking changes because it records the change | partition of candidates into shown / not shown, per slot | first |
| D2 Belief / trust | the user's belief `b`, the weighting `w` between private history and inherited prior, the sources actually encountered | conviction and trust judgments | independent human judgment. Fig 2 :37: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people." | union of encountered sources with the user's prior | second, consumes D1 |
| D3 Population / reliability | many users, the shared recommendation pool, the diffusion network | agreement and diffusion | the ground each frame ranges against separately. Agreement is never the anchor. | union compound: D1 and D2 compounded by network contact | third, consumes D1 and D2 |
| D4 Magnitude (the "how much") | experiments, audits, measured exposure distributions | an effect size under a controlled contrast | an instrument that was not run here | not a domain yet from the figures alone: no figure line yields a number | last, and figure-silent |

**Anchor test applied at census.** If the platform's engagement metric is proposed as the anchor for D1 or D2 it fails immediately: Fig 2 :30 "If it moves when you push on it, it is not an anchor." Change the ranking and the engagement metric moves; it is downstream of the frame. A metric produced by the same frame that reports it is not ground. This is the central structural finding and it is established before any figure is quoted for a verdict, from the definition of anchor alone.

**No nameable anchor means not a domain yet.** D4 has no figure-derived anchor and no measurement in this folder, so it is recorded as `gap`, not as a small effect and not as a large one.

### 0.4 Order by dependency, not importance

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." The chain here runs: D1 exposure is measured before D2 trust is interpreted; D2 before D3 population agreement; D4 magnitude last. Refusal precedes mint (`THE_FORMULA.md` step 2). Residual description precedes frame selection (Fig 9 :28). Working on D3 while D1 is unmeasured is effort above a break that cannot arrive at a step whose input never came.

---

## 1. Figure census

| figure | bearing on this residual | verdict after strain test |
|---|---|---|
| **1 The Agent** | residual per object slot; frame-internal quantities disqualified; *"credibility accrued"* named as not counting | governs D1's unit of analysis and D2's metric capture |
| **2 The Ground** | anchor must not update; mutual update and common cause collapses; correlation has valence; human judgment is the anchor for questions about people | governs D1 anchor test, D2 anchor choice, D3 agreement reading. Decisive |
| **3 Dependency Chain** | a reading below the break is a reading of nothing; objective link is the usual break | governs the dependency order; explains why engagement-as-ground breaks the chain at link 3 |
| **4 The Membrane** | only methods cross up, only head starts come down; a replay repeats a past success and cannot produce a new one | governs the difference between a head start (serendipity) and a replay (more of the same) |
| **5 Mint Pipeline** | three guards as a product; the sought-for shape is a preference, not a term | governs why "the algorithm makes people believe X" is an unbound preference until written down and refuted |
| **6 Closure / Reachability** | no frame escapes its own closure; import from a live peer is debited against independence | governs D1's contraction and the cost of cross-closure exposure |
| **7 Room Chain** | same closure handed along means agreement compounds, evidence does not | governs why more agreeable feeds add no evidence |
| **8 Union Surplus** | two frames together reach what neither reaches alone; high overlap is one frame with two names | governs D3's surplus and the independence requirement |
| **9 Leave / Arrive** | split a bundle; describe the residual before choosing a frame; you get a kind of thing, never the answer | governs the split into D1/D2/D3/D4 and the honest stop |
| **10 Ground Maintainer** | saturated metrics and pooled readings signal lost contact; a ground with a reputation to protect disqualifies its keeper | governs the platform as keeper of its own engagement ground |
| **11 The Habitat** | capability is agent-and-habitat; introduce, never subtract; contact cascades; valence is relative to the residual | governs why a better model with unchanged contact changes nothing, and why adding diverse content can backfire |
| **12 The Bond** | the arrangement carries information the ingredients do not; cycle, catalyst, isomer, comparison | governs the feedback loop, the ranking model's persistence, and the isomer test in `06` |
| **13 Minimum Viable Set** | spectrum is ordering; gradient is a spendable difference; network is influence travelling | names the substrate being arranged; ranking is a spectrum, not a new primitive |
| **Operators table** | ⋛ is a threshold relation between two quantities; ¬ refuses a claim | governs the ordered comparison and the need for an explicit refusal |
| **Symbols table** | `w` is how far belief leans on private history versus inherited prior; `R` is the aim and always a slice | governs personalisation as a weighting, and the per-slot residual |

Strained readings are named in §2 and in the retraction log, not smoothed over.

---

## 2. Findings

### F1. The currency of the loop is frame-internal (decisive for D2)

Fig 1 :23: "The ground enters as the only metric."

Fig 1 :24 to :27 (the extract lists quantities that do not count):

> "coverage, and compression achieved"
> "predicates minted, and credibility accrued"
> "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A ranking system optimises predicted clicks, dwell time, reshares and similar engagement quantities. These are produced by the ranking itself: what is shown determines what can be clicked. The metric is both the output and the report card. Fig 1 :27 disqualifies it. The same line explicitly names *"credibility accrued"* as frame-internal, which is the framework's own warning against treating a platform's trust proxy as a trust measurement.

Fig 10 :93: "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified." The platform benefits from the engagement number; its keeper is disqualified from using it as ground.

**Refuter:** show that the engagement quantity is measured by an instrument the ranking frame cannot move, and that the same number would be reported under a different ranking. Under that condition it stops being frame-internal and F1 fails. This is a design requirement, not a rhetorical point: a logged exposure record with an independently sampled outcome would meet it; a CTR dashboard would not.

**Status:** `single-source` on Fig 1 for the "credibility accrued" line, triangulated with Fig 10 :93 (independent concept: disqualification of an interested keeper). Low overlap between an agent-loop figure and a checking-arrangement figure. Mode `specified`.

### F2. When the ground updates, coherent drift replaces correction (decisive for D1 and D2)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 2 :33: "The anchor must not update."

Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

The user updates on what the platform shows; the platform's model updates on what the user does. Each is corrected by a quantity the other produces. This is Fig 2's collapse 1 (mutual update, coherent drift), not triangulation. The reason nobody notices is given in the figure: the drift is coherent, so every intermediate state looks like a stable, well-adapted feed.

Fig 10 :24: "the ground does not decay, the channel does." Fig 10 :26: "saturated metrics, pooled readings." These are the named failure forms of the channel: an engagement metric saturates (the same signal can be produced by very different content), and per-slot readings are pooled into a single average. Fig 10 :28: "you have lost touch."

**Refuter:** exhibit a feed loop in which the reference the ranking ranges against is not changed by user behaviour or by ranking decisions (a fixed, externally maintained outcome), and show that user belief remains correctable against it. F2 fails if such a loop is demonstrated.

**Status:** `triangulated` across Fig 2 (anchoring and the two collapses) and Fig 10 (channel decay, saturated metrics). These are different figures with different offices, so the agreement has low conceptual overlap. Still one framework, so it is internal triangulation, not independent witness. Mode `specified`.

### F3. Exposure contracts toward the user's existing closure (D1)

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 6 :24: "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."

A ranking function trained to predict engagement from a user's history serves items drawn from the closure that history already defines. The user's wall moves only on contact with content whose closure differs. A system that selects for predicted engagement selects against such contact, except when novelty itself happens to predict engagement. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Replaying what worked once gives "a system that repeats a past success and cannot produce a new one" (Fig 4 :25 continuation). This is the head-start versus replay distinction: a good recommendation is a head start that makes the user's next search cheaper; a bad one is a replay of a prior success.

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." From inside a contracted feed, "I have seen everything about this topic" and "this is all there is" are indistinguishable. This is the honesty point: the user cannot diagnose the contraction from inside.

**Refuter:** measured per slot against a chronological control, show that the distribution of encountered items under engagement ranking is not shifted toward items predictable from the user's prior history. F3 fails if the shift is absent or reversed. The measurement must be per slot (Fig 1 :19), not a site-wide average.

**Status:** `triangulated` across Fig 6 (closure and import cost), Fig 8 (union surplus, see F5) and Fig 4 (replay). Three distinct figure lines; the first two share the independence concept, so treat them as one axis and Fig 4 as a second. Mode `specified`.

### F4. Trust proxied by engagement is a source-naming error (D2)

Fig 9 :28: "describe it before you go looking, or any frame you pick will seem to fit."

Fig 9 :32: "you get a kind of thing, never the answer itself."

The question's word "trust" names two different things. In the platform's dashboard it is a reading (clicks on "trusted source" badges, shares, dwell). In the question it is a human judgment about what to believe. The Hard Problem is About Source (Isaiah N, 2026-08-28) gives the mechanism: an instrument that reads green *"cannot comment on the source"*; *"If several paths create the same behavior, then behavior is a projection with lossy information."* A high engagement reading can come from agreement, outrage, amusement, habit or misperception. The reading does not determine the source. Naming "trust" from that reading is the metamerism error the essay names; what is owed is a discriminator, not a name.

Fig 2 :37 supplies the discriminator: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people." The same figure warns that human judgment is only an instrument on axes it does not measure (Fig 2 :38). So the trust question must be asked with an instrument that measures trust, not engagement.

**Refuter:** show an instrument whose reading of trust discriminates among the sources of high engagement (agreement versus outrage versus habit), and show that the instrument is not moved by the ranking. F4 then narrows to a measurement task and the "source-naming error" claim is withdrawn for that instrument.

**Status:** `triangulated` across Fig 2 :37 (anchor for people-questions) and the source essay (metamerism), with Fig 9 :28 governing the description order. The essay is framework-authored, so overlap with the figures is high; this is corroboration of a figure verdict, not an independent witness. Mode `specified`.

### F5. Agreement inside a feed is the common-cause collapse (D3)

Fig 2 :18 to :21:

> "one evidence pool"
> "they never talk, and still agree"
> "so the agreement is the pool talking, not two frames confirming each other"

Fig 2 :39: "Correlation has valence." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."

Users who never interact can still agree because they are served from the same recommendation pool. Their agreement is the pool talking. This is why a homogeneous feed can look like consensus without any independence. Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus." Fig 8 :49 (completed across lines 48 to 49): "Two frames that overlap almost completely are one frame wearing two names."

Fig 8 :45: "Two frames together reach what neither reaches alone." The remedy is not "more content" but lower overlap: content from a frame whose closure differs, which Fig 6 :23 names as the only thing that moves the wall.

**Refuter:** show that agreeing users in a feed draw on genuinely low-overlap evidence pools (different instruments, different sources, separate experience, per Fig 10 :80), and that the agreement survives when one pool is removed. F5 fails for that case.

**Status:** `triangulated` across Fig 2 (common cause) and Fig 8 (independence and union surplus). Low overlap between an alignment figure and a union figure. Mode `specified`.

### F6. The objective is the broken link, and improving the model cannot fix it (D3, dependency)

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

A modern recommender has strong perception (logs, embeddings, candidate generation) and strong planning (ranking, A/B testing). The middle link, "it can say what would count as progress here, in its own terms" (Fig 3 :10), is occupied by engagement. If engagement is frame-internal (F1), the objective link is broken and effort spent on perception and planning arrives at a step that cannot use it. Fig 3 :22: "a reading taken below the break is not a weak reading. It is a reading of nothing."

**Refuter:** show an objective that ranges against a non-updating anchor and that the loop settles terms against it. If such an objective is in use and the chain is intact from link 1 to link 5, F6 does not apply to that system.

**Status:** `single-source` on Fig 3 for the chain structure, triangulated with F1 (Fig 1) for the claim that the occupying quantity is frame-internal. Mode `specified`.

### F7. Introducing cross-closure content is not automatically corrective (D3, import cost)

Fig 6 :24: "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."

Fig 11 :69: "what you unintentionally introduced is invisible until it acts."

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."

The obvious remedy, show people opposing views, is an import from a frame whose closure differs. The figures do not promise it works. They price it: it is debited against independence, a wrong atom costs more than starting from primitives, and the introduced actor's effect is invisible until it acts. Its valence is relative to the residual: the same opposing content can correct one residual and inflame another. So "diversity exposure fixes trust" is itself an unbound preference until written down and tested, exactly the Fig 5 limit on preferences.

The world literature contains a real result here: Bail et al. (2018, PNAS) found that Republicans who followed a liberal Twitter bot became *more* conservative. That is a backfire, which the figures predict in shape (valence relative to residual), not a refutation of the figure verdict.

**Refuter:** a controlled trial in which cross-closure introduction reliably reduces the target residual across residuals and populations, with the direction registered in advance. F7 does not claim it always backfires; it claims the sign is not given by the figures. A consistent corrective result would confirm the price was worth paying, not refute the pricing.

**Status:** `single-source` on Fig 6/Fig 11 for the price and valence, corroborated by Bail et al. (low overlap: field experiment in political science). Mode `specified`.

### F8. Capability is agent-and-habitat, so a "better model" is not a better outcome (D1 and D3)

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."

Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not."

The ranking model is the agent; the candidate pool, the platform rules and the user's other information sources are the habitat. Improving the model without changing what the user is in contact with leaves the outcome unchanged. The seat can add items to a feed and cannot subtract the habitat, because contact is a fact about the world. A managed feed is permanent work, not a solved state. Fig 11 :43: "The habitat is enumerated, never composed." The relevant habitat must be read off the world (what the user also reads, whom they talk to, what the platform actually shows), not composed from a model of an ideal user.

**Refuter:** show a model-only improvement that changes measured exposure and measured trust while contact (the set of sources the user actually encounters) is held constant. Under the figure's claim this cannot happen; a demonstration of it would refute F8.

**Status:** `single-source` on Fig 11 for the capability claim (the essay Arrival of the Fittest calls it a fit-to-known-cases claim, not tested forward), corroborated by the world result in F9 that changing the algorithm changed exposure but not attitudes. Mode `specified`.

### F9. What the world actually found, and why the conflict sends us back to the census

Guess et al. (2023, Science) randomised roughly 23,000 Facebook and Instagram users out of algorithmic feeds into reverse chronological feeds for three months. Exposure changed substantially. Attitudes did not: *"Despite these substantial changes in users' on-platform experience, the chronological feed did not significantly alter levels of issue polarization, affective polarization, political knowledge, or other key attitudes during the 3-month study period."* The AAAS report of the same experiments adds that users showed no change in *"their trust in media and political institutions"*.

This conflicts with a naive reading of the question, "ranking alters trust." It does not conflict with the derived verdict, because the census already split D1 from D2. Read through the census: the experiments confirm D1 (exposure is highly sensitive to ranking) and return a null on D2 over three months. Fig 2 :40 makes agreement and attitude reports frame-sensitive when frames share an evidence pool, and Fig 8 :39 says "a search that finds nothing is never a proof of absence." So the null is recorded as *unreached at this budget and duration*, not as proof that ranking never changes trust. It is also a live partial firing of refuter R4 in §3 and is recorded there.

Cinelli et al. (2021, PNAS) analysed more than 100 million posts and found echo chambers dominated on Facebook and Twitter, and were absent on Reddit where users can modify their feed algorithm. That corroborates D1 and F3 at population scale: the tweakable feed is the condition under which the contraction is absent.

Taber and Lodge (2006, American Journal of Political Science) found confirmation and disconfirmation biases, including *"the seeking out of confirmatory evidence"* when people self-select sources, and attitude polarisation. That corroborates F2 and F3 from human cognition, a low-overlap field and an older evidence pool.

**Status:** D1 `triangulated` (figure lines plus two independent empirical literatures). D2 `single-source` on the figure anchor rule with a world conflict recorded and resolved by the census split, not by flipping the verdict. D3 `triangulated`. D4 `gap`.

### F10. What survives, with mode attached

| claim | mode | figure or source |
|---|---|---|
| Exposure must be measured per item slot, not as a site average | `general`, structural | Fig 1 :19, :22 |
| A quantity the ranking produces cannot anchor the ranking | `general`, structural | Fig 1 :27; Fig 2 :29, :30 |
| Human judgment is the anchor for questions about what is good for a person | `general`, structural | Fig 2 :37 |
| Engagement-optimised selection contracts exposure toward the user's existing closure | `specified`, falsifiable | Fig 6 :23; Fig 8 :48; Fig 4 :25; Cinelli 2021 |
| In-feed agreement is a common-cause symptom until independence is shown | `specified`, falsifiable | Fig 2 :18 to :21, :40; Fig 8 :48 |
| Cross-closure exposure is priced and can backfire | `specified`, falsifiable | Fig 6 :24; Fig 11 :49, :69; Bail 2018 |
| A model-only improvement with unchanged contact leaves the outcome unchanged | `specified`, falsifiable | Fig 11 :39, :40 |
| The numerical size and sign of the effect on trust | `gap` | no figure line; no instrument run here |

---

## 3. Pre-registered refuter

Written before the conclusion and before the world search was synthesised into a verdict, per the standing rule that a falsifier written before the run is a design instrument.

The shape claim is refuted if any of the following holds:

1. **R1, frame-internal currency.** The engagement quantity is shown to be measured by an instrument the ranking frame cannot move, and the same reading is returned under a different ranking. F1 and F6 fall.
2. **R2, closure contraction.** Per-slot measurement against a chronological control shows no shift of encountered items toward the user's prior history, or a shift in the opposite direction. F3 falls.
3. **R3, independence.** Agreeing users in a feed are shown to draw on low-overlap evidence pools, and agreement survives removal of one pool. F5 falls.
4. **R4, the trust effect.** A pre-registered, adequately powered, long-duration human-judgment instrument detects a change in trust attributable to ranking. That confirms rather than refutes the existence of an effect; a null result of that design, sustained long enough to address the three-month limit, refutes the broad "ranking alters what people trust" claim and leaves only the encounter claim standing.

**Partial firing recorded honestly.** Guess et al. (2023) is a three-month null on attitudes and on trust in institutions. It fires against R4's strong form at that duration. It does not fire against the encounter claim, which the same experiments strongly support. Per the WATSON conflict rule, this sent the derivation back to the census, which is why D1 and D2 are separate verdicts and D2 is `specified`, ungrounded, and not promoted to `grounded`.

**Not a refuter:** "people disagree about whether algorithms are bad." Disagreement that does not shrink with effort is a sign of a bundle, not of a single hard question (Fig 9 :5). Split it.

---

## 4. Recommendation

1. Split the question before answering it (F0 and Fig 9 :5). Report encounter and trust as separate verdicts, never averaged.
2. Lead with the anchor test, not with a claim about harm. Ask what settles "what was encountered" (a slate log) and what settles "what was trusted" (an independent judgment). Fig 2 :29 to :30.
3. Price the platform's metric as frame-internal until someone shows an instrument that discriminates (F1, F4). Do not let a CTR dashboard answer a question about trust.
4. Measure per slot. Fig 1 :19, :22. An aggregate engagement average throws away the only signal that says where to look.
5. State that cross-closure exposure is a priced import with a sign that is not given in advance (F7). Do not promise that "more diverse content" fixes anything.
6. Mark D4 as `gap`. Fig 13 :134: "Unreachable is a verdict here, not a silence." The honest form is "no magnitude derived here," not "no effect."
7. Fig 4 :25: send the generator, meaning the anchor tests and the refuters, not the conclusion.

---

## 5. Canonical usage check

Two framework sources govern how the figures may be used, read after the first four sections.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"* then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` step 7 and its "Direction" note: a loop cannot check the direction of its own question, because the sought-for shape is a preference and not a term. The remedy is to write down what an answer would look like, bind it, and let it accrue a residual. The "Direction" paragraph of this audit is that binding.

### Retractions and confirmations

| earlier reading in this derivation | status after canonical check |
|---|---|
| I first read "trust" throughout as the platform's credibility metric and was about to mark D2 as a single disqualified domain | **Retracted at census.** Fig 2 :37 makes human judgment the anchor for people-questions; the dashboard reading is a projection, not the quantity. D2 is now its own domain with its own anchor. |
| I initially read Fig 2 :40 as proving that in-feed agreement is false | **Retracted and narrowed.** Fig 2 :39 to :41 gives the valence: *"disqualifying for a verdict"* and *"efficient for a convention."* Agreement is a real observation and a valid convention; it is disqualifying only as a verdict about the world. F5 now says "symptom until independence is shown." |
| I was about to map "ranking" directly onto Spectrum as a figure-derived name | **Retracted as a derivation.** Ranking is a binding of the comparison bond and the ordering structure onto a software artifact, an import with no source gate inside the figures. Recorded as binding in F0 and `06`, not as a mint. |
| I initially treated the Guess et al. null as a conflict that should flip the trust verdict | **Retracted.** The conflict rule sends us back to the census. The census already split D1 from D2, so the null is a D2 result, not a whole-question result. Recorded as partial firing of R4. |
| "The figures cannot say anything about algorithms" (a temptation at the first re-census) | **Refused.** The figures are domain-agnostic; they constrain the shape (what counts as an anchor, what collapses, what composes) without naming a platform. Shape is not silence. |
| Fig 2 :34 coherent drift | **Canonically confirmed.** The Decoding Tacit Knowledge essay (2026-11-10) restates it: two people who only check against each other drift together and neither notices. High overlap, framework-authored. |
| Fig 6 :23 closure | **Canonically confirmed.** Same essay: *"You can't extend your frame from inside it."* |
| Fig 9 :5 bundle splitting | **Canonically confirmed.** The Library of Babel essay: a problem may be *"a bundle or conflation of several problems masquerading as one."* |
| Simulated status | **Confirmed.** Recursive Self-Improvement Trap, 2026-11-19. |

### Round trip gap, anticipated

The condensation from figures to "ranking contracts exposure and captures trust" loses at least three constraints that the round trip to a concrete system must restore: (1) per-slot indexing (Fig 1 :19); (2) the distinction between anchor and frame (Fig 2 :29); (3) the sign of introduced-contact effects (Fig 6 :24, Fig 11 :49). `11_audit.md` measures R_T qualitatively by re-deriving these. Treating the condensation as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

---

## 6. Gaps and strains, visible

- **D4 magnitude is a genuine `gap` from the figures.** No figure line returns a number or a sign for "how much trust changes." The ground exists (randomised exposure experiments) but none was run here. "A search that finds nothing is never a proof of absence" (Fig 8 :39).
- **Live strain: import cost versus "diversity is good."** Fig 6 :24 prices cross-closure import and Fig 11 :69 makes introduced effects invisible until they act, while the ordinary policy intuition says more diverse exposure is unconditionally beneficial. Re-census shows these are not the same quantity: the figures price *contact with a differing closure* and do not forbid it, they forbid treating it as free. Held as a strain, not smoothed.
- **Live strain: human judgment as anchor versus human judgment as instrument.** Fig 2 :37 to :38 says human judgment is the right anchor for people-questions and only an instrument, which can be wrong on unmeasured axes, for code-correctness questions. Here the trust question is a people-question, so the anchor reading governs; the measurement instrument still has to be checked. Named, not hidden.
- **No em dashes** appear in this file. Corrections and retractions above are kept visible rather than erased.

---

## 7. Updated verdict

The shape survives: a ranking loop that ranges against a quantity it produces is a frame scoring itself (D1 and D2), exposure contracts toward existing closure unless contact with a differing closure is deliberately maintained (D1 and D3), in-feed agreement is a common-cause symptom until independence is shown (D3), and a model-only improvement with unchanged contact changes nothing (D1 and D3). The specific claim "ranking alters what people trust" does **not** survive as a grounded verdict: the figures return the anchor test and the failure modes, not an effect size, and the world's best experiment to date returns a three-month null on attitudes while confirming a large effect on exposure. Verdict: `specified` on mechanism, `general` on structure, `gap` on magnitude, ungrounded, candidate. No last room (Fig 7 :6): a complete account of platform effects is not available and the framework does not claim one.
