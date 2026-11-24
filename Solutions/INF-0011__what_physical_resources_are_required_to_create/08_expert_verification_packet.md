# Expert verification packet - the Tether on physical resources for information operations

**What this is:** a claim in a form a thermodynamicist or information theorist can check. Mode,
derivation and refuters are stated before the conclusion, so a reader knows what to look for and what
would settle it.

**Mode: `specified` on the ledger, `general` on the structural shape, not `grounded`.** No new
measurement is claimed. The kT ln2 number is a world result with provenance, not a figure output.

## 1. The claim, in one paragraph

The question is four questions, not one. Create, store, transmit and erase are asymmetric: erase is
many-to-one and logically irreversible, the other three can be reversible. Under the framework's
six-term substrate, only erase carries an unconditional thermodynamic floor, paid by spending a
free-energy gradient composed with Energy into a flow and leaving the remainder as heat in a bath.
Storage is a held barrier in a bounded region, transmission is a Network effect whose energy price is
not figure-governed, and creation is production of a state that costs work only when the prior state
is unknown. Four sub-questions are declared gaps. The framework gives the shape any candidate answer
must have, not the number.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figure 1 and Figure 9

- **Statement:** the four operations are four slots with different logical symmetry, a union compound
  to be unbundled rather than one price to be averaged. Only one has an unconditional floor.
- **Source, verbatim:** Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* Fig
  9 :54 - *"And when the split lands on a union rather than a partition, unbundle before you search
  again."* Fig 9 :55 - *"A bundled problem is usually a union of overlapping conditions, not a list
  of separate ones."*
- **Refuter:** show that the four operations share one symmetry class (all reversible or all
  many-to-one), so that the slot split and the union reading fail together.

### C2 - physics-facing; checkable by an expert against the thermodynamics of computation

- **Statement:** the unconditional floor belongs to erase, and is paid by spending a gradient and
  dumping a remainder; create, store and transmit have no logical floor of their own.
- **Source, verbatim:** Fig 13 :76 - *"Energy and a gradient compose a flow."* Fig 13 :22 - *"a
  difference that can be spent"* (the Gradient). Fig 13 :71 - *"no direction to drive the flow, and
  no remainder left after each step."* Fig 13 :65 - *"no time-translation symmetry, and no finite
  operations to leave a remainder."*
- **What to check:** is the asymmetry faithful to Landauer's logical-irreversibility argument and its
  experimental tests? Does the penalty attach to erasure rather than to measurement? Is the heat a
  remainder left in the bath rather than a property of the bit alone?
- **Refuter:** a measurement of logically irreversible reset below the bound in the quasistatic
  limit, or a demonstration that create, store and transmit necessarily dissipate the same per-bit
  floor in that limit.

### C3 - framework-internal derivation with one declared gap

- **Statement:** storage needs a bounded region and a held barrier; transmission is a Network effect;
  the figures supply no energy-per-bit floor for a reversible channel, so that sub-question is a gap.
- **Source, verbatim:** Fig 13 :62 - *"no spatial symmetry for Noether, and no region to make isolated
  mean anything."* Fig 13 :24 - *"that entities relate, and influence travels"* (Network). Fig 9 :32 -
  *"you get a kind of thing, never the answer itself."* Fig 8 :39 - *"So a search that finds nothing
  is never a proof of absence."*
- **Refuter:** a figure line that prices bits directly in joules, or a ground measurement of a
  reversible-channel energy-per-bit floor at the relevant limit (which would close the gap), or a
  memory that retains distinct states with no spatial isolation and no barrier.

## 3. What is explicitly not claimed

- Not that Shannon entropy and thermodynamic entropy are the same quantity.
- Not that the figures produce the kT ln2 number. That is a published world result: Georgescu,
  *"60 years of Landauer's principle"*, Nature Reviews Physics 3, 770 (2021), and Berut et al., Nature
  483, 187-189 (2012). Provenance in `10_source_ledger.csv`.
- Not that create, store or transmit have an erasure-like floor. Their costs are apparatus costs.
- Not a number for reversible transmission. It is a `gap`.
- Not `grounded`. Nothing here is asserted as settled by this derivation.
- Not that the bath is literally a chemical catalyst. That is an analogy with its limit stated in `06`.

## 4. Provenance

- Figure text extracted verbatim from the 13 figures plus the Operators and Symbols tables, local
  file `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Method and shape reading: `05_what_shape_means.md`, `06_isomers_and_order.md`, two essays opened
  2026-11-23, six carried from the exemplar's recorded mapping.
- World sources opened 2026-11-23: Landauer 1961, Berut et al. 2012 and 2015, Parrondo et al. 2015,
  Georgescu 2021, IOPscience 2025, EPJ Plus 2023, MIT Press 2016.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*
(opened 2026-11-23): *"If several paths create the same behavior, then behavior is a projection with
lossy information"* and *"The answer is unreached until a better instrument exists."* Here:

1. Does an instrument that tracks the free-energy gradient, not merely joules, identify the source of
   the erasure cost?
2. Can create, store and transmit be run reversibly with vanishing dissipation? A nonzero floor for
   any of them breaks C1/C2.
3. Does a reversible channel have a measurable energy-per-bit floor at the relevant limit? That would
   close the C3 gap.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, Fig 9 :54-55, :32, Fig 13 :22, :62, :65, :71, :76, Fig 8 :39 - nine short passages.
2. Check C2 against the Landauer argument and the Berut experiment: is the floor attached to erasure
   and paid to the bath?
3. Name one instrument that would distinguish a gradient-driven cost from a bare joule reading, or say
   why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figure
text, not a ground reading. It cannot settle the claim it reports on.
