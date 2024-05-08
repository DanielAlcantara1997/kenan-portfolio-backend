const nodemailer = require('nodemailer')
require('dotenv').config()
const Mailgen = require('mailgen')

const contactForm = (req,res) => {

    let {fullName,userEmail,phoneNumber,textarea} = req.body

    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config)

    let message = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Portfolio Contact Message',
        html: `<h1>${fullName}</h1><h2>${userEmail}</h2><p>${phoneNumber}</p><p>${textarea}</p>`
    }
    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "Email received"
        })
    })
    .catch(error => {
        res.status(500).json({error})
    })
    
}

module.exports = {
    contactForm
}