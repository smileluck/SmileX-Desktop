import React from 'react'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/";
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App
