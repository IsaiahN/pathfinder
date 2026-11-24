# Public links and distribution

All links below were fetched during this run unless the entry says otherwise. Fetch failures are recorded rather than replaced with a page that was not opened.

## Verified links actually fetched

| what | URL | verified content |
|---|---|---|
| Local verbatim figure text | `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local) | 13 figures plus Operators and Symbols tables, one SVG text element per line; all `Fig N :line` citations in this folder come from this file. |
| Canonical figures usage rule | `FRAMEWORK/reference/FIGURES_README_canonical.md` (local) | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also the shape-not-a-name limit and the rule that a contradictory reading has misidentified its domain. |
| THE FORMULA | `FRAMEWORK/figures/THE_FORMULA.md` (local) | Eight-step loop, three guarded questions in step 7, mode rule, and the Direction discipline of binding the sought shape as an ordinary term. |
| Berkes 2007, PNAS, open access | https://pmc.ncbi.nlm.nih.gov/articles/PMC2000555/ | *"Community-based conservation in a globalized world"*, PNAS 104(39):15188-15193, edited by Elinor Ostrom. Full text opened: multilevel commons, plural knowledge systems, deliberation, diagnostics rather than blueprints, and the warning that CBC can become its own panacea. |
| CBD Article 8, in-situ conservation | https://www.cbd.int/convention/articles/?a=cbd-08 | Full treaty text opened; subparagraph (j) on respect, preservation and maintenance of indigenous and local community knowledge, with approval and involvement of holders and equitable benefit sharing. |
| CBD Indigenous Peoples and Local Communities topic | https://www.cbd.int/topic/indigenous-peoples-and-local-communities | Opened; states *"Traditional techniques provide useful models for biodiversity policies"* and links Article 8(j) to knowledge and medicines. |
| IPBES home and contact | https://www.ipbes.net/ and https://www.ipbes.net/contact | Opened; assessment reports include the Global Assessment, the Values Assessment and the Sustainable Use of Wild Species assessment; the contact page publishes institutional general and media channels. |
| Ecology and Society | https://ecologyandsociety.org/ and https://ecologyandsociety.org/submissions/ | Opened; open-access journal since 1997, a journal of integrative science for resilience and sustainability, with public submission and contact links. |
| ICCA Consortium | https://www.iccaconsortium.org/ | Opened; Territories of Life resources, manifesto, registered ICCAs, and a public contact route. |
| Oryx journal home | https://www.cambridge.org/core/journals/oryx | Opened; bimonthly open-access journal of biodiversity conservation and policy, scope explicitly includes social, economic and political issues; public Submit manuscript route. |
| Wikipedia, Community-based conservation | https://en.wikipedia.org/wiki/Community-based_conservation | Opened; history, strategies, ecological and community impacts; records both positive outcomes and pressure displacement and elite capture. Note the page carries an LLM-content maintenance banner, so it is used as a lead to primary literature, not as a decisive witness. |
| Wikipedia, Fortress conservation | https://en.wikipedia.org/wiki/Fortress_conservation | Opened; definition in isolation from human disturbance, displacement estimates, and contested community-versus-state land-rights cases. Note the neutrality dispute banner; used only for the definition and the documented controversy. |
| Wikipedia, Traditional ecological knowledge | https://en.wikipedia.org/wiki/Traditional_ecological_knowledge | Opened; Berkes definition, six facets from Houde, culturally situated rules rather than universals, and the consent and benefit-sharing debate. |
| Wikipedia, Free, prior and informed consent | https://en.wikipedia.org/wiki/Free,_prior_and_informed_consent | Opened; FAO definition of the four terms, UNDRIP Article 10, and the distinction between consultation and consent. |
| Wikipedia, Elinor Ostrom | https://en.wikipedia.org/wiki/Elinor_Ostrom | Opened; design principles for long-enduring common-pool resource institutions and the polycentric proposal. Secondary source used only to corroborate the commons frame. |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Opened; prestige/action separation and the statement that a simulated output is not the testable output. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Opened; metamerism and the claim that a reading cannot identify its source without a discriminating instrument. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Opened; context, subtext and pretext, and the line *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Opened; proximity vocabulary bootstrapping and the shape of an answer as a stopping rule. |

## Fetch failures, kept visible

- `https://www.conservationbiology.org/publications` returned a transport error on 2026-11-23. The society site is still listed in `03_public_contact_points.csv` as an institutional route with a manual-check note; nothing was quoted from it.
- `https://onlinelibrary.wiley.com/journal/15231739` returned HTTP 403 on 2026-11-23. The journal is listed as a venue only, not cited as a source read.
- An earlier attempt at a CBD decision page returned 404; it was replaced with the two CBD pages above, both opened successfully.

## Wider literature that bears on the question

1. **Commons and multilevel governance, the strongest world corroborator.** Berkes 2007 in *PNAS* is low overlap with the framework: it comes from resource management and institutional analysis, not from the Tether essays. Its central claim matches Fig 9's union reading and Fig 8's knowledge surplus: *"The global lens of biodiversity conservation (that it is a global commons) is therefore different from the local lens on biodiversity (local commons for livelihoods). This difference does not mean one perspective is right and the other wrong; it means they can both be correct from different points of view."* It also supplies the warning that community conservation can become *"a panacea itself"*, which matches Fig 4's recording-versus-method rule.
2. **Rights and consent.** The CBD Article 8(j) text and UNDRIP Article 10 as quoted on the FPIC page establish that knowledge use requires approval and involvement, and that relocation requires consent rather than consultation. This is the world-side anchor for the D2 verdict. Overlap with Berkes is moderate, since Berkes cites the Convention; they still count as one governance-and-rights evidence pool, not two independent witnesses.
3. **Traditional ecological knowledge.** The TEK page's Berkes definition and the note that TEK is *"a family of culturally situated rules and practices rooted in specific places"* corroborate Fig 1's per-slot residual and Fig 11's warning against standing lists. It shares the Berkes author pool with point 1, so it is not an independent witness. The Wikipedia pages themselves are tertiary, and two carry maintenance banners; they are used for definitions and leads, not as decisive evidence.
4. **Anthropology of knowledge transfer.** The Decoding Tacit Knowledge essay is framework-author material with maximal overlap with the figures. It is used only for the canonical reading of "shape" in `05`, never as an independent corroborator.
5. No source was cited from a page that was not opened. Where a direct fetch was blocked, the row is marked as a venue or removed, and the failure is stated above.

## Distribution: offer, do not push

- **Fig 4 :22-25:** *"Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion."* Sending the full framework before anyone has described a residual sends a recording. Lead with the shape claim and its refuter.
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A reader who has absorbed the whole framework before being asked for a stage-1 verdict has joined the frame being checked.
- **Fig 9 :27-28:** *"describe it before you go looking, or any frame you pick will seem to fit"* Ask what the reader would expect to see at a site if the shape claim were true, before giving them the article.
- **Fig 2 :40:** *"agreement about the world is worthless when the agreeing frames share an evidence pool"* Do not rank or select recipients by likelihood of agreement. Later agreement is never pooled as corroboration.

**Order in a reply:** (1) the shape claim and its refuter; (2) the question of what the reader would count as a failure, recorded before any theory; (3) only then the links, with the note that the figures, not the summary, are the authority; (4) the formula as a reusable method, with the instruction to write a fresh refuter and state a mode for each new problem.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. The pre-registered refuter in `01` section 4 is the test. Send that, not the conclusion.
