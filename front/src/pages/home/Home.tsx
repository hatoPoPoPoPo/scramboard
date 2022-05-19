import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../layout/Header';
import "../stylesheets/icomoon/style.css"
import "./home.scss"

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}

export default Home