import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import config from '../config'
import routes from './routes'

const app = express()

//parse application/json and look for raw text
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json'}))

// mount app route on /api path
app.use('/api', routes)

export default app
