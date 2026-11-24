# Figure-grounded audit: can a signal carry information if no system can detect or interpret it?

**Mode of this document: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on naming content without a frame. Not `grounded`.**

Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is simulacra and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, opened this session), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md` (the canonical usage rule), four framework essays reopened this session, and the world sources listed in `10_source_ledger.csv`. Every figure quote below was checked against the verbatim extract, not against a summary.

---

## 0. The question under audit, in effect terms

> **Question:** Can a signal carry information if no system can detect or interpret it?
>
> **Option A:** Yes. Carrying information is a property of the signal or of its source-to-signal relation. A detector is a later consumer, not a constituent. A pattern in a region no observer will ever reach still carries information.
>
> **Option B:** No. Information is a three-place relation among signal, world and interpreter. With the interpreter term removed, what remains is a physical pattern, a correlation or a bit string, not information. "Unread information" is a contradiction.
>
> **What each leads to.** A licenses talking about information as a mind-independent resource that can be stored in a medium no one reads, priced in bits, erased at a thermodynamic cost, and lost in a black hole. B collapses information into knowledge, salience or correlation-for-someone, so that a message in a dead language, DNA before anyone sequenced it, and a radio wave passing through empty space all stop being information at the moment the last reader dies.
>
> **What an answer would look like (the sought-for shape, bound as an ordinary term before the run).** A per-domain verdict that says which of the following the word "information" names in each setting: (i) a distinguishable physical state of a carrier; (ii) a statistical measure over a source and channel; (iii) a typed relation from a signal to a state of affairs; (iv) a capacity to be recovered and used by a detector. The shape claim is that these four are separate quantities, that (i) to (iii) do not require a detector, that (iv) does, and that the question as written bundles them into one binary. If this shape is right, A and B are each true of some domains and false of others, so neither can be the answer to the question as posed. This is the five-line header discipline applied to the residual: DECIDES the four-domain split; HOURS one audit; PRIOR CASE the completed exemplar `QMGR-0037`; ANALOGUE the Library of Babel searcher, who narrows a shape before naming an answer; LIMIT a frame cannot check the direction of its own question, so the shape is pre-registered here rather than discovered after the fact.

---

## 1. Residual and domain census

### 1.1 R by arity, symmetry and scale

- **Arity.** The minimal "carries information" relation is two-place: signal and source (smoke and fire). "Means" or "is about" adds a typed relation to a state of affairs; interpretation adds a receiving frame. The question stipulates the removal of the receiving frame and asks whether carriage survives. So the residual is specifically about whether the third term is constitutive of the first two. This is a question about arity, not about quantity.
- **Symmetry.** Shannon mutual information is symmetric: I(X;Y) = I(Y;X). Semantic aboutness is directed: smoke carries information about fire, fire does not carry information about smoke in the same sense. The figures have the same distinction. Under a symmetric bond, "swap the operands. Does the meaning change? No" (Operators table :15); under an ordered bond, "swap them. Does it become a different thing? Yes" (Fig 12 :73, the test for → sequence). So two quantities are being called "information" and they have different symmetry. This is a census result, not a verbal quibble: the question's yes/no cannot apply to both.
- **Scale.** A single distinguishable state (one slot, one bit) is not the same object as an arrangement of states (a molecule of atoms and bonds), and neither is the same as a corpus or library. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A global "is this signal informative?" is exactly the aggregation the figures forbid.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if a nameable anchor exists, something that settles its question and does not move when a frame pushes on it. Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30: "If it moves when you push on it, it is not an anchor."

| domain | actors | currency | nameable anchor? | anchor |
|---|---|---|---|---|
| **D1 Physical carrier** | source, channel, signal state, noise | distinguishable physical states, bits | yes | the state of the carrier, readable by an instrument; "The ground enters as the only metric." (Fig 1 :23) |
| **D2 Statistical measure** | source distribution, channel statistics, random variables | entropy, mutual information, channel capacity | yes | the joint distribution over repeated trials, fixed by the source and channel, not by a decoder |
| **D3 Semantic aboutness** | signal, state of affairs, typed relation, frame holding the closure | aboutness, truth, meaning | partly | the bond from signal to source is part of the term (Fig 13 :130); *which* bond and *what* it is about has no anchor without a frame and a ground (Fig 10 :49, Fig 2 :45) |
| **D4 Detection and use** | detector, instrument, perceiver, habitat | contact, recovery, capability, actions | yes | an instrument already returning something that fails to resolve (Fig 6 :34), or a measurement (Fig 2 :29) |

D3 is admitted as a domain because part of it has an anchor (the bond is carried by the term) and part has an honest `gap` (the content cannot be named). A domain with a partial anchor is not thrown out; the split is reported. By contrast, "the vibe of the message" is not admitted: no anchor is nameable for it, so under the census rule it is not a domain yet.

### 1.3 Partition or union

This is a **union**, not a partition. The four conditions can coexist in one case: a radio pulse from a pulsar has a physical state, a mutual information with its source, an aboutness (the neutron star's rotation), and an accessibility (we may or may not have a dish pointed at it). They overlap, so removing one does not remove the others. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "a case in two conditions is not a harder case of either." The question as written is a bundle of at least four conditions, so a single lever (stipulate a definition of "information") clears only the region where one condition holds and leaves the intersections standing.

### 1.4 Order by dependency (Fig 3)

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

1. **D1 carrier first.** Without a distinguishable physical state there is no slot to index and nothing to modulate.
2. **D2 statistical second.** The distribution is defined over the carrier states.
3. **D3 aboutness third.** The typed relation composes over the carrier and the correlation; Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it."
4. **D4 detection last.** A detector is an instrument in contact with the residual. It presupposes something to detect. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at" names the condition of D4, not of D1 to D3.

Residual before frame: Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit." So the census precedes the choice of Shannon, Dretske, Floridi or Gibson as a witness.

---

## 2. Figure census

| figure | bearing on this question | verdict it governs |
|---|---|---|
| **1 The Agent** | residual per slot; aggregation hides live signals; ground as only metric | D1 and the anti-averaging rule |
| **2 The Ground** | anchor must not update; triangulation not negotiation; correlation valence | all anchors; D3 convention versus verdict |
| **3 Dependency Chain** | ordered by dependency; middle link has no instrument | the D1 to D4 order |
| **4 The Membrane** | methods cross up, recordings do not; round trip gap | outreach and the R_T record |
| **5 Mint Pipeline** | a preference is not a term; support, novelty, settlement | the pre-registered shape term |
| **6 Closure / Reachability** | import moves the wall; instrument from a worse instrument already returning something; no proto-instrument where nothing registered | D4, underivable versus unreachable versus genuinely absent |
| **7 Room Chain** | agreement is variation, not a verdict | no consensus shortcut |
| **8 Union Surplus** | no search proves absence; convergent derivation versus adopted import needs the record | D4, world witnesses, provenance |
| **9 Leave / Arrive** | describe before looking; shape not a name; union unbundling | the union reading and the D3 gap |
| **10 Ground Maintainer** | declared meaning is not grounded; verifier non-access; stakes declared | D3 convention boundary; outreach order |
| **11 The Habitat** | capability is agent-and-habitat; contact; introduce not subtract | D4, and the refusal of "detector alone" |
| **12 The Bond** | the bond is the information; seven bonds; symmetry; two currencies | D1 and D3 carriage; the symmetry split |
| **13 Minimum Viable Set** | a term carries its bonds; order is in the lineage, not the artefact; unreachable is a verdict | D3 carriage and the honest gap |
| **Operators table** | bond carries information the operands do not; negation is unary | D1 and D3; the refusal of "just define it otherwise" |
| **Symbols table** | R is a slice; what cannot be perceived is residual and cannot be read | D4, the unread signal as residual |

Strained readings are named in section 5, not smoothed over.

---

## 3. Findings

### F1 — The question bundles four quantities, so its binary cannot be answered as written (structural, `general`)

The effect census gives four domains with different anchors. Fig 9 :57: "a case in two conditions is not a harder case of either." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." A yes or no that covers all four is an average, and the figures forbid averaging across slots: Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

The world literature makes the same bundle visible from a different direction. The *Stanford Encyclopedia of Philosophy* entry on Information lists "information reduces uncertainty" and "information is extensive" as two central properties, then records entropy, Fisher information, algorithmic complexity, semantic information and information as a state of an agent as distinct proposals (Adriaans and van Benthem, 2023 revision). The *Philosophy of information* article records MacKay's "a distinction that makes a difference" alongside Floridi's four kinds: information about, as, for and in something. These are not four definitions of one thing awaiting a winner; they are four quantities. The figure census reached the same split before the world sources were opened, which is the correct order (Fig 9 :53: "Residual first, frame second").

**Refuter:** show that all four domains have one and the same anchor, so that a single measurement would settle carriage, measure, aboutness and accessibility together. No such instrument is named by any source read here.

### F2 — Carriage is structural: the bond is part of the term, so no interpreter is needed for it (D1 and D3, `specified`, triangulated)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Operators table :4: "The bond carries information the operands do not, so a term that names only its ingredients has recorded half of itself." Fig 13 :130: "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."

That is the load-bearing move. The information is not a reader's state; it is the typed relation that makes an arrangement a molecule rather than a list. A term carries it by being that term. No detector enters the definition. Fig 12 :101: "A bond that costs nothing is a bond that carries nothing, which is the flat case" gives the contrapositive test: a pattern with no discriminable structure carries no structural information, and that is a fact about the arrangement, not about who is looking.

Triangulation status: **triangulated** across Fig 12 (composition) and Fig 13 (lineage and term identity), two figures with different subjects and different vocabularies. Both are framework primaries, so this is low overlap within the framework, not independence from it. World corroboration comes from outside the framework: the SEP entry on Semantic Conceptions of Information calls information channels "robust entities in their own right" and quotes Barwise: "By an information channel, let us mean one of these relations between situations, since it is these relations which allow information about one situation to be gleaned from another situation." Dretske's account is even more direct: "Information, understood in Dretske's sense, is something that exists as an objective and mind-independent feature of the natural world and can be quantified." This corroborates, it does not decide; the verdict comes from the figures.

**Refuter:** show that a bond is not carried by the term but is imposed by a reader at read time, so that removing all readers removes the bond rather than the reading. Concretely: produce a molecule whose typed relation changes when no one is observing it, with the atoms held fixed. If that happens, Fig 13 :130 is false as read here.

### F3 — Measurability is a property of the source and channel, not of a decoder (D2, `specified`, triangulated)

Fig 1 :23: "The ground enters as the only metric." The statistical anchor is the joint distribution of source and channel outputs, fixed by repeated trials. Wikipedia's Information theory article states Shannon's result that the channel capacity is "a quantity dependent merely on the statistics of the channel over which the messages are sent", and that for any rate above capacity "it is impossible to transmit with arbitrarily small block error" no matter what decoder is used. Mutual information is symmetric, whereas aboutness is directed (section 1.1). They are therefore two quantities even in the same physical case.

Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." A bit count prices the description; the action of decoding prices finding out. Conflating them is the error named there, and it is the error in the question's binary: "carry information" is priced in bits, "detect or interpret" is priced in actions. They are in different units and do not add.

Triangulation status: **triangulated** across Fig 1 (ground as only metric) and Fig 12 (two currencies), with world corroboration from the Shannon literature. Single-source on the specific claim that mutual information is symmetric, which is a mathematical fact from the channel literature, not a figure line.

**Refuter:** exhibit a channel whose capacity changes when the receiver is removed while source and channel statistics are held fixed. Signal detection theory points the other way: it defines a "Miss" as the case "Stimulus Present, Respond Absent", which presupposes that the signal was present when no response occurred. A miss is not a cancellation.

### F4 — Naming what a signal is about is a `gap` without a frame and a ground (D3, `gap`, single-source for the limit)

Carriage (F2) is not naming. Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable" and "which one holds is not recoverable from the operands." Fig 13 :128: "Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available." Fig 13 :129: "It is recoverable from the lineage." So an undetected signal may carry a bond, but which bond it carries is not readable off the signal; it needs the lineage or a frame whose closure predicts it (Fig 8 :53: "Residual first, frame second").

Two further limits apply. First, a declared meaning is not a grounded one: Fig 10 :18 "a declared meaning is not a grounded one" and Fig 10 :49 "Declaring a meaning does not ground it." So stipulating that the signal "means fire" does not make it true. Second, the framework returns a shape, not a name: Fig 9 :32 "you get a kind of thing, never the answer itself"; Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it." That limit governs a missing primitive, not an already-held atom, per the correction recorded in `05_what_shape_means.md` section 5b and in section 7 below.

Therefore: **with no interpreter, the content is unreachable, not absent.** Fig 13 :134: "Unreachable is a verdict here, not a silence." Fig 8 :39: "So a search that finds nothing is never a proof of absence." The honest report is a shape (some typed relation from the signal to a state of affairs) plus the statement that the specific relation cannot be named from the signal alone. Marked `gap`, not `no`.

Status: **single-source** for the shape-not-a-name limit within the figures (Fig 9 and Fig 13 are two figures, so triangulated as figure text), but the application to this question is one derivation, not corroborated by a second independent seat; see `11_audit.md`, whose second seat shares the evidence pool. World corroboration: the SEP Semantic Conceptions entry notes that "meaning and information come apart" on Fodor's account and distinguishes "Smoke means fire" (information-carrying) from "'Smoke' means smoke" (semantic). That is the same split in a different field.

**Refuter:** an instrument that reads the bond type and the intended referent directly off a signal without any lineage or frame, and that stays correct under changes of the reader's closure. The metamerism case in *The Hard Problem is About Source* is the standing warning: "If several paths create the same behavior, then behavior is a projection with lossy information." A green reading does not name its source.

### F5 — Detection is a contact property; it governs reachability, not carriage (D4, `specified`, triangulated)

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." Detection is therefore a fact about the agent-and-habitat pair, not about the signal's inventory. A detector added or removed changes accessibility; it does not retroactively change the bond that the term carries.

The key instrument rule is Fig 6 :34: "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve." And its limit, Fig 6 :40: "What is unavailable is a sensor for something that has never registered anywhere, at any resolution. That is the whole of it." So there are three distinct D4 states:

1. **Unreachable at this budget:** the term is in the closure and was not found. The remedy is more search, with independent searchers (Fig 8 :41-42).
2. **Underivable / genuinely no proto-instrument:** nothing at any resolution is returning anything. Fig 6 :40 applies. This is a genuine absence of access, not a proof that nothing is there.
3. **No detector exists by stipulation:** the question's case. This is state 2 described from outside. It bounds *use*, not *carriage*.

Fig 8 :39 ("So a search that finds nothing is never a proof of absence") does **not** govern the stipulated case directly; it governs searches. Applying it here was an early overreach and is corrected in section 7.

Triangulation status: **triangulated** across Fig 11 (capability and contact) and Fig 6 (instrument availability), two figures with different subjects. World corroboration is strong and low overlap: *Detection theory* treats a miss as a present stimulus with no report; *Affordance* (Gibson 1979) defines an affordance as "what it offers the animal, what it provides or furnishes, either for good or ill" and Gaver's category of a **hidden** affordance is precisely "there are possibilities for action, but these are not perceived by the actor." Hidden does not mean absent.

**Refuter:** show that adding or removing a detector changes the source-to-signal bond while the signal and source are held fixed. If it does, contact is constitutive of carriage and F2 collapses into F5.

### F6 — "No system can detect it" is a global-zero reading, and a global zero is compatible with a live slot (`general`)

Symbols table :38-40: "It is always a slice: what cannot be perceived yet is residual and simply cannot be read." Fig 1 :20: "a global residual near zero with one live slot is a legal state". Fig 1 :19: "The residual is indexed by object slot, not aggregated."

So a claim that nothing anywhere detects the signal is a statement about the global reading. It does not entail that no slot carries positive mass. And the sentence itself says the unperceivable is *residual*, not *nothing*: it "simply cannot be read". That is the figure's own answer to the question's implied inference from unreadability to non-existence. The inference is invalid.

**Refuter:** show that a global residual of zero entails zero mass on every slot, i.e. that Fig 1 :19-22 is wrong. This would require the support guard in `THE_FORMULA.md` step 3 to be redundant, which it is not: "SUPPORT |R⁺_s| > 0 for some s before the search."

### F7 — Interpretation adds information rather than removing the need for it (`specified`, single-source on the mechanism)

The *Decoding Tacit Knowledge* essay, reopened this session, is the closest world-source treatment of this exact question. It says writing "carries the context well and the subtext partly, but it almost never carries the pretext", and "A manual outlives the craft when no one is left who can read it as it was meant." It also says of language models that training on text reproduces "the traces the thought left, not the thought." So the signal carries traces after the interpreter is gone; what fails is the reconstruction of meaning, not the existence of the pattern. That is F2 plus F4 in a different vocabulary.

The same essay gives the rule for outreach and for verdicts: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause."

Interpretation is itself a composition. Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." An interpreter supplies the route (sequence, comparison, production) that the bare state does not carry in its notation. Adding an interpreter therefore adds bonds; it does not create the atoms and it does not create the carrier. This is why Option B fails: it treats the added bonds as if they were the whole object.

Status: **single-source** for the claim that interpretation adds bonds, since it derives from Fig 12 alone; the essay corroborates from a shared author pool and carries no independent witness weight (Fig 2 :40).

**Refuter:** a case where an interpreter's reading leaves the arrangement unchanged and still produces a different correct content. If that is possible, bonds are imposed by readers and F2 is wrong.

### F8 — Two figure lines that look like a contradiction are not (strain, dissolved by re-census)

Fig 8 :39 says a search that finds nothing is never a proof of absence. Fig 6 :40 says a sensor for something that never registered anywhere is unavailable, "that is the whole of it." Read as one claim, these pull in opposite directions: one forbids concluding absence, the other licenses a categorical limit.

Re-census resolves it. Fig 8 :40 scopes its three theorems: "These prove the metaframe is underivable. They do not prove any particular atom is far away." Fig 8 :39 therefore governs **underivability from inside a closure**, not the availability of a proto-instrument for a named residual. Fig 6 :34-40 governs **instrument availability**. Different objects, different instruments, different instructions. The same move was used in the completed exemplar `HIS-0096` for the pair Fig 8 :39 versus Fig 6 :34-35. After re-census, no strain remains on this pair; the live strains are listed in section 5.

### F9 — What actually survives, with mode attached

| claim | domain | mode | figure / source |
|---|---|---|---|
| A distinguishable physical state of a carrier persists without a reader | D1 | `specified` | Fig 1 :23; Fig 12 :5 |
| The typed relation is part of the term, not a reader's addition | D1, D3 | `specified` | Fig 13 :130; Operators :4 |
| A source-channel measure is fixed by channel statistics, not by a decoder | D2 | `specified` | Fig 1 :23; Fig 12 :125-126; world math |
| Aboutness is carried as a bond but cannot be named from the signal alone | D3 | `gap` for the name, `specified` for the carriage | Fig 12 :46; Fig 13 :128-129; Fig 9 :32 |
| Detection changes reachability and use, not carriage | D4 | `specified` | Fig 11 :39-40; Fig 6 :34, :40 |
| The unread is residual, not nothing | D1, D4 | `general` | Symbols :38-40; Fig 1 :19-22 |
| The four items are a union and must be unbundled | all | `general` | Fig 9 :54-57 |

### F10 — The answer is not a definition change (prohibition, `general`)

A temptation at this point is to settle the question by stipulating that "information" shall mean the structural quantity, so that the answer is yes by definition. Fig 10 :46: "A convention makes no claim about the world; a verdict and an atom both do." Fig 10 :47: "a convention that decides an outcome has stopped being one." A definition that settles the question would be a convention deciding an outcome, which the figures forbid. Fig 2 :41 permits agreement about shared meaning: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it." But Fig 2 :40 disqualifies the same agreement as a verdict about the world. So the shape claim is offered as a convention about which quantities to keep separate, with the per-domain verdicts left to their separate anchors.

**Refuter:** a demonstration that the four domains share one anchor after all, so that the split is a convention that changes nothing. The census in section 1 is the claim that they do not.

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim fails if any of the following holds:

1. **Bond dependence.** A signal's typed relation changes when all detectors are removed while signal and source are held fixed (refutes F2 and Fig 13 :130 as applied here).
2. **Anchor collapse.** D1 to D4 are shown to share one anchor, so that one instrument settles carriage, measure, aboutness and accessibility (refutes F1 and the union reading).
3. **Decoder-dependent capacity.** A source-channel capacity changes when the decoder is removed while the channel statistics are fixed (refutes F3).
4. **Artefact-readable content.** An instrument reads the bond type and the intended referent directly off a signal, correctly across changes of the reader's closure (refutes F4 and the `gap`).
5. **Contact constitutive of carriage.** Adding or removing a detector changes the source-to-signal bond (refutes F5).
6. **Global zero implies slot zero.** A global residual of zero entails zero mass on every slot (refutes F6 and Fig 1 :19-22).
7. **Interpreter adds nothing.** An interpreter's reading leaves the arrangement unchanged and yields a different correct content without adding bonds (refutes F7).

If any fires, the shape is withdrawn or narrowed to the domains that survive. Until one is run, nothing here is `grounded`.

---

## 5. Strain test and re-census

- **S1, Fig 8 :39 versus Fig 6 :40.** Dissolved in F8: underivability from a closure versus availability of a proto-instrument. Different objects.
- **S2, "information" in Fig 12 versus "information" in Shannon.** The figures' word names what the arrangement records; Shannon's names uncertainty reduction over a distribution. Re-census: D1/D3 versus D2. Two quantities, not a contradiction. Kept as separate verdicts, not averaged.
- **S3, Dretske's mind-independent information versus Floridi's factive semantic information.** Re-census: mind-independence of carriage (F2, F3) and factivity of content (F4) are about different questions. A signal can carry a correlation mind-independently and still fail a truth test. Kept as a live instrument need, not a strain between figures.
- **S4, Fig 11 :40 (contact) versus Fig 6 :23 (import).** Both concern change through contact, but Fig 11 governs capability of agent-and-habitat while Fig 6 governs the wall of a closure and prices an import against independence. Named, not smoothed. No flip of verdict.
- **After re-census: no unexplained figure conflict; three named live items (S2 vocabulary, S3 factivity instrument, S4 two contact senses).**

---

## 6. Recommendation

1. Answer in shape, not with a bare yes or no. Refuse the binary as a bundled question (F1).
2. Lead with F2 and F6: the bond is part of the term, the unread is residual. Those are the strongest figure-grounded lines and they are checkable from four short passages.
3. Report the semantic content as `gap`, not as "no" (F4). "Unreachable is a verdict here, not a silence."
4. Keep detection in its own domain. Do not let a detector result be read as a result about carriage (F5).
5. Do not settle by definition (F10). Offer the split as a convention about quantities, and let each anchor decide its own verdict.
6. Send the generator, not the recording: Fig 4 :22 "Only methods cross up. Only head starts come down." The outreach artifacts lead with the residual and the refuter and offer the links only after a verdict is recorded.

---

## 7. Canonical usage check and retraction log

Two sources were read after the first six sections and they govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` (the canonical rule that "the quotes are the authority, not this summary", that a reading making figures contradict one another has misidentified its domain, and that the framework returns "a shape, not a name") and `THE_FORMULA.md` (the eight-step loop, the mode rule, and the direction limit that a frame cannot check its own question).

