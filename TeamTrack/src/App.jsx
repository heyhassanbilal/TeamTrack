import { useState } from "react";
import "./App.css";
import NavBar from "./Components/navBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar/>
    </>
  );
}

export default App;
