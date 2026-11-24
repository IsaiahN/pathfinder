# Public links and distribution

All links below were fetched and read on 2026-11-23 unless the row records a direct-fetch failure, in which case the recovery route is stated. A fetch failure is recorded honestly and the source is rerouted or replaced; nothing is cited from a page that was not opened or returned by the search index.

## Verified primary links

| what | URL | verified content |
|---|---|---|
| BICEP/Keck XIII (BK18), full paper | https://arxiv.org/html/2110.00483 | Opened in full. PRL 127, 151301 (2021). Multicomponent model lensed-ΛCDM+r+dust+synchrotron+noise; `r0.05 < 0.036` at 95% confidence, σ(r)=0.009; 220 GHz dust signal-to-noise now exceeds Planck at 353 GHz; BICEP Array projected to reach σ(r) near 0.003 within five years with delensing. |
| BICEP/Keck constraint review (2024) | https://arxiv.org/html/2405.19469v2 | Abstract and overview opened. Primordial B modes tied to the tensor-to-scalar ratio and the inflation energy scale; E-to-B leakage and systematics are major concerns; BICEP Array and delensing target σ(r) at or below 0.003 through the 2027 season. |
| Planck tensor-to-scalar ratio | https://www.aanda.org/articles/aa/full_html/2021/03/aa39585-20/aa39585-20.html | Opened. PR4 maps, reionization bump (ℓ ≤ 30) and recombination bump (50 ≤ ℓ ≤ 150); BB-only `r < 0.158`, tightening to r < 0.056 with TT; TT-only constraint cosmic-variance limited at σ(r)=0.093. |
| Planck confirms doubts on BICEP2 (ESA) | https://www.esa.int/articles/about-us/directorates/science/planck/planck-gravitational-waves-remain-elusive | Opened via the search index. Multi-frequency Planck maps showed dust comparable to the BICEP2 signal even in clean regions; Planck PI: *"the detection of primordial B-modes is no longer robust once the emission from Galactic dust is removed."* |
| Joint Planck/BICEP result (NASA JPL) | https://www.jpl.nasa.gov/news/gravitational-waves-from-early-universe-remain-elusive | Opened in full. *"no conclusive evidence of gravitational waves from the birth of our universe"*; *"BICEP2/Keck measured the sky at one wavelength... we used Planck's measurements in multiple wavelengths."* |
| Foreground reanalysis of the BICEP2 region (JCAP 2014) | https://iopscience.iop.org/article/10.1088/1475-7516/2014/08/039 | Opened via search index. Data consistent with r=0.2 and negligible foregrounds *or* r=0 and significant dust; dust amplitude uncertain by about a factor of three; single-frequency data cannot distinguish the two. |
| Science news on the 2014 dust problem | https://www.science.org/doi/10.1126/science.344.6186.790 | Opened via search index. Flauger's corrected Planck slide map made the foreground stronger; Steinhardt: *"you cannot claim detection"* (his emphasis on the final word). |
| LiteBIRD multitracer delensing | https://arxiv.org/html/2312.05194v1 | Opened. External tracers (CIB, galaxy surveys) plus CMB-S4 improve the r constraint by about 15 to 20 percent when combined; lensing is converted from contaminant to instrument. |
| CMB-S4 internal delensing forecast | https://arxiv.org/html/2310.06729v2 | Opened. Target σ(r) about 5 times 10 to the minus 4 after removing 92 to 93 percent of lensing B-mode variance. |
| CMB-S4 project website | https://cmb-s4.org/ | Opened in full. DOE and NSF ended support on 9 July 2025; project shut down in an orderly way; independent Science Collaboration plans community support. |
| Simons Observatory website | https://simonsobservatory.org/ | Opened in full. Fully online as of October 2026; public pages call the inflation signature a possible "smoking gun"; public Contact Us and opt-in email list. |
| arXiv astro-ph.CO recent listing | https://arxiv.org/list/astro-ph.CO/recent | Opened in full. Live public stream of PGW and CMB papers; a map-level PGW inference paper appears on 19 November 2026. |
| Map-level PGW inference with spherical neural networks | https://arxiv.org/html/2611.24939 | Located in the arXiv listing; title and abstract metadata opened. Used as an example of a new analysis pipeline, not as evidence for a detection. |

