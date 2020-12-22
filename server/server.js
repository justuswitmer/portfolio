/* 
credit to https://github.com/Solomon04/Sendgrid-Express for helping me through this.
*/

const express = require('express'); //needed to launch server
const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 
require('dotenv').config()

const app = express(); //alias from the express function

//sendgrid api key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server: 
app.get('/', (req, res) => {
    res.send("Welcome to the Sendgrid Emailing Server"); 
});

app.get('/send-email', (req,res) => {
  console.log('in send-email with req.query', req.query);
    
  //Get Variables from query string in the search bar
  const message = req.query.text;
  const name = req.query.recipient;
  const email = req.query.sender;
  const to = process.env.TO_EMAIL_ADDRESS;
  const topic = 'You Have a New Message!';
  const from = process.env.FROM_EMAIL_ADDRESS;

  //Sendgrid Data Requirements
  const msg = {
      to: to, 
      from: from,
      subject: topic,
      text: `You have a new message from ${name}. Here is what they said: ${message} 
      You can follow up with them at ${email}`,
  }

  //Send Email
  sgMail.send(msg)
  .then((msg) => console.log(message));
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
