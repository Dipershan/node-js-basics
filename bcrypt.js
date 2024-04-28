const bcryptjs =  require("bcryptjs");

const encryptPassword = (password) =>
    bcryptjs.hashSync(password ,  Number(process.env.SALT_ROUND));


const verifyPassword = (hashPw , password) => bcryptjs.compareSync(password ,  hashPw);



module.exports = {
    encryptPassword,
    verifyPassword
}