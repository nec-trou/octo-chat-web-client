import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
      <div className="send-message-form">
        <form>
          <input
            className="send-message-form__input"
            type="input"
            name="send-message-form__input"
          />
        </form>
      </div>
    )
  }
}

export default LoginForm
