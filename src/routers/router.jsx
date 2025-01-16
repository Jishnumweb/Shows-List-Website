
import {
    createBrowserRouter,
  } from "react-router-dom";
import Userlayout from "../layouts/Userlayout";
import Homepage from "../pages/Homepage";
import Moviespage from "../pages/Moviespage";
import Seriespage from "../pages/Seriespage";
import Overview from "../pages/Overview";
import Overviewmov from "../pages/Overviewmov";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Userlayout/>,
      children:[
        {
            path: "",
            element: <Homepage/>
        },{
          path: "series",
          element: <Moviespage/>
        },{
          path: "movies",
          element: <Seriespage/>
         
        },{
          path: "movies-list/:id",
          element: <Overview/>
        },{
          path:"series-list/:id",
          element:<Overviewmov/>
        }
        
      ]

    },
  ]);