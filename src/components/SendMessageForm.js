import React, { Component } from 'react'

class SendMessageForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '',
    }

    this.handleInput = this.handleInput.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }

  handleInput(event) {
    const { value } = event.target
    this.setState({
      message: value,
    })
  }

  submitMessage(event) {
    event.preventDefault()

    const { message } = this.state
    const { onSubmit } = this.props
    onSubmit(message)
    this.setState({ message: '' })
  }

  render() {
    return (
      <form onSubmit={this.submitMessage} className="send-message-form">
        <input
          className="send-message-form__input"
          type="input"
          name="send-message-form__input"
          value={this.state.message}
          onChange={this.handleInput}
          placeholder="Введите сообщение"
        />
        <button type="submit" className="send-message-form__btn-submit">
          Отправить
        </button>
      </form>
    )
  }
}

export default SendMessageForm
