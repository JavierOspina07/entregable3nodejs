import express from 'express'
import db from './utils/database.js'

db.authenticate()
  .then(() => console.log('base de datos conectada correctamente'))
  .catch(err => console.log(err))

const PORT = process.env.PORT ?? 8000

const app = express()

app.get('/', (req, res) => {
  res.send('OK')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
