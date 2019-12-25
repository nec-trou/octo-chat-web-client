import React from 'react'
import Message from './Message'
import InfoMessage from './InfoMessage'

const MessageList = props => {
  const { messageList, currentUser } = props

  const chat = messageList.map(({ nickname, msg, type }, idx) => {
    console.log(type)
    if (type === 'info') {
      return <InfoMessage key={idx} nickname={nickname} text={msg} />
    } else {
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
    }
  })

  return <div className="message-list">{chat.reverse()}</div>
}

export default MessageList
