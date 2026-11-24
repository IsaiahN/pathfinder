# Expert verification packet: which Earth-system processes are most poorly represented in global models?

**What this is:** a claim in a form an Earth-system modeller or model evaluator can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the ranking rule, `specified` on the candidate set. Not `grounded`.** No process is asserted as the settled worst. This is a shape and a route, not a result.

---

## 1. The claim, in one paragraph

A global skill score cannot answer which process is worst represented, because the quantity is indexed by process slot and compensation between slots is the ordinary case. The target is the slot whose residual persists and does not trend down, measured against an instrument that does not move when modellers push on it. "Poorly represented" must first be unbundled into four conditions with different remedies: absent from a named model's representable set, present but mis-attached, present but unsettled because no process-level instrument returns a reading, and hidden by compensation elsewhere. Published work makes cloud microphysics and aerosol-cloud interaction, marine ice-sheet dynamics, and permafrost carbon feedback the leading `specified` witnesses, but the figures return a kind of thing, not a name, and no opened source supplies a cross-process per-slot instrument comparison. The cross-process ranking is second-order and must wait for each process residual to be settled.

## 2. Three checkable sub-claims

### C1: The unit of the question is the slot, not the global score

- **Statement:** a near-zero global residual with one live slot residual is a legal state; compensating errors can make a model look right in aggregate while one process remains wrong.
- **Source, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :13 *"a global R near zero with one live slot residual is a legal state"*
- **What to check:** W2 reports six models simulating cloud optical depth response reasonably well through compensating errors while all six underestimated cloud cover response. Is that a real instance of the figure's point, or is the compensation confined to a diagnostic that does not bear on representation quality?
- **Refuter:** exhibit a process ranking derived from a single global metric that agrees slot by slot with an independent per-process instrument comparison. If that holds, Fig 1 does not govern this question.

### C2: The four conditions are distinct, and the candidates share a functional group but are not a named worst

- **Statement:** absent, mis-attached, unsettled and hidden are four conditions with four different remedies; the three candidates are members of the same functional group, not isomers under Fig 12 as usually written.
- **Source, verbatim:** Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :124 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- **What to check:** W1 documents an unsettled process rate; W2 documents mis-attachment and compensation; W5 documents a process addition that changed a projection; W4 documents an uncertain magnitude and timing. Do these four actually issue different instructions for a named model, or do they collapse into one model-development workflow?
- **Refuter:** one measurement protocol that settles all four conditions at once; or a demonstration that one candidate can be removed from a model leaving the other two candidates' residuals and ranking unchanged (which kills the stronger isomer form and leaves the functional group).

### C3: The ranking is second-order and the worst slot lies at an unmeasured link

- **Statement:** each process residual must be settled before it enters a cross-process comparison; the worst slot is predicted at a link with no instrument, not the one with the largest existing error bar.
- **Source, verbatim:** Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 12 :104 *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."* Fig 5 :59 *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"*
- **What to check:** W1 says individual microphysical process rates are difficult to obtain directly and that what can be measured often differs from what schemes need. W2 shows five cloud schemes tuned without reproducing the observed cloud-cover response. Is there a named slot where a dedicated instrument already returns a clean process-level residual while a neighbouring no-instrument slot is settling? If so, C3's location prediction is false.
- **Refuter:** a valid cross-process ranking computed before any individual process residual is settled; or a worst slot that lies above the broken link with a clean process instrument. The operand type of `⋛` at second order is also open: the Operators table calls it *"a threshold relation between two quantities"*, and whether settled residuals count as quantities at that level needs an instrument.

## 3. What is explicitly not claimed

- Not that clouds, ice sheets or permafrost are *the* worst. They are `specified` witnesses with no ground order.
- Not that every global model lacks ice-sheet or permafrost processes. Absence must be established for a named model before import.
- Not that multimodel agreement or spread is a verdict. It is a budget filter (Fig 9 :60).
- Not that description cost and settlement cost add to one "model complexity" number. Fig 12 :125-126 holds them apart.
- Not grounded. No process-level instrument comparison was run, and no model was run.
- Not a claim that the six-term substrate names the processes. It names the shape of the slot.

## 4. Provenance

- Source question: `earth systems.txt` line 124, section 10 Observation, modeling, and decision-making.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim, cited as `Fig N :line`, checked 2026-11-22.
- Method: `FRAMEWORK/figures/THE_FORMULA.md`, steps 2, 3, 5, 7; canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Eight essays by Isaiah N, opened 2026-11-22, recorded in `05_what_shape_means.md` and `10_source_ledger.csv`.
- World sources W1 to W8, opened 2026-11-22, with author, venue, year and quote in `10_source_ledger.csv`.
- Pre-registered refuter in `01_figure_grounded_audit.md` section 3, written before the candidate ranking was fixed.
- This packet compiled 2026-11-22.

## 5. What would settle it

1. **Process-rate discriminator:** an instrument returning individual process rates rather than the net cloud property that is their projection (W1 names laboratory work and new probes as existing edges).
2. **Cloud susceptibility constraint:** the Holuhraun 2014 eruption as used in W2, already returning a process-level reading against which six models fail. INWARD from an instrument that works.
3. **Paleo constraint on ice-sheet processes:** W5's calibration against Last Interglacial and Pliocene sea level is a source gate for importing hydrofracture and ice-cliff failure.
4. **Long soil-carbon record:** W4's strategy for permafrost carbon, including abrupt thaw features.
5. **The five standing falsifiers** in `01` section 3, any one of which withdraws the shape claim.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22 and Fig 3 :27, three short passages.
2. Check C1 against W2's compensating-error result: is the optical depth really right for the wrong reasons?
3. Check C2 against W1, W4 and W5: do the four conditions issue different instructions in your model family?
4. Name one instrument that would return a process-level residual for the slot you think is worst, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
