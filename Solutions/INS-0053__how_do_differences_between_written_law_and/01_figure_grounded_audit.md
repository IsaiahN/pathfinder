# Figure-grounded audit: INS-0053, written law versus everyday enforcement

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, fetched 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the institutional question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, and `THE_SEAT_MAP_Field_Guide_amended.md` are local framework files. World sources are secondary and are listed in `10_source_ledger.csv`. Every web page in that ledger was fetched on 2026-11-23.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the person's belief about what the written rule requires and what will follow from acting, mixed from private history and inherited priors. The Symbols table names the weighting: *"How far the belief leans on private history versus inherited prior."*
- **a** is the action: comply, evade, avoid, use a personal connection, move to another forum, contest.
- **Γ(b,a)** is the prediction obtained from the written rule.
- **o′** is what actually happened at the slot: a warning instead of a fine, a fine instead of a warning, a ignored violation, a favour, a dismissal.
- **s** is the person in a domain at a time. R is indexed by person, domain and case, never aggregated into a national "rule of law score".

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not compliance level. It is *which prediction the person's controller uses when text and enforcement disagree*, and *how that choice propagates into expectations and behaviour*. Call the sought-for object `E_s`, the expectation at slot s. Observed in the world: the same statute produces different expectations across neighborhoods, agencies, and repeat-versus-one-off actors (see F3, F5, F6 below). A frame that predicts the text alone fixes `E_s`, or that enforcement alone fixes `E_s`, leaves residual here.

State the residual as: *why does the gap between what the written rule predicts and what enforcement returns stay live at some slots and collapse at others, and why do expectations and behaviour follow one signal rather than the other?* This is an effect description. It names no theory, no "legal culture", no "deterrence", no "legitimacy", no "informality". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a set of conditions whose conjunction decides which signal grounds the slot, plus an instrument that discriminates a failure of the declared-text condition from a failure of the channel condition. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The same line names permissible anchors. For this question the anchor is the realized enforcement outcome and the person's subsequent behaviour, measured at the slot. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Official legal opinion, elite survey response, and the statute's own self-description move when pushed; they are instruments or frames at best. The habitat of legal actors updates (Fig 11 :73); the ground is what settles and does not.

A first strain appeared here and was kept visible. I initially wanted to call "what the law actually is" the anchor. That is a frame's description, not a ground. Re-census: the anchor is the enforcement event plus the behavioural response, both measurable without asking the actor to report their belief about the law. Recorded as strain S1, dissolved by re-census in section 6.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: person Γ, action a, enforcement outcome o′, indexed by slot s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because expectation at t depends on enforcement at t−1, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) because "legal" versus "illegal" and "fair" versus "unfair" are thresholds. It is not symmetric: the statute and the enforcement event are not interchangeable.
- **Symmetry.** Where the written rule and enforcement agree, their agreement is efficient for a convention (Fig 2 :41); where they disagree, the disagreement is not resolved by averaging them. Fig 12 :94: *"The arrangement is the substance."* The same statutory atoms under a different enforcement bond are a different social substance.
- **Scale.** Four scales are in view: the single person's loop, the enforcement office's habitat, the population of cases that ranks what offices produce, and the long time channel across cohorts. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The declared-text frame** (what is written) | legislature, codes, gazettes, official texts | declared meaning, statutory text | yes: the authoritative promulgated instrument. It is a nameable anchor for *what was written*, but not for what happens, so it is admitted as a frame, not as the ground | admitted as frame |
| **D2 The enforcement habitat** (what offices do) | police, prosecutors, regulators, clerks, judges, complainants | sanctions, warnings, discretion, delay, access | yes: the realized enforcement event and its record. The ground for the behaviour question | admitted |
| **D3 The person's expectation loop** (legal consciousness) | the person, their belief b, their weighting w, their memory | prediction, expectation, compliance decision | yes: the person's subsequent behaviour, observed without asking for their report | admitted |
| **D4 The legitimacy and legitimacy-channel seat** (why a rule is accepted) | community, peers, repeat players, outsiders, monitor | trust, cooperation, willingness to invoke the rule | yes: cooperation when the rule is unenforced and sanction is absent, measured at the slot | admitted |
| **D5 The time channel across cohorts** | accumulated cases, precedents, habits, remembered outcomes | contact with the ground across generations | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "The law on the books as a free-floating cause of behavior"** | the text alone | authority | **no** anchor independent of D2's response | not a domain yet |
| **X2 "Culture" as sole cause** | the community | custom | already inside D2 and D4 as habitat conditions and relations (Fig 11 :46) | absorbed, not separate |
| **X3 "The judge's or official's private intent"** | the individual official | intention | not independently observable without the decision record, which is D2 | absorbed into D2 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that texts never matter.

