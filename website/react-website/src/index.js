
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("app")
);

window.getCSRFToken = () => document.cookie.split(';').find(c => c.startsWith('csrftoken')).substring('csrftoken'.length + 1);