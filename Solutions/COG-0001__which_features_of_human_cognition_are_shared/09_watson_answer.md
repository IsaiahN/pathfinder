# WATSON answer: universals and cultural variation in cognition

**Mode: `general` for the shape, `specified` per domain, `gap` for the feature list. Not `grounded`.** Simulated derivation checked for internal consistency against the figures, not a ground reading. Figures are primary and decide; world sources are secondary corroboration only.

## QUESTION

Which features of human cognition are shared across all known societies, and which vary substantially across cultures? Restated in effect terms: given a feature and a society, predict whether the feature's presence and form change when the society changes. Source: `cognitive science.txt` line 4, section 1.

## DOMAIN CENSUS

Residual R is two-indexed `(feature, society)`, non-symmetric, cross-societal scale. Six domains, each with actors, currency and a nameable anchor:

| id | domain | actors | currency | anchor |
|---|---|---|---|---|
| D1 | Categorical perception (color, number, face) | observers, language communities | category boundaries, discriminability | psychophysical and naming measurements |
| D2 | Language and grammar | speakers, languages | constraints, parameter settings | typological corpora |
| D3 | Emotion expression and recognition | expressers, judges | expression form, recognition accuracy | cross-cultural judgment experiments |
| D4 | Social, moral and self cognition | individuals, societies | judgments, preferences, self-construal | experimental games, cross-national surveys |
| D5 | Ethnomathematics and numeration | cultural groups | numerals, counting procedures | ethnographic number-system records |
| D6 | Animal behaviour and evolutionary continuity | species, populations | sign stimuli, releasing mechanisms | ethological experiments |

**Union, not a partition.** Presence and form are separate axes, so a feature can be in both classes. Dependency order (Fig 3 :20): perception, vocabulary, objective, planning, learn and carry. The break is at vocabulary/objective, where comparability and the threshold for "shared" lack an instrument. No seventh domain was admitted; no domain without a nameable anchor was counted.

## TETHER (primary, verbatim, per domain)

All lines quoted from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Each domain verdict is kept separate and never averaged.

**Governing lines, whole question:**

- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
- Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 13 :134: *"Unreachable is a verdict here, not a silence"*
- Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

**Per-domain verdicts:**

| domain | figure line(s) | mark | verdict |
|---|---|---|---|
| D1 | Fig 1 :19; Fig 12 :123; Fig 12 :117; Fig 9 :54 | **triangulated** (Fig 12 composition, Fig 9 split, Fig 1 slot: low overlap) | `specified` shape: categorising group invariant, members and boundaries variable. Feature names: `gap`. |
| D2 | Fig 12 :123; Fig 6 :23, *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*; Fig 8 :50 | **triangulated** (Fig 12 functional group, Fig 6 closure, low overlap) | `specified` shape: constraint kind invariant, feature specification variable. Named universals: `gap`. |
| D3 | Fig 1 :19; Fig 2 :31, *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."*; Fig 12 :117 | **triangulated** (Fig 1 slot, Fig 2 independence, low overlap) | `specified` shape: expression machinery invariant, form and judgment rule variable. Feature list: `gap`. |
| D4 | Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average."*; Fig 2 :29, *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*; Fig 11 :39 | **triangulated** (Fig 2 anchor, Fig 11 capability, low overlap) | `specified` shape: evaluative machinery invariant, thresholds and objects variable. Feature list: `gap`. |
| D5 | Fig 12 :123; Fig 13 :115, *"The set is closed. The arrangements are not. That gap is why import exists."* | **single-source** for the functional-group claim (Fig 12 only; the Fig 13 spectrum reading was re-censused out) | `specified` shape: counting and ordering invariant, bases and morphologies variable. Feature list: `gap`. |
| D6 | Fig 11 :39, *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*; Fig 11 :40; Fig 4 :20 | **triangulated** (Fig 11 habitat, Fig 4 membrane across scale, low overlap) | `specified` shape: capability agent-and-habitat, species-typical features habitat-relative. Named features: `gap`. |

**Strains sent to re-census, not kept as witnesses:** Fig 13 :74 (state/structure cross-kind composition) does not sort universals from variation; Fig 13 :20 (spectrum as ordering) does not license a claim about cultural numeration. Both govern other quantities.

## WORLD (secondary; each source read)

The essays in the last four rows are the framework's own provenance, that is high overlap with the figures. They are recorded but are not independent witnesses. World sources from low-overlap fields are the corroboration that counts.

