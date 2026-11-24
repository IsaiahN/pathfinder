# Figure-grounded audit: INF-0096, institutions and the reliability of public information

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, fetched 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post."* The same essay adds: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `FRAMEWORK/figures/THE_FORMULA.md` and `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` were opened this session. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Gamma(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is what an audience or community currently takes to be the case about a claim, formed from its own history and inherited priors.
- **a** is the institutional action: verifying, labelling, ranking up or down, adding context, removing, setting a source standard, convening a review.
- **Gamma** is the institution's library of verification routines, trusted-source lists, editorial norms and moderation rules.
- **o′** is what actually returns: whether the claim matches the world, and separately whether legitimate evidence remained reachable to the people who needed it.
- **s** is the claim-slot and the community-slot. R is indexed by both, never averaged into one "information quality" number.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

There are therefore two residuals, not one, and they are different in kind:

- **R_truth:** the gap between what the information environment presents as the case and what the ground returns. This is the misinformation residual.
- **R_silence:** the gap between the set of claims and evidence that remains reachable in the environment and the set that would pay against the ground. This is the suppression residual. A true minority claim that becomes unreachable is a live R_silence even if the global accuracy metric improves.

The question "can institutions make public information more reliable without suppressing legitimate disagreement or minority evidence" is the demand that R_truth fall while R_silence stays near zero. That is a conjunction, not a trade-off on one dial.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a set of conditions whose conjunction reduces R_truth without growing R_silence, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, the shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*

- For R_truth the anchor is the ground: what in fact happened, measured per claim. A "trust score", an engagement metric, a consensus count and an institution's reputation all move when pushed, so they are instruments at best.
- For R_silence there is a dual anchor, and the duality must be stated rather than hidden. Fig 2 :36-37: *"An anchor is legitimate when the question is constitutively about it"* and *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."* The question of whether an information environment is good for people is constitutively about people, so human judgment is the right anchor there. But whether the suppressed minority claim was in fact true is settled by the ground, not by how many people endorse it. Human judgment as a collective must be triangulated by independent frames ranging against the ground (Fig 2 :31-32), never negotiated into a single consensus (Fig 2 :35).

This dual-anchor reading is a `specified` structural claim, not a measurement.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R_truth is a three-place relation (claim, institution's action, ground return), indexed per claim and community and ordered in time. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "more reliable" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: claim and ground are not interchangeable. R_silence is a reach relation over the habitat of claims, so it is a comparison between what the closure can compose and what the habitat actually holds.
- **Symmetry.** "Reliable" is a threshold relative to a ground, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). Suppression is asymmetric in time: a claim removed from reach does not return by reversing the action.
- **Scale.** Three scales are in view: the single claim checked by one verifier, the population of claims in a shared information environment with something that ranks them, and the channel across time through which trust and reach decay or hold. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The verification loop** (claim checked against world) | claim, verifier, evidence, audience | residual reduction, R_truth | yes: the ground, what in fact happened (Fig 2 :29) | admitted |
| **D2 The information habitat** (population of claims) | claims, sources, minority communities, ranking systems, norms | reach, contact, R_silence | yes: the ground for whether a suppressed claim would pay, and human judgment for whether the environment is good for people (Fig 2 :36-37) | admitted |
| **D3 The institution's library** (composition inside the institution) | atoms: standards, routines, source lists; bonds between them | reach (what can be composed), cost of a ruling | yes: settlement against the ground (Fig 5 :32, *"then check it against the ground, then carry it up"*) | admitted |
| **D4 The trust channel** (across time) | metrics, labels, percepts, reputation | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Consensus as truth** | the agreeing crowd | agreement | **no** independent anchor. Agreement moves when pushed; it is an instrument, not the ground | not a domain yet |
| **X2 "Neutral" moderation with no ground contact** | the moderator | procedural correctness | no ground contact. The institution's own procedure cannot settle what it produced | not a domain yet |
| **X3 Reputation of the institution as verdict** | the institution's name | prestige | already inside D4 as a channel quantity; no independent anchor | absorbed into D4 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that crowds are never useful. Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* X2 and X3 are excluded for the same reason: they are frame-internal quantities (Fig 1 :27).

### 1.3 Partition or union

D1 and D3 overlap: the verification library sits inside the institution's loop, so their overlap is a compound with its own loop. D2 and D4 overlap: the trust channel is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1:** the institution keeps its channel to a non-moving ground reachable (R_truth can fall).
- **C2:** the institution keeps reach to closures that differ from its own, so minority evidence remains an available import (R_silence stays near zero).
- **C3:** conventions (what counts as evidence, what a label means) stay conventions and never decide an outcome (Fig 2 :43).

