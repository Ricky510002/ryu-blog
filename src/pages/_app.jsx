import "../styles/globals.css";
// import Router from 'next/router'
// import * as gtag from '../lib/gtag'

// function MyApp({ Component, pageProps }) {
//   Router.events.on('routeChangeComplete', url => gtag.pageview(url))
//   return <Component {...pageProps} />;
// }

// export default MyApp;
import App from "next/app";
import Router from "next/router";

import * as gtag from "../lib/gtag";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export default App;
