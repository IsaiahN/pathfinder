# Public links and distribution

All links below were opened on 2026-11-23 unless a failure is stated. Fetch failures are
recorded rather than hidden, and nothing is cited as read from a page that was not
opened.

## 1. Verified public links

| what | URL | what was actually on the page |
|---|---|---|
| Automatic stabilizer, reference definition | https://en.wikipedia.org/wiki/Automatic_stabilizer | Defines stabilizers as budget features that reduce fluctuations in real GDP; states the response happens *"without any explicit policy action by the government"*; gives the induced-tax and transfer mechanisms, the multiplier formula, and CBO estimates that stabilizers increased the deficit by 32.9 percent in fiscal 2009 and 47.6 percent in fiscal 2010. Also links the negative-feedback article. |
| Negative feedback, engineering and biology | https://en.wikipedia.org/wiki/Negative_feedback | Defines balancing feedback as output fed back so as to reduce fluctuations; notes that *"negative feedback systems can still be subject to oscillations. This is caused by a phase shift around any loop"*; treats automatic stabilizers explicitly in the Economics section; cites Ashby, Wiener and the centrifugal governor. |
| Control theory, open versus closed loop | https://en.wikipedia.org/wiki/Control_theory | Defines a controller that monitors a process variable, compares it to a set point and applies the error as feedback; contrasts open-loop and closed-loop control; records Maxwell's *"self-oscillation, in which lags in the system may lead to overcompensation and unstable behavior."* |
| Homeostasis, biological regulation | https://en.wikipedia.org/wiki/Homeostasis | States that homeostatic regulation *"commonly operates through negative feedback. Sensors detect changes in a regulated variable, control mechanisms coordinate an appropriate response, and effectors act to counter the deviation"*; notes that the effectiveness of control can decline with age and that compensatory mechanisms can mask chronic disease. |
| Automaticity, cognitive science | https://en.wikipedia.org/wiki/Automaticity | Bargh's four characteristics: awareness, intentionality, efficiency, controllability; *"Automatic mental processes tend to have a low cognitive load"*; the centipede effect, where explicit attention disrupts an automatised pattern, quoting Humphrey: *"No man skilled at a trade needs to put his constant attention on the routine work. If he does, the job is apt to be spoiled."* |
| Dynamic inconsistency, rules versus discretion | https://en.wikipedia.org/wiki/Dynamic_inconsistency | Kydland and Prescott 1977, *"Rules Rather than Discretion: The Inconsistency of Optimal Plans"*; Barro and Gordon 1983; the discretionary central bank under *"constant political pressure to boost the economy and reduce unemployment"* with a long-run inflation bias; Odysseus and the mast as a commitment device. |
| Fiscal policy, surveys and implementation lags | https://en.wikipedia.org/wiki/Fiscal_policy | Monetary policy is *"generally quicker to implement"* because spending decisions take time; the 2000 AEA survey (84 percent on stimulative impact, 71 percent against activist fiscal policy) and the 2011 follow-up finding that the consensus *"had dissolved and was by then roughly evenly disputed"*; the cyclically adjusted spending and tax distinction. |
| Business cycle, recession definition | https://en.wikipedia.org/wiki/Business_cycle | NBER definition of a recession as a significant decline in economic activity across the market, visible in real GDP, income, employment, production and sales. Opened because the political business cycle page redirects here. |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Framework essay by Isaiah N, 2026-11-19. States that prestige can fund an action but cannot settle it, and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Framework essay by Isaiah N, 2026-08-28. Metamerism argument: a reading cannot comment on its source; *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* |
| AEA Journal of Economic Perspectives | https://www.aeaweb.org/journals/jep | Public journal page with Information for Authors and Guidelines for Proposals; publishes category H (public economics); four issues a year, publicly accessible at no charge. |
| AEA American Economic Review | https://www.aeaweb.org/journals/aer | Public journal page with submission guidelines for authors and reviewers; general-interest economics journal since 1911. |
| NBER affiliated scholars and research | https://www.nber.org/authors | Public page describing the network of more than 1,900 affiliated scholars, the Public Economics program, working papers and open calls. |
| IMF Publications | https://www.imf.org/en/Publications | Public catalogue and free newsletter; includes the Fiscal Monitor, staff discussion notes and working papers on fiscal policy. |
| Federal Reserve FEDS | https://www.federalreserve.gov/econres/feds/index.htm | Public listing of staff working papers, including a 2026 paper on macroeconomic analysis of household labour-supply responses to large fiscal transfers. |

