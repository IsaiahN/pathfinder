# Figure-grounded audit: REA-0097, model design versus institutions, markets and law

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries a mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, fetched 2026-11-24: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post."* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources for figures.** `FRAMEWORK\reference\03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `FRAMEWORK\reference\FIGURES_README_canonical.md`, `FRAMEWORK\figures\THE_FORMULA.md` and `FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. Proposal header (seat reasoning)

```text
DECIDES:    The question is answered as a union, not a partition. Assign a harm-slot
            to model design only when the change is inside the model's closure AND
            changes contact with a ground that settles the harm. Assign it to
            institutions, markets or law when the harm is constituted by habitat
            actors, conditions or relations. A harm in two conditions is a compound
            with its own loop and two levers (Fig 9 :54-57; Fig 11 :39-40).
HOURS:      Derivation and audit 3-5h of agent time per seat; outreach artifacts 1h;
            world search 1-2h; independent re-census 1h. Bounded because the
            question stays at one stratum (deployment and governance), not a ToE.
PRIOR CASE: QMGR-0037 (retraction table applied) and BUS-0001 (union unbundled,
            two conditions kept separate). Both are the calibration cases.
ANALOGUE:   The Library of Babel searcher describes the residual in effect terms
            before choosing a frame; the habitat enumerates actors without
            composing them (Fig 11 :43-48).
LIMIT:      The framework returns a decision procedure, not a harm list. Fig 9 :32:
            "you get a kind of thing, never the answer itself." Naming which lever
            works for a named harm needs a ground reading, not an argument.
```

---

## 1. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot `s` (Formula step 1; Symbols table, `R`).

- **b** is what a developer or regulator believes the system will do, formed from private history and inherited priors (Symbols table, `w`).
- **a** is the lever. Two levers are compared: a change to the model (data, objective, training, mitigation, decoding) which composes inside `Γ`; or a change to institutions, markets or law (a rule, a price, a liability, an audit duty, a participation right) which changes the habitat.
- **Γ(b,a)** is what the current arrangement predicts will happen to the harm.
- **o′** is what actually happens to affected people: a measured outcome, a market result, a court ruling, a distribution of experienced harm.
- **s** is the harm-slot, indexed by affected group, application and time. R is never aggregated into a single "AI harm" score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

The phenomenon to explain is not the existence of a harm but **which lever reduces the slot residual**. Two models of the same harm can have the same size of residual and require opposite levers. A model whose training data overrepresents a stereotype (a design-origin harm) and a model whose output is used by a hiring system that the law does not audit (a habitat-origin harm) both produce "discrimination", but the first lever composes inside `Γ` and the second does not.

State the residual as: *for this harm-slot, does the gap between what the arrangement predicts and what people actually experience shrink when the model changes with the habitat held fixed, or only when the habitat changes, or only when both change?* This is an effect description. It names no theory, no "bias", no "alignment", no "governance". Those are candidate names withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a decision procedure with three outputs (design, habitat, compound), plus an instrument that discriminates a design-condition failure from a habitat-condition failure. Until bound, the shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."* So a harm's anchor is the outcome that settles it, not the metric the project reports, not the benchmark score, not stakeholder preference sampled from the same pool as the designers. From the essay *Decoding Tacit Knowledge*, fetched 2026-11-24: *"Courts of law rule on evidence, which neither side can move."* A court and a market are candidate anchors for institutional and market harms; a patient outcome is the named anchor for a medical harm. A benchmark that moves when the design team optimises for it is an instrument, not an anchor (see F5 and the Goodhart/Strathern source in section 7).

---

## 2. Domain census (before choosing any figure line)

### 2.1 Arity, symmetry and scale of R

