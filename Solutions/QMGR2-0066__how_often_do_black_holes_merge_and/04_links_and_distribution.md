# Public links and distribution

Every URL in the tables below was fetched on 2026-11-23. A fetch that failed is recorded as a failure, not replaced with an invented source. Framework primary files are marked `local:` and are not world sources.

## 1. Framework links, fetched

| what | URL | verified content |
|---|---|---|
| Figures and formula, branch `general-agent` | https://github.com/IsaiahN/tether/tree/general-agent/figures | The public repository's figures folder. Its README says the figures "outrank everything else in the repo" and gives the citation form `Fig N :line`. The local canonical copies used for this folder are `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. |
| Canonical figures README | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Contains the usage limit: the framework returns "what a missing thing would have to look like (a shape, not a name)", and "Indiscernibility is not identity." |
| Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Published 2026-08-28 by Isaiah N. Metamerism: an instrument that reads green "cannot comment on the source"; "If several paths create the same behavior, then behavior is a projection with lossy information"; "An instrument that can't distinguish these cases demonstrates its own inadequacy." This is the governing essay for the rate-versus-route split. |
| The Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Published 2026-10-02 by Isaiah N. "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Published 2026-11-19 by Isaiah N. "the truly testable output would need to be derived from the real architecture or working the formula yourself." Also the prestige rule: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action." |
| They're Scanning Books When They Should | https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should | "The real import is not a new term in the existing space. It is a new dimension of the space." Used in `05` for the discriminator-as-new-axis point. |
| How a Society of Agents Would Work | https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work | Opened and listed in `05` as one of the eight essays. No verbatim quote from this page is used as evidence in this folder. |
| Arrival of the Fittest: The Tether | https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether | Opened and listed in `05`. Contains the formula's Direction limit: a frame holds the sought shape as a preference, not a term. |

Fetch failures recorded honestly: `https://www.ligo.caltech.edu/page/contact-us` returned a server error (500), `https://authors.aps.org/` and `https://www.aps.org/about/contact` returned 403 to this environment, `https://authors.iop.org/` failed at the transport layer, and `https://www.aanda.org/for-authors` returned 403. None of these is cited as a read source. The IOP journal page, the LIGO home page, GWOSC, the KAGRA and Virgo sites and arXiv were fetched successfully and are the venues used in `03_public_contact_points.csv`.

## 2. World literature relevant to the residual

These are the substantive world sources used in `09_watson_answer.md` and `10_source_ledger.csv`. All were opened on 2026-11-23. Most were read as full abstracts through arXiv abstract pages or the arXiv API, which is stated so that the weight is honest.

