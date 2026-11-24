# Figure-grounded audit: COG-0022, concepts, language, and nonlinguistic acquisition

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). For this question:

- **b** is the learner's belief about what falls under a concept, formed from private history and inherited prior, mixed by w. Symbols table :24: *"How far the belief leans on private history versus inherited prior"*.
- **a** is the learning act: perceiving, attending, imitating, being corrected by the world, hearing a label or a generic.
- **Γ(b,a)** is what the learner's current library predicts about the concept: which instances belong, what follows from membership, what would count as a correct use.
- **o'** is what the habitat and ground actually return: the result of acting on the concept, a correction, a prediction that pays or fails.
- **s** is the concept. R is indexed by concept and by learner, never averaged into "how much language helps cognition".

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon: for some concept slots a learner with only nonlinguistic contact drives R down; for others R stays high until a term, a count list, a grammar, or a generic arrives from another frame. The question asks where that line falls.

State the residual as: *why does the gap between what a learner's library predicts about a concept and what the habitat returns stay small under nonlinguistic contact for some slots, and remain large until a linguistic import arrives for others?* This is an effect description. It names no theory, no "innate idea", no "Whorfian effect". Those are candidate names withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a condition of the form *language is required iff acquiring the concept needs a bond or an atom the learner's nonlinguistic Γ does not hold and no differing closure is in contact*, plus an instrument that discriminates an absent-bond failure from an absent-contact failure. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Here the anchor is a behavioral or neuroscientific measurement per concept slot: can the learner discriminate, infer, and act on the concept under nonverbal conditions? Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Agreement among speakers about which words exist moves when you push on convention; it is not the anchor.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation between a learner's library Γ, a learning act a, a concept slot s, and the ground return o'. It is a sequence (learning over time, `→` sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a comparison for "has the concept" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: the learner and the habitat are not interchangeable.
- **Symmetry.** "Difficult without language" is asymmetric. Adding a label can lower R for a slot; removing it raises R. The move is not reversible by simply reversing the act, because the imported term remains as a head start (Fig 4 :22).
- **Scale.** Three scales are in view: the single learner's loop (Fig 4 one-agent panel), the population of learners sharing a language (Fig 4 :5, *"many agents, a shared library, and something that ranks what they produce"*), and the transmission channel across generations. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and the transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Nonlinguistic ground contact** | the habitat, objects and events, the learner's sensorimotor system, core knowledge | residual reduction through contact and correction | yes: what the world returns, "the ground does not decay, the channel does" (Fig 10 :24) | admitted |
| **D2 The learner's composition library** | atoms (percepts, core representations) and bonds | reach, |φ| cost, the MDL bargain | yes: settlement, "then check it against the ground, then carry it up" (Fig 5 :32) | admitted |
| **D3 Language as import from a differing closure** | speakers, labels, generics, grammars, count lists | atoms and bonds crossing a boundary, source gate, shadow test | yes: the ground still settles; the importing frame's own agreement is not an anchor (Fig 2 :40) | admitted |
| **D4 The transmission habitat** | teachers, learners, corrections, practices, institutions | head starts, methods, contact | yes: demonstrated capability, "capability is a property of agent-and-habitat" (Fig 11 :39) | admitted |
| **X1 A concept determined solely by a word with no ground contact** | the word | convention | **no** independent ground anchor; a convention that decides an outcome has stopped being one (Fig 10 :47) | refused before figure lines |
| **X2 "Language in general" as one cause** | language | influence | already decomposed into D3 and D4, which are different loops | absorbed, not separate |

X1 fails the anchor test and is refused before any figure line is applied to it. This is a structural refusal, not a claim that words never matter. X2 is absorbed because import and transmission are different loops with different instruments.

### 1.3 Partition or union

D1 and D2 overlap: perceptual contact builds the library, so their overlap is a compound with its own loop. D3 and D4 overlap: language is transmitted inside a habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **C1**, does the concept's composition fit bonds and atoms the learner's nonlinguistic Γ already holds? **C2**, is the learner in contact with a differing closure that supplies what is missing? A learner failing only C1 and a learner failing only C2 are not different degrees of one failure; they need different instruments. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :25-26)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the learner register the instances?) → 2 vocabulary (does Γ have terms for what things afford? Fig 3 :7) → 3 objective (can the learner say what counts as having the concept?) → 4 planning → 5 learn and carry. Language bears chiefly on links 2 and 3, exactly the middle link that has the fewest instruments. Fig 12 :113: *"A system holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it."* This is why the middle link is where the question breaks, and why most debate lands above the break where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which concepts are hard |
| 2 The Ground | measurement is the anchor; convention versus verdict; independence | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; fewest instruments | governs why vocabulary and objective are the locus |
| 4 The Membrane | kernel constant across sizes; head starts, not recordings | governs transmission (D4) and the round trip |
| 5 Mint Pipeline | three guards as product; settlement; MDL bargain | governs when a concept term can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs D3, the language-as-import domain |
| 7 Room Chain | same closure handed along; agreement is not evidence | governs the "many speakers agree" non-argument |
| 8 Union Surplus | idempotent closure; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union versus partition; describe residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; conventions | governs the refusal of word-determined concepts |
| 11 The Habitat | capability is agent-and-habitat; habitat enumerated, never composed | decisive for D1 |
| 12 The Bond | vocabulary without bonds cannot name a route; isomer, functional group, recursion | decisive for D2 and the shape of the boundary |
| 13 Minimum Viable Set | substrate shared and closed; arrangements are not; unreachable is a verdict | governs the universal foundation and the honest stop |
| Operators table | negation is the unary operator a vocabulary needs to refuse | bears on second-order and truth concepts |
| Symbols table | b and w mix private history and inherited prior; R is always a slice | governs the learner's starting state and what is residual |

