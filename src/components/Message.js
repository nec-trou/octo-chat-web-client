import React from 'react'

const Message = props => {
  const { idx, nickname, text, className } = props
  return (
    <div className={className} key={idx}>
      <span className="message-name">{nickname}:</span>
      <span className="message-text">{text}</span>
    </div>
  )
}

export default Message
