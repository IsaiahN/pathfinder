# Public links and distribution

All links below were fetched and read on 2026-11-22 unless marked otherwise. Failed fetches are recorded rather than silently replaced.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Figures text with line numbers (local) | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | The verbatim SVG extraction, Figures 1 to 13 plus Operators and Symbols tables. All `Fig N :line` citations in this folder come from it. |
| Canonical figures README (local) | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"the quotes are the authority, not this summary"* and the limit: a shape, not a name. |
| The Formula (local) | local: `FRAMEWORK/figures/THE_FORMULA.md` | Eight-step loop, the three questions of step 7, and the mode rule. |
| Figures for direct download | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`, folder `figures/`. The canonical usage rule and citation form are published with it. |
| An Introduction to Causal Inference | https://pmc.ncbi.nlm.nih.gov/articles/PMC2836213 | Judea Pearl, The International Journal of Biostatistics 6(2):7, 2010. Full text read. Defines the back-door criterion, the do operator, and the identification question. |
| When the Fundamental Problem of Causal Inference Ain't No Problem | https://www.bradyneal.com/fundamental-problem-of-causal-inference-no-problem | Brady Neal, 2020. States the fundamental problem and attributes it to Holland 1986. |
| Process tracing (TASO guidance page) | https://taso.org.uk/libraryitem/process-tracing | Bennett and Checkel definition quoted verbatim, plus seven practical steps ending with evidence for rival hypotheses. |
| Does Compulsory School Attendance Affect Schooling and Earnings? | https://econpapers.repec.org/RePEc:oup:qjecon:v:106:y:1991:i:4:p:979-1014. | Angrist and Krueger, QJE 106(4), 1991. Abstract read: quarter of birth used as an instrument for education under compulsory schooling laws. |
| Journal of Institutional Economics | https://www.cambridge.org/core/journals/journal-of-institutional-economics | Journal home read; gold open access, public "Submit manuscript" route, welcomes psychology and sociology contributions. |
| SREE | https://www.sree.org/ | Society home read; public conference calls, JREE, Open Science affinity group. |
| Campbell Collaboration | https://campbellcollaboration.org/ | Home read; evidence synthesis body with public get-involved routes. |
| TASO | https://taso.org.uk/ | Reached via the process-tracing page; a UK what works centre funded by the Office for Students. |
| Ostrom Workshop, Indiana University | https://workshop.indiana.edu/ | Home read; public colloquium series, working groups and calls for papers in institutional analysis. |
| AERA | https://www.aera.net/ | Home read; public calls, divisions and SIGs. |
| What Works Clearinghouse | https://ies.ed.gov/ncee/wwc/ | Home read; public standards, handbooks and study review routes. |
| APSA | https://www.apsanet.org/ | Home read; public annual meeting calls and journal submission guidelines. |

**Failed fetches, recorded honestly.** The De Gruyter Journal of Causal Inference page returned 405 on fetch; `campbellcollaboration.org/about-us/` returned 404; a Center for Open Science registered-reports deep link returned 404. None of these is used as a cited source or as a contact point. They were replaced by the verified venues above.

## What the wider literature bears on the question

These are secondary witnesses, read and recorded in `10_source_ledger.csv`. They corroborate or conflict with the figure derivation; they never overrule it.

1. **Association and causation do not mix (methods, Pearl 2010).** *"causal and associational concepts do not mix"*. Pearl's demarcation line says a causal concept cannot be defined from a distribution alone. This corroborates F1 and F3 at the level of formal method: no amount of joint-distribution estimation produces the ordered bond. Pearl also writes that causal assumptions *"cannot be verified even in principle, unless one resorts to experimental control"*, which corroborates F5. Overlap with the figures: low field, but the argument is the same structural point reached independently.
2. **The fundamental problem (methods education, Neal 2020, attributing Holland 1986).** *"The fundamental problem of causal inference is that it is impossible to observe both Y_i(t) and Y_i(t')"*. This is the per-slot indexing of Fig 1 :19 stated in potential-outcome notation. It corroborates F8 and explains why an anchor is owed: the missing potential outcome cannot be observed by looking harder at the same unit.
3. **Process tracing (evaluation method, Bennett and Checkel 2015, via TASO).** *"The analysis of evidence on processes, sequences, and conjunctures of events within a case for the purposes of either developing or testing hypotheses about causal mechanisms that might causally explain the case."* This corroborates F6. The TASO steps add *"Identify counterfactual outcomes: Counterfactuals are vital to process tracing."* and *"Find evidence for rival hypotheses: The final step is to repeat step 6 for each alternative explanation."* Both are operational forms of letting the ground vote (Fig 2 :45).
4. **An institutional natural experiment (economics, Angrist and Krueger 1991).** *"We estimate the impact of compulsory schooling on earnings by using quarter of birth as an instrument for education."* A concrete case of an institution (compulsory attendance law) supplying independent variation, which is exactly the anchor of F3. It does **not** settle the general question: the instrument's validity rests on an assumption that Pearl's framework says cannot be verified from the distribution alone. The case corroborates the shape, not a universal method.
5. **Institutions as shapers of choice (institutional analysis, North 1990, quote read in Zetland's 2023 review at https://one-handed-economist.com?p=4360).** *"Institutions alter prices... and thus ideas, ideologies and dogmas.. playing a major role in the choices individuals make"* (p22). Corroborates the D2/D3 framing of an institution as a contact structure rather than a free-floating property. Field overlaps the question, so this is a weak witness for the mechanism shape and a strong one for the definition of the object.

No source conflicted with the figure verdict on re-census. Where Angrist and Krueger's IV result might be read as "association with a good instrument is enough", Pearl's untestable-assumption result is the correction, and that is a corroboration of F5 rather than a conflict.

## Distribution: offer, do not push

Figure-grounded rules:

- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked. Lead with the four-condition shape and its refuter.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if an ordered bond were present before giving them the article.
- **Fig 2 :40** - *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* Later agreement with the framework is never pooled as corroboration.
- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* Stage 3 sends a method, which is permitted; it does not send an answer.
- **Fig 2 :35** - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* No request for endorsement, no receptiveness ranking, no bulk send.

**Recommended order in a reply:** (1) the shape claim and its six refuters; (2) ask what they would count as a failure, and record the verdict before any theory is shown; (3) only if curious, the three links, with the note that the figures, not the summary, are the authority; (4) if they want to reuse the formula, require them to write their own refuter and state their own mode.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52, *"Bring a characterised residual, never the source."* The recipient checks the four conditions without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Outside frame must not hold the interiors, so its verdict on stage 1 is recorded first and its later agreement is never counted as evidence.
- **Stage 3 sends a generator, not a recording.** Fig 4 :22. Each user must name a ground and a refuter for their own problem.
- **Hard precondition:** stages 1 to 3 only work if the stage-1 shape survives. That is what the reader is being asked to test.
