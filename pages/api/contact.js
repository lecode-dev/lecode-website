// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

const sendMail = async (name, from, message, to, pass) => {
  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      // The first needs to be the lecode account
      user: to[0],
      pass: pass,
    },
  })
  const mailOptions = {
    from,
    to,
    subject: `${name} is contacting us!`,
    text: message,
  }

  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      throw error
    } else {
      return
    }
  })
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      //password is a fake field to prevent bot senders
      const { name, email: from, message, password: honeyField } = req.body
      if (honeyField) {
        return res.status(200).json({
          message: 'Email sent, good lucky :p',
        })
      }

      const sendMessage = message ?? `${from} wants to connect with lecode :)`
      const sendName = name ?? `A new client`
      const to = process.env.EMAIL_TO.split(', ')
      const pass = process.env.EMAIL_PASS

      await sendMail(sendName, from, sendMessage, to, pass)
      return res.status(200).json({
        message: 'Email sent',
      })
    } catch (error) {
      return res.status(400).json({
        error,
        message: 'An error occurred while trying to send the email',
      })
    }
  }
}
