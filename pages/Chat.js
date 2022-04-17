import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import MessageList from "../components/MessageList";
import MessageBox from "../components/MessageBox";
import Message from "../components/Message";

import firebase from "../services/firebase.config";

const style = {
  html: "py-24 md:py-32 bg-white",
  container: "container px-4 mx-auto",
  main: "",
};

const Chat = () => {
  return (
    <div className={style.html}>

      <div className={style.container}>
        <div className={style.main}>
          <MessageList db={firebase} />
        </div>
        <div className="mt-16">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );

}

export default Chat
