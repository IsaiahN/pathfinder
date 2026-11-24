# Operators, isomers and order - supporting derivation for BUS-0082

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The primary audit (`01`) returned three operators as a union. Three questions are still owed before the answer can be stated cleanly:

1. **Structure.** Are automation, expansion and new work really three bonds, or are two of them one bond read at different scales?
2. **Order.** In what order do the three conditions and their instruments bind? Which link breaks first?
3. **Analogue.** Are two occupations with the same task elements isomers under Fig 12, or something weaker?

## DOMAIN CENSUS (carried forward, not re-run)

- D1 worker loop: actors worker, Γ, tool, task; currency action and residual reduction; anchor realized task outcome.
- D2 occupational habitat: actors workers, occupations, firms, customers, regulators; currency employment and wage; anchor realized employment per occupation.
- D3 task-composition library: actors task atoms and bonds; currency reach and |φ|; anchor settlement.
- D4 measurement channel: actors indices, surveys, expert panels; currency contact; anchor the ground that does not decay.
- Partition or union: union of C1 (outcome readable), C2 (reach composed inside closure) and C3 (atom imported), with D1/D3 and D2/D4 forming two compounds.
- Dependency order: perception → vocabulary → objective → planning → learn and carry (Fig 3 :4-15).

No new domain is introduced here. The figure lines below were selected only after this census was fixed.

---

## Q1 - Are the three options three bonds?

> **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."** (Fig 12 :46)
> **"A with B removed or absent"** (Fig 12 :82, subtraction)
> **"A produces B; B did not exist before"** (Fig 12 :77, production)
> **"the only operator that moves the wall"** (Fig 6 :14)

Automation is subtraction: the worker operand is removed from an arrangement that already closes R. Expansion is production: a term appears that was not in the worker's library before, but it composes from what the library and the reachable peer frames already hold. New work is not a bond at all in the worker's library; it is an **import**, an operator on the closure rather than inside it (Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*).

This resolves the strain S1 recorded in `01`: reading new work as a mint fails because Fig 6 :21 says *"MINT composes inside the closure and can never add an atom."* The three options are therefore not collinear. A policy that buys more expansion instruments cannot thereby buy more new work, and a policy that imports a new atom cannot be evaluated with the same instrument used to score subtraction.

The operators also carry different currencies. Fig 12 :125-126: *"A composition costs in two currencies, and they do not add."* Bits price the description; actions price finding out whether it holds. An exposure index prices the description of a task; the realized time and quality price the action. Summing them into one "AI impact" figure is the error Fig 12 names, not the fix.

**Falsifier, written before the run:** if automation and expansion collapse to one bond under a ground measurement that cannot tell a removed worker from an extended worker, the three-operator claim fails and the two-option reading stands. If a new form of work is shown to be a rearrangement of existing atoms with no import, the third category collapses into the second and S1 was right after all.

**Status:** `general` for the operator identities, `specified` for the labor application; triangulated for legality (Fig 6, Fig 8, Fig 12, Fig 13), single-source for the occupation mapping.

---

## Q2 - What order do the conditions bind in?

> **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."** (Fig 3 :20-21)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)

Order for a worker facing AI:

1. **Perception.** Can the worker read the task outcome at all? Failure here is visible and has obvious tests (time, error count, quality score).
2. **Vocabulary.** Does Γ have terms for what the changed task affords, and can the worker say what would count as progress there? This is the middle link. Fig 3 :26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*
3. **Objective.** Can the worker state a comparison that would count as getting somewhere? Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*
4. **Planning.** A route to that objective under incomplete information.
5. **Learn and carry.** Name what worked, verify it, carry it to the next problem.

The three conditions map onto this chain. C1 (outcome readable) is mostly a failure of links 1 and 2. C2 (reach composed) is mostly a failure of link 5, because the worker names what worked but never imports a new atom. C3 (import) sits outside the five links: it moves the wall rather than traversing the chain (Fig 6 :14). That is why one lever cannot clear all three (Fig 9 :57).

