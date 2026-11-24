# Figure-grounded audit: can transparent decision-making increase trust under unpopular outcomes?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." (Local framework file, not a figure quote.)

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* ( essay opened 2026-11-23 ) says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the verbatim figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Figure lines cited verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` only, opened this session. Formula and mode rule from `FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and are secondary.

---

## 0. The claim under audit and its residual

> Can transparent decision-making increase trust when institutions produce unpopular outcomes?

**Residual in effect terms.** An institution holds Γ(b,a), a prediction of what it expects citizens to observe and accept. o' is what citizens actually register. R = |Γ(b,a) - o'| is indexed per citizen-slot s, never aggregated (Fig 1 :19). Under an unpopular outcome the residual in the affected slots goes live: the group did not accept the decision. The question asks which intervention reduces that live per-slot residual.

Two candidate interventions are bound before the run, as ordinary terms, so each can accrue a residual and be refused:

- **A, more process disclosure.** Publish a fuller record of how the decision was reached. Predicted path: the citizen's frame gains information; if the institution's Γ was right, R falls. If the process merely displays the maker's reasoning, the citizen receives maker evidence rather than evidence bearing on the residual.
- **B, changed contact.** Change the decision's relation to the affected group, for example by letting the decision be refused or revised on evidence the group can bring. Predicted path: o' changes because Γ(b,a) changes, not because the presentation changed.

What an answer would look like is written down here: a conditional rule of the form "disclosure of kind K reduces R_s for slots s under condition C, measured by instrument I, and fails under condition D." Binding this shape first is the formula's "Direction" discipline, because a frame cannot check the direction of its own question while the sought shape is held only as a preference (THE_FORMULA.md, local).

---

## 1. Domain census (done before choosing any figure line)

