import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Layout/Home/Home';
import AuthProvider from './Providers/AuthProvider';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Detail from './Pages/Detail';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ServiceDetail from './Pages/ServiceDetail';
import Aos from 'aos';
import MainService from './Pages/MainService/MainService';
import Purchase from './Pages/Purchase';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path : '/service',
        element : <PrivateRoute><MainService></MainService></PrivateRoute>,
        loader : ()=> fetch('/service.json')
      },
      {
        path : '/purchases',
        element : <PrivateRoute><Purchase></Purchase></PrivateRoute>,
        loader : ()=> fetch('/service.json')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/detail/:id',
        element: <PrivateRoute><Detail></Detail></PrivateRoute>,
        loader: () => fetch('/info.json')
      },
      {
        path: '/serviceDetail/:id',
        element: <ServiceDetail></ServiceDetail>,
        loader: () => fetch('/service.json')
      }
    ]
  },
]);
Aos.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
