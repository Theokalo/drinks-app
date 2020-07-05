const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'events',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    creator_name: {
      type: Sequelize.STRING
    },
    creator_avatarUrl: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    time: {
        type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)