- **Arity.** R is a four-place relation: harm-slot, lever, arrangement prediction, ground outcome, indexed by slot and ordered by time. It carries an **ordered** bond (`→` sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because a habitat change follows a design assessment, and a **comparison** bond for "which lever" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87; Operators table :48-51). It is not symmetric: changing the model and changing the law are not interchangeable.
- **Symmetry.** "Which lever" is a threshold relative to the ground's response, not an absolute property of the harm. Persistence of a harm is asymmetric in time: a harm removed by a design fix does not return by reversing the fix if the habitat has since changed.
- **Scale.** Three scales are in view. One agent's step-by-step loop (one model, one design iteration). The habitat of developers, deployers, regulators, markets and affected communities (Fig 4 population panel: *"many agents, a shared library, and something that ranks what they produce"*, Fig 4 :5). The channel between them, which carries benchmarks, audits, incident reports and metrics. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so `R_T` must be measured (Fig 4 :30).

### 2.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The model design frame** (one agent, one scale) | model parameters, training data, objectives, decoding rules, mitigations, developers | composition inside `closure(Γ)`; `|φ|` cost; residual reduction | yes: a held-out measurement the ground pays, e.g. a red-team result on affected groups | admitted |
| **D2 The institutional and market habitat** (population) | regulators, courts, standards bodies, markets, deployers, affected communities, incentives, liability rules | rules, prices, enforcement, participation, liability | yes: the market and the court, Fig 2 :29; *courts-of-law-rule-on-evidence* (tacit essay) | admitted |
| **D3 The channel and instruments** (between scales) | benchmarks, audits, impact assessments, monitoring, incident reports, metrics | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **D4 The affected people** (the ground for harm) | the persons who bear the harm, their outcomes | experienced harm, patient outcome, material loss, opportunity | yes: the outcome itself, *"a patient outcome"* (Fig 2 :29) | admitted |
| **X1 "Harm as a fixed property of a model"** | the model alone | intrinsic badness | **no** anchor independent of how the ground registers the harm; *"An actor's valence is relative to the residual, not a property it carries"* (Fig 11 :49) | not a domain yet; absorbed into the D1 and D4 compound |
| **X2 "Harm as a fixed property of society"** | society alone | structural injustice | no lever-independent anchor; already the habitat of D2 plus Fig 11 :46-47 conditions | absorbed into D2, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that model architecture is irrelevant. X2 fails for the mirror reason: "society" is not a lever and has no anchor separate from the outcomes in D4.

### 2.3 Partition or union

D1 and D3 overlap: the channel is inside the design frame, so their overlap is a compound with its own loop. D2 and D4 overlap: affected people are in the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

From *The Library of Babel*, fetched 2026-11-24: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

The unbundled conditions are: **(C1)** a change inside the model's closure that changes contact with the harm's ground; and **(C2)** a change to habitat actors, conditions or relations that changes what the ground pays for. A harm failing only C1 and a harm failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. Fig 9 :59: *"Which is the second-order value of a big lever, and usually the larger one: not that the pile is smaller, but that the residue is finally describable."*

This is the first structural result. The question as asked expects a list assigning every harm to one bucket. The figures forbid that shape. A single lever clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55).

### 2.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

Order for this question: 1 perception (can we read the harm per slot, and is the metric still returning something?) to 2 vocabulary (do we have terms for what each lever affords, and a comparison for design versus habitat?) to 3 objective (can we say what would count as harm reduction in our own terms?) to 4 planning (which lever, in which order) to 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :111-113: *"A vocabulary without bonds can name a state and cannot name a route to one."* and *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* Most governance effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 3. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing, not lever choice |
| 2 The Ground | market, measurement, patient outcome named as anchors; independence vs common pool | governs the decisive anchor test |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; `R_T` | governs scale transfer from model to habitat |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a design change is a real mint |
| 6 Closure / Reachability | import is the only operator that moves the wall; SEARCHED vs INWARD vs OUTWARD | governs design versus habitat levers |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repeated design iterations and audit rooms |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs what a second frame can add |
| 9 Leave / Arrive | union vs partition; describe residual first; filters vs witnesses | governs the form of the answer (decisive) |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access; declare stakes | governs which harms are channel failures |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; asymmetry of introduction | decisive for habitat-constituted harms |
| 12 The Bond | sequence, comparison, subtraction, negation; catalyst and cycle | governs lever types and their order |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop, not a physical analogy |

