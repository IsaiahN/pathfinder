# Figure-grounded audit: INS-0026, trust in informal authorities versus the state

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the institutional question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the citizen's belief about how an authority will treat them, formed from personal history and inherited priors about police, courts, chiefs, elders, religious judges, neighborhood mediators and informal providers.
- **a** is the citizen's act of reliance: which forum they actually take a dispute to, whose service they seek, whose rule they obey, whose judgment they accept.
- **Γ(b,a)** is what the citizen's library of expectations predicts that forum will deliver.
- **o′** is what the forum actually delivers: resolution, fairness, speed, safety, dignity, a usable answer.
- **s** is the citizen-slot, indexed also by domain (land, family, debt, safety, health, licensing) and by time. R is indexed per citizen and per domain, never averaged into a national trust score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of trust but **which slot keeps the smaller residual**. Call it `A_s,d`, the forum actually chosen by citizen s in domain d when its predicted treatment is compared against what each available forum delivers. Observed: in some slots and domains `A_s,d` is an informal authority even where a state forum exists and is legally competent. A frame that predicts all citizens rank authorities by the same legitimacy score, or that an achieved trust simply persists, has a residual here.

State the residual as: *why does the gap between what a citizen expects from an authority and what the authority actually delivers stay smaller when the citizen relies on an informal forum in some slots and domains, and smaller when they rely on the state in others?* This is an effect description. It names no theory, no "traditional legitimacy", no "state failure", no "social capital". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps `A_s,d` on one forum rather than the other, plus an instrument that discriminates a failure of one condition from a failure of the other, plus a declared `gap` where no instrument can name the specific authority. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names instances: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."* A survey trust score moves when the question is reframed, so it is a frame, not the ground. Because the question is constitutively about people, the governed are the right anchor: Fig 2 :36 *"An anchor is legitimate when the question is constitutively about it."*, Fig 2 :37 *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."* Viable anchor: **behavioral reliance plus independently measured resolution of the matter**, per citizen-slot, which does not move because a commentator changes their opinion of the forum. Single-source for that selection (Fig 2 and the seat map), declared as such.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: citizen Γ, forum a, delivered outcome o′, indexed by citizen-slot s and domain d, ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because reliance follows a history of prior dealings, and a **comparison** bond for "more than" (`⋛`, Operators table :46-51, *"a threshold relation between two quantities"*). It is not symmetric: citizen and forum are not interchangeable.
- **Symmetry.** "Trust more than" is a threshold relative to the alternatives in that citizen's habitat, not an absolute quantity. Reliance is asymmetric in time: a forum lost is not recovered by reversing the act.
- **Scale.** Three scales are in view: the single citizen's step-by-step loop, the population of citizens and forums with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across repeated dealings. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The citizen loop** (one agent, one scale) | citizen, expectations, forum choice | action and residual reduction | yes: measured resolution of the citizen's matter | admitted |
| **D2 The forum habitat** (population) | citizens, state agencies, chiefs, elders, religious judges, mediators, brokers, informal providers | forum choice, repeat reliance, reputation | yes: behavioral routing and whether it resolves | admitted |
| **D3 The state channel** (ground maintainer) | state instruments, metrics, frontline officials, reports | contact with the governed ground | yes: the governed conditions that do not update on state metrics | admitted |
| **D4 The informal authority's closure** (composition) | local norms, customary rules, kinship, reputation, the forum's Γ | reach, |φ| cost of settling | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **X1 Trust as a free-floating national mood** | the electorate | a survey score | **no** anchor independent of the framing of the question | not a domain yet; a frame to be ranged against the ground |
| **X2 Informal authority as inherently legitimate because traditional** | the institution | tradition | tradition is a name, not an independently moving anchor | not a domain; candidate binding, withheld |
| **X3 State illegitimacy as sole cause** | the state | a deficit of legitimacy | already inside D3's channel failure | absorbed into D3, not separate |

X1 fails the anchor test and is excluded before any figure line is applied. X2 is Weber's *traditional authority* as a type name, a binding from the sociology frame, not a derivation; the world page says the legitimacy of the authority comes from tradition, but the figures give no primitive "tradition". X3 is absorbed rather than discarded: state channel failure is a real mechanism, but it is D3, not a separate total cause.

### 1.3 Partition or union

