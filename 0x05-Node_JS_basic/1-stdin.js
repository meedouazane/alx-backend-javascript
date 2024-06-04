console.log('Welcome to Holberton School, what is your name?');
let input = '';
process.stdin.on('data', (data) => {
  input += data;
});
process.stdin.on('end', () => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);
});
process.on('exit', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