| field | author / venue / year | quote | prediction here | mark |
|---|---|---|---|---|
| anthropology, cross-cultural | Wikipedia contributors / Wikipedia / accessed 2026-11-22 | *"The observation of the same or similar behavior in different cultures does not prove that they are the results of a common underlying psychological mechanism."* | Similarity alone cannot name a universal source | corroborates Fig 8 :51 provenance rule |
| cross-cultural psychology | Wikipedia contributors / Wikipedia / accessed 2026-11-22 | *"the scientific study of human behavior and mental processes, including both their variability and invariance, under diverse cultural conditions"* | variance and invariance studied together, consistent with union | corroborates |
| psychology, behavioural science | Henrich, Heine and Norenzayan / Behavioral and Brain Sciences / 2010 | *"there is substantial variability in experimental results across populations and that WEIRD subjects are particularly unusual compared with the rest of the species - frequent outliers."* | per-slot caution; no pooled shortcut | corroborates Fig 1 :19 and Fig 9 :60 |
| language, cognitive science | Wikipedia contributors / Wikipedia / accessed 2026-11-22 | *"the differences in number of basic color terms in languages follow a repeatable pattern"* | invariant group with variable member and boundary | corroborates Fig 12 :123 and :117 |
| emotion, psychology | Wikipedia contributors / Wikipedia / accessed 2026-11-22 | *"Facial expressions of emotion are not culturally universal."* (title of Jack et al. 2012 as cited) | disputes strong universality; supports union reading | conflicts with strong universality, corroborates the union shape |
| linguistics | Wikipedia contributors / Wikipedia / accessed 2026-11-22 | *"Other linguists have opposed that notion, arguing that languages are so diverse that the postulated universality is rare."* | constraint kind versus feature specification | conflicts with strong UG, corroborates group/member shape |
| ethology, animal behaviour | Wikipedia contributors / Wikipedia / accessed 2026-11-22 | *"an instinctive behavioral sequence that is highly stereotyped and species-characteristic"* | species-typical features are habitat-relative | corroborates Fig 11 :39 |
| mathematics, culture | Wikipedia contributors / Wikipedia / accessed 2026-11-22 | *"all cultures have basic counting, sorting and deciphering methods, and that these have arisen independently in different places around the world"* | invariant group, variable bases and morphologies | corroborates Fig 12 :123 |
| numerical cognition, animal behaviour | Wikipedia contributors / Wikipedia / accessed 2026-11-22 | *"All mammals, and most birds, will notice if there is a change in the number of their young nearby."* | continuity of capability across species | corroborates Fig 11 :39 |
| metatheory, provenance | Isaiah N / Adventures in Machine Learning / 2026-10-02 | *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* | shape before name | corroborates, high overlap |
| measurement, source | Isaiah N / Adventures in Machine Learning / 2026-08-28 | *"the instrument is speaking only about what it measured, it cannot comment on the source."* | a reading cannot identify the mechanism | corroborates, high overlap |
| method, simulation limit | Isaiah N / Adventures in Machine Learning / 2026-11-19 | *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* | no agreement-based verdict | corroborates, high overlap |
| provenance, identity | Isaiah N / Adventures in Machine Learning / 2026-09-16 | *"the recursion converges toward indiscernibility, and indiscernibility is not identity."* | fit is not completeness | corroborates, high overlap |

Agreement between the Ekman and Russell literatures, or between two pages quoting the same review, is one witness, not two. Overlap is recorded per row in `10_source_ledger.csv`.

## VERDICT (from the figures)

**The figures decide that the answer has this shape:** the two classes overlap as a union; the invariant item is a functional group of cognitive machinery; variation is a change of member or binding; verdicts are per feature and society, never pooled; a shared feature is agent-and-habitat; and the feature names are unreachable from the figures. They do not decide which features are universal. That is `gap`, stated plainly, not silence. Per-domain verdicts are in the table above and are never averaged.

- **Cost if wrong.** If a variable feature is mislabelled universal, instruments and interventions built on one population are exported to others and misdiagnose cases. Henrich et al. rate this cost high. If a universal is mislabelled variable, effort is spent hunting variation that is not there and the shared substrate is missed. The shape claim itself costs little to be wrong because it withdraws cleanly.
- **Undoable.** Yes. The shape claim is a generator plus a refuter, not a settled list. Withdrawing it removes standing to compose over it, not a term from the record (Fig 6 amendment on reach). Each domain verdict can be rewritten independently.
- **Reversed by.** (1) A clean partition with no overlapping feature defeats the union. (2) A variation requiring a new cognitive primitive defeats the functional-group claim. (3) Pooled verdicts reproducing every per-slot verdict defeat the slot rule. (4) An alleged anchor that moves when frames push on it removes that domain's ground. (5) Two frames marked independent and found to share one evidence pool lose the triangulation mark. (6) A ground measurement that names a feature and pays for it promotes that slot from `gap`.

## Sources

- [Canonical figures, branch general-agent](https://github.com/IsaiahN/tether/tree/general-agent/figures)
- [Canonical usage rule, figures README](https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md)
- [Cultural universal](https://en.wikipedia.org/wiki/Cultural_universal)
- [Cross-cultural psychology](https://en.wikipedia.org/wiki/Cross-cultural_psychology)
- [The weirdest people in the world?, Henrich, Heine and Norenzayan 2010](https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/abs/weirdest-people-in-the-world/BF84F7517D56AFF7B7EB58411A554C17)
- [Color term](https://en.wikipedia.org/wiki/Color_term)
- [Facial expression](https://en.wikipedia.org/wiki/Facial_expression)
- [Universal grammar](https://en.wikipedia.org/wiki/Universal_grammar)
- [Fixed action pattern](https://en.wikipedia.org/wiki/Fixed_action_pattern)
- [Ethnomathematics](https://en.wikipedia.org/wiki/Ethnomathematics)
- [Number sense](https://en.wikipedia.org/wiki/Number_sense)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [International Association for Cross-Cultural Psychology](https://www.iaccp.org/)
- [Nature Human Behaviour](https://www.nature.com/nathumbehav/)

Failed fetches are recorded in `04_links_and_distribution.md`. Nothing cited there was used as a read source.
