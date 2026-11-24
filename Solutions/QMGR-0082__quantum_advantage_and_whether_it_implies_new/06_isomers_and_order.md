# Is quantum advantage a new kind, a new arrangement, or a new route?

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading. No
circuit was simulated and no theorem was proved in producing this file.

## RESIDUAL

"New physical principles" is ambiguous between (a) a new *kind* in the physical inventory, (b) a new
*arrangement* of existing kinds that behaves differently, and (c) a new *route* to a result already
available. The three have different tests. This file separates them.

## DOMAIN CENSUS

Atoms held by the physics frame: states and structures of the settled quantum account (Hilbert-space
state, Hamiltonian or channel, measurement, spectrum, gradient, network in the substrate reading).
Bonds held: the seven typed relations and negation (Fig 12, Operators table). Scale: circuit step,
device, complexity class, theory. Anchor: experiment for the physics half, proof or reduction for the
complexity half. Union with the complexity frame, as in `01`, section 1c. Order: settle the output,
then compare routes, then decide whether anything new is owed.

## DERIVATION

### Q1: Are two classically equivalent quantum circuits isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :92-93: **"Symmetry is what decides whether an arrangement is a new thing. Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges."**
- Operators table :30-33: `→` is **"A then B; B needs A to have happened"**, symmetric **"no"**, with the test **"swap them. Does it become a different thing? Yes."**

A circuit is an ordered molecule: the gate set is the atom inventory, the circuit order is the bond.
Two circuits with the **same gate multiset in a different order** generally produce a different output
distribution, because non-commuting gates make the order load-bearing. Under Fig 12 they are
**isomers**: same atoms, different bond, different substance, and the difference is invisible in a
list of gates. That is a real structural result, but it is a result *inside* the quantum closure. It
is emphatically not a new physical kind.

- **Falsifier, written before the run:** if two circuits with the same gate multiset and different
  order always produced the same distribution for every input, the isomer claim fails and the circuits
  would be one term with many spellings. This is checkable on two non-commuting gates and needs no
  new physics. If it fires, Q1 is withdrawn.

### Q2: Circuits connected by transpilation are not isomers, they are convergent routes

- Fig 13 :121-122: **"Different routes can arrive at the same substance."**
- Fig 8 :50-52: **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."**
  The quote continues: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."**

Two compiled circuits that produce the same distribution may differ in every gate and still be one
substance. Their difference is provenance, not physics. Reading them as two substances would be the
flat-formula collapse of Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Actually the collapse is the reverse here: recording only the ingredients hides that the *outcome* is one term.

- **Falsifier:** a verification protocol that distinguishes the two compiled circuits by their output
  statistics alone, with no reference to their descriptions. Then they are different substances and
  the convergence reading is wrong. This is checkable and ordinary.

### Q3: Advantage is a route, a comparison and a subtraction, not a state

- Fig 12 :111-113: **"A vocabulary without bonds can name a state and cannot name a route to one."**
  It continues: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."**
- Fig 12 :106: **"Nothing composes over what was never admitted as a part."**

"Quantum advantage" names three bonds at once: the circuit is a sequence (`→`), the claim "faster
than the classical method" is a comparison (`⋛`), and the resource gap is a subtraction (`−`). Calling
it a *property of the device* collapses all three into a state, which is the flat-formula error Fig 12
names. This is why the domain census in `01` splits the event into device, complexity and theory
slots before any verdict is given.

- **Falsifier:** a complete account of the advantage that states only the final state of the device and
  no comparison class. If such an account were sufficient, the bond analysis would be unnecessary.
  It is not sufficient, because "advantage" is a relational term by definition (world check:
  Aaronson and Chen 2016 define it relative to the classical ECT; Huang et al. 2025/2026 define
  keystone properties that all compare quantum with classical resources).

### Q4: What changes when a quantum computer changes the gate set? An analogue from computability

- World source, read 2026-11-23: Arrighi and Dowek, *The physical Church-Turing thesis and the
  principles of quantum theory*, arXiv:1102.1612 (2011): *"Notoriously, quantum computation shatters
  complexity theory, but is innocuous to computability theory."* Their Gandy-style result ties the
  physical Church-Turing thesis to postulates about physics such as homogeneity of space and time and
  bounded density and velocity of information.
- Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"**

This is the cleanest low-overlap corroboration of F2 and F7. Changing the gate set changes which
*complexity* claims are reachable (shattering complexity theory) while leaving the class of
*computable* functions unchanged (innocuous to computability theory). That is exactly the figure
claim that the level decides what is irreducible. A speedup is a level fact about bonds; it is not a
new atom in the physical inventory.

- **Falsifier:** a physical device that computes a function provably outside Turing computability
  under the same postulates. That would make the analogue fail and would reopen the physics question.
  No source read here supplies such a device; quantum computers do not.

### Q5: The new-dimension test

- World source, read 2026-11-23: Isaiah N, *They're Scanning Books When They Should Be Studying
  Nature* (2026-09-06): *"The real import is not a new term in the existing space. It is a new dimension
  of the space."* And: *"Importing a term extends what can be said; importing an axis extends what can
  be perceived at all, and only the second reaches structure the current primitives cannot represent."*
- Fig 13 :116: **"Six members, and no amount of arranging produces a seventh: a new member would have to be a new kind, and composition only ever rearranges the kinds already held."**

Applying the new-dimension test to the question: does a quantum advantage extend what can be
perceived, or only what can be said or computed? On the evidence read here it extends what can be
computed efficiently. The instrument question (whether entanglement at the complexity frontier
reveals structure the existing primitives cannot represent) remains open and is a different residual:
it is a matter of measurement at the boundary, not of the speedup.

- **Falsifier:** a quantum advantage task whose output is demonstrably not expressible in the
  existing physical vocabulary, rather than merely expensive to compute classically. Then a new axis
  would be owed and the "arrangement only" verdict would fail.

## CONCLUSION

1. Two circuits with the same gates in a different order are **isomers** under Fig 12, a real
   difference inside the quantum closure.
2. Circuits connected by transpilation are **convergent routes**, not different substances. Their
   difference is provenance, and only the record separates convergence from import.
3. The advantage itself is a **route, a comparison and a subtraction**, not a state. Treating it as
   a state commits the flat-formula collapse.
4. The Arrighi and Dowek analogue (complexity shatters, computability does not) is independent,
   low-overlap corroboration of level-relative irreducibility.
5. None of these is a new kind. A new physical principle would have to be a new axis, licensed by a
   deviation at the boundary, not by a speedup.

This rescues what is real in the intuition behind the question: quantum computers do reach
arrangements that were practically unreachable, and irreducibility at the complexity level is a
genuine barrier. It refuses the inference from that barrier to a new physical primitive.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` read 2026-11-23; Fig 12's bond
table read in the Operators table; Arrighi and Dowek 2011 and Isaiah N 2026 fetched 2026-11-23.
No circuit or experiment was run by this derivation.

## FIGURE CENSUS / STRAINED

Fig 12 (isomer, ordered bond, flat formula, plan/goal/progress, recursive level), Fig 13 (convergent
routes, closed set/open arrangements, no seventh), Fig 8 (convergence versus import), Fig 6 (what the
wall is), Operators table (`→` and `⋛`). Strained after re-census: **none**. The apparent tension
between "same substance by convergence" and "isomers are different substances" is resolved by the
outcome test: if the distributions are identical, they are one substance; if the order changes the
distribution, they are isomers. Same gate inventory, different observable, no strain.
