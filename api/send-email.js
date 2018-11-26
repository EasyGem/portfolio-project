import express from 'express'
import sendmail from 'sendmail'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
  if(!(req && req.body.key == 'g1hXzgy2SOeWX2nSzQ8Z'))
    return req.send(new Error('Invalid Key')).end()

  sendmail()({
		from: 'form@alex-card.ru',
		to: 'san4es-ag@ya.ru',
		subject: 'Заявка с Alex-Card.ru - Freelance',
		html: `Имя: ${req.body.name} <br> Email: ${req.body.email} <br> Сообщение: ${req.body.message}`,
	}, function(err, reply) {
		console.log(err && err.stack);
	});
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
