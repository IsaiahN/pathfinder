# Solution INS-0089: trade rules, global economic institutions, and domestic policy choice

**Mode:** `general` on the structural shape, `specified` on the per-domain mechanisms. Nothing here is `grounded`: no dataset, ruling, or market observation was gathered for this run. This is a simulated derivation checked for internal consistency against the figures, not a ground reading, so it cannot settle the question it reports on.

**Status:** done.
**Registry status:** pending.
**Question:** How do trade rules and global economic institutions constrain or enable domestic policy choices?
**Source:** `institutional questions.txt` line 108.
**Section:** 9. Economic institutions and distribution.

---

## 1. The question restated as an effect

A domestic policy frame holds a library of instruments (tariffs, subsidies, standards, capital controls, industrial policy). Before contact with an external frame it predicts that a legislated instrument returns its intended outcome. After contact, some legislated instruments fail to return that outcome: a panel rules a subsidy unlawful, a tribunal awards damages against a measure, a capital flow defeats an interest-rate change, a programme makes disbursement conditional on a fiscal adjustment.

Write the residual per policy slot `s`:

```
R_s = | Gamma_domestic(b, a) - o' |
```

- `Gamma_domestic(b, a)` is what the domestic frame predicts its instrument will do.
- `o'` is what the world actually returns after the external frame acts.
- **Constrain** is a persistent, non-trending-down positive `R_s`: the move is made, the predicted effect does not arrive, because a refusing term was added.
- **Enable** is a slot that was not in `closure(Gamma_domestic)` becoming reachable after contact with a frame whose closure differs: a primitive was imported and the reach grew.

**Direction (the sought-for shape bound as an ordinary term).** The answer we are looking for is: *a per-slot account in which constrain is a fall in reach caused by an added refusal, enable is a rise in reach caused by an imported primitive, the valence of any institution is relative to the slot, and capability belongs to the government-and-its-habitat rather than to the government alone.* Binding that shape as a term lets it accrue a residual like anything else (THE_FORMULA.md, "Direction"), so the preference can be refused by the same test as every other claim here.

What an answer would look like if it succeeded: it would name, for at least one policy slot, which added term removed standing and which imported primitive expanded the reach, and it would state what instrument would discriminate the two.

---

## 2. What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure census, findings F1 to F8 with refuters, pre-registered refuter, canonical usage check, retraction log. |
| `02_outreach_email.md` | One-to-one, two-stage offer. Residual and refuter first, links only after a verdict is recorded. |
| `03_public_contact_points.csv` | Public, opt-in institutional venues for **global economic institutions research**. No personal addresses. |
| `04_links_and_distribution.md` | Public links actually fetched, wider literature, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" from the essays, with the sources re-read this session. |
| `06_isomers_and_order.md` | Supporting derivation: structure, order, and the union/partition analogue, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, ground, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Three checkable sub-claims, verbatim lines, refuters, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by / Sources. |
| `10_source_ledger.csv` | Provenance for every source actually read, including local framework files. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, round-trip gap `R_T`, strains, verdict. |

---

## 3. What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.

Three reasons, in the figures' own words:

1. **A room is not an anchor.** Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Adding readers raises the vocabulary and does not add the ground.
2. **Selecting for agreement manufactures the disqualifying correlation.** Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"; Fig 2 :42: "Buy independence in proportion to the cost of being wrong."
3. **Asking for trust before checking spends the reader's independence.** Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

Legally: unsolicited bulk outreach breaches GDPR and CAN-SPAM style rules in many jurisdictions. Public opt-in institutional channels avoid that failure as well as the structural one.

---

## 4. Scope and honesty boundary

Field assigned to this solution: **global economic institutions research**. World sources were opened on 2026-11-23 and are listed with author, venue, year, accessed date and a quote in `10_source_ledger.csv`. Framework sources are the 13 figures plus the Operators and Symbols tables, `THE_FORMULA.md`, and the canonical figures README, all read from local copies under `FRAMEWORK/`.

The verdict below is a verdict about the **shape** of the relation between external rules and domestic choice. It is not a verdict about any named country, treaty, or policy, and no magnitude is claimed. Where the figures do not govern, the file says `gap` plainly. "Unreachable is a verdict, not a silence" (Fig 13 :134).
