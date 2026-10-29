# Lean Six Sigma Training Course

A complete five-belt Lean Six Sigma learning website built with HTML/CSS/JavaScript, Java, Python, and SQL Server Express.

The curriculum is aligned to the ASQ, IASSC, and ISO 13053 Bodies of Knowledge.

## At a Glance

| Belt | Modules | Lessons | Study time |
| --- | ---: | ---: | --- |
| White Belt | 2 | 9 | 6-8 hours |
| Yellow Belt | 5 | 15 | 15-20 hours |
| Green Belt | 6 | 27 | 40-60 hours |
| Black Belt | 7 | 38 | 80-100 hours |
| Master Black Belt | 6 | 22 | 60-80 hours |
| **Total** | **26** | **111** | |

The course also includes 12 belt-gated DMAIC project templates, a saved-project workspace, and a 32-analysis Statistics workbench.

## Website Pages

- `html/index.html` - home page and five-belt certification path
- `html/modules.html` - all belts, modules, lesson agendas, coverage checklists, mini-projects, and exams
- `html/syllabus.html` - full print-friendly syllabus with BOK coverage tables
- `html/module-detail.html?module=green-2` - module detail, lesson plan, and coverage
- `html/calculators.html` - descriptive statistics, Cp/Cpk, DPMO/sigma level, and takt time
- `html/statistics.html` - integrated Statistics workbench with editable worksheets, hypothesis tests, regression, control charts, capability, Gage R&R, DOE, sample-size planning, and distribution tools
- `html/quizzes.html` - quiz bank for each belt with explanations; all five Belt exams are complete at 25, 40, 60, 100, and 100 questions
- `html/resources.html` - 12 fillable DMAIC templates, belt cheat sheets, and glossary
- `html/resource-editor.html?template=fmea` - fillable template editor with examples, calculations, save, and PDF export
- `html/my-project.html` - saved project copies grouped by DMAIC phase
- `html/login.html` / `html/profile.html` - local progress tracking and resource belt level

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

The front-end library runs without a server and stores copies in `localStorage` under `lss_user_resources`, keyed by learner ID. Anonymous learners can fill templates, load examples, and export PDFs, but must sign in to save. Belt level is selected at login and can be changed from the profile page.

The aligned SQL Server tables are `Resources` and `UserResources`. The browser app uses local storage by default; the SQL schema and generated seed are ready for future Java/API integration.

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Chart.js
- **Backend foundation**: Java 17+, Servlets/JSP, JDBC
- **Analytics**: Python 3.9+, pandas, numpy, scipy, matplotlib, seaborn
- **Database**: Microsoft SQL Server Express / T-SQL
- **Local persistence**: browser `localStorage` for the static demo

## Project Structure

```text
.
├── data/
│   ├── curriculum.json        Curriculum source of truth
│   ├── lessons/               Full lesson bodies by belt
│   └── resources.json         Project template source of truth
├── html/                      Static website
│   ├── css/
│   ├── js/
│   └── *.html
├── java/                      Java web application foundation
├── python/                    Statistical calculator scripts
├── scripts/                   Curriculum and resource build scripts
├── sql/scripts/               Schema and generated seed scripts
├── BUILD.md                   Detailed build instructions
└── README.md
```

## Data Sources and Generated Files

`data/curriculum.json` is the source of truth for belts, modules, lesson plans, coverage checklists, projects, exams, and cheat sheets. Full lesson bodies live in `data/lessons/<belt>.json` and are merged by lesson ID at build time.

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

## Getting Started

### Web Frontend

Open `html/index.html` in a browser, or serve the `html` folder with any static web server.

The static site does not require Java, Python, or SQL Server. Login, progress, belt level, and saved resource copies are stored in the browser.

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
2. sql/scripts/seed_modules.sql
3. sql/scripts/seed_resources.sql
```

Update `DatabaseConnection.java` with your credentials before using the Java database layer.

## Certification Path

- **White Belt**: complete the 9 foundation lessons and pass the 25-question exam
- **Yellow Belt**: complete the 15 process and data lessons and pass the 40-question exam
- **Green Belt**: complete the 27 DMAIC and statistics lessons and pass the 60-question exam
- **Black Belt**: complete the 38 advanced statistics, DOE, Lean, and leadership lessons and pass the 100-question exam
- **Master Black Belt**: complete the 22 deployment, governance, consulting, and standards lessons and pass the 100-question exam

## Additional Documentation

See `BUILD.md` for detailed frontend, resource-library, Statistics workbench, Java, Python, and SQL Server build instructions.
