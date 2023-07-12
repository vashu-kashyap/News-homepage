import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyArticle from "./pages/MyArticle";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <MyArticle />
      </main>
    </>
  );
};

export default App;
