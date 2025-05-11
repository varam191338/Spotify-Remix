import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {username: '', password: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="login-container">
        <div className="login-card-container">
          <div className="login-layout">
            <div className="logo-container">
              <img
                src="https://res.cloudinary.com/dh1kujuf0/image/upload/v1746871407/Frame_52_b82ckk.png"
                alt="logo"
                className="logo"
              />
            </div>
            <form className="form-container" onSubmit={this.onSubmitLogin}>
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input
                type="text"
                className="input-field"
                id="username"
                value={username}
                onChange={this.onChangeUsername}
                autoComplete="username"
              />
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                className="input-field"
                id="password"
                onChange={this.onChangePassword}
                value={password}
                autoComplete="password"
              />
              <button type="submit" className="login-button">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
