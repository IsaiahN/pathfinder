# Figure-grounded audit: COG-0079, timing and form of children's understanding

**Mode of this document: `specified` on the child-facing claims, `general` on the structural split, `gap` on the specific ages and weights. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the canonical usage note and the recursive-self-improvement essay: LLM output is a simulation checked for internal consistency against the figures, and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This audit cannot settle the developmental question it reports on. No child was measured by this agent.

**Sources for the figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `FRAMEWORK/figures/THE_FORMULA.md` and the canonical figures README. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the child's belief about a social event: who acted, with what goal, whether the outcome was intended, who is to be held responsible.
- **a** is the child's attribution or judgment: an answer to "where will she look", "did he mean to", "was it naughty".
- **Γ(b,a)** is what the child's current library of social concepts predicts will happen or what judgment it will return.
- **o′** is what the social situation actually was, measured independently of the child's frame: who moved the object, what the actor saw, what the outcome was. This is the anchor. Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."
- **s** is the child, and also the concept. R is indexed per child and per concept (agency, intention, responsibility), never aggregated into a single developmental norm. Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

The phenomenon to explain is not a level but two distinct quantities:

1. **Timing**, call it `T_s^k`: when, in the ordered succession, the residual on slot s and concept k first stays small; the order across k; the sequence of handoffs.
2. **Form**, call it `F_s^k`: the structure of the attribution, which distinctions the child draws, which bonds connect agent, action, goal and outcome.

A frame that predicts all children reach all three concepts at one age, or that the three concepts are one stock that simply fills up, has a residual here.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a set of conditions whose conjunction keeps `T` early or late and whose arrangement fixes `F`, plus an instrument that discriminates a change of ground contact from a change of the measuring channel. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." Fig 2 :37 "Human judgment is the right anchor for is this a good answer for a person, because the question is about people." The question is constitutively about people's understanding of people, so an independently measured social ground (the true state of the event, and where a person actually looks or what they actually intended) is a legitimate anchor. It must not update on what the child or the theory thinks. Fig 2 :30 "you push on it, it is not an anchor." A child's score on a task moves when task language is pushed; it is an instrument, not the ground.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a multi-place relation: child, social event, attribution, and time. It is a sequence rather than a set, so it carries the **ordered** bond `→` (Fig 12 :72 "A then B; B needs A to have happened"), plus **production** `⇒` for agency, **comparison** `⋛` for intention and responsibility, **subtraction** `−` for the counterfactual, and **negation** `¬` for the refusal of an accidental reading. It is not symmetric: child and social event are not interchangeable.
- **Symmetry.** "Understanding" is a threshold relative to the independently measured social ground, not an absolute quantity (Fig 12 :87 "is it about which is larger, rather than both being present? Yes."). Timing is asymmetric in time: a mastery once achieved is not undone by reversing the action.
- **Scale.** Four scales are in view: the single child's step-by-step loop, the proximal dyad of child and caregiver or peer, the distal culture and institution (school, media, historical cohort), and the life-course span. The membrane between scales is "Not a wall: a filter with a direction" (Fig 4 :21) and the transform is lossy, so the round-trip gap R_T must be measured, not assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The child's loop** (one agent, one scale) | the child, Γ, beliefs about social events | attributions and residual reduction | yes: the independently measured state of the event (who acted, what was seen, what happened) | admitted |
| **D2 The proximal habitat** (dyad and small group) | caregivers, siblings, peers, mental-state talk, joint attention | contact, imported terms, calibrated feedback | yes: the same ground, reached through the child's contact; this is the habitat of D1 | admitted |
| **D3 The distal habitat** (culture, institution, cohort) | cultural practices, schooling, media and technology, historical time and place | imported practices, room changes | yes: the same ground, reached through closures that differ; the cohort is the life-course anchor | admitted |
| **D4 Composition inside the library** (form) | atoms (agent, action, goal, outcome, belief) and the seven bonds plus negation | reach, cost |φ| | yes: settlement against the ground, "then check it against the ground, then carry it up" (Fig 5 :32) | admitted |
| **D5 The measurement channel** | the task, its language, the experimenter, the scoring rule | contact with the child's competence | yes: the ground, "the ground does not decay, the channel does" (Fig 10 :24) | admitted |
| **X1 Pure maturation as a sufficient cause** | a module unfolding on its own | biological time | **no** anchor independent of contact; Fig 11 :40 refuses an improvement that does not change contact | not a domain yet, re-scoped into D4/D5 |
| **X2 Culture as sole cause** | the collective | norms | the ground is reached only through D2 and D3 | absorbed into D2/D3 |
| **X3 Chronological age as a cause** | the calendar | elapsed time | age is a parameter of the channel and the chain, not a currency | absorbed into D5 and Fig 7 |

