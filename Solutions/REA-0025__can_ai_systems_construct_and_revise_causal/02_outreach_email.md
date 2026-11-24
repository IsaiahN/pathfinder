# Outreach draft: check the output before you decide whether the framing is worth reading

**Use:** one to one, or as a cover letter attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** the residual and the refuter must survive contact. If the checker cannot agree on what would count as a failure, there is nothing else to look at.

---

**Subject:** One claim about causal learning that I would like you to try to break

> Hi [name],
>
> I am working on a question in causal model learning and I have one specific output I would like checked against what you already know. I am not asking you to read any theory first, and I am not asking you to agree. If the output does not survive, there is nothing further to look at.
>
> **The residual, in effect terms.** An agent holds a library of terms, a belief, a per-slot prediction error, and an action. Observation gives it what happened. Intervention gives it a changed world, because setting a variable changes what can happen next. The question is whether acting on the system is required to settle a causal slot, or whether passive observation is enough. I am keeping two verbs separate: constructing a causal term is composing a new relation; revising one is refusing a relation already held, not merely reweighting it.
>
> **The output (`specified`, not `grounded`).** My reading of the framework says four things. First, acting is already a first-class operator in the loop, so an observation-only system is running an incomplete loop and a live causal slot will keep registering. Second, cause is represented by an ordered production bond, "A produces B; B did not exist before", which is not the same as the sequence or association bond that observation can supply. Third, revision needs a refusal operator; a system that can only add terms can correct a weight but cannot take away a term's standing to be used. Fourth, the capacity belongs to the agent together with the habitat it can act on, not to the model in isolation.
>
> This is a shape, not a named architecture. I am not claiming that a particular network, benchmark score, or algorithm is the answer. The framework returns a kind of thing, never the answer itself. If you know of a case that settles a causal slot from a single observational distribution with no extra assumption, that is exactly the thing I want to hear about.
>
> **What would refute it. I wrote these down before asking anyone.**
> 1. Show that the action in the loop is only internal bookkeeping and does not change what the ground returns.
> 2. Derive the ordered production relation from a symmetric relation over the same variables, without an intervention or an imported assumption.
> 3. Show a system with no refusal operator genuinely withdrawing a held causal claim so that the claim loses standing to be composed over.
> 4. Show a ground reading in which a system with no way to act settles a slot left open by observational equivalence, with no functional-form assumption and no prior causal knowledge.
>
> A one-line "this fails because..." is more useful to me than an endorsement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the public sources are below. The figures and the papers, not my summary of them, are the authority.
>
> - Verbatim figure text with line numbers: local copy in the framework, cited as Fig N :line.
> - Hauser and Bühlmann, JMLR 2012, interventional Markov equivalence: https://www.jmlr.org/papers/v13/hauser12a.html
> - He and Geng, JMLR 2008, active learning with intervention experiments: https://www.jmlr.org/papers/v9/he08a.html
> - Sobel and Sommerville, Frontiers in Psychology 2010, children's causal learning from interventions: https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2010.00176/full
>
> **If you want to reuse the method:** the loop is public. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it. The framework's own limit is that a loop cannot check the direction of its own question, so an unwritten refuter lets you find what you were looking for. A reported failure is more useful to me than a reported success.
>
> Thank you for your time either way.

---

## Why this version is ordered this way

| move | figure-grounded reason |
|---|---|
| Residual and refuter before theory | Fig 10 :52 "Bring a characterised residual, never the source." |
| Do not ask for agreement | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Refuter written before the run | Fig 5 :65 "Write down what an answer would look like, bind it, and let it accrue a residual like anything else." |
| Mode stated on the output | `THE_FORMULA.md`: "Mode. general · specified · grounded. State which." |
| Two verbs kept apart | Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so". Production and negation are different operators. |
| Shape, not a name | Fig 9 :32 "you get a kind of thing, never the answer itself". |
| Imported assumptions explicitly allowed as imports | Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." |
| No request for trust or prestige | *The Recursive Self-Improvement Trap* (essay read 2026-11-23): "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Sources after the verdict | Fig 4 :23 "Only methods cross up. Only head starts come down." |
| Ask for a checkable failure, never a pool of agreement | Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" |
| Offer the method, not the answer | Fig 4 :22 "Only methods cross up. Only head starts come down." |

## Boundary on what a reply means

A reply that refutes the shape is copied into `11_audit.md` with provenance and re-evaluated by the auditor seat as if it came from any other source. A reply that agrees is a conversation, never corroboration. No recipient is selected for likely agreement, no contact is automated, and no later agreement from a shared pool is counted as a second witness.
