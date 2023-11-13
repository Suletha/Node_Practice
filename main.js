//const fs = require('fs');
const path = require('path');

//PROMISE TO AVOID CALLBACK HELL
const fspromises = require('fs').promises;

const fileOpe = async () => {
  try{
    const data = await fspromises.readFile(path.join(__dirname,'youtube','text.txt'), 'utf8')
      
    console.log(data);
    // //To write into the file
    await fspromises.writeFile(path.join(__dirname,'youtube','write.txt'), 'welcome to node js')
    console.log("write operation successful!!!!");

     // To update file
    await fspromises.appendFile(path.join(__dirname,'youtube','append.txt'), '\n\n welcome to node js')
    console.log("updated successful!!!!");

    //To rename the file
    await fspromises.rename(path.join(__dirname,'youtube','append.txt'), path.join(__dirname,'youtube','rename.txt'))
    console.log("renamed successful!!!!");
  
    }catch(err){
      console.log(err)
    }
}
fileOpe()

  
  
