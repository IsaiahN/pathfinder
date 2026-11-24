# Figure-grounded audit: how to distinguish the universal from the learned

**Mode of this document:** `general` on the structural separator, `specified` on each domain's method, `gap` for the list of cognitive features. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No feature name in this document is `grounded`.

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-22): "LLMs can quickly simulate an approximate answer/output with the formula" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`. Formula from `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md` and `60_FIGURES_AS_METALAWS.md`. World sources fetched 2026-11-22 and listed in `10_source_ledger.csv`.

---

## 0. The question stated in effect terms

The question asks for a **method**, not a list: how can a researcher tell whether a pattern in human minds is universal (present because of shared machinery) or learned through culture, history and institutions? Stated as an effect, an answer lets a researcher take one observed form in one population and say which of several candidate sources produced it, and what observation would change that verdict.

Bind the sought-for shape as an ordinary term before searching (Formula step, "Direction"): **an answer is a separator, a procedure that assigns each (feature, population, observed form) to one of several candidate sources by discriminating among the sources that could produce the same reading, and that states what would refute the assignment.** Now the preference can accrue a residual like anything else (Fig 5 :65: "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else.").

### Residual R

For each feature slot `s` (a cognitive pattern) and population `p`, hold a prediction `Γ(b, a)` about the pattern's presence and form, and an observation `o'` from comparative work. Then `R = |Γ(b, a) − o'|` per slot. Symbols table :38: "The gap between prediction and observation. The central quantity: everything the system does is driven by it." Three properties matter before any figure line is chosen:

- **Arity: three-indexed, `(feature, population, candidate source)`.** A two-indexed residual, feature and population alone, can register a difference but cannot attribute it. Attribution is what the question asks for. The third index is the competing source: shared machinery, exposure-dependent learning, historical diffusion, or an institution-fixed convention.
- **Symmetry: not symmetric.** "Universal produces form" is an ordered relation. Reading the source back off the form is the inverse direction and is not licensed by the observation (Operators table :29 to :33: sequence is "no" for symmetry, conjunction is "yes"). This is the central difficulty and is developed in F4.
- **Scale: from one laboratory to cross-species and cross-historical comparison.** Large scale makes pooling tempting, which is the named failure in Fig 1.

The answer the figures can return is a shape (a separator and an instrument requirement). The names of particular cognitive features are not in `closure(Γ)` of the figures, so they are owed from the ground, not derivable here. That is a `gap`, not a silence (Fig 13 :134: "Unreachable is a verdict here, not a silence").

---

## 1. Domain census, before choosing any figure line

The habitat is enumerated, never composed (Fig 11 :43: "The habitat is enumerated, never composed"; Symbols table :109: "Everything in contact with the residual: actors, conditions, relations."). One line per candidate domain with actors, currency and a nameable anchor. A domain without a nameable anchor is not a domain yet. The domains here are the candidate *separating instruments*, because the question is a methods question.

| id | domain | actors | currency | nameable anchor |
|---|---|---|---|---|
| D1 | Cross-population variation and reaction norm | populations, environments | presence and form across varied habitats | comparative cross-population datasets (Henrich, Heine and Norenzayan 2010; cross-cultural databases) |
| D2 | Cross-species and phylogeny | species, populations | presence across related species with no shared learning history | ethological and phylogenetic records (Tinbergen's phylogeny question) |
| D3 | Development and ontogeny | infants, caregivers, exposure histories | acquisition trajectory, critical periods | developmental experiments (imprinting, language acquisition) |
| D4 | Comparability of categories, emic and etic | speakers, researchers, instruments | category boundaries, emic versus etic terms | cross-language naming and psychophysical measurement |
| D5 | Historical transmission and diffusion | institutions, traditions, documents | transmission lineage of the form | documentary and archaeological records of transmission |
| D6 | Causal identification and intervention | treatments, instruments, outcomes | change in outcome when a candidate cause is moved | randomized, quasi-experimental or natural-experiment outcomes that do not update on the frame's belief |
| D7 | Source-discriminating instrumentation | instrument, reading, candidate sources | discrimination among sources yielding the same reading | a spectrometer-like instrument that can separate sources (metamerism case) |

All seven have nameable anchors, so all seven are domains. No eighth was admitted: a search for a "culture bond" or a "learning operator" beyond the eight named operators produced no derived candidate (Operators table :68: "Seven tests separate the eight named here. Whether there are more is a question no test derived from these can answer."). The temptation is recorded and refused in F10.

### Partition or union

This is a **union, not a partition**. The categories overlap. A form can be universal in machinery (D2) and learned in its triggering conditions (D3) and diffused historically (D5), all at once. Facial expression work is the clean case: recognition machinery is shared, intensity ratings and the cues used differ by culture, and the conjecture about which expression is basic has a transmission history. Asking "universal or learned?" forces a false dichotomy.

Fig 9 :54 governs directly: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Fig 9 :4 to :5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Each overlap is a compound with its own loop. D1 through D7 are therefore kept as seven separate loops with seven separate verdicts. They are never averaged into one grand percentage of "how much is universal."

### Dependency order (Fig 3)

Fig 3 :20: "The chain is ordered by dependency, not by importance." The chain for this question runs:

1. **perception:** can the pattern be detected and discriminated in each population (D1, D4),
2. **vocabulary:** do we have comparable terms for what the pattern affords, emic and etic (D4),
3. **objective:** what would count as a "source" and as "shared" rather than "varying" (D6, D7),
4. **planning:** a sampling design and intervention that reach beyond one population (D1, D2, D6),
5. **learn and carry:** a result that can be checked in the next population and the next species (D2, D3, D5).

The break is between 2 and 3. We have instruments for perception and for planning, but comparability of terms and the operational definition of the competing sources have no stable instrument. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." A verdict taken below that break is a reading of nothing, not a weak reading (Fig 3 :22: "A step whose input never arrives cannot be diagnosed, only its predecessor can."). D7, the source-discriminating instrument, is the instrument owed at that break. Note the constraint in Fig 6 :34: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there." The spectrometer case in the Hard Problem essay is exactly such an already-working proto-instrument.

---

## 2. Figure census, quoted before concluding

Every string below is checked character by character against `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

