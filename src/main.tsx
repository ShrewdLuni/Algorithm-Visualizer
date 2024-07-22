import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SortingPage } from './pages/Sort/SortingPage.tsx';
import { NotFoundPage } from './pages/NotFound/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SortingPage/>,
  },
  {
    path: "/error",
    element: <NotFoundPage/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
