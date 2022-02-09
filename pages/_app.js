import { Provider } from "react-redux";
import store from "../store";

import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/wrapper.css";
import "../styles/add-post.css";
import "../styles/form.css";
import "../styles/post.css";

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Component {...pageProps} />;
  </Provider>
  )
}

export default MyApp;
