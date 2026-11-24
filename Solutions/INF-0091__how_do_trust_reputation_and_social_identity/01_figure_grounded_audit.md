# Figure-grounded audit: trust, reputation, and social identity in belief and sharing

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape, not `grounded`.** It states what would have to be measured to settle each claim. Per `THE_FORMULA.md`: "Mode. general - specified - grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap says LLM output is a simulacra and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The local figure text with line numbers at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the seat map, and the world sources opened 2026-11-23 and listed in `10_source_ledger.csv`. Every figure quote below is taken from the verbatim extract, not from a summary.

---

## 0. The residual, stated in effect terms

The observation to be explained: the same proposition P, presented to receiver R, is believed or disbelieved and shared or not shared depending on who said it, what that source's standing is, and which group R belongs to. Call the difference between what R believes and what the ground returns the residual `R` for the slot P. The question asks how three cues (trust, reputation, social identity) move that residual.

**Arity.** R is not a single number. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Each claim is a slot. The cues are also multi-arity: trust is at least a dyad (source, receiver), reputation is a standing assigned by a community, and identity is a many-to-many group relation. Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single coefficient for "how trust affects belief" would throw away the only signal that says where to look.

**Symmetry.** Believing and sharing are not the same operation and are not symmetric. Belief updates an internal state; sharing is an action with network consequences. The Symbols table defines the belief b as "Formed from its own history and from what it inherited, mixed by w. Not the observation." and defines the observation o-prime as what actually happened. Trust, reputation, and identity enter b through the inherited side, not through o-prime. They are priors, not observations.

**Scale.** The effect runs from individual cognition, through dyads and groups, to network propagation and institutional standards. Fig 4 :19-20: "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change." So the same loop applies at each scale, but the cast and the anchor must be re-censused at each one.

**What an answer would look like (bind it as an ordinary term).** The sought-for shape is a *separator*: for each of the three cues, name the domain it belongs to, the currency it moves, the anchor it should range against, the condition under which it is a valid instrument versus a mirror, and a failure condition written in advance. Binding this shape as a term lets it accrue a residual like anything else, per the formula's Direction rule.

---

## 1. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not a domain yet. Partition or union is stated, then dependency order.

- **D1, the claim-and-ground domain (epistemic).** Actors: proposition P, evidence, instruments. Currency: the residual R between prediction Γ(b,a) and observation o-prime. Anchor: the ground, "whatever settles the question and does not change its answer because of what any frame thinks" (Symbols table :104-105). Nameable: yes (measurement, experiment, counter). This is the domain that should settle belief.
- **D2, the testimonial or source-trust domain (dyadic).** Actors: speaker, audience, the trust relation. Currency: credibility and reputation. Anchor: conditional. A source's track record against the ground is a nameable anchor, so reputation is a valid instrument only when it is a record of ground contact. When reputation is accrued from being repeated by those who already believe, there is no nameable anchor and the domain collapses into a mirror. So D2 is a union of two conditions with different anchors, not one thing.
- **D3, the social-identity and convention domain (group).** Actors: in-group, out-group, community standards. Currency: shared meaning, belonging, standing. Anchor: for the question "is this one of us / is this meaningful here," the group's own judgment is legitimate, because Fig 2 :36 says "An anchor is legitimate when the question is constitutively about it." For the question "is P true," group identity has no nameable anchor and is not a truth domain at all. D3 is therefore a convention domain, not an epistemic one, and the two must not be averaged.
- **D4, the propagation domain (network).** Actors: routers, bridges, feeds, communities. Currency: attention and reachability. Anchor: the same ground as D1, reached through a channel that can decay. Fig 10 :24: "the ground does not decay, the channel does." Nameable anchor: the ground, plus the channel as the thing that fails.
- **D5, the verification domain (checking arrangement).** Actors: outside checker, anchor, seat. Currency: residual and provenance, never agreement as such. Anchor: the ground. In this simulated run the checker shares the author's evidence pool, so its independence is zero and its agreement is one pool talking.