| earlier reading in this draft | status after the canonical check |
|---|---|
| "No, information needs an interpreter" (the semantic intuition) | **Retracted as a domain error.** It conflated D3 naming with D1 carriage. The bond is carried by the term (Fig 13 :130). |
| "Yes, Shannon bits are in the signal" | **Narrowed.** Entropy is a property of a source distribution; a single token's surprisal depends on the model. D2 is about the source-channel pair, not a bare token. |
| "the bond carries information, so the question is answered" | **Narrowed.** This governs the framework's internal notion and the analogue in semantic information theory. It corroborates the shape; it does not decide the world question on its own. |
| "Fig 8 :39 proves that no detector cannot mean no information" | **Retracted as an overreach.** Fig 8 :39 governs searches; Fig 6 :34-40 governs instrument availability. The stipulated case is handled by Fig 6, not Fig 8. |
| "no detector means unreachable at this budget" | **Narrowed.** It may be genuine absence of any proto-instrument (Fig 6 :40), a budget limit (Fig 8 :40-43), or a stipulated absence. Three states, not one. |
| "shape, not a name forbids saying what the signal is about" | **Narrowed.** The limit governs a missing primitive; naming an already-held bond is a provenanced binding. The `gap` here is about *which* bond and referent, not a ban on all naming. |
| "hidden affordances are undetected information" | **Narrowed.** Gibson's affordance is agent-and-habitat (Fig 11 :39); it corroborates that non-perception is not non-existence, but it does not carry the semantic content of a signal. |
| S1 Fig 8 versus Fig 6 | **Dissolved by re-census** (F8), scope distinction, same move as `HIS-0096`. |
| S3 factivity versus mind-independence | **Kept as a live item**, not resolved by a definition. A source-discriminating instrument is owed. |

### Round trip note

The condensation from the figure set into the four-domain shape loses at least three constraints: the per-slot indexing of the residual (Fig 1 :19), the distinction between underivability and instrument absence (Fig 6 :40 versus Fig 8 :39), and the convention/verdict boundary (Fig 2 :40-41). The gap R_T is therefore nonzero and is recorded qualitatively in `11_audit.md`. Treating "the shape is just what the figures say in fewer words" would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

### Updated verdict

The four-domain shape survives. Carriage of structure and of a typed relation does not require a detector; measurability is fixed by source and channel; detection is a contact property governing reachability; specific content is a `gap` without a frame and a ground. The question's binary is refused. Mode: `specified` on the four domain verdicts, `general` on the split, `gap` on content naming, nowhere `grounded`. No strain after re-census is hidden; the three live items are named in section 5.
