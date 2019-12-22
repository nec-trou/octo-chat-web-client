import React, { Component } from 'react'
import io from 'socket.io-client'

import LoginForm from './LoginForm'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'

// const socket = io.connect("http://localhost:3000");
const socket = io.connect('https://vast-reef-17627.herokuapp.com/')

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: '',
      messagesList: [],
    }
    this.onLoginFormSumbit = this.onLoginFormSumbit.bind(this)
  }

  onLoginFormSumbit(currentUser) {
    this.setState({
      currentUser,
    })
  }

  render() {
    const { currentUser } = this.state
    const isLoggedIn = currentUser !== ''

    return (
      <React.Fragment>
        {isLoggedIn ? (
          <div>
            <MessageList />
            <SendMessageForm />
          </div>
        ) : (
          <LoginForm onSubmit={this.onLoginFormSumbit} />
        )}
      </React.Fragment>
    )
  }
}

export default Chat