| figure | verbatim line | bearing on this question |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | Keep each feature-population slot separate. |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | A pooled "percentage universal" destroys the signal. |
| Fig 1 :13 | "a global R near zero with one live slot residual is a legal state" | A near-zero global result can hide one live counter-population. |
| Fig 1 :23 | "The ground enters as the only metric." | Comparative measurement, not agreement, settles a source claim. |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | The outcome must not move when researchers reinterpret it. |
| Fig 2 :30 | "If it moves when you push on it, it is not an anchor." | A construct whose measurement shifts with the measuring frame is demoted. |
| Fig 2 :31 | "Two people reading the same report are not two frames; two instruments pointed at the same thing are." | Two labs quoting one dataset are one witness. |
| Fig 2 :32 | "Independence is what makes agreement mean something." | Cross-species and developmental frames must be genuinely low overlap. |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | Consensus among cross-cultural theorists is not a source test. |
| Fig 2 :40 | "agreement about the world is worthless when the agreeing frames share an evidence pool" | WEIRD replications share a pool; selecting checkers for agreement is forbidden. |
| Fig 2 :42 | "Buy independence in proportion to the cost of being wrong." | Mislabelling a learned form as universal is costly, so buy low-overlap frames. |
| Fig 2 :45 | "Frames range against the ground. They do not negotiate with it." | The method must range each candidate source against the anchor. |
| Fig 3 :20 | "The chain is ordered by dependency, not by importance." | Order the method by dependency, not by which instrument is most fashionable. |
| Fig 3 :27 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | Comparability and source definition are uninstrumented. |
| Fig 4 :20 | "Only the actors, the currency and the anchor change." | The loop is invariant across scale; populations and species are cast changes. |
| Fig 4 :22 | "Only methods cross up. Only head starts come down." | Offer the separator as a method, not a list of conclusions. |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | A construct carried into a new culture and back must have its gap measured. |
| Fig 6 :21 | "MINT composes inside the closure and can never add an atom." | More WEIRD samples cannot add a universal. |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | A new source class enters only from a low-overlap frame. |
| Fig 6 :32 | "An instrument is not built from a description. It is improved from a worse instrument already returning something." | The source discriminator is upgraded from an existing reading, not specified from nothing. |
| Fig 6 :12 | "source gate: provenance" | A diffusion claim needs a documented source. |
| Fig 6 :13 | "shadow test: explains a gap" | A proposed source must explain the residual it was imported for. |
| Fig 7 :35 | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | Agreement inside a field is not a source verdict. |
| Fig 8 :32 | "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." | Repetition within one population cannot decide universality. |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | No universal found is not proof the feature is learned, and no variation found is not proof it is universal. |
| Fig 8 :50 | "But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." | Independent invention of the same form is the strong universal case, not a pool artifact. |
| Fig 8 :51 | "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" | Universal mechanism and diffused form look identical in the reading; provenance decides. |
| Fig 9 :5 | "are not one hard question but several well-formed ones. Split it rather than search." | Seven domains, seven loops. |
| Fig 9 :27 to :28 | "describe it before you go looking, or any frame you pick will seem to fit" | Describe the residual in effect terms before choosing the comparison frame. |
| Fig 9 :30 | "your words are borrowed too, so describe the effect" | Avoid etic terms that smuggle the source conclusion. |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | The figures return a separator shape, not a feature list. |
| Fig 9 :44 | "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." | The feature list stays open. |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | Universal and learned overlap. |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | Sample size and literature count are budget filters, not source witnesses. |
| Fig 10 :24 | "the ground does not decay, the channel does" | A measurement channel can fail while the underlying fact persists. |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | First contact carries the residual, not the theory. |
| Fig 10 :47 | "a convention that decides an outcome has stopped being one" | An institution-fixed category is a verdict, not a neutral convention. |
| Fig 10 :52 | "Bring a characterised residual, never the source." | Two-stage offer. |
| Fig 11 :39 | "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." | A "universal" pattern belongs to agent and habitat, not to an isolated mind. |
| Fig 11 :40 | "An improvement that does not change contact changes nothing, however much it improves." | Adding more of the same population does not add a new habitat. |
| Fig 11 :49 | "An actor's valence is relative to the residual, not a property it carries." | No standing list of "good" universal traits survives a change of residual. |
| Fig 11 :51 | "No standing list of good actors survives a change of residual." | Refusal of a universal list is structural. |
| Fig 12 :5 | "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." | The form is not the list of parts; the arrangement carries the source. |
| Fig 12 :46 | "A bond is the typed relation between two operands." | Learning and universality can differ by bond, not by parts. |
| Fig 12 :103 | "Composition is recursive, and the level decides what is irreducible." | What is universal at one level can be a compound at another. |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | Same machinery, different cultural arrangement. |
| Fig 12 :123 | "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." | Universal kind versus variable member. |
| Fig 13 :115 | "The set is closed. The arrangements are not. That gap is why import exists." | A new source class must be imported from a differing frame. |
| Fig 13 :121 | "Different routes can arrive at the same substance." | Convergent derivation and diffusion both produce the observed form. |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence" | The feature list is a reported gap. |
| Fig 13 :135 | "It cannot say which primitive is missing, because naming it would mean already holding it." | The figures cannot name the universal. |
| Operators :58 | "a refutation is a negation, which is why a vocabulary without it can only accumulate" | A method without a refusal can only pile up universal claims. |

