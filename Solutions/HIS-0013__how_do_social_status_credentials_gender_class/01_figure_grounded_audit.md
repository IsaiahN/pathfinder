# Figure-grounded audit: how status, credentials, gender, class, race and ethnicity affect whose claims are believed

**Mode of this document: `specified` on the per-domain separations, `general` on the structural shape, `gap` on the ranking of the six attributes. It is not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement was taken in this derivation.

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap's rule applies: LLM output is a simulacrum and "the truly testable output would need to be derived from the real architecture or working the formula yourself". This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure quotes are from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim, cited as `Fig N :line`. Canonical usage is from `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources are listed in `10_source_ledger.csv` and are secondary corroboration only.

---

## 0. The residual, stated in effect terms

The question asks how six attributes "influence whose claims are believed". Stated as an effect, the residual R is:

> For a claim c presented by claimant p to audience a at time t, the belief B(c,p,a,t) is not equal to what the claim's own ground would pay if c were read without p's attributes. R_s = |Gamma(b,a) minus o'| per slot s = (c,p,a,t), and the question is which of the six attributes occupy the channel between the attributes and B.

Three things follow immediately from the formula's first step.

1. **R is per slot, never an average.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single number called "the credibility gap" would throw away the only signal that says where to look.
2. **The observable in this question is belief, and belief is about people.** Fig 2 :36: "An anchor is legitimate when the question is constitutively about it." Fig 2 :37: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people." So the recorded belief is a legitimate anchor for the narrow question "who is believed". It is **only an instrument** for "is the claim true".
3. **The two must not be conflated.** Fig 2 :45: "Frames range against the ground. They do not negotiate with it." If the audience's belief is treated as what settles the claim, panel 1 of Fig 2 has been entered: the anchor updates on the frames, everything drifts together coherently, and nobody notices (Fig 2 :34).

**What an answer would look like, bound as an ordinary term (formula step "Direction"):** a per-slot separator with three fields, (i) which attributes are verdict-bearing for the claim's truth, (ii) which are contact-changing only, that is they buy a hearing without settling anything, and (iii) what instrument discriminates the two at that slot. This is written down before the run so it can accrue a residual like any other term (Fig 5 :65: "make the sought-for shape an ORDINARY TERM").

---

## 1. Domain census before choosing any figure line

I describe R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. A domain without a nameable anchor is not yet a domain.

**R by arity, symmetry and scale.**

