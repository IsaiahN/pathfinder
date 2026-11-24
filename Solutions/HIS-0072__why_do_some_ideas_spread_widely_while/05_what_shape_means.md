# What "shape" means for a question about diffusion

Sources read 2026-11-23, all by Isaiah N, all fetched in full:

1. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work
5. https://adventuresinml.substack.com/p/how-intelligence-actually-works
6. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should
7. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether

Plus the canonical figures README, read locally.

---

## 1. A shape is a constraint, not a filler

The figures README states the limit: the framework returns *"what a missing thing would have to look like
(a shape, not a name)"*. Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 says the
system "can say the answer is out of reach with the library as it stands", but "It cannot say which
primitive is missing, because naming it would mean already holding it."

From *The Library of Babel*: "you can cut your search short if the set of books returned is small and
descriptive enough that it provides a general shape of the answer that satisfies your question."

For HIS-0072 a **shape** is therefore the set of conditions any adequate answer must satisfy before we can
name which condition dominates in a given case. It is not "the simple ideas win" or "the loudest ideas
win". Those are names for a mechanism. The shape here is four conditions (reach, method form,
independence, habitat) with an explicit rule that they are a union and are never averaged. A shape
constrains; it does not fill.

## 2. How the shape is obtained

- *Library of Babel*: start with the vocabulary you already have that is closest to the thing, look for new
  terms that overlap or correlate with it, recurse. "With each new term gained, you narrow the space and
  deepen your vocabulary." The stopping rule is that "the finish line will also be the starting place".
- Fig 6 :30: "The description travels. Fails by being sharpened into terms only we can read. Cast it in
  effect terms." Fig 9 :30: "your words are borrowed too, so describe the effect rather than the cause."
- *Decoding Tacit Knowledge*: "When contact isn't possible, the best you can send is a plain description of
  what you'd expect to see, because anyone can check that against the world." This is why the outreach
  in `02` sends a failure criterion rather than a theory.
- *The Library of Babel* paradox: "by the time you learn the EXACT search terms to find the CORRECT book,
  you won't need to read it anymore, because you have already composed the answer through the process of
  locating it."

For this question the effect terms were forced by the residual line itself: count adopters versus count
receivers who can reapply. That choice of unit is the narrow vocabulary from which the four-condition
shape grew.

## 3. What licenses a name

Only two things, both outside the shape:

1. **The ground settles it.** `THE_FORMULA.md` step 5: "the ground settles it. Verified only by what pays.
   A gate is not the ground." For diffusion the ground is a measurement of reapplication by independent
   receivers, not an adoption curve.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a source
   gate and a shadow test. Rogers' five characteristics, Granovetter's weak ties and Centola's complex
   contagion are imports with clear provenance, and they are recorded as such in `10_source_ledger.csv`.

*They're Scanning Books* sharpens the limit: "A minimum viable set of six terms is a human's careful guess
at reality's compression axes; another sensorium's minimum set need not be those six." And: "Declaring the
primitives does not make them neutral. It makes the choice visible." So the four conditions are a visible
guess about the axes of diffusion, not a discovery of nature's own list.

## 4. The specific error this question invites

The diffusion literature is unusually prone to three named framework errors.

### 4.1 Metamerism: a reading mistaken for a source

*The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source." Several
sources can produce the same reading, and "If several paths create the same behavior, then behavior is a
projection with lossy information." The spectrometer, not an argument, resolved it.

Here the reading is "wide adoption". Its sources include a re-applicable method, a high-overlap
convention, a prestige cascade and a reproduced habitat. Naming one of them from the adoption curve alone
is exactly the metamerism error. What is owed is a discriminator (an independence axis and a reapplication
test), not a name.

### 4.2 Outputs are not generators

*They're Scanning Books*: "A corpus is the compressed output of human minds; the capacity that produced it
is a generator, and outputs do not contain their generator." And: "You cannot accumulate your way from the
category of outputs to the category of generators; they are different kinds of thing, and no quantity of
the first sums to the second."

This is Fig 4 :22 in the vocabulary of the essays. A widely cited slogan is an output. A method a receiver
can reapply is a generator. Counting outputs and calling the count "spread" is counting the denominator.

### 4.3 Aggregation to the mean

*How Intelligence Actually Works*: after overuse of a shared frame, "the tendency is for the group to
degrade its thinking or its initial gradient to the average mean." Fig 1 :22: "Aggregating across slots is
how a live signal disappears into an average." *How a Society of Agents Would Work* adds that "if every
agent's w drifts to the average, the spread is gone and the gradients are spent", which is the coherent
drift of Fig 2. A specialist community that agrees too well has lost the variance that would let it track
a changing ground. This is why the shape keeps independence as a separate condition and never averages it
into "reach".

## 5. Two questions answered from the essays

**What licenses saying an idea spread *because* of a given property?** Nothing in the shape alone. A property
is licensed only by a ground reading that discriminates among sources (reapplication by independent
receivers) or by a provenanced import with a shadow test. Until then the property is the searcher's own
contribution and must be recorded as such.

**Does the diffusion field commit the error the README forbids?** Often, yes. Rogers' five characteristics
are a good empirical list, but a claim such as "simplicity causes spread" names a slot from a reading that
several sources produce. The essays do not forbid naming a held atom: *Decoding Tacit Knowledge* notes that
"Libraries versus composers" makes "Invention gets cheap, not recall". The prohibition is on treating a
name as settled without provenance and a discriminator.

## 6. Two consequences for outreach

**Prestige is not action.** From *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can
give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The
Ground Maintainer must be blind to prestige." And: "The prestige loop confirms itself. The high-prestige
person is believed because they are high-prestige. The action is assumed to work because the person is
believed. The ground is never consulted. The error compounds. The lineage is corrupted. Nobody notices
because the prestige loop looks like agreement, and agreement feels like truth." That last sentence is a
description of the very phenomenon the question asks about, and it is why `03` contains no ranking by
likely agreement.

**This audit is a simulation, not a ground reading.** Same essay: "LLMs can quickly simulate an approximate
answer/output with the formula found in the architecture post." But "the truly testable output would need
to be derived from the real architecture or working the formula yourself." The architecture essay is blunter:
outputs generated this way "must be seen as simulacra" and "could never be verified if the solutions
presented were not contrived to fit the formula." So `01` is a simulated derivation checked for internal
consistency against the figures. It is not a test of any diffusion claim and must be labelled as such. It
cannot settle anything it reports on.

## 7. Correction log

| earlier reading | status |
|---|---|
| "the framework forbids naming a mechanism" | **Narrowed.** The README's phrase governs a *missing* primitive. Rogers' characteristics and weak ties are held atoms or provenanced imports. Naming them is allowed; treating them as settled without a discriminator is not. |
| "a shape is a vague description" | **Refused.** *The Library of Babel* defines it as the set of books small and descriptive enough to satisfy the question. It is a tight constraint. |
| "wide adoption is a good proxy for ground contact" | **Retracted.** Metamerism and the outputs-not-generators rule both forbid it. Adoption is a reading; ground contact is a source. |
| "independent replication is just more copies" | **Refused.** *Decoding Tacit Knowledge*: "Two frames together reach what neither reaches alone", and long close contact "uses up that extra reach". |
