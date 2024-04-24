const QRCode =  require("qrcode");
const http  =  require("http");

http
.createServer(async(req , res)=>{
    if(req.url.split("=")[1] !== undefined){
        const qr =  await qrcode.toDataURL(req.url.split("=")[1]);
        const imgSrc  = `<img src='${qr}'/>`;
        res.writeHead(200 , {"Content-Type":'text/html'});
        res.end(imgSrc);
    }

}).listen(8002);
console.log("App running on http://localhost:8002");



