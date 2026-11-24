# Figure-grounded audit: when does compression preserve what matters, and who decides?

**Mode of this document: `specified` on the shape claims, `general` on the cited laws, `gap` on the identity of a particular relevance measure, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay read 2026-11-23) says LLM output is a simulated approximation and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* *Arrival of the Fittest: The Tether Architecture* (read 2026-11-23) says such outputs *"must be seen as simulacra"* and *"could never be verified if the solutions presented were not contrived to fit the formula."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Local framework files: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. All eight essays by Isaiah N were opened 2026-11-23, and the public information-theory sources listed in `10_source_ledger.csv` were opened the same day.

---

## 0. The question stated as an effect, with the sought-for shape bound

The question as written: *When does compression preserve the information that matters, and who determines what matters?*

Binding the sought-for shape as an ordinary term before the run (THE_FORMULA.md, "Direction"; Fig 5 :65-66): an answer would look like a four-part claim. (a) A transform is given, from a source X to a representation T. (b) A relevance term is given, binding what the far end will check. (c) The transform is bracketed by a measured round-trip gap, so what was dropped is reported rather than assumed zero. (d) An anchor settles whether the check at the far end passed, and that anchor does not move when the compressor changes its mind. If any part is absent, "preserves what matters" is not a claim but a phrase. This binding is what the refuter tests.

---

## 1. Domain census, before choosing any figure line

### R by arity, symmetry and scale

- **Arity.** Three-place, not two. Compression relates (i) a source, (ii) a representation and (iii) a relevance term at the far end. Two-place readings (source and representation only) silently smuggle "matters" in as an unbound preference, which is the named failure in Fig 5 :61-63.
- **Symmetry.** Bits are exchangeable across positions: a bit saved is a bit saved, which is why an aggregate bit count can stand in for "compression achieved". Mattering is ordered, not exchangeable: it is a threshold relation (a goal is a comparison, Operators table :51), so it has the asymmetry of ⋛ rather than the symmetry of +. Treating the two as one quantity is a type error.
- **Scale.** Symbol, message, model/hypothesis class, and across-scale (the abstraction and concretisation of Fig 4). Generation loss is a across-scale and across-uses phenomenon, not a per-symbol one.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Coding and reconstruction** | source, encoder, channel, decoder, destination | bits, rate R, distortion D, entropy | a measured reconstruction error, *provided the distortion measure is pinned to a ground* | admitted, compound partner |
| **D2 The compressor's frame** | hypotheses H in a class ℋ, atoms, bonds, Γ, candidate φ | description length L(H)+L(D\|H); cost(φ)+left(R,φ) | the ground settling a minted term; **absent here**, so "shortest" is frame-internal | admitted with warning |
| **D3 The ground and the criterion** | the ground, frames, the seat that keeps contact | residuals R; whether the ground pays | the ground itself, which must not update (Fig 2 :29-30) | admitted, decides part 2 |
| **D4 Relevance and contact** | the relevant variable Y, prior preferences and goals, habitat | mutual information I(T;Y); risk against preferences; effect descriptions | the use or application at the far end, enumerated from contact | admitted, where "matters" gets a handle |
| **X1 "information that matters in itself"** | none nameable | none | **no nameable anchor** | not a domain yet, only a phrase |

### Partition or union

Union, not partition. D1 and D2 supply the mechanics of the transform; D3 and D4 supply the criterion of mattering. They are a compound because "best compression" with no declared criterion has no currency and no anchor, and a single lever that clears D1 and D2 leaves the criterion conditions standing (Fig 9 :55-57). Fig 9 :5: *"Split it rather than search."* X1 is excluded rather than split: no figure line names a primitive "importance" or "matter", and no instrument returns it, so it is a `gap`, not a domain (Fig 13 :134-135: *"Unreachable is a verdict here, not a silence,"* and the next clause says a missing primitive cannot be named by a frame that does not hold it).

### Order by dependency (Fig 3)

Perceive what is arriving (D1) to get terms for what the use affords (D4), state what would count as preservation (D3 anchor), then choose and price the transform (D2). Fig 3 :20: *"The chain is ordered by dependency, not by importance."* A transform chosen before the criterion is a link below the break: Fig 3 :22-23 says *"a reading taken below the break is not a weak reading. It is a reading of nothing."*

