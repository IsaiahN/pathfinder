# Public links and distribution

Every URL below was fetched and read on 2026-11-23. Failed fetches are reported, not silently replaced.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Dynamic inconsistency overview | https://en.wikipedia.org/wiki/Time_inconsistency | Defines time inconsistency in game theory and behavioral economics; gives the monetary policy case, the Odysseus/mast commitment example, and the Kydland-Prescott and Barro-Gordon citations. Quote used: "Monetary policy makers suffer from dynamic inconsistency with inflation expectations, as politicians are best off promising lower inflation in the future." |
| Taylor rule overview | https://en.wikipedia.org/wiki/Taylor_rule | Gives the rule, the Taylor principle, history, limitations, criticisms and practical applications. Quotes used: "There will be episodes where monetary policy will need to be adjusted to deal with special factors." and "the effective lower bound creates an asymmetric policy space that a fixed rule cannot accommodate". |
| Goodhart's law | https://en.wikipedia.org/wiki/Goodhart%27s_law | States the adage and Goodhart's 1975 monetary-policy formulation. Quote used: "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." Includes the UK money-targeting example. |
| Commitment device | https://en.wikipedia.org/wiki/Commitment_device | Defines precommitment by restricting future options; distinguishes immutable and mutable devices; reports low take-up and backfire in field experiments. Quote used: "a mechanism or arrangement that implements precommitment by deliberately restricting one's own future options in order to make a commitment credible". |
| Svensson, What is Wrong with Taylor Rules? | https://www.nber.org/papers/w9421 | NBER Working Paper 9421, January 2003, published in Journal of Economic Literature 41(2). Quote used: "Targeting rules allow the use of judgment and extra-model information, are more robust and easier to verify than optimal instrument rules". |
| Adrian, Giannone, Luciani and West, Risks and Uncertainty in Monetary Policy | https://www.federalreserve.gov/econres/feds/risks-and-uncertainty-in-monetary-policy.htm | FEDS 2026-061, September 2026. Quote used: "scenarios provide narratives without probabilities, while predictive distributions provide probabilities with limited economic interpretation". |
| Herbst and Page, Optimal Pooling in Taylor Rule Estimation | https://www.federalreserve.gov/econres/feds/optimal-pooling-in-taylor-rule-estimation-with-multiple-horizon-forecast-panels.htm | FEDS 2026-064, September 2026. Quote used: "Evidence of 'changing perceptions' of monetary policy via economically meaningful time-varying response coefficients is weak overall." |
| How Intelligence Actually Works | https://adventuresinml.substack.com/p/how-intelligence-actually-works | Isaiah N, 2026-09-16. Quotes used: "indiscernibility is not identity" and "the ground doesn't update on anything that the frames do and only outputs data that will show if something is the right answer or not for a problem". |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. Quotes used: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." and the simulation caveat about "the truly testable output". |

### Attempts that failed

The following were attempted and returned non-2xx or unsupported content. They are recorded so the gap is visible:

- `https://www.federalreserve.gov/newsevents/speech/bernanke20041005a.htm`, `https://www.minneapolisfed.org/article/2001/rules-versus-discretion`, `https://www.econlib.org/library/Enc/TimeInconsistency.html`, `https://www.imf.org/en/Publications/WP/Issues/2016/12/31/Rules-versus-Discretion-in-Monetary-Policy-19733`: 404.
- `https://www.sfu.ca/~kkasa/prescott_77.pdf`, `http://www.nber.org/papers/w0807.pdf`: fetched as PDF, content type unsupported by the fetch tool. The Kydland-Prescott and Barro-Gordon papers are therefore cited only through the overview pages that were actually read, never as directly read sources.
- `https://www.aeaweb.org/journals/aej/macro`, `https://www.aeaweb.org/journals/aejmacro`, `https://www.journals.elsevier.com/journal-of-monetary-economics`, `https://www.bis.org/publ/work.htm`, `https://www.bankofengland.co.uk/working-paper(s)`: 400/404. These journals are not listed in `03_public_contact_points.csv` because the submission pages were not verified this session.

## Wider literature that bears on the shape

These are the sources above, read for the bearing rather than for quotation. Each is secondary; the figures decide.

1. **Time inconsistency and commitment.** The dynamic-inconsistency overview supplies the reason the rule is a mast rather than a preference: a future self may reverse a present plan, and an outside reader can see the reversal. This corroborates Fig 2 :33 "The anchor must not update" and Fig 10 :19 "install what can be violated". Overlap with the figures: low, different field and different evidence pool.
2. **Targeting rules versus instrument rules.** Svensson (2003) is the closest published analogue to the figure distinction between a violable convention and a fixed instrument rule. It corroborates F4, but it does not supply the figure verdict. Overlap: low.
3. **Goodhart and measurement.** Goodhart (1975) corroborates the claim that a rigidity elevated into a target ceases to measure what it measured. The Wikipedia page also notes the Lucas critique and rational expectations as relatives, which are separate mechanisms and are not pooled with Goodhart here. Overlap: low.
4. **Commitment devices: mutable versus immutable.** The behavioral literature's distinction between irreversible and reversible commitments corroborates the figure requirement that a convention be violable. Its finding that "commitment contracts can also backfire" is a live warning against treating the rule as a one-way bind. Overlap: low.
5. **Risk reading.** The FEDS risk paper's two complementary traditions corroborate the slot-wise reading of F1: different instruments see different parts of the ground, and neither is the whole verdict. Overlap: low, central bank practice rather than metatheory.
6. **Taylor rule estimation.** The Herbst and Page paper reports weak evidence of time-varying policy perceptions. This is recorded as a mild tension with F2's emphasis on novelty: it suggests perceived rules are fairly stable even when the environment changes. It does not flip the verdict; it narrows it. The figure claim is about *reach under a novel atom*, not about how fast estimated coefficients move. Recorded in `11_audit.md` as a strain, not hidden.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25** "Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion." Send the residual and the refuter first; the links come only after a stage-1 verdict.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A reader who absorbs the framework before checking has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape were true before giving them the literature.
- **Fig 2 :40** "agreement about the world is worthless when the agreeing frames share an evidence pool." Do not pool later agreement as corroboration.

**Recommended order in a reply:** (1) the residual per slot and the four clauses; (2) the five refuters and the question "what would you count as a failure?"; (3) record the verdict; (4) only then, the links, with the note that the verbatim figures are the authority.

## The two-stage offer

1. **Stage 1.** Validate the shape against the reader's own knowledge of monetary policy. No theory is shown. Their verdict is recorded before anything else.
2. **Stage 2, opt-in only.** If curious, the reader opens the figure extract and the public literature listed above. Their later agreement is never pooled as corroboration.
3. **Stage 3.** Offer the formula as a reusable method, with the instruction that each user writes their own refuter and states their own mode.

**Hard precondition:** stage 1 only works if the stage-1 output survives. As drafted, the shape is internal-consistency checked only; it is not ground-settled (see `01_figure_grounded_audit.md` section 6 and `11_audit.md`). Repair or refute before sending.

## Hosting

Nothing here is sent by this agent. Hosting the packet on an opt-in download page is closer to the figure rule than pushing an attachment to a list. A page that lets a recipient decline contact is preferred.
