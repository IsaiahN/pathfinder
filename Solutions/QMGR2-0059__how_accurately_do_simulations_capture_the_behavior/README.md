# Solution QMGR2-0059 - figure-grounded package

**Question:** How accurately do simulations capture the behavior of ordinary gas, stars, and dust?

**Source:** QM & GR Questions.txt line 214

**Section:** F. Galaxies and cosmic structure

**ID:** QMGR2-0059

**Field for public contact points:** galaxy simulation research

**Mode:** `specified` on every substantive claim, `general` on the structural shape. Nothing here is `grounded`. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 7.

**Status:** done

**Registry status:** pending

**Figures authority:** every figure quote was taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not a single accuracy percentage but the **size and structure of the residual between a simulation's prediction and an observation, indexed per physical component and per regime**.

- **b** is the belief fed to the model: initial conditions, cosmological parameters, and the chosen subgrid parameters.
- **a** is the action: running the solver, the hydrodynamics scheme, and the feedback coupling.
- **Γ(b,a)** is the simulation's prediction for ordinary baryons: gas density, temperature and flows, star formation and stellar populations, dust content and obscuration.
- **o′** is what the sky returns: IFU spectroscopy, photometry, absorption-line spectroscopy of the circumgalactic medium, dust attenuation maps.
- **s** is the slot: per galaxy, per component (gas / stars / dust), per scale and redshift. R is measured per slot and never averaged into one number (Fig 1 :19, Fig 1 :22).

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

- Option A, "a simulation has an accuracy of X percent": leads to the prediction that accuracy is one property of the code considered alone, and invites a frame-internal score.
- Option B, "accuracy is a per-slot residual against an observational anchor": leads to the prediction that accuracy is a property of simulation-and-observation-contact, that it differs by component and regime, and that it fails when the channel to the ground fails (Fig 11 :39, Fig 11 :40).

What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a **shape** naming which slots carry live residual, which two conditions must both hold for a slot's R to stay small, and the class of instrument that would discriminate a failure of one condition from the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 of `01` can fire on it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, figure census, findings F1 to F10 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in galaxy simulation research and adjacent observational astronomy. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: verification versus validation as a union, the isomer reading of subgrid feedback, dependency order, with a falsifier |
| `07_the_tether_answer.md` | the synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version |
| `08_expert_verification_packet.md` | **the one to send:** one-paragraph claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check list |
| `09_watson_answer.md` | canonical WATSON output shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by / Sources as linked titles |
| `10_source_ledger.csv` | one row per source actually opened: url, title, author, venue, year, accessed date, quote, field, overlap, status, used in file |
| `11_audit.md` | independent second-seat re-census from the residual line alone, comparison with the primary census, verbatim lines checked, round-trip gap R_T, strains, verdict on the solution |

---

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.
- No claim that this derivation is `grounded`, no accuracy percentage presented as a verdict, and no claim that the framework is the only account of simulation fidelity.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). A list of simulation groups selected for agreement manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). Major simulation projects calibrate to the same observed stellar mass function, so their agreement on that function is one evidence pool talking.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the per-slot residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask which slot carries the largest live residual and what would refute the shape claim before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
