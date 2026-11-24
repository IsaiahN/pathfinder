# Expert verification packet - the Tether on drift detection

**What this is:** a claim in a form a concept-drift researcher or learning theorist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the shape, `general` on the structural invariants. Not `grounded`.** No measurement of a learner is claimed. This is a shape and a route, not a detector.

## 1. The claim, in one paragraph

A learner detects that the environment has invalidated its learning when a residual on a held term persists and does not trend down, measured per tracked slot rather than as a global average, routed into a refusal bin distinct from new conditions, broken bindings and broken mechanisms, and ranged against an anchor that does not update on the learner's own output. What changes is the habitat, not the ground; a decayed channel to the ground produces the same reading and is a different verdict. Independence between checks, not the number of checks, decides whether agreement means anything. No finite search certifies that drift is absent. The framework returns this shape, not an algorithm name or a threshold.

## 2. Three checkable sub-claims

### C1 - per-slot residual plus the persistent-and-flat test (framework-internal, checkable by reading Figures 1 and 5)

- **Statement:** a global error average is not sufficient to detect a live slot, and the invalidation signature is the residual that persists and does not trend down.
- **Source, verbatim:**
  - Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."*
  - Fig 1 :22 - *"Aggregating across slots is how a live signal disappears into an average."*
  - Fig 1 :13 - *"a global R near zero with one live slot residual is a legal state"*
  - Fig 5 :59 - *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"*
  - Fig 5 :60 - *"The selector asks which residual is improving; this asks which one keeps being wrong and is not."*
- **What to check:** is the slot the right unit for your setting, and does the persist-and-not-improve test match what you actually use to decide a model is stale? Note the strain recorded in `04`: ADWIN compares window averages of one scalar, so a stream that has already pooled slots loses the signal before the detector sees it.
- **Refuter:** a learner that detects invalidation as early and as reliably from an aggregate residual as from the per-slot reading, with one slot live and the global residual near zero. Or a persistent, flat residual reliably removed by re-fit with nothing left over.

### C2 - pinned anchor and the habitat/channel split (checkable against evaluation practice)

- **Statement:** the detector must range against a criterion that does not update on the learner; if it does, drift becomes coherent and invisible. Habitat change and channel decay share one residual reading but require different remedies.
- **Source, verbatim:**
  - Fig 2 :33 - *"The anchor must not update."*
  - Fig 2 :34 - *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*
  - Fig 11 :73 - *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."*
  - Fig 10 :24 - *"the ground does not decay, the channel does"*
- **What to check:** in your evaluation protocol, is the label or reward stream a pinned ground or an updating frame? Wikipedia's concept-drift article reports that labels *"typically stabilize toward their ground truth"* after delays, which is the field-side version of this rule. Does your detector distinguish a dead channel from a changed distribution, or does it issue the same alarm for both?
- **Refuter:** a learner whose criterion updates on its own predictions and which detects drift as reliably and as early as one with a pinned anchor under the same change. Or a demonstration that channel decay and habitat change require the same remedy in every case, so the distinction buys nothing.

### C3 - five bins and no certificate of absence (framework-internal plus verification theory)

- **Statement:** new conditions, a broken binding, a broken mechanism and a false held term are separate verdicts; only the last owes a refusal. A finite inside-the-frame search cannot prove no drift is present.
- **Source, verbatim:**
  - Fig 5 :50 - *"AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it."*
  - Fig 5 :53 - *"refuted: a term we hold is wrong; a term is owed that says so"*
  - Fig 8 :39 - *"So a search that finds nothing is never a proof of absence."*
  - Fig 9 :44 - *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*
- **What to check:** does your detection stack collapse re-fit, mint and refuse into one alarm? Does anything in your reporting treat "no detection" as evidence of stability?
- **Refuter:** a case where all four bins issue the same remedy at the ground with no loss. Or a finite procedure that certifies no drift of any shape is present without an external frame.

## 3. What is explicitly not claimed

- Not a detector name. ADWIN, DDM, EDDM, KSWIN, Page-Hinkley and control charts are bindings from the ML frame with their own provenance and their own ground; the figures neither derive nor exclude them. Fig 9 :32: *"you get a kind of thing, never the answer itself."*
- Not a threshold, window length or significance level. Those are preferences until written down and ranged against a ground.
- Not a claim that a global error rate is enough, or that any drift invalidates all prior learning.
- Not a claim that no alarm means no drift.
- Not a simulation of a real learner that has been validated. This packet is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

## 4. Provenance

- Question: `Information Theory.txt` line 83, section 7, ID INF-0068. Scaffold read 2026-11-23.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, extracted verbatim from Isaiah's SVGs. Every `Fig N :line` citation points here.
- Canonical usage rule and formula: local `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`.
- Seat map: local `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- Essays by Isaiah N opened 2026-11-23: *The Hard Problem is About Source* (2026-08-28), *The Library of Babel: Locating The Book of Books* (2026-10-02), *The Recursive Self-Improvement Trap* (2026-11-19).
- Field sources opened 2026-11-23: Gama et al., *A Survey on Concept Drift Adaptation*, ACM Computing Surveys 46(4), 2014, http://eprints.bournemouth.ac.uk/22491/; Wikipedia *Concept drift*; River drift detector documentation, https://riverml.xyz/latest/api/drift/ADWIN/.
- Packet compiled 2026-11-23. No measurement was used, and no source was cited that was not opened.

## 5. What would settle it

A source-discriminating instrument and a pinned anchor, not agreement.

1. Show a per-slot residual record, after re-fit has been tried, against an anchor that does not update, and check whether only the persistent-and-flat cases lead to correct refusals.
2. Test the contact check: can the instrument tell channel decay from habitat change? If not, the isomer claim stays structural.
3. Run the four standing refuters in `01_figure_grounded_audit.md` section 4. Any one firing retracts the corresponding finding.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :13, :19, :22 and Fig 5 :53, :59, :60 (six short passages).
2. Check C1 against your own drift stack: are you reading one pooled scalar, and do you treat persistence rather than magnitude as the refusal trigger?
3. Check C2: name the pin for your ground, and say whether it updates on the model it grades.
4. Check C3: say whether "no alarm" is reported as stability anywhere in your pipeline.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation, internally consistent with the verbatim figure text, not a ground reading. It cannot settle the claim it reports on.