### 1.3 Partition or union

D1 and D2 overlap: the translation of a written rule into an enforcement routine is a compound with its own loop. D2 and D3 overlap: the person's expectation is formed inside the habitat they observe. D3 and D4 overlap: cooperation and prediction are different readings of the same contact. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1, declared meaning grounded.** Does the written rule's declared meaning stay in contact with what the ground pays for at the slot? Failure shows up as a statute that is a dead letter, a rule nobody enforces, or a rule that is enforced for reasons the text does not name.
- **C2, channel reachable.** Can the person read the enforcement signal at their slot, or is the channel saturated, pooled, or stale? Failure shows up as a person who has *"lost touch"* while the ground keeps paying others (Fig 10 :27).
- **C3, a seat able to refuse.** Can the person or an outside checker refuse a reading that the text and the office both endorse? Failure shows up when a convention that decides an outcome stops being a convention (Fig 10 :47).

A person failing only C1 and a person failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the person perceive the enforcement event at their slot?) → 2 vocabulary (do they have terms for what the rule affords and what counts as a violation?) → 3 objective (can they say what would count as fair treatment or success here?) → 4 planning (which action to take) → 5 learn and carry (what to tell the next cohort). The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument in most legal-cultural survey work. Fig 12 :115 says that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most reform effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not why it closes |
| 2 The Ground | anchor must not update; independence vs common pool; correlation valence | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across scales; methods up, head starts down; R_T | governs individual-to-office-to-population transfer |
| 5 Mint Pipeline | three guards as product; fifth kind is a refusal; make the shape an ordinary term | governs why a written rule cannot certify itself |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs change of legal order |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs habit, precedent, and repeated informal practice |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | declared meaning is not grounded; ground does not decay, channel does; refusal | decisive for C1, C2, C3 |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; introduce not subtract | decisive for D2 and D3 |
| 12 The Bond | arrangement is the substance; isomer, functional group, comparison | governs written-versus-enforced as a bond difference |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate to "legal rules" only fit by calling a statute a kind of spectrum and a sanction a kind of gradient. That is a strain, so Fig 13 does **not** govern the legal substrate directly. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S2). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about legal behaviour, `grounded` only if settled by a measurement. None is `grounded`.

### F1: A declared meaning does not settle what happens at the slot

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 10 and Fig 2, low overlap: ground maintainer vs anchor rule).**

> **"a declared meaning is not a grounded one"** (Fig 10 :18)
> **"Declaring a meaning does not ground it."** (Fig 10 :49)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)

A written rule is a declaration. It becomes operative at a slot only when something in the habitat pays for it. When text and enforcement diverge, the text is a frame that cannot correct itself; the ground, the realized event and the behavioural response, settles what the rule is *for that slot*. This is the figure-grounded core of the answer. The world states the same thing in the realist vocabulary. Holmes's prediction thesis, quoted in the legal realism reference page, is: *"The prophecies of what the courts will do in fact, and nothing more pretentious, are what I mean by the law"* (Wikipedia, Legal realism, accessed 2026-11-23). That is Fig 10 :49 in the law's own terms. Pound's 1910 article is titled *"Law in Books and Law in Action"* (Wikipedia, Roscoe Pound, accessed 2026-11-23). The distinction is not new; the figures supply the mechanism.

**Refuter:** a controlled case in which the written text changes, the enforcement channel is held demonstrably constant, and expectations and behaviour at the slot change with the text rather than with the event. If that survives, F1 is false.

### F2: Quick loss of expectation is channel failure, not decay of the rule

**Mode: `specified`. Domain D5. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"the output is not a verdict, it is you have lost touch"** (Fig 10 :27)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)

Expectations collapse when the person's contact with what pays degrades while the ground keeps paying someone else. The named decay modes are stale percepts, dropped transients, saturated metrics, and pooled readings. "Pooled readings" is the legal equivalent of aggregating across slots (Fig 1 :22): a national compliance rate hides which office or neighbourhood has lost touch.

Fig 7 adds the two-factor test:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

