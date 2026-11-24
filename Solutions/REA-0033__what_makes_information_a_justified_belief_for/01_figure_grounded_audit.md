# Figure-grounded audit: what makes information a justified belief for a machine

**Mode of this document: `general` on the structural constraints, `specified` on the machine binding, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement in this folder settles the binding, so nothing here is accepted in the ground sense.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: "the truly testable output would need to be derived from the real architecture or working the formula yourself." The canonical architecture article calls such output "simulacra" because the library behind it is unknown. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, plus the world sources listed in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual in effect terms

The observation is a machine emitting an output o with an attached confidence p. The question asks what turns "p is high" into "o is a justified belief." Stated as an effect, we are looking for the property that changes an output's standing from **self-scored** to **ground-warranted**.

The Symbols table separates the two things that get conflated here. The belief b is "Formed from its own history and from what it inherited, mixed by w. Not the observation." (Symbols table :21). The observation o' is "What actually happened." (Symbols table :31). Confidence is a number the frame attaches to b; it is not o'. The residual R is "It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read." (Symbols table :39). So the gap we must close is not "raise p"; it is "bring b into a relation with o' and with an anchor that neither b nor p can move."

Two options, and what each leads to:

- **Option A, confidence as certificate.** An output is justified iff p exceeds a threshold. This makes the verdict a quantity the frame produces about itself (Fig 1 :27) and turns a filter into a witness (Fig 9 :60). It leads to a mirror chain: self-consistency mistaken for corroboration.
- **Option B, contact as certificate.** An output is justified iff it is anchored, settled, refusable and traceable. This keeps confidence as a budget for how much search to spend, and sends the verdict to the ground, where Fig 2 :29 puts it.

An answer would look like a **shape** with four constraints (anchor, settlement, refusability, lineage) and one demotion (confidence to budget). I bind that shape as an ordinary term here so it can accrue a residual like anything else, per the formula's "Direction" section.

---

## 1. Domain census (before choosing any figure line)

### 1.1 The residual by arity, symmetry and scale

- **Arity.** Two-place between an output and its warrant, expanding to a three-place relation frame / ground / output. The Symbols table already distinguishes b from o', so the relation needs both terms.
- **Symmetry.** Justification is not a magnitude. It is an ordered relation: the ground settles, the frame ranges against it (Fig 2 :45). The comparison bond ⋛ is ordered, with the test "is it about which is larger, rather than both being present?" (Fig 12 :87). Confidence is a scalar magnitude; warrant is a directional relation. They are not on the same axis, so no threshold on the first can produce the second.
- **Scale.** Per slot. Fig 1 :19: "The residual is indexed by object slot, not aggregated." First order inside one frame, second order at the verification frame. The kernel is invariant across size: "Only the actors, the currency and the anchor change." (Fig 4 :20).

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1, the machine's generative frame (Γ) | library Γ, atoms(Γ), closure(Γ), belief b, weighting w, prediction Γ(b,a), observation o', residual R per slot | residual reduction per slot, description length | none of its own; the anchor is external | admitted, but cannot certify itself |
| D2, the verification / epistemology frame | a verifier frame, the ground, an independent second frame | triangulation, provenance, settlement, residual | the ground, which does not update | admitted, decides the verdict |
| D3, the public record / knowledge commons | peer frames, published lineage, benchmarks, evaluation practices | agreement, reproducibility, coverage claims | the ground, with a warning about substituted habitats | admitted with warning |
| X1, confidence as a self-certificate | one score | the score itself | none nameable (it moves with the frame) | **not a domain yet**, no anchor |
| X2, truth as bare correspondence | the world | truth | absorbed into D2's anchor | absorbed, not separate |

X1 is the candidate the question is asking about, and it fails the anchor test: "If it moves when you push on it, it is not an anchor." (Fig 2 :30). A confidence score that rises when the model is pushed to be more assertive is exactly that failure. No nameable anchor means it is not a domain yet, so it cannot be a mechanism of justification.

### 1.3 Partition or union

