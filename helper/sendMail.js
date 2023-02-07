const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const sendVerificationMail = (email, verificationToken) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  console.log(email);
  const msg = {
    //   to: email,
    to: 'erjomin4ser@gmail.com',
    from: process.env.MASTER_EMAIL,
    subject: 'Email verification',
    html: `<a href="http://localhost:3000/users/verify/${verificationToken.toString()}">verify email ${email}</a>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = sendVerificationMail
