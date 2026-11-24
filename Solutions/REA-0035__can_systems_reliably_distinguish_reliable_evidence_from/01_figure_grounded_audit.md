# Figure-grounded audit: can systems reliably distinguish reliable evidence from persuasive misinformation?

**Mode of this document: `specified` on the per-domain shape verdicts, `general` on the structural unbundling, nothing `grounded`.** The mode rule is from `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19, opened 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." The canonical article's own caveat says such outputs "must be seen as simulacra." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on and measures no deployed detector.

**Figure source.** All `Fig N :line` citations are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Quotes are exact substrings of that extract, case-insensitively and ignoring trailing punctuation. World sources are secondary corroboration only and are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms before any figure is chosen

The question asks about a discrimination: an item arrives presenting as evidence, and a system emits a label that either tracks what the ground will settle or merely looks like a label that tracks it. Persuasive misinformation differs from an ordinary false claim in one crucial effect: its surface was shaped against the judging frames, so fluency, familiarity and agreement with an audience pool are properties it was *optimised to produce*. Those are exactly the quantities the figures disqualify as verdict evidence.

`R = |Γ(b,a) − o′|` per slot `s` (formula step 1). Here `s` is the individual claim, not the batch. The observation `o′` is what the ground eventually returns: a measurement, a record, a court finding, a corrected dataset, a patient outcome. `Γ(b,a)` is the detector's prediction formed from inherited priors and its own history. The residual is the gap between them, and it is indexed per claim.

**What "reliably" must mean for the answer to be checkable.** Bound it as an ordinary term before the run (formula "Direction"): *a system is reliable here iff, for each claim slot, its label ranges against an anchor that does not move when the system's frames push on it, the reading is sourced rather than merely fluent, independent low-overlap frames agree only at the ground, and the system reports its own unreached cases instead of certifying its own completeness.* This binding is what gets refuted in section 5. If it is refused, the question does not get a softer reading.

**R by arity, symmetry and scale.** Arity: the question packages at least three conditions (classify the claim, change the audience's belief, and certify the system), so it is a union, not a single predicate. Symmetry: the labels are not symmetric. A claim's provenance and its persuasiveness do not trade places; the first can bear on truth and the second is disqualified for a verdict (Fig 2 :39 to :41). Scale: the work is first order per claim, second order at the level of a detector plus its checkers, and third order when a platform habitat is included (Fig 11 :43). Aggregating across the scales is the error Fig 1 :22 names.

---

## 1. Domain census (before choosing any figure line)

One line per candidate domain: actors, currency, anchor. A domain without a nameable anchor is not yet a domain.

| domain | actors | currency | anchor | partition or union | status |
|---|---|---|---|---|---|
| D1. Claim verification | the claim, the detector, the ground record | `R` per slot, cost of a correction in actions and bits | the ground: a measurement, record, counter, or experiment that does not update on what frames think | partition boundary: does this composition cross from claim to ground? | domain, anchor nameable |
| D2. Audience belief and correction | the audience, the message, the platform, the corrector | agreement, attention, credibility accrued, reaction | for "is this a good answer for a person", human judgment is legitimate (Fig 2 :36 to :38); for a truth question it is only an instrument, and it is an instrument inside the pool being tested | union with D1: a correct label that never lands is a compound case, not a harder D1 case | domain, but its internal anchor is contestable and must be stated per use |
| D3. Self-certification | the detector, its designers, its auditors | residuals, confidence, number of claims cleared | none internal. The ground is external and unreachable from the frame's own certificate | union with D1 and D2: it is the loop that would have to certify the other two | domain only as a question about the absence of an anchor, which is itself a verdict |
| D4. Habitat / supply side | feed ranking, repeaters, aerosols, fact-checkers, platforms | contact, introduction, cascade | the ground still, but reached at two or more steps out (Fig 11 :52 to :54) | union with D2: the audience's pool is authored by a habitat nobody enumerated | domain, anchor nameable but contact decays |

**Not a domain:** "the information ecosystem" alone. It has actors and currency but no anchor that does not update; it is a habitat (Fig 11 :10 to :16), which is where actors come from, not what settles. Naming it as a domain would be the mutual-update collapse the figures forbid.

**Order by dependency (Fig 3).** Settlement of the claim (D1) precedes any claim about delivery (D2), because a correction that is not grounded has nothing to deliver. Refusal before mint (formula step 2): a system must be able to say "this is not resolvable with what I hold" before it mints a reliability score. The habitat (D4) is upstream of D2 as a cause but downstream as an object of study, so it gets its own loop after D1 and D2 are separated. Self-certification (D3) is last and is answered by the absence of an internal anchor, not by a measurement.

**Strain test applied during the census.** My first pass treated "misinformation detection" as D1 plus a accuracy metric. That reading strained against Fig 1 :19 and :28 (residual per slot, never aggregated), against Fig 2 :40 (agreement in a shared pool disqualified) and against Fig 9 :54 (union, not partition). A reading that needs those three strains is governing a different quantity. Re-census produced the four domains above. The earlier one-domain reading is retained here as a visible correction, not erased.

---

## 2. Figure census (bearing and verdict, before conclusions)

| figure | bearing on this residual | verdict it can support |
|---|---|---|
| **1 The Agent** | ground is the only metric; residual per object slot; frame-internal quantities disqualified | per-slot verdict only; aggregate accuracy and credibility are not witnesses |
| **2 The Ground** | anchor must not update; independence is how little frames share; correlation has valence | engagement and audience agreement cannot decide reliability; two instruments, not two readers |
| **3 Dependency Chain** | a link with no instrument is not a link that works | ask which link a detector stops at before asking whether it is good |
| **4 The Membrane** | methods cross up, recordings do not; round trip has a measurable gap | a blacklist is a recording; its transfer has an `R_T` that must be measured |
| **5 Mint Pipeline** | guards are a product; settled is not composable; output is not success | a detector's own confidence is not a measure of success; more debunks can mean a larger library, not a larger reach |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse instruments already returning something | detection of a novel fabrication requires an outside instrument, not more internal search |
| **7 Room Chain** | agreement compounds, evidence does not | a crowd of agreeing readers is one long room |
| **8 Union Surplus** | no search adds an atom; a frame cannot certify its own limit; a search finding nothing is not proof of absence | unconditional self-certified reliability is foreclosed; absence of detection is not evidence of absence |
| **9 Leave / Arrive** | split before search; describe the residual before choosing a frame; filters are not witnesses | the question must be unbundled; low-overlap frames are looked up by the residual's shape |
| **10 Ground Maintainer** | the ground does not decay, the channel does; verifier non-access; conventions that decide outcomes | the failure mode is a dead channel, not an updated ground; do not show the detector's interiors to the checker |
| **11 The Habitat** | capability is agent-and-habitat; enumerate, never compose; contact cascades | a detector's reliability is a property of detector-and-habitat, not of the model alone |
| **12 The Bond** | arrangement carries meaning; two currencies that do not add | two detectors with the same components can be inverses; bits and actions must be held apart |
| **13 Minimum Viable Set** | a frame can characterise what is missing but cannot name the primitive; unreachable is a verdict | report shape and unreached cases, not a fabricated complete taxonomy |
| **Operators table** | negation is a unary operator, not a bond; a vocabulary without it can only accumulate | a detector that cannot refuse has no way to carry a correction |
| **Symbols table** | `R` is per slot; the ground is the anchor | the only admissible metric is per-slot range against the ground |

---

## 3. Findings, with verbatim figure lines and a refuter for each

### F1 - The question is a union compound and must be split before it is searched (decisive, `general`)

Fig 9 :4: **"Split it rather than search."** Fig 9 :54: **"when the split lands on a union rather than a partition, unbundle before you search again"**. Fig 9 :55: **"A single lever clears the region where only one condition holds and leaves the intersections standing"**. Fig 9 :57: **"a case in two conditions is not a harder case of either"**.

A better classifier clears the D1 region. It does not clear the intersection where a correct label exists but the audience still believes the claim, nor the intersection where a platform habitat keeps resurfacing a corrected item. Those are specific compounds, not harder versions of the same task. A single "accuracy" number across them is the blend failure of Fig 8, not a result.

**Refuter:** show that all four domains are actually one predicate over one anchor, so that a single lever moves every slot including the self-certification slot. Under Fig 9 :54 to :58 that would require the conditions to be a partition, which the census above denies. If a reader demonstrates that, the split is wrong and the rest of this audit must be redone.

### F2 - The only admissible metric is per-slot range against the ground (`specified`)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :23: **"The ground enters as the only metric."** Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

A system can be 99 percent accurate on a benchmark and still have one live slot where a correction never landed. Fig 1 :13 permits that state: **"a global R near zero with one live slot residual is a legal state"**. Harm from misinformation is concentrated in exactly those live slots, the ones where a specific false claim changed a specific decision. The benchmark average is a filter for where to spend budget, not a witness for reliability (Fig 9 :60).

**Refuter:** provide a decision rule under which a global accuracy figure settles a live slot without ever measuring that slot. None is supplied by the figures; if one is produced from outside them, it is an import and needs a source gate.

### F3 - Frame-internal scores are disqualified (`specified`)

Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** Fig 5 :48: **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."** Formula step 5: "A gate is not the ground."

A detector's confidence score, its count of items flagged, its citation count, the number of corrections it issued and the engagement its corrections received are all produced by the frame that would be graded by them. FEVEROUS (Aly et al., 2021) names the exact failure from the engineering side: biases in the dataset "could be exploited by models, e.g. being able to predict the label without using evidence." FEVER (Thorne et al., 2018) reports that ignoring the evidence gave *higher* accuracy than using it (50.91 percent against 31.87 percent). A detector can score well by exploiting the shortcut the scorer built in.

**Refuter:** show that a quantity produced by the detector can be used to score the detector without circularity. Gating on it would be the named failure. This finding is triangulated: Fig 1 plus Fig 5 for the framework, FEVER and FEVEROUS for the engineering pool (low overlap between the two).

### F4 - Engagement and audience agreement are disqualifying for a verdict (`specified`)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :33: **"The anchor must not update."** Fig 2 :34: **"the drift is coherent, which is why nobody notices"**. Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**. Fig 2 :41: **"agreement about a shared meaning is the product, not a corruption of it"**. Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**

Shares, likes, trending position and "many people believe it" are measurements of the audience pool. Using them as evidence of reliability makes the anchor update on what frames think: Fig 2 :34 names the result. A crowd of readers all exposed to the same feed is one frame wearing many names; Fig 7 :13: **"agreement compounds, evidence does not"**. Two readers of the same report are not two frames; Fig 2 :31: **"Two people reading the same report are not two frames; two instruments pointed at the same thing are."**

Note the valence carefully: agreement is *efficient for a convention*. If the question were "does this correction read as fair to this community," the audience would be the legitimate anchor, because the question would be constitutively about people (Fig 2 :36 to :38). It is not the question asked here.

**Refuter:** exhibit a case where virality is constitutively the ground for whether a claim is true. Since a claim's truth does not change when a frame pushes on it (Fig 2 :29), this would require redefining truth as audience state, which is a different question.

### F5 - A reading of the claim cannot comment on its source (`specified`)

Fig 6 :30: **"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."** Fig 9 :30: **"your words are borrowed too, so describe the effect rather than the cause"**. Fig 10 :24: **"the ground does not decay, the channel does"**. Fig 10 :25: **"stale percepts, dropped transients"**.

The surface of a claim is a projection. Several sources can produce the same reading, which is the metamerism argument in *The Hard Problem is About Source* (Isaiah N, 2026-08-28): "If several paths create the same behavior, then behavior is a projection with lossy information" and "An instrument that can't distinguish these cases demonstrates its own inadequacy." A text-only detector reads the projection and names a source it did not measure. Persuasive misinformation exploits precisely this: it manufactures the reading without the lineage. The C2PA Guiding Principles (2025) make the engineering distinction explicit: a provenance standard "SHOULD NOT provide value judgments about whether a given set of provenance data is 'good' or 'bad,' merely whether the assertions included within can be verified as associated with the underlying asset, correctly formed, and free from tampering." Provenance supplies a chain, not a verdict (formula step 5).

**Refuter:** exhibit a surface feature of a claim that uniquely determines its source across all possible producers of that surface. The source essay's spectrometer case shows why a feature can fail this; a positive example would need a new instrument, and would be an import under F7.

### F6 - A system cannot certify its own reliability (`general`, strong limit)

Fig 8 :32: **"no search, however long, adds an atom"**. Fig 8 :37: **"A frame cannot certify its own limit."** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room."** Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

"Reliably" cannot mean *certified complete from inside*. A detector cannot prove that it has found every persuasive item in the ecosystem it is embedded in, because a search that returns nothing is not proof of absence and a frame cannot certify its own limit. Fig 8 gives the reasons as proved theorems (Godel, Tarski, Chaitin) and separates underivable-in-principle from unreachable-at-this-budget. This is the strongest `no` in the solution and it is a categorical limit, not a performance observation.

**Refuter:** produce a proof, from inside the detector's own closure, that the closure contains every item of the relevant kind. Fig 8 :37 says this is not available; a candidate proof is checkable against that line and would break the framework if sound.

### F7 - New detection comes from an imported instrument, not from more internal search (`specified`)

Fig 6 :14: **"the only operator that moves the wall"**. Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** Fig 8 :53: **"Residual first, frame second."** Fig 9 :27: **"describe it before you go looking, or any frame you pick will seem to fit"**. Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

When a novel fabrication appears (a new generation format, a new rhetorical template), a detector whose vocabulary has no term for it cannot mint that term from the inside, because closure is idempotent (Fig 8 :32). What can move the wall is an import with a source gate and a shadow test: provenance chains, cryptographic signatures, retraction records, a second sensorium. INWARD and OUTWARD are opposed and must not be read against each other (formula step 7). INWARD: sharpen an instrument already returning a partial signal. OUTWARD: characterise the residual in effect terms and find the frame whose closure predicts its shape.

**Refuter:** show a detector acquiring a genuinely new discriminative primitive by composition alone, with the lineage demonstrating the primitive was not already in `atoms(Γ)`. That would break Fig 6 :21 and Fig 8 :32.

### F8 - A blacklist is a recording, not a generator (`specified`)

Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."** Fig 5 :71: **"a library that grows is not a reach that grows"**. Fig 4 :22: **"Only methods cross up. Only head starts come down."**

A list of known false claims is a recording of occasions. It can be replayed downward to catch the same claims and cannot generate a catch for the next variant. What crosses upward is the method for discriminating source from surface, compressed to its essentials. The MDL framing in Fig 5 and the "outputs are not generators" argument in *They're Scanning Books When They Should Be Studying Nature* (Isaiah N, 2026-09-06) agree: "A pile of human reasoning's outputs is not an engine."

**Refuter:** exhibit a library of labelled instances that generates detection of a novel fabrication type with no change of instrument and no import, and show from the lineage that the new type was not in the atoms. Absent that, a growing corpus is a growing denominator.

### F9 - Settling is necessary and not sufficient; corrections do not travel for free (`specified`)

Fig 5 :70: **"A term is settled when the ground pays for it. A term is usable when something can compose over it."** Fig 12 :107: **"Settling compresses the description and not what it cost to establish."** Fig 10 :47: **"a convention that decides an outcome has stopped being one"**.

A debunk that settles one claim on one platform may not compose over on another platform, because the record may not cross that boundary; the deriving cost is paid again by every lineage. The world literature corroborates from a different pool: Schüler, Blinova and Frick (2026, *Psychological Research*) found that adding illustrations to updated information "did not prevent outdated or false information from being mentally activated during reading," and Zhou et al. (2026, *Frontiers in Psychology*) note that "fact-checking has been shown to have positive effects, scholars also note that it cannot fully eliminate the impact of fake news." Fig 10 :49: **"Declaring a meaning does not ground it."** A label saying "false" is a convention until something can be violated by the ground.

**Refuter:** show a correction whose settled status composes across a boundary that drops its record, with a measured residual of zero on the new platform. The round trip in Fig 4 :30 requires measuring the gap rather than assuming it: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

### F10 - Independence is bought, not assumed (`specified`)

Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."** Fig 8 :50: **"shared atoms are not the signature"**. Fig 8 :51: **"Convergent derivation and adopted import look identical in the contents."** Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**

Two fact-checking teams reading the same wire service are one witness. Two instruments pointed at the same claim, one reading provenance and one reading outcomes, may be independent. The source ledger records overlap for exactly this reason. Agreement at low overlap is corroboration at maximum independence; agreement at high overlap is the pool talking. Note the trap: selecting checkers for likely agreement manufactures the correlation that disqualifies their agreement.

**Refuter:** produce a case where two frames drawing on the same evidence carry two independent verdicts. Under Fig 2 :31 and Fig 8 :48 they carry one verdict under two names.

### F11 - The verifier must not hold the interiors (`specified`)

Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."** Fig 10 :52: **"Bring a characterised residual, never the source."** Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"**.

A checker shown the detector's architecture, training corpus and confidence rule can no longer tell whether the detector is right or whether it matches the picture the checker built. This governs the outreach artifacts: the first contact carries the residual and the refuter, and the theory follows only if the recipient asks. It also governs how the internal auditor seat may read this folder.

**Refuter:** show a verifier that reconstructs the claim and still produces an independent verdict. The seat map's soundness law says soundness comes from the verifier's non-access, not despite it.

---

## 4. The three route questions when no term closes the residual

Formula step 7 asks SEARCHED first, then INWARD, then OUTWARD, and warns that underivable-in-principle and unreachable-at-this-budget are different facts.

1. **SEARCHED. Is it in here and unfound?** For a fixed corpus of known false claims, yes: more search at the same reach can find missed instances. The remedy is more search with independent searchers, not a new primitive (Fig 6 :49 to :50). This is the part of misinformation detection where scale legitimately helps.
2. **INWARD. Is the representation adequate to hold it?** For a claim whose falsity depends on an instrument that is not returning anything yet, sharpen an instrument already returning a partial reading: metadata, retraction records, timestamped source chains. Where nothing is returning, there is no edge to extend from (Fig 6 :34).
3. **OUTWARD. Does another frame already hold it?** For a novel fabrication whose shape is characterised in effect terms, find the frame whose closure predicts that shape. Import with source gate, shadow test and a debit against independence (Fig 6 :12 to :13, :24).

These remain distinct. Reading INWARD as a substitute for OUTWARD imports a wrong atom against a budget limit and costs more than starting from primitives.

---

## 5. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim in section 0 is refused if any of the following holds:

1. **Per-slot failure.** A system whose every slot ranges against a non-updating anchor, whose readings are sourced, and whose checkers are low-overlap, still fails on a held-out live slot at a rate above the pre-declared threshold. This breaks the D1 verdict.
2. **Instrument futility.** A source-discriminating instrument that resolves provenance is introduced and detection does not improve on held-out novel fabrications. This breaks F7 and the import route.
3. **Self-certification possible.** A proof is produced, from inside a frame's own closure, that the frame has detected every relevant item in its habitat. This breaks Fig 8 :37 and F6.
4. **Correction composes across a dropped record.** A correction settles on one platform and composes over on another that did not receive its record, with a measured round-trip gap of zero. This breaks Fig 12 :107 and F9.
5. **Agreement as verdict.** A decision rule is demonstrated under which agreement among frames sharing one evidence pool counts as corroboration for a claim about the world. This breaks Fig 2 :40 and F4.

Until one is run, no part of this answer may be labelled `grounded`. An unreached case is recorded as unreachable-or-unreached, not converted into a silence.

---

## 6. Recommendation

1. Unbundle before building or evaluating. Report a verdict for claim classification, for correction landing, for habitat contact and for self-certification separately (F1). Never average them.
2. Publish per-slot residuals against a named anchor that does not update. Keep the benchmark average as a budget filter only (F2, Fig 9 :60).
3. Disqualify confidence, virality, counts of debunks and engagement from the verdict column. Put them in a contact or cost column with `verdict_weight = 0` (F3, F4).
4. Invest in source-discriminating instruments and provenance imports, with source gate and shadow test recorded, rather than in a larger surface-feature model (F5, F7, F8).
5. Measure the round-trip gap for every correction that crosses a platform boundary (F9, Fig 4 :30).
6. Select checkers from the residual's shape, then buy independence; never select for likely agreement (F10, Fig 9 :27).
7. Ask outside checkers what would refute the shape claim before showing them the framework (F11).
8. State that unreachable is a verdict: *"Unreachable is a verdict here, not a silence"* (Fig 13 :134).

---

## 7. Canonical usage check (figures README and the eight essays, opened 2026-11-23)

- `figures/README.md`, branch `general-agent`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them" and "a reading that makes one contradict another has misidentified its domain, not found a flaw." It also gives the limit: "what a missing thing would have to look like (a shape, not a name)" and "Indiscernibility is not identity."
- *The Hard Problem is About Source*: "An instrument that can't distinguish these cases demonstrates its own inadequacy." This is read as governing F5, not as a claim that no instrument can ever discriminate.
- *Decoding Tacit Knowledge*: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." This governs the outreach order in `02_outreach_email.md`.
- *The Library of Babel*: "This means that you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." It also says a bundle "masquerading as one" must be searched as several problems, which corroborates F1 from a low-overlap narrating source.
- *They're Scanning Books When They Should Be Studying Nature*: "a minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six." This forbids presenting any detector's feature vocabulary as neutral.
- *How a Society of Agents Would Work*: "a group is only worth having while its members stay different" and "The group's agreement is never the verdict." Corroborates F10 and F4.

### Retraction and confirmation log (kept visible)

| earlier reading in this derivation | status after the canonical check |
|---|---|
| "Misinformation detection is impossible under the figures" | **Retracted.** The figures foreclose self-certification and agreement-based reliability. They do not foreclose per-slot reliability against a live ground with an imported instrument. The first formulation over-reached by merging D1 and D3. |
| "Provenance settles whether evidence is reliable" | **Retracted.** C2PA explicitly refuses value judgments about provenance data, and formula step 5 says a gate is not the ground. Provenance is an import with a source gate, not a verdict. |
| "Aggregate accuracy is meaningless" | **Narrowed.** It is disqualified as a witness for a live slot (Fig 1 :27), but it remains usable as a filter for budget (Fig 9 :60). Calling it meaningless would erase the distinction the figures draw. |
| "The audience is not an anchor, so audience questions are invalid" | **Narrowed.** Fig 2 :36 to :38 makes human judgment the legitimate anchor when the question is constitutively about people. The correction-delivery domain D2 has a legitimate human anchor for questions about goodness-for-person; it is not an anchor for D1 truth questions. |
| "The information ecosystem is a domain" | **Retracted at census.** It is a habitat (Fig 11), where actors come from, not what settles. Kept as D4 with the ground as its anchor. |
| F1 union reading | **Canonically confirmed.** The figures README requires re-census rather than forcing a contradiction, and *Library of Babel* names the bundle explicitly. |
| F6 self-certification limit | **Canonically confirmed.** The framework's own article says a metatheory "cannot be validated, nor can it validate itself," and cites Godel, Tarski and Chaitin on Figure 8. |
| Apparent strain Fig 1 :23 (ground is the only metric) vs Fig 2 :36 (human judgment as anchor) | **Not strained after re-census.** Fig 1 governs the detection frame; Fig 2 :36 governs questions constitutively about people. Different objects, so no re-census strain remains. |

### Round-trip note

The shorthand carried into `07_the_tether_answer.md` and `09_watson_answer.md` is a lossy condensation of the figures. Its `R_T` is enumerated qualitatively in `11_audit.md`; the main constraints it drops are the operand type of an import's shadow test, the direction of refusal before mint, and the distinction between a budget filter and a verdict witness. Treating the shorthand as identical to the figures would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names.
