import { useState } from "react";
import "./App.css";
import LoginPage from "./Components/LoginPage";
// import NavBar from "./Components/navBar";
// import LandingPageComponent from "./Components/LandingPageComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <NavBar/> */}
      {/* <LandingPageComponent /> */}
      <LoginPage />
    </div>
  );
}

export default App;
