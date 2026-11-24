# Isomers, head starts and dependency order in few-shot learning

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground
reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The audit leaves two structural questions open. (1) Are different few-shot methods related as
**isomers** over a shared atom set, or merely as members of one functional group? (2) Where does the
dependency chain actually break, and what is the order of the compounds? A third question, which
concrete method wins, is a declared `gap` and is not answered here.

## DOMAIN CENSUS

Atoms held: Space, Time, Energy (states) plus Spectrum, Gradient, Network (structures), seven bonds
and negation, plus the weighting `w` from the Symbols table. Currency: reach inside `closure(Γ)`
and settlement against the ground. No new primitive is available without an import. Actors: slots,
learner, head start, habitat, checker. Anchor: the ground, which does not update.

## DERIVATION

### Q1 - Is a head start the same bond as a recording of one success? NO, and this is the decisive structural point

- Fig 4 :22: *"Only methods cross up. Only head starts come down."*
- Fig 4 :24: *"downward: something that makes the next search cheaper. Never a replay of what worked once."*
- Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*
- Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

A head start and a replayed recording can contain the same atoms (a rule, a weight, a prior,
a demonstration). What differs is the **bond**: one makes the next search cheaper; the other is a
description of one occasion and produces a system that repeats a past success. Fig 12 :94:
*"The arrangement is the substance."* So two systems with identical stored content can be different
substances. This is the figure-grounded reason why "the same model pretrained on more data" and
"the same model handed a method" are not interchangeable even when the parameter count matches.

**Falsifier, written before the run:** show a case where replaying a recording of one success makes
the next search cheaper in exactly the way a head start does, with no method abstracted. Then the
bond distinction in Fig 4 collapses. Mode `general` on the structure, `specified` on learners.

### Q2 - Are few-shot methods isomers, or members of a functional group?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Two families in the literature can be distinguished without naming a winner:

- **Prior-supplying methods** (a Bayesian or program-structured prior, a pretrained head start)
  put the work in D2: the atom is already held and the few examples select it.
- **Search-distributing methods** (meta-learned initialization, independent probes) put the work in
  distributing the search over held atoms and keeping the searchers independent (Fig 6 :50).

As concrete systems, these share almost no atoms beyond the learner and the few examples. By Fig 12's
definition they are **not isomers**; they are members of the same **functional group**, the
`few examples -> selection -> ground settlement` motif, with different atoms in the slots.
The stronger form is available but conditional: if both are rewritten over a full shared atom set
(learner, head start, per-slot residual, bonds, ground), differing only in which bond carries the
selection, then they **are** isomers: same atoms, different arrangement, different substance. That
is the claim worth testing, not the weaker family label.

**Falsifier:** if one family requires an atom the other provably lacks (for example a head-start
method that cannot run without a held program prior, while a search-distribution method demonstrably
can), the isomer claim fails and only the functional-group reading stands. This falsifier is written
before the run.

### Q3 - What order is the compound?

- Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*
- Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
- Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."*

The dependency order for this question is:

1. **Perception**, the few examples registered as residuals on slots.
2. **Vocabulary**, having a term for what those examples afford (the head start supplies atoms here).
3. **Objective**, being able to say what would count as progress from them.
4. **Planning**, choosing a composition among held atoms.
5. **Learn and carry**, settling against the ground and promoting a method, not a replay (Fig 4 :22).

The break is drawn between 2 and 3 as an illustration; where it actually falls is a reading, never a
property of the chain (Fig 3 :18). A system that fails at vocabulary cannot be rescued by a bigger
model at step 4, because the input never arrives. Once a first-order term is settled against the
ground it can serve as an atom at the next level; a system that has settled "how to interpret this
class of few-shot cue" composes over that settled term rather than re-deriving it. Fig 12 :107:
*"Settling compresses the description and not what it cost to establish."* Where the arrangement is
not recorded, the result carries forward but the deriving does not, and the next lineage pays again.

### Q4 - What kind of thing is a catalyst here?

- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

A head start is a catalyst in this sense: it survives its own use and is available for the next
task. A single demonstration consumed as a replay is a spent part. Nothing in the stored content
records which one a term is, which is why the distinction must be carried in the lineage rather than
read off the atoms. This corroborates Q1 and gives the outreach check a concrete name: ask whether
what crossed was a catalyst or a spent part.

## CONCLUSION

The two decisive structural results are a **bond distinction** (head start versus replay, Fig 4 :22-25)
and a **dependency order** that breaks at vocabulary and objective (Fig 3 :20, :25-27). On the
isomer question the methods as actually described are members of one functional group, not isomers;
the stronger isomer claim requires rewriting both over a shared atom set and carries its own
falsifier. Which specific method wins remains a `gap`, and no new primitive or wall-moving import is
needed for any of this.

## ANCHOR

Verbatim figure text extracted locally from the 13 figures and the two tables this session; no
measurement was taken. World sources in `09_watson_answer.md` support the mechanism shape only.

## FIGURE CENSUS

Fig 3 (dependency order, unmeasured link), Fig 4 (methods versus recordings, head starts), Fig 6
(distribute the search, keep searchers independent), Fig 12 (bond, isomer, functional group,
catalyst, settled molecule, what settling compresses), Fig 13 (set closed, arrangements not).
Strain after re-census: none. The Fig 4 membrane and Fig 6 closure wall govern different objects
(between-scale transfer versus inside-closure reach), so Q1 does not force a contradiction.