**Strain test applied before findings.** An apparent strain between Fig 1 :6-7 (ground is the only metric) and D1's distortion measure dissolves on re-census: the ground in Fig 1 is what settles a learning agent's bets; a distortion measure in D1 is an instrument, and instruments can be wrong on axes they do not measure (Fig 2 :37-38). Different quantities. No figure line was forced in the census.

---

## 2. Findings, one loop per domain, verdicts kept separate

### F1 (D1) The transform loses information by design, and the loss is measured rather than eliminated

Fig 4 :27: **"The transform between scales loses information, and that is the point."**

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

The Symbols table :77-78 names the quantity: `R_T` is *"The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x)). Measures what the coarser description cannot hold."*

**Reading.** A compression claim is not "bits reduced"; it is "bits reduced, and here is R_T at the level where the ground reads". The world literature agrees from an independent instrument: the lossy compression reference notes generation loss, that repeatedly compressing and decompressing progressively loses quality, and that rate-distortion theory provides the information-theoretic foundations. The essays give the same shape as a worked case: *How Intelligence Actually Works* says *"Every time that something goes through stages of a transformation, there is always information loss in the process affected by the type of the change rendered."*

**Mode:** `general` for the law, `specified` for its use here. **Status:** triangulated (Fig 4 and the Symbols table and Fig 12 :107, low overlap: one is the membrane rule, one is the definition, one is the cost of settling). **Refuter:** a lossy transform up and back down that reproduces the original at the level the ground reads with a measured zero gap, across two independent applications. Then R_T is not mandatory and this finding falls.

### F2 (D1 and D2) "Compression achieved" cannot decide what matters

Fig 1 :25: **"coverage, and compression achieved"** is listed among the things that do not count. Fig 1 :26: **"predicates minted, and credibility accrued"**. Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** Fig 1 :23: **"The ground enters as the only metric."**

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

**Reading.** A compression ratio is a budget quantity. It is perfectly legitimate for deciding what to try, and disqualified as a witness for whether what mattered survived. This is the central answer to the first half of the question, and it is the answer most likely to be resisted, because the engineering metric is real. It is real in the way a filter is real. The essays name the failure mode directly: *Arrival of the Fittest* cites Goodhart, Campbell and Strathern under the heading *"Proxies, and what happens when a measure becomes a target"*, and Fig 10 :47 says **"a convention that decides an outcome has stopped being one"**.

**Mode:** `general`. **Status:** triangulated (Fig 1 and Fig 9 and Fig 10, distinct roles). **Refuter:** a compressor whose own ratio predicts the ground's preservation verdict across two independent application frames with low overlap. Then the ratio is a witness after all and F2 is withdrawn. Note the overlap condition: one application, or two classes drawn from one literature, is one witness wearing two names (Fig 2 :40).

### F3 (D2) The MDL bargain is the compression criterion, and it is class-relative

Fig 5 :42: **"The acceptance test is a bargain, not a threshold."**

Fig 5 :43-44: **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."**

Fig 5 :45: **"This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."**

Operators table :63-64: **"A bond costs what it could have been. The price of an arrangement is the choice it records, so it is logarithmic in the number of bonds available:"**

Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**

**Reading.** The figures license the criterion `cost(φ) + left(R,φ) < cost(R)`. The MDL reference states the identical two-part code: `L(D) = min over H in ℋ of [ L(H) + L(D|H) ]`, and quotes Grünwald: *"any regularity in a given set of data can be used to compress the data, i.e. to describe it using fewer symbols than needed to describe the data literally."* The minimisation is over ℋ, a hypothesis class, which is a frame's closure (Fig 6). So "shortest description" answers "best in this class", not "matters". The MDL reference records the class-relativity itself: Rissanen stresses that *"a model class is typically a simplification of reality and thus does not contain any code or probability distribution that is true in any objective sense."* And the same page notes the global shortest description (Kolmogorov complexity) *"cannot, however, be computed."* That is not an inconvenience; it is Fig 8 :39, *"So a search that finds nothing is never a proof of absence."*

