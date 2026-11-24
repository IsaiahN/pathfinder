# Outreach draft: check the shape claim before you decide about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the scope and ground of any reliability number are stated. If the recipient cannot tell which function, which habitat and which error metric is being claimed, stage 1 has nothing to check.

---

**Subject:** One checkable claim about species counts and ecosystem function

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking you to read any framework first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The output (`general` on the structure, `specified` on the empirical reading, not `grounded`):** "How reliably can species counts alone predict ecosystem functions" is not one question. It bundles at least three conditions that overlap: which species are present at a fixed count, how traits, identities and abundances are arranged, and what habitat the community sits in. A count is a symmetric many-to-one projection: swapping one species for another leaves the integer unchanged but can change production, nutrient retention or decomposition substantially. The figures put the point plainly: *"The residual is indexed by object slot, not aggregated"* and *"Aggregating across slots is how a live signal disappears into an average."* The residual is per function, per site, per context.
>
> **What that implies for reliability.** A single accuracy number for "counts alone" is the wrong shape of answer. It can be near zero as a global average while one function slot carries a live, unreduced residual. The honest report is a matrix of functions by habitat contexts, with the worst live slot shown. Counts are useful as a cheap filter for deciding where to do a full survey. They are not a witness for the function.
>
> **What I am not claiming.** Not that species richness has no predictive value. The literature I read finds a general positive association between biodiversity and ecosystem functioning, often stronger under environmental stress. Not that richness is always beaten by traits in every system. I am claiming that for identity-dependent functions the discriminating information is discarded before prediction, so the bound cannot be universal. I am also not claiming that the framework names a single best predictor. It returns a shape: a slot-indexed, cross-kind, habitat-embedded arrangement, settled per function against measured data.
>
> **What would refute the shape claim (written before this message):**
> 1. For the target functions, every identity substitution at fixed species count leaves the function unchanged, so the lost information does not matter.
> 2. A count-only predictor keeps per-slot residual small across functions, sites and habitats on held-out data, with no live slot and no context dependence.
> 3. Adding trait, identity, abundance and habitat variables gives no out-of-sample improvement for any function in the set.
> 4. Species count is a sufficient statistic for the function vector: conditioning on full composition adds nothing.
>
> I wrote these down before sending this. If any holds, I will retract the claim. A one-line refutation is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the sources I actually read. The figures, not my summary of them, are the authority.
> - Gagic et al. 2015, Proceedings of the Royal Society B: "Trait-based indices consistently provided greater explanatory power than species richness or abundance." https://pmc.ncbi.nlm.nih.gov/articles/PMC4309003/
> - Carrick and Forsythe 2020, PLOS ONE: species composition explained only 2% of the variation in recovering ecosystems. https://pmc.ncbi.nlm.nih.gov/articles/PMC7392319/
> - Hong et al. 2022, Ecology Letters: "the positive effects of biodiversity were mainly driven by interspecific complementarity". https://pmc.ncbi.nlm.nih.gov/articles/PMC9300022/
> - The verbatim figure text and its line numbers are in the package I can send after your stage-1 verdict.
>
> **If you want to use the machinery:** the formula is a method, offered after the verdict, not before. Run it on a problem you know well and can check against a ground. Write down what would refute your result before you run it. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output and refuter first, theory second | Fig 10 :52 *"Bring a characterised residual, never the source."* The recipient checks the claim without holding the framework's interior. |
| Do not ask for agreement | Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Asking people who already agree would manufacture the disqualifying correlation. |
| Pre-registered refuter | A falsifier written before the run is a design instrument, not only an honesty device. |
| Mode stated on every claim | `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which."* |
| Retract "richness is useless" | The ground literature read here supports a positive general effect; the surviving claim is insufficiency in general, not zero effect. |
| Counts as filter, not witness | Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* |
| Shape, not a name | The framework returns *"what a missing thing would have to look like (a shape, not a name)"*; the email never nominates one magic variable. |
| Links after the verdict | Fig 4 :22 *"Only methods cross up. Only head starts come down."* Sending the full architecture before the residual is described sends a recording, not a generator. |
| No prestige ask, no bulk send | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |

**Stage 1:** the recipient checks the four refuters and records a verdict. **Stage 2, opt-in:** only after the verdict is recorded, offer the theory. Their later agreement is never pooled as corroboration, because a recipient who has absorbed the framework has joined the frame being checked (Fig 2 :40). **Stage 3:** offer the formula as a method to reuse, with the instruction that each user name their own ground and refuter.
