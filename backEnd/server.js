var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var port = process.env.PORT || 8081

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

io.on('connection', socket => {
  console.log('client connected');
  socket.emit('message', 'You are connected!');

});

var Events = require('./routes/Events')
var Comments = require('./routes/Comments')


app.use('/events', Events)
app.use('/comments', Comments)

server.listen(port, function() {
  console.log('Server is running on port: ' + port)
})

app.io = io