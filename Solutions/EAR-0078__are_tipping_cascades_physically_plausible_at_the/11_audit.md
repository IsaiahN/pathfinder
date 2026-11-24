# Second-seat audit of the EAR-0078 solution

**Mode: `specified`, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same essays, the same world sources, the same folder files. Fig 2 :40 says "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken. This audit cannot settle the claim it audits.

The material audited is the full solution, read against the residual line from `earth systems.txt` line 103: "Are tipping cascades physically plausible at the global scale, and which links in proposed chains are well supported?"

## Independent domain census

I redid the census before relying on the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is a two-effect question, so a **union**, not one hard question. Arity: pairwise links plus element states, enumerated outward. Symmetry: the links are ordered (sequence, production, threshold) and may close as a cycle; a chain is the degenerate one-bond case. Scale: element, coupling, network, global aggregate, with a lossy transform at the last step.
- **D1 Physical contact habitat.** Actors: the named Earth-system elements and what acts on them. Currency: physical forcing and fluxes. Anchor: observation, palaeo record, process instrument. Admitted.
- **D2 Notation over the habitat.** Actors: elements as terms, links as bonds. Currency: composition within `closure(Γ)`. Anchor: the ground settles each link. Admitted.
- **D3 Evidence frame.** Actors: models, elicitation, reviews. Currency: agreement and residual. Anchor: the ground, never agreement. Admitted.
- **D4 Scale bridge.** Actors: element-level and global-level descriptions. Currency: the lossy transform and `R_T`. Anchor: the measured round trip. Admitted.
- **X1 Planetary threshold as a single global variable.** Anchor: none independent of model output. Not a domain; folded into D4.

Order by dependency: enumerate contact → status each link → settle each link → bracket the scale transform → triangulate across low-overlap frames.

My census matches the primary's four domains and its union reading. Where the primary derived from Fig 11 (contact cascades) and Fig 3 (per-link status), I derived from Fig 9's union/partition split and Fig 12's bond taxonomy. Different starting figures, same domain boundaries: low overlap between routes, so the agreement is weak but not circular within the framework. It is still one evidence pool.

## Comparison with primary

I checked each primary finding against the verbatim figure text and against the corrected files.

| primary finding | my independent check | agreement |
|---|---|---|
| F1 cascade is a contact-composition shape | Fig 11 :44 and :52-53 license enumeration and contact cascades; Fig 13 :31-32 supplies residual compounding | agree, with the mode downgrade from "physical fact" to `general` shape |
| F2 per-link status, never aggregated | Fig 3 :19, :27 and Fig 1 :19, :22 | agree |
| F3 chain vs cycle is a notation strain | Fig 12 :48, :121; Fig 11 :43 separates habitat from notation | agree, strain resolved by re-census, not hidden |
| F4 global scale needs measured `R_T` | Fig 4 :20, :27-32; Fig 1 :19 | agree |
| F5 one evidence pool | Fig 2 :31-32, :35, :40; Fig 7 :13 | agree |
| F6 link support is a `gap` | Fig 9 :32; Fig 13 :134; Fig 8 :39 | agree |
| "figures prove physical cascades" retracted | canonical README returns a shape, not a name; world sources are stylized or elicitation-based | agree, retraction correctly retained |
| "global scale is a domain" retracted | X1 has no nameable anchor | agree |
| Wunderling 2021 downgraded to one witness | conceptual network model using expert knowledge | agree |
| Rocha 2018 downgraded to low-overlap corroboration | regime shifts, not Earth-system links | agree |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." checked.
- Fig 11 :52 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." checked across the line wrap; the SVG extract breaks after "three" and continues "steps out."
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." checked.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." checked.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 12 :48 "A molecule is a bonded arrangement. A chain is the degenerate case: one bond type, no branching. Nothing about a chain is a different kind of object." checked.
- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." checked.
- Fig 4 :20 "Only the actors, the currency and the anchor change." checked; the full SVG line ends with "anchor change.", so the quotation is a truncation of a longer sentence, not a different quote.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." checked.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the leading clause belongs to the line and should be included when quoting the whole line.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence," checked, trailing comma included.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap R_T