| source | URL | what it contributes |
|---|---|---|
| LVK, "The population of merging compact binaries inferred using gravitational waves through GWTC-3", PRX 13, 011048 (2023) | https://arxiv.org/abs/2111.03634 | The rate: between 17.9 and 44 Gpc^-3 yr^-1 at z=0.2, with a redshift trend proportional to (1+z)^kappa, kappa = 2.9 (+1.7, -1.8) for z less than about 1. Also mass-structure peaks. Ground-owned number. |
| LVK, "GWTC-3: Compact Binary Coalescences Observed by LIGO and Virgo During the Second Part of the Third Observing Run", PRX 13, 041039 (2023) | https://arxiv.org/abs/2111.03606 | 90 candidates with p_astro > 0.5 across the first three observing runs, and the explicit limit that "from the gravitational-wave data alone, we are not able to measure matter effects that distinguish whether the binary components are neutron stars or black holes." An instrument cannot comment on the source. |
| LVK, "Population Properties of Compact Objects from the Second LIGO-Virgo Gravitational-Wave Transient Catalog" (2021) | https://arxiv.org/abs/2010.14533 | The channel inference is conditional: "Under the assumption that such systems can only be formed by dynamical interactions, we infer that between 25% and 93% of BBH" with non-vanishing effective inspiral spin. The rate estimate there is 23.9 (+14.3, -8.6) Gpc^-3 yr^-1, one pool with the 2023 paper. |
| Mapelli, "Binary black hole mergers: formation and populations", Frontiers in Astronomy and Space Sciences 7, 38 (2020) | https://arxiv.org/abs/2105.12455 | Review of the isolated and dynamical channels: "The dynamical formation channel leaves several imprints on the mass, spin and orbital properties of BBHs." The imprints are the lineage. |
| Zevin, Romero-Shaw, Kremer, Thrane and Lasky, "Implications of Eccentric Observations on Binary Black Hole Formation Channels", ApJL 921, L43 (2021) | https://arxiv.org/abs/2106.09042 | "Orbital eccentricity is one of the most robust discriminators for distinguishing between dynamical and isolated formation scenarios." A discriminator already returning a value. |
| Franciolini and Pani, "Searching for mass-spin correlations in the population of gravitational-wave events: the GWTC-3 case study", PRD 105, 123024 (2022) | https://arxiv.org/abs/2201.13098 | "identifying features in the growing wealth of data may help in distinguishing different formation pathways." Statistical inference as the source-discrimination frame. |
| Chen, Du, Huang and You, "Constraints on Primordial-black-hole Population and Cosmic Expansion History from GWTC-3", JCAP 03 (2023) 024 | https://arxiv.org/abs/2205.11278 | A mixed astrophysical plus primordial model describes the mass distribution better than any single model. One reading, more than one admissible source. |
| LIGO newsroom, "GWTC-5.0: Updated LVK Catalog sets new records", 2026-05-26 | https://www.ligo.caltech.edu/news/ligo20260526 | 161 new events, 390 confirmed in total, and "evidence for the existence of second-generation black holes." Current state of the ground. |
| LIGO newsroom, "Pair of Distinct Black Hole Mergers Sheds New Light on Nature of Their Formation and Evolution", 2025-10-28 | https://www.ligo.caltech.edu/news/ligo20251028 | GW241011 and GW241110: unequal masses and unusual spins, with "tantalizing evidence that these black holes were formed from previous black hole mergers." Partial ground contact, not a settled route. |

Overlap declared: the four LVK papers and two LIGO newsrooms draw on one detector and one catalog pipeline, so they are one witness for the measured rate and event count, not several. Mapelli, Zevin and Franciolini and Pani draw on population-synthesis and statistical frames that overlap with the LVK data but use different methods; their agreement is weak corroboration at best. The primordial-paper and the eccentricity-paper are the lowest-overlap world witnesses for the claim that different routes leave different imprints. The framework essays share the framework author's evidence pool completely and carry no independent witness weight.

## 3. Distribution: offer, do not push

- **Fig 10 :52 "Bring a characterised residual, never the source."** First contact is the union split, the symmetry-order split, and the five refuters. The framework interior stays back.
- **Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."** A recipient who has absorbed the whole framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit."** Ask what they would expect to see if the shape claim were true before giving them `01` or `05`.
- **Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."** Do not ask for agreement, do not ask for trust, and do not pool later agreement as corroboration (Fig 2 :40).
- **Fig 4 :22 "Only methods cross up. Only head starts come down."** Stage 3 sends a method. A generator can be given away without giving away an answer.

Recommended order in a reply:

1. The shape claim and its five refuters.
2. The question: what would you count as a failure of this claim? Record the answer before any theory is shown.
3. Only if they are curious, the three framework links and the public data links, with the note that the figures, not the summary, are the authority.
4. Only if they ask, the formula as a method, with the instruction to write their own refuter and state their own mode.

## 4. Two-stage offer

**Stage 1.** Validate the output against the ground: the union split and the discriminator requirement. The recipient checks this without holding the framework's interior. Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

**Stage 2, opt-in.** If curious, read the theory that produced it. The stage-1 verdict must be recorded first. Agreement after stage 2 is never pooled as corroboration, because the recipient then shares the evidence pool (Fig 2 :40).

**Stage 3, opt-in.** Offer the formula as a reusable method. Each user writes a refuter before running it, states a mode, and names a ground. `THE_FORMULA.md` Direction: a frame "cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."

**Hard precondition.** Stages 1 to 3 only work if stage 1 survives. A refuter that fires ends the conversation with a correction recorded in `11_audit.md` with provenance; it is not negotiated away.

## 5. Submission cautions

A simulated derivation must be labelled as such in any submission. Do not present the figure-derived shape as a measurement of the merger rate. Attribution pages for journals that returned 403 to this environment were not used; verify current author policies before submitting. Public institutional and opt-in channels avoid the legal failure of unsolicited bulk mail as well as the structural failure of manufacturing a room of agreed listeners.
