# Structure, bonds and order in a value-of-information claim

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground
reading (see `05_what_shape_means.md` §7). The falsifier is written before the derivation, in §0.

## 0. Falsifier, written before the run

1. If a value-of-information statement can be fully specified by listing its ingredients (bits,
   probabilities, utilities, costs) with no bond, this derivation fails; Fig 12 :5 says the bond is
   the rest of the information.
2. If the order SEARCHED / INWARD / OUTWARD can be permuted without changing which quantity is
   being answered, this derivation fails; Formula step 7 and Fig 3 :20 govern the order.
3. If two experimental designs over the same atom set, differing only in which bond mediates the
   message, produce the same substance, the isomer claim fails and the functional-group reading
   stands instead.
4. If a settled ex-ante value can be composed over before the ground pays, Fig 12 :106 and Formula
   step 5 fail.

## RESIDUAL

The question names one object, "the value of information", and treats it as a quantity to be
computed. The figure question is: what is the **molecule** being proposed, which bonds join its
atoms, in what order, and at which level does it become an operand? If the field's single number is a
flat formula (ingredients only), the arrangement has not been recorded (Fig 12 :6-17).

## DOMAIN CENSUS

Atoms held: a per-slot residual `R_s` and its live mass `R⁺_s` (Symbols table, Fig 1 :11/:18), a
candidate term `φ` with cost `|φ|` and leftover `left(R,φ)` (Symbols table, Fig 5 :43-44), the
channel and an external source (Fig 6 :9-11), the ground (Fig 2 :24-27), the eight operators
(Operators table). Bonds held: the seven, plus negation. No new primitive is available without an
import with a source gate and shadow test (Fig 6 :12-14, Fig 8 :27-28).

---

## DERIVATION

### Q1 - Is a "value" a molecule or a list of ingredients?

Fig 12 :5:

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

A value-of-information statement is not `probability x consequence - cost`. That flat notation uses
only `+` and `−` and records the ingredients, not the typed relations. Fig 12 :40-44:

> **"same two atoms, three substances and the bond is charged for what it could have been"**
> **"the arrangement is priced or it is free"**

Here the atoms are at least: a slot's live residual mass, a possible message, the description of
that message, the experiment that would resolve it, and the ground payment. The bonds are not
recoverable from the atoms (Fig 12 :46-47: *"A bond is the typed relation between two operands. There
are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*).
So a flat scalar is the collapse 6 of Fig 12, and Fig 12 :101 holds: *"A bond that costs nothing is a
bond that carries nothing, which is the flat case."*

**Result:** the value is a molecule. Refuter: falsifier 1. Single-source on the figure side (Fig 12),
structurally supported by the world's non-additivity results at lower overlap.

### Q2 - Which bonds are actually at stake?

Operators table and Fig 12 give each bond a test. Mapped onto this question:

| bond | name | role here | figure |
|---|---|---|---|
| `+` | conjunction | both mass and compressibility must hold; symmetric | Fig 12 :55-59 |
| `→` | sequence | the probe precedes the observation; ordered, not a join | Fig 12 :70-74 |
| `⋛` | comparison | the decision is a threshold between two quantities, a goal | Fig 12 :85-89; Operators :47-52 |
| `−` | subtraction | progress is how much residual the message removes | Operators :41-46 |
| `¬` | negation | a refusal of a held term whose residual persists and does not trend down | Operators :53-58; Fig 5 :53-56 |
| import | not a bond | an external atom crosses the wall; only operator that moves it | Fig 6 :14, :21-23 |

Two consequences. First, `⋛` is a **threshold relation between two quantities** (Fig 12 :87), and
Fig 12 :112 says *"A goal is a comparison."* So "what is the value" is a goal-shaped question, not a
field-unification or a merge: it asks which option crosses a threshold. Second, the refusal is a
negation, not a subtraction; Fig 12 :101 and the Operators table's amendment say a vocabulary without
`¬` can only accumulate. The field's standard EVPI arithmetic has `−` (value with information minus
value without) but no `¬`, so it can compute a difference and cannot carry a correction to the model
that produced it. That is not a defect of EVPI; it is a scope limit worth stating.

**Result:** the molecule uses ordered and threshold bonds, not a flat symmetric sum. Refuter: falsifier
2 in its bond form, that `⋛` and `→` can be replaced by `+` with no loss.

### Q3 - Is the ex-ante value an isomer, a functional group, or a catalyst?

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :123:

> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Take two experiments over the same atom set `{R_s, φ, description bits, actions, ground}`:

- **Design A (direct probe):** the message is bonded to the slot by `→` (sequence), with the cost paid
  in actions. This is the in-closure case; the remedy for a miss is SEARCHED, more independent
  search (Fig 8 :49-50).
- **Design B (imported instrument):** an external atom crosses the wall and is bonded to the slot by
  import, with the cost paid partly in description bits and partly in actions. This is the OUTWARD
  case; it needs provenance and a shadow test (Fig 6 :12-14).

