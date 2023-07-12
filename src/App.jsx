import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyArticle from "./pages/MyArticle";

const App = () => {
  return <>
    <Navbar/>
    <Home/>
    <MyArticle/>
  </>
};

export default App;
