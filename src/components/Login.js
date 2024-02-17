import Header from "./Header";
import { useState , useRef } from "react";
import { checkValidaData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebasej.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignInForm , setIsSignInForm ] = useState(true);
    const [errorMessage , setErrorMessage ] = useState(null)
    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);

    const handleButttonClick = () => {
        //validate form data
        // checkValidaData(email , password)
        // console.log(email.current.value);
        // console.log(password.current.value);
        const message = checkValidaData(email.current.value, password.current.value);
        // console.log(message);
        if(message) return;

         //sign in /sign up
         if(!isSignInForm){
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browser")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessageDisplay = error.message;
                    setErrorMessage(errorCode + "-" + errorMessageDisplay)
                    console.log(errorMessage);
                    // ..
                });
         }
         else {
            //sign in logic
            signInWithEmailAndPassword(auth , email.current.value , password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    if(!userCredential){
                        console.log("userName or password is inncorrect")
                    }
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browser")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessageDisplay = error.message;
                    setErrorMessage(errorCode );
                    if(errorCode === "auth/too-many-requests"){
                        setErrorMessage("Too many Attempts!! Please wait.")
                    }

                });

         }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    
    return (
        <div>
            <Header/>
            <div className="absolute">
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="logo"
            />
            </div>
            <form onSubmit={(e) =>
                e.preventDefault()
            } className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4 w-full">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>)}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
                <input ref={password} type="text" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
                {
                    errorMessage 
                    ? (<><button className="p-4 my-4 bg-red-700 w-full rounded-lg cursor-not-allowed"  onClick={handleButttonClick} >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className=" font-bold text-red-700 text-2xl  ">{errorMessage}</p> </> )
                    : <button className="p-4 my-4 bg-red-700 w-full rounded-lg"  onClick={handleButttonClick} >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                }


        
                <h3>Forgot Password?</h3>
                <p className="py-4" onClick={toggleSignInForm}>
                    {
                        isSignInForm
                        ? "New to netflix? Sign Up Now"
                        : "Already registered ? Sign In Now"
                    }
                </p>
            </form>
        </div>
    )
}
export default Login