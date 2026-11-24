# Outreach draft: validate the output first, then decide about the theory

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** send only the corrected shape claim in `08_expert_verification_packet.md` §2. Do not send the certificate reading; it was refused in `01_figure_grounded_audit.md` §5. The stage-1 object must survive validation or the two-stage offer collapses on contact.

---

**Subject:** Check one claim about safety evidence before you decide whether the argument is worth reading

> Hi [name],
>
> I have one specific claim about what can count as evidence that a system is safe at a given level of autonomy. I am not asking you to read the theory first, and I am not asking you to agree. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`general` on the shape, `specified` on the falsifiable parts, not `grounded`):** safety is a property of an agent in a habitat, never of the agent alone. A test harness is a substituted habitat, so a benchmark pass proves the wiring of the harness, not safety in deployment. Evidence said to be sufficient at a level of autonomy has to range against outcomes at the ground, index the live slots where harm can hide instead of averaging them, come from instruments that do not share one evidence pool, state its acceptable-risk threshold before the run, and be maintained as a channel. A score of "no harm found" is not proof of absence. A green monitoring dashboard can mean the channel has lost touch.
>
> **What I am not claiming:** that any named model, lab or deployment is safe or unsafe; that benchmarks or red teams are worthless; that a fixed checklist is sufficient in general; or that the acceptable-risk number is known. The framework returns a shape, not a name. I took no measurements for this.
>
> **What would refute the claim.** I wrote these down before running the derivation:
> 1. an intervention internal to the model moves deployment harm without changing contact with the habitat;
> 2. a harness is shown to reproduce every causally relevant contact, including effects three steps out, and deployment outcomes match it;
> 3. a single aggregate score tracks the persistently failing live slot as well as per-slot indexing does, across a habitat change;
> 4. a bounded search with no observed harm is accepted as proof of absence by a sealed-room argument;
> 5. two evaluators drawing on one evidence pool are admitted as two independent witnesses;
> 6. a threshold-free invariant claim settles at the ground and stays composable;
> 7. frozen evidence remains decisive after the deployment context changes, with the channel intact.
>
> If any one holds, I withdraw or narrow the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are three sources. The figures, not my summary of them, are the authority.
> - Safety-case construction for AI systems, Lee, Zhu et al., 2026: https://arxiv.org/html/2601.22773
> - Hidden stratification in medical imaging, Oakden-Rayner et al., 2020: https://arxiv.org/html/1909.12475v2
> - Measuring AI ability to complete long tasks, Kwa, West et al., 2025: https://arxiv.org/html/2503.14499
>
> **If you want to reuse the method:** the figures and formula are public at `FRAMEWORK/figures/` in the local folder and in the canonical repository. Run it on a problem you know and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> [your name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52, "Bring a characterised residual, never the source." Fig 2 :45, "Frames range against the ground. They do not negotiate with it." |
| Do not ask for agreement | Fig 2 :35, "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter | Seat Map :287, "a falsifier written before the run is a design instrument, not only an honesty device." |
| Mode stated on the claim | `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." |
| Certificate reading withheld | Fig 9 :32, "you get a kind of thing, never the answer itself." Naming a general checklist would be a name where the framework returns a shape. |
| Live slots named instead of a single score | Fig 1 :19, "The residual is indexed by object slot, not aggregated." |
| No-harm-found not treated as safety | Fig 8 :39, "a search that finds nothing is never a proof of absence." |
| Threshold written before the run | Fig 5 :65, "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." |
| Maintenance, not one-time delivery | Fig 10 :24, "the ground does not decay, the channel does." |
| No request for trust or endorsement | *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Stage 2 opt-in | Fig 10 :42, "A verifier that can reconstruct the claim cannot verify it." A recipient's stage-1 verdict is recorded before any theory is shown, and later agreement is never pooled as corroboration (Fig 2 :40). |
| Offer the formula as a method | Fig 4 :22, "Only methods cross up. Only head starts come down." |
| Ask users to write their own refuter | Formula "Direction": a frame cannot check the direction of its own question because the sought-for shape is not a term it holds. The essays add that LLM output is a simulation and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." |
| No bulk send, no personal emails | Fig 2 :40 (pooled agreement is one witness) and the GDPR/CAN-SPAM constraints recorded in the README. |

**Observation rule.** Record the recipient's answer to stage 1 verbatim, with the date, before sending any source. If they return a refutation, it is copied into `11_audit.md` with provenance and re-evaluated as if it came from any other source. If they return agreement, it carries zero verdict weight, because at that point they have only seen the residual and not the frame; if they agree after seeing the frame, they have shared the evidence pool and the agreement is worth even less.
