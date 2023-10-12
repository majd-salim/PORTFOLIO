import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Projects from './components/Projects';
import "./index.css"
import "./reset.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />, 
    errorElement: <NotFound />,
    children: [
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { index: true , element: <Home /> },
      { path: "contact", element: <Contact /> }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);