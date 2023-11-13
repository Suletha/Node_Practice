//const fs = require('fs');
const path = require('path');

//PROMISE TO AVOID CALLBACK HELL
const fspromises = require('fs').promises;

const fileOpe = async () => {
  try{
    const data = await fspromises.readFile(path.join(__dirname,'youtube','text.txt'), 'utf8')
      
      console.log(data);
    }catch(err){
      console.log(err)
    }
}
fileOpe()

  
  



//To read the data from any file

// console.log("i will be executed first")

// //To write into the file
// fs.writeFile(path.join(__dirname,'youtube','write.txt'), 'welcome to node ja', (err) => {
//   if (err) throw err;
//   console.log("write operation successful!!!!");
//   // To update file
//   fs.appendFile(path.join(__dirname,'youtube','append.txt'), '\n\n welcome to node ja', (err) => {
//     if (err) throw err;
//     console.log("updated successful!!!!");
//   })
//   //To rename the file
//     fs.rename(path.join(__dirname,'youtube','append.txt'), path.join(__dirname,'youtube','rename.txt') , (err) => {
//       if (err) throw err;
//       console.log("renamed successful!!!!");
//     })
// })



// process.on('uncaughtException', (err) => {
//   console.error('Uncaught Exception:', err);
//   process.exit(1); // Exit the process with a non-zero status code
// });
