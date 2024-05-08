const router = require('express').Router()

const {contactForm} = require('../controller/controller')

router.post('/contact-form', contactForm)

module.exports = router