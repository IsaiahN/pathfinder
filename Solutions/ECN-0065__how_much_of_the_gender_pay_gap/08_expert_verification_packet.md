# Expert verification packet: the Tether on the gender pay gap decomposition

**What this is:** a claim in a form a labor economist or gender researcher can check. Mode, derivation, and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the substantive claims, `general` on the structural shape, not `grounded`.** No new measurement is claimed. This is a shape and a route, not a result.

**Status:** simulated derivation, internally consistent with the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

The question "how much of the gender pay gap reflects occupation and hours, and how much reflects discrimination and unequal caregiving?" asks for a partition of one aggregate number into four causes. The derivation says the four conditions form a **union of overlapping conditions** with a shared fraction that cannot be assigned, not a partition with additive shares. It says the residual must remain indexed per worker-slot, because aggregation removes the signal that says where to look. It says "discrimination" is not a domain until an instrument makes differential treatment readable, since otherwise it is the unexplained remainder of the model. It says a variance share is a filter for the budget, never a witness for a cause, and that a universal percentage is `gap`. Verdicts per condition are kept separate and never averaged.

## 2. Three checkable sub-claims

### C1 - framework-internal, checkable by reading Figures 1 and 9

- **Statement:** the residual is per worker-slot; the four conditions form a union with an unassignable shared fraction. A case in four conditions is a specific compound, not a mixture of four percentages.
- **Source, verbatim:** Fig 1 :19 - "The residual is indexed by object slot, not aggregated." Fig 1 :22 - "Aggregating across slots is how a live signal disappears into an average." Fig 9 :55 - "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 - "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."
- **What to check:** is the union claim a valid reading of those lines, given that the four conditions overlap on every worker-slot? A second, low-overlap source: the *Stanford Encyclopedia of Philosophy* entry on Simpson's Paradox reports that in the Berkeley case "women were more likely to apply to departments with lower acceptance rates", which produces partition reversals.
- **Refuter:** exhibit a decomposition whose per-condition shares are invariant to adding an overlapping condition and to changing the reference category, with an assignable shared part. If that holds, C1 is false.

### C2 - labor-economics facing, checkable against the four literatures

- **Statement:** occupation, hours, and caregiving are contact-changing conditions with residual-relative valence, and discrimination is admitted only with an instrument. The cited readings report different things: Blau and Kahn (2017) write that "women's work force interruptions and shorter hours remain significant in high-skilled occupations"; Goldin (2014) writes that the pay gap "might vanish altogether if firms did not have an incentive to disproportionately reward individuals who labored long hours and worked particular hours"; Kleven, Landais and Søgaard (2018) report a child gap "driven in roughly equal proportions by labor force participation, hours of work, and wage rates"; Bertrand and Mullainathan (2004) report that "White names receive 50 percent more callbacks for interviews" (a race audit, method analogue only).
- **Figure basis:** Fig 11 :40 - "An improvement that does not change contact changes nothing, however much it improves." Fig 11 :49 - "An actor's valence is relative to the residual, not a property it carries." Fig 3 :27 - "A link with no instrument is not a link that works. It is a link nobody has looked at."
- **What to check:** are those characterizations faithful to the literatures? Is there a gender-specific instrument class the packet has missed? Does the race audit license only the method claim, or more?
- **Refuter:** show that one of the three conditions leaves pay contact unchanged where the measured gap moves, or show that the unexplained remainder is invariant to a change of model controls and is therefore a reading of a source rather than a symptom.

### C3 - framework-internal derivation on additivity and the stop

- **Statement:** the four shares have different currencies and cannot be summed in a figure-supplied common currency. A universal percentage is a declared `gap`, unreachable at this budget rather than underivable in principle.
- **Source, verbatim:** Fig 12 :125 - "A composition costs in two currencies, and they do not add." Fig 12 :130 - "Summing them into one figure is the error this names, not the fix for it." Fig 13 :134 - "Unreachable is a verdict here, not a silence". Fig 9 :60 - "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- **What to check:** is the extension from the figure's bits-versus-actions case to four causal currencies an honest analogue? The packet labels it `specified` by analogy and single-source (strain S3). Does the `gap` verdict distinguish the two kinds of unreachability as Fig 8 :40-43 requires?
- **Refuter:** supply a common currency in which the four effects are commensurable by definition, or publish a stable universal percentage that replicates across non-overlapping instruments and survives an added condition. Either fires the falsifier in `01` section 4.

## 3. What is explicitly not claimed

- Not a percentage, a range of percentages, or a new decomposition method.
- Not that occupation and hours are "real" while discrimination and caregiving are not. Both halves contain real conditions and form a union.
- Not that discrimination is absent. It is conditional on an instrument.
- Not that the figures measure a wage gap. They constrain shape; the pay record is the ground for magnitude.
- Not that caregiving is a fixed property of a person or a universal constant. The Danish child-penalty share moved from about 40 percent in 1980 to about 80 percent in 2013.
- Not a theory of everything, not a final room, not `grounded`.
- Not AI-authored human scholarship. This is a simulated derivation; the AI provenance must be disclosed on any submission (see `04`).

## 4. Provenance

- Question: `economics questions.txt` line 87, ECN-0065, section 7 (Labor markets and employment).
- Figure text extracted verbatim from the 13 figures plus the Operators and Symbols tables: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`; metalaw note: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`; mode rule: `FRAMEWORK/figures/THE_FORMULA.md`; seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- Eight essays by Isaiah N, 2026, opened 2026-11-23 and listed in `05_what_shape_means.md`.
- World sources actually opened: Goldin 2014 (*AER*), Blau and Kahn 2017 (*JEL*), Kleven et al. 2018 (NBER WP 24219), Bertrand and Mullainathan 2004 (*AER*), Fortin et al. 2010 (NBER WP 16045), the 2023 Nobel press release, the Simpson's Paradox entry (SEP), the attribution and parental-investment entries (Wikipedia), UN Women. All are in `10_source_ledger.csv` with author, venue, year, accessed date, and a quote.
- Pre-registered refuter: `01_figure_grounded_audit.md` section 4, written before the conclusion.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; the spectrometer resolved it. Concretely:

1. A randomized or blind treatment that returns a differential-treatment reading independent of the earnings model's controls (admits D3).
2. An event-dated care change whose channels can be removed one at a time and measured separately (tests the union).
3. A decomposition whose shares survive a fifth overlapping condition (tests the partition).
4. A replicated universal percentage across non-overlapping instruments (tests the `gap`).

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :22, Fig 9 :55 and :57, Fig 3 :27, Fig 12 :125, and Fig 13 :134. Six short passages.
2. Check C2 against your own knowledge: is any of the four characterizations unfaithful? Name one.
3. Name one instrument that would discriminate differential treatment from a care-driven hours reduction at the same worker-slot, or say why none exists.
4. Try to break the union claim by adding a fifth overlapping condition. Report whether the shares move.
5. Send the refutation. A failure is more useful than an endorsement. Record the verdict before reading any framework material beyond the six passages above.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on. A reply is a conversation, never corroboration (Fig 2 :40).
