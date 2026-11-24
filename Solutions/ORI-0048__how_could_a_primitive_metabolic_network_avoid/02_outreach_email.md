# Outreach draft: check the shape before you decide about the framework

**Use:** one to one, or as a cover letter attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the refuter in `01_figure_grounded_audit.md` section 4 survives a first read by someone who knows the field. If the stage-1 output does not survive, there is nothing to show at stage 2.

---

**Subject:** Would this count as a failure of a robustness claim about early metabolic networks?

> Hi [name],
>
> I have one specific output about early metabolic networks that I would like you to check against your own work. I am not asking you to read a theory first, and I am not asking you to agree with anything. If the output fails, there is nothing else to look at.
>
> **The output (`specified`, not `grounded`):** a primitive metabolic network cannot keep its function by holding a fixed list of reactions. What has to stay reachable is the function (self-maintenance, energy harvesting, catalyst regeneration), not the particular reaction. From the framework's structural rules it follows that:
>
> 1. the essential reactions must sit in closing cycles where output re-enters as input, with catalysts that are regenerated rather than spent;
> 2. redundancy is isomeric overlap, meaning different arrangements over the same molecules, so one path can cover another when conditions shift;
> 3. a closed network cannot regenerate a catalyst that is genuinely absent from its food set and its closure; the only repair is an import from outside, such as a mineral surface, an external feed, or another compartment;
> 4. robustness is a property of the network together with its habitat, not of the network alone, so changing conditions is a substituted habitat, and a lab demonstration under one fixed condition set proves wiring, not robustness.
>
> This is a prediction of a **shape**. It names no molecule, no pathway, and no early-Earth setting. Which chemistry occupies the slots is a separate claim that needs a measurement and a provenance record.
>
> **What I am not claiming:** that any particular network actually had this structure, that the rTCA cycle or any other named pathway was the first, or that autocatalytic sets have been demonstrated in a prebiotic setting. Those are bindings from the chemistry frame. Until a source and a shadow test are shown, they carry no evidentiary weight here.
>
> **What would refute the shape claim:**
> 1. a primitive network that keeps self-maintenance across a change while its essential reactions form only open chains whose catalysts are externally replenished;
> 2. a closed reaction system that regenerates a catalyst absent from its initial closure and food set with no external supply;
> 3. robustness carried by a single fixed reaction list under arbitrary habitat substitution, with no functional overlap and no import route;
> 4. the same closing arrangement re-assembling after a full boundary drop with no carried structure at a cost independent of how hard it is to build.
>
> I wrote these down before contacting anyone. If any one holds, I will narrow or retract the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Canonical figure text with line numbers (local): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - The figures and formula (public repository): https://github.com/IsaiahN/tether/tree/general-agent/figures
> - The architecture essay: https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec
> - Two independent checks in the field: https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000872 and https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1000907
>
> **If you want to use the machinery:** the formula is in the figures link. Run it on a network you know well and can check against data. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Output first, theory second | Fig 10 :52 "Bring a characterised residual, never the source." The reader checks the shape without holding the framework's interior. |
| Do not ask for agreement | Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." |
| Pre-registered refuter | A falsifier written before the run is a design instrument (framework seat guide, not a figure line). |
| Mode stated on every claim | THE_FORMULA.md mode rule: "Mode. general · specified · grounded. State which." |
| Function named, reaction not | Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." |
| Import as the only repair | Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 6 :14 "the only operator that moves the wall". |
| Habitat enumerated, not composed | Fig 11 :43 "The habitat is enumerated, never composed." |
| No claim from a synthetic result | Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." |
| Figure glyphs only, no borrowed symbols | The figures define their own operator set; importing another notation would need a source gate and a shadow test (Fig 6 :11-14). |
| Offer the formula as a method | Fig 4 :22 "Only methods cross up. Only head starts come down." A generator can be given away without giving away an answer. |
| Ask the reader to write their own refuter | THE_FORMULA.md "Direction": a frame cannot check the direction of its own question, so the sought-for shape must be made an ordinary term and refused by the same test. |

## The two-stage offer

1. **Stage 1:** the shape claim and its four refuters. Ask what the reader would count as a failure. Record their verdict before showing any theory. Their independence is the only thing they contribute (Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it.").
2. **Stage 2, opt in:** only if they are curious, the three framework links and the two independent papers, with the note that the figures, not the email, are the authority. Later agreement is never pooled as corroboration (Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool").
3. **Stage 3, opt in:** the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.
