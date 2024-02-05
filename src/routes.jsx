import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";

const routes = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <p>Hi</p>,
            },
        ]
    }
]);

export default routes;