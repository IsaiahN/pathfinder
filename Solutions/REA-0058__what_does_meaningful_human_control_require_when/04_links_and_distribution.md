# Public links and distribution

Every public link in the table was fetched and read on 2026-11-23. Local framework files were opened the same session. A fetch that failed is recorded as failed, not silently replaced.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Founding MHC paper | https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2018.00015/full | Santoni de Sio and van den Hoven, "Meaningful Human Control over Autonomous Systems: A Philosophical Account", Front. Robot. AI, 28 Feb 2018, volume 5, doi 10.3389/frobt.2018.00015. Abstract states the missing theory and the two conditions: tracking and tracing. Section "Autonomous Systems and the Problem of Meaningful Human Control" says simple presence or being in the loop is not sufficient and gives the "merely pushing a button in a reflex when a light goes on" example. |
| Ironies of Automation, notes on Bainbridge 1983 | https://ferd.ca/notes/paper-ironies-of-automation.html | Fred Hebert's notes, 2023-04-22, quote Bainbridge at length. Direct quotes used: "at a rate, which the operator can follow, even when this may not be the most efficient method technically"; "The human monitor has been given an impossible task." The notes link the original Automatica PDF. |
| Ironies of Automation, bibliographic confirmation | https://en.wikipedia.org/wiki/Ironies_of_Automation | Bainbridge, Automatica 19(6):775-779, 1983, doi 10.1016/0005-1098(83)90046-8. States that highly automated systems leave operators responsible for tasks that cannot be automated and that operators need more training, not less. |
| Lethal autonomous weapon | https://en.wikipedia.org/wiki/Lethal_autonomous_weapon | Section "Degree of human control": three degrees (in the loop, on the loop, out of the loop); three retained elements of human control (sufficient information, ability to exercise judgment, ability to limit tasks and targets); the Holy See's three conditions for significant human control; Nathan Wood on "the speed at which it is presented"; Anthropic's October 2026 disclosure warning of harmful actions "independently and at scale without human intervention"; UN GGE 2026 report point III.A.35 on human judgment. Secondary synthesis, used as a field map and as a pointer to primary documents, not as a verdict. |
| Automation bias | https://en.wikipedia.org/wiki/Automation_bias | Definition: propensity to favour automated suggestions and ignore contradictory correct information. Quotes used: "poorer detection of system malfunctions under automation compared with under manual control"; Endsley 2017 on high reliability leading users to disengage from monitoring, "increasing monitoring errors, decreasing situational awareness, and interfering with an operator's ability to re-assume control". |
| Out-of-the-loop performance problem | https://en.wikipedia.org/wiki/Out-of-the-loop_performance_problem | "Highly automated systems reduce the operator to a monitoring role, which gives an operator fewer chances to understand the system." Stub article with a reference list to Endsley and Kiris 1995, Kaber and Endsley 1997, Merat et al. 2019. |
| Evolutionary mismatch | https://en.wikipedia.org/wiki/Evolutionary_mismatch | "An evolutionary mismatch ... occurs when a previously advantageous trait may suddenly become maladaptive due to change in the environment, especially when change is rapid." Low-overlap analogue for a mechanism tuned to one rate meeting a faster environment. Corroborates the mechanism shape only. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, Oct 02 2026. "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question"; "you need something to tether and anchor you to reality, the same way a mountaineer needs a tether". |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, Aug 28 2026. "If several paths create the same behavior, then behavior is a projection with lossy information"; "The answer is unreached until a better instrument exists." |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, Nov 19 2026. "the truly testable output would need to be derived from the real architecture or working the formula yourself"; "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Frontiers in Robotics and AI (journal page) | https://www.frontiersin.org/journals/robotics-and-ai | Public submission portal, author guidelines and an Ethics in Robotics and AI section. |
| AI and Ethics (Springer) | https://link.springer.com/journal/43681 | Public submission portal, contact-the-journal page and article alerts. Scope includes governance and oversight of AI. |
| PhilArchive | https://philarchive.org | Open-access philosophy e-print archive; public submission and email alerts. |
| ICRC autonomous weapons | https://www.icrc.org/en/law-and-policy/autonomous-weapons | Topic page, newsletter subscription, public law-and-policy blog, 2026-11-18 statement on preserving meaningful human control. |
| UNODA LAWS | https://disarmament.unoda.org/en/our-work/emerging-challenges/lethal-autonomous-weapon-systems | Official UN topic page, GGE information, public documents library and newsletter. |

