const path = require('path')
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
let users = 0
const usersOnline = new Map()

app.use(express.static(__dirname + '/dist'))

app.get('*', (req, res) => {
  res.setHeader('Set-Cookie', 'HttpOnly;Secure;SameSite=None')
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

io.on('connection', client => {
  const id = client.id
  users++
  console.log(`Total connected clients: ${users}`)

  client.on('join', name => {
    console.log(`Client ${id} have chosen name ${name}`)
    usersOnline.set(id, name)
    if (nickname) {
      io.emit('message', { nickname: name, msg: 'joined', type: 'info' })
    }
  })

  client.on('message', ({ nickname, msg }) => {
    console.log(`${nickname} said ${msg}`)
    io.emit('message', { nickname, msg, type: 'normal' })
  })

  client.on('disconnect', () => {
    users--
    console.log(`Client ${id} disconnected. Users left: ${users}`)
    const nickname = usersOnline.get(id)
    if (nickname) {
      io.emit('message', { nickname, msg: 'disconnected', type: 'info' })
    }
    usersOnline.delete(id)
  })
})

const port = process.env.PORT || 3001
app.set('port', port)

http.listen(port, () => {
  console.log(`listening on ${port}`)
})
