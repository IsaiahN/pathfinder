# Second-seat audit of the REA-0025 solution

**Mode: `specified`, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same essays, the same public papers, the same folder files. Fig 2 :40 says "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the pool is a mirror with a different name. What follows is a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken. This audit cannot settle the question it audits.

I was given the residual line alone before reading the primary census: "an agent with a per-slot residual can observe or act; decide whether acting is required to settle a causal slot, and what revision costs." I redid the census from that line, then compared.

## Independent domain census

- **R (arity / symmetry / scale).** Arity: several slots, because per-slot residuals cannot be averaged without losing the locating signal (Fig 1 :19). Symmetry: observational data is invariant under relabellings that preserve conditional independencies; an intervention has a target and a direction, so it breaks that invariance. Scale: one agent and one habitat per loop, with a round trip to checkers. This is a **union compound** at the question level, since construct, revise, and intervene are three different effects (Fig 9 :54), not one hard question.
- **Domain 1, control loop.** Actors: agent, b, Gamma, a, o-prime, R per slot. Currency: residual and mint or refusal. Anchor: the ground. Question: partition, does acting enter the loop.
- **Domain 2, bond type.** Actors: variable slots, seven bonds, negation. Currency: terms in closure(Gamma). Anchor: settlement. Question: partition, which bond is causal. I reached this from Fig 12's bond table rather than from the primary's Fig 13 route.
- **Domain 3, revision.** Actors: held terms and their refusals. Currency: the reach, which can fall. Anchor: the ground. Question: partition, negation versus subtraction. I reached this from the formula's fifth gap kind rather than from the Operators table.
- **Domain 4, habitat and capability.** Actors: world, do-operation, instruments. Currency: contact. Anchor: the ground that does not update. Question: partition, where capability lives.
- **Domain 5, verification.** Actors: readers and the packet. Currency: agreement versus residual. Anchor: the ground, never agreement. Question: union of evidence and budget.

Order by dependency: perceive, acquire vocabulary for interventions, state a causal objective, plan the intervention, learn and carry (Fig 3). Refuse before mint. Describe the residual before choosing a frame.

My census has five domains where the primary has four. The difference is that I separated revision (D3) from composition (D2); the primary folded it into a single composition-and-revision verdict. I think my split is more faithful to Fig 5 :53 and the Operators table, where negation is a unary operator and not a bond. This is a **real structural disagreement about granularity, not a verdict conflict.** I carry it forward rather than smoothing it.

## Comparison with primary

| primary finding | my independent check | agreement |
|---|---|---|
| F1 acting is in the loop | Fig 1 :9 includes act; Fig 1 :23 makes the ground the only metric. An observation-only system omits the world-changing operator. | agree |
| F2 cause is an ordered bond | Fig 12 :77 production is ordered; Fig 12 :72 sequence is weaker; two graphs over the same variables are different substances under Fig 12 :117. | agree |
| F3 revision is negation | The formula's refuted kind and Operators table :58 say a vocabulary without negation can only accumulate. Subtraction is an absence of an operand, not a refusal. | agree, and I would grade this stronger than the primary does |
| F4 capability is agent and habitat | Fig 11 :39 is verbatim and Fig 11 :40 makes contact the lever. World corroboration from a different field exists but the figure decides. | agree with single-source status |
| F5 middle link is vocabulary and objective | Fig 3 :26 names this link and its missing instruments. The primary retracted the field-specific "bottleneck" wording; I confirm that retraction. | agree |
| F6 imports can identify a graph | Fig 6 :23 makes import the wall-mover. A functional-form assumption is an imported atom, so observational identification does not refute F2. | agree |
| F7 shape not a name | Fig 9 :32 and the canonical README. The scope narrowing to a missing primitive is correct. | agree |
| F8 agreement is not a witness | Fig 2 :40, Fig 7 :13, Fig 9 :60. I add that seven ML sources plus one essay share one pool. | agree |
| F9 synthetic solve is wiring | Fig 11 :70. The world sources themselves describe synthetic evaluation. | agree |

No verdict conflict. Because we share an evidence pool, that agreement is expected and carries no independent weight. The one granularity disagreement (D2 versus D2 plus D3) is recorded above.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these character by character before relying on them. Each is a primary quote, none taken from a summary.

