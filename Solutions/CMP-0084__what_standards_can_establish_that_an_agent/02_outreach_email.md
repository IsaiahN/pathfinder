# Outreach draft: check the discriminating criterion before deciding about the standard

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim in `01_figure_grounded_audit.md` §3 and §12 has been checked against the figures by the reader. The offer only works if the stage-1 claim survives.

---

**Subject:** What would count as a failure of an agent-based model's empirical grounding?

> Hi [name],
>
> I have one specific output I would like you to check against what you already know about model validation. I am not asking you to read a framework first, and I am not asking you to agree with anything. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** most of what a modelling paper calls validation checks properties of the model itself. Code runs, ODD is written, the model reproduces a stylised fact, reviewers approve. Those are gates on auditability. They do not, by themselves, establish that the model is in contact with the world. The claim I want checked is that a standard establishes empirical grounding only if it does all of the following:
>
> 1. names an anchor that does not change its answer when the model is re-calibrated;
> 2. reports the residual per slot (per agent, subgroup, time window, outcome) rather than only as an aggregate fit;
> 3. disqualifies quantities the model produces about itself (coverage, compression, rule count, badges, prestige) as evidence of grounding;
> 4. requires low-overlap evidence, so calibration data is not reused as validation data and the checker has not been shown the model's interior;
> 5. requires a discrimination test where a different mechanism could produce the same output;
> 6. records a lineage: what calibrated what, what was held out and when, and which refuter was written in advance.
>
> There is a real-world analogue I would like you to test this against. The CoMSES Net computational model peer review checklist grades ease of execution, documentation, and code quality, and explicitly states that reviewers are not required to assess the validity of model outputs. That is a good gate. By the criterion above it is not a grounding standard. Is that distinction right, in your field?
>
> **What I am not claiming:** that ODD, TRACE, FAIR metadata, code review, or sensitivity analysis are worthless. They are necessary gates and I use them. I am claiming they are filters for the budget, not witnesses for the verdict. No standard here certifies completeness. A model is grounded only to the resolution of the instruments brought against it, on the slots named, as of a date.
>
> **What would refute the output (written before sending this):**
> 1. a standard whose passing changes a model's contact with the world and whose criteria contain no self-produced quantity;
> 2. a claim about a model where a single aggregate statistic is sufficient and no slot carries a live residual;
> 3. a dataset that settles the question while provably not moving when the model is re-calibrated;
> 4. two checking frames with no shared evidence or author whose agreement demonstrably adds no evidence.
>
> If any holds, the output is wrong and I will withdraw it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the sources. The figures, not my summary, are the authority.
> - Empirical validation of agent-based models (Windrum, Fagiolo, Moneta, JASSS 2007): https://www.jasss.org/10/2/8.html
> - CoMSES Net model peer review criteria: https://www.comses.net/reviews/
> - Models in Science (Frigg and Hartmann, Stanford Encyclopedia of Philosophy): https://plato.stanford.edu/entries/models-science/
>
> **If you want to use the machinery:** the eight-step formula is in the figures link. Run it on a modelling problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output and refuter first, sources last | Fig 10 :52 "Bring a characterised residual, never the source." Fig 2 :45 "Frames range against the ground. They do not negotiate with it." |
| Do not ask for agreement | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | Seat Map :287 "a falsifier written before the run is a design instrument, not only an honesty device." |
| Mode stated on the substantive claim | THE_FORMULA mode rule: "Mode. general · specified · grounded. State which." |
| No claim that a badge settles grounding | Formula step 5: "A gate is not the ground." Fig 9 :60 "Never let a filter hand you a verdict." |
| Per-slot residual demanded | Fig 1 :19 "The residual is indexed by object slot, not aggregated." |
| Low-overlap evidence demanded | Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." |
| Verifier non-access | Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." |
| Real CoMSES example rather than an accusation | It is a public, checkable record, so the reader can confirm or refute the distinction in five minutes. |
| No prestige ask | *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Standard named as a gate, not a final answer | Fig 9 :32 "you get a kind of thing, never the answer itself." |
| Offer the formula as a method to reuse | Fig 4 :22 "Only methods cross up. Only head starts come down." |
| Ask users to state their own ground and refuter | Formula "Direction": a frame "cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds." |
