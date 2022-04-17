import Head from "../components/Head";
import React ,{Component} from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/Header";

//Pages
//import Home from './Home'
import Chat from "./Chat";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";

import { auth } from "../services/firebase.config";

const style = {};

function PrivateRoute({component:Component,authenticated,...rest}){
  return(
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/chat' />}
    />
  )
}

class Home extends Component {

constructor(){
  super()
  this.state = {
    authenticated:false,
    loading:true
  }
}

componentDidMount() {
  auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        authenticated: true,
        loading: false,
      });
    } else {
      this.setState({
        authenticated: false,
        loading: false,
      });
    }
  })
}


  render(){
    return (
      <div>
        <Header />
        <Navbar />
        <Chat />
      </div>
    );
  }

}

export default Home
