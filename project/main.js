const http =  require("http");
const { createQr } =  require("./modules/qrcode")
const {createPdf} = require("./modules/pdf");
const {sendMail} = require("./modules/mail");

http.createServer(async(req , res)=>{
    if(req.url.split("=")[1] !== undefined){
        await createQr(req.url.split("=")[1]);//google.com => image data
        await createPdf("./image.png");
        await sendMail("dipershanstha321@gmail.com" , "PDF attachment"  ,  "./output.pdf")
        res.writeHead(200 , {'Content':'text/html'});
        res.end(imgSrc);
    }
    
}).listen(8080);
console.log("App is on process");