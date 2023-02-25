import React from "react";
import data from "../data.json";
import Header from "./Header";
import Nav from "./Nav";

const App = () => {
  let uniqCategory = [];
  {
    let allCategory = data.map((obj) => obj.category);
    uniqCategory = ["all", ...new Set(allCategory)];
  }
  return (
    <>
      <Header />
      <Nav category={uniqCategory} />
    </>
  );
};

export default App;
