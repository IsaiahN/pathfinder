# Solution REA-0068 - figure-grounded package

**Question:** Can AI systems model other agents' beliefs and intentions without mistaking prediction for understanding?

**Source:** reasoning.txt line 83

**Section:** 7. Creativity, social intelligence, and language

**ID:** REA-0068

**Mode:** `specified` on every substantive claim, `general` on the structural distinction between prediction and understanding. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 8.

**Status:** done

**Registry status:** pending

**Figures authority:** every figure quote was taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not whether an AI outputs strings that look like mental-state talk. It is whether the residual can be driven to zero on the **behaviour** of another agent while remaining large on the **source** of that behaviour. In effect terms (Formula step 1; Symbols table, `R`, `b`, `o′`):

- **b** is belief. The Symbols table says it is *"What the system takes to be the case before it acts. Formed from its own history and from what it inherited, mixed by w. Not the observation."* There are two of them here: the model's own `b`, and the other agent's `b`, which the model does not observe.
- **a** is action. For the other agent it is what it does. For the AI it is the attribution it emits.
- **Γ(b,a)** is what a library predicts will happen given belief and action.
- **o′** is what actually happened. For the AI's prediction task, o′ is the other agent's observed behaviour.
- **s** is the slot: each other agent being modelled, and within an agent, each mental-state slot (belief, intention). R is indexed per slot, never averaged (Fig 1 :19, Fig 1 :22).

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

- Option A: "a low behavioural residual is sufficient for understanding." This leads to the prediction that benchmark accuracy on mental-state questions settles the question.
- Option B: "behavioural prediction and source attribution are different quantities with different anchors." This leads to the prediction that a model can have near-zero behavioural R and still be wrong about the belief, and that only a source-discriminating instrument separates the two.
- What an answer would look like, written down and bound as an ordinary term before the run (Formula, "Direction"): a pair of conditions, one under which a low behavioural R licenses a source claim and one under which it does not, plus an instrument that discriminates two latent states producing the same behaviour. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 of `01` can fire on it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged. Prediction is well posed and has a nameable anchor. Understanding, as a claim about an unobserved source, has no nameable anchor for real agents here, so it is a declared `gap`, not a hidden answer. For synthetic agents whose latent states are recorded ground truth, the gap is closable in principle.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, figure census, findings F1 to F11 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in theory of mind research and cognitive science. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer, AI-authorship caveat |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: metamerism and isomers of latent state, dependency order, competing explanations, with a falsifier |
| `07_the_tether_answer.md` | the synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version |
| `08_expert_verification_packet.md` | **the one to send:** one-paragraph claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check list |
| `09_watson_answer.md` | canonical WATSON output shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by / Sources as linked titles |
| `10_source_ledger.csv` | one row per source actually opened: url, title, author, venue, year, accessed date, quote, field, overlap, status, used in file |
| `11_audit.md` | independent second-seat re-census from the residual line alone, comparison with the primary census, verbatim lines checked, round-trip gap R_T, strains, verdict on the solution |

---

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.
- No claim that this derivation is `grounded`, no claim that it settles REA-0068, and no claim that the framework is the only account of theory of mind.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
