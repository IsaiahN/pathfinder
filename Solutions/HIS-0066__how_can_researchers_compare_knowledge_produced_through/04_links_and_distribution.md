# Public links and distribution

Every URL in the tables below was opened on 2026-11-23. What each returned is recorded, so a reader can see what was actually read rather than what was assumed. Failed fetches are recorded too.

## Verified sources used in the derivation

| what | URL | verified content |
|---|---|---|
| Experimenter's regress | https://en.wikipedia.org/wiki/Experimenter%27s_regress | Collins' paradox quoted verbatim: a skilful practice can never make it clear whether a second experiment was done well enough to check a first; published methods omit tacit knowledge that cannot be fully articulated into rules. Also the Hacking/Wikipedia framing: to judge new evidence we rely on theory, and to judge theories we rely on evidence. |
| Experiment in Physics (Stanford Encyclopedia of Philosophy) | https://plato.stanford.edu/entries/physics-experiment/ | First published 1998, substantive revision 2023. Hacking's intervention and independent confirmation; different apparatuses have different backgrounds and systematic errors, so coincidence is unlikely to be an artifact; a list of experimental strategies that give good reasons but do not guarantee correctness; Galison's warning that a design can preclude observation of a phenomenon. |
| External validity | https://en.wikipedia.org/wiki/External_validity | Results generalise or transport to other situations, people, stimuli and times; scholars identify the *scope* of a study; Pearl and Bareinboim derived conditions for re-calibration to a second population; field studies are not by nature high in external validity and laboratory studies not by nature low; qualitative research uses transferability. |
| Triangulation (social science) | https://en.wikipedia.org/wiki/Triangulation_(social_science) | Combining several research methods on the same phenomenon to overcome single-method bias; borrowed from navigational and land surveying, where a point is fixed by convergence of measurements from two distinct points; Denzin's four types (data, investigator, theory, methodological). |
| Tacit knowledge | https://en.wikipedia.org/wiki/Tacit_knowledge | Polanyi's *"we can know more than we can tell"*; tacit knowledge is personal, contextual, distributed across knowing subjects and not easily aggregated; transfer needs extensive personal contact and shared experience; Bessemer's patent could not convey the skill. Also Collins' sapphire-Q case, where replication required collaboration. |
| Field experiment | https://en.wikipedia.org/wiki/Field_experiment | Experiments outside laboratory settings; higher external validity because they simulate real-world occurrences; can act as benchmarks for comparing observational data with experimental results; engineers field-test prototypes to validate earlier laboratory tests; limitations include interference, noncompliance and difficulty of replication. |
| Real world evidence | https://en.wikipedia.org/wiki/Real_world_evidence | Clinical evidence derived from real-world data, from trials and observational studies; comes into play when trials cannot account for the entire patient population; an RWD resource can be fit for some questions but not others (*fitness for purpose*). |
| Naturalistic observation | https://en.wikipedia.org/wiki/Naturalistic_observation | Data collected as they occur in nature without manipulation; more credible because behaviour occurs in a real scenario; can reveal behaviour a laboratory cannot produce; but extraneous variables cannot be controlled, so findings are hard to replicate and generalise. |
| Registered report | https://en.wikipedia.org/wiki/Registered_report | Question, design and analysis peer-reviewed before data are collected; two-stage review with in-principle acceptance; introduced at *Cortex* in 2013; expanded by *Nature* to more fields and research types in 2026. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. Search narrows by proximity and vocabulary; a small descriptive result set gives the general shape of an answer; the finish line is also the starting place; one exits as the author rather than the researcher. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. Several underlying causes can create identical readings; if several paths create the same behaviour, behaviour is a projection with lossy information; an instrument that cannot distinguish sources demonstrates its own inadequacy; the answer is unreached until a better instrument exists. |
| PSA submissions, contact and archive | https://philsci.org/submissions.php ; https://www.philsci.org/contact.php ; https://www.philsci.org/philsci_archive.php | All three fetched. Submissions go through Editorial Manager, double-spaced, 9,500 words maximum, anonymous review; office contact is institutional; PhilSci-Archive is the official free open-access preprint archive of the PSA. |
| Center for Open Science, Registered Reports | https://www.cos.io/initiatives/registered-reports | Fetched. Peer review before results are known; over 300 participating journals; stage 1 protocols can be registered on the OSF Registry; checklist and template protocol available. |
| Nature editorial on Registered Reports | https://www.nature.com/articles/d41586-026-01629-y | Fetched. 27 May 2026. Expansion beyond confirmatory research to studies that gather large amounts of data or compare scientific methods; all results published; exploratory analyses must be labelled and reported separately. |

