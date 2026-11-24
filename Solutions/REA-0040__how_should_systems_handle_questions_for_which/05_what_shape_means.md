# What "shape" means for this question

Sources read 2026-11-23. All four are by Isaiah N (framework author, so high overlap with the figures; their agreement with the figures is expected and carries little independent weight):

1. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
2. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap

Canonical framework sources also read: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns "what a missing thing would have to look like (a shape, not a name)". Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 13 :134-135: "It cannot say which primitive is missing, because naming it would mean already holding it."

From *The Library of Babel*: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."

So a **shape** is the narrowed form of an answer you can state before you can name it. It constrains; it does not fill. For this question the shape is not a proposed sentence to print to a user. It is a **protocol shape**: the set of properties any defensible no-answer output must have. Concretely, from §0 of `01_figure_grounded_audit.md`: keep the no-answer states distinct, run the cheapest discriminator first, name what would have to change, state a mode and a refuter. "Unknown" fills the slot; the four-part protocol constrains it.

## 2. How the shape is obtained

- *The Library of Babel* on steering: "The books that you are returning in your searches need to be tested or ranged against the problem you want answered in order to steer the direction of the next search." And the decisive two-outcome observation: "If the final book in your exhaustive search doesn't answer the question, then there are only two possibilities: the nature of your question was unanswerable, or malformed. Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way." This is the essay-level source for F2 (split the union) and F4 (unanswerable versus malformed).
- *The Library of Babel* on vocabulary: "Your search space will narrow with every vocabulary word that you believe is in the answer or associated with the answer. This brings your search of unlimited books to a finite sum." Bootstrapping by proximity, not by guessing the final term.
- Fig 6 :30: "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause."
- *Decoding Tacit Knowledge*: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." This is why `02_outreach_email.md` leads with a checkable claim and a refuter rather than with the framework.
- *The Library of Babel* on stopping: "you can ask: Are we getting warmer, or are we getting colder? Are these answers getting closer to solving the general answer or diverging?" The stop is a shape, not a proof: "You will know that you are done because the finish line will also be the starting place, as there is nowhere else to search and nothing else that can describe the answer better."

## 3. What licenses a name

Only two things, both outside the shape itself:

1. **The ground settles it.** Formula step 5 (attributed to `THE_FORMULA.md`, not the figure text): "the ground settles it. Verified only by what pays." The figures README: the framework "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :12-13), with a source gate and a shadow test.

*The Hard Problem is About Source* sharpens the first: "The answer is unreached until a better instrument exists." And: "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." It was the spectrometer, not an argument, that resolved the metamerism. For this question the corresponding point is F5: if nothing is returning something that fails to resolve, there is no edge to extend and no name to license.

For the second: *The Hard Problem* uses Gödel as a case where "the answer can't be settled from inside" and contact with a different frame supplies the extra rule. That is the shape of OUTWARD, not a licence to import whichever frame happens to answer.

## 4. The ground and the source problem

A system can return "the evidence does not settle this" in two very different senses. In one, the channel to the ground has decayed: Fig 10 :24, "the ground does not decay, the channel does"; Fig 10 :27-28, "the output is not a verdict, it is you have lost touch". In the other, there genuinely is no settling instrument at this resolution. From inside, these "look the same" (Formula "Closure"; Fig 6 :26-27). The shape therefore has to include channel maintenance, not just a verdict field.

*Decoding Tacit Knowledge* adds the social version: "two people who also meet the world apart keep enough difference to catch each other" and "A ground that both are corrected by, separately." A room that only checks against itself drifts together, which is F8.

## 5. Answer to the shape question

**What shape should a no-answer output have?** It should be a status plus a route plus a lineage:

- **Status:** which condition fired (unfound at this reach, unreachable from any existing instrument, or refused because the premise is false), stated with a mode. Not a single undifferentiated "unknown".
- **Route:** which operation is owed next (more independent search, an instrument sharpened from one already returning something, an import described in effect terms, or a refusal), and why the others are not owed.
- **Lineage:** what was tried, what was left unreached, what would settle it, and what would reverse the verdict. This is the `R_T` record.

Nothing in the framework names the answer to an evidence-free question. The framework returns a shape. Anything more specific is a binding from some frame, provenanced as such, and still ungrounded until a ground pays for it.

## 6. Consequences for contact

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: "Prestige must never be allowed to validate an action directly." And: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige." A campaign that gathers prestigious names to endorse a no-answer protocol is the named collapse. The legitimate ask is a ground-visible check.

**This derivation is a simulation, not a ground reading.** Same essay: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." So `01`, `07` and `09` are simulated derivations checked for internal consistency against the figures. They are **not** tests of the protocol and must be labelled as such. They cannot settle anything they report on.

**A correction I keep visible.** An earlier reading of mine treated "shape, not a name" as a blanket ban on naming anything the framework does not settle. That overstates it. The phrase governs a *missing primitive*, not the selection of atoms or operations already held. Here the shape is a protocol constraint on outputs, and the three no-answer states are already named in the figures (SEARCHED / INWARD / OUTWARD in Formula step 7; REFUTED in Fig 5 :53). The ban that survives is on inventing a *filler answer* and calling it settled. Both readings are recorded here so neither is quietly lost.
