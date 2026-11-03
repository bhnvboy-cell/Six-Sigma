# Lean Six Sigma Training Course

A complete five-belt Lean Six Sigma learning website built with HTML/CSS/JavaScript, a Python Flask API, Java, Python analytics, and SQL Server Express.

The curriculum is aligned to the ASQ, IASSC, and ISO 13053 Bodies of Knowledge.

## At a Glance

| Belt | Modules | Lessons | Study time |
| --- | ---: | ---: | --- |
| White Belt | 2 | 9 | 6-8 hours |
| Yellow Belt | 5 | 16 | 15-20 hours |
| Green Belt | 6 | 27 | 40-60 hours |
| Black Belt | 7 | 38 | 80-100 hours |
| Master Black Belt | 6 | 22 | 60-80 hours |
| **Total** | **26** | **112** | |

The course also includes 12 belt-gated DMAIC project templates, a saved-project workspace, and a 32-analysis Statistics workbench.

## Website Pages

- `html/index.html` - home page and five-belt certification path
- `html/modules.html` - all belts, modules, lesson agendas, coverage checklists, mini-projects, and exams
- `html/syllabus.html` - full print-friendly syllabus with BOK coverage tables
- `html/module-detail.html?module=green-2` - module detail, lesson plan, and coverage
- `html/calculators.html` - descriptive statistics, Cp/Cpk, DPMO/sigma level, and takt time
- `html/statistics.html` - integrated Statistics workbench with editable worksheets, hypothesis tests, regression, control charts, capability, Gage R&R, DOE, sample-size planning, and distribution tools
- `html/quizzes.html` - quiz bank for each belt with explanations; all five Belt exams are complete at 25, 40, 60, 100, and 100 questions, and earned certificates can be branded with a company logo, name, address, trainer, and manager before printing
- `html/resources.html` - 12 fillable DMAIC templates, belt cheat sheets, and glossary
- `html/resource-editor.html?template=fmea` - fillable template editor with examples, calculations, save, and PDF export
- `html/my-project.html` - saved project copies grouped by DMAIC phase
- `html/login.html` / `html/profile.html` - server login (the default landing page), progress sync, browser-data migration, exam-based belts, and certificates
- `html/verify.html?id=<verification-id>` - public certificate verification page opened by scanning the QR code printed on a certificate
- `html/admin.html` - administrator dashboard for learners, exam marks, and sign-in activity (with CSV export)

## Languages

The interface and course content are available in English, Arabic (right-to-left), Hindi, Malayalam, Telugu, German, and French. A language switcher appears in the navigation bar; the choice is stored in `localStorage` and can also be forced with `?lang=ar`.

- `html/js/i18n.js` - language detection, `data-i18n` binding, navigation translation, RTL Bootstrap swap, and the switcher
- `html/js/data-loader.js` - loads the translated curriculum, quiz, and resource bundles for the active language
- `html/i18n/en.json` - canonical English strings
- `html/i18n/<code>.json` - UI translations for each language
- `html/css/i18n.css` - Arabic/Indic fonts and right-to-left layout fixes
- `data/i18n/<code>/` - translated curriculum, lessons, quizzes, and resources
- `html/js/curriculum-data.<code>.js`, `html/js/quiz-data.<code>.js`, `html/js/resource-catalog-data.<code>.js` - generated localized browser bundles

Lesson, quiz, and template content is translated from the English source files. Untranslated UI keys fall back to English. To add a language:

1. Add its code to `TARGETS` in `scripts/translate-content.js`, `scripts/validate-localized-data.js`, and `scripts/build-localized-data.js`.
2. Add the language to `LANGUAGES` in `html/js/i18n.js` with `available: true` (and a `FONT_URLS` entry if it needs a web font).
3. Run `node scripts/translate-content.js --lang <code>` to generate `data/i18n/<code>/` and `html/i18n/<code>.json`.
4. Run `node scripts/validate-localized-data.js` and then `node scripts/build-localized-data.js`.

## Statistics Workbench

`html/statistics.html` is an in-browser analysis application with an editable worksheet, CSV import/export, paste/import support, and 32 analyses across descriptive statistics, hypothesis tests, regression, SPC, capability, Gage R&R, DOE, sample-size planning, and probability distributions. Four example datasets cover bottling, measurement systems, designed experiments, and service surveys.