### Strain test results

Three candidate readings were rejected and sent back to census:

1. **Fig 13 :74, "Everything else is a composition across the two kinds, never within one."** Tempting reading: universal features are states and learned features are structures. That fails. The universal/learned axis is not the state/structure axis; the line governs composition inside a system, a different quantity. Re-census placed it under D1 and D4 as a constraint on mechanism, not as the sort rule.
2. **Fig 13 :20, "ordering, so more and less can be said"** (spectrum). Tempting reading: ordering is the universal in numerical cognition. Fails for the same reason COG-0001 re-censused it. It defines a substrate primitive; it does not license a claim about what every culture counts. Re-census removed it from the D1 verdict.
3. **Fig 12 :117 (isomer) applied to every cross-cultural difference.** Tempting reading: every learned variant is an isomer of the universal. Fails unless the atom set is held fixed (see `06_isomers_and_order.md` Q2). Where cultures add a new institution or artefact, the atom set changes and the relation is composition plus import, not isomerism. The fixed-atom condition is named as a live strain, not hidden.

No strained line was kept as a witness.

---

## 3. Findings

### F1: The verdict is per feature and population, never averaged

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13: "a global R near zero with one live slot residual is a legal state."

A single "humans are 60 percent universal" score destroys the only signal the question asks for. A pattern can be universal in presence and learned in form, so the table must be filled cell by cell. This is also why the seven domains stay separate.

