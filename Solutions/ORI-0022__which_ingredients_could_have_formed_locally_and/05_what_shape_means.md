# What "shape" means for ORI-0022

## Sources and reading status

Opened and read verbatim on 2026-11-23:

1. Isaiah N, *The Library of Babel: Locating The Book of Books*, Adventures in Machine Learning (Substack), 2026-10-02. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
2. Isaiah N, *The Hard Problem is About Source*, Adventures in Machine Learning (Substack), 2026-08-28. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
3. Isaiah N, *The Recursive Self-Improvement Trap & Why LLMs Won't Get Us There*, Adventures in Machine Learning (Substack), 2026-11-19. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap

The five remaining essays in the standing eight-essay set are listed in the exemplar's `05_what_shape_means.md`: *How Intelligence Actually Works*, *Decoding Tacit Knowledge*, *How a Society of Agents Would Work*, *They're Scanning Books When They Should*, and *Arrival of the Fittest: The Tether*. They were not re-opened for this question, so no quote is taken from them here. The local canonical documents were read in full: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/03-FIGURES_TEXT.md`, and `FRAMEWORK/figures/THE_FORMULA.md`.

## 1. A shape is a constraint you can state before you can name

The canonical usage rule says the framework reports *"what a missing thing would have to look like (a shape, not a name)"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* Fig 9 :32 puts it in the figures' own words: *"you get a kind of thing, never the answer itself."*

From *The Library of Babel*: *"You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

For ORI-0022, the shape is not the list of ingredients. It is the structure that any defensible list must have:

```
BUCKET(s) = local-reachable | import-available | compound | undetermined
DISCRIMINATOR(s) = the observation that would move s between buckets
```

That is a form we can state before we know which molecule goes where. It constrains: any answer that gives one bucket per ingredient without a discriminator is malformed, because the buckets are a union (Fig 9 :54-56), not a partition.

## 2. How the shape is obtained: proximity and bootstrapping

*The Library of Babel*: *"If you don't know the right terms to search for, you will have to use the existing vocabulary you do know that is closest to the words that you wish to describe and grasp the shape of."* And: *"With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."*

Here the starting vocabulary is reachability, closure, import, atom and bond. The nearest domain vocabulary is "local synthesis", "exogenous delivery", "isotopic signature", "enantiomeric excess", "parent body". Recursive proximity narrows the question from "which ingredients?" to "which slots are reachable in which closure, and what would discriminate the two?" That is the bootstrapping convergence the essay describes.

The stopping rule is also from that essay: you are done when *"the finish line will also be the starting place."* For this question, that means the list you end with must be expressible in the same slot vocabulary you started with. If you end with "meteorites delivered the building blocks" and started with per-slot reachability, you have not closed the loop; you have changed the question.

## 3. What licenses a name: the source instrument

*The Hard Problem is About Source* is the essay that governs this question most directly. It poses metamerism: an instrument reads green and *"it cannot comment on the source."* The same reading can come from one green light, yellow plus blue, RGB, CMYK, or a scheme not yet discovered. The essay's conclusion: *"If several paths create the same behavior, then behavior is a projection with lossy information."* And the resolution is not an argument but *"the arrival of a better instrument."*

Applied here: an alanine molecule is a reading. It can come from a local Strecker route or from a parent body. The molecule cannot comment on its source. The spectrometer analogue is compound-specific isotope-ratio mass spectrometry plus chiral chromatography, which is exactly what Burton and Berger 2018 and Glavin et al. 2021 use. The framework's Fig 8 :50 says the same thing in its own vocabulary: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*

So a name (a bucket assignment for a slot) is licensed by:

1. a source-discriminating measurement (the ground settles it), or
2. a provenanced record showing which frame produced the molecule (the lineage settles it).

Not by abundance, not by the molecule's presence, and not by agreement among reviews.

## 4. Why the local-versus-delivered question is the forbidden error when asked as a partition

The naive reading of the question is a two-column sort. The shape reading refuses that. Fig 6 :22: *"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."* A molecule made locally and a molecule delivered can be the same molecule; novelty is relative to a frame. Fig 6 :25: *"An import adds no atom to the world."* Delivery moved access, not elements.

The adjacent questions in the source section make the union visible: question 23 asks whether the molecules were present in the same place at the same time; question 24 asks about concentration; question 27 asks whether delivered compounds supplied a *meaningful share*. Those are flux and coincidence questions, not origin questions. A single origin column would collapse them.

## 5. Q: does "shape, not a name" forbid naming the delivered ingredients?

**Answer: no, but it forbids calling the names figure-derived.** The canonical limit governs a primitive not held in the library. Here the atoms (C, H, N, O, P, S, Fe, Ni) are held in both frames. What differs is the closure over them and the provenance record. Naming alanine, ribose or guanine is a binding from the world literature onto slots, which is permitted if recorded as a binding. What is forbidden is presenting the list as something the figures produced. Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

**Correction to my own §1 wording.** I first wrote that "the shape is not the list of ingredients" in a way that could be read as forbidding ingredient names altogether. Narrowed: the shape is not the list; the list is a world-sourced binding and is legitimate when its provenance is stated. The original sentence is preserved above so the correction is visible.

## 6. Prestige is not action, and my own audit is a simulation

From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* A campaign that gathers famous origin-of-life names to agree with the shape is the named collapse, not corroboration. The legitimate ask is that people with isotope and synthesis instruments try the refuters.

Same essay: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And: *"LLMs can quickly simulate an approximate answer/output with the formula... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."*

Therefore `01_figure_grounded_audit.md` is a simulated derivation checked for internal consistency against the figures. It is **not** a test of the question and must be labelled as such. It cannot settle which ingredient formed where. Only a source-discriminating measurement can.
