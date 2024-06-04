const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.toString().split('\n').filter((line) => line.trim() !== '');

    let CS = 0;
    const csList = [];
    let SWE = 0;
    const sweList = [];

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].split(',');
      if (line.length >= 4) {
        const firstname = line[0].trim();
        const field = line[3].trim();
        if (field === 'CS') {
          CS += 1;
          csList.push(firstname);
        } else if (field === 'SWE') {
          SWE += 1;
          sweList.push(firstname);
        }
      }
    }

    console.log('Number of students:', lines.length - 1);
    console.log(`Number of students in CS: ${CS}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE}. List: ${sweList.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
