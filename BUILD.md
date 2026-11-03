# Lean Six Sigma Course - Build Instructions

## Curriculum Build

`data/curriculum.json` is the source of truth for the syllabus. Full lesson bodies are written in `data/lessons/<belt>.json`, keyed by lesson ID, and merged into the generated data. After editing either source, regenerate the browser data and SQL seed:

```bash
node scripts/build-curriculum.js
```

Generated files:

- `html/js/curriculum-data.js`
- `sql/scripts/seed_modules.sql`

The site loads the curriculum from `html/js/curriculum-data.js`, so the modules, syllabus, module detail, quizzes, and profile pages stay in sync.

## Resource Template Build

`data/resources.json` is the source of truth for the 12 fillable DMAIC project templates. After editing templates, fields, examples, calculations, or belt requirements, regenerate the browser catalog and SQL seed:

```bash
node scripts/build-resources.js
```

Generated files:

- `html/js/resource-catalog-data.js`
- `sql/scripts/seed_resources.sql`

Do not edit the generated files directly. The build validates template IDs, field keys, table columns, computed fields, examples, phases, belt levels, and icon values.

## Quiz Bank Build

`data/quizzes.json` is the source of truth for the five belt exams. After editing questions, options, correct answers, or explanations, regenerate the browser bank:

```bash
node scripts/build-quizzes.js
```

Generated file: `html/js/quiz-data.js`.

Do not edit the generated file directly. The build validates belt keys, question counts, four options per question, answer indexes, explanation text, duplicate prompts across all banks, and answer-key balance (no option may exceed 40% of a bank with 20 or more questions). The API reads `data/quizzes.json` directly for official server-scored exams.

## Localization Build

English content is translated into Arabic, Hindi, Malayalam, Telugu, German, and French. The translation source is `data/curriculum.json`, `data/lessons/`, `data/quizzes.json`, `data/resources.json`, and `html/i18n/en.json`; the generated content lives in `data/i18n/<code>/` and `html/i18n/<code>.json`.

After changing English source content, run:

```bash
node scripts/translate-content.js
node scripts/validate-localized-data.js
node scripts/build-localized-data.js
```

Options for `translate-content.js`:

- `--lang <code>` - translate one language instead of all targets
- `--force` - ignore the translation cache and retranslate everything

Translations are cached in `data/i18n/.cache/`, so only new or changed strings are sent to the translator. The validator checks that every language keeps the same curriculum, lesson, quiz, resource, and UI structure as English, including IDs, ordering, answer indexes, field keys, and option and column counts. The build then writes:

- `html/js/curriculum-data.<code>.js`
- `html/js/quiz-data.<code>.js`
- `html/js/resource-catalog-data.<code>.js`

Pages load the bundle for the active language through `html/js/data-loader.js`, which runs after `html/js/i18n.js`. To add a language, update the language list in those two scripts and the `TARGETS` arrays in the three localization scripts, then rerun the commands above.

## Flask API Setup

The Stage 4 API provides authentication, progress, saved resource copies, server-scored belt exams, exam-based belt promotion, certificates, and administrator curriculum, template, glossary, learner, exam-result, and CSV-export routes.

1. Install Python 3.10+ and the Microsoft ODBC Driver 18 for SQL Server.
2. Create `backend/.env` from `backend/.env.example` and set `FLASK_SECRET_KEY`.
3. Install dependencies and start the API:

```bash
py -m pip install -r backend/requirements.txt
py backend/run.py
```

Apply the database migrations listed below before starting the API. Full steps,
environment variables, and verification commands are in `backend/SETUP.md`.

## Python Setup

```bash
cd python
pip install -r requirements.txt
python calculators/stats_calculator.py
```

## Java Setup

1. Install Java JDK 17+
2. Install Apache Tomcat 9/10
3. Copy the SQL Server JDBC driver to Tomcat `lib`
4. Compile Java files:

```bash
cd java/src
javac -classpath "../lib/*" -d ../web/WEB-INF/classes com/leansixsigma/**/*.java
```

5. Deploy to Tomcat `webapps`

## SQL Server Setup