Strain test applied during this census: an early attempt to apply Fig 13's six physical terms to "AI harms" only fit by calling a training corpus a kind of energy and a regulation a kind of gradient. That is a strain, so Fig 13 does **not** govern the lever assignment. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 4. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about AI harms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The question is a union, not a partition

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 9 union rule and the Library of Babel bundle passage, low topical overlap: leave/arrive versus search/format).**

Fig 9 :54, :55 and :57 are quoted in section 2.3. The two conditions C1 (design changes contact) and C2 (habitat changes what the ground pays) have different instruments:

- A C1 failure shows up as a residual that does not move after the model changes, while held-out outcome readings per slot stay flat (Fig 5 :14, *"mechanism broken: a new term is owed"*).
- A C2 failure shows up as a model that improves on its benchmark while the material outcome for the affected group does not move (Fig 10 :26, *"stale percepts, dropped transients, saturated metrics, pooled readings"*).

A single lever, for example "fix the model", clears the region where only C1 holds and leaves the intersection standing. F1 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** one intervention that restores both conditions in all harm types with no categorically different residue left over. That would collapse the union into a partition.

### F2: Model design composes inside the closure; it cannot add the atom that is not there

**Mode: `general` for idempotence, `specified` for AI harms. Domains D1 and D3. Status: triangulated (Fig 6 wall operator and Fig 8 union surplus, low topical overlap: what moves the wall versus where imports live).**

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"the only operator that moves the wall"** (Fig 6 :14)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"An import adds no atom to the world."** (Fig 6 :25)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)

A model-design change is a mint or a re-fit inside `Γ`. It can reach only what `closure(Γ)` already spans. If the needed term is already in the closure and merely unfound, the remedy is more search, not a new atom:

> **"more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."** (Fig 6 :49)

This is the SEARCHED question (Formula step 7), asked first because it is cheapest. The INWARD question extends the instrument; the OUTWARD question imports from a frame whose closure differs, here the habitat. Harms whose cause is a missing term in the model's vocabulary can be addressed by design search or by extending the instrument. Harms whose cause is a habitat condition cannot be composed away inside `Γ`, because that condition was never an atom of the model.

**Refuter:** a model-only change that demonstrably adds a new primitive to the system's closure and is paid for at the ground with the habitat held fixed. That breaks idempotence and F2 with it. A model-only change that merely discovers an atom already in `closure(Γ)` does **not** refute F2; it is SEARCHED.

**World bearing (secondary only).** Amodei, Olah, Steinhardt, Christiano, Schulman and Mané, *Concrete Problems in AI Safety*, arXiv:1606.06565, 2016, opened 2026-11-24: *"accidents in machine learning systems, defined as unintended and harmful behavior that may emerge from poor design of real-world AI systems."* This is the design-frame case stated in the field's own vocabulary: wrong objective, costly supervision, unsafe exploration, distributional shift. **Corroborates** C1 for a subset of harms. It is one pool with the broader AI safety literature and does not speak to habitat-constituted harms.

### F3: Harms that are properties of agent-and-habitat cannot be designed away inside the model

**Mode: `specified`. Domains D1, D2, D4. Status: triangulated (Fig 11 capability/habitat and Fig 2 anchor rule, low overlap: habitat valence versus anchor invariance).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)

This is the decisive line for the question. A harm produced by the arrangement of model and deployment is not a property of the model considered alone. Changing weights, objectives or training data without changing the deployment habitat is an agent-only improvement. If it does not change contact with what pays, Fig 11 :40 says it changes nothing, however much it improves the benchmark.

> **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."** (Fig 11 :73)

