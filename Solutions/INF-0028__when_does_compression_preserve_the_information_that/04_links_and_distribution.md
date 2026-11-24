# Public links and distribution

All links marked verified below were fetched and read on 2026-11-23. Links that failed are listed separately and are not cited as read anywhere in this folder.

## Verified public links

| what | URL | verified content |
|---|---|---|
| Rate-distortion theory | https://en.wikipedia.org/wiki/Rate%E2%80%93distortion_theory | States that rate-distortion theory is the theoretical foundation of lossy compression, that *"The notion of distortion is a subject of on-going discussion."*, and that *"the distortion measure should preferably be modeled on human perception and perhaps aesthetics"*. References Blahut 2019 on the rate-distortion-perception tradeoff, Cover and Thomas 2012, and Berger 1971. |
| Lossy compression | https://en.wikipedia.org/wiki/Lossy_compression | States that *"Knowledge of the application is used to choose information to discard, thereby lowering its bandwidth."*, that lossy formats suffer generation loss, and that rate-distortion theory draws on Bayesian estimation and decision theory *"to model perceptual distortion and even aesthetic judgment"*. |
| Information bottleneck method | https://en.wikipedia.org/wiki/Information_bottleneck_method | Tishby, Pereira and Bialek 1999. *"designed for finding the best tradeoff between accuracy and complexity (compression)"* against *"an observed relevant variable Y"*; can be viewed as a rate-distortion problem; bibliography includes Harremoës and Tishby, *"The Information Bottleneck Revisited or How to Choose a Good Distortion Measure"*, ISIT 2007. |
| Minimum description length | https://en.wikipedia.org/wiki/Minimum_description_length | *"the shortest description of the data is judged to be the best model"*; gives the two-part code `L(D) = min over H ( L(H) + L(D\|H) )`; notes Kolmogorov complexity cannot be computed; cites Rissanen 1978 and Grünwald 2004. |
| A Mathematical Theory of Communication | https://en.wikipedia.org/wiki/A_Mathematical_Theory_of_Communication | Shannon 1948, Bell System Technical Journal. Lists source, transmitter, channel, receiver and destination, and notes the destination *"can be a person or a machine, for whom or which the message is intended"*. Foundational reference for source coding and redundancy. |
| Free energy principle | https://en.wikipedia.org/wiki/Free_energy_principle | Friston 2010 and related work. *"the brain reduces surprise or uncertainty by making predictions based on generative models"*; free energy decomposes into complexity and accuracy; expected free energy includes *"risk"* against *"prior preferences or goals"*. An independent cognition and biology witness for relevance being external to the compresser. |
| arXiv cs.IT recent listings | https://arxiv.org/list/cs.IT/recent | Active public listing of information theory submissions, including coding, rate distortion, semantic codecs and source-compression work. Verifies that the venue in `03_public_contact_points.csv` is live. |
| arXiv submission overview | https://arxiv.org/help/submit | Public submission rules, including TeX and PDF submission, cross listing and endorsement. Verifies the opt-in submission route. |
| Figures text with line numbers (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | The authority for every `Fig N :line` quote in this folder. Checked character by character. |
| Figures README (canonical local copy) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"They outrank everything else in the repo"*; *"a shape, not a name"*; *"Indiscernibility is not identity."* |
| THE FORMULA (local) | `FRAMEWORK/figures/THE_FORMULA.md` | Eight steps, mode rule, round-trip gap R_T, and the "Direction" discipline of making the sought-for shape an ordinary term. |

Eight essays by Isaiah N were also opened in full on 2026-11-23 and are recorded individually in `10_source_ledger.csv`: How Intelligence Actually Works, The Recursive Self-Improvement Trap, Decoding Tacit Knowledge, How a Society of Agents Would Work, The Library of Babel, They're Scanning Books, The Hard Problem is About Source, and Arrival of the Fittest: The Tether Architecture.

## Failed fetches, recorded honestly

These were attempted on 2026-11-23 and did not return readable content. They are not cited as read and appear in `03_public_contact_points.csv` only as unverified candidates.

- `https://www.ieee-itsoc.org/` transport error.
- `https://itaw.ucsd.edu/` transport error.
- `https://www.isit2026.org/` transport error.
- `https://arxiv.org/about/cs.IT` returned 404 (the local arXiv redirect resolved to `info.arxiv.org/about/cs.IT`).
- `https://en.wikipedia.org/wiki/Semantic_information` returned 404.

## Wider literature that bears on the question

These are the sources behind the pages above, quoted through them rather than read as separate documents; they are recorded as such in the ledger. Shannon 1948 supplies the channel and destination structure. Rissanen 1978 and Grünwald 2004 supply MDL. Tishby, Pereira and Bialek 1999 and Harremoës and Tishby 2007 supply the relevance-variable formulation. Friston 2010 supplies the cognition and biology analogue. Blahut and Michaeli 2019 (rate-distortion-perception tradeoff) is the cleanest outside statement that the distortion criterion is not given by the bits. None of these decides the figure verdict; they corroborate the shape and are secondary.

Overlap is declared. The Wikipedia pages share a host but cover distinct topics and cite distinct primary literatures, so they are low-overlap witnesses for the engineering claims. All eight essays share an author and an evidence pool with the figures, so their agreement is expected and carries little independent weight (Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*). The 2009 and 2015-style independent papers cited through the pages, where named, are from different authors and venues and are treated as genuinely separate witnesses.

## Distribution: offer, do not push

- **Fig 4 :22:** *"Only methods cross up. Only head starts come down."* Sending the whole architecture before a recipient has described a residual sends a recording, not a generator. Lead with the four effect claims and the refuter.
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before their verdict has joined the frame being checked.
- **Fig 9 :27-28:** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what the recipient would expect to see if preservation happened before giving them the theory.
- **Fig 2 :40:** agreement inside one evidence pool is worthless as a verdict. Do not pool later agreement as corroboration.
- **Seat Map:** *"High correlation is disqualifying for a verdict and efficient for a convention."* A send selected for likely agreement is a convention, not a check.

**Recommended order in a reply:** (1) the effect claim and its four refuters; (2) ask what the recipient would count as a failure and which relevance variable their field would bind; (3) only then the figure-text link and the rate-distortion link, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1.** The recipient checks the effect claim against their own ground without holding the framework interiors. Their verdict is recorded before any theory is shown.

**Stage 2, opt-in only.** If curious, they read the figure text and the formula. The relevance variable they supply is an import from their frame, provenanced as such. Their later agreement is never pooled as corroboration, because by then they hold the interiors (Fig 2 :40).

**Stage 3, on request.** Offer the formula as a method to reuse. Each user states their own ground and writes their own refuter first. The author's own note warns that outputs *"could never be verified if the solutions presented were not contrived to fit the formula"*, and the RSI essay calls such outputs *"simulacra"*. A reported failure is the useful result.

**Hard precondition:** stages 1 to 3 work only if the stage-1 claim survives. The four refuters in `02_outreach_email.md` are the test.

## Hosting

Nothing here is sent by this agent. Hosting and sending are yours. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. That is closer to the figure's rule about public, opt-in channels and avoids the legal problem of unsolicited bulk mail in many jurisdictions.
