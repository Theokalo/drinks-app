const express = require('express')
const events = express.Router()
const cors = require('cors')

const Event = require('../models/Events')
events.use(cors())

process.env.SECRET_KEY = 'secret'

// post event from api to database
events.post('/', (req, res) => {
  const eventsData = req.body.data.map((item,i)=>{
    return {
      id: item.id,
      creator_name: item.creator.name,
      creator_avatarUrl: item.creator.avatarUrl,
      title: item.title,
      type: item.type,
      time: item.time,
      location: item.location.name
    }
  })
  Event.findOne({
    where: {
      id: eventsData.map(item=>{return item.id})
    }
  })
    .then(event => {
      console.log(event)
      if (!event) {
        console.log(eventsData)
        Event.bulkCreate(eventsData)
          .then(event => {
            res.json({ status: event.title + 'Registered!' })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'Event already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// get events from database and send them to frontend
events.get('/eventsData', (req, res) => {
  Event.findAll()
    .then(event => {
      if (event) {
        res.json(event)
      } else {
        res.send('event does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// post new event to database
events.post('/newEvent', (req, res) => {
  const eventData = {
    id: req.body.id,
    creator_name: req.body.creator_name,
    creator_avatarUrl: req.body.creator_avatarUrl,
    title: req.body.title,
    type: req.body.type,
    time: req.body.time,
    location: req.body.location
  }
  console.log(eventData)
  Event.findOne({
    where: {
      id: eventData.id
    }
  })
    .then(event => {
      console.log(event)
      if (!event) {
        Event.create(eventData)
          .then(event => {
            res.json({ status: event.title + 'Registered!' })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'Event already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = events