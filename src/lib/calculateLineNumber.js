export function calculateLineNumber(diffHunk, position) {
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