A tradition of compliance is a chain of handoffs from cohort to cohort. If either the fidelity with which the rule is transmitted or the ground's pressure on the case goes to zero, the chain runs in place. The unenforced-law reference page gives the world-side vocabulary: an unenforced law is *"formally in effect (de jure), but is usually (de facto) not penalized by a jurisdiction"* and is *"generally meaningless in practice"* (Wikipedia, Unenforced law, accessed 2026-11-23). Ground pressure has gone to zero while the text stays on the books.

**Refuter:** a documented case in which a person's expectations collapse while both bracket fidelity and ground pressure are independently measured as high and non-declining. If both stay high, F2's mechanism is not the cause.

### F3: R must be read at the slot; national averages and pooled readings destroy the signal

**Mode: `general` with a `specified` methodological consequence. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A cross-national "rule of law index" or an aggregate compliance rate scores the frame with a quantity the frame produces. It is a filter for where to look and a budget instrument, not a witness. The specified consequence: any claimed answer to INS-0053 that is an average over jurisdictions has already thrown away the only signal that says which slot has lost contact and where. The legal pluralism reference page reports the world-side observation that even within one courthouse there are *"dual ideologies of law... as the formal ideology of law as it is written exists alongside the informal ideology of law as it is used"* (Wikipedia, Legal pluralism, accessed 2026-11-23, reporting Merry 1986). An average over the two ideologics erases the very difference the question asks about.

**Refuter:** an averaged institutional statistic that predicts, prospectively and at the named slot, whose expectation will change next after a specified enforcement shift. If one exists, F3's consequence is false.

### F4: Expectations and enforcement mutually update when there is no anchor, so drift is invisible

**Mode: `specified`. Domains D2, D3, D4. Status: triangulated (Fig 2 and Fig 7, low overlap: anchor collapses vs mirror chain).**

> **"no anchor; each updates on the others"** (Fig 2 :13)
> **"is whoever had the most influence"** (Fig 2 :15)
> **"one evidence pool"** (Fig 2 :18)
> **"not two frames confirming each other"** (Fig 2 :21)
> **"The anchor must not update."** (Fig 2 :33)
> **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."** (Fig 2 :34)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)

When a person's expectation is formed from what officials say, and officials' enforcement priorities are formed from what they believe people expect, the two frames update on each other. They converge on whoever had the most influence, and the convergence reads as consensus. That is the named coherent-drift collapse, not a mere measurement difficulty. The unenforced-law page gives a concrete instance: a law may go unenforced because the authority does not want to do an unpopular thing, due to *"social pressure"*, a desire to be well regarded, or fear of rebellion. The authority updates on the expectation it is supposed to be measuring. Pound and Frankfurter's Cleveland study, as reported on the Roscoe Pound page, found that a press-manufactured "crime wave" produced *"caring 'more to satisfy popular demand than to be observant of the tried process of law'"* and a higher likelihood of miscarriages of justice (accessed 2026-11-23). That is F4 at the enforcement seat.

**Refuter:** a case in which expectation and enforcement are shown to be independent frames with low evidence overlap, both ranging against a non-updating outcome, and the divergence persists without either moving to the other. That would falsify the mutual-update reading for that case.

### F5: Independence decides whether agreement between text and practice means anything

**Mode: `general` structural, `specified` at the legal slot. Domains D1, D2. Status: triangulated (Fig 2 and Fig 8, low overlap: anchor triangulation vs union surplus).**

> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)
> **"Independence is one quantity read twice."** (Fig 8 :47)
> **"But shared atoms are not the signature."** (Fig 8 :50)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."** (Fig 8 :52)

Where the statute and the enforcement manual are written by the same office from the same sources, their agreement is one evidence pool talking. It is efficient for a convention, which is what a shared legal meaning is, and worthless as evidence that the rule is just. Where the two frames genuinely differ, their agreement on a named case can be triangulation. Convergence and adopted import look identical in the contents; only the record separates them. Legal pluralism gives the low-overlap frame: *"individuals would choose to bring their legal claims under the system that they thought would offer them the best advantage"* (Wikipedia, Legal pluralism, accessed 2026-11-23), which is a second closure available at the same slot.

**Refuter:** a case where the text and the enforcement record demonstrably share no evidence pool, and a change in one still predicts nothing about the other. That would break the independence reading.

### F6: The same written atoms under a different enforcement bond are a different social substance

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 12 and Fig 11, low overlap: composition structures vs habitat relations).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"The arrangement is the substance."** (Fig 12 :94)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :123)
> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

