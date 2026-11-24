# Expert verification packet - the Tether on noise versus a rare signal

**What this is:** a claim in a form a detection researcher can check. Mode, derivation and refuters
are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No source-confirming measurement is claimed. This is a shape
and a route, not a detector and not a result.

## 1. The claim, in one paragraph

A receiver cannot distinguish noise from a rare meaningful signal by amplitude or by a tuned
criterion, because both produce residuals and the criterion only allocates a budget between misses
and false alarms. What discriminates them is a conjunction of four conditions, kept separate: the
residual stays indexed per slot and per time, because a rare signal is one live slot in a near-zero
background; a candidate pattern is worth naming only if its description plus what it leaves
unexplained costs less than the raw residual, which ranks candidates but does not prove a source;
the channel to the ground is kept fresh against the four named decay modes (stale percepts, dropped
transients, saturated metrics, pooled readings); and the source is corroborated across frames that
do not share an evidence pool. Noise is the detail the representation's crossing discarded, so the
question is under-specified until the representation and the ground are named. What is offered is
the shape any candidate answer must have, falsifiers written in advance, and the instruments that
would close it.

## 2. Three checkable sub-claims

### C1 - framework-internal and per-slot; checkable by reading Figures 1 and 10

- **Statement:** a global residual hides a rare signal; a live per-slot residual is a legal state; and the named channel-decay modes are exactly how a rare transient is lost.
- **Source, verbatim:** Fig 1 :13 - *"a global R near zero with one live slot residual is a legal state"*; Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."*; Fig 1 :22 - *"Aggregating across slots is how a live signal disappears into an average."*; Fig 10 :24 - *"the ground does not decay, the channel does"*; Fig 10 :25-26 - *"stale percepts, dropped transients,"* and *"saturated metrics, pooled readings"*.
- **Refuter:** a detector that recovers every ground-confirmed rare signal after replacing per-slot residual with the global average and adding no other information; or a channel independently verified fresh, unsaturated, unpooled and transient-preserving that still misses rare signals at the decay-predicted rate.

### C2 - at the boundary with signal detection practice; checkable by a detection researcher

- **Statement:** response bias and sensitivity are separate, and the criterion is a budget filter, never evidence that a source is present. Compressibility ranks which candidate to name; it does not settle source.
- **Source, verbatim:** Fig 9 :60 - *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*; Fig 5 :43 - *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."* Secondary corroboration: detection theory states *"Bias is independent of sensitivity"*; the ROC page states that ROC analysis selects models *"independently from (and prior to specifying) the cost context or the class distribution"*; the Neyman-Pearson page states *"one must not relinquish control over one type of error while calibrating the other."*
- **What to check:** does the claim survive the false-positive paradox, where a low-prevalence target makes false positives outnumber true positives even for an accurate test? Does the MDL inequality used here match the standard two-part code, and is it being used only to rank candidates?
- **Refuter:** a detection rule whose threshold is derived from source existence rather than from the miss/false-alarm cost pair, demonstrated by varying the cost pair freely with no change in decision; or a large, incompressible residual without import that still selects the correct source prospectively across independent trials.

### C3 - framework-internal derivation about source and absence

- **Statement:** one reading cannot name its source, so corroboration must come from a frame with a different evidence pool; and failure to detect is not proof of absence, with underivable and unreachable-at-budget issuing different instructions.
- **Source, verbatim:** Fig 2 :31 - *"Independence, between two frames, is how little they draw on the same evidence."*; Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*; Fig 8 :39 - *"So a search that finds nothing is never a proof of absence."*; Fig 13 :32 - *"the detail a crossing discards reappears above it as noise"*.
- **Refuter:** a closed, enumerated set of physically possible sources each yielding a distinct reading, verified against the ground for every member, so that one reading uniquely identifies its source; or a receiver detecting a genuinely novel signal with no added search, no instrument refinement and no import.

## 3. What is explicitly not claimed

- Not a detector design. No matched filter, threshold value, prior or criterion setting is given.
- Not a theory of everything; no final room. The source of a particular reading stays a compound with its own loop.
- Not a claim that compressibility proves a source. It is a filter that ranks candidates (F2 retraction in `01_figure_grounded_audit.md`).
- Not a claim that d', a likelihood ratio, a p-value or an alarm is the ground. These are instruments, and instruments can be wrong on axes they do not measure.
- Not a claim that receiver agreement or a chorus of identical detectors corroborates anything. Same evidence pool is one witness.
- Not `grounded`. Nothing here is asserted as settled by a source-confirming measurement.
- Not a claim that the framework names which physical source produced a reading. It returns a shape and an instrument gap.

## 4. Provenance

- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session (2026-11-23). Cite as `Fig N :line`.
- `THE_FORMULA.md`, eight-step loop, route-before-mint and the three reachability questions; `THE_SEAT_MAP_Field_Guide_amended.md`, anchor and correlation rules; `FRAMEWORK/reference/FIGURES_README_canonical.md`, canonical usage rule; `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, filter/witness rule.
- Question source: `Questions/Information Theory.txt` line 34, section "3. Communication and coding".
- World sources opened 2026-11-23: Detection theory, Receiver operating characteristic, Base rate fallacy, Minimum description length, Neyman-Pearson lemma (Wikipedia); five essays by Isaiah N (Substack). Full provenance and quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. The framework's metamerism case: a color instrument reads green and *"cannot comment on the source"*; a spectrometer closed it. Here:

1. **Slot test:** an instrument reporting the per-slot residual vector, showing one live slot over a near-zero background rather than a pooled average.
2. **Channel test:** an independent readout verifying transients preserved, metrics unsaturated, readings unpooled and percepts fresh.
3. **Source test:** a second frame with a different closure and no shared evidence pool confirming the same source, or a closed source set with distinct readings for every member.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :13, :19, :22 and Fig 10 :24-26 - four short passages.
2. Check C2 against detection practice: are sensitivity, criterion and cost context really separate in the way claimed, and is the MDL inequality used only as a ranking filter?
3. Name one instrument that would discriminate source rather than reading in your domain, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
