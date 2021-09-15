const formData = require('form-data');
const Mailgun = require('mailgun.js');

const sendEmail = async (event) => {
  const { firstName, lastName, message, email, phoneNumber } = JSON.parse(event.body);
  const DOMAIN = 'tipsynailbarboca.com';

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.REACT_APP_MAILGUN_API_KEY,
  });

  const result = await mg.messages
    .create(DOMAIN, {
      from: 'Tipsy Nail Bar Boca Raton <support@tipsynailbarboca.com>',
      to: 'tipsynailbarboca@gmail.com',
      subject: `Get In Touch with ${firstName} ${lastName}`,
      text: `${message} 
      
      
      reply back to ${email} or ${phoneNumber}`,
    })
    .then((msg) => msg)
    .catch((err) => err);

  console.log(result);

  return result;
};

module.exports.handler = async (event) => {
  const result = await sendEmail(event);
  return {
    statusCode: result.status || 200,
    body: JSON.stringify(result),
  };
};