1. Install SQL Server Express
2. Open SQL Server Management Studio (SSMS)
3. Run `sql/scripts/schema.sql`
4. Run `sql/migrations/001_backend_foundation.sql`
5. Run `sql/migrations/002_user_resource_client_ids.sql`
6. Run `sql/migrations/003_admin_glossary.sql`
7. Run `sql/scripts/seed_modules.sql`
8. Run `sql/scripts/seed_resources.sql`
9. Configure the connection in `backend/.env`; update `DatabaseConnection.java` only for the Java layer

## HTML/Frontend

Open `html/login.html` in a browser, or serve the `html` folder with a static web server. `index.html` redirects to the login page until a learner signs in or starts the offline demo.

Key pages:

- `index.html` - five-belt path
- `syllabus.html` - complete syllabus and BOK coverage
- `modules.html` - belt and module browser
- `module-detail.html?module=white-1` - module lesson plan
- `calculators.html` - quick statistical calculators
- `statistics.html` - integrated Statistics workbench with worksheet import/export, hypothesis tests, regression, SPC, capability, MSA, DOE, sample-size planning, and distributions
- `quizzes.html` - practice quizzes, official server-scored belt exams, certificate issuance, and a certificate studio for company branding, trainer/manager signatures, authenticity QR codes, and print/PDF output
- `verify.html?id=<verification-id>` - public certificate verification page used by the QR code printed on each certificate
- `resources.html` - fillable DMAIC templates, cheat sheets, and glossary
- `resource-editor.html?template=project-charter` - template editor with examples, calculations, save, and PDF export
- `my-project.html` - saved copies grouped by DMAIC phase
- `login.html` / `profile.html` - default login landing page, local progress, server sync, exam-based belts, and certificate viewing/printing

## Resource Library

The resource library uses:

- `data/resources.json` - template source of truth
- `scripts/build-resources.js` - catalog and SQL seed generator
- `html/js/resource-catalog-data.js` - generated browser catalog
- `html/js/resource-store.js` - belt access, saved-copy CRUD, status, and formatting
- `html/js/resource-library.js` - DMAIC library cards and access bar
- `html/js/resource-editor.js` - generic field/table editor, calculations, save, examples, and print sheet
- `html/js/my-project.js` - saved-copy dashboard
- `html/css/resources.css` - library, editor, project dashboard, and print styles

Saved copies are cached in `localStorage` under `lss_user_resources`, keyed by learner ID, and synced to the Flask API when a learner is signed in. Anonymous learners can fill templates, load examples, and export PDFs, but must sign in to save. Offline demo users can select a belt on the login or profile page. Server accounts start at White and advance only by passing official exams. Templates unlock at or above their `minBelt`. Existing browser copies can be uploaded from the profile page through the idempotent `clientId` migration; belt level is not migrated.

The editor supports `text`, `textarea`, `date`, `select`, `number`, `checklist`, and `table` fields. Table computed columns support `multiply`, `sum`, `percentOfTotal`, and `cumulativePercent`. PDF export uses the browser print dialog and a dedicated print-only sheet.

## Statistics Workbench

The Statistics page is split into three scripts so calculations can be tested independently:

- `html/js/statistics-engine.js` - dependency-free UMD calculation engine (`window.StatsEngine` in the browser, `module.exports` in Node)
- `html/js/statistics.js` - worksheet editing, CSV/paste import/export, menus, forms, results, and chart rendering
- `html/js/statistics-analyses.js` - 32 analysis definitions and their report/chart builders

The page uses Bootstrap 5 and Chart.js from CDNs. Keep `statistics-engine.js` free of DOM dependencies; UI helpers live in `statistics.js` and are exposed through `window.StatsApp`.

## Features

- Five complete belts: White, Yellow, Green, Black, Master Black
- 26 modules and 112 lessons mapped to ASQ, IASSC, and ISO 13053 topics
- Coverage checklist for every belt
- Mini-project and exam plan for every belt
- Belt cheat sheets, glossary, quick calculators, integrated Statistics workbench, and quiz banks
- 12 belt-gated fillable DMAIC templates with examples, calculations, saved copies, and PDF export
- Flask API with bcrypt authentication, server sessions, progress sync, saved-copy sync, server-scored exams, certificates, and administrator management/reporting routes
- Exam-based belt gating with a configurable passing score (`EXAM_PASS_PERCENT`, default `80`)
- Branded certificates with company logo, company name/address, trainer and manager signatures, authenticity QR codes, and print/PDF output
- Offline-first browser fallback with repeat-safe migration of local progress and copies
- Python statistical calculators and Java/SQL LMS foundation
