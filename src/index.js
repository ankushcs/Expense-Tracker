import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
ReactDOM.render(
  <SpeechProvider appId="ebdbfcab-8315-4453-8e63-0d342b594bf4" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);

// here we are wrapping our whole application into react context