All calculations run locally; no worksheet data is sent to a server. The workbench uses:

- `html/js/statistics-engine.js` - dependency-free calculations
- `html/js/statistics.js` - worksheet editing, import/export, menus, forms, and charts
- `html/js/statistics-analyses.js` - analysis definitions and report builders

## Resource Library

`data/resources.json` defines 12 fillable project templates grouped by DMAIC phase, with field definitions, completed examples, table calculations, and belt requirements.

| Belt level | Resource access |
| --- | --- |
| White Belt | Project Charter, SIPOC, and 5 Whys (3 templates) |
| Yellow Belt | Adds VOC Sheet, Data Collection Plan, Fishbone Diagram, and Pareto Analysis (7 total) |
| Green Belt and above | Adds CTQ Tree, FMEA, Solution Matrix, Control Plan, and Project Closure (12 total) |

Templates support text, textarea, date, select, number, checklist, and table fields. Table calculations include:

- FMEA risk priority number from severity, occurrence, and detection
- Solution-matrix totals across impact, feasibility, cost, and risk
- Pareto percentage share and cumulative percentage

### Resource Workflow

1. Open `html/resources.html` and choose an unlocked template.
2. Fill the template or select **Load example** to review a completed sample.
3. Sign in, name the copy, and select **Save copy**.
4. Open **My Project** to resume, export, or delete saved copies.
5. Select **Export PDF** to open a print-ready sheet for the browser's Save as PDF option.

The front-end library runs without a server and stores copies in `localStorage` under `lss_user_resources`, keyed by learner ID. Signed-in learners also sync copies to the Flask API and SQL Server; the browser copy remains as an offline fallback. Anonymous learners can fill templates, load examples, and export PDFs, but must sign in to save. The offline demo lets you select a belt level; server accounts start at White and advance by passing official exams.

The aligned SQL Server tables are `Resources` and `UserResources`. Existing browser copies can be uploaded from the profile page, and migration is repeat-safe by `ClientId`.

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Chart.js
- **API**: Python 3.10+, Flask, bcrypt sessions, Flask-CORS, pyodbc
- **Backend foundation**: Java 17+, Servlets/JSP, JDBC
- **Analytics**: Python 3.9+, pandas, numpy, scipy, matplotlib, seaborn
- **Database**: Microsoft SQL Server Express / T-SQL
- **Local persistence**: browser `localStorage` as the offline fallback

## Project Structure

```text
.
├── data/
│   ├── curriculum.json        Curriculum source of truth
│   ├── lessons/               Full lesson bodies by belt
│   ├── quizzes.json           Exam question bank
│   ├── resources.json         Project template source of truth
│   └── i18n/                  Translated curriculum, lessons, quizzes, and resources
├── backend/                   Flask REST API (auth, progress, resources, exams, certificates)
│   ├── blueprints/
│   ├── API.md
│   └── SETUP.md
├── html/                      Static website
│   ├── css/
│   ├── i18n/                  UI translation catalogs
│   ├── js/
│   └── *.html
├── java/                      Java web application foundation
├── python/                    Statistical calculator scripts
├── scripts/                   Curriculum, resource, quiz, and localization build scripts
├── sql/scripts/               Schema and generated seed scripts
├── sql/migrations/            Additive database migrations
├── BUILD.md                   Detailed build instructions
└── README.md
```

## Data Sources and Generated Files

`data/curriculum.json` is the source of truth for belts, modules, lesson plans, coverage checklists, projects, exams, and cheat sheets. Full lesson bodies live in `data/lessons/<belt>.json` and are merged by lesson ID at build time. The exam question bank lives in `data/quizzes.json` and is validated into `html/js/quiz-data.js` by `scripts/build-quizzes.js`.

After editing curriculum or lesson data, regenerate the browser data and SQL seed:

```bash
node scripts/build-curriculum.js
```

Generated files:

- `html/js/curriculum-data.js`
- `sql/scripts/seed_modules.sql`

After editing project templates, regenerate the resource catalog and SQL seed:

```bash
node scripts/build-resources.js
```

Generated files:

- `html/js/resource-catalog-data.js`
- `sql/scripts/seed_resources.sql`

