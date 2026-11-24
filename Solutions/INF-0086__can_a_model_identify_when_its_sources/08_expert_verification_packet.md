# Expert verification packet: the Tether on misleading sources

**What this is:** a claim in a form a researcher in AI reliability, fact checking or source provenance can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on the empirical question.** No measurement of a real model is claimed. This is a shape and a route, not a result. Simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

A model that reproduces a source's pattern faithfully has not thereby identified whether that source is misleading. Reproduction and refusal are different quantities with different anchors. Inside the model's own closure, and in a pool where model and source share evidence, detection is not available: fluency, likelihood and citation counts are frame-internal scores, and agreement with a shared source is the pool talking. Detection is possible in principle only where three conditions hold together: an anchor that does not update when the model or the source moves; a second frame whose closure differs from the source's, so the source's residual can register; and a bound term with a negation operator that can refuse the source while keeping it in the record. The sought-for shape is usually an unbound preference, so writing it down as an ordinary term before the run is part of the method. Whether any deployed model implements this is explicitly a `gap` in this work, not a finding.

## 2. Three checkable sub-claims

### C1 — framework-internal; checkable by reading Figures 1 and 2

- **Statement:** reproduction scores are not reliability verdicts. A model and its source sharing a corpus are one evidence pool, so their agreement cannot corroborate the source.
- **Source, verbatim:** Fig 1 :24-27 — *"These do not count:"*; *"coverage, and compression achieved"*; *"predicates minted, and credibility accrued"*; *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Fig 2 :18-21 — *"one evidence pool"*; *"they never talk, and still agree"*; *"so the agreement is the pool talking, not two frames confirming each other."* Fig 2 :35 — *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- **Refuter:** show a framework-internal quantity (likelihood, fluency, citation frequency, number of predicates minted) that changes a model's refusal of a source without any contact with a non-updating anchor, and show the figures admit it as a verdict metric. Or exhibit two frames whose agreement is worth more than one while drawing on the same corpus and the same labels.

### C2 — framework-internal plus world-facing; checkable by reading Figures 5, 6 and 8, then checking the cited experiments

- **Statement:** detection needs a non-updating anchor, a differing closure, a persistent flat residual and a refusal operator. More sources alone make it worse, not better.
- **Source, verbatim:** Fig 2 :29 — *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 6 :23 — *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 5 :59 — *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"*; Operators table :58 — *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*; Fig 8 :48 — *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."*
- **What to check against the world:** RAGuard (Zeng et al., NeurIPS 2025) reports that all tested LLM-powered RAG systems *"perform worse than their zero-shot baselines"* when misleading retrievals are added and that *"retrieving more documents raises the likelihood of including harmful content."* Glockner, Hou and Gurevych (EMNLP 2022) show models *"rely on leaked evidence"* in fact-checking datasets.
- **Refuter:** derive "this source is misleading" by in-closure composition alone with no imported atom and no second frame (breaks Fig 8 :32 idempotence), or show an accumulation-only vocabulary removing a source's composability without ¬ (breaks Operators table :58), or show a scaling result adding reliable per-source refusal with no change in contact (breaks Fig 11 :40).

### C3 — framework-internal; the limit that makes pre-registration necessary

- **Statement:** the sought-for shape is normally not a bound term, so no internal check can see it; the discipline of writing it down before the run is what makes it refusable.
- **Source, verbatim:** Fig 5 :61 — *"BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL."* Fig 5 :62 — *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."* Fig 5 :63-64 — *"Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION."* Fig 5 :65-66 — *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."*
- **What to check in the world:** Azaria and Mitchell (Findings EMNLP 2023) find that a trained classifier reads truthfulness from activations at *"71% to 83% accuracy"* while zero-shot prompting *"completely failed with accuracy levels not going beyond 52%"*, and that knowing a generated statement is false *"does not entail that the LLM will not generate it in the first place."* This is discrimination without refusal, the distinction C3 predicts.
- **Refuter:** show a model with no bound term for source reliability that nevertheless registers a per-source residual and refuses the source at a non-updating anchor, with no prompt supplying the concept. That breaks the preference-not-a-term limit.

## 3. What is explicitly not claimed

- Not that a model can never detect a misleading source. D3 with an anchor and a differing closure is exactly where the figures license it.
- Not that any particular deployed model does. That is a declared `gap`, unreached at this budget (Fig 13 :134).
- Not that scale, more data, more citations or more agreeable reviewers produce detection. They are agent-side or shared-pool moves (Fig 11 :40, Fig 2 :40).
- Not that a fixed blacklist transfers to a new domain. It is a recording of one occasion (Fig 4 :25).
- Not that TruthfulQA, RAGuard, or the internal-state result settle the question. They are secondary sources, filters for the budget and never witnesses for the verdict (Fig 9 :60).
- Not `grounded`. No measurement of a real model was taken in this run.
- Not that the framework is the only account of source reliability, and no request for agreement or trust is made.

## 4. Provenance

- Question: `Questions/Information Theory.txt` line 105, section 9, Information in AI and machine learning.
- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, reopened 2026-11-23.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- The eight-step loop: `FRAMEWORK/figures/THE_FORMULA.md`.
- World sources actually opened and recorded in `10_source_ledger.csv`: Shumailov et al. (Nature 2024), Zeng et al. (NeurIPS 2025), Glockner et al. (EMNLP 2022), Johnson (1997), Lin et al. (ACL 2022), Azaria and Mitchell (Findings EMNLP 2023), Han et al. (EMNLP 2025), plus two essays opened directly.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: *"An instrument that can't distinguish these cases demonstrates its own inadequacy"* and *"It was proven wrong not by argument, but by the arrival of a better instrument."* The instrument must withhold ground labels, inject misleading sources absent from the corpus, score refusal of the source rather than a correct final answer, keep residuals per source slot (Fig 1 :19), use a non-updating anchor (Fig 2 :29-33), and include a low-overlap checking frame (Fig 8 :48). A result under those conditions converts the `gap` into a ground reading without refuting the shape.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :24-27, Fig 2 :18-21 and :29-35, Fig 5 :59-66, Fig 6 :23, Fig 8 :48, Operators table :58. Seven short passages.
2. Check C1 against your own view of what a truthfulness score measures. Is it a verdict about a source, or a frame-internal quality?
3. Check C2 against RAGuard and the leakage result: does adding sources and labels actually improve source discrimination in the setting you know?
4. Check C3 against the internal-state result: is there a difference between a classifier reading truthfulness and a model refusing a source?
5. Name one instrument that would discriminate a faithful from a misleading source under withheld labels, or say why none is possible.
6. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