X1 fails the anchor test as a *sufficient standalone cause*. This is a structural exclusion, not a denial that biology matters. The figures do not say biology is absent; they say an agent-only improvement that leaves contact unchanged "changes nothing, however much it improves" (Fig 11 :40). Biological maturation enters the census as a condition of the habitat and the channel, not as a free-floating property. The figure's own standing refuter is preserved: an agent-only improvement that moved the ground would refute the capability claim (Fig 11 :72).

### 1.3 Partition or union

D1 and D2 overlap: the child's loop runs inside the family habitat. D2 and D3 overlap: the family sits inside a culture and a cohort. D4 and D5 overlap: the form of an attribution is read through a measuring channel. Each overlap is a compound with its own loop. The whole question is a **union**, not a partition.

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

Two unbundlings are required before any search:

- **Timing versus form.** They are different quantities with different instruments. A study of when children pass false-belief tasks does not by itself tell us the bond structure of the attribution.
- **Agency, intention, responsibility.** They share atoms but differ in bonds (section 6). They are three sub-residuals, not one concept that grows.

### 1.4 Dependency order (Fig 3)

Fig 3 :20 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step". Fig 3 :24 "Why the middle link is where chains usually break." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

Order for this question: (1) perception, can the child register the event and its outcome; (2) vocabulary, does Γ have terms for what the event affords (agent, goal, seeing, intending); (3) objective, can the child say what would count as a responsible judgment, that is, a comparison of the actual outcome against the intended one; (4) planning, the attribution itself; (5) learn and carry. The middle link, having terms for what a situation affords and saying what would count as progress, is the one with no instrument. Fig 3 :25 "Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." Most effort lands above the break because that is where measurements already exist (Fig 3 :29).

A further dependency follows from the operator set. Responsibility requires refusing the "it was an accident" reading. Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond. A system holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it." Operators :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate." So the dependency order is agency (production) before intention (goal and comparison) before responsibility (comparison plus negation), a prediction tested against Piaget in F5.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not the content of the concepts |
| 2 The Ground | the anchor and triangulation; human judgment legitimate for a question about people | governs D1/D5, and the witness rule for this audit |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs the order of agency, intention, responsibility |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs cross-scale transfer from dyad to culture |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new distinction can be admitted |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs D2/D3, the role of contact with differing closures |
| 7 Room Chain | same closure handed along; fidelity times pressure | governs timing as a chain of handoffs |
| 8 Union Surplus | closure idempotent; provenance and "residual first, frame second" | governs triangulation and the witness rule |
| 9 Leave / Arrive | union versus partition; describe the residual before choosing a frame | governs the unbundling and the honest stop |
| 10 Ground Maintainer | ground does not decay, channel does; keep the anchor reachable | decisive for D5 and for apparent timing differences |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1/D2/D3; refuses a standing list |
| 12 The Bond | isomer, functional group, production, comparison, negation; arrangement is the substance | decisive for the FORM question |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only; see strain S1 |
| Operators table | ⇒ production, ⋛ comparison, − subtraction, ¬ negation | governs the bond assignment in section 6 |
| Symbols table | `R`, `Γ`, `b`, `a`, `o′`, ground, habitat definitions | governs the residual setup in section 0 |

