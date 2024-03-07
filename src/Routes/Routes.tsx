import { createBrowserRouter } from "react-router-dom";
import App from "../Pages/homepage/App";
import Test from "../Pages/Testpage/Test";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <App/>},
            {path: "test", element: <Test/>}
        ]
        
    }
]);