// "dev" : "nodemon index.js" [npm i -g nodemon]
// console.log("Hi");

// File System
// create file, write file, read file, update file, delete file

import { error, log } from "node:console";
// import fs from "node:fs";

// fs.writeFileSync("text.js", "console.log('hi')")
// fs.appendFileSync("text.js", "\nlet a = 10")

// const result = fs.readFileSync("text.js")
// log(result.toString())

// const result = fs.readFileSync("text.js", "utf-8");
// log(result);
// log("hi")  // print at the bottom, cause synchronus

//
// asynchronus

// fs.writeFile("text1.txt", "hello\n", (err)=>{
//     console.log(err);
// });
// fs.appendFile("text1.txt", "Montajur", (err)=>{
//     console.log(err);
// });
// fs.readFile("text1.txt", "utf-8", (err,data)=>{
//     if(err) {
//         console.log(err);

//     }
//     log(data)
// })

// log("hi")  // print at the top, cause asynchronus

//
// asynchronus er vitorer code synchronus

// fs.readFile("text1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   log(data);
// });
// fs.writeFile("text1.txt", "hello\n", (err) => {
//   console.log(err);
// });
// fs.appendFile("text1.txt", "Hi", (err) => {
//   console.log(err);
// });

// error: cause, work sequentially in task

//
// we can make it like synchronus
// fs.writeFile("text1.txt", "hello\n", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   fs.appendFile("text1.txt", "Monir", (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     fs.readFile("text1.txt", "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       log(data);

//       fs.unlink("text.js", (err)=>{
//        if(err){

//         log(err);
//        }
//        log("File Deleted")
//         return;
//       })
//     });
//   });
// });

// log("hi");

//
// Directory
// fs.mkdir("newDir/monir", {recursive: true}, (err)=>{
//     if(err){
//         console.log(err);
//         return;

//     }
//     log("Directory created!")
// } );

// fs.readdir("newDir", (err,files)=>{
//     if(err){
//         console.log(err);
//         return;

//     }
//     log("Files in Directory:", files)
// })

// fs.rmdir("newDir/monir", {recursive: true}, (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     log("Directory Deleted!")
// })

// fs.watch("text1.txt", (eventType, filename)=>{
//     if(filename){
//         log(`${filename} file changed!`)
//     }
// })

// fs.copyFile("text1.txt", "textd.txt", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     log('File copied successfully')
// })

//
// readability: promises

import fs from "node:fs/promises";

async function writeFile(fileName, data, appendData) {
  try {
    await fs.writeFile(fileName, data);
    await appendFile(fileName,appendData)
    const promisesResult =  await readFile(fileName)
    log(promisesResult)
  } catch (error) {
    log(error);
  }
}
async function appendFile(filePath, appendData) {
  try {
    await fs.appendFile(filePath, appendData);
  } catch (error) {
    log(error);
  }
}

async function readFile(filePath){
    try{
       const data = await fs.readFile(filePath, "utf-8");
       return data;
    }
    catch(err){
        error(err)
    }
}

writeFile("promises.txt", "hello\n", "Montajur\n")