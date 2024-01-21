import React from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import "./App.css";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Provider store={appStore}>
      <Layout />
    </Provider>
  );
};

export default App;
