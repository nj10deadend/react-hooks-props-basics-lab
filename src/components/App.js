import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home username="Liza" city="New York"/>
      <About linkedin="https://www.linkedin.com/in/liza/" github="https://github.com/liza"/>
      {/* <Links linkedin="https://www.linkedin.com/in/liza/" github="https://github.com/liza"/> */}
    </div>
  );
}

export default App;
