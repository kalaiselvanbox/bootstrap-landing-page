import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavigationBar from './components/pages/NavigationBar.jsx'
import Home from './components/pages/Home.jsx'
import CharacterData from './components/pages/CharacterData.jsx'
import LoginPage from './components/pages/LoginPage.jsx'
import RegisterPage from './components/pages/RegisterPage.jsx'
import ErrorElement from './components/error/ErrorElement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "character",
        element: <CharacterData />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
