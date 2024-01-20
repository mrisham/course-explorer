// App.js
import React from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import "./App.css";
import StudentDashboard from "../src/components/StudentDashboard";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Provider store={appStore}>
      <Layout />
      <StudentDashboard />
    </Provider>
  );
};

export default App;
