import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Authlayout from '../layout/Authlayout';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = () => {
    let router=createBrowserRouter([
        {
            path:"/",
            element:<Authlayout/>,
            children:[
                    {
                        path:"",
                        element:<Login/>
                    },
                    {
                        path:"/register",
                        element:<Register/>
                    }
                ]
            ,
        }
    ]);

  return <RouterProvider  router={router}/>
}

export default Routes

