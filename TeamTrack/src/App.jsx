import { useState } from "react";
import "./App.css";
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
  { path: "/Login", element: <LoginPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
