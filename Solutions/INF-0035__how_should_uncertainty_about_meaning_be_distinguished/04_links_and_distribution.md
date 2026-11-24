# Public links and distribution

Every link in the first table was fetched and read on 2026-11-23 (the framework repository links were checked earlier in the pipeline on 2026-11-22 and re-used here). No link is listed that was not opened.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Information, Stanford Encyclopedia of Philosophy | https://plato.stanford.edu/entries/information/ | First published 2012, substantive revision 2023, by Pieter Adriaans and Johan van Benthem. States that "Philosophy of semantic information adds the dimensions of meaning and truthfulness" and that formal entropy based definitions "do not necessarily measure information in meaningful truthful datasets". Distinguishes Shannon information, Kolmogorov complexity and semantic information as different proposals. |
| A Mathematical Theory of Communication | https://en.wikipedia.org/wiki/A_Mathematical_Theory_of_Communication | Shannon 1948, Bell System Technical Journal. Lists the elements of communication: an information source, a transmitter, "A channel, which is the medium over which the signal, carrying the information that composes the message, is sent", "A receiver, which transforms the signal back into the message intended for delivery", and a destination. Notes the noisy channel coding theorem. |
| Shannon's source coding theorem | https://en.wikipedia.org/wiki/Shannon%27s_source_coding_theorem | "Source coding is a mapping from (a sequence of) symbols from an information source to a sequence of alphabet symbols (usually bits) such that the source symbols can be exactly recovered from the alphabet symbols". Adds that "the decoder knows the source. From a practical point of view, this assumption is not always true." |
| Vervet monkey (animal behaviour) | https://en.wikipedia.org/wiki/Vervet_monkey | Reports Seyfarth, Cheney and Marler 1980 and Cheney and Seyfarth 1988. "The sighting of each predator elicits an acoustically distinct alarm call." "This suggests vervet monkeys are able to recognize and to respond to not only the individual calling, but also to the semantics of what the individual is communicating." Describes habituation to unreliable signalers. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. "If several paths create the same behavior, then behavior is a projection with lossy information (it cannot define consciousness in full)." Metamerism example: a spectrometer, not an argument, discriminates the source of a green reading. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 2026-11-10. "Context, subtext and pretext decide what a message means to you. None of them decides whether it is true. Only the ground does that." Also: "a measurement with no question is noise, and a reading with no encounter is projection." |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." LLM output is "simulacra". |
| Figures and formula, branch general-agent | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, Figures 1 to 13, Operators and Symbols tables as SVG, plus README and THE_FORMULA. Its README says the figures "outrank everything else in the repo" and gives the citation form `Fig N :line`. |

**Fetch failures recorded honestly.** The Harvard-hosted PDF of Shannon 1948 returned an unsupported content type, the Bell/other PDF route was not used, the Taylor and Francis journal page returned 403, the Cognitive Science Society site returned a transport error, and the PhilSci Archive and one Springer journal number probes were transport errors or resolved to unrelated journals. None of those is cited as a read source. Synthese was verified through its search result and Springer landing pages (journal 11229) on 2026-11-23.

## Wider literature that bears on this question, fetched and used

1. **Engineering and mathematics (low overlap with the framework).** Shannon's source/channel split is the closest established analogue. The channel theorem governs reproducing a message at one point from a signal sent at another; the source coding theorem governs recovering symbols and explicitly notes that "the decoder knows the source" is an assumption that often fails. That is the same shape as the distinction derived here: arrival is not interpretation. It is an analogue and a corroboration, not a source of the verdict (Fig 8 :50-52: convergent derivation and adopted import look identical in the contents; only the record separates them).
2. **Animal behaviour (very low overlap).** Vervet alarm calls are acoustically distinct, so reception is measurable, while the response tracks "the semantics of what the individual is communicating" and habituation to unreliable signalers shows reliability is tracked separately from detection. No human interpreter and no framework vocabulary are needed for that result.
3. **Philosophy of information (low overlap).** SEP separates quantitative measures from semantic information, which "adds the dimensions of meaning and truthfulness". That supports keeping the two uncertainties in separate columns, while warning that merging them into one scalar is a category move, not a measurement.
4. **Perception and instruments (framework author, high overlap).** The metamerism essay supplies the positive remedy for a seam problem: an instrument that cannot distinguish sources demonstrates its own inadequacy, and a spectrometer resolved what argument could not. This corroborates the slot for a source-discriminating instrument; it does not fill it.

No world source conflicts with the figure verdict. The conflict rule was not triggered. The three framework essays share an author and evidence pool with the figures, so their agreement is expected and carries little independent weight (Fig 2 :40).

## Distribution: offer, do not push

- **Fig 4 :22-25** "Only methods cross up. Only head starts come down." A recording of the conclusion sent before a recipient has described a residual is a description of one occasion, not a generator. Lead with the two tests and the refuter; offer the links after.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what the recipient would count as a channel failure and as a meaning failure before showing the article.
- **Fig 2 :40** agreement over a shared pool is worthless as a verdict; **Fig 2 :41** agreement about a shared meaning is the product of a convention. Ask for a failure, never for agreement.
- **Seat Map :163** "High correlation is disqualifying for a verdict and efficient for a convention." No list selected for receptiveness.

## The two-stage offer

**Stage 1.** Send the residual and the refuter only: the claim that reception uncertainty and meaning uncertainty are different failure genera with opposed remedies, plus the four failure conditions in `02_outreach_email.md`. Ask what the recipient would count as a failure in each domain. Record the verdict **before** showing any theory.

**Stage 2, opt-in only.** If they are curious, offer the three links in the email (the local figure text, the canonical figures README, and the SEP Information entry). State that the figures, not the summary, are the authority. Their later agreement is never pooled as corroboration (Fig 2 :40).

**Stage 3.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter, states their own mode, and names their own ground. A reported failure is more useful than a reported success.

**Hard precondition.** Stages 1 to 3 work only if the stage-1 output survives. The four refuters in `01_figure_grounded_audit.md` §4 are live; until a checker has run them, nothing here is labelled `grounded`.

## Legal and venue honesty

One-to-one contact only. No bulk send, no automation, no misleading subject line, and an opt-out line in every message. Public institutional or opt-in channels only; no personal emails. Where a venue requires an AI-use statement, disclose that this packet is a simulated derivation checked for internal consistency against a framework and submit it as a checkable claim, not as settled result. A desk rejection under such a rule is information about the venue, not a refutation to argue with.
