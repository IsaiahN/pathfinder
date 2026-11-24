# Public links and distribution

## What was actually opened, 2026-11-23

| what | URL | status and verified content |
|---|---|---|
| Canonical figure text with line numbers | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Opened directly. Every `Fig N :line` citation in this folder is checked against this file. Fig 2 :29 lists a market as an anchor; Fig 11 :61 gives introduction without exclusion. |
| Canonical figures usage rule | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | Opened directly. *"the quotes are the authority, not this summary."* Re-census rule and *"a shape, not a name"* limit recorded in `01` §6. |
| The eight-step loop | local: `FRAMEWORK/figures/THE_FORMULA.md` | Opened directly. Mode rule, three guards as a product, *"the ground settles it"*, and the SEARCHED / INWARD / OUTWARD split. |
| The New Economics of Industrial Policy, Juhász, Lane and Rodrik, Annual Review of Economics 16, 2024 | https://drodrik.scholars.harvard.edu/sites/g/files/omnuum7106/files/annurev-economics-081023-0246380-final.pdf | Text read via public search extraction and the Annual Reviews abstract page: *"We can summarize them under three broad headings: externalities, coordination (or agglomeration) failures, and public input provision."* Direct journal page returned 403. |
| The Political Economy of Industrial Policy, Juhász and Lane, NBER WP 32507 / JEP 38(4), 2024 | https://www.nber.org/papers/w32507 | Landing page opened directly. Abstract quote: *"government failure is not a necessary feature of industrial policy; rather, it is more likely to emerge when countries pursue industrial policies beyond their governance capacity constraints."* Full text (Mill and Taussig passages) read via the NBER PDF in search extraction. |
| Moving the goalposts: The changing objectives of industrial policy, EBRD WP 311, 2025 | https://www.ebrd.com/content/dam/ebrd_dxp/assets/pdfs/office-of-the-chief-economist/working-papers/working-papers-2025/EBRD_WP_311_Shifting_goalposts.pdf | Text read via public search extraction; direct PDF fetch unsupported. *"Policies without a stated end date ('sunset clause') may be harder to discontinue since doing so requires a specific action relative to the status quo."* |
| Pro-competitive industrial policy, OECD 2024 | https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/05/pro-competitive-industrial-policy_1c257970/7c6b4708-en.pdf | Text read via public search extraction; direct page fetch returned 403. *"Focus on tackling market failures. Implement industrial policies where and when market failures have been clearly identified."* |
| Industrial Policy Coverage in IMF Surveillance, IMF Policy Paper 2024/008, 2024 | https://www.imf.org/-/media/files/publications/pp/2024/english/ppea2024008.pdf | Text read via public search extraction; the guessed HTML landing URL returned 404. *"IP can potentially help address market failures, but the bar to get it right is high."* |
| Normalizing Industrial Policy, Rodrik 2008 | https://drodrik.scholars.harvard.edu/sites/g/files/omnuum7106/files/dani-rodrik/files/normalizing-industrial-policy.pdf | Text read via public search extraction. *"industrial policy is an invitation to corruption and rent-seeking."* |
| A New Growth Strategy for Developing Nations, Rodrik and Stiglitz, 2024/2025 | https://drodrik.scholars.harvard.edu/sites/g/files/omnuum7106/files/2025-10/A%20New%20Growth%20Strategy%20for%20Developing%20Nations%20%28Rodrik%20and%20Stiglitz%29.pdf | Text read via public search extraction. Five elements: *"embeddedness, coordination, monitoring, conditionality, and institutional development"*, plus *"the ability to let the losers go."* |
| When does industrial policy fail and when can it succeed? Case studies from Europe, Socio-Economic Review 24(1), 2025 | https://academic.oup.com/ser/article/24/1/121/8215698 | Abstract and body text read via public search extraction; direct journal fetch returned 403. *"industrial policy is certain to fail when both conditions are absent."* |
| 'Improving ratings': audit in the British University System, Strathern, European Review 5(3), 1997 | https://gwern.net/doc/statistics/decision/1997-strathern.pdf | Full text read via public search extraction. *"When a measure becomes a target, it ceases to be a good measure."* |
| Goodhart's Law: Recognizing and Mitigating the Manipulation of Measures in Analysis, CNA, 2022 | https://www.cna.org/analyses/2022/09/goodharts-law | Page opened directly. *"when we use a measure to reward performance, we provide an incentive to manipulate the measure in order to receive the reward."* |
| Does the introduction of a biological control agent improve ecosystem services? Conservation Biology, 2020, doi 10.1111/csp2.296 | https://conbio.onlinelibrary.wiley.com/doi/10.1111/csp2.296 | Abstract and results read via public search extraction. *"any direct benefit of toads on agricultural production ... likely was outweighed by negative effects that were mediated via the toads' impacts on other taxa."* |
| Introduction of cane toads, National Museum of Australia, 2018 | https://www.nma.gov.au/defining-moments/resources/introduction-of-cane-toads | Page text read via public search extraction. *"There is unlikely to ever be a broadscale method available to control cane toads across Australia."* |
| Global Trade Alert | https://www.globaltradealert.org/ | Homepage opened directly. Public data centre and analysis section; source of the policy records used in the EBRD study. |
| CEPR | https://cepr.org/ | Homepage opened directly. Public discussion papers, VoxEU columns and a Virtual IO Seminar. |
| EBRD publications | https://www.ebrd.com/publications | Page opened directly. Public working-paper and report route. |