**Strain test applied during this census.** An early pass tried to apply Fig 13's six-term physical substrate directly to the social-cognitive content: agency as a kind of energy, intention as a gradient, responsibility as a spectrum. It fit only by renaming the terms, which is a strain. Fig 13 therefore does **not** govern the content of these concepts. Re-census sends Fig 13 to two legitimate roles only: the ordered succession of differences (time) as a state (Fig 13 :11-12), and the honest-stop rule that the set is closed while arrangements are not (Fig 13 :115, :134). Strain S1 is recorded and resolved in section 7. A second strain, S2, concerns calling the social situation "the ground" while the child's Task performance moves; it is resolved by Fig 2 :29-30 and Fig 11 :73, the habitat updates and the ground is what settles and does not.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about children's development, `grounded` only if a measurement paid for it. None is `grounded`. Status is `triangulated` only where two figures with low topical overlap bear, or where a figure line and an independent world pool bear; otherwise `single-source`.

### F1: It is a union of two quantities and three concepts, not one question

**Mode: `general` on the split, `specified` on the child application. Domains: all. Status: triangulated (Fig 9 union rule and Fig 1 per-slot rule, low overlap).**

Fig 9 :4 "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

A single reported age, such as "children understand agency at four and responsibility at seven", is two different residuals described with one number. Timing is a fact in the chain; form is a structural fact about bonds. The three concepts share atoms but differ in bonds (F4). A study that averages across children, concepts, tasks and cultures has already thrown away the only signal that says where to look.

**World bearing (secondary only).** Wellman, Cross and Watson 2001, in Child Development, report that "a combined model including age, country of origin, and four task factors accounted for 55 percent of the variance in false-belief performance" (ERIC abstract, read 2026-11-22). Age, country and task factors are three different quantities; the residual variance is not a single dial. Barone, Corradi and Gomila 2020 report that in their meta-analysis of nonverbal tasks "results varied strongly from study to study, much more than it would be expected by chance, suggesting that other unknown factors modulate the effect." Taumoepeau 2025 documents "culturally linked differences in the developmental sequencing" (PMC article, read 2026-11-22). These corroborate the union and the channel reading. They are all in the developmental-psychology pool, so they are one witness, not three (Fig 2 :31).

**Refuter:** a single instrument that returns one number which prospectively predicts both timing and form across all three concepts, per child, with no leftover residual and no task or country term. If such a measure exists, the union finding collapses into a partition.

### F2: The understanding is a property of child-and-habitat, not of the child alone

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 11 habitat and Fig 4 membrane, low overlap; plus two world pools).**

Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." Fig 4 :20 "it or a thousand. Only the actors, the currency and the anchor change."

The habitat is enumerated, never composed: "actors: what acts on it, and what it acts on", "conditions: light, water, temperature, season, terrain", "relations: pollination, predation, competition, dependency" (Fig 11 :45-47). Translated to this residual: actors are caregivers, siblings, peers and teachers; conditions are language input, schooling, technology and cohort; relations are joint attention, mental-state talk, imitation and instruction. The list is read off the world, not invented: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual" (Fig 11 :48).

Crucially, valence is relative to the residual. Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51 "No standing list of good actors survives a change of residual." So the figures structurally refuse a standing list of "the influences" that is valid for all three concepts and all children. A practice that accelerates intention understanding can delay responsibility understanding, and no label of "good input" survives that change.

