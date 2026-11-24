# Public links and distribution

All links below were fetched and read on 2026-11-23 unless the row says otherwise. Links that blocked automated fetch are marked plainly, not presented as verified content.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Burst error-correcting code | https://en.wikipedia.org/wiki/Burst_error-correcting_code | Defines a burst of length ℓ as nonzero components confined to ℓ consecutive positions; cyclic codes detect all bursts up to ℓ=n−k; the Rieger bound 2ℓ≤n−k; Fire codes; Reed-Solomon over F_2^m where a burst of (m+1) bit errors affects at most two symbols; a λ-way interleaver raises correctable burst length to λℓ; block versus convolutional interleavers with the latency and memory trade-off; the compact-disc CIRC case correcting bursts up to 3,500 bits and compensating up to 12,000. |
| Burst error and the Gilbert-Elliott model | https://en.wikipedia.org/wiki/Burst_error | Gilbert-Elliott is a two-state Markov chain, good (G) and bad (B), with different bit-error probabilities, usually k=1; cites Gilbert 1960 "Capacity of a burst-noise channel", Bell System Technical Journal 39(5):1253-1265, and Elliott 1963, BSTJ 42(5):1977-1997. The parameters were derived from a success/failure sequence, so the channel model comes from measurement. |
| Reed-Solomon error correction | https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction | Introduced by Reed and Solomon in 1960; detects up to t check symbols and corrects up to ⌊t/2⌋ at unknown locations; erasures count double; *"well-suited to applications where errors occur in bursts"* and *"a poor choice compared to a binary code"* for random single-bit errors; CIRC in the CD uses two interleaved RS codes with a 28-way interleaver; Voyager concatenated RS with convolutional codes; later systems move to turbo and LDPC codes. |
| arXiv cs.IT archive | https://arxiv.org/archive/cs.IT | Public archive; category scope: *"Covers theoretical and experimental aspects of information theory and coding."* A public submission route, not peer review. |
| ISIT 2026 home | https://www.ieee-isit.org/ | Public call: *"ISIT 2026 invites submission of manuscripts on all classical topics of Information Theory such as Shannon Theory, Coding Theory and Techniques..."* The 2026 deadlines are listed as passed; the site is live and its author pages were fetched. |
| ISIT Information for Authors | https://www.ieee-isit.org/index.php/information-authors | Public submission rules, IEEE template requirement, 5-page limit, EDAS upload, and a disclosure rule: *"The use of artificial intelligence (AI)-generated text in an article shall be disclosed in the acknowledgements section."* Relevant if any of this material is submitted. |
| Talk:Burst error-correcting code | https://en.wikipedia.org/wiki/Talk:Burst_error-correcting_code | Public, archived discussion page; B-class mathematics / computer science article. An opt-in public venue for a narrow technical correction, not a peer-review substitute. |

## Sources that blocked automated fetch (marked, not counted as verified content)

| what | URL | result |
|---|---|---|
| IEEE Information Theory Society | https://www.itsoc.org/ | HTTP 403 on 2026-11-23. The society is linked from the verified ISIT site, so it exists, but no content was read here. |
| IEEE Transactions on Information Theory submission portal | https://mc.manuscriptcentral.com/ieee-it | Reached what is clearly the journal-specific ScholarOne portal, but the page requires cookies and JavaScript; no submission was made and no author instructions were read there. |
| Entropy journal | https://www.mdpi.com/journal/entropy | HTTP 403 on 2026-11-23. Listed as a candidate venue only, not as verified content. |

No claim in any solution file rests on an unread source. The three blocked URLs appear only in `03_public_contact_points.csv`, where the status is recorded in the notes column.

## Wider literature that bears on the question (read via the pages above)

These are references cited by the pages actually fetched. They are recorded here as *pointed to*, not as independently opened, except where the essay corpus quotes them directly.

- Gilbert, E. N. (1960), "Capacity of a burst-noise channel", *Bell System Technical Journal*, 39(5), 1253-1265. The two-state channel model.
- Elliott, E. O. (1963), "Estimates of error rates for codes on burst-noise channels", *Bell System Technical Journal*, 42(5), 1977-1997.
- Reed, I. S. and Solomon, G. (1960), "Polynomial Codes over Certain Finite Fields". The original symbol code whose burst strength comes from grouping bits into symbols.
- Ling, S. and Xing, C. (2004), *Coding Theory: A First Course*, Cambridge University Press, and Moon, T. K. (2005), *Error Correction Coding: Mathematical Methods and Algorithms*, Wiley. Cited by the burst-code page for bounds and interleaving.
- Rissanen, J. (1978), "Modeling by shortest data description", *Automatica* 14(5), 465-471. Cited by the Arrival of the Fittest article as the borrowed machinery behind Fig 5's acceptance test, which is the bargain used in `01` F7.
- Shannon, C. E. (1948), "A mathematical theory of communication", *Bell System Technical Journal* 27. Cited by the same article as borrowed machinery.
- Kish, L. (1965), *Survey Sampling*, Wiley. Cited by Fig 2 :44 and the author's essays for the effective-sample-size correction under correlation. The same arithmetic appears twice here: correlated bits and correlated expert opinions.

## Two things in the field's own literature that bear directly on this question

1. **The burst-versus-random distinction is already a split, not a ranking.** The Reed-Solomon page says the code is *"well-suited to applications where errors occur in bursts"* and *"a poor choice compared to a binary code"* for independent single-bit errors. That is Fig 9 :5 (*"Split it rather than search"*) arrived at inside coding theory. It is why this solution refuses to name a universal winner.
2. **The winning move at equal redundancy is arrangement.** The burst-code page states the interleaving theorem: a λ-way interleave of an ℓ-burst-correcting code is a λℓ-burst-correcting code. The CIRC case uses two RS codes and a 28-way interleaver; the cost is latency and memory. That is Fig 12 :94 (*"The arrangement is the substance"*) plus Fig 12 :126 (*"A composition costs in two currencies, and they do not add"*) in the field's own terms.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22**  -  *"Only methods cross up. Only head starts come down."* Sending the full architecture before a reader has described a channel sends a recording, not a generator. Lead with the shape claim and its refuter; offer links after.
- **Fig 10 :42**  -  *"A verifier that can reconstruct the claim cannot verify it."* Seat 4 must not hold the interiors. A reader who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28**  -  *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what channel statistic they would expect to see if the shape claim were true before giving them the article.
- **Seat Map :163**  -  *"High correlation is disqualifying for a verdict and efficient for a convention."* A mass send selected for people likely to agree produces a convention, not corroboration.

**Recommended order in a reply.** (1) The shape claim and its pre-registered refuter; (2) ask what channel measurement they would count as a failure; (3) record that answer; (4) only then the three links, with the note that the figures, not the summary, are the authority.

**Hard precondition.** Stages 1 to 3 work only if the stage-1 output survives. The output in `08_expert_verification_packet.md` is `specified`, not `grounded`; a reader's BER curve, not agreement with the packet, settles it.

## Provenance of the import

The interleaver is imported into the derivation from public coding theory (Fig 6 :14 calls import *"the only operator that moves the wall"*). The source gate is satisfied by the public pages above with named authors and years. The shadow test is satisfied because interleaving explains a real gap: it converts a physical burst into separable symbol errors, which is exactly what the shape claim requires. The import is debited against independence: it comes from a frame (coding theory) whose closure differs from the metatheory, and it is recorded here rather than presented as figure-derived.
