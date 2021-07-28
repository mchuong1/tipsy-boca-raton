
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')

module.exports.handler = async (event,) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const {firstName, lastName, message, email, phoneNumber} = JSON.parse(event.body)
  const msg = {
    to: 'mchuong1993@gmail.com', // Change to your recipient
    from: 'jdoe02602@gmail.com', // Change to your verified sender
    subject: `Get in Touch: ${firstName} ${lastName}`,
    text: `${message} - Reply back to ${email} or ${phoneNumber}`
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: 'Email sent'
    }
}