**World bearing.** Tomasello, Kruger and Ratner 1993, in Behavioral and Brain Sciences, state that "Cultural learning manifests itself in three forms during human ontogeny: imitative learning, instructed learning, and collaborative learning – in that order." Carpendale and Lewis 2004, in Behavioral and Brain Sciences, propose that "children construct social understanding through interactions with others and that social knowledge is fundamentally based on action within these relationships" (search-indexed text of the target article). Taumoepeau 2025: "social understanding development moves from a purely individual cognitive endeavour to a socio-cognitive endeavour, centred in social interactions" (PMC). Elder 1998, in Child Development, gives the life-course version: "lives are lived interdependently, and social and historical influences are expressed through this network of shared relationships" (linked lives). The Encyclopedia on Early Childhood Development states that "environmental factors do influence its development. It can be enhanced by opportunities". These are three pools: developmental psychology (one witness), life-course sociology (a second), and animal-social-learning (a third, via Tomasello). They corroborate the contact claim; they do not supply the list.

**Refuter:** a child whose timing and form are invariant across a documented habitat substitution that changes contact (caregivers, language, schooling, cohort), or an agent-only biological improvement that moves the ground. The second is the figure's own stated refuter (Fig 11 :72). If either is found, F2 and the capability claim fail.

### F3: Timing is partly a channel effect; the ground does not decay

**Mode: `specified`. Domain D5. Status: triangulated (Fig 10 ground maintainer and Fig 2 anchor rule, low overlap; plus a low-overlap animal-behaviour witness).**

Fig 10 :24 "the ground does not decay, the channel does". Fig 10 :25 "stale percepts, dropped transients, saturated metrics, pooled readings". Fig 10 :28 "you have lost touch". Fig 10 :29 "→ keep the anchor reachable". The named decay modes are directly recognizable in developmental measurement: a task whose language exceeds the child's comprehension is a saturated metric; a single trial is a dropped transient; a score pooled across tasks and cultures is a pooled reading. None of these is a change in the child's competence; all of them change the measured timing.

Fig 2 :45 "Frames range against the ground. They do not negotiate with it." The child's task score is a frame's reading, not the anchor. Fig 2 :37 "Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."

**World bearing.** Wellman et al. 2001 include "four task factors" and "country of origin" in the model that predicts performance (ERIC). Barone et al. 2020 report "a possible publication bias in this body of work: Some studies with nonsignificant results were probably not published" and that "Part of this variability is explained by the type of paradigm employed." They note that "The more recent the study was, the less likely it was of finding that infants pass the task", which cannot be a change in infants. Hare, Call and Tomasello 2001, in Animal Behaviour, supply a genuinely low-overlap witness: subordinates failed the two-piece condition, and the authors write that "their failure in this experiment was likely to be due to the changed nature of the competition under these circumstances and not to a failure of social-cognitive skills." They conclude that "We attribute the positive results in our study to an experimental situation that was more naturalistic than previous ones." A change of task changed the result while the animal did not change. That is Fig 10 :24 observed outside developmental psychology.

**Refuter:** a task or channel manipulation that leaves measured timing and form exactly invariant while ground truth is held constant, plus studies showing no paradigm dependence and no publication bias. If timing tracks only the ground and never the channel, F3 is false.

### F4: Form is carried by bonds, not by ingredient lists

**Mode: `specified` on the child application, `general` on the structural claim. Domain D4. Status: triangulated (Fig 12 and the Operators table for the operator assignment, plus Piaget from an independent pool).**

Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Fig 12 :46 "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands. A recipe that names only its ingredients has recorded half of itself." Fig 12 :94 "The arrangement is the substance."

The three concepts can be written over a shared atom set {agent, action, goal, outcome, belief} with different bonds:

- **Agency** uses production `⇒`: "A produces B; B did not exist before" (Operators :37). The question "who made the cup fall" is a production attribution.
- **Intention** uses comparison `⋛`: Operators :51 "a goal is a comparison, which is why a vocabulary without it cannot state one." The question "did she mean to" compares the outcome against a goal.
- **Responsibility** adds negation `¬` to the comparison: "the second operand's absence is the point" describes `−` (Operators :45), but responsibility needs more than absence, it needs the refusal of the accidental reading. Operators :73 "Negation is the refusal of a claim." Operators :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate."

