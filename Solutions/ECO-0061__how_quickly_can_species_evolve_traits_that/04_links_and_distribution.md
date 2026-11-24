# Public links and distribution

Every URL in the table was fetched on 2026-11-23. Fetch failures are recorded rather than hidden; none of the failed URLs is used as a source in the ledger.

## Verified public links

| what | URL | verified content |
|---|---|---|
| Heritability / Breeder's equation | https://en.wikipedia.org/wiki/Heritability | Redirect page from "Breeder's equation". "the expected response to selection of a trait with known narrow-sense heritability (h2) can be estimated using the breeder's equation: R=h2S". Also the definition of `S` as the parent-versus-selected-parent difference, and the warning that heritability is specific to a population in a particular environment. |
| Evolutionary rescue | https://en.wikipedia.org/wiki/Evolutionary_rescue | "persists due to natural selection acting on heritable variation"; continuously changing environment gives "a stable lag of the mean trait value behind a moving environmental optimum, where the rate of evolution and change in the environment are equal"; the U-shaped curve after abrupt change; rescue constrained by available genetic variation. |
| Rate of evolution | https://en.wikipedia.org/api/rest_v1/page/summary/Rate_of_evolution | "The rate of evolution is quantified as the speed of genetic or morphological change in a lineage over a period of time." Notes the use of genomic and palaeontological data to estimate timing. |
| Genetic variation | https://en.wikipedia.org/api/rest_v1/page/summary/Genetic_variation | "Mutations are the ultimate sources of genetic variation, but other mechanisms, such as genetic drift, contribute to it, as well." |
| Alexander et al. 2014, full text | https://pmc.ncbi.nlm.nih.gov/articles/PMC4275089/ | *Evolutionary rescue: linking theory for conservation and medicine*, Evolutionary Applications 7(10):1161-1179, open access. "evolutionary adaptation occurring on the same timescale as demographic dynamics determines whether populations survive severe environmental change"; "asymptotically establishing a constant lag distance"; a critical rate set by available genetic variance and fitness-function width; "a 'race' between adaptation and extinction". |
| Ecological Society of America | https://www.esa.org/ | Public Contact Us, meetings, abstract calls, journals and the opt-in ECOLOG-L listserv. |
| bioRxiv | https://www.biorxiv.org/ | Preprint server; Ecology and Evolutionary Biology are listed subject areas. |
| Frontiers in Ecology and Evolution | https://www.frontiersin.org/journals/ecology-and-evolution | Open submission; sections include Behavioral and Evolutionary Ecology and Evolutionary, Population, and Conservation Genetics. |
| PeerJ | https://peerj.com/ | Open-access biology publisher with public submission. |

Fetch failures on 2026-11-23, recorded honestly: `https://academic.oup.com/evol` returned 403; `https://onlinelibrary.wiley.com/journal/17524571` returned 403; `https://www.evolution-society.org/` returned a transport error. These are real venues in the field and appear in `03_public_contact_points.csv` with explicit failed-verification notes, but no claim in this folder rests on their page content.

## Wider literature that bears on the question

1. **The product law.** The *Heritability / Breeder's equation* page is the independent statement of `R = h²S`. It is the strongest world corroboration of Fig 7 :26 because it comes from a completely different evidence pool from the Tether figures. It also supplies the honest limit: heritability is population- and environment-specific, so no universal rate constant follows.
2. **The lag and the critical rate.** *Evolutionary rescue* and Alexander et al. (2014) both describe a population tracking a moving optimum with a constant lag, and a critical environmental rate beyond which the lag has negative fitness. This corroborates the figure's bounded, incremental shape (Fig 7 :30-31) and the stall condition's converse: if pressure exceeds what the variance can track, the outcome is extinction rather than faster adaptation.
3. **The prerequisite link.** Alexander et al. list "genetic variance or mutation rate" next to "severity of environmental change" and "population size" as the parameters that determine the outcome. That is the world form of Fig 3's dependency order: the variance link must work before pressure is worth optimizing.
4. **Standing variation and pre-existence.** The source pages distinguish standing genetic variation from de novo mutation, and phenotypic plasticity from genetic change. This matters because the question says "evolve traits"; a plastic response with no heritable change is not the residual this solution answers. It is recorded as a non-claim in `07_the_tether_answer.md`.

None of these sources conflicts with the figure verdict, so the conflict rule (back to the domain census) was not triggered. They are independent of the framework author, which is why their agreement carries more weight than the exemplar's author-overlapping essays. They are still secondary: the verdict comes from the figures.

## Distribution rules

- **Fig 10 :52:** "Bring a characterised residual, never the source." Lead with the shape claim and its refuter. Do not attach the framework first.
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the whole architecture before giving a verdict has joined the frame being checked.
- **Fig 2 :35:** "Alignment is triangulation, not negotiation. A mirror cannot correct you." Do not ask for agreement.
- **Fig 2 :40:** "agreement about the world is worthless when the agreeing frames share an evidence pool." Record the stage-1 verdict before showing theory; never pool later agreement as corroboration.
- **Fig 4 :22:** "Only methods cross up. Only head starts come down." Offer the formula as a method in stage 3, not as an answer.
- **Fig 2 :42:** "Buy independence in proportion to the cost of being wrong." One-to-one contact through opt-in or public institutional venues. No personal emails, no scraped lists, no bulk send, an opt-out line in any message, and a clear note that a reply is a conversation and not corroboration.

## The two-stage offer

**Stage 1.** Send the residual and the four pre-registered refuters from `02_outreach_email.md`. Ask what the recipient would count as a failure and what they would expect to see if the shape were true. Record their verdict before any theory is shown.

**Stage 2, opt-in only.** If they are curious, offer the local figures extract, the canonical README and the formula, plus the independent literature links above. State that the figures, not this summary, are the authority. Their later agreement is never added as a witness.

**Stage 3, opt-in only.** Offer the formula as a reusable method with the instruction that each user writes their own refuter and states their own mode before running it.

**Hard precondition.** Stages 1 to 3 only work if the stage-1 output survives. As derived here it is a shape with a stated ground gap, not a number. If a recipient shows the product law or the stall condition fails, the shape is withdrawn or re-censused before any further material is sent.

## Hosting

`08_expert_verification_packet.md` is the artifact to send. This agent cannot host or send it. Hosting it on an opt-in page and sending the link is yours to do, and an opt-in download page is closer to the figures' rule than an attachment pushed to a list.
