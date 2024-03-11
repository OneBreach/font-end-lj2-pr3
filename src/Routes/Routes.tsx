import { createBrowserRouter } from "react-router-dom";
import App from "../Pages/homepage/App";
import CoinDetails from "../Pages/CoinDetails/CoinDetails"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/coin-details/:id", element: <CoinDetails/>
    }
]);