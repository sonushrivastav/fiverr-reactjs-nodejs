import React from 'react'
import Home from "./pages/home/Home"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <>
        <div className='app'>
         <Navbar/>
         <Outlet/>
         <Footer/>
        </div>
       </>
     )
   }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={ router} />
      
    </>
  )
}

export default App
