# Expert verification packet: when do adaptive networks converge?

**What this is:** a claim in a form an adaptive-networks researcher can check. Mode, derivation and
refuters are stated before the conclusion, so a reader knows what to look for and what would settle
it.

**Mode: `specified` on the conditions, `general` on the shape, `gap` on the internal criterion. Not
`grounded`.** No measurement of a particular adaptive network is claimed. This is a simulated
derivation checked for internal consistency against the figures.

## 1. The claim, in one paragraph

An adaptive network is a cycle: node states change, links rewire in response, and the rewired
topology feeds the next state update. Settling is not produced by one lever. It is a union of
conditions that must hold together: a reference that does not update on the network; a loop sign that
closes rather than amplifies; a composed structure that is settled and admitted as a part; a per-slot
measurement that actually returns something; and, under maintenance, continued work. Continual
reorganization has two distinct sources, residual pressure and an internally manufactured gradient.
The framework has no internal convergence criterion: a settled residual and a closed channel look the
same from inside the frame. So "converged" is a `candidate` verdict until an outside instrument
registers against a ground that does not update.

## 2. Three checkable sub-claims

### C1. Framework-internal: a convergence claim requires a non-updating reference and per-slot measurement

- **Statement:** a network that converges against a reference that itself updates on the network has
  converged by coherent drift, not settlement; and a global edge-change rate going to zero is not a
  convergence verdict.
- **Source, verbatim:** Fig 2 :33 "The anchor must not update." Fig 2 :34 "If it does, panel 3 turns
  into panel 1: the anchor becomes another frame, everything drifts together, and the drift is
  coherent, which is why nobody notices." Fig 2 :14-15 "they converge, and what they converge on is
  whoever had the most influence." Fig 1 :19 "The residual is indexed by object slot, not
  aggregated." Fig 1 :13 "a global R near zero with one live slot residual is a legal state." Fig 1
  :22 "Aggregating across slots is how a live signal disappears into an average."
- **Refuter:** exhibit a network correctly called converged while at least one node or link still has
  positive residual that does not trend down; or show a case where settling against a self-updating
  reference is demonstrably settlement rather than coherent drift.

### C2. Cross-discipline: the loop sign and the two time scales decide which regime appears

- **Statement:** the rewiring loop is a cycle whose sign decides whether it closes; the direction of
  the mapping (strong, symmetric coupling gives stable locking; weaker or asymmetric coupling gives
  metastable dwells and escapes) is imported from world sources, not derived from the figure. State
  and topology scales are joined by a lossy transform whose round-trip gap R_T must be measured.
- **Source, verbatim:** Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides
  whether it closes, and a chain cannot close by construction." Fig 13 :31-32 "a remainder compounding
  through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as
  noise." Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by
  dead reckoning: confident about a position nobody checked." World checks: Gross and Blasius (2008)
  report frozen configurations and continually rewiring configurations and the scale-separation
  condition; Tognoli and Kelso (2014) report that "Strong and symmetrical coupling in similar
  components gives rise to stable behavior, whereas weaker coupling, and/or lesser symmetry in the
  components and their coupling gives rise to metastability."
- **What to check:** is the sign convention declared? Is the coupling statement faithful to the
  model being discussed? Is R_T measured rather than assumed zero when a result is transferred from
  the fast state scale to the slow topology scale?
- **Refuter:** a settling cycle with the amplifying sign under the declared convention; or a
  convergence certificate that transfers between scales with R_T measured as zero.

### C3. Framework-internal: no internal criterion separates settlement from a closed channel

- **Statement:** the loop has no convergence criterion of its own. When the global reading stops
  changing, that is either perfect prediction or a closed channel, and the frame cannot tell which.
  This is recorded as `gap`, not silence.
- **Source, verbatim:** `THE_FORMULA.md`, Closure: "No convergence criterion: the loop stops only when
  R stops arriving, which is either a perfect prediction or a closed channel, and from inside those
  look the same." Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence,
  and from inside the frame the two look the same." Fig 10 :24 "the ground does not decay, the channel
  does." Fig 10 :25-26 "stale percepts, dropped transients, saturated metrics, pooled readings."
  Fig 13 :134 "Unreachable is a verdict here, not a silence".
- **Refuter:** a frame that can distinguish, using only its own instruments, a perfect prediction
  from a closed channel. If that is demonstrated, F1 of `01_figure_grounded_audit.md` is false.

## 3. What is explicitly not claimed

- Not a numeric threshold, critical exponent, or stability theorem.
- Not that all continual reorganization is pathological; metastability is a distinct regime.
- Not that a frozen or Nash-equilibrium network is a settled one. "a convention that decides an
  outcome has stopped being one" (Fig 10 :47).
- Not that a simulation proves a real network converges. "A test harness is a substituted habitat.
  Which is why a synthetic solve proves wiring and never capability." (Fig 11 :70)
- Not that maintained structure is ever a solved state. Fig 11 :63: "Which is why a managed ecosystem
  is permanent work rather than a solved state."
- Not `grounded`. Nothing here was settled by an experiment.

## 4. Provenance

- Question: `Questions/complexity science.txt` line 93 (question 76), section 8.
- Figure text extracted verbatim from the 13 figures plus Operators and Symbols tables, read in full
  at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, 2026-11-22.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, read 2026-11-22.
- Eight-step loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, read 2026-11-22.
- World sources S1 to S4 and four essays, each opened 2026-11-22, listed in `10_source_ledger.csv`.
- This packet compiled 2026-11-22. Simulated derivation; no measurement.

## 5. What would settle it

The ground, through a source-discriminating instrument, not a further argument. From *The Hard Problem
is About Source*: an instrument that reads green "cannot comment on the source"; the spectrometer
resolved it. Here:

1. **Per-slot trend test:** does positive residual at every slot trend to zero against a reference
   that does not update, rather than being pooled?
2. **Channel test:** can an outside instrument show the channel is still open when the global reading
   saturates? This is the F1 gap.
3. **Sign intervention:** does flipping the declared sign take a model from locking to metastability?
4. **Manufactured-gradient test:** with that branch off and per-slot residual at zero, does rewiring
   stop?

## 6. What an expert can check in twenty minutes

1. Read Fig 2 :33-34, Fig 1 :19 and :22, Fig 12 :121, Fig 10 :24-26, and the `THE_FORMULA.md`
   Closure sentence. Six short passages.
2. Check C1 against a network you know: was the convergence claim based on a global rate, and was the
   reference moving with the network?
3. Check C2 against the coupling regime of that model: does the sign direction hold, and was R_T
   measured when results moved between scales?
4. Name one instrument that would tell a settled residual from a saturated channel, or say why none
   is possible. That answers the gap.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the
figures, not a ground reading. It cannot settle the question it reports on.
