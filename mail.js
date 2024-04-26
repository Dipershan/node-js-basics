require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass:  process.env.GMAIL_PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main({ to  ,  subject ,  html}) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from:'"Dipershan Shrestha" <dipsestha321@gmail.com>', // sender address
    to , // list of receivers
    subject , // Subject line
    html, // html body
  });

 
  console.log("Message sent: %s", info.messageId);
// Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
 
}
main({
  to:"dipershanstha321@gmail.com",
  subject:"Nodemailer Test",
  html:"<b>Nodemailer testing by dipershan</b>",
}).catch(console.error);


//Home Work
//sent pdf as attachment
//sent images as html content

//  console.log(process.env.GMAIL_USERNAME)