**Union, not partition.** The justified-belief status lives at the intersection of D1 (a term held with a live residual) and D2 (settlement by an anchor). D3 can contribute provenance but cannot replace D2. "And when the split lands on a union rather than a partition, unbundle before you search again." (Fig 9 :54). A single lever, raising confidence, clears the region where only D1's magnitude is at issue and leaves the intersection standing, because the anchor condition still binds. The residue is categorically different, not a harder case of the same thing.

### 1.4 Order by dependency (Fig 3)

1. **Perception.** Can the system tell what is in front of it and read R per slot? (Fig 3 :4-5)
2. **Vocabulary.** Does it have terms for what a situation affords, including a way to refuse? "having terms for what a situation offers and being able to say what would count as progress" (Fig 3 :25-26) is the link with neither obvious failure nor obvious test.
3. **Objective.** Can it say what would count as progress in its own terms? A goal is a comparison (Fig 12 :87, Operators :51).
4. **Planning.** A route to that objective under incomplete information.
5. **Learn and carry.** Settle first, then compose over what settled (Fig 12 :104).

"A link with no instrument is not a link that works. It is a link nobody has looked at." (Fig 3 :27). A machine can have confidence and a generation policy while lacking the middle link: no grammar of refusal and no stated objective. Optimising confidence lands above the break and cannot rescue it.

### 1.5 Strain test

I tried to use Fig 8 :32, "no search, however long, adds an atom", to explain why confidence does not help. That strains: confidence is a score, not a search adding an atom. Re-census resolves it. Fig 8 governs reachability under search inside a closure; Fig 1 governs quantities a frame produces about itself. Different objects, so both are kept and applied to separate findings (F1 and F5). After re-census, no strained figure line remains in the findings below.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | frame-internal quantities disqualified; ground is the only metric; residual per slot | confidence is a budget, not a witness; R must be read per slot |
| 2 The Ground | anchor must not update; alignment is triangulation; correlation valence | justification needs a non-updating anchor and independent frames |
| 3 Dependency Chain | the middle link has no instrument; reading below the break is reading nothing | refusal vocabulary and objective are the unmeasured break |
| 4 The Membrane | only methods cross up; round-trip gap must be measured | a report of confidence is a recording, not a method |
| 5 Mint Pipeline | three guards as product; acceptance is a bargain; settlement necessary not sufficient | a term must be settled before it can be composed over |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | more confidence at fixed Γ adds no atom |
| 7 Room Chain | room agreement is variation, not a verdict; mirrors do not progress | self-consistency across samples is one room, not a chain |
| 8 Union Surplus | underivable is not unknowable; convergent derivation vs adopted import | independent frames can supply what one closure cannot |
| 9 Leave / Arrive | maker-directed evidence inadmissible; union before search; filter vs witness | provenance of the maker is not evidence for the claim |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access; provenance not rightness | calibration drift is channel decay; lineage is necessary not sufficient |
| 11 The Habitat | capability is agent-and-habitat; contact-changing improvement only; test harness is substituted habitat | benchmark confidence proves wiring, never capability |
| 12 The Bond | two currencies; negation not a bond; settled molecule as atom | bits (confidence) and actions (settlement) do not add; refusal required |
| 13 Minimum Viable Set | lineage is the proof; provenance and decidability; unreachable is a verdict | the record is part of the belief, not documentation of it |
| Operators table | negation refuses a claim; refutation is a negation | a vocabulary without ¬ can only accumulate |
| Symbols table | b is not the observation; R is the aim; ground is the anchor | the three terms the question conflates are distinct |

---

## 3. Findings

### F1 - Confidence is a frame-internal score and is disqualified as a verdict (decisive)

Fig 1 :23: "The ground enters as the only metric." Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 1 :25-26 names the excluded quantities: "coverage, and compression achieved" and "predicates minted, and credibility accrued."

A confidence value is produced by the same apparatus that produces the output. By Fig 1 :27 it cannot be the metric that settles the output. Fig 9 :60 adds: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Confidence is a filter for how much search to spend, a budget. Promoting it to a witness is the named error.

**Refuter:** exhibit a machine output whose sole warrant is a score computed by a function that also emits the output, with no anchor that can move against it, and show that the output is justified. If that holds, F1 falls.