An institution failing only C1 and one failing only C2 are not different degrees of one failure. They need different instruments. A single lever, for example "increase the accuracy score and remove what fails it", clears the region where only C1 holds and leaves the intersection and the C3 violation standing (Fig 9 :55). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the institution read the ground response per claim?) to 2 vocabulary (does its library have terms for what a claim affords, and for what "legitimate disagreement" would look like?) to 3 objective (can it say what counts as progress on R_truth and R_silence separately?) to 4 planning (which intervention) to 5 learn and carry (prove it, record it, carry it up).

The middle link is the one that usually breaks. Fig 3 :24-26: *"Why the middle link is where chains usually break."* Perception has obvious failures and obvious tests; planning has obvious failures and obvious tests; having terms for what the situation affords and being able to say what would count as progress has neither. An institution that can detect false claims but cannot say what would count as preserving legitimate disagreement is broken at the middle link, and more verification budget lands above the break (Fig 3 :29-30).

Recipe order: refuse before mint (Formula step 2); describe the residual before choosing a frame (Fig 9 :27-28); settle each first-order claim before composing rules over it (Fig 12 :104).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not how it is reduced |
| 2 The Ground | ground is a named anchor; independence vs common pool; correlation valence | decisive for C1 and C3 |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | methods cross up, head starts down, R_T | governs what an institution may publish |
| 5 Mint Pipeline | guards as product; the fifth kind, REFUTED | governs correction as refusal, not deletion |
| 6 Closure / Reachability | import is the only operator that moves the wall | decisive for C2 |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs independent verification |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs source handling |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; asymmetric power, unauthored selection | decisive for intervention design |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; introduction available, exclusion not | decisive for D2 |
| 12 The Bond | catalyst, cycle, two currencies that do not add | governs why a reliability lever becomes a rigidity |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | negation is a refutation; a vocabulary without it can only accumulate | governs what a correction can be |
| Symbols table | R is the aim; the ground is the anchor | no R is stated by a trust score |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate to "information" only fit by calling a source a kind of energy and a moderation rule a kind of gradient. That is a strain, so Fig 13 does **not** govern information content. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about institutions, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Measure per claim and per community, never one accuracy average

**Mode: `general` with a `specified` consequence for institutional dashboards. Domains D1, D2, D4. Status: triangulated (Fig 1 and Fig 10, low overlap: per-slot residual vs channel decay).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)

A single "percentage of accurate information" is a pooled reading (Fig 10 :26) and a frame-internal quantity (Fig 1 :27). It can rise while a minority slot goes dark, because the live signal disappears into the average. Per-slot indexing is what lets the institution see where to look.

The world corroborates the mechanism at a different stratum. Pennycook and Rand 2019 report that *"excluding ratings from participants who were not familiar with a given news source dramatically reduced the effectiveness of the crowd"* (PNAS 116(7), read via PMC 2026-11-23). The aggregate crowd looked reliable only because unfamiliar sources were distrusted by default; once those ratings were removed the discrimination collapsed. That is a per-slot effect hiding inside an aggregate, and it is also a warning that a single trust number can be an artifact of who was familiar. One witness, not a verdict.

**Refuter:** an averaged environment-level accuracy statistic that predicts prospectively and per claim which minority slot will lose reach next, with no loss of discrimination in that slot. If one exists, F1's methodological consequence is false.

### F2: The ground settles truth; consensus cannot be the anchor

**Mode: `general` for the anchor rule, `specified` for institutions. Domains D1, D3. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor vs ground maintainer).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :30)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"Frames range against the ground. They do not negotiate with it."** (Fig 2 :45)

Fact-checkers, platforms and newsrooms are frames. Their agreement is not the ground. A trust score, a consensus list and a reputation metric all move when pushed by publicity or coordination, so they cannot settle what a claim is worth. What settles it is the per-claim return from the world.

Pennycook and Rand 2019 found that *"politically balanced layperson ratings were strongly correlated (r = 0.90) with ratings provided by professional fact-checkers"*. That is corroboration that crowd ratings can be a budget filter for where to look, not that the crowd is an anchor for a verdict. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

**Refuter:** a demonstrated case in which a consensus metric, with no contact with the per-claim ground, predicts new claim outcomes prospectively at least as well as ground measurement and does not drift when the raters are pushed. That would break the anchor rule for this domain.

