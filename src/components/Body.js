import Login from "./Login";
import Browser from "./Browser";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebasej.js";
import { useDispatch } from "react-redux";
import { addUser , removeUser } from "../utils/userSlice";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

const Body = () => {


    const dispatch = useDispatch();
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
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const { uid ,  email , displayName } = user;
              dispatch(addUser({ uid : uid, email: email , displayName : displayName}))
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });

    } , [])

    return (
        <div>
            <div>
                <RouterProvider router= {routeApp}/>
            </div>

        </div>

    )
}
export default Body
