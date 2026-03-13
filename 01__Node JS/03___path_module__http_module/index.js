import { log } from "node:console";
import path from "node:path";
import { fileURLToPath } from "node:url";

// current path details
// log(import.meta)

// const imagePath = new URL('./logo.png', import.meta.url).href;
// log(imagePath)

// Path module provitde utilities(methods) for working with file and directory paths.
// windows use backslashes(\), POSIX uses forward slashes(/)
// Path module handles this abstraction. 

// const join =  path.join('/users','docs','file.txt')
 // log(join)

 // resolve a sequence of paths or path segments into an absolute path. using current working directory
// const resolve = path.resolve('docs','file.txt')
// log(resolve)

// const baseName = path.basename("/users/docs/file.txt"); 
// log(baseName)

// Returns the directory name of path (everything except the last portion)
// const dirName = path.dirname("/users/docs/file.txt");  // /users/docs
// const dirName = path.dirname("/users/montajurrdev/docs"); // /users/montajurrdev
// log(dirName)


// const extName = path.extname("/users/docs/file.txt");
// log(extName)  // .txt

// Returns an object whose properties (root, dir, base, ext, and name)
// const parseObject = path.parse("/users/docs/file.txt");
// log(parseObject)

// Return a path string from a parsed path object
// opposite of path.parse()

// const pathFormat = path.format({
//   root: "/",
//   dir: "/users/docs",
//   base: "file.txt",
//   ext: ".txt",
//   name: "file",
// });
// log(pathFormat)

// const obj = {
//   root: "/",
//   dir: "/users/docs",
//   base: "file.txt",
//   ext: ".txt",
//   name: "file",
// };
// log(path.format(obj))


// normalizes a given string path by resolving . and .. segments(., .., // etc)
// remove all unnecessary separators

// const normalizes = path.normalize("/users//admin///comments");
// const normalizes = path.normalize("/users//admin///comments/.");  // . means current directory
// const normalizes = path.normalize("/users//./admin///comments/."); 
// const normalizes = path.normalize("/users//admin///comments/..");  // .. mean parent directory 
// const normalizes = path.normalize(""); 
// log(normalizes)

// const isAbsolute = path.isAbsolute("/users/docs/file.txt");

// log(isAbsolute)


//
//
//
// Join Method
let imageName = 'bob_smith';

let filePath = path.join(fileURLToPath(import.meta.url), "/images/useravatars/", imageName + '.png');
log(filePath) // pure path


let imgName = "bob_smith";

let imgPath = path.join(
  import.meta.url,
  "/images/useravatars/",
  imgName + ".png",
);
log(imgPath);  // its an url of path

// Basename Method
// let imageBaseName = path.basename(filePath);
// log('name of image:', imageBaseName)  // bob_smith.png

// if we want basename without extension
// let basename = path.basename(filePath, '.png')
// log(basename)  // bob_smith

// Directory Method
// give us dirname with last part
// let directoryOfFile = path.dirname(filePath)
// log('the parent directory of the file is', directoryOfFile)

// extname method
// let imageType = ['.png', '.jpg', '.jpeg', '.pdf'];

// function isImage(filepathForExt){
//   let fileType = path.extname(filepathForExt)
// if(imageType.includes(fileType)){
//   return true;
// }
// else{
//   return false;

// }

// }
// const result = isImage(filePath) // true
// const result = isImage('picture.png'); // true
// const result = isImage('myProgram.exe'); // false
// const result = isImage('myfile.docs'); // false
// const result = isImage("pictures/selfie.jpeg"); // true

// log(result)


// Normalize Method
// .. meaning up one directory,  .. meaning current direction
// remove unnecessary slashes
// const normal = path.normalize(
//   "/hello/world//lets///go/deeper/./wait/this/is/too/deep/lets/go/back/some/../../../../../../../../..",
// );
// log(normal)