Institutions, markets and law are habitat actors, conditions and relations:

> **"conditions: light, water, temperature, season, terrain"** (Fig 11 :46)
> **"relations: pollination, predation, competition, dependency"** (Fig 11 :47)

The point is not that a law is a species or a market is weather. It is that the figure's census rule applies: enumerate the actors in contact with the harm, their conditions and their relations, rather than composing a new property of the model. Fig 11 :43: *"The habitat is enumerated, never composed."*

**Refuter:** a controlled case in which a model-only change reduces a harm whose ground is a market, court or community outcome, measured prospectively and per slot, with the habitat demonstrably unchanged. If it survives, F3 is false.

**World bearing.** Weidinger et al., *Ethical and social risks of harm from Language Models*, arXiv:2112.04359, 2021, opened 2026-11-24: *"Risk mitigation approaches range from social or public policy interventions, to technical solutions and research management, to participatory projects and product design decisions."* Also: *"the expertise for identifying harmful stereotypes often lies with the lived experience of affected groups"* and *"establishing participatory mechanisms and institutions that can operate over time"*. The field's own taxonomy already accepts that mitigation is not only a design activity. **Corroborates** F3 at the habitat end, but shares a pool with the AI ethics literature, so it is one witness, not several (Fig 2 :40).

### F4: The decisive test is the anchor: what settles this harm?

**Mode: `general` for the anchor rule, `specified` for its application to harms. Domains D2 and D4. Status: triangulated (Fig 2 :29 anchor definition and Fig 11 :73 habitat/ground split).**

Fig 2 :29 and :30 are quoted in section 1.

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)

For a harm-slot the operational test is: name the thing that settles whether the harm was reduced, then check whether it moves when a design frame pushes on it. If it moves, it was an instrument, not an anchor. A benchmark score that falls when a team optimises for it is not the harm; a patient outcome, a market outcome or a court ruling is the candidate anchor. Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* The question here is constitutively about experienced harm, so experienced outcomes are legitimate anchors and designer agreement is not.

**Refuter:** a harm whose nominated ground (patient outcome, market return, court ruling) changes when a design frame pushes on it, so it was not an anchor. That breaks F4 and returns the derivation to the census.

**World bearing.** Jobin, Ienca and Vayena, *The global landscape of AI ethics guidelines*, Nature Machine Intelligence 1, 389-399, 2019, opened 2026-11-24: the paper reports *"substantive divergence in relation to how these principles are interpreted, why they are deemed important, what issue, domain or actors they pertain to, and how they should be implemented"* and *"highlight the importance of integrating guideline-development efforts with substantive ethical analysis and adequate implementation strategies."* Agreement on the word "ethical" did not settle implementation. **Corroborates** F4, with high overlap with the AI ethics pool.

### F5: Some harms are channel failures; model design is exactly the right lever there

**Mode: `specified`. Domain D3. Status: single-source for the figure (Fig 10), with one low-overlap world witness (Strathern 1997) for the saturated-metric clause.**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

A harm can persist because the channel that reports it is dead, not because the model or the habitat is wrong. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the harm-level version of aggregating across slots (Fig 1 :22): the signal that says which group is being hurt disappears into an average. Here model design, understood broadly as the design of the measurement channel, is the right lever: fix the percept, restore the transient, un-saturate the metric, disaggregate the reading. That changes contact without changing the ground.

Fig 7 adds the two-factor test:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

If either factor is zero, a series of design iterations is motion, not progress.

**Refuter:** a harm that persists after the stale percept, saturated metric or pooled reading is repaired, with the channel independently measured as restored. If it persists, F5's mechanism was not the cause; the harm belongs to F2 or F3.

**World bearing.** Marilyn Strathern, *'Improving ratings': audit in the British University system*, European Review 5(3), 305-321, 1997, read 2026-11-24 via the archived PDF: *"When a measure becomes a target, it ceases to be a good measure."* This is an anthropologist writing about audit, not an AI safety researcher, so the evidence pool is genuinely different. **Corroborates** Fig 10 :26 on saturated metrics and warns that a design fix to a metric may move the metric, not the harm. Not a witness for the lever assignment itself.

