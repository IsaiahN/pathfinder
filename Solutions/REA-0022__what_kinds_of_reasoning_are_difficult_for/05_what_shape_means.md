# What "shape" means for REA-0022 — canonical reading from the essays

Sources read 2026-11-23, all by Isaiah N (fetched this session unless marked):

1. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the (fetched)
2. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source (fetched)
3. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap (fetched)
4. https://adventuresinml.substack.com/p/how-intelligence-actually-works (read via the exemplar's curated reading, not re-fetched this run)
5. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context (same)
6. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work (same)
7. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should (same)
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether (same)

Only the first three are quoted directly below from a fetch in this run. The others are used only where the exemplar's `05` already records them, and are marked accordingly. High overlap: all eight are by the framework's author, so their agreement with the figures is expected and carries little independent weight (Fig 2 :40).

## 1. A shape is a constraint you can state before you can name the thing

The figures README states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 says it *"cannot say which primitive is missing, because naming it would mean already holding it."*

From *The Library of Babel*: *"This means that you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."*

For this question the shape is: **five kinds of reasoning whose failure is caused by the frame's structure, and a three-way test that separates that cause from budget and data causes.** That is a description of a class of failures, not a leaderboard of tasks and not a diagnosis of a named system. `SPACE(???)TIME`-style placeholders are the right form: *"algorithmic limit (???)"* until a ground reading of a system fills the slot.

## 2. How the shape is obtained here

- *Library of Babel*: *"If you don't know the right terms to search for, you will have to use the existing vocabulary you do know that is closest to the words that you wish to describe and grasp the shape of."* The residual is described in effect terms first (three causes: not reachable, not found, never registered), then figure lines are selected.
- Fig 6 :30: *"The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."* Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."*
- *Decoding Tacit Knowledge* (via the exemplar): *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* This is why the outreach email asks what the recipient would count as a closure failure before showing them the framework.
- *Library of Babel* on stopping: *"You will know that you are done because the finish line will also be the starting place, as there is nowhere else to search and nothing else that can describe the answer better."*

## 3. A crucial distinction the essays make for this question

*The Hard Problem is About Source* opens with a contrast that matters here:

> **"Gödel's impossibility theorem demonstrates a true limit, while Chalmers defines one and asks us to accept it as truth."**

An algorithmic limit, in this reading, is of the first kind: proved from the structure of the system (Fig 8 :56: *"Rules 1 to 3 are proved theorems."*). A limit that is merely stipulated by how you set up a benchmark is not. This is why F1 in `01_figure_grounded_audit.md` is labelled proof-grounded rather than prediction-grounded, and why the taxonomy does not claim to have empirically discovered a new limit in today's models.

The same essay supplies the instrument/data side:

> **"If several paths create the same behavior, then behavior is a projection with lossy information"**

and

> **"An instrument that can't distinguish these cases demonstrates its own inadequacy"**

and *"The answer is unreached until a better instrument exists."* This is exactly cause C: a missing discriminator, not a missing compute budget and not a closure barrier. It was resolved by a spectrometer, not an argument. So the essay forbids collapsing "we cannot tell the source from the reading" into "the answer is unreachable in principle."

*Library of Babel* makes the same point in its own vocabulary: *"If you don't have the answer to a question, it's because you are lacking certain things in the library (instruments, information) that would help, or perhaps you are asking the wrong question altogether."* Instruments and information are named as distinct from a wrongly formed question. That is the three-way split in essay form.

## 4. What licenses a name here

Only two things, both outside the shape itself:

1. **The ground settles it.** `THE_FORMULA.md` step 5: *"the ground settles it. Verified only by what pays."* For this question that means running a real system, with a controlled change of frame, operator or instrument, and seeing which cause its failure tracks.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source gate and a shadow test. The world sources in `10_source_ledger.csv` are such imports: Gödel, Chaitin, chemistry's isomerism, no-free-lunch and abstract interpretation each bring a result from a different field. Their overlap is declared, so the pool is not mistaken for two witnesses.

Until one of those fires, a name for a specific cause in a specific system is the searcher's own contribution and must be recorded as such.

## 5. Why the answer is a shape, not a list of hard benchmarks

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* A benchmark score aggregates across slots and throws away the only signal that says where to look. Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* So the answer cannot be "reasoning X is hard." It must be "this failure is of cause A, B or C, and here is what would change it."

Fig 9 :32 again: *"you get a kind of thing, never the answer itself."* The taxonomy returns kinds; the ground decides instances.

## 6. Prestige is not action, and this audit is a simulation

Both consequences are stated in the exemplar and confirmed by the fetched essay.

*The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A person's fame, or a venue's prestige, can get this taxonomy a hearing. It cannot make the taxonomy true. Fig 7 :35: *"A room's agreement is variation, not a verdict."*

And: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* The essay is explicit that *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"* but that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* So `01_figure_grounded_audit.md`, `07_the_tether_answer.md` and `09_watson_answer.md` are simulated derivations checked for internal consistency against the figures. They are **not** tests of the claim and must be labelled as such. They cannot settle anything they report on.
