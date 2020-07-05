const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'comments',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    events_id: {
      type: Sequelize.STRING
    },
    user_com_name: {
      type: Sequelize.STRING
    },
    user_com_avatarUrl: {
      type: Sequelize.STRING
    },
    comment: {
        type: Sequelize.STRING
    },
    time: {
      type: Sequelize.STRING
  }
  },
  {
    timestamps: false
  }
)