### F6: Institutions, markets and law are the habitat the seat acts on: introduction is available, exclusion is not

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 seat/habitat rules and Fig 6 import operator, distinct roles).**

> **"Where a seat exists, something is doing work, and it is exactly what the seat does: enumerate the habitat, rank by cascade, introduce actors, build instruments, read the ground."** (Fig 11 :37)
> **"The seat’s power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."** (Fig 11 :61)
> **"Which is why a managed ecosystem is permanent work rather than a solved state."** (Fig 11 :63)

Law and regulation are the seat acting on the habitat. They can introduce an actor (a duty, a right, an audit requirement, a liability), and they cannot subtract the habitat. A legal change therefore does not end the work; it changes who is in contact with the harm and what the ground pays. Fig 11 :64: *"adds to a habitat it still did not author."*

A tempting error is to call "moving a system out of a high-risk domain" a fix. Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** And Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** Both failure modes are silent: *"what you failed to reproduce"* and *"what you unintentionally introduced"* (Fig 11 :68-69). In AI terms, passing an internal safety evaluation proves the wiring of the evaluation, not the absence of the harm in deployment.

**Refuter:** an institutional intervention that removes an actor from a habitat and thereby removes the harm, with no substitution, no unchosen inherited actors and a ground reading that pays. That breaks the asymmetry claim in F6.

**World bearing.** The NIST AI Risk Management Framework, official NIST page, opened 2026-11-24: the RMF was *"developed through a consensus-driven, open, transparent, and collaborative process that included a Request for Information, several draft versions for public comments, multiple workshops, and other opportunities to provide input."* This is the habitat-side move in institutional form: introduce participating actors and instruments, do not pretend to subtract the domain. **Corroborates** F6 as a venue and as a practice, not as a measurement of harm reduction.

### F7: Harm valence is relative to the residual; no standing harm list survives a change of residual

**Mode: `general` for the rule, `specified` for AI harms. Domains D2, D3, D4. Status: triangulated (Fig 11 valence and Fig 7 room selection, low overlap).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** (Fig 11 :52)

The same holds for harms. A mitigation that helps one group can harm another; Weidinger et al. record exactly this: *"mitigation approaches to toxic speech can inadvertently lead to lower LM performance for some social groups."* And a lever that fixes a harm in one deployment becomes a malfactor when the residual changes. This forbids answering REA-0097 with a fixed table that assigns "toxicity" to design and "labour displacement" to law for all time. The assignment is relative to the harm-slot and its ground.

Fig 12 :119 adds the catalyst case: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** A mitigation that regenerates across deployments and a one-off patch behave differently, and nothing in the mitigation's description says which it is.

**Refuter:** a fixed harm-to-lever assignment whose membership is invariant across a documented change of the affected residual and ground. If no such change of valence can be found anywhere, F7 weakens to `general`.

### F8: Agreement inside the field cannot settle the split

**Mode: `general`. Domain D3 and all verification. Status: triangulated (Fig 2 anchor/independence and Fig 7 mirror chain, distinct roles).**

> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."** (Fig 2 :31)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

The AI harms field is largely one evidence pool: the same benchmarks, the same incidents, the same guidelines, the same labs. Agreement inside it about which harms are "technical" and which are "structural" is a convention about a shared meaning (Fig 2 :41), not a verdict about the world. Buying a second frame means an instrument with a different closure, for example an ecology or social-science frame pointed at the same outcome, not another paper quoting the same review.

Seat Map :171: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying. Where a stake cannot be removed, declare it."* A developer evaluating whether design alone fixes their harm has an interest in the reading; declare it and range it separately.