### F2 - An anchor is the decidable difference

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30: "If it moves when you push on it, it is not an anchor." Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

Justification is a relation to something that does not move when the machine revises its own state. Confidence fails this: it is a function of the frame's parameters and inputs, so it moves with the frame. An anchor for a machine claim is a measurement, an experiment, a dataset held out and actually consulted, a counter, or a second instrument, and its answer must be allowed to come back "false" when the machine is most confident.

**Refuter:** give a machine a putative anchor whose returned value changes when the machine votes differently, and show that the belief remains justified on that basis.

### F3 - Triangulation, not internal agreement

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 8 :45: "Two frames together reach what neither reaches alone." Fig 8 :50: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Sampling a model many times, or averaging several prompts over the same weights and training corpus, is one room. It can be useful as a budget estimate, but it is not a second frame. Fig 2 :42: "Buy independence in proportion to the cost of being wrong." The price of a high-stakes claim buys a frame with a different closure, not more samples of the same one.

**Refuter:** show that two checks drawing on the same weights and the same training data count as two independent witnesses for the claim, rather than one witness with two names.

### F4 - Settlement is necessary, and it is not sufficient

Fig 5 :69: "settling is necessary for a term to be composed over, and it is not sufficient." Fig 5 :70: "A term is settled when the ground pays for it. A term is usable when something can compose over it." Fig 12 :106: "Nothing composes over what was never admitted as a part." Fig 5 :42: "The acceptance test is a bargain, not a threshold." The formula's step 5 is blunter: "the ground settles it. Verified only by what pays. A gate is not the ground."

A justified belief must first have been paid for by the ground. That is necessary. It is not sufficient, because a settled term may still fail to compose, and a library that grows is not a reach that grows (Fig 5 :72). So the answer is not simply "check it once"; it is "check it, then keep the lineage that shows what may be built on it."

**Refuter:** show a term that was never settled against the ground being used as a premise in further inference with no cost charged for the missing settlement.

### F5 - More composition inside the closure supplies no warrant

Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :32: "no search, however long, adds an atom", and Fig 8 :34: "A frame cannot reach its own metaframe."

Raising confidence by chain-of-thought, ensembling over the same priors, or searching longer inside the same library changes how much of the closure is visited, not what the closure contains. It cannot manufacture the warranting relation. Fig 8 :37: "A frame cannot certify its own limit." A machine cannot certify, from inside its own confidence machinery, that this output is one it would not get wrong.

**Refuter:** exhibit a machine that acquires a genuinely new warranting primitive by increasing confidence at fixed Γ, with no new atom entering from a different frame or from the ground.

### F6 - Evidence about the maker is inadmissible to the verifier

Fig 9 :51: "evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it." Fig 10 :52: "Bring a characterised residual, never the source." Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Fig 10 :65: "Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that".

This separates two things the question tends to merge. A lineage record is required (F8), but a lineage record is evidence about how the output was made, not evidence that it is correct. Showing the verifier the full internal trace before asking for a verdict converts the verifier into a participant in the frame. Send the characterised residual and the refuter, not the whole source.

**Refuter:** show that a complete and well formed provenance record makes an output justified without any contact between the claim and the ground.

### F7 - Refusability is structural, not cosmetic

Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate." Fig 12 :140: "A vocabulary that cannot refuse can only accumulate." Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so". Fig 12 :112-113: a vocabulary without the right bonds "can say what a situation contains and cannot say what would count as getting somewhere from it."

A justified belief must be one the system can give up. ¬ is a unary operator, not one of the seven bonds (Operators :70-73), and it is what makes a correction carryable. A confidence value cannot express "this is false"; it can only express "less likely." A system that cannot negate cannot carry the correction it owes when the ground pushes back (Fig 2 :30). Fig 10 :47: "a convention that decides an outcome has stopped being one"; an unrefusable confidence label is a convention that has quietly become a verdict.

**Refuter:** show a system with no negation operator that can withdraw a held belief and record why, without silently overwriting the record.

### F8 - Two currencies: bits price the description, actions price the check

Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." Fig 12 :127: "They are in different units, so a system holding one accounting cannot compare them" and "will not notice the shortfall." Fig 12 :128-129: "Neither figure predicts the other, so both are read or the choice is made blind."