**Fetch failures, recorded honestly.** The direct PDF of Bainbridge 1983 at `ckrybus.com` returned an unsupported content type through the fetch tool; the paper was read through the Hebert notes page and the Wikipedia bibliographic page, both opened. `https://en.wikipedia.org/wiki/Meaningful_human_control` returned 404. `https://aies.acm.org/` returned a transport error. None of these is cited as a read source.

## What in the wider literature bears on this question

1. **Santoni de Sio and van den Hoven (2018)** state the exact problem the question inherits: *"policy-makers and technical designers lack a detailed theory of what 'meaningful human control' exactly means."* Their answer, tracking and tracing, is a shape with two necessary conditions, not a latency. It corroborates the figure verdict that the seat needs contact (F1) and provenance (F6). It does **not** give the number. Their "being in the loop is not sufficient" line corroborates the mirror-chain finding (F2).
2. **Bainbridge (1983)** is the low-overlap engineering witness for the *speed* half. The computer can decide "more quickly, taking into account more dimensions" than the operator, so "there is no way in which the human operator can check in real-time"; the human monitor is given "an impossible task". Bainbridge's remedy for that case is that the computer must act "at a rate, which the operator can follow, even when this may not be the most efficient method technically." That is a design requirement on the arrangement, which is what the figures derive as a shape. Same structural claim, independent field.
3. **Automation bias and out-of-the-loop research** are the low-overlap cognition witnesses. High reliability makes the operator disengage, which "interferes with an operator's ability to re-assume control". This is the channel-decay finding (F1) at the individual stratum and the mirror chain (F2) at the team stratum. These are not measurements of this question, so they corroborate mechanism, not verdict.
4. **Evolutionary mismatch** is a genuinely distant analogue (evolutionary biology). A mechanism shaped by one environment becomes maladaptive when the environment changes rapidly. It corroborates only the abstract claim that a fixed control mechanism can fail when the ground's rate changes (Fig 4 :19-20, Fig 10 :24). It says nothing about human control specifically. Recorded as low-overlap corroboration of shape, not of the MHC verdict.
5. **The policy sources** (ICRC, UNODA, the Wikipedia synthesis) supply the field's retained elements: sufficient information, ability to exercise judgment, ability to limit tasks and targets. These are a shape, consistent with the figures. The ICRC is an advocacy body with a declared stake, so its agreement is never pooled as corroboration.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :25**: *"A recording carried upward looks like knowledge and is a description of one occasion."* Sending the full framework before a recipient has described a residual sends a recording. Lead with the shape claim and its refuter.
- **Fig 10 :42**: *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28**: *"describe it before you go looking, or any frame you pick will seem to fit"* Ask what they would count as a failure before giving them the article.
- **Fig 2 :40**: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* Do not select recipients for likely agreement, and do not pool later agreement as corroboration.
- **Fig 8 :48**: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."* One-to-one, across different closures.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure and record the answer; (3) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1.** Send the residual, the shape claim and the pre-registered refuter. Ask for a failure, not an endorsement. The verdict is recorded before any theory is shown. This is Fig 10 :52: *"Bring a characterised residual, never the source."*
2. **Stage 2, opt-in only.** If the recipient is curious, offer the source links. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3.** Offer the formula as a method to reuse. This is permitted: Fig 4 :22: *"Only methods cross up. Only head starts come down."* Each user must state their own ground and write their own refuter, because a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The four refuters in `01` §4 are live; they have not been fired. If one fires, stop and retract before sending.

## Hosting

This agent can create local files. It cannot upload them, host them or send them. Hosting a download page and sending the link is yours to do. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list.
