# Public links and distribution

All URLs below were fetched and read on 2026-11-23 unless marked otherwise. Fetch failures are recorded rather than hidden, and nothing is cited from a page that was not opened.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Bank of England, Money creation in the modern economy | https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy | Quarterly Bulletin 2014 Q1, published 14 March 2014, by Michael McLeay, Amar Radia and Ryland Thomas. *"the majority of money in the modern economy is created by commercial banks making loans"* and *"The amount of money created in the economy ultimately depends on the monetary policy of the central bank. In normal times, this is carried out by setting interest rates."* Long-run data annex is linked. |
| Money supply (Wikipedia) | https://en.wikipedia.org/wiki/Money_supply | *"Consequently, the money supply has lost its central role in monetary policy, and central banks today generally do not try to control the money supply. Instead they focus on adjusting interest rates"*; *"Narrow measures include those more directly affected and controlled by monetary policy, whereas broader measures are less closely related to monetary-policy actions."* Cites BIS, ECB, Palgrave and Bank of England sources. |
| Goodhart's law (Wikipedia) | https://en.wikipedia.org/wiki/Goodhart%27s_law | Goodhart 1975: *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes."* Strathern 1997 form: *"When a measure becomes a target, it ceases to be a good measure."* Explicitly notes use against UK monetary targeting of broad and narrow money. |
| Controllability (Wikipedia) | https://en.wikipedia.org/wiki/Controllability | Citing Ogata 1997 and Sontag: *"the ability of an external input (the vector of control variables) to move the internal state of a system from any initial state to any final state in a finite time interval"*; *"If there are not enough such vectors to span the state space of x, then the system cannot achieve controllability."*; *"Controllability does not mean that a reached state can be maintained, merely that any state can be reached."* |
| Illusion of control (Wikipedia) | https://en.wikipedia.org/wiki/Illusion_of_control | Langer's definition: *"the tendency for people to overestimate their ability to control events."* Fenton-O'Creevy et al. 2003 trader study: *"Those who were more prone to the illusion scored significantly lower on analysis, risk management and contribution to profits."* |
| Simpson's paradox (Wikipedia) | https://en.wikipedia.org/wiki/Simpson%27s_paradox | *"a trend appears in several groups of data but disappears or reverses when the groups are combined."* General form of the per-slot warning. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Prestige/action firewall; *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*; LLM output as *"simulacra"*. |
| The Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer"*; a bundle of problems must be searched individually. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Metamerism: *"If several paths create the same behavior, then behavior is a projection with lossy information."* An instrument that cannot discriminate sources demonstrates its own inadequacy. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* |
| They're Scanning Books When They Should | https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should | *"The real import is not a new term in the existing space. It is a new dimension of the space."*; *"Declaring the primitives does not make them neutral. It makes the choice visible."* |
| Figures for direct download | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`, folder `figures/`: Figures 1-13, Operators and Symbols tables, `README.md`, `THE_FORMULA.md`. Its README says the figures *"outrank everything else in the repo"*. |
| Bank of England research funding and fellowships | https://www.bankofengland.co.uk/research/research-funding-and-fellowships | Page read and verified 2026-11-23; public application route, closing date 7 December 2026. |
| Federal Reserve Economic Research | https://www.federalreserve.gov/econres.htm | Page read and verified 2026-11-23; FEDS, IFDP, FEDS Notes and a disclaimer that research views are the authors'. |
| AEA journals | https://www.aeaweb.org/journals | Page read and verified 2026-11-23; includes AEJ: Macroeconomics and JEP. |
| Journal of Economic Perspectives | https://www.aeaweb.org/journals/jep | Page read and verified 2026-11-23; publicly accessible, *"Guidelines for Proposals"* route. |
| CEPR | https://cepr.org/ | Page read and verified 2026-11-23; VoxEU columns, discussion papers, public conferences. |

## Fetch failures, recorded honestly

| URL | result | action |
|---|---|---|
| https://www.ecb.europa.eu/explainers/tell-me-more/html/money_creation.en.html | 404 | not cited; the Bank of England and Money supply sources carry the same point |
| https://www.sciencedirect.com/journal/journal-of-monetary-economics | 400 (error page) | not cited; the AEA journals index is used for the venue instead |
| https://www.repec.org/ | transport error | not cited; no claim rests on it |

## What the wider literature bears on the question

1. **The Bank of England article is the load-bearing import, and it says both halves.** It refuses the popular "banks lend out deposits" and "banks multiply up central bank money" pictures, and it adds that the amount of money created *"ultimately depends on the monetary policy of the central bank"*, normally through interest rates. So neither Option A nor Option B is correct as an exclusive statement. That is exactly the union finding F1.
2. **The definitional boundary is a convention with teeth.** Money supply data distinguishes narrow from broad measures, and narrower ones are *"more directly affected and controlled by monetary policy"*. The word "control" therefore changes truth value as the slot changes. Goodhart's law explains why: a regularity used as a target breaks. This is F5 and F7 converging from two low-overlap fields.
3. **The engineering analogy is structural, not economic.** Controllability is a rank condition on an input matrix, and reaching a state is not maintaining it. That is the precise shape of Fig 6's closure claim, but it does not tell us which economic atom is missing. The Bank of England article supplies that atom. Keep the two roles separate.
4. **The cognition and statistics sources are warnings about the reading, not about monetary policy.** Illusion of control predicts that a sense of control is not evidence of control; Simpson's paradox predicts that a pooled aggregate can reverse the per-group result. Both corroborate the anchor and per-slot discipline (F4, F8, F5) at low overlap.

Overlap declaration: the Bank of England article, the Money supply entry and the Goodhart entry all draw partly on the same monetary-economics pool (Goodhart 1975, Bank of England 2014, Palgrave/BIS/ECB descriptions). They are one witness, not three. The controllability, illusion-of-control and Simpson's-paradox sources are genuinely lower overlap. The five framework essays share the figures' author completely and carry no independent witness weight.

## Distribution: offer, do not push

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the four-slot residual and the refuter; offer the links after.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a stage-1 verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see at each slot before giving them the article.
- **Fig 2 :40** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it."* A mass send selected for people who already agree produces a convention, not corroboration.
- **Fig 2 :42** *"Buy independence in proportion to the cost of being wrong."* The cost here is moderate: a wrong verdict changes how a research question is framed, not a trade. Independent reading is worth asking for, but one or two careful refuters are enough; a campaign is not.

**Recommended order in a reply:** (1) the residual and its four slots; (2) ask what they would count as a failure at each slot; (3) record the verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52 *"Bring a characterised residual, never the source"* and Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."*
- **Stage 2 is opt-in by construction.** Seat 4 must not hold the interiors. The verdict on stage 1 is recorded before any theory is shown, and later agreement is never pooled as corroboration.
- **Stage 3 sends a method, which is permitted** by Fig 4 :22. The formula is a generator, so giving it away does not give away an answer.
- **Stage 3 still needs a ground per problem.** `THE_FORMULA.md` "Direction": a frame cannot check what it is looking for. Each user writes down what would refute their result before running it and labels the mode.

**Hard precondition:** stages 1-3 only work if the stage-1 shape survives. As currently drafted the stage-1 output is the shape in `08_expert_verification_packet.md`, with its three checkable sub-claims and refuters. If a sub-claim fails, do not send the rest.

## Practical note

I cannot send anything, host a file, or contact a journal on your behalf. Hosting the packet on an opt-in page is closer to the figure's rule than attaching it to a bulk message. No personal emails appear in `03_public_contact_points.csv`; the institutional addresses on those pages are published for applications, not for unsolicited outreach to named staff.