**Fetch failures recorded honestly:** bicepkeck.org returned a transport error to direct fetch; its URL and role were verified from the BK18 paper, which directs readers there for data and figures. The ESA deep link `.../Planck/Planck_confirms_doubts_on_BICEP2_results` returned 404; the fetched ESA article URL above was used instead. Two other agency deep links were replaced by the pages actually opened.

## Wider literature that bears on the answer

1. **The B-mode shape is a two-window problem.** Planck 2021 and the tensor-feature literature (https://arxiv.org/html/2209.00827v2, opened via search index) put the reionization bump at ℓ ≤ 10 and the recombination bump near ℓ ≈ 80. Lensing B modes dominate at ℓ ≥ 100. This is the physics behind the three-condition union: the conditions overlap in multipole space, so one lever cannot clear the intersections (Fig 9 :55).
2. **Patchy reionization is a genuine confounder.** https://iopscience.iop.org/article/10.1088/1475-7516/2021/01/003 (opened via search index) finds a secondary B-mode signal around ℓ ≈ 100 at the level of primordial r < 10^-4, potentially up to 50 times larger for clustered sources. This is the live basis for refuter 2 in `01` section 4. It is a source-substitution risk, not evidence against tensors.
3. **Blind analysis is a mature low-overlap corroborator.** CMS (https://cms.cern/physics/cms-higgs-search/blinding-and-unblinding-analyses, opened) and Harrison 2002 (https://www.ippp.dur.ac.uk/Workshops/02/statistics/proceedings/harrison.pdf, opened) describe hiding the signal region until the analysis is fixed: *"physicists draw 'blinds' over the region where an excess of decay events is expected"* and *"physicists must optimise two things... simulations... methods for rejecting background"* while the signal region stays blind. This is Fig 10 :42 and Fig 2 :31 in a different field: the checker must not hold the interior, and independent teams check the background region before unblinding. It corroborates the *shape* of the verification condition, not the existence of PGWs.
4. **Experimenter bias is a named failure.** Kleinknecht's Annual Review (https://www.annualreviews.org/doi/10.1146/annurev.nucl.55.090704.151521, abstract opened) states that blind analysis *"avoids the possibility of experimenters biasing their result toward their own preconceptions by preventing them from knowing the answer until the analysis is complete."* Declared as a stake check, not as a verdict (Fig 10 :59).
5. **Prestige is not action.** The 2014 press conference is the counterexample that gives the outreach order its force. *The Recursive Self-Improvement Trap*: "Prestige can fund an action... But it cannot settle an action. Only the ground can settle it."

Overlap declaration: sources 1 and 2 are the CMB/PGW evidence pool and count as one witness each on distinct sub-claims; sources 3 and 4 are a particle-physics methodology pool, genuinely low overlap with the CMB claim but corroborating only the verification shape; the framework essays share the author's evidence pool with the figures and carry no independent witness weight.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22,** *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the residual, the shape claim and the refuter; offer the links after.
- **Fig 10 :42,** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28,** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if a tensor signal were present before giving them the paper.
- **Fig 2 :40,** *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Seat Map :163, *"High correlation is disqualifying for a verdict and efficient for a convention."* A mass send selected for likely agreement produces a convention, not corroboration.

**Recommended order in a reply:** (1) the residual and shape claim, (2) the four refuters and the question of what the recipient would count as a failure, (3) record that verdict, (4) only then the three source links, with the note that the figures, not this summary, are the authority.

## The two-stage offer

1. **Stage 1 before stage 2** is Fig 10 :52, *"Bring a characterised residual, never the source,"* and Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."* The recipient checks the shape claim without holding the framework's interior.
2. **Stage 2 is opt-in by construction.** Once a reader has absorbed the theory, their agreement stops being evidence. Record the stage-1 verdict first; never pool later agreement as corroboration.
3. **Stage 3 sends a method, which is permitted.** Fig 4 :22 again. The formula is a generator, so giving it away does not give away an answer.
4. **Stage 3 still needs a ground per problem.** `THE_FORMULA.md` Direction: a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."* Each user writes down what would refute their result before running it, and states the mode of what they get.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. The shape claim in `01` is that precondition. If refuter 3 fires (no failing reading anywhere), the claim is withdrawn and nothing is sent. `08_expert_verification_packet.md` is the artifact to send; nothing here is sent by this agent. Hosting and sending are the user's to do. Prefer an opt-in download page over a pushed attachment so a recipient can decline contact.
