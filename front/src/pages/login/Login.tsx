import React from 'react'
import { Link } from 'react-router-dom'
import "./login.scss"

const Login: React.FC = () => {
    return (
      <div>
        <div className="login">
          <h1>Scram Board</h1>
          <label>
            <input className="login_input" type="email" name="email" />
          </label>
          <label>
            <input className="login_input" type="password" name="password" />
          </label>
          <input type="submit" value="ログイン" />
          パスワードを忘れたユーザー
        </div>

        <div>
          アカウントを持っていないユーザー
          新規登録
        </div>
      </div>
    )
}



export default Login
