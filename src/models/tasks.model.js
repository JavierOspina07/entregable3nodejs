import { DataTypes } from 'sequelize'
import db from '../utils/database.js'

const Task = db.define('tasks', {
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  conplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
})
