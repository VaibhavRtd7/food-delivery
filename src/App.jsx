/* eslint-disable react-refresh/only-export-components */
import "./index.css";
import Header from './components/Header';
import { createBrowserRouter } from 'react-router-dom'
import About from "./components/About"
import Contact from "./components/Contact"
import Container from './components/Container'
import Error from "./pages/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';
import { lazy, Suspense } from "react"; // learn about this
// import Grocery from './components/Grocery';
import { Provider } from "react-redux";

const Grocery = lazy( () => import('./components/Grocery'))
import appStore from './utils/appStore';
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
        element: <Container />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading</h1>}> <Grocery /> </Suspense>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
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
