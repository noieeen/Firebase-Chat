import '../styles/globals.css'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
