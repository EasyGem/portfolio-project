import express from 'express'
import nodemailer from 'nodemailer'

const app = express()

app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))

const sendMail = (name, email, message) => {
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'san4es021@gmail.com',
			pass: 'gLa33e3F2iled'
		}
	})
	transporter.sendMail({
		from: 'form@alex-card.ru',
		to: 'san4es-ag@ya.ru',
		subject: 'Заявка с Alex-Card.ru - Freelance',
		html: `Имя: ${name} <br> Email: ${email} <br> Сообщение: ${message}`,
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