**Refuter:** two genuinely independent instruments with no shared evidence pool that agree on the lever assignment for a harm and are each wrong at the ground. Agreement would then have failed to buy independence; unlikely but checkable.

### F9: What the framework returns: a decision procedure, not a harm list

**Mode: `general`. Status: triangulated (Fig 9 shape limit and Fig 13 reach/stop, distinct roles).**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"Six members, and no amount of arranging produces a seventh: a new member would have to be a new kind, and composition only ever rearranges the kinds already held."** (Fig 13 :116)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

The canonical usage rule adds the limit in its own words: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. So the deliverable is the three-way decision procedure (design / habitat / compound) with its tests, not an authoritative ranking of named harms. The instrument that would name a specific harm's lever is not held in this folder.

From *The Hard Problem is About Source*, fetched 2026-11-24: *"the instrument is speaking only about what it measured, it cannot comment on the source."* A benchmark reading that says "this model is biased" does not say whether the source is the training corpus or the deployment institution. What is owed is a discriminator, not a name.

**Status: `gap`, not silence.** The gap is an instrument that discriminates design-origin from habitat-origin per slot. It is characterized in effect terms in section 5 and in `08_expert_verification_packet.md`.

**Refuter:** a figure-derived procedure that assigns a named harm to a unique lever and is then confirmed at the ground without any discriminating instrument. That would refute the shape limit.

### F10: Filters are not witnesses: severity and prevalence budget the search

**Mode: `general` with a `specified` methodological consequence. Status: triangulated (Fig 9 :60 and Fig 1, distinct roles).**

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A harm list ranked by scale of coverage, media attention or aggregate severity is a budget filter: it says what gets tried first. It does not say which lever will work for a named slot. A "most harmful AI risk" table scores the frame with a quantity the frame produces. The per-slot residual is the witness.

**Refuter:** an averaged harm-severity statistic that prospectively predicts, per named slot, which lever will reduce the ground outcome. If one exists, F10's methodological consequence is false.

### F11: Conflicts and re-census

**Mode: `general`. Status: figure-governed.**

Hardin's *The Tragedy of the Commons*, Science 162, 1243-1248, 1968, read 2026-11-24, says in its abstract: *"The population problem has no technical solution; it requires a fundamental extension in morality."* Read literally against AI harms this would say "no model design ever helps", which **conflicts** with F2 and with Amodei et al. The conflict sends us back to the census, never to a softer reading. Re-census: Hardin's "technical solution" is a solution inside a given incentive structure; the extension in morality is a habitat change (Fig 11 :61 introduction of actors). Under that mapping Hardin is a low-overlap analogue for F3 and F6, not a universal ban on design. The binding is recorded as an import with no source gate for the AI case, so it carries zero evidentiary weight for the verdict (Fig 6 :23; Fig 8 :50-52).

MathisonSlee et al., *Fourteen propositions for resilience, fourteen years later*, Ecology and Society 27(3):8, 2022, read 2026-11-24, describe *"a 'rigidity trap,' where a system stuck in one phase of the adaptive cycle becomes highly connected, rigid, and inflexible. System capacity for novelty is diminished, leading to a decrease in adaptive responses to shocks."* This **corroborates** Fig 6 :21 and Fig 7 :36 at a different stratum, with no shared evidence pool with AI safety. It is a witness for the mechanism shape, not for the AI lever assignment.

