# Expert verification packet: the Tether on cascading infrastructure failure

**What this is:** a claim in a form a practitioner can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the structural shape, `specified` on the per-domain findings. Not `grounded`.** No dependency graph or outage measurement is claimed here. This is a shape and a method, not a list and not a result.

## 1. The claim, in one paragraph

A defensible answer to "which infrastructure failures could cascade across regions or sectors" cannot be a static catalogue of critical assets. It must be an enumeration of contact links read off the world, extended outward until the residual stops registering, with the value of each node relative to the hazard being asked about, and with the sector/region union unbundled before any single lever is proposed. The effect that matters is typically second or third order, so a one-hop map is aimed at the wrong quantity. Isolation substitutes a habitat rather than removing contact, and introduction is available while exclusion is not. The figures return this shape, not the name; the actual dependency graph is the ground, and until it is read the verdict on "which" is `gap`, not a fabricated list and not a claim that nothing cascades.

## 2. Three checkable sub-claims

### C1 Framework-internal; checkable by reading Figures 11 and 9

- **Statement:** a cascade answer is an enumeration by contact, not a composed list; and the question is a union, so the intersection is its own loop.
- **Source, verbatim:** Fig 11 :43 "The habitat is enumerated, never composed." ; Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." ; Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- **What to check:** are those three lines present verbatim in `FRAMEWORK/reference/03-FIGURES_TEXT.md`, and do they say what the claim says they say?
- **Refuter:** a completed enumeration that misses a real third-order contact link; or a single lever that clears the S ∩ R case; or a partition of the question that leaves no intersection.

### C2 Case-facing; checkable against outage records and network data

- **Statement:** first-order scoping misses the effect that matters, and the propagation is directed with positive feedback, so the answer must include second/third-order links and a cycle, not a chain.
- **Source, verbatim:** Fig 11 :52-53 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." ; Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- **What to check:** in the 2003 Northeast blackout or the Italy 2003 case, did the consequential effects appear at two or more removes from the initiating failure, and did the power/communications interaction form a feedback loop rather than a one-way chain? The public records are linked in §5.
- **Refuter:** a well-documented cascade whose consequential effects are strictly first order; or a cascade whose feedback sign is negative where the claim requires amplification; or symmetric propagation in a domain the census declared directed.

### C3 Framework-internal derivation

- **Statement:** isolation is habitat substitution, not removal of contact; the maintainer can introduce but cannot subtract.
- **Source, verbatim:** Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another." ; Fig 11 :61-62 "The seat’s power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."
- **What to check:** does decoupling a dependent function actually remove the dependency, or does it replace one set of unchosen contacts with another?
- **Refuter:** a demonstrated case where a dependency was genuinely subtracted rather than substituted, with the removed contact absent from the new habitat.

## 3. What is explicitly not claimed

- Not a named list of critical infrastructures, and no asset is intrinsically critical (Fig 11 :49 "An actor’s valence is relative to the residual, not a property it carries.").
- Not a prediction that a specified sector fails in a specified region. The graph has not been read here.
- Not `grounded`. No measurement settles left(R, phi) in this package.
- Not "no failures cascade." `gap` is a limit of the derivation, not a world claim; Fig 8 :39 "So a search that finds nothing is never a proof of absence."
- Not a physical theory of propagation. The bond glyphs are a notation binding from network science, not a figure derivation.
- Not corroborated by an independent second witness. The auditor in `11_audit.md` shares this evidence pool.

## 4. Provenance

- Question: `earth systems.txt` line 110, question 82, section 9 (Human infrastructure, society, and adaptation).
- Figure text extracted verbatim from the 13 figures plus Operators and Symbols tables; local path `FRAMEWORK/reference/03-FIGURES_TEXT.md`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- The eight essays by Isaiah N, 2026; six re-opened this session, two not re-opened and not quoted (see `05_what_shape_means.md`).
- World sources opened 2026-11-22: Buldyrev et al. 2010 (*Nature*), Vespignani 2010 (*Nature*), IPCC AR6 WGII Ch6 2022, "Northeast blackout of 2003" and "Cascading failure" (Wikipedia). All recorded with quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-22. Simulated derivation, not a ground reading.

## 5. What would settle it

1. A completed contact enumeration for a named region, extended to third order, checked against outage records.
2. A lever applied to the S ∩ R case; if it clears the case, C1 fails.
3. A documented first-order-only cascade, or a negative-feedback cascade where C2 requires positive; if found, C2 fails.
4. A genuinely subtracted dependency; if found, C3 fails.

## 6. What an expert can check in twenty minutes

1. Read Fig 11 :43-44, :49, :52-53, :66, :61-62 and Fig 9 :54-58 in the local figure text (six short passages).
2. Check C2 against one blackout case you know: were the consequential effects second or third order, and was there a feedback loop?
3. Name one dependency that was genuinely removed rather than substituted in a mitigation you have seen, or say why none exists.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
