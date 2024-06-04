const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        return reject(error);
      }

      const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
      const students = { CS: [], SWE: [] };

      if (lines.length <= 1) {
        return resolve(students);
      }

      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i].split(',');
        if (line.length >= 4) {
          const firstname = line[0].trim();
          const field = line[3].trim();
          if (field === 'CS') {
            students.CS.push(firstname);
          } else if (field === 'SWE') {
            students.SWE.push(firstname);
          }
        }
      }

      return resolve(students);
    });
  });
}

module.exports = readDatabase;
