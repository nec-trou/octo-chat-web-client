const path = require('path')
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
let users = 0

app.use(express.static(__dirname + '/dist'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

io.on('connection', client => {
  const id = client.id
  users++
  console.log(`Total connected clients: ${users}`)

  client.on('join', name => {
    console.log(`Client ${id} have chosen name ${name}`)
  })

  client.on('message', ({ nickname, msg }) => {
    console.log(`${nickname} said ${msg}`)
    io.emit('message', { nickname, msg })
  })

  client.on('disconnect', () => {
    users--
    console.log(`Client ${id} disconnected. Users left: ${users}`)
  })
})

const port = process.env.PORT || 3001
app.set('port', port)

http.listen(port, () => {
  console.log(`listening on ${port}`)
})