**Partition or union.** It is a union of overlapping conditions, not a partition. Trust, reputation, and identity can all bind on the same acceptance decision; a case in two conditions is categorically different from a case in one. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either." A single lever (a fact-check, a credential, a norm) clears the region where only one condition holds and leaves the intersections standing.

**Order by dependency (Fig 3).** Perception of the claim -> terms for what a source affords -> objective (what counts as belief and what counts as sharing, separately) -> routing decision -> carry and update (reputation change). The chain usually breaks at the middle link: people have terms for "trustworthy" and "credible" but no instrument for "true independent of who said it." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The output is per slot, so verdicts are kept per domain and never averaged into a single "trust increases belief by X" claim.

---

## 2. Figure census (bearing and verdict before findings)

| figure | bearing | verdict for this question |
|---|---|---|
| 1 The Agent | frame-internal quantities disqualified; credibility accrued named explicitly | reputation and credibility are frame-internal unless paid by ground |
| 2 The Ground | anchor must not update; independence; correlation has valence | determines the truth/convention split and why agreement cannot corroborate |
| 3 Dependency Chain | a reading below the break is a reading of nothing | breaks between source vocabulary and the truth objective |
| 4 The Membrane | methods cross up, recordings do not; round trip gap | a claim that spreads is often a recording, not a generator |
| 5 Mint Pipeline | credibility accrued is frame-internal; machinery firing is not success | a community can be busy believing and mint nothing |
| 6 Closure / Reachability | import moves the wall; debited against independence | cross-group transmission is an import with a source gate |
| 7 Room Chain | agreement compounds, evidence does not | repetition inside a group raises confidence, not evidence |
| 8 Union Surplus | low overlap gives surplus; high overlap is one frame with two names | echo chamber is the zero-surplus case; independence is the parameter |
| 9 Leave / Arrive | union vs partition; describe residual before frame; filters vs witnesses | the question is a union; effect sizes are filters, not verdicts |
| 10 Ground Maintainer | ground does not decay, channel does; reputation to protect disqualifies | explains why trusted institutions can become mirrors |
| 11 The Habitat | valence relative to residual; no standing list of good actors | no fixed list of trustworthy sources survives a change of residual |
| 12 The Bond | bond carries information operands do not; isomer and functional group | trust as method vs trust as recording are different substances |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | no figure returns a universal trust coefficient; that is a gap |
| Operators table | identity = two names, one referent; negation refuses | identity bond is the relevant analogue, with a strain noted |
| Symbols table | b formed from history and prior, not observation; w weighting; R per slot | the three cues are inherited priors, i.e. the w side of b |

Strained readings are named in the findings, not smoothed over.

---

## 3. Findings

### F1 - The three cues enter the belief through the prior, not the observation (governing)

Symbols table :19-21: "What the system takes to be the case before it acts. Formed from its own history and from what it inherited, mixed by w. Not the observation." Symbols table :23-25: "How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings."

Trust, reputation, and social identity are all inherited priors. They determine how far b leans on the inherited side before any observation is taken. That is the mechanism by which they affect belief: they change w, and R = |Γ(b,a) - o-prime| is then read against a belief already tilted. The Symbols table also defines R as "The gap between prediction and observation. The central quantity: everything the system does is driven by it. It is the aim, not only the error signal, and it is always a slice."

Consequence: a cue can raise confidence (move b) without changing contact with o-prime. That is the exact shape of the continued-influence and illusory-truth findings in the world literature. The figure line governs the quantity; the world literature corroborates it.

**Refuter:** show a case where trust or identity changes belief by changing the observation term o-prime rather than the weighting w, with the source's ground contact held constant. Then this finding is wrong.

### F2 - Reputation and credibility accrued are frame-internal (decisive for D2)

Fig 1 :26-27: "predicates minted, and credibility accrued" and "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A reputation score produced by the same community that uses it to decide what to believe is a frame scoring itself. It is explicitly disqualified as a metric. Fig 1 :23: "The ground enters as the only metric." This does not ban reputation; it says reputation is a metric only when it is a record of contact with an anchor outside the believing frame (for example, a source's verified predictive track record against later outcome).

