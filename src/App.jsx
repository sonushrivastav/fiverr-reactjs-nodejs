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
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/gigs",
          element:<Gigs/>
        },
        {
          path: "/gig/:id",
          element:<Gig/>
        },
        {
          path: "/orders",
          element:<Orders/>
        },
        {
          path: "/mygigs",
          element:<MyGigs/>
        },
        {
          path: "/add",
          element:<Add/>
        },

{
          path: "/messages",
          element:<Messages/>
        },
        {
          path: "/message/:id",
          element:<SingleMessage/>
        },
        
        

      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={ router} />
      
    </>
  )
}

export default App
