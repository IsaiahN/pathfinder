# Outreach draft: check one output before deciding whether the combining rule is worth reading

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim and its refuter in `08_expert_verification_packet.md` survive your own check. The output must survive validation or the two-stage offer collapses on contact.

---

**Subject:** Check one claim about combining conflicting tool, user and model readings

> Hi [name],
>
> I have one specific claim I would like you to check against what you already know. I am not asking you to read the theory first, and I am not asking you to agree. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** when a system gets conflicting readings from tools, users and learned parameters, a single weighted average throws away the only signal that says where the conflict is. The figure-grounded shape is this. Keep the disagreement per object slot. First infer whether the sources are readings of the same state or of different states, because fusing separate questions and fusing redundant readings of one question are different operations. Then range each source separately against something that does not move when the sources disagree. Fuse only redundant, genuinely independent readings, weighting by measured reliability and discounting readings that share an evidence pool. Keep an explicit way to refuse a source that has become false, and keep a record of which reading came from where.
>
> **Who is the anchor depends on the question.** For "is this a good answer for a person", user judgment is the anchor and the tool is an instrument. For "is this code correct", a test or proof checker is the anchor and the user is an instrument, and instruments can be wrong on axes they do not measure. So there is no fixed weight for users across all questions.
>
> **What I am not claiming:** that the figures give you a numerical weighting formula. They do not. They constrain the shape of the rule; the numbers are a measurement question. I am also not claiming that parameter confidence is evidence about the world. A large, well trained prior is a budget to try something, not a verdict. And I am not claiming that averaging never works: averaging is efficient for a convention whose weights are scored by an outcome, which is not the same as treating agreement as a verdict about the world.
>
> **What would refute the shape claim:**
> 1. a single symmetric blend of all three sources, with no causal-structure check and no non-updating anchor, matches or beats this rule on a task with a settled ground and independent sources;
> 2. two sources with identical evidence reliably increase accuracy when their agreement is counted twice;
> 3. user feedback on a non-people question with a checkable ground improves the ground score as much as the ground test does;
> 4. a rule with no operator for refusing a false source recovers just as fast when one source starts lying.
>
> I wrote these down before sending this. If any one holds, I will retract the corresponding part. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Canonical figure text with line numbers: `FRAMEWORK/reference/03-FIGURES_TEXT.md` in the local project, and the public repository at https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Survey of data fusion techniques (open access): https://pmc.ncbi.nlm.nih.gov/articles/PMC3826336
> - Multisensory causal inference (open access): https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002075
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> [your name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52, "Bring a characterised residual, never the source." The recipient checks the claim without holding the framework's interior. |
| Do not ask for agreement | Fig 2 :35, "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Pre-registered refuter first | Seat Map :287, "And a falsifier written before the run is a design instrument, not only an honesty device." |
| Mode stated on the claim | `THE_FORMULA.md`: "Mode. general · specified · grounded. State which." |
| Sources only after stage 1 | Fig 4 :22, "Only methods cross up. Only head starts come down." The figure text is the authority; the summary is not. |
| Question-dependent user anchor | Fig 2 :37-38: human judgment is the right anchor only when the question is constitutively about people. |
| Numeric weights withheld | F6 gap: no figure line governs a coefficient. Claiming one would be an import with no source gate (Fig 8 import rule). |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Offer the formula as a method | Fig 4 :22-25: methods cross up, recordings do not. |
| Ask each user to write their own refuter | `THE_FORMULA.md` "Direction": a frame "cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds." |

## Stage order

1. **Stage 1.** Send the claim and the refuter. Ask what the recipient would count as a failure. Record their verdict **before** showing any framework material.
2. **Stage 2, opt-in only.** If they are curious, offer the three source links. Their later agreement is never pooled as corroboration, because they now hold the frame's interior (Fig 2 :40).
3. **Stage 3.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

Nothing is sent by this agent. Hosting and sending are yours to do.
