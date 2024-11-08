import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root.jsx';
import ErrorPage from './assets/Components/ErrorPage/ErrorPage.jsx';
import Home from './assets/Components/Home/Home.jsx';
import Dashboard from './assets/Components/Dashboard/Dashboard.jsx';
import BookDetail from './assets/Components/BookDetail/BookDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader: () => fetch('booksData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
