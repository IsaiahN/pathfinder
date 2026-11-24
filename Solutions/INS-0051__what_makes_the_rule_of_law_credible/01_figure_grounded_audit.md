# Figure-grounded audit: what makes the rule of law credible under political pressure

**Mode of this document: `specified`, not `grounded`.** It states what would have to be true and what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap essay (Isaiah N, 2026-11-19) states that LLM output is "simulacra" and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, plus the world sources opened this session and listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

A legal system claims: verdicts settle disputes according to law, regardless of who presses on the court. The observed condition named in the question is: those who enforce the law are themselves subject to political pressure. The residual R is the gap between that claim and what happens under pressure. Concretely, R is positive when rulings track the influence of the party that has the most influence rather than the facts and the law. This is not a complaint about a bad actor. It is a boundary diff: the system's prediction of its own behaviour fails in a specific slot, the slot where pressure is applied.

R is measured per slot, never aggregated. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." So a single national "rule of law index" that looks healthy can hide a live failure in one court or one class of case. Credibility has to be read per case and per institution, not as one pooled trust score.

The sought-for shape is bound here as an ordinary term before the run (formula, Direction): an answer is credible if the anchor does not update, the applier cannot reconstruct the wanted verdict, the pool was not authored by a participant, and a per-case record lets an outside reader tell whether the anchor moved. This lets the preference be refused by the same test as every other claim.

---

## 1. DOMAIN CENSUS (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: at least two political frames plus one legal anchor plus a checking seat, so this is a multi-frame arrangement, not a single-agent problem. Symmetry: the anchor is deliberately asymmetric with the frames, it is pinned and does not negotiate; correlation between frames has valence rather than being uniformly good (Fig 2 :40 and :41). Scale: one ruling (first order), one court over many rulings (second order), one polity over time (third order). A settled ruling becomes an atom for later rulings, so credibility is recursive (Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it.").

**One line per domain: actors / currency / anchor.**

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| D1 Case-level adjudication | judge or jury, parties, evidence | the ruling | the facts and applicable law as settled | yes: evidence neither side can move |
| D2 Institutional checking arrangement | courts, appointing bodies, executive, legislature | tenure, budget, case assignment, jurisdiction, written reasons | the same ground, kept reachable by a seat that stays outside | yes: an outcome the seat did not author |
| D3 Political pressure frame | officeholders, factions, public opinion | influence, patronage, votes | none of its own | no, and that is the point: it is the frame that wants to move the anchor |
| D4 Legitimacy / credibility audience | citizens, litigants, observers, journalists | trust and belief | observed behaviour of courts over time | yes: whether the anchor moved, observable per case |

D3 has no nameable anchor of its own. By the census rule, "no nameable anchor means it is not a domain yet." It is retained not as a domain with a ground but as a **frame acting on the other three**, which is exactly the role Fig 2 assigns to a frame that updates on others. It does not get a separate verdict; it is the pressure source.

**Partition or union.** This is a **union compound**, not one hard question. Four conditions must hold together: a non-updating anchor (D1), a blind and unbought checking seat (D2), an unauthored pool (D2), and an observable per-case record (D4). A single lever clears only the region where one condition holds and leaves the intersections standing. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." So " appoint better judges" is not an answer; it is one lever aimed at one condition of a four-way union.

**Order by dependency (Fig 3).** Settle D1 first: if the anchor moves under pressure, nothing downstream can be credible. D2 second: if the applier can see the wanted verdict or was hand-picked by a participant, independence is already spent. D4 third: if there is no per-case instrument, credibility cannot be observed at all. D3 acts on all of them and is not a link that can be optimised. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Most reform effort lands above the break (more rules, more training, more public messaging), where measurements already exist, rather than on the middle link where the anchor either holds or does not.

---

## 2. Figure census (quoted before concluding)

These lines were read and quoted before any verdict was written. Each is an exact substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

