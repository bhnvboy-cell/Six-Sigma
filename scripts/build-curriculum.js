const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const curriculum = JSON.parse(fs.readFileSync(path.join(root, 'data', 'curriculum.json'), 'utf8'));

const lessonsDir = path.join(root, 'data', 'lessons');
const lessonContent = {};
if (fs.existsSync(lessonsDir)) {
  for (const file of fs.readdirSync(lessonsDir).filter(name => name.endsWith('.json'))) {
    Object.assign(lessonContent, JSON.parse(fs.readFileSync(path.join(lessonsDir, file), 'utf8')));
  }
}

let contentCount = 0;
for (const belt of curriculum.belts) {
  for (const mod of belt.modules) {
    for (const lesson of mod.lessons) {
      if (lessonContent[lesson.id]) {
        lesson.content = lessonContent[lesson.id];
        contentCount += 1;
      }
    }
  }
}

const js = `// Auto-generated from data/curriculum.json and data/lessons/*.json. Do not edit by hand.\n// Run: node scripts/build-curriculum.js\nconst curriculumData = ${JSON.stringify(curriculum, null, 2)};\n\nwindow.curriculumData = curriculumData;\n`;
fs.writeFileSync(path.join(root, 'html', 'js', 'curriculum-data.js'), js, 'utf8');

const esc = value => `'${String(value).replace(/'/g, "''")}'`;
const minutes = value => {
  const text = String(value).toLowerCase();
  const amount = parseFloat(text) || 0;
  return text.includes('hour') ? Math.round(amount * 60) : Math.round(amount);
};
let moduleId = 0;
const moduleRows = [];
const lessonRows = [];

for (const belt of curriculum.belts) {
  for (const mod of belt.modules) {
    moduleId += 1;
    const objectives = mod.lessons.map(l => l.objective).join(' | ');
    moduleRows.push(`(${moduleId}, ${esc(mod.title)}, ${esc(belt.name)}, ${esc(mod.summary)}, ${minutes(mod.duration) || 60}, ${esc(objectives)}, ${esc(belt.prerequisites)}, ${moduleId})`);
    for (const lesson of mod.lessons) {
      lessonRows.push(`(${moduleId}, ${esc(lesson.id)}, ${lesson.order}, ${esc(lesson.title)}, ${esc(lesson.objective)})`);
    }
  }
}

const sql = `-- Auto-generated from data/curriculum.json. Do not edit by hand.\n-- Run: node scripts/build-curriculum.js\nUSE LeanSixSigmaTraining;\nGO\n\nDELETE FROM Lessons;\nDELETE FROM Modules;\nGO\n\nINSERT INTO Modules (ModuleId, Title, BeltLevel, Description, DurationMinutes, Objectives, Prerequisites, DisplayOrder)\nVALUES\n${moduleRows.join(',\n')};\nGO\n\nINSERT INTO Lessons (ModuleId, LessonCode, LessonOrder, Title, Objective)\nVALUES\n${lessonRows.join(',\n')};\nGO\n`;
fs.writeFileSync(path.join(root, 'sql', 'scripts', 'seed_modules.sql'), sql, 'utf8');

console.log(`Generated curriculum-data.js (${curriculum.belts.length} belts), ${moduleRows.length} modules, ${lessonRows.length} lessons, ${contentCount} with full lesson content.`);
