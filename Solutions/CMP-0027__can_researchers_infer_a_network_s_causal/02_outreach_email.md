# Outreach draft: check the shape claim before you decide about the framework

**Use:** one to one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the sub-claims in `08_expert_verification_packet.md` have been checked against `01_figure_grounded_audit.md`. If the shape claim does not survive validation, the two-stage offer collapses on contact.

---

**Subject:** One checkable claim about causal inference from partial network correlations

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to read a framework first, and I am not asking you to agree with anything. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** from a correlation reading over a partially measured network, a unique directed causal graph is not recoverable. What is recoverable is a narrowed class of structures compatible with the reading, plus an explicit statement of the extra readings that would discriminate within that class. The reason is structural, not statistical. A correlation matrix is symmetric in its node pairs; a causal influence is an ordered bond. Two different directed networks can induce the same correlations and behave differently under an intervention. Add an unmeasured common cause and two nodes can agree without influencing each other at all.
>
> **What I am not claiming:** that causal inference from observational data is impossible. Constraint-based methods and identification results over equivalence classes can narrow the class, and I would like to be corrected if I have understated that. I am claiming that the unique name is not owed by the reading, that agreement among correlation-only methods is one evidence pool, and that more search at the same reach cannot supply a node that was never measured.
>
> **What would refute the claim, written before this message:**
> 1. a symmetric co-variation reading over measured nodes determines a unique ordered bond with no intervention, no extra measurement and no imported assumption;
> 2. adding a formerly latent common cause to the measured set leaves the equivalence class and all interventional predictions unchanged;
> 3. a panel of correlation-only estimators predicts holdout interventional outcomes better than chance and better than its own calibration, while drawing on the same data;
> 4. an algorithm using only the same reading and node set reduces the class to a unique directed graph without an assumption hidden in its objective.
>
> If any holds, I will retract or narrow the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures, not my summary of them, are the authority.
> - Verbatim figure text with line numbers (local extract): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Figures folder and canonical README: https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Worked causal-inference framing (SEP): https://plato.stanford.edu/entries/causal-models/
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state whether your claim is `general`, `specified` or `grounded`. A reported failure is more useful to me than a reported success.
>
>  -  Isaiah

---

## Why this version is ordered this way

| the move | reason |
|---|---|
| Output first, theory second | Fig 10 :52  -  *"Bring a characterised residual, never the source."* The recipient checks the claim without holding the framework's interior. |
| Do not ask for agreement | Fig 2 :35  -  *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Fig 5 :65 *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."* |
| Mode stated on every substantive claim | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| Non-claims stated before links | Fig 8 :50 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*; the reader knows what is not being asserted. |
| Shape, not a name | figures README: *"a shape, not a name"*; Fig 9 :32 *"you get a kind of thing, never the answer itself"*. The email never presents a single graph as the answer. |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Offer the formula as a method, stage 3 | Fig 4 :22 *"Only methods cross up. Only head starts come down."* |
| Ask each user for their own ground and refuter | Formula "Direction": a frame cannot check the direction of its own question; the RSI Trap: *"the output is only as good as the validator."* |

Note on tone: the exemplar's email was written in the first person by the framework's author. This draft keeps that voice as a template. Whoever actually sends it must replace the signature and must not imply that a simulated derivation is a measurement.
