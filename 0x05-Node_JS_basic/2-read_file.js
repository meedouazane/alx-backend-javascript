const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.toString().split('\n');
    const validLine = lines.filter((line) => line.trim() !== '');
    let CS = 0;
    const csList = [];
    let SWE = 0;
    const sweList = [];
    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, , , field] = lines[i].split(',');
      if (field === 'CS') {
        CS += 1;
        csList.push(firstname);
      } else if (field === 'SWE') {
        SWE += 1;
        sweList.push(firstname);
      }
    }
    console.log('Number of students:', validLine.length - 1);
    console.log(`Number of students in CS: ${CS}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE}. List: ${sweList.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
