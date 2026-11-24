# What "shape" means for CMP-0087  -  canonical reading from the essays

**Sources read 2026-11-22** (all by Isaiah N, all at adventuresinml.substack.com unless noted):

1. [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
2. [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
3. [The Library of Babel: Locating the Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
4. [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)

The other four essays in the set (How Intelligence Actually Works, How a Society of Agents Would Work, They're Scanning Books When They Should, Arrival of the Fittest: The Tether) were **not** fetched this session and are therefore not cited here. The local canonical figures README was read and is cited below. All four essays above share an author and an evidence pool with the figures, so their agreement with the figures is expected and carries little independent witness weight. They establish meaning, not corroboration.

## 1. A shape is a constraint, not a technique

The figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* `Fig 9 :32`: *"you get a kind of thing, never the answer itself."* `Fig 13`: *"It can say the answer is out of reach with the library as it stands... It cannot say which primitive is missing, because naming it would mean already holding it."*

From *The Library of Babel*: *"You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

So for CMP-0087 a **shape** is the narrowed form of a validation answer you can state before you can name a universal validation technique. It constrains; it does not fill. "Find an anchor that does not move when the model pushes on it, and keep independent witnesses separate" is a shape. "Always use synthetic controls" is a name. The shape survives across ecology, econometrics, simulation engineering and clinical prediction; the name does not.

## 2. How the shape is obtained

- *Library of Babel*: use the vocabulary already held that is closest to the thing, look for recurring new terms that overlap with it, recurse. *"With each new term gained, you are able to narrow the space by definition and deepen your vocabulary."*
- `Fig 6 :30`: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* `Fig 9 :30-31`: *"your words are borrowed too, so describe the effect rather than the cause"*
- *Decoding Tacit Knowledge*: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* This is the exact situation of CMP-0087: the researcher cannot have contact with the target through an intervention, so what travels is a description of effects anyone can check.
- *Library of Babel* on stopping: *"the finish line will also be the starting place"*, because by then you have *"composed the answer through the process of locating it."*

## 3. What licenses a name (a particular validation method)

Only two things, both outside the shape itself:

1. **The ground settles it.** `THE_FORMULA.md` step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* The README: the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
2. **A provenanced import from a frame whose closure differs** (`Fig 6 :23`, `Fig 8 :50-52`), with a source gate and a shadow test. Natural experiments, synthetic controls and pattern-oriented modeling are imports from other closures. They carry provenance or they carry nothing.

So no particular technique is licensed by the shape alone. Its license is a ground reading in the target domain plus a record of where it came from.

## 4. The specific forbidden error: naming the source from the reading

*The Hard Problem is About Source* gives the mechanism. An instrument reads green and *"cannot comment on the source"*: one green light, or yellow plus blue, or RGB, or CMYK, or a scheme not yet discovered. *"If several paths create the same behavior, then behavior is a projection with lossy information."* And: *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* It was the **spectrometer**, not an argument, that resolved it.

The analogue here: a model's excellent in-sample fit or its success in a synthetic harness is a reading. Naming the source of that reading as "the model is valid" is the metamerism error. Several mechanisms can produce the same fit. What is owed is a discriminating instrument, not a name. This is corroborated from outside the framework by Gutenkunst et al. (2007), who show that collective fits can yield tight predictions with wildly undetermined parameters, and by Collins et al. (2024), who warn against calling a model validated merely because a study was labelled validation.

*The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

## 5. Q: does "shape, not a name" forbid naming natural experiments or synthetic controls? ANSWERED, no further question needed

**No, with a condition.** The README's phrase governs a *missing* thing, a primitive not held in Γ. Natural experiments, synthetic controls and external validation are not missing primitives; they are imports from frames whose closures differ. Naming them is a binding from another field, not the invention of a seventh term. What is forbidden is claiming that the framework derived them, or that using one settles the target without a ground reading. The binding must be provenanced (`Fig 8 :50-52`: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*).

### Correction to my own §3 and §4

I initially wrote that "the framework returns a shape, not a name" forbids naming any validation technique at all. **Retracted in that broad form.** The rule governs missing primitives. It does not govern imports already held in another frame. The real error in the naive reading is the metamerism error (naming the source of a fit without a discriminating instrument), not the mere act of naming a method. Both statements are now recorded so neither is quietly lost.

## 6. Two consequences for this question

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly... Someone let prestige stand in for proof... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A campaign that gathers respected names to agree that a model is sound is the named collapse, not corroboration. The legitimate ask gives the claim a budget to be tried and lets the ground settle it.

**My own audit is a simulation, not a ground reading.** Same essay: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* So `01_figure_grounded_audit.md` is a simulated derivation, checked for internal consistency against the figures. It is **not** a test of any complex-system model and must be labelled as such. It cannot settle anything it reports on.
