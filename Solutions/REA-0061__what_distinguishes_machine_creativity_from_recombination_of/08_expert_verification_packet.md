# Expert verification packet: what distinguishes machine creativity from recombination

**What this is:** a claim in a form a researcher in machine creativity, computational creativity, or the philosophy of creativity can check. Mode, derivation, and refuters are stated before the conclusion, so the reader knows what to look for and what would settle it.

**Mode: `specified` on the sub-claims, `general` on the structural shape, not `grounded`.** No measurement, benchmark, or field judgment was run for this package. This is a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

Machine creativity and recombination of training patterns are not two kinds of output; the same artifact can be described both ways. What separates them is the route and the settlement, not the product. Recombination is a composition inside a fixed library, where novelty is relative to the library's own atoms. The only operator that expands the library is contact with a frame whose closure differs, and that crossing is licensed by a record of provenance and by the gap it explains. The label "creative" is applied afterwards to that recorded route by a field whose judgment does not change when the generator's own output changes, and it is applied per output case, never as a global score. The framework returns this shape, not a name for a creative ingredient.

## 2. Three checkable sub-claims

### C1 — framework-internal; checkable by reading Figures 6 and 8

- **Statement:** Novelty produced inside a fixed library is novelty relative to that library's atoms, not relative to the world; and a convergent derivation and an adopted import are indistinguishable in the artifact.
- **Source, verbatim:** Fig 6 :21 **"MINT composes inside the closure and can never add an atom."** Fig 6 :22 **"NOVEL means novel relative to atoms, not to the world."** Fig 8 :32 **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."** Fig 8 :50-52 **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."**
- **What to check:** is the quoted text present verbatim, and does a generative model's training corpus play the role of a fixed library in the sense used here?
- **Refuter:** a composition inside a fixed closure that adds an atom; or an artifact-only discriminator that reliably reports the route, with published error rates and low-overlap frames.

### C2 — evaluation-facing; checkable by a creativity researcher against their own field's practice

- **Statement:** The judgment of whether an output is creative is an anchor-like function of a field, and that anchor must not move when the generator's own output changes. A global creativity score loses the per-case signal.
- **Source, verbatim:** Fig 2 :33 **"The anchor must not update."** Fig 2 :36 **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."** Fig 2 :35 **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 1 :19 **"The residual is indexed by object slot, not aggregated."** The world-side analogue, from Csikszentmihalyi's DIFI framework as reported in the *Computational creativity* survey: *"an individual produces works whose novelty and value are assessed by the field, other people in society, providing feedback and ultimately adding the work, now deemed creative, to the domain."*
- **What to check:** in your field's actual evaluation practice, does the judgment of novelty and value stay fixed when the generator changes its output, or does it move with the output? Would a single global creativity score preserve the case-level signal?
- **Refuter:** an anchor that updates on the generator's own output and still settles the verdict; or a global score that provably preserves the per-case live signal.

### C3 — agent-and-habitat; checkable against what changes the verdict

- **Statement:** "Creative" is a label applied afterwards to a lineage that met a ground; capability is a property of the agent together with its habitat, so agent-only improvements do not change the verdict unless they change contact.
- **Source, verbatim:** Fig 11 :36 **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground."** Fig 11 :39 **"And capability is a property of agent-and-habitat, never of the agent alone."** Fig 11 :40 **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** Fig 6 :23 **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
- **What to check:** is there a documented case where scaling or tuning a model alone changed a field's creativity verdict while contact and the route record were held fixed?
- **Refuter:** such a case, demonstrated with a controlled trial. The figure itself names this as the observation that would refute the capability claim.

## 3. What is explicitly not claimed

- Not that machine creativity is a special, non-computable ingredient. The framework returns a shape, not a name (Fig 9 :32: **"you get a kind of thing, never the answer itself."**).
- Not that recombination is inferior. Fig 12 :94 **"The arrangement is the substance."** Fig 12 :117 **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Not that a benchmark score or a model's self-report certifies anything (Fig 1 :27).
- Not that a pool of raters corroborates. Fig 2 :40: agreement from a shared evidence pool is disqualifying for a verdict.
- Not that "novelty relative to human knowledge" is a defect to remove. It is the constitutive anchor (Fig 2 :36).
- Not `grounded`. No measurement was made. This packet is a checkable shape with refuters, not a result.
- Not a definition of creativity, and not a claim about any particular model, system, or benchmark.

## 4. Provenance

- Figure text extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables; local extract at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-23.
- `THE_FORMULA.md`, mode rule and Direction section; `FRAMEWORK/reference/FIGURES_README_canonical.md`; `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- World sources read 2026-11-23: Paul and Stokes, "Creativity", Stanford Encyclopedia of Philosophy, Spring 2024 edition; Wikipedia "Computational creativity" and "Creativity"; Wikipedia "Animal culture"; five essays by Isaiah N on adventuresinml.substack.com (high overlap with the figures).
- This packet compiled 2026-11-23. Every source and its status is in `10_source_ledger.csv`; failed fetches are in `04_links_and_distribution.md`.

## 5. What would settle it

A discriminator and a ground, not a further argument. From *The Hard Problem is About Source*, an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved the case.

1. An artifact-only route discriminator with published error rates (closes C1).
2. An anchor-rigidity test showing the field's judgment does not move with the generator's output (closes C2).
3. A reach test showing that reach expands only on contact with a differing closure, with provenance and a shadow test (closes C3 and the import claim).
4. A controlled agent-only improvement that moves the settlement while contact is fixed (refutes C3).

## 6. What an expert can check in twenty minutes

1. Read Fig 6 :21-23, :25 and Fig 8 :50-52. Four short passages. Confirm the quotes.
2. Check C2 against your own field's evaluation practice: is the judgment of novelty and value anchor-like, or does it track the generator's output?
3. Name one instrument or protocol that would discriminate convergent derivation from adopted import for the cases you know, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement. If you would rather not engage, no reply is needed.

**Status of this packet:** simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