The order also decides which instrument to buy first. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The outcome-facing link has time and quality data; link 2 has almost none, and link 5 has exposure scores that measure possibility rather than settlement. So budget piles up at links 1 and 4 while the break sits at 2 and 5.

**Falsifier:** a worker whose chain demonstrably works at 1, 2 and 3 and fails only at 4. That would falsify the "usually middle" claim of F7 in the primary audit, though not the dependency ordering.

---

## Q3 - Are two occupations isomers?

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)
> **"Symmetry is what decides whether an arrangement is a new thing."** (Fig 12 :92)

Two occupations with an identical list of task elements have the same atoms. If one composes those atoms as a repeated sequence and the other as a reconfigurable network, they are **isomers** under Fig 12 :117: same atoms, different bond, different behavior, with the difference invisible in the task inventory. This is the figure-grounded version of "it is not what tasks exist, it is how they are arranged", but stronger, because the arrangement is itself a substance.

If the occupations share only a pattern (both use `worker → tool → outcome`) while differing in which atoms occupy the slots, the weaker claim holds: they are members of the same **functional group** (Fig 12 :124), the qualifier saying which member. The presence of the pattern fixes the kind, not the outcome.

The distinction is testable. A task-list comparison that finds no difference between two occupations cannot distinguish isomer from functional-group; the bond has to be recorded. Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Felten, Raj and Seamans find *"a positive correlation between wages and exposure to AI language modeling"*, which is precisely the sort of result a task-list reading cannot explain: the atoms do not determine the substance.

**Falsifier:** two occupations with identical atoms and identical bonds whose AI balance diverges with no difference in ground contact or imported atoms. The isomer framing would be insufficient and the explanation would move to habitat (D2).

**Status:** `specified`; triangulated for the legality of the reading (Fig 12 and Fig 11 :50), single-source for the occupation application. The world corroboration is Felten et al.'s exposure correlation, which is an instrument from one evidence pool.

---

## Q4 - Does the shape generate the literature's answers?

Partly. The shape generates:

- the displacement emphasis, as subtraction inside a composition that already closes R;
- the complementarity emphasis, as production inside the worker's reach (Brynjolfsson et al. 2023: *"a 34% improvement for novice and low-skilled workers"*);
- the new-tasks emphasis, as import from a differing closure (Acemoglu and Restrepo 2018: *"the creation of new labor-intensive tasks"*);
- the transformation emphasis of the ILO 2025 report, as the worker-and-habitat claim at the occupational stratum (*"transformation of jobs is the most likely impact of GenAI"*).

It cannot generate the *name* of the occupation or the percentage that will convert next. That is the `gap` recorded in F9 of `01`. It is a gap at the instrument boundary, not a silence: Fig 13 :134 (*"Unreachable is a verdict here, not a silence,"*) and Fig 8 :39 (*"So a search that finds nothing is never a proof of absence."*) apply. The source essay states why: an instrument that reads a result *"cannot comment on the source"*, and *"The answer is unreached until a better instrument exists."*

---

## CONCLUSION

The three options are three different operators. Automation is subtraction, expansion is production inside the reach, and new work is an import that moves the wall, so the third is not an extreme version of the second. The conditions bind in dependency order with the middle link and the carry link the usual breaks, which is why one instrument cannot score all three. Two occupations with the same task atoms but different bonds are isomers under Fig 12 :117; two sharing only a `worker → tool → outcome` pattern are members of one functional group under Fig 12 :124. The operator claim has a written falsifier; the order claim has one; the naming gap is declared rather than filled.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. World sources opened and recorded in `10_source_ledger.csv`. No task-level measurement was used. Mode `specified`.

## FIGURE CENSUS

Fig 3 (dependency order, middle break, instrument absence), Fig 6 (import moves the wall), Fig 8 (residual first, underivable versus unreachable), Fig 9 (union versus partition), Fig 11 (valence relative to residual), Fig 12 (bonds, subtraction, production, isomer, functional group, two currencies), Fig 13 (honest stop), Operators and Symbols tables. Strained after re-census: none. The one earlier strain, reading new work as a mint, was re-census S1 and is logged in `01_figure_grounded_audit.md` section 6.
