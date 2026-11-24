# Figure-grounded audit: what determines workers' bargaining power

**Mode of this document: `specified` on the structural shape, `general` on the substrate claim, `gap` on the empirical ranking. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the eight essays as mapped in `05_what_shape_means.md`. World sources are in `10_source_ledger.csv`; they were fetched and read, and are secondary corroboration only.

---

## 0. The question under audit, stated as a residual

The question offers five candidates for one office: productivity, labor-market competition, unions, law, employer concentration. Restated in effect terms:

> **R:** for a worker in an employment match, what makes the worker's claim on the surplus move? R is the gap between the worker's actual claim and the claim they would have with no leverage. It is indexed by candidate factor, one slot per factor, not summed into one global answer (Fig 1 :19, "The residual is indexed by object slot, not aggregated.").

Three disciplines are applied before any figure line is chosen:

1. **Direction bound as an ordinary term.** The sought-for shape is written down before the run, so it can accrue a residual and be refused. The bound shape is: *an answer is a per-slot map from each of the five factors to the part of the surplus split it moves, with a nameable measured anchor for every slot, and with the five slots kept separate rather than averaged.* If the final answer does not have that form, the run has failed its own binding.
2. **R by arity, symmetry and scale.** Arity: five candidate slots plus the worker and the firm. Symmetry: the worker-firm relation is not symmetric, the firm is normally the buyer of labor; the five candidates are also not interchangeable, so treating them as a flat `or` list is a notation error (see `06_isomers_and_order.md`). Scale: the match (micro), the labor market (meso), the legal frame (macro).
3. **Residual expressed as effect, not cause.** Following Fig 9 :30-31, "your words are borrowed too, so describe the effect rather than the cause": the effect is *moving the worker's claim on the surplus*, not "being productive" or "having a union". This keeps the question from being answered by whichever frame is named first (Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit").

---

## 1. Domain census

Rule applied: one line per domain with actors, currency and a nameable anchor. A domain with no nameable anchor is not a domain yet. Partition or union is then decided, and the domains are ordered by dependency (Fig 3 :20, "The chain is ordered by dependency, not by importance.").

| domain | actors | currency | nameable anchor | question type |
|---|---|---|---|---|
| D1, the match surplus (productivity) | worker, firm, marginal revenue product | the surplus produced by the match | measured marginal product of labor; observed output per worker | support condition, not yet a lever |
| D2, the contact structure (labor-market competition and employer concentration) | employers, workers, search frictions, alternative employers | outside options, elasticity of labor supply to the firm | measured employer concentration and wage or separation elasticities | two readings of one network condition |
| D3, collective organization (unions) | union, members, employer | collective voice and the threat of withdrawal | observed union wage premium and collective-agreement coverage | an actor introduced into the habitat |
| D4, the legal frame (law) | legislature, courts, regulators, parties | rules: wage floors, bargaining rights, non-compete limits | statutes and court rulings, plus measured outcomes after they change | an import from the polity frame |
| D5, the verification frame | researchers, datasets, experiments, reviewers | residual and agreement | measured wage and employment outcomes, never agreement | separate frame; anchor is the ground |

All five candidate determinants are domains: each has a nameable anchor. D5 is not a candidate determinant; it is the frame in which any verdict would have to be settled.

**Partition or union.** This is a **union compound**, not a partition. Fig 9 :54, "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55, "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." The overlaps are real and named: unions change effective competition (D3 acts on D2); law changes whether unions can exist and sets wage floors (D4 acts on D1 and D3); employer concentration is one reading of the same network condition that labor-market competition describes (D2 internally). Fig 9 :5, "are not one hard question but several well-formed ones. Split it rather than search." A single lever would clear the region where only one condition holds and leave the intersections standing.

**Order by dependency (Fig 3 :20).** A surplus must exist before it can be split (D1 first, as a support gate, Fig 5 :20, "is there anything to explain?"). Then the contact structure sets what the worker can do with that surplus (D2). Then the actor configuration changes what one worker can do together with others (D3). Then law imports rules that license or forbid the earlier moves (D4). Settlement is last (D5). Effort spent on D4 before D1 and D2 are characterized arrives at a step that cannot use it.

**Strain test applied during the census.** The phrase "workers earn their marginal product" belongs to the competitive benchmark (world source: Wikipedia, Labour economics, "Models that assume perfect competition in the labour market ... conclude that workers earn their marginal product of labour"). It does not govern the surplus-splitting residual in an imperfect market. Reading it as a universal law would make D1 swallow D2 to D4, which is a strain, so it is re-censed as a claim about one frame (the competitive benchmark) rather than about the residual. No figure line is forced.