Strain test applied during this census: an early attempt to read Fig 13's six physical terms directly as "the concepts" only fit by calling Space a spatial concept and Spectrum a color concept, which is a strain. Fig 13 does **not** name psychological concepts. Re-census sent it to the universal-substrate and honest-stop roles only (section 7, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about concept acquisition, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The line is a bond-and-atom condition, not a list of concepts (decisive)

**Mode: `general` structural, `specified` as prediction. Domains D2, D3. Status: triangulated (Fig 12 and Fig 6, low overlap: composition grammar versus closure boundary).**

> **"A vocabulary without bonds can name a state and cannot name a route to one."** (Fig 12 :111)
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."** (Fig 12 :112)
> **"having terms for what a situation affords was taken for a dictionary and it is a grammar."** (Fig 12 :115)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."** (Fig 6 :22)

Language's distinctive contribution is not a list of labels but the bond vocabulary, the grammar that lets a learner state a route, a goal, a comparison, and a refusal. Fig 12 :94: *"The arrangement is the substance."* A concept is hard without a particular language when acquiring it requires composing a bond the learner's nonlinguistic Γ does not hold, or importing an atom that is absent from it. A concept whose atoms and bonds are already supplied by perceptual contact is acquirable nonlinguistically.

The count list is the clean instance. Exact integer is not a percept; it is a sequence of discrete symbols plus a comparison of quantities (Fig 12 :72, :87). The approximate magnitude it builds on is an ordering already held. So "exact number" sits on the language-leaning side and "approximate number" on the nonlinguistic side for a structural reason, not because someone listed them.

**Refuter:** exhibit a concept that requires a bond absent from a learner's nonlinguistic library yet is acquired nonlinguistically at the same rate and with the same transfer as one using held bonds; or show a concept composed only of held atoms and bonds that stays inaccessible without language after adequate contact. Either breaks the bond condition.

### F2: The universal foundation is nonlinguistic because capability is agent-and-habitat

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat versus membrane).**

> **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."** (Fig 11 :36)
> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

Core categories, object continuity, approximate quantity, and regularities in the habitat are available through contact alone because the habitat supplies them and the loop runs without a maintainer (Fig 11 panel 1). Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."* This is the universal component that a strong language-determinism thesis must explain away and that the figures refuse to give up: same kernel at every size, only actors, currency, and anchor change.

World bearing (secondary only). Pica, Lemer, Izard and Dehaene 2004 report of the Mundurukú: *"Although the Mundurukú lack words for numbers beyond 5, they are able to compare and add large approximate numbers that are far beyond their naming range."* Spelke and Kinzler 2009 write that *"the process by which we add symbolic numbers draws crucially on a nonsymbolic numerical ability that monkeys, pigeons, and newly hatched chicks share"*. Gelman and Roberts 2017 state that *"human language is a technology that enhances and expands the categorization capacities that we share with other animals."* Three pools (Amazonian field study, developmental core-knowledge review, developmental category review) agree on the shape, but the last two share a framework-adjacent developmental literature; counted as two witnesses at most, not three.

