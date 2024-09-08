import { useState } from "react";
import SideBar from "./Components/SideBar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <SideBar/>
    </>
  );
}

export default App;
