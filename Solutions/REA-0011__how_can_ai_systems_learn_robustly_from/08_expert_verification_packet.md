# Expert verification packet: the Tether on few-shot robust learning

**What this is:** a claim in a form a researcher in learning or cognition can check. Mode,
derivation and refuters are stated before the conclusion so a reader knows what to look for and what
would settle it.

**Mode: `specified` on the sub-claims, `general` on the structural separations, `gap` on the specific
method. Not `grounded`.** No measurement is claimed. This is a shape and a route, not a result.

**Status:** simulated derivation checked for internal consistency against the figures, not a ground
reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

Data efficiency is first a per-slot support question, so an average few-shot score hides the live
slot. A few examples select among atoms the learner already holds; what crosses in from prior
experience is a head start that makes the next search cheaper, never a replay of one success.
Robustness is a property of learner and habitat, so a benchmark harness proves wiring and not
capability. An absent atom needs a provenanced import, while an unfound atom needs more independent
search, not more data. Agreement inside one evidence pool cannot settle any of this. The framework
does not name the winning architecture; it returns the shape plus refuters written in advance.

## 2. Three checkable sub-claims

### C1 - Framework-internal; checkable by reading Figures 1, 5 and 4

- **Statement:** the residual is indexed per slot, the guards on a new term are a product, and a
  head start is a different bond from a replay.
- **Source, verbatim:** Fig 1 :19, *"The residual is indexed by object slot, not aggregated."* Fig 5
  :33, *"The three guards are a product, not a checklist."* Fig 4 :22, *"Only methods cross up. Only
  head starts come down."*
- **What to check:** does the derivation actually use per-slot residuals, and does it distinguish a
  method that makes the next search cheaper from a stored demonstration replayed once?
- **Refuter:** a learner with zero positive residual on the held-out slot mints a term that the
  ground settles; or a replayed recording makes the next search cheaper in exactly the way a head
  start does, with no method abstracted. Either breaks C1.

### C2 - Learning-science facing; checkable against few-shot results and benchmarks

- **Statement:** robust few-shot generalization is a learner-and-habitat property, so a fixed
  benchmark cannot distinguish wiring from capability.
- **Source, verbatim:** Fig 11 :39, *"So the answerable question is not what intelligence is, but what
  makes a system capable. And capability is a property of agent-and-habitat, never of the agent
  alone."* Fig 11 :70, *"A test harness is a substituted habitat. Which is why a synthetic solve
  proves wiring and never capability."*
- **What to check:** is a few-shot benchmark a substituted habitat? Does a result survive a change
  of distribution with a non-updating ground, or only within the harness? Are independence and
  per-slot reporting actually measured, or is one mean score doing the work?
- **Refuter:** few-shot accuracy holds across a documented habitat substitution while contact is
  unchanged and no atom was imported. That breaks C2.

### C3 - Framework-internal; checkable by reading Figures 6, 8 and 2

- **Statement:** absence and budget are different failures with different remedies, and agreement
  requires independent frames.
- **Source, verbatim:** Fig 6 :27, *"Which is why some unreachability is depth and some is genuine
  absence, and from inside the frame the two look the same."* Fig 8 :39, *"So a search that finds
  nothing is never a proof of absence."* Fig 2 :35, *"Alignment is triangulation, not negotiation. A
  mirror cannot correct you."*
- **What to check:** is the remedy for a failure matched to the diagnosis? If the atom is absent,
  is an import with provenance supplied; if it is unfound, is more independent search supplied? Are
  the checking frames drawn from different evidence pools?
- **Refuter:** adding examples fixes a failure after the required atom was proved absent and no
  import occurred; or a claim supported only by frames with shared evidence predicts an independent
  ground at the same rate. Either breaks C3.

## 3. What is explicitly not claimed

- Not a named method (MAML, Bayesian program learning, a specific prior or architecture). The
  framework returns a shape, not a name, and this packet keeps that slot open.
- Not that more data is useless. The sample count is a budget filter, never a witness for the verdict
  (Fig 9 :60).
- Not that a high few-shot score establishes robustness, or that an average locates a failure.
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not corroborated by the framework essays. They share the figures' author and evidence pool.

## 4. Provenance

- Question: `Questions/reasoning.txt` line 16, section 2, ID REA-0011.
- Figure text extracted verbatim from Isaiah's 13 figures plus the Operators and Symbols tables in
  `FRAMEWORK/reference/03-FIGURES_TEXT.md`, accessed 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, and the public figures
  README at https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md.
- Eight essays, four opened directly on 2026-11-23 and mapped in `05_what_shape_means.md`.
- Eight substantive world sources opened 2026-11-23 and recorded in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*:
an instrument that reads green "cannot comment on the source"; the spectrometer resolved it. Here:

1. Per-slot residual reporting that shows whether a global near-zero `R` hides one live slot.
2. A habitat substitution with a non-updating ground: does `R` stay small, or was it wiring?
3. An atom probe with provenance: was the needed atom held, imported, or absent?
4. An independent frame with a different evidence pool that ranges separately against the ground.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, Fig 4 :22, Fig 5 :33, Fig 11 :39 and :70, Fig 6 :27, Fig 8 :39 and Fig 2 :35.
2. Check C2 against a few-shot benchmark you know: is it a harness, and what would a substitution test show?
3. Name one discriminator that tells a head start from a replayed demonstration, or say why none exists.
4. Send the refutation. A failure is more useful than an endorsement.