| figure | verbatim line | bearing on R |
|---|---|---|
| Fig 1 | Fig 1 :19 "The residual is indexed by object slot, not aggregated." | credibility must be read per case, not pooled |
| Fig 2 | Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | what the law's anchor must be |
| Fig 2 | Fig 2 :30 "If it moves when you push on it, it is not an anchor." | the pressure test itself |
| Fig 2 | Fig 2 :14 "they converge, and what they converge on", continuing "is whoever had the most influence" | the failure mode under pressure |
| Fig 2 | Fig 2 :33 "The anchor must not update." | the core rule |
| Fig 2 | Fig 2 :34 "everything drifts together, and the drift is coherent, which is why nobody notices." | why the failure is silent |
| Fig 2 | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement is not the test |
| Fig 2 | Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | why campaigns cannot corroborate |
| Fig 2 | Fig 2 :42 "Buy independence in proportion to the cost of being wrong." | independence is a purchased design quantity |
| Fig 2 | Fig 2 :45 "Frames range against the ground. They do not negotiate with it." | courts range against evidence, not negotiate with pressure |
| Fig 3 | Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." | the measurement gap at the middle link |
| Fig 4 | Fig 4 :22 "Only methods cross up. Only head starts come down." | precedent is a reusable method, not a recording of one verdict |
| Fig 6 | Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | a judiciary that only reads itself cannot gain independence |
| Fig 7 | Fig 7 :13 "same closure, handed along; agreement compounds, evidence does not" | why a chorus of approval adds nothing |
| Fig 7 | Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | selection of the checking room is where credibility is decided |
| Fig 8 | Fig 8 :50 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" | a ruling that agrees with power needs provenance to be distinguished from capture |
| Fig 9 | Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." | the union reading above |
| Fig 10 | Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." | the judge must not be able to reconstruct the wanted result |
| Fig 10 | Fig 10 :47 "a convention that decides an outcome has stopped being one" | a rule that settles a case has become a verdict, not a convention |
| Fig 10 | Fig 10 :52 "Bring a characterised residual, never the source." | give the checker the case on evidence, never the political instruction |
| Fig 10 | Fig 10 :58 "A seat with no stake at all does not exist." | cannot demand a judge with no stake |
| Fig 10 | Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." | the precise disqualification |
| Fig 10 | Fig 10 :60 "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged." | declare interests |
| Fig 10 | Fig 10 :61 "And standing is a stake that survives the outcome it was earned on." | seniority and reputation are themselves stakes |
| Fig 10 | Fig 10 :62 "A ruling carries provenance like an atom." | written reasons are part of the ruling |
| Fig 10 | Fig 10 :65 "Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record." | clean procedure is not correctness |
| Fig 10 | Fig 10 :73 "A candidate set chosen by a participant is an authored room however well the selection is reasoned, so the pool must be unauthored first and examined second." | selection of judges and juries |
| Fig 10 | Fig 10 :75 "A conscientious selection is still a selection, so unauthored needs a mechanism:" | a mechanism is required |
| Fig 10 | Fig 10 :76 "a lottery" | sortition, one permitted mechanism |
| Fig 10 | Fig 10 :80 "Frames whose independence is renewed by separate experience can be maintained; frames whose correlation is fixed at origin can only be rotated" | rotation and separate experience |
| Fig 10 | Fig 10 :93 "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified." | a court guarding its own brand is captured |
| Fig 11 | Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone" | credibility is institutional, not personal |
| Fig 11 | Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." | better judges without changed contact do nothing |
| Fig 12 | Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it." | precedent recurses |
| Fig 13 | Fig 13 :74 "Everything else is a composition across the two kinds, never within one." | **excluded here**, see strain test below |

**Strain test and re-census.** Fig 13's six-term substrate and its cross-kind composition rule were tried first and **rejected as governing this question**. An institutional credibility claim is not a composition of states and structures, so applying Fig 13 :74 to courts and pressure is a category error, not a derivation. Per the figures README, "a reading that makes one contradict another has misidentified its domain, not found a flaw." Re-census puts Fig 13 out of scope for this question. The governing lines are Fig 2, Fig 10, Fig 7, Fig 9, Fig 11, with Fig 1 and Fig 8 as measurement and provenance supports. No governing line survives only by strain.