**Refuter:** a core capacity (object permanence, approximate number, causal regularity) that fails under adequate nonverbal habitat contact and appears only after labeling in independently run designs. That breaks F2 and the universal foundation with it.

### F3: Exact number is the discriminator case

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 12 sequence/comparison bonds and Fig 6 import, low overlap).**

Pica et al. 2004: *"However, they fail in exact arithmetic with numbers larger than 4 or 5. Our results imply a distinction between a nonverbal system of number approximation and a language-based counting system for exact number and arithmetic."* Gelman and Roberts 2017: *"language provides cognitive tools that aid with recall, transmission, and manipulation of concepts that otherwise can be difficult to hold in mind. For example, number words help speakers of a language, such as English or Turkish, remember and communicate exact cardinalities of sets; speakers of a language without number words (such as Pirahã) perform poorly on numerical reasoning tasks that tap into these processes"*.

Figure reading: the count list is an imported atom set bound by `→` sequence and `⋛` comparison (Fig 12 :72, :87), a closure-expanding import from a differing frame (Fig 6 :23). Approximate magnitude is a spectrum ordering already available to perception (Fig 13 :37). The same substrate, different bonds. Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* The two number systems are not one capacity with a label added; over the shared substrate they are differently bonded arrangements.

**Refuter:** a culture with no count list performing exact arithmetic beyond five reliably under controls, or a nonlinguistic animal doing so. Either collapses the distinction and breaks F3.

### F4: Reflective and second-order concepts lean on language

**Mode: `specified`. Domain D2. Status: triangulated (Fig 12 recursion and the Operators table negation entry, distinct roles).**

> **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"** (Fig 12 :104)
> **"a refutation is a negation, which is why a vocabulary without it can only accumulate"** (Operators table :58)
> **"Without a unary operator a system can write what a situation contains, what follows what, and how far along it is"** (Fig 12 :139)

Parellada 2021, reporting Davidson and Bermúdez: *"language would not be required for direct belief and concept possession, but it would for beliefs about beliefs"*. The same paper reports that vervet monkeys meet Allen's first-order criteria (discriminate predators, detect their own errors, correct without new percepts) but *"are unaware of conspecifics' beliefs"*. The figure reading: first-order composition is available to a nonlinguistic frame; second-order composition requires the first-order term to be settled and promoted to atom (Fig 12 :104), plus the unary operator that can say a held claim is false (Operators table :58). A vocabulary that can only accumulate cannot carry a correction.

This is a structural prediction, not an appeal to the philosophical literature: the world source is secondary corroboration. Mode `specified`, because whether the negation/reflection operator is available to a nonlinguistic frame is a ground question, and no instrument in this folder reads it.

**Refuter:** a nonlinguistic subject that reliably distinguishes true from false belief, or asserts the falsity of a held claim, under a design that excludes associative cues and experimenter cueing. That breaks F4.

### F5: Language is a conditional cue, not a determinant (strong Whorf refused structurally)

**Mode: `specified` for the conditional prediction, `general` for the structural refusal. Domains D3, D4. Status: triangulated (Fig 10 convention rule and Fig 2 anchor geometry, low overlap).**

> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)

Strong determinism, the claim that a word fixes what a speaker can conceive, is refused before any experiment: a convention that decides the outcome has stopped being a convention and has become an authored constant (Fig 10 :47). What survives is the conditional claim. Cibelli, Xu, Austerweil, Griffiths and Regier 2016: *"language-specific effects on memory can emerge from a largely universal substrate when one critical component of that substrate is language-specific: the category distribution."* And: *"the apparent effect of language on color cognition disappears when participants are given a verbal (but not a visual) interference task"*. The effect is on-line, bias-like, strongest under uncertainty, and removable; it is not a new capacity created by the word. The same paper: *"taking Whorf seriously need not entail a wholesale rejection of important universal components of human cognition."*

**Refuter:** a case in which a label deterministically changes nonlinguistic categorization under high perceptual certainty, with two independent evidence pools and no shared category training. That breaks the conditional reading in favour of determination.

### F6: The specific list of concepts is a gap, not a hidden answer

**Mode: `general` for the limit. Status: figure-governed.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence"** (Fig 13 :134)
> **"It cannot say which primitive is missing, because naming it would mean already holding it."** (Fig 13 :135)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

The canonical README: *"what a missing thing would have to look like (a shape, not a name)."* No figure line enumerates psychological concepts. The framework returns the boundary condition: a concept needs language when a required bond or atom is absent from the nonlinguistic closure and no differing closure is in contact. Naming which specific concepts those are needs a source-discriminating instrument (per slot, per population), not more derivation. The honest reading is `unreached`, not `unreachable in principle`, and not silence.

