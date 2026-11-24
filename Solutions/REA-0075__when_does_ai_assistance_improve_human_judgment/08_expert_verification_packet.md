# Expert verification packet - AI assistance and human judgment

**What this is:** a claim in a form a researcher in judgment, human factors or human-AI interaction can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the sub-claims, `general` on the structural rule. Not `grounded`.** No trial is claimed here. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

"AI improves human judgment" is underdetermined until it names which of two quantities it means: Q1, aided accuracy against the ground on this task, and Q2, the person's unaided capability on held-out tasks after withdrawal. The shape claim is: assistance improves judgment and preserves own skill when the aid is an instrument for the axis being judged and changes the person's contact with the ground, leaving a re-applicable method; it weakens own skill when it substitutes the person's habitat with a recording to replay, so the loss stays invisible until the goal fails. For person-level questions, human judgment is the anchor and the AI is an instrument, and instruments can be wrong on axes they do not measure. The framework offers a shape and refuters, not a named tool.

## 2. Three checkable sub-claims

### C1 - two quantities, not one (checkable against the figures and against any human-AI experiment)

- **Statement:** Q1 and Q2 are a union compound; they must be reported per task slot and never averaged into a single productivity number.
- **Source, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 9 :4 *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*
- **What to check:** does the study you know report unaided performance after withdrawal on tasks the aid never saw? If it reports only aided performance or self-reported confidence, it has no reading of Q2.
- **Refuter:** a study in which Q1 and Q2 move in the same direction on every measured slot, with no divergence anywhere. That breaks the union reading.

### C2 - anchor versus instrument (checkable by a judgment researcher)

- **Statement:** for a question constitutively about people, human judgment is the anchor; AI is an instrument for what it measures and can be wrong on unmeasured axes.
- **Source, verbatim:** Fig 2 :36-37 *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
- **What to check:** Glickman and Sharot (2025) report that a biased AI amplifies human bias while *"when humans interact with an accurate AI system, their judgements are improved."* Is the axis being judged one the aid actually measures? If not, the instrument is being used as an anchor.
- **Refuter:** an AI instrument accurate on its measured axis but wrong on an unmeasured axis shown to settle a person-level question as well as human judgment against a ground neither can move. That breaks Fig 2 :36-37. This is the sub-claim most likely to be wrong; please attack it first.

### C3 - method versus recording (checkable by a human-factors or HCI researcher)

- **Statement:** assistance that leaves a re-applicable method and maintained contact improves own capability; assistance that substitutes the habitat with a finished answer weakens it invisibly until the goal fails.
- **Source, verbatim:** Fig 4 :22 *"Only methods cross up. Only head starts come down."* Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion."* Fig 11 :66 *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* Fig 11 :68 *"what you failed to reproduce is invisible until the goal fails"*
- **What to check:** does the aid make the route explicit and require the person to act and be corrected, or does it deliver an answer to copy? Bainbridge (1983) and Endsley and Kiris (1995) are the classic ground readings of the failure; Lee et al. (CHI 2025) found that confidence in GenAI predicted less critical thinking.
- **Refuter:** an answer-only aid, with no method and no reapplication condition, shown to improve Q2 on genuinely new tasks at the ground. That breaks Fig 4 :25 and the substitution claim.

## 3. What is explicitly not claimed

- Not that any named product or interface is good or bad.
- Not that humans are more accurate than AI. The anchor claim is constitutive for person-level questions, not an accuracy ranking; human bias is real and is recorded in `01` section 6.
- Not that all AI use deskills, and not that no AI use helps.
- Not that confidence, satisfaction or perceived productivity measures either quantity.
- Not a universal threshold, a single best protocol, or a theory of everything about cognition.
- Not `grounded`. Nothing here was settled by experiment.

## 4. Provenance

- Residual, census, findings and five pre-registered refuters: `01_figure_grounded_audit.md`, compiled and checked 2026-11-24.
- Figure text: verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Every quote in this packet was checked against that extract before use.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Essays by Isaiah N opened 2026-11-24 and listed in `05_what_shape_means.md`. Same author as the figures, so high overlap; they are not independent witnesses.
- World sources opened 2026-11-24, with author, venue, year, quote and overlap in `10_source_ledger.csv`. Low-overlap fields: human factors (Bainbridge 1983; Endsley and Kiris 1995), human-AI experimentation (Vaccaro et al. 2024; Glickman and Sharot 2025; Lee et al. 2025), cognitive science (Clark and Chalmers 1998; Sparrow et al. 2011).
- This packet compiled 2026-11-24. No measurement was taken by this agent.

## 5. What would settle it

A preregistered randomized design with four arms (method aid, answer-only aid, instrument aid calibrated to the measured axis, no aid), held-out unaided tests at multiple time points, and per-slot reporting of Q1 and Q2. The specific falsifiers are in `01` section 4 and C1 to C3 above. Agreement, prestige, and user satisfaction are not instruments for any of them.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22; Fig 2 :36-37; Fig 4 :22, :25; Fig 9 :4; Fig 11 :66-68. Seven short passages.
2. Check C2 against your own field: for a person-level question, is the AI an instrument or is it being treated as the anchor? Name one axis it does not measure.
3. Name one study you know that reports unaided performance after withdrawal on unseen tasks. If you cannot, say so; that is the missing instrument, not evidence that Q2 is fine.
4. Write down what would refute C3 in your own words before reading the rest of the folder.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
