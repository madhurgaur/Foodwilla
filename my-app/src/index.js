import React from 'react';
import ReactDOM from 'react-dom';
// import appRouter from './App';
// import RouterProvider from "react-router-dom"
import AppLayout from './App';
import './index.css'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import AboutDeveloper from './components/AboutDeveloper';
// ReactDOM.render(<App/>,(document.getElementById('root')))


const router = createBrowserRouter([
      {
        path: "/", // show path for routing
        element: <AppLayout />, // show component for particular path
        // errorElement: <Error />, // show error component for path is different
        children: [
          // show children component for routing
          {
            path: "/",
            element: <Body/>,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/restaurant/:id",
            element: <RestaurantMenu  />,
          },
          {
            path: "/aboutDeveloper",
            element: <AboutDeveloper />,
          },
        ],
      },
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router = {router}/>);