### F3: A convention that decides an outcome has stopped being a convention

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 2 and Fig 10, low overlap: correlation valence vs ground maintainer's prohibitions).**

> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)
> **"Guard, from Figure 10: a convention that decides an outcome has stopped being one."** (Fig 2 :43)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"a declared meaning is not a grounded one"** (Fig 10 :18)

This is the hinge of the whole question. Institutions legitimately author conventions: what "verified" means, which standard a source must meet, what a label is for. Agreement about a shared meaning is the product, not a corruption (Fig 2 :41). But the moment a source list or a label becomes the thing that decides whether a claim is true, the convention has crossed into being a verdict and has stopped being a convention. That is the structural mechanism by which reliability work suppresses minority evidence without anyone intending to.

The same rule forbids the opposite error. Fig 10 :53: *"And a prohibition nothing can satisfy is a prohibition stated wrong."* A policy of "never remove any claim for any reason" is a prohibition no real institution can meet, so the honest design question is not zero suppression. It is what the institution is allowed to do (introduce context, record provenance, range against ground) and what it is not allowed to pretend (that its convention is a verdict).

**Refuter:** a convention that decides an outcome, is declared as such, and still improves per-claim truth contact under a habitat substitution that removes the ground's payment for the convention's own source list. If that holds, F3 is false.

### F4: Disagreement is an import from a closure that differs, and cutting it shrinks reach

**Mode: `specified`. Domain D2. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

Minority evidence is precisely the atom an institution does not already hold. If the institution only composes within its trusted-source closure, it can never reach what the minority source holds, no matter how long it searches (Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."*). So suppressing minority evidence does not merely risk a social harm. It removes the only operator that can expand the institution's reach, and therefore makes it less reliable about the world, including about the claims it was trying to check.

Hong and Page's diversity result is a low-overlap corroboration from mathematics and complex systems. The University of Michigan report of their PNAS paper states that a diverse, randomly selected pool outperforms a team of the best problem solvers because *"A person's expected contribution is contextual, depending on the perspectives and heuristics of others who work on the problem"* (UMich News, 2004). This is Fig 8 :45 in a different field. It is a university news summary of the paper, not the paper itself, so it carries one witness weight and is recorded that way in the ledger.

**Refuter:** an institution that cuts contact with every differing closure and still improves per-claim truth contact across a change of habitat, with no new atom entering. That breaks idempotence and F4 with it.

### F5: Independent low-overlap verification, not one fact-checking consensus

**Mode: `specified`. Domain D1. Status: triangulated (Fig 2 and Fig 7, low overlap: independence vs selection between rooms).**

> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."** (Fig 2 :31)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)

A network of fact-checkers all reading the same wire services and the same platform feeds is one long room. Adding more of them raises the vocabulary and does not add an anchor. Progress needs rooms with low overlap, selected against the residual the last room surfaced.

Peng and Grimmelmann 2024 supply a low-overlap engineering and law witness. Their bridging proposal promotes counterspeech approved by users of *"diverse viewpoints"* and notes that it *"adds context to speech rather than removing it entirely"* (arXiv:2410.12699). That is the same two-move shape as F4 plus F6: keep the claim reachable, and require low-overlap agreement before promoting a correction. They also report that current Community Notes can be too slow to build consensus, which is an honest limit on the mechanism, not a refutation.

**Refuter:** a verification regime in which all checks draw on one evidence pool and still produces new, ground-verified readings of claims across a habitat change without importing a differing frame. Under Fig 7 :36 that should be impossible.

### F6: Introduce, do not subtract. Exclusion is not available

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 and Fig 10, low overlap: habitat asymmetry vs unauthored selection).**

> **"The seat's power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."** (Fig 11 :61-62)
> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"what you failed to reproduce is invisible until the goal fails"** (Fig 11 :68)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)

An institution can add context, add a source, add a correction, add a divergent review. It cannot subtract the habitat of claims. A removal is not the end of the claim; it substitutes a habitat, and two things become invisible until late: what the substitute failed to reproduce, and what it unintentionally introduced. This is the figure-grounded reason to prefer labels, context, provenance and bridging notes over deletion.

The IFCN Code of Principles is an institutional witness from the field itself. Its public page states that *"nonpartisan and transparent fact-checking can be a powerful instrument of accountable journalism; conversely, unsourced or biased fact-checking can increase distrust in the media and experts while polluting public understanding"* (Poynter IFCN, fetched 2026-11-23). Note the shape: the failure mode is unsourced and biased checking, not the existence of checking. The Code's commitments are procedural and transparent, which is what a convention should be.