Same atoms, different bond, different substance: an isomer claim under Fig 12 :117, **conditional on
the atom set being fixed**. If Design B adds an atom the first frame did not hold, the relation is a
composition plus an import, not isomerism, and Fig 6 :22 (*"IMPORT adds an atom, and the added atom is
what expands the closure."*) governs. The condition is stated, not hidden.

The VoI *measure* itself is better read as a **functional group**: the presence of a priced, per-slot,
ground-ranged comparison fixes the kind of thing it is; the qualifier (which slots, which threshold,
which ground) fixes the member (Fig 12 :123). A "table of high-value information sources" mistakes
the qualifier for the kind and is refused by Fig 11 :51 (*"No standing list of good actors survives a
change of residual."*).

**Catalyst check.** Fig 12 :119: *"catalyst. A part that survives its own use."* A maintained
instrument that returns a reading and is not consumed is a catalyst; a one-off survey whose
arrangement was not recorded is a spent part, and where the arrangement is not recorded every
lineage pays again (Fig 12 :107-110). The packet asks the expert to classify the proposed instrument,
because Fig 12 :119 says *"nothing records which a term is"* unless we do.

**Result:** conditional isomer for two designs over a fixed atom set, functional group for the
measure, catalyst or spent part for the instrument. Refuter: falsifier 3.

### Q4 - What is the order, and where does the round trip sit?

Formula step 2 requires refusal before mint: a term whose residual *"PERSISTS AND DOES NOT TREND
DOWN"* is the one to point the refusal at. Formula step 7 requires SEARCHED first because it is
cheapest and the other two assume its answer; INWARD and OUTWARD are opposed and never read against
each other (Fig 6 :31). Fig 3 :20: *"The chain is ordered by dependency, not by importance."* So the
order for this question is:

1. **support** (is there live mass? Fig 5 :21, Formula step 3);
2. **SEARCHED** (is it in here and unfound? independent searchers, Fig 8 :50);
3. **INWARD** (sharpen an instrument already returning something, Fig 6 :32-35) or **OUTWARD**
   (describe the residual in effect terms and find the frame whose closure predicts its shape, Fig 6
   :30, Fig 9 :27-28), as two tracks;
4. **refuse** a held term if the residual persists flat (Formula step 2, `¬`);
5. **mint / import** with the three guards and the bargain (Fig 5 :33-44);
6. **settle** against the ground (Formula step 5), then compose over (Fig 12 :106 - *"Nothing composes
   over what was never admitted as a part."*).

The round trip (Fig 4 :13-15, :30) runs between steps 3 and 6: carry a method up, bring it back down,
measure the gap `R_T`. `11_audit.md` records this qualitatively as nonzero because no ground reading
exists here. Treating "the formula is the condensed version of the figures" as identity would set
`R_T` to zero and be the dead-reckoning error Fig 4 :30 names.

**Result:** a six-step dependency order plus a measured round trip. Refuter: falsifier 4.

### Q5 - Analogues as the question needs them

- **Mathematics / communication theory, low overlap:** Shannon 1948 designs a system to operate for
  every possible selection, *"not just the one which will actually be chosen since this is unknown at
  the time of design."* That is the shape before content inside communication engineering.
- **Decision theory, distinct quantity:** Howard 1966's non-additivity result and the Wikipedia
  characteristic *"The VoI of observing two new evidence variables is not additive"* corroborate
  Fig 12's "do not add" for a different reason (submodularity within one currency). Kept separate.
- **Human cognition, lower overlap:** the Salk / Psychological Science paper on probability gain shows
  people acquiring information to discriminate hypotheses, i.e. ranking a probe by what it would
  change, not by bits alone. Mechanism-shape corroboration only.
- **Instrumentation, low overlap:** the spectrometer in *The Hard Problem is About Source* resolves a
  source that the reading alone could not. This is the discriminator the audit owes.

These are analogues, not authorities. The figures decide; world sources corroborate only.

---

## CONCLUSION

A value-of-information statement is a molecule, not an ingredient list. Its decisive bonds are `→`
(sequence, the probe before the observation), `⋛` (a threshold comparison, a goal), `−` (progress as a
subtraction), and `¬` (a refusal the standard arithmetic does not carry). Bits and actions are two
currencies priced separately and not summed (Fig 12 :125-130). Over a fixed atom set, two experimental
designs differing only in bond are isomers; the measure itself is a functional group; the instrument
is a catalyst if it survives its use and a spent part otherwise. The order is support, SEARCHED,
INWARD or OUTWARD as opposed tracks, refuse, mint or import, settle, with a measured round trip
`R_T`. This rescues what is checkable in the question (the rule and the shape) without pretending to
return the settled value of an unread message.

## ANCHOR

Verbatim figure text extracted from the canonical SVG set this session, the canonical figures README,
`THE_FORMULA.md`, the eight essays, and the world sources in `10_source_ledger.csv`. No measurement
was used. Nothing here is `grounded`.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor, non-updating), Fig 3 (dependency order), Fig 4 (round trip,
methods cross), Fig 5 (three guards, MDL bargain, negation amendment), Fig 6 (import, two opposed
instruments), Fig 8 (idempotence, SEARCHED, residual first), Fig 9 (describe before looking, filters
versus witnesses), Fig 10 (ground does not decay), Fig 11 (valence relative to residual, no standing
list), Fig 12 (bond, isomer, functional group, catalyst, two currencies), Fig 13 (closed set, open
arrangements), Operators table (bond tests, unary negation), Symbols table (`R` as slice).
Strains after re-census: S4 (two reasons for non-additivity) and S5 (enumerability boundary) are
named and kept; the isomer claim's fixed-atom condition is live, not hidden.