---

## 3. Findings

### F1: Credibility is the anchor's non-updating property, not an agreement property (decisive, triangulated)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30: "If it moves when you push on it, it is not an anchor." Fig 2 :33: "The anchor must not update."

Applied to D1: the thing that settles a case is evidence and law. If the ruling changes when a political frame pushes, the ruling is not an anchor reading, it is the frame's output wearing the anchor's label. The collapse is named in Fig 2 :14-15: "they converge, and what they converge on is whoever had the most influence." And it is silent, Fig 2 :34: "everything drifts together, and the drift is coherent, which is why nobody notices."

World corroboration (low overlap): the Tacit Knowledge essay lists the safeguards communities built against drift and says "Courts of law rule on evidence, which neither side can move." The Rule of law article quotes Britannica's definition of the rule of law as a norm that "secures a nonarbitrary form of government, and more generally prevents the arbitrary use of power." Both are secondary; the verdict comes from Fig 2.

**Refuter:** a legal system whose rulings demonstrably track who has the most influence, yet still satisfies the framework's own anchor test, would break F1. So would a figure re-census that shows an anchor is allowed to update on a frame and still count as an anchor.

### F2: Independence is bought, not admired (triangulated)

Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 10 :80: "Frames whose independence is renewed by separate experience can be maintained; frames whose correlation is fixed at origin can only be rotated."

Independence is a quantity with a price and a shelf life, not a virtue a good judge supplies. Buying it means tenure, budget separation, protected case assignment, and rotation where correlation is fixed at origin. A judiciary appointed by one political frame and never refreshed has correlation fixed at origin; more training makes it more competent and no more independent, which is Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

World corroboration: Wikipedia's Judicial independence article states that "courts should not be subject to improper influence from those branches or from private or partisan interests" and that "judicial independence is a pillar of economic growth" because investors have confidence in "a strong and stable judiciary that is insulated from interference." Different field (constitutional economics) and different evidence pool from the figures.

**Refuter:** if independence could be manufactured inside a single frame by good intentions alone, with no change in who can move the anchor, Fig 2 :42 and Fig 10 :80 would both be wrong.

### F3: The checker must be blind to the wanted verdict and to the political source (single-source for the figure rule, corroborated)

Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Fig 10 :52: "Bring a characterised residual, never the source." Fig 10 :50, in the seat map prose: "Looking inside the frame it grades is how the seat stops being outside."

The enforcer receives the case as a characterised residual: evidence and law, not the political instruction about which outcome is desired. A judge who knows what result the executive wants has been handed the source, and the ruling no longer tests the law. The seat map states the zero-knowledge condition plainly: "Soundness requires the checker to be unable to produce what it is checking. Never a player, never a proxy, never the author of a verdict or an atom."

World corroboration: the Tacit Knowledge essay's "three drift-stoppers" include "A ground that both are corrected by, separately" and "Claims in effect terms", and it notes that "High contact builds exactly the shared understanding that makes communication work, but that same factor makes the learner's agreement with the teacher worthless as a check." Procedural justice research (Leventhal's rules, as summarized on Wikipedia) names "bias suppression" and "accuracy" among the six justice rules by which the fairness of a selection or decision procedure is evaluated.

**Refuter:** show a checker that can reconstruct the wanted verdict from the material supplied, yet whose verdicts still discriminate law from influence at maximum independence.

### F4: Stakes are structural, so declare them rather than pretend to remove them (triangulated)

Fig 10 :58: "A seat with no stake at all does not exist." Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." Fig 10 :60: "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged." Fig 10 :61: "And standing is a stake that survives the outcome it was earned on." Fig 10 :93: "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."

So the rule is not "judges must have no interests." It is: no interest in *which reading the ground returns today*. Recusal, disclosure of interests, and bans on a court deciding cases that affect its own budget or standing are direct instances. A court that guards its institutional reputation is a keeper with a reputation to protect, and Fig 10 :93 disqualifies it.

