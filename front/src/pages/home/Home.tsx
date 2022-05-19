import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout';
import "../stylesheets/icomoon/style.css"
import "./home.scss"

// const Home: React.FC = () => {
export class Home extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  // state = {
  // }
  // // constructor(props){
  // //   // super(props);
  // //   // this.state = {count: 0};
  // // }

  // project_list = { no

  render() {
    return (
      <React.Fragment>
        <Layout />
      </React.Fragment>
      // <div className="home">
      //   <h1 className="home__h1"><Link to="/">Live Board</Link></h1>
      //   <ul className="home__ul">
      //     <li><Link to="/bookmark" className="home__bookmark">お気に入り</Link></li>
      //     <li><Link to="/user" className="home__user">ユーザー</Link></li>
      //   </ul>
      //   <div className="home__contents">
      //     contentsだよ
      //   </div>
      // </div>
    )
  }

}

export default Home