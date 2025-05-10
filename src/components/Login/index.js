import {Component} from 'react'

import './index.css'

class Login extends Component {
  render() {
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
            <form className="form-container">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input type="text" className="input-field" />
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input type="password" className="input-field" />
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