**Mode:** `general` for the bargain, `specified` for the class-relativity. **Status:** triangulated (Fig 5, the Operators table and Fig 6, with the MDL reference as independent corroboration of the two-part code). **Refuter:** two hypothesis classes with different atoms that yield different "best" descriptions on the same data and where the ground prefers the longer one, with the preference reproducible. That breaks the bargain as a preservation test while leaving it intact as a compression test.

### F4 (D2) What the flat description drops is the bond, and the bond is what matters behaviourally

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :14-16: **"the ingredients are recorded and the arrangement is not"**, **"nothing downstream can tell them apart, and nothing signals that anything was lost"**, **"→ the parts are not the thing"**.

Fig 12 :94: **"The arrangement is the substance."**

Fig 12 :95-96: **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**

Operators table :4-5: **"The bond carries information the operands do not, so a term that names only its ingredients has recorded half of itself."**

**Reading.** This is the figure-licensed content answer to "what information matters". It is not "the high-entropy parts" and not "the semantics" in some unmeasurable sense. It is the typed relation between operands: the thing that is lost by the flat formula (Fig 12 :6, *"collapse 6: the flat formula"*) even though the bit count looks successful. Information bottleneck work corroborates from an independent field: it is *"designed for finding the best tradeoff between accuracy and complexity (compression)"* against a relevant variable, and *"The information bottleneck can also be viewed as a rate distortion problem, with a distortion function that measures how well Y is predicted from a compressed representation T compared to its direct prediction from X."* The price of the arrangement is the choice it records (Fig 12 :99), so a representation that keeps atoms and discards bonds is cheap precisely because it carries nothing about which arrangement was taken.

**Mode:** `specified`. **Status:** triangulated (Fig 12 and the Operators table, two distinct entries in the same figure set, corroborated by the independent information-bottleneck formulation). **Refuter:** two arrangements over the same atom set, with different bond types, which behave identically on the ground across a declared distortion measure and two independent uses. Then the bond is not the carrier of what matters and the isomer test fails. `06_isomers_and_order.md` states this test in full.

### F5 (D3) "Who determines what matters" is an anchor question, and the answer must not move

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :30: **"If it moves when you push on it, it is not an anchor."**

Fig 2 :36: **"An anchor is legitimate when the question is constitutively about it."**

Fig 2 :37-38: **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."**

Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**

Fig 10 :47: **"a convention that decides an outcome has stopped being one"**

**Reading.** The question "what matters" is constitutively about the use at the far end, so the ground of that use is the legitimate anchor. The distortion function is not the anchor. It is an instrument, which may be wrong on axes it does not measure, and if the designer chooses it and it then decides what counts as success, it has become a convention deciding an outcome, which Fig 10 forbids. The rate-distortion reference corroborates the structural point from inside the field: *"The notion of distortion is a subject of on-going discussion."* and *"the distortion measure should preferably be modeled on human perception and perhaps aesthetics"*. That is an import of a value from outside the compressor, recorded as such. The lossy compression reference says the same operationally: *"Knowledge of the application is used to choose information to discard, thereby lowering its bandwidth."* The *Library of Babel* essay gives the cleanest one-line statement from the framework's own corpus: *"The problem you have determines what makes a book relevant to you or not."*

**Mode:** `general`. **Status:** triangulated (Fig 2 and Fig 10, low overlap: one defines the anchor, one forbids a convention from deciding an outcome). **Refuter:** a criterion of mattering that changes its answer when the compressor pushes on it and is still accepted as settling the question, reproduced twice. Then the anchor rule is wrong for this domain and F5 is revised.

### F6 (D4) "Matters" must be bound as an ordinary term or it is an invisible preference

Fig 5 :61-63: **"BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL."**, **"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."**

Fig 5 :65-66: **"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."**

Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**

Fig 6 :30: **"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**

