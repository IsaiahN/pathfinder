# Public links and distribution

Every link listed as verified was fetched and read on 2026-11-22. Links whose direct fetch failed are marked as such and are not used as evidence. The canonical figure text and usage rules are local framework files, not world sources.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Mesoudi and Whiten 2008, cultural transmission experiments | https://pmc.ncbi.nlm.nih.gov/articles/PMC2607337/ | *Philosophical Transactions of the Royal Society B* 363(1509):3489 to 3501, doi 10.1098/rstb.2008.0129. Linear transmission chain method: "the material became much shorter in length and lost many of the details, with only the overall gist remaining. Participants also tended to distort the material, making it more coherent and consistent with their own pre-existing knowledge." Also: "cultural transmission can be imperfect, vulnerable to distortion by content biases". |
| Data processing inequality | https://en.wikipedia.org/wiki/Data_processing_inequality | "The data processing inequality is an information theoretic concept that states that the information content of a signal cannot be increased via a local physical operation. This can be expressed concisely as 'post-processing cannot increase information'." For a Markov chain X to Y to Z, I(X;Y) >= I(X;Z). Cites Beaudry 2012 and Cover and Thomas 2012. |
| Design effect / effective sample size | https://en.wikipedia.org/wiki/Design_effect | "The effective sample size, defined by Kish in 1965, is calculated by dividing the original sample size by the design effect." Also Deff greater than 1 arises with "cluster sampling (such as when there is correlation between observations)". Correlated observations buy less precision than their count suggests. |
| Shared information bias (Piercy 2021 open textbook) | https://opentext.ku.edu/teams/chapter/shared-information-bias/ | "groups spend much of their discussion time examining shared information, information that two or more group members know in common, rather than unshared information." Reviews Stasser and Titus 1985 and the hidden profile paradigm. |
| APA Dictionary of Psychology, upward communication | https://dictionary.apa.org/upward-communication | "Upward communication is subject to distortions such as the mum effect, in which subordinates are unwilling to convey bad news to their superiors. The more levels in the hierarchy through which a message must pass, the more subject it is to distortion as the result of filtering at each level." |
| Decoding Tacit Knowledge (framework essay) | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Also: "Communities and institutions that only check against themselves drift together and don't notice." |
| The Hard Problem is About Source (framework essay) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | "If several paths create the same behavior, then behavior is a projection with lossy information." Also: "An instrument that can't distinguish these cases demonstrates its own inadequacy." |
| The Recursive Self-Improvement Trap (framework essay) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the truly testable output would need to be derived from the real architecture or working the formula yourself." Also: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Lorenz et al. 2011, PNAS (abstract via NCBI eutils) | https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=21576485&rettype=abstract&retmode=text | "The 'social influence effect' diminishes the diversity of the crowd without improvements of its collective error." Direct fetch of the PNAS page returned 403 and PubMed returned a cookie gate, so the abstract was opened through the NCBI eutils endpoint. Full record: PNAS 108(22):9020 to 9025, doi 10.1073/pnas.1008636108. |

## Local framework files cited

- `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the verbatim figure text, primary source of every `Fig N :line` quote.
- `FRAMEWORK/reference/FIGURES_README_canonical.md`, canonical usage rule.
- `FRAMEWORK/figures/THE_FORMULA.md`, the loop and mode rule.

## Wider literature that bears on the question

These are corroborating world sources, not authorities. Figures decide; world sources corroborate and never overrule.

1. **Human cognition and cultural evolution** (Mesoudi and Whiten 2008). Serial reproduction loses detail and assimilates the remainder to the receiver's prior knowledge. Nobody in these studies lies; the distortion is reconstructive. This is the mirror chain of Fig 7 :12-14 at the laboratory scale, and the lossy transform of Fig 4 :27 at the message scale.
2. **Social and complex systems** (Lorenz et al. 2011). Mild social influence makes estimates converge without improving accuracy, and raises confidence despite no gain in accuracy. This is Fig 2 :34 coherent drift and Fig 2 :40 shared-pool agreement, with a measured ground.
3. **Information theory and mathematics** (data processing inequality). Post-processing cannot increase information about the source. This is Fig 4 :28-29 stated as a theorem: the round trip is not reversible because detail was discarded going up.
4. **Survey statistics** (Kish's effective sample size). Correlated observations do not count as independent witnesses. This is Fig 2 :44 and Fig 2 :31-32 in arithmetic form: ten reports from one dashboard are one witness with a design effect, not ten witnesses.
5. **Organizational and social psychology** (Stasser and Titus 1985 via Piercy 2021; APA Dictionary 2018). Groups discuss what everyone already knows, and the longer the reporting chain the more filtering occurs. These are the shared evidence pool of Fig 2 :18-21 and the per-level filtering of Fig 10 :25-26 in the focal field.
6. **Perception and instrumentation** (framework essay, *The Hard Problem is About Source*). A reading cannot determine its source when several sources produce the same reading; the fix is a discriminator, not an argument. This governs the honest stop in `07_the_tether_answer.md` §5.

Overlap is declared in `10_source_ledger.csv`. The Mesoudi, Lorenz, Cover and Thomas, Kish, Stasser and Titus, and APA sources are low overlap with one another (cultural evolution, complex systems, information theory, survey statistics, social psychology, organizational psychology). They are separate witnesses to the same shape. The three framework essays share the framework author and the figures' evidence pool, so their agreement is expected and carries no independent witness weight.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22 and :25** "Only methods cross up. Only head starts come down." and "A recording carried upward looks like knowledge and is a description of one occasion." Sending the full architecture before a recipient has described a residual sends a recording. Lead with the three conditions and the refuter; offer links after.
- **Fig 10 :52** "Bring a characterised residual, never the source." Seat 4 must not hold the interiors; a reader who has absorbed the framework before judging has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the claim were true before giving them the essay.
- **Fig 2 :40** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A mass send selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the three conditions and the pre-registered refuter; (2) ask what they would count as a failure and record the answer; (3) only then the links, with the note that the figure text, not the summary, is the authority.

## Constraint on submitting simulated work

Several venues in `03_public_contact_points.csv` are peer-reviewed and expect empirical or formally argued work. This folder is a simulated derivation checked for internal consistency against a framework, not a ground reading (*The Recursive Self-Improvement Trap*: "the truly testable output would need to be derived from the real architecture or working the formula yourself"). Do not present it as an empirical result. The AMD Registered Reports route and the AOM calls listing are the most structurally compatible because they invite a question and analysis plan before results. Check each venue's current AI and authorship policy before sending; a rejected submission that misrepresents the work costs more than the claim is worth.
