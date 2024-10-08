import { useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage"
import LandingPageComponent from "./Components/LandingPageComponent";
import LoginPage from "./Components/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotfound from "./Components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageComponent />,
    errorElement: <PageNotfound />,
  },
  { path: "/Login-Page", element: <LoginPage /> },
  { path: "/Home-Page", element: <HomePage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