**Refuter:** a figure-derived enumeration of concept names, or a single global percentage of "language-determined concepts". Producing either would break the shape-not-a-name rule and the per-slot indexing rule at once.

### F7: Never average across concepts, and unbundle before choosing a lever

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A result of the form "language influences X percent of concepts" scores the frame with a quantity the frame produces and aggregates away the slot that says where to look. The two conditions have different instruments: a C1 failure shows up as an absent bond in the learner's nonlinguistic composition; a C2 failure shows up as no contact with a closure that holds the atom (Fig 6 :23). A single lever, for example "add more labels", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55).

**Refuter:** a single intervention that restores both conditions in both failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F8: Teaching is a head start, not a transfer of capability

**Mode: `specified`. Domain D4. Status: triangulated (Fig 4 membrane and the tacit-knowledge essay, distinct strata).**

> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"upward: a method that can be reapplied. Never the recording of a particular success."** (Fig 4 :23)
> **"A recording carried upward looks like knowledge and is a description of one occasion."** (Fig 4 :25)

The tacit-knowledge essay puts the learner's side: *"We can know more than we can tell"*, and *"Writing carries the context well and the subtext partly, but it almost never carries the pretext, the 'you had to be there' part."* Language hands the next learner a head start that makes the search cheaper; it does not hand over the contact that built the concept. So even for language-using humans, "acquired through nonlinguistic experience" is not optional: the learner must rebuild the contact (Fig 11 :40). Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

**Refuter:** a verbal instruction alone, with zero corrective contact, producing a grounded capability indistinguishable from one built through practice. That breaks the head-start reading.

### F9: The anchor is measurement, not agreement among speakers

**Mode: `general`. Status: figure-governed.**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"Frames range against the ground. They do not negotiate with it."** (Fig 2 :45)
> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)

