# Outreach draft: check one output before you decide about the policy

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until F2 and F3 in `01_figure_grounded_audit.md` have been checked by a person who works on memory in learning systems. The output must survive validation or the two-stage offer collapses on contact.

---

**Subject:** A checkable claim about what a machine should refuse to compose over

> Hi [name],
>
> I am working on a narrow question in machine memory: what should a machine remember, forget, or compress, and according to whose interests? I have one specific output I would like you to check against what you already know. I am not asking you to read the framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** a memory policy has three operations, and they are not symmetric. Remembering keeps a term with its provenance, because the record is what makes a composed term verifiable. Forgetting is not deletion: it is the addition of a refusal that removes a term's standing to be composed over while the record keeps the term. The reach falls because something was added, not because anything was struck out. Compressing carries a method upward, never a recording of one success, and must be bracketed by a measured round trip gap. The decision is settled by the ground the system is ranged against, not by the system's own memory-utilisation or compression score, and any seat with an interest in the reading must declare it.
>
> **What I am not claiming:** that this names a specific retention schedule, a weight-pruning rule, or a compression ratio. It returns a shape. It also does not say that a machine must never physically overwrite parameters. Overwriting is a channel fact; the claim is about what a provenance-bearing record must keep if it is to distinguish never-held from held-and-given-up. Privacy law may require erasure, and where it does, that is a declared stake, not a figure verdict.
>
> **What would refute the output:**
> 1. a store that actually deletes can still distinguish never-held from held-and-given-up and compute a safe fall of its reach;
> 2. a policy can score itself by "compression achieved" without that score being frame-internal;
> 3. an anchor's answer changes because a frame thought differently;
> 4. a verifier that authored the policy can still verify it.
>
> I wrote these down before sending this. If any one holds, the shape is wrong and I will retract it. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figures and formula for direct download (SVG, branch `general-agent`): https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Worked architecture essay (includes the memory degradation design note): https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
> - Library of Babel essay (why stopping at a shape is legitimate): https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a memory problem you know well and can check against a ground. Write down what would refute your result *before* you run it: a loop cannot check the direction of its own question, and the essay warns that outputs can be simulated by a language model rather than derived. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52, *"Bring a characterised residual, never the source."* Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35, *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287 (local): a falsifier written before the run is a design instrument. |
| Mode on every substantive claim | `THE_FORMULA.md` mode rule: `general · specified · grounded`, state which. |
| Deletion withheld as an operator | Fig 5 :55 and Fig 6 :42-43; Operators table :74 (local) separates ¬ from −. |
| No compression-ratio claim | Fig 1 :25-27 disqualifies *"compression achieved"* as frame-internal. |
| No specific retention schedule | Fig 9 :32, *"you get a kind of thing, never the answer itself"*; the framework returns a shape, not a name. |
| Physical overwriting conceded as channel fact, not verdict | Fig 10 :24, *"the ground does not decay, the channel does"*; declared stake per Fig 10 :59-60. |
| No request for trust | *The Recursive Self-Improvement Trap*: prestige *"can fund an action"* but *"cannot settle an action. Only the ground can settle it."* |
| Offer the formula as a method | Fig 4 :22, *"Only methods cross up. Only head starts come down."* |
| Ask recipients to write their own refuter | Formula "Direction" (local): a frame cannot check the direction of its own question. |

## Distribution constraint specific to this field

The NeurIPS 2026 position-paper call invites stances that "invite discussion and refutation" and asks for an "Alternative Views" section, but it also requires that the final paper be *"substantially written by human authors"* and that AI use be stated. This package is an LLM-assisted simulated derivation. It is a private checking instrument and a prompt for a human-authored position paper, never a submission in its own right. See `04_links_and_distribution.md`.
