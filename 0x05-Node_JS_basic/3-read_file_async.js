const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

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
      console.log('Number of students:', lines.length - 1);
      console.log(`Number of students in CS: ${CS}. List: ${csList}`);
      console.log(`Number of students in SWE: ${SWE}. List: ${sweList}`);

      const result = {
        total: lines.length - 1,
        CS: { count: CS, list: csList },
        SWE: { count: SWE, list: sweList },
      };

      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
