const path = require('path')
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
let users = 0

app.use(express.static(path.join(__dirname, '../build')))

app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))

io.on('connect', socket => {
  users++
  io.emit('broadcast', `Client #${users} connected!`)

  socket.on('message', msg => {
    io.emit('message', msg)
  })

  socket.on('disconnect', function() {
    users--
    io.emit('broadcast', `Client disconnected. ${users} left`)
  })
})

const port = process.env.PORT || 3001
app.set('port', port)

http.listen(port, () => {
  console.log(`listening on ${port}`)
})
