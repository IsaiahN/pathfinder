# Public links, wider literature and distribution

All links in the first two tables were fetched and read on 2026-11-23. A link that failed is listed in the third table and is not cited as read.

## 1. Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| COSYNE 2027 | https://cosyne.org/ | Computational and Systems Neuroscience, Montréal 11 to 16 March 2027. Public abstract submission, presenter guidance, workshop proposals, contact and mailing lists. States that success depends on free exchange of ideas and that the meeting joins experimental and theoretical work. |
| PLOS Computational Biology | https://journals.plos.org/ploscompbiol | Public submission guidelines and journal information. Recently published items include `pyhgf: A neural network library for predictive coding` (2026), so the venue is active for the exact mechanism class in question. |
| Psychonomic Society | https://www.psychonomic.org/ | Public society site with journals including *Attention, Perception, & Psychophysics*, *Memory & Cognition* and *Psychonomic Bulletin & Review*, plus meeting abstract and symposium calls. Describes a community of over 4000 cognitive and experimental psychologists. |
| ARVO | https://www.arvo.org/ | Public site with Annual Meeting 2027, call for session proposals, scientific sections and a journal family. Relevant because the vision community measures change detection at defined retinal positions. |
| Society for Neuroscience | https://www.sfn.org/ | Public Find a Neuroscientist directory, publications, Neuroscience 2026 and 2027 meeting pages and a public call for proposals. Gives an opt-in route to ground-visible checkers. |
| Rate–distortion theory | https://en.wikipedia.org/wiki/Rate%E2%80%93distortion_theory | Shannon's framework for lossy compression: minimal rate for a source reconstructed within a distortion bound. Notes that the distortion measure *"should preferably be modeled on human perception"* and that this is often not easy to include in the theory. |
| Metamerism (color) | https://en.wikipedia.org/wiki/Metamerism_(color) | *"a perceived matching of colors with different (nonmatching) spectral power distributions."* Documents illuminant, observer, geometric, field-size and device metamerism, and the CIE metamerism index. |
| Predictive coding | https://en.wikipedia.org/wiki/Predictive_coding | Prediction versus sensory input yields a difference measure that updates the model when it exceeds expected noise; otherwise higher-level activity cancels lower-level activity. Records that there is *"no consensus on how the brain most likely implements predictive coding"*. |
| Information bottleneck method | https://en.wikipedia.org/wiki/Information_bottleneck_method | Tishby, Pereira and Bialek: a tradeoff between accuracy and compression when summarising `X` given a relevant variable `Y`; *"a surprisingly rich framework for discussing a variety of problems in signal processing and learning"*. Records the dispute about whether compression actually occurs in deep networks. |
| Minimum description length | https://en.wikipedia.org/wiki/Minimum_description_length | Grünwald's statement that a regularity can be used to compress data; Rissanen 1978; the two-part code `L(D) = min_H (L(H) + L(D|H))`; the biased-coin example where the best fit is rejected. |
| Efficient coding hypothesis | https://en.wikipedia.org/wiki/Efficient_coding_hypothesis | Barlow 1961: minimise spikes for a given signal. Reports the 10^9 bit/s retinal input versus 10^6 bit/s optic nerve and 40 bit/s overall limit, with inattentional blindness as a consequence. |
| Change blindness | https://en.wikipedia.org/wiki/Change_blindness | *"unless a change in the visual scene produces a localizable transient signal at a specific position on the retina, people typically fail to detect the change."* Also reports better detection in teams and with expertise. |
| Abstract interpretation | https://en.wikipedia.org/wiki/Abstract_interpretation | Cousot and Cousot, late 1970s: sound approximation with abstraction `alpha` and concretisation `gamma`, and the observation that separately exact operations can compose imprecisely. |
| Neural coding | https://en.wikipedia.org/wiki/Neural_coding | Rate code ignores temporal structure and is *"inefficient but highly robust"*; two spike strings with the same mean rate can mean different things. Notes intense unresolved debate about rate versus temporal coding. |
| Goodhart's law | https://en.wikipedia.org/wiki/Goodhart%27s_law | Strathern 1997: *"When a measure becomes a target, it ceases to be a good measure."* The direct world analogue of Fig 1 :25 to :27. |
| Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Metamerism used as the source-discrimination problem: an instrument that reads green cannot comment on whether the source was one green light or a mixture. The spectrometer, not an argument, resolved it. |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | *"You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Compressed messages need context, subtext and pretext; when contact is impossible, send a description of what you would expect to see. Quotes Fig 4 :31, Fig 13 :32 and Fig 11 :40 directly. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | *"the output is only as good as the validator"*; *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action."* |

