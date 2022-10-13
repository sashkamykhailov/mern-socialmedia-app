import React from "react";
import * as ReactDOMClient from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from "react-redux"
import store from './redux/store'
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <Provider store={store}>
      <BrowserRouter>
         <Routes>
          <Route path="*" element= {<App />} />
         </Routes>
       </BrowserRouter>
    </Provider>
);