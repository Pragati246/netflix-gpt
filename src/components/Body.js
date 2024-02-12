import Login from "./Login";
import Browser from "./Browser";
import {createBrowserRouter , RouterProvider } from "react-router-dom";

const Body = () => {
    const routeApp = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "browser",
            element : <Browser/>
        }
    ])
    return (
        <div>
            <div>
                <RouterProvider router= {routeApp}/>
            </div>

        </div>

    )
}
export default Body
