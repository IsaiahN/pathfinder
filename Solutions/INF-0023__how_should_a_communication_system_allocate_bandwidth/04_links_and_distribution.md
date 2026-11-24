# Public links and distribution

All links below were fetched and read on 2026-11-23. They are listed with author, venue, year and a verbatim quote in `10_source_ledger.csv`.

## 1. Sources actually fetched

| what | URL | what the page establishes |
|---|---|---|
| Rate-distortion theory | https://en.wikipedia.org/wiki/Rate%E2%80%93distortion_theory | A rate R and an expected distortion D trade off; the frontier is monotonic, continuous and convex. The rate-distortion function is defined as the minimum mutual information subject to a distortion constraint, and channel capacity must be at least R(D) for reconstruction within D. This is the standard answer to the "accuracy" half of the question. |
| Shannon-Hartley theorem | https://en.wikipedia.org/wiki/Shannon%E2%80%93Hartley_theorem | C = B log2(1 + S/N). Capacity is linear in bandwidth and logarithmic in signal-to-noise ratio. The page explicitly separates a bandwidth-limited regime and a power-limited regime, and notes that as modulation rate rises, spectral efficiency improves at the cost of SNR requirement. This is the rate-versus-power frontier. |
| Landauer's principle | https://en.wikipedia.org/wiki/Landauer%27s_principle | Minimum energy to erase a bit is kT ln 2, and the finite-time result (Proesmans, Ehrich and Bechhoefer 2020) is that erasure in time tau requires extra work falling as 1/tau. Speed therefore enters the energy cost directly, which is why speed and energy are an overlapping condition, not a partition. |
| Multiple description coding | https://en.wikipedia.org/wiki/Multiple_description_coding | A media stream is split into descriptions routed over partially disjoint paths; any description decodes, quality improves with the number received. The page also states that single-description codecs dominate because of complexity and loss of compression efficiency. Redundancy buys resilience only when copies fail independently. |
| Burst error-correcting code | https://en.wikipedia.org/wiki/Burst_error-correcting_code | Errors in storage and wireless channels arrive in clusters, not independently; methods for random errors are inefficient there. Interleaving spreads a physical burst so each row sees near-random errors, and Reed-Solomon with cross-interleaving corrects multi-thousand-bit bursts on compact discs. This is the mechanism behind F4. |
| Rate-distortion-perception tradeoff | https://arxiv.org/abs/1901.07821 | Blau and Michaeli, ICML 2019. Abstract: restricting perceptual quality to be high "generally leads to an elevation of the rate-distortion curve, thus necessitating a sacrifice in either rate or distortion." A three-way tradeoff, which is low-overlap corroboration for the union reading in F1. |
| arXiv submission overview | https://info.arxiv.org/help/submit/index.html | Public submission rules for registered authors, including endorsement and moderation. Verified institutional opt-in route. |
| IEEE Communications Society | https://www.comsoc.org/ | Public society homepage listing publications, submission portals, conferences and a contact route. Verified institutional opt-in routes for `03_public_contact_points.csv`. |

## 2. Wider literature that bears on the allocation claim

1. **The two frontiers are already known.** Rate distortion gives the accuracy-versus-bits frontier; Shannon-Hartley gives the rate-versus-bandwidth-and-power frontier. So the SEARCHED branch of Formula step 7 is live: for a standard channel the answer is in the library and the remedy is more search, not a new atom. What is missing is not a new coding theorem but the application's cost of being wrong.
2. **Independence is physical, not semantic.** Multiple description coding and interleaved burst codes are two separate engineering traditions that arrive at the same shape: split or spread the signal so the failure modes do not coincide. Fig 2 :31 states the general rule; these fields are instances, arrived at independently, so their agreement is weak corroboration at best because the authors read the same engineering corpus.
3. **A third axis appears in the machine-learning literature.** Blau and Michaeli's rate-distortion-perception result shows that even after rate and distortion are fixed, a third desideratum lifts the curve. That is a concrete instance of the union warning in Fig 9 :55, and it is the strongest reason not to present a two-good frontier as complete.
4. **Speed is a cost, not a free parameter.** The finite-time Landauer result links operation time to dissipated work. This is why speed and energy cannot be treated as independent slots in a partition.

None of these sources was quoted as if it derived the shape claim. They corroborate it from fields that do not use the framework vocabulary. Where they would conflict with a figure line, the figure governs and the conflict is sent back to the domain census.

## 3. Distribution: offer, do not push

- **Fig 10 :52** - *"Bring a characterised residual, never the source."* Send the effect and its refuter before the framework.
- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* A recording of a successful allocation is a description of one occasion; the reusable object is the rule for setting floors and buying independence.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before naming any framework.
- **Fig 2 :35** - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not choose recipients for likely agreement.
- **Fig 2 :42** - *"Buy independence in proportion to the cost of being wrong."* The cost of being wrong is high for a safety-critical link, so buy a checker from a different closure rather than a fifth opinion from the same field.

**Recommended order in a reply:** (1) the effect and the four refuters; (2) ask what they would count as a failure and record the verdict; (3) only then the links, with the note that the figures and the formula, not this summary, are the authority.

## 4. The two-stage offer

**Stage 1.** Send `08_expert_verification_packet.md`, which contains the claim, three checkable sub-claims with verbatim figure lines, their refuters, and the non-claims. Ask for a failure, not an endorsement.

**Stage 2, opt-in only.** If they are curious after recording a verdict, offer the sources in §1. Their later agreement is never pooled as corroboration, because Fig 2 :40 says *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."*

**Stage 3.** Offer the eight-step formula as a method to reuse. Formula "Direction" says a frame cannot check the direction of its own question, so each user must write down what would refute their own result and label the mode of what they get.

**Hard precondition.** Stages 1 to 3 only work if the stage-1 output survives. The numeric split does not, and is declared a `gap`; the shape claim does, subject to the six refuters in `01_figure_grounded_audit.md` §3. Do not dress the gap as a result.

## 5. Hosting

Nothing is sent by this agent, and no archive is created outside the solution folder. If the packet is hosted, prefer a download page that lets a recipient decline contact over an attachment pushed to a list. An opt-in page is closer to the figure's rule than a mailing.