**Refuter:** if per-slot source assignments and a pooled assignment coincide on every feature across all seven domains, the slot requirement is idle for this question and F1 is withdrawn as a governing finding.

### F2: The classes form a union, not a partition

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :4 to :5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Cross-population work, development, transmission history and causal identification each work well on a different subset. One lever, such as "replicate in another country," clears the subset where the blocker was sampling and leaves the intersections standing: the form may still be a pseudoetic measurement artefact (D4), a diffused convention (D5), or a correlate with no identified cause (D6).

**Refuter:** a demonstrated clean partition, with no feature showing both invariant machinery and variable binding, would refute F2 and permit a single sort rule.

### F3: The invariant is a functional group; the learned part is a binding

Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :46: "A bond is the typed relation between two operands." Fig 4 :20 triangulates at a different scale: "Only the actors, the currency and the anchor change."

Across D1 to D7 the recurring shape is: the same kind of machinery (categorising, perceiving, expressing, evaluating, counting, learning) is present, and populations differ in which member fills the slot and how it is bonded. This is why the answer is not "which features are in the universal bin" but "which substructure is invariant at this level, and what is bound differently." Fig 12 :103 adds level relativity: "Composition is recursive, and the level decides what is irreducible."

**Refuter:** a feature whose cultural variation introduces a new kind rather than a new member or bond of a shared kind would refute F3. That would require a new primitive in that domain, which the domain census does not currently show.

### F4: The decisive separator is source discrimination, not repetition

This is the load-bearing finding. The same observed behavior can be produced by more than one source. *The Hard Problem is About Source* (opened 2026-11-22) states the problem in instrument terms: "You can have several underlying causes that create identical readings but the definition of the output would be read as the same." Further: "If several paths create the same behavior, then behavior is a projection with lossy information" and "the instrument is speaking only about what it measured, it cannot comment on the source." The essay's resolution is instrumental, not argumentative: "It was proven wrong not by argument, but by the arrival of a better instrument."

Fig 8 :51 supplies the framework form: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them." Fig 13 :121: "Different routes can arrive at the same substance." Fig 8 :50: "But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."

So the four source classes the method must discriminate are metamers of one another at the behavioral reading:

| class | signature at the ground | figure / world anchor |
|---|---|---|
| U, species-typical machinery | present across low-overlap habitats and species with no transmission link | Fig 8 :50 convergence; D2 phylogeny |
| L, exposure-dependent learning | form appears with exposure and varies systematically with the developmental environment | D3 ontogeny; reaction norm |
| H, diffusion or common cause | form traces a documented transmission lineage; correlated populations are one pool | Fig 6 :12 source gate; Fig 2 :40 |
| I, institution-fixed convention | the category decides an outcome and cannot be violated in the local setting | Fig 10 :47 |

Repetition in more WEIRD samples does not separate these classes. Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." Fig 6 :21: "MINT composes inside the closure and can never add an atom."

**Refuter:** a demonstration that two of these source classes always produce distinguishable behavioral readings without a provenance record or a source-discriminating instrument would collapse the metamer problem and refute F4.

### F5: The ground decides; agreement among frames does not

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30: "If it moves when you push on it, it is not an anchor." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :45: "Frames range against the ground. They do not negotiate with it." Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

A shared view among cross-cultural psychologists, or among ethnographers, is one evidence pool talking. The anchor for each domain is the measurement named in section 1. Note the channel caveat in Fig 10 :24: "the ground does not decay, the channel does" and :25 to :26 "stale percepts, dropped transients, saturated metrics, pooled readings" with the output "you have lost touch." A cross-cultural instrument can stop registering variation while the fact persists.

**Refuter:** an alleged anchor whose reported value changes when researchers reinterpret it fails Fig 2 :29 and must be demoted to a frame; that domain's verdict is withdrawn rather than repaired.

### F6: Independence is bought, not assumed

