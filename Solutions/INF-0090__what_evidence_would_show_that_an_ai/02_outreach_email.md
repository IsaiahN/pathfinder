# Outreach draft — check the discriminating observation before you decide about the theory

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the shape claim and its refuter in `01_figure_grounded_audit.md` §4 are written down and dated. The output must survive validation or the two-stage offer collapses on contact.

---

**Subject:** What would count as evidence of flexible use, before we argue about the model

> Hi [name],
>
> I have one specific question I would like you to check against what you already know. I am not asking you to read a theory first, and I am not asking you to agree with it. If the observation does not discriminate, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** a higher score on a familiar benchmark does not discriminate two hypotheses that the same accuracy leaves standing. H1: the system holds a method it can reapply in a context whose arrangement differs. H2: the system reproduces associations familiar from training, succeeding wherever the familiar cues recur. The figures put it this way: *"upward: a method that can be reapplied. Never the recording of a particular success"* and *"A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one."*
>
> **What I am asking you to check:** whether the following is a fair description of what would discriminate H1 from H2.
>
> 1. **A round trip with a measured gap.** Compress what the system does into a method, carry it into a new context, bring the result back, and measure the gap rather than assume it is zero. The figures: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning."*
> 2. **Per context, never an average.** Report the residual on each new context. *"Aggregating across slots is how a live signal disappears into an average."* A near-perfect mean with one live slot is a legal state.
> 3. **Same atoms, different bond.** Hold the available ingredients fixed and change only their arrangement or order. *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* A system keyed on familiar associations fails; one tracking the method transfers.
> 4. **Two low-overlap checks against an anchor that does not update.** *"Independence, between two frames, is how little they draw on the same evidence."* Ten benchmarks from one family are one witness. *"A verifier that can reconstruct the claim cannot verify it."*
> 5. **The method must pay for itself.** *"a term that explains one occasion perfectly"* fails the bargain. A memorised association explains one occasion perfectly and compresses nothing.
>
> **What is not claimed:** that a particular benchmark or number settles this. The framework returns a shape, not a name: *"you get a kind of thing, never the answer itself."* I am not claiming to have measured any of this. This is a `specified` shape with a refuter, not a result.
>
> **What would refute the shape claim, written down before this message:**
> 1. a lookup-only system shows a round trip gap indistinguishable from a method-holding system across bond changes with atoms fixed;
> 2. a single aggregate score leaves no live per-context residual, yet the system fails when the habitat is substituted;
> 3. the two supposedly independent checks draw on the same corpus, metric family or author team;
> 4. the "method" costs more to state than the associations it replaces, or fits only the occasion it was trained on;
> 5. no failure condition was written down before the test.
>
> If any holds, I will retract or repair the shape. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Figures and formula, canonical public repository (branch `general-agent`): https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Local verbatim figure text with citation line numbers: `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - The two world papers that disagree productively: Geirhos et al. 2020, https://www.nature.com/articles/s42256-020-00257-z ; Lake & Baroni 2023, https://www.nature.com/articles/s41586-023-06668-3 ; Goodale & Mascarenhas 2026, https://aclanthology.org/2026.tacl-1.73/
>
> **If you want to use the machinery:** run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it. The framework's own warning is that a loop cannot check the direction of its own question, so a preference for a particular answer has to be made into an ordinary term first. A reported failure is more useful to me than a reported success.
>
> — Isaiah

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Discriminating observation first, theory second | Fig 10 :52 *"Bring a characterised residual, never the source."* Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."* |
| Do not ask for agreement | Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Formula "Direction": commit a prediction before the run; Fig 5 :65 *"make the sought-for shape an ORDINARY TERM"* |
| Mode stated on every claim | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| Aggregate score withheld as evidence | Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* |
| No benchmark named as the answer | Fig 9 :32 *"you get a kind of thing, never the answer itself"*; Fig 8 :50, only the record separates import from convergence |
| The raw conflict is shown, not hidden | Fig 2 :40 agreement from one evidence pool is one witness; a real conflict sends the reader back to the census |
| Independence bought in proportion to cost | Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* |
| Offer the method as a generator, not a result | Fig 4 :23 *"upward: a method that can be reapplied. Never the recording of a particular success."* |
| Ask users to state their own ground and refuter | Formula step 7 keeps SEARCHED, INWARD and OUTWARD distinct; a frame cannot certify its own direction |