D1 and D3 overlap: the citizen's reading of the state is produced inside the state's channel. D2 and D4 overlap: the informal forum's closure exists only inside the habitat that supplies it. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **(C1)** the state's channel to this citizen's ground stays reachable, and **(C2)** an alternative closure in the citizen's habitat already holds a composing term for this residual. A citizen failing only C1 (the state has lost touch, but no alternative exists) and a citizen failing only C2 (the state works, but an alternative closure offers a cheaper settlement) are not different degrees of one failure; they are different compounds and need different instruments. The Library of Babel essay states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

A third condition, the valence of the forum relative to this residual (Fig 11 :49-51), is carried inside both compounds rather than treated as a lever, because the same forum can be a benefactor in one domain and a malfactor in another.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the citizen read how each forum actually treats people?) → 2 vocabulary (does their Γ have terms for what each forum affords in this domain?) → 3 objective (can they say what a resolved matter would count as?) → 4 planning (choose a forum) → 5 learn and carry (name what worked, verify it, carry it to the next matter). The middle link, having terms for what a forum affords and saying what would count as a resolution, is the one with no instrument. Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30). A national trust survey measures link 1 at population scale and calls it the whole chain.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which forum wins |
| 2 The Ground | behavioral reliance as anchor; convention versus verdict | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs citizen-to-population transfer |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a forum's capacity can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs availability of an alternative forum (C2) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repeat reliance as a sequence of handoffs |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs state channel failure (C1) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1, D2 and the valence flip |
| 12 The Bond | catalyst, cycle, isomer, functional group; arrangement is the substance | governs why the same forum helps here and harms there |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only, not authority types |
| Operators / Symbols | ⋛ threshold relation; ¬ refutation; R is the aim | governs the comparison and the refusal |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "authority types" (traditional = tradition, charismatic = energy, legal-rational = gradient) fit only by renaming social relations as physical states. That is a strain, so Fig 13 does **not** govern authority types. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S4). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about citizens and forums, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Trust is a per-citizen, per-domain residual, never a national mood

**Mode: `general` with a `specified` consequence for method. Domains D1, D2. Status: triangulated (Fig 1 and Fig 2, low overlap: per-slot metric vs anchor rule).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)

A national "trust in institutions" score is a quantity the survey frame produces. Using it to explain where citizens route their disputes scores the frame with its own output (Fig 1 :27). The ground is behavioral reliance plus resolution, measured per citizen and per domain. The same citizen can rely on a chief for land and a state court for a contract; an average destroys the only signal that says which slot switched and why. Fig 2 :37 licenses human judgment as the anchor for a question about people, which is why the citizen's own resolved matter, not the commentator's rating, settles it.

**Refuter:** a national survey score that predicts prospectively and per citizen-slot which forum the citizen will actually use next, with no behavioral or outcome measurement, and that survives a reframing of the survey question. If one exists, F1's methodological consequence is false.

### F2: The question is a union of two conditions and must be unbundled

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal, so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The two conditions have different instruments:

- A **C1 failure** (state channel) shows up as stale readings of citizen conditions, saturated metrics, pooled category data, and a bracket that no longer matches the citizen's residual (Fig 10 :26, Fig 7 :38).
- A **C2 failure** (alternative closure) shows up when no forum in the habitat holds a composing term for this residual, or when the only available alternative is a spent part (Fig 12 :119), and a reach that stops moving while the library of rules keeps growing (Fig 6 :21, Fig 7 :12).

A single lever, for example "improve state service delivery" or "recognise customary courts", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). F2 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F3: Quick loss of state trust is a failure of the channel, not a decay of the governed ground

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

A state loses citizens' reliance when its contact with what actually resolves their matters degrades while other forums keep resolving them. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the institutional version of aggregating across slots (Fig 1 :22): the signal that says which citizen is being failed disappears into a district average. Fig 7 adds the two-factor test:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket's fidelity across the handoff"** (Fig 7 :38)
> **"the ground's pressure on the room"** (Fig 7 :39)

A run of state reliance is a chain of handoffs. If either the bracket's fidelity (does the state's reading still match the citizen's matter?) or the ground's pressure (does the matter still need resolving?) goes to zero, the chain runs in place. Procedural-justice research supplies a low-overlap warning: giving people a voice, *"regardless of whether it is instrumental or non-instrumental"*, can be enough for a process to be viewed as fair. A fairness reading can therefore rise while resolution does not, which is a saturated metric (Fig 10 :26), not evidence that contact was maintained.

