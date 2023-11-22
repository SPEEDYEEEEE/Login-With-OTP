import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth.js';

/** import all components */
import Username from './components/Username.js';
import Password from './components/Password.js';
import Register from './components/Register.js';
import Profile from './components/Profile.js';
import Recovery from './components/Recovery.js';
import Reset from './components/Reset.js';
import PageNotFound from './components/PageNotFound.js';



/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}