A statute and its enforcement practice share the same written atoms. What differs is the bond: a rule can be bonded to a warning, to a fine, to a connection, or to a file that is never opened. Under Fig 12 these are isomers, not variants of one thing. This is why two jurisdictions with identical statutory text can produce different expectations and behaviour. It is also why a transplanted statute does not transplant the practice: the import moves text atoms, not the arrangement that made them effective (Fig 6 :21). A formal rule that protects in one enforcement habitat becomes an instrument of harassment in another without any change to its wording, which is Fig 11 :49-51 at the institutional level. The new-institutionalist literature gives an independent, low-overlap witness: the foundational papers *"explained the practices of organizations not in terms of efficacy and efficiency, but in terms of legitimacy"* and *"The functions of an organization did not necessarily reflect rational or optimal ends, but were instead myths, ceremonies and scripts that had a veneer of rationality"* (Wikipedia, New institutionalism, accessed 2026-11-23, reporting Meyer and Rowan 1977 and DiMaggio and Powell). That is decoupling, the organizational-sociology name for F6.

**Refuter:** a pair of jurisdictions with identical statutory atoms and different enforcement bonds whose expectations are nevertheless invariant. If no such pair can be found after a genuine search, F6 weakens to `general`.

### F7: A convention that decides an outcome stops being a convention

**Mode: `specified`. Domains D1, D4. Status: single-source on the figure side (Fig 10), with the seat-map local rule as a same-framework corroboration, so one witness.**

> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"a convention nothing can check is a constant the seat authored, carrying the seat's authority"** (Fig 10 :48)
> **"Declaring a meaning does not ground it."** (Fig 10 :49)

When a written formula is treated as settling the case by itself, the formula has become a verdict, not a convention. The nomenclature matters here because law is full of declared meanings: a definition, a classification, a statutory presumption. Fig 10 :46 permits the seat to author conventions because nothing else can see across a seam; it forbids a convention from carrying a truth value about the world. The local seat map adds: *"a convention that decides an outcome has stopped being one"* (THE_SEAT_MAP_Field_Guide_amended.md :47). The operational test: ask whether the rule can be violated by the ground. If it cannot, it is a constant the institution authored, and it should be declared as such rather than reported as a fact about behavior.

**Refuter:** a rule that is treated as authoritative, is not checkable against any outcome, and yet reliably predicts behaviour. That would show that unverifiable conventions can carry world information, breaking F7.

### F8: A frame cannot certify its own legality, so the text cannot validate itself

**Mode: `general` structural, `specified` for legal institutions. Domains D1, D4. Status: triangulated (Fig 5, Fig 6 and the essay *The Recursive Self-Improvement Trap*, but the essay shares the framework author, so the external witness count is one).**

> **"AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it."** (Fig 5 :50)
> **"refuted: a term we hold is wrong; a term is owed that says so"** (Fig 5 :53)
> **"make the sought-for shape an ORDINARY TERM"** (Fig 5 :65)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)

The fifth kind of gap is a refusal, not an explanation. A legal system that holds a rule and is asked whether the rule is just is asking a frame to refuse one of its own terms. The framework's own limit is that the direction of the question cannot be checked inside the loop (Fig 5 :62-63); the remedy is a discipline, not a branch: write down what an answer would look like and let it accrue a residual. The realist tradition reaches the same limit from inside law: *"A theory of law and legal reasoning... is broadly characterized by the claim that law can be best understood by focusing on what judges actually do in deciding cases, rather than on what they say they are doing"* (Wikipedia, Legal realism, accessed 2026-11-23). The essay adds: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

**Refuter:** a legal order that certifies its own legitimacy without any external frame or outcome, and whose certification is later shown to be correct against a genuinely independent ground. That would break the self-validation limit.

### F9: Renewal of a legal order requires contact with a differing closure

