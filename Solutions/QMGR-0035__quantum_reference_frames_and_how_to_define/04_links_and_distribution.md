# Public links and distribution

All links in the table were fetched and their content checked on 2026-11-23 unless marked as carried from the imported exemplar. Nothing outside this folder was modified.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| QRF covariance paper (Nature Communications) | https://www.nature.com/articles/s41467-018-08155-0 | Giacomini, Castro-Ruiz and Brukner, published 30 Jan 2019, volume 10 article 494. Abstract: *"we introduce a general method to quantise reference frame transformations, which generalises the usual reference frame transformation to a 'superposition of coordinate transformations'"*; *"without appealing to an external, absolute reference frame"*. |
| Same paper, open full text (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC6353997/ | Read in full. States *"there is no unique distance between the two reference frames"* when the new frame is delocalised; notes *"no complete formalism is known which would allow to transform to the rest frame of a clock that is in superposition of positions or momenta"*; calls the frame transform *"a translation of system B controlled by the position of system A"*. |
| Relational observables in gravity review | https://arxiv.org/html/1109.0740v2 | Tambornino 2012. *"the gauge group of general relativity is the diffeomorphism group of the underlying manifold"*; *"no preferred notion of external time"*; complete observables *"encode relations between dynamical fields"*; a classical matter reference can be *"the price to pay... a fundamental preferred reference frame"*. |
| Perspective-neutral QRF framework | https://arxiv.org/html/1809.00556v3 | Vanrietvelde, Höhn, Giacomini and Castro-Ruiz, v3 2019. *"reference frames are physical objects that are sufficiently decoupled from the system we want to describe"*; *"taking the perspective of a specific frame amounts to a fixing of the symmetry"*; *"physics is purely relational"*; *"global perspectives on the physics... do not exist in most interesting systems"*. |
| QRFs for general symmetry groups | https://arxiv.org/html/2004.14292 | de la Hamette and Galley, v3 2020. Relational principle: *"states are defined to be relative to one of the systems"*; coherent change principle preserves superpositions; the change of observable is *"Z^i = U^{0->i} Z^0 U^{i->0}"*. Notes that diffeomorphism groups are generally not locally compact, which matters for the group-based construction. |
| Reference frames and relational quantities (Foundations of Physics) | https://link.springer.com/article/10.1007/s10701-018-0138-3 | Loveridge, Miyadera and Busch 2018, open access. *"certain quantities require two systems for their definition"*; *"observables in quantum theory are properly understood as representatives of symmetry-invariant quantities relating one system to another"*; covariant POMs and localisation of the reference system given rigorous treatment. |
| Observing relational observables (Journal for General Philosophy of Science) | https://link.springer.com/article/10.1007/s10838-024-09703-7 | Adlam, published online 28 Mar 2025, volume 57 (2026), open access. Argues *"the way in which quantum reference frames are standardly described does not give us adequate resources to model agency"*; Einstein 1918 quoted: the gravitational field at a place *"does not correspond to something 'physically real', but in connection with other data it does"*. |
| QRF for space and space-time (PIRSA) | https://pirsa.org/21060091 | Brukner, Perimeter Institute, 14 Jun 2021, Quantum Foundations / Quantizing Time. Public abstract and slides record: relativistic QRFs used *"to address typical quantum gravity scenarios"*. |
| FQxI | https://fqxi.org | Public foundation page, mission and essay competitions verified, including an institutional Contact navigation. |
| Quantum journal | https://quantum-journal.org/ | Public homepage of the open journal, "For authors" route present. The guessed URL https://quantum-journal.org/for-authors/ returned 404 and was discarded. |
| arXiv submit overview | https://arxiv.org/help/submit | Public submission routes verified, including TeX, PDF and category cross-listing. |
| Canonical figures extract (local) | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Verbatim figure text with line numbers; all Fig N :line quotes in this folder checked against it. |

**Fetch failure recorded honestly.** https://iopscience.iop.org/journal/0264-9381 (Classical and Quantum Gravity) returned an IOPscience error page, so it is not used as a verified contact point and no claim is made from it. The Lake and Miller "Quantum reference frames, revisited" PDF at https://arxiv.org/pdf/2312.03811 returned an unsupported-content-type error on direct fetch; its abstract was obtained through the search integration and is marked in `10_source_ledger.csv` as partial read with reduced weight. Its abstract was sufficient to register the genuine conflict noted in `09_watson_answer.md`, and no quote is attributed to a page that was not returned by a source.

## Wider literature that bears on the residual, read this session

1. **Relational observables in gravity (Tambornino 2012).** Gives the formal background-independent construction: partial observables plus a clock variable produce a complete observable that commutes with the constraints. Its own caveat is essential: in de-parameterisable models with dust or scalar clocks *"there now is a fundamental preferred reference frame"* and the clocks are treated classically, which conflicts with a fully quantum treatment. This is a world-level version of the convention-versus-ground distinction in F1 and F4 of `01`.
2. **Perspective-neutral QRF (Vanrietvelde et al. 2019).** Choosing an internal perspective is a gauge fixing; switching perspective is a symmetry transformation through the perspective-neutral structure. Also states that global perspectives generally fail, which is why a frame transform is only locally valid. Corroborates the pose requirement and the union reading of the residual.
3. **General symmetry groups (de la Hamette and Galley 2020).** Gives the coherent change-of-frame operator and the transformation of observables, and notes the diffeomorphism group is not locally compact, so the group-based construction does not simply cover general relativity. This is the precise point where the world literature agrees with the figure `gap` in F5.
4. **Loveridge, Miyadera and Busch 2018.** Rigorously defines observables as symmetry-invariant quantities relating one system to a reference system, and shows absolute quantities are good approximations only when the reference is suitably localised. This is the instrument side of F6.
5. **Adlam 2025.** A genuine philosophy-of-science objection: relational observables alone do not explain how an observer observes them, and standard QRF descriptions lack resources to model agency. This is not a conflict with the figure verdict; it is a reminder that the verification domain D3 needs a ground, not more agreement.
6. **Low-overlap analogue, animal navigation.** A 2021 review on dissociating spatial strategies (https://www.sciencedirect.com/science/article/abs/pii/S0149763421001378) reports that allocentric and egocentric reference frames are both available to animals and often go unaccounted for, and that a *"coordinate transformation"* is needed to relate them. A 2025 Nature Communications paper (https://www.nature.com/articles/s41467-024-54699-9) reports both egocentric and allocentric spatial representations in rodent medial entorhinal cortex and says *"a reciprocal transformation between self-centered ('egocentric') and allocentric coordinate systems is essential for spatial navigation"*. These are analogue corroborations of the figure's `F` transform precondition (a pose is needed), not evidence for quantum gravity. Recorded as low-overlap witnesses in `09` and `10_source_ledger.csv`.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Send the shape and its refuter first. Sending the framework before anyone has described a residual sends a recording, not a generator.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the interior before the verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit"* (quoted in full in `01`). Ask what they would expect to see if the shape were true before giving them the links.
- **Fig 2 :35** *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A send selected for likely agreement produces a convention, not corroboration.
- **Fig 2 :40** *"agreement about the world is worthless when the agreeing frames share an evidence pool"*. Later agreement is never pooled as a witness.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure; (3) only then the links, with the note that the figures, not the summary, are the authority; (4) offer the formula as a method for their own problem, with the instruction to write their own refuter and state their own mode.

## The two-stage offer

**Stage 1.** Send the residual in effect terms, the three-part shape and the pre-registered refuter. Record the verdict before showing any theory. This is Fig 10 :52 *"Bring a characterised residual, never the source."*

**Stage 2, opt-in only.** If they are curious, offer the figure extract, the formula and the three core physics links above. Their later agreement is not evidence (Fig 2 :40).

**Stage 3.** Offer the formula as a method to reuse. This is permitted: a generator can be given away without giving away an answer (Fig 4 :22). Each user must name their own ground and write their own refuter, because a frame cannot check the direction of its own question (Formula "Direction").

**Hard precondition.** Stages 1 to 3 only work if the stage-1 output survives. In this folder the stage-1 output is a shape with a declared `gap`, not a universal recipe, and that is exactly what makes it sendable.