**R by arity, symmetry, scale.** Arity: a three-place relation (institution Γ, disclosure action a, citizen observation o'), indexed by citizen-slot s and by time, with a fourth term, the unpopular outcome, which is a threshold condition rather than a quantity (Fig 13 :20, "ordering, so more and less can be said", and Fig 12 bond ⋛, "a threshold relation between two quantities", Operators table, local). Symmetry: disclosure precedes the judgment, so the governing bond is ordered (→ sequence, "A then B; B needs A to have happened", Fig 12 :30), not a symmetric conjunction of two co-present facts. Scale: individual citizen loop, institution channel, population distribution, with a lossy membrane between scales (Fig 4 :20).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Institutional decision frame | decision makers, Γ, written procedures | decisions, stated reasons | the decision's contact with those it affects | admitted |
| D2 Citizen judgment frame | citizens, per slot s | trust judgment, compliance, behavioral response | their own experience of outcome and process (human judgment is legitimate here, Fig 2 :36) | admitted |
| D3 Disclosure channel | published record, explanations, dashboards | information transmitted, contact | the ground, which does not decay; the channel can decay (Fig 10 :24) | admitted |
| D4 Outside verification frame | auditors, ombuds, courts, journalists, independent researchers | admissible evidence bearing on the residual | the ground, never agreement; a seat standing in a second frame | admitted |
| D5 Unpopular outcome as threshold compound | affected group, distribution of outcomes | comparison of outcome against expectation | the citizen's ground, not the institution's | admitted, compound |
| X1 "Transparency" as a free-floating virtue | the disclosure itself | reputational gain | none nameable; valence is relative to the residual (Fig 11 :49) | not a domain yet, absorbed into D3 and D5 |
| X2 "Trust" as one aggregate number | the population | average score | none; pooling discards the live slot (Fig 1 :22) | refused as an anchor, kept as a budget filter only |

**Partition or union: union.** D1/D3 and D2/D4 form overlapping compounds. A case with an unpopular outcome is a case in two conditions, an unfavorable outcome and a process the citizen cannot range against their ground. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." So one lever, publish more, clears only the region where a single condition holds and leaves the intersection standing. Each compound needs its own loop.

**Order by dependency (Fig 3).** Perception, vocabulary, objective, planning, learn and carry. In this question: establish contact with the citizen's ground; acquire terms for what a decision affords; state what counts as progress (R_s falling, not agreement rising); plan the disclosure; verify against the ground. The middle link is the one without an instrument: "A link with no instrument is not a link that works. It is a link nobody has looked at." (Fig 3 :27). A self-reported trust score after reading a disclosure is a reading of attitude, not a source-discriminating instrument for why the attitude changed.

**Strain test before concluding.** Fig 2 :36 says human judgment is the right anchor for a question about people. If read as "whatever citizens say after reading a disclosure is the ground," that strains against Fig 2 :37, which says instruments can be wrong on axes they do not measure. Re-census: the *question* is constitutively about people, so human judgment is the legitimate anchor; a *survey response* is an instrument that may not measure contact. Different objects, no strain after re-census. This correction is kept visible in §6.

---

## 2. Verbatim figure census (quoted before concluding)

| figure | bearing | verdict |
|---|---|---|
| Fig 1 :19, :22, :23 | per-slot residual, aggregation as signal loss, ground as only metric | no aggregated trust number can carry the verdict |
| Fig 2 :29, :31, :35, :36, :37, :40, :42 | anchor must not update, independence, triangulation, legitimacy, one evidence pool, buy independence | citizen judgment is legitimate; agreement after disclosure is not ground contact |
| Fig 3 :27 | a link with no instrument is not a link that works | "what counts as trust" lacks a source-discriminating instrument |
| Fig 4 :20, :22, :30 | only actors/currency/anchor change, methods up, head starts down, round-trip gap | a published summary is a lossy condensation of the decision |
| Fig 7 :13, :35 | agreement compounds, evidence does not; room agreement is variation | many readers of the same disclosure cannot corroborate it |
| Fig 8 :32, :39 | closure idempotent; no search proves absence | more disclosure inside the institution's frame adds no new atom |
| Fig 9 :27-28, :51, :54-57, :60 | describe residual first; admissible evidence bears on the residual; unbundle a union; filters are not witnesses | the disclosure must bear on the residual, not on its maker |
| Fig 10 :18-19, :24, :26, :42, :47, :49, :52, :59-60, :62-65 | declared meaning not grounded, install what can be violated, channel decay, verifier non-access, stake in the reading, provenance | institution-authored trust claims are structurally suspect |
| Fig 11 :40, :49-51 | improvement without contact changes nothing; valence relative to residual | transparency has no standing good valence |
| Fig 12 :23, :30, :117 | symmetric bonds collapse spellings; sequence is ordered; isomer | arrangement, not amount of information, is the substance |
| Fig 13 :20, :38, :115, :134 | ordering, independence, closure/open arrangements, unreachable verdict | magnitude of trust gain is a declared gap |

Strained readings are named in §6 rather than smoothed over.

---

## 3. Findings F1 to F7

### F1: The institution has a disqualifying interest in the trust reading (D1)

Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." Fig 10 :60: "Where a stake cannot be removed, declare it."

An institution that authors both the decision and the disclosure about the decision has an unavoidable interest in the outcome, and a disqualifying interest in the reading, because the reading it wants is "trust restored." Fig 9 :51: "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it." A narrative of the deliberative process is evidence about the maker. Evidence about whether the decision ranged against the affected group's ground is admissible.

**Mode `specified`.** **Status `triangulated`** across Fig 10 (ground maintainer seat) and Fig 9 (verifier admission), two figures with low overlap (a seat rule versus an evidence-admissibility rule).

**Refuter:** a case where the institution's disclosure channel is demonstrably independent of its trust stake (outside audit of the channel, fixed before outcomes are known), and trust changes only with residual-bearing disclosure. If maker-only disclosure moves the per-slot residual under that condition, this finding fails.

### F2: Human judgment is the legitimate anchor, but a survey reading is not automatically the ground (D2)

Fig 2 :36: "An anchor is legitimate when the question is constitutively about it." Fig 2 :37: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people." Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

"Is this trusted by these people?" is constitutively about people, so human judgment is the right anchor, not an institution's KPI. But Fig 2 :37 continues that instruments "can be wrong on axes they do not measure": a post-disclosure survey can read politeness, familiarity or fatigue as trust. And Fig 1 :19, "The residual is indexed by object slot, not aggregated," with Fig 1 :22, "Aggregating across slots is how a live signal disappears into an average," means the population average cannot carry the verdict.

**Mode `general` on the anchor rule, `specified` on the per-slot application.** **Status `triangulated`** across Fig 2 and Fig 1, low overlap (anchor legitimacy versus slot indexing).

**Refuter:** a within-slot, ground-anchored behavioral measure showing that a single aggregate trust reading fully predicts compliance in every affected slot with no hidden residual, or a demonstration that this question is not constitutively about people.

### F3: Transparency is a channel, not a ground, and more of it is not monotone (D3)

Fig 10 :24: "the ground does not decay, the channel does." Fig 10 :26: "stale percepts, dropped transients, saturated metrics, pooled readings." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

A disclosure is a channel. It fails by going stale, by dropping the transient that mattered, by saturating the reader, or by pooling readings across groups. A published summary is a lossy condensation of the decision; bring it back down and it will not match what was sent up. Treating "the published account" as identical to "the decision's contact with the group" sets the round-trip gap to zero, which is the dead-reckoning error Fig 4 :30 names. Fig 10 :18, "a declared meaning is not a grounded one," and Fig 10 :49, "Declaring a meaning does not ground it": publishing "we are transparent" makes the meaning declared, not grounded. Fig 10 :19: "install what can be violated."

**Mode `specified`.** **Status `triangulated`** across Fig 10 (channel office) and Fig 4 (round trip), low overlap.

**Refuter:** a disclosure channel that at any resolution returns no residual at all (a fully verifiable record that exactly matches the decision's contact with the group) with a measured round-trip gap of zero, and trust still fails to move for reasons that are not contact failures.

### F4: Agreement among readers of the same disclosure is one witness (D4)

Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

If a transparency policy is validated by many citizens all reading the same publication, that is one evidence pool wearing many names. The outside frame must be unable to reconstruct the claim it checks; it must hold only what it did not author (Fig 10, ground maintainer seat). Independence is the parameter, not a caveat, and it is bought in proportion to the cost of being wrong.

**Mode `specified`.** **Status `triangulated`** across Fig 10, Fig 2 and Fig 7, three distinct roles (verifier non-access, independence definition, room versus verdict).

**Refuter:** outside readers drawing on genuinely separate experience whose convergence changes the institution's contact with the ground. That is corroboration at high independence, not a mirror chain.

### F5: An unpopular outcome is a compound, and transparency's valence is relative to it (D5)

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51: "No standing list of good actors survives a change of residual." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Transparency is not an actor with a standing positive valence. Under a residual that is a misreading correctable by residual-bearing evidence, disclosure can reduce R_s. Under a residual that is a genuine break in contact (the decision did not range against the group's ground), maker-process disclosure can make the break visible without repairing it, which increases the felt residual. Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." This is the figure-grounded reason a single coefficient for "transparency increases trust" is the wrong shape.

**Mode `specified`.** **Status `triangulated`** across Fig 11 (valence) and Fig 9 (union), low overlap.

**Refuter:** a fixed disclosure effect of the same sign and magnitude across a documented change of residual with contact held constant. That would falsify Fig 11 :49-51.

### F6: The magnitude is a gap, not a hidden answer

After the re-census, no figure line governs *how much* trust rises. Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence." Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 3 :27: the missing link is an instrument that discriminates contact from attitude, characterized in effect terms but not held by this derivation.

This is `gap`, plainly. The world meta-analysis reports an average effect of 0.13 points (Wang and Guan, ledger), but an average over slots is exactly the Fig 1 :22 error, and a world number is corroboration, not the figure-derived verdict. Filters for the budget, witnesses for the verdict: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." (Fig 9 :60).

### F7: What survives as a candidate answer

| claim | mode | figure basis |
|---|---|---|
| Trust is anchored in human judgment, measured per slot | `general` / `specified` | Fig 2 :36-37, Fig 1 :19 |
| An unpopular outcome is a union compound, not a harder popular outcome | `specified` | Fig 9 :54-57 |
| Disclosure that bears only on the maker is inadmissible to the verifier | `specified` | Fig 9 :51, Fig 10 :59 |
| Disclosure changes trust only if it changes contact | `specified`, falsifiable | Fig 11 :40, Fig 10 :24 |
| Independence must be bought, agreement cannot corroborate | `general` | Fig 2 :31, :40, :42; Fig 7 :35 |
| The size of the trust gain | `gap` | Fig 9 :32, Fig 13 :134 |

---

## 4. Pre-registered refuter (written before the conclusion)

"A falsifier written before the run is a design instrument, not only an honesty device" (seat reasoning discipline, `THE_SEAT_MAP_Field_Guide_amended.md`, local). The shape claim is refused if any of the following holds:

1. **Fixed valence broken.** A disclosure of given kind raises per-slot trust by the same sign and magnitude across a documented change of residual with contact held constant (breaks Fig 11 :49-51).
2. **Maker evidence admitted.** Maker-only disclosure, with no residual-bearing evidence and no outside verifier, reduces the live per-slot residual in the affected group (breaks Fig 9 :51 and Fig 10 :42).
3. **Aggregate hides nothing.** A population trust rise fully predicts compliance in every affected slot, leaving no live slot residual (breaks Fig 1 :19, :22).
4. **Zero round trip.** A disclosure whose abstraction and concretisation round trip has a measured gap of zero at every resolution, and whose channel shows no saturation or pooling (breaks Fig 4 :30 and Fig 10 :26).
5. **Self-verification works.** The institution's own verification of its own disclosure changes citizen contact (breaks Fig 10 :59 and Fig 10 :42).

If any fires, the shape is withdrawn. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Lead with the residual and its refuter, not with "transparency is good." Ask what the recipient would count as a failure (F4).
2. Measure trust per affected slot before and after disclosure with a behavioral or contact-anchored instrument, and report the aggregate only as a budget filter (F2, F6).
3. Separate disclosure of maker reasoning from disclosure of residual-bearing evidence. The first is a stake-inducing channel; only the second is admissible (F1).
4. Install a violation path: an outside verifier who can refuse the institution's account and whose independence is fixed before the outcome is known (F4, Fig 10 :19).
5. Report the round-trip gap between the decision and its published summary rather than treating them as identical (F3).
6. Use the public submission and contact venues in `03_public_contact_points.csv`. Never pool later agreement as corroboration.

---

## 6. Canonical usage check and retraction/confirmation log

Two local files were read after the first four sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`.

- Canonical usage: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The framework returns "what a missing thing would have to look like (a shape, not a name)" and stops where instruments can no longer distinguish, recording the lineage. "Indiscernibility is not identity." (Local file, not a figure quote.)
- Formula: "the ground settles it. Verified only by what pays. A gate is not the ground." (Local file.) A gate that a disclosure was published is not settlement.

| earlier reading | status after the canonical check |
|---|---|
| "Fig 2 :36 makes whatever citizens say the ground" | **Retracted.** The anchor is legitimate for a question about people, but a survey response is an instrument that can miss axes it does not measure (Fig 2 :37). Corrected in F2. |
| "Fig 11 :40 means transparency never helps" | **Retracted as an overread.** It says an improvement that does not change contact changes nothing. Disclosure that does change contact is not forbidden. Re-census in F5. |
| "The 0.13 meta-analysis effect is the answer" | **Retracted as a verdict.** It is a pooled world number and a filter for the budget, not a witness for the verdict (Fig 9 :60, Fig 1 :22). Retained as secondary corroboration only. |
| "This is a single hard question about trust" | **Retracted as a partition.** Re-census gives a union compound of two conditions (Fig 9 :54-57). Each compound keeps its own loop. |
| F1 stake in the reading | **Canonically confirmed.** Fig 10 :59 and Fig 2 :43 both say a convention that decides an outcome has stopped being one. |
| F4 agreement cannot corroborate | **Canonically confirmed.** Fig 2 :31, :40 and Fig 7 :13, :35 are mutually consistent under the anchor rule. |
| F6 magnitude | **Confirmed as a declared gap.** "Unreachable is a verdict here, not a silence" (Fig 13 :134). |

### Strains after re-census

- **Fig 2 :36 versus Fig 2 :37.** Dissolved: the anchor is the person, the survey is an instrument. Different objects.
- **Fig 11 :49-51 versus the standing rule that transparency is good.** Dissolved: valence is relative to the residual; the standing rule was the strain, not the figure.
- **Fig 9 :51 versus procedural-justice literature that blurs process and outcome** (Schaap and Saarikkomäki 2022, ledger). Kept live as a world conflict. The figures require that admissible evidence bear on the residual; the world source says that distinction is blurred in practice. The conflict returned the derivation to the census and did not flip the verdict, but it is recorded: an instrument is owed that can still discriminate the two.
- **No figure line governs the magnitude.** Declared `gap`, not hidden.

### Updated verdict

The conditional shape survives. Transparency can increase trust under an unpopular outcome only where it changes contact with the affected group's ground by putting residual-bearing evidence before an outside verifier who can refuse the institution's account. It cannot do so where it only publishes maker reasoning, saturates or pools the channel, or reports trust as a single aggregate. Mode `specified`, not `grounded`. Magnitude `gap`. Strains after re-census: one live world conflict, named above, none hidden.
