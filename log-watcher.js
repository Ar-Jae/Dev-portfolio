// log-watcher.js
// Watches for file changes and appends entries to log.md

import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const watchDir = path.resolve(__dirname, 'src');
const logFile = path.resolve(__dirname, 'log.md');

console.log('Watching for changes in', watchDir);

fs.watch(watchDir, { recursive: true }, (eventType, filename) => {
  if (!filename) return;
  // Ignore node_modules and directories
  if (filename.includes('node_modules') || filename.endsWith('/')) return;
  // Only log file changes
  try {
    const now = new Date().toISOString();
    const entry = `- ${now}: ${eventType} in ${filename}\n`;
    fs.appendFileSync(logFile, entry);
    console.log('Logged:', entry.trim());
  } catch (err) {
    console.error('Failed to log change:', err);
  }
});
