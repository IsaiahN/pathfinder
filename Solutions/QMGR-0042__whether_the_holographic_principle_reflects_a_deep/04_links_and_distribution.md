# Public links and distribution

Every link below was actually fetched between 2026-11-22 and 2026-11-23. Fetch failures are recorded honestly rather than presented as reads.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Bousso, The holographic principle (arXiv record) | https://arxiv.org/abs/hep-th/0203101 | Submitted 12 Mar 2002, v2 29 Jun 2002. Journal reference Rev. Mod. Phys. 74 (2002) 825-874. Abstract: *"There is strong evidence that the area of any surface limits the information content of adjacent spacetime regions, at 10^69 bits per square meter"* and *"A universal relation between geometry and information is thus uncovered. It has yet to be explained."* |
| 't Hooft, Dimensional Reduction in Quantum Gravity | https://arxiv.org/abs/gr-qc/9310026 | Submitted 19 Oct 1993. Abstract: *"the observable degrees of freedom can best be described as if they were Boolean variables defined on a two-dimensional lattice, evolving with time."* Origin statement of the dimensional-reduction claim. |
| Maldacena, The Large N Limit of Superconformal Field Theories and Supergravity | https://arxiv.org/abs/hep-th/9711200 | Submitted 27 Nov 1997, v3 22 Jan 1998. Adv. Theor. Math. Phys. 2 (1998) 231-252. Abstract: *"We conjecture that compactifications of M/string theory on various Anti-deSitter spacetimes are dual to various conformal field theories."* |
| Ryu and Takayanagi, Aspects of Holographic Entanglement Entropy | https://arxiv.org/abs/hep-th/0605073 | Submitted 6 May 2006. JHEP 0608:045. Abstract: *"a holographic interpretation of entanglement entropy in conformal field theories is proposed from AdS/CFT correspondence"* and *"relates the entanglement entropy with the minimal area surfaces in the AdS_3/CFT_2 case"*. |
| Van Raamsdonk, Building up spacetime with quantum entanglement | https://arxiv.org/abs/1005.3035 | Submitted 17 May 2010. Gen. Rel. Grav. 42 (2010) 2323-2329. Abstract: *"the emergence of classically connected spacetimes is intimately related to the quantum entanglement of degrees of freedom in a non-perturbative description of quantum gravity."* |
| Almheiri, Dong and Hartnoll, Bulk Locality and Quantum Error Correction in AdS/CFT | https://arxiv.org/abs/1411.7041 | Submitted 25 Nov 2014. JHEP 1504:163. Abstract: *"the question of whether bulk operator reconstruction works only in the causal wedge or all the way to the extremal surface"* and *"clarifies the limits of its validity."* This is the round-trip-gap measurement. |
| Fields, Glazebrook and Marcianò, The physical meaning of the holographic principle | https://arxiv.org/abs/2210.16021 | Submitted 28 Oct 2022. Quanta 11 (2022) 72-96. Abstract: *"the holographic principle (HP) is a straightforward consequence of the quantum information theory of separable systems"* and *"Principles equivalent to the HP appear in both computer science and the life sciences, suggesting that the HP is not just a fundamental principle of physics, but of all of science."* Genuinely lower-overlap frame. |
| De Haro, Cinti and Corbeel, Holography as an Information Principle in Quantum Gravity | https://arxiv.org/abs/2608.26282 | Submitted 26 Aug 2026. Forthcoming, World Scientific festschrift. Abstract: *"holographic bounds on the amount of information that can be stored in a region function as theory selection criteria"* and *"holography functions as a principle of theoretical equivalence: the bulk and boundary theories must describe the same physical content"*. |
| Adlam, Are Entropy Bounds Epistemic? | https://arxiv.org/abs/2303.10781 | Submitted 19 Mar 2023, v3 6 Jul 2023. Abstract distinguishes *"ontological and epistemic interpretations of the covariant bound"* and states *"Our aim is not to advocate for either... in particular, but rather to articulate both possibilities clearly."* Full text page also read via search integration, including the Smolin quotation on discreteness and the direction-of-explanation question. |
| Landauer's principle (Wikipedia) | https://en.wikipedia.org/wiki/Landauer%27s_principle | Opened 2026-11-23. States the bound E >= k_B T ln 2 and records Landauer 1961, IBM J. Res. Dev. 5 (3) 183-191, plus Bennett 2003. Low-overlap information-theory and thermodynamics frame. |
| Framework essays (canonical shape reading) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the ; https://adventuresinml.substack.com/p/the-hard-problem-is-about-source ; https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Opened 2026-11-23. Used for the shape, source-discrimination and simulation-status claims in `05_what_shape_means.md`. Framework author's pool, so maximal overlap with the figures and no independent witness weight. |

