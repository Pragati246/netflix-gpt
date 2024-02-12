import Header from "./Header"
const Login = () => {
    return (
        <div>
            <Header/>
            <div>
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="logo"
            />
            </div>
            <form>
                <input type="text" placeholder="Email Address" className="p-2 m-2"/>
                <input type="text" placeholder="Password" className="p-2 m-2"/>
                <button className="p-4 m-4">Sign In</button>
            </form>
        </div>
    )
}

export default Login