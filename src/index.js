import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import initStore from "./store";
import { Provider } from "react-redux";
import AppContainer from "./containers/AppContainer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Create the redux store
const store = initStore();

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