## 2. Wider literature, by field

These are corroboration only. The figures decide; a world source can narrow a shape or supply an instrument, never overrule a figure verdict.

- **Information theory and coding (low overlap with the framework author).** Rate–distortion theory makes the tradeoff explicit and refuses to let the rate alone define quality; the distortion measure has to model the receiver. MDL adds the two-part code and the rule that a hypothesis must pay for itself, which is Fig 5 :43 to :45 in a different notation. Both corroborate the separator, neither supplies a universal ratio.
- **Color science and industry (genuinely low overlap).** Metamerism is the cleanest world case of systematic distortion: one reading, several sources, and the match fails under a changed illuminant or observer. It corroborates Fig 12 :117 and the source-discrimination essay. It does not decide which perceptual features to keep.
- **Human perception and attention (low overlap with the framework, but one broad pool among themselves).** Change blindness supplies the artifact named in Fig 10 :25, the dropped transient, and the team result is the shape of an independent frame. Predictive coding supplies the residual language and an honest stop: no consensus on implementation. Efficient coding supplies the bandwidth numbers that make compression necessary in the first place.
- **Computational neuroscience and machine learning.** Information bottleneck gives the accuracy-versus-compression objective with a relevant variable `Y`. The dispute about its compression phase (Saxe et al. versus Shwartz-Ziv and Tishby; Goldfeld et al. calling it geometric) is recorded as a world conflict, not smoothed into agreement.
- **Formal methods (lowest overlap).** Abstract interpretation is the field where abstraction and concretisation are defined and the round trip is studied. It corroborates Fig 4 :30 and the Symbols table definition of `R_T`.
- **Measurement and evaluation (low overlap).** Goodhart's law is the external form of Fig 1 :27: a measure that becomes a target stops being a good measure. Compression achieved is exactly such a target.
- **Framework essays (maximum overlap).** The four essays above are by the framework author and quote the figures directly. Their agreement with the figures is expected and carries little independent witness weight.

Overlap is declared in `10_source_ledger.csv`. The Wikipedia pages cross-reference each other and are one broad pool, not fourteen independent witnesses. The metamerism, change-blindness, abstract-interpretation and Goodhart pages are the lower-overlap corroborators.

## 3. Fetch failures, recorded honestly

| attempted URL | result | handling |
|---|---|---|
| https://www.vsosph.org/ | transport error | omitted from the contact CSV; not cited as read |
| https://jov.arvojournals.org/ | HTTP 403 | omitted; use the public ARVO site instead |
| https://www.cogscisociety.org/ | transport error | omitted |
| https://www.frontiersin.org/journals/perception-science | HTTP 404 | omitted |
| https://journals.sagepub.com/home/ipe | HTTP 403 | omitted |

Nothing from a failed page is quoted in this folder.

## 4. Distribution rules: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Sending the architecture before anyone has described a residual sends a recording, not a generator. Lead with the separator and its refuter; offer links after.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the frame before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27 and :28** *"describe it before you go looking, or any frame you pick will seem to fit"* Ask what the recipient would expect to see at the failing slot before giving them the article.
- **Fig 2 :40** *"agreement about the world is worthless when the agreeing frames share an evidence pool"* A list selected for likely agreement produces a convention, not corroboration.
- **Fig 13 :134** *"Unreachable is a verdict here, not a silence"* A declined reply is data about reachability, not a defeat to be argued away.

**Recommended order in a reply:** (1) the separator and its seven refuters; (2) ask what they would count as a failure in their preparation; (3) record that answer; (4) only then the three links, with the note that the figures, not the summary, are the authority.

**Legality and courtesy:** one-to-one contact only. No bulk send, no automation, no misleading subject line, and an opt-out line in every message. Public institutional or opt-in channels only. GDPR and CAN-SPAM style rules apply to unsolicited outreach in many jurisdictions. No personal emails appear anywhere in this folder.

## 5. The two-stage offer

1. **Stage 1:** validate the output against a ground. Ask for the failure condition and the instrument. Record the verdict before any theory is shown.
2. **Stage 2, opt-in only:** if the recipient is curious, offer the three links.
3. **Stage 3:** offer the formula as a method to reuse. Each user writes their own refuter and states their own mode before running it.

Stage 1 before stage 2 is Fig 10 :52, *"Bring a characterised residual, never the source."* Stage 2 stays opt-in because a recipient who has absorbed the theory can no longer serve as an outside frame. Stage 3 sends a method, which is permitted: giving away a generator does not give away an answer. It still needs a ground per problem, because a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. As written, this solution makes no claim that it has been settled by a ground. It is a shape with refuters, offered for checking.
