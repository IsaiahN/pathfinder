# Public links and distribution

All external links below were opened on 2026-11-23 unless noted. Local framework files are paths in this project.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Verification and validation (engineering and quality systems) | https://en.wikipedia.org/wiki/Verification_and_validation | "Verification. The evaluation of whether or not a product, service, or system complies with a regulation, requirement, specification, or imposed condition. It is often an internal process." and "Validation... often involves acceptance and suitability with external customers." Also: "It is entirely possible that a product passes when verified but fails when validated." Defines independent V&V as performed by "a disinterested third party." |
| Verification and validation of computer simulation models | https://en.wikipedia.org/wiki/Verification_and_validation_of_computer_simulation_models | "Simulation models are approximate imitations of real-world systems and they never exactly imitate the real-world system." Naylor and Finger's three steps end with "Compare the model input-output transformations to corresponding input-output transformations for the real system." Includes the ASME V&V 10, 20, 40 standards section. |
| Computer simulation | https://en.wikipedia.org/wiki/Computer_simulation | "The reliability of some mathematical models can be determined by comparing their results to the real-world outcomes they aim to predict." Notes that data triangulation methodology "forms an extension of data triangulation" and that sensitivity analysis is important. |
| Cosmic microwave background | https://en.wikipedia.org/wiki/Cosmic_microwave_background | "The CMB is the key experimental evidence of the Big Bang theory for the origin of the universe." Records the 1948 Alpher-Herman prediction, the 1964 discovery, the two requirements (blackbody spectrum and isotropy) that showed the radiation was cosmic, and the COBE to WMAP to Planck instrument chain. |
| Big Bang nucleosynthesis | https://en.wikipedia.org/wiki/Big_Bang_nucleosynthesis | "In order to test the predictions of BBN, astrophysicists make precise measurements of light element abundances in the universe." Records the BBN/CMB baryon-to-photon concordance as a consistency test, lab-measured reaction rates, and the cosmological lithium problem as a live failure. |
| Illustris project | https://en.wikipedia.org/wiki/Illustris_project | "Modeling, based on the most precise data and calculations currently available, are compared to actual findings of the observable universe in order to better understand the nature of the universe." Records a 19 million CPU-hour run and the 2015 public data release. |
| Illustris project homepage | http://www.illustris-project.org/ | "Towards a predictive theory of galaxy formation." Public data access, results, explorer and press pages; dated news log of the public data release. |
| All models are wrong | https://en.wikipedia.org/wiki/All_models_are_wrong | Box's aphorism: "all models are wrong, but some are useful"; "all models are approximations." Useful against both demanding literal identity and accepting any model as settled. |
| Analog models of gravity | https://en.wikipedia.org/wiki/Analog_models_of_gravity | Analog models "may create opportunities for practical experiments within the analog that can be applied back to the source phenomena." Exactly a wiring claim, not a capability claim. |
| Society for Modeling and Simulation International | https://scs.org/ | Public society with journals SIMULATION and the Journal of Defense Modeling and Simulation, and an annual modeling and simulation conference with an authors and submissions page. |
| Winter Simulation Conference archive | https://www.informs-sim.org/ | Public archive of full papers from 1969 to 2025, including the V&V papers cited by the simulation-models reference hub. |
| NASA Katherine Johnson IV&V Facility | https://www.nasa.gov/katherine-johnson-ivv-facility | "The Katherine Johnson Independent Verification and Validation (IV&V) Facility... assures the safety and success of software on NASA's highest-profile missions." Public "Doing Business with IV&V" channel. |
| ASME publications and standards pages | https://www.asme.org/publications-submissions ; https://www.asme.org/codes-standards/find-codes-standards | Live publisher and standards gateways. A direct V&V 10 product URL was tried and returned 404; the general standards search is the verified route. |

**Fetch failures recorded, not hidden.** The SAGE homepage for the SIMULATION journal (https://journals.sagepub.com/home/sim) returned HTTP 403 on direct fetch. The SCS publications page, which lists and links it, was fetched and is used as the verified source. The IllustrisTNG site was seen as a link on the fetched Illustris homepage but was not opened directly; it is marked accordingly in `03_public_contact_points.csv`.

## Local framework files used

- `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, primary)
- `FRAMEWORK/reference/FIGURES_README_canonical.md` (canonical usage rule)
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (metalaw reading)
- `FRAMEWORK/figures/THE_FORMULA.md` (eight-step loop, mode rule, R_T)
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` (offices, failure genera, correlation and falsifier rules)

## Wider literature that bears on this question, by low-overlap field

1. **Engineering and quality systems (W1, W2).** The internal/external split is standard: verification asks whether the model was built right, validation asks whether the right model was built. This corroborates Fig 1 :23 (the ground is the only metric) and Fig 11 :70 (a harness proves wiring). It does not corroborate any particular cosmological model.
2. **Statistics (W6).** Box's "all models are wrong, but some are useful" is the honest middle between demanding literal identity and accepting a fit. It corroborates the round-trip gap of Fig 4 :30 and the two-currency rule of Fig 12 :125-129.
3. **Cosmology (W4, W5, W6 sources).** The observational ground exists and is already used in exactly the way the figures require: predictions compared with measurements, instruments sharpened from earlier instruments, and independent epochs cross-checked. The BBN/CMB concordance is the clearest real case of low-overlap triangulation. The cosmological lithium problem is a live case where the ground refuses the model, which is evidence that the method can fail rather than only agree.
4. **Cosmological simulation practice (W5 Illustris article, W7 project site).** Large simulations are explicitly compared with the observable universe and their data are released publicly. Public data is an instrument for independence: another frame can rerun the comparison without rebuilding the code.
5. **Physics analogues (W8).** Analogue gravity gives real laboratory access to gravitational phenomena, but the source itself describes the benefit as applying insights back to the source phenomenon. That is wiring transfer, matching Fig 11 :70.

No world source conflicts with the figure verdict. The conflict rule was not triggered. Where sources agree with the figures, they are secondary corroboration from fields with no stake in the framework; they are not the authority.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** "Only methods cross up. Only head starts come down." Sending the full framework before someone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." Seat 4 must see the residual and the shape, not the interiors. A recipient who has absorbed the framework before the stage-1 verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what the recipient would count as a failure before giving them the links.
- **Seat Map :163** "High correlation is disqualifying for a verdict and efficient for a convention." A send selected for people already likely to agree produces a convention, not corroboration.
- **Fig 2 :42** "Buy independence in proportion to the cost of being wrong." Prefer venues whose readers work in a different closure from the claim: V&V engineers, statisticians, instrument scientists, and cosmologists at different observatories.

**Recommended order in a reply:** (1) the shape claim and the six refuters; (2) ask what they would count as a failure and record the answer; (3) only then the local figure links and the three public sources, with the note that the figures, not the summary, are the authority.

**One-to-one only.** No bulk send, no automation, no misleading subject line, and an opt-out line in every message. Public institutional or opt-in channels only. A reply is a conversation, never corroboration; its `verdict_weight` is zero.

## Zip and hosting

There is no archive in this folder to send. The twelve files here are the deliverable. Hosting them on a link that lets a recipient decline contact is closer to the figures' rule than pushing an attachment to a list. This agent cannot upload or send anything; hosting and sending are the user's to do.
