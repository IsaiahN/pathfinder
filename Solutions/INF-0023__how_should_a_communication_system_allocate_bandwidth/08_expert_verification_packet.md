# Expert verification packet - the Tether on bandwidth allocation

**What this is:** a claim in a form a communication-system researcher or practicing engineer can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the unbundling, `specified` on the shape, `gap` on the numeric split. Not `grounded`.** No measurement of any channel is claimed. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

The four goods in the question are a union of overlapping conditions, not four shares of one budget. Accuracy and robustness are both correctness claims over different channel states; speed is a rate and energy is an expenditure. So two are bond properties and two are different currencies. The defensible shape is: unbundle the conditions, bind each as a floor an ordinary term can fail, measure the residual per message and per channel state rather than as a fleet average, keep the bits account and the actions account separate, and buy robustness as independence between low-overlap failure paths in proportion to the cost of being wrong. The numeric split is unreached until a channel model and a failure-cost axis are supplied. That omission is recorded as a `gap`, not hidden.

## 2. Three checkable sub-claims

### C1 - framework-internal plus engineering-facing; checkable by reading Figure 9 and the two frontiers

- **Statement:** the question is a union, so one allocation percentage is not derivable from the question alone. The standard frontiers already answer the parts that are in the library (rate distortion for accuracy versus bits, Shannon-Hartley for rate versus bandwidth and power); what is missing is the cost of being wrong.
- **Source, verbatim:** Fig 9 :55 - *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Also Fig 9 :57 - *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* And Fig 8 :39 - *"So a search that finds nothing is never a proof of absence."*
- **Refuter:** exhibit a single measurable quantity, with one anchor, such that improving it improves accuracy, speed, robustness and energy use together, and show the four goods are its four names rather than four overlapping conditions. Or supply a channel model and cost function and close the split with no import.

### C2 - engineering-facing; checkable against any channel with correlated errors

- **Statement:** an averaged quality metric cannot identify the failing slot, and repeated copies over one fading path do not buy independence. Robustness must be bought as low-overlap descriptions or interleaving, priced by the cost of being wrong.
- **Source, verbatim:** Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* Fig 2 :31 - *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Fig 2 :42 - *"Buy independence in proportion to the cost of being wrong."*
- **What to check:** on a burst-error channel, does the chosen redundant scheme spread adjacent errors, or does a single physical event take all copies? Does the reported quality metric expose the worst live slot, or only the mean?
- **Refuter:** show a repetition scheme whose copies remain independent under the actual failure mode, or an aggregated metric that reliably identifies the failing slot under correlated errors. Either kills the claim.

### C3 - framework-internal; checkable by reading Figure 12

- **Statement:** bits and actions are two currencies and cannot be added into one allocation score. Accuracy and robustness are isomers over the shared atoms when robustness adds no new physical path; otherwise they are functional-group relatives.
- **Source, verbatim:** Fig 12 :125 - *"A composition costs in two currencies, and they do not add."* Fig 12 :126 - *"Bits price the description. Actions price finding out whether it holds."* Fig 12 :117 - *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- **Refuter:** exhibit a common physical unit in which all four goods are additive at design level without losing which slot failed; or show the robustness design requires an atom absent from the accuracy design (which kills the isomer form and leaves the functional-group form standing).

## 3. What is explicitly not claimed

- Not a percentage split, and not a new coding theorem.
- Not that the four goods are a partition. The overlap is the hard part.
- Not that repetition is useless, only that it is useless when the copies share the failure mode that matters.
- Not that a committee's agreement settles the split. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- Not `grounded`. No measurement at a receiver is asserted here.
- Not that the four goods map onto the six-term substrate. That mapping was retracted in `01` §5 after the strain test.

## 4. Provenance

- Question: `Questions/Information Theory.txt` line 30, section 3 "Communication and coding", ID INF-0023.
- Figure text: verbatim extract at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, generated from Isaiah's SVGs. Every quotation above is a substring of that file.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Eight essays by Isaiah N, 2026-08 to 2026-11, cited in `05_what_shape_means.md`.
- World sources opened 2026-11-23: rate distortion, Shannon-Hartley, multiple description coding, burst error-correcting codes, finite-time Landauer limit, and Blau and Michaeli 2019. Author, venue, year and quote for each are in `10_source_ledger.csv`. These are secondary corroboration, not the authority.
- This packet compiled 2026-11-23.

## 5. What would settle it

A measurement at the receiver, not a further argument:

1. Per-slot error and latency distributions under each stated channel state, including burst states.
2. Joules per delivered correct bit at the measured operating point, including finite-time cost.
3. The application's failure-cost axis, imported with a source gate from the safety case or service contract.
4. The isomer test: does robustness add a physical atom that accuracy does not?
5. The standing refuters in `01_figure_grounded_audit.md` §3.

## 6. What an expert can check in twenty minutes

1. Read Fig 9 :55-57, Fig 1 :19, Fig 2 :31 and :42, Fig 12 :125-126 and :117. Six short passages.
2. Name one channel you know well. Say which of the four goods are a union there and which, if any, can be collapsed to one anchor.
3. Say whether redundancy on that channel is independent under the actual failure mode, and what instrument would show it.
4. Name the source of the cost of being wrong for that system. If there is none, the `gap` is confirmed.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
