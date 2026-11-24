# Are the five evidence kinds isomers, or one ordered chain?

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground
reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The five candidates (historical cases, natural experiments, randomized trials, mathematical
consistency, predictive accuracy) are often presented as a ladder: consistency at the bottom,
history above, prediction higher, RCTs at the top. The residual is whether the figure set licenses
that ordering, or a different structure. Two questions are owed: (1) are the five **isomers** under
Fig 12's definition, and (2) if not, what is their order?

## DOMAIN CENSUS

Atoms held (from the figure set and the fetched methodology sources): a ground that does not update;
frames with closures; residual `R` between prediction and observation; an anchor; an instrument;
a record; independence between frames. Bonds held: the seven plus negation from Fig 12 and the
Operators table. No new primitive is available without import, and the imports already used were
provenanced in `05` §7.

| candidate | what it bonds to | ground contact | frame-internal? |
|---|---|---|---|
| mathematical consistency | theory to its own axioms | none by itself | yes |
| historical case | theory to a past record | only if the question is about that case | fitted after the fact unless pre-registered |
| predictive accuracy | prediction `Γ(b,a)` to observation `o'` | yes, when out of sample and independent | in-sample version is internal |
| natural experiment | intervention to outcome via an external assignment | yes, with a comparison condition | confounder risk |
| randomized trial | intervention to outcome via controlled assignment | yes, on the randomized axis | external-validity limits |

## DERIVATION

### Q1 - Are they isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

The five do **not** share the same atom set. Mathematical consistency has no ground atom; predictive
accuracy has no intervention atom; a historical case has no controlled-assignment atom. Under Fig
12 :117 they are not isomers. Fig 12 :124: "functional group. A substructure whose presence fixes
the outcome. The group says what kind; the qualifier says which member." The five belong to a
functional group of "things offered as evidence," with different slots filled. Calling them
isomers would hide the decisive structural difference.

Fig 13 :38: "independence is how little two frames draw on the same evidence, and it is what makes their agreement mean anything." Fig 13 :39: "Six members that overlapped would be fewer members wearing six names." Applied here: two evidence kinds that always travel together (for example a data set and the in-sample fit computed on it) are fewer witnesses wearing two names.

**Result:** not isomers; members of a functional group with distinct atom sets. **Falsifier, written
before the run:** if all five can be written over one shared atom set, differing only in which bond
connects them, the isomer claim holds and this result fails.

### Q2 - Are they one ordered chain?

Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

The five do **not** form a dependency chain either. A randomized trial does not consume predictive
accuracy as its input; mathematical consistency is not a predecessor of a historical case. The
popularity of the ladder treats an importance ranking as a dependency order, which Fig 3 :20
forbids.

**Result:** not a dependency chain. **Falsifier:** exhibit a relation in which, say, consistency is a
necessary input to a natural experiment in the sense of Fig 3, so that effort above the break
arrives at a step that uses it.

### Q3 - What structure do they actually have?

They are a **union with an overlapping intersection**, ordered by a dependency chain of *questions*,
not of evidence kinds. Fig 9 :54: "And when the split lands on a union rather than a partition,
unbundle before you search again." The unbundling is the one that matters:

1. What is the disagreement constitutively about? (anchor legitimacy, Fig 2 :36)
2. Are the candidate sources independent of the frames? (Fig 2 :31)
3. Do they register ground contact rather than internal coherence? (Fig 1 :23)
4. Which instrument measures the disputed axis? (Fig 6 :32, Fig 2 :37)

Each question consumes the answer to the one before it. That is a real Fig 3 chain, but its links
are questions, not evidence kinds. The evidence kinds are the candidate answers looked up at each
link. Fig 9 :29: "matching is a one-pass check, not a search." Once the residual is described, the
eligible evidence kind is recognised rather than searched for.

This also explains the universal-ranking gap in `01` F7. A ranking of *answers* across all possible
*questions* is not a thing the chain produces. Fig 9 :32: "you get a kind of thing, never the
answer itself."

### Q4 - What is the bond between an instrument and its ground contact?

Fig 12 :103: "Composition is recursive, and the level decides what is irreducible." Fig 12 :104:
"A settled molecule becomes an atom for whatever composes over it." An experiment whose result is
settled against the ground becomes a record at the next level; the historical case then carries the
settled experimental result forward as a compound. This is the recursion by which natural
experiments, randomized trials and historical cases can be nested rather than ranked: a settled
trial becomes a datum inside a later historical synthesis, and the datum's provenance travels with
it (Fig 8 :50-52).

**Strain, named not hidden:** whether a settled result "counts as a quantity" when composed into a
later comparison needs an instrument, not an argument. The Operators table defines comparison as
"a threshold relation between two quantities." We do not resolve that here.

## CONCLUSION

The five evidence kinds are neither isomers nor a dependency chain. They are members of a functional
group (Fig 12 :124) standing as candidate answers to a four-link dependency chain of *questions*
(Fig 3 :20, Fig 9 :54). Their apparent ordering is an importance ranking, which Fig 9 :60 bars from
handing us a verdict: "Use filters for the budget and witnesses for the verdict. Never let a filter
hand you a verdict."

This rescues what is defensible in the ladder intuition (some evidence follows from earlier
questions and can be composed over settled results) while refusing what is not (a universal pecking
order of evidence kinds). It needs no new primitive and no import that moves the wall.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. No measurement
was used.

## FIGURE CENSUS

Fig 2 :31, :36, :37 - independence, anchor legitimacy, instrument axes. Fig 3 :20 - dependency not
importance. Fig 6 :32 - instruments improved from worse instruments. Fig 8 :50-52 - provenance of
convergent derivation. Fig 9 :29, :32, :54, :60 - one-pass matching, kind not answer, unbundle the
union, filters not witnesses. Fig 12 :103, :104, :117, :124 - recursion, settled molecule, isomer,
functional group. Fig 13 :38-39 - overlap reduces membership. Operators table - comparison type.
Strains after re-census: one, the operand type of comparison at second order, named above.
