# Solution CMP-0024 - figure-grounded package

**Question:** How should network models represent links that vary in strength, direction, duration, and meaning?

**Source:** complexity science.txt line 31

**Section:** 3. Network structure and dynamics

**ID:** CMP-0024

**Mode:** `specified` on every substantive claim, `general` on the structural shape. This folder contains a simulated derivation checked for internal consistency against the figures. It is NOT a ground reading and cannot settle the question it reports on. See `01_figure_grounded_audit.md` section 0 and `05_what_shape_means.md` section 6.

**Status:** done

**Registry status:** pending

**Figures authority:** every figure quote was taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session and cited as `Fig N :line`. No figure quote came from a summary, a memory, or the master plan. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; its key sentence is *"the quotes are the authority, not this summary."*

---

## The question restated as an effect

What is being decided is not how to attach four more numbers to an edge. It is what a link **is** inside a model's library, given that the same pair of nodes can produce different observed dynamics under different strengths, directions, durations, and meanings. In effect terms:

- **b** is the modeller's prior about what a link is, formed from training, convention, and inherited graph vocabulary.
- **a** is the representation chosen: an adjacency entry, a scalar weight, an arrow, a timestamp, a type label, or a typed bond with a record of which bond holds.
- **Γ(b,a)** is what the model predicts about spreading, cascades, flow, or failure on that representation.
- **o′** is what the system actually does, measured outside the model.
- **s** is each link or link-type slot. R is indexed by slot, never by the whole graph: *"The residual is indexed by object slot, not aggregated."* (Fig 1 :19)

> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

- Option A, "a link is one edge type with four scalar dials": leads to a flat formula in which the arrangement is unrecorded, so nothing downstream can tell a strong tie from a directed one, or a transient contact from a signed relation.
- Option B, "a link is a typed bond, and the four variations belong to different figure terms": leads to a shape with separate instruments, per-link residuals, falsifiers written in advance, and an honest `gap` where a name would be needed.

**What an answer would look like, written down and bound as an ordinary term before the run** (Formula, "Direction"): *each link is a molecule of two operands joined by one priced typed bond; strength is an ordering/comparison, direction is the symmetry class of the bond, duration is a time relation on the bond, meaning is which bond holds; and each variation has an instrument that discriminates it at the ground.* Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the pre-registered refuter in `01_figure_grounded_audit.md` section 5 can fire on it.

The verdict recorded in `09_watson_answer.md` is Option B in `specified` mode, kept per domain and never averaged. Which particular bond actually holds in a given empirical domain is recorded as a `gap`, not filled.

---

## What is here

| file | what it is |
|---|---|
| `README.md` | this manifest: ID, question, source line, section, mode, status, file list, effect restatement |
| `01_figure_grounded_audit.md` | the full derive-first audit: residual, domain census, figure census, findings F1 to F9 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical check, retraction and confirmation log |
| `02_outreach_email.md` | the two-stage offer, one to one, residual and refuter first, links only after a verdict is recorded, never asks for trust or agreement |
| `03_public_contact_points.csv` | verified public, opt-in institutional submission and contact venues in network modeling research. No personal emails |
| `04_links_and_distribution.md` | the public links actually fetched, what the wider literature bears on the question, distribution rules, two-stage offer, AI-policy caveat |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays, including the source/provenance and prestige/action rules |
| `06_isomers_and_order.md` | supporting derivation: bond families, isomer and functional-group readings, dependency order, competing readings, with falsifiers |
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
- No claim that this derivation is `grounded`, no claim that it settles CMP-0024, and no claim that the framework is the only account of network representation.

Three figure-grounded reasons, plus one practical one:

1. A room is not an anchor. *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."* (Fig 7 :35) and *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35). Gathering agreeable readers manufactures the correlation that disqualifies a verdict.
2. Correlation has valence. *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
3. A verifier must be outside the interior. *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42). The first contact therefore carries the residual and its refuter, not the framework.
4. Legally, unsolicited bulk email to scraped addresses breaches GDPR and CAN-SPAM style rules in many jurisdictions and gets the sending domain blacklisted. Public opt-in routes avoid that failure as well as the structural one.

---

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask for a refutation of the stage-1 shape before showing any theory. Record the verdict first. The figures, not this summary, are the authority.