**Refuter:** produce a real occupant who satisfies a literal zero-stake requirement, or show that disclosed interests do not change how an undeclared interest is modelled by observers. The second is an empirical claim and would need a ground reading.

### F5: The pool must be unauthored, and a lottery is a permitted mechanism (single-source for the figure rule, corroborated)

Fig 10 :73: "A candidate set chosen by a participant is an authored room however well the selection is reasoned, so the pool must be unauthored first and examined second." Fig 10 :75: "A conscientious selection is still a selection, so unauthored needs a mechanism:" Fig 10 :76: "a lottery".

A appointing body that picks only judges likely to agree with it has authored the room. Random assignment of cases, juries drawn from the eligible population, and pools assembled before the case existed are mechanisms that satisfy "unauthored". The seat map adds "everyone who qualifies", "a set assembled before the question existed", and "the habitat itself, enumerated rather than composed" as the other three permitted mechanisms.

World corroboration (different field: political science and social choice): Wikipedia's Sortition article defines sortition as "the selection of public officials or jurors at random, i.e., by lottery, in order to obtain a representative sample," and records that in Athens complex procedures with allotment machines were used "to avoid the corrupt practices used by oligarchs to buy their way into office," and that "the use of lot to select nominators made it more difficult for political sects to exert power, and discouraged campaigning."

A conflict is recorded rather than hidden: the same Sortition article notes that "Socrates and Isocrates however questioned whether randomly-selected decision-makers had enough expertise." That is a real cost, and a design must buy competence separately (screening and training) without re-authoring the pool. The conflict sends us back to the census (D2 has two conditions: unauthored pool and competent applier), it does not flip the verdict.

**Refuter:** show an authored pool whose agreement with the appointing frame carries as much information as an unauthored one, or show that competence cannot be added to a lottery without re-authoring it.

### F6: Precedent recurses, so credibility accumulates as method, not as a record of one occasion (single-source)

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it." Fig 4 :22: "Only methods cross up. Only head starts come down."

A ruling settled against the ground becomes an atom for later rulings. That is the recursion that makes a legal system more than a sequence of isolated decisions. But carrying a recording upward instead of a method gives a system that "repeats a past success and cannot produce a new one" (Fig 4 :25). Written reasons carry the method; a verdict alone carries only the occasion. Fig 10 :62: "A ruling carries provenance like an atom."

**Refuter:** show a legal system in which a settled ruling cannot be composed over, or in which a recording of a past verdict functions as a reusable method.

### F7: Clean provenance is not correctness (triangulated)

Fig 10 :65: "Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record." Fig 8 :50: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them".

A ruling with immaculate procedure can still be wrong. And two courts that reach the same conclusion may have derived it independently (corroboration at maximum independence) or one may have adopted the other's conclusion under pressure; the contents look identical. Only the record of origins separates them. So transparency of reasons is necessary for checkability but is not itself the ground.

**Refuter:** produce a case where provenance alone settles whether a ruling was correct, with no contact with the facts.

### F8: Public approval is a convention, not corroboration (triangulated)

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it." Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

A population that approves of its courts because it share the same information pool is one frame talking to itself. That agreement is good for a convention (shared meaning about what "court" means) and worthless as a verdict on whether the anchor held. Selecting approvers for a survey manufactures the disqualifying correlation. The Recursive Self-Improvement Trap essay states the same rule in another field: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."

**Refuter:** show a credibility measure built from a single shared information pool that nevertheless discriminates captured courts from independent ones at low overlap.