Confidence is a price in bits, a summary of how compactly the output fits the model's description. Settlement is a price in actions, the cost of actually finding out whether it holds. A system that accounts only in bits will keep producing arrangements it cannot afford to test. This is the cleanest structural statement of why high confidence is not justification: the two quantities are in different units and do not add.

**Refuter:** show that a confidence value pays the action cost of checking the claim against an anchor, so that the two accountings are the same accounting.

### F9 - The residual is per slot, never global

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :20-21: "a global residual near zero with one live slot is a legal state and not an inert one." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Symbols table :39: "what cannot be perceived yet is residual and simply cannot be read."

A high average confidence is compatible with one object slot carrying positive residual that the system cannot even see. That is a legal state, not a solved one. Justification therefore cannot be a single global score; it must be a per-slot status, with the unreadable slots marked rather than smoothed away.

**Refuter:** exhibit a machine that justifies an output while one tracked slot carries positive residual that the system neither reads nor marks as unread.

### F10 - The headline: contact, not magnitude

Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

The whole question rests on one distinction. Confidence is a property of the agent's output. Justification is a property of the output in contact with a ground. Increasing the former while leaving the latter fixed changes nothing about the latter, however impressive the number. Fig 10 :24: "the ground does not decay, the channel does." Most failures of justification are channel failures: "stale percepts, dropped transients, saturated metrics, pooled readings", for which the output is not a verdict but "you have lost touch."

**Refuter:** show a machine whose confidence rises while its contact with the ground is held fixed, and whose justificatory status for that output changes anyway.

### F11 - A benchmark is a substituted habitat

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :67-69: when the residual is moved, "what you failed to reproduce" and "what you unintentionally introduced" are invisible until the goal fails. Fig 2 :40 applies: agreement inside one benchmark pool is the pool talking.

Passing a benchmark with 99 percent confidence demonstrates the wiring of the system to that habitat. It does not demonstrate that the output would survive contact with the ground outside the harness. The evaluation venue in `03_public_contact_points.csv` is useful precisely because it is a public, independent closure, not the model's own harness.

**Refuter:** show that a synthetic solve, with no re-measurement against the original ground, transfers justification to the original residual.

### F12 - The lineage is part of the belief

Fig 13 :130: "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term." Fig 13 :132: "The first is provenance: how did this come to be, and from what." Fig 13 :141: a hard decision needs "not only what was concluded, but what could have been concluded, and what would have had to be true for the answer to differ." Fig 10 :62: "A ruling carries provenance like an atom."

This is the positive half of F6. Provenance alone does not make a belief true, but a belief without its lineage is not the same term: the record of which ground settled it, which frame supplied any import, and what would have reversed it, is constitutive. Strip the lineage and you have a bare high-confidence output. Fig 13 :134: "It cannot say which primitive is missing, because naming it would mean already holding it." The honest report is a shape with a recorded stop, not a name.

**Refuter:** strip a belief of its lineage and show that its justificatory status is unchanged.

### F13 - What survives: the defensible residue

| claim | mode | figure |
|---|---|---|
| Confidence is a budget and a filter, not a witness for the verdict | `general` | Fig 1 :27, Fig 9 :60 |
| Justification requires an anchor that does not update on the frame | `general` | Fig 2 :29-30 |
| The anchor must be reached by a frame whose closure differs, or by settlement | `general` | Fig 6 :23, Fig 12 :106 |
| The belief must be refusable and carry its lineage as part of the term | `general` | Operators :58, Fig 13 :130 |
| The discriminating variable is contact, not magnitude | `general` | Fig 11 :40 |
| Mapping this onto a machine's Γ, b, R and ground is a binding, not a derivation | `specified` | Symbols table :21, :39; Fig 9 :32 |

---

## 4. Pre-registered refuter

