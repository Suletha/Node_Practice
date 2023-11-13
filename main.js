const fs = require('fs');
const path = require('path');

//To read the data from any file
fs.readFile(path.join(__dirname,'youtube','text.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})
console.log("i will be executed first")

//To write into the file
fs.writeFile(path.join(__dirname,'youtube','write.txt'), 'welcome to node ja', (err) => {
  if (err) throw err;
  console.log("write operation successful!!!!");
  // To update file
  fs.appendFile(path.join(__dirname,'youtube','write.txt'), '\n\n welcome to node ja', (err) => {
    if (err) throw err;
    console.log("updated successful!!!!");
  })
})



process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit the process with a non-zero status code
});