**Reading.** A compressor that says "I preserve what matters" while holding "what matters" as an unbound preference is structurally unfalsifiable. The remedy is not a new theorem but the discipline already stated: bind the relevance term, let it make a prediction, and let it be refused. The information bottleneck literature supplies a working instance from another field: the compressed variable T is judged against *"an observed relevant variable Y"*, and Harremoës and Tishby wrote a paper literally titled *"The Information Bottleneck Revisited or How to Choose a Good Distortion Measure"* (ISIT 2007, cited on the information bottleneck page). That is the relevance term bound and then examined. *They're Scanning Books* names the deeper reason: *"Every instrument is a crystallized hypothesis about what is worth measuring, and the hypothesis comes from human awareness."* An unstated distortion measure is a crystallized hypothesis that has not been declared.

**Mode:** `general` for the discipline, `specified` for its use here. **Status:** triangulated (Fig 5, Fig 9 and Fig 6, written in different figures with different jobs). **Refuter:** a compressor with an unbound, unstated relevance criterion whose preservation claim is nonetheless independently refutable on a declared ground. Then binding is not necessary and F6 falls.

### F7 (D4) The relevance criterion is imported from contact, not derived inside the compressor

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 8 :45: **"Two frames together reach what neither reaches alone."**

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

**Reading.** A compressor cannot derive its own relevance criterion from its own library and then certify that it is the right one. The criterion comes from the frame that holds the use, through an import with a source gate and a shadow test (Fig 6 :11-14, Fig 8). This is why the answer to "who determines what matters" is a relation between two frames and the ground, not a property of one representation. The *Decoding Tacit Knowledge* essay puts the operational version: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*

**Mode:** `specified`. **Status:** triangulated (Fig 6, Fig 8 and Fig 11, distinct closures). **Refuter:** a compressor that derives and validates its own relevance criterion entirely inside its library and the criterion tracks the ground on new cases from a different closure. Then import is not needed and F7 is withdrawn.

### F8 (gap) No figure names the member

Fig 9 :32: **"you get a kind of thing, never the answer itself"**

Fig 13 :134-135: **"Unreachable is a verdict here, not a silence,"**, **"It cannot say which primitive is missing, because naming it would mean already holding it."**

