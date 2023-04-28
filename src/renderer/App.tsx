import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Desktop from "./pages/Desktop";
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Desktop />,
        errorElement: <ErrorPage />
    },
]);

const App = () => {
    return (
        <div className="wrapper">
            <div className="absolute top-0 right-0 h-16 w-16 win-drog">7</div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default App
