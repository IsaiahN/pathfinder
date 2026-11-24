# Independent second-seat audit: COG-0001

**Mode: `specified` for the audit, not `grounded`.** This is a simulated second seat, written by the same agent in a separate pass from the residual line alone before comparing with the primary census. It is not an independent human witness. It checks internal consistency and census shape; it does not check the world.

## 0. What the second seat was given

Only the residual line, in effect terms:

> Two-indexed residual `(feature, society)`, non-symmetric, cross-societal scale. Question: sort cognitive features into shared across all known societies and varying substantially across cultures, and state what an answer would look like.

No domain list, no figure line, no finding from `01` was visible at this step.

## 1. Independent re-census from the residual line alone

**Arity.** Two indices. A one-index residual would collapse the comparison the question is about. The second seat independently reaches the same arity as the primary census.

**Symmetry.** Non-symmetric. Swapping feature and society changes the measurement. Under Fig 12's bond classification this needs an ordered relation; a symmetric bond would erase which index is the ground and which is the frame.

**Scale.** Cross-societal. The scale makes pooling tempting, and pooling is the named failure mode in Fig 1, so the second seat flags it before choosing any domain.

**Domains (independently enumerated).** The second seat starts from contact with the residual and lists what acts on it:

| id | domain | actors | currency | anchor |
|---|---|---|---|---|
| A | Perception and categorisation | observers, communities | boundaries, discriminability | psychophysical and naming measurements |
| B | Language | speakers, languages | constraints, settings | typological corpora |
| C | Expression and emotion | expressers, judges | form, recognition accuracy | judgment experiments |
| D | Social and moral judgment | individuals, societies | judgments, thresholds | games and surveys |
| E | Numeration | cultural groups | numerals, procedures | ethnographic number records |
| F | Comparative animal behaviour | species | sign stimuli, releasing mechanisms | ethological experiments |

Six again. The second seat admits a domain only where an anchor can be named. A seventh would need a seventh anchor and none appeared.

**Partition or union.** Union. A feature can be invariant in presence and variable in form. If this were forced into a partition, the color case would have to be assigned twice or discarded. The second seat independently reaches union.

**Dependency order.** Perception, vocabulary, objective, planning, learn and carry. The uninstrumented link is vocabulary/objective: comparability of terms and the threshold for "shared." This is where a verdict would be a reading of nothing if taken below the break.

## 2. Verbatim figure lines checked independently

The second seat grepped the figure text and selected these lines before seeing the primary selection:

- Fig 1 :19, *"The residual is indexed by object slot, not aggregated."*
- Fig 9 :54, *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- Fig 12 :123, *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- Fig 12 :117, *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 2 :29, *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
- Fig 11 :39, *"capability is a property of agent-and-habitat, never of the agent alone."*
- Fig 8 :39, *"So a search that finds nothing is never a proof of absence."*
- Fig 13 :134, *"Unreachable is a verdict here, not a silence"*

All eight were confirmed as exact strings in `FRAMEWORK/reference/03-FIGURES_TEXT.md`. No quote came from a summary.

**Independent strain test.** The second seat also tried Fig 13 :74, *"Everything else is a composition across the two kinds, never within one."*, on the universals question and rejected it: state/structure composition is not the universal/variation axis. It tried Fig 13 :20, *"ordering, so more and less can be said"*, for numeration and rejected it: a substrate primitive is not a claim about what every culture counts. Both independent rejections match the primary re-census.

## 3. Comparison with the primary census

| item | primary | second seat | match |
|---|---|---|---|
| arity | two-indexed | two-indexed | yes |
| symmetry | non-symmetric, ordered | non-symmetric, ordered | yes |
| scale | cross-societal | cross-societal | yes |
| domain count | six | six | yes |
| domain content | D1 categorisation, D2 language, D3 expression, D4 social, D5 numeration, D6 animal | A categorisation, B language, C expression, D social, E numeration, F animal | yes, labels differ only |
| union/partition | union | union | yes |
| dependency break | vocabulary/objective | vocabulary/objective | yes |
| governing shape | union plus functional group plus per-slot | union plus functional group plus per-slot | yes |
| strains re-censused | Fig 13 :74 and :20 | Fig 13 :74 and :20 | yes |
| feature list | gap | gap, since no figure line names a feature | yes |

**Disagreement found:** one of emphasis, not substance. The second seat would not mark D6 as triangulated on Fig 11 plus Fig 4, because Fig 4 :20, *"Only the actors, the currency and the anchor change."*, is a general kernel claim that could be read as the same evidence pool as Fig 11's capability claim. On re-check the two figures are at different scales (membrane between sizes versus habitat at one size), so the primary mark stands, but the second seat's caution is recorded: triangulation here is internal to one canonical figure set, not independent world corroboration.

## 4. Round trip gap `R_T`

Formula step 6: `R_T = gap(x, (T_E ∘ T_A)(x))`, where `T_A` abstracts the primary census to the residual line and `T_E` concretises that line back into a census.

- `T_A(primary)`: six domains become "six contact structures with nameable anchors"; union and per-slot survive; figure quotes are dropped.
- `T_E(residual)`: re-enumerates six domains, union, ordered bond, and the same dependency break.
- `R_T` measured: **small for structure, material for content.** The domain count, union, per-slot rule and break match exactly. What the round trip cannot recover from the residual line alone is the specific provenance marks (triangulated versus single-source) and the two rejected Fig 13 readings. Those had to be re-derived by reading figure lines, which is the correct procedure: a coarser description cannot hold them (Fig 4 :31, *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold"*).

No feature name appeared in either direction. That is the expected result and is recorded, not patched.

## 5. Strains

1. **Internal figure-set correlation.** All figure lines come from one self-consistent set. Fig 1 :19 and Fig 12 :123 count as low overlap *between figures*, but they are not two independent witnesses in the world sense. Every "triangulated" mark in `09` means two figure lines at low overlap, with world sources separately recorded. No mark should be read as two independent evidence pools.
2. **Second seat is simulated.** The same agent wrote both censuses. The audit tests internal consistency, not independence of persons. A real second seat could still disagree on D6, and that would be a legitimate correction.
3. **World conflict rule.** The Ekman/Russell and Chomsky/typology disputes conflict internally within their literatures. Under Fig 2 :31 these are one pool each. Neither conflict flipped a figure verdict, as required.
4. **No new atom.** No feature name was imported with a source gate and shadow test, so the `gap` verdict stands.

## 6. Pre-registered refuter check

The refuter in `01` section 4 was written before the conclusion. Checking it now:

- Partition result: not observed; union holds in all six domains.
- New kind result: not observed; all variation is member or binding of a shared group.
- Averaging result: not observed; no pooled verdict was computed.
- Anchor result: not observed; each domain has a nameable anchor.
- Independence result: the D6 caution is recorded; no world source was counted twice.
- Naming result: no figure line names a feature; `gap` stands.

No refuter fired.

## 7. Verdict on the solution

**Pass, with one recorded caution.** The primary census survives independent re-derivation from the residual line. The shape verdict is stable: union, functional group with variable member or binding, per slot, agent-and-habitat, ground over agreement, feature list `gap`. The D6 triangulation mark is sustained but flagged as internal to the figure set. The solution is internally consistent with the figures and honestly labelled as a simulated derivation. It does not settle the empirical question, and it says so.

**Mode of this verdict:** `specified`, not `grounded`. A ground reading would require the per-domain instruments in `07` section 4, none of which were run here.
