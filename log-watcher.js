// log-watcher.js
// Watches for file changes and appends entries to log.md

const fs = require('fs');
const path = require('path');

const watchDir = path.resolve(__dirname, 'src');
const logFile = path.resolve(__dirname, 'log.md');

console.log('Watching for changes in', watchDir);

fs.watch(watchDir, { recursive: true }, (eventType, filename) => {
  if (filename) {
    const now = new Date().toISOString();
    const entry = `- ${now}: ${eventType} in ${filename}\n`;
    fs.appendFileSync(logFile, entry);
    console.log('Logged:', entry.trim());
  }
});
