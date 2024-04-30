const event =  require("events");

const eventTest =  new event.EventEmitter();

//Create
const sayHello = () =>{
    console.log("HelloWorld");
};

//listen
eventTest.on("test" ,  sayHello);

//fire
eventTest.emit("test");


//Function to calculate tax
const calcTax = () =>{
    //Tax% is 10
    //100
     const tax = product.price*0.10;
    
    return tax;    

}

const product = {
    name:"bucket",
    price:1000,
    qty:1,
};

//Listen

