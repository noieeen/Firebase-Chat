import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin,signInWithGoogle } from "../helpers/auth";

import Image from 'next/image'
import FavIcon from "../public/favicon.ico";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn(){
    try{
      await signInWithGoogle()
    }catch(error){
      this.setState({error:error.message})
    }
  }

  render() {
    return (
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <a className="inline-block mb-6" href="/">
                <Image className="h-16" src={FavIcon} alt="" />
              </a>
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">Sign In</h3>
              <p className="text-lg text-coolGray-500 font-medium">Chatty</p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  for=""
                >
                  Email
                </label>
                <input
                  className=" block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  for=""
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  type="password"
                  name="password"
                  placeholder="••••••••••"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>
              <div>{this.state.error ? <p>{this.state.error}</p> : null}</div>

              <button
                className="inline-block py-3 px-7 mb-6 w-full text-base text-blue-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="submit"
              >
                Sign In
              </button>
              <div className='mt-2'>
                <p className="text-center">
                  <span className="text-xs font-medium">Or</span>
                  <button
                    className="inline-block text-xs font-medium text-blue-500 hover:text-blue-600 hover:underline"
                    onClick={this.googleSignIn}
                  >
                    Sign In with Google
                  </button>
                </p>
              </div>
              <p className="text-center">
                <span className="text-xs font-medium">Have an account?</span>
                <a
                  className="inline-block text-xs font-medium text-blue-500 hover:text-blue-600 hover:underline"
                  href="/Signup"
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
