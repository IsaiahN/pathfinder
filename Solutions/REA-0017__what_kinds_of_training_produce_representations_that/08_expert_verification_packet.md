# Expert verification packet - REA-0017

**What this is:** a claim in a form a representation-learning researcher, a comparative psychologist or a learning-sciences researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the three conditions, `general` on the structural shape, `gap` on the named algorithm. Not `grounded`.** No training run or OOD measurement is claimed. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

The question "which training produces representations that generalize beyond familiar patterns?" is a union of three conditions, not a method ranking. A regime generalizes when (i) it leaves a re-applicable generator so the reach grows rather than the library, (ii) the habitat brings the learner into contact with conditions whose closures differ, with provenance for what crosses, and (iii) an unmoved ground returns a small residual on novel situations measured per slot. The resulting representation is a molecule, not an ingredient list: same features under a different arrangement are a different substance with different transfer behaviour. No figure line names a winning algorithm or returns a threshold number, so that part is a declared gap. What is offered is the shape, written refuters, and the instruments that would close it.

## 2. Three checkable sub-claims

### C1 - habitat and contact (checkable by a comparative psychologist or ML researcher)

- **Statement:** changing contact, not the agent in isolation, is what moves the novel-situation reading. A training regime that varies the structure of conditions, not merely the count of correlated examples, is the operative condition.
- **Source, verbatim:** Fig 11 :39 - *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40 - *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."* Fig 6 :23 - *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
- **What to check:** is the contact claim faithful to your domain? In the pigeon data (Nakamura et al. 2009), broader initial training sets produced immediate novel-stimulus transfer while small sets produced carryover effects; in the education data (Mondoux et al. 2020), varied contexts beat same-context examples. Are these habitat manipulations, or can the effect be fully accounted for by within-agent capacity?
- **Refuter:** an agent-only change, with habitat and contact held fixed, that moves the OOD ground reading. This also refutes Fig 11 :40.

### C2 - reach versus library, and the bond (checkable by a representation-learning researcher)

- **Statement:** storing more patterns is not the same as growing what can be composed; the transfer-relevant information is the typed arrangement, not the ingredient list.
- **Source, verbatim:** Fig 12 :5 - *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :117 - *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* THE_FORMULA step 8 (local framework file, not a figure line): *"a library that grows is not a reach that grows."*
- **What to check:** take two learners matched on active feature magnitudes but differing in objective (generator-preserving versus recording-preserving). Do they differ on a novel-situation probe? If not, the bond claim fails. Bengio et al. 2013 and Geirhos et al. 2020 give the field's own formulations; Kamath et al. 2021 is the published caveat against treating any one objective as sufficient.
- **Refuter:** transfer behaviour fully predicted by the ingredient list with the bond term set to zero across a change of situation; or a library that grows, reach that does not, and a novel-slot residual that nonetheless trends down and stays down.

### C3 - the anchor and the per-slot residual (checkable by anyone designing an OOD evaluation)

- **Statement:** a benchmark used in training is a frame, not an anchor; an averaged score hides the live slot.
- **Source, verbatim:** Fig 2 :29 - *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 1 :22 - *"Aggregating across slots is how a live signal disappears into an average."* Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- **What to check:** is the evaluation ground independent of the training contact? Does the per-situation distribution of residuals tell a different story from the mean? A regime counted as generalizing on a trained-on benchmark has not met this condition.
- **Refuter:** averaged accuracy reproduces the per-slot verdict on a held-out, non-updating probe, or a trained-on benchmark agrees with an intervention-based probe across a change of situation.

## 3. What is explicitly not claimed

- Not a method ranking. No figure line selects a named algorithm or returns an OOD threshold; that is the declared `gap` (Fig 9 :32, *"you get a kind of thing, never the answer itself"*).
- Not "more data or bigger models." Scale is a filter for the budget, not a witness (Fig 9 :60).
- Not that invariant risk minimization is the answer. It is a provenanced import with a diversity requirement and a published failure case.
- Not that the learned vector is the cause of transfer. Its source is not recoverable from the artifact (Fig 11 :129).
- Not `grounded`. Nothing here has been settled by a measurement.

## 4. Provenance

- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked 2026-11-23. Citations use `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (local copies).
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`; seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- World sources: Arjovsky et al. 2019/2020; Geirhos et al. 2020; Bengio et al. 2013; Kamath et al. 2021; Peters, Bühlmann and Meinshausen 2016; Bühlmann 2020; Wright et al. 2006; Nakamura et al. 2009; Mondoux et al. 2020; Zhang et al. 2023; Isaiah N, *The Recursive Self-Improvement Trap*, 2026. All opened 2026-11-23, with author, venue, year, quote and overlap recorded in `10_source_ledger.csv`.
- Compiled 2026-11-23.

## 5. What would settle it

1. A second-use test: two learners with matched ingredients but different arrangement, evaluated on a novel ground neither trained on. Distinguishes generator from recording.
2. A contact substitution: architecture fixed, habitat changed to genuinely differing closures with a provenance record. Tests C1.
3. A per-slot anchor check: trained-on benchmark versus held-out intervention probe, reported per situation. Tests C3.
4. A figure re-census that finds a line naming an algorithm or returning a threshold number. Closes the gap.

## 6. What an expert can check in twenty minutes

1. Read Fig 11 :39-40, Fig 6 :23, Fig 12 :5 and :117, Fig 2 :29, Fig 1 :22 (six short passages).
2. Check C2 against your own representation work: does matched-feature versus different-arrangement change transfer in your setting?
3. Name one instrument that would discriminate a generator from a recording in your system, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
