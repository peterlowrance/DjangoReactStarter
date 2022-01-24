
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import App from "./App";
import { EuiProvider } from '@elastic/eui';


ReactDOM.render(
  <StrictMode>
    <EuiProvider colorMode="light">
      <Provider store={store}>
        <App />
      </Provider>
    </EuiProvider>
  </StrictMode>,
  document.getElementById("app")
);

window.getCSRFToken = () => document.cookie.split(';').find(c => c.startsWith('csrftoken')).substring('csrftoken'.length + 1);