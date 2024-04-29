import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.tsx';
import PostEngagement from './pages/PostEngagement.tsx';
import EditPostEngagement from './pages/EditPostEngagement.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post-engagements",
    element: <PostEngagement />
  },
  {
    path: '/post-engagements/:id/edit',
    element: <EditPostEngagement />
  },
  { path: "*", element: <ErrorPage /> }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>)
