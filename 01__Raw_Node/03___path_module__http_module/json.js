// JavaScript Object Notation = JSON is a text based data exchange formet

import http from "node:http";


// simple
// const host = "localhost";
// const port = 3000;

// const requestListener = function (req, res) {
//   res.setHeader("Content-Type", "application/json");
//   res.writeHead(200);
//   res.end(`{"message" : "This is JSON response"}`)
// };

// const server = http.createServer(requestListener);

// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });


// 
const host = "localhost";
const port = 3000;

const requestListener = function (req, res) {
  const data = {
    message: "This is JSON response",
    timestamp: Date.now(),
    note: 'He said "hello"'   
  };
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  // res.end(data);  // error  because qoutes in JSON(note)
  res.end(JSON.stringify(data));
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
