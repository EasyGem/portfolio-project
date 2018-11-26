import express from 'express'
import nodemailer from 'nodemailer'

const app = express()

app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))

const sendMail = (name, email, msg) => {
  const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
  })
  transporter.sendMail({
    from: email,
    to: 'san4es-ag@ya.ru',
    subject: 'New contact form message',
    html: msg
  })
}

app.post('/', (req, res) => {
	if (!(req && req.body.key == 'g1hXzgy2SOeWX2nSzQ8Z'))
		return req.send(new Error('Invalid Key')).end()

	sendMail(req.body.name, req.body.email, req.body.message)


	res.end()
})

export default {
	path: '/send-email',
	handler: app
}

// import express from 'express'
// import sendmail from 'sendmail'
//
// const app = express()
//
// app.use(express.json())
//
// app.post('/', (req, res) => {
//   console.log('ggg');
//   res.json(req.body)
//   res.end()
// })
//
// app.post('/ggg', (req, res) => {
//   console.log('YES');
//   res.json(req.body)
//   res.end()
// })
//
// export default {
//   path: '/ggg',
//   handler: app
// }
//