- Fig 1 :9 "perceive · plan · act · predict" checked.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :23 "The ground enters as the only metric." checked.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the leading clause is part of the whole line.
- Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so" checked.
- Fig 6 :42 "A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted." checked.
- Fig 11 :39 "And capability is a property of agent-and-habitat, never of the agent alone." checked.
- Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." checked.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.
- Fig 12 :77 "A produces B; B did not exist before" checked against the bond table at :77 and the Operators table at :37.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." checked.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked; the source line carries an arrow before the phrase, so the quotation begins at "you".
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.

All checked lines are present verbatim in the extract. No quote drifted.

## Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E composed with T_A)(x))`. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :9 and :23 (action in the loop, ground as metric), Fig 12 :77 and :111 (ordered production, bonds carry the route), Fig 5 :53 (refusal), Fig 11 :39 and :40 (agent and habitat).
2. **Abstraction (T_A):** the shorthand carried in `07` and `09`, namely acting is required, cause is an ordered bond, revision is a refusal, capability is agent and habitat, no architecture is named.
3. **Concretisation (T_E):** the concrete world claim that a particular trained system with a particular intervention policy has this capacity, as measured on a benchmark.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **quality of the action**. Fig 5 :12 sorts "new: extend perception, aim the probe here" from merely firing the machinery; Sobel and Sommerville (2010) found that not all self-generated action is equivalent. A shorthand that says "acting is required" loses the constraint that the action must be informative.
- the **status of the ground**. Fig 2 :29 allows an experiment or measurement as an anchor; RLVR-style verifiable rewards are one instance. Replacing the anchor with an average prediction score changes what is settled, and the shorthand does not record that substitution.
- the **unauthored habitat**. Fig 11 :70 says a substituted habitat proves wiring only. Most interventional discovery evaluations are simulators, so the world claim that survives the trip is weaker than the figure claim.

Conversely, one thing survives cleanly: a live per-slot residual cannot be closed by observing alone when the discriminating input is an intervention. That is the residue worth sending.

R_T was **not** measured numerically, because no ground reading exists. It is recorded qualitatively as the enumerated set of dropped constraints. Treating "the figures and the formula are the same thing in fewer words" would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a recorded gap, which is what `09_watson_answer.md` states.

## Strains and re-census

- **Fig 1 ground as RLVR versus causal discovery's lack of a scalar score.** Re-census resolves it: Fig 1 :6-7 names one anchor for one loop, while Fig 2 :29 defines an anchor generically. RLVR is an instance, not a restriction. Different objects, so no contradiction.
- **Fig 6 import moves the wall versus observational identification.** Re-census resolves it: the functional-form assumption is the imported atom, not the data. No strain.
- **The action quality strain.** Live and named. The figures say action changes contact; they do not grade actions. Fig 5 :12 and the psychology source supply the grading, which is world detail. I keep it as a strain on the application, not on the figure.
- **The granularity disagreement D2 versus D2 plus D3.** Live, recorded in the census above. No verdict changes; the revision verdict is simply given its own domain in my reading.
- **After re-census: two live strains, both named, none hidden, zero figure contradictions.**

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files are consistent with one another and with the verbatim figure text. The pre-registered refuter was written before the conclusion and is specific enough not to fire on imported functional-form assumptions. The retraction table is applied rather than ignored: the empirical "bottleneck" claim is retracted, the scope of "shape, not a name" is narrowed, the two apparent figure strains are dissolved by re-census, and the import case has its own finding. `09_watson_answer.md` carries the full WATSON shape with all required verdict fields; `10_source_ledger.csv` lists every source actually read with accessed date 2026-11-23 and local paths where applicable; this file records the independent check.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is internal consistency, not truth.

**On the claim: `specified`, ungrounded, candidate.** The shape survives: acting is in the loop, cause is an ordered bond discriminated by intervention, revision is refusal, and capability is agent plus habitat. What does not survive as a claim is any named system, any benchmark number, or any assertion that observation alone is useless. The ground gap is at the instrument level, and it is reported rather than filled.

**Recommendation.** Send the packet with mode, refuters, and the round-trip gap attached. Ask what would refute the shape, record the answer before showing any theory, and do not pool later agreement as corroboration. Keep the shape claim and its refuter in front of the links.
