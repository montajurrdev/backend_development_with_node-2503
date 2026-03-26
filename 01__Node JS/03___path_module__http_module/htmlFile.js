import http from "node:http";
import fs from "node:fs/promises";

// const host = "localhost";
// const port = 3000;

// const requestListener = function (req, res) {
//     fs.readFile(import.meta.dirname + "/index.html")
//     .then(content=>{
//         res.setHeader("Content-Type", "text/html")
//         res.writeHead(200)
//         res.end(content)

//     })
//     .catch(err=>{
//         res.writeHead(500)
//         res.end('Internal Server Error')
//         return;
//     })

// };

// const server = http.createServer(requestListener);

// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });

//
//
//
// Efficient way. instead of loading html file every request, load it once at the beginning
const host = "localhost";
const port = 3000;

let indexFile;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(import.meta.dirname + "/index.html")
  .then((contents) => {
    indexFile = contents;

    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
    
  })
  .catch((err) => {
    console.log(`Could not read index.html file: ${err}`);
    process.exit(1);

  });