Fig 10 :59-61: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged." "And standing is a stake that survives the outcome it was earned on." Reputation is standing. A keeper of a reputation is disqualified as its own verifier. Fig 10 :93: "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."

**Refuter:** produce a reputation measure whose values are determined by an anchor that does not update on the community's own reports and that predicts later ground readings out of sample. Then F2 is narrowed to other cases.

### F3 - Correlation has valence: the same agreement is a convention and a corruption (governing for D3)

Fig 2 :39-41: "Correlation has valence." "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" and "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it."

This is the split that the question hides. For the verdict "is P true," agreement inside an identity group is worthless because the frames share an evidence pool. For the convention "is this one of us, is this meaningful, whose standards apply," the same agreement is the product. Fig 2 :36-38: "An anchor is legitimate when the question is constitutively about it. Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."

So social identity legitimately settles questions of belonging and shared meaning, and is structurally disqualified from settling truth. Treating identity as a truth signal is a category error, not a bias to be debiased. Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

**Refuter:** show a case where group agreement about identity changes the truth value of P on a question that is constitutively about the ground. Then the valence split collapses and F3 is withdrawn.

### F4 - Repetition compounds agreement and does not add evidence (governing for sharing)

Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not." Fig 7 :35-36: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

A claim repeated by neighbours in the same closure gains confidence, not evidence. This is what the echo-chamber and illusory-truth literatures observe; the figure names the arithmetic. Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

The intervention follows: the next "room" must differ from the last and match the surfaced residual. More of the same source is motion, not progress. Fig 7 :42: "The chain approaches the truth only as the world runs out of ways to refuse it. Which means the next room you book is the direction you travel, and booking a room like the last one is how a chain stops travelling at all."

**Refuter:** show a closed group whose repeated transmissions increase the group's ground-contact accuracy without any new atom entering from a differing closure. Then F4 fails.

### F5 - High-overlap trust is one frame wearing two names; the surplus needs independence (governing for D4)

Fig 8 :48-49: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names." Fig 8 :15: "two names for one frame."

A trusted in-group source and the receiver are often one frame wearing two names. Their agreement carries no surplus. Fig 8 :51-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ." So a claim that crosses into a genuinely different closure is an import; it needs a source gate (provenance) and a shadow test (does it explain a gap). Fig 6 :24: "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."

This is the mechanism behind both the value and the danger of cross-cutting exposure. Exchange between differing closures can move the wall; exchange that looks like exchange but shares an evidence pool cannot.

**Refuter:** show two frames with measured near-total evidence overlap whose agreement still improves ground accuracy in the receiving frame. Then the independence parameter in F5 is wrong.

### F6 - An actor's valence is relative to the residual; there is no standing list of trustworthy sources (governing)

Fig 11 :49-51: "An actor's valence is relative to the residual, not a property it carries." "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." "No standing list of good actors survives a change of residual."

This structurally refuses the search for a universal list of trusted sources or identity markers. The same credential helps for one claim and harms for another. What survives is a per-residual enumeration of who acts on the claim and with what valence. Fig 11 :52-53: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." A source's influence on sharing is typically second or third order.

**Refuter:** exhibit a fixed set of source properties whose valence is invariant across residuals and that a checker can use without re-enumerating the habitat. Then F6 is narrowed.

### F7 - A claim that crosses a boundary as a recording carries no generator (governing for the content of sharing)

Fig 4 :22-25: "Only methods cross up. Only head starts come down." "upward: a method that can be reapplied. Never the recording of a particular success." "A recording carried upward looks like knowledge and is a description of one occasion."

A slogan or a past success that spreads is a recording. It produces repetition and cannot produce a new result in the receiver. A method with its provenance intact is a generator. Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." A shared claim that loses its bond (why it was believed, from what ground) is an ingredient list, not a belief one can check.

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The round trip gap R_T for a shared claim is the difference between what the original ground contact supported and what the receiver can reconstruct. It is not zero by default.

