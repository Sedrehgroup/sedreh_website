import React, { useEffect } from "react";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const System = () => {
  useEffect(() => {
    document.querySelector("html").style.overflow = "hidden";
    return () => {
      document.querySelector("html").style.overflow = "unset";
    };
  }, []);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default System;
