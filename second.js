//Create your module here

const today = () =>{
    const d =  new Date();
    return d;
};


const getDay = () => {
    const now  =  new Date().getDay();
    const day  =  ["Sun" ,  "mon" , "tue" ,  "wed" ,  "thu"  ,  "fri"  ,  "sat"];
    return day[now];
}

const properCase = () => {
    const str =  "dipershan";
    return str.toUpperCase();
} 
console.log(properCase());

const  getTruncate = ( sentence) => {
    sentence.substring(0 , 28).concat("...")
};
const joinString = (letter) => {
    const joine =  letter.concat();
}

module.exports = {
    getDay ,
    today , 
    properCase,
    getTruncate
};

//Write a js module to creaate string function

//-convert to proper case; 'raktim' => "Raktim"
//-convert to truncate; "Raktim is a good boy" =>"Raktim is a ...."
//-join two string; "Raktim " "Shrestha" => "Raktim Shrestha
