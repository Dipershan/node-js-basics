const nodemailer = require("nodemailer");

const transporter =  nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
        user: process.env.GMAIL_USERNAME,
        pass:  process.env.GMAIL_PASSWORD,
    }
});


const sendMail = async({to ,  subject ,  content}) =>
{
    const info = await transporter.sendMail({
        from:'"Dipershan Shrestha" <dipsestha321@gmail.com>', // sender address
        to , // list of receivers
        subject , // Subject line
        attachment: [
            //send single (pdf ,  text ,  html)
            {
                path:"./random.txt",
            },
            {
                filename:"image.png",
                path:"./output.pdf",
                

            }
        ]
      });

};

module.exports = {
    sendMail
}

