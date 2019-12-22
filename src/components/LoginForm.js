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
    const { onLoginFormSubmit } = this.props

    onLoginFormSubmit(currentUsername)
  }

  render() {
    return (
      <form className="login-form">
        <input
          className="login-form__input"
          type="input"
          name="login-form__input"
          value={this.state.currentUsername}
          onInput={this.handleInput}
          placeholder="Введи свой ник и нажми Enter"
        />
      </form>
    )
  }
}

export default LoginForm
