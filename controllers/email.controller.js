// const nodemailer = require("nodemailer");
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const { StatusCodes } = require('http-status-codes');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    // Send emails with nodemailer & ethereal:
    //
    // const transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //       user: process.env.ETHEREAL_USER,
    //       pass: process.env.ETHEREAL_PASSWORD,
    //     },
    // });
    // const info = await transporter.sendMail({
    //     from: 'Rimboi Eusebiu <eusebiuu@gmail.com>',
    //     to: 'bar@example.com, baz@example.com',
    //     subject: 'This is an email',
    //     html: '<h2>The email was send. Check your inbox</h2>',
    // });
    // res.json(info);

    // Send emails with SendGrid:
    const msg = {
        to: 'rimboi.eusebiu@colegiulcodreanu.ro', // Change to your recipient
        from: 'eusebiu.rimboi04@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    const info = await sgMail.send(msg);
    return res.status(StatusCodes.OK).json(info);
}

module.exports = {
    sendEmail,
}