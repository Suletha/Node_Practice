const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'youtube','text.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

console.log("i will be executed first")
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit the process with a non-zero status code
});
