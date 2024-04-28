require("dotenv").config();
var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');


const createToken = (payload) =>
jwt.sign(payload , process.env.JWT_KEY);;

const verifyToken =(token) => 
jwt.verify(token , process.env.JWT_KEY);

module.exports = {
    createToken,
    verifyToken,
};  
