const fs = require('fs');

function calculateLineNumber(diffHunk, position) {
  const lines = diffHunk.split('\n');
  let currentLine = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('@@')) {
      // Extract the line number from the diff hunk header
      const match = lines[i].match(/\+([0-9]+)/);
      if (match) {
        currentLine = parseInt(match[1], 10) - 1;
      }
    } else if (!lines[i].startsWith('-')) {
      currentLine += 1;
    }
    if (currentLine === position) {
      return currentLine;
    }
  }
  return null;
}

// Read the diff hunk and position from the command line arguments
const diffHunk = fs.readFileSync(process.argv[2], 'utf8');
const position = parseInt(process.argv[3], 10);

// Calculate the line number and print it to the console
const lineNumber = calculateLineNumber(diffHunk, position);
console.log(lineNumber);