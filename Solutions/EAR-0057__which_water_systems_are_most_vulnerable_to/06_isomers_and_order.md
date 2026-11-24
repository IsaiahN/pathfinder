# Isomers, order and the union: supporting derivation for EAR-0057

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The four conditions are named in the question as a list. That invites two errors: treating the list as a sequence and treating the four as interchangeable spellings of one pressure. This file asks what structure the list actually has: are the four pressures isomers, a functional group, a cycle, or four different bond types over one atom set? And what order, if any, the dependency chain imposes?

## DOMAIN CENSUS

Atoms held for the hydrological instantiation: space (basin or aquifer extent), time (recharge and flow seasonality), energy (head and pumping work), spectrum (quality and availability ordering), gradient (spendable head difference), network (river and aquifer connectivity). Conditions held: warming, extraction, pollution, population growth. Bonds held: the seven plus negation. No new primitive is available without import (Fig 13 :115).

## DERIVATION

### Q1 - One operator or four? FOUR DIFFERENT BONDS

- Operators table: subtraction is *"A with B removed or absent"* (Operators :42-45). Extraction is this bond: water is removed from storage.
- Fig 13 :22 defines the gradient as *"a difference that can be spent"*. Warming changes the spendable difference (less reliable snow and ice storage, higher evaporative loss), so it acts on the gradient, not by subtraction.
- Spectrum is *"ordering, so more and less can be said"* (Fig 13 :20). Pollution collapses the usable ordering: water remains physically present but moves down the quality ordering. This is a change to a structure, not the removal of an operand.
- Operators :49-51 defines comparison as *"a threshold relation between two quantities"*. Population growth raises the threshold against which supply is compared. It is a ⋛ relation, not a subtraction.

⇒ The four conditions are **four different bond types over one atom set**, not four instances of one operator. Fig 12 :46-48: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."* A list that names only the conditions has recorded half of the compound.

**Falsifier (written before this conclusion):** if all four pressures can be written with the same typed bond over the same operands without remainder, Q1 fails and the union can be summed.

### Q2 - Isomers or a functional group? DEPENDS ON THE ATOM SET

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Two readings, kept separate:

1. **Narrow atom set.** If a system is described only by the condition that dominates it (extraction-led basin, warming-led basin), the systems share no atoms except "a water system". By Fig 12 they are not isomers; they are members of a **functional group** (condition acting on a slot) with different qualifiers.
2. **Full shared atom set.** If both systems are written over the full set `{warming, extraction, pollution, population growth}` plus the hydrological substrate, and differ only in which condition binds which slot and with which bond, then they **are** isomers, same atoms, different arrangement, different substance. This is the claim worth testing, because it makes the compound describable rather than merely listable.

**Falsifier:** if two system classes cannot be written over the same full atom set (one requires a condition the other does not), the isomer claim fails and the functional-group reading stands instead.

### Q3 - What order does the dependency chain impose? PARTIAL, NOT A SEQUENCE

Fig 3 :20: **"The chain is ordered by dependency, not by importance."** Fig 13 :75: *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."*

A naive reading makes the four pressures a sequence: warming, then extraction, then pollution, then population. That is a flat chain, and Fig 12 :48 warns that *"A chain is the degenerate case: one bond type, no branching."* The actual dependency is partial:

- the spendable gradient and the recharge regime must be available before an extraction rate can be judged unsustainable (energy and gradient compose a flow, Fig 13 :76);
- extraction lowers the water table and can reverse a gaining stream into a losing one, changing the quality pathway;
- pollution's effect depends on the return-flow cycle that extraction sets up;
- population growth raises the demand threshold against which all three preceding quantities are compared.

So the order is a dependency lattice with a comparison at the top, not a chain. Fig 13 :4-5: *"The two kinds are in lockstep, a crossing is a change of role rather than a step upward, and no member of the pair is senior to the other."* No pressure is senior to another just by being listed first.

**Falsifier:** exhibit a case where the four conditions can be ranked by a single linear order that predicts the compound residual in every basin. That would collapse the lattice to a chain and break Q3.

### Q4 - Cycle and catalyst: why a one-occasion fix fails

- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** Irrigation return flow re-enters the aquifer carrying dissolved salts; in a terminal basin with no outlet the sign is negative and concentration accumulates. A linear water-budget chain cannot represent this closure.
- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** An aquifer's usable storage can behave as a spent part (mined, non-renewable) or a regenerating part (seasonally recharged). Without the lineage nothing in the state description says which. This is why "the same aquifer" can be resilient in one configuration and collapsed in another.

**Falsifier:** show that return-flow salinity and storage renewability are fully determined by the instantaneous state variables with no history term. Then cycle and catalyst add nothing here.

### Q5 - Round trip gap R_T on the hydrological instantiation

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

1. **Sent up (x):** the verbatim figures, chiefly Fig 9 :55-58 (union compound), Fig 11 :43-54 (habitat enumeration and cascade), Fig 13 :22/:24/:76 (gradient, network, flow).
2. **Abstraction (T_A):** the shorthand used in `07_the_tether_answer.md`, namely "spent gradient, coupled network, no export, two currencies, per-system residual".
3. **Concretisation (T_E):** a concrete claim about a named basin, for example that a particular terminal lake is the most vulnerable system.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip down:

- the **identity of the export pathway**, which the figure characterises only in effect terms;
- the **timescale on which the gradient is spent**, which is a measurement, not a shape;
- the **source-discriminating instrument** needed to tell a compound score from a single-pressure score (see `05_what_shape_means.md` section 4).

Conversely, a structure between conditions and system state, and the requirement to enumerate outward, survive cleanly. R_T is recorded qualitatively as the enumerated set of dropped constraints, not measured numerically, because no ground reading was taken. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## CONCLUSION

The four pressures are four different bonds, not one; over the full shared atom set the resulting system classes are a real isomer claim with a stated falsifier, and over the narrow set they are a functional group; their dependency is a lattice ending in a comparison, not a sequence; return-flow salinity and storage renewability are cycle and catalyst properties, so a one-occasion fix cannot be replayed; and the round-trip gap to a named basin is nonzero. This rescues the descriptive part of the question without inventing a seventh primitive, a wall-moving import, or a leaderboard.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the Operators and Symbols tables; the eight essays. No measurement was used.

## FIGURE CENSUS

Fig 3 :20 (dependency order), Fig 4 :30 (round trip), Fig 9 :55-58 (union), Fig 11 :43-54 (habitat, cascade, valence), Fig 12 :46-48/:117/:119/:121/:123 (bond, isomer, catalyst, cycle, functional group), Fig 13 :4-5/:20/:22/:24/:75/:76/:115 (substrate, gradient, network, cross-kind composition). Strains named, not hidden: the full-atom-set condition on the isomer claim and the basin-scale gradient type question S5.
