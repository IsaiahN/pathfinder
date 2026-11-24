# Solution ORI-0022

**Question:** Which ingredients could have formed locally, and which may have arrived on meteorites or comets?

**Source:** origins of life.txt line 32

**Section:** 3. Prebiotic ingredients and chemical supply

**Mode:** `specified` on the structural shape and the per-slot classification principle, `general` on the reachability rule, nothing `grounded`. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

**Status:** done

**Registry status:** pending

## The residual in effect terms

The question is not a list request. It is a reachability question asked once per ingredient slot: can this class of molecule be composed from the atoms and bonds available in the local early-Earth chemical closure, or does accounting for its presence require importing an atom or a molecular form from a frame whose closure differs (parent body, comet, interplanetary dust)? The two options lead to different instruments. "Formed locally" predicts synthesis products in laboratory analogues of the local habitat and a terrestrial isotopic and chiral signature. "Arrived on meteorites or comets" predicts heavy-isotope enrichment, racemic or non-biological isomer distributions, and a delivery vector. An answer would look like a per-slot table with the provenance discriminator named for each row, not a single global list.

## What an answer would look like, bound as an ordinary term

`BUCKET(s) = local-reachable | import-available | compound | undetermined`, plus `DISCRIMINATOR(s)` naming the observation that would move a slot between buckets. Binding the sought-for shape is required by `THE_FORMULA.md` step "Direction": a frame cannot check the shape it is searching for unless it is written down as a term that can accrue a residual.

## Authority and boundary

The figures are primary and decide the shape. Local formation maps to composition inside `closure(Gamma)` (MINT); extraterrestrial delivery maps to IMPORT, the only operator that moves the wall. Which specific molecule sits in which bucket is not figure-decidable; it is settled by ground instruments (isotope ratio mass spectrometry, chiral chromatography, sample return). World sources are secondary corroboration only. Every world URL in this folder was opened and is recorded in `10_source_ledger.csv`.

## Files

| file | content |
|---|---|
| `README.md` | manifest, question, source line, section, mode, status, file list |
| `01_figure_grounded_audit.md` | derive-first audit: residual, domain census, figure census, findings F1..F9, pre-registered refuter, recommendation, canonical usage check, retraction log |
| `02_outreach_email.md` | two-stage offer, residual and refuter first, links only after, one-to-one |
| `03_public_contact_points.csv` | public, opt-in institutional submission and contact venues in extraterrestrial delivery research |
| `04_links_and_distribution.md` | verified links, wider literature, distribution rules, two-stage offer |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the essays and the figures |
| `06_isomers_and_order.md` | supporting derivation: ingredient versus arrangement, order of the two loops, impact synthesis as a compound case |
| `07_the_tether_answer.md` | synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version |
| `08_expert_verification_packet.md` | the one to send: claim, three checkable sub-claims with verbatim lines and refuters, provenance, 20-minute check |
| `09_watson_answer.md` | canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by / Sources |
| `10_source_ledger.csv` | one row per source actually read, with url, author, venue, year, accessed date, quote, field, overlap, status, used_in_file |
| `11_audit.md` | independent second-seat re-census, comparison, verbatim line checks, round trip gap `R_T`, strains, verdict |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.

Reason: a list selected for receptiveness manufactures the correlation that disqualifies agreement as a verdict (Fig 2 :40, *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*). The public venues in `03` are opt-in submission routes, not a audience of believers.