### F9: What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| If a legal system settles anything, a non-updating anchor is required | `general`, structural | Fig 2 :29, :33 |
| Rulings that track influence are not anchor readings | `specified`, falsifiable | Fig 2 :14-15, :30 |
| Independence is a purchased and decaying quantity, bought in proportion to the cost of being wrong | `specified` | Fig 2 :42, Fig 10 :80 |
| The checker must not hold the political source and must not be able to reconstruct the wanted verdict | `specified` | Fig 10 :42, :52 |
| Stakes must be declared; an interest in the reading disqualifies | `specified` | Fig 10 :59, :60, :93 |
| The pool of appliers must be unauthored, with a lottery as one mechanism | `specified` | Fig 10 :73, :76 |
| Credibility must be measured per case, not as one pooled score | `specified` | Fig 1 :19, :22 |
| Which concrete institution implements each condition | **not derived**, a world-frame binding | Fig 9 :32, shape not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. The seat map states: "And a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. A legal system whose anchor demonstrably updates on political pressure still satisfies the framework's anchor test.
2. Credibility can be produced by agreement alone, with no non-updating anchor and no source-discriminating instrument.
3. An enforcer with an interest in *which reading the ground returns today* can still be a sound checker.
4. A standing list of "good institutions" survives a change of residual (contradicts Fig 11's valence-relative rule).
5. A pooled credibility index can replace per-slot measurement without losing a live failure.

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with F1 and F2: the anchor question and the purchase of independence. They are the only two findings that are triangulated across more than one figure group and a low-overlap world source.
2. Keep verdicts per domain separate. D1 (case anchor), D2 (institutional seat), and D4 (audience measurement) are never averaged into one "credibility score".
3. Treat D3 as a frame, not a domain with a ground. Do not look for an anchor in politics; the political frame's function here is to press on the anchor.
4. Put the refuter before the theory in any outreach (see `02_outreach_email.md`).
5. Name no constitution as "the answer". Fig 9 :32: "you get a kind of thing, never the answer itself." Tenure, sortition, budget firewalls and disclosure are bindings from the world frame, provenanced as such.

---

## 6. Canonical usage check (figures README + WATSON 60, 2026-11-22)

Two framework sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of what instruments can distinguish and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat does not ask for rulings the figures already decide. "the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Tried Fig 13's cross-kind composition rule on courts and pressure | **Retracted.** Re-census: Fig 13 governs the six-term substrate, not an institutional checking arrangement. Strained readings are sent back to census, not smoothed. |
| "Credibility is an anchor" (loose phrasing) | **Narrowed.** Credibility is the *audience's observable effect* of the anchor holding (D4). It is not itself the anchor. The anchor is evidence and law. |
| "Judges must have no stake" | **Retracted as an idealisation.** Fig 10 :58 says such a seat does not exist. The rule is about the reading, not the outcome, plus declaration. |
| "Independence is good" | **Narrowed.** Fig 2 :42 prices it and Fig 10 :80 gives it a shelf life. It is a design quantity, not a virtue. |
| "Public support corroborates the rule of law" | **Refused.** Fig 2 :40 and :41: correlation has valence. Agreement builds conventions, not verdicts. |
| F1 anchor reading | **Canonically confirmed.** It is a shape claim, `specified`, not a measurement. |
| F7 clean provenance is not correctness | **Canonically confirmed.** The README's "Indiscernibility is not identity" and Fig 10 :65 agree. |

### Round trip note

Condensing the figures into the four-condition shape in section 0 loses at least three things: the per-slot measurement rule (Fig 1 :19), the declaration-of-stakes rule (Fig 10 :60), and the provenance-not-correctness rule (Fig 10 :65). These are recorded as the round-trip gap R_T in `11_audit.md`. They are not silently assumed.

---

## 7. Updated verdict

The shape survives. Credibility under pressure requires a non-updating anchor, a checker kept blind to the wanted verdict and to the political source, declared interests, an unauthored pool, and per-case observable measurement. What is not derived is which concrete institution implements each condition. The question is a **union compound**, so no single lever is an answer. Mode: `specified`, ungrounded, candidate. Strains after re-census: **one recorded and scoped** (Fig 13 excluded as non-governing for this domain), none hidden. The world sources corroborate but do not decide; several share an author with the figures and are marked high-overlap in `10_source_ledger.csv`.
