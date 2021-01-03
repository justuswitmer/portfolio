const express = require('express');
const sendMessage = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sendMessage.post('/', (req, res) => {
  console.log('in sendMessage with my req.body', req.body);
  const {
    name,
    message,
    email,
  } = req.body;
  const msg = {
    to: process.env.TO_EMAIL_ADDRESS, //will pull in customer's email
    from: process.env.FROM_EMAIL_ADDRESS,
    subject: "You have a new Message from your Portoflio Website",
    html:
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>You have a new Message!</title>
      </head>
    
      <body
        style="
          font-family: 'Roboto', sans-serif;
          text-align: center;
        margin: 0%;
        background-size: cover;
        background-attachment: fixed;
        "
      >
        <div>
          <div style="background-color: white; padding: 15px; margin-bottom: 30px;">
          </div>
          <div
            style="
              padding: 10px;
              margin: auto;
              margin-left: 60px;
              margin-right: 60px;
            "
          >
            
            <h1 style="color: black">
              Hi Justus, you have a new message from ${name} via your website.
            </h1>
            <p style="color: black">You can respond to them at ${email}</p>

            ${name} says:
            ${message}
          </div>
        </div>
      </body>
    </html>
  `,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.send('Success!');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occured');
    });
});
module.exports = sendMessage;