## Search result read, direct fetch blocked

- **Wolf, Verstraete, Hastings and Cirac, "Area Laws in Quantum Systems: Mutual Information and Correlations", Phys. Rev. Lett. 100 (2008) 070502.** Direct fetch of `https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.100.070502` returned 403. The complete abstract was returned by the search integration and is recorded in the ledger with that status. Quote used: *"the information contained in part of a system in thermal equilibrium obeys an area law"* and *"an area law is generally implied by a finite correlation length when measured in terms of the mutual information."* This is the only low-overlap witness that could have threatened the uniqueness of the area law, and its result was folded back into the census (F5) rather than used to flip a verdict.
- `https://www.mdpi.com/journal/entropy` returned 403. Not cited and not placed in the contact CSV.
- `https://www.aps.org/about/contact` returned 403. Not cited and not placed in the contact CSV.

## Verified venue pages for public contact points

arXiv submission (`https://arxiv.org/help/submit`), JHEP (`https://jhep.sissa.it/`), Classical and Quantum Gravity (`https://iopscience.iop.org/journal/0264-9381`), FQxI (`https://fqxi.org`), the Philosophy of Physics Society (`https://philosophyofphysics.org`) and INSPIRE-HEP (`https://inspirehep.net/`) were opened. INSPIRE returned minimal static content to the fetcher, so it is marked as a mapping and provenance aid, not a submission venue. See `03_public_contact_points.csv`.

## Wider literature context

The substantive sources divide into three pools. The **physics core** (Bousso, 't Hooft, Maldacena, Ryu-Takayanagi, Van Raamsdonk, Almheiri et al.) is the high-overlap pool that supplies the area law, the duality and the reconstruction problem. The **information and complexity frame** (Fields et al., Wolf et al., Landauer) is genuinely lower overlap and supplies the claim that area-like bounds recur outside quantum gravity. The **philosophy of physics frame** (De Haro et al., Adlam) is lower overlap in *frame* but shares the same underlying physics evidence, so its agreement is not an independent witness. The three pools are recorded separately in `10_source_ledger.csv`. Agreement among them is expected because they cite one another's results; Fig 2 :40 says *"agreement about the world is worthless when the agreeing frames share an evidence pool"*, so this is corroboration of shape only, never a verdict by vote.

No world source conflicts with the figure verdict after re-census. Two apparent conflicts (domain-agnostic recurrence versus bottom-level depth; area-law generic versus area-law special) were returned to the census and dissolved in F5 and F7. The conflict rule never flipped a verdict.

## Distribution: offer, do not push

- **Fig 4 :22-25** - *"Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion."* Sending the entire framework before someone has described a residual sends a recording. Lead with the two verdicts and the refuter; offer links after.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the sources.
- **Fig 2 :35** - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A list selected for receptiveness is a list selected to agree.
- **Fig 2 :42** - *"Buy independence in proportion to the cost of being wrong."* The cost here is moderate, so a small number of carefully chosen, different-closure readers is the right buy.

**Recommended order in a reply:** (1) the two separate verdicts and the shape claim; (2) ask what the recipient would count as a failure and record it; (3) only then the three links, with the note that the figures, not the summary, are the authority; (4) only then, if they ask, the formula as a reusable method with their own refuter and mode written first.

## The two-stage offer (authorisation and limits)

Stage 1 carries the residual, the two separate verdicts and the pre-registered refuter. Stage 2, opt-in, carries the source links. Stage 3, opt-in, carries the formula. The verdict on stage 1 must be recorded before any theory is shown, and later agreement is never pooled as corroboration (Fig 2 :40, Fig 7 :35).

Nothing is sent by this agent. Hosting and sending are the owner's to do. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list.