- *Arity:* six named attributes, one claim, one claimant, one audience, one time. The attributes are mutually correlated (status and credentials travel together; class, race and ethnicity travel together in many settings), so the residual is a **union of overlapping conditions**, not six independent causes (Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones.").
- *Symmetry:* "influence" is ordered (attribute to belief), but the attributes themselves are not a symmetric set under exchange. Swapping gender for class does not preserve the slot (Fig 12 :59: "swap the operands. Does the meaning change? No." identifies the symmetric bond; here the answer would be yes, so these are ordered bindings, not a flat conjunction).
- *Scale:* three scales are in play. The individual encounter is one room (who gets heard now). The institutional room chain is citations, reviews, prizes (Fig 7). The population scale is credential inflation and cumulative advantage, where "the ground does not decay, the channel does" (Fig 10 :24).

**Domain 1, claim-content and its ground.**

- Actors: the claim c, the instrument or record that could settle it, the audience acting as a checker.
- Currency: R_s, the residual per slot.
- Anchor: whatever settles the claim and does not change its answer because of any frame's opinion, "a measurement, an experiment, a counter, a market, a patient outcome" (Fig 2 :29). Nameable, so this is a domain.
- Question type: partition at the boundary (composable inside the closure or not). Verdict per slot.

**Domain 2, credibility signaling and reception.**

- Actors: the claimant p, the audience a, the institution that supplies the credential.
- Currency: "credibility accrued", which Fig 1 :26 names and Fig 1 :27 disqualifies as a frame-internal quantity.
- Anchor: the recorded belief itself, which is legitimate here because the question "who is believed" is constitutively about people (Fig 2 :36-37). Nameable as an observed distribution of belief, replicable under masked identities, so this is a domain.
- Question type: union. Verdict per attribute, never averaged across attributes.

**Domain 3, verification and institutional gatekeeping.**

- Actors: reviewers, editors, committees, prize panels, audiences downstream.
- Currency: agreement and residual. Agreement is a budget filter, not a witness.
- Anchor: the ground, never agreement (Fig 2 :35, Fig 2 :40). Nameable, so this is a domain.
- Question type: a checking arrangement. The six attributes are maker-only evidence and are denied to the verifier (Fig 9 :51), except where the claim is constitutively about the maker (testimony about their own position), which is a separate slot with a separate anchor.

**Partition or union.** Union, not partition. The three domains overlap and one lever does not clear their intersections (Fig 9 :54, Fig 9 :57). Specifically: a change in who is heard (D2) does not change whether the claim matches its ground (D1), and removing a credential gate (D3) does not by itself change the audience's halo response (D2).

**Order by dependency (Fig 3).** The chain is ordered by dependency, not by importance (Fig 3 :20). For this question:

1. Perception: the audience can read the marker (accent, name, title, institution) before it can read the claim.
2. Vocabulary: the audience and the institution have terms for credibility ("expert", "qualified", "senior"), and these terms name what the marker affords.
3. Objective: what would count as progress, in the audience's own terms, is the link that is broken. It has no instrument in most settings: "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments" (Fig 3 :25-26). "A link with no instrument is not a link that works. It is a link nobody has looked at." (Fig 3 :27).
4. Planning: a route from marker to belief, chosen under incomplete information.
5. Learn and carry: name what worked, verify it, carry it to the next claim.

"Optimising a link that already works cannot rescue one that does not" (Fig 3 :19). Adding more credential vocabulary, or more diversity vocabulary, lands above the break. The missing instrument is at link 3: a way to say, per slot, what would count as the claim being believed for ground-reasons rather than marker-reasons.

**Strain test before concluding.** A figure line that only fits with a strain governs another quantity, so re-census rather than smooth it. Two candidate strains arose:

- *S1:* Fig 13's six physical terms mapped onto the six social attributes. This strain is refused. Fig 4 :19 states the kernel is invariant and "Only the actors, the currency and the anchor change." Fig 13 governs the physical substrate and does not govern social signaling. The six social attributes are actors in a habitat (Fig 11 :45), not the six substrate terms. Re-census dissolves S1 without altering any verdict.
- *S2:* Fig 2 :37 makes human judgment the right anchor for a question about people. Does that make belief the anchor for this question? Only for the narrow question "who is believed". For "is the claim true" it is an instrument. Re-census assigns one anchor per domain and keeps the verdicts separate. S2 is dissolved, not hidden; the consequence is decisive for F1 and F2.

---

## 2. Figure census (bearing and verdict before findings)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | R per slot; credibility accrued is frame-internal | no aggregate credibility score can be a verdict |
| **2 The Ground** | anchor definition, independence, correlation valence, human judgment anchor | belief is an anchor for "who is believed", an instrument for "is it true" |
| **3 Dependency Chain** | the objective link has no instrument | the request for a single influence weight is unmeasurable as posed |
| **4 The Membrane** | only actors, currency and anchor change with scale | social attributes are not the physical six |
| **5 Mint Pipeline** | three guards as a product, acceptance as a bargain | the six attributes are not a mint; they are channel actors |
| **6 Closure / Reachability** | import is the only operator that moves the wall | a credential that adds a method is an import; a badge that adds none is not |
| **7 Room Chain** | agreement compounds, evidence does not | citation and prestige chains cannot corroborate a claim |
| **8 Union Surplus** | low overlap triangulates; adopted import needs record | the field's own effect estimates and this derivation share a pool unless provenance is kept |
| **9 Leave / Arrive** | describe R before choosing a frame; maker-only evidence is inadmissible; union unbundling | start from the residual, not from a favourite attribute; keep domains separate |
| **10 Ground Maintainer** | verifier non-access; interest in reading disqualifying; standing is a stake | outside checkers must not hold the framework interiors; declare stakes |
| **11 The Habitat** | enumerate the habitat; valence relative to the residual; no standing list of good actors | the six attributes have no fixed credibility valence; they are relations |
| **12 The Bond** | typed relation, price, isomer, functional group, two currencies | same attributes under a different institutional bond are different terms |
| **13 Minimum Viable Set** | closed set, open arrangements, unreachable is a verdict | no figure line ranks the six; that ranking is a gap |
| **Operators table** | negation is unary; a failing relation is an unmade claim | refusing "credentials determine truth" needs a negation, not a softer weight |
| **Symbols table** | a frame is an agent, a person, a discipline, a model; no known transform between frames | different audiences are different frames; agreement across them needs an anchor |

Strains are named in section 1 and preserved in section 7, not smoothed over.

---

## 3. Findings, each with a verbatim quote and a refuter

### F1 - Credibility is frame-internal and cannot score the frame (decisive for D1 and D2)

Fig 1 :26: "predicates minted, and credibility accrued." Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 1 :23: "The ground enters as the only metric."

A claimant's status, title or institutional badge is a quantity the audience-and-institution frame produces. Using it as the measure of whether the claim is true is the named self-scoring failure. This does **not** mean the badge has no effect on belief. It means the effect belongs in D2 and cannot be promoted into a verdict about D1.

**Mode:** `general` (structural), triangulated across Fig 1 :23, :27 and Fig 2 :29 (low overlap: the agent loop versus the ground/seat figure).

**Refuter:** exhibit a frame that scores itself with accrued credibility and whose score is nevertheless paid by the ground on a measurement independent of the frame's own report. If that holds, F1 fails.

### F2 - The six attributes may buy a hearing, but they cannot settle a claim

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :33: "The anchor must not update." Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

Fig 2 :37: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people." The same line continues that it is "only an instrument for is this code correct, and instruments can be wrong on axes they do not measure".

So credentials and status are correctly read as *budget*, in the framework's sense of giving an action a hearing. They are not the metric. When the audience treats the speaker's rank as the answer to the claim, the anchor has been moved into the room and the system has entered coherent drift.

**Mode:** `specified` (per slot), triangulated (Fig 2 :29/:34 and Fig 1 :23, different figures).

**Refuter:** a case in which a claim's truth value changes when the claimant's title changes while the claim's content and ground are held fixed. That would make the attribute a genuine anchor. None of the sources read supplies one; the world sources supply the opposite (see `09_watson_answer.md` WORLD).

### F3 - The attributes are actors with residual-relative valence, not a standing credibility list

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51: "No standing list of good actors survives a change of residual."

Applied here: a credential is a benefactor to the residual "is this claim worth hearing in a setting where the ground is remote and the audience cannot check it" and a malfactor to the residual "is this claim worth hearing where the ground is reachable and the audience can check it directly". Gender, class, race and ethnicity likewise have no fixed valence across residuals. The question's own framing, which asks for one influence weight per attribute, assumes a standing list. Fig 11 :51 refuses it structurally.

Fig 11 :45: "actors: what acts on it, and what it acts on" and Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." The six are read off the world as habitat actors, not composed from the six physical terms (S1 dissolved).

**Mode:** `specified`, triangulated (Fig 11 :49-51 and Fig 4 :19, different objects: habitat actors versus invariant kernel).

**Refuter:** exhibit an attribute whose valence is positive for every residual at every scale, including residuals where the ground is directly reachable. That would restore a standing list and break F3.

### F4 - The effect is per slot; averaging erases it

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :28: "The gap is measured per object, not per step."

A headline such as "gender explains x percent of belief" aggregates over claim types, audiences and grounds. It is exactly the averaging Fig 1 forbids. The world literature already shows the problem: the Matilda effect entry records both attribution reversals and a set of studies that "found no difference between citations and impact of publications of male authors and those of female authors", so a pooled effect is a union, not a law. The Bertrand and Mullainathan field experiment reports a uniform gap across strata while also reporting that callbacks were more responsive to resume quality for White names, so even within one study the effect is a compound.

**Mode:** `general` on the indexing rule, `specified` on the claim that this question's effect is per slot. Triangulated (Fig 1 :19/:22 and Fig 9 :57).

**Refuter:** demonstrate that aggregate statistics over claim slots fully determine the per-slot credit allocation, with no residual left at any slot. If that holds, per-slot indexing adds nothing.

### F5 - This is a union compound, so one lever leaves the intersections standing

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The six attributes overlap: a name signals race, ethnicity and often class; a title signals credentials and status; an institution signals credentials and class. A policy that blinds names leaves the title signal standing; a policy that blinds titles leaves the accent signal standing. One lever does not clear the compound.

**Mode:** `general` (structural), single-source on the figure definition (Fig 9), corroborated by the world's mixed findings but not settled by them.

**Refuter:** exhibit one manipulation that removes all six attribute channels and their pairwise intersections at once, with a measured residual of zero at every slot. That would make it a partition with a single common cause, not a union.

### F6 - Maker-only evidence is inadmissible to the verifier, with one legitimate exception

Fig 9 :51: "what the verifier may see: evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it".

Status, credentials, gender, class, race and ethnicity are, for a claim about the world, evidence bearing only on the maker. They are therefore denied to a verifier checking that claim. This is not a moral rule about fairness; it is a rule about what can count as a witness.

**The exception, kept visible:** when the claim is constitutively about the maker, for example "where was the observer standing at the event", the maker's position is evidence bearing on the residual, not merely on the maker. Fig 2 :36: "An anchor is legitimate when the question is constitutively about it." So the exception is not a loophole; it is a different domain with its own anchor. This is recorded as a live strain S3 in section 7 and sent to `11_audit.md`, not hidden.

**Mode:** `specified` with a stated exception, triangulated (Fig 9 :51 and Fig 2 :36, different figures).

**Refuter:** show a claim about the world whose truth is settled by the claimant's title and not by any evidence bearing on the claim, while the claim is not constitutively about the claimant. Under Fig 2 :29 that would be a genuine anchor and F6 would need re-census.

### F7 - Agreement chains compound prestige, not evidence

Fig 7 :13: "agreement compounds, evidence does not". Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

Citation counts, prize panels and institutional endorsements are room chains. A claim passed along a chain of rooms that all use the same markers and the same evidence pool is one long room. This is the mechanism behind the Matthew effect source: "disproportionate visibility given to articles from acknowledged authors, at the expense of equally valid or superior articles written by unknown authors". The visibility is real; the evidence added is zero.

**Mode:** `specified`, triangulated (Fig 7 :13/:35 and Fig 8 :48, low overlap between the room-chain figure and the union figure).

**Refuter:** exhibit a chain of endorsements in which each room ranges independently against a non-updating ground and the next room is selected by the residual the previous one surfaced. That is the grounded branch of Fig 7, and it would not refute F7 but would bound its scope; F7 is refuted only if a same-pool chain adds evidence.

### F8 - A credential is an import only if it adds an atom

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 6 :22: "IMPORT adds an atom, and the added atom is what expands the closure." Fig 8 :50: "But shared atoms are not the signature." Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them".

A credential that certifies a learned method has added a term to the audience's closure and can change ground contact. A credential that certifies only rank has added no atom; it has changed the weighting on existing terms. Both look like "a qualified person said it". Only the provenance separates them. This is why the question cannot be answered by counting credentials: the two cases have different bonds to the same visible marker (Fig 12 :94: "The arrangement is the substance.").

**Mode:** `specified`, single-source on the figure side (Fig 6 and Fig 8 share a closure vocabulary, so this is one figure pool rather than two witnesses), corroborated by the credentialism source which describes a degree used "as a proxy for quality employees, a rough, rule-of-thumb screening mechanism".

**Refuter:** show that a badge which adds no method to the closure nevertheless changes the ground contact of the claim in a source-discriminating measurement. That would force a re-census of what "atom" means in this domain.

### F9 - Ranking the six by causal weight is a `gap`, not a silence

Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line ranks gender against class, or credentials against race. The canonical limit says the framework returns a shape, not a name, for a primitive not held in the library, and here the missing thing is an instrument that would discriminate the six channels at a slot. So the answer to "which matters most" is `gap`, of the unreached-at-this-budget kind rather than the underivable-in-principle kind. The owed instrument is a factorial vignette design with identity markers varied independently, a claim ground read separately by a checker who never sees the markers, and a refuter written before the run.

**Mode:** `gap` on the ranking, `general` on why the ranking is not returned. Single-source refusal (Fig 9 :32 plus the canonical figures README, which share an author and are counted as one witness).

**Refuter:** produce a figure line that assigns an order or weight to these six attributes, or produce a cross-domain measurement that survives the per-slot and independence requirements above. Until then, "unreachable is a verdict, not a silence" governs.

### F10 - The question's own "influence" is an ordered claim, and a correlation cannot choose the arrow

Fig 12 :59 gives the test for the symmetric bond: "swap the operands. Does the meaning change? No." The Operators table gives the ordered sequence bond: "A then B; B needs A to have happened", with the test "swap them. Does it become a different thing? Yes." The word "influence" asserts the ordered form (attribute to belief). The observed association between an attribute and belief is symmetric: it is compatible with attribute to belief, with belief to attribute (audiences who already believe a claim infer higher competence in its author), and with a common cause.

Fig 2 :39: "Correlation has valence." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". A pooled correlation cannot settle the direction; the direction must be imported from an identification frame with source gate and shadow test (Fig 6 :23, Fig 8 :51), or read from an experiment that varies the marker while holding the claim fixed.

**Mode:** `general` (structural), triangulated (Fig 12 :59 and Operators table, plus Fig 2 :40).

**Refuter:** exhibit a symmetric association that nevertheless determines the causal arrow without import or intervention. That would break the ordered-bond reading.

---

## 4. Pre-registered refuter (written before the conclusion)

Per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." The following are committed before the verdict in section 5, before the synthesised answer and before outreach. Any one firing sends the derivation back to the census; it does not get absorbed as a softer weight.

1. **R1, channel absent.** A masked-identity manipulation in which belief allocation is unchanged across systematic variation in all six attributes, at several claim domains and several audiences, with a pre-registered equivalence test, would refute the claim that these attributes fill the channel at all.
2. **R2, standing list restored.** An attribute whose valence is positive for every residual at every scale, including where the ground is directly reachable, would refute F3 and Fig 11 :51.
3. **R3, bad atom import.** A credential that adds no method to the closure but demonstrably changes ground contact in a source-discriminating measurement would refute F8's atom reading.
4. **R4, anchor moves.** A case where the ground's answer changes because the audience's belief changed, measured independently of the audience's report, would refute F2 and break Fig 2 :33.
5. **R5, aggregation harmless.** Aggregate statistics over claim slots that fully determine the per-slot allocation, leaving no live slot residual, would refute F4 and Fig 1 :22.
6. **R6, union false.** One manipulation that removes all six channels and their intersections at once with zero residual at every slot would refute F5 and Fig 9 :55.
7. **R7, arrow from correlation.** A demonstration that a symmetric association alone determines the influence arrow, without import or intervention, would refute F10.
8. **R8, exception swallows the rule.** A claim about the world, not constitutively about the maker, whose truth is settled by the claimant's identity and not by claim-bearing evidence, would force re-census of Fig 9 :51 and F6.

---

## 5. Recommendation

1. **Split before searching.** Treat "whose claims are believed" and "which claims are true" as two domains with two anchors. Do not average them (Fig 9 :57). This is the whole of F1, F2 and F6.
2. **Lead with the residual, not with a favourite attribute.** Fig 9 :28: "describe it before you go looking, or any frame you pick will seem to fit". Start from the per-slot gap, then enumerate habitat actors (Fig 11 :43).
3. **Keep the three verdicts separate.** D1 (truth) and D2 (belief) and D3 (verification) have different currencies. Never turn "believed more" into "truer".
4. **Write the discriminator before the study.** The owed instrument is a factorial vignette with independent marker variation, a ground checker blind to the markers, and R1 to R8 as stop conditions. A failure is more useful than an endorsement.
5. **Send a generator, not a recording.** Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the separator and its refuters, not a headline effect size.
6. **Do not rank the six.** Record `gap` where the framework returns a shape. Fig 9 :32, Fig 13 :134.

---

## 6. Canonical usage check (figures README and WATSON 60)

Read after sections 0 to 5, and governing how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the canonical limit that the framework says what a missing thing would have to look like, "a shape, not a name", then stops at the limit of the available instruments and records the lineage. "Indiscernibility is not identity." This governs F9 and the refusal to rank the six.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: "the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." The seat reads the ground; it does not ask the anchor to decide what the figures already settle. No ruling was requested for any of F1 to F10. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Effect sizes from the world sources are filters for where to look, not witnesses for the verdict.
- `FRAMEWORK/figures/THE_FORMULA.md`, step 7: the three questions SEARCHED, INWARD and OUTWARD are kept distinct. For this residual: SEARCHED is already partly done by the world literature, which returns a union of mixed effects; INWARD is the blind-ground vignette instrument; OUTWARD is an identification frame from experimental economics or psychometrics, with source gate and shadow test. Importing an attribute ranking against a budget limit would add an atom that was not needed (Fig 8 :42).

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F1 "credibility is frame-internal" | **Confirmed and narrowed.** It governs a quantity the frame produces. It does not deny that the marker changes belief; that effect is moved to D2 rather than erased. |
| F2 "attributes cannot settle a claim" | **Confirmed, with Fig 2 :36-37 as its own limit.** For a question constitutively about the person, the person's judgment is the right anchor. Different domain, not an exception to be smuggled in. |
| F3 "no standing list" | **Canonically confirmed.** Fig 11 :51 is explicit. The world's mixed findings are not needed for it; they corroborate only. |
| F4 "never aggregate" | **Confirmed.** The world's pooled effect sizes are reported as evidence of the union, not as a replacement for per-slot reading. |
| F7 "agreement chains add nothing" | **Narrowed.** The grounded branch of Fig 7 (rooms selected by surfaced residual) is not refuted; the finding applies to same-pool chains. |
| F8 "badge versus method" | **Kept, single-source declared.** Fig 6 and Fig 8 are one closure vocabulary; the credentialism source corroborates the proxy reading but is not an independent witness for the atom claim. |
| F9 "gap on ranking" | **Canonically confirmed and upgraded from weakness to verdict.** "Unreachable is a verdict, not a silence." The ranking is not a missing sentence in the answer; it is the answer's stated limit. |
| S1, physical six mapped onto social six | **Retracted as a figure mapping.** Re-census assigns the social attributes to habitat actors under Fig 4 :19. Preserved here as evidence of the correction. |
| S2, human judgment as anchor | **Narrowed to D2.** It is not an anchor for D1. Preserved, not deleted. |
| S3, testimony exception | **Kept as a live strain, sent to `11_audit.md`.** Maker position is claim-bearing evidence when the claim is constitutively about the maker. Fig 2 :36 governs; Fig 9 :51 governs the other case. |

---

## 7. Strains and re-census log

- **S1, dissolved:** Fig 13's six physical terms versus the six social attributes. Re-census: Fig 4 :19, only actors/currency/anchor change with scale; Fig 11 :45, the habitat is actors, conditions and relations read off the world. No figure line was forced.
- **S2, narrowed:** Fig 2 :37 human judgment anchor versus Fig 2 :29 non-updating anchor. Re-census: two domains, two anchors, no averaging.
- **S3, live:** Fig 9 :51 denies maker-only evidence to the verifier, but testimony about the maker's own position is maker-bearing evidence. Fig 2 :36 supplies the exception. It is recorded as a type question requiring a per-slot reading, not smoothed into a blanket ban.
- **S4, live:** "influence" is ordered while the measured association is symmetric. F10 handles it by requiring an imported identification frame; no figure line supplies the arrow. This is a strain on the question, not a contradiction between figures.
- **After re-census: two live type questions (S3, S4), two dissolved strains (S1, S2), none hidden.**

---

## 8. Updated verdict

The shape survives; the requested single answer does not. The six attributes are habitat actors with residual-relative valence (Fig 11 :49-51), so no standing credibility order exists. They buy contact with an audience, not settlement of a claim (Fig 1 :27, Fig 2 :29). The question is a union compound (Fig 9 :55), so one lever leaves intersections standing, and the effect is per slot (Fig 1 :19). Credential effects divide by bond, into method imports that add an atom and badges that only reweight existing terms (Fig 6 :22). Citation and endorsement chains compound agreement rather than evidence (Fig 7 :13). The identity of the most influential attribute is a `gap` (Fig 9 :32, Fig 13 :134), not a silence and not a number to be invented. Mode `specified` on the separations, `general` on the structural shape, `gap` on the ranking, ungrounded, candidate throughout. Simulated derivation, internal consistency only.
