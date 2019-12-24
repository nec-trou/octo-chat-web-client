import React from 'react'

const InfoMessage = props => {
  const { idx, nickname, text } = props
  return (
    <div className={'info-message'} key={idx}>
      <span>{nickname}:</span>
      <span>{text}</span>
    </div>
  )
}

export default InfoMessage
