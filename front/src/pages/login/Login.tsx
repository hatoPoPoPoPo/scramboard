import React from 'react'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
    return (
      <div>
        <div className="login">
          <h1>Scram Board</h1>
          <label>
            メールアドレス
            <input className="login__email" type="text" name="email" />
          </label>
          <label>
            パスワード
            <input className="login__password" type="text" name="password" />
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