Do not edit generated files directly. The resource build validates template IDs, field types, table columns, computed fields, examples, phases, belt levels, and icon values.

After changing English source content, refresh the translations, validate their structure, and regenerate the localized browser bundles:

```bash
node scripts/translate-content.js
node scripts/validate-localized-data.js
node scripts/build-localized-data.js
```

Generated files (for each language in `ar`, `hi`, `ml`, `te`, `de`, and `fr`):

- `html/js/curriculum-data.<code>.js`
- `html/js/quiz-data.<code>.js`
- `html/js/resource-catalog-data.<code>.js`

`scripts/translate-content.js` caches translations in `data/i18n/.cache/` and only translates new strings; pass `--lang <code>` for one language or `--force` to retranslate everything.

## Getting Started

### Web Frontend

Open `html/login.html` in a browser, or serve the `html` folder with any static web server. The home page redirects to the login page until a learner signs in or starts the offline demo.

The static site works without the API. When the Flask API is unavailable, login, progress, offline belt selection, and saved resource copies fall back to the browser. Official exams and certificates require the API.

### Flask API

The API provides bcrypt authentication with HTTP-only sessions, lesson and module progress, saved project copies, idempotent browser-data migration, server-scored belt exams, exam-based belt promotion, certificates, and administrator routes for lessons, questions, templates, glossary terms, curriculum import, learner reports, exam results, and CSV export. It needs Python 3.10+, SQL Server Express, and the Microsoft ODBC Driver 18.

```bash
py -m pip install -r backend/requirements.txt
py backend/run.py
```

To create training accounts, run `py backend/seed_training_users.py`. By default it creates `user1`..`user30` with passwords `abhinav@1`..`abhinav@30` plus an `admin` account with a randomly generated password, or pass `--admin-password` to set one. Sign in as the administrator and open `html/admin.html` to see learners, exam marks, and sign-in IP addresses. Every login attempt is recorded in `LoginAudit`; learners who share one IP are distinguished by username.

See `backend/SETUP.md` for database migrations, environment variables, and verification commands. The API documentation is in `backend/API.md`.

### Python Environment

```bash
cd python
pip install -r requirements.txt
python calculators/stats_calculator.py
```

### Java Web App

Deploy the `java` folder to Tomcat 9/10 and add the SQL Server JDBC driver. See `BUILD.md` for compilation and deployment notes.

### Database Setup

Run the scripts in this order in SQL Server Management Studio:

```text
1. sql/scripts/schema.sql
2. sql/migrations/001_backend_foundation.sql
3. sql/migrations/002_user_resource_client_ids.sql
4. sql/migrations/003_admin_glossary.sql
5. sql/migrations/004_login_audit.sql
6. sql/scripts/seed_modules.sql
7. sql/scripts/seed_resources.sql
```

Use `backend/.env` for the Flask API database connection. Update `DatabaseConnection.java` with your credentials only if using the Java database layer.

## Certification Path

- **White Belt**: complete the 9 foundation lessons and pass the 25-question exam
- **Yellow Belt**: complete the 15 process and data lessons and pass the 40-question exam
- **Green Belt**: complete the 27 DMAIC and statistics lessons and pass the 60-question exam
- **Black Belt**: complete the 38 advanced statistics, DOE, Lean, and leadership lessons and pass the 100-question exam
- **Master Black Belt**: complete the 22 deployment, governance, consulting, and standards lessons and pass the 100-question exam

Server accounts start at White Belt. Each exam unlocks after the previous belt exam is passed, and a score of at least 80% promotes the learner. The passing mark is configurable with `EXAM_PASS_PERCENT`.

Issued certificates can be customized before printing. The certificate sheet accepts a company logo, company name, company address, trainer name/title, and manager name/title. These details are stored in the browser under `lss_certificate_settings` and are used for every certificate printed from that device.

Each certificate also prints a QR code that links to the public verification page (`html/verify.html`) with its verification ID. Scanning the code checks the record through the API and shows the learner, belt, certificate number, issue date, and whether the certificate is valid or revoked.

## Additional Documentation

See `BUILD.md` for detailed frontend, resource-library, Statistics workbench, Java, Python, and SQL Server build instructions. See `backend/SETUP.md` for the Flask API and `backend/API.md` for endpoint contracts.
