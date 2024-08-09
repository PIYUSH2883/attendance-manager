import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import SignIn from './component/signIn/signIn.jsx';
import SignUp from './component/signUp/index.jsx';
import Home from './component/Home/index.jsx';
import Dashboard from './component/Dashboard/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,  // This is the root of your app
  },
  {
    path: '/signIn',
    element: <SignIn />,  // SignIn component should be imported
  },
  {
    path: '/signUp',
    element: <SignUp />,  // SignUp component should be imported
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