## Fetches that failed, recorded honestly

| URL | result | what was done instead |
|---|---|---|
| https://journals.sagepub.com/home/mmx | HTTP 403 | Journal existence, scope, publisher and editors verified via Wikipedia; submission route left in `03_public_contact_points.csv` with a note that the automated fetch was blocked. |
| https://journals.sagepub.com/home/fmx | HTTP 403 | *Field Methods* was dropped from the contact list rather than listed as verified. |
| https://osf.io/rr/ | no content returned | Replaced with the COS Registered Reports page and the Wikipedia article, both fetched. |
| https://www.cos.edu/en/RegisteredReports | HTTP 404 | `cos.edu` is College of the Sequoias, not the Center for Open Science. Correct host is `cos.io`, fetched and used. This correction is kept visible. |
| https://hsonline.org/ ; https://observationalstudies.org/ | transport error | Both dropped rather than listed as verified. |
| https://www.degruyter.com/journal/key/jci/html | HTTP 405 | Dropped; causal-inference material taken from the fetched Wikipedia article instead. |
| https://plato.stanford.edu/entries/experiment/ | HTTP 404 | Correct entry is `entries/physics-experiment`, fetched and used. |

## What the wider literature adds, and what it does not decide

- The **experimenter's regress** supplies the circularity objection from sociology of science: a result is correct because the apparatus worked, and the apparatus worked because it gave the correct result. It corroborates Fig 1 :27 (*"A frame cannot score itself with a quantity it also produces"*) from a field with no contact with the framework.
- **External validity and transportability** supply the mechanics of scope, re-calibration and fitness for purpose from statistics and medicine. They corroborate Fig 4 :30 from a different evidence pool. They do not decide the verdict.
- **Triangulation** in social science uses the same word as Fig 2, but with a crucial qualifier: the two measurement points must be distinct. That is Fig 2 :31 in the language of survey methodology.
- **Tacit knowledge and the Bessemer case** corroborate the claim that a record is not the skill, from knowledge management and philosophy of science.
- **Field experiments, naturalistic observation and real-world evidence** give the partial bridges that keep F5 from collapsing into "experiments are worthless". They are the INWARD and OUTWARD instruments of Formula step 7, already returning something.

No world source was cited without being opened. The essays by the framework author share an evidence pool with the figures, so their agreement is expected and carries little independent weight; the ledger records that overlap.

## Distribution: offer, do not push

Figure-grounded rules:

- **Fig 4 :22**: *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the refuter and the shape claim; offer links after.
- **Fig 10 :42**: *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27**: *"describe it before you go looking, or any frame you pick will seem to fit"*: ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 9 :60**: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A venue's prestige chooses where to try; it is not evidence that the comparison holds.
- **Fig 2 :40**: agreement from a shared evidence pool is one witness, not two. Do not pool later agreement as corroboration.

**Recommended order in a reply:** (1) the shape claim and its five refuters; (2) ask what they would count as a failure and record the answer; (3) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1 before stage 2.** Fig 10 :52: *"Bring a characterised residual, never the source."* Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* The recipient checks the output without holding the framework's interior.
2. **Stage 2 is opt-in by construction.** Once a reader has absorbed the theory, their agreement stops being evidence. The stage-1 verdict must be recorded first and never pooled later.
3. **Stage 3 sends a method, which is permitted.** Fig 4 :22 again: the formula is a generator, so giving it away does not give away an answer. The recipient must name their own ground and write their own refuter before running it.

**Hard precondition:** the offer only works if the stage-1 output survives. The one type strain in `01_figure_grounded_audit.md` §6 is named rather than hidden, so a reader can find it without being told.

## Hosting

Nothing is sent by this agent. The expert packet and the email are files for the user to host and send. Prefer a page that lets a recipient decline contact. An opt-in download is closer to the figure's rule than an attachment pushed to a list.
