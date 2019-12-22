import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUsername: '',
    }

    this.handleInput = this.handleInput.bind(this)
    this.submitUsername = this.submitUsername.bind(this)
  }

  handleInput(event) {
    const { value } = event.target
    this.setState({
      currentUsername: value,
    })
  }

  submitUsername(event) {
    event.preventDefault()
    const { currentUsername } = this.state
    const { onSubmit } = this.props

    onSubmit(currentUsername)
  }

  render() {
    return (
      <form onSubmit={this.submitUsername} className="login-form">
        <input
          className="login-form__input"
          type="input"
          name="login-form__input"
          value={this.state.currentUsername}
          onChange={this.handleInput}
          placeholder="Введи свой ник и нажми Enter"
        />
        <button type="submit" className="btn btn-login-submit">
          Войти в чат
        </button>
      </form>
    )
  }
}

export default LoginForm
