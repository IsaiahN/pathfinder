# Expert verification packet - the Tether on multi-step inference reliability

**What this is:** a claim in a form a reasoning researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the conditions, `general` on the shape. Not `grounded`.** No measurement of chain reliability is claimed. This is a shape and a route, not a result.

**Status:** simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

Reliability is not a property of one step or of the number of steps. It is a property of the chain as a composition with contact: (1) the residual is reported per slot and per link, never averaged into one confidence; (2) the first uninstrumented link is measured, usually the middle link where a system decides what counts as progress; (3) each step is settled against a ground before the next composes over it, because an unsettled remainder compounds through an amplifying chain; (4) progress per handoff is bracket fidelity multiplied by ground pressure; (5) independent frames range against an anchor that does not update; and (6) the checker reads the lineage, not the generator's interior. Sampling more paths and reporting higher confidence are budget filters, not witnesses for the verdict. What remains open is that a chain cannot tell from inside whether its residual stopped because prediction was perfect or because the channel closed.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figure 1 and Figure 3

- **Statement:** reliability attaches to slots and links, not to a global score; and the chain stops at its first uninstrumented link, usually in the middle.
- **Source, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
- **What to check:** does a single final confidence preserve the per-slot failure signal on a labelled set? Is the step-level diagnostic measuring the link where the chain actually breaks, or the link where measurements already exist?
- **Refuter:** a scalar confidence that preserves every per-slot failure signal, or an uninstrumented middle link reliably rescued by compute applied above it. Either breaks C1.

### C2 - framework-internal derivation with a physics-of-composition flavour; checkable by reading Figure 12 and Figure 13

- **Statement:** an unsettled step cannot be safely composed over. Each settled step becomes an atom for the next; an unsettled remainder compounding through an amplifying chain gives chaos.
- **Source, verbatim:** Fig 12 :104 *"A settled molecule becomes an atom for whatever composes over it."* Fig 12 :106 *"Nothing composes over what was never admitted as a part."* Fig 13 :31-32 *"a remainder compounding through a chain that amplifies is chaos"*
- **What to check:** in the system you know, does an explicitly unsettled intermediate degrade the final claim across runs, and does settling it recover the claim? Is the degradation additive or multiplicative? A multiplicative or exponentially growing error is what this claim predicts.
- **Refuter:** an unsettled intermediate composing over many runs with no final degradation, or a degradation that is strictly bounded independently of chain length. Either breaks C2.

### C3 - verification-frame; checkable by reading Figure 2, Figure 7 and Figure 10

- **Statement:** progress per handoff is the product of bracket fidelity and ground pressure; agreement between steps is not evidence; and a checker that can reconstruct the claim cannot verify it.
- **Source, verbatim:** Fig 7 :26 *"Progress per handoff: R = h² × S"*; Fig 7 :37 *"Progress per handoff has two factors. Zero either and the chain runs in place:"*; Fig 7 :36 *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."*; Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*; Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."*
- **What to check:** can bracket fidelity and ground pressure be separately measured in your setting? Does a majority vote from one model fail on a shared systematic error where an independent anchor succeeds? Does denying a checker the generator's interior change its detection rate?
- **Refuter:** final error falling while either factor is zero; or a single-model vote beating an independent pinned anchor on shared systematic error; or a checker with full interior access detecting propagated errors as well as one denied it. Any one breaks C3.

## 3. What is explicitly not claimed

- Not that more steps, more samples or higher confidence make a chain reliable. These are filters for the budget, not witnesses for the verdict (Fig 9 :60).
- Not that a single-confidence report is forbidden. It is forbidden only as the settling signal.
- Not that the framework returns a named method. Fig 9 :32: *"you get a kind of thing, never the answer itself"*; the canonical README says the framework returns *"a shape, not a name"*.
- Not that the world literature is wrong. Process supervision, step-level verification, self-consistency and step-wise diagnosis are treated as secondary corroboration from a different evidence pool, and their overlap is declared in `10_source_ledger.csv`.
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not that a chain can certify its own stop. THE_FORMULA says a perfect prediction and a closed channel look the same from inside the loop.

## 4. Provenance

- Figure text extracted verbatim from `FRAMEWORK\reference\03-FIGURES_TEXT.md`, read this session. All `Fig N :line` references are against that file.
- Formula and mode rule: `FRAMEWORK\figures\THE_FORMULA.md`.
- Canonical usage: `FRAMEWORK\reference\FIGURES_README_canonical.md` and `FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md`.
- Eight essays by Isaiah N, 2026, listed in `05_what_shape_means.md`; four fetched directly this session.
- World sources actually read, with author, venue, year, quote and overlap: `10_source_ledger.csv`.
- Pre-registered refuters: `01_figure_grounded_audit.md` §5, written 2026-11-23 before the world search.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the case was resolved *"not by argument, but by the arrival of a better instrument."* Concretely, for this question:

1. A per-slot residual report that detects failures a final confidence misses on a labelled set.
2. An instrumented middle link that changes reliability where compute above the break does not.
3. A demonstration that settling an intermediate step recovers a final claim that was degraded without settlement.
4. Separate measurements of bracket fidelity and ground pressure at a handoff, with zeroing either stopping progress.
5. An independent pinned anchor that disagrees with a single-model vote on a shared systematic error, and is right.
6. A checker denied the generator's interior whose detection rate differs from one allowed inside.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :22, Fig 3 :19 and :27, Fig 12 :104 and :106, Fig 13 :31-32, Fig 7 :26 and :37, Fig 2 :35, and Fig 10 :42. Eight short passages.
2. Check C2 against your own experience of error propagation in long reasoning traces: is degradation multiplicative with depth, and does an early error corrupt later judgments?
3. Name one instrument that would distinguish "the chain reached the ground" from "the chain drifted coherently" in your setting, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status:** this packet is internally consistent with the verbatim figures and with the cited world sources. That is not the same as being right. One independent ground reading would move it from `candidate`; agreement alone never would.