**Refuter:** a documented case in which citizens shift reliance to an informal forum while the state's bracket fidelity and the ground's pressure are both independently measured as high and not declining, and the informal forum delivers no better resolution. If both stay high, F3's mechanism is not the cause.

### F4: The smaller residual can come from a differing closure already held

**Mode: `specified`. Domain D4. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A state can keep refining its own procedures forever and never add the local atom that resolves a particular dispute: a kinship tie, a known history between neighbours, a customary rule the parties already accept. An informal authority is not "legitimate" as an essence; it is a frame whose closure already contains a composing term for this residual, so the citizen's reach is larger through that route at a lower |φ| cost. The legal-pluralism page reports that *"individuals would choose to bring their legal claims under the system that they thought would offer them the best advantage"*, and that *"the formal ideology of law as it is written exists alongside the informal ideology of law as it is used"*. That is the world-pool name for C2. Polycentric-law theory states the competing structure: providers *"compete or overlap in a given jurisdiction, as opposed to monopolistic statutory law"*. Both are corroborations of the shape, and both are in one broad law-and-authority evidence pool (Fig 2 :31).

**Refuter:** a citizen whose reach is demonstrably enlarged by an imported atom from a differing closure, who still routes the same domain to the state with a larger measured residual, across repeated trials. That breaks the reach argument in F4.

### F5: The same forum changes valence when the residual changes

**Mode: `specified`. Domains D2, D3, D4. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

This is the figure-grounded version of the observation that a chief who settles land disputes cheaply may also be the person who pressures a complainant into silence, or that a religious court trusted for family matters is distrusted for commercial ones. The forum's description does not record which it is. Under Fig 12 :119 it is a catalyst if it regenerates across uses and a spent part if it does not, and nothing in its title tells you which. The Weber page supplies a corroborating line from the sociology pool: *"Weber saw charismatic authority not so much as character traits of the charismatic leader but as a relationship between the leader and his followers."* That is a relation, not an essence, and it matches Fig 11 :50 rather than any list of authority types.

**Refuter:** a forum whose measured valence is invariant across a documented change of the citizen's residual and habitat. If no such change of valence can be found anywhere, F5 weakens to `general`.

### F6: Convergence is not corroboration; describe the residual before naming the frame

**Mode: `general` with a `specified` consequence. Domains D2, D4. Status: triangulated (Fig 8 and Fig 9, low overlap: surplus rule vs leave/arrive rule).**

> **"But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."** (Fig 8 :50)
> **"Residual first, frame second."** (Fig 8 :53)
> **"describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :27-28)

Both a state court and a customary court hold the atom "resolves a dispute". That shared atom is not evidence that they are the same kind of thing, and two fields agreeing that "informal authorities are trusted because they are local" is one witness if both draw on the same community-studies literature. Only the record of where each came from separates convergent derivation from adopted import (Fig 8 :53). The practical consequence: the question must be described in effect terms (which forum reduces which citizen's residual in which domain) before any frame, Weberian, pluralist, procedural-justice or resistance, is selected. The everyday-resistance page supplies the sharpest warning: *"Everyday resistance is a dispersed, quiet, seemingly invisible and disguised form of resistance"*. Routing away from the state can be a resistance practice rather than a legitimacy judgment; the same observed reliance has more than one possible source.

**Refuter:** two frames drawn from genuinely non-overlapping evidence pools that converge on the same predicted switching pattern per citizen-slot, with provenance for each showing no adopted import. That would be corroboration at maximum independence and would strengthen, not break, F6; the refuter that breaks it is a source-discriminating instrument showing that the shared atom was adopted from one frame into the other, so their agreement is one witness.

### F7: Legitimacy is a convention until it decides an outcome

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 2 and Fig 10, low overlap: correlation valence vs seat rules).**

> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)
> **"a convention that decides an outcome has stopped being one"** (Fig 2 :43)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Frames range against the ground. They do not negotiate with it."** (Fig 2 :45)

A shared belief that a chief is legitimate is a convention: agreement about meaning is the product. But the moment that belief determines where a citizen takes a land dispute, the convention has decided an outcome and has stopped being a convention. It is now a claim about the world and must be ranged against the ground separately. This is why asking people "do you trust this institution?" and treating the answer as the explanation of their routing is circular (Fig 1 :27). The SEP entry on authority confirms the source-based shape from a different method: *"Common ground among most theorists is that the directives of a legitimate authority are content-independent reasons for their subjects. On this view, the duty of the subject is grounded not in the content of the directive itself but in the nature of the source issuing it."* The source, not the content, carries the reason, which is exactly why a source claim must be checked against the ground rather than against another opinion.