The European Commission's Digital Services Act supplies a governance witness. Its public page lists *"Transparency in content removals"* and *"Options to appeal to content moderation decisions"*, and notes that large platforms must consider *"Threats to media freedom and pluralism"* (European Commission, fetched 2026-11-23). Those are introduction and appeal mechanisms, not a claim that a moderator can subtract contact.

**Refuter:** a removal-based intervention that reduces R_truth, leaves R_silence measurably near zero in the affected community, and shows no cascade at two steps out in the habitat. If such a case is documented, the asymmetry claim weakens to `general`.

### F7: Valence is relative to the residual, so "legitimate" cannot be a standing list

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

A fixed whitelist of "trusted sources" is a standing list of good actors. When the residual changes, a former benefactor becomes a malfactor without anything about the source changing. The figure-grounded discriminator is not identity but contact: does this claim pay against the ground for this slot now? That is also why a protected category of "legitimate minority evidence" cannot be defined by who holds it. It is defined by whether it registers against the ground.

IEP's entry on epistemic injustice is a low-overlap philosophy witness. It defines epistemic injustice as *"a wrong is done to someone specifically in their capacity as a knower"* and says that in testimonial injustice *"prejudice or bias causes a hearer to give a deflated level of credibility to what someone says"* (Internet Encyclopedia of Philosophy, fetched 2026-11-23). That corroborates the mechanism of R_silence from a field with no shared evidence pool with platform engineering. It also shows the limit of the figure claim: the framework can say that a fixed list fails, but it cannot by itself name which deflated credibility judgments are unjust. That needs a ground reading and a witness with a different pool.

**Refuter:** a source whose measured valence is invariant across a documented change of residual, such that the institution can keep it on a standing list without loss of truth contact. If no such source can be found anywhere, F7 weakens to `general`.

### F8: Corrections are negations, not deletions, and accumulation is not correction

**Mode: `general` with a `specified` consequence for correction design. Domain D1. Status: triangulated (Fig 5 and the Operators table, low overlap: pipeline amendment vs operator table).**

> **"refuted: a term we hold is wrong; a term is owed that says so"** (Fig 5 :53)
> **"Nothing leaves the library. What falls is the reach."** (Fig 5 :55)
> Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*

A correction adds a refusal. It removes nothing from the record, and the reach falls because something was added (Fig 6 :42-43). A vocabulary that can only add labels and cannot say that an arrangement is wrong can accumulate forever without carrying the correction. This is why "add context" and "issue a refusal" are different moves even though both are introductions.

Susmann and Wegener 2022 are a low-overlap cognitive witness. Their abstract states that *"belief in misinformation persists even after the misinformation has been retracted"* and that discomfort with a retraction *"predicts continued belief in and use of misinformation"* (Memory and Cognition 50(2), read via PMC 2026-11-23). That is the continued influence effect: the retraction was added, the reach did not fall as hoped, and the reason is a property of the audience's contact with the correction, not a property of the institution's intention. Pennycook and Rand 2019 add the "implied truth effect" in their introduction: tagging a subset of fake stories *"increases perceived accuracy of stories without warnings"*. A partial label can manufacture a false signal of verification.

**Refuter:** a documented correction that removes the old claim from the record and from all downstream inference without adding a refusal, and whose effect survives a habitat substitution. Under Fig 5 :55 that should be impossible.

### F9: Select witnesses by an unauthored mechanism, not by likely agreement

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Fig 2, low overlap: selection test vs correlation valence).**

> **"The residual selects the members, but only from what is available. A candidate set chosen by a participant is an authored room however well the selection is reasoned, so the pool must be unauthored first and examined second."** (Fig 10 :73)
> **"a lottery"** (Fig 10 :76) **"everyone who qualifies"** (Fig 10 :77) **"a set assembled before the question existed"** (Fig 10 :78)
> **"High correlation is disqualifying for a verdict and efficient for a convention."** (Seat Map :163)
> **"Stakes are structural, not removable ... an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** (Seat Map :171)

An institution that picks its reviewers for likely agreement has authored the room. The figure's mechanisms are a lottery, everyone who qualifies, a set assembled before the question existed, or the habitat itself enumerated. The point is not randomness for its own sake. It is that the selection must not be a function of the answer the institution wants.

