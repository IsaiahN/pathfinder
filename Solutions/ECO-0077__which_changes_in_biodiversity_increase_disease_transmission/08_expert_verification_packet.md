# Expert verification packet: the Tether on biodiversity and disease transmission

**What this is:** a claim in a form a disease ecologist, conservation biologist or epidemiologist can
check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look
for and what would settle it.

**Mode: `general` on the shape, `specified` on the mechanism conditions, not `grounded`.** No claim is
made here about a particular pathogen, place or intervention.

## 1. The claim, in one paragraph

A change in biodiversity does not carry its own sign for disease transmission. The sign belongs to
the relation between the change and a named residual: a specific pathogen, host, place and scale.
Therefore the framework refuses a universal list of transmission-increasing or reducing changes and
returns a shape instead. For a named residual, enumerate everything in contact with it (actors,
conditions, relations), follow the cascade outward until it stops mattering, read the sign at the
changed contact link (host density, contact rate, transmissibility per contact, host competence), and
let measured infection in the target host decide. Managers can add actors or substitute habitats but
cannot subtract a habitat. Net effect patterns are filters for where to look; component measurements
are the witnesses. Four refuters were written before this packet was compiled.

## 2. Three checkable sub-claims

### C1: framework-internal; checkable by reading Figures 1, 9 and 11

- **Statement:** valence is relative to the residual, so no standing list of good or bad biodiversity
  changes survives a change of residual. The aggregate "biodiversity change" is the wrong slot.
- **Source, verbatim:**
  - Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
  - Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so
    mutualism and parasitism are relations rather than kinds."*
  - Fig 11 :51: *"No standing list of good actors survives a change of residual."*
  - Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
  - Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
- **Refuter:** one aggregate diversity metric predicts transmission sign across independently chosen
  pathogen systems with high out-of-sample accuracy and no interaction terms; or the same actor holds
  the same valence for two pathogens in one habitat at one scale.

### C2: ecology-facing; checkable against a system the reader knows

- **Statement:** sign is read at enumerated contact links, and contact cascades run outward beyond
  direct contact. This is why a shared substructure can yield either dilution or amplification.
- **Source, verbatim:**
  - Fig 11 :43: *"The habitat is enumerated, never composed."*
  - Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those,
    and outward until the cascade stops mattering."*
  - Fig 11 :52-53: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached
    the eagles: first-order enumeration, second-order effect, and the residual that mattered was three
    steps out."*
  - Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says
    what kind; the qualifier says which member."*
- **What to check:** in a system you know, list the direct contacts for one pathogen, then the
  second- and third-order links. Did the sign follow a component (host density, contact rate,
  transmissibility, competence), or did it follow the species count? Did dilution and amplification
  arise from one substructure with different qualifiers? Luis et al. 2018 (PNAS, opened 2026-11-23)
  is a worked example of both net signs in one system; Keeling and Eames 2005 (J R Soc Interface,
  opened) is the network-structure precedent.
- **Refuter:** a first-order enumeration predicts the sign as well as the full cascade enumeration
  across systems; or two communities with identical ingredients but different relations show
  identical transmission for the same pathogen at the same scale.

### C3: management-facing; checkable against intervention practice

- **Statement:** introduction is available and exclusion is not; isolation substitutes a habitat and
  inherits actors; management is permanent work. An intervention that skips enumeration is the named
  failure mode.
- **Source, verbatim:**
  - Fig 11 :61-62: *"The seat's power is asymmetric. Introduction is available; exclusion is not. You
    can add an actor and you cannot subtract the habitat, because contact is a fact about the world
    and does not consult you."*
  - Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for
    another."*
  - Fig 11 :65: *"Introducing an actor for its cascade is ecosystem engineering, after Jones, Lawton
    and Shachak, 1994. Cane toads and kudzu are the same move with the cascade unenumerated."*
- **What to check:** pick a real restoration, rewilding or vector-control intervention. Identify what
  was added, what was substituted, which actors were inherited, and what monitoring is still
  required. Silk et al. 2019 (Phil Trans R Soc B, opened) documents culling-induced network changes
  that worsened spread, an instance of the failure mode.
- **Refuter:** a habitat contact is removed outright with no substitution and no continuing work and
  disease risk falls accordingly; or a one-off intervention with an unenumerated cascade reliably
  improves outcomes across systems.

## 3. What is explicitly not claimed

- Not that biodiversity always protects health or always harms it.
- Not a universal list of good or bad biodiversity changes. That is the question the framework
  refuses as written, and the refusal is a verdict, not a silence.
- Not that any named species or habitat type is universally protective.
- Not that a single diversity index is sufficient. It averages the slots.
- Not that this packet is `grounded`. It is a simulated derivation checked for internal consistency
  against the figures; it cannot settle any particular system.
- Not that agreement among the cited sources is corroboration. Most share the disease-ecology
  evidence pool (Fig 2 :40).

## 4. Provenance

- Residual and source line: `Questions/ecology.txt` line 94, question 77, section 8.
- Figure text: local verbatim extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`,
  read 2026-11-23. Canonical usage rule: local `FIGURES_README_canonical.md`. Loop and mode rule:
  local `FRAMEWORK/figures/THE_FORMULA.md`.
- World sources, all opened 2026-11-23 with author, venue, year and quote in
  `10_source_ledger.csv`: Keesing et al. 2010 Nature; Luis et al. 2018 PNAS; Salkeld et al. 2013
  Ecology Letters; Chen and McFarlane 2025 Ecology and Evolution; Hopkins et al. 2022 Lancet
  Planetary Health; Keeling and Eames 2005 J R Soc Interface; Silk et al. 2019 Phil Trans R Soc B;
  Cary Institute dilution-effect project page.
- Essays read 2026-11-23: *The Library of Babel* and *The Recursive Self-Improvement Trap*, both by
  Isaiah N (adventuresinml Substack), used in `05_what_shape_means.md`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating measurement for a named residual, not a further argument. Specifically:

1. Does the sign predicted by the enumerated contact cascade match measured infection in the target
   host after the change? Fig 2 :29: *"An anchor is whatever settles the question and does not
   change its answer because of what any frame thinks."*
2. Does one aggregate diversity metric predict the sign out of sample across independent pathogens?
   If yes, C1 fails.
3. Does the same actor hold the same valence for two pathogens in one habitat and scale? If yes, C1
   fails.
4. Can a habitat contact be subtracted outright with no substitution and no ongoing work? If yes, C3
   fails.
5. Does first-order enumeration suffice where a third-order cascade was expected? If yes, C2 loses a
   step.

## 6. What an expert can check in twenty minutes

1. Read Fig 11 :43-44, :49-51, :52-53, :61-62, :65-69. Six short passages.
2. On a pathogen you know, name the residual and list the direct contacts. Ask yourself whether a
   third-order link could dominate. Two minutes of this is more useful than reading the framework.
3. Check C2 against Luis et al. 2018 or a system you have measured: did the net sign follow one
   component or several opposing ones?
4. Name one intervention where exclusion was assumed but a habitat was actually substituted.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the
figures, not a ground reading. It cannot settle the claim it reports on.