**Refuter:** show a transmitted claim whose receiver can reproduce the original ground contact from the message alone, with the bond and provenance intact, so R_T is zero. Then F7 does not apply to that case.

### F8 - The bond carries trust, so type matters more than amount (supporting)

Fig 12 :46-47: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands." "A recipe that names only its ingredients has recorded half of itself." Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing."

Trust-as-a-method (a re-applicable check of ground contact) and trust-as-a-recording (an accrued standing) have the same ingredients (source, audience, history, claim) but different bonds, so they are different substances. Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Where the standing and the method are both present over the same atom set, the two standings are isomers, not degrees of one thing. See `06_isomers_and_order.md`.

**Refuter:** show that the two cases have the same bond type (for example, both are pure identity ≡ with the operands swapped), in which case they are one term and the isomer claim fails.

### F9 - Reputation as an outcome-fixing convention is a verdict, not a convention (supporting)

Fig 10 :47: "a convention that decides an outcome has stopped being one." A trust score or credentialing rule that determines which claims are accepted has become a verdict. Fig 10 :49: "Declaring a meaning does not ground it." A platform label that declares a source credible does not make it credible. Fig 2 :33-34: "The anchor must not update. If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

This is the collapse mode of institutional reputation systems: the label is treated as the anchor, the label updates on the community's reports, and the whole system drifts coherently. It is invisible from inside.

**Refuter:** show a reputation convention that decides acceptance and whose decision still ranges against a non-updating ground separately for each case. Then the convention has not stopped being a convention and F9 is narrowed.

### F10 - No figure returns a universal coefficient; that is a gap, not silence (verdict)

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence,". Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line returns "trust raises belief by X percent" or ranks the three cues universally. The figure set returns the shape of the separator and the conditions under which each cue is an instrument or a mirror. The numerical share, and which cue dominates in a given community, need an instrument (a measurement that discriminates prior from observation and ground contact from standing). Until such an instrument is run, this is `unreached`, not `unreachable in principle`, and it is reported as a gap.

**Refuter:** derive a universal coefficient from a figure line, or produce a measurement that discriminates the three cues at the ground. Either would close the gap.

### F11 - What survives (defensible residue with mode attached)

| claim | mode | figure |
|---|---|---|
| The three cues enter through the inherited side of the belief, not the observation | `specified` | Symbols table :19-21, :23-25 |
| Reputation is frame-internal unless paid by ground contact | `specified` | Fig 1 :26-27, Fig 1 :23 |
| Identity legitimately settles conventions and is disqualified from truth verdicts | `specified` | Fig 2 :36, :39-41 |
| Repetition compounds agreement, not evidence | `specified` | Fig 7 :12-13, :35 |
| The surplus needs low overlap; high overlap is one frame with two names | `specified` | Fig 8 :48-49 |
| Valence is relative to the residual; no standing list of trusted sources | `specified` | Fig 11 :49-51 |
| Trust-as-method and trust-as-standing are isomers over the same atoms | `specified`, unmeasured | Fig 12 :46, :117 |
| No universal coefficient is figure-derivable | `general`, gap | Fig 9 :32, Fig 13 :134 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. A falsifier written before the run is a design instrument. The shape claim and its separators are refuted if any of the following holds:

1. A cue is shown to change belief by changing the observation term o-prime with ground contact held constant, so F1's prior-versus-observation split fails.
2. A reputation measure is shown to predict out-of-sample ground readings while being produced entirely inside the believing frame, so F2's frame-internal charge fails.
3. Group identity is shown to change the truth value of a ground-constitutive proposition, so F3's valence split fails.
4. A closed group's repetition is shown to increase ground accuracy without any import from a differing closure, so F4 fails.
5. A fixed, invariant list of trustworthy source properties is exhibited across residuals, so F6 fails.
6. A figure line is found that returns a universal coefficient for the effect, so F10's gap is withdrawn.

If any fires, the corresponding finding is retracted and the separator is rebuilt. Until one is run, no part of this is labelled `grounded`.

