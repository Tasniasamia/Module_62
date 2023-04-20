import {
    createBrowserRouter
   
  } from "react-router-dom";
import App from "../App";
import About from "../Component/About/About";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Resister from "../Component/Resister/Resister";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },{
            path:"/Resister",
            element:<Resister></Resister>,
        },{
            path:"/Login",
            element:<Login></Login>,
        },{
            path:"/About",
            element:<About></About>,
          
        }
      ]
    },
  ]);
  
  export default router;