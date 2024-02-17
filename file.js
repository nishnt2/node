const { log } = require('console');
const fs = require('fs');

//Synchronous
// fs.writeFileSync('./test.txt', 'Hey Hey');

//Async
// fs.writeFile('./test.txt', 'OKOKOKKOK', (err) => {});

//Synchronous
//it returns result
// const data = fs.readFileSync('./dummy.txt', 'utf-8');
// console.log(data);

//Async
//it expects a callback function where we get the result of execution
fs.readFile('./dummy.txt', 'utf-8', (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});

// fs.appendFile
// fs.appendFileSync
//appends the data in file rather than overriding existing data.