Fig 2 :31: "Two people reading the same report are not two frames; two instruments pointed at the same thing are." Fig 2 :32: "Independence is what makes agreement mean something." Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."

The world search was therefore run across low-overlap fields: animal behaviour (Tinbergen), genetics and ecology (reaction norm), anthropology (emic/etic, cultural universal), statistics and causal inference, plus the field's own cross-cultural psychology. Two pages quoting one review count as one witness; overlap is recorded per row in `10_source_ledger.csv`. Agreement from a shared pool is one witness, not two.

**Refuter:** if any two sources marked independent are found to draw on the same dataset or the same review, the triangulation mark for that domain falls to single-source or gap.

### F7: A dependency break sits at comparability and source definition

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

The chain breaks at vocabulary and objective: emic/etic comparability and the operational definition of "source." The world literature names this exact failure. *Cross-cultural psychology* (Wikipedia, opened 2026-11-22) describes the pseudoetic move: "This pseudoetic approach is actually an emic based approach developed in a Western culture while being designed to work as an etic approach," and gives the case of a test brought "to another culture without checking whether the test was measuring what it was intended to measure." Effort spent on more sophisticated statistics above the break cannot rescue a term whose meaning did not travel. Fig 9 :30: "your words are borrowed too, so describe the effect."

**Refuter:** demonstration of a working instrument that fixes comparability and source definition across two low-overlap frames would move the break and require a fresh census.

### F8: A universal pattern is agent-and-habitat

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :51: "No standing list of good actors survives a change of residual."

Changing the population changes the habitat and the contact, not just the measurement. *Cultural universal* (Wikipedia, opened 2026-11-22) corroborates at the ground: "The observation of the same or similar behavior in different cultures does not prove that they are the results of a common underlying psychological mechanism," and "cultural universals are not proof of innateness." A universal claim names agent and habitat, or it names nothing.

**Refuter:** an agent-only change that moves the ground with habitat held fixed would refute the capability claim (the figure itself names this falsifier at Fig 11 :71 to :72).

### F9: Observational co-occurrence cannot choose the arrow

Operators table :29 to :33 defines sequence and production as ordered ("swap them. Does it become a different thing? Yes.") while conjunction is symmetric ("swap the operands. Does the meaning change? No."). A correlation between a cultural practice and a cognitive form is symmetric; "culture causes form" and "form selects for practice" are ordered alternatives with the same reading. *Causal inference* (Wikipedia, opened 2026-11-22) states the methodological version: "The main difference between causal inference and inference of association is that causal inference analyzes the response of an effect variable when a cause of the effect variable is changed," and "there is no inherent causality in phenomena that correlate." It also notes the design remedy and the pre-registration remedy: "some have advocated that researchers preregister their research designs prior to conducting to their studies."

Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." A method that records only co-occurrence has ingredients and no route.

**Refuter:** a case where symmetric co-occurrence selects the causal arrow without an intervention, an instrument, or a provenance record would refute F9.

### F10: No new "culture bond" may be invented, and a refusal must be possible

Operators table :68: "Seven tests separate the eight named here. Whether there are more is a question no test derived from these can answer." The relation failing all tests is "a claim that has not been made yet," not a missing operator. The temptation to posit a special operator mapping universal mind onto cultural form is recorded and refused; the variation is a difference of binding among the existing bonds.

Operators :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate." Formula step 2 owes REFUTED before mint. A method that can only accumulate universal claims cannot carry its own correction. Hence the pre-registered refuter in section 4.

**Refuter:** a derived eighth operator passing all identification tests would change F10. Until then the refusal stands.

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument, not only an honesty device. These are written now, before any per-domain verdict is stated, and are not tuned to the results above.

The shape claim, "the universal and the learned form a union of overlapping conditions; the invariant is a functional group whose members and bindings vary; the same behavioral reading has several sources that only provenance and a source-discriminating instrument can separate; and the feature list is unreachable from the figures," is refuted if any of the following holds:

1. **Partition result.** A feature is found with invariant machinery and invariant form across every known population, and no other feature shows both invariant machinery and variable binding. That defeats F2 and permits a single sort rule.
2. **New kind result.** A cultural variation introduces a new kind of cognitive primitive rather than a new member or bond of a shared kind. That defeats F3 and the functional-group reading.
3. **Averaging result.** A pooled verdict across feature slots reproduces every per-slot source assignment, so the slot discipline changes nothing. That defeats F1.
4. **Metamer result.** Two candidate source classes are shown to be always distinguishable at the behavioral reading without provenance or a source-discriminating instrument. That defeats F4.
5. **Anchor result.** An alleged ground changes its answer when frames push on it, so no anchor exists for that domain. That domain's verdict is withdrawn.
6. **Independence result.** Two frames marked as triangulating are shown to draw on one evidence pool. That domain's mark falls to single-source or gap.
7. **Naming result.** A figure line is produced that names a specific cognitive feature and pays for it at the ground. That defeats the `gap` verdict on the feature list.

If any fires, the domain verdict is rewritten and the shape claim is reduced accordingly. No world result flips a figure verdict directly; a conflict sends the census back to step 1.

---

## 5. Per-domain verdicts, kept separate and never averaged

Mode key: `general` is a structural statement from the figures, `specified` is that structure applied to a named separating method, `gap` is unreach from the figures for the feature content.

