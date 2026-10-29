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
4. Run `sql/scripts/seed_modules.sql`
5. Run `sql/scripts/seed_resources.sql`
6. Update `DatabaseConnection.java` with your credentials

## HTML/Frontend

Open `html/index.html` in a browser, or serve the `html` folder with a static web server.

Key pages:

- `index.html` - five-belt path
- `syllabus.html` - complete syllabus and BOK coverage
- `modules.html` - belt and module browser
- `module-detail.html?module=white-1` - module lesson plan
- `calculators.html` - quick statistical calculators
- `statistics.html` - integrated Statistics workbench with worksheet import/export, hypothesis tests, regression, SPC, capability, MSA, DOE, sample-size planning, and distributions
- `quizzes.html` - belt quiz banks
- `resources.html` - fillable DMAIC templates, cheat sheets, and glossary
- `resource-editor.html?template=project-charter` - template editor with examples, calculations, save, and PDF export
- `my-project.html` - saved copies grouped by DMAIC phase
- `login.html` / `profile.html` - local progress tracking and resource belt level

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

Saved copies are stored in `localStorage` under `lss_user_resources`, keyed by learner ID. Anonymous learners can fill templates, load examples, and export PDFs, but must sign in to save. The profile page controls `beltLevel`; White is the default. Templates unlock at or above their `minBelt`.

The editor supports `text`, `textarea`, `date`, `select`, `number`, `checklist`, and `table` fields. Table computed columns support `multiply`, `sum`, `percentOfTotal`, and `cumulativePercent`. PDF export uses the browser print dialog and a dedicated print-only sheet.

## Statistics Workbench

The Statistics page is split into three scripts so calculations can be tested independently:

- `html/js/statistics-engine.js` - dependency-free UMD calculation engine (`window.StatsEngine` in the browser, `module.exports` in Node)
- `html/js/statistics.js` - worksheet editing, CSV/paste import/export, menus, forms, results, and chart rendering
- `html/js/statistics-analyses.js` - 32 analysis definitions and their report/chart builders

The page uses Bootstrap 5 and Chart.js from CDNs. Keep `statistics-engine.js` free of DOM dependencies; UI helpers live in `statistics.js` and are exposed through `window.StatsApp`.

## Features

- Five complete belts: White, Yellow, Green, Black, Master Black
- 26 modules and 111 lessons mapped to ASQ, IASSC, and ISO 13053 topics
- Coverage checklist for every belt
- Mini-project and exam plan for every belt
- Belt cheat sheets, glossary, quick calculators, integrated Statistics workbench, and quiz banks
- 12 belt-gated fillable DMAIC templates with examples, calculations, saved copies, and PDF export
- Local progress tracking with no server required
- Python statistical calculators and Java/SQL LMS foundation
