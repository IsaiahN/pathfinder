# What "shape" means for this question, from the eight essays

**Mode: `general`.** This file interprets the canonical word "shape"; it does not claim a ground
reading about adaptive networks.

Sources read 2026-11-22, all by Isaiah N:

1. https://adventuresinml.substack.com/p/how-intelligence-actually-works (exemplar's mapping; not
   re-read in full this session, quoted here only where the local figure text or another essay
   repeats the claim)
2. https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap
3. https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context
4. https://adventuresinml.substack.com/p/the-library-of-babel-locating-the
5. https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should (exemplar's mapping;
   not re-read this session, not quoted here)
6. https://adventuresinml.substack.com/p/the-hard-problem-is-about-source
7. https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work (exemplar's mapping; not
   re-read this session, not quoted here)
8. https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether (exemplar's mapping; not
   re-read this session, not quoted here)

Honesty note: I re-read four of the eight essays this session. The other four were mapped in the
imported exemplar and are listed for provenance, but I did not open them here, so I do not quote them
as if I had. The canonical figures README was read in full and governs the word "shape".

## 1. A shape is a constraint, not a filler

The canonical figures README states the limit: the framework returns "what a missing thing would have
to look like (a shape, not a name)". Fig 9 :32: "you get a kind of thing, never the answer itself."
Fig 13 :134: "Unreachable is a verdict here, not a silence".

From *The Library of Babel*: "You can cut your search short if the set of books returned is small and
descriptive enough that it provides a general shape of the answer that satisfies your question."

For CMP-0076, a **shape** is the constrained form of the answer we can state before we can name a
single controlling parameter. The shape is:

> settling is a union of conditions, not one lever; the loop has no internal convergence criterion;
> the discriminator must come from outside the frame.

A **name** would be "the system converges when the rewiring rate drops below r*". That is a filler
we cannot yet license, because it would pick a frame before the residual was described.

## 2. How the shape is obtained

- *Library of Babel*: use the vocabulary already closest to the thing and recurse. "With each new
  term gained, you are able to narrow the space by definition and deepen your vocabulary." Applied
  here: start with "per-slot residual", "cycle sign", "settled composition", "habitat", then narrow.
- Fig 6 :30: "The description travels. Fails by being sharpened into terms only we can read. Cast it
  in effect terms." Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than
  the cause." So we describe what convergence would look like (no positive per-slot residual, a
  reference that does not move, a structure that can be composed over), not the mechanism that
  allegedly produces it.
- *Decoding Tacit Knowledge*: "When contact isn't possible, the best you can send is a plain
  description of what you'd expect to see, because anyone can check that against the world."
- *Library of Babel* on stopping: "You will know that you are done because the finish line will also
  be the starting place". For this question the finish line is an outside instrument that registers
  whether R is still arriving; until then the search can only narrow the shape.

## 3. What licenses a name here

Two things, both outside the shape itself:

1. **The ground settles it.** `THE_FORMULA.md` step 5: "the ground settles it. Verified only by what
   pays. A gate is not the ground." For adaptive networks that means a measurement against a
   reference that does not update when the network is pushed.
2. **A provenanced import from a frame whose closure differs** (Fig 6 :23, Fig 8 :50-52), with a
   source gate and a shadow test. World sources S2 and S3 supply the sign direction in F3 as exactly
   such an import, and are labelled `single-source` for that reason.

*The Hard Problem is About Source* supplies the discriminator principle: metamerism. An instrument
that reads green "cannot comment on the source"; "If several paths create the same behavior, then
behavior is a projection with lossy information". It was the spectrometer, not an argument, that
resolved it. Applied here: a global edge-change rate that goes to zero is a reading, not a source.
Settlement, a saturated metric, and a closed channel can all produce the same reading. What is owed
is a source-discriminating instrument, not a name for the regime.

## 4. Correction to my own first reading (kept visible)

I first wanted to name **negative feedback** as the answer: stable structure is the damping sign.
That overstepped the canonical rule in two ways.

1. The README's phrase governs a *missing* primitive. Damping is not missing; cycle and comparison
   are already in the operator set (Fig 12). Naming a sign is not inventing a primitive, so "shape,
   not a name" is not a flat ban on it.
2. The real reason the name fails is that Fig 12 :121 only says "The sign of the loop decides whether
   it closes". It does not fix the mapping from sign to regime in this text. The mapping came from
   world sources, so it is an import with provenance, not a figure derivation. I have therefore
   kept the structural claim as `triangulated` and the sign direction as `single-source` in `01` F3.

Both the first reading and its correction are recorded here; neither is silently erased.

## 5. Prestige is not action

From *The Recursive Self-Improvement Trap*: "Prestige must never be allowed to validate an action
directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot
settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."

A list of well-known adaptive-network researchers assembled to endorse this claim would be the named
collapse. The legitimate ask gives the claim a budget to be tried and lets a ground settle it. The
public venues in `03_public_contact_points.csv` are submission and opt-in routes, not a ranked list
of believers.

## 6. My own audit is a simulation, not a ground reading

Same essay: "LLMs can quickly simulate an approximate answer/output with the formula found in the
architecture post" but "the truly testable output would need to be derived from the real architecture
or working the formula yourself." LLM output is "simulacra". So `01_figure_grounded_audit.md` is a
simulated derivation checked for internal consistency against the figures. It is **not** a test of
the question and must be labelled as such. It cannot settle anything it reports on.

## 7. Answer to the shape question for CMP-0076

**What shape must any answer have?** It must be a union, not a single lever; it must name a reference
that does not update; it must be measurable per slot; it must distinguish settling from a closed
channel using something outside the frame; and it must treat maintenance as work. **What can we not
say?** We cannot give a numeric threshold, a critical exponent, or a theorem-ID that settles the
question from inside the model. Those are names, and they are owed by a ground we did not consult.
