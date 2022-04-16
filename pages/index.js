import Head from "../components/Head";
import Image from "next/image";

import Header from "../components/Header";
import MessageList from "../components/MessageList";
import MessageBox from "../components/MessageBox";
import Message from "../components/Message";

import firebase from "../firebase.config";

const style = {
  html:"py-24 md:py-32 bg-white",
  container: "container px-4 mx-auto",
  main: "",
};

export default function Home() {
  return (
    <div className={style.html}>
      <Head />

      <div className={style.container}>
        <div className={style.main}>
          <Header title="Chat App" />
          <MessageList db={firebase} />
        </div>
        <div className="mt-16" >
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
}
