// MessageBox.js
import React, { Component } from "react";
import trim from "trim";

const style = {
  textBox:
    "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2",
  sendButton:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
};

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.state = {
      message: "",
    };
  }

  onChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  onKeyup(e) {
    if (e.keyCode === 13 && trim(e.target.value) !== "") {
      e.preventDefault();

      let dbCon = this.props.db.database().ref("/messages");
      dbCon.push({
        message: trim(e.target.value),
        timeStamp: Date.now()
      });
      this.setState({
        message: "",
      });
    }
  }

  sendMessage() {
    if (trim(this.state.message) !== "") {
      let dbCon = this.props.db.database().ref("/messages");
      dbCon.push({
        message: trim(this.state.message),
        timeStamp: Date.now()
      });
      this.setState({
        message: "",
      });
    }
  }

  render() {
    return (
      <div className="flex w-full justify-center">
        <form className="w-5/6">
          <textarea
            className={style.textBox}
            rows={3}
            placeholder="Type a message"
            onChange={this.onChange}
            onKeyUp={this.onKeyup}
            value={this.state.message}
          ></textarea>
        </form>
        <div className="w-1/6 text-center">
          <button onClick={this.sendMessage} className={style.sendButton}>
            <svg
              className="text-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-labelledby="sendIconTitle"
            >
              <title id="sendIconTitle">Send</title>
              <polygon points="21.368 12.001 3 21.609 3 14 11 12 3 9.794 3 2.394"></polygon>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
export default MessageBox;