### F12: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per harm-slot, never an aggregate harm score | general | Fig 1 :19, :22 | figure-derived |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| Design composes inside closure and cannot add an atom | general | Fig 6 :21, :14; Fig 8 :32 | triangulated F2 |
| If the atom is already in closure, search rather than import | general | Fig 6 :49 | figure-derived (SEARCHED) |
| Harms of agent-and-habitat cannot be designed away in isolation | specified | Fig 11 :39, :40 | triangulated F3 |
| The anchor is the outcome, not the benchmark or designer agreement | general | Fig 2 :29, :35 | triangulated F4 |
| Channel failures are correctly addressed by design of the measurement | specified | Fig 10 :24, :26 | single-source F5 |
| Institutions act on the habitat by introduction, not exclusion | specified | Fig 11 :37, :61, :63 | triangulated F6 |
| Harm valence is relative to the residual | general | Fig 11 :49-51 | triangulated F7 |
| Agreement in one pool is not corroboration | general | Fig 2 :31, :40; Fig 7 :36 | triangulated F8 |
| Framework returns a procedure, not a harm list | general | Fig 9 :32; Fig 13 :134 | triangulated F9, `gap` for names |
| Severity rankings are filters, not witnesses | general | Fig 9 :60; Fig 1 :26-27 | triangulated F10 |
| Which named harm goes to which lever at the ground | not stated | none | `gap`: no discriminating instrument held |

---

