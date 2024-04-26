const CC  = require("currency-converter-lt");
const http =  require("http");

//Create a http server that takes user input as request and find
//a package that can convert user input to currency

// let currencyConverter =  new CC({});


// currencyConverter
// .from("USD")
// .to("NPR")
// .amount(100)
// .convert()
// .then(response => {
//     console.log(response);
// })







http.createServer( async(req, res) =>{
    const url  =  req.url.split("="); //localhost:8000?currency= 75
    const number =  Number(url[1]); //number || parseInt(url[1]) || +url[1]
    const convert =  await multiplyCurrency(number);

    res.writeHead(200, {'Content-Type': 'text/html'});
    const string = `<p> The Converted Currency Will Be: NPR ${convert} `;
    res.end(string);
}).listen(8080);
 
console.log('App running on port 8080');

const multiplyCurrency =  async (number = 0) => {
    let currencyConverter  =  new CC ({
        from:"USD",
        to: "NPR",
        amount: number
    });
    const result =  await currencyConverter.convert();
     return result;
}

//pdfkit