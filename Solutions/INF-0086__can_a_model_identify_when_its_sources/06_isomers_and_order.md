# Reproduction versus refusal: structure, order and analogues

**Mode: `specified` on the structural claims, `general` on the shape, `gap` on the empirical implementation.** This is a simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## RESIDUAL

The question puts two behaviours in opposition: "merely reproducing their patterns" and "identify when its sources are misleading". The residual is whether those two are opposite ends of one dial, or different structures with different bonds and different anchors. If they are one dial, scale and data should move both together. If they are different structures, one lever will clear one condition and leave the other standing (Fig 9 :56-57).

## DOMAIN CENSUS

Atoms available for this derivation: source claim S, model rendering M, anchor reading A, ground G, plus the operators + (conjunction), ≡ (identity), ⋛ (comparison), ¬ (negation). Currency: composition inside closure(Gamma) versus import from a differing closure. Anchor: G, which does not update (Fig 2 :29). No new primitive is available without import.

---

## Q1 — Are the two behaviours a partition, a functional group, or isomers?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

**Narrow reading (as usually written):** reproduction is `{S, M}` under identity or conjunction (*"both hold at once"*, Operators table :12), while refusal is `{S, A, G}` under comparison plus negation. The two share only S. By Fig 12's definition they are **not isomers**; they share a **functional group**, the source claim as the common substructure. The group says "source-processing"; the qualifier says which bond.

**Strong reading (over the full shared atom set):** write both over `{S, M, A, G}`. Reproduction is the molecule in which S and M are bonded by ≡ or + and A, G are absent or inert. Detection is the molecule in which S ⋛ A is compared against G and ¬ is applied to S. Same atoms, different bonds, different substance: that is a real **isomer** claim (Fig 12 :117).

Which reading is correct is not decidable from the figures, because the figures do not say which atoms a "model's answer" must bind. The strong reading is the one worth testing: it predicts that a model can be made to bind A and G and thereby become a different substance without changing its atoms. That is exactly the import condition of Fig 6 :23. `triangulated` for both readings (Fig 12 definition, Fig 6 closure rule); unmeasured which one a given system implements.

**Falsifier, written before the run:** if a model can be shown to refuse a misleading source while binding only `{S, M}` (no anchor reading, no ground, no second frame), the isomer claim fails and the functional-group reading is all that survives. This is refuter 2 in `01` section 4.

## Q2 — Dependency order, and where the chain breaks

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

1. **Perception:** register S and A in different slots. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Without this, the source's failure is averaged into the model's overall score and *"a live signal disappears into an average"* (Fig 1 :22).
2. **Vocabulary:** have terms for claim, source, ground and refusal. Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*.
3. **Objective:** say what counts as progress. Fig 5 :59 gives the ranking rule: *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"*.
4. **Planning:** a route by import, with residual described before frame chosen (Fig 8 :53).
5. **Learn and carry:** verify and carry the refusal (Fig 3 :14-15, Fig 4 :22).

The break is between 2 and 3. Fig 3 :25-27 says the middle link *"has neither"* obvious failures nor obvious tests and *"attracts the least attention and the fewest instruments"*, and *"A link with no instrument is not a link that works. It is a link nobody has looked at."* This is also why Formula step 2 requires refusal before minting: a frame can accumulate predicting terms and never bind the direction of its own question (Fig 5 :63-64).

**Falsifier:** exhibit a system whose perception and vocabulary links are demonstrably working, whose refusal objective is implemented, and whose per-source residual still cannot be read. That would move the break from vocabulary/objective to a different link and require a new census.

## Q3 — Analogues, and what each does and does not license

- **Metamerism (human perception, *The Hard Problem is About Source*, OPENED):** several sources produce the same green reading. *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* Licenses: a source-discriminating instrument is owed. Does not license: naming a source from the reading.
- **Common cause (Fig 2, panel 2):** model and source share an evidence pool; *"they never talk, and still agree"*. Licenses: agreement is not corroboration. Does not license: the claim that no two frames can ever corroborate (Fig 8 :50 allows convergent derivation at maximum independence).
- **Model collapse (Shumailov et al., Nature 2024):** *"Being trained on polluted data, they then mis-perceive reality."* Licenses: provenance of sources is a real failure mode at corpus scale. Does not license: a claim about any single model's internal state.
- **Mirror chain (Fig 7 :35-36):** *"A room's agreement is variation, not a verdict"*; *"The next room must differ from the last, and match the residual it surfaced."* Licenses: more agreeing evaluators do not add evidence.
- **RAGuard (Zeng et al., NeurIPS 2025):** *"retrieving more documents raises the likelihood of including harmful content"* and all tested systems performed *"worse than their zero-shot baselines"* under misleading retrieval. Licenses: independence and quality, not count, are the design variable (Fig 8 :48). Does not license: the conclusion that retrieval can never help.
- **Human source monitoring (Johnson 1997):** *"Source confusions arise because activated information is incomplete or ambiguous and the evaluative processes responsible for attributing information to sources are imperfect."* Low overlap with the AI sources, so weak independent corroboration of the difficulty shape only.
- **Internal-state detection (Azaria and Mitchell 2023):** a classifier reads truthfulness from activations at *"71% to 83% accuracy"* while the model's own zero-shot judgement *"completely failed"*. Licenses: discrimination can exist without refusal. Does not license: that the model has a bound refusal term.

No analogue is used as a figure line. The figures decide; analogues corroborate at their declared overlap.

## Q4 — The instrument owed

From *The Hard Problem is About Source*: *"It was proven wrong not by argument, but by the arrival of a better instrument."* The instrument for INF-0086 must:

1. withhold ground labels from the model so leaked evidence cannot score (Glockner et al., EMNLP 2022);
2. inject misleading sources absent from the corpus so memorisation cannot score (RAGuard, Debate-to-Detect);
3. score **refusal of the source**, not just a correct final answer (Azaria and Mitchell);
4. keep the residual indexed per source slot (Fig 1 :19);
5. use a non-updating anchor (Fig 2 :29-33) and at least one low-overlap checking frame (Fig 8 :48).

This is a shape for an instrument, not a claim that such an instrument already exists in fully adequate form. RAGuard and CheckThat! are the closest existing public instances recorded in `03_public_contact_points.csv`.

## CONCLUSION

Reproduction and detection are not opposite ends of one dial. In the narrow reading they are functional-group relatives sharing the source claim as a substructure; in the strong reading, over the full shared atom set they are isomers, same atoms with different bonds and different behaviour. The chain that produces detection plausibly breaks at the vocabulary/objective link, where no instrument exists for the sought-for shape. Every analogue points to the same owed thing: a source-discriminating instrument with an anchor, not a larger reading of the same pattern.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the two opened essays; the world sources in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual, averaging), Fig 2 (common cause, anchor), Fig 3 (dependency order, middle break), Fig 4 (methods cross), Fig 5 (persistent-flat residual, preference limit), Fig 6 (closure and import), Fig 7 (room agreement), Fig 8 (independence, residual first), Fig 9 (union, unbundle), Fig 12 (isomer, functional group), Fig 13 (unreachable is a verdict), Operators (negation, conjunction), Symbols (b is not the observation). Strained after re-census: none. The weak point is empirical, not structural: which reading a given model implements is unmeasured and declared `gap`.