**Refuter:** a case in which a convention about an authority's standing is shown by a source-discriminating instrument to have no effect on routing, while routing is fully predicted by outcome quality measured independently. That would dissolve F7's convention/outcome transition for this case.

### F8: The break is usually at vocabulary and objective

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-115 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In citizen terms, the usual failure is not that the citizen cannot plan which forum to use; it is that their Γ has no terms for what each forum affords in this domain and they cannot say what a resolved matter would count as. More reform budget lands above the break (Fig 3 :29-30), on information campaigns and service charters, while the vocabulary link has almost no instrument. F8 predicts that the highest-value diagnostic question is not "does this community trust the state?" but "at which link does the chain currently stop, and was that measured?"

**Refuter:** a documented citizen or group whose perception, vocabulary and objective links all measure as working and whose failure is located at planning (they know the forums and the criteria but cannot choose). That would falsify the "usually middle" claim, though not the dependency ordering.

### F9: Which specific authority closes R is a declared gap

**Mode: `general`. Status: figure-governed, with an independent essay corroboration from the same evidence pool.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"It cannot say which primitive is missing, because naming it would mean already holding it."** (Fig 13 :135)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

After a genuine re-census, no figure line governs the identity of the forum that will close a named citizen's residual in a named place. The figures return the two-condition shape and the valence rule; they do not return "the chief", "the sharia court", "the mediator" or "the state agency" as the answer. The missing thing is a **source-discriminating instrument**: from the same observed reliance reading, it would distinguish state-channel failure, alternative-closure reach, convention about standing, and coercion or dependency. The Hard Problem is About Source essay gives the mechanism: *"If several paths create the same behavior, then behavior is a projection with lossy information"*, and an instrument that reads green *"cannot comment on the source"*. What is owed is a better instrument, not a name. **Unreachable is a verdict here, not a silence.** Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* is cited as a substring, not as the opening of the line, per the second-seat check in `11_audit.md`.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per citizen and per domain, never a national average | general | Fig 1 :19, :22, :27 | figure-derived |
| Behavioral reliance plus resolution is the anchor, not survey mood | general | Fig 2 :29, :35, :37; Fig 1 :27 | triangulated F1 |
| The question is a union of contact and reach | general | Fig 9 :54, :55, :57 | figure-derived |
| State channel failure is a cause of switching | specified | Fig 10 :24, :26, :28; Fig 7 :37-39 | triangulated F3 |
| A differing closure supplies the cheaper settlement | specified | Fig 6 :14, :21, :23; Fig 8 :32 | triangulated F4 |
| The same forum changes valence with the residual | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F5 |
| Convergence is not corroboration | general | Fig 8 :50, :53; Fig 9 :27-28 | triangulated F6 |
| Legitimacy becomes a verdict when it decides routing | specified | Fig 2 :41, :43; Fig 10 :47 | triangulated F7 |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F8 |
| Which forum wins in a named place | not stated | none | gap: framework returns a kind of thing, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A citizen's measured reliance on an informal authority is unchanged when the state's channel to their ground is independently measured as reachable and paying (breaks F3, Fig 10 :24-29).
2. A citizen routes a matter to the state when no alternative closure in their habitat holds any composing term for that residual, while their state channel is measured as failing (breaks F4, Fig 6 :23, Fig 8 :32).
3. Reliance is invariant across a documented change of residual and habitat (breaks F5, Fig 11 :49-51).
4. One intervention restores both conditions in both failure types and leaves no categorically different residue (breaks F2, Fig 9 :57).
5. A source-discriminating instrument shows that the same reliance reading is produced by exactly one source, for example coercion alone, in all measured cases (breaks F9's metamerism claim).
6. A national trust score predicts prospectively and per citizen-slot where the citizen will route the next matter, with no behavioral or outcome measurement, and survives reframing of the survey question (breaks F1, Fig 1 :27, Fig 2 :29).
7. Fig 6's idempotence fails inside a closed set, or one of Fig 13's six terms is derived from the other five (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a behavioral, source-discriminating measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of legitimacy (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep C1 and C2 separate in every report. A blended "trust gap" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Measure behavioral routing and resolution per citizen-slot, not a national mood (Fig 1 :19, Fig 2 :29).
4. Describe the residual before selecting Weberian, pluralist, procedural-justice or resistance frames (Fig 8 :53, Fig 9 :27-28).
5. Treat every list of authority attributes as Γ, a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27, Fig 11 :40).
6. Use the law-and-authority literature as one budget filter and one corroborating witness, not as the verdict. Legal pluralism, polycentric law, procedural justice, Weber types and everyday resistance share a broad evidence pool (Fig 2 :31, :40).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which forum a community should use; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all opened 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs F9 and the stop in section 8.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- The recursive-self-improvement essay confirms the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A famous customary institution or a celebrated state reform is not evidence for either verdict.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Treated "trust" as a survey score in an early draft | **Retracted, kept as a frame** | It fails the anchor test (Fig 2 :29-30) and a frame cannot score itself (Fig 1 :27). Behavioral reliance plus resolution is the anchor |
| Planned to name "traditional legitimacy" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer; Weber's type is a binding from the sociology frame, recorded as such |
| Treated legitimacy as a convention throughout | **Narrowed** | It is a convention only while it does not decide an outcome; once it routes a dispute it is a verdict claim (Fig 2 :41, :43; Fig 10 :47) |
| Attempted to apply Fig 13's six-term set to authority types | **Retracted, strain S4** | Only fit by renaming social relations as physical states. Re-census: Fig 13 governs the honest stop, not authority types |
| Read everyday resistance as a direct corroboration of C2 | **Narrowed to a metamerism warning** | Routing away from the state can have more than one source; it corroborates F6's source rule, not a specific cause |
| Read polycentric-law theory as independent corroboration | **Narrowed** | It is a normative legal theory with its own stake; its agreement with the shape is weak and its overlap with the law pool is declared |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 2 are two figures, but both are framework-internal; triangulation here means low topical overlap, not independent evidence pools |
| Wanted to call F3 a `general` law about all states | **Narrowed to `specified`** | No behavioral measurement pays for the citizen-level version here |
| F9 row "which forum wins" | **Marked `gap`** | The source essay's metamerism rule: an instrument that reads a result *"cannot comment on the source"* |

**Strains sent to the log:** S1 (legitimacy as convention versus convention deciding an outcome), resolved by object distinction; S2 (survey trust as anchor versus frame), resolved by Fig 1 :27 and Fig 2 :29-30; S3 (the phrase informal authority treated as a natural kind), resolved by Fig 11 :50, valence is relative to the residual; S4 (Fig 13 six-term substrate applied to authority types), resolved by re-census to the honest-stop role only. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of a maintained state channel and an available differing closure, each with its own loop and instrument.
2. **What is the anchor?** Behavioral reliance plus independently measured resolution, per citizen-slot (Fig 2 :29, :37). Not a survey score (Fig 1 :27).
3. **Is the answer in the informal authority alone?** No. Fig 11 :39-40. Capability is citizen-and-habitat.
4. **How does state trust get lost quickly?** Channel decay: stale percepts, saturated metrics, pooled readings (Fig 10 :24-29); either factor of Fig 7 :37-39 going to zero.
5. **How does informal reliance get selected?** A differing closure already holds a composing term for the residual (Fig 6 :23), and the citizen's reach is larger through that route at lower cost (Fig 8 :32).
6. **Why does the trusted forum become the problem?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119).
7. **What can be said at the stop?** A two-condition shape with a valence rule and seven falsifiers. Not which forum wins, not a national score, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **citizens route their reliance to the forum whose residual is smaller, and that residual is smaller when the state's channel to their ground stays reachable and when an alternative closure already holds a composing term for the matter; a forum's valence changes with the residual, so the institution that helps in one domain can harm in another.** The two conditions are kept separate, never averaged. Which specific forum closes R in a named community is a `gap`, not a silence: the framework returns a shape, and the source-discriminating instrument that would name the cause is not held here. Mode `specified`, with `general` on the structural claims. No world source was allowed to flip a verdict; the one genuine strain (legitimacy as convention versus as verdict) was returned to the census and resolved by object distinction. No unresolved strain remains after re-census. Nothing here is settled by a measurement, and this derivation cannot settle the question it reports on.
