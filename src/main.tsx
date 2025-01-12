import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SortingPage } from './pages/SortingPage.tsx';
import { NotFoundPage } from './pages/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SortingPage/>,
  },
  {
    path: "*",
    element: <NotFoundPage/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
