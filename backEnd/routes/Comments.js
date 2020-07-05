const express = require('express')
const comments = express.Router()
const cors = require('cors')

const Comments = require('../models/Comments')
comments.use(cors())

process.env.SECRET_KEY = 'secret'

// post comments from the api to database
comments.post('/', (req, res) => {
  console.log(req.body)
  arrayOfComments = []
  const commentsData = req.body.map((item,i)=>{
    let event_id = item.id     
      return item.msg.map(item=> {
        arrayOfComments.push(
          {
            events_id: event_id,
            user_com_name: item.user.name,
            user_com_avatarUrl: item.user.avatarUrl,
            comment: item.message,
            time: item.timestamp
          }
        )
      })
  })
  console.log(arrayOfComments)
  Comments.findOne({
    where: {
      events_id: arrayOfComments.map(item=>{ return item.events_id}),
      user_com_name: arrayOfComments.map(item=>{return item.user_com_name}),
      comment : arrayOfComments.map(item=>{return item.comment})
    }
  })
  .then(comment => {
    if (!comment) {
      Comments.bulkCreate(arrayOfComments)
      .then(comment => {
        res.json({ status: 'Registered!' })
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

// get comments from database and send them to frondend
comments.get('/commentsData', (req, res) => {
  Comments.findAll()
    .then(comment => {
      if (comment) {
        res.json(comment)
      } else {
        res.send('comment does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// post new comment to database
comments.post('/newComment', (req, res) => {
  const commentData = {
    events_id: req.body.events_id,
    user_com_name: req.body.user_com_name,
    user_com_avatarUrl: req.body.user_com_avatarUrl,
    comment: req.body.comment,
    time: req.body.time
  }
  Comments.findOne({
    where: {
      events_id: commentData.events_id,
      user_com_name: commentData.user_com_name,
      comment : commentData.comment
    }
  })
    .then(comment => {
      console.log(comment)
      if (!comment) {
        Comments.create(commentData)
          .then(comment => {
            res.json({ status: comment.title + 'Registered!' })
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
    

module.exports = comments