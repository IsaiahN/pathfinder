# Public links and distribution

All links below were fetched on 2026-11-23. What each returned is recorded, including failures. A failed fetch is never cited as a source.

## 1. World sources actually fetched and read

| source | URL | what it returned that bears on this question |
|---|---|---|
| Information, Stanford Encyclopedia of Philosophy (Adriaans and van Benthem; first published 2012, substantive revision 2023) | https://plato.stanford.edu/entries/information/ | Two central properties of technical notions of information: "Information is extensive" and "Information reduces uncertainty". Lists Shannon entropy, Fisher information, algorithmic complexity, semantic information and information as a state of an agent as distinct proposals. States that Shannon information is "a rather weak concept" that misses thermodynamic disorder. Records Landauer's principle in the physics section. |
| Semantic Conceptions of Information, Stanford Encyclopedia of Philosophy (Floridi; first published 2005, substantive revision 2022) | https://plato.stanford.edu/entries/information-semantic/ | "Information is a non-random distinction with a difference." Information channels are "robust entities in their own right". Barwise: "By an information channel, let us mean one of these relations between situations, since it is these relations which allow information about one situation to be gleaned from another situation." Fodor's split between "Smoke means fire" (information-carrying) and "'Smoke' means smoke" (semantic). |
| Information theory, Wikipedia | https://en.wikipedia.org/wiki/Information_theory | Shannon: "The fundamental problem of communication is that of reproducing at one point, either exactly or approximately, a message selected at another point." Channel capacity depends "merely on the statistics of the channel". Mutual information is symmetric; directed information is not. |
| Information, Wikipedia | https://en.wikipedia.org/wiki/Information | Northrup's exact formulation of this question: "is information an autonomous quantity, or is information always per SE information to an observer?" Hjørland's stone example (geologist and archaeologist read different information from the same stone). "there is no need for a conscious mind to perceive, much less appreciate, the pattern" in the DNA case. "Information is not knowledge itself, but the meaning that may be derived from a representation through interpretation." |
| Fred Dretske, Wikipedia | https://en.wikipedia.org/wiki/Fred_Dretske | "Information, understood in Dretske's sense, is something that exists as an objective and mind-independent feature of the natural world and can be quantified." His formula: "A signal r carries the information that s is F = The conditional probability of s's being F, given r (and k), is 1 (but, given k alone, less than 1)." |
| Affordance, Wikipedia (Gibson 1979; Gaver 1991) | https://en.wikipedia.org/wiki/Affordance | Gibson: "The affordances of the environment are what it offers the animal, what it provides or furnishes, either for good or ill. ... It implies the complementarity of the animal and the environment." Gaver's hidden affordance: "there are possibilities for action, but these are not perceived by the actor." |
| Detection theory, Wikipedia (redirected from Signal detection theory) | https://en.wikipedia.org/wiki/Detection_theory | "Detection theory or signal detection theory is a means to measure the ability to differentiate between information-bearing patterns ... and random patterns that distract from the information". Its four-cell table includes the category "Stimulus Present, Respond Absent = Miss". |
| Landauer's principle, Wikipedia | https://en.wikipedia.org/wiki/Landauer%27s_principle | "an irreversible change in information stored in a computer, such as merging two computational paths, dissipates a minimum amount of heat to its surroundings." Supports the physical-anchor domain D1. |
| Philosophy of information, Wikipedia | https://en.wikipedia.org/wiki/Philosophy_of_information | MacKay: "information is a distinction that makes a difference." Floridi's four kinds: information about, as something, for something, in something. |
| Luciano Floridi, Wikipedia | https://en.wikipedia.org/wiki/Luciano_Floridi | "information is not simply a neutral representation of reality but a part of the world with its own properties, effects, and moral implications." Used at low weight because it overlaps the SEP semantic entry completely. |

### Framework essays reopened this session

| essay | URL | bearing |
|---|---|---|
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Also: a bundle question must be split before it is searched. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Prestige rule: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | "If several paths create the same behavior, then behavior is a projection with lossy information." "An instrument that can't distinguish these cases demonstrates its own inadequacy." "It existed whether you had the instruments and tools to measure its existence or not." |
| Decoding Tacit Knowledge: Why Context, Subtext, & Pretext Matter | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | "Writing carries the context well and the subtext partly, but it almost never carries the pretext". "A manual outlives the craft when no one is left who can read it as it was meant." Training on text reproduces "the traces the thought left, not the thought". |

