const http  =  require("http");
const fs =  require("fs");
const proper =  require("proper-upper-case");



// http.createServer((req ,  res) => {
//     res.writeHead(200 , {Content-Type:'text/html'});
//     res.end("Hello WOrld")

// }).listen(8080);

// console.log("App running on port 8080")

 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(8080);
 
console.log('App running on port 8080');

const content  = fs.readFileSync("./hello.txt" , {
    encoding: "utf-8",
});

console.log({content});


const result =  proper("dipershan shrestha");
console.log(result);

