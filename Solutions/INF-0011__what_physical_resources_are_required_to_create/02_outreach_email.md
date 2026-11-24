# Outreach draft - validate the output first, then decide about the theory

**Use:** one-to-one, or as a cover note attached to a submission through the public venues in
`03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the stage-1 output below survives the reader's check.
If it does not, there is nothing else to look at.

---

**Subject:** Check one output on the cost of erasing a bit before you decide about the theory

> Hi [name],
>
> I have one specific output I would like you to check against what you already know. I am not asking
> you to read a theory first, and I am not asking you to agree with anything. If the output does not
> survive, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** the question "what physical resources do create,
> store, transmit and erase require?" is not one question. Those four operations are not symmetric.
> Erase is many-to-one, so it reduces the number of distinguishable states in a memory; the other
> three can be one-to-one and reversible in principle. From that asymmetry alone, the prediction is
> that only erase carries an unconditional thermodynamic floor. It is paid by spending a free-energy
> gradient and leaving the remainder as heat in a bath. Create, store and transmit have no such
> logical floor; their costs come from noise, finite time and maintenance. Store, specifically, needs
> a bounded region and a barrier large against kT, not an ongoing power supply in the ideal case.
>
> Under the derivation's six-term substrate there is no figure line that prices a reversible
> transmission channel in joules per bit, so that sub-question is reported as a gap, not filled by
> analogy. The figures give the shape of the answer, not the number. I report the kT ln2 bound as a
> result from the published literature with provenance, not as something the derivation produced.
>
> **What I am not claiming:** that Shannon entropy and thermodynamic entropy are the same quantity;
> that the derivation sets the kT ln2 number; that transmission has an erasure-like floor; or that
> the framework has settled anything by measurement. Where the figures are silent I say so.
>
> **What would refute the shape claim:**
> 1. a measurement of logically irreversible reset dissipating below the bound in the quasistatic
>    limit;
> 2. a demonstration that create, store and transmit necessarily dissipate the same per-bit floor
>    as erase in that limit;
> 3. a derivation of the energy or gradient terms from the other five, or a memory cycle that closes
>    with no reset term.
>
> I wrote these down before sending this. If any holds, the ledger is withdrawn. A one-line
> "this fails because..." is more useful to me than agreement. If you would rather not engage, no
> reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my
> summary of them.
> - Verbatim figure text with line numbers (local framework file): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Canonical figures usage rule (local framework file): `FRAMEWORK/reference/FIGURES_README_canonical.md`
> - Landauer 1961, Irreversibility and heat generation in the computing process: https://doi.org/10.1147/rd.53.0183
> - Berut et al. 2012, Experimental verification of Landauer's principle: https://doi.org/10.1038/nature10872
> - Parrondo, Horowitz and Sagawa 2015, Thermodynamics of information: https://www.nature.com/articles/nphys3230
>
> **If you want to use the method:** write down what an answer would look like before you run it,
> keep the operations in separate slots, and state the mode of what you get. A reported failure is
> more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Frames range against the ground separately (Fig 2). |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Written before the run; a falsifier is a design instrument. |
| Mode stated on the output | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| Four slots, no aggregate | Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* |
| Gaps marked, not filled | Fig 9 :32 - *"you get a kind of thing, never the answer itself."* Fig 8 :39 - *"So a search that finds nothing is never a proof of absence."* |
| kT ln2 attributed to literature | Fig 8 :50-52 - convergent derivation and adopted import look identical in the contents; only the record separates them. |
| No request for trust or prestige | Prestige can fund a trial but cannot settle it; only the ground settles it. |
| Offer the method, not a recording | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| One-to-one, opt-in, no bulk | Fig 2 :40 - *"agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 7 :35 - *"Selection between rooms is where the ground votes."* |