A poll of linguists about which concepts their language names is efficient for a convention and disqualifying for a verdict (Fig 2 :40, :41). The ground is the behavioral result per slot. Because this simulated second seat shares the primary's evidence pool, its agreement is one pool talking, not corroboration.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per concept slot, never a global average | general | Fig 1 :19, :22 | figure-derived |
| The split is a union of bond-fit and closure-contact | general | Fig 9 :54, :55, :57 | figure-derived |
| Language contributes bonds and a grammar, not just labels | general / specified | Fig 12 :111, :112, :115 | triangulated F1 |
| Core and approximate concepts are acquirable nonlinguistically | specified | Fig 11 :39, :40, :43 | triangulated F2 |
| Exact number leans on an imported count list | specified | Fig 12 :72, :87; Fig 6 :23 | triangulated F3 |
| Reflective and truth concepts lean on negation and second order | specified | Fig 12 :104, :139; Operators :58 | triangulated F4 |
| Language is a conditional cue under uncertainty, not a determinant | specified / general | Fig 10 :47; Fig 2 :35 | triangulated F5 |
| Teaching passes a head start, not capability | specified | Fig 4 :22, :23; Fig 11 :40 | triangulated F8 |
| The anchor is behavioral measurement, not agreement | general | Fig 2 :29, :40, :42, :45 | figure-derived |
| Which named concepts fall on which side | not stated | none | `gap`: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A concept requiring a bond absent from a learner's nonlinguistic Γ is acquired nonlinguistically at the same rate and with the same transfer as one using held bonds (breaks F1).
2. A core capacity (object permanence, approximate number, causal regularity) fails under adequate nonverbal habitat contact and appears only after labeling in independently run designs (breaks F2 and F3).
3. A nonlinguistic subject reliably passes a second-order false-belief or truth-versus-falsity discrimination with associative cues and experimenter cueing excluded (breaks F4).
4. A label deterministically changes nonlinguistic categorization under high perceptual certainty, with two independent evidence pools and no shared category training (breaks F5).
5. A figure-derived enumeration of concept names, or a single global percentage of language-determined concepts, is produced (breaks F6 and F7).
6. Fig 6's idempotence fails inside a closed set, or the Operators table's negation entry is shown to be a bond rather than a unary operator (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a behavioral ground measurement has paid for the shape per slot.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of language (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the two conditions separate in every report. A blended "language effect score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, per concept slot, which bond or atom is missing and whether a differing closure is in contact. Do not fund above the break (Fig 3 :29-30).
4. Treat any list of language-specific terms as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the developmental and cross-cultural literature as a budget filter and as corroborating witnesses, not as the verdict. The core-knowledge reviews share a pool (Fig 2 :31, :40).
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name the concepts; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and four essays opened directly this session (Library of Babel, Decoding Tacit Knowledge, The Hard Problem is About Source, The Recursive Self-Improvement Trap). The other four canonical essays were not re-opened this session and no quote from them is used here.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Framed the question as a binary split between linguistic and nonlinguistic concepts | **Retracted, union reading** | Fig 9 :54-57; two overlapping conditions, not two concept kinds |
| Read Fig 12 :111 as saying languageless minds have no concepts | **Narrowed** | It governs what a vocabulary can express, not the perceptual Γ; Fig 11 :43 permits nonlinguistic contact to build concepts |
| Planned to answer with a list of named concepts | **Retracted at record level** | Fig 9 :32 and the README's shape-not-a-name limit; `gap` declared at F6 |
| Read Cibelli's verbal-interference result as "language determines color concepts" | **Narrowed to a conditional cue** | The effect is removable, on-line, and uncertainty-modulated (F5) |
| Treated "core knowledge" as an innate property of the agent | **Re-censused to agent-and-habitat** | Fig 11 :39-40 plus Symbols :24-25; capability is relational and the weighting is inherited, not the concept |
| Wanted to call strong Whorf "refuted by the evidence" | **Narrowed to structural refusal plus conditional corroboration** | Fig 10 :47 refuses a convention that decides an outcome; world sources are secondary |
| Used Parellada's Davidson discussion as if it settled the second-order case | **Narrowed to single-source corroboration** | It is a conceptual analysis with an empirical case, and the figure verdict stands on Fig 12 and the Operators table |
| Tried to apply Fig 13's six physical terms to psychological concepts | **Retracted, strain S1** | Only fit by renaming space as spatial content; re-census sent Fig 13 to substrate and honest-stop roles |

**Strains sent to the log:** S1 (Fig 13 six-term set applied to psychological concepts), resolved by re-census. S2 (Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one." versus Fig 11 :43 "The habitat is enumerated, never composed."), dissolved: language and nonlinguistic contact are different loops, both kept separate. S3 (second-order concepts need language versus Fig 12 :104 recursion permitting settled molecules as atoms), partially dissolved: recursion makes second-order composition possible in principle, but whether the negation/reflection operator is available without language has no instrument here, so it is recorded as `gap` at this budget, not smoothed over. No unresolved strain remains beyond S3's declared gap.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: a union of bond-fit and closure-contact, each with its own instrument.
2. **What is the anchor?** A behavioral measurement per concept slot, not agreement about which words exist (Fig 2 :29, :40, :41).
3. **Where does language act?** At the middle links: vocabulary and objective (Fig 3 :7, :25-26; Fig 12 :115). It supplies bonds and a grammar, not just labels.
4. **What is shared with other animals?** The substrate and its first-order arrangements (Fig 11 :39-40; Fig 4 :20), corroborated by Pica and Spelke and Kinzler at low overlap.
5. **What needs an import?** Exact number, second-order truth, and norm/generic kinds: bonds or atoms absent from the nonlinguistic closure (Fig 6 :23; Fig 12 :112).
6. **Why is strong determinism refused?** A convention that decides an outcome has stopped being one (Fig 10 :47), and agreement about a shared meaning is a convention, not a verdict (Fig 2 :41).
7. **What can be said at the stop?** A boundary condition and two falsifiers, not a concept list. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*; Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a concept is difficult to learn without a particular language exactly when acquiring it needs a bond or an atom the learner's nonlinguistic library does not hold and no differing closure is in contact; concepts whose atoms and bonds are supplied by the habitat and the perceptual substrate are acquirable through nonlinguistic experience.** Approximate number, object and causal categories, and first-order kinds fall on the nonlinguistic side; exact integer, second-order truth and belief, and norm or generic kinds fall on the language-leaning side. The two conditions are kept separate, never averaged. Which named concepts fall on which side in a given population is a declared `gap`, unreached rather than silence: the framework returns a shape, and the source-discriminating instrument that would name the slots is not held here. Mode `specified` on the structural and conditional claims, `general` on the union and anchor rules, not `grounded`. No world source flipped a verdict; the one apparent conflict (strong determinism versus universal core knowledge) was returned to the census and dissolved by assigning the two claims to different conditions. S3 remains an honest, named gap.
