import { useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import LandingPage from "./Components/Landing-Page/LandingPage";
import LoginPage from "./Components/SignInPage/Sign-Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotfound from "./Components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