**Reading.** After a genuine re-census of D1 to D4, no figure line names a primitive "importance", "relevance" or "matter", and none fixes a universal distortion function. The particular relevance variable for an application is therefore a plain `gap`, to be filled by a provenanced import from the application frame. Candidates from the world literature (Hamming distortion, squared error, perceptual distortion, the information-bottleneck relevance variable Y, an agent's prior preferences) are imports, not figure outputs. They must carry their source and their shadow test, and they must be debited against the independence of the frame that supplies them (Fig 6 :24). Reporting this as `gap` is required: Fig 8 :39, **"So a search that finds nothing is never a proof of absence."**

**Mode:** `general` for the limit, `gap` for the member. **Status:** single-source for the figure rule, corroborated by the canonical README's "a shape, not a name". **Refuter:** production of a verbatim figure line that names such a primitive or fixes such a measure. Then the gap closes.

### F9 (verification) First contact carries the residual and the refuter, never the source

Fig 10 :52: **"Bring a characterised residual, never the source."**

Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."**

Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

**Reading.** The correct ask of an outside checker is: here is the effect claim and the failure condition, what would you count as a failure? The framework's interiors come later and only if asked. If the checker's verdict changes after seeing them, their independence was spent. This governs `02_outreach_email.md` and `08_expert_verification_packet.md`.

**Mode:** `general`. **Status:** triangulated (Fig 10 and Fig 2). **Refuter:** a controlled check in which outside readers' verdicts are unchanged after reading the full framework and also agree with each other despite sharing no evidence pool. Then the ordering constraint is weaker than claimed.

---

## 3. Pre-registered refuter, written before the conclusion

A falsifier written before the run is a design instrument. The shape claim in section 4 is refuted if any of the following is reproduced:

1. A compressor's own compression ratio predicts the ground's preservation verdict across two independent application frames with low overlap (breaks F2).
2. A lossy transform and its inverse reproduce the source at the level the ground reads with a measured zero round-trip gap R_T, across two independent applications (breaks F1).
3. Two arrangements over the same atom set with different bond types behave identically on the ground under a declared distortion measure and two independent uses (breaks F4, the isomer test).
4. A criterion of "matters" that updates when frames push on it is still accepted as an anchor that settles the question (breaks F5).
5. A compressor derives and validates its own relevance criterion from inside its own closure and the criterion tracks the ground on cases from a different closure (breaks F6 and F7).
6. A verbatim figure line is produced that names a primitive "importance" or "matter" or fixes a universal relevance measure (breaks F8, closes the gap).

If any fires, the corresponding finding is withdrawn or revised in this file with the retraction left visible. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with F2 and F5: the compression ratio is a filter, and the criterion of mattering is fixed by the ground of the use. These are the two halves of the user's question and they are figure-licensed.
2. Put F1 after them: any preservation claim must carry its measured R_T. Never present a lossy condensation as identity (Fig 4 :30).
3. Give F4 as the structural content answer, with the isomer falsifier attached. "What matters" is carried by the arrangement, and the flat formula cannot see it.
4. Bind the relevance term (F6) and record its import (F7). Do not let an unbound preference steer an unfalsifiable claim.
5. State F8 as a `gap`. Do not name a universal distortion function.
6. Use public opt-in venues in `03_public_contact_points.csv`, ask for a refutation, and send the refuter before the framework (F9).

---

## 5. Canonical usage check, after sections 0 to 4 were written

Two local framework sources were re-read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: steps 3, 5, 6 and 7, and the mode rule. Step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* Step 7 keeps SEARCHED, INWARD and OUTWARD distinct.
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`: *"High correlation is disqualifying for a verdict and efficient for a convention."* Selecting readers for likely agreement would manufacture the disqualifying correlation.

### Retractions and confirmations, kept visible

| earlier reading | status after the canonical check |
|---|---|
| "compression is frame-internal, so compression ratios are useless" | **Narrowed.** Fig 1 :26-27 disqualifies the ratio as a verdict, and Fig 9 :60 explicitly permits filters for the budget. Both readings are kept: useful for what to try, worthless as a witness. |
| "the rate-distortion distortion measure is the anchor for what matters" | **Retracted.** On re-census a designer-chosen distortion function is a convention, and Fig 10 :47 forbids a convention from deciding an outcome. It is an import from the application frame with a source gate, not a figure output. |
| "the framework cannot name any relevance variable" | **Narrowed.** The "shape, not a name" limit governs a missing primitive. A relevance variable imported from the use frame and provenanced as such can be named; what cannot be supplied is a universal one from the figures. |
| "MDL shortest description equals what matters" | **Retracted in that form.** Shortest is relative to ℋ (Fig 6). It is a compression criterion inside a closure, not the criterion of mattering at the ground. |
| "no-direct-criterion is a defect of the compressor" | **Confirmed as a domain error.** With no bound relevance term there is no three-place residual, so the claim is below the break of Fig 3 and is a reading of nothing. |
| apparent strain Fig 1 (ground is only metric) versus D1 distortion | **Not strained after re-census.** Fig 1 governs what settles a learning agent's bets; a distortion measure is an instrument under Fig 2 :37-38. Different quantities. |
| apparent strain Fig 12 :107 (settling compresses the description, not its cost) versus MDL | **Not strained after re-census.** Fig 12 :107 prices actions spent establishing the arrangement; MDL prices description length. Fig 12 :125-126 holds them as two currencies that do not add. Both are kept. |
| gap on a universal relevance measure | **Canonically confirmed.** Fig 9 :32 and the README's "shape, not a name" both forbid supplying the member. |

### Dependency order check

Settling the relevance term comes before choosing the transform (Fig 3 and Fig 9 :27-28). Import of the criterion comes after describing the residual in effect terms (Fig 6 :30, Fig 8 :53). Refusal of an unbound preference comes before minting a new term (THE_FORMULA.md step 2). The order used in section 2 follows that order.

### Updated verdict after canonical check

The shape survives intact: compression preserves what matters only relative to a bound relevance term imported from the use frame, with a measured round-trip gap, scored at a ground that does not move, and with the arrangement carrying the information the flat description drops. The compression ratio is a budget filter, never a witness. Nothing here is `grounded`. One gap (F8) and no hidden strains; the two apparent strains were dissolved by re-census and the two retractions are recorded above rather than erased.
