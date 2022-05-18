import React from 'react'
import { Link } from 'react-router-dom'
import "../stylesheets/icomoon/style.css"
import "./login.scss"

const Login: React.FC = () => {
    return (
      <div className="login">
        <div className="login_form">
          <h1>Scram Board</h1>
          <div className="login_form__email">
            <input className="login_form__input" placeholder="メールアドレス" type="email" name="email" />
          </div>
          <label>
            <input className="login_form__input" placeholder="パスワード" type="password" name="password" />
          </label>
          <div>
            <button className="login_form__loginbutton">ログイン</button>
            <div className="login_form__nopassword">
              <p><span className="icon"></span>
              パスワードを忘れた場合</p>
              <span className="icon-warning"></span>
            </div>
          </div>
        </div>

        <div className="login_registuser">
          <div className="login_noregist">アカウントを持っていない場合</div>
          <button className="login_registuser__registbutton">新規登録</button>
        </div>
      </div>
    )
}

export default Login