F8's world source gives the competence side of the same constraint. Pennycook and Rand 2019 found that participants higher in cognitive reflection discerned source quality better, and that the cross-party balance of raters mattered. So competence and independence are both required for a verdict (Fig 2 :31); unanimity of everyone in the habitat is not. This resolves the apparent conflict between the habitat rule at Fig 11 :61 (maintain all voices in the habitat) and the verdict rule at Fig 2 :31 (only some frames are witnesses for a verdict). Re-census R2 in section 6 records it.

**Refuter:** a reviewer pool selected by the institution precisely because it was expected to agree, that still produces new ground-verified readings across a habitat change and whose agreement is not a weighted average of influence. That would break F9.

### F10: Reliability and preserved disagreement are two currencies that do not add

**Mode: `general`. Domains all. Status: triangulated (Fig 12 and Fig 9, low overlap: pricing rule vs union rule).**

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :126)
> **"Bits price the description. Actions price finding out whether it holds. They are in different units."** (Fig 12 :127)
> **"Summing them into one figure is the error this names, not the fix for it."** (Fig 12 :130)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

A single "trust and safety score" that adds accuracy gain to diversity preservation is the flat-form error of Fig 12 :126. It prices two different things in one unit and then cannot see the shortfall. The specified consequence: report R_truth and R_silence as two columns, with two instruments and two falsifiers, never one KPI.

**Refuter:** a single scalar that predicts both R_truth and R_silence prospectively per slot across a habitat change, with no residual left over in either column. That would collapse the union into a partition and F10 would be false.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per claim and per community, never an environment average | general | Fig 1 :19, :22 | figure-derived |
| The ground is the anchor for truth; consensus moves when pushed | general | Fig 2 :29, :30, :35 | figure-derived |
| A convention that decides an outcome has stopped being one | specified | Fig 2 :43; Fig 10 :47 | triangulated F3 |
| Differing closures supply imports; cutting them shrinks reach | specified | Fig 6 :21, :23; Fig 8 :32, :45; Fig 13 :115 | triangulated F4 |
| Verification needs low-overlap frames, not one consensus | specified | Fig 2 :31, :42; Fig 7 :12, :13, :35, :36 | triangulated F5 |
| Introduction is available; exclusion is not | specified | Fig 11 :61-62, :66, :68, :69 | triangulated F6 |
| Valence is relative to the residual; no standing list of good sources | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F7 |
| A correction is a negation; the record grows and the reach may fall | general | Fig 5 :53, :55; Operators :58 | figure-derived |
| Witnesses come from an unauthored pool | specified | Fig 10 :73, :76-78; Seat Map :163, :171 | triangulated F9 |
| The question is a union of three conditions, not a single dial | general | Fig 9 :54, :55, :57; Fig 12 :126, :130 | figure-derived |
| Which specific label, threshold or source list is correct | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. One averaged accuracy or trust metric predicts, prospectively and per claim, which minority slot will lose reach next, with no loss of discrimination in that slot (breaks F1, Fig 1 :19, :22).
2. A fixed convention that decides outcomes improves per-claim truth contact under a habitat substitution that removes the ground's payment for its own source list (breaks F3, Fig 2 :43).
3. An institution that cuts contact with every differing closure still improves truth contact across a change of habitat, with no new atom entering (breaks F4 and F5, Fig 6 :23, Fig 7 :36).
4. A removal-based intervention reduces R_truth with R_silence measurably near zero and no two-step cascade in the habitat (breaks F6, Fig 11 :61-62, :66-69).
5. A source's measured valence is invariant across a documented change of residual, so a standing list survives (breaks F7, Fig 11 :49-51).
6. A single scalar predicts both R_truth and R_silence prospectively per slot with no residual left over (breaks F10, Fig 12 :126, :130).
7. Figure-level: an atom is derived from inside a closure by composition alone (breaks Fig 6 :21), or exclusion is shown to be available as an institutional power (breaks Fig 11 :61).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the two residuals and the refuter, not with a theory of information (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep R_truth and R_silence in separate columns with separate instruments. A blended "information integrity score" is a pooled reading (Fig 10 :26) and a two-currency error (Fig 12 :130).
3. Separate conventions from verdicts explicitly in the institution's own documentation. A source list is a budget filter, not a witness (Fig 9 :60).
4. Prefer introduction over removal: context, provenance, divergent review, refusal (Fig 11 :61, Fig 5 :53).
5. Build low-overlap verification. If every checker reads one feed, the network is one room (Fig 7 :36).
6. Choose reviewers by an unauthored mechanism and declare any stake that cannot be removed (Fig 10 :73-78; Seat Map :171).
7. Stop at the shape. Which label, which threshold, which source list is correct is a `gap` until a ground instrument discriminates (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources opened after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them ... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- *The Recursive Self-Improvement Trap* confirms the simulation status and the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* An institution's reputation can get a checking method tried; it cannot make the method right.
- *The Hard Problem is About Source* supplies the instrument discipline: *"An instrument that can't distinguish these cases demonstrates its own inadequacy"*. A trust metric that cannot distinguish a true minority claim from a false one must not be promoted to a verdict.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to information content | **Retracted, strain S1** | Only fit by renaming a source as energy. Re-census: Fig 13 governs the physical substrate, not an information environment |
| Treated crowd trust ratings as corroboration for the verdict | **Narrowed to a budget filter** | Fig 9 :60; Pennycook and Rand's crowd is a filter whose effectiveness depends on per-slot familiarity |
| "No suppression at all" as the design goal | **Retracted at record level** | Fig 10 :53: a prohibition nothing can satisfy is stated wrong. The requirement is asymmetric power and refusable conventions, not zero removal |
| Read "legitimate minority evidence" as a protected list of speakers | **Retracted, re-census R3** | Fig 11 :51: no standing list of good actors survives a change of residual. Legitimacy is a contact question per slot |
| Called the dual anchor a single human anchor | **Narrowed to `specified`** | Fig 2 :36-38 licenses human judgment only for the "good for a person" part; the truth of the claim is still settled by the ground |
| Used the IEP epistemic-injustice entry as a figure derivation | **Narrowed to corroboration** | It is a low-overlap world witness for R_silence, not a source of figure authority |
| F11 row "which label or source list is correct" | **Marked `gap`** | The framework returns a shape. Naming a threshold would mean already holding the discriminating instrument |
| F4 "decisive" in an early draft | **Downgraded to triangulated** | Fig 6, Fig 8 and Fig 13 are three figures but one framework. Triangulation means low topical overlap, not independent evidence pools |

**Strains and re-censuses sent to the log:**

- **S1:** Fig 13 applied to information content, resolved by re-census to the honest-stop role.
- **R2:** apparent conflict between Fig 11 :61 (do not exclude actors from the habitat) and the competence requirement for witnesses (Fig 2 :31). Re-census: the habitat of claims and the pool of verdict witnesses are different objects. All voices remain reachable; only independent and competent frames range against the ground for a verdict.
- **R3:** apparent conflict between "preserve minority evidence" and Fig 11 :51 (no standing list of good actors). Re-census: what is preserved is contact with claims that register against the ground, not a permanent identity category.
- **S2:** Fig 10 :53 versus the intuition that a good institution never removes anything. Resolved: the prohibition is restated as a rule about the available lever (introduction, not exclusion), not a rule about outcomes.
- **After re-census: no unresolved strain.**

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57: it is a union of truth contact, preserved reach and kept conventions, each with its own instrument.
2. **What is the anchor?** The ground for truth (Fig 2 :29). Human judgment for the "good for a person" part (Fig 2 :36-37), triangulated, never negotiated.
3. **Can consensus make information reliable?** No. Agreement is a weighted average of influence (Seat Map :283), and a mirror cannot correct you (Fig 2 :35).
4. **Why does suppressing minority evidence backfire on reliability itself?** Because a differing closure is the only source of a new atom. Cut it and the reach stops moving while the library keeps growing (Fig 6 :21, :23; Fig 8 :32).
5. **What is the right lever?** Introduction, not exclusion (Fig 11 :61-62). Add context, add provenance, add a refusal (Fig 5 :53).
6. **How should witnesses be chosen?** By an unauthored mechanism (Fig 10 :73-78), with low overlap between them (Fig 7 :36), and with declared stakes (Seat Map :171).
7. **What can be said at the stop?** A shape with three conditions and seven falsifiers. Not which label, not which threshold, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **institutions can make public information more reliable without suppressing legitimate disagreement or minority evidence only if they stop treating the two as one dial. R_truth falls when per-claim frames range separately against a non-moving ground. R_silence stays near zero when the institution keeps reach to closures that differ, keeps its conventions from deciding outcomes, and uses introduction rather than exclusion. Verification must come from low-overlap frames chosen by an unauthored mechanism, and corrections must be refusals added to the record rather than claims struck from it.** The three conditions are kept separate, never averaged. Which specific policies implement them is a declared `gap`, not a hidden answer. Mode `specified`. No world source was allowed to flip a verdict; every apparent conflict was returned to the census. No unresolved strain remains after re-census.
