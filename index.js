import app from './server'
import config from './config'
import mongoose from 'mongoose'

mongoose.connect(config.db, { server: { socketOptions: { keepAlive: 1 } } })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`)
})

console.log(process.env.NODE_ENV);

app.listen(config.port, () => {
  console.log(`Server start port ${config.port}`);
})

export default app
