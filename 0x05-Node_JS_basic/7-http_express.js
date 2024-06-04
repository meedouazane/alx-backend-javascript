const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(process.argv[2].toString(), 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n');
    const validLines = lines.filter((line) => line.trim() !== '');
    const response = ['This is the list of our students'];

    let CS = 0;
    const csList = [];
    let SWE = 0;
    const sweList = [];

    for (let i = 1; i < validLines.length; i += 1) {
      const [firstname, , , field] = validLines[i].split(',');
      if (field === 'CS') {
        CS += 1;
        csList.push(firstname);
      } else if (field === 'SWE') {
        SWE += 1;
        sweList.push(firstname);
      }
    }

    response.push(`Number of students: ${validLines.length - 1}`);
    response.push(`Number of students in CS: ${CS}. List: ${csList.join(', ')}`);
    response.push(`Number of students in SWE: ${SWE}. List: ${sweList.join(', ')}`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(response.join('\n'));
  });
});

app.listen(port, () => {
});
module.exports = app;