---

## 5. Recommendation

1. Lead with the separator, not with a slogan about trust. State which domain each cue belongs to and which anchor it ranges against (F1, F2, F3).
2. Keep truth verdicts and convention verdicts in separate columns. Never average them (Fig 2 :39-41).
3. Treat reputation as an instrument only with provenance and a shadow test, and declare the stake of its keeper (Fig 10 :59-61, :93).
4. Design the next "room" to differ from the last and match the surfaced residual; more of the same source is motion (Fig 7 :36).
5. Send the generator (the separator and the refuter), not a recording of one case (Fig 4 :25).
6. Report the gap as a gap. An unreached coefficient is not an invitation to invent a number (Fig 9 :32).

---

## 6. Canonical usage check and retraction or confirmation log

Two sources were read after the first sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also "a reading that makes one contradict another has misidentified its domain, not found a flaw," and the canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)," then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `THE_FORMULA.md` Direction rule: a frame cannot check the direction of its own question because the shape it seeks is not a term it holds. The remedy is to write the sought-for shape down as an ordinary term and let it accrue a residual. The separator in section 0 is that binding.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "trust, reputation and identity are priors" | **Narrowed, not retracted.** The Symbols table governs the belief b; Fig 2 :36 governs the separate case where identity is the legitimate anchor for a question about people. The claim applies to truth questions only. |
| "reputation is frame-internal" | **Narrowed.** A reputation that is a genuine record of ground contact is an instrument. The charge applies to standing accrued inside the believing frame. |
| "the identity bond ≡ explains social identity" | **Refused as a governing line.** Operators :25 "two names, one referent" is used in `06` as an analogue only. A social group is not a symbol with two names; using the bond as a derivation would be the echo-without-shadow error the framework warns against. Kept visible as a refused temptation. |
| "echo chamber is the same as a filter bubble" | **Retracted from the world reading.** Nguyen (2020) and the Wikipedia synthesis distinguish them: a bubble omits voices, an echo chamber actively discredits them. Re-mapped in `06` to the figure distinction between an undirected union (Fig 8 :19-21, mute) and a chain of mirrors (Fig 7 :36). |
| "high overlap is bad" | **Re-censused.** Overlap is one quantity read twice (Fig 8 :47-49): it destroys verdict weight and removes surplus, but it is efficient for a convention (Fig 2 :41). No blanket ban. |
| "the figures cannot say anything about trust" | **Refused.** They return the shape (prior versus observation, anchor versus mirror, valence relative to residual) even though they return no coefficient. "Unreachable is a verdict here, not a silence." |

### Seven-question recursive derivation (summary)

1. **Is this one question?** No. It is a union of at least four conditions with different anchors (Fig 9 :54-57). Split before searching.
2. **Where do the cues enter?** In the inherited side of b, mixed by w, not in o-prime (Symbols :19-25).
3. **Is reputation a metric?** Only when it is a record of ground contact; otherwise it is frame-internal (Fig 1 :26-27).
4. **Is identity a truth anchor?** No for truth, yes for convention (Fig 2 :36-41). Correlation has valence.
5. **Does repetition add evidence?** No. It compounds agreement inside a closure (Fig 7 :12-13).
6. **What crosses between groups?** An import with a source gate and a shadow test, debited against independence (Fig 6 :24, Fig 8 :51-52).
7. **Is there a universal coefficient?** No figure line gives one. Gap, reported as unreached (Fig 9 :32, Fig 13 :134).

### Updated verdict

The separator survives: the three cues are inherited priors, reputation is a metric only when it pays against the ground, identity settles conventions and is disqualified from truth, repetition compounds agreement rather than evidence, no standing list of trusted actors survives a change of residual, and the surplus requires differing closures. What does not survive: the demand for a universal coefficient, any ranking of the three cues outside a stated residual, and the temptation to treat group agreement as corroboration. Strains after re-census: one live analogue strain (identity ≡ versus social identity, named in finding F11 and `06`), one live instrument type (what counts as a source's ground-contact record), neither hidden.