## 2. Fetch failures, recorded honestly

- `https://www.cbo.gov/publication/43977` and `https://www.cbo.gov/about/contact`
  returned HTTP 403 to an automated fetch on 2026-11-23. The CBO figures quoted in the
  automatic-stabilizer article are cited from the article as opened, not from the CBO
  report read directly. The report remains a public venue, but it is recorded as
  unverified this session.
- `https://www.taxpolicycenter.org/briefing-book/what-are-automatic-stabilizers-and-how-do-they-work`
  returned HTTP 403 on 2026-11-23. Its title is recorded from the Wikipedia reference
  list; no passage is quoted from a direct read.
- `https://www.iipf.net/` and `https://www.repec.org/` returned transport errors on
  2026-11-23 and were dropped from the contact CSV.
- `https://www.frbsf.org/economic-research/economic-letter/` returned 404 on 2026-11-23.
  The Federal Reserve Board FEDS page was used instead.
- `https://www.ssrn.com/index.cfm/en/econ/` returned a 404 redirect on 2026-11-23 and
  was dropped.
- The websearch integration returned no results for four separate queries this session.
  All sources were therefore found by direct fetch of known public pages. This is a
  coverage limit, recorded rather than papered over.

## 3. Relevant wider literature, by field

The derivation uses three genuinely low-overlap fields. Their agreement with the figure
shape is weak corroboration, not a second derivation of the same fact.

- **Engineering and mathematics, control theory.** Closed-loop control rejects
  disturbances and tolerates model uncertainty; open-loop control runs in pre-arranged
  ways. Lags rotate phase and can create instability. This corroborates the channel and
  sign claims (F2, F7), not any fiscal magnitude.
- **Game theory and political economy, rules versus discretion.** Dynamic inconsistency
  makes an optimal future plan non-optimal when the future arrives; commitment devices
  and independent institutions are the response. This corroborates the seat-capture
  claim (F5) from a frame that shares no evidence pool with the figures.
- **Cognitive science, automaticity.** Automatic processes are efficient and hard to
  stop once initiated; explicit attention can disrupt a well-trained pattern. This is a
  shape analogue for the difference between a standing rule and a deliberation seat
  (F3), not a claim about fiscal institutions.
- **Biology, homeostasis.** Standing negative-feedback regulation maintains a variable
  within a range despite disturbance, and its effectiveness can decline. Shape analogue
  for channel decay (F2, F7).
- **Economics, one pool.** The automatic-stabilizer article, the fiscal-policy survey
  material, the CBO estimates as quoted there and the budget-office working papers all
  draw on the same national-accounts and model literature. They count as one witness
  (F9). Their disagreement about activist policy is about magnitude, a different
  quantity (F8).

## 4. Distribution rules: offer, do not push

- **Fig 10 :52** - *"Bring a characterised residual, never the source."* Send the six
  tests and the refuter first. The framework interior is stage 2 and opt-in.
- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* A method can be
  given away; a recording of one conclusion cannot substitute for a check.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem
  to fit"* - ask what a reader would expect to see under each corrector before offering
  the links.
- **Fig 2 :40** - agreement within a shared evidence pool is disqualifying for a verdict.
  Never select recipients for likely agreement and never pool later agreement as
  corroboration.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A
  recipient who absorbs the whole framework before giving a verdict has joined the frame
  being checked.

**Recommended order in a reply:** (1) the six property tests and the pre-registered
refuter; (2) ask for the reader's verdict on those tests, recorded before any theory;
(3) only then, if they are curious, the three figure links, with the note that the
figures and not this summary are the authority; (4) offer the formula as a method to
reuse, with the instruction that each user writes their own refuter and states their own
mode.

## 5. Two-stage offer

**Stage 1.** Send the question in effect terms, the six tests, the `gap` on magnitude and
the refuter. Ask what the reader would count as a failure. Record their verdict before
showing anything from the framework.

**Stage 2, opt-in only.** If they are curious, offer the figure text, the automatic
stabilizer reference and the control-theory entry. Their later agreement is a
conversation, never corroboration (Fig 2 :40).

**Stage 3.** Offer the formula as a reusable generator. Each user must supply their own
ground and their own refuter, because a frame cannot check the direction of its own
question.

**Hard precondition.** Stages 1 to 3 only work if the stage-1 output survives. That is
what the six tests are for. If a reader shows that the automatic counter updates on its
own reports, or that the discretionary chain has no breakable middle link, the shape
claim is redrawn before any theory is shown.