## 5. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. One intervention restores both conditions across all harm types and leaves no categorically different residue (breaks F1, Fig 9 :54-57).
2. A model-only change demonstrably adds a new primitive to the closure and is paid for at the ground with the habitat held fixed (breaks F2, Fig 6 :21, :23; Fig 8 :32).
3. A model-only change reduces a habitat-constituted harm at the ground with the habitat unchanged (breaks F3, Fig 11 :39-40).
4. A nominated ground moves when a design frame pushes on it, so it was not an anchor (breaks F4, Fig 2 :29-30).
5. A channel measured as restored leaves the harm unchanged, or a harm persists with channel and ground both measured as working (breaks F5, Fig 10 :24-29; Fig 7 :37-39).
6. An institutional intervention removes an actor from a habitat, with no substitution and no unchosen inherited actors, and the ground pays (breaks F6, Fig 11 :61, :66).
7. A fixed harm-to-lever assignment stays invariant across a documented change of residual and ground (breaks F7, Fig 11 :49-51).
8. Fig 6's idempotence fails inside a closed set, or Fig 9's shape limit is beaten by a figure-derived named assignment confirmed at the ground (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a per-slot ground reading has paid for the lever assignment.

---

## 6. Recommendation

1. Do not answer with a partition. Unbundle into C1 (design changes contact) and C2 (habitat changes what the ground pays), and keep the intersection as a named compound (Fig 9 :54-57).
2. For each harm-slot, name the anchor first and test whether it moves when pushed (Fig 2 :29-30). If it moves, it is an instrument; keep looking.
3. Assign lever by closure and anchor, not by the harm's label. Inside the closure and paid at the ground, design. Constituted by habitat actors, conditions or relations, institutions, markets or law. Both, compound with two levers and two instruments.
4. When the needed term is already in `closure(Γ)`, run SEARCHED before importing (Fig 6 :49, Formula step 7). Do not add a regulation to solve a problem that more search inside the frame would solve, and do not add model complexity to solve a problem that only a rule can solve.
5. Keep verdicts per slot, never averaged. A blended "AI harm score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
6. Use the AI harms literature as a budget filter and as one witness, not as the verdict. Weidinger, Jobin, Amodei and NIST largely share an evidence pool (Fig 2 :31, :40).
7. Repair the channel before blaming the ground (Fig 10 :29). Many design-side "fixes" are really instrument repairs.
8. Offer the formula as a method only after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not publish a definitive harm-to-lever table; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 7. Canonical usage check and retraction/confirmation log

Canonical sources read after the first six sections: `FRAMEWORK\reference\FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Hard Problem is About Source*, *The Recursive Self-Improvement Trap* and *Decoding Tacit Knowledge*, all fetched 2026-11-24.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also gives the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs F9 and recommendation 9.
- *The Recursive Self-Improvement Trap* confirms the simulation status: *"The catch is that the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And the stake rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Applied Fig 13 six-term physical set to "AI harms" | **Retracted, strain S1** | Only fit by renaming a corpus as energy and a regulation as a gradient. Re-census: Fig 13 governs the physical substrate, not a harm-slot's Γ |
| Treated the Weidinger 21-risk taxonomy as the answer's partition | **Retracted as a witness, kept as a filter** | It is a vocabulary of risk areas, not a ground reading of lever assignment (Fig 9 :60) |
| Read "no technical solution" (Hardin 1968) as a universal ban on design fixes | **Narrowed, conflict resolved by re-census** | "Technical" means inside a fixed incentive structure; mapped to habitat-side introduction. Zero evidentiary weight as an import without a source gate (Fig 6 :23) |
| First assigned "exclusionary norms" wholly to model design | **Retracted, re-census R1** | Origin is in training data but material harm is through deployment and institutions, so it is a union compound (Fig 9 :55-57) |
| Called Fig 11's habitat "institutions" without remainder | **Narrowed** | Habitat is actors, conditions and relations; institutions are a subset with a seat. The ground, not the habitat, settles (Fig 11 :73) |
| Treated F2 "cannot add an atom" as forbidding all model-design fixes | **Narrowed** | SEARCHED covers atoms already in closure (Fig 6 :49); only OUTWARD import needs a differing frame |
| Used a benchmark drop as evidence the harm was reduced | **Retracted as a witness, kept as a channel signal** | A metric that becomes a target stops measuring the harm (Strathern 1997; Fig 10 :26) |
| F5 called `triangulated` in an early draft | **Narrowed to single-source** | Fig 10 is one figure; Strathern corroborates the saturated-metric clause only, not the lever rule |
| Wanted to call the union rule a `grounded` law about AI | **Narrowed to `general` + `specified`** | No per-slot ground measurement pays for the AI application here |

**Strains sent to the log:** S1 (Fig 13 applied to harms), resolved by re-census. R1 (exclusionary norms as design-only), resolved by union. No unresolved strain after re-census.

---

## 8. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: it is a union of C1 (design changes contact) and C2 (habitat changes what the ground pays), each with its own instrument.
2. **What is the anchor?** The outcome that settles the harm, named in Fig 2 :29 as a measurement, a market or a patient outcome; courts of law per the tacit essay. Not designer agreement, not the benchmark (Fig 2 :35).
3. **Can design alone move a habitat-constituted harm?** No. Fig 11 :39-40. Capability and harm are properties of agent and habitat.
4. **What can design fix?** Mint or re-fit inside closure (Fig 6 :21), SEARCHED when the atom is held (Fig 6 :49), and channel repairs: stale percepts, saturated metrics, pooled readings (Fig 10 :24-29).
5. **What needs institutions, markets or law?** Habitat actors, conditions and relations (Fig 11 :46-47), where the seat's power is introduction and not exclusion (Fig 11 :61), and where isolation substitutes rather than removes (Fig 11 :66).
6. **Why does the answer change over time?** Valence is relative to the residual (Fig 11 :49-51); a mitigation can be a catalyst or a spent part (Fig 12 :119).
7. **What can be said at the stop?** A three-way decision procedure with falsifiers. Not a definitive harm list. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 9. Updated verdict

The shape survives: **assign a harm-slot to model design when the change composes inside the model's closure and changes contact with the outcome that settles that harm; assign it to institutions, markets or law when the harm is constituted by habitat actors, conditions or relations; treat a harm in both conditions as a compound with its own loop and two levers.** The two conditions are kept separate, never averaged. Channel failures are the design side's cleanest case; agent-only improvements that leave the habitat unchanged are the design side's characteristic failure. Which named harm falls into which bucket at the ground is a declared `gap`, not a hidden answer: the discriminating instrument is not held here.

Mode: `specified` on the lever assignment, `general` on the union and anchor structure. No world source was allowed to flip a verdict; the one genuine conflict (Hardin) was returned to the census and re-mapped as a low-overlap analogue. No unresolved strain remains after re-census. This is a simulated derivation checked for internal consistency against the figures, not a ground reading, and it cannot settle the question it reports on.