Required before any outreach. Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. A machine output counts as justified while its confidence is produced solely by a function that also produces the output, with no anchor that can move against it (breaks F1, F2).
2. A machine output counts as justified while the only evidence offered is the lineage of its own maker, with no ground contact (breaks F6, F12).
3. A machine output counts as justified while the system's vocabulary has no way to negate or withdraw any held term (breaks F7).
4. Calibration alone, matching confidence to observed accuracy, is sufficient for justification across a distribution shift with no new ground contact (breaks F10 with Fig 10 :24 and Fig 11 :40).
5. Two checks drawing on one evidence pool are counted as two independent witnesses (breaks F3).

If any fires, the four-part shape is wrong and I will retract it. Until one is run, no part of it may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with a theory of machine mind. The question is about a relation, not a new definition.
2. Demote confidence explicitly to a budget. Say in the first sentence that a high score is excluded by Fig 1 :27, not merely considered insufficient.
3. Require an anchor that can return "false" against the machine, an independent frame, a negation operator, and a lineage that travels with the term.
4. Treat benchmarks and self-consistency as wiring checks only (F11, F3).
5. Figure 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, the shape and the refuter, not a conclusion.
6. Use the public venues in `03_public_contact_points.csv`. Ask what a failure would look like. Do not ask for belief.

---

## 6. Canonical usage check and retraction log

Two sources read after the first five sections govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." The framework returns "what a missing thing would have to look like (a shape, not a name)" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so this is a design question decided by derivation, not by asking an anchor to rule. The seat reads the ground; it does not ask the ground's maintainer to design.

| earlier reading | status after the canonical check |
|---|---|
| "Justification is calibrated confidence" | **Retracted.** Calibration is a transform of scores inside one frame. Fig 1 :27 disqualifies any score the frame produces about itself; Fig 12 :126 puts bits and actions in different units. |
| "Machine belief is just a probability distribution" | **Narrowed.** The Symbols table defines b as "Not the observation." A probability is a content of b, not the relation between b and the ground. |
| "More samples means triangulation" | **Retracted.** Fig 2 :40 and Fig 7 :35. Same pool, more spelling, not more witness. |
| "Provenance makes a belief justified" | **Narrowed.** Fig 10 :65. Provenance shows legitimate arrival, not correctness. It is necessary but not sufficient, and it is part of the term (Fig 13 :130). |
| Apparent strain, Fig 8 idempotence vs calibration improvements | **Not strained.** Re-census: Fig 8 governs atoms and reachability; calibration re-weights scores already in the library and adds no atom. Different objects. |
| "The framework returns a name for the mechanism" | **Refused.** Canonical usage: a shape, not a name. Naming a particular algorithm is a binding from the machine-learning frame, recorded as such, not a derivation. |
| Claim that this is a ground reading | **Refused.** Simulated derivation only, checked for internal consistency. No measurement was taken. |

### WATSON three-question separation

Kept distinct, per formula step 7 and Fig 6 :48-54:

- **SEARCHED.** Is the warranting relation already in the machine's closure and merely unfound? If so, more independent search over the same Γ is the remedy, not a new primitive. Fig 8 :39: "So a search that finds nothing is never a proof of absence." Cheapest, asked first.
- **INWARD.** Extend the instrument from one already returning something: sharpen the residual reading per slot (Fig 1 :19), from a worse instrument already returning a reading (Fig 6 :32). This refines in our own terms.
- **OUTWARD.** Import: characterise the missing warrant in effect terms and find the frame whose closure predicts its shape (Fig 6 :30, Fig 8 :53). Source gate, shadow test, debited against independence.

INWARD and OUTWARD are opposed and never read against one another. Underivable-in-principle (Fig 8 :34, :37) and unreachable-at-this-budget are different facts with different instructions; importing against a budget limit adds an atom that was not needed.

---

## 7. Updated verdict

The shape survives a genuine re-census. A justified belief for a machine is not a high-confidence output; it is an output that stands in a four-part relation: settled against an anchor that cannot be moved by the frame, reached by contact with a differing closure or by ground settlement, held in a vocabulary that can refuse it, and carrying its lineage as part of the term. Confidence is demoted to a budget. Strains after re-census: **none** in the findings; the one apparent strain (Fig 8 versus calibration) was dissolved by re-census and recorded above. Mode: `general` for the shape, `specified` for the machine binding, no `grounded` claim anywhere.