---

## 2. Figure census (verbatim, before concluding)

Quoted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` against SVG line numbers. Each quote is checked character by character; the second seat rechecks in `11_audit.md`.

| figure line | verbatim | bearing |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | forbids one global answer over five slots |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | the "which one" framing destroys the signal |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." | the ground for each slot is measured, not agreed |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement among economists cannot settle it |
| Fig 2 :40 | "agreement about the world is worthless when the agreeing frames share an evidence pool" | one literature pooled twice is one witness |
| Fig 3 :20 | "The chain is ordered by dependency, not by importance." | order D1 to D5 by dependency |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | any condensation into a league table carries R_T |
| Fig 5 :20 | "is there anything to explain?" | the support gate before searching for a lever |
| Fig 6 :14 | "the only operator that moves the wall" | law is an import, not a mint inside the firm-worker closure |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | the polity frame is the differing closure law comes from |
| Fig 7 :35 | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | a panel of agreeing economists is not the ground |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | `gap` is a verdict, not silence |
| Fig 9 :5 | "are not one hard question but several well-formed ones. Split it rather than search." | split the five candidates before searching |
| Fig 9 :27-28 | "describe it before you go looking, or any frame you pick will seem to fit" | frame the residual before choosing a literature |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | the figures give a shape, not an empirical coefficient |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | unbundle the five conditions |
| Fig 9 :55 | "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." | unions, law and concentration overlap |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | tractability scores do not decide correctness |
| Fig 10 :18 | "a declared meaning is not a grounded one" | a statute is not a measurement of its effect |
| Fig 10 :47 | "a convention that decides an outcome has stopped being one" | a wage floor that fixes the outcome has become a player in the game |
| Fig 10 :52 | "Bring a characterised residual, never the source." | first contact carries the residual, not the framework |
| Fig 11 :39 | "capability is a property of agent-and-habitat, never of the agent alone." | bargaining power is worker-and-market, not worker alone |
| Fig 11 :40 | "An improvement that does not change contact changes nothing, however much it improves." | productivity alone need not move the claim |
| Fig 11 :49 | "An actor's valence is relative to the residual, not a property it carries." | a union is a benefactor to one residual and a malfactor to another |
| Fig 11 :61 | "Introduction is available; exclusion is not." | a union or a legal right can be added, the habitat cannot be subtracted |
| Fig 12 :104 | "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world" | each settled determinant becomes an operand at the next level |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | competition and concentration test as isomers |
| Fig 12 :119 | "catalyst. A part that survives its own use." | unions and law are parts that persist across uses |
| Fig 12 :123 | "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." | the five factors share an outer form with different atoms |
| Fig 13 :20 | "ordering, so more and less can be said" | wage ranking is a spectrum-like reading |
| Fig 13 :22 | "a difference that can be spent" | the surplus is a gradient-like quantity |
| Fig 13 :24 | "that entities relate, and influence travels" | the labor market is a network |
| Fig 13 :74 | "Everything else is a composition across the two kinds, never within one." | the determinants compose across states and structures, not within one kind |
| Fig 13 :75 | "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." | cross-kind rule for any composition of the determinants |

Also used, cited as table lines rather than figure lines: Symbols table :104, the ground is "Whatever settles the question and does not change its answer because of what any frame thinks"; Operators table :52, "a goal is a comparison, which is why a vocabulary without it cannot state one"; Operators table :68, "A relation that fails all seven is not an operator you are missing; it is a claim that has not been made yet."

---

## 3. Findings

### F1 - The question is a union misread as a partition (decisive at the shape level)

Fig 9 :54 and :55 are quoted above. The question's grammar ("A, B, C, D, or E?") invites a partition: pick the one determinant. The census in section 1 shows overlapping conditions, so a single lever cannot clear the intersections. Fig 9 :5 adds that a disagreement which does not shrink with effort across rules that each work on a different subset is "not one hard question but several well-formed ones."

 Fig 1 :22 is the second, independent reason: "Aggregating across slots is how a live signal disappears into an average." A league table of the five determinants is exactly that average. 

**Verdict for D1 to D4 jointly:** `triangulated` (Fig 9 :54-55 and Fig 1 :19/:22 are two figure lines with low content overlap: one is about unions and partitions, the other about per-slot residuals). Mode `general` on the structural claim that the question must be unbundled.

**Refuter:** show that the five conditions are independent, that is, each clears its own region and none changes another. Concretely: unions never change effective competition; law never changes union viability or the wage floor's effect; employer concentration is not a reading of the same network as labor-market competition. If all three hold, Fig 9 :55 does not govern this residual and the partition reading stands.

### F2 - Productivity is a support condition, not a standalone lever

Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." A worker's output is the agent side; the claim on the surplus is the agent-and-habitat side. Fig 13 :22 calls a spendable difference "a difference that can be spent": productivity sets how much there is to spend, not who may spend it.

World corroboration (secondary, low overlap with the figures): Wikipedia, Labour economics, records that competitive models "conclude that workers earn their marginal product of labour", which is a claim about one frame, the competitive benchmark, not about the split under imperfect competition. NBER Working Paper 27193 (Stansbury and Summers, 2020) reports that "measures of reduced worker power are associated with lower wage levels, higher profit shares, and reductions in measures of the NAIRU" in a period when productivity and profitability rose. That is the empirical shape Fig 11 predicts: the agent improved, the claim did not follow automatically.

**Verdict for D1:** `triangulated` (Fig 11 :39-40 and Fig 13 :22, different figures). Mode `specified` as applied to labor markets; `general` as a substrate claim.

**Refuter:** a controlled study in which productivity rises with all contact terms held fixed (alternatives, union status, legal rules and concentration unchanged) and the worker's share of surplus rises in the same proportion. That would make productivity an agent-only lever and refute the applied claim. The competitive-benchmark result ("workers earn their marginal product") is **not** such a refutation: it is a result inside a frame whose assumptions already fix the split, and it was re-censed as such in section 1.

### F3 - Competition and employer concentration are two readings of one network condition

Fig 13 :24 names the structure "that entities relate, and influence travels". Both "labor-market competition" and "employer concentration" are readings of how many buyers of labor there are and how easily influence travels between them. Under Fig 12 :117, "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour.", they are candidate isomers: same network atoms, different arrangement of the measurement. Under Fig 12 :123 they are at least a functional group: "the group says what kind; the qualifier says which member."

World corroboration: Wikipedia, Monopsony, "Monopsony power exists when one buyer faces little competition from other buyers for that labour or good, so they are able to set wages or prices for the labour or goods they are buying at a level lower than would be the case in a competitive market." The same article warns that "Empirical evidence of monopsony power has been relatively limited", which is a genuine conflict with the strong claim that concentration is the dominant lever. Per the method, a conflict sends us back to the census, it does not flip the verdict: re-census gives two readings of one network condition with an unresolved empirical magnitude, which is exactly the `gap` in section 4.

**Verdict for D2:** `single-source` for the figure mapping (Fig 13 :24 plus Fig 12 :117/:123, all within one framework), with world corroboration on the economics but not on the figure mapping. Mode `specified`.

**Refuter:** show that competition and concentration are independent atoms, not two readings of one network, by finding a market where concentration falls while outside options worsen for workers (or the reverse) across repeated measures. That breaks the isomer reading and leaves two separate determinants.

### F4 - Unions change the actor, not only the surplus

Fig 11 :61, "Introduction is available; exclusion is not." A union is an actor introduced into the habitat; the habitat itself is not subtracted. Fig 11 :49, "An actor's valence is relative to the residual, not a property it carries.", so a union is not a good thing in general: its valence is relative to the residual being tracked. Fig 12 :119, "catalyst. A part that survives its own use.", fits an institution that persists across bargaining rounds.

World corroboration: Wikipedia, Collective bargaining, "Union members and other workers covered by collective agreements get, on average, a wage markup over their nonunionized (or uncovered) counterparts. Such a markup is typically 5-10 percent in industrial countries." That is a measured effect on the claim, not on productivity. The same source notes a deadweight loss of 0.2 to 0.5 percent of GDP, which is the other side of the valence: relative to a different residual the same actor reads differently.

**Verdict for D3:** `triangulated` (Fig 11 :61/:49 and Fig 12 :119, two figure lines with different content; plus an independent world source). Mode `specified`.

**Refuter:** a measure of the union effect that disappears entirely once productivity and composition are controlled, with no residual change in the worker's claim. That would make unions a proxy for D1 rather than an actor change in the habitat.

### F5 - Law is an import, and a declared rule is not its own ground

Fig 6 :14 calls import "the only operator that moves the wall" and Fig 6 :23 says the bound moves "only on contact with a frame whose closure differs." A statute arrives from the polity frame, which has a different closure from the firm-worker frame. This is an import, not a composition inside the employment frame. Operators table :68 is relevant: a relation that fails all seven bond tests is not a missing operator, it is a claim not yet made; law is not a seventh bond between worker and firm.

Two limits are then binding. Fig 10 :18: "a declared meaning is not a grounded one." A minimum wage written into law declares a wage; it does not measure what happens after it is enforced. Fig 10 :47: "a convention that decides an outcome has stopped being one." A wage floor that directly fixes the outcome has become a player in the game, so it cannot also be the neutral rule that settles the game.

World corroboration: Wikipedia, Collective bargaining, records that the US National Labor Relations Act of 1935 "made it illegal for any employer to deny union rights to an employee", a provenanced import with a date and a source, exactly the kind of record Fig 8 asks for. Wikipedia, Bargaining power, adds that inequality of bargaining power "serves as a justification for the implication of mandatory terms into contracts by law", which is the policy face of the same import.

**Verdict for D4:** `single-source` within the figures (Fig 6 :14/:23 and Fig 10 :18/:47), corroborated by independent world sources on the existence and provenance of legal imports. Mode `specified`.

**Refuter:** show that a legal rule changes the worker's claim without any contact with a differing closure, that is, it is derivable entirely from inside the firm-worker frame as a new composition of the same atoms. Then it is a mint, not an import, and F5 is wrong.

### F6 - The empirical ranking is `gap`, not a silent answer

No figure line assigns a coefficient, a percentage or a rank order to the five determinants. Fig 9 :32, "you get a kind of thing, never the answer itself." Fig 8 :39, "So a search that finds nothing is never a proof of absence." The honest report is `gap` on the question "which one dominates and by how much", after full SEARCHED (the closure of the figures was searched: the substrate, the bonds, the habitat, the floor), then INWARD (sharpening the six-term mapping cannot yield a coefficient), then OUTWARD (the labor-economics frame does supply measured effects, but they are a ground reading, not a figure line, and they conflict among themselves, as F3 records).

This is **unreached, not unreachable**. The Formula step 7 distinction matters: importing a coefficient against a budget limit would add an atom that was not needed. The ground is reachable by empirical work; the figures are not that work.

**Verdict:** `gap`, mode `general` on the meta-claim that figures do not settle empirical magnitude. Cost if wrong is bounded because the gap is stated, not hidden.

**Refuter:** exhibit a figure line that directly governs the ranking, for example a substrate mapping that assigns each of the five determinants to a distinct one of the six terms in a fixed dependency order with stated bordered magnitudes. That would close the gap and F6 would be withdrawn.

### F7 - What survives, with mode attached

| claim | mode | figure or source |
|---|---|---|
| The five determinants are overlapping conditions, not a partition; unbundle before searching | `general`, structural | Fig 9 :54-55, Fig 1 :19/:22, Fig 9 :5 |
| Bargaining power is worker-and-habitat, not worker alone | `general` | Fig 11 :39-40 |
| Productivity is a support condition: it sets the surplus, not the split | `specified` | Fig 13 :22, Fig 11 :40 |
| Competition and concentration are two readings of one network condition | `specified` | Fig 13 :24, Fig 12 :117/:123 |
| Unions are an introduced actor and a persistent part | `specified` | Fig 11 :61/:49, Fig 12 :119 |
| Law is a provenanced import, and a declared rule is not its own ground | `specified` | Fig 6 :14/:23, Fig 10 :18/:47 |
| The ground is measured outcomes, never agreement | `general` | Fig 2 :29/:35/:40, Fig 7 :35 |
| An empirical rank order of the five | `gap` | no figure line; Fig 9 :32, Fig 8 :39 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, per the seat map: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refused if any of the following fires:

1. **Slot independence.** The five conditions are shown to be non-overlapping: unions do not change effective competition, law does not change union viability or floors, and concentration is not a reading of the same network as competition. Breaks F1.
2. **Agent-only lever.** A controlled change in productivity, with contact terms held fixed, moves the worker's share in the same proportion. Breaks F2 and Fig 11 :40 as applied here.
3. **Two atoms, not one.** Repeated measures show concentration falling while outside options worsen for workers, or the reverse, so competition and concentration are independent determinants. Breaks F3.
4. **Union as proxy.** The union wage effect vanishes under productivity and composition controls with no remaining change in the claim. Breaks F4 as an actor claim.
5. **Rule derived inside the frame.** A legal rule changing the claim is derived entirely inside the firm-worker closure as a new composition of the same atoms. Breaks F5.
6. **Agreement as ground.** Economists' agreement, with no measurement, is shown to settle a wage dispute. Breaks Fig 2 :29/:35 and the D5 anchor.
7. **Ranking figure found.** A figure line that directly governs the empirical ranking is exhibited. Closes F6.

If any fires, the affected finding is withdrawn and the file records the correction in section 7. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Send the per-slot map and the refuter, not a league table. The question as asked aggregates slots and loses the signal (Fig 1 :22).
2. Treat productivity as the support gate, not the answer. Ask what the worker can do with the surplus before asking how large it is (Fig 5 :20, Fig 11 :40).
3. Unbundle competition from concentration as two readings of one network, and state the unresolved empirical magnitude rather than forcing a single lever (Fig 9 :55, Fig 8 :39).
4. Give law the import provenance a statute actually has (date, jurisdiction, measured effect), and do not treat the declaration as the measurement (Fig 6 :23, Fig 10 :18).
5. Offer the material through the public venues in `03_public_contact_points.csv`, asking for a refutation rather than belief, and record the stage-1 verdict before showing any theory (Fig 10 :52).
6. Keep filters out of the verdict. A tractability or tier label says what gets tried first, not what is true (Fig 9 :60).

---

## 6. Canonical usage check

Two sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of what the instruments can distinguish and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the mode rule, and step 7's three distinct questions. SEARCHED was asked first (cheapest, and the other two assume its answer), then INWARD, then OUTWARD. Underivable in principle and unreachable at this budget were kept apart: the empirical ranking is reachable by measurement, not by a new atom.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Pick one of the five" | **Refused at the level of the question.** Re-census shows a union compound, not a partition (Fig 9 :54-55). Kept visible as the framing that was refused. |
| "Productivity determines bargaining power" | **Narrowed, not erased.** It determines the size of the surplus in the competitive benchmark; under imperfect competition the claim on it is a separate slot (Fig 11 :40). |
| "Competition and concentration are two different determinants" | **Re-censed as two readings of one network**, with an open empirical magnitude (Fig 13 :24, Fig 12 :117). The conflict in the monopsony literature is recorded, not smoothed. |
| "Law is a determinant on the same footing as the others" | **Narrowed to an import** with a source gate and a shadow test owed (Fig 6 :14/:23). A declared rule is not its own ground (Fig 10 :18). |
| "No answer found, so stop" | **Changed to `gap`, `unreached` not `unreachable`.** Fig 8 :39 makes a search that finds nothing a verdict, not silence; step 7 says more measurement, not another atom, is the remedy. |
| "Figures rank the determinants" | **Canonically forbidden.** The framework returns "a shape, not a name"; Fig 9 :32 says "you get a kind of thing, never the answer itself." |
| Apparent strain: competitive benchmark vs Fig 11 | **Not strained after re-census.** The benchmark governs one frame's split rule; Fig 11 governs the worker-and-habitat capability claim. Different objects, per the README's re-census rule. |

### Seven-question recursive derivation, summary

1. **One question or five?** Union compound, Fig 9 :54-55 and Fig 9 :5. Not one hard question.
2. **What is the residual?** A per-slot map of what moves the worker's claim, Fig 1 :19/:22.
3. **Is productivity the lever?** No, it is the support gate; it sets what can be spent, Fig 13 :22 and Fig 11 :40.
4. **Are competition and concentration distinct?** Two readings of one network, Fig 13 :24 and Fig 12 :117; magnitude open.
5. **Do unions add an atom?** No, they introduce an actor into a habitat already held, Fig 11 :61; they persist, Fig 12 :119.
6. **Is law a bond?** No, it is an import from a differing closure, Fig 6 :14/:23; Operators table :68; and its declaration is not its ground, Fig 10 :18.
7. **Can the figures rank them?** No. Fig 9 :32 and Fig 8 :39. `gap`, reached by measurement, not by a new primitive.

### Updated verdict

The shape survives: five overlapping conditions, a relational capability claim, productivity as support, two network readings, unions as an introduced actor, law as a provenanced import, and a measured ground. What does not survive is the question's own framing as a single-lever choice, and any claim that the figures rank the five. Strains after re-census: one, the empirical magnitude of monopsony, named in F3 and left open rather than smoothed.