Four further essays (How Intelligence Actually Works, How a Society of Agents Would Work, They're Scanning Books When They Should, Arrival of the Fittest: The Tether) are carried from the completed exemplar's canonical mapping and are marked as inherited in `05_what_shape_means.md`. They were not reopened this session and carry no independent witness weight.

## 2. Public venues fetched for the contact list

All URLs in `03_public_contact_points.csv` were fetched: arXiv cs.IT listing, arXiv submission help, IEEE Signal Processing Society, FQxI, Frontiers in Physics, IS4SI, Philosophy of Science Association submissions, Minds and Machines, the SEP Information entry and the Wikipedia Detection theory article. The last two are mapping aids and are labelled as such in the CSV.

## 3. Failed fetches, recorded honestly and excluded

| URL | result | action |
|---|---|---|
| https://en.wikipedia.org/wiki/Semantic_information | HTTP 404 | Corrected to the SEP entry on Semantic Conceptions of Information and to the Wikipedia Philosophy of information entry. No claim rests on the dead URL. |
| https://plato.stanford.edu/entries/semantic-conceptions-of-information/ | HTTP 404 | Corrected to the live slug https://plato.stanford.edu/entries/information-semantic/ , which was fetched and used. |
| https://www.itsoc.org/about/contact-us and https://www.itsoc.org/ | HTTP 403 on both | Excluded from the contact CSV. IEEE Signal Processing Society is the verified substitute for the engineering side. |
| https://www.mdpi.com/journal/entropy and https://www.mdpi.com/journal/information | HTTP 403 on both | Excluded. No claim rests on them. |
| https://www.ieee.org/about/contact-us | no tool output | Excluded. |
| https://arxiv.org/about and https://www.osf.io/registries/ | minimal or unrelated output | Not used as sources. |
| https://plato.stanford.edu/general/contact.html | HTTP 404 | Excluded; the SEP entry itself is used as a mapping aid only. |
| https://www.springer.com/journal/10698 | returned "Foundations of Chemistry", not the intended philosophy journal | Discarded. The verified substitute is Minds and Machines at https://link.springer.com/journal/11023 . |

Web search was not needed; every cited source was reached by direct URL fetch and read in the returned text.

## 4. Overlap discipline

- The two SEP entries share an editor, a host and a reference pool. They are one witness on the philosophy-of-information side, not two.
- The five Wikipedia entries share a host and are secondary summaries. They corroborate different *fields* (signal detection, ecological psychology, thermodynamics, epistemology) but they are one pool for sourcing practice.
- Dretske and Floridi are cited through encyclopedia entries, not through the primary books. That is recorded in `10_source_ledger.csv`; their quotes are quotes of the encyclopedia text, not of the 1981 or 2011 books.
- The four reopened essays share the framework author with the figures. By Fig 2 :40 their agreement with the figures is "the pool talking", not independent corroboration. The ten world sources above are the substantive witnesses; the essays are provenance for the word "shape".
- No source conflicted with a figure verdict. Where a source raised a different emphasis (Dretske's mind-independence versus Floridi's factivity), it was re-censused onto a different domain (section 5, S3 of `01`) rather than used to flip a verdict.

## 5. Distribution rules: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** — "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the four-domain output and the seven refuters; offer links after.
- **Fig 10 :52** — "Bring a characterised residual, never the source." Seat 4 must not hold the interiors. A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** — "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would count as a case where detection changes carriage before giving them the article.
- **Fig 2 :40** — "agreement about the world is worthless when the agreeing frames share an evidence pool." A list selected for receptiveness produces a convention, not corroboration.
- **Fig 2 :42** — "Buy independence in proportion to the cost of being wrong." Here the cost is moderate: a wrong answer would misdescribe information in a way that propagates into storage, erasure and black-hole questions. Independent readers are worth the extra effort.
- **Fig 7 :35** — "A room's agreement is variation, not a verdict." One-to-one contact only. No bulk send, no automation, no misleading subject line, and an opt-out line in every message.

## 6. The two-stage offer (and the optional third stage)

1. **Stage 1.** Send the residual, the four domain verdicts and the seven refuters. Ask what the recipient would count as a failure, and specifically whether detection changes carriage or only reading. Record their verdict **before** any theory is shown.
2. **Stage 2, opt-in only.** If they are curious, offer the four links in `02_outreach_email.md`, with the note that the figures, not the summary, are the authority. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode. The formula is a generator, so giving it away does not give away an answer (Fig 4 :22).

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. This folder does not assume it has; that is why the refuters lead every artifact.

## 7. What this agent cannot do

I did not and cannot host or send anything. If you host the packet, prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. Nothing in this folder is a mail-merge plan.
