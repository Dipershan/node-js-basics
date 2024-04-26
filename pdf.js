const http =  require("http");
const pdfDocument =  require("pdfkit");
const fs = require("fs");


http.createServer((req ,  res) =>{
    const url  =  req.url.split("="); //localhost:8000?currency= 75
    const text = (url[1]); //number || parseInt(url[1]) || +url[1]
    createPdf(text);
    res.end("Pdf Generate");
}).listen(8003);

const createPdf = (userInput) => {
//Create a document
const doc  = new pdfDocument();
doc.pipe(fs.createWriteStream('output.pdf'));

doc.text(userInput , 100 ,100);



doc.end();

}
