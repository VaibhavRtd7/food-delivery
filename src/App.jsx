/* eslint-disable react-refresh/only-export-components */
import "./index.css";
import { createBrowserRouter } from 'react-router-dom'
import Error from "./pages/Error";
import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react"; // learn about this

import { Provider } from "react-redux";
import appStore from './utils/appStore';


import Header from './components/Header';
const Container = lazy ( () => import('./components/Container'))
const AboutUS = lazy(() => import("./components/About") )
const RestaurantMenu = lazy (() => import('./components/RestaurantMenu'))
const Grocery = lazy(() => import('./components/Grocery'))

import Cart from "./components/Cart";
import Login from "./pages/Login";
import Signin from "./pages/Signin";


const App = () => {
  return (
   
   <Provider store={appStore}>
      <div className="">
          <Header />
          <Outlet />
      </div>
   </Provider> 
  );
}


const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <App />, 
    children : [
      {
        path: "/",
        element:  <Suspense>  <Container /> </Suspense>
      },

      {
        path: "/cart",
        element: <Cart />
      },

      {
        path: "/about",
        element: <Suspense> <AboutUS /> </Suspense> 
      },

      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading</h1>}> <Grocery /> </Suspense>
      },
      {
        path: "/restaurant/:id",
        element: <Suspense> <RestaurantMenu /> </Suspense>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signin />
      }

    ],
    errorElement : <Error />
  }

])

export default appRouter;