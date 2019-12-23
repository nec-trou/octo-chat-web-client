import React from 'react'
import Message from './Message'
import InfoMessage from './InfoMessage'

const MessageList = props => {
  const { messageList, currentUser } = props

  const chat = messageList.map(({ nickname, msg }, idx) => {
    switch (nickname) {
      case currentUser:
        return (
          <Message
            key={idx}
            nickname={nickname}
            text={msg}
            className="message sender-message"
          />
        )
      case 'info':
        return <InfoMessage key={idx} text={msg} />
      default:
        return (
          <Message
            key={idx}
            nickname={nickname}
            text={msg}
            className="message receiver-message"
          />
        )
    }
  })

  return <div className="message-list">{chat}</div>
}

export default MessageList
