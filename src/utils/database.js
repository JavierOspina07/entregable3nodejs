import { Sequelize } from 'sequelize'
import 'dotenv/config'

const db = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAMe,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  ...(process.env.NODE_ENV === 'production'
    ? { dialectOptins: { ssl: { required: true, rejectUnauthorized: false } } }
    : {}),
})

export default db