The Symbols table defines R_T as `gap(x, (T_E ∘ T_A)(x))`, the gap between what was sent up and what came back down. Fig 4 :30 requires it to be measured rather than assumed zero. I ran the round trip on the condensation the folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 11 :44, :52 (contact enumeration and cascades), Fig 3 :19, :27 (per-link status), Fig 12 :48, :121 (chain and cycle), Fig 4 :30 (round trip).
2. **Abstraction (T_A):** the shorthand carried in `07_the_tether_answer.md`: cascade is contact enumeration; each link needs an instrument; a chain cannot close; global scale carries `R_T`; agreement in one pool is not corroboration.
3. **Concretisation (T_E):** the concrete world claim in Steffen et al. 2018: a planetary threshold near 2 °C, a domino-like cascade of tipping elements, a "hothouse Earth" pathway.

**R_T is nonzero.** Four things the shorthand holds do not survive the trip back down:

- the **support status of any named link**, which the shorthand refuses and the concrete claim supplies from expert elicitation;
- the **bond type at each link**, which the shorthand requires to be stated and the concrete claim draws as uniform one-way arrows;
- the **measured element-to-global gap**, which the shorthand requires and the concrete claim does not report;
- the **independence of the witnesses**, which the shorthand requires and the shared elicitation pool does not provide.

Conversely, one thing survives cleanly: a cascade is contact enumeration with a compounding residual, and a global aggregate must be treated as a coarser description. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the figures" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a recorded gap, which is what `09_watson_answer.md` states.

## Strains and re-census

- **Chain versus cycle.** The primary initially read the physical chain as breaking Fig 12 :121. Re-census resolves it: Fig 12 governs the notation over the habitat; Fig 11 :43-44 governs the habitat itself. Different objects. Matches the README's rule that a reading which makes figures contradict one another has misidentified its domain.
- **World-world conflict, Armstrong McKay versus Steffen.** One refuses a near-term runaway, the other raises the hothouse risk. The conflict cannot be settled by choosing a side, because both are secondary. Re-census: the figure verdict says the global link is a `gap`, and both world sources are consistent with that. The conflict is recorded, not resolved by a world vote.
- **Fig 4 :20 quotation length.** Checked and noted above: the quotation is a truncation of a longer sentence, not a variant reading. No correction is owed.
- **Record-level omissions.** The retracted items in `01_figure_grounded_audit.md` §6 were overstatements in the first draft, not figure conflicts. No re-census is owed; both readings are retained.
- **After re-census: one notation strain named, one world-world conflict recorded, none hidden.**

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files are consistent with one another and with the verbatim figure text. The retraction table is applied rather than ignored: the physical-existence overstatement is downgraded, global scale is folded into D4 rather than admitted as a domain, the Wunderling source is reduced to one witness, Rocha is reduced to low-overlap corroboration, and the chain-versus-cycle strain is dissolved by re-census while the notation limit is retained. `09_watson_answer.md` carries the full WATSON shape with the verdict fields stated; `10_source_ledger.csv` records every source actually read with author, venue, year, accessed date 2026-11-22 and local paths where applicable; this file records the independent check. The strongest artifact remains `08_expert_verification_packet.md`: mode, three checkable sub-claims, verbatim lines, refuters and provenance before the conclusion.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the claim is true.

**On the claim: `specified`, ungrounded, candidate.** The shape survives (contact enumeration, per-link status, chain-versus-cycle notation, measured round-trip gap, one evidence pool). The specific bindings do not (no named link is supported by the figures; the global aggregate has no independent anchor; agreement is not settlement). Nothing here is settled: an instrument separating propagation from shared forcing, a quantified coupling with provenance, or a measured element-to-global gap would be required to move any finding to `grounded`. Agreement or prestige is not such an instrument.

**Recommendation.** Send the corrected packet with its mode and refuters attached, ask which link would fail first, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links.