| domain | governing findings | corroboration mark | verdict |
|---|---|---|---|
| D1 Cross-population variation | F1, F2, F3, F8; Fig 1 :19, Fig 12 :123, Fig 11 :39 | **triangulated** (Fig 12 composition and Fig 11 habitat and Fig 1 slot, low overlap; world: Henrich et al. and reaction norm are two fields) | `specified`: across varied habitats, invariant presence plus variable form indicates a shared functional group with a bound member. Which feature: `gap`. |
| D2 Cross-species and phylogeny | F4, F6, F8; Fig 8 :50, Fig 2 :31, Fig 11 :39 | **triangulated** (Fig 8 convergence and Fig 2 independence and Fig 11 capability, low overlap; world: ethology is a separate pool) | `specified`: presence across related species with no transmission link is the strongest universal candidate, still requiring provenance. Named features: `gap`. |
| D3 Development and ontogeny | F2, F4, F8; Fig 9 :54, Fig 8 :51, Fig 11 :40 | **triangulated** (Fig 9 union and Fig 8 provenance and Fig 11 contact, low overlap) | `specified`: exposure-dependent acquisition with a critical period indicates learned binding; homology of machinery is a separate verdict in the same cell. Feature list: `gap`. |
| D4 Comparability, emic and etic | F7, F3; Fig 3 :27, Fig 4 :30, Fig 12 :123 | **single-source** for the figure-side break (Fig 3 only; world pseudoetic literature corroborates but shares the field's evidence pool) | `specified`: the construct must travel before comparison; a pseudoetic instrument returns a reading of the instrument. No figure line certifies comparability. |
| D5 Historical transmission | F4, F5; Fig 6 :12, Fig 8 :51, Fig 2 :40 | **triangulated** (Fig 6 source gate and Fig 8 provenance and Fig 2 pool rule, low overlap) | `specified`: a documented lineage classifies the form as diffusion or common cause, not independent universality. No figure line names a lineage. |
| D6 Causal identification | F9, F5; Fig 12 :111 to :112, Operators :29 to :33, Fig 2 :29 | **triangulated** (Fig 12 bond grammar and Fig 2 anchor and the ordered-bond table, low overlap; world: causal inference is a statistics pool) | `specified`: symmetric co-occurrence cannot choose the arrow; intervention or instrument plus a pre-registered refuter is owed. No feature verdict follows. |
| D7 Source-discriminating instrument | F4, F7; Fig 6 :32, Fig 6 :34, Fig 9 :30 | **single-source** for the instrument requirement (Fig 6 only); the world metamer case is a distinct low-overlap corroborator | `specified` with a `gap` on generic construction: an instrument that comments on source is required; the figures do not specify one for cognitive form. |

No averaging. D4 and D7 are single-source and are not upgraded by agreement with D1. D1 through D7 form a union, so no combined universal percentage is computed.

---

## 6. Recommendation

1. Lead with F1 and F2: per-slot, union not partition. This is the part of the question the figures actually settle.
2. Replace "universal or learned?" with F3's question: which substructure is invariant at this level, and which member or bond varies?
3. Lead the method with F4: discriminate among sources, do not accumulate replications. Ask for a provenance record and a source-discriminating observation.
4. State the mode on every sentence. The separator is `general` or `specified`; the feature list is `gap`.
5. Do not present any feature name as figure-derived. Fig 13 :135 governs: "It cannot say which primitive is missing, because naming it would mean already holding it."
6. Buy independence with low-overlap fields before promoting any domain mark from single-source to triangulated (F6).
7. Fig 4 :22: "Only methods cross up. Only head starts come down." Offer the separator method, not a pooled conclusion.
8. Write to the public venues in `03_public_contact_points.csv`, one to one, and ask what would count as a failure. A failure is more useful than an endorsement.

---

## 7. Canonical usage check

Read after the first six sections, per the authority order.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the limit: the framework returns "a shape, not a name" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." This confirms the `gap` verdict and the three strain re-censuses in section 2.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the anchor is not an oracle for what the figures themselves decide. Fig 9 :60 ("Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.") governs the use of effect sizes and sample counts in this solution.
- `FRAMEWORK/figures/THE_FORMULA.md`, step 7: SEARCHED, INWARD, OUTWARD are three distinct questions. For this question SEARCHED is whether the feature or source is already in the comparative corpus and unfound; INWARD is sharpening the emic/etic and source-discriminating instruments; OUTWARD is importing a low-overlap frame (ethology, genetics, causal inference). The feature list is not a SEARCHED result, because no figure line governs it.
- `FRAMEWORK/figures/THE_FORMULA.md`, "Direction": make the sought-for shape an ordinary term, which section 0 does.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Fig 13 :74 splits universal from learned" | **Retracted.** State/structure is not universal/learned. Re-censused to D1 and D4 as a mechanism constraint. |
| "Fig 13 :20 gives the D4 universal (ordering)" | **Retracted.** It governs a substrate primitive, not a cultural category. Re-censused to F3 via Fig 12 :123. |
| "Every cross-cultural difference is an isomer" | **Narrowed.** Holds only over a fixed atom set; where cultures add institutions, the relation is composition plus import. Live strain retained in `06`. |
| "Seven domains can be ranked by how universal they are" | **Retracted.** Fig 1 :19 and Fig 9 :60 forbid the aggregate. Verdicts stay separate. |
| F2 union not partition | **Canonically confirmed.** Fig 9 :54 is explicit, and the README's re-census rule supports splitting compounds. |
| F4 source discrimination is the separator | **Canonically confirmed.** The README's limit is a shape and a recorded lineage; Fig 8 :51 makes provenance the deciding record; the Hard Problem essay makes it an instrument requirement. |
| F8 agent-and-habitat | **Canonically confirmed with its own stated falsifier** at Fig 11 :71 to :72. |
| F9 no arrow from co-occurrence | **Confirmed from two low-overlap sources** (ordered bonds in the Operators table; causal inference in statistics). |
| "This derivation could settle the feature list" | **Never claimed, now explicit.** The Recursive Self-Improvement Trap calls LLM output "simulacra" and requires the real architecture or the formula itself. |

### Round trip note

The primary census was written before the canonical check. The check removed two strained readings, narrowed one, and added no new figure line to the feature-list result. The round trip gap `R_T` is therefore small for the figure set and large for the feature list, which is reported as `gap` rather than filled. `11_audit.md` re-runs the census independently from the residual line alone.

---

## 8. Strain log

- **S1, Fig 13 :74 versus universal/learned:** dissolved by re-census (different object). Kept visible.
- **S2, Fig 13 :20 versus numerical universals:** dissolved by re-census (substrate primitive, not cultural count).
- **S3, fixed-atom condition on the isomer claim:** live. Named in `06_isomers_and_order.md` Q2, `09_watson_answer.md`, and `11_audit.md`. Falsifier stated.
- **S4, the source-discriminating instrument is owed but not specified:** live `gap` at D7. Fig 6 :32 and :34 constrain its shape (upgrade from an existing reading) without naming one. Not converted into a verdict.
- **S5, world-source heterogeneity:** Henrich et al. and cross-cultural psychology share the WEIRD evidence pool; counted as one witness for the sampling claim, not two. Reaction norm, ethology and causal inference are genuinely low overlap.

After re-census: two live strains and two dissolved strains, none hidden.
