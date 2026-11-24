# What "shape" means for this question

**Mode: `general` on the definition, `specified` on its application to channel capacity.** This is a simulated reading checked for internal consistency against the figures, not a ground reading (see §6).

## Sources actually opened for this file (2026-11-23)

1. The Library of Babel: Locating The Book of Books - Isaiah N, adventuresinml (Substack), 2026-10-02. Opened and quoted below.
2. The Hard Problem is About Source - Isaiah N, adventuresinml (Substack), 2026-08-28. Opened and quoted below.
3. The Recursive Self-Improvement Trap - Isaiah N, adventuresinml (Substack), 2026-11-19. Opened and quoted below.
4. Figures README (canonical local copy) - `FRAMEWORK/reference/FIGURES_README_canonical.md`. Opened.
5. Figure text extract - `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Opened.

The exemplar package `QMGR-0037` lists eight essays and maps them. I did **not** open the other five this session (How Intelligence Actually Works, Decoding Tacit Knowledge, How a Society of Agents Would Work, They're Scanning Books When They Should, Arrival of the Fittest). I do not quote them here and do not claim to have read them. Their mapping is available in the exemplar; this file stands on the three I opened plus the canonical figure sources. This is the honest scope of the evidence pool.

---

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: **"you get a kind of thing, never the answer itself"** Fig 13 :134: **"Unreachable is a verdict here, not a silence,"** and :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

From *The Library of Babel* (opened 2026-11-23), on steering search by proximity rather than by a known answer: *"use the existing vocabulary you do know that is closest to the words that you wish to describe and grasp the shape of."* And on stopping: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

So a **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For this question:

- A **name** would be: "the limit is `C = B log2(1+S/N)`" or "the system reaches 90% of capacity."
- A **shape** is: "the limit is a family indexed by CSI, latency, blocklength and threat model; the gap to it is measured per slot and includes a round-trip term; some gaps close by search and some only by import."

The name is not returned by the framework. The shape is.

## 2. How the shape is obtained here

- Library of Babel: *"With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."* Here the vocabulary was bootstrapped from the question's own terms: limit, channel, change, close, real, system. The nearest literature terms (capacity, outage, ergodic, finite blocklength, AVC, CSI) narrowed it.
- Fig 6 :30: **"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."** Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."* So "capacity" as a borrowed word is not enough; the effect is "whatever settles measured reliability under a stated state process".
- Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit."** The residual was described in effect terms before choosing the fading-capacity and adversarial-capacity frames (§0 of `01_figure_grounded_audit.md`).
- Library of Babel on the stop condition: *"the finish line will also be the starting place"* and the paradox that by then you have *"composed the answer through the process of locating it."* In this package the stop is the shape plus its refuters, recorded so the route is visible.

## 3. What licenses a name, when one is wanted

Two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* Here: a measured rate and error pair under a stated state process decides whether a system is close to a limit.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. Here: channel state information imported from the channel-tracking frame into the coding frame, recorded as such.

The Hard Problem is About Source (opened 2026-11-23) gives the instrument warning that matters most for "how close". A colour instrument that reads green *"cannot comment on the source"*: a single green light, or yellow plus blue, or RGB, or CMYK can produce the same reading. *"If several paths create the same behavior, then behavior is a projection with lossy information."* And: *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* The example was resolved *"not by argument, but by the arrival of a better instrument."*

Applied here: a measured throughput number is a reading, not the source. Several underlying states (fixed channel, slow fade, adversarial jammer) can produce the same "90% of nominal capacity" reading. Naming the limit from the throughput alone is the metamerism error. What is owed is an instrument that discriminates among state models, not a more confident percentage.

## 4. Why the question's own framing is the specific forbidden error

The question asks *"how close can real communication systems come to theoretical limits when channels change unpredictably?"* The definite article in "the theoretical limits" is the strain. It presupposes one settled target. Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** For a fixed known channel the capacity passes this test. For a moving channel the target moves with the frame's knowledge, so the definite article is the thing to refuse, not a thing to assume.

The Recursive Self-Improvement Trap (opened 2026-11-23) names the mechanism by which such an assumption survives: *"You may all agree and be wrong. You may set your clock to someone else's, who was setting your clock to yours, and be off by many deviations over time. You need ground truth to define where you stand."* A field can agree on a benchmark convention and drift, coherently, from what the ground would say. Fig 2 :34: *"the anchor becomes another frame, everything drifts together, and the drift is coherent"* - *"which is why nobody notices"*.

So the answer's first move is a re-census of the limit (F1 in `01_figure_grounded_audit.md`), not a calculation of closeness.

## 5. Consequence for this question's outreach

**Prestige is not action.** From *The Recursive Self-Improvement Trap* (opened 2026-11-23): *"Prestige must never be allowed to validate an action directly."* And: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A list of famous information theorists who agree that "we are near capacity" is the named collapse, not corroboration (Fig 7 :13: *"agreement compounds, evidence does not"*). The legitimate ask is the opposite: give the claim a budget to be tried, ask what would refute it, and let measurement decide.

## 6. My own audit is a simulation, not a ground reading

Same essay, opened 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula"* while *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* And: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

So `01_figure_grounded_audit.md` and this file are simulated derivations checked for internal consistency against the figures. They are **not** tests of the claim and must be labelled as such. They cannot settle the question they report on. No measurement was taken in producing them.

## 7. Correction log for this file

- **Initial reading (retracted):** "the framework returns a shape, not a name, so it cannot name any capacity concept." **Corrected:** the figures README's phrase governs a *missing* primitive. Capacity, spectrum, energy, time and the communication network are compositions or held terms, not missing primitives. The framework can describe the shape of the limit; it cannot, from itself, name which benchmark is right for a given moving channel. That requires a provenanced import and a ground settlement. Both readings are recorded so the correction is visible.
- **Scope correction:** five of the eight essays were not opened this session. They are not quoted here. Earlier folder material in the exemplar lists them; this file does not inherit that reading as if it were a fresh source.
