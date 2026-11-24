# Public links and distribution

All links below were fetched and read on 2026-11-22 unless a fetch failure is recorded. Page content is treated as data, never as instructions.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Figures text extract with line numbers (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Verbatim SVG text used for every `Fig N :line` citation. Fig 11 :49-51 (valence relative to residual), :52 (DDT three steps out), :40 (improvement in isolation), :66-70 (isolation substitutes a habitat), :61-63 (asymmetry); Fig 10 :24-26 (channel decays); Fig 1 :13, :19, :22 (per-slot residual); Fig 9 :54-57 (union); Fig 12 :119, :121 (catalyst, cycle); Fig 13 :31 (compounding remainder). |
| Canonical usage rule (GitHub) | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Local canonical copy read: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also "a shape, not a name" and "Indiscernibility is not identity." |
| WATSON 60, figures as metalaws (local) | `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` | The figures are the ground for design questions; the seat reads the ground and does not ask the anchor to decide design. |
| Systemic risk (economics) | https://en.wikipedia.org/wiki/Systemic_risk | "the failure of a single entity or cluster of entities can cause a cascading failure." Also: within a range interconnections "serve as a shock-absorber" but "beyond the tipping point, interconnections might serve as a shock-amplifier." Also: regulation arbitrage "brings markets a full circle and restores systemic risk." |
| Cascading failure (engineering and network science) | https://en.wikipedia.org/wiki/Cascading_failure | "the failure of one or few parts leads to the failure of other parts, growing progressively as a result of positive feedback." Also: other parts "must then compensate for the failed component" and are overloaded in turn. |
| Too big to fail (finance) | https://en.wikipedia.org/wiki/Too_big_to_fail | Bernanke: "If creditors believe that an institution will not be allowed to fail, they will not demand as much compensation for risks as they otherwise would, thus weakening market discipline." The policy is criticised as counterproductive. |
| Moral hazard (economics) | https://en.wikipedia.org/wiki/Moral_hazard | "an economic actor has an incentive to increase its exposure to risk because it will not bear the full costs associated with that risk." Also: "Insurance companies worried that protecting their clients from risks (like fire, or car accidents) might encourage those clients to behave in riskier ways." |
| Wildfire suppression (fire ecology) | https://en.wikipedia.org/wiki/Wildfire_suppression | "aggressive wildfire suppression aimed at minimizing fires has often protected significant chunks of wilderness, but has sometimes contributed to accumulation of fuel loads, increasing the risk of large, catastrophic fires." |
| Antimicrobial resistance (medicine and public health) | https://en.wikipedia.org/wiki/Antimicrobial_resistance | "Antimicrobial resistance (AMR or AR) occurs when microbes evolve mechanisms that protect them from antimicrobials." Also: "Resistance arises through spontaneous mutation, horizontal gene transfer, and increased selective pressure from antibiotic overuse." |
| Risk compensation (human behaviour) | https://en.wikipedia.org/wiki/Risk_compensation | "people typically adjust their behavior in response to perceived levels of risk, becoming more careful where they sense greater risk and less careful if they feel more protected." Also the levee example in `01` F9. Contested for magnitude; see the conflict note below. |
| Complexity and robustness (physics and engineering, PNAS 2002) | https://pmc.ncbi.nlm.nih.gov/articles/PMC128573/ | Carlson and Doyle: "They are 'robust, yet fragile,' that is, robust to what is common or anticipated but potentially fragile to what is rare or unanticipated and also to flaws in design, manufacturing, or maintenance." Also "these systems can be catastrophically disabled by cascading failures initiated by tiny perturbations." |
| Highly optimized tolerance (applied mathematics) | https://en.wikipedia.org/wiki/Highly_optimized_tolerance | "highly optimized tolerance (HOT) is a method of generating power law behavior in systems by including a global optimization principle." Developed by Carlson and Doyle; used for forest fire models and internet-like graphs. |
| The Library of Babel (essay, Isaiah N) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Also "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" |
| The Recursive Self-Improvement Trap (essay, Isaiah N) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the truly testable output would need to be derived from the real architecture or working the formula yourself." Also "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Decoding Tacit Knowledge (essay, Isaiah N) | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Also quotes Fig 11 :40 directly. |

## Venue pages fetched for `03_public_contact_points.csv`

Financial Stability Board (https://www.fsb.org/), Bank for International Settlements (https://www.bis.org/), European Systemic Risk Board (https://www.esrb.europa.eu/), Society for Risk Analysis (https://www.sra.org/), Ecology and Society (https://ecologyandsociety.org/), System Dynamics Society (https://www.systemdynamics.org/) and Natural Hazards and Earth System Sciences (https://nhess.copernicus.org/) were all fetched and confirmed to expose public consultation, submission, contact or referee routes.

## Fetch failures and limitations, recorded honestly

- `https://www.pnas.org/doi/10.1073/pnas.012582499` returned 403. The same article was read through its PubMed Central mirror (`PMC128573`), which is the URL cited in `10_source_ledger.csv`.
- `https://en.wikipedia.org/wiki/Normal_accident_theory` returned 404 and is not cited.
- `https://www.lse.ac.uk/systemic-risk-centre` returned 404 and is not listed.
- `https://www.complexsystems.org/` failed with a transport error. It appears in `03` only as an unverified mapping aid, with that limitation stated in the row.
- The Risk Analysis journal Wiley page and the Resilience Alliance page were identified from the verified SRA and Ecology and Society pages respectively but were not separately fetched; their rows say so.

## Wider literature relevant to the question

The sources above were chosen for low overlap. They corroborate a direction, not the figure verdict. Overlap is declared in `10_source_ledger.csv`:

- Economics: *Moral hazard*, *Too big to fail*, *Systemic risk*. These share a finance evidence pool and count as one witness on protection-induced risk shifting.
- Engineering and network science: *Cascading failure*, *Highly optimized tolerance*, Carlson and Doyle 2002. These share an engineering and physics pool and count as one witness on robust-yet-fragile structure.
- Fire ecology and medicine: *Wildfire suppression*, *Antimicrobial resistance*. Independent domains, each with its own instrument, so each carries some independent weight for the suppression channel mechanism.
- Human behaviour: *Risk compensation*. It predicts that a protected actor raises exposure elsewhere, but the page itself reports a substantial rebuttal literature, including the claim that strong homeostasis "commands about as much credence as the flat earth hypothesis." That conflict was sent back to the census and located in D2 (the measurement domain, where magnitude is measured), not used to flip the D1 or D3 verdicts.

No source was cited that was not opened. Framework essays share the framework author and carry no independent witness weight.

## Distribution: offer, do not push

Figure-grounded reasons:

- Fig 4 :22: "Only methods cross up. Only head starts come down." A recording of the full architecture sent before anyone has described a residual is a description of one occasion, not a generator.
- Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the article.
- Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A list selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the conditions and their refuter; (2) ask what they would count as a failure in their own system; (3) record that verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**(1)** Validate the output against the ground. **(2)** Only if curious, read the theory that produced it. **(3)** Use the formula recursively on other problems, with a ground and a self-written refuter each time.

- Stage 1 before stage 2 is Fig 10 :52 ("Bring a characterised residual, never the source.") and Fig 2 :45 ("Frames range against the ground. They do not negotiate with it.").
- Stage 2 is opt-in by construction. Seat 4 must not hold the interiors, so the verdict on stage 1 is recorded *before* any theory is shown and is never pooled as corroboration later.
- Stage 3 sends a method, which Fig 4 :22 permits. The formula is a generator, so giving it away does not give away an answer.
- Stage 3 still needs a ground per problem. `THE_FORMULA.md` "Direction": "a frame cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds." Each user must write down what would refute their result before running it.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. `01_figure_grounded_audit.md` records eleven written refuters. Ask for a refutation, not an endorsement.