**Mode: `specified`. Domain D5. Status: triangulated (Fig 6, Fig 8, Fig 13, three figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

A legal system can keep restating its own doctrine forever and add nothing. New law enters from contact with a frame whose closure differs: a neighbouring jurisdiction, a customary order, a social movement, a technology, a disaster. The legal pluralism page reports that in postcolonial societies *"a recognition of pluralism may be viewed as a roadblock to nation-building and development"* (accessed 2026-11-23), which is the political cost of closing the wall. Imports need a source gate and a shadow test (Fig 6 :12-13); a transplant without provenance is a wrong atom at a cost above starting from primitives.

**Refuter:** a legal order that renews its reach solely by internal doctrinal composition, with no atom entering from a differing closure, and that still passes the ground test across a changed habitat. That breaks idempotence and F9 with it.

### F10: The union must be unbundled before a reform lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal so the external witness count is one).**

Fig 9 :54, :55 and :57 are quoted in section 1.3. The conditions have different instruments:

- A C1 failure shows up as a dead letter, a declared meaning with no payment at the slot (Fig 10 :18, :49).
- A C2 failure shows up as saturated metrics, pooled readings, a channel that no longer carries the event (Fig 10 :24-27).
- A C3 failure shows up as a convention that has become a verdict and cannot be refused (Fig 10 :47).

A single lever, for example "rewrite the statute more clearly" or "add more police", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). F10 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged. The organizational institutionalism source warns that *"one can obtain fitness at some point and lose it elsewhere"* in social realms (Marks, Gerrits and Marx 2019, reported in the pilot's low-overlap pool and not reused here as a substantive quote), but the direct support is the decoupling result cited in F6.

**Refuter:** a single intervention that restores all three conditions in all failure types with no categorically different residue left over. That would collapse the union into a partition.

### F11: The break is usually at the middle link

**Mode: `specified`. Domain D3. Status: single-source (Fig 3, with Fig 12 :115 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In legal terms the usual failure is not that the person cannot perceive an enforcement event, and not that they cannot plan. It is that they have no terms for what the rule affords at their slot and cannot say what would count as fair treatment there. More legal education and more deterrence budget land above the break because that is where the measurements exist (Fig 3 :29-30). F11 predicts that the highest-value diagnostic question is not "does this population understand the law?" but "at which link does the chain currently stop, and was that measured?"

**Refuter:** a documented population whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify "usually at the middle", though not the dependency ordering.

### F12: Prestige and agreement are not validators at the legal slot

**Mode: `general`. Status: triangulated (Fig 2 and the essay *The Recursive Self-Improvement Trap*, low topical overlap but shared authorship, so one external witness).**

> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** (Fig 10 :59)
> **"Where a stake cannot be removed, declare it."** (Fig 10 :60)

From the essay, fetched 2026-11-23: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* A prestigious court, a famous commentator, or a large survey of lawyers can give a claim a hearing; none of them settles whether a person at a slot has changed their expectation. Seat Map :171 (local) puts it structurally: *"an interest in the reading is disqualifying."* Because the author of this package has an interest in the outcome, that stake is declared here rather than asserted away.

### F13: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per slot, never a national average | general | Fig 1 :19, :22 | figure-derived |
| A declared meaning does not ground itself | general / specified | Fig 10 :18, :49 | triangulated F1, F8 |
| The anchor is the realized event plus behaviour, not official opinion | general | Fig 2 :29, :30, :33 | figure-derived |
| Expectations follow the reachable enforcement signal when text and event diverge | specified | Fig 10 :24-27; Fig 7 :37-39 | triangulated F2 |
| Mutual update produces invisible coherent drift without an anchor | specified | Fig 2 :13-15, :33-35 | triangulated F4 |
| Independence decides whether text/practice agreement means anything | general | Fig 2 :31, :40, :41; Fig 8 :47, :52 | triangulated F5 |
| Same text, different bond gives a different social substance | specified | Fig 12 :5, :94, :117 | triangulated F6 |
| A convention that decides an outcome stops being one | specified | Fig 10 :47-49 | single-source F7 |
| Renewal needs an import from a differing closure | specified | Fig 6 :14, :21, :23 | triangulated F9 |
| The question is a union of three conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F11 |
| The universal size of the effect of text versus enforcement | not stated | none | gap: framework returns a shape, not a number |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule in the local seat map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A change of written text alone, with the enforcement channel held demonstrably constant, changes expectations and behaviour at the slot (breaks F1, Fig 10 :18, :49).
2. Expectations collapse while both bracket fidelity and ground pressure measure high and non-declining (breaks F2, Fig 7 :37-39).
3. An averaged institutional statistic predicts prospectively and per slot whose expectation changes next after a specified enforcement shift (breaks F3, Fig 1 :19, Fig 9 :60).
4. Expectation and enforcement are shown to be independent low-overlap frames, both ranging against a non-updating outcome, and divergence persists without either moving (breaks F4, Fig 2 :33-35).
5. A pair of jurisdictions with identical statutory atoms and different enforcement bonds has invariant expectations (breaks F6, Fig 12 :117).
6. A single intervention restores all three conditions and leaves no categorically different residue (breaks F10, Fig 9 :57).
7. Fig 8's idempotence fails inside a closed legal set, or one of the six physical terms is derived from five (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a slot-level ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of law and society (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep C1, C2 and C3 separate in every report. A blended "legal effectiveness score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat any list of legal rules as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the socio-legal literature as a budget filter and as one corroborating witness, not as the verdict. Legal realism, legal pluralism, decolonial institutionalism and new institutionalism partly share a law-and-society evidence pool (Fig 2 :31, :40). Procedural justice and organizational institutionalism are lower-overlap frames.
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name which particular rule will produce which particular expectation; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the local seat map, and three essays fetched 2026-11-23 (*The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Called "what the law actually is" the anchor | **Retracted, strain S1** | That is a frame's description. Re-census: the anchor is the realized enforcement event plus observed behaviour |
| Attempted to apply Fig 13's six physical terms to legal rules | **Retracted, strain S2** | Only fit by renaming a statute a spectrum and a sanction a gradient. Re-census: Fig 13 governs the physical substrate, not a legal Γ |
| Treated agreement between statute and practice as corroboration | **Retracted as a witness, kept as a convention** | Fig 2 :40 disqualifies agreement from a shared evidence pool; Fig 2 :41 makes it evidence for a convention only |
| Treated "law in action" as the name of the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. "Law in action" is a realist-school binding, recorded as such |
| Planned to call legal realism a `general` law of all legal systems | **Narrowed to `specified`** | It is a structural claim; no slot-level measurement pays for the universal version here |
| Used procedural-justice compliance findings as a direct measure of expectations | **Narrowed to mechanism-shape corroboration** | The findings are at the individual and group stratum; Fig 4 :20 requires the anchor to be re-named at the new scale |
| F13 row "universal size of the effect" | **Marked `gap`** | The essay's metamerism rule: an instrument that reads a result *"cannot comment on the source"*; what is owed is a discriminator, not a number |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 10 and Fig 2 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (frame description mistaken for anchor), resolved by re-census; S2 (Fig 13 physical substrate mapped onto legal rules), resolved by re-census to the honest-stop role; S3 (Fig 11 :49 actor valence relative to residual versus Fig 2 :29 non-updating anchor), dissolved by re-census into two different objects: the habitat updates, the ground settles; S4 (a convention that can be violated versus a rule that must be applied), kept as a live type question in F7 with a stated falsifier. No unresolved strain after re-census other than the live F7 type question, which is named and not hidden.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of grounded meaning, reachable channel, and a refusal seat, each with its own loop and instrument.
2. **What is the anchor?** The realized enforcement event plus the person's subsequent behaviour, not official opinion (Fig 2 :29-30, :33).
3. **Can the text ground itself?** No. A declared meaning is not a grounded one (Fig 10 :18, :49).
4. **How do expectations collapse quickly?** Channel decay: stale percepts, pooled readings, lost touch (Fig 10 :24-27); either factor of Fig 7 :37-39 going to zero.
5. **How does a divergence persist?** Mutual update without an anchor, coherent drift, a mirror chain (Fig 2 :13-15, :33-35; Fig 7 :12-13, :36).
6. **Why does the same text behave differently?** The bond differs; same atoms, different substance (Fig 12 :5, :94, :117), and valence flips with the residual (Fig 11 :49-51).
7. **What changes a legal order?** Import from a differing closure, with provenance and shadow test (Fig 6 :14, :23; Fig 8 :52).
8. **What can be said at the stop?** A shape and three conditions, with falsifiers. Not the universal effect size, not the particular rule, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **written law and everyday enforcement are two frames on one slot. When they diverge, expectations and behaviour follow the signal whose channel to the ground remains reachable, because a declared meaning does not ground itself; divergence persists when expectation and enforcement mutually update without a non-updating anchor; the same statutory atoms under a different enforcement bond are a different social substance; and a legal order renews only by import from a closure that differs.** The three conditions (C1 grounded meaning, C2 reachable channel, C3 a seat able to refuse) are kept separate, never averaged. Which particular rule produces which particular expectation, and the universal size of the effect, is a `gap`, not a silence: the framework returns a shape, and the instrument that would name the source at the slot is not held here. Mode `specified` on the substantive claims, `general` on the structural shape. No world source was allowed to flip a verdict; the one genuine framing conflict (realism's prediction thesis versus a purely textual account) was returned to the census and re-mapped. No unresolved strain remains other than the live F7 type question, which is recorded.