So the difference between agency, intention and responsibility is not that the child has more concepts; it is that the child can lay down a different bond over the same atoms. Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Under the shared atom set the three concepts are isomers (developed in `06_isomers_and_order.md`). As commonly described in the literature they share only a subset and stand as a functional group: Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

**World bearing.** Piaget, *The Moral Judgment of the Child* (1932), from the primary text: "These two attitudes may co-exist at the same age and even in the same child" (the attitude that "judges actions according to their material consequences" and the one that "only takes intentions into account"). The slow change is described as "Objective responsibility diminishes on the average". That is a change of bond (consequence to intention), not the appearance of a new atom, and the coexistence of both attitudes in one child is exactly the isomer/functional-group signature. Note on provenance: the direct PDF fetch from the Burma Library mirror returned an unsupported-content-type error; the quoted strings were read from the search-indexed text of that same primary text, with reduced weight recorded in `10_source_ledger.csv`. A secondary summary (Simply Psychology) adds that "Heteronomous children judge acts by their consequences; autonomous children judge by the intentions behind them", used only as a label, not as evidence.

**Refuter:** show that the three concepts are distinguished only by adding atoms (more concepts, none bonded differently), or that a vocabulary lacking `¬` can still express "it was not an accident" as a positive term with no refusal. Either would break the bond assignment.

### F5: The middle link and the refusal operator set the order

**Mode: `specified`. Domain D1/D4. Status: single-source on the figure side (Fig 3, with the Operators entry as a corroborating line from the same framework, so one witness); world corroboration from two pools.**

Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Fig 3 :25 "Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." Operators :73 "A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."

Prediction: agency (production) is available before intention (comparison), and responsibility (comparison plus refusal) comes last, because the refusal operator is what lets the child say "that was not an accident". More practice at planning cannot rescue a child who has no term for what the event affords. Most intervention effort lands above the break.

**World bearing.** Barone et al. 2020 describe development as "a gradual process that starts in a non-intellectualized, non-theoretical manner, from an intuitive sensitivity to others' intentions (what is that person going to do?) to the ability to develop complex explanations of the others' behaviors". They add that "the different non-verbal tasks used to evaluate false belief attribution seem to rely on infants' capacity to detect simpler mental states, like intentions and states of seeing and not seeing." Piaget's documented shift from objective responsibility to intention-based judgment is the responsibility end of that order. Tomasello et al. 1993 give another ordered progression, "imitative learning, instructed learning, and collaborative learning – in that order". These corroborate the order, not the specific ages.

**Refuter:** a child who passes an independently measured responsibility judgment before mastering the negation/refusal operator, or a documented child whose perception, vocabulary and objective links all measure as working while the failure sits at planning. The first breaks the operator dependency, the second breaks the "usually at the middle" claim (though not the dependency ordering itself).

### F6: A new social concept enters only through a differing closure

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 6 closure and Fig 8 union surplus, distinct roles).**

Fig 6 :14 "the only operator that moves the wall" (import). Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :45 "Two frames together reach what neither reaches alone." Fig 8 :53 "Residual first, frame second."

The child cannot derive a genuinely new social atom by composing forever inside what it already holds; the arrangement space is unbounded while the closure is not (Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists."). The import comes from a frame whose closure differs: a caregiver who labels a mental state, a peer who contradicts the child's reading, a story that presents another perspective, an institution that demands a new distinction. Instruments themselves are built from worse instruments already returning something: Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :33 "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced." So the child's first crude reading of an intention is the proto-instrument for the sharper one.

**World bearing.** Taumoepeau 2025: "language and communication form a conduit of cultural knowledge and a critical source of insight for how children learn about the mind during infancy and into the middle years" and "conversations are a social context in which references to mental states in the context of actions and events allow children to first experience these words and actions between social partners, before internalizing these concepts". Carpendale and Lewis 2004 locate social understanding "within social interaction". Elder 1998: "the developmental impact of a succession of life transitions or events is contingent on when they occur in a person's life", with transitions occurring through linked lives. These are corroborations from different pools; none supplies a figure line, so none can upgrade the verdict.

**Refuter:** a child who acquires a new social-cognitive atom with no contact with a differing closure (no caregiver, peer, language or cultural input) whose ground contact still pays; or a renewal of reach purely by internal composition inside one closure. Either breaks idempotence and F6 with it.

### F7: Timing is a life-course chain, not a clock reading

**Mode: `specified` on the life-course application, `general` on the structural shape. Domains D3, D5. Status: single-source on the figure side (Fig 7 plus Fig 13's time state, same framework); low-overlap world corroboration from life-course research.**

Fig 7 :37 "Progress per handoff has two factors. Zero either and the chain runs in place:" Fig 7 :38 "the bracket's fidelity across the handoff" Fig 7 :39 "the ground's pressure on the room". Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced." Fig 13 :11 "time", Fig 13 :12 "the ordered succession of differences". Fig 10 :71 "The room composition is a function of the question." Fig 10 :72 "When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."

Timing is thus not chronological age. It is when a contact event occurs in the ordered sequence, and whether at that handoff the bracket was faithful and the ground exerted pressure. Two cohorts with the same calendar age but different transition timing and different ground pressure should differ; a room that stays fixed while the question moves is the failure.

**World bearing.** Elder 1998 gives the life-course principle in the primary text: "the developmental impact of a succession of life transitions or events is contingent on when they occur in a person's life." He also states "the life course of individuals is embedded in and shaped by the historical times and places they experience over their lifetime" and the principle of "human agency" under "the opportunities and constraints of history and social circumstances". The Society for Longitudinal and Lifecourse Studies page describes its journal as serving "researchers studying the life course and using longitudinal methods at the interfaces of social, developmental and health sciences", which is the institutional home for this quantity. These corroborate the shape; they do not provide the figure line.

**Refuter:** identical developmental timing in two cohorts whose transition timing and historical context differ in the way the figure says should matter, with no channel compensation. That would falsify the handoff reading of timing.

### F8: The ages and the weights are a declared `gap`

**Mode: `general`. Domains: all. Status: triangulated (Fig 9 shape limit, Fig 13 unreachable verdict, Fig 8 search-is-not-absence).**

Fig 9 :32 "→ you get a kind of thing, never the answer itself". Fig 13 :134 "Unreachable is a verdict here, not a silence," Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 8 :39 "So a search that finds nothing is never a proof of absence."

No figure line returns the age at which a named child masters a named concept, or the numeric weight of parental talk versus schooling versus cohort. What the figures return is the shape: a union of timing and form, contact-dependent, bond-differentiated, channel-sensitive, ordered by dependency, with a refusal operator required for responsibility. A source-discriminating instrument is owed, characterized in effect terms but not held here. This is the same metamerism point the canonical essay makes: an instrument that reads an outcome "cannot comment on the source"; what is needed is a discriminator, not a name.

Formula step 7 keeps the three routes distinct: SEARCHED first (is the specific age already in the developmental-psychology closure and merely unfound?), then INWARD (sharpen the instrument, for example task language and within-child measurement), then OUTWARD (import from a frame whose closure differs, for example life-course methodology or animal social cognition). The world sources in section 3 already ran the first and third routes partially and returned heterogeneity and paradigm dependence, not a number. Budget filters (sample size, venue, prestige) are never witnesses for the verdict: Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Refuter:** a figure line found after a genuine re-census that returns a numeric age or a ranked list of influences; or a measurement that settles a specific weight. The first would break the gap finding; the second would move that claim to `grounded` rather than refute it, and would be recorded as a new ground reading with provenance.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per child and per concept, never an aggregate norm | general | Fig 1 :19, :22 | figure-derived |
| The social ground is the anchor, not consensus or task score | general | Fig 2 :29, :37, :45 | figure-derived |
| The question is a union of timing and form and three concepts | general | Fig 9 :4, :54, :55, :57 | figure-derived |
| Capability is child-and-habitat, with residual-relative valence | specified | Fig 11 :39, :40, :49, :51 | triangulated F2 |
| Apparent timing shifts can be channel failures | specified | Fig 10 :24, :25; Fig 2 :37 | triangulated F3 |
| Form is carried by bonds; the three concepts are isomers over shared atoms | specified / general | Fig 12 :5, :46, :117; Operators :51, :58 | triangulated F4 |
| Responsibility depends on the refusal operator; break is at the middle link | specified | Fig 3 :19, :25; Operators :73 | single-source F5 |
| New social atoms enter only from differing closures | specified | Fig 6 :21, :23; Fig 8 :45 | triangulated F6 |
| Timing is a handoff chain under historical time and place | specified | Fig 7 :37-39; Fig 13 :11-12 | single-source F7 |
| The specific ages and causal weights | not stated | none after re-census | gap F8 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, Seat Map :287 "And a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following is observed:

1. One number prospectively predicts timing and form across all three concepts per child with no leftover residual and no task or country term (breaks F1, Fig 9 :4).
2. Timing and form are invariant across a habitat substitution that demonstrably changes contact, or an agent-only biological improvement moves the ground (breaks F2, Fig 11 :39-40, :72).
3. A task or channel manipulation leaves measured timing invariant while ground truth is held constant, with no paradigm dependence or publication bias across studies (breaks F3, Fig 10 :24).
4. The three concepts are distinguished only by adding atoms, with no bond difference needed, or a vocabulary without `¬` expresses "it was not an accident" as a positive term (breaks F4, Fig 12 :117, Operators :58).
5. A child passes an independently measured responsibility judgment before mastering the refusal operator, or perception, vocabulary and objective links all measure as working while the failure sits at planning (breaks F5, Fig 3 :25, Operators :73).
6. A new social atom is acquired with no contact with a differing closure, while ground contact still pays (breaks F6, Fig 6 :21, :23).
7. Two cohorts with different transition timing and historical context show identical timing with no channel compensation (breaks F7, Fig 7 :37-39).
8. A re-census yields a figure line that returns a numeric age or a ranked influence list, or a measurement pays for a specific weight (breaks F8, Fig 9 :32).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until an independent social-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of cognitive development (Fig 10 :52, "Bring a characterised residual, never the source").
2. Keep timing and form, and the three concepts, in separate columns. A blended "social understanding score" is a pooled reading (Fig 10 :25) and destroys the diagnostic.
3. At each handoff ask which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat any named influence (parental mental-state talk, schooling, peers, technology) as Γ and habitat conditions whose valence must be tested against the residual, never as the answer (Fig 11 :49-51).
5. Use task-factors and cross-country variance as filters for where to look, not as witnesses for a cause (Fig 9 :60).
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22 "Only methods cross up. Only head starts come down."). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name the age or the winning influence; the framework returns "a kind of thing, never the answer itself" (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched and read 2026-11-22).

- The README confirms: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also confirms the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- The canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops where instruments can no longer distinguish, and records the lineage. This governs F8's stop.
- The source essay confirms the simulation status: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." The metamerism rule from the same essay, "If several paths create the same behavior, then behavior is a projection with lossy information", governs why a task score cannot name its source.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Tried to map agency, intention, responsibility onto energy, gradient, spectrum | **Retracted, strain S1** | Only fit by renaming social concepts as physical terms. Re-census: Fig 13 governs the physical substrate; here it governs only the time state and the honest-stop rule |
| Treated chronological age as a cause | **Narrowed to a parameter** | Age is the ordered succession and a channel quantity (Fig 13 :12, Fig 7 :37-39), not a currency with its own anchor |
| Called "culture" a single cause | **Absorbed into D2/D3** | The ground is reached only through proximal and distal contact; no separate anchor (Fig 11 :40) |
| Wanted to call Fig 11 :39 a general law about all children | **Narrowed to `specified`** | No social-ground measurement in this run pays for the child-level version |
| Read Piaget's shift as the appearance of a new concept | **Corrected to a bond change** | Both attitudes "may co-exist at the same age and even in the same child"; isomer/functional-group reading, F4 |
| Read Wellman et al.'s 55 percent as evidence for a cause | **Retracted as a witness, kept as a filter** | A variance decomposition is frame-internal and a budget instrument (Fig 1 :26-27, Fig 9 :60) |
| Treated the Hare et al. task failure as a limit on chimpanzee cognition | **Reversed at source** | The authors attribute it to task structure, which makes it a channel witness, not a competence claim (F3) |
| Shape-not-a-name applied to a named influence | **Narrowed, kept visible** | The rule governs a *missing* primitive. Naming a held habitat binding is provenance and a candidate, not a forbidden invention; see `05_what_shape_means.md` section 5b |
| F4 called "decisive" in an early draft | **Downgraded to triangulated** | Fig 12 and the Operators table are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log.** S1 (Fig 13 physical substrate applied to social concepts), resolved by re-census to the time state and honest-stop roles. S2 (the social situation updates while the ground does not), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not. S3 (the word "influence" is ordered, while most world evidence is correlational), kept as a live type question: a correlation cannot choose the arrow (Operators :31, sequence is ordered), so the shape predicts an order but does not claim a measured causal weight. No unresolved strain after re-census other than S3, which is named and carried into `06_isomers_and_order.md` and `11_audit.md`.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :4, :55, :57: timing and form are two quantities, and agency, intention and responsibility are three sub-residuals. Split before searching.
2. **What is the anchor?** The independently measured social state, named as legitimate by Fig 2 :36-37 because the question is constitutively about people. Not a task score, not consensus (Fig 2 :45).
3. **Is the answer in the child alone?** No. Fig 11 :39-40. Capability is child-and-habitat; valence flips with the residual (Fig 11 :49-51).
4. **Why does measured timing move?** Partly channel decay: saturated metrics, pooled readings, lost touch (Fig 10 :24-29); task factors and publication bias in the world literature (Wellman et al.; Barone et al.; Hare et al.).
5. **What fixes form?** The bond, not the ingredient list (Fig 12 :5, :46). The three concepts are isomers over shared atoms; culture supplies different bonds over the same atoms (Fig 12 :117).
6. **What sets the order?** The middle link of Fig 3 and the unary refusal operator (Operators :58, :73). Agency, then intention, then responsibility.
7. **What can be said at the stop?** A shape, a union, a dependency order and eight refuters. Not an age, not a list of winning influences. Fig 13 :134 "Unreachable is a verdict here, not a silence," Fig 8 :39 "So a search that finds nothing is never a proof of absence."

---

## 8. Updated verdict

The shape survives. **What influences the timing and form of children's understanding of agency, intention and responsibility is not one list of causes but a union of contact conditions with residual-relative valence: the child's loop sits inside a proximal and distal habitat, new social atoms enter only from closures that differ, measured timing is a compound of genuine contact change and channel decay, form is carried by bonds over a shared atom set so the three concepts are isomers, and responsibility depends on the refusal operator that agency and intention do not need.** Timing is a life-course chain whose handoffs depend on bracket fidelity and ground pressure, not a clock reading. Verdicts are kept separate per domain and never averaged into a single developmental norm. The specific ages and the specific causal weights are a declared `gap` of the shape-not-a-name kind, reported as unreached rather than silence. Mode `specified` on the per-domain claims, `general` on the structural split, not `grounded`. No world source flipped a verdict; the one genuine conflict (Hare et al.'s task failure) was returned to the census and re-mapped to the channel domain. After re-census there is one live type strain, S3, named rather than hidden.