Fetch failures are recorded rather than hidden: the AEA PDF 403, the OECD landing 403, the Annual Reviews journal page 403, the Socio-Economic Review front page 403, the IMF HTML 404, and the EBRD PDF fetch unsupported. In each case the text used was returned by public search extraction of the same source and is marked as such in `10_source_ledger.csv`; nothing is quoted from a page that was not actually returned.

## Relevant wider literature, grouped by overlap

**Economics industrial-policy pool (one witness, not many).** Juhász, Lane and Rodrik 2024 give the rationales and the negative-correlation result showing that *"Subsidies and performance are negatively correlated even though the government acts as a social-welfare maximizer"*, which is why a correlation cannot settle correct versus protect. Juhász and Lane 2024 give the governance-capacity constraint and the Mill time-inconsistency record. Rodrik 2008 and the OECD / IMF reports give the rent-seeking and design conditions. Rodrik and Stiglitz give the monitoring-and-withdrawal condition. They share a field and largely an evidence pool, so their agreement is one witness. The Socio-Economic Review case studies bring historical institutionalism and business strategy into the same argument; useful for the union framing, still economics-adjacent.

**Low-overlap witness 1, measurement science and audit culture.** Strathern 1997 and CNA 2022 are not industrial economics. They corroborate the mechanism behind F3: a measure that becomes a target stops discriminating, and rewarding a measure gives an incentive to manipulate it. This is the closest world analogue to Fig 2 :34's coherent drift and Fig 10 :47's *"a convention that decides an outcome has stopped being one."*

**Low-overlap witness 2, ecology and invasion biology.** The cane-toad biological-control study and the National Museum record corroborate Fig 11's asymmetric-power and unenumerated-cascade claims with a real intervention: an introduced actor failed its target and could not be removed at scale. The National Museum and the 2020 study are the same case, so they count as one witness.

No world source conflicts with the figure verdict. Had one conflicted, the rule is to return to the domain census, not to flip the verdict.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52** *"Bring a characterised residual, never the source."* Send the separator and refuter first. The figures and the theory come only after a reader has recorded a verdict on stage 1.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the separator were true before showing any source.
- **Fig 2 :40** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* Select recipients for ground contact, not for likely agreement. Later agreement is never pooled as corroboration.
- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Stage 3 sends a method, which is permitted, not a recording of one derivation.

**Recommended order in a reply:** (1) the five conditions and the six refuters; (2) the question "which of these would you expect to fail in a case you know?" and record the answer; (3) only then the links, with the note that the figures, not this summary, are the authority.

**Practical constraint on submissions.** Several economics journals and working-paper series require disclosure of generative-AI use and may not accept purely simulated derivations as submissions. Record the status of this document as a simulated derivation checked for internal consistency, check the target venue's policy, and prefer public comment routes or working-paper venues that permit openly labelled simulation. This is a practical constraint, not evidence about industrial policy.

## The two-stage offer (recap)

- **Stage 1:** the residual, the five-condition separator and the six refuters. Ask what the reader would count as a failure. Record their verdict before any theory is shown.
- **Stage 2, opt-in only:** the three public figure and paper links. The figures are the authority.
- **Stage 3:** offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. That is why the refuters in `01` §4 are in front of the links in `02`.
