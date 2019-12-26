import React, { Component } from 'react'
import io from 'socket.io-client'

import LoginForm from './LoginForm'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'

const socket = io.connect('https://octo-chat0710036033.herokuapp.com/')

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
      messageList: [],
    }

    this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this)
    this.onMessageFormSubmit = this.onMessageFormSubmit.bind(this)
  }

  componentDidMount() {
    socket.on('message', ({ nickname, msg, type }) => {
      this.setState({
        messageList: this.state.messageList.concat([{ nickname, msg, type }]),
      })
    })
  }

  onLoginFormSubmit(currentUser) {
    this.setState({
      currentUser,
    })
    socket.emit('join', currentUser)
  }

  onMessageFormSubmit(msg) {
    const { currentUser } = this.state
    socket.emit('message', { nickname: currentUser, msg, type: 'normal' })
  }

  render() {
    const { currentUser } = this.state
    const isLoggedIn = currentUser !== ''

    return (
      <div className="chat">
        {isLoggedIn ? (
          <div className="messenger">
            <MessageList
              messageList={this.state.messageList}
              currentUser={this.state.currentUser}
            />
            <SendMessageForm onSubmit={this.onMessageFormSubmit} />
          </div>
        ) : (
          <LoginForm onSubmit={this.onLoginFormSubmit} />
        )}
      </div>
    )
  }
}

export default Chat
