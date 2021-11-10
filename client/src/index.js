import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import appReducers from "./redux/reducers/index";
// import { composeWithDevTools } from "redux-devtools-extension";


// const store = createStore(
//   appReducers,
//   composeWithDevTools(applyMiddleware(thunk))
// );
ReactDOM.render(
  
    <ContextProvider>
      <App />
    </ContextProvider>,

  document.getElementById("root")
);
