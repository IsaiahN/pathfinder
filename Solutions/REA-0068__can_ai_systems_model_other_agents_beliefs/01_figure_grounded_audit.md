# Figure-grounded audit: REA-0068, modelling other agents' beliefs

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o′|` per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is a belief. The Symbols table defines it as *"What the system takes to be the case before it acts. Formed from its own history and from what it inherited, mixed by w. Not the observation."* The phrase *"Not the observation"* is the pivot of the whole question: a belief is a latent that produces behaviour, not the behaviour itself.
- **w** is the weighting: *"How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings. Two frames with identical architecture diverge because their histories and their w diverge."* (Symbols table, `w`). The model and the agent are two frames with different histories and different `w`. Their identical architecture, if any, does not make their latents the same.
- **a** is action. For the other agent it is what it does. For the AI system it is the attribution it emits: "she believes the marble is in the basket," "he intends to leave."
- **Γ(b,a)** is what a library predicts will happen given belief and action.
- **o′** is what actually happened. For the AI's prediction task, o′ is the other agent's observed behaviour and utterances.
- **s** is the slot. There are two indexings: per other agent, and per mental-state slot inside an agent. R is never averaged over them.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain: a system can drive the gap between its predicted behaviour of an agent and that agent's observed behaviour toward zero while remaining wrong about the belief or intention that produced the behaviour. Call this `P0U`: prediction near zero, understanding absent. A frame that predicts perfectly and one that understands perfectly have the same behavioural reading, so a behavioural reading cannot discriminate them. State the residual as: *under what condition does a small behavioural residual license a claim about another agent's latent belief or intention, and what instrument would discriminate two latents that yield the same behaviour?* This is an effect description. It names no theory, no "theory of mind," no "simulation," no "emergence." Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (C1) a condition under which low behavioural R licenses a source attribution, (C2) a condition under which it does not, and (I) an instrument that discriminates sources behind a common reading. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :36 adds the rule that decides which candidate is legitimate: *"An anchor is legitimate when the question is constitutively about it."* Fig 2 :37-38: for a question constitutively about people, human judgment is the right anchor, but for a code-correctness question it is *"only an instrument"*, and *"instruments can be wrong on axes they do not measure."*

Apply the rule to each half of REA-0068:

- The question "does the model predict this agent's behaviour?" is constitutively about behaviour. Held-out behaviour o′ is a legitimate anchor. Prediction is well posed.
- The question "does the model understand this agent's belief?" is constitutively about a latent that is *"Not the observation."* Held-out behaviour is only an instrument for it. No anchor that does not move when the model's own frame updates is available for real agents here. So understanding, as a claim, has no nameable anchor yet: it is not a domain yet (section 1.2, X1). This is not a claim that understanding is impossible. It is a claim that this question's two halves do not share an anchor, and using one anchor for both is the named mistake of Fig 2 :36-38.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among at least four operands: the model's library Γ_model, its belief b_model and emitted action a (the attribution), the other agent's behaviour o′, and the other agent's own latent b_agent, which is not in o′. It is indexed by slot s and ordered by time t. It therefore carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72), since belief precedes action; and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87), since "predicted" is compared with "observed." It is not a symmetric set of ingredients.
- **Symmetry.** Not symmetric. The model can observe o′ but not b_agent, while the agent has access to its own b_agent. The two frames are not interchangeable. Fig 2 :25 describes the anchor as *"pinned: it does not update on A or B"*; a latent that updates when the model changes its attribution is not an anchor.
- **Scale.** Two scales are in view. At one scale the other agent runs its own step loop: perceive, plan, act, predict, with a residual against its own world. At the other scale the model runs a loop about that agent, using the agent's behaviour as its o′. Fig 4 :19-20: *"The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."* The membrane between the scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30). Critically, behaviour crosses the membrane; the belief does not, because the belief is not an observation.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The model's prediction loop** | model Γ, b_model, emitted attribution a, observed agent behaviour o′ | residual reduction per agent-slot | yes: held-out behaviour o′, constitutively about behaviour | admitted |
| **D2 The agent's own loop** | agent Γ_agent, b_agent, w_agent, a_agent | reduction of the agent's own residual against its world | yes, for the agent: its own ground. But its interior is not observable from D1; only o′ crosses | admitted structurally; interior reached only through D3 |
| **D3a The frame boundary, synthetic case** | two frames plus a recorded latent ground truth in simulation | what crosses the boundary: behaviour versus latent | yes: an experimenter-controlled latent state with recorded ground truth (as in gridworld ToM agents) | admitted, with anchor |
| **D3b The frame boundary, real-agent case** | two frames, human or other real agent | same currency, no recorded latent | **no** anchor that does not update with the model's own frame | not a domain yet for the understanding claim |
| **D4 The verification frame** | outside checkers, benchmark designers, experiments | agreement and residual | yes: the ground, never agreement (Fig 2 :35); benchmark ground truth where it exists | admitted |
| **X1 "Understanding" as a free-floating property of a model** | the model, a label applied to it | insight, grudging respect | no anchor independent of a source-discriminating instrument | not a domain yet |
| **X2 "Theory of mind" as the answer** | a vocabulary item from cognitive science | a name | already absorbed into D1/D3 vocabularies; it names a frame, not a ground | absorbed, not separate |

X1 and X2 are excluded before any figure line is applied to them. This is a structural exclusion, not a claim that understanding never occurs.

### 1.3 Partition or union

D1 and D3 overlap: the model's library is what builds the attribution about the other frame, so their overlap is a compound with its own loop. D2 and D3 overlap: the agent's own loop is what generates the behaviour that crosses the boundary, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) behavioural prediction is good, meaning R against o′ is small per slot; (C2) source attribution is right, meaning the model's latent tracks the agent's latent under controlled variation. A model failing only C1 and a model failing only C2 are not different degrees of one failure. They need different instruments: held-out behaviour for C1, a source-discriminating manipulation for C2. A single benchmark score clears the region where only C1 holds and leaves the intersection standing (Fig 9 :55). The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the model read the agent's behaviour at all?) → 2 vocabulary (does Γ_model have terms for belief and intention, and does it have a pose from which to run a frame transform?) → 3 objective (can it say what would count as progress: behavioural accuracy, or source discrimination?) → 4 planning → 5 learn and carry. The middle link, having terms for what a mental state affords and saying what would count as progress on it, is the one with no instrument. Fig 12 :112-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most evaluation effort lands above the break, on accuracy, because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and what cannot count as a witness |
| 2 The Ground | anchor must be legitimate for the question; independence vs common pool | decisive for splitting prediction from understanding |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs the two-scale reading and what crosses |
| 5 Mint Pipeline | three guards as product; "nothing new here"; persistent flat residual | governs what a new latent term would cost |
| 6 Closure / Reachability | import is the only operator that moves the wall; proto-instrument rule | governs access to the other frame's latent |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs iterative attribution and benchmark agreement |
| 8 Union Surplus | idempotence; provenance separates convergence from import | governs why two models agreeing is one witness |
| 9 Leave / Arrive | union vs partition; describe the residual before choosing a frame | governs the unbundling and the census itself |
| 10 Ground Maintainer | verifier non-access; ground does not decay, channel does | governs who may check a "understanding" claim |
| 11 The Habitat | capability is agent-and-habitat; intelligence as an afterwards label | governs what "understanding" can mean |
| 12 The Bond | bond carries the missing information; isomer; catalyst | governs why behaviour underdetermines the latent |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop, not a mental-state ontology |
| Operators table | sequence, comparison, negation | governs ordering and the refusal move |
| Symbols table | `b` is not the observation; `w` diverges; no known transform between frames | decisive for the structural barrier |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to belief, intention and attention only fit by calling a belief a kind of energy and an intention a kind of gradient. That is a strain, so Fig 13 does **not** govern mental-state terms. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). A second strain, treating "there is no known transform between two of them" (Symbols table) as an in-principle impossibility, was narrowed to a structural limit of the held figure set (strain S2). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable claim about AI systems, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Prediction and understanding are different quantities with different anchors (decisive)

**Mode: `general` for the anchor rule, `specified` for its application. Domains D1, D4. Status: triangulated (Fig 2 and Fig 1, low overlap: anchor legitimacy vs per-slot residual).**

> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."** (Fig 2 :38)
> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

Prediction is constitutively about behaviour, so held-out behaviour is its anchor and it is well posed. Understanding is constitutively about a latent that the Symbols table says is *"Not the observation."* Behaviour is only an instrument for the latent question, and instruments can be wrong on axes they do not measure. Using the prediction anchor to settle the understanding question is the specific mistake. It is also a frame scoring itself with a quantity it produces: the model generates both the attribution and the accuracy score.

**Refuter:** a controlled experiment in which benchmark accuracy on mental-state questions is shown by an independent ground to discriminate two latent sources that produce the same behaviour. If it does, the anchor split collapses and F1 is false.

**World bearing (secondary only):** Pang et al. 2025, a letter in PNAS, write that *"successfully solving isolated ToM tasks is insufficient evidence to indicate the presence of ToM"* and urge *"a cumulative case based on converging evidence."* Bender and Koller 2020 write that *"a system trained only on form has a priori no way to learn meaning."* These corroborate the anchor split from two different fields, but neither decides it.

### F2: The source is not in the reading

**Mode: `general`. Domains D1, D3. Status: triangulated (Fig 12, Fig 9, and the Symbols table, low topical overlap).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"your words are borrowed too, so describe the effect"** (Fig 9 :30), **"rather than the cause"** (Fig 9 :31)

An observed behaviour is the ingredients. The belief and intention are the arrangement that produced it, and the arrangement is *"the half nothing was recording."* Two different latent states can be isomers under Fig 12 :117: same observable atoms, different bond, different substance, with the difference invisible in the behaviour formula. The essay *The Hard Problem is About Source* states the same structure as metamerism: *"You can have several underlying causes that create identical readings but the definition of the output would be read as the same"* and *"If several paths create the same behavior, then behavior is a projection with lossy information"*. A model that reads behaviour and names the source commits exactly this error.

**Refuter:** a behaviour reading from which the latent source is uniquely recoverable under a declared code, demonstrated on at least two latents that produce the same behaviour. If the reading is injective in the source, F2's underdetermination claim fails for that domain.

### F3: The model stays in its own closure; access to the latent is an import problem

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8, Fig 4, distinct roles).**

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"What is unavailable is a sensor for something that has never registered anywhere, at any resolution. That is the whole of it."** (Fig 6 :40)

A model trained only on the behaviour of others can compose inside its library forever and never add the other frame's atom. Two routes are distinguished, and they are opposed (Fig 6 :31): **inward**, *"is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."* (Fig 6 :29); and **outward**, *"does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* (Fig 6 :30). For synthetic agents, outward contact is available: the experimenter holds the latent as ground truth and can import it. For real agents, the import is owed and no source gate has been supplied. A latent that has never registered at any resolution is not reachable by refining the behaviour sensor.

**Refuter:** a demonstration that a model added an atom corresponding to the agent's latent purely by internal composition, with no contact with a differing closure and no ground-truth latent ever entering the loop. That breaks idempotence and F3 with it.

### F4: The frame transform has no pose

**Mode: `general`. Domain D3. Status: single-source (Symbols table, `F` and frame entry), corroborated at low overlap by Fig 4's lossy membrane.**

The Symbols table defines `F` as *"the frame transform"*, *"The map between allocentric and egocentric at one scale. Distinct from T_A and T_E, which run between scales. Cannot be run without a pose."* The frame entry says a frame is *"any bounded system with a library: an agent, a person, a discipline, a model... frames differ in what they can express and not in how they label it, and there is no known transform between two of them."*

To model another frame's latent, a system would need to run F from that frame's coordinates into its own. The figure says F cannot be run without a pose, and no transform between frames is known. This is a structural barrier in the held figure set, not a proof of metaphysical impossibility: a pose-bearing transform could be found, and that is exactly what a refuter would look like. The statement is `general` about the framework and `specified` about any particular system.

**Refuter:** exhibit a transform between two frames that (a) does not require a pose, or supplies one from ground, (b) maps the agent's latent into the model's representation, and (c) is checked against the agent's ground rather than the model's output. Any one of these firing breaks F4.

### F5: Agreement and benchmarks are budget filters, not witnesses

**Mode: `specified`. Domain D4. Status: triangulated (Fig 7, Fig 2, Fig 9, low overlap).**

> **"same closure, handed along;"** (Fig 7 :12), **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A leaderboard is a room. Two models that pass the same ToM benchmark draw on the same corpus and the same benchmark design, so they are *"one frame wearing two names"* (Fig 8 :49). Sclar et al. 2023 report that their symbolic method *"reveals spurious patterns in existing theory of mind benchmarks, emphasizing the importance of out-of-distribution evaluation and methods that do not overfit a particular dataset."* Sap et al. 2022-2023 find that *"even ChatGPT and GPT-4 do not display emergent Theory of Mind"* and that GPT-4 reaches only 60 percent accuracy on ToMi questions about mental states and realities. These are measurements of C1 on a particular room, not witnesses for C2.

**Refuter:** a benchmark result that predicts, prospectively and out of distribution, which agent-slot will have its latent attribution wrong under a controlled latent manipulation. If a single score does that, F5's methodological consequence is false.

### F6: The model cannot verify its own understanding

**Mode: `general`. Domain D4. Status: triangulated (Fig 10 and Fig 1, low overlap: checker non-access vs frame-internal scoring).**

> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)
> **"Soundness requires the checker to be unable to produce what it is checking."** (Fig 10 :43)
> **"Bring a characterised residual, never the source."** (Fig 10 :52)
> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** (Fig 10 :59)

A model that emits an attribution and then grades its own attribution is producing what it is checking. Fig 9 :51 states the admissibility rule: *"evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it"*. The first contact with an outside checker therefore carries the residual and the refuter, not the architecture and not the claim that the model understands.

**Refuter:** a sound verification procedure in which the checker can reconstruct the attribution yet the verification still has ground-backed force, demonstrated on a case where a wrong attribution is detected. That breaks the non-access requirement and F6 with it.

### F7: Iterative attribution must be selected against the surfaced residual, not repeated

**Mode: `specified`. Domain D1. Status: triangulated (Fig 7 and Fig 5, low overlap: room selection vs residual ranking).**

> **"the next room is picked against the residual the last one surfaced"** (Fig 7 :25)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37), **"the bracket's fidelity across the handoff"** (Fig 7 :38), **"the ground's pressure on the room"** (Fig 7 :39)
> **"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"** (Fig 5 :59)

Updating an attribution after each new behaviour is a chain of handoffs. Progress requires both a bracket that still matches the residual and ground pressure. A system that keeps re-emitting the same mental-state label because it fitted the training behaviour is booking a room like the last one: motion, no progress (Fig 7 :32). Fig 5 :59 gives the refusal rule: the mental-state term whose residual persists and does not trend down is the one to point a refusal at. Refusing a held attribution is a negation, not a new bond (Formula, "Negation").

**Refuter:** a documented system whose attributions are selected against newly surfaced surprising behaviour with both factors measured nonzero, and whose latent accuracy nevertheless does not improve. That would falsify the two-factor reading for this domain, though not the dependency order.

### F8: "Understanding" is a label applied afterwards to a lineage that met its ground

**Mode: `general`. Domain D4. Status: triangulated (Fig 11 and Fig 10, low overlap: habitat capability vs ground maintainer).**

> **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."** (Fig 11 :36)
> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."** (Fig 11 :73)

"Understanding" applied to a model on the strength of its outputs is the same kind of label. What can be asked is what makes the system-and-habitat capable of tracking another's latent: what contact, what instrument, what ground truth. A bigger model with the same contact is an agent-only improvement (Fig 11 :40). The macaque study by Schwob et al. 2025 corroborates the habitat point at low overlap: two species with *"divergent temperament"* nonetheless showed *"similar success in each social task"* and *"similar social cognitive capacities may evolve in distinct social contexts."*

**Refuter:** a controlled case in which a system's latent-tracking capability changes while its contact and habitat are held fixed. That would refute the capability claim of Fig 11 :39-40 as applied here.

### F9: Conflict handling, and what the world sources actually predict

**Mode: `general`. Status: figure-governed; no conflict required a verdict flip.**

World sources split into two pools.

- **AI and NLP ToM (one pool, several papers).** Rabinowitz et al. 2018 define ToM as *"humans' ability to represent the mental states of others, including their desires, beliefs, and intentions"* and build a ToMnet that uses *"meta-learning to build models of the agents it encounters, from observations of their behaviour alone."* That phrase is precisely C1: a model from behaviour alone. Its success corroborates the prediction half and says nothing about the source half. Pang et al. 2025 go further: *"attributing ToM to LLMs may be premature until simpler explanations can be ruled out and a cumulative case based on converging evidence can be made."* Sclar et al. 2023 show that an explicit symbolic tracker improves benchmark scores while revealing *"spurious patterns in existing theory of mind benchmarks."* Sap et al. show that scale alone did not produce ToM. These are four papers in overlapping citation and benchmark space, so they are one witness on independence grounds (Fig 2 :31), not four.
- **Low-overlap fields.** Bender and Koller 2020, from formal semantics, write that *"a system trained only on form has a priori no way to learn meaning."* Schwob et al. 2025, from comparative primatology, report that macaques passed knowledge and goal attribution tasks but that *"there is currently no evidence that macaques show this skill"* for false belief, which is exactly Fig 6 :40's proto-instrument rule: no reading has ever registered, so no refinement is owed. The Wikipedia reference entry for theory of mind states the structural fact plainly: *"the behavior of the other person... is the only thing being directly observed; no one has direct access to the mind of another, and the existence and nature of the mind must be inferred."*

No world source conflicts with the figure verdict. The one apparent tension, Rabinowitz's working ToMnet versus Fig 6 :21, is resolved by re-census: the ToMnet's latent is learned from behaviour inside a gridworld closure where the experimenter controls the agent's parameters, so it is a D3a case with an anchor, not a D3b case without one. It corroborates the gap being closable in simulation, not the claim that it is closed for real agents.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per agent-slot, never a benchmark average | general | Fig 1 :19, :22 | figure-derived |
| The anchor must match the question | general | Fig 2 :36, :38 | figure-derived |
| Behaviour underdetermines the latent source | general | Fig 12 :5, :117; Symbols `b` | figure-derived + essay |
| Access to a latent is an import or instrument problem | specified | Fig 6 :21, :23, :29-30, :40 | triangulated F3 |
| No known pose-free transform between frames | general about the framework | Symbols `F`, frame entry | single-source F4 |
| Agreement and benchmarks are filters, not witnesses | specified | Fig 7 :12, :13, :35; Fig 2 :42; Fig 9 :60 | triangulated F5 |
| A model cannot verify its own understanding | general | Fig 10 :42, :43, :52 | triangulated F6 |
| Iterative attribution needs room selection against residual | specified | Fig 7 :25, :37-39; Fig 5 :59 | triangulated F7 |
| "Understanding" is an afterwards label on a lineage | general | Fig 11 :36, :39-40, :73 | triangulated F8 |
| The agent's actual belief, for real agents | not stated | none | gap: no nameable anchor, no source-discriminating instrument held |

### F11: The question is a union, and the gap is at the instrument boundary

**Mode: `general`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, framework-internal so one witness).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. C1 (prediction) and C2 (source attribution) have different instruments, so they are kept separate in `09_watson_answer.md` and never averaged. The missing thing is not a new name for a mental state. It is a source-discriminating instrument, characterized in effect terms: an intervention that varies the latent while holding behaviour fixed, with ground truth recorded by a checker that cannot reconstruct the model's attribution. For synthetic agents this instrument exists (D3a). For real agents it does not (D3b), so the honest verdict for that domain is `gap`, with the test stated so a world check can close it.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A controlled latent-manipulation experiment on **real** agents in which behaviour is held fixed, the latent is varied with independently recorded ground truth, and a model's attribution tracks the latent above chance while remaining invariant to the behaviour. This closes D3b and falsifies the gap.
2. A pose-free frame transform, or a pose supplied from ground, that maps the agent's latent into the model's representation and is checked against the agent's ground (breaks F4).
3. A single behavioural accuracy score that prospectively predicts which named agent-slot will be misattributed under out-of-distribution latent variation (breaks F1 and F5).
4. A verification procedure in which a checker that can reconstruct the attribution still produces ground-backed verification of a wrong attribution detected (breaks F6).
5. A system whose latent-tracking capability changes while its contact and habitat are held fixed (breaks F8, Fig 11 :40).
6. Figure-level: derive the frame transform from the loop, or show composition inside a closed set adding an atom, or derive one of the six substrate terms from the other five (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a source-discriminating instrument has paid for the shape at the agent's ground.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of mind (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep prediction and understanding in separate columns in every report. A blended "ToM score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each evaluation, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund accuracy improvements above a broken source-discrimination link.
4. Treat any claim that a model "understands" as Γ, a candidate library whose reach must be tested against a source-discriminating ground, never as the answer (Fig 1 :27).
5. Use the ToM literature as one budget filter and one corroborating witness, not as the verdict. Rabinowitz, Sap, Sclar and Pang share an evidence pool (Fig 2 :31, :40).
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name the agent's actual belief from a behaviour reading; the framework returns *"you get a kind of thing, never the answer itself"* (Fig 9 :32), and the essay says the answer is *"unreached until a better instrument exists."*

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all opened 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Planned to name "theory of mind" as the answer to REA-0068 | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer; "theory of mind" is a frame label, not a ground |
| Applied Fig 13 six-term substrate to belief and intention | **Retracted, strain S1** | Only fit by renaming beliefs as kinds of energy. Re-census: Fig 13 governs the physical substrate, not a mental-state vocabulary |
| Read "no known transform between two frames" as in-principle impossibility | **Narrowed, strain S2** | It is a structural limit of the held figure set. A pose-bearing transform is a live refuter, so F4 is framework-general, not metaphysical |
| Treated Rabinowitz's ToMnet as evidence of machine understanding | **Retracted as a witness for C2** | Its own abstract says it builds models *"from observations of their behaviour alone"*: a C1 result. Reclassified as D3a corroboration |
| Treated GPT-4 benchmark performance as a verdict on understanding | **Retracted as a witness, kept as a filter** | Fig 9 :60; Sap et al. report 60 percent on ToMi, which is a room score, not a source discriminator |
| Read "instruments can be wrong on axes they do not measure" as applying to people only | **Narrowed to the anchor rule** | Fig 2 :36-38 makes it a general rule about question types: match the anchor to what the question is constitutively about |
| Called the "no anchor" case for real-agent understanding a proof of impossibility | **Marked `gap`, not impossibility** | Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 2 and Fig 1 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to mental-state terms), resolved by re-census; S2 (no-transform claim read as metaphysical), narrowed to framework-general and kept refutable. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of prediction (C1) and source attribution (C2), each with its own anchor and instrument.
2. **What is the anchor?** For C1, held-out behaviour, named legitimately because the question is constitutively about behaviour (Fig 2 :36). For C2, none is nameable for real agents; a recorded latent is available only in synthetic D3a cases.
3. **Is the belief in the behaviour?** No. Symbols `b` is *"Not the observation."* Fig 12 :5 says the bond is the half nothing was recording. The latents are isomers invisible in the reading (Fig 12 :117).
4. **Can the model reach the other frame's latent?** Only by a differing closure or an instrument (Fig 6 :23, :29-30, :40). Composition in its own closure cannot add the atom.
5. **Is there a transform?** Not without a pose, and none is known between frames (Symbols `F`). The claim is framework-general and refutable.
6. **Does agreement help?** No. Rooms hand along the same closure and agreement compounds while evidence does not (Fig 7 :12-13, :35-36). Benchmarks are filters for budget (Fig 9 :60).
7. **Can the model check itself?** No. A verifier that can reconstruct the claim cannot verify it (Fig 10 :42).
8. **What can be said at the stop?** A shape with two conditions, a source-discriminator requirement, and five plus one refuters. Not the agent's actual belief. *"Unreachable is a verdict here, not a silence"* (Fig 13 :134).

---

## 8. Updated verdict

The shape survives: **behavioural prediction and source attribution are different quantities. Prediction is well posed with held-out behaviour as its anchor; understanding, as a claim about a latent that is not the observation, has no such anchor for real agents unless a source-discriminating instrument is supplied.** The model stays in its own closure, the frame transform needs a pose that is not held, and convergent derivation from behaviour and a genuine latent model look identical in their outputs and are separated only by the record (Fig 8 :51). So a near-zero behavioural residual can coexist with a wrong latent attribution, and mistaking the first for the second is the specific forbidden move. For synthetic agents with recorded ground truth the gap is closable in principle; for real agents it is declared `gap`. Mode `specified`, with the anchor rule at `general`. No world source was allowed to flip a verdict. No unresolved strain remains after re-census.
