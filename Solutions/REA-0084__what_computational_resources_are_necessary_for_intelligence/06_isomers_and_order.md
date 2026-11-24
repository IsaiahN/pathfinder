# Supporting derivation: structure, order, and analogues

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The resource question arrives bundled. We need to decide whether it is one question or several, what the order of its parts is, and whether the two readings (budget and contact) stand to each other as isomers or as something weaker. Three questions are owed:

1. Is "computational resources" a partition or a union?
2. What is the order of the cost and limit terms?
3. Are the budget reading and the contact reading isomers under Fig 12's definition?

## DOMAIN CENSUS

Atoms held in D1: space, time, energy (states) and spectrum, gradient, network (structures). Bonds held: seven plus negation. No new primitive is available without import. In D2 the atoms are the habitat actors, conditions, and relations, and the ground, which is not in the library. In D3 the "atoms" are frame-internal metrics (FLOPs, parameters, benchmark scores) that cannot be used as witnesses.

## DERIVATION

### Q1 - Partition or union?

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55-57: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*

"Resources" bundles at least: description cost, action cost, habitat contact, and time. Fig 12 :125: **"A composition costs in two currencies, and they do not add."** The budget lever clears only the region where the description cost binds. It leaves the intersection where settlement cost and contact bind. Fig 9 :57-58: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

**Result:** union, not partition. **Falsifier:** a single lever that clears all four conditions at once, demonstrated against the ground.

### Q2 - What is the order of the cost and limit terms?

The cost terms are not ordered by size but by **which one is checked first**. Fig 5 :34-40 states the guards in the order each becomes checkable: is there anything to explain (before the search), can the term be built from what we have (during), is it actually new (after). Fig 5 :41: **"Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."**

The limit terms are ordered by **which instruction they issue**:

1. Fig 6 :49: *"more search at the same reach: is it in here and unfound?"* Run SEARCHED first, because it is cheapest and the other two assume its answer.
2. Fig 6 :29: *"inward: is our representation adequate to hold it? The instrument extends access."*
3. Fig 6 :30: *"outward: does another frame already hold it? The description travels."*
4. Fig 6 :31: **"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."**

The framework's own step 7 says SEARCHED, then INWARD, then OUTWARD. Applying OUTWARD (import a new primitive) while the problem is budget-limited is the error Fig 8 :43 prices: *"Importing against a budget limit adds an atom that was not needed, and Figure 6 prices a wrong atom above starting from primitives."*

**Falsifier, written before the run:** a case where INWARD and OUTWARD return the same answer for the same reason, so that the prohibition in Fig 6 :31 fails.

### Q3 - Are the budget reading and the contact reading isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

As the field usually writes them, the budget reading has atoms {FLOPs, parameters, data, energy} and the contact reading has atoms {agent, habitat, ground, bonds, import}. They share no atom. They are **not isomers**; they are two different kinds of object. That is why averaging them is not a compromise but a category error.

The stronger version: if both are written over the shared D1 atom set {space, time, energy, spectrum, gradient, network}, differing only in which structure mediates which state pair and which frame holds the import, then they **are** isomers, same atoms, different arrangement, different substance. That is the checkable structural claim worth offering.

- **Verdict:** the weaker (functional-group) reading is `grounded` only in the framework's own terms; the isomer claim is `specified` and unmeasured.
- **Falsifier:** if either reading can be written without an atom the other requires, the isomer claim fails and the different-kinds reading stands.

### Q4 - What is the order of the union?

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"**

A physical ceiling that has been settled by experiment (Landauer, Bérut et al., Lloyd's bounds) is a settled molecule. It can become an atom at the next level of the engineering argument. It is not the same object as the action price of settling a term against a ground in Fig 12 :126. The order is therefore:

```
settle the cost currencies  ->  settle the physical ceilings  ->  compare at the threshold
```

This is a threshold comparison (⋛), not a sum. Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."* An efficiency target is a goal, hence a comparison, and cannot be written by a vocabulary holding only ingredient terms like FLOPs and watts.

**Falsifier:** a settled physical ceiling that cannot serve as an atom in the efficiency comparison, or a demonstration that the comparison is additive in the two currencies (contradicts Fig 12 :129).

## CONCLUSION

The question is a **union**, and the two readings are not isomers as normally stated but can be written as isomers over the shared six-term set. The cost terms are ordered by checkability, not by magnitude. The limit terms are ordered by the instruction they issue, with SEARCHED first. The union is compared at a threshold, not summed. Nothing here needs a new primitive, and nothing here returns a resource number.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` reopened this session. The world sources on physical ceilings are secondary and were opened but do not settle the figure reading. No measurement of capability or efficiency was taken.

## FIGURE CENSUS

Fig 5 (guard order), Fig 6 (SEARCHED / INWARD / OUTWARD, import price), Fig 8 (union surplus, two limits), Fig 9 (union before search, unbundle), Fig 11 (wrong question), Fig 12 (two currencies, isomer, functional group, settled molecule, goal as comparison), Fig 13 (closed set). Strains after re-census: the action price is not the Landauer energy price, and the underivability barrier is not the asymptotic no-last-room limit. Both named